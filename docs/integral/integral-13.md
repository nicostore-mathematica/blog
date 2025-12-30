---
title: Chapter 13 Fourier 分析
permalink: /integral/integral-13/
createTime: 2025/12/16 19:24:03
---

在工程技术问题中，人们经常遇到周期现象，一个自然的想法就是：能否将较为复杂的周期现象分解为简单周期现象的叠加？

历史上，Fourier 在研究热传导问题时用这种想法得出了丰富的结果，由此引发的很多问题对现代分析学产生了深远的影响. 

## Part 1 Fourier 级数

### · 三角函数系

函数列

$$
1,\ \cos x,\ \sin x,\ \cos 2x,\ \sin 2x,\ \cdots,\ \cos nx,\ \sin nx,\ \cdots
$$

称为三角函数系. 如果这一列函数记为 $\{\varphi_i(x)\}$，则  
$$
\int_{-\pi}^{\pi} \varphi_i(x) \varphi_j(x)\, dx = 0,\quad \forall\ i \ne j,
$$

这个积分性质称为三角函数系的正交性. 有限和  
$$
a_0 + \sum_{k=1}^{n} (a_k \cos kx + b_k \sin kx)
$$

称为三角多项式，而形式和  
$$
a_0 + \sum_{k=1}^{\infty} (a_k \cos kx + b_k \sin kx)
$$

称为三角级数，其中 $a_0, a_k, b_k$ 等称为该三角级数的系数. 

三角函数都是周期为 $2\pi$ 的函数. 一个自然的问题是：如果 $f$ 是一个周期为 $2\pi$ 的函数，能否用三角多项式去逼近它？

为了讨论这一问题，以下我们假定 $f$ 总是 Riemann 可积或广义绝对可积的函数（即有瑕点但瑕积分绝对收敛的函数）. 

### · Fourier 系数

**定义1** (Fourier 系数)

> 设 $f$ 如上，令  
> $$
> a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\, dx,\quad a_k = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos kx\, dx,
> $$
> $$
> b_k = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin kx\, dx,\quad k = 1,2,\cdots.
> $$
>
> $a_0, a_k, b_k$ 称为 $f$ 的 Fourier 系数，形式和  
> $$
> \frac{a_0}{2} + \sum_{k=1}^{\infty} (a_k \cos kx + b_k \sin kx)
> $$
>
> 称为 $f$ 的 Fourier 级数或 Fourier 展开，记为  
> $$
> f(x) \sim \frac{a_0}{2} + \sum_{k=1}^{\infty} (a_k \cos kx + b_k \sin kx).
> $$

> [!important]
>
> (1). 如果  
> $$
> f(x) = \frac{a_0}{2} + \sum_{k=1}^{\infty} (a_k \cos kx + b_k \sin kx)
> $$
> 一致收敛，则由逐项积分可得  
> $$
> \int_{-\pi}^{\pi} f(x)\, dx = a_0 \pi + \sum_{k=1}^{\infty} \left( a_k \int_{-\pi}^{\pi} \cos kx\, dx + b_k \int_{-\pi}^{\pi} \sin kx\, dx \right) = a_0 \pi.
> $$
>
> 同理，  
> $$
> \begin{aligned}
> \int_{-\pi}^{\pi} f(x) \cos kx\, dx &= \int_{-\pi}^{\pi} \frac{a_0}{2} \cos kx\, dx \\\\
> &+ \sum_{m=1}^{\infty} \left( a_m \int_{-\pi}^{\pi} \cos kx \cos mx\, dx + b_m \int_{-\pi}^{\pi} \cos kx \sin mx\, dx \right)\\\\
> &= 0 + a_k \int_{-\pi}^{\pi} \cos^2 kx\, dx + 0 = a_k \pi,
> \end{aligned}
> $$
>
> 对于 $b_k$ 有类似结果，这就是为什么我们要象前面那样定义 Fourier 系数. 
>
> (2). 对于 $2\pi$ 周期函数，定义其 Fourier 系数时可以在长度为 $2\pi$ 的任意区间上积分. 简单的观察表明，如果 $f$ 为奇函数，则 $a_k = 0$，此时的 Fourier 展开称为正弦级数；如果 $f$ 为偶函数，则 $b_k = 0$，此时的 Fourier 展开称为余弦级数. 

### · Riemann-Lebesgue

为了研究 Fourier 展开的收敛性，我们需要对系数 $a_k, b_k$ 做一些估计. 下面的结果我们在定积分中已经证明过了，现在再复习一下. 

**定理1** (Riemann-Lebesgue)

> 设 $f$ 在 $[a,b]$ 上 Riemann 可积或广义绝对可积，则  
> $$
> \lim_{\lambda \to \infty} \int_a^b f(x) \cos \lambda x\, dx = \lim_{\lambda \to +\infty} \int_a^b f(x) \sin \lambda x\, dx = 0.
> $$

/proof/

> 任给 $\varepsilon > 0$，Riemann 可积或广义绝对可积的函数 $f$ 可用阶梯函数逼近，即存在阶梯函数 $g$，使得  
> $$
> \int_a^b |f(x) - g(x)|\, dx < \varepsilon.
> $$
>
> 此时，  
> $$
> \left| \int_a^b f(x) \cos \lambda x\, dx - \int_a^b g(x) \cos \lambda x\, dx \right| \le \int_a^b |f(x) - g(x)|\, dx < \varepsilon.
> $$
>
> 因此，只要对阶梯函数证明结论即可，进而只要对 $[c,d] \subset [a,b]$ 上的常值函数证明即可：如果 $f = \mu$，则  
> $$
> \left| \int_c^d \mu \cos \lambda x\, dx \right| = \left| \mu \cdot \frac{1}{\lambda} (\sin \lambda d - \sin \lambda c) \right| \le \frac{2|\mu|}{\lambda} \to 0\quad (\lambda \to +\infty).
> $$
>
> 对 $\sin \lambda x$ 的证明是完全类似的. 

**推论2**.

> 设 $f$ 在 $[-\pi,\pi]$ 上 Riemann 可积或广义绝对可积，则其 Fourier 系数 $a_k \to 0$, $b_k \to 0$ ($k \to +\infty$). 

/proof/

> 如果 $f$ 有更好的光滑性，则其系数有更好的估计. 例如，设 $f \in C^1[-\pi,\pi]$，且 $f(-\pi) = f(\pi)$，则  
> $$
> \begin{aligned}
> b_n &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx\, dx\\\\
> &= \frac{1}{\pi} \left[ f(x) \frac{-1}{n} \cos nx \Big|_{-\pi}^{\pi} + \frac{1}{n} \int_{-\pi}^{\pi} f'(x) \cos nx\, dx \right]\\\\
> &= \frac{1}{n} \cdot \frac{1}{\pi} \int_{-\pi}^{\pi} f'(x) \cos nx\, dx = o\left( \frac{1}{n} \right),\quad \text{(Riemann--Lebesgue)}
> \end{aligned}
> $$
>
> 同理可证 $a_n = o\left( \dfrac{1}{n} \right)$. 一般地，设 $f \in C^k([-\pi,\pi])$，$f^{(i)}(-\pi) = f^{(i)}(\pi)$ ($0 \le i \le k-1$)，则  
> $$
> a_n = o\left( \frac{1}{n^k} \right),\quad b_n = o\left( \frac{1}{n^k} \right).
> $$

## Part 2 Fourier 级数收敛性

如果 $f \in C^2[-\pi,\pi]$，$f(-\pi) = f(\pi)$，$f'(-\pi) = f'(\pi)$，则其 Fourier 系数满足估计 $a_n = o(n^{-2})$，$b_n = o(n^{-2})$，因而 Fourier 展开一致收敛. 

我们已看到，

记  
$$
\sigma_n(x) = \frac{1}{2} + \cos x + \cos 2x + \cdots + \cos nx,
$$

称为 Dirichlet 核. 利用等式  
$$
\sin \frac{1}{2}x \cos kx = \frac{1}{2} \left[ \sin\left(k + \frac{1}{2}\right)x - \sin\left(k - \frac{1}{2}\right)x \right]
$$

可以求出 Dirichlet 核的表达式如下  
$$
\sigma_n(x) = \frac{\sin(n + \frac{1}{2})x}{2 \sin \frac{1}{2}x},\quad \forall\ x \ne 2k\pi.
$$

当 $x = 2k\pi$ 时，规定 $\sigma_n(x) = n + \dfrac{1}{2}$，此时 $\sigma_n$ 为连续函数，且  
$$
\int_0^\pi \frac{\sin(n + \frac{1}{2})x}{2 \sin \frac{1}{2}x} dx = \int_0^\pi \left( \frac{1}{2} + \cos x + \cos 2x + \cdots + \cos nx \right) dx = \frac{\pi}{2}.
$$
**应用**：

> 积分：
> $$
> \int_0^{+\infty} \frac{\sin x}{x} dx = \frac{\pi}{2}.
> $$
>
> 现在我们用新方法再算一次：
>
> $$
> \begin{aligned}
> \int_0^{+\infty} \frac{\sin x}{x} dx &= \lim_{A \to +\infty} \int_0^A \frac{\sin x}{x} dx\\\\
> &= \lim_{n \to +\infty} \int_0^{(n + \frac{1}{2})\pi} \frac{\sin x}{x} dx\\\\
> &= \lim_{n \to +\infty} \int_0^\pi \frac{\sin(n + \frac{1}{2})t}{t} dt \quad (x \to (n + \frac{1}{2})t)\\\\
> &= \frac{\pi}{2} + \lim_{n \to +\infty} \int_0^\pi \left( \frac{1}{t} - \frac{1}{2 \sin \frac{t}{2}} \right) \sin(n + \frac{1}{2})t\, dt\\\\
> &= \frac{\pi}{2}. \quad \text{(Riemann--Lebesgue)}
> \end{aligned}
> $$
>
> 其中，因为  
> $$
> \lim_{t \to 0} \left( \frac{1}{t} - \frac{1}{2 \sin \frac{t}{2}} \right) = \lim_{t \to 0} \frac{2 \sin \frac{t}{2} - t}{2t \sin \frac{t}{2}} = 0,
> $$
>
> 故 $\dfrac{1}{t} - \dfrac{1}{2 \sin \frac{t}{2}}$ 可看成 $[0,\pi]$ 中连续函数，从而可以应用 Riemann-Lebesgue 引理. 
>
> ---
>
> 记 $f$ 的 Fourier 展开的部分和为 $S_n(x)$，则  
> $$
> \begin{aligned}
> S_n(x) &= \frac{a_0}{2} + \sum_{k=1}^n (a_k \cos kx + b_k \sin kx)\\\\
> &= \frac{1}{2\pi} \int_{-\pi}^\pi f(t)\, dt + \frac{1}{\pi} \sum_{k=1}^n \left( \int_{-\pi}^\pi f(t) \cos kt \cos kx\, dt + \int_{-\pi}^\pi f(t) \sin kt \sin kx\, dt \right)\\\\
> &= \frac{1}{\pi} \int_{-\pi}^\pi f(t) \left[ \frac{1}{2} + \sum_{k=1}^n (\cos kt \cos kx + \sin kt \sin kx) \right] dt\\\\
> &= \frac{1}{\pi} \int_{-\pi}^\pi f(t) \left[ \frac{1}{2} + \sum_{k=1}^n \cos k(t - x) \right] dt\\\\
> &= \frac{1}{\pi} \int_{-\pi}^\pi f(x + u) \sigma_n(u)\, du,
> \end{aligned}
> $$
>
> 其中最后一个等式用到了变量代换 $u = t - x$，并且利用了被积函数的周期性，即在 $[-\pi - x, \pi - x]$ 上的积分等于在 $[-\pi, \pi]$ 上的积分. 利用上式，并注意 $\sigma_n$ 是偶函数，我们可以进一步将上式改写为  
> $$
> S_n(x) = \frac{1}{\pi} \int_0^\pi \frac{f(x + u) + f(x - u)}{2} \frac{\sin(n + \frac{1}{2})u}{\sin \frac{u}{2}} du.
> $$
>
> 任给 $\delta > 0$，由 Riemann-Lebesgue 引理，
> $$
> \begin{aligned}
> \lim_{n \to \infty} S_n(x) &= \frac{1}{\pi} \lim_{n \to \infty} \int_0^\delta \frac{f(x + u) + f(x - u)}{2} \frac{\sin(n + \frac{1}{2})u}{\sin \frac{u}{2}} du\\\\
> &+ \lim_{n \to \infty} \frac{1}{\pi} \int_\delta^\pi \frac{f(x + u) + f(x - u)}{2 \sin \frac{u}{2}} \sin(n + \frac{1}{2})u\, du\\\\
> &= \frac{1}{\pi} \lim_{n \to \infty} \int_0^\delta \frac{f(x + u) + f(x - u)}{2} \frac{\sin(n + \frac{1}{2})u}{\sin \frac{u}{2}} du,
> \end{aligned}
> $$
>
> 因此，$S_n(x)$ 的收敛性只和 $f$ 在 $x$ 附近的性态有关，这是 Riemann 的发现，有时称为 Riemann 局部化原理. 

### · Dini 判别法

**定理1** (Dini 判别法)

> 设 $f$ 如前. 如果存在 $\delta > 0$，使得  
>
> (1) $f$ 在 $x$ 处的右极限 $f(x + 0)$ 和左极限 $f(x - 0)$ 存在；  
>
> (2) 积分  
> $$
> \int_0^\delta \frac{f(x + u) - f(x + 0)}{u} du,\quad \int_0^\delta \frac{f(x - u) - f(x - 0)}{u} du,
> $$
>
> 绝对收敛，则 $f$ 的 Fourier 展开在点 $x$ 处收敛于值 $\dfrac{f(x + 0) + f(x - 0)}{2}$. 

/proof/

> 证明基本上是应用 Riemann-Lebesgue 引理，以及注意函数 $\dfrac{1}{u} - \dfrac{1}{2 \sin \frac{u}{2}}$ 在 $[0,\delta]$ 上的连续性. 下面我们对一个特殊情形加以证明，这个情形对大多数应用而言是足够的. 

### · Dirichlet

**定义1**.

> 设 $f$ 是定义在 $[a,b]$ 上的函数，如果存在 $[a,b]$ 的分割  
> $$
> a = t_0 < t_1 < \cdots < t_m = b,
> $$
>
> 使得在每个小区间 $[t_{i-1}, t_i]$ ($i = 1,2,\cdots,m$) 上定义的函数  
> $$
> f_i(x) =
> \begin{cases}
> f(t_{i-1} + 0), & x = t_{i-1}, \\\\
> f(x), & x \in (t_{i-1}, t_i), \\\\
> f(t_i - 0), & x = t_i,
> \end{cases}
> $$
>
> 都是 $[t_{i-1}, t_i]$ 上的可微函数，则称 $f$ 是分段可微函数. 

**定理2** (Dirichlet)

> 设 $f$ 是一个周期为 $2\pi$ 的分段可微函数，则对任意的 $x \in [-\pi,\pi]$，$f$ 的 Fourier 展开在 $x$ 处收敛到 $\dfrac{1}{2}[f(x + 0) + f(x - 0)]$. 

/proof/

> 由前面的计算以及 Riemann-Lebesgue 引理，我们有  
> $$
> \begin{aligned}
> \lim_{n \to \infty} S_n(x) &= \lim_{n \to \infty} \frac{1}{\pi} \int_0^\pi \frac{f(x + u) + f(x - u)}{2} \frac{\sin(n + \frac{1}{2})u}{\sin \frac{u}{2}} du\\\\
> &= \lim_{n \to \infty} \frac{1}{\pi} \int_0^\pi \frac{f(x + u) - f(x + 0)}{2 \sin \frac{u}{2}} \sin(n + \frac{1}{2})u\, du + \frac{1}{2} f(x + 0)\\\\
> &+ \lim_{n \to \infty} \frac{1}{\pi} \int_0^\pi \frac{f(x - u) - f(x - 0)}{2 \sin \frac{u}{2}} \sin(n + \frac{1}{2})u\, du + \frac{1}{2} f(x - 0)\\\\
> &= \frac{1}{2}[f(x + 0) + f(x - 0)].
> \end{aligned}
> $$
>
> 最后的等式是因为，如果 $f$ 分段可微，则  
> $$
> \frac{f(x + u) - f(x + 0)}{2 \sin \frac{u}{2}}\quad \text{and}\quad \frac{f(x - u) - f(x - 0)}{2 \sin \frac{u}{2}}
> $$
>
> 关于 $u$ 是分段连续（可积）的，从而可以应用 Riemann-Lebesgue 引理. 

**注意**：分段可微的条件只是用来保证 Riemann-Lebesgue 引理可用. 从证明过程即可看出，如果 $f$ 在 $x$ 附近满足 $\alpha$ ($0 < \alpha \le 1$) 阶 Hölder 条件，则定理结论仍然成立. 

### · 例题

下面是一些进一步的例子. 

/example/  求函数 $f(x) = \cos \mu x$，$x \in [-\pi,\pi]$ 的 Fourier 展开（$\mu$ 不是整数）. 

> 将 $f$ 延拓为 $\mathbb{R}$ 上以 $2\pi$ 为周期的周期函数，这是偶函数，因此 $b_k = 0$. 而  
> $$
> \begin{aligned}
> a_k &= \frac{2}{\pi} \int_0^\pi \cos \mu x \cos kx\, dx\\\\
> &= \frac{1}{\pi} \int_0^\pi [\cos(\mu - k)x + \cos(\mu + k)x]\, dx\\\\
> &= \frac{1}{\pi} \left[ \frac{\sin(\mu - k)\pi}{\mu - k} + \frac{\sin(\mu + k)\pi}{\mu + k} \right]\\\\
> &= \frac{2\mu (-1)^k}{\pi} \cdot \frac{\sin \mu \pi}{\mu^2 - k^2}.
> \end{aligned}
> $$
>
> 由 Dirichlet 定理可得  
> $$
> \cos \mu x = \frac{2\mu \sin \mu \pi}{\pi} \left( \frac{1}{2\mu^2} + \sum_{n=1}^\infty \frac{(-1)^n}{\mu^2 - n^2} \cos nx \right),\quad \forall\ x \in [-\pi,\pi].
> $$
>
> 在上式中取 $x = \pi$ 得  
> $$
> \cos \mu \pi = \frac{2\mu \sin \mu \pi}{\pi} \left( \frac{1}{2\mu^2} + \sum_{n=1}^\infty \frac{1}{\mu^2 - n^2} \right),
> $$
>
> 上式可改写为  
> $$
> \cot \pi \mu - \frac{1}{\pi \mu} = \frac{1}{\pi} \sum_{n=1}^\infty \frac{2\mu}{\mu^2 - n^2}.
> $$
>
> 当 $0 \le \mu \le x < 1$ 时，上式右边的无穷求和关于 $\mu$ 一致收敛，从而可逐项积分：  
> $$
> \int_0^x \left( \cot \pi \mu - \frac{1}{\pi \mu} \right) d\mu = \frac{1}{\pi} \sum_{n=1}^\infty \ln(1 - \frac{x^2}{n^2}),
> $$
>
> 由此得到 $\sin \pi x$ 的如下展开式：  
> $$
> \sin \pi x = \pi x \left(1 - \frac{x^2}{1^2}\right)\left(1 - \frac{x^2}{2^2}\right)\left(1 - \frac{x^2}{n^2}\right)\cdots.
> $$

/example/

> 跟上例类似，我们有  
> $$
> \sin \mu x = \frac{2 \sin \mu \pi}{\pi} \sum_{n=1}^\infty \frac{(-1)^n n}{\mu^2 - n^2} \sin nx,\quad \forall\ x \in (-\pi,\pi).
> $$
>
> 如果一个函数仅在 $(0,\pi)$ 上定义，则我们可以首先将它延拓为周期为 $2\pi$ 的函数，然后再作 Fourier 展开. 
>
> 常用的延拓有奇延拓和偶延拓，即分别延拓为奇函数和偶函数. 

/example/ 将函数  
$$
f(x) = x,\quad x \in (0,\pi)
$$

分别作奇延拓和偶延拓，然后分别求 Fourier 展开. 

> **奇延拓**：令 $f(x) = x$，$x \in (-\pi,0)$，在 $0$ 和 $\pm\pi$ 处规定 $f$ 为 $0$. 
>
> 则 Fourier 系数为  
> $$
> \begin{aligned}
> a_k = 0,\quad b_k &= \frac{2}{\pi} \int_0^\pi x \sin kx\, dx\\\\
> &= \frac{2}{\pi} \left[ -\frac{x}{k} \cos kx \Big|_0^\pi + \frac{1}{k} \int_0^\pi \cos kx\, dx \right]\\\\
> &= \frac{2}{\pi} \left[ -\frac{\pi}{k} \cos k\pi + \frac{1}{k^2} \sin k\pi \right]\\\\
> &= (-1)^{k-1} \frac{2}{k}.
> \end{aligned}
> $$
>
> 因此  
> $$
> x = 2 \sum_{n=1}^\infty (-1)^{n-1} \frac{\sin nx}{n},\quad 0 \le x < \pi.
> $$
>
> **偶延拓**：令 $f(x) = -x$，$x \in (-\pi,0)$，在 $0$ 处 $f(0) = 0$，在 $\pm\pi$ 处 $f$ 为 $\pi$. 
>
> 此时 Fourier 系数为  
> $$
> b_k = 0,\quad a_0 = \frac{2}{\pi} \int_0^\pi x\, dx = \pi,
> \quad a_k = \frac{2}{\pi} \int_0^\pi x \cos kx\, dx = \frac{2}{k^2 \pi} [(-1)^k - 1].
> $$
>
> 因此  
> $$
> x = \frac{\pi}{2} - \frac{4}{\pi} \sum_{k=0}^\infty \frac{\cos(2k + 1)x}{(2k + 1)^2},\quad 0 \le x \le \pi.
> $$

一般地，如果一个函数周期为 $2l$，则和周期 $2\pi$ 的情形类似，令  
$$
\begin{aligned}
a_n &= \frac{1}{l} \int_{-l}^l f(x) \cos \frac{n\pi}{l} x\, dx,\quad n = 0,1,2,\cdots,\\\\
b_n &= \frac{1}{l} \int_{-l}^l f(x) \sin \frac{n\pi}{l} x\, dx,\quad n = 1,2,\cdots.
\end{aligned}
$$

则 $f$ 有 Fourier 展开  
$$
f \sim \frac{a_0}{2} + \sum_{n=1}^\infty \left( a_n \cos \frac{n\pi}{l} x + b_n \sin \frac{n\pi}{l} x \right).
$$

通过变量替换 $t = \dfrac{\pi x}{l}$ 可以将周期 $2l$ 的函数变为周期 $2\pi$ 函数，因此容易看出，Dirichlet 定理对于周期为 $2l$ 的函数仍成立. 

/example/

设 $f(x)$ 是以 $2$ 为周期的周期函数，且  
$$
f(x) = x^2,\quad x \in [-1,1]
$$

求其 Fourier 展开. 

> $f$ 为偶函数，因此 $b_k = 0$. 而  
> $$
> a_0 = \int_{-1}^1 x^2 dx = \frac{2}{3},\quad a_n = 2 \int_0^1 x^2 \cos n\pi x\, dx = \frac{4}{n^2 \pi^2} (-1)^n,
> $$
>
> 这说明  
> $$
> x^2 = \frac{1}{3} + \frac{4}{\pi^2} \sum_{n=1}^\infty \frac{(-1)^n}{n^2} \cos n\pi x,\quad x \in [-1,1].
> $$
>
> 如果将 $x$ 变为 $\pi^{-1}(x - \pi)$，就得到如下等式：  
> $$
> x - \frac{x^2}{2\pi} = \frac{\pi}{3} - \frac{2}{\pi} \sum_{n=1}^\infty \frac{\cos nx}{n^2},\quad 0 \le x \le 2\pi.
> $$
>
> 它当然也可以通过对 $f(x) = x - \dfrac{x^2}{2\pi}$ ($0 \le x \le 2\pi$) 作 Fourier 展开得到，下一节我们将要用到这个等式. 

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
> \frac{1}{\pi} \int_{-\pi}^\pi [f - S_n(f)]^2 dx &= \frac{1}{\pi} \int_{-\pi}^\pi f^2 dx - \frac{2}{\pi} \int_{-\pi}^\pi f \cdot S_n(f) dx + \frac{1}{\pi} \int_{-\pi}^\pi S_n^2(f) dx\\\\
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



