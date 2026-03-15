---
title: Chapter 5 带电粒子的作用量
permalink: /electrodynamics/electrodynamics-5/
createTime: 2026/03/14 17:03:20
---

前面我们已经讲述了电动力学的发展简史，主要概念和基本方程式。现在开始我们将用所谓拉格朗日量的形式把它们复述一遍。这样做的目的，不仅是为了将电动力学用一种更为紧凑和明晰的形式表达出来，也是由于这一形式有助于我们加深对于电动力学和狭义相对论之间的关系的理解。

同时，更为重要的是，早在 1925 年，狄拉克 (Paul Dirac) 即已发现，基于拉格朗日形式的所谓正则量子化方法 (canonical quantization)，可以使得人们从经典物理的牛顿方程出发，直接写出一个体系所满足的量子力学的薛定谔方程 (Schrödinger equation)。这就使得拉格朗日形式的表述成为研究量子力学的不可或缺的工具。

## Part 1 自由粒子的作用量

拉格朗日表述的出发点是所谓最小作用量原理。这一原理告诉我们，对于每一个力学体系，有一个叫作“作用量 (action)”的积分 $S$ 存在。对于体系的实际运动过程，这个量应该取极值，即它的变分 $\delta S$ 为零。首先，我们看一个自由粒子的作用量。按照爱因斯坦的相对性原理，它应该与我们所选取的惯性参照系无关。也就是说，在洛伦兹变换下，它应该是一个不变量。一个简单明了的选择是

$$
S = \int_a^b \alpha\, d\tau.
$$

这里，$\alpha$ 为一个待定常数，$a$ 和 $b$ 为自由粒子在一段时间间隔内运动的出发时的初始时空点和最后到达的终止时空点。$\tau$ 为粒子的原时 (或固有时)。至于这样选取 $S$ 是否合适以及如何确定常数 $\alpha$，则要由可否利用最小作用量原理推导出我们先前已知的结果来决定。

我们已经知道，对于实验室系而言，作用量 $S$ 可以重新写作

$$
S = \int_{t_a}^{t_b} \alpha \sqrt{1 - \frac{v^2}{c^2}}\, dt.
$$

这里，$t$ 为实验室参照系中的时间，$c$ 为真空中的光速，而 $v$ 为自由粒子相对于实验室参照系的速率。在文献中，被积函数

$$
L(x, y, z, \dot{x}, \dot{y}, \dot{z}) = \alpha \sqrt{1 - \frac{v^2}{c^2}} = \alpha \sqrt{1 - \frac{\dot{x}^2 + \dot{y}^2 + \dot{z}^2}{c^2}}
$$

称为粒子在实验室参照系中的拉格朗日量 (lagrangian)。

接下来，我们要决定常数 $\alpha$。根据广义动量的定义，我们知道

$$
p_x = \frac{\partial L}{\partial v_x}, \quad p_y = \frac{\partial L}{\partial v_y}, \quad p_z = \frac{\partial L}{\partial v_z}
$$

成立。以 $p_x$ 为例，我们有

$$
p_x = \frac{\partial L}{\partial v_x} = \frac{\partial}{\partial \dot{x}} \left( \alpha \sqrt{1 - \frac{\dot{x}^2 + \dot{y}^2 + \dot{z}^2}{c^2}} \right) = \frac{\alpha}{2} \frac{1}{\sqrt{1 - \frac{\dot{x}^2 + \dot{y}^2 + \dot{z}^2}{c^2}}} \left( -\frac{2\dot{x}}{c^2} \right) = \frac{-\alpha v_x}{c^2 \sqrt{1 - \frac{v^2}{c^2}}}.
$$

另一方面，我们已知

$$
p_x = \frac{m_0 v_x}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$

比较以上两式，我们得到 $\alpha = -m_0 c^2$。因此，粒子的作用量 $S$ 可以被重新写作

$$
S = -m_0 c^2 \int_{t_a}^{t_b} \sqrt{1 - \frac{v^2}{c^2}}\, dt.
$$

有了粒子的拉格朗日量之后，我们即可写出其哈密顿量 $H$。我们有

$$
\begin{aligned}
H &= p_x \dot{x} + p_y \dot{y} + p_z \dot{z} - L = \frac{m_0 v^2}{\sqrt{1 - \frac{v^2}{c^2}}} + m_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} \\\\
&= \frac{m_0}{\sqrt{1 - \frac{v^2}{c^2}}} \left[ v^2 + c^2 \left( 1 - \frac{v^2}{c^2} \right) \right] = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}}.
\end{aligned}
$$

我们看到，这恰恰是粒子的能量。

现在，我们要利用最小作用量原理推导自由粒子的运动方程。首先，我们将粒子的作用量改写作

$$
\begin{aligned}
S &= -m_0 c^2 \int_a^b d\tau = -m_0 c \int_a^b \sqrt{c^2 (dt)^2 - (dx)^2 - (dy)^2 - (dz)^2} \\\\
&= -m_0 c \int_a^b \sqrt{ -\sum_{i=1}^4 (dx_i)^2 }.
\end{aligned}
$$

显然，这一表达式在洛伦兹变换下是不变的。将之取变分后，我们有

$$
\delta S = -m_0 c \int_a^b \delta \sqrt{ -\sum_{i=1}^4 (dx_i)^2 }
$$

$$
= -m_0 c \int_a^b \frac{(-1) \sum_{i=1}^4 2 dx_i\, \delta(dx_i)}{2 \sqrt{ -\sum_{i=1}^4 (dx_i)^2 }} = m_0 c \int_a^b \frac{ \sum_{i=1}^4 dx_i\, d(\delta x_i) }{ \sqrt{ -\sum_{i=1}^4 (dx_i)^2 } }
$$

$$
= m_0 \sum_{i=1}^4 \frac{dx_i}{ \sqrt{ -\sum_{i=1}^4 (dx_i)^2 } } \delta x_i \bigg|_a^b - m_0 c \int_a^b \sum_{i=1}^4 d \left( \frac{dx_i}{ \sqrt{ -\sum_{i=1}^4 (dx_i)^2 } } \right) \delta x_i
$$

$$
= m_0 \sum_{i=1}^4 \frac{dx_i}{ \sqrt{ -\frac{1}{c^2} \sum_{i=1}^4 (dx_i)^2 } } \delta x_i \bigg|_a^b - m_0 \int_a^b \sum_{i=1}^4 d \left( \frac{dx_i}{ \sqrt{ -\frac{1}{c^2} \sum_{i=1}^4 (dx_i)^2 } } \right) \delta x_i
$$

$$
= \sum_{i=1}^4 \left( m_0 \frac{dx_i}{d\tau} \right) \delta x_i \bigg|_a^b - \int_a^b \sum_{i=1}^4 d \left( m_0 \frac{dx_i}{d\tau} \right) \delta x_i.
$$

分别令

$$
\frac{dx_i}{d\tau} = u_i, \quad m_0 \frac{dx_i}{d\tau} = p_i,
$$

为四维速度和动量。对于粒子的真实运动，作用量应该取极值。因此，我们有

$$
\delta S = \sum_{i=1}^4 (m_0 u_i) \delta x_i \bigg|_a^b - \int_a^b \sum_{i=1}^4 d(m_0 u_i) \delta x_i = \sum_{i=1}^4 p_i \delta x_i \bigg|_a^b - \sum_{i=1}^4 \left( \int_a^b \frac{dp_i}{d\tau} d\tau \right) \delta x_i = 0.
$$

由于 $(\delta x_i)_a = (\delta x_i)_b = 0$，故上式中的第一项为零。因此，

$$
\delta S = - \sum_{i=1}^4 \left( \int_a^b \frac{dp_i}{d\tau} d\tau \right) \delta x_i = 0.
$$

成立。又由于 $\delta x_i$ 是彼此独立的，故我们进一步有

$$
\int_a^b \frac{dp_i}{d\tau} d\tau = 0.
$$

考虑到出发时的初始点 $a$ 和最后到达的终止点 $b$ 的任意性，则被积函数本身必须为零，即

$$
\frac{dp_i}{d\tau} = \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}} \frac{d}{dt} \left( \frac{m_0 v_i}{\sqrt{1 - \frac{v^2}{c^2}}} \right) = 0,
$$

或是

$$
\frac{d}{dt} \left( \frac{m_0 v_i}{\sqrt{1 - \frac{v^2}{c^2}}} \right) = 0.
$$

这就是我们已经熟悉的自由粒子运动满足的牛顿方程。

## Part 2 粒子与电磁场相互作用

接下来，我们看看如何用拉格朗日形式来描述一个带电粒子和外加电磁场之间的相互作用。我们将相应的作用量写作

$$
S = S_\mathrm{m} + S_\mathrm{mf} = -m_0 c^2 \int_a^b d\tau + S_\mathrm{mf}.
$$

这里，“m”为 matter(物质)的第一个字母，而“f”为 field(场)的第一个字母。因此，$S_\mathrm{m}$ 为带电粒子的作用量，而 $S_\mathrm{mf}$ 表示粒子和外场相互作用的作用量。现在的问题是如何决定后者。

我们已经得知，电磁场可以用矢势和标势来描述。因此，我们引入四维势，其分量为 $A_1(x, y, z, t), A_2(x, y, z, t), A_3(x, y, z, t)$ 和 $A_4(x, y, z, t)$。我们要求它们在洛伦兹变换下同四维坐标 $x_1 = x, x_2 = y, x_3 = z$ 和 $x_4 = i c t$ 一样地变换。在此要求下，下面的积分

$$
I = \int_a^b (A_1(x, y, z, t) dx_1 + A_2(x, y, z, t) dx_2 + A_3(x, y, z, t) dx_3 + A_4(x, y, z, t) dx_4)
$$

显然是一个相对论不变量（即在洛伦兹变换下不变的量）。因此，我们可以将相互作用量 $S_\mathrm{mf}$ 写作

$$
S_\mathrm{mf} = \beta \int_a^b (A_1(x, y, z, t) dx_1 + A_2(x, y, z, t) dx_2 + A_3(x, y, z, t) dx_3 + A_4(x, y, z, t) dx_4).
$$

这里，$\beta$ 是一个待定常数。同四维势的分量 $A_1(x, y, z, t), A_2(x, y, z, t), A_3(x, y, z, t)$ 和 $A_4(x, y, z, t)$ 一起，我们需要对总的作用量求变分后再利用最小作用量原理重新推导出带电粒子在外加电磁场中满足的运动方程后对之加以确定。

我们将看到，$A_1(x, y, z, t)$, $A_2(x, y, z, t)$ 和 $A_3(x, y, z, t)$ 恰好是电磁场的矢势分量 $A_x(x, y, z, t)$, $A_y(x, y, z, t)$ 和 $A_z(x, y, z, t)$，而 $A_4(x, y, z, t) = i \Phi(x, y, z, t)/c$。这里，$\Phi(x, y, z, t)$ 为电磁场的标量势，而 $c$ 为真空中的光速。

现在，我们将总的作用量 $S$ 对于坐标 $x_i$ 取变分，并得到

$$
\begin{aligned}
\delta S &= \delta S_\mathrm{m} + \delta S_\mathrm{mf} \\\\
&= \delta \left( -m_0 c^2 \int_a^b d\tau \right) + \delta \left( \beta \int_a^b (A_1 dx_1 + A_2 dx_2 + A_3 dx_3 + A_4 dx_4) \right)\\\\
&= -m_0 c\, \delta \left( \int_a^b \sqrt{ -\sum_{i=1}^4 (dx_i)^2 } \right) + \beta\, \delta \left( \int_a^b (A_1 dx_1 + A_2 dx_2 + A_3 dx_3 + A_4 dx_4) \right)\\\\
&= m_0 c \int_a^b \left( \sum_{i=1}^4 \frac{dx_i \delta(dx_i)}{ \sqrt{ -\sum_{i=1}^4 (dx_i)^2 } } \right) + \beta \int_a^b \left( \sum_{i=1}^4 (\delta A_i) dx_i + \sum_{i=1}^4 A_i (\delta dx_i) \right)\\\\
&= m_0 \sum_{i=1}^4 \int_a^b \frac{dx_i \delta(dx_i)}{ \frac{1}{c} \sqrt{ -\sum_{i=1}^4 (dx_i)^2 } } + \beta \int_a^b \left( \sum_{i=1}^4 (\delta A_i) dx_i + \sum_{i=1}^4 A_i\, d(\delta x_i) \right)\\\\
&= m_0 \sum_{i=1}^4 \int_a^b u_i\, d(\delta x_i) + \beta \sum_{i=1}^4 \int_a^b \left( \sum_{k=1}^4 \frac{\partial A_i}{\partial x_k} dx_k \right) dx_i + \beta \sum_{i=1}^4 \int_a^b A_i\, d(\delta x_i).
\end{aligned}
$$

利用分步积分和条件 $(\delta x_i)_a = (\delta x_i)_b = 0$，我们进一步得到

$$
\begin{aligned}
\delta S &= \delta S_\mathrm{m} + \delta S_\mathrm{mf} \\\\
&= -m_0 \sum_{i=1}^4 \int_a^b d u_i\, \delta x_i + \beta \sum_{i=1}^4 \sum_{k=1}^4 \int_a^b \frac{\partial A_i}{\partial x_k} dx_i \delta x_k - \beta \sum_{i=1}^4 \int_a^b d A_i\, \delta x_i \\\\
&= -m_0 \sum_{i=1}^4 \int_a^b d u_i\, \delta x_i + \beta \sum_{i=1}^4 \sum_{k=1}^4 \int_a^b \frac{\partial A_k}{\partial x_i} dx_k \delta x_i - \beta \sum_{i=1}^4 \int_a^b \left( \sum_{k=1}^4 \frac{\partial A_i}{\partial x_k} dx_k \right) \delta x_i \\\\
&= \sum_{i=1}^4 \left[ \int_a^b \left( -m_0\, d u_i + \beta \sum_{k=1}^4 \frac{\partial A_k}{\partial x_i} dx_k - \beta \sum_{k=1}^4 \frac{\partial A_i}{\partial x_k} dx_k \right) \right] \delta x_i \\\\
&= \sum_{i=1}^4 \left[ \int_a^b \left( -m_0 \frac{d u_i}{d\tau} + \beta \sum_{k=1}^4 \frac{\partial A_k}{\partial x_i} \frac{dx_k}{d\tau} - \beta \sum_{k=1}^4 \frac{\partial A_i}{\partial x_k} \frac{dx_k}{d\tau} \right) d\tau \right] \delta x_i.
\end{aligned}
$$

对于粒子真实的运动，$S$ 应取极值。因此，我们有

$$
\delta S = \sum_{i=1}^4 \left[ \int_a^b \left( -m_0 \frac{d u_i}{d\tau} + \beta \sum_{k=1}^4 \frac{\partial A_k}{\partial x_i} \frac{dx_k}{d\tau} - \beta \sum_{k=1}^4 \frac{\partial A_i}{\partial x_k} \frac{dx_k}{d\tau} \right) d\tau \right] \delta x_i = 0.
$$

考虑到 $\delta x_1, \delta x_2, \delta x_3$ 和 $\delta x_4$ 是彼此独立的，故

$$
\int_a^b \left( -m_0 \frac{d u_i}{d\tau} + \beta \sum_{k=1}^4 \frac{\partial A_k}{\partial x_i} \frac{dx_k}{d\tau} - \beta \sum_{k=1}^4 \frac{\partial A_i}{\partial x_k} \frac{dx_k}{d\tau} \right) d\tau = 0
$$

必须成立。又由于初始点 $a$ 和终止点 $b$ 的任意性，则被积函数本身必须为零，即

$$
-m_0 \frac{d u_i}{d\tau} + \beta \sum_{k=1}^4 \frac{\partial A_k}{\partial x_i} \frac{dx_k}{d\tau} - \beta \sum_{k=1}^4 \frac{\partial A_i}{\partial x_k} \frac{dx_k}{d\tau} = 0,
$$

或是

$$
m_0 \frac{d u_i}{d\tau} = \beta \sum_{k=1}^4 \left( \frac{\partial A_k}{\partial x_i} - \frac{\partial A_i}{\partial x_k} \right) u_k.
$$

若我们令

$$
F_{ik}(x_1, x_2, x_3, x_4) = \frac{\partial A_k(x_1, x_2, x_3, x_4)}{\partial x_i} - \frac{\partial A_i(x_1, x_2, x_3, x_4)}{\partial x_k},
$$

则上式又可被写作

$$
m_0 \frac{d u_i}{d\tau} = \beta \sum_{k=1}^4 F_{ik}(x_1, x_2, x_3, x_4) u_k.
$$

根据定义，矩阵元 $F_{ik}$ 是反对称的，即

$$
F_{ik}(x_1, x_2, x_3, x_4) = -F_{ki}(x_1, x_2, x_3, x_4)
$$

成立。因此，对角元 $F_{11}, F_{22}, F_{33}$ 和 $F_{44}$ 皆为零。例如，当 $i = 1$ 时，运动方程
$$
m_0 \frac{d u_i}{d\tau} = \beta \sum_{k=1}^4 F_{ik}(x_1, x_2, x_3, x_4) u_k.
$$
可以写作

$$
m_0 \frac{d u_1}{d\tau} = \beta F_{12}(x_1, x_2, x_3, x_4) u_2 + \beta F_{13}(x_1, x_2, x_3, x_4) u_3 + \beta F_{14}(x_1, x_2, x_3, x_4) u_4.
$$

另一方面，根据定义，我们有

$$
\begin{aligned}
F_{12}(x_1, x_2, x_3, x_4) &= \frac{\partial A_2(x_1, x_2, x_3, x_4)}{\partial x_1} - \frac{\partial A_1(x_1, x_2, x_3, x_4)}{\partial x_2} \\\\
&= \frac{\partial A_y(x_1, x_2, x_3, x_4)}{\partial x} - \frac{\partial A_x(x_1, x_2, x_3, x_4)}{\partial y} = (\mathrm{rot}\mathbf{A}(x_1, x_2, x_3, x_4))_z, \\\\
F_{13}(x_1, x_2, x_3, x_4) &= \frac{\partial A_3(x_1, x_2, x_3, x_4)}{\partial x_1} - \frac{\partial A_1(x_1, x_2, x_3, x_4)}{\partial x_3} \\\\
&= \frac{\partial A_z(x_1, x_2, x_3, x_4)}{\partial x} - \frac{\partial A_x(x_1, x_2, x_3, x_4)}{\partial z} = -(\mathrm{rot}\mathbf{A}(x_1, x_2, x_3, x_4))_y, \\\\
F_{14}(x_1, x_2, x_3, x_4) &= \frac{\partial A_4(x_1, x_2, x_3, x_4)}{\partial x_1} - \frac{\partial A_1(x_1, x_2, x_3, x_4)}{\partial x_4} \\\\
&= \frac{\partial A_4(x_1, x_2, x_3, x_4)}{\partial x} + i \frac{\partial A_x(x_1, x_2, x_3, x_4)}{c\, \partial t} \\\\
&= \frac{\partial A_4(x_1, x_2, x_3, x_4)}{\partial x} + i \frac{1}{c} \dot{A}_x(x_1, x_2, x_3, x_4).
\end{aligned}
$$

除此之外，我们还有

$$
d\tau = \sqrt{1 - \frac{v^2}{c^2}}\, dt,
$$

以及

$$
u_1 = \frac{v_x}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad u_2 = \frac{v_y}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad u_3 = \frac{v_z}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad u_4 = \frac{i c}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$

将这些表达式代入
$$
m_0 \frac{d u_1}{d\tau} = \beta F_{12}(x_1, x_2, x_3, x_4) u_2 + \beta F_{13}(x_1, x_2, x_3, x_4) u_3 + \beta F_{14}(x_1, x_2, x_3, x_4) u_4.
$$
式后，我们有

$$
\begin{aligned}
&\frac{d}{\sqrt{1 - \frac{v^2}{c^2}}\, dt} \left( \frac{m_0 v_x}{\sqrt{1 - \frac{v^2}{c^2}}} \right) = \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}}\, \frac{d p_x}{dt} \\\\
&= \beta (\mathrm{rot}\mathbf{A}(x_1, x_2, x_3, x_4))_z \frac{v_y}{\sqrt{1 - \frac{v^2}{c^2}}} - \beta (\mathrm{rot}\mathbf{A}(x_1, x_2, x_3, x_4))_y \frac{v_z}{\sqrt{1 - \frac{v^2}{c^2}}} \\\\
&+ \beta \left( \frac{\partial A_4(x_1, x_2, x_3, x_4)}{\partial x} + i \frac{1}{c} \frac{\partial A_x(x_1, x_2, x_3, x_4)}{\partial t} \right) \frac{i c}{\sqrt{1 - \frac{v^2}{c^2}}} \\\\
&= \frac{\beta}{\sqrt{1 - \frac{v^2}{c^2}}} \left( [\mathbf{v} \times \mathrm{rot}\mathbf{A}]_x + i c \frac{\partial A_4(x_1, x_2, x_3, x_4)}{\partial x} - \frac{\partial A_x(x_1, x_2, x_3, x_4)}{\partial t} \right).
\end{aligned}
$$

整理后，我们得到

$$
\frac{d p_x}{dt} = \beta \left( [\mathbf{v} \times \mathrm{rot}\mathbf{A}(x_1, x_2, x_3, x_4)]_x + i c \frac{\partial A_4(x_1, x_2, x_3, x_4)}{\partial x} - \frac{\partial A_x(x_1, x_2, x_3, x_4)}{\partial t} \right).
$$

若我们取 $\beta$ 为带电粒子的电荷 $q$，$A_x(x_1, x_2, x_3, x_4), A_y(x_1, x_2, x_3, x_4)$ 和 $A_z(x_1, x_2, x_3, x_4)$ 为外加电磁场的矢势的三个分量，以及 $A_4(x_1, x_2, x_3, x_4) = i \Phi(x_1, x_2, x_3, x_4)/c$（这里，$\Phi(x_1, x_2, x_3, x_4)$ 为外加电磁场的标势），那么上式可进一步写作

$$
\begin{aligned}
\frac{d p_x}{dt} &= q(\mathbf{v} \times \mathbf{B})_x + q \left( i c \cdot \frac{1}{c} \frac{\partial \Phi(x_1, x_2, x_3, x_4)}{\partial x} - \frac{\partial A_x(x_1, x_2, x_3, x_4)}{\partial t} \right) \\\\
&= q(\mathbf{v} \times \mathbf{B})_x + q \left( -(\nabla \Phi(x_1, x_2, x_3, x_4))_x - \frac{\partial A_x(x_1, x_2, x_3, x_4)}{\partial t} \right) \\\\
&= q(\mathbf{v} \times \mathbf{B}(x_1, x_2, x_3, x_4))_x + q E_x(x_1, x_2, x_3, x_4).
\end{aligned}
$$

同理，对于 $i = 2$ 和 $i = 3$，我们也可得到

$$
\frac{d p_y}{dt} = q(\mathbf{v} \times \mathbf{B}(x_1, x_2, x_3, x_4))_y + q E_y(x_1, x_2, x_3, x_4),
$$

和

$$
\frac{d p_z}{dt} = q(\mathbf{v} \times \mathbf{B}(x_1, x_2, x_3, x_4))_z + q E_z(x_1, x_2, x_3, x_4),
$$

即带电粒子在电磁场中运动所满足的牛顿方程

$$
\frac{d \mathbf{p}}{dt} = q \mathbf{v} \times \mathbf{B}(x_1, x_2, x_3, x_4) + q \mathbf{E}(x_1, x_2, x_3, \\
$$

的分量表达式。

现在，我们可以将作用量 $S$ 明确写作

$$
\begin{aligned}
S &= S_\mathrm{m} + S_\mathrm{mf} = -m_0 c^2 \int_a^b d\tau + q \int_a^b (A_1 dx_1 + A_2 dx_2 + A_3 dx_3 + A_4 dx_4) \\\\
&= -m_0 c^2 \int_a^b d\tau + q \int_a^b \left( A_1 \frac{dx_1}{d\tau} + A_2 \frac{dx_2}{d\tau} + A_3 \frac{dx_3}{d\tau} + A_4 \frac{dx_4}{d\tau} \right) d\tau \\\\
&= \int_a^b \left( -m_0 c^2 + q A_1 u_1 + q A_2 u_2 + q A_3 u_3 + q A_4 u_4 \right) d\tau \\\\
&= \int_{t_a}^{t_b} \left( -m_0 c^2 + q A_x \frac{v_x}{\sqrt{1 - \frac{v^2}{c^2}}} + q A_y \frac{v_y}{\sqrt{1 - \frac{v^2}{c^2}}} + q A_z \frac{v_z}{\sqrt{1 - \frac{v^2}{c^2}}} + q \frac{i \Phi}{c} \frac{i c}{\sqrt{1 - \frac{v^2}{c^2}}} \right) \sqrt{1 - \frac{v^2}{c^2}}\, dt \\\\
&= \int_{t_a}^{t_b} \left( -m_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A}(x_1, x_2, x_3, x_4) \cdot \mathbf{v} - q \Phi(x_1, x_2, x_3, x_4) \right) dt,
\end{aligned}
$$

即带电粒子在电磁场中运动的拉格朗日量为

$$
L = -m_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A}(x_1, x_2, x_3, x_4) \cdot \mathbf{v} - q \Phi(x_1, x_2, x_3, x_4).
$$

最后，我们再来看一下 $i = 4$ 的情况。我们有

$$
m_0 \frac{d u_4}{d\tau} = q F_{41}(x_1, x_2, x_3, x_4) u_1 + q F_{42}(x_1, x_2, x_3, x_4) u_2 + q F_{43}(x_1, x_2, x_3, x_4) u_3.
$$

这里，

$$
\begin{aligned}
F_{41}(x_1, x_2, x_3, x_4) &= \frac{\partial A_1(x_1, x_2, x_3, x_4)}{\partial x_4} - \frac{\partial A_4(x_1, x_2, x_3, x_4)}{\partial x_1} \\\\
&= \frac{\partial A_x(x_1, x_2, x_3, x_4)}{\partial (i c t)} - \frac{\partial \left( i \frac{\Phi(x_1, x_2, x_3, x_4)}{c} \right)}{\partial x} = \frac{i}{c} \left( -\frac{\partial A_x}{\partial t} - \frac{\partial \Phi}{\partial x} \right) \\\\
&= \frac{i}{c} E_x(x_1, x_2, x_3, x_4), \\\\
F_{42}(x_1, x_2, x_3, x_4) &= \frac{\partial A_2(x_1, x_2, x_3, x_4)}{\partial x_4} - \frac{\partial A_4(x_1, x_2, x_3, x_4)}{\partial x_2} \\\\
&= \frac{i}{c} E_y(x_1, x_2, x_3, x_4), \\\\
F_{43}(x_1, x_2, x_3, x_4) &= \frac{\partial A_3(x_1, x_2, x_3, x_4)}{\partial x_4} - \frac{\partial A_4(x_1, x_2, x_3, x_4)}{\partial x_3} \\\\
&= \frac{i}{c} E_z(x_1, x_2, x_3, x_4).
\end{aligned}
$$

将这些结果代入上面的方程后，我们得到

$$
m_0 \frac{d \left( \frac{i c}{\sqrt{1 - \frac{v^2}{c^2}}} \right)}{\sqrt{1 - \frac{v^2}{c^2}}\, dt} = q \left( \frac{i}{c} E_x \right) \frac{v_x}{\sqrt{1 - \frac{v^2}{c^2}}} + q \left( \frac{i}{c} E_y \right) \frac{v_y}{\sqrt{1 - \frac{v^2}{c^2}}} + q \left( \frac{i}{c} E_z \right) \frac{v_z}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$

简化整理后我们有

$$
\frac{d}{dt} \left( \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}} \right) = q \mathbf{E}(x_1, x_2, x_3, x_4) \cdot \mathbf{v},
$$

即单位时间内粒子能量的改变等于外加电磁场作功的功率。这一结论显然是合理的。

