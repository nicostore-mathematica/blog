---
title: Chapter 16 多元函数微分
permalink: /integral/integral-16/
createTime: 2025/12/17 17:05:08
---

我们将研究多变量函数或映射的微分性质. 微分学的基本方法就是对函数或向量值的函数作线性化，用线性映射去作逼近. 大部分的内容和一元函数相应的内容平行，但有一些地方也有本质不同. 

## Part 1 映射的微分

回忆一下，对于一元函数而言，可微是指该函数可以被线性函数一阶逼近. 我们也可以利用线性化的思想来研究多元函数. 

设 $D \subset \mathbb{R}^n$ 为开集，向量值函数 $f: D \to \mathbb{R}^m$ 写成分量形式为

$$
f(x_1, \cdots, x_n) = (f_1(x_1, \cdots, x_n), \cdots, f_m(x_1, \cdots, x_n)),
$$

为方便起见，在下面的内容中欧氏空间里的向量有时以列向量来表示. 

### · 微分

**定义1 (微分)**. 

> 设 $f$ 如上，$x^0 = (x_1^0, \cdots, x_n^0) \in D$. 如果存在 $m \times n$ 阶的矩阵 $A = (a_{ij})_{m \times n}$，使得对于 $x^0$ 附近的点 $x$，有
>
> $$
> \|f(x) - [f(x^0) + A \cdot (x - x^0)]\| = o(\|x - x^0\|), \quad (x \to x^0)
> $$
>
> 则称 $f$ 在 $x^0$ 处可微，线性映射
>
> $$
> df(x^0): \mathbb{R}^n \to \mathbb{R}^m \\
> v \mapsto A \cdot v
> $$
>
> 称为 $f$ 在 $x^0$ 处的微分. 

**命题1** (可微 $\Rightarrow$ 可导). 如果 $f: D \to \mathbb{R}^m$ 在 $x^0$ 处可微，则其分量 $f_i$ ($1 \le i \le m$) 在 $x^0$ 处存在方向导数，并且
$$
A = \left( \frac{\partial f_i}{\partial x_j}(x^0) \right)_{m \times n}.
$$

> 从微分的定义可以看出，如果 $f$ 在 $x^0$ 处可微，则 $f$ 在 $x^0$ 处连续. 下面以 $m = 1$ 为例说明方向导数的存在性. 
>
> 为此，取单位向量 $u$，由定义，我们有
>
> $$
> \begin{aligned}
> f(x^0 + tu) - f(x^0) &= A \cdot (x^0 + tu - x^0) + o(\|x^0 + tu - x^0\|) \\\\
> &= tA \cdot u + o(|t|),
> \end{aligned}
> $$
>
> 这说明 $\dfrac{\partial f}{\partial u}(x^0) = A \cdot u$，即方向导数存在. 特别地，
>
> $$
> \frac{\partial f}{\partial x_i}(x^0) = A \cdot e_i, \quad A = \left( \frac{\partial f}{\partial x_1}(x^0), \cdots, \frac{\partial f}{\partial x_n}(x^0) \right).
> $$
>
> 这就证明了命题. 

如果 $f_i$ ($1 \le i \le m$) 的偏导数均存在，则记 $Jf = \left( \dfrac{\partial f_i}{\partial x_j} \right)_{m \times n}$，称为 $f$ 的 Jacobian 矩阵. 

当 $m = 1$ 时，又记 $Jf$ 为 $\nabla f$，称为 $f$ 的梯度. 

$Jf$ 在每一点的值构成一个映射 $Jf: D \to \mathbb{R}^{mn}$，这里我们将 $m \times n$ 阶矩阵视为 $\mathbb{R}^{mn}$ 中的点. 

**定理2 (可微的充分条件)**. 如果 $Jf$ 在 $D$ 中存在，且它作为映射在 $x^0$ 处连续，则 $f$ 在 $x^0$ 处可微. 

> 仍以 $m = 1$ 为例来证明. 由条件，$f'_{x_i}$ 在 $x^0$ 处连续，$i = 1, 2, \cdots, n$. 根据微分中值定理，有
>
> $$
> \begin{aligned}
> f(x) - f(x^0) &= \sum_{i=1}^n \left[ f(x_1^0, \cdots, x_{i-1}^0, x_i, x_{i+1}, \cdots, x_n) - f(x_1^0, \cdots, x_i^0, x_{i+1}, \cdots, x_n) \right] \\\\
> &= \sum_{i=1}^n f'_{x_i}(x_1^0, \cdots, x_{i-1}^0, x_i^0 + \theta_i(x_i - x_i^0), x_{i+1}, \cdots, x_n) \cdot (x_i - x_i^0) \\\\
> &= \sum_{i=1}^n f'_{x_i}(x^0) \cdot (x_i - x_i^0) + \sum_{i=1}^n \alpha_i \cdot (x_i - x_i^0),
> \end{aligned}
> $$
>
> 其中，当 $x_i \to x_i^0$ 时
>
> $$
> \alpha_i = f'_{x_i}(x_1^0, \cdots, x_{i-1}^0, x_i^0 + \theta_i(x_i - x_i^0), x_{i+1}, \cdots, x_n) - f'_{x_i}(x_1^0, \cdots, x_n^0) \to 0,
> $$
>
> 从而
>
> $$
> \begin{aligned}
> \left\| f(x) - \left[ f(x^0) + \sum_{i=1}^n f'_{x_i}(x^0) \cdot (x_i - x_i^0) \right] \right\| &\le \left( \sum_{i=1}^n \alpha_i^2 \right)^{\frac{1}{2}} \cdot \|x - x^0\| \\\\
> &= o(\|x - x^0\|),
> \end{aligned}
> $$
>
> 即 $f$ 在 $x^0$ 处可微. 

如果我们把 $m \times n$ 的矩阵视为 $\mathbb{R}^{mn}$ 中的点，则矩阵也可定义自然的范数. 即，如果 $A = (a_{ij})_{m \times n}$，则其范数定义为

$$
\|A\| = \left[ \sum_{j=1}^n \sum_{i=1}^m a_{ij}^2 \right]^{\frac{1}{2}}.
$$

由 Schwarz 不等式可得

$$
\|A \cdot v\| \le \|A\| \cdot \|v\|, \quad \forall v \in \mathbb{R}^n.
$$

### · 链式法则

**定理3 (复合求导)**. 设 $\Delta \subset \mathbb{R}^l$ 为开集，$D \subset \mathbb{R}^m$ 为开集，$g: \Delta \to D$ 及 $f: D \to \mathbb{R}^n$ 为映射. 如果 $g$ 在 $u^0 \in \Delta$ 处可微，$f$ 在 $x^0 = g(u^0)$ 处可微，则复合映射 $h = f \circ g: \Delta \to \mathbb{R}^n$ 在 $u^0$ 处可微，且
$$
Jh(u^0) = Jf(x^0) \cdot Jg(u^0).
$$

> 因为 $g$ 在 $u^0$ 处可微，故
>
> $$
> g(u) - g(u^0) = Jg(u^0) \cdot (u - u^0) + R_g(u, u^0), \tag{1}
> $$
>
> 其中 $R_g(u, u^0) = o(\|u - u^0\|)$. 同理，因为 $f$ 在 $x^0 = g(u^0)$ 处可微，故
>
> $$
> f(x) - f(x^0) = Jf(x^0) \cdot (x - x^0) + R_f(x, x^0), \tag{2}
> $$
>
> 其中 $R_f(x, x^0) = o(\|x - x^0\|)$. 
>
> 由 (1) 知，当 $u \to u^0$ 时，$g(u) \to g(u^0) = x^0$. 以 $x = g(u)$ 代入 (2)，得
>
> $$
> \begin{aligned}
> f \circ g(u) - f \circ g(u^0) &= Jf(x^0)(g(u) - g(u^0)) + R_f(g(u), g(u^0)) \\\\
> &= Jf(x^0) \cdot Jg(u^0) \cdot (u - u^0) + R_{f \circ g}(u, u^0),
> \end{aligned} \tag{3}
> $$
>
> 其中
>
> $$
> R_{f \circ g}(u, u^0) = Jf(x^0) \cdot R_g(u, u^0) + R_f(g(u), g(u^0)),
> $$
>
> 我们有如下估计
>
> $$
> \begin{aligned}
> \|R_{f \circ g}(u, u^0)\| &\le \|Jf(x^0) \cdot R_g(u, u^0)\| + \|R_f(g(u), g(u^0)\| \\\\
> &\le \|Jf(x^0)\| \cdot \|R_g(u, u^0)\| + o(\|g(u) - g(u^0)\|) \\\\
> &= o(\|u - u^0\|) + o(O(\|u - u^0\|)) = o(\|u - u^0\|).
> \end{aligned}
> $$
>
> 由 (3) 及微分的定义知 $f \circ g$ 在 $u^0$ 处可微，且 $J(f \circ g)(u^0) = Jf(x^0) \cdot Jg(u^0)$. 
>
> 如果将 $f$, $g$ 分别表示成分量形式
>
> $$
> \begin{aligned}
> y_i = f_i(x_1, \cdots, x_m), \quad i = 1, \cdots, n, \\\\
> x_j = g_j(u_1, \cdots, u_l), \quad j = 1, \cdots, m.
> \end{aligned}
> $$
>
> 则 $J(f \circ g)(u^0) = Jf(x^0) \cdot Jg(u^0)$ 写成矩阵的形式为
>
> $$
> \begin{pmatrix}
> \dfrac{\partial y_1}{\partial u_1}(u^0) & \cdots & \dfrac{\partial y_1}{\partial u_l}(u^0) \\
> \vdots & \ddots & \vdots \\
> \dfrac{\partial y_n}{\partial u_1}(u^0) & \cdots & \dfrac{\partial y_n}{\partial u_l}(u^0)
> \end{pmatrix}_{n \times l} \\
> = 
> \begin{pmatrix}
> \dfrac{\partial y_1}{\partial x_1}(x^0) & \cdots & \dfrac{\partial y_1}{\partial x_m}(x^0) \\
> \vdots & \ddots & \vdots \\
> \dfrac{\partial y_n}{\partial x_1}(x^0) & \cdots & \dfrac{\partial y_n}{\partial x_m}(x^0)
> \end{pmatrix}_{n \times m} \cdot
> \begin{pmatrix}
> \dfrac{\partial x_1}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_1}{\partial u_l}(u^0) \\
> \vdots & \ddots & \vdots \\
> \dfrac{\partial x_m}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_m}{\partial u_l}(u^0)
> \end{pmatrix}_{m \times l},
> $$
>
> 即
>
> $$
> \frac{\partial y_i}{\partial u_j}(u^0) = \sum_{s=1}^m \frac{\partial y_i}{\partial x_s}(g(u^0)) \cdot \frac{\partial x_s}{\partial u_j}(u^0).
> $$
>
> 这也就是所谓的链规则. 

设 $u = f(x, y)$ 可微，$x = r \cos \theta$, $y = r \sin \theta$，证明

$$
\left( \frac{\partial u}{\partial x} \right)^2 + \left( \frac{\partial u}{\partial y} \right)^2 = \left( \frac{\partial u}{\partial r} \right)^2 + \frac{1}{r^2} \left( \frac{\partial u}{\partial \theta} \right)^2.
$$

> 由链规则，
>
> $$
> \begin{aligned}
> \frac{\partial u}{\partial r} &= \frac{\partial u}{\partial x} \cdot \frac{\partial x}{\partial r} + \frac{\partial u}{\partial y} \cdot \frac{\partial y}{\partial r} = \frac{\partial u}{\partial x} \cos \theta + \frac{\partial u}{\partial y} \sin \theta \\\\
> \frac{\partial u}{\partial \theta} &= \frac{\partial u}{\partial x} \cdot \frac{\partial x}{\partial \theta} + \frac{\partial u}{\partial y} \cdot \frac{\partial y}{\partial \theta} = -r \frac{\partial u}{\partial x} \sin \theta + r \frac{\partial u}{\partial y} \cos \theta
> \end{aligned}
> $$
>
> 这说明
>
> $$
> \begin{aligned}
> \left( \frac{\partial u}{\partial r} \right)^2 + \frac{1}{r^2} \left( \frac{\partial u}{\partial \theta} \right)^2 &= \left( \frac{\partial u}{\partial x} \cos \theta + \frac{\partial u}{\partial y} \sin \theta \right)^2 + \left( -\frac{\partial u}{\partial x} \sin \theta + \frac{\partial u}{\partial y} \cos \theta \right)^2 \\\\
> &= \left( \frac{\partial u}{\partial x} \right)^2 + \left( \frac{\partial u}{\partial y} \right)^2.
> \end{aligned}
> $$

设 $z = f(u, v, w)$, $v = \varphi(u, s)$, $s = \psi(u, w)$，求 $\dfrac{\partial z}{\partial u}$, $\dfrac{\partial z}{\partial w}$. 

> 按照定义，
>
> $$
> z = f(u, v, w) = f(u, \varphi(u, s), w) = f(u, \varphi(u, \psi(u, w)), w).
> $$
>
> 由链规则，
>
> $$
> \begin{aligned}
> \frac{\partial z}{\partial u} &= \frac{\partial f}{\partial u} + \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial u} = \frac{\partial f}{\partial u} + \frac{\partial f}{\partial v} \cdot \left( \frac{\partial \varphi}{\partial u} + \frac{\partial \varphi}{\partial s} \cdot \frac{\partial s}{\partial u} \right) \\\\
> &= \frac{\partial f}{\partial u} + \frac{\partial f}{\partial v} \cdot \frac{\partial \varphi}{\partial u} + \frac{\partial f}{\partial v} \cdot \frac{\partial \varphi}{\partial s} \cdot \frac{\partial \psi}{\partial u} \\\\
> \frac{\partial z}{\partial w} &= \frac{\partial f}{\partial w} + \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial w} = \frac{\partial f}{\partial w} + \frac{\partial f}{\partial v} \left( \frac{\partial \varphi}{\partial s} \cdot \frac{\partial s}{\partial w} \right) \\\\
> &= \frac{\partial f}{\partial w} + \frac{\partial f}{\partial v} \cdot \frac{\partial \varphi}{\partial s} \cdot \frac{\partial \psi}{\partial w}.
> \end{aligned}
> $$

### · 形式微分

最后，我们简单地介绍全微分（形式微分）的概念. 设 $f: D \to \mathbb{R}$ 为可微的多元函数，由定义，$f$ 在 $x$ 处的微分 $df(x)$ 是一个线性映射
$$
\begin{aligned}
&df(x): \mathbb{R}^m \to \mathbb{R} \\\\
&v \mapsto \sum_{i=1}^m \frac{\partial f}{\partial x_i} \cdot v_i.
\end{aligned}
$$

我们将映射 $x \mapsto df(x)$ 称为 $f$ 的全微分，记为 $df$. 由于

$$
d(\lambda f + \mu g)(x) = \lambda df(x) + \mu dg(x), \quad \forall \lambda, \mu \in \mathbb{R},
$$

因此，全微分之间也可以定义加法和数乘运算，在这个意义下，有

$$
df = \sum_{i=1}^n \frac{\partial f}{\partial x_i} \cdot dx^i \quad (*)
$$

$$
\begin{aligned}
&d(\lambda f + \mu g) = \lambda df + \mu dg, \\\\
&d(f \cdot g) = f dg + g df, \\\\
&d\left( \frac{f}{g} \right) = \frac{g df - f dg}{g^2} \quad (g \ne 0).
\end{aligned}
$$

如果将 (*) 写成矩阵形式：

$$
df = Jf \cdot (dx_1, \cdots, dx_n)^T,
$$

则复合映射的链规则可写为

$$
\begin{aligned}
d(f \circ g) &= J(f \circ g) \cdot (du_1, \cdots, du_m)^T \\\\
&= Jf(x) \cdot Jg(u)(du_1, \cdots, du_m)^T \quad (x = g(u)) \\\\
&= Jf(g(u)) \cdot (dg_1, \cdots, dg_n)^T.
\end{aligned}
$$

这个等式称为全微分的形式不变性. 

## Part 2 中值定理

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

> 如果 $D$ 为凸域，则欲证结论从定理1立即得到. 一般地，任取 $D$ 中两点 $p, q$，设 $\tau: [0, 1] \to D$ 是连接 $p, q$ 的连续曲线. 令
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

## Part 3 逆映射

对于一元函数，如果它可微且导数处处非零，则该函数可逆且其逆仍可微. 这里，可微性和导数非零保证了函数在局部上与可逆线性函数有好的逼近，因而也是（局部）可逆的. 下面我们考虑多元向量值函数类似的问题. 

**可逆线性映射**：

> 由线性代数，线性映射 $A: \mathbb{R}^n \to \mathbb{R}^n$ 可逆当且仅当 $\det A \ne 0$，即 $A$ 为单射. 我们有如下观察：如果 $B: \mathbb{R}^n \to \mathbb{R}^n$ 为线性映射，$\|B\| < 1$，则 $I_n - B$ 可逆. 
>
> 事实上，设 $(I_n - B)v = 0$，则
>
> $$
> \|v\| = \|I_n v\| = \|Bv\| \le \|B\| \cdot \|v\|,
> $$
>
> 这说明 $v = 0$. 
>
> 这个例子意味着，恒同映射这样一个可逆映射作一个小的扰动以后仍然为可逆映射. 一般地，任何可逆线性映射在微扰下仍为可逆映射. 因为可微映射在局部上可以看成是其微分的小扰动，当微分可逆时，该映射在局部上也应该是可逆的. 

### · 逆映射定理

**定理1 (逆映射定理)**. 设 $W$ 为 $\mathbb{R}^n$ 中开集，$f: W \to \mathbb{R}^n$ 为 $C^k(k \ge 1)$ 映射，$x^0 \in W$. 如果 $\det Jf(x^0) \ne 0$，则存在 $x^0$ 的开邻域 $U \subset W$ 以及 $y^0 = f(x^0)$ 的开邻域 $V \subset \mathbb{R}^n$，使得 $f|_U: U \to V$ 是可逆映射，且其逆仍为 $C^k$ 映射. 

> 不失一般性，可设 $x^0 = 0$，$y^0 = f(x^0) = 0$. 以 $A$ 记 $f$ 在 $x^0 = 0$ 处的微分，则 $A$ 可逆，且 $f \circ A^{-1}$ 在 $0$ 处微分为恒同映射. 如果欲证的结论对 $f \circ A^{-1}$ 成立，则对 $f$ 也成立. 因此，不妨从一开始就假设 $Jf(x^0) = I_n$. 
>
> 在 $x^0$ 附近，$f$ 是恒同映射的扰动，扰动项可定义为映射
>
> $$
> \begin{aligned}
> &g: W \to \mathbb{R}^n \\\\
> &x \mapsto f(x) - x,
> \end{aligned}
> $$
>
> 则 $g$ 为 $C^k$ 映射，且 $Jg(0) = 0$. 因此，存在 $\varepsilon_0 > 0$ 使得
>
> $$
> \|Jg(x)\| \le \frac{1}{2}, \quad \forall x \in \bar{B}_{\varepsilon_0}(0) \subset W.
> $$
>
> 由拟微分中值定理，
>
> $$
> \begin{aligned}
> \|g(x_1) - g(x_2)\| &\le \|Jg(\xi)\| \cdot \|x_1 - x_2\| \\\\
> &\le \frac{1}{2} \|x_1 - x_2\|, \quad \forall x_1, x_2 \in \bar{B}_{\varepsilon_0}(0).
> \end{aligned}
> $$
>
> 设 $y \in B_{\frac{\varepsilon_0}{2}}(0)$，我们来解方程
>
> $$
> f(x) = y, \quad x \in B_{\varepsilon_0}(0).
> $$
>
> 这等价于在 $B_{\varepsilon_0}(0)$ 中寻找 $g_y(x) = x + y - f(x) = y - g(x)$ 的不动点. 我们利用压缩映像原理来找这样的不动点. 首先，
>
> $$
> \begin{aligned}
> \|g_y(x)\| &= \|y - g(x)\| \le \|y\| + \|g(x)\| \\\\
> &< \frac{\varepsilon_0}{2} + \frac{1}{2} \|x\| \le \frac{\varepsilon_0}{2} + \frac{\varepsilon_0}{2} = \varepsilon_0, \quad \forall x \in \bar{B}_{\varepsilon_0}(0).
> \end{aligned}
> $$
>
> 其次，$g_y: \bar{B}_{\varepsilon_0}(0) \to B_{\varepsilon_0}(0) \subset \bar{B}_{\varepsilon_0}(0)$ 是压缩映射：
>
> $$
> \begin{aligned}
> \|g_y(x_1) - g_y(x_2)\| &= \|g(x_2) - g(x_1)\|\\\\
> &\le \frac{1}{2} \|x_1 - x_2\|, \quad \forall x_1, x_2 \in \bar{B}_{\varepsilon_0}(0).
> \end{aligned}
> $$
>
> 从而方程在 $\bar{B}_{\varepsilon_0}(0)$ 中有唯一解，记为 $x_y$. 
>
> 已经推出 $x_y \in B_{\varepsilon_0}(0)$. 记
> $$
> U = f^{-1}(B_{\frac{\varepsilon_0}{2}}(0)) \cap B_{\varepsilon_0}(0), \quad V = B_{\frac{\varepsilon_0}{2}}(0),
> $$
>
> 则我们已经证明了 $f|_U: U \to V$ 是一一映射，其逆映射 $h(y) = x_y$ 满足
>
> $$
> y - g(h(y)) = h(y).
> $$
>
> > (1) $h: V \to U$ 是连续映射：当 $y_1, y_2 \in V$ 时
> >
> > $$
> > \begin{aligned}
> > \|h(y_1) - h(y_2)\| \le \|y_1 - y_2\| + \|g(h(y_1)) - g(h(y_2))\| \\\\
> > \le \|y_1 - y_2\| + \frac{1}{2} \|h(y_1) - h(y_2)\|,
> > \end{aligned}
> > $$
> >
> > 这说明 $\|h(y_1) - h(y_2)\| \le 2\|y_1 - y_2\|$，$\forall y_1, y_2 \in V$. 
> >
> > (2) $h: V \to U$ 是可微映射：设 $y_0 \in V$，则对 $y \in V$，有
> >
> > $$
> > \begin{aligned}
> > h(y) - h(y_0) &= (y - y_0) - [g(h(y)) - g(h(y_0))] \\\\
> > &= (y - y_0) - Jg(h(y_0)) \cdot (h(y) - h(y_0)) + o(\|h(y) - h(y_0)\|),
> > \end{aligned}
> > $$
> >
> > 上式可改写为
> >
> > $$
> > [I_n + Jg(h(y_0))] \cdot (h(y) - h(y_0)) = (y - y_0) + o(\|y - y_0\|).
> > $$
> >
> > 因而
> >
> > $$
> > h(y) - h(y_0) = [I_n + Jg(h(y_0))]^{-1} \cdot (y - y_0) + o(\|y - y_0\|).
> > $$
> >
> > 即 $h$ 在 $y_0$ 处可微. 
> >
> > (3) $h: V \to U$ 为 $C^k$ 映射. 
> >
> > 由 (2) 的证明知
> >
> > $$
> > Jh(y) = [I_n + Jg(h(y))]^{-1} = [Jf(h(y))]^{-1}, \quad \forall y \in V.
> > $$
> >
> > 由 $f \in C^k$ 知 $Jf \in C^{k-1}$. 由 (2) 及上式可推出 $Jh \in C^0$，即 $h \in C^1$. 再由 $Jf \in C^{k-1}$，$h \in C^1$ 及上式可推出 $Jh \in C^1$ 即 $h \in C^2$. 依次类推，最后我们就得到 $h \in C^k$. 
>
> **注意**. 从证明可以看出，如果 $f: W \to \mathbb{R}^n$ 的 Jacobian 非退化，则 $f(W)$ 为开集. 

考虑 $f: \mathbb{R}^2 \to \mathbb{R}^2$，$f(x, y) = (e^x \cos y, e^x \sin y)$. 显然，$f$ 不是单射，但

$$
\det Jf(x, y) = \det 
\begin{pmatrix}
e^x \cos y & -e^x \sin y \\
e^x \sin y & e^x \cos y
\end{pmatrix}
= e^{2x} \ne 0.
$$

这说明定理1的结论只能局部地成立，这跟一元函数的情形不同

考虑 $f: \mathbb{R}^2 \to \mathbb{R}^2$，$f(x, y) = (x^3, y^3)$，则 $f$ 为光滑单射，也是满射，但 $Jf(0, 0) = 0$，$f$ 的逆映射不可微. 这说明 Jacobian 非退化的条件不能去掉. 

### · 隐函数定理

/example/设 $f: \mathbb{R}^2 \to \mathbb{R}$ 为 $C^k(k \ge 1)$ 映射，$f(x^0, y^0) = 0$，$\dfrac{\partial f}{\partial y}(x^0, y^0) \ne 0$，在 $(x^0, y^0)$ 附近解方程
$$
f(x, y) = 0.
$$

> 令 $F: \mathbb{R}^2 \to \mathbb{R}^2$，$F(x, y) = (x, f(x, y))$，则 $F(x^0, y^0) = (x^0, 0)$，且
>
> $$
> \det JF(x^0, y^0) = \det 
> \begin{pmatrix}
> 1 & 0 \\
> \dfrac{\partial f}{\partial x}(x^0, y^0) & \dfrac{\partial f}{\partial y}(x^0, y^0)
> \end{pmatrix}
> = \dfrac{\partial f}{\partial y}(x^0, y^0) \ne 0.
> $$
>
> 由逆映射定理，在 $(x^0, y^0)$ 附近，$F$ 为可逆映射. 于是当 $x$ 在 $x^0$ 附近时，$y^0$ 附近存在 $g(x)$，使得 $F(x, g(x)) = (x, 0)$，即 $f(x, g(x)) = 0$. 对 $x$ 求导得
>
> $$
> \dfrac{\partial f}{\partial x}(x, g(x)) + \dfrac{\partial f}{\partial y}(x, g(x)) \cdot g'(x) = 0,
> $$
>
> 从而
>
> $$
> g'(x) = -\dfrac{\dfrac{\partial f}{\partial x}(x, g(x))}{\dfrac{\partial f}{\partial y}(x, g(x))}.
> $$
>
> $y = g(x)$ 称为由 $f(x, y) = 0$ 决定的隐函数. 

上例可推广到一般维数，所得结果称为隐映射（隐函数）定理. 

**定理2 (隐映射定理)**. 设 $W$ 为 $\mathbb{R}^{n+m}$ 中开集，$W$ 中的点用 $(x, y)$ 表示，其中 $x = (x_1, \cdots, x_n)$，$y = (y_1, \cdots, y_m)$. $f: W \to \mathbb{R}^m$ 为 $C^k$ 映射，

$$
f(x, y) = (f_1(x, y), f_2(x, y), \cdots, f_m(x, y)).
$$

设 $(x^0, y^0) \in W$，$f(x^0, y^0) = 0$ 且 $\det Jf_y(x^0, y^0) \ne 0$，其中

$$
Jf_y(x, y) = \left( \dfrac{\partial f_i}{\partial y_j}(x, y) \right)_{m \times m}.
$$

则存在 $x^0$ 的开邻域 $V \subset \mathbb{R}^n$ 以及唯一的 $C^k$ 映射 $g: V \to \mathbb{R}^m$，使得

(1).
$$
y^0 = g(x^0),\quad f(x, g(x)) = 0,\quad \forall x \in V
$$
(2).
$$
Jg(x) = -[Jf_y(x, g(x))]^{-1} Jf_x(x, g(x))
$$
其中

$$
Jf_x(x, y) = \left( \dfrac{\partial f_i}{\partial x_j}(x, y) \right)_{\substack{1 \le i \le m \\ 1 \le j \le n}}.
$$

> /proof/
>
> 令 $F: W \to \mathbb{R}^{n+m}$ 为
> $$
> F(x, y) = (x, f(x, y)),
> $$
>
> 在 $(x^0, y^0)$ 处利用逆映射定理即可. 
>
> **注意**. $g(x)$ 称为由 $f(x, y) = 0$ 决定的隐映射. 

/example/ 设 $x^2 + 2y^2 + 3z^2 + xy - z - 9 = 0$，求 $x = 1$，$y = -2$，$z = 1$ 时 $\dfrac{\partial z}{\partial x}$，$\dfrac{\partial z}{\partial y}$，$\dfrac{\partial^2 z}{\partial x \partial y}$ 的值. 

> 令 $F(x, y, z) = x^2 + 2y^2 + 3z^2 + xy - z - 9$，则
> $$
> F(1, -2, 1) = 0, \quad F_z(1, -2, 1) = (6z - 1)|_{z=1} = 5 \ne 0,
> $$
>
> 故 $z$ 可局部地表示为 $x, y$ 的函数，记为 $z = z(x, y)$. 在 $(1, -2, 1)$ 处，有
>
> $$
> \begin{aligned}
> (z_x, z_y) &= -F_z^{-1} \cdot (F_x, F_y) \\\\
> &= -\frac{1}{5}(2x + y, 4y + x)|_{(x,y,z)=(1,-2,1)} = (0, \frac{7}{5}).
> \end{aligned}
> $$
>
> 又因为
>
> $$
> z_y = -F_z^{-1} \cdot F_y = -\frac{1}{6z - 1}(4y + x),
> $$
>
> 故
>
> $$
> \dfrac{\partial^2 z}{\partial x \partial y} = \frac{6}{(6z - 1)^2} \cdot z_x(4y + x) - \frac{1}{6z - 1},
> $$
>
> 从而
> $$
> \dfrac{\partial^2 z}{\partial x \partial y}(1, -2, 1) = -\frac{1}{5}.
> $$

平面上直角坐标 $(x, y)$ 和极坐标 $(r, \theta)$ 之间的转换公式为

$$
x = r \cos \theta, \quad y = r \sin \theta.
$$

求 $r$ 和 $\theta$ 关于 $x, y$ 的偏导数. 

> 由逆映射定理
>
> $$
> \begin{pmatrix}
> \dfrac{\partial r}{\partial x} & \dfrac{\partial r}{\partial y} \\\\
> \dfrac{\partial \theta}{\partial x} & \dfrac{\partial \theta}{\partial y}
> \end{pmatrix}
> =
> \begin{pmatrix}
> \dfrac{\partial x}{\partial r} & \dfrac{\partial x}{\partial \theta} \\\\
> \dfrac{\partial y}{\partial r} & \dfrac{\partial y}{\partial \theta}
> \end{pmatrix}^{-1}
> =
> \begin{pmatrix}
> \cos \theta & -r \sin \theta \\
> \sin \theta & r \cos \theta
> \end{pmatrix}^{-1}
> = \frac{1}{r}
> \begin{pmatrix}
> r \cos \theta & r \sin \theta \\
> -\sin \theta & \cos \theta
> \end{pmatrix},
> $$
>
> 从而有
>
> $$
> \dfrac{\partial r}{\partial x} = \cos \theta, \quad \dfrac{\partial r}{\partial y} = \sin \theta, \quad \dfrac{\partial \theta}{\partial x} = -\frac{\sin \theta}{r}, \quad \dfrac{\partial \theta}{\partial y} = \frac{\cos \theta}{r}.
> $$

**隐式曲面**：

> 设 $F: \mathbb{R}^3 \to \mathbb{R}$ 为 $C^k(k \ge 1)$ 的多元函数. 令
>
> $$
> S = \{(x, y, z) \in \mathbb{R}^3 \mid F(x, y, z) = 0\}.
> $$
>
> 如果对于任意 $(x, y, z) \in S$，$F'_x$，$F'_y$，$F'_z$ 均不全为 $0$，则称 $S$ 为由 $F$ 决定的隐式曲面. 
>
> 设 $m_0 = (x_0, y_0, z_0) \in S$，不妨设 $F'_z(x_0, y_0, z_0) \ne 0$. 则由定理2，在 $(x_0, y_0, z_0)$ 附近，$S$ 可用参数曲面 $z = z(x, y)$ 表示：
>
> $$
> F(x, y, z(x, y)) = 0.
> $$
>
> 在 $(x^0, y^0, z^0)$ 处曲面的法向量为
>
> $$
> \begin{aligned}
> \vec{n} &= (1, 0, z_x(x^0, y^0)) \times (0, 1, z_y(x^0, y^0)) \\\\
> &= (-z_x(x^0, y^0), -z_y(x^0, y^0), 1) \\\\
> &= \frac{1}{F'_z}(F'_x(x^0, y^0, z^0), F'_y(x^0, y^0, z^0), F'_z(x^0, y^0, z^0)).
> \end{aligned}
> $$
>
> $S$ 在 $(x^0, y^0, z^0)$ 处的切平面方程为
>
> $$
> F'_x \cdot (x - x_0) + F'_y \cdot (y - y_0) + F'_z(z - z_0) = 0.
> $$
>
> 在 $(x^0, y^0, z^0)$ 处的法线方程为
>
> $$
> \frac{x - x_0}{F'_x(x_0, y_0, z_0)} = \frac{y - y_0}{F'_y(x_0, y_0, z_0)} = \frac{z - z_0}{F'_z(x_0, y_0, z_0)}.
> $$

**隐式曲线**：

> 设 $F: \mathbb{R}^3 \to \mathbb{R}$，$G: \mathbb{R}^3 \to \mathbb{R}$ 为 $C^k(k \ge 1)$ 的映射，令
>
> $$
> l = \{(x, y, z) \in \mathbb{R}^3 \mid F(x, y, z) = G(x, y, z) = 0\},
> $$
>
> 如果对任意的 $(x, y, z) \in l$，
>
> $$
> \dfrac{\partial(F, G)}{\partial(y, z)}(x, y, z) = \det 
> \begin{pmatrix}
> F'_y & F'_z \\
> G'_y & G'_z
> \end{pmatrix}
> \ne 0,
> $$
>
> 则称 $l$ 为由 $F$, $G$ 决定的隐式曲线. 
>
> 设 $m_0 = (x_0, y_0, z_0) \in l$，由隐映射定理，在 $m_0$ 附近 $l$ 可由参数曲线
>
> $$
> y = y(x), \quad z = z(x)
> $$
>
> 表示，其中
>
> $$
> F(x, y(x), z(x)) = G(x, y(x), z(x)) = 0,
> $$
>
> 且
>
> $$
> \begin{pmatrix}
> y'(x) \\
> z'(x)
> \end{pmatrix}
> = -\begin{pmatrix}
> F'_y & F'_z \\
> G'_y & G'_z
> \end{pmatrix}^{-1} \cdot \begin{pmatrix}
> F'_x \\
> G'_x
> \end{pmatrix},
> $$
>
> 或写为
>
> $$
> \begin{cases}
> F'_x + F'_y \cdot y' + F'_z \cdot z' = 0, \\
> G'_x + G'_y \cdot y' + G'_z \cdot z' = 0.
> \end{cases}
> $$
>
> 这说明 $(1, y', z')$ 与 $(F'_x, F'_y, F'_z)$ 和 $(G'_x, G'_y, G'_z)$ 均正交. 因而 $m_0$ 处的切线方程为
>
> $$
> \frac{x - x_0}{\left|\begin{matrix} F'_y & F'_z \\ G'_y & G'_z \end{matrix}\right|} = \frac{y - y_0}{\left|\begin{matrix} F'_z & F'_x \\ G'_z & G'_x \end{matrix}\right|} = \frac{z - z_0}{\left|\begin{matrix} F'_x & F'_y \\ G'_x & G'_y \end{matrix}\right|},
> $$
>
> 法面方程为
>
> $$
> \left|\begin{matrix}
> x - x_0 & y - y_0 & z - z_0 \\
> F'_x & F'_y & F'_z \\
> G'_x & G'_y & G'_z
> \end{matrix}\right| = 0.
> $$

结束.
