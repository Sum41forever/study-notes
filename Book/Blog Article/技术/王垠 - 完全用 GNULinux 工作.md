# 完全用 GNU/Linux 工作以前的版本

## 我与 Linux 的故事

1997年，我进入计算机系学习一学期后，和别人合伙买了一个电 脑，装了一个 Windows95 系统。可是 Windows95 太不稳定了，正常 使用时一天死机3次不算多，况且我是那种顽劣分子，到了我手里， 如果两个小时内 Windows 没有死机是很不正常的，合伙的同学都怕 了我 :) 我很委屈，我认为这不是我的错，一个操作系统不应该是这 样脆弱。我不喜欢那样小心翼翼的使用计算机，我喜欢可摔可打的结 实的东西（就像滑板：）。我告诉老师我想要一种不死机的系统，老 师说：“你应该使用 UNIX。” 可是 UNIX 似乎是非常昂贵的东西， 而且是臭名昭著的“对用户不友好”（据同学说），所以我虽然得到 了 SCO UNIX，但是一直没能安装。

后来我偶然的在一个书店的角落里发现一本上了灰的书：“个人 电脑上的 UNIX: Linux”（好像是这个名字吧）。那是书店里唯一的 一本有关 Linux 的书籍（想想今天书店里汗牛塞屋的 Linux 书籍:）， 里面讲了一些 Slackware Linux 的安装，使用等东西。我浏览了一 遍之后，发现这个系统是免费的，而且可以在PC上安装，所以非常感 兴趣，把这本无人问津的书买了(咳，看那个书店老板笑的 :)

然后我就开始寻找书中所说的 Slackware，它说要40多张软盘哪！ 结果没能在软件商店找到。两个月之后我居然在电脑城发现了 Slackware 的光盘，我立即把它买了回去。（卖软件的人说：“总算 卖出去了”。） 我顶住合伙人的强烈反对，硬是把硬盘分了一块出 来，照书里的方法把 Slackware 安上了，光盘安装出其意料的简单。 为了避免别人不方便，我没有在mbr安装lilo，每次都从软盘启动机 器。从此我就算是一个 Linux 用户了。其实这时我只当了半年的 Windows 用户。

但是我那时候并不是很理解 Linux，我认为它只是没有钱买商业 UNIX 的人的一种无奈的选择。后来 Linux 网络功能越来越强，很多 网站开始使用Linux，可是我认为 Linux 只能作为网络服务器或者程 序开发平台，而不能用于普通用户。用 Linux 吧，我不知道怎么在 Linux 下放影片，不知道怎么舒舒服服的浏览网页。用 Windows 吧， 我不知道怎么在 Windows 下舒舒服服的写程序，Turbo C, VC++ 的 工作方式显然是不适合我的。所以很多时候我在 Windows 和 Linux 之间切换，我觉得很不方便。但是 Linux 的操作方式实在很高效， 我甚至在 Windows 下安装 [cygwin](http://www.cygwin.com/)。

此处省略20000字……

半年前由于我对 LaTeX 的深入掌握，我移植了 gbkfonts 给 Linux，而且发现了很好的中文输入法 XSIM，SCIM 和 fcitx，所以 我不再依赖 Word，而能够用 Linux 处理大部分事情了。所以我有一 个月没有用 win2000, 后来我把除了 C: 以外的 Windows 分区都删 掉给了 Linux，仍然没有启动 win2000。后来有一天偶然需要看一个 word文档，启动win2000，可是不知道怎么它就崩溃了（难道因为我 删了两个分区？），然后我干脆把 C: 也格成了 ext3，这样 Windows 就从我机器上消失了，Linux 成为了我机器上的统治者。那 个 word 文档，我后来让同学帮我转成了 PDF 给我看 :)

我相信我能用 Linux 解决电脑上的所有问题，所以遇到问题时就 想办法用 Linux 解决，结果半年下来，我顺利的完成了各种工作。 包括日常的网络，编程，科研和论文，presentation，娱乐……

现在我已经几乎忘记了 Windows，不是因为歧视它，只不过因为 它已经对我没有什么用处，所以不要以为我想引起“宗教战争”哈， 操作系统的不同不应该成为人们争执的原因。实际上我很乐意帮助爸 爸解决有关 Windows 的问题，隔壁的微软研究院的王益也是我的好 朋友。我以后的讨论不再涉及 Windows 的优劣的事情，我知道 Linux 能做的很多事情 Windows 也能做，但是不用提醒我啦，因为 我实在对操作系统的底层不感兴趣。

## 自由软件的重要性

我非常高兴能够完全使用 Linux 工作。虽然 Linux 和它的朋友 们在很多方面已经超过了商业 UNIX，它们在某些方面还不如某些商 业 UNIX，但是可以预见，Linux 这样的自由软件在将来一定会一统 天下。因为“自由”对于人们来说是非常重要的，越来越多的人意识 到了这一点，他们志愿的投入到 Linux 程序的开发中来。很多大公 司，IBM, SGI, HP…… 也都开始支持 Linux. 所以 Linux 的发展会 越来越快。Linux 没有任何历史包袱，通过学习其它系统的优点， Linux 的程序会越来越完美。

纵观历史上造成重大影响的程序，几乎都是自由开放的软件。 TeX, Linux, Xwindow, Perl ... 而商业程序的命运总是在一瞬间灰 飞烟灭，被人们遗忘得不留任何痕迹。看看商业的 UNIX，四分五裂， 各不兼容，给用户造成很多麻烦。商业的 MACSYMA，它的公司在一瞬 间消失，让所有用户失去支持。这是我们不希望看到的。

自由软件为什么会有如此大的威力呢？首先，你会发现，自由软 件的适应性比商业软件大的多。只要有人需要某种功能，就有人把这 种功能加入到程序里。FVWM 浩如烟海的功能就是这样的结果。自由 软件往往可移植性强很容易跟其它系统的程序相处，它们在不同系统 上的编译安装一般没有问题，因为这是由很多种系统的用户共同开发 而成的。而商业UNIX程序往往不能很容易的在不同的系统安装，甚至 在开发时使用的那种系统上安装都需要花很大功夫。不提供源码直接 导致了这种不方便。曾经有一个日本软件公司的工作人员在我们实验 室抓了整整一天后脑勺，才把一个Solaris的商业软件装好 :p

自由软件的全部或者部分能够被随意的利用，改进，再次发行。 你可以修改你发现的bug或者加入你自己需要的功能，或者移植给其 它系统。如果你不是一个程序员，那你可以请人来做这个工作。比如 你报告一个bug，很快就有人解决这个问题，你提出一个新的想法， 有些感兴趣的程序员就可以帮你实现。比如，我就曾经修改了 XSIM 的代码，改正了它在屏幕保护时状态窗口不消失的问题。我移植了 gbkfonts 的代码给 Linux 和 Solaris，我就能在这些系统生成 TeX 的中文字体。我修改了 dvipdfmx 的代码，让它可以嵌入某些通常不 能嵌入的字体，我使用 fcitx 的时候发现有些很不方便的地方，我 给它的作者Yuking兄提了一些建议，结果一个星期之内他就满足了我 的要求，推出了新版本。现在我觉得 fcitx 已经很完美了。

用户能够自己改进程序，再次发行，这样软件的功能就会越来越 强大，衍生出来的软件会使更多的人受益。商业软件没有这个优点， 如果出了问题，你不能很快的得到帮助，bug 不能很快的得到修改， 即使修改了bug，更新的版本很可能还得要你掏钱，谁还愿意报告bug 呢？至于你想要的特殊的功能，想都不要想啦！一般的软件公司根本 不可能考虑你个人的需要。

自由软件具有强大的生命力，这是由它的开放性决定的。一个自 由软件，哪怕只剩一个人喜欢，他都可以自己来维护这个程序的生存， 适应自己的需要。说不定以后还会有更多的人对这个程序产生兴趣。 [MAXIMA](http://learn.tsinghua.edu.cn/homepage/2001315450/maxima.html) 就是这样一个例子。Schelter 博士由于自己的兴趣，默默无闻的维护 MAXIMA 直到他生命的最后一 刻，他拯救了 MACSYMA — 世界上最优秀的计算机代数系统。

自由软件有良好的社会作用。它的一切工作原理都是公开的，这 体现了尊重科学，不为名利，信息公开，共同进步的良好风尚，这对 于科学研究工作是非常重要的。它能够被随意的拷贝给需要它的人们 去用，这体现了人们互相帮助的美德，一个理解自由软件思想的人会 更加关爱社会，乐于助人，对于改善整个社会风气都有很大的好处。

## 消除“某些事情 Linux 干不了”的误区

Linux 比起某些其它操作系统确实有干不了的事情，但是它能干 而其它系统不能干的事情也很多。我在这里想消除的误区，只是本来 Linux 能干，而你却认为它不能干的事情。

很多人在某些事情上已经离不开 Linux，但是他却没有找到可靠 的 Linux 程序来完成某些其它操作系统能完成的某些简单的事情。 比如很多人抱怨 Linux 下的 Mozilla mail, evolution 损坏他们刚 写好要发出去的 email。 有些人认为他专业上的程序只有商业 UNIX 和 Windows 才有。比如有些人为了使用 Mathematica 而使用 Windows，他说 Linux 下没有 Mathematica 程序，商业 UNIX 又买 不起。其实完全可以用 Linux 来完成这些事情。

首先，Mozilla mail, evolution 虽然是 Linux 可以用的程序， 但是由于历史太短，它们还没有稳定下来，有很多 bug。如果你需要 可靠稳定，而不想费时间帮助 debug，你完全可以用 [Mutt](http://www.mutt.org/) 这样的强大可靠的工具来发 送你的 email。Mutt 比起 Mozilla mail, evolution 都要强大的多， 但是它显然是某些“专家”才能使用的工具，普通用户还是只能用 Mozilla mail 或者 evolution。所以很感谢 Mozilla mail 和 evolution 的使用者，没有你们，这两个软件可能就不能得到用户的 反馈和改进了。别怕！什么专家啊，吓你的 :) 其实普通对电脑有兴 趣的人都可以用 Mutt。我为你准备了一个不需要成为专家就能使用 Mutt 的入门文档，看[这里](http://learn.tsinghua.edu.cn/homepage/2001315450/mutt_frame.html)。

第二，Mathematica 有 Linux 的版本，你自己去 wolfram.com 看看吧，800 多美元就能买到。由于 Linux 性能良好，很多科学家， 工程师开始使用 Linux, 所以商业的科学工程程序，比如 Matlab, Mathematica, AutoCAD, Design Compiler, HSpice ……很多都移植 给了 Linux。当然它们可能不是免费的，但是它们值那个价钱（也许 吧）。如果你喜欢自由软件，很多商业程序有对应的自由软件，比如 你可以用 MAXIMA 来代替 Mathematica，用 octave 代替 Matlab …… 而且你可能会发现它们很多时候比它们对应的商业程序好！

用惯了 Windows 的人可能会发现，Windows 下有些东西在 Linux 下没有很相似的，或者你找到很多类似的，但是它们每一个比起 Windows 的那个程序都要差很多。你找不到好程序的原因，很多时候 只是你的头脑中的固定模式在作怪。下面我们来看看两种情况：

1.  有一个完全类似的程序，但是由于它乍一看不漂亮，被你忽略了。

    用惯了 Windows 的用户最容易出现这种情况，因为 Windows 的 程序看起来都是相当漂亮的。所以大部分人看到像 Mutt, lftp 这样 的程序根本就不会考虑用它们，而另外去找一些像 Windows 程序的 程序来用。

    这是一个误区，要知道：很多时候外表不是最重要的。Mutt， lftp 是经过千锤百炼的优秀程序，写一个界面对于它们的作者显然 是小菜一碟，他们没有漂亮的界面是有原因的(以后讨论)。有些程序 虽然看起来很漂亮，但是它们是一些初学编程的人写的，用起来非常 恼火。现在由于 Gtk, Qt 的诞生，Linux 下开发图形界面程序越来 越简单，很多初学者都可以随手编出一些漂亮不中用的程序（我以前 也写过：）。如果你在这样的程序中间挑来挑去，永远也找不到你满 意的。当然也有一流的程序用 Gtk 和 Qt。

    我曾经也犯过这样的错误，从外表区分一切。结果优秀的 FVWM, lftp, Mutt, wget 都被我忽略过。当我被别的不稳定的程序惹恼了， 找回它们的时候，真后悔当初怎么不多试试就把它们删了。

    我第一次看到 FVWM 时，觉得它只不过是一个有很厚很难看边框 的东西，可是现在，我的同学看到我的 FVWM 都说：“哇！真漂亮。” 你甚至可以让 FVWM 比 Windows XP 还漂亮。某些初次见面没有迷住 你的程序，很有可能让你二见钟情，以至于伴你终生哟。这就是所谓 的魅力吧 :)

2.  有另一种完全不同的方式可以达到相同的目的，甚至更好。

    很多人很关心 Open Office, Star Office, AbiWord, ... 他们 多么盼望有一天某一个 Linux 程序能够完全兼容的打开一个复杂的 doc 文档。这显然是不容易办到的，但是你为什么不换一个思考方式 呢？我们来看看你换一种方式做幻灯片对你到底有什么损失：

    你直接用 Open Office Impress 撰写你的幻灯片，存成 Open Office 的格式，要演示幻灯片时，你把你的笔记本电脑拿到会场演 示。如果你需要在别人的 Windows 机器上演示，那就存成 PPT 格式 就行了。我的一个朋友就是这么做的。

    除了“所见即所得”，其实你还有更好的选择。你看看那些高水 平的学术杂志，论文，那些大学教授的网页，那些漂亮的幻灯片，它 们是什么做的？原来早就有非常方便的 LaTeX, SGML, XML 等东西可 以处理文档，而且它们比起 Word 都要方便的多。用ConTeXt 做出的 幻灯片，比起 PPT 和 OpenOffice 都要炫很多。

其实我只举出了很少的例子，只是为了说明，我们的头脑似乎很 容易进入一种误区。你不一定要按照某种别人灌输给你的“模式”思 考。有人说 OOP 是最好的，有人说永远不应该用 goto 语句，有人 说大家都应该用“所见即所得”的工具，有人说全世界只需要 5 台 电脑，有人声称过 Internet 是没有前途的…… 他们中间有的人是 大科学家，有的人是世界首富，所以似乎人们很容易就把这些观点默 认了，而且到处宣传，“某某牛人说……”，从来没有自己思考一下， 他们到底说的对不对。其实这些名人也很无辜的，无意之中说出一句 话，就被大家到处宣扬，没法收回。

## 使用配置文件定制程序行为

很多人喜欢用鼠标点菜单来配置程序，可是，鼠标虽然是很好的 工具，但是它的表达能力是有限的。你不可能光用鼠标就让电脑完全 明白你的意思，它毕竟只有3个按钮。看看我的[MetaPost](http://learn.tsinghua.edu.cn/homepage/2001315450/metapost.html)页你就能体会到鼠标的这一弱 点。所以我们虽然很喜欢鼠标，但是却不能完全依赖它。

看看优秀的 UNIX 程序，XFree86, FVWM, VIM, Emacs, proftpd, Mutt, wget, tin, ... 没有一个不是用配置文件来设置选项的。为 什么这些程序没有方便的菜单可以用来配置？难道它们的设计者就那 么低能，连个图形配置界面也写不出来？

当然不是。因为图形界面配置方式的能力是极其有限的，而配置 文件里的符号的表达能力却是无限的。用图形界面配置这些程序的话， 如果你想达到配置文件的效果，你需要成百上千的菜单，checkbox, radio button, ... 到时候你根本没办法找到你需要修改的地方了！

配置文件其实比菜单方便。你在配置文件里可以完全发挥编辑器 的强大功能。你可以任意搜索到你需要的配置选项。配置文件的语法 都有很多相似之处，一般就是一些命令，设置一些变量，参数，…… 一旦用会了一个，其它的也就容易理解了。

你有没有发现有些菜单配置的程序，连IP地址都会被分开在4个文 本框里，你不能一次性把外面的IP地址拷贝进去，也不能拷贝出来， 也不能整体删除，多麻烦。要是以太网物理地址，那岂不是要分成6 个文本框！不知道这种程序的设计者是怎么想的，竟然还有很多人模 仿这种方式。

配置文件对程序设计者有较高要求。你发现了吗，写一个使用配 置文件的程序要比写一个菜单配置的程序难度大。有些程序的配置文 件里，有命令，有变量，有正则表达式，…… 它们的顺序可以是任 意的。你想想的设计难度有多大。而一个菜单配置的程序，所有的选 项都被设计者固定下来了，你只有那么几个选择，它的设计难度要低 的多。比如那种把IP地址分成4个文本框的程序，只不过是为了避免 写代码去验证用户输入的IP的合法性，因为这样你就不可能输入 12344.343#2344.430 这样非法的 IP，但是这给了用户很多不方便。

## 请用 Xwindow

计算机界门派之分很多。很有特点的就是 CLI(命令行界面) 和 GUI(图形用户界面) 了。CLI 的狂热份子声称永远不用 X。我上次在 实验室看到一个同学用一个 SecureCRT 登录到 Sun 机器，然后用一 个 vanilla vi 编辑程序，我建议他启动一个 GVIM 过来显示在 Exceed 上可以有语法加亮。但是他坚决反对，说：“高手不用X。你 想想，要是我在一个很慢的网络连接怎么用 X？而且好多服务器没有 装 X 程序。”

但是我们实验室的网速可够快，Windows 机器都有 Exceed 啊， 而且 Sun 机器有全套 X 客户程序包括 GVIM。他说他是 CLI 的坚决 拥护者，但是他却在用 SecureCRT 这种 GUI 程序，他后来打开了好 几个 SecureCRT，每次从文本框输入地址，用户名和密码，从下拉菜 单选择 "SSH2"，然后点击“Connnect”。他还不断的夸SecureCRT是 “网络管理员投票选出的最受欢迎的登录方式”。

他其实不懂 Xwindow 的原理，没有明白 Xwindow 的好处，或者 是他被 Gnome 和 KDE 那样不稳定的 "Xwindow" 给弄烦了。console 方式对于网络管理员可能比较方便，有时甚至是唯一的选择。但是， 对于普通人，不用 Xwindow 显然是非常不方便的，想一想你连函数 曲线都不能画出来！在X的xterm, rxvt下就能完成 console 的所有 功能，何乐而不为？

其实何必分什么 GUI 和 CLI，UNIX 和 Xwindow 都是工业标准， 它们从设计那天开始就有非常灵活的用法，各个程序，不管是 GUI 还是命令行的都可以互相协作。UNIX 和 X 是一家，何必搞的那么偏 激，非此即彼？我就是坚定不移的“两面派”。

我写了一个 Xwindow 的入门简介，你可以看看[这里](http://learn.tsinghua.edu.cn/homepage/2001315450/x.html)。

## 理解 UNIX 的设计思想

UNIX设计的思想就是，让每个程序都只擅长于一项专门的工作， 然后让它们合作，形成一个可靠的，强大的，灵活的系统。Xwindow 也继承了这种好传统。

这恐怕就是Windows和其它操作系统望尘末及的地方了。UNIX 程 序设计之统一，配合之完美，真使我难以置信！shell, grep, find, awk, sed, make, Perl, Emacs, vi, tin, Mutt, ... 它们是那么的 具有一致性！你一旦学会了 sed 的正则表达式，其它程序基本上都 能用了。你一旦学会了 vi 和 VIM, 你会发现它的操作是那么的有规 律性，似乎vi的设计者在几十年前就已经设计好了 VIM 在今天的完 美而统一的操作方式！而且vi的操作还体现在 Mutt, tin 等很多程 序中。你甚至可以把 bash 设置为 vi 的输入方式来输入命令行，我 就是这么做的。一个程序可以调用另外一个程序来得到数据，可以把 数据交给它处理后返回来，可以在自己的窗口里“嵌入”另外一个程 序。

比如我用 Mutt 的时候，我可以用 VIM 也可以用 pico 来编辑邮 件，我可以用 ImageMagick 也可以用 xv 来显示附件里的图片，我 可以用 lynx 把 HTML 附件转成文本嵌入窗口中，我也可以把 HTML 附件交给 Mozilla 图形显示。我可以让 GnuPG 帮我把邮件进行数字 签名和加密，我也可以用其它 PGP 程序。我想让 Postfix 而不是 sendmail 帮我发出邮件，我想让 fetchmail 帮我收邮件，转发给 postfix，然后被我自己写的Perl过滤器处理…… 这一切我都可以办 到！我可以选择我最喜欢的专门的程序来完成专门的工作，然后把它 们结合在一起，我也可以分别得到它们的好处。

## 几点忠告

1.  不要当“传教士”

    很多人在讨论区不断的引起 "Linux vs. Windows" 之类的讨论， 甚至争的面红耳赤，这是没有必要的。

    这种争论是浪费时间而没有任何用处的。对，你花了一下午，用 许多事实“捍卫”了 “Linux 比 Windows 好” 这个说法。但是 Windows 的支持者并不会喜欢上 Linux，他们只是稍微退缩一下，然 后找一些新的证据来跟你辩论。

    世界上的人们都在利用 Linux 研究最前沿的科学，我们还在这里 讨论 “要不要用 Linux” 这种无聊的问题，什么时候才能赶上时代 前进的步伐？

    什么叫做“Windows 支持者”，什么叫做“Linux 支持者”？我 们为什么要支持某一个而反对另外一个？你不需要为 Linux “护法”， 不需要成为“Linux 支持者”或者“GNU传教士”，GNU/Linux 已经 用事实向世界证明了它们的威力，已经被大多数人接受。你只需要安 安静静享受 GNU/Linux 给你的乐趣和自由。

    你需要关心的不是你的工具是什么，而是你用它做了什么。精 通 Linux 并不说明任何问题，因为它只是一个工具而已。如果你用 Windows 能很好的完成你的任务，那你就没有必要费时间去熟悉 Linux。直到有一天你发现一项任务只有 Linux 才能完成的时候再换 也不迟，因为你身边的 Linux 的爱好者一定会很乐意的帮助你。

    工具不是人，不应该对工具有感情。这是你在进行任何对工具的 讨论前需要提醒自己的事情。面对一些容易引起争论的东西：Word 和 TeX；Emacs 和 VIM；MAXIMA，Mathematica 和 Maple；Gnome， FVWM 和 KDE；Mutt 和 Pine …… 一定要冷静的对自己说：“我不 站在它们任何一边，因为它们不是人。”

    各人的需要不同，生活的环境不同。对你来说好的东西，对别人 来说不一定好，我们需要尊重别人的选择。如果你当面说别人正在用 的程序不好，没有人会乐意接受你的意见。我从来没有建议过我爸爸 不用 Windows + WPS，而用 Linux + LaTeX 来处理他的英语试卷。 因为 WPS 是我爸爸的选择，他能用 WPS 编辑出很好的试题去测试他 的学生，那就足够了。

    我曾经帮我爸爸做了一个 perl 程序，能够自动从一种我自己设 计的 markup 语言转化成 LaTeX 格式的英语试卷。可以自动对试题 编号，乱序排版选择题的选项，自动生成答案表，生成老师用的显示 答案的版本，自动对短文改错题进行优化分段，自动拼写检查，图形 化的配置方式…… 我爸爸高兴的用了一段时间，可是后来他想用 WPS 里的一种标题样式，而我不在家，无法为他修改程序。所以他又 换回了 WPS。这就像有人送爱因斯坦一罐剃须泡沫一样，刚开始几天， 发现他神采飞扬，不断夸这个东西真舒服。过了几天，发现爱因斯坦 又开始用白水剃胡子了，因为剃须泡沫用完了，他懒得自己去买那个 东西。这只是习惯问题。

2.  不要强迫自己

    喜欢电脑的人总是有某些心理强迫倾向。有的人说：“键盘比鼠 标快。我不要用鼠标。这样才有高效率。” 所以他在编辑器里无论 什么时候总是用 20w, 10j 这样的命令到达目的点。他甚至觉得图形 界面是多余的，干脆 Xwindow 都不装。

    全部用键盘看起来的确比让手离开键盘去拿鼠标，再回来“快” 多了，但是快的击键频率不等于工作的高效率，对你的健康更没有什 么好处。这只能把你变成打键盘的机器。

    当你正在检查你的文章或者程序，思维正在随着字符的含义流动， 突然 20w, 10j 这样的东西出现在你的脑子里，是不是会打断思路？ 不？那说明你当时思考的问题比较简单，这些干扰还不会起到副作用。

    其实很多人用电脑的时候，思想都受到某种教条的束缚，上面这 个只是众多教条中的一种。某些人制造了很多这种教条，用他的工作 方式来要求别人，嘲笑方式跟他不一样的人。比如有的人嘲笑其它人 写 C 程序不按 8 字符缩进，嘲笑别人在 vi 里用方向键，嘲笑别人 不知道 PVM 是什么，嘲笑其它人用 JAVA, C# 这种由 GC 回收内存 语言……

    你不用管各种各样的教条，电脑只是你的奴隶，你想怎么用就怎 么用。没有人能够约束你，没有人可以嘲笑你的工作方式。电脑明天 就不再是这个样子，所以今天你不用完全了解它。你没有必要知道别 人创造的一切，因为你需要留点时间自己创造些东西。Just have fun!

    当你下次修改文章的时候，不妨试试悠闲的用鼠标在你眼睛看到 的地方轻轻点一下。

3.  不要“玩 Linux”

    很多人用 Linux 的时候会感觉很迷茫，该用哪个发行呢？是不是 我少装了什么？怎么升级这么快啊！怎么这么不稳定！每当遇到新的 软件他就想试用，每当新的版本出现，他就更新，然后用鼠标在新的 菜单里选择从来没见过的程序来用用。

    其实你是为了Linux而使用Linux，而没有找到正确的理由来利用 Linux。你首先要明确用电脑的目的，你用它是为了解决你的实际问 题，而不是为了学习安装操作系统，不是为了测试哪个版本好用，不 是为了“赶上潮流”，更不是因为你硬盘太大了，你想多占点空间。

    如果你启动了电脑之后不知道应该干什么，那么最好先不要用电 脑，因为你可能有更重要的事情需要做。

4.  不用挑剔发行版本

    很多人刚开始用 Linux 的时候，总是在怀疑别的发行版本是否比 自己正在用的这个好，总是怀疑自己以后时候会失去支持，不得不换 用别的发行。所以很多人今天是 Redhat，明天又换成了 debian, 一 会儿又是 gentoo, …… 甚至有的人在一台机器上装了两个版本的 Linux，然后比较哪一个好。

    其实你完全没有必要这样做，任何发行，只要你熟悉了，你在上 面的工作方式几乎是不会受到任何影响的。我以前一直用的 Redhat， 当我有一天在我的一台新机器上安装 debian 时，我发现使用 Redhat 的经验完全没有浪费。我用了一个下午就配置好了 debian， 使它服服贴贴的听我的话，就跟没有换发行一样。

    Debian, TurboLinux, SuSE, Redhat, Gentoo, ... 任何一个版 本都是不错的。很多人认为自己攒一个 LFS 是高水平黑客的象征， 但是不是每个人都有精力去了解所有细节。

    如果你是用于个人的日常事物和科研，可以试试 debian。它是我 见过的最方便的一个发行。

5.  不要盲目升级

    不知道这是心理作用还是什么，有的人看到比较大的版本号，就 会很想换成那个。很多人的 Redhat 本来配置的很舒服了，可是一旦 Redhat 发行新的版本，他们就会尽快下载过来，然后选择升级安装。 结果很多时候把自己原来修改得很好的配置文件给冲掉了。新的软件 又带来了新的问题，比如有一次我的 rxvt 升级到 2.7.8 就跟 miniChinput 冲突了，升级到 Redhat 8.0，发现 xmms 居然缺省不 能放mp3了，XFree86 的 xtt 模块在 I810 上有新的 bug，会导致 Mozilla 突然退出。

    如果你已经配置好了一切，千万别再整体升级了，这会浪费你很 多很多时间的，不值得。有句话说得好:"If it's not broken, don't fix it." 如果你的程序能够完成你需要做的事情，你何必升 级呢？

6.  不要配置你不需要的东西

    如果你只想做一个像我这样的普通用户，主要目的是用 Linux 来 完成自己的科研任务和日常工作，那就可以不用系统管理员或者网络 管理员的标准来要求自己，因为当一个系统和网络管理员确实很辛苦。 普通用户学习那些不经常用到的复杂的维护系统的工具，其实是浪费 时间，学了不用是会很快忘记的！

    我不是一个合格的网络管理员，我的服务器都只设置了我自己需 要的功能，设置好 ssh, ftp 已经足够了，那样可以省去我很多麻烦。 我从来不过度考虑“安全”，因为 Linux 缺省已经很安全了。我没 有磁带机，就不用管 tar 的那些稀奇古怪的参数了，czf, xzf, ztf 已经可以满足我所有的需要。sed, awk, ... 我也只会几种常用的命 令行。

7.  不要习惯的使用 root 帐号。在需要的时候才 su！

    这是很多刚接触 UNIX 类操作系统的人常见的现象，他们不喜欢 在管理系统的时候才 su, 而是一直用 root 帐号干所有事情，配置 系统，安装程序，浏览网页，玩游戏，编程 ……

    结果有一天，他不小心在某个系统目录使用了 rm * ... 后果不 堪设想……

8.  不要用商业的眼光来看 Linux。

    Linux 不是商业软件，所以不要用要求 Solaris, Windows 那样 的眼光来看 Linux. 自由软件的作者们从来不拉拢用户，他们对用户 不负有任何责任。实际上在自由软件的世界里，“开发者”和“用户” 并没有明确的界限，大家是朋友。

    自由软件很可能只是满足作者和他的朋友的需要，甚至是为了好 玩而创造的。自由软件不是完美的，自由软件承认自己有缺点，它不 会自吹自擂，蒙蔽“用户”的耳目。这种对作者责任的解脱激发了作 者的创造力，他们不用过分考虑“向上兼容”，他们往往比背上重重 包袱的商业软件结构更合理，技术更先进。

    所以当你用某个自由软件遇到困难的时候，不应该埋怨软件的作 者，因为他们对你并没有义务。你不应该把自己当成一个挑剔的顾客， 而要把自己作为这个软件的顾问和一个和蔼的建议者，这样你才能理 解作者写这个程序时的快乐，在遇到问题时向作者反映，帮助他完善 这个软件，成为一个快乐的参与者。就像你的哥哥送你一个他用旧了 的自行车，你应该珍惜这份友情，而不要在车坏了，或者骑车摔了一 交的时候大骂你的哥哥。如果你真的不能使用这种合作的心态，那么 最好不要使用这个软件。

    这是一种先进的文化，它包含了互相合作，科学创新的精神。理 解这一点不是很容易，很多人往往是因为不能理解这种文化而离开自 由软件。这对于作者来说并没有什么损失。

9.  干你的正事去

    很多人跟我说，你的网页浪费我好多时间来配置这配置那，一会 儿是 FVWM，一会儿是 Mutt ……

    嗯……那些东西都是我有空的时候一点一点积累的，如果你想一 次性搞定所有那些东西，恐怕得花你几个星期甚至几个月的时间！并 不是一定要搞定所有这些东西你才能正常工作的。除非你真的非得利 用某个程序，或者你闲着没事，否则你可以不管这些东西。

10.  上面几条仅供参考

   以上只是个人意见，不一定适合所有人。取舍由你了 :)