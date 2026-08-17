---
title: Lesson 28 连续映射 II
permalink: /integral/integral-28/
createTime: 2026/08/17 14:17:36
---

## Part 2 度量空间性质

### · 度量空间的完备性

设 $(X,\rho)$ 为度量空间. 设 $\{x_n\}_{n=1}^\infty$ 为 $X$ 中点列. 如果任给 $\varepsilon > 0$，均存在 $N = N(\varepsilon)$，当 $m,n \geqslant N$ 时  
$$
\rho(x_m,x_n) < \varepsilon,
$$
则称点列 $\{x_n\}$ 为 Cauchy 列（或基本列）. 

**定义1** (完备性)：如果 $X$ 中 Cauchy 列均为收敛点列，则称 $(X,\rho)$ 为完备度量空间. 

> **注意**. 
>
> (1) 收敛点列必为 Cauchy 列；
>
> (2) Cauchy 列如果有收敛子列，则其本身也一定收敛. 

实数 $\mathbb{R}$ 在通常的度量下是完备的度量空间：

> $\mathbb{R}$ 的完备性是实数系的基本性质之一. 我们注意到，有理数 $\mathbb{Q}$ 作为子度量空间不是完备的，因为数列  
> $$
> a_n = 1 + \frac{1}{1!} + \frac{1}{2!} + \cdots + \frac{1}{n!}
> $$
> 组成了 $\mathbb{Q}$ 中的基本列，但它在 $\mathbb{Q}$ 中不收敛. 从 $\mathbb{Q}$ 到 $\mathbb{R}$ 的扩充可以看成是将 $\mathbb{Q}$ 进行某种“完备化”，分析学就建立在这种完备化的基础之上. 下面的命题表明，我们可以在 $\mathbb{R}^n$ 中做微积分. 

**命题1**：$(\mathbb{R}^n,\|\cdot\|)$ 为完备度量空间. 

> 设 $\{x_m\}_{m=1}^\infty$ 为 $\mathbb{R}^n$ 中点列，把它写成分量形式  
> $$
> x_m = (x_m^1,x_m^2,\cdots,x_m^n),
> $$
> 则对任意 $i = 1,2,\cdots,n$，有  
> $$
> |x_k^i - x_l^i| \leqslant \left[\sum_{j=1}^n (x_k^j - x_l^j)^2\right]^{1/2} = \|x_k - x_l\|,
> $$
> 因此，如果 $\{x_m\}$ 为 Cauchy 列，则 $\{x_m^i\}_{m=1}^\infty$ 对每个 $i = 1,2,\cdots,n$ 均为 Cauchy 列，从而收敛. 设 $\displaystyle\lim_{m \to \infty} x_m^i = x_0^i$，记 $x_0 = (x_0^1,x_0^2,\cdots,x_0^n)$，则由  
> $$
> \|x_m - x_0\| \leqslant \sum_{i=1}^n \|x_m^i - x_0^i\|
> $$
> 得  
> $$
> \lim_{m \to \infty} x_m = x_0.
> $$
> 这就证明了命题. 

设 $A$ 为 $X$ 中子集，称 $\sup\{\rho(x,y)\mid x,y \in A\}$ 为 $A$ 的直径，记为 $\operatorname{diam}A$ 或 $d(A)$. 直径有限的集合称为有界集合. 

**开球和闭球的直径**：

> $\mathbb{R}$ 中区间 $[a,b]$ 的直径为 $b - a$，即直径就是区间长度；一般地，$\mathbb{R}^n$ 中半径为 $r$ 的开球（闭球）直径为 $2r$. 对于一般的度量空间来说，根据三角不等式易见，半径为 $r$ 的开球（闭球），其直径不超过 $2r$. 
>
> 和 $\mathbb{R}^n$ 不同的是，这时等号可能不成立. 例如，在离散度量空间中，半径为 $1/2$ 的开球，其直径为 $0$. 
>
> 下面的定理是 $\mathbb{R}$ 中闭区间套原理的一般形式. 

**定理2**：设 $(X,\rho)$ 为度量空间，则下列几条等价：

(1) $(X,\rho)$ 为完备度量空间；

(2) (Cantor) 闭集套原理成立：若 $F_1 \supset F_2 \supset \cdots \supset F_n \supset \cdots$ 为一列非空闭集，且 $\displaystyle\lim_{n \to +\infty} \operatorname{diam}F_n = 0$，则存在唯一的点 $a \in \displaystyle\bigcap_{n=1}^\infty F_n$；

(3) 闭球套原理成立：(2) 中 $F_n$ 换成直径或半径趋于 $0$ 的闭球时结论不变. 

> (1) $\Longrightarrow$ (2)：取 $a_n \in F_n$，由 $F_n \supset F_{n+1} \supset \cdots$ 知 $\{a_n,a_{n+1},\cdots\} \displaystyle\subset F_n$. 因此，$m > n$ 时  
> $$
> \rho(a_m,a_n) \leqslant \operatorname{diam}F_n \to 0\quad(n \to \infty),
> $$
> 从而 $\{a_n\}$ 为 Cauchy 列，设其极限为 $a$，由 $F_n$ 为闭集得  
> $$
> a = \lim_{m \to \infty} a_m \in F_n,\quad \forall\,n \geqslant 1,
> $$
> 即 $a \in \displaystyle\bigcap_{n=1}^\infty F_n$. 如果另有 $b \in \displaystyle\bigcap_{n=1}^\infty F_n$，则  
> $$
> \rho(a,b) \leqslant \operatorname{diam}F_n \to 0\quad(n \to \infty),
> $$
> 从而 $a = b$. 
>
> (2) $\Longrightarrow$ (3)：这是显然的. 
>
> (3) $\Longrightarrow$ (1)：(*) 设 $\{a_n\}$ 为 $X$ 中 Cauchy 列，为了证明这是一个收敛点列，只须证明它包含一个收敛子列即可. 由 Cauchy 列的定义，存在 $n_1 < n_2 < \cdots$，使得 $m,n \geqslant n_k$ 时  
> $$
> \rho(a_m,a_n) < \frac{1}{2^{k+1}}.
> $$
> 考虑 $X$ 中的闭球 $F_k = \bar{B}_{2^{-k}}(a_{n_k})$，$k = 1,2,\cdots$. 当 $x \in F_{k+1}$ 时，  
> $$
> \begin{aligned}
> \rho(x,a_{n_k}) &\leqslant \rho(x,a_{n_{k+1}}) + \rho(a_{n_{k+1}},a_{n_k}) \\\\
> &\leqslant \frac{1}{2^{k+1}} + \frac{1}{2^{k+1}} = \frac{1}{2^k},
> \end{aligned}
> $$
> 这说明 $x \in F_k$，即 $F_1 \supset F_2 \supset \cdots \supset F_k \supset F_{k+1} \supset \cdots$. 另一方面，  
> $$
> \operatorname{diam}F_k \leqslant 2 \cdot 2^{-k} \to 0\quad(k \to +\infty),
> $$
> 由闭球套原理，存在 $a \in \displaystyle\bigcap_{k=1}^\infty F_k$. 此时  
> $$
> 0 \leqslant \rho(a,a_{n_k}) \leqslant 2^{-k} \to 0\quad(k \to +\infty),
> $$
> 即子列 $\{a_{n_k}\}$ 收敛于 $a$. 

由于 $\mathbb{R}^n$ 是完备度量空间，因此闭集套原理在 $\mathbb{R}^n$ 中成立. 完备度量空间还有如下有用的压缩映像原理. 

**定义2** (压缩映射)

> 设 $A$ 为 $X$ 的子集，映射 $f\colon A \to A$ 如果满足以下条件：(*) 存在常数 $0 \leqslant q < 1$，使得 $\rho(f(a_1),f(a_2)) \leqslant q \cdot \rho(a_1,a_2)$，$\forall\,a_1,a_2 \in A$. 则称之为压缩映射. 

**定理3** (压缩映像原理)：设 $A$ 为完备度量空间 $X$ 中的闭集，$f\colon A \to A$ 为压缩映射，则存在唯一的点 $a \in A$，使得 $f(a) = a$（不动点）. 

> 任取 $a_0 \in A$，递归地定义 $A$ 中点列 $\{a_n\}$ 如下：  
> $$
> a_n = f(a_{n-1}),\quad n = 1,2,\cdots.
> $$
> 则  
> $$
> \rho(a_{n+1},a_n) = \rho(f(a_n),f(a_{n-1})) \leqslant q \cdot \rho(a_n,a_{n-1}),\quad \forall\,n \geqslant 1.
> $$
> 从而有  
> $$
> \rho(a_{n+1},a_n) \leqslant q \cdot \rho(a_n,a_{n-1}) \leqslant q^2 \cdot \rho(a_{n-1},a_{n-2}) \leqslant \cdots \leqslant q^n \cdot \rho(a_1,a_0),
> $$
>
> $$
> \begin{aligned}
> \rho(a_m,a_n) &\leqslant \rho(a_m,a_{m-1}) + \rho(a_{m-1},a_{m-2}) + \cdots + \rho(a_{n+1},a_n) \\\\
> &\leqslant (q^{m-1} + q^{m-2} + \cdots + q^n) \cdot \rho(a_1,a_0) \\\\
> &\leqslant \frac{q^n}{1 - q} \cdot \rho(a_1,a_0) \to 0,\quad(m > n,\,n \to \infty).
> \end{aligned}
> $$
>
> 这说明 $\{a_n\}$ 为 Cauchy 列. 设其极限为 $a$，则 $a \in A$. 由三角不等式得  
> $$
> \begin{aligned}
> \rho(f(a),a) &\leqslant \rho(f(a),f(a_n)) + \rho(f(a_n),f(a_{n-1})) + \rho(a_n,a) \\\\
> &\leqslant q \cdot \rho(a,a_n) + q^{n-1} \cdot \rho(a_1,a_0) + \rho(a_n,a) \to 0\quad(n \to \infty),
> \end{aligned}
> $$
> 这说明 $f(a) = a$. 
>
> **唯一性**：若 $f(b) = b$，则  
> $$
> \rho(a,b) = \rho(f(a),f(b)) \leqslant q \cdot \rho(a,b),
> $$
> 这说明 $\rho(a,b) = 0$，从而 $a = b$. 

压缩映像原理的一个应用：

> 考虑连续函数的空间 $C^0[0,1]$，这个空间上有最大模度量：  
> $$
> \rho(f,g) = \max_{[0,1]} |f(x) - g(x)|,
> $$
> 则 $(C^0[0,1],\rho)$ 是完备度量空间. 令  
> $$
> A = \{f \in C^0[0,1] \mid f(0) = 0,\,f(1) = 1\},
> $$
> 则 $A$ 为 $(C^0[0,1],\rho)$ 中的闭集. 考虑映射  
> $$
> \phi\colon A \to A, \\
> f \mapsto \phi(f),
> $$
> 其中 $\phi(f)$ 是如下定义的连续函数：  
> $$
> \phi(f)(x) = 
> \begin{cases}
> \dfrac{3}{4}f(3x), & x \in \left[0,\dfrac{1}{3}\right], \\\\
> \dfrac{1}{4} + \dfrac{1}{2}f(2 - 3x), & x \in \left[\dfrac{1}{3},\dfrac{2}{3}\right], \\\\
> \dfrac{1}{4} + \dfrac{3}{4}f(3x - 2), & x \in \left[\dfrac{2}{3},1\right].
> \end{cases}
> $$
> 不难看出 $\phi$ 为压缩映射，因此存在唯一的不动点 $h$，即 $h$ 为连续函数，满足条件 $h(0) = 0$，$h(1) = 1$，且 $\phi(h) = h$. $h$ 具有一种自相似性，可以证明，这是一个无处可微的函数. 

下面的 Baire 纲定理也是 $\mathbb{R}$ 上的 Baire 定理的一般形式. 

**定理4** (Baire)：设 $A_n$ ($n \geqslant 1$) 为完备度量空间 $X$ 中的一列闭集. 如果每个 $A_n$ 都没有内点，则它们的并集 $\bigcup_{n=1}^\infty A_n$ 也没有内点. 

### · 度量空间与紧致性

设 $S$ 为度量空间 $(X,\rho)$ 的子集，如果 $S \displaystyle\subset \bigcup_\alpha G_\alpha$，则称 $\{G_\alpha\}$ 为 $S$ 的一个覆盖. 当 $G_\alpha$ 均为开集时，称 $\{G_\alpha\}$ 为开覆盖；

只有有限个 $G_\alpha$ 的覆盖称为有限覆盖，由 $\{G_\alpha\}$ 中的一部分所组成的覆盖称为子覆盖. 

/example/

> 设 $x_0 \in X$. 任取 $y \ne x_0$，因为 $\rho(y,x_0) > 0$，故存在 $n \geqslant 1$，使得 $\rho(y,x_0) > \dfrac{1}{n}$. 即 $y \in \{x \in X \mid \rho(x,x_0) > \dfrac{1}{n}\}$. 这说明  
> $$
> X - \{x_0\} = \bigcup_{n=1}^\infty \left\{x \in X \mid \rho(x,x_0) > \frac{1}{n}\right\},
> $$
> 这就得到了 $X - \{x_0\}$ 的一个开覆盖. 

**定义1** (紧致性)

> 如果集合 $S$ 的任何开覆盖都有有限子覆盖，则称 $S$ 为紧致集合. 
>
> 根据实数系的基本性质，闭区间 $[a,b]$ 是 $\mathbb{R}$ 中的紧致集合. 紧致性是一个较难理解的概念，我们将它和有界性以及闭集的概念联系起来看. 

**命题1**：紧致集合必为有界闭集. 

> 设 $A$ 为紧致集合. 先证 $A$ 有界. 任取 $a \in A$，因为  
> $$
> A \subset X = \bigcup_{n=1}^\infty B_n(a),
> $$
> 由 $A$ 的紧致性知，存在 $n_1,\cdots,n_k$，使得  
> $$
> A \subset \bigcup_{i=1}^k B_{n_i}(a) = B_N(a),
> $$
> 其中 $N = \max\{n_1,\cdots,n_k\}$. 这说明 $A$ 有界. 
>
> 再证 $A$ 是闭集. 任取 $b \in A^c$，因为  
> $$
> A \subset X - \{b\} = \bigcup_{n=1}^\infty \left\{x \in X \mid \rho(x,b) > \frac{1}{n}\right\},
> $$
> 利用 $A$ 的紧致性，同理可得 $N$，使得  
> $$
> A \subset \left\{x \in X \mid \rho(x,b) > \frac{1}{N}\right\},
> $$
> 这说明 $B_{1/N}(b) \displaystyle\subset A^c$，因此 $A^c$ 为开集，即 $A$ 为闭集. 

**命题2**：

设 $A$ 为 $\mathbb{R}^n$ 中子集，则以下几条等价：

(1) $A$ 为紧致集合；

(2) $A$ 为序列紧致集合，即 $A$ 中任何无限点列均有收敛子列，且该子列极限仍在 $A$ 中；

(3) $A$ 为有界闭集. 

> (1) $\Longrightarrow$ (2). （反证法）. 设 $\{b_n\}$ 为 $A$ 中点列，且它无收敛于 $A$ 中点的子列. 根据命题 "集合 $A$ 为闭集当且仅当 $A$ 中任何收敛点列的极限仍在 $A$ 中" 的证明，对任意 $a \in A$，存在开球 $B_{r(a)}(a)$，使得 $B_{r(a)}(a)$ 最多只含有 $\{b_n\}$ 中有限项. 
>
> 显然，$A \displaystyle\subset \bigcup_{a \in A} B_{r(a)}(a)$，由紧致性，存在 $a_1,\cdots,a_k$ 使得 $A \displaystyle\subset \bigcup_{i=1}^k B_{r(a_i)}(a_i)$，特别地，$\{b_n\}$ 中只有有限项能出现在 $A$ 中，这就导出了矛盾！
>
> (2) $\Longrightarrow$ (3). 先证 $A$ 有界，（反证法）. 如果存在 $a_n \in A$，使得 $\rho(a_0,a_n) \to \infty$ ($n \to \infty$)，则显然 $\{a_n\}$ 中无收敛子列，这与假设相矛盾. 再证 $A$ 为闭集，仍用反证法. 
>
> 根据命题 "集合 $A$ 为闭集当且仅当 $A$ 中任何收敛点列的极限仍在 $A$ 中"，此时存在 $a_n \in A$，$\displaystyle\lim_{n \to \infty} a_n = a \notin A$. $\{a_n\}$ 的一切子列均收敛于 $a \notin A$，这与 $A$ 序列紧相矛盾！
>
> (3) $\Longrightarrow$ (1)（反证法）. 设 $A$ 为有界闭集，且存在 $A$ 的开覆盖 $\{U_\alpha\}$，使得任何有限个 $U_\alpha$ 均无法覆盖 $A$. 取闭正方体 $I_1 \supset A$，将 $I_1$ 做 $2^n$ 等分，必有一等分 $I_2 \displaystyle\subset I_1$，使得 $I_2 \cap A$ 不能被有限个 $U_\alpha$ 覆盖. 
>
> 依此类推，得一串闭立方体 $I_1 \supset I_2 \supset \cdots$，$\operatorname{diam}I_m \to 0$ ($m \to \infty$). 由闭集套原理，存在唯一的点 $a \in I_m \cap A$，$\forall\,m \geqslant 1$. 又因为 $\{U_\alpha\}$ 为 $A$ 的开覆盖，故存在 $\alpha_0$ 使得 $a \in U_{\alpha_0}$. 
>
> 于是 $m$ 充分大时必有 $I_m \displaystyle\subset U_{\alpha_0}$. 这与 $I_m \cap A$ 不能被有限个 $U_\alpha$ 覆盖相矛盾！
>
> **注意**. 只有在证明的第三步才用到 $\mathbb{R}^n$ 的性质，特别地，度量空间中的紧致集合一定是序列紧致的；反之，可以证明，在度量空间中，序列紧致的集合必定是紧致的. 

**推论3**：$\mathbb{R}^n$ 中有界点列必有收敛子列. 

> 这是因为有界点列必然包含在某个闭球中，而根据上述定理，闭球是紧致集合，因而也是序列紧致的，特别地，该点列存在收敛子列. 

下面的 Lebesgue 数引理是 $\mathbb{R}$ 上 Lebesgue 数引理的推广.

**引理4** (Lebesgue)：设 $A$ 为度量空间 $X$ 中的紧致集合，$\{U_\alpha\}$ 为 $A$ 的开覆盖. 则存在 $\lambda > 0$，使得只要 $A$ 的子集 $B$ 满足 $\operatorname{diam}(B) < \lambda$，则 $B$ 必定包含在某个 $U_\alpha$ 中. 

> (反证法) 设满足要求的 $\lambda$ 不存在，则对任意 $n > 1$，存在 $A$ 的子集 $B_n$，使得 $B_n$ 的直径小于 $1/n$，且 $B_n$ 不包含于任何 $U_\alpha$ 内. 取 $b_n \in B_n$，则得到 $A$ 中的点列 $\{b_n\}$. 
>
> 不论 $\{b_n\}$ 是不是有限子集，由 $A$ 的紧致性以及前一命题可知 $\{b_n\}$ 存在收敛子列，不妨设 $\{b_n\}$ 本身收敛于 $b_0 \in A$. 因为 $\{U_\alpha\}$ 是 $A$ 的开覆盖，故存在 $\alpha_0$，使得 $b_0 \in U_{\alpha_0}$. 因为 $U_{\alpha_0}$ 为开集，故存在 $\delta > 0$，使得  
> $$
> B_\delta(b_0) \subset U_{\alpha_0},
> $$
> 因为 $\displaystyle\lim_{n \to \infty} b_n = b_0$，故可取 $n > 2/\delta$，使得 $\rho(b_n,b_0) < \delta/2$，此时  
> $$
> \rho(b,b_0) \leqslant \rho(b,b_n) + \rho(b_n,b_0) \leqslant \operatorname{diam}(B_n) + \frac{\delta}{2} < \frac{1}{n} + \frac{\delta}{2} < \delta,\quad \forall\,b \in B_n. 
> $$
> 这说明 $B_n \displaystyle\subset B_\delta(b_0) \displaystyle\subset U_{\alpha_0}$，这与 $B_n$ 的选取相矛盾.
>
> **注意**. 引理中的 $\lambda$ 称为关于覆盖 $\{U_\alpha\}$ 的 Lebesgue 数. 从证明可以看出 Lebesgue 数引理对序列紧致的集合也成立. 

结束.
