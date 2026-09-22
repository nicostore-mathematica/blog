---
url: /integral/integral-36/index.md
---
## Part 4 变量替换

考虑下面的简单图形：

$$
P(v\_1, v\_2, \cdots, v\_n) = \left{ \sum\_{i=1}^n x\_i v\_i \in \mathbb{R}^n \mid 0 \leq x\_i \leq 1,\ i = 1, 2, \cdots, n. \right}
$$

其中 $v\_i$ ($1 \leq i \leq n$) 为 $\mathbb{R}^n$ 中的向量. 当 $n = 2$ 且 $v\_1, v\_2$ 线性无关时，$P(v\_1, v\_2)$ 为平面上的平行四边形.

如果这个平行四边形有一条边和坐标轴平行，则用投影法可以得出其面积公式. 一般的情形如何处理？

### · 仿射变换

> \[!important]
>
> **(1)** 平移变换. 设 $v\_0 \in \mathbb{R}^n$ 为固定的向量，考虑仿射线性变换 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$，$\varphi(x) = x + v\_0$. 根据矩形体积的平移不变性容易知道，如果 $A \subset \mathbb{R}^n$ 可求体积，则 $\varphi(A)$ 也是可求体积的，并且体积不变，这可称为体积的平移不变性.
>
> **(2)** 伸缩变换. 设 $\lambda\_i \in \mathbb{R}$ ($1 \leq i \leq n$)，考虑线性映射 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$，
>
> $$
> \varphi(x\_1, x\_2, \cdots, x\_n) = (\lambda\_1 x\_1, \lambda\_2 x\_2, \cdots, \lambda\_n x\_n),\quad (x\_1, x\_2, \cdots, x\_n) \in \mathbb{R}^n.
> $$
>
> 矩形 $I = \[a\_1, b\_1] \times \cdots \times \[a\_n, b\_n]$ 在 $\varphi$ 下的像仍为矩形（可以退化），其体积为
>
> $$
> v(\varphi(I)) = |\lambda\_1| \cdots |\lambda\_n| v(I) = |\det(\varphi)| v(I).
> $$

将矩形 $I$ 换成一般的可求体积的图形，上述公式仍然成立，这可从下面的覆盖引理看出.

**引理1**（覆盖引理之一）

> 设 $\Omega$ 为 $\mathbb{R}^n$ 中可求体积的有界集合，则任给 $\varepsilon > 0$，存在有限个矩形 ${I\_i}$ 与 ${J\_j}$，使得
>
> $$
> \bigcup\_i I\_i \subset \Omega,\quad \sum\_i v(I\_i) > v(\Omega) - \varepsilon;\quad \bigcup\_j J\_j \supset \Omega,\quad \sum\_j v(J\_j) < v(\Omega) + \varepsilon,
> $$
>
> 其中 ${I\_i}$ 的内部互不相交.

/proof/

> 取包含 $\Omega$ 的矩形 $I$，由体积的定义，有
>
> $$
> \int\_I \chi\_\Omega = v(\Omega).
> $$
>
> 因此，任给 $\varepsilon > 0$，存在 $I$ 的分割 $\pi = {I\_{ij}}$，使得
>
> $$
> \left| \sum\_{ij} \chi\_\Omega(\xi\_{ij}) v(I\_{ij}) - v(\Omega) \right| < \varepsilon,\quad \forall\ \xi\_{ij} \in I\_{ij}.
> $$
>
> 根据特征函数的定义，显然有
>
> $$
> \sum\_{ij} \inf\_{\xi\_{ij} \in I\_{ij}} \chi\_\Omega(\xi\_{ij}) v(I\_{ij}) = \sum\_{I\_{ij} \subset \Omega} v(I\_{ij}),
> $$
>
> 因此，对于分割 $\pi$ 就有
>
> $$
> v(\Omega) - \varepsilon < \sum\_{I\_{ij} \subset \Omega} v(I\_{ij}) \leq v(\Omega).
> $$
>
> 同理
>
> $$
> \sum\_{ij} \sup\_{\xi\_{ij} \in I\_{ij}} \chi\_\Omega(\xi\_{ij}) v(I\_{ij}) = \sum\_{I\_{ij} \cap \Omega \neq \varnothing} v(I\_{ij}),
> $$
>
> 此时有
>
> $$
> v(\Omega) \leq \sum\_{I\_{ij} \cap \Omega \neq \varnothing} v(I\_{ij}) < v(\Omega) + \varepsilon.
> $$
>
> 这就证明了引理.

**注意**：从证明可以看出，那些内部与 $\partial\ \Omega$ 有非空交的矩形的体积之和不超过 $2\varepsilon$，由于 $\partial\Omega$ 包含于这些矩形以及其它矩形边界的并集之中，因此这给出了可求体积的有界集合的边界必为零体积集的另一证明.

同时，也可以看出伸缩变换将可求体积的集合变为可求体积的集合.

//example/

设 $a\_i$ ($1 \leq i \leq n$) 为正实数，求椭球

$$
\left{ (x\_1, \cdots, x\_n) \in \mathbb{R}^n ,\middle|, \dfrac{x\_1^2}{a\_1^2} + \cdots + \dfrac{x\_n^2}{a\_n^2} \leq 1 \right}
$$

的体积.

> 利用伸缩变换 $x\_i = a\_i t\_i$ ($1 \leq i \leq n$) 可得椭球体积为 $(a\_1 a\_2 \cdots a\_n) \omega\_n$，其中 $\omega\_n$ 是上例中的 $n$ 维单位球的体积.

下面给出第三种仿射变换：

> \[!important]
>
> **(3)** 正交变换. 设 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$ 为正交变换，在 $\mathbb{R}^n$ 的标准基 ${e\_i}$ 下 $\varphi$ 表示为
> $$
> \varphi(e\_1, e\_2, \cdots, e\_n) = (e\_1, e\_2, \cdots, e\_n) A,
> $$
>
> 其中 $A$ 为正交矩阵，即
>
> $$
> A A^T = A^T A = I\_n.
> $$
>
> 我们将说明正交变换保持体积不变.

**引理2**（覆盖引理之二）

> 设 $\Omega$ 为 $\mathbb{R}^n$ 中可求体积的有界集合，则任给 $\varepsilon > 0$，存在有限个 $n$ 维球体 ${B\_i}$ 与 ${B^j}$，使得
>
> $$
> \bigcup\_i B\_i \subset \Omega,\quad \sum\_i v(B\_i) > v(\Omega) - \varepsilon;\quad \bigcup\_j B^j \supset \Omega,\quad \sum\_j v(B^j) < v(\Omega) + \varepsilon,
> $$
>
> 其中 ${B\_i}$ 的内部互不相交.

/proof/

> 先设 $v(\Omega) > 0$. 与引理1的证明类似，先取矩形 $I = \[a,b]^n$ 使得 $\Omega \subset I$. 将 $I$ 作 $m^n$ 等分，当 $m$ 充分大时，完全包含于 $\Omega$ 的小矩形 ${I\_i^1}$ 的体积之和满足条件
>
> $$
> \sum\_i v(I\_i^1) > \frac{1}{2} v(\Omega).
> $$
>
> 矩形 $I\_i^1$ 的内接球记为 $B\_i^1$，则根据前面例子中球体的体积公式，有
>
> $$
> \sum\_i v(B\_i^1) = \frac{\omega\_n}{2^n} \sum\_i v(I\_i^1) > \frac{\omega\_n}{2^{n+1}} v(\Omega).
> $$
>
> 记
>
> $$
> q = 1 - \frac{\omega\_n}{2^{n+1}},
> $$
>
> 则 $0 < q < 1$，且
>
> $$
> 0 < v(\Omega - \bigcup\_i B\_i^1) < q \cdot v(\Omega).
> $$
>
> 对 $\Omega - \bigcup\_i B\_i^1$ 重复上述过程，可得包含于 $\Omega - \bigcup\_i B\_i^1$ 的有限个球体 ${B\_i^2}$，使得
>
> $$
> 0 < v(\Omega - \bigcup\_i B\_i^1 - \bigcup\_{i'} B\_{i'}^2) < q \cdot v(\Omega - \bigcup\_i B\_i^1) < q^2 \cdot v(\Omega).
> $$
>
> 继续重复这一过程，由于 $q^k \to 0$ ($k \to \infty$)，对任给的 $\varepsilon > 0$，就得到内部互不相交的有限个 $n$ 维球体 ${B\_i}$，使得（$k$ 充分大）
>
> $$
> 0 < v(\Omega - \bigcup\_i B\_i) < q^k \cdot v(\Omega) < \min\left{ \frac{1}{n^{\frac{n}{2}} \omega\_n},\ 1 \right} \varepsilon.
> $$
>
> 现在，对于 $\Omega' = \Omega - \bigcup\_i B\_i$，仍然考虑矩形 $I$ 的 $m^n$ 等分，当 $m$ 充分大时，存在覆盖 $\Omega'$ 的小矩形 ${I^j}$，使得
>
> $$
> \sum\_j v(I^j) < v(\Omega') + \frac{1}{n^{\frac{n}{2}} \omega\_n} \varepsilon,
> $$
>
> 矩形 $I^j$ 的外接球记为 $B\_j^2$，则
>
> $$
> \sum\_j v(B\_j^2) = \frac{\omega\_n n^{\frac{n}{2}}}{2^n} \sum\_j v(I^j) < \frac{n^{\frac{n}{2}} \omega\_n}{2^n} \left( v(\Omega') + \frac{1}{n^{\frac{n}{2}} \omega\_n} \varepsilon \right) < \varepsilon.
> $$
>
> 这说明 ${B\_i, B\_j^2}$ 是覆盖 $\Omega$ 的 $n$ 维球，它们的体积之和满足引理的要求.
>
> 最后一段的证明对于 $v(\Omega) = 0$ 的情形也适用，这样就完全证明了引理.

**推论3**：

> 正交变换保持体积不变.

/proof/

> 注意到正交变换将 $n$ 维球映为 $n$ 维球，且球的半径不变（从而体积不变）.
>
> 特别地，根据覆盖引理，正交变换将零体积集映为零体积集.
>
> 再注意到正交变换将集合的边界点映为边界点，内点映为内点，因此将可求体积的集合映为可求体积的集合.
>
> 再由覆盖引理以及正交变换保持球体体积不变即知正交变换保持可求体积集合的体积不变.

/example/

设 $A$ 为 $n$ 阶正定对称实方阵，求椭球
$$
E\_A = {x = (x\_1, x\_2, \cdots, x\_n) \in \mathbb{R}^n \mid x A x^T \leq 1}
$$

的体积.

> 我们知道，正定对称方阵可以对角化，即存在正交方阵 $O$，使得
>
> $$
> A = O \cdot \mathrm{diag}(\lambda\_1, \lambda\_2, \cdots, \lambda\_n) \cdot O^T,\quad \lambda\_i > 0\ (1 \leq i \leq n).
> $$
>
> 利用正交变换 $y = x O$，椭球 $E\_A$ 的体积与下面的标准椭球
>
> $$
> {y \in \mathbb{R}^n \mid \lambda\_1 y\_1^2 + \cdots + \lambda\_n y\_n^2 = y \cdot \mathrm{diag}(\lambda\_1, \lambda\_2, \cdots, \lambda\_n) \cdot y^T \leq 1}
> $$
>
> 体积相同，根据前面的例子即知它的体积为
>
> $$
> v(E\_A) = \omega\_n (\lambda\_1)^{-\frac{1}{2}} \cdots (\lambda\_n)^{-\frac{1}{2}} = \omega\_n (\det A)^{-\frac{1}{2}}.
> $$
>
> ***
>
> 一般地，如果 $P$ 为正定对称矩阵，作为线性变换，它把可求体积的集合 $\Omega$ 映为可求体积的集合 $P(\Omega)$，且
>
> $$
> v(P(\Omega)) = (\det P) v(\Omega),
> $$
>
> 这个等式的证明和上例类似，结合正交变换以及伸缩变换的结果即可.

关于最一般的推广：

> \[!important]
>
> **(4)** 一般的线性变换. 设 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$ 为线性映射，在 $\mathbb{R}^n$ 的标准基下可表示为 $n$ 阶方阵 $A$. 下面为了简单起见我们有时不区分 $\varphi$ 和 $A$. 设 $\Omega$ 为 $\mathbb{R}^n$ 中可求体积的有界集合，我们考虑集合 $A(\Omega)$.
>
> 首先，如果 $\varphi$ 是退化的 ($\det A = 0$)，则 $A(\Omega)$ 含于 $\mathbb{R}^n$ 的某个超平面中，从而必为零体积集.
>
> 因此下面假设 $\det A \neq 0$，此时 $A A^T$ 为正定对称方阵，从而可以对角化，且特征值均大于零，这说明 $A A^T$ 可以写为
> $$
> A A^T = P^2,
> $$
>
> 其中 $P$ 也是正定对称方阵，$\det P = |\det A|$. 记 $O = P^{-1} A$，则上式表明 $O$ 是正交矩阵，特别地，$A(\Omega) = P(O(\Omega))$ 可求体积，且
>
> $$
> v(A(\Omega)) = v(P(O(\Omega))) = (\det P) v(O(\Omega)) = (\det P) v(\Omega),
> $$
>
> 即
>
> $$
> v(A(\Omega)) = |\det A| v(\Omega).
> $$

下面我们可以尝试解决一些问题：

/example/

设 ${v\_i}\_{i=1}^n$ 为 $\mathbb{R}^n$ 中的向量，求平行多面体

$$
P(v\_1, \cdots, v\_n) = \left{ \sum\_{i=1}^n x\_i v\_i \in \mathbb{R}^n \mid 0 \leq x\_i \leq 1,\ i = 1, 2, \cdots, n. \right}
$$

的体积.

> 记 $\mathbb{R}^n$ 的标准基为 ${e\_i}\_{i=1}^n$，考虑线性映射 $A: \mathbb{R}^n \to \mathbb{R}^n$，$A(e\_i) = v\_i$. 则显然有
>
> $$
> \begin{aligned}
> P(v\_1, \cdots, v\_n) &= \left{ \sum\_{i=1}^n x\_i v\_i \in \mathbb{R}^n \mid 0 \leq x\_i \leq 1,\ i = 1, 2, \cdots, n. \right} \\\\
> &= \left{ A\left( \sum\_{i=1}^n x\_i e\_i \right) \in \mathbb{R}^n \mid 0 \leq x\_i \leq 1,\ i = 1, 2, \cdots, n. \right} \\\\
> &= A(P(e\_1, \cdots, e\_n)).
> \end{aligned}
> $$
>
> 而 $P(e\_1, \cdots, e\_n) = \[0,1]^n$，因此，
>
> $$
> v(P(v\_1, \cdots, v\_n)) = |\det A| v(\[0,1]^n) = |\det A|.
> $$
>
> 例如，当 $n = 2$，$v\_1 = (a\_1, b\_1)$，$v\_2 = (a\_2, b\_2)$ 时，
>
> $$
> v(P(v\_1, v\_2)) = |a\_1 b\_2 - a\_2 b\_1|,
> $$
>
> 这是平行四边形的面积公式.

### · 一般的变量替换

现在我们考虑比仿射线性变换更一般的映射，看看可求体积的集合在这些映射下如何变化. 设 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$ 为 Lipschitz 映射，即存在常数 $L$，使得

$$
|\varphi(x) - \varphi(y)| \leq L |x - y|,\quad \forall\ x, y \in \mathbb{R}^n.
$$

我们有

**引理4**：

> 设 $\varphi$ 为如上的 Lipschitz 映射，$A \subset \mathbb{R}^n$ 为可求体积的集合. 如果 $\varphi(A)$ 可求体积，则
>
> $$
> v(\varphi(A)) \leq L^n \cdot v(A).
> $$
>
> 特别地，$\varphi$ 将零体积集映为零体积集.

/proof/

> 根据覆盖引理2，任给 $\varepsilon > 0$，存在覆盖 $A$ 的 $n$ 维球体 ${B^j}$，使得
>
> $$
> \sum\_j v(B^j) < v(A) + \varepsilon.
> $$
>
> 设 $B^j$ 以 $x\_j$ 为中心，以 $r\_j$ 为半径，则由
>
> $$
> |\varphi(x) - \varphi(x\_j)| \leq L |x - x\_j| \leq L r\_j,\quad \forall\ x \in B^j
> $$
>
> 知，$\varphi(B^j)$ 包含在以 $\varphi(x\_j)$ 为中心，以 $L r\_j$ 为半径的 $n$ 维球中. 因为 $\varphi(A) \subset \bigcup\_j \varphi(B^j)$，故有
>
> $$
> v(\varphi(A)) \leq \sum\_j \omega\_n (L r\_j)^n = L^n \sum\_j v(B^j) < L^n \cdot v(A) + L^n \varepsilon,
> $$
>
> 由 $\varepsilon$ 的任意性即知 $v(\varphi(A)) \leq L^n \cdot v(A)$. 特别地，从上式还可以看出，如果 $A$ 为零体积集，则 $\varphi(A)$ 也是零体积集.

从证明可以看出，对于局部的 Lipschitz 映射也有类似的结果.

连续可微的映射是一类自然的（局部）Lipschitz 映射. 为此，设 $\varphi: \mathbb{R}^n \to \mathbb{R}^n$ 为连续可微映射，则 $\varphi$ 将零体积集映为零体积集.

如果 $\varphi$ 在 $x\_0$ 处非退化，则根据逆映射定理，$\varphi$ 在 $x\_0$ 附近可逆，且逆映射也是连续可微的.

特别地，$\varphi$ 将 $x\_0$ 附近的内点映为内点，因此将 $x\_0$ 附近的可求体积的集合映为可求体积的集合.

我们来看体积在映射 $\varphi$ 的作用下如何变化. 记 $L(x) = \varphi(x\_0) + J\varphi(x\_0)(x - x\_0)$ 为仿射线性变换，$\tilde{\varphi}(x) = \varphi(x) - L(x)$，则 $J(\tilde{\varphi})(x\_0) = 0$. 根据连续可微性，任给 $\varepsilon > 0$，存在 $\delta > 0$，使得

$$
|J(\tilde{\varphi})(x)| \leq \varepsilon,\quad \forall\ x \in B\_\delta(x\_0).
$$

由拟微分中值定理，有

$$
|\tilde{\varphi}(x) - \tilde{\varphi}(y)| \leq |J(\tilde{\varphi})(\xi)| \cdot |x - y| \leq \varepsilon |x - y|,\quad \forall\ x, y \in B\_\delta(x\_0).
$$

我们可以假设 $\varphi$ 在 $B\_\delta(x\_0)$ 上可逆，其逆映射记为 $\varphi^{-1}$. 上式表明，

$$
|\varphi \circ L^{-1}(x) - \varphi \circ L^{-1}(y)| \leq (1 + |L^{-1}| \varepsilon) |x - y|,\quad \forall\ x, y \in L(B\_\delta(x\_0)),
$$

其中 $L^{-1}$ 是 $L$ 的逆映射. 同理也有

$$
|L \circ \varphi^{-1}(x) - L \circ \varphi^{-1}(y)| \leq \left(1 + \frac{\varepsilon}{|L| - \varepsilon}\right) |x - y|,\quad \forall\ x, y \in \varphi(B\_\delta(x\_0)).
$$

设 $A \subset B\_\delta(x\_0)$ 为可求体积的集合，则由引理4 得

$$
\begin{aligned}
v(\varphi(A)) &= v(\varphi \circ L^{-1}(L(A))) \leq (1 + \varepsilon |L^{-1}|)^n v(L(A)) \\\\
&= (1 + \varepsilon |L^{-1}|)^n |\det J\varphi(x\_0)| v(A),
\end{aligned}
$$

同理，

$$
|\det J\varphi(x\_0)| v(A) = v(L(A)) = v(L \circ \varphi^{-1}(\varphi(A))) \leq \left(1 + \frac{\varepsilon}{|L| - \varepsilon}\right)^n v(\varphi(A)),
$$

总之可以得到下面的估计（适当调整 $\varepsilon$）：

$$
\left| v(\varphi(A)) - |\det J\varphi(x\_0)| \cdot v(A) \right| \leq \varepsilon \cdot v(A).
$$

由此得到 $v(A(\Omega)) = |\det A| v(\Omega).$ 的如下非线性推广：

**引理5**.

> 设 $\varphi: \Omega \to \mathbb{R}^n$ 为 $C^1$ 映射，如果 $\varphi$ 为单射，且 $J\varphi$ 非退化，则对可求体积的有界集合 $A$ ($\bar{A} \subset \Omega$)，$\varphi(A)$ 也是可求体积的，且
>
> $$
> v(\varphi(A)) = \int\_A |\det J\varphi|.
> $$

**定理6**（重积分的变量替换）

> 设 $\varphi: \Omega \to \mathbb{R}^n$ 为 $C^1$ 单射，且 $J\varphi$ 非退化. 设 $A$ 为可求体积的有界集合，$\bar{A} \subset \Omega$，$f: \varphi(A) \to \mathbb{R}$ 为连续函数，则
>
> $$
> \int\_{\varphi(A)} f = \int\_A f \circ \varphi, |\det J\varphi|.
> $$

/proof/

> 由题设以及逆映射定理知 $\varphi: \Omega \to \varphi(\Omega)$ 为可逆的连续可微映射，其逆映射也是连续可微的. 因此 $\partial\varphi(A) \subset \varphi(\partial A)$，因为 $\partial A \subset \Omega$ 是零体积集，故 $\varphi(\partial A)$ 也是零体积集，从而 $\varphi(A)$ 是可求体积的有界集合.
>
> 根据覆盖引理，为了简单起见，不妨设 $A$ 是一个矩形. 任给 $A$ 的分割 $\pi = {A\_{ij}}$，由引理 13.4.5 以及积分中值定理，有
>
> $$
> \begin{aligned}
> \int\_A f \circ \varphi, |\det J\varphi| &= \sum\_{ij} \int\_{A\_{ij}} f \circ \varphi, |\det J\varphi| \\\\
> &= \sum\_{ij} f \circ \varphi(\xi\_{ij}) \int\_{A\_{ij}} |\det J\varphi| \\\\
> &= \sum\_{ij} f \circ \varphi(\xi\_{ij}) v(\varphi(A\_{ij})) \\\\
> &= \int\_{\varphi(A)} f + \sum\_{ij} \int\_{\varphi(A\_{ij})} \[f(\varphi(\xi\_{ij})) - f].
> \end{aligned}
> $$
>
> 根据 $f$ 在 $\varphi(A)$ 上的（一致）连续性，当 $|\pi| \to 0$ 时上式最后一项趋于零，从而得证.
>
> **注意.** 当 $f$ 在 $\varphi(A)$ 上 Riemann 可积时定理也成立，读者可与一元函数积分的变量替换公式相比较.

### · 极坐标变换

我们知道，在平面 $\mathbb{R}^2$ 上有直角坐标 $(x, y)$ 和极坐标 $(r, \theta)$，其变换关系为

$$
x = r\cos\theta,\quad y = r\sin\theta,\quad r \geq 0,\quad 0 \leq \theta \leq 2\pi.
$$

这个变换称为极坐标变换，其 Jacobi 行列式为

$$
\frac{\partial(x, y)}{\partial(r, \theta)} =
\begin{vmatrix}
\cos\theta & -r\sin\theta \\
\sin\theta & r\cos\theta
\end{vmatrix}
\= r.
$$

这个变换将 $(r, \theta)$ 平面上的矩形 $\[0, R] \times \[0, 2\pi]$ 变为 $(x, y)$ 平面上的圆 $x^2 + y^2 \leq R^2$. 不过，这个变换不是一一的，且在 $r = 0$ 处退化.

尽管如此，由于此变换在 $(0, +\infty) \times (0, 2\pi)$ 上是一一的且不退化，因此将定理6的证明略作改动即可知，积分的变量替换公式对这个变换仍然成立.

与极坐标变换类似，$\mathbb{R}^3$ 中也有所谓的球面坐标变换：

$$
x = r\sin\theta\cos\varphi,\quad y = r\sin\theta\sin\varphi,\quad z = r\cos\theta,\quad r \geq 0,\ \theta \in \[0, \pi],\ \varphi \in \[0, 2\pi].
$$

这个变换的 Jacobi 行列式为

$$
\frac{\partial(x, y, z)}{\partial(r, \theta, \varphi)} =
\begin{vmatrix}
\sin\theta\cos\varphi & r\cos\theta\cos\varphi & -r\sin\theta\cos\varphi \\
\sin\theta\sin\varphi & r\cos\theta\sin\varphi & r\sin\theta\cos\varphi \\
\cos\theta & -r\sin\theta & 0
\end{vmatrix}
\= r^2\sin\theta.
$$

球面坐标和伸缩变换结合起来称为广义球面坐标变换.
