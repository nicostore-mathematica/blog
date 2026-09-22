---
url: /integral/integral-21/index.md
---
## Part 1 级数敛散

设 $a\_1, a\_2, \cdots, a\_n, \cdots$ 为一列实数，形式和
$$
\sum\_{n=1}^{\infty} a\_n = a\_1 + a\_2 + \cdots + a\_n + \cdots
$$
称为无穷级数，$a\_n$ 称为通项或一般项，$S\_n = \displaystyle\sum\_{k=1}^{n} a\_k = a\_1 + \cdots + a\_n$ 称为级数的第 $n$ 个部分和.

如果 $\displaystyle\lim\_{n \to \infty} S\_n = S$ 存在且有限，则称级数 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛，其和为 $S$，记为
$$
\sum\_{n=1}^{\infty} a\_n = S.
$$
否则就称级数 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 发散.级数的收敛或发散性质统称为敛散性.利用数列极限的性质可得

**级数收敛的必要条件**：如果 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛，则通项 $a\_n \to 0$ ($n \to \infty$).这是因为
$$
a\_n = S\_n - S\_{n-1} \to S - S = 0 \quad (n \to \infty).
$$

**级数收敛的充要条件（Cauchy 准则）**：$\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛 $\iff$ 任给 $\varepsilon > 0$，存在 $N = N(\varepsilon)$，当 $n > N$ 时
$$
|a\_{n+1} + a\_{n+2} + \cdots + a\_{n+p}| < \varepsilon, \quad \forall p \geq 1.
$$
这时因为
$$
a\_{n+1} + a\_{n+2} + \cdots + a\_{n+p} = S\_{n+p} - S\_n,
$$
对数列 ${S\_n}$ 用 Cauchy 收敛准则即可.

**几何级数**： $q > 0$，则当 $q < 1$ 时，$\displaystyle\sum\_{n=1}^{\infty} q^n$ 收敛；$q \geq 1$ 时，$\displaystyle\sum\_{n=1}^{\infty} q^n$ 发散.

> 当 $0 < q < 1$ 时，
> $$
> S\_n = \sum\_{k=1}^{n} q^k = q \cdot \frac{1 - q^n}{1 - q} \to \frac{q}{1 - q},
> $$
> 此时原级数收敛；当 $q \geq 1$ 时，$q^n \not\to 0$，此时原级数发散.

**命题**.

(1) 如果 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 和 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 均收敛，则 $\displaystyle\sum\_{n=1}^{\infty} (\lambda a\_n + \mu b\_n)$ 也收敛，且
$$
\sum\_{n=1}^{\infty} (\lambda a\_n + \mu b\_n) = \lambda \sum\_{n=1}^{\infty} a\_n + \mu \sum\_{n=1}^{\infty} b\_n, \quad (\lambda, \mu \in \mathbb{R}).
$$

(2) 级数的敛散性与其有限项的值无关.

## Part 2 正项级数敛散性

如果 $a\_n > 0$，则称 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 为正项级数.此时，部分和 $S\_n = \displaystyle\sum\_{k=1}^{n} a\_n$ 关于 $n$ 是单调递增的.因此有

### · 基本判别法

**(基本判别法)** $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛 $\iff {S\_n}$ 收敛 $\iff {S\_n}$ 有上界.

这个判别法对于 $a\_n \geq 0$ 的级数当然也成立.

/example/ 设 $q > 1$ 为正整数，$0 \leq a\_n \leq q - 1$ ($\forall n \geq 1$)，则级数
$$
\sum\_{n=1}^{\infty} \frac{a\_n}{q^n}
$$
收敛，其和介于 0 和 1 之间.

> 当 $0 \leq a\_n \leq q - 1$ 时，
> $$
> \begin{aligned}
> 0 \leq S\_n &= \sum\_{k=1}^{n} \frac{a\_k}{q^k} \\\\
> &\leq (q - 1) \sum\_{k=1}^{n} \frac{1}{q^k} \\\\
> &= 1 - q^{-n} < 1.
> \end{aligned}
> $$
> 因此级数收敛且和介于 0 与 1 之间.

### · 比较判别法

**定理1**（比较判别法）．设 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 和 $\displaystyle\displaystyle\sum\_{n=1}^{\infty} b\_n$ 为正项级数，如果存在常数 $M > 0$，使得
$$
a\_n \leq M b\_n, \quad \forall n \geq 1. \tag{\*}
$$
则

(1) $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 收敛时 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 也收敛；

(2) $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 发散时 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 也发散.

> \[!important]
>
> **(1)** 条件 (\*) 只要对充分大的 $n$ 成立即可.
>
> **(2)** 条件 (\*) 也可改写为
> $$
> \frac{a\_n}{b\_n} \leq M,
> $$
> $M$ 的存在性通常用求极限的办法得到，即，如果
> $$
> \lim\_{n \to \infty} \frac{a\_n}{b\_n} = \lambda,
> $$
> 则有
>
> > (i) $0 < \lambda < +\infty$，则 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 和 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 同敛散；
> >
> > (ii) $\lambda = 0$，则 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 收敛时 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 也收敛；$\lambda = \infty$，则 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 发散时 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 也发散.
>
> **(3**). 另一个求 $\dfrac{a\_n}{b\_n}$ 上界的方法是利用单调性，即如果
> $$
> \frac{a\_{n+1}}{a\_n} \leq \frac{b\_{n+1}}{b\_n} \quad \left(\Longleftrightarrow \frac{a\_n}{b\_n} \text{ monotonic decreasing}\right)
> $$
>
> > (i) $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 收敛时 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 也收敛；(ii) $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 发散时 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 也发散.
>
> **(4)** (Cauchy 判别法或根值判别法) 在定理1 中取 $b\_n = q^n$ ($q$ 是固定正数)，得到如下结果：
>
> 如果 $n$ 充分大时，$\sqrt\[n]{a\_n} \leq q < 1$，则 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛；
>
> 如果存在无穷多个 $n$，使得 $\sqrt\[n]{a\_n} \geq 1$，则 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 发散.
>
> > 如何寻找 $q$ 呢？还是求极限比较方便：设
> > $$
> > \lim\_{n \to \infty} \sqrt\[n]{a\_n} = \lambda.
> > $$
> > 则 $\lambda < 1$ 时，$\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛；$\lambda > 1$ 时，级数发散（$\lambda = 1$ 时无法判别）.
>
> **(5)** (d'Alembert 判别法或比值判别法) 在 (3) 中取 $b\_n = q^n$，得如下结果：
>
> 如果 $n$ 充分大时，$\dfrac{a\_{n+1}}{a\_n} \leq q < 1$，则 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛；
>
> 如果 $\dfrac{a\_{n+1}}{a\_n} \geq 1$（对充分大的 $n$ 成立），则 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 发散.
>
> > 当然，还是求极限来寻找 $q$ 比较容易.如果
> > $$
> > \lim\_{n \to \infty} \frac{a\_{n+1}}{a\_n} = \lambda,
> > $$
> > 则 $\lambda < 1$ 时级数收敛，$\lambda > 1$ 时发散（$\lambda = 1$ 时无法判别）.

/example/ 判别 $\displaystyle\sum\_{n=1}^{\infty} \left\[\dfrac{1}{n} - \ln\left(1 + \dfrac{1}{n}\right)\right]$ 的敛散性.

> 根据 Taylor 展开，
> $$
> 0 < \frac{1}{n} - \ln\left(1 + \frac{1}{n}\right) = \frac{1}{2n^2} + o\left(\frac{1}{n^2}\right).
> $$
> 因此
> $$
> \lim\_{n \to \infty} \left\[\frac{1}{n} - \ln\left(1 + \frac{1}{n}\right)\right] / \frac{1}{n^2} = \frac{1}{2},
> $$
> 而 $\displaystyle\sum\_{n=1}^{\infty} \dfrac{1}{n^2}$ 收敛，故原级数收敛.

### · 积分判别法

**定理2**（积分判别法）．设 $f(x)$ 是定义在 $\[1, +\infty)$ 上的非负单调递减函数，记 $a\_n = f(n)$ ($n \geq 1$).则级数 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 的敛散性与广义积分 $\int\_1^{+\infty} f(x)dx$ 的敛散性相同.

> /proof/
>
> 令
> $$
> F(x) = \int\_1^x f(t)dt, \quad \forall x \geq 1.
> $$
> 因为 $f$ 为单调递减函数，故当 $n \leq x \leq n+1$ 时
> $$
> a\_{n+1} = f(n+1) \leq f(x) \leq f(n) = a\_n,
> $$
> 这说明
> $$
> a\_{n+1} \leq \int\_n^{n+1} f(t)dt \leq a\_n,
> $$
> 从而有
> $$
> S\_n \leq a\_1 + F(n), \quad F(n) \leq S\_{n-1}.
> $$
> 其中 $S\_n = \displaystyle\sum\_{k=1}^{n} a\_k$ 为级数的部分和.因为 $S\_n$ 及 $F(n)$ 关于 $n$ 都是单调递增的，二者同时有界或无界，即 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 与 $\int\_1^{+\infty} f(x)dx$ 同敛散.

/example/ 设 $s \in \mathbb{R}$，判断级数 $\displaystyle\sum\_{n=1}^{\infty} \dfrac{1}{n^s}$ 的敛散性.

> $s \leq 0$ 时，一般项 $\to 0$，故级数发散.$s > 0$ 时，考虑 $f(x) = x^{-s}$，$f$ 为非负单调递减函数，且
> $$
> F(x) = \int\_1^x f(t)dt = \int\_1^x t^{-s}dt =
> \begin{cases}
> \ln x, & s = 1, \\\\
> \dfrac{1}{1-s}(x^{1-s} - 1), & s \ne 1.
> \end{cases}
> $$
> 当 $0 < s \leq 1$ 时，$F(x) \to +\infty$ ($x \to +\infty$)；
>
> $s > 1$ 时，$F(x) \to \dfrac{1}{s-1}$ ($x \to +\infty$).这说明 $s \leq 1$ 时，$\displaystyle\sum\_{n=1}^{\infty} \dfrac{1}{n^s}$ 发散；$s > 1$ 时 $\displaystyle\sum\_{n=1}^{\infty} \dfrac{1}{n^s}$ 收敛.
>
> **注意**．$\zeta(s) = \displaystyle\sum\_{n=1}^{\infty} \dfrac{1}{n^s}$ 称为 Riemann-Zeta 函数，这是一个非常重要的函数，它和现代数论的关系特别紧密.

/example/ 判断 $\displaystyle\sum\_{n=1}^{\infty} \dfrac{1}{(n+1)(\ln(n+1))^s}$ 的敛散性，其中 $s \in \mathbb{R}$.

> 当 $s \leq 0$ 时，级数的一般项大于或等于 $\dfrac{1}{n+1}$，而 $\displaystyle\sum\_{n=1}^{\infty} \dfrac{1}{n}$ 发散，故原级数发散.下设 $s > 0$.令
> $$
> f(t) = \frac{1}{(1+t)(\ln(1+t))^s},
> $$
> 则 $f$ 为非负单调递减函数，且
> $$
> F(x) = \int\_1^x f(t)dt = \int\_1^x \frac{dt}{(1+t)(\ln(1+t))^s} =
> \begin{cases}
> \ln \ln(1+x) - \ln \ln 2, & s = 1, \\\\
> \dfrac{1}{1-s}\left\[(\ln(1+x))^{1-s} - (\ln 2)^{1-s}\right], & s \ne 1.
> \end{cases}
> $$
> 因此 $s \leq 1$ 时原级数发散；$s > 1$ 时原级数收敛.

现在，如果在比较判别法中令 $b\_n = \dfrac{1}{n^s}$ 或 $\dfrac{1}{n \ln n}$ 等，就可以由此进一步得到新的判别法.不过，我们来介绍一个相当一般的判别法，由此出发再得到两个新的判别法.以下仍假设 $\lambda$ 是常数.

### · Kummer 定理

**定理3**（Kummer）．设 $\displaystyle\sum\_{n=1}^{\infty} a\_n$, $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 为正项级数，如果 $n$ 充分大时

(1) $\dfrac{1}{b\_n} \cdot \dfrac{a\_n}{a\_{n+1}} - \dfrac{1}{b\_{n+1}} \geq \lambda > 0$，则 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛；

(2) $\dfrac{1}{b\_n} \cdot \dfrac{a\_n}{a\_{n+1}} - \dfrac{1}{b\_{n+1}} \leq 0$ 且 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 发散，则 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 发散.

> /proof/
>
> (1) 条件可改写为
> $$
> a\_{n+1} \leq \frac{1}{\lambda} \left( \frac{a\_n}{b\_n} - \frac{a\_{n+1}}{b\_{n+1}} \right), \quad \forall n \geq N.
> $$
> 这说明当 $n \geq N$ 时
> $$
> \begin{aligned}
> S\_{n+1} &\leq S\_N + \frac{1}{\lambda} \sum\_{k=N}^{n} \left( \frac{a\_k}{b\_k} - \frac{a\_{k+1}}{b\_{k+1}} \right) \\\\
> &= S\_N + \frac{1}{\lambda} \left( \frac{a\_N}{b\_N} - \frac{a\_{n+1}}{b\_{n+1}} \right) \\\\
> &\leq S\_N + \frac{1}{\lambda} \frac{a\_N}{b\_N},
> \end{aligned}
> $$
> 即 ${S\_n}$ 有上界，从而 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛.
>
> (2) 由
> $$
> \frac{1}{b\_n} \cdot \frac{a\_n}{a\_{n+1}} - \frac{1}{b\_{n+1}} \leq 0
> $$
> 可知
> $$
> \frac{a\_n}{b\_n} \leq \frac{a\_{n+1}}{b\_{n+1}},
> $$
> 即 $\left{\dfrac{a\_n}{b\_n}\right}$ 关于 $n$ 单调递增，从而 $a\_n \geq \dfrac{a\_1}{b\_1} b\_n$，因此由 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 发散知 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 也发散.

> \[!important]
>
> **注意**．
>
> (1) 和前面一样，$\lambda$ 的存在性用极限去判断较容易：
>
> > 设
> > $$
> > \lim\_{n \to \infty} \left( \frac{1}{b\_n} \cdot \frac{a\_n}{a\_{n+1}} - \frac{1}{b\_{n+1}} \right) = \lambda,
> > $$
> > 则 $\lambda > 0$ 时 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛；$\lambda < 0$ 且 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 发散时 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 也发散.
>
> (2) 取 $b\_n = 1$，由 Kummer 判别法就得到了 d'Alembert 判别法.
>
> (3) (Raabe) 取 $b\_n = \dfrac{1}{n}$，则得（$\mu$ 为常数）
>
> > (i) $n \cdot \left( \dfrac{a\_n}{a\_{n+1}} - 1 \right) \geq \mu > 1$ 时 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛；
> >
> > (ii) $n \cdot \left( \dfrac{a\_n}{a\_{n+1}} - 1 \right) \leq 1$ 时 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 发散.
> >
> > Raabe 判别法当然也有极限形式.
>
> (4) (Gauss) 取 $b\_n = \dfrac{1}{n \ln n}$，则得如下判别法：假设（$\theta$ 为常数）
> $$
> (\*) \quad \frac{a\_n}{a\_{n+1}} = 1 + \frac{\theta}{n} + o\left(\frac{1}{n \ln n}\right),
> $$
> 则 $\theta > 1$ 时 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛；$\theta \leq 1$ 时级数发散.
>
> > 事实上，由 Raabe 判别法，只要考虑 $\theta = 1$ 的情形就可以了，此时有
> > $$
> > \begin{aligned}
> > &\lim\_{n \to \infty} \left( \frac{1}{b\_n} \cdot \frac{a\_n}{a\_{n+1}} - \frac{1}{b\_{n+1}} \right) \\\\
> > &= \lim\_{n \to \infty} \left{ n \ln n \left\[1 + \frac{1}{n} + o\left(\frac{1}{n \ln n}\right)\right] - (n+1) \ln(n+1) \right} \\\\
> > &= \lim\_{n \to \infty} (n+1) \ln \frac{n}{n+1} = -1 < 0.
> > \end{aligned}
> > $$
> > 由于 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 发散，故由 Kummer 判别法，级数 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 发散.

/example/ 判别下列级数的敛散性：

(1)
$$
\sum\_{n=1}^{\infty} \frac{n!}{(\alpha+1)(\alpha+2)\cdots(\alpha+n)},\quad \alpha > 0
$$
(2)
$$
\sum\_{n=1}^{\infty} \left(\frac{(2n-1)!!}{(2n)!!}\right)^s \cdot \frac{1}{2n+1}
$$

> (1). 因为
> $$
> \lim\_{n \to \infty} n \cdot \left( \frac{a\_n}{a\_{n+1}} - 1 \right) = \lim\_{n \to \infty} n \cdot \left( \frac{\alpha + n + 1}{n + 1} - 1 \right) = \alpha,
> $$
> 根据 Raabe 判别法，$\alpha > 1$ 时原级数收敛，$\alpha < 1$ 时发散.$\alpha = 1$ 时，$a\_n = \dfrac{1}{n+1}$，此时原级数也发散.
>
> (2) 因为
> $$
> \begin{aligned}
> \frac{a\_n}{a\_{n+1}} &= \left(\frac{2n+2}{2n+1}\right)^s \frac{2n+3}{2n+1} = \left(1 + \frac{1}{2n+1}\right)^s \left(1 + \frac{2}{2n+1}\right) \\\\
> &= \left(1 + \frac{s}{2n+1} + O\left(\frac{1}{n^2}\right)\right)\left(1 + \frac{2}{2n+1}\right) \\\\
> &= 1 + \frac{s+2}{2n+1} + O\left(\frac{1}{n^2}\right) \\\\
> &= 1 + \frac{(s+2)/2}{n} + O\left(\frac{1}{n^2}\right),
> \end{aligned}
> $$
> 根据 Gauss 判别法，当 $s > 0$ 时原级数收敛；$s \leq 0$ 时原级数发散.

最后，我们介绍一个单调递减正项级数的收敛性判别法，它有时可以用来代替积分判别法.

### · Cauchy 凝聚判别法

**Cauchy 凝聚判别法**．设 $a\_n$ 单调递减趋于零.则 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛当且仅当 $\displaystyle\sum\_{k=0}^{\infty} 2^k a\_{2^k}$ 收敛.

> 记 $S\_n = \displaystyle\sum\_{k=1}^{n} a\_n$, $T\_n = \displaystyle\sum\_{k=0}^{n} 2^k a\_{2^k}$.当 $2^k \leq n < 2^{k+1}$ 时，有
> $$
> \begin{aligned}
> S\_n &\geq a\_1 + a\_2 + (a\_3 + a\_4) + \cdots + (a\_{2^{k-1}+1} + \cdots + a\_{2^k}) \\\\
> &\geq a\_1 + a\_2 + 2a\_4 + \cdots + 2^{k-1} a\_{2^k} \\\\
> &\geq \frac{1}{2}(a\_1 + 2a\_2 + \cdots + 2^k a\_{2^k}) \\\\
> &= T\_k / 2.
> \end{aligned}
> $$
> 这说明当 $S\_n$ 有界时，$T\_n$ 也有界，即 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛时 $\displaystyle\sum\_{k=0}^{\infty} 2^k a\_{2^k}$ 也收敛.类似地，有
> $$
> \begin{aligned}
> S\_n &\leq a\_1 + (a\_2 + a\_3) + \cdots + (a\_{2^k} + \cdots + a\_{2^{k+1}-1}) \\\\
> &\leq a\_1 + 2a\_2 + \cdots + 2^k a\_{2^k} \\\\
> &= T\_k.
> \end{aligned}
> $$
> 从而当 $\displaystyle\sum\_{k=0}^{\infty} 2^k a\_{2^k}$ 收敛时 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 也收敛.

/example/ 讨论下列级数的敛散性（$p$ 为实数）：
$$
\sum\_{n=1}^{\infty} \frac{1}{n^p}, \quad \sum\_{n=2}^{\infty} \frac{1}{n(\ln n)^p}.
$$

> 显然，当 $p \leq 0$ 时级数都是发散的.下设 $p > 0$.因为 $a\_n = \dfrac{1}{n^p}$ 单调递减趋于零，由 Cauchy 凝聚判别法，只要考察下面的级数的敛散性：
> $$
> \sum\_{k=0}^{\infty} 2^k \frac{1}{2^{kp}} = \sum\_{k=0}^{\infty} 2^{k(1-p)},
> $$
> 这是几何级数，当 $2^{1-p} < 1$，即 $p > 1$ 时收敛；当 $2^{1-p} \geq 1$，即 $p \leq 1$ 时发散.
>
> 第二个级数可类似处理，考察级数
> $$
> \sum\_{k=1}^{\infty} 2^k \frac{1}{2^k (k \ln 2)^p} = (\ln 2)^{-p} \sum\_{k=1}^{\infty} \frac{1}{k^p},
> $$
> 根据刚才的讨论可知，当 $p > 1$ 时级数收敛，否则级数发散.

## Part 3 一般级数敛散性

利用 Taylor 公式我们曾得到如下等式：

$$
\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots = \sum\_{n=1}^{\infty} (-1)^{n-1} \frac{1}{2n - 1},
$$

$$
\ln 2 = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots = \sum\_{n=1}^{\infty} (-1)^{n-1} \frac{1}{n}.
$$

上面两个级数的特点是正负项交替出现，我们将这样的级数称为交错级数.

### · Leibniz 定理

**定理1 (Leibniz).** 设 $a\_n$ 单调递减趋于 $0$，则级数 $\displaystyle\sum\_{n=1}^{\infty} (-1)^{n-1} a\_n$ 收敛.

> 我们利用 Cauchy 准则来证明.考虑 $S\_{n+p} - S\_n$：
>
> $$
> S\_{n+p} - S\_n = (-1)^n \cdot a\_{n+1} + (-1)^{n+1} a\_{n+2} + \cdots + (-1)^{n+p-1} a\_{n+p}
> $$
>
> $$
> \= (-1)^n \[a\_{n+1} - a\_{n+2} + a\_{n+3} - a\_{n+4} + \cdots + (-1)^{p-1} a\_{n+p}].
> $$
>
> 因此当 $p = 2k - 1$ 时，
>
> $$
> (-1)^n (S\_{n+p} - S\_n) = a\_{n+1} - (a\_{n+2} - a\_{n+3}) - (a\_{n+4} - a\_{n+5}) - \cdots \leq a\_{n+1},
> $$
>
> $$
> (-1)^n (S\_{n+p} - S\_n) = (a\_{n+1} - a\_{n+2}) + (a\_{n+3} - a\_{n+4}) + \cdots + a\_{n+2k-1}
> $$
>
> $$
> \geq 0,
> $$
>
> 这说明
>
> $$
> (\*)\ |S\_{n+p} - S\_n| \leq a\_{n+1} \to 0\ (n \to \infty).
> $$
>
> 当 $p = 2k$ 时，类似地可证上式仍成立.因此原级数收敛.
>
> > 在 $(\*)$ 中令 $p \to \infty$ 得
> >
> > $$
> > |S - S\_n| \leq a\_{n+1},
> > $$
> >
> > 其中 $S = \displaystyle\sum\_{n=1}^{\infty} (-1)^{n-1} a\_n$ 为级数的和，这是交错级数的误差估计.

### · 分部求和

为了得到更一般的结果，我们需要一个分部求和的技巧，这个技巧其实在第二积分中值定理中已经用过了.

**引理2 (分部求和).** 设 ${a\_k}, {b\_k}$ 为数列，则
$$
\sum\_{k=m}^{n-1} a\_{k+1} (b\_{k+1} - b\_k) + \sum\_{k=m}^{n-1} b\_k (a\_{k+1} - a\_k) = a\_n b\_n - a\_m b\_m.
$$

> /proof/
>
> 将欲证左式两项合并，然后利用裂项相消法即可：
> $$
> \sum\_{k=m}^{n-1} a\_{k+1} (b\_{k+1} - b\_k) + \sum\_{k=m}^{n-1} b\_k (a\_{k+1} - a\_k)
> $$
>
> $$
> \= \sum\_{k=m}^{n-1} \[a\_{k+1} b\_{k+1} - a\_{k+1} b\_k + b\_k a\_{k+1} - b\_k a\_k]
> $$
>
> $$
> \= \sum\_{k=m}^{n-1} (a\_{k+1} b\_{k+1} - a\_k b\_k)
> $$
>
> $$
> \= a\_n b\_n - a\_m b\_m.
> $$
>
> 引理证毕.

分部求和公式的简单应用：

如果取 $a\_k = b\_k = k$，代入分部求和公式，得

$$
\sum\_{k=0}^{n-1} (k+1) + \sum\_{k=0}^{n-1} k = n^2 - 0,
$$

即

$$
2 \sum\_{k=1}^{n} k = n^2 + n,
$$

这就得到公式

$$
1 + 2 + \cdots + n = \frac{1}{2} n(n+1).
$$

类似地，如果令 $a\_k = k^2, b\_k = k$ 代入，则得

$$
\sum\_{k=0}^{n-1} (k+1)^2 + \sum\_{k=0}^{n-1} k(2k+1) = n^3,
$$

整理以后就得到公式

$$
1^2 + 2^2 + \cdots + n^2 = \frac{1}{6} n(n+1)(2n+1).
$$

可以用这个办法继续求和.

### · Abel-Dirichlet 判别法

如果约定 $b\_0 = 0$，记

$$
B\_0 = 0,\ B\_k = b\_1 + b\_2 + \cdots + b\_k\quad (k \geq 1),
$$

并用 $B\_k$ 代替上述分部求和公式中的 $b\_k$，则得到

**推论3 (Abel 变换).** 设 $a\_i, b\_i\ (i \geq 1)$ 为两组实数，则有
$$
\sum\_{i=m+1}^{n} a\_i b\_i = \sum\_{i=m+1}^{n-1} (a\_i - a\_{i+1}) B\_i + a\_n B\_n - a\_{m+1} B\_m,\quad \forall\ m \geq 0.
$$

> /proof/
>
> 这可由分部求和公式得到，也可直接计算如下
> $$
> \begin{aligned}
> \sum\_{i=m+1}^{n} a\_i b\_i &= \sum\_{i=m+1}^{n} a\_i (B\_i - B\_{i-1}) = \sum\_{i=m+1}^{n} a\_i B\_i - \sum\_{i=m+1}^{n} a\_i B\_{i-1}\\\\
> &= \sum\_{i=m+1}^{n} a\_i B\_i - \sum\_{i=m}^{n-1} a\_{i+1} B\_i\\\\
> &= \sum\_{i=m+1}^{n-1} (a\_i - a\_{i+1}) B\_i + a\_n B\_n - a\_{m+1} B\_m.
> \end{aligned}
> $$

**推论4 (Abel 引理).** 设 $a\_1, a\_2, \cdots, a\_n$ 为单调数列，且 $|B\_i| \leq M\ (i \geq 1)$，则
$$
\Big|\sum\_{i=m+1}^{n} a\_i b\_i\Big| \leq 2M(|a\_n| + |a\_{m+1}|),\quad \forall\ m \geq 0.
$$

> /proof/
>
> 由 Abel 变换得
> $$
> \Big|\sum\_{i=m+1}^{n} a\_i b\_i\Big| \leq M \sum\_{i=m+1}^{n-1} |a\_i - a\_{i+1}| + M(|a\_n| + |a\_{m+1}|)
> $$
>
> $$
> \= M \Big|\sum\_{i=m+1}^{n-1} (a\_i - a\_{i+1})\Big| + M(|a\_n| + |a\_{m+1}|)
> $$
>
> $$
> \= M|a\_{m+1} - a\_n| + M(|a\_n| + |a\_{m+1}|)
> $$
>
> $$
> \leq 2M(|a\_{m+1}| + |a\_n|).
> $$
>
> 其中，在第一个等号处我们用到了 ${a\_i}$ 的单调性.

**定理5 (Dirichlet).** 设数列 ${a\_n}$ 单调趋于 $0$，级数 $\displaystyle\sum\_{n=1}^{\infty} b\_n$ 的部分和有界，则级数 $\displaystyle\sum\_{n=1}^{\infty} a\_n b\_n$ 收敛.

> /proof/
>
> 由假设，存在 $M > 0$ 使得
> $$
> \Big|\sum\_{i=1}^{n} b\_i\Big| \leq M,\quad \forall\ n \geq 1.
> $$
>
> 由 Abel 变换及其推论，
>
> $$
> \Big|\sum\_{i=n+1}^{n+p} a\_i b\_i\Big| \leq 2M(|a\_{n+1}| + |a\_{n+p}|) \leq 4M|a\_{n+1}| \to 0.
> $$
>
> 由 Cauchy 准则知级数 $\displaystyle\sum\_{n=1}^{\infty} a\_n b\_n$ 收敛.
>
> > **注意.**
> >
> > 如果在 $\[1,+\infty)$ 上分段地定义函数 $f(x), g(x)$ 如下：当 $x \in \[k,k+1)$ 时，令 $f(x) = a\_k,\ g(x) = b\_k,\ k = 1,2,\cdots$.则 $f(x)$ 和 $g(x)$ 满足第七章第三节关于广义积分的 Dirichlet 定理的条件，
> >
> > 因而 $f(x)g(x)$ 在 $\[1,+\infty)$ 上的广义积分收敛，即级数 $\displaystyle\sum\_{n=1}^{\infty} a\_n b\_n$ 收敛.
> >
> > 这说明数项级数的 Dirichlet 定理可以看成广义积分的 Dirichlet 定理的推论.下面的 Abel 定理也是如此.

**定理6 (Abel).** 如果 ${a\_n}$ 为单调有界数列，$\displaystyle\sum\_{n=1}^{\infty} b\_n$ 收敛，则级数 $\displaystyle\sum\_{n=1}^{\infty} a\_n b\_n$ 收敛.

> /proof/
>
> ${a\_n}$ 单调有界意味着极限 $\displaystyle\lim\_{n \to \infty} a\_n = a$ 存在.于是 ${a\_n - a}$ 单调趋于 $0$.由 Dirichlet 判别法，$\displaystyle\sum\_{n=1}^{\infty} (a\_n - a)b\_n$ 收敛.从而级数
> $$
> \sum\_{n=1}^{\infty} a\_n b\_n = \sum\_{n=1}^{\infty} (a\_n - a)b\_n + \sum\_{n=1}^{\infty} a \cdot b\_n
> $$
>
> 也收敛.

/example/ 判断级数 $\displaystyle\sum\_{n=1}^{\infty} \dfrac{1}{n} \sin nx$ 的敛散性.

> $a\_n = \dfrac{1}{n}$ 单调递减趋于 $0$，$b\_n = \sin nx$.利用公式
>
> $$
> 2 \sin \frac{x}{2} \cdot \sin kx = \cos(k - \frac{1}{2})x - \cos(k + \frac{1}{2})x
> $$
>
> 得
>
> $$
> \sum\_{k=1}^{n} b\_n =
> \begin{cases}
> 0, & x = 2k\pi, \\\\
> (\cos \frac{x}{2} - \cos(n + \frac{1}{2})x)/2 \sin \frac{x}{2}, & x \ne 2k\pi.
> \end{cases}
> $$
>
> 即 $b\_n$ 的部分和总是有界的.故由 Dirichlet 判别法知，原级数收敛.

/example/ 设级数 $\displaystyle\sum\_{n=1}^{\infty} n a\_n$ 收敛，证明 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 也收敛.

> 记 $a\_n = \dfrac{1}{n} \cdot (n a\_n)$，而 $\dfrac{1}{n}$ 单调趋于 $0$，$\displaystyle\sum\_{n=1}^{\infty} n a\_n$ 收敛，故由 Abel 判别法，级数 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛.$\square$
>
> 对于更一般的级数，没有普适的判别法，但有时可以转化为正项级数予以处理.

### · 绝对收敛

**定义 (绝对收敛).** 如果 $\displaystyle\sum\_{n=1}^{\infty} |a\_n|$ 收敛，则称 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 绝对收敛（此时，由于
$$
|a\_{n+1} + \cdots + a\_{n+p}| \leq |a\_{n+1}| + \cdots + |a\_{n+p}| \to 0,
$$

故 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 的确为收敛级数）.

如果 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 收敛而 $\displaystyle\sum\_{n=1}^{\infty} |a\_n|$ 发散，则称 $\displaystyle\sum\_{n=1}^{\infty} a\_n$ 条件收敛.

/example/ 判断级数 $\displaystyle\sum\_{n=1}^{\infty} (-1)^{n-1} \dfrac{x^n}{n}\ (x \in \mathbb{R})$ 的敛散性.

> 令 $a\_n = \dfrac{|x|^n}{n}$，则 $\sqrt\[n]{a\_n} \to |x|$.故 $|x| < 1$ 时原级数绝对收敛；
>
> 而 $|x| > 1$ 时显然发散.$x = 1$ 时级数条件收敛；$x = -1$ 时级数发散.
