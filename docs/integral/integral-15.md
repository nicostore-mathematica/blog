---
title: Chapter 15 连续映射
permalink: /integral/integral-15/
createTime: 2025/12/16 19:25:30
---

## Part 1 连续映射

### · 基本概念

回忆一下连续函数的定义：$f: \mathbb{R} \to \mathbb{R}$ 在 $x_0$ 处连续是指，任给 $\varepsilon > 0$，存在 $\delta > 0$，使得 $|x - x_0| < \delta$ 时 $|f(x) - f(x_0)| < \varepsilon$。用度量空间的语言可作如下推广：

**定义1** (连续映射)

> 设 $f: X \to Y$ 为度量空间 $(X,\rho_1)$, $(Y,\rho_2)$ 之间的映射，设 $x_0 \in X$。
>
> 如果任给 $\varepsilon > 0$，存在 $\delta > 0$ 使得 $f(B_\delta^X(x_0)) \subset B_\varepsilon^Y(f(x_0))$，则称 $f$ 在 $x_0$ 处连续。
>
> 如果 $f$ 处处连续，则称 $f$ 为连续映射。当 $Y = \mathbb{R}$ 时，连续映射也称为连续函数。
>
> 其中，记号 $B_\delta^X(x_0)$ 表示 $X$ 中以 $x_0$ 为中心，以 $\delta$ 为半径的开球，$B_\varepsilon^Y(f(x_0))$ 表示 $Y$ 中以 $f(x_0)$ 为中心，以 $\varepsilon$ 为半径的开球。

/example/  距离函数的连续性

> /proof/
>
> 设 $a$ 是度量空间 $(X,\rho)$ 中固定的一点，则函数 $f(x) = \rho(x,a)$ 是连续的：设 $x_0 \in X$，则任给 $\varepsilon > 0$，取 $\delta = \varepsilon$，当 $x \in B_\delta(x_0)$ 时  
> $$
> |f(x) - f(x_0)| = |\rho(x,a) - \rho(x_0,a)| \leqslant \rho(x,x_0) < \delta = \varepsilon,
> $$
> 因此 $f$ 在 $x_0$ 处连续。

**命题1** (连续映射的刻画)

设 $f: X \to Y$ 为度量空间之间的映射，$x_0$ 为 $X$ 中的一点。则

(1) $f$ 在 $x_0$ 处连续 $\iff$ 对任意收敛于 $x_0$ 的点列 $\{x_n\}$，均有  
$$
\lim_{n \to \infty} f(x_n) = f(x_0);
$$
(2) $f$ 为连续映射 $\iff$ 对任意开集 $V \subset Y$，$f^{-1}(V)$ 为 $X$ 中开集；

(3) $f$ 为连续映射 $\iff$ 对任意闭集 $B \subset Y$，$f^{-1}(B)$ 为 $X$ 中闭集。

> /proof/
>
> (1) “$\Longrightarrow$” 设 $f$ 在 $x_0$ 处连续，则任给 $\varepsilon > 0$，存在 $\delta > 0$ 使得  
> $$
> f(B_\delta^X(x_0)) \subset B_\varepsilon^Y(f(x_0)).
> $$
> 因为 $\displaystyle\lim_{n \to \infty} x_n = x_0$，故 $n$ 充分大时 $x_n \in B_\delta^X(x_0)$，从而 $f(x_n) \in B_\varepsilon^Y(f(x_0))$，这表明  
> $$
> f(x_n) \to f(x_0)\quad(n \to \infty).
> $$
>
> “$\Longleftarrow$”（反证法）如果 $f$ 在 $x_0$ 处不连续，则存在 $\varepsilon_0 > 0$，使得对 $\delta = 1/n$，存在 $x_n \in B_{1/n}^X(x_0)$，而 $f(x_n) \notin B_{\varepsilon_0}^Y(f(x_0))$。显然 $x_n \to x_0$，但 $f(x_n) \not\to f(x_0)$，矛盾！
>
> (2) “$\Longrightarrow$” 设 $f$ 为连续映射，$V$ 为 $Y$ 中开集。如果 $x_0 \in f^{-1}(V)$，则 $y_0 = f(x_0) \in V$，由于 $V$ 为开集，故存在 $\varepsilon > 0$，使得 $B_\varepsilon^Y(y_0) \subset V$。根据连续性，存在 $\delta > 0$，使得 $f(B_\delta^X(x_0)) \subset B_\varepsilon^Y(y_0) \subset V$，即 $B_\delta^X(x_0) \subset f^{-1}(V)$，这说明 $f^{-1}(V)$ 为开集。
>
> “$\Longleftarrow$” 如果开集的原象仍为开集，则任取 $x_0 \in X$ 以及 $\varepsilon > 0$，记 $y_0 = f(x_0)$。于是 $f^{-1}(B_\varepsilon^Y(y_0))$ 为 $X$ 中包含 $x_0$ 的开集，从而存在 $\delta > 0$，使得  
> $$
> B_\delta^X(x_0) \subset f^{-1}(B_\varepsilon^Y(y_0)),
> $$
> 即 $f(B_\delta^X(x_0)) \subset B_\varepsilon^Y(y_0)$，这说明 $f$ 在 $x_0$ 处连续。
>
> (3): 省略.

**注意**。

(1) 如果 $A$ 为 $X$ 之子集，$f: A \to Y$ 为映射，则把 $X$ 的度量限制于 $A$，从而 $A$ 也为度量空间（子度量空间），此时可以定义 $f$ 的连续性，并有类似的刻画。

(2) 设 $f: A \to Y$ 连续，如果任给 $\varepsilon > 0$，存在 $\delta > 0$，使得 $\rho_1(a_1,a_2) < \delta$ 时 $\rho_2(f(a_1),f(a_2)) < \varepsilon$，则称 $f$ 为一致连续映射。

/example/  Lipschitz 映射

> /proof/
>
> 设 $f: X \to Y$ 是度量空间之间的映射，如果存在常数 $L$，使得  
> $$
> \rho_2(f(x_1),f(x_2)) \leqslant L\rho_1(x_1,x_2),\quad \forall\,x_1,x_2 \in X,
> $$
> 则称 $f$ 为 Lipschitz 映射，$L$ 称为 Lipschitz 常数。Lipschitz 映射是一致连续的。特别地，压缩映射是 Lipschitz 映射，因此也是连续映射。

**定理2** (连续映射与紧性)：设 $f: X \to Y$ 为连续映射，则

(1) $f$ 将 $X$ 中紧致集合映为 $Y$ 中紧致集合；

(2) $f$ 在紧致集合上一致连续。

> /proof/
>
> (1) 设 $A$ 为 $X$ 中紧致集合，取 $f(A)$ 的开覆盖 $\{V_\alpha\}$，则 $\{f^{-1}(V_\alpha)\}$ 为 $A$ 的开覆盖，从而存在 $\alpha_1,\cdots,\alpha_k$ 使得 $A \subset \displaystyle\bigcup_{i=1}^k f^{-1}(V_{\alpha_i})$。这说明 $f(A) \subset \bigcup_{i=1}^k V_{\alpha_i}$。
>
> (2) 设 $A$ 为紧致集合。如果 $f$ 在 $A$ 上不是一致连续的，则存在 $\varepsilon_0 > 0$，使得对 $\delta = 1/n$，存在 $a_n,b_n \in A$，使得  
> $$
> \rho_1(a_n,b_n) < \frac{1}{n},\quad \rho_2(f(a_n),f(b_n)) > \varepsilon_0.
> $$
> $\{a_n\}$ 和 $\{b_n\}$ 分别存在收敛子列，不妨设它们本身是收敛的，极限分别为 $a_0$, $b_0$，则  
> $$
> \begin{aligned}
> \rho_1(a_0,b_0) &\leqslant \rho_1(a_0,a_n) + \rho_1(a_n,b_n) + \rho_1(b_n,b_0) \\\\
> &< \frac{1}{n} + \rho_1(a_0,a_n) + \rho_1(b_n,b_0) \to 0,
> \end{aligned}
> $$
> 即 $a_0 = b_0$。但  
> $$
> \varepsilon_0 < \rho_2(f(a_n),f(b_n)) \leqslant \rho_2(f(a_n),f(a_0)) + \rho_2(f(b_0),f(b_n)) \to 0.
> $$
> 这就导出了矛盾！

**推论3** (最值定理)：连续函数 $f: X \to \mathbb{R}$ 在紧致集合上可以取到最大值和最小值。

> /proof/
>
> 设 $A$ 为 $X$ 中的紧致集合，则 $f(A)$ 是 $\mathbb{R}$ 中的紧致集合，因此为 $\mathbb{R}$ 中的有界闭集。这说明 $f(A)$ 中存在最大数和最小数，它们分别是 $f$ 在 $A$ 上的最大值和最小值。

**定义2** (道路连通)

> 设 $G$ 为 $X$ 的子集，如果任给 $x_1,x_2 \in G$，均存在连续映射（连续曲线）$\sigma: I = [0,1] \to X$ 使得 $\sigma(0) = x_1$, $\sigma(1) = x_2$, $\sigma(I) \subset G$，则称 $G$ 道路连通。
>
> 显然，$\mathbb{R}^n$ 是道路连通的，因为任何两点均可用直线段相连接。

**命题4**：$\mathbb{R}$ 中道路连通集合必为区间（可退化为一点）。

> /proof/
>
> 设 $G \subset \mathbb{R}$ 道路连通，$a \leqslant b \in G$。我们证明 $[a,b] \subset G$。
>
> 事实上，由定义，存在连续映射 $f: [0,1] \to \mathbb{R}$，使得 $f(0) = a$, $f(1) = b$, $f([0,1]) \subset G$。$f$ 为一元连续函数，由介值定理，$[a,b] \subset f([0,1]) \subset G$。

**定理5** (连续映射与连通性)：连续映射将道路连通的集合映为道路连通集合。

> /proof/
>
> 设 $G \subset X$ 道路连通，$f: X \to Y$ 连续。
>
> 任取 $y_1,y_2 \in f(G)$，则存在 $x_1,x_2 \in G$ 使得 $f(x_1) = y_1$, $f(x_2) = y_2$。
>
> 由定义，存在连续映射 $\sigma: [0,1] \to X$ 使得 $\sigma(0) = x_1$, $\sigma(1) = x_2$, $\sigma([0,1]) \subset G$。
>
> 复合映射 $f \circ \sigma: [0,1] \to Y$ 连续，且 $f \circ \sigma(0) = f(x_1) = y_1$, $f \circ \sigma(1) = f(x_2) = y_2$, $f \circ \sigma([0,1]) \subset f(G)$。$f \circ \sigma$ 就是 $f(G)$ 中连接 $y_1,y_2$ 的道路。

**推论6** (介值定理)：设 $f: X \to \mathbb{R}$ 为连续函数，$G \subset X$ 道路连通。

(1) 如果存在 $x_1,x_2 \in G$，使得 $f(x_1)f(x_2) \leqslant 0$，则存在 $x_0 \in G$ 使得 $f(x_0) = 0$；

(2) 对于满足条件 $f(x_1) \leqslant y \leqslant f(x_2)$ 的任意 $y$，一定存在 $x \in G$ 使得 $y = f(x)$。

> /proof/
>
> 以 (2) 为例。因为 $f$ 连续，$G$ 道路连通，故 $f(G) \subset \mathbb{R}$ 也道路连通，从而 $f(G)$ 为区间。
>
> 由 $f(x_1),f(x_2) \in f(G)$ 即知 $[f(x_1),f(x_2)] \subset f(G)$，特别地，$y \in f(G)$，即存在 $x \in G$ 使得 $y = f(x)$。

/example/设 $f: S^1 \to \mathbb{R}$ 为单位圆周上的连续函数，则存在 $x_0 \in S^1$，使得  
$$
f(-x_0) = f(x_0).
$$

> /proof/
>
> 考虑函数 $g: S^1 \to \mathbb{R}$，使得  
> $$
> g(x) = f(x) - f(-x),\quad \forall\,x \in S^1.
> $$
> 则 $g$ 也是连续函数，且  
> $$
> g(x)g(-x) = [f(x) - f(-x)][f(-x) - f(x)] = -[f(x) - f(-x)]^2 \leqslant 0,
> $$
> 根据介值定理，存在 $x_0 \in S^1$，使得 $g(x_0) = 0$，此时 $f(-x_0) = f(x_0)$。

### · 欧氏连续映射

在以后的章节中，欧氏空间将是我们的研究对象。因此，我们要考虑从一个欧氏空间到另一个欧氏空间的映射。从 $\mathbb{R}$ 到 $\mathbb{R}$ 的映射称为一元函数；当 $n > 1$ 时，从 $\mathbb{R}^n$ 到 $\mathbb{R}$ 的映射称为多元函数；一般地，从 $\mathbb{R}^n$ 到 $\mathbb{R}^m$ 的映射称为向量值函数。

对于多元连续函数来说，其四则运算性质和一元连续函数没有什么区别。

**命题7**：设 $f,g: \mathbb{R}^n \to \mathbb{R}$ 为连续函数，则

> (1) 当 $\lambda,\mu \in \mathbb{R}$ 时，$\lambda f + \mu g$ 也是连续函数；
>
> (2) $fg$ 为连续函数；
>
> (3) 当 $g \ne 0$ 时，$f/g$ 为连续函数。

现在我们考虑向量值的函数 $f: \mathbb{R}^n \to \mathbb{R}^m$，写成分量的形式为  
$$
f(x) = (f_1(x),\cdots,f_m(x)),\quad x = (x_1,\cdots,x_n) \in \mathbb{R}^m.
$$
我们有

**命题8**：$f: \mathbb{R}^n \to \mathbb{R}^m$ 为连续映射当且仅当 $f_i$ 均为连续函数，其中 $i = 1,\cdots,m$。

> /proof/
>
> 由连续性的刻画可知，$f$ 在 $x_0$ 处连续当且仅当 $\lim_{x \to x_0} f(x) = f(x_0)$，根据欧氏空间中的极限性质，  
> $$
> \lim_{x \to x_0} f(x) = f(x_0) \iff \lim_{x \to x_0} f_i(x) = f_i(x_0),\quad i = 1,\cdots,m.
> $$
> 即 $f$ 在 $x_0$ 处连续当且仅当 $f_i$ ($1 \leqslant i \leqslant n$) 均在 $x_0$ 处连续。

**线性映射**：

> 设 $f: \mathbb{R}^n \to \mathbb{R}^m$ 为向量值函数。如果任给 $x,y \in \mathbb{R}^n$，成立  
> $$
> f(\lambda x + \mu y) = \lambda f(x) + \mu f(y),\quad \forall\,\lambda,\mu \in \mathbb{R},
> $$
> 则称 $f$ 为线性映射。$m = 1$ 的情形就是线性函数。
>
> 记 $e_i$ 是 $\mathbb{R}^n$ 中第 $i$ 个位置为 1，其它位置为零的向量，则 $\{e_1,\cdots,e_n\}$ 为 $\mathbb{R}^n$ 的一组标准基。$\mathbb{R}^n$ 中的向量 $x$ 可写为  
> $$
> x = (x_1,\cdots,x_n) = x_1e_1 + \cdots + x_ne_n,
> $$
> 根据线性性，$f(x)$ 可写为  
> $$
> f(x) = f(x_1e_1 + \cdots + x_ne_n) = x_1f(e_1) + \cdots + x_nf(e_n),
> $$
> 这是线性函数表达式的推广。如果记 $f(e_i) = (a_{1i},\cdots,a_{mi})$，用列向量表示，则上式可改写为  
> $$
> f(x) = 
> \begin{pmatrix}
> a_{11} & a_{12} & \cdots & a_{1n} \\
> a_{21} & a_{22} & \cdots & a_{2n} \\
> \vdots & \vdots & \ddots & \vdots \\
> a_{m1} & a_{m2} & \cdots & a_{mn}
> \end{pmatrix}
> \begin{pmatrix}
> x_1 \\ x_2 \\ \vdots \\ x_n
> \end{pmatrix},
> $$
> 这是线性映射的矩阵表示，$f$ 由矩阵 $A = (a_{ij})_{m\times n}$ 完全决定了。
>
> 如果 $f: \mathbb{R}^n \to \mathbb{R}^m$, $g: \mathbb{R}^m \to \mathbb{R}^s$ 均为连续映射，则复合映射 $g \circ f$ 是从 $\mathbb{R}^n$ 到 $\mathbb{R}^s$ 的连续映射。
>
> 如果 $f,g$ 均为线性映射，且其矩阵表示分别为 $A,B$，则 $g \circ f$ 也是线性映射，其矩阵表示为 $BA$。
>
> 因此，对于线性映射的研究可以转化为对于矩阵的研究，这是线性代数的内容。

## Part 2 二元函数

映射 $f: \mathbb{R}^2 \to \mathbb{R}$ 称为二元函数。$\mathbb{R}^2$ 中的点用坐标 $(x,y)$ 表示。设 $(x_0,y_0) \in \mathbb{R}^2$，如果存在 $A \in \mathbb{R}$，使得任给 $\varepsilon > 0$，均存在 $\delta > 0$，当  
$$
0 < \|(x,y) - (x_0,y_0)\| = \sqrt{(x - x_0)^2 + (y - y_0)^2} < \delta
$$
时，$|f(x,y) - A| < \varepsilon$，就称 $f$ 在 $(x_0,y_0)$ 处有极限（重极限），记为  
$$
\lim_{(x,y) \to (x_0,y_0)} f(x,y) = A\quad\text{or}\quad \lim_{\substack{x \to x_0 \\ y \to y_0}} f(x,y) = A.
$$
如果对于每一个固定的 $y$，极限 $\displaystyle\lim_{x \to x_0} f(x,y) = \varphi(y)$ 存在，则可以定义极限  
$$
\lim_{y \to y_0} \lim_{x \to x_0} f(x,y) = \lim_{y \to y_0} \varphi(y).
$$
类似地定义 $\displaystyle\lim_{x \to x_0} \lim_{y \to y_0} f(x,y)$，称它们为累次极限。

/example/

> (1) $\displaystyle \lim_{(x,y) \to (0,0)} \frac{x^2y^2}{x^2 + y^2} = 0$，这是因为  
> $$
> 0 \leqslant \frac{x^2y^2}{x^2 + y^2} \leqslant \frac{1}{2}|xy| \leqslant \frac{1}{4}(x^2 + y^2).
> $$
>
> (2) $\displaystyle \frac{xy}{x^2 + y^2}$ 在 $(0,0)$ 处无极限（分别考虑 $y = x$ 和 $y = x^2$）。
>
> (3) $f(x,y) = x\sin\dfrac{1}{y}$。由 $|f(x,y)| \leqslant x$ 知 $\displaystyle \lim_{(x,y) \to (0,0)} f(x,y) = 0$，但 $\displaystyle \lim_{y \to 0} f(x,y)$ 不存在。
>
> (4) $\displaystyle \lim_{y \to 0} \lim_{x \to 0} \frac{xy}{x^2 + y^2} = \lim_{x \to 0} \lim_{y \to 0} \frac{xy}{x^2 + y^2} = 0$，但由 (2) 知重极限不存在。

**定理9**：如果 $\displaystyle \lim_{(x,y) \to (a,b)} f(x,y) = A$，且对任意 $y \ne b$，$\displaystyle \lim_{x \to a} f(x,y) = \varphi(y)$ 存在，则  
$$
\lim_{y \to b} \lim_{x \to a} f(x,y) = \lim_{y \to b} \varphi(y) = A;
$$
如果对任意 $x \ne a$，$\displaystyle \lim_{y \to b} f(x,y)$ 也存在，则  
$$
\lim_{x \to a} \lim_{y \to b} f(x,y) = A = \lim_{y \to b} \lim_{x \to a} f(x,y).
$$

> /proof/
>
> 以 $A$ 有限为例。由假设，任给 $\varepsilon > 0$，存在 $\delta > 0$，当  
> $$
> 0 < \sqrt{(x - a)^2 + (y - b)^2} < \delta
> $$
> 时 $|f(x,y) - A| < \dfrac{\varepsilon}{2}$。固定 $y$，令 $x \to a$，得  
> $$
> \left|\lim_{x \to a} f(x,y) - A\right| \leqslant \frac{\varepsilon}{2} < \varepsilon,\quad \forall\,0 < |y - b| < \frac{\delta}{2}.
> $$
> 这说明  
> $$
> \lim_{y \to b} \lim_{x \to a} f(x,y) = A.
> $$
> 其它情形可类似证明

## Part 3 导数

### · 定义

**定义1 (方向导数)**. 

> 设 $D$ 为 $\mathbb{R}^n$ 中的开集，$f: D \to \mathbb{R}$ 为 $D$ 中定义的函数. 对于 $p \in D$，以及 $\mathbb{R}^n$ 中单位向量 $u$，极限
>
> $$
> \lim_{t \to 0} \frac{f(p + tu) - f(p)}{t} 
> $$
>
> 如果存在，则称 $f$ 在 $p$ 处沿方向 $u$ 有方向导数，上述极限记为 $\dfrac{\partial f}{\partial u}(p)$，称为 $f$ 沿 $u$ 的方向导数. 

> [!important]
>
> (1) 方向导数就是一元函数 $\varphi(t) = f(p + tu)$ 在 $t = 0$ 处的导数. 特别地，当 $u = e_i = (0, \cdots, 0, 1, 0, \cdots, 0)$（第 $i$ 个位置为 1 的单位向量）时，又将 $\dfrac{\partial f}{\partial u}(p)$ 记为 $\dfrac{\partial f}{\partial x_i}(p)$，称为 $f$ 的第 $i$ 个偏导数. 按定义，有
>
> $$
> \frac{\partial f}{\partial x_i}(p) = \lim_{t \to 0} \frac{f(p_1, \cdots, p_{i-1}, p_i + t, p_{i+1}, \cdots, p_n) - f(p_1, \cdots, p_n)}{t}. 
> $$
>
> (2) 偏导数 $\dfrac{\partial f}{\partial x_i}$ 又记为 $f'_{x_i}$ 或 $f_{x_i}$. 如果 $f'_{x_i} = \dfrac{\partial f}{\partial x_i}$ 仍然可求偏导数，则记 $f''_{y_i x_i} = \dfrac{\partial}{\partial y_i} \left( \dfrac{\partial f}{\partial x_i} \right)$，$f''_{x_i y_i} = \dfrac{\partial}{\partial x_i} \left( \dfrac{\partial f}{\partial y_i} \right)$，称为 2 阶偏导数. 类似地可以定义高阶偏导数. 
>
> 如果 $f$ 存在直到 $k$ 阶的连续偏导数，则称 $f$ 为 $C^k$ 函数. 我们也使用形如这样的记号：
> $$
> \frac{\partial^2 f}{\partial x_i^2} = \frac{\partial}{\partial x_i} \left( \frac{\partial f}{\partial x_i} \right), \quad \frac{\partial^2 f}{\partial x_i \partial y_i} = \frac{\partial}{\partial x_i} \left( \frac{\partial f}{\partial y_i} \right), \cdots.
> $$

/example/  设 $(x_0, y_0, z_0) \in \mathbb{R}^3$，求函数的偏导数

$$
f(x, y, z) = \left[ (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 \right]^{-\frac{1}{2}}
$$

> 记
>
> $$
> r = \left[ (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 \right]^{\frac{1}{2}} 
> $$
>
> 则
>
> $$
> \frac{\partial f}{\partial x} = -\frac{1}{r^2} \cdot \frac{\partial r}{\partial x} = -\frac{1}{r^2} \cdot \frac{x - x_0}{r} = -\frac{x - x_0}{r^3}. 
> $$
>
> 同理，
>
> $$
> \frac{\partial f}{\partial y} = -\frac{y - y_0}{r^3}, \quad \frac{\partial f}{\partial z} = -\frac{z - z_0}{r^3}. 
> $$

和一元函数不同的是，偏导数的存在不能保证多元函数的连续性，这是因为偏导数只反映函数沿特定方向的性质. 

> /example/
>
> 设
>
> $$
> f(x, y) = 
> \begin{cases} 
> 0, & \text{when } x \cdot y = 0, \\ 
> 1, & \text{when } x \cdot y \ne 0, 
> \end{cases}
> $$
>
> 则
>
> $$
> \begin{aligned}
> \frac{\partial f}{\partial x}(0, 0) &= \lim_{x \to 0} \frac{f(x, 0) - f(0, 0)}{x} = 0, \\\\
> \frac{\partial f}{\partial y}(0, 0) &= \lim_{y \to 0} \frac{f(0, y) - f(0, 0)}{y} = 0.
> \end{aligned}
> $$
>
> 显然，$f$ 在 $(0, 0)$ 处不连续. 

**定理1 (复合求导)**. 设 $f$ 如前，$x^0 \in D$. 假设 $f'_{x_i}$ ($1 \le i \le n$) 在 $x^0$ 处连续，则

(1) $f$ 在 $x^0$ 处连续；

(2) 如果 $x_i = x_i(t)$ 在 $t_0$ 处可导，$x^0 = (x_1(t_0), \cdots, x_n(t_0))$，则 $f(x(t))$ 在 $t = t_0$ 处可导，且

$$
\left. \frac{df(x(t))}{dt} \right|_{t = t_0} = \sum_{i=1}^n \frac{\partial f}{\partial x_i}(x(t_0)) \cdot \frac{dx_i}{dt}(t_0).
$$

> (1) 利用微分中值定理，有
>
> $$
> \begin{aligned}
> f(x) - f(x^0) &= \sum_{i=1}^n \left[ f(x_1^0, \cdots, x_{i-1}^0, x_i, \cdots, x_n) - f(x_1^0, \cdots, x_{i-1}^0, x_i^0, x_{i+1}^0, \cdots, x_n) \right] \\\\
> &= \sum_{i=1}^n f'_{x_i}(x_1^0, \cdots, x_{i-1}^0, \xi_i, x_{i+1}, \cdots, x_n) \cdot (x_i - x_i^0),
> \end{aligned}
> $$
>
> 当 $x \to x^0$ 时，$\xi_i \to x_i^0$，由 $f'_{x_i}$ 在 $x^0$ 处连续知 $\displaystyle\lim_{x \to x^0} (f(x) - f(x^0)) = 0$. 
>
> (2) 由 (1) 的证明，有
>
> $$
> \begin{aligned}
> \left. \frac{df}{dt} \right|_{t = t_0} &= \lim_{t \to t_0} \frac{f(x(t)) - f(x(t_0))}{t - t_0} \\\\ 
> &= \lim_{t \to t_0} \sum_{i=1}^n f'_{x_i}(x_1^0, \cdots, x_{i-1}^0, \xi_i, x_{i+1}, \cdots, x_n) \cdot \frac{x(t) - x_i(t_0)}{t - t_0} \\\\
> &= \sum_{i=1}^n f'_{x_i}(x^0) \cdot x'_i(t_0).
> \end{aligned}
> $$
>
> 这就证明了定理. 

**推论2**. 在定理的条件下，如果 $u = \sum_{i=1}^n u_i \cdot e_i = (u_1, u_2, \cdots, u_n)$，则
$$
\frac{\partial f}{\partial u}(p) = \left. \frac{d}{dt} \right|_{t=0} f(p + tu) = \sum_{i=1}^n \frac{\partial f}{\partial x_i}(p) \cdot u_i.
$$

**定理3 (求导次序的可交换性)**. 设 $f: D \to \mathbb{R}$ 为二元函数，$(x_0, y_0) \in D$. 如果 $f''_{xy}$ 和 $f''_{yx}$ 在 $(x_0, y_0)$ 处连续，则
$$
f''_{xy}(x_0, y_0) = f''_{yx}(x_0, y_0).
$$

> 对于充分小的 $k \ne 0$，$h \ne 0$ 分别考虑函数
>
> $$
> \varphi(y) = f(x_0 + h, y) - f(x_0, y), \\ 
> \psi(x) = f(x, y_0 + k) - f(x, y_0). 
> $$
>
> 由微分中值定理，有
>
> $$
> \begin{aligned}
> \varphi(y_0 + k) - \varphi(y_0) &= \varphi'_y(y_0 + \theta_1 k) k \quad (0 < \theta_1 < 1) \\\\
> &= [f'_y(x_0 + h, y_0 + \theta_1 k) - f'_y(x_0, y_0 + \theta_1 k)] k \\\\
> &= f''_{xy}(x_0 + \theta_2 h, y_0 + \theta_1 k) h k. \quad (0 < \theta_2 < 1)
> \end{aligned}
> $$
>
> 同理，
>
> $$
> \psi(x_0 + h) - \psi(x_0) = f''_{yx}(x_0 + \theta_3 h, y_0 + \theta_4 k) h k, \quad (0 < \theta_3, \theta_4 < 1). 
> $$
>
> 易见，
>
> $$
> \varphi(y_0 + k) - \varphi(y_0) = \psi(x_0 + h) - \psi(x_0), 
> $$
>
> 故有
>
> $$
> f''_{xy}(x_0 + \theta_2 h, y_0 + \theta_1 k) = f''_{yx}(x_0 + \theta_3 h, y_0 + \theta_4 k). 
> $$
>
> 令 $k, h \to 0$，由 $f''_{xy},\ f''_{yx}$ 在 $(x_0, y_0)$ 处连续即得欲证等式. 

**推论4**. 多元函数的各阶偏导数如果连续，则其值与求导次序无关. 

### · 几何应用

设 $\sigma: [\alpha, \beta] \to \mathbb{R}^n$ 为连续映射，称 $\sigma$ 为 $\mathbb{R}^n$ 中的一条连续曲线. 记

$$
 \sigma(t) = (x_1(t), \cdots, x_n(t)), \quad t \in [\alpha, \beta]. 
$$

如果 $x_i(t)$ ($1 \le i \le n$) 在 $t = t_0$ 处均可导，则称 $\sigma$ 在 $t_0$ 处可导，记

$$
 \sigma'(t_0) = \frac{d\sigma}{dt}(t_0) = \left. \frac{d\sigma}{dt} \right|_{t = t_0} = (x'_1(t_0), \cdots, x'_n(t_0)), 
$$

称 $\sigma'(t_0)$ 为 $\sigma$ 在 $t_0$ 处的切向量. 

当 $\sigma'(t_0) \ne 0$ 时，称 $\{ \sigma(t_0) + \sigma'(t_0) u \mid u \in \mathbb{R} \}$ 为 $\sigma$ 在 $t_0$ 处的切线，其方程可写为 $p - \sigma(t_0) = u \cdot \sigma'(t_0)$，或

$$
 \frac{x - x_0}{x'_1(t_0)} = \frac{y - y_0}{x'_2(t_0)} = \frac{z - z_0}{x'_3(t_0)}. 
$$

经过 $\sigma(t_0)$ 且与切线正交的超平面称为法面，其方程为

$$
(q - \sigma(t_0)) \cdot \sigma'(t_0) = 0.
$$
/example/

> 设 $f$ 为一元可微函数，令
>
> $$
> \sigma(t) = (t, f(t)), 
> $$
>
> 则 $\sigma'(t_0) = (1, f'(t_0))$，$\sigma$ 在 $t_0$ 处切线方程为
>
> $$
> \frac{x - t_0}{1} = \frac{y - f(t_0)}{f'(t_0)}, 
> $$
>
> 即
>
> $$
> y = f(t_0) + f'(t_0)(x - t_0). 
> $$
>
> 这也就是一元函数图像的切线. 

/example/  求螺旋线的切线和法面方程

$$
 \sigma(t) = (a \cos t, a \sin t, t), \quad t \in \mathbb{R} 
$$

> 在 $t = t_0$ 处，$\sigma'(t_0) = (-a \sin t_0, a \cos t_0, 1)$，故切线方程为
>
> $$
> \frac{x - a \cos t_0}{-a \sin t_0} = \frac{y - a \sin t_0}{a \cos t_0} = \frac{z - t_0}{1}, 
> $$
>
> 法面方程化简后为 $-x a \sin t_0 + y a \cos t_0 + z - t_0 = 0$. 
>
> 设 $D$ 为 $\mathbb{R}^m$ 中的开集，我们称连续映射 $r: D \to \mathbb{R}^n$ ($n > m$) 为 $\mathbb{R}^n$ 中的一个参数曲面. 设 $u^0 = (u_1^0, \cdots, u_m^0) \in D$，则
>
> $$
> u \mapsto r(u_1^0, \cdots, u_{i-1}^0, u, u_{i+1}^0, \cdots, u_m^0) 
> $$
>
> 为 $\mathbb{R}^n$ 中曲线，称为参数曲面上的 $u_i$ 曲线. 如果 $u_i$ 曲线在 $u_i^0$ 处可导，则记
>
> $$
> \frac{\partial r}{\partial u_i}(u^0) = r_{u_i}(u^0) = r'_{u_i}(u^0), 
> $$
>
> 它是该曲线在 $u^0$ 处的切向量. 如果 $\{ r'_{u_i}(u^0) \mid 1 \le i \le m \}$ 线性无关（此时称 $u^0$ 为正则点），则称由这些切向量张成的、经过 $r(u^0)$ 的子线性空间为切空间，切空间的正交补称为法空间，法空间中的向量称为法向量. 
>
> 对于 $\mathbb{R}^3$ 中的曲面，设其参数表示为
>
> $$
> r(u, v) = (x(u, v), y(u, v), z(u, v)), 
> $$
>
> 则其切向量为
>
> $$
> \begin{aligned}
> r'_u(u_0, v_0) &= (x'_u(u_0, v_0), y'_u(u_0, v_0), z'_u(u_0, v_0)), \\\\
> r'_v(u_0, v_0) &= (x'_v(u_0, v_0), y'_v(u_0, v_0), z'_v(u_0, v_0)).
> \end{aligned}
> $$
>
> 如果 $r'_u(u_0, v_0)$，$r'_v(u_0, v_0)$ 线性无关，则
>
> $$
> \begin{aligned}
> \vec{n} &= r'_u(u_0, v_0) \times r'_v(u_0, v_0) \\\\
> &= (y'_u z'_v - z'_u y'_v, \; z'_u x'_v - x'_u z'_v, \; x'_u y'_v - y'_u x'_v) \ne 0,
> \end{aligned}
> $$
>
> $\vec{n}$ 为法向量，从而曲面的切平面方程为
>
> $$
> (p - r(u_0, v_0)) \cdot \vec{n} = 0 
> $$
>
> 或改写为
>
> $$
> \begin{vmatrix} 
> x - x(u_0, v_0) & y - y(u_0, v_0) & z - z(u_0, v_0) \\\\
> x'_u(u_0, v_0) & y'_u(u_0, v_0) & z'_u(u_0, v_0) \\\\ 
> x'_v(u_0, v_0) & y'_v(u_0, v_0) & z'_v(u_0, v_0) 
> \end{vmatrix} = 0.
> $$

/example/  求球面 $S^2 = \{ (x, y, z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 = 1 \}$ 的切面. 

> 球面可写成参数曲面
>
> $$
> x = \sin \theta \cos \varphi, \; y = \sin \theta \sin \varphi, \; z = \cos \theta, 
> $$
>
> 其中 $0 \le \theta \le \pi$，$0 \le \varphi \le 2\pi$. 其法向量为
>
> $$
> \begin{aligned}
> \vec{n} &= (\cos \theta \cos \varphi, \cos \theta \sin \varphi, -\sin \theta) \times (-\sin \theta \sin \varphi, \sin \theta \cos \varphi, 0) \\\\ 
> &= \sin \theta \cdot (x, y, z),
> \end{aligned}
> $$
>
> 故球面在 $(x_0, y_0, z_0)$ 处切平面方程为
>
> $$
> (x - x_0) \cdot x_0 + (y - y_0) \cdot y_0 + (z - z_0) \cdot z_0 = 0. 
> $$
>
> 一般地，当 $m = n - 1$ 时，称参数曲面 $r: D \to \mathbb{R}^n$ 为超曲面. 如果 $r$ 表示为
>
> $$
> r(u) = r(u_1, \cdots, u_{n-1}) = (x_1(u_1, \cdots, u_{n-1}), \cdots, x_n(u_1, \cdots, u_{n-1})), 
> $$
>
> 在正则点 $u^0$ 处，曲面的 $n - 1$ 个切向量为
>
> $$
> r'_{u_i}(u^0) = \left( \frac{\partial x_1}{\partial u_i}(u^0), \cdots, \frac{\partial x_n}{\partial u_i}(u^0) \right), \quad i = 1, \cdots, n - 1. 
> $$
>
> 记 $\vec{N} = (N_1, \cdots, N_n)$，其中
>
> $$
> N_i = (-1)^{i-1} \frac{\partial (x_1, \cdots, x_{i-1}, x_{i+1} \cdots, x_n)}{\partial (u_1, \cdots, u_{n-1})}(u^0),
> $$
>
> 这里我们采用了下面的记号
>
> $$
> \frac{\partial (x_1, \cdots, x_{i-1}, x_{i+1} \cdots, x_n)}{\partial (u_1, \cdots, u_{n-1})}(u^0) = \det 
> \begin{pmatrix} 
> \dfrac{\partial x_1}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_1}{\partial u_{n-1}}(u^0) \\ 
> \vdots & \ddots & \vdots \\
> \dfrac{\partial x_{i-1}}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_{i-1}}{\partial u_{n-1}}(u^0) \\\\
> \dfrac{\partial x_{i+1}}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_{i+1}}{\partial u_{n-1}}(u^0) \\ 
> \vdots & \ddots & \vdots \\ 
> \dfrac{\partial x_n}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_n}{\partial u_{n-1}}(u^0) 
> \end{pmatrix}.
> $$
>
> 根据矩阵行列式的性质，$\vec{N}$ 与 $r'_{u_i}(u^0)$ ($1 \le i \le n - 1$) 均正交，即 $\vec{N}$ 是曲面的法向量. 
