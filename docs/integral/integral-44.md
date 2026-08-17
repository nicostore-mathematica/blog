---
title: Lesson 44 微分形式积分 II
permalink: /integral/integral-44/
createTime: 2026/08/17 14:18:19
---

## Part 2 外微分运算

### · 计算

为了方便起见，我们将函数称为 0 次微分形式。我们知道，给定可微函数 $f$，它的全微分 $df$ 是一个 1 次微分形式。

从 $f$ 得到 $df$ 是一个求导的过程。

现在，给定一个 $s$ 次的微分形式 $\omega$，我们要定义一个 $s+1$ 次的微分形式，它由 $\omega$ 求导得到，记为 $d\omega$。

先讨论 $\mathbb{R}^m$ 中的微分形式。设 $\omega$ 为 $C^1$ 的 $s$ 次微分形式，则它可以表示为

$$
\omega = \sum_{1 \le i_1 < \cdots < i_s \le m} \omega_{i_1 \cdots i_s} dx_{i_1} \wedge \cdots \wedge dx_{i_s},
$$

我们定义

$$
d\omega = \sum_{1 \le i_1 < \cdots < i_s \le m} d\omega_{i_1 \cdots i_s} \wedge dx_{i_1} \wedge \cdots \wedge dx_{i_s},
$$

显然，$d\omega$ 为 $s+1$ 次的微分形式，称为 $\omega$ 的外微分。

/example/ 平面上 1 次微分形式的外微分

> 设 $\omega = P(x,y)dx + Q(x,y)dy$ 为 $\mathbb{R}^2$ 中的 1 次微分形式，则
>
> $$
> \begin{aligned}
> d\omega &= dP \wedge dx + dQ \wedge dy \\\\
> &= (P_x dx + P_y dy) \wedge dx + (Q_x dx + Q_y dy) \wedge dy\\\\
> &= (Q_x - P_y) dx \wedge dy.
> \end{aligned}
> $$

/example/  $\mathbb{R}^3$ 中 2 次微分形式的外微分

> $\mathbb{R}^3$ 中 2 次微分形式
>
> $$
> \omega = P(x,y,z) dy \wedge dz + Q(x,y,z) dz \wedge dx + R(x,y,z) dx \wedge dy,
> $$
>
> 则
>
> $$
> \begin{aligned}
> d\omega &= dP \wedge dy \wedge dz + dQ \wedge dz \wedge dx + dR \wedge dx \wedge dy\\\\
> &= (P_x dx + P_y dy + P_z dz) \wedge dy \wedge dz \\\\
> &+ (Q_x dx + Q_y dy + Q_z dz) \wedge dz \wedge dx\\\\
> &+ (R_x dx + R_y dy + R_z dz) \wedge dx \wedge dy\\\\
> &= (P_x + Q_y + R_z) dx \wedge dy \wedge dz.
> \end{aligned}
> $$

/example/ $\mathbb{R}^3$ 中 1 次微分形式的外微分

> 设 $\omega = P(x,y,z) dx + Q(x,y,z) dy + R(x,y,z) dz$ 为 1 次微分形式，则
>
> $$
> \begin{aligned}
> d\omega &= dP \wedge dx + dQ \wedge dy + dR \wedge dz\\\\
> &= (P_x dx + P_y dy + P_z dz) \wedge dx + (Q_x dx + Q_y dy + Q_z dz) \wedge dy\\\\
> &+ (R_x dx + R_y dy + R_z dz) \wedge dz\\\\
> &= (R_y - Q_z) dy \wedge dz + (P_z - R_x) dz \wedge dx + (Q_x - P_y) dx \wedge dy.
> \end{aligned}
> $$

### · 性质

外微分运算具有以下性质：

- 如果 $\omega, \eta$ 均为 $s$ 次微分形式，$\lambda, \mu \in \mathbb{R}$，则

  $$
  d(\lambda \omega + \mu \eta) = \lambda d\omega + \mu d\eta;
  $$

- 如果 $\omega$ 为 $s$ 次微分形式，$\eta$ 为 $t$ 次微分形式，则

  $$
  d(\omega \wedge \eta) = d\omega \wedge \eta + (-1)^s \omega \wedge d\eta;
  $$

- $d^2 = 0$，即 $d(d\omega) = 0$。以 $\omega = a(x) dx_{i_1} \wedge \cdots \wedge dx_{i_s}$ 为例：

  $$
  \\\begin{aligned}
  d(d\omega) &= d(da \wedge dx_{i_1} \wedge \cdots \wedge dx_{i_s})\\\\
  &= d\left( \sum_{i=1}^m \frac{\partial a}{\partial x_i} dx_i \wedge dx_{i_1} \wedge \cdots \wedge dx_{i_s} \right)\\\\
  &= \sum_{i=1}^m d\left( \frac{\partial a}{\partial x_i} \right) \wedge dx_i \wedge dx_{i_1} \wedge \cdots \wedge dx_{i_s}\\\\
  &= \sum_{1 \le i,j \le m} \frac{\partial^2 a}{\partial x_j \partial x_i} dx_j \wedge dx_i \wedge dx_{i_1} \wedge \cdots \wedge dx_{i_s}\\\\
  &= \sum_{i<j} \left[ \frac{\partial^2 a}{\partial x_i \partial x_j} - \frac{\partial^2 a}{\partial x_j \partial x_i} \right] dx_i \wedge dx_j \wedge dx_{i_1} \wedge \cdots \wedge dx_{i_s}\\\\
  &= 0.
  \end{aligned}\\\\
  $$

- $df^* \omega = f^* d\omega$。这可由前两条性质得出。

> [!important]
>
> 外微分运算在曲面上也可以定义。它的一个定义方法是这样的：考虑参数曲面 $\varphi: \Omega \to \mathbb{R}^n$，设 $\varphi$ 是正则的，即 $d\varphi_p: T_p \Omega \to T_{\varphi(p)} \Sigma$ 为线性同构，$\forall\ p \in \Omega \subset \mathbb{R}^m$。
>
> 如果 $\omega$ 为 $\Sigma$ 上的一个 $s$ 次微分形式，则 $\varphi^* \omega$ 为 $\Omega$ 中的 $s$ 次微分形式，从而 $d\varphi^* \omega$ 为 $s+1$ 次微分形式。
>
> 由 $d\varphi$ 为同构知可以找到 $\Sigma$ 上的 $s+1$ 次微分形式，记为 $d\omega$，使得
> $$
> \varphi^* d\omega = d\varphi^* \omega,
> $$
>
> 这样 $\omega$ 的外微分 $d\omega$ 就定义好了。请读者验证，这个定义与曲面参数化的选取无关。
>
> 曲面上的外微分同样具有以上几条性质。如果 $d\omega = 0$，则称 $\omega$ 为**闭形式**；如果 $\omega = d\eta$，则称 $\omega$ 为**恰当形式**。
>
> 由 $d^2 = 0$ 知恰当形式必为闭形式，反之不然。

/example/. $\mathbb{R}^2 - \{0\}$ 上的一个非恰当的闭形式

> 考虑 $\mathbb{R}^2 - \{0\}$ 上的 1 次微分形式
>
> $$
> \omega = \frac{x}{x^2 + y^2} dy - \frac{y}{x^2 + y^2} dx,
> $$
>
> 直接的计算表明 $d\omega = 0$，即 $\omega$ 为闭的 1 形式。如果用极坐标 $(r,\theta)$ 表示，则由
>
> $$
> dx = \cos\theta\, dr - r\sin\theta\, d\theta,\quad dy = \sin\theta\, dr + r\cos\theta\, d\theta
> $$
>
> 可得 $\omega = d\theta$。不过，这个等式并不表明 $\omega$ 是恰当形式，因为 $\theta$ 不能定义在整个 $\mathbb{R}^2 - \{0\}$ 上。
>
> 事实上，不存在 $\mathbb{R}^2 - \{0\}$ 上的函数 $f$，使得 $\omega = df$。
>
> （反证法）如果 $f$ 存在，则 $d(f - \theta) = 0$，因此 $f - \theta$ 在连通的开集 $\mathbb{R}^2 - \{(x,0)\mid x > 0\}$ 上必为常数，这样的话 $\theta$ 就可以连续地定义在整个 $\mathbb{R}^2 - \{0\}$ 上了，这当然是不可能的。

现在考虑 $\mathbb{R}^m$ 中闭的 1 次微分形式 $\omega = \sum_{i=1}^m a_i(x) dx_i$，如果 $\omega = df$，则根据 Newton-Leibniz 公式，有

$$
\begin{aligned}
f(x) &= f(0) + \int_0^1 \frac{d}{dt} f(tx) dt
&= f(0) + \int_0^1 \sum_{i=1}^m \frac{\partial f}{\partial x_i}(tx) x_i dt
&= f(0) + \int_0^1 \sum_{i=1}^m a_i(tx) x_i dt.
\end{aligned}
$$

反之，如果 $\omega$ 是闭形式，用上式定义 $f(x)$，则

$$
\begin{aligned}
df &= \sum_{i=1}^m \left( \int_0^1 a_i(tx) dt \right) dx_i + \sum_{i=1}^m \sum_{j=1}^m \left( \int_0^1 t \frac{\partial a_i}{\partial x_j} dt \right) x_i dx_j\\\\
&= \sum_{j=1}^m \left( \int_0^1 a_j(tx) dt \right) dx_j + \sum_{j=1}^m \sum_{i=1}^m \left( \int_0^1 t \frac{\partial a_j}{\partial x_i} dt \right) x_i dx_j\\\\
&= \sum_{j=1}^m \left( \int_0^1 a_j(tx) dt \right) dx_j + \sum_{j=1}^m \left( \int_0^1 t \frac{da_j}{dt}(tx) dt \right) dx_j\\\\
&= \sum_{j=1}^m \left( \int_0^1 \frac{d(ta_j)}{dt}(tx) dt \right) dx_j\\\\
&= \sum_{j=1}^m a_j(x) dx_j = \omega.
\end{aligned}
$$

其中，$\dfrac{\partial a_i}{\partial x_j} = \dfrac{\partial a_j}{\partial x_i}$ 是因为 $d\omega = 0$。这就说明 $\mathbb{R}^2$ 中闭的 1 次微分形式必为恰当形式，这个方法也可以推广到高维。
