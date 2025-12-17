---
title: Chapter 11 数项级数
permalink: /integral/integral-11/
createTime: 2025/09/16 20:57:28
---

## Part 1 级数敛散

设 $a_1, a_2, \cdots, a_n, \cdots$ 为一列实数，形式和
$$
\sum_{n=1}^{\infty} a_n = a_1 + a_2 + \cdots + a_n + \cdots
$$
称为无穷级数，$a_n$ 称为通项或一般项，$S_n = \displaystyle\sum_{k=1}^{n} a_k = a_1 + \cdots + a_n$ 称为级数的第 $n$ 个部分和.

如果 $\displaystyle\lim_{n \to \infty} S_n = S$ 存在且有限，则称级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛，其和为 $S$，记为
$$
\sum_{n=1}^{\infty} a_n = S.
$$
否则就称级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散.级数的收敛或发散性质统称为敛散性.利用数列极限的性质可得

**级数收敛的必要条件**：如果 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛，则通项 $a_n \to 0$ ($n \to \infty$).这是因为
$$
a_n = S_n - S_{n-1} \to S - S = 0 \quad (n \to \infty).
$$

**级数收敛的充要条件（Cauchy 准则）**：$\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛 $\iff$ 任给 $\varepsilon > 0$，存在 $N = N(\varepsilon)$，当 $n > N$ 时
$$
|a_{n+1} + a_{n+2} + \cdots + a_{n+p}| < \varepsilon, \quad \forall p \geq 1.
$$
这时因为
$$
a_{n+1} + a_{n+2} + \cdots + a_{n+p} = S_{n+p} - S_n,
$$
对数列 $\{S_n\}$ 用 Cauchy 收敛准则即可.

**几何级数**： $q > 0$，则当 $q < 1$ 时，$\displaystyle\sum_{n=1}^{\infty} q^n$ 收敛；$q \geq 1$ 时，$\displaystyle\sum_{n=1}^{\infty} q^n$ 发散.

> 当 $0 < q < 1$ 时，
> $$
> S_n = \sum_{k=1}^{n} q^k = q \cdot \frac{1 - q^n}{1 - q} \to \frac{q}{1 - q},
> $$
> 此时原级数收敛；当 $q \geq 1$ 时，$q^n \not\to 0$，此时原级数发散.

**命题**.

(1) 如果 $\displaystyle\sum_{n=1}^{\infty} a_n$ 和 $\displaystyle\sum_{n=1}^{\infty} b_n$ 均收敛，则 $\displaystyle\sum_{n=1}^{\infty} (\lambda a_n + \mu b_n)$ 也收敛，且
$$
\sum_{n=1}^{\infty} (\lambda a_n + \mu b_n) = \lambda \sum_{n=1}^{\infty} a_n + \mu \sum_{n=1}^{\infty} b_n, \quad (\lambda, \mu \in \mathbb{R}).
$$

(2) 级数的敛散性与其有限项的值无关.

## Part 2 正项级数敛散性

如果 $a_n > 0$，则称 $\displaystyle\sum_{n=1}^{\infty} a_n$ 为正项级数.此时，部分和 $S_n = \displaystyle\sum_{k=1}^{n} a_n$ 关于 $n$ 是单调递增的.因此有

### · 基本判别法

**(基本判别法)** $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛 $\iff \{S_n\}$ 收敛 $\iff \{S_n\}$ 有上界.

这个判别法对于 $a_n \geq 0$ 的级数当然也成立.

/example/ 设 $q > 1$ 为正整数，$0 \leq a_n \leq q - 1$ ($\forall n \geq 1$)，则级数
$$
\sum_{n=1}^{\infty} \frac{a_n}{q^n}
$$
收敛，其和介于 0 和 1 之间.

> 当 $0 \leq a_n \leq q - 1$ 时，
> $$
> \begin{aligned}
> 0 \leq S_n &= \sum_{k=1}^{n} \frac{a_k}{q^k} \\\\
> &\leq (q - 1) \sum_{k=1}^{n} \frac{1}{q^k} \\\\
> &= 1 - q^{-n} < 1.
> \end{aligned}
> $$
> 因此级数收敛且和介于 0 与 1 之间.

### · 比较判别法

**定理1**（比较判别法）．设 $\displaystyle\sum_{n=1}^{\infty} a_n$ 和 $\displaystyle\displaystyle\sum_{n=1}^{\infty} b_n$ 为正项级数，如果存在常数 $M > 0$，使得
$$
a_n \leq M b_n, \quad \forall n \geq 1. \tag{*}
$$
则

(1) $\displaystyle\sum_{n=1}^{\infty} b_n$ 收敛时 $\displaystyle\sum_{n=1}^{\infty} a_n$ 也收敛；

(2) $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散时 $\displaystyle\sum_{n=1}^{\infty} b_n$ 也发散.

> [!important]
>
> **(1)** 条件 (*) 只要对充分大的 $n$ 成立即可.
>
> **(2)** 条件 (*) 也可改写为
> $$
> \frac{a_n}{b_n} \leq M,
> $$
> $M$ 的存在性通常用求极限的办法得到，即，如果
> $$
> \lim_{n \to \infty} \frac{a_n}{b_n} = \lambda,
> $$
> 则有  
>
> > (i) $0 < \lambda < +\infty$，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ 和 $\displaystyle\sum_{n=1}^{\infty} b_n$ 同敛散；  
> >
> > (ii) $\lambda = 0$，则 $\displaystyle\sum_{n=1}^{\infty} b_n$ 收敛时 $\displaystyle\sum_{n=1}^{\infty} a_n$ 也收敛；$\lambda = \infty$，则 $\displaystyle\sum_{n=1}^{\infty} b_n$ 发散时 $\displaystyle\sum_{n=1}^{\infty} a_n$ 也发散.
>
> **(3**). 另一个求 $\dfrac{a_n}{b_n}$ 上界的方法是利用单调性，即如果
> $$
> \frac{a_{n+1}}{a_n} \leq \frac{b_{n+1}}{b_n} \quad \left(\Longleftrightarrow \frac{a_n}{b_n} \text{ monotonic decreasing}\right)
> $$
> > (i) $\displaystyle\sum_{n=1}^{\infty} b_n$ 收敛时 $\displaystyle\sum_{n=1}^{\infty} a_n$ 也收敛；(ii) $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散时 $\displaystyle\sum_{n=1}^{\infty} b_n$ 也发散.
>
> **(4)** (Cauchy 判别法或根值判别法) 在定理1 中取 $b_n = q^n$ ($q$ 是固定正数)，得到如下结果：
>
> 如果 $n$ 充分大时，$\sqrt[n]{a_n} \leq q < 1$，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛；
>
> 如果存在无穷多个 $n$，使得 $\sqrt[n]{a_n} \geq 1$，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散.
>
> > 如何寻找 $q$ 呢？还是求极限比较方便：设
> > $$
> > \lim_{n \to \infty} \sqrt[n]{a_n} = \lambda.
> > $$
> > 则 $\lambda < 1$ 时，$\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛；$\lambda > 1$ 时，级数发散（$\lambda = 1$ 时无法判别）.
>
> **(5)** (d'Alembert 判别法或比值判别法) 在 (3) 中取 $b_n = q^n$，得如下结果：
>
> 如果 $n$ 充分大时，$\dfrac{a_{n+1}}{a_n} \leq q < 1$，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛；  
>
> 如果 $\dfrac{a_{n+1}}{a_n} \geq 1$（对充分大的 $n$ 成立），则 $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散.
>
> > 当然，还是求极限来寻找 $q$ 比较容易.如果
> > $$
> > \lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lambda,
> > $$
> > 则 $\lambda < 1$ 时级数收敛，$\lambda > 1$ 时发散（$\lambda = 1$ 时无法判别）.

/example/ 判别 $\displaystyle\sum_{n=1}^{\infty} \left[\dfrac{1}{n} - \ln\left(1 + \dfrac{1}{n}\right)\right]$ 的敛散性.

> 根据 Taylor 展开，
> $$
> 0 < \frac{1}{n} - \ln\left(1 + \frac{1}{n}\right) = \frac{1}{2n^2} + o\left(\frac{1}{n^2}\right).
> $$
> 因此
> $$
> \lim_{n \to \infty} \left[\frac{1}{n} - \ln\left(1 + \frac{1}{n}\right)\right] / \frac{1}{n^2} = \frac{1}{2},
> $$
> 而 $\displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n^2}$ 收敛，故原级数收敛.

### · 积分判别法

**定理2**（积分判别法）．设 $f(x)$ 是定义在 $[1, +\infty)$ 上的非负单调递减函数，记 $a_n = f(n)$ ($n \geq 1$).则级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 的敛散性与广义积分 $\int_1^{+\infty} f(x)dx$ 的敛散性相同.

> /proof/
>
> 令
> $$
> F(x) = \int_1^x f(t)dt, \quad \forall x \geq 1.
> $$
> 因为 $f$ 为单调递减函数，故当 $n \leq x \leq n+1$ 时
> $$
> a_{n+1} = f(n+1) \leq f(x) \leq f(n) = a_n,
> $$
> 这说明
> $$
> a_{n+1} \leq \int_n^{n+1} f(t)dt \leq a_n,
> $$
> 从而有
> $$
> S_n \leq a_1 + F(n), \quad F(n) \leq S_{n-1}.
> $$
> 其中 $S_n = \displaystyle\sum_{k=1}^{n} a_k$ 为级数的部分和.因为 $S_n$ 及 $F(n)$ 关于 $n$ 都是单调递增的，二者同时有界或无界，即 $\displaystyle\sum_{n=1}^{\infty} a_n$ 与 $\int_1^{+\infty} f(x)dx$ 同敛散.

/example/ 设 $s \in \mathbb{R}$，判断级数 $\displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n^s}$ 的敛散性.

> $s \leq 0$ 时，一般项 $\to 0$，故级数发散.$s > 0$ 时，考虑 $f(x) = x^{-s}$，$f$ 为非负单调递减函数，且
> $$
> F(x) = \int_1^x f(t)dt = \int_1^x t^{-s}dt =
> \begin{cases}
> \ln x, & s = 1, \\\\
> \dfrac{1}{1-s}(x^{1-s} - 1), & s \ne 1.
> \end{cases}
> $$
> 当 $0 < s \leq 1$ 时，$F(x) \to +\infty$ ($x \to +\infty$)；
>
> $s > 1$ 时，$F(x) \to \dfrac{1}{s-1}$ ($x \to +\infty$).这说明 $s \leq 1$ 时，$\displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n^s}$ 发散；$s > 1$ 时 $\displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n^s}$ 收敛.
>
> **注意**．$\zeta(s) = \displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n^s}$ 称为 Riemann-Zeta 函数，这是一个非常重要的函数，它和现代数论的关系特别紧密.

/example/ 判断 $\displaystyle\sum_{n=1}^{\infty} \dfrac{1}{(n+1)(\ln(n+1))^s}$ 的敛散性，其中 $s \in \mathbb{R}$.

> 当 $s \leq 0$ 时，级数的一般项大于或等于 $\dfrac{1}{n+1}$，而 $\displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n}$ 发散，故原级数发散.下设 $s > 0$.令
> $$
> f(t) = \frac{1}{(1+t)(\ln(1+t))^s},
> $$
> 则 $f$ 为非负单调递减函数，且
> $$
> F(x) = \int_1^x f(t)dt = \int_1^x \frac{dt}{(1+t)(\ln(1+t))^s} =
> \begin{cases}
> \ln \ln(1+x) - \ln \ln 2, & s = 1, \\\\
> \dfrac{1}{1-s}\left[(\ln(1+x))^{1-s} - (\ln 2)^{1-s}\right], & s \ne 1.
> \end{cases}
> $$
> 因此 $s \leq 1$ 时原级数发散；$s > 1$ 时原级数收敛.

现在，如果在比较判别法中令 $b_n = \dfrac{1}{n^s}$ 或 $\dfrac{1}{n \ln n}$ 等，就可以由此进一步得到新的判别法.不过，我们来介绍一个相当一般的判别法，由此出发再得到两个新的判别法.以下仍假设 $\lambda$ 是常数.

### · Kummer 定理

**定理3**（Kummer）．设 $\displaystyle\sum_{n=1}^{\infty} a_n$, $\displaystyle\sum_{n=1}^{\infty} b_n$ 为正项级数，如果 $n$ 充分大时

(1) $\dfrac{1}{b_n} \cdot \dfrac{a_n}{a_{n+1}} - \dfrac{1}{b_{n+1}} \geq \lambda > 0$，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛；

(2) $\dfrac{1}{b_n} \cdot \dfrac{a_n}{a_{n+1}} - \dfrac{1}{b_{n+1}} \leq 0$ 且 $\displaystyle\sum_{n=1}^{\infty} b_n$ 发散，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散.

> /proof/
>
> (1) 条件可改写为
> $$
> a_{n+1} \leq \frac{1}{\lambda} \left( \frac{a_n}{b_n} - \frac{a_{n+1}}{b_{n+1}} \right), \quad \forall n \geq N.
> $$
> 这说明当 $n \geq N$ 时
> $$
> \begin{aligned}
> S_{n+1} &\leq S_N + \frac{1}{\lambda} \sum_{k=N}^{n} \left( \frac{a_k}{b_k} - \frac{a_{k+1}}{b_{k+1}} \right) \\\\
> &= S_N + \frac{1}{\lambda} \left( \frac{a_N}{b_N} - \frac{a_{n+1}}{b_{n+1}} \right) \\\\
> &\leq S_N + \frac{1}{\lambda} \frac{a_N}{b_N},
> \end{aligned}
> $$
> 即 $\{S_n\}$ 有上界，从而 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛.
>
> (2) 由
> $$
> \frac{1}{b_n} \cdot \frac{a_n}{a_{n+1}} - \frac{1}{b_{n+1}} \leq 0
> $$
> 可知
> $$
> \frac{a_n}{b_n} \leq \frac{a_{n+1}}{b_{n+1}},
> $$
> 即 $\left\{\dfrac{a_n}{b_n}\right\}$ 关于 $n$ 单调递增，从而 $a_n \geq \dfrac{a_1}{b_1} b_n$，因此由 $\displaystyle\sum_{n=1}^{\infty} b_n$ 发散知 $\displaystyle\sum_{n=1}^{\infty} a_n$ 也发散.

> [!important]
>
> **注意**．
>
> (1) 和前面一样，$\lambda$ 的存在性用极限去判断较容易：
>
> > 设
> > $$
> > \lim_{n \to \infty} \left( \frac{1}{b_n} \cdot \frac{a_n}{a_{n+1}} - \frac{1}{b_{n+1}} \right) = \lambda,
> > $$
> > 则 $\lambda > 0$ 时 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛；$\lambda < 0$ 且 $\displaystyle\sum_{n=1}^{\infty} b_n$ 发散时 $\displaystyle\sum_{n=1}^{\infty} a_n$ 也发散.
>
> (2) 取 $b_n = 1$，由 Kummer 判别法就得到了 d'Alembert 判别法.
>
> (3) (Raabe) 取 $b_n = \dfrac{1}{n}$，则得（$\mu$ 为常数）  
>
> > (i) $n \cdot \left( \dfrac{a_n}{a_{n+1}} - 1 \right) \geq \mu > 1$ 时 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛；  
> >
> > (ii) $n \cdot \left( \dfrac{a_n}{a_{n+1}} - 1 \right) \leq 1$ 时 $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散.
> >
> > Raabe 判别法当然也有极限形式.
>
> (4) (Gauss) 取 $b_n = \dfrac{1}{n \ln n}$，则得如下判别法：假设（$\theta$ 为常数）
> $$
> (*) \quad \frac{a_n}{a_{n+1}} = 1 + \frac{\theta}{n} + o\left(\frac{1}{n \ln n}\right),
> $$
> 则 $\theta > 1$ 时 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛；$\theta \leq 1$ 时级数发散.
>
> > 事实上，由 Raabe 判别法，只要考虑 $\theta = 1$ 的情形就可以了，此时有
> > $$
> > \begin{aligned}
> > &\lim_{n \to \infty} \left( \frac{1}{b_n} \cdot \frac{a_n}{a_{n+1}} - \frac{1}{b_{n+1}} \right) \\\\
> > &= \lim_{n \to \infty} \left\{ n \ln n \left[1 + \frac{1}{n} + o\left(\frac{1}{n \ln n}\right)\right] - (n+1) \ln(n+1) \right\} \\\\
> > &= \lim_{n \to \infty} (n+1) \ln \frac{n}{n+1} = -1 < 0.
> > \end{aligned}
> > $$
> > 由于 $\displaystyle\sum_{n=1}^{\infty} b_n$ 发散，故由 Kummer 判别法，级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散.

/example/ 判别下列级数的敛散性：

(1)
$$
\sum_{n=1}^{\infty} \frac{n!}{(\alpha+1)(\alpha+2)\cdots(\alpha+n)},\quad \alpha > 0
$$
(2) 
$$
\sum_{n=1}^{\infty} \left(\frac{(2n-1)!!}{(2n)!!}\right)^s \cdot \frac{1}{2n+1}
$$

> (1). 因为
> $$
> \lim_{n \to \infty} n \cdot \left( \frac{a_n}{a_{n+1}} - 1 \right) = \lim_{n \to \infty} n \cdot \left( \frac{\alpha + n + 1}{n + 1} - 1 \right) = \alpha,
> $$
> 根据 Raabe 判别法，$\alpha > 1$ 时原级数收敛，$\alpha < 1$ 时发散.$\alpha = 1$ 时，$a_n = \dfrac{1}{n+1}$，此时原级数也发散.
>
> (2) 因为
> $$
> \begin{aligned}
> \frac{a_n}{a_{n+1}} &= \left(\frac{2n+2}{2n+1}\right)^s \frac{2n+3}{2n+1} = \left(1 + \frac{1}{2n+1}\right)^s \left(1 + \frac{2}{2n+1}\right) \\\\
> &= \left(1 + \frac{s}{2n+1} + O\left(\frac{1}{n^2}\right)\right)\left(1 + \frac{2}{2n+1}\right) \\\\
> &= 1 + \frac{s+2}{2n+1} + O\left(\frac{1}{n^2}\right) \\\\
> &= 1 + \frac{(s+2)/2}{n} + O\left(\frac{1}{n^2}\right),
> \end{aligned}
> $$
> 根据 Gauss 判别法，当 $s > 0$ 时原级数收敛；$s \leq 0$ 时原级数发散.

最后，我们介绍一个单调递减正项级数的收敛性判别法，它有时可以用来代替积分判别法.

### · Cauchy 凝聚判别法

**Cauchy 凝聚判别法**．设 $a_n$ 单调递减趋于零.则 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛当且仅当 $\displaystyle\sum_{k=0}^{\infty} 2^k a_{2^k}$ 收敛.

> 记 $S_n = \displaystyle\sum_{k=1}^{n} a_n$, $T_n = \displaystyle\sum_{k=0}^{n} 2^k a_{2^k}$.当 $2^k \leq n < 2^{k+1}$ 时，有
> $$
> \begin{aligned}
> S_n &\geq a_1 + a_2 + (a_3 + a_4) + \cdots + (a_{2^{k-1}+1} + \cdots + a_{2^k}) \\\\
> &\geq a_1 + a_2 + 2a_4 + \cdots + 2^{k-1} a_{2^k} \\\\
> &\geq \frac{1}{2}(a_1 + 2a_2 + \cdots + 2^k a_{2^k}) \\\\
> &= T_k / 2.
> \end{aligned}
> $$
> 这说明当 $S_n$ 有界时，$T_n$ 也有界，即 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛时 $\displaystyle\sum_{k=0}^{\infty} 2^k a_{2^k}$ 也收敛.类似地，有
> $$
> \begin{aligned}
> S_n &\leq a_1 + (a_2 + a_3) + \cdots + (a_{2^k} + \cdots + a_{2^{k+1}-1}) \\\\
> &\leq a_1 + 2a_2 + \cdots + 2^k a_{2^k} \\\\
> &= T_k.
> \end{aligned}
> $$
> 从而当 $\displaystyle\sum_{k=0}^{\infty} 2^k a_{2^k}$ 收敛时 $\displaystyle\sum_{n=1}^{\infty} a_n$ 也收敛.

/example/ 讨论下列级数的敛散性（$p$ 为实数）：
$$
\sum_{n=1}^{\infty} \frac{1}{n^p}, \quad \sum_{n=2}^{\infty} \frac{1}{n(\ln n)^p}.
$$

> 显然，当 $p \leq 0$ 时级数都是发散的.下设 $p > 0$.因为 $a_n = \dfrac{1}{n^p}$ 单调递减趋于零，由 Cauchy 凝聚判别法，只要考察下面的级数的敛散性：
> $$
> \sum_{k=0}^{\infty} 2^k \frac{1}{2^{kp}} = \sum_{k=0}^{\infty} 2^{k(1-p)},
> $$
> 这是几何级数，当 $2^{1-p} < 1$，即 $p > 1$ 时收敛；当 $2^{1-p} \geq 1$，即 $p \leq 1$ 时发散.
>
> 第二个级数可类似处理，考察级数
> $$
> \sum_{k=1}^{\infty} 2^k \frac{1}{2^k (k \ln 2)^p} = (\ln 2)^{-p} \sum_{k=1}^{\infty} \frac{1}{k^p},
> $$
> 根据刚才的讨论可知，当 $p > 1$ 时级数收敛，否则级数发散.

## Part 3 一般级数敛散性

利用 Taylor 公式我们曾得到如下等式：

$$
\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{1}{2n - 1},
$$

$$
\ln 2 = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{1}{n}.
$$

上面两个级数的特点是正负项交替出现，我们将这样的级数称为交错级数.

### · Leibniz 定理

**定理1 (Leibniz).** 设 $a_n$ 单调递减趋于 $0$，则级数 $\displaystyle\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ 收敛.

> 我们利用 Cauchy 准则来证明.考虑 $S_{n+p} - S_n$：
>
> $$
> S_{n+p} - S_n = (-1)^n \cdot a_{n+1} + (-1)^{n+1} a_{n+2} + \cdots + (-1)^{n+p-1} a_{n+p}
> $$
>
> $$
> = (-1)^n [a_{n+1} - a_{n+2} + a_{n+3} - a_{n+4} + \cdots + (-1)^{p-1} a_{n+p}].
> $$
>
> 因此当 $p = 2k - 1$ 时，
>
> $$
> (-1)^n (S_{n+p} - S_n) = a_{n+1} - (a_{n+2} - a_{n+3}) - (a_{n+4} - a_{n+5}) - \cdots \leq a_{n+1},
> $$
>
> $$
> (-1)^n (S_{n+p} - S_n) = (a_{n+1} - a_{n+2}) + (a_{n+3} - a_{n+4}) + \cdots + a_{n+2k-1}
> $$
>
> $$
> \geq 0,
> $$
>
> 这说明
>
> $$
> (*)\ |S_{n+p} - S_n| \leq a_{n+1} \to 0\ (n \to \infty).
> $$
>
> 当 $p = 2k$ 时，类似地可证上式仍成立.因此原级数收敛.
>
> > 在 $(*)$ 中令 $p \to \infty$ 得
> >
> > $$
> > |S - S_n| \leq a_{n+1},
> > $$
> >
> > 其中 $S = \displaystyle\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ 为级数的和，这是交错级数的误差估计.

### · 分部求和

为了得到更一般的结果，我们需要一个分部求和的技巧，这个技巧其实在第二积分中值定理中已经用过了.

**引理2 (分部求和).** 设 $\{a_k\}, \{b_k\}$ 为数列，则
$$
\sum_{k=m}^{n-1} a_{k+1} (b_{k+1} - b_k) + \sum_{k=m}^{n-1} b_k (a_{k+1} - a_k) = a_n b_n - a_m b_m.
$$

> /proof/
>
> 将欲证左式两项合并，然后利用裂项相消法即可：
> $$
> \sum_{k=m}^{n-1} a_{k+1} (b_{k+1} - b_k) + \sum_{k=m}^{n-1} b_k (a_{k+1} - a_k)
> $$
>
> $$
> = \sum_{k=m}^{n-1} [a_{k+1} b_{k+1} - a_{k+1} b_k + b_k a_{k+1} - b_k a_k]
> $$
>
> $$
> = \sum_{k=m}^{n-1} (a_{k+1} b_{k+1} - a_k b_k)
> $$
>
> $$
> = a_n b_n - a_m b_m.
> $$
>
> 引理证毕.

分部求和公式的简单应用：

如果取 $a_k = b_k = k$，代入分部求和公式，得

$$
\sum_{k=0}^{n-1} (k+1) + \sum_{k=0}^{n-1} k = n^2 - 0,
$$

即

$$
2 \sum_{k=1}^{n} k = n^2 + n,
$$

这就得到公式

$$
1 + 2 + \cdots + n = \frac{1}{2} n(n+1).
$$

类似地，如果令 $a_k = k^2, b_k = k$ 代入，则得

$$
\sum_{k=0}^{n-1} (k+1)^2 + \sum_{k=0}^{n-1} k(2k+1) = n^3,
$$

整理以后就得到公式

$$
1^2 + 2^2 + \cdots + n^2 = \frac{1}{6} n(n+1)(2n+1).
$$

可以用这个办法继续求和.

### · Abel-Dirichlet 判别法

如果约定 $b_0 = 0$，记

$$
B_0 = 0,\ B_k = b_1 + b_2 + \cdots + b_k\quad (k \geq 1),
$$

并用 $B_k$ 代替上述分部求和公式中的 $b_k$，则得到

**推论3 (Abel 变换).** 设 $a_i, b_i\ (i \geq 1)$ 为两组实数，则有
$$
\sum_{i=m+1}^{n} a_i b_i = \sum_{i=m+1}^{n-1} (a_i - a_{i+1}) B_i + a_n B_n - a_{m+1} B_m,\quad \forall\ m \geq 0.
$$

> /proof/
>
> 这可由分部求和公式得到，也可直接计算如下
> $$
> \begin{aligned}
> \sum_{i=m+1}^{n} a_i b_i &= \sum_{i=m+1}^{n} a_i (B_i - B_{i-1}) = \sum_{i=m+1}^{n} a_i B_i - \sum_{i=m+1}^{n} a_i B_{i-1}\\\\
>&= \sum_{i=m+1}^{n} a_i B_i - \sum_{i=m}^{n-1} a_{i+1} B_i\\\\
> &= \sum_{i=m+1}^{n-1} (a_i - a_{i+1}) B_i + a_n B_n - a_{m+1} B_m.
> \end{aligned}
> $$
>

**推论4 (Abel 引理).** 设 $a_1, a_2, \cdots, a_n$ 为单调数列，且 $|B_i| \leq M\ (i \geq 1)$，则
$$
\Big|\sum_{i=m+1}^{n} a_i b_i\Big| \leq 2M(|a_n| + |a_{m+1}|),\quad \forall\ m \geq 0.
$$

> /proof/
>
> 由 Abel 变换得
> $$
> \Big|\sum_{i=m+1}^{n} a_i b_i\Big| \leq M \sum_{i=m+1}^{n-1} |a_i - a_{i+1}| + M(|a_n| + |a_{m+1}|)
> $$
>
> $$
> = M \Big|\sum_{i=m+1}^{n-1} (a_i - a_{i+1})\Big| + M(|a_n| + |a_{m+1}|)
> $$
>
> $$
> = M|a_{m+1} - a_n| + M(|a_n| + |a_{m+1}|)
> $$
>
> $$
> \leq 2M(|a_{m+1}| + |a_n|).
> $$
>
> 其中，在第一个等号处我们用到了 $\{a_i\}$ 的单调性.

**定理5 (Dirichlet).** 设数列 $\{a_n\}$ 单调趋于 $0$，级数 $\displaystyle\sum_{n=1}^{\infty} b_n$ 的部分和有界，则级数 $\displaystyle\sum_{n=1}^{\infty} a_n b_n$ 收敛.

> /proof/
>
> 由假设，存在 $M > 0$ 使得
> $$
> \Big|\sum_{i=1}^{n} b_i\Big| \leq M,\quad \forall\ n \geq 1.
> $$
>
> 由 Abel 变换及其推论，
>
> $$
> \Big|\sum_{i=n+1}^{n+p} a_i b_i\Big| \leq 2M(|a_{n+1}| + |a_{n+p}|) \leq 4M|a_{n+1}| \to 0.
> $$
>
> 由 Cauchy 准则知级数 $\displaystyle\sum_{n=1}^{\infty} a_n b_n$ 收敛.
>
> > **注意.** 
> >
> > 如果在 $[1,+\infty)$ 上分段地定义函数 $f(x), g(x)$ 如下：当 $x \in [k,k+1)$ 时，令 $f(x) = a_k,\ g(x) = b_k,\ k = 1,2,\cdots$.则 $f(x)$ 和 $g(x)$ 满足第七章第三节关于广义积分的 Dirichlet 定理的条件，
> >
> > 因而 $f(x)g(x)$ 在 $[1,+\infty)$ 上的广义积分收敛，即级数 $\displaystyle\sum_{n=1}^{\infty} a_n b_n$ 收敛.
> >
> > 这说明数项级数的 Dirichlet 定理可以看成广义积分的 Dirichlet 定理的推论.下面的 Abel 定理也是如此.

**定理6 (Abel).** 如果 $\{a_n\}$ 为单调有界数列，$\displaystyle\sum_{n=1}^{\infty} b_n$ 收敛，则级数 $\displaystyle\sum_{n=1}^{\infty} a_n b_n$ 收敛.

> /proof/
>
> $\{a_n\}$ 单调有界意味着极限 $\displaystyle\lim_{n \to \infty} a_n = a$ 存在.于是 $\{a_n - a\}$ 单调趋于 $0$.由 Dirichlet 判别法，$\displaystyle\sum_{n=1}^{\infty} (a_n - a)b_n$ 收敛.从而级数
> $$
> \sum_{n=1}^{\infty} a_n b_n = \sum_{n=1}^{\infty} (a_n - a)b_n + \sum_{n=1}^{\infty} a \cdot b_n
> $$
>
> 也收敛.

/example/ 判断级数 $\displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n} \sin nx$ 的敛散性.

> $a_n = \dfrac{1}{n}$ 单调递减趋于 $0$，$b_n = \sin nx$.利用公式
>
> $$
> 2 \sin \frac{x}{2} \cdot \sin kx = \cos(k - \frac{1}{2})x - \cos(k + \frac{1}{2})x
> $$
>
> 得
>
> $$
> \sum_{k=1}^{n} b_n =
> \begin{cases}
> 0, & x = 2k\pi, \\\\
> (\cos \frac{x}{2} - \cos(n + \frac{1}{2})x)/2 \sin \frac{x}{2}, & x \ne 2k\pi.
> \end{cases}
> $$
>
> 即 $b_n$ 的部分和总是有界的.故由 Dirichlet 判别法知，原级数收敛.

/example/ 设级数 $\displaystyle\sum_{n=1}^{\infty} n a_n$ 收敛，证明 $\displaystyle\sum_{n=1}^{\infty} a_n$ 也收敛.

>  记 $a_n = \dfrac{1}{n} \cdot (n a_n)$，而 $\dfrac{1}{n}$ 单调趋于 $0$，$\displaystyle\sum_{n=1}^{\infty} n a_n$ 收敛，故由 Abel 判别法，级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛.$\square$
>
> 对于更一般的级数，没有普适的判别法，但有时可以转化为正项级数予以处理.

### · 绝对收敛

**定义 (绝对收敛).** 如果 $\displaystyle\sum_{n=1}^{\infty} |a_n|$ 收敛，则称 $\displaystyle\sum_{n=1}^{\infty} a_n$ 绝对收敛（此时，由于
$$
|a_{n+1} + \cdots + a_{n+p}| \leq |a_{n+1}| + \cdots + |a_{n+p}| \to 0,
$$

故 $\displaystyle\sum_{n=1}^{\infty} a_n$ 的确为收敛级数）.

如果 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛而 $\displaystyle\sum_{n=1}^{\infty} |a_n|$ 发散，则称 $\displaystyle\sum_{n=1}^{\infty} a_n$ 条件收敛.

/example/ 判断级数 $\displaystyle\sum_{n=1}^{\infty} (-1)^{n-1} \dfrac{x^n}{n}\ (x \in \mathbb{R})$ 的敛散性.

> 令 $a_n = \dfrac{|x|^n}{n}$，则 $\sqrt[n]{a_n} \to |x|$.故 $|x| < 1$ 时原级数绝对收敛；
>
> 而 $|x| > 1$ 时显然发散.$x = 1$ 时级数条件收敛；$x = -1$ 时级数发散.

## Part 4 分析学性质

### · 可交换性

我们可以把级数的和看成是其部分和的极限，也就是一个数列极限. 

现在考虑这样的问题：如果有一列数项级数，它们的和就是一列数，这一列数的极限有何性质？为此，我们考虑依赖于指标 $i,j$（$i,j = 1,2,\cdots,\infty$）的实数 $a_{ij}$. 

**定义1**（级数的一致收敛）. 一列收敛级数 $\displaystyle\sum_{j=1}^\infty a_{ij} = A_i$ 关于 $i$ 一致收敛是指，任给 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，

$$
\left| \sum_{j=1}^n a_{ij} - A_i \right| < \varepsilon, \quad \forall\ i \geq 1.
$$

**定理1**. 设一列级数 $\displaystyle\sum_{j=1}^\infty a_{ij} = A_i$ 关于 $i$ 一致收敛，如果 $\displaystyle\lim_{i \to \infty} a_{ij} = a_j$（$j \geq 1$），则极限 $\displaystyle\lim_{i \to \infty} A_i$ 存在，级数 $\displaystyle\sum_{j=1}^\infty a_j$ 收敛，且
$$
\lim_{i \to \infty} A_i = \sum_{j=1}^\infty a_j,
$$

或改写为

$$
\lim_{i \to \infty} \sum_{j=1}^\infty a_{ij} = \sum_{j=1}^\infty \lim_{i \to \infty} a_{ij}.
$$

> 由一致收敛的定义，任给 $\varepsilon > 0$，存在 $N_0$，当 $n \geq N_0$ 时，
>
> $$
> \left| \sum_{j=1}^n a_{ij} - A_i \right| < \frac{1}{4}\varepsilon, \quad \forall\ i \geq 1.
> $$
>
> 因此，当 $m > n \geq N_0$ 时，
>
> $$
> \left| \sum_{j=n+1}^m a_{ij} \right| \leq \left| \sum_{j=1}^m a_{ij} - A_i \right| + \left| \sum_{j=1}^n a_{ij} - A_i \right| < \frac{1}{2}\varepsilon, \quad \forall\ i \geq 1.
> $$
>
> 在上式中令 $i \to \infty$，得
>
> $$
> \left| \sum_{j=n+1}^m a_j \right| \leq \frac{1}{2}\varepsilon,
> $$
>
> 由 Cauchy 准则即知级数 $\displaystyle\sum_{j=1}^\infty a_j$ 收敛，且在上式中令 $m \to \infty$ 可得
>
> $$
> \left| \sum_{j=n+1}^\infty a_j \right| \leq \frac{1}{2}\varepsilon, \quad \forall\ n \geq N_0.
> $$
>
> 对于 $j = 1,2,\cdots,N_0$，因为 $a_{ij} \to a_j$，故存在 $N$，当 $i > N$ 时，
>
> $$
> |a_{ij} - a_j| < \frac{\varepsilon}{4N_0}, \quad j = 1,2,\cdots,N_0.
> $$
>
> 因此，当 $i > N$ 时，有
>
> $$
> \begin{aligned}
> \left| A_i - \sum_{i=1}^\infty a_j \right| &\leq \left| A_i - \sum_{j=1}^{N_0} a_{ij} \right| + \left| \sum_{j=1}^{N_0} a_{ij} - \sum_{j=1}^{N_0} a_j \right| + \left| \sum_{j=N_0+1}^\infty a_j \right| \\\\
> &< \frac{1}{4}\varepsilon + N_0 \cdot \frac{\varepsilon}{4N_0} + \frac{1}{2}\varepsilon = \varepsilon.
> \end{aligned}
> $$
>
> 这说明 $\{A_i\}$ 的极限存在且极限为 $\displaystyle\sum_{j=1}^\infty a_j$. 
>
> **注意**. 这个结果给出了求极限与求和这两个运算可交换次序的一个充分条件. 

**推论2**. 设 $\displaystyle\lim_{i \to \infty} a_{ij} = a_j$（$j \geq 1$），$|a_{ij}| \leq b_j$（$i \geq 1$），且 $\displaystyle\sum_{j=1}^\infty b_j$ 收敛，则级数 $\displaystyle\sum_{j=1}^\infty a_j$ 收敛，且

$$
\sum_{j=1}^\infty a_j = \sum_{j=1}^\infty \lim_{i \to \infty} a_{ij} = \lim_{i \to \infty} \sum_{j=1}^\infty a_{ij}.
$$

> 由 $a_{ij} \to a_j$，且 $|a_{ij}| \leq b_j$ 知 $|a_j| \leq b_j$，$j = 1,2,\cdots$. 因为级数 $\displaystyle\sum_{j=1}^\infty b_j$ 收敛，故级数 $\displaystyle\sum_{j=1}^\infty a_j$ 绝对收敛. 任给 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，
>
> $$
> 0 \leq \sum_{j=n+1}^\infty b_j < \varepsilon.
> $$
>
> 此时，对任意 $i \geq 1$，有
>
> $$
> \left| \sum_{j=1}^n a_{ij} - \sum_{j=1}^\infty a_{ij} \right| = \left| \sum_{j=n+1}^\infty a_{ij} \right| \leq \sum_{j=n+1}^\infty b_j < \varepsilon,
> $$
>
> 从而级数 $\displaystyle\sum_{j=1}^\infty a_{ij}$ 关于 $i$ 是一致收敛的. 由上一定理知本推论结论成立.
>
> **注意**. 这个结果可以称为级数和的控制收敛定理，$\displaystyle\sum_{j=1}^\infty b_j$ 称为控制级数. 

**推论3**. 设 $\displaystyle\sum_{i=1}^\infty |a_{ij}| \leq A_j$（$j \geq 1$），且 $\displaystyle\sum_{j=1}^\infty A_j$ 收敛，则对任意 $i \geq 1$，级数 $\displaystyle\sum_{j=1}^\infty a_{ij}$ 收敛，且
$$
\sum_{i=1}^\infty \sum_{j=1}^\infty a_{ij} = \sum_{j=1}^\infty \sum_{i=1}^\infty a_{ij}.
$$

> 首先，由题设知 $|a_{ij}| \leq A_j$，$j = 1,2,\cdots$. 这说明，对任意 $i \geq 1$，级数 $\displaystyle\sum_{j=1}^\infty a_{ij}$ 是绝对收敛的. 因为
>
> $$
> \left| \sum_{i=1}^k a_{ij} \right| \leq \sum_{i=1}^k |a_{ij}| \leq A_j, \quad j \geq 1.
> $$
>
> 故由上一推论，有
>
> $$
> \begin{align*}
> \sum_{i=1}^\infty \sum_{j=1}^\infty a_{ij} &= \lim_{k \to \infty} \sum_{i=1}^k \sum_{j=1}^\infty a_{ij} \\\\
> &= \lim_{k \to \infty} \sum_{j=1}^\infty \sum_{i=1}^k a_{ij} \\\\
> &= \sum_{j=1}^\infty \lim_{k \to \infty} \sum_{i=1}^k a_{ij} \\\\
> &= \sum_{j=1}^\infty \sum_{i=1}^\infty a_{ij}.
> \end{align*}
> $$
>
> 这就证明了本推论. 
>
> **注意**. 这个推论给出了两个无穷求和运算可交换次序的一个充分条件. 

### · 级数的乘积

现在我们考虑级数的乘法运算性质，对于有限个数的和的乘积，显然有

$$
(a_0 + a_1 + \cdots + a_m)(b_0 + b_1 + \cdots + b_n) = \sum_{k=0}^{m+n} \sum_{i+j=k} a_i b_j.
$$

对于无穷级数，我们作如下推广：设 $\displaystyle\sum_{n=0}^\infty a_n$ 和 $\displaystyle\sum_{n=0}^\infty b_n$ 为两个级数，定义它们的乘积为级数 $\displaystyle\sum_{n=0}^\infty c_n$，其中

$$
c_n = \sum_{i+j=n} a_i b_j, \quad n \geq 0.
$$

这种乘积也称为级数的 Cauchy 乘积. 

**定理4**（Cauchy）. 如果 $\displaystyle\sum_{n=0}^\infty a_n$ 和 $\displaystyle\sum_{n=0}^\infty b_n$ 绝对收敛，则它们的乘积级数也绝对收敛，且

$$
\sum_{n=0}^\infty c_n = \left( \sum_{n=0}^\infty a_n \right) \left( \sum_{n=0}^\infty b_n \right).
$$

> [!important]
>
> **注意**. 在定理的条件下不难看出，将 $\{a_i b_j\}$ 任意排列次序，得到的级数仍（绝对）收敛，且其和不变. 
>
> 我们现在将 Cauchy 定理的条件减弱，这时下面的结果仍然成立. 

**定理5**（Mertens）. 如果 $\displaystyle\sum_{n=0}^\infty a_n$ 和 $\displaystyle\sum_{n=0}^\infty b_n$ 收敛，且至少其中一个级数绝对收敛，则它们的乘积级数也收敛，且

$$
\sum_{n=0}^\infty c_n = \left( \sum_{n=0}^\infty a_n \right) \left( \sum_{n=0}^\infty b_n \right).
$$

> 不妨设 $\displaystyle\sum_{n=0}^\infty a_n$ 绝对收敛. 分别记
>
> $$
> A_n = \sum_{k=0}^n a_k, \quad B_n = \sum_{k=0}^n b_k, \quad C_n = \sum_{k=0}^n c_k.
> $$
>
> 则 $A_n \to A$，$B_n \to B$，而
>
> $$
> C_n = \sum_{i+j \leq n} a_i b_j = a_0 B_n + a_1 B_{n-1} + \cdots + a_n B_0 = A_n B + \delta_n,
> $$
>
> 其中
>
> $$
> \delta_n = a_0 (B_n - B) + a_1 (B_{n-1} - B) + \cdots + a_n (B_0 - B).
> $$
>
> 我们只要证明 $\delta_n \to 0$ 即可. 因为 $B_n \to B$，故 $\{B_n\}$ 关于 $n$ 有界，从而存在 $K$，使得
>
> $$
> |B_n - B| \leq K, \quad \forall\ n \geq 0.
> $$
>
> 由于 $\displaystyle\sum_{n=0}^\infty a_n$ 绝对收敛，故任给 $\varepsilon > 0$，存在 $N_0$，当 $n > N_0$ 时
>
> $$
> |a_{N_0+1}| + \cdots + |a_n| < \frac{\varepsilon}{2K+1}.
> $$
>
> 记 $L = |a_0| + |a_1| + \cdots + |a_{N_0}|$. 由于 $B_n - B \to 0$，故存在 $N_1$，当 $n > N_1$ 时
>
> $$
> |B_n - B| < \frac{\varepsilon}{2L+1}.
> $$
>
> 从而当 $n > N_0 + N_1$ 时，有
>
> $$
> \begin{aligned}
> |\delta_n| &\leq \sum_{k=0}^{N_0} |a_k| |B_{n-k} - B| + (|a_{N_0+1}| + \cdots + |a_n|) K \\\\
> &\leq \frac{\varepsilon}{2L+1} (|a_0| + |a_1| + \cdots + |a_{N_0}|) + \frac{\varepsilon}{2K+1} K \\\\
> &= \frac{\varepsilon}{2L+1} L + \frac{\varepsilon}{2K+1} K \\\\
> &< \varepsilon.
> \end{aligned}
> $$
>
> 这说明 $\delta_n \to 0$，因而 $C_n = A_n B + \delta_n \to AB$. 

**注意**. 定理中的绝对收敛的条件不能去掉，反例就是将 $a_n$ 和 $b_n$ 均取为交错级数 $(-1)^{n-1} \dfrac{1}{\sqrt{n}}$，此时所得乘积级数是发散的. 但是，如果乘积级数仍然收敛，则其和等于两个级数和的乘积. 

为了说明这一点，需要下面的引理. 

**引理6**（Abel）. 设级数 $\displaystyle\sum_{n=0}^\infty c_n = C$ 收敛，令
$$
f(x) = \sum_{n=0}^\infty c_n x^n, \quad x \in [0,1),
$$

则 $\displaystyle\lim_{x \to 1^-} f(x) = C$. 

> 级数收敛表明 $\{c_n\}$ 有界，因此当 $x \in [0,1)$ 时，$\displaystyle\sum_{n=0}^\infty c_n x^n$ 绝对收敛. 记
>
> $$
> C_{-1} = 0, \quad C_n = \sum_{k=0}^n c_k, \quad n \geq 0.
> $$
>
> 则有
>
> $$
> \begin{aligned}
> \sum_{k=0}^n c_k x^k &= \sum_{k=0}^n (C_k - C_{k-1}) x^k \\\\
> &= \sum_{k=0}^n C_k x^k - x \sum_{k=0}^{n-1} C_k x^k \\\\
> &= C_n x^n + (1 - x) \sum_{k=0}^{n-1} C_k x^k \\\\
> &= C_n x^n + C(1 - x^n) + (1 - x) \sum_{k=0}^{n-1} (C_k - C) x^k.
> \end{aligned}
> $$
>
> 在上式中令 $n \to \infty$ 就得到
>
> $$
> f(x) = C + (1 - x) \sum_{k=0}^\infty (C_k - C) x^k.
> $$
>
> 因为 $C_k - C \to 0$，故任给 $\varepsilon > 0$，存在 $N$，当 $k > N$ 时
>
> $$
> |C_k - C| < \frac{1}{2}\varepsilon.
> $$
>
> 令 $M = \displaystyle\sum_{k=0}^N |C_k - C|$，则有估计
>
> $$
> |f(x) - C| \leq M(1 - x) + (1 - x) \sum_{k=N+1}^\infty \frac{1}{2}\varepsilon x^k \leq M(1 - x) + \frac{1}{2}\varepsilon.
> $$
>
> 因此，当 $0 < 1 - x < \dfrac{\varepsilon}{2M+1}$ 时，
>
> $$
> |f(x) - C| \leq M \frac{\varepsilon}{2M+1} + \frac{1}{2}\varepsilon < \varepsilon.
> $$
>
> 这说明 $\displaystyle\lim_{x \to 1^-} f(x) = C$. 

**定理7**（Abel）. 设级数 $\displaystyle\sum_{n=0}^\infty a_n$，$\displaystyle\sum_{n=0}^\infty b_n$ 以及它们的乘积 $\displaystyle\sum_{n=0}^\infty c_n$ 均收敛，则

$$
\sum_{n=0}^\infty c_n = \left( \sum_{n=0}^\infty a_n \right) \left( \sum_{n=0}^\infty b_n \right).
$$

> 当 $x \in [0,1)$ 时，级数 $\displaystyle\sum_{n=0}^\infty a_n x^n$ 和 $\displaystyle\sum_{n=0}^\infty b_n x^n$ 绝对收敛，它们的乘积级数为 $\displaystyle\sum_{n=0}^\infty c_n x^n$. 根据 Cauchy 定理，有
>
> $$
> \sum_{n=0}^\infty c_n x^n = \left( \sum_{n=0}^\infty a_n x^n \right) \left( \sum_{n=0}^\infty b_n x^n \right).
> $$
>
> 令 $x \to 1^-$，由上述 Abel 引理即得欲证结论. 

### ·  乘积级数

我们将级数定义中的加法运算改为乘积运算，就可以得到一种新的级数，它们的性质与加法级数的性质十分类似. 为此，设

$$
p_1, p_2, \cdots, p_n, \cdots
$$

是一列实数，我们将形式积

$$
\prod_{n=1}^\infty p_n = p_1 \cdot p_2 \cdots p_n \cdots
$$

称为无穷乘积. 记

$$
P_n = \prod_{k=1}^n p_k, \quad n \geq 1
$$

称为部分乘积. 如果数列 $\{P_n\}$ 的极限存在，且极限为有限或为正无穷，或为负无穷，则此极限称为无穷乘积的值，记为

$$
\prod_{n=1}^\infty p_n = \lim_{n \to \infty} P_n.
$$

当极限为有限且非零时，称无穷乘积是收敛的，否则就称它是发散的. 

如果某个 $p_n$ 为零，则显然无穷乘积为零. 下面我们假设 $p_n$ 均为非零实数. 设无穷乘积 $\displaystyle\prod_{n=1}^\infty p_n$ 收敛，则

$$
\lim_{n \to \infty} p_n = \lim_{n \to \infty} \frac{P_n}{P_{n-1}} = P/P = 1,
$$

特别地，当 $n$ 充分大时，必有 $p_n > 0$. 因为去掉有限项后不影响敛散性，因此下面进一步假设 $p_n > 0$，$\forall\ n \geq 1$. 

由于

$$
P_n = \prod_{k=1}^n p_k = e^{\sum_{k=1}^n \ln p_k},
$$

因此，我们可以将无穷乘积化为无穷级数加以讨论，我们有

**命题8**. 设 $p_n > 0$，$\forall\ n \geq 1$. 则

(1) 无穷乘积 $\displaystyle\prod_{n=1}^\infty p_n$ 收敛当且仅当级数 $\displaystyle\sum_{n=1}^\infty \ln p_n$ 收敛，且
$$
\prod_{n=1}^\infty p_n = e^{\sum_{n=1}^\infty \ln p_n};
$$

(2) 记 $p_n = 1 + a_n$. 如果 $n$ 充分大时 $a_n > 0$（或 $a_n < 0$），则无穷乘积 $\displaystyle\prod_{n=1}^\infty p_n$ 收敛当且仅当级数 $\displaystyle\sum_{n=1}^\infty a_n$ 收敛；

(3) 如果级数 $\displaystyle\sum_{n=1}^\infty a_n$ 和 $\displaystyle\sum_{n=1}^\infty a_n^2$ 均收敛，则无穷乘积 $\displaystyle\prod_{n=1}^\infty (1 + a_n)$ 也收敛. 

> (1) 是显然的. (2) 只要利用
>
> $$
> \lim_{n \to \infty} \frac{\ln(1 + a_n)}{a_n} = 1
> $$
>
> 以及数项级数的比较判别法即可. (3) 则是利用（$a_n$ 不为零时）
>
> $$
> \lim_{n \to \infty} \frac{[a_n - \ln(1 + a_n)]}{a_n^2} = \frac{1}{2}
> $$
>
> 以及 (1). 

### · 级数的重排

现在我们讨论将级数的各项重新排列次序后得到的新级数的收敛和发散性质. 

首先，如果 $\displaystyle\sum_{n=1}^\infty a_n$ 为正项级数，则由基本判别法不难看出，将它的各项重新排列后不会影响其敛散性. 

如果收敛的话，重排也不改变级数的和. 

对于一般的级数，如果 $\displaystyle\sum_{n=1}^\infty a_n$ 绝对收敛，则重排后的级数也绝对收敛，且其和不变. 这可以从等式

$$
a_n = \frac{a_n + |a_n|}{2} - \frac{|a_n| - a_n}{2} = a_n^+ - a_n^-
$$

以及正项级数 $\displaystyle\sum_{n=1}^\infty a_n^+$, $\displaystyle\sum_{n=1}^\infty a_n^-$ 的收敛性推出. 

如果 $\displaystyle\sum_{n=1}^\infty a_n$ 条件收敛，则级数重排后即使收敛，它的和也可能变化. 

实际上，对于条件收敛的级数，可以将它重排使得其和为任意实数. 

**定理9**（Riemann）. 如果 $\displaystyle\sum_{n=1}^\infty a_n$ 为条件收敛的级数，则可以将它重排为一个收敛级数，使得重排后的级数和为任意指定的实数. 

> 设 $\xi \in \mathbb{R}$，我们将找到 $\displaystyle\sum_{n=1}^\infty a_n$ 的一个重排，使得它的和为 $\xi$. 
>
> 首先我们注意到，如果 $\displaystyle\sum_{n=1}^\infty a_n$ 条件收敛，则 $\displaystyle\sum_{n=1}^\infty |a_n|$ 发散. 
>
> 由 $|a_n| = a_n^+ + a_n^-$, $a_n = a_n^+ - a_n^-$ 即知，级数 $\displaystyle\sum_{n=1}^\infty a_n^+$ 和 $\displaystyle\sum_{n=1}^\infty a_n^-$ 均发散到 $+\infty$. 这两个级数的部分和分别记为 $S_n^+$ 和 $S_n^-$. 因为当 $n$ 充分大时 $S_n^+ > \xi$，故可取最小的正整数 $m_1$，使得
> $$
> S_{m_1}^+ > \xi,
> $$
>
> 此时成立
>
> $$
> \xi \geq S_{m_1}^+ - a_{m_1}^+.
> $$
>
> 因为 $n$ 充分大时，$S_{m_1}^+ - S_n^- < \xi$，故可取最小的正整数 $n_1$，使得
>
> $$
> S_{m_1}^+ - S_{n_1}^- < \xi,
> $$
>
> 同理有
>
> $$
> \xi \leq S_{m_1}^+ - S_{n_1}^- + a_{n_1}^-.
> $$
>
> 下面再取最小的正整数 $m_2$，使得
>
> $$
> S_{m_2}^+ - S_{n_1}^- > \xi \geq S_{m_2}^+ - S_{n_1}^- - a_{m_2}^+,
> $$
>
> 以及最小的正整数 $n_2$，使得
>
> $$
> S_{m_2}^+ - S_{n_2}^- < \xi \leq S_{m_2}^+ - S_{n_2}^- + a_{n_2}^-.
> $$
>
> 如此继续下去，我们得到递增数列 $m_1 < m_2 < \cdots$ 和 $n_1 < n_2 < \cdots$，使得
>
> $$
> S_{m_k}^+ - S_{n_{k-1}}^- > \xi \geq S_{m_k}^+ - S_{n_{k-1}}^- - a_{m_k}^+
> $$
>
> 和
>
> $$
> S_{m_k}^+ - S_{n_k}^- < \xi \leq S_{m_k}^+ - S_{n_k}^- + a_{n_k}^+
> $$
>
> 对任意 $k$ 均成立. 由 $a_n \to 0$ 即知，下面的级数
>
> $$
> \begin{aligned}
> &a_1^+ + \cdots + a_{m_1}^+ - a_1^- - \cdots - a_{n_1}^- + a_{m_1+1}^+ + \cdots + a_{m_2}^+ \\\\
> &- a_{n_1+1}^- - \cdots - a_{n_2}^- + a_{m_2+1}^+ + \cdots + a_{m_3}^+ - a_{n_2+1}^- - \cdots
> \end{aligned}
> $$
>
> 收敛到 $\xi$. 注意 $a_n^+$ 和 $a_n^-$ 在这个级数中都依次出现了，因此它可以看成是原级数 $\displaystyle\sum_{n=1}^\infty a_n$ 的一个重排. 

**注意**. 如果 $\displaystyle\sum_{n=1}^\infty a_n$ 条件收敛，则可以将它重排为发散到 $+\infty$ 或 $-\infty$ 的级数

结束.

