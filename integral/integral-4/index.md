---
url: /integral/integral-4/index.md
---
## Part 2 单调数列极限

在一般情况下，数列极限无法确切地计算出来，并且有时我们也不需要知道极限的准确值，只需判断极限是否存在以及了解极限的一个基本性质即可.

现在我们就给出一种特殊情况下数列极限存在性的判别法，它依赖于实数的一个基本性质，即在第一章中我们已经提到过的**确界原理**：非空的数集如果有上界则必有上确界，如果有下界则必有下确界.

设 ${a\_n}$ 为实数列，如果
$$
a\_1 \leq a\_2 \leq \cdots \leq a\_n \leq \cdots,
$$
则称 ${a\_n}$ 是单调递增数列，当上式中的“$\leq$”号换成“$<$”号时称 ${a\_n}$ 是严格单调递增的；如果
$$
a\_1 \geq a\_2 \geq \cdots \geq a\_n \geq \cdots,
$$
则称 ${a\_n}$ 是单调递减数列，当上式中的“$\geq$”号换成“$>$”号时称 ${a\_n}$ 是严格单调递减的；单调递增数列和单调递减数列统称为单调数列.

### · 单调数列的极限

**定理1**：设 ${a\_n}$ 为单调数列.

(1) 如果 ${a\_n}$ 为单调递增数列，则
$$
\lim\_{n \to \infty} a\_n = \sup{a\_k \mid k \geq 1};
$$

(2) 如果 ${a\_n}$ 为单调递减数列，则
$$
\lim\_{n \to \infty} a\_n = \inf{a\_k \mid k \geq 1}.
$$

> (1) 记 $M = \sup{a\_k \mid k \geq 1}$，先考虑 $M$ 有限的情形. 任给 $\varepsilon > 0$，由上确界的定义，存在 $a\_N$，使得
> $$
> M - \varepsilon < a\_N \leq M.
> $$
> 因为 ${a\_n}$ 是单调递增数列，故当 $n > N$ 时
> $$
> M - \varepsilon < a\_N \leq a\_n \leq M < M + \varepsilon,
> $$
> 由数列极限的定义即知
> $$
> \lim\_{n \to \infty} a\_n = M = \sup{a\_k \mid k \geq 1}.
> $$
>
> 如果 $M = +\infty$，则任给 $A > 0$，由上确界的定义，存在 $a\_N$，使得 $a\_N > A$. 由于 ${a\_n}$ 是单调递增数列，故当 $n > N$ 时有 $a\_n \geq a\_N > A$，从而
> $$
> \lim\_{n \to \infty} a\_n = +\infty = \sup{a\_k \mid k \geq 1}.
> $$
>
> (2) 可同 (1) 一样类似证明，也可考虑 ${-a\_n}$ 然后直接利用 (1).

### · 单调有界定理

从定理立即得到下面的推论：

**推论2**：单调有界数列必有（有限）极限.

/example/  任何收敛数列都有单调的收敛子列.

> 设 ${a\_n}$ 收敛到 $A$. 如果 ${a\_n}$ 中有无限项等于 $A$，则它们构成了所需单调子列.
>
> 否则，考虑 ${a\_n}$ 中下面两类项：一类满足条件 $a\_n < A$，另一类满足条件 $a\_n > A$. 这两类中至少有一类含有无限项，不妨设含有无限项 ${a\_n}$ 满足条件 $a\_n < A$，他们构成了一个收敛子列.
>
> 为了简单起见，下面我们假设 $a\_n < A,\ \forall\ n \geq 1$. 我们要从 ${a\_n}$ 中找一个单调递增的子列出来.
>
> 这个子列可以这样构造：取 $n\_1 = 1$. 由于 $\displaystyle\lim\_{n \to \infty} a\_n = A$，故存在 $n\_2 > n\_1 = 1$，使得 $a\_{n\_2} \in (a\_1, A)$. 同理，存在 $n\_3 > n\_2$，使得 $a\_{n\_3} \in (a\_{n\_2}, A)$. 如此继续，我们就找到了（严格）单调递增的子列 ${a\_{n\_k}}$.

/example/  设 $a\_1 = 1$, $a\_{n+1} = \dfrac{1}{1 + a\_n},\ n \geq 1$. 研究数列 ${a\_n}$ 的极限.

> 利用数学归纳法易见 $\dfrac{1}{2} \leq a\_n \leq 1$，并且 ${a\_{2k-1}}$ 单调递减，${a\_{2k}}$ 单调递增，因此它们都是收敛的，极限分别记为 $A, B$，则
> $$
> B = \lim\_{k \to \infty} a\_{2k} = \lim\_{k \to \infty} \frac{1}{1 + a\_{2k-1}} = \frac{1}{1 + A},
> $$
>
> $$
> A = \lim\_{k \to \infty} a\_{2k+1} = \lim\_{k \to \infty} \frac{1}{1 + a\_{2k}} = \frac{1}{1 + B}.
> $$
>
> 从上式解出唯一的正解 $A = B = \dfrac{\sqrt{5} - 1}{2}$，因此 ${a\_n}$ 的极限为 $\dfrac{\sqrt{5} - 1}{2}$.
>
> 下面我们讨论本课程中的一个重要极限. 考虑
> $$
> a\_n = \left(1 + \frac{1}{n}\right)^n,\quad b\_n = \left(1 + \frac{1}{n}\right)^{n+1},\quad n \geq 1.
> $$
> 我们来说明 ${a\_n}$ 是严格单调递增的，${b\_n}$ 是严格单调递减的. 事实上，
> $$
> \begin{aligned}
> a\_n &= \left(1 + \frac{1}{n}\right)^n = \sum\_{k=0}^{n} \binom{n}{k} \frac{1}{n^k} \\\\
> &= 1 + \sum\_{k=1}^{n} \frac{n(n-1)\cdots(n-k+1)}{k!} \cdot \frac{1}{n^k} \\\\
> &= 1 + 1 + \frac{1}{2!}\left(1 - \frac{1}{n}\right) + \cdots + \frac{1}{n!}\left(1 - \frac{1}{n}\right)\cdots\left(1 - \frac{n-1}{n}\right) \\\\
> &< 1 + 1 + \frac{1}{2!}\left(1 - \frac{1}{n+1}\right) + \cdots + \frac{1}{n!}\left(1 - \frac{1}{n+1}\right)\cdots\left(1 - \frac{n-1}{n+1}\right) \\\\
> &\quad + \frac{1}{(n+1)!}\left(1 - \frac{1}{n+1}\right)\cdots\left(1 - \frac{n}{n+1}\right) \\\\
> &= a\_{n+1}.
> \end{aligned}
> $$
> 这说明 ${a\_n}$ 严格递增. 另一方面，当 $n > 1$ 时，有
> $$
> \begin{aligned}
> 0 < a\_n &< 1 + 1 + \sum\_{k=2}^{n} \frac{1}{k!} \\\\
> &\leq 2 + \sum\_{k=2}^{n} \frac{1}{(k-1)k} \\\\
> &= 2 + \sum\_{k=2}^{n} \left(\frac{1}{k-1} - \frac{1}{k}\right) = 3 - \frac{1}{n} < 3.
> \end{aligned}
> $$
> 因此 ${a\_n}$ 收敛，其极限记为 $e$，称为自然对数的基底. 我们在第五章第七节中将证明这是一个无理数，计算表明（关于近似计算，请参考本书第五章第八节以及第九章第四节）：
>
> $$
> e = 2.7182818284590\cdots.
> $$
>
> 另一方面，由
> $$
> \left(1 + \frac{1}{n-1}\right)^n = \left(1 + \frac{1}{n^2 - 1}\right)^n > 1 + \frac{n}{n^2 - 1} > 1 + \frac{1}{n}
> $$
> 得
> $$
> b\_{n-1} = \left(1 + \frac{1}{n-1}\right)^n > \left(1 + \frac{1}{n}\right)^{n+1} = b\_n,
> $$
> 即 ${b\_n}$ 严格单调递减，且
> $$
> \lim\_{n \to \infty} b\_n = \lim\_{n \to \infty} a\_n \left(1 + \frac{1}{n}\right) = \lim\_{n \to \infty} a\_n = e.
> $$
>
> 因此有下面的不等式：
> $$
> \left(1 + \frac{1}{n}\right)^n < \left(1 + \frac{1}{n+1}\right)^{n+1} < e < \left(1 + \frac{1}{n+1}\right)^{n+2} < \left(1 + \frac{1}{n}\right)^{n+1},\quad \forall, n \geq 1.
> $$

下面，我们利用单调数列来研究一般的有界数列. 设 ${a\_n}$ 为有界数列，我们要研究它的收敛性. 我们不知道 $a\_n$ 是否逐渐趋于某个数，一个好的想法就是去考虑 $n$ 很大时 ${a\_n}$ 中“最大”的项和“最小”的项，看看它们是否相近. 当然，“最大”和“最小”项不一定存在，但我们可以用“上确界”和“下确界”来分别代替它们. 为此，令
$$
\underline{a}\_n = \inf{a\_k \mid k \geq n},\quad \overline{a}\_n = \sup{a\_k \mid k \geq n}.
$$

${\underline{a}\_n}$ 和 ${\overline{a}\_n}$ 分别是单调递增和单调递减的数列，且
$$
\underline{a}\_n \leq a\_n \leq \overline{a}\_n.
$$

单调数列 ${\underline{a}*n}$ 和 ${\overline{a}*n}$ 的极限分别称为 ${a\_n}$ 的**下极限**和**上极限**，记为
$$
\liminf*{n \to \infty} a\_n = \lim*{n \to \infty} \underline{a}*n,\quad \limsup*{n \to \infty} a\_n = \lim\_{n \to \infty} \overline{a}\_n.
$$

**命题4**：设 ${a\_n}, {b\_n}$ 为有界数列.

(1) 如果存在 $N\_0$，当 $n > N\_0$ 时 $a\_n \geq b\_n$，则
$$
\lim\_{n \to \infty} a\_n \geq \liminf\_{n \to \infty} b\_n,\quad \limsup\_{n \to \infty} a\_n \geq \limsup\_{n \to \infty} b\_n;
$$

(2)
$$
\limsup\_{n \to \infty} (a\_n + b\_n) \leq \limsup\_{n \to \infty} a\_n + \limsup\_{n \to \infty} b\_n.
$$

> (1) 当 $n > N\_0$ 时，
> $$
> b\_n \leq b\_k \leq a\_k,\quad \forall, k \geq n.
> $$
> 关于 $k$ 取下确界，得
> $$
> b\_n \leq \underline{a}*n,\quad \forall, n > N\_0.
> $$
> 由极限的保序性即得
> $$
> \liminf*{n \to \infty} b\_n \leq \liminf\_{n \to \infty} a\_n.
> $$
> 上极限的情形可类似证明.
>
> (2) 利用不等式 $a\_n + b\_n \leq \overline{a}\_n + \overline{b}\_n$ 以及极限的保序性即可

## Part 3 Cauchy 准则

在前一节我们对于单调数列给出了极限存在性的判别方法. 现在我们对一般的数列给出极限存在与否的一个判别方法，基本的想法与考虑上下极限时是类似的：如果 $a\_n$ 逐渐趋于某个数，则 $n$ 很大时 $a\_n$ 之间的差别应该很小. 为此我们引入下面的定义.

### · Cauchy 数列

**定义1**：设 ${a\_n}$ 为数列，如果任给 $\varepsilon > 0$，均存在 $N = N(\varepsilon)$，当 $m, n > N$ 时，有
$$
|a\_m - a\_n| < \varepsilon,
$$
则称 ${a\_n}$ 为 **Cauchy 数列** 或 **基本列**.

/example/  对于 $n \geq 1$，定义
$$
a\_n = 1 + \frac{1}{2\sqrt{2}} + \cdots + \frac{1}{n\sqrt{n}},
$$
则 ${a\_n}$ 是 Cauchy 列.

> /proof/
>
> 首先我们注意到不等式
> $$
> \frac{1}{\sqrt{n}} - \frac{1}{\sqrt{n+1}} = \frac{\sqrt{n+1} - \sqrt{n}}{\sqrt{n(n+1)}} = \frac{1}{\sqrt{n(n+1)},(\sqrt{n+1} + \sqrt{n})} > \frac{1}{2(n+1)\sqrt{n+1}},
> $$
> 因此，当 $m > n$ 时，
> $$
> \begin{aligned}
> a\_m - a\_n &= \frac{1}{(n+1)\sqrt{n+1}} + \cdots + \frac{1}{m\sqrt{m}} \\\\
> &< 2\left(\frac{1}{\sqrt{n}} - \frac{1}{\sqrt{n+1}}\right) + 2\left(\frac{1}{\sqrt{n+1}} - \frac{1}{\sqrt{n+2}}\right) + \cdots \\\\
> &= \frac{2}{\sqrt{n}} - \frac{2}{\sqrt{m}} < \frac{2}{\sqrt{n}}.
> \end{aligned}
> $$
>
> 由此可以看出 ${a\_n}$ 是 Cauchy 列.

**命题2**：Cauchy 数列必定是有界数列.

> /proof/
>
> 按定义，取 $\varepsilon = 1$，则存在 $N$，当 $m, n > N$ 时，有
> $$
> |a\_m - a\_n| < 1.
> $$
>
> 令
> $$
> M = \max\left{|a\_k| + 1 ,\middle|, 1 \leq k \leq N + 1\right},
> $$
> 则当 $n \leq N$ 时显然 $|a\_n| \leq M$；而当 $n > N$ 时，有
> $$
> |a\_n| \leq |a\_n - a\_{N+1}| + |a\_{N+1}| < 1 + |a\_{N+1}| \leq M,
> $$
> 这说明 ${a\_n}$ 是有界数列

下面的定理是本节主要结果，它反映了实数系的完备性质.

### · Cauchy 准则

**定理3**：（Cauchy 准则）

${a\_n}$ 为 Cauchy 数列当且仅当它是收敛的.

> /proof/
>
> **充分性**：设 ${a\_n}$ 收敛到 $A$. 则任给 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，有
> $$
> |a\_n - A| < \frac{1}{2}\varepsilon,
> $$
> 因此，当 $m, n > N$ 时，有
> $$
> |a\_m - a\_n| \leq |a\_m - A| + |A - a\_n| < \frac{1}{2}\varepsilon + \frac{1}{2}\varepsilon = \varepsilon,
> $$
> 这说明 ${a\_n}$ 为 Cauchy 数列.
>
> **必要性**：设 ${a\_n}$ 为 Cauchy 数列，由命题 2.3.1，${a\_n}$ 是有界数列，记 $A$ 为其上极限. 我们来说明 ${a\_n}$ 收敛到 $A$.
>
> 事实上，由于 ${a\_n}$ 为 Cauchy 数列，任给 $\varepsilon > 0$，存在 $N$，当 $m, n > N$ 时，有
> $$
> |a\_m - a\_n| < \frac{1}{2}\varepsilon,
> $$
> 即
> $$
> -\frac{1}{2}\varepsilon < a\_m - a\_n < \frac{1}{2}\varepsilon,\quad \forall, m, n > N.
> $$
>
> 在上式中令 $m \to \infty$，利用上极限的保序性，得
> $$
> -\frac{1}{2}\varepsilon \leq \varlimsup\_{m \to \infty} a\_m - a\_n \leq \frac{1}{2}\varepsilon,\quad \forall, n > N,
> $$
> 即
> $$
> |A - a\_n| \leq \frac{1}{2}\varepsilon < \varepsilon,\quad \forall, n > N,
> $$
> 这说明 ${a\_n}$ 收敛到 $A$.

(1) Cauchy 列未必是单调数列，例如数列 $\left{a\_n = \dfrac{(-1)^n}{n}\right}$ 就是这样的例子.

(2) Cauchy 准则的重要性在于，在不了解数列的单调性或极限的具体形式时往往也能判断极限的存在性. 以后凡是涉及极限的场合都有相应的 Cauchy 准则.

## Part 4 Stolz 公式

这个定理实际上是 L'Hospital 法则的离散版本，它可以用來处理满足特定条件的两个数列的商的极限

**引理1**：设 $b\_k > 0$（$1 \leq k \leq n$），且\
$$
m \leq \frac{a\_k}{b\_k} \leq M, \quad \forall, 1 \leq k \leq n,
$$
则有\
$$
m \leq \frac{a\_1 + a\_2 + \cdots + a\_n}{b\_1 + b\_2 + \cdots + b\_n} \leq M.
$$

> /proof/
>
> 由已知条件，得\
> $$
> m b\_k \leq a\_k \leq M b\_k, \quad \forall, 1 \leq k \leq n.
> $$
>
> 将这些不等式从 $k = 1$ 到 $n$ 加起来，即得\
> $$
> m(b\_1 + b\_2 + \cdots + b\_n) \leq (a\_1 + a\_2 + \cdots + a\_n) \leq M(b\_1 + b\_2 + \cdots + b\_n),
> $$
>
> 由此易得欲证不等式.

**定理2**（Stolz 公式之一）

设 ${x\_n}, {y\_n}$ 为数列，且 ${y\_n}$ 严格单调地趋于 $+\infty$. 如果\
$$
\lim\_{n \to \infty} \frac{x\_n - x\_{n-1}}{y\_n - y\_{n-1}} = A,
$$
则\
$$
\lim\_{n \to \infty} \frac{x\_n}{y\_n} = A.
$$

> /proof/
>
> 分情况讨论
>
> **(1)** $A$ 为有限实数. 任给 $\varepsilon > 0$，由已知条件，存在 $N$，当 $n > N$ 时，有\
> $$
> A - \varepsilon < \frac{x\_n - x\_{n-1}}{y\_n - y\_{n-1}} < A + \varepsilon.
> $$
>
> 利用上面的引理，当 $n > N$ 时，有\
> $$
> A - \varepsilon < \frac{x\_n - x\_N}{y\_n - y\_N} = \frac{(x\_n - x\_{n-1}) + \cdots + (x\_{N+1} - x\_N)}{(y\_n - y\_{n-1}) + \cdots + (y\_{N+1} - y\_N)} < A + \varepsilon,
> $$
>
> 从而有\
> $$
> \left| \frac{x\_n}{y\_n} - A \right| = \left| \left( \frac{x\_n - x\_N}{y\_n - y\_N} - A \right) \frac{y\_n - y\_N}{y\_n} + \frac{x\_N - A y\_N}{y\_n} \right| \leq \varepsilon + \frac{|x\_N - A y\_N|}{|y\_n|}.
> $$
>
> 在上式中令 $n \to \infty$，利用 $y\_n \to +\infty$，得\
> $$
> \varlimsup\_{n \to \infty} \left| \frac{x\_n}{y\_n} - A \right| \leq \varepsilon,
> $$
>
> 因为 $\varepsilon$ 是任意取的，故有\
> $$
> \lim\_{n \to \infty} \left| \frac{x\_n}{y\_n} - A \right| \leq \lim\_{n \to \infty} \left| \frac{x\_n}{y\_n} - A \right| = 0,
> $$
>
> 这说明\
> $$
> \lim\_{n \to \infty} \frac{x\_n}{y\_n} = A.
> $$
>
> **(2)** $A = +\infty$. 此时，存在 $N$，当 $n > N$ 时\
> $$
> \frac{x\_n - x\_{n-1}}{y\_n - y\_{n-1}} > 1,
> $$
>
> 即\
> $$
> x\_n - x\_{n-1} > (y\_n - y\_{n-1}) > 0, \quad \forall, n > N.
> $$
>
> 特别地，$n > N$ 时 ${x\_n}$ 也是严格单调递增的，且\
> $$
> \begin{aligned}
> x\_n - x\_N &= (x\_n - x\_{n-1}) + \cdots + (x\_{N+1} - x\_N) \\\\
> &> (y\_n - y\_{n-1}) + \cdots + (y\_{N+1} - y\_N) = y\_n - y\_N,
> \end{aligned}
> $$
>
> 由 $y\_n \to +\infty$ 得 $x\_n \to +\infty$. 将 (1) 中 $x\_n$ 和 $y\_n$ 的位置互换，得\
> $$
> \lim\_{n \to \infty} \frac{y\_n}{x\_n} = \lim\_{n \to \infty} \frac{y\_n - y\_{n-1}}{x\_n - x\_{n-1}} = \lim\_{n \to \infty} \left( \frac{x\_n - x\_{n-1}}{y\_n - y\_{n-1}} \right)^{-1} = 0,
> $$
>
> 于是有\
> $$
> \lim\_{n \to \infty} \frac{x\_n}{y\_n} = \lim\_{n \to \infty} \left( \frac{y\_n}{x\_n} \right)^{-1} = +\infty.
> $$
>
> **(3)** $A = -\infty$. 这时只要将 $x\_n$ 换成 $-x\_n$，然后利用 (2) 即可.

**定理3**（Stolz 公式之二）

设数列 ${y\_n}$ 严格单调递减趋于 $0$，数列 ${x\_n}$ 也收敛到 $0$. 如果\
$$
\lim\_{n \to \infty} \frac{x\_n - x\_{n+1}}{y\_n - y\_{n+1}} = A,
$$
则\
$$
\lim\_{n \to \infty} \frac{x\_n}{y\_n} = A.
$$

> /proof/
>
> **(1)** $A$ 为有限实数. 我们将极限的条件改写为\
> $$
> \lim\_{n \to \infty} \frac{x\_n - x\_{n+1}}{y\_n - y\_{n+1}} = A.
> $$
>
> 任给 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，有\
> $$
> A - \varepsilon < \frac{x\_n - x\_{n+1}}{y\_n - y\_{n+1}} < A + \varepsilon.
> $$
>
> 和上面定理中 (1) 的证明一样，当 $m > n > N$ 时，有\
> $$
> (A - \varepsilon)(y\_n - y\_m) \leq (x\_n - x\_m) \leq (A + \varepsilon)(y\_n - y\_m).
> $$
>
> 令 $m \to \infty$，得\
> $$
> (A - \varepsilon)y\_n \leq x\_n \leq (A + \varepsilon)y\_n, \quad \forall, n > N,
> $$
>
> 即\
> $$
> A - \varepsilon \leq \frac{x\_n}{y\_n} \leq A + \varepsilon, \quad \forall, n > N,
> $$
>
> 这说明 $x\_n / y\_n \to A$（$n \to \infty$）.
>
> **(2)** $A = +\infty$. 任给 $M > 0$，存在 $N$，当 $n > N$ 时，有\
> $$
> \frac{x\_n - x\_{n+1}}{y\_n - y\_{n+1}} > M.
> $$
>
> 类似上面的证明，当 $m > n > N$ 时，有\
> $$
> x\_n - x\_m > M(y\_n - y\_m).
> $$
>
> 令 $m \to \infty$，得\
> $$
> x\_n > M y\_n, \quad \forall, n > N,
> $$
>
> 即\
> $$
> \frac{x\_n}{y\_n} > M, \quad \forall, n > N,
> $$
>
> 这说明 $x\_n / y\_n \to +\infty$（$n \to \infty$）.
>
> **(3)** $A = -\infty$. 将 (2) 中 $x\_n$ 换成 $-x\_n$ 即可

结束.
