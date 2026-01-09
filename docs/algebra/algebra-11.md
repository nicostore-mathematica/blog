---
title: Chapter 11 特征值
permalink: /algebra/algebra-11/
createTime: 2026/01/03 12:29:04
---

在这几章中，我们主要研究有限维线性空间上的线性变换。

## Part 1 特征值和特征向量

我们特别关心这样一个问题：对给定线性空间 $V$ 上的线性变换，能否找到 $V$ 的一组基，使得该线性变换在这组基下的表示矩阵具有特别简单的形状。比如，若我们能找到 $V$ 的一组基 $\{e_1, e_2, \cdots, e_n\}$，使线性变换 $\varphi$ 在这组基下的表示矩阵为对角阵：

$$
\begin{pmatrix}
a_1 & & & \\
& a_2 & & \\
& & \ddots & \\
& & & a_n
\end{pmatrix}.
$$

这时，若 $\alpha = k_1 e_1 + k_2 e_2 + \cdots + k_n e_n$，则

$$
\varphi(\alpha) = a_1 k_1 e_1 + a_2 k_2 e_2 + \cdots + a_n k_n e_n.
$$

线性变换 $\varphi$ 的表达式非常简单。线性变换 $\varphi$ 的许多性质也变得一目了然。如若 $a_1, a_2, \cdots, a_r$ 不为零，而 $a_{r+1} = \cdots = a_n = 0$，则 $\varphi$ 的秩为 $r$，且 $\operatorname{Im} \varphi$ 就是由 $\{e_1, e_2, \cdots, e_r\}$ 生成的子空间，而 $\ker \varphi$ 则是由 $\{e_{r+1}, \cdots, e_n\}$ 生成的子空间，等等。

由第四章我们已经知道，一个线性变换在不同基下的表示矩阵是相似的。因此用矩阵的语言重述上面提到的问题就是：能否找到一类特别简单的矩阵，使任一矩阵与这类矩阵中的某一个相似？

比如，我们可以问：是否所有的矩阵都相似于对角阵？若不然，哪一类矩阵可以相似于对角阵？

我们知道，若线性空间 $V$ 可分解为

$$
V = V_1 \oplus V_2 \oplus \cdots \oplus V_m,
\tag{1}
$$

其中每个 $V_i$ 都是线性变换 $\varphi$ 的不变子空间，那么 $\varphi$ 可以表示为分块对角阵。我们当然希望 (1) 式中的 $V_i$ 越小越好。最小的非零子空间是一维子空间。若 $V_i$ 是一维子空间，$x$ 是其中的任一非零向量，$\varphi$ 在 $V_i$ 上的作用相当于一个数乘，于是存在 $\lambda \in \mathbb{K}$，使

$$
\varphi(x) = \lambda x.
$$

**定义1** 

> 设 $\varphi$ 是数域 $\mathbb{K}$ 上的线性空间 $V$ 的线性变换，若 $\lambda \in \mathbb{K}$，$x \in V$ 且 $x \neq 0$，使
>
> $$
> \varphi(x) = \lambda x,
> \tag{2}
> $$
>
> 则称 $\lambda$ 是线性变换 $\varphi$ 的一个特征值，向量 $x$ 称为 $\varphi$ 关于特征值 $\lambda$ 的特征向量。

由 (2) 式我们可以看出，$\varphi$ 关于特征值 $\lambda$ 的全体特征向量再加上零向量构成 $V$ 的一个子空间。事实上，若向量 $x, y$ 是属于特征值 $\lambda$ 的特征向量，则

$$
\varphi(x + y) = \varphi(x) + \varphi(y) = \lambda x + \lambda y = \lambda(x + y),
$$
$$
\varphi(cx) = c\varphi(x) = c\lambda x = \lambda(cx).
$$

因此 $\varphi$ 属于特征值 $\lambda$ 的特征向量全体加上零向量构成 $V$ 的子空间，记为 $V_\lambda$，称为 $\varphi$ 的属于特征值 $\lambda$ 的特征子空间。显然 $V_\lambda$ 是 $\varphi$ 的不变子空间。

现在设 $\varphi$ 在某组基下的表示矩阵为 $A$，向量 $x$ 在这组基下可表示为一个列向量 $\alpha$。这时 (2) 式等价于

$$
A\alpha = \lambda\alpha,
\tag{3}
$$

(3) 式也等价于

$$
(\lambda I_n - A)\alpha = 0.
\tag{4}
$$

**定义2** 

> 设 $A$ 是数域 $\mathbb{K}$ 上的 $n$ 阶方阵，若存在 $\lambda \in \mathbb{K}$ 及 $n$ 维非零列向量 $\alpha$，使 (3) 式成立，则称 $\lambda$ 是矩阵 $A$ 的一个特征值，$\alpha$ 为 $A$ 关于特征值 $\lambda$ 的特征向量。齐次线性方程组 $(\lambda I_n - A)x = 0$ 的解空间 $V_\lambda$ 称为 $A$ 关于特征值 $\lambda$ 的特征子空间。

我们已经定义了线性变换与矩阵的特征值，现在的问题是如何来求一个线性变换或一个矩阵的特征值？

从 (4) 式可以看出，要使 $\alpha$ 非零，必须 $|\lambda I_n - A| = 0$。反过来若 $\lambda \in \mathbb{K}$ 且 $|\lambda I_n - A| = 0$，则 (4) 式有非零解 $\alpha$。

因此寻找矩阵 $A$ 的特征值等价于寻找行列式 $|\lambda I_n - A| = 0$ 时 $\lambda$ 的值。设 $A = (a_{ij})$，则
$$
|\lambda I_n - A| =
\begin{vmatrix}
\lambda - a_{11} & -a_{12} & \cdots & -a_{1n} \\
-a_{21} & \lambda - a_{22} & \cdots & -a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
-a_{n1} & -a_{n2} & \cdots & \lambda - a_{nn}
\end{vmatrix}
\tag{5}
$$

是一个以 $\lambda$ 为未知数的 $n$ 次首一多项式。

**定义3** 

> 设 $A$ 是 $n$ 阶方阵，称 $|\lambda I_n - A|$ 为 $A$ 的特征多项式。

由上面的讨论可得矩阵 $A$ 的特征值就是它的特征多项式的根。读者会提出这样的问题：既然同一个线性变换在不同基下的表示矩阵是相似的，那么相似矩阵是否有相同的特征值？回答是肯定的，这就是下面的定理。

**定理1** 

>若 $B$ 与 $A$ 相似，则 $B$ 与 $A$ 具有相同的特征多项式，从而具有相同的特征值（计重数）。

/proof/

> 设 $B = P^{-1}AP$，其中 $P$ 是可逆阵，则
>
> $$
> |\lambda I_n - B| = |P^{-1}(\lambda I_n - A)P| = |P^{-1}| |\lambda I_n - A| |P| = |\lambda I_n - A|.
> $$
>
> 因此相似矩阵必有相同的特征多项式，从而必有相同的特征值（计重数）。

**定义4** 

> 设 $\varphi$ 是线性空间 $V$ 上的线性变换，$\varphi$ 在 $V$ 的某组基下的表示矩阵为 $A$，由定理 1 知 $|\lambda I_n - A|$ 与基或表示矩阵的选取无关，称 $|\lambda I_n - A|$ 为 $\varphi$ 的特征多项式，记为 $|\lambda I_V - \varphi|$。

设

$$
\begin{aligned}
|\lambda I_n - A| &= \lambda^n + a_1 \lambda^{n-1} + \cdots + a_{n-1} \lambda + a_n \\\\
&= (\lambda - \lambda_1)(\lambda - \lambda_2) \cdots (\lambda - \lambda_n).
\end{aligned}
$$

由 Vieta 定理知 $\lambda_1 + \lambda_2 + \cdots + \lambda_n = -a_1$，$\lambda_1 \lambda_2 \cdots \lambda_n = (-1)^n a_n$。由行列式 (5) 不难看出 $a_1 = -(a_{11} + a_{22} + \cdots + a_{nn}) = -\operatorname{tr} A$，$a_n = (-1)^n |A|$。因此 $A$ 的 $n$ 个特征值之和及之积分别为

$$
\lambda_1 + \lambda_2 + \cdots + \lambda_n = \operatorname{tr} A,
$$
$$
\lambda_1 \lambda_2 \cdots \lambda_n = |A|.
$$

从上面的分析我们可以得出求一个矩阵的特征值与特征向量的方法：作矩阵 $\lambda I_n - A$（通常称之为 $A$ 的特征矩阵）并求出特征多项式 $|\lambda I_n - A|$ 的根，这就是 $A$ 的特征值。将每个特征值代入线性方程组

$$
(\lambda I_n - A)x = 0,
$$

求出非零解，就是关于特征值 $\lambda$ 的特征向量。

/example/ 设 $A$ 是一个上三角阵：

$$
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
0 & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & a_{nn}
\end{pmatrix}.
$$

求 $A$ 的特征值。

>  $|\lambda I_n - A|$ 是一个上三角行列式，因此
>
> $$
> |\lambda I_n - A| = (\lambda - a_{11})(\lambda - a_{22}) \cdots (\lambda - a_{nn}),
> $$
>
> 即 $A$ 的特征值等于 $A$ 主对角线上的元素 $a_{11}, a_{22}, \cdots, a_{nn}$。对下三角阵也有类似的结论。

/example/ 求下列矩阵的特征值：

$$
A =
\begin{pmatrix}
0 & -1 \\
1 & 0
\end{pmatrix}.
$$

> 因为
>
> $$
> \begin{vmatrix}
> \lambda & 1 \\
> -1 & \lambda
> \end{vmatrix}
> = \lambda^2 + 1,
> $$
>
> 所以 $A$ 的特征值为 $i, -i$。

上例表明，即使是有理数域上的矩阵，其特征值有可能是虚数。这就是说，对数域 $\mathbb{K}$ 上的矩阵（或相应的线性变换），有可能在 $\mathbb{K}$ 中不存在特征值。但是对复数域来说，任一 $n$ 阶方阵总存在特征值。因此在考虑特征值问题时，我们常常放在复数域里讨论。

从前面我们也看到，一个上三角（或下三角）阵的特征值都在主对角线上。如果我们能把一个矩阵相似地变到一个上三角阵，那么它的特征值也就一目了然了。但是，由于一个矩阵的特征值有可能是虚数，因此数域 $\mathbb{K}$ 上的矩阵未必能相似于一个上三角阵。然而复数域 $\mathbb{C}$ 上的矩阵，它们总相似于上三角（或下三角）阵。

**定理2** 

> 任一复方阵必（复）相似于一上三角阵。

/proof/

> 设 $A$ 是 $n$ 阶复方阵，现对 $n$ 用数学归纳法。当 $n = 1$ 时结论显然。假定对 $n - 1$ 阶矩阵结论成立，现对 $n$ 阶矩阵 $A$ 来证明。设 $\lambda$ 是 $A$ 的一个特征值，则存在非零列向量 $\alpha_1$，使
>
> $$
> A\alpha_1 = \lambda \alpha_1.
> $$
>
> 将 $\alpha_1$ 作为 $\mathbb{C}_n$ 的一个基向量，并扩展为 $\mathbb{C}_n$ 的一组基 $\{\alpha_1, \alpha_2, \cdots, \alpha_n\}$。将这些基向量按照列分块方式拼成矩阵 $P = (\alpha_1, \alpha_2, \cdots, \alpha_n)$，则 $P$ 为 $n$ 阶非异阵，且
>
> $$
> \begin{aligned}
> AP &= A(\alpha_1, \alpha_2, \cdots, \alpha_n) = (A\alpha_1, A\alpha_2, \cdots, A\alpha_n) \\\\
> &= (\alpha_1, \alpha_2, \cdots, \alpha_n)
> \begin{pmatrix}
> \lambda & * \\
> O & A_1
> \end{pmatrix},
> \end{aligned}
> $$
>
> 其中 $A_1$ 是一个 $n - 1$ 阶方阵。注意到 $P = (\alpha_1, \alpha_2, \cdots, \alpha_n)$ 非异，上式即为
>
> $$
> P^{-1}AP =
> \begin{pmatrix}
> \lambda & * \\
> O & A_1
> \end{pmatrix}.
> $$
>
> 因为 $A_1$ 是一个 $n - 1$ 阶方阵，所以由归纳假设可知，存在非异的 $n - 1$ 阶矩阵 $Q$，使 $Q^{-1}A_1Q$ 是一个上三角阵。令
>
> $$
> R =
> \begin{pmatrix}
> 1 & O \\
> O & Q
> \end{pmatrix},
> $$
>
> 则 $R$ 也是非异阵，且
>
> $$
> \begin{aligned}
> R^{-1}P^{-1}APR &=
> \begin{pmatrix}
> 1 & O \\
> O & Q
> \end{pmatrix}^{-1}
> \begin{pmatrix}
> \lambda & * \\
> O & A_1
> \end{pmatrix}
> \begin{pmatrix}
> 1 & O \\
> O & Q
> \end{pmatrix} \\\\
> &=
> \begin{pmatrix}
> 1 & O \\
> O & Q^{-1}
> \end{pmatrix}
> \begin{pmatrix}
> \lambda & * \\
> O & A_1
> \end{pmatrix}
> \begin{pmatrix}
> 1 & O \\
> O & Q
> \end{pmatrix} \\\\
> &=
> \begin{pmatrix}
> \lambda & * \\
> O & Q^{-1}A_1Q
> \end{pmatrix}.
> \end{aligned}
> $$
>
> 这是一个上三角阵，它与 $A$ 相似。

> [!important]
>
> 虽然一般数域 $\mathbb{K}$ 上的矩阵未必相似于上三角阵，但是从定理 2 的证明可以看出，若数域 $\mathbb{K}$ 上的 $n$ 阶方阵 $A$ 的特征值全在 $\mathbb{K}$ 中，则存在 $\mathbb{K}$ 上的非异阵 $P$，使 $P^{-1}AP$ 是一个上三角阵。

作为定理 2 的应用，我们来证明 3 个有用的命题。首先，若 $A$ 是一个 $n$ 阶矩阵，$f(x) = a_m x^m + a_{m-1} x^{m-1} + \cdots + a_1 x + a_0$ 是一个多项式，记

$$
f(A) = a_m A^m + a_{m-1} A^{m-1} + \cdots + a_1 A + a_0 I_n.
$$

我们来考虑矩阵 $A$ 的特征值与矩阵 $f(A)$ 的特征值之间的关系。

**命题1** 

> 设矩阵 $A$ 是 $n$ 阶方阵，$\lambda_1, \lambda_2, \cdots, \lambda_n$ 是 $A$ 的全部特征值，又 $f(x)$ 是一个多项式，则 $f(\lambda_1), f(\lambda_2), \cdots, f(\lambda_n)$ 是 $f(A)$ 的全部特征值。

/proof/

> 因为任意一个 $n$ 阶矩阵均（复）相似于上三角阵，可设
>
> $$
> P^{-1}AP =
> \begin{pmatrix}
> \lambda_1 & * & \cdots & * \\
> 0 & \lambda_2 & \cdots & * \\
> \vdots & \vdots & \ddots & \vdots \\
> 0 & 0 & \cdots & \lambda_n
> \end{pmatrix}.
> $$
>
> 因为上三角阵的和、数乘及乘方仍是上三角阵，经计算不难得到
>
> $$
> P^{-1}f(A)P = f(P^{-1}AP) =
> \begin{pmatrix}
> f(\lambda_1) & * & \cdots & * \\
> 0 & f(\lambda_2) & \cdots & * \\
> \vdots & \vdots & \ddots & \vdots \\
> 0 & 0 & \cdots & f(\lambda_n)
> \end{pmatrix}.
> $$
>
> 因此 $f(A)$ 的全部特征值为 $f(\lambda_1), f(\lambda_2), \cdots, f(\lambda_n)$。

**命题2** 

> 设 $n$ 阶矩阵 $A$ 适合一个多项式 $g(x)$，即 $g(A) = O$，则 $A$ 的任一特征值 $\lambda$ 也必适合 $g(x)$，即 $g(\lambda) = 0$。

/proof/

> 设 $\alpha$ 是 $A$ 属于特征值 $\lambda$ 的特征向量，经简单计算得
>
> $$
> g(\lambda)\alpha = g(A)\alpha = 0.
> $$
>
> 而 $\alpha \neq 0$，因此 $g(\lambda) = 0$。

对可逆阵 $A$，其逆阵 $A^{-1}$ 的特征值和 $A$ 的特征值有什么关系呢？下面的命题回答了这个问题。

**命题3** 

> 设 $n$ 阶矩阵 $A$ 是可逆阵，且 $A$ 的全部特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$，则 $A^{-1}$ 的全部特征值为 $\lambda_1^{-1}, \lambda_2^{-1}, \cdots, \lambda_n^{-1}$。

/proof/

> 首先注意到 $A$ 是可逆阵，$\lambda_1 \lambda_2 \cdots \lambda_n = |A| \neq 0$，因此每个 $\lambda_i \neq 0$（事实上，$A$ 可逆的充分必要条件是它的特征值全不为零）。
>
> 由定理 2 可设
>
> $$
> P^{-1}AP =
> \begin{pmatrix}
> \lambda_1 & * & \cdots & * \\
> 0 & \lambda_2 & \cdots & * \\
> \vdots & \vdots & \ddots & \vdots \\
> 0 & 0 & \cdots & \lambda_n
> \end{pmatrix}.
> $$
>
> 因为上三角阵的逆阵仍是上三角阵，经计算不难得到
>
> $$
> P^{-1}A^{-1}P = (P^{-1}AP)^{-1} =
> \begin{pmatrix}
> \lambda_1^{-1} & * & \cdots & * \\
> 0 & \lambda_2^{-1} & \cdots & * \\
> \vdots & \vdots & \ddots & \vdots \\
> 0 & 0 & \cdots & \lambda_n^{-1}
> \end{pmatrix}.
> $$
>
> 因此 $A^{-1}$ 的全部特征值为 $\lambda_1^{-1}, \lambda_2^{-1}, \cdots, \lambda_n^{-1}$。

## Part 2 对角化

什么样的矩阵相似于一个对角阵？

我们注意到，如果矩阵 $A$ 相似于对角阵：

$$
\begin{pmatrix}
\lambda_1 & & & \\
& \lambda_2 & & \\
& & \ddots & \\
& & & \lambda_n
\end{pmatrix},
\tag{1}
$$

则 $A$ 代表了一个 $n$ 维线性空间中的线性变换 $\varphi$，$\varphi$ 在某一组基 $\{e_1, e_2, \cdots, e_n\}$ 下的表示矩阵为对角阵 (1)。于是 $\varphi(e_i) = \lambda_i e_i$，即 $e_1, e_2, \cdots, e_n$ 是 $\varphi$ 的特征向量。也就是说 $\varphi$ 有 $n$ 个线性无关的特征向量。

反过来，若 $n$ 阶方阵 $A$ 有 $n$ 个线性无关的特征向量，这说明 $A$ 代表的 $n$ 维线性空间 $V$ 中的线性变换 $\varphi$ 有 $n$ 个线性无关的特征向量，这一组向量构成 $V$ 的一组基，$\varphi$ 在这组基下的表示矩阵显然就是一个对角阵。

这样我们就证明了下述定理。

**定理 1** 

> 设 $A$ 是 $n$ 阶方阵，则 $A$ 相似于对角阵的充分必要条件是 $A$ 有 $n$ 个线性无关的特征向量（这样的矩阵称为可对角化矩阵）。

与上述定理等价的有下列定理。

**定理 2** 

> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换，则存在 $V$ 的一组基，使得 $\varphi$ 在这组基下的表示矩阵为对角阵的充分必要条件是 $\varphi$ 有 $n$ 个线性无关的特征向量（这样的线性变换称为可对角化线性变换）。

那么是否任一 $n$ 阶方阵均有 $n$ 个线性无关的特征向量呢？当然不是！

/example/ 

> 矩阵
>
> $$
> A =
> \begin{pmatrix}
> 1 & 1 \\
> 0 & 1
> \end{pmatrix}
> $$
>
> 的特征值为 $1, 1$。将 $\lambda = 1$ 代入 $(\lambda I_2 - A)x = 0$，求得 $A$ 的特征向量为
>
> $$
> k
> \begin{pmatrix}
> 1 \\ 0
> \end{pmatrix},\quad k \in \mathbb{K} \setminus \{0\}.
> $$
>
> 这表明 $A$ 只有一个线性无关的特征向量，因此 $A$ 不能对角化。
>
> 事实上，如果 $A$ 可以对角化，由于 $A$ 的特征值是 $1, 1$，所以 $A$ 将相似于 $I_2$，即存在可逆阵 $P$，使得 $P^{-1}AP = I_2$。于是 $A = P I_2 P^{-1} = I_2$，引出矛盾.

现在我们来讨论不同的特征值和它们相应的特征向量有什么关系。设 $n$ 维线性空间 $V$ 上的线性变换 $\varphi$ 有 $k$ 个不同特征值：$\lambda_1, \lambda_2, \cdots, \lambda_k$，相应的特征子空间为 $V_1, V_2, \cdots, V_k$。

**定理3** 若 $\lambda_1, \lambda_2, \cdots, \lambda_k$ 为数域 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 上线性变换 $\varphi$ 的不同的特征值，则
$$
V_1 + V_2 + \cdots + V_k = V_1 \oplus V_2 \oplus \cdots \oplus V_k.
$$

/proof/

> 对 $k$ 用数学归纳法。若 $k = 1$，结论显然。现设对 $k - 1$ 个不同的特征值 $\lambda_1, \lambda_2, \cdots, \lambda_{k-1}$，它们相应的特征子空间 $V_1, V_2, \cdots, V_{k-1}$ 之和是直和。我们要证明 $V_1, V_2, \cdots, V_{k-1}, V_k$ 之和为直和，这只需证明：
>
> $$
> V_k \cap (V_1 + V_2 + \cdots + V_{k-1}) = 0 \tag{2}
> $$
>
> 即可。设 $v \in V_k \cap (V_1 + V_2 + \cdots + V_{k-1})$，则
>
> $$
> v = v_1 + v_2 + \cdots + v_{k-1}, \tag{3}
> $$
>
> 其中 $v_i \in V_i$ ($i = 1, 2, \cdots, k-1$)。在 (3) 式两边作用 $\varphi$，得
>
> $$
> \varphi(v) = \varphi(v_1) + \varphi(v_2) + \cdots + \varphi(v_{k-1}).
> $$
>
> 但 $v_1, v_2, \cdots, v_{k-1}$ 都是 $\varphi$ 的特征向量或零向量，因此
>
> $$
> \lambda_k v = \lambda_1 v_1 + \lambda_2 v_2 + \cdots + \lambda_{k-1} v_{k-1}. \tag{4}
> $$
>
> 在 (3) 式两边乘以 $\lambda_k$ 减去 (4) 式得
>
> $$
> 0 = (\lambda_k - \lambda_1)v_1 + (\lambda_k - \lambda_2)v_2 + \cdots + (\lambda_k - \lambda_{k-1})v_{k-1}.
> $$
>
> 由归纳假设，$V_1 + V_2 + \cdots + V_{k-1}$ 是直和，因此 $(\lambda_k - \lambda_i)v_i = 0$，而 $\lambda_k - \lambda_i \neq 0$，从而 $v_i = 0$ ($i = 1, 2, \cdots, k-1$)。这就证明了 (2) 式。

**推论1** 

> 线性变换 $\varphi$ 属于不同特征值的特征向量必线性无关。

**推论2** 

> 若 $n$ 维线性空间 $V$ 上的线性变换 $\varphi$ 有 $n$ 个不同的特征值，则 $\varphi$ 必可对角化。

推论 2 另外一个等价的说法就是：若线性变换 $\varphi$ 的特征多项式没有重根，则 $\varphi$ 可对角化。注意推论 2 只是可对角化的充分条件而非必要条件，比如说纯量变换 $\varphi = cI_V$ 当然可对角化，但 $\varphi$ 的 $n$ 个特征值都是 $c$。由定理 3，我们还可以得到可对角化的第二个充分必要条件。

**推论3** 

> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换，$\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\varphi$ 的全部不同的特征值，$V_i$ ($i = 1, 2, \cdots, k$) 是特征值 $\lambda_i$ 的特征子空间，则 $\varphi$ 可对角化的充分必要条件是
>
> $$
> V = V_1 \oplus V_2 \oplus \cdots \oplus V_k.
> $$
>

/proof/

> 先证充分性。设
>
> $$
> V = V_1 \oplus V_2 \oplus \cdots \oplus V_k,
> $$
>
> 分别取 $V_i$ 的一组基 $\{e_{i1}, e_{i2}, \cdots, e_{it_i}\}$ ($i = 1, 2, \cdots, k$)，知这些向量拼成了 $V$ 的一组基，并且它们都是 $\varphi$ 的特征向量。因此 $\varphi$ 有 $n$ 个线性无关的特征向量，从而 $\varphi$ 可对角化。
>
> 再证必要性。设 $\varphi$ 可对角化，则 $\varphi$ 有 $n$ 个线性无关的特征向量 $\{e_1, e_2, \cdots, e_n\}$，它们构成了 $V$ 的一组基。
>
> 不失一般性，可设这组基中前 $t_1$ 个是关于特征值 $\lambda_1$ 的特征向量；接下去的 $t_2$ 个是关于特征值 $\lambda_2$ 的特征向量；……；最后 $t_k$ 个是关于特征值 $\lambda_k$ 的特征向量。
>
> 对任一 $\alpha \in V$，设 $\alpha = a_1 e_1 + a_2 e_2 + \cdots + a_n e_n$，则 $\alpha$ 可写成 $V_1, V_2, \cdots, V_k$ 中向量之和，因此由定理 3 可得
> $$
> V = V_1 + V_2 + \cdots + V_k = V_1 \oplus V_2 \oplus \cdots \oplus V_k.
> $$
>

为了易于从计算的层面判定可对角化，我们引入特征值的度数和重数的概念。

**定义1** 

> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换，$\lambda_0$ 是 $\varphi$ 的一个特征值，$V_0$ 是属于 $\lambda_0$ 的特征子空间，称 $\dim V_0$ 为 $\lambda_0$ 的度数或几何重数。$\lambda_0$ 作为 $\varphi$ 的特征多项式根的重数称为 $\lambda_0$ 的重数或代数重数。

特征值的度数和重数之间有如下的不等式关系。

**引理1** 

> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换，$\lambda_0$ 是 $\varphi$ 的一个特征值，则 $\lambda_0$ 的度数总是小于等于 $\lambda_0$ 的重数。

/proof/

> 设特征值 $\lambda_0$ 的重数为 $m$，度数为 $t$，又 $V_0$ 是属于 $\lambda_0$ 的特征子空间，则 $\dim V_0 = t$。设 $\{e_1, \cdots, e_t\}$ 是 $V_0$ 的一组基。由于 $V_0$ 中的非零向量都是 $\varphi$ 关于 $\lambda_0$ 的特征向量，故
>
> $$
> \varphi(e_j) = \lambda_0 e_j,\quad j = 1, \cdots, t.
> $$
>
> 将 $\{e_1, \cdots, e_t\}$ 扩充为 $V$ 的一组基，记为 $\{e_1, \cdots, e_t, e_{t+1}, \cdots, e_n\}$，则 $\varphi$ 在这组基下的表示矩阵为
>
> $$
> A =
> \begin{pmatrix}
> \lambda_0 I_t & * \\
> O & B
> \end{pmatrix}, \tag{5}
> $$
>
> 其中 $B$ 是一个 $n - t$ 阶方阵。矩阵 $A$ 的特征多项式具有如下形状：
>
> $$
> |\lambda I_n - A| = (\lambda - \lambda_0)^t |\lambda I_{n-t} - B|.
> $$
>
> 这表明 $\lambda_0$ 的重数至少为 $t$，即 $t \leq m$。

**定义2** 

> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换，若 $\varphi$ 的任一特征值的度数等于重数，则称 $\varphi$ 有完全的特征向量系。

下面我们给出可对角化的第三个充分必要条件。

**定理4** 

>设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换，则 $\varphi$ 可对角化的充分必要条件是 $\varphi$ 有完全的特征向量系。

/proof/

> 设 $\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $\varphi$ 的全部不同的特征值，它们对应的特征子空间，重数和度数分别记为 $V_i, m_i, t_i$ ($i = 1, 2, \cdots, k$)。由重数的定义以及引理 1 可知
> $$
> m_1 + m_2 + \cdots + m_k = n,\quad t_i \leq m_i,\quad i = 1, 2, \cdots, k.
> $$
>
> 由推论 3，我们只要证明 $\varphi$ 有完全的特征向量系当且仅当 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_k$。
>
> 若 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_k$，则
>
> $$
> \begin{aligned}
> n &= \dim V = \dim(V_1 \oplus V_2 \oplus \cdots \oplus V_k) \\\\
> &= \dim V_1 + \dim V_2 + \cdots + \dim V_k \\\\
> &= \sum_{i=1}^k t_i \leq \sum_{i=1}^k m_i = n,
> \end{aligned}
> $$
>
> 因此 $t_i = m_i$ ($i = 1, 2, \cdots, k$)，即 $\varphi$ 有完全的特征向量系。反过来，若 $\varphi$ 有完全的特征向量系，则
>
> $$
> \dim(V_1 \oplus V_2 \oplus \cdots \oplus V_k) = \sum_{i=1}^k t_i = \sum_{i=1}^k m_i = n = \dim V,
> $$
>
> 从而 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_k$ 成立。

已知可对角化矩阵 $A$，如何求出 $P$ 使 $P^{-1}AP$ 是对角阵，下面我们来讨论这个问题。设 $A$ 的特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$。注意 $P$ 为可逆阵，不妨设 $P = (\alpha_1, \alpha_2, \cdots, \alpha_n)$ 是 $P$ 的列向量分块。因为

$$
P^{-1}AP = \operatorname{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\},
$$

所以

$$
AP = P \operatorname{diag}\{\lambda_1, \lambda_2, \cdots, \lambda_n\}.
$$

因此

$$
(A\alpha_1, A\alpha_2, \cdots, A\alpha_n) = (\lambda_1 \alpha_1, \lambda_2 \alpha_2, \cdots, \lambda_n \alpha_n).
$$

即有 $A\alpha_i = \lambda_i \alpha_i$，故 $\alpha_i$ 就是属于特征值 $\lambda_i$ 的特征向量。因此 $P$ 的 $n$ 个列向量就是 $A$ 的 $n$ 个特征向量。这表明，只要我们求出 $A$ 的 $n$ 个线性无关的特征向量，将它们放在一起组成一个矩阵就是要求的 $P$。

> [!important]
>
> 因为特征向量不唯一，所以 $P$ 不唯一。另外，还要注意第 $i$ 个列向量对应于第 $i$ 个特征值。

/example/ 判断矩阵 $A$ 是否相似于对角阵，如是，求出可逆阵 $P$，使 $P^{-1}AP$ 为对角阵：

$$
A =
\begin{pmatrix}
1 & 0 & 0 \\
-2 & 5 & -2 \\
-2 & 4 & -1
\end{pmatrix}.
$$

> 先计算 $A$ 的特征值
>
> $$
> |\lambda I_3 - A| =
> \begin{vmatrix}
> \lambda - 1 & 0 & 0 \\
> 2 & \lambda - 5 & 2 \\
> 2 & -4 & \lambda + 1
> \end{vmatrix}
> = (\lambda - 1)^2(\lambda - 3).
> $$
>
> $A$ 有特征值 $1$（二重）及 $3$（一重）。当 $\lambda = 1$ 时 $(\lambda I_3 - A)x = 0$ 为
>
> $$
> \begin{cases}
> 2x_1 - 4x_2 + 2x_3 = 0, \\\\
> 2x_1 - 4x_2 + 2x_3 = 0.
> \end{cases}
> $$
>
> 显然这个方程组的系数矩阵秩为 $1$，因此解空间维数等于 $2$。不难求得方程组的基础解系为
>
> $$
> \beta_1 =
> \begin{pmatrix}
> 2 \\ 1 \\ 0
> \end{pmatrix},\quad
> \beta_2 =
> \begin{pmatrix}
> -1 \\ 0 \\ 1
> \end{pmatrix}.
> $$
>
> 当 $\lambda = 3$ 时，不难求得方程组 $(3I_3 - A)x = 0$ 的基础解系为（只有一个向量）：
>
> $$
> \beta_3 =
> \begin{pmatrix}
> 0 \\ 1 \\ 1
> \end{pmatrix}.
> $$
>
> 因此
>
> $$
> P =
> \begin{pmatrix}
> 2 & -1 & 0 \\
> 1 & 0 & 1 \\
> 0 & 1 & 1
> \end{pmatrix},\quad
> P^{-1}AP =
> \begin{pmatrix}
> 1 & 0 & 0 \\
> 0 & 1 & 0 \\
> 0 & 0 & 3
> \end{pmatrix}.
> $$
>

/example/ 计算 $A^{10}$：
$$
A =
\begin{pmatrix}
1 & 0 \\
1 & -2
\end{pmatrix}.
$$

> 用上例的方法求得
>
> $$
> P =
> \begin{pmatrix}
> 3 & 0 \\
> 1 & 1
> \end{pmatrix},\quad
> P^{-1}AP =
> \begin{pmatrix}
> 1 & 0 \\
> 0 & -2
> \end{pmatrix}.
> $$
>
> 因此
>
> $$
> A^{10} = P
> \begin{pmatrix}
> 1 & 0 \\
> 0 & -2
> \end{pmatrix}^{10}
> P^{-1} =
> \begin{pmatrix}
> 1 & 0 \\
> 1 - 2^{10} & 2^{10}
> \end{pmatrix}.
> $$

## Part 3 极小多项式

我们已经知道，数域 $\mathbb{K}$ 上的全体 $n \times n$ 矩阵组成了 $\mathbb{K}$ 上的线性空间，其维数等于 $n^2$。因此下列 $n^2 + 1$ 个矩阵必线性相关：

$$
A^{n^2}, A^{n^2 - 1}, \cdots, A, I_n.
$$

也就是说，存在 $\mathbb{K}$ 中不全为零的数 $c_i$ ($i = 0, 1, 2, \cdots, c_{n^2}$)，使得

$$
c_{n^2} A^{n^2} + c_{n^2 - 1} A^{n^2 - 1} + \cdots + c_1 A + c_0 I_n = O.
$$

这表明矩阵 $A$ 适合数域 $\mathbb{K}$ 上的一个多项式。

### · 极小多项式

**定义 1** 

> 若 $n$ 阶矩阵 $A$（或 $n$ 维线性空间 $V$ 上的线性变换 $\varphi$）适合一个非零首一多项式 $m(x)$，且 $m(x)$ 是 $A$（或 $\varphi$）所适合的非零多项式中次数最小者，则称 $m(x)$ 是 $A$（或 $\varphi$）的一个极小多项式或最小多项式。

从本节开始的说明我们知道，极小多项式肯定是存在的，它唯一吗？

**引理1** 

> 若 $f(x)$ 是 $A$ 适合的一个多项式，则 $A$ 的极小多项式 $m(x)$ 整除 $f(x)$。

/proof/

> 由多项式的带余除法知道
>
> $$
> f(x) = m(x)q(x) + r(x),
> $$
>
> 且 $\deg r(x) < \deg m(x)$。将 $x = A$ 代入上式得 $r(A) = O$，若 $r(x) \neq 0$，则 $A$ 适合一个比 $m(x)$ 次数更小的非零多项式，矛盾。故 $r(x) = 0$，即 $m(x) \mid f(x)$。

**命题 1** 

> 任一 $n$ 阶矩阵的极小多项式必唯一。

/proof/

> 若 $m(x), g(x)$ 都是矩阵 $A$ 的极小多项式，则由上述引理知道 $m(x)$ 能够整除 $g(x)$，$g(x)$ 也能够整除 $m(x)$。因此 $m(x)$ 与 $g(x)$ 只差一个常数因子，但极小多项式又必须首项系数为 $1$，故 $g(x) = m(x)$。$\square$

/example/

> (1) 纯量阵 $A = cI_n$ 的极小多项式 $m(x) = x - c$。
>
> (2) 方阵 $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ 满足 $A^2 = O$，因此由引理 1 知 $A$ 的极小多项式 $m(x)$ 必整除 $x^2$。因为 $A \neq O$，所以 $m(x) \neq x$，从而只能是 $m(x) = x^2$。这个例子也告诉我们，矩阵的极小多项式未必是不可约多项式。

**命题 2** 

> 相似的矩阵具有相同的极小多项式。

/proof/

> 设矩阵 $A$ 的极小多项式是 $m(x)$，矩阵 $B$ 的极小多项式是 $g(x)$，又 $A$ 和 $B$ 相似，$B = P^{-1}AP$。注意到
>
> $$
> m(B) = m(P^{-1}AP) = P^{-1}m(A)P = O,
> $$
>
> 因此 $g(x) \mid m(x)$。同理，$m(x) \mid g(x)$，故 $m(x) = g(x)$。

**命题 3** 

> 设 $A$ 是一个分块对角阵
>
> $$
> A =
> \begin{pmatrix}
> A_1 & & & \\
> & A_2 & & \\
> & & \ddots & \\
> & & & A_k
> \end{pmatrix},
> $$
>
> 其中 $A_i$ 都是方阵，则 $A$ 的极小多项式等于诸 $A_i$ 的极小多项式之最小公倍式。

/proof/

> 设 $A_i$ 的极小多项式为 $m_i(x)$，$A$ 的极小多项式为 $m(x)$。诸 $m_i(x)$ 的最小公倍式是 $g(x)$，则 $g(A_i) = O$，故
>
> $$
> g(A) =
> \begin{pmatrix}
> g(A_1) & & & \\
> & g(A_2) & & \\
> & & \ddots & \\
> & & & g(A_k)
> \end{pmatrix}
> = O,
> $$
>
> 因此 $m(x) \mid g(x)$。又因为
>
> $$
> m(A) =
> \begin{pmatrix}
> m(A_1) & & & \\
> & m(A_2) & & \\
> & & \ddots & \\
> & & & m(A_k)
> \end{pmatrix}
> = O,
> $$
>
> 因此对每个 $i$ 有 $m(A_i) = O$，即有 $m_i(x) \mid m(x)$。而 $g(x)$ 是诸 $m_i(x)$ 的最小公倍式，故 $g(x) \mid m(x)$。
>
> 综上所述，$m(x) = g(x)$。

/example/ 设 $n$ 阶方阵 $A$ 可对角化，$\lambda_1, \lambda_2, \cdots, \lambda_k$ 是 $A$ 的全部不同的特征值，求 $A$ 的极小多项式。

> 设 $A$ 的极小多项式为 $m(x)$。由 $A$ 可对角化知存在非异阵 $P$，使
>
> $$
> P^{-1}AP = B =
> \begin{pmatrix}
> B_1 & & & \\
> & B_2 & & \\
> & & \ddots & \\
> & & & B_k
> \end{pmatrix},
> $$
>
> 其中 $B_i = \lambda_i I$ ($1 \leq i \leq k$) 为纯量阵。由例 1，命题 2 和命题 3 可得
>
> $$
> m(x) = [x - \lambda_1, x - \lambda_2, \cdots, x - \lambda_k] = (x - \lambda_1)(x - \lambda_2)\cdots(x - \lambda_k).
> $$
>
> 从上面的例子可以看出，$A$ 的特征值都是极小多项式的根。事实上，这一结论对任意方阵都是成立的。

**引理2** 

> 设 $m(x)$ 是 $n$ 阶矩阵 $A$ 的极小多项式，$\lambda_0$ 是 $A$ 的特征值，则
>
> $$
> (x - \lambda_0) \mid m(x).
> $$
>

/proof/

> 由 $m(A) = O$ 及命题 6.1.2 可得 $m(\lambda_0) = 0$，故结论成立。

### · Cayley-Hamilton

从本节开始的分析知道，$n$ 阶矩阵的极小多项式的次数最多不超过 $n^2$。但是这个估计实在比较粗，我们可以估计得更精确些。

为了研究一个矩阵可能适合的多项式，我们先看比较简单的情形。设 $A$ 是一个上三角阵：

$$
A =
\begin{pmatrix}
\lambda_1 & a_{12} & \cdots & a_{1n} \\
& \lambda_2 & \cdots & a_{2n} \\
& & \ddots & \vdots \\
& & & \lambda_n
\end{pmatrix},
$$

主对角线上的元素 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 正好是 $A$ 的全部特征值。将 $A$ 依次作用于标准单位列向量 $e_1, e_2, \cdots, e_n$，可得 $n$ 个等式：

$$
Ae_1 = \lambda_1 e_1,
$$
$$
Ae_2 = a_{12} e_1 + \lambda_2 e_2,
$$
$$
\cdots \cdots
$$
$$
Ae_i = a_{1i} e_1 + \cdots + a_{i-1,i} e_{i-1} + \lambda_i e_i,
$$
$$
\cdots \cdots
$$
$$
Ae_n = a_{1n} e_1 + \cdots + a_{n-1,n} e_{n-1} + \lambda_n e_n.
$$

作

$$
f(x) = (x - \lambda_1)(x - \lambda_2)\cdots(x - \lambda_n),
$$

注意到 $(A - \lambda_i I_n)(A - \lambda_j I_n) = (A - \lambda_j I_n)(A - \lambda_i I_n)$，不难算出：

$$
f(A)(e_i) = (A - \lambda_1 I_n)(A - \lambda_2 I_n)\cdots(A - \lambda_n I_n)(e_i) = 0
$$

对一切 $i = 1, 2, \cdots, n$ 成立，因此 $f(A) = O$。而 $f(x)$ 是 $A$ 的特征多项式，因此 $A$ 适合它的特征多项式。我们很容易把上述结论推广到一般的情形。

**定理1** (Cayley-Hamilton 定理) 设 $A$ 是数域 $\mathbb{K}$ 上的 $n$ 阶矩阵，$f(x)$ 是 $A$ 的特征多项式，则 $f(A) = O$。

> $A$ 复相似于一个上三角阵，也就是说存在可逆阵 $P$，使 $P^{-1}AP = B$，$B$ 是一个上三角阵，其中 $P$ 与 $B$ 都是复矩阵，但 $A$ 与 $B$ 有相同的特征多项式 $f(x)$。记
> $$
> f(x) = x^n + a_1 x^{n-1} + \cdots + a_n,
> $$
>
> 则 $f(B) = O$。而
>
> $$
> \begin{aligned}
> f(A) &= A^n + a_1 A^{n-1} + \cdots + a_n I_n \\\\
> &= (PBP^{-1})^n + a_1 (PBP^{-1})^{n-1} + \cdots + a_n I_n \\\\
> &= PB^n P^{-1} + a_1 PB^{n-1} P^{-1} + \cdots + a_n I_n \\\\
> &= P(B^n + a_1 B^{n-1} + \cdots + a_n I_n) P^{-1} \\\\
> &= P f(B) P^{-1} = O.
> \end{aligned}
> $$
>

**推论1**

> $n$ 阶矩阵 $A$ 的极小多项式是其特征多项式的因式。特别的，$A$ 的极小多项式的次数不超过 $n$。

/proof/

> 由 Cayley-Hamilton 定理及引理 1 即得结论。

**推论2**

> $n$ 阶矩阵 $A$ 的极小多项式和特征多项式有相同的根（不计重数）。

/proof/

> 由引理 2 和推论 1 即得结论。

由于矩阵与线性变换之间有一一对应关系，因此我们有下述推论。

**推论3** (Cayley-Hamilton 定理) 

> 设 $\varphi$ 是 $n$ 维线性空间 $V$ 上的线性变换，$f(x)$ 是 $\varphi$ 的特征多项式，则 $f(\varphi) = 0$。

