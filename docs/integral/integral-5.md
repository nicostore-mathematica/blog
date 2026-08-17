---
title: Lesson 5 实数 I
permalink: /integral/integral-5/
createTime: 2026/08/17 14:16:29
---

## Part 1 实数系构造

在本节中给出实数集 $\mathbb{R}$ 的一种构造方法. 构造出来的对象除了是一个集合外还具有很多基本性质，所以通常又将它称为实数系. 我们从有理数 $\mathbb{Q}$ 出发来构造实数. 

需要注意的是，自然数、整数以及有理数的建立也是需要严格的数学基础的，不过这对于学习微积分不是至关重要的，因此我们还是从有理数开始，毕竟有理数比较直观. 

下面构造实数的方法是 Dedekind 在 1872 年发明的，这种方法以 **Dedekind 分割** 而著称. 

**定义1**：设 $\alpha$ 为 $\mathbb{Q}$ 的子集，如果满足以下三个条件：

(1). $\alpha \neq \varnothing$，$\alpha \neq \mathbb{Q}$；

(2). 当 $p \in \alpha$，$q \in \alpha^c$ 时，$p < q$；

(3). 任给 $p \in \alpha$，存在 $q \in \alpha$，使得 $p < q$；

则称 $\alpha$ 为 $\mathbb{Q}$ 的一个**分割**，分割的全体组成的集合记为 $\mathbb{R}$. 

> 定义中的条件 (1) 是说 $\alpha$ 为 $\mathbb{Q}$ 的非空真子集，而 (3) 是说 $\alpha$ 中无最大数. 这一条不是本质的：如果 $\alpha$ 满足条件 (1) 和 (2)，且有最大数，将此最大数去掉后 $\alpha$ 就是满足所有三个条件的分割了. 

**命题1**：设 $\alpha$ 为 $\mathbb{Q}$ 的一个分割，则：

1. 如果 $p < q$，$q \in \alpha$，则 $p \in \alpha$；
2. 设 $w > 0$，则存在整数 $n$，使得 $nw \in \alpha$，$(n+1)w \in \alpha^c$. 

> /proof/
>
> **(1)**（反证法）  如果 $p \in \alpha^c$，则由分割定义的第二条即知 $q < p$，这和假设矛盾. 
>
> **(2)**  取 $r \in \alpha$，则当 $m < r/w$，即 $mw < r$ 时，由 (1) 即知 $mw \in \alpha$. 再取 $s \in \alpha^c$，当 $m > s/w$ 时 $mw \in \alpha^c$. 这说明，下面的整数子集：
> $$
> \{ m \in \mathbb{Z} \mid mw \in \alpha \}
> $$
> 是非空且有上界的集合，因此有最大数 $n$，$n$ 就是满足要求的整数. 

设 $r \in \mathbb{Q}$ 为一个有理数，记
$$
r^* = \{ s \in \mathbb{Q} \mid s < r \},
$$
则容易验证 $r^*$ 是一个分割，称为由有理数 $r$ 决定的分割. 

考虑 $\mathbb{Q}$ 的子集
$$
\alpha = \{ r \in \mathbb{Q} \mid r^2 < 2 \} \cup \{ r \in \mathbb{Q} \mid r \leq 0 \},
$$
则 $\alpha$ 是一个分割. 

事实上，容易看出 $\alpha$ 为非空子集. 分割定义的第二条也是容易验证的. 我们来看分割定义的第三条，即 $\alpha$ 中没有最大数：

- 如果 $r \leq 0$，则 $r < 1$，而 $1 \in \alpha$；

- 如果 $r > 0$，$r^2 < 2$，则取
  $$
  s = r - \frac{r^2 - 2}{r + 2} = \frac{2r + 2}{r + 2},
  $$
  且
  $$
  s^2 - 2 = \frac{2(r^2 - 2)}{(r + 2)^2} < 0,
  $$
  即 $s \in \alpha$，且 $r < s$. 

如果递归地定义有理数列 $\{x_n\}$ 如下：
$$
x_0 = 1, \quad x_{n+1} = \frac{2x_n + 2}{x_n + 2}, \quad n \geq 0,
$$
则根据刚才的讨论，$\{x_n\}$ 为严格单调递增数列（即 $x_n < x_{n+1}$），且
$$
0 < 2 - x_{n+1}^2 = \frac{2(2 - x_n^2)}{(x_n + 2)^2} < \frac{1}{4}(2 - x_n^2),
$$
由此得到下面的估计：
$$
0 < 2 - x_n^2 < \frac{1}{4^n}, \quad n \geq 1.
$$
下面我们把有理数 $\mathbb{Q}$ 所满足的基本性质都推广到 $\mathbb{R}$ 上. 首先看次序如何定义. 

**次序关系**：

> 设 $\alpha, \beta \in \mathbb{R}$，如果 $\alpha$ 为 $\beta$ 的真子集，则称 $\alpha$ 小于 $\beta$，记为 $\alpha < \beta$. 我们也用记号 $\alpha \leq \beta$ 表示 $\alpha$ 为 $\beta$ 的子集. 此时 $\alpha = \beta$ 或 $\alpha < \beta$. 
>
> 次序关系的性质有：
>
> - 如果 $\alpha < \beta$，$\beta < \gamma$，则 $\alpha < \gamma$. 这是因为真子集的真子集还是真子集. 
>
> - 任给 $\alpha, \beta \in \mathbb{R}$，下面的三种关系有且仅有一个成立：
>   $$
>   \alpha < \beta,\quad \alpha = \beta,\quad \beta < \alpha.
>   $$
>
> 事实上，设前两个关系不成立，则 $\alpha$ 不是 $\beta$ 的子集，因此存在 $r \in \alpha$，但 $r \notin \beta$. 如果 $s \in \beta$，则 $s < r$，从而 $s \in \alpha$，这就说明 $\beta$ 为 $\alpha$ 的子集. 由于 $\alpha \neq \beta$，故 $\beta$ 为 $\alpha$ 的真子集. 
>
> 如果 $r, s \in \mathbb{Q}$，则当 $r = s$ 时 $r^* = s^*$，当 $r < s$ 时 $r^* < s^*$. 因此我们定义的次序关系是自然的. 有了次序就可以定义上界. 

**上界和上确界**：

> 设 $A \subset \mathbb{R}$ 为 $\mathbb{R}$ 的非空子集，$\beta \in \mathbb{R}$. 如果任给 $\alpha \in A$，均有 $\alpha \leq \beta$，则称 $\beta$ 为 $A$ 的一个上界. 设 $\gamma$ 为 $A$ 的一个上界，如果任给 $A$ 的另一个上界 $\gamma'$，均有 $\gamma \leq \gamma'$，则称 $\gamma$ 为 $A$ 的最小上界或上确界，记为 $\sup A$. 易见，上确界如果存在则必定是惟一的. 

**定理2**（确界原理）：$\mathbb{R}$ 的非空子集如果有上界，则必有上确界. 

> 设 $A$ 为 $\mathbb{R}$ 的非空子集，$\beta$ 为 $A$ 的一个上界，记
> $$
> \gamma = \bigcup_{\alpha \in A} \alpha \subset \mathbb{Q}.
> $$
>
> 下面先说明 $\gamma$ 为一个分割. $\gamma$ 显然是非空子集，由于 $\beta$ 为 $A$ 的一个上界，故 $\gamma \subset \beta$，这说明 $\gamma \neq \mathbb{Q}$. 这验证了分割定义的第一条. 
>
> 设 $r \in \gamma$，$s \notin \gamma$. 于是存在 $\alpha \in A$，使得 $r \in \alpha$，此时 $s \notin \alpha$，因此 $r < s$. 这验证了分割定义的第二条. 
>
> 第三条：设 $r \in \gamma$，于是存在 $\alpha \in A$，使得 $r \in \alpha$，此时存在 $s \in \alpha$，使得 $r < s$，由 $\gamma$ 的定义即知 $s \in \gamma$. 
>
> 其次我们说明 $\gamma$ 为 $A$ 的最小上界. 根据 $\gamma$ 的构造，显然 $\gamma$ 为 $A$ 的一个上界. 如果 $\gamma'$ 为另一个上界，则 $\alpha \subset \gamma'$，$\forall\, \alpha \in A$. 这说明 $\gamma \subset \gamma'$. 

**实数表示为某个非空子集的上确界**：

> 如果 $r \in \mathbb{Q}$ 为有理数，令
> $$
> A = \{ s^* \in \mathbb{R} \mid s < r,\ s \in \mathbb{Q} \} = \{ s^* \mid s \in r^* \},
> $$
> 则 $r^* = \sup A$. 事实上，由定义有
> $$
> \sup A = \bigcup_{s < r} s^* = \bigcup_{s < r} \{ t \in \mathbb{Q} \mid t < s \} = \{ t \in \mathbb{Q} \mid t < r \} = r^*.
> $$
>
> 一般地，如果 $\alpha \in \mathbb{R}$ 为一个分割，则
> $$
> \alpha = \sup \{ r^* \mid r \in \alpha \}.
> $$

下面我们把 $\mathbb{Q}$ 中的四则运算推广到 $\mathbb{R}$ 中. 

**加法运算**：

> 设 $\alpha, \beta \in \mathbb{R}$，定义
> $$
> \alpha + \beta = \{ r + s \mid r \in \alpha,\ s \in \beta \},
> $$
> 显然，$\alpha + \beta$ 是 $\mathbb{Q}$ 的非空子集. 取 $r' \in \alpha^c$, $s' \in \beta^c$，则任给 $r \in \alpha$, $s \in \beta$，均有 $r < r'$, $s < s'$，从而有 $r + s < r' + s'$，这说明 $r' + s' \notin \alpha + \beta$，即 $\alpha + \beta \neq \mathbb{Q}$. 
>
> 设 $p = r + s \in \alpha + \beta$，其中 $r \in \alpha$, $s \in \beta$. 如果 $q \in (\alpha + \beta)^c$，我们要说明 $p < q$. 事实上，如果 $q \leq p$，则 $q - s \leq r$，从而 $q - s \in \alpha$，$q = (q - s) + s \in \alpha + \beta$，这就得到矛盾，因此只能有 $p < q$. 
>
> $\alpha + \beta$ 中无最大数：设 $p = r + s \in \alpha + \beta$，取 $t \in \alpha$，使得 $r < t$，则 $q = t + s \in \alpha + \beta$，且 $p < q$. 总之，$\alpha + \beta$ 是一个分割，称为 $\alpha$ 与 $\beta$ 的和. 
>
> > 求和运算具有以下性质：
> >
> > - 如果 $r, s \in \mathbb{Q}$，则 $r^* + s^* = (r + s)^*$. 这由定义不难得到. 
> >
> > - **(交换律)** $\alpha + \beta = \beta + \alpha$. 这可从 $\mathbb{Q}$ 中加法具有交换律以及 $\alpha + \beta$ 和 $\beta + \alpha$ 的定义推出. 
> >
> > - **(结合律)** $(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$. 这可从 $\mathbb{Q}$ 中加法具有结合律推出. 
> >
> > - **(零元)** $\alpha + 0^* = \alpha$. 如果 $r \in \alpha$, $s \in 0^*$，则 $s < 0$, $r + s < r$，因此 $r + s \in \alpha$，这说明 $\alpha + 0^* \subset \alpha$. 
> >
> >   反之，设 $r \in \alpha$，取 $r' \in \alpha$，使得 $r < r'$，此时 $r - r' \in 0^*$，从而 $r = r' + (r - r') \in \alpha + 0^*$，这又说明 $\alpha \subset \alpha + 0^*$，因此 $\alpha + 0^* = \alpha$. $0^*$ 称为零元. 
> >
> > - **(负元)** 设 $\alpha \in \mathbb{R}$，令
> >   $$
> >   \beta = \{ r \in \mathbb{Q} \mid \text{存在 } s > 0,\ \text{使得 } -r - s \in \alpha^c \}.
> >   $$
> >
> >   我们先来说明 $\beta$ 为一个分割. 取 $q \in \alpha^c$, $r = -q - 1$，则 $-r - 1 = q \in \alpha^c$，因此 $r \in \beta$，这说明 $\beta$ 是非空子集. 
> >
> >   如果 $p \in \alpha$, $r \in \beta$，则存在 $s > 0$，使得 $-r - s \in \alpha^c$，因此 $p < -r - s$, $r < -p - s < -p$，特别地，$-p \in \beta^c$，即 $\beta \neq \mathbb{Q}$. 分割定义的其它两条可类似验证. 
> >
> >   我们来说明 $\alpha + \beta = 0^*$. 如果 $p \in \alpha$, $r \in \beta$，则同上所述，存在 $s > 0$，使得 $-r - s \in \alpha^c$，因此 $p < -r - s$, $p + r < -s < 0$，于是 $p + r \in 0^*$，$\alpha + \beta \subset 0^*$. 
> >
> >   反之，取 $t \in 0^*$，则 $-t/2 > 0$，取整数 $n$，使得 $-nt/2 \in \alpha$, $-(n+1)t/2 \in \alpha^c$. 令 $r = (n+2)t/2$，则 $-r - (-t/2) \in \alpha^c$，因此 $r \in \beta$，且
> >   $$
> >   t - nt/2 + r \in \alpha + \beta,
> >   $$
> >   这说明 $0^* \subset \alpha + \beta$. 
> >
> >   我们称 $\beta$ 为 $\alpha$ 的负元，记为 $\beta = -\alpha$. 

**乘法运算**：

> 令 $\mathbb{R}^+ = \{ \alpha \in \mathbb{R} \mid 0^* < \alpha \}$，如果 $\alpha, \beta \in \mathbb{R}^+$，令
> $$
> \alpha\beta = \{ p \in \mathbb{Q} \mid \text{exist } 0 < r \in \alpha,\ 0 < s \in \beta,\ \text{s.t. } p < rs \},
> $$
> 可以验证这是一个分割，且 $\alpha\beta \in \mathbb{R}^+$. 
>
> > 这样我们对所有的情形都定义了乘法运算. 乘法运算具有以下性质：
> >
> > - 如果 $r, s \in \mathbb{Q}$，则 $(rs)^* = r^*s^*$. 以 $r, s > 0$ 为例：根据定义可以看出，
> >   $$
> >   \begin{aligned}
> >   r^*s^* &= \{ p \in \mathbb{Q} \mid \text{exist } r', s' \in \mathbb{Q},\ 0 < r' < r,\ 0 < s' < s,\ \text{s.t. } p < r's' \} \\\\
> >   &= \{ p \in \mathbb{Q} \mid p < rs \} = (rs)^*.
> >   \end{aligned}
> >   $$
> >
> > - **(交换律)** $\alpha\beta = \beta\alpha$. 这可从有理数乘法的交换律得到，下面的结合律也一样. 
> >
> > - **(结合律)** $(\alpha\beta)\gamma = \alpha(\beta\gamma)$. 
> >
> > - **(单位元)** $\alpha 1^* = \alpha$. 以 $0^* < \alpha$ 为例：根据定义可以看出，
> >   $$
> >   \begin{aligned}
> >   \alpha 1^* &= \{ p \in \mathbb{Q} \mid p < rs,\ \text{exist } 0 < r \in \alpha,\ 0 < s < 1 \} \\\\
> >   &= \{ p \in \mathbb{Q} \mid \text{exist } 0 < r \in \alpha,\ \text{s.t. } p < r \} = \alpha.
> >   \end{aligned}
> >   $$
> >
> > - **(逆元)** 如果 $\alpha \neq 0^*$，则存在 $\beta \in \mathbb{R}$，使得 $\alpha\beta = 1^*$. 事实上，不妨设 $0^* < \alpha$，定义 $\beta$ 为
> >   $$
> >   \beta = \{ s \in \mathbb{Q} \mid \text{exist } r \in \alpha^c,\ \text{s.t. } s < r^{-1} \}.
> >   $$
> >
> >   不难验证这是一个分割，且 $\alpha\beta = 1^*$. 我们称 $\beta$ 为 $\alpha$ 的逆元，记为 $\beta = \alpha^{-1}$. 如果 $r$ 为非零有理数，则 $(r^*)^{-1} = (r^{-1})^*$. 
> >
> > - **(分配律)** $\alpha(\beta + \gamma) = \alpha\beta + \alpha\gamma$. 

用高等代数的语言来说，我们迄今为止所做的工作表明，配备了加法运算和乘法运算的集合 $\mathbb{R}$ 是一个**域**，称为**实数域**. 当然，有理数集合 $\mathbb{Q}$ 也是一个域，并且通过映射
$$
f: \mathbb{Q} \to \mathbb{R},\quad r \mapsto r^*
$$
我们知道 $\mathbb{Q}$ 可以看成 $\mathbb{R}$ 的子域，或实数域 $\mathbb{R}$ 是有理数域 $\mathbb{Q}$ 的一个扩张. 扩张以后的域除了具有有理数域的基本性质以外，还具备了重要的**确界原理**，它使得实数填满了有理数在数轴上所留下的空隙，因此实数集合 $\mathbb{R}$ 也称为**实数连续统**或**实数系**. 

为了强调实数系的连续性质，我们再看两个结论. 

**定理3** (Archimedes 原理)：设 $0 < x \in \mathbb{R}$，则任给 $y \in \mathbb{R}$，存在正整数 $n$，使得 $y < nx$.

> 我们不再区分有理数 $r$ 与分割 $r^*$. 考虑 $\mathbb{R}$ 的子集
> $$
> A = \{ nx \mid n \in \mathbb{N} \}.
> $$
>
> 我们说明 $A$ 没有上界. （反证法）如果有上界，则由确界原理知 $A$ 有上确界，记为 $\alpha$. 因为 $0 < x$，故 $\alpha - x < \alpha$，从而存在正整数 $m$，使得 $\alpha - x < mx$，此时 $\alpha < (m+1)x \in A$，这和 $\alpha$ 为 $A$ 的上界相矛盾. 
>
> 既然 $A$ 没有上界，$y$ 就不是 $A$ 的上界，从而存在正整数 $n$，使得 $y < nx$. 

**推论4** (有理数的稠密性)：任给 $a < b \in \mathbb{R}$，存在 $c \in \mathbb{Q}$，使得 $a < c < b$. 

> 由 $a < b$ 知 $0 < b - a$，由 Archimedes 原理，存在正整数 $n$，使得 $1 < n(b - a)$. 再由 Archimedes 原理，存在正整数 $m_1, m_2$，使得 $na < m_1$, $-na < m_2$. 这说明，集合
> $$
> A = \{ m' \in \mathbb{Z} \mid na < m' \} \subset \mathbb{Z}
> $$
> 非空且有下界，因而存在最小整数 $m \in A$，$m$ 满足条件
> $$
> m - 1 \leq na < m.
> $$
>
> 此时就有
> $$
> na < m \leq 1 + na < n(b - a) + na = nb,
> $$
> 即 $c = m/n \in \mathbb{Q}$ 满足条件 $a < c < b$. 

以上关于实数系的构造方法源于 Dedekind. 实数系还有其它的构造方法，例如 Cantor 用小数表示以及利用 Cauchy 序列也完成了实数系的构造. 

如果用抽象的语言来描述，则这些构造出来的对象是所谓的具有确界原理的有序域，这样的域都是互相同构的. 
