---
title: Chapter 6 线性映射基础
permalink: /algebra/algebra-6/
createTime: 2025/12/18 17:43:53
---

## Part 1 线性映射的概念

### · 映射

所谓映射，是指从一个集合 $A$ 到另一个集合 $B$ 的对应 $\varphi: A \to B$. 

对 $A$ 中任一元素 $a$，均有唯一的元素 $b \in B$ 与之对应，记之为 $b = \varphi(a)$. 元素 $b$ 称为 $a$ 在 $\varphi$ 下的像，$a$ 称为元素 $b$ 的原像或逆像. 

$A$ 中元素在 $\varphi$ 下的像全体构成 $B$ 的一个子集，记之为 $\varphi(A)$ 或 $\operatorname{Im} \varphi$. 

如果 $\operatorname{Im} \varphi = B$，即 $B$ 中任一元素 $b$ 均在 $A$ 中有元素 $a$，使 $b = \varphi(a)$，则称 $\varphi$ 是满映射或称 $\varphi$ 是映上的映射. 

> 如果映射 $\varphi$ 适合下列条件：若 $a \ne a'$，则 $\varphi(a) \ne \varphi(a')$，那么就称 $\varphi$ 是单映射. 
>
> 单映射的另外一个等价说法是从 $\varphi(a) = \varphi(a')$ 可推出 $a = a'$. 如果 $\varphi$ 既是单映射又是满映射，则称 $\varphi$ 是双射. 
>
> 这时不仅对 $A$ 中的任一元素，有且仅有 $B$ 中的一个元素与之对应；而且对 $B$ 中的任一元素，有且仅有 $A$ 中的一个元素与之对应. 
>
> 因此，双射又称为一一对应. 

设 $M_n(\mathbb{R})$ 是实数域 $\mathbb{R}$ 的 $n (n > 1)$ 阶方阵全体组成的集合，定义 $M_n(\mathbb{R}) \to \mathbb{R}$ 的映射为：$\varphi(A) = \det A$，则 $\varphi$ 是映射，且这是个映上的映射，但它不是单映射. 事实上，对 $\mathbb{R}$ 中任意一个实数，均有无穷多个矩阵，其行列式值等于这个实数. 

> Descartes 平面上的点到实数偶之间的对应：
> $$
> \varphi: C \mapsto (a,b),
> $$
> 其中点 $C$ 的横坐标为 $a$，纵坐标为 $b$. 这是一个映射且是一个双射，即一一对应. 

若集合 $A$ 是集合 $B$ 的子集，作 $A \to B$ 的映射 $j$：
$$
j(a) = a,\ a \in A,
$$
则 $j$ 是一个映射且显然是单映射. 若 $A = B$，则 $j$ 是一个一一对应，这时映射 $j$ 实际上把 $A$ 中任一元素映射为自身，因此称为恒等映射，记为 $1_A$ 或 $I_A$. 

一个集合 $A$ 到自身的映射通常称为变换，比如 $y = x^2$ 可以看成是 $\mathbb{R}$ 自身的变换. 

集合 $A$ 到 $B$ 的两个映射 $f$ 与 $g$ 称为是相等的当且仅当对任意的 $a \in A$，都有 $f(a) = g(a)$，这时记 $f = g$. 

若 $f$ 是集合 $A \to B$ 的映射，$g$ 是集合 $B \to C$ 的映射，定义映射 $g$ 与 $f$ 的复合 $g \circ f$ 为集合 $A \to C$ 的映射，且
$$
(g \circ f)(a) = g(f(a)),\ a \in A.
$$
这里需要注意的是并非任意两个映射都有复合. 只有当 $f$ 的像落在 $g$ 所定义的集合上时才可定义 $g$ 与 $f$ 的复合. 如果 $A = B$，那么 $A$ 上的任意两个变换都可复合. 

若 $f$ 是 $A \to B$ 的映射，$g$ 是 $B \to C$ 的映射，$h$ 是 $C \to D$ 的映射，则 $h \circ (g \circ f)$ 及 $(h \circ g) \circ f$ 都是 $A \to D$ 的映射且对任意的 $a \in A$，有
$$
((h \circ g) \circ f)(a) = (h \circ g)(f(a)) = h(g(f(a))),
$$
$$
(h \circ (g \circ f))(a) = h((g \circ f)(a)) = h(g(f(a))),
$$
因此
$$
(h \circ g) \circ f = h \circ (g \circ f).
$$
上式通常称为映射复合的结合律. 正因为如此，我们写 3 个（或 3 个以上）映射的复合时常省略去括号，写为 $h \circ g \circ f$. 通常复合号 “$\circ$” 也省略，即 $g \circ f$ 写为 $gf$. 

下面我们着重讨论一下双射. 

> 设 $f$ 是 $A \to B$ 的双射，我们定义 $B \to A$ 的映射 $g$ 如下：对任一 $b \in B$，取 $b$ 在 $f$ 下的原像记为 $a$，定义 $g(b) = a$. 由于 $f$ 是双射，故对 $B$ 中的元素 $b$，有且仅有一个 $a$ 作为 $b$ 在 $f$ 下的原像. 
>
> 因此 $g$ 确是 $B \to A$ 的映射. 不仅如此，显然 $g$ 也是一个双射，且
> $$
> gf = 1_A,\ fg = 1_B.
> $$
> 我们称 $g$ 是 $f$ 的逆映射，记为 $g = f^{-1}$. 

**命题1**. 设 $f$ 是集合 $A \to B$ 的映射，如果存在 $B \to A$ 的映射 $g$，使
$$
gf = 1_A,\ fg = 1_B,
$$
则 $f$ 是双射且 $g = f^{-1}$. 

> 先证 $f$ 是单映射：若 $f(a_1) = f(a_2)$，则由 $gf(a_1) = 1_A(a_1) = a_1$，$gf(a_2) = 1_A(a_2) = a_2$，知 $a_1 = a_2$，因此 $f$ 为单映射. 
>
> 又对 $B$ 中任一元素 $b$，$g(b) \in A$ 且 $fg(b) = 1_B(b) = b$. 因此 $g(b)$ 是 $b$ 在 $f$ 下的原像，即 $f$ 是映上的映射. 

从命题1 的证明中可看出，从 $gf = 1_A$ 可推出 $f$ 是单映射，从 $fg = 1_B$ 可推出 $f$ 是满映射. 

### · 线性映射

现在我们转而来考虑线性映射. 

**定义1** 

> 设 $\varphi$ 是数域 $\mathbb{K}$ 上线性空间 $V$ 到 $\mathbb{K}$ 上线性空间 $U$ 的映射，如果 $\varphi$ 适合下列条件：
>
> (1) $\varphi(\alpha + \beta) = \varphi(\alpha) + \varphi(\beta)$，$\alpha, \beta \in V$；
>
> (2) $\varphi(k\alpha) = k\varphi(\alpha)$，$k \in \mathbb{K}$，$\alpha \in V$，
>
> 则称 $\varphi$ 是 $V \to U$ 的线性映射. $V$ 到自身的线性映射称为 $V$ 上的线性变换. 若 $\varphi: V \to U$ 作为映射是单的，则称 $\varphi$ 是单线性映射；如 $\varphi$ 作为映射是满的，则称 $\varphi$ 是满线性映射. 
>
> 若 $\varphi$ 是双射，则称 $\varphi$ 是线性同构，简称同构. 若 $V = U$，$V$ 自身上的同构称为自同构. 

/example/

> 设 $V,U$ 是 $\mathbb{K}$ 上的线性空间，定义 $\varphi$ 为 $V \to U$ 的映射，且对一切 $\alpha \in V$，$\varphi(\alpha) = 0$，则 $\varphi$ 是一个线性映射，称之为零映射，通常记为 $0$，但要注意这是一个映射. 
>
> ***
>
> 设 $V$ 是 $\mathbb{K}$ 上的线性空间，定义 $V$ 到自身的映射为恒等映射 $1_V$，则显然 $1_V$ 是 $V$ 上的线性变换，称为恒等变换，记为 $I_V$ 或 $Id_V$，在不致于混淆的情形下，也简记为 $I$. 
>
> ***
>
> 设 $V = \mathbb{K}_n$，$U = \mathbb{K}_m$ 分别是数域 $\mathbb{K}$ 上的 $n$ 维和 $m$ 维列向量空间，$A$ 是 $\mathbb{K}$ 上一个已知的 $m \times n$ 矩阵，定义 $V \to U$ 的映射 $\varphi$ 为
> $$
> \varphi(\alpha) = A\alpha.
> $$
> 这个映射由矩阵乘法定义（$m \times n$ 矩阵乘以 $n$ 维列向量是一个 $m$ 维列向量），由矩阵乘法性质容易验证 $\varphi$ 是一个线性映射. 
>
> ***
>
> 设 $\mathbb{K}^n$ 是 $\mathbb{K}$ 上 $n$ 维行向量空间，$\mathbb{K}_n$ 是 $\mathbb{K}$ 上 $n$ 维列向量空间，定义 $\mathbb{K}^n \to \mathbb{K}_n$ 的映射 $\varphi$：
> $$
> (a_1, a_2, \cdots, a_n) \mapsto \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix},
> $$
> 则容易验证 $\varphi$ 是线性同构. 
>
> ***
>
> 设 $V$ 是 $\mathbb{K}$ 上的线性空间，定义 $V$ 上变换 $\varphi$，对任意的 $\alpha \in V$，有
> $$
> \varphi(\alpha) = k\alpha,
> $$
> 其中 $k$ 是一个固定常数，则 $\varphi$ 是 $V$ 上线性变换，这个变换常称之为纯量变换或数量变换. 
>
> ***
>
> 设 $V$ 是区间 $[0,1]$ 上的实无穷次可微函数全体组成的实线性空间，定义 $\varphi$ 为求导变换
> $$
> \varphi(f(x)) = \frac{\mathrm{d}}{\mathrm{d}x}f(x),
> $$
> 由求导性质知 $\varphi$ 是 $V$ 上的线性变换. 

**命题2**：设 $\varphi$ 是 $V \to U$ 的线性映射，则

(1) $\varphi(0) = 0$；

(2) $\varphi(k\alpha + l\beta) = k\varphi(\alpha) + l\varphi(\beta)$，$\alpha, \beta \in V$，$k, l \in \mathbb{K}$；

(3) 若 $\varphi$ 是同构，则其逆映射 $\varphi^{-1}$ 也是线性映射，从而是 $U \to V$ 的同构. 

> (1).
> $$
> \varphi(0) = \varphi(0 \cdot \alpha) = 0 \cdot \varphi(\alpha) = 0
> $$
> (2).
> $$
> \varphi(k\alpha + l\beta) = \varphi(k\alpha) + \varphi(l\beta) = k\varphi(\alpha) + l\varphi(\beta)
> $$
> (3). 省略

> [!important]
>
> **注意** 若 $V \to U$ 的一个映射 $\varphi$ 适合命题2中的 (2)，则 $\varphi$ 必是线性映射. 在线性映射的定义中，我们要求 $V$ 与 $U$ 都是数域 $\mathbb{K}$ 上的线性空间，不同数域上线性空间之间的映射不是线性映射. 

## Part 2 线性映射的运算

> 任意一个 $m \times n$ 矩阵 $A$ 都可以定义一个从 $n$ 维列向量空间到 $m$ 维列向量空间的线性映射：$\varphi(\alpha) = A\alpha$. 
>
> 如果另有一个 $m \times n$ 矩阵 $B$，它定义的线性映射是 $\psi(\alpha) = B\alpha$，注意到矩阵之间存在的运算，我们可以定义这两个映射的加法：$(\varphi + \psi)(\alpha) = (A + B)\alpha$. 
>
> 显然这仍是一个线性映射. 
>
> 类似地，我们还可定义线性映射的数乘：$(k\varphi)(\alpha) = kA\alpha$. 对一般的线性映射，我们是否也可以定义它们的加法和数乘呢？

**定义1**：

> 设 $\varphi, \psi$ 是 $\mathbb{K}$ 上线性空间 $V \to U$ 的线性映射，定义 $\varphi + \psi$ 为 $V \to U$ 的映射：
> $$
> (\varphi + \psi)(\alpha) = \varphi(\alpha) + \psi(\alpha),\ \alpha \in V.
> $$
> 若 $k \in \mathbb{K}$，定义 $k\varphi$ 为 $V \to U$ 的映射：
> $$
> (k\varphi)(\alpha) = k\varphi(\alpha),\ \alpha \in V.
> $$
> 容易验证 $\varphi + \psi$ 是线性映射. 事实上
> $$
> \begin{aligned}
> (\varphi + \psi)(k\alpha + l\beta) &= \varphi(k\alpha + l\beta) + \psi(k\alpha + l\beta) \\\\
> &= \varphi(k\alpha) + \varphi(l\beta) + \psi(k\alpha) + \psi(l\beta) \\\\
> &= k\varphi(\alpha) + l\varphi(\beta) + k\psi(\alpha) + l\psi(\beta) \\\\
> &= k(\varphi(\alpha) + \psi(\alpha)) + l(\varphi(\beta) + \psi(\beta)) \\\\
> &= k(\varphi + \psi)(\alpha) + l(\varphi + \psi)(\beta).
> \end{aligned}
> $$
> 同理可证明 $k\varphi$ 也是线性映射. 
>
> 若 $U = \mathbb{K}$，即把 $\mathbb{K}$ 看成是 $\mathbb{K}$ 上的一维空间，则 $V \to \mathbb{K}$ 的线性映射通常称为 $V$ 上的线性函数. 

现在我们考虑从 $V$ 到 $U$ 的线性映射全体组成的集合 $\mathcal{L}(V,U)$. 在这个集合上，既然我们定义了加法和数乘，它是一个线性空间吗？

**命题1**： 设 $\mathcal{L}(V,U)$ 是 $V \to U$ 的线性映射全体，则在上述线性映射的加法及数乘定义下，$\mathcal{L}(V,U)$ 是 $\mathbb{K}$ 上的线性空间. 特别，$V \to \mathbb{K}$ 上的所有线性函数全体构成一个线性空间. 

> [!important]
>
> 这个命题的证明很容易，只需按照线性空间的定义逐条验证即可. $V$ 上的所有线性函数构成的线性空间通常称为 $V$ 的共轭空间，记为 $V^*$. 当 $V$ 是有限维空间时，$V^*$ 也称为 $V$ 的对偶空间. 
>
> 如果 $V = U$，我们用 $\mathcal{L}(V)$ 来记 $\mathcal{L}(V,V)$，即 $V$ 上线性变换全体组成的集合. 这时在 $\mathcal{L}(V)$ 上，除了加法和数乘运算外，还有乘法运算，这个乘法就是映射的复合. 

**定义2**：

> 设 $A$ 是数域 $\mathbb{K}$ 上的线性空间，如果在 $A$ 上定义了一个乘法 “$\cdot$”（通常可以省略），使对任意 $A$ 中元素 $a,b,c$ 及 $\mathbb{K}$ 中元素 $k$，适合下列条件：
>
> (1) 乘法结合律：$a \cdot (b \cdot c) = (a \cdot b) \cdot c$；
>
> (2) 存在 $A$ 中元 $e$，使对一切 $a \in A$，均有
> $$
> e \cdot a = a \cdot e = a；
> $$
>
> (3) 分配律：
> $$
> a \cdot (b + c) = a \cdot b + a \cdot c, \\
> (b + c) \cdot a = b \cdot a + c \cdot a；
> $$
>
> (4) 乘法与数乘的相容性：
> $$
> (ka) \cdot b = k(a \cdot b) = a \cdot (kb),
> $$
> 则称 $A$ 是数域 $\mathbb{K}$ 上的代数，元素 $e$ 称为 $A$ 的恒等元. 
>
> **注意**.  $A$ 的恒等元常用 $1$ 表示，注意不要与数 $1$ 混淆. 

**定理1** 设 $V$ 是数域 $\mathbb{K}$ 上的线性空间，则 $\mathcal{L}(V)$ 是 $\mathbb{K}$ 上的代数. 

> 由命题1，$\mathcal{L}(V)$ 是 $\mathbb{K}$ 上的线性空间. 我们逐条来验证定义2. 
>
> (1) 乘法结合律实际上就是映射复合的结合律，因此自然成立. 
>
> (2) 设 $1_V$ 是 $V$ 上的恒等映射，由上节可知它是线性变换，显然对任意的 $\varphi \in \mathcal{L}(V)$，有
> $$
> 1_V \circ \varphi = \varphi \circ 1_V = \varphi,
> $$
> 因此 $1_V$ 是 $\mathcal{L}(V)$ 的恒等元. 
>
> (3) 设 $\varphi_1, \varphi_2, \varphi_3$ 都是 $V$ 上线性变换，对任意的 $\alpha \in V$，有
> $$
> \begin{aligned}
> (\varphi_1 \circ (\varphi_2 + \varphi_3))(\alpha) &= \varphi_1((\varphi_2 + \varphi_3)(\alpha)) \\\\
> &= \varphi_1(\varphi_2(\alpha) + \varphi_3(\alpha)) \\\\
> &= \varphi_1(\varphi_2(\alpha)) + \varphi_1(\varphi_3(\alpha)) \\\\
> &= (\varphi_1 \circ \varphi_2)(\alpha) + (\varphi_1 \circ \varphi_3)(\alpha) \\\\
> &= (\varphi_1 \circ \varphi_2 + \varphi_1 \circ \varphi_3)(\alpha).
> \end{aligned}
> $$
> 因此
> $$
> \varphi_1 \circ (\varphi_2 + \varphi_3) = \varphi_1 \circ \varphi_2 + \varphi_1 \circ \varphi_3.
> $$
> 同理可证明另外一个分配律. 
>
> (4) 设 $k$ 是 $\mathbb{K}$ 中任一数，$\varphi, \psi$ 为 $V$ 上线性变换，则对 $V$ 中任意的 $\alpha$，有
> $$
> \begin{aligned}
> \bigl((k\varphi) \circ \psi\bigr)(\alpha) &= (k\varphi)(\psi(\alpha)) = k\bigl(\varphi(\psi(\alpha))\bigr) \\
> &= k\bigl((\varphi \circ \psi)(\alpha)\bigr) = \bigl(k(\varphi \circ \psi)\bigr)(\alpha),
> \end{aligned}
> $$
> 从而
> $$
> (k\varphi) \circ \psi = k(\varphi \circ \psi).
> $$
> 同理可证明
> $$
> \varphi \circ (k\psi) = k(\varphi \circ \psi).\
> $$
>

在 $\mathcal{L}(V)$ 中，定义线性变换 $\varphi$ 的 $n$ 次幂为 $n$ 个 $\varphi$ 的复合，则不难验证：
$$
\varphi^n \circ \varphi^m = \varphi^{n+m},\ (\varphi^n)^m = \varphi^{nm}.
\tag{1}
$$
若 $\varphi$ 是双射，即为 $V$ 上的自同构，则 $\varphi^{-1}$ 也是 $V$ 上的线性映射（也是自同构），称 $\varphi^{-1}$ 为 $\varphi$ 的逆变换. 如定义
$$
\varphi^{-n} = (\varphi^{-1})^n,
$$
则不难验证：
$$
\varphi^{-n} = (\varphi^n)^{-1}.
\tag{2}
$$
这时定义
$$
\varphi^0 = I_V,
$$
则 (1) 式对一切整数均成立. 但需注意 $\varphi$ 的负数次幂仅对自同构（又称可逆变换或非异变换）有意义. 

> 需要特别注意的是，线性变换的复合通常不满足交换律，即一般来说
> $$
> \varphi \circ \psi \ne \psi \circ \varphi.
> $$
> 因此一般来说 $(\varphi \circ \psi)^n \ne \varphi^n \circ \psi^n$. 
>
> 如果 $\varphi$ 与 $\psi$ 都是可逆线性变换，则 $\varphi \circ \psi$ 也是可逆线性变换，且
> $$
> (\varphi \circ \psi)^{-1} = \psi^{-1} \circ \varphi^{-1}.
> $$
> 对任一非零数 $k$，若 $\varphi$ 可逆，则 $k\varphi$ 也可逆，且
> $$
> (k\varphi)^{-1} = k^{-1}\varphi^{-1}.
> $$

## Part 3 线性映射与矩阵

线性映射是一个比较抽象的“几何”概念，不便于计算和研究. 我们要将这个抽象的概念“代数化”. 

通过引进线性空间的基，将抽象的线性空间和行向量空间或列向量空间联系了起来. 我们也注意到，可以用矩阵来定义列向量空间的线性映射. 因此自然地，我们希望将线性映射和矩阵联系起来. 

首先注意到如果取定线性空间 $V$ 的一组基，则从 $V$ 到另一个线性空间 $U$ 的线性映射 $\varphi$ 完全被它在基上的作用所决定，即我们有下面的引理. 

**引理1** 设有 $\mathbb{K}$ 上线性空间 $V$ 和 $U$，$\{e_1, e_2, \cdots, e_n\}$ 是 $V$ 的一组基，则

(1) 如有 $V$ 到 $U$ 的线性映射 $\varphi$ 和 $\psi$，对任意的 $i$，都有 $\psi(e_i) = \varphi(e_i)$，则 $\psi = \varphi$；

(2) 给定 $U$ 中 $n$ 个向量 $\beta_1, \beta_2, \cdots, \beta_n$，有且只有一个从 $V$ 到 $U$ 的线性映射 $\varphi$，满足 $\varphi(e_i) = \beta_i\ (i=1,2,\cdots,n)$. 

> (1) 对任意的 $\alpha \in V$，设 $\alpha = \lambda_1 e_1 + \lambda_2 e_2 + \cdots + \lambda_n e_n$，则
> $$
> \begin{aligned}
> \psi(\alpha) &= \psi(\lambda_1 e_1 + \lambda_2 e_2 + \cdots + \lambda_n e_n) \\\\
> &= \lambda_1 \psi(e_1) + \lambda_2 \psi(e_2) + \cdots + \lambda_n \psi(e_n) \\\\
> &= \lambda_1 \varphi(e_1) + \lambda_2 \varphi(e_2) + \cdots + \lambda_n \varphi(e_n) \\\\
> &= \varphi(\lambda_1 e_1 + \lambda_2 e_2 + \cdots + \lambda_n e_n) \\\\
> &= \varphi(\alpha),
> \end{aligned}
> $$
> 因此 $\psi = \varphi$. 
>
> (2) 定义 $V \to U$ 的映射 $\varphi$ 如下：对 $V$ 中任意的 $\alpha = \lambda_1 e_1 + \lambda_2 e_2 + \cdots + \lambda_n e_n$，
> $$
> \varphi(\alpha) = \lambda_1 \beta_1 + \lambda_2 \beta_2 + \cdots + \lambda_n \beta_n.
> $$
> 容易验证这是 $V$ 到 $U$ 的线性映射，且 $\varphi(e_i) = \beta_i\ (i=1,2,\cdots,n)$. 唯一性由 (1) 即得. 

### · 坐标向量

考虑这样一个问题：设 $V$ 与 $U$ 分别是数域 $\mathbb{K}$ 上 $n$ 维及 $m$ 维线性空间，$\{e_1, e_2, \cdots, e_n\}$ 是 $V$ 的基；$\{f_1, f_2, \cdots, f_m\}$ 是 $U$ 的基；

又设 $\varphi$ 是 $V \to U$ 的线性映射且 $V$ 的基向量在 $\varphi$ 下的像已知. 

若 $V$ 中向量 $\alpha$ 在给定基下的坐标向量是 $(\lambda_1, \lambda_2, \cdots, \lambda_n)'$，问：如何来求 $\varphi(\alpha)$ 在 $U$ 的基 $\{f_1, f_2, \cdots, f_m\}$ 下的坐标向量？

> 设
> $$
> \left\{
> \begin{aligned}
> \varphi(e_1) &= a_{11}f_1 + a_{12}f_2 + \cdots + a_{1m}f_m, \\\\
> \varphi(e_2) &= a_{21}f_1 + a_{22}f_2 + \cdots + a_{2m}f_m, \\\\
> &\cdots\cdots\cdots\cdots \\\\
> \varphi(e_n) &= a_{n1}f_1 + a_{n2}f_2 + \cdots + a_{nm}f_m.
> \end{aligned}
> \right.
> \tag{1}
> $$
> 因为 $\alpha = \lambda_1 e_1 + \lambda_2 e_2 + \cdots + \lambda_n e_n$，故
> $$
> \begin{aligned}
> \varphi(\alpha) &= \lambda_1 \varphi(e_1) + \lambda_2 \varphi(e_2) + \cdots + \lambda_n \varphi(e_n) \\\\
> &= \lambda_1 \left( \sum_{j=1}^m a_{1j} f_j \right) + \lambda_2 \left( \sum_{j=1}^m a_{2j} f_j \right) + \cdots + \lambda_n \left( \sum_{j=1}^m a_{nj} f_j \right) \\\\
> &= \left( \sum_{i=1}^n \lambda_i a_{i1} \right) f_1 + \left( \sum_{i=1}^n \lambda_i a_{i2} \right) f_2 + \cdots + \left( \sum_{i=1}^n \lambda_i a_{im} \right) f_m.
> \end{aligned}
> $$
> 这表明 $\varphi(\alpha)$ 在 $\{f_1, f_2, \cdots, f_m\}$ 下的坐标向量 $(\mu_1, \mu_2, \cdots, \mu_m)'$ 为
> $$
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_m
> \end{pmatrix}
> =
> \begin{pmatrix}
> a_{11} & a_{21} & \cdots & a_{n1} \\
> a_{12} & a_{22} & \cdots & a_{n2} \\
> \vdots & \vdots & & \vdots \\
> a_{1m} & a_{2m} & \cdots & a_{nm}
> \end{pmatrix}
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix}.
> \tag{2}
> $$
> 上式中的矩阵 $A = (a_{ji})_{m\times n}$ 是 (1) 式中系数矩阵的转置. 我们称这个矩阵为 $\varphi$ 在已给定基 $\{e_1, e_2, \cdots, e_n\}$ 与 $\{f_1, f_2, \cdots, f_m\}$ 下的表示矩阵，或简称为 $\varphi$ 在给定基下的矩阵. 
>
> 注意 (1) 式和 (2) 式是等价的. 我们在上面从 (1) 式推出了 (2) 式. 
>
> 反过来，如果 (2) 式成立，即 $V$ 中向量 $\alpha$ 在线性映射 $\varphi$ 的作用下其坐标向量可以用 (2) 式来表示，则由于 $e_1$ 的坐标向量是 $(1,0,\cdots,0)'$，根据 (2) 式得到 $\varphi(e_1)$ 的坐标向量是 $(a_{11}, a_{12}, \cdots, a_{1m})'$（即表示矩阵的第一个列向量）. 
>
> 因此
> $$
> \varphi(e_1) = a_{11}f_1 + a_{12}f_2 + \cdots + a_{1m}f_m.
> $$
> 同理，
> $$
> \varphi(e_i) = a_{i1}f_1 + a_{i2}f_2 + \cdots + a_{im}f_m.
> $$
> 于是我们得到了 (1) 式. 

### · 线性映射代数化

> 我们在给定基后，由从 $V$ 到 $U$ 的一个线性映射得到了一个 $m \times n$ 矩阵. 反过来，给定一个 $\mathbb{K}$ 上的 $m \times n$ 矩阵 $A = (a_{ji})$，由引理1，我们可以得到 $V \to U$ 的唯一一个线性映射 $\varphi$，使 $\varphi(e_i)$ 适合 (1) 式. 
>
> 若记 $\mathcal{L}(V,U)$ 为所有从 $V$ 到 $U$ 的线性映射组成的集合，$M_{m\times n}(\mathbb{K})$ 是 $\mathbb{K}$ 上全体 $m \times n$ 矩阵组成的集合，则我们得到了一个从 $\mathcal{L}(V,U)$ 到 $M_{m\times n}(\mathbb{K})$ 的映射 $T$，对任意的 $\varphi \in \mathcal{L}(V,U)$，$T(\varphi) = A$，其中 $A$ 是 $\varphi$ 在给定基下的表示矩阵. 
>
> 前面的分析告诉我们：$T$ 是一个一一对应. 
>
> 我们已经知道，$M_{m\times n}(\mathbb{K})$ 在矩阵的加法与数乘下是 $\mathbb{K}$ 上的线性空间，$\mathcal{L}(V,U)$ 也是 $\mathbb{K}$ 上的线性空间. 
>
> 这两个线性空间同构吗？即一一对应 $T$ 保持加法运算和数乘运算吗？
>
> 先做一些符号上的说明. 假设 $V$ 的基为 $\{e_1, e_2, \cdots, e_n\}$，$U$ 的基为 $\{f_1, f_2, \cdots, f_m\}$. 记 $\eta_1$ 是 $V$ 到 $\mathbb{K}_n$ 的线性同构：若 $\alpha = a_1 e_1 + a_2 e_2 + \cdots + a_n e_n$，则
> $$
> \eta_1(\alpha) = (a_1, a_2, \cdots, a_n)'.
> $$
> 同样，若 $\beta = b_1 f_1 + b_2 f_2 + \cdots + b_m f_m$，则令
> $$
> \eta_2(\beta) = (b_1, b_2, \cdots, b_m)'.
> $$
> 设 $\varphi \in \mathcal{L}(V,U)$，$T(\varphi) = A$ 是 $\varphi$ 在给定基下的表示矩阵. 我们约定用 $\varphi_A$ 表示在从 $\mathbb{K}_n \to \mathbb{K}_m$ 的线性映射，即若 $x \in \mathbb{K}_n$，则 $\varphi_A(x) = Ax$. 

**定理1** 设 $T$ 是由上面定义的从 $\mathcal{L}(V,U)$ 到 $M_{m\times n}(\mathbb{K})$ 的映射，则 $T$ 是一个线性同构. 不仅如此，$\eta_2 \varphi = \varphi_A \eta_1$. 
$$
\begin{array}{ccc}
V & \overset{\varphi}\rightarrow & U \\
\downarrow{\eta_1} & & \downarrow{\eta_2} \\
\mathbb{K}_n & \overset{\varphi_A}\rightarrow & \mathbb{K}_m
\end{array}
$$

> 我们先验证 $T$ 是一个线性映射. 设 $\varphi, \psi$ 是 $V \to U$ 的线性映射且 $T(\varphi) = A = (a_{ji})$，$T(\psi) = B = (b_{ji})$. 对任意的 $e_i\ (i=1,2,\cdots,n)$，有
> $$
> \begin{aligned}
> (\varphi + \psi)(e_i) &= \varphi(e_i) + \psi(e_i) \\
> &= \sum_{j=1}^m a_{ij} f_j + \sum_{j=1}^m b_{ij} f_j \\
> &= \sum_{j=1}^m (a_{ij} + b_{ij}) f_j,
> \end{aligned}
> $$
> 因此
> $$
> T(\varphi + \psi) = A + B = T(\varphi) + T(\psi).
> $$
> 同理，可证明对任意的 $k \in \mathbb{K}$ 及 $\varphi \in \mathcal{L}(V,U)$，有
> $$
> T(k\varphi) = kA = kT(\varphi).
> $$
> 这表明 $T$ 是线性映射. 因为 $T$ 是一一对应，故 $T$ 是同构. 
>
> 要证明图示的交换性，只要对 $V$ 的任一基向量 $e_i$，验证 $\eta_2 \varphi(e_i) = \varphi_A \eta_1(e_i)$ 即可. 设
> $$
> A =
> \begin{pmatrix}
> a_{11} & a_{21} & \cdots & a_{n1} \\
> a_{12} & a_{22} & \cdots & a_{n2} \\
> \vdots & \vdots & & \vdots \\
> a_{1m} & a_{2m} & \cdots & a_{nm}
> \end{pmatrix},
> $$
> 则 $\varphi(e_i) = a_{i1}f_1 + a_{i2}f_2 + \cdots + a_{im}f_m$，故
> $$
> \eta_2 \varphi(e_i) =
> \begin{pmatrix}
> a_{i1} \\ a_{i2} \\ \vdots \\ a_{im}
> \end{pmatrix}.
> $$
> 注意到 $\eta_1(e_i)$ 是第 $i$ 个标准单位列向量，因此 $\varphi_A \eta_1(e_i)$ 就等于 $A$ 的第 $i$ 个列向量，即 $\varphi_A \eta_1(e_i) = \eta_2 \varphi(e_i)$. 图的交换性成立. 

### · 矩阵乘法

下面的定理告诉我们，矩阵乘法的几何意义是线性映射的复合. 

**定理2** 同定理1的假设，再设 $W$ 是 $\mathbb{K}$ 上的线性空间，$\{g_1, g_2, \cdots, g_p\}$ 是 $W$ 的一组基，$\psi \in \mathcal{L}(U,W)$，则 $T(\psi \varphi) = T(\psi)T(\varphi)$. 

> 设 $T(\varphi) = A = (a_{ji})_{m\times n}$，$T(\psi) = B = (b_{kj})_{p\times m}$ 分别是 $\varphi, \psi$ 在给定基下的表示矩阵，又 $\alpha = \lambda_1 e_1 + \lambda_2 e_2 + \cdots + \lambda_n e_n$ 是 $V$ 中任一向量，则 $\varphi(\alpha)$ 的坐标向量为
> $$
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_m
> \end{pmatrix}
> = A
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix}.
> $$
> $\psi(\varphi(\alpha))$ 的坐标向量为
> $$
> \begin{pmatrix}
> \xi_1 \\ \xi_2 \\ \vdots \\ \xi_p
> \end{pmatrix}
> = B
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_m
> \end{pmatrix},
> $$
> 因此
> $$
> \begin{pmatrix}
> \xi_1 \\ \xi_2 \\ \vdots \\ \xi_p
> \end{pmatrix}
> = BA
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix}.
> $$
> 这表明，
> $$
> T(\psi \varphi) = BA = T(\psi)T(\varphi)
> $$

现在我们考察 $V$ 上全体线性变换 $\mathcal{L}(V)$. 取定 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$. 对任一 $\varphi \in \mathcal{L}(V)$，设
$$
\left\{
\begin{aligned}
\varphi(e_1) &= a_{11}e_1 + a_{12}e_2 + \cdots + a_{1n}e_n, \\\\
\varphi(e_2) &= a_{21}e_1 + a_{22}e_2 + \cdots + a_{2n}e_n, \\\\
&\cdots\cdots\cdots\cdots \\\\
\varphi(e_n) &= a_{n1}e_1 + a_{n2}e_2 + \cdots + a_{nn}e_n,
\end{aligned}
\right.
\tag{*}
$$
则 $\varphi$ 在基 $\{e_1, e_2, \cdots, e_n\}$ 下的表示矩阵定义为 $n$ 阶方阵 $A = (a_{ji})$，即 (*) 式中系数矩阵的转置，记为 $T(\varphi) = A$. 

**定理3**

 $T: \mathcal{L}(V) \to M_n(\mathbb{K})$ 是线性同构，并对任意的 $\varphi, \psi \in \mathcal{L}(V)$，有
$$
T(\psi \varphi) = T(\psi)T(\varphi),
$$
即 $T$ 保持了乘法. 

> 由定理1和定理2 类似的证明可得结论

**推论1** 上述同构 $T$ 有下列性质：

(1) $T(I_V) = I_n$；

(2) $\varphi$ 是 $V$ 上自同构的充分必要条件是 $T(\varphi)$ 为可逆阵且这时有
$$
T(\varphi^{-1}) = T(\varphi)^{-1}.
$$

> (1) 当 $\varphi = I_V$ 时，(*) 式中的系数矩阵为 $I_n$，其转置也为 $I_n$，因此结论成立. 
>
> (2) 由 $\varphi \varphi^{-1} = I_V$，得
> $$
> T(\varphi)T(\varphi^{-1}) = T(\varphi \varphi^{-1}) = T(I_V) = I_n.
> $$
> 此即 $T(\varphi^{-1}) = T(\varphi)^{-1}$. 充分性也不难验证. 

上面的这些结论在线性映射与矩阵之间建立起了桥梁，它可以使我们能用代数的工具（矩阵）来研究几何的对象（线性映射）. 另一方面，我们也可以用几何的方法来研究代数的对象（矩阵）. 

### · 相似矩阵

我们继续讨论线性变换的问题. 我们知道线性变换的表示矩阵是与线性空间中的基联系在一起的. 一般说来，当基发生变化时，同一个线性变换在不同基下的表示矩阵是不相同的. 

如果我们已经知道了两组基及其过渡矩阵，同一个线性变换在这两组基下的表示矩阵有什么关系呢？

**定理4** 设 $V$ 是数域 $\mathbb{K}$ 上的线性空间，$\varphi \in \mathcal{L}(V)$，又设 $\{e_1, e_2, \cdots, e_n\}$ 及 $\{f_1, f_2, \cdots, f_n\}$ 是 $V$ 的两组基且从 $\{e_1, e_2, \cdots, e_n\}$ 到 $\{f_1, f_2, \cdots, f_n\}$ 的过渡矩阵为 $P$，若 $\varphi$ 在基 $\{e_1, e_2, \cdots, e_n\}$ 下的表示矩阵为 $A$，在基 $\{f_1, f_2, \cdots, f_n\}$ 下的表示矩阵为 $B$，则
$$
B = P^{-1}AP.
$$

> 设 $\alpha$ 是 $V$ 中任一向量且
> $$
> \alpha = \lambda_1 e_1 + \lambda_2 e_2 + \cdots + \lambda_n e_n = \mu_1 f_1 + \mu_2 f_2 + \cdots + \mu_n f_n,
> $$
> 我们易知
> $$
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix}
> = P
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}.
> \tag{1}
> $$
> 设
> $$
> \varphi(\alpha) = \xi_1 e_1 + \xi_2 e_2 + \cdots + \xi_n e_n = \eta_1 f_1 + \eta_2 f_2 + \cdots + \eta_n f_n,
> \tag{2}
> $$
> 则有
> $$
> \begin{pmatrix}
> \xi_1 \\ \xi_2 \\ \vdots \\ \xi_n
> \end{pmatrix}
> = A
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix},
> \quad
> \begin{pmatrix}
> \eta_1 \\ \eta_2 \\ \vdots \\ \eta_n
> \end{pmatrix}
> = B
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}.
> \tag{3}
> $$
> 另一方面由 (2) 式有
> $$
> \begin{pmatrix}
> \xi_1 \\ \xi_2 \\ \vdots \\ \xi_n
> \end{pmatrix}
> = P
> \begin{pmatrix}
> \eta_1 \\ \eta_2 \\ \vdots \\ \eta_n
> \end{pmatrix}.
> \tag{4}
> $$
> 由 (1) 式、(3) 式、(4) 式得：
> $$
> P B
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}
> = A P
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}.
> \tag{5}
> $$
> 但 $\alpha$ 是任意的，即 (5) 式中的 $\mu_i$ 是任意的，因此
> $$
> PB = AP,
> $$
> 即
> $$
> B = P^{-1}AP.\
> $$

**定义1**

>  若 $A, B$ 为 $n$ 阶方阵且存在 $n$ 阶非异阵 $P$，使
> $$
> B = P^{-1}AP,
> $$
> 则称 $A$ 与 $B$ 相似，记为 $A \approx B$. 

> [!important]
>
> **定理4** 表明：$V$ 上的线性变换 $\varphi$ 在不同基下的表示矩阵是相似的. 

**命题1** 相似关系是一种等价关系，即

(1) $A \approx A$；

(2) 若 $A \approx B$，则 $B \approx A$；

(3) 若 $A \approx B$，$B \approx C$，则 $A \approx C$. 

> (1) $A = I_n^{-1}AI_n$，故 $A \approx A$. 
>
> (2) 若 $B = P^{-1}AP$，则 $A = PBP^{-1}$，因此 $B \approx A$. 
>
> (3) 若 $B = P^{-1}AP$，$C = Q^{-1}BQ$，则 $C = (PQ)^{-1}A(PQ)$，故 $A \approx C$. 

**定理4** 揭示了同一线性变换在不同基下表示矩阵之间的关系. 

一个十分重要的问题是：对一个线性变换 $\varphi$ 能否找到一组适当的基，使 $\varphi$ 在这组基下的表示矩阵具有简单的形状？

这个问题的代数提法是：给定一个 $n$ 阶矩阵 $A$，能否找到一种方法，使得 $A$ 相似于一个比较简单的矩阵. 

后面会讨论这个问题.

