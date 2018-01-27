### 使用方法
Rxlifecycle的`常规`使用方法很简单:继承使用。
1. `Activity`和`Fragment`继承对应的父类`RxActivity`和`RxFragment`
2. 在子类中的Rxjava流中调用**compose(bindToLifecycle())**即可;
```java
        //伪代码展示下使用
    RetrofitHelper.getApi().login()//登陆接口
            .compose(this.<BaseModel<List<BasicData>>>bindToLifecycle())//绑定生命周期
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(new Acition...);
```

---
### 绑定的原理
>注意：
1. 我是以Rxjva1 rxlifecycle1 来写的，与2相比原理是差不多的。个别Rxjva操作符可能不一样
2. 代码中多余的注解，null检查会去掉，方便阅读
### 关键点1：核心对象 LifecycleSubject
**LifecycleSubject** 这个对象类型是`BehaviorSubject<ActivityEvent>` 可以把它看成是一个桥梁或者代理,它可以转发它收到(Observe)的数据，它在`RxAppCompatActivity`子类的每一个生命周期都发出一个`ActivityEvent`事件
```java
public abstract class RxAppCompatActivity extends AppCompatActivity implements LifecycleProvider<ActivityEvent> {
    //核心对象
    private final BehaviorSubject<ActivityEvent> lifecycleSubject = BehaviorSubject.create();
    public final Observable<ActivityEvent> lifecycle() {
        return lifecycleSubject.asObservable();
    }

    //绑定生命周期（可以手动控制绑定到哪一个生命周期）
    public final <T> LifecycleTransformer<T> bindUntilEvent(@NonNull ActivityEvent event) {
        return RxLifecycle.bindUntilEvent(lifecycleSubject, event);
    }
    //绑定Activity生命周期(这个绑定的周期取决于你的Rx流是在什么时候执行的，比如你在Oncreat执行绑定，那么就会在onDestroy取消整个订阅)
    public final <T> LifecycleTransformer<T> bindToLifecycle() {
        return RxLifecycleAndroid.bindActivity(lifecycleSubject);
    }
    //每个生命周期lifecycleSubject都会发出一个对应的ActivityEvent事件
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        lifecycleSubject.onNext(ActivityEvent.CREATE);
    }
    protected void onStart() {
        super.onStart();
        lifecycleSubject.onNext(ActivityEvent.START);
    }
    protected void onResume() {
        super.onResume();
        lifecycleSubject.onNext(ActivityEvent.RESUME);
    }
    protected void onPause() {
        lifecycleSubject.onNext(ActivityEvent.PAUSE);
        super.onPause();
    }
    protected void onStop() {
        lifecycleSubject.onNext(ActivityEvent.STOP);
        super.onStop();
    }
    protected void onDestroy() {
        lifecycleSubject.onNext(ActivityEvent.DESTROY);
        super.onDestroy();
    }
}
```
### 关键点2：bindToLifecycle()调用顺序
一般我们都是不指定生命周期绑定，此时调用顺序是 **RxLifecycleAndroid** 接受到 **LifecycleSubject** 发出`ActivityEvent`事件,并提供一个默认的方法 `ACTIVITY_LIFECYCLE` 在传递到**RxLifecycle** 的`bind()`方法中

---
**RxLifecycleAndroid**
```java
    public static <T> LifecycleTransformer<T> bindActivity(@NonNull final Observable<ActivityEvent> lifecycle) {
        return bind(lifecycle, ACTIVITY_LIFECYCLE); //ACTIVITY_LIFECYCLE是一个默认的方法
        //注意这个bind方法是在RxLifecycle中的
    }
    
     // 这个方法的含义是判断绑定的时间：如果是在Create中绑定的，那么就返回DESTROY，就是说会在onDestroy方法取消整个流的订阅
    private static final Func1<ActivityEvent, ActivityEvent> ACTIVITY_LIFECYCLE =
        new Func1<ActivityEvent, ActivityEvent>() {
            @Override
            public ActivityEvent call(ActivityEvent lastEvent) {
                switch (lastEvent) {
                    case CREATE:// CREATE绑定 -> DESTROY取消整个流的订阅
                        return ActivityEvent.DESTROY;
                    case START: // START绑定 -> STOP取消整个流的订阅
                        return ActivityEvent.STOP;
                    case RESUME: // RESUME绑定 -> PAUSE取消整个流的订阅
                        return ActivityEvent.PAUSE;
                    case PAUSE: // PAUSE绑定 -> STOP取消整个流的订阅
                        return ActivityEvent.STOP;
                    case STOP: // STOP绑定 -> DESTROY取消整个流的订阅
                        return ActivityEvent.DESTROY;
                    case DESTROY: // DESTROY -> 抛出异常（后面会处理这个异常，也会取消整个流的订阅）
                        throw new OutsideLifecycleException("Cannot bind to Activity lifecycle when outside of it.");
                    default:
                        throw new UnsupportedOperationException("Binding to " + lastEvent + " not yet implemented");
                }
            }
        };
```

---
**RxLifecycle**
```java

    public static <T, R> LifecycleTransformer<T> bind(@Nonnull Observable<R> lifecycle,
                                                      @Nonnull final Func1<R, R> correspondingEvents) {

        // 注意这个返回的对象是个 Transformer对象暂且叫它小R
        // 还要注意 lifecycle.share() 这里挖个坑 大家尝试自己填一下
        return new UntilCorrespondingEventObservableTransformer<>(lifecycle.share(), correspondingEvents);
    }
    
    
```
参数一 `lifecycle`：**Lifecycle** 是 `BehaviorSubject<ActivityEvent> LifecycleSubject` 在每个生命周期发出的ActivityEvent事件，
参数二 `correspondingEvents`：是上面的那个 **ACTIVITY_LIFECYCLE** 方法
返回对象 `UntilCorrespondingEventObservableTransformer`： 便于理解就叫它 **小R** 之后会用它回掉方法 `Call` 。这个名字又臭又长，实际上它就是一个 Rxjava 的 Observable 类中`Transformer`接口的子类接口`LifecycleTransformer`的某一个具体实现类
```java
  //onCreate LifecycleSubject对象发出了一个 ActivityEvent.CREATE 事件
  protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        lifecycleSubject.onNext(ActivityEvent.CREATE);//参数一
    }
```

---
### 关键点3：Transformer对象回调
之前的绑定返回了一个Transformer对象（**小R**），而在`Rxjava`的源码`Observable`中 **compose** 会调用 `Transformer`的 `call(Observable<T> source)`方法,这个是为什么我们使用Rxlife绑定生命周期要用**compose**。另外还记得这个source 对象是什么吗?
```java
    // compose 调用Transformer接口实现类的 call 方法 
    public <R> Observable<R> compose(Transformer<? super T, ? extends R> transformer) {
        return ((Transformer<T, R>) transformer).call(this);//调用Transformer call 方法 
    }
    public interface Transformer<T, R> extends Func1<Observable<T>, Observable<R>> {
       // 虽然这里没有任何实现，但是父类 Func1 接口有一个 call 方法
    }
```
之前返回的那个 **小R** 的回调**call**方法
```java
  @Override
    public Observable<T> call(Observable<T> source) {
        return source.takeUntil(takeUntilCorrespondingEvent(sharedLifecycle, correspondingEvents));
    }
```

---
### 关键点4：取消订阅判断
之前的 **小R** 在`call` 方法里传入了一个 `source` 对象,这个对象还记得吗，难道是最开始 `RxAppCompatActivity`中的核心对象`BehaviorSubject<ActivityEvent> LifecycleSubject`吗，但其实好像不是，之前挖了个坑，`lifecycle.share()` 方法还记得吗?!，快拉上去看看，那个就是Source 。不过这些都不是关键，关键是在`takeUntilCorrespondingEvent()`这个方法里

```java
     /**
     * 取得当前绑定事件对应取消订阅的事件,进行判断
     * @param lifecycle 之前的坑
     * @param correspondingEvents 也就是上面的 ACTIVITY_LIFECYCLE 方法
     */
     static <T> Observable<Boolean> takeUntilCorrespondingEvent(@Nonnull final Observable<T> lifecycle,
                                                               @Nonnull final Func1<T, T> correspondingEvents) {
        return Observable.combineLatest(
            lifecycle.take(1).map(correspondingEvents),
            lifecycle.skip(1),
            new Func2<T, T, Boolean>() {
                @Override
                public Boolean call(T bindUntilEvent, T lifecycleEvent) {
                    return lifecycleEvent.equals(bindUntilEvent);
                }
            })
            .onErrorReturn(Functions.RESUME_FUNCTION)
            .takeFirst(Functions.SHOULD_COMPLETE);
    }
```
**CombineLatest** 操作符是观察2个被观察者，任何一个变化就会执行 **Func2()**
第一个Observable `lifecycle.take(1)`.map(correspondingEvents) 这个在绑定的时候其实就定死了。经过 correspondingEvents这个方法（就是之前的ACTIVITY_LIFECYCLE）的变换操作 发送过来的ActivityEvent.CREATE事件变成了 ActivityEvent.DESTROY
第二个Observable 其实就是最新发过来的 `ActivityEvent` 事件
**Fun2** 就是比较那个对象是否相同，如果最新的事件是目标事件那么就取消订阅

### 后记
当然还有些后面还有错误处理，边界处等理，这个就自己看吧，主要实现原理到这儿就差不多了，
星期五马上下班了，就到这儿了。其实难点主要是Rxjava各种操作符，其实我也用的不多。大家也边看边查嘛。

