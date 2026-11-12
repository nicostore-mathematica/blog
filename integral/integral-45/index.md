---
url: /integral/integral-45/index.md
---
## Part 3 曲面

当我们提到曲线或者曲面的时候，一般都要指定一个参数表示。现在我们从更加几何化的角度重新描述曲线或曲面。

设 $M \subset \mathbb{R}^n$ 为 $\mathbb{R}^n$ 中的子集。如果任给 $q \in M$，均存在从 $\mathbb{R}^m$ 的开集 $U$ 到 $\mathbb{R}^n$ 的 $C^k$ ($k \geq 1$) 映射 $\varphi: U \to \mathbb{R}^n$ 使得

> (1) $\varphi$ 为单射；(2) $\operatorname{rank} J\varphi = m$；(3) $\varphi(U) = V\_q \cap M$,

其中 $V\_q$ 是 $q$ 在 $\mathbb{R}^n$ 中的一个开邻域，则称 $M$ 为 $\mathbb{R}^n$ 中的一个 $m$ 维的 $C^k$ 正则子流形。

$m=1$ 的情形就是正则曲线，$m=2$ 的情形就是 2 维正则曲面。在不引起混淆的情况下，我们也把 $m$ 维正则子流形称为 $m$ 维（正则）曲面，$m=n-1$ 的情形称为超曲面。

映射 $\varphi$ 称为 $q$ 附近的一个局部参数表示或局部坐标映射，$V\_q \cap M$ 称为 $q$ 的一个局部坐标邻域，它是 $q$ 在 $M$ 中的一个开邻域。

### · 函数的图像

设 $f: U \to \mathbb{R}$ 为 $C^k$ 函数，其中 $U$ 为 $\mathbb{R}^{n-1}$ 中的开集，$f$ 的图像为

$$
\operatorname{graph}(f) = {(x, f(x)) \in \mathbb{R}^n \mid x \in U},
$$

它是 $\mathbb{R}^n$ 中的 $C^k$ 超曲面，这是因为 $\operatorname{graph}(f)$ 有整体的参数表示：

$$
\varphi: U \to \mathbb{R}^n,\quad \varphi(x) = (x, f(x)).
$$

这个例子可以推广。

例如，设 $U$ 为 $\mathbb{R}^m$ 中的开集，$f\_1, \cdots, f\_{n-m}: U \to \mathbb{R}$ 为 $U$ 上的 $n-m$ 个 $C^k$ 函数，则
$$
\operatorname{graph}(f\_1, \cdots, f\_{n-m}) = {(x\_1, \cdots, x\_m, f\_1(x), \cdots, f\_{n-m}(x)) \mid x = (x\_1, \cdots, x\_m) \in U}
$$

是 $\mathbb{R}^n$ 中的 $m$ 维曲面，称为函数 $f\_1, \cdots, f\_{n-m}$ 的（广义）图像。

一般地，一个 $m$ 维正则曲面 $M$ 在任意一点附近总可以看成是某个 $m$ 维子线性空间上的局部图像。

例如，设 $\varphi$ 为 $q$ 附近的局部参数表示，$\varphi(p) = q$。因为 $\operatorname{rank} J\varphi = m$，不妨设
$$
\det \left(\frac{\partial \varphi\_i}{\partial u\_j}\right)\_{m \times m}(p) \neq 0.
$$

记 $v\_i = \varphi\_i(u)$，$i = 1, \cdots, m$。根据逆映射定理，映射 $\phi(u) = (v\_1, \cdots, v\_m)$ 在 $p$ 附近可逆且逆映射 $\phi^{-1}$ 仍为 $C^k$ 映射，因此，$\varphi \circ \phi^{-1}$ 仍为 $q$ 附近的局部参数表示，且

$$
\varphi \circ \phi^{-1}(v\_1, \cdots, v\_m) = (v\_1, \cdots, v\_m, \varphi\_{m+1} \circ \phi^{-1}(v), \cdots, \varphi\_n \circ \phi^{-1}(v)),
$$

即在 $q$ 附近 $M$ 可以表示为函数的广义图像。

### · 局部参数表示

利用曲面的局部图像表示不难看出，对 $q$ 附近的任意两个局部参数表示 $\varphi$ 与 $\psi$，它们之间的转换映射 $\psi^{-1} \circ \varphi$ 是 $\mathbb{R}^m$ 中的开集之间的可逆 $C^k$ 映射。即不同的参数表示之间只相差曲面的重新参数化。

/example/  单位圆周 $S^1$ 的局部参数表示。

> 我们知道，极坐标不能定义在整个圆周上。但是，我们可以用两个局部坐标邻域覆盖 $S^1$：令
>
> $$
> \varphi: (0, 2\pi) \to \mathbb{R}^2,\quad \psi: (\pi, 3\pi) \to \mathbb{R}^2
> $$
>
> 分别定义为
>
> $$
> \varphi(\theta) = (\cos \theta, \sin \theta),\quad \psi(\eta) = (\cos \eta, \sin \eta),
> $$
>
> 则 $\varphi, \psi$ 为局部参数表示，且
>
> $$
> \varphi(0, 2\pi) = S^1 - {(1, 0)},\quad \psi(\pi, 3\pi) = S^1 - {(-1, 0)}.
> $$
>
> 这说明 $S^1$ 为 $\mathbb{R}^2$ 中的正则曲线。

/example/ 单位球面 $S^2$ 的局部参数表示。

> 我们知道，球面极坐标不能定义在整个球面上。不过，我们可以把球面分成 6 部分：
>
> $$
> \begin{aligned}
> &{(x, y, z) \in S^2 \mid z > 0},\ {(x, y, z) \in S^2 \mid z < 0},\ {(x, y, z) \in S^2 \mid y > 0},\\\\
> &{(x, y, z) \in S^2 \mid y < 0},\ {(x, y, z) \in S^2 \mid x > 0},\ {(x, y, z) \in S^2 \mid x < 0},
> \end{aligned}
> $$
>
> 在每一部分上均有参数表示，以 ${(x, y, z) \in S^2 \mid z > 0}$ 为例：
>
> $$
> \varphi: {(x, y) \in \mathbb{R}^2 \mid x^2 + y^2 < 1} \to \mathbb{R}^3,\quad (x, y) \mapsto (x, y, \sqrt{1 - x^2 - y^2}).
> $$
>
> 我们也可以只用两个局部坐标邻域覆盖整个 $S^2$：令
>
> $$
> \varphi\_1: \mathbb{R}^2 \to \mathbb{R}^3,\quad \varphi\_1(u, v) = \left(\frac{2u}{1 + u^2 + v^2},\ \frac{2v}{1 + u^2 + v^2},\ \frac{u^2 + v^2 - 1}{1 + u^2 + v^2}\right).
> $$
>
> 则 $\varphi\_1(\mathbb{R}^2) = S^2 - {(0, 0, 1)}$，从上式还可解得
>
> $$
> u = \frac{x}{1 - z},\quad v = \frac{y}{1 - z},\quad (x, y, z) \in S^2 - {(0, 0, 1)}.
> $$
>
> 类似地，令
>
> $$
> \varphi\_2: \mathbb{R}^2 \to \mathbb{R}^3,\quad \varphi\_2(u, v) = \left(\frac{2u}{1 + u^2 + v^2},\ \frac{2v}{1 + u^2 + v^2},\ \frac{1 - u^2 - v^2}{1 + u^2 + v^2}\right).
> $$
>
> 则 $\varphi\_2(\mathbb{R}^2) = S^2 - {(0, 0, -1)}$，从上式可解得
>
> $$
> u = \frac{x}{1 + z},\quad v = \frac{y}{1 + z},\quad (x, y, z) \in S^2 - {(0, 0, -1)}.
> $$
>
> 总之，球面 $S^2$ 是 $\mathbb{R}^3$ 中的正则曲面。
>
> 在前一节我们讨论了曲面上的微分形式以及外微分运算。
>
> 如果 $\varphi$ 为 $q$ 附近的局部参数表示，则 $\varphi^{-1}$ 是从 $V\_p \cap M$ 到 $\Omega$ 的 $C^k$ 映射，于是 $(\varphi^{-1})^\*du\_i$ ($1 \leq i \leq m$) 为 $M$ 上 $q$ 附近的 1 次微分形式，在不引起混淆的情况下我们简记为 $du\_i$。$q$ 附近的 $s$ 次微分形式均可表示为
> $$
> \omega = \sum\_{1 \leq i\_1 < \cdots < i\_s \leq m} \omega\_{i\_1 \cdots i\_s} du\_{i\_1} \wedge \cdots \wedge du\_{i\_s},
> $$
>
> 其中 $\omega\_{i\_1 \cdots i\_s}$ 为 $q$ 附近的函数。$\omega$ 的外微分可以写为
>
> $$
> d\omega = \sum\_{1 \leq i\_1 < \cdots < i\_s \leq m} d\omega\_{i\_1 \cdots i\_s} \wedge du\_{i\_1} \wedge \cdots \wedge du\_{i\_s},
> $$
>
> 不难验证
>
> $$
> \varphi^\* d\omega = d\varphi^\* \omega,
> $$
>
> 因此 $d\omega$ 的定义与之前一致。

### · 曲线的定向

现在我们进一步讨论曲面的定向。设 $M$ 为 $\mathbb{R}^n$ 中的 $m$ 维正则子流形（曲面）。设 $\varphi\_\alpha: U\_\alpha \to \mathbb{R}^n$ 和 $\varphi\_\beta: U\_\beta \to \mathbb{R}^n$ 均为 $M$ 的局部参数表示。如果转换映射
$$
\varphi\_\beta^{-1} \circ \varphi\_\alpha: \varphi\_\alpha^{-1}(V\_\alpha \cap V\_\beta \cap M) \to \varphi\_\beta^{-1}(V\_\alpha \cap V\_\beta \cap M)
$$

满足条件

$$
\det J(\varphi\_\beta^{-1} \circ \varphi\_\alpha) > 0,
$$

则称 $\varphi\_\alpha$ 和 $\varphi\_\beta$ 为同向的局部参数表示。如果存在 $M$ 的局部坐标邻域组成的开覆盖 ${V\_\alpha \cap M}$，使得其局部参数表示都是同向的，则称 $M$ 为可定向曲面，${V\_\alpha \cap M}$ 称为 $M$ 的定向坐标覆盖，有时简称定向。

如果两个定向坐标覆盖中的参数表示都是同向的，则我们不区分这两个定向。

前面的例子中，函数的图像、圆周 $S^1$ 以及球面 $S^2$ 都是可定向的正则子流形。对于超曲面来说，有一个简单的办法判断它是否可定向。

**命题1**.

> $\mathbb{R}^n$ 中的超曲面 $M$ 可定向当且仅当 $M$ 上存在处处非零的连续法向量场。

/proof/

> 设 $M$ 为可定向的超曲面，其定向坐标覆盖为 ${V\_\alpha \cap M}$，相应的局部参数表示为 $\varphi\_\alpha$。记
>
> $$
> \varphi\_\alpha(u\_1, \cdots, u\_{n-1}) = (x\_\alpha^1(u\_1, \cdots, u\_{n-1}), \cdots, x\_\alpha^n(u\_1, \cdots, u\_{n-1})).
> $$
>
> 设 $q = \varphi\_\alpha(p)$，在 $q$ 处 $M$ 的法向量为 $\vec{N}\_\alpha(q) = (N\_1, \cdots, N\_n)$，其中
>
> $$
> N\_i = (-1)^{i-1} \frac{\partial(x\_\alpha^1, \cdots, x\_\alpha^{i-1}, x\_\alpha^{i+1}, \cdots, x\_\alpha^n)}{\partial(u\_1, \cdots, u\_{n-1})}(p),
> $$
>
> 在另一同向的参数表示 $\varphi\_\beta$ 下，$q$ 处的法向量 $N\_\beta(q)$ 满足关系
>
> $$
> \vec{N}*\alpha(q) = \det J(\varphi*\beta^{-1} \circ \varphi\_\alpha) \cdot \vec{N}\_\beta(q),
> $$
>
> 因此，单位法向量场
>
> $$
> \vec{n} = \vec{N}*\alpha / |\vec{N}*\alpha|
> $$
>
> 是曲面 $M$ 上定义确切的处处非零的连续法向量场。
>
> 反之，如果 $M$ 上存在处处非零的连续法向量场 $\vec{N}$，则我们这样选取 $M$ 的局部坐标覆盖：任给 $p \in M$，取 $p$ 的连通局部坐标邻域 $V\_p \cap M$，相应的局部参数表示 $\varphi\_p$ 定义了局部的单位法向量场 $\vec{n}\_p$，于是存在 $V\_p \cap M$ 中的连续函数 $f\_p$，使得
>
> $$
> \vec{N} = f\_p \vec{n}\_p,
> $$
>
> $f\_p$ 处处非零，因此根据连续函数的介值定理，$f\_p$ 恒为正或恒为负。通过适当调整参数，我们可假设 $f\_p$ 总是正的。不难验证这样得到的坐标覆盖是一个定向的局部坐标覆盖，称为由法向量场决定的定向。
>
> 设 $M$ 为可定向的超曲面，$\varphi$ 为一个定向局部参数表示，此参数表示的局部法向量场为 $\vec{N}$，定义 $M$ 上的一个 $n-1$ 次微分形式 $\Omega$ 如下
>
> $$
> \Omega = |\vec{N}| du\_1 \wedge \cdots \wedge du\_{n-1},
> $$
>
> 这个微分形式与定向局部参数的选取无关，因此是 $M$ 上整体定义的一个处处非零的 $n-1$ 次微分形式，称为 $M$ 的面积形式。面积形式也可以改写为下面较为对称的形式
>
> $$
> \Omega = |\vec{N}|^{-1} \sum\_{i=1}^n (-1)^{i-1} N\_i dx\_1 \wedge \cdots \wedge dx\_{i-1} \wedge dx\_{i+1} \wedge \cdots \wedge dx\_n.
> $$
>
> 和上述命题的证明类似，可以证明，$\mathbb{R}^n$ 中的超曲面 $M$ 可定向当且仅当 $M$ 上存在处处非零的 $n-1$ 次（连续）微分形式。这个结果实际上可推广至任意维数的正则曲面。

**命题2**.

> 设 $M$ 为 $\mathbb{R}^n$ 中的 $m$ 维正则曲面，则 $M$ 可定向当且仅当 $M$ 上存在处处非零的 $m$ 次微分形式。

/proof/

> 设 $M$ 可定向，设 $V \cap M$ 为一个定向坐标邻域，相应的局部参数表示为 $\varphi$。定义局部的 $m$ 次微分形式 $\Omega$ 为
>
> $$
> \Omega = \sqrt{\det\[(J\varphi)^T \cdot J\varphi]} \cdot du\_1 \wedge \cdots \wedge du\_m,
> $$
>
> 则 $\Omega$ 不依赖于定向局部参数的选取，因而 $\Omega$ 可以整体定义在 $M$ 上，是 $M$ 上处处非零的 $m$ 次微分形式，称为 $M$ 的面积形式。

> \[!important]
>
> **注意**. 如果参数表示 $\varphi$ 写为
>
> $$
> \varphi(u\_1, \cdots, u\_m) = (x\_1(u\_1, \cdots, u\_m), \cdots, x\_n(u\_1, \cdots, u\_m)),
> $$
>
> 则 $M$ 的面积形式可以写为
>
> $$
> \Omega = \left(\det\[(J\varphi)^T \cdot J\varphi]\right)^{-1/2} \sum\_{1 \leq i\_1 < \cdots < i\_m \leq n} \frac{\partial(x\_{i\_1}, \cdots, x\_{i\_m})}{\partial(u\_1, \cdots, u\_m)} dx\_{i\_1} \wedge \cdots \wedge dx\_{i\_m}.
> $$

/example/

设 $f: \mathbb{R}^n \to \mathbb{R}$ 为 $C^k$ ($k \geq 1$) 映射，$c \in \mathbb{R}$。如果 $f^{-1}(c) \neq \varnothing$，且对任意 $p \in f^{-1}(c)$，$\nabla f(p) \neq 0$，则 $M = f^{-1}(c)$ 为 $\mathbb{R}^n$ 中的可定向超曲面。

> 设 $x^0 = (x\_1^0, \cdots, x\_n^0) \in M$，由于 $\nabla f(x^0) \neq 0$，不妨设 $\frac{\partial f}{\partial x\_n}(x^0) \neq 0$。根据隐函数定理，在 $(x\_1^0, \cdots, x\_{n-1}^0)$ 附近 $f(x) = c$ 的解可写为
>
> $$
> (x\_1, \cdots, x\_{n-1}, g(x\_1, \cdots, x\_{n-1}),
> $$
>
> 其中 $g$ 为 $C^k$ 函数。因此，在 $x^0$ 附近 $M = f^{-1}(c)$ 为函数图像，从而是正则超曲面。
>
> 在 $M$ 中任取曲线 $\sigma(t)$，则由 $f(\sigma(t)) = c$ 知
>
> $$
> \nabla f(\sigma(t)) \cdot \sigma'(t) = 0,
> $$
>
> 这表明 $\nabla f$ 限制在 $M$ 上是其法向量场，因为 $\nabla f$ 在 $M$ 上处处非零，根据命题1即知 $M$ 为可定向的超曲面。

> \[!important]
>
> (1) 法向量场 $\nabla f$ 所决定的定向定义了 $f^{-1}(c)$ 上的面积形式 $\Omega$，它可以写为
>
> $$
> \Omega = |\nabla f|^{-1} \sum\_{i=1}^n (-1)^{i-1} \frac{\partial f}{\partial x\_i} dx\_1 \wedge \cdots \wedge dx\_{i-1} \wedge dx\_{i+1} \wedge \cdots \wedge dx\_n.
> $$
>
> (2) 本例可作高维推广：设 $f: \mathbb{R}^n \to \mathbb{R}^m$ 为 $C^k$ ($k \geq 1$) 映射，$c \in \mathbb{R}^m$。如果 $f^{-1}(c) \neq \varnothing$，且对任意 $p \in f^{-1}(c)$，$\operatorname{rank} Jf(p) = m$，则 $M = f^{-1}(c)$ 为 $\mathbb{R}^n$ 中的可定向 $n-m$ 维曲面，其面积形式为
>
> $$
> \begin{aligned}
> \Omega &= \left(\det\[Jf \cdot (Jf)^T]\right)^{-\frac{1}{2}} \sum\_{1 \leq i\_1 < \cdots < i\_m \leq n} (-1)^{i\_1 + \cdots + i\_m + m(m+1)/2} \frac{\partial(f\_1, \cdots, f\_m)}{\partial(x\_{i\_1}, \cdots, x\_{i\_m})} \\\\
> &\times dx\_1 \wedge \cdots \widehat{dx\_{i\_1}} \wedge \cdots \wedge \widehat{dx\_{i\_m}} \wedge \cdots \wedge dx\_n,
> \end{aligned}
> $$
>
> 其中，$f\_i$ 表示映射 $f$ 的第 $i$ 个分量，$\widehat{dx\_i}$ 表示去掉 $dx\_i$。
>
> 作为例子，考虑函数 $f(x) = x\_1^2 + \cdots + x\_n^2$，则当 $R > 0$ 时，$f^{-1}(R^2)$ 为 $\mathbb{R}^n$ 中可定向的超曲面，这就是半径为 $R$ 的 $n-1$ 维单位球面，其面积形式为
>
> $$
> \Omega = \frac{1}{R} \sum\_{i=1}^n (-1)^{i-1} x\_i dx\_1 \wedge \cdots \wedge dx\_{i-1} \wedge dx\_{i+1} \wedge \cdots \wedge dx\_n.
> $$

### · 有边界正则曲面

下面我们讨论带有边界的正则曲面。记
$$
\mathbb{H}^m = {(x\_1, \cdots, x\_m) \in \mathbb{R}^m \mid x\_m \geq 0},
$$

称 $\mathbb{H}^m$ 为 $m$ 维上半欧氏空间，其边界 $\partial \mathbb{H}^m$ 为 $m-1$ 维欧氏空间 $\mathbb{R}^{m-1}$。

设 $M \subset \mathbb{R}^n$ 为 $\mathbb{R}^n$ 中的子集。如果任给 $q \in M$，均存在从 $\mathbb{H}^m$ 的开集 $U$ 到 $\mathbb{R}^n$ 的 $C^k$ ($k \geq 1$) 映射 $\varphi: U \to \mathbb{R}^n$ 使得

$$
(1)\ \varphi\ \text{is injection};\quad (2)\ \operatorname{rank} J\varphi = m;\quad (3)\ \varphi(U) = V\_q \cap M,
$$

其中 $V\_q$ 是 $q$ 在 $\mathbb{R}^n$ 中的一个开邻域，则称 $M$ 为 $\mathbb{R}^n$ 中的一个 $m$ 维的 $C^k$ 带边正则子流形，或称带边曲面。为了区别起见，我们把以前定义的曲面称为无边曲面。

利用逆映射定理可以证明，如果 $q \in \varphi(U \cap \partial \mathbb{H}^m)$，则在另一局部参数表示下，$q$ 也是某个边界点的像。这样的点 $q$ 称为边界点，边界点构成的子集称为带边曲面 $M$ 的边界，记为 $\partial M$。如果 $V\_q \cap M$ 是边界点 $q \in \partial M$ 附近的局部坐标邻域，$\varphi$ 为局部参数表示，则 $\varphi$ 限制在 $U \cap \partial \mathbb{H}^m$ 就得到边界的一个局部参数表示，这说明 $\partial M$ 是 $m-1$ 维的（无边）正则曲面。

> \[!note]
>
> 下面是一些带边正则子流形的例子：$m=1$ 时，闭区间、开半开闭区间、平面上的射线都是带边的曲线；$m=2$ 时，平面上闭的圆盘、环形区域、三维欧氏空间中的上半单位球面等都是 2 维带边曲面；$m=3$ 时，三维欧氏空间中的闭球、实心轮胎等都是 3 维带边正则子流形。当然，上半欧氏空间 $\mathbb{H}^m$ 是标准的 $m$ 维带边曲面，其边界为 $m-1$ 维欧氏空间。
>
> 带边曲面可以象无边曲面一样讨论定向。需要注意的是，并非所有的曲面都是可以定向的，Möbius 带就是一个有名的不可定向的（带边）曲面：将一个长方形的纸条的一对边扭转 180 度后粘合起来得到的曲面称为 Möbius 带，其边界是一条连通的简单闭曲线（本质上是圆周）。Möbius 带不可定向的原因是其单位法向量沿原纸条的中心线移动一圈后方向正好变反了。

**命题3**.

> 设 $M$ 为可定向的带边曲面，则 $\partial M$ 为可定向无边曲面。

/proof/

> 我们将证明，将 $M$ 的定向参数表示限制在边界上就是 $\partial M$ 的定向参数表示。为此，设 $\varphi$ 和 $\psi$ 为 $M$ 的两个同向参数表示，它们之间的转换映射记为
>
> $$
> y = \psi^{-1} \circ \varphi(x),\quad y\_i = y\_i(x\_1, \cdots, x\_m),\quad i = 1, \cdots, m.
> $$
>
> 转换映射将边界映为边界，根据带边曲面的定义，有
>
> $$
> y\_m(x) \geq 0,\quad y\_m(x\_1, \cdots, x\_{m-1}, 0) = 0.
> $$
>
> 上式表明
>
> $$
> \frac{\partial y\_m}{\partial x\_i}(x\_1, \cdots, x\_{m-1}, 0) = 0,\quad i = 1, \cdots, m-1, \tag{1}
> $$
>
> 且
>
> $$
> \frac{\partial y\_m}{\partial x\_m}(x\_1, \cdots, x\_{m-1}, 0) = \lim\_{x\_m \to 0^+} \frac{y\_m(x) - 0}{x\_m - 0} \geq 0. \tag{2}
> $$
>
> 由 (1) 得
>
> $$
> \det J(\psi^{-1} \circ \varphi)(x\_1, \cdots, x\_{m-1}, 0) = \det \left(\frac{\partial y\_i}{\partial x\_i}\right)\_{(m-1) \times (m-1)} \cdot \frac{\partial y\_m}{\partial x\_m}.
> $$
>
> 再由 (2) 以及 $\varphi$ 和 $\psi$ 同向即知
>
> $$
> \det \left(\frac{\partial y\_i}{\partial x\_i}\right)*{(m-1) \times (m-1)}(x\_1, \cdots, x*{m-1}, 0) > 0,
> $$
>
> 即 $\varphi$ 和 $\psi$ 在边界上的限制是 $\partial M$ 的同向参数表示。

利用这个命题，我们可以如下定义边界 $\partial M$ 上的诱导定向：如果 $m$ 为偶数，则将 $M$ 的定向参数表示限制在边界上就是 $\partial M$ 的定向参数表示，它所决定的定向为诱导定向；如果 $m$ 为奇数，将 $M$ 的定向参数表示限制在边界上得到 $\partial M$ 的定向参数表示，与此相反的定向为诱导定向。

作为例子，$\mathbb{H}^m$ 的标准直角坐标 ${x\_1, \cdots, x\_m}$ 给出了上半欧氏空间的标准定向，它在 $\partial \mathbb{H}^m$ 上的诱导定向则由坐标 ${(-1)^m x\_1, x\_2, \cdots, x\_{m-1}}$ 给出。

最后，我们介绍非常有用的**单位分解**的技巧。所谓单位分解，就是将 1 分解为若干光滑函数的和，要求这些光滑函数具有紧支集。其中，函数 $f$ 的支集 $\operatorname{supp} f$ 定义为

$$
\operatorname{supp} f = \overline{{x \mid f(x) \neq 0}}.
$$

在之前我们构造了 $\mathbb{R}$ 上的一个光滑的鼓包函数 $\phi$，满足以下条件：

$$
\phi(x) = 1,\quad x \in \[-1/2, 1/2];\quad 0 < \phi(x) < 1,\quad 1/2 < |x| < 1;\quad \phi(x) = 0,\quad |x| \geq 1.
$$
**定理4**.

> 设 $M$ 为 $\mathbb{R}^n$ 中的紧致集合，${V\_\alpha}$ 为 $M$ 的有限开覆盖。则存在 $\mathbb{R}^n$ 中包含 $M$ 的开集 $V$，以及 $V$ 中定义的光滑函数 ${\phi\_\alpha}$，使得
>
> $$
> \sum\_\alpha \phi\_\alpha = 1,\quad \operatorname{supp} \phi\_\alpha \subset V\_\alpha.
> $$
>
> ${\phi\_\alpha}$ 称为从属于开覆盖 ${V\_\alpha}$ 的一个单位分解。

/proof/

> 任取 $q \in M$，则存在 $\alpha$，使得 $q \in V\_\alpha$。取 $\varepsilon\_q > 0$，使得 $B\_{2\varepsilon\_q}(q) \subset V\_\alpha$。于是 ${B\_{\varepsilon\_q/2}(q)}*{q \in M}$ 组成了 $M$ 的一个开覆盖，因为 $M$ 为紧致集合，故存在有限子覆盖，记为 ${B*{\varepsilon\_i/2}(q\_i)}\_{i=1}^k$。令
>
> $$
> V = \bigcup\_{i=1}^k B\_{\varepsilon\_i}(q\_i),
> $$
>
> 则 $V$ 为 $M$ 的一个开邻域。
>
> 对于 $1 \leq i \leq k$，令
>
> $$
> \varphi(x) = \sum\_{i=1}^k \phi\left(\frac{|x - q\_i|}{\varepsilon\_i}\right),\quad x \in \mathbb{R}^n,
> $$
>
> 其中 $\phi$ 为上面的鼓包函数，则 $\varphi$ 为 $\mathbb{R}^n$ 上的光滑函数，且根据 $\phi$ 的定义可知
>
> $$
> \varphi(x) > 0,\quad \forall\ x \in V.
> $$
>
> 令
>
> $$
> \phi\_i(x) = \frac{1}{\varphi(x)} \phi\left(\frac{|x - q\_i|}{\varepsilon\_i}\right),\quad x \in V,
> $$
>
> 则 $\phi\_i$ 为 $V$ 上的光滑函数，且
>
> $$
> \sum\_{i=1}^k \phi\_i(x) = 1,\quad x \in V.
> $$
>
> 根据 $\phi$ 的性质，有
>
> $$
> \operatorname{supp} \phi\_i \subset \overline{B\_{\varepsilon\_i}(q\_i)} \subset B\_{2\varepsilon\_i}(q\_i),\quad i = 1, \cdots, k.
> $$
>
> 将支集含于 $V\_\alpha$ 的那些函数 $\phi\_i$ 的和记为 $\phi\_\alpha$（不重复求和），则 ${\phi\_\alpha}$ 为满足定理要求的单位分解。
