---
title: Chapter 1 数学基础
createTime: 2025/11/18 19:50:24
permalink: /electrodynamics/electrodynamics-1/
---

## Part 1 矢量分析基础

在学习“力学”课程时，我们已经初步了解了矢量以及它的数乘、点乘和直乘的概念。这里，我们先将这些知识回顾一下。

习惯上，我们所熟悉的实数称为“标量 (scalar)”。之后，这一称谓又被扩充到了复数。而所谓“矢量 (vector)”则是一个即具有长度又具有方向的元素，记作

$$
\vec{v} \equiv \mathbf{v} = v \vec{e}_v \equiv v \mathbf{e}_v.
$$

这里，实数 $v > 0$ 为矢量 $\mathbf{v}$ 的长度，记作 $v \equiv ||\mathbf{v}||$；而 $\mathbf{e}_v$ 则是沿其方向的长度为单位的一个矢量，称为沿该方向的单位矢量。依赖这些记号，一个实标量 $\alpha$ 和一个矢量 $\mathbf{v}$ 之间的数乘定义为

$$
\mathbf{v}' = \alpha \mathbf{v} \equiv (\alpha v) \mathbf{e}_v.
$$

它是一个新的矢量。这里，我们遇到的一个问题是，当 $\alpha$ 为一个负数时如何来理解这个新的矢量。为此，我们引入矢量 $\mathbf{e}_{-\mathbf{v}}$。它代表与 $\mathbf{v}$ 方向相反的单位矢量。利用这一定义，我们可以重新写出

$$
\mathbf{v}' = \alpha \mathbf{v} = (\alpha v) \mathbf{e}_v = (-|\alpha| v) \mathbf{e}_v = |\alpha| v (-\mathbf{e}_v) = |\alpha| v \mathbf{e}_{-\mathbf{v}}.
$$

它代表一个长度为 $|\alpha| v$，而方向则与 $\mathbf{v}$ 相反的矢量。

在做了这些准备之后，我们现在可以定义矢量之间的加法了。对于任意两个矢量 $\mathbf{A}$ 和 $\mathbf{B}$，它们的和 $\mathbf{C} = \mathbf{A} + \mathbf{B}$ 由所谓平行四边形法则给出。但这一定义在实际运算中使用起来不大方便。为了简化问题，笛卡尔引入了以他的名字命名的直角坐标系。在这一坐标系下，我们可以任一矢量 $\mathbf{v}$ 的起点平行地移动到坐标系的原点，从而将该矢量写作

$$
\mathbf{v} = v_x \mathbf{e}_x + v_y \mathbf{e}_y + v_z \mathbf{e}_z
$$

这里， $\mathbf{e}_x, \mathbf{e}_y$ 和 $\mathbf{e}_z$ 分别是沿 $x, y$ 和 $z$ 轴方向的单位矢量。习惯性地，人们将之分别记作 $\mathbf{i}, \mathbf{j}$ 和 $\mathbf{k}$。而 $v_x, v_y$ 和 $v_z$ 则是矢量 $\mathbf{v}$ 在这三个方向上的投影。如此一来，我们又可将矢量 $\mathbf{v}$ 写作

$$
\mathbf{v} = v_x \mathbf{i} + v_y \mathbf{j} + v_z \mathbf{k}.
$$

接下来，我们定义两个矢量的点乘和直乘。任取两个矢量 $\mathbf{A}$ 和 $\mathbf{B}$。它们的点乘为

$$
\mathbf{A} \cdot \mathbf{B} = ||\mathbf{A}|| \cdot ||\mathbf{B}|| \cos\theta.
$$

这里， $\theta$ 为二者之间的夹角。特别是当 $\theta = 0$ 时， $\mathbf{A} \cdot \mathbf{B} = ||\mathbf{A}|| \cdot ||\mathbf{B}||$，而当 $\theta = \pi/2$ 时， $\mathbf{A} \cdot \mathbf{B} = 0$。在前一种情况中，我们称为 $\mathbf{A}$ 和 $\mathbf{B}$ 是平行的，记作 $\mathbf{A} \parallel \mathbf{B}$。而在后一种情况中，我们称 $\mathbf{A}$ 和 $\mathbf{B}$ 是彼此垂直的，记作 $\mathbf{A} \perp \mathbf{B}$。不难验证，两个矢量的点乘满足对易关系

$$
\mathbf{A} \cdot \mathbf{B} = \mathbf{B} \cdot \mathbf{A},
$$

而与矢量的加法之间满足分配率

$$
(\mathbf{A} + \mathbf{B}) \cdot \mathbf{C} = \mathbf{A} \cdot \mathbf{C} + \mathbf{B} \cdot \mathbf{C}.
$$
由此出发，再利用矢量的直角坐标系表示，我们得到

$$
\mathbf{A} \cdot \mathbf{B} = (A_x \mathbf{i} + A_y \mathbf{j} + A_z \mathbf{k}) \cdot (B_x \mathbf{i} + B_y \mathbf{j} + B_z \mathbf{k}) = A_x B_x + A_y B_y + A_z B_z.
$$

这是一个标量。特别是对于同一个矢量 $\mathbf{v}$，我们有

$$
\mathbf{v} \cdot \mathbf{v} = v_x^2 + v_y^2 + v_z^2 = v^2 = \|\mathbf{v}\|^2.
$$

因此我们有 $\|\mathbf{v}\| = v = \sqrt{v_x^2 + v_y^2 + v_z^2}$。

矢量直乘的定义则稍微复杂一点。两个矢量的直积仍然是一个矢量，它可被写作

$$
\mathbf{C} = \mathbf{A} \times \mathbf{B} = \|\mathbf{A}\| \cdot \|\mathbf{B}\| \sin\theta \mathbf{e_C}.
$$

而 $\mathbf{e_C}$ 的方向则由右手螺旋法则来决定。根据这一法则，我们立刻可得

$$
\mathbf{A} \times \mathbf{B} = -\mathbf{B} \times \mathbf{A}.
$$

有意思的是，当 $\mathbf{A} \parallel \mathbf{B}$ 时，$\sin\theta = 0$，故 $\mathbf{A} \times \mathbf{B} = 0$。而当 $\theta = \pi/2$ 时，$\mathbf{C}$ 的长度为 $\|\mathbf{A}\| \cdot \|\mathbf{B}\|$，取最大值。这一点正好与点乘相反。同时，我们亦可很容易地验证

$$
(\mathbf{A}_1 + \mathbf{A}_2) \times \mathbf{B} = \mathbf{A}_1 \times \mathbf{B} + \mathbf{A}_2 \times \mathbf{B}
$$

成立。利用此一事实以及矢量在直角坐标系下的表达式，我们又有

$$
\begin{aligned}
\mathbf{A} \times \mathbf{B} &= (A_x \mathbf{i} + A_y \mathbf{j} + A_z \mathbf{k}) \times (B_x \mathbf{i} + B_y \mathbf{j} + B_z \mathbf{k}) \\\\
&= (A_y B_z - A_z B_y)\mathbf{i} + (A_z B_x - A_x B_z)\mathbf{j} + (A_x B_y - A_y B_x)\mathbf{k}.
\end{aligned}
$$

这一结果较为冗长。为了记忆方便，我们可以利用行列式的定义，将其写作

$$
\mathbf{A} \times \mathbf{B} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
A_x & A_y & A_z \\
B_x & B_y & B_z
\end{vmatrix}
$$

关于点乘和直乘的关系，下面的两个恒等式是常常用到的。

$$
(\mathbf{A} \times \mathbf{B}) \cdot \mathbf{C} = \mathbf{A} \cdot (\mathbf{B} \times \mathbf{C}), \quad
\mathbf{A} \times (\mathbf{B} \times \mathbf{C}) = (\mathbf{A} \cdot \mathbf{C})\mathbf{B} - (\mathbf{A} \cdot \mathbf{B})\mathbf{C}.
$$

接下来，我们转向另外一个话题。

## Part 2 场论

### · 基本概念

假若有一个矢量 $\mathbf{A}$，它可以被连续地定义在空间中的一个区域 $\Omega$ 上的每一点，即
$$
\mathbf{A}(x, y, z, t) = A_x(x, y, z, t)\mathbf{i} + A_y(x, y, z, t)\mathbf{j} + A_z(x, y, z, t)\mathbf{k},
$$

则我们称它为一个矢量场。例如，为了描述流体的运动，欧拉引入了速度场的概念，称为流体的欧拉表示法。

一般而言，若无特殊声明，我们总是假设 $\mathbf{A}$ 的三个分量 $A_x(x, y, z, t)$，$A_y(x, y, z, t)$ 和 $A_z(x, y, z, t)$ 作为自变量 $x, y, z$ 和 $t$ 的函数是连续的。若有需要，我们还会要求它们在 $\Omega$ 的大部分区域对这些变量是一次或二次可导的。

推而广之，我们也可以在 $\Omega$ 中定义所谓标量场，例如温度 $T$ 的连续分布。这时，$T(x, y, z, t)$ 作为空间坐标 $x, y, z$ 和时间 $t$ 的函数被要求是连续的。

对于一个给定的标量场，我们可以引入它的梯度（gradient）的定义。任取区域 $\Omega$ 中的一点 $\mathbf{r} = (x, y, z)$ 以及与它相邻的点 $\mathbf{r}' = (x + \Delta x, y + \Delta y, z + \Delta z) \equiv \mathbf{r} + \Delta\mathbf{r}$。则我们近似地有

$$
\begin{aligned}
&\Delta T(x, y, z, t) \equiv T(x + \Delta x, y + \Delta y, z + \Delta z, t) - T(x, y, z, t) \\\\
&\simeq \frac{\partial T(x, y, z, t)}{\partial x} \Delta x + \frac{\partial T(x, y, z, t)}{\partial y} \Delta y + \frac{\partial T(x, y, z, t)}{\partial z} \Delta z
\end{aligned}
$$

若我们引矢量

$$
\mathrm{grad}\, T(x, y, z, t) \equiv \frac{\partial T(x, y, z, t)}{\partial x} \mathbf{i} + \frac{\partial T(x, y, z, t)}{\partial y} \mathbf{j} + \frac{\partial T(x, y, z, t)}{\partial z} \mathbf{k},
$$

以及

$$
\Delta\mathbf{r} \equiv \Delta x \mathbf{i} + \Delta y \mathbf{j} + \Delta z \mathbf{k},
$$

那么上式可以被重新写作

$$
\Delta T(x, y, z, t) \simeq \mathrm{grad}\, T(x, y, z, t) \cdot \Delta\mathbf{r} = \|\mathrm{grad}\, T(x, y, z, t)\| \cdot \|\Delta\mathbf{r}\| \cos\theta.
$$

因此，当 $\theta = 0$，即 $\mathrm{grad}\, T(x, y, z, t) \parallel \Delta\mathbf{r}$ 时，$\Delta T(x, y, z, t)$ 取极大值。也就是说，$\mathrm{grad}\, T(x, y, z, t)$ 的方向是标量场 $T(x, y, z, t)$ 在空间 $\mathbf{r} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$ 处变化最快的方向。这是一个标量场的梯度的物理意义。

接下来，我们考虑一个矢量场 $\mathbf{A}(x, y, z, t)$ 的散度（divergence）和旋度（curl）。前者可以写作

$$
\mathrm{div}\, \mathbf{A}(x, y, z, t) \equiv \frac{\partial A_x(x, y, z, t)}{\partial x} + \frac{\partial A_y(x, y, z, t)}{\partial y} + \frac{\partial A_z(x, y, z, t)}{\partial z},
$$

是一个标量，而后者则为

$$
\begin{aligned}
&\mathrm{rot}\, \mathbf{A}(x, y, z, t) \equiv \left( \frac{\partial A_z(x, y, z, t)}{\partial y} - \frac{\partial A_y(x, y, z, t)}{\partial z} \right) \mathbf{i} \\\\
&+ \left( \frac{\partial A_x(x, y, z, t)}{\partial z} - \frac{\partial A_z(x, y, z, t)}{\partial x} \right) \mathbf{j} + \left( \frac{\partial A_y(x, y, z, t)}{\partial x} - \frac{\partial A_x(x, y, z, t)}{\partial y} \right) \mathbf{k}.
\end{aligned}
$$

显然这是一个矢量。利用行列式的定义，矢量 $\mathbf{A}(x, y, z, t)$ 的旋度又可被写作

$$
\mathrm{rot}\, \mathbf{A}(x, y, z, t) =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\\\
\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\\\
A_x(x, y, z, t) & A_y(x, y, z, t) & A_z(x, y, z, t)
\end{vmatrix}
$$

从物理上看，$\mathrm{div}\, \mathbf{A}(x, y, z, t)$ 可以被视作 $t$ 时刻从一个包含点 $\mathbf{r} = (x, y, z)$ 的小体积 $\Delta v$ 中单位时间内流出的矢量场 $\mathbf{A}$ 的通量，而 $\mathrm{rot}\, \mathbf{A}(x, y, z, t)$ 则标志着在 $\mathbf{r}$ 点附近，矢量场 $\mathbf{A}$ 是否存在着涡旋结构。为了看清楚这些事实，我们还需要做一点数学准备。

矢量场 $\mathbf{A}(x, y, z, t)$ 的旋度的行列式表达式给了我们一个提示：可以引入一个算符

$$
\nabla \equiv \frac{\partial}{\partial x} \mathbf{i} + \frac{\partial}{\partial y} \mathbf{j} + \frac{\partial}{\partial z} \mathbf{k},
$$

从而将 $\mathrm{rot}\, \mathbf{A}$ 重新写作

$$
\mathrm{rot}\, \mathbf{A}(x, y, z, t) =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\\\
\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\\\
A_x(x, y, z, t) & A_y(x, y, z, t) & A_z(x, y, z, t)
\end{vmatrix}
\equiv \nabla \times \mathbf{A}(x, y, z, t).
$$

有意思的是，利用这一记号，我们也可以将矢量场 $\mathbf{A}(x, y, z, t)$ 的散度和标量场 $T(x, y, z, t)$ 的梯度分别写成

$$
\begin{aligned}
\mathrm{div}\, \mathbf{A}(x, y, z, t) &\equiv \frac{\partial A_x(x, y, z, t)}{\partial x} + \frac{\partial A_y(x, y, z, t)}{\partial y} + \frac{\partial A_z(x, y, z, t)}{\partial z} \equiv \nabla \cdot \mathbf{A}, \\\\
\mathrm{grad}\, T(x, y, z, t) &\equiv \frac{\partial T(x, y, z, t)}{\partial x} \mathbf{i} + \frac{\partial T(x, y, z, t)}{\partial y} \mathbf{j} + \frac{\partial T(x, y, z, t)}{\partial z} \mathbf{k} \equiv \nabla T.
\end{aligned}
$$

这些记号在下面的讲述中会被交替使用。

标量场的梯度，矢量场的散度和旋度之间满足一些微分和积分恒等式。下面我们挑几个最常用的讲解一下。首先，我们看两个微分恒等式。

$$
\mathrm{rot}\, [\mathrm{grad}\, T(x, y, z, t)] = \nabla \times [\nabla T(x, y, z, t)] \equiv 0,
$$

以及

$$
\mathrm{div}\, [\mathrm{rot}\, \mathbf{A}(x, y, z, t)] = \nabla \cdot [\nabla \times \mathbf{A}(x, y, z, t)] \equiv 0.
$$

这里，我们只证明第二个恒等式。根据定义，我们有

$$
\begin{aligned}
&\mathrm{div}\, [\mathrm{rot}\, \mathbf{A}(x, y, z, t)] = \mathrm{div}\,
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\\\
\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\\\
A_x(x, y, z, t) & A_y(x, y, z, t) & A_z(x, y, z, t)
\end{vmatrix} \\\\
&= \frac{\partial}{\partial x} \left( \frac{\partial A_z(x, y, z, t)}{\partial y} - \frac{\partial A_y(x, y, z, t)}{\partial z} \right) + \frac{\partial}{\partial y} \left( \frac{\partial A_x(x, y, z, t)}{\partial z} - \frac{\partial A_z(x, y, z, t)}{\partial x} \right) \\\\
&+ \frac{\partial}{\partial z} \left( \frac{\partial A_y(x, y, z, t)}{\partial x} - \frac{\partial A_x(x, y, z, t)}{\partial y} \right) \\\\
&= \frac{\partial^2 A_z(x, y, z, t)}{\partial x \partial y} - \frac{\partial^2 A_y(x, y, z, t)}{\partial x \partial z} + \frac{\partial^2 A_x(x, y, z, t)}{\partial y \partial z} - \frac{\partial^2 A_z(x, y, z, t)}{\partial y \partial x} \\\\
&+ \frac{\partial^2 A_y(x, y, z, t)}{\partial z \partial x} - \frac{\partial^2 A_x(x, y, z, t)}{\partial z \partial y} = 0.
\end{aligned}
$$

除此之外，矢量场 $\mathbf{A}(x, y, z, t)$ 的散度和旋度还满足如下的积分恒等式。任取一个区域 $\bar{\Omega} \subset \Omega$，则我们有

$$
\oint_S \mathbf{A}(x, y, z, t) \cdot d\mathbf{S} = \int \int_{\bar{\Omega}} \mathrm{div}\, \mathbf{A}(x, y, z, t)\, dx dy dz.
$$

这里，$S$ 为包围区域 $\bar{\Omega}$ 的封闭曲面，而面元 $d\mathbf{S} = dS \mathbf{n}$ 被定义作长度为 $dS$，方向沿外法线 $\mathbf{n}$ 的矢量。这一恒等式被称为高斯定理（Gauss theorem）。另外一个常用的积分恒等式可被写作

$$
\oint_C \mathbf{A}(x, y, z, t) \cdot d\mathbf{l} = \int_S (\mathrm{rot}\, \mathbf{A}(x, y, z, t)) \cdot d\mathbf{S}.
$$

这里，$C$ 为区域 $\Omega$ 内的一个环路，而 $\bar{S}$ 为任意一个以 $C$ 为边界的曲面。环路的方向由柯西法则（Cauchy's rule）决定，而面元 $d\mathbf{S}$ 的方向现在则由右手螺旋法则决定。在文献中，这一公式被称为斯托克斯公式（Stokes formula）。接下来，我们分别给出这两个常用恒等式的简单证明。

### · Gauss 定理

首先看高斯定理的证明。为此，我们先取 $\bar{\Omega}$ 中一点 $\mathbf{r} = (x, y, z)$，以它为中心做一个边长为小量 $\Delta l$ 的立方体，并取其六个面的外法线方向分别为 $x, y$ 和 $z$ 轴的正、负方向。我们考虑矢量场 $\mathbf{A}(x, y, z, t)$ 在这六个面上的通量之和。

为了确定起见，先让我们考虑法线方向沿 $z$ 轴的两个面。显然，上表面的任意一个点的坐标可以写作 $(\bar{x}, \bar{y}, z + \Delta l/2)$，而下表面上任意一个点的坐标可以写作 $(\bar{x}, \bar{y}, z - \Delta l/2)$。这里，$\bar{x}$ 和 $\bar{y}$ 的取值为 $x - \Delta l/2 \leq \bar{x} \leq x + \Delta l/2$ 以及 $y - \Delta l/2 \leq \bar{y} \leq y + \Delta l/2$。而上表面和下表面的外法线分别是沿正 $z$ 轴和负 $z$ 轴方向的。因此，在上表面上，矢量场 $\mathbf{A}(x, y, z, t)$ 的通量为
$$
\int_{\text{top-surface}} \mathbf{A} \left( \bar{x}, \bar{y}, z + \frac{\Delta l}{2}, t \right) \cdot d\mathbf{S} = \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} \, A_z \left( \bar{x}, \bar{y}, z + \frac{\Delta l}{2} \right).
$$

当 $\Delta l \sim 0$ 时，我们可以将被积函数在中心点 $\mathbf{r} = (x, y, z)$ 处做展开，并仅仅保留各个小量的一次幂项，即

$$
\begin{aligned}
&A_z \left( \bar{x}, \bar{y}, z + \frac{\Delta l}{2} \right) \\\\
&\simeq A_z(x, y, z) + \frac{\partial A_z(x, y, z)}{\partial x} (\bar{x} - x) + \frac{\partial A_z(x, y, z)}{\partial y} (\bar{y} - y) + \frac{\partial A_z(x, y, z)}{\partial z} \frac{\Delta l}{2}.
\end{aligned}
$$

将其代入上式后，我们有

$$
\begin{aligned}
&\int_{\text{top-surface}} \mathbf{A} \left( \bar{x}, \bar{y}, z + \frac{\Delta l}{2}, t \right) \cdot d\mathbf{S} \\\\
&\simeq \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} \, A_z(x, y, z) + \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} \, \frac{\partial A_z(x, y, z)}{\partial x} (\bar{x} - x) \\\\
&+ \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} \, \frac{\partial A_z(x, y, z)}{\partial y} (\bar{y} - y) + \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} \, \frac{\partial A_z(x, y, z)}{\partial z} \frac{\Delta l}{2}.
\end{aligned}
$$

同理，在下表面上，我们有

$$
\begin{aligned}
&\int_{\text{lower-surface}} \mathbf{A} \left( \bar{x}, \bar{y}, z - \frac{\Delta l}{2}, t \right) \cdot d\mathbf{S} = - \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} \, A_z \left( \bar{x}, \bar{y}, z - \frac{\Delta l}{2} \right) \\\\
&\simeq - \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} \, A_z(x, y, z) - \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} \, \frac{\partial A_z(x, y, z)}{\partial x} (\bar{x} - x) \\\\
&- \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} \, \frac{\partial A_z(x, y, z)}{\partial y} (\bar{y} - y) + \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} \, \frac{\partial A_z(x, y, z)}{\partial z} \frac{\Delta l}{2}.
\end{aligned}
$$
积分表达式前面的负号的出现是由于下表面的外法线是指向 $z$ 轴的负方向的。因此，矢量场 $\mathbf{A}$ 在上和下两个表面上的通量之和为

$$
\begin{aligned}
&\int_{\text{top-surface}} \mathbf{A} \left( \bar{x}, \bar{y}, z + \frac{\Delta l}{2}, t \right) \cdot d\mathbf{S} + \int_{\text{lower-surface}} \mathbf{A} \left( \bar{x}, \bar{y}, z - \frac{\Delta l}{2}, t \right) \cdot d\mathbf{S} \\\\
&\simeq \frac{\partial A_z(x, y, z, t)}{\partial z} (\Delta l) \int_{x - \frac{\Delta l}{2}}^{x + \frac{\Delta l}{2}} d\bar{x} \int_{y - \frac{\Delta l}{2}}^{y + \frac{\Delta l}{2}} d\bar{y} = \frac{\partial A_z(x, y, z, t)}{\partial z} (\Delta l)^3.
\end{aligned}
$$

同上面的推导相同，我们可以得到矢量场 $\mathbf{A}$ 在外法线沿 $x$ 轴和 $y$ 轴方向的立方体的表面上的通量之和分别为 $(\partial A_x(x, y, z, t)/\partial x)(\Delta l)^3$ 和 $(\partial A_y(x, y, z, t)/\partial y)(\Delta l)^3$。现在，将这些结果相加，我们最后得到

$$
\begin{aligned}
&\oint \oint_{\text{Surface-of-small-cube}} \mathbf{A} \cdot d\mathbf{S} \\\\
&\simeq \left( \frac{\partial A_x(x, y, z, t)}{\partial x} + \frac{\partial A_y(x, y, z, t)}{\partial y} + \frac{\partial A_z(x, y, z, t)}{\partial z} \right) (\Delta l)^3 \\\\
&= \mathrm{div}\, \mathbf{A}(x, y, z, t) (\Delta l)^3,
\end{aligned}
$$

或是

$$
\lim_{\Delta l \to 0} \frac{1}{(\Delta l)^3} \oint \oint_{\text{Surface-of-small-cube}} \mathbf{A} \cdot d\mathbf{S} = \mathrm{div}\, \mathbf{A}(x, y, z, t).
$$

也就是说，$\mathrm{div}\, \mathbf{A}(x, y, z, t)$ 为 $t$ 时刻，矢量场 $\mathbf{A}(x, y, z, t)$ 从一个包围点 $\mathbf{r} = (x, y, z)$ 的的小体积元 $\Delta V$ 中单位时间流出去的通量。

现在，我们可以完成高斯定理的证明了。首先，我们可以取一些小的立方体来切割区域 $\bar{\Omega}$。注意到，对于两个相邻的小立方体而言，在它们的共同分界面上，彼此的外法线方向是相反的。也就是说，相对于一个小立方体的外法线方向，对于另外一个小小立方体来说就是内法线方向。如此一来，对于矢量场 $\mathbf{A}(x, y, z, t)$，其来自两个小立方体的通量在这个分界面上会彼此抵消。因此，若令 $S_i$ 为第 $i$ 个小立方体的表面，则我们有

$$
\begin{aligned}
\oint \oint_{S_{\bar{\Omega}}} \mathbf{A} \cdot d\mathbf{S} &= \lim_{N \to \infty} \sum_{i=1}^N \oint \oint_{S_i} \mathbf{A} \cdot d\mathbf{S} = \lim_{N \to \infty} \sum_{i=1}^N (\Delta l)^3 \frac{\oint \oint_{S_i} \mathbf{A} \cdot d\mathbf{S}}{(\Delta l)^3} \\\\
&= \lim_{N \to \infty} \sum_{i=1}^N (\Delta l)^3 \mathrm{div}\, \mathbf{A}(x, y, z, t) = \int \int \int_{\bar{\Omega}} \mathrm{div}\, \mathbf{A}(x, y, z, t)\, dx dy dz.
\end{aligned}
$$

这就是我们所要证明的高斯定理。

### · Stokes 公式

同理，为了证明斯托克斯公式，我们可以任取一个以点 $\mathbf{r} = (x, y, z)$ 为中心，边长为 $\Delta l$ 的小正方形。它的边界构成一个回路 $C$，其方向由柯西规定决定，而小正方形本身的法线方向 $\mathbf{n}$ 由右手螺旋法则决定。

接下来，我们定义矢量场 $\mathbf{A}$ 在这个小正方形的边界 $C$ 上的环流量为
$$
\Sigma_C \equiv \oint_C \mathbf{A} \cdot d\mathbf{l}.
$$

显然，这是一个标量。令这个小正方形的边长 $\Delta l$ 趋向于零。若极限 $\displaystyle\lim_{\Delta l \to 0} \dfrac{\Sigma_C}{(\Delta l)^2}$ 存在的话，我们将之记作 $\mathbf{B} \cdot \mathbf{n}$。我们要证明，它实际上等于 $\mathrm{rot}\, \mathbf{A}(x, y, z, t) \cdot \mathbf{n}$。为此，让我们考虑几个特例。

先考虑一个法线沿 $z$ 轴方向，边长为 $\Delta l$ 的小正方形 $C_z$。它的四条边，其上的坐标分别为 $(\bar{x}, y + \Delta l/2, z)$，$(\bar{x}, y - \Delta l/2, z)$，$(x + \Delta l/2, \bar{y}, z)$ 以及 $(x - \Delta l/2, \bar{y}, z)$。

这里，坐标 $\bar{x}$ 和 $\bar{y}$ 的取值分别为 $x - \Delta l/2 \leq \bar{x} \leq x + \Delta l/2$，$y - \Delta l/2 \leq \bar{y} \leq y + \Delta l/2$。而由这四根边形成的回路的方向则由右手螺旋法则决定。因此，矢量场 $\mathbf{A}$ 在这四根边上的环流量分别为
$$
\begin{aligned}
&\int_{\text{first-side}} \mathbf{A}(\bar{x}, y + \Delta l/2, z, t) \cdot d\mathbf{l} = \int_{x - \Delta l/2}^{x + \Delta l/2} A_x(\bar{x}, y + \Delta l/2, z, t)\, d\bar{x} \\\\
&\simeq - \int_{x - \Delta l/2}^{x + \Delta l/2} \left( A_x(x, y, z, t) + \frac{\partial A_x(x, y, z, t)}{\partial x} (\bar{x} - x) + \frac{\partial A_x(x, y, z, t)}{\partial y} \frac{\Delta l}{2} \right) d\bar{x} \\\\
&= -A_x(x, y, z, t) \Delta l - \int_{x - \Delta l/2}^{x + \Delta l/2} \frac{\partial A_x(x, y, z, t)}{\partial x} (\bar{x} - x) d\bar{x} - \frac{\partial A_x(x, y, z, t)}{\partial y} \frac{(\Delta l)^2}{2},
\end{aligned}
$$

$$
\begin{aligned}
&\int_{\text{second-side}} \mathbf{A}(\bar{x}, y - \Delta l/2, z, t) \cdot d\mathbf{l} = \int_{x - \Delta l/2}^{x + \Delta l/2} A_x(\bar{x}, y - \Delta l/2, z, t)\, d\bar{x} \\\\
&\simeq \int_{x - \Delta l/2}^{x + \Delta l/2} \left( A_x(x, y, z, t) + \frac{\partial A_x(x, y, z, t)}{\partial x} (\bar{x} - x) - \frac{\partial A_x(x, y, z, t)}{\partial y} \frac{\Delta l}{2} \right) d\bar{x} \\\\
&= A_x(x, y, z, t) \Delta l + \int_{x - \Delta l/2}^{x + \Delta l/2} \frac{\partial A_x(x, y, z, t)}{\partial x} (\bar{x} - x) d\bar{x} - \frac{\partial A_x(x, y, z, t)}{\partial y} \frac{(\Delta l)^2}{2},
\end{aligned}
$$

$$
\begin{aligned}
&\int_{\text{third-side}} \mathbf{A}(x + \Delta l/2, \bar{y}, z, t) \cdot d\mathbf{l} = \int_{y - \Delta l/2}^{y + \Delta l/2} A_y(x + \Delta l/2, \bar{y}, z, t)\, d\bar{y} \\\\
&\simeq \int_{y - \Delta l/2}^{y + \Delta l/2} \left( A_y(x, y, z, t) + \frac{\partial A_y(x, y, z, t)}{\partial x} \frac{\Delta l}{2} + \frac{\partial A_y(x, y, z, t)}{\partial y} (\bar{y} - y) \right) d\bar{y} \\\\
&= A_y(x, y, z, t) \Delta l + \frac{\partial A_y(x, y, z, t)}{\partial x} \frac{(\Delta l)^2}{2} + \int_{y - \Delta l/2}^{y + \Delta l/2} \frac{\partial A_y(x, y, z, t)}{\partial y} (\bar{y} - y) d\bar{y},
\end{aligned}
$$

$$
\begin{aligned}
&\int_{\text{fourth-side}} \mathbf{A}(x - \Delta l/2, \bar{y}, z, t) \cdot d\mathbf{l} = \int_{y + \Delta l/2}^{y - \Delta l/2} A_y(x - \Delta l/2, \bar{y}, z, t)\, d\bar{y} \\\\
&\simeq - \int_{y - \Delta l/2}^{y + \Delta l/2} \left( A_y(x, y, z, t) - \frac{\partial A_y(x, y, z, t)}{\partial x} \frac{\Delta l}{2} + \frac{\partial A_y(x, y, z, t)}{\partial y} (\bar{y} - y) \right) d\bar{y} \\\\
&= -A_y(x, y, z, t) \Delta l + \frac{\partial A_y(x, y, z, t)}{\partial x} \frac{(\Delta l)^2}{2} - \int_{y - \Delta l/2}^{y + \Delta l/2} \frac{\partial A_y(x, y, z, t)}{\partial y} (\bar{y} - y) d\bar{y}.
\end{aligned}
$$

因此，在这个小的正方形的边界 $C_z$ 上，矢量场 $\mathbf{A}$ 的环流量近似为

$$
\begin{aligned}
\oint_{C_z} \mathbf{A} \cdot d\mathbf{l} &= \int_{\text{first-side}} \mathbf{A}(\bar{x}, y + \Delta l/2, z, t) \cdot d\mathbf{l} + \int_{\text{second-side}} \mathbf{A}(\bar{x}, y - \Delta l/2, z, t) \cdot d\mathbf{l} \\\\
&+ \int_{\text{third-side}} \mathbf{A}(x + \Delta l/2, \bar{y}, z, t) \cdot d\mathbf{l} + \int_{\text{forth-side}} \mathbf{A}(x - \Delta l/2, \bar{y}, z, t) \cdot d\mathbf{l} \\\\
&\simeq \left( \frac{\partial A_y(x, y, z, t)}{\partial x} - \frac{\partial A_x(x, y, z, t)}{\partial y} \right) (\Delta l)^2.
\end{aligned}
$$

由此，我们得到

$$
\mathbf{B} \cdot \mathbf{k} \equiv \lim_{\Delta l \to 0} \frac{\oint_{C_z} \mathbf{A} \cdot d\mathbf{l}}{(\Delta l)^2} = \frac{\partial A_y(x, y, z, t)}{\partial x} - \frac{\partial A_x(x, y, z, t)}{\partial y} = [\mathrm{rot}\, \mathbf{A}(x, y, z, t)]_z.
$$

同理，对于法线分别沿 $x$ 轴和 $y$ 轴的以点 $\mathbf{r} = (x, y, z)$ 为中心的小正方形的边界 $C_x$ 和 $C_y$ 上的矢量场 $\mathbf{A}$ 的环流量，我们有

$$
\oint_{C_x} \mathbf{A} \cdot d\mathbf{l} \simeq \left( \frac{\partial A_z(x, y, z, t)}{\partial y} - \frac{\partial A_y(x, y, z, t)}{\partial z} \right) (\Delta l)^2,
$$

$$
\oint_{C_y} \mathbf{A} \cdot d\mathbf{l} \simeq \left( \frac{\partial A_x(x, y, z, t)}{\partial z} - \frac{\partial A_z(x, y, z, t)}{\partial x} \right) (\Delta l)^2.
$$

因此，我们得到

$$
\mathbf{B} \cdot \mathbf{i} \equiv \lim_{\Delta l \to 0} \frac{\oint_{C_x} \mathbf{A} \cdot d\mathbf{l}}{(\Delta l)^2} = \frac{\partial A_z(x, y, z, t)}{\partial y} - \frac{\partial A_y(x, y, z, t)}{\partial z} = [\mathrm{rot}\, \mathbf{A}(x, y, z, t)]_x,
$$

$$
\mathbf{B} \cdot \mathbf{j} \equiv \lim_{\Delta l \to 0} \frac{\oint_{C_y} \mathbf{A} \cdot d\mathbf{l}}{(\Delta l)^2} = \frac{\partial A_x(x, y, z, t)}{\partial z} - \frac{\partial A_z(x, y, z, t)}{\partial x} = [\mathrm{rot}\, \mathbf{A}(x, y, z, t)]_y.
$$

综上所述，对于一个以点 $\mathbf{r} = (x, y, z)$ 为中心，边长为 $\Delta l$ 的小正方形的边界回路 $C$，我们最后得到极限表达式

$$
\mathbf{B} \cdot \mathbf{n} \equiv \lim_{\Delta l \to 0} \frac{1}{(\Delta l)^2} \oint_C \mathbf{A} \cdot d\mathbf{l} = \mathrm{rot}\, \mathbf{A}(x, y, z, t) \cdot \mathbf{n}.
$$

有了这一结果之后，我们现在取区域 $\Omega$ 内的任意一条闭合曲线 $C$ 以及一个以它为边界的曲面 $S$。当边长 $\Delta l$ 取得足够小时，我们用 $N$ 个边长为 $\Delta l$ 的小的正方形 $S_1, S_2, \ldots, S_N$ 近似地切割曲面 $S$。设这些小的正方形的边界为曲线 $C_1, C_2, \ldots, C_N$。

那么，对于两个相邻的小正方形 $S_i$ 和 $S_j$ 而言，根据柯西法则，其边界回路 $C_i$ 和 $C_j$ 在它们重叠线段上的取向正好是相反的。由此导致的结果是，在这一线段上，矢量场 $\mathbf{A}$ 对于回路 $C_i$ 的环流量的贡献正好与其对于回路 $C_j$ 的环流量的贡献彼此抵消。

也就是说，矢量场 $\mathbf{A}$ 对于这 $N$ 个闭合曲线 $C_1, C_2, \ldots, C_N$ 的环流量之和实际上等于在整个曲面 $S$ 的边界 $C$ 上的环流量大致相等，即我们有
$$
\oint_C \mathbf{A} \cdot d\mathbf{l} \simeq \sum_{i=1}^N \oint_{C_i} \mathbf{A} \cdot d\mathbf{l}.
$$

若令 $\Delta l \to 0$（等价于令 $N \to \infty$），则我们有

$$
\begin{aligned}
\oint_C \mathbf{A} \cdot d\mathbf{l} &= \lim_{N \to \infty} \sum_{i=1}^N \oint_{C_i} \mathbf{A} \cdot d\mathbf{l} = \lim_{N \to \infty} \sum_{i=1}^N (\Delta l)^2 \frac{\oint_{C_i} \mathbf{A} \cdot d\mathbf{l}}{(\Delta l)^2} \\\\
&= \lim_{N \to \infty} \sum_{i=1}^N (\Delta l)^2 \mathrm{rot}\, \mathbf{A}(x, y, z, t) \cdot \mathbf{n}_i = \int_S \mathrm{rot}\, \mathbf{A} \cdot d\mathbf{S}.
\end{aligned}
$$

此即斯托克斯公式。

通过以上的推导，我们也可以看到，若在空间一点 $\mathbf{r}$ 处，$\mathrm{rot}\, \mathbf{A}(\mathbf{r}) \neq 0$，意味着矢量场 $\mathbf{A}(x, y, z, t)$ 环绕该点的环流量不是零。也就是说，在该点处，矢量场有一个涡旋结构。

在做了这些准备工作之后，我们现在可以转入对于麦克斯韦方程组及其推论的研究了。

