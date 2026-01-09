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

结束.
