
---

## 1. **简单用法**
---
### 1.1 创建一个分支
添加文件，提交，推送。但是日常工作中往往比这个复杂得多。
```
git branch branchName
echo "Some information" > test.txt
git add test.txt
git commit -m 'add text.txt'
git push origin branchName
```
---

### 1.2 列出所有分支
```
git branch -a
```
---

###  1.3 检出一个远程分支

远程有一个 dev 分支，你想 check out 这个分支到本地：
```
git branch -b dev origin/dev
```
---

### 1.4 删除远程没用的分支：

* git push origin --delete <branchName>
```
git push origin :<branchName>
```
---

### 1.5 删除本地分支：
```
// -d 是 --delete 选项的短选项
git branch -d branchName

// 强制删除
git branch -D branchName
```
---

## 2. **Merge & Rebase**
### 2.1 **git pull**
*git pull 是非常笼统的一种操作，下面我们分析日常所有可能遇到的情况：*

如假设代码库有一个分支 b1, 当前有两次提交： A, B，下：
#### ``本地操作 A: 检出修改``
你检出 b1，修改了代码，然后提交，生成一个提交：C
```
A -- B [b1]
A -- B -- C     [b1]
```

``远程情况 A:有人推送代码到了分支b1``
在提交代码的期间，有人推送代码到了分支b1, 这个提交称为：D
```
A -- B -- D   [remote b1]
      \
       ----- C   [local]
```

---

#### ``本地操作 B:新分支提交``
你从b1建了一个新的分支 b2, 提交代码，生成一个提交：C
```
A -- B      [b1]
       \
         C  [b2]
```
``远程情况 B:``

远程情况没任何变动。
```
A -- B   [b1]
```
在上面，A, B, C, D指代可以是一次提交，也可以是一系列提交。

---

#### ``本地操作 C:无任何变动``
本地代码无任何变动。嗯，这也算情况之一。
```
A -- B [b1]
```

---

### 2.2 **git fetch**


现在你将远程变动取到本地，这时，本地代码库有可能以下几种情况：

#### Case A: 本地 A + 远程B
```
A -- B      [b1]
      \
       C    [b1]
```
#### Case B: 本地 B + 远程 B
```
A -- B      [b1]
      \
       C    [b2]
```
#### Case C: 本地 C + 远程 A
```
        C   [b1 remote]
      /
A -- B      [b1,local]
```
#### Case D: 本地 A + 远程 A
```
A -- B -- D             [b1]
      \
        ---- C          [b1]
```
#### Case E: 本地 A + 远程 B
```
A -- B -- D             [b1]
      \
        --- C           [b2]
```

---

#### 什么是： fast-forward

在 git fetch 之后，如果本地分支和远程分支没有分叉，并且本地分支指向较旧脚本，那么，这个分支称为可以 **``fast-forward;``**

在 **``fast-forward``**时，本地分支把指针指向最新的提交，并不会生成一个提交。

如果分支可以 **``fast-forward``**，执行 *git merge* 时，实际执行的是**``fast-forward``**。如果不能，则合并，并自动产生一个提交。

很多情况下，我们并不希望有这样的自动合并产生，因为他产生了一个自动提交，会让版本变得交叉，不清晰。

我们希望，能 **``fast-forward``** 就 **``fast-forward``**, ，否则我们用 *rebase* 命令合并。可以这样：

*git merge --ff-only origin/master*
如果不能 **``fast-forward``*, *merge* 操作会终止。

---

### 2.3 **git merge 合并一个分支**
```
$ git merge
操作之后：

Case A: 没变化
Case B: 没变化
Case C: fast-forward

        A -- B -- C      [b1,local/remote]


Case D: 合并，并且自动生成一个提交E

        A -- B -- D --- E       [b1]
              \        /
                ---- C          [b1]
```
---

### 2.4 **git merge 合并两个分支**

当前在 b2 上，合并远程 b1 的改动，对应 Case E
```
$ git merge origin/b1
```

合并之后 ：
```
Case E:
        A -- B ------ D         [b1]
              \        \
                -- C -- E       [b2]
```
---

### 2.5 **git pull**
```
git pull = git fetch + git merge
```

---

### 2.6 **git rebase 回退**

**只有当一个分支出现分叉，或者在不同的分之间，git rebase 才有意义。**命令格式：
```
git rebase 目标分支
```
**在git rebase时：**
    1.把本地未推送的所有提交，放到暂存区。
    2.然后将本分支的指针指向目标分支最新提交，即改变本地分支的基础，简称变基, 这个翻译真是太糟糕了。
    3.然后将暂存区的本地未推送的提交挨个应用回本分支。

---
#### **同一个分支的 rebase**
```
Case E
$ git rebase
A -- B ------- D        [b1,remote]
      \
        ------ D -- C1  [b1,local]

```
先将本地的提交 C 暂存，然后指向 D, 应用 C，C 在 D 之前，变成了 C1。注意这个和上面 egit merge（图1）的区别。

---

#### **不同分支的 rebase**

这其实和同一个分支类似，不过注意，不同分支 rebase 可能需要强制推送：
```
 Case F
$ git rebase origin/b1

A -- B ------- D        [b1,remote]
      \
        ------ D -- C1  [b2,local]
```
---

#### **强制推送: git push --force**

为什么需要强制推送，官方文档：

> Usually, the command refuses to update a remote ref that is not an ancestor of the local ref used to overwrite it.

Case F, 如果b2在 D 和 C 之前，有其他的提交已经推送到服务器了，则需要强制推送，因为他们是从 B 开始分叉的。
```
         pushed
A -- B -..... --- D        [b1,remote]
      \
        -.... --- D -- C1  [b2,local]
```

```
$ git push origin b2 -f
$ git push origin b2 --force
$ git push origin +b2
```
---

转载整理自[廖祜秋liaohuqiu](https://www.liaohuqiu.net/cn/posts/work-with-git-branches)的博客

<be/>
