---
title: Chapter 17 多元函数中值定理
permalink: /integral/integral-17/
createTime: 2025/12/17 23:08:15
---

## Part 1 中值定理

设 $p, q \in \mathbb{R}^n$，令

$$
\sigma(t) = (1 - t) \cdot p + t \cdot q, \quad \forall t \in [0, 1].
$$

我们称 $\sigma: [0, 1] \to \mathbb{R}^n$ 为 $\mathbb{R}^n$ 中连接 $p$, $q$ 的直线段. 设 $A$ 为 $\mathbb{R}^n$ 中的子集，如果任给 $a_1, a_2 \in A$，连接 $a_1, a_2$ 的直线段仍包含于 $A$，则称 $A$ 为凸集. 特别地，凸集都是道路连通的. 我们将开的凸集称为凸域. 

/example/  $\mathbb{R}^n$ 中的开球 $B_r(x)$ 都是凸集. 

### · 中值定理

我们知道，包括 Lagrange 定理、Cauchy 定理等在内的微分中值定理是研究一元函数的重要工具. 对于多元函数，也有部分类似结果. 例如，对于多元函数，我们有

**定理1 (微分中值定理)**. 设 $D$ 为 $\mathbb{R}^n$ 中凸域，$f: D \to \mathbb{R}$ 可微，则任给 $a, b \in D$，存在 $\xi \in D$，使得

$$
f(b) - f(a) = Jf(\xi) \cdot (b - a),
$$

其中 $\xi = a + \theta(b - a)$，$\theta \in (0, 1)$，即 $\xi$ 位于连接 $a, b$ 的直线段上. 

> 设 $\sigma: [0, 1] \to D$ 为连接 $a, b$ 的直线段，则复合函数 $\varphi(t) = f \circ \sigma(t)$ 是可微的一元函数. 由一元函数的微分中值定理，存在 $\theta \in (0, 1)$ 使得
>
> $$
> \varphi(1) - \varphi(0) = \varphi'(\theta) \cdot (1 - 0).
> $$
>
> 上式即 $f(b) - f(a) = Jf(\xi) \cdot (b - a)$，其中 $\xi = \sigma(\theta) = a + \theta(b - a)$. 

**推论2**. 设 $D$ 为 $\mathbb{R}^n$ 中区域（道路连通开集），$f: D \to \mathbb{R}$ 可微. 如果 $Jf \equiv 0$，则 $f$ 为常数. 

> 如果 $D$ 为凸域，则欲证结论从定理 12. 4. 1 立即得到. 一般地，任取 $D$ 中两点 $p, q$，设 $\tau: [0, 1] \to D$ 是连接 $p, q$ 的连续曲线. 令
>
> $$
> T = \sup\{t \mid \text{当 } 0 \le s \le t \text{ 时}, f \circ \tau(s) = f(p)\}.
> $$
>
> 因为 $D$ 为开集，故存在 $\varepsilon > 0$ 使得 $B_\varepsilon(p) \subset D$. 由 $\tau$ 的连续性知，存在 $\delta > 0$，使得 $\tau([0, \delta)) \subset B_\varepsilon(p)$. 由于 $B_\varepsilon(p)$ 为凸域，$f$ 在 $B_\varepsilon(p)$ 中为常值函数，故 $T \ge \delta > 0$. 
>
> 下面证明 $T = 1$（反证法）. 如果不然，则在 $\tau(T) \in D$ 处作和上面在 $\tau(0) = p$ 处一样的讨论知，存在 $\delta' > 0$ 使得
>
> $$
> [0, T + \delta') \subset \{s \in [0, 1] \mid f \circ \tau(s) = f(p)\}.
> $$
>
> 这和 $T$ 的定义相矛盾！从而 $T = 1$. 由连续性立知 $f(q) = f(\tau(1)) = f(\tau(T)) = f(p)$. 因为 $p, q$ 是任取的，故 $f$ 为常数. 

考虑向量值函数 $f: \mathbb{R} \to \mathbb{R}^2$，$f(t) = (t^2, t^3)$，则

$$
Jf(t) = 
\begin{pmatrix}
2t \\
3t^2
\end{pmatrix}.
$$

如果存在 $\theta \in (0, 1)$ 使得

$$
f(1) - f(0) = Jf(\theta) \cdot (1 - 0),
$$

则

$$
\begin{pmatrix}
1 \\
1
\end{pmatrix}
=
\begin{pmatrix}
2\theta \\
3\theta^2
\end{pmatrix}.
$$

但这个等式无解. 这就说明定理1对向量值函数不再成立. 

根据这个例子，微分中值定理不能直接推广到向量值函数. 但我们仍有下面的有用结果. 

**定理3 (拟微分中值定理)**. 设 $D$ 为 $\mathbb{R}^n$ 中凸域，$f: D \to \mathbb{R}^m$ 可微，则任给 $a, b \in D$，存在 $\xi \in D$ 使得
$$
\|f(b) - f(a)\| \le \|Jf(\xi)\| \cdot \|b - a\|,
$$

其中 $\xi = a + \theta(b - a)$，$\theta \in (0, 1)$. 

> 记 $\sigma: [0, 1] \to D$ 为连接 $a, b$ 的直线段. 考虑复合函数
>
> $$
> \varphi: [0, 1] \to \mathbb{R}, \quad \varphi(t) = \langle f(b) - f(a), f \circ \sigma(t) \rangle,
> $$
>
> 则 $\varphi$ 为一元可微函数，且 $\varphi'(t) = \langle f(b) - f(a), Jf(\sigma(t)) \cdot (b - a) \rangle$. 由一元函数的微分中值定理，存在 $\theta \in (0, 1)$ 使得
>
> $$
> \begin{aligned}
> |\varphi(1) - \varphi(0)| &= |\varphi(\theta)| \le \|f(b) - f(a)\| \cdot \|Jf(\sigma(\theta)) \cdot (b - a)\| \\\\
> &\le \|f(b) - f(a)\| \cdot \|Jf(\xi)\| \cdot \|b - a\|.
> \end{aligned}
> $$
>
> 因为
>
> $$
> \begin{aligned}
> |\varphi(1) - \varphi(0)| &= |\langle f(b) - f(a), f(b) - f(a) \rangle - \langle f(b) - f(a), f(a) \rangle| \\\\
> &= \|f(b) - f(a)\|^2,
> \end{aligned}
> $$
>
> 代入不等式就得到了定理的证明. 

**推论4**. 设 $D$ 为 $\mathbb{R}^n$ 中区域，$f: D \to \mathbb{R}^m$ 可微. 如果 $Jf \equiv 0$，则 $f$ 为常值映射. 

### · 泰勒公式

根据定义，如果一个多元函数可微，则它可以用线性函数逼近，利用这一点我们可以做近似计算. 

利用微分作近似计算只考虑了函数的线性部分而已，为了更好地求近似值，我们要考虑高阶逼近. 

跟一元函数一样，可以用多元多项式来逼近多元函数. 为此先引进一些记号. 设 $\alpha_i \in \mathbb{Z}^+$ ($1 \le i \le n$)，记 $\alpha = (\alpha_1, \cdots, \alpha_n)$，称为多重指标. 记
$$
|\alpha| = \sum_{i=1}^n \alpha_i, \quad \alpha! = \alpha_1! \cdot \alpha_2! \cdots \alpha_n!.
$$

如果 $x = (x_1, \cdots, x_n) \in \mathbb{R}^n$，则记

$$
x^\alpha = x_1^{\alpha_1} \cdot x_2^{\alpha_2} \cdots x_n^{\alpha_n}.
$$

对于多元函数 $f$，还用下面的记号表示 $|\alpha|$ 阶偏导数：

$$
D^\alpha f(x^0) = \frac{\partial^{|\alpha|} f}{\partial x_1^{\alpha_1} \cdots \partial x_n^{\alpha_n}}(x^0).
$$
**定理5 (Taylor 公式)**. 设 $D$ 为 $\mathbb{R}^n$ 中凸域，$f \in C^{m+1}(D)$（即 $f$ 具有 $m+1$ 阶连续偏导数），$a = (a_1, \cdots, a_n) \in D$. 则任给 $x \in D$，存在 $\theta \in (0, 1)$ 使得
$$
f(x) = \sum_{k=0}^m \sum_{|\alpha|=k} \frac{D^\alpha f(a)}{\alpha!} \cdot (x - a)^\alpha + \sum_{|\alpha|=m+1} \frac{D^\alpha f(a + \theta(x - a))}{\alpha!} \cdot (x - a)^\alpha.
$$

> 考虑一元函数 $\varphi(t) = f(a + t \cdot (x - a))$，$t \in [0, 1]$. $\varphi$ 具有 $m+1$ 阶连续导数，故由一元函数的 Taylor 公式，存在 $\theta \in (0, 1)$，使得
>
> $$
> (*) \quad \varphi(1) = \varphi(0) + \varphi'(0) + \frac{1}{2!}\varphi''(0) + \cdots + \frac{1}{m!}\varphi^{(m)}(0) + \frac{1}{(m+1)!}\varphi^{(m+1)}(\theta),
> $$
>
> 利用归纳法不难证明
>
> $$
> \varphi^{(k)}(t) = \sum_{|\alpha|=k} \frac{k!}{\alpha!} D^\alpha f(a + t(x - a)) \cdot (x - a)^\alpha.
> $$
>
> 特别地，$t = 0$ 时，有
>
> $$
> \varphi^{(k)}(0) = \sum_{|\alpha|=k} \frac{k!}{\alpha!} D^\alpha f(a) \cdot (x - a)^\alpha,
> $$
>
> 上式代入 $(*)$ 即得欲证公式. 

记

$$
R_m = f(x) - \sum_{k=0}^m \sum_{|\alpha|=k} \frac{D^\alpha f(a)}{\alpha!} \cdot (x - a)^\alpha.
$$

由 Taylor 公式，当 $f \in C^{m+1}(D)$ 时

$$
R_m = \sum_{|\alpha|=m+1} \frac{D^\alpha f(a + \theta(x - a))}{\alpha!} \cdot (x - a)^\alpha. \quad \text{(Lagrange remainder term)}
$$

**推论6**. 在定理的条件下，当 $\|x - a\|$ 充分小时，$R_m = O(\|x - a\|^{m+1})$. 

> 取 $\delta > 0$，使得 $\bar{B}_\delta(a) \subset D$. 由于 $f \in C^{m+1}(D)$，$\bar{B}_\delta(a)$ 紧致，故存在 $M > 0$ 使得
>
> $$
> |D^\alpha f(x)| \le M, \quad \forall x \in \bar{B}_\delta(a), \; |\alpha| \le m+1.
> $$
>
> 因此
>
> $$
> \begin{aligned}
> |R_m| &\le M \sum_{|\alpha|=m+1} \frac{1}{\alpha!} |x - a|^\alpha \\\\
> &\le M \sum_{|\alpha|=m+1} \frac{1}{\alpha!} \|x - a\|^{|\alpha|} = C \cdot \|x - a\|^{m+1}.
> \end{aligned}
> $$
>
> 推论得证. 

> [!important]
>
> **注意**. (1) 如果 $f \in C^m(D)$，则 Taylor 公式可写为
> $$
> \begin{aligned}
> f(x) &= \sum_{k=0}^{m-1} \sum_{|\alpha|=k} \frac{D^\alpha f(a)}{\alpha!} \cdot (x - a)^\alpha + \sum_{|\alpha|=m} \frac{D^\alpha f(a + \theta(x - a))}{\alpha!} \cdot (x - a)^\alpha \\\\
> &= \sum_{k=0}^m \sum_{|\alpha|=k} \frac{D^\alpha f(a)}{\alpha!} (x - a)^\alpha + R_m,
> \end{aligned}
> $$
>
> 其中
>
> $$
> R_m = \sum_{|\alpha|=m} \frac{1}{\alpha!} [D^\alpha f(a + \theta(x - a)) - D^\alpha f(a)] \cdot (x - a)^\alpha.
> $$
>
> 用推论的证明方法可得如下估计：
>
> $$
> R_m = o(\|x - a\|^m) \quad (x \to a). \quad \text{(Peano remainder term)}
> $$
>
> (2) 多元函数 Taylor 展开的前三项为
>
> $$
> f(x) = f(a) + Jf(a) \cdot (x - a) + \frac{1}{2} \sum_{i,j=1}^n \frac{\partial^2 f}{\partial x_i \partial x_j}(a) \cdot (x_i - a_i) \cdot (x_j - a_j) + \cdots
> $$
>
> 记
>
> $$
> \operatorname{Hess}(f) = \left[ \frac{\partial^2 f}{\partial x_i \partial x_j}(a) \right]_{n \times n},
> $$
>
> 称为 $f$ 在 $a$ 处的 Hessian. 
>
> (3) Taylor 展开式的系数由 $f$ 惟一确定. 

### · 凸函数

**定义 (凸函数)**. 

> 设 $D$ 为 $\mathbb{R}^n$ 中的凸域，$f: D \to \mathbb{R}$ 为多元函数. 如果任给 $x \ne y \in D$，均有
>
> $$
> f(tx + (1 - t)y) \le t f(x) + (1 - t) f(y), \quad \forall t \in (0, 1),
> $$
>
> 则称 $f$ 为 $D$ 上的凸函数. 上式中 “$\le$” 换成 “$<$” 时，称为严格凸函数. 

**定理7**. 

(1) 如果 $f$ 在凸域 $D$ 上有连续一阶偏导数，则 $f$ 为凸函数 $\iff$
$$
f(y) \ge f(x) + Jf(x) \cdot (y - x), \quad \forall x, y \in D.
$$

(2) 如果 $f$ 有连续二阶偏导数，则 $f$ 为凸函数 $\iff \operatorname{Hess}(f) \ge 0$（半正定）. 

> (1) “$\Rightarrow$” 任给 $x, y \in D$，$t \in (0, 1)$，有
>
> $$
> \begin{aligned}
> t(f(y) - f(x)) &\ge f(x + t(y - x)) - f(x) \\\\
> &= Jf(x) \cdot t(y - x) + o(t\|y - x\|),
> \end{aligned}
> $$
>
> 上式两边除以 $t$，然后令 $t \to 0^+$ 即得
>
> $$
> f(y) \ge f(x) + Jf(x) \cdot (y - x).
> $$
>
> “$\Leftarrow$” 任给 $x, y \in D$，$t \in [0, 1]$，记 $z = tx + (1 - t) \cdot y$，则
>
> $$
> \begin{aligned}
> f(x) &\ge f(z) + Jf(z) \cdot (x - z), \\\\
> f(y) &\ge f(z) + Jf(z) \cdot (y - z),
> \end{aligned}
> $$
>
> 这说明
>
> $$
> t f(x) + (1 - t) f(y) \ge f(z) + Jf(z) \cdot [t(x - z) + (1 - t)(y - z)] = f(z).
> $$
>
> (2) “$\Leftarrow$” 设 $f$ 有连续的二阶偏导数，且 $\operatorname{Hess}(f)$ 半正定，则由 Taylor 公式，任给 $x, y \in D$，存在 $\xi = x + \theta(y - x)$，$\theta \in (0, 1)$ 使得
>
> $$
> \begin{aligned}
> f(y) &= f(x) + Jf(x) \cdot (y - x) + \frac{1}{2}(y - x)^T \cdot \operatorname{Hess}(f)(\xi) \cdot (y - x) \\\\
> &\ge f(x) + Jf(x) \cdot (y - x).
> \end{aligned}
> $$
>
> 由 (1) 知 $f$ 为凸函数. 
>
> “$\Rightarrow$”（反证法）. 如果 $\operatorname{Hess}(f)$ 不是半正定的，则存在 $x \in D$，以及 $\mathbb{R}^n$ 中的非零向量 $h$，使得
>
> $$
> h^T \cdot \operatorname{Hess}(f)(x) \cdot h < 0.
> $$
>
> 由 Taylor 公式及其注记，当 $\varepsilon \to 0$ 时，有
>
> $$
> \begin{aligned}
> f(x + \varepsilon \cdot h) &= f(x) + \varepsilon \cdot Jf(x) \cdot h + \frac{1}{2} \varepsilon^2 \cdot h^T \cdot \operatorname{Hess}(f) \cdot h + o(\|\varepsilon h\|^2) \\\\
> &= f(x) + \varepsilon \cdot Jf(x) \cdot h + \varepsilon^2 \left[ \frac{1}{2} h^T \cdot \operatorname{Hess}(f)(x) \cdot h + o(1) \right].
> \end{aligned}
> $$
>
> 当 $\varepsilon \ne 0$ 充分小时，上式第三项 $< 0$. 此时
>
> $$
> f(x + \varepsilon h) < f(x) + Jf(x) \cdot \varepsilon h.
> $$
>
> 这与 $f$ 为凸函数相矛盾（用到 (1)）. 

/example/  设 $f: \mathbb{R}^n \to \mathbb{R}$ 为二阶连续可微函数，如果

$$
\operatorname{Hess}(f)(x) \ge I_n, \quad \forall x \in \mathbb{R}^n,
$$

其中 $I_n$ 为 $n$ 阶单位方阵，则 $f$ 有惟一最小值. 

> 根据 Taylor 公式，$f(x)$ 可在原点处展开为
>
> $$
> f(x) = f(0) + Jf(0) \cdot x + \frac{1}{2} x^T \cdot \operatorname{Hess}(f)(\xi) \cdot x.
> $$
>
> 由已知条件得
>
> $$
> f(x) \ge f(0) + Jf(0) \cdot x + \frac{1}{2} \|x\|^2, \quad \forall x \in \mathbb{R}^n.
> $$
>
> 特别地，当 $x \to \infty$ 时，$f(x) \to +\infty$，这说明 $f$ 的最小值存在. 最小值的唯一性由 $f$ 的严格凸性给出，留给读者思考（对照一元凸函数的情形）. 

