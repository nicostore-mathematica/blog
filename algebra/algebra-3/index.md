---
url: /algebra/algebra-3/index.md
---
线性空间的概念是高等代数的核心。

## Part 1 线性空间

### · 数域

$$
\mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}
$$

**定义1**:

> 设 $K$ 为 $\mathbb{C}$ 的子集，且至少包含两个不同元素。
>
> 若 $K$ 中任意两个元素的加、减、乘、除（除数不为 0）仍然属于 $K$，则称 $K$ 为**数域**。
>
> 若 $K$ 中任意两个元素的加、减、乘仍属于 $ K $，则称为**数环**。
>
> * $\mathbb{Z}$：整数环
> * $\mathbb{Q}$：有理数域
> * $\mathbb{R}$：实数域
> * $\mathbb{C}$：复数域

例1  $\mathbb{Q}(\sqrt{2}) = { a + b\sqrt{2} \mid a, b \in \mathbb{Q} }$  是数域。

> /proof/
>
> 先证明  $a + b\sqrt{2} = 0 \Rightarrow a = b = 0$
>
> $$
> (a + b\sqrt{2}) \pm (c + d\sqrt{2}) = (a \pm c) \pm (b \pm d)\sqrt{2} \in \mathbb{Q}(\sqrt{2}) \\
> $$
>
> $$
> (a + b\sqrt{2}) \cdot (c + d\sqrt{2}) = (ac + 2bd) + (ad + bc)\sqrt{2} \in \mathbb{Q}(\sqrt{2}) \\
> $$
>
> $$
> c + d\sqrt{2} \neq 0 \Rightarrow c \neq 0 \text{ or } d \neq 0 \Rightarrow c - d\sqrt{2} \neq 0 \\
> $$
>
> $$
> \frac{a + b\sqrt{2}}{c + d\sqrt{2}} = \frac{(a + b\sqrt{2})(c - d\sqrt{2})}{(c + d\sqrt{2})(c - d\sqrt{2})} = \frac{ac - 2bd}{c^2 - 2d^2} + \frac{bc - ad}{c^2 - 2d^2}\sqrt{2} \in \mathbb{Q}(\sqrt{2})
> $$

例2  $\mathbb{Q}(\sqrt{3}) = { a + b\sqrt{3} + c\sqrt{4} \mid a, b, c \in \mathbb{Q} }$  是数域。

> 先证明  $a + b\sqrt{3} + c\sqrt{4} = 0 \Rightarrow a^2 + 2b^2 + 4c^2 - 2abc = 0$
>
> $$
> \Rightarrow a = b = c = 0
> $$

* 推广1：  $\mathbb{Q}(\sqrt{2}) = { a\_0 + a\_1\sqrt{2} + \cdots + a\_n\sqrt{2^n} \mid a\_i \in \mathbb{Q}, 0 \leq i \leq n }$  是数域。

* 推广2：  $P$  为素数，则  $\mathbb{Q}(\sqrt{p}) = { a + b\sqrt{p} \mid a, b \in \mathbb{Q} }$  是数域。

例3  $\left{ a\_0 + a\_1\pi + \cdots + a\_n\pi^n \mid a\_i \in \mathbb{Q} \right}$  是数域。

> $\pi$  是超越数 $\overset{def}\iff$ 若  $b\_0\pi^m + b\_1\pi^{m+1} + \cdots + b\_m = 0$   $b\_j \in \mathbb{Q}$
>
> 则  $b\_0 = b\_1 = \cdots = b\_m = 0$  （否则不为 0 加减乘除仍封闭）
>
> $\alpha \in \mathbb{C}$  称  $\alpha$  为代数数
> $$
> \overset{def}\iff \exist f(x) = a\_nx^n + a\_{n-1}x^{n-1} + \cdots + a\_1x + a\_0
> $$
> $st. f(\alpha) = 0$  即 $\alpha$ 是 $f(x)$ 的根。

例4   $S = { a + b\sqrt{2} \mid a, b \in \mathbb{Z} }$  不是数域。

> 用反证法。设  $S$  是数域， $\mathbb{Z} \subseteq S$ 。
>
> $1 \in S \Rightarrow 2 \in S \Rightarrow \frac{1}{2} \in S$ ，即  $\frac{1}{2} = a + b\sqrt{2}$   $a, b \in \mathbb{Z}$
>
> 若  $b \neq 0$ ，则  $\sqrt{2} = \frac{a - \frac{1}{2}}{b} \in \mathbb{Q}$  矛盾！

例5  $S = { a\sqrt{2} \mid a \in \mathbb{R} }$  不是数环。

> 反证法。设  $S$  为数环， $\sqrt{2} \in S \Rightarrow 2 = \sqrt{2} \cdot \sqrt{2} \in S$
>
> 即  $2 = a\sqrt{2}\quad a \in \mathbb{Q} \Rightarrow a = \sqrt{2} \notin \mathbb{Q}$  矛盾。

**定理2**：任一数域  $K$  必包含有理数域  $\mathbb{Q}$  即  $\mathbb{Q}$  是最小数域。

> $\forall a \in K \Rightarrow 0 = a - a \in K$
>
> 由定义（数域至少有2个不同元素）再取  $K$  的非零元素  $b$ ， $1 = \frac{b}{b} \in K$
>
> $$
> \left{ \forall m \in \mathbb{Z}^+ ,\quad m = (1 + \cdots + 1) \in K,\quad
> -m = 0 - m \in K \right} \Rightarrow \mathbb{Z} \subseteq K\\
> $$
> 任取  $\frac{m}{n} \in \mathbb{Q}$   $n \in \mathbb{Z}^+$   $m \in \mathbb{Z}^+$   $n \in K$   $m \in K \Rightarrow \frac{m}{n} \in K$  即  $\mathbb{Q} \subseteq K$

### · 线性空间

**定义1**：

> 设 $K$ 为数域，$a\_1, a\_2, \ldots, a\_n \in K$
>
> $1 \times n$ 矩阵 $\[a\_1, a\_2, \ldots, a\_n]$ 称为 $K$ 上的 $n$ 维行向量， $n \times 1$ 矩阵 $\begin{bmatrix} a\_1 \ \vdots \ a\_n \end{bmatrix}$ 称为 $K$ 上的 $n$ 维列向量
>
> 记 $K\_n = { (a\_1, \ldots, a\_n) \mid a\_i = k, i \in \mathbb{N} }$，$K$ 上的 $n$ 维行向量空间
>
> $K^n = { \begin{bmatrix} a\_1 \ \vdots \ a\_n \end{bmatrix} \mid a\_i \in K, i \in \mathbb{N} }$，$K$ 上的 $n$ 维列向量空间

$$
\alpha = \begin{pmatrix} a\_1 \ a\_2 \ \vdots \ a\_n \end{pmatrix}, \quad \beta = \begin{pmatrix} b\_1 \ b\_2 \ \vdots \ b\_n \end{pmatrix} \in K^n, \quad c \in K
$$

$$
\alpha - \beta \overset{\text{def}}{=} \begin{pmatrix} a\_1 - b\_1 \ \vdots \ a\_i - b\_i \end{pmatrix}, \quad \forall i \in \mathbb{N} \quad \quad
\alpha + \beta \overset{\text{def}}{=} \begin{pmatrix} a\_1 + b\_1 \ \vdots \ a\_n + b\_n \end{pmatrix}\quad \quad
c \cdot \alpha \overset{\text{def}}{=} \begin{pmatrix} ca\_1 \ \vdots \ ca\_n \end{pmatrix}
$$

> 行向量运算规则：$\alpha, \beta, \gamma \in K^n (K\_n), k \in K$
>
> 1. 加法交换律：$\alpha + \beta = \beta + \alpha$
> 2. 加法结合律：$\alpha + (\beta + \gamma) = (\alpha + \beta) + \gamma$
> 3. 零向量：$\alpha + 0 = \alpha$
> 4. 负向量：$\alpha + (-\alpha) = 0$
> 5. 乘法单位元：$1 \cdot \alpha = \alpha$
> 6. 数乘分配律（左）：$(k + l) \alpha = k\alpha + l\alpha$
> 7. 数乘分配律（右）：$k(\alpha + \beta) = k\alpha + k\beta$
> 8. 数乘结合律：$(kl)\alpha = k(l\alpha)$

然后我们可以给出代数学中的一个核心定义：

**定义2**：

> 设 $K$ 为数域，$V$ 为非空集合。$V$ 上有一个加法运算 $+ : V \times V \rightarrow V$ ，即 $( \alpha, \beta ) \mapsto \alpha + \beta$
>
> $K$ 关于 $V$ 有一个数乘运算 $K \times V \rightarrow V$ ，即 $(k, \alpha) \mapsto k\alpha$
>
> 若加法运算和数乘运算满足八条性质，则称 $V$ 为数域 $K$ 上的线性空间或向量空间。

请注意，线性空间中的加法和数乘已经不再局限于数的加法和乘法的概念中了。也就是说，1+1等于几是由你自己定义的，只要你所定义的满足八条运算法则。

正是因为这个，对于零元，单位元，负元也是要根据八条法则确定。比如零元并不一定就是0.我们可以根据线性空间的性质得出。

此处本喵给出一个想法：
$$
f(\alpha+\beta)=f(\alpha)+f(\beta)\quad \quad f(k\alpha)=kf(\alpha)
$$

> /question/  我们是否可以说集合 $V$ 中元素 $\alpha$ 和 $\beta$ 直须满足上述条件 ( $k\in K$ ) 即可称之为线性空间？

例1： $K^n$ 和 $K\_n$ 是 $K$ 上的线性空间

例2： $K\[x] = { a\_0x^n + \cdots + a\_n \mid x$ 是未定元$, a\_i \in K, i \in \mathbb{N} }$

> 加法：
> $$
> f(x) = a\_0x^n + \cdots + a\_n\quad \quad
> g(x) = b\_0x^m + \cdots + b\_m \quad n \geq m\\
> f(x) + g(x) \overset{\text{def}}{=} a\_0x^n + \cdots + (a\_m + b\_m)x^m + \cdots + (a\_0 + b\_0)
> $$
> 数乘：$k \cdot f(x) \overset{\text{def}}{=} ka\_0x^n + \cdots + ka\_nx + ka\_n$
>
> $K\[x]$ 是 $K$ 上的线性空间。

例3： $C\[0,1]$：\[0,1] 上连续函数全体，$\mathbb{R}$

> 加法：$(f+g)(x) \overset{\text{def}}{=} f(x) + g(x)$  	数乘：$(kf)(x) \overset{\text{def}}{=} kf(x)$
>
> → 成立八条性质 → $C\[0,1]$ 是 $\mathbb{R}$ 上的线性空间。

例4： $M\_{mn}(K)$ 是数域 $K$ 上 $m \times n$ 阶矩阵全体

> 加法：$A + B$ ← 矩阵加法  	数乘：$k \cdot A$ ← 矩阵数乘
>
> → 成立八条性质 → $M\_{mn}(K)$ 是 $K$ 上的线性空间。

例5 设 $k\_1 \leq k\_2$ ( eg. $\mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$ )

> 加法：$a, b \in k\_2$，$a + b$ ← 数加法，数乘： $k\_1 \in k\_2$，$a \in k\_2$，$k\_1 \cdot a$ ← 数乘法
>
> → 成立 → $k\_2$ 是 $k\_1$ 上的线性空间。
>
> 特别：$k$ 是 $k$ 的线性空间。

**命题3**：设 $V\_k$ 是线性空间。

> 1. 零向量唯一
>    * 设 $0\_1, 0\_2$ 是零向量，则 $0\_1 = 0\_1 + 0\_2 = 0\_2$
> 2. 负向量唯一
>    * 设 $\beta$ 为都是 $\alpha$ 的负向量，即 $\alpha + \beta = 0$，$\alpha + \gamma = 0$，$\beta = \beta + 0 = \beta + (\alpha + \gamma) = (\beta + \alpha) + \gamma = 0 + \gamma = \gamma$
> 3. 加法消去律：$\alpha + \beta = \alpha + \gamma \Rightarrow \beta = \gamma$
>    * $\alpha - \alpha + \alpha + \beta = \alpha + \alpha + \gamma \Rightarrow \beta = \gamma$
> 4. $0\cdot \alpha = 0$
>    * $\alpha + 0 \cdot \alpha = (0 + 0) \alpha = 0 \cdot \alpha + 0 \cdot \alpha = 0$
> 5. $k \cdot 0 = 0$
>    * $k(0 + 0) = k \cdot 0 + k \cdot 0 = 0$
> 6. $-\alpha = (-1) \alpha$
>    * $\alpha + (-1) \alpha = (1 - 1) \alpha = 0 \cdot \alpha = 0$
> 7. 若 $k \alpha = 0$，则 $k = 0$ 或 $\alpha = 0$
>    * $k = 0$ 或 $\alpha \neq 0$，则 $k = 0$

> \[!caution]
>
> 注意：
>
> (1) 加法消去律 ⇒ 可移项\
> $$
> \alpha = \beta + \gamma \Rightarrow
> \begin{cases}
> \alpha - \beta = \gamma\\
> \alpha - \beta - \gamma = 0
> \end{cases}
> $$
> (2) $\alpha + \cdots + 0$ 不必加括号。

## Part 2 向量

### · 线性关系

考虑如下线性方程组：

$$
(\*)\quad
\begin{cases}
a\_{11}x\_1 + a\_{12}x\_2 + \cdots + a\_{1n}x\_n = b\_1 \\
a\_{21}x\_1 + a\_{22}x\_2 + \cdots + a\_{2n}x\_n = b\_2 \\
\cdots \\
a\_{m1}x\_1 + a\_{m2}x\_2 + \cdots + a\_{mn}x\_n = b\_m
\end{cases}
$$

不妨令：
$$
A =
\begin{bmatrix}
a\_{11} & a\_{12} & \cdots & a\_{1n} \\
a\_{21} & a\_{22} & \cdots & a\_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a\_{m1} & a\_{m2} & \cdots & a\_{mn}
\end{bmatrix},\quad
\mathbf{x} =
\begin{bmatrix}
x\_1 \ x\_2 \ \vdots \ x\_n
\end{bmatrix},\quad
\mathbf{b} =
\begin{bmatrix}
b\_1 \ b\_2 \ \vdots \ b\_m
\end{bmatrix}
$$

则方程组 $(\*)$ 等价于：
$$
A\mathbf{x} = \mathbf{b}
$$

设 $A = (\alpha\_1, \alpha\_2, \ldots, \alpha\_n)$ 为列分块，其中\
$$
\alpha\_j =
\begin{bmatrix}
a\_{1j} \ a\_{2j} \ \vdots \ a\_{mj}
\end{bmatrix} \in K^m
$$

$$
A\mathbf{x} = (\alpha\_1, \alpha\_2, \ldots, \alpha\_n)
\begin{pmatrix}
x\_1 \\
x\_2 \\
\vdots \\
x\_n
\end{pmatrix}
\= x\_1\alpha\_1 + x\_2\alpha\_2 + \cdots + x\_n\alpha\_n
$$

$$
(\*) \iff A\mathbf{x} = \beta \iff x\_1\alpha\_1 + x\_2\alpha\_2 + \cdots + x\_n\alpha\_n = \beta
$$

**定义1**：

> 设 $V$ 为数域 $K$ 上的线性空间，$\alpha\_1, \alpha\_2, \ldots, \alpha\_n, \beta \in V$。  若存在 $k\_1, k\_2, \ldots, k\_n \in K$，使得\
> $$
> \beta = k\_1\alpha\_1 + k\_2\alpha\_2 + \cdots + k\_n\alpha\_n
> $$
> 则称 $\beta$ 是 $\alpha\_1, \ldots, \alpha\_n$ 的**线性组合**，或称 $\beta$ 可由 $\alpha\_1, \ldots, \alpha\_n$ **线性表示**。
>
> > 注：方程组 $(\*)$ 有解 $\iff \beta$ 是 $\alpha\_1, \alpha\_2, \ldots, \alpha\_n$ 的线性组合。
>
> ***
>
> 设 $K^n$，定义标准单位行向量：
> $$
> e\_i = (0, \ldots, 1, \ldots, 0),\quad 1 \le i \le n
> $$
> 其中第 $i$ 个位置为 1，其余为 0。
>
> 集合 ${e\_1, e\_2, \ldots, e\_n}$ 称为 $K^n$ 的**标准单位行向量**。
>
> ***
>
> 任一行向量是标准单位行向量的线性组合。
>
> > **证明：**
> >
> > 任取 $\alpha \in K^n$，设 $\alpha = (a\_1, a\_2, \ldots, a\_n)$，其中 $a\_i \in K$。
> >
> > 则：
> > $$
> > \alpha = a\_1e\_1 + a\_2e\_2 + \cdots + a\_ne\_n \quad \text{（\*）}
> > $$

考虑如下齐次线性方程组：

$$
(\*\*)\quad
\begin{cases}
a\_{11}x\_1 + a\_{12}x\_2 + \cdots + a\_{1n}x\_n = 0 \\
a\_{21}x\_1 + a\_{22}x\_2 + \cdots + a\_{2n}x\_n = 0 \\
\cdots \\
a\_{m1}x\_1 + a\_{m2}x\_2 + \cdots + a\_{mn}x\_n = 0
\end{cases}
$$

等价于：
$$
(\*\*) \iff A\mathbf{x} = 0 \iff x\_1\alpha\_1 + x\_2\alpha\_2 + \cdots + x\_n\alpha\_n = 0
$$
**定义2**：

> 设 $V\_K$ 是线性空间，$\alpha\_1, \alpha\_2, \ldots, \alpha\_n \in V$。  若在 $K$ 中存在**不全为零**的 $n$ 个数 $k\_1, \ldots, k\_n$，使得\
> $$
> k\_1\alpha\_1 + k\_2\alpha\_2 + \cdots + k\_n\alpha\_n = 0
> $$
> 则称 $\alpha\_1, \alpha\_2, \ldots, \alpha\_n$ **线性相关**。
>
> 若不存在 $K$ 中不全为零的 $k\_1, \ldots, k\_n$ 使得上式成立，
>
> 则称 $\alpha\_1, \alpha\_2, \ldots, \alpha\_n$ **线性无关** 或 **线性独立**。

> \[!important]
>
> (1) 线性无关的等价定义：
>
> 若 $k\_1, \ldots, k\_n \in K$，使得\
> $$
> k\_1\alpha\_1 + k\_2\alpha\_2 + \cdots + k\_n\alpha\_n = 0
> $$
> 则必有 $k\_1 = k\_2 = \cdots = k\_n = 0$。
>
> (2) 线性相关和线性无关依赖于基域 $K$ 的选取（即 $k\_1, \ldots, k\_n \in K$）
>
> > **实例**：
> >
> > $\mathbb{R} \subseteq \mathbb{C} \Rightarrow \mathbb{C}$ 是 $\mathbb{R}$ 上的线性空间。
> >
> > **断言：** ${i, i^2, i^3, i^4}$ 在 $\mathbb{R}$ 上线性无关。

**向量组：** 有限个向量构成的集合。

/example/ 包含零向量的向量组必线性相关。

> **证明：**
>
> 设 $\alpha\_1 = 0$，$\alpha\_2, \ldots, \alpha\_n \in V$ ，取：
> $$
> 1 \cdot \alpha\_1 + 0 \cdot \alpha\_2 + \cdots + 0 \cdot \alpha\_n = 0
> $$
>
> 系数不全为零（第一个系数为 1），故：
> $$
> \alpha\_1, \alpha\_2, \ldots, \alpha\_n
> $$
> 线性无关

/example/ $n$ 维标准单位行向量 $e\_1, e\_2, \ldots, e\_n$ 必线性无关。

> **证明：**
>
> 设：
> $$
> k\_1e\_1 + k\_2e\_2 + \cdots + k\_ne\_n = 0,\quad k\_i \in K
> $$
>
> 即：
> $$
> 0 = (k\_1, k\_2, \ldots, k\_n)
> \Rightarrow k\_1 = k\_2 = \cdots = k\_n = 0
> $$
>
> 所以 ${e\_1, e\_2, \ldots, e\_n}$ 线性无关

> \[!important]
>
> 齐次线性方程组有非零解 ⇔ 向量组线性相关

**定理3**：

> 设 $1 \le m \le n$
>
> (1) 若 ${\alpha\_1, \alpha\_2, \ldots, \alpha\_m}$ 线性相关，则\
> $$
> {\alpha\_1, \ldots, \alpha\_m, \alpha\_{m+1}, \ldots, \alpha\_n}
> $$
>
> 也线性相关
>
> (2) 若 ${\alpha\_1, \alpha\_2, \ldots, \alpha\_n}$ 线性无关，则\
> $$
> {\alpha\_1, \alpha\_2, \ldots, \alpha\_m}
> $$
>
> 也线性相关.
>
> > **(1)** 由定义，存在 $K$ 中**不全为零**的数 $k\_1, \ldots, k\_m$，使得\
> > $$
> > k\_1\alpha\_1 + k\_2\alpha\_2 + \cdots + k\_m\alpha\_m = 0
> > $$
> >
> > 令其余系数为 0：
> > $$
> > k\_1\alpha\_1 + k\_2\alpha\_2 + \cdots + k\_m\alpha\_m + 0\cdot\alpha\_{m+1} + \cdots + 0\cdot\alpha\_n = 0
> > $$
> >
> > 这些系数不全为零 $\Rightarrow$ 整个向量组线性相关。
> >
> > **(2)** 是 (1) 的逆否命题.

**定理4**：设 $V\_K$ 是线性空间，$\alpha\_1, \ldots, \alpha\_n \in V$. 则：$\alpha\_1, \ldots, \alpha\_n$ 线性相关 $\iff \exists\ 1 \le i \le n$ ，使得 $\alpha\_i$ 是  $\alpha\_1, \ldots, \alpha\_{i-1}, \alpha\_{i+1}, \ldots, \alpha\_n$ 的线性组合.

> **证明：**
>
> 充分性（$\Leftarrow$）：
>
> 不妨设 $\alpha\_1$ 是 $\alpha\_2, \ldots, \alpha\_n$ 的线性组合，即\
> $$
> \exists\ k\_2, \ldots, k\_n \in K,\quad \alpha\_1 = k\_2\alpha\_2 + \cdots + k\_n\alpha\_n
> $$
>
> 移项得：
> $$
> (-1)\alpha\_1 + k\_2\alpha\_2 + \cdots + k\_n\alpha\_n = 0
> $$
>
> 系数不全为零 $\Rightarrow \alpha\_1, \ldots, \alpha\_n$ 线性相关。
>
> 必要性 $\Rightarrow$
>
> 设 $\alpha\_1, \ldots, \alpha\_n$ 线性相关，即存在不全为零的数 $k\_1, \ldots, k\_n \in K$，使得\
> $$
> k\_1\alpha\_1 + k\_2\alpha\_2 + \cdots + k\_n\alpha\_n = 0
> $$
>
> 不妨设 $k\_1 \ne 0$，则有：
> $$
> \alpha\_1 = -\frac{k\_2}{k\_1}\alpha\_2 - \cdots - \frac{k\_n}{k\_1}\alpha\_n \quad \text{（\*）}
> $$

**定理5** ：

> 设 $V\_K$ 为线性空间，$\alpha\_1, \ldots, \alpha\_n, \beta \in V$ ，若 $\alpha\_1, \ldots, \alpha\_n$ 线性无关，则
>
> * 要么 $\alpha\_1, \ldots, \alpha\_n, \beta$ 线性无关；
> * 要么 $\beta$ 是 $\alpha\_1, \ldots, \alpha\_n$ 的线性组合。

**定理6**：

> 设 $\alpha\_1, \ldots, \alpha\_n, \beta \in V\_K$，且 $\beta$ 是 $\alpha\_1, \ldots, \alpha\_n$ 的线性组合，即\
> $$
> \beta = k\_1\alpha\_1 + \cdots + k\_n\alpha\_n,\quad k\_i \in K
> $$
>
> 则线性表示唯一（即系数 $k\_1, \ldots, k\_n$ 唯一）\
> $$
> \iff \alpha\_1, \alpha\_2, \ldots, \alpha\_n
> $$
>
> 线性无关

**定理7**（线性组合的传递性）

> 不妨设：
> $$
> A = {\alpha\_1, \alpha\_2, \ldots, \alpha\_n},\quad
> B = {\beta\_1, \ldots, \beta\_j},\quad
> C = {\gamma\_1, \gamma\_2, \ldots, \gamma\_s}
> $$
> 若 $A$ 中任一向量都是 $B$ 中向量的线性组合；$B$ 中任一向量都是 $C$ 中向量的线性组合；
>
> 则 $C$ 中任一向量都是 $A$ 中向量的线性组合。
>
> > 注：此定理体现线性组合关系的“传递性”。

/example/ 设 $A = {\alpha}$，则  $A$ 线性无关 $\iff \alpha \ne 0$.

> **证明：**
>
> * 若 $\alpha \ne 0$，设 $k\alpha = 0$，$k \in K$，则 $k = 0$，故线性无关。
> * 若 $\alpha = 0$，则 $1 \cdot \alpha = 0$，系数不为零 ⇒ 线性相关。

/example/ 设 $\alpha = (a\_1, a\_2, \ldots, a\_n)$，$\beta = (b\_1, b\_2, \ldots, b\_n) \in K^n$ 则： $\alpha$ 与 $\beta$ 线性相关 $\iff a\_i$ 与 $b\_i$ 成比例

> 充分性：
>
> 设 $a\_i = k b\_i$，$1 \le i \le n$，即 $\alpha = k\beta$ ，则 $\alpha - k\beta = 0$ ⇒ $\alpha, \beta$ 线性相关。
>
> 必要性：
>
> 由 $\alpha, \beta$ 线性相关，不妨设 $\alpha$ 是 $\beta$ 的线性组合，即\
> $$
> \alpha = k\beta,\quad k \in K \Rightarrow a\_i = k b\_i,\quad 1 \le i \le n
> $$
>
> 即 $a\_1$ 与 $b\_i$ 成比例

/example/

设 $V = \mathbb{R}^2$，\
$$
\overrightarrow{OA} = (a\_1, a\_2),\quad \overrightarrow{OB} = (b\_1, b\_2)
$$

则：

* $\overrightarrow{OA}, \overrightarrow{OB}$ 线性相关 $\iff O, A, B$ 三点共线
* $\overrightarrow{OA}, \overrightarrow{OB}$ 线性无关 $\iff \triangle OAB$ 不退化
  $$
  \iff \begin{vmatrix} a\_1 & a\_2 \ b\_1 & b\_2 \end{vmatrix} \ne 0
  $$

设 $V = \mathbb{R}^3$，\
$$
\overrightarrow{OA} = (a\_1, a\_2, a\_3),\quad
\overrightarrow{OB} = (b\_1, b\_2, b\_3),\quad
\overrightarrow{OC} = (c\_1, c\_2, c\_3)
$$

则：

* $\overrightarrow{OA}, \overrightarrow{OB}, \overrightarrow{OC}$ 线性相关 $\iff O, A, B, C$ 四点共面
* $\overrightarrow{OA}, \overrightarrow{OB}, \overrightarrow{OC}$ 线性无关 $\iff OABC$ 是非退化四面体\
  $$
  \iff \begin{vmatrix}
  a\_1 & a\_2 & a\_3 \\
  b\_1 & b\_2 & b\_3 \\
  c\_1 & c\_2 & c\_3
  \end{vmatrix} \ne 0
  $$

**推广**:
$$
\alpha\_1 = (\alpha\_{11}, \alpha\_{12}, \ldots, \alpha\_{1n}) \\
\alpha\_2 = (\alpha\_{21}, \alpha\_{22}, \ldots, \alpha\_{2n}) \\
\cdots \\
\alpha\_n = (\alpha\_{n1}, \alpha\_{n2}, \ldots, \alpha\_{nn}) \in K^n
$$

则：$\alpha\_1, \alpha\_2, \ldots, \alpha\_n$ 线性无关
$$
\iff
\begin{vmatrix}
\alpha\_{11} & \alpha\_{12} & \cdots & \alpha\_{1n} \\
\alpha\_{21} & \alpha\_{22} & \cdots & \alpha\_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
\alpha\_{n1} & \alpha\_{n2} & \cdots & \alpha\_{nn}
\end{vmatrix} \ne 0
$$

## Part 3 坐标向量

**引理1**：设 $V\_k$ 是 $n$ 维线性空间，${e\_1, e\_2, \dots, e\_n}$ 是一组基。

若 $\alpha \in V$ 满足：
$$
\alpha = a\_1 e\_1 + a\_2 e\_2 + \cdots + a\_n e\_n = b\_1 e\_1 + b\_2 e\_2 + \cdots + b\_n e\_n
$$

则 $a\_i = b\_i$，对所有 $i \leq n$.

> 证明：\
> $$
> (a\_1 - b\_1)e\_1 + (a\_2 - b\_2)e\_2 + \cdots + (a\_n - b\_n)e\_n = 0
> $$
>
> 由于 ${e\_1, \dots, e\_n}$ 线性无关 ⇒ 所有系数为零：
>
> $$
> a\_1 - b\_1 = a\_2 - b\_2 = \cdots = a\_n - b\_n = 0 \Rightarrow a\_i = b\_i \quad \forall i \leq n
> $$
> $V\_K$ 是，线性空间，固定一组基 ${e\_1, \dots, e\_n}$ 及其顺序.
>
> 定义映射 $\varphi: V \to K^n$，(双射或一一对应) 其中
> $$
> \alpha = \sum\_{i=1}^n \alpha\_i e\_i \longmapsto
> \begin{pmatrix}
> \alpha\_1 \\
> \alpha\_2 \\
> \vdots \\
> \alpha\_n
> \end{pmatrix}
> $$
> 称为 $\alpha$ 在给定基 ${e\_1, \dots, e\_n}$ 下的 **坐标向量**。
>
> * **单射**：
>
>   若 $\alpha \ne \beta$ ，则 $\varphi(\alpha) \ne \varphi(\beta)$
>
>   反之，若 $\varphi(\alpha) = \varphi(\beta)$，则 $\alpha = \beta$
>
>   证明：设 $\varphi(\alpha) = \varphi(\beta) = \begin{pmatrix} \alpha\_1 \ \vdots \ \alpha\_n \end{pmatrix}$，由定义：
>   $$
>   \alpha = \alpha\_1 e\_1 + \cdots + \alpha\_n e\_n, \quad \beta = \alpha\_1 e\_1 + \cdots + \alpha\_n e\_n \Rightarrow \alpha = \beta
>   $$
>
> * **满射**：\
>   对任意 $x = \begin{pmatrix} x\_1 \ \vdots \ x\_n \end{pmatrix} \in K^n$，取 $\alpha = x\_1 e\_1 + \cdots + x\_n e\_n \in V$，则\
>   $$
>   \varphi(\alpha) = \begin{pmatrix} x\_1 \ \vdots \ x\_n \end{pmatrix} = x
>   $$
>
>   $\Rightarrow\varphi$ 是双射（一一对应）

**定义2**：线性同构

设 $V, U$ 是数域 $K$ 上的线性空间，$\varphi: V \to U$ 为双射。若对任意 $\alpha, \beta \in V$，$k \in K$，满足：

1. $\varphi(\alpha + \beta) = \varphi(\alpha) + \varphi(\beta)$ —— **保持加法**
2. $\varphi(k\alpha) = k\varphi(\alpha)$ —— **保持数乘**

则称 $\varphi: V \to U$ 为 **线性同构**，简称 $V$ 同构于 $U$，记作 $V \cong U$

**定理3**：前面定义的 $\varphi: V \to K^n$ 是线性同构

> **证明**：设 $\alpha, \beta \in V$，令\
> $$
> \alpha = \sum\_{i=1}^n a\_i e\_i, \quad \beta = \sum\_{i=1}^n b\_i e\_i
> $$
> 则\
> $$
> \varphi(\alpha) = \begin{pmatrix} a\_1 \ \vdots \ a\_n \end{pmatrix}, \quad \varphi(\beta) = \begin{pmatrix} b\_1 \ \vdots \ b\_n \end{pmatrix}
> $$
>
> 计算：
> $$
> \alpha + \beta = \sum\_{i=1}^n (a\_i + b\_i)e\_i \Rightarrow \varphi(\alpha + \beta) = \begin{pmatrix} a\_1 + b\_1 \ \vdots \ a\_n + b\_n \end{pmatrix} = \begin{pmatrix} a\_1 \ \vdots \ a\_n \end{pmatrix} + \begin{pmatrix} b\_1 \ \vdots \ b\_n \end{pmatrix} = \varphi(\alpha) + \varphi(\beta)
> $$
>
> 又对任意 $k \in K$，有
> $$
> k\alpha = \sum\_{i=1}^n k a\_i e\_i \Rightarrow \varphi(k\alpha) = \begin{pmatrix} k a\_1 \ \vdots \ k a\_n \end{pmatrix} = k \begin{pmatrix} a\_1 \ \vdots \ a\_n \end{pmatrix} = k \varphi(\alpha)
> $$
>
> $\Rightarrow \varphi$ 是线性映射，且是双射 $\Rightarrow \varphi$ 是线性同构

> \[!important]
>
> 结论：线性同构保持向量组的线性关系，即：
>
> * 将向量的线性组合映为对应向量的线性组合；
> * 将线性相关向量映为线性相关的向量；
> * 将线性无关向量映为线性无关的向量。

**定理4**：

(1) 设 $\varphi: V \to U$ 是线性同构，则 $\varphi$ 保持向量组的线性关系：

* 将向量的线性组合映为对应向量的线性组合
* 将线性相关向量映为线性相关的向量
* 将线性无关向量映为线性无关的向量

(2) 由定理3知 $\varphi: V \to K^n$ 是线性同构。设 ${\alpha\_1, \dots, \alpha\_m}$ 是 $V$ 中向量组，令 $\widetilde{\alpha}\_i = \varphi(\alpha\_i)$，则\
$$
{\alpha\_1, \dots, \alpha\_m} \text{ and } {\widetilde{\alpha}\_1, \dots, \widetilde{\alpha}\_m}
$$
具有相同的秩，即：**向量组的秩在坐标变换下不变**

> 证明：
>
> (1) 先证 $\varphi(0) = 0$
>
> $$
> \varphi(0 + 0) = \varphi(0) + \varphi(0) \Rightarrow \varphi(0) = \varphi(0) + \varphi(0)
> \Rightarrow \varphi(0) = 0
> $$
>
> 进一步定义核空间：
> $$
> \varphi^{-1}(0) = \left{ \alpha \in V \mid \varphi(\alpha) = 0 \right} = {0}
> $$
>
> 即：$\varphi$ 的核为零 $\Rightarrow \varphi$ 是单射。
>
> > (i) 设 $\rho = \lambda\_1 \alpha\_1 + \cdots + \lambda\_m \alpha\_m$
> >
> > 则：
> > $$
> > \varphi(\rho) = \varphi(\lambda\_1 \alpha\_1 + \cdots + \lambda\_m \alpha\_m) = \lambda\_1 \varphi(\alpha\_1) + \cdots + \lambda\_m \varphi(\alpha\_m)
> > $$
> >
> > $\Rightarrow \varphi$ **保持线性组合**，即满足 **定义2** (1) 和 (2)
> >
> > (ii) 设 $\lambda\_1 \alpha\_1 + \cdots + \lambda\_m \alpha\_m = 0$，且 $\lambda\_i$ 不全为 0
> >
> > 则：
> > $$
> > 0 = \varphi(0) = \varphi(\lambda\_1 \alpha\_1 + \cdots + \lambda\_m \alpha\_m) = \lambda\_1 \varphi(\alpha\_1) + \cdots + \lambda\_m \varphi(\alpha\_m)
> > $$
> >
> > 说明 $\varphi(\alpha\_1), \dots, \varphi(\alpha\_m)$ 线性相关。
> >
> > (iii) 设 $\alpha\_1, \dots, \alpha\_m$ 线性无关，证 $\varphi(\alpha\_1), \dots, \varphi(\alpha\_m)$ 线性无关
> >
> > 设：
> > $$
> > \lambda\_1 \varphi(\alpha\_1) + \cdots + \lambda\_m \varphi(\alpha\_m) = 0
> > $$
> >
> > 由 (i) 得：(因 $\varphi$ 单射)
> > $$
> > \varphi(\lambda\_1 \alpha\_1 + \cdots + \lambda\_m \alpha\_m) = 0
> > \Rightarrow \lambda\_1 \alpha\_1 + \cdots + \lambda\_m \alpha\_m = 0
> > $$
> >
> > 又因 $\alpha\_1, \dots, \alpha\_m$ 线性无关  $\Rightarrow \lambda\_1 = \cdots = \lambda\_m = 0$
> >
> > $\Rightarrow \varphi(\alpha\_1), \dots, \varphi(\alpha\_m)$ 线性无关
>
> (2) 设 ${\alpha\_1, \dots, \alpha\_r}$ 是 ${\alpha\_1, \dots, \alpha\_m}$ 的极大无关组
>
> 断言：${\varphi(\alpha\_1), \dots, \varphi(\alpha\_r)}$ 是 ${\varphi(\alpha\_1), \dots, \varphi(\alpha\_m)}$ 的极大无关组
>
> **理由**：
>
> * 由 (iii) 知：线性无关组映为线性无关组
> * 由 (ii) 知：线性相关组映为线性相关组
> * 故秩不变，极大无关组的个数相同
>
> $\Rightarrow$ 秩相同，且极大无关组指标相同
