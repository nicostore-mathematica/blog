---
url: /integral/integral-22/index.md
---
## Part 4 分析学性质

### · 可交换性

我们可以把级数的和看成是其部分和的极限，也就是一个数列极限.

现在考虑这样的问题：如果有一列数项级数，它们的和就是一列数，这一列数的极限有何性质？为此，我们考虑依赖于指标 $i,j$（$i,j = 1,2,\cdots,\infty$）的实数 $a\_{ij}$.

**定义1**（级数的一致收敛）. 一列收敛级数 $\displaystyle\sum\_{j=1}^\infty a\_{ij} = A\_i$ 关于 $i$ 一致收敛是指，任给 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，

$$
\left| \sum\_{j=1}^n a\_{ij} - A\_i \right| < \varepsilon, \quad \forall\ i \geq 1.
$$

**定理1**. 设一列级数 $\displaystyle\sum\_{j=1}^\infty a\_{ij} = A\_i$ 关于 $i$ 一致收敛，如果 $\displaystyle\lim\_{i \to \infty} a\_{ij} = a\_j$（$j \geq 1$），则极限 $\displaystyle\lim\_{i \to \infty} A\_i$ 存在，级数 $\displaystyle\sum\_{j=1}^\infty a\_j$ 收敛，且
$$
\lim\_{i \to \infty} A\_i = \sum\_{j=1}^\infty a\_j,
$$

或改写为

$$
\lim\_{i \to \infty} \sum\_{j=1}^\infty a\_{ij} = \sum\_{j=1}^\infty \lim\_{i \to \infty} a\_{ij}.
$$

> 由一致收敛的定义，任给 $\varepsilon > 0$，存在 $N\_0$，当 $n \geq N\_0$ 时，
>
> $$
> \left| \sum\_{j=1}^n a\_{ij} - A\_i \right| < \frac{1}{4}\varepsilon, \quad \forall\ i \geq 1.
> $$
>
> 因此，当 $m > n \geq N\_0$ 时，
>
> $$
> \left| \sum\_{j=n+1}^m a\_{ij} \right| \leq \left| \sum\_{j=1}^m a\_{ij} - A\_i \right| + \left| \sum\_{j=1}^n a\_{ij} - A\_i \right| < \frac{1}{2}\varepsilon, \quad \forall\ i \geq 1.
> $$
>
> 在上式中令 $i \to \infty$，得
>
> $$
> \left| \sum\_{j=n+1}^m a\_j \right| \leq \frac{1}{2}\varepsilon,
> $$
>
> 由 Cauchy 准则即知级数 $\displaystyle\sum\_{j=1}^\infty a\_j$ 收敛，且在上式中令 $m \to \infty$ 可得
>
> $$
> \left| \sum\_{j=n+1}^\infty a\_j \right| \leq \frac{1}{2}\varepsilon, \quad \forall\ n \geq N\_0.
> $$
>
> 对于 $j = 1,2,\cdots,N\_0$，因为 $a\_{ij} \to a\_j$，故存在 $N$，当 $i > N$ 时，
>
> $$
> |a\_{ij} - a\_j| < \frac{\varepsilon}{4N\_0}, \quad j = 1,2,\cdots,N\_0.
> $$
>
> 因此，当 $i > N$ 时，有
>
> $$
> \begin{aligned}
> \left| A\_i - \sum\_{i=1}^\infty a\_j \right| &\leq \left| A\_i - \sum\_{j=1}^{N\_0} a\_{ij} \right| + \left| \sum\_{j=1}^{N\_0} a\_{ij} - \sum\_{j=1}^{N\_0} a\_j \right| + \left| \sum\_{j=N\_0+1}^\infty a\_j \right| \\\\
> &< \frac{1}{4}\varepsilon + N\_0 \cdot \frac{\varepsilon}{4N\_0} + \frac{1}{2}\varepsilon = \varepsilon.
> \end{aligned}
> $$
>
> 这说明 ${A\_i}$ 的极限存在且极限为 $\displaystyle\sum\_{j=1}^\infty a\_j$.
>
> **注意**. 这个结果给出了求极限与求和这两个运算可交换次序的一个充分条件.

**推论2**. 设 $\displaystyle\lim\_{i \to \infty} a\_{ij} = a\_j$（$j \geq 1$），$|a\_{ij}| \leq b\_j$（$i \geq 1$），且 $\displaystyle\sum\_{j=1}^\infty b\_j$ 收敛，则级数 $\displaystyle\sum\_{j=1}^\infty a\_j$ 收敛，且

$$
\sum\_{j=1}^\infty a\_j = \sum\_{j=1}^\infty \lim\_{i \to \infty} a\_{ij} = \lim\_{i \to \infty} \sum\_{j=1}^\infty a\_{ij}.
$$

> 由 $a\_{ij} \to a\_j$，且 $|a\_{ij}| \leq b\_j$ 知 $|a\_j| \leq b\_j$，$j = 1,2,\cdots$. 因为级数 $\displaystyle\sum\_{j=1}^\infty b\_j$ 收敛，故级数 $\displaystyle\sum\_{j=1}^\infty a\_j$ 绝对收敛. 任给 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，
>
> $$
> 0 \leq \sum\_{j=n+1}^\infty b\_j < \varepsilon.
> $$
>
> 此时，对任意 $i \geq 1$，有
>
> $$
> \left| \sum\_{j=1}^n a\_{ij} - \sum\_{j=1}^\infty a\_{ij} \right| = \left| \sum\_{j=n+1}^\infty a\_{ij} \right| \leq \sum\_{j=n+1}^\infty b\_j < \varepsilon,
> $$
>
> 从而级数 $\displaystyle\sum\_{j=1}^\infty a\_{ij}$ 关于 $i$ 是一致收敛的. 由上一定理知本推论结论成立.
>
> **注意**. 这个结果可以称为级数和的控制收敛定理，$\displaystyle\sum\_{j=1}^\infty b\_j$ 称为控制级数.

**推论3**. 设 $\displaystyle\sum\_{i=1}^\infty |a\_{ij}| \leq A\_j$（$j \geq 1$），且 $\displaystyle\sum\_{j=1}^\infty A\_j$ 收敛，则对任意 $i \geq 1$，级数 $\displaystyle\sum\_{j=1}^\infty a\_{ij}$ 收敛，且
$$
\sum\_{i=1}^\infty \sum\_{j=1}^\infty a\_{ij} = \sum\_{j=1}^\infty \sum\_{i=1}^\infty a\_{ij}.
$$

> 首先，由题设知 $|a\_{ij}| \leq A\_j$，$j = 1,2,\cdots$. 这说明，对任意 $i \geq 1$，级数 $\displaystyle\sum\_{j=1}^\infty a\_{ij}$ 是绝对收敛的. 因为
>
> $$
> \left| \sum\_{i=1}^k a\_{ij} \right| \leq \sum\_{i=1}^k |a\_{ij}| \leq A\_j, \quad j \geq 1.
> $$
>
> 故由上一推论，有
>
> $$
> \begin{align\*}
> \sum\_{i=1}^\infty \sum\_{j=1}^\infty a\_{ij} &= \lim\_{k \to \infty} \sum\_{i=1}^k \sum\_{j=1}^\infty a\_{ij} \\\\
> &= \lim\_{k \to \infty} \sum\_{j=1}^\infty \sum\_{i=1}^k a\_{ij} \\\\
> &= \sum\_{j=1}^\infty \lim\_{k \to \infty} \sum\_{i=1}^k a\_{ij} \\\\
> &= \sum\_{j=1}^\infty \sum\_{i=1}^\infty a\_{ij}.
> \end{align\*}
> $$
>
> 这就证明了本推论.
>
> **注意**. 这个推论给出了两个无穷求和运算可交换次序的一个充分条件.

### · 级数的乘积

现在我们考虑级数的乘法运算性质，对于有限个数的和的乘积，显然有

$$
(a\_0 + a\_1 + \cdots + a\_m)(b\_0 + b\_1 + \cdots + b\_n) = \sum\_{k=0}^{m+n} \sum\_{i+j=k} a\_i b\_j.
$$

对于无穷级数，我们作如下推广：设 $\displaystyle\sum\_{n=0}^\infty a\_n$ 和 $\displaystyle\sum\_{n=0}^\infty b\_n$ 为两个级数，定义它们的乘积为级数 $\displaystyle\sum\_{n=0}^\infty c\_n$，其中

$$
c\_n = \sum\_{i+j=n} a\_i b\_j, \quad n \geq 0.
$$

这种乘积也称为级数的 Cauchy 乘积.

**定理4**（Cauchy）. 如果 $\displaystyle\sum\_{n=0}^\infty a\_n$ 和 $\displaystyle\sum\_{n=0}^\infty b\_n$ 绝对收敛，则它们的乘积级数也绝对收敛，且

$$
\sum\_{n=0}^\infty c\_n = \left( \sum\_{n=0}^\infty a\_n \right) \left( \sum\_{n=0}^\infty b\_n \right).
$$

> \[!important]
>
> **注意**. 在定理的条件下不难看出，将 ${a\_i b\_j}$ 任意排列次序，得到的级数仍（绝对）收敛，且其和不变.
>
> 我们现在将 Cauchy 定理的条件减弱，这时下面的结果仍然成立.

**定理5**（Mertens）. 如果 $\displaystyle\sum\_{n=0}^\infty a\_n$ 和 $\displaystyle\sum\_{n=0}^\infty b\_n$ 收敛，且至少其中一个级数绝对收敛，则它们的乘积级数也收敛，且

$$
\sum\_{n=0}^\infty c\_n = \left( \sum\_{n=0}^\infty a\_n \right) \left( \sum\_{n=0}^\infty b\_n \right).
$$

> 不妨设 $\displaystyle\sum\_{n=0}^\infty a\_n$ 绝对收敛. 分别记
>
> $$
> A\_n = \sum\_{k=0}^n a\_k, \quad B\_n = \sum\_{k=0}^n b\_k, \quad C\_n = \sum\_{k=0}^n c\_k.
> $$
>
> 则 $A\_n \to A$，$B\_n \to B$，而
>
> $$
> C\_n = \sum\_{i+j \leq n} a\_i b\_j = a\_0 B\_n + a\_1 B\_{n-1} + \cdots + a\_n B\_0 = A\_n B + \delta\_n,
> $$
>
> 其中
>
> $$
> \delta\_n = a\_0 (B\_n - B) + a\_1 (B\_{n-1} - B) + \cdots + a\_n (B\_0 - B).
> $$
>
> 我们只要证明 $\delta\_n \to 0$ 即可. 因为 $B\_n \to B$，故 ${B\_n}$ 关于 $n$ 有界，从而存在 $K$，使得
>
> $$
> |B\_n - B| \leq K, \quad \forall\ n \geq 0.
> $$
>
> 由于 $\displaystyle\sum\_{n=0}^\infty a\_n$ 绝对收敛，故任给 $\varepsilon > 0$，存在 $N\_0$，当 $n > N\_0$ 时
>
> $$
> |a\_{N\_0+1}| + \cdots + |a\_n| < \frac{\varepsilon}{2K+1}.
> $$
>
> 记 $L = |a\_0| + |a\_1| + \cdots + |a\_{N\_0}|$. 由于 $B\_n - B \to 0$，故存在 $N\_1$，当 $n > N\_1$ 时
>
> $$
> |B\_n - B| < \frac{\varepsilon}{2L+1}.
> $$
>
> 从而当 $n > N\_0 + N\_1$ 时，有
>
> $$
> \begin{aligned}
> |\delta\_n| &\leq \sum\_{k=0}^{N\_0} |a\_k| |B\_{n-k} - B| + (|a\_{N\_0+1}| + \cdots + |a\_n|) K \\\\
> &\leq \frac{\varepsilon}{2L+1} (|a\_0| + |a\_1| + \cdots + |a\_{N\_0}|) + \frac{\varepsilon}{2K+1} K \\\\
> &= \frac{\varepsilon}{2L+1} L + \frac{\varepsilon}{2K+1} K \\\\
> &< \varepsilon.
> \end{aligned}
> $$
>
> 这说明 $\delta\_n \to 0$，因而 $C\_n = A\_n B + \delta\_n \to AB$.

**注意**. 定理中的绝对收敛的条件不能去掉，反例就是将 $a\_n$ 和 $b\_n$ 均取为交错级数 $(-1)^{n-1} \dfrac{1}{\sqrt{n}}$，此时所得乘积级数是发散的. 但是，如果乘积级数仍然收敛，则其和等于两个级数和的乘积.

为了说明这一点，需要下面的引理.

**引理6**（Abel）. 设级数 $\displaystyle\sum\_{n=0}^\infty c\_n = C$ 收敛，令
$$
f(x) = \sum\_{n=0}^\infty c\_n x^n, \quad x \in \[0,1),
$$

则 $\displaystyle\lim\_{x \to 1^-} f(x) = C$.

> 级数收敛表明 ${c\_n}$ 有界，因此当 $x \in \[0,1)$ 时，$\displaystyle\sum\_{n=0}^\infty c\_n x^n$ 绝对收敛. 记
>
> $$
> C\_{-1} = 0, \quad C\_n = \sum\_{k=0}^n c\_k, \quad n \geq 0.
> $$
>
> 则有
>
> $$
> \begin{aligned}
> \sum\_{k=0}^n c\_k x^k &= \sum\_{k=0}^n (C\_k - C\_{k-1}) x^k \\\\
> &= \sum\_{k=0}^n C\_k x^k - x \sum\_{k=0}^{n-1} C\_k x^k \\\\
> &= C\_n x^n + (1 - x) \sum\_{k=0}^{n-1} C\_k x^k \\\\
> &= C\_n x^n + C(1 - x^n) + (1 - x) \sum\_{k=0}^{n-1} (C\_k - C) x^k.
> \end{aligned}
> $$
>
> 在上式中令 $n \to \infty$ 就得到
>
> $$
> f(x) = C + (1 - x) \sum\_{k=0}^\infty (C\_k - C) x^k.
> $$
>
> 因为 $C\_k - C \to 0$，故任给 $\varepsilon > 0$，存在 $N$，当 $k > N$ 时
>
> $$
> |C\_k - C| < \frac{1}{2}\varepsilon.
> $$
>
> 令 $M = \displaystyle\sum\_{k=0}^N |C\_k - C|$，则有估计
>
> $$
> |f(x) - C| \leq M(1 - x) + (1 - x) \sum\_{k=N+1}^\infty \frac{1}{2}\varepsilon x^k \leq M(1 - x) + \frac{1}{2}\varepsilon.
> $$
>
> 因此，当 $0 < 1 - x < \dfrac{\varepsilon}{2M+1}$ 时，
>
> $$
> |f(x) - C| \leq M \frac{\varepsilon}{2M+1} + \frac{1}{2}\varepsilon < \varepsilon.
> $$
>
> 这说明 $\displaystyle\lim\_{x \to 1^-} f(x) = C$.

**定理7**（Abel）. 设级数 $\displaystyle\sum\_{n=0}^\infty a\_n$，$\displaystyle\sum\_{n=0}^\infty b\_n$ 以及它们的乘积 $\displaystyle\sum\_{n=0}^\infty c\_n$ 均收敛，则

$$
\sum\_{n=0}^\infty c\_n = \left( \sum\_{n=0}^\infty a\_n \right) \left( \sum\_{n=0}^\infty b\_n \right).
$$

> 当 $x \in \[0,1)$ 时，级数 $\displaystyle\sum\_{n=0}^\infty a\_n x^n$ 和 $\displaystyle\sum\_{n=0}^\infty b\_n x^n$ 绝对收敛，它们的乘积级数为 $\displaystyle\sum\_{n=0}^\infty c\_n x^n$. 根据 Cauchy 定理，有
>
> $$
> \sum\_{n=0}^\infty c\_n x^n = \left( \sum\_{n=0}^\infty a\_n x^n \right) \left( \sum\_{n=0}^\infty b\_n x^n \right).
> $$
>
> 令 $x \to 1^-$，由上述 Abel 引理即得欲证结论.

### ·  乘积级数

我们将级数定义中的加法运算改为乘积运算，就可以得到一种新的级数，它们的性质与加法级数的性质十分类似. 为此，设

$$
p\_1, p\_2, \cdots, p\_n, \cdots
$$

是一列实数，我们将形式积

$$
\prod\_{n=1}^\infty p\_n = p\_1 \cdot p\_2 \cdots p\_n \cdots
$$

称为无穷乘积. 记

$$
P\_n = \prod\_{k=1}^n p\_k, \quad n \geq 1
$$

称为部分乘积. 如果数列 ${P\_n}$ 的极限存在，且极限为有限或为正无穷，或为负无穷，则此极限称为无穷乘积的值，记为

$$
\prod\_{n=1}^\infty p\_n = \lim\_{n \to \infty} P\_n.
$$

当极限为有限且非零时，称无穷乘积是收敛的，否则就称它是发散的.

如果某个 $p\_n$ 为零，则显然无穷乘积为零. 下面我们假设 $p\_n$ 均为非零实数. 设无穷乘积 $\displaystyle\prod\_{n=1}^\infty p\_n$ 收敛，则

$$
\lim\_{n \to \infty} p\_n = \lim\_{n \to \infty} \frac{P\_n}{P\_{n-1}} = P/P = 1,
$$

特别地，当 $n$ 充分大时，必有 $p\_n > 0$. 因为去掉有限项后不影响敛散性，因此下面进一步假设 $p\_n > 0$，$\forall\ n \geq 1$.

由于

$$
P\_n = \prod\_{k=1}^n p\_k = e^{\sum\_{k=1}^n \ln p\_k},
$$

因此，我们可以将无穷乘积化为无穷级数加以讨论，我们有

**命题8**. 设 $p\_n > 0$，$\forall\ n \geq 1$. 则

(1) 无穷乘积 $\displaystyle\prod\_{n=1}^\infty p\_n$ 收敛当且仅当级数 $\displaystyle\sum\_{n=1}^\infty \ln p\_n$ 收敛，且
$$
\prod\_{n=1}^\infty p\_n = e^{\sum\_{n=1}^\infty \ln p\_n};
$$

(2) 记 $p\_n = 1 + a\_n$. 如果 $n$ 充分大时 $a\_n > 0$（或 $a\_n < 0$），则无穷乘积 $\displaystyle\prod\_{n=1}^\infty p\_n$ 收敛当且仅当级数 $\displaystyle\sum\_{n=1}^\infty a\_n$ 收敛；

(3) 如果级数 $\displaystyle\sum\_{n=1}^\infty a\_n$ 和 $\displaystyle\sum\_{n=1}^\infty a\_n^2$ 均收敛，则无穷乘积 $\displaystyle\prod\_{n=1}^\infty (1 + a\_n)$ 也收敛.

> (1) 是显然的. (2) 只要利用
>
> $$
> \lim\_{n \to \infty} \frac{\ln(1 + a\_n)}{a\_n} = 1
> $$
>
> 以及数项级数的比较判别法即可. (3) 则是利用（$a\_n$ 不为零时）
>
> $$
> \lim\_{n \to \infty} \frac{\[a\_n - \ln(1 + a\_n)]}{a\_n^2} = \frac{1}{2}
> $$
>
> 以及 (1).

### · 级数的重排

现在我们讨论将级数的各项重新排列次序后得到的新级数的收敛和发散性质.

首先，如果 $\displaystyle\sum\_{n=1}^\infty a\_n$ 为正项级数，则由基本判别法不难看出，将它的各项重新排列后不会影响其敛散性.

如果收敛的话，重排也不改变级数的和.

对于一般的级数，如果 $\displaystyle\sum\_{n=1}^\infty a\_n$ 绝对收敛，则重排后的级数也绝对收敛，且其和不变. 这可以从等式

$$
a\_n = \frac{a\_n + |a\_n|}{2} - \frac{|a\_n| - a\_n}{2} = a\_n^+ - a\_n^-
$$

以及正项级数 $\displaystyle\sum\_{n=1}^\infty a\_n^+$, $\displaystyle\sum\_{n=1}^\infty a\_n^-$ 的收敛性推出.

如果 $\displaystyle\sum\_{n=1}^\infty a\_n$ 条件收敛，则级数重排后即使收敛，它的和也可能变化.

实际上，对于条件收敛的级数，可以将它重排使得其和为任意实数.

**定理9**（Riemann）. 如果 $\displaystyle\sum\_{n=1}^\infty a\_n$ 为条件收敛的级数，则可以将它重排为一个收敛级数，使得重排后的级数和为任意指定的实数.

> 设 $\xi \in \mathbb{R}$，我们将找到 $\displaystyle\sum\_{n=1}^\infty a\_n$ 的一个重排，使得它的和为 $\xi$.
>
> 首先我们注意到，如果 $\displaystyle\sum\_{n=1}^\infty a\_n$ 条件收敛，则 $\displaystyle\sum\_{n=1}^\infty |a\_n|$ 发散.
>
> 由 $|a\_n| = a\_n^+ + a\_n^-$, $a\_n = a\_n^+ - a\_n^-$ 即知，级数 $\displaystyle\sum\_{n=1}^\infty a\_n^+$ 和 $\displaystyle\sum\_{n=1}^\infty a\_n^-$ 均发散到 $+\infty$. 这两个级数的部分和分别记为 $S\_n^+$ 和 $S\_n^-$. 因为当 $n$ 充分大时 $S\_n^+ > \xi$，故可取最小的正整数 $m\_1$，使得
> $$
> S\_{m\_1}^+ > \xi,
> $$
>
> 此时成立
>
> $$
> \xi \geq S\_{m\_1}^+ - a\_{m\_1}^+.
> $$
>
> 因为 $n$ 充分大时，$S\_{m\_1}^+ - S\_n^- < \xi$，故可取最小的正整数 $n\_1$，使得
>
> $$
> S\_{m\_1}^+ - S\_{n\_1}^- < \xi,
> $$
>
> 同理有
>
> $$
> \xi \leq S\_{m\_1}^+ - S\_{n\_1}^- + a\_{n\_1}^-.
> $$
>
> 下面再取最小的正整数 $m\_2$，使得
>
> $$
> S\_{m\_2}^+ - S\_{n\_1}^- > \xi \geq S\_{m\_2}^+ - S\_{n\_1}^- - a\_{m\_2}^+,
> $$
>
> 以及最小的正整数 $n\_2$，使得
>
> $$
> S\_{m\_2}^+ - S\_{n\_2}^- < \xi \leq S\_{m\_2}^+ - S\_{n\_2}^- + a\_{n\_2}^-.
> $$
>
> 如此继续下去，我们得到递增数列 $m\_1 < m\_2 < \cdots$ 和 $n\_1 < n\_2 < \cdots$，使得
>
> $$
> S\_{m\_k}^+ - S\_{n\_{k-1}}^- > \xi \geq S\_{m\_k}^+ - S\_{n\_{k-1}}^- - a\_{m\_k}^+
> $$
>
> 和
>
> $$
> S\_{m\_k}^+ - S\_{n\_k}^- < \xi \leq S\_{m\_k}^+ - S\_{n\_k}^- + a\_{n\_k}^+
> $$
>
> 对任意 $k$ 均成立. 由 $a\_n \to 0$ 即知，下面的级数
>
> $$
> \begin{aligned}
> \&a\_1^+ + \cdots + a\_{m\_1}^+ - a\_1^- - \cdots - a\_{n\_1}^- + a\_{m\_1+1}^+ + \cdots + a\_{m\_2}^+ \\\\
> &- a\_{n\_1+1}^- - \cdots - a\_{n\_2}^- + a\_{m\_2+1}^+ + \cdots + a\_{m\_3}^+ - a\_{n\_2+1}^- - \cdots
> \end{aligned}
> $$
>
> 收敛到 $\xi$. 注意 $a\_n^+$ 和 $a\_n^-$ 在这个级数中都依次出现了，因此它可以看成是原级数 $\displaystyle\sum\_{n=1}^\infty a\_n$ 的一个重排.

**注意**. 如果 $\displaystyle\sum\_{n=1}^\infty a\_n$ 条件收敛，则可以将它重排为发散到 $+\infty$ 或 $-\infty$ 的级数

结束.
