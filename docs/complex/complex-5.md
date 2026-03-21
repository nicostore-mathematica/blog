---
title: Chapter 5 留数定理
permalink: /complex/complex-5/
createTime: 2025/11/28 13:02:58
---

## Part 1 留数定理

### · 留数定理

**定理 1 (留数定理)** 

> 设有界区域 $G$ 的边界 $C$ 为分段光滑的简单闭合曲线。若除有限个孤立奇点 $b_k$, $k = 1,2,3,\cdots,n$ 外，函数 $f(z)$ 在 $G$ 内单值解析，在 $\overline{G}$ 中连续，并且 $f(z)$ 在边界 $C$ 上连续，则沿区域 $G$ 边界正向的积分
>
> $$
> \oint_C f(z)\,\mathrm{d}z = 2\pi\mathrm{i} \sum_{k=1}^n \operatorname{res} f(b_k).
> $$
>
> $\operatorname{res} f(b_k)$ 称为 $f(z)$ 在 $b_k$ 处的留数，它等于 $f(z)$ 在孤立奇点 $b_k$ 的空心邻域内 Laurent 展开
>
> $$
> f(z) = \sum_{l=-\infty}^{\infty} a_l^{(k)} (z - b_k)^l, \quad 0 < |z - b_k| < r
> $$
>
> 中 $(z - b_k)^{-1}$ 的系数 $a_{-1}^{(k)}$。

/proof/

> 围绕每个孤立奇点 $b_k$ 作简单闭合曲线 $\gamma_k$，使 $\gamma_k$ 均在 $G$ 内，且互不交叠，则根据（多连通有界区域）Cauchy 定理及函数作 Laurent 展开的系数公式，就有
>
> $$
> \oint_C f(z)\,\mathrm{d}z = \sum_{k=1}^n \oint_{\gamma_k} f(z)\,\mathrm{d}z = 2\pi\mathrm{i} \sum_{k=1}^n a_{-1}^{(k)} = 2\pi\mathrm{i} \sum_{k=1}^n \operatorname{res} f(b_k).
> $$
>

所以，留数定理就是（多连通有界区域的）Cauchy 定理和 Laurent 展开系数公式的直接推论。它告诉我们，为了计算解析函数的围道积分值，只需计算出函数在孤立奇点处的留数即可。

求出 $f(z)$ 在孤立奇点 $b$ 处的留数，就是要求出 $f(z)$ 在 $z = b$ 的空心邻域内 Laurent 展开中 $(z - b)^{-1}$ 项的系数。在极点的情况下，通过微商的计算就可以比较容易地求出来。

设 $z = b$ 是 $f(z)$ 的 $m$ 阶极点，则

$$
\begin{aligned}
f(z) &= a_{-m}(z - b)^{-m} + a_{-m+1}(z - b)^{-m+1} + \cdots \\
&\quad + a_{-1}(z - b)^{-1} + a_0 + a_1(z - b) + \cdots, \quad 0 < |z - b_k| < r.
\end{aligned}
$$

两端乘上 $(z - b)^m$，有

$$
(z - b)^m f(z) = a_{-m} + a_{-m+1}(z - b) + \cdots + a_{-1}(z - b)^{m-1} + a_0(z - b)^m + a_1(z - b)^{m+1} + \cdots.
$$

这时 $a_{-1}$ 是 $(z - b)^m f(z)$ 的展开式中 $(z - b)^{m-1}$ 项的系数，故

$$
a_{-1} = \frac{1}{(m - 1)!} \frac{\mathrm{d}^{m-1}}{\mathrm{d}z^{m-1}} (z - b)^m f(z) \Big|_{z=b}.
$$
特别是 $z = b$ 为一阶极点的情形，

$$
f(z) = a_{-1}(z - b)^{-1} + a_0 + a_1(z - b) + a_2(z - b)^2 + \cdots, \quad 0 < |z - b_k| < r.
$$

所以函数 $f(z)$ 在该点的留数就是

$$
a_{-1} = \lim_{z \to b} (z - b)f(z).
$$

可见，函数 $f(z)$ 在复平面内一阶极点 $z = b$ 处的留数一定不为零。

常见的情况是 $f(z)$ 可以表示为 $\dfrac{P(z)}{Q(z)}$ 的形式，其中 $P(z)$ 和 $Q(z)$ 都在 $b$ 点及其邻域内解析，且 $P(b) \ne 0$，$z = b$ 是 $Q(z)$ 的一阶零点，即 $Q(b) = 0$，$Q'(b) \ne 0$，则

$$
a_{-1} = \lim_{z \to b} (z - b)f(z) = \lim_{z \to b} (z - b)\frac{P(z)}{Q(z)} = \frac{P(b)}{Q'(b)}.
$$
应用留数概念，可以方便地讨论有理函数的部分分式。

> 例如，要求将函数
>
> $$
> f(z) = \frac{1}{(z - 1)(z - 2)(z - 3)}
> $$
>
> 部分分式，
>
> $$
> \frac{1}{(z - 1)(z - 2)(z - 3)} = \frac{A}{z - 1} + \frac{B}{z - 2} + \frac{C}{z - 3}.
> $$
>
> 那么，三个待定常数，$A$, $B$ 和 $C$，正好就是函数 $f(z)$ 在一阶极点 $z = 1$, $z = 2$ 和 $z = 3$ 点处的留数。因此
>
> $$
> A = \operatorname{res} \frac{1}{(z - 1)(z - 2)(z - 3)} \Big|_{z = 1} = \frac{1}{2},
> $$
>
> $$
> B = \operatorname{res} \frac{1}{(z - 1)(z - 2)(z - 3)} \Big|_{z = 2} = -1,
> $$
>
> $$
> C = \operatorname{res} \frac{1}{(z - 1)(z - 2)(z - 3)} \Big|_{z = 3} = \frac{1}{2}.
> $$
>
> 如果函数 $f(z)$ 具有高阶极点，也可以类似地处理。例如，
>
> $$
> \frac{1}{(z - 1)^2(z - 2)(z - 3)} = \frac{A}{(z - 1)^2} + \frac{B}{z - 1} + \frac{C}{z - 2} + \frac{D}{z - 3}.
> $$
>
> 容易看出
>
> $$
> A = \operatorname{res} \frac{1}{(z - 1)^2(z - 2)(z - 3)} \Big|_{z = 1} = \frac{1}{2},
> $$
>
> $$
> B = \operatorname{res} \frac{1}{(z - 1)^2(z - 2)(z - 3)} \Big|_{z = 1} = \frac{3}{4},
> $$
>
> $$
> C = \operatorname{res} \frac{1}{(z - 1)^2(z - 2)(z - 3)} \Big|_{z = 2} = -1,
> $$
>
> $$
> D = \operatorname{res} \frac{1}{(z - 1)^2(z - 2)(z - 3)} \Big|_{z = 3} = \frac{1}{4}.
> $$

### · 例题

/example/

> 求 $\dfrac{1}{z^2 + 1}$ 在复平面 $\mathbb{C}$ 内孤立奇点处的留数。

/proof/

> $z = \pm\mathrm{i}$ 是它的一阶极点，
>
> $$
> \operatorname{res} f(\pm\mathrm{i}) = \frac{1}{2z} \Big|_{z = \pm\mathrm{i}} = \pm\frac{\mathrm{i}}{2}.
> $$

/example/

> 求 $\dfrac{\mathrm{e}^{\mathrm{i}az} - \mathrm{e}^{\mathrm{i}bz}}{z^2}$ 在复平面 $\mathbb{C}$ 内孤立奇点处的留数。

/proof/

>  $z = 0$ 是它的一阶极点，
>
> $$
> \operatorname{res} f(0) = \lim_{z \to 0} z \cdot \frac{\mathrm{e}^{\mathrm{i}az} - \mathrm{e}^{\mathrm{i}bz}}{z^2} = \lim_{z \to 0} \frac{\mathrm{e}^{\mathrm{i}az} - \mathrm{e}^{\mathrm{i}bz}}{z} = \mathrm{i}(a - b).
> $$

/example/

> 求 $1/(z^2 + 1)^3$ 在复平面 $\mathbb{C}$ 内孤立奇点处的留数。

/proof/

>  $z = \pm\mathrm{i}$ 是它的三阶极点，
>
> $$
> \operatorname{res} f(\pm\mathrm{i}) = \frac{1}{2!} \frac{\mathrm{d}^2}{\mathrm{d}z^2} \left[ (z \mp \mathrm{i})^3 \cdot \frac{1}{(z^2 + 1)^3} \right] \Big|_{z = \pm\mathrm{i}} = \pm\frac{3}{16}\mathrm{i}.
> $$

### · 无穷远点的留数

以上的讨论均局限于复平面 $\mathbb{C}$ 内的孤立奇点。如果 $\infty$ 点不是 $f(z)$ 的非孤立奇点，那么可以定义

$$
\operatorname{res} f(\infty) = \frac{1}{2\pi\mathrm{i}} \oint_{C'} f(z)\,\mathrm{d}z,
$$

其中 $C'$ 为绕 $\infty$ 点正向（即顺时针方向）一周的简单封闭曲线，在围道内除 $\infty$ 点外的其他点均解析，$\infty$ 点是 $f(z)$ 的唯一可能的孤立奇点。需要注意，$\operatorname{res} f(\infty)$ 并不是 $f(z)$ 在 $\infty$ 点邻域内 Laurent 展开中 $z^1$ 项的系数。

> 这是因为，作变换 $t = 1/z$，则
> $$
> \operatorname{res} f(\infty) = \frac{1}{2\pi\mathrm{i}} \oint_{C'} f(z)\,\mathrm{d}z = -\frac{1}{2\pi\mathrm{i}} \oint_C \frac{f(1/t)}{t^2}\,\mathrm{d}t
> $$
>
> $= -\dfrac{f(1/t)}{t^2}$ 在 $t = 0$ \text{ 点邻域内幂级数展开中 } $t^{-1}$ 项的系数
>
> $= -f(1/t)$ 在 $t = 0$ 点邻域内幂级数展开中 $t^1$ 项的系数
>
> $= -f(z)$ 在 $z = \infty$ 点邻域内幂级数展开中 $z^{-1}$ 项的系数.

在这个结果中，与有限远处不同之处在于：

> (1) 从结果上说，函数 $f(z)$ 在 $\infty$ 点的留数，等于 $-f(z)$ 在 $\infty$ 点邻域内幂级数展开中 $z^{-1}$ 项的系数，这里多了一个负号。
>
> (2) 从概念上说，由于 $z^{-1}$ 项属于 $f(z)$ 在 $\infty$ 点邻域内幂级数展开式的正则部分，因此，即使 $f(z)$ 在 $\infty$ 点解析，$\operatorname{res} f(\infty)$ 也可能不为 0。反之，即使 $\infty$ 点是 $f(z)$ 的孤立奇点，甚至是一阶极点，$\operatorname{res} f(\infty)$ 也可能为 0。

## Part 2 留数定理应用

### · 有理三角函数积分

作为应用留数定理计算定积分的第一类例子，研究有理三角函数的积分

$$
I = \int_0^{2\pi} R(\sin\theta, \cos\theta)\,\mathrm{d}\theta,
$$

其中 $R$ 是 $\sin\theta$, $\cos\theta$ 的有理函数，即 $R$ 是由 $\sin\theta$, $\cos\theta$ 的多项式相除得到的函数，$R$ 在积分区间 $[0,2\pi]$ 上是连续的。作变换 $z = \mathrm{e}^{\mathrm{i}\theta}$，则

$$
\sin\theta = \frac{z^2 - 1}{2\mathrm{i}z}, \quad \cos\theta = \frac{z^2 + 1}{2z}, \quad \mathrm{d}\theta = \frac{\mathrm{d}z}{\mathrm{i}z},
$$

相应的积分路径则变为 $z$ 复平面内的一条封闭围道——单位圆的圆周 $|z| = 1$。于是，

$$
I = \oint_{|z|=1} R\left( \frac{z^2 - 1}{2\mathrm{i}z}, \frac{z^2 + 1}{2z} \right) \frac{\mathrm{d}z}{\mathrm{i}z}.
$$

有理三角函数 $R(\sin\theta, \cos\theta)$ 在积分区间 $[0,2\pi]$ 上连续，保证了有理函数 $R\left( \dfrac{z^2 - 1}{2\mathrm{i}z}, \dfrac{z^2 + 1}{2z} \right)$ 在积分围道（单位圆的圆周）上无奇点。

如果被积函数 $R\left( \dfrac{z^2 - 1}{2\mathrm{i}z}, \dfrac{z^2 + 1}{2z} \right) \dfrac{1}{\mathrm{i}z}$ 在单位圆内部只有有限个孤立奇点，那么可以应用留数定理得
$$
\oint_{|z|=1} R\left( \frac{z^2 - 1}{2\mathrm{i}z}, \frac{z^2 + 1}{2z} \right) \frac{\mathrm{d}z}{\mathrm{i}z} = 2\pi \sum_{|z|<1} \operatorname{res} \left\{ \frac{1}{z} R\left( \frac{z^2 - 1}{2\mathrm{i}z}, \frac{z^2 + 1}{2z} \right) \right\}.
$$

### · 无穷积分

第二类可以用留数定理计算的定积分是无穷积分

$$
I = \int_{-\infty}^\infty f(x)\,\mathrm{d}x.
$$

在复平面上看，积分的路径是实轴，并不构成闭合围道。为了应用留数定理计算这种类型的积分，其基本原则是：

> (1) 将实函数 $f(x)$ 的定义域延拓到复平面成为复函数 $f(z)$，
>
> (2) 补上适当的积分路径从而形成复平面内的闭合围道。为此可以在上半平面补上以原点 $O$ 为圆心、$R$ 为半径的半圆弧 $C_R$。由实轴上的线段 $[-R,R]$ 及 $C_R$ 就构成闭合围道。如果函数 $f(z)$ 在闭合围道上没有奇点，而且在围道内部只有有限个孤立奇点，则可以应用留数定理计算围道积分，而后令 $R \to \infty$，如果极限存在，即可算出积分
> $$
> I = \int_{-\infty}^\infty f(x)\,\mathrm{d}x.
> $$

/example/

> 计算积分 $\displaystyle \int_{-\infty}^\infty \frac{\mathrm{d}x}{(1 + x^2)^3}$。

/proof/

> 考虑复变积分 $\displaystyle \oint_C \frac{\mathrm{d}z}{(1 + z^2)^3}$，根据留数定理，有
>
> $$
> \oint_C \frac{\mathrm{d}z}{(1 + z^2)^3} = \int_{-R}^R \frac{\mathrm{d}x}{(1 + x^2)^3} + \int_{C_R} \frac{1}{(1 + z^2)^3}\,\mathrm{d}z = 2\pi\mathrm{i} \cdot \operatorname{res} \frac{1}{(1 + z^2)^3} \Big|_{z = \mathrm{i}}.
> $$
>
> 因为
>
> $$
> \lim_{z \to \infty} \left[ z \cdot \frac{1}{(1 + z^2)^3} \right] = 0,
> $$
>
> 根据大圆弧引理即得
>
> $$
> \lim_{R \to \infty} \int_{C_R} \frac{1}{(1 + z^2)^3}\,\mathrm{d}z = 0.
> $$
>
> 取极限 $R \to \infty$，并代入
> $$
> \operatorname{res} f(\pm\mathrm{i}) = \frac{1}{2!} \frac{\mathrm{d}^2}{\mathrm{d}z^2} \left[ (z \mp \mathrm{i})^3 \cdot \frac{1}{(z^2 + 1)^3} \right] \Big|_{z = \pm\mathrm{i}} = \pm\frac{3}{16}\mathrm{i}.
> $$
> 最后就求得
>
> $$
> \int_{-\infty}^\infty \frac{\mathrm{d}x}{(1 + x^2)^3} = \frac{3}{8}\pi.
> $$

不难看出，应用留数定理计算这种类型的无穷积分时，函数 $f(z)$ 应满足下列条件：

> (1) $f(z)$ 在上半平面除有限个孤立奇点外处处解析，在实轴上没有奇点；
>
> (2) 在 $0 \le \arg z \le \pi$ 范围内，当 $|z| \to \infty$ 时，$zf(z)$ 一致地趋于 0，即 $\forall \varepsilon > 0$, $\exists M(\varepsilon) > 0$，使当 $|z| \ge M$，并且 $0 \le \arg z \le \pi$ 时，$|zf(z)| < \varepsilon$。

上面关于留数定理的应用条件还可以放宽：

> 如果函数 $f(z)$ 在上半平面内没有非孤立奇点，但是有无穷多个孤立奇点 $b_n$, $n = 1,2,\cdots$，只要存在曲线序列 $\{C_m\}$，每一条 $C_m$ 都与实轴上从 $-R_m$ 到 $R_m$ 的直线段构成闭合围道，在围道上没有 $f(z)$ 的奇点，
>
> 且当 $m \to \infty$ 时，$C_m$ 上的点 $z$ 的模 $|z|$ 和 $R_m$ 都趋于 $\infty$，同时 $\displaystyle \lim_{m \to \infty} \int_{C_m} f(z)\,\mathrm{d}z = 0$，则
> $$
> \int_{-\infty}^\infty f(x)\,\mathrm{d}x = 2\pi\mathrm{i} \sum_{n=1}^\infty \operatorname{res} f(b_n).
> $$

在上述基本原则下，围道的选取具有一定灵活性。

### · 含三角函数无穷积分

第三类可以用留数定理计算的定积分是

$$
I = \int_{-\infty}^\infty f(x) \cos px\,\mathrm{d}x \quad \text{or} \quad I = \int_{-\infty}^\infty f(x) \sin px\,\mathrm{d}x.
$$

这里不妨假设 $p > 0$。

处理这种类型的积分，仍可采用无穷积分的半圆形围道。至于被积函数，通常并不取为 $f(z)\cos pz$ 或 $f(z)\sin pz$。这是因为 $z = \infty$ 是 $\cos pz$, $\sin pz$ 的本性奇点，当 $|z| = R \to \infty$ 时，函数 $\cos pz$, $\sin pz$ 的行为略显复杂，在计算

$$
\lim_{R \to \infty} \int_{C_R} f(z)\cos pz\,\mathrm{d}z \quad \text{or} \quad \lim_{R \to \infty} \int_{C_R} f(z)\sin pz\,\mathrm{d}z
$$

时似乎会遇到一点困难。避开这一困难的方法是将被积函数取为 $f(z)\mathrm{e}^{\mathrm{i}pz}$。如果 $f(z)\mathrm{e}^{\mathrm{i}pz}$ 在上半平面内只有有限个孤立奇点，则可以利用留数定理计算沿闭合围道的积分，有

$$
\begin{aligned}
\oint_C f(z)\mathrm{e}^{\mathrm{i}pz}\,\mathrm{d}z &= \int_{-R}^R f(x)\mathrm{e}^{\mathrm{i}px}\,\mathrm{d}x + \int_{C_R} f(z)\mathrm{e}^{\mathrm{i}pz}\,\mathrm{d}z \\\\
&= \int_{-R}^R f(x)(\cos px + \mathrm{i}\sin px)\,\mathrm{d}x + \int_{C_R} f(z)\mathrm{e}^{\mathrm{i}pz}\,\mathrm{d}z.
\end{aligned}
$$

这样，只要能够计算出 $\displaystyle \lim_{R \to \infty} \int_{C_R} f(z)\mathrm{e}^{\mathrm{i}pz}\,\mathrm{d}z$，然后分别比较实部和虚部，就可以求得积分 $\displaystyle \int_{-\infty}^\infty f(x)\cos px\,\mathrm{d}x$ 和 $\displaystyle \int_{-\infty}^\infty f(x)\sin px\,\mathrm{d}x$。

为此，介绍一个引理。

**引理 1** (Jordan 引理)

> 设在 $0 \leq \arg z \leq \pi$ 范围内，当 $|z| \to \infty$ 时 $Q(z)$ 一致地趋于 0，则
>
> $$
> \lim_{R \to \infty} \int_{C_R} Q(z) \mathrm{e}^{\mathrm{i}p z} \mathrm{d}z = 0,
> $$
>
> 其中 $p > 0$，$C_R$ 是以原点为圆心、$R$ 为半径的上半圆弧。

/proof/

> 当 $z$ 在 $C_R$ 上时，$z = R \mathrm{e}^{\mathrm{i}\theta}$，在 $0 \leq \arg z \leq \pi$ 范围内，当 $|z| \to \infty$ 时 $Q(z)$ 一致地趋于 0，意味着 $\forall \varepsilon > 0$，存在与 $\arg z$ 无关的 $M(\varepsilon) > 0$，使得当 $|z| = R > M$，且 $0 \leq \arg z \leq \pi$ 时，$|Q(z)| < \varepsilon$，
>
> $$
> \begin{aligned}
> \left| \int_{C_R} Q(z) \mathrm{e}^{\mathrm{i}p z} \mathrm{d}z \right| &= \left| \int_0^\pi Q(R \mathrm{e}^{\mathrm{i}\theta}) \mathrm{e}^{\mathrm{i}p R (\cos \theta + \mathrm{i} \sin \theta)} R \mathrm{e}^{\mathrm{i}\theta} \mathrm{i} \mathrm{d}\theta \right| \\\\
> &\leq \int_0^\pi |Q(R \mathrm{e}^{\mathrm{i}\theta})| \mathrm{e}^{-p R \sin \theta} R \mathrm{d}\theta \\\\
> &< \varepsilon R \int_0^\pi \mathrm{e}^{-p R \sin \theta} \mathrm{d}\theta \\\\
> &= 2\varepsilon R \int_0^{\pi/2} \mathrm{e}^{-p R \sin \theta} \mathrm{d}\theta.
> \end{aligned}
> $$
>
> 证明的关键在于精确估计 $\sin \theta$ 值。当 $0 \leq \theta \leq \pi/2$ 时有 $\sin \theta \geq 2\theta / \pi$，所以
>
> $$
> \left| \int_{C_R} Q(z) \mathrm{e}^{\mathrm{i}p z} \mathrm{d}z \right| < 2\varepsilon R \int_0^{\pi/2} \mathrm{e}^{-p R \cdot 2\theta / \pi} \mathrm{d}\theta = \frac{\varepsilon \pi}{p} (1 - \mathrm{e}^{-p R}).
> $$
>
> 这样，就证明了
>
> $$
> \lim_{R \to \infty} \int_{C_R} Q(z) \mathrm{e}^{\mathrm{i}p z} \mathrm{d}z = 0.
> $$

上面介绍了应用留数定理计算含三角函数的无穷积分

$$
\int_{-\infty}^\infty Q(x) \sin px\,\mathrm{d}x \quad \text{and} \quad \int_{-\infty}^\infty Q(x) \cos px\,\mathrm{d}x, \quad p > 0
$$

的一种做法，就是采用半圆形围道计算复变积分 $\displaystyle \oint_C Q(z)\mathrm{e}^{\mathrm{i}pz}\mathrm{d}z$。这种做法的优点是，只要 $Q(z)$ 在上半平面范围内，当 $|z| \to \infty$ 时一致地趋于 0，根据 Jordan 引理就能判断

$$
\lim_{R \to \infty} \int_{C_R} Q(z)\mathrm{e}^{\mathrm{i}pz}\mathrm{d}z = 0.
$$

我们可以列举出种种理由，说明在构造复变积分时，为什么不是简单地将实函数 $Q(x)\sin px$, $Q(x)\cos px$ 延拓为 $Q(z)\sin pz$, $Q(z)\cos pz$，核心的理由是 $z = \infty$ 是 $\sin pz$, $\cos pz$ 的本性奇点，或者说，$\sin pz$, $\cos pz$ 中含有 $\mathrm{e}^{-\mathrm{i}pz}$，因而给处理沿 $C_R$ 的积分带来一些困难。

应该说，这种分析与讨论有助于我们理解如何选择复变积分（包括被积函数与积分围道两个方面），但绝不可以将上面提到的困难绝对化，更不应该引申出不正确的结论。

例如，因为 $z = \infty$ 是 $\sin pz$, $\cos pz$ 的本性奇点，当 $z$ 按不同方式逼近 $\infty$ 时，$\sin pz$, $\cos pz$ 可以逼近不同的值，或者说，$z \to \infty$ 时函数 $\sin pz$, $\cos pz$ 的极限均不存在，这些说法无疑都是正确的，但是，我们并不能由此就得出
$$
\lim_{R \to \infty} \int_{C_R} Q(z)\sin pz\mathrm{d}z \quad \text{or} \quad \lim_{R \to \infty} \int_{C_R} Q(z)\cos pz\mathrm{d}z
$$

不存在”的臆断。

正是基于这一思想，我们现在就来探讨应用留数定理直接计算围道积分 $\displaystyle \oint_C Q(z)\sin pz\mathrm{d}z$ 与 $\displaystyle \oint_C Q(z)\cos pz\mathrm{d}z$ 的可行性。应用这种新方法，在计算某些积分时可能更加简单。

为此目的，只需要建立一个新的引理，先称之为“补充引理”，它是留数定理与 Jordan 引理相结合的产物。

**补充引理**：

> 设函数 $Q(z)$ 只有有限个奇点，且在下半平面的范围内，当 $|z| \to \infty$ 时一致地趋近于 0，则
>
> $$
> \lim_{R \to \infty} \int_{C_R} Q(z) \mathrm{e}^{-\mathrm{i}p z} \mathrm{d}z = 2\pi \mathrm{i} \times \sum_{\text{Full plane}} \operatorname{res} \left\{ Q(z) \mathrm{e}^{-\mathrm{i}p z} \right\}
> $$
>
> $$
> = -2\pi \mathrm{i} \times \operatorname{res} \left\{ Q(z) \mathrm{e}^{-\mathrm{i}p z} \right\}_{z = \infty},
> $$
>
> 其中 $p > 0$，$C_R$ 是以原点为圆心、$R$ 为半径的半圆弧，位于上半平面

### · 瑕积分

如果实变积分是瑕积分（例如瑕点为 $x = a$），则在处理相应的复变积分 $\displaystyle \oint_C f(z) \mathrm{d}z$ 时，实轴上的 $z = a$ 点也是被积函数的奇点，那么我们选择积分路径时必须绕开奇点而构成闭合的积分围道。

/example/

> 计算主值积分 $\displaystyle \mathrm{v.p.} \int_{-\infty}^\infty \frac{\mathrm{d}x}{x(1 + x + x^2)}$。

/proof？

> 这是一个反常积分，其反常性既表现在积分区间为无穷区间，又表现为 $x = 0$ 是被积函数的瑕点。此积分在主值意义下存在。因此，在应用留数定理计算此积分时，应考虑复变积分
>
> $$
> \oint_C \frac{\mathrm{d}z}{z(1 + z + z^2)},
> $$
>
> 积分围道 $C$ 由以原点为圆心、$\delta$ 为半径的小半圆弧 $C_\delta$ 和以原点为圆心、$R$ 为半径的大半圆弧 $C_R$ 以及直线段 $-R \to -\delta$ 和 $\delta \to R$ 构成。于是，根据留数定理，有
>
> $$
> \begin{aligned}
> \oint_C \frac{\mathrm{d}z}{z(1 + z + z^2)} &= \int_{-R}^{-\delta} \frac{\mathrm{d}x}{x(1 + x + x^2)} + \int_{C_\delta} \frac{\mathrm{d}z}{z(1 + z + z^2)} \\\\
> &\quad + \int_\delta^R \frac{\mathrm{d}x}{x(1 + x + x^2)} + \int_{C_R} \frac{\mathrm{d}z}{z(1 + z + z^2)} \\\\
> &= 2\pi \mathrm{i} \cdot \operatorname{res} \left. \frac{1}{z(1 + z + z^2)} \right|_{z = \mathrm{e}^{2\pi \mathrm{i}/3}} = -\frac{\pi}{\sqrt{3}} - \mathrm{i}\pi.
> \end{aligned}
> $$
>
> 由大圆弧引理，可以判断
>
> $$
> \lim_{R \to \infty} \int_{C_R} \frac{\mathrm{d}z}{z(1 + z + z^2)} = 0.
> $$
>
> 为了计算沿小圆弧 $C_\delta$ 积分的极限值，则可以应用小圆弧引理。因为
>
> $$
> \lim_{z \to 0} \left[ z \cdot \frac{1}{z(1 + z + z^2)} \right] = 1,
> $$
>
> 所以有
>
> $$
> \lim_{\delta \to 0} \int_{C_\delta} \frac{\mathrm{d}z}{z(1 + z + z^2)} = -\pi \mathrm{i}.
> $$
>
> 取极限 $R \to \infty$, $\delta \to 0$，就得到
>
> $$
> \mathrm{v.p.} \int_{-\infty}^\infty \frac{\mathrm{d}x}{x(1 + x + x^2)} = -\frac{\pi}{\sqrt{3}}.
> $$

在有些情况（例如，含三角函数的无穷积分）下，由于在计算复变积分中，并不是简单地将被积函数 $f(x)$ 换成 $f(z)$，因而本来实积分并不是瑕积分，但在复变函数的围道积分中，积分路径上却可能出现奇点。

如果考虑复变积分 $\displaystyle \oint_C \frac{\mathrm{e}^{\mathrm{i}z}}{z} \mathrm{d}z$。虽然 $x = 0$ 不是原来实积分中被积函数 $\dfrac{\sin x}{x}$ 的瑕点，但是 $z = 0$ 却是新的复变积分中被积函数 $\dfrac{\mathrm{e}^{\mathrm{i}z}}{z}$ 的奇点。因此积分路径需要绕过奇点 $z = 0$ 。
$$
\oint_C \frac{\mathrm{e}^{\mathrm{i}z}}{z} \mathrm{d}z = \int_{-R}^{-\delta} \frac{\mathrm{e}^{\mathrm{i}x}}{x} \mathrm{d}x + \int_{C_\delta} \frac{\mathrm{e}^{\mathrm{i}z}}{z} \mathrm{d}z + \int_\delta^R \frac{\mathrm{e}^{\mathrm{i}x}}{x} \mathrm{d}x + \int_{C_R} \frac{\mathrm{e}^{\mathrm{i}z}}{z} \mathrm{d}z.
$$

在积分围道包围的区域内，被积函数解析，故围道积分为 0。根据 Jordan 引理和小圆弧引理，又有

$$
\lim_{R \to \infty} \int_{C_R} \frac{\mathrm{e}^{\mathrm{i}z}}{z} \mathrm{d}z = 0, \quad \lim_{\delta \to 0} \int_{C_\delta} \frac{\mathrm{e}^{\mathrm{i}z}}{z} \mathrm{d}z = -\pi \mathrm{i}.
$$

因此

$$
\int_{-\infty}^\infty \frac{\mathrm{e}^{\mathrm{i}x}}{x} \mathrm{d}x = \pi \mathrm{i}.
$$

比较两端的实部和虚部，即得

$$
\mathrm{v.p.} \int_{-\infty}^\infty \frac{\cos x}{x} \mathrm{d}x = 0, \quad \int_{-\infty}^\infty \frac{\sin x}{x} \mathrm{d}x = \pi.
$$

就复变积分而言，在积分路径上可以有奇点，但这种奇点一般说来只能是一阶极点。如果是二阶或二阶以上的极点，或是本性奇点，沿小圆弧 $C_\delta$ 的积分极限值就可能不存在。

### · 多值函数复变积分

如果把定义域扩展到复平面，这些积分的被积函数是多值函数。我们运用围道积分计算这类积分时，就需要明确规定被积函数的函数值，例如，适当规定被积函数的单值分支。一种常见的类型就是

$$
I = \int_0^\infty x^{s-1} Q(x) \mathrm{d}x,
$$

其中 $s$ 为实数。从复平面上看，$Q(z)$ 单值，在正实轴上没有奇点。被积函数中的 $z^{s-1}$，当 $s$ 不等于整数时，就是一个多值函数。原来积分中的积分变量应该理解为 $\arg z = 0$。

为了计算这种类型的积分，通常考虑相应的复变积分为 $\displaystyle \oint_C z^{s-1} Q(z) \mathrm{d}z$。

由于 $z = 0$ 及 $\infty$ 是 $z^{s-1}$ 的分支点，所以需要将复平面沿正实轴割开，并规定割线上岸 $\arg z = 0$。

这时的积分路径由割开的大、小同心圆弧（圆心为 $z = 0$ 点，半径分别为 $R$ 和 $\delta$）及割线上、下岸组成。割线成为（玦形）积分围道的一部分。只是需要注意，在计算留数时，要遵守上面对于 $z^{s-1}$ 所作的限制，即 $0 \leq \arg z \leq 2\pi$。

### · 计算无穷级数

设 $f(z)$ 是已知函数，在 $\mathbb{C}$ 内除有限个极点外解析，而且 $f(z)$ 的极点都不是整数。如果存在另一个函数 $G(z)$，在 $\mathbb{C} \setminus \{0, \pm 1, \pm 2, \cdots\}$ 内解析，而 $z = 0, \pm 1, \pm 2, \cdots$ 是 $G(z)$ 的一阶极点，且在这些极点处的留数均为 1。于是，作闭合围道 $C_N$，将 $n = 0, \pm 1, \pm 2, \cdots, \pm N$ 包围在内，根据留数定理，就有

$$
\oint_{C_N} G(z)f(z)\,\mathrm{d}z = 2\pi\mathrm{i} \left\{ \sum_{n = -N}^N f(n) + \sum_{f(z)\text{'s pole}} \operatorname{res} \left[ G(z)f(z) \right] \right\}.
$$

如果当 $N \to \infty$ 时，能求出 $\displaystyle \oint_{C_N} G(z)f(z)\,\mathrm{d}z$ 的极限值（例如，在一定条件下为零），就可以算出无穷级数 $\displaystyle \sum_{n = -\infty}^\infty f(n)$ 的和。

这里存在两个问题。一是要找到这样的函数 $G(z)$，二是如何求出 $\displaystyle \lim_{N \to \infty} \oint_{C_N} G(z)f(z)\,\mathrm{d}z$ 的极限值。前一个问题的答案是 $G(z)$ 可取为 $\pi \cot \pi z$。后一个问题，则用引理 2 解决。

**引理 2** 

> 设 $f(z)$ 在 $\mathbb{C}$ 内除了有限个孤立奇点外处处解析，若存在常数 $R > 0$ 和 $M > 0$，使当 $|z| > R$ 时，$|f(z)| \leq M$，则
>
> $$
> \lim_{N \to \infty} \oint_{C_N} \pi \cot \pi z f(z)\,\mathrm{d}z = 0,
> $$
>
> 其中积分围道 $C_N$ 为正方形，四个顶点位于 $(N + 1/2)(1 \pm \mathrm{i})$ 和 $-(N + 1/2)(1 \pm \mathrm{i})$。

根据这个引理，立即可以证明下面的定理。

**定理 2** 

> 若函数 $f(z)$ 在 $\mathbb{C}$ 上除有限个非整数的极点外处处解析，且存在常数 $R > 0$ 和 $M > 0$，使当 $|z| > R$ 时，$|zf(z)| \leq M$，则
>
> $$
> \sum_{n = -\infty}^\infty f(n) = \lim_{N \to \infty} \sum_{n = -N}^N f(n) = - \sum_{f(z)\text{'s pole}} \operatorname{res} \left\{ \pi \cot \pi z f(z) \right\}.
> $$



