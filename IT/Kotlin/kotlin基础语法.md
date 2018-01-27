## 基本语法

### [属性和字段](https://www.kotlincn.net/docs/reference/properties.html)
* 声明一个属性的完整语法是

```kotlin
var <propertyName>[: <PropertyType>] [= <property_initializer>]
    [<getter>]
    [<setter>]

var stringRepresentation: String
    get() = this.toString()
    set(value) {
        setDataFromString(value) // 解析字符串并赋值给其他属性
    }
```
> 其初始器（initializer）、getter 和 setter 都是可选的。属性类型如果可以从初始器 （或者从其 getter 返回值，如下文所示）中推断出来，也可以省略。

* 幕后字段
  Kotlin 中类不能有字段。然而，当使用自定义访问器时，有时有一个幕后字段（backing field）有时是必要的。为此 Kotlin 提供 一个自动幕后字段，它可通过使用 `field` 标识符访问。
```kotlin
var counter = 0 // 此初始器值直接写入到幕后字段
  set(value) {
    if (value >= 0)
      field = value
  }
// 如果属性至少一个访问器使用默认实现，或者自定义访问器通过 field 引用幕后字段，将会为该属性生成一个幕后字段。
```
---
### [函数](https://www.kotlincn.net/docs/reference/functions.html)

* 一般用法
```kotlin
  var result = double(2) //调用函数使用传统的方法
  Sample().foo() // 创建类 Sample 实例并调用 foo(成员方法)
```

* 中缀表示
    - 他们是成员函数或[扩展函数](https://www.kotlincn.net/docs/reference/extensions.html)
    - 他们只有一个参数
    - 他们用 `infix` 关键字标注
```kotlin
infix fun Int.shl(x: Int): Int {
…… // 给 Int 定义扩展
}
1 shl 2 // 用中缀表示法调用扩展函数
1.shl(2) // 等同于这样
```

> PS: 由于扩展没有实际的将成员插入类中，因此对扩展属性来说 幕后字段是无效的。这就是为什么扩展属性不能有 初始化器。

---
### [类和继承](https://www.kotlincn.net/docs/reference/classes.html)

* 构造函数
>在 Kotlin 中的一个类可以有一个主构造函数和一个或多个次构造函数。主 构造函数是类头的一部分：它跟在类名（和可选的类型参数）后。

```kotlin
class Person constructor(firstName: String) {
}
//如果主构造函数没有任何注解或者可见性修饰符，可以省略这个 constructor
class Person(firstName: String) { 
}
// 如果构造函数有注解或可见性修饰符，这个 constructor 关键字是必需的
class Customer public @Inject constructor(name: String) { …… }
```
> 主构造函数不能包含任何的代码。初始化的代码可以放 到以 init 关键字作为前缀的初始化块（initializer blocks）
```kotlin
class Customer(name: String) {
    init {
        logger.info("Customer initialized with value ${name}")
    }
}
```
* 创建类实例
  要创建一个类的实例，我们就像普通函数一样调用构造函数：
```kotlin
val invoice = Invoice()
val customer = Customer("Joe Smith")
// 注意 Kotlin 并没有 new 关键字。
```

* 继承
  在 Kotlin 中所有类都有一个共同的超类Any，这对于没有超类型声明的类是默认超类：
```java
  class Example // 从 Any 隐式继承
```
Any 不是 java.lang.Object；尤其是，它除了equals()、hashCode()和toString()外没有任何成员。 
**如果类没有主构造函数，那么每个次构造函数必须 使用 super 关键字初始化其基类型**，或委托给另一个构造函数做到这一点。 注意，在这种情况下，不同的次构造函数可以调用基类型的不同的构造函数：

```kotlin
  class MyView : View {
    constructor(ctx: Context) : super(ctx)
    constructor(ctx: Context, attrs: AttributeSet) : super(ctx, attrs)
  }
```
```java
  //类上的 open 标注与 Java 中 final 相反，它允许其他类 从这个类继承。默认情况下，在 Kotlin 中所有的类都是 final
  open class Base(p: Int)
  class Derived(p: Int) : Base(p)
```

---
### [对象表达式和对象声明](https://www.kotlincn.net/docs/reference/object-declarations.html#伴生对象)
* 对象表达式
```kotlin
  //要创建一个继承自某个（或某些）类型的匿名类的对象，我们会这么写：
  window.addMouseListener(object : MouseAdapter() {
    override fun mouseClicked(e: MouseEvent) {// ……} 
    override fun mouseEntered(e: MouseEvent) {// ……}
  })
  //如果超类型有一个构造函数，则必须传递适当的构造函数参数给它。 多个超类型可以由跟在冒号后面的逗号分隔的列表指定：
  open class A(x: Int) {
    public open val y: Int = x
  }
  interface B {……}
  val ab: A = object : A(1), B {
    override val y = 15
  }
  //任何时候，如果我们只需要“一个对象而已”，并不需要特殊超类型，那么我们可以简单地写：
  fun foo() {
    val adHoc = object {
        var x: Int = 0
        var y: Int = 0
    }
    print(adHoc.x + adHoc.y)
  }
```

>匿名对象可以用作只在本地和私有作用域中声明的类型。如果你使用匿名对象作为公有函数的 返回类型或者用作公有属性的类型，那么该函数或属性的实际类型 会是匿名对象声明的超类型，如果你没有声明任何超类型，就会是 Any。在匿名对象 中添加的成员将无法访问。
```kotlin
class C {
    // 私有函数，所以其返回类型是匿名对象类型
    private fun foo() = object {
        val x: String = "x"
    }
    // 公有函数，所以其返回类型是 Any
    fun publicFoo() = object {
        val x: String = "x"
    }
    fun bar() {
        val x1 = foo().x        // 没问题
        val x2 = publicFoo().x  // 错误：未能解析的引用“x”
    }
}
```
就像 Java 匿名内部类一样，对象表达式中的代码可以访问来自包含它的作用域的变量。 （与 Java 不同的是，这不仅限于 final 变量。）

```kotlin
fun countClicks(window: JComponent) {
    var clickCount = 0
    var enterCount = 0
    window.addMouseListener(object : MouseAdapter() {
        override fun mouseClicked(e: MouseEvent) {
            clickCount++
        }
        override fun mouseEntered(e: MouseEvent) {
            enterCount++
        }
    })
}```

* 对象声明
  ```kotlin
  object DataProviderManager {
    fun registerDataProvider(provider: DataProvider) {
        // ……
    }
    val allDataProviders: Collection<DataProvider>
        get() = // ……
  }
```

  这称为对象声明。并且它总是在 object 关键字后跟一个名称。 就像变量声明一样，对象声明不是一个表达式，不能用在赋值语句的右边。要引用该对象，我们直接使用其名称即可：**DataProviderManager.registerDataProvider(……)**
  >注意：对象声明不能在局部作用域（即直接嵌套在函数内部），但是它们可以嵌套到其他对象声明或非内部类中。
* #### [伴生对象](https://www.kotlincn.net/docs/reference/object-declarations.html#伴生对象)
  与 Java 或 C# 不同，**在 Kotlin 中类没有静态方法**。在大多数情况下，它建议简单地使用 包级函数。
  类内部的对象声明可以用 *companion* 关键字标记：

```kotlin
  class MyClass {
      companion object Factory {
          fun create(): MyClass = MyClass()
      }
  }
```

  >请注意，即使伴生对象的成员看起来像其他语言的静态成员，在运行时他们 仍然是真实对象的实例成员
```kotlin
  interface Factory<T> {
    fun create(): T
  }
  class MyClass {
    ompanion object : Factory<MyClass> {
        override fun create(): MyClass = MyClass()
    }
  }
```

  >当然，在 JVM 平台，如果使用 @JvmStatic 注解，你可以将伴生对象的成员生成为真正的 静态方法和字段。更详细信息请参见Java 互操作性一节 。

  对象表达式和对象声明之间有一个重要的语义差别：
  >1.对象表达式是在使用他们的地方立即执行（及初始化）的
  >2.对象声明是在第一次被访问到时延迟初始化的
  >3.伴生对象的初始化是在相应的类被加载（解析）时，与 Java 静态初始化器的语义相匹配