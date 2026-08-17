---
title: Lesson 6 实数 II
permalink: /integral/integral-6/
createTime: 2026/08/17 14:16:32
---

## Part 2 实数系基本性质

数列极限的存在性依赖于实数系的基本性质. 例如，我们用确界原理导出了有界单调数列的极限存在性，进而导出了 Cauchy 准则. 为了进一步研究的需要，我们再介绍实数的几条基本性质，并说明这些基本性质之间其实是互相等价的. 

下面的结果通常称为“**闭区间套原理**”

### · Cantor

**定理1** (Cantor)：设 $\{[a_n, b_n]\}$ 为递降闭区间套序列，即
$$
[a_1, b_1] \supset [a_2, b_2] \supset \cdots \supset [a_n, b_n] \supset \cdots.
$$
如果 $\displaystyle \lim_{n \to \infty} (b_n - a_n) = 0$，则存在唯一的点 $c$，使得 $c \in [a_n, b_n]$，$\forall\, n \geq 1$. 

> /proof/
>
> 由已知条件我们知道，数列 $\{a_n\}$ 单调递增且有上界 $b_1$，$\{b_n\}$ 单调递减且有下界 $a_1$. 这说明 $\{a_n\}$ 和 $\{b_n\}$ 都收敛，设极限分别为 $a, b$. 由极限的保序性，有
> $$
> a_n \leq a \leq b \leq b_n,\quad \forall\, n \geq 1,
> $$
> 即
> $$
> 0 \leq b - a \leq b_n - a_n \to 0\ (n \to \infty),
> $$
> 这说明 $a = b$. 于是 $c = a = b \in [a_n, b_n]$，$\forall\, n \geq 1$. 如果另有 $c' \in [a_n, b_n]$，$\forall\, n \geq 1$，则由夹逼原理即知 $c' = a = b = c$. 
>
> > 把定理中的闭区间套换成开区间套时结论一般不再成立. 如
> > $$
> > (0,1) \supset \left(0,\frac{1}{2}\right) \supset \cdots \supset \left(0,\frac{1}{n}\right) \supset \cdots
> > $$
> > 是开区间套，但这些开区间之交为空集. 

/example/  实数集 $\mathbb{R}$ 是不可数集. 

> 我们来证明 $[0, 1]$ 是不可数的. （反证法）显然，$[0, 1]$ 是无限集. 如果它不是不可数的，则一定是无限可数集，因此可以记为
> $$
> [0, 1] = \{x_1, x_2, \ldots, x_n, \ldots\}.
> $$
>
> 将 $[0, 1]$ 三等分，必有一个等分区间不含 $x_1$，记该区间为 $[a_1, b_1]$. 再对 $[a_1, b_1]$ 三等分，必有一个等分区间不含 $x_2$，记该区间为 $[a_2, b_2]$. 如此继续等分 $[a_2, b_2]$ 等，我们就得到闭区间套
> $$
> [0, 1] \supset [a_1, b_1] \supset [a_2, b_2] \supset \cdots \supset [a_n, b_n] \supset \cdots,
> $$
> 使得 $b_n - a_n = \dfrac{b-a}{3^n} \to 0\ (n \to \infty)$，且 $x_n \notin [a_n, b_n]$. 
>
> 根据闭区间套原理，存在 $\xi \in [a_n, b_n]$，$\forall\, n \geq 1$. 显然 $\xi \in [0, 1]$，但 $\xi \neq x_n$，$\forall\, n \geq 1$. 这就导出了矛盾. 

这个例子说明无理数集是不可数的，因此无理数远比有理数多，因为下面的例子表明有理数集是可数的. 

/example/  有理数集 $\mathbb{Q}$ 是可数集. 

> 我们只要证明正有理数可数就可以了. 正有理数均可表示为形如 $p/q$ 的分数，其中 $p, q$ 为正整数，且 $p, q$ 无大于 1 的公因子. 按照 $p + q$ 的大小，依据通常的“字典法则”可将正有理数排成一列：
> $$
> 1 = 1/1,\ 1/2,\ 2/1,\ 1/3,\ 3/1,\ 1/4,\ 2/3,\ 3/2,\ 4/1,\ \ldots,
> $$
> 其中，当 $p + q < r + s$，或 $p + q = r + s$ 但 $p < r$ 时，将 $p/q$ 排在 $r/s$ 前面. 这样，正有理数不重不漏地出现在这一列中，这说明正有理数集是可数的. 

### · Bolzano

**定理2**(Bolzano)：$\mathbb{R}$ 中有界数列必有收敛子列. 

> /proof/
>
> 设 $\{a_n\}$ 为有界数列，不妨设 $\{a_1, a_2, \ldots\} \subset [a, b]$. 将 $[a, b]$ 二等分，必有一个小区间包含了数列 $\{a_n\}$ 中的无限项，记该小区间为 $[a_1, b_1]$，并取 $a_{n_1} \in [a_1, b_1]$. 
>
> 再将 $[a_1, b_1]$ 二等分，仍有一个小区间含有 $\{a_n\}$ 中的无限项，记该小区间为 $[a_2, b_2]$，取 $a_{n_2} \in [a_2, b_2]$，且 $n_2 > n_1$. 如此继续，我们得到区间套
> $$
> [a_1, b_1] \supset [a_2, b_2] \supset \cdots \supset [a_k, b_k] \supset \cdots,\quad b_k - a_k = \frac{1}{2^k}(b - a) \to 0,
> $$
> 以及 $\{a_n\}$ 的子列 $\{a_{n_k}\}$，使得 $a_{n_k} \in [a_k, b_k]$，$k = 1,2,\ldots$. 
>
> 由闭区间套原理，存在 $c \in [a_k, b_k]$，$k = 1,2,\ldots$. 容易看出子列 $\{a_{n_k}\}$ 以 $c$ 为极限. 

Bolzano 定理涉及到闭区间的一个重要性质，即**紧致性**. 为了描述它，我们先引入几个预备性的概念. 

设 $x_0 \in \mathbb{R}$. 包含点 $x_0$ 的一个开区间称为 $x_0$ 的一个**开邻域**. 如果 $\delta > 0$，则 $(x_0 - \delta, x_0 + \delta)$ 就是 $x_0$ 的一个开邻域. 

设 $A$ 为数集，如果对任意的点 $x_0 \in A$，均存在 $\delta > 0$，使得 $(x_0 - \delta, x_0 + \delta) \subset A$，则称 $A$ 为 $\mathbb{R}$ 中的**开集**. $\mathbb{R}$ 本身当然是开集. 我们约定空集也是开集. 

如果一个数集的补集是开集，则称该数集为**闭集**. 按照我们的约定，空集和 $\mathbb{R}$ 既是开集，也是闭集. 

设 $\Gamma$ 为一个集合，如果对于每一个元素 $\alpha \in \Gamma$，都对应一个集合 $A_\alpha$，则称 $\{A_\alpha\}$ 为以 $\Gamma$ 为指标集的**集合族**，或称 $\{A_\alpha\}$ 是一族集合. 

设 $A$ 为 $\mathbb{R}$ 的子集，$A_\alpha\ (\alpha \in \Gamma)$ 是数集族. 如果任给 $a \in A$，均存在某个 $\alpha$，使得 $a \in A_\alpha$，则称 $\{A_\alpha\}$ 是 $A$ 的一个**覆盖**；当覆盖中的每一个 $A_\alpha$ 均为开集时，称 $\{A_\alpha\}$ 是 $A$ 的一个**开覆盖**. 

如果 $\{A_\alpha\}$ 是 $A$ 的一个覆盖，$\Gamma' \subset \Gamma$，且 $\{A_\alpha\}\ (\alpha' \in \Gamma')$ 仍为 $A$ 的覆盖，则称 $\{A_\alpha\}$ 是 $\{A_\alpha\}$ 的一个**子覆盖**. 如果 $A$ 的任何开覆盖均存在有限子覆盖，则称 $A$ 是**紧致集合**. 

下面的结果表明闭区间是紧致集合. 

### · Heine-Borel

**定理3** (Heine-Borel)：闭区间 $[a, b]$ 的任何开覆盖都有有限子覆盖. 

> 设 $\{A_\alpha\}$ 为 $[a, b]$ 的一个开覆盖. 如果 $[a, b]$ 不能被有限个 $A_\alpha$ 所覆盖，则二等分 $[a, b]$ 后必有一个小区间也不能被有限个 $A_\alpha$ 所覆盖，记该区间为 $[a_1, b_1]$. 再将 $[a_1, b_1]$ 二等分，又必有一个小区间不能被有限个 $A_\alpha$ 所覆盖，记该区间为 $[a_2, b_2]$. 如此继续下去，得闭区间套
> $$
> [a_1, b_1] \supset [a_2, b_2] \supset \cdots \supset [a_n, b_n] \supset \cdots,
> $$
> 使得 $b_n - a_n = \frac{b-a}{2^n} \to 0\ (n \to \infty)$，且每个 $[a_n, b_n]$ 均不能被有限个 $A_\alpha$ 覆盖. 
>
> 根据闭区间套原理，存在 $\xi \in [a_n, b_n]$，$\forall\, n \geq 1$. 因为 $\{A_\alpha\}$ 为 $[a, b]$ 的开覆盖，故存在 $A_{\alpha_0}$，使得 $\xi \in A_{\alpha_0}$. 因为 $A_{\alpha_0}$ 为开集，故存在 $\delta > 0$，使得
> $$
> (\xi - \delta, \xi + \delta) \subset A_{\alpha_0}.
> $$
>
> 因为 $a_n, b_n \to \xi\ (n \to \infty)$，故存在 $N$，当 $n > N$ 时
> $$
> a_n, b_n \in (\xi - \delta, \xi + \delta).
> $$
>
> 这说明 $[a_n, b_n] \subset (\xi - \delta, \xi + \delta) \subset A_{\alpha_0}\ (n > N)$，这与 $[a_n, b_n]$ 不能被有限个 $A_\alpha$ 覆盖相矛盾. 

**推论4**：$\mathbb{R}$ 中的有界闭集都是紧致集合. 

> /proof/
>
> 设 $A$ 是有界闭集，不妨设 $A \subset [-M, M]$. 如果 $\{A_\alpha\}$ 为 $A$ 的一个开覆盖，则
> $$
> \{A^c \cap (-M - 1, M + 1),\ A_\alpha\}
> $$
> 是闭区间 $[-M, M]$ 的一个开覆盖. 由 Heine-Borel 定理，它存在有限子覆盖，这个有限子覆盖当然也是 $A$ 的覆盖，从这个子覆盖中去掉 $A^c \cap (-M - 1, M + 1)$ 后仍是 $A$ 的覆盖. 

### · 等价命题

Heine-Borel 定理可以用来重新证明 Bolzano 定理. 证明如下：

> 设 $\{a_n\}$ 为有界数列，不妨设 $a_n$ 均包含于 $[a, b]$. 我们先证明存在 $c \in [a, b]$，使得 $c$ 的任何开邻域中均含有 $\{a_n\}$ 中无限项. 
>
> （反证法）假设不然，则对任意 $x \in [a, b]$，存在 $\delta_x > 0$，使得 $(x - \delta_x, x + \delta_x) = I_x$ 只含 $\{a_n\}$ 中有限项. 显然，$\{I_x\}_{x \in [a,b]}$ 为闭区间 $[a, b]$ 的一个开覆盖，因此存在有限子覆盖，从而 $[a, b]$ 只含有 $\{a_n\}$ 中有限项，这和 $a_n$ 均含于 $[a, b]$ 相矛盾. 
>
> 其次，我们可以如下选取 $\{a_n\}$ 的子列，使之收敛到 $c$. 事实上，先取 $a_{n_1} \in (c - 1, c + 1)$. 再取 $n_2 > n_1$，使得 $a_{n_2} \in (c - 1/2, c + 1/2)$. 
>
> 如此继续，我们得到子列 $\{a_{n_k}\}$，使得 $a_{n_k} \in (c - 1/k, c + 1/k)$，$k = 1,2,\ldots$. 显然，$\{a_{n_k}\}$ 收敛到 $c$. 

从实数系的确界原理出发，我们得到了单调有界数列的收敛性、Cauchy 准则以及本节的这几个基本结果. 我们要说明的是，这几个基本结果其实都是相互等价的. 

等价的意思就是在承认其中一个结果的前提之下可以推出另一个结果，即在构造实数系的时候，我们只要验证它满足其中一个基本结果，则其余的结果自然成立. 下面的定理将这个等价性补充完整：

**定理5**：我们有下列命题之间的等价：

(1). **(Bolzano 定理 $\Rightarrow$ Cauchy 准则)**：如果 $\mathbb{R}$ 中有界数列均有收敛子列，则 $\mathbb{R}$ 中 Cauchy 数列必收敛；

(2). **(Cauchy 准则 $\Rightarrow$ 确界原理)**：如果 $\mathbb{R}$ 中 Cauchy 数列均收敛，则 $\mathbb{R}$ 中有上（下）界的集合必有上（下）确界. 

> /proof/
>
> **(1)** 设 $\{a_n\}$ 为 Cauchy 列，则 $\{a_n\}$ 有界，从而有收敛子列 $\{a_{n_k}\}$，记其极限为 $A$. 根据 Cauchy 列和数列极限的定义，任给 $\varepsilon > 0$，存在 $N_0, K$，使得当 $m, n > N_0$, $k > K$ 时，
> $$
> |a_m - a_n| < \frac{1}{2}\varepsilon,\quad |a_{n_k} - A| < \frac{1}{2}\varepsilon.
> $$
>
> 取 $k > \max\{N_0, K\}$，则 $n_k \geq k > \max\{N_0, K\}$. 于是当 $n > n_k$ 时，
> $$
> |a_n - A| \leq |a_n - a_{n_k}| + |a_{n_k} - A| < \frac{1}{2}\varepsilon + \frac{1}{2}\varepsilon = \varepsilon.
> $$
>
> 这说明 $\{a_n\}$ 收敛到 $A$. 
>
> ---
>
> **(2)** 不妨设集合 $A$ 有上界 $M$. 如果 $M \in A$，则 $M$ 就是 $A$ 的上确界. 下设 $M \notin A$. 取 $m \in A$，则闭区间 $[m, M]$ 含有 $A$ 中的数. 将 $[m, M]$ 二等分：
>
> 如果 $\left[\dfrac{m + M}{2}, M\right]$ 中含有 $A$ 中的数，则记
> $$
> a_1 = \frac{m + M}{2},\quad b_1 = M;
> $$
> 否则就记 $a_1 = m$, $b_1 = \dfrac{m + M}{2}$. 
>
> 总之，$[a_1, b_1]$ 中含有 $A$ 中的数，$b_1$ 为 $A$ 的上界，且 $b_1 \notin A$（为什么？）. 
>
> 对 $[a_1, b_1]$ 作同样的事情，并如此继续，我们就得到了两个数列 $\{a_n\}$ 与 $\{b_n\}$，满足条件：
>
> > (1).
> > $$
> > [a_n, b_n] \cap A \neq \varnothing,\quad\forall\, n \geq 1
> > $$
> > (2). $b_n$ 均为 $A$ 的上界，且 $b_n \notin A$，$\forall\, n \geq 1$；
> >
> > (3).
> > $$
> > b_n - a_n = \dfrac{M - m}{2^n}
> > $$
> > (4).
> > $$
> > |a_{n+1} - a_n| \leq \dfrac{M - m}{2^{n+1}},\quad |b_n - b_{n+1}| \leq \dfrac{M - m}{2^{n+1}}
> > $$
>
>  $\{a_n\}$ 和 $\{b_n\}$ 均为 Cauchy 数列，它们收敛到同一数 $c$. 不难看出 $c$ 为 $A$ 的上确界. 

结束.
