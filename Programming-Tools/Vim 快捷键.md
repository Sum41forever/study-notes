## 移动命令
`「ctrl」+「b」` → 屏幕往`上`移**一页**
`「ctrl」+「u」` → 屏幕往`上`移**半页**

`「ctrl」+「f」` → 屏幕往`下`移**一页**
`「ctrl」+「d」` → 屏幕往`下`移**半页**


`「$」` → 移动到光标所在行的**行尾**。
`「^」` → 移动到光标所在行的**行首**
`「w」` → 到下个字的**开头**
`「e」` → 到下个字的**字尾**
`「b」` → 回到上个字的**开头**

`「? + l」` → 到该行的第?个位置，如：5l ,56l
`「? + G 大写」` → 「15G」，表示移动到第15行**行首**

`「*」` → 匹配光标当前所在的单词，移动光标到**下一个**
`「#」` → 匹配光标当前所在的单词，移动光标到**上一个**

## 插入
`「a」`→ 在当前光标 **后** 插入
`「A」`→ 在当前行 **末尾** 插入
`「i」`→ 在当前光标 **前** 插入
`「I」`→ 在当前行 **首部** 插入
`「o 小写」`→ 在当前光标 **下一行** 插入
`「O 大写」`→ 在当前光标 **上一行** 插入

## 搜索



## 删除
`「x」` → 删当前光标所在的一个字符
`「d」` → 删当前光标所在的一个字符
`「dw」` → 删当前单词
`「dd」` → 剪切当前行
`「dt"」`→ 删除所有的内容，直到遇到双引号——`"`

## 复制粘贴
`「P」` → 粘贴
`「yy」` → 拷贝当前行当行于 ddP

## 还原
`「u」` → 撤销  undo
`「ctrl」+「r」` → 重做 redo

## 大小写切换
`「gU」` → 变大写
`「gu」` → 变小写

## 选中单词
`「v i + w」` → 选中当前单词（注意vi要一起按）
`「v e」` → 选中光标之后的单词部分

![](http://images.cnblogs.com/cnblogs_com/itech/192594/vim.jpg)
