---
title: Lesson 20 积分应用与推广 II
permalink: /integral/integral-20/
createTime: 2026/08/17 14:17:12
---

## Part 2 广义积分

### · 定义

**定义1** (无穷积分). 

> 设 $a \in \mathbb{R}$, 定义在 $[a, +\infty)$ 中的函数 $f$ 如果在任何有限区间 $[a, A]$ 上都是 Riemann 可积的, 且极限
>
> $$
> \lim_{A \to +\infty} \int_a^A f(x) dx
> $$
>
> 存在（且有界），则称无穷积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 存在或收敛，记为
>
> $$
> \int_a^{+\infty} f(x) dx = \lim_{A \to +\infty} \int_a^A f(x) dx,
> $$
>
> 否则就称无穷积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 不存在或发散.
>
> 类似地，我们也可以定义无穷积分 $\displaystyle\int_{-\infty}^a f(x) dx$，以及 $\displaystyle\int_{-\infty}^{+\infty} f(x) dx$.并且无穷积分 $\displaystyle\int_{-\infty}^{+\infty} f(x) dx$ 收敛当且仅当 $\displaystyle\int_{-\infty}^a f(x) dx$ 和 $\displaystyle\int_a^{+\infty} f(x) dx$ 均收敛，此时
>
> $$
> \int_{-\infty}^{+\infty} f(x) dx = \int_{-\infty}^a f(x) dx + \int_a^{+\infty} f(x) dx, \quad \forall a \in \mathbb{R}.
> $$
>
> 需要注意的是，利用极限
>
> $$
> \lim_{A \to +\infty} \int_{-A}^A f(x) dx
> $$
>
> 也可以定义 $f$ 在 $(-\infty, +\infty)$ 上的一种积分，它和前一种定义不是等价的，称为 Cauchy 主值积分，记为
>
> $$
> (V.P.) \int_{-\infty}^{+\infty} f(x) dx = \lim_{A \to +\infty} \int_{-A}^A f(x) dx.
> $$

从无穷积分的定义立即得到如下的基本判别法：

(**无穷积分的 Cauchy 准则**) $f(x)$ 在 $[a, +\infty)$ 上的积分收敛 $\iff$ 任给 $\varepsilon > 0$, 存在 $M = M(\varepsilon)$, 使得当 $B > A > M$ 时，

$$
\left| \int_A^B f(x) dx \right| < \varepsilon.
$$

对于 $(-\infty, a]$ 和 $(-\infty, +\infty)$ 上的无穷积分有完全类似的判别法.

/example/ 讨论无穷积分 $\displaystyle\int_1^{+\infty} \dfrac{1}{x^p} dx$ ($p \in \mathbb{R}$) 的敛散性.

>  当 $A > 1$ 时，
>
>  $$
>  \int_1^A \frac{1}{x^p} dx =
>  \begin{cases}
>  \ln A, & p = 1, \\\\
>  \dfrac{1}{1 - p}(A^{1 - p} - 1), & p \ne 1.
>  \end{cases}
>  $$
>
>  因此只有 $p > 1$ 时积分才是收敛的，此时
>
>  $$
>  \int_1^{+\infty} \frac{1}{x^p} dx = \lim_{A \to +\infty} \frac{1}{1 - p}(A^{1 - p} - 1) = \frac{1}{p - 1}.
>  $$
>
>  一般地，如果连续函数 $f$ 在 $[a, +\infty)$ 上存在原函数 $F$，则由微积分基本公式，
>
>  $$
>  \lim_{A \to +\infty} \int_a^A f(x) dx = \lim_{A \to +\infty} F(A) - F(a),
>  $$
>
>  即积分是否收敛与极限 $\displaystyle\lim_{A \to +\infty} F(A)$ 是否存在是一致的

/example/ 计算无穷积分 $\displaystyle\int_{-\infty}^{+\infty} \dfrac{1}{1 + x^2} dx$.

> $\dfrac{1}{1 + x^2}$ 的原函数为 $\arctan x$，因此
>
> $$
> \begin{aligned}
> \int_{-\infty}^{+\infty} \frac{1}{1 + x^2} dx &= \int_0^{+\infty} \frac{1}{1 + x^2} dx + \int_{-\infty}^0 \frac{1}{1 + x^2} dx \\\\
> &= \arctan x \Big|_{-\infty}^0 + \arctan x \Big|_0^{+\infty} \\\\
> &= \frac{\pi}{2} + \frac{\pi}{2} = \pi.
> \end{aligned}
> $$
>
> 和无穷积分类似，我们也可以通过极限来处理无界函数的积分.

**定义2** (瑕积分). 

> 设函数 $f$ 在任何区间 $[a', b]$ ($a < a' < b$) 上均 Riemann 可积，如果极限
>
> $$
> \lim_{a' \to a^+} \int_{a'}^b f(x) dx
> $$
>
> 存在（且有界），则称瑕积分 $\displaystyle\int_a^b f(x) dx$ 存在或收敛，记为
>
> $$
> \int_a^b f(x) dx = \lim_{a' \to a^+} \int_{a'}^b f(x) dx,
> $$
>
> 否则就称瑕积分 $\displaystyle\int_a^b f(x) dx$ 不存在或发散

不难看出，如果 $f$ 在 $[a,b]$ 上 Riemann 可积，则 $f$ 的瑕积分等于其 Riemann 积分.如果 $f$ 在 $a$ 附近无界，从而在 $[a,b]$ 上不是 Riemann 可积的，则称 $a$ 为 $f$ 的瑕点.类似地，可以在 $[a,b)$ 上定义瑕积分，当瑕点不只一个时也可类似地定义瑕积分，瑕积分的收敛性仍有和广义积分类似的 Cauchy 准则判别法.

如果一个函数既是无界的，定义域又是无限区间，则把上面两种积分，即无穷积分和瑕积分的处理方法结合起来往往可以对于这种函数的积分加以处理，得到的积分统称广义积分，在别的书上也称反常积分.

广义积分具有和 Riemann 积分类似的性质，一些运算法则，例如分部积分、变量代换等也可以直接推广过来.

**命题**. 假设积分限 $a, b, c$ 等可以取 $-\infty$ 或 $+\infty$，则

(1) 如果 $f$ 在 $[a,b], [b,c]$ 上积分存在，则 $f$ 在 $[a,c]$ 上的积分也存在，且

$$
\int_a^c f(x) dx = \int_a^b f(x) dx + \int_b^c f(x) dx;
$$

(2) 如果 $f, g$ 在 $[a,b]$ 上积分存在，则 $\lambda f + \mu g$ ($\lambda, \mu \in \mathbb{R}$) 在 $[a,b]$ 上的积分也存在，且

$$
\int_a^b [\lambda f(x) + \mu g(x)] dx = \lambda \int_a^b f(x) dx + \mu \int_a^b g(x) dx.
$$
/example/ 讨论积分 $\displaystyle\int_0^{+\infty} \cos(x^2) dx$ 的敛散性

> 只要讨论被积函数在 $[1, +\infty)$ 上的积分就可以了.作变量代换 $x = \sqrt{t}$，得
>
> $$
> \int_1^{+\infty} \cos(x^2) dx = \frac{1}{2} \int_1^{+\infty} \frac{\cos t}{\sqrt{t}} dt.
> $$
>
> 我们利用分部积分和 Cauchy 准则来判断积分的收敛性：
>
> $$
> \begin{aligned}
> \left| \int_A^B \frac{\cos t}{\sqrt{t}} dt \right| &= \left| \frac{\sin t}{\sqrt{t}} \Big|_A^B + \frac{1}{2} \int_A^B \frac{\sin t}{t^{3/2}} dt \right| \\\\
> &\leq \frac{1}{\sqrt{A}} + \frac{1}{\sqrt{B}} + \frac{1}{2} \int_A^B t^{-3/2} dt = \frac{2}{\sqrt{A}} \to 0 \quad (B > A \to +\infty).
> \end{aligned}
> $$
>
> 这说明积分是收敛的.
>
> 这个例子也告诉我们，$f$ 在 $[a, +\infty)$ 上的积分存在并不意味着 $f(x) \to 0$ ($x \to +\infty$).

### · 收敛判别法

进一步介绍其它的判别法，首先研究非负函数.我们注意到，如果 $f$ 非负，则积分 $\displaystyle\int_a^A f(x) dx$ 关于 $A$ 单调递增，因此其极限存在当且仅当它有上界，这就得到了非负函数广义积分的如下基本判别法：

**定理1**. 设 $f \geq 0$，则无穷积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 收敛当且仅当
$$
F(A) = \int_a^A f(x) dx
$$

是 $A \in [a, +\infty)$ 的有界函数；对瑕积分有完全类似的结果.

由此又得到如下的比较判别法：

**定理2**. 设 $0 \leq f \leq M g$, $M > 0$ 为常数，则当无穷积分 $\displaystyle\int_a^{+\infty} g(x) dx$ 收敛时，无穷积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 也收敛；当无穷积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 发散时，无穷积分 $\displaystyle\int_a^{+\infty} g(x) dx$ 也发散；瑕积分有完全类似的结果.

> 令
>
> $$
> F(A) = \int_a^A f(x) dx, \quad G(A) = \int_a^A g(x) dx,
> $$
>
> 则 $0 \leq F(A) \leq M \cdot G(A)$, $A \in [a, +\infty)$. 因此，如果 $G(A)$ 有界，则 $F(A)$ 也有界；$F(A)$ 无界时，$G(A)$ 也无界.

> [!important]
>
> (1) 常数 $M$ 的存在性通常利用极限去找.即如果极限 $l = \displaystyle\lim_{x \to +\infty} \dfrac{f(x)}{g(x)}$ 存在，则当 $0 < l < \infty$ 时，积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 和 $\displaystyle\int_a^{+\infty} g(x) dx$ 同时收敛或发散；
>
> 当 $l = 0$ 时，如果 $\displaystyle\int_a^{+\infty} g(x) dx$ 收敛，则 $\displaystyle\int_a^{+\infty} f(x) dx$ 也收敛；当 $l = +\infty$ 时，如果 $\displaystyle\int_a^{+\infty} g(x) dx$ 发散，则 $\displaystyle\int_a^{+\infty} f(x) dx$ 也发散.
>
> (2) 我们可以拿函数 $f$ 与 $x^{-p}$ 比较，则得到如下的 Cauchy 判别法：
>
> (i) 如果 $p > 1$，且存在常数 $C > 0$，使得
>
> $$
> 0 \leq f(x) \leq \frac{C}{x^p} \quad (\forall x \geq x_0),
> $$
>
> 则 $\displaystyle\int_a^{+\infty} f(x) dx$ 收敛；
>
> (ii) 如果 $p \leq 1$，且存在常数 $C > 0$，使得
>
> $$
> f(x) \geq \frac{C}{x^p} \quad (\forall x \geq x_0),
> $$
>
> 则 $\displaystyle\int_a^{+\infty} f(x) dx$ 发散；
>
> 当然，常数 $C$ 通常是求极限得到的，即如果极限 $\displaystyle\lim_{x \to +\infty} x^p f(x) = l$ 存在，则
>
> (iii) 如果 $p > 1$, $0 \leq l < +\infty$，则 $\displaystyle\int_a^{+\infty} f(x) dx$ 收敛；
>
> (iv) 如果 $p \leq 1$, $0 < l \leq +\infty$，则 $\displaystyle\int_a^{+\infty} f(x) dx$ 发散；
>
> (3) 对于瑕积分，利用与函数 $x^{-p}$ 的比较，可以得到完全类似的 Cauchy 判别法.

注意，比较判别法只适用于非负函数.对于一般函数的广义积分，有时可以化为非负函数的积分来判断是否收敛.

设 $f$ 为一般函数，记

$$
f^+(x) = \max\{0, f(x)\}, \quad f^-(x) = \max\{0, -f(x)\},
$$

则 $f^+$ 和 $f^-$ 均为非负函数，且 $f = f^+ - f^-$. 因此，如果 $f^+$ 和 $f^-$ 的积分均收敛，则 $f$ 的积分也收敛，此时称 $f$ 的积分绝对收敛，这和 $|f| = f^+ + f^-$ 的积分收敛是一致的.如果 $f$ 的积分收敛，但 $|f|$ 的积分发散，则称 $f$ 的积分条件收敛.

对于两个函数乘积的广义积分，在某些情形下利用第二积分中值公式可以给出下面的判别法.

**定理3** (Dirichlet). 设 $F(A) = \displaystyle\int_a^A f(x) dx$ 在 $[a, +\infty)$ 中有界，函数 $g(x)$ 在 $[a, +\infty)$ 中单调，且 $\displaystyle\lim_{x \to +\infty} g(x) = 0$，则积分 $\displaystyle\int_a^{+\infty} f(x) g(x) dx$ 收敛.

> 设 $|F(A)| \leq C$, $\forall A \geq a$. 则
>
> $$
> \left| \int_A^B f(x) dx \right| = \left| \int_a^B f(x) dx - \int_a^A f(x) dx \right| \leq 2C, \quad \forall A, B \geq a.
> $$
>
> 又因为 $\displaystyle\lim_{x \to +\infty} g(x) = 0$，故任给 $\varepsilon > 0$，存在 $M > 0$，使得当 $x > M$ 时
>
> $$
> |g(x)| \leq \frac{\varepsilon}{4C}.
> $$
>
> 由积分第二中值定理，当 $A, B > M$ 时
> $$
> \begin{aligned}
> \left| \int_A^B f(x) g(x) dx \right| &= \left| g(A) \int_A^\xi f(x) dx + g(B) \int_\xi^B f(x) dx \right| \\\\
> &\leq C \left| \int_A^\xi f(x) dx \right| + C \left| \int_\xi^B f(x) dx \right| \\\\
> &\leq C \cdot \frac{\varepsilon}{2C} + C \cdot \frac{\varepsilon}{2C} = \varepsilon.
> \end{aligned}
> $$

这些判别法对于瑕积分也有完全类似的表达形式

结束.

