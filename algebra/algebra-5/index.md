---
url: /algebra/algebra-5/index.md
---
## Part 1 基变换 过渡矩阵

**定义1**：基变换与过渡矩阵

设 $V\_k$ 是线性空间，${e\_1, e\_2, \dots, e\_n}$ 和 ${f\_1, f\_2, \dots, f\_n}$ 是两组基，则有：

$$
\begin{cases}
f\_1 = a\_{11}e\_1 + a\_{12}e\_2 + \cdots + a\_{1n}e\_n \\
f\_2 = a\_{21}e\_1 + a\_{22}e\_2 + \cdots + a\_{2n}e\_n \\
\vdots \\
f\_n = a\_{n1}e\_1 + a\_{n2}e\_2 + \cdots + a\_{nn}e\_n
\end{cases}
$$

记前面的系数构成的 $n \times n$ 方阵为：
$$
A = (a\_{ij})\_{n\times n}
$$

称为 **从基** $\mathcal{E}$ **到基** $\mathcal{F}$ **的过渡矩阵**

**注意**：$A$ 可逆，因为新基可由旧基线性表示，且线性无关

> 形式行向量 $(\alpha\_1, \alpha\_2, \cdots, \alpha\_n)$，其中 $\alpha\_i \in V$
>
> 相等
> $$
> (\alpha\_1, \alpha\_2, \cdots, \alpha\_n) = (\beta\_1, \beta\_2, \cdots, \beta\_n) \stackrel{\text{def}}{\Longleftrightarrow} \alpha\_i = \beta\_i,\ \forall 1 \leq i \leq n
> $$
> 加法
> $$
> (\alpha\_1, \alpha\_2, \cdots, \alpha\_n) + (\beta\_1, \beta\_2, \cdots, \beta\_n) \stackrel{\text{def}}{=} (\alpha\_1 + \beta\_1, \alpha\_2 + \beta\_2, \cdots, \alpha\_n + \beta\_n)
> $$
> 数乘
> $$
> k \in K,\quad
> k \cdot (\alpha\_1, \alpha\_2, \cdots, \alpha\_n) \stackrel{\text{def}}{=} (k\alpha\_1, k\alpha\_2, \cdots, k\alpha\_n)
> $$
> 矩阵乘法
> $$
> (\alpha\_1, \alpha\_2, \cdots, \alpha\_n) A\_{m \times n} = \left( \sum\_{i=1}^n \alpha\_i a\_{i1}, \cdots, \sum\_{i=1}^n \alpha\_i a\_{im} \right)
> $$

设 $A = (a\_{ij})\_{m \times n}$ 列分块
$$
A = (\alpha\_1, \alpha\_2, \cdots, \alpha\_n),\quad \alpha\_i \in K^m
$$

$$
(f\_1, f\_2, \cdots, f\_m) = (e\_1, e\_2, \cdots, e\_m) A\cdots\cdots(\*)
$$

$A$ 即为**过渡矩阵**

**引理2**：设 ${e\_1, e\_2, \cdots, e\_n}$ 为 $V$ 的基，$A = (a\_{ij})*{m \times n}$，令 $B = (b*{ij})\_{m \times n}$，使得\
$$
(e\_1, e\_2, \cdots, e\_n) A = (e\_1, e\_2, \cdots, e\_n) B
\Rightarrow A = B
$$

> **证明**：
> $$
> (e\_1, e\_2, \cdots, e\_n) A = \left( \sum\_{i=1}^n a\_{i1} e\_i, \cdots, \sum\_{i=1}^n a\_{im} e\_i \right)
> $$
>
> $$
> (e\_1, e\_2, \cdots, e\_n) B = \left( \sum\_{i=1}^n b\_{i1} e\_i, \cdots, \sum\_{i=1}^n b\_{im} e\_i \right)
> $$
>
> $$
> \Rightarrow \sum\_{i=1}^n a\_{i1} e\_i = \sum\_{i=1}^n b\_{i1} e\_i,\ \cdots,\ \sum\_{i=1}^n a\_{im} e\_i = \sum\_{i=1}^n b\_{im} e\_i
> $$
>
> $$
> \Rightarrow a\_{ij} = b\_{ij},\quad \forall 1 \leq i \leq n,\ 1 \leq j \leq m.
> $$
>
> 在线性空间中，${e\_1, e\_2, \cdots, e\_n}$ 为旧基，${f\_1, f\_2, \cdots, f\_n}$ 新基
>
> 对任意 $\alpha \in V$，
> $$
> \alpha = \lambda\_1 e\_1 + \lambda\_2 e\_2 + \cdots + \lambda\_n e\_n \longrightarrow
> \begin{pmatrix}
> \lambda\_1 \ \lambda\_2 \ \vdots \ \lambda\_n
> \end{pmatrix}\_{\text{old}}
> $$
>
> $$
> \alpha = \mu\_1 f\_1 + \mu\_2 f\_2 + \cdots + \mu\_n f\_n \longrightarrow
> \begin{pmatrix}
> \mu\_1 \ \mu\_2 \ \vdots \ \mu\_n
> \end{pmatrix}\_{\text{new}}
> $$
>
> 设 $(f\_1, f\_2, \cdots, f\_n) = (e\_1, e\_2, \cdots, e\_n) A$ ，则：
> $$
> \alpha = (e\_1, e\_2, \cdots, e\_n)
> \begin{pmatrix}
> \lambda\_1 \ \lambda\_2 \ \vdots \ \lambda\_n
> \end{pmatrix}
> =============
>
> (f\_1, f\_2, \cdots, f\_n)
> \begin{pmatrix}
> \mu\_1 \ \mu\_2 \ \vdots \ \mu\_n
> \end{pmatrix}
> \= (e\_1, e\_2, \cdots, e\_n) A
> \begin{pmatrix}
> \mu\_1 \ \mu\_2 \ \vdots \ \mu\_n
> \end{pmatrix}
> $$
>
> 易推出引理2：
> $$
> \begin{pmatrix}
> \lambda\_1 \ \lambda\_2 \ \vdots \ \lambda\_n
> \end{pmatrix}
> \= A
> \begin{pmatrix}
> \mu\_1 \ \mu\_2 \ \vdots \ \mu\_n
> \end{pmatrix}
> \quad \cdots\cdots\ \text{(**) }
> $$
> $(\*) \Rightarrow (**)$  ✓
>
> $(\*\*) \Rightarrow (\*)$: $f\_i$ 的新坐标向量为 $\begin{pmatrix} 0 \ \vdots \ 1 \ \vdots \ 0 \end{pmatrix}$，第 $i$ 个位置为 1。
>
> 由 $(\*\*)$ 可得 $f\_i$ 的旧坐标向量为
> $$
> A \begin{pmatrix} 0 \ \vdots \ 1 \ \vdots \ 0 \end{pmatrix}*i = \begin{pmatrix} a*{i1} \ a\_{i2} \ \vdots \ a\_{in} \end{pmatrix}
> \Rightarrow f\_i = a\_{i1}e\_1 + a\_{i2}e\_2 + \cdots + a\_{in}e\_n, \quad \forall 1 \leq i \leq n,\quad A=(a\_{ij})\_{n\times n}
> $$
>
> $\Rightarrow(\*)$ 成立，即 $A$ 为过渡矩阵。

**命题3**：设 $V\_k$ 为线性空间，${e\_1, e\_2, \cdots, e\_n}$、${f\_1, f\_2, \cdots, f\_n}$、${g\_1, g\_2, \cdots, g\_n}$ 为三组基。  从基 $e$ 到基 $f$ 的过渡阵为 $A$，从基 $f$ 到基 $g$ 的过渡阵为 $B$，则：

1. $A$ 为可逆阵；
2. 从基 $e$ 到基 $g$ 的过渡阵为 $AB$ .

> 证明：
>
> **(1)** 设从基 $f$ 到基 $e$ 的过渡阵为 $P$，\
> $$
> (f\_1, f\_2, \cdots, f\_n) = (e\_1, e\_2, \cdots, e\_n) A \\
> (e\_1, e\_2, \cdots, e\_n) = (f\_1, f\_2, \cdots, f\_n) P
> $$
>
> $$
> \Rightarrow  (e\_1, e\_2, \cdots, e\_n) I\_n = (e\_1, e\_2, \cdots, e\_n) AP
> $$
>
> 由 **引理2** $\Rightarrow AP = I\_n$，从而 $A$ 可逆。
>
> **(2)** 设从基 $e$ 到基 $g$ 的过渡阵为 $C$，\
> $$
> (f\_1, f\_2, \cdots, f\_n) = (e\_1, e\_2, \cdots, e\_n) A \\
> (g\_1, g\_2, \cdots, g\_n) = (f\_1, f\_2, \cdots, f\_n) B \\
> (g\_1, g\_2, \cdots, g\_n) = (e\_1, e\_2, \cdots, e\_n) C
> $$
>
> 又因为
> $$
> (g\_1, g\_2, \cdots, g\_n) = (e\_1, e\_2, \cdots, e\_n) AB
> $$
>
> 从而有：\
> $$
> C = AB
> $$

注：若用行向量 $(\lambda\_1, \lambda\_2, \cdots, \lambda\_n)$ 来表示坐标向量

设 ${e\_1, e\_2, \cdots, e\_n}$、${f\_1, \cdots, f\_n}$ 为两组基，

形式列向量：
$$
\begin{pmatrix}
e\_1 \\
e\_2 \\
\vdots \\
e\_n
\end{pmatrix}
$$

则有：
$$
(\*)'\cdots\cdots \begin{pmatrix}
f\_1 \\
f\_2 \\
\vdots \\
f\_n
\end{pmatrix}
\= X
\begin{pmatrix}
e\_1 \\
e\_2 \\
\vdots \\
e\_n
\end{pmatrix}
$$

$X$ 为过渡矩阵

$$
(\*\*)'\Rightarrow(\lambda\_1, \lambda\_2, \cdots, \lambda\_n) = (\mu\_1, \mu\_2, \cdots, \mu\_n) A
$$

## Part 2 子空间

**定义1**：设 $V\_k$ 是线性空间，$V\_0$ 是 $V$ 的非空子集。若对任意 $\alpha, \beta \in V\_0$，$k \in K$，有：
$$
\alpha + \beta \in V\_0,\quad
k\alpha \in V\_0
$$
则称 $V\_0$ 为 $V$ 的**线性子空间**，简称**子空间**。

**引理2**：$V\_0$ 在 $V$ 的加法和数乘下构成了 $K$ 上的线性空间。

> **性质**：
>
> 对任意 $\alpha\_1, \alpha\_2, \cdots, \alpha\_m \in V\_0$，$\lambda\_1, \lambda\_2, \cdots, \lambda\_m \in K$，\
> $$
> \Rightarrow \lambda\_1\alpha\_1 + \lambda\_2\alpha\_2 + \cdots + \lambda\_m\alpha\_m \in V\_0
> $$

**特殊子空间**：

$V\_k$：线性空间； ${0\_v}$：零子空间 → 约定 $\dim = 0$ ；$V$：全子空间 (${0\_v},\ V$ 称为平凡子空间)

**引理**：设 $V\_0$ 是 $n$ 维线性空间 $V$ 的子空间，则\
$$
0 \leq \dim V\_0 \leq \dim V
$$

进一步，若 $V\_0$ 是非平凡子空间，则取严格不等号。

> 证明：
>
> 设 $V\_0$ 为 $V$ 的非零子空间，记 $\dim V\_0 = m$，取 $V\_0$ 的一组基 ${e\_1, e\_2, \cdots, e\_m}$，从而 $e\_1, \cdots, e\_m$ 是 $V$ 中线性无关的向量。
>
> 由**基扩张定理**：
>
> $\Rightarrow$ 可将 ${e\_1, \cdots, e\_m}$ 扩张为 $V$ 的一组基 ${e\_1, \cdots, e\_m, e\_{m+1}, \cdots, e\_n}$ .
> $$
> \Rightarrow 0 \leq \dim V\_0 = m \leq n = \dim V
> $$
> 下证：若 $\dim V\_0 = \dim V = n$，则 $V\_0 = V$
>
> ① 取 $V\_0$ 的基 ${e\_1, e\_2, \cdots, e\_n}$，从而 $e\_1, \cdots, e\_n$ 是 $V$ 中线性无关的向量。
>
> 又 $\dim V = n$， $\Rightarrow {e\_1, \cdots, e\_n}$ 也是 $V$ 的一组基。
>
> 对任意 $\alpha \in V$，有\
> $$
> \alpha = \lambda\_1 e\_1 + \cdots + \lambda\_n e\_n \in V\_0
> \Rightarrow V\_0 = V
> $$

**定义 + 命题2**：设 $V\_1, V\_2$ 是 $V$ 的子空间。

* **交空间**：$V\_1 \cap V\_2 = {\alpha \mid \alpha \in V\_1,\ \alpha \in V\_2}$
* **和空间**：$V\_1 + V\_2 = {\alpha + \beta \mid \alpha \in V\_1,\ \beta \in V\_2}$

则 $V\_1 \cap V\_2$、$V\_1 + V\_2$ 都是 $V$ 的子空间。

> 证明：
>
> $V\_1 \cap V\_2$ 是子空间：设 $\alpha, \beta \in V\_1 \cap V\_2$ ⇒
>
> $$
> \alpha + \beta \in V\_1,\ \alpha + \beta \in V\_2 \Rightarrow \alpha + \beta \in V\_1 \cap V\_2
> $$
>
> $$
> k \in K,\ k\alpha \in V\_1,\ k\alpha \in V\_2 \Rightarrow k\alpha \in V\_1 \cap V\_2
> $$
>
> $\Rightarrow V\_1 \cap V\_2$ 是子空间。
>
> $V\_1 + V\_2$ 是子空间：设 $\alpha, \beta \in V\_1 + V\_2$，即
>
> $$
> \alpha = \alpha\_1 + \alpha\_2,\ \alpha\_1 \in V\_1,\ \alpha\_2 \in V\_2 \\
> \beta = \beta\_1 + \beta\_2,\ \beta\_1 \in V\_1,\ \beta\_2 \in V\_2
> $$
>
> 则：
> $$
> \alpha + \beta = (\alpha\_1 + \beta\_1) + (\alpha\_2 + \beta\_2) \in V\_1 + V\_2
> $$
>
> $$
> k \in K,\ k\alpha = k\alpha\_1 + k\alpha\_2 \in V\_1 + V\_2
> $$
>
> $\Rightarrow V\_1 + V\_2$ 是子空间。

设 $V = \mathbb{R}^3$，

* $V\_1 =$ x轴， $V\_2 =$ y轴， $V\_3 =$ z轴

定义平面：

* $V\_{12} =xy$ 平面，$V\_{13} =xz$ 平面，$V\_{23} =yz$ 平面

则：
$$
V\_{12} \cap V\_{13} = V\_1,\quad
V\_{12} \cap V\_{23} = V\_2,\quad
V\_{13} \cap V\_{23} = V\_3
$$
和空间：
$$
V\_1 + V\_2 = V\_{12},\quad
V\_1 + V\_3 = V\_{13},\quad
V\_2 + V\_3 = V\_{23}
$$

$$
V\_1 + V\_{23} = V = \mathbb{R}^3 ,\quad
V\_1 + V\_2 + V\_3 = \mathbb{R}^3
$$

**推广**：设 $V\_1, V\_2, \cdots, V\_m$ 是 $V$ 的子空间，则：

* 交空间：
  $$
  V\_1 \cap V\_2 \cap \cdots \cap V\_m
  $$

* 和空间：
  $$
  V\_1 + V\_2 + \cdots + V\_m = {\alpha\_1 + \alpha\_2 + \cdots + \alpha\_m \mid \alpha\_i \in V\_i}
  $$

**定义3**：设 $S$ 是 $V$ 的非空子集，记 $L(S)$ 为 $S$ 中向量所有可能的线性组合构成的集合，即：
$$
L(S) = \left{ \lambda\_1\alpha\_1 + \lambda\_2\alpha\_2 + \cdots + \lambda\_m\alpha\_m ,\middle|,
\begin{array}{c}
\lambda\_1, \cdots, \lambda\_m \in K \\
\alpha\_1, \cdots, \alpha\_m \in S \\
m \geq 0
\end{array}
\right}
$$
易证：$L(S)$ 在加法和数乘下封闭，从而是 $V$ 的子空间，称为由 $S$ 生成（张成）的子空间。

**命题4**：设 $S$ 是线性空间 $V$ 的非空子集，记 $L(S)$ 为由 $S$ 张成的子空间，则：

1. $L(S)$ 是包含 $S$ 的 **最小子空间**；
2. 若 $S$ 存在极大线性无关组 ${\alpha\_1, \alpha\_2, \cdots, \alpha\_r}$，则 $L(S) = L(\alpha\_1, \alpha\_2, \cdots, \alpha\_r)$，且 ${\alpha\_1, \cdots, \alpha\_r}$ 是 $L(S)$ 的一组基，从而 $\dim L(S) = r = r(S)$.

> 证明：
>
> **(1)** $L(S) \geq S$，任取子空间 $V\_0 \geq S$。  对任意 $\alpha \in L(S)$，有
> $$
> \alpha = \lambda\_1\alpha\_1 + \lambda\_2\alpha\_2 + \cdots + \lambda\_m\alpha\_m,\quad \alpha\_i \in S
> \Rightarrow \alpha\_i \in V\_0 \Rightarrow \alpha \in V\_0
> $$
> $\Rightarrow L(S) \leq V\_0$
>
> **(2)**
> $$
> L(S) \overset{\text{linear}}\rightarrow S \overset{\text{linear}}\rightarrow {\alpha\_1, \alpha\_2, \cdots, \alpha\_r}
> $$
>
> $$
> \Rightarrow L(S) = L(\alpha\_1, \alpha\_2, \cdots, \alpha\_r)
> $$
>
> 又 $\alpha\_1, \cdots, \alpha\_r$ 线性无关 $\Rightarrow$  是 $L(S)$ 的一组基
>
> $$
> \Rightarrow \dim L(S) = r = r(S)
> $$

/example/  设 $V\_1, V\_2$ 是 $V$ 的子空间，则\
$$
L(V\_1 \cup V\_2) = V\_1 + V\_2
$$

> 证明：
>
> 任取 $\alpha \in V\_1 + V\_2$，即 $\alpha = \alpha\_1 + \alpha\_2$，$\alpha\_1 \in V\_1$，$\alpha\_2 \in V\_2$
> $$
> \Rightarrow \alpha\_1 \in V\_1 \cup V\_2,\quad\alpha\_2 \in V\_1 \cup V\_2
> $$
>
> $$
> \Rightarrow \alpha \in L(V\_1 \cup V\_2)
> $$
>
> 另一方面：
>
> * $$
>   V\_1 \subseteq V\_1 + V\_2,\quad\alpha\_1 \in V\_1\Rightarrow\alpha\_1 = \alpha\_1 + 0 \in V\_1 + V\_2
>   $$
>
> * $$
>   V\_2 \subseteq V\_1 + V\_2,\quad\alpha\_2 \in V\_2 \Rightarrow \alpha\_2 = 0 + \alpha\_2 \in V\_1 + V\_2
>   $$
>
> $$
> \Rightarrow V\_1 \cup V\_2 \subseteq V\_1 + V\_2
> $$
>
> $$
> \Rightarrow L(V\_1 \cup V\_2) \subseteq V\_1 + V\_2
> $$
>
> 结合得：
> $$
> L(V\_1 \cup V\_2) = V\_1 + V\_2
> $$

**推广**：若 $V\_1, \cdots, V\_m$ 是子空间，则\
$$
L(V\_1 \cup \cdots \cup V\_m) = V\_1 + \cdots + V\_m
$$
**定理6**（维数公式）：设 $V\_1, V\_2$ 是 $V$ 的子空间，则\
$$
\dim(V\_1 + V\_2) = \dim V\_1 + \dim V\_2 - \dim(V\_1 \cap V\_2)
$$

> 证明：
>
> 取 $V\_1 \cap V\_2$ 的一组基 ${\alpha\_1, \cdots, \alpha\_r}$，记 $r = \dim(V\_1 \cap V\_2)$。
>
> 将该基**扩充**为 $V\_1$ 的基：\
> $$
> {\alpha\_1, \cdots, \alpha\_r, \beta\_1, \cdots, \beta\_{m-r}}
> $$
>
> 将该基**扩充**为 $V\_2$ 的基：\
> $$
> {\alpha\_1, \cdots, \alpha\_r, \gamma\_1, \cdots, \gamma\_{n-r}}
> $$
>
> 要证：\
> $$
> {\alpha\_1, \cdots, \alpha\_r, \beta\_1, \cdots, \beta\_{m-r}, \gamma\_1, \cdots, \gamma\_{n-r}}
> $$
> 是 $V\_1 + V\_2$ 的一组基。
>
> 任取 $\nu \in V\_1 + V\_2$，则 $\nu = \nu\_1 + \nu\_2$，$\nu\_1 \in V\_1$，$\nu\_2 \in V\_2$
>
> $$
> \nu\_1={ \alpha\_1, \cdots, \alpha\_r, \beta\_1, \cdots, \beta\_{m-r} }\\
> \nu\_2={\alpha\_1, \cdots, \alpha\_r,\gamma\_1, \cdots, \gamma\_{n-r} }
> $$
> 考虑线性组合：
> $$
> \lambda\_1\alpha\_1 + \cdots + \lambda\_r\alpha\_r + \mu\_1\beta\_1 + \cdots + \mu\_{m-r}\beta\_{m-r} + k\_1\gamma\_1 + \cdots + k\_{n-r}\gamma\_{n-r} = 0
> $$
>
> 将前两部分归入 $V\_1$，后一部分归入 $V\_2$：
>
> $$
> \lambda\_1\alpha\_1 + \cdots + \lambda\_r\alpha\_r + \mu\_1\beta\_1 + \cdots + \mu\_{m-r}\beta\_{m-r} \in V\_1 \\
> \= -(k\_1\gamma\_1 + \cdots + k\_{n-r}\gamma\_{n-r}) \in V\_2
> $$
>
> $\Rightarrow$ 上面两组向量 $\in V\_1 \cap V\_2$
>
> 又因 ${\alpha\_1, \cdots, \alpha\_r}$ 是 $V\_1 \cap V\_2$ 的基，故存在 $t\_1, \cdots, t\_r$ 使得：
> $$
> \= t\_1\alpha\_1 + \cdots + t\_r\alpha\_r\\
> \Rightarrow k\_1\gamma\_1 + \cdots + k\_{n-r}\gamma\_{n-r} + t\_1\alpha\_1 + \cdots + t\_r\alpha\_r = 0\\
> \Rightarrow k\_1 = \cdots = k\_{n-r} = t\_1 = \cdots = t\_r = 0
> $$
>
> 代回得：
> $$
> \lambda\_1\alpha\_1 + \cdots + \lambda\_r\alpha\_r + \mu\_1\beta\_1 + \cdots + \mu\_{m-r}\beta\_{m-r} = 0\\
> \Rightarrow \lambda\_1 = \cdots = \lambda\_r = \mu\_1 = \cdots = \mu\_{m-r} = 0
> $$
>
> 当 $V\_1 \cap V\_2=O={0}$ .
> $$
> \dim(V\_1 + V\_2) = \dim V\_1 + \dim V\_2
> $$

**定义7**：设 $V\_1, \cdots, V\_m$ 是 $V$ 的子空间，若对任意 $i = 1, \cdots, m$，\
$$
V\_i \cap (V\_1 + \cdots + V\_{i-1} + V\_{i+1} + \cdots + V\_m) = {0}
$$
成立，则称 $V\_1 + V\_2 + \cdots + V\_m$ 为 **直和**，记为：

$$
V\_1 \oplus V\_2 \oplus \cdots \oplus V\_m
$$

> 注意：**两两相交为零不能保证直和！**

**定理8**：设 $V\_1, \cdots, V\_m$ 是 $V$ 的子空间，令 $V\_0 = V\_1 + V\_2 + \cdots + V\_m$，则以下条件等价：

1. $V\_0 = V\_1 \oplus V\_2 \oplus \cdots \oplus V\_m$；

2. 对任意 $i = 1, \cdots, m$，\
   $$
   V\_i \cap (V\_1 + \cdots + V\_{i-1} + V\_{i+1} + \cdots + V\_m) = {0}
   $$

3. $\dim(V\_1 + \cdots + V\_m) = \dim V\_1 + \cdots + \dim V\_m$；

4. $V\_i$ 的一组基可拼成 $V\_0$ 的一组基；

5. 分块表示唯一：\
   $$
   \text{if }\ u = u\_1 + u\_2 + \cdots + u\_m,\quad u\_i \in V\_i
   $$
   $\Rightarrow u\_i$ 唯一

> 特别地，**零向量的分块表示唯一**：\
> $$
> 0 = u\_1 + u\_2 + \cdots + u\_m,\quad u\_i \in V\_i \Rightarrow u\_i = 0,\ \forall i
> $$

## Part 3 线性方程组的解

**定理1**（解的存在性与唯一性）—— **解的判定定理**

考虑线性方程组：
$$
\begin{cases}
a\_{11}x\_1 + a\_{12}x\_2 + \cdots + a\_{1n}x\_n = b\_1 \\
a\_{21}x\_1 + a\_{22}x\_2 + \cdots + a\_{2n}x\_n = b\_2 \\
\vdots \\
a\_{m1}x\_1 + a\_{m2}x\_2 + \cdots + a\_{mn}x\_n = b\_m
\end{cases}
\tag{\*}
$$
记为：

* 系数矩阵
  $$
  A = (a\_{ij})\_{m\times n}
  $$

* 未知向量
  $$
  \mathbf{x} = \begin{pmatrix} x\_1 \ x\_2 \ \vdots \ x\_n \end{pmatrix}
  $$

* 常数项
  $$
  \beta = \begin{pmatrix} b\_1 \ b\_2 \ \vdots \ b\_m \end{pmatrix}
  $$

* 增广矩阵
  $$
  \widetilde{A} = (A \mid \beta)
  $$

$(\*)$ 有解 $\iff r(A) = r(\widetilde{A})$

且进一步有：

1. 若 $r(A) = r(\widetilde{A}) = n$，则 $(\*)$ 有**唯一解**；
2. 若 $r(A) = r(\widetilde{A}) < n$，则 $(\*)$ 有**无穷多解**；
3. 若 $r(A) \ne r(\widetilde{A})$，则 $(\*)$ **无解**，此时 $r(\widetilde{A}) = r(A) + 1$

> **证明**：先证明 (\*) 有解  $\Leftrightarrow r(A) = r(A\beta)$ 。
>
> 证明：列分块  $A = (\alpha\_1, \alpha\_2, \cdots, \alpha\_n)$
>
> $$Ax = \beta \Leftrightarrow x\_1\alpha\_1 + x\_2\alpha\_2 + \cdots + x\_n\alpha\_n = \beta$$
>
> (\*) 有解  $\Leftrightarrow \beta$  是  $\alpha\_1, \alpha\_2, \cdots, \alpha\_n$  的线性组合。
>
> **必要性** 设 (x) 有解，则  $\beta$  是  $\alpha\_1, \cdots, \alpha\_n$  的线性组合。
>
> 设  ${\alpha\_1, \cdots, \alpha\_n}$  是  $A$  列向量的一个极大无关组， $r = r(A)$ 。
>
> 从而  $\beta$  是  $\alpha\_1, \cdots, \alpha\_r$  的线性组合，于是  ${\alpha\_1, \cdots, \alpha\_r}$  是  $A\beta$  的列向量的极大无关组。
>
> 从而  $r(A\beta) = r = r(A)$
>
> **充分性** 设  $r(A) = r(A\beta) = r$ ， ${\alpha\_1, \cdots, \alpha\_r}$  是  $A$  列向量的一个极大无关组。
>
> 从而  $\alpha\_1, \cdots, \alpha\_r$  是  $A$  列向量中线性无关的  $r$  个向量，又  $r(A\beta) = r$ 。
>
> 从而  ${\alpha\_1, \cdots, \alpha\_r}$  也是  $A\beta$  列向量的极大无关组，于是  $\beta$  是  $\alpha\_1, \cdots, \alpha\_r$  的线性组合，也是  $\alpha\_1, \cdots, \alpha\_n$  的线性组合，从而 (\*) 有解。
>
> 若  $r(A) = r(A\beta) = n$ ，则  $\alpha\_1, \cdots, \alpha\_n$  线性无关。
>
> 由前定理可知， $\beta$  表示为  $\alpha\_1, \cdots, \alpha\_n$  的线性组合是唯一的，则 (x) 有唯一解。
>
> 若  $r(A) = r(A\beta) < n$ ，则  $\alpha\_1, \alpha\_2, \cdots, \alpha\_r$  线性相关。
>
> $\exists$  不全为0的数  $c\_1, c\_2, \cdots, c\_n \in k$ ，使得
>
> $$
> 0 = c\_1\alpha\_1 + c\_2\alpha\_2 + \cdots + c\_n\alpha\_n \cdots (1)
> $$
> (\*) 有解， $\exists k\_1, k\_2, \cdots, k\_n \in k$ ，使得
>
> $$
> \beta = k\_1\alpha\_1 + k\_2\alpha\_2 + \cdots + k\_n\alpha\_n \cdots (2)
> $$
>
> $$
> (1)xR + (2) : \beta = (k\_1 + k\_1c\_1)\alpha\_1 + \cdots + (k\_n + k\_nc\_n)\alpha\_n
> $$
>
> 解得：
> $$
> x\_1 = k\_1 + k\_1c\_1,\quad \cdots,\quad x\_n = k\_n + k\_nc\_n,\quad \forall k \in k
> $$
> $\Rightarrow$  (\*) 有无穷多组解。

**定理2**：设 $Y$ 是 $Ax = \beta$ 的一个解（称为特解），则 $\alpha$ 是 $Ax = \beta$ 的解 $\Leftrightarrow \alpha - Y$ 是相应的齐次线性方程组 $Ax = 0$  的解。

> 证明：
> $$
> \Rightarrow A(\alpha - Y) = A\alpha - AY = \beta - \beta = 0
> $$
>
> $$
> \Leftarrow 0 = A(\alpha - Y) = A\alpha - AY = A\alpha - \beta = 0
> $$
>
> 即  $A\alpha = \beta$ ， $\alpha$  是  $Ax = \beta$  的解。
>
> 下面考虑齐次线性方程组  $Ax = 0 \cdots (\*\*)$
>
> $r(A) = r(A|0) = r(A) \Rightarrow (\*\*)$  有解，平凡解零解。
>
> 令  $V\_A = {x \in k^n | Ax = 0}$  (\*\*) 的解集。
>
> 断言  $V\_A$  是  $k^n$  的线性子空间。
>
> $\forall \alpha, \beta \in V\_A$ ，即
> $$
> A\alpha = A\beta = 0 \Rightarrow A(\alpha + \beta) = 0 \Rightarrow \alpha + \beta \in V\_A
> $$
>
> $$
> \forall k \in k,\quad A(k\alpha) = k(A\alpha) = 0 \Rightarrow k\alpha \in V\_A
> $$

**定理3** (齐次线性方程组解的结构定理)：设  $r(A) = r$ ，则  $V\_A$  是  $k^n$  的  $n-r$  维子空间，从而有一组基  $\eta\_1, \eta\_2, \cdots, \eta\_{n-r}$  使得  $Ax = 0$  的所有解都是  $\eta\_1, \eta\_2, \cdots, \eta\_{n-r}$  的线性组合，称为 $(\*)$ 的基础解系。

> 证明：这些对  $(\*)$  在同解的基础上进行行初等变换  $\Leftrightarrow$  对  $A$  实施初等行变换。
>
> 由行初等变换可将  $A$  行向量的极大无关组调到前  $r$  行，
>
> 不妨  $A = (\alpha\_1, \alpha\_2, \cdots, \alpha\_r)$  是  $A$  行向量的极大无关组。
>
> 通过第三类行变换  $A \rightarrow (\alpha\_1, \alpha\_2, \cdots, \alpha\_r, 0, \cdots, 0)$  令  $A = (\alpha\_1, \alpha\_2, \cdots, \alpha\_r)$
>
> $r(A) = r$  在列分列对换的情形下（等价于未知数对换）
>
> 不妨设  $A$  的列向量的极大无关组为前  $r$  列：
>
> $A = (b\_1, b\_2), r(B\_2) = r,$ 从而 $B$ 非零
>
> $A = (b\_1, b\_2)$ 行变换 $\rightarrow (I\_r, C)$
>
> 总之， $A$  通过初等行变换及列对换可变为如下 $R$ 阶
>
> $$
> A \rightarrow \begin{pmatrix} I\_r & C \ 0 & 0 \end{pmatrix}, C = (c\_{ij})\_{r \times (n-r)}
> $$
> 从而  $(\*)$  与下列方程组同解：
>
> $$
> \begin{cases}
> x\_1 + c\_{11}x\_{n-r+1} + \cdots + c\_{1r}x\_n = 0 \\
> x\_2 + c\_{21}x\_{n-r+1} + \cdots + c\_{2r}x\_n = 0 \\
> \vdots \\
> x\_r + c\_{r1}x\_{n-r+1} + \cdots + c\_{rr}x\_n = 0
> \end{cases}
> $$
> 令
> $$
> x\_{r+1} = 1, x\_{n+2} = \cdots = x\_n = 0,\quad\eta\_1 = \begin{pmatrix} -c\_{1,r+1} \ -c\_{2,r+1} \ \vdots \ -c\_{n,r+1} \ 1 \end{pmatrix}
> $$
> 令
> $$
> x\_{r+2} = 1, x\_{r+3} = \cdots = x\_n = 0,\quad \eta\_2 = \begin{pmatrix} -c\_{1,r+2} \ -c\_{2,r+2} \ \vdots \ -c\_{n,r+2} \ 0 \ 1 \end{pmatrix}
> $$
> $\cdots$ ，令\
> $$
> x\_n = 1, x\_{r+2} = \cdots = x\_{n-1} = 0,\quad \eta\_{n-r} = \begin{pmatrix} -c\_{1,n} \ -c\_{2,n} \ \vdots \ -c\_{n,n} \ 0 \ \vdots \ 0 \ 1 \end{pmatrix}
> $$
> 断言： ${\eta\_1, \eta\_2, \cdots, \eta\_{n-r}}$  是 (#) 的解空间的一组基。
>
> 令  $x\_1 + \lambda\_{r+1}x\_{r+1} + \cdots + \lambda\_nx\_n = 0 \Rightarrow \lambda\_1 = \lambda\_2 = \cdots = \lambda\_{n-r} = 0$
>
> 任取 (#) 的解  $\eta = (a\_1, a\_2, \cdots, a\_n)$
>
> $$
> \eta = \begin{pmatrix} a\_1 \ a\_2 \ \vdots \ a\_n \end{pmatrix} = \begin{pmatrix} -c\_{1,r+1}a\_{r+1} - \cdots - c\_{1,n}a\_n \ -c\_{2,r+1}a\_{r+1} - \cdots - c\_{2,n}a\_n \ \vdots \ -c\_{n,r+1}a\_{r+1} - \cdots - c\_{n,n}a\_n \end{pmatrix} = a\_{r+1}\eta\_1 + a\_{r+2}\eta\_2 + \cdots + a\_n\eta\_{n-r}
> $$
>
> 于是， ${\eta\_1, \eta\_2, \cdots, \eta\_{n-r}}$  也是 (x) 解空间的一组基 (基础解系)
>
> 从而  $\dim V\_A = n - r = n - r(A)$

**定理4** (结构定理) 设  $r(A) = r(\widehat{A}) = r$ ，$r$ 是 (\*) 的解。 ${\eta\_1, \eta\_2, \cdots, \eta\_{n-r}}$  是相伴齐次线性方程组 (#) 的基础解系，则 $AX = \beta$ 的通解为
$$
r + k\_1\eta\_1 + k\_2\eta\_2 + \cdots + k\_{n-r}\eta\_{n-r},\quad k\_i \in k
$$

> 证明：任取  $AX = \beta$  的解  $\alpha$
>
> 引理2  $\Rightarrow \alpha - Y$  是  $AX = 0$  的解
>
> 定理3
> $$
> \Rightarrow \alpha - Y = k\_1\eta\_1 + k\_2\eta\_2 + \cdots + k\_{n-r}\eta\_{n-r}
> $$
>
> $$
> \Rightarrow \alpha = Y + k\_1\eta\_1 + k\_2\eta\_2 + \cdots + k\_{n-r}\eta\_{n-r}
> $$

线性方程组  $AX = \beta$  的求解方法

> (1) 通过初等行变换将增广矩阵  $\widehat{A} = (A : \beta)$  变为阶梯形，判断  $r(A)$ 与 $r(\widehat{A})$ 的关系，确定解是否存在。
>
> (2) 继续对增广矩阵实施初等行变换和列对换，使之变为解方程组的标准型：
>
> $$
> \begin{bmatrix}
> I\_r & C & r \\
> O & O & O
> \end{bmatrix}, C = (c\_{ij})\_{r \times (n-r)}
> $$
>
> 从而得到特解  $\begin{bmatrix} r  \ O \end{bmatrix}$ ，基础解系  $\eta\_1, \eta\_2, \cdots, \eta\_{n-r}$ 。
>
> (3) 根据列对换情况，调整各个分量，最后得到原方程的特解和基础解系。

**非齐次方程组**：  $AX = \beta$ ，其中  $\beta \neq 0$

结构定理
$$
\alpha = \gamma + k\_1\eta\_1 + k\_2\eta\_2 + \cdots + k\_{n-r}\eta\_{n-r}
$$
$r$ 特解 ${\eta\_1, \cdots, \eta\_{n-r}}$ 是 $AX = 0$ 的基础解系。

**齐次方程组**：  $AX = 0$  的解空间  $V\_A \subseteq k^n$  子空间
$$
\dim V\_A = n - r(A)
$$
**推论6**：设  $Ax = \beta (\beta \neq 0)$  的解解为  $\gamma$ ，相伴齐次  $Ax = 0$  的基础解系为  $\eta\_1, \cdots, \eta\_{n-r}$ 。

(1)  $\gamma, \gamma + \eta\_1, \cdots, \gamma + \eta\_{n-r}$  线性无关

(2)  $Ax = \beta$  的任一解可表示为如下形式：

$$
\xi = \gamma + c\_1(\gamma + \eta\_1) + \cdots + c\_{n-r}(\gamma + \eta\_{n-r})
$$
其中  $c\_1 + c\_2 + \cdots + c\_{n-r} = 1$

> 证明：
>
> (1) 不妨设
> $$
> \lambda\_0\gamma + \lambda\_1(\gamma + \eta\_1) + \cdots + \lambda\_{n-r}(\gamma + \eta\_{n-r}) = 0
> $$
>
> $$
> A(\lambda\_0\gamma + \lambda\_1(\gamma + \eta\_1) + \cdots + \lambda\_{n-r}(\gamma + \eta\_{n-r})) = 0
> $$
>
> $$
> \Rightarrow (\sum\_{i=0}^{n-r} \lambda\_i)A\gamma = (\sum\_{i=1}^{n-r} \lambda\_i)A\eta\_i = 0 \Rightarrow \sum\_{i=0}^{n-r} \lambda\_i = 0 \Rightarrow \lambda\_0 = 0
> $$
>
> $$
> \Rightarrow \lambda\_1\eta\_1 + \cdots + \lambda\_{n-r}\eta\_{n-r} = 0 \Rightarrow \lambda\_1 = \cdots = \lambda\_{n-r} = 0 \Rightarrow \lambda\_0 = 0
> $$
>
> (2)  任意解\
> $$
> \xi = \gamma + k\_1\eta\_1 + k\_2\eta\_2 + \cdots + k\_{n-r}\eta\_{n-r},\quad k\_i \in K
> $$
>
> $$
> \= (1 - k\_1 - \cdots - k\_{n-r})\gamma + k\_1(\gamma + \eta\_1) + k\_2(\gamma + \eta\_2) + \cdots + k\_{n-r}(\gamma + \eta\_{n-r})
> $$
>
> $$
> \Rightarrow \sum\_{i=0}^{n-r} c\_i = 1
> $$
>
> $$
> A((c\_0 + c\_1 + \cdots + c\_{n-r})(\gamma + \eta\_1) + \cdots + c\_{n-r}(\gamma + \eta\_{n-r})) = (c\_0 + c\_1 + \cdots + c\_{n-r})A\gamma = \beta
> $$

方程 $A\_{m\times n}x = 0$ , $V\_A$  解空间
$$
\Rightarrow \dim\_k V\_A + r(A) = V\_k
$$
**应用一**： $A: n$  阶方阵，叫  $A$  非奇异  $\Leftrightarrow Ax = 0$  只有零解。

> /example/ $A^2 - A - 3I\_n = 0$ ，求证： $A - 2I\_n$  非奇异。
>
> 证明：凑因子法，
> $$
> (A - 2I\_n)(A + I\_n) = I\_n
> $$
> 线性方程组解法：只要证：$(A - 2I\_n)x = 0$ 只有零解。
>
> $$
> Ax\_0 = 2x\_0
> $$
>
> $$
> A^2x\_0 = 2Ax\_0 = 4x\_0
> $$
>
> $$
> (A^2 - A - 3I\_n)x\_0 = -x\_0 = 0 \Rightarrow x\_0 = 0
> $$

**应用二**：利用  $r(A)$  求  $V\_A$ 、

> /example/ 设 $\lambda\_1, \cdots, \lambda\_n$ 是 $k$ 中不同的数，$1 \leq k \leq n-1$
> $$
> (I)\begin{cases}
> x\_1 + x\_2 + \cdots + x\_n = 0 \\
> \lambda\_1x\_1 + \lambda\_2x\_2 + \cdots + \lambda\_nx\_n = 0 \\
> \quad\vdots \\
> \lambda\_1^{k-1}x\_1 + \lambda\_2^{k-1}x\_2 + \cdots + \lambda\_n^{k-1}x\_n = 0
> \end{cases}
> $$
>
> $$
> (II)\begin{cases}
> \lambda\_1^kx\_1 + \lambda\_2^kx\_2 + \cdots + \lambda\_n^k x\_n = 0 \\
> \quad\cdots \\
> \lambda\_1^{n-1}x\_1 + \lambda\_2^{n-1}x\_2 + \cdots + \lambda\_n^{n-1}x\_n = 0
> \end{cases}
> $$
>
> 设 (I) 解空间  $V\_1$ ，(II) 解空间  $V\_2$ 。证明： $k = V\_1 \oplus V\_2$
>
> > 证明： $V\_1 \cap V\_2$  是 (I) 与 (II) 联立之后新方程组的解空间
> >
> > $$
> > (III)\begin{cases}
> > x\_1 + x\_2 + \cdots + x\_n = 0 \\
> > \lambda\_1x\_1 + \lambda\_2x\_2 + \cdots + \lambda\_nx\_n = 0 \\
> > \quad\vdots \\
> > \lambda\_1^{n-1}x\_1 + \lambda\_2^{n-1}x\_2 + \cdots + \lambda\_n^{n-1}x\_n = 0
> > \end{cases}
> > $$
> > 系数矩阵为 $A$ .
> > $$
> > |A| = \prod\_{i=1}^{n} (\lambda\_i - \lambda) \neq 0
> > $$
> >
> > $$
> > r(A) = n \Rightarrow V\_1 \cap V\_2 = 0
> > $$
> >
> > $$
> > \Rightarrow V\_1 \cap V\_2 = V\_3 = 0
> > $$
> >
> > $$
> > A = \begin{pmatrix} A\_1 \ A\_2 \end{pmatrix}
> > $$
> >
> > $$
> > r(A) = n,\quad \Rightarrow r(A\_1) = r,\quad r(A\_2) = n-k
> > $$
> >
> > $$
> > \dim V\_1 = n - r(A\_1) = n-k,\quad \dim V\_2 = n - r(A\_2) = k
> > $$
> >
> > $$
> > \dim (V\_1 \oplus V\_2) = (n-k) + k = n = dim K^n
> > $$

**应用三**：利用 $V\_A$ 来求 $r(A)$

> /example/ 设 $A \in M\_{mn}(R)$ ，证明：$r(AA^\*) = r(A^\*A) = r(A)$
>
> > 证明：
> > $$
> > AX = 0 \Rightarrow AA'X = 0 \subseteq V\_A \subseteq V\_{AA'}
> > $$
> >
> > 任取 $x\_0 \in V\_{A'A}$ ，此时  $x\_0 \in R^n$ 且 $A'Ax\_0 = 0$
> >
> > 令 $X\_0 = \begin{pmatrix} a\_1 \ a\_2 \ \vdots \ a\_n \end{pmatrix} \in R^m$ ， $(Ax\_0)'(Ax\_0) = 0$
> >
> > $$
> > \Rightarrow \[a\_1, \cdots, a\_m] \begin{bmatrix} a\_1 \ \vdots \ a\_m \end{bmatrix} = 0 \Rightarrow \sum\_{i=1}^{m} a\_i^2 = 0 \Rightarrow \forall i, a\_i = 0
> > $$
> >
> > $$
> > \Rightarrow Ax\_0 = 0 \Rightarrow V\_{A'A} \subseteq V\_A \Rightarrow V\_A = V\_{A'A} \Rightarrow r(A) = r(A'A)
> > $$

结束.
