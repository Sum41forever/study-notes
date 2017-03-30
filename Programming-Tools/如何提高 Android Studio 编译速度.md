

---
# 0. 为什么AS编译会那么慢
> 1. grdle构建的Task任务太多
2. multiDexEnabled问题
3. 第三方依赖太多 （最好用Jcenter作为中央仓库）

---

# 1. 不让Gradle执行过多task
对Gradle不熟悉？看看这儿 [Gradle 完整指南（Android） )](http://www.jianshu.com/p/9df3c3b6067a)

```java
android{
....
   tasks.whenTaskAdded { task ->
        if (task.name.contains("lint")
               //如果instant run不生效，把clean这行干掉
                ||task.name.equals("clean")
               //如果项目中有用到aidl则不可以舍弃这个任务
                ||task.name.contains("Aidl")
                //用不到测试的时候就可以先关闭
                ||task.name.contains("mockableAndroidJar")
                ||task.name.contains("UnitTest")
                ||task.name.contains("AndroidTest")
                  //用不到NDK和JNI的也关闭掉
                || task.name.contains("Ndk")
                || task.name.contains("Jni")
        ) {
                     task.enabled = false
        }
    }
}
```
---

# 2. 修改android studio配置
在android studio的配置中，开启`offline`模式，以及修改配置。实际上的配置和上面的一大段一样，主要是在这个地方配置的只会在ide构建的时候生效，命令行构建不会生效。

命令行构建 基于下面的配置，命令行构建时在命令后面加上这个参数即可 `--daemon` `--parallel` `--offline`。
![AS1](https://leanote.com/api/file/getImage?fileId=587208beab6441236e01579c))

![图片标题](https://leanote.com/api/file/getImage?fileId=58720892ab6441209e016732)

---

# 3. 引入依赖库时使用aar
Android Studio支持把一个库工程输出为`aar`格式，`aar`.class文件外，还可以包含资源文件，库文件等，这就在一定程度上弥补了jar的不足。这样发布一个sdk就可以以`aar`格式发布一些带界面逻辑的功能。但由于模块化和依赖等原因，项目有时会生产许多个`aar`，发布多个`aar`文件显然不是一个好的方案，并且还有混淆的问题。所以最好的方法是把所有的`aar`合并为一个，这个最终的a`aar`保护所有的依赖的`aar`和so文件等。

对AAR打包和使用不熟悉，请点这儿 [Android studio打包及引用aar](http://www.jianshu.com/p/9f2112da5460)

---

# 4. 开启gradle单独的守护进程
在下面的目录下面创建`gradle.properties`文件：

> 
**/home/<username>/.gradle/ (Linux)**
**/Users/<username>/.gradle/ (Mac)**
**C:\Users\<username>\.gradle (Windows)**

并在文件中增加：
```
org.gradle.daemon=true
```


<br/>
