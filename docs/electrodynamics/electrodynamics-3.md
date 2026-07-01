---
title: Lesson 3 Maxwell 方程组 II
permalink: /electrodynamics/electrodynamics-3/
createTime: 2026/03/13 20:57:20
---

## Part 2 静磁场

前面我们提到了毕奥 - 萨伐尔定律

$$
dB(\mathbf{r}) = \frac{\mu_0 I_2}{4\pi} dl_2 \times \frac{\mathbf{r} - \mathbf{r}_2}{|\mathbf{r} - \mathbf{r}_2|^3}.
$$

如上所述，在稳恒电流的情况下，电流是在一个回路 $L$ 中流动。因此，它在空间 $\mathbf{r}$ 处所引起的总磁感应强度可以写作

$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \oint_L dl \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3},
$$

或是

$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, dx'dy'dz'.
$$

这里，$\Omega$ 为电流密度矢量 $\mathbf{j}(\mathbf{r}')$ 不为零的空间区域。上式称为毕奥 - 萨伐尔定律的积分形式。接下来我们要推导它的微分形式。

尽管前者可能更为直观一些，但后者在解静磁学问题时更为适用。

### · 微分形式

首先，我们注意到恒等式

$$
\frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} = - \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|}.
$$

成立。因此公式
$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, dx'dy'dz'.
$$
可以被改写作

$$
\begin{aligned}
\mathbf{B}(\mathbf{r}) &= - \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \times \left( \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right)\, dx'dy'dz' \\\\
&= \frac{\mu_0}{4\pi} \int \int_\Omega \left( \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right) \times \mathbf{j}(\mathbf{r}')\, dx'dy'dz'.
\end{aligned}
$$

利用恒等式

$$
\nabla \times (f(\mathbf{r}) \mathbf{A}(\mathbf{r})) = (\nabla f(\mathbf{r})) \times \mathbf{A}(\mathbf{r}) + f(\mathbf{r}) (\nabla \times \mathbf{A}(\mathbf{r})),
$$

我们可以将此式进一步改写为

$$
\begin{aligned}
\mathbf{B}(\mathbf{r}) &= \frac{\mu_0}{4\pi} \int \int_\Omega \nabla_{\mathbf{r}} \times \frac{\mathbf{j}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz' \\\\
&- \frac{\mu_0}{4\pi} \int \int_\Omega \frac{1}{|\mathbf{r} - \mathbf{r}'|} (\nabla_{\mathbf{r}} \times \mathbf{j}(\mathbf{r}'))\, dx'dy'dz'.
\end{aligned}
$$

由于电流密度 $\mathbf{j}(\mathbf{r}')$ 并不依赖于观察点坐标 $\mathbf{r}$，故此式右边的第二项为零。因此，我们得到

$$
\mathbf{B}(\mathbf{r}) = \nabla_{\mathbf{r}} \times \left( \frac{\mu_0}{4\pi} \int \int_\Omega \frac{\mathbf{j}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz' \right) \equiv \nabla_{\mathbf{r}} \times \mathbf{A}(\mathbf{r}),
$$

而

$$
\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int_\Omega \frac{\mathbf{j}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz'
$$

在文献中被称为由电流分布 $\mathbf{j}(\mathbf{r}')$ 引起的矢量势。

对数学式
$$
\mathbf{B}(\mathbf{r}) = \nabla_{\mathbf{r}} \times \left( \frac{\mu_0}{4\pi} \int \int_\Omega \frac{\mathbf{j}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz' \right) \equiv \nabla_{\mathbf{r}} \times \mathbf{A}(\mathbf{r}),
$$
两边取散度后，我们得到
$$
\mathrm{div}\,\mathbf{B}(\mathbf{r}) \equiv \nabla \cdot \mathbf{B}(\mathbf{r}) = \nabla \cdot (\nabla \times \mathbf{A}(\mathbf{r})) \equiv 0.
$$

也就是说，磁感应强度矢量场 $\mathbf{B}(\mathbf{r})$ 是无源的，即没有起点，也没有终点，总是形成一个回路。

接下来，我们计算 $\mathbf{B}(\mathbf{r})$ 的旋度。我们有

$$
\nabla \times \mathbf{B}(\mathbf{r}) = \nabla_{\mathbf{r}} \times \left( \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, dx'dy'dz' \right)
$$

$$
= \frac{\mu_0}{4\pi} \int \int_\Omega \nabla_{\mathbf{r}} \times \left( \mathbf{j}(\mathbf{r}') \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, dx'dy'dz'.
$$

进一步，我们利用恒等式

$$
\nabla \times (\mathbf{a} \times \mathbf{b}) = \mathbf{a}(\nabla \cdot \mathbf{b}) - \mathbf{b}(\nabla \cdot \mathbf{a}) + (\mathbf{b} \cdot \nabla)\mathbf{a} - (\mathbf{a} \cdot \nabla)\mathbf{b}.
$$

改写上式。我们得到

$$
\begin{aligned}
\nabla \times \mathbf{B}(\mathbf{r}) &= \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' - \frac{\mu_0}{4\pi} \int \int_\Omega (\nabla_{\mathbf{r}} \cdot \mathbf{j}(\mathbf{r}')) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}' \\\\
&+ \frac{\mu_0}{4\pi} \int \int_\Omega \left( \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \cdot \nabla_{\mathbf{r}} \right) \mathbf{j}(\mathbf{r}')\, d\mathbf{r}' - \frac{\mu_0}{4\pi} \int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}' \\\\
&= \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' - \frac{\mu_0}{4\pi} \int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}'.
\end{aligned}
$$

我们需要论证上式最后一行中的第二项恒为零。为此，我们利用关系式

$$
\nabla_{\mathbf{r}} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} = - \nabla_{\mathbf{r}'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}.
$$

因此，我们有

$$
\begin{aligned}
&\int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}' = - \int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}'}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, dx'dy'dz' \\\\
&= - \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_x(x', y', z') \frac{\partial}{\partial x'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \\\\
&- \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_y(x', y', z') \frac{\partial}{\partial y'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \\\\
&- \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_z(x', y', z') \frac{\partial}{\partial z'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}.
\end{aligned}
$$

只需认真计算其中一项即可。例如，我们取上式右边的第一项，并对它做分步积分后得到

$$
- \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_x(x', y', z') \frac{\partial}{\partial x'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}
$$

$$
= - \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_x(x', y', z') \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \Big|_{x'=-\infty}^{x'=\infty}
$$

$$
+ \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_x(x', y', z')}{\partial x'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}.
$$

由于在无穷远处，电流密度 $j_x(x', y', z')$ 为零，故上式中的第一项为零，只有第二项得以保留。同理，我们可得

$$
- \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_y(x', y', z') \frac{\partial}{\partial y'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}
$$

$$
= \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_y(x', y', z')}{\partial y'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3},
$$

以及

$$
- \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_z(x', y', z') \frac{\partial}{\partial z'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}
$$

$$
= \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_z(x', y', z')}{\partial z'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}.
$$

我们最后得到

$$
\begin{aligned}
&\int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}' \\\\
&= \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_x(x', y', z')}{\partial x'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \\\\
&+ \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_y(x', y', z')}{\partial y'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \\\\
&+ \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_z(x', y', z')}{\partial z'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \\\\
&= \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, (\nabla_{\mathbf{r}'} \cdot \mathbf{j}(x', y', z')) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} = 0.
\end{aligned}
$$

在上式推导的最后一步，我们使用了稳恒电流所满足的连续性方程 $\nabla_{\mathbf{r}'} \cdot \mathbf{j}(\mathbf{r}') = 0$。

由此一来，
$$
\begin{aligned}
\nabla \times \mathbf{B}(\mathbf{r})&= \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' \\\\
&- \frac{\mu_0}{4\pi} \int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}'.
\end{aligned}
$$
可简化为

$$
\nabla \times \mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}'.
$$

在此式中出现的散度因子当 $\mathbf{r}' \ne \mathbf{r}$ 时恒为零。这是由于，按照定义，我们有

$$
\begin{aligned}
\nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}&= \frac{\partial}{\partial x} \frac{x - x'}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&+ \frac{\partial}{\partial y} \frac{y - y'}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&+ \frac{\partial}{\partial z} \frac{z - z'}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&= \frac{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2} - 3(x - x')^2[(x - x')^2 + (y - y')^2 + (z - z')^2]^{1/2}}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&+ \frac{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2} - 3(y - y')^2[(x - x')^2 + (y - y')^2 + (z - z')^2]^{1/2}}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&+ \frac{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2} - 3(z - z')^2[(x - x')^2 + (y - y')^2 + (z - z')^2]^{1/2}}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&= \frac{3}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}} - \frac{3[(x - x')^2 + (y - y')^2 + (z - z')^2]}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{5/2}}\\\\
&= \frac{3}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}} - \frac{3}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}} = 0.
\end{aligned}
$$

而当 $\mathbf{r}' = \mathbf{r}$ 时，此式不再成立。

为了处理这一特殊情况，我们可以选取一个以 $\mathbf{r}$ 为球心，半径为 $\delta$ 的小球 $\Omega_\delta$。因此
$$
\nabla \times \mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}'.
$$
式又可被写作
$$
\begin{aligned}
\nabla \times \mathbf{B}(\mathbf{r}) &= \frac{\mu_0}{4\pi} \int \int_{\Omega - \Omega_\delta} \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' + \frac{\mu_0}{4\pi} \int \int_{\Omega_\delta} \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' \\\\
&= \frac{\mu_0}{4\pi} \int \int_{\Omega_\delta} \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}'.
\end{aligned}
$$

当 $\delta$ 充分小时，我们近似有 $\mathbf{j}(\mathbf{r}') \cong \mathbf{j}(\mathbf{r})$。因此，上式又可被写作

$$
\begin{aligned}
\nabla \times \mathbf{B}(\mathbf{r}) &\cong \frac{\mu_0}{4\pi} \int \int_{\Omega_\delta} \mathbf{j}(\mathbf{r}) \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' \\\\
&= \frac{\mu_0}{4\pi} \mathbf{j}(\mathbf{r}) \int \int_{\Omega_\delta} \left( - \nabla_{\mathbf{r}'} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' = - \frac{\mu_0}{4\pi} \mathbf{j}(\mathbf{r}) \oint_{S_\delta} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \cdot d\mathbf{S} \\\\
&= \frac{\mu_0}{4\pi} \mathbf{j}(\mathbf{r}) \oint_{S_\delta} \frac{\mathbf{r}' - \mathbf{r}}{|\mathbf{r}' - \mathbf{r}|^3} \cdot d\mathbf{S} = \frac{\mu_0}{4\pi} \mathbf{j}(\mathbf{r}) 4\pi = \mu_0 \mathbf{j}(\mathbf{r}).
\end{aligned}
$$

在推导的中间步骤，我们使用了高斯定理。最后，我们令 $\delta \to 0$，从而得到

$$
\mathrm{rot}\,\mathbf{B}(\mathbf{r}) \equiv \nabla \times \mathbf{B}(\mathbf{r}) = \mu_0 \mathbf{j}(\mathbf{r}).
$$

这一方程也可以改写成一个积分形式。为此，我们任取一个曲面 $S$，并将上式积分后有

$$
\int_S (\nabla \times \mathbf{B}(\mathbf{r})) \cdot d\mathbf{S} = \int_S \mu_0 \mathbf{j}(\mathbf{r}) \cdot d\mathbf{S} = \mu_0 I.
$$

这里，$I$ 为穿过曲面 $S$ 的总电流。接下来，我们再对上式的左边使用斯托克斯公式后得到

$$
\oint_C \mathbf{B}(\mathbf{r}) \cdot d\mathbf{l} = \mu_0 I.
$$

这里，$C$ 为曲面 $S$ 的边界。此式给出了磁感应强度矢量绕一回路 $C$ 的环流与穿过以该回路为边界的曲面 $S$ 的总电流之间的关系。

### · 例题

/example/ 在一根无穷长直导线中流动的电流 $I$ 均匀分布在半径为 $a$ 的导线的横截面上。求空间各点处的磁感应强度 $\mathbf{B}(\mathbf{r})$。

> /proof/
>
> 利用毕奥 - 萨伐尔定律，我们看到，空间每一点处的磁感应强度矢量 $\mathbf{B}(\mathbf{r})$ 都是应该沿着柱坐标系（将导线的延展方向取作 $z$ 轴）的 $\mathbf{e}_\varphi$ 方向的。又从对称性的角度考虑，磁感应强度矢量的值仅应依赖于坐标 $\rho$，而与 $\varphi$ 和 $z$ 无关。也就是说，我们应有
>
> $$
> \mathbf{B}(\mathbf{r}) = \mathbf{B}(\rho, \varphi, z) = B(\rho) \mathbf{e}_\varphi.
> $$
>
> 现在，我们取一个以导线的轴心上一点为圆心，半径为 $\rho$，且盘面的法线方向平行于 $z$ 轴的圆盘 $\Omega_\rho$，并将其边界记作 $C_\rho$。那么根据
> $$
> \oint_C \mathbf{B}(\mathbf{r}) \cdot d\mathbf{l} = \mu_0 I.
> $$
> 当 $\rho > a$ 时，我们有
> $$
> \begin{aligned}
> \oint_{C_\rho} \mathbf{B} \cdot d\mathbf{l}& = \oint_{C_\rho} B(\rho) \mathbf{e}_\varphi \cdot d\mathbf{l} \mathbf{e}_\varphi = \oint_{C_\rho} B(\rho)\, dl\\\\
> &= \int_0^{2\pi} B(\rho)\, \rho d\varphi = 2\pi\rho B(\rho) = \mu_0 I.
> \end{aligned}
> $$
>
> 上式之所以成立，是由于当 $\rho > a$ 时，穿过盘面 $\Omega_\rho$ 的总电流恰为 $I$。因此，我们解得
>
> $$
> \mathbf{B}(\rho, \varphi, z) = \frac{\mu_0 I}{2\pi\rho} \mathbf{e}_\varphi.
> $$
>
> 接下来，我们考虑 $\rho < a$ 的情况。注意到此时穿过盘面 $\Omega_\rho$ 的总电流 $I_\rho$ 仅仅是 $I$ 的一部分，我们有
>
> $$
> \begin{aligned}
> \oint_{C_\rho} \mathbf{B} \cdot d\mathbf{l} &= \oint_{C_\rho} B(\rho) \mathbf{e}_\varphi \cdot d\mathbf{l} \mathbf{e}_\varphi = \oint_{C_\rho} B(\rho)\, dl = \int_0^{2\pi} B(\rho)\, \rho d\varphi = 2\pi\rho B(\rho) \\\\
> &= \mu_0 I_\rho = \mu_0 \frac{I}{\pi a^2} \pi \rho^2 = \mu_0 I \frac{\rho^2}{a^2}.
> \end{aligned}
> $$
>
> 由此，我们得到
>
> $$
> \mathbf{B}(\rho, \varphi, z) = \frac{\mu_0 I \rho}{2\pi a^2} \mathbf{e}_\varphi.
> $$
>
> 将此式与
> $$
> \mathbf{B}(\rho, \varphi, z) = \frac{\mu_0 I}{2\pi\rho} \mathbf{e}_\varphi.
> $$
> 比较后我们发现，在导线的表面，即 $\rho = a$ 处，磁感应强度矢量 $\mathbf{B}(\rho, \varphi, z)$ 是连续变化的。
>
> 综合上面的推导，我们看到，当电荷分布以及电流分布不随时间变化时，电磁场在空间的分布满足微分关系式
>
> $$
> \begin{aligned}
> \nabla \cdot \mathbf{E}(\mathbf{r}) &= \frac{1}{\epsilon_0} \rho(\mathbf{r}), \quad \nabla \times \mathbf{E}(\mathbf{r}) = 0, \\\\
> \nabla \cdot \mathbf{B}(\mathbf{r}) &= 0, \quad \nabla \times \mathbf{B}(\mathbf{r}) = \mu_0 \mathbf{j}(\mathbf{r}).
> \end{aligned}
> $$
>
> 同时，我们还引入了标量势 $\Phi(\mathbf{r})$ 和矢量势 $\mathbf{A}(\mathbf{r})$ 的概念。它们同电磁场强的关系为
>
> $$
> - \nabla \Phi(\mathbf{r}) = \mathbf{E}(\mathbf{r}), \quad \nabla \times \mathbf{A}(\mathbf{r}) = \mathbf{B}(\mathbf{r}).
> $$
>
> 当空间中静电荷密度分布 $\rho(\mathbf{r})$ 和电流密度分布 $\mathbf{j}(\mathbf{r})$ 已知时，标量势 $\Phi(\mathbf{r})$ 和矢量势 $\mathbf{A}(\mathbf{r})$ 可以被写作
>
> $$
> \begin{aligned}
> &\Phi(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \int \int \int_\Omega \frac{\rho(x', y', z')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz',\\\\
> &\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int \int_\Omega \frac{\mathbf{j}(x', y', z')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz'.
> \end{aligned}
> $$
>
> 然而，必须强调一点的是，与电场强度 $\mathbf{E}(\mathbf{r})$ 和磁感应强度 $\mathbf{B}(\mathbf{r})$ 不同的是，标量势 $\Phi(\mathbf{r})$ 和矢量势 $\mathbf{A}(\mathbf{r})$ 实验上是不可直接测量的。数学上，这表现为无论是标量势还是矢量势都不是唯一决定的。例如，我们可以在标势上加上一个常数 $C$，即令
>
> $$
> \Phi'(\mathbf{r}) = \Phi(\mathbf{r}) + C,
> $$
>
> 而
>
> $$
> \mathbf{E}(\mathbf{r}) = - \nabla \Phi'(\mathbf{r})
> $$
>
> 仍然成立。更有甚者，若对矢量势 $\mathbf{A}(\mathbf{r})$ 加上一个形为 $\nabla \Lambda(\mathbf{r})$ 的量，即令
>
> $$
> \mathbf{A}'(\mathbf{r}) = \mathbf{A}(\mathbf{r}) + \nabla \Lambda(\mathbf{r}),
> $$
>
> 这里 $\Lambda(\mathbf{r})$ 为任意一个可导函数，那么新的矢量势 $\mathbf{A}'(\mathbf{r})$ 给出的磁感应强度 $\mathbf{B}(\mathbf{r})$ 并无改变，即
>
> $$
> \nabla \times \mathbf{A}'(\mathbf{r}) = \nabla \times \mathbf{A}(\mathbf{r}) + \nabla \times (\nabla
> $$

在文献中，公式
$$
\Phi'(\mathbf{r}) = \Phi(\mathbf{r}) + C
$$
以及公式
$$
\mathbf{A}'(\mathbf{r}) = \mathbf{A}(\mathbf{r}) + \nabla \Lambda(\mathbf{r}),
$$
所给出的变换称为规范变换（gauge transformation），而 $\Lambda(\mathbf{r})$ 称为规范函数。关于规范变换和规范函数，在以后的章节中我们还会深入讨论。

## Part 3 含时电磁场

前面我们仅仅讨论了静电场和静磁场的情况，我们得到如下的两条方程：
$$
\nabla \cdot \mathbf{E}(\mathbf{r}, t) = \frac{1}{\epsilon_0} \rho(\mathbf{r}, t)
$$

$$
\nabla \cdot \mathbf{B}(\mathbf{r}, t) = 0
$$

我们看到，在这种情况下，$\mathbf{E}(\mathbf{r})$ 和 $\mathbf{B}(\mathbf{r})$ 是彼此独立的。为了将二者联系起来，我们需要考虑随时间改变的电磁场的情况。为此，我们可以借助法拉第的电磁感应定律
$$
\mathcal{E}(t) = - \frac{d\Phi_B(t)}{dt}.
$$

对于空间中一个给定的回路 $C$，上式两边的电动势 $\mathcal{E}(t)$ 和磁通量 $\Phi_B(t)$ 可以写作

$$
\mathcal{E}(t) = \oint_C \mathbf{E}(\mathbf{r}, t) \cdot d\mathbf{l},
$$

以及

$$
\Phi_B(t) = \int_S \mathbf{B}(\mathbf{r}, t) \cdot d\mathbf{S}.
$$

这里，$S$ 为由回路 $C$ 界定的一个曲面。将之代入法拉第定律后，我们有

$$
\oint_C \mathbf{E}(\mathbf{r}, t) \cdot d\mathbf{l} = - \frac{d}{dt} \int_S \mathbf{B}(\mathbf{r}, t) \cdot d\mathbf{S} = - \int_S \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} \cdot d\mathbf{S}.
$$

对此方程的左边使用斯托克斯公式后，我们进一步得到

$$
\int_S (\nabla \times \mathbf{E}(\mathbf{r}, t)) \cdot d\mathbf{S} = - \int_S \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} \cdot d\mathbf{S},
$$

或是

$$
\nabla \times \mathbf{E}(\mathbf{r}, t) = - \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}.
$$

此即法拉第定律的微分形式。与静电场的情况不同，现在电场强度的旋度不再为零。

综上所述，麦克斯韦将已知的电磁规律可以归纳为四个方程

$$
\begin{aligned}
\nabla \cdot \mathbf{E}(\mathbf{r}, t) &= \frac{1}{\epsilon_0} \rho(\mathbf{r}, t), \quad \nabla \times \mathbf{E}(\mathbf{r}, t) = - \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}, \\\\
\nabla \cdot \mathbf{B}(\mathbf{r}, t) &= 0, \quad \nabla \times \mathbf{B}(\mathbf{r}, t) = \mu_0 \mathbf{j}(\mathbf{r}, t).
\end{aligned}
$$

但麦克斯韦也注意到，它们彼此之间并不自治。例如，若我们将第四式的两边取散度后有

$$
0 = \nabla \cdot (\nabla \times \mathbf{B}(\mathbf{r}, t)) = \mu_0 \nabla \cdot \mathbf{j}(\mathbf{r}, t).
$$

另一方面，根据连续性方程，我们又有

$$
\nabla \cdot \mathbf{j}(\mathbf{r}, t) = - \frac{\partial \rho(\mathbf{r}, t)}{\partial t},
$$

一般来说并不为零。为了消除这一不自治之处，麦克斯韦又注意到，若将 Maxwell 方程组中的第一式的两边对时间求导的话，则

$$
\epsilon_0 \nabla \cdot \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} = \frac{\partial \rho(\mathbf{r}, t)}{\partial t}
$$

成立。因此他提议将第四式修改为

$$
\nabla \times \mathbf{B}(\mathbf{r}, t) = \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t}.
$$

现在再对此式两边求散度的话，我们有

$$
\begin{aligned}
&\nabla \cdot (\nabla \times \mathbf{B}(\mathbf{r}, t)) = \nabla \cdot \left( \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} \right) \\\\
&= \mu_0 \left( \nabla \cdot \mathbf{j}(\mathbf{r}, t) + \epsilon_0 \nabla \cdot \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} \right) = \mu_0 \left( - \frac{\partial \rho(\mathbf{r}, t)}{\partial t} + \frac{\partial \rho(\mathbf{r}, t)}{\partial t} \right) = 0,
\end{aligned}
$$

从而消除了上述的不自治之处。同时，麦克斯韦将 $\epsilon_0 \dfrac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t}$ 称为位移电流密度（displacement current density）。

由此，在 1862 年麦克斯韦提出了以他的名字命名的方程组

$$
\begin{aligned}
\nabla \cdot \mathbf{E}(\mathbf{r}, t) &= \frac{1}{\epsilon_0} \rho(\mathbf{r}, t), \quad \nabla \times \mathbf{E}(\mathbf{r}, t) = - \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}, \\\\
\nabla \cdot \mathbf{B}(\mathbf{r}, t) &= 0, \quad \nabla \times \mathbf{B}(\mathbf{r}, t) = \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t},
\end{aligned}
$$

从而完成了经典电动力学的最后建立。