---
title: Chapter 19 重积分计算
permalink: /integral/integral-19/
createTime: 2025/12/17 23:10:32
---

## Part 1 重积分的计算

重积分的一个常用的计算方法就是转化为一元函数的积分去处理. 我们先以矩形上的二重积分为例加以说明. 

### · 投影法

设 $f(x, y)$ 为矩形 $I = [a, b] \times [c, d]$ 上的有界函数. 

对于每一个固定的 $x \in [a, b]$，$f(x, y)$ 可以看成区间 $[c, d]$ 上关于 $y$ 的函数，它在 $[c, d]$ 上的下积分和上积分分别记为 $\varphi(x)$ 和 $\psi(x)$，这样我们就得到了定义在 $[a, b]$ 上的两个有界函数. 

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
>

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

## Part 2 变量替换

考虑下面的简单图形：

$$
P(v_1, v_2, \cdots, v_n) = \left\{ \sum_{i=1}^n x_i v_i \in \mathbb{R}^n \mid 0 \leq x_i \leq 1,\ i = 1, 2, \cdots, n. \right\}
$$

其中 $v_i$ ($1 \leq i \leq n$) 为 $\mathbb{R}^n$ 中的向量. 当 $n = 2$ 且 $v_1, v_2$ 线性无关时，$P(v_1, v_2)$ 为平面上的平行四边形. 

如果这个平行四边形有一条边和坐标轴平行，则用投影法可以得出其面积公式. 一般的情形如何处理？

### · 仿射变换

> [!important]
>
> **(1)** 平移变换. 设 $v_0 \in \mathbb{R}^n$ 为固定的向量，考虑仿射线性变换 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$，$\varphi(x) = x + v_0$. 根据矩形体积的平移不变性容易知道，如果 $A \subset \mathbb{R}^n$ 可求体积，则 $\varphi(A)$ 也是可求体积的，并且体积不变，这可称为体积的平移不变性. 
>
> **(2)** 伸缩变换. 设 $\lambda_i \in \mathbb{R}$ ($1 \leq i \leq n$)，考虑线性映射 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$，
>
> $$
> \varphi(x_1, x_2, \cdots, x_n) = (\lambda_1 x_1, \lambda_2 x_2, \cdots, \lambda_n x_n),\quad (x_1, x_2, \cdots, x_n) \in \mathbb{R}^n.
> $$
>
> 矩形 $I = [a_1, b_1] \times \cdots \times [a_n, b_n]$ 在 $\varphi$ 下的像仍为矩形（可以退化），其体积为
>
> $$
> v(\varphi(I)) = |\lambda_1| \cdots |\lambda_n| v(I) = |\det(\varphi)| v(I).
> $$
>

将矩形 $I$ 换成一般的可求体积的图形，上述公式仍然成立，这可从下面的覆盖引理看出. 

**引理1**（覆盖引理之一）

> 设 $\Omega$ 为 $\mathbb{R}^n$ 中可求体积的有界集合，则任给 $\varepsilon > 0$，存在有限个矩形 $\{I_i\}$ 与 $\{J_j\}$，使得
>
> $$
> \bigcup_i I_i \subset \Omega,\quad \sum_i v(I_i) > v(\Omega) - \varepsilon;\quad \bigcup_j J_j \supset \Omega,\quad \sum_j v(J_j) < v(\Omega) + \varepsilon,
> $$
>
> 其中 $\{I_i\}$ 的内部互不相交. 

/proof/

> 取包含 $\Omega$ 的矩形 $I$，由体积的定义，有
>
> $$
> \int_I \chi_\Omega = v(\Omega).
> $$
>
> 因此，任给 $\varepsilon > 0$，存在 $I$ 的分割 $\pi = \{I_{ij}\}$，使得
>
> $$
> \left| \sum_{ij} \chi_\Omega(\xi_{ij}) v(I_{ij}) - v(\Omega) \right| < \varepsilon,\quad \forall\ \xi_{ij} \in I_{ij}.
> $$
>
> 根据特征函数的定义，显然有
>
> $$
> \sum_{ij} \inf_{\xi_{ij} \in I_{ij}} \chi_\Omega(\xi_{ij}) v(I_{ij}) = \sum_{I_{ij} \subset \Omega} v(I_{ij}),
> $$
>
> 因此，对于分割 $\pi$ 就有
>
> $$
> v(\Omega) - \varepsilon < \sum_{I_{ij} \subset \Omega} v(I_{ij}) \leq v(\Omega).
> $$
>
> 同理
>
> $$
> \sum_{ij} \sup_{\xi_{ij} \in I_{ij}} \chi_\Omega(\xi_{ij}) v(I_{ij}) = \sum_{I_{ij} \cap \Omega \neq \varnothing} v(I_{ij}),
> $$
>
> 此时有
>
> $$
> v(\Omega) \leq \sum_{I_{ij} \cap \Omega \neq \varnothing} v(I_{ij}) < v(\Omega) + \varepsilon.
> $$
>
> 这就证明了引理. 

**注意**：从证明可以看出，那些内部与 $\partial\ \Omega$ 有非空交的矩形的体积之和不超过 $2\varepsilon$，由于 $\partial\Omega$ 包含于这些矩形以及其它矩形边界的并集之中，因此这给出了可求体积的有界集合的边界必为零体积集的另一证明. 

同时，也可以看出伸缩变换将可求体积的集合变为可求体积的集合. 

//example/

设 $a_i$ ($1 \leq i \leq n$) 为正实数，求椭球

$$
\left\{ (x_1, \cdots, x_n) \in \mathbb{R}^n \,\middle|\, \dfrac{x_1^2}{a_1^2} + \cdots + \dfrac{x_n^2}{a_n^2} \leq 1 \right\}
$$

的体积. 

> 利用伸缩变换 $x_i = a_i t_i$ ($1 \leq i \leq n$) 可得椭球体积为 $(a_1 a_2 \cdots a_n) \omega_n$，其中 $\omega_n$ 是上例中的 $n$ 维单位球的体积. 

下面给出第三种仿射变换：

> [!important]
>
> **(3)** 正交变换. 设 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$ 为正交变换，在 $\mathbb{R}^n$ 的标准基 $\{e_i\}$ 下 $\varphi$ 表示为
> $$
> \varphi(e_1, e_2, \cdots, e_n) = (e_1, e_2, \cdots, e_n) A,
> $$
>
> 其中 $A$ 为正交矩阵，即
>
> $$
> A A^T = A^T A = I_n.
> $$
>
> 我们将说明正交变换保持体积不变. 

**引理2**（覆盖引理之二）

> 设 $\Omega$ 为 $\mathbb{R}^n$ 中可求体积的有界集合，则任给 $\varepsilon > 0$，存在有限个 $n$ 维球体 $\{B_i\}$ 与 $\{B^j\}$，使得
>
> $$
> \bigcup_i B_i \subset \Omega,\quad \sum_i v(B_i) > v(\Omega) - \varepsilon;\quad \bigcup_j B^j \supset \Omega,\quad \sum_j v(B^j) < v(\Omega) + \varepsilon,
> $$
>
> 其中 $\{B_i\}$ 的内部互不相交. 

/proof/

> 先设 $v(\Omega) > 0$. 与引理1的证明类似，先取矩形 $I = [a,b]^n$ 使得 $\Omega \subset I$. 将 $I$ 作 $m^n$ 等分，当 $m$ 充分大时，完全包含于 $\Omega$ 的小矩形 $\{I_i^1\}$ 的体积之和满足条件
>
> $$
> \sum_i v(I_i^1) > \frac{1}{2} v(\Omega).
> $$
>
> 矩形 $I_i^1$ 的内接球记为 $B_i^1$，则根据前面例子中球体的体积公式，有
>
> $$
> \sum_i v(B_i^1) = \frac{\omega_n}{2^n} \sum_i v(I_i^1) > \frac{\omega_n}{2^{n+1}} v(\Omega).
> $$
>
> 记
>
> $$
> q = 1 - \frac{\omega_n}{2^{n+1}},
> $$
>
> 则 $0 < q < 1$，且
>
> $$
> 0 < v(\Omega - \bigcup_i B_i^1) < q \cdot v(\Omega).
> $$
>
> 对 $\Omega - \bigcup_i B_i^1$ 重复上述过程，可得包含于 $\Omega - \bigcup_i B_i^1$ 的有限个球体 $\{B_i^2\}$，使得
>
> $$
> 0 < v(\Omega - \bigcup_i B_i^1 - \bigcup_{i'} B_{i'}^2) < q \cdot v(\Omega - \bigcup_i B_i^1) < q^2 \cdot v(\Omega).
> $$
>
> 继续重复这一过程，由于 $q^k \to 0$ ($k \to \infty$)，对任给的 $\varepsilon > 0$，就得到内部互不相交的有限个 $n$ 维球体 $\{B_i\}$，使得（$k$ 充分大）
>
> $$
> 0 < v(\Omega - \bigcup_i B_i) < q^k \cdot v(\Omega) < \min\left\{ \frac{1}{n^{\frac{n}{2}} \omega_n},\ 1 \right\} \varepsilon.
> $$
>
> 现在，对于 $\Omega' = \Omega - \bigcup_i B_i$，仍然考虑矩形 $I$ 的 $m^n$ 等分，当 $m$ 充分大时，存在覆盖 $\Omega'$ 的小矩形 $\{I^j\}$，使得
>
> $$
> \sum_j v(I^j) < v(\Omega') + \frac{1}{n^{\frac{n}{2}} \omega_n} \varepsilon,
> $$
>
> 矩形 $I^j$ 的外接球记为 $B_j^2$，则
>
> $$
> \sum_j v(B_j^2) = \frac{\omega_n n^{\frac{n}{2}}}{2^n} \sum_j v(I^j) < \frac{n^{\frac{n}{2}} \omega_n}{2^n} \left( v(\Omega') + \frac{1}{n^{\frac{n}{2}} \omega_n} \varepsilon \right) < \varepsilon.
> $$
>
> 这说明 $\{B_i, B_j^2\}$ 是覆盖 $\Omega$ 的 $n$ 维球，它们的体积之和满足引理的要求. 
>
> 最后一段的证明对于 $v(\Omega) = 0$ 的情形也适用，这样就完全证明了引理. 

**推论3**：

> 正交变换保持体积不变. 

/proof/

> 注意到正交变换将 $n$ 维球映为 $n$ 维球，且球的半径不变（从而体积不变）. 
>
> 特别地，根据覆盖引理，正交变换将零体积集映为零体积集. 
>
> 再注意到正交变换将集合的边界点映为边界点，内点映为内点，因此将可求体积的集合映为可求体积的集合. 
>
> 再由覆盖引理以及正交变换保持球体体积不变即知正交变换保持可求体积集合的体积不变. 

/example/

设 $A$ 为 $n$ 阶正定对称实方阵，求椭球
$$
E_A = \{x = (x_1, x_2, \cdots, x_n) \in \mathbb{R}^n \mid x A x^T \leq 1\}
$$

的体积. 

> 我们知道，正定对称方阵可以对角化，即存在正交方阵 $O$，使得
>
> $$
> A = O \cdot \mathrm{diag}(\lambda_1, \lambda_2, \cdots, \lambda_n) \cdot O^T,\quad \lambda_i > 0\ (1 \leq i \leq n).
> $$
>
> 利用正交变换 $y = x O$，椭球 $E_A$ 的体积与下面的标准椭球
>
> $$
> \{y \in \mathbb{R}^n \mid \lambda_1 y_1^2 + \cdots + \lambda_n y_n^2 = y \cdot \mathrm{diag}(\lambda_1, \lambda_2, \cdots, \lambda_n) \cdot y^T \leq 1\}
> $$
>
> 体积相同，根据前面的例子即知它的体积为
>
> $$
> v(E_A) = \omega_n (\lambda_1)^{-\frac{1}{2}} \cdots (\lambda_n)^{-\frac{1}{2}} = \omega_n (\det A)^{-\frac{1}{2}}.
> $$
>
> ---
>
> 一般地，如果 $P$ 为正定对称矩阵，作为线性变换，它把可求体积的集合 $\Omega$ 映为可求体积的集合 $P(\Omega)$，且
>
> $$
> v(P(\Omega)) = (\det P) v(\Omega),
> $$
>
> 这个等式的证明和上例类似，结合正交变换以及伸缩变换的结果即可. 

关于最一般的推广：

> [!important]
>
> **(4)** 一般的线性变换. 设 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$ 为线性映射，在 $\mathbb{R}^n$ 的标准基下可表示为 $n$ 阶方阵 $A$. 下面为了简单起见我们有时不区分 $\varphi$ 和 $A$. 设 $\Omega$ 为 $\mathbb{R}^n$ 中可求体积的有界集合，我们考虑集合 $A(\Omega)$. 
>
> 首先，如果 $\varphi$ 是退化的 ($\det A = 0$)，则 $A(\Omega)$ 含于 $\mathbb{R}^n$ 的某个超平面中，从而必为零体积集. 
>
> 因此下面假设 $\det A \neq 0$，此时 $A A^T$ 为正定对称方阵，从而可以对角化，且特征值均大于零，这说明 $A A^T$ 可以写为
> $$
> A A^T = P^2,
> $$
>
> 其中 $P$ 也是正定对称方阵，$\det P = |\det A|$. 记 $O = P^{-1} A$，则上式表明 $O$ 是正交矩阵，特别地，$A(\Omega) = P(O(\Omega))$ 可求体积，且
>
> $$
> v(A(\Omega)) = v(P(O(\Omega))) = (\det P) v(O(\Omega)) = (\det P) v(\Omega),
> $$
>
> 即
>
> $$
> v(A(\Omega)) = |\det A| v(\Omega).
> $$

下面我们可以尝试解决一些问题：

/example/

设 $\{v_i\}_{i=1}^n$ 为 $\mathbb{R}^n$ 中的向量，求平行多面体

$$
P(v_1, \cdots, v_n) = \left\{ \sum_{i=1}^n x_i v_i \in \mathbb{R}^n \mid 0 \leq x_i \leq 1,\ i = 1, 2, \cdots, n. \right\}
$$

的体积. 

> 记 $\mathbb{R}^n$ 的标准基为 $\{e_i\}_{i=1}^n$，考虑线性映射 $A: \mathbb{R}^n \to \mathbb{R}^n$，$A(e_i) = v_i$. 则显然有
>
> $$
> \begin{aligned}
> P(v_1, \cdots, v_n) &= \left\{ \sum_{i=1}^n x_i v_i \in \mathbb{R}^n \mid 0 \leq x_i \leq 1,\ i = 1, 2, \cdots, n. \right\} \\\\
> &= \left\{ A\left( \sum_{i=1}^n x_i e_i \right) \in \mathbb{R}^n \mid 0 \leq x_i \leq 1,\ i = 1, 2, \cdots, n. \right\} \\\\
> &= A(P(e_1, \cdots, e_n)).
> \end{aligned}
> $$
>
> 而 $P(e_1, \cdots, e_n) = [0,1]^n$，因此，
>
> $$
> v(P(v_1, \cdots, v_n)) = |\det A| v([0,1]^n) = |\det A|.
> $$
>
> 例如，当 $n = 2$，$v_1 = (a_1, b_1)$，$v_2 = (a_2, b_2)$ 时，
>
> $$
> v(P(v_1, v_2)) = |a_1 b_2 - a_2 b_1|,
> $$
>
> 这是平行四边形的面积公式. 

### · 一般的变量替换

现在我们考虑比仿射线性变换更一般的映射，看看可求体积的集合在这些映射下如何变化. 设 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$ 为 Lipschitz 映射，即存在常数 $L$，使得

$$
|\varphi(x) - \varphi(y)| \leq L \|x - y\|,\quad \forall\ x, y \in \mathbb{R}^n.
$$

我们有

**引理4**：

> 设 $\varphi$ 为如上的 Lipschitz 映射，$A \subset \mathbb{R}^n$ 为可求体积的集合. 如果 $\varphi(A)$ 可求体积，则
>
> $$
> v(\varphi(A)) \leq L^n \cdot v(A).
> $$
>
> 特别地，$\varphi$ 将零体积集映为零体积集. 

/proof/

> 根据覆盖引理2，任给 $\varepsilon > 0$，存在覆盖 $A$ 的 $n$ 维球体 $\{B^j\}$，使得
>
> $$
> \sum_j v(B^j) < v(A) + \varepsilon.
> $$
>
> 设 $B^j$ 以 $x_j$ 为中心，以 $r_j$ 为半径，则由
>
> $$
> |\varphi(x) - \varphi(x_j)| \leq L \|x - x_j\| \leq L r_j,\quad \forall\ x \in B^j
> $$
>
> 知，$\varphi(B^j)$ 包含在以 $\varphi(x_j)$ 为中心，以 $L r_j$ 为半径的 $n$ 维球中. 因为 $\varphi(A) \subset \bigcup_j \varphi(B^j)$，故有
>
> $$
> v(\varphi(A)) \leq \sum_j \omega_n (L r_j)^n = L^n \sum_j v(B^j) < L^n \cdot v(A) + L^n \varepsilon,
> $$
>
> 由 $\varepsilon$ 的任意性即知 $v(\varphi(A)) \leq L^n \cdot v(A)$. 特别地，从上式还可以看出，如果 $A$ 为零体积集，则 $\varphi(A)$ 也是零体积集. 

从证明可以看出，对于局部的 Lipschitz 映射也有类似的结果. 

连续可微的映射是一类自然的（局部）Lipschitz 映射. 为此，设 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$ 为连续可微映射，则 $\varphi$ 将零体积集映为零体积集. 

如果 $\varphi$ 在 $x_0$ 处非退化，则根据逆映射定理，$\varphi$ 在 $x_0$ 附近可逆，且逆映射也是连续可微的. 

特别地，$\varphi$ 将 $x_0$ 附近的内点映为内点，因此将 $x_0$ 附近的可求体积的集合映为可求体积的集合. 

我们来看体积在映射 $\varphi$ 的作用下如何变化. 记 $L(x) = \varphi(x_0) + J\varphi(x_0)(x - x_0)$ 为仿射线性变换，$\tilde{\varphi}(x) = \varphi(x) - L(x)$，则 $J(\tilde{\varphi})(x_0) = 0$. 根据连续可微性，任给 $\varepsilon > 0$，存在 $\delta > 0$，使得

$$
\|J(\tilde{\varphi})(x)\| \leq \varepsilon,\quad \forall\ x \in B_\delta(x_0).
$$

由拟微分中值定理，有

$$
\|\tilde{\varphi}(x) - \tilde{\varphi}(y)\| \leq \|J(\tilde{\varphi})(\xi)\| \cdot \|x - y\| \leq \varepsilon \|x - y\|,\quad \forall\ x, y \in B_\delta(x_0).
$$

我们可以假设 $\varphi$ 在 $B_\delta(x_0)$ 上可逆，其逆映射记为 $\varphi^{-1}$. 上式表明，

$$
\|\varphi \circ L^{-1}(x) - \varphi \circ L^{-1}(y)\| \leq (1 + \|L^{-1}\| \varepsilon) \|x - y\|,\quad \forall\ x, y \in L(B_\delta(x_0)),
$$

其中 $L^{-1}$ 是 $L$ 的逆映射. 同理也有

$$
\|L \circ \varphi^{-1}(x) - L \circ \varphi^{-1}(y)\| \leq \left(1 + \frac{\varepsilon}{\|L\| - \varepsilon}\right) \|x - y\|,\quad \forall\ x, y \in \varphi(B_\delta(x_0)).
$$

设 $A \subset B_\delta(x_0)$ 为可求体积的集合，则由引理4 得

$$
\begin{aligned}
v(\varphi(A)) &= v(\varphi \circ L^{-1}(L(A))) \leq (1 + \varepsilon \|L^{-1}\|)^n v(L(A)) \\\\
&= (1 + \varepsilon \|L^{-1}\|)^n |\det J\varphi(x_0)| v(A),
\end{aligned}
$$

同理，

$$
|\det J\varphi(x_0)| v(A) = v(L(A)) = v(L \circ \varphi^{-1}(\varphi(A))) \leq \left(1 + \frac{\varepsilon}{\|L\| - \varepsilon}\right)^n v(\varphi(A)),
$$

总之可以得到下面的估计（适当调整 $\varepsilon$）：

$$
\left| v(\varphi(A)) - |\det J\varphi(x_0)| \cdot v(A) \right| \leq \varepsilon \cdot v(A).
$$

由此得到 $v(A(\Omega)) = |\det A| v(\Omega).$ 的如下非线性推广：

**引理5**.

> 设 $\varphi: \Omega \to \mathbb{R}^n$ 为 $C^1$ 映射，如果 $\varphi$ 为单射，且 $J\varphi$ 非退化，则对可求体积的有界集合 $A$ ($\bar{A} \subset \Omega$)，$\varphi(A)$ 也是可求体积的，且
>
> $$
> v(\varphi(A)) = \int_A |\det J\varphi|.
> $$

**定理6**（重积分的变量替换）

> 设 $\varphi: \Omega \to \mathbb{R}^n$ 为 $C^1$ 单射，且 $J\varphi$ 非退化. 设 $A$ 为可求体积的有界集合，$\bar{A} \subset \Omega$，$f: \varphi(A) \to \mathbb{R}$ 为连续函数，则
>
> $$
> \int_{\varphi(A)} f = \int_A f \circ \varphi\, |\det J\varphi|.
> $$

/proof/

> 由题设以及逆映射定理知 $\varphi: \Omega \to \varphi(\Omega)$ 为可逆的连续可微映射，其逆映射也是连续可微的. 因此 $\partial\varphi(A) \subset \varphi(\partial A)$，因为 $\partial A \subset \Omega$ 是零体积集，故 $\varphi(\partial A)$ 也是零体积集，从而 $\varphi(A)$ 是可求体积的有界集合. 
>
> 根据覆盖引理，为了简单起见，不妨设 $A$ 是一个矩形. 任给 $A$ 的分割 $\pi = \{A_{ij}\}$，由引理 13.4.5 以及积分中值定理，有
>
> $$
> \begin{aligned}
> \int_A f \circ \varphi\, |\det J\varphi| &= \sum_{ij} \int_{A_{ij}} f \circ \varphi\, |\det J\varphi| \\\\
> &= \sum_{ij} f \circ \varphi(\xi_{ij}) \int_{A_{ij}} |\det J\varphi| \\\\
> &= \sum_{ij} f \circ \varphi(\xi_{ij}) v(\varphi(A_{ij})) \\\\
> &= \int_{\varphi(A)} f + \sum_{ij} \int_{\varphi(A_{ij})} [f(\varphi(\xi_{ij})) - f].
> \end{aligned}
> $$
>
> 根据 $f$ 在 $\varphi(A)$ 上的（一致）连续性，当 $\|\pi\| \to 0$ 时上式最后一项趋于零，从而得证. 
>
> **注意.** 当 $f$ 在 $\varphi(A)$ 上 Riemann 可积时定理也成立，读者可与一元函数积分的变量替换公式相比较. 

### · 极坐标变换

我们知道，在平面 $\mathbb{R}^2$ 上有直角坐标 $(x, y)$ 和极坐标 $(r, \theta)$，其变换关系为

$$
x = r\cos\theta,\quad y = r\sin\theta,\quad r \geq 0,\quad 0 \leq \theta \leq 2\pi.
$$

这个变换称为极坐标变换，其 Jacobi 行列式为

$$
\frac{\partial(x, y)}{\partial(r, \theta)} = 
\begin{vmatrix}
\cos\theta & -r\sin\theta \\
\sin\theta & r\cos\theta
\end{vmatrix}
= r.
$$

这个变换将 $(r, \theta)$ 平面上的矩形 $[0, R] \times [0, 2\pi]$ 变为 $(x, y)$ 平面上的圆 $x^2 + y^2 \leq R^2$. 不过，这个变换不是一一的，且在 $r = 0$ 处退化. 

尽管如此，由于此变换在 $(0, +\infty) \times (0, 2\pi)$ 上是一一的且不退化，因此将定理6的证明略作改动即可知，积分的变量替换公式对这个变换仍然成立. 

与极坐标变换类似，$\mathbb{R}^3$ 中也有所谓的球面坐标变换：

$$
x = r\sin\theta\cos\varphi,\quad y = r\sin\theta\sin\varphi,\quad z = r\cos\theta,\quad r \geq 0,\ \theta \in [0, \pi],\ \varphi \in [0, 2\pi].
$$

这个变换的 Jacobi 行列式为

$$
\frac{\partial(x, y, z)}{\partial(r, \theta, \varphi)} = 
\begin{vmatrix}
\sin\theta\cos\varphi & r\cos\theta\cos\varphi & -r\sin\theta\cos\varphi \\
\sin\theta\sin\varphi & r\cos\theta\sin\varphi & r\sin\theta\cos\varphi \\
\cos\theta & -r\sin\theta & 0
\end{vmatrix}
= r^2\sin\theta.
$$

球面坐标和伸缩变换结合起来称为广义球面坐标变换. 

## Part 3 重积分的应用和推广

### · 广义积分

我们在前面几节所考虑的重积分有两个局限：一是积分区域要是可求体积（面积）的有界集合，二是被积函数要是有界的. 

先考虑无界区域上的积分. 假设 $A$ 是 $\mathbb{R}^n$ 中的（无界）集合，如果对于每个矩形 $[-k, k]^n$ ($k \geq 1$)，$A \cap [-k, k]^n$ 都是可求体积的，且极限 $\lim_{k \to +\infty} v(A \cap [-k, k]^n)$ 存在（有限），则称 $A$ 是广义可求体积的，其体积定义为

$$
v(A) = \lim_{k \to +\infty} v(A \cap [-k, k]^n).
$$

如果 $A$ 本身就是可求体积的有界集合，则它也是广义可求体积的，体积的定义和前面并无矛盾. 

注意到 $v(A \cap [-k, k]^n)$ 关于 $k$ 是单调递增的，因此有

**命题1.**

>  $A$ 广义可求体积当且仅当 $A \cap [-k, k]^n$ 可求体积且它们的体积有上界. 
>
> 我们再注意到，如果将定义中的矩形 $[-k, k]^n$ 换成半径为 $k$ 的球体 $B_k(0)$，则结论不变. 事实上，由等式
>
> $$
> A \cap B_k(0) = (A \cap [-k, k]^n) \cap B_k(0)
> $$
>
> 以及可求体积的有界集合之交仍可求体积知，如果 $A \cap [-k, k]^n$ 都是可求体积的，则 $A \cap B_k(0)$ 也都是可求体积的，再根据
>
> $$
> A \cap \left[\frac{k}{\sqrt{n}}, \frac{k}{\sqrt{n}}\right]^n \subset A \cap B_k(0) \subset A \cap [-k, k]^n
> $$
>
> 以及数列极限的夹逼原理知
>
> $$
> \lim_{k \to +\infty} v(A \cap B_k(0)) = \lim_{k \to +\infty} v(A \cap [-k, k]^n).
> $$
>
> 反之，如果 $A \cap B_k(0)$ 都是可求体积的，则 $A \cap [-k, k]^n$ 也都是可求体积的，且二者极限相等. 
>
> 我们可以将矩形或半径越来越大的球体推广为更一般的可求体积区域. 

**定义1（穷竭）** 

> 设 $\{\Omega_i\}$ 为 $\mathbb{R}^n$ 中一列可求体积的有界开区域，满足条件
>
> (1) $\bar{\Omega}_i \subset \Omega_{i+1},\ \forall i \geq 1$；
>
> (2) $\bigcup_{i \geq 1} \Omega_i = \mathbb{R}^n$,
>
> 则称 $\{\Omega_i\}$ 为 $\mathbb{R}^n$ 的一个穷竭. 
>
> 开矩形 $\{(-k, k)^n\}$ 和开球体 $\{B_k(0)\}$ 都是 $\mathbb{R}^n$ 的穷竭. 在具体的积分计算中，往往可以适当地选取穷竭以简化计算，见后面的例子. 在穷竭的定义中当然也可以考虑一般的有界区域，此时要求 $\bar{\Omega}_i$ 含于 $\Omega_{i+1}$ 的内点集中. 

现在下面的命题就比较明显了. 

**命题2.**

> 设 $\{\Omega_i\}$ 为 $\mathbb{R}^n$ 的一个穷竭，则 $A$ 广义可求体积当且仅当 $\{A \cap \Omega_i\}$ 是一列体积有上界的可求体积集，且
>
> $$
> v(A) = \lim_{i \to \infty} v(A \cap \Omega_i).
> $$
>
> 类似地，我们可以把重积分的定义推广到无界集合上. 设 $f: A \to \mathbb{R}$ 是集合 $A \subset \mathbb{R}^n$ 上定义的非负函数. 如果对每一个矩形 $[-k, k]^n$，$A \cap [-k, k]^n$ 都是可求体积的，$f$ 在 $A \cap [-k, k]^n$ 上可积，且极限
>
> $$
> \lim_{k \to +\infty} \int_{A \cap [-k, k]^n} f
> $$
>
> 存在（有限），则称 $f$ 在 $A$ 上广义可积或广义积分收敛，其（广义）积分记为
>
> $$
> \int_A f = \lim_{k \to +\infty} \int_{A \cap [-k, k]^n} f.
> $$
>
> 注意，此时 $A$ 不一定是广义可求体积的（体积可能为无穷）. 如果上式右边的极限为 $+\infty$，则称 $f$ 的广义积分在 $A$ 上发散. 下面的命题也是可以立即得到的. 

**命题3.** 

> 设 $f: A \to \mathbb{R}$ 为非负函数，则
>
> (1) $f$ 在 $A$ 上广义可积当且仅当积分 $\int_{A \cap [-k, k]^n} f$ 关于 $k$ 有上界；  
> (2) 设 $\{\Omega_i\}$ 为 $\mathbb{R}^n$ 的一个穷竭，则 $f$ 在 $A$ 上广义可积当且仅当 $f$ 在 $A \cap \Omega_i$ 上可积，且积分有上界，此时
>
> $$
> \int_A f = \lim_{i \to \infty} \int_{A \cap \Omega_i} f.
> $$
>
> 对于一般的函数 $f: A \to \mathbb{R}$，记
>
> $$
> f^+ = \max\{f, 0\},\quad f^- = \max\{-f, 0\},
> $$
>
> 则 $f = f^+ - f^-$. $f^+, f^-$ 都是非负函数，当 $f^+, f^-$ 在 $A$ 上广义可积时，我们称 $f$ 在 $A$ 上广义可积，积分定义为
>
> $$
> \int_A f = \int_A f^+ - \int_A f^-.
> $$

注意到 $|f| = f^+ + f^-$，因此 $f$ 在 $A$ 上广义可积时，$|f|$ 在 $A$ 上也广义可积，这和一元函数的广义积分是不同的！之所以出现这种差别还是因为被积区域在一般维数时可能非常复杂（因此对被积函数的要求较高）. 

对于一般的函数广义积分敛散性，根据命题3，我们有如下比较判别法. 

**定理4.**

> 设 $g(x)$ 为 $A$ 上非负广义可积函数，$f$ 在每一个 $A \cap [-k, k]^n$ 上可积，且当 $\|x\|$ 充分大时，$|f(x)| \leq g(x)$，则 $f(x)$ 在 $A$ 上广义可积. 

显然，定理中的矩形 $[-k, k]^n$ 可以换成球体 $B_k(0)$. 记 $r = \|x\|$，考虑函数 $r^{-p}$ 在区域 $\{r_0 \leq r \leq R\}$ ($r_0 > 0$) 上的积分，利用球面坐标以及结论可得

$$
\int_{r_0 \leq r \leq R} r^{-p} = \int_{r_0}^R r^{n-1-p} (n\omega_n) dr = \frac{1}{n - p}(R^{n-p} - r_0^{n-p})(n\omega_n),
$$

因此当 $p > n$ 时，$r^{-p}$ 在 $\{r \geq r_0\}$ 上广义可积. 根据比较定理，可得

**推论5.** 

> 设 $f$ 在每一个 $A \cap B_k(0)$ 上可积. 如果 $p > n$ 为常数，且当 $\|x\|$ 充分大时，成立
> $$
> |f(x)| \leq \|x\|^{-p},
> $$
>
> 则 $f$ 在 $A$ 上广义可积. 

下面研究无界函数的积分. 设 $A$ 为 $\mathbb{R}^n$ 中可求体积的有界集合，$p \in A$. 给定非负函数 $f: A - p \to \mathbb{R}$，如果对于任意 $\varepsilon > 0$，$f$ 在 $A - B_\varepsilon(p)$ 上可积，且极限

$$
\lim_{\varepsilon \to 0^+} \int_{A - B_\varepsilon(p)} f
$$

存在（有限），则称 $f$ 在 $A$ 上的瑕积分收敛，记为

$$
\int_A f = \lim_{\varepsilon \to 0^+} \int_{A - B_\varepsilon(p)} f,
$$

否则就称瑕积分发散. 当 $f$ 在整个 $A$ 上可积时，$f$ 在 $A$ 上的瑕积分收敛且两个积分相等. 

如果 $f$ 是一般的函数，则考虑 $f^+$ 和 $f^-$，当 $f^+$ 和 $f^-$ 在 $A$ 上的瑕积分都收敛时，称 $f$ 在 $A$ 上的瑕积分收敛，且定义

$$
\int_A f = \int_A f^+ - \int_A f^-.
$$

如同广义积分的讨论那样，瑕积分定义中的球体 $B_\varepsilon(p)$ 可以换成包含 $p$ 的其它可求体积的区域，例如直径趋于零的矩形. 下面的结果当然也成立. 

**命题6.** 

> 设 $f: A - p \to \mathbb{R}$ 为非负函数，如果 $f$ 在 $A - B_\varepsilon(p)$ 上均可积，且积分
>
> $$
> \int_{A - B_\varepsilon(p)} f
> $$
>
> 关于 $\varepsilon$ 有界，则 $f$ 在 $A$ 上的瑕积分收敛；反之亦然. 

对于最一般的区域和最一般的函数，我们可能会碰到积分区域无界，且函数有很多瑕点的情形. Riemann 积分能够处理的情形仍然相当有限，在后续由 Lebesgue 积分来部分地弥补了这一不足. 

### · 物理应用

(1) 物体的质量. 

> 设 $A$ 为空间物体，其密度函数为 $\rho(x, y, z)$，则它的质量 $m$ 为
>
> $$
> m = \int_A \rho(x, y, z) dx dy dz.
> $$
>
> 类似地，如果物体是密度函数为 $\rho(x, y)$ 的平面薄板，则质量可以用二重积分来计算. 

(2) 物体的重心. 

> 仍设 $A$ 为空间物体，其密度函数为 $\rho(x, y, z)$，则它的质量中心 $(\bar{x}, \bar{y}, \bar{z})$ 坐标为
>
> $$
> \bar{x} = \frac{1}{m} \int_A x\rho(x, y, z),\quad \bar{y} = \frac{1}{m} \int_A y\rho(x, y, z),\quad \bar{z} = \frac{1}{m} \int_A z\rho(x, y, z).
> $$
>
> 

(3) 转动惯量. 

> 物体 $A$ 关于 $x$ 轴、$y$ 轴、$z$ 轴的转动惯量分别为
>
> $$
> I_x = \int_A (y^2 + z^2)\rho(x, y, z),\quad I_y = \int_A (x^2 + z^2)\rho(x, y, z),\quad I_z = \int_A (x^2 + y^2)\rho(x, y, z).
> $$
>
> 一般地，如果 $l$ 为空间直线，$(x, y, z)$ 到 $l$ 的距离记为 $r(x, y, z)$，则物体关于 $l$ 的转动惯量为
>
> $$
> I_l = \int_A r^2(x, y, z)\rho(x, y, z) dx dy dz.
> $$
>
> 

(4) 万有引力. 

> 设 $A$ 为如上空间物体，$B$ 为位于 $(x_0, y_0, z_0)$ 处质量为 $m_0$ 的质点，则由 Newton 万有引力定律，$A$ 对 $B$ 所产生的引力 $F$ 为
>
> $$
> \vec{F} = G m_0 \int_A \frac{\rho(x, y, z)}{r^3} \vec{r} dx dy dz,
> $$
>
> 其中，$G$ 为万有引力常数，
>
> $$
> \vec{r} = (x - x_0, y - y_0, z - z_0),\quad r = \|\vec{r}\| = \sqrt{(z - z_0)^2 + (y - y_0)^2 + (z - z_0)^2}.
> $$
