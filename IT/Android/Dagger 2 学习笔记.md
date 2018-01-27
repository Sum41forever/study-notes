
## 导图/计划/工具
* 思维导图
![思维导图](https://leanote.com/api/file/getImage?fileId=58e3509cab64413a3300c1e5)

* 学习计划
![学习计划](https://leanote.com/api/file/getImage?fileId=58e3509cab6441377900c3c2)

* 使用工具
    * **XMind**（思维导图 `PC,MAC`）嫌麻烦可以用在线工具 [processon](https://www.processon.com/)
    * **滴答清单**（任务规划 `全平台`）
    * **番茄Todo**（时间管理 `Android`）Mac,Ios推荐这个`番茄土豆`
    * **蚂蚁笔记** （笔记 + Blog `全平台`）

---
## What
* Dagger 2 是什么
    + 官方版：
Dagger is a fully `static`, `compile-time` [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) frameworkfor both *Java* and *Android*. It is an adaptation of an earlier version created by [Square](http://square.github.io/) and now maintained by [Google](https://opensource.google.com/projects/dagger).

    + 极简版：
Dagger 2 是一个受 *Guice* 启发，基于 *JSR-330* 标准的 **依赖**, **注入**框架，在`编译期`间自动生成代码，负责`依赖对象`的`创建` 。[Java依赖注入标准（JSR-330）简介](http://blog.csdn.net/dl88250/article/details/4838803)

---
* Dagger 2 是为了解决什么问题

    进一步 *解耦* 和方便 *测试*，我们会使用 *依赖注入* 的方式 *构建对象*
 + `依赖倒置`让复杂项目依赖关系变得简单（解耦）
 + `对象注入`让复杂对象的生命周期自动管理（方便测试）
    <br/>觉得很抽象，理解不了没关系，一个地方只做一件事情，这个地方只是说明解决什么问题，具体原理后面会详细讲，把一个大的，难的的事件，原理细分开，各个击破。

---
* 同类型依赖注入（DI）框架
    + [Dagger 2](https://github.com/google/dagger)
    + [RoboGuice](https://github.com/roboguice/roboguice)
    + [Guice](https://github.com/google/guice)
    + [ButterKnife](https://github.com/JakeWharton/butterknife)

---
## Why
* Dagger 2优点
     + 编译期生成代码，生成的代码像手写的一样。而且如果有错误会在编译期报出。
     + 错误可追踪
     + 易于调试。
<br/>
* Dagger 2 缺点
    + 缺少灵活性，很多代码要按照既定的规则写
    + 没有动态机制。

    > 理解小Tips：
<font color=#15a2b5 size=4 face="黑体">Dagger 1</font>:
0. <font color=#1e6bc3 size=4 face="黑体">Multiple injection points: dependencies, being injected.</font>
0. <font color=#1e6bc3 size=4 face="黑体">Multiple bindings: dependencies, being provided.</font>
0. <font color=#1e6bc3 size=4 face="黑体">Multiple modules: a collection of bindings that implement a feature.</font>
0. <font color=#1e6bc3 size=3 face="黑体">Multiple object graphs: a collection of modules that implement a scope.</font>
<font color=#333399 size=3 face="黑体">在编译的时候实行绑定，用到了反射机制。这个反射不是用来实例化对象的，而是用于图的构成。Dagger会在运行的时候去检测是否一切都正常工作，所以使用的时候会付出一些代价：偶尔会无效和调试困难。</font>

    > <font color=#15a2b5 size=4 face="黑体">Dagger 2</font>:
0. <font color=#1e6bc3 size=4 face="黑体">再也没有使用反射：图的验证、配置和预先设置都在编译的时候执行。</font>
0. <font color=#1e6bc3 size=4 face="黑体">容易调试和可跟踪：完全具体地调用提供和创建的堆栈</font>
0. <font color=#1e6bc3 size=4 face="黑体">更好的性能：谷歌声称他们提高了13%的处理性能
0. <font color=#1e6bc3 size=4 face="黑体">代码混淆：使用派遣方法，就如同自己写的代码一样</font>
0. <font color=#333399 size=3 face="黑体">Dagger2 没用反射所以没有动态机制。这就是为啥没有灵活性</font>

* Dagger 2 使用适合场景
    ```
    A a = new A();
    B b = new B(a);

    C c = new C(a,b);
    D d = new D(c);
    E e = new E(a,b,d);
    ```
    + `依赖复杂`，高层抽象依赖底层实现，一旦实现变化，上层也需大改！
    + `创建对象复杂`，如上图当构建一个对象还要构建其他的对象,且其他对象也复杂,例如：需要考虑 *创建顺序*, *生命周期*, *是否为单例* 等


---
## How
* 思想与原理
    + 依赖倒置：[依赖倒置原则详解（DIP）](http://www.jianshu.com/p/88ab74ed016b)
    + 对象注入：[滴滴 Trinea - 依赖注入原理](https://github.com/android-cn/blog/tree/master/java/dependency-injection)
<br/>

* Gradle配置

```java
apply plugin: 'com.neenbedankt.android-apt'

buildscript {
  repositories {
    jcenter()
  }
  dependencies {
    classpath 'com.neenbedankt.gradle.plugins:android-apt:1.4'
  }
}

android {
  ...
}

dependencies {
  apt 'com.google.dagger:dagger-compiler:2.0'
  compile 'com.google.dagger:dagger:2.0'
  provided 'javax.annotation:jsr250-api:1.0'

  ...
}
```
---
* 注解含义

>0. **@Inject**: 通常在`需要依赖`的`地方`使`用`这个注解。换句话说，*你用它告诉Dagger这个类或者字段需要依赖注入*。这样，Dagger就会构造一个这个类的实例并满足他们的依赖。
<br/>
>0. **@Module**: `Modules`类`里`面的`方法`专门`提供依赖`，所以我们定义一个类，用@Module注解，*这样Dagger在构造类的实例的时候，就知道从哪里去找到需要的依赖*。modules的一个重要特征是它们设计为分区并组合在一起（比如说，在我们的app中可以有多个组成在一起的modules）。
<br/>
>0. **@Provide**: 在`modules中`，我们`定义`的`方法`是`用`这个注解，*以此来告诉Dagger我们想要构造对象并提供这些依赖*。
<br/>
>0. **@Component**: `Components`从根本上来说就`是`一个`注入器`，它的主要`作用`就`是` `连接` `@Inject`和`@Module`这两个部分。 Components可以提供所有定义了的类型的实例.比如：
我们必须用@Component`注解`一个`接口`然后`列出`所有的`@Modules` `组成`该`组件`，如 果缺失了任何一块都会在编译的时候报错。所有的组件都可以通过它的modules知道依赖的范围。
<br/>
>0. **@Scope**: Scopes可是非常的有用，*Dagger2可以通过自定义注解限定注解作用域*。后面会演示一个例子，这是一个非常强大的特点，因为就如前面说的一样，*没必要让每个对象都去了解如何管理他们的实例*。在scope的例子中，我们用自定义的`@PerActivity`注解一个类，所以`这个`对象`存活时间` 就和 `activity`的`一样`。**简单来说就是我们可以定义所有范围的粒度**(@PerFragment, @PerUser, 等等)。
<br/>
>0. **Qualifier**: 当类的类型不足以鉴别一个依赖的时候，我们就可以使用这个注解标示。例如：在Android中，我们会需要不同类型的context，所以我们就可以定义 qualifier注解“**@ForApplication**”和“**@ForActivity**”，这样当注入一个context的时候，我们就可以告诉 Dagger我们想要哪种类型的context。

---

* Shut up and show me the code!
![Dagger2代码演示01](http://onlutj7dy.bkt.clouddn.com/dagger2%E6%BC%94%E7%A4%BA%E4%BB%A3%E7%A0%8101.png)
<br/>
可以看出，上面的对象创建非常复杂。解决这个问题的办法是使用依赖注入框架。我们要避免像上面这样引用代码：这个类不能涉及对象的创建和依赖的提供. 那我们该怎么做呢，当然是使用Dagger2，我们先看看结构图：

![Dagger2结构图](http://onlutj7dy.bkt.clouddn.com/Dagger2%E7%BB%93%E6%9E%84%E5%9B%BE.png?imageView2/2/w/360)

Application Component:生命周期跟Application一样的组件。可注入到AndroidApplication和BaseActivity中类中。

```java
@Singleton // Constraints this component to one-per-application or unscoped bindings.
@Component(modules = ApplicationModule.class)
public interface ApplicationComponent {
  void inject(BaseActivity baseActivity);

  //Exposed to sub-graphs.
  Context context();
  ThreadExecutor threadExecutor();
  PostExecutionThread postExecutionThread();
  UserRepository userRepository();
}
```
这个组件使用了@Singleton注解，使其保证唯一性。 也许你会问为什么我要将context和其他成员暴露出去。这正是Dagger中 components工作的重要性质：如果你不想把modules的类型暴露出来，那么你就只能显示地使用它们。在这个例子中，我把这些元素暴露给子图， 如果你把他们删掉，编译的时候就会报错。

---
## 参考文档
[Google Dagger 2 官方文档](https://google.github.io/dagger/)
[Tasting Dagger 2 on Android](https://fernandocejas.com/2015/04/11/tasting-dagger-2-on-android/)
[CSDN - TIANWENJU：Dagger2详解(原理)](http://blog.csdn.net/a15286856575/article/details/53156774?locationNum=2&fps=1)
[简书 - 雨雪纷飞：面向对象设计-依赖倒置原则（DIP）](http://www.jianshu.com/p/88ab74ed016b)
[简书 - AItsuki：Dagger2 最清晰的使用教程](http://www.jianshu.com/p/24af4c102f62)
[简书 - jessyan：为什么要把Dagger2,MVP以及Rxjava引入项目中?](http://www.jianshu.com/p/91c2bb8e6369)
