---
title: Chapter 7 线性变换基本结构
permalink: /algebra/algebra-7/
createTime: 2025/12/18 21:48:10
---

## Part 1 线性映射的像与核

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

## Part 2 不变子空间

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

