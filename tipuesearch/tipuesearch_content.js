var tipuesearch = {"pages":[{"title":"butterfly 更改顶图和背景","url":"/posts/eb83d88e.html","text":"Butterfly主题 一图流背景与顶部图修改配置参数：index_img：网站背景index_top_img_height：顶图高度background：顶图背景footer_bg：页脚背景mask.header：遮罩原文地址：Butterfly主题 一图流背景与顶部图修改","tags":"butterfly"},{"title":"butterfly 折腾合集","url":"/posts/5a9dcefa.html","text":"butterfly 折腾合集1.更改顶图和背景","tags":"butterfly"},{"title":"ASP.NET core: 日志","url":"/posts/fb2f0a84.html","text":"简介：无 3.3 日志系统需要引用以下几个包 Microsoft.Extensions.DependencyInjection; Microsoft.Extensions.Logging Microsoft.Extensions.Logging.Console; 3.3.2.1 使用NLog配置文件需要选择“如果较新则复制” 3.3.2.2 NLog深入按照命名空间过滤日志 新建命名空间 新建日志输出类 设置输出条件 nlog.config中的关键字archiveAboveSize：超过多少字节就把日志存档。 maxArchiveFiles：最大文件数 final设置为true，匹配后不再向下匹配 NLog使用时尽量使用NLog自身的日志等级过滤方法，避免冲突 3.4 结构化日志和集中式日志3.4.1 结构化日志安装Serilog.AspNetCore Log.Logger = new LoggerConfiguration().MinimumLevel.Debug().Enrich.FromLogContext().WriteTo.Console(new JsonFormatter()).CreateLogger();LogBuilder.AddSerilog(); 3.4.2 集中式日志Exceptionless、ELK 🪧🪧🪧 解决方案的能力 3.4.3 总结1、普通项目使用NLog输出至文本文件中即可。 2、集群部署用Serilog+集中式日志 3、云服务或Exceptionless本地部署","tags":"asp.net-core"},{"title":"Avalonia","url":"/posts/3f413ee7.html","text":"简介：无 Avalonia不显示中文下载字体后放入Assets文件夹，然后引用字体。 FontFamily=&quot;avares://AvaloniaApplication1/Assets/#MicroSoft Yahei&quot;","tags":"avalonia"},{"title":"程序：打开不同类型文件","url":"/posts/2da389c1.html","text":"简介：无 namespace 打开文件程序&#123; internal class Program &#123; static void Main(string[] args) &#123; Console.WriteLine(&quot;请选择要进入的磁盘&quot;); string path = Console.ReadLine(); Console.WriteLine(&quot;请选择要打开的文件&quot;); string fileName = Console.ReadLine(); string filePath = path + fileName; //里氏转换,将子类赋值给父类 OpenFile openFile = GetFile(fileName); //调用文件打开方法 openFile.Open(filePath); &#125; //简单工厂设计模式，根据文件类型不同，返回不同的子类 public static OpenFile GetFile(string fileName) &#123; //建立一个父类 OpenFile openFile = null; //获取文件后缀 string fileType = fileName.Substring(fileName.LastIndexOf(&#x27;.&#x27;) + 1, 3); //根据文件类型确定子类 switch (fileType) &#123; case &quot;txt&quot;: openFile = new TxtOpen(); break; default: break; &#125; return openFile; &#125; &#125; /// &lt;summary&gt; /// 父类 /// &lt;/summary&gt; public class OpenFile &#123; string _fileName; public string FileName &#123; get; set; &#125; string _path; public OpenFile() &#123; //this._path = filePath; &#125; public void Open(string filePath) &#123; ProcessStartInfo psi = new ProcessStartInfo(filePath); Process p = new Process(); p.StartInfo = psi; p.Start(); &#125; &#125; /// &lt;summary&gt; /// 子类 /// &lt;/summary&gt; public class TxtOpen : OpenFile &#123; public TxtOpen() &#123; &#125; &#125;&#125;","tags":"c#"},{"title":"设计模式","url":"/posts/364ea8cc.html","text":"简介：无 1. 简单工厂","tags":"设计模式"},{"title":"进阶：S7-1500","url":"/posts/5e62758.html","text":"简介：无 第一节：1500和1200区别 1.1 硬件特性 1）1500最多拓展30个模块 2）1500位指令执行速度更快 3）200个点（SMART）1000个点（1200）1000个点以上（1500） 第二节：分类 PN（网口）、DP（串口） 无字（标准型）、C（紧凑型）、T（工艺型）、F（故障安全型）、R或H（冗余型） 运行灯、故障灯、数据灯（由左至右） 第三节：硬件实物 3.1 数字量输入模块 HF代表高性能，带有高速计数 BA代表基本型、ST标准型 3.2 数字量输出模块 例子：1接KA的14，13出来接负 属性-&gt;通道模板-&gt;诊断 3.3 模拟量输入模块 3.4 模拟量输出模块 查看说明书 3.5 高速计数器 编码器接入到高性能DI模块（只有通道0和通道1有）或专用计数器模块 启用0通道和1通道上的计数器 启用后会出现输出地址 字节X+4到X+11对应通道0 从IBX+4的4个字节，代表当前计数值 IBX+8，代表状态区，IB(X+8).0达到条件后输出，置1 设置初始值： 输出： X+0到X+7对应通道0输出。X+4是状态区QB(X+4) *【 QB(X+4).2，QB(X+4).1，QB(X+4).0】000无操作，001装载计数值，011装载起始值（初始值是上次计数值） 软件门：QB(X+4).3，0停止，1启动 高速计数器模块：工艺 A0, B0, [接黑白] N0, DI, DQ 西门子NPN是源型 第四节：通信 4.1 1500与1200 * 4.2 1500与1500 * 4.3 触摸屏","tags":"无"},{"title":"汇川伺服调试参数","url":"/posts/2d48590f.html","text":"简介：无","tags":"无"},{"title":"电工知识","url":"/posts/57df7c97.html","text":"简介：无 2024年5月5日 器具的额定电流（A） 软线截面积（mm²） 用于固定布线的电缆截面积（mm²） ≤3 0.5 和 0.75 1-2.5 ＞3 和≤6 0.75 和 1 1-2.5 ＞6 和≤10 1 和 1.5 1-2.5 ＞10 和≤16 1.5 和 2.5 1.5-4 ＞16 和≤25 2.5 和 4 2.5-6 ＞25 和≤32 4 和 6 4-10 ＞32 和≤40 6 和 10 6-16 ＞40 和≤63 10 和 16 10-25","tags":"电工"},{"title":"Siemens PLC 1200","url":"/posts/5d7c375d.html","text":"简介：无 第一节：区别对比 1200 可以仿真 硬件、软件分开下载 FC（函数）、FB（函数块） OB（中断程序）（非重点） 定时器（最大21天）、计数器：自行创建，个数取决于内存。 M存储区和DB块 变量表 监控和强制表 一个程序段可以有多个回路 指令可以直接连左母线 模拟量输入 IW 模拟量输出 QW 高速计数器变为 ID，ID1000（默认）、ID1004 第二节：1200 硬件CPU 1211C DC&#x2F;DC&#x2F;DC AC：交流电DC：直流电Rly：继电器输出 DC&#x2F;DC&#x2F;DC (PLC、I点、O点)SIPLUS 宽温型 1211C：C代表紧凑型CM&#x2F;CP：通信模块（串口和网口）SM：信号模块（开关量和模拟量）（DI&#x2F;DQ&#x2F;AI&#x2F;AQ）最多8个 CPU 1500： PM&#x2F;PS（负载电源&#x2F;系统电源）：PS可以放在中间。（无需组态）CPU：最多32个模块 分布式I&#x2F;O PLC型号 特点 1212C 8DI和6DQ，4个高速输入，4个高速输出，2个模拟量输入 1214C 14DI和10DQ，6个高速输入，4个高速输出，2个模拟量输入 1215C 8DI和6DQ，6个高速输入，4个高速输出，2个AI，2个AQ 第三节：1500 硬件 分类 1500 PLC型号 特点 标准型 无字 紧凑型 带C 工艺（运动）型 带T 故障安全型 带F 冗余型 带H或R CPU 1517T-3PN&#x2F;DP：必须插卡 T：运动3：三个通信口PN：网口DP：串口 接口模块 和分布式IO通讯。 通信模块 工艺模块 高速计数：TMCount2×24V，支持增量编码器 位置检测： 时间戳模块： PTO脉冲输出模块：TMPTO4 称重模块： 总结： 第四节：软件基础操作 4.1 下载 1）在CPU上右击PLC-&gt;下载到设备-&gt;硬件配置 2）程序更新选择“软件（全部下载）” 4.2 上传 4.2.1 菜单栏“在线”-&gt;将设备作为新站上传 4.2.2 添加设备-&gt;CPU-&gt;非指定的CPU-&gt;获取 Tips： PG&#x2F;PC接口：PN&#x2F;IE 4.3 起保停 1）右击“重命名变量”。 2）下载“硬件配置”。 4.4 仿真 第五节：数据类型 5.1 SMART数据类型 序号 类型 符号 位数 存储区 备注 1 位(bit) BOOL &#x2F; &#x2F; &#x2F; 2 字节 byte 8位 IB0 VB0 QB0 MB0 QB0 非负数 3 字 WORD 16位 IW0 非负数 4 双字 DWORD 32位 VD0 非负数 5 双整数 DINT 32位 &#x2F; 有正负 6 浮点数 REAL 32位 VD 有正负 7 TIME &#x2F; 32位 &#x2F; -24天~24天 5.2 新增类型 |序号 |符号 |位数 |备注 | |–|–|–|–|–|–| |1 |USINT |8位 |0-255 | |2 |UINT |16位 |0-65535 | |3 |UDINT |32位 | 无 | |4 |SINT |8位 | 无 | |5 |LREAL |64位 | 无 | 5.3 分类 基本数据类型 复杂数据类型 自定义（结构） 5.4 DB块（数据块） 数据类型、存储区、寻址方式 寻址方式：直接寻址（在指令给出存储器或寄存器）、立即寻址（数据以常量的形式出现在指令中）、间接寻址（使用地址指针给出要访问的存储区或寄存器地址，通讯中常见） 1 DB块有1位，8位，16位，32位。 2 添加新块 -&gt; 全局DB -&gt; 属性&#x2F;取消优化 偏移量就是地址。 5.5 置位、复位 5.5.1 常开、常闭、线圈 5.5.2 取反NOT、取反线圈 5.5.3 置位和复位 5.5.4 置位位域、复位位域 5.5.5 SR和RS指令 5.5.6 上升沿、下降沿 第六节：定时器和计数器 6.1 定时器和计数器 1）种类：TON、TOF、TONR、TP（脉冲型：触发一次就开始计时，Q点得电，时间到，Q点失电） 2）计数器：CTU、CTD、CTUD 建立方法：自动建立或手动建立DB块 3）PLC-&gt;常规-&gt;系统和时钟存储器 6.2 第七节：功能指令 7.1 传送 1）MOVE、MOVE_BLK、FILL_BLK 2）S7-1200只能以数组来传递数据。 3）SWAP：交换（了解即可） 7.2 比较 1） 7.3 转换指令 1）Convert： 7.4 数学函数（运算指令） 1）CALCULATE： 第八节：FC和FB（都是子程序） 必须用main[OB1]调用 8.1 FC（函数）（无背景DB） 1）函数没有专用存储区 2）分为带参（input、output、inout、temp、constant）和不带参 3）经常用作不带参子程序 8.2 FB（函数块）（有专用背景DB） 1）分为带参（input、output、inout、static、temp、constant）和不带参 2）单个实例：调用一次，只为一个FB。 3）FB可以保持循环扫描结果，FC不行。 8.3 OB（组织块） 8.4 DB（全局DB、背景DB） 第九节：步进控制 9.1 选型 1）PLC、步进驱动器、电机 2）伺服运动控制类型：PTO（脉冲，开环）（最多4个轴）、PROFIdrive（通信、闭环）（最多16个轴）、模拟量（闭环）（最多8个轴） 3）1200所有Q点都能发脉冲 4）PWM：脉宽调制。 5） 9.2 接线 9.3 组态 1）工艺对象-&gt;新增对象-&gt;运动控制-&gt;轴 2）启动&#x2F;停止速度：设置的所有速度大于此速度。 3）接近速度：快。回原点速度：慢。 4）归为开关侧：在原点开关两边。 9.4 调试 9.5 程序 1）启用轴[MC_Power]： 2）复位轴[MC_Reset]: 确认错误。 3）回原点[MC_Home]: 主动回原点（Mode &#x3D; 3） 自动执行回原点步骤。必须有限位开关 被动回原点（Mode &#x3D; 2） 被动回原点期间，运动控制指令“MC_Home”不会执行任何回原点运动。用户需通过其它运动控制指令，执行这一步骤中所需的行进移动。检测到回原点开关时，轴即回原点。 直接绝对回原点（Mode &#x3D; 0） 将当前的轴位置设置为参数“Position”的值。 直接相对回原点（Mode &#x3D; 1） 将当前轴位置的偏移值设置为参数“Position”的值。（绝对＋相对） 4）暂停轴[MC_Halt] 5）绝对定位[MC_MoveAbsolute] 定位指令用不用沿都可以 6）相对定位 7）手动[MC_MoveJog]：不能用沿触发 8）恒速[MC_MoveVelocity] 9.6 细节 位置和速度信息在轴的DB编辑器中。 第十节：编码器和高速计数器 10.1 硬件 1） 10.2 组态 1）启用高速计数器 2）计数、单相、硬件输入 3）滤波：在数字量输入-&gt;0.1 microsec 4）门输入：相当于外部按钮（不能用强制），启用或禁用计数。硬件输入中选择门输入。 5）同步输入：相当于外部按钮复位或清零。 10.3 指令 1）控制高速计数器： 2）扩展高速计数器：HSC（HSC标识符）、CTRL（数据类型 Vari） 新建DB块，新建数据类型HSC_Count EnHSC：计数使能。 CurrentCount：当前计数值。 Ensync：复位计数器。必须和同步输入同时执行。 组态完成后需要指令。 3）编码器断电保持： DB块中勾选保持 添加控制功能，按下启动就传入保持值。 第十一节：开放式TCPIP通信、S7通信 11.1 开放式TCPIP通信 1）组态plc，勾选时钟存储器 2）连接机制：PUT&#x2F;GET访问 3）组态另一台PLC，步骤同1）、2） 4）PLC在同一个网段：网络视图 11.2 指令 1）TSEND_C：点开右上角组态。连接数据：新建。 REQ：选择脉冲 2）TRCV_C：点开右上角组态。 EN_R： 11.3 拓展 1）P#DB0.DBX0.0 REAL（数据类型） 1（个数） 11.3 S7通信（西门子产品） 1）组态，时钟，PUT&#x2F;GET 2）网络视图 3）一台PLC建立DB1，建立一个位，作为发送，调用PUT指令 4）另一台建立DB1，建立1个位，作为接收，不需要调用指令 5）PUT：SD_1（发送到ADDR_1)（发送端地址）、ADDR_1（接收端地址） 6）GET： 7）SMART中只能传到V区，代号DB1.DBX0.0 REAL 1 11.4 多条通讯指令 1）上一条通信完成位触发下一条指令。 2）都用脉冲触发。 11.5 建议 1）网口通讯，最少以字节为单位。 2）串口通信，最少以16位为单位。 3）设置M断电保持，多次下载后空间会出现已满的情况。DB区断电后不会出现。 第十二节：常用操作 12.1 恢复出厂设置 1）新的内存卡，断电插入。 2）软件恢复：在线访问-&gt;网卡-&gt;更新可访问设备-&gt;PLC-&gt;在线和诊断-&gt;功能-&gt;复位为出厂设置-&gt;重置 第十三节：分布式（远程IO） 13.1 选型 1）ET200SP（32个模块，不需要额外电源）、ET200MP、ET200M（用于300系列）、ET200S（64个，每6-8添加一个电源模块） 2） BA：基本型； ST：标准型；IM155-6PN SI HF：增强型； HS：高速型； 13.2 组态 1）RTD：热电阻。TC：热电偶。 2）浅色底座需要接电源，深色不需要。 3）模拟量输出模块2个一组，一正一负。 4） 第十四节：变频器MODBUS RTU通信 14.1 硬件 14.2 指令 1）Modbus_Comm_Load：主站定义参数 2）Modbus_Master：主站读写 3）Modbus_Slave：从站定义 14.3 1）打开时钟存储位和系统存储位 2）添加模块 3）半双工：发完才能收，485使用。全双工：可同时发收。 4）H代表16进制 5）2101H，实际写地址转成10进制加40001 14.4 变频器核心参数（每种变频器不一样） n2.00&#x3D;4 （运行来自通讯指令有效） n2.01&#x3D;3 （频率来自通讯指令有效） n9.00&#x3D;3 （站号） n9.01&#x3D;1 （波特率） 14.5 串口接线 232：3对应RJ45：5 232：8对应RJ45：4 第十五节：V90伺服 驱动器功率等于或略大于伺服功率。 15.1 硬件接线 电源220V、 位置模式：。速度模式：。 15.2 V90调试软件（V-ASSISTANT) 1）打开后，工具-&gt;恢复出厂值 2）选择驱动器和电机 3）标准报文3，可以用步进的指令 4）PN站名和IP需要和PLC中的一致 5）设置完成下载到驱动器，工具-&gt;保存参数到ROM 6）使能，点动测试 15.3 V90组态 1）打开允许远程PUT\\GET访问 2）添加V90伺服后（其他现场设备），子模块-标准报文3 3）改IP、站名，用网线连接 15.4 调试和程序编写 1）添加工艺对象，设置参数 2）下载硬件，调试轴 3）在DB编辑器查看参数 第十六节：模拟量温度传感器-&gt;变送器-&gt; 16.1 硬件和接线 1）通道0和1的信号要一致，都是电流或电压 2） 3） 16.2 组态 1） 16.3 指令 1）模拟量输入： 2）模拟量输出：电流不允许开路 3）标准化、缩放 16.4 控制变频器 第十七节：PID恒液位调节比例、积分、微分 17.1 硬件和接线 1）输入端：液位传感器正接24V，负接AI正极，AI负极与0V连接。 2）输出端：0M（-）接变频器AC，0（+）接变频器A1。 17.2 指令 1）工艺对象-&gt;新增对象-&gt;选第一个 2）右侧工具栏-&gt;PID 3）管脚： setpoint：设定值 input：测量值 output-PER：模拟量输出 *4）PID要写在OB30（循环中断）里。 17.3 组态 1）重启后：自动模式 2）过程值。 17.4 调试 1）测量开始 2）选调节模式，先预调节，再精确调节 3）稳定后，参数下载到PLC 第十八节：触摸屏先写程序，再做画面。 18.1 硬件 1）博图屏（用博图软件）、SMART屏（专用软件）、WinCC（上位机）（WinCC7.5和博图WinCC） 2）博图屏分类：串口不能仿真 3）选择允许远程对象通信访问 4） 18.2 添加组件（按钮、指示灯、I&#x2F;O域、切换画面、报警） 1）文本格式改变字体大小 2）常规中改文字内容 3）事件-&gt;按下-&gt;添加函数-&gt;编辑为-&gt;置位位、释放-&gt;复位位 4）写入失败：设置PG&#x2F;PC接口-&gt;选择实际网卡 5）在触摸屏变量表中更改触摸屏变量采集周期 6）DB块中的变量可以不取消优化 7）在外观中可以添加单位 8）切换页面：事件-&gt;按下-&gt;激活屏幕 18.3 报警（离散量【开关量】、模拟量） 1）首先建立16位地址、选择触发位 2） 18.4 PC station（上位机） 1）运行系统设置&gt;&gt;全屏模式（取消勾选）&gt;&gt;","tags":"siemens plc 1200"},{"title":"TIA 博图小知识","url":"/posts/ddf9bf4.html","text":"简介：无 2024年5月30日缩写名称：* SDT（System Data Type）系统数据类型。 2024年4月22日安装博图后出现通讯设置在任务管理器中找到SCSMonitor服务，将自动改为手动。","tags":"随笔"},{"title":"毛选语录摘抄","url":"/posts/6e6d4d0d.html","text":"简介：无","tags":"随笔"},{"title":"C Sharp 入门详解笔记","url":"/posts/312a0f46.html","text":"简介：无 第17章：字段、属性、索引器、常量属性属性是由Set&#x2F;Get方法进化来的public class student&#123; private int age; public int Age &#123; get &#123; return this.age; &#125; set &#123; if (value &gt; 0 &amp;&amp; value &lt; 120) &#123; this.age = value; &#125; else &#123; throw new Exception(&quot;Age is error!&quot;); &#125; &#125; &#125;&#125; 动态计算值的属性第一种 public class student &#123; private int age; public int Age &#123; get &#123; return age; &#125; set &#123; age = value; this.CaculateCanWork(); //赋值时主动计算，不适用在age经常改变但CanWork不经常被访问时。因为每改变一次就计算一次CanWork。 &#125; &#125; private bool canWork; public bool CanWork &#123; get &#123; return canWork; &#125; &#125; private void CaculateCanWork() &#123; if (this.age &gt; 16) &#123; this.canWork = true; &#125; else &#123; this.canWork = false; &#125; &#125; &#125;&#125; 第二种 public class student &#123; private int age; public int Age &#123; get &#123; return age; &#125; set &#123; age = value; &#125; &#125; //在访问时计算，因此当CanWork被经常访问浪费计算机性能。在设定age计算一次即可。 public bool CanWork &#123; get &#123; if (this.age &gt; 16) &#123; return true; &#125; else &#123; return false; &#125; &#125; &#125; &#125;&#125; 第18章 参数传值参数","tags":"无"},{"title":"C#使用技巧","url":"/posts/597266b9.html","text":"2024年8月13日3.3 日志系统需要引用以下几个包 Microsoft.Extensions.DependencyInjection; Microsoft.Extensions.Logging Microsoft.Extensions.Logging.Console; 3.3.2.1 使用NLog配置文件需要选择“如果较新则复制” 3.3.2.2 NLog深入按照命名空间过滤日志 新建命名空间 新建日志输出类 设置输出条件 nlog.config中的关键字archiveAboveSize：超过多少字节就把日志存档。 maxArchiveFiles：最大文件数 final设置为true，匹配后不再向下匹配 NLog使用时尽量使用NLog自身的日志等级过滤方法，避免冲突 2023年12月28日C#快速排版Ctrl K + Ctrl D 2023年12月27日修改为仅使用Tab进行补全编辑&#x2F;Intellisense&#x2F;在自动和仅限Tab的Intellisense完成之间切换（快捷键 Ctrl+Alt+Space） C#开源项目 https://github.com/microsoft/PowerToys https://qithub.com/shadowsocks/shadowsocks-windows https://github.com/2dust/v2rayN https://github.com/PowerShell/PowerShell https://github.com/dotnet/aspnetcore https://github.com/dotnet-architecture/eShopOnContainers https://github.com/huiyadanli/RevokeMsgPatcher https://github.com/Kyome22/RunCat_for_windows https://github.com/bitsadmin/fakelogonscreen https://github.com/2881099/FreelM https://github.com/AdminTest0/SharpWxDump https://github.com/keijiro/AICommand","tags":"c#"},{"title":"SolidWorks使用技巧","url":"/posts/74c008c3.html","text":"简介：无 2023年12月15日图纸标题栏文字1.选项-&gt;输出-&gt;dwg文件-&gt;字体-&gt;Truetype 2023年11月19日装配体批量上色 评估-&gt;装配体直观 左侧导航栏-&gt;质量-&gt;添加显示状态-&gt;配置页面-&gt;双击”直观显示状态”","tags":"solidworks"},{"title":"QT和OPENCV环境配置-使用Mingw","url":"/posts/6a4765f.html","text":"简介：结合自己的配置过程，供大家参考 1.软件版本：QT： 6.2.4OPENCV： 4.8Python： 3.12Cmake： 官网最新版 2.安装过程：略3.Cmake使用参考此视频传送门: OpenCV4 + Qt5 开发环境配置 4.报错处理报错结尾为opencv_core在cmake里面取消OPENCV_ENABLE_ALLOCATOR_STATS的勾选，重新Configure和Generate，在powershell窗口中继续使用mingw32-make -j编译。 报错中有VS_VERSION在CMAKE中添加一项add Entry -&gt; 名称：OPENCV_VS_VERSIONINFO_SKIP 类型：BOOL","tags":"无"},{"title":"QT+HALCON环境配置","url":"/posts/f8f37c42.html","text":"简介：QT 6.2.4 &#x2F; HALCON 22.11.0.0 1.在.pro文件中添加以下代码win32:DEFINES += WIN32INCLUDEPATH += &quot;$$(HALCONROOT)/include&quot;INCLUDEPATH += &quot;$$(HALCONROOT)/include/halconcpp&quot;QMAKE_LIBDIR += &quot;$$(HALCONROOT)/lib/$$(HALCONARCH)&quot;unix:LIBS += -lhalconcpp -lhalcon -lXext -lX11 -ldl -lpthreadwin32:LIBS +=&quot;$$(HALCONROOT)/lib/$$(HALCONARCH)/halconcpp.lib&quot; \\&quot;$$(HALCONROOT)/lib/$$(HALCONARCH)/halcon.lib&quot; 注意添加位置 2. 在头文件中添加以下代码#include &lt;HalconCpp.h&gt;// 后期根据需要添加头文件using namespace HalconCpp; HObject ho_Image;HTuple hv_Width,hv_Height,hv_WindowHandle;Hlong widid; 3. 在mainwindow.cpp文件中添加窗口代码widid=static_cast&lt;Hlong&gt;(ui-&gt;label-&gt;winId());OpenWindow(0,0,ui-&gt;label-&gt;width(),ui-&gt;label-&gt;height(),widid,&quot;visible&quot;,&quot;&quot;,&amp;hv_WindowHandle); ReadImage(&amp;ho_Image,&quot;G:/CV/HALCON/1.jpg&quot;); // &quot;G:/CV/HALCON/1.jpg&quot;需要更改为自己电脑中图片的路径GetImageSize(ho_Image,&amp;hv_Width,&amp;hv_Height);HDevWindowStack::Push(hv_WindowHandle);if(HDevWindowStack::IsOpen()) SetPart(HDevWindowStack::GetActive(),0,0,hv_Width-1,hv_Height-1);if(HDevWindowStack::IsOpen()) DispObj(ho_Image,HDevWindowStack::GetActive()); 4. 在UI文件中添加一个label和pushbottonpushbotton右键选择提升槽,选择clicked. 调试运行","tags":"cv halcon qt"},{"title":"名词整理","url":"/posts/e8917f8b.html","text":"简介：无 2023年10月24日 名词 含义 CODESYS CODESYS是一种功能强大的PLC软件编程工具，它支持IEC61131-3标准IL 、ST、 FBD 、LD、 CFC、 SFC 六种PLC编程语言，用户可以在同一项目中选择不同的语言编辑子程序，功能模块等。 OLE Object Linking and Embedding，对象连接与嵌入，简称OLE技术。OLE 不仅是桌面应用程序集成，而且还定义和实现了一种允许应用程序作为软件“对象”（数据集合和操作数据的函数）彼此进行“连接”的机制，这种连接机制和协议称为组件对象模型（COM）。OLE可以用来创建复合文档，复合文档包含了创建于不同源应用程序，有着不同类型的数据，因此它可以把文字、声音、图像、表格、应用程序等组合在一起。 OPC OPC（OLE for Process Control）, 用于过程控制的OLE，是一个工业标准，管理这个标准的国际组织是OPC基金会，OPC基金会现有会员已超过220家。遍布全球，包括世界上所有主要的自动化控制系统、仪器仪表及过程控制系统的公司。基于微软的OLE(现在的Active X)、COM （部件对象模型）和DCOM （分布式部件对象模型）技术。OPC包括一整套接口、属性和方法的标准集，用于过程控制和制造业自动化系统。 SMART原则 1. 绩效指标必须是具体的（Specific）2. 绩效指标必须是可以衡量的（Measurable）3. 绩效指标必须是可以达到的（Attainable）4. 绩效指标是要与其他目标具有一定的相关性(Relevant)5. 绩效指标必须具有明确的截止期限（Time-bound）","tags":"随笔"},{"title":"CAD模板调整手册","url":"/posts/904de5aa.html","text":"简介：无 2023年10月27日PL命令，起点-W回车-起点宽度3-端点宽度0.2-长度3-线长3-边长5的矩形 2023年10月24日螺栓沉孔标注中的特殊符号特殊符号 字体：gdt.shx，勾选大字体，gbcbig.shx 中文字体 字体：gbenor.shx，勾选大字体，gbcbig.shx","tags":"随笔"},{"title":"机器视觉技术基础","url":"/posts/80f300b5.html","text":"简介：无 2023年10月22日光的吸收与反射 采用单色光源照射时，由于单色光被其他颜色物体吸收，无法反射，在黑白相机中呈现黑色。相同单色物体反射光，在相机中呈现白色。","tags":"机器视觉"},{"title":"test2","url":"/posts/13bb8d58.html","text":"简介：无","tags":"无"},{"title":"EXCEL使用技巧","url":"/posts/59436549.html","text":"简介：EXCEL使用技巧 2023年10月22日单元格条件格式以百分比填充将条件格式的最大值设置为数字“1” 2023&#x2F;9&#x2F;10高阶甘特图 Ctrl+； 快速输入当前日期 格式-&gt;自定义-&gt;添加周AAA 显示周几 F4 绝对引用 TEXT(A1,”dddd”) *dddd为英文星期全称*ddd为英文星期简称*aaaa为中文星期全称*aaa为中文星期简称 weeknum(“”,“2，国外周日为第一天”) 返回日期在当年的周数 Ctrl+t 结构化表格、动态表、超级表 Ctrl+1 自定义格式 数据-&gt;数据验证-&gt;序列 添加下拉选项 条件格式-&gt;数据条 以单元格百分比显示","tags":"excel 办公技巧"},{"title":"Word快捷指令","url":"/posts/9f3f6fb5.html","text":"简介：Word快捷指令 2023&#x2F;9&#x2F;9线型： 虚线：三个“*”，回车 波浪线：三个“~”，回车 隔行线：三个“#”，回车 双直线：三个“&#x3D;”，回车 直线：三个“-”，回车 实例：","tags":"办公技巧 word"},{"title":"WIN11添加过时硬件“Microsoft KM-TEST环回适配器”","url":"/posts/2fae4cea.html","text":"简介：WIN11添加过时硬件“Microsoft KM-TEST环回适配器” 1.使用“WIN＋R”调出命令提示符，并输入“hdwwiz” 2.弹出添加硬件向导窗口，下一步 3.选择“安装我手动从列表选择的硬件”，下一步 4.选择“网络适配器”，下一步 5.在左侧找到“Micorsoft”，右侧选择“Microsoft KM-TEST环回适配器”，下一步 6.等待下载完成","tags":"随笔"},{"title":"星-三角启动","url":"/posts/81c86f89.html","text":"","tags":"电工电子"},{"title":"C#运动控制及界面开发","url":"/posts/682b50d5.html","text":"一、硬件电机、驱动器、板卡 二、软件XCOM 三、编程环境VS 2019 文件.cs:.dll:winform: 常用工具button：按钮panel：面板text：文本label：标签","tags":"工控"},{"title":"RobotStudio基础","url":"/posts/9d614237.html","text":"2023年8月6日1.RS中Smart组件添加直线传感器（1）编辑Smart组件（2）添加linesensor（直线传感器），更改传感器属性（3）拖动linesensor至Smart组件中工装夹具上；弹出是否更改传感器位置，选“否” 2.导入多个工件后，夹具工作时多个工件会一起运动取消工装夹具的可由传感器检测功能","tags":"工控 abb"},{"title":"Markdown技巧","url":"/posts/f3de4c07.html","text":"1. 星号成对使用 * * 和_ _内的文本会被转换为斜体 ** ** 或 __ __ 内的文本会被加粗（相邻符号内不能有空格） 在第一个符号前加入反斜杠 “ \\ ”，取消特殊格式 2. 表格 name1 name2 num name","tags":"随笔 markdown"},{"title":"第2章 这不是Bug，而是语言特性","url":"/posts/5e3708b8.html","text":"《C专家编程》 2.1 语言缺陷类型1：多做之过类型2：少做之过类型3：误做之过 2.2 多做之过2.2.1 switch语句中的“fall through”带来的问题 case语句后需要添加break结束switch的命令执行。 break中断了整个switch函数的执行，跳出了switch函数结构。 2.2.2 粉笔也成了可用硬件 在修饰变量的时候,static修饰的静态局部变量只执行一次初始化 字符串数组两个字符串成员之间需要添加逗号，否则两个成员会自动合并为一个成员，引发问题。 2.2.3 太多的缺省可见性无论是否有extern关键字，函数在任何地方均可以访问 添加static关键字可以限制文件对函数的访问 2.3 误做之过与C语言的简洁和操作符的优先级有关 2.3.1 骆驼背上的重载字符的过度使用、C语言中的符号重载 例：* 乘法运算符 用于指针，间接引用 在声明中，表示指针 sizeof(int) * p 中 *为乘法运算符； 2.3.2 “某些运算符的优先级是错误的” 优先级问题 表达式 人们可能误认为的结果 实际结果 .的优先级高于* -&gt;操作符用于消除这个问题 *p.f p所指对象的字段f (*p).f 对p取f偏移，作为指针，然后进行解除引用操作。*(p.f) []高于* int *ap[] ap是指向int数组的指针int(*ap)[] ap是元素为int指针的数组 int *(ap[]) 函数()高于* int *fp() fp是个函数指针，所指函数返回int。int(*fp)() fp是个函数，返回int* int *(fp()) &#x3D;&#x3D;和!&#x3D;高于位操作符 (val &amp; mask !&#x3D; 0) (val &amp; mask) !&#x3D; 0 val &amp; (mask !&#x3D; 0) &#x3D;&#x3D;和!&#x3D;高于赋值符 c&#x3D; getchar() !&#x3D; EOF (c&#x3D; getchar()) !&#x3D; EOF c&#x3D; (getchar() !&#x3D; EOF) 算术运算高于位移运算符 msb &lt;&lt; 4 + lsb (msb &lt;&lt; 4) + lsb msb &lt;&lt; (4 + lsb) 逗号运算符在所有运算符中优先级最低 i &#x3D; 1, 2 i &#x3D; (1, 2) (i &#x3D; 1), 2 优先级：乘法和除法先于加法和减法，在涉及其他操作符时一律加上括号。 结合性结合性只用于表达式中出现两个以上相同优先级的操作符的情况，所有的赋值符（包括复合赋值符）都具有右结合性，从右向左依次执行。左结合性的操作符：”&amp;”和”|” 2.3.2 早期gets()中的bug导致了internet蠕虫 2.4 少做之过2.4.1 若用户名中有f，便收不到邮件引起该错误的主要是由于系统对’-‘符号的糟糕解析，系统分不清该符号是是选项开关还是文件名。 2.4.2 空格——最后的领域 使用”&quot;字符对一些字符进行转义时，”&quot;与字符间不能有空格 也不可将所有的空格弃之不用 例：z &#x3D; y+++x |可以是z &#x3D; y++ +x 或 z &#x3D; y+ ++x 使用两个指针执行除法运算 例：ratio &#x3D; *x&#x2F;y |由于缺少空格”&#x2F;“被认为是注释符号","tags":"c语言"},{"title":"第2章 算法","url":"/posts/ef905eca.html","text":"《大话数据结构》 前言算法是解决特定问题求解步骤的描述，在计算机中表现为指令的有限序列，并且每条指令表示一个或多个操作。 2.1算法的特性 基本特性：输入、输出、有穷性、确定性和可行性 2.1.1 输入输出算法具有零个或多个输入，至少具有一个或多个输出 2.1.2 有穷性算法在执行有限的步骤后，自然结束而不会出现无限循环，并且每一个步骤在可接受的时间内完成。 2.1.3 确定性算法的每一步骤都具有确定的含义，不会出现二义性 2.1.4算法的每一步都必须是可行的，也就是说，每一步都能通过执行有限次数完成。 2.2 算法设计要求 正确性、可读性、健壮性、时间效率高和存储量低 2.2.1 正确性算法至少具有输入、输出和加工处理无歧义性，能正确反映问题需求，能够得到问题的正确答案。 算法层次：（1）算法程序没有语法错误（2）算法程序对于合法的输入数据能够产生满足要求的输出结果（3）算法程序对于非法的输入数据能够得出满足规格要求的结果（4）算法程序对于精心选择的，甚至刁难的测试数据都有满足要求的输出结果 2.2.2 可读性算法设计的目的之一是便于阅读、理解和交流。 2.2.3 健壮性当输入数据不合理时，算法能够做出相应的处理，而不会产生异常或莫名其妙的结果。 2.2.4 时间效率高和存储量低尽量满足 2.3 算法效率的度量方法2.3.1 事后统计方法有较大缺陷，不考虑 2.3.2 事前分析估算方法定义：在计算机程序编制前，依据统计方法对算法进行估算。 抛开硬件和软件的影响，程序运行时间依赖于算法的好坏和问题的输入规模。 分析程序的运行时间，最总要的是把程序看成是独立于程序设计语言的算法或一系列步骤。","tags":"c语言 数据结构"},{"title":"深入理解计算机系统","url":"/posts/e8670b7a.html","text":"待学习…","tags":"电子信息"},{"title":"流固耦合仿真","url":"/posts/6ad5bd55.html","text":"待学习…","tags":"科学研究 comsol 流固耦合"},{"title":"人生在世","url":"/posts/b9908884.html","text":"Recording life. 2023-4-19世界很大，世界很小山东科技大学北门事件","tags":"随笔"},{"title":"PLC 200 SMART 学习手册","url":"/posts/3eef07d.html","text":"待学习… 2023.8.221.特殊标志继电器 (SM)SM0.0：始终接通； SM0.1：首次扫描为1，以后为0，常用来对程序进行初始化； SM0.2：当机器执行数学运算的结果为负时，该位被置1； SM0.3：开机后进入RUN方式，该位被置1一个扫描周期； SM0.4：该位提供一个周期为1分钟的时钟脉冲，30秒为1，30秒为0； SM0.5：该位提供一个周期为1秒钟的时钟脉冲，0.5秒为1，0.5秒为0； SM0.6：该位为扫描时钟脉冲，本次扫描为1，下次扫描为0； SM0.7: 指示CPU工作方式开关的位置，0为Term位置。1为Run位置; SM1.0：当执行某些指令，其结果为0时，将改位置1； SM1.1：当执行某些指令，其结果溢出或为非法数值时，将改位置1； SM1.2：当执行数学运算指令，其结果为负数时，将改位置1； SM1.3：试图除以0时，将改位置1","tags":"自动化 西门子"},{"title":"Linux编程基础操作","url":"/posts/b81877f0.html","text":"Linux学习备忘 创建文件 [kb]vi test2.c 编译并执行文件 gcc (文件名加后缀) &amp;&amp;.&#x2F;a.out 退出文件 shift ＋ Z ＋ Z 复制光标所在整行 yy 删除 (剪切) 光标所在整行 dd 将之前删除 (dd) 或者复制 (yy) 的数据粘贴到光标后面 p 光标定位到最后一行 Shift + G 快速打开终端 Shift + Alt + t 新建文件夹 mkdir 回退文件夹 cd .. 代码左移或右移 v进入vision模式，移动选中一行或多行代码shift + &lt; 整体左移shift + &gt; 整体左移 修改文件夹名称 mv file1 file2","tags":"linux 编程"},{"title":"Yilia主题添加更新日期","url":"/posts/bcd402f1.html","text":"[block] 在themes\\yilia-plus\\layout\\_partial中找到article.ejs，搜索date关键词，找到文章日期的代码，然后将代码中date改为update，然后将这段代码复制到你想显示的位置。 &lt;% if (!post.noupdated)&#123; %&gt;&lt;%- partial(&#x27;post/updated&#x27;, &#123;class_name: &#x27;archive-article-updated&#x27;, date_format: null&#125;) %&gt;&lt;% &#125; %&gt; 在themes\\yilia-plus\\layout\\_partial\\post中，新建update.ejs文件，输入如下代码 &lt;a href=&quot;&lt;%- url_for(post.path) %&gt;&quot; class=&quot;&lt;%= class_name %&gt;&quot;&gt;&lt;time updatedtime=&quot;&lt;%= date_xml(post.updated) %&gt;&quot; itemprop=&quot;updatedPublished&quot;&gt;&lt;strong&gt;&lt;font color=black&gt;&lt;%= &quot;更新日期：&quot;%&gt;&lt;/strong&gt;&lt;%= date(post.updated, date_format) %&gt;&lt;/time&gt;&lt;/a&gt; 这样，就可以在底部声明添加文章更新日期。","tags":"hexo 博客"},{"title":"压电元件阻抗分析","url":"/posts/37b07429.html","text":"对压电元件进行阻抗分析，获得压电元件的阻抗特性 1.创建阻抗分析项目 打开workbench，在左侧分析系统找到“Harmonic Response”，即“谐响应模块”。建立谐响应分析。 2.首先定义所需的材料 常见材料在ANSYS材料库中都有，如果没有需要的材料可以自定义。 3.模型导入 一般在其他三维软件中建立模型，导入进workbench中。 4.网格划分 主要方法为扫掠和自由划分， (1).","tags":"科学研究 ansys"},{"title":"0基础学习C语言","url":"/posts/4b23d230.html","text":"《带你学C带你飞》 scanf函数从标准缓冲区读取数据，在使用scanf函数输入字符时，需要清除缓冲区或在%c前添加一个空格，示例：scanf(&quot; %c&quot;,&amp;name)，否则函数读取到的是上一次输入后的回车。 引用math库时，在GCC编译时需要加-lm，示例gcc name.c -lm。 指针 在定义指针后，后续使用 *运算符得到的是指针指向对象的值。 scanf_s:使用时需要输入数组长度。（不输入不影响使用）scanf_s(&quot;%s&quot;,name,1)； 3.数组在使用printf指令打印时具有特殊性，因为输出字符串是通过读取字符串地址，即：输出字符串只需找到字符串的地址，不需要进行解引用。 递归基本条件：1. 调用函数自身。 2. 需要正确的结束条件。 快速排序 动态内存管理 malloc函数 free 函数用于释放malloc、calloc、realloc函数申请的内存空间 内存泄漏:1.申请的动态内存没有及时释放。2.内存地址丢 memset: 初始化内存空间memcpy: 复制内存 calloc动态申请nmemb个长度为size的连续内存空间，并全部初始化为0. realloc C语言内存布局代码段： 数据段： BSS段： 堆： 栈： 小甲鱼39节视频中最后一个问题：a和b都是由计算机分配的，存在于栈中，因此a位于高地址，b位于低地址，在强制转换后b为int类型，最大存储数据为255，因此存储258时，在数据达到256后，数据溢出到高位地址，即a的地址，本身为0的a在＋1后变为1，而溢出后b的值变为0，b又重新开始计数，因此258-266&#x3D;2. 宏定义内联函数使用inline避免宏定义缺陷 预处理运算符：#（将符号后的内容装换成字符串）和##（记号连接运算符）。 可变参数结构体定义： struct Name&#123; 结构体组成1； 结构体组成2； 结构体组成3；&#125;; 声明： char Name name 访问： Name.title 内存对齐 结构体数组和结构体指针单链表头插法 尾插法 使用方法：利用静态指针指向单链表的尾部 内存池由于结构体使用的内存空间是一定的，因此小甲鱼的课程在从内存池申请空间时，没有声明变量大小。 typedef给数据类型起别名对类型的封装 共用体union 初始化共用体：只能一次初始化一个成员。 枚举类型声明枚举类型enum 枚举类型名称 {枚举值名称,枚举值名称}； 定义枚举变量enum 枚举类型名称 枚举变量1,枚举变量2； 位域位操作和位运算逻辑位运算符：~ 按位取反 将1变0、将0变1&amp; 按位与^ 按位异或 位不同为1，位相同为0| 按位或 &amp; ^ | 可以和赋值号（ &#x3D; ）结合 移位运算符：左移位运算符 &lt;&lt;右移位运算符 &gt;&gt; 掩码打开和关闭文件输入 -&gt; 处理 -&gt; 输出 函数：fopenfclose 读写文件####顺序读写 单个字符读取和写入读取字符函数：fgetc、getc写入字符函数：fputc、putc 整个字符串读写函数：fgets、fputs 格式化读写文件函数：fscanf（scanf form file）、fprintf（printf to file） 二进制读写文件函数：fread、fwrite 随机读写函数：ftell、rewind、fseek 标准流标准输入：stdin标准输出：stdout标准错误输出：stderr 错误指示器：ferror清除末尾指示器和错误指示器：cleanerr存储错误原因：errno打印错误原因：perror直接返回错误信息：strerror IO缓冲区函数：setvbuf指定缓存模式 块缓存：行缓存：不缓存：fflush","tags":"c语言"},{"title":"声场与流场相互作用仿真","url":"/posts/1a9f9e17.html","text":"简介：声学与流场产生的流体流动研究。 思路一：二维截面官方程序： [微通道横截面中的声流] 主要方法温度（可选）、声学、流动、粒子追踪 改动：在层流场中添加气体边界条件，增加入口速度和出口压力。备注：1.大部分情况下声场使用线弹性，远距离传播考虑热传导和粘性2.流场利用声场产生的振速 存在问题：1.频域计算压力远大于实际产生的声压。2.声压与气压是两个单独变量无法叠加。 思路二：线性N-S方程备注：1.COMSOL中压力声学是一个无黏性无流动的简化模型。2.一般假设声场不影响流动，流动影响声场 压电微泵Create a new post","tags":"科学研究 comsol"},{"title":"测试页面","url":"/posts/4832c66c.html","text":"测试代码、记录效果 2023年12月27日博客中插入链接Baidu 百度 2023年10月29日注释&lt;!--text--&gt; 2023年10月22日引入图片的两种方法 简单快捷，但无法调整样式 ![图片描述](图片.png) 通过&#123;%%&#125;可以添加样式控制 &lt;div style=&quot;width:50%;margin:auto&quot;&gt;&#123;% asset_img 图片名称.png %&#125;&lt;/div&gt; 2023年8月6日思维导图安装命令：npm install hexo-simple-mindmap 思维导图 Tab分级 不能引入图片 引用块代码： &#123;% blockquote %&#125;#### Warning HeaderWarning content&#123;% endblockquote %&#125; 效果： Warning HeaderWarning content 也可以使用&gt; &gt; #### Warning Header&gt; Warning content 效果: Warning HeaderWarning content","tags":"随笔"},{"title":"Hello World","url":"/posts/4a17b156.html","text":"Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub. Quick StartCreate a new post$ hexo new &quot;My New Post&quot; More info: Writing Run server$ hexo server More info: Server Generate static files$ hexo generate More info: Generating Deploy to remote sites$ hexo deploy More info: Deployment","tags":""},{"title":"关于","url":"/about/index.html","text":"","tags":""},{"title":"timeline","url":"/timeline/index.html","text":"","tags":""}]}