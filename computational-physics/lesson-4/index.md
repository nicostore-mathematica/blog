---
url: /computational-physics/lesson-4/index.md
---
## Part 3 $LU$ 分解

一个方阵 $A \in \mathbb{C}^{n \times n}$ 的 $LU$ 分解是指将其分解为一个下三角和一个上三角矩阵的乘积：

$$
A = LU ;,
$$

其中 $L(U)$ 分别是下 (上) 三角矩阵。如果一个矩阵 $A$ 的 $LU$ 分解可以获得，那么求解它的线性方程可以转化为先后求解两个三角形矩阵的线性问题，而这个可以利用反代的方法解出。例如下面的两步走的方程的解 $\mathbf{x}$ 恰好就是 $A\mathbf{x} = \mathbf{b}$ 的解，只要 $A = LU$:

$$
\mathbf{y} = U\mathbf{x} ;, \quad L\mathbf{y} = \mathbf{b} ;.
$$

我们下面论证，前一节的高斯消元法恰好给出了矩阵 $A$ 的一个 $LU$ 分解。

按照上一节的讨论，利用一系列的置换矩阵与 Frobenius 矩阵的乘积，我们可以将 $(A, \mathbf{b})$ 约化为上三角的形式 $(U, \mathbf{c})$。这些 Frobenius 矩阵的一般形式为，

$$
G^{(j)} = \begin{pmatrix}
1 & \cdots & 0 & 0 & \cdots & \cdots & 0 \\\\
\vdots & \ddots & \vdots & \vdots & \cdots & \vdots \\\\
0 & \cdots & 1 & 0 & \cdots & \cdots & 0 \\\\
0 & \cdots & 0 & 1 & \cdots & \cdots & 0 \\\\
\vdots & \cdots & \vdots & -l\_{j+1,j} & 1 & \cdots & 0 \\\\
\vdots & \cdots & \vdots & \vdots & \vdots & \ddots & \vdots \\\\
0 & \cdots & 0 & -l\_{n,j} & 0 & \cdots & 1
\end{pmatrix} ;, \tag{e}
$$

注意各个 $G^{(j)}$ 矩阵，如果我们遍历所有的 $j = 1, \cdots, n-1$，这些矩阵中非零的元素恰好填满一个 $n \times n$ 矩阵的左下三角区域，也就是主对角线的左下方的所有矩阵元。而且，由于 $G^{(j)}$ 都是可逆的，因此我们实际上有，

$$
U = G^{(n-1)}P^{(n-1)}G^{(n-2)}P^{(n-2)} \cdots G^{(1)}P^{(1)}A ;.
$$

这个表达式实际上给出了矩阵 $PA$ 的一个所谓的 $LU$ 分解：

$$
PA = LU ;.
$$

> 如果我们定义矩阵 $M = G^{(n-1)}P^{(n-1)} \cdots G^{(1)}P^{(1)}$，那么可以证明，矩阵 $L \equiv PM^{-1}$ 一定仍然是下三角矩阵并且对角元都是 1。

事实上任意方阵都可以分解为这种形式，其中 $P = P^{(n-1)} \cdots P^{(1)}$ 是一系列置换矩阵的乘积。

利用 $LU$ 分解可以解线性方程假定非奇异矩阵 $A$ 可以分解一个下三角矩阵 $L$ 与一个上三角矩阵 $U$ 的乘积，即 $A = LU$，那么线性方程 $A\mathbf{x} = \mathbf{b}$ 可以通过两个步骤来求解：

$$
\mathbf{y} = U\mathbf{x} ;, \quad L\mathbf{y} = \mathbf{b} ;.
$$

其中每一步都是求解一个三角矩阵的线性方程组，这可以通过反代的方法给出。

于是一个关键的问题是，什么样的矩阵允许做这样的 $LU$ 分解。显然，我们前面讨论的高斯消元法恰好给出了一个矩阵的 $LU$ 分解，如果它存在的话。这个问题的关键实际上设计矩阵 $A$ 以及它的各个子矩阵的秩。

虽然对于任意矩阵的 $LU$ 分解的定理有些复杂，但是对于一个实矩阵来说，它的判别标准还是比较简单的，这就是下面的定理。

> **定理2** ：对于任意的实矩阵 $A \in \mathbb{R}^{n \times n}$ 来说，它具有唯一的 $LU$ 分解：$A = LU$，其中 $L$ 是下三角矩阵且 $l\_{ii} = 1, \quad i=1, \cdots, n$，$U$ 为上三角矩阵的充要条件为 $A$ 的所有主子矩阵 $A\_i, \quad i=1, \cdots, (n-1)$ 都是非奇异的。

特别值得注意的是，即使是一个奇异的 $n \times n$ 矩阵也可以有唯一的 $LU$ 分解，只要它的各个主子矩阵一直到 $(n-1)$ 阶都是非奇异的即可。

例如，对于奇异的矩阵 $A = \begin{pmatrix} 1 & 1 \ 1 & 1 \end{pmatrix}$ 来说，我们可以获得它的标准的、唯一的 $LU$ 分解：
$$
A = \begin{pmatrix} 1 & 0 \ 1 & 1 \end{pmatrix} \cdot \begin{pmatrix} 1 & 1 \ 0 & 0 \end{pmatrix}
$$
对于不满足定理条件的矩阵来说，可能根本就没有 $LU$ 分解的存在。例如大家可以验证，Pauli 矩阵 $\sigma\_x = \begin{pmatrix} 0 & 1 \ 1 & 0 \end{pmatrix}$ 就不存在任何的 $LU$ 分解。

这个定理的证明可以利用对 $i$ 的数学归纳法展开。其步骤非常类似于我们下面要讲述的 Cholesky 分解中的证明，我们这里不再赘述。

## Part 4 Cholesky 分解

正如前面提到的，对于正定的厄米矩阵 $A \in \mathbb{C}^{n \times n}$ 来说，我们可以找到一个矩阵 $H$ 使得 $A = H^\dagger H$。事实上，我们可以要求矩阵 $H$ 是上三角矩阵。这个分解一般称为 **Cholesky 分解**。一旦这样的 $L$ 求得之后，求解线性方程 $A\mathbf{x} = \mathbf{b}$ 的问题就可以分为两步进行：$H\mathbf{x} = \mathbf{y}$，$H^\dagger\mathbf{y} = \mathbf{b}$，每一步都只涉及三角矩阵的线性系统。因此，对于求解正定厄米矩阵的线性方程问题就化为寻找矩阵的 Cholesky 分解问题。

按照我们前面提及的线性代数的结果，正定的厄米矩阵的所有主子矩阵也都是正定的。因此，寻找 Cholesky 分解可以按照数学归纳法的思路进行。

对于 $n=1$ 的一阶矩阵，问题的解是平庸的。令 $A\_i, \quad i=1, \cdots, n$ 是原矩阵的第 $i$ 阶的主子矩阵。它们显然也都是正定的厄米矩阵。假定我们已经找到了 $A\_{i-1} \in \mathbb{C}^{(i-1) \times (i-1)}$ 的分解矩阵 $H\_{i-1}$，即 $A\_{i-1} = H\_{i-1}^\dagger H\_{i-1}$，我们试图来寻找 $A\_i$ 的分解矩阵 $H\_i$。为此，我们将矩阵 $A\_i$ 表达为
$$
A\_i = \begin{bmatrix} A\_{i-1} & \mathbf{v} \ \mathbf{v}^\dagger & \alpha \end{bmatrix} ;,
$$

其中 $\alpha$ 是一个正的实数，$\mathbf{v} \in \mathbb{C}^{i-1}$ 为一矢量。事实上我们有，
$$
\mathbf{v} = (a\_{1i}, a\_{2i}, \cdots, a\_{i-1,i})^T
$$
我们希望矩阵 $A\_i$ 具有的分解为：

$$
A\_i = H\_i^\dagger H\_i = \begin{bmatrix} H\_{i-1}^\dagger & 0 \ \mathbf{h}^\dagger & \beta \end{bmatrix} \cdot \begin{bmatrix} H\_{i-1} & \mathbf{h} \ 0^\dagger & \beta \end{bmatrix}
$$

其中的 $\mathbf{h} \in \mathbb{C}^{i-1}$ 为一待定矢量而 $\beta$ 为一个待定实数。将这个式子的右边乘出来我们就发现：

$$
H\_{i-1}^\dagger \cdot \mathbf{h} = \mathbf{v} ;,
$$

同时 $\mathbf{h}^\dagger \mathbf{h} + \beta^2 = \alpha$。由于 $H\_{i-1}^\dagger$，$\mathbf{v}$ 已知，并且 $H^\dagger$ 是一个下三角矩阵，我们当然可以轻易求解出矢量 $\mathbf{h}$。另一方面，$\beta = \sqrt{\alpha - \mathbf{h}^\dagger \mathbf{h}}$ 则给出了参数 $\beta$ 的数值。

正定厄米矩阵的 Cholesky 分解可以通过下面的算法获得。

> \[!important]
>
> **Algorithm 2 正定厄米矩阵的 Cholesky 分解**
>
> > **Require**:
> >
> > 设 $A \in \mathbb{C}^{n \times n}$ 为一正定厄米矩阵。我们需要获得上三角矩阵 $H$ 使得 $A = H^\dagger H$
> >
> > 记下三角矩阵 $H^\dagger$ 的矩阵元为 $h\_{i,j}$。首先令 $h\_{11} = \sqrt{a\_{11}}$，然后
> >
> > 【计算量】：大约 $n^3/3$ 的计算量 (比起 $LU$ 分解要少一半左右).
> >
> > 1: **for** $i = 2, \cdots, n$ **do**
> >
> > 2: 计算 $h\_{ij}$ 其中 $j = 1, \cdots, (i-1)$
> > $$
> > h\_{ij} = \frac{1}{h\_{jj}} \left( a\_{ij} - \sum\_{k=1}^{j-1} h\_{ik} h\_{jk} \right) ;, \quad j = 1, \cdots, (i-1) ;.
> > $$
> > 3: 计算 $h\_{ii}$:
> > $$
> > h\_{ii} = \left\[ a\_{ii} - \sum\_{k=1}^{i-1} h\_{ik}^2 \right]^{1/2} ;.
> > $$
> > 4: **end for**

Cholesky 分解的计算量大约是 $n^3/3$，这比通常的 $LU$ 分解要节省大约一半。这主要来源于对于对称性的运用。

从稳定性上来说，Cholesky 分解的稳定性极佳，只要矩阵确实是正定的厄米矩阵。

## Part 5 三对角矩阵线性方程组

本节我们讨论一个三对角矩阵所给出的线性方程组的求解问题。

我们将问题中的三对角矩阵的 $LU$ 分解写为如下的形式，

$$
A = \begin{bmatrix} a\_1 & c\_1 & \cdots & 0 \ b\_2 & a\_2 & \ddots & \ & \ddots & \ddots & c\_{n-1} \ 0 & & b\_n & a\_n \end{bmatrix} = LU ;,
$$

其中的矩阵 $L$ 和 $U$ 分别是下和上双对角矩阵：

$$
L = \begin{bmatrix} 1 & & \cdots & 0 \ \beta\_2 & 1 & \ddots & \ & \ddots & \ddots & \ 0 & & \beta\_n & 1 \end{bmatrix} ;, \quad U = \begin{bmatrix} \alpha\_1 & c\_1 & \cdots & 0 \ & \alpha\_2 & \ddots & \ & & \ddots & c\_{n-1} \ 0 & & & \alpha\_n \end{bmatrix} ;, \tag{f}
$$

参数 $\alpha\_i$ 以及 $\beta\_i$ 与原先的系数之间的关系有下式给出，

$$
\alpha\_1 = a\_1 ;, \quad \beta\_i = \frac{b\_i}{\alpha\_{i-1}}, \alpha\_i = a\_i - \beta\_i c\_{i-1}, ; i = 2, \cdots, n ;.
$$

这个算法又称为 Thomas 算法 (Thomas algorithm)。经过这个分解之后，我们可以利用该分解求解方程 $Ax=b$。这个过程的计算量大约是 $8n-7$。具体来说，上述分解本身需要 $3(n-1)$，而求解两个三角系统的计算量为 $5n-4$。

> \[!important]
>
> **Algorithm 3 三对角矩阵的 $LU$ 分解 (Thomas 算法)**
>
> > **Require**: 设 $A \in \mathbb{C}^{n \times n}$ 为已知三对角矩阵。令 $A=LU$，其中 $L$ 和 $U$ 由公式 (f) 给出。本算法给出计算各系数
> > $$
> > \beta\_2, \cdots, \beta\_n, ; \alpha\_1, \cdots, \alpha\_n
> > $$
> > 的计算步骤
> >
> > 【计算量】：大约 $8n-7$.
> >
> > 1: 令 $\alpha\_1 = a\_1$。
> >
> > 2: **for** $i = 2, \cdots, n$ **do**
> >
> > 3:
> > $$
> > \begin{cases}
> > \beta\_i = \frac{b\_i}{\alpha\_{i-1}}, \\\\
> > \alpha\_i = a\_i - \beta\_i c\_{i-1}, ;.
> > \end{cases}
> > $$
> > 4: **end for**
> >
> > 5: 最后可以进而利用反代法给出最后的解。

这个算法的稳定性也是不错的。如果我们假定非奇异的矩阵 $A$ 有一个小的误差 $\delta A$，即令 $A + \delta A = \hat{L}\hat{U}$，那么我们可以证明

$$
|\delta A| \le (4u + 3u^2 + u^3)|\hat{L}| \cdot |\hat{U}| ;,
$$

其中符号 $|\cdot|$ 表示一个矩阵的特殊的模，及每个矩阵元的模的最大的。$u = \epsilon\_M/2$ 则表示机器舍入误差单位。这个估计说明非奇异三对角矩阵的 $LU$ 分解基本上是稳定的，只要各个系数 $\beta\_i$ 以及 $\alpha\_i$ 不会太大。

这些系数变大的一种可能是其中某个 $\alpha\_i$ 非常接近于零。因此，如果矩阵的确是非奇异的，那么各个 $\alpha\_i$ 必定不能等于零。但是如果矩阵接近于奇异，那么有可能造成算法出现不稳定的情况。如果矩阵 $A \in \mathbb{R}^{n \times n}$ 是一个正定实对称矩阵，那么我们可以获得更好的估计，
$$
|\delta A| \le \frac{4u + 3u^2 + u^3}{1-u} |A| ;,
$$

这是分解更为稳定。
