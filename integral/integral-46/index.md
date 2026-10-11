---
url: /integral/integral-46/index.md
---
## Part 4 Stokes 公式

设 $M$ 为定向带边 $m$ 维曲面，其边界 $\partial M$ 具有诱导定向。设 $\omega$ 为 $M$ 上的 $m$ 次微分形式，其支集 $\operatorname{supp} \omega$ 定义为

$$
\operatorname{supp} \omega = \overline{{x \in M \mid \omega(x) \neq 0}},
$$

假设 $\operatorname{supp} \omega$ 为紧致集合。下面我们逐步讨论 $\omega$ 在 $M$ 上的积分。

> \[!note]
>
> (1). 设 $\operatorname{supp} \omega$ 包含于某个局部坐标邻域 $V\_\alpha \cap M$ 中，与定向一致的局部参数表示为
> $$
> \varphi\_\alpha: U\_\alpha \to \mathbb{R}^n,
> $$
>
> 在这个坐标邻域中，$\omega$ 可以表示为
>
> $$
> \omega = a\_\alpha du\_1 \wedge \cdots \wedge du\_m,
> $$
>
> 其中 $a\_\alpha$ 是支集包含在 $V\_\alpha \cap M$ 中的函数。我们定义 $\omega$ 在 $M$ 上的积分为
>
> $$
> \int\_M \omega = \int\_{U\_\alpha} a\_\alpha \circ \varphi\_\alpha(u) du\_1 \cdots du\_m.
> $$
>
> 我们要说明这个积分与定向参数表示的选取无关。事实上，设 $\operatorname{supp} \omega$ 也含于局部坐标邻域 $V\_\beta \cap M$ 中，相应的局部参数表示为
>
> $$
> \varphi\_\beta: U\_\beta \to \mathbb{R}^n,
> $$
>
> $\omega$ 的局部表示为
>
> $$
> \omega = a\_\beta dv\_1 \wedge \cdots \wedge dv\_m,
> $$
>
> 其中，转换映射 $\varphi\_\beta^{-1} \circ \varphi\_\alpha$ 记为
>
> $$
> v = \varphi\_\beta^{-1} \circ \varphi\_\alpha(u),\quad u \in \varphi\_\alpha^{-1}(V\_\alpha \cap V\_\beta \cap M).
> $$
>
> 于是
>
> $$
> dv\_1 \wedge \cdots \wedge dv\_m = \det J(\varphi\_\beta^{-1} \circ \varphi\_\alpha) du\_1 \wedge \cdots \wedge du\_m,
> $$
>
> 这说明
>
> $$
> a\_\beta \circ \varphi\_\beta(v) \cdot \det J(\varphi\_\beta^{-1} \circ \varphi\_\alpha)(u) = a\_\alpha \circ \varphi\_\alpha(u).
> $$
>
> 由于 $\operatorname{supp} \omega \subset V\_\alpha \cap V\_\beta \cap M$，根据多重积分的变量替换公式，有
>
> $$
> \begin{aligned}
> \int\_{U\_\beta} a\_\beta \circ \varphi\_\beta(v) dv\_1 \cdots dv\_m &= \int\_{\varphi\_\beta^{-1}(V\_\alpha \cap V\_\beta \cap M)} a\_\beta \circ \varphi\_\beta(v) dv\_1 \cdots dv\_m \\\\
> &= \int\_{\varphi\_\alpha^{-1}(V\_\alpha \cap V\_\beta \cap M)} a\_\beta \circ \varphi\_\beta(v) |\det J(\varphi\_\beta^{-1} \circ \varphi\_\alpha)(u)| du\_1 \cdots du\_m \\\\
> &= \int\_{\varphi\_\alpha^{-1}(V\_\alpha \cap V\_\beta \cap M)} a\_\alpha \circ \varphi\_\alpha(u) du\_1 \cdots du\_m \\\\
> &= \int\_{U\_\alpha} a\_\alpha \circ \varphi\_\alpha(u) du\_1 \cdots du\_m.
> \end{aligned}
> $$
>
> 注意，在计算过程中，我们要求 $\varphi\_\alpha$ 和 $\varphi\_\beta$ 是同向的参数表示。
>
> 以上说明了当 $\omega$ 的支集含于某个局部坐标邻域中时，$\omega$ 在 $M$ 上的积分的定义是恰当的。利用多重积分的性质易见，如果 $\omega = \sum\_{i=1}^k \omega\_i$，且 $\operatorname{supp} \omega\_i$ 均含于同一局部坐标邻域中，则
>
> $$
> \int\_M \omega = \sum\_{i=1}^k \int\_M \omega\_i.
> $$
>
> (2) 设 $\omega$ 是具有紧支集的 $m$ 次微分形式，取覆盖 $\operatorname{supp} \omega$ 的有限个局部坐标邻域 ${V\_\alpha \cap M}$，设 ${\phi\_\alpha}$ 是从属于这些坐标邻域的单位分解，令
>
> $$
> \int\_M \omega = \sum\_\alpha \int\_M \phi\_\alpha \omega,
> $$
>
> 我们要说明这个定义是恰当的。事实上，如果 ${V\_\beta \cap M}$ 是另一局部坐标覆盖，从属于它的单位分解为 ${\psi\_\beta}$，则
>
> $$
> \int\_M \psi\_\beta \omega = \sum\_\alpha \int\_M \phi\_\alpha \psi\_\beta \omega,
> $$
>
> 这是因为
>
> $$
> \psi\_\beta \omega = \sum\_\alpha \phi\_\alpha \psi\_\beta \omega,
> $$
>
> 且 $\operatorname{supp} \phi\_\alpha \psi\_\beta \omega \subset V\_\beta \cap M$。同理，有
>
> $$
> \int\_M \phi\_\alpha \omega = \sum\_\beta \int\_M \phi\_\alpha \psi\_\beta \omega,
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \sum\_\beta \int\_M \psi\_\beta \omega &= \sum\_\beta \sum\_\alpha \int\_M \phi\_\alpha \psi\_\beta \omega \\\\
> &= \sum\_\alpha \sum\_\beta \int\_M \phi\_\alpha \psi\_\beta \omega \\\\
> &= \sum\_\alpha \int\_M \phi\_\alpha \omega,
> \end{aligned}
> $$
>
> 这说明 $\omega$ 在 $M$ 上的积分的确是定义好的。

这种微分形式在曲面上的积分就是前一章的第二型曲线积分和曲面积分的推广，它具有以下性质：

> * 微分形式的积分依赖于曲面的定向。如果用 $-M$ 表示相反定向的同一曲面，则
>
> $$
> \int\_{-M} \omega = -\int\_M \omega.
> $$
>
> * 微分形式的积分具有线性性。即如果 $\omega$, $\eta$ 具有紧支集，$\lambda$, $\mu \in \mathbb{R}$，则
>
> $$
> \int\_M (\lambda \omega + \mu \eta) = \lambda \int\_M \omega + \mu \int\_M \eta.
> $$
>
> * 如果 $\operatorname{supp} \omega \subset V \cap M$，其中 $V \cap M$ 为局部坐标邻域，$\varphi$ 为定向参数表示，则
>
> $$
> \int\_U \varphi^\* \omega = \int\_M \omega.
> $$

### · Stokes

下面的定理是微积分基本公式的一般情形，一般称为 Stokes 公式。

**定理1** (Stokes)

> 设 $M$ 为定向带边 $m$ 维曲面，$\omega$ 是 $M$ 上具有紧支集的 $m-1$ 次微分形式，则
>
> $$
> \int\_M d\omega = \int\_{\partial M} \omega,
> $$
>
> 其中 $\partial M$ 具有诱导定向。

/proof/

> 因为要证明的等式两边关于 $\omega$ 是线性的，因此，通过使用单位分解，不妨设 $\omega$ 的支集含于 $M$ 的某个局部坐标邻域中。根据微分形式积分的定义和上面积分性质的第三条，利用拉回映射和外微分运算的可交换性，我们不妨假设 $M = \mathbb{H}^m$，且定向为标准定向，$\omega$ 是 $\mathbb{H}^m$ 上具有紧支集的 $m-1$ 次微分形式，$\partial M = \partial \mathbb{H}^m$ 具有诱导定向。
>
> $m-1$ 次微分形式 $\omega$ 在 $\mathbb{H}^m$ 的标准直角坐标 ${u\_1, \cdots, u\_m}$ 下可表示为
>
> $$
> \omega = \sum\_{i=1}^m (-1)^{i-1} a\_i du\_1 \wedge \cdots \wedge \widehat{du\_i} \wedge \cdots \wedge du\_m,
> $$
>
> 其中 $a\_i$ 是 $\mathbb{H}^m$ 上具有紧支集的函数。于是
>
> $$
> d\omega = \left(\sum\_{i=1}^m \frac{\partial a\_i}{\partial u\_i}\right) du\_1 \wedge \cdots \wedge du\_m.
> $$
>
> 我们有
>
> $$
> \begin{aligned}
> \int\_{\mathbb{H}^m} d\omega &= \sum\_{i=1}^m \int\_{\mathbb{H}^m} \frac{\partial a\_i}{\partial u\_i} du\_1 \cdots du\_m \\\\
> &= \sum\_{i=1}^{m-1} \int\_0^{+\infty} du\_m \int\_{\mathbb{R}^{m-1}} \frac{\partial a\_i}{\partial u\_i} du\_1 \cdots du\_{m-1} \\\\
> &+ \int\_{\mathbb{R}^{m-1}} du\_1 \cdots du\_{m-1} \int\_0^{+\infty} \frac{\partial a\_m}{\partial u\_m} du\_m \\\\
> &= \sum\_{i=1}^{m-1} \int\_0^{+\infty} du\_m \int\_{\mathbb{R}^{m-2}} a\_i \Big|*{u\_i = -\infty}^{u\_i = +\infty} du\_1 \cdots \widehat{du\_i} \cdots du*{m-1} \\\\
> &+ \int\_{\mathbb{R}^{m-1}} a\_m \Big|*{u\_m = 0}^{u\_m = +\infty} du\_1 \cdots du*{m-1} \\\\
> &= -\int\_{\partial \mathbb{H}^m} a\_m(u\_1, \cdots, u\_{m-1}, 0) du\_1 \cdots du\_{m-1}.
> \end{aligned}
> $$
>
> 由于 $u\_m|\_{\partial \mathbb{H}^m} \equiv 0$，故
>
> $$
> \omega|*{\partial \mathbb{H}^m} = (-1)^{m-1} a\_m(u\_1, \cdots, u*{m-1}, 0) du\_1 \wedge \cdots \wedge du\_{m-1},
> $$
>
> 由于 $\partial \mathbb{H}^m$ 的诱导定向由坐标 ${(-1)^m u\_1, u\_2, \cdots, u\_{m-1}}$ 给出，故
>
> $$
> \begin{aligned}
> \int\_{\partial \mathbb{H}^m} \omega &= \int\_{\partial \mathbb{H}^m} (-1)^{m-1} (-1)^m a\_m(u\_1, \cdots, u\_{m-1}, 0) du\_1 \cdots du\_{m-1} \\\\
> &= -\int\_{\partial \mathbb{H}^m} a\_m(u\_1, \cdots, u\_{m-1}, 0) du\_1 \cdots du\_{m-1}.
> \end{aligned}
> $$
>
> 这说明
>
> $$
> \int\_{\mathbb{H}^m} d\omega = \int\_{\partial \mathbb{H}^m} \omega,
> $$
>
> 从而定理得证。

> \[!important]
>
> (1) 当 $M$ 是闭曲面，即边界 $\partial M = \varnothing$ 时，Stokes 积分公式右端为零。
>
> (2) 如果记 $\mathbb{H}^m$ 上的向量场 $X$ 为
>
> $$
> X = (a\_1(u), \cdots, a\_m(u)),
> $$
>
> 其散度 $\operatorname{div} X$ 定义为
>
> $$
> \operatorname{div} X = \sum\_{i=1}^m \frac{\partial a\_i}{\partial u\_i},
> $$
>
> 则当 $X$ 具有紧支集时，Stokes 公式可写为
>
> $$
> \int\_{\mathbb{H}^m} \operatorname{div} X du\_1 \cdots du\_m = \int\_{\partial \mathbb{H}^m} X \cdot (0, \cdots, 0, -1) du\_1 \cdots du\_{m-1},
> $$
>
> 其中 $(0, \cdots, 0, -1)$ 是 $\partial \mathbb{H}^m$ 的单位外法向量。

这个结论可以写成如下的一般形式

### · Gauss-Green

**定理2** (Gauss-Green)

> 设 $D$ 为 $\mathbb{R}^m$ 中的区域，其边界为 $m-1$ 维的超曲面。如果 $X$ 为 $D$ 上具有紧支集的向量场，则
>
> $$
> \int\_D \operatorname{div} X du\_1 \cdots du\_m = \int\_{\partial D} X \cdot \vec{N} d\sigma,
> $$
>
> 其中 $\vec{N}$ 为 $\partial D$ 的单位外法向量。

/proof/

> 我们规定 $D$ 的定向为 $\mathbb{R}^m$ 的标准定向，则 $\partial D$ 的诱导定向决定的法向量是外侧法向量，其面积形式为
>
> $$
> \Omega = \sum\_{i=1}^m (-1)^{i-1} N\_i du\_1 \wedge \cdots \wedge \widehat{du\_i} \wedge \cdots \wedge du\_m,
> $$
>
> 其中 $N\_i$ 为单位外法向量的第 $i$ 个分量。如果定义 $D$ 中的 $m$ 次微分形式 $\omega$ 为
>
> $$
> \omega = \sum\_{i=1}^m (-1)^{i-1} X\_i du\_1 \wedge \cdots \wedge \widehat{du\_i} \wedge \cdots \wedge du\_m,
> $$
>
> 其中 $X\_i$ 为 $X$ 的第 $i$ 个分量，则
>
> $$
> d\omega = \operatorname{div} X du\_1 \wedge \cdots \wedge du\_m,
> $$
>
> 由 Stokes 公式，有
>
> $$
> \int\_D \operatorname{div} X du\_1 \cdots du\_m = \int\_D d\omega = \int\_{\partial D} \omega,
> $$
>
> 作为练习，读者可验证下式成立：
>
> $$
> \omega|\_{\partial D} = X \cdot \vec{N} \Omega,
> $$
>
> 因此
>
> $$
> \int\_D \operatorname{div} X du\_1 \cdots du\_m = \int\_{\partial D} X \cdot \vec{N} \Omega = \int\_{\partial D} X \cdot \vec{N} d\sigma,
> $$
>
> 其中，上式最后的积分是第一型的曲面积分。

**注意**：如果 $M$ 为紧致带边曲面，其面积形式的积分称为 $M$ 的面积，对于可定向曲面，这个定义与前一章中第一型曲面积分中曲面面积的定义是一致的。

/example/  $m-1$ 维球面的面积

> 我们知道，$m-1$ 维单位球面上的面积形式为
>
> $$
> \Omega = \sum\_{i=1}^m (-1)^{i-1} u\_i du\_1 \wedge \cdots \wedge \widehat{du\_i} \wedge \cdots \wedge du\_m,
> $$
>
> 根据 Stokes 公式，有
>
> $$
> \begin{aligned}
> \sigma(S^{m-1}) &= \int\_{S^{m-1}} \Omega = \int\_{B^m} d\Omega \\\\
> &= m \int\_{B^m} du\_1 \wedge \cdots \wedge du\_m = m v(B^m),
> \end{aligned}
> $$
>
> 其中 $B^m$ 是 $m$ 维单位球体，$v(B^m)$ 是其体积。这样我们就又一次得到了球面的面积和球体的体积之间的关系。
