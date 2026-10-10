---
url: /electrodynamics/electrodynamics-7/index.md
---
前面我们已经讲述了电动力学的发展简史，主要概念和基本方程式。现在开始我们将用所谓拉格朗日量的形式把它们复述一遍。这样做的目的，不仅是为了将电动力学用一种更为紧凑和明晰的形式表达出来，也是由于这一形式有助于我们加深对于电动力学和狭义相对论之间的关系的理解。

同时，更为重要的是，早在 1925 年，狄拉克 (Paul Dirac) 即已发现，基于拉格朗日形式的所谓正则量子化方法 (canonical quantization)，可以使得人们从经典物理的牛顿方程出发，直接写出一个体系所满足的量子力学的薛定谔方程 (Schrödinger equation)。这就使得拉格朗日形式的表述成为研究量子力学的不可或缺的工具。

## Part 1 自由粒子的作用量

拉格朗日表述的出发点是所谓最小作用量原理。这一原理告诉我们，对于每一个力学体系，有一个叫作“作用量 (action)”的积分 $S$ 存在。对于体系的实际运动过程，这个量应该取极值，即它的变分 $\delta S$ 为零。首先，我们看一个自由粒子的作用量。按照爱因斯坦的相对性原理，它应该与我们所选取的惯性参照系无关。也就是说，在洛伦兹变换下，它应该是一个不变量。一个简单明了的选择是

$$
S = \int\_a^b \alpha, d\tau.
$$

这里，$\alpha$ 为一个待定常数，$a$ 和 $b$ 为自由粒子在一段时间间隔内运动的出发时的初始时空点和最后到达的终止时空点。$\tau$ 为粒子的原时 (或固有时)。至于这样选取 $S$ 是否合适以及如何确定常数 $\alpha$，则要由可否利用最小作用量原理推导出我们先前已知的结果来决定。

我们已经知道，对于实验室系而言，作用量 $S$ 可以重新写作

$$
S = \int\_{t\_a}^{t\_b} \alpha \sqrt{1 - \frac{v^2}{c^2}}, dt.
$$

这里，$t$ 为实验室参照系中的时间，$c$ 为真空中的光速，而 $v$ 为自由粒子相对于实验室参照系的速率。在文献中，被积函数

$$
L(x, y, z, \dot{x}, \dot{y}, \dot{z}) = \alpha \sqrt{1 - \frac{v^2}{c^2}} = \alpha \sqrt{1 - \frac{\dot{x}^2 + \dot{y}^2 + \dot{z}^2}{c^2}}
$$

称为粒子在实验室参照系中的拉格朗日量 (lagrangian)。

接下来，我们要决定常数 $\alpha$。根据广义动量的定义，我们知道

$$
p\_x = \frac{\partial L}{\partial v\_x}, \quad p\_y = \frac{\partial L}{\partial v\_y}, \quad p\_z = \frac{\partial L}{\partial v\_z}
$$

成立。以 $p\_x$ 为例，我们有

$$
p\_x = \frac{\partial L}{\partial v\_x} = \frac{\partial}{\partial \dot{x}} \left( \alpha \sqrt{1 - \frac{\dot{x}^2 + \dot{y}^2 + \dot{z}^2}{c^2}} \right) = \frac{\alpha}{2} \frac{1}{\sqrt{1 - \frac{\dot{x}^2 + \dot{y}^2 + \dot{z}^2}{c^2}}} \left( -\frac{2\dot{x}}{c^2} \right) = \frac{-\alpha v\_x}{c^2 \sqrt{1 - \frac{v^2}{c^2}}}.
$$

另一方面，我们已知

$$
p\_x = \frac{m\_0 v\_x}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$

比较以上两式，我们得到 $\alpha = -m\_0 c^2$。因此，粒子的作用量 $S$ 可以被重新写作

$$
S = -m\_0 c^2 \int\_{t\_a}^{t\_b} \sqrt{1 - \frac{v^2}{c^2}}, dt.
$$

有了粒子的拉格朗日量之后，我们即可写出其哈密顿量 $H$。我们有

$$
\begin{aligned}
H &= p\_x \dot{x} + p\_y \dot{y} + p\_z \dot{z} - L = \frac{m\_0 v^2}{\sqrt{1 - \frac{v^2}{c^2}}} + m\_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} \\\\
&= \frac{m\_0}{\sqrt{1 - \frac{v^2}{c^2}}} \left\[ v^2 + c^2 \left( 1 - \frac{v^2}{c^2} \right) \right] = \frac{m\_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}}.
\end{aligned}
$$

我们看到，这恰恰是粒子的能量。

现在，我们要利用最小作用量原理推导自由粒子的运动方程。首先，我们将粒子的作用量改写作

$$
\begin{aligned}
S &= -m\_0 c^2 \int\_a^b d\tau = -m\_0 c \int\_a^b \sqrt{c^2 (dt)^2 - (dx)^2 - (dy)^2 - (dz)^2} \\\\
&= -m\_0 c \int\_a^b \sqrt{ -\sum\_{i=1}^4 (dx\_i)^2 }.
\end{aligned}
$$

显然，这一表达式在洛伦兹变换下是不变的。将之取变分后，我们有

$$
\delta S = -m\_0 c \int\_a^b \delta \sqrt{ -\sum\_{i=1}^4 (dx\_i)^2 }
$$

$$
\= -m\_0 c \int\_a^b \frac{(-1) \sum\_{i=1}^4 2 dx\_i, \delta(dx\_i)}{2 \sqrt{ -\sum\_{i=1}^4 (dx\_i)^2 }} = m\_0 c \int\_a^b \frac{ \sum\_{i=1}^4 dx\_i, d(\delta x\_i) }{ \sqrt{ -\sum\_{i=1}^4 (dx\_i)^2 } }
$$

$$
\= m\_0 \sum\_{i=1}^4 \frac{dx\_i}{ \sqrt{ -\sum\_{i=1}^4 (dx\_i)^2 } } \delta x\_i \bigg|*a^b - m\_0 c \int\_a^b \sum*{i=1}^4 d \left( \frac{dx\_i}{ \sqrt{ -\sum\_{i=1}^4 (dx\_i)^2 } } \right) \delta x\_i
$$

$$
\= m\_0 \sum\_{i=1}^4 \frac{dx\_i}{ \sqrt{ -\frac{1}{c^2} \sum\_{i=1}^4 (dx\_i)^2 } } \delta x\_i \bigg|*a^b - m\_0 \int\_a^b \sum*{i=1}^4 d \left( \frac{dx\_i}{ \sqrt{ -\frac{1}{c^2} \sum\_{i=1}^4 (dx\_i)^2 } } \right) \delta x\_i
$$

$$
\= \sum\_{i=1}^4 \left( m\_0 \frac{dx\_i}{d\tau} \right) \delta x\_i \bigg|*a^b - \int\_a^b \sum*{i=1}^4 d \left( m\_0 \frac{dx\_i}{d\tau} \right) \delta x\_i.
$$

分别令

$$
\frac{dx\_i}{d\tau} = u\_i, \quad m\_0 \frac{dx\_i}{d\tau} = p\_i,
$$

为四维速度和动量。对于粒子的真实运动，作用量应该取极值。因此，我们有

$$
\delta S = \sum\_{i=1}^4 (m\_0 u\_i) \delta x\_i \bigg|*a^b - \int\_a^b \sum*{i=1}^4 d(m\_0 u\_i) \delta x\_i = \sum\_{i=1}^4 p\_i \delta x\_i \bigg|*a^b - \sum*{i=1}^4 \left( \int\_a^b \frac{dp\_i}{d\tau} d\tau \right) \delta x\_i = 0.
$$

由于 $(\delta x\_i)\_a = (\delta x\_i)\_b = 0$，故上式中的第一项为零。因此，

$$
\delta S = - \sum\_{i=1}^4 \left( \int\_a^b \frac{dp\_i}{d\tau} d\tau \right) \delta x\_i = 0.
$$

成立。又由于 $\delta x\_i$ 是彼此独立的，故我们进一步有

$$
\int\_a^b \frac{dp\_i}{d\tau} d\tau = 0.
$$

考虑到出发时的初始点 $a$ 和最后到达的终止点 $b$ 的任意性，则被积函数本身必须为零，即

$$
\frac{dp\_i}{d\tau} = \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}} \frac{d}{dt} \left( \frac{m\_0 v\_i}{\sqrt{1 - \frac{v^2}{c^2}}} \right) = 0,
$$

或是

$$
\frac{d}{dt} \left( \frac{m\_0 v\_i}{\sqrt{1 - \frac{v^2}{c^2}}} \right) = 0.
$$

这就是我们已经熟悉的自由粒子运动满足的牛顿方程。

## Part 2 粒子与电磁场相互作用

接下来，我们看看如何用拉格朗日形式来描述一个带电粒子和外加电磁场之间的相互作用。我们将相应的作用量写作

$$
S = S\_\mathrm{m} + S\_\mathrm{mf} = -m\_0 c^2 \int\_a^b d\tau + S\_\mathrm{mf}.
$$

这里，“m”为 matter(物质)的第一个字母，而“f”为 field(场)的第一个字母。因此，$S\_\mathrm{m}$ 为带电粒子的作用量，而 $S\_\mathrm{mf}$ 表示粒子和外场相互作用的作用量。现在的问题是如何决定后者。

我们已经得知，电磁场可以用矢势和标势来描述。因此，我们引入四维势，其分量为 $A\_1(x, y, z, t), A\_2(x, y, z, t), A\_3(x, y, z, t)$ 和 $A\_4(x, y, z, t)$。我们要求它们在洛伦兹变换下同四维坐标 $x\_1 = x, x\_2 = y, x\_3 = z$ 和 $x\_4 = i c t$ 一样地变换。在此要求下，下面的积分

$$
I = \int\_a^b (A\_1(x, y, z, t) dx\_1 + A\_2(x, y, z, t) dx\_2 + A\_3(x, y, z, t) dx\_3 + A\_4(x, y, z, t) dx\_4)
$$

显然是一个相对论不变量（即在洛伦兹变换下不变的量）。因此，我们可以将相互作用量 $S\_\mathrm{mf}$ 写作

$$
S\_\mathrm{mf} = \beta \int\_a^b (A\_1(x, y, z, t) dx\_1 + A\_2(x, y, z, t) dx\_2 + A\_3(x, y, z, t) dx\_3 + A\_4(x, y, z, t) dx\_4).
$$

这里，$\beta$ 是一个待定常数。同四维势的分量 $A\_1(x, y, z, t), A\_2(x, y, z, t), A\_3(x, y, z, t)$ 和 $A\_4(x, y, z, t)$ 一起，我们需要对总的作用量求变分后再利用最小作用量原理重新推导出带电粒子在外加电磁场中满足的运动方程后对之加以确定。

我们将看到，$A\_1(x, y, z, t)$, $A\_2(x, y, z, t)$ 和 $A\_3(x, y, z, t)$ 恰好是电磁场的矢势分量 $A\_x(x, y, z, t)$, $A\_y(x, y, z, t)$ 和 $A\_z(x, y, z, t)$，而 $A\_4(x, y, z, t) = i \Phi(x, y, z, t)/c$。这里，$\Phi(x, y, z, t)$ 为电磁场的标量势，而 $c$ 为真空中的光速。

现在，我们将总的作用量 $S$ 对于坐标 $x\_i$ 取变分，并得到

$$
\begin{aligned}
\delta S &= \delta S\_\mathrm{m} + \delta S\_\mathrm{mf} \\\\
&= \delta \left( -m\_0 c^2 \int\_a^b d\tau \right) + \delta \left( \beta \int\_a^b (A\_1 dx\_1 + A\_2 dx\_2 + A\_3 dx\_3 + A\_4 dx\_4) \right)\\\\
&= -m\_0 c, \delta \left( \int\_a^b \sqrt{ -\sum\_{i=1}^4 (dx\_i)^2 } \right) + \beta, \delta \left( \int\_a^b (A\_1 dx\_1 + A\_2 dx\_2 + A\_3 dx\_3 + A\_4 dx\_4) \right)\\\\
&= m\_0 c \int\_a^b \left( \sum\_{i=1}^4 \frac{dx\_i \delta(dx\_i)}{ \sqrt{ -\sum\_{i=1}^4 (dx\_i)^2 } } \right) + \beta \int\_a^b \left( \sum\_{i=1}^4 (\delta A\_i) dx\_i + \sum\_{i=1}^4 A\_i (\delta dx\_i) \right)\\\\
&= m\_0 \sum\_{i=1}^4 \int\_a^b \frac{dx\_i \delta(dx\_i)}{ \frac{1}{c} \sqrt{ -\sum\_{i=1}^4 (dx\_i)^2 } } + \beta \int\_a^b \left( \sum\_{i=1}^4 (\delta A\_i) dx\_i + \sum\_{i=1}^4 A\_i, d(\delta x\_i) \right)\\\\
&= m\_0 \sum\_{i=1}^4 \int\_a^b u\_i, d(\delta x\_i) + \beta \sum\_{i=1}^4 \int\_a^b \left( \sum\_{k=1}^4 \frac{\partial A\_i}{\partial x\_k} dx\_k \right) dx\_i + \beta \sum\_{i=1}^4 \int\_a^b A\_i, d(\delta x\_i).
\end{aligned}
$$

利用分步积分和条件 $(\delta x\_i)\_a = (\delta x\_i)\_b = 0$，我们进一步得到

$$
\begin{aligned}
\delta S &= \delta S\_\mathrm{m} + \delta S\_\mathrm{mf} \\\\
&= -m\_0 \sum\_{i=1}^4 \int\_a^b d u\_i, \delta x\_i + \beta \sum\_{i=1}^4 \sum\_{k=1}^4 \int\_a^b \frac{\partial A\_i}{\partial x\_k} dx\_i \delta x\_k - \beta \sum\_{i=1}^4 \int\_a^b d A\_i, \delta x\_i \\\\
&= -m\_0 \sum\_{i=1}^4 \int\_a^b d u\_i, \delta x\_i + \beta \sum\_{i=1}^4 \sum\_{k=1}^4 \int\_a^b \frac{\partial A\_k}{\partial x\_i} dx\_k \delta x\_i - \beta \sum\_{i=1}^4 \int\_a^b \left( \sum\_{k=1}^4 \frac{\partial A\_i}{\partial x\_k} dx\_k \right) \delta x\_i \\\\
&= \sum\_{i=1}^4 \left\[ \int\_a^b \left( -m\_0, d u\_i + \beta \sum\_{k=1}^4 \frac{\partial A\_k}{\partial x\_i} dx\_k - \beta \sum\_{k=1}^4 \frac{\partial A\_i}{\partial x\_k} dx\_k \right) \right] \delta x\_i \\\\
&= \sum\_{i=1}^4 \left\[ \int\_a^b \left( -m\_0 \frac{d u\_i}{d\tau} + \beta \sum\_{k=1}^4 \frac{\partial A\_k}{\partial x\_i} \frac{dx\_k}{d\tau} - \beta \sum\_{k=1}^4 \frac{\partial A\_i}{\partial x\_k} \frac{dx\_k}{d\tau} \right) d\tau \right] \delta x\_i.
\end{aligned}
$$

对于粒子真实的运动，$S$ 应取极值。因此，我们有

$$
\delta S = \sum\_{i=1}^4 \left\[ \int\_a^b \left( -m\_0 \frac{d u\_i}{d\tau} + \beta \sum\_{k=1}^4 \frac{\partial A\_k}{\partial x\_i} \frac{dx\_k}{d\tau} - \beta \sum\_{k=1}^4 \frac{\partial A\_i}{\partial x\_k} \frac{dx\_k}{d\tau} \right) d\tau \right] \delta x\_i = 0.
$$

考虑到 $\delta x\_1, \delta x\_2, \delta x\_3$ 和 $\delta x\_4$ 是彼此独立的，故

$$
\int\_a^b \left( -m\_0 \frac{d u\_i}{d\tau} + \beta \sum\_{k=1}^4 \frac{\partial A\_k}{\partial x\_i} \frac{dx\_k}{d\tau} - \beta \sum\_{k=1}^4 \frac{\partial A\_i}{\partial x\_k} \frac{dx\_k}{d\tau} \right) d\tau = 0
$$

必须成立。又由于初始点 $a$ 和终止点 $b$ 的任意性，则被积函数本身必须为零，即

$$
-m\_0 \frac{d u\_i}{d\tau} + \beta \sum\_{k=1}^4 \frac{\partial A\_k}{\partial x\_i} \frac{dx\_k}{d\tau} - \beta \sum\_{k=1}^4 \frac{\partial A\_i}{\partial x\_k} \frac{dx\_k}{d\tau} = 0,
$$

或是

$$
m\_0 \frac{d u\_i}{d\tau} = \beta \sum\_{k=1}^4 \left( \frac{\partial A\_k}{\partial x\_i} - \frac{\partial A\_i}{\partial x\_k} \right) u\_k.
$$

若我们令

$$
F\_{ik}(x\_1, x\_2, x\_3, x\_4) = \frac{\partial A\_k(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} - \frac{\partial A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_k},
$$

则上式又可被写作

$$
m\_0 \frac{d u\_i}{d\tau} = \beta \sum\_{k=1}^4 F\_{ik}(x\_1, x\_2, x\_3, x\_4) u\_k.
$$

根据定义，矩阵元 $F\_{ik}$ 是反对称的，即

$$
F\_{ik}(x\_1, x\_2, x\_3, x\_4) = -F\_{ki}(x\_1, x\_2, x\_3, x\_4)
$$

成立。因此，对角元 $F\_{11}, F\_{22}, F\_{33}$ 和 $F\_{44}$ 皆为零。例如，当 $i = 1$ 时，运动方程
$$
m\_0 \frac{d u\_i}{d\tau} = \beta \sum\_{k=1}^4 F\_{ik}(x\_1, x\_2, x\_3, x\_4) u\_k.
$$
可以写作

$$
m\_0 \frac{d u\_1}{d\tau} = \beta F\_{12}(x\_1, x\_2, x\_3, x\_4) u\_2 + \beta F\_{13}(x\_1, x\_2, x\_3, x\_4) u\_3 + \beta F\_{14}(x\_1, x\_2, x\_3, x\_4) u\_4.
$$

另一方面，根据定义，我们有

$$
\begin{aligned}
F\_{12}(x\_1, x\_2, x\_3, x\_4) &= \frac{\partial A\_2(x\_1, x\_2, x\_3, x\_4)}{\partial x\_1} - \frac{\partial A\_1(x\_1, x\_2, x\_3, x\_4)}{\partial x\_2} \\\\
&= \frac{\partial A\_y(x\_1, x\_2, x\_3, x\_4)}{\partial x} - \frac{\partial A\_x(x\_1, x\_2, x\_3, x\_4)}{\partial y} = (\mathrm{rot}\mathbf{A}(x\_1, x\_2, x\_3, x\_4))*z, \\\\
F*{13}(x\_1, x\_2, x\_3, x\_4) &= \frac{\partial A\_3(x\_1, x\_2, x\_3, x\_4)}{\partial x\_1} - \frac{\partial A\_1(x\_1, x\_2, x\_3, x\_4)}{\partial x\_3} \\\\
&= \frac{\partial A\_z(x\_1, x\_2, x\_3, x\_4)}{\partial x} - \frac{\partial A\_x(x\_1, x\_2, x\_3, x\_4)}{\partial z} = -(\mathrm{rot}\mathbf{A}(x\_1, x\_2, x\_3, x\_4))*y, \\\\
F*{14}(x\_1, x\_2, x\_3, x\_4) &= \frac{\partial A\_4(x\_1, x\_2, x\_3, x\_4)}{\partial x\_1} - \frac{\partial A\_1(x\_1, x\_2, x\_3, x\_4)}{\partial x\_4} \\\\
&= \frac{\partial A\_4(x\_1, x\_2, x\_3, x\_4)}{\partial x} + i \frac{\partial A\_x(x\_1, x\_2, x\_3, x\_4)}{c, \partial t} \\\\
&= \frac{\partial A\_4(x\_1, x\_2, x\_3, x\_4)}{\partial x} + i \frac{1}{c} \dot{A}\_x(x\_1, x\_2, x\_3, x\_4).
\end{aligned}
$$

除此之外，我们还有

$$
d\tau = \sqrt{1 - \frac{v^2}{c^2}}, dt,
$$

以及

$$
u\_1 = \frac{v\_x}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad u\_2 = \frac{v\_y}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad u\_3 = \frac{v\_z}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad u\_4 = \frac{i c}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$

将这些表达式代入
$$
m\_0 \frac{d u\_1}{d\tau} = \beta F\_{12}(x\_1, x\_2, x\_3, x\_4) u\_2 + \beta F\_{13}(x\_1, x\_2, x\_3, x\_4) u\_3 + \beta F\_{14}(x\_1, x\_2, x\_3, x\_4) u\_4.
$$
式后，我们有

$$
\begin{aligned}
&\frac{d}{\sqrt{1 - \frac{v^2}{c^2}}, dt} \left( \frac{m\_0 v\_x}{\sqrt{1 - \frac{v^2}{c^2}}} \right) = \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}}, \frac{d p\_x}{dt} \\\\
&= \beta (\mathrm{rot}\mathbf{A}(x\_1, x\_2, x\_3, x\_4))\_z \frac{v\_y}{\sqrt{1 - \frac{v^2}{c^2}}} - \beta (\mathrm{rot}\mathbf{A}(x\_1, x\_2, x\_3, x\_4))\_y \frac{v\_z}{\sqrt{1 - \frac{v^2}{c^2}}} \\\\
&+ \beta \left( \frac{\partial A\_4(x\_1, x\_2, x\_3, x\_4)}{\partial x} + i \frac{1}{c} \frac{\partial A\_x(x\_1, x\_2, x\_3, x\_4)}{\partial t} \right) \frac{i c}{\sqrt{1 - \frac{v^2}{c^2}}} \\\\
&= \frac{\beta}{\sqrt{1 - \frac{v^2}{c^2}}} \left( \[\mathbf{v} \times \mathrm{rot}\mathbf{A}]\_x + i c \frac{\partial A\_4(x\_1, x\_2, x\_3, x\_4)}{\partial x} - \frac{\partial A\_x(x\_1, x\_2, x\_3, x\_4)}{\partial t} \right).
\end{aligned}
$$

整理后，我们得到

$$
\frac{d p\_x}{dt} = \beta \left( \[\mathbf{v} \times \mathrm{rot}\mathbf{A}(x\_1, x\_2, x\_3, x\_4)]\_x + i c \frac{\partial A\_4(x\_1, x\_2, x\_3, x\_4)}{\partial x} - \frac{\partial A\_x(x\_1, x\_2, x\_3, x\_4)}{\partial t} \right).
$$

若我们取 $\beta$ 为带电粒子的电荷 $q$，$A\_x(x\_1, x\_2, x\_3, x\_4), A\_y(x\_1, x\_2, x\_3, x\_4)$ 和 $A\_z(x\_1, x\_2, x\_3, x\_4)$ 为外加电磁场的矢势的三个分量，以及 $A\_4(x\_1, x\_2, x\_3, x\_4) = i \Phi(x\_1, x\_2, x\_3, x\_4)/c$（这里，$\Phi(x\_1, x\_2, x\_3, x\_4)$ 为外加电磁场的标势），那么上式可进一步写作

$$
\begin{aligned}
\frac{d p\_x}{dt} &= q(\mathbf{v} \times \mathbf{B})\_x + q \left( i c \cdot \frac{1}{c} \frac{\partial \Phi(x\_1, x\_2, x\_3, x\_4)}{\partial x} - \frac{\partial A\_x(x\_1, x\_2, x\_3, x\_4)}{\partial t} \right) \\\\
&= q(\mathbf{v} \times \mathbf{B})\_x + q \left( -(\nabla \Phi(x\_1, x\_2, x\_3, x\_4))\_x - \frac{\partial A\_x(x\_1, x\_2, x\_3, x\_4)}{\partial t} \right) \\\\
&= q(\mathbf{v} \times \mathbf{B}(x\_1, x\_2, x\_3, x\_4))\_x + q E\_x(x\_1, x\_2, x\_3, x\_4).
\end{aligned}
$$

同理，对于 $i = 2$ 和 $i = 3$，我们也可得到

$$
\frac{d p\_y}{dt} = q(\mathbf{v} \times \mathbf{B}(x\_1, x\_2, x\_3, x\_4))\_y + q E\_y(x\_1, x\_2, x\_3, x\_4),
$$

和

$$
\frac{d p\_z}{dt} = q(\mathbf{v} \times \mathbf{B}(x\_1, x\_2, x\_3, x\_4))\_z + q E\_z(x\_1, x\_2, x\_3, x\_4),
$$

即带电粒子在电磁场中运动所满足的牛顿方程

$$
\frac{d \mathbf{p}}{dt} = q \mathbf{v} \times \mathbf{B}(x\_1, x\_2, x\_3, x\_4) + q \mathbf{E}(x\_1, x\_2, x\_3, \\
$$

的分量表达式。

现在，我们可以将作用量 $S$ 明确写作

$$
\begin{aligned}
S &= S\_\mathrm{m} + S\_\mathrm{mf} = -m\_0 c^2 \int\_a^b d\tau + q \int\_a^b (A\_1 dx\_1 + A\_2 dx\_2 + A\_3 dx\_3 + A\_4 dx\_4) \\\\
&= -m\_0 c^2 \int\_a^b d\tau + q \int\_a^b \left( A\_1 \frac{dx\_1}{d\tau} + A\_2 \frac{dx\_2}{d\tau} + A\_3 \frac{dx\_3}{d\tau} + A\_4 \frac{dx\_4}{d\tau} \right) d\tau \\\\
&= \int\_a^b \left( -m\_0 c^2 + q A\_1 u\_1 + q A\_2 u\_2 + q A\_3 u\_3 + q A\_4 u\_4 \right) d\tau \\\\
&= \int\_{t\_a}^{t\_b} \left( -m\_0 c^2 + q A\_x \frac{v\_x}{\sqrt{1 - \frac{v^2}{c^2}}} + q A\_y \frac{v\_y}{\sqrt{1 - \frac{v^2}{c^2}}} + q A\_z \frac{v\_z}{\sqrt{1 - \frac{v^2}{c^2}}} + q \frac{i \Phi}{c} \frac{i c}{\sqrt{1 - \frac{v^2}{c^2}}} \right) \sqrt{1 - \frac{v^2}{c^2}}, dt \\\\
&= \int\_{t\_a}^{t\_b} \left( -m\_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A}(x\_1, x\_2, x\_3, x\_4) \cdot \mathbf{v} - q \Phi(x\_1, x\_2, x\_3, x\_4) \right) dt,
\end{aligned}
$$

即带电粒子在电磁场中运动的拉格朗日量为

$$
L = -m\_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A}(x\_1, x\_2, x\_3, x\_4) \cdot \mathbf{v} - q \Phi(x\_1, x\_2, x\_3, x\_4).
$$

最后，我们再来看一下 $i = 4$ 的情况。我们有

$$
m\_0 \frac{d u\_4}{d\tau} = q F\_{41}(x\_1, x\_2, x\_3, x\_4) u\_1 + q F\_{42}(x\_1, x\_2, x\_3, x\_4) u\_2 + q F\_{43}(x\_1, x\_2, x\_3, x\_4) u\_3.
$$

这里，

$$
\begin{aligned}
F\_{41}(x\_1, x\_2, x\_3, x\_4) &= \frac{\partial A\_1(x\_1, x\_2, x\_3, x\_4)}{\partial x\_4} - \frac{\partial A\_4(x\_1, x\_2, x\_3, x\_4)}{\partial x\_1} \\\\
&= \frac{\partial A\_x(x\_1, x\_2, x\_3, x\_4)}{\partial (i c t)} - \frac{\partial \left( i \frac{\Phi(x\_1, x\_2, x\_3, x\_4)}{c} \right)}{\partial x} = \frac{i}{c} \left( -\frac{\partial A\_x}{\partial t} - \frac{\partial \Phi}{\partial x} \right) \\\\
&= \frac{i}{c} E\_x(x\_1, x\_2, x\_3, x\_4), \\\\
F\_{42}(x\_1, x\_2, x\_3, x\_4) &= \frac{\partial A\_2(x\_1, x\_2, x\_3, x\_4)}{\partial x\_4} - \frac{\partial A\_4(x\_1, x\_2, x\_3, x\_4)}{\partial x\_2} \\\\
&= \frac{i}{c} E\_y(x\_1, x\_2, x\_3, x\_4), \\\\
F\_{43}(x\_1, x\_2, x\_3, x\_4) &= \frac{\partial A\_3(x\_1, x\_2, x\_3, x\_4)}{\partial x\_4} - \frac{\partial A\_4(x\_1, x\_2, x\_3, x\_4)}{\partial x\_3} \\\\
&= \frac{i}{c} E\_z(x\_1, x\_2, x\_3, x\_4).
\end{aligned}
$$

将这些结果代入上面的方程后，我们得到

$$
m\_0 \frac{d \left( \frac{i c}{\sqrt{1 - \frac{v^2}{c^2}}} \right)}{\sqrt{1 - \frac{v^2}{c^2}}, dt} = q \left( \frac{i}{c} E\_x \right) \frac{v\_x}{\sqrt{1 - \frac{v^2}{c^2}}} + q \left( \frac{i}{c} E\_y \right) \frac{v\_y}{\sqrt{1 - \frac{v^2}{c^2}}} + q \left( \frac{i}{c} E\_z \right) \frac{v\_z}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$

简化整理后我们有

$$
\frac{d}{dt} \left( \frac{m\_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}} \right) = q \mathbf{E}(x\_1, x\_2, x\_3, x\_4) \cdot \mathbf{v},
$$

即单位时间内粒子能量的改变等于外加电磁场作功的功率。这一结论显然是合理的。
