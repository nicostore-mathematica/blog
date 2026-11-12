---
url: /integral/integral-25/index.md
---
在工程技术问题中，人们经常遇到周期现象，一个自然的想法就是：能否将较为复杂的周期现象分解为简单周期现象的叠加？

历史上，Fourier 在研究热传导问题时用这种想法得出了丰富的结果，由此引发的很多问题对现代分析学产生了深远的影响.

## Part 1 Fourier 级数

### · 三角函数系

函数列

$$
1,\ \cos x,\ \sin x,\ \cos 2x,\ \sin 2x,\ \cdots,\ \cos nx,\ \sin nx,\ \cdots
$$

称为三角函数系. 如果这一列函数记为 ${\varphi\_i(x)}$，则\
$$
\int\_{-\pi}^{\pi} \varphi\_i(x) \varphi\_j(x), dx = 0,\quad \forall\ i \ne j,
$$

这个积分性质称为三角函数系的正交性. 有限和\
$$
a\_0 + \sum\_{k=1}^{n} (a\_k \cos kx + b\_k \sin kx)
$$

称为三角多项式，而形式和\
$$
a\_0 + \sum\_{k=1}^{\infty} (a\_k \cos kx + b\_k \sin kx)
$$

称为三角级数，其中 $a\_0, a\_k, b\_k$ 等称为该三角级数的系数.

三角函数都是周期为 $2\pi$ 的函数. 一个自然的问题是：如果 $f$ 是一个周期为 $2\pi$ 的函数，能否用三角多项式去逼近它？

为了讨论这一问题，以下我们假定 $f$ 总是 Riemann 可积或广义绝对可积的函数（即有瑕点但瑕积分绝对收敛的函数）.

### · Fourier 系数

**定义1** (Fourier 系数)

> 设 $f$ 如上，令\
> $$
> a\_0 = \frac{1}{\pi} \int\_{-\pi}^{\pi} f(x), dx,\quad a\_k = \frac{1}{\pi} \int\_{-\pi}^{\pi} f(x) \cos kx, dx,
> $$
>
> $$
> b\_k = \frac{1}{\pi} \int\_{-\pi}^{\pi} f(x) \sin kx, dx,\quad k = 1,2,\cdots.
> $$
>
> $a\_0, a\_k, b\_k$ 称为 $f$ 的 Fourier 系数，形式和\
> $$
> \frac{a\_0}{2} + \sum\_{k=1}^{\infty} (a\_k \cos kx + b\_k \sin kx)
> $$
>
> 称为 $f$ 的 Fourier 级数或 Fourier 展开，记为\
> $$
> f(x) \sim \frac{a\_0}{2} + \sum\_{k=1}^{\infty} (a\_k \cos kx + b\_k \sin kx).
> $$

> \[!important]
>
> (1). 如果\
> $$
> f(x) = \frac{a\_0}{2} + \sum\_{k=1}^{\infty} (a\_k \cos kx + b\_k \sin kx)
> $$
> 一致收敛，则由逐项积分可得\
> $$
> \int\_{-\pi}^{\pi} f(x), dx = a\_0 \pi + \sum\_{k=1}^{\infty} \left( a\_k \int\_{-\pi}^{\pi} \cos kx, dx + b\_k \int\_{-\pi}^{\pi} \sin kx, dx \right) = a\_0 \pi.
> $$
>
> 同理，\
> $$
> \begin{aligned}
> \int\_{-\pi}^{\pi} f(x) \cos kx, dx &= \int\_{-\pi}^{\pi} \frac{a\_0}{2} \cos kx, dx \\\\
> &+ \sum\_{m=1}^{\infty} \left( a\_m \int\_{-\pi}^{\pi} \cos kx \cos mx, dx + b\_m \int\_{-\pi}^{\pi} \cos kx \sin mx, dx \right)\\\\
> &= 0 + a\_k \int\_{-\pi}^{\pi} \cos^2 kx, dx + 0 = a\_k \pi,
> \end{aligned}
> $$
>
> 对于 $b\_k$ 有类似结果，这就是为什么我们要象前面那样定义 Fourier 系数.
>
> (2). 对于 $2\pi$ 周期函数，定义其 Fourier 系数时可以在长度为 $2\pi$ 的任意区间上积分. 简单的观察表明，如果 $f$ 为奇函数，则 $a\_k = 0$，此时的 Fourier 展开称为正弦级数；如果 $f$ 为偶函数，则 $b\_k = 0$，此时的 Fourier 展开称为余弦级数.

### · Riemann-Lebesgue

为了研究 Fourier 展开的收敛性，我们需要对系数 $a\_k, b\_k$ 做一些估计. 下面的结果我们在定积分中已经证明过了，现在再复习一下.

**定理1** (Riemann-Lebesgue)

> 设 $f$ 在 $\[a,b]$ 上 Riemann 可积或广义绝对可积，则\
> $$
> \lim\_{\lambda \to \infty} \int\_a^b f(x) \cos \lambda x, dx = \lim\_{\lambda \to +\infty} \int\_a^b f(x) \sin \lambda x, dx = 0.
> $$

/proof/

> 任给 $\varepsilon > 0$，Riemann 可积或广义绝对可积的函数 $f$ 可用阶梯函数逼近，即存在阶梯函数 $g$，使得\
> $$
> \int\_a^b |f(x) - g(x)|, dx < \varepsilon.
> $$
>
> 此时，\
> $$
> \left| \int\_a^b f(x) \cos \lambda x, dx - \int\_a^b g(x) \cos \lambda x, dx \right| \le \int\_a^b |f(x) - g(x)|, dx < \varepsilon.
> $$
>
> 因此，只要对阶梯函数证明结论即可，进而只要对 $\[c,d] \subset \[a,b]$ 上的常值函数证明即可：如果 $f = \mu$，则\
> $$
> \left| \int\_c^d \mu \cos \lambda x, dx \right| = \left| \mu \cdot \frac{1}{\lambda} (\sin \lambda d - \sin \lambda c) \right| \le \frac{2|\mu|}{\lambda} \to 0\quad (\lambda \to +\infty).
> $$
>
> 对 $\sin \lambda x$ 的证明是完全类似的.

**推论2**.

> 设 $f$ 在 $\[-\pi,\pi]$ 上 Riemann 可积或广义绝对可积，则其 Fourier 系数 $a\_k \to 0$, $b\_k \to 0$ ($k \to +\infty$).

/proof/

> 如果 $f$ 有更好的光滑性，则其系数有更好的估计. 例如，设 $f \in C^1\[-\pi,\pi]$，且 $f(-\pi) = f(\pi)$，则\
> $$
> \begin{aligned}
> b\_n &= \frac{1}{\pi} \int\_{-\pi}^{\pi} f(x) \sin nx, dx\\\\
> &= \frac{1}{\pi} \left\[ f(x) \frac{-1}{n} \cos nx \Big|*{-\pi}^{\pi} + \frac{1}{n} \int*{-\pi}^{\pi} f'(x) \cos nx, dx \right]\\\\
> &= \frac{1}{n} \cdot \frac{1}{\pi} \int\_{-\pi}^{\pi} f'(x) \cos nx, dx = o\left( \frac{1}{n} \right),\quad \text{(Riemann--Lebesgue)}
> \end{aligned}
> $$
>
> 同理可证 $a\_n = o\left( \dfrac{1}{n} \right)$. 一般地，设 $f \in C^k(\[-\pi,\pi])$，$f^{(i)}(-\pi) = f^{(i)}(\pi)$ ($0 \le i \le k-1$)，则\
> $$
> a\_n = o\left( \frac{1}{n^k} \right),\quad b\_n = o\left( \frac{1}{n^k} \right).
> $$

## Part 2 Fourier 级数收敛性

如果 $f \in C^2\[-\pi,\pi]$，$f(-\pi) = f(\pi)$，$f'(-\pi) = f'(\pi)$，则其 Fourier 系数满足估计 $a\_n = o(n^{-2})$，$b\_n = o(n^{-2})$，因而 Fourier 展开一致收敛.

我们已看到，

记\
$$
\sigma\_n(x) = \frac{1}{2} + \cos x + \cos 2x + \cdots + \cos nx,
$$

称为 Dirichlet 核. 利用等式\
$$
\sin \frac{1}{2}x \cos kx = \frac{1}{2} \left\[ \sin\left(k + \frac{1}{2}\right)x - \sin\left(k - \frac{1}{2}\right)x \right]
$$

可以求出 Dirichlet 核的表达式如下\
$$
\sigma\_n(x) = \frac{\sin(n + \frac{1}{2})x}{2 \sin \frac{1}{2}x},\quad \forall\ x \ne 2k\pi.
$$

当 $x = 2k\pi$ 时，规定 $\sigma\_n(x) = n + \dfrac{1}{2}$，此时 $\sigma\_n$ 为连续函数，且\
$$
\int\_0^\pi \frac{\sin(n + \frac{1}{2})x}{2 \sin \frac{1}{2}x} dx = \int\_0^\pi \left( \frac{1}{2} + \cos x + \cos 2x + \cdots + \cos nx \right) dx = \frac{\pi}{2}.
$$
**应用**：

> 积分：
> $$
> \int\_0^{+\infty} \frac{\sin x}{x} dx = \frac{\pi}{2}.
> $$
>
> 现在我们用新方法再算一次：
>
> $$
> \begin{aligned}
> \int\_0^{+\infty} \frac{\sin x}{x} dx &= \lim\_{A \to +\infty} \int\_0^A \frac{\sin x}{x} dx\\\\
> &= \lim\_{n \to +\infty} \int\_0^{(n + \frac{1}{2})\pi} \frac{\sin x}{x} dx\\\\
> &= \lim\_{n \to +\infty} \int\_0^\pi \frac{\sin(n + \frac{1}{2})t}{t} dt \quad (x \to (n + \frac{1}{2})t)\\\\
> &= \frac{\pi}{2} + \lim\_{n \to +\infty} \int\_0^\pi \left( \frac{1}{t} - \frac{1}{2 \sin \frac{t}{2}} \right) \sin(n + \frac{1}{2})t, dt\\\\
> &= \frac{\pi}{2}. \quad \text{(Riemann--Lebesgue)}
> \end{aligned}
> $$
>
> 其中，因为\
> $$
> \lim\_{t \to 0} \left( \frac{1}{t} - \frac{1}{2 \sin \frac{t}{2}} \right) = \lim\_{t \to 0} \frac{2 \sin \frac{t}{2} - t}{2t \sin \frac{t}{2}} = 0,
> $$
>
> 故 $\dfrac{1}{t} - \dfrac{1}{2 \sin \frac{t}{2}}$ 可看成 $\[0,\pi]$ 中连续函数，从而可以应用 Riemann-Lebesgue 引理.
>
> ***
>
> 记 $f$ 的 Fourier 展开的部分和为 $S\_n(x)$，则\
> $$
> \begin{aligned}
> S\_n(x) &= \frac{a\_0}{2} + \sum\_{k=1}^n (a\_k \cos kx + b\_k \sin kx)\\\\
> &= \frac{1}{2\pi} \int\_{-\pi}^\pi f(t), dt + \frac{1}{\pi} \sum\_{k=1}^n \left( \int\_{-\pi}^\pi f(t) \cos kt \cos kx, dt + \int\_{-\pi}^\pi f(t) \sin kt \sin kx, dt \right)\\\\
> &= \frac{1}{\pi} \int\_{-\pi}^\pi f(t) \left\[ \frac{1}{2} + \sum\_{k=1}^n (\cos kt \cos kx + \sin kt \sin kx) \right] dt\\\\
> &= \frac{1}{\pi} \int\_{-\pi}^\pi f(t) \left\[ \frac{1}{2} + \sum\_{k=1}^n \cos k(t - x) \right] dt\\\\
> &= \frac{1}{\pi} \int\_{-\pi}^\pi f(x + u) \sigma\_n(u), du,
> \end{aligned}
> $$
>
> 其中最后一个等式用到了变量代换 $u = t - x$，并且利用了被积函数的周期性，即在 $\[-\pi - x, \pi - x]$ 上的积分等于在 $\[-\pi, \pi]$ 上的积分. 利用上式，并注意 $\sigma\_n$ 是偶函数，我们可以进一步将上式改写为\
> $$
> S\_n(x) = \frac{1}{\pi} \int\_0^\pi \frac{f(x + u) + f(x - u)}{2} \frac{\sin(n + \frac{1}{2})u}{\sin \frac{u}{2}} du.
> $$
>
> 任给 $\delta > 0$，由 Riemann-Lebesgue 引理，
> $$
> \begin{aligned}
> \lim\_{n \to \infty} S\_n(x) &= \frac{1}{\pi} \lim\_{n \to \infty} \int\_0^\delta \frac{f(x + u) + f(x - u)}{2} \frac{\sin(n + \frac{1}{2})u}{\sin \frac{u}{2}} du\\\\
> &+ \lim\_{n \to \infty} \frac{1}{\pi} \int\_\delta^\pi \frac{f(x + u) + f(x - u)}{2 \sin \frac{u}{2}} \sin(n + \frac{1}{2})u, du\\\\
> &= \frac{1}{\pi} \lim\_{n \to \infty} \int\_0^\delta \frac{f(x + u) + f(x - u)}{2} \frac{\sin(n + \frac{1}{2})u}{\sin \frac{u}{2}} du,
> \end{aligned}
> $$
>
> 因此，$S\_n(x)$ 的收敛性只和 $f$ 在 $x$ 附近的性态有关，这是 Riemann 的发现，有时称为 Riemann 局部化原理.

### · Dini 判别法

**定理1** (Dini 判别法)

> 设 $f$ 如前. 如果存在 $\delta > 0$，使得
>
> (1) $f$ 在 $x$ 处的右极限 $f(x + 0)$ 和左极限 $f(x - 0)$ 存在；
>
> (2) 积分\
> $$
> \int\_0^\delta \frac{f(x + u) - f(x + 0)}{u} du,\quad \int\_0^\delta \frac{f(x - u) - f(x - 0)}{u} du,
> $$
>
> 绝对收敛，则 $f$ 的 Fourier 展开在点 $x$ 处收敛于值 $\dfrac{f(x + 0) + f(x - 0)}{2}$.

/proof/

> 证明基本上是应用 Riemann-Lebesgue 引理，以及注意函数 $\dfrac{1}{u} - \dfrac{1}{2 \sin \frac{u}{2}}$ 在 $\[0,\delta]$ 上的连续性. 下面我们对一个特殊情形加以证明，这个情形对大多数应用而言是足够的.

### · Dirichlet

**定义1**.

> 设 $f$ 是定义在 $\[a,b]$ 上的函数，如果存在 $\[a,b]$ 的分割\
> $$
> a = t\_0 < t\_1 < \cdots < t\_m = b,
> $$
>
> 使得在每个小区间 $\[t\_{i-1}, t\_i]$ ($i = 1,2,\cdots,m$) 上定义的函数\
> $$
> f\_i(x) =
> \begin{cases}
> f(t\_{i-1} + 0), & x = t\_{i-1}, \\\\
> f(x), & x \in (t\_{i-1}, t\_i), \\\\
> f(t\_i - 0), & x = t\_i,
> \end{cases}
> $$
>
> 都是 $\[t\_{i-1}, t\_i]$ 上的可微函数，则称 $f$ 是分段可微函数.

**定理2** (Dirichlet)

> 设 $f$ 是一个周期为 $2\pi$ 的分段可微函数，则对任意的 $x \in \[-\pi,\pi]$，$f$ 的 Fourier 展开在 $x$ 处收敛到 $\dfrac{1}{2}\[f(x + 0) + f(x - 0)]$.

/proof/

> 由前面的计算以及 Riemann-Lebesgue 引理，我们有\
> $$
> \begin{aligned}
> \lim\_{n \to \infty} S\_n(x) &= \lim\_{n \to \infty} \frac{1}{\pi} \int\_0^\pi \frac{f(x + u) + f(x - u)}{2} \frac{\sin(n + \frac{1}{2})u}{\sin \frac{u}{2}} du\\\\
> &= \lim\_{n \to \infty} \frac{1}{\pi} \int\_0^\pi \frac{f(x + u) - f(x + 0)}{2 \sin \frac{u}{2}} \sin(n + \frac{1}{2})u, du + \frac{1}{2} f(x + 0)\\\\
> &+ \lim\_{n \to \infty} \frac{1}{\pi} \int\_0^\pi \frac{f(x - u) - f(x - 0)}{2 \sin \frac{u}{2}} \sin(n + \frac{1}{2})u, du + \frac{1}{2} f(x - 0)\\\\
> &= \frac{1}{2}\[f(x + 0) + f(x - 0)].
> \end{aligned}
> $$
>
> 最后的等式是因为，如果 $f$ 分段可微，则\
> $$
> \frac{f(x + u) - f(x + 0)}{2 \sin \frac{u}{2}}\quad \text{and}\quad \frac{f(x - u) - f(x - 0)}{2 \sin \frac{u}{2}}
> $$
>
> 关于 $u$ 是分段连续（可积）的，从而可以应用 Riemann-Lebesgue 引理.

**注意**：分段可微的条件只是用来保证 Riemann-Lebesgue 引理可用. 从证明过程即可看出，如果 $f$ 在 $x$ 附近满足 $\alpha$ ($0 < \alpha \le 1$) 阶 Hölder 条件，则定理结论仍然成立.

### · 例题

下面是一些进一步的例子.

/example/  求函数 $f(x) = \cos \mu x$，$x \in \[-\pi,\pi]$ 的 Fourier 展开（$\mu$ 不是整数）.

> 将 $f$ 延拓为 $\mathbb{R}$ 上以 $2\pi$ 为周期的周期函数，这是偶函数，因此 $b\_k = 0$. 而\
> $$
> \begin{aligned}
> a\_k &= \frac{2}{\pi} \int\_0^\pi \cos \mu x \cos kx, dx\\\\
> &= \frac{1}{\pi} \int\_0^\pi \[\cos(\mu - k)x + \cos(\mu + k)x], dx\\\\
> &= \frac{1}{\pi} \left\[ \frac{\sin(\mu - k)\pi}{\mu - k} + \frac{\sin(\mu + k)\pi}{\mu + k} \right]\\\\
> &= \frac{2\mu (-1)^k}{\pi} \cdot \frac{\sin \mu \pi}{\mu^2 - k^2}.
> \end{aligned}
> $$
>
> 由 Dirichlet 定理可得\
> $$
> \cos \mu x = \frac{2\mu \sin \mu \pi}{\pi} \left( \frac{1}{2\mu^2} + \sum\_{n=1}^\infty \frac{(-1)^n}{\mu^2 - n^2} \cos nx \right),\quad \forall\ x \in \[-\pi,\pi].
> $$
>
> 在上式中取 $x = \pi$ 得\
> $$
> \cos \mu \pi = \frac{2\mu \sin \mu \pi}{\pi} \left( \frac{1}{2\mu^2} + \sum\_{n=1}^\infty \frac{1}{\mu^2 - n^2} \right),
> $$
>
> 上式可改写为\
> $$
> \cot \pi \mu - \frac{1}{\pi \mu} = \frac{1}{\pi} \sum\_{n=1}^\infty \frac{2\mu}{\mu^2 - n^2}.
> $$
>
> 当 $0 \le \mu \le x < 1$ 时，上式右边的无穷求和关于 $\mu$ 一致收敛，从而可逐项积分：\
> $$
> \int\_0^x \left( \cot \pi \mu - \frac{1}{\pi \mu} \right) d\mu = \frac{1}{\pi} \sum\_{n=1}^\infty \ln(1 - \frac{x^2}{n^2}),
> $$
>
> 由此得到 $\sin \pi x$ 的如下展开式：\
> $$
> \sin \pi x = \pi x \left(1 - \frac{x^2}{1^2}\right)\left(1 - \frac{x^2}{2^2}\right)\left(1 - \frac{x^2}{n^2}\right)\cdots.
> $$

/example/

> 跟上例类似，我们有\
> $$
> \sin \mu x = \frac{2 \sin \mu \pi}{\pi} \sum\_{n=1}^\infty \frac{(-1)^n n}{\mu^2 - n^2} \sin nx,\quad \forall\ x \in (-\pi,\pi).
> $$
>
> 如果一个函数仅在 $(0,\pi)$ 上定义，则我们可以首先将它延拓为周期为 $2\pi$ 的函数，然后再作 Fourier 展开.
>
> 常用的延拓有奇延拓和偶延拓，即分别延拓为奇函数和偶函数.

/example/ 将函数\
$$
f(x) = x,\quad x \in (0,\pi)
$$

分别作奇延拓和偶延拓，然后分别求 Fourier 展开.

> **奇延拓**：令 $f(x) = x$，$x \in (-\pi,0)$，在 $0$ 和 $\pm\pi$ 处规定 $f$ 为 $0$.
>
> 则 Fourier 系数为\
> $$
> \begin{aligned}
> a\_k = 0,\quad b\_k &= \frac{2}{\pi} \int\_0^\pi x \sin kx, dx\\\\
> &= \frac{2}{\pi} \left\[ -\frac{x}{k} \cos kx \Big|\_0^\pi + \frac{1}{k} \int\_0^\pi \cos kx, dx \right]\\\\
> &= \frac{2}{\pi} \left\[ -\frac{\pi}{k} \cos k\pi + \frac{1}{k^2} \sin k\pi \right]\\\\
> &= (-1)^{k-1} \frac{2}{k}.
> \end{aligned}
> $$
>
> 因此\
> $$
> x = 2 \sum\_{n=1}^\infty (-1)^{n-1} \frac{\sin nx}{n},\quad 0 \le x < \pi.
> $$
>
> **偶延拓**：令 $f(x) = -x$，$x \in (-\pi,0)$，在 $0$ 处 $f(0) = 0$，在 $\pm\pi$ 处 $f$ 为 $\pi$.
>
> 此时 Fourier 系数为\
> $$
> \begin{aligned}
> \&b\_k = 0,\quad a\_0 = \frac{2}{\pi} \int\_0^\pi x, dx = \pi,\\\\
> \&a\_k = \frac{2}{\pi} \int\_0^\pi x \cos kx, dx = \frac{2}{k^2 \pi} \[(-1)^k - 1].
> \end{aligned}
> $$
>
> 因此\
> $$
> x = \frac{\pi}{2} - \frac{4}{\pi} \sum\_{k=0}^\infty \frac{\cos(2k + 1)x}{(2k + 1)^2},\quad 0 \le x \le \pi.
> $$

一般地，如果一个函数周期为 $2l$，则和周期 $2\pi$ 的情形类似，令\
$$
\begin{aligned}
a\_n &= \frac{1}{l} \int\_{-l}^l f(x) \cos \frac{n\pi}{l} x, dx,\quad n = 0,1,2,\cdots,\\\\
b\_n &= \frac{1}{l} \int\_{-l}^l f(x) \sin \frac{n\pi}{l} x, dx,\quad n = 1,2,\cdots.
\end{aligned}
$$

则 $f$ 有 Fourier 展开\
$$
f \sim \frac{a\_0}{2} + \sum\_{n=1}^\infty \left( a\_n \cos \frac{n\pi}{l} x + b\_n \sin \frac{n\pi}{l} x \right).
$$

通过变量替换 $t = \dfrac{\pi x}{l}$ 可以将周期 $2l$ 的函数变为周期 $2\pi$ 函数，因此容易看出，Dirichlet 定理对于周期为 $2l$ 的函数仍成立.

/example/

设 $f(x)$ 是以 $2$ 为周期的周期函数，且\
$$
f(x) = x^2,\quad x \in \[-1,1]
$$

求其 Fourier 展开.

> $f$ 为偶函数，因此 $b\_k = 0$. 而\
> $$
> a\_0 = \int\_{-1}^1 x^2 dx = \frac{2}{3},\quad a\_n = 2 \int\_0^1 x^2 \cos n\pi x, dx = \frac{4}{n^2 \pi^2} (-1)^n,
> $$
>
> 这说明\
> $$
> x^2 = \frac{1}{3} + \frac{4}{\pi^2} \sum\_{n=1}^\infty \frac{(-1)^n}{n^2} \cos n\pi x,\quad x \in \[-1,1].
> $$
>
> 如果将 $x$ 变为 $\pi^{-1}(x - \pi)$，就得到如下等式：\
> $$
> x - \frac{x^2}{2\pi} = \frac{\pi}{3} - \frac{2}{\pi} \sum\_{n=1}^\infty \frac{\cos nx}{n^2},\quad 0 \le x \le 2\pi.
> $$
>
> 它当然也可以通过对 $f(x) = x - \dfrac{x^2}{2\pi}$ ($0 \le x \le 2\pi$) 作 Fourier 展开得到，下一节我们将要用到这个等式.
