---
title: Chapter 7 线性映射结构
permalink: /algebra/algebra-7/
createTime: 2025/12/18 21:48:10
---

## Part 1 线性映射与矩阵

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
>  $$
>  B = P^{-1}AP,
>  $$
>  则称 $A$ 与 $B$ 相似，记为 $A \approx B$. 

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

## Part 2 线性映射的像与核

### · 定义

**定义1**：

> 设 $\varphi$ 是数域 $\mathbb{K}$ 上线性空间 $V$ 到 $U$ 的线性映射，$\varphi$ 的全体像元素组成 $U$ 的子集，称为 $\varphi$ 的像，记为 $\mathrm{Im}\,\varphi$. 又，$V$ 中在 $\varphi$ 下映射到零向量的全体向量构成 $V$ 的子集，称为 $\varphi$ 的核，记为 $\mathrm{Ker}\,\varphi$. 

**命题1**：设 $\varphi$ 是线性空间 $V \to U$ 的线性映射，则 $\mathrm{Im}\,\varphi$ 是 $U$ 的子空间，$\mathrm{Ker}\,\varphi$ 是 $V$ 的子空间. 

> 设 $\alpha, \beta \in \mathrm{Im}\,\varphi$，则有 $V$ 中向量 $u, v$，使  
> $$
> \alpha = \varphi(u),\ \beta = \varphi(v).
> $$
> 显然 $\varphi(u + v) = \varphi(u) + \varphi(v) = \alpha + \beta$. 因此 $\alpha + \beta \in \mathrm{Im}\,\varphi$. 同理若 $k \in \mathbb{K}$，则 $\varphi(ku) = k\varphi(u) = k\alpha$，$k\alpha \in \mathrm{Im}\,\varphi$. 
>
> 此即 $\mathrm{Im}\,\varphi$ 是 $U$ 的子空间. 
>
> 设 $u, v \in \mathrm{Ker}\,\varphi$，则 $\varphi(u) = \varphi(v) = 0$，因此  
> $$
> \varphi(u + v) = \varphi(u) + \varphi(v) = 0.
> $$
> 这说明 $u + v \in \mathrm{Ker}\,\varphi$. 类似地可证明 $ku \in \mathrm{Ker}\,\varphi$. 因此 $\mathrm{Ker}\,\varphi$ 是 $V$ 的子空间. 

**推论1**：线性映射 $\varphi$ 是满映射的充分必要条件是 $\dim\mathrm{Im}\,\varphi = \dim U$；线性映射 $\varphi$ 是单映射的充分必要条件是 $\mathrm{Ker}\,\varphi = 0$. 

> 第一个结论显然. 对第二个结论，若 $\varphi$ 是单映射，$\varphi(v) = 0$，自然意味着 $v = 0$，即 $\mathrm{Ker}\,\varphi = 0$. 
>
> 反之，若 $\mathrm{Ker}\,\varphi = 0$，如果 $\varphi(u) = \varphi(v)$，则 $\varphi(u - v) = \varphi(u) - \varphi(v) = 0$，故 $u - v = 0$，即 $u = v$. 

**定义2** 

> 设 $\varphi$ 是 $V \to U$ 的线性映射. 称像空间 $\mathrm{Im}\,\varphi$ 的维数为 $\varphi$ 的秩，记作 $r(\varphi)$. 核空间 $\mathrm{Ker}\,\varphi$ 的维数称为 $\varphi$ 的零度. 

如果一个线性映射的表示矩阵已知，那么它的像空间和核空间的维数如何确定？像空间和核空间如何用已知的基向量来表示？

在回答这些问题之前，我们先通过一个引理引入线性映射的限制的概念，这一概念在后面将会经常用到. 

**引理1** 设 $\varphi: V \to U$ 为线性映射，$V' \subseteq V$，$U' \subseteq U$ 为子空间且满足 $\varphi(V') \subseteq U'$，则通过定义域的限制可得线性映射 $\varphi': V' \to U'$，使得 $\varphi'$ 与 $\varphi$ 具有相同的映射法则. 进一步，若 $\varphi$ 是单映射，则 $\varphi'$ 也是单映射. 

>  定义 $\varphi': V' \to U'$ 如下：对任一 $v' \in V'$，$\varphi'(v') = \varphi(v') \in U'$. 显然 $\varphi'$ 是一个定义好的映射，它其实是将 $\varphi$ 的定义域限制在 $V'$ 上得到的映射，当然与 $\varphi$ 具有相同的映射法则. 
>
> 由 $\varphi$ 是线性映射容易验证 $\varphi'$ 也是线性映射. 注意到 $\mathrm{Ker}\,\varphi' = \mathrm{Ker}\,\varphi \cap V'$，因此第二个结论由推论1即得. 

/example/

> 设 $V$ 是 Descartes 平面，$\varphi$ 是绕原点逆时针旋转 $\theta$ 角的线性变换. 
>
> 设 $V'$ 是 $x$-轴所在的一维子空间，$U'$ 是 $\theta$ 角直线所在的一维子空间，则限制映射 $\varphi': V' \to U'$ 不仅是单线性映射，也是满线性映射. 

**定理1** 设 $V$, $U$ 分别是数域 $\mathbb{K}$ 上的 $n$ 维和 $m$ 维线性空间，又设 $\{e_1, e_2, \cdots, e_n\}$ 是 $V$ 的基，$\{f_1, f_2, \cdots, f_m\}$ 是 $U$ 的基. 若 $\varphi$ 是 $V \to U$ 的线性映射，它在给定基下的表示矩阵为 $A$，则
$$
\dim \mathrm{Im}\,\varphi = \mathrm{rank}(A),\ \dim \mathrm{Ker}\,\varphi = n - \mathrm{rank}(A).
$$

> [!caution]
>
> 回顾一下：设 $T$ 是从 $\mathcal{L}(V,U)$ 到 $M_{m\times n}(\mathbb{K})$ 的映射，则 $T$ 是一个线性同构. 不仅如此，$\eta_2 \varphi = \varphi_A \eta_1$. 
> $$
> \begin{array}{ccc}
> V & \overset{\varphi}\rightarrow & U \\
> \downarrow{\eta_1} & & \downarrow{\eta_2} \\
> \mathbb{K}_n & \overset{\varphi_A}\rightarrow & \mathbb{K}_m
> \end{array}
> $$
>
> > /proof/
> >
> > 我们先证明 $\eta_1(\mathrm{Ker}\,\varphi) \subseteq \mathrm{Ker}\,\varphi_A$，$\eta_2(\mathrm{Im}\,\varphi) \subseteq \mathrm{Im}\,\varphi_A$. 
> >
> > 任取 $v \in \mathrm{Ker}\,\varphi$，则由图的交换性可得 $\varphi_A(\eta_1(v)) = \eta_2(\varphi(v)) = \eta_2(0) = 0$，即 $\eta_1(v) \in \mathrm{Ker}\,\varphi_A$，从而 $\eta_1(\mathrm{Ker}\,\varphi) \subseteq \mathrm{Ker}\,\varphi_A$. 
> >
> > 任取 $u \in \mathrm{Im}\,\varphi$，则存在 $v \in V$ 使得 $u = \varphi(v)$，由图的交换性可得 $\eta_2(u) = \eta_2(\varphi(v)) = \varphi_A(\eta_1(v)) \in \mathrm{Im}\,\varphi_A$，从而 $\eta_2(\mathrm{Im}\,\varphi) \subseteq \mathrm{Im}\,\varphi_A$. 
> >
> > 注意到 $\eta_1$, $\eta_2$ 都是线性同构，由引理1 通过定义域的限制可以得到两个单线性映射 $\eta'_1: \mathrm{Ker}\,\varphi \to \mathrm{Ker}\,\varphi_A$ 和 $\eta'_2: \mathrm{Im}\,\varphi \to \mathrm{Im}\,\varphi_A$. 
> >
> > 接下来我们证明这两个线性映射也是满射. 
> >
> > 任取 $\alpha \in \mathrm{Ker}\,\varphi_A$，因为 $\eta_1$ 是一一对应，故存在 $v \in V$，使得 $\eta_1(v) = \alpha$，
> >
> > 于是由图的交换性可得 $0 = \varphi_A(\alpha) = \varphi(\eta_1(v)) = \eta_2(\varphi(v))$. 
> >
> > 因为 $\eta_2$ 也是一一对应，故 $\varphi(v) = 0$，即 $v \in \mathrm{Ker}\,\varphi$，于是 $\eta'_1(v) = \eta_1(v) = \alpha$，即 $\eta'_1: \mathrm{Ker}\,\varphi \to \mathrm{Ker}\,\varphi_A$ 是满射，从而是线性同构. 
> >
> > 任取 $\beta \in \mathrm{Im}\,\varphi_A$，则存在 $\alpha \in \mathbb{K}_n$，使得 $\varphi_A(\alpha) = \beta$. 
> >
> > 因为 $\eta_1$ 是一一对应，故存在 $v \in V$，使得 $\eta_1(v) = \alpha$，于是由图的交换性可得 $\beta = \varphi_A(\alpha) = \varphi_A(\eta_1(v)) = \eta_2(\varphi(v))$. 
> >
> > 令 $u = \varphi(v) \in \mathrm{Im}\,\varphi$，则 $\eta'_2(u) = \eta_2(u) = \beta$，即 $\eta'_2: \mathrm{Im}\,\varphi \to \mathrm{Im}\,\varphi_A$ 是满射，从而是线性同构. 
> >
> > 将 $A$ 表示成列分块的形式:
> > $$
> > A = (\alpha_1, \alpha_2, \cdots, \alpha_n),
> > $$
> > 其中 $\alpha_j$ 是 $A$ 的第 $j$ 列向量. 任取 $x = (x_1, x_2, \cdots, x_n)' \in \mathbb{K}_n$，则 $\mathrm{Im}\,\varphi_A$ 中的任意向量
> > $$
> > \varphi_A(x) = Ax = x_1\alpha_1 + x_2\alpha_2 + \cdots + x_n\alpha_n
> > $$
> > 其中 $x_1, x_2, \cdots, x_n$ 可取 $\mathbb{K}$ 中的任意数，因此 $\mathrm{Im}\,\varphi_A = L(\alpha_1, \alpha_2, \cdots, \alpha_n)$. 
> >
> > 易知 $\dim \mathrm{Im}\,\varphi_A = \mathrm{rank}(A)$. 因为 $\eta'_2: \mathrm{Im}\,\varphi \to \mathrm{Im}\,\varphi_A$ 是线性同构，故 $\dim \mathrm{Im}\,\varphi = \mathrm{rank}(A)$. 
> >
> > 又 $\mathrm{Ker}\,\varphi_A = \{x \in \mathbb{K}_n \mid \varphi_A(x) = Ax = 0\}$，即 $\mathrm{Ker}\,\varphi_A$ 是齐次线性方程组 $Ax = 0$ 的解空间，知
> > $$
> > \dim \mathrm{Ker}\,\varphi_A = n - \mathrm{rank}(A)
> > $$
> > 因为 $\eta'_1: \mathrm{Ker}\,\varphi \to \mathrm{Ker}\,\varphi_A$ 是线性同构，故 $\dim \mathrm{Ker}\,\varphi = n - \mathrm{rank}(A)$. 

**推论2** (线性映射的维数公式) 设 $\varphi$ 是 $\mathbb{K}$ 上 $n$ 维线性空间 $V$ 到 $\mathbb{K}$ 上 $m$ 维线性空间 $U$ 的线性映射，则
$$
\dim \mathrm{Ker}\,\varphi + \dim \mathrm{Im}\,\varphi = \dim V.
$$
**推论3** 记号同上，$\varphi$ 是满映射的充分必要条件是 $r(A) = m$，即表示矩阵 $A$ 是一个行满秩阵；$\varphi$ 是单映射的充分必要条件是 $r(A) = n$，即 $A$ 是一个列满秩阵. 

**推论4** $n$ 维线性空间 $V$ 上的线性变换 $\varphi$ 是可逆变换的充分必要条件为它是单映射或它是满映射. 

> 若 $\varphi$ 是单映射，则 $\mathrm{Ker}\,\varphi = 0$. 而
> $$
> \dim \mathrm{Ker}\,\varphi + \dim \mathrm{Im}\,\varphi = n.
> $$
> 因此 $\dim \mathrm{Im}\,\varphi = n$，即 $\varphi$ 是满映射，从而 $\varphi$ 是可逆变换（即自同构）. 
>
> 若 $\varphi$ 是满映射，则 $r(\varphi) = \dim \mathrm{Im}\,\varphi = n$，故 $\mathrm{Ker}\,\varphi = 0$，即 $\varphi$ 是单映射，因而也是自同构. 
>
> **注意**.  用代数方法证明这个推论也很简单，事实上，一个 $n$ 阶方阵可逆的充分必要条件是或它为行满秩阵，或它为列满秩阵. 

**推论5** $n$ 维线性空间 $V$ 上的线性变换 $\varphi$ 是单映射（或满映射）的充分必要条件为它在 $V$ 的任意一组基下的表示矩阵是可逆阵. 

### · 计算

下面的例子将告诉我们如何计算像空间和核空间. 

设 $V$ 是 $\mathbb{K}$ 上五维空间，$U$ 是 $\mathbb{K}$ 上四维空间，$\{e_1, e_2, e_3, e_4, e_5\}$ 是 $V$ 的基，$\{f_1, f_2, f_3, f_4\}$ 是 $U$ 的基，$V \to U$ 的线性映射 $\varphi$ 在上述基下的表示矩阵为
$$
A =
\begin{pmatrix}
1 & 2 & 1 & -3 & 2 \\
2 & 1 & 1 & 1 & -3 \\
1 & 1 & 2 & 2 & -2 \\
2 & 3 & -5 & -17 & 10
\end{pmatrix},
$$
求 $\mathrm{Im}\,\varphi$ 和 $\mathrm{Ker}\,\varphi$. 

> 对矩阵 $A$ 进行初等行变换:
> $$
> \begin{aligned}
> A &=
> \begin{pmatrix}
> 1 & 2 & 1 & -3 & 2 \\
> 2 & 1 & 1 & 1 & -3 \\
> 1 & 1 & 2 & 2 & -2 \\
> 2 & 3 & -5 & -17 & 10
> \end{pmatrix}
> \to
> \begin{pmatrix}
> 1 & 2 & 1 & -3 & 2 \\
> 0 & -3 & -1 & 7 & -7 \\
> 0 & -1 & 1 & 5 & -4 \\
> 0 & -1 & -7 & -11 & 6
> \end{pmatrix}
> \to
> \begin{pmatrix}
> 1 & 0 & 3 & 7 & -6 \\
> 0 & -1 & 1 & 5 & -4 \\
> 0 & 0 & -4 & -8 & 5 \\
> 0 & 0 & -8 & -16 & 10
> \end{pmatrix}
> \\\\ &\to
> \begin{pmatrix}
> 1 & 0 & 3 & 7 & -6 \\
> 0 & -1 & 1 & 5 & -4 \\
> 0 & 0 & -4 & -8 & 5 \\
> 0 & 0 & 0 & 0 & 0
> \end{pmatrix}
> \to
> \begin{pmatrix}
> 1 & 0 & 0 & 1 & -\frac{9}{4} \\
> 0 & 1 & 0 & -3 & \frac{11}{4} \\
> 0 & 0 & 1 & 2 & -\frac{5}{4} \\
> 0 & 0 & 0 & 0 & 0
> \end{pmatrix}.
> \end{aligned}
> $$
> 因此 $r(A) = 3$，即 $\dim \mathrm{Im}\,\varphi = 3$. 从上面可以看出 $A$ 的前 3 个列向量线性无关，因此它们可以组成 $\mathrm{Im}\,\varphi$ 的一组基，故
> $$
> \mathrm{Im}\,\varphi = k_1(f_1 + 2f_2 + f_3 + 2f_4) + k_2(2f_1 + f_2 + f_3 + 3f_4) + k_3(f_1 + f_2 + 2f_3 - 5f_4),
> $$
> 其中 $k_i$ 可取 $\mathbb{K}$ 中的任意数. 
>
> 方程 $Ax = 0$ 的基础解系为
> $$
> \alpha_1 =
> \begin{pmatrix}
> -1 \\ 3 \\ -2 \\ 1 \\ 0
> \end{pmatrix},
> \quad
> \alpha_2 =
> \begin{pmatrix}
> 9 \\ -11 \\ 5 \\ 0 \\ 4
> \end{pmatrix}.
> $$
> 因此
> $$
> \mathrm{Ker}\,\varphi = k_1(-e_1 + 3e_2 - 2e_3 + e_4) + k_2(9e_1 - 11e_2 + 5e_3 + 4e_5),
> $$
> 其中 $k_i$ 可取 $\mathbb{K}$ 中的任意数. 

## Part 3 不变子空间

设 $V$ 是数域 $\mathbb{K}$ 上的线性空间，$\varphi$ 是 $V$ 上的线性变换. 

现在我们来研究由 $\varphi$ 决定的一类子空间——不变子空间. 不变子空间的理论对以后我们将要学习的标准型理论有重要的意义. 

**定义1** 

> 设 $\varphi$ 是线性空间 $V$ 上的线性变换，$U$ 是 $V$ 的子空间，若 $U$ 适合条件:
> $$
> \varphi(U) \subseteq U,
> $$
> 则称 $U$ 是 $\varphi$ 的不变子空间（或 $\varphi$-不变子空间）. 这时把 $\varphi$ 的定义域限制在 $U$ 上，则 $\varphi$ 在 $U$ 上定义了一个线性变换，称为由 $\varphi$ 诱导出的线性变换，或称为 $\varphi$ 在 $U$ 上的限制，记为 $\varphi|_U$. 
>
> 线性空间 $V$ 上任一线性变换 $\varphi$ 至少有两个不变子空间: 零子空间及全空间 $V$. 因此我们把零子空间及全空间 $V$ 称为平凡的 $\varphi$-不变子空间. 

/example/

>  线性变换 $\varphi$ 的像与核都是 $\varphi$ 的不变子空间. 
>
> > **证明** $\varphi(\mathrm{Im}\,\varphi) \subseteq \varphi(V) = \mathrm{Im}\,\varphi$，$\varphi(\mathrm{Ker}\,\varphi) = 0 \subseteq \mathrm{Ker}\,\varphi$. 由此即得结论. 
>
> Descartes 平面上绕原点的旋转当旋转角 $\theta \neq k\pi$ ($k$ 为整数) 时，没有一维的不变子空间，因此没有非平凡的不变子空间. 
>
> 设 $\varphi$ 是 $V$ 上的数乘变换，即存在常数 $k$，使 $\varphi(\alpha) = k\alpha$，则 $V$ 的任一子空间都是 $\varphi$ 的不变子空间. 

下面我们讨论线性变换的不变子空间和该线性变换的表示矩阵之间的关系. 

**定理1** 设 $U$ 是 $V$ 上线性变换 $\varphi$ 的不变子空间，且设 $U$ 的基为 $\{e_1, e_2, \cdots, e_r\}$. 将 $\{e_1, e_2, \cdots, e_r\}$ 扩充为 $V$ 的一组基 $\{e_1, e_2, \cdots, e_r, e_{r+1}, \cdots, e_n\}$，则 $\varphi$ 在这组基下的表示矩阵具有下列形状:
$$
\begin{pmatrix}
a_{11} & \cdots & a_{r1} & a_{r+1,1} & \cdots & a_{n1} \\
\vdots & \ddots & \vdots & \vdots & \ddots & \vdots \\
a_{1r} & \cdots & a_{rr} & a_{r+1,r} & \cdots & a_{nr} \\
0 & \cdots & 0 & a_{r+1,r+1} & \cdots & a_{n,r+1} \\
\vdots & \ddots & \vdots & \vdots & \ddots & \vdots \\
0 & \cdots & 0 & a_{r+1,n} & \cdots & a_{nn}
\end{pmatrix}. \tag{1}
$$

> 由于 $\varphi(e_i) \in U$ ($i = 1,2,\cdots,r$)，因此
> $$
> \varphi(e_1) = a_{11}e_1 + a_{12}e_2 + \cdots + a_{1r}e_r, \\\\
> \varphi(e_2) = a_{21}e_1 + a_{22}e_2 + \cdots + a_{2r}e_r, \\\\
> \cdots\cdots\cdots\cdots \\\\
> \varphi(e_r) = a_{r1}e_1 + a_{r2}e_2 + \cdots + a_{rr}e_r,
> $$
> 即在 $\varphi(e_1), \cdots, \varphi(e_r)$ 的表示式中，$e_{r+1}, \cdots, e_n$ 前的系数均为零，因此 $\varphi$ 的表示矩阵具有所要求的形状. 

上述定理的逆命题也是成立的. 即若 $V$ 有一组基 $\{e_1, e_2, \cdots, e_n\}$，如果线性变换 $\varphi$ 在 $V$ 的这组基下的表示矩阵是分块上三角阵 (1)，则由基向量 $e_1, \cdots, e_r$ 生成的子空间 $V_1$ 是 $\varphi$ 的不变子空间. 

事实上，由矩阵 (1) 即知 $\varphi(e_i) \in V_1$ ($i = 1,\cdots,r$). 因此 $\varphi(V_1) \subseteq V_1$. 

**推论1** 设 $V = V_1 \oplus V_2$ 且 $V_1, V_2$ 都是线性变换 $\varphi$ 的不变子空间. 又 $\{e_1, \cdots, e_r\}$ 是 $V_1$ 的基，$\{e_{r+1}, \cdots, e_n\}$ 是 $V_2$ 的基，则 $\varphi$ 在基 $\{e_1, e_2, \cdots, e_n\}$ 下的表示矩阵为分块对角阵
$$
\begin{pmatrix}
A_1 & O \\
O & A_2
\end{pmatrix}, \tag{2}
$$
其中 $A_1$ 为 $r$ 阶方阵，$A_2$ 为 $n-r$ 阶方阵. 

> 证明过程类似定理1

显然推论1 还可进一步推广. 

> 设 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_m$，其中每个 $V_i$ 都是线性变换 $\varphi$ 的不变子空间，那么在 $V$ 中存在一组基（这组基可由 $V_i$ 的基合并而成），使 $\varphi$ 在这组基下的表示矩阵为分块对角阵:
> $$
> \begin{pmatrix}
> A_1 & & & \\
> & A_2 & & \\
> & & \ddots & \\
> & & & A_m
> \end{pmatrix},
> $$
> 其中 $A_i$ 是 $\varphi|_{V_i}$ 的表示矩阵，它是 $r_i$ 阶方阵，$r_i = \dim V_i$. 
>
> 如果 $n$ 维线性空间的线性变换 $\varphi$ 有足够小的不变子空间，比如有 $n$ 个一维不变子空间，其直和正好组成全空间，那么上式中的表示矩阵就是一个对角阵. 

/example/

设 $V$ 是数域 $\mathbb{K}$ 上的三维空间，$\{e_1, e_2, e_3\}$ 是 $V$ 的基，$\varphi$ 是 $V$ 上线性变换，它在这组基下的表示矩阵为
$$
\begin{pmatrix}
3 & 1 & -1 \\
2 & 2 & -1 \\
2 & 2 & 0
\end{pmatrix}.
$$
求证: 由向量 $\{e_3, e_1 + e_2 + 2e_3\}$ 生成的子空间 $U$ 是 $\varphi$ 的不变子空间. 

> $\varphi(e_3)$ 的坐标向量为
> $$
> \begin{pmatrix}
> 3 & 1 & -1 \\
> 2 & 2 & -1 \\
> 2 & 2 & 0
> \end{pmatrix}
> \begin{pmatrix}
> 0 \\ 0 \\ 1
> \end{pmatrix}
> =
> \begin{pmatrix}
> -1 \\ -1 \\ 0
> \end{pmatrix}.
> $$
> 容易求出向量组 $\{(-1,-1,0)', (0,0,1)', (1,1,2)'\}$ 的秩为 2，而 $U$ 显然是二维子空间，因此 $\varphi(e_3) \in U$. 同理可证 $\varphi(e_1 + e_2 + 2e_3) \in U$，故 $U$ 是 $\varphi$-不变子空间. $\varphi(e_3)$ 的坐标向量为
> $$
> \begin{pmatrix}
> 3 & 1 & -1 \\
> 2 & 2 & -1 \\
> 2 & 2 & 0
> \end{pmatrix}
> \begin{pmatrix}
> 0 \\ 0 \\ 1
> \end{pmatrix}
> =
> \begin{pmatrix}
> -1 \\ -1 \\ 0
> \end{pmatrix}.
> $$
> 容易求出向量组 $\{(-1,-1,0)', (0,0,1)', (1,1,2)'\}$ 的秩为 2，而 $U$ 显然是二维子空间，因此 $\varphi(e_3) \in U$. 同理可证 $\varphi(e_1 + e_2 + 2e_3) \in U$，故 $U$ 是 $\varphi$-不变子空间. 

结束. 

