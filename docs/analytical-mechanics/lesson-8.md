---
title: Lesson 8 最小作用量原理 II
permalink: /analytical-mechanics/lesson-8/
createTime: 2026/08/17 13:42:43
---

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

