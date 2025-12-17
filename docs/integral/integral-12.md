---
title: Chapter 12 函数项级数
permalink: /integral/integral-12/
createTime: 2025/09/16 20:57:28
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
>

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

## Part 2 幂级数

形如 $\displaystyle\sum_{n=0}^\infty a_n(x - x_0)^n$ ($a_n \in \mathbb{R}$) 的函数项级数称为幂级数. 为了简单起见，我们讨论 $x_0 = 0$ 的情形，一般情形作变量代换 $t = x - x_0$ 即可. 

### · 基本性质

**引理1** (Abel). 如果幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $x = x_1$ ($x_1 \ne 0$) 处收敛，则它在区间 $|x| < |x_1|$ 中绝对收敛；因此，幂级数在 $x = x_2$ 处发散意味着在 $|x| > |x_2|$ 上均发散. 

> 设 $\displaystyle\sum_{n=0}^\infty a_nx_1^n$ 收敛，则存在 $M > 0$ 使得  
> $$
> |a_nx_1^n| \leq M, \quad \forall\, n \geq 1,
> $$
> 这说明  
> $$
> \sum_{n=0}^\infty |a_nx^n| = \sum_{n=0}^\infty |a_nx_1^n| \cdot \left|\frac{x}{x_1}\right|^n \leq M \sum_{n=0}^\infty \left|\frac{x}{x_1}\right|^n,
> $$
> 因此当 $|x| < |x_1|$ 时，$\displaystyle\sum_{n=0}^\infty a_nx^n$ 绝对收敛. 

从证明可以看出，如果 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $x = x_1$ ($x_1 \ne 0$) 处收敛，则对任何闭区间 $I \subset (-|x_1|, |x_1|)$，$\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $I$ 中都是一致收敛的. 

**定理2** (Cauchy-Hadamard). 对幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$，记  
$$
\rho = \varlimsup_{n \to \infty} \sqrt[n]{|a_n|},
$$
则

(1) $\rho = 0$ 时，级数在 $(-\infty, \infty)$ 中绝对收敛；

(2) $\rho = +\infty$ 时，级数仅在 $x = 0$ 处收敛；

(3) $0 < \rho < +\infty$ 时，级数在 $\left(-\dfrac{1}{\rho}, \dfrac{1}{\rho}\right)$ 中绝对收敛，在 $\left[-\dfrac{1}{\rho}, \dfrac{1}{\rho}\right]$ 之外发散. 此时，称 $\dfrac{1}{\rho}$ 为收敛半径. 

> 因为  
> $$
> \varlimsup_{n \to \infty} \sqrt[n]{|a_nx^n|} = \rho|x|,
> $$
> 由数项级数的 Cauchy 判别法即可得定理结论的证明. 以 (3) 的后半部分为例（反证法）：设 $x_1 \notin \left[-\dfrac{1}{\rho}, \dfrac{1}{\rho}\right]$，$\displaystyle\sum_{n=1}^\infty a_nx_1^n$ 收敛，则存在 $M > 0$ 使得  
> $$
> |a_nx_1^n| \leq M, \quad \forall\, n \geq 1.
> $$
> 从而有
> $$
> \varlimsup_{n \to \infty} \sqrt[n]{|a_n|} \leq \varlimsup_{n \to \infty} \sqrt[n]{M|x_1|^{-n}} = |x_1|^{-1} < \rho.
> $$
> 这就导出了矛盾！
>
> **注意**. 
>
> (1) 在 $x = \pm \rho^{-1}$ 处级数的收敛性必须视情况具体讨论. 
>
> (2) $0 < \rho < +\infty$ 时，对任意闭区间 $I \subset (-\rho^{-1}, \rho^{-1})$，幂级数均在 $I$ 中一致收敛. 

**定理3**. 设幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 收敛半径为 $R$，则 $S(x) = \displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $(-R, R)$ 中任意次可微，且  
$$
S^{(k)}(x) = \sum_{n=k}^\infty n(n-1)\cdots(n-k+1)a_nx^{n-k}.
$$

> 以 $k = 1$ 为例. 首先，幂级数 $\displaystyle\sum_{n=0}^\infty (a_nx^n)' = \displaystyle\sum_{n=1}^\infty na_nx^{n-1}$ 的收敛半径仍为 $R$，故它在闭区间 $I \subset (-R, R)$ 中一致收敛. 由定理 9.2.2，$\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $I$ 中可微，且  
> $$
> \left(\sum_{n=0}^\infty a_nx^n\right)' = \sum_{n=0}^\infty (a_nx^n)' = \sum_{n=1}^\infty na_nx^{n-1}.
> $$
> $S(x)$ 的高阶可微性的证明是完全类似的. 

特别地，$S^{(n)}(0) = n!a_n$，这说明和函数 $S(x)$ 的 Taylor 展开就是该幂级数本身.

**定理4** (Abel 连续性定理). 设幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 的收敛半径为 $R$ ($0 < R < +\infty$). 如果 $\displaystyle\sum_{n=0}^\infty a_nR^n$ 收敛，则  
$$
\lim_{x \to R^-} \sum_{n=0}^\infty a_nx^n = \sum_{n=0}^\infty a_nR^n,
$$
如果 $\displaystyle\sum_{n=0}^\infty a_n(-R)^n$ 收敛，则  
$$
\lim_{x \to -R^+} \sum_{n=0}^\infty a_nx^n = \sum_{n=0}^\infty a_n(-R)^n.
$$

> 如果 $\displaystyle\sum_{n=0}^\infty a_nR^n$ 收敛，则考虑  
> $$
> \sum_{n=0}^\infty a_nx^n = \sum_{n=0}^\infty a_nR^n \cdot \left(\frac{x}{R}\right)^n,
> $$
> 在 $[0,R]$ 上，$\left|\dfrac{x}{R}\right|^n \leq 1$，且 $\left(\dfrac{x}{R}\right)^n$ 关于 $n$ 单调. 由 Abel 判别法知 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $[0,R]$ 中一致收敛，其和函数 $S(x)$ 在 $[0,R]$ 中连续，因此  
> $$
> \sum_{n=0}^\infty a_nR^n = S(R) = \lim_{x \to R^-} S(x) = \lim_{x \to R^-} \sum_{n=0}^\infty a_nx^n.
> $$
> 关于 $-R$ 的证明完全类似（或考虑 $\tilde{a}_n = (-1)^n \cdot a_n$）. 

**定理5** (逐项积分). 设幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 收敛半径 $R \ne 0$，则有  
$$
\int_0^x \left(\sum_{n=0}^\infty a_nt^n\right) dt = \sum_{n=0}^\infty \int_0^x a_nt^n dt = \sum_{n=0}^\infty \frac{a_n}{n+1}x^{n+1}, \quad \forall\, x \in (-R,R).
$$

> 不妨设 $x > 0$，则根据前面的讨论，$\displaystyle\sum_{n=0}^\infty a_nt^n$ 在 $t \in [0,x]$ 中一致收敛，因此可以逐项积分. 

**注意**. 如果 $\displaystyle\sum_{n=0}^\infty a_nR^n$ 收敛，则上面的等式对 $x = R$ 也成立. 对 $-R$ 有类似结果. 

**定理6**. 设 $\displaystyle\lim_{m \to \infty} a_{mn} = a_n$，$|a_{mn}| \leq A_n$. 如果 $\displaystyle\sum_{n=0}^\infty A_nx^n$ 在 $(-R,R)$ 中收敛，则  
$$
\lim_{m \to \infty} \sum_{n=0}^\infty a_{mn}x^n = \sum_{n=0}^\infty a_nx^n, \quad x \in (-R,R).
$$

**定理7**. 设 $\displaystyle\sum_{i=0}^\infty |a_{ij}| = s_j$，$\displaystyle\sum_{j=0}^\infty s_jx^j$ 在 $(-R,R)$ 中收敛，则  
$$
\sum_{i=0}^\infty \sum_{j=0}^\infty a_{ij}x^j = \sum_{j=0}^\infty \left(\sum_{i=0}^\infty a_{ij}\right)x^j, \quad x \in (-R,R).
$$
/example/ 我们来推导 $\tan x$ 的幂级数展开. 

> 根据
> $$
> \frac{\sin x}{\cos x} = \sum_{n=1}^\infty \left[ \frac{1}{(2n-1)\frac{\pi}{2} - x} - \frac{1}{(2n-1)\frac{\pi}{2} + x} \right],
> $$
> 当 $x \in \left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$ 时，我们有  
> $$
> \begin{aligned}
> \tan x &= \sum_{n=1}^\infty \frac{2x}{[(2n-1)\frac{\pi}{2}]^2 - x^2}\\\\
> &= 2x \sum_{n=1}^\infty \sum_{m=0}^\infty \frac{1}{[(2n-1)\frac{\pi}{2}]^2} \left(\frac{x}{(2n-1)\frac{\pi}{2}}\right)^{2m}\\\\
> &= 2x \sum_{m=0}^\infty \sum_{n=1}^\infty \frac{1}{[(2n-1)\frac{\pi}{2}]^2} \left(\frac{x}{(2n-1)\frac{\pi}{2}}\right)^{2m}.
> \end{aligned}
> $$
>
> 利用等式
> $$
> \begin{aligned}
> \zeta(2m+2) &= \sum_{n=1}^\infty \frac{1}{(2n-1)^{2m+2}} + \sum_{n=1}^\infty \frac{1}{(2n)^{2m+2}}\\\\
> &= \sum_{n=1}^\infty \frac{1}{(2n-1)^{2m+2}} + 2^{-2m-2} \zeta(2m+2)
> \end{aligned}
> $$
> 可以将前式写为  
> $$
> \tan x = \sum_{m=0}^\infty \frac{\zeta(2m+2)}{\pi^{2m+2}} 2(2^{2m+2} - 1)x^{2m+1}, \quad \forall\, x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right).
> $$

### · Taylor 展开

如果 $f$ 在 $x_0$ 处任意次可导，则 $f$ 有 Taylor 展开  
$$
\sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n,
$$
然而，这个幂级数在 $x_0$ 以外的点上很可能不收敛，即使收敛，其极限也未必就是 $f(x)$. 不过我们有下面的两个结果. 

**定理8** (Bernstein). (*) 设 $f$ 在 $[a,b]$ 中任意阶可导，且各阶导数非负. 则当 $x, x_0 \in (a,b)$，且 $|x - x_0| < b - x_0$ 时  
$$
f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n.
$$

> 记 $M = f(b) - f(a)$，由 $f', f'' \geq 0$ 知 $f, f'$ 为单调递增函数. 任给 $x \in (a,b)$，由微分中值定理，有  
> $$
> M = f(b) - f(a) \geq f(b) - f(x) = (b - x)f'(\xi) \geq (b - x)f'(x).
> $$
> 同理，  
> $$
> M \geq f(b) - f(x) = f'(x)(b - x) + \frac{1}{2}f''(\xi)(b - x)^2 \geq \frac{1}{2}f''(x)(b - x)^2.
> $$
> 依此类推，我们得到如下估计  
> $$
> 0 \leq f^{(n)}(x) \leq \frac{n!M}{(b - x)^n}, \quad \forall\, x \in (a,b).
> $$
>
> 下面分两种情况来估计 $f$ 在 $x_0$ 处 Taylor 展开的余项 $R_n(x)$. 
>
> (1) $x > x_0$. 此时有  
> $$
> \begin{aligned}
> 0 \leq R_n(x) &= \int_{x_0}^x \frac{f^{(n+1)}(t)}{n!}(x - t)^n dt \\\\
> &\leq \int_{x_0}^x (n+1)M \frac{(x - t)^n}{(b - t)^{n+1}} dt \\\\
> &\leq \frac{(n+1)M}{b - x} \int_{x_0}^x \left(\frac{x - t}{b - t}\right)^n dt \\\\
> &\leq \frac{(n+1)M}{b - x} \left(\frac{x - x_0}{b - x_0}\right)^n (x - x_0) \to 0 \quad (n \to \infty).
> \end{aligned}
> $$
>
> (2) $x < x_0$. 此时，如果 $x_0 - x < b - x_0$，则  
> $$
> \begin{aligned}
> |R_n(x)| &= \left|\int_{x_0}^x \frac{f^{(n+1)}(t)}{n!}(x - t)^n dt\right| \\\\
> &\leq \int_x^{x_0} \frac{f^{(n+1)}(t)}{n!}(t - x)^n dt \\\\
> &\leq \frac{1}{n!}f^{(n+1)}(x_0) \int_x^{x_0} (t - x)^n dt \\\\
> &\leq \frac{1}{n!} \frac{(n+1)!M}{(b - x_0)^{n+1}} \frac{(x_0 - x)^{n+1}}{n+1} \\\\
> &\leq M\left(\frac{x_0 - x}{b - x_0}\right)^{n+1} \to 0 \quad (n \to \infty),
> \end{aligned}
> $$
> 或  
> $$
> \begin{aligned}
> |R_n(x)| &= \frac{1}{(n+1)!}(x_0 - x)^{n+1} f^{(n+1)}(\xi) \\\\
> &\leq \frac{1}{(n+1)!}(x_0 - x)^{n+1} f^{(n+1)}(x_0) \\\\
> &\leq M\left(\frac{x_0 - x}{b - x_0}\right)^{n+1} \to 0 \quad (n \to \infty).
> \end{aligned}
> $$
>
> 总之，余项的确是趋于零的. 

作为例子，函数 $f(x) = e^x$ 在 $(-\infty, \infty)$ 中的各阶导数均大于零，按照 Bernstein 定理，我们立即就得到等式  
$$
e^x = 1 + x + \frac{x^2}{2!} + \cdots + \frac{x^n}{n!} + \cdots, \quad \forall\, x \in (-\infty, +\infty).
$$
**定理9**. 设 $R > 0$，$f$ 在 $(x_0 - R, x_0 + R)$ 中无限次可导. 如果存在 $M > 0$ 使得  
$$
|f^{(n)}(x)| \leq M^n, \quad \forall\, x \in (x_0 - R, x_0 + R), \quad \forall\, n \geq 1,
$$
则  
$$
f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n, \quad \forall\, x \in (x_0 - R, x_0 + R).
$$

> 当 $x \in (x_0 - R, x_0 + R)$ 时，由 Taylor 公式的 Lagrange 余项表示，我们有  
> $$
> \begin{aligned}
> \left|f(x) - \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k\right| &= |R_n(x)| \\\\
> &= \left|\frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}\right| \\\\
> &\leq \frac{M^{n+1}R^{n+1}}{(n+1)!} \to 0 \quad (n \to \infty).
> \end{aligned}
> $$
> 因此  
> $$
> f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n.
> $$
> 这说明 $f$ 在 $x_0$ 处的 Taylor 展开的确收敛到 $f$ 自身. 

### · 乘除运算

**定理10**. 设幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 和 $\displaystyle\sum_{n=0}^\infty b_nx^n$ 在区间 $(-R,R)$ 中均收敛，则  
$$
\left(\sum_{n=0}^\infty a_nx^n\right)\left(\sum_{n=0}^\infty b_nx^n\right) = \sum_{n=0}^\infty c_nx^n = \sum_{n=0}^\infty \left(\sum_{i+j=n} a_ib_j\right)x^n, \quad \forall\, x \in (-R,R).
$$

> 只要证明对任意闭区间 $I \subset (-R,R)$ 等式成立即可. 在闭区间 $I$ 上，幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 和 $\displaystyle\sum_{n=0}^\infty b_nx^n$ 都是绝对一致收敛的，因此，根据数项级数乘积的 Cauchy 定理，有  
> $$
> \left(\sum_{n=0}^\infty a_nx^n\right)\left(\sum_{n=0}^\infty b_nx^n\right) = \sum_{n=0}^\infty \sum_{i+j=n} (a_ix^i)(b_jx^j) = \sum_{n=0}^\infty \left(\sum_{i+j=n} a_ib_j\right)x^n.
> $$
> 这就证明了幂级数的乘法公式. 

**定理11**. 设幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $(-R,R)$ ($R > 0$) 中收敛，$a_0 \ne 0$. 则存在 $r > 0$，使得幂级数 $\displaystyle\sum_{n=0}^\infty b_nx^n$ 在 $(-r,r)$ 中收敛，且  
$$
\left(\sum_{n=0}^\infty a_nx^n\right)\left(\sum_{n=0}^\infty b_nx^n\right) = 1, \quad \forall\, x \in (-r,r),
$$
或写为  
$$
\frac{1}{a_0 + a_1x + \cdots + a_nx^n + \cdots} = b_0 + b_1x + \cdots + b_nx^n + \cdots.
$$

> 不妨设 $a_0 = 1$. 下面，我们递归地定义 $b_n$ 如下：令 $b_0 = 1$，当 $b_0,\dots,b_{n-1}$ 已定义好后，令  
> $$
> b_n = -\sum_{i=0}^{n-1} a_{n-i}b_i, \quad n \geq 1.
> $$
>
> 我们来说明幂级数 $\displaystyle\sum_{n=0}^\infty b_nx^n$ 具有正的收敛半径. 事实上，因为 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $(-R,R)$ 中收敛，故存在 $M > 0$，使得  
> $$
> \left|a_n\left(\frac{R}{2}\right)^n\right| \leq M, \quad \forall\, n \geq 0.
> $$
> 因此有  
> $$
> \left|b_n\left(\frac{R}{2}\right)^n\right| \leq \sum_{i=0}^{n-1} \left|a_{n-i}\left(\frac{R}{2}\right)^{n-i}\right|\left|b_i\left(\frac{R}{2}\right)^i\right| \leq M \sum_{i=0}^{n-1} \left|b_i\left(\frac{R}{2}\right)^i\right|,
> $$
> 由此利用归纳法不难得到下面的估计  
> $$
> \left|b_n\left(\frac{R}{2}\right)^n\right| \leq (1 + M)^n, \quad \forall\, n \geq 0.
> $$
> 这说明，幂级数 $\displaystyle\sum_{n=0}^\infty b_nx^n$ 的收敛半径至少为 $r = \dfrac{R}{2(1 + M)}$. 根据 $\{b_n\}$ 的构造，显然有（我们假设了 $a_0 = 1$）  
> $$
> \left(\sum_{n=0}^\infty a_nx^n\right)\left(\sum_{n=0}^\infty b_nx^n\right) = \sum_{n=0}^\infty \left(\sum_{i+j=n} a_ib_j\right)x^n = 1.
> $$
> 这就证明了定理. 

**Bernoulli 数**：

> 考虑函数 $\dfrac{x}{e^x - 1}$ 的幂级数展开：
> $$
> \frac{x}{e^x - 1} = \sum_{n=0}^\infty \frac{B_n}{n!}x^n,
> $$
> 其系数 $B_n$ 称为第 $n$ 个 Bernoulli 数. 我们有
> $$
> \begin{aligned}
> \frac{x}{e^x - 1} &= \left(\frac{e^x - 1}{x}\right)^{-1} = \left(\sum_{n=0}^\infty \frac{x^n}{(n+1)!}\right)^{-1} \\\\
> &= 1 - \frac{x}{2} + \frac{x^2}{12} - \frac{x^4}{720} + \frac{x^6}{30240} - \frac{x^8}{1209600} + \cdots
> \end{aligned}
> $$
> 注意到上式中当 $n \geq 1$ 时 $B_{2n+1} = 0$，这是因为
> $$
> \frac{x}{e^x - 1} + \frac{x}{2} = \frac{x}{2} \cdot \frac{e^x + 1}{e^x - 1} = \frac{x}{2} \coth\frac{x}{2},
> $$
> 即 $\dfrac{x}{e^x - 1} + \dfrac{x}{2}$ 为偶函数的缘故. 
>
> 根据幂级数的除法公式，我们容易得到 $B_n$ 的如下递推公式：  
> $$
> B_0 = 1, \quad B_n = -\frac{1}{n+1} \sum_{k=0}^{n-1} C_{n+1}^k B_k.
> $$
>
> 例如，开头的几个 Bernoulli 数为
> $$
> B_0 = 1, \quad B_1 = -\frac{1}{2}, \quad B_2 = \frac{1}{6}, \quad B_3 = B_5 = B_7 = 0, \quad B_4 = -\frac{1}{30}, \quad B_6 = \frac{1}{42}, \quad B_8 = -\frac{1}{30}.
> $$

**Euler 数**：

> 考虑函数 $\dfrac{2e^x}{e^{2x} + 1}$ 的展开式
> $$
> \frac{2e^x}{e^{2x} + 1} = \sum_{n=0}^\infty \frac{E_n}{n!}x^n,
> $$
> 其系数 $E_n$ 称为 Euler 数. 因为 $\dfrac{2e^x}{e^{2x} + 1} = \dfrac{1}{\cosh x}$ 是偶函数，故上式也可写为
> $$
> \frac{1}{\cosh x} = \sum_{n=0}^\infty \frac{E_{2n}}{(2n)!}x^{2n}.
> $$
> 因为 $\cosh x = \displaystyle\sum_{n=0}^\infty \dfrac{x^{2n}}{(2n)!}$，由幂级数的除法公式可得如下递推公式
> $$
> E_0 = 1, \quad E_{2n-1} = 0, \quad E_{2n} = -\sum_{l=0}^{n-1} C_{2n}^{2l} E_{2l}, \quad n \geq 1.
> $$

结束.

