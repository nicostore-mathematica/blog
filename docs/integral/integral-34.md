---
title: Lesson 34 多元函数积分 I
permalink: /integral/integral-34/
createTime: 2026/08/17 14:17:51
---

## Part 1 二重Riemann积分

### · Riemann 积分

**定义1** (矩形上的 Riemann 积分)

> 假设 $f: I \to \mathbb{R}$ 为矩形 $I$ 上定义的函数，如果存在实数 $A$，使得任给 $\varepsilon > 0$，均存在 $\delta > 0$，当 $\|\pi\| < \delta$ 时，有  
> $$
> \left|\sum_{i,j} f(\xi_{ij}) v(I_{ij}) - A\right| < \varepsilon, \quad \forall\, \xi_{ij} \in I_{ij},
> $$
> 则称 $f$ 在 $I$ 上 Riemann 可积或简称可积，$A$ 为 $f$ 在 $I$ 上的积分，记为  
> $$
> A = \int_I f = \iint_I f(x,y)\,dx\,dy.
> $$

> [!important]
>
> (1) 我们将 $\sum_{i,j} f(\xi_{ij}) v(I_{ij})$ 称为 $f$ 关于分割 $\pi$ 的一个 Riemann 和，也记为 $S(f,\pi,\xi)$. 如果 $f$ 可积，则积分可用极限表示  
> $$
> \int_I f = \lim_{\|\pi\| \to 0} S(f,\pi,\xi).
> $$
>
> (2) 与一元函数类似，$f$ 在 $I$ 上 Riemann 可积的必要条件是 $f$ 为有界函数. 
>
> 下面假设 $f$ 为 $I$ 上定义的有界函数. 我们象对一元函数所做过的那样来讨论 $f$ 可积的充分必要条件. 记  
> $$
> M_{ij} = \sup_{p \in I_{ij}} f(p), \quad m_{ij} = \inf_{p \in I_{ij}} f(p),
> $$
> 并令  
> $$
> S(\pi) = S(\pi,f) = \sum_{i,j} M_{ij} v(I_{ij}), \quad s(\pi) = s(\pi,f) = \sum_{i,j} m_{ij} v(I_{ij}),
> $$
> $S(\pi)$ 和 $s(\pi)$ 分别是 $f$ 关于分割 $\pi$ 的 Darboux 上和与 Darboux 下和. 与一元函数一样，称  
> $$
> \omega_{ij} = M_{ij} - m_{ij} = \sup_{p \in I_{ij}} f(p) - \inf_{p \in I_{ij}} f(p)
> $$
> 为 $f$ 在小矩形 $I_{ij}$ 上的振幅. $f$ 的上和与下和之差可以表示为  
> $$
> S(\pi) - s(\pi) = \sum_{i,j} \omega_{ij} v(I_{ij}).
> $$
>
> 如果 $[a,b]$ 的分割 $\pi'_1$ 是由 $\pi_1$ 通过添加分点得到，$[c,d]$ 的分割 $\pi'_2$ 是由 $\pi_2$ 通过添加分点得到，则称 $[a,b] \times [c,d]$ 的分割 $\pi' = \pi'_1 \times \pi'_2$ 是 $\pi = \pi_1 \times \pi_2$ 的一个加细. 
>
> 对于加细分割，下面的命题的证明和一元函数完全类似. 

**命题1**：

> 如果 $\pi'$ 是 $\pi$ 的加细，则  
> $$
> s(\pi) \leq s(\pi') \leq S(\pi') \leq S(\pi),
> $$
> 即分割加细后下和不减，上和不增. 

**推论2**：

> 对于 $I$ 的任何两个分割 $\pi^1$, $\pi^2$，均有  
> $$
> s(\pi^1) \leq S(\pi^2).
> $$

/proof/

> 设 $\pi^1 = \pi_1 \times \pi_2$, $\pi^2 = \pi'_1 \times \pi'_2$，令  
> $$
> \pi = \pi^1 \cup \pi^2 = (\pi_1 \cup \pi'_1) \times (\pi_2 \cup \pi'_2),
> $$
> 则 $\pi$ 既是 $\pi^1$ 的加细，又是 $\pi^2$ 的加细，因此  
> $$
> s(\pi^1) \leq s(\pi) \leq S(\pi) \leq S(\pi^2),
> $$
> 这说明下和总是不超过上和. 

### · Darboux 定理

对于有界函数，它的上和与下和也都是有界的. 因此可以考虑  
$$
S(f) = \inf_\pi S(\pi), \quad s(f) = \sup_\pi s(\pi).
$$
分别称 $S(f)$, $s(f)$ 为 $f$ 在 $I$ 上的上积分与下积分. 

如果 $f(x) = k$ 为常值函数，则显然它在 $I$ 上的任何 Riemann 和均为 $k \cdot v(I)$，因此常值函数可积. 同时，常值函数的上积分和下积分与其积分也相等. 

如果 $k$ 为常数，则易见 $f + k$ 可积当且仅当 $f$ 可积，且  
$$
S(f + k) = S(f) + k \cdot v(I), \quad s(f + k) = s(f) + k \cdot v(I).
$$

我们有

**定理3** (Darboux)：

> 设 $f$ 为 $I$ 上的有界函数，则  
> $$
> \lim_{\|\pi\| \to 0} S(\pi) = \inf_\pi S(\pi), \quad \lim_{\|\pi\| \to 0} s(\pi) = \inf_\pi s(\pi).
> $$

/proof/

> 我们以上和为例证明. 因为 $f$ 有界，根据刚才的讨论，不妨设 $0 \leq f \leq M$. 任给 $\varepsilon > 0$，存在分割 $\pi'$，使得  
> $$
> S(\pi') < \inf_\pi S(\pi) + \frac{\varepsilon}{2}.
> $$
>
> 设 $\delta > 0$ 为充分小的正数. 如果 $I_{ij} = [x_{i-1}, x_i] \times [y_{j-1}, y_j]$ 为分割 $\pi'$ 的一个小矩形，则将它沿每一条边向其内部平行地内缩 $\delta$ 距离，得（开）矩形  
> $$
> I^\delta_{ij} = (x_{i-1} + \delta, x_i - \delta) \times (y_{j-1} + \delta, y_j - \delta),
> $$
> 记  
> $$
> J_\delta = I - \bigcup_{i,j} I^\delta_{ij},
> $$
> 则 $J_\delta$ 是一些（闭）矩形之并，其面积 $v(J_\delta)$ 可以定义，且当 $\delta$ 趋于零时，该面积趋于零. 我们固定一个充分小的 $\delta$，使得  
> $$
> v(J_\delta) < \frac{\varepsilon}{2M + 1}.
> $$
>
> 现在设 $\|\pi\| < \delta$. 对于分割 $\pi$ 中的每一个小矩形来说，不难看出，要么它完全含于 $J_\delta$，要么它完全含于分割 $\pi'$ 的某个（开）矩形之内，二者必居其一（也可同时成立）. 因此，$\pi$ 的上和有下面的估计：  
> $$
> \inf_\pi S(\pi) \leq S(\pi) \leq M \cdot v(J_\delta) + S(\pi') \\
> < M \cdot \frac{\varepsilon}{2M + 1} + \inf_\pi S(\pi) + \frac{\varepsilon}{2} \\
> < \inf_\pi S(\pi) + \varepsilon.
> $$
> 这说明  
> $$
> \lim_{\|\pi\| \to 0} S(\pi) = \inf_\pi S(\pi).
> $$

有了 Darboux 定理，下面关于可积性的判断定理和一元函数的证明就没什么不同了. 

**定理4** (可积的充要条件)

> 设 $f$ 为 $I$ 上的有界函数，则下列条件等价
>
> (1) $f$ 在 $I$ 上 Riemann 可积. 
>
> (2) $f$ 在 $I$ 上的上积分和下积分相等. 
>
> (3) $\displaystyle \lim_{\|\pi\| \to 0} \sum_{i,j} \omega_{ij} v(I_{ij}) = 0$.
>
> (4) 任给 $\varepsilon > 0$，存在 $I$ 的某个分割 $\pi$，使得
> $$
> S(\pi) - s(\pi) = \sum_{i,j} \omega_{ij} v(I_{ij}) < \varepsilon.
> $$

**推论5**：

> 设 $f$ 为矩形 $I$ 上的连续函数，则 $f$ 是 Riemann 可积的；

/proof/

> $f$ 在 $I$ 上连续意味着 $f$ 在 $I$ 上一致连续. 利用可积的充要条件，剩下的证明和一元函数完全相同. 

对于多元函数，下面的结果也是成立的. 

**定理6** (Riemann)：

> 设 $f$ 为 $I$ 上的有界函数，则 $f$ 可积的充分必要条件是：任给 $\varepsilon, \eta > 0$，存在 $I$ 的分割 $\pi$，使得  
> $$
> \sum_{\omega_{ij} \geq \eta} v(I_{ij}) < \varepsilon.
> $$

### · 零测集

和一元函数一样，我们引入零测集的概念来刻画可积函数. 

**定义2** (零测集)

> 设 $A \subset \mathbb{R}^2$ 为平面点集. 如果任给 $\varepsilon > 0$，存在至多可数个闭矩形  
> $$
> I_i, \quad i = 1,2,\cdots,
> $$
> 使得  
> $$
> A \subset \bigcup_{i \geq 1} I_i, \quad \text{且} \quad \sum_{i \geq 1} v(I_i) < \varepsilon,
> $$
> 则称 $A$ 为零测集. 

和一维的情形类似，我们有

**命题7**

> (1) 有限点集均为零测集；
>
> (2) 零测集的子集仍为零测集；
>
> (3) 可数个零测集之并仍为零测集；
>
> (4) 矩形的边界是零测集；
>
> (5) 设 $f$ 为 $[a,b]$ 上的一元可积函数，则其图像 $\mathrm{graph}(f) = \{(x,f(x)) \mid x \in [a,b]\} \subset \mathbb{R}^2$ 为零测集. 

/proof/

> 前三条的证明和一维的情形完全类似，我们略去. 
>
> (4) 设 $\delta > 0$ 为充分小的正数，将矩形分别内缩 $\delta$ 距离和外展 $\delta$ 距离，得到两个矩形，原矩形的边界包含于这两个矩形之差，这两个矩形之差可以分为若干小矩形之并. 当 $\delta$ 趋于零时，它们的面积之和趋于零，因此原矩形的边界为零测集. 
>
> (5) 任给 $\varepsilon > 0$，因为 $f$ 为一元可积函数，故可取 $[a,b]$ 的分割  
> $$
> \pi: a = x_0 < x_1 < \cdots < x_n = b
> $$
> 使得 $\displaystyle \sum_{i=1}^n \omega_i \Delta x_i < \varepsilon$，其中 $\omega_i = M_i - m_i$ 为 $f$ 在小区间 $[x_{i-1},x_i]$ 上的振幅，$M_i$ 和 $m_i$ 分别是 $f$ 在该小区间上的上确界与下确界. 因此  
> $$
> \{(x,f(x)) \mid x \in [x_{i-1},x_i]\} \subset [x_{i-1},x_i] \times [m_i,M_i] = I_i, \quad 1 \leq i \leq n.
> $$
> 从而有  
> $$
> \mathrm{graph}(f) \subset \bigcup_{i=1}^n I_i,
> $$
> 并且  
> $$
> \sum_{i=1}^n v(I_i) = \sum_{i=1}^n (x_i - x_{i-1})(M_i - m_i) = \sum_{i=1}^n \omega_i \Delta x_i < \varepsilon,
> $$
> 这说明 $\mathrm{graph}(f)$ 为零测集. 

> [!important]
>
> 从命题的证明还可以看出，因为矩形的边界为零测集，在零测集定义中将“闭矩形”换成“开矩形”也是可以的. 
>
> 对于多元函数，我们也可定义振幅. 设 $f: A \to \mathbb{R}$ 为有界函数，$x \in A$. $f$ 在 $x$ 处的振幅定义为  
> $$
> \omega(f,x) = \lim_{r \to 0^+} \sup\{|f(x_1) - f(x_2)| : x_1,x_2 \in B_r(x) \cap A\}.
> $$
> 易见，$f$ 在 $x$ 处连续当且仅当 $\omega(f,x) = 0$. 设 $\delta > 0$，记  
> $$
> D_\delta = \{x \in A \mid \omega(f,x) \geq \delta\},
> $$
> 则 $f$ 的间断点（不连续点）全体为 $D_f = \displaystyle\bigcup_{n=1}^\infty D_{\frac{1}{n}}$. 

### · Lebesgue

**定理8** (Lebesgue)：

> 矩形 $I$ 上的有界函数 $f$ 是 Riemann 可积的当且仅当 $f$ 的间断点集 $D_f$ 为零测集. 

下面的推论是显然的. 

**推论9**

> (1) 设 $f$ 是矩形 $I$ 上的可积函数，矩形 $J$ 包含于 $I$，则 $f$ 也是 $J$ 上的可积函数；
>
> (2) 如果矩形 $I$ 被有限个矩形 $\{J_i\}$ 所覆盖，且 $f$ 在每个 $J_i$ 上都是可积的，则 $f$ 在 $I$ 上也是可积的. 

### · 零面积集

为了研究函数在一般集合（不必为矩形）上的可积性问题，我们引进零面积集的概念. 

**定义3** (零面积集)

> 设 $A \subset \mathbb{R}^2$ 为平面点集. 如果任给 $\varepsilon > 0$，存在有限个闭矩形  
> $$
> I_i, \quad i = 1,2,\cdots,n
> $$
> 使得  
> $$
> A \subset \bigcup_{i=1}^n I_i, \quad \text{and} \quad \sum_{i=1}^n v(I_i) < \varepsilon,
> $$
> 则称 $A$ 为零面积集. 

显然，零面积集必为零测集. 我们还有

**命题10**

> (1) 有限点集是零面积集；
>
> (2) 零面积集的子集仍为零面积集；
>
> (3) 有限个零面积集之并仍为零面积集；
>
> (4) $A$ 为零面积集当且仅当 $\bar{A} = A \cup \partial A$ 为零面积集；
>
> (5) 有界闭集 $A$ 为零面积集当且仅当 $A$ 是零测集. 

/proof/

> 前三条的证明略去. 
>
> (4) 如果 $\bar{A}$ 为零面积集，则由 (2) 知，$A \subset \bar{A}$ 为零面积集. 反之，设 $A$ 为零面积集，则任给 $\varepsilon > 0$，存在有限个闭矩形 $\{I_i\}$，使得  
> $$
> A \subset \bigcup_{i=1}^n I_i, \quad \text{and} \quad \sum_{i=1}^n v(I_i) < \varepsilon,
> $$
> 显然仍有  
> $$
> \bar{A} \subset \bigcup_{i=1}^n I_i, \quad \text{and} \quad \sum_{i=1}^n v(I_i) < \varepsilon,
> $$
> 因此 $\bar{A}$ 为零面积集. 
>
> (5) 只要说明有界闭的零测集必为零面积集即可. 
>
> 我们知道有界闭集是紧致集，因此在零测集的定义中采用开矩形覆盖，则可以从中挑选有限个开矩形，使得它们仍然覆盖该紧致集，这当然表明这个紧致集是零面积集. 

如果仔细检查一下命题7的证明，我们实际上知道矩形的边界是零面积集，而可积函数的图像是零面积集. 

下面的结果反映了零面积集概念的用处. 

**定理11**：

> 设 $f: I \to \mathbb{R}$ 为矩形 $I$ 上的有界函数. 如果 $A = \{x \in I \mid f(x) \neq 0\}$ 为零面积集，则 $f$ 可积且积分为零. 

/proof/

> 因为 $f$ 在开集 $I - \partial I - \bar{A}$ 上为零，故 $f$ 的间断点包含于集合 $\partial I \cup \bar{A}$ 中. 
>
> $A$ 是零面积集意味着 $\bar{A}$ 也是零面积集. 从而 $\partial I \cup \bar{A}$ 为零面积集. 根据 Lebesgue 定理，$f$ 可积. 
>
> 对于 $I$ 的任何分割，由于矩形不是零面积集，所以每一个小矩形中均存在 $f$ 的零点，即 $f$ 的 Riemann 和总可以取零值，从而 $f$ 的积分为零. 

现在我们来定义有界集合的面积. 设 $A \in \mathbb{R}^2$ 为平面点集，记 $\chi_A: \mathbb{R}^2 \to \mathbb{R}$ 为下面定义的函数：  
$$
\chi_A(x) =
\begin{cases}
1, & x \in A, \\\\
0, & x \notin A.
\end{cases}
$$
即 $\chi_A$ 是 $A$ 的特征函数. 

### · 有界集合的面积

**定义4** (有界集合的面积)

> 设 $A$ 为有界集合，$I$ 为包含 $A$ 的矩形. 如果 $A$ 的特征函数 $\chi_A$ 在 $I$ 上 Riemann 可积，则称 $A$ 是可求面积的，它的面积定义为 $\chi_A$ 在 $I$ 上的积分. 

> [!important]
>
> (1) $A$ 是否可求面积以及面积的大小与定义中矩形 $I$ 的选取无关. 如果 $A$ 本身就是一个矩形，则按此定义给出的面积和矩形的面积公式给出的面积是一致的. 
>
> (2) 如果 $A$ 本身是零面积集，则按照前面的讨论我们知道，$A$ 是可求面积的，且其面积为零. 

如果 $A,B$ 是可求面积的有界集合，则 $A \cap B$, $A \cup B$ 也是可求面积的. 

这只要注意到特征函数满足下列等式  
$$
\chi_{A \cap B} = \chi_A \cdot \chi_B, \quad \chi_{A \cup B} = \max\{\chi_A, \chi_B\},
$$
以及可积函数类的基本运算性质即可. 

下面的结果给出了有界集合可求面积的充分必要条件. 

**定理12**：

> 有界集合 $A$ 可求面积当且仅当其边界 $\partial A$ 为零面积集. 

/proof/

> 不妨设 $\bar{A} \subset I - \partial I$. 易见 $\chi_A$ 的间断点集正好为 $\partial A$. 
>
> 因此 $\chi_A$ 可积当且仅当 $\partial A$ 为零测集. 因为 $\partial A$ 为有界闭集，它为零测集当且仅当它是零面积集. 

### · 一般集合上的积分

有了这些预备，我们可以考虑函数在一般集合上的积分了. 为了简单起见，我们只考虑函数在可求面积的集合上的积分. 设 $A$ 是可求面积的有界集合，$f: A \to \mathbb{R}$ 为 $A$ 上的有界函数，将 $f$ 零延拓为 $\mathbb{R}^2$ 上的函数 $f_A$ 如下：  
$$
f_A(x) =
\begin{cases}
f(x), & x \in A, \\\\
0, & x \in \mathbb{R}^2 - A.
\end{cases}
$$
**定义5**

> 设 $A$ 和 $f$ 如上，$I$ 为包含 $A$ 的矩形. 如果 $f_A$ 为 $I$ 上的可积函数，则称 $f$ 在 $A$ 上可积，且积分定义为 $f_A$ 在 $I$ 的积分，即  
> $$
> \int_A f = \int_I f_A.
> $$

> [!important]
>
> (1) 这个定义也和矩形 $I$ 的选取无关. 当 $A$ 本身就是矩形时，这个定义和矩形上积分的定义是一致的. 
>
> (2) 由可求面积的定义我们知道，有界集合可求面积当且仅当常值函数 1 在这个集合上是可积的. 
>
> 下面的定理给出了函数在可求面积的集合上可积的判别条件. 

**定理13**：

> 设 $f: A \to \mathbb{R}$ 是可求面积集合 $A$ 上定义的有界函数. 则 $f$ 可积的充分必要条件是 $f$ 在 $A$ 上的间断点集为零测集. 

/proof/

> 取矩形 $I$ 使得 $\bar{A} \subset I - \partial I$. 由定义，$f$ 在 $A$ 上可积当且仅当 $f_A$ 在 $I$ 上可积. 根据 Lebesgue 定理，$f_A$ 可积当且仅当其间断点集为零测集. 
>
> 因为在 $I - \bar{A}$ 中 $f_A$ 为零，因此 $f_A$ 的不连续点都在 $\bar{A}$ 中. 
>
> 又由于 $\partial A$ 为零面积集，故 $f_A$ 可积当且仅当 $f_A$ 在 $A - \partial A$ 中的间断点集为零测集. 
>
> 在 $A - \partial A$ 中 $f_A = f$，因此 $f_A$ 可积当且仅当 $f$ 在 $A - \partial A$ 中的间断点集是零测集，也就是说当且仅当 $f$ 在 $A$ 上的间断点为零测集. 
