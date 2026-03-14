---
title: Chapter 4 最小作用量原理
permalink: /analytical-mechanics/chapter-4/
createTime: 2026/03/14 17:02:26
---

## Part 1 力学原理

作为牛顿力学的继承和超越，分析力学首先要回答两个问题。第一，为什么我们要舍弃牛顿力学、特别是牛顿第二定律？或者说，为什么需要一个新的力学原理？第二，这个新的力学原理应该是什么样子？

### · Question1

为了回答第一个问题，我们来重新思考，所谓“力学规律”到底是什么？牛顿第二定律 $m\ddot{x} = \mathbf{F}$，或者

$$
\frac{\mathrm{d}\mathbf{p}}{\mathrm{d}t} = \mathbf{F},
$$

将系统运动状态的改变归结为“力”。我们真正关心的是系统的“状态”，及决定状态演化的规律。“力”只是我们为了解释系统运动状态的改变而引入的概念。例如，对于重力场中的粒子，牛顿第二定律说 $m\ddot{z} = F$，但是力 $F$ 是什么牛顿第二定律本身却没有告诉我们，而是由物体在重力场中的受力 $F = -mg$ 给出。换句话说，牛顿第二定律最多只算是半个物理定律。其和“重力规律”的结合 $m\ddot{z} = F = -mg$，才是完整的描述粒子自由落体的运动规律。又比如，粒子连接在弹簧上的振动，牛顿第二定律加上“胡克定律” $m\ddot{x} = F = -kx$，才是一条完整的决定粒子运动的规律。从这里可以看出，“力”在完整的物理规律中起了什么作用呢？其实只是一个媒介概念。真正的、完整的物理规律是

$$
m\ddot{z} = -mg, \quad \text{and} \quad m\ddot{x} = -kx,
$$

这其中完全没有“力”的位置。所谓牛顿第二定律只是把方程右边的东西称为“力”而已。在这个意义上，牛顿第二定律与其说是一条物理规律，不如说只是“力”这个概念的定义。

对于一般的物理系统，其运动方程无法简单地写成牛顿第二定律的形式。这时候有两种选择，一种是“削足适履”，固守牛顿第二定律的形式，把所有非加速度的项一股脑放到方程右边，称为“某某力”²。另一种更明智的选择，就是放弃牛顿第二定律的形式，承认牛顿第二定律的局限性，转而寻找新的、更一般的原理。沿着这个思路，如果我们从某些新的原理出发，直接得到力学规律，那么“力”的媒介地位也完全不必要了。幸运的是，确实存在更加基本的原理，使得我们以一种更为统一的方式得到力学规律，而不引入任何“力”的概念。

### · Question2

现在来看第二个问题：如果放弃了牛顿力学，那么新的力学原理可能是什么样子？

考虑一个简单的例子，从某个固定高度、每次以不同的速度竖直向上或向下抛小球。我们的问题是确定小球的运动，即小球高度 $z$ 随时间 $t$ 的关系。在牛顿力学的框架下，由牛顿第二定律及重力场中粒子的受力，设坐标 $z$ 向下，写出微分方程 $m\ddot{z} = F = mg$，给定初始条件 $z(0) = 0$ 和 $z'(0) = v_0$，求解微分方程得到 $z(t) = \dfrac{1}{2}gt^2 + v_0t$。

给定某一时刻的位置和速度，微分方程就决定了下一时刻、下下时刻的位置和速度，等等。因此，牛顿力学的思维方式是局域、微分的。

![](https://pic1.imgdb.cn/item/69b571500ee6511f188cd117.png)

假设有一个叫哈密顿的人，对牛顿力学一无所知。但是哈密顿做了很多次竖直抛小球的实验，并将小球的高度 $z$ 与时间 $t$ 的关系画在如图(a) 所示的图上。哈密顿发现了一个基本事实：若 $t_1$ 时刻从高度 $z = 0$ 抛出，在 $t_2$ 时刻小球到达某个高度（图中 $z_1, z_2$ 等），则小球的运动轨迹是“唯一”确定的。换句话说，只要小球是在 $t_2$ 时刻到达某个高度，那么它一定是沿着图(a)中的实线轨迹运动。而虚线轨迹，虽然也满足同样的端点条件，却从来没被观测到，即并没有真实发生。

虽然哈密顿还不知道这些真实轨迹是什么曲线，但是关键在于——其是唯一的。这个事实意味着什么呢？如果哈密顿继续做足够多的抛小球实验，最终将得到如图(b)所示的图，从 $\{z,t\}$-平面的某点（例如图中 $O$ 点）出发，其与周围任一点（例如图中 $A$ 点、$B$ 点和 $C$ 点）之间有且仅有“唯一”的一条真实轨迹相连。这些轨迹充满了 $\{z,t\}$-平面（至少在 $O$ 点附近），且除了共同的起始点 $O$ 点外，永不相交。因为起始点 $O$ 点是任意选取的，这意味着 $\{z,t\}$-平面上任意两点之间有一条“唯一”的真实轨迹连接。

物理上，这意味着给定初、末时刻小球的位置，小球的时空轨迹——世界线——就唯一确定了。于是哈密顿就奇怪，为什么满足同样的端点条件，只有唯一一条真实的世界线？这条世界线为何如此特殊？哈密顿就猜测，或许存在一个原理，给每条世界线一个“指标”（一个数），用以比较不同的世界线，从而判断众多的“世界线”中，哪一条是被自然所选择的。

从另外一个角度，这种观念的转变还涉及对“什么是物理规律”的理解。如果我们认为物理规律是牛顿第二定律式的微分方程，那么一个问题就是，小球真的会去解微分方程吗？很难想象小球如同随身携带一个计算器，根据此时此刻的位置和速度计算出下一时刻的位置和速度，然后按照计算的结果准时出现在那里。所以看上去更正确的观念是：大自然并不会做计算。小球选择某个轨迹，并不是小球解微分方程的结果，而是这个轨迹相比其他轨迹更“特殊”。

## Part 2 最小作用量原理

### · 最小作用量原理

现在我们沿着哈密顿的思路，以全新的观点看待系统的运动。给定一个完整力学系统，自由度为 $s$，广义坐标为

$$
\left\{ q^a \right\}, \quad a = 1, \cdots, s.
$$

我们的问题是确定系统的演化轨迹 $\mathbf{q}(t)$。我们给每条轨迹都赋予一个“数”，用以比较不同的轨迹，进而判断哪条轨迹是真实发生的演化过程。这种“输入轨迹、输出数”的操作，正是“泛函”的概念。

如果物理系统在给定时刻 $t_1$ 和 $t_2$ 的位形 $\mathbf{q}(t_1)$ 和 $\mathbf{q}(t_2)$ 确定，则联结这两个时刻位形之间的每条“可能”的轨迹 $\mathbf{q}(t)$ 都对应一个数，通常记作 $S$，被称为该系统的作用量（action）。数学上，这意味着作用量 $S$ 是轨迹 $\mathbf{q}(t)$ 的泛函

$$
S[\mathbf{q}] = \int_{t_1}^{t_2} \mathrm{d}t\, L(t, \mathbf{q}, \dot{\mathbf{q}}),
$$

在经典力学中，这里的被积函数 $L(t, \mathbf{q}, \dot{\mathbf{q}})$ 称为系统的拉格朗日量（Lagrangian）。我们关心的是所有这些可能的轨迹中，哪一条是真实发生的？答案是使得作用量 $S$ 取极值的那一条轨迹。这一结论就是著名的最小作用量原理（principle of least action）：经典力学体系在两个时刻之间的真实运动轨迹使得该体系的作用量取极值，即 $\delta S = 0$。因为实际往往只要求作用量取驻值，而不一定是极值，因此最小作用量原理也称作“稳恒作用量原理”（principle of stationary action）。

关于最小作用量原理，需要注意以下几点。

> - 最小作用量原理中的“轨迹”，指的是位形空间和时间参数共同构成的 $s+1$ 维空间中随时间演化所形成的轨迹，而不是 $s$ 维位形空间中的轨迹。例如，对于点粒子系统，就是世界线，而不是空间轨迹。对于空间延展的对象，则是世界面、世界体等。
> - 最小作用量原理在所有“可能”的轨迹之间进行比较。这里“可能”指的是运动学上满足约束，并满足端点条件的所有连续轨迹。
> - 对于方程
>   $$
>   S[\mathbf{q}] = \int_{t_1}^{t_2} \mathrm{d}t\, L(t, \mathbf{q}, \dot{\mathbf{q}}),
>   $$
>   我们假设拉格朗日量 $L$ 只依赖于广义坐标和广义速度，不依赖于广义坐标的更高阶的时间微商。这一点仅仅是为了和最简单的牛顿力学系统自洽：即给定物理体系的初始坐标、初始速度就足以唯一确定力学体系的状态。一般来说，拉格朗日量中也可以包含广义坐标更高阶的时间导数，相应的理论被称作所谓“高阶导数理论”。
> - 关于最小作用量原理的讨论只适用于“完整”系统。除了某些特殊情形，非完整系统一般不能直接纳入最小作用量原理的框架内。

对于
$$
S[\mathbf{q}] = \int_{t_1}^{t_2} \mathrm{d}t\, L(t, \mathbf{q}, \dot{\mathbf{q}}))
$$
形式的泛函极值问题，我们已经很熟悉。对作用量 $S$ 做变分，得到

$$
\delta S \simeq -\int_{t_1}^{t_2} \mathrm{d}t\, \left[ \frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial L}{\partial \dot{q}^a} \right) - \frac{\partial L}{\partial q^a} \right] \delta q^a,
$$

因此作用量 $S$ 取极值要求广义坐标 $\mathbf{q}(t)$ 满足欧拉-拉格朗日方程

$$
\frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial L}{\partial \dot{q}^a} \right) - \frac{\partial L}{\partial q^a} = 0, \quad a = 1, \cdots, s,
$$

物理上也称作运动方程（equations of motion）。体系的真实运动必须满足运动方程。任何一个完整力学系统都可以写出其作用量。最小作用量原理和变分法告诉我们，一旦给定了一个力学系统的作用量，其可以得到其经典运动方程，而且是唯一确定的⁵。正是在此意义下，我们说经典力学系统的作用量包含了该体系的所有时间演化信息，或者说经典力学系统的运动规律由其作用量完全描述。

对于经典力学体系，真实的运动是唯一的——即所谓决定论（determinism）。这种真实性和唯一性是先于观测者的。一个观测者看到的真实运动轨迹，在另一个观测者看来也必须是真实的。而广义坐标、以及时间参数的选取则依赖于观测者，是人为的。不同的观测者可能会选择不同的广义坐标和不同的时间参数。这意味着，在一套广义坐标和时间参数下得到的真实运动轨迹（使得作用量取极值），在另一套广义坐标和时间参数下必须仍然是真实的（同样使得作用量取极值）。体现在数学上，作用量必须是不依赖于具体的广义坐标和时间参数选取的，即作用量必须是广义坐标和时间参数变换下的不变量⁶。作用量的这个性质有时也被称作是在广义坐标和时间参数变换下的标量（scalar）。

最小作用量原理改变了经典力学系统的研究“范式”，即不再如牛顿力学中那样做受力分析，而是第一步就是写出、或者构造系统的作用量。其不仅重新表述了机械运动的规律，而且对非机械运动的物理系统同样适用。可以说，在现代理论物理的研究中，作用量是几乎所有分析的出发点。从这个意义上，最小作用量原理甚至可视为整个物理学的第一原理（first principle）。自然总是倾向于让某些基本的物理量（往往是标量）取得极值。例如：重力场中平衡位置重力势能最小，热平衡态对应的热力学势取极值，静电平衡时带点体系静电能最小，水滴的形状保证重力势能和表面张力势能总和最小，等等。

### · 广义动量

牛顿力学中，点粒子的动量定义为 $\mathbf{p} = m\mathbf{v}$。我们将看到，这一定义其实只是在非相对论极限下的近似表达式。动量的一般定义是在拉格朗日力学框架下得到的。物理系统某个广义坐标 $q^a$ 对应的**广义动量**（generalized momentum）定义为

$$
p_a := \frac{\partial L}{\partial \dot{q}^a} = \frac{\partial L}{\partial v^a}, \quad a = 1, \cdots, s,
$$

这里 $v^a \equiv \dot{q}^a$ 是广义速度。我们约定将广义速度 $\dot{q}^a$ 的指标摆在上方，而广义动量 $p_a$ 的指标摆在下方。只要给定了拉格朗日量，则每个广义坐标总是有对应的广义动量。这种“如影随形”的伴随关系在数学上被称为共轭（conjugate）。广义坐标 $q^a$ 及其对应的广义动量 $p_a$ 构成一对共轭变量 $\{q^a, p_a\}$。因此上式定义的广义动量又被称为**共轭动量**（conjugate momentum）或**正则动量**（canonical momentum）。

利用广义动量，运动方程

$$
\frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial L}{\partial \dot{q}^a} \right) - \frac{\partial L}{\partial q^a} = 0, \quad a = 1, \cdots, s,
$$
可以写为

$$
\frac{\mathrm{d}p_a}{\mathrm{d}t} = \frac{\partial L}{\partial q^a}, \quad a = 1, \cdots, s.
$$

这个式子可以与牛顿第二定律对照。方程左边即动量的时间变化率，右边 $\dfrac{\partial L}{\partial q^a}$ 则可以称为“广义力”。

广义坐标未必是长度的量纲，因此广义动量也未必是牛顿力学中动量的量纲（质量乘以速度）。但是由定义，用 $[Q]$ 表示物理量 $Q$ 的量纲，则必有 $[q^a] \cdot [p_a] = [L]$，因此 $[q^a] \cdot [p_a] = [t][L] = [S]$，即一对共轭变量量纲的乘积，一定是系统作用量的量纲。

如前所述，拉格朗日量和作用量应该是不依赖于具体的广义坐标和时间参数选取的“标量”，对于拉格朗日量来说，最自然且普适的“标量”即系统的能量。因此，“约定”所有系统的拉格朗日量都具有“能量”的量纲，于是作用量 $S$ 的量纲即为

> 作用量 = 时间 $\cdot$ 能量 $=$ 空间 $\cdot$ 动量 $=$ 角度 $\cdot$ 角动量 $=$ 普朗克常数 $\hbar$ 、

## Part 3 自由粒子

### ·  4 维形式

现在来考虑一个最简单的问题，一个自由粒子的作用量是什么？对于不受约束的点粒子，位形空间即普通空间本身，于是广义坐标即空间坐标。广义坐标和时间参数合在一起即时空坐标

$$
\left\{ x^{\mu} \right\} = \left\{ x^{0}, x^{1}, x^{2}, x^{3} \right\} \equiv \left\{ ct, x, y, z \right\}, \quad \mu = 0, 1, 2, 3.
$$

作用量必须是广义坐标和时间参数变换下的标量，因此必须要求作用量在一般的时空坐标变换

$$
x^{\mu} \to \tilde{x}^{\mu} = \tilde{x}^{\mu} \left( x^{\rho} \right),
$$

下不变⁹。这种一般的时空坐标的变换通常被称作**广义坐标变换**（general coordinate transformation）。值得一提的是，这里的“广义坐标变换”，指的是“广义的坐标变换”或者“一般的坐标变换”，而且在物理学中通常特指时空坐标的一般变换。其与第二章所讨论的“广义坐标的变换”（transformation of generalized coordinates）是完全不同的概念：

> - 点变换或者广义坐标的变换是变量的“变量代换”，是用来描写力学系统位形的变量的代换，是位形空间的坐标变换。
> - 广义坐标变换只是作用量的积分参数的“重参数化”。在场论（包括广义相对论）中的作用量是对整个时空区域积分，所以积分参数的重参数化即时空的坐标变换。

只是在点粒子情形，其位形空间即普通的空间本身，所以空间坐标就成了描述位形的广义坐标，对于点粒子“广义坐标的变换”和“广义的（时空）坐标变换”碰巧形式上一样。对于点粒子，因为演化的背景只有一维时间（作用量只是对时间的积分），所以真正的广义坐标变换其实对应于时间的重参数化：$t \to \tilde{t} = \tilde{t}(t)$。

在本节中，我们暂时不考虑引力，时空背景为闵氏时空。这时一个基本要求即作用量必须是洛伦兹标量。所谓洛伦兹标量，是指在闵氏时空的洛伦兹变换 $x^{\mu} \to \tilde{x}^{\mu} = \Lambda^{\mu}_{\ \nu}x^{\nu}$ 下不变的量。观察作用量的数学定义，是拉格朗日量 $L$ 对时间参数 $t$ 的积分。

但是由于时间坐标 $t$ 本身并不是洛伦兹标量，所以拉格朗日量 $L$ 本身并不是洛伦兹标量（$L\mathrm{d}t$ 作为一个整体必须是洛伦兹标量）。在非相对论极限下，时间与空间分离，这时系统的作用量 $S$ 和拉格朗日量 $L$ 都是 3 维空间坐标变换下的标量。

粒子的作用量为可能轨迹的泛函。换句话说，给定一条世界线，我们需要给一个数。而且这个数，必须是不依赖于观测者的。对于自由粒子，我们能够找到的唯一的满足这个条件的数就是世界线的长度。闵氏时空中世界线上的线元（洛伦兹标量）为

$$
\mathrm{d}s^{2} = \eta_{\mu\nu}\mathrm{d}x^{\mu}\mathrm{d}x^{\nu}.
$$

这里 $\eta_{\mu\nu}$ 为闵氏度规。欧氏时空中的线元总是正的，但是闵氏时空中的线元可以是正的，也可以是负的，甚至可以为零。

考虑一个做惯性运动的有质量的粒子，在固定在自身的惯性系看来是静止不动的，即空间坐标不变 $\mathrm{d}x^{1} = \mathrm{d}x^{2} = \mathrm{d}x^{3} = 0$，因此线元 $\mathrm{d}s^{2} = -c^{2}\mathrm{d}t^{2} < 0$，即有质量粒子世界线上的线元恒为负。因此线元的长度就只能写成 $|\mathrm{d}s| \equiv \sqrt{-\mathrm{d}s^{2}}$。所以，自由粒子的作用量最简单的取法即
$$
S = -mc \int |\mathrm{d}s| = -mc \int \sqrt{-\eta_{\mu\nu}\mathrm{d}x^{\mu}\mathrm{d}x^{\nu}},
$$

这里 $m$ 为粒子的质量，$c$ 为光速。在上式中，因子 $mc$ 是为了让作用量具有“正确”的量纲（即 [空间]·[动量]），负号是为了在非相对论极限下和牛顿力学的结果自洽。上式就是闵氏时空中一个自由粒子的作用量，简言之，自由粒子的作用量正比于其世界线的长度。这里我们看到，从时空的洛伦兹不变性出发，我们几乎可以唯一地确定出一个自由粒子的作用量。

原则上可以用任一单调变化的参数来参数化世界线。最简单和自然的参数化即令参数 $\tau$ 的数值正比于世界线的长度：

$$
\mathrm{d}s^{2} = \eta_{\mu\nu}\mathrm{d}x^{\mu}\mathrm{d}x^{\nu} =: -c^{2}\mathrm{d}\tau^{2}.
$$

这里 $c$ 是光速。这样的参数 $\tau$ 被称作世界线的**固有时**（proper time），具有时间的量纲。固有时——在数值上——即做惯性运动的粒子在固定于自身的惯性系中的时钟读数。因此自由粒子的作用量还可以写成

$$
S = -mc \int \mathrm{d}\tau \sqrt{-\eta_{\mu\nu} \frac{\mathrm{d}x^{\mu}}{\mathrm{d}\tau} \frac{\mathrm{d}x^{\nu}}{\mathrm{d}\tau}}.
$$

粒子的时空坐标 $x^{\mu}$ 随着世界线参数 $\tau$ 的变化率被称作所谓 **4-速度**（4-velocity），

$$
u^{\mu} := \frac{\mathrm{d}x^{\mu}(\tau)}{\mathrm{d}\tau}, \quad \mu = 0, 1, 2, 3,
$$

其是 4 维时空中的矢量。由
$$
\mathrm{d}s^{2} = \eta_{\mu\nu}\mathrm{d}x^{\mu}\mathrm{d}x^{\nu} =: -c^{2}\mathrm{d}\tau^{2}.
$$
推出
$$
u_{\mu}u^{\mu} \equiv \eta_{\mu\nu} \frac{\mathrm{d}x^{\mu}}{\mathrm{d}\tau} \frac{\mathrm{d}x^{\nu}}{\mathrm{d}\tau} = -c^{2},
$$

即粒子的 4-速度 $u^{\mu}$ 的模方是常数 $-c^{2}$。

将 $S = -mc \displaystyle\int \mathrm{d}\tau \sqrt{-\eta_{\mu\nu} \dfrac{\mathrm{d}x^{\mu}}{\mathrm{d}\tau} \dfrac{\mathrm{d}x^{\nu}}{\mathrm{d}\tau}}$对 $x^{\mu}$ 变分，并利用利用上式，得到

$$
\begin{aligned}
\delta S &= -mc \int \mathrm{d}\tau \delta \sqrt{-\eta_{\mu\nu} \frac{\mathrm{d}x^{\mu}}{\mathrm{d}\tau} \frac{\mathrm{d}x^{\nu}}{\mathrm{d}\tau}} = m \int \mathrm{d}\tau \eta_{\mu\nu} \delta \left( \frac{\mathrm{d}x^{\mu}}{\mathrm{d}\tau} \right) \frac{\mathrm{d}x^{\nu}}{\mathrm{d}\tau} \\\\
&\simeq -m \int \mathrm{d}\tau \eta_{\mu\nu} \frac{\mathrm{d}^{2}x^{\nu}}{\mathrm{d}\tau^{2}} \delta x^{\mu},
\end{aligned}
$$

所以自由粒子的运动方程即

$$
\frac{\mathrm{d}^{2}x^{\mu}}{\mathrm{d}\tau^{2}} = 0, \quad \mu = 0, 1, 2, 3.
$$

上面方程的解为 $x^{\mu} = a^{\mu}\tau + b$（其中 $a^{\mu}$ 和 $b$ 都是常数），是时空中的直线，因此自由粒子的世界线是时空中的直线。这是“自由粒子（在空间中）做匀速直线运动”的更加严格的、相对论性的表述。

引入 4-速度后，自由粒子的作用量可以写成 $S = \displaystyle\int \mathrm{d}\tau L$，这里 $L = -mc \sqrt{-\eta_{\mu\nu}u^{\mu}u^{\nu}}$。由动量的定义并利用
$$
u_{\mu}u^{\mu} \equiv \eta_{\mu\nu} \frac{\mathrm{d}x^{\mu}}{\mathrm{d}\tau} \frac{\mathrm{d}x^{\nu}}{\mathrm{d}\tau} = -c^{2},
$$
粒子的 4-动量为

$$
p_{\mu} := \frac{\partial L}{\partial u^{\mu}} = \frac{\partial}{\partial u^{\mu}} \left( -mc \sqrt{-\eta_{\rho\sigma}u^{\rho}u^{\sigma}} \right) = mu_{\mu}, \quad \mu = 0, 1, 2, 3.
$$

自由粒子的 4-动量与 4-速度的关系形式上与牛顿力学中动量 $\mathbf{p} = m\mathbf{v}$ 一样。运动方程用 4-动量表示即

$$
\frac{\mathrm{d}p^{\mu}}{\mathrm{d}\tau} = 0,
$$

因此闵氏时空中自由粒子的 4-动量守恒。

### · 3 维形式

我们希望将作用量
$$
S = -mc \int |\mathrm{d}s| = -mc \int \sqrt{-\eta_{\mu\nu}\mathrm{d}x^{\mu}\mathrm{d}x^{\nu}},
$$
写成 $S = \int \mathrm{d}t L$ 的形式。为此，需要将作用量中时间和空间部分写成明显分离的形式。首先注意到闵氏度规的空间部分 $\eta_{ij} = \delta_{ij}$，这是因为对于闵氏时空来说，其空间部分就是普通的 3 维欧氏空间。
$$
S = -mc \int |\mathrm{d}s| = -mc \int \sqrt{-\eta_{\mu\nu}\mathrm{d}x^{\mu}\mathrm{d}x^{\nu}},
$$
可写成

$$
S = -mc \int \sqrt{c^{2}(\mathrm{d}t)^{2} - \delta_{ij}\mathrm{d}x^{i}\mathrm{d}x^{j}} = -mc^{2} \int \mathrm{d}t \sqrt{1 - \frac{1}{c^{2}}\delta_{ij} \frac{\mathrm{d}x^{i}}{\mathrm{d}t} \frac{\mathrm{d}x^{j}}{\mathrm{d}t}}.
$$

其中出现了粒子的空间坐标 $\left\{ x^{i} \right\}$ 随着时间坐标 $t$ 的变化率

$$
v^{i} := \frac{\mathrm{d}x^{i}}{\mathrm{d}t}, \quad i = 1, 2, 3,
$$

被称作 **3-速度**（3-velocity），为 3 维空间中的矢量。于是作用量成为

$$
S = \int \mathrm{d}t L, \quad L = -mc^{2} \sqrt{1 - \frac{v^{2}}{c^{2}}},
$$

其中 $v \equiv |\mathbf{v}| \equiv \sqrt{\delta_{ij}v^{i}v^{j}}$。上式就是闵氏时空中自由粒子作用量的 3 维形式，其中拉格朗日量 $L = L(v)$ 只与粒子 3-速度的大小有关。这里自然地出现了著名的**洛伦兹因子**（Lorentz factor）

$$
\frac{\mathrm{d}t}{\mathrm{d}\tau} = \frac{1}{\sqrt{1 - \frac{v^{2}}{c^{2}}}} =: \gamma.
$$

根据动量的定义和作用量的 3 维形式，粒子的 3-动量定义为

$$
p_{i} \equiv \frac{\partial L}{\partial v^{i}} = \frac{\partial}{\partial v^{i}} \left( -mc^{2} \sqrt{1 - \frac{v^{2}}{c^{2}}} \right).
$$

化简得到

$$
p_{i} = \frac{mv_{i}}{\sqrt{1 - \frac{v^{2}}{c^{2}}}}, \quad i = 1, 2, 3,
$$

这里 $v_{i} \equiv \delta_{ij}v^{j}$。和 3-速度一样，粒子的 3-动量是 3 维空间中的矢量。利用 $\displaystyle\frac{\mathrm{d}t}{\mathrm{d}\tau} = \frac{1}{\sqrt{1 - \frac{v^{2}}{c^{2}}}} =: \gamma$ 及 3-速度的定义，3-动量还可以写成

$$
p_{i} = m \frac{\mathrm{d}x_{i}}{\mathrm{d}t} \frac{\mathrm{d}t}{\mathrm{d}\tau} = m \frac{\mathrm{d}x_{i}}{\mathrm{d}\tau} \equiv mu_{i}, \quad i = 1, 2, 3.
$$

可见 3-动量对应空间坐标对于固有时 $\tau$ 的变化率（4-速度的空间分量），而不是对于坐标时 $t$ 的变化率（3-速度）。从这里已经看出，牛顿力学中的动量 $mv_{i}$ 只是严格的 3-动量在非相对论极限下的近似。

粒子 4-动量的空间分量 $p^{i} = mu^{i}$ 即 3-动量。对于时间分量，定义

$$
E := cp^{0} = mcu^{0} = mc^{2} \frac{\mathrm{d}t}{\mathrm{d}\tau} = \frac{mc^{2}}{\sqrt{1 - \frac{v^{2}}{c^{2}}}},
$$

为粒子的能量。我们将会看到，在非相对论极限下 $E$ 确实会给出牛顿力学的动能 $\dfrac{1}{2}mv^{2}$。于是 4-动量的模方可以分解为

$$
p_{\mu}p^{\mu} = -\left(p^{0}\right)^{2} + \delta_{ij}p^{i}p^{j} \equiv -\frac{E^{2}}{c^{2}} + \mathbf{p}^{2},
$$

这里 $\mathbf{p}^{2} \equiv \delta_{ij}p^{i}p^{j}$。而由
$$
u_{\mu}u^{\mu} \equiv \eta_{\mu\nu} \frac{\mathrm{d}x^{\mu}}{\mathrm{d}\tau} \frac{\mathrm{d}x^{\nu}}{\mathrm{d}\tau} = -c^{2},
$$
4-动量的模方是常数
$$
p_{\mu}p^{\mu} = m^{2}u_{\mu}u^{\mu} = -m^{2}c^{2},
$$

上两式即给出

$$
E^{2} = \mathbf{p}^{2}c^{2} + m^{2}c^{4}.
$$

这就是著名的爱因斯坦能量-动量关系（energy-momentum relation）。

### · 非相对论极限

以上的讨论——无论是 4 维还是 3 维形式——都是完全相对论性的。对于大部分宏观物体，其运动速度（3-速度）远远低于光速，因此可以考虑**非相对论极限**（non-relativistic limit），即

$$
\frac{v}{c} \ll 1.
$$

在非相对论极限下，闵氏时空变为牛顿力学的伽利略时空。在伽利略时空中，时间与空间发生了绝对的（即不依赖于观测者的）分离，特别是时间具有了绝对的意义。

在非相对论极限下，能量可以展开为

$$
E = \frac{mc^{2}}{\sqrt{1 - \frac{v^{2}}{c^{2}}}} = mc^{2} + \frac{1}{2}mv^{2} + \frac{3}{8}m\frac{v^{4}}{c^{2}} + \cdots.
$$

其中第一项

$$
E_{0} = mc^{2},
$$

即著名的爱因斯坦质能等价关系（mass-energy equivalence），常数 $mc^{2}$ 即粒子在空间中静止时具有的能量。与速度相关的领头项为

$$
E_{1} = \frac{1}{2}mv^{2} \equiv T,
$$

即再熟悉不过的牛顿力学下粒子的动能。速度更高阶的项则是相对论修正。

类似地，在非相对论极限下，作用量的 3 维形式
$$
S = \int \mathrm{d}t L, \quad L = -mc^{2} \sqrt{1 - \frac{v^{2}}{c^{2}}},
$$
可以展开得到

$$
S = -mc^{2} \int \mathrm{d}t + \int \mathrm{d}t \left( \frac{1}{2}mv^{2} + \frac{1}{8}m\frac{v^{4}}{c^{2}} + \cdots \right).
$$

除去常数项，与速度相关的领头项为

$$
S = \int \mathrm{d}t \frac{1}{2}mv^{2} \equiv \int \mathrm{d}t T,
$$

这里再次出现了牛顿力学的动能 $\dfrac{1}{2}mv^{2}$。上式就是非相对论自由粒子的作用量。与速度相关更高阶的项则是相对论修正。

前面提到，在非相对论极限下，拉格朗日量是 3 维空间中的标量。这一点从上式可以得到明显验证，因为牛顿力学的动能 $\dfrac{1}{2}mv^{2}$ 就是 3 维空间的标量。

## Part 4 外场中的粒子

自由粒子与周围的环境没有任何相互作用，一个自然的问题是，如何考虑环境对粒子的影响？此外，在非相对论极限下出现了牛顿力学的动能，如何体现势能的作用？

### · 标量场

考虑闵氏时空标量场中的粒子。标量场对粒子的影响可以有各种方式，我们考虑最简单的情形，即使得线元长度发生变化 $|\mathrm{d}s| \to e^{\Phi} |\mathrm{d}s|$，因此作用量为

$$
S = -mc \int e^{\Phi} |\mathrm{d}s|,
$$

其中 $\Phi = \Phi(t, x) \equiv \Phi(x^{\mu})$ 是无量纲的标量场。仿照自由粒子情形，取固有时 $\tau$ 作为世界线的参数，将作用量对时空坐标 $x^{\mu}$ 变分得到运动方程

$$
\frac{\mathrm{d}^{2}x_{\mu}}{\mathrm{d}\tau^{2}} + \frac{\partial\Phi}{\partial x^{\nu}} \frac{\mathrm{d}x^{\nu}}{\mathrm{d}\tau} \frac{\mathrm{d}x_{\mu}}{\mathrm{d}\tau} + c^{2} \frac{\partial\Phi}{\partial x^{\mu}} = 0, \quad \mu = 0, 1, 2, 3.
$$

自由粒子的运动方程即上式中 $\Phi = 0$ 的特殊情况。类似地，作用量 $S = -mc \int e^{\Phi} |\mathrm{d}s|$ 的 3 维形式为

$$
S = -mc^{2} \int \mathrm{d}t e^{\Phi} \sqrt{1 - \frac{v^{2}}{c^{2}}},
$$

将其对空间坐标 $x^{i}$ 变分即得到运动方程的 3 维形式

$$
\ddot{p}_{i} + p_{i} \frac{\partial\Phi}{\partial x^{j}} \dot{x}^{j} + mc^{2} \sqrt{1 - \frac{v^{2}}{c^{2}}} \frac{\partial\Phi}{\partial x^{i}} = 0, \quad i = 1, 2, 3.
$$

在有外场存在的情况下，我们同时考虑“低速”和“弱场”的极限，即

$$
\frac{v^{2}}{c^{2}} \ll 1, \quad \Phi \equiv \frac{V}{mc^{2}} \ll 1,
$$

其中 $V$ 具有能量量纲。因为 $V \ll mc^{2}$ 的意义是与外场相互作用的能量远远小于粒子的静止能量 $mc^{2}$，因此上面的极限也可统称为非相对论极限。在非相对论极限下，运动方程展开并保留至速度 $\mathbf{v}$ 和 $V$ 的领头阶为

$$
\ddot{x}_{i} = -\frac{\partial V}{\partial x^{i}}, \quad i = 1, 2, 3.
$$

这不是别的，正是牛顿第二定律的形式。其中右边 $-\dfrac{\partial V}{\partial x^{i}}$ 是 $V$ 的空间梯度，正是牛顿力学中保守力的形式。这表明在非相对论极限下，$V$ 具有牛顿力学中势能的意义。

另一方面，作用量的 3 维形式也可展开并保留至领头阶，得到

$$
\begin{aligned}
S &= -mc^{2} \int \mathrm{d}t \sqrt{1 - \frac{v^{2}}{c^{2}}} e^{\frac{V}{mc^{2}}} = -mc^{2} \int \mathrm{d}t \left(1 - \frac{1}{2} \frac{v^{2}}{c^{2}} + \cdots \right) \left(1 + \frac{V}{mc^{2}} + \cdots \right) \\\\
&= -\int \mathrm{d}t mc^{2} + \int \mathrm{d}t \left(\frac{1}{2}mv^{2} - V\right) + \cdots.
\end{aligned}
$$

除去常数项，在非相对论极限下，拉格朗日量在与速度和外场有关的领头阶具有“动能减去势能”的形式：

$$
L = \frac{1}{2}mv^{2} - V \equiv T - V,
$$

其中 $T \equiv \dfrac{1}{2}mv^{2}$ 即牛顿力学的动能，$V$ 在非相对论极限下对应牛顿力学的势能。从展开的过程可以看出，这里“减号”的来源正是闵氏时空度规中时间和空间部分的符号差异。

### · 电磁场

接下来考虑粒子与 4 维矢量场 $A^{\mu}$ 的相互作用。最熟悉的矢量场即电磁场。考虑闵氏时空，作用量必须是洛伦兹标量。因此问题转化为如何用矢量场和粒子的世界线来构造一个标量。最简单的方式就是矢量场与粒子 4-速度的内积 $A_{\mu}u^{\mu}$。将这个标量沿着粒子的世界线积分，自然仍然是一个标量。于是，矢量场对粒子的作用量的贡献为

$$
\int \mathrm{d}\tau A_{\mu}u^{\mu} \equiv \int \mathrm{d}\tau A_{\mu} \frac{\mathrm{d}x^{\mu}}{\mathrm{d}\tau} = \int A_{\mu} \mathrm{d}x^{\mu}.
$$

矢量场中粒子的完整作用量即

$$
S = -mc \int |\mathrm{d}s| + \frac{e}{c} \int A_{\mu}(x) \mathrm{d}x^{\mu}.
$$

这里的常数 $e$ 代表了粒子与矢量场 $A_{\mu}$ 的耦合强度。对于电磁场，$e$ 即粒子所带的电荷。

上式作用量为两项之和，其中第一项与自由粒子作用量完全一样，因此电磁场对于粒子运动方程的贡献来源于对第二项的变分。有

$$
\begin{aligned}
\delta \int A_{\mu} \mathrm{d}x^{\mu} &= \int \left( \frac{\partial A_{\mu}}{\partial x^{\nu}} \delta x^{\nu} \mathrm{d}x^{\mu} + A_{\mu} \delta(\mathrm{d}x^{\mu}) \right) \\\\
&\simeq \int \left( \frac{\partial A_{\mu}}{\partial x^{\nu}} \delta x^{\nu} \mathrm{d}x^{\mu} - \frac{\partial A_{\mu}}{\partial x^{\nu}} \mathrm{d}x^{\nu} \delta x^{\mu} \right) \equiv \int F_{\mu\nu} \mathrm{d}x^{\nu} \delta x^{\mu},
\end{aligned}
$$

其中

$$
F_{\mu\nu} := \frac{\partial A_{\nu}}{\partial x^{\mu}} - \frac{\partial A_{\mu}}{\partial x^{\nu}}, \quad \mu, \nu = 0, 1, 2, 3,
$$

被称为**电磁张量**（electromagnetic tensor）或电磁场强。由定义可知 $F_{\mu\nu}$ 是一个反对称的张量，即 $F_{\mu\nu} = -F_{\nu\mu}$。结合自由粒子作用量的变分，最终得到电磁场中粒子的运动方程为

$$
\frac{\mathrm{d}p_{\mu}}{\mathrm{d}\tau} = \frac{e}{c} F_{\mu\nu} u^{\nu}, \quad \mu = 0, 1, 2, 3.
$$

4-矢量 $A^{\mu}$ 可以分解为

$$
A^{\mu} = (A^{0}, A^{i}) \equiv (\Phi, \mathbf{A}),
$$

其中 $\Phi$ 被称为**标量势**（scalar potential），$\mathbf{A}$ 被称为**矢量势**（vector potential）。这里的所谓“标量”和“矢量”都是指 3 维空间中的标量和矢量。
$$
\int \mathrm{d}\tau A_{\mu}u^{\mu} \equiv \int \mathrm{d}\tau A_{\mu} \frac{\mathrm{d}x^{\mu}}{\mathrm{d}\tau} = \int A_{\mu} \mathrm{d}x^{\mu}.
$$
分解为

$$
\int A_{\mu} \mathrm{d}x^{\mu} = \int (-A^{0} \mathrm{d}x^{0} + \delta_{ij} A^{i} \mathrm{d}x^{j}) = \int (-c\Phi \mathrm{d}t + A_{i} \mathrm{d}x^{i}) = \int \mathrm{d}t (-c\Phi + A_{i} v^{i}),
$$

结合
$$
S = \int \mathrm{d}t L, \quad L = -mc^{2} \sqrt{1 - \frac{v^{2}}{c^{2}}}
$$
电磁场中相对论性带电粒子的作用量的 3 维形式即

$$
S = \int \mathrm{d}t L, \quad L = -mc^{2} \sqrt{1 - \frac{v^{2}}{c^{2}}} - c\Phi + \frac{e}{c} \mathbf{v} \cdot \mathbf{A}.
$$

对上式变分可得到运动方程的 3 维形式：

$$
\frac{\mathrm{d}E}{\mathrm{d}t} = e\mathbf{v} \cdot \mathbf{E}, \quad \frac{\mathrm{d}\mathbf{p}}{\mathrm{d}t} = e \left( \mathbf{E} + \frac{1}{c} \mathbf{v} \times \mathbf{B} \right),
$$

其中 $E$ 为粒子的能量，$\mathbf{p}$ 为 3-动量,

$$
\mathbf{E} = -\nabla\Phi - \frac{1}{c} \frac{\partial\mathbf{A}}{\partial t}, \quad \mathbf{B} = \nabla \times \mathbf{A},
$$

分别为电场强度 $\mathbf{E}$ 和磁感应强度 $\mathbf{B}$（都是 3 维矢量）。

### · 引力场

当有引力存在时，时空不再是闵氏时空，相应的度规不再是闵氏度规 $\eta_{\mu\nu}$，而是时空坐标的一般函数 $g_{\mu\nu}(x)$。和闵氏时空中的自由粒子一样，引力场中粒子的作用量也正比于其世界线的长度。此时粒子世界线的线元形式和 
$$
\mathrm{d}s^{2} = \eta_{\mu\nu}\mathrm{d}x^{\mu}\mathrm{d}x^{\nu}.
$$
 一样，唯一的不同是闵氏度规 $\eta_{\mu\nu}$ 被一般的度规 $g_{\mu\nu}$ 所替代。因此引力场中粒子的作用量即为

$$
S = -mc \int |\mathrm{d}s| = -mc \int \sqrt{-g_{\mu\nu} \mathrm{d}x^{\mu} \mathrm{d}x^{\nu}}.
$$

上式所对应 $x^{\mu}$ 的运动方程被称为**测地线**（geodesic）方程。

根据爱因斯坦的广义相对论，在质量为 $M$ 的天体周围，以天体为中心取球坐标 $\{r, \theta, \phi\}$，时空的度规具有形式¹⁴

$$
\mathrm{d}s^{2} = -c^{2} \left(1 - \frac{2GM}{c^{2}r} \right) \mathrm{d}t^{2} + \left(1 - \frac{2GM}{c^{2}r} \right)^{-1} \mathrm{d}r^{2} + r^{2} \mathrm{d}\theta^{2} + r^{2} \sin^{2}\theta \mathrm{d}\phi^{2},
$$

其中 $G$ 为牛顿引力常数。在 $M \to 0$ 或 $G \to 0$ 的极限下，上式就变回平坦的闵氏时空度规在球坐标下的形式。将度规的形式代入
$$
S = -mc \displaystyle\int |\mathrm{d}s| = -mc \int \sqrt{-g_{\mu\nu} \mathrm{d}x^{\mu} \mathrm{d}x^{\nu}}
$$
即得到质量为 $m$ 的粒子在球对称引力场中的作用量

$$
S = -mc \int \mathrm{d}t \sqrt{c^{2} \left(1 - \frac{2GM}{c^{2}r} \right) - \left(1 - \frac{2GM}{c^{2}r} \right)^{-1} \dot{r}^{2} - r^{2} \dot{\theta}^{2} - r^{2} \sin^{2}\theta \dot{\phi}^{2}},
$$

考虑“低速”和“弱场”的非相对论极限，

$$
\frac{|\dot{r}|}{c}, \frac{r|\dot{\theta}|}{c}, \frac{r|\dot{\phi}|}{c} \ll 1, \quad \frac{GM}{c^{2}r} \ll 1,
$$

展开
$$
S = -mc \int \mathrm{d}t \sqrt{c^{2} \left(1 - \frac{2GM}{c^{2}r} \right) - \left(1 - \frac{2GM}{c^{2}r} \right)^{-1} \dot{r}^{2} - r^{2} \dot{\theta}^{2} - r^{2} \sin^{2}\theta \dot{\phi}^{2}},
$$
并保留到领头阶，得到
$$
\begin{aligned}
S &= -mc^{2} \int \mathrm{d}t \left(1 - \frac{GM}{c^{2}r} + \cdots \right) \left[1 - \frac{1}{2} \frac{1}{c^{2}} \left(\dot{r}^{2} + r^{2} \dot{\theta}^{2} + r^{2} \sin^{2}\theta \dot{\phi}^{2} \right) + \cdots \right] \\\\
&= -mc^{2} \int \mathrm{d}t + \int \mathrm{d}t \left[\frac{1}{2}m \left(\dot{r}^{2} + r^{2} \dot{\theta}^{2} + r^{2} \sin^{2}\theta \dot{\phi}^{2} \right) + G \frac{Mm}{r} \right] + \cdots,
\end{aligned}
$$

除去常数项，非相对论极限下，球对称引力场中粒子的作用量即

$$
S = \int \mathrm{d}t (T - V),
$$

其中

$$
T = \frac{1}{2}m \left(\dot{r}^{2} + r^{2} \dot{\theta}^{2} + r^{2} \sin^{2}\theta \dot{\phi}^{2} \right) \equiv \frac{1}{2}mv^{2},
$$

正是粒子的牛顿力学动能在球坐标下的形式，而

$$
V(r) = -G \frac{Mm}{r},
$$

正是质量为 $m$ 的粒子的牛顿万有引力势能。作用量 $S =\displaystyle \int \mathrm{d}t (T - V)$ 对应运动方程 $m\ddot{r} = -\nabla V$，方程的右边正是牛顿万有引力。由此可见，牛顿万有引力定律只是在引力场很弱、运动速度很低情况下的近似。

此外，在非相对论极限下，引力场中粒子的拉格朗日量同样具有“动能减去势能”的形式，而由非相对论极限的推导知，这同样来自度规中时间和空间部分的符号差别。

## Part 5 非相对论极限作用量

以上我们从第一原理——相对论时空观和最小作用量原理——出发，讨论了闵氏时空中自由粒子和外场中粒子的作用量，并得到了其在非相对论极限下的形式。我们得到一个重要的结论：在非相对论极限（即低速、弱场）下，粒子的拉格朗日量就是动能减去势能。这里的“减号”正来源于闵氏度规中时间和空间部分符号的差异。类似的讨论可以推广到其他保守体系和多粒子系统，并得到同样的结论。

于是我们得到以下论断：在非相对论极限下，作用量具有形式

$$
S = \int \mathrm{d}t L = \int \mathrm{d}t (T - V),
$$

其中第一项 $T$ 被称作**动能**（kinetic energy），第二项 $V$ 被称作**势能**（potential energy）。因为是在非相对论极限下，所以这里的动能即牛顿力学的动能，势能则一般只依赖于系统的位形。需要强调的是，“拉格朗日量等于动能减去势能”只适用于非相对论极限下的粒子系统（包括刚体）。

实际上，“动能”和“势能”的概念，本身只在非相对论极限下才有意义，或者说，它们本来就是非相对论极限下的概念。在相对论情形，拉格朗日量具有更一般的函数形式，往往不能分解成明显的动能和势能部分。在连续系统情形，例如 1 维弦、2 维膜、3 维场的情形，拉格朗日量也可能具有不同的、更复杂的数学形式。

接下来除非特别声明，我们讨论的都是非相对论性的力学系统，因此 $L = T - V$ 的形式是适用的。

对于 $N$ 个粒子组成的粒子系统，记第 $\alpha$ 个粒子的直角坐标为 $\mathbf{x}_{(\alpha)}$，则系统的总动能为

$$
T = \sum_{\alpha=1}^{N} \frac{1}{2} m_{(\alpha)} \dot{\mathbf{x}}_{(\alpha)}^{2}.
$$

若换为广义坐标 $\{q^{a}\}, a = 1, \cdots, 3N$，有

$$
\mathbf{x}_{(\alpha)} = \mathbf{x}_{(\alpha)}(t, \mathbf{q}), \quad \alpha = 1, \cdots, N.
$$

速度的变换关系为

$$
\dot{\mathbf{x}}_{(\alpha)} \equiv \frac{\partial \mathbf{x}_{(\alpha)}}{\partial q^{a}} \dot{q}^{a} + \frac{\partial \mathbf{x}_{(\alpha)}}{\partial t}, \quad \alpha = 1, \cdots, N.
$$

于是动能用广义坐标 $\{q^{a}\}$ 表示为

$$
T = \sum_{\alpha=1}^{N} \frac{1}{2} m_{(\alpha)} \left( \frac{\partial \mathbf{x}_{(\alpha)}}{\partial q^{a}} \dot{q}^{a} + \frac{\partial \mathbf{x}_{(\alpha)}}{\partial t} \right) \cdot \left( \frac{\partial \mathbf{x}_{(\alpha)}}{\partial q^{b}} \dot{q}^{b} + \frac{\partial \mathbf{x}_{(\alpha)}}{\partial t} \right),
$$

整理得到

$$
T = \frac{1}{2} G_{ab} \dot{q}^{a} \dot{q}^{b} + X_{a} \dot{q}^{a} + Y,
$$

即动能为广义速度的二次型，其中

$$
\begin{aligned}
G_{ab} &= \sum_{\alpha=1}^{N} m_{(\alpha)} \frac{\partial \mathbf{x}_{(\alpha)}}{\partial q^{a}} \cdot \frac{\partial \mathbf{x}_{(\alpha)}}{\partial q^{b}}, \\\\
X_{a} &= \sum_{\alpha=1}^{N} m_{(\alpha)} \frac{\partial \mathbf{x}_{(\alpha)}}{\partial q^{a}} \cdot \frac{\partial \mathbf{x}_{(\alpha)}}{\partial t}, \\\\
Y &= \frac{1}{2} \sum_{\alpha=1}^{N} m_{(\alpha)} \frac{\partial \mathbf{x}_{(\alpha)}}{\partial t} \cdot \frac{\partial \mathbf{x}_{(\alpha)}}{\partial t},
\end{aligned}
$$

都只是广义坐标和 $t$ 的函数，与广义速度无关。

若约束非定常，从直角坐标到广义坐标的变换 $\mathbf{x}_{(\alpha)}(t, \mathbf{q})$ 显含时间，因此 $X_{a}$ 和 $Y$ 一般不为零。对于定常约束系统，$\mathbf{x}_{(\alpha)}(\mathbf{q})$ 不显含时间，因此

$$
\frac{\partial \mathbf{x}_{(\alpha)}}{\partial t} = 0, \quad \Rightarrow \quad X_{a} = 0, \quad Y = 0.
$$

这意味着对于定常约束系统，动能总是广义速度的“二次型”：

$$
T = \frac{1}{2} G_{ab}(\mathbf{q}) \dot{q}^{a} \dot{q}^{b}.
$$

这里 $G_{ab}(\mathbf{q})$ 一般依赖于广义坐标，是一个对称、正定的矩阵。势能 $V$ 则只是广义坐标的函数

$$
V = V(\mathbf{q}).
$$

总之，非相对论性定常系统的拉格朗日量的一般形式即

$$
L = T - V = \frac{1}{2} G_{ab}(\mathbf{q}) \dot{q}^{a} \dot{q}^{b} - V(\mathbf{q}).
$$



