---
url: /algebra/algebra-4/index.md
---
## Part 1 向量组的秩

$V$ 为 $K$ 上的线性空间，向量族为 $V$ 中向量的集合；向量组为 $V$ 中有限向量的集合.

**定义1**：

> 设 $S$ 是 $V$ 的向量族，若存在 $S$ 中的向量组 ${\alpha\_1, \alpha\_2, \cdots, \alpha\_r}$，使得：
>
> 1. $\alpha\_1, \alpha\_2, \cdots, \alpha\_r$ 线性无关；
> 2. $S$ 中任一向量都是 $\alpha\_1, \alpha\_2, \cdots, \alpha\_r$ 的线性组合，
>
> 则称 ${\alpha\_1, \alpha\_2, \cdots, \alpha\_r}$ 为 $S$ 的**极大线性无关组**或**极大无关组**。

> \[!important]
>
> * ${\alpha\_1, \alpha\_2, \cdots, \alpha\_r}$ 线性无关。
> * $\forall \alpha \in S$ ，${\alpha\_1, \alpha\_2, \cdots, \alpha\_r, \alpha}$ 线性相关。

**命题2**：包含非零向量的向量组 $S$ 必存在极大无关组。

> 对 $S$ 的向量个数 $#S$ 进行归纳。
>
> * 若 $#S = 1$，$S = {\alpha}$，$\alpha \neq 0$，极大无关组为 ${\alpha}$。✅
>
> * 下设 $#S < k$ 时结论成立，下证 $#S = k$ 的情形。
>
> (1). 若 $S$ 中 $k$ 个向量线性无关，则此时 $S$ 即为自己的极大无关组。
>
> (2). 若 $S$ 中 $k$ 个向量线性相关，由定理，$\exists \alpha \in S$，使得 $\alpha$ 是 $S \setminus {\alpha}$ 中向量的线性组合。
>
> $#(S \setminus {\alpha}) = k - 1$，断言 $S \setminus {\alpha}$ 包含非零向量。
>
> 用反证法：若 $S \setminus {\alpha}$ 都是零向量，由假设 $\alpha = 0$。这与 $S$ 包含非零向量矛盾！
>
> 由归纳假设，$S \setminus {\alpha}$ 存在极大无关组 ${\alpha\_1, \alpha\_2, \cdots, \alpha\_r}$。
>
> 由假设 $\alpha$ 能线性表示 $S \setminus {\alpha}$ 能线性表示 ${\alpha\_1, \alpha\_2, \cdots, \alpha\_r}$，
>
> （线性表示）
> $$
> \Rightarrow {\alpha\_1, \alpha\_2, \cdots, \alpha\_r}
> $$
>
> 是 $S$ 的极大无关组.

**引理3**：设 $A, B$ 为向量组，且 $A$ 中任一向量都是 $B$ 中向量的线性组合。若 $A$ 中向量线性无关，则 $#A \leq #B$。

> 证明：设
>
> $$
> A = {\alpha\_1, \alpha\_2, \cdots, \alpha\_r}, \quad #A = r \\
> B = {\beta\_1, \beta\_2, \cdots, \beta\_s}, \quad #B = s
> $$
>
> 用反证法，设 $r > s$，我们来推出矛盾！
>
> 由假设：\
> $$
> \alpha\_i = \lambda\_{i1}\beta\_1 + \lambda\_{i2}\beta\_2 + \cdots + \lambda\_{is}\beta\_s, \quad \lambda\_{ij} \in K
> $$
>
> 由 $A$ 线性无关，则 $\alpha\_1 \neq 0$，从而 $\lambda\_1, \cdots, \lambda\_s$ 不全为 0。
>
> 不妨设 $\lambda\_1 \neq 0$，则\
> $$
> \beta\_1 = \frac{1}{\lambda\_1}\alpha\_1 - \frac{\lambda\_2}{\lambda\_1}\beta\_2 - \cdots - \frac{\lambda\_s}{\lambda\_1}\beta\_s
> $$
>
> $$
> {\alpha\_1, \cdots, \alpha\_r} \overset{\text{linear}}\rightarrow {\beta\_1, \beta\_2, \cdots, \beta\_s} \overset{\text{linear}}\rightarrow {\alpha\_1, \beta\_2, \cdots, \beta\_s}
> $$
>
> 证明了：$\forall i \leq r$，$\alpha\_i$ 是 ${\alpha\_1, \cdots, \beta\_s}$ 的线性组合。
>
> **假设**：$\forall k < i \leq r$，$\alpha\_i$ 是 ${\alpha\_1, \cdots, \alpha\_k, \alpha\_{k+1}, \cdots, \beta\_s}$ 的线性组合。
>
> 令\
> $$
> \alpha\_{k+1} = \mu\_1\alpha\_1 + \cdots + \mu\_k\alpha\_k + \mu\_{k+1}\beta\_{k+1} + \cdots + \mu\_s\beta\_s
> $$
>
> 若 $\mu\_{k+1} = \cdots = \mu\_s = 0$，则 $\alpha\_{k+1}$ 是 $\alpha\_1, \cdots, \alpha\_k$ 的线性组合，这与 $A$ 线性无关矛盾！
>
> 故不妨设 $\mu\_{k+1} \neq 0$，从而\
> $$
> \beta\_{k+1} = -\frac{\mu\_1}{\mu\_{k+1}}\alpha\_1 - \cdots - \frac{\mu\_k}{\mu\_{k+1}}\alpha\_k + \frac{1}{\mu\_{k+1}}\alpha\_{k+1} - \frac{\mu\_{k+2}}{\mu\_{k+1}}\beta\_{k+2} - \cdots - \frac{\mu\_s}{\mu\_{k+1}}\beta\_s
> $$
>
> $$
> {\alpha\_{k+2}, \cdots, \alpha\_r} \overset{\text{linear}}\rightarrow {\alpha\_1, \cdots, \alpha\_k, \alpha\_{k+1}, \cdots, \beta\_s} \overset{\text{linear}}\rightarrow {\alpha\_1, \cdots, \alpha\_k, \alpha\_{k+1}, \beta\_{k+2}, \cdots, \beta\_s}
> $$
>
> 证明了：$\forall k+1 < i \leq r$，$\alpha\_i$ 都是 ${\alpha\_1, \cdots, \alpha\_k, \alpha\_{k+1}, \beta\_{k+2}, \cdots, \beta\_s}$ 的线性组合。
>
> 最后，$\forall s < i \leq r$，$\alpha\_i$ 是 ${\alpha\_1, \cdots, \alpha\_s}$ 的线性组合。
>
> $\Rightarrow \alpha\_r$ 是 $\alpha\_1, \cdots, \alpha\_s$ 的线性组合，这与 $A$ 线性无关矛盾！

**推广4**：若多的向量组可用少的向量组线性表示，则多的向量必线性相关。

**引理5**：设 $A, B$ 为两个线性无关的向量组，$A$ 的任一向量都是 $B$ 中向量的线性组合，且 $B$ 的任一向量都是 $A$ 中向量的线性组合，则 $#A = #B$。

**推论6**：设 $A, B$ 是向量族 $S$ 的极大无关组，则 $#A = #B$。

> **证明**：
>
> * $A, B$ 线性无关
>
> * $$
>   A \subseteq S \overset{\text{linear}}\rightarrow B
>   $$
>
> * $$
>   B \subseteq S \overset{\text{linear}}\rightarrow A
>   $$
>
> 由引理5  $\Rightarrow#A = #B$.

**定义7**：向量族 $S$ 中极大线性无关组的向量个数称为 $S$ 的秩，记为 $\text{rank}(S)$ 或 $r(S)$。由推论6知，秩的定义不依赖于极大无关组的选择。约定由零向量构成的向量组秩为 0.

**定义8**：设 $A, B$ 是两个向量组，若 $A$ 中的每个向量都可以用 $B$ 中的向量线性表示，且 $B$ 中的每个向量也可以用 $A$ 中的向量线性表示，则称 $A, B$ 为等价的向量组。

**推论9**：等价的向量组有相同的秩。

> 1. 若 $A$ 或 $B$ 是由零向量构成，则另一个也必是由零向量构成，从而 $r(A) = r(B) = 0$.
>
> 2. 若 $A, B$ 至少有一个非零向量，则：
>
>    设 $A\_1$ 是 $A$ 的一个极大线性无关组，$B\_1$ 是 $B$ 的一个极大线性无关组。
>
>    由命题2，有 $r(A) = #A\_1$，$r(B) = #B\_1$。
>
>    因为 $A\_1 , B\_1$ 线性无关，所以
>    $$
>    A\_1 \subseteq A \overset{\text{linear}}\rightarrow B \overset{\text{linear}}\rightarrow B\_1\\
>    B\_1 \subseteq B \overset{\text{linear}}\rightarrow A \overset{\text{linear}}\rightarrow A\_1
>    $$
>    所以 $A\_1 = B\_1$，于是 $#A\_1 = #B\_1$，即 $r(A) = r(B)$.
>
> > **结论**：等价向量组的秩相等.

若 $S = V\_k$，则：极大线性无关组 $\rightarrow$ 基；秩 $\rightarrow$ 维数

**定义10**：设 $V\_k$ 为线性空间，若存在 $V$ 中线性无关的向量组 ${e\_1, e\_2, \dots, e\_n}$，使得 $V$ 中任一向量都是 ${e\_1, e\_2, \dots, e\_n}$ 的线性组合，则称 ${e\_1, e\_2, \dots, e\_n}$ 为 $V$ 的一组基，$V$ 的维数为 $n$（记为 $\dim\_k V = n$），$V$ 称为 $k$ 上的 $n$ 维线性空间。若不存在有限个向量构成 $V$ 的一组基，则称 $V$ 为无限维线性空间。

> 修正线性表示与线性无关的定义  $\Rightarrow V\_k$ 上都存在基
>
> 选择公理或 Zorn 引理  $\Rightarrow V\_k$ 上都存在基

**推论11**：在 $n$ 维线性空间 $V$ 中，超过 $n$ 个向量的向量组必线性相关。

> 📌 **注**：这是线性代数中非常重要的结论，常用于判断向量组的线性相关性。

**定理12**：

> 若下列条件之一成立：
>
> 1. $e\_1, e\_2, \dots, e\_n$ 线性无关；
> 2. $V$ 中任一向量都是 $e\_1, e\_2, \dots, e\_n$ 的线性组合，
>
> 则 ${e\_1, \dots, e\_n}$ 是 $V$ 的一组基。
>
> > /proof/
> >
> > 情况1：设 (1) 成立，即 $e\_1, \dots, e\_n$ 线性无关。
> >
> > 因为 $\dim V = n$，所以对任意 $\alpha \in V$，由 **推论11** 可知：$e\_1, \dots, e\_n, \alpha$ 必线性相关。
> >
> > 由前一定理可知，$\alpha$ 是 $e\_1, \dots, e\_n$ 的线性组合。 ✅
> >
> > 因此，(2) 也成立。
> >
> > 情况2：设 (2) 成立，即 $V$ 中任一向量是 ${e\_1, \dots, e\_n}$ 的线性组合。
> >
> > 可设 ${e\_1, \dots, e\_r}$ 是 ${e\_1, \dots, e\_n}$ 的极大线性无关组。
> >
> > 由于
> > $$
> > V \overset{\text{linear}}\rightarrow \text{span}{e\_1, \dots, e\_n} \Rightarrow \text{span}{e\_1, \dots, e\_r} \overset{\text{linear}}\rightarrow V
> > $$
> > 又因 ${e\_1, \dots, e\_r}$ 是极大无关组，且生成 $V$，故它是 $V$ 的一组基。$\Rightarrow\dim V = r = n$ ✅

**命题13**：设 $V$ 为 $n$ 维线性空间，${v\_1, \dots, v\_m}$（$m < n$）为线性无关的向量，${e\_1, \dots, e\_n}$ 为 $V$ 的一组基. 则存在 $n - m$ 个向量（不妨设为 $e\_1, \dots, e\_{n-m}$ ），使得
$$
{v\_1, \dots, v\_m, e\_1, \dots, e\_{n-m}}
$$
是 $V$ 的一组基.

> 先证：存在 $1 \leq i \leq m$，使得 $v\_1, \dots, v\_m, e\_i$ 线性无关。
>
> 用**反证法**：假设对所有 $1 \leq i \leq m$，都有 $v\_1, \dots, v\_m, e\_i$ 线性相关。
>
> 由前一定理可知，$e\_i$ 是 $v\_1, \dots, v\_m$ 的线性组合（对每个 $i$）。
>
> 于是：
> $$
> {e\_1, \dots, e\_n} \overset{\text{linear}}\rightarrow \text{span}{v\_1, \dots, v\_m}
> $$
>
> 但 ${e\_1, \dots, e\_n}$ 线性无关 ⇒ $n \leq m$，这与 $m < n$ 矛盾！
>
> 因此，必存在某个 $i$，使得 $v\_1, \dots, v\_m, e\_i$ 线性无关。
>
> 不妨设 $v\_1, \dots, v\_m, e\_1$ 线性无关。
>
> 继续添加其他 $e\_j$：
>
> * 若 $m+1 = n$，则 ${v\_1, \dots, v\_m, e\_1}$ 就是 $V$ 的一组基；
> * 若 $m+1 < n$，同理可找到下一个 $e\_j$，使得新向量组仍线性无关。
>
> 最终得到 $n$ 个线性无关向量，构成 $V$ 的一组基。
>
> 由 **定理12**，该组为基。 ✅

**定理14**（基扩张定理）：设 $V$ 为 $n$ 维线性空间，则：

1. $V$ 中任一线性无关的向量组可以扩充为 $V$ 的一组基；
2. 子空间 $U$ 的基可以扩张为全空间 $V$ 的一组基。

## Part 2 矩阵的秩

**定义1**：设 $A$ 为 $m \times n$ 阶矩阵，
$$
A =
\begin{bmatrix}
\alpha\_1 \\
\alpha\_2 \\
\vdots \\
\alpha\_m
\end{bmatrix}
\quad  \qquad
A = (\beta\_1, \beta\_2, \dots, \beta\_n)
$$

称 ${\alpha\_1, \alpha\_2, \dots, \alpha\_m}$ 的秩为 $A$ 的**行秩**；  称 ${\beta\_1, \beta\_2, \dots, \beta\_n}$ 的秩为 $A$ 的**列秩**。

**命题2**：矩阵的行秩、列秩在初等变换下不改变。

> 证明：
>
> 下面只证**列秩**在初等列变换下不变，行秩的证明完全类似。
>
> 记 $r\_c(A) = r{\beta\_1, \beta\_2, \dots, \beta\_n}$ 为 $A$ 的列秩。
>
> 1° 先证 $r\_c(A)$ 在初等变换下不变，记 $Q$ 为初等阵。
>
> (I)
> $$
> A P\_{ij} = (\beta\_1, \dots, \beta\_j, \dots, \beta\_i, \dots, \beta\_n)
> $$
> (II)
> $$
> A P\_{i}(c) = (\beta\_1, \dots, c\beta\_i, \dots, \beta\_n) \quad (c \ne 0)
> $$
> (III)
> $$
> A T\_{ji}(c) = (\beta\_1, \dots, \beta\_i, \dots, \beta\_j + c\beta\_i, \dots, \beta\_n)
> $$
>
> > **关键观察**：
> >
> > $AQ$ 的列向量都是 $A$ 的列向量的线性组合。
> >
> > 反之，$A = (AQ)Q^{-1}$，所以 $A$ 的列向量也是 $AQ$ 的列向量的线性组合。
>
> $\Rightarrow A$ 的列向量组与 $AQ$ 的列向量组**等价**
>
> $\Rightarrow r\_c(A) = r\_c(AQ)$ ✅
>
> 2° 再证 $r\_c(A)$ 在初等行变换下不改变。

**引理**：设 $A^{m \times n} = (\beta\_1, \beta\_2, \dots, \beta\_n)$ 为列分块，$Q$ 为 $m$ 阶非异阵（可逆矩阵）, 若 ${\beta\_{i\_1}, \beta\_{i\_2}, \dots, \beta\_{i\_r}}$ 是 $A$ 的列向量的极大无关组，则 ${Q\beta\_{i\_1}, Q\beta\_{i\_2}, \dots, Q\beta\_{i\_r}}$ 是 $QA = (Q\beta\_1, Q\beta\_2, \dots, Q\beta\_n)$ 的列向量的极大无关组。

> 第一步：先证 $Q\beta\_{i\_1}, \dots, Q\beta\_{i\_r}$ 线性无关。
>
> 设：
> $$
> \lambda\_1 Q\beta\_{i\_1} + \lambda\_2 Q\beta\_{i\_2} + \cdots + \lambda\_r Q\beta\_{i\_r} = 0
> $$
>
> $$
> \Rightarrow Q(\lambda\_1 \beta\_{i\_1} + \cdots + \lambda\_r \beta\_{i\_r}) = 0
> $$
>
> 由于 $Q$ 可逆 $\Rightarrow Q^{-1}$ 存在，两边左乘 $Q^{-1}$ 得：
>
> $$
> \lambda\_1 \beta\_{i\_1} + \cdots + \lambda\_r \beta\_{i\_r} = 0
> $$
>
> 但 ${\beta\_{i\_1}, \dots, \beta\_{i\_r}}$ 线性无关 $\Rightarrow \lambda\_1 = \cdots = \lambda\_r = 0$
>
> $\Rightarrow Q\beta\_{i\_1}, \dots, Q\beta\_{i\_r}$ 线性无关 ✅
>
> 第二步：再证 $Q\beta\_j$ 都是 $Q\beta\_{i\_1}, \dots, Q\beta\_{i\_r}$ 的线性组合。
>
> 由 $\beta\_j$ 是 $A$ 列向量的极大无关组可知：
>
> $$
> \beta\_j = \mu\_1 \beta\_{i\_1} + \mu\_2 \beta\_{i\_2} + \cdots + \mu\_r \beta\_{i\_r}
> $$
>
> 两边左乘 $Q$ 得：
>
> $$
> Q\beta\_j = \mu\_1 Q\beta\_{i\_1} + \cdots + \mu\_r Q\beta\_{i\_r}
> $$
>
> $\Rightarrow Q\beta\_j$ 是 $Q\beta\_{i\_1}, \dots, Q\beta\_{i\_r}$ 的线性组合 ✅
> $$
> \Rightarrow Q\beta\_j = \mu\_1 Q\beta\_{i\_1} + \mu\_2 Q\beta\_{i\_2} + \cdots + \mu\_r Q\beta\_{i\_r}, \quad \forall 1 \leq j \leq n
> $$
> **结论**：
>
> ${Q\beta\_{i\_1}, \dots, Q\beta\_{i\_r}}$ 是 $QA$ 的列向量的极大无关组，即为基。
>
> 因此，$r\_c(QA) = r\_c(A)$，故列秩在初等行变换下不变。

**引理**：初等行变换保持矩阵列向量极大无关组的列指标。

> **说明**：在引理中令 $Q$ 为初等阵，从而可得：
>
> $$
> r\_c(QA) = r\_c(A) = r
> $$
>
> 若 $A = 0$，则 $QA = 0$，此时 $r\_c(QA) = r\_c(A) = 0$

**定理3**：矩阵的行秩 = 列秩

> 证明：设 $A^{m \times n}$ 相抵于标准形：
> $$
> B = \begin{pmatrix}
> I\_r & 0 \\
> 0 & 0
> \end{pmatrix}
> $$
>
> 由命题2知：
>
> * $A$ 的行秩 = $B$ 的行秩 = $r$
> * $A$ 的列秩 = $B$ 的列秩 = $r$
>
> $\Rightarrow A$ 的行秩 = 列秩 = $r$ ✅

**命题3**：设 $A \in M\_{m\times n}(K)$，则 $r(A) = r(A^T)$

> 证明：$r(A) = A$ 的行秩 = $A$ 的列秩 = $r(A^T)$ ✅

**推论4**：设 $A \in M\_{m\times n}(K)$，则 $r(A) = r(A^T)$

> 注：这是定理3与命题3的直接推论。

**推论5**：设 $A \in M\_{m\times n}(K)$，$P$ 为 $m$ 阶非异阵，$Q$ 为 $n$ 阶非异阵，则\
$$
r(PAQ) = r(A)
$$

> 证明：\
> $$
> PAQ = P\_1 \cdots P\_k AQ\_1 \cdots Q\_s, \quad P\_i, Q\_j
> $$
>
> 为初等矩阵，由命题2（初等变换不改变秩），逐次应用可得：
> $$
> r(PAQ) = r(A)
> $$

**推论6**：设 $A \in M\_{m\times n}(K)$，$r = r(A)$，则存在非异阵 $P \in M\_m(K)$，$Q \in M\_n(K)$，使得\
$$
PAQ = \begin{pmatrix}
I\_r & 0 \\
0 & 0
\end{pmatrix}
$$

> 注：这是矩阵相抵标准形的存在性结论。

**推论7**：设 $A, B \in M\_{m\times n}(K)$，则\
$$
A \sim B \iff r(A) = r(B)
$$

> **充分性**：设 $r(A) = r(B) = r$，则
>
> * $$
>   A \sim \begin{bmatrix} I\_r & 0 \ 0 & 0 \end{bmatrix}
>   $$
>
> * $$
>   B \sim \begin{bmatrix} I\_r & 0 \ 0 & 0 \end{bmatrix}
>   $$
>
> $\Rightarrow  A \sim B$ ✅
>
> **必要性**：若 $A \sim B$，则 $A$ 可通过初等变换变为 $B$，由命题2知 $r(A) = r(B)$ ✅

**定义** (满秩矩阵)：设 $A \in M\_{m\times n}(K)$，

* 若 $r(A) = m \iff m$ 个行向量线性无关 $\Rightarrow$ 称 $A$ 为**行满秩阵**
* 若 $r(A) = n \iff n$ 个列向量线性无关 $\Rightarrow$ 称 $A$ 为**列满秩阵**

设 $A \in M\_n(K)$，若 $r(A) = n \iff n$ 个行向量/列向量线性无关 $\Rightarrow$ 称 $A$ 为**满秩阵**

**推论8**：设 $A \in M\_n(K)$，则 $A$ 非异 $\iff A$ 满秩

> **充分性**：$r(A) = n\Rightarrow$  由推论6  $\Rightarrow A \sim I\_n \Rightarrow A$ 非异 ✅
>
> **必要性**：若 $A$ 非异 $\Rightarrow A = A \cdot I\_n \Rightarrow$ 由推论5 $\Rightarrow  r(A) = r(I\_n) = n$ ✅

**引理9**：设 $A$ 为阶梯形矩阵，$a\_{k\_1}, a\_{k\_2}, \dots, a\_{k\_r}$ 为 $A$ 的**阶梯点**，则 $r(A) = r =$ 非零行个数，且阶梯点所在列向量构成 $A$ 的列向量的极大无关组。

**命题**：设 $r(A) = r$，$A = (\beta\_1, \beta\_2, \dots, \beta\_n)$，若 ${\beta\_{i\_1}, \dots, \beta\_{i\_r}}$ 满足以下条件之一：

1. $\beta\_{i\_1}, \dots, \beta\_{i\_r}$ 线性无关；
2. $\beta\_j$ 是 $\beta\_{i\_1}, \dots, \beta\_{i\_r}$ 的线性组合（对所有 $j$），

则 ${\beta\_{i\_1}, \dots, \beta\_{i\_r}}$ 是 $A$ 的列向量的极大无关组。

> 由引理9可知，**阶梯点所在列**是 $A$ 的列向量的极大无关组

> \[!important]
>
> P1：求矩阵 $A$ 的秩及列向量极大无关组的方法
>
> > **(1)** 用行变换将 $A$ 化为阶梯形矩阵 $B$，设 $b\_{k\_1}, b\_{k\_2}, \dots, b\_{k\_r}$ 为 $B$ 的阶梯点；
> >
> > **(2)** $r(A) = r(B) = B$ 的非零行个数 $= r$；
> >
> > **(3)** $A = (\beta\_1, \dots, \beta\_n)$ 的极大无关组为：\
> > $$
> > {\alpha\_{k\_1}, \alpha\_{k\_2}, \dots, \alpha\_{k\_r}}
> > $$
> > 即对应于阶梯点所在列的原向量。
>
> P2：行、列向量组的秩的计算及线性关系的判定
>
> > **(1)** 将行、列向量排成一个矩阵 $A$，用 **P1 方法** 求出 $r(A)$，即为该向量组的秩；
> >
> > **(2)** 若 $r(A) =$ 向量个数 $\Rightarrow$ 向量线性无关；若 $r(A) <$ 向量个数 $\Rightarrow$ 向量线性相关。
>
> P3：求行、列向量组的极大无关组的方法
>
> > **(1)** 将行、列向量按照列向量排成矩阵 $A$；
> >
> > **(2)** 按照 **P1 方法** 求出 $A$ 的列向量的极大无关组；$\Rightarrow$ 从而可得原向量组的极大无关组。

**定理10**：设 $A \in M\_{m\times n}(K)$，则 $r(A) = r \iff$ 存在一个 $r$ 阶子式不等于零，且所有 $r+1$ 阶子式全为零

> 必要性：设 $r(A) = r$
>
> $\Rightarrow A$ 的行秩 = $r\Rightarrow$ 存在 $r$ 行线性无关
>
> 不妨设前 $r$ 行线性无关。记 $A = (\alpha\_1, \alpha\_2, \dots, \alpha\_m)$，行分块。
>
> 令
> $$
> B =
> \begin{bmatrix}
> \alpha\_1 \\
> \alpha\_2 \\
> \vdots \\
> \alpha\_r
> \end{bmatrix}
> $$
> ，则 $r(B) = r$（行秩）
>
> $\Rightarrow B$ 的列秩 = $r\Rightarrow$  前 $r$ 列线性无关
>
> 构造矩阵：
> $$
> C =
> \begin{bmatrix}
> \alpha\_{i\_1} & \alpha\_{i\_2} & \cdots & \alpha\_{i\_r} \\
> \alpha\_{j\_1} & \alpha\_{j\_2} & \cdots & \alpha\_{j\_r} \\
> \vdots & \vdots & \ddots & \vdots \\
> \alpha\_{k\_1} & \alpha\_{k\_2} & \cdots & \alpha\_{k\_r}
> \end{bmatrix}
> \quad \Rightarrow \quad r(C) = r
> $$
>
> 即 $C$ 为满秩矩阵 ⇒ $|C| \ne 0$
>
> 故存在一个 $r$ 阶子式非零。
>
> 再证所有 $r+1$ 阶子式为零：
>
> 任取 $r+1$ 阶子式 $A\left( \begin{array}{c} 1 & 2 & \cdots & r \ 1 & 2 & \cdots & j \end{array} \right)$，其中 $j > r$
>
> 令
> $$
> A' =
> \begin{bmatrix}
> \alpha\_1 \\
> \alpha\_2 \\
> \vdots \\
> \alpha\_{r+1}
> \end{bmatrix}
> $$
> 因为 $r(A) = r$ ⇒ $\alpha\_1, \dots, \alpha\_{r+1}$ 线性相关
>
> 设 $\alpha = (\alpha\_1, \dots, \alpha\_n) \in K^n$，且 $T\_{r+1}\alpha = (\alpha\_1, \dots, \alpha\_r)$
>
> $\Rightarrow T\_{r+1}\alpha\_1, T\_{r+1}\alpha\_2, \dots, T\_{r+1}\alpha\_{r+1}$ 线性相关
>
> $\Rightarrow$ 所有 $r+1$ 阶子式为零 ✅
> $$
> \begin{bmatrix}
> T\_{r+1}\alpha\_1 \\
> T\_{r+1}\alpha\_2 \\
> \vdots \\
> T\_{r+1}\alpha\_{r+1}
> \end{bmatrix}
> =============
>
> \begin{bmatrix}
> \alpha\_{i\_1} & \alpha\_{i\_2} & \cdots & \alpha\_{i\_{r+1}} \\
> \alpha\_{j\_1} & \alpha\_{j\_2} & \cdots & \alpha\_{j\_{r+1}} \\
> \vdots & \vdots & \ddots & \vdots \\
> \alpha\_{k\_1} & \alpha\_{k\_2} & \cdots & \alpha\_{k\_{r+1}}
> \end{bmatrix}
> $$
> 不满秩
> $$
> \Rightarrow A\left( \begin{array}{c} 1 & 2 & \cdots & r+1 \ 1 & 2 & \cdots & j+1 \end{array} \right) = |C| = 0
> $$
> 充分性：
>
> 由 $r+1$ 阶子式全为零，以及 **Laplace 定理**，可证明 $A$ 的任一大于 $r$ 阶子式全为 0。
>
> 设 $r(A) = t$，则由必要性 $\Rightarrow A$ 有一个 $t$ 阶子式 $\neq 0$，且所有 $t+1$ 阶子式全为 0。
>
> * 若 $t > r$，则存在一个 $t$ 阶子式 $\neq 0$，但 $t > r$，与“所有 $r+1$ 阶子式为 0”矛盾！
> * 若 $t < r$，则存在一个 $r$ 阶子式 $\neq 0$，但 $r > t$，与“所有 $t+1$ 阶子式为 0”矛盾！
>
> 故 $t = r \Rightarrow  r(A) = r$ ✅

例1：设 $C = \begin{bmatrix} A & O \ O & B \end{bmatrix}$，则\
$$
r(C) = r(A) + r(B)
$$

> 设 $P\_1, P\_2, Q\_1, Q\_2$ 为非异阵，使得
> $$
> P\_1 A Q\_1 = \begin{bmatrix} I\_{r\_1} & O \ O & O \end{bmatrix}, \quad P\_2 B Q\_2 = \begin{bmatrix} I\_{r\_2} & O \ O & O \end{bmatrix}
> $$
>
> 构造：
> $$
> \begin{bmatrix}
> P\_1 & O \\
> O & P\_2
> \end{bmatrix}
> \begin{bmatrix}
> A & O \\
> O & B
> \end{bmatrix}
> \begin{bmatrix}
> Q\_1 & O \\
> O & Q\_2
> \end{bmatrix}
> =============
>
> \begin{bmatrix}
> P\_1 A Q\_1 & O \\
> O & P\_2 B Q\_2
> \end{bmatrix}
> =============
>
> \begin{bmatrix}
> I\_{r\_1} & O & O & O \\
> O & O & O & O \\
> O & O & I\_{r\_2} & O \\
> O & O & O & O
> \end{bmatrix}
> \to
> \begin{bmatrix}
> I\_{r\_1} & O & O & O \\
> O & O & O & O \\
> O & O & I\_{r\_2} & O \\
> O & O & O & O
> \end{bmatrix}
> $$
>
> 即化为对角块形式，非零行数为 $r\_1 + r\_2$
>
> $\Rightarrow r(C) = r\_1 + r\_2 = r(A) + r(B)$ ✅

**性质**：矩阵乘以非异阵，秩不改变 $\Rightarrow$ 分块矩阵在分块初等变换下，秩不变

例2：设 $C = \begin{bmatrix} A & D \ O & B \end{bmatrix}$ 或 $\begin{bmatrix} A & O \ D & B \end{bmatrix}$，则\
$$
r(C) \geq r(A) + r(B)
$$

> 证明（以第一种为例）：
>
> $$
> \begin{bmatrix}
> P\_1 & O \\
> O & P\_2
> \end{bmatrix}
> \begin{bmatrix}
> A & D \\
> O & B
> \end{bmatrix}
> \begin{bmatrix}
> Q\_1 & O \\
> O & Q\_2
> \end{bmatrix}
> =============
>
> \begin{bmatrix}
> P\_1 A Q\_1 & P\_1 D Q\_2 \\
> O & P\_2 B Q\_2
> \end{bmatrix}
> =============
>
> \begin{bmatrix}
> I\_{r\_1} & O & 0 & 0 \\
> O & O & O & D\_{22} \\
> O & O & I\_{r\_2} & O \\
> O & O & O & O
> \end{bmatrix}
> \to
> \begin{bmatrix}
> I\_{r\_1} & O & O & O \\
> O & D\_{22} & O & O \\
> O & O & I\_{r\_2} & O \\
> O & O & O & O
> \end{bmatrix}
> $$
>
> 进一步化简得：
> $$
> \begin{bmatrix}
> I\_{r\_1} & D\_{12} \\
> O & I\_{r\_2}
> \end{bmatrix}
> $$
>
> (通过列变换消元)
> $$
> \Rightarrow r(C) = r\_1 + r\_2 = r(A) + r(B)
> $$
>
> > 注：若 $D = 0$，则 $r(C) = r(A) + r(B)$；否则可能更大，但至少等于。
>
> 所以一般有：
> $$
> r(C) \geq r(A) + r(B)
> $$
>
> 当且仅当 $A = 0$ 时等号成立 $\iff$ 矩阵方程 $AX + YB = 0$ 有解 $\iff D = 0$

例3（秩的降阶公式）设 $M = \begin{pmatrix} A & B \ C & D \end{pmatrix}$，则：

**(1)** 若 $A$ 非异，则\
$$
r(M) = r(A) + r(D - CA^{-1}B)
$$

**(2)** 若 $D$ 非异，则\
$$
r(M) = r(D) + r(A - BD^{-1}C)
$$

**(3)** 若 $A, D$ 均非异，则\
$$
r(A) + r(D - CA^{-1}B) = r(D) + r(A - BD^{-1}C)
$$

> **证明**：只需证 (1) 即可。
>
> 对分块矩阵进行初等行变换：
> $$
> \begin{pmatrix}
> A & B \\
> C & D
> \end{pmatrix}
> \stackrel{-C A^{-1}}{\longrightarrow}
> \begin{pmatrix}
> A & B \\
> 0 & D - C A^{-1} B
> \end{pmatrix}
> {\longrightarrow}
> \begin{pmatrix}
> I\_n & A^{-1}B \\
> 0 & D - C A^{-1}B
> \end{pmatrix}
> \to
> \begin{pmatrix}
> I\_n & O \\
> 0 & D - C A^{-1}B
> \end{pmatrix}
> $$
>
> 由 **例1** 得：
> $$
> r(M) = r(A) + r(D - C A^{-1}B)
> $$

例4：设 $A$ 为 $n$ 阶方阵，则
$$
A=A^2 \iff r(A)+r(I\_n-A)=n
$$

> 通过初等变换能够推出：
> $$
> \Rightarrow rank \begin{bmatrix}
> A & O \\
> O & I\_n-A
> \end{bmatrix}=rank
> \begin{bmatrix}
> A-A^2 & O \\
> O & I\_n
> \end{bmatrix}
> $$
>
> 根据例一，我们能得到结论：
> $$
> r(A)+r(I\_n-A)=r(A-A^2)+r(I\_n)
> $$
> 充分性：
> $$
> r(A-A^2)=0\Rightarrow A=A^2
> $$
> 必要性：
> $$
> A^2=A\Rightarrow r(A-A^2)=0
> $$
> 推出等式成立.

**定理11** (Sylvester 不等式)：设 $A \in M\_{m\times n}(K)$ ， $B \in M\_{n\times p}(K)$，则\
$$
r(A) + r(B) - n \leq r(AB) \leq \min{r(A), r(B)}
$$

> 证明：
>
> 第一步：先证 $r(AB) \leq r(B)$
>
> 令 $B = (\beta\_1, \beta\_2, \dots, \beta\_p)$，设 ${\beta\_{i\_1}, \dots, \beta\_{i\_r}}$ 是 $B$ 的列向量极大无关组。
>
> 断言：$AB$ 的每一列是 $A\beta\_{i\_1}, \dots, A\beta\_{i\_r}$ 的线性组合。
>
> 因为：
> $$
> \forall j \leq p, \quad \beta\_j = \lambda\_1 \beta\_{i\_1} + \cdots + \lambda\_r \beta\_{i\_r}
> \Rightarrow A\beta\_j = \lambda\_1 A\beta\_{i\_1} + \cdots + \lambda\_r A\beta\_{i\_r}
> $$
>
> $\Rightarrow AB = (A\beta\_1, \dots, A\beta\_p)$ 的每一列都可由 ${A\beta\_{i\_1}, \dots, A\beta\_{i\_r}}$ 线性表示
>
> $\Rightarrow r(AB) \leq r$ ⇒ $r(AB) \leq r(B)$
>
> 同理，$r(AB) = r(BA) \leq r(A)$
>
> $\Rightarrow r(AB) \leq \min{r(A), r(B)}$ ✅
>
> 再证 Sylvester 不等式（下界）：
>
> 构造分块矩阵：
> $$
> \begin{pmatrix}
> A & O \\
> I\_n & B
> \end{pmatrix}
> \to
> \begin{pmatrix}
> O & AB \\
> I\_n & B
> \end{pmatrix}
> \to
> \begin{pmatrix}
> O & AB \\
> I\_n & O
> \end{pmatrix}
> \to
> \begin{pmatrix}
> AB & O \\
> O & I\_n
> \end{pmatrix}
> $$
>
> 即通过初等变换得到：
> $$
> \begin{pmatrix}
> AB & O \\
> O & I\_n
> \end{pmatrix}
> \Rightarrow r\left(\begin{pmatrix} A & O \ I\_n & B \end{pmatrix}\right) = r(AB) + n
> $$
>
> 另一方面，该矩阵的秩满足：
> $$
> r\left(\begin{pmatrix} A & O \ I\_n & B \end{pmatrix}\right) \geq r(A) + r(B)
> $$
>
> $\Rightarrow r(AB) + n \geq r(A) + r(B)$
>
> $\Rightarrow r(AB) \geq r(A) + r(B) - n$
