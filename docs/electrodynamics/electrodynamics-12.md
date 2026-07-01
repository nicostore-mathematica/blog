---
title: Lesson 12 静电学 II
permalink: /electrodynamics/electrodynamics-12/
createTime: 2026/03/15 22:15:42
---

## Part 4 格林函数

下面要考虑一般的静电学问题。为了这一目的，我们引入格林函数方法。

一般的静电学问题可以大致分为两类：

> **第一类边值问题**：空间区域 $\Omega$ 中的电荷分布 $\rho_f(\mathbf{r})$ 和边界 $S = \partial\Omega$ 上各点处的电势 $\Phi_S(\mathbf{r})$ 已经给定；
>
> **第二类边值问题**： $\Omega$ 内的电荷分布 $\rho_f(\mathbf{r})$ 和边界 $S = \partial\Omega$ 上各点处的电场的法线分量 $\dfrac{\partial\Phi_S(\mathbf{r})}{\partial n}$ 已经给定。

我们的任务是用格林函数方法，在这两类边值条件下求解电势在 $\Omega$ 内各点处的分布 $\Phi(\mathbf{r})$。

为此，我们引入所谓 $\delta$-函数的定义。它被定义作
$$
\delta(x) = 
\begin{cases}
0, & \text{if } x \ne 0; \\\\
\infty, & \text{if } x = 0,
\end{cases}
$$

并且满足条件

$$
\int_{-\infty}^{\infty} \delta(x) dx = 1.
$$

这一函数原本是狄拉克（Dirac）于 1926 年引入以解决量子力学中连续谱态的归一化问题的，后被物理学家广泛应用于处理各种边值问题。严格地说，它不是一种通常意义上的函数，而是一种被称之为分布（distribution）的连续泛函。在实际运算中，人们常常用某些函数来逼近它。例如，在一维空间中，若我们考虑函数

$$
f_\epsilon(x) = \frac{1}{\pi} \frac{\epsilon}{x^2 + \epsilon^2}, \quad \epsilon > 0.
$$

显然，当 $x \ne 0$ 时，我们有

$$
\lim_{\epsilon \to 0^+} f_\epsilon(x) = \lim_{\epsilon \to 0^+} \frac{1}{\pi} \frac{\epsilon}{x^2 + \epsilon^2} = 0,
$$

而当 $x = 0$ 时，我们又有

$$
\lim_{\epsilon \to 0^+} f_\epsilon(x = 0) = \lim_{\epsilon \to 0^+} \frac{1}{\pi} \frac{\epsilon}{\epsilon^2} = \lim_{\epsilon \to 0^+} \frac{1}{\pi\epsilon} = \infty.
$$

另一方面，将 $f_\epsilon(x)$ 在实轴上积分后我们有

$$
\begin{aligned}
\int_{-\infty}^{\infty} f_\epsilon(x) dx &= \int_{-\infty}^{\infty} \frac{1}{\pi} \frac{\epsilon}{x^2 + \epsilon^2} dx = \left. \frac{1}{\pi} \arctan\frac{x}{\epsilon} \right|_{-\infty}^{\infty} \\\\
&= \frac{1}{\pi} (\arctan\infty - \arctan(-\infty)) = \frac{1}{\pi} \left( \frac{\pi}{2} - \left( -\frac{\pi}{2} \right) \right) = 1.
\end{aligned}
$$

因此，按照定义，我们当有

$$
\lim_{\epsilon \to 0^+} \frac{1}{\pi} \frac{\epsilon}{x^2 + \epsilon^2} = \delta(x).
$$

有了 $\delta$ 函数的定义后，我们现在可以将位于坐标原点处的一个带电量为 $Q$ 的点电荷分布写作 $\rho(\mathbf{r}) = Q\delta(\mathbf{r})$。这是由于等式

$$
\begin{aligned}
\int \int \int_{R^3} \rho(\mathbf{r}) dxdydz &= \int \int \int_{R^3} Q\delta(\mathbf{r}) dxdydz = \int \int \int_{R^3} Q\delta(x)\delta(y)\delta(z) dxdydz \\\\
&= Q \left( \int_{-\infty}^{\infty} \delta(x) dx \right) \left( \int_{-\infty}^{\infty} \delta(y) dy \right) \left( \int_{-\infty}^{\infty} \delta(z) dz \right) = Q
\end{aligned}
$$

成立。$\delta$ 函数的另外一个有用的性质是，它与一个连续函数 $f(\mathbf{r})$ 的乘积的积分等于该函数在 $\mathbf{r} = 0$ 处的值，即我们有

$$
\int \int \int_{R^3} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz = f(0).
$$

这一公式的证明非常简单。让我们任取一个以原点为球心，半径为 $\epsilon$ 的小球 $\Omega_\epsilon$。那么，我们都有的

$$
\begin{aligned}
&\int \int \int_{R^3} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz \\\\
&= \int \int \int_{R^3 \setminus \Omega_\epsilon} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz + \int \int \int_{\Omega_\epsilon} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz \\\\
&= \int \int \int_{\Omega_\epsilon} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz.
\end{aligned}
$$

当 $\epsilon$ 足够小时，我们可以利用 $f(\mathbf{r})$ 在 $\mathbf{r} = 0$ 处的值 $f(0)$ 代替它在被积函数的位置，从而得到

$$
\begin{aligned}
&\int \int \int_{R^3} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz = \int \int \int_{\Omega_\epsilon} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz \\\\
&\simeq \int \int \int_{\Omega_\epsilon} f(0) \delta(\mathbf{r}) dxdydz = f(0) \int \int \int_{\Omega_\epsilon} \delta(\mathbf{r}) dxdydz \\\\
&= f(0) \int \int \int_{R^3} \delta(\mathbf{r}) dxdydz = f(0).
\end{aligned}
$$

最后，我们令 $\epsilon \to 0$，则上式变为一个等式，即

$$
\int \int \int_{R^3} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz = f(0).
$$

可以形象地讲，$\delta$ 函数将任何一个连续函数都映射到一个复数 $f(0)$ 去。在这种意义上，$\delta$ 函数可以被理解为一个连续泛函（continuous functional）。

接下来，我们要介绍一个十分有用的恒等式

$$
\nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} = -4\pi \delta(\mathbf{r} - \mathbf{r}').
$$

/proof/

> 首先，不难验证
>
> $$
> \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} = -\frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}
> $$
> 成立。其次，利用在第二章中的相关推导，我们看到当 $\mathbf{r} \ne \mathbf{r}'$ 时，
> $$
> \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} = -\nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} = 0.
> $$
> 因此，我们只需研究 $\nabla^2_{\mathbf{r}} \dfrac{1}{|\mathbf{r} - \mathbf{r}'|}$ 在 $\mathbf{r} \simeq \mathbf{r}'$ 附近的行为即可。取一个以 $\mathbf{r}$ 为球心，$\delta$ 为半径的小球体 $\Omega_\delta$。则我们有
> $$
> \begin{aligned}
> &\int \int \int_{R^3} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz \\\\
> &= \int \int \int_{R^3 \setminus \Omega_\delta} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz + \int \int \int_{\Omega_\delta} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz \\\\
> &= \int \int \int_{\Omega_\delta} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz.
> \end{aligned}
> $$
> 对上式的右边使用高斯定理后，我们进一步得到
> $$
> \begin{aligned}
> \int \int \int_{R^3} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz &= \int \int \int_{\Omega_\delta} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz \\\\
> &= \oint \oint_{S_\delta} \left( \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right) \cdot d\mathbf{S} = -\oint \oint_{S_\delta} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \cdot d\mathbf{S} = -4\pi.
> \end{aligned}
> $$
> 另一方面，按照定义，我们有
> $$
> \int \int \int_{R^3} (-4\pi) \delta(\mathbf{r} - \mathbf{r}') dxdydz = -4\pi,
> $$
>
> 故成立。

在做了这些准备之后，我们现在可以引入静电学问题中的格林函数了。它被定义作方程

$$
\nabla^2_{\mathbf{r}} G(\mathbf{r}, \mathbf{r}') = -\frac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}')
$$

的解。

根据点电荷与 $\delta$ 函数的关系，$G(\mathbf{r}, \mathbf{r}')$ 也可以被解释作真空中一个位于空间 $\mathbf{r}'$ 处带电量为 $q = 1$ 的点电荷在空间 $\mathbf{r}$ 处产生的静电势。

需要强调一点的是，由于 $\delta(\mathbf{r})$ 是一个偶函数，故 $\nabla^2_{\mathbf{r}} G(\mathbf{r}, \mathbf{r}') = \nabla^2_{\mathbf{r}'} G(\mathbf{r}', \mathbf{r})$ 显然成立。除此之外，亦可证明，在第一类边值条件下，$G(\mathbf{r}, \mathbf{r}') = G(\mathbf{r}', \mathbf{r})$ 也成立。

这一互易关系隐含着，在给定的边值条件下，位于 $\mathbf{r}'$ 处的单位电荷在 $\mathbf{r}$ 处产生的电势与位于 $\mathbf{r}$ 处的单位电荷在 $\mathbf{r}'$ 处产生的电势是等值的。

我们知道，要想唯一地决定 $G(\mathbf{r}, \mathbf{r}')$，需要给出在相关的空间区域 $\Omega$ 的边界 $S = \partial\Omega$ 上的电势分布 $\Phi_S$ 或其导数分布 $\left.\dfrac{\partial\Phi_S}{\partial n}\right|_S$。让我们结合讲过的例子，分别考虑以下三种情况。

> (1) 无界空间中的格林函数。在此情况下，可以将无穷远处的电势取为零。因此，$G_0(\mathbf{r}, \mathbf{r}')$ 可以唯一地决定下来。我们有
>
> $$
> G_0(\mathbf{r}, \mathbf{r}') = \frac{1}{4\pi\epsilon_0} \frac{1}{\sqrt{(x - x')^2 + (y - y')^2 + (z - z')^2}} = \frac{1}{4\pi\epsilon_0} \frac{1}{|\mathbf{r} - \mathbf{r}'|}.
> $$
>
> 事实上，利用
> $$
> \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} = -4\pi \delta(\mathbf{r} - \mathbf{r}').
> $$
> 我们可以直接验证
>
> $$
> \begin{aligned}
> \nabla_{\mathbf{r}}^2 G_0(\mathbf{r}, \mathbf{r}') &= \nabla_{\mathbf{r}}^2 \left( \frac{1}{4\pi\epsilon_0} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right) = \frac{1}{4\pi\epsilon_0} \nabla_{\mathbf{r}}^2 \frac{1}{|\mathbf{r} - \mathbf{r}'|} \\\\
> &= \frac{1}{4\pi\epsilon_0} (-4\pi \delta(\mathbf{r} - \mathbf{r}')) = -\frac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}').
> \end{aligned}
> $$
>
> 的确是我们要找的解。
>
> (2) 上半平面的格林函数。我们可以写出此时的格林函数
>
> $$
> \begin{aligned}
> G_1(\mathbf{r}, \mathbf{r}') &= \frac{1}{4\pi\epsilon_0} \left( \frac{1}{\sqrt{(x - x')^2 + (y - y')^2 + (z - z')^2}} \right. \\\\
> &\quad \left. - \frac{1}{\sqrt{(x - x')^2 + (y - y')^2 + (z + z')^2}} \right).
> \end{aligned}
> $$
>
> (3) 球外空间的格林函数。若令
>
> $$
> r = \sqrt{x^2 + y^2 + z^2}, \quad r' = \sqrt{x'^2 + y'^2 + z'^2}.
> $$
>
> 则我们有
>
> $$
> G_2(\mathbf{r}, \mathbf{r}') = \frac{1}{4\pi\epsilon_0} \left( \frac{1}{\sqrt{r^2 + r'^2 - 2rr' \cos\alpha}} - \frac{R_0 / r'}{\sqrt{r^2 + b^2 - 2rb \cos\alpha}} \right),
> $$
>
> 这里，$R_0$ 为球的半径，电荷点为 $P$，场点 $P'$，角度 $\alpha$ 为 $\overrightarrow{OP}$ 和 $\overrightarrow{OP'}$ 的夹角。
>
> 将 $b = \dfrac{R_0^2}{r'}$ 代入上式后，我们有
> $$
> G_2(\mathbf{r}, \mathbf{r}') = \frac{1}{4\pi\epsilon_0} \left( \frac{1}{\sqrt{r^2 + r'^2 - 2rr' \cos\alpha}} - \frac{1}{\sqrt{\left( \frac{rr'}{R_0} \right)^2 + R_0^2 - 2rr' \cos\alpha}} \right).
> $$

接下来，我们讨论如何利用格林函数获得一般边值问题的解。先看第一类边值问题。

由于自由电荷在空间中的分布密度函数 $\rho_f(\mathbf{r}')$ 是已知的，故泊松方程
$$
\nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') = -\frac{1}{\epsilon} \rho_f(\mathbf{r}')
$$

以及

$$
\nabla_{\mathbf{r}}^2 G(\mathbf{r}, \mathbf{r}') = -\frac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}')
$$

成立。将 $\displaystyle\nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') = -\dfrac{1}{\epsilon} \rho_f(\mathbf{r}')$ 乘以 $G(\mathbf{r}, \mathbf{r}')$ 再减去 $\displaystyle\nabla_{\mathbf{r}}^2 G(\mathbf{r}, \mathbf{r}') = -\dfrac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}')$ 乘以 $\Phi(\mathbf{r}')$ 后

$$
\begin{aligned}
G(\mathbf{r}, \mathbf{r}') \nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 G(\mathbf{r}, \mathbf{r}') &= G(\mathbf{r}', \mathbf{r}) \nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 G(\mathbf{r}', \mathbf{r}) \\\\
&= -\frac{1}{\epsilon} \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') + \frac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}') \Phi(\mathbf{r}').
\end{aligned}
$$

将此式的两边对全空间积分后，有

$$
\begin{aligned}
&\int \int \int_\Omega \left( G(\mathbf{r}', \mathbf{r}) \nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 G(\mathbf{r}', \mathbf{r}) \right) dx' dy' dz' \\\\
&= \int \int \int_\Omega \left( -\frac{1}{\epsilon} \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') + \frac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}') \Phi(\mathbf{r}') \right) dx' dy' dz' \\\\
&= -\frac{1}{\epsilon} \int \int \int_\Omega \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') dx' dy' dz' + \frac{1}{\epsilon_0} \Phi(\mathbf{r}).
\end{aligned}
$$

对于上式的左边，可以使用恒等式

$$
\Psi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 \Psi(\mathbf{r}') = \nabla_{\mathbf{r}'} \cdot \left( \Psi(\mathbf{r}') \nabla_{\mathbf{r}'} \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'} \Psi(\mathbf{r}') \right)
$$

因此，上式可以被改写作

$$
\begin{aligned}
&\int \int \int_\Omega \left( G(\mathbf{r}', \mathbf{r}) \nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 G(\mathbf{r}', \mathbf{r}) \right) dx' dy' dz'\\\\
&= \int \int \int_\Omega \nabla_{\mathbf{r}'} \left( G(\mathbf{r}', \mathbf{r}) \nabla_{\mathbf{r}'} \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'} G(\mathbf{r}', \mathbf{r}) \right) dx' dy' dz' \\\\
&= \oint \oint_{\partial\Omega} \left( G(\mathbf{r}', \mathbf{r}) \nabla_{\mathbf{r}'} \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'} G(\mathbf{r}', \mathbf{r}) \right) \cdot d\mathbf{S}' \\\\
&= \oint \oint_{\partial\Omega} \left( G(\mathbf{r}', \mathbf{r}) \frac{\partial \Phi(\mathbf{r}')}{\partial n'} - \Phi(\mathbf{r}') \frac{\partial G(\mathbf{r}', \mathbf{r})}{\partial n'} \right) dS' \\\\
&= -\frac{1}{\epsilon} \int \int \int_\Omega \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') dx' dy' dz' + \frac{1}{\epsilon_0} \Phi(\mathbf{r}),
\end{aligned}
$$

或是

$$
\begin{aligned}
\Phi(\mathbf{r}) &= \frac{\epsilon_0}{\epsilon} \int \int \int_\Omega \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') dx' dy' dz' \\\\
&\quad + \epsilon_0 \oint \oint_{\partial\Omega} \left( G(\mathbf{r}', \mathbf{r}) \frac{\partial \Phi(\mathbf{r}')}{\partial n'} - \Phi(\mathbf{r}') \frac{\partial G(\mathbf{r}', \mathbf{r})}{\partial n'} \right) dS'. 
\end{aligned}
$$

由于在第一类边值问题中，$\rho_f(\mathbf{r}')$ 和 $\Phi(\mathbf{r}')|_{\partial\Omega}$ 是已知的，且在 $\partial\Omega$ 上，$G(\mathbf{r}', \mathbf{r}) = 0$，故我们进一步得到

$$
\Phi(\mathbf{r}) = \frac{\epsilon_0}{\epsilon} \int \int \int_\Omega \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') dx' dy' dz' - \epsilon_0 \oint \oint_{\partial\Omega} \Phi(\mathbf{r}') \frac{\partial G(\mathbf{r}', \mathbf{r})}{\partial n'} dS'.
$$

因此，$\Phi(\mathbf{r})$ 可以唯一地决定下来。

对于第二类边值问题，除了 $\left. \dfrac{\partial \Phi(\mathbf{r}')}{\partial n} \right|_{\partial\Omega}$ 的值外，我们还需知道 $\Phi(\mathbf{r}')$ 在边界上的值。因此，格林函数在边界上的取值需要加以改动。

## Part 5 电多极矩

一个无限大均匀介质中给定电荷密度 $\rho_f(\mathbf{r})$ 所产生的电势为

$$
\Phi(\mathbf{r}) = \frac{1}{4\pi\epsilon} \int \int \int_{R^3} \frac{\rho_f(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} dx'dy'dz'.
$$
在许多物理问题中，电荷只分布在在一个很小的区域 $\Omega$ 内，而人们所关心的又是电势 $\Phi(\mathbf{r})$ 在距离这一区域较远，即 $|\mathbf{r}-\mathbf{r}'|$ 远大于区域 $\Omega$ 的线度 $l$ 处的值。因此，我们没有必要对上式中的积分求精确值。近似地，我们可以将被积表达式按照 $l/|\mathbf{r}|$ 的幂次做展开，然后决定 $\Phi(\mathbf{r})$ 的各级近似值。

当 $|\mathbf{r}'| \ll |\mathbf{r}|$ 时，我们近似有

$$
\begin{aligned}
f(\mathbf{r}-\mathbf{r}') &\cong f(\mathbf{r})+\sum_{i=1}^{3}\frac{\partial f(\mathbf{r})}{\partial x_i}(-x'_i)+\frac{1}{2!}\sum_{i=1}^{3}\sum_{j=1}^{3}\frac{\partial^2 f(\mathbf{r})}{\partial x_i\partial x_j}(-x'_i)(-x'_j) \\
&= f(\mathbf{r})-\mathbf{r}'\cdot\nabla_{\mathbf{r}}f(\mathbf{r})+\frac{1}{2!}(\mathbf{r}'\cdot\nabla_{\mathbf{r}})^2f(\mathbf{r}).
\end{aligned}
$$

将此展开式应用到上式中的被积函数，我们有

$$
\begin{aligned}
\Phi(\mathbf{r})&\cong\frac{1}{4\pi\epsilon}\int\int\int_{\Omega}\rho_f(\mathbf{r}')\left(\frac{1}{r}-\mathbf{r}'\cdot\nabla_{\mathbf{r}}\frac{1}{r}+\frac{1}{2!}(\mathbf{r}'\cdot\nabla_{\mathbf{r}})^2\frac{1}{r}\right)dx'dy'dz'\\\\
&=\frac{1}{4\pi\epsilon r}\int\int\int_{\Omega}\rho_f(\mathbf{r}')dx'dy'dz'-\frac{1}{4\pi\epsilon}\int\int\int_{\Omega}\rho_f(\mathbf{r}')\mathbf{r}'\cdot\left(\nabla_{\mathbf{r}}\frac{1}{r}\right)dx'dy'dz'\\\\
&+\frac{1} {8\pi\epsilon}\int\int\int_{\Omega}\rho(\mathbf{r}')\sum_{i=1}^{3}\sum_{j=1}^{3}x'_ix'_j\left(\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}\right)dx'dy'dz'\\\\
&=\frac{1}{4\pi\epsilon}\frac{Q}{r}-\frac{1}{4\pi\epsilon}\mathbf{P}\cdot\nabla_{\mathbf{r}}\frac{1}{r}+\frac{1}{4\pi\epsilon}\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}.
\end{aligned}
\tag{a}
$$

这里，

$$
Q=\int\int\int_{\Omega}\rho_f(\mathbf{r}')dx'dy'dz',\quad \mathbf{P}=\int\int\int_{\Omega}\rho_f(\mathbf{r}')\mathbf{r}'dx'dy'dz',
$$

以及

$$
D_{ij}=\int\int\int_{\Omega}\rho_f(\mathbf{r}')3x'_ix'_jdx'dy'dz'.
$$

分别称为体系的总电荷，电偶极矩和电四极矩。

由表达式 (a)，我们得出结论，作为第一级近似，可以将所有得电荷都置于原点处，那么在远离区域 $\Omega$ 的 $\mathbf{r}$ 处，电势将由 (a) 式中的第一项给出。进一步，若电荷密度分布 $\rho(\mathbf{r}')$ 对于坐标原点不对称，那么 $\mathbf{P}$ 一般不为零。此时，(a) 式中的第二项对于电势的贡献会显现出来，我们有

$$
\Phi^{(2)}(\mathbf{r})=-\frac{1}{4\pi\epsilon}\mathbf{P}\cdot\nabla_{\mathbf{r}}\frac{1}{r}=\frac{\mathbf{P}\cdot\mathbf{r}}{4\pi\epsilon r^3}.
$$

由于体系的总电荷以及电偶极矩的概念相对比较熟悉，我们下面将集中讨论电四极矩的性质。首先，我们注意到，按照定义，$\{D_{ij}\}$ 构成了一个 $3\times 3$ 矩阵的矩阵元，并且这个矩阵是对称的，即

$$
D_{ij}=\int\int\int_{\Omega}3x'_ix'_j\rho_f(x',y',z')dx'dy'dz'=D_{ji}.
$$

因此，这九个量中最多只能有六个是彼此独立的。我们要证明，实际上它们之中只有五个是独立的。为此，我们先假定 $D_{11}, D_{22}, D_{33}, D_{12}, D_{13}$ 和 $D_{23}$ 是独立的。那么，若在前三个分量上各自加上一个常数 $C$，则新定义的六个分量

$$
D'_{11}=D_{11}+C,\, D'_{22}=D_{22}+C,\, D'_{33}=D_{33}+C,\, D'_{12}=D_{12},\, D'_{13}=D_{13},\, D'_{23}=D_{23}
$$

亦应该是独立的。现在，我们取

$$
C=-\int\int\int_{\Omega}r'^2\rho_f(x',y',z')dx'dy'dz',
$$

则如此定义的新的六个分量可以统一地写作

$$
D'_{ij}=D_{ij}-\delta_{ij}\int\int\int_{\Omega}r'^2\rho_f(x',y',z')dx'dy'dz'.
$$

接下来，我们要论证，它们给出的相应的电势的表达式并不改变。实际上，我们有

$$
\begin{aligned}
&\frac{1}{4\pi\epsilon}\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D'_{ij}\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}dx'dy'dz'=\frac{1}{4\pi\epsilon}\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}dx'dy'dz'\\\\
&-\frac{1}{4\pi\epsilon}\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}\delta_{ij}\int\int\int_{\Omega}r'^2\rho_f(x',y',z')\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}dx'dy'dz'\\\\
&=\frac{1}{4\pi\epsilon}\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}dx'dy'dz'-\frac{1}{4\pi\epsilon}\frac{1}{6}\int\int\int_{\Omega}r'^2\rho_f(\mathbf{r}')\left(\nabla^2_{\mathbf{r}}\frac{1}{r}\right)dx'dy'dz'.
\end{aligned}
$$

利用方程 $\nabla^2_{\mathbf{r}}\dfrac{1}{r}=-4\pi\delta(\mathbf{r})$，我们看到，当 $\mathbf{r}\neq 0$ 时，上式的第二项为零。因此，四极矩 $\{D'_{ij}\}$ 和 $\{D_{ij}\}$ 在远处产生的静电势并无区别。

另一方面，按照定义，我们有

$$
\begin{aligned}
D'_{11}+D'_{22}+D'_{33}&=\left(D_{11}-\int\int\int_{\Omega}r'^2\rho_f(\mathbf{r}')dx'dy'dz'\right)\\\\
&+\left(D_{22}-\int\int\int_{\Omega}r'^2\rho_f(\mathbf{r}')dx'dy'dz'\right)+\left(D_{33}-\int\int\int_{\Omega}r'^2\rho_f(\mathbf{r}')dx'dy'dz'\right)\\\\
&=\int\int\int_{\Omega}3x'x'\rho_f(x',y',z')dx'dy'dz'+\int\int\int_{\Omega}3y'y'\rho_f(x',y',z')dx'dy'dz'\\\\
&+\int\int\int_{\Omega}3z'z'\rho_f(x',y',z')dx'dy'dz'-3\int\int\int_{\Omega}r'^2\rho_f(x',y',z')dx'dy'dz'\\\\
&=3\int\int\int_{\Omega}r'^2\rho_f(x',y',z')dx'dy'dz'-3\int\int\int_{\Omega}r'^2\rho_f(x',y',z')dx'dy'dz'\\\\
&=0.
\end{aligned}
$$

也就是说，$D'_{11}, D'_{22}$ 和 $D'_{33}$ 并非独立的。这导致了悖论。因此，六个分量 $D_{11}, D_{22}, D_{33}, D_{12}, D_{13}$ 和 $D_{23}$ 中最多只有五个是独立的。在文献中，人们一般将 $\{D'_{ij}\}$ 定义作一个电荷体系的电四极矩张量。

/example/

> 设外电场 $\mathbf{E}_{\text{out}}(\mathbf{r})$ 的电势为 $\Phi_{\text{out}}(\mathbf{r})$。那么，一个处于此电场中的带电体的能量为
>
> $$
> W=\int\int\int_{\Omega}\rho(\mathbf{r})\Phi_{\text{out}}(\mathbf{r})dxdydz.
> $$
>
> 假设 $\Omega$ 是一个非常小的区域，使得我们可以将其中的电势 $\Phi_{\text{out}}(\mathbf{r})$ 在某一点（记作 $\mathbf{r}=0$）附近做展开，即
>
> $$
> \Phi_{\text{out}}(\mathbf{r})\cong\Phi_{\text{out}}(0)+\sum_{i=1}^{3}x_i\frac{\partial\Phi_{\text{out}}(0)}{\partial x_i}+\frac{1}{2!}\sum_{i=1}^{3}\sum_{j=1}^{3}x_ix_j\frac{\partial^2\Phi_{\text{out}}(0)}{\partial x_i\partial x_j}.
> $$
>
> 将之代入 $W$ 的表达式后，我们有
>
> $$
> \begin{aligned}
> W &= \int\int\int_{\Omega}\rho(\mathbf{r})\Phi_{\text{out}}(\mathbf{r})dxdydz=\int\int\int_{\Omega}\rho(\mathbf{r})\Phi_{\text{out}}(0)dxdydz\\\\
> &+ \sum_{i=1}^{3}\int\int\int_{\Omega}\rho(\mathbf{r})x_i\frac{\partial\Phi_{\text{out}}(0)}{\partial x_i}dxdydz+\frac{1}{2!}\sum_{i=1}^{3}\sum_{j=1}^{3}\int\int\int_{\Omega}\rho(\mathbf{r})x_ix_j\frac{\partial^2\Phi_{\text{out}}(0)}{\partial x_i\partial x_j}dxdydz\\\\
> &= Q\Phi_{\text{out}}(0)+\mathbf{P}\cdot\nabla\Phi_{\text{out}}(0)+\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial^2\Phi_{\text{out}}(0)}{\partial x_i\partial x_j}.
> \end{aligned}
> $$
>
> 其中的第一项可视作体系的电荷都集中在原点 $\mathbf{r}=0$ 时的电势能，第二项则解释作体系的电偶极矩在外场中的能量。我们又可将之写作
>
> $$
> W^{(2)}=\mathbf{P}\cdot\nabla\Phi_{\text{out}}(0)=-\mathbf{P}\cdot\mathbf{E}_{\text{out}}(0).
> $$
>
> 而第三项则为体系的电四极矩在外电场中的能量。它也可被重新写作
>
> $$
> W^{(3)}=\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial^2\Phi_{\text{out}}(0)}{\partial x_i\partial x_j}=-\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial E_{\text{out}}^j(0)}{\partial x_i}.
> $$
>
> 因此可见，只有在非均匀外电场中，电四极矩对电势能的贡献才不为零。

利用电偶极矩的势能函数，我们可以计算它在电场 $\mathbf{E}_{\text{out}}(\mathbf{r})$ 中所感受到的力和力矩 $\mathbf{M}_{\text{out}}$，即
$$
\begin{aligned}
\mathbf{F} &= -\nabla W^{(2)}=-\nabla(-\mathbf{P}\cdot\mathbf{E}_{\text{out}}(\mathbf{r}))=\nabla(\mathbf{P}\cdot\mathbf{E}_{\text{out}}(\mathbf{r}))\\\\
&= (\mathbf{P}\cdot\nabla)\mathbf{E}_{\text{out}}(\mathbf{r})+(\mathbf{E}_{\text{out}}(\mathbf{r})\cdot\nabla)\mathbf{P}+\mathbf{P}\times(\nabla\times\mathbf{E}_{\text{out}}(\mathbf{r}))+\mathbf{E}_{\text{out}}(\mathbf{r})\times(\nabla\times\mathbf{P})\\\\
&= (\mathbf{P}\cdot\nabla)\mathbf{E}_{\text{out}}(\mathbf{r}),
\end{aligned}
$$

而

$$
\begin{aligned}
\mathbf{M}_{\text{out}} &= -\frac{\partial W^{(2)}}{\partial\vec{\varphi}}=-\frac{\partial}{\partial\varphi}\left(-\mathbf{P}\cdot\mathbf{E}_{\text{out}}(\mathbf{r})\right)\\\\
&= \frac{\partial}{\partial\varphi}\left(PE_{\text{out}}(\mathbf{r})\cos\varphi\right)\mathbf{e}_{\phi\varphi}=-PE_{\text{out}}(\mathbf{r})\sin\theta\mathbf{e}_{\phi\varphi}=\mathbf{P}\times\mathbf{E}_{\text{out}}(\mathbf{r}).
\end{aligned}
$$
