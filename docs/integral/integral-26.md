---
title: Lesson 26 Fourier 分析 II
permalink: /integral/integral-26/
createTime: 2026/08/17 14:17:30
---

## Part 3 Parseval 恒等式

在前一节我们考虑了 Fourier 级数的逐点收敛性. 本节我们考虑积分意义下的收敛性，这时对函数的要求较低. 

设 $[a,b]$ 为闭区间，我们定义函数集合 $R^2[a,b]$ 如下：$R^2[a,b]$ 中的函数 $f$ Riemann 可积，或 $f$ 有瑕点但 $f^2$ 积分收敛. 显然，$R^2[a,b]$ 为线性空间，且若 $f,g \in R^2[a,b]$，则仍有 Cauchy-Schwarz 不等式  
$$
\int_a^b |f(x)g(x)| dx \le \left[ \int_a^b f^2(x) dx \right]^{\frac{1}{2}} \cdot \left[ \int_a^b g^2(x) dx \right]^{\frac{1}{2}}.
$$

### · Parseval 等式

**定理1** (Parseval 等式)

> 设 $f \in R^2[-\pi,\pi]$，且 $f$ 的 Fourier 展开为  
> $$
> f \sim \frac{a_0}{2} + \sum_{n=1}^\infty (a_n \cos nx + b_n \sin nx),
> $$
> 则  
> $$
> \frac{1}{\pi} \int_{-\pi}^\pi f^2(x) dx = \frac{a_0^2}{2} + \sum_{n=1}^\infty (a_n^2 + b_n^2).
> $$

/proof/

> **(1)** 记  
> $$
> S_n(f) = \frac{a_0}{2} + \sum_{k=1}^n (a_k \cos kx + b_k \sin kx),
> $$
> 由三角函数系的正交性质，有  
> $$
> \begin{aligned}
> \frac{1}{\pi} \int_{-\pi}^\pi S_n^2(f) dx &= \frac{1}{\pi} \int_{-\pi}^\pi \left( \frac{a_0}{2} \right)^2 dx + \frac{1}{\pi} \sum_{k=1}^n a_k^2 \left( \int_{-\pi}^\pi \cos^2 kx dx + \int_{-\pi}^\pi \sin^2 kx dx \right)\\\\
> &= \frac{a_0^2}{2} + \sum_{k=1}^n (a_k^2 + b_k^2).
> \end{aligned}
> $$
>
> 其次就有  
> $$
> \begin{aligned}
> \frac{1}{\pi} \int_{-\pi}^\pi [f - S_n(f)]^2 dx 
> &= \frac{1}{\pi} \int_{-\pi}^\pi f^2 dx - \frac{2}{\pi} \int_{-\pi}^\pi f \cdot S_n(f) dx + \frac{1}{\pi} \int_{-\pi}^\pi S_n^2(f) dx\\\\
> &= \frac{1}{\pi} \int_{-\pi}^\pi f^2 dx+ \frac{1}{\pi} \int_{-\pi}^\pi S_n^2(f) dx \\\\
> &- \frac{2}{\pi} \left[ \frac{a_0}{2} \int_{-\pi}^\pi f dx + \sum_{k=1}^n \left( a_k \int_{-\pi}^\pi f(x) \cos kx dx + b_k \int_{-\pi}^\pi f(x) \sin kx dx \right) \right] \\\\
> &= \frac{1}{\pi} \int_{-\pi}^\pi f^2 dx - 2 \left[ \frac{a_0^2}{2} + \sum_{k=1}^n (a_k^2 + b_k^2) \right] + \frac{1}{\pi} \int_{-\pi}^\pi S_n^2(f) dx\\\\
> &= \frac{1}{\pi} \int_{-\pi}^\pi f^2 dx - \frac{1}{\pi} \int_{-\pi}^\pi S_n^2(f) dx,
> \end{aligned}
> $$
> 由此得到  
> $$
> \int_{-\pi}^\pi S_n^2(f) dx \le \int_{-\pi}^\pi f^2 dx.
> $$
>
> 根据以上几式可知，  
> $$
> \int_{-\pi}^\pi S_n^2(f) dx \to \int_{-\pi}^\pi f^2 dx \iff \int_{-\pi}^\pi [f - S_n(f)]^2 dx \to 0.
> $$
>
> **(2)** 如果上式对 $f,g \in R^2[a,b]$ 均成立，则当 $\lambda,\mu \in \mathbb{R}$ 时，  
> $$
> \begin{aligned}
> \int_{-\pi}^\pi [\lambda f + \mu g - S_n(\lambda f + \mu g)]^2 dx &= \int_{-\pi}^\pi [\lambda(f - S_n(f)) + \mu(g - S_n(g))]^2 dx\\\\
> &\le 2\lambda^2 \int_{-\pi}^\pi [f - S_n(f)]^2 dx + 2\mu^2 \int_{-\pi}^\pi [g - S_n(g)]^2 dx.
> \end{aligned}
> $$
>
> 由上式知，该等式对函数 $\lambda f + \mu g$ 也成立. 
>
> **(3)** 显然，该等式对常值函数成立. 下面考虑函数  
> $$
> \varphi(x) =
> \begin{cases}
> 0, & -\pi < x < a, \\\\
> 1, & a \le x \le b, \\\\
> 0, & b < x < \pi.
> \end{cases}
> $$
>
> 将 $\varphi$ 延拓为 $\mathbb{R}$ 上周期 $2\pi$ 函数，其 Fourier 系数为  
> $$
> \begin{aligned}
> a_0 &= \frac{1}{\pi} \int_{-\pi}^\pi \varphi(x) dx = \frac{1}{\pi}(b - a),\\\\
> a_k &= \frac{1}{\pi} \int_{-\pi}^\pi \varphi(x) \cos kx dx = \frac{1}{\pi} \int_a^b \cos kx dx = \frac{1}{\pi k}(\sin kb - \sin ka),\\\\
> b_k &= \frac{1}{\pi} \int_{-\pi}^\pi \varphi(x) \sin kx dx = \frac{1}{\pi} \int_a^b \sin kx dx = \frac{1}{\pi k}(\cos ka - \cos kb).
> \end{aligned}
> $$
>
> 此时  
> $$
> \begin{aligned}
> \frac{a_0^2}{2} + \sum_{n=1}^\infty (a_k^2 + b_k^2)
> &= \frac{1}{2\pi^2}(b - a)^2 + \frac{1}{\pi^2} \sum_{k=1}^\infty \frac{1}{k^2} \left[ (\sin kb - \sin ka)^2 + (\cos kb - \cos ka)^2 \right]\\\\
> &= \frac{1}{2\pi^2}(b - a)^2 + \frac{2}{\pi^2} \sum_{k=1}^\infty \frac{1}{k^2} [1 - \cos k(b - a)]\\\\
> &= \frac{1}{2\pi^2}(b - a)^2 + \frac{1}{\pi^2} \sum_{k=1}^\infty \frac{1}{k^2} \cos k(b - a)\\\\
> &= \frac{b - a}{\pi}\\\\
> &= \frac{1}{\pi} \int_{-\pi}^\pi \varphi^2(x) dx.
> \end{aligned}
> $$
>
> **(4)** 由 (2), (3) 知该等式对阶梯函数成立. 
>
> **(5)** 现设 $f$ 可积，则任给 $\varepsilon > 0$，存在阶梯函数 $g$ 使得  
> $$
> \int_{-\pi}^\pi (f - g)^2 dx \le \varepsilon.
> $$
>
> 因为该等式对 $g$ 成立，故 $n$ 充分大时  
> $$
> \int_{-\pi}^\pi [g - S_n(g)]^2 dx \le \varepsilon,
> $$
>
> 从而  
> $$
> \begin{aligned}
> \int_{-\pi}^\pi [f - S_n(f)]^2 dx &\le 3 \left\{ \int_{-\pi}^\pi (f - g)^2 dx + \int_{-\pi}^\pi [g - S_n(g)]^2 dx + \int_{-\pi}^\pi [S_n(g - f)]^2 dx \right\}\\\\
> &\le 3 \left\{ \varepsilon + \varepsilon + \int_{-\pi}^\pi (g - f)^2 dx \right\}\\\\
> &\le 9\varepsilon.
> \end{aligned}
> $$
>
> 这说明  
> $$
> \int_{-\pi}^\pi [f - S_n(f)]^2 dx \to 0 \quad (n \to \infty).
> $$
>
> 即该等式对 $f$ 成立. 

### · 广义 Parseval 等式

**推论2** (广义 Parseval 等式)

> 设 $f,g \in R^2[-\pi,\pi]$，则  
> $$
> \frac{1}{\pi} \int_{-\pi}^\pi f(x)g(x) dx = \frac{a_0 \alpha_0}{2} + \sum_{n=1}^\infty (a_n \alpha_n + b_n \beta_n),
> $$
> 其中 $a_n,b_n$ 是 $f$ 的 Fourier 系数，$\alpha_n,\beta_n$ 是 $g$ 的 Fourier 系数. 

/proof/

> 分别对 $f + g$ 和 $f - g$ 应用 Parseval 等式，然后二者相减即可. 

**推论3** (惟一性)

> 设 $f,g$ 为 $[-\pi,\pi]$ 上的连续函数，如果 $f$ 和 $g$ 的 Fourier 系数相同，则 $f \equiv g$. 

/proof/

> 考虑 $f - g$，其 Fourier 系数恒为 0，由 Parseval 等式，  
> $$
> \int_{-\pi}^\pi (f - g)^2 dx = 0.
> $$
>
> 由 $f - g$ 连续知 $f \equiv g$. 

**推论4**

> 设 $f$ 在 $[-\pi,\pi]$ 上连续，如果其 Fourier 展开一致收敛，则级数和必为 $f$. 

/proof/

> 记其 Fourier 展开的和为  
> $$
> S(x) = \frac{a_0}{2} + \sum_{n=1}^\infty (a_n \cos nx + b_n \sin nx),
> $$
> 则由一致收敛性知，上式可逐项积分，根据本章开头的计算可知 $S(x)$ 的 Fourier 系数和 $f$ 的 Fourier 系数相同. 
>
> 由推论知 $S(x) = f(x)$. 

## Part 4 Fourier 级数微积分

### · 积分

我们首先说明，不管收敛与否，可积函数的 Fourier 级数总是可以逐项积分的. 

**定理1** (Reymond)

> 设 $f$ 在 $[-\pi,\pi]$ 上 Riemann 可积，其 Fourier 展开为  
> $$
> f(x) \sim \frac{a_0}{2} + \sum_{n=1}^\infty (a_n \cos nx + b_n \sin nx).
> $$
>
> 则对任意区间 $[a,b] \subset [-\pi,\pi]$，有  
> $$
> \int_a^b f(x) dx = \int_a^b \frac{a_0}{2} dx + \sum_{n=1}^\infty \int_a^b (a_n \cos nx + b_n \sin nx) dx.
> $$

/proof/

> 考虑特征函数  
> $$
> \varphi(x) =
> \begin{cases}
> 1, & x \in [a,b], \\\\
> 0, & x \in [-\pi,a) \cup (b,\pi],
> \end{cases}
> $$
> 其 Fourier 系数记为 $\alpha_n,\beta_n$，则由广义 Parseval 等式，有  
> $$
> \frac{1}{\pi} \int_{-\pi}^\pi f(x)\varphi(x) dx = \frac{a_0}{2} \alpha_0 + \sum_{n=1}^\infty (a_n \alpha_n + b_n \beta_n),
> $$
> 在上式中代入  
> $$
> \begin{aligned}
> \alpha_0 &= \frac{1}{\pi} \int_{-\pi}^\pi \varphi(x) dx = \frac{1}{\pi}(b - a),\\\\
> \alpha_n &= \frac{1}{\pi} \int_{-\pi}^\pi \varphi(x) \cos nx dx = \frac{1}{\pi} \int_a^b \cos nx dx,\\\\
> \beta_n &= \frac{1}{\pi} \int_{-\pi}^\pi \varphi(x) \sin nx dx = \frac{1}{\pi} \int_a^b \sin nx dx,
> \end{aligned}
> $$
> 即得欲证之等式. 

### · 微分

为了考虑 Fourier 级数的微分，我们先考虑一致收敛性. 

**定理2**

> 设 $f$ 是 $[-\pi,\pi]$ 上的连续函数，$f(-\pi) = f(\pi)$. 如果 $f$ 在 $[-\pi,\pi]$ 上分段可微，且 $f'$ Riemann 可积，则 $f(x)$ 的 Fourier 级数在 $[-\pi,\pi]$ 上一致收敛于 $f(x)$：  
> $$
> f(x) = \frac{a_0}{2} + \sum_{n=1}^\infty (a_n \cos nx + b_n \sin nx),\quad \forall\ x \in [-\pi,\pi].
> $$

/proof/

> 已知推论：
>
> 设 $f$ 在 $[-\pi,\pi]$ 上连续，如果其 Fourier 展开一致收敛，则级数和必为 $f$. 
>
> 只要证明上式右边是一致收敛就可以了. 事实上，记 $f'$ 的 Fourier 系数分别为 $a'_n,b'_n$，则由分部积分得（其中用到条件 $f(-\pi) = f(\pi)$）  
> $$
> \begin{aligned}
> a'_n &= \frac{1}{\pi} \int_{-\pi}^\pi f'(x) \cos nx dx = \frac{1}{\pi} \int_{-\pi}^\pi f(x) n \sin nx dx = n b_n,\\\\
> b'_n &= \frac{1}{\pi} \int_{-\pi}^\pi f'(x) \sin nx dx = -\frac{1}{\pi} \int_{-\pi}^\pi f(x) n \cos nx dx = -n a_n.
> \end{aligned}
> $$
>
> 对可积函数 $f'$ 用 Parseval 等式得  
> $$
> \frac{1}{2}(a'_0)^2 + \sum_{n=1}^\infty [(a'_n)^2 + (b'_n)^2] = \frac{1}{\pi} \int_{-\pi}^\pi (f')^2 dx.
> $$
>
> 另一方面，我们有估计
> $$
> \begin{aligned}
> |a_n \cos nx + b_n \sin nx| &\le |a_n| + |b_n|\\\\
> &= \frac{1}{n}|a'_n| + \frac{1}{n}|b'_n|\\\\
> &\le \frac{1}{2} \left( \frac{1}{n^2} + |a'_n|^2 \right) + \frac{1}{2} \left( \frac{1}{n^2} + |b'_n|^2 \right),
> \end{aligned}
> $$
>
> 根据函数项级数的 Weierstrass 判别法知 $f$ 的 Fourier 展开的确是一致收敛的. 
>
> 根据以上证明可知，在定理的条件下，$f'$ 的 Fourier 展开为  
> $$
> f'(x) \sim \sum_{n=1}^\infty (n b_n \cos nx - n a_n \sin nx),
> $$
>
> 一般来说，要上式成为等式的话需要加进一步的条件. 

**定理3**

> 设 $f$ 是以 $2\pi$ 为周期的连续可微函数. 如果 $f'$ 在 $[-\pi,\pi]$ 上分段可微，则 $f$ 的 Fourier 展开  
> $$
> f(x) = \frac{a_0}{2} + \sum_{n=1}^\infty (a_n \cos nx + b_n \sin nx)
> $$
> 可在 $[-\pi,\pi]$ 上逐次求导：  
> $$
> f'(x) = \sum_{n=1}^\infty (n b_n \cos nx - n a_n \sin nx),
> $$
>
> 当 $f''$ Riemann 可积时，上式右边的级数还是一致收敛的. 

### · Weierstrass

**定理4** (Weierstrass)

> 设 $f$ 是 $[-\pi,\pi]$ 上的连续函数，$f(-\pi) = f(\pi)$. 则任给 $\varepsilon > 0$，存在三角多项式 $T(x)$，使得  
> $$
> |f(x) - T(x)| < \varepsilon,\quad \forall\ x \in [-\pi,\pi].
> $$

/proof/

> 首先，连续函数 $f$ 可以用分段线性函数一致逼近. 即存在周期为 $2\pi$ 的分段线性函数 $g$，使得  
> $$
> |f(x) - g(x)| < \frac{\varepsilon}{2},\quad \forall\ x \in [-\pi,\pi].
> $$
>
> 其次，$g$ 满足定理2的条件，故其 Fourier 展开一致收敛于 $g$. 即 $n$ 充分大时  
> $$
> |g(x) - S_n(g)(x)| < \frac{\varepsilon}{2},\quad \forall\ x \in [-\pi,\pi].
> $$
>
> 这说明  
> $$
> |f(x) - S_n(g)(x)| \le |f(x) - g(x)| + |g(x) - S_n(g)(x)| < \varepsilon.
> $$
>
> 这就证明了定理. 

**推论5**

> 设 $f$ 为 $[-\pi,\pi]$ 上的连续函数，$f(-\pi) = f(\pi)$. 则任给 $\varepsilon > 0$，存在多项式 $P(x)$，使得  
> $$
> |f(x) - P(x)| < \varepsilon,\quad \forall\ x \in [-\pi,\pi].
> $$

/proof/

> 由 Weierstrass 定理，存在三角多项式 $T(x)$ 使得  
> $$
> |f(x) - T(x)| < \frac{\varepsilon}{2},\quad \forall\ x \in [-\pi,\pi].
> $$
>
> 由于三角函数的 Taylor 展开都是一致收敛的，从而存在多项式 $P(x)$ 使得  
> $$
> |T(x) - P(x)| < \frac{\varepsilon}{2},\quad \forall\ x \in [-\pi,\pi].
> $$
>
> 这说明  
> $$
> |f(x) - P(x)| \le |f(x) - T(x)| + |T(x) - P(x)| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
> $$

**推论6**

> $f$ 为 $[a,b]$ 上的连续函数，则任给 $\varepsilon > 0$，存在多项式 $P(x)$，使得  
> $$
> |f(x) - P(x)| \le \varepsilon,\quad \forall\ x \in [a,b].
> $$

/proof/

> 利用线性变换 $t = \dfrac{\pi}{b - a}(x - a)$ 把 $[a,b]$ 上的函数变为 $[0,\pi]$ 上的函数. 
>
> 将此函数以 $2\pi$ 为周期作偶延拓，然后利用前一推论即可，注意线性变换将多项式仍变成多项式. 
