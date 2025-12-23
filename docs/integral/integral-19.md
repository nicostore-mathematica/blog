---
title: Chapter 19 重积分计算
permalink: /integral/integral-19/
createTime: 2025/12/17 23:10:32
---

## Part 1 重积分的计算

重积分的一个常用的计算方法就是转化为一元函数的积分去处理。我们先以矩形上的二重积分为例加以说明。

### · 投影法

设 $f(x, y)$ 为矩形 $I = [a, b] \times [c, d]$ 上的有界函数。

对于每一个固定的 $x \in [a, b]$，$f(x, y)$ 可以看成区间 $[c, d]$ 上关于 $y$ 的函数，它在 $[c, d]$ 上的下积分和上积分分别记为 $\varphi(x)$ 和 $\psi(x)$，这样我们就得到了定义在 $[a, b]$ 上的两个有界函数。

**定理1**：

> 设 $f(x, y)$ 在 $I$ 上可积，则 $\varphi(x)$ 和 $\psi(x)$ 在 $[a, b]$ 上均可积，且  
> $$
> \int_I f = \int_a^b \varphi(x)\,dx = \int_a^b \psi(x)\,dx.
> $$
>

/proof/

> 用记号 $\pi_1$, $\pi_2$ 分别表示 $[a, b]$ 和 $[c, d]$ 的分割：  
> $$
> \pi_1: \, a = x_0 < x_1 < \cdots < x_m = b, \quad \pi_2: \, c = y_0 < y_1 < \cdots < y_n = d,
> $$
> $I$ 的相应分割记为 $\pi = \pi_1 \times \pi_2$。因为 $f$ 在 $I$ 上可积，故任给 $\varepsilon > 0$，存在 $\delta > 0$，当 $\|\pi\| < \delta$ 时  
> $$
> \int_I f - \varepsilon < \sum_{ij} f(\xi_{ij}) v(I_{ij}) < \int_I f + \varepsilon, \quad \forall\, \xi_{ij} = (\xi_i, \eta_j) \in I_{ij}.
> $$
> 特别地，当 $\|\pi_1\| < \delta/\sqrt{2}$，$\|\pi_2\| < \delta/\sqrt{2}$ 时，上式成立。此时有  
> $$
> \begin{aligned}
> \int_I f - \varepsilon &\leq \sum_{ij} \inf_{\eta_j \in [y_{j-1},\, y_j]} f(\xi_i, \eta_j) \Delta x_i \Delta y_j \\\\
> &\leq \sum_{ij} \sup_{\eta_j \in [y_{j-1},\, y_j]} f(\xi_i, \eta_j) \Delta x_i \Delta y_j \leq \int_I f + \varepsilon,
> \end{aligned}
> $$
> 因为 $\displaystyle \sum_{j=1}^n \inf_{\eta_j \in [y_{j-1},\, y_j]} f(\xi_i, \eta_j) \Delta y_j$ 是函数 $f(\xi_i, y)$ 在 $[c, d]$ 上的 Darboux 下和，故  
> $$
> \sum_{j=1}^n \inf_{\eta_j \in [y_{j-1},\, y_j]} f(\xi_i, \eta_j) \Delta y_j \leq \varphi(\xi_i).
> $$
> 同理  
> $$
> \sum_{j=1}^n \sup_{\eta_j \in [y_{j-1},\, y_j]} f(\xi_i, \eta_j) \Delta y_j \geq \psi(\xi_i).
> $$
> 因此我们得到  
> $$
> \int_I f - \varepsilon \leq \sum_{i=1}^m \varphi(\xi_i) \Delta x_i \leq \sum_{i=1}^m \psi(\xi_i) \Delta x_i \leq \int_I f + \varepsilon.
> $$
> 这说明 $\varphi(x)$ 和 $\psi(x)$ 在 $[a, b]$ 上均可积，且积分等于 $f$ 在 $I$ 上的积分。

**推论2**：

> 设 $f(x, y)$ 在矩形 $I$ 上可积。如果对于每一个 $x \in [a, b]$，变量 $y$ 的函数 $f(x, y)$ 在 $[c, d]$ 上可积，则  
> $$
> \int_I f = \int_a^b dx \int_c^d f(x, y)\,dy.
> $$
> 同理，如果对于每一个 $y \in [c, d]$，变量 $x$ 的函数 $f(x, y)$ 在 $[a, b]$ 上可积，则  
> $$
> \int_I f = \int_c^d dy \int_a^b f(x, y)\,dx.
> $$

**推论3**：

> 设 $f(x, y)$ 为矩形 $I$ 上的连续函数，则有  
> $$
> \int_I f = \int_a^b dx \int_c^d f(x, y)\,dy = \int_c^d dy \int_a^b f(x, y)\,dx,
> $$
> 上式最左边为重积分，右边称为累次积分。

对于多重积分，类似的结果也成立。例如，三重积分在一定条件下可以化为二重积分和一重积分。

现在我们讨论一般区域上重积分化累次积分的问题，这往往可以通过考虑矩形上的积分予以解决。

**定理4**

> 设 $A \subset \mathbb{R}^2$ 为可求面积的有界集合，$f: A \to \mathbb{R}$ 为有界连续函数。记 $A$ 在 $x$ 轴上的垂直投影为  
> $$
> I = \{x \in \mathbb{R} \mid \text{存在 } y \text{ 使得 } (x, y) \in A\}.
> $$
> 如果对于每一点 $x \in I$，$A_x = \{y \in \mathbb{R} \mid (x, y) \in A\}$ 是区间（可退化为一点），则  
> $$
> \int_A f = \int_I dx \int_{A_x} f(x, y)\,dy.
> $$
> 同理，记 $A$ 在 $y$ 轴上的垂直投影为  
> $$
> J = \{y \in \mathbb{R} \mid \text{exist } x \text{ s.t. } (x, y) \in A\}.
> $$
> 如果对于每一点 $y \in J$，$A^y = \{x \in \mathbb{R} \mid (x, y) \in A\}$ 是区间（可退化为一点），则  
> $$
> \int_A f = \int_J dy \int_{A^y} f(x, y)\,dx.
> $$
>

/proof/

> 因为 $A$ 可求面积，$f$ 有界连续，故 $f$ 可积。
>
> 取包含 $A$ 的矩形 $[a, b] \times [c, d]$，则 $f_A$ 在 $[a, b] \times [c, d]$ 上可积。
>
> 当 $x \in I$ 时，$f_A(x, y)$ 关于 $y$ 在 $[c, d]$ 上的积分等于连续函数 $f(x, y)$ 关于 $y$ 在区间 $A_x$ 上的积分。
>
> 当 $x \in [a, b] \cap I^c$ 时 $f_A(x, y) = 0$。因此，对于每一个 $x \in [a, b]$，$f_A(x, y)$ 关于 $y$ 在 $[c, d]$ 上均可积，从而有  
> $$
> \begin{aligned}
> \int_A f &= \int_{[a,b] \times [c,d]} f_A = \int_a^b dx \int_c^d f_A(x, y)\,dy \\\\
> &= \int_I dx \int_c^d f_A(x, y)\,dy = \int_I dx \int_{A_x} f(x, y)\,dy.
> \end{aligned}
> $$
> 关于 $y$ 轴投影的结果完全类似。

> [!important]
>
> **注意** 只要 $f$ 在 $A$ 上可积，且 $f(x, y)$ 关于 $y$ 在每一个区间 $A_x$ 上可积，则定理的第一个结论仍然成立，第二个结论类似。
>
> 定理中的这种计算重积分的方法称为“投影法”。
>
> 设 $y_1(x) \leq y_2(x)$ 为 $[a, b]$ 上定义的连续函数，则集合  
> $$
> A = \{(x, y) \in \mathbb{R}^2 \mid y_1(x) \leq y \leq y_2(x),\, a \leq x \leq b\}
> $$
> 的边界为零面积集，因此 $A$ 可求面积。$A$ 与跟 $x$ 轴垂直的直线的交要么为空集，要么为区间，因此得到下面定理

**定理5**：

> 设 $y_1, y_2$ 和 $A$ 如上。函数 $f: A \to \mathbb{R}$ 可积，且对于每一个 $x \in [a, b]$，关于 $y$ 的积分  
> $$
> \int_{y_1(x)}^{y_2(x)} f(x, y)\,dy
> $$
> 存在，则  
> $$
> \int_A f = \int_a^b dx \int_{y_1(x)}^{y_2(x)} f(x, y)\,dy.
> $$
>

/proof/

> 证明和上一定理类似

同样，如果 $A$ 是这样的集合  
$$
\{(x, y) \in \mathbb{R}^2 \mid x_1(y) \leq x \leq x_2(y),\, c \leq y \leq d\},
$$
在类似条件下就有  
$$
\int_A f = \int_c^d dy \int_{x_1(y)}^{x_2(y)} f(x, y)\,dx.
$$

对于一般的 $n$ 重积分，类似的结果也成立（把区间换成矩形）。

### · Fubini 定理

/example/  求 $n$ 维单形 $\Delta_n(a)$ ($a > 0$) 的体积，其中  
$$
\Delta_n(a) = \{(x_1, \cdots, x_n) \in \mathbb{R}^n \mid x_1 \geq 0, \cdots, x_n \geq 0,\, x_1 + \cdots + x_n \leq a\}.
$$

> 被积区域 $\Delta_n(a)$ 可以表示为  
> $$
> \{x \in \mathbb{R}^n \mid 0 \leq x_1 \leq a,\, 0 \leq x_2 \leq a - x_1, \cdots,\, 0 \leq x_n \leq a - x_1 - \cdots - x_{n-1}\},
> $$
> 因此  
> $$
> v(\Delta_n(a)) = \int_0^a dx_1 \int_0^{a - x_1} dx_2 \cdots \int_0^{a - x_1 - \cdots - x_{n-1}} dx_n.
> $$
>
> 在上式右端中对各个一元积分依次做变量替换  
> $$
> y_n = x_1 + \cdots + x_n, \cdots,\, y_2 = x_1 + x_2,\, y_1 = x_1,
> $$
> 得  
> $$
> \begin{aligned}
> v(\Delta_n(a)) &= \int_0^a dy_1 \int_{y_1}^a dy_2 \cdots \int_{y_{n-1}}^a dy_n \\\\
> &= \int_0^a dy_1 \int_{y_1}^a dy_2 \cdots \int_{y_{n-2}}^a (a - y_{n-1})\,dy_{n-1} \\\\
> &= \cdots = \frac{1}{(n-1)!} \int_0^a (a - y_1)^{n-1}\,dy_1 \\\\
> &= \frac{a^n}{n!}.
> \end{aligned}
> $$







