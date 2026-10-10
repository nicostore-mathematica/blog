---
url: /integral/integral-35/index.md
---
## Part 2 重积分

关于二重积分的理论可以直接推广到 $n$ 重积分上. 在 $n$ 维欧氏空间 $\mathbb{R}^n$ 中，称点集\
$$
I = \[a\_1, b\_1] \times \[a\_2, b\_2] \times \cdots \times \[a\_n, b\_n]
$$
为一个 $n$ 维矩形，其直径 $d(I)$ 和体积 $v(I)$ 分别为\
$$
\begin{aligned}
d(I) &= \sqrt{(b\_1 - a\_1)^2 + \cdots + (b\_n - a\_n)^2},\\\ v(I) &= (b\_1 - a\_1) \cdot (b\_2 - a\_2) \cdots (b\_n - a\_n).
\end{aligned}
$$

设区间 $\[a\_i, b\_i]$ ($i = 1, 2, \cdots, n$) 有分割
$$
\pi\_i: , a\_i = x\_0^i < x\_1^i < \cdots < x\_{m\_i}^i = b\_i,
$$
这时超平面 $x\_i = x\_j^i$ ($i = 1, 2, \cdots, n; j = 0, 1, \cdots, m\_i$) 将 $I$ 分割成 $m\_1 \cdot m\_2 \cdots m\_n$ 个小 $n$ 维矩形\
$$
I\_{i\_1 \cdots i\_n} = \[x\_{i\_1 - 1}^1, x\_{i\_1}^1] \times \cdots \times \[x\_{i\_n - 1}^n, x\_{i\_n}^n], \quad 1 \leq i\_1 \leq m\_1, \cdots, 1 \leq i\_n \leq m\_n.
$$
这些小矩形所形成的分割记为 $\pi = \pi\_1 \times \cdots \times \pi\_n$，定义\
$$
|\pi| = \max\_{i\_1 \cdots i\_n} d(I\_{i\_1 \cdots i\_n}),
$$
称为分割 $\pi$ 的模.

### · 定义

**定义1** ($n$ 维矩形上的 Riemann 积分)

> 设 $f: I \to \mathbb{R}$ 为 $n$ 维矩形 $I$ 上定义的函数，如果存在实数 $A$，使得任给 $\varepsilon > 0$，均存在 $\delta > 0$，当 $|\pi| < \delta$ 时，有\
> $$
> \left| \sum\_{i\_1 \cdots i\_n} f(\xi\_{i\_1 \cdots i\_n}) v(I\_{i\_1 \cdots i\_n}) - A \right| < \varepsilon, \quad \forall, \xi\_{i\_1 \cdots i\_n} \in I\_{i\_1 \cdots i\_n},
> $$
> 则称 $f$ 在 $I$ 上 Riemann 可积或简称可积，$A$ 为 $f$ 在 $I$ 上的积分，记为\
> $$
> A = \int\_I f = \int\_I f(x),dx = \int\_I \cdots \int\_I f(x\_1, \cdots, x\_n),dx\_1 \cdots dx\_n.
> $$

$n$ 重 Riemann 积分的理论与二重 Riemann 积分的理论是完全类似的，我们不再重复叙述，只是指出 $\mathbb{R}^n$ 中零测集、零体积集和可求体积集分别对应于 $\mathbb{R}^2$ 中的零测集、零面积集和可求面积集.

下面考虑多重积分的基本性质. 第一个是关于被积函数的线性性.

### · 基本性质

**命题1**：

> 设 $f, g: A \to \mathbb{R}$ 是可求体积的有界集合 $A$ 上定义的可积函数，$\alpha, \beta$ 为常数，则 $\alpha f + \beta g$ 也是 $A$ 上的可积函数，且\
> $$
> \int\_A (\alpha f + \beta g) = \alpha \int\_A f + \beta \int\_A g.
> $$

/proof/

> 通过转化为矩形上的积分并利用可积的充要条件得到 $\alpha f + \beta g$ 的可积性，再由积分的定义得到欲证等式. $\square$

下面的性质是关于积分区域的可加性的.

**命题2**：

> 设 $A\_1, A\_2$ 为可求体积的有界集合，$A\_1 \cap A\_2$ 为零体积集. 如果 $f$ 在 $A\_1$ 和 $A\_2$ 上均可积，则 $f$ 在 $A\_1 \cup A\_2$ 上也可积，且\
> $$
> \int\_{A\_1 \cup A\_2} f = \int\_{A\_1} f + \int\_{A\_2} f.
> $$

/proof/

> 取矩形 $I \supset A\_1 \cup A\_2$，则 $f\_{A\_1 \cup A\_2} - (f\_{A\_1} + f\_{A\_2})$ 仅在零体积集 $A\_1 \cap A\_2$ 上才可能取非零值，特别地，由定理 13.1.11 知 $f\_{A\_1 \cup A\_2} - (f\_{A\_1} + f\_{A\_2})$ 在 $I$ 上可积且积分为零，因此 $f\_{A\_1 \cup A\_2}$ 在 $I$ 上可积，且\
> $$
> \begin{aligned}
> \int\_{A\_1 \cup A\_2} f &= \int\_I f\_{A\_1 \cup A\_2}= \int\_I (f\_{A\_1} + f\_{A\_2}) \\\\
> &= \int\_I f\_{A\_1} + \int\_I f\_{A\_2} \\\\
> &= \int\_{A\_1} f + \int\_{A\_2} f.
> \end{aligned}
> $$
> 这个结果也可推广到多个可求体积的集合的情形.

下面的性质是多重积分的保序性.

**命题3**：

> 设 $A$ 为可求体积的有界集合，$f, g$ 为 $A$ 上的可积函数.
>
> (1) 如果 $f \geq 0$，则 $\displaystyle \int\_A f \geq 0$；
>
> (2) 如果 $f \geq g$，则 $\displaystyle \int\_A f \geq \int\_A g$.

/proof/

> (1) 取矩形 $I \supset A$，则 $f$ 的延拓函数 $f\_A$ 仍然是非负函数，其 Riemann 和也总是非负的，因而 $f\_A$ 在 $I$ 上的积分非负，即 $f$ 在 $A$ 上的积分非负.
>
> (2) 如果 $f \geq g$，则 $f - g$ 为非负可积函数，由 (1) 知 $f - g$ 在 $A$ 上的积分非负，由积分关于被积函数的线性性即知 $f$ 在 $A$ 上的积分不小于 $g$ 在 $A$ 上的积分.

**推论4**：

> 设 $A$ 为可求体积的有界集合，$f$ 为 $A$ 上的可积函数，则 $|f|$ 也是 $A$ 上可积函数，且\
> $$
> \left| \int\_A f \right| \leq \int\_A |f|.
> $$

/proof/

> 取矩形 $I \supset A$，则 $|f|\_A = |f|\_A$. 由 $f\_A$ 在 $I$ 上可积知 $|f|\_A$ 也在 $I$ 上可积，从而 $|f|\_A$ 在 $I$ 上可积，即 $|f|$ 在 $A$ 上可积. 注意到\
> $$
> -|f|\_A \leq f\_A \leq |f|\_A,
> $$
> 由积分的保序性和线性性得\
> $$
> -\int\_I |f|\_A \leq \int\_I f\_A \leq \int\_I |f|\_A,
> $$
> 即\
> $$
> -\int\_A |f| \leq \int\_A f \leq \int\_A |f|,
> $$
> 推论得证.

**定理5** (积分中值定理)：

> 设 $A$ 为可求体积的有界集合，$f, g$ 为 $A$ 上的可积函数. 如果 $g$ 在 $A$ 上不变号，则存在常数 $\mu$，使得\
> $$
> \int\_A f g = \mu \int\_A g,
> $$
> 其中 $\displaystyle\inf\_A f \leq \mu \leq \displaystyle\sup\_A f$.

/proof/

> 不妨假设 $g \geq 0$. 跟前面的论证类似，不难看出 $fg$ 在 $A$ 上可积. 且由\
> $$
> (\inf\_A f) g(x) \leq f(x) g(x) \leq (\sup\_A f) g(x), \quad \forall, x \in A
> $$
> 以及积分的保序性得\
> $$
> (\inf\_A f) \int\_A g \leq \int\_A f g \leq (\sup\_A f) \int\_A g.
> $$
> 如果 $\displaystyle \int\_A g = 0$，则上式表明 $fg$ 在 $A$ 上的积分也为零，此时 $\mu$ 可任意取值. 设 $\displaystyle \int\_A g > 0$，则\
> $$
> \inf\_A f \leq \frac{\displaystyle\int\_A f g}{\displaystyle\int\_A g} \leq \sup\_A f,
> $$
> 令\
> $$
> \mu = \frac{\displaystyle\int\_A f g}{\displaystyle\int\_A g},
> $$
> 则 $\mu$ 是满足要求的常数.

**推论6**：

> 设 $A$ 为可求体积的紧致区域，$f$ 为 $A$ 上的连续函数. 如果 $g$ 是 $A$ 上不变号的可积函数，则存在 $\xi \in A$，使得\
> $$
> \int\_A f g = f(\xi) \int\_A g.
> $$

/proof/

> 利用积分中值定理和连续函数在紧致区域上的介值定理即可

## Part 3 重积分的计算

重积分的一个常用的计算方法就是转化为一元函数的积分去处理. 我们先以矩形上的二重积分为例加以说明.

### · 投影法

设 $f(x, y)$ 为矩形 $I = \[a, b] \times \[c, d]$ 上的有界函数.

对于每一个固定的 $x \in \[a, b]$，$f(x, y)$ 可以看成区间 $\[c, d]$ 上关于 $y$ 的函数，它在 $\[c, d]$ 上的下积分和上积分分别记为 $\varphi(x)$ 和 $\psi(x)$，这样我们就得到了定义在 $\[a, b]$ 上的两个有界函数.

**定理1**：

> 设 $f(x, y)$ 在 $I$ 上可积，则 $\varphi(x)$ 和 $\psi(x)$ 在 $\[a, b]$ 上均可积，且\
> $$
> \int\_I f = \int\_a^b \varphi(x),dx = \int\_a^b \psi(x),dx.
> $$

/proof/

> 用记号 $\pi\_1$, $\pi\_2$ 分别表示 $\[a, b]$ 和 $\[c, d]$ 的分割：\
> $$
> \pi\_1: , a = x\_0 < x\_1 < \cdots < x\_m = b, \quad \pi\_2: , c = y\_0 < y\_1 < \cdots < y\_n = d,
> $$
> $I$ 的相应分割记为 $\pi = \pi\_1 \times \pi\_2$. 因为 $f$ 在 $I$ 上可积，故任给 $\varepsilon > 0$，存在 $\delta > 0$，当 $|\pi| < \delta$ 时\
> $$
> \int\_I f - \varepsilon < \sum\_{ij} f(\xi\_{ij}) v(I\_{ij}) < \int\_I f + \varepsilon, \quad \forall, \xi\_{ij} = (\xi\_i, \eta\_j) \in I\_{ij}.
> $$
> 特别地，当 $|\pi\_1| < \delta/\sqrt{2}$，$|\pi\_2| < \delta/\sqrt{2}$ 时，上式成立. 此时有\
> $$
> \begin{aligned}
> \int\_I f - \varepsilon &\leq \sum\_{ij} \inf\_{\eta\_j \in \[y\_{j-1},, y\_j]} f(\xi\_i, \eta\_j) \Delta x\_i \Delta y\_j \\\\
> &\leq \sum\_{ij} \sup\_{\eta\_j \in \[y\_{j-1},, y\_j]} f(\xi\_i, \eta\_j) \Delta x\_i \Delta y\_j \leq \int\_I f + \varepsilon,
> \end{aligned}
> $$
> 因为 $\displaystyle \sum\_{j=1}^n \inf\_{\eta\_j \in \[y\_{j-1},, y\_j]} f(\xi\_i, \eta\_j) \Delta y\_j$ 是函数 $f(\xi\_i, y)$ 在 $\[c, d]$ 上的 Darboux 下和，故\
> $$
> \sum\_{j=1}^n \inf\_{\eta\_j \in \[y\_{j-1},, y\_j]} f(\xi\_i, \eta\_j) \Delta y\_j \leq \varphi(\xi\_i).
> $$
> 同理\
> $$
> \sum\_{j=1}^n \sup\_{\eta\_j \in \[y\_{j-1},, y\_j]} f(\xi\_i, \eta\_j) \Delta y\_j \geq \psi(\xi\_i).
> $$
> 因此我们得到\
> $$
> \int\_I f - \varepsilon \leq \sum\_{i=1}^m \varphi(\xi\_i) \Delta x\_i \leq \sum\_{i=1}^m \psi(\xi\_i) \Delta x\_i \leq \int\_I f + \varepsilon.
> $$
> 这说明 $\varphi(x)$ 和 $\psi(x)$ 在 $\[a, b]$ 上均可积，且积分等于 $f$ 在 $I$ 上的积分.

**推论2**：

> 设 $f(x, y)$ 在矩形 $I$ 上可积. 如果对于每一个 $x \in \[a, b]$，变量 $y$ 的函数 $f(x, y)$ 在 $\[c, d]$ 上可积，则\
> $$
> \int\_I f = \int\_a^b dx \int\_c^d f(x, y),dy.
> $$
> 同理，如果对于每一个 $y \in \[c, d]$，变量 $x$ 的函数 $f(x, y)$ 在 $\[a, b]$ 上可积，则\
> $$
> \int\_I f = \int\_c^d dy \int\_a^b f(x, y),dx.
> $$

**推论3**：

> 设 $f(x, y)$ 为矩形 $I$ 上的连续函数，则有\
> $$
> \int\_I f = \int\_a^b dx \int\_c^d f(x, y),dy = \int\_c^d dy \int\_a^b f(x, y),dx,
> $$
> 上式最左边为重积分，右边称为累次积分.

对于多重积分，类似的结果也成立. 例如，三重积分在一定条件下可以化为二重积分和一重积分.

现在我们讨论一般区域上重积分化累次积分的问题，这往往可以通过考虑矩形上的积分予以解决.

**定理4**

> 设 $A \subset \mathbb{R}^2$ 为可求面积的有界集合，$f: A \to \mathbb{R}$ 为有界连续函数. 记 $A$ 在 $x$ 轴上的垂直投影为\
> $$
> I = {x \in \mathbb{R} \mid \text{存在 } y \text{ 使得 } (x, y) \in A}.
> $$
> 如果对于每一点 $x \in I$，$A\_x = {y \in \mathbb{R} \mid (x, y) \in A}$ 是区间（可退化为一点），则\
> $$
> \int\_A f = \int\_I dx \int\_{A\_x} f(x, y),dy.
> $$
> 同理，记 $A$ 在 $y$ 轴上的垂直投影为\
> $$
> J = {y \in \mathbb{R} \mid \text{exist } x \text{ s.t. } (x, y) \in A}.
> $$
> 如果对于每一点 $y \in J$，$A^y = {x \in \mathbb{R} \mid (x, y) \in A}$ 是区间（可退化为一点），则\
> $$
> \int\_A f = \int\_J dy \int\_{A^y} f(x, y),dx.
> $$

/proof/

> 因为 $A$ 可求面积，$f$ 有界连续，故 $f$ 可积.
>
> 取包含 $A$ 的矩形 $\[a, b] \times \[c, d]$，则 $f\_A$ 在 $\[a, b] \times \[c, d]$ 上可积.
>
> 当 $x \in I$ 时，$f\_A(x, y)$ 关于 $y$ 在 $\[c, d]$ 上的积分等于连续函数 $f(x, y)$ 关于 $y$ 在区间 $A\_x$ 上的积分.
>
> 当 $x \in \[a, b] \cap I^c$ 时 $f\_A(x, y) = 0$. 因此，对于每一个 $x \in \[a, b]$，$f\_A(x, y)$ 关于 $y$ 在 $\[c, d]$ 上均可积，从而有\
> $$
> \begin{aligned}
> \int\_A f &= \int\_{\[a,b] \times \[c,d]} f\_A = \int\_a^b dx \int\_c^d f\_A(x, y),dy \\\\
> &= \int\_I dx \int\_c^d f\_A(x, y),dy = \int\_I dx \int\_{A\_x} f(x, y),dy.
> \end{aligned}
> $$
> 关于 $y$ 轴投影的结果完全类似.

> \[!important]
>
> **注意** 只要 $f$ 在 $A$ 上可积，且 $f(x, y)$ 关于 $y$ 在每一个区间 $A\_x$ 上可积，则定理的第一个结论仍然成立，第二个结论类似.
>
> 定理中的这种计算重积分的方法称为“投影法”.
>
> 设 $y\_1(x) \leq y\_2(x)$ 为 $\[a, b]$ 上定义的连续函数，则集合\
> $$
> A = {(x, y) \in \mathbb{R}^2 \mid y\_1(x) \leq y \leq y\_2(x),, a \leq x \leq b}
> $$
> 的边界为零面积集，因此 $A$ 可求面积. $A$ 与跟 $x$ 轴垂直的直线的交要么为空集，要么为区间，因此得到下面定理

**定理5**：

> 设 $y\_1, y\_2$ 和 $A$ 如上. 函数 $f: A \to \mathbb{R}$ 可积，且对于每一个 $x \in \[a, b]$，关于 $y$ 的积分\
> $$
> \int\_{y\_1(x)}^{y\_2(x)} f(x, y),dy
> $$
> 存在，则\
> $$
> \int\_A f = \int\_a^b dx \int\_{y\_1(x)}^{y\_2(x)} f(x, y),dy.
> $$

/proof/

> 证明和上一定理类似

同样，如果 $A$ 是这样的集合\
$$
{(x, y) \in \mathbb{R}^2 \mid x\_1(y) \leq x \leq x\_2(y),, c \leq y \leq d},
$$
在类似条件下就有\
$$
\int\_A f = \int\_c^d dy \int\_{x\_1(y)}^{x\_2(y)} f(x, y),dx.
$$

对于一般的 $n$ 重积分，类似的结果也成立（把区间换成矩形）.

### · Fubini 定理

/example/  求 $n$ 维单形 $\Delta\_n(a)$ ($a > 0$) 的体积，其中\
$$
\Delta\_n(a) = {(x\_1, \cdots, x\_n) \in \mathbb{R}^n \mid x\_1 \geq 0, \cdots, x\_n \geq 0,, x\_1 + \cdots + x\_n \leq a}.
$$

> 被积区域 $\Delta\_n(a)$ 可以表示为\
> $$
> {x \in \mathbb{R}^n \mid 0 \leq x\_1 \leq a,, 0 \leq x\_2 \leq a - x\_1, \cdots,, 0 \leq x\_n \leq a - x\_1 - \cdots - x\_{n-1}},
> $$
> 因此\
> $$
> v(\Delta\_n(a)) = \int\_0^a dx\_1 \int\_0^{a - x\_1} dx\_2 \cdots \int\_0^{a - x\_1 - \cdots - x\_{n-1}} dx\_n.
> $$
>
> 在上式右端中对各个一元积分依次做变量替换\
> $$
> y\_n = x\_1 + \cdots + x\_n, \cdots,, y\_2 = x\_1 + x\_2,, y\_1 = x\_1,
> $$
> 得\
> $$
> \begin{aligned}
> v(\Delta\_n(a)) &= \int\_0^a dy\_1 \int\_{y\_1}^a dy\_2 \cdots \int\_{y\_{n-1}}^a dy\_n \\\\
> &= \int\_0^a dy\_1 \int\_{y\_1}^a dy\_2 \cdots \int\_{y\_{n-2}}^a (a - y\_{n-1}),dy\_{n-1} \\\\
> &= \cdots = \frac{1}{(n-1)!} \int\_0^a (a - y\_1)^{n-1},dy\_1 \\\\
> &= \frac{a^n}{n!}.
> \end{aligned}
> $$

所以我们有推广后的 **Fubini 定理**：

> 设 $f$ 在 $\[a,b]\times\[c,d]$ 上可积，且
> $$
> F(x)=\int\_c^df(x,y)\text{d}y
> $$
> 有定义 ($\forall x\in\[a,b]$)，则 $F$ 在 $\[a,b]$ 上可积，且
> $$
> \iint\_{\[a,b]\times\[c,d]}f\text{d}x\text{d}y=\int\_a^bF(x)\text{d}x
> $$

证明过程省略.
