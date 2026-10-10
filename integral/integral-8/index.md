---
url: /integral/integral-8/index.md
---
## Part 2 性质

我们来讨论函数极限存在与否的判别方法和计算方法，主要以有限极限为例.

### · Heine 定理

**定理5** (Heine 定理)：设函数 $f$ 在 $x\_0$ 的一个空心开邻域内有定义，则 $f$ 在 $x\_0$ 处的极限为 $A$ 当且仅当对任何收敛点列 $x\_n \to x\_0$（$n \to \infty$）且 $x\_n \ne x\_0$（$\forall, n$），均有
$$
\lim\_{n \to \infty} f(x\_n) = A.
$$

> 先证必要性. 由定义，任给 $\varepsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x - x\_0| < \delta$ 时，有
> $$
> |f(x) - A| < \varepsilon.
> $$
>
> 现在设 $x\_n \to x\_0,\ x\_n \ne x\_0$. 仍由极限定义，对于上述 $\delta$，存在 $N$，使得当 $n > N$ 时，
> $$
> 0 < |x\_n - x\_0| < \delta.
> $$
> 因此当 $n > N$ 时，有
> $$
> |f(x\_n) - A| < \varepsilon,
> $$
> 这说明
> $$
> \lim\_{n \to \infty} f(x\_n) = A.
> $$
>
> 我们用反证法来证明充分性. 如果 $f$ 在 $x\_0$ 处极限不为 $A$（极限可能不存在），则存在 $\varepsilon\_0 > 0$，使得对任何 $\delta > 0$，都存在 $x\_\delta$，使得
> $$
> 0 < |x\_\delta - x\_0| < \delta,\quad |f(x\_\delta) - A| \geqslant \varepsilon\_0.
> $$
>
> 特别地，对 $\forall, n \geqslant 1$，均存在 $x\_n$，使得
> $$
> 0 < |x\_n - x\_0| < \frac{1}{n},\quad |f(x\_n) - A| \geqslant \varepsilon\_0.
> $$
>
> 这说明 $x\_n \to x\_0$，$x\_n \ne x\_0$，但 $f(x\_n)$ 不收敛到 $A$.
>
> > (1) Heine 定理可以改述成下面应用起来较为方便的形式：
> > $$
> > \lim\_{x \to x\_0} f(x) = A \iff \forall, x\_n \to x\_0\ (x\_n \ne x\_0),\ \lim\_{n \to \infty} f(x\_n)\ \text{存在}.
> > $$
> >
> > 这时充分性的证明是这样的：只要说明如果 $f(x\_n)$ 均收敛，则它们的极限必定都相同.
> >
> > （反证法）如果存在 $x'\_n \to x\_0,\ x'\_n \ne x\_0,\ f(x'\_n) \to A$ 以及 $x''\_n \to x\_0$，$x''\_n \ne x\_0$，$f(x''\_n) \to B$.
> >
> > 当 $B \ne A$ 时，考虑新的点列 $x\_n$，使得 $x\_{2k} = x'*{2k}$，$x*{2k-1} = x''\_{2k-1}$（$k\geqslant 1$），则 $x\_n \to x\_0$，$x\_n \ne x\_0$ 但 $f(x\_n)$ 不收敛，这就得到矛盾.
> >
> > (2) 对于单侧极限、无穷远处的极限以及极限为无穷大的情形，有完全类似的 Heine 定理.

/example/ 研究函数 $f(x) = \sin \dfrac{1}{x}$ 在 $x\_0 = 0$ 处的极限.

> 我们选取点列 $x\_n = \dfrac{1}{n\pi}$ 以及 $y\_n = \dfrac{1}{2n\pi + \frac{\pi}{2}}$，则 $x\_n, y\_n \to 0$，$x\_n, y\_n \ne 0$，且
> $$
> f(x\_n) = \sin(n\pi) = 0,\quad f(y\_n) = \sin\left(2n\pi + \frac{\pi}{2}\right) = 1.
> $$
>
> 根据刚才的注记就知道 $f$ 在 $x\_0 = 0$ 的极限不存在.

### · Cauchy 准则

**定理6** (Cauchy 准则)：设 $f$ 在 $x\_0$ 的一个空心开邻域中有定义，则 $f$ 在 $x\_0$ 处存在有限极限当且仅当任给 $\varepsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x' - x\_0| < \delta$，$0 < |x'' - x\_0| < \delta$ 时，有
$$
|f(x') - f(x'')| < \varepsilon.
$$

> **必要性**：设 $f$ 在 $x\_0$ 处的极限为 $A$，则任给 $\varepsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x - x\_0| < \delta$ 时，$|f(x) - A| < \dfrac{\varepsilon}{2}$. 因此，当 $0 < |x' - x\_0| < \delta$，$0 < |x'' - x\_0| < \delta$ 时，有
> $$
> |f(x') - f(x'')| \leqslant |f(x') - A| + |f(x'') - A| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
> $$
>
> **充分性**：我们用 Heine 定理来证. 设 $x\_n \to x\_0$，$x\_n \ne x\_0$，则已知条件告诉我们 ${f(x\_n)}$ 是一个 Cauchy 列，根据数列极限的 Cauchy 准则，${f(x\_n)}$ 收敛. 于是由 Heine 定理知 $f$ 在 $x\_0$ 处的极限存在（且有限）.
>
> > (1) 对于无穷远处极限为有限的情形，Cauchy 准则仍然成立.
> >
> > (2) 从证明过程可以看出，$f$ 在 $x\_0$ 处不存在有限极限当且仅当存在 $\varepsilon\_0 > 0$，使得对任意 $\delta > 0$，总有 $x', x''$，使得
> > $$
> > 0 < |x' - x\_0| < \delta,\ 0 < |x'' - x\_0| < \delta,\quad |f(x') - f(x'')| \geqslant \varepsilon\_0.
> > $$

/example/研究 Dirichlet 函数的极限.
$$
D(x) =
\begin{cases}
1, & x \in \mathbb{Q}, \\\\
0, & x \in \mathbb{R} \setminus \mathbb{Q},
\end{cases}
$$

> 在任何一点 $x\_0$ 附近都有点取值为 0 或 1，取 $\varepsilon = 1$，由刚才的注记 (2) 即知 $D$ 在 $x\_0$ 处极限不存在.

### · 单调有界原理

**定理7** (单调有界原理)：设函数在 $(x\_0 - \delta, x\_0)$ 中有定义，如果 $f$ 单调递增且有上界，或单调递减且有下界，则 $f$ 在 $x\_0$ 的左极限存在（且有限）.

> 利用数列的单调性原理以及 Heine 定理即可.
>
> > 如果$f$单调递增又无上界，则 $f$ 在 $x\_0$ 处的左极限为 $+\infty$；如果 $f$ 单调递减又无下界，则 $f$ 在 $x\_0$ 处的左极限为 $-\infty$；对于函数的右极限有完全类似的结论.

### · 基本性质

下面我们叙述函数极限的一些基本性质，它们和数列极限相应的性质十分类似，因此我们省略其证明

**定理8**

> (1) （局部有界性）如果$f$在$x\_0$处有有限极限，则$f$在$x\_0$的一个空心开邻域内有界.
>
> (2) （保序性）设$f, g$在$x\_0$处的极限分别为$A, B$. 如果$f(x) \geqslant g(x)$在$x\_0$的一个空心开邻域内成立，则$A \geqslant B$；反之，如果$A > B$，则在$x\_0$内一个空心开邻域内$f(x) > g(x)$；特别地，如果$A > 0$，则在$x\_0$的一个空心开邻域内$f(x) > 0$.
>
> (3) （四则运算）设$f, g$在$x\_0$处有有限极限，则
>
> * $\displaystyle \displaystyle\lim\_{x \to x\_0} \[\alpha f(x) + \beta g(x)] = \alpha \displaystyle\lim\_{x \to x\_0} f(x) + \beta \displaystyle\lim\_{x \to x\_0} g(x)$，其中$\alpha, \beta$为常数；
>
> * $\displaystyle \displaystyle\lim\_{x \to x\_0} f(x)g(x) = \displaystyle\lim\_{x \to x\_0} f(x) \cdot \displaystyle\lim\_{x \to x\_0} g(x)$；
>
> * $\displaystyle\lim\_{x \to x\_0} \frac{f(x)}{g(x)} = \frac{\displaystyle\lim\_{x \to x\_0} f(x)}{\displaystyle\lim\_{x \to x\_0} g(x)}$，其中$\displaystyle\lim\_{x \to x\_0} g(x) \ne 0$.
>
> > **注**：对于无穷远处的极限有完全类似的结论成立.

下面关于复合函数的极限也很有用

**定理9** (复合函数的极限)：设$f(y)$在$y\_0$处的极限为$A$，$g(x)$在$x\_0$处的极限为$y\_0$，且存在$x\_0$的一个空心开邻域，在此开邻域内$g(x) \ne y\_0$，则复合函数$f(g(x))$在$x\_0$处的极限为$A$.

> 任给 $\varepsilon > 0$，由 $\displaystyle \displaystyle\lim\_{y \to y\_0} f(y) = A$ 知，存在 $\delta > 0$，当 $0 < |y - y\_0| < \delta$ 时，有
> $$
> |f(y) - A| < \varepsilon.
> $$
>
> 又因为 $g(x) \to y\_0$（$x \to x\_0$），对于这个 $\delta$，存在 $\eta > 0$，使得当 $0 < |x - x\_0| < \eta$时，有
> $$
> 0 < |g(x) - y\_0| < \delta,
> $$
> 此时有
> $$
> |f(g(x)) - A| < \varepsilon,
> $$
> 这说明 $f(g(x))$ 在 $x\_0$ 处的极限为 $A$.
>
> > (1) 定理中的条件 $g(x) \ne y\_0$ 一般不能去掉，下面的函数就是例子：令
> > $$
> > f(y) =
> > \begin{cases}
> > 1, & y \ne 0, \\\\
> > 0, & y = 0,
> > \end{cases}
> > $$
> > 以及 $g(x) \equiv 0$，则 $\displaystyle \displaystyle\lim\_{y \to 0} f(y) = 1$，但 $f(g(x)) = 0$. 不过，当 $f(y\_0) = A$ 时这个条件是可以去掉的
> >
> > (2) 对于无穷远处的极限以及极限为无穷大的情形也有完全类似的结果.

### · 例题

我们再来计算一些函数极限的例子，有些例子在后面可能会用到

/example/ 研究函数 $(1 + x)^{\frac{1}{x}}$ 在 $x\_0 = 0$ 处的极限.

> 作变量替换 $y = \dfrac{1}{x}$，则
> $$
> (1 + x)^{\frac{1}{x}} = \left(1 + \frac{1}{y}\right)^y.
> $$
>
> 当 $x \to 0$ 时 $y \to \infty$，由复合函数的极限有
> $$
> \lim\_{x \to 0} (1 + x)^{\frac{1}{x}} = \lim\_{y \to \infty} \left(1 + \frac{1}{y}\right)^y = e.
> $$

/example/ 设 $P(x), Q(x)$ 是次数相同的多项式，求极限 $\displaystyle \displaystyle\lim\_{x \to \infty} \frac{P(x)}{Q(x)}$.

> 设 $P(x), Q(x)$ 次数为 $n$. 记
> $$
> P(x) = a\_0 x^n + a\_1 x^{n-1} + \cdots + a\_n,\quad Q(x) = b\_0 x^n + b\_1 x^{n-1} + \cdots + b\_n,
> $$
> 其中$a\_0, b\_0 \ne 0$. 由
> $$
> \frac{P(x)}{Q(x)} = \frac{a\_0 + a\_1 x^{-1} + \cdots + a\_n x^{-n}}{b\_0 + b\_1 x^{-1} + \cdots + b\_n x^{-n}},
> $$
> 以及极限的四则运算性质可得
> $$
> \lim\_{x \to \infty} \frac{P(x)}{Q(x)} = \frac{a\_0}{b\_0}.
> $$

## Part 3 量级关系

在对两个变量进行比较时，我们有时不需要知道它们的确切大小，而只需了解它们之间的量级关系. 我们现在可以用极限来刻画这些量级关系.

**定义1**（无穷小量与无穷大量）：如果函数 $f$ 在 $x\_0$ 处的极限为 $0$，则称 $f$ 在 $x \to x\_0$ 时为无穷小量，记为 $f(x) = o(1)$ $(x \to x\_0)$；如果 $x \to x\_0$ 时 $|f| \to +\infty$，则称 $f$ 在 $x \to x\_0$ 时为无穷大量.

> （1）无穷小（大）量不是一个数，而是在某点邻域内有特定性质的函数. 在无穷远处也可以类似定义无穷小量与无穷大量；
>
> （2）对于数列也可以定义无穷小量与无穷大量：设 ${a\_n}$ 和 ${b\_n}$ 为两个数列，如果 $a\_n / b\_n \to 0$ $(n \to \infty)$，则称 ${a\_n}$ 关于 ${b\_n}$ 是无穷小量，记为 $a\_n = o(b\_n)$；无穷大量可类似定义.

/example/ 说明 $\sqrt{x+1} - 1 = o(1)$ $(x \to 0)$.

> 因为
> $$
> \sqrt{x+1} - 1 = \frac{x}{\sqrt{x+1} + 1} \to 0 \quad (x \to 0),
> $$
> 故由定义知 $\sqrt{x+1} - 1$ 在 $x \to 0$ 时为无穷小量

我们可以利用无穷小量和无穷大量来比较函数. 例如，设 $f, g$ 在 $x \to x\_0$ 时均为无穷小（大）量，则

> (1). 如果 $f/g$ 在 $x \to x\_0$ 时是无穷小量，则称当 $x \to x\_0$ 时 $f$ 是 $g$ 的高（低）阶无穷小（大）量，记为
> $$
> f(x) = o(g(x)) \quad (x \to x\_0);
> $$
>
> (2). 如果 $f/g$ 在 $x\_0$ 的一个空心邻域中有界，则记
> $$
> f(x) = O(g(x)) \quad (x \to x\_0);
> $$
>
> (3). 如果 $f/g$ 在 $x\_0$ 处的极限为 $A \ne 0$，则称当 $x \to x\_0$ 时 $f$ 和 $g$ 是同阶无穷小（大）量，记为
> $$
> f(x) = O^\*(g(x)) \quad (x \to x\_0);
> $$
>
> 特别地，如果 $A = 1$，则称当 $x \to x\_0$ 时 $f$ 和 $g$ 是等价无穷小（大）量，记为
> $$
> f \sim g \quad (x \to x\_0).
> $$
>
> (4). 设 $k > 0$. 如果
> $$
> |f(x)| = O^*(|x - x\_0|^k) \quad (x \to x\_0),
> $$
> 则称当 $x \to x\_0$ 时 $f$ 是 $k$ 阶无穷小量；如果
> $$
> |f(x)| = O^*(|x - x\_0|^{-k}) \quad (x \to x\_0),
> $$
> 则称当 $x \to x\_0$ 时 $f$ 是 $k$ 阶无穷大量. $k$ 为正整数时也可将定义中的绝对值去掉.
>
> > 这些量级的比较也可在无穷远处进行.

/example/ 证明 $1 - \cos x \sim \frac{1}{2}x^2$ $(x \to 0)$

> 根据前面的结果，有
> $$
> \lim\_{x \to 0} \frac{1 - \cos x}{x^2} = \lim\_{x \to 0} \frac{2\sin^2 \frac{1}{2}x}{x^2} = 2\left(\frac{1}{2}\right)^2 = \frac{1}{2}.
> $$

下面的定理在计算极限的时候十分有用.

**定理**（等价代换）. 设 $x \to x\_0$ 时，$f \sim f\_1$，$g \sim g\_1$. 如果 $f\_1/g\_1$ 在 $x\_0$ 处有极限，则 $f/g$ 在 $x\_0$ 处有极限，且极限相等；反之亦然.

> 只要注意到
> $$
> f/g = (f/f\_1)(f\_1/g\_1)(g\_1/g),
> $$
> 以及当 $x \to x\_0$ 时 $f/f\_1 \to 1$，$g/g\_1 \to 1$ 即可
>
> 等价代换在无穷远处也可进行

/example/ 求极限 $\displaystyle\lim\_{x \to 0} \frac{\sin \alpha x}{\sin \beta x}$

> 因为当 $x \to 0$ 时 $\sin \alpha x \sim \alpha x$，$\sin \beta x \sim \beta x$，故
> $$
> \lim\_{x \to 0} \frac{\sin \alpha x}{\sin \beta x} = \lim\_{x \to 0} \frac{\alpha x}{\beta x} = \frac{\alpha}{\beta}.
> $$

/example/ 求极限 $\displaystyle\lim\_{x \to 0} \frac{\tan x - \sin x}{x^3}$.

> 当 $x \to 0$ 时，
> $$
> \tan x - \sin x = \frac{\sin x}{\cos x}(1 - \cos x) \sim x\left(\frac{1}{2}x^2\right) = \frac{1}{2}x^3,
> $$
> 故
> $$
> \lim\_{x \to 0} \frac{\tan x - \sin x}{x^3} = \frac{1}{2}.
> $$
> 需要注意的是，等价代换不能用于加法和减法运算. 例如在上面的例子中，当 $x \to 0$ 时，有
> $$
> \tan x \sim \sin x \sim x,
> $$
> 但 $\tan x - \sin x$ 不能替换为零

/example/ 求极限 $\displaystyle\lim\_{x \to 0} \frac{\ln \cos x}{\tan^2 x}$

> 先来说明
> $$
> \ln(1 + x) \sim x \quad (x \to 0).
> $$
>
> 事实上有
> $$
> \frac{\ln(1 + x)}{x} = \ln\[(1 + x)^{1/x}] \to \ln e = 1 \quad (x \to 0).
> $$
>
> 于是，当 $x \to 0$ 时，有
> $$
> \ln \cos x = \ln\[1 - (1 - \cos x)] \sim -(1 - \cos x) \sim -\frac{1}{2}x^2.
> $$
>
> 另一方面
> $$
> \tan^2 x = \frac{\sin^2 x}{\cos^2 x} \sim x^2 \quad (x \to 0),
> $$
>
> 利用等价代换得
> $$
> \lim\_{x \to 0} \frac{\ln \cos x}{\tan^2 x} = -\frac{1}{2}.
> $$

结束.
