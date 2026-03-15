---
title: Chapter 0 绪论
permalink: /electrodynamics/electrodynamics-0/
createTime: 2026/03/13 20:35:00
---

## Part 1 历史

众所周知，力学是第一门发展起来的现代意义上的物理学科。之所以会这样，是由于它的实用性导致了各国君主和贵族们的大力资助。这一事实的一个后果是，由于专业术语使用的“经济性”原则，力学的许多概念和名词稍加改动后即被应用到稍后发展起来的其它物理学科，例如电磁学，统计力学和量子力学。因此，人们不难理解，为什么物理专业学生进入大学后要系统学习的第一门专业课程是力学。

### · 静电学

早在古希腊时期，人们就已经知道，若将琥珀在毛发上摩擦一下，即可用它来将散乱的草屑吸起。这一现象给大人和孩子们带来了极大的乐趣。但是，直到 1600 年，英国人 William Gilbert（他是当时英国女王伊丽莎白一世的御医）才发现，不仅是琥珀，其它材料，例如玻璃，硫磺，蜡或者各种宝石都具有这种性质。为了向古希腊人致敬，他将这种性质称之为 “electricity”，对应于希腊语单词 “ηλεκτρον”，即“琥珀性”。又过了一百多年，直到 1733 年，法国国王路易十四的御圆总管 Charles Du Fay 才意识到，存在两种 electricity，他分别称之为“玻璃 (vitreous)”型和“树脂 (resinou)”型。又过了 13 年，英国药剂师 William Watson 于 1746 年提出， electricity 是一种弹性流体，充满了任何与“水与土的合成球体 (terraqueous globe)”相接触的物体内，同时又可以在不同的物体间流动。因此，一个物体带电并非由于 electricity 会凭空产生，而是由于它可以被从其它物体传导而来。

几乎同时，美国学者，也是开国元勋之一的富兰克林 (Benjamin Franklin) 提出玻璃型的 electricity 应是电流体在某一物体上的堆积导致的，而树脂型的 electricity 则意味着电流体在某一物体上的缺失。这一想法是我们可以追溯到的电荷守恒最原始的表述，但也表明，富兰克林认为只存在一种电流体。对于带有多余电流体的物体，他称为“带正电的”，而其上电流体缺失的则称为“带负电的”。因此，当两个带电物体接触时， electricity 应该从带正电的物体流向带负电的物体，形成电流。

进一步，人们要研究带正电物体与带负电物体之间的相互作用力。富兰克林的学生 Francis Aepinius 于 1759 年开始研究这一课题，但是第一个迈出关键一步的是英国学者，氧气的发现者普利斯特利 (Joseph Priestley)。1767 年，作为好朋友，他从富兰克林那里得知了一些令人迷惑的实验结果。为了解释这些现象，普利斯特利仿照牛顿的万有引力定律，提出带正电物体与带负电物体之间的相互作用力应该反比于二者距离的平方。直到 1785 年，法国学者库仑 (Charles Coulomb) 才第一次利用扭称实验确立了以他的名字命名的定律，并明确指出，负电是独立存在的，而不仅仅是电流体的缺失。用现代记号来书写的话，库仑定律可以写作

$$
\mathbf{F} = \frac{q_1 q_2}{4\pi\epsilon_0} \frac{\mathbf{r}_1 - \mathbf{r}_2}{|\mathbf{r}_1 - \mathbf{r}_2|^3}.
$$

这里， $q_1$ 和 $q_2$ 分别是两个“点电荷”的带电量，而 $\mathbf{r}_1$ 和 $\mathbf{r}_2$ 分别是它们在一个参照系里的位置矢量。$\epsilon_0$ 是一个正实数，称为真空电容率。若我们使用公斤 - 米 - 秒制的话，$\epsilon_0$ 的取值为 $8.854 \times 10^{-12}$ 法拉 / 米。相应的，电荷的单位是库仑 (C)，它总是电子电荷 $e = 1.602 \times 10^{-19}$ 库仑的整数倍，而相互作用力 $\mathbf{F}$ 的单位为牛顿 (N)。如此一来，真空介电常数 $\epsilon_0$ 的单位也就唯一地确定下来了。值得强调指出的是，类似于牛顿的万有引力定律，库仑定律告诉我们，两个点电荷之间的相互作用力总是沿着它们的连心线方向的。但与前者不同的是，由于电荷可正可负，二者之间的相互作用即可以是吸引的，也可以是排斥的。

在此之后，电学的发展又进入了一个相对的沉闷期。之所以会这样，一个重要的原因是获取充足的电荷是一件十分不易的事情。在发明电池之前，人们只能通过莱顿瓶或是富兰克林风筝来收集电荷。前者造就了许多“绝顶聪明”的电学家，而后者则经常造成不幸的意外。

早在 1729 年，英国人 Stephen Gray 就注意到了可以用一根金属丝将 electricity 从一个物体转移到另外一个物体。随后，如我们上面所述，Watson 和富兰克林提出 electricity 是一种弹性流体的想法。特别是富兰克林进一步引进了正电和负电，以及电流的概念。1780 年，意大利人伽伐尼 (Luigi Galvani) 偶然注意到，当挂在黄铜钩子上的新鲜剥制的青蛙腿与铁丝相碰时，会发生抽搐，像是又活了似的。他认为这一现象与 electricity 有关，但其他学者则认为这是由某种尚未明确的化学反应导致的。因此，人们开始尝试将不同的物体插入各种各样的化学溶液中。然而，实验结果是令人失望的：效果不值一提。

直到 1800 年，伏打 (Alessandro Volta) 注意到，若将一小块铜片，一小块浸湿的硬纸片，一小块锌片，再一小块浸湿的硬纸片，一小块铜片这样重复叠置在一起，形成一个“堆”时，那么不小心用手指同时碰触到它的两端时，肌肉会有酸麻的感觉。就这样，伏打制成了世界第一个电池。之后，人们发现，置于氯化铜溶液中的铜板和锌板构成的电池更为实用，可以用来产生源源不断的电流供应。

电池的发明有力地推动了电学自身的研究。例如，德国学者欧姆 (Georg Ohm) 在 1826 年提出了以他的名字命名的欧姆定律；英国学者焦耳 (James Joule) 于 1841 年，俄国学者楞茨 (Heinrich Lenz) 于 1842 年分别独立地提出了关于电流作功的焦耳 - 楞茨定律。更为重要的是，电池所提供的稳定电流使得物理学家终于有机会通过实验来了解电学现象和磁学现象之间的联系。

### · 电磁学

首先做出重要贡献的是丹麦学者奥斯特 (Hans Oersted)。从 1807 年开始，他就从事寻找电学现象与磁学现象之间联系的工作。他先是将两根导线分别接到一个电池的正极和负极板上，然后查看置放在导线边的指南针的指针是否有转动。尽管他不停地调整电池的数量（等于调整电压），在其后的十三年中，他一直没有看到什么有趣的现象发生。直到 1819 年的一天，他要他的学生 C. Hansteen 将两条导线连接在一起，形成回路（还有一种说法是，由于他的不慎，将两条导线偶然的短路了），才惊奇地看到，指南针的指针开始晃动。

奥斯特的结果极大地震动了当时的学术界。学者们开始纷纷重复他的实验并予以扩展。Dominique Arago 于 1820 年 9 月 11 日在法国科学院报告了奥斯特的工作。七天以后，安培 (Andre Ampere) 即在同一场合宣读了一篇论文，提出物质内部的电流所引起的磁场，是导致铁磁现象出现的理论。稍后，在友人的帮助下，安培进一步将这一电流的存在局限在物质的各个局域部分中。这使得人们对于物质磁性的理解大大前进了一步。另一方面，安培还研究了磁场施加给有电流通过的导线的力，并将之写作

$$
d\mathbf{F} = I d\mathbf{l} \times \mathbf{B}.
$$

这里， $d\mathbf{l} = dl \mathbf{e}_l$ 为导线的线元矢量，而 $I$ 为其中的电流（在公斤 - 米 - 秒制中，电流的单位为库仑 / 秒，称为安培）。$\mathbf{B}$ 则定义为磁感应强度，其单位为牛顿 / 安培·米，称为特斯拉。同样，在 1820 年，法国学者毕奥 (Jean-Baptiste Biot) 和萨伐尔 (Felix Savart) 也提出了以他们的名字命名的由给定电流产生的磁感应强度的毕奥 - 萨伐尔定律。用现在为人们熟悉的记号，这一定律可以写作

$$
d\mathbf{B}(\mathbf{r}_1) = \frac{\mu_0 I_2}{4\pi} d\mathbf{l}_2 \times \frac{\mathbf{r}_1 - \mathbf{r}_2}{|\mathbf{r}_1 - \mathbf{r}_2|^3}.
$$

这里， $I_2$ 为一个位于 $\mathbf{r}_2$ 处的无穷小线元 $d\mathbf{l}_2$ 内的电流， $d\mathbf{B}(\mathbf{r}_1)$ 为其在 $\mathbf{r}_1$ 处引起的磁感应强度。比例系数 $\mu_0$ 称为真空磁化率，在公斤 - 米 - 秒制中，它的数值为牛顿 / 安培$^2$。

既然电流可以产生磁场，接下来人们自然要问，磁场是否也可产生电场？

众所周知，这一问题的答案是英国学者法拉第 (Michael Faraday) 给出的。他在 1831 年首次报道，在实验中观察到随时间改变的磁场会在导体回路内导致电流的出现。但是由于他早年所受数学教育的缺失，只能借助电力线和磁力线等直观图象对于这一现象进行定性的描述。之后，由于德国物理学家纽曼 (Franz Neumann) 和韦伯 (Wilhelm Weber) 等人的努力，才得以将法拉第定律用数学的形式表达出来。1845 年，纽曼将这一定律写作
$$
\mathcal{E} = -\frac{d\Phi_B}{dt}.
$$

这里， $\mathcal{E}$ 是由于感生电场沿一个回路 $C$ 形成的感生电动势，即

$$
\mathcal{E} = \oint_C \mathbf{E} \cdot d\mathbf{l},
$$

而 $\Phi_B(t)$ 则是穿过由回路 $C$ 所围成的一个任意曲面 $S$ 的磁通量，即

$$
\Phi_B(t) = \int_S \mathbf{B}(\mathbf{r}, t) \cdot d\mathbf{S}.
$$

文献中，
$$
\mathcal{E} = -\frac{d\Phi_B}{dt}.
$$
被称为法拉第的电磁感应定律。

如上所述，最重要的一些关于电磁学的实验在 1840 年左右都已完成。接下来需要的是具有卓越的数学解析能力的牛顿类型的物理学家对之加以归纳、整理，使其系统化。历史将这一任务交给了在英国剑桥大学工作的苏格兰物理学家麦克斯韦 (James Maxwell)。正是由于他发表于 1856 年里程碑式的工作，电动力学才最终成为继“力学”之后的第二门在现代意义上建立起来的物理学分支。

## Part 2 最小作用量原理

支配一个力学体系运动规律的最普适的数学表达形式是所谓最小作用量原理（The least action principle），或曰哈密顿变分原理（The Hamilton principle）。根据这一原理，每一个力学体系由一个称为拉格朗日量（Lagrangian）的形为 $L(q_1, q_2, \cdots, q_k, \dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k)$ 的函数来描述。这里，$q_1, q_2, \cdots, q_k$ 称为该体系的广义坐标，而 $\dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k$ 则为其广义速度。它们是彼此独立的变量。此时，$k$ 即为该体系的自由度。当这一函数满足某些条件时，可利用变分法推导出该力学体系作真实运动时所满足的方程，即牛顿方程。具体一点讲，若此力学体系在时刻 $t_1$ 和 $t_2$ 时分别占据位形空间中的两个固定点 $P$ 和 $Q$，那么它的运动在位形空间中所画出的轨迹由积分
$$
S = \int_{t_1}^{t_2} L(q_1, q_2, \cdots, q_k, \dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k) dt
$$

的极值曲线给出。这就是最小作用量原理的表述形式。这里，积分 $S$ 被称为该体系的作用量（action）。

最小作用量原理的起源最早可以追溯到 1696 年。当时，一位瑞士物理学家伯努利（Johann Bernoulli）向另外一位瑞士数学家伯努利（Jacob Bernoulli）请教如何找到一条连接空间中两个固定点 $a$ 和 $b$ 的曲线，使得一个质量为 $m$ 的算珠仅在重力作用下沿此曲线从 $a$ 点起始，最后到达 $b$ 点所用的时间最短。此问题被称为最陡降线问题（brachistochrone）。它引起了莱布尼兹和牛顿等人的兴趣。

最漂亮的解决方法是由欧拉在 1744 年给出的，并在此基础上发展了所谓变分法理论。这一方法可以用来处理许多当时几何学家感兴趣的问题。例如，考虑一个悬于两个中心位于 $x$ 轴上 $x = a$ 和 $x = b$ 处的圆环上的肥皂膜。假设两个圆环的半径分别为 $r_a$ 和 $r_b$，且 $r_a \ne r_b$。它的轮廓线是 $x$ 的一个函数，可以写作 $r = y(x)$。现在的问题是如何决定这一函数，使得肥皂膜的表面积
$$
A = \int_a^b 2\pi r \, dS = \int_a^b 2\pi r \sqrt{1 + \left( \frac{dr}{dx} \right)^2} dx = \int_a^b 2\pi y(x) \sqrt{1 + y'^2(x)} dx
$$

最小。由欧拉给出的这个问题的解为

$$
r = y(x) = C_1 \mathrm{ch} \left( \frac{x}{C_1} + C_2 \right).
$$

这里，常数 $C_1$ 和 $C_2$ 由边条件

$$
y(x = a) = r_a = C_1 \mathrm{ch} \left( \frac{a}{C_1} + C_2 \right), \quad y(x = b) = r_b = C_1 \mathrm{ch} \left( \frac{b}{C_1} + C_2 \right)
$$

来决定。

另一方面，在光学的研究中，学者们也一直试图将反射现象和折射现象的解释归结为一个几何问题。首先，当时关于光的本质存在着两种不同的意见。以笛卡尔为代表的

一派认为光是由粒子组成的，并且在光密物质中传播速率大。这一观点得到了牛顿的支持。另外一派则以费马（Pierre de Fermat）为代表，认为同声波一样，光是波动现象，只不过是在称为以太的一种媒介质传播，而在光疏物质中其速率较大。在 1662 年，他进一步提出了所谓费马原理（Fermat's principle）。根据这一原理，光从空间中一点 $P$ 传播到另外一点 $Q$ 所行走的路线将使得其所用的时间最小。由于类似于声波，光在媒介质传播的速率为

$$
v_{\text{wave}} = \frac{c}{n},
$$

这里，$c$ 为光在以太（或真空）中传播的速率，而 $n$ 为该媒介质的折射率，故费马原理可以表述为

$$
\delta \int_P^Q \frac{dl}{v_{\text{wave}}} = \delta \int_P^Q \frac{1}{c} n \, dl = 0.
$$

的确，利用这一原理，可以很容易地解释波的反射和折射定律。大约一百年后，法国学者莫陪督（Pierre-Louis Maupertuis）也于 1747 年提出了以他的名字命名的最小作用量原理。当与费马不同的是，他坚持笛卡尔的观点，认为组成光的粒子在介质中传播的速度为

$$
v_{\text{particle}} = nc.
$$

这样一来，费马原理就要被改写成

$$
\delta \bar{S} = \delta \int_P^Q n \, dl = \delta \int_P^Q \frac{v_{\text{particle}}}{c} dl = 0.
$$

并且，他将这一原理推广到了一般质点的动力学研究中。根据推广了的莫陪督原理，在位形空间中的给定两点间所有体系能量相同的轨迹中，体系的实际轨道的作用量取极值。

莫陪督原理对于后人的工作极具启发性。1788 年，拉格朗日（Joseph-Louis Lagrange）在达朗贝尔（Jean D'Alembert）于 1743 年提出的虚功原理的基础上，发表了“分析力学”一书。其中，他提出一个多质点体系之间的约束关系可以用来减少体系的自由度，故粒子之间的约束力可以不计。如此一来，体系的运动可以用 $k$ 个微分方程

$$
\frac{d}{dt} \frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = 0, \quad i = 1, 2, \cdots, k
$$

来描述。进一步，对于一个保守系，拉格朗日函数 $L$ 可以写作

$$
L(q_1, q_2, \cdots, q_k, \dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k) = T(\dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k) - V(q_1, q_2, \cdots, q_k).
$$

这里 $T(\dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k)$ 为体系的动能函数，而 $V(q_1, q_2, \cdots, q_k)$ 则代表体系的势能函数。由于方程
$$
\frac{d}{dt} \frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = 0, \quad i = 1, 2, \cdots, k
$$
在欧拉解决最陡降线问题时已经写出过，故在文献中被称为欧拉 - 拉格朗日方程（Euler-Lagrange equations）。

直到 1834 年，爱尔兰数学家哈密尔顿（William Hamilton）才从变分法的角度出发，重新推导出了这些方程。他提出，对于位形空间中的两个固定点 $P$ 和 $Q$，任取一条可能的路径 $C$，计算如下 的作用量

$$
S = \int_{t_1}^{t_2} L(q_1, q_2, \cdots, q_k, \dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k) dt.
$$

若要求当 $t = t_1$ 时，体系从 $P$ 点出发，并在给定的 $t = t_2$ 时刻到达 $Q$ 点，那么体系在位形空间中所行的真实轨迹应当使得 $S$ 取极（小）值。这一法则称为（哈密顿的）最小作用量原理。实际上，若我们取 $S$ 的变分，则

$$
\begin{aligned}
\delta S &= \delta \int_{t_1}^{t_2} L(q_1, q_2, \cdots, q_k, \dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k) dt \\\\
&= \int_{t_1}^{t_2} \delta L(q_1, q_2, \cdots, q_k, \dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k) dt \\\\
&= \int_{t_1}^{t_2} \sum_{i=1}^k \left( \frac{\partial L}{\partial q_i} \delta q_i + \frac{\partial L}{\partial \dot{q}_i} \delta \dot{q}_i \right) dt \\\\
&= \sum_{i=1}^k \int_{t_1}^{t_2} \frac{\partial L}{\partial q_i} \delta q_i \, dt + \sum_{i=1}^k \int_{t_1}^{t_2} \frac{\partial L}{\partial \dot{q}_i} \left( \frac{d}{dt} \delta q_i(t) \right) dt \\\\
&= \sum_{i=1}^k \int_{t_1}^{t_2} \frac{\partial L}{\partial q_i} \delta q_i \, dt + \sum_{i=1}^k \left[ \frac{\partial L}{\partial \dot{q}_i} \delta q_i(t) \right]_{t_1}^{t_2} - \int_{t_1}^{t_2} \frac{d}{dt} \frac{\partial L}{\partial \dot{q}_i} \delta q_i(t) dt \Bigg).
\end{aligned}
$$

由于 $\delta q_i(t_1) = \delta q_i(t_2) = 0$ 对于所有的 $1 \le i \le k$ 成立，故上式又可被写作

$$
\delta S = \sum_{i=1}^k \int_{t_1}^{t_2} \left( \frac{\partial L}{\partial q_i} - \frac{d}{dt} \frac{\partial L}{\partial \dot{q}_i} \right) \delta q_i(t) \, dt.
$$

当体系在位形空间的真实轨道上运动时，作用量 $S$ 应该取极值，即 $\delta S = 0$，故我们有

$$
\delta S = \sum_{i=1}^k \int_{t_1}^{t_2} \left( \frac{\partial L}{\partial q_i} - \frac{d}{dt} \frac{\partial L}{\partial \dot{q}_i} \right) \delta q_i(t) \, dt = 0.
$$

又考虑到 $\delta q_i(t)$ 彼此是独立的，我们由此得到

$$
\frac{\partial L(q_1, q_2, \cdots, q_k, \dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k)}{\partial q_i} - \frac{d}{dt} \frac{\partial L(q_1, q_2, \cdots, q_k, \dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k)}{\partial \dot{q}_i} = 0.
$$

此即欧拉 - 拉格朗日方程。

应该说，无论是莫陪督原理还是哈密尔顿原理的提出在很大程度上是基于形而上学（metaphysics）的考虑的。但一经提出，即被学者们视作物理学中的最高原理，而一切动力学方程都应该利用这些原理推导出来。

鉴于（哈密顿的）最小作用量原理如此重要，我们下面结合一个具体例子给出一个“粗人（poor man）”式的推导，以使得这一原理更容易被接受。

让我们考虑一个一维谐振子。这个体系只有一个广义坐标 $q_1 = x$ 以及相应的广义速度 $\dot{q}_1 = \dot{x}$。振子所满足的牛顿方程为

$$
m \ddot{x}(t) = -k x(t).
$$

这里，$m$ 为质点的质量，而 $k$ 为弹簧的弹性系数。我们知道，这个振子的动能为 $T = \frac{1}{2} m \dot{x}^2$，而其势能为 $V(x) = \frac{1}{2} k x^2$，并且其总机械能

$$
E = T + V = \frac{1}{2} m \dot{x}^2 + \frac{1}{2} k x^2
$$

是守恒，即不随时间改变的。人们早就意识到，这一事实可以被用来“反向”推导相关的牛顿方程。实际上，若我们将 () 式的两边分别对于时间求导的话，可以得到

$$
\frac{dE}{dt} = \frac{d}{dt} \left( \frac{1}{2} m \dot{x}^2 + \frac{1}{2} k x^2 \right) = m \dot{x} \ddot{x} + k x \dot{x} = 0.
$$

将上式左边的第二项移项并同时除掉 $\dot{x}$ 后，我们即可得到运动方程

$$
m \ddot{x} = -k x.
$$

推而广之，这一方法经常被用来推导有约束条件存在时的多质点体系的运动方程。例如，若一个质点 $m$ 置于 $z = 0$ 的光滑水平桌面上，而另外一个质点 $m$ 则位于通过坐标原点的的深阱中，设阱壁是光滑的。

二者之间通过一根长度为 $2l$ 的无质量的刚性轻杆联系起来。那么，这个体系的总机械能可以被写作
$$
E = T + V = \frac{1}{2} m \dot{x}_1^2 + \frac{1}{2} m \dot{z}_2^2 + m g z_2.
$$

这里，$x_1$ 为第一个质点在桌面上的坐标，而 $z_2$ 为第二个质点在深阱内的坐标。若取 $\theta$ 为连接两个质点的轻杆与 $z$ 轴的夹角，则关系式

$$
x_1 = 2l \sin \theta, \quad z_2 = -2l \cos \theta
$$

成立。将之代入总机械能的表达式后，我们有

$$
E = \frac{1}{2} m (2l \cos \theta \dot{\theta})^2 + \frac{1}{2} m (2l \sin \theta \dot{\theta})^2 - 2mgl \cos \theta = 2ml^2 \dot{\theta}^2 - 2mgl \cos \theta.
$$

因此，对于这个有约束的体系来说，它有一个广义坐标 $q_1 = \theta$，而相应的广义速度为 $\dot{q}_1 = \dot{\theta}$。现将总机械能表达式的两边同时对时间 $t$ 求导后，我们可得这个体系的运动方程

$$
\frac{dE}{dt} = \frac{d}{dt} (2ml^2 \dot{\theta}^2 - 2mgl \cos \theta) = 4ml^2 \ddot{\theta} + 2mgl \sin \theta \dot{\theta} = 0.
$$

经过整理后，我们进一步有

$$
2l \ddot{\theta} + g \sin \theta = 0.
$$

对于微小振动的情况，$\theta \sim 0$，而 $\sin \theta \sim \theta$，故上式可以化简为

$$
\ddot{\theta} + \frac{g}{2l} \theta = 0.
$$

这是一个简谐振动方程，其振动周期为

$$
T = \frac{2\pi}{\omega_0} = \frac{2\pi}{\sqrt{\frac{g}{2l}}} = 2\pi \sqrt{\frac{2l}{g}}.
$$

由此我们看到，利用机械能守恒定理反推具有约束的质点系的动力学方程的确是一个行之有效的方法。

现在，让我们返回到一维谐振子的问题。若我们引入广义动量
$$
p = m \dot{x},
$$

则关系式

$$
p = \frac{\partial}{\partial \dot{x}} \left( \frac{1}{2} m \dot{x}^2 + \frac{1}{2} k x^2 \right) = \frac{\partial E}{\partial \dot{x}}
\tag{1}
$$

显然成立，而且谐振子的机械能可以被改写作

$$
E = \frac{1}{2} m \dot{x}^2 + \frac{1}{2} k x^2 = \frac{p^2}{2m} + \frac{1}{2} k x^2.
$$

它是广义坐标 $x$ 和广义动量 $p$ 的函数，被称为该谐振子的哈密顿量（Hamiltonian），而相应的“位形空间”则改称为相空间。同时，牛顿方程现在可以写作

$$
m \ddot{x} = \frac{d}{dt} (m \dot{x}) = \frac{dp}{dt} = \dot{p}(t) = -k x = -\frac{\partial E}{\partial x} = -\frac{\partial H}{\partial x},
$$

而方程 $p = m \dot{x}$ 可以被改写为

$$
\dot{x} = \frac{1}{m} p = \frac{\partial}{\partial p} \left( \frac{p^2}{2m} + \frac{1}{2} k x^2 \right) = \frac{\partial H}{\partial p}.
\tag{2}
$$

方程 (1) 与 (2) 一起被称为一维谐振子的哈密顿方程（Hamilton equations）。现在我们要问，如此给出的哈密顿方程是否可以通过某种形式的变分原理重新推导出来？答案是肯定的。

为此，我们定义

$$
\begin{aligned}
S &= \int_{t_1}^{t_2} \left( \sum_{i=1}^k \dot{q}_i p_i - H(q_1, q_2, \cdots, q_k, p_1, p_2, \cdots, p_k) \right) dt \\\\
&= \int_{t_1}^{t_2} (\dot{q}_1 p_1 - H(q_1, p_1)) dt = \int_{t_1}^{t_2} (\dot{x} p - H(x, p)) dt.
\end{aligned}
$$

取其变分后，我们有

$$
\begin{aligned}
\delta S &= \delta \int_{t_1}^{t_2} (\dot{x} p - H(x, p)) dt = \int_{t_1}^{t_2} \delta (\dot{x} p - H(x, p)) dt \\\\
&= \int_{t_1}^{t_2} ((\delta \dot{x}) + \dot{x} \delta p - \delta H(x, p)) dt \\\\
&= \int_{t_1}^{t_2} \left( (\delta \dot{x}) p + \dot{x} \delta p - \frac{\partial H(x, p)}{\partial x} \delta x - \frac{\partial H(x, p)}{\partial p} \delta p \right) dt \\\\
&= \int_{t_1}^{t_2} \delta \dot{x} p \, dt + \int_{t_1}^{t_2} \left( \dot{x} \delta p - \frac{\partial H(x, p)}{\partial x} \delta x - \frac{\partial H(x, p)}{\partial p} \delta p \right) dt \\\\
&= \delta x \cdot p \big|_{t_1}^{t_2} - \int_{t_1}^{t_2} \dot{p} \delta x \, dt + \int_{t_1}^{t_2} \left( \dot{x} \delta p - \frac{\partial H}{\partial x} \delta x - \frac{\partial H}{\partial p} \delta p \right) dt.
\end{aligned}
$$

由于 $\delta x(t_1) = \delta x(t_2) = 0$，上式可以被给写作

$$
\delta S = \int_{t_1}^{t_2} \left[ \left( \dot{x} - \frac{\partial H(x, p)}{\partial p} \right) \delta p - \left( \dot{p} + \frac{\partial H(x, p)}{\partial x} \right) \delta x \right] dt.
$$

若令 $\delta S = 0$，则上式给出

$$
\delta S = \int_{t_1}^{t_2} \left[ \left( \dot{x} - \frac{\partial H(x, p)}{\partial p} \right) \delta p - \left( \dot{p} + \frac{\partial H(x, p)}{\partial x} \right) \delta x \right] dt = 0.
$$

又由于 $\delta p$ 和 $\delta x$ 是彼此独立的，故我们有

$$
\dot{x} - \frac{\partial H(x, p)}{\partial p} = 0, \quad \dot{p} + \frac{\partial H(x, p)}{\partial x} = 0
$$

必须成立。此即一维谐振子哈密尔顿方程。也就是说，一个力学体系的哈密尔顿方程可以通过对相应的作用量 $S$ 求变分而得到。我们可以将其解释作，若体系在 $t = t_1$ 时从位形空间的点 $P = (q_1(t_1), q_2(t_1), \cdots, q_k(t_1))$ 出发，并在 $t = t_2$ 时到达位形空间的点 $Q = (q_1(t_2), q_2(t_2), \cdots, q_k(t_2))$，那么它在位形空间中所行的真实轨迹使得作用量 $S$ 取极值。

另一方面，根据法国学者勒让德（Adrien Legendre）于 1787 年提出的勒让德变换（Legendre transformation）理论，作用量 $S$ 中的被积函数现在应该是广义坐标和广义速度的函数，而不再是广义坐标和广义动量的函数。同时，这一函数可以写作

$$
L(q_1, q_2, \cdots, q_k, \dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k) = T(\dot{q}_1, \dot{q}_2, \cdots, \dot{q}_k) - V(q_1, q_2, \cdots, q_k),
$$

即拉格朗日量的形式。仍以一维谐振子为例。我们有

$$
\begin{aligned}
\dot{x} p - H(x, p) &= \dot{x} \cdot (m \dot{x}) - \left( \frac{p^2}{2m} + \frac{1}{2} k x^2 \right) \\\\
&= m \dot{x}^2 - \frac{1}{2} m \dot{x}^2 - \frac{1}{2} k x^2 = \frac{1}{2} m \dot{x}^2 - \frac{1}{2} k x^2 \\\\
&= T(\dot{x}) - V(x) = L(x, \dot{x}).
\end{aligned}
$$

以上所述，可视作最小作用量原理的一个“粗人”式的推导。

必须指出的是，最小作用量原理的应用范围是非常广泛的。例如，对于某些非保守力学体系，已无法定义其势能函数（例如，一个带电粒子在磁场中运动时感受到的是所谓洛伦兹力。它对粒子不作功，故其势能函数为一常数），故无法用机械能守恒定理来反推其运动方程。然而，即使是在这种情况下，仍有可能定义其作用量 $S$，并利用最小作用量原理推导出该体系的运动方程。

