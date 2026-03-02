---
title: Chapter 3 无穷级数
permalink: /complex/complex-3/
createTime: 2025/11/28 13:02:58
---

## Part 1 级数拓展

### · 复级数

我们先给出复级数的定义.

/Definition/

> 形如 $f_1 + f_2 + \cdots + f_k + \cdots = \displaystyle\sum_{k=1}^{\infty} f_k$ 的级数（其中 $f_k = u_k + i v_k \in \mathbb{C}$）称为复数项级数。显然，我们有
>
> $$
> \sum_{k=1}^{\infty} f_k = \sum_{k=1}^{\infty} u_k + i \sum_{k=1}^{\infty} v_k.
> $$
> 部分和定义为
>
> $$
> F_n \equiv \sum_{k=1}^{n} f_k,
> $$
>
> 可构成部分和序列 $\{F_n\}$。

若 $\{F_n\}$ 收敛，即

$$
\lim_{n \to \infty} F_n = F
$$

存在且有限，则称 $\displaystyle\sum_{k=1}^{\infty} f_k$ 收敛于 $F = u + i v$。即 $\displaystyle\sum_{k=1}^{\infty} f_k$ 收敛等价于

$$
\sum_{k=1}^{\infty} u_k = u, \quad \sum_{k=1}^{\infty} v_k = v.
$$

因此，复级数收敛问题可以转化为实级数收敛问题。

由于 $\displaystyle\sum_{n=0}^{\infty} |u_n|$ 是实数级数，而且是正项级数，所以高等数学中的任何一种正项级数的收敛判别法都可以用来判别复数级数是否绝对收敛。下面列出最常用的几个判别法。

**比较判别法**

> 若 $\exists N \in \mathbb{N}$，对 $\forall n > N$，都有 $|u_n| < v_n$，而 $\displaystyle\sum_{n=0}^{\infty} v_n$ 收敛，则 $\displaystyle\sum_{n=0}^{\infty} |u_n|$ 收敛，即 $\displaystyle\sum_{n=0}^{\infty} u_n$ 绝对收敛。
>
> 若 $|u_n| > v_n > 0$，而 $\displaystyle\sum_{n=0}^{\infty} v_n$ 发散，则 $\displaystyle\sum_{n=0}^{\infty} |u_n|$ 发散。

**比值判别法**

> 若存在与 $n$ 无关的常数 $\rho$，则当 $|u_{n+1}/u_n| < \rho < 1$ 时，级数 $\displaystyle\sum_{n=0}^{\infty} u_n$ 绝对收敛；
>
> 当 $|u_{n+1}/u_n| > \rho > 1$ 时，级数 $\displaystyle\sum_{n=0}^{\infty} u_n$ 发散。

**d'Alembert 判别法**

> 若 $\displaystyle\varlimsup_{n \to \infty} |u_{n+1}/u_n| < 1$，则级数 $\displaystyle\displaystyle\sum_{n=0}^{\infty} u_n$ 绝对收敛；若 $\displaystyle\varliminf_{n \to \infty} |u_{n+1}/u_n| > 1$，则级数 $\displaystyle\sum_{n=0}^{\infty} u_n$ 发散。
>
> 若 $\displaystyle\displaystyle\lim_{n \to \infty} |u_{n+1}/u_n| = 1$，则 $\displaystyle\displaystyle\sum_{n=0}^{\infty} u_n$ 的绝对收敛性需要利用下面的 Gauss 判别法进一步检验。

**Gauss 判别法**

> 设级数 $\displaystyle\sum_{n=0}^{\infty} u_n$ 邻项的比值可以写成
> $$
> \frac{u_n}{u_{n+1}} = 1 + \frac{\mu}{n} + O(n^{-\lambda}),
> $$
>
> 其中 $\mu = a + ib$，$\lambda > 1$，符号 $O$ 表示数量级。若 $a > 1$，则级数 $\displaystyle\sum_{n=0}^{\infty} u_n$ 绝对收敛；若 $a \leq 1$，则 $\displaystyle\sum_{n=0}^{\infty} |u_n|$ 发散。

**Cauchy 判别法**

> 若 $\varlimsup_{n \to \infty} |u_n|^{1/n} < 1$，则级数 $\displaystyle\sum_{n=0}^{\infty} u_n$ 绝对收敛；若 $\varliminf_{n \to \infty} |u_n|^{1/n} > 1$，则级数 $\displaystyle\sum_{n=0}^{\infty} u_n$ 发散。

绝对收敛级数具有下列性质：

> (1) 改换次序。例如，
>
> $$
> u_0 + u_1 + u_2 + u_3 + u_4 + \cdots = u_0 + u_1 + u_2 + u_4 + u_3 + u_6 + u_8 + u_5 + \cdots.
> $$
>
> (2) 特别是，可以把绝对收敛级数拆成几个子级数，每个子级数仍绝对收敛。例如，
>
> $$
> \sum_{n=0}^{\infty} u_n = \sum_{n=0}^{\infty} u_{2n} + \sum_{n=0}^{\infty} u_{2n+1}.
> $$
>
> (3) 两个绝对收敛级数之积仍然绝对收敛，
>
> $$
> \sum_k u_k \cdot \sum_l v_l = \sum_{k,l} u_k v_l.
> $$
>
> 这里的乘积是一个二重级数
>
> $$
> \begin{aligned}
> & u_0 v_0 + u_0 v_1 + u_0 v_2 + u_0 v_3 + \cdots \\\\
> & + u_1 v_0 + u_1 v_1 + u_1 v_2 + u_1 v_3 + \cdots \\\\
> & + u_2 v_0 + u_2 v_1 + u_2 v_2 + u_2 v_3 + \cdots \\\\
> & + \cdots
> \end{aligned}
> $$
>
> 绝对收敛性意味着可按任意顺序求和，其值不变。例如可按 $k + l = n$ 的大小顺序排列，
>
> $$
> \sum_{k=0}^{\infty} u_k \cdot \sum_{l=0}^{\infty} v_l = \sum_{n=0}^{\infty} w_n, \quad w_n = \sum_{k=0}^{n} u_k v_{n-k}.
> $$
>
> 而且如果限于这种求和次序，则乘法的条件还可以放宽：$\displaystyle\sum u_k$，$\displaystyle\sum v_l$ 都收敛，且其中之一绝对收敛；或 $\displaystyle\sum u_k$，$\displaystyle\sum v_l$ 和 $\displaystyle\sum w_n$ 都收敛。

### · 二重级数

所谓二重级数，指的是排列成

$$
\begin{aligned}
& a_{11} + a_{12} + a_{13} + a_{14} + \cdots + a_{1n} + \cdots \\\\
& + a_{21} + a_{22} + a_{23} + a_{24} + \cdots + a_{2n} + \cdots \\\\
& + \cdots \\\\
& + a_{m1} + a_{m2} + a_{m3} + a_{m4} + \cdots + a_{mn} + \cdots \\\\
& + \cdots
\end{aligned}
$$

的方阵，这个方阵的右端和下端都是无限的。方阵的每一项用 $a_{kl}$ 表示，其中的第一个指标 $k$ 表示行，第二个指标 $l$ 表示列。

现在求出方阵的前 $m$ 行 $n$ 列共 $m \times n$ 项之和

$$
S_{mn} = \sum_{\substack{1 \leq k \leq m \\ 1 \leq l \leq n}} a_{kl},
$$

根据 $S_{mn}$ 就能构造出这个二重级数的部分和序列。容易理解，如果部分和序列收敛，

$$
\lim_{\substack{m \to \infty \\ n \to \infty}} S_{mn} = S,
$$

则称此二重级数收敛。$S$ 就是这个二重级数之和：

$$
S = \sum_{k,l=1}^{\infty} a_{kl}.
$$

这时，$\forall \varepsilon > 0$，总可以找到正整数 $N$，当 $m,n > N$ 时，恒有

$$
|S_{mn} - S| < \varepsilon.
$$

除了这种求和方式之外，当然还可以考虑其他求和方式。例如，考虑到上面的部分和

$$
S_{mn} = \sum_{\substack{1 \leq k \leq m \\ 1 \leq l \leq n}} a_{kl} = \sum_{k=1}^{m} \left( \sum_{l=1}^{n} a_{kl} \right) = \sum_{l=1}^{n} \left( \sum_{k=1}^{m} a_{kl} \right),
$$

还可以有累次求和：

$$
\sum_{k=1}^{\infty} \left( \sum_{l=1}^{\infty} a_{kl} \right) = \lim_{m \to \infty} \left( \lim_{n \to \infty} S_{mn} \right)
\quad \text{or} \quad
\sum_{l=1}^{\infty} \left( \sum_{k=1}^{\infty} a_{kl} \right) = \lim_{n \to \infty} \left( \lim_{m \to \infty} S_{nm} \right).
$$

前者是先按列求和，再将各列之和相加（可称为逐列求和）；后者的求和次序则相反（可称为逐行求和）。

需要注意，即使二重级数收敛，某些行或列的和也不一定存在，因此累次求和的和也不一定存在。

而且，如果逐行和逐列求和的和都存在，这两个和数也不一定相等（即和数与求和次序有关）。

二重级数的和是否依赖于求和方式，原则上与级数是否绝对收敛有关。如果二重级数绝对收敛，则级数各项的先后次序可以重新排列，因而不同求和方式得到相同的和数。

## Part 2 幂级数

### · 函数级数

/Definition/

> 复变函数项级数：
>
> 形如 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 的级数称为复变函数项级数。

/Definition/

> 一致收敛性：
>
> 设 $F_n(z) = \displaystyle\sum_{k=1}^{n} f_k(z)$ 是复变函数项级数 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 的前 $n$ 项和（构成部分和序列 $\{F_n(z)\}$）。如果在区域 $\sigma$ 上存在函数 $F(z)$，对任意正数 $\varepsilon$，总存在无关于 $z$ 的自然数 $N$，使得当 $n > N$ 时，对任意 $z \in \sigma$，均有
> $$
> |F(z) - F_n(z)| < \varepsilon,
> $$
>
> 则称 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 在 $\sigma$ 上一致收敛于 $F(z)$，并称 $F(z)$ 为 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 的和函数。

在区域 $\sigma$ 内，如果 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 一致收敛于 $F(z)$，则有如下性质成立：

(1). 连续性：

> 若对于任意 $k$，$f_k(z)$ 在区域 $\sigma$ 内处处连续，则 $\displaystyle\sum_{k=1}^{\infty} f_k(z) = F(z)$ 在 $\sigma$ 上必亦连续。

(2). 逐项可积性：

> 若对于任意 $k$，$f_k(z)$ 在 $\sigma$ 内的一条曲线 $l$ 上连续可积，则 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 可沿着 $l$ 逐项积分，换句话说，此时积分和求和可以交换次序，即
>
> $$
> \int_l F(z)\,\mathrm{d}z = \int_l \sum_{k=1}^{\infty} f_k(z)\,\mathrm{d}z = \sum_{k=1}^{\infty} \int_l f_k(z)\,\mathrm{d}z.
> $$

(3). 逐项可导性（Weierstrass 定理、魏尔斯特拉斯定理）：

> 若对于任意 $k$，$f_k(z)$ 在 $\sigma$ 内解析，且级数在 $\sigma$ 内任一闭区域 $\bar{\sigma}'$ 上一致收敛于 $F(z)$，则
>
> i. $F(z) = \displaystyle\sum_{k=1}^{\infty} f_k(z)$ 在 $\sigma$ 内解析；
>
> ii. 在 $\sigma$ 内级数可以逐项求导至任意阶，且
>
> $$
> F^{(n)}(z) = \left( \sum_{k=1}^{\infty} f_k(z) \right)^{(n)} = \sum_{k=1}^{\infty} f_k^{(n)}(z),
> $$
>
> 即此时求导和求和可以交换次序。

$M$ 判别法：复变函数项级数绝对且一致收敛的一种判别法

> 若对于任意 $k$，在区域 $\bar{\sigma} = \sigma + l$ 上 $|f_k(z)| \leq M_k$（$M_k$ 与 $z$ 无关），且 $\displaystyle\sum_{k=1}^{\infty} M_k$ 收敛，则 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 在 $\bar{\sigma}$ 上绝对且一致收敛。
>
> 将上述条件改成“在区域 $\sigma$”内也成立。这是复变函数项级数绝对且一致收敛的一个充分不必要条件。

### · 幂级数

幂级数是通项为幂函数的函数项级数，

$$
\sum_{n=0}^{\infty} c_n(z-a)^n = c_0 + c_1(z-a) + c_2(z-a)^2 + \cdots + c_n(z-a)^n + \cdots.
$$

这是一种特殊形式的函数项级数，也是最基本、最常用的一种函数项级数。

**定理1** (Abel 第一定理)

>如果级数 $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 在某点 $z_0$ 收敛，则在以 $a$ 点为圆心、$|z_0 - a|$ 为半径的圆内绝对收敛，而在圆 $|z - a| \le r$ ($r < |z_0 - a|$) 中一致收敛。

/proof/

> 因为 $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 在 $z_0$ 收敛，故一定满足必要条件
>
> $$
> \lim_{n \to \infty} c_n(z_0 - a)^n = 0.
> $$
>
> 因此对 $\forall q > 0$，存在正整数 $N$，使 $\forall n > N$，$|c_n(z_0 - a)^n| < q$。所以，
>
> $$
> |c_n(z-a)^n| = |c_n(z_0 - a)^n| \cdot \left|\frac{z-a}{z_0-a}\right|^n < q \left|\frac{z-a}{z_0-a}\right|^n, \quad n > N.
> $$
>
> 因当 $\left|\dfrac{z-a}{z_0-a}\right| < 1$（即 $|z-a| < |z_0 - a|$）时，$\displaystyle\sum_{n=0}^{\infty} \left|\dfrac{z-a}{z_0-a}\right|^n$ 收敛，故
>
> $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 在圆 $|z-a| < |z_0 - a|$ 内绝对收敛
>
> 而当 $|z-a| \le r < |z_0 - a|$ 时，
>
> $$
> |c_n(z-a)^n| \le q \frac{r^n}{|z_0 - a|^n}, \quad n > N,
> $$
>
> 由于常数项级数 $\displaystyle\sum_{n=0}^{\infty} \dfrac{r^n}{|z_0 - a|^n}$ 收敛，故
>
> $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 在圆 $|z-a| \le r \ (< |z_0 - a|)$ 中一致收敛.
>
> Abel 第一定理简称为 Abel 定理。

**推论**

> 若级数 $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 在某点 $z_1$ 发散，则在圆 $|z-a| > |z_1 - a|$ 外处处发散。

Abel 定理及其推论意味着，在幂级数 $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 的收敛点与发散点之间存在一个分界线，而且这个分界线一定是圆周。圆内区域称为幂级数的**收敛圆**。收敛圆的圆心一定是 $z = a$ 点，收敛圆的半径称为**收敛半径**。

作为特殊情况，收敛半径可以是 0，即收敛圆退化为一个点。除 $z = a$ 点外，幂级数在全复平面处处发散；也可以是 $\infty$，收敛圆就是全复平面。幂级数在全复平面收敛，但在 $\infty$ 点肯定发散，除非此幂级数只有常数项一项。

求幂级数的收敛半径的办法，常用的有两个：

> (1) Cauchy-Hadamard 公式。根据 Cauchy 判别法，
>
> 当 $\displaystyle\limsup_{n \to \infty} |c_n(z-a)^n|^{1/n} < 1$ 即 $|z-a| < \dfrac{1}{\displaystyle\limsup_{n \to \infty} |c_n|^{1/n}}$ 时，级数绝对收敛，
>
> 当 $\displaystyle\limsup_{n \to \infty} |c_n(z-a)^n|^{1/n} > 1$ 即 $|z-a| > \dfrac{1}{\displaystyle\limsup_{n \to \infty} |c_n|^{1/n}}$ 时，级数发散。
>
> 因此，幂级数 $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 的收敛半径是
>
> $$
> \boxed{R = \frac{1}{\limsup_{n \to \infty} |c_n|^{1/n}} = \limsup_{n \to \infty} \left|\frac{1}{c_n}\right|^{1/n}.}
> $$
>
> (2) 根据 d'Alembert 判别法，如果
>
> $$
> \lim_{n \to \infty} \left|\frac{c_{n+1}(z-a)^{n+1}}{c_n(z-a)^n}\right| = |z-a| \lim_{n \to \infty} \left|\frac{c_{n+1}}{c_n}\right|
> $$
>
> 存在，则
>
> 当 $\displaystyle\lim_{n \to \infty} \left|\dfrac{c_{n+1}(z-a)^{n+1}}{c_n(z-a)^n}\right| < 1$ 即 $|z-a| < \displaystyle\lim_{n \to \infty} \left|\dfrac{c_n}{c_{n+1}}\right|$ 时，级数绝对收敛，
>
> 当 $\displaystyle\lim_{n \to \infty} \left|\dfrac{c_{n+1}(z-a)^{n+1}}{c_n(z-a)^n}\right| > 1$ 即 $|z-a| > \displaystyle\lim_{n \to \infty} \left|\dfrac{c_n}{c_{n+1}}\right|$ 时，级数发散。
>
> 因此，幂级数 $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 的收敛半径是
>
> $$
> \boxed{R = \lim_{n \to \infty} \left|\frac{c_n}{c_{n+1}}\right|.}
> $$
>

这两个求收敛半径的公式各有优缺点。Cauchy-Hadamard 公式是普遍成立的，d'Alembert 公式则是有条件的（要求极限 $\displaystyle\lim_{n \to \infty} |c_n/c_{n+1}|$ 存在）。但当后者能适用时，往往计算更简单。

由于幂级数 $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 的每一项在复平面 $\mathbb{C}$ 内都是 $z$ 的解析函数，Abel 定理又告诉我们，幂级数在其收敛圆内闭一致收敛，因此，根据 Weierstrass 定理，幂级数在收敛圆内代表了一个解析函数，可以对幂级数逐项积分或逐项求导，而收敛半径不变：

$$
\int_{z_0}^z \sum_{n=0}^{\infty} c_n(z-a)^n \mathrm{d}z = \sum_{n=0}^{\infty} c_n \int_{z_0}^z (z-a)^n \mathrm{d}z
$$
$$
= \sum_{n=0}^{\infty} \frac{c_n}{n+1} \left[(z-a)^{n+1} - (z_0-a)^{n+1}\right],
$$

$$
\frac{\mathrm{d}}{\mathrm{d}z} \left[\sum_{n=0}^{\infty} c_n(z-a)^n\right] = \sum_{n=0}^{\infty} c_n \frac{\mathrm{d}(z-a)^n}{\mathrm{d}z} = \sum_{n=0}^{\infty} c_{n+1}(n+1)(z-a)^n.
$$

幂级数在收敛圆内一定收敛，在收敛圆外一定发散。在收敛圆的圆周上，级数可能在所有点都收敛，可能在所有点都发散，也可能在一部分点收敛，在另一部分点发散。例如：

> (1). $1 + z + \cdots + z^n + \cdots$ 在 $|z| = 1$ 上处处发散；
>
> (2). $\dfrac{z}{1} + \dfrac{z^2}{2} + \cdots + \dfrac{z^n}{n} + \cdots$ 在 $|z| = 1$ 上除 $z = 1$ 外均收敛，而在 $z = 1$ 点发散；
>
> (3). $\dfrac{z^2}{1 \cdot 2} + \dfrac{z^3}{2 \cdot 3} + \cdots + \dfrac{z^n}{(n-1)n} + \cdots$ 在 $|z| = 1$ 上处处收敛。

但不论哪种情况，幂级数的收敛圆的圆周上总肯定有和函数的奇点。特别需要说明，即使在和函数的奇点处，幂级数仍然可能收敛。读者可以求出上面三个级数的和函数，验证它们在 $z = 1$ 点不解析。

当幂级数 $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 在收敛圆周上某点 $z_0$ 收敛时，其和与级数在收敛圆内的和函数之间的关系，有下面的定理。

**定理2** (Abel 第二定理)

> 若幂级数 $\displaystyle\sum_{n=0}^{\infty} c_n(z-a)^n$ 在收敛圆内收敛到 $f(z)$，且在收敛圆周上某点 $z_0$ 也收敛，和为 $S(z_0)$，则当 $z$ 由收敛圆内趋于 $z_0$ 时，只要保持在以 $z_0$ 为顶点、张角为 $2\phi < \pi$ 的范围内，$f(z)$ 就一定趋于 $S(z_0)$。

需要明确一下（当收敛半径为有限值时）“和函数的奇点（或解析性）”这种说法的含义。毫无疑问，幂级数在收敛圆内收敛，在收敛圆外发散，因而幂级数只在收敛圆内有定义，并且代表了一个解析函数。另一方面，就和函数而言，尽管幂级数是在收敛圆内才收敛到和函数，但是，我们从来不会认为这个函数只是局限于收敛圆内才有定义（少数函数除外）。

事实上，幂级数只不过是这个函数在收敛圆内的一种表达形式，在其他区域内可以有其他表达形式。我们总会自觉或不自觉地在整个定义域上来考察它的解析性。我们也正是在这个前提下，才能谈论函数在收敛圆周上乃至收敛圆外的奇点。

## Part 3 反常积分解析性

有关函数级数解析性的结论，也可以用来讨论含参量的反常积分的解析性。

/Theorem/

> 不妨设
>
> (1) $f(t,z)$ 是 $t$ 和 $z$ 的连续函数，$t > a$，$z \in \overline{G}$，
>
> (2) 对于任何 $t \ge a$，$f(t,z)$ 是 $\overline{G}$ 中的单值解析函数，
>
> (3) 积分 $\displaystyle\int_a^{\infty} f(t,z)\,\mathrm{d}t$ 在 $\overline{G}$ 中一致收敛，即 $\forall \varepsilon > 0$，$\exists T(\varepsilon)$，当 $T_2 > T_1 > T(\varepsilon)$ 时，对 $\forall z \in \overline{G}$ 都有
> $$
> \left|\int_{T_1}^{T_2} f(t,z)\,\mathrm{d}t\right| < \varepsilon,
> $$
>
> 则 $F(z) = \displaystyle\int_a^{\infty} f(t,z)\,\mathrm{d}t$ 在 $G$ 内是解析的，且
>
> $$
> F'(z) = \int_a^{\infty} \dfrac{\partial f(t,z)}{\partial z}\,\mathrm{d}t.
> $$
>

/proof/

> 任取一个单调无界序列 $\{a_n\}$，
> $$
> a_0 = a < a_1 < a_2 < a_3 < \cdots < a_n < a_{n+1} < \cdots, \quad \displaystyle\lim_{n \to \infty} a_n = \infty.
> $$
>
> 令 $u_n(z) = \displaystyle\int_{a_n}^{a_{n+1}} f(t,z)\,\mathrm{d}t$，则根据含参量定积分的解析性可知，$u_n(z)$ 是 $G$ 内的单值解析函数。又因为
>
> $$
> F(z) = \displaystyle\sum_{n=0}^{\infty} u_n(z) = \int_a^{\infty} f(t,z)\,\mathrm{d}t
> $$
>
> 在 $\overline{G}$ 中一致收敛，故根据 Weierstrass 定理，知 $F(z)$ 在 $G$ 内解析，且
>
> $$
> F'(z) = \displaystyle\sum_{n=0}^{\infty} u_n'(z) = \int_a^{\infty} \dfrac{\partial f(t,z)}{\partial z}\,\mathrm{d}t.
> $$
>

对于含参量的积积分也可以类似地处理。

在应用这个定理时，需要判断无穷积分（或瑕积分）是否一致收敛。常用的判别法是：如果存在函数 $\phi(t)$，使得 $\exists T > a$，对 $\forall t > T$，$\forall z \in \overline{G}$，都有 $|f(t,z)| < \phi(t)$，而且 $\displaystyle\int_a^{\infty} \phi(t)\,\mathrm{d}t$ 收敛，则 $\displaystyle\int_a^{\infty} f(t,z)\,\mathrm{d}t$ 在 $\overline{G}$ 中绝对而且一致收敛。

/example/

> 作为含参量的无穷积分的一个例子，下面讨论积分
> $$
> F(z) = \int_0^{\infty} \mathrm{e}^{-t^2} \cos 2zt\,\mathrm{d}t.
> $$
>

/proof/

> 这个积分中的被积函数显然满足定理的前两个条件，而且因为对于复数 $z = x + \mathrm{i}y$，有
> $$
> |\cos 2zt| = \sqrt{\cosh^2 2yt - \cos^2 2xt} \le \cosh 2|yt| \le \mathrm{e}^{2|yt|}.
> $$
>
> 所以，对于 $z$ 复平面内任意一个有界闭区域中的点，都有 $|\operatorname{Im} z| < y_0$，于是
>
> $$
> \left|\mathrm{e}^{-t^2} \cos 2zt\right| < \mathrm{e}^{-t^2 + 2y_0 t}, \quad t > 0.
> $$
>
> 而积分 $\displaystyle\int_0^{\infty} \mathrm{e}^{-t^2 + 2y_0 t}\,\mathrm{d}t$ 收敛，所以含参量的无穷积分 (4.28) 一致收敛，因此，这个积分作为 $z$ 的函数，在 $z$ 复平面内的任意一个有界区域内解析。更进一步，就有
>
> $$
> F'(z) = -\int_0^{\infty} \mathrm{e}^{-t^2} 2t \sin 2zt\,\mathrm{d}t
> $$
>
> $$
> = \left.\mathrm{e}^{-t^2} \sin 2zt\right|_0^{\infty} - 2z \int_0^{\infty} \mathrm{e}^{-t^2} \cos 2zt\,\mathrm{d}t = -2z F(z).
> $$
>
> 解这个微分方程，就可以得到 $F(z) = C \mathrm{e}^{-z^2}$，其中常数 $C$ 是
>
> $$
> C = F(0) = \int_0^{\infty} \mathrm{e}^{-t^2}\,\mathrm{d}t = \dfrac{1}{2} \sqrt{\pi},
> $$
>
> 这样，最后就得到
>
> $$
> \int_0^{\infty} \mathrm{e}^{-t^2} \cos 2zt\,\mathrm{d}t = \dfrac{1}{2} \sqrt{\pi} \mathrm{e}^{-z^2}.
> $$

