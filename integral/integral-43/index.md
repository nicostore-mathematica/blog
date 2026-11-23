---
url: /integral/integral-43/index.md
---
Green 公式，Gauss 公式和曲面上的 Stokes 公式统一在一起需要引入新的研究对象，

它们是函数以及向量值函数的推广，称为微分形式。

## Part 1 微分形式

### · 定义

回顾一下，设 $f: \mathbb{R} \to \mathbb{R}$ 为一元函数，如果 $f(x)$ 在 $x\_0$ 处可微，则 $f(x)$ 在 $x\_0$ 附近可用线性函数 $x\_0 + f'(x\_0)(x - x\_0)$ 作近似逼近：

$$
f(x) - \[x\_0 + f'(x\_0)(x - x\_0)] = o(x - x\_0) \quad (x \to x\_0),
$$

这是微分学的出发点，其基本思想就是将函数在一点处线性化，得到的线性函数

$$
df\_{x\_0} = df(x\_0): \mathbb{R} \to \mathbb{R}, \quad t \mapsto f'(x\_0)t
$$

称作 $f$ 在 $x\_0$ 的微分。对于函数 $f(x) = x$ 来说，它本身是线性的，因此线性化以后仍为自身，即 $dx(x\_0)$ 为恒同映射，从而对于一般的 $f$，$f$ 在 $x\_0$ 处的微分也可以表示为

$$
df\_{x\_0} = f'(x\_0)dx(x\_0).
$$

上述讨论对于多元函数也适用。设 $f: \mathbb{R}^n \to \mathbb{R}$ 为在 $x\_0$ 处可微的函数，则

$$
f(x) - \[f(x\_0) + Jf(x\_0)(x - x\_0)] = o(|x - x\_0|) \quad (x \to x\_0),
$$

其中

$$
Jf(x\_0) = \nabla f(x\_0) = \left( \frac{\partial f}{\partial x\_1}(x\_0), \cdots, \frac{\partial f}{\partial x\_n}(x\_0) \right).
$$

线性函数

$$
df\_{x\_0}: \mathbb{R}^n \to \mathbb{R}, \quad t = (t\_1, \cdots, t\_n) \mapsto Jf(x\_0)(t) = \sum\_{i=1}^{n} \frac{\partial f}{\partial x\_n}(x\_0)t\_n
$$

称为 $f$ 在 $x\_0$ 处的微分。当 $f(x) = x\_i$ 是第 $i$ 个坐标函数时，其线性化是自身，因此 $f$ 在 $x\_0$ 处的微分又可以写为

$$
df\_{x\_0} = \frac{\partial f}{\partial x\_1}(x\_0)dx\_1(x\_0) + \cdots + \frac{\partial f}{\partial x\_n}(x\_0)dx\_n(x\_0).
$$

我们再把这些讨论推广到欧氏空间中的曲面上。设 $\Sigma$ 为 $\mathbb{R}^n$ 中的参数曲面，其参数表示为 $\varphi: \Omega \to \mathbb{R}^n$，

$$
\varphi(u\_1, \cdots, u\_m) = (x\_1(u\_1, \cdots, u\_m), \cdots, x\_n(u\_1, \cdots, u\_m)).
$$

设 $u^0$ 为 $\Sigma$ 的一个正则点，$\varphi(u^0) = p$。如果 $f$ 是 $\Sigma$ 上定义的函数，一个基本的问题就是：在点 $p$ 处如何对 $f$ 作线性化？

> 线性映射当然定义在线性空间（向量空间）上。因此，第一步应该对曲面作线性化。事实上，在 $p$ 处将 $\Sigma$ 作线性化得到的线性空间就是 $\Sigma$ 在 $p$ 处的切空间 $T\_p\Sigma$，它由 $p$ 处与 $\Sigma$ 相切的所有向量组成，这是一个 $m$ 维的线性空间，它的一组基为
>
> $$
> \varphi\_{u\_i}(u^0) = \left( \frac{\partial x\_1}{\partial u\_i}(u^0), \cdots, \frac{\partial x\_n}{\partial u\_i}(u^0) \right), \quad i = 1, \cdots, m.
> $$
>
> 如果 $f \circ \varphi$ 在 $u^0$ 处可微，则 $f$ 在 $p$ 处的线性化为线性函数
>
> $$
> df\_p: T\_p\Sigma \to \mathbb{R}
> $$
>
> $$
> X\_p = \sum\_{i=1}^{m} \lambda\_i \varphi\_{u\_i}(u^0) \mapsto \sum\_{i=1}^{m} \lambda\_i \frac{\partial (f \circ \varphi)}{\partial u\_i}(u^0),
> $$
>
> 这个线性函数称为 $f$ 在 $p$ 处的微分，它也可以这样定义：设 $X\_p \in T\_p\Sigma$ 为 $p$ 处的切向量，取 $\Sigma$ 上从 $p$ 出发的曲线 $\sigma(t)$，使得 $\sigma'(0) = X\_p$，即 $\sigma$ 的初始切向量为 $X\_p$，则
>
> $$
> df\_p(X\_p) = \left. \frac{d}{dt} \right|\_{t=0} f(\sigma(t)),
> $$

有时又记 $df\_p(X\_p) = X\_p(f)$，这表示 $df\_p(X\_p)$ 是 $f$ 沿着切向 $X\_p$ 求导。

我们知道，在线性代数中，一个向量空间上的线性函数的全体也组成了向量空间，称为对偶空间。

因此，$f$ 在 $p$ 处的微分 $df\_p$ 可以看成切空间 $T\_p\Sigma$ 的对偶空间 $T\_p^*\Sigma$ 中的元素，我们将 $T\_p^*\Sigma$ 称为 $p$ 的余切空间，余切空间中的元素称为余切向量。记
$$
T\Sigma = \bigcup\_{p \in \Sigma} T\_p\Sigma, \quad T^*\Sigma = \bigcup\_{p \in \Sigma} T\_p^*\Sigma,
$$

分别称为 $\Sigma$ 的切丛和余切丛。

如果 $f$ 在 $\Sigma$ 上处处可微，则我们有映射

$$
df: \Sigma \to T^*\Sigma, \quad p \mapsto df\_p \in T\_p^*\Sigma,
$$

称为 $f$ 在 $\Sigma$ 上的全微分。更一般地，如果映射 $\omega: \Sigma \to T^\*\Sigma$ 满足条件

$$
\omega(p) \in T\_p^\*\Sigma, \quad \forall ; p \in \Sigma,
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
> 设 $\omega$ 为 $\mathbb{R}^m$ 上的 1 形式。任取 $p \in \mathbb{R}^m$，由于 $\omega(p) \in T\_p^*\mathbb{R}^m$，而 $T\_p^*\mathbb{R}^m$ 的一组基为 ${dx\_1(p), \cdots, dx\_m(p)}$，故 $\omega(p)$ 可以表示为
>
> $$
> \omega(p) = \sum\_{i=1}^{m} a\_i(p) dx\_i(p),
> $$
>
> 当 $p$ 变动时 $a\_i(p)$ $(1 \leq i \leq m)$ 是关于 $p$ 的函数。因此我们也记为
>
> $$
> \omega = \sum\_{i=1}^{m} a\_i dx\_i.
> $$
>
> 如果函数 ${a\_i}$ 均为 $C^k$ 的，则称 1 形式 $\omega$ 是 $C^k$ 的。例如，当 $f$ 是 $C^k$ 函数时，其全微分 $df$ 是 $C^{k-1}$ 的。

现在我们继续将研究对象作进一步的推广。记 $T\_p\Sigma$ 的 $s$ 个乘积为

$$
(T\_p\Sigma)^s = T\_p\Sigma \times \cdots \times T\_p\Sigma.
$$

设 $\omega: (T\_p\Sigma)^s \to \mathbb{R}$ 为函数，且

> \[!important]
>
> (i) $\omega$ 关于每一个分量都是线性的，即 $\lambda, \mu \in \mathbb{R}$ 时
>
> $$
> \omega(\cdots, \lambda X\_i + \mu Y\_i, \cdots) = \lambda \omega(\cdots, X\_i, \cdots) + \mu \omega(\cdots, Y\_i, \cdots), \quad \forall ; X\_i, Y\_i \in T\_p^\*\Sigma.
> $$
>
> (ii) $\omega$ 关于任意两个分量是反称的，即交换两个分量的位置时 $\omega$ 的值相差一个符号。用置换来表示就是
>
> $$
> \omega(X\_{\pi(1)}, \cdots, X\_{\pi(s)}) = (-1)^{\pi} \omega(X\_1, \cdots, X\_s),
> $$
>
> 其中 $\pi$ 是 ${1,2,\cdots,s}$ 的任意置换，当 $\pi$ 为偶置换时 $(-1)^{\pi} = 1$；当 $\pi$ 为奇置换时 $(-1)^{\pi} = -1$。
>
> 则称 $\omega$ 为 $p$ 处的一个 $s$ 次外形式，$p$ 处的所有 $s$ 次外形式构成的线性空间记为 $\bigwedge^s T\_p^\*\Sigma$。
>
> 当 $s = 1$ 时，$\bigwedge^1 T\_p^*\Sigma$ 就是对偶空间 $T\_p^*\Sigma$。

/example/  $\bigwedge^2 T\_p^\*\Sigma$ 的结构

> 根据定义，$p$ 处的 2 次外形式就是定义在切空间 $T\_p\Sigma$ 上的一个反称的双线性型。给定 $\omega, \eta \in T\_p^\*\Sigma$，我们来定义一个这样的反称双线性型 $\omega \wedge \eta$：任取切向量 $X$, $Y$，令
>
> $$
> \omega \wedge \eta(X,Y) = \omega(X)\eta(Y) - \omega(Y)\eta(X),
> $$
>
> 显然 $\omega \wedge \eta$ 满足以上两个条件，因此 $\omega \wedge \eta \in \bigwedge^2 T\_p^\*\Sigma$。我们还有
>
> $$
> \omega \wedge \eta = -\eta \wedge \omega, \quad (\omega\_1 + \omega\_2) \wedge \eta = \omega\_1 \wedge \eta + \omega\_2 \wedge \eta.
> $$
>
> 特别地，$\omega \wedge \omega = 0$。如果取 $T\_p\Sigma$ 的一组基 ${e\_i}*{i=1}^m$，记 $T\_p^\*\Sigma$ 的一组相应的对偶基为 ${e^i}*{i=1}^m$，即
>
> $$
> e^i\left( \sum\_{j=1}^{m} \lambda\_j e\_j \right) = \lambda\_i, \quad \forall ; \lambda\_j \in \mathbb{R} ; (1 \leq j \leq m),
> $$
>
> 则我们断言 ${e^i \wedge e^j}$ $(i < j)$ 为 $\bigwedge^2 T\_p^\*\Sigma$ 的一组基。事实上，先说明它们是线性无关的：如果
>
> $$
> \sum\_{i\<j} \lambda\_{ij} e^i \wedge e^j = 0,
> $$
>
> 则当 $i < j$ 时（其中 $\delta\_i^k = 1$，当 $k = l$；$\delta\_i^k = 0$，当 $k \neq l$）
>
> $$
> \begin{aligned}
> 0 &= \sum\_{k\<l} \lambda\_{kl} e^k \wedge e^l(e\_i, e\_j)\\\\
> &= \sum\_{k\<l} \lambda\_{kl} \[e^k(e\_i)e^l(e\_j) - e^k(e\_j)e^l(e\_i)]\\\\
> &= \sum\_{k\<l} \lambda\_{kl} \[\delta\_i^k \delta\_j^l - \delta\_j^k \delta\_i^l]\\\\
> &= \lambda\_{ij},
> \end{aligned}
> $$
> 这说明 ${e^i \wedge e^j}$ $(i < j)$ 线性无关。
>
> 其次，任取 $\omega \in \bigwedge^2 T\_p^\*\Sigma$，记 $\lambda\_{ij} = \omega(e\_i, e\_j)$，则不难验证
>
> $$
> \omega = \sum\_{i\<j} \lambda\_{ij} e^i \wedge e^j.
> $$
>
> 因此，${e^i \wedge e^j}$ $(i < j)$ 为 $\bigwedge^2 T\_p^\*\Sigma$ 的一组基。特别地，
>
> $$
> \dim \bigwedge^2 T\_p^\*\Sigma = C\_m^2 = \frac{1}{2} m(m-1).
> $$
>
> 如同余切丛那样，令
>
> $$
> \bigwedge^2 T^*\Sigma = \bigcup\_{p \in \Sigma} \bigwedge^2 T\_p^*\Sigma,
> $$
>
> 称为 $\Sigma$ 上的 2 形式丛。设映射 $\omega: \Sigma \to \bigwedge^2 T^\*\Sigma$ 满足条件
>
> $$
> \omega(p) = \omega\_p \in \bigwedge^2 T\_p^\*\Sigma, \quad \forall ; p \in \Sigma,
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
> dx = x\_u du + x\_v dv, \quad dy = y\_u du + y\_v dv,
> $$
>
> 从而有
>
> $$
> dx \wedge dy = (x\_u du + x\_v dv) \wedge (y\_u du + y\_v dv) = (x\_u y\_v - y\_u x\_v) du \wedge dv,
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

> \[!important]
>
> 上面的这些讨论可推广到一般的 $s$ 次外形式空间上。
>
> 例如，沿用以上记号，设 $\omega, \eta, \zeta$ 为 $T\_p^*\Sigma$ 中的余切向量，定义 $\omega \wedge \eta \wedge \zeta \in \bigwedge^3 T\_p^*\Sigma$ 如下：设 $X,Y,Z$ 为 $T\_p\Sigma$ 中的任意切向量，令
> $$
> \begin{aligned}
> \omega \wedge \eta \wedge \zeta(X,Y,Z) &= \omega(X)\eta(Y)\zeta(Z) - \omega(X)\eta(Z)\zeta(Y)\\\\
> &+ \omega(Y)\eta(Z)\zeta(X) - \omega(Y)\eta(X)\zeta(Z)\\\\
> &+ \omega(Z)\eta(X)\zeta(Y) - \omega(Z)\eta(Y)\zeta(X),
> \end{aligned}
> $$
> 容易验证 $\omega \wedge \eta \wedge \zeta$ 的确为一个 3 次外形式，且这个 3 次外形式关于 $\omega$, $\eta$ 以及 $\zeta$ 具有线性和反称性。
>
> 与 2 次外形式类似，${e^i \wedge e^j \wedge e^k}$ $(i < j < k)$ 组成了 $\bigwedge^3 T\_p^\*\Sigma$ 的一组基，特别地，这个空间的维数为 $C\_m^3$。令
>
> $$
> \bigwedge^3 T^*\Sigma = \bigcup\_{p \in \Sigma} \bigwedge^3 T\_p^*\Sigma,
> $$
>
> 称为 $\Sigma$ 上的 3 形式丛。设映射 $\omega: \Sigma \to \bigwedge^3 T^\*\Sigma$ 满足条件
>
> $$
> \omega(p) = \omega\_p \in \bigwedge^3 T\_p^\*\Sigma, \quad \forall ; p \in \Sigma,
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
> dx = x\_u du + x\_v dv + x\_w dw, \quad dy = y\_u du + y\_v dv + y\_w dw,
> $$
>
> $$
> dz = z\_u du + z\_v dv + z\_w dw.
> $$
>
> 因此有
>
> $$
> \begin{aligned}
> dx \wedge du \wedge dz&= (x\_u du + x\_v dv + x\_w dw) \wedge (y\_u du + y\_v dv + y\_w dw) \wedge (z\_u du + z\_v dv + z\_w dw)\\\\
> &= x\_u du \wedge (y\_v dv + y\_w dw) \wedge (z\_v dv + z\_w dw) \\\\
> &+ x\_v dv \wedge (y\_u du + y\_w dw) \wedge (z\_u du + z\_w dw)\\\\
> &+ x\_w dw \wedge (y\_u du + y\_v dv) \wedge (z\_u du + z\_v dv)\\\\
> &= x\_u(y\_v z\_w - y\_w z\_v) du \wedge dv \wedge dw - x\_v(y\_u z\_w - y\_w z\_u) du \wedge dv \wedge dw\\\\
> &+ x\_w(y\_u z\_v - y\_v z\_u) du \wedge dv \wedge dw\\\\
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
> 对于一般的 $s$，设 $\omega\_i$ $(1 \leq i \leq s)$ 为 $s$ 个 1 形式，定义 $s$ 次外形式
>
> $$
> \omega\_1 \wedge \cdots \wedge \omega\_s: (T\_p\Sigma)^s \to \mathbb{R}
> $$
>
> 如下：
>
> $$
> \omega\_1 \wedge \cdots \wedge \omega\_s(X\_1,\cdots,X\_s) = \sum\_{\pi} (-1)^{\pi} \omega\_1(X\_{\pi(1)}) \cdots \omega\_s(X\_{\pi(s)}),
> $$
>
> 其中 $X\_i$ $(1 \leq i \leq s)$ 为任意切向量，上式求和是对 ${1,\cdots,s}$ 的所有置换 $\pi$ 求的。
>
> 类似于前面的讨论可知，$\bigwedge^s T\_p^\*\Sigma$ 的一组基为s
>
> $$
> {e^{i\_1} \wedge \cdots \wedge e^{i\_s}}, \quad 1 \leq i\_1 < \cdots < i\_s \leq m.
> $$
>
> 特别地，它的维数为 $C\_m^s$。当 $s > m$ 时，$s$ 次外形式均为零。令
>
> $$
> \bigwedge^s T^*\Sigma = \bigcup\_{p \in \Sigma} \bigwedge^s T\_p^*\Sigma,
> $$
>
> 称为 $\Sigma$ 上的 $s$ 形式丛。设映射 $\omega: \Sigma \to \bigwedge^s T^\*\Sigma$ 满足条件
>
> $$
> \omega(p) = \omega\_p \in \bigwedge^s T\_p^\*\Sigma, \quad \forall ; p \in \Sigma,
> $$
>
> 则称 $\omega$ 为 $\Sigma$ 上的 $s$ 次外微分形式，简称 $s$ 形式或 $s$ 次微分形式。
>
> $s$ 次微分形式就是在每一点 $p$ 处指定一个 $s$ 次外形式的映射。

/example/ $m$ 次微分形式与行列式

> 设 $(x\_1,\cdots,x\_m)$ 为 $\mathbb{R}^m$ 上的直角坐标，则 $dx\_1 \wedge \cdots \wedge dx\_m$ 为一个 $m$ 次微分形式。对于另一坐标 $u\_1,\cdots,u\_m$，记
>
> $$
> x\_i = x\_i(u\_1,\cdots,u\_m), \quad i = 1,\cdots,m,
> $$
>
> 则
>
> $$
> dx\_i = \sum\_{j=1}^{m} \frac{\partial x\_i}{\partial u\_j} du\_j, \quad i = 1,\cdots,m.
> $$
>
> 因此
>
> $$
> \begin{aligned}
> dx\_1 \wedge \cdots \wedge dx\_m &= \left( \sum\_{j=1}^{m} \frac{\partial x\_1}{\partial u\_j} du\_j \right) \wedge \cdots \wedge \left( \sum\_{j=1}^{m} \frac{\partial x\_m}{\partial u\_j} du\_j \right)\\\\
> &= \sum\_{1 \leq j\_1,\cdots,j\_m \leq m} \frac{\partial x\_1}{\partial u\_{j\_1}} \cdots \frac{\partial x\_m}{\partial u\_{j\_m}} du\_{j\_1} \wedge \cdots \wedge du\_{j\_m}\\\\
> &= \sum\_{\pi} \frac{\partial x\_1}{\partial u\_{\pi(1)}} \cdots \frac{\partial x\_m}{\partial u\_{\pi(m)}} du\_{\pi(1)} \wedge \cdots \wedge du\_{\pi(m)}\\\\
> &= \sum\_{\pi} (-1)^{\pi} \frac{\partial x\_1}{\partial u\_{\pi(1)}} \cdots \frac{\partial x\_m}{\partial u\_{\pi(m)}} du\_1 \wedge \cdots \wedge du\_m\\\\
> &= \frac{\partial(x\_1,\cdots,x\_m)}{\partial(u\_1,\cdots,u\_m)} du\_1 \wedge \cdots \wedge du\_m.
> \end{aligned}
> $$
> 作为应用，考虑线性变换 $x = A(u)$，即
>
> $$
> x\_i = \sum\_{j=1}^{m} a\_{ij} u\_j, \quad i = 1,\cdots,m,
> $$
>
> 则
>
> $$
> dx\_1 \wedge \cdots \wedge dx\_m = (\det A) du\_1 \wedge \cdots \wedge du\_m,
> $$
>
> 这个等式可以作为行列式的定义。如果 $u = B(w)$ 仍为线性变换，则
>
> $$
> du\_1 \wedge \cdots \wedge du\_m = (\det B) dw\_1 \wedge \cdots \wedge dw\_m,
> $$
>
> 这说明
>
> $$
> dx\_1 \wedge \cdots \wedge dx\_m = (\det A)(\det B) dw\_1 \wedge \cdots \wedge dw\_m,
> $$
>
> 另一方面，复合变换 $x = A(B(w))$ 满足等式
>
> $$
> dx\_1 \wedge \cdots \wedge dx\_m = (\det AB) dw\_1 \wedge \cdots \wedge dw\_m,
> $$
>
> 这就得到线性代数中行列式的乘积性质 $\det AB = (\det A)(\det B)$。
>
> 一般地，如果 $\omega$ 为 $\mathbb{R}^m$ 中的 $s$ 次微分形式，则它可以表示为
>
> $$
> \omega = \sum\_{1 \leq i\_1 < \cdots < i\_s \leq m} \omega\_{i\_1 \cdots i\_s} dx\_{i\_1} \wedge \cdots \wedge dx\_{i\_s},
> $$
>
> 其中系数 $\omega\_{i\_1 \cdots i\_s}$ 为 $\mathbb{R}^m$ 上的函数，如果这些系数都是 $C^k$ 函数，则称 $\omega$ 为 $C^k$ 的 $s$ 次微分形式。
>
> 设 $\omega$ 为 $s$ 次微分形式，$\eta$ 为 $t$ 次微分形式，则定义一个 $s+t$ 次的微分形式 $\omega \wedge \eta$ 如下：
>
> $$
> \omega \wedge \eta = \sum\_{1 \leq i\_1 < \cdots < i\_s \leq m} \sum\_{1 \leq j\_1 < \cdots < j\_t \leq m} \omega\_{i\_1 \cdots i\_s} \eta\_{j\_1 \cdots j\_t} dx\_{i\_1} \wedge \cdots \wedge dx\_{i\_s} \wedge dx\_{j\_1} \wedge \cdots \wedge dx\_{j\_t},
> $$
>
> 这个运算具有以下性质：
>
> * 这个运算可以逐点定义，即可对一点处的外形式定义；
>
> * $\omega \wedge \eta$ 关于 $\omega$ 和 $\eta$ 是线性的，例如
>
>   $$
>   (\lambda\_1 \omega\_1 + \lambda\_2 \omega\_2) \wedge \eta = \lambda\_1 \omega\_1 \wedge \eta + \lambda\_2 \omega\_2 \wedge \eta;
>   $$
>
> * $\omega \wedge \eta$ 关于 $\omega$ 和 $\eta$ 是分次可交换的，即
>
>   $$
>   \omega \wedge \eta = (-1)^{st} \eta \wedge \omega;
>   $$
>
> * 运算具有结合律，如
>
>   $$
>   (\omega \wedge \eta) \wedge \zeta = \omega \wedge (\eta \wedge \zeta),
>   $$
>
>   因此，上式中的括号通常可以省略。

> \[!important]
>
> 这些运算也可以定义在曲面上。例如，设 $\omega$ 和 $\eta$ 分别是 $p$ 处的 $s$ 次外形式和 $t$ 次外形式，则可用下式定义 $s+t$ 次外形式 $\omega \wedge \eta$：
>
> $$
> \omega \wedge \eta(X\_1,\cdots,X\_{s+t}) = \frac{1}{s!t!} \sum\_{\pi} \omega(X\_{\pi(1)},\cdots,X\_{\pi(s)}) \cdot \eta(X\_{\pi(s+1)},\cdots,X\_{\pi(s+t)}),
> $$
>
> 其中上式对 ${1,\cdots,s+t}$ 的所有置换 $\pi$ 求和，$X\_i$ $(1 \leq i \leq s+t)$ 为任意切向量。读者可验证，在 $\mathbb{R}^m$ 上这个定义和前面的定义是一致的。
>
> 现在考虑重要的拉回运算。先对曲面上函数的微分作个推广。设 $f: \Sigma\_1 \to \Sigma\_2$ 是曲面之间的可微映射（在参数表示下可微），$f(p) = q$。对于 $p$ 处的一个切向量 $X\_p$，取 $\Sigma\_1$ 上从 $p$ 处出发的曲线 $\sigma(t)$，使得 $\sigma'(0) = X\_p$，则令
>
> $$
> df\_p(X\_p) = (f \circ \sigma)'(0) \in T\_q\Sigma\_2,
> $$
>
> 这样得到的线性映射
>
> $$
> df\_p: T\_p\Sigma\_1 \to T\_p\Sigma\_2
> $$
>
> 称为 $f$ 在 $p$ 处的微分或切映射，它可以看成 $f$ 在 $p$ 处的线性化。
>
> 设 $f$ 如上，如果 $\eta$ 为 $\Sigma\_2$ 上的一个 $s$ 次微分形式，则我们定义 $\Sigma\_1$ 上的一个 $s$ 次微分形式 $f^\*\eta$ 如下：
>
> $$
> f^\*\eta(X\_1,\cdots,X\_s) = \eta(df(X\_1),\cdots,df(X\_s)),
> $$
>
> 其中，如果 $X\_i$ $(1 \leq i \leq s)$ 为 $p$ 处切向量，则 $df(X\_i) = df\_p(X\_i)$ 为 $f(p)$ 处的切向量。$f^\*\eta$ 称为 $\eta$ 在映射 $f$ 下的拉回。如果 $f$ 是包含映射，则 $f$ 的拉回映射其实就是限制映射。拉回映射具有下列性质：
>
> * $f^*(\omega \wedge \eta) = f^*\omega \wedge f^\*\eta$;
>
> * 如果 $g,h$ 为 $\Sigma\_2$ 上的函数，则 $f^\*(gdh) = g \circ f d(h \circ f)$.

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
> \varphi^\*(\omega) &= P(\varphi)(y\_u du + y\_v dv) \wedge (z\_u du + z\_v dv) \\\\
> &+ Q(\varphi)(z\_u du + z\_v dv) \wedge (x\_u du + x\_v dv)\\\\
> &+ R(\varphi)(x\_u du + x\_v dv) \wedge (y\_u du + y\_v dv)\\\\
> &= P(\varphi) \frac{\partial(y,z)}{\partial(u,v)} du \wedge dv + Q(\varphi) \frac{\partial(z,x)}{\partial(u,v)} du \wedge dv + R(\varphi) \frac{\partial(x,y)}{\partial(u,v)} du \wedge dv.
> \end{aligned}
> $$

/example/ $\mathbb{R}^{2n}$ 上辛形式与辛变换

> 考虑 $\mathbb{R}^{2n}$ 上的 2 形式
>
> $$
> \omega = \sum\_{i=1}^{n} dx\_i \wedge dx\_{n+i},
> $$
>
> 这个 2 形式称为 $\mathbb{R}^{2n}$ 上的标准辛形式。如果线性变换 $A: \mathbb{R}^{2n} \to \mathbb{R}^{2n}$ 保持 $\omega$ 不变，即
>
> $$
> A^\*\omega = \omega,
> $$
>
> 则称 $A$ 为一个辛变换。如果 $A$ 的矩阵表示为 $(a\_{ij})\_{2n \times 2n}$，则
>
> $$
> A^\*\omega = \sum\_{i=1}^{n} A^\*dx\_i \wedge A^\*dx\_{n+i} = \sum\_{i=1}^{n} \sum\_{1 \leq k,l \leq 2n} a\_{ik} a\_{n+i,l} dx\_k \wedge dx\_l,
> $$
>
> 因此 $A^\*\omega = \omega$ 等价于以下条件
>
> $$
> a\_{ik} a\_{n+i,n+k} - a\_{i,n+k} a\_{n+i,k} = 1 \quad (1 \leq k \leq n),
> $$
>
> $$
> a\_{ik} a\_{n+i,l} - a\_{il} a\_{n+i,k} = 0 \quad (|k-l| \neq n).
> $$
>
> 用矩阵表示就是
>
> $$
> A \begin{pmatrix} 0 & -I\_n \ I\_n & 0 \end{pmatrix} A^T = \begin{pmatrix} 0 & -I\_n \ I\_n & 0 \end{pmatrix}.
> $$
>
> 如果在上式两边取行列式，则得到 $(\det A)^2 = 1$。下面我们说明实际上只能有 $\det A = 1$。
>
> 事实上，记 $\Omega = dx\_1 \wedge \cdots \wedge dx\_{2n}$ 为 $\mathbb{R}^{2n}$ 上的体积形式，则
>
> $$
> \omega^n = \omega \wedge \cdots \wedge \omega = (-1)^{\frac{n(n-1)}{2}} n! \Omega,
> $$
>
> 另一方面，由 $A^*\omega = \omega$ 知 $A^*(\omega)^n = (A^*\omega)^n = \omega^n$，这表明 $A^*\Omega = \Omega$。根据前面的例子，$A^\*\Omega = (\det A)\Omega$，因此 $\det A = 1$。
