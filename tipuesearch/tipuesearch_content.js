var tipuesearch = {"pages":[{"title":"QT+HALCON环境配置","url":"/posts/f8f37c42.html","text":"简介：QT 6.2.4 &#x2F; HALCON 22.11.0.0 1.在.pro文件中添加以下代码123456789win32:DEFINES += WIN32INCLUDEPATH += &quot;$$(HALCONROOT)/include&quot;INCLUDEPATH += &quot;$$(HALCONROOT)/include/halconcpp&quot;QMAKE_LIBDIR += &quot;$$(HALCONROOT)/lib/$$(HALCONARCH)&quot;unix:LIBS += -lhalconcpp -lhalcon -lXext -lX11 -ldl -lpthreadwin32:LIBS +=&quot;$$(HALCONROOT)/lib/$$(HALCONARCH)/halconcpp.lib&quot; \\&quot;$$(HALCONROOT)/lib/$$(HALCONARCH)/halcon.lib&quot; 注意添加位置 2. 在头文件中添加以下代码12#include &lt;HalconCpp.h&gt;using namespace HalconCpp; 123HObject ho_Image;HTuple hv_Width,hv_Height,hv_WindowHandle;Hlong widid; 3. 在文件中添加窗口代码12widid=static_cast&lt;Hlong&gt;(ui-&gt;label_2-&gt;winId());OpenWindow(0,0,ui-&gt;label_2-&gt;width(),ui-&gt;label_2-&gt;height(),widid,&quot;visible&quot;,&quot;&quot;,&amp;hv_WindowHandle); 1234567ReadImage(&amp;ho_Image,&quot;G:/CV/HALCON/1.jpg&quot;); // &quot;G:/CV/HALCON/1.jpg&quot;需要更改为自己电脑中图片的路径GetImageSize(ho_Image,&amp;hv_Width,&amp;hv_Height);HDevWindowStack::Push(hv_WindowHandle);if(HDevWindowStack::IsOpen()) SetPart(HDevWindowStack::GetActive(),0,0,hv_Width-1,hv_Height-1);if(HDevWindowStack::IsOpen()) DispObj(ho_Image,HDevWindowStack::GetActive()); 4. 在UI文件中添加一个label和pushbottonpushbotton右键选择提升槽,选择clicked. 调试效果","tags":"cv halcon qt"},{"title":"名词整理","url":"/posts/e8917f8b.html","text":"简介：无 2023年10月24日OPCOPC（OLE for Process Control）, 用于过程控制的OLE，是一个工业标准，管理这个标准的国际组织是OPC基金会，OPC基金会现有会员已超过220家。遍布全球，包括世界上所有主要的自动化控制系统、仪器仪表及过程控制系统的公司。基于微软的OLE(现在的Active X)、COM （部件对象模型）和DCOM （分布式部件对象模型）技术。OPC包括一整套接口、属性和方法的标准集，用于过程控制和制造业自动化系统。 OLEObject Linking and Embedding，对象连接与嵌入，简称OLE技术。OLE 不仅是桌面应用程序集成，而且还定义和实现了一种允许应用程序作为软件“对象”（数据集合和操作数据的函数）彼此进行“连接”的机制，这种连接机制和协议称为组件对象模型（COM）。OLE可以用来创建复合文档，复合文档包含了创建于不同源应用程序，有着不同类型的数据，因此它可以把文字、声音、图像、表格、应用程序等组合在一起。 CODESYSCODESYS是一种功能强大的PLC软件编程工具，它支持IEC61131-3标准IL 、ST、 FBD 、LD、 CFC、 SFC 六种PLC编程语言，用户可以在同一项目中选择不同的语言编辑子程序，功能模块等。","tags":"随笔"},{"title":"CAD模板调整手册","url":"/posts/904de5aa.html","text":"简介：无 2023年10月27日PL命令，起点-W回车-起点宽度3-端点宽度0.2-长度3-线长3-边长5的矩形 2023年10月24日螺栓沉孔标注中的特殊符号特殊符号 字体：gdt.shx，勾选大字体，gbcbig.shx 中文字体 字体：gbenor.shx，勾选大字体，gbcbig.shx","tags":"随笔"},{"title":"机器视觉技术基础","url":"/posts/80f300b5.html","text":"简介：无 2023年10月22日光的吸收与反射 采用单色光源照射时，由于单色光被其他颜色物体吸收，无法反射，在黑白相机中呈现黑色。相同单色物体反射光，在相机中呈现白色。","tags":"机器视觉"},{"title":"test2","url":"/posts/13bb8d58.html","text":"简介：无","tags":"无"},{"title":"EXCEL使用技巧","url":"/posts/59436549.html","text":"简介：EXCEL使用技巧 2023年10月22日单元格条件格式以百分比填充将条件格式的最大值设置为数字“1” 2023&#x2F;9&#x2F;10高阶甘特图 Ctrl+； 快速输入当前日期 格式-&gt;自定义-&gt;添加周AAA 显示周几 F4 绝对引用 TEXT(A1,”dddd”) *dddd为英文星期全称*ddd为英文星期简称*aaaa为中文星期全称*aaa为中文星期简称 weeknum(“”,“2，国外周日为第一天”) 返回日期在当年的周数 Ctrl+t 结构化表格、动态表、超级表 Ctrl+1 自定义格式 数据-&gt;数据验证-&gt;序列 添加下拉选项 条件格式-&gt;数据条 以单元格百分比显示","tags":"办公技巧 excel"},{"title":"Word快捷指令","url":"/posts/9f3f6fb5.html","text":"简介：Word快捷指令 2023&#x2F;9&#x2F;9线型： 虚线：三个“*”，回车 波浪线：三个“~”，回车 隔行线：三个“#”，回车 双直线：三个“&#x3D;”，回车 直线：三个“-”，回车 实例：","tags":"word 办公技巧"},{"title":"WIN11添加过时硬件“Microsoft KM-TEST环回适配器”","url":"/posts/2fae4cea.html","text":"简介：WIN11添加过时硬件“Microsoft KM-TEST环回适配器” 1.使用“WIN＋R”调出命令提示符，并输入“hdwwiz” 2.弹出添加硬件向导窗口，下一步 3.选择“安装我手动从列表选择的硬件”，下一步 4.选择“网络适配器”，下一步 5.在左侧找到“Micorsoft”，右侧选择“Microsoft KM-TEST环回适配器”，下一步 6.等待下载完成","tags":"随笔"},{"title":"星-三角启动","url":"/posts/81c86f89.html","text":"","tags":"电工电子"},{"title":"C#运动控制及界面开发","url":"/posts/682b50d5.html","text":"一、硬件电机、驱动器、板卡 二、软件XCOM 三、编程环境VS 2019 文件.cs:.dll:winform: 常用工具button：按钮panel：面板text：文本label：标签","tags":"工控"},{"title":"RobotStudio基础","url":"/posts/9d614237.html","text":"2023年8月6日1.RS中Smart组件添加直线传感器（1）编辑Smart组件（2）添加linesensor（直线传感器），更改传感器属性（3）拖动linesensor至Smart组件中工装夹具上；弹出是否更改传感器位置，选“否” 2.导入多个工件后，夹具工作时多个工件会一起运动取消工装夹具的可由传感器检测功能","tags":"工控 abb"},{"title":"Markdown技巧","url":"/posts/f3de4c07.html","text":"1. 星号成对使用 * * 和_ _内的文本会被转换为斜体 ** ** 或 __ __ 内的文本会被加粗（相邻符号内不能有空格） 在第一个符号前加入反斜杠 “ \\ ”，取消特殊格式 2. 表格 name1 name2 num name","tags":"markdown 随笔"},{"title":"第2章 这不是Bug，而是语言特性","url":"/posts/5e3708b8.html","text":"《C专家编程》 2.1 语言缺陷类型1：多做之过类型2：少做之过类型3：误做之过 2.2 多做之过2.2.1 switch语句中的“fall through”带来的问题 case语句后需要添加break结束switch的命令执行。 break中断了整个switch函数的执行，跳出了switch函数结构。 2.2.2 粉笔也成了可用硬件 在修饰变量的时候,static修饰的静态局部变量只执行一次初始化 字符串数组两个字符串成员之间需要添加逗号，否则两个成员会自动合并为一个成员，引发问题。 2.2.3 太多的缺省可见性无论是否有extern关键字，函数在任何地方均可以访问 添加static关键字可以限制文件对函数的访问 2.3 误做之过与C语言的简洁和操作符的优先级有关 2.3.1 骆驼背上的重载字符的过度使用、C语言中的符号重载 例：* 乘法运算符 用于指针，间接引用 在声明中，表示指针 sizeof(int) * p 中 *为乘法运算符； 2.3.2 “某些运算符的优先级是错误的” 优先级问题 表达式 人们可能误认为的结果 实际结果 .的优先级高于* -&gt;操作符用于消除这个问题 *p.f p所指对象的字段f (*p).f 对p取f偏移，作为指针，然后进行解除引用操作。*(p.f) []高于* int *ap[] ap是指向int数组的指针int(*ap)[] ap是元素为int指针的数组 int *(ap[]) 函数()高于* int *fp() fp是个函数指针，所指函数返回int。int(*fp)() fp是个函数，返回int* int *(fp()) &#x3D;&#x3D;和!&#x3D;高于位操作符 (val &amp; mask !&#x3D; 0) (val &amp; mask) !&#x3D; 0 val &amp; (mask !&#x3D; 0) &#x3D;&#x3D;和!&#x3D;高于赋值符 c&#x3D; getchar() !&#x3D; EOF (c&#x3D; getchar()) !&#x3D; EOF c&#x3D; (getchar() !&#x3D; EOF) 算术运算高于位移运算符 msb &lt;&lt; 4 + lsb (msb &lt;&lt; 4) + lsb msb &lt;&lt; (4 + lsb) 逗号运算符在所有运算符中优先级最低 i &#x3D; 1, 2 i &#x3D; (1, 2) (i &#x3D; 1), 2 优先级：乘法和除法先于加法和减法，在涉及其他操作符时一律加上括号。 结合性结合性只用于表达式中出现两个以上相同优先级的操作符的情况，所有的赋值符（包括复合赋值符）都具有右结合性，从右向左依次执行。左结合性的操作符：”&amp;”和”|” 2.3.2 早期gets()中的bug导致了internet蠕虫 2.4 少做之过2.4.1 若用户名中有f，便收不到邮件引起该错误的主要是由于系统对’-‘符号的糟糕解析，系统分不清该符号是是选项开关还是文件名。 2.4.2 空格——最后的领域 使用”&quot;字符对一些字符进行转义时，”&quot;与字符间不能有空格 也不可将所有的空格弃之不用 例：z &#x3D; y+++x |可以是z &#x3D; y++ +x 或 z &#x3D; y+ ++x 使用两个指针执行除法运算 例：ratio &#x3D; *x&#x2F;y |由于缺少空格”&#x2F;“被认为是注释符号","tags":"c语言"},{"title":"第2章 算法","url":"/posts/ef905eca.html","text":"《大话数据结构》 前言算法是解决特定问题求解步骤的描述，在计算机中表现为指令的有限序列，并且每条指令表示一个或多个操作。 2.1算法的特性 基本特性：输入、输出、有穷性、确定性和可行性 2.1.1 输入输出算法具有零个或多个输入，至少具有一个或多个输出 2.1.2 有穷性算法在执行有限的步骤后，自然结束而不会出现无限循环，并且每一个步骤在可接受的时间内完成。 2.1.3 确定性算法的每一步骤都具有确定的含义，不会出现二义性 2.1.4算法的每一步都必须是可行的，也就是说，每一步都能通过执行有限次数完成。 2.2 算法设计要求 正确性、可读性、健壮性、时间效率高和存储量低 2.2.1 正确性算法至少具有输入、输出和加工处理无歧义性，能正确反映问题需求，能够得到问题的正确答案。 算法层次：（1）算法程序没有语法错误（2）算法程序对于合法的输入数据能够产生满足要求的输出结果（3）算法程序对于非法的输入数据能够得出满足规格要求的结果（4）算法程序对于精心选择的，甚至刁难的测试数据都有满足要求的输出结果 2.2.2 可读性算法设计的目的之一是便于阅读、理解和交流。 2.2.3 健壮性当输入数据不合理时，算法能够做出相应的处理，而不会产生异常或莫名其妙的结果。 2.2.4 时间效率高和存储量低尽量满足 2.3 算法效率的度量方法2.3.1 事后统计方法有较大缺陷，不考虑 2.3.2 事前分析估算方法定义：在计算机程序编制前，依据统计方法对算法进行估算。 抛开硬件和软件的影响，程序运行时间依赖于算法的好坏和问题的输入规模。 分析程序的运行时间，最总要的是把程序看成是独立于程序设计语言的算法或一系列步骤。","tags":"c语言 数据结构"},{"title":"深入理解计算机系统","url":"/posts/e8670b7a.html","text":"待学习…","tags":"电子信息"},{"title":"流固耦合仿真","url":"/posts/6ad5bd55.html","text":"待学习…","tags":"科学研究 comsol 流固耦合"},{"title":"人生在世","url":"/posts/b9908884.html","text":"Recording life. 2023-4-19世界很大，世界很小山东科技大学北门事件","tags":"随笔"},{"title":"PLC 200 SMART 学习手册","url":"/posts/3eef07d.html","text":"待学习… 2023.8.221.特殊标志继电器 (SM)SM0.0：始终接通； SM0.1：首次扫描为1，以后为0，常用来对程序进行初始化； SM0.2：当机器执行数学运算的结果为负时，该位被置1； SM0.3：开机后进入RUN方式，该位被置1一个扫描周期； SM0.4：该位提供一个周期为1分钟的时钟脉冲，30秒为1，30秒为0； SM0.5：该位提供一个周期为1秒钟的时钟脉冲，0.5秒为1，0.5秒为0； SM0.6：该位为扫描时钟脉冲，本次扫描为1，下次扫描为0； SM0.7: 指示CPU工作方式开关的位置，0为Term位置。1为Run位置; SM1.0：当执行某些指令，其结果为0时，将改位置1； SM1.1：当执行某些指令，其结果溢出或为非法数值时，将改位置1； SM1.2：当执行数学运算指令，其结果为负数时，将改位置1； SM1.3：试图除以0时，将改位置1","tags":"自动化 西门子"},{"title":"Linux编程基础操作","url":"/posts/b81877f0.html","text":"Linux学习备忘 创建文件 [kb]vi test2.c 编译并执行文件 gcc (文件名加后缀) &amp;&amp;.&#x2F;a.out 退出文件 shift ＋ Z ＋ Z 复制光标所在整行 yy 删除 (剪切) 光标所在整行 dd 将之前删除 (dd) 或者复制 (yy) 的数据粘贴到光标后面 p 光标定位到最后一行 Shift + G 快速打开终端 Shift + Alt + t 新建文件夹 mkdir 回退文件夹 cd .. 代码左移或右移 v进入vision模式，移动选中一行或多行代码shift + &lt; 整体左移shift + &gt; 整体左移 修改文件夹名称 mv file1 file2","tags":"linux 编程"},{"title":"Yilia主题添加更新日期","url":"/posts/bcd402f1.html","text":"[block] 在themes\\yilia-plus\\layout\\_partial中找到article.ejs，搜索date关键词，找到文章日期的代码，然后将代码中date改为update，然后将这段代码复制到你想显示的位置。 123&lt;% if (!post.noupdated)&#123; %&gt;&lt;%- partial(&#x27;post/updated&#x27;, &#123;class_name: &#x27;archive-article-updated&#x27;, date_format: null&#125;) %&gt;&lt;% &#125; %&gt; 在themes\\yilia-plus\\layout\\_partial\\post中，新建update.ejs文件，输入如下代码 1234&lt;a href=&quot;&lt;%- url_for(post.path) %&gt;&quot; class=&quot;&lt;%= class_name %&gt;&quot;&gt;&lt;time updatedtime=&quot;&lt;%= date_xml(post.updated) %&gt;&quot; itemprop=&quot;updatedPublished&quot;&gt;&lt;strong&gt;&lt;font color=black&gt;&lt;%= &quot;更新日期：&quot;%&gt;&lt;/strong&gt;&lt;%= date(post.updated, date_format) %&gt;&lt;/time&gt;&lt;/a&gt; 这样，就可以在底部声明添加文章更新日期。","tags":"hexo 博客"},{"title":"压电元件阻抗分析","url":"/posts/37b07429.html","text":"对压电元件进行阻抗分析，获得压电元件的阻抗特性 1.创建阻抗分析项目 打开workbench，在左侧分析系统找到“Harmonic Response”，即“谐响应模块”。建立谐响应分析。 2.首先定义所需的材料 常见材料在ANSYS材料库中都有，如果没有需要的材料可以自定义。 3.模型导入 一般在其他三维软件中建立模型，导入进workbench中。 4.网格划分 主要方法为扫掠和自由划分， (1).","tags":"科学研究 ansys"},{"title":"0基础学习C语言","url":"/posts/4b23d230.html","text":"《带你学C带你飞》 scanf函数从标准缓冲区读取数据，在使用scanf函数输入字符时，需要清除缓冲区或在%c前添加一个空格，示例：scanf(&quot; %c&quot;,&amp;name)，否则函数读取到的是上一次输入后的回车。 引用math库时，在GCC编译时需要加-lm，示例gcc name.c -lm。 指针 在定义指针后，后续使用 *运算符得到的是指针指向对象的值。 scanf_s:使用时需要输入数组长度。（不输入不影响使用）1scanf_s(&quot;%s&quot;,name,1)； 3.数组在使用printf指令打印时具有特殊性，因为输出字符串是通过读取字符串地址，即：输出字符串只需找到字符串的地址，不需要进行解引用。 递归基本条件：1. 调用函数自身。 2. 需要正确的结束条件。 快速排序 动态内存管理 malloc函数 free 函数用于释放malloc、calloc、realloc函数申请的内存空间 内存泄漏:1.申请的动态内存没有及时释放。2.内存地址丢 memset: 初始化内存空间memcpy: 复制内存 calloc动态申请nmemb个长度为size的连续内存空间，并全部初始化为0. realloc C语言内存布局代码段： 数据段： BSS段： 堆： 栈： 小甲鱼39节视频中最后一个问题：a和b都是由计算机分配的，存在于栈中，因此a位于高地址，b位于低地址，在强制转换后b为int类型，最大存储数据为255，因此存储258时，在数据达到256后，数据溢出到高位地址，即a的地址，本身为0的a在＋1后变为1，而溢出后b的值变为0，b又重新开始计数，因此258-266&#x3D;2. 宏定义内联函数使用inline避免宏定义缺陷 预处理运算符：#（将符号后的内容装换成字符串）和##（记号连接运算符）。 可变参数结构体定义： 123456struct Name&#123; 结构体组成1； 结构体组成2； 结构体组成3；&#125;; 声明： char Name name 访问： Name.title 内存对齐 结构体数组和结构体指针单链表头插法 尾插法 使用方法：利用静态指针指向单链表的尾部 内存池由于结构体使用的内存空间是一定的，因此小甲鱼的课程在从内存池申请空间时，没有声明变量大小。 typedef给数据类型起别名对类型的封装 共用体union 初始化共用体：只能一次初始化一个成员。 枚举类型声明枚举类型enum 枚举类型名称 {枚举值名称,枚举值名称}； 定义枚举变量enum 枚举类型名称 枚举变量1,枚举变量2； 位域位操作和位运算逻辑位运算符：~ 按位取反 将1变0、将0变1&amp; 按位与^ 按位异或 位不同为1，位相同为0| 按位或 &amp; ^ | 可以和赋值号（ &#x3D; ）结合 移位运算符：左移位运算符 &lt;&lt;右移位运算符 &gt;&gt; 掩码打开和关闭文件输入 -&gt; 处理 -&gt; 输出 函数：fopenfclose 读写文件####顺序读写 单个字符读取和写入读取字符函数：fgetc、getc写入字符函数：fputc、putc 整个字符串读写函数：fgets、fputs 格式化读写文件函数：fscanf（scanf form file）、fprintf（printf to file） 二进制读写文件函数：fread、fwrite 随机读写函数：ftell、rewind、fseek 标准流标准输入：stdin标准输出：stdout标准错误输出：stderr 错误指示器：ferror清除末尾指示器和错误指示器：cleanerr存储错误原因：errno打印错误原因：perror直接返回错误信息：strerror IO缓冲区函数：setvbuf指定缓存模式 块缓存：行缓存：不缓存：fflush","tags":"c语言"},{"title":"声场与流场相互作用仿真","url":"/posts/1a9f9e17.html","text":"简介：声学与流场产生的流体流动研究。 思路一：二维截面官方程序： [微通道横截面中的声流] 主要方法温度（可选）、声学、流动、粒子追踪 改动：在层流场中添加气体边界条件，增加入口速度和出口压力。备注：1.大部分情况下声场使用线弹性，远距离传播考虑热传导和粘性2.流场利用声场产生的振速 存在问题：1.频域计算压力远大于实际产生的声压。2.声压与气压是两个单独变量无法叠加。 思路二：线性N-S方程备注：1.COMSOL中压力声学是一个无黏性无流动的简化模型。2.一般假设声场不影响流动，流动影响声场 压电微泵Create a new post","tags":"科学研究 comsol"},{"title":"Test Page","url":"/posts/4832c66c.html","text":"测试代码、记录效果 2023年10月29日注释1&lt;!--text--&gt; 2023年10月22日引入图片的两种方法 简单快捷，但无法调整样式 1![图片描述](图片.png) 通过&#123;%%&#125;可以添加样式控制 123&lt;div style=&quot;width:50%;margin:auto&quot;&gt;&#123;% asset_img 图片名称.png %&#125;&lt;/div&gt; 2023年8月6日思维导图安装命令：npm install hexo-simple-mindmap 思维导图 Tab分级 不能引入图片 引用块代码： 1234&#123;% blockquote %&#125;#### Warning HeaderWarning content&#123;% endblockquote %&#125; 效果： Warning HeaderWarning content 也可以使用&gt; 12&gt; #### Warning Header&gt; Warning content 效果: Warning HeaderWarning content","tags":"随笔"},{"title":"Hello World","url":"/posts/4a17b156.html","text":"Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub. Quick StartCreate a new post1$ hexo new &quot;My New Post&quot; More info: Writing Run server1$ hexo server More info: Server Generate static files1$ hexo generate More info: Generating Deploy to remote sites1$ hexo deploy More info: Deployment","tags":""},{"title":"timeline","url":"/timeline/index.html","text":"","tags":""}]}