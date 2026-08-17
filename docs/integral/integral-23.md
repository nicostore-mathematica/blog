---
title: Lesson 23 函数项级数 I
permalink: /integral/integral-23/
createTime: 2026/08/17 14:17:23
---

## Part 1 分析学性质

在对函数作 Taylor 展开时，自然就出现了以函数为一般项的无穷级数. 这种对于一列函数的无穷求和也可以看成是关于函数的运算，跟积分运算一样，它提供了构造非初等函数的手段. 

### · 一致收敛

设 $I$ 为区间，$\{g_n(x)\}$ 为 $I$ 中定义的一列函数. 如果存在 $I$ 中的函数 $g(x)$ 使得

$$
\lim_{n \to \infty} g_n(x_0) = g(x_0), \quad \forall\ x_0 \in I,
$$

则称函数列 $\{g_n\}$ 收敛于 $g$，记为 $\displaystyle\lim_{n \to \infty} g_n = g$ 或 $g_n \to g\ (n \to \infty)$. 

/example/

> 考虑 $g_n(x) = x^n$, $x \in (0,1)$. 因为对任意固定的 $x_0 \in (0,1)$，均有
>
> $$
> \lim_{n \to \infty} x_0^n = 0,
> $$
>
> 故 $\displaystyle\lim_{n \to \infty} g_n = 0$. 

**定义1（一致收敛）.** 

> 如果任给 $\varepsilon > 0$，均存在与 $x \in I$ 无关的正整数 $N = N(\varepsilon)$，使得当 $n > N$ 时
>
> $$
> |g_n(x) - g(x)| < \varepsilon, \quad \forall\ x \in I, \tag{*}
> $$
>
> 则称函数列 $\{g_n\}$ 在 $I$ 中一致收敛于 $g$，记为 $g_n \rightrightarrows g$. 

显然，一致收敛的函数列是收敛的. 一致性体现在 $(*)$ 式对于充分大的 $n$ 和任意 $x$ 均成立. 

/example/ 设 $g_n(x) = \dfrac{x}{1 + n^2x^2}$, $x \in [-1,1]$. 讨论 $\{g_n\}$ 的收敛性. 

> 当 $0 < |x| \leq 1$ 时
>
> $$
> |g_n(x) - 0| = \frac{|x|}{|1 + n^2x^2|} \leq \frac{|x|}{2n|x|} = \frac{1}{2n},
> $$
>
> 上式对 $x = 0$ 也成立. 因此 $\{g_n\}$ 在 $[-1,1]$ 中一致收敛于 $0$. 

**定理1.** 设 $\{g_n\}$ 在区间 $I$ 中一致收敛于 $g$. 如果 $g_n$ 均为连续函数，则 $g$ 也是连续函数. 

> 任取 $x_0 \in I$，我们要证明 $g$ 在 $x_0$ 处连续. 任给 $\varepsilon > 0$，由一致收敛定义，存在正整数 $N = N(\varepsilon)$，使得 $n > N$ 时
>
> $$
> |g_n(x) - g(x)| < \frac{\varepsilon}{3}, \quad \forall\ x \in I.
> $$
>
> 取定 $n_0 = N + 1$，由于 $g_{n_0}$ 在 $I$ 中连续，故存在 $\delta = \delta(\varepsilon) > 0$ 使得
>
> $$
> |g_{n_0}(x) - g_{n_0}(x_0)| < \frac{\varepsilon}{3}, \quad \forall\ x \in (x_0 - \delta, x_0 + \delta) \cap I.
> $$
>
> 因此
>
> $$
> \begin{aligned}
> |g(x) - g(x_0)| &\leq |g(x) - g_{n_0}(x)| + |g_{n_0}(x) - g_{n_0}(x_0)| + |g_{n_0}(x_0) - g(x_0)| \\\\
> &< \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon, \quad \forall\ x \in (x_0 - \delta, x_0 + \delta) \cap I.
> \end{aligned}
> $$
>
> 这说明 $g$ 在 $x_0$ 处是连续的. 

> [!important]
>
> **注意.** 我们实际上证明了，如果 $\{g_n\}$ 一致收敛于 $g$，且每个函数 $g_n$ 均在 $x_0$ 处连续，则 $g$ 也在 $x_0$ 处连续，这也可以表示为
>
> $$
> \lim_{x \to x_0} \lim_{n \to \infty} g_n(x) = \lim_{n \to \infty} \lim_{x \to x_0} g_n(x),
> $$
>
> 一致收敛在这里保证了求极限次序的可交换性. 

一般地，我们有

**定理2. (*).** 设 $\{g_n\}$ 在 $x_0 \in I$ 的一个空心邻域中一致收敛于 $g$. 如果

$$
\lim_{x \to x_0} g_n(x) = a_n, \quad \forall\ n \geq 1,
$$

则极限 $\displaystyle\lim_{n \to \infty} a_n$ 以及 $\displaystyle\lim_{x \to x_0} g(x)$ 均存在，且这两个极限相等，即

$$
\lim_{x \to x_0} \lim_{n \to \infty} g_n(x) = \lim_{n \to \infty} \lim_{x \to x_0} g_n(x).
$$

> 由 $\{g_n\}$ 一致收敛到 $g$ 知，任给 $\varepsilon > 0$，存在 $N_0$，当 $n > N_0$ 时
>
> $$
> |g_n(x) - g(x)| < \varepsilon, \quad \forall\ x \ne x_0.
> $$
>
> 因此当 $m,n > N_0$ 时
>
> $$
> |g_m(x) - g_n(x)| \leq |g_m(x) - g(x)| + |g(x) - g_n(x)| < 2\varepsilon,
> $$
>
> 在上式中令 $x \to x_0$，得
>
> $$
> |a_m - a_n| \leq 2\varepsilon, \quad \forall\ m,\ n > N_0.
> $$
>
> 由 Cauchy 准则知 $\displaystyle\lim_{n \to \infty} a_n = A$ 存在. 
>
> 下证 $\displaystyle\lim_{x \to x_0} g(x) = A$. 任给 $\varepsilon > 0$，由刚才的证明，存在 $N$，使得
>
> $$
> |a_N - A| < \frac{\varepsilon}{3}, \quad |g(x) - g_N(x)| < \frac{\varepsilon}{3}, \quad \forall\ x \ne x_0.
> $$
>
> 因为 $\displaystyle\lim_{x \to x_0} g_N(x) = a_N$，故存在 $\delta > 0$，当 $0 < |x - x_0| < \delta$ 时
>
> $$
> |g_N(x) - a_N| < \frac{\varepsilon}{3}.
> $$
>
> 因此，当 $0 < |x - x_0| < \delta$ 时
>
> $$
> \begin{aligned}
> |g(x) - A| &\leq |g(x) - g_N(x)| + |g_N(x) - a_N| + |a_N - A| \\\\
> &< \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon,
> \end{aligned}
> $$
>
> 即 $\displaystyle\lim_{x \to x_0} g(x) = A$

由一致收敛定义可得如下判别法，它不涉及极限 $g$ 的具体形式：

**(Cauchy 准则)** 定义在 $I$ 中的函数列 $\{g_n\}$ 一致收敛当且仅当对任意的 $\varepsilon > 0$，存在 $N = N(\varepsilon)$，使得当 $m,n > N$ 时

$$
|g_m(x) - g_n(x)| < \varepsilon, \quad \forall\ x \in I.
$$

> 注意，当 $\{g_n\}$ 满足上式时，对于每一个固定的 $x_0 \in I$，$\{g_n(x_0)\}$ 都是 Cauchy 数列，因此收敛，其极限记为 $g(x_0)$. 这样就得到了极限函数 $g$，并且 $\{g_n\}$ 一致收敛于 $g$ . 

现在，设 $\{f_n(x)\}$ 为一列函数，考虑形式和 $\displaystyle\sum_{n=1}^\infty f_n(x)$，这种形式和称为函数项级数. 如果部分和 $S_n(x) = \displaystyle\sum_{k=1}^n f_k(x)$ 收敛，则称该函数项级数收敛；如果 $S_n(x)$ 一致收敛，则称该函数项级数一致收敛. 根据上面的讨论，我们有：

> (1) 如果 $f_n$ 均为连续函数，$\displaystyle\sum_{n=1}^\infty f_n(x)$ 一致收敛于 $S(x)$，则 $S(x)$ 也是连续函数；
>
> (2) $\displaystyle\sum_{n=1}^\infty f_n(x)$ 一致收敛当且仅当任给 $\varepsilon > 0$，存在 $N = N(\varepsilon)$，使得 $n > N$ 时
>
> $$
> |f_{n+1}(x) + \cdots + f_{n+p}(x)| < \varepsilon, \quad \forall\ x \in I, \forall\ p \geq 1.
> $$

下面的两个结果是数项级数相应结果的推论：

**定理3.** 设 $\{f_{mn}(x)\}$ 是依赖于指标 $m,n$ 的一族函数，对于每个 $n \geq 1$，均有 $\displaystyle\lim_{m \to \infty} f_{mn}(x) = f_n(x)$，且对任意 $m \geq 1$，$|f_{mn}(x)| \leq F_n(x)$，函数项级数 $\displaystyle\sum_{n=1}^\infty F_n(x)$ 收敛，则 $\displaystyle\sum_{n=1}^\infty f_n(x)$ 也收敛，且

$$
\sum_{n=1}^\infty f_n(x) = \sum_{n=1}^\infty \lim_{m \to \infty} f_{mn}(x) = \lim_{m \to \infty} \sum_{n=1}^\infty f_{mn}(x).
$$

**定理4.** 设 $\displaystyle\sum_{m=1}^\infty |f_{mn}(x)| \leq F_n(x)\ (n \geq 1)$，$\displaystyle\sum_{n=1}^\infty F_n(x)$ 收敛，则

$$
\sum_{m=1}^\infty \sum_{n=1}^\infty f_{mn}(x) = \sum_{n=1}^\infty \sum_{m=1}^\infty f_{mn}(x).
$$

函数项级数的收敛判别法可从数项级数的收敛判别法得到. 例如：

> (1) (Weierstrass) 如果 $|f_n(x)| \leq M_n$，而正项级数 $\displaystyle\sum_{n=1}^\infty M_n$ 收敛，则 $\displaystyle\sum_{n=1}^\infty f_n(x)$ 一致收敛. 这是因为
>
> $$
> |f_{n+1}(x) + \cdots + f_{n+p}(x)| \leq M_{n+1} + \cdots + M_{n+p},
> $$
>
> 然后利用 Cauchy 准则即可. 
>
> (2) (Dirichlet) 设级数 $\displaystyle\sum_{n=1}^\infty b_n(x)$ 的部分和 $B_n(x) = \displaystyle\sum_{k=1}^n b_k(x)$ 一致有界，即存在 $M > 0$，使得
>
> $$
> |B_n(x)| \leq M, \quad \forall\ x \in I, \forall\ n \geq 1.
> $$
>
> 并且对每个 $x \in I$，$\{a_n(x)\}$ 关于 $n$ 单调，$a_n(x) \to 0$，则级数 $\displaystyle\sum_{n=1}^\infty a_n(x)b_n(x)$ 在 $I$ 中一致收敛. 其证明只要照搬数项级数中的相应证明即可. 
>
> (3) (Abel) 设级数 $\displaystyle\sum_{n=1}^\infty b_n(x)$ 在 $I$ 中一致收敛，且对每个 $x \in I$，$\{a_n(x)\}$ 关于 $n$ 单调，且在 $I$ 中一致有界，则级数 $\displaystyle\sum_{n=1}^\infty a_n(x)b_n(x)$ 在 $I$ 中一致收敛. 其证明仍然是 Abel 变换的运用，然后再利用 Cauchy 准则：
>
> $$
> \begin{aligned}
> &|a_{n+1}(x)b_{n+1}(x) + \cdots + a_{n+p}(x)b_{n+p}(x)| \leq\\\\
> &3\sup |a_n| \cdot \sup_{1 \leq k \leq p} |b_{n+1}(x) + \cdots + b_{n+k}(x)|.
> \end{aligned}
> $$

**命题5.** 设 $\displaystyle\sum_{n=1}^\infty f_n(x)$ 和 $\displaystyle\sum_{n=1}^\infty g_n(x)$ 一致收敛，$\lambda,\mu \in \mathbb{R}$. 则函数项级数 $\displaystyle\sum_{n=1}^\infty (\lambda f_n(x) + \mu g_n(x))$ 也一致收敛，且

$$
\sum_{n=1}^\infty (\lambda f_n(x) + \mu g_n(x)) = \lambda \sum_{n=1}^\infty f_n(x) + \mu \sum_{n=1}^\infty g_n(x).
$$
**定理6 (Dini).** 设 $g_n(x)$ 为 $[a,b]$ 中非负连续函数，且对每个 $x \in [a,b]$，$g_n(x)$ 关于 $n$ 单调递减趋于 $0$，则 $g_n \rightrightarrows 0$. 

> 任给 $\varepsilon > 0$，我们要证明存在 $N$，使得当 $n > N$ 时
>
> $$
> 0 \leq g_n(x) < \varepsilon, \quad \forall\ x \in [a,b].
> $$
>
> 即要证 $n$ 充分大以后 $A_n = \{x \in [a,b] \mid g_n(x) \geq \varepsilon\}$ 为空集. 因为 $g_n$ 关于 $n$ 单调递减，因此
>
> $$
> A_1 \supset A_2 \supset \cdots \supset A_n \supset A_{n+1} \supset \cdots,
> $$
>
> 这说明我们只要证明某一个 $A_n$ 是空集即可. 
>
> （反证法）假设 $A_n$ 均非空集，取 $x_n \in A_n$，则 $\{x_n\}$ 为 $[a,b]$ 中的有界点列，从而存在收敛子列 $\{x_{n_i}\}$，设此子列收敛到 $x_0 \in [a,b]$. 我们易知 $A_k \supset A_{n_k} \supset \{x_{n_k}, x_{n_k+1}, \cdots\}$. 因为 $g_k$ 在 $x_0$ 处连续，我们有
>
> $$
> g_k(x_0) = \lim_{k \leq i \to \infty} g_k(x_{n_i}) \geq \varepsilon.
> $$
>
> 上式对任意 $k \geq 1$ 均成立，这和 $g_n(x_0) \to 0\ (n \to \infty)$ 相矛盾. 

**推论7.** 设 $f_n(x)$ 为非负连续函数，如果函数项级数 $\displaystyle\sum_{n=1}^\infty f_n(x)$ 在闭区间中收敛于连续函数 $f$，则必一致收敛于 $f$. 

> 考虑部分和 $S_n(x)$ 及连续函数列 $f(x) - S_n(x)$，应用 Dini 定理即可. 
>
> **注意.** 注意，推论中 $f$ 的连续性条件是不能去掉的. 例如，考虑 $[0,1]$ 区间上的函数列 $f_1(x) = 1 - x$，$f_n(x) = x^{n-1} - x^n\ (n \geq 2)$ 即可得到反例. 

**Riemann-Zeta 函数的连续性.**

> 当 $s > 1$ 时，级数 $\displaystyle\sum_{n=1}^\infty \dfrac{1}{n^s}$ 收敛，其和 $\zeta(s)$ 可以看成 $(1,+\infty)$ 中的函数. 
>
> 虽然函数项级数 $\displaystyle\sum_{n=1}^\infty \dfrac{1}{n^s}$ 在整个区间 $(1,+\infty)$ 中不是一致收敛的，但在任何闭区间 $I \subset (1,+\infty)$ 上都是一致收敛的，
>
> 因此 $\zeta(s)$ 在 $I$ 中连续，从而也是整个定义域 $(1,+\infty)$ 中的连续函数. 

### · 可交换性

给定收敛的函数项级数 $\displaystyle\sum_{n=1}^\infty f_n(x) = f(x)$，下面我们关心的问题是能否逐项求积分以及逐项求导，这也依赖于一致收敛性. 

**定理1.**

(1) 设 $\{g_n\}$ 在 $[a,b]$ 中一致收敛于 $g$. 如果 $g_n$ 均为 Riemann 可积函数，则 $g$ 也是 Riemann 可积函数，且

$$
\lim_{n \to \infty} \int_a^b g_n(x) dx = \int_a^b \lim_{n \to \infty} g_n(x) dx = \int_a^b g(x) dx.
$$

(2) 设 $\displaystyle\sum_{n=1}^\infty f_n(x)$ 在 $[a,b]$ 中一致收敛于 $f$. 如果 $f_n$ 均为 Riemann 可积函数，则 $f$ 也是 Riemann 可积函数，且

$$
\sum_{n=1}^\infty \int_a^b f_n(x) dx = \int_a^b \sum_{n=1}^\infty f_n(x) dx = \int_a^b f(x) dx.
$$

> 只要证明 (1) 即可. 先来证明 $g$ 的可积性. 任给 $\varepsilon > 0$，存在 $N = N(\varepsilon)$，使得 $n \geq N$ 时
>
> $$
> |g_n(x) - g(x)| \leq \frac{\varepsilon}{4(b-a)}, \quad \forall\ x \in [a,b].
> $$
>
> 因为 $g_N$ 是可积函数，故存在 $[a,b]$ 的分割 $\pi$，使得
>
> $$
> \sum_\pi \omega_i(g_N) \Delta x_i < \frac{\varepsilon}{2}.
> $$
>
> 对于分割 $\pi$ 的每一个小区间 $[x_{i-1}, x_i]$，有
>
> $$
> \omega_i(g) \leq \omega_i(g_N) + \frac{\varepsilon}{2(b-a)},
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \sum_\pi \omega_i(g) \Delta x_i &\leq \sum_\pi \omega_i(g_N) \Delta x_i + \frac{\varepsilon}{2(b-a)}(b-a) \\\\
> &\leq \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon,
> \end{aligned}
> $$
>
> 由可积函数的充要条件即知 $g$ 是 $[a,b]$ 上的可积函数. 
>
> 现在，当 $n \geq N$ 时，我们有估计
>
> $$
> \begin{aligned}
> \left| \int_a^b g_n(x) dx - \int_a^b g(x) dx \right| &= \left| \int_a^b (g_n(x) - g(x)) dx \right| \\\\
> &\leq \int_a^b |g_n(x) - g(x)| dx \\\\
> &\leq \frac{\varepsilon}{4}
> \end{aligned}
> $$
>
> 这说明
>
> $$
> \lim_{n \to \infty} \int_a^b g_n(x) dx = \int_a^b g(x) dx.
> $$
>
> 这就证明了定理的结论. 

> [!important]
>
> **注意.**
>
> (i) 这个定理说的是极限或求和与积分运算次序的可交换性. 一般地，定理中的一致收敛的条件是不能去掉的. 但对于一致有界的函数列，有如下控制收敛定理：设 $g_n(x), g(x)$ 均为 $[a,b]$ 上的可积函数，$\displaystyle\lim_{n \to \infty} g_n(x) = g(x)$. 如果存在常数 $M$，使得
>
> $$
> |g_n(x)| \leq M, \quad \forall\ x \in [a,b],\ n \geq 1,
> $$
>
> 则有
>
> $$
> \lim_{n \to \infty} \int_a^b g_n(x) dx = \int_a^b g(x) dx.
> $$
>
> (ii) 从定理的证明还可以看出，(2) 中函数项级数还满足下面的一致收敛性
>
> $$
> \sum_{n=1}^\infty \int_a^x f_n(t) dt \rightrightarrows \int_a^x f(t) dt.
> $$

**定理 9.2.2.** 设 $\{f_n(x)\}$ 在 $[a,b]$ 中连续可微，且

(1) $\displaystyle\sum_{n=1}^\infty f_n(a)$ 收敛；

(2) $\displaystyle\sum_{n=1}^\infty f_n'(x)$ 一致收敛于 $g(x)$；

则 $\displaystyle\sum_{n=1}^\infty f_n(x)$ 在 $[a,b]$ 中一致收敛，其和函数可导，且
$$
\left( \sum_{n=1}^\infty f_n(x) \right)' = \sum_{n=1}^\infty f_n'(x) = g(x).
$$

> 由微积分基本公式，
>
> $$
> f_n(x) = f_n(a) + \int_a^x f_n'(t) dt.
> $$
>
> 由条件 (2) 和上面的注记 (ii)，
>
> $$
> \sum_{n=1}^\infty \int_a^x f_n'(t) dt \rightrightarrows \int_a^x g(t) dt.
> $$
>
> 再由条件 (1) 即知
>
> $$
> \sum_{n=1}^\infty f_n(x) \rightrightarrows \sum_{n=1}^\infty f_n(a) + \int_a^x g(t) dt.
> $$
>
> 即 $\displaystyle\sum_{n=1}^\infty f_n(x)$ 在 $[a,b]$ 中一致收敛，其和函数可导，且导数为 $g(x)$. 
>
> **注意.** 条件 (1) 中点 $a$ 可换成区间中其它任何一点，并且连续可微的条件可以适当减弱. 

**定理3. (*)** 设 $\{f_n(x)\}$ 为 $[a,b]$ 中一列可微函数，$c \in [a,b]$. 如果 $\{f_n(c)\}$ 收敛，$f_n'(x)$ 一致收敛到 $g(x)$，则 $f_n(x)$ 一致收敛于可微函数 $f(x)$，且 $f'(x) = g$. 

> 首先，由微分中值定理，我们有
>
> $$
> \begin{aligned}
> |[f_n(x) - f_n(c)] - [f_m(x) - f_m(c)]| &= |[f_n(x) - f_m(x)] - [f_n(c) - f_m(c)]| \\\\
> &= |f_n'(\xi) - f_m'(\xi)||x - c| \to 0,
> \end{aligned}
> $$
>
> 这说明 $\{f_n(x) - f_n(c)\}$ 一致收敛，从而 $f_n(x)$ 一致收敛到一个函数 $f(x)$. 
>
> 其次，任取 $x_0 \in [a,b]$，令
>
> $$
> g_n(x) =
> \begin{cases}
> \dfrac{f_n(x) - f_n(x_0)}{x - x_0}, & x \ne x_0, \\\\
> f_n'(x_0), & x = x_0.
> \end{cases}
> $$
>
> 则 $g_n(x)$ 为 $[a,b]$ 中的连续函数，且类似于刚才的论证，由微分中值定理，有
>
> $$
> |g_n(x) - g_m(x)| = |f_n'(\xi) - f_m'(\xi)| \to 0,
> $$
>
> 这说明 $g_n(x)$ 一致收敛到连续函数
>
> $$
> \bar{g}(x) =
> \begin{cases}
> \dfrac{f(x) - f(x_0)}{x - x_0}, & x \ne x_0, \\\\
> g(x_0), & x = x_0.
> \end{cases}
> $$
>
> 特别地，$f(x)$ 在 $x_0$ 处可导，导数为 $g(x_0)$. 

下面我们来讨论一些应用. 反复利用等式

$$
\frac{1}{\sin^2 x} = \frac{\cos^2 \frac{x}{2} + \sin^2 \frac{x}{2}}{4 \sin^2 \frac{x}{2} \cos^2 \frac{x}{2}} = \frac{1}{4} \left[ \frac{1}{\sin^2 \frac{x}{2}} + \frac{1}{\sin^2 \frac{\pi + x}{2}} \right]
$$

可得

$$
\begin{aligned}
\frac{1}{\sin^2 x} &= \dfrac{1}{4} \left[ \dfrac{1}{\sin^2 \dfrac{x}{2}} + \dfrac{1}{\sin^2 \dfrac{\pi + x}{2}} \right] \\\\
&= \frac{1}{4^2} \left[ \dfrac{1}{\sin^2 \dfrac{x}{4}} + \dfrac{1}{\sin^2 \dfrac{2\pi + x}{4}} + \dfrac{1}{\sin^2 \dfrac{\pi + x}{4}} + \dfrac{1}{\sin^2 \dfrac{3\pi + x}{4}} \right] \\\\
&= \cdots \\\\
&= \dfrac{1}{2^{2n}} \sum_{k=0}^{2^n - 1} \dfrac{1}{\sin^2 \dfrac{k\pi + x}{2^n}}.
\end{aligned}
$$

再利用

$$
\sin^2 \frac{k\pi + x}{2^n} = \sin^2 \left( \frac{k\pi + x - 2^n\pi}{2^n} + \pi \right) = \sin^2 \frac{(k - 2^n)\pi + x}{2^n}
$$

可以将前式改写为

$$
\begin{aligned}
\frac{1}{\sin^2 x} &= \frac{1}{2^{2n}} \sum_{k=-2^{n-1}}^{2^{n-1}-1} \frac{1}{\sin^2 \frac{x + k\pi}{2^n}} \\\\
&= E_n + \sum_{k=-2^{n-1}}^{2^{n-1}-1} \frac{1}{(x + k\pi)^2},
\end{aligned}
$$

其中

$$
E_n = \frac{1}{2^{2n}} \sum_{k=-2^{n-1}}^{2^{n-1}-1} \left[ \frac{1}{\sin^2 \frac{x + k\pi}{2^n}} - \frac{1}{(\frac{x + k\pi}{2^n})^2} \right].
$$

利用不等式

$$
0 < \frac{1}{\sin^2 x} - \frac{1}{x^2} = 1 + \frac{\cos^2 x}{\sin^2 x} - \frac{1}{x^2} < 1, \quad \forall\ x \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]
$$

就得到如下估计

$$
0 < E_n < \frac{1}{2^{2n}} 2^n = \frac{1}{2^n}, \quad \forall\ x \in \left[0, \frac{\pi}{2}\right],
$$

令 $n \to \infty$ 就得到下面的等式

$$
\frac{1}{\sin^2 x} = \sum_{k \in \mathbb{Z}} \frac{1}{(x + k\pi)^2}, \quad \forall\ x \ne n\pi.
$$

上式在不包含 $\{n\pi\}$ 的任何闭区间上都是一致收敛的，它也可改写为

$$
\frac{1}{\sin^2 x} = \frac{1}{x^2} + \sum_{n=1}^\infty \left[ \frac{1}{(x + n\pi)^2} + \frac{1}{(x - n\pi)^2} \right], \quad x \ne k\pi.
$$

特别地，有

$$
\frac{1}{3} = \lim_{x \to 0} \left( \frac{1}{\sin^2 x} - \frac{1}{x^2} \right) = 2 \sum_{n=1}^\infty \frac{1}{(n\pi)^2},
$$

因此有

$$
\zeta(2) = \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}.
$$

当 $x \in (-\pi, \pi)$ 时，对
$$
\frac{1}{\sin^2 x} = \frac{1}{x^2} + \sum_{n=1}^\infty \left[ \frac{1}{(x + n\pi)^2} + \frac{1}{(x - n\pi)^2} \right], \quad x \ne k\pi.
$$
两边积分，利用
$$
\int_0^x \left( \frac{1}{\sin^2 t} - \frac{1}{t^2} \right) dt = \left. \left( \frac{1}{t} - \frac{\cos t}{\sin t} \right) \right|_0^x = \frac{1}{x} - \frac{\cos x}{\sin x}
$$

得

$$
\frac{\cos x}{\sin x} - \frac{1}{x} = \sum_{n=1}^\infty \left( \frac{1}{x + n\pi} + \frac{1}{x - n\pi} \right), \quad \forall\ x \in (-\pi, \pi).
$$

如果再对上式两边积分就可以得到

$$
\frac{\sin x}{x} = \prod_{n=1}^\infty \left[ 1 - \left( \frac{x}{n\pi} \right)^2 \right], \quad \forall\ x \in [-\pi, \pi].
$$

这个等式就好像将函数 $\sin x$ 作因式分解一样. 特别地，取 $x = \dfrac{\pi}{2}$ 就得到

$$
\frac{2}{\pi} = \prod_{n=1}^\infty \left[ 1 - \frac{1}{4n^2} \right],
$$

这就是 **Wallis 公式** 的乘积表示. 

利用

$$
\tan x = \cot \left( \frac{\pi}{2} - x \right), \quad \frac{1}{\sin x} = \cot \frac{x}{2} - \cot x
$$

还可以得到展开式

$$
\frac{\sin x}{\cos x} = \sum_{n=1}^\infty \left[ \frac{1}{(2n-1)\frac{\pi}{2} - x} - \frac{1}{(2n-1)\frac{\pi}{2} + x} \right],
$$

以及

$$
\frac{1}{\sin x} = \frac{1}{x} + \sum_{n=1}^\infty (-1)^n \left( \frac{1}{x + n\pi} + \frac{1}{x - n\pi} \right).
$$

作为最后这个展开式的应用，我们再一次计算广义积分 $\displaystyle\int_0^\infty \dfrac{\sin x}{x} dx$ ：

$$
\begin{aligned}
\int_0^\infty \frac{\sin x}{x} dx &= \sum_{n=0}^\infty \int_{n\pi}^{(n+1)\pi} \frac{\sin x}{x} dx \\\\
&= \sum_{n=0}^\infty \int_{n\pi}^{n\pi + \frac{\pi}{2}} \frac{\sin x}{x} dx + \sum_{n=0}^\infty \int_{n\pi + \frac{\pi}{2}}^{(n+1)\pi} \frac{\sin x}{x} dx \\\\
&= \sum_{n=0}^\infty \int_0^{\frac{\pi}{2}} (-1)^n \frac{\sin t}{n\pi + t} dt + \sum_{n=0}^\infty \int_0^{\frac{\pi}{2}} (-1)^n \frac{\sin t}{(n+1)\pi - t} dt \\\\
&= \int_0^{\frac{\pi}{2}} \frac{\sin t}{t} dt + \sum_{n=1}^\infty \int_0^{\frac{\pi}{2}} (-1)^n \left( \frac{1}{t + n\pi} + \frac{1}{t - n\pi} \right) \sin t\, dt \\\\
&= \int_0^{\frac{\pi}{2}} \frac{\sin t}{t} dt + \int_0^{\frac{\pi}{2}} \left( \frac{1}{\sin t} - \frac{1}{t} \right) \sin t\, dt \\\\
&= \int_0^{\frac{\pi}{2}} dt = \frac{\pi}{2}.
\end{aligned}
$$

在计算过程中，我们用到了一致收敛级数的求和与积分运算次序的可交换性. 
