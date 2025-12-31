---
title: Chapter 23 微分形式
permalink: /integral/integral-23/
createTime: 2025/12/31 00:10:07
---

Green 公式，Gauss 公式和曲面上的 Stokes 公式统一在一起需要引入新的研究对象，

它们是函数以及向量值函数的推广，称为微分形式。

## Part 1 微分形式

### · 定义

回顾一下，设 $f: \mathbb{R} \to \mathbb{R}$ 为一元函数，如果 $f(x)$ 在 $x_0$ 处可微，则 $f(x)$ 在 $x_0$ 附近可用线性函数 $x_0 + f'(x_0)(x - x_0)$ 作近似逼近：

$$
f(x) - [x_0 + f'(x_0)(x - x_0)] = o(x - x_0) \quad (x \to x_0),
$$

这是微分学的出发点，其基本思想就是将函数在一点处线性化，得到的线性函数

$$
df_{x_0} = df(x_0): \mathbb{R} \to \mathbb{R}, \quad t \mapsto f'(x_0)t
$$

称作 $f$ 在 $x_0$ 的微分。对于函数 $f(x) = x$ 来说，它本身是线性的，因此线性化以后仍为自身，即 $dx(x_0)$ 为恒同映射，从而对于一般的 $f$，$f$ 在 $x_0$ 处的微分也可以表示为

$$
df_{x_0} = f'(x_0)dx(x_0).
$$

上述讨论对于多元函数也适用。设 $f: \mathbb{R}^n \to \mathbb{R}$ 为在 $x_0$ 处可微的函数，则

$$
f(x) - [f(x_0) + Jf(x_0)(x - x_0)] = o(\|x - x_0\|) \quad (x \to x_0),
$$

其中

$$
Jf(x_0) = \nabla f(x_0) = \left( \frac{\partial f}{\partial x_1}(x_0), \cdots, \frac{\partial f}{\partial x_n}(x_0) \right).
$$

线性函数

$$
df_{x_0}: \mathbb{R}^n \to \mathbb{R}, \quad t = (t_1, \cdots, t_n) \mapsto Jf(x_0)(t) = \sum_{i=1}^{n} \frac{\partial f}{\partial x_n}(x_0)t_n
$$

称为 $f$ 在 $x_0$ 处的微分。当 $f(x) = x_i$ 是第 $i$ 个坐标函数时，其线性化是自身，因此 $f$ 在 $x_0$ 处的微分又可以写为

$$
df_{x_0} = \frac{\partial f}{\partial x_1}(x_0)dx_1(x_0) + \cdots + \frac{\partial f}{\partial x_n}(x_0)dx_n(x_0).
$$

我们再把这些讨论推广到欧氏空间中的曲面上。设 $\Sigma$ 为 $\mathbb{R}^n$ 中的参数曲面，其参数表示为 $\varphi: \Omega \to \mathbb{R}^n$，

$$
\varphi(u_1, \cdots, u_m) = (x_1(u_1, \cdots, u_m), \cdots, x_n(u_1, \cdots, u_m)).
$$

设 $u^0$ 为 $\Sigma$ 的一个正则点，$\varphi(u^0) = p$。如果 $f$ 是 $\Sigma$ 上定义的函数，一个基本的问题就是：在点 $p$ 处如何对 $f$ 作线性化？

> 线性映射当然定义在线性空间（向量空间）上。因此，第一步应该对曲面作线性化。事实上，在 $p$ 处将 $\Sigma$ 作线性化得到的线性空间就是 $\Sigma$ 在 $p$ 处的切空间 $T_p\Sigma$，它由 $p$ 处与 $\Sigma$ 相切的所有向量组成，这是一个 $m$ 维的线性空间，它的一组基为
>
> $$
> \varphi_{u_i}(u^0) = \left( \frac{\partial x_1}{\partial u_i}(u^0), \cdots, \frac{\partial x_n}{\partial u_i}(u^0) \right), \quad i = 1, \cdots, m.
> $$
>
> 如果 $f \circ \varphi$ 在 $u^0$ 处可微，则 $f$ 在 $p$ 处的线性化为线性函数
>
> $$
> df_p: T_p\Sigma \to \mathbb{R}
> $$
>
> $$
> X_p = \sum_{i=1}^{m} \lambda_i \varphi_{u_i}(u^0) \mapsto \sum_{i=1}^{m} \lambda_i \frac{\partial (f \circ \varphi)}{\partial u_i}(u^0),
> $$
>
> 这个线性函数称为 $f$ 在 $p$ 处的微分，它也可以这样定义：设 $X_p \in T_p\Sigma$ 为 $p$ 处的切向量，取 $\Sigma$ 上从 $p$ 出发的曲线 $\sigma(t)$，使得 $\sigma'(0) = X_p$，即 $\sigma$ 的初始切向量为 $X_p$，则
>
> $$
> df_p(X_p) = \left. \frac{d}{dt} \right|_{t=0} f(\sigma(t)),
> $$
>

有时又记 $df_p(X_p) = X_p(f)$，这表示 $df_p(X_p)$ 是 $f$ 沿着切向 $X_p$ 求导。

我们知道，在线性代数中，一个向量空间上的线性函数的全体也组成了向量空间，称为对偶空间。

因此，$f$ 在 $p$ 处的微分 $df_p$ 可以看成切空间 $T_p\Sigma$ 的对偶空间 $T_p^*\Sigma$ 中的元素，我们将 $T_p^*\Sigma$ 称为 $p$ 的余切空间，余切空间中的元素称为余切向量。记
$$
T\Sigma = \bigcup_{p \in \Sigma} T_p\Sigma, \quad T^*\Sigma = \bigcup_{p \in \Sigma} T_p^*\Sigma,
$$

分别称为 $\Sigma$ 的切丛和余切丛。

如果 $f$ 在 $\Sigma$ 上处处可微，则我们有映射

$$
df: \Sigma \to T^*\Sigma, \quad p \mapsto df_p \in T_p^*\Sigma,
$$

称为 $f$ 在 $\Sigma$ 上的全微分。更一般地，如果映射 $\omega: \Sigma \to T^*\Sigma$ 满足条件

$$
\omega(p) \in T_p^*\Sigma, \quad \forall \; p \in \Sigma,
$$

则称 $\omega$ 为 $\Sigma$ 上的 1 次外微分形式，或简称 1 形式，1 次微分形式等。$f$ 的全微分就是一个 1 形式。由于余切空间的线性性，1 形式之间也可以自然地定义加法和数乘运算。

1 形式有时又称余切向量场，这是因为 1 形式是一个在每一点 $p$ 都指定 $p$ 处的一个余切向量 $\omega(p)$ 的映射。在这个意义上，它和切向量场没有本质区别：切向量场是在每一点 $p$ 都指定 $p$ 处的一个切向量的映射。

进一步，我们可以意识到 1 形式或（切）向量场只是向量值函数的推广：向量值函数是在每一点 $p$ 都指定一个向量的映射，区别在于向量位于什么空间中而已。

### · 实例

/example/ $\mathbb{R}^m$ 中的向量场和1形式

> 将 $\mathbb{R}^m$ 看成 $\mathbb{R}^n$ 中的 $m$ 维平面 $(n > m)$，则前面的讨论完全适用。
>
> 由于欧氏空间是线性的，其在每一点的切空间可以跟自身等同起来，即 $T\mathbb{R}^m = \mathbb{R}^m \times \mathbb{R}^m$。同理，$T^*\mathbb{R}^m = \mathbb{R}^m \times (\mathbb{R}^m)^*$。
>
> 这时，$\mathbb{R}^m$ 上的向量场可以看成是 $\mathbb{R}^m$ 上的向量值函数，通常人们就是这么介绍向量场的。
>
> 设 $\omega$ 为 $\mathbb{R}^m$ 上的 1 形式。任取 $p \in \mathbb{R}^m$，由于 $\omega(p) \in T_p^*\mathbb{R}^m$，而 $T_p^*\mathbb{R}^m$ 的一组基为 $\{dx_1(p), \cdots, dx_m(p)\}$，故 $\omega(p)$ 可以表示为
>
> $$
> \omega(p) = \sum_{i=1}^{m} a_i(p) dx_i(p),
> $$
>
> 当 $p$ 变动时 $a_i(p)$ $(1 \leq i \leq m)$ 是关于 $p$ 的函数。因此我们也记为
>
> $$
> \omega = \sum_{i=1}^{m} a_i dx_i.
> $$
>
> 如果函数 $\{a_i\}$ 均为 $C^k$ 的，则称 1 形式 $\omega$ 是 $C^k$ 的。例如，当 $f$ 是 $C^k$ 函数时，其全微分 $df$ 是 $C^{k-1}$ 的。

现在我们继续将研究对象作进一步的推广。记 $T_p\Sigma$ 的 $s$ 个乘积为

$$
(T_p\Sigma)^s = T_p\Sigma \times \cdots \times T_p\Sigma.
$$

设 $\omega: (T_p\Sigma)^s \to \mathbb{R}$ 为函数，且

> [!important]
>
> (i) $\omega$ 关于每一个分量都是线性的，即 $\lambda, \mu \in \mathbb{R}$ 时
>
> $$
> \omega(\cdots, \lambda X_i + \mu Y_i, \cdots) = \lambda \omega(\cdots, X_i, \cdots) + \mu \omega(\cdots, Y_i, \cdots), \quad \forall \; X_i, Y_i \in T_p^*\Sigma.
> $$
>
> (ii) $\omega$ 关于任意两个分量是反称的，即交换两个分量的位置时 $\omega$ 的值相差一个符号。用置换来表示就是
>
> $$
> \omega(X_{\pi(1)}, \cdots, X_{\pi(s)}) = (-1)^{\pi} \omega(X_1, \cdots, X_s),
> $$
>
> 其中 $\pi$ 是 $\{1,2,\cdots,s\}$ 的任意置换，当 $\pi$ 为偶置换时 $(-1)^{\pi} = 1$；当 $\pi$ 为奇置换时 $(-1)^{\pi} = -1$。
>
> 则称 $\omega$ 为 $p$ 处的一个 $s$ 次外形式，$p$ 处的所有 $s$ 次外形式构成的线性空间记为 $\bigwedge^s T_p^*\Sigma$。
>
>  当 $s = 1$ 时，$\bigwedge^1 T_p^*\Sigma$ 就是对偶空间 $T_p^*\Sigma$。

/example/  $\bigwedge^2 T_p^*\Sigma$ 的结构

> 根据定义，$p$ 处的 2 次外形式就是定义在切空间 $T_p\Sigma$ 上的一个反称的双线性型。给定 $\omega, \eta \in T_p^*\Sigma$，我们来定义一个这样的反称双线性型 $\omega \wedge \eta$：任取切向量 $X$, $Y$，令
>
> $$
> \omega \wedge \eta(X,Y) = \omega(X)\eta(Y) - \omega(Y)\eta(X),
> $$
>
> 显然 $\omega \wedge \eta$ 满足以上两个条件，因此 $\omega \wedge \eta \in \bigwedge^2 T_p^*\Sigma$。我们还有
>
> $$
> \omega \wedge \eta = -\eta \wedge \omega, \quad (\omega_1 + \omega_2) \wedge \eta = \omega_1 \wedge \eta + \omega_2 \wedge \eta.
> $$
>
> 特别地，$\omega \wedge \omega = 0$。如果取 $T_p\Sigma$ 的一组基 $\{e_i\}_{i=1}^m$，记 $T_p^*\Sigma$ 的一组相应的对偶基为 $\{e^i\}_{i=1}^m$，即
>
> $$
> e^i\left( \sum_{j=1}^{m} \lambda_j e_j \right) = \lambda_i, \quad \forall \; \lambda_j \in \mathbb{R} \; (1 \leq j \leq m),
> $$
>
> 则我们断言 $\{e^i \wedge e^j\}$ $(i < j)$ 为 $\bigwedge^2 T_p^*\Sigma$ 的一组基。事实上，先说明它们是线性无关的：如果
>
> $$
> \sum_{i<j} \lambda_{ij} e^i \wedge e^j = 0,
> $$
>
> 则当 $i < j$ 时（其中 $\delta_i^k = 1$，当 $k = l$；$\delta_i^k = 0$，当 $k \neq l$）
>
> $$
> \begin{aligned}
> 0 &= \sum_{k<l} \lambda_{kl} e^k \wedge e^l(e_i, e_j)\\\\
> &= \sum_{k<l} \lambda_{kl} [e^k(e_i)e^l(e_j) - e^k(e_j)e^l(e_i)]\\\\
> &= \sum_{k<l} \lambda_{kl} [\delta_i^k \delta_j^l - \delta_j^k \delta_i^l]\\\\
> &= \lambda_{ij},
> \end{aligned}
> $$
> 这说明 $\{e^i \wedge e^j\}$ $(i < j)$ 线性无关。
>
> 其次，任取 $\omega \in \bigwedge^2 T_p^*\Sigma$，记 $\lambda_{ij} = \omega(e_i, e_j)$，则不难验证
>
> $$
> \omega = \sum_{i<j} \lambda_{ij} e^i \wedge e^j.
> $$
>
> 因此，$\{e^i \wedge e^j\}$ $(i < j)$ 为 $\bigwedge^2 T_p^*\Sigma$ 的一组基。特别地，
>
> $$
> \dim \bigwedge^2 T_p^*\Sigma = C_m^2 = \frac{1}{2} m(m-1).
> $$
>
> 如同余切丛那样，令
>
> $$
> \bigwedge^2 T^*\Sigma = \bigcup_{p \in \Sigma} \bigwedge^2 T_p^*\Sigma,
> $$
>
> 称为 $\Sigma$ 上的 2 形式丛。设映射 $\omega: \Sigma \to \bigwedge^2 T^*\Sigma$ 满足条件
>
> $$
> \omega(p) = \omega_p \in \bigwedge^2 T_p^*\Sigma, \quad \forall \; p \in \Sigma,
> $$
>
> 则称 $\omega$ 为 $\Sigma$ 上的 2 次外微分形式，简称 2 形式或 2 次微分形式。
>
> 2 次微分形式就是在每一点 $p$ 处指定一个 2 次外形式的映射。
>
> 如果 $\omega, \eta$ 为 $\Sigma$ 上的 1 次微分形式，则 $\omega \wedge \eta$ 可以逐点定义，它是 $\Sigma$ 上的一个 2 次微分形式。

/example/ 2次微分形式和有向面积元

> 设 $(x,y)$ 为平面直角坐标，则 $dx \wedge dy$ 为 $\mathbb{R}^2$ 上的一个 2 次微分形式。如果 $(u,v)$ 是另一坐标，记
>
> $$
> x = x(u,v), \quad y = y(u,v),
> $$
>
> 则
>
> $$
> dx = x_u du + x_v dv, \quad dy = y_u du + y_v dv,
> $$
>
> 从而有
>
> $$
> dx \wedge dy = (x_u du + x_v dv) \wedge (y_u du + y_v dv) = (x_u y_v - y_u x_v) du \wedge dv,
> $$
>
> 即
>
> $$
> dx \wedge dy = \frac{\partial(x,y)}{\partial(u,v)} du \wedge dv.
> $$
>
> 这个等式和二重积分的变量替换公式很象，区别在这里的行列式没有绝对值。
>
> 因此，我们把 $dx \wedge dy$ 称为平面上关于坐标 $(x,y)$ 的有向面积元，这是 2 次微分形式的一个几何解释。当 $x = r \cos \theta$, $y = r \sin \theta$ 时，下面的等式就很自然了
> $$
> dx \wedge dy = r dr \wedge d\theta.
> $$
>

> [!important]
>
> 上面的这些讨论可推广到一般的 $s$ 次外形式空间上。
>
> 例如，沿用以上记号，设 $\omega, \eta, \zeta$ 为 $T_p^*\Sigma$ 中的余切向量，定义 $\omega \wedge \eta \wedge \zeta \in \bigwedge^3 T_p^*\Sigma$ 如下：设 $X,Y,Z$ 为 $T_p\Sigma$ 中的任意切向量，令
> $$
> \begin{aligned}
> \omega \wedge \eta \wedge \zeta(X,Y,Z) &= \omega(X)\eta(Y)\zeta(Z) - \omega(X)\eta(Z)\zeta(Y)\\\\
> &+ \omega(Y)\eta(Z)\zeta(X) - \omega(Y)\eta(X)\zeta(Z)\\\\
> &+ \omega(Z)\eta(X)\zeta(Y) - \omega(Z)\eta(Y)\zeta(X),
> \end{aligned}
> $$
> 容易验证 $\omega \wedge \eta \wedge \zeta$ 的确为一个 3 次外形式，且这个 3 次外形式关于 $\omega$, $\eta$ 以及 $\zeta$ 具有线性和反称性。
>
> 与 2 次外形式类似，$\{e^i \wedge e^j \wedge e^k\}$ $(i < j < k)$ 组成了 $\bigwedge^3 T_p^*\Sigma$ 的一组基，特别地，这个空间的维数为 $C_m^3$。令
>
> $$
> \bigwedge^3 T^*\Sigma = \bigcup_{p \in \Sigma} \bigwedge^3 T_p^*\Sigma,
> $$
>
> 称为 $\Sigma$ 上的 3 形式丛。设映射 $\omega: \Sigma \to \bigwedge^3 T^*\Sigma$ 满足条件
>
> $$
> \omega(p) = \omega_p \in \bigwedge^3 T_p^*\Sigma, \quad \forall \; p \in \Sigma,
> $$
>
> 则称 $\omega$ 为 $\Sigma$ 上的 3 次外微分形式，简称 3 形式或 3 次微分形式。
>
> 3 次微分形式就是在每一点 $p$ 处指定一个 3 次外形式的映射。如果 $\omega, \eta, \zeta$ 为 $\Sigma$ 上的 1 次微分形式，则 $\omega \wedge \eta \wedge \zeta$ 可以逐点定义，它是 $\Sigma$ 上的一个 3 次微分形式。

/example/ 3次微分形式和有向体积元

> 设 $(x,y,z)$ 为 $\mathbb{R}^3$ 的直角坐标，则 $dx \wedge dy \wedge dz$ 为一个 3 次微分形式。如果 $(u,v,w)$ 是另一坐标，记
>
> $$
> x = x(u,v,w), \quad y = y(u,v,w), \quad z = z(u,v,w),
> $$
>
> 则
>
> $$
> dx = x_u du + x_v dv + x_w dw, \quad dy = y_u du + y_v dv + y_w dw,
> $$
> $$
> dz = z_u du + z_v dv + z_w dw.
> $$
>
> 因此有
>
> $$
> \begin{aligned}
> dx \wedge du \wedge dz&= (x_u du + x_v dv + x_w dw) \wedge (y_u du + y_v dv + y_w dw) \wedge (z_u du + z_v dv + z_w dw)\\\\
> &= x_u du \wedge (y_v dv + y_w dw) \wedge (z_v dv + z_w dw) \\\\
> &+ x_v dv \wedge (y_u du + y_w dw) \wedge (z_u du + z_w dw)\\\\
> &+ x_w dw \wedge (y_u du + y_v dv) \wedge (z_u du + z_v dv)\\\\
> &= x_u(y_v z_w - y_w z_v) du \wedge dv \wedge dw - x_v(y_u z_w - y_w z_u) du \wedge dv \wedge dw\\\\
> &+ x_w(y_u z_v - y_v z_u) du \wedge dv \wedge dw\\\\
> &= \frac{\partial(x,y,z)}{\partial(u,v,w)} du \wedge dv \wedge dw,
> \end{aligned}
> $$
> 这个等式和三重积分的变量替换公式很象，我们把 $dx \wedge dy \wedge dz$ 称为有向体积元或体积形式。

/example/ $\mathbb{R}^3$ 中的 2 次微分形式

> 设 $(x,y,z)$ 为 $\mathbb{R}^3$ 的直角坐标，则 $dy \wedge dz$, $dz \wedge dx$ 和 $dx \wedge dy$ 均为 2 次微分形式。由于在每一点它们都构成了该点处 2 次外形式的基，因此 $\mathbb{R}^3$ 中的 2 次微分形式均可表示为
>
> $$
> \omega = P(x,y,z)dy \wedge dz + Q(x,y,z)dz \wedge dx + R(x,y,z)dx \wedge dy.
> $$
>
> 如果系数 $P,Q,R$ 为 $C^k$ 函数，则称 $\omega$ 为 $C^k$ 的 2 次微分形式。
>
> 对于一般的 $s$，设 $\omega_i$ $(1 \leq i \leq s)$ 为 $s$ 个 1 形式，定义 $s$ 次外形式
>
> $$
> \omega_1 \wedge \cdots \wedge \omega_s: (T_p\Sigma)^s \to \mathbb{R}
> $$
>
> 如下：
>
> $$
> \omega_1 \wedge \cdots \wedge \omega_s(X_1,\cdots,X_s) = \sum_{\pi} (-1)^{\pi} \omega_1(X_{\pi(1)}) \cdots \omega_s(X_{\pi(s)}),
> $$
>
> 其中 $X_i$ $(1 \leq i \leq s)$ 为任意切向量，上式求和是对 $\{1,\cdots,s\}$ 的所有置换 $\pi$ 求的。
>
> 类似于前面的讨论可知，$\bigwedge^s T_p^*\Sigma$ 的一组基为s
>
> $$
> \{e^{i_1} \wedge \cdots \wedge e^{i_s}\}, \quad 1 \leq i_1 < \cdots < i_s \leq m.
> $$
>
> 特别地，它的维数为 $C_m^s$。当 $s > m$ 时，$s$ 次外形式均为零。令
>
> $$
> \bigwedge^s T^*\Sigma = \bigcup_{p \in \Sigma} \bigwedge^s T_p^*\Sigma,
> $$
>
> 称为 $\Sigma$ 上的 $s$ 形式丛。设映射 $\omega: \Sigma \to \bigwedge^s T^*\Sigma$ 满足条件
>
> $$
> \omega(p) = \omega_p \in \bigwedge^s T_p^*\Sigma, \quad \forall \; p \in \Sigma,
> $$
>
> 则称 $\omega$ 为 $\Sigma$ 上的 $s$ 次外微分形式，简称 $s$ 形式或 $s$ 次微分形式。
>
> $s$ 次微分形式就是在每一点 $p$ 处指定一个 $s$ 次外形式的映射。

/example/ $m$ 次微分形式与行列式

> 设 $(x_1,\cdots,x_m)$ 为 $\mathbb{R}^m$ 上的直角坐标，则 $dx_1 \wedge \cdots \wedge dx_m$ 为一个 $m$ 次微分形式。对于另一坐标 $u_1,\cdots,u_m$，记
>
> $$
> x_i = x_i(u_1,\cdots,u_m), \quad i = 1,\cdots,m,
> $$
>
> 则
>
> $$
> dx_i = \sum_{j=1}^{m} \frac{\partial x_i}{\partial u_j} du_j, \quad i = 1,\cdots,m.
> $$
>
> 因此
>
> $$
> \begin{aligned}
> dx_1 \wedge \cdots \wedge dx_m &= \left( \sum_{j=1}^{m} \frac{\partial x_1}{\partial u_j} du_j \right) \wedge \cdots \wedge \left( \sum_{j=1}^{m} \frac{\partial x_m}{\partial u_j} du_j \right)\\\\
> &= \sum_{1 \leq j_1,\cdots,j_m \leq m} \frac{\partial x_1}{\partial u_{j_1}} \cdots \frac{\partial x_m}{\partial u_{j_m}} du_{j_1} \wedge \cdots \wedge du_{j_m}\\\\
> &= \sum_{\pi} \frac{\partial x_1}{\partial u_{\pi(1)}} \cdots \frac{\partial x_m}{\partial u_{\pi(m)}} du_{\pi(1)} \wedge \cdots \wedge du_{\pi(m)}\\\\
> &= \sum_{\pi} (-1)^{\pi} \frac{\partial x_1}{\partial u_{\pi(1)}} \cdots \frac{\partial x_m}{\partial u_{\pi(m)}} du_1 \wedge \cdots \wedge du_m\\\\
> &= \frac{\partial(x_1,\cdots,x_m)}{\partial(u_1,\cdots,u_m)} du_1 \wedge \cdots \wedge du_m.
> \end{aligned}
> $$
> 作为应用，考虑线性变换 $x = A(u)$，即
>
> $$
> x_i = \sum_{j=1}^{m} a_{ij} u_j, \quad i = 1,\cdots,m,
> $$
>
> 则
>
> $$
> dx_1 \wedge \cdots \wedge dx_m = (\det A) du_1 \wedge \cdots \wedge du_m,
> $$
>
> 这个等式可以作为行列式的定义。如果 $u = B(w)$ 仍为线性变换，则
>
> $$
> du_1 \wedge \cdots \wedge du_m = (\det B) dw_1 \wedge \cdots \wedge dw_m,
> $$
>
> 这说明
>
> $$
> dx_1 \wedge \cdots \wedge dx_m = (\det A)(\det B) dw_1 \wedge \cdots \wedge dw_m,
> $$
>
> 另一方面，复合变换 $x = A(B(w))$ 满足等式
>
> $$
> dx_1 \wedge \cdots \wedge dx_m = (\det AB) dw_1 \wedge \cdots \wedge dw_m,
> $$
>
> 这就得到线性代数中行列式的乘积性质 $\det AB = (\det A)(\det B)$。
>
> 一般地，如果 $\omega$ 为 $\mathbb{R}^m$ 中的 $s$ 次微分形式，则它可以表示为
>
> $$
> \omega = \sum_{1 \leq i_1 < \cdots < i_s \leq m} \omega_{i_1 \cdots i_s} dx_{i_1} \wedge \cdots \wedge dx_{i_s},
> $$
>
> 其中系数 $\omega_{i_1 \cdots i_s}$ 为 $\mathbb{R}^m$ 上的函数，如果这些系数都是 $C^k$ 函数，则称 $\omega$ 为 $C^k$ 的 $s$ 次微分形式。
>
> 设 $\omega$ 为 $s$ 次微分形式，$\eta$ 为 $t$ 次微分形式，则定义一个 $s+t$ 次的微分形式 $\omega \wedge \eta$ 如下：
>
> $$
> \omega \wedge \eta = \sum_{1 \leq i_1 < \cdots < i_s \leq m} \sum_{1 \leq j_1 < \cdots < j_t \leq m} \omega_{i_1 \cdots i_s} \eta_{j_1 \cdots j_t} dx_{i_1} \wedge \cdots \wedge dx_{i_s} \wedge dx_{j_1} \wedge \cdots \wedge dx_{j_t},
> $$
>
> 这个运算具有以下性质：
>
> - 这个运算可以逐点定义，即可对一点处的外形式定义；
> - $\omega \wedge \eta$ 关于 $\omega$ 和 $\eta$ 是线性的，例如
>
>   $$
>   (\lambda_1 \omega_1 + \lambda_2 \omega_2) \wedge \eta = \lambda_1 \omega_1 \wedge \eta + \lambda_2 \omega_2 \wedge \eta;
>   $$
>
> - $\omega \wedge \eta$ 关于 $\omega$ 和 $\eta$ 是分次可交换的，即
>
>   $$
>   \omega \wedge \eta = (-1)^{st} \eta \wedge \omega;
>   $$
>
> - 运算具有结合律，如
>
>   $$
>   (\omega \wedge \eta) \wedge \zeta = \omega \wedge (\eta \wedge \zeta),
>   $$
>
>   因此，上式中的括号通常可以省略。
>

> [!important]
>
> 这些运算也可以定义在曲面上。例如，设 $\omega$ 和 $\eta$ 分别是 $p$ 处的 $s$ 次外形式和 $t$ 次外形式，则可用下式定义 $s+t$ 次外形式 $\omega \wedge \eta$：
>
> $$
> \omega \wedge \eta(X_1,\cdots,X_{s+t}) = \frac{1}{s!t!} \sum_{\pi} \omega(X_{\pi(1)},\cdots,X_{\pi(s)}) \cdot \eta(X_{\pi(s+1)},\cdots,X_{\pi(s+t)}),
> $$
>
> 其中上式对 $\{1,\cdots,s+t\}$ 的所有置换 $\pi$ 求和，$X_i$ $(1 \leq i \leq s+t)$ 为任意切向量。读者可验证，在 $\mathbb{R}^m$ 上这个定义和前面的定义是一致的。
>
> 现在考虑重要的拉回运算。先对曲面上函数的微分作个推广。设 $f: \Sigma_1 \to \Sigma_2$ 是曲面之间的可微映射（在参数表示下可微），$f(p) = q$。对于 $p$ 处的一个切向量 $X_p$，取 $\Sigma_1$ 上从 $p$ 处出发的曲线 $\sigma(t)$，使得 $\sigma'(0) = X_p$，则令
>
> $$
> df_p(X_p) = (f \circ \sigma)'(0) \in T_q\Sigma_2,
> $$
>
> 这样得到的线性映射
>
> $$
> df_p: T_p\Sigma_1 \to T_p\Sigma_2
> $$
>
> 称为 $f$ 在 $p$ 处的微分或切映射，它可以看成 $f$ 在 $p$ 处的线性化。
>
> 设 $f$ 如上，如果 $\eta$ 为 $\Sigma_2$ 上的一个 $s$ 次微分形式，则我们定义 $\Sigma_1$ 上的一个 $s$ 次微分形式 $f^*\eta$ 如下：
>
> $$
> f^*\eta(X_1,\cdots,X_s) = \eta(df(X_1),\cdots,df(X_s)),
> $$
>
> 其中，如果 $X_i$ $(1 \leq i \leq s)$ 为 $p$ 处切向量，则 $df(X_i) = df_p(X_i)$ 为 $f(p)$ 处的切向量。$f^*\eta$ 称为 $\eta$ 在映射 $f$ 下的拉回。如果 $f$ 是包含映射，则 $f$ 的拉回映射其实就是限制映射。拉回映射具有下列性质：
>
> - $f^*(\omega \wedge \eta) = f^*\omega \wedge f^*\eta$;
>
> - 如果 $g,h$ 为 $\Sigma_2$ 上的函数，则 $f^*(gdh) = g \circ f d(h \circ f)$.

/example/ 曲面上2次微分形式拉回

> 设 $\varphi: \Omega \to \mathbb{R}^3$ 为参数曲面，其方程为
>
> $$
> x = x(u,v), \quad y = y(u,v), \quad z = z(u,v),
> $$
>
> 考虑 $\mathbb{R}^3$ 中的 2 次微分形式
>
> $$
> \omega = P(x,y,z)dy \wedge dz + Q(x,y,z)dz \wedge dx + R(x,y,z)dx \wedge dy,
> $$
>
> 它在 $\varphi$ 下的拉回为
>
> $$
> \begin{aligned}
> \varphi^*(\omega) &= P(\varphi)(y_u du + y_v dv) \wedge (z_u du + z_v dv) \\\\
> &+ Q(\varphi)(z_u du + z_v dv) \wedge (x_u du + x_v dv)\\\\
> &+ R(\varphi)(x_u du + x_v dv) \wedge (y_u du + y_v dv)\\\\
> &= P(\varphi) \frac{\partial(y,z)}{\partial(u,v)} du \wedge dv + Q(\varphi) \frac{\partial(z,x)}{\partial(u,v)} du \wedge dv + R(\varphi) \frac{\partial(x,y)}{\partial(u,v)} du \wedge dv.
> \end{aligned}
> $$

/example/ $\mathbb{R}^{2n}$ 上辛形式与辛变换

> 考虑 $\mathbb{R}^{2n}$ 上的 2 形式
>
> $$
> \omega = \sum_{i=1}^{n} dx_i \wedge dx_{n+i},
> $$
>
> 这个 2 形式称为 $\mathbb{R}^{2n}$ 上的标准辛形式。如果线性变换 $A: \mathbb{R}^{2n} \to \mathbb{R}^{2n}$ 保持 $\omega$ 不变，即
>
> $$
> A^*\omega = \omega,
> $$
>
> 则称 $A$ 为一个辛变换。如果 $A$ 的矩阵表示为 $(a_{ij})_{2n \times 2n}$，则
>
> $$
> A^*\omega = \sum_{i=1}^{n} A^*dx_i \wedge A^*dx_{n+i} = \sum_{i=1}^{n} \sum_{1 \leq k,l \leq 2n} a_{ik} a_{n+i\,l} dx_k \wedge dx_l,
> $$
>
> 因此 $A^*\omega = \omega$ 等价于以下条件
>
> $$
> a_{ik} a_{n+i\,n+k} - a_{i\,n+k} a_{n+i\,k} = 1 \quad (1 \leq k \leq n),
> $$
> $$
> a_{ik} a_{n+i\,l} - a_{il} a_{n+i\,k} = 0 \quad (|k-l| \neq n).
> $$
>
> 用矩阵表示就是
>
> $$
> A \begin{pmatrix} 0 & -I_n \\ I_n & 0 \end{pmatrix} A^T = \begin{pmatrix} 0 & -I_n \\ I_n & 0 \end{pmatrix}.
> $$
>
> 如果在上式两边取行列式，则得到 $(\det A)^2 = 1$。下面我们说明实际上只能有 $\det A = 1$。
>
> 事实上，记 $\Omega = dx_1 \wedge \cdots \wedge dx_{2n}$ 为 $\mathbb{R}^{2n}$ 上的体积形式，则
>
> $$
> \omega^n = \omega \wedge \cdots \wedge \omega = (-1)^{\frac{n(n-1)}{2}} n! \Omega,
> $$
>
> 另一方面，由 $A^*\omega = \omega$ 知 $A^*(\omega)^n = (A^*\omega)^n = \omega^n$，这表明 $A^*\Omega = \Omega$。根据前面的例子，$A^*\Omega = (\det A)\Omega$，因此 $\det A = 1$。

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
>

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
>

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

