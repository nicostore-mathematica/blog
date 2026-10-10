---
url: /integral/integral-38/index.md
---
## Part 1 曲线积分

### · 第一型曲线积分

对于平面曲线 $\sigma(t) = (x(t), y(t))$，如果 $x(t), y(t)$ 是关于 $t$ 的连续可微函数，则利用折线逼近曲线的办法，我们定义了 $\sigma$ 的长度为

$$
L(\sigma) = \int\_\alpha^\beta \sqrt{\[x'(t)]^2 + \[y'(t)]^2} dt.
$$

现在考虑一般的情形. 映射 $\sigma: \[\alpha, \beta] \to \mathbb{R}^n$ 称为一条参数曲线，我们仍然用折线逼近曲线的办法定义 $\sigma$ 的长度.

为此，任取 $\[\alpha, \beta]$ 的分割
$$
\pi: \alpha = t\_0 < t\_1 < t\_2 < \cdots < t\_m = \beta,
$$

相继用直线段连接曲线上的分点 $\sigma(t\_{i-1})$ 与 $\sigma(t\_i)$ ($1 \leq i \leq m$)，得到的折线的长度为

$$
L(\sigma; \pi) = \sum\_{i=1}^m |\sigma(t\_i) - \sigma(t\_{i-1})|.
$$

如果这些折线的长度有上界，即

$$
\sup\_\pi \sum\_{i=1}^m |\sigma(t\_i) - \sigma(t\_{i-1})| < +\infty,
$$

则称 $\sigma$ 是可求长曲线，其长度定义为

$$
L(\sigma) = \sup\_\pi \sum\_{i=1}^m |\sigma(t\_i) - \sigma(t\_{i-1})|.
$$

利用三角不等式我们知道当区间 $\[\alpha, \beta]$ 的分割加细时，折线的长度单调递增. 如果 $\sigma(t)$ 的每一个分量均为连续可微函数，则由第七章第一节的推导知 $\sigma$ 是可求长的，且长度可以表示为积分

$$
L(\sigma) = \int\_\alpha^\beta |\sigma'(t)| dt.
$$

如果曲线不连续，则我们这里给出的曲线长度定义和直观上的长度观念不是一回事.

例如，考虑这样的曲线：当 $t = 0$ 时 $(x(0), y(0)) = (0, 0)$；当 $0 < t \leq 1$ 时，$(x(t), y(t)) = (t, 1)$. 按我们的定义，此曲线长度为 $2$！

从定义可以得到可求长曲线的下列性质：

> * 如果 $\sigma$ 为可求长曲线，则对任意 $\[\gamma, \delta] \subset \[\alpha, \beta]$，$\sigma|\_{\[\gamma, \delta]}$ 也是可求长的；
> * 如果 $\sigma$ 为可求长曲线，则对任意 $\gamma \in \[\alpha, \beta]$，有
>
> $$
> L(\sigma) = L(\sigma|*{\[\alpha, \gamma)}) + L(\sigma|*{\[\gamma, \beta]}).
> $$

这是曲线长度的可加性，其证明仍然是利用三角不等式.

为了导出曲线可求长的充分必要条件，我们引入有界变差函数的概念.

**定义1**（有界变差函数）

> 设 $f$ 为定义在 $\[\alpha, \beta]$ 上的函数. 任给分割
>
> $$
> \pi: \alpha = t\_0 < t\_1 < t\_2 < \cdots < t\_m = \beta,
> $$
>
> 记
>
> $$
> v(f; \pi) = \sum\_{i=1}^m |f(t\_i) - f(t\_{i-1})|,
> $$
>
> 如果 $\sup\_\pi v(f; \pi)$ 有限，则称 $f$ 为 $\[\alpha, \beta]$ 上的有界变差函数，它在 $\[\alpha, \beta]$ 上的全变差记为
>
> $$
> \bigvee\_\alpha^\beta(f) = \sup\_\pi v(f; \pi).
> $$

下列函数都是有界变差函数：

> * 单调函数. 如果 $f$ 为 $\[\alpha, \beta]$ 上的单调函数，例如单调递增，则对任意的分割 $\pi$，有
>
> $$
> v(f; \pi) = \sum\_{i=1}^m |f(t\_i) - f(t\_{i-1})| = \sum\_{i=1}^m (f(t\_i) - f(t\_{i-1})) = f(\beta) - f(\alpha),
> $$
>
> 这说明
>
> $$
> \bigvee\_\alpha^\beta(f) = |f(\beta) - f(\alpha)|.
> $$
>
> * Lipschitz 函数. 设 $|f(x) - f(y)| \leq L|x - y|$，则
>
> $$
> v(f; \pi) = \sum\_{i=1}^m |f(t\_i) - f(t\_{i-1})| \leq \sum\_{i=1}^m L(t\_i - t\_{i-1}) = L(\beta - \alpha),
> $$
>
> 因而 $f$ 是有界变差函数.
>
> * 连续可微函数. 根据微分中值定理可知连续可微函数都是 Lipschitz 函数，因而是有界变差函数.
>
> * 如果 $g(x)$ 为 $\[\alpha, \beta]$ 上的 Riemann 可积函数，则
>
> $$
> f(x) = \int\_\alpha^x g(t) dt,\quad x \in \[\alpha, \beta]
> $$
>
> 是 Lipschitz 函数，因此也是有界变差函数.
>
> 可以证明，有界变差函数必为两个单调递增函数的差.

**定理1**（Jordan）

> 曲线 $\sigma(t)$ 可求长当且仅当它的每一个分量均为有界变差函数.

/proof/

> 设 $\sigma(t) = (x\_1(t), \cdots, x\_n(t))$ 可求长，则任给 $\[\alpha, \beta]$ 的分割 $\pi$，有
>
> $$
> v(x\_i; \pi) = \sum\_{j=1}^m |x\_i(t\_j) - x\_i(t\_{j-1})| \leq \sum\_{j=1}^m |\sigma(t\_j) - \sigma(t\_{j-1})| \leq L(\sigma),
> $$
>
> 这说明 $x\_i(t)$ 为有界变差函数.
>
> 反之，如果每一个 $x\_i(t)$ 都是有界变差函数，则
>
> $$
> \begin{aligned}
> L(\sigma; \pi) &= \sum\_{j=1}^m |\sigma(t\_j) - \sigma(t\_{j-1})| \\\\
> &\leq \sum\_{j=1}^m \left(|x\_1(t\_j) - x\_1(t\_{j-1})| + \cdots + |x\_n(t\_j) - x\_n(t\_{j-1})|\right) \\\\
> &= \sum\_{i=1}^n v(x\_i; \pi) \leq \sum\_{i=1}^n \bigvee\_\alpha^\beta(x\_i).
> \end{aligned}
> $$
>
> 因此 $\sigma(t)$ 是可求长的.

以下总是假设曲线 $\sigma$ 是可求长的. 对 $t \in \[\alpha, \beta]$，定义

$$
s(t) = L(\sigma|\_{\[\alpha, t]}),
$$

则 $s(t)$ 为单调递增函数，称为 $\sigma(t)$ 的弧长函数，并且

$$
s(t\_2) - s(t\_1) = L(\sigma|\_{\[t\_1, t\_2]}),\quad t\_1 \leq t\_2.
$$

因此，如果 $t\_2 > t\_1$, $s(t\_2) = s(t\_1)$，则 $\sigma(t)$ 在 $\[t\_1, t\_2]$ 上取常值. 如果 $\sigma(t)$ 不在任何区间上取常值，则 $s(t)$ 为严格单调递增函数.

当 $\sigma(t)$ 为可求长的连续曲线时，$s(t)$ 也是连续函数. 当 $\sigma(t)$ 不在任何区间上取常值时，$s(t)$ 是参数 $t$ 的连续的严格单调递增函数，从而可逆，其逆记为 $t = t(s)$:

$$
t(s): \[0, L(\sigma)] \to \[\alpha, \beta].
$$

这时，$\sigma(t) = \sigma(t(s))$ 又可以看成关于 $s$ 的参数曲线，我们将 $s$ 称为弧长参数.

当 $\sigma(t)$ 为连续可微曲线，且 $|\sigma'(t)|$ 在任何区间上不恒为零（例如，处处非零）时，上一段的讨论对 $\sigma(t)$ 完全适用，此时

$$
s'(t) = |\sigma'(t)|\quad \text{或}\quad ds = |\sigma'(t)| dt.
$$

现在我们考虑可求长曲线上有界函数的积分. 设 $f$ 是定义在 $\sigma$ 上的有界函数，即对任意 $\sigma(t)$，$f(\sigma(t))$ 是定义好的实数. 任给 $\[\alpha, \beta]$ 的分割 $\pi$，取 $\xi\_i \in \[t\_{i-1}, t\_i]$ ($1 \leq i \leq m$)，考虑和

$$
\sum\_{i=1}^m f(\sigma(\xi\_i)) \Delta s\_i,
$$

其中 $\Delta s\_i = s(t\_i) - s(t\_{i-1})$. 如果极限

$$
\lim\_{|\pi| \to 0} \sum\_{i=1}^m f(\sigma(\xi\_i)) \Delta s\_i
$$

存在且与 ${\xi\_i}$ 的选取无关，则称此极限为 $f$ 在 $\sigma$ 上的第一型曲线积分，记为

$$
\int\_\sigma f ds = \lim\_{|\pi| \to 0} \sum\_{i=1}^m f(\sigma(\xi\_i)) \Delta s\_i.
$$

当 $f = 1$ 时，第一型曲线积分也就是曲线的长度.

第一型曲线积分的物理意义可如下理解：已知某线状物质的密度函数 $\rho$，则物质的质量就是 $\rho$ 的曲线积分.

当曲线 $\sigma$ 的弧长参数存在时，第一型曲线积分可以转化为通常的 Riemann 积分：

$$
\int\_\sigma f ds = \int\_0^{L(\sigma)} f(\sigma(s)) ds;
$$

如果 $\sigma(t)$ 为（分段）连续可微曲线，则 $f$ 在 $\sigma$ 上的第一型曲线积分可以写为（例如 $f$ 连续时）：

$$
\int\_\sigma f ds = \int\_\alpha^\beta f(\sigma(t)) |\sigma'(t)| dt.
$$

一般地，第一型曲线积分是所谓 Riemann-Stieltjes 积分的一种特殊情形.

### · 第二型曲线积分

现在我们考虑这样一个物理问题：设质点在力场 $F$ 中沿一条曲线 $\sigma$ 运动，求力场 $F$ 对该质点所做的功. 我们可以将这个问题转化为曲线上的一个积分问题.

为此，设 $\sigma: \[\alpha, \beta] \to \mathbb{R}^n$ 为一条参数曲线，$f$ 是定义在 $\sigma$ 上的取值在 $\mathbb{R}^n$ 中的一个向量值函数，其分量记为 $f\_i$ ($1 \leq i \leq n$). 任取 $\[\alpha, \beta]$ 的一个分割

$$
\pi: \alpha = t\_0 < t\_1 < t\_2 < \cdots < t\_m = \beta,
$$

考虑和

$$
\sum\_{j=1}^m f\_i(\sigma(\xi\_j))(x\_i(t\_j) - x\_i(t\_{j-1})),\quad (\xi\_j \in \[t\_{j-1}, t\_j])
$$

如果极限

$$
\lim\_{|\pi| \to 0} \sum\_{j=1}^m f\_i(\sigma(\xi\_j))(x\_i(t\_j) - x\_i(t\_{j-1}))
$$

存在且与 ${\xi\_j}$ 的选取无关，则称此极限为 $f\_i dx\_i$ 沿曲线 $\sigma$ 的第二型曲线积分，记为

$$
\int\_\sigma f\_i dx\_i = \lim\_{|\pi| \to 0} \sum\_{j=1}^m f\_i(\sigma(\xi\_j))(x\_i(t\_j) - x\_i(t\_{j-1})).
$$

如果每一个 $f\_i dx\_i$ 沿 $\sigma$ 的第二型曲线积分都存在，则记

$$
\int\_\sigma f\_1 dx\_1 + \cdots + f\_n dx\_n = \int\_\sigma f\_1 dx\_1 + \cdots + \int\_\sigma f\_n dx\_n,
$$

这个积分称为形式和 $f\_1 dx\_1 + \cdots + f\_n dx\_n$ 沿 $\sigma$ 的第二型曲线积分，在不引起混淆的情形也称为 $f$ 沿 $\sigma$ 的第二型曲线积分.

初看起来第二型曲线积分似乎和第一型曲线积分并无本质不同. 但这两类积分有一个重要的区别，这个区别和曲线的方向有关.

为了说明这一点，我们考虑曲线的重新参数化. 设 $\phi: \[\gamma, \delta] \to \[\alpha, \beta]$ 为严格单调的可逆连续映射，则复合映射 $\sigma \circ \phi: \[\gamma, \delta] \to \mathbb{R}^n$ 也是一条参数曲线，它和 $\sigma$ 的像完全相同，这两条参数曲线只是选取了不同的参数而已.

如果 $\phi$ 是严格单调递增的，则称这两个参数是同向的；如果 $\phi$ 是严格单调递减的，则称这两个参数是反向的（不同向）.

不难看出，对于同向的两个参数，第二曲线积分的值不变；而对于反向的两个参数，第二曲线积分的值正好相差一个符号！这和第一型曲线积分是不同的，比如曲线的长度就不依赖于参数的选取.

因此，为了使第二型曲线积分有意义，我们总是要给曲线指定一个方向，这个方向是由某个参数决定的. 给定了方向的曲线称为有向曲线. 如果参数反向，则新的有向曲线记为 $-\sigma$，这时有

$$
\int\_{-\sigma} f\_1 dx\_1 + \cdots + f\_n dx\_n = -\int\_\sigma f\_1 dx\_1 + \cdots + f\_n dx\_n.
$$

对于可求长曲线来说，第二型曲线积分也是 Riemann-Stieltjes 积分的特殊情况. 对于（分段）连续可微曲线，第二型曲线积分可以转化为 Riemann 积分：

$$
\int\_\sigma f\_1 dx\_1 + \cdots + f\_n dx\_n = \sum\_{i=1}^n \int\_\alpha^\beta f\_i(\sigma(t)) x\_i'(t) dt.
$$

另一方面，如果 $\sigma$ 为连续可微曲线，$s$ 是其弧长参数，则

$$
|\sigma'(s)| = |\sigma'(t)| \cdot (s'(t))^{-1} = 1.
$$

如果记 $\sigma'(s) = (\cos \alpha\_1, \cdots, \cos \alpha\_n)$，则第二型曲线积分可以写为

$$
\int\_\sigma f\_1 dx\_1 + \cdots + f\_n dx\_n = \int\_0^{L(\sigma)} f(\sigma(s)) \cdot \sigma'(s) ds = \sum\_{i=1}^n \int\_0^{L(\sigma)} f\_i(\sigma(s)) \cos \alpha\_i ds,
$$

即第二型曲线积分转化成了第一型的曲线积分.

/example/ Riemann 积分作为第二型的曲线积分

> 设 $f$ 为 $\[a, b]$ 上的可积函数，则定积分 $\int\_a^b f(x) dx$ 就是 $f(x) dx$ 沿区间 $\[a, b]$ 的第二型曲线积分，其中区间看成一条曲线，它的方向是参数 $x$ 给出的，即 $x$ 轴的正向. 我们之所以规定
>
> $$
> \int\_b^a f(x) dx = -\int\_a^b f(x) dx
> $$
>
> 就是因为 $f(x) dx$ 沿 $\[a, b]$ 的相反方向的第二型曲线积分要变一个符号.

/example/ 环路积分

> 如果 $\sigma$ 为一条闭曲线（环路），即 $\sigma(\alpha) = \sigma(\beta)$，则选定了方向以后，不论从曲线上哪一点出发，沿此闭曲线的第二型曲线积分的值不变，通常我们将这样的积分记为
>
> $$
> \oint\_\sigma f\_1 dx\_1 + \cdots + f\_n dx\_n.
> $$
>
> 单位圆周 $S^1$ 就是平面上的一条闭曲线，如果用参数方程
>
> $$
> \sigma(t) = (\cos t, \sin t),\quad t \in \[0, 2\pi]
> $$
>
> 表示，则 $S^1$ 的方向就是所谓逆时针方向.
