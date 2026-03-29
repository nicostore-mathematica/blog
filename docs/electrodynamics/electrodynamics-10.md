---
title: Chapter 10 静磁学
permalink: /electrodynamics/electrodynamics-10/
createTime: 2026/03/15 22:16:20
---

## Part 1 概论

当体系内的电流密度分布 $\mathbf{j}_f(\mathbf{r})$ 不随时间改变，即稳恒时，它会产生一个不随时间改变的磁场强度分布，即静磁场。此时，麦克斯韦方程组退化为

$$
\nabla \times \mathbf{H}(\mathbf{r}) = \mathbf{j}_f(\mathbf{r}), \quad \nabla \cdot \mathbf{B}(\mathbf{r}) = 0.
$$

这里，$\mathbf{j}_f(\mathbf{r})$ 为自由电流密度矢量。我们已经知道，可以引入一个不含时的矢势 $\mathbf{A}(\mathbf{r})$ 来给出磁感应强度分布 $\mathbf{B}(\mathbf{r})$，即

$$
\mathbf{B}(\mathbf{r}) = \nabla \times \mathbf{A}(\mathbf{r}).
$$

但 $\mathbf{A}(\mathbf{r})$ 不是唯一决定的，可以在其上加上一个形为 $\nabla \Lambda(\mathbf{r})$ 的附加项而不改变磁感应强度矢量 $\mathbf{B}(\mathbf{r})$。这种多余的自由度可以通过对矢势加上一些限制条件来消除。例如，在研究静磁学问题时，我们常取满足条件

$$
\nabla \cdot \mathbf{A}(\mathbf{r}) = 0
$$

的被称为库仑规范的矢势。

我们知道，在均匀线性介质中，$\mathbf{B}(\mathbf{r}) = \mu \mathbf{H}(\mathbf{r})$ 成立。将之代入
$$
\nabla \times \mathbf{H}(\mathbf{r}) = \mathbf{j}_f(\mathbf{r}), \quad \nabla \cdot \mathbf{B}(\mathbf{r}) = 0.
$$
我们有

$$
\nabla \times \mathbf{H}(\mathbf{r}) = \nabla \times \left( \frac{1}{\mu} \mathbf{B}(\mathbf{r}) \right) = \frac{1}{\mu} \nabla \times (\nabla \times \mathbf{A}(\mathbf{r})) = \mathbf{j}_f(\mathbf{r}).
$$

再利用恒等式

$$
\nabla \times (\nabla \times \mathbf{a}) = \nabla(\nabla \cdot \mathbf{a}) - \nabla^2 \mathbf{a},
$$

我们又可将上式的左边改写成

$$
\frac{1}{\mu} \nabla(\nabla \cdot \mathbf{A}(\mathbf{r})) - \frac{1}{\mu} \nabla^2 \mathbf{A}(\mathbf{r}) = \mathbf{j}_f(\mathbf{r}).
$$

若 $\mathbf{A}(\mathbf{r})$ 满足库仑规范，则上式左边的第一项为零。因此，我们有

$$
\nabla^2 \mathbf{A}(\mathbf{r}) = -\mu \mathbf{j}_f(\mathbf{r}).
$$

将此式与静电势 $\Phi(\mathbf{r})$ 所满足的泊松方程

$$
\nabla^2 \Phi(\mathbf{r}) = -\frac{1}{\epsilon} \rho_f(\mathbf{r})
$$

相比较后，我们可以立刻写出它的解

$$
\mathbf{A}(\mathbf{r}) = \frac{\mu}{4\pi} \iiint_{\Omega} \frac{\mathbf{j}_f(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} dx'dy'dz'.
$$

实际上，若我们将拉普拉斯算符 $\nabla^2$ 作用到上式的两边可得到

$$
\begin{aligned}
\nabla^2_{\mathbf{r}} \mathbf{A}(\mathbf{r}) &= \nabla^2_{\mathbf{r}} \left( \frac{\mu}{4\pi} \iiint_{\Omega} \frac{\mathbf{j}_f(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} dx'dy'dz' \right) \\
&= \frac{\mu}{4\pi} \iiint_{\Omega} \mathbf{j}_f(\mathbf{r}') \left( \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right) dx'dy'dz' \\
&= \frac{\mu}{4\pi} \iiint_{\Omega} \mathbf{j}_f(\mathbf{r}') \left( -4\pi \delta(\mathbf{r} - \mathbf{r}') \right) dx'dy'dz' \\
&= -\mu \mathbf{j}_f(\mathbf{r}).
\end{aligned}
$$

此方程
$$
\nabla^2 \mathbf{A}(\mathbf{r}) = -\mu \mathbf{j}_f(\mathbf{r}).
$$
有了矢势 $\mathbf{A}(\mathbf{r})$ 的表达式后，我们可以计算磁感应强度矢量 $\mathbf{B}(\mathbf{r})$ 了。我们有

$$
\begin{aligned}
\mathbf{B}(\mathbf{r}) &= \nabla_{\mathbf{r}} \times \mathbf{A}(\mathbf{r}) = \nabla_{\mathbf{r}} \times \left( \frac{\mu}{4\pi} \iiint_{\Omega} \frac{\mathbf{j}_f(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} dx'dy'dz' \right) \\\\
&= \frac{\mu}{4\pi} \iiint_{\Omega} \nabla_{\mathbf{r}} \times \left( \frac{\mathbf{j}_f(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} \right) dx'dy'dz' \\\\
&= \frac{\mu}{4\pi} \iiint_{\Omega} \left( \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right) \times \mathbf{j}_f(\mathbf{r}') dx'dy'dz' \\\\
&= \frac{\mu}{4\pi} \iiint_{\Omega} \left( -\frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right) \times \mathbf{j}_f(\mathbf{r}') dx'dy'dz' \\\\
&= \frac{\mu}{4\pi} \iiint_{\Omega} \mathbf{j}_f(\mathbf{r}') \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} dx'dy'dz'.
\end{aligned}
$$

当稳恒电流是在一根导线 $C$ 上流动时，上式退化为

$$
\mathbf{B}(\mathbf{r}) = \frac{\mu}{4\pi} \oint_C I d\mathbf{l} \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}.
$$

此即毕奥 - 萨伐尔定律。

自然，为了求解静磁学问题，我们还必须给定磁场强度矢量 $\mathbf{H}$ 和磁感应强度矢量 $\mathbf{B}$ 所满足的边值条件。与第五章中所讨论的情况无异，我们当有

$$
\mathbf{e}_n \cdot (\mathbf{B}_2 - \mathbf{B}_1) = B_{2n} - B_{1n} = 0, \quad \mathbf{e}_n \times (\mathbf{H}_2 - \mathbf{H}_1) = \vec{H}_{2t} - \vec{H}_{1t} = \vec{\alpha}_t
$$

在两种介质的分界面处成立。这里，$\vec{\alpha}_t$ 为媒介质分界面上的自由电流密度。需要强调一点的是，作为泊松方程的解，矢势 $\mathbf{A}$ 在分界面上是连续的，即

$$
\mathbf{A}_2|_{\partial\Omega} = \mathbf{A}_1|_{\partial\Omega}
$$

成立。

## Part 2 磁标势方法

我们已经看到，为了描述磁场需要计算矢量势 $\mathbf{A}(\mathbf{r})$。但作为一个矢量，$\mathbf{A}(\mathbf{r})$ 的计算比较复杂。因此，有人讨论是否在特殊的情况下可以用标量势来描述磁场 (从历史的角度讲，在电磁学发展的早期，确有学者认为磁场是由磁荷引起的，就如同电场是由电荷产生的一样。这样一来，试图用标量势来描述磁场就不是一件完全不可理解的事情了) 。的确，在静磁场的情况下，存在着这种可能性。又由于用标量势的方法处理问题较为简单，故接下来我们简单介绍一下如何利用标量势的方法求解某些静磁学问题。

我们首先回顾一下，在静电场情况下，之所以能够引入标量势是由于静电场强度矢量 $\mathbf{E}(\mathbf{r})$ 满足方程

$$
\nabla \times \mathbf{E}(\mathbf{r}) = 0,
$$

而静磁场强度矢量 $\mathbf{H}(\mathbf{r})$ 满足的方程则为

$$
\nabla \times \mathbf{H}(\mathbf{r}) = \mathbf{j}_f(\mathbf{r}).
$$

因此，若在某一空间区域 $\Omega$ 内部不存在自由电流，则上式退化为

$$
\nabla \times \mathbf{H}(\mathbf{r}) = 0.
$$

因此，仿照静电学的情况，我们可以在 $\Omega$ 内引入标量势 $\Phi_M(\mathbf{r})$，使得

$$
\mathbf{H}(\mathbf{r}) = -\nabla \Phi_M(\mathbf{r}).
$$

这里，$M$ 为 “Magnetism” 一词的第一个字母，而 $\Phi_M(\mathbf{r})$ 称为磁标量势。

在实际工作中，磁标量势方法常用来计算铁磁物质内的磁场强度矢量 $\mathbf{H}(\mathbf{r})$。在这类物质中，磁感应强度矢量 $\mathbf{B}(\mathbf{r})$ 一般并不与 $\mathbf{H}(\mathbf{r})$ 成正比。然而麦克斯韦方程

$$
\nabla \cdot \mathbf{B}(\mathbf{r}) = 0
$$

仍成立。将 $\mathbf{B}(\mathbf{r}) = \mu_0 (\mathbf{H}(\mathbf{r}) + \mathbf{M}(\mathbf{r}))$ 代入上式后，我们得到

$$
\mu_0 (\nabla \cdot \mathbf{H}(\mathbf{r}) + \nabla \cdot \mathbf{M}(\mathbf{r})) = 0,
$$

或是

$$
\nabla \cdot \mathbf{H}(\mathbf{r}) = -\nabla \cdot \mathbf{M}(\mathbf{r}).
$$

与静电学中的方程

$$
\nabla \cdot \mathbf{P}(\mathbf{r}) = -\rho_b(\mathbf{r}).
$$

相比较，我们可以将

$$
\mu_0 \nabla \cdot \mathbf{M}(\mathbf{r}) \equiv -\rho_M(\mathbf{r})
$$

定义为 “束缚磁荷”。因此 $\nabla \cdot \mathbf{H}(\mathbf{r}) = -\nabla \cdot \mathbf{M}(\mathbf{r})$ 又可写作
$$
\nabla \cdot \mathbf{H}(\mathbf{r}) = \frac{1}{\mu_0} \rho_M(\mathbf{r}).
$$

相应地，磁标量势 $\Phi_M(\mathbf{r})$ 应该满足泊松方程

$$
\nabla^2 \Phi_M(\mathbf{r}) = -\frac{1}{\mu_0} \rho_M(\mathbf{r}).
$$

因此，我们可以将求解静电学问题发展起来的方法直接借来求解铁磁体中的静磁学问题了。

## Part 3 磁多极矩

在库仑规范下，我们有

$$
\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \iiint_\Omega \frac{\mathbf{j}_f(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} dx'dy'dz'.
$$

这里，$\Omega$ 为电流密度不为零的空间区域。若 $\Omega$ 的线度很小，则在离开它比较远的观察点 $\mathbf{r}$ 处，我们近似有

$$
\frac{1}{|\mathbf{r} - \mathbf{r}'|} \simeq \frac{1}{r} - \mathbf{r}' \cdot \nabla_r \frac{1}{r}.
$$

将之代入 $\mathbf{A}(\mathbf{r})$ 的表达式后，我们得到

$$
\begin{aligned}
\mathbf{A}(\mathbf{r}) &\simeq \frac{\mu_0}{4\pi} \iiint_\Omega \frac{\mathbf{j}_f(\mathbf{r}')}{r} dx'dy'dz' - \frac{\mu_0}{4\pi} \iiint_\Omega \mathbf{j}_f(\mathbf{r}') \left( \mathbf{r}' \cdot \nabla_r \frac{1}{r} \right) dx'dy'dz' \\\\
&= \frac{\mu_0}{4\pi r} \iiint_\Omega \mathbf{j}_f(\mathbf{r}') dx'dy'dz' + \frac{\mu_0}{4\pi} \iiint_\Omega \mathbf{j}_f(\mathbf{r}') \left( \sum_{i=1}^3 \frac{x_i' x_i}{r^3} \right) dx'dy'dz'.
\end{aligned}
\tag{a}
$$

为了进一步简化上式，我们先证明一个有关稳恒电流的恒等式

$$
\iiint_\Omega \left( f(\mathbf{r}') \left[ \mathbf{j}_f(\mathbf{r}') \cdot \nabla_{\mathbf{r}'} \right] g(\mathbf{r}') + g(\mathbf{r}') \left[ \mathbf{j}_f(\mathbf{r}') \cdot \nabla_{\mathbf{r}'} \right] f(\mathbf{r}') \right) dx'dy'dz' = 0.
\tag{b}
$$

这里，$f(\mathbf{r}')$ 和 $g(\mathbf{r}')$ 为两个任意定义在区域 $\Omega$ 内的可导函数。为了证明此式，我们仅需考虑式中第二项的分部积分，即

$$
\begin{aligned}
&\iiint_\Omega g(\mathbf{r}') \left[ \mathbf{j}_f(\mathbf{r}') \cdot \nabla_{\mathbf{r}'} \right] f(\mathbf{r}') dx'dy'dz' \\\\
&= \iiint_\Omega g(\mathbf{r}') \left[ j_{fx}(\mathbf{r}') \frac{\partial f(\mathbf{r}')}{\partial x'} + j_{fy}(\mathbf{r}') \frac{\partial f(\mathbf{r}')}{\partial y'} + j_{fz}(\mathbf{r}') \frac{\partial f(\mathbf{r}')}{\partial z'} \right] dx'dy'dz' \\\\
&= \int_{S_x} g(\mathbf{r}') j_{fx}(\mathbf{r}') f(\mathbf{r}') dy'dz' \Big|_{x'=-\infty}^{x'=\infty} - \iiint_\Omega f(\mathbf{r}') \frac{\partial (j_{fx}(\mathbf{r}') g(\mathbf{r}'))}{\partial x'} dx'dy'dz' \\\\
&+ \int_{S_y} g(\mathbf{r}') j_{fy}(\mathbf{r}') f(\mathbf{r}') dx'dz' \Big|_{y'=-\infty}^{y'=\infty} - \iiint_\Omega f(\mathbf{r}') \frac{\partial (j_{fy}(\mathbf{r}') g(\mathbf{r}'))}{\partial y'} dx'dy'dz' \\\\
&+ \int_{S_z} g(\mathbf{r}') j_{fz}(\mathbf{r}') f(\mathbf{r}') dx'dy' \Big|_{z'=-\infty}^{z'=\infty} - \iiint_\Omega f(\mathbf{r}') \frac{\partial (j_{fz}(\mathbf{r}') g(\mathbf{r}'))}{\partial z'} dx'dy'dz'.
\end{aligned}
$$

由于在无穷远处，我们有 $\mathbf{j}_f(\mathbf{r}') = 0$，故上式中的边界项全部为零。因此，我们有

$$
\begin{aligned}
&\iiint_\Omega g(\mathbf{r}') \left[ \mathbf{j}_f(\mathbf{r}') \cdot \nabla_{\mathbf{r}'} \right] f(\mathbf{r}') dx'dy'dz' \\\\
&= -\iiint_\Omega f(\mathbf{r}') \left[ \nabla_{\mathbf{r}'} \cdot \mathbf{j}_f(\mathbf{r}') \right] g(\mathbf{r}') dx'dy'dz' - \iiint_\Omega f(\mathbf{r}') \left[ \mathbf{j}_f(\mathbf{r}') \cdot \nabla_{\mathbf{r}'} \right] g(\mathbf{r}') dx'dy'dz'.
\end{aligned}
$$

移项后，我们即得恒等式 (b)。

接下来，我们考虑两种特殊情况。若取 $f(\mathbf{r}') = 1$，$g(\mathbf{r}') = x_i'$，则 (b) 式化为

$$
0 = \iiint_\Omega \left[ \mathbf{j}_f(\mathbf{r}') \cdot \nabla_{\mathbf{r}'} \right] x_i' dx'dy'dz' = \iiint_\Omega j_{fi}(\mathbf{r}') dx'dy'dz'.
$$

也就是说，

$$
\iiint_\Omega \mathbf{j}_f(\mathbf{r}') dx'dy'dz' = 0
$$

成立。由此我们得出结论，展开式 (a) 中的第一项对于矢势 $\mathbf{A}(\mathbf{r})$ 的贡献为零。

再考虑第二种情况。我们令 $f(\mathbf{r}') = x_i'$，$g(\mathbf{r}') = x_k'$。现在，恒等式 (b) 化为

$$
\iiint_\Omega \left( x_i' j_{fk}(\mathbf{r}') + x_k' j_{fi}(\mathbf{r}') \right) dx'dy'dz' = 0.
$$

因此，我们有

$$
\begin{aligned}
&\sum_{i=1}^3 \iiint_\Omega j_{fk}(\mathbf{r}') x_i' x_i dx'dy'dz' = \sum_{i=1}^3 x_i \iiint_\Omega j_{fk}(\mathbf{r}') x_i' dx'dy'dz' \\\\
&= \sum_{i=1}^3 x_i \left( \frac{1}{2} \iiint_\Omega j_{fk}(\mathbf{r}') x_i' dx'dy'dz' + \frac{1}{2} \iiint_\Omega j_{fi}(\mathbf{r}') x_k' dx'dy'dz' \right) \\\\
&= \sum_{i=1}^3 x_i \left( -\frac{1}{2} \iiint_\Omega j_{fi}(\mathbf{r}') x_k' dx'dy'dz' + \frac{1}{2} \iiint_\Omega j_{fk}(\mathbf{r}') x_i' dx'dy'dz' \right) \\\\
&= -\frac{1}{2} \sum_{i=1}^3 x_i \iiint_\Omega \left( j_{fi}(\mathbf{r}') x_k' - j_{fk}(\mathbf{r}') x_i' \right) dx'dy'dz'.
\end{aligned}
$$

利用矢量直积的恒等式

$$
\mathbf{a} \times (\mathbf{b} \times \mathbf{c}) = (\mathbf{a} \cdot \mathbf{c}) \mathbf{b} - (\mathbf{a} \cdot \mathbf{b}) \mathbf{c},
$$

上式又可进一步写作

$$
\sum_{i=1}^3 \iiint_\Omega j_{fk}(\mathbf{r}') x_i' x_i dx'dy'dz' = -\frac{1}{2} \left( \mathbf{r} \times \iiint_\Omega (\mathbf{r}' \times \mathbf{j}_f(\mathbf{r}')) dx'dy'dz' \right)_k.
$$

因此，展开式 (a) 可以改写作

$$
\begin{aligned}
\mathbf{A}(\mathbf{r}) &= \frac{\mu_0}{4\pi} \sum_{i=1}^3 \iiint_\Omega \mathbf{j}_f(\mathbf{r}') \frac{x_i' x_i}{r^3} dx'dy'dz' \\\\
&= \frac{\mu_0}{4\pi} \left( -\frac{1}{2} \frac{\mathbf{r}}{r^3} \times \iiint_\Omega (\mathbf{r}' \times \mathbf{j}_f(\mathbf{r}')) dx'dy'dz' \right) \\\\
&= \frac{\mu_0}{4\pi} \left( \frac{1}{2} \iiint_\Omega (\mathbf{r}' \times \mathbf{j}_f(\mathbf{r}')) dx'dy'dz' \right) \times \frac{\mathbf{r}}{r^3}.
\end{aligned}
$$

按照定义，

$$
\mathbf{m} = \frac{1}{2} \iiint_\Omega (\mathbf{r}' \times \mathbf{j}_f(\mathbf{r}')) dx'dy'dz'
$$

为稳恒电流的总磁偶极矩，故我们有

$$
\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \frac{\mathbf{m} \times \mathbf{r}}{r^3}
$$

在 $r$ 远大于 $\Omega$ 的线度的情况下成立。将之取旋度后，即可得到远离电流分布区域 $\Omega$ 处的磁感应强度矢量 $\mathbf{B}(\mathbf{r})$。我们有

$$
\begin{aligned}
\mathbf{B}(\mathbf{r}) &= \nabla \times \mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \nabla \times \left( \frac{\mathbf{m} \times \mathbf{r}}{r^3} \right) \\\\
&= \frac{\mu_0}{4\pi} \left( \left( \frac{\mathbf{r}}{r^3} \cdot \nabla \right) \mathbf{m} + \left( \nabla \cdot \frac{\mathbf{r}}{r^3} \right) \mathbf{m} - (\mathbf{m} \cdot \nabla) \frac{\mathbf{r}}{r^3} - (\nabla \cdot \mathbf{m}) \frac{\mathbf{r}}{r^3} \right) \\\\
&= \frac{\mu_0}{4\pi} \left( \left( \nabla \cdot \frac{\mathbf{r}}{r^3} \right) \mathbf{m} - (\mathbf{m} \cdot \nabla) \frac{\mathbf{r}}{r^3} \right).
\end{aligned}
$$

而由于

$$
\nabla \cdot \frac{\mathbf{r}}{r^3} = \nabla \cdot \left( -\nabla \frac{1}{r} \right) = -\nabla^2 \frac{1}{r} = -(-4\pi \delta(\mathbf{r})) = 4\pi \delta(\mathbf{r}),
$$

故上式第一项为零，即

$$
\mathbf{B}(\mathbf{r}) = -\frac{\mu_0}{4\pi} (\mathbf{m} \cdot \nabla) \frac{\mathbf{r}}{r^3} = \frac{\mu_0}{4\pi} \frac{3(\mathbf{m} \cdot \mathbf{e}_r)\mathbf{e}_r - \mathbf{m}}{r^3}.
$$

有意思的是，这与我们用磁标量势方法得到的结果是一致的。

## Part 4 静磁场的能量

前面我们已经得到静磁场的能量表达式为

$$
W = \iiint_{R^3} \frac{1}{2\mu} B^2(\mathbf{r}) dxdydz = \frac{1}{2} \iiint_{R^3} \mathbf{B}(\mathbf{r}) \cdot \mathbf{H}(\mathbf{r}) dxdydz.
$$

若将 $\mathbf{B} = \nabla \times \mathbf{A}(\mathbf{r})$，$\nabla \times \mathbf{H}(\mathbf{r}) = \mathbf{j}_f(\mathbf{r})$ 代入上式后，我们有

$$
\begin{aligned}
W &= \frac{1}{2} \iiint_{R^3} (\nabla \times \mathbf{A}(\mathbf{r})) \cdot \mathbf{H}(\mathbf{r}) dxdydz \\\\
&= \frac{1}{2} \iiint_{R^3} \nabla \cdot (\mathbf{A}(\mathbf{r}) \times \mathbf{H}(\mathbf{r})) dxdydz + \frac{1}{2} \iiint_{R^3} \mathbf{A}(\mathbf{r}) \cdot (\nabla \times \mathbf{H}(\mathbf{r})) dxdydz \\\\
&= \frac{1}{2} \oint_S (\mathbf{A}(\mathbf{r}) \times \mathbf{H}(\mathbf{r})) \cdot d\mathbf{S} + \frac{1}{2} \iiint_{R^3} \mathbf{A}(\mathbf{r}) \cdot \mathbf{j}_f(\mathbf{r}) dxdydz.
\end{aligned}
$$

这里，我们使用了斯托克斯公式以及微分恒等式

$$
\nabla \cdot (\mathbf{a} \times \mathbf{b}) = (\nabla \times \mathbf{a}) \cdot \mathbf{b} - \mathbf{a} \cdot (\nabla \times \mathbf{b}).
$$

注意到，在无穷远的边界面 $S$ 上，磁场强度和磁感应强度矢量皆为零，故我们最后得到

$$
W = \frac{1}{2} \iiint_{R^3} \mathbf{A}(\mathbf{r}) \cdot \mathbf{j}_f(\mathbf{r}) dxdydz.
$$

此式中的矢势 $\mathbf{A}(\mathbf{r})$ 应该理解为是由电流密度 $\mathbf{j}_f(\mathbf{r})$ 自身产生的。若我们要计算这一电流分布在**外场**中的相互作用能，还需在矢势 $\mathbf{A}(\mathbf{r})$ 上附加外场的矢势 $\mathbf{A}_e(\mathbf{r})$，并在电流密度 $\mathbf{j}_f(\mathbf{r})$ 附加上产生该外场的电流分布密度 $\mathbf{j}_e(\mathbf{r})$，并由此得到总的磁场能量

$$
\begin{aligned}
W &= \frac{1}{2} \iiint_{R^3} (\mathbf{A}(\mathbf{r}) + \mathbf{A}_e(\mathbf{r})) \cdot (\mathbf{j}_f(\mathbf{r}) + \mathbf{j}_e(\mathbf{r})) dxdydz \\\\
&= \frac{1}{2} \iiint_{R^3} \mathbf{A}(\mathbf{r}) \cdot \mathbf{j}_f(\mathbf{r}) dxdydz + \frac{1}{2} \iiint_{R^3} \mathbf{A}_e(\mathbf{r}) \cdot \mathbf{j}_e(\mathbf{r}) dxdydz \\\\
&+ \frac{1}{2} \iiint_{R^3} \mathbf{A}_e(\mathbf{r}) \cdot \mathbf{j}_f(\mathbf{r}) dxdydz + \frac{1}{2} \iiint_{R^3} \mathbf{A}(\mathbf{r}) \cdot \mathbf{j}_e(\mathbf{r}) dxdydz.
\end{aligned}
$$

我们将此式右边的第三和第四项之和

$$
W_{\text{int}} = \frac{1}{2} \iiint_{R^3} \mathbf{A}_e(\mathbf{r}) \cdot \mathbf{j}_f(\mathbf{r}) dxdydz + \frac{1}{2} \iiint_{R^3} \mathbf{A}(\mathbf{r}) \cdot \mathbf{j}_e(\mathbf{r}) dxdydz
$$

视作电流密度分布 $\mathbf{j}_f(\mathbf{r})$ 在外磁场 $\mathbf{A}_e(\mathbf{r})$ 中的相互作用能。又由于在库仑规范下，

$$
\begin{aligned}
&\iiint_{R^3} \mathbf{A}_e(\mathbf{r}) \cdot \mathbf{j}_f(\mathbf{r}) dxdydz = \iiint_{R^3} dxdydz \iiint_{R^3} \frac{\mathbf{j}_f(\mathbf{r}) \cdot \mathbf{j}_e(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} dx'dy'dz' \\\\
&= \iiint_{R^3} \mathbf{A}(\mathbf{r}') \cdot \mathbf{j}_e(\mathbf{r}') dx'dy'dz'
\end{aligned}
$$

成立，因此
$$
W_{\text{int}} = \frac{1}{2} \iiint_{R^3} \mathbf{A}_e(\mathbf{r}) \cdot \mathbf{j}_f(\mathbf{r}) dxdydz + \frac{1}{2} \iiint_{R^3} \mathbf{A}(\mathbf{r}) \cdot \mathbf{j}_e(\mathbf{r}) dxdydz
$$
中的两项实际上彼此相等，即我们有
$$
\begin{aligned}
W_{\text{int}} &= \iiint_{R^3} \mathbf{A}_e(\mathbf{r}) \cdot \mathbf{j}_f(\mathbf{r}) dxdydz \\\\
&= \frac{\mu}{4\pi} \iiint_{R^3} dxdydz \iiint_{R^3} \frac{\mathbf{j}_f(\mathbf{r}) \cdot \mathbf{j}_e(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} dx'dy'dz'.
\end{aligned}
$$

我们将这一表达式应用到一个载有电流 $I$ 的线圈后有

$$
\begin{aligned}
W_i &= \oint_C (I\,d\mathbf{l}) \cdot \mathbf{A}_e(\mathbf{r}) = I \oint_C \mathbf{A}_e(\mathbf{r}) \cdot d\mathbf{l} \\\\
&= I \int_S (\nabla \times \mathbf{A}_e(\mathbf{r})) \cdot d\mathbf{S} = I \int_S \mathbf{B}_e(\mathbf{r}) \cdot d\mathbf{S} = I\Phi_e.
\end{aligned}
$$

这里，$\Phi_e$ 为外磁场 $\mathbf{B}_e(\mathbf{r})$ 在线圈中产生的磁通量。若线圈的线度远小于它到产生 $\mathbf{B}_e(\mathbf{r})$ 的场源 $\mathbf{j}_e(\mathbf{r}) \neq 0$ 的区域 $\Omega$ 的距离，则我们可以将 $\mathbf{B}_e(\mathbf{r})$ 在 $\mathbf{r} = 0$ 点附近做展开，即

$$
\mathbf{B}_e(\mathbf{r}) \cong \mathbf{B}_e(0) + (\mathbf{r} \cdot \nabla)\mathbf{B}_e(0).
$$

将之代入 $W_i$ 的表达式后，我们有

$$
W_i = I \int_S \mathbf{B}_e(0) \cdot d\mathbf{S} + I \int_S (\mathbf{r} \cdot \nabla)\mathbf{B}_e(0) \cdot d\mathbf{S}.
$$

其中，第一项可以写作

$$
W_i^{(0)} = I \int_S \mathbf{B}_e(0) \cdot d\mathbf{S} = \mathbf{m} \cdot \mathbf{B}_e(0).
\tag{c}
$$

这里，$\mathbf{m}$ 为电流线圈的磁偶极矩

然而， (c) 式给出的结果似乎与实验事实相反：根据 (c) 式，为了要让相互作用能取极小，应该要求线圈的磁矩与外磁场的方向在平衡态时相反。之所以出现这一谬误，是由于任意一个电流线圈都可以看作是由它围成的曲面 $S$ 上的小电流线圈 $\{C_i\}$ 拼接而成，而每个小线圈中的电流皆为 $I$。因此，它的总的磁偶极矩为

$$
\mathbf{m} = \lim_{N \to \infty} I \sum_i^N \Delta \mathbf{S}_i = I \int_S d\mathbf{S}.
$$

但问题是，以同一线圈为边界而张成的曲面并不是唯一的。它们是否给出相同的面积分值呢？答案是肯定的。为此，让我们任取两个以 $C$ 为边界的曲面 $S_1$ 和 $S_2$。它们共同构成一个闭曲面 $S$，即

$$
\int\int_{S_1} d\mathbf{S} - \int\int_{S_2} d\mathbf{S} = \oint\!\!\oint_S d\mathbf{S}.
$$

 (我们注意到，$S_2$ 上的曲面方向是与其外法线方向相反的) 。再利用高斯定理，则可见上式的右边为零。因此，

$$
\int\int_{S_1} d\mathbf{S} = \int\int_{S_2} d\mathbf{S}
$$

成立。

的原因是，我们在推导过程中粗心大意地假设了线圈中的电流和产生外磁场的电流在未达到平衡前与达到平衡状态后没有改变。这显然是不对的。为了仔细分析这一过程，我们假设外磁场是由另外一个负载电流 $I_e$ 的线圈 $C_e$ 产生的。

同时，我们应该使用磁相互作用能的表达式
$$
W_{\text{int}} = \frac{1}{2} \iiint_{R^3} \mathbf{A}_e(\mathbf{r}) \cdot \mathbf{j}_f(\mathbf{r}) dxdydz + \frac{1}{2} \iiint_{R^3} \mathbf{A}(\mathbf{r}) \cdot \mathbf{j}_e(\mathbf{r}) dxdydz
$$
即
$$
\begin{aligned}
W_i &= \frac{1}{2} \int\int\int_{R^3} \mathbf{j}_f(\mathbf{r}) \cdot \mathbf{A}_e(\mathbf{r})\,dx dy dz + \frac{1}{2} \int\int\int_{R^3} \mathbf{j}_e(\mathbf{r}) \cdot \mathbf{A}(\mathbf{r})\,dx dy dz \\\\
&= \frac{1}{2} I \oint_C \mathbf{A}_e \cdot d\mathbf{l} + \frac{1}{2} I_e \oint_{C_e} \mathbf{A}(\mathbf{r}) \cdot d\mathbf{l}.
\end{aligned}
$$

采用与推导
$$
W_i = I\Phi_e.
$$
相同的步骤，我们得到

$$
W_i^{(0)} = \frac{1}{2} I \Phi_e + \frac{1}{2} I_e \Phi.
$$

这里，$\Phi_e$ 和 $\Phi$ 分别为 $I_e$ 和 $I$ 在相应的线圈 $C$ 和 $C_e$ 上产生的磁通量。当线圈运动时，若要保持电流 $I$ 和 $I_e$ 不变，我们当有

$$
\delta W_i^{(0)} = \frac{1}{2} I \delta \Phi_e + \frac{1}{2} I_e \delta \Phi.
$$

但由于磁通量改变，会在线圈上产生感生电动势，进而对电流做功。这样就会改变电流 $I$ 和 $I_e$ 的数值。因此，为了保持它们不变，必须有外电源提供能量，以抵消感生电动势所作之功。从法拉第定律我们知道，线圈 $C$ 和 $C_e$ 上的电动势分别为

$$
\mathcal{E} = -\frac{d\Phi_e}{dt}, \quad \mathcal{E}_e = -\frac{d\Phi}{dt}.
$$

因此，在时间间隔 $\delta t$ 内，感生电动势所做之功为

$$
\mathcal{E} I \delta t + \mathcal{E}_e I_e \delta t = -I \delta \Phi_e - I_e \delta \Phi.
$$

而为了抵消这一做功，外电源必须提供能量

$$
\delta W_s = -(-I \delta \Phi_e - I_e \delta \Phi) = I \delta \Phi_e + I_e \delta \Phi,
$$

才可保持电流 $I$ 和 $I_e$ 不变。根据能量守恒定理，这一能量被用于两项用途，一是使得磁场能量 $W_i^{(0)}$ 发生改变，二是转化为对外的机械做功，即我们有

$$
\delta W_s = \delta W_i^{(0)} + \delta A = \frac{1}{2} I \delta \Phi_e + \frac{1}{2} I_e \delta \Phi + \delta A,
$$

或是

$$
\delta A = \frac{1}{2} I \delta \Phi_e + \frac{1}{2} I_e \delta \Phi = \delta W_i^{(0)} = \mathbf{m} \cdot \delta \mathbf{B}_e(0).
$$

在这里，我们使用了公式 $\displaystyle W_i^{(0)} = \frac{1}{2} I \Phi_e + \frac{1}{2} I_e \Phi.$ 和公式 (c) 。

考虑到对外的机械做功的结果是使得机械势能减少，故
$$
\delta A = -\delta U
$$

成立。由此，我们最后得到

$$
U(\mathbf{r}) = -\mathbf{m} \cdot \mathbf{B}_e(0).
$$

这与我们的预期是一致的。

现在，我们可以利用公式

$$
\mathbf{F} = -\nabla U(\mathbf{r})
$$

来决定磁偶极矩的受力了。我们有

$$
\begin{aligned}
\mathbf{F} &= -\nabla U(\mathbf{r}) = \nabla (\mathbf{m} \cdot \mathbf{B}_e(\mathbf{r})) \\\\
&= \mathbf{m} \times (\nabla \times \mathbf{B}_e(\mathbf{r})) + \mathbf{B}_e(\mathbf{r}) \times (\nabla \times \mathbf{m}) + (\mathbf{B}_e(\mathbf{r}) \cdot \nabla)\mathbf{m} + (\mathbf{m} \cdot \nabla)\mathbf{B}_e(\mathbf{r}) \\\\
&= \mathbf{m} \times (\nabla \times \mathbf{B}_e(\mathbf{r})) + (\mathbf{m} \cdot \nabla)\mathbf{B}_e(\mathbf{r}) = (\mathbf{m} \cdot \nabla)\mathbf{B}_e(\mathbf{r}).
\end{aligned}
$$

这里，我们利用了公式 $\nabla \times \mathbf{B}_e(\mathbf{r}) = 0$，即产生外场的电流不会出现在磁矩 $\mathbf{m}$ 所在的区域内。

另一方面，磁偶极矩所受到的力矩由下式

$$
\mathbf{M}_{\text{out}} = -\frac{\partial}{\partial \varphi} U(\mathbf{r}) \mathbf{e}_{\delta \varphi} = \frac{\partial}{\partial \varphi} (m B_e(0) \cos \varphi) \mathbf{e}_{\delta \varphi} = -m B_e(0) \sin \varphi \mathbf{e}_{\delta \varphi}
$$

给出。再利用右手螺旋法则决定其方向，我们有

$$
\mathbf{M}_{\text{out}} = \mathbf{m} \times \mathbf{B}_e(0).
$$

上面的推导依赖于物理的论证，但是不够严谨。为了做一比较，我们接下来再用另外一种方法重新推导磁偶极矩所受外力和外力矩的表达式。根据安培定律，电流密度 $\mathbf{j}_f(\mathbf{r}') \neq 0$ 的区域 $\Omega'$ 所受到的外力为

$$
\mathbf{F} = \int\int\int_{\Omega'} \mathbf{j}_f(\mathbf{r}') \times \mathbf{B}_e(\mathbf{r}')\,dx'dy'dz'.
$$

当 $\Omega'$ 的线度远远小于它到 $\Omega$ 的距离时，我们近似有

$$
\mathbf{B}_e(\mathbf{r}') \cong \mathbf{B}_e(0) + (\mathbf{r}' \cdot \nabla_{\mathbf{R}})\mathbf{B}_e(0).
$$

因此，$\mathbf{F}$ 可以近似地写为

$$
\mathbf{F} = \left( \int\int\int_{\Omega'} \mathbf{j}_f(\mathbf{r}') dx'dy'dz' \right) \times \mathbf{B}_e(0) + \int\int\int_{\Omega'} \mathbf{j}_f(\mathbf{r}') \times [(\mathbf{r}' \cdot \nabla_{\mathbf{R}})\mathbf{B}_e(0)]\,dx'dy'dz'.
$$

利用 $\displaystyle\iiint_\Omega \mathbf{j}_f(\mathbf{r}') dx'dy'dz' = 0$，我们看到此式的 第一项为零。再利用 $\displaystyle\iiint_\Omega \left( x_i' j_{fk}(\mathbf{r}') + x_k' j_{fi}(\mathbf{r}') \right) dx'dy'dz' = 0$ ，我们有

$$
\begin{aligned}
&\int\int\int_{\Omega'} j_{fk}(\mathbf{r}') (\mathbf{r}' \cdot \nabla_{\mathbf{R}}) dx'dy'dz' = \int\int\int_{\Omega'} j_{fk}(\mathbf{r}') \left( \sum_{i=1}^3 x_i' \frac{\partial}{\partial X_i} \right) dx'dy'dz' \\\\
&= \sum_{i=1}^3 \left( \frac{1}{2} \int\int\int_{\Omega'} j_{fk}(\mathbf{r}') x_i' dx'dy'dz' + \frac{1}{2} \int\int\int_{\Omega'} j_{fi}(\mathbf{r}') x_k' dx'dy'dz' \right) \frac{\partial}{\partial X_i} \\\\
&= \sum_{i=1}^3 \left( -\frac{1}{2} \int\int\int_{\Omega'} j_{fi}(\mathbf{r}') x_k' dx'dy'dz' + \frac{1}{2} \int\int\int_{\Omega'} j_{fk}(\mathbf{r}') x_i' dx'dy'dz' \right) \frac{\partial}{\partial X_i} \\\\
&= -\frac{1}{2} \sum_{i=1}^3 \left( \int\int\int_{\Omega'} j_{fi}(\mathbf{r}') x_k' dx'dy'dz' - \int\int\int_{\Omega'} j_{fk}(\mathbf{r}') x_i' dx'dy'dz' \right) \frac{\partial}{\partial X_i} \\\\
&= \left[ \left( \frac{1}{2} \int\int\int_{\Omega'} \mathbf{r}' \times \mathbf{j}_f(\mathbf{r}') dx'dy'dz' \right) \times \nabla_{\mathbf{R}} \right]_k.
\end{aligned}
$$

因此，$\mathbf{F}$ 可以写作

$$
\mathbf{F} = \left( \left( \frac{1}{2} \int\int\int_{\Omega'} \mathbf{r}' \times \mathbf{j}_f(\mathbf{r}') dx'dy'dz' \right) \times \nabla_{\mathbf{R}} \right) \times \mathbf{B}_e(0) = (\mathbf{m} \times \nabla_{\mathbf{R}}) \times \mathbf{B}_e(0).
$$

再利用 (当 $\mathbf{a}$ 是常矢量时成立的) 微分恒等式

$$
(\mathbf{a} \times \nabla) \times \mathbf{b} = \nabla (\mathbf{a} \cdot \mathbf{b}) - \mathbf{a} (\nabla \cdot \mathbf{b}),
$$

即可得到

$$
\mathbf{F} = \nabla_{\mathbf{R}} (\mathbf{m} \cdot \mathbf{B}_e(0)) - \mathbf{m} (\nabla_{\mathbf{R}} \cdot \mathbf{B}_e(0)) = \nabla_{\mathbf{R}} (\mathbf{m} \cdot \mathbf{B}_e(0)).
$$

这隐含着磁偶极矩在外场 $\mathbf{B}_e(0)$ 中的势能为

$$
U = -\mathbf{m} \cdot \mathbf{B}_e(0),
$$

这与前面给出的结果是一致的。

接下来，我们再计算磁偶极矩在外场中所感受的外力矩。我们有

$$
\mathbf{M}_{\text{out}} = \int\int\int_{\Omega'} \mathbf{r}' \times \mathbf{f}(\mathbf{r}') dx'dy'dz' = \int\int\int_{\Omega'} \mathbf{r}' \times (\mathbf{j}_f(\mathbf{r}') \times \mathbf{B}_e(\mathbf{r}')) dx'dy'dz'.
$$

若只取展开式 $\mathbf{B}_e(\mathbf{r}') \cong \mathbf{B}_e(0) + (\mathbf{r}' \cdot \nabla_{\mathbf{R}})\mathbf{B}_e(0)$ 的第一项，我们有

$$
\begin{aligned}
\mathbf{M}_{\text{out}} &\cong \int\int\int_{\Omega'} \mathbf{r}' \times (\mathbf{j}_f(\mathbf{r}') \times \mathbf{B}_e(0)) dx'dy'dz' \\\\
&= \int\int\int_{\Omega'} (\mathbf{r}' \cdot \mathbf{B}_e(0)) \mathbf{j}_f(\mathbf{r}') dx'dy'dz' - \left( \int\int\int_{\Omega'} \mathbf{r}' \cdot \mathbf{j}_f(\mathbf{r}') dx'dy'dz' \right) \mathbf{B}_e(0).
\end{aligned}
$$

利用微分恒等式

$$
\nabla_{\mathbf{r}'} (\mathbf{j}_f(\mathbf{r}') r'^2) = r'^2 \nabla_{\mathbf{r}'} \cdot \mathbf{j}_f(\mathbf{r}') + (\mathbf{j}_f(\mathbf{r}') \cdot \nabla_{\mathbf{r}'}) r'^2 = 2 \mathbf{j}_f(\mathbf{r}') \cdot \mathbf{r}'.
$$

 (这里，我们使用了连续性方程 $\nabla_{\mathbf{r}'} \cdot \mathbf{j}_f(\mathbf{r}') = 0$) ，我们可以将上式改写作

$$
\begin{aligned}
\mathbf{M}_{\text{out}} &= \int\int\int_{\Omega'} (\mathbf{r}' \cdot \mathbf{B}_e(0)) \mathbf{j}_f(\mathbf{r}') dx'dy'dz' \\\\
&- \left( \frac{1}{2} \int\int\int_{\Omega'} \nabla_{\mathbf{r}'} (\mathbf{j}_f(\mathbf{r}') r'^2) dx'dy'dz' \right) \cdot \mathbf{B}_e(0).
\end{aligned}
$$

再利用高斯定理，可见上式第二项为零。因此，我们最后得到

$$
\mathbf{M}_{\text{out}} = \sum_{i=1}^3 \left( \int\int\int_{\Omega'} x_i' \mathbf{j}_f(\mathbf{r}') dx'dy'dz' \right) \cdot B_{ei}(0).
$$

再一次利用
$$
\iiint_\Omega \left( x_i' j_{fk}(\mathbf{r}') + x_k' j_{fi}(\mathbf{r}') \right) dx'dy'dz' = 0.
$$
可得到

$$
\mathbf{M}_{\text{out}} = \frac{1}{2} \left( \int\int\int_{\Omega'} \mathbf{r}' \times \mathbf{j}_f(\mathbf{r}') dx'dy'dz' \right) \times \mathbf{B}_e(0) = \mathbf{m} \times \mathbf{B}_e(0).
$$

与 $\mathbf{M}_{\text{out}} = \mathbf{m} \times \mathbf{B}_e(0)$ 完全一样。

