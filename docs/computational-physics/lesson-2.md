---
title: Lesson 2 线性方程组 I
permalink: /computational-physics/lesson-2/
createTime: 2026/03/13 22:16:04
---

本章我们将主要讨论求解线性方程组的数值方法中的比较“简单”的几类。线性方程组的求解在物理学的众多数值应用中都会遇到。因此，这是我们这个课程的一个基础。后面的许多章都会涉及。

由于这是一个非常大的一个课题，本章中我们将仅仅涉及其中的一些基础的内容，主要包括：高斯消元法、$LU$ 分解、Cholesky 分解等。更为复杂的内容（比如奇异值分解等）将放在后面讨论。

## Part 1 线性代数

首先是一些符号。一个数域 $\mathbb{K}$ 上面的 $n$ 行 $m$ 列的矩阵 $A$ 我们一般记为：$A \in \mathbb{K}^{n \times m}$，其中数域 $\mathbb{K}$ 最为常见的情形是复数域 $\mathbb{C}$ 和实数域 $\mathbb{R}$。矩阵可以视为两个矢量空间 $\mathbb{K}^n$ 和 $\mathbb{K}^m$ 之间的一个线性映射。

### · 矩阵的迹和行列式

当 $n=m$，我们称该矩阵为一个方阵。对于方阵我们可以定义它的 **迹** 和 **行列式**。一个矩阵的迹就是该矩阵对角元之和：

$$
Tr(A) = \sum_{i=1}^n a_{ii}
$$

矩阵的行列式则在求解线性方程中具有重要的意义。它的原初定义为：

$$
\det(A) = \sum_{\pi \in P} \text{sign}(\pi) a_{1\pi_1} a_{2\pi_2} \cdots a_{n\pi_n}
$$

其中 $\pi$ 表示 $(12\cdots n)$ 的一个排列而 $\text{sign}(\pi)$ 则表示该排列的奇偶性，即经过奇数/偶数次对换可以恢复到原始排列。按照所谓的 Laplace 法则，矩阵的行列式还可以表达为，

$$
\det(A) = \sum_{j=1}^n \Delta_{ij} a_{ij}
$$

其中 $i \in [1, n]$ 是任意一个行指标而 $\Delta_{ij}$ 是矩阵元 $a_{ij}$ 的代数余子式。 事实上，矩阵 $A$ 的逆矩阵可以表达为

$$
A^{-1} = \frac{1}{\det(A)} \Delta
$$

其中 $\Delta$ 是以 $\Delta_{ij}$ 为矩阵元的矩阵。由此我们看到，一个方阵的逆矩阵存在的充分必要条件是它的行列式不为零。

从上面的公式出发我们可以很容易获得求解线性方程 $Ax=b$ 的方法，

$$
x_j = \Delta_j / \det(A), \quad j=1, \cdots, n
$$

其中 $\Delta_j$ 是将原矩阵中的第 $j$ 列换为矢量 $b$ 所得到的矩阵之行列式的值。这个法则一般称为 **克莱默法则 (Cramer's rule)**。

但是，上述行列式以、逆矩阵以及线性方程求解的公式并不能直接用于数值计算。因为按照这些公式，行列式的计算涉及到 $O(n!)$ 的计算量。这对于即使不太大的矩阵来说也过于庞大了。例如，即使对于大约 100 阶的矩阵来说（或者说求解 100 个联立的线性方程组），按照这些公式计算的话在我们有生之年都不太可能算出结果。为了获得数值上近似的解，我们需要更聪明的计算方法。

### · 矩阵的阶和核

矩阵 $A \in \mathbb{K}^{m \times n}$ 的秩—记为 $\text{rank}(A)$—可以定义为从矩阵 $A$ 中能够抽取的非奇异的子矩阵的最大的阶数。当 $A$ 被视为 $\mathbb{K}^n \to \mathbb{K}^m$ 的线性映射时，我们可以定义其值域为：

$$
\text{range}(A) = \{y \in \mathbb{K}^m : y = A \cdot x, x \in \mathbb{K}^n\}
$$

而矩阵的秩也可以定义为其值域空间的维数：$\text{rank}(A) = \dim(\text{range}(A))$。另一个重要的概念是矢量的线性相关。一个矩阵按照行的秩与其按照列的秩定义为线性无关的矢量的数目。严格来说，我们需要区分矩阵按照行的秩和按照列的秩。但是线性代数的基础知识告诉我们这两个是一致的。线性映射 $A$ 的核定于为：

$$
\ker(A) = \{x \in \mathbb{K}^n : A \cdot x = 0\}
$$

那么下列关系是成立的：

- $\text{rank}(A) = \text{rank}(A^T)$
- $\text{rank}(A) + \dim(\ker(A)) = n$

### · 矢量与矩阵的模

我们讨论的矢量空间同时也是具有 **范数**（或者称为 **模**）的空间。数学中可以对一般的模进行定义。一个矢量空间 $V$ 上的模 $||\cdot||$ 一般来说可以定义为满足下列条件的非负函数：

> (1). 非负性：$||\mathbf{v}|| \ge 0, \forall \mathbf{v} \in V$ 且 $||\mathbf{v}|| = 0$ 当且仅当 $\mathbf{v} = 0$;
>
> (2). 均匀性： $||\alpha \mathbf{v}|| = |\alpha| \cdot ||\mathbf{v}||; \forall \alpha \in \mathbb{K}, \forall \mathbf{v} \in V$; ( 对于 $\mathbb{K}=\mathbb{R}$，$|\alpha|$ 表示其绝对值；对于 $\mathbb{K}=\mathbb{C}$，$|\alpha|$ 表示其模。 )
>
> (3). 三角不等式：$||\mathbf{v} + \mathbf{w}|| \le ||\mathbf{v}|| + ||\mathbf{w}||, \forall \mathbf{v}, \mathbf{w} \in V$.

一个常用的模是所谓的 **$p$ - 模**，又称为 Hölder 模 (Hölder norm)，它由下式定义：

$$
||\mathbf{x}||_p = \left( \sum_{i=1}^n |x_i|^p \right)^{1/p}, \quad \forall \mathbf{x} \in V, 1 \le p < \infty
$$

对于 $p$-模如果我们取极限 $p \to \infty$，就得到了 **无穷模**，它实际上仅仅挑选出矢量 $\mathbf{x}$ 的分量中模最大的那个：

$$
||\mathbf{x}||_\infty = \max_{1 \le i \le n} |x_i|
$$

另外一个经常用到的是 $p=2$ 的情形。对于我们讨论的实空间和复空间来说，这个模称为相应空间的 **欧氏模 (Euclidean norm)**：

$$
||\mathbf{x}||_2 = (x, x)^{1/2} = (x^\dagger x)^{1/2} = \left( \sum_{i=1}^n |x_i|^2 \right)^{1/2}
$$

既然矢量空间中模的定义可以有很多种，一个自然的问题是它们是否都等价呢？按照定义，矢量空间 $V$ 上的两个模 $||\cdot||_p$ 和 $||\cdot||_q$ 被称为 **等价**，如果存在两个正的常数 $c_{pq} > 0$ 和 $C_{pq} > 0$ 使得：

$$
c_{pq} ||\mathbf{x}||_q \le ||\mathbf{x}||_p \le C_{pq} ||\mathbf{x}||_q, \forall \mathbf{x} \in V
$$

也就是说其中对于任意的矢量，其中一个模加在另外一个模的两个正常数倍数之间。相应的这些常数 $c_{pq}$ 和 $C_{pq}$ 被称为 **等价常数**。可以证明上面给出的三种不同的 $p$-模都是等价的。等价的模的意义在于，当我们表述矢量空间中的极限的时候，例如 $\lim_{k \to \infty} \mathbf{x}^{(k)} = \mathbf{x}$，我们可以用相互等价的任何模函数来表征它。事实上，有限维矢量空间中的任何模都是等价的。

定义了矢量空间上的模之后就可以随之定义 **矩阵的模**。对于 $\mathbb{K}^{m \times n}$ 上的矩阵，它的模 $||\cdot||$ 定义为：

> (1). 非负性：$||A|| \ge 0, \forall A \in \mathbb{K}^{m \times n}$ 且 $||A|| = 0$ 当且仅当 $A = 0$;
>
> (2). 均匀性：$||\alpha A|| = |\alpha| \cdot ||A||; \forall \alpha \in \mathbb{K}, \forall A \in \mathbb{K}^{m \times n}$;
>
> (3). 三角不等式：$||A+B|| \le ||A|| + ||B||, \forall A, B \in \mathbb{K}^{m \times n}$.
>
> 我们将使用同样的符号 $||\cdot||$ 来表示矩阵和矢量的模。这不会造成太大混淆因为它们的定义域是不同的。

如果矩阵的模和矢量的模满足

$$
||A\mathbf{x}|| \le ||A|| \cdot ||\mathbf{x}||, \forall \mathbf{x} \in \mathbb{K}^n, A \in \mathbb{K}^{m \times n}
$$

我们就称相应的矩阵模与矢量模 **兼容**。另一方面，一个矩阵模 $||\cdot||$ 被称为 **服从乘法模 (sub-multiplicative norm)** 如果它满足

$$
||AB|| \le ||A|| \cdot ||B||, \forall A \in \mathbb{K}^{n \times n}, \forall B \in \mathbb{K}^{m \times q}
$$

值得指出的是，并不是所有的矩阵模都是服从乘法的模。一个简单的例子是所谓的最大模，其定义为 $||A||_\Delta = \max(|a_{ij}|)$。读者可以验证它满足矩阵模的所有条件因而构成一个矩阵模。但是对于下面的矩阵：

$$
A = B = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}
$$

我们可以很容易验证 $||AB||_\Delta = 2 > ||A||_\Delta ||B||_\Delta = 1$。

从一个矢量空间的模出发，我们可以定义一个矩阵模如下：

$$
||A|| = \sup_{\mathbf{x} \ne 0} \frac{||A\mathbf{x}||}{||\mathbf{x}||}
$$

这称为诱导矩阵模或自然矩阵模。可以证明这个矩阵模是与诱导它的矢量模兼容的，同时也是服从乘法的。同时，对于由矢量的 $p$-模所诱导的矢量模，我们也会用同样的符号来标记，例如

$$
||A||_p = \sup_{\mathbf{x} \ne 0} \frac{||A\mathbf{x}||_p}{||\mathbf{x}||_p}, \quad \forall \mathbf{x} \in V, \mathbf{x} \ne 0
$$

### · 特殊形状的矩阵

本小节我们罗列在数值计算中经常接触到的一些特殊的矩阵。

**对角矩阵 (diagonal matrix)** 是指仅仅对角元 $a_{ii}$ 不为零的矩阵。通常意义下是指方阵，但是此定义也适用于长方阵。一个矩阵 $A \in \mathbb{K}^{m \times n}$，如果对 $i > j$ 就有 $a_{ij} = 0$，我们就称矩阵 $A$ 为 **上梯形矩阵**。

相应的，如果对 $i < j$ 就有 $a_{ij} = 0$，我们就称矩阵 $A$ 为 **下梯形矩阵**。大家可以验证，如果 $m < n$ 的话，上梯形矩阵的非零矩阵元恰好构成一个梯形。对于 $m=n$ 的方阵而言，上/下梯形矩阵分别称为上/下三角矩阵。

上下三角矩阵的一些性质是容易验证的。它的行列式就是对角元的乘积。而且它的逆矩阵仍然维持原矩阵的上下三角的性质。如果上/下三角矩阵的对角元都等于 1，这样的上/下三角矩阵称为单位上/下三角矩阵。容易验证，两个单位上下三角矩阵的乘积仍然是单位上下三角矩阵。

三角矩阵的概念可以稍加推广到所谓的 **带型矩阵 (banded matrices)**。一般来说，对于 $A \in \mathbb{K}^{m \times n}$，我们称其具有 **上带 $p$**，如果对 $i > j+p$ 必定有 $a_{ij}=0$；相应的，我们称其具有 **下带 $q$** 如果对于 $j > i+q$ 必定有 $a_{ij}=0$。

利用这个概念我们可以统一上面提及的几种矩阵。例如，对角矩阵是 $p=q=0$ 的带型矩阵；下梯形矩阵是具有 $p=m-1, q=0$ 的带型矩阵；上梯形矩阵则是具有 $p=0, q=n-1$ 的带型矩阵。

如果带型矩阵的 $p=q=1$，则该带状矩阵称为 **三对角矩阵 (tridiagonal matrix)**。另外两种情形是 **上双对角 ($p=0, q=1$)** 和 **下双对角 ($p=1, q=0$)** 矩阵。另外一类我们后面会用到的矩阵是所谓的上/下 Hessenberg 矩阵。下 Hessenberg 矩阵具有 $p=m-1, q=1$ 而上 Hessenberg 矩阵则具有 $p=1, q=n-1$。

### · 正定矩阵

另外一类重要的矩阵称为正定矩阵。它们与相应的二次型密切联系在一起。二次型起源于矢量空间中的标量积 (inner product) 运算。矢量空间 $V$ 中的标量积可以视为 $V \times V$ 到 $\mathbb{K}$ 的一个映射 $(\cdot, \cdot)$，它满足：

1. 双线性：$(\alpha\mathbf{x} + \beta\mathbf{y}, \mathbf{z}) = \alpha(\mathbf{x}, \mathbf{z}) + \beta(\mathbf{y}, \mathbf{z}), \quad \forall \mathbf{x}, \mathbf{y}, \mathbf{z} \in V, \forall \alpha, \beta \in \mathbb{K}$;
2. 厄米性：$(\mathbf{x}, \mathbf{y}) = (\mathbf{y}, \mathbf{x})^*, \forall \mathbf{x}, \mathbf{y} \in V$;
3. 正定性：$(\mathbf{x}, \mathbf{x}) > 0, \forall \mathbf{x} \in V$ 除非 $\mathbf{x} = 0$.

对于空间 $\mathbb{C}^n$ 来说，我们可以内积为：

$$
(\mathbf{x}, \mathbf{y}) = \mathbf{y}^\dagger \cdot \mathbf{x} = \sum_{i=1}^n y_i^* x_i \;.
$$

>  注意这个次序与我们物理学家在量子力学中习惯的 Dirac 符号的顺序恰好相反。在量子力学中我们通常定义 $(\mathbf{x}, \mathbf{y}) = \mathbf{x}^\dagger \cdot \mathbf{y} = \langle\mathbf{x}|\mathbf{y}\rangle$。

这个标量积自然地生成前面提到的欧氏模（也就是 $p=2$ 的 $p$-模），

$$
||\mathbf{x}||_2^2 \equiv (\mathbf{x}, \mathbf{x}) = \sum_{i=1}^n |x_i|^2 \;.
$$

对于上述的标量积，我们显然有

$$
(A\mathbf{x}, \mathbf{y}) = (\mathbf{x}, A^\dagger\mathbf{y}) \;,
$$

其中 $A \in \mathbb{C}^{n \times n}$，$\mathbf{x}, \mathbf{y} \in \mathbb{C}^n$。

如果对于 $\mathbb{C}^{n \times n}$ (或 $\mathbb{R}^{n \times n}$) 中的矩阵 $A$ 以及任意的非零矢量 $\mathbf{x} \in V$ 都有 $(A\mathbf{x}, \mathbf{x})$ 是正的实数，我们就称矩阵 $A$ 是 **正定的**。如果 $>$ 换为 $\ge$ 且等号有可能成立，我们就称 $A$ 是 **半正定的**。一个实正定矩阵并不一定是对称的，但是只要它的对称部分是正定的就可以了。对于 $\mathbb{C}^{n \times n}$ 中的复矩阵 $A$，它是正定的条件要求 $A$ 必定是厄米的（从而其本征值均为实数）并且具有正的本征值。这个结论的一个推论是，正定的复矩阵必定是不奇异的。

最后，让我们提及关于复厄米正定矩阵的下列性质。令 $A \in \mathbb{C}^{n \times n}$ 为厄米矩阵。那么它是正定矩阵当且仅当下列等价的条件之一获得满足：

1. $(A\mathbf{x}, \mathbf{x}) > 0, \forall \mathbf{x} \ne 0, \mathbf{x} \in \mathbb{C}^n$;
2. $A$ 的主子矩阵的本征值都是正的；
3. $A$ 的主子矩阵的行列式都是正的（又称 Sylvester 判据）；
4. 存在一个非奇异矩阵 $H \in \mathbb{R}^{n \times n}$ 使得 $A = H^\dagger H$.

正是这最后一个条件使得我们对于正定的厄米矩阵可以采用所谓的 Cholesky 分解，参见第 6 节。事实上，非奇异的 $H$ 不仅仅是存在的，我们还可以将其选为上三角矩阵（从而 $H^\dagger$ 为下三角矩阵）。
