---
url: /algebra/algebra-1/index.md
---
## Part 1 行列式

线性代数研究步骤：引入问题 $\rightarrow$ 概念方法 $\rightarrow$ 解决问题

Q：如何进行线性方程组求解？

给出$n$元线性方程：

$$
\begin{cases}
a\_{11}x\_1 + a\_{12}x\_2 + \cdots + a\_{1n}x\_n = b\_1, \\
a\_{21}x\_1 + a\_{22}x\_2 + \cdots + a\_{2n}x\_n = b\_2, \\
\vdots \\
a\_{m1}x\_1 + a\_{m2}x\_2 + \cdots + a\_{mn}x\_n = b\_m.
\end{cases}
$$

$a\_{ij}, b\_i$  常数， $x\_1, x\_2, \ldots, x\_n$  为未定元

第一章研究  $m = n$ ，即未定元个数等于方程数的情况（废话，非方阵哪来的行列式）

当  $n = 2$  时，二元线性方程组

$$
\begin{cases}
a\_{11}x\_1 + a\_{12}x\_2 = b\_1 \\
a\_{21}x\_1 + a\_{22}x\_2 = b\_2
\end{cases}
$$

> 消元法  $(a\_{21}x\_1 + a\_{22}x\_2 = b\_2 \Rightarrow (a\_{11}a\_{22} - a\_{12}a\_{21})x\_1 = b\_1a\_{22} - b\_2a\_{12})$
>
> 定义二阶行列式
> $$
> \begin{vmatrix} a\_{11} & a\_{12} \ a\_{21} & a\_{22} \end{vmatrix} = a\_{11}a\_{22} - a\_{12}a\_{21}
> $$
>
> $$
> x\_1 = \frac{b\_1}{\begin{vmatrix} a\_{11} & a\_{12} \ a\_{21} & a\_{22} \end{vmatrix}}, \quad x\_2 = \frac{b\_2}{\begin{vmatrix} a\_{11} & a\_{12} \ a\_{21} & a\_{22} \end{vmatrix}}
> $$

当  $n = 3$  时，三元线性方程组 当 $n=3$ 时，三元线性方程组

$$
\begin{equation\*}
\begin{cases}
a\_{11} x\_1 + a\_{12} x\_2 + a\_{13} x\_3 = b\_1 \\
a\_{21} x\_1 + a\_{22} x\_2 + a\_{23} x\_3 = b\_2 \\
a\_{31} x\_1 + a\_{32} x\_2 + a\_{33} x\_3 = b\_3
\end{cases}
\end{equation\*}
$$
用待定系数法：(1) $\times V + (2) \times U + (3) \times W$
$$
\begin{equation\*}
\begin{cases}
(a\_{11}U + a\_{21}V + a\_{31}W)x\_1 = b\_1U + b\_2V + b\_3W  \\
a\_{12}U + a\_{22}V + a\_{32}W = 0 \\
a\_{13}U + a\_{23}V + a\_{33}W = 0
\end{cases}
\end{equation\*}
$$
化简为二元线性方程组
$$
\begin{equation\*}
\begin{cases}
a\_{12} \frac{U}{W} + a\_{22} \frac{V}{W} = -a\_{32} \\
a\_{13} \frac{U}{W} + a\_{23} \frac{V}{W} = -a\_{33}
\end{cases}
\end{equation\*}
$$
不妨令
$$
U = \left| \begin{array}{cc} a\_{22} & a\_{23} \ a\_{32} & a\_{33} \end{array} \right|,\quad V = -\left| \begin{array}{cc} a\_{12} & a\_{13} \ a\_{32} & a\_{33} \end{array} \right|,\quad W = \left| \begin{array}{cc} a\_{12} & a\_{13} \ a\_{22} & a\_{23} \end{array} \right|
$$
通过上述方程组解出 $U$, $V$, $W$。

通过如上运算，我们可以给出三阶行列式的定义

> 定义三阶行列式：
>
> $$
> \begin{vmatrix}
> a\_{11} & a\_{12} & a\_{13} \\
> a\_{21} & a\_{22} & a\_{23} \\
> a\_{31} & a\_{32} & a\_{33}
> \end{vmatrix}= a\_{11} \begin{vmatrix} a\_{22} & a\_{23} \ a\_{32} & a\_{33} \end{vmatrix} - a\_{21} \begin{vmatrix} a\_{12} & a\_{13} \ a\_{32} & a\_{33} \end{vmatrix} + a\_{31} \begin{vmatrix} a\_{12} & a\_{13} \ a\_{22} & a\_{23} \end{vmatrix}
> $$
>
> (组合定义) =
> $$
> a\_{11}a\_{22}a\_{33} + a\_{21}a\_{32}a\_{13} + a\_{31}a\_{12}a\_{23} - a\_{13}a\_{22}a\_{31} - a\_{11}a\_{32}a\_{23} - a\_{31}a\_{21}a\_{12}
> $$

$$
x\_1 = \frac{\begin{vmatrix} a\_{11} & a\_{12} & a\_{13} \ a\_{21} & a\_{22} & a\_{23} \ a\_{31} & a\_{32} & a\_{33} \end{vmatrix}}{\begin{vmatrix} a\_{11} & a\_{12} & a\_{13} \ b\_1 & b\_2 & b\_3 \ c\_1 & c\_2 & c\_3 \end{vmatrix}}\quad\quad
x\_2 = \frac{\begin{vmatrix} a\_{11} & a\_{12} & a\_{13} \ b\_1 & b\_2 & b\_3 \ c\_1 & c\_2 & c\_3 \end{vmatrix}}{\begin{vmatrix} a\_{11} & a\_{12} & a\_{13} \ a\_{21} & a\_{22} & a\_{23} \ a\_{31} & a\_{32} & a\_{33} \end{vmatrix}}\quad \quad
x\_3 = \frac{\begin{vmatrix} a\_{11} & a\_{12} & b\_1 \ a\_{21} & a\_{22} & b\_2 \ a\_{31} & a\_{32} & b\_3 \end{vmatrix}}{\begin{vmatrix} a\_{11} & a\_{12} & a\_{13} \ a\_{21} & a\_{22} & a\_{23} \ a\_{31} & a\_{32} & a\_{33} \end{vmatrix}}
$$

> \[!important]
>
> 注意：$|A|$ 为三阶行列式，将元素  $a\_{ij}$  第  $i$  行第 $j$ 列删去，剩下元素按原来的顺序构成的二阶行列式称为  $a\_{ij}$  的余式，记为  $M\_{ij}$   ，按照第一列展开为：
> $$
> |A| = a\_{11}M\_{11} - a\_{21}M\_{21} + a\_{31}M\_{31}
> $$

这时候我们可以给出行列式的一些其他定义：

> 定义：
> $$
> |A| = \begin{vmatrix} a\_{11} & a\_{12} & a\_{13} \ a\_{21} & a\_{22} & a\_{23} \ a\_{31} & a\_{32} & a\_{33} \end{vmatrix}
> $$
> $a\_{11}, a\_{22}, a\_{33}$ 组成这个行列式的主对角线。
>
> 若主对角线下方元素全为0，即  $a\_{ij} = 0, i > j$ ，称 |A| 为上三角行列式。
>
> 若主对角线上方元素全为0，即  $a\_{ij} = 0, i < j$ ，称 |A| 为下三角行列式。
>
> $a\_{ij}$  代数余子式
> $$
> A\_{ij} = (-1)^{i+j} M\_{ij}\Rightarrow |A| = a\_{11}A\_{11} + a\_{21}A\_{21} + a\_{31}A\_{31}
> $$
> 这个行列式的转置： $|A^T| = \begin{vmatrix} a\_{11} & a\_{21} & a\_{31} \ a\_{12} & a\_{22} & a\_{32} \ a\_{13} & a\_{23} & a\_{33} \end{vmatrix}$  为行列互换

这时候我们可以尝试计算行列式的值了！
$$
|A| = a\_{11}A\_{11} + a\_{21}A\_{21} + a\_{31}A\_{31}
\= a\_{11}A\_{11} + a\_{12}A\_{12} + a\_{13}A\_{13}
$$

> 二阶行列式的几何意义
>
> $$
> \overrightarrow{OA} = (a\_1, a\_2),\quad
> \overrightarrow{OB} = (b\_1, b\_2),\quad
> S\_{\triangle OAB} = \frac{1}{2} \left| \begin{array}{cc} a\_1 & a\_2 \ b\_1 & b\_2 \end{array} \right|
> $$
> 三阶行列式的几何意义： $R^3$ 立方体的体积
> $$
> \overrightarrow{OA} = (a\_1, a\_2, a\_3) ,\quad
> \overrightarrow{OB} = (b\_1, b\_2, b\_3) ,\quad
> \overrightarrow{OC} = (c\_1, c\_2, c\_3),\quad
> V\_{OABC} = \frac{1}{6} \left| \begin{array}{ccc} a\_1 & a\_2 & a\_3 \ b\_1 & b\_2 & b\_3 \ c\_1 & c\_2 & c\_3 \end{array} \right|.
> $$

### · n 阶行列式

**定义1**：

> 由两条竖线围成的  $n$  行  $n$  列元素组成的式子（数值）称为 n阶行列式：
> $$
> |A| = \left| \begin{array}{cccc} a\_{11} & a\_{12} & \cdots & a\_{1n} \ a\_{21} & a\_{22} & \cdots & a\_{2n} \ \vdots & \vdots & \ddots & \vdots \ a\_{n1} & a\_{n2} & \cdots & a\_{nn} \end{array} \right|
> $$
> 有时也记为  $\det(A)$  (determinant)
>
> $a\_{ij}$ 称为第 $i$ 行第 $j$ 列元素， $a\_{ij}$ 称为主对角线（对角线第  $i,j$  元素，删去  $a\_{ij}$  所在的第  $i$  行，第  $j$  列，剩余元素按原来的顺序构成一个 $n-1$ 阶行列式，称为 $a\_{ij}$ 的余子式，记为 $M\_{ij}$

**定义2**：

> 当 $n = 1$ 时，1阶行列式 $|A|$ 定义为 $a\_{11}$ ；下设所有 $n$ 阶行列式值已定义好，特别地。
>
> 下定义 $n$ 阶行列式：
>
> $$
> |A| = a\_{11}M\_{11} - a\_{21}M\_{21} + \cdots + (-1)^{n+1} a\_{n1}M\_{n1}
> $$

**定义3**：

> **递归定义** 按第1列进行展开
> $$
> |A| = a\_{11}A\_{11} + a\_{21}A\_{21} + \cdots + a\_{n1}A\_{n1}
> $$

**定义4**：

> 若  $a\_{ij} = 0$ ， $\forall i > j$ ，则主对角线下方所有元素都为0，称  $|A|$  为上三角行列式。
>
> 若  $a\_{ij} = 0$ ， $\forall i < j$ ，则主对角线上方所有元素都为0，称  $|A|$  为下三角行列式。

我们接下来给出一些性质，此处略掉其中部分性质的详细的证明过程.

**性质1**：上三角（下三角）行列式值等于主对角元素的乘积.

**性质2**：若 $|A|$ 有一行（列）全为0，则 $|A|=0$ .

**性质3**：行列式 $|A|$ 某一行（列）乘以数$c$，得到新行列式 $|B|=c|A|$ .

**性质4**：对换 $|A|$ 的两个相邻行（列），所得行列式 $|B|=-|A|$ .

**性质5**：若$|A|$有两行（列）成比例（相等），则 $|A|=0$ .

**性质6**：行列式拆分
$$
\begin{vmatrix} a\_{11} & a\_{12} & \cdots & a\_{1n} \ a\_{11} + b\_{11} & a\_{12} + b\_{12} & \cdots & a\_{1n} + b\_{1n} \ \vdots & \vdots & \ddots & \vdots \ a\_{nn} & a\_{nn} & \cdots & a\_{nn} \end{vmatrix} = \begin{vmatrix} a\_{11} & a\_{12} & \cdots & a\_{1n} \ a\_{11} & a\_{12} & \cdots & a\_{1n} \ \vdots & \vdots & \ddots & \vdots \ a\_{nn} & a\_{nn} & \cdots & a\_{nn} \end{vmatrix} + \begin{vmatrix} a\_{11} & a\_{12} & \cdots & a\_{1n} \ b\_{11} & b\_{12} & \cdots & b\_{1n} \ \vdots & \vdots & \ddots & \vdots \ a\_{nn} & a\_{nn} & \cdots & a\_{nn} \end{vmatrix}
$$

$$
|C| = \begin{vmatrix} a\_{11} & a\_{1r} + b\_{1r} & \cdots & a\_{1n} \ a\_{21} & a\_{2r} + b\_{2r} & \cdots & a\_{2n} \ \vdots & \vdots & \ddots & \vdots \ a\_{n1} & a\_{nr} + b\_{nr} & \cdots & a\_{nn} \end{vmatrix}
\= \begin{vmatrix} a\_{11} & a\_{1r} & \cdots & a\_{1n} \ a\_{21} & a\_{2r} & \cdots & a\_{2n} \ \vdots & \vdots & \ddots & \vdots \ a\_{n1} & a\_{nr} & \cdots & a\_{nn} \end{vmatrix} + \begin{vmatrix} a\_{11} & b\_{1r} & \cdots & a\_{1n} \ a\_{21} & b\_{2r} & \cdots & a\_{2n} \ \vdots & \vdots & \ddots & \vdots \ a\_{n1} & b\_{nr} & \cdots & a\_{nn} \end{vmatrix}
$$

**性质7**：行列式的某一行乘以一个数加到另外一行上或者某一列乘以一个数加到另外一列上，行列式的值不改变.

**性质8**：行列式的展开
$$
|A| =\sum\_i a\_{ki}A\_{ki} =\sum\_i a\_{ik}A\_{ik}
$$
**性质9**：行列式转置， $|A'| = |A|$.

### · 行列式展开和转置

我们这里恶趣味的给出性质8和9的证明过程：

> /proof/
>
> 先从列的角度证明行列式的展开
>
> 考虑如下相邻对换，既仅定义了相邻对换：
> $$
> 1 \cdots r-1 \quad r \cdots n \longrightarrow r \quad 1 \cdots r-1 \quad r+1 \cdots n
> $$
> 对于矩阵 $M\_{ij}$：$|A| \rightarrow$ $r$ 次列的相邻对换 $|B|\Rightarrow |B| = (-1)^{r+1} |A|$.
> $$
> |B| = \begin{vmatrix}
> a\_{1r} & a\_{11} & \cdots & a\_{1,r-1} & a\_{1,r+1} & \cdots & a\_{1n} \\
> a\_{2r} & a\_{21} & \cdots & a\_{2,r-1} & a\_{2,r+1} & \cdots & a\_{2n} \\
> \vdots & \vdots & \ddots & \vdots & \vdots & \ddots & \vdots \\
> a\_{nr} & a\_{n1} & \cdots & a\_{n,r-1} & a\_{n,r+1} & \cdots & a\_{nn}
> \end{vmatrix}
> $$
>
> $$
> \Rightarrow |B| = a\_{1r} N\_{1r} - a\_{2r} N\_{2r} + \cdots + (-1)^{n+r} a\_{nr} N\_{nr}
> $$
>
> 容易看出$\forall i$ ，$N\_{ir} = M\_{ir}$:
> $$
> \begin{align\*}
> \Rightarrow |A| &= (-1)^{r+1} |B| = (-1)^{r+1} (a\_{1r} M\_{1r} - a\_{2r} M\_{2r} + \cdots + (-1)^{n+r} a\_{nr} M\_{nr})\\
> &= (-1)^{r+1} a\_{1r} M\_{1r} + (-1)^{r+2} a\_{2r} M\_{2r} + \cdots + (-1)^{n+r} a\_{nr} M\_{nr}\\
> \end{align\*}
> $$
>
> $$
> |A| = a\_{1r} A\_{1r} + a\_{2r} A\_{2r} + \cdots + a\_{nr} A\_{nr}
> $$
>
> 即按第$r$列展开的展开式.

这个定理不只是按照第r列进行展开，我们还有更强的结论

首先我们引入 Kroneken 符号：
$$
\delta\_{ij} = \begin{cases}  1 &  i=j \ 0 &  i \neq j  \end{cases}
$$
后面会用到该符号来叙述定理

> /theorem/
>
> 定理1：设 $|A|$ 为 $n$ 阶行列式，$1 \leq r, s \leq n$，则
> $$
> a\_{1r} A\_{1s} + a\_{2r} A\_{2s} + \cdots + a\_{nr} A\_{ns} = \delta\_{rs} |A|
> $$
>
> > /proof/
> >
> > 若 $r=s$，已证；
> >
> > 下不妨设 $r\<s$ ，构造一个新行列式，
> >
> > 新行列式将第s列的元素全部换位第r列（方便证明）
> >
> > 实际上s列无论元素是什么，结论都成立
> > $$
> > 0 = |C| = \begin{vmatrix}
> > a\_{11} & \cdots & a\_{1r} & \cdots & a\_{1r} & \cdots & a\_{1n} \ \vdots & \ddots & \vdots & \ddots & \vdots & \ddots & \vdots \\
> > a\_{k1} & \cdots & a\_{kr} & \cdots & a\_{kr} & \cdots & a\_{kn} \ \vdots & \ddots & \vdots & \ddots & \vdots & \ddots & \vdots \\
> > a\_{n1} & \cdots & a\_{nr} & \cdots & a\_{nr} & \cdots & a\_{nn} \end{vmatrix}
> > \= a\_{1r} A\_{1s} + a\_{2r} A\_{2s} + \cdots + a\_{nr} A\_{ns}
> > $$
> > 后面推出的式子也称为 $|C|$ 按第 $s$ 列展开
> >
> > $|A|$ 的第 $s$ 列元素与第 $r$ 列代数余子式的乘积之和为0.
> >
> > (本节课的一些结论在研究矩阵时仍会用到)
>
> ***
>
> 引理2：
> $$
> |A| = \begin{vmatrix}
> a\_{11} & \cdots & a\_{1r}  & \cdots & a\_{1n} \\
> \vdots & \ddots & \vdots & \ddots & \vdots  \\
> {0} & \cdots & a\_{sr} & \cdots & {0}  \\
> \vdots & \ddots & \vdots & \ddots & \vdots \\
> a\_{n1} & \cdots & a\_{nr} & \cdots & a\_{nn}
> \end{vmatrix} = a\_{sr} A\_{sr}
> $$
>
> > /proof/
> >
> > $|A|$ 按第 $r$ 列进行展开
> >
> > $$
> > |A| = a\_{1r} A\_{1r} + a\_{2r} A\_{2r} + \cdots + a\_{sr} A\_{sr} + \cdots + a\_{nr} A\_{nr}
> > $$
> > $\forall i = s, \quad A\_{ir} \neq 0$
> >
> > $A\_{ir}$ 中至少有一行为0 $\implies |A| = a\_{sr} A\_{sr}$
>
> ***
>
> 引理3： $|A| = a\_{11} A\_{11} + a\_{12} A\_{12} + \cdots + a\_{1n} A\_{1n}$ (按第 $r$ 行进行展开)
>
> （该结果可以推广至类似定理1的对偶结果）
>
> > /proof/
> >
> > 第$r$行元素的拆分：
> > $$
> > a\_{r1} = a\_{11} + 0 + \cdots + 0\\
> > a\_{r2} = 0 + a\_{12} + \cdots + 0\\
> > \cdots \cdots\\
> > a\_{rn} = 0 + 0 + \cdots + a\_{1n}\\
> > $$
> >
> > $$
> > \Rightarrow |A| =
> > \begin{vmatrix}
> > a\_{11} & a\_{12} & \cdots & a\_{1n} \\
> > a\_{r1} & 0 & \cdots & 0 \\
> > \vdots & \vdots & \ddots & \vdots \\
> > a\_{n1} & a\_{n2} & \cdots & a\_{nn}
> > \end{vmatrix}
> > +\begin{vmatrix}
> > a\_{11} & a\_{12} & \cdots & a\_{1n} \\
> > 0 & a\_{r2} & \cdots & 0 \\
> > \vdots & \vdots & \ddots & \vdots \\
> > a\_{n1} & a\_{n2} & \cdots & a\_{nn}
> > \end{vmatrix}+ \cdots +
> > \begin{vmatrix}
> > a\_{11} & a\_{12} & \cdots & a\_{1n} \\
> > 0 & 0 & \cdots & a\_{rn} \\
> > \vdots & \vdots & \ddots & \vdots \\
> > a\_{n1} & a\_{n2} & \cdots & a\_{nn}
> > \end{vmatrix}\\
> > $$
> >
> > $$
> > \Rightarrow \quad = a\_{r1} A\_{r1} + a\_{r2} A\_{r2} + \cdots + a\_{rn} A\_{rn}
> > $$
> >
> > 证毕.
>
> ***
>
> 定理4：设$|A|$为$n$阶行列式，$1 \leq r, s \leq n$，则
> $$
> a\_{r1} A\_{s1} + a\_{r2} A\_{s2} + \cdots + a\_{rn} A\_{sn} = \delta\_{rs} |A|
> $$
>
> > /proof/
> >
> > 若$r=s$已证$\checkmark$ (引理3)
> >
> > 下不妨设$r\<s$
> >
> > 构造新行列式，按$s$行展开
> > $$
> > 0 = |C| =
> > \begin{vmatrix}
> > a\_{11} & a\_{12} & \cdots & a\_{1n} \\
> > a\_{r1} & a\_{r2} & \cdots & a\_{rn} \\
> > a\_{r1} & a\_{r2} & \cdots & a\_{rn} \\
> > a\_{n1} & a\_{n2} & \cdots & a\_{nn}
> > \end{vmatrix}
> > \= a\_{r1} A\_{s1} + a\_{r2} A\_{s2} + \cdots + a\_{rn} A\_{sn}
> > $$
> >
> > 证毕.

性质8的证明全部结束.

下面证明性质9：

> /proof/
>
> 对阶数进行归纳 $n=1$ 成立
>
> $n-1$ 阶成立 $\checkmark$ 证$n$阶
> $$
> |A| = a\_{11} M\_{11} - a\_{21} M\_{21} + \cdots + (-1)^{n+1} a\_{n1} M\_{n1}
> $$
> $\forall i, j$, $N\_{ji}$ 是 $M\_{ij}$ 的转置，
>
> 由归纳假设得 $N\_{ji} = M\_{ij}$, $\forall i, j$
> $$
> |A| = a\_{11} N\_{11} - a\_{21} N\_{21} + \cdots + (-1)^{n+1} a\_{n1} N\_{n1}
> \= |A'|
> $$
> (按照第一行进行转置)

## Part 2 行列式计算

$$
(\*) \quad
\begin{cases}
a\_{11} x\_1 + a\_{12} x\_2 + \cdots + a\_{1n} x\_n = b\_1 \\
a\_{21} x\_1 + a\_{22} x\_2 + \cdots + a\_{2n} x\_n = b\_2 \\
\vdots \\
a\_{n1} x\_1 + a\_{n2} x\_2 + \cdots + a\_{nn} x\_n = b\_n
\end{cases}
$$

设(\*)有解，系数行列式
$$
|A| = \begin{vmatrix}
a\_{11} & a\_{12} & \cdots & a\_{1n} \\
a\_{21} & a\_{22} & \cdots & a\_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a\_{n1} & a\_{n2} & \cdots & a\_{nn}
\end{vmatrix}
$$
先考虑二阶、三阶时，分母不动

分子由数字列替换对应列，推广到 $n$阶：

$$
|A\_i| = \begin{vmatrix}
b\_1 & a\_{12} & \cdots & a\_{1n} \\
b\_2 & a\_{22} & \cdots & a\_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
b\_n & a\_{n2} & \cdots & a\_{nn}
\end{vmatrix} = \begin{vmatrix}
a\_{11} x\_1 + a\_{12} x\_2 + \cdots + a\_{1n} x\_n & a\_{12} & \cdots & a\_{1n} \\
a\_{21} x\_1 + a\_{22} x\_2 + \cdots + a\_{2n} x\_n & a\_{22} & \cdots & a\_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a\_{n1} x\_1 + a\_{n2} x\_2 + \cdots + a\_{nn} x\_n & a\_{n2} & \cdots & a\_{nn}
\end{vmatrix}
$$
利用性质化简
$$
\= \begin{vmatrix}
a\_{11} x\_1 & a\_{12} & \cdots & a\_{1n} \\
a\_{21} x\_1 & a\_{22} & \cdots & a\_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a\_{n1} x\_1 & a\_{n2} & \cdots & a\_{nn}
\end{vmatrix} = x\_1 \cdot \begin{vmatrix}
a\_{11} & a\_{12} & \cdots & a\_{1n} \\
a\_{21} & a\_{22} & \cdots & a\_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a\_{n1} & a\_{n2} & \cdots & a\_{nn}
\end{vmatrix} = x\_1 \cdot |A|
$$
若(\*)有解，
$$
\Rightarrow \quad x\_1=\frac {|A\_1|}{|A|}\quad , \quad \cdots \quad , \quad x\_n=\frac {|A\_n|}{|A|}
$$

### · Cramer 法则

若 $|A| \neq 0$，则(\*) 有唯一解，
$$
x\_1=\frac {|A\_1|}{|A|}\quad , \quad \cdots \quad , \quad x\_n=\frac {|A\_n|}{|A|}
$$

> /proof/
>
> 若 (\*) 有解，则解必为如上形式。
>
> 此处仅证了存在的唯一性，未证解的存在性.
>
> 只要证明 $x\_i = \frac{|A\_i|}{|A|}$ 确为 (\*) 的解，即可.
>
> 其中
> $$
> |A\_i| = \begin{vmatrix}
> a\_{11} & \cdots & b\_1 & \cdots & a\_{1n} \\
> a\_{21} & \cdots & b\_2 & \cdots & a\_{2n} \\
> \vdots & \ddots & \vdots & \ddots & \vdots \\
> a\_{n1} & \cdots & b\_n & \cdots & a\_{nn}
> \end{vmatrix}
> $$

下面我们来证明解的存在性

> /proof/
> $$
> a\_{11} A\_{s1} + a\_{r2} A\_{s2} + \cdots + a\_{rn} A\_{sn} = \delta\_{rs} |A|
> $$
>
> $$
> \sum\_{j=1}^n a\_{ij} A\_{sj} = \delta\_{rs} |A|
> $$
>
> 然后对行列式元素求和
> $$
> \sum\_{i=1}^m a\_{i1} +\sum\_{i=1}^m a\_{i2}+\cdots + \sum\_{i=1}^m a\_{in}=\sum\_{j=1}^n \sum\_{i=1}^m a\_{ij}
> $$
>
> > 这里注意一点：
> > $$
> > \sum\_{j=1}^n \sum\_{i=1}^m a\_{ij}=\sum\_{i=1}^m \sum\_{j=1}^n a\_{ij}
> > $$
> > 以后若对一个长方形的二维行列式进行求和，如果行列括号的位置无改变，那么行列括号可以交换次序.
>
> $$
> x\_j = \frac{|A\_j|}{|A|} = \frac{1}{|A|} \sum\_{i=1}^n b\_i A\_{ij}
> $$
>
> 验证(\*) 的第k个方程：
> $$
> \sum\_{j=1}^n a\_{kj} x\_j = b\_k\quad , \quad \forall k\geq 1
> $$
>
> $$
> \begin{align\*}
> \sum\_{j=1}^n a\_{kj} x\_j
> &= \sum\_{j=1}^n \left( a\_{kj} \frac{1}{|A|} \sum\_{i=1}^n b\_i A\_{ij} \right) = \frac{1}{|A|} \sum\_{j=1}^n \sum\_{i=1}^n a\_{kj} b\_i A\_{ij}\\\\
> &=  \frac{1}{|A|} \sum\_{i=1}^n b\_i \left( \sum\_{j=1}^n a\_{kj} A\_{ij} \right)\\\\
> &= \frac{1}{|A|} \sum\_{i=1}^n b\_i \delta\_{ki} |A| = b\_k \quad (i=k, 1; i \neq k, 0)
> \end{align\*}
> $$

有了Cramer法则后，相当于把求解$n$元线性方程组的问题转化成求计算行列式的问题。

当阶数$n$过大，仅按定义（某行、列）展开，计算量太大，这时候尝试降价计算

> $$
> |A| = \begin{vmatrix} a\_{11} & \cdots & a\_{1s} & \cdots & a\_{1m} \ \vdots & \ddots & \vdots & \ddots & \vdots \ 0 & \cdots & a\_{rs} & \cdots & 0 \ \vdots & \ddots & \vdots & \ddots & \vdots \ a\_{n1} & \cdots & a\_{ns} & \cdots & a\_{nn} \end{vmatrix} = a\_{rs} A\_{rs}
> $$
>
> 计算行列式的值时，利用行列式的性质， 将行列式的某行或某一列化出尽可能多的零， 再按这一行或这一列展开，进行降阶处理。
>
> > 性质3：行列式的某一行或某一列乘C，得到的值是原来行列式的C倍
> >
> > 性质7：行列式的某一行乘以一个数加到另外一行上或者某一列乘以一个数加到另外一行上，行列式的值不改变

### · Vandermonde 行列式

$$
V\_n = \begin{vmatrix} 1 & x\_1 & x\_1^2 & \cdots & x\_1^{n-2} & x\_1^{n-1} \ 1 & x\_2 & x\_2^2 & \cdots & x\_2^{n-2} & x\_2^{n-1} \ \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \ 1 & x\_{n-1} & x\_{n-1}^2 & \cdots & x\_{n-1}^{n-2} & x\_{n-1}^{n-1} \ 1 & x\_n & x\_n^2 & \cdots & x\_n^{n-2} & x\_n^{n-1} \end{vmatrix}
$$

> /proof/
> $$
> \= \begin{vmatrix}
> 1 & x\_1 - x\_n & x\_1^2 - x\_1 x\_n & \cdots & x\_1^{n-2} - x\_1^{n-3} x\_n & x\_1^{n-1} - x\_1^{n-2} x\_n \\
> 1 & x\_2 - x\_n & x\_2^2 - x\_2 x\_n & \cdots & x\_2^{n-2} - x\_2^{n-3} x\_n & x\_2^{n-1} - x\_2^{n-2} x\_n \\
> \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
> 1 & x\_{n-1} - x\_n & x\_{n-1}^2 - x\_{n-1} x\_n & \cdots & x\_{n-1}^{n-2} - x\_{n-1}^{n-3} x\_n & x\_{n-1}^{n-1} - x\_{n-1}^{n-2} x\_n \\
> 1 & 0 & 0 & \cdots & 0 & 0
> \end{vmatrix}
> $$
> 按照最后一行进行展开
> $$
> \=(-1)^{n+1}
> \begin{vmatrix}
> x\_1 - x\_n & x\_1^2 - x\_1 x\_n & \cdots & x\_1^{n-2} - x\_1^{n-3} x\_n & x\_1^{n-1} - x\_1^{n-2} x\_n \\
> x\_2 - x\_n & x\_2^2 - x\_2 x\_n & \cdots & x\_2^{n-2} - x\_2^{n-3} x\_n & x\_2^{n-1} - x\_2^{n-2} x\_n \\
> \vdots & \vdots & \ddots & \vdots & \vdots \\
> x\_{n-1} - x\_n & x\_{n-1}^2 - x\_{n-1} x\_n & \cdots & x\_{n-1}^{n-2} - x\_{n-1}^{n-3} x\_n & x\_{n-1}^{n-1} - x\_{n-1}^{n-2} x\_n \\
> \end{vmatrix}
> $$
> 根据性质化简展开
> $$
> \= (-1)^{n+1} (x\_1 - x\_n) (x\_2 - x\_n) \cdots (x\_{n-1} - x\_n) \cdot \begin{vmatrix} 1 & x\_1 & \cdots & x\_1^{n-3} & x\_1^{n-2} \ 1 & x\_2 & \cdots & x\_2^{n-3} & x\_2^{n-2} \ \vdots & \vdots & \ddots & \vdots & \vdots \ 1 & x\_{n-1} & \cdots & x\_{n-1}^{n-3} & x\_{n-1}^{n-2} \end{vmatrix}
> $$
> 化为递推式：
> $$
> \implies V\_n = (x\_n - x\_1) (x\_n - x\_2) \cdots (x\_n - x\_{n-1}) V\_{n-1} \\
> \implies V\_n = \prod\_{1 \leq i < j \leq n} (x\_j - x\_i)
> $$
> 事实上，我们有时候也会用到未定元降幂排列.

$$
V\_n = \begin{vmatrix}
x\_1^{n-1} & x\_1^{n-2} & \cdots & x\_1 & 1 \\
x\_2^{n-1} & x\_2^{n-2} & \cdots & x\_2 & 1 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
x\_n^{n-1} & x\_n^{n-2} & \cdots & x\_n& 1 \ \end{vmatrix}
$$

> $(n-1) + (n-2) + \cdots + 1 = \frac{n(n-1)}{2}$ 次列换对换
> $$
> \widetilde{V}*n = (-1)^{\frac{n(n-1)}{2}} V\_n = \prod*{1 \leq i < j \leq n} (x\_i - x\_j)
> $$
> 结束.

### · 递推法

/example/    多项式的友阵的特征多项式
$$
F\_n =
\begin{vmatrix}
\lambda & 0 & \cdots & 0 & a\_n \\
-1 & \lambda & \cdots & 0 & a\_{n-1} \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & \cdots & \lambda & a\_2 \\
0 & 0 & \cdots & -1 & \lambda + a\_1
\end{vmatrix}
$$

> /proof/
>
> 按第一行展开：
> $$
> \begin{align\*}
> F\_n &= (-1)^{n+1} \lambda \cdot F\_{n-1} + (-1)^{n+1} a\_n (-1)^{n-1} = \lambda \cdot F\_{n-1} + a\_n, \quad F\_1 = \lambda + a\_1\\
> &= \lambda (\lambda F\_{n-2} + a\_{n-1}) + a\_n = \lambda^2 F\_{n-2} + a\_{n-1} \lambda + a\_n\\
> &= \lambda (\lambda F\_{n-2} + a\_{n-1}) + a\_n = \lambda^2 F\_{n-2} + a\_{n-1} \lambda + a\_n
> \end{align\*}
> $$
> 结束.

***

### · 箭型行列式

$$
|A| = \begin{vmatrix} x & a & a & \cdots & a & a \ a & x & a & \cdots & a & a \ \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \ a & a & a & \cdots & x & a \ a & a & a & \cdots & a & x \end{vmatrix}
$$

> 利用性质7
>
> $$
> \= \begin{vmatrix} x + (n-1)a & x + (n-2)a & x + (n-3)a & \cdots & x + (n-1)a \ a & x & a & \cdots & a \ \vdots & \vdots & \vdots & \ddots & \vdots \ a & a & a & \cdots & x \end{vmatrix}
> $$
> 再进行展开
> $$
> \= (x + (n-1)a) \cdot \begin{vmatrix} 1 & 1 & 1 & \cdots & 1 \ a & x & a & \cdots & a \ \vdots & \vdots & \vdots & \ddots & \vdots \ a & a & a & \cdots & x \end{vmatrix} = (x + (n-1)a) \cdot \begin{vmatrix} 1 & 1 & 1 & \cdots & 1 \ 0 & x-a & 0 & \cdots & 0 \ \vdots & \vdots & \vdots & \ddots & \vdots \ 0 & 0 & 0 & \cdots & x-a \end{vmatrix}
> $$
> 容易发现这是一个上三角行列式
> $$
> \= (x + (n-1)a) (x-a)^{n-1}
> $$
> 结束.

***

### · 提取因子法

$$
|A| = \begin{vmatrix} x & y & z & w \ y & x & w & z \ z & w & x & y \ w & z & y & x \end{vmatrix}
$$

> 强行拆解会非常麻烦
>
> 通过观察我们可以发现每一行和相同
>
> start！
> $$
> \= \begin{vmatrix}
> x+y+z+w & y & z & w \\
> x+y+z+w & x & w & z \\
> x+y+z+w & z & w & x \\
> x+y+z+w & w & x & y
> \end{vmatrix}
> \=(A)
> \begin{vmatrix}
> 1 & y & z & w \\
> 1 & x & w & z \\
> 1 & z & w & x \\
> 1 & w & x & y
> \end{vmatrix}
> $$
> $A=x+y+z+w$
>
> 然后利用性质化简
> $$
> \= (A)
> \begin{vmatrix}
> 1 & y & z & w \\
> 0 & x-y & w-z & z-w \\
> 0 & w-y & x-z & y-w \\
> 0 & z-y & y-z & x-w
> \end{vmatrix}
> $$
> 然后按照第一列展开
> $$
> \=(A)\begin{vmatrix}
> x-y & w-z & z-w \\
> w-y & z-z & y-w \\
> z-y & y-z & x-w
> \end{vmatrix}
> $$
> 然后在列上使用性质7
> $$
> \=\begin{vmatrix} x+w-y-z & w-z & 0 \ x+w-y-z & x-z & x+y-z-w \ 0 & y-z & x+y-z-w \end{vmatrix}
> $$
> 提取公因子
> $$
> \=(ABC)
> \begin{vmatrix}
> 1 & w-z & 0 \\
> 1 & x-z & 1 \\
> 0 & y-z & 1
> \end{vmatrix}
> \=(ABC)
> \begin{vmatrix}
> 1 & w-z & 0 \\
> 0 & x-w & 1 \\
> 0 & y-z & 1
> \end{vmatrix}
> $$
> $B=x+w-y-z$
>
> $C=x+y-z-w$
>
> 按照第一列进行展开
> $$
> \=(ABC)
> \begin{vmatrix}
> 1 & w-z & 0 \\
> 0 & x-w & 1 \\
> 0 & y-z & 1
> \end{vmatrix}
> \=(ABC)
> \begin{vmatrix}
> x-w & 1 \\
> y-z & 1
> \end{vmatrix}
> $$
> 结束.

***

### · 拆分法

/example/    证明
$$
\begin{vmatrix}
ax + by & ay + bz & az + bx \\
ay + bz & az + bx & ax + by \\
az + bx & ax + by & ay + bz
\end{vmatrix}
\= (a^3 + b^3)
\begin{vmatrix}
x & y & z \\
y & z & x \\
z & x & y
\end{vmatrix}
$$

> /proof/
> $$
> \= \begin{vmatrix} ax & ay + bz & az + bx \ ay & az + bx & ax + by \ az & ax + by & ay + bz \end{vmatrix} + \begin{vmatrix} by & ay + bz & az + bx \ bz & az + bx & ax + by \ bx & ax + by & ay + bz \end{vmatrix}
> $$
> 后续过程略.

## Part 3 等价定义

为了决定行列式中每一项的符号，我们引进逆序数的概念。

### · 逆序数

> **定义1**： 我们称 $n$ 个数  $1, 2, \ldots, n$  的排列 $(1, 2, \ldots, n)$ 为常序排列，即数字从小到大的排列为常序排列。如果在一个排列中  $j$  排在  $i$  之前但是 $j > i$ ，则称这是一个逆序对。一个排列的所有逆序对的总个数称为这个排列的逆序数。

> \[!important]
>
> 逆序数的求法是：设排列为  $(k\_1, k\_2, \ldots, k\_n)$ ，先看  $k\_1$  后面有多少个数小于  $k\_1$ ，不妨设为  $m\_1$ ；再看  $k\_2$  后面有多少个数小于  $k\_2$ ，不妨设为  $m\_2$ ；最后看  $k\_{n-1}$  后面有多少个数小于  $k\_{n-1}$ ，不妨设为  $m\_{n-1}$ 。由定义，排列  $(k\_1, k\_2, \ldots, k\_n)$  的逆序数就等于  $m\_1 + m\_2 + \cdots + m\_{n-1}$ ，通常记为  $N(k\_1, k\_2, \ldots, k\_n)$ 。例如，常序排列  $(1, 2, \ldots, n)$  的逆序数为零。

**引理1**：设  $(k\_1, k\_2, \ldots, k\_n) \in S\_n$ ，若将其中  $k\_i$  与  $k\_j$  的位置对换，其余数不动，则排列的奇偶性改变。即奇排列变为偶排列，偶排列变为奇排列。

> **证明**：首先我们考虑相邻两个数的对换。若是  $k\_i > k\_{i+1}$ ，则对换后逆序数减少了 1；若  $k\_i < k\_{i+1}$ ，则对换后逆序数增加了 1，无论哪种情形，奇偶性都改变了。再考虑一般情形。 $k\_i$  与  $k\_j$  的对换可通过相邻两个数的对换来实现：不妨设  $i < j$ ，将  $k\_i$  与  $k\_{i+1}$  对换，再与  $k\_{i+2}$  对换，…，最后与  $k\_j$  对换（共换了  $j - i$  次）；再将  $k\_j$  与  $k\_{j-1}$  对换，再与  $k\_{j-2}$  对换，…，最后与  $k\_{i+1}$  对换（共换了  $j - i - 1$  次）；此时  $k\_j$  到了  $k\_i$  原来的位置， $k\_i$  到了原来  $k\_j$  的位置。这样一共换了  $2(j - i) - 1$  次，因此改变了奇偶性

**引理2**：设  $n \geq 2$ ，则  $S\_n$  中的奇排列与偶排列各占一半。

> **证明** 设  $S\_n$  中的奇排列有  $p$  个，偶排列有  $q$  个。由于  $n \geq 2$ ，故可将每个奇排列的头两个数对换一下，则所有的奇排列变成了互不相同的偶排列，因此  $p \leq q$ 。同理可证  $q \leq p$ ，故  $p = q$ .

> \[!caution]
>
> 逆序数的实际意义是，它给出了任一排列与常序排列之间相互转换的关系。

**引理3**：设  $(k\_1, k\_2, \cdots, k\_n) \in S\_n$ ，则通过  $N(k\_1, k\_2, \cdots, k\_n)$  次相邻对换，可将  $(k\_1, k\_2, \cdots, k\_n)$  变为常序排列  $(1, 2, \cdots, n)$ 。

> **证明** 对  $n$  进行归纳。 $n = 1$  时结论显然成立，设对  $1, 2, \cdots, n - 1$  的任一排列结论成立。设  $n$  在排列  $(k\_1, k\_2, \cdots, k\_n)$  的第  $i$  位置，即  $k\_i = n$ ，其逆序数为  $m\_i$ （这时  $m\_i = n - i$ ）。将  $k\_i$  与  $k\_{i+1}$  对换，再与  $k\_{i+2}$  对换，…，最后与  $k\_n$  对换（共换了  $m\_i$  次），此时  $n$  就到了最末一位。注意到
> $$
> N(k\_1, k\_2, \cdots, k\_n) = m\_i + N(k\_1, \cdots, k\_{i-1}, k\_{i+1}, \cdots, k\_n),
> $$
> 且  $(k\_1, \cdots, k\_{i-1}, k\_{i+1}, \cdots, k\_n) \in S\_{n-1}$ ，由归纳假设知  $(k\_1, \cdots, k\_{i-1}, k\_{i+1}, \cdots, k\_n)$  经过  $N(k\_1, \cdots, k\_{i-1}, k\_{i+1}, \cdots, k\_n)$  次相邻对换可变为常序排列  $(1, 2, \cdots, n - 1)$ ，因此由上面的讨论知  $(k\_1, k\_2, \cdots, k\_n)$  经过  $N(k\_1, k\_2, \cdots, k\_n)$  次相邻对换可变为常序排列  $(1, 2, \cdots, n)$ .

### · 等价定义

**定义**：设 $|A|$ 是的 $n$ 阶行列式，则

$$
|A| = \sum\_{(k\_1, k\_2, \cdots, k\_n) \in S\_n} (-1)^{N(k\_1, k\_2, \cdots, k\_n)} a\_{k\_1 1} a\_{k\_2 2} \cdots a\_{k\_n n}.
$$

> \[!important]
>
> 我们也可以将上式作为行列式值的定义，从而推出行列式的诸性质。不过这个定义看着还是挺难受的。

## Part 4 Laplace定理

### · 定义

**定义1** ：设  $|A|$  为 n 阶行列式， $1 \leq k \leq n$

选定  $1 \leq i\_1 \leq i\_2 \leq \cdots \leq i\_n \leq n$ ， $1 \leq j\_1 \leq j\_2 \leq \cdots \leq j\_k \leq n$  定列

将  $|A|$  的第  $i\_1$  行，第  $i\_2$  行，…，第  $i\_k$  行与第  $j\_1$  列，第  $j\_2$  列，…第  $j\_k$  列

交叉点上的元素按原来的顺序构成一个 k 阶行列式，称为  $|A|$  的 k 阶子式

记为\
$$
A\_{j\_1 j\_2 \ldots j\_k}^{i\_1 i\_2 \ldots i\_k}  =  \begin{vmatrix} a\_{i\_1 j\_1} & a\_{i\_1 j\_2} & \cdots & a\_{i\_1 j\_k} \ a\_{i\_2 j\_1} & a\_{i\_2 j\_2} & \cdots & a\_{i\_2 j\_k} \ \vdots & \vdots & \ddots & \vdots \ a\_{i\_k j\_1} & a\_{i\_k j\_2} & \cdots & a\_{i\_k j\_k} \end{vmatrix}
$$
删去第  $i\_1$ ， $i\_2$ ，…， $i\_k$  行，第  $j\_1$ ， $j\_2$ ，…， $j\_k$  列，

剩余的按原来顺序构成一个 $(n-k)$  阶子式，称为前面 k 阶子式的余子式记为  $M(\_{j\_1 j\_2 \ldots j\_k}^{i\_1 i\_2 \ldots i\_k})$

代表余式
$$
\hat{A}(*{j\_1 j\_2 \ldots j\_k}^{i\_1 i\_2 \ldots i\_k}) = (-1)^{i\_1 + i\_2 + \cdots + i\_k + j\_1 + j\_2 + \cdots + j\_k} M(*{j\_1 j\_2 \ldots j\_k}^{i\_1 i\_2 \ldots i\_k})
$$
**定理 2 (Laplace 定理)**

$|A|$  中给定 k 行 (列)，则包含于这 k 行 (列) 中所有 k 阶子式与其代数余子式乘积之和等于  $|A|$ .

给定  $1 \leq i\_1 < i\_2 < \cdots < i\_k \leq n$ ，则
$$
|A| = \sum\_{1 \leq j\_1 < j\_2 < \cdots < j\_k \leq n} A(*{j\_1 j\_2 \ldots j\_k}^{i\_1 i\_2 \ldots i\_k}) \hat{A}(*{j\_1 j\_2 \ldots j\_k}^{i\_1 i\_2 \ldots i\_k}) \cdots (\*)
$$
给定  $1 \leq i\_1 < i\_2 < \cdots < i\_k \leq n$ ，则

$$
|A| = \sum\_{1 \leq j\_1 < j\_2 < \cdots < j\_k \leq n} A(*{j\_1 j\_2 \ldots j\_k}^{i\_1 i\_2 \ldots i\_k}) \hat{A}(*{j\_1 j\_2 \ldots j\_k}^{i\_1 i\_2 \ldots i\_k})
$$

### · 分块行列式

部分分块行列式可以视作 Laplace 变换的推论，但是我懒，所以全部放上.

**三角分块行列式**：
$$
\begin{vmatrix}
A & B \\
O & D
\end{vmatrix}
\= |A| \cdot |D|,\quad
\begin{vmatrix}
A & O \\
C & D
\end{vmatrix}
\= |A| \cdot |D|
$$

以及分块左三角和右三角

$$
\begin{vmatrix}
O & B \\
C & D
\end{vmatrix}
=============

\begin{vmatrix}
A & B \\
C & O
\end{vmatrix}
\= (-1)^t |B| \cdot |C|
$$

**对称分块行列式**：

$$
\begin{vmatrix}
A & B \\
B & A
\end{vmatrix}
\= |A + B| \cdot |A - B|
$$

其中  $A$  和  $B$  为同阶方阵.
