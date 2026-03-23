---
title: Chapter 8 连续介质 Maxwell
permalink: /electrodynamics/electrodynamics-8/
createTime: 2026/03/15 22:14:44
---

## Part 1 束缚电荷和分子电流

在实际问题中，我们遇到更多的是电磁波在物质（或者说连续连续媒介质）中传播的情况。在这一章中，我们要考虑由于连续媒介质的存在引起的对于麦克斯韦方程组的修正。

今天我们知道，物质是由原子组成的。而原子本身是由带正电荷的原子核以及带负电荷的电子构成的。这些电荷彼此之间的距离大约为 $10^{-8}$ 厘米，而它们的个数（在一克物质中）大约为 $10^{23}$。考虑到在多数情况下，我们所处理的电磁波的波长要远大于 $10^{-8}$ 厘米（以可见光为例，其波长大约为 $10^4\AA$ 的量级），我们可以略去物质的原子结构，而将之视作连续媒介质。这样做可以大大减少我们的计算量。

我们的出发点仍然是真空中的麦克斯韦方程组。仿照朗道和栗弗席兹的作法，我们用小写字母表示真空中的电磁场强度矢量，则这些方程可被写作

$$
\nabla \cdot \mathbf{e}(\mathbf{r}, t) = \frac{1}{\epsilon_0} \rho(\mathbf{r}, t), \quad \nabla \times \mathbf{e}(\mathbf{r}, t) = -\frac{\partial \mathbf{b}(\mathbf{r}, t)}{\partial t},
$$
$$
\nabla \cdot \mathbf{b}(\mathbf{r}, t) = 0, \quad \nabla \times \mathbf{b}(\mathbf{r}, t) = \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{e}(\mathbf{r}, t)}{\partial t}.
$$

在引入连续媒介质后，其中的电子和原子核的运动都会对电荷密度 $\rho(\mathbf{r}, t)$ 以及电流密度 $\mathbf{j}(\mathbf{r}, t)$ 带来影响，而这些影响无论是在空间尺度上还是时间尺度上都是存在剧烈涨落的。因此，不可避免的，我们需要对之进行统计处理。

人们发现，在许多情况下仅需对电子和原子核的运动所带来影响进行空间上的平均即可。这一点从计算的角度看是十分重要的。

事实上，对于涨落效应进行时间平均是一件困难的事情。为了克服这一困难，人们往往只能先将含时问题通过傅立叶变换（Fourier transformation）将其转换成一个以频率为自变量的问题，然后进行处理，而很少直接使用对于时间求平均的办法。

因此，在下面的讨论中，若无特殊声明，对于各个物理的求平均将被理解为是指的对于空间中一个以 $\mathbf{r}$ 点为中心的宏观无穷小，但微观很大的区域 $\Delta\Omega(\mathbf{r})$ 进行的空间平均。例如，我们将电场强度矢量 $\mathbf{e}(\bar{\mathbf{r}}, t)$ 对于空间自由度的平均值记作
$$
\mathbf{E}(\mathbf{r}, t) \equiv \langle \mathbf{e}(\bar{\mathbf{r}}, t) \rangle \equiv \frac{1}{V_{\Delta\Omega}} \int \int \int_{\Delta\Omega(\mathbf{r})} \mathbf{e}(\bar{x}, \bar{y}, \bar{z}, t) d\bar{x} d\bar{y} d\bar{z}.
$$

这里，$V_{\Delta\Omega}$ 为区域 $\Delta\Omega(\mathbf{r})$ 的体积。

对于麦克斯韦方程组中的方程求平均后，我们有

$$
\nabla \cdot \langle \mathbf{e}(\bar{\mathbf{r}}, t) \rangle = \nabla \cdot \mathbf{E}(\mathbf{r}, t) = \frac{1}{\epsilon_0} \langle \rho(\bar{\mathbf{r}}, t) \rangle \equiv \frac{1}{\epsilon_0} \overline{\rho}(\mathbf{r}, t)
$$
$$
\nabla \times \langle \mathbf{e}(\bar{\mathbf{r}}, t) \rangle = \nabla \times \mathbf{E}(\mathbf{r}, t) = -\frac{\partial \langle \mathbf{b}(\bar{\mathbf{r}}, t) \rangle}{\partial t} = -\frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t},
$$
$$
\nabla \cdot \langle \mathbf{b}(\bar{\mathbf{r}}, t) \rangle = \nabla \cdot \mathbf{B}(\mathbf{r}, t) = 0,
$$
$$
\begin{aligned}
\nabla \times \langle \mathbf{b}(\bar{\mathbf{r}}, t) \rangle &= \nabla \times \mathbf{B}(\mathbf{r}, t) = \mu_0 \langle \mathbf{j}(\bar{\mathbf{r}}, t) \rangle + \mu_0 \epsilon_0 \frac{\partial \langle \mathbf{e}(\bar{\mathbf{r}}, t) \rangle}{\partial t}\\\\
&= \mu_0 \mathbf{J}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t}.
\end{aligned}
$$
要继续简化这些方程的关键一步在于意识到，出现在这些方程里的平均电荷密度 $\overline{\rho}(\mathbf{r}, t)$ 和平均电流密度 $\mathbf{J}(\mathbf{r}, t)$ 可以分为“自由的”（free）和“束缚的”（bounded）两部分，即我们有

$$
\overline{\rho}(\mathbf{r}, t) = \langle \rho(\bar{\mathbf{r}}, t) \rangle = \rho_f(\mathbf{r}, t) + \rho_b(\mathbf{r}, t),
$$

以及

$$
\mathbf{J}(\mathbf{r}, t) = \langle \mathbf{j}(\bar{\mathbf{r}}, t) \rangle = \mathbf{J}_f(\mathbf{r}, t) + \mathbf{J}_b(\mathbf{r}, t).
$$

为了说明这一分拆的合理性，让我们取连续媒介质静止的参照系为实验室系。那么，在这个参照系中，可以在介质中移动一个宏观尺度距离的电荷即称为“自由电荷”，由它们形成的电流则称为“自由电流”。与之对应的，只能局限在某个给定点 $\mathbf{r}$ 周围微观尺度区域内运动的电荷则称为“束缚电荷”，而由它们形成的电流则称为“束缚电流”。

为什么会出现束缚电荷和束缚电流呢？我们知道，在自然界存在两类电介质。一类介质的分子中的正电荷密度的中心和负电荷密度的中心相重合，没有固定的非零电偶极矩，例如氢气（H₂）分子，称为无极分子。而在另外一类介质的分子中的正电荷密度的中心和负电荷密度的中心不重合，从而导致一个固有的电偶极矩，例如水（H₂O）分子，称为极化分子。

但即使是后者，在周围环境的温度不太低时，由于分子热运动的影响，各个极化分子的电偶极矩矢量也会是杂乱无章地取向的。这使得在整块连续媒介质内分子的固有电偶极矩的平均值仍为零。但在有外加电场存在的情况下，无极分子中的正电荷和负电荷的位置会被移动，使得它们的密度中心不再重合，从而产生不为零的电偶极矩。而极化分子的固有电偶极矩的趋向则会发生改变，指向一个共同的方向。

无论哪种情况，外加电场的引入都会诱导宏观电偶极矩分布的出现，导致一个非零的束缚电荷密度分布 $\rho_b(\mathbf{r}, t)$。同理，介质分子中的电子运动会形成微观电流环，在没有外加磁场的情况下，它们各自的取向也是杂乱无章的，故不会形成宏观电流密度。而在有外加磁场的情况下，这些分子电流环的取向会变得一致，从而导致宏观电流密度，即束缚电流密度的出现。

若上述解释是合理的，我们期待束缚电荷密度 $\rho_b(\mathbf{r}, t)$ 将会与平均极化密度（electric polarization density）矢量

$$
\mathbf{P}(\mathbf{r}, t) = \lim_{V_{\Delta\Omega} \to 0} \frac{\sum_i \mathbf{P}_i(t)}{V_{\Delta\Omega}}
$$

有关。这里，$\mathbf{r}$ 为介质中的一点，而 $\Delta\Omega$ 是以 $\mathbf{r}$ 为中心的一个小区域，$V_{\Delta\Omega}$ 为它的体积。上式中的求和是对 $\Delta\Omega$ 中各个分子的电偶极矩进行的。而束缚电流密度 $\mathbf{J}_b(\mathbf{r}, t)$ 将会与平均磁化密度（magnetization）矢量

$$
\mathbf{M}(\mathbf{r}, t) = \lim_{V_{\Delta\Omega} \to 0} \frac{\sum_i \mathbf{m}_i(t)}{V_{\Delta\Omega}}
$$

有关。此式中的分子磁矩（magnetic moment）被定义作

> $\mathbf{m}_i = I_i \mathbf{a}_i =$ 第 $i$ 个分子中的电流 $\times$ 第 $i$ 个分子中电流回路所围的面积矢量.

下面，我们将推导这些关系。

先考虑束缚电荷密度 $\rho_b(\mathbf{r}, t)$ 与极化密度矢量 $\mathbf{P}(\mathbf{r}, t)$ 之间的关系。首先，电介质内部的全部的束缚电荷在有外加电场的情况下仍然满足中性条件，即

$$
\int \int \int_\Omega \rho_b(\bar{\mathbf{r}}, t) d\bar{x} d\bar{y} d\bar{z} = 0.
$$

这里，$\Omega$ 为电介质所占据的空间区域。另一方面，任取一个在区域 $\Omega$ 外为零的矢量场 $\mathbf{G}(\mathbf{r}, t)$，我们都

$$
0 = \oint \oint_{S_\Omega} \mathbf{G} \cdot d\mathbf{S} = \int \int \int_\Omega \mathrm{div} \mathbf{G}(\bar{x}, \bar{y}, \bar{z}, t) d\bar{x} d\bar{y} d\bar{z}.
$$
因此，

$$
0 = \int \int \int_\Omega \rho_b(\bar{\mathbf{r}}, t) d\bar{x} d\bar{y} d\bar{z} = \oint \oint_{S_\Omega} \mathbf{G} \cdot d\mathbf{S} = \int \int \int_\Omega \mathrm{div} \mathbf{G}(\bar{x}, \bar{y}, \bar{z}, t) d\bar{x} d\bar{y} d\bar{z}
$$

成立。由此，我们期待可以将 $\rho_b(\mathbf{r}, t)$ 写成

$$
\rho_b(\mathbf{r}, t) = \mathrm{div} \mathbf{G}(\mathbf{r}, t)
$$

的形式，而 $\mathbf{G}(\mathbf{r}, t)$ 是一个在区域 $\Omega$ 外为零的矢量场。我们要证明，这一猜想是对的，即我们有

$$
\rho_b(\mathbf{r}, t) = -\mathrm{div} \mathbf{P}(\mathbf{r}, t),
$$

而 $\mathbf{P}(\mathbf{r}, t)$ 是电介质的极化密度矢量。

为此，让我们考虑积分

$$
\mathcal{P}_{\text{dipole moment}} = \int \int \int_\Omega \rho_b(\bar{\mathbf{r}}, t) \bar{\mathbf{r}} d\bar{x} d\bar{y} d\bar{z} \equiv \int \int \int_\Omega \rho_b(\bar{x}, \bar{y}, \bar{z}, t) (\bar{x}\mathbf{i} + \bar{y}\mathbf{j} + \bar{z}\mathbf{k}) d\bar{x} d\bar{y} d\bar{z}
$$

显然，$\mathcal{P}_{\text{偶极矩}}$ 可以解释作占据空间区域 $\Omega$ 的连续电媒介质的总电偶极矩（electric dipole moment）。现将
$$
\rho_b(\mathbf{r}, t) = \mathrm{div} \mathbf{G}(\mathbf{r}, t)
$$
代入这一定义式后，我们得到

$$
\begin{aligned}
\mathcal{P}_{\text{dipole moment}} &= \int \int \int_\Omega \mathrm{div} \mathbf{G}(\bar{\mathbf{r}}, t) (\bar{x}\mathbf{i} + \bar{y}\mathbf{j} + \bar{z}\mathbf{k}) d\bar{x} d\bar{y} d\bar{z}\\\\
&= \int \int \int_\Omega \left( \frac{\partial G_x(\bar{x}, \bar{y}, \bar{z}, t)}{\partial x} + \frac{\partial G_y(\bar{x}, \bar{y}, \bar{z}, t)}{\partial y} + \frac{\partial G_z(\bar{x}, \bar{y}, \bar{z}, t)}{\partial z} \right) (\bar{x}\mathbf{i} + \bar{y}\mathbf{j} + \bar{z}\mathbf{k}) d\bar{x} d\bar{y} d\bar{z}\\\\
&= \left( \int \int \int_\Omega \bar{x} \frac{\partial G_x}{\partial x} d\bar{x} d\bar{y} d\bar{z} + \int \int \int_\Omega \bar{x} \frac{\partial G_y}{\partial y} d\bar{x} d\bar{y} d\bar{z} + \int \int \int_\Omega \bar{x} \frac{\partial G_z}{\partial z} d\bar{x} d\bar{y} d\bar{z} \right) \mathbf{i}\\\\
&+ \left( \int \int \int_\Omega \bar{y} \frac{\partial G_x}{\partial x} d\bar{x} d\bar{y} d\bar{z} + \int \int \int_\Omega \bar{y} \frac{\partial G_y}{\partial y} d\bar{x} d\bar{y} d\bar{z} + \int \int \int_\Omega \bar{y} \frac{\partial G_z}{\partial z} d\bar{x} d\bar{y} d\bar{z} \right) \mathbf{j}\\\\
&+ \left( \int \int \int_\Omega \bar{z} \frac{\partial G_x}{\partial x} d\bar{x} d\bar{y} d\bar{z} + \int \int \int_\Omega \bar{z} \frac{\partial G_y}{\partial y} d\bar{x} d\bar{y} d\bar{z} + \int \int \int_\Omega \bar{z} \frac{\partial G_z}{\partial z} d\bar{x} d\bar{y} d\bar{z} \right) \mathbf{k}\\\\
&= \left( \int \int \int_\Omega \bar{x} \frac{\partial G_x}{\partial x} d\bar{x} d\bar{y} d\bar{z} \right) \mathbf{i} + \left( \int \int \int_\Omega \bar{y} \frac{\partial G_y}{\partial y} d\bar{x} d\bar{y} d\bar{z} \right) \mathbf{j} + \left( \int \int \int_\Omega \bar{z} \frac{\partial G_z}{\partial z} d\bar{x} d\bar{y} d\bar{z} \right) \mathbf{k}\\\\
&= \left( -\int \int \int_\Omega G_x d\bar{x} d\bar{y} d\bar{z} \right) \mathbf{i} + \left( -\int \int \int_\Omega G_y d\bar{x} d\bar{y} d\bar{z} \right) \mathbf{j} + \left( -\int \int \int_\Omega G_z d\bar{x} d\bar{y} d\bar{z} \right) \mathbf{k}\\\\
&= \int \int \int_\Omega (-\mathbf{G}(\bar{x}, \bar{y}, \bar{z}, t)) d\bar{x} d\bar{y} d\bar{z}.
\end{aligned}
$$
显然，根据定义，$-\mathbf{G}(\bar{x}, \bar{y}, \bar{z}, t)$ 可以解释作极化密度矢量，即

$$
-\mathbf{G}(\bar{x}, \bar{y}, \bar{z}, t) = \mathbf{P}(\bar{x}, \bar{y}, \bar{z}, t)
$$

成立。因此，我们证明了公式
$$
\rho_b(\mathbf{r}, t) = -\mathrm{div} \mathbf{P}(\mathbf{r}, t),
$$
接下来，我们考虑束缚电流密度 $\mathbf{J}_b(\mathbf{r}, t)$ 与磁化密度矢量 $\mathbf{M}(\mathbf{r}, t)$ 之间的关系。首先，我们注意到，$\mathbf{J}_b(\mathbf{r}, t)$ 实际上可以分成两部分

$$
\mathbf{J}_b(\mathbf{r}, t) = \mathbf{J}_b^{\mathrm{P}}(\mathbf{r}, t) + \mathbf{J}_b^{\mathrm{M}}(\mathbf{r}, t).
$$

其中第一项来自束缚电荷（包括束缚电子和原子核的电荷）的运动的贡献。取以介质中一点 $\mathbf{r}$ 为中心的一个小区域 $\Delta\Omega(\mathbf{r})$，则束缚束缚电流密度 $\mathbf{J}_b^{\mathrm{P}}(\mathbf{r}, t)$ 可以写作

$$
\mathbf{J}_b^{\mathrm{P}}(\mathbf{r}, t) = \lim_{V_{\Delta\Omega(r)} \to 0} \frac{\sum_i q_i \mathbf{v}_i}{V_{\Delta\Omega(r)}} = \frac{\partial}{\partial t} \left( \lim_{V_{\Delta\Omega(r)} \to 0} \frac{\sum_i q_i \mathbf{r}_i}{V_{\Delta\Omega(r)}} \right) = \frac{\partial \mathbf{P}(\mathbf{r}, t)}{\partial t}.
$$

上式中的求和是对 $\Delta\Omega(\mathbf{r})$ 中的所有电荷 $q_i$ 及其速度 $\mathbf{v}_i$ 进行的。而 $\mathbf{J}_b^{\mathrm{M}}(\mathbf{r}, t)$ 则是来自分子内部电子的环路运动形成的分子电流环的贡献。因此，对于介质内的任何一个封闭曲面 $S$，我们期待

$$
\oint \oint_S \mathbf{J}_b^{\mathrm{M}}(\mathbf{r}, t) \cdot d\mathbf{S} = 0
$$

成立。又利用高斯定理，我们得到

$$
0 = \oint \oint_S \mathbf{J}_b^{\mathrm{M}}(\mathbf{r}, t) \cdot d\mathbf{S} = \int \int \int_\Omega \mathrm{div} \mathbf{J}_b^{\mathrm{M}}(x, y, z, t) dx dy dz.
$$

这导致了

$$
\mathrm{div} \mathbf{J}_b^{\mathrm{M}}(x, y, z, t) = 0
$$

在介质内的每一点都成立。因此，我们期待 $\mathbf{J}_b^{\mathrm{M}}(x, y, z, t)$ 可以写成

$$
\mathbf{J}_b^{\mathrm{M}}(x, y, z, t) = \nabla \times \mathbf{K}(x, y, z, t),
$$

而 $\mathbf{K}(x, y, z, t)$ 是一个在连续媒介质外为零的矢量场。接下来，我们要证明，$\mathbf{K}(x, y, z, t)$ 是存在的，且实际上是磁化密度矢量 $\mathbf{M}(x, y, z, t)$。

为此，让我们考虑积分

$$
\mathcal{M}_{\text{magnetic dipole moment}} = \frac{1}{2} \int \int \int_\Omega \bar{\mathbf{r}} \times \mathbf{J}_b^{\mathrm{M}}(\bar{x}, \bar{y}, \bar{z}, t) d\bar{x} d\bar{y} d\bar{z}.
$$

显然，这是占据空间区域 $\Omega$ 的介质的总磁矩。代入
$$
\mathbf{J}_b^{\mathrm{M}}(x, y, z, t) = \nabla \times \mathbf{K}(x, y, z, t),
$$
后，我们有

$$
\begin{aligned}
\mathcal{M}_{\text{magnetic dipole moment}} &= \frac{1}{2} \int \int \int_\Omega \bar{\mathbf{r}} \times \mathbf{J}_b^{\mathrm{M}}(\bar{x}, \bar{y}, \bar{z}, t) d\bar{x} d\bar{y} d\bar{z} \\\\
&= \frac{1}{2} \int \int \int_\Omega \bar{\mathbf{r}} \times (\nabla \times \mathbf{K}(\bar{x}, \bar{y}, \bar{z}, t)) d\bar{x} d\bar{y} d\bar{z}.
\end{aligned}
$$

再利用矢量场满足的恒等式

$$
\nabla(\mathbf{K} \cdot \mathbf{r}) = (\mathbf{K} \cdot \nabla)\mathbf{r} + (\mathbf{r} \cdot \nabla)\mathbf{K} + \mathbf{r} \times (\nabla \times \mathbf{K}) + \mathbf{K} \times (\nabla \times \mathbf{r}),
$$

我们有

$$
\begin{aligned}
\mathbf{r} \times (\nabla \times \mathbf{K}) &= \nabla(\mathbf{K} \cdot \mathbf{r}) - (\mathbf{K} \cdot \nabla)\mathbf{r} - (\mathbf{r} \cdot \nabla)\mathbf{K} - \mathbf{K} \times (\nabla \times \mathbf{r}) \\\\
&= \nabla(\mathbf{K} \cdot \mathbf{r}) - (\mathbf{K} \cdot \nabla)\mathbf{r} - (\mathbf{r} \cdot \nabla)\mathbf{K} \\\\
&= \nabla(\mathbf{K} \cdot \mathbf{r}) - \mathbf{K} - (\mathbf{r} \cdot \nabla)\mathbf{K}.
\end{aligned}
$$

将之代入 $\mathcal{M}_{\text{magnetic dipole moment}}$ 的表达式后，我们得到

$$
\begin{aligned}
\mathcal{M}_{\text{magnetic dipole moment}} &= \frac{1}{2} \int \int \int_\Omega \bar{\mathbf{r}} \times (\nabla_{\bar{\mathbf{r}}} \times \mathbf{K}) d\bar{x} d\bar{y} d\bar{z} \\\\
&= \frac{1}{2} \int \int \int_\Omega \nabla_{\bar{\mathbf{r}}}(\mathbf{K} \cdot \bar{\mathbf{r}}) dV - \frac{1}{2} \int \int \int_\Omega \mathbf{K} dV - \frac{1}{2} \int \int \int_\Omega (\bar{\mathbf{r}} \cdot \nabla_{\bar{\mathbf{r}}})\mathbf{K} dV \\\\
&= -\frac{1}{2} \int \int \int_\Omega \mathbf{K} dV - \frac{1}{2} \int \int \int_\Omega \left( \bar{x} \frac{\partial \mathbf{K}}{\partial \bar{x}} + \bar{y} \frac{\partial \mathbf{K}}{\partial \bar{y}} + \bar{z} \frac{\partial \mathbf{K}}{\partial \bar{z}} \right) d\bar{x} d\bar{y} d\bar{z} \\\\
&= -\frac{1}{2} \int \int \int_\Omega \mathbf{K} dV + \frac{1}{2} \int \int \int_\Omega (\mathbf{K} + \mathbf{K} + \mathbf{K}) d\bar{x} d\bar{y} d\bar{z} \\\\
&= \int \int \int_\Omega \mathbf{K}(\bar{x}, \bar{y}, \bar{z}, t) d\bar{x} d\bar{y} d\bar{z}.
\end{aligned}
$$

因此，根据磁化密度矢量 $\mathbf{M}(\bar{x}, \bar{y}, \bar{z}, t)$ 的定义，我们有

$$
\mathbf{K}(\bar{x}, \bar{y}, \bar{z}, t) = \mathbf{M}(\bar{x}, \bar{y}, \bar{z}, t).
$$

现在，让我们重新考虑平均后的 Maxwell 方程组。先看第一个方程。我们有

$$
\nabla \cdot \mathbf{E}(\mathbf{r}, t) = \frac{1}{\epsilon_0} \langle \rho(\mathbf{r}', t) \rangle = \frac{1}{\epsilon_0} \rho_f(\mathbf{r}, t) + \frac{1}{\epsilon_0} \rho_b(\mathbf{r}, t).
$$

代入
$$
\rho_b(\mathbf{r}, t) = -\mathrm{div} \mathbf{P}(\mathbf{r}, t),
$$
后，我们可以将之重写作

$$
\nabla \cdot \mathbf{E}(\mathbf{r}, t) = \frac{1}{\epsilon_0} \rho_f(\mathbf{r}, t) - \frac{1}{\epsilon_0} \nabla \cdot \mathbf{P}(\mathbf{r}, t),
$$
或是

$$
\nabla \cdot (\epsilon_0 \mathbf{E}(\mathbf{r}, t) + \mathbf{P}(\mathbf{r}, t)) = \rho_f(\mathbf{r}, t).
$$

令

$$
\mathbf{D}(\mathbf{r}, t) = \epsilon_0 \mathbf{E}(\mathbf{r}, t) + \mathbf{P}(\mathbf{r}, t),
$$

则上式化为

$$
\nabla \cdot \mathbf{D}(\mathbf{r}, t) = \rho_f(\mathbf{r}, t).
$$

文献中，$\mathbf{D}(\mathbf{r}, t)$ 被称为电感应强度（electric induction）矢量或电位移（electric displacement）矢量。

当电场强度 $\mathbf{E}(\mathbf{r}, t)$ 不太强时，且连续介质是各向同性的，极化密度矢量 $\mathbf{P}(\mathbf{r}, t)$ 一般可以写作

$$
\mathbf{P}(\mathbf{r}, t) = \chi_e \epsilon_0 \mathbf{E}(\mathbf{r}, t),
$$

而 $\chi_e$ 被称为介质的极化率（electric susceptibility）。由此，我们得到电感应强度矢量 $\mathbf{D}(\mathbf{r}, t)$ 与电场强度矢量 $\mathbf{E}(\mathbf{r}, t)$ 之间的关系

$$
\mathbf{D}(\mathbf{r}, t) = \epsilon_0 \mathbf{E}(\mathbf{r}, t) + \chi_e \epsilon_0 \mathbf{E}(\mathbf{r}, t) = \epsilon_0 (1 + \chi_e) \mathbf{E}(\mathbf{r}, t) = \epsilon_0 \epsilon_r \mathbf{E}(\mathbf{r}, t) = \epsilon \mathbf{E}(\mathbf{r}, t).
$$

比例系数 $\epsilon_r$ 被称为相对电容率（relative electric permittivity），而比例系数 $\epsilon = \epsilon_r \epsilon_0$ 被称为介质的电容率（electric permittivity）或介电常数（dielectric constant）。当介质是各向异性的（例如某些晶体），或者电场强度矢量较大时（例如在激光场中），这一关系会比较复杂。在本课程中，我们不去讨论这些情况。

接下来，我们化简平均后的 Maxwell 方程组中的第四个方程。我们有

$$
\begin{aligned}
\nabla \times \mathbf{B}(\mathbf{r}, t) &= \mu_0 \langle \mathbf{j}(\mathbf{r}, t) \rangle + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} \\\\
&= \mu_0 \left( \mathbf{J}_f(\mathbf{r}, t) + \mathbf{J}_b^{\mathrm{P}}(\mathbf{r}, t) + \mathbf{J}_b^{\mathrm{M}}(\mathbf{r}, t) \right) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} \\\\
&= \mu_0 \mathbf{J}_f(\mathbf{r}, t) + \mu_0 \frac{\partial \mathbf{P}(\mathbf{r}, t)}{\partial t} + \mu_0 \nabla \times \mathbf{M}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t}.
\end{aligned}
$$

将上式右边的第三项移项，并将第二项和第四项合并后，我们得到

$$
\nabla \times (\mathbf{B}(\mathbf{r}, t) - \mu_0 \mathbf{M}(\mathbf{r}, t)) = \mu_0 \mathbf{J}_f(\mathbf{r}, t) + \mu_0 \frac{\partial}{\partial t} (\epsilon_0 \mathbf{E}(\mathbf{r}, t) + \mathbf{P}(\mathbf{r}, t)).
$$

引入新的矢量场

$$
\mathbf{H}(\mathbf{r}, t) = \frac{1}{\mu_0} \mathbf{B}(\mathbf{r}, t) - \mathbf{M}(\mathbf{r}, t),
$$

并利用电感应强度矢量 $\mathbf{D}(\mathbf{r}, t)$ 的定义，我们可将此式重新写作

$$
\nabla \times \mathbf{H}(\mathbf{r}, t) = \mathbf{J}_f(\mathbf{r}, t) + \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t}.
$$

在文献中，$\mathbf{H}(\mathbf{r}, t)$ 被称为磁场强度（magnetic field）矢量。当连续介质是各向同性的时，磁化密度矢量 $\mathbf{M}(\mathbf{r}, t)$ 一般可以写作

$$
\mathbf{M}(\mathbf{r}, t) = \chi_m \mathbf{H}(\mathbf{r}, t),
$$

而 $\chi_m$ 被称为介质的磁化率（magnetic susceptibility）。由此，我们得到磁感应强度矢量 $\mathbf{B}(\mathbf{r}, t)$ 与磁场强度矢量 $\mathbf{H}(\mathbf{r}, t)$ 之间的关系

$$
\mathbf{H}(\mathbf{r}, t) = \frac{1}{\mu_0} \mathbf{B}(\mathbf{r}, t) - \chi_m \mathbf{H}(\mathbf{r}, t),
$$

或是

$$
\mathbf{B}(\mathbf{r}, t) = \mu_0 (1 + \chi_m) \mathbf{H}(\mathbf{r}, t) = \mu_0 \mu_r \mathbf{H}(\mathbf{r}, t) = \mu \mathbf{H}(\mathbf{r}, t).
$$

文献中，$\mu_r$ 被称为介质的相对磁导率（relative magnetic permeability），而 $\mu$ 则被称为介质的磁导率（magnetic permeability）。

现将
$$
\begin{aligned}
\nabla \cdot \mathbf{D}(\mathbf{r}, t) &= \rho_f(\mathbf{r}, t).\\\\
\nabla \times \mathbf{H}(\mathbf{r}, t) &= \mathbf{J}_f(\mathbf{r}, t) + \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t}.
\end{aligned}
$$
以及平均后的 Maxwell 方程组中的第二和三式合写在一起，我们最后得到修改后的在连续介质内的麦克斯韦方程组

$$
\begin{aligned}
\nabla \cdot \mathbf{D}(\mathbf{r}, t) &= \rho_f(\mathbf{r}, t), & \nabla \times \mathbf{E}(\mathbf{r}, t) &= -\frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}, \\\\
\nabla \cdot \mathbf{B}(\mathbf{r}, t) &= 0, & \nabla \times \mathbf{H}(\mathbf{r}, t) &= \mathbf{J}_f(\mathbf{r}, t) + \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t}.
\end{aligned}
$$

同时实验上也观察到，在低频电磁场中，$\mathbf{J}_f(\mathbf{r}, t)$ 是与电场强度矢量 $\mathbf{E}(\mathbf{r}, t)$ 是成正比的，即

$$
\mathbf{J}_f(\mathbf{r}, t) = \sigma \mathbf{E}(\mathbf{r}, t).
$$

$\sigma$ 称为介质的电导率（conductivity），而此公式称为欧姆定律（Ohm's law）。

## Part 2 电磁场的边值关系

我们上面所讨论的是在一个同质介质中电磁场的产生和传播的问题。在实际应用中，我们所遇到的情况往往是整个空间是由不同质的介质占据的，例如空气和水。此时，为了决定电磁场在空间的分布，除了解麦克斯韦方程之外，我们还需考虑在这些介质彼此之间的分界面上，电磁场强度矢量是如何改变的。

以电场强度矢量为例。我们考虑一个横跨两种介质分界面的圆柱体小盒子。将方程

$$
\mathrm{div} \mathbf{D}(x, y, z, t) = \rho_f(x, y, z, t)
$$

的两边对于小盒子所占的区域 $\Omega$ 求积分，并使用高斯定理后，我们有

$$
\int \int_\Omega \mathrm{div} \mathbf{D}(x, y, z, t) dx dy dz = \oint \oint_S \mathbf{D} \cdot d\mathbf{S} = \int \int_\Omega \rho_f(x, y, z, t) dx dy dz.
$$

显然，当盒子的高度 $h$ 以及上、下端面的半径 $\delta$ 都很小时，上式可以近似写作

$$
\int \int_{\text{top surface}} \mathbf{D} \cdot d\mathbf{S} + \int \int_{\text{lower surface}} \mathbf{D} \cdot d\mathbf{S} + \int \int_{\text{side surface}} \mathbf{D} \cdot d\mathbf{S} \cong \sigma_f(\mathbf{r}, t)(\pi \delta^2) + Q_f.
$$

这里，$\sigma_f(\mathbf{r}, t)$ 为盒子中心处两种介质分界面上的自由面电荷密度，而 $Q_f$ 为盒子内的体电荷密度的体积分。若我们规定，上表面处的外法线方向为正，侧表面的外法线方向记作 $\mathbf{t}$，则上式又可被进一步写作

$$
D_{2n}(\pi \delta^2) - D_{1n}(\pi \delta^2) + D_t(2\pi \delta h) \cong \sigma_f(\mathbf{r}, t)(\pi \delta^2) + Q_f.
$$

现在，我们令 $h \to 0$。那么，$Q_f \to 0$，且上式左边的第三项亦趋近于零。因此，上式化简为

$$
D_{2n}(\pi \delta^2) - D_{1n}(\pi \delta^2) \cong \sigma_f(\mathbf{r}, t)(\pi \delta^2),
$$

或是

$$
D_{2n} - D_{1n} \cong \sigma_f(\mathbf{r}, t).
$$

我们再令 $\delta \to 0$，即可得到

$$
D_{2n}(\mathbf{r}, t) - D_{1n}(\mathbf{r}, t) = \sigma_f(\mathbf{r}, t).
$$

此即联系两种不同介质中的电感应强度矢量的沿分界面的法向分量的边值关系。将类似的推导过程应用到方程

$$
\mathrm{div} \mathbf{B}(\mathbf{r}, t) = 0,
$$

我们立刻可得

$$
B_{2n}(\mathbf{r}, t) - B_{1n}(\mathbf{r}, t) = 0,
$$

或是

$$
B_{2n}(\mathbf{r}, t) = B_{1n}(\mathbf{r}, t).
$$

也就是说，磁感应强度矢量在两种不同介质的分界面处的法向分量是连续的。

用同样的办法，我们也可以很容易地得到电场强度矢量 $\mathbf{E}(\mathbf{r}, t)$，电极化密度矢量 $\mathbf{P}(\mathbf{r}, t)$，磁场强度矢量 $\mathbf{H}(\mathbf{r}, t)$ 以及磁化密度矢量 $\mathbf{M}(\mathbf{r}, t)$ 在两种不同介质的分界面上的法向分量所满足的边值关系。以电极化密度矢量 $\mathbf{P}(\mathbf{r}, t)$ 为例。由于

$$
\mathrm{div} \mathbf{P}(\mathbf{r}, t) = -\rho_b(\mathbf{r}, t),
$$

我们可以推得

$$
P_{2n}(\mathbf{r}, t) - P_{1n}(\mathbf{r}, t) = -\sigma_b(\mathbf{r}, t)
$$

在两种不同介质的分界面处成立。

接下来，我们研究电磁场强度矢量在连续介质分界面上的切向分量所满足的边值条件。

以磁场强度矢量 $\mathbf{H}(\mathbf{r}, t)$ 为例。将方程
$$
\nabla \times \mathbf{H}(\mathbf{r}, t) = \mathbf{J}_f(\mathbf{r}, t) + \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t}
$$

的两边沿垂直于 ${\alpha}_f$ (自由电流密度 $\mathbf{K}_f$ 的单位矢量) 的小矩形围道进行积分，并利用斯托克斯公式，我们得到

$$
\oint_C \mathbf{H} \cdot d\mathbf{l} = \int \int_S \nabla \times \mathbf{H} \cdot d\mathbf{S} = \int \int_S \mathbf{J}_f \cdot d\mathbf{S} + \int \int_S \frac{\partial \mathbf{D}}{\partial t} \cdot d\mathbf{S}.
$$

这里，$S$ 代表由围道所界定的小矩形。若围道的长度为为 $\Delta l$，宽度为 $\Delta h$，当 $\Delta h \cong 0$ 时，我们近似有

$$
\begin{aligned}
\oint_C \mathbf{H} \cdot d\mathbf{l} &= \int_{C_1} \mathbf{H} \cdot d\mathbf{l} + \int_{C_2} \mathbf{H} \cdot d\mathbf{l} + \int_{H_1} \mathbf{H} \cdot d\mathbf{l} + \int_{H_2} \mathbf{H} \cdot d\mathbf{l} \\\\
&\cong J_{\sigma f}^{t_1}(\mathbf{r}, t)\Delta l + J_{\rho_f}^{t_1}(\mathbf{r}, t)\Delta l\Delta h + \int \int_S \frac{\partial \mathbf{D}}{\partial t} \cdot d\mathbf{S}.
\end{aligned}
$$

这里，$\mathbf{r}$ 代表小矩形中分界面上的一点，而 $J_{\sigma f}^{t_1}(\mathbf{r}, t)\Delta l$ 和 $J_{\rho_f}^{t_1}(\mathbf{r}, t)\Delta l\Delta h$ 分别为有由自由面电流密度的切向分量和自由体电流切向分量给出的贡献。

现在，我们令 $\Delta h \to 0$。由于磁场强度矢量 $\mathbf{H}$ 在分界面两边的介质中是有限的，电感应强度矢量 $\mathbf{D}$ 对时间的导数亦是有限的，故在此极限下上式可以简化为

$$
\int_{C_1} \mathbf{H} \cdot d\mathbf{l} + \int_{C_2} \mathbf{H} \cdot d\mathbf{l} \cong H_{2t_2}(\mathbf{r}, t)\Delta l - H_{1t_2}(\mathbf{r}, t)\Delta l \cong J_{\sigma f}^{t_1}(\mathbf{r}, t)\Delta l,
$$

或是

$$
H_{2t_2}(\mathbf{r}, t) - H_{1t_2}(\mathbf{r}, t) \cong J_{\sigma f}^{t_1}(\mathbf{r}, t).
$$

再令 $\Delta l \to 0$ 后，我们得到

$$
H_{2t_2}(\mathbf{r}, t) - H_{1t_2}(\mathbf{r}, t) = J_{\sigma f}^{t_1}(\mathbf{r}, t).
$$

此即磁场强度矢量 $\mathbf{H}(\mathbf{r}, t)$ 在介质 1 和介质 2 的分界面上的切向分量所满足的边值关系。

类似的论证也可以应用到方程

$$
\nabla \times \mathbf{E}(\mathbf{r}, t) = -\frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}.
$$

因此我们得到

$$
E_{2t}(\mathbf{r}, t) - E_{1t}(\mathbf{r}, t) = 0,
$$

或是

$$
E_{2t}(\mathbf{r}, t) = E_{1t}(\mathbf{r}, t).
$$

引进自介质 1 指向介质 2 的单位法线矢量 $\mathbf{e}_n$ 后，这些边值关系可以写成如下的紧凑形式

$$
\begin{aligned}
\mathbf{e}_n \times (\mathbf{E}_2 - \mathbf{E}_1) &= 0, & \mathbf{e}_n \times (\mathbf{H}_2 - \mathbf{H}_1) &= J_{\sigma f}^{t}(\mathbf{r}, t), \\\\
\mathbf{e}_n \cdot (\mathbf{D}_2 - \mathbf{D}_1) &= \sigma_f(\mathbf{r}, t), & \mathbf{e}_n \cdot (\mathbf{B}_2 - \mathbf{B}_1) &= 0.
\end{aligned}
$$

这些关系在解决实际的电磁场强度分布问题时是十分有用的。

## Part 3 电磁场的能量和能量流

将方程
$$
\nabla \times \mathbf{H}(\mathbf{r}, t) = \mathbf{J}_f(\mathbf{r}, t) + \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t}
$$
的两边与电场强度矢量做点乘后，我们得到

$$
\mathbf{E}(\mathbf{r}, t) \cdot (\nabla \times \mathbf{H}(\mathbf{r}, t)) = \mathbf{E}(\mathbf{r}, t) \cdot \mathbf{J}_f(\mathbf{r}, t) + \mathbf{E}(\mathbf{r}, t) \cdot \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t}.
$$

再利用恒等式

$$
\mathbf{E}(\mathbf{r}, t) \cdot (\nabla \times \mathbf{H}(\mathbf{r}, t)) = -\nabla \cdot (\mathbf{E}(\mathbf{r}, t) \times \mathbf{H}(\mathbf{r}, t)) + \mathbf{H}(\mathbf{r}, t) \cdot (\nabla \times \mathbf{E}(\mathbf{r}, t)),
$$

可以将这一方程改写为

$$
-\nabla \cdot (\mathbf{E}(\mathbf{r}, t) \times \mathbf{H}(\mathbf{r}, t)) + \mathbf{H}(\mathbf{r}, t) \cdot (\nabla \times \mathbf{E}(\mathbf{r}, t)) = \mathbf{E}(\mathbf{r}, t) \cdot \mathbf{J}_f(\mathbf{r}, t) + \mathbf{E}(\mathbf{r}, t) \cdot \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t}.
$$

将方程

$$
\nabla \times \mathbf{E}(\mathbf{r}, t) = -\frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}
$$

代入后，我们进一步得到

$$
-\nabla \cdot (\mathbf{E}(\mathbf{r}, t) \times \mathbf{H}(\mathbf{r}, t)) - \mathbf{H}(\mathbf{r}, t) \cdot \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} = \mathbf{E}(\mathbf{r}, t) \cdot \mathbf{J}_f(\mathbf{r}, t) + \mathbf{E}(\mathbf{r}, t) \cdot \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t}.
$$

将此式左边的两项移项到右边后给出

$$
\mathbf{E}(\mathbf{r}, t) \cdot \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t} + \mathbf{H}(\mathbf{r}, t) \cdot \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} + \nabla \cdot (\mathbf{E}(\mathbf{r}, t) \times \mathbf{H}(\mathbf{r}, t)) + \mathbf{E}(\mathbf{r}, t) \cdot \mathbf{J}_f(\mathbf{r}, t) = 0.
$$

将

$$
\mathbf{D}(\mathbf{r}, t) = \epsilon \mathbf{E}(\mathbf{r}, t), \quad \mathbf{H}(\mathbf{r}, t) = \frac{1}{\mu} \mathbf{B}(\mathbf{r}, t)
$$

代入此式后，我们最后得到

$$
\frac{\partial}{\partial t} \left( \frac{\epsilon}{2} E^2(\mathbf{r}, t) + \frac{1}{2\mu} B^2(\mathbf{r}, t) \right) + \nabla \cdot \mathbf{S} + \mathbf{J}_f(\mathbf{r}, t) \cdot \mathbf{E}(\mathbf{r}, t) = 0.
$$

如同真空时的情况，我们将

$$
w = \frac{\epsilon}{2} E^2(\mathbf{r}, t) + \frac{1}{2\mu} B^2(\mathbf{r}, t) = \frac{1}{2} \mathbf{E}(\mathbf{r}, t) \cdot \mathbf{D}(\mathbf{r}, t) + \frac{1}{2} \mathbf{B}(\mathbf{r}, t) \cdot \mathbf{H}(\mathbf{r}, t)
$$

解释作介质中的电磁场能量密度，而将坡印亭矢量

$$
\mathbf{S}(\mathbf{r}, t) = \mathbf{E}(\mathbf{r}, t) \times \mathbf{H}(\mathbf{r}, t) = \frac{1}{\mu} \mathbf{E}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t)
$$

解释作介质中的电磁场能量流密度，$\mathbf{J}_f \cdot \mathbf{E}$ 解释作电磁场对自由电荷做功的功率密度。它或者转化成电荷的动能，或者转化成焦耳热释放掉。

