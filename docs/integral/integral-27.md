---
title: Lesson 27 连续映射 I
permalink: /integral/integral-27/
createTime: 2026/08/17 14:17:33
---

从这一章开始我们要研究多个变量的函数. 实数集的基本性质对于一元实函数的各种性质都有决定性的影响. 因此，为了研究多个变量的函数，我们要首先研究它们的定义域的基本性质. 

## Part 1 基本概念

### · 内积与度量

**定义1** (内积)：

> 设 $X$ 是实数域 $\mathbb{R}$ 上的向量空间，如果映射
> $$
> \begin{aligned}
> &g = \langle,\rangle\colon X \times X \to \mathbb{R} \\\\
> &(x,y) \mapsto g(x,y) = \langle x,y\rangle
> \end{aligned}
> $$
> 满足以下条件：
>
> (1) $\langle x,x\rangle \geqslant 0$，且 $\langle x,x\rangle = 0 \Longleftrightarrow x = 0$（正定性）；
>
> (2) $\langle x,y\rangle = \langle y,x\rangle$，$\forall\,x,y \in X$（对称性）；
>
> (3) $\langle \lambda x + \mu y,z\rangle = \lambda\langle x,z\rangle + \mu\langle y,z\rangle$，$\forall\,\lambda,\mu \in \mathbb{R}$，$x,y,z \in X$（线性性）. 
>
> 则称 $g = \langle,\rangle$ 为 $X$ 上的一个内积，$(X,\langle,\rangle)$ 称为内积空间，$\langle x,y\rangle$ 称为 $x$ 与 $y$ 的内积，$\|x\| = \sqrt{\langle x,x\rangle}$ 称为 $x$ 的范数. 

/example/

>  $\mathbb{R}$ 上的内积
>
>  > 对任意 $x,y \in \mathbb{R}$，定义 $\langle x,y\rangle = xy$，则显然 $\langle,\rangle$ 为 $\mathbb{R}$ 上的内积. 此时，$x$ 的范数就是其绝对值 $|x|$. 
>
>  $\mathbb{R}^n$ 上的内积
>
>  > 记 $\mathbb{R}^n = \{(x_1,\cdots,x_n)\mid x_i \in \mathbb{R}\}$ 为全体 $n$ 元有序实数组，以显然的方式，$\mathbb{R}^n$ 成为 $\mathbb{R}$ 上的向量空间，称为 $n$ 维欧氏空间. $\mathbb{R}^n$ 上有标准的内积 $\langle,\rangle$：  
>  > $$
>  > \langle x,y\rangle = \sum_{i=1}^n x_iy_i,\quad \forall\,x = (x_1,\cdots,x_n),\,y = (y_1,\cdots,y_n) \in \mathbb{R}^n.
>  > $$
>  > 如果 $x = (x_1,\cdots,x_n) \in \mathbb{R}^n$，则其范数为  
>  > $$
>  > \|x\| = (x_1^2 + x_2^2 + \cdots + x_n^2)^{1/2}.
>  > $$
>  >
>  > 
>
>  闭区间上连续函数空间的内积
>
>  > 记 $C^0[a,b]$ 为闭区间 $[a,b]$ 上连续函数的全体形成的向量空间. 定义内积 $\langle,\rangle$ 如下：  
>  > $$
>  > \langle f,g\rangle = \int_a^b f(x)g(x)\,dx.
>  > $$
>  > 其中，内积的正定性需要用到连续性的条件：
>  >
>  > 非负连续函数的积分一定是非负实数，且积分为零当且仅当被积函数为零. 

**定理1** (Schwarz 不等式)：设 $(X,\langle,\rangle)$ 为内积空间，则  
$$
|\langle x,y\rangle| \leqslant \|x\| \cdot \|y\|,
$$
且等号成立当且仅当 $x$ 与 $y$ 线性相关. 

> 当 $x = 0$（或 $y = 0$）时，由内积的线性知  
> $$
> \langle 0,y\rangle = \langle 0\cdot 0,y\rangle = 0\langle 0,y\rangle = 0,
> $$
> 此时 Schwarz 不等式自然成立. 下设 $x \ne 0$，$y \ne 0$，则对任意 $t \in \mathbb{R}$，有  
> $$
> \langle x,x\rangle - 2t\langle x,y\rangle + t^2\langle y,y\rangle = \langle x - ty,x - ty\rangle \geqslant 0,
> $$
> 上式是关于 $t$ 的一元二次函数，因此其判别式非正：  
> $$
> \Delta = 4\langle x,y\rangle^2 - 4\langle x,x\rangle\langle y,y\rangle \leqslant 0,
> $$
> 等号成立的条件略. 
>
> **注意**. 如果不考虑等式成立条件，只要 $\langle,\rangle$ 具有非负性，则 Schwarz 不等式仍然成立. 

根据 Schwarz 不等式，当 $x,y$ 为非零向量时，可以取 $\theta(x,y) \in [0,\pi]$，使得  
$$
\cos\theta(x,y) = \frac{\langle x,y\rangle}{\|x\| \cdot \|y\|},
$$
$\theta(x,y)$ 称为 $x,y$ 的夹角，也记为 $\angle(x,y)$. 

**推论2**：设 $(X,\langle,\rangle)$ 为内积空间，$x,y \in X$，则  
$$
\|x + y\| \leqslant \|x\| + \|y\|.
$$

> 根据 Schwarz 不等式，有  
> $$
> \begin{aligned}
> \|x + y\|^2 &= \langle x + y,x + y\rangle = \langle x,x\rangle + 2\langle x,y\rangle + \langle y,y\rangle \\\\
> &\leqslant \|x\|^2 + 2\|x\|\cdot\|y\| + \|y\|^2 \\\\
> &= (\|x\| + \|y\|)^2,
> \end{aligned}
> $$
> 因此欲证不等式成立. 

**定义2** (度量):

> 设 $X$ 为非空集合，如果映射 $\rho\colon X \times X \to \mathbb{R}$ 满足以下条件：
>
> (1) $\rho(x,y) \geqslant 0$ 且 $\rho(x,y) = 0 \Longleftrightarrow x = y$；
>
> (2) $\rho(x,y) = \rho(y,x)$；
>
> (3) $\rho(x,z) \leqslant \rho(x,y) + \rho(y,z)$. （三角不等式）
>
> 则称 $\rho$ 为 $X$ 上的一个度量（或距离），$(X,\rho)$ 称为度量空间（或距离空间），$\rho(x,y)$ 称为 $x,y$ 之间的距离. 

/example/

>  $\mathbb{R}$ 上的度量
>
>  > 任给 $x,y \in \mathbb{R}$，令 $\rho(x,y) = |x - y|$，则 $\rho$ 为 $\mathbb{R}$ 上的度量. 
>
>  内积诱导距离
>
>  > 设 $(X,\langle,\rangle)$ 为内积空间，则令  
>  > $$
>  > \rho(x,y) = \|x - y\|,\quad \forall\,x,y \in X.
>  > $$
>  > 显然 $\rho$ 满足度量定义中的 (1)，(2)，而三角不等式也成立：  
>  > $$
>  > \begin{aligned}
>  > \rho(x,z) &= \|x - z\| = \|(x - y) + (y - z)\| \\\\
>  > &\leqslant \|x - y\| + \|y - z\| \\\\
>  > &= \rho(x,y) + \rho(y,z).\\
>  > \end{aligned}
>  > $$
>  > 因此 $\rho$ 为 $X$ 上的度量，称为由内积诱导的度量. 
>
>  离散度量空间
>
>  > 度量空间比内积空间要广泛得多，它们不一定为向量空间. 例如，设 $X$ 为任意非空集合，定义映射 $d\colon X \times X \to \mathbb{R}$ 如下：  
>  > $$
>  > d(x,y) = 
>  > \begin{cases}
>  > 1,& x \ne y,\\
>  > 0,& x = y.
>  > \end{cases}
>  > $$
>  > 不难验证 $d$ 为 $X$ 上的一个度量，称为离散度量. 

### · 度量空间的拓扑

这部分假设 $(X,\rho)$ 为度量空间. 设 $x \in X$，$r > 0$，记  
$$
B_r(x) = \{y \in X \mid \rho(y,x) < r\},
$$
称为以 $x$ 为中心，$r$ 为半径的开球. 

**欧氏空间中的开球**：

> 在 $\mathbb{R}$ 中，以 $x_0$ 为中心，$r$ 为半径的开球就是开区间 $(x_0 - r,x_0 + r)$. 在 $\mathbb{R}^2$ 中，以 $(x_0,y_0)$ 为中心，以 $r$ 为半径的开球实际上是圆盘  
> $$
> \{(x,y) \in \mathbb{R}^2 \mid (x - x_0)^2 + (y - y_0)^2 < r^2\}.
> $$
> 在一般的欧氏空间 $\mathbb{R}^n$ 中，以 $(x_0^1,\cdots,x_0^n)$ 为中心，$r$ 为半径的开球是  
> $$
> \{(x^1,\cdots,x^n) \in \mathbb{R}^n \mid (x^1 - x_0^1)^2 + \cdots + (x^n - x_0^n)^2 < r^2\}.
> $$

**离散度量空间中的开球**：

> 设 $X$ 是离散度量空间. 由于 $X$ 中的距离只取 $0$ 或 $1$，因此  
> $$
> B_r(x) = \{x\},\quad \forall\,r \leqslant 1;\quad B_r(x) = X,\quad \forall\,r > 1.
> $$
> 我们注意到离散度量空间中的开球看上去和欧氏空间中的很不一样. 

**定义1** (开集和闭集)：

> 设 $U$ 为 $X$ 的子集，如果任给 $x \in U$，均存在 $\varepsilon > 0$，使得 $B_\varepsilon(x) \displaystyle\subset U$，则称 $U$ 为开集；约定空集也是开集. 如果一个集合的补集（余集）是开集，则称该集合为闭集. 
>
> 显然，$X$ 为开集，从而空集也是闭集. 含有 $x$ 的开集称为 $x$ 的开邻域. 

/example/

> 欧氏空间中的一些开集和闭集
>
> > 开区间 $(a,b)$，$(a,+\infty)$ 和 $(-\infty,b)$ 都是 $\mathbb{R}$ 中的开集；闭区间 $[a,b]$ 以及区间 $[a,+\infty)$ 和 $(-\infty,b]$ 都是 $\mathbb{R}$ 中的闭集. 
> >
> > 上半平面 $\{(x,y) \in \mathbb{R}^2 \mid y > 0\}$ 是 $\mathbb{R}^2$ 中的开集，闭的圆盘 $\{x^2 + y^2 \leqslant r^2\}$ 是 $\mathbb{R}^2$ 中的闭集. 
> >
> > 一般地，一个子集可能既不是开集，也不是闭集，比如 $\mathbb{R}$ 中的半开半闭区间 $[a,b)$. 
> >
> > 不过，离散度量空间的情形却很特殊. 
>
> 离散度量空间中的开集和闭集
>
> > 因为以 $x$ 为中心，以 $1/2$ 为半径的开球就是 $\{x\}$，因此离散度量空间的任何子集都是开集，从而任何子集也都是闭集. 
>
> 度量空间中的开球为开集
>
> > 设 $x \in B_r(x_0)$，则 $\rho(x,x_0) < r$. 令 $\varepsilon = r - \rho(x,x_0)$，则当 $y \in B_\varepsilon(x)$ 时，由三角不等式，有  
> > $$
> > \rho(y,x_0) \leqslant \rho(y,x) + \rho(x,x_0) < \varepsilon + \rho(x,x_0) = r,
> > $$
> > 这说明 $y \in B_r(x_0)$，即 $B_\varepsilon(x) \displaystyle\subset B_r(x_0)$，因此 $B_r(x_0)$ 是开集. 
> >
> > 类似可证 $\{y \in X \mid \rho(y,x_0) > r\}$ 为开集，其补集称为闭球，是闭集. 

下面的命题反映了开集和闭集的基本性质. 

**命题1**：

(1) 有限多个开集之交仍为开集；任意多个开集之并仍为开集；

(2) 有限多个闭集之并仍为闭集；任意多个闭集之交仍为闭集. 

> (1) 设 $U_1,\cdots,U_k$ 为开集，任给 $x \in \displaystyle\bigcap_{i=1}^k U_i$，由定义，存在 $\varepsilon_i > 0$，使得 $B_{\varepsilon_i}(x) \displaystyle\subset U_i$，$i = 1,\cdots,k$. 令 $\varepsilon = \min\{\varepsilon_i\mid i = 1,\cdots,k\}$，则 $B_\varepsilon(x) \displaystyle\subset \displaystyle\bigcap_{i=1}^k U_i$，故 $\displaystyle\bigcap_{i=1}^k U_i$ 为开集，从而开集的定义立即可以推出任意多个开集之并仍为开集. 
>
> (2) 利用集合的运算  
> $$
> \begin{aligned}
> (A_1 \cup \cdots \cup A_k)^c &= A_1^c \cap \cdots \cap A_k^c \\\\
> (\bigcap_\alpha A_\alpha)^c &= \bigcup_\alpha A_\alpha^c
> \end{aligned}
> $$
> 及 (1) 即可. 

为了刻画闭集，我们引入极限的概念，它是实数的数列极限概念的推广. 

**定义2** (极限)：

> 设 $\{x_n\}_{n=1}^\infty$ 为 $X$ 中的点列，如果存在 $x_0 \in X$，使得任给 $\varepsilon > 0$，均存在 $N = N(\varepsilon)$，当 $n > N$ 时，$x_n \in B_\varepsilon(x_0)$，则称 $\{x_n\}$ 收敛到极限 $x_0$，记为  
> $$
> \lim_{n \to \infty} x_n = x_0 \quad \text{or} \quad x_n \to x_0\,(n \to \infty).
> $$

**注意**：

(1) $x_n \in B_\varepsilon(x_0)$ 可改写为 $\rho(x_n,x_0) < \varepsilon$，因此有  
$$
\lim_{n \to \infty} x_n = x_0 \Longleftrightarrow \lim_{n \to \infty} \rho(x_n,x_0) = 0.
$$
(2) 由三角不等式和 (1) 易见，极限如果存在，则必唯一. 

极限也可以用开集来描述，它的好处是可以不涉及度量，从而便于推广到更一般的空间中. 

**命题2**：设 $\{x_n\}$ 为度量空间 $(X,\rho)$ 中的点列，则 $\{x_n\}$ 收敛于 $x_0$ 当且仅当任给 $x_0$ 的开邻域 $U$，存在 $N$，当 $n > N$ 时 $x_n \in U$. 

> (必要性) 设 $\displaystyle\lim_{n \to \infty} x_n = x_0$，$U$ 是 $x_0$ 的一个开邻域. 于是存在 $\varepsilon > 0$，使得 $B_\varepsilon(x_0) \displaystyle\subset U$. 根据极限的定义，存在 $N = N(\varepsilon)$，当 $n > N$ 时  
> $$
> x_n \in B_\varepsilon(x_0) \subset U.
> $$
> (充分性) 取 $U$ 为开球即可. 

**命题3**：集合 $A$ 为闭集当且仅当 $A$ 中任何收敛点列的极限仍在 $A$ 中. 

> 设 $A$ 为闭集，$\{x_n\} \displaystyle\subset A$，且 $\displaystyle\lim_{n \to \infty} x_n = x_0$. 
>
> \如果 $x_0 \notin A$，则存在 $\varepsilon_0 > 0$，使得 $B_{\varepsilon_0}(x_0) \displaystyle\subset A^c$，但 $\displaystyle\lim_{n \to \infty} x_n = x_0$ 意味着，存在 $N = N(\varepsilon_0)$ 使得 $n > N$ 时 $x_n \in B_{\varepsilon_0}(x_0)$，这与 $x_n \in A$ 相矛盾！因此 $x_0 \in A$. 
>
> 反之，如果 $A$ 中任何收敛点列的极限仍在 $A$ 中，则任取 $x_0 \notin A$，我们说明存在 $n_0 > 0$ 使得 $B_{1/n_0}(x_0) \displaystyle\subset A^c$，即 $A^c$ 为开集. 
>
> （反证法）如果不然，则对任意 $n \geqslant 1$，均有 $B_{1/n}(x_0) \cap A \ne \varnothing$. 取 $x_n \in B_{1/n}(x_0) \cap A$，则 $\displaystyle\lim_{n \to \infty} x_n = x_0$，这导出了矛盾. 

**PS**. 这个命题可以用来解释闭集的属性：闭集关于求极限运算是封闭的. 

**定义3** (内点，外点，边界点)：

> 设 $A$ 为度量空间 $X$ 的子集，$x_0 \in X$. 如果存在 $x_0$ 的开邻域 $U$，使得 $U \displaystyle\subset A$，则称 $x_0$ 为 $A$ 的内点，内点的全体记为 $\operatorname{int}A$ 或 $\mathring{A}$，称为 $A$ 的内部；
>
> 如果存在 $x_0$ 的开邻域 $U$，使得 $U \displaystyle\subset A^c$，则称 $x_0$ 为 $A$ 的外点；
>
> 如果 $x_0$ 的任意开邻域中都既有 $A$ 中的点，也有不属于 $A$ 中的点，则称 $x_0$ 为 $A$ 的边界点，边界点的全体记为 $\partial A$，称为 $A$ 的边界. 

从定义不难看出，内点集 $\mathring{A}$ 是包含于 $A$ 的“最大”开集，$A$ 的外点就是 $A^c$ 的内点，空间 $X$ 可分解为  
$$
X = \operatorname{int}A \cup \partial A \cup \operatorname{int}(A^c),
$$
这个分解中的三个子集互不相交. 由此可得如下性质：

> (1).  $\partial A$ 为闭集，这是因为 $\partial A = (\operatorname{int}A \cup \operatorname{int}(A^c))^c$. 
>
> (2).  $\operatorname{int}A \cup \partial A$ 也是闭集，记为 $\bar{A}$，称为 $A$ 的闭包. 闭包是闭集是因为 $\bar{A} = (\operatorname{int}(A^c))^c$. 此外，$\bar{A} = A \cup \partial A$ 也成立. 这是因为，按定义显然有 $A \displaystyle\subset A \cup \partial A$. 其次，如果 $a \in A \cup \partial A$，则 $a \in A$ 或 $a \in \partial A$，总之 $a$ 不是 $A$ 的外点，因此 $a \in \bar{A}$，即 $A \cup \partial A \displaystyle\subset \bar{A}$ 也成立. 
>
> (3).  $A$ 为闭集当且仅当 $\partial A \displaystyle\subset A$，即 $A = \bar{A}$. 根据前一条性质，只要证明必要性就可以了. 事实上，如果 $A$ 是闭集，则 $A^c$ 为开集，从而 $A^c$ 就是 $A$ 的全体外点，于是  
> $$
> \bar{A} = (\operatorname{int}(A^c))^c = (A^c)^c = A.
> $$
> (4).  当 $A \displaystyle\subset B$ 时，$\bar{A} \displaystyle\subset \bar{B}$. 这是因为，此时 $A^c \supset B^c$，$\operatorname{int}(A^c) \supset \operatorname{int}(B^c)$，从而 $\bar{A} \displaystyle\subset \bar{B}$ 成立. 

考虑多元积分时，我们将要用到闭包和边界的上述性质. 

作为 $\mathbb{R}$ 的子集，有理数全体 $\mathbb{Q}$ 既无内点，也无外点. 因此 $\mathbb{Q}$ 的边界点为整个空间 $\mathbb{R}$. 

**欧氏空间 $\mathbb{R}^n$ 中开球的边界**：

> 设 $x_0 \in \mathbb{R}^n$，$r > 0$. 由于 $\{\|x - x_0\| < r\}$ 和 $\{\|x - x_0\| > r\}$ 均为开集，故  
> $$
> \partial B_r(x_0) = \{\|x - x_0\| = r\},
> $$
> 这个边界称为 $n - 1$ 维球面（以 $x_0$ 为中心，$r$ 为半径）. 
