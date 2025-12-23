---
title: Chapter 17 多元函数极值
permalink: /integral/integral-17/
createTime: 2025/12/17 23:08:15
---

## Part 1 无条件极值

**定义1 (极值)**. 

> 设 $f: A \to \mathbb{R}$ 为多元函数，其中 $A$ 为 $\mathbb{R}^n$ 中的子集，$x^0 = (x_1^0, \cdots, x_n^0) \in A$. 如果存在 $\delta > 0$，使得
> $$
> f(x^0) \ge f(x) \quad (\text{或 } f(x^0) \le f(x)), \quad \forall\ x \in A \cap B_\delta(x^0) - \{x^0\},
> $$
>
> 则称 $x^0$ 为 $f$ 的极大（小）值点，$f(x^0)$ 为 $f$ 的极大（小）值. 当上式中 “$\ge$”（“$\le$”）换成 “$>$”（“$<$”）时，相应地把 $x^0$ 称为严格极值点，$f(x^0)$ 为严格极值. 

**命题1 (达到极值的必要条件)**. 

> 设 $x^0$ 为 $f$ 的极值点，如果 $x^0$ 为 $A$ 的内点，且 $f$ 在 $x^0$ 处存在一阶偏导数，则
> $$
> f'_{x_1}(x^0) = f'_{x_2}(x^0) = \cdots = f'_{x_n}(x^0) = 0.
> $$
>

/proof/

> 以 $f'_{x_1}$ 为例，考虑一元函数 $\varphi(x) = f(x, x_2^0, \cdots, x_n^0)$，则 $\varphi$ 可导，且以 $x_1^0$ 为极值点. 
>
> 由 Fermat 定理知 $\varphi'(x_1^0) = 0$，即 $f'_{x_1}(x^0) = 0$. 

**定理2**. 

> 设 $U$ 为 $\mathbb{R}^n$ 中开集，$f: U \to \mathbb{R}$ 具有二阶连续偏导数，$x^0$ 为 $f$ 的驻点. 则
>
> (1) 如果 $x^0$ 为 $f$ 的极小（大）值点，则 $\operatorname{Hess}(f)(x^0)$ 为半正（负）定方阵；
>
> (2) 如果 $\operatorname{Hess}(f)(x^0)$ 为正（负）定方阵，则 $x^0$ 为 $f$ 的严格极小（大）值点；
>
> (3) 如果 $\operatorname{Hess}(f)(x^0)$ 为不定方阵，则 $x^0$ 不是 $f$ 的极值点. 

/proof/

> 证明的思想是在 $x^0$ 附近利用 $f$ 的 Taylor 展开：
>
> $$
> \begin{aligned}
> f(x^0 + h) - f(x^0) &= Jf(x^0) \cdot h + \frac{1}{2} h^T \cdot \operatorname{Hess}(f)(x^0) \cdot h + o(\|h\|^2)\\\\
> &= \frac{1}{2} h^T \cdot \operatorname{Hess}(f)(x^0) \cdot h + o(\|h\|^2).
> \end{aligned}
> $$
>
> (1) 设 $x^0$ 为 $f$ 的极小值点，$v$ 为任意固定的单位向量，在上式中取 $h = t \cdot v$，$t \in \mathbb{R}$，则当 $|t|$ 充分小时，
>
> $$
> 0 \le f(x^0 + h) - f(x^0) = t^2 \left[ \frac{1}{2} \cdot v^T \cdot \operatorname{Hess}(f)(x^0) \cdot v + o(1) \right],
> $$
>
> 上式两边除以 $t^2$，然后令 $t \to 0$ 得
>
> $$
> 0 \le v^T \cdot \operatorname{Hess}(f)(x^0) \cdot v, \quad \forall\ v \in \mathbb{R}^n,\ \|v\| = 1.
> $$
>
> 这说明 $\operatorname{Hess}(f)(x^0)$ 为半正定方阵. $x^0$ 为极大值点时证明完全类似. 
>
> (2) 如果 $\operatorname{Hess}(f)(x^0)$ 正定，则
>
> $$
> \lambda_0 = \min_{\|v\|=1} v^T \cdot \operatorname{Hess}(f)(x^0) \cdot v > 0.
> $$
>
> 从而当 $\|h\|$ 充分小时
>
> $$
> \begin{aligned}
> f(x^0 + h) - f(x^0) &\ge \frac{1}{2} \|h\|^2 \cdot \lambda_0 + o(\|h\|^2)\\\\
> &= \|h\|^2 \left( \frac{1}{2} \lambda_0 + o(1) \right) \ge \frac{1}{4} \lambda_0 \cdot \|h\|^2,
> \end{aligned}
> $$
>
> 即 $x^0$ 为严格极小值点. $\operatorname{Hess}(f)(x^0)$ 负定的情形类似. 
>
> (3) 证明与 (1), (2) 类似

/example/  求 $f(x, y) = x^4 + y^4 - (x + y)^2$ 的极值. 

> 先求驻点：
>
> $$
> 0 = \frac{\partial f}{\partial x} = 4x^3 - 2x - 2y, \quad 0 = \frac{\partial f}{\partial y} = 4y^3 - 2x - 2y.
> $$
>
> 上式有三个解
>
> $$
> m_0 = (0, 0), \quad m_1 = (1, 1), \quad m_2 = (-1, -1).
> $$
>
> 为了判极大、极小值，再在驻点处求 Hessian：
>
> $$
> \operatorname{Hess}(f)(x, y) =
> \begin{pmatrix}
> \dfrac{\partial^2 f}{\partial x^2} & \dfrac{\partial^2 f}{\partial x \partial y} \\\\
> \dfrac{\partial^2 f}{\partial y \partial x} & \dfrac{\partial^2 f}{\partial y^2}
> \end{pmatrix}
> =
> \begin{pmatrix}
> 12x^2 - 2 & -2 \\
> -2 & 12y^2 - 2
> \end{pmatrix}.
> $$
>
> 在 $m_1, m_2$ 处，Hessian 正定，从而 $m_1, m_2$ 为极小值点，此时
>
> $$
> f(m_1) = f(m_2) = -2.
> $$
>
> 在 $m_0$ 处 $\operatorname{Hess}(f)$ 退化，用 $\operatorname{Hess}(f)$ 无法判别 $m^0$ 是否为极值点. 但对于 $0 < x < 1$，令 $y = x$，则
>
> $$
> f(x, y) = 2x^4 - 4x^2 < 0;
> $$
>
> 令 $y = -x$，则 $f(x, y) = 2x^4 > 0$，这说明 $m_0$ 不是极值点. 

**最小二乘法**：

> 设 $(x_1, y_1), \cdots, (x_n, y_n)$ 为平面 $\mathbb{R}^2$ 上 $n$ 个点，求一条直线 $y = ax + b$，使得
>
> $$
> F(a, b) = \sum_{i=1}^n (ax_i + b - y_i)^2
> $$
>
> 最小. 

/proof/

> 函数 $F(a, b)$ 是关于 $(a, b)$ 的光滑函数. 先求驻点：
>
> $$
> 0 = \frac{\partial F}{\partial a}(a, b) = 2 \sum_{i=1}^n (ax_i + b - y_i)x_i, \\
> 0 = \frac{\partial F}{\partial b}(a, b) = 2 \sum_{i=1}^n (ax_i + b - y_i),
> $$
>
> 当
>
> $$
> n \cdot \sum_{i=1}^n x_i^2 - \left( \sum_{i=1}^n x_i \right)^2 = \frac{1}{2} \sum_{i+j} (x_i - x_j)^2 \ne 0
> $$
>
> 时，上述二元一次方程组有唯一的解（驻点），在此驻点处，$F$ 的 Hessian 为
>
> $$
> 2
> \begin{pmatrix}
> \displaystyle\sum_{i=1}^n x_i^2 & \displaystyle\sum_{i=1}^n x_i \\\\
> \displaystyle\sum_{i=1}^n x_i & n
> \end{pmatrix},
> $$
>
> 它是正定方阵，故该驻点为极小值点. 由于当 $(a, b) \to \infty$ 时 $F(a, b) \to +\infty$，故该驻点为唯一的最小值点（见下面的引理）. 
>
> 为了写出直线方程，我们注意到，当 $(x, y)$ 在此直线上时，
>
> $$
> \begin{pmatrix}
> x & y & 1 \\\\
> \displaystyle\sum_{i=1}^n x_i & \displaystyle\sum_{i=1}^n y_i & n \\\\
> \displaystyle\sum_{i=1}^n x_i^2 & \displaystyle\sum_{i=1}^n x_i y_i & \displaystyle\sum_{i=1}^n x_i
> \end{pmatrix}
> \cdot (a, -1, b)^T = 0,
> $$
>
> 这说明
>
> $$
> \left|
> \begin{matrix}
> x & y & 1 \\\\
> \displaystyle\sum_{i=1}^n x_i & \displaystyle\sum_{i=1}^n y_i & n \\\\
> \displaystyle\sum_{i=1}^n x_i^2 & \displaystyle\sum_{i=1}^n x_i y_i & \displaystyle\sum_{i=1}^n x_i
> \end{matrix}
> \right| = 0,
> $$
>
> 这也就是所求直线方程. 

**引理3**.

>  设 $f: \mathbb{R}^n \to \mathbb{R}$ 为连续函数，则
>
> (1) 如果 $\displaystyle\lim_{\|x\| \to \infty} f(x) = -\infty$，则 $f$ 在 $\mathbb{R}^n$ 上达到最大值；
>
> (2) 如果 $\displaystyle\lim_{\|x\| \to \infty} f(x) = +\infty$，则 $f$ 在 $\mathbb{R}^n$ 上达到最小值. 

/proof/

> 以 (1) 为例，取 $x^0 \in \mathbb{R}^n$，由已知条件，存在 $R > 0$ 使得 $\|x\| \ge R$ 时，
> $$
> f(x) < f(x^0).
> $$
>
> 则 $f$ 在 $\bar{B}_R(0)$ 上的最大值即为 $f$ 为 $\mathbb{R}^n$ 上的最大值. 

## Part 2 条件极值

设 $U$ 为 $\mathbb{R}^n$ 中开集，$f: U \to \mathbb{R}$ 为 $U$ 上多元函数，$\Phi: U \to \mathbb{R}^m (m < n)$ 为 $C^1$ 映射，令

$$
A = \{x \in U \mid \Phi(x) = 0\},
$$

$f$ 在 $A$ 上的极值称为条件极值，方程 $\Phi(x) = 0$ 称为约束条件. 

### · Lagrange 乘数法

> 如果 $A$ 为 $\mathbb{R}^n$ 中的 $C^1$ 曲面，$x^0 \in A$ 为 $f$ 的条件极值点，则对于 $A$ 上经过 $x^0$ 的任何可微曲线 $\sigma(t)$ ($\sigma(0) = x^0$)，$t = 0$ 为 $f(\sigma(t))$ 的驻点，因此
>
> $$
> 0 = \left. \frac{d}{dt} \right|_{t=0} f(\sigma(t)) = Jf(x^0) \cdot \sigma'(0),
> $$
>
> 即 $f$ 在 $x^0$ 处的梯度 $Jf(x^0)$ 与 $A$ 在 $x^0$ 处的切向量 $\sigma'(0)$ 正交. 这说明此时 $Jf(x^0)$ 是 $A$ 在 $x^0$ 处的一个法向量. 
>
> 利用隐（函数）映射定理，我们可以更准确地将上述想法总结为下面的结果. 

**定理1 (Lagrange 乘数法)**. 

> 设 $f \in C^1(U)$，$x^0 \in A$ 为 $f$ 的条件极值点. 如果 $J\Phi(x^0)$ 的秩为 $m$，则存在 $\lambda \in \mathbb{R}^m$，使得
> $$
> Jf(x^0) - \lambda \cdot J\Phi(x^0) = 0. \tag{*}
> $$
>

/proof/

> 不妨设 $\Phi = (\varphi_1, \cdots, \varphi_m)$，且
>$$
> \det
> \begin{pmatrix}
> \dfrac{\partial \varphi_1}{\partial x_1} & \cdots & \dfrac{\partial \varphi_1}{\partial x_m} \\\\
> \vdots & \ddots & \vdots \\\\
> \dfrac{\partial \varphi_m}{\partial x_1} & \cdots & \dfrac{\partial \varphi_m}{\partial x_m}
> \end{pmatrix}
> (x^0) \ne 0.
> $$
> 
>由隐映射定理，存在点 $z^0 = (x_{m+1}^0, \cdots, x_n^0)$ 的开邻域 $V$ 以及 $C^1$ 映射 $g: V \to \mathbb{R}^m$ 使得
> 
>$$
> y^0 = g(z^0), \quad \Phi(g(z), z) = 0, \quad \forall\ z \in V,
> $$
> 
>其中 $y^0 = (x_1^0, \cdots, x_n^0)$，$y = (x_1, \cdots, x_m)$，$z = (x_{m+1}, \cdots, x_n)$，$x = (y, z) \in U$. 在 $x^0 = (y^0, z^0)$ 处求导，有
> 
>$$
> Jg(z^0) = -(J_y\Phi)^{-1}(x^0) \cdot J_z\Phi(x^0). \tag{1}
> $$
> 
>由于 $x^0$ 为 $f$ 的条件极值点，故 $z^0$ 为 $f(g(z), z)$ 的极值点（驻点），在 $z_0$ 处求导，得
> 
>$$
> J_yf(x^0) \cdot Jg(z^0) + J_zf(x^0) = 0. \tag{2}
> $$
> 
>将 (1) 式代入 (2)，得
> 
>$$
> J_zf(x^0) = J_yf(x^0) \cdot (J_y\Phi)^{-1}(x^0) \cdot J_z\Phi(x^0). \tag{3}
> $$
> 
>记 $\lambda = J_yf(x^0) \cdot (J_y\Phi)^{-1}(x^0)$，即
> 
>$$
> J_yf(x^0) = \lambda \cdot J_y\Phi(x^0). \tag{4}
> $$
> 
>(3) 式可用 $\lambda$ 改写为
> 
>$$
> J_zf(x^0) = \lambda \cdot J_z\Phi(x^0).
> $$
> 
>(4) 和 (5) 式结合起来就得到
> 
>$$
> Jf(x^0) - \lambda \cdot J\Phi(x^0) = 0.
> $$
> 
>这就证明了定理. 

> [!important]
>
> (1) 在定理的条件下，$A$ 在 $x^0$ 附近是 $n - m$ 维隐式曲面，它在 $x^0$ 处的法空间由 $J\varphi_1(x^0), \cdots, J\varphi_m(x^0)$ 张成，(*) 式就是说 $Jf(x^0)$ 是法向量. 
>
> (2) 在实际应用中，(*) 式通常解释为：如果 $x^0$ 为条件极值点，则 $(x^0, \lambda)$ 为辅助函数
>
> $$
> F(x, \lambda) = f(x) - \sum_{i=1}^m \lambda_i \cdot \varphi_i(x)
> $$
>
> 的驻点. 

/example/  求圆周 $(x - 1)^2 + y^2 = 1$ 上的点与固定点 $(0, 1)$ 的距离的最大值、最小值. 

> 在约束条件 $(x - 1)^2 + y^2 - 1 = 0$ 下求距离函数 $d = \sqrt{x^2 + (y - 1)^2}$ 的最大值和最小值. 考虑辅助函数
>
> $$
> F(x, y, \lambda) = x^2 + (y - 1)^2 - \lambda[(x - 1)^2 + y^2 - 1],
> $$
>
> 求其驻点：
>
> $$
> F'_x = F'_y = F'_\lambda = 0
> \iff
> \begin{cases}
> x - \lambda(x - 1) = 0 \\\\
> y - 1 - \lambda y = 0 \\\\
> (x - 1)^2 + y^2 - 1 = 0
> \end{cases}
> \implies
> \begin{cases}
> x = \dfrac{-\lambda}{1 - \lambda} \\\\
> y = \dfrac{1}{1 - \lambda} \\\\
> \lambda = 1 \pm \sqrt{2}
> \end{cases}
> $$
>
> 在驻点处
>
> $$
> d^2 = \lambda^2, \quad \Rightarrow d = |\lambda|,
> $$
>
> 由于 $d$ 在圆周上达到最大、最小值，故其最大值必为 $\sqrt{2} + 1$，最小值必为 $\sqrt{2} - 1$. 

/example/  设 $\alpha_i > 0$, $x_i > 0$, $i = 1, \cdots, n$. 证明

$$
x_1^{\alpha_1} \cdots x_n^{\alpha_n} \le \left( \frac{\alpha_1 x_1 + \cdots + \alpha_n x_n}{\alpha_1 + \cdots + \alpha_n} \right)^{\alpha_1 + \cdots + \alpha_n},
$$

等号成立当且仅当 $x_1 = x_2 = \cdots = x_n$. 

> 考虑函数
>
> $$
> f(x_1, \cdots, x_n) = \ln(x_1^{\alpha_1} \cdots x_n^{\alpha_n}) = \sum_{i=1}^n \alpha_i \ln x_i
> $$
>
> 在约束条件 $\displaystyle\sum_{i=1}^n \alpha_i x_i = c$ ($c > 0$) 下的条件极值. 令
>
> $$
> F(x, \lambda) = \sum_{i=1}^n \alpha_i \ln x_i - \lambda \left( \sum_{i=1}^n \alpha_i x_i - c \right),
> $$
>
> 求驻点：
>
> $$
> F'_{x_i} = F'_\lambda = 0
> \implies
> \frac{\alpha_i}{x_i} = \lambda \alpha_i, \quad \sum_{i=1}^n \alpha_i x_i - c = 0
> \implies
> x_i = \frac{c}{\sum_{i=1}^n \alpha_i}, \quad i = 1, \cdots, n.
> $$
>
> 因为在集合
>
> $$
> D: x_i \ge 0, \quad \sum_{i=1}^n \alpha_i x_i = c
> $$
>
> 的边界上，$f$ 取值为 $-\infty$，因此 $f$ 在 $D$ 的内部取到最大值，上述唯一驻点必为最大值点，从而
>
> $$
> \ln(x_1^{\alpha_1} \cdots x_n^{\alpha_n}) \le \sum_{i=1}^n \alpha_i \ln \frac{c}{\sum_{i=1}^n \alpha_i},
> $$
>
> 即
>
> $$
> x_1^{\alpha_1} \cdots x_n^{\alpha_n} \le \left( \frac{\alpha_1 x_1 + \cdots + \alpha_n x_n}{\alpha_1 + \cdots + \alpha_n} \right)^{\alpha_1 + \cdots + \alpha_n}.
> $$

### · 二次型与极值

在利用 $\operatorname{Hess}(f)$ 判别极值时，需要判别其正定或负定性. 我们下面给出判别一个对称方阵为正定阵的方法. 

> 设 $A$ 为 $n$ 阶对称实方阵，$A$ 可以视为线性映射 $A: \mathbb{R}^n \to \mathbb{R}^n$. 另一方面，$A$ 也诱导出函数 $Q: \mathbb{R}^n \to \mathbb{R}$，
>
> $$
> Q(x) = \langle x, Ax \rangle = \sum_{i,j=1}^n a_{ij}x_i x_j, \quad A = (a_{ij})_{n\times n}.
> $$
>
> 因为 $n-1$ 维球面
>
> $$
> S^{n-1} = \left\{ x \in \mathbb{R}^n \mid \sum_{i=1}^n x_i^2 = 1 \right\}
> $$
>
> 为有界闭集，故 $Q$ 在 $S^{n-1}$ 可以取到最小值和最大值. 

**引理1**.

> $Q(x)$ 在 $S^{n-1}$ 上的最小值必为线性映射 $A$ 的特征值. 

/proof/

> 记 $\lambda_0 = \min_{S^{n-1}} \{Q(x)\}$，则存在 $x^0 \in S^{n-1}$，使得
>$$
> \lambda_0 = Q(x^0).
> $$
> 
>因此有
> 
>$$
> Q(x) \ge \lambda_0 \cdot \|x\|^2, \quad \forall\ x \in \mathbb{R}^n.
> $$
> 
>特别地，对任意 $y \in \mathbb{R}^n$, $t \in \mathbb{R}$，有
> 
>$$
> \varphi(t) = Q(x^0 + ty) - \lambda_0 \|x^0 + ty\|^2 \ge 0.
> $$
> 
>$\varphi(t)$ 关于 $t$ 为光滑函数，$t = 0$ 时取到最小值 $0$，故 $\varphi'(0) = 0$，简单的计算表明
> 
>$$
> \langle y, Ax^0 \rangle + \langle x^0, Ay \rangle - \lambda_0 (\langle x^0, y \rangle + \langle y, x^0 \rangle) = 0.
> $$
> 
>由 $A$ 为对称方阵得
> 
>$$
> \langle y, Ax^0 - \lambda_0 x^0 \rangle = 0.
> $$
> 
>取 $y = Ax^0 - \lambda_0 x^0$，由内积的正定性，有
> 
>$$
> Ax^0 - \lambda_0 x^0 = 0.
> $$
> 
>即 $\lambda_0$ 为特征值. 

这个引理的证明可以推广如下：设 $V \subset \mathbb{R}^n$ 为子向量空间，如果 $AV \subset V$，则称 $V$ 为 $A$ 的一个不变子空间. 令

$$
\mu = \inf \{ Q(x) \mid x \in V,\ \|x\| = 1 \},
$$

则完全类似的证明可以推出 $\mu$ 为 $A$ 的特征值. 

如果 $V$ 为不变子空间，则其正交补

$$
V^\perp = \{ y \in \mathbb{R}^n \mid \langle y, x \rangle = 0,\ \forall\ x \in V \}
$$

也是 $A$ 的不变子空间；而如果 $\mu$ 为特征值，则特征子空间

$$
V(\mu) = \{ x \in \mathbb{R}^n \mid Ax = \mu x \}
$$

是不变子空间. 因此，如果重复上面的证明过程，我们就可以得到 $A$ 的所有特征值

$$
\lambda_0 \le \lambda_1 \le \cdots \le \lambda_r, \quad r \le n.
$$

其中

$$
\lambda_i = \min \{ Q(x) \mid x \perp V(\lambda_0) \oplus V(\lambda_1) \oplus \cdots \oplus V(\lambda_{i-1}),\ \|x\| = 1 \}, \quad i \ge 1.
$$

从而有

**引理2**. 

> 设 $A$ 为 $n$ 阶实对称方阵，则
>
> (1) $A$ 的特征值全为实数；
>
> (2) $A$ 为正定矩阵 $\iff$ 其特征值都是正实数. 

/proof/

> (1) 以及 (2) 的 “$\Rightarrow$” 部分已证. 
> 
>(2) 的 “$\Leftarrow$”：如果 $A$ 的特征值 $\lambda_0, \cdots, \lambda_r$ 均为正数，则 $\mathbb{R}^n$ 有正交分解
> $$
> \mathbb{R}^n = V(\lambda_0) \oplus V(\lambda_1) \oplus \cdots \oplus V(\lambda_r).
> $$
>
> 任给 $x \in \mathbb{R}^n$, $x \ne 0$，$x$ 有正交分解
>
> $$
> x = x_0 + x_1 + \cdots + x_r, \quad x_i \in V(\lambda_i),
> $$
>
> 从而
>
> $$
> Q(x) = \sum_{i=0}^r \lambda_i \cdot \|x_i\|^2 > 0.
> $$
>
> 即 $A$ 是正定方阵. 或者这样证：由于特征值都大于零，因而最小特征值也大于零，由引理1的证明即知 $A$ 是正定的. 

**引理3**. 

> 设 $A$ 为 $n$ 阶实对称方阵，其正特征值个数（含重数）为 $k$，如果 $V$ 为 $\mathbb{R}^n$ 的子向量空间，且对任意 $x \in V$ ($x \ne 0$)，均有 $Q(x) > 0$，则 $\dim V \le k$. 

/proof/

> （反证法）设 $\dim V > k$，记 $A$ 的正特征值对应的特征子空间的直和为 $V_0$，则 $\dim V_0 = k$. 考虑正交投影
>$$
> P: V \to V_0,
> $$
> 
>因为 $\dim V > \dim V_0$，故 $\ker P \ne \{0\}$. 从而存在 $x \in V$ ($x \ne 0$) 使得 $x \perp V_0$. 由引理2 的证明易见，此时必有 $Q(x) \le 0$，这就导出了矛盾. 

现在我们就得到了矩阵正定性的如下判别法：

**定理4**.

>  $A = (a_{ij})_{n\times n}$ 为正定方阵
> $$
> \iff \det(a_{ij})_{\substack{1 \le i \le k \\ 1 \le j \le k}} > 0,\ \forall\ 1 \le k \le n
> $$
>

/proof/

> “$\Rightarrow$” 如果 $A$ 正定，则显然 $(a_{ij})_{\substack{1 \le i \le k \\ 1 \le j \le k}}$ 正定，其特征值全为正实数，故行列式为正（行列式为特征值之积）. 
>
> “$\Leftarrow$” 对 $n$ 用归纳法. $n = 1$ 显然. 
>
> 设命题对 $n-1$ 成立，则对于 $n$ 阶方阵，由归纳假设，$(a_{ij})_{\substack{1 \le i \le n-1 \\ 1 \le j \le n-1}}$ 正定，这说明 $A$ 在子向量空间 $\mathbb{R}^{n-1} = \{ x \in \mathbb{R}^n \mid x_n = 0 \}$ 上正定. 
>
> 由引理3，$A$ 至少有 $n-1$ 个正的特征值. 又因为 $\det A > 0$，故所有特征值均为正数，由引理2 即知 $A$ 是正定的. 

### · 函数的相关性和独立性

在线性代数中，向量空间中的一组向量有线性相关或线性独立的说法. 我们现在考虑多元函数的类似概念. 设 $f_i: U \to \mathbb{R}$ ($1 \le i \le m$) 是定义在开集 $U \subset \mathbb{R}^n$ 上的一组连续可微函数. 这一组函数也可以看成向量值函数

$$
F: U \to \mathbb{R}^m, \quad F(x_1, x_2, \cdots, x_n) = (f_1(x_1, x_2, \cdots, x_n), \cdots, f_m(x_1, x_2, \cdots, x_n))
$$

的分量. 如果存在开集 $V \supset F(U)$ 上定义的连续可微函数 $\Phi: V \to \mathbb{R}$，使得

$$
\Phi(F) = \Phi(f_1, f_2, \cdots, f_m) = 0, \quad \text{且} \quad \nabla \Phi(y) \ne 0, \quad \forall\ y \in V,
$$

则称 $\{f_i\}$ 在 $U$ 上函数相关. 

> 如果 $\{f_i\}$ 函数相关，则根据隐函数定理，存在局部定义的连续可微函数 $\Psi$，使得 $\{f_i\}$ 中的某一个函数，比如 $f_j$，可以表示为
>
> $$
> f_j = \Psi(f_1, f_2, \cdots, f_{j-1}, f_{j+1}, \cdots, f_m),
> $$
>
> 这种等式也可以用来给出函数相关性的定义. 

如果在任意点 $x^0 \in U$ 附近，$\{f_i\}$ 均不是函数相关的，则称 $\{f_i\}$ 是一组彼此独立的函数. 如何判断函数的相关性或独立性呢？我们仍然用微分学的基本手段，即作线性化来研究这一问题. 

如果 $\{f_i\}$ 是函数相关的，则对等式 $\Phi(F) = 0$ 求导，得到下面的 Jacobian 之间的等式
$$
J\Phi \cdot JF(x) = 0, \quad \forall\ x \in U.
$$

因为 $J\Phi = \nabla \Phi \ne 0$，上式表明 $\operatorname{Rank} JF(x) < m$, $\forall\ x \in U$，其中 $\operatorname{Rank}$ 表示矩阵的秩. 

特别地，我们就得到如下函数独立性的一个判别方法. 

**定理5**. 

> 设 $m \le n$, $\{f_i\}$ 如上. 如果 $\operatorname{Rank} JF(x) = m$, $\forall\ x \in U$，则 $\{f_i\}$ 彼此独立；
>
> 特别地，当 $m = n$ 且 $\det JF(x) \ne 0$ $\forall\ x \in U$ 时，$\{f_i\}$ 彼此独立. 

> [!important]
>
> $\operatorname{Rank} JF(x) = m$ 等价于说向量 $\{\nabla f_i(x)\}_{i=1}^m$ 线性无关. 

/example/

> 设 $f_i(x) = \displaystyle\sum_{j=1}^n a_{ij}x_j$ ($1 \le i \le n$) 为 $\mathbb{R}^n$ 上的一组线性函数，则当 $\det A = 0$ 时 $\{f_i\}$ 函数相关；
>
> 当 $\det A \ne 0$ 时 $\{f_i\}$ 彼此独立，其中 $A = (a_{ij})_{n\times n}$. 

现在我们注意如下事实：

> 如果作变量替换 $x = \varphi(u)$，则 $\{f_i(x)\}$ 的函数相关性和独立性与 $\{f_i(\varphi(u))\}$ 的函数相关性和独立性是一样的. 利用这件事实，我们考虑这样一个特殊情形，即假设 Jacobian $JF$ 的秩满足条件
>
> $$
> \operatorname{Rank} JF(x) \equiv l < m, \quad \forall\ x \in U.
> $$
>
> 我们来说明在这种情形下，$\{f_i\}$ 在任何一点 $x^0 \in U$ 附近都是函数相关的. 事实上，由于 $JF(x^0) = l$，不妨设
>
> $$
> \det \left( \frac{\partial f_i}{\partial x_j} \right)_{\substack{1 \le i \le l \\ 1 \le j \le l}} (x^0) \ne 0.
> $$
>
> 考虑函数
>
> $$
> G: U \to \mathbb{R}^n, \quad G(x_1, x_2, \cdots, x_n) = (f_1(x), f_2(x), \cdots, f_l(x), x_{l+1}, \cdots, x_n),
> $$
>
> 易见 $\det JG(x^0) \ne 0$，因此，根据逆映射定理，$G$ 在 $x^0$ 附近可逆，其逆映射 $\varphi = G^{-1}$ 也是连续可微的，$x = \varphi(u)$ 可视为变量替换. 在这个变量替换下，$F$ 可写为
>
> $$
> F \circ \varphi(u) = (u_1, u_2, \cdots, u_l, F^{l+1}(u), \cdots, F^n(u)).
> $$
>
> 因为 $\operatorname{Rank} J(F \circ \varphi) = \operatorname{Rank} JF = l$，从上式可知
>
> $$
> \frac{\partial F^i}{\partial u_j} = 0, \quad \forall\ l+1 \le i,\ j \le n.
> $$
>
> 这说明，在 $u^0 = G(x^0)$ 附近，$F^i$ ($l+1 \le i \le n$) 只依赖于变量 $u_1, \cdots, u_l$. 特别地，映射 $F \circ \varphi$ 的分量在 $u^0 = G(x^0)$ 附近是函数相关的，因此 $F$ 的分量在 $x^0$ 附近函数相关. 
>
> 令
>
> $$
> \operatorname{Rank} JF = \max_{x \in U} \operatorname{Rank} JF(x),
> $$
>
> 称 $\operatorname{Rank} JF$ 为 $F$ 在 $U$ 上的秩. 
>
> 如果 $JF$ 在 $x^0 \in U$ 处达到此秩，则在 $x^0$ 附近 $JF$ 的秩也是 $\operatorname{Rank} JF$. 
>
> 利用上述讨论，我们立即得到如下推论. 

**推论6**. 

> 设 $\{f_i\}$ 以及 $F$ 如上. 如果 $JF$ 在 $x^0 \in U$ 达到最大秩 $l$，则它的 $l$ 个分量在 $x^0$ 附近是彼此独立的，而其余的分量均和这 $l$ 个分量函数相关. 



