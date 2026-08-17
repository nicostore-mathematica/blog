---
title: Lesson 9 最小作用量原理 II
permalink: /analytical-mechanics/lesson-9/
createTime: 2026/08/17 13:49:14
---

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



