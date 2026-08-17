---
title: Lesson 35 多元函数积分 II
permalink: /integral/integral-35/
createTime: 2026/08/17 14:17:56
---

## Part 2 重积分

关于二重积分的理论可以直接推广到 $n$ 重积分上. 在 $n$ 维欧氏空间 $\mathbb{R}^n$ 中，称点集  
$$
I = [a_1, b_1] \times [a_2, b_2] \times \cdots \times [a_n, b_n]
$$
为一个 $n$ 维矩形，其直径 $d(I)$ 和体积 $v(I)$ 分别为  
$$
\begin{aligned}
d(I) &= \sqrt{(b_1 - a_1)^2 + \cdots + (b_n - a_n)^2},\\\\ v(I) &= (b_1 - a_1) \cdot (b_2 - a_2) \cdots (b_n - a_n).
\end{aligned}
$$

设区间 $[a_i, b_i]$ ($i = 1, 2, \cdots, n$) 有分割
$$
\pi_i: \, a_i = x_0^i < x_1^i < \cdots < x_{m_i}^i = b_i,
$$
这时超平面 $x_i = x_j^i$ ($i = 1, 2, \cdots, n; j = 0, 1, \cdots, m_i$) 将 $I$ 分割成 $m_1 \cdot m_2 \cdots m_n$ 个小 $n$ 维矩形  
$$
I_{i_1 \cdots i_n} = [x_{i_1 - 1}^1, x_{i_1}^1] \times \cdots \times [x_{i_n - 1}^n, x_{i_n}^n], \quad 1 \leq i_1 \leq m_1, \cdots, 1 \leq i_n \leq m_n.
$$
这些小矩形所形成的分割记为 $\pi = \pi_1 \times \cdots \times \pi_n$，定义  
$$
\|\pi\| = \max_{i_1 \cdots i_n} d(I_{i_1 \cdots i_n}),
$$
称为分割 $\pi$ 的模. 

### · 定义

**定义1** ($n$ 维矩形上的 Riemann 积分)

> 设 $f: I \to \mathbb{R}$ 为 $n$ 维矩形 $I$ 上定义的函数，如果存在实数 $A$，使得任给 $\varepsilon > 0$，均存在 $\delta > 0$，当 $\|\pi\| < \delta$ 时，有  
> $$
> \left| \sum_{i_1 \cdots i_n} f(\xi_{i_1 \cdots i_n}) v(I_{i_1 \cdots i_n}) - A \right| < \varepsilon, \quad \forall\, \xi_{i_1 \cdots i_n} \in I_{i_1 \cdots i_n},
> $$
> 则称 $f$ 在 $I$ 上 Riemann 可积或简称可积，$A$ 为 $f$ 在 $I$ 上的积分，记为  
> $$
> A = \int_I f = \int_I f(x)\,dx = \int_I \cdots \int_I f(x_1, \cdots, x_n)\,dx_1 \cdots dx_n.
> $$

$n$ 重 Riemann 积分的理论与二重 Riemann 积分的理论是完全类似的，我们不再重复叙述，只是指出 $\mathbb{R}^n$ 中零测集、零体积集和可求体积集分别对应于 $\mathbb{R}^2$ 中的零测集、零面积集和可求面积集. 

下面考虑多重积分的基本性质. 第一个是关于被积函数的线性性. 

### · 基本性质

**命题1**：

> 设 $f, g: A \to \mathbb{R}$ 是可求体积的有界集合 $A$ 上定义的可积函数，$\alpha, \beta$ 为常数，则 $\alpha f + \beta g$ 也是 $A$ 上的可积函数，且  
> $$
> \int_A (\alpha f + \beta g) = \alpha \int_A f + \beta \int_A g.
> $$

/proof/

> 通过转化为矩形上的积分并利用可积的充要条件得到 $\alpha f + \beta g$ 的可积性，再由积分的定义得到欲证等式. $\square$

下面的性质是关于积分区域的可加性的. 

**命题2**：

> 设 $A_1, A_2$ 为可求体积的有界集合，$A_1 \cap A_2$ 为零体积集. 如果 $f$ 在 $A_1$ 和 $A_2$ 上均可积，则 $f$ 在 $A_1 \cup A_2$ 上也可积，且  
> $$
> \int_{A_1 \cup A_2} f = \int_{A_1} f + \int_{A_2} f.
> $$

/proof/

> 取矩形 $I \supset A_1 \cup A_2$，则 $f_{A_1 \cup A_2} - (f_{A_1} + f_{A_2})$ 仅在零体积集 $A_1 \cap A_2$ 上才可能取非零值，特别地，由定理 13.1.11 知 $f_{A_1 \cup A_2} - (f_{A_1} + f_{A_2})$ 在 $I$ 上可积且积分为零，因此 $f_{A_1 \cup A_2}$ 在 $I$ 上可积，且  
> $$
> \begin{aligned}
> \int_{A_1 \cup A_2} f &= \int_I f_{A_1 \cup A_2}= \int_I (f_{A_1} + f_{A_2}) \\\\
> &= \int_I f_{A_1} + \int_I f_{A_2} \\\\
> &= \int_{A_1} f + \int_{A_2} f.
> \end{aligned}
> $$
> 这个结果也可推广到多个可求体积的集合的情形. 

下面的性质是多重积分的保序性. 

**命题3**：

> 设 $A$ 为可求体积的有界集合，$f, g$ 为 $A$ 上的可积函数. 
>
> (1) 如果 $f \geq 0$，则 $\displaystyle \int_A f \geq 0$；
>
> (2) 如果 $f \geq g$，则 $\displaystyle \int_A f \geq \int_A g$. 

/proof/

> (1) 取矩形 $I \supset A$，则 $f$ 的延拓函数 $f_A$ 仍然是非负函数，其 Riemann 和也总是非负的，因而 $f_A$ 在 $I$ 上的积分非负，即 $f$ 在 $A$ 上的积分非负. 
>
> (2) 如果 $f \geq g$，则 $f - g$ 为非负可积函数，由 (1) 知 $f - g$ 在 $A$ 上的积分非负，由积分关于被积函数的线性性即知 $f$ 在 $A$ 上的积分不小于 $g$ 在 $A$ 上的积分. 

**推论4**：

> 设 $A$ 为可求体积的有界集合，$f$ 为 $A$ 上的可积函数，则 $|f|$ 也是 $A$ 上可积函数，且  
> $$
> \left| \int_A f \right| \leq \int_A |f|.
> $$

/proof/

> 取矩形 $I \supset A$，则 $|f|_A = |f|_A$. 由 $f_A$ 在 $I$ 上可积知 $|f|_A$ 也在 $I$ 上可积，从而 $|f|_A$ 在 $I$ 上可积，即 $|f|$ 在 $A$ 上可积. 注意到  
> $$
> -|f|_A \leq f_A \leq |f|_A,
> $$
> 由积分的保序性和线性性得  
> $$
> -\int_I |f|_A \leq \int_I f_A \leq \int_I |f|_A,
> $$
> 即  
> $$
> -\int_A |f| \leq \int_A f \leq \int_A |f|,
> $$
> 推论得证. 

**定理5** (积分中值定理)：

> 设 $A$ 为可求体积的有界集合，$f, g$ 为 $A$ 上的可积函数. 如果 $g$ 在 $A$ 上不变号，则存在常数 $\mu$，使得  
> $$
> \int_A f g = \mu \int_A g,
> $$
> 其中 $\displaystyle\inf_A f \leq \mu \leq \displaystyle\sup_A f$. 

/proof/

> 不妨假设 $g \geq 0$. 跟前面的论证类似，不难看出 $fg$ 在 $A$ 上可积. 且由  
> $$
> (\inf_A f) g(x) \leq f(x) g(x) \leq (\sup_A f) g(x), \quad \forall\, x \in A
> $$
> 以及积分的保序性得  
> $$
> (\inf_A f) \int_A g \leq \int_A f g \leq (\sup_A f) \int_A g.
> $$
> 如果 $\displaystyle \int_A g = 0$，则上式表明 $fg$ 在 $A$ 上的积分也为零，此时 $\mu$ 可任意取值. 设 $\displaystyle \int_A g > 0$，则  
> $$
> \inf_A f \leq \frac{\displaystyle\int_A f g}{\displaystyle\int_A g} \leq \sup_A f,
> $$
> 令  
> $$
> \mu = \frac{\displaystyle\int_A f g}{\displaystyle\int_A g},
> $$
> 则 $\mu$ 是满足要求的常数. 

**推论6**：

> 设 $A$ 为可求体积的紧致区域，$f$ 为 $A$ 上的连续函数. 如果 $g$ 是 $A$ 上不变号的可积函数，则存在 $\xi \in A$，使得  
> $$
> \int_A f g = f(\xi) \int_A g.
> $$

/proof/

> 利用积分中值定理和连续函数在紧致区域上的介值定理即可

## Part 3 重积分的计算

重积分的一个常用的计算方法就是转化为一元函数的积分去处理. 我们先以矩形上的二重积分为例加以说明. 

### · 投影法

设 $f(x, y)$ 为矩形 $I = [a, b] \times [c, d]$ 上的有界函数. 

对于每一个固定的 $x \in [a, b]$，$f(x, y)$ 可以看成区间 $[c, d]$ 上关于 $y$ 的函数，它在 $[c, d]$ 上的下积分和上积分分别记为 $\varphi(x)$ 和 $\psi(x)$，这样我们就得到了定义在 $[a, b]$ 上的两个有界函数. 

**定理1**：

> 设 $f(x, y)$ 在 $I$ 上可积，则 $\varphi(x)$ 和 $\psi(x)$ 在 $[a, b]$ 上均可积，且  
> $$
> \int_I f = \int_a^b \varphi(x)\,dx = \int_a^b \psi(x)\,dx.
> $$

/proof/

> 用记号 $\pi_1$, $\pi_2$ 分别表示 $[a, b]$ 和 $[c, d]$ 的分割：  
> $$
> \pi_1: \, a = x_0 < x_1 < \cdots < x_m = b, \quad \pi_2: \, c = y_0 < y_1 < \cdots < y_n = d,
> $$
> $I$ 的相应分割记为 $\pi = \pi_1 \times \pi_2$. 因为 $f$ 在 $I$ 上可积，故任给 $\varepsilon > 0$，存在 $\delta > 0$，当 $\|\pi\| < \delta$ 时  
> $$
> \int_I f - \varepsilon < \sum_{ij} f(\xi_{ij}) v(I_{ij}) < \int_I f + \varepsilon, \quad \forall\, \xi_{ij} = (\xi_i, \eta_j) \in I_{ij}.
> $$
> 特别地，当 $\|\pi_1\| < \delta/\sqrt{2}$，$\|\pi_2\| < \delta/\sqrt{2}$ 时，上式成立. 此时有  
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
> 这说明 $\varphi(x)$ 和 $\psi(x)$ 在 $[a, b]$ 上均可积，且积分等于 $f$ 在 $I$ 上的积分. 

**推论2**：

> 设 $f(x, y)$ 在矩形 $I$ 上可积. 如果对于每一个 $x \in [a, b]$，变量 $y$ 的函数 $f(x, y)$ 在 $[c, d]$ 上可积，则  
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
> 上式最左边为重积分，右边称为累次积分. 

对于多重积分，类似的结果也成立. 例如，三重积分在一定条件下可以化为二重积分和一重积分. 

现在我们讨论一般区域上重积分化累次积分的问题，这往往可以通过考虑矩形上的积分予以解决. 

**定理4**

> 设 $A \subset \mathbb{R}^2$ 为可求面积的有界集合，$f: A \to \mathbb{R}$ 为有界连续函数. 记 $A$ 在 $x$ 轴上的垂直投影为  
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

/proof/

> 因为 $A$ 可求面积，$f$ 有界连续，故 $f$ 可积. 
>
> 取包含 $A$ 的矩形 $[a, b] \times [c, d]$，则 $f_A$ 在 $[a, b] \times [c, d]$ 上可积. 
>
> 当 $x \in I$ 时，$f_A(x, y)$ 关于 $y$ 在 $[c, d]$ 上的积分等于连续函数 $f(x, y)$ 关于 $y$ 在区间 $A_x$ 上的积分. 
>
> 当 $x \in [a, b] \cap I^c$ 时 $f_A(x, y) = 0$. 因此，对于每一个 $x \in [a, b]$，$f_A(x, y)$ 关于 $y$ 在 $[c, d]$ 上均可积，从而有  
> $$
> \begin{aligned}
> \int_A f &= \int_{[a,b] \times [c,d]} f_A = \int_a^b dx \int_c^d f_A(x, y)\,dy \\\\
> &= \int_I dx \int_c^d f_A(x, y)\,dy = \int_I dx \int_{A_x} f(x, y)\,dy.
> \end{aligned}
> $$
> 关于 $y$ 轴投影的结果完全类似. 

> [!important]
>
> **注意** 只要 $f$ 在 $A$ 上可积，且 $f(x, y)$ 关于 $y$ 在每一个区间 $A_x$ 上可积，则定理的第一个结论仍然成立，第二个结论类似. 
>
> 定理中的这种计算重积分的方法称为“投影法”. 
>
> 设 $y_1(x) \leq y_2(x)$ 为 $[a, b]$ 上定义的连续函数，则集合  
> $$
> A = \{(x, y) \in \mathbb{R}^2 \mid y_1(x) \leq y \leq y_2(x),\, a \leq x \leq b\}
> $$
> 的边界为零面积集，因此 $A$ 可求面积. $A$ 与跟 $x$ 轴垂直的直线的交要么为空集，要么为区间，因此得到下面定理

**定理5**：

> 设 $y_1, y_2$ 和 $A$ 如上. 函数 $f: A \to \mathbb{R}$ 可积，且对于每一个 $x \in [a, b]$，关于 $y$ 的积分  
> $$
> \int_{y_1(x)}^{y_2(x)} f(x, y)\,dy
> $$
> 存在，则  
> $$
> \int_A f = \int_a^b dx \int_{y_1(x)}^{y_2(x)} f(x, y)\,dy.
> $$

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

对于一般的 $n$ 重积分，类似的结果也成立（把区间换成矩形）. 

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

所以我们有推广后的 **Fubini 定理**：

> 设 $f$ 在 $[a,b]\times[c,d]$ 上可积，且
> $$
> F(x)=\int_c^df(x,y)\text{d}y
> $$
> 有定义 ($\forall x\in[a,b]$)，则 $F$ 在 $[a,b]$ 上可积，且
> $$
> \iint_{[a,b]\times[c,d]}f\text{d}x\text{d}y=\int_a^bF(x)\text{d}x
> $$

证明过程省略.
