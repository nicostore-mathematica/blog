---
title: Chapter 24 微分形式积分
permalink: /integral/integral-24/
createTime: 2025/12/31 00:10:34
---

## Part 1 曲面

当我们提到曲线或者曲面的时候，一般都要指定一个参数表示。现在我们从更加几何化的角度重新描述曲线或曲面。

设 $M \subset \mathbb{R}^n$ 为 $\mathbb{R}^n$ 中的子集。如果任给 $q \in M$，均存在从 $\mathbb{R}^m$ 的开集 $U$ 到 $\mathbb{R}^n$ 的 $C^k$ ($k \geq 1$) 映射 $\varphi: U \to \mathbb{R}^n$ 使得

> (1) $\varphi$ 为单射；(2) $\operatorname{rank} J\varphi = m$；(3) $\varphi(U) = V_q \cap M$,

其中 $V_q$ 是 $q$ 在 $\mathbb{R}^n$ 中的一个开邻域，则称 $M$ 为 $\mathbb{R}^n$ 中的一个 $m$ 维的 $C^k$ 正则子流形。

$m=1$ 的情形就是正则曲线，$m=2$ 的情形就是 2 维正则曲面。在不引起混淆的情况下，我们也把 $m$ 维正则子流形称为 $m$ 维（正则）曲面，$m=n-1$ 的情形称为超曲面。

映射 $\varphi$ 称为 $q$ 附近的一个局部参数表示或局部坐标映射，$V_q \cap M$ 称为 $q$ 的一个局部坐标邻域，它是 $q$ 在 $M$ 中的一个开邻域。

### · 函数的图像

设 $f: U \to \mathbb{R}$ 为 $C^k$ 函数，其中 $U$ 为 $\mathbb{R}^{n-1}$ 中的开集，$f$ 的图像为

$$
\operatorname{graph}(f) = \{(x, f(x)) \in \mathbb{R}^n \mid x \in U\},
$$

它是 $\mathbb{R}^n$ 中的 $C^k$ 超曲面，这是因为 $\operatorname{graph}(f)$ 有整体的参数表示：

$$
\varphi: U \to \mathbb{R}^n,\quad \varphi(x) = (x, f(x)).
$$

这个例子可以推广。

例如，设 $U$ 为 $\mathbb{R}^m$ 中的开集，$f_1, \cdots, f_{n-m}: U \to \mathbb{R}$ 为 $U$ 上的 $n-m$ 个 $C^k$ 函数，则
$$
\operatorname{graph}(f_1, \cdots, f_{n-m}) = \{(x_1, \cdots, x_m, f_1(x), \cdots, f_{n-m}(x)) \mid x = (x_1, \cdots, x_m) \in U\}
$$

是 $\mathbb{R}^n$ 中的 $m$ 维曲面，称为函数 $f_1, \cdots, f_{n-m}$ 的（广义）图像。

一般地，一个 $m$ 维正则曲面 $M$ 在任意一点附近总可以看成是某个 $m$ 维子线性空间上的局部图像。

例如，设 $\varphi$ 为 $q$ 附近的局部参数表示，$\varphi(p) = q$。因为 $\operatorname{rank} J\varphi = m$，不妨设
$$
\det \left(\frac{\partial \varphi_i}{\partial u_j}\right)_{m \times m}(p) \neq 0.
$$

记 $v_i = \varphi_i(u)$，$i = 1, \cdots, m$。根据逆映射定理，映射 $\phi(u) = (v_1, \cdots, v_m)$ 在 $p$ 附近可逆且逆映射 $\phi^{-1}$ 仍为 $C^k$ 映射，因此，$\varphi \circ \phi^{-1}$ 仍为 $q$ 附近的局部参数表示，且

$$
\varphi \circ \phi^{-1}(v_1, \cdots, v_m) = (v_1, \cdots, v_m, \varphi_{m+1} \circ \phi^{-1}(v), \cdots, \varphi_n \circ \phi^{-1}(v)),
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
> \varphi(0, 2\pi) = S^1 - \{(1, 0)\},\quad \psi(\pi, 3\pi) = S^1 - \{(-1, 0)\}.
> $$
>
> 这说明 $S^1$ 为 $\mathbb{R}^2$ 中的正则曲线。

/example/ 单位球面 $S^2$ 的局部参数表示。

> 我们知道，球面极坐标不能定义在整个球面上。不过，我们可以把球面分成 6 部分：
>
> $$
> \begin{aligned}
> &\{(x, y, z) \in S^2 \mid z > 0\},\ \{(x, y, z) \in S^2 \mid z < 0\},\ \{(x, y, z) \in S^2 \mid y > 0\},\\\\
> &\{(x, y, z) \in S^2 \mid y < 0\},\ \{(x, y, z) \in S^2 \mid x > 0\},\ \{(x, y, z) \in S^2 \mid x < 0\},
> \end{aligned}
> $$
>
> 在每一部分上均有参数表示，以 $\{(x, y, z) \in S^2 \mid z > 0\}$ 为例：
>
> $$
> \varphi: \{(x, y) \in \mathbb{R}^2 \mid x^2 + y^2 < 1\} \to \mathbb{R}^3,\quad (x, y) \mapsto (x, y, \sqrt{1 - x^2 - y^2}).
> $$
>
> 我们也可以只用两个局部坐标邻域覆盖整个 $S^2$：令
>
> $$
> \varphi_1: \mathbb{R}^2 \to \mathbb{R}^3,\quad \varphi_1(u, v) = \left(\frac{2u}{1 + u^2 + v^2},\ \frac{2v}{1 + u^2 + v^2},\ \frac{u^2 + v^2 - 1}{1 + u^2 + v^2}\right).
> $$
>
> 则 $\varphi_1(\mathbb{R}^2) = S^2 - \{(0, 0, 1)\}$，从上式还可解得
>
> $$
> u = \frac{x}{1 - z},\quad v = \frac{y}{1 - z},\quad (x, y, z) \in S^2 - \{(0, 0, 1)\}.
> $$
>
> 类似地，令
>
> $$
> \varphi_2: \mathbb{R}^2 \to \mathbb{R}^3,\quad \varphi_2(u, v) = \left(\frac{2u}{1 + u^2 + v^2},\ \frac{2v}{1 + u^2 + v^2},\ \frac{1 - u^2 - v^2}{1 + u^2 + v^2}\right).
> $$
>
> 则 $\varphi_2(\mathbb{R}^2) = S^2 - \{(0, 0, -1)\}$，从上式可解得
>
> $$
> u = \frac{x}{1 + z},\quad v = \frac{y}{1 + z},\quad (x, y, z) \in S^2 - \{(0, 0, -1)\}.
> $$
>
> 总之，球面 $S^2$ 是 $\mathbb{R}^3$ 中的正则曲面。
>
> 在前一节我们讨论了曲面上的微分形式以及外微分运算。
>
> 如果 $\varphi$ 为 $q$ 附近的局部参数表示，则 $\varphi^{-1}$ 是从 $V_p \cap M$ 到 $\Omega$ 的 $C^k$ 映射，于是 $(\varphi^{-1})^*du_i$ ($1 \leq i \leq m$) 为 $M$ 上 $q$ 附近的 1 次微分形式，在不引起混淆的情况下我们简记为 $du_i$。$q$ 附近的 $s$ 次微分形式均可表示为
> $$
> \omega = \sum_{1 \leq i_1 < \cdots < i_s \leq m} \omega_{i_1 \cdots i_s} du_{i_1} \wedge \cdots \wedge du_{i_s},
> $$
>
> 其中 $\omega_{i_1 \cdots i_s}$ 为 $q$ 附近的函数。$\omega$ 的外微分可以写为
>
> $$
> d\omega = \sum_{1 \leq i_1 < \cdots < i_s \leq m} d\omega_{i_1 \cdots i_s} \wedge du_{i_1} \wedge \cdots \wedge du_{i_s},
> $$
>
> 不难验证
>
> $$
> \varphi^* d\omega = d\varphi^* \omega,
> $$
>
> 因此 $d\omega$ 的定义与之前一致。
>

### · 曲线的定向

现在我们进一步讨论曲面的定向。设 $M$ 为 $\mathbb{R}^n$ 中的 $m$ 维正则子流形（曲面）。设 $\varphi_\alpha: U_\alpha \to \mathbb{R}^n$ 和 $\varphi_\beta: U_\beta \to \mathbb{R}^n$ 均为 $M$ 的局部参数表示。如果转换映射
$$
\varphi_\beta^{-1} \circ \varphi_\alpha: \varphi_\alpha^{-1}(V_\alpha \cap V_\beta \cap M) \to \varphi_\beta^{-1}(V_\alpha \cap V_\beta \cap M)
$$

满足条件

$$
\det J(\varphi_\beta^{-1} \circ \varphi_\alpha) > 0,
$$

则称 $\varphi_\alpha$ 和 $\varphi_\beta$ 为同向的局部参数表示。如果存在 $M$ 的局部坐标邻域组成的开覆盖 $\{V_\alpha \cap M\}$，使得其局部参数表示都是同向的，则称 $M$ 为可定向曲面，$\{V_\alpha \cap M\}$ 称为 $M$ 的定向坐标覆盖，有时简称定向。

如果两个定向坐标覆盖中的参数表示都是同向的，则我们不区分这两个定向。

前面的例子中，函数的图像、圆周 $S^1$ 以及球面 $S^2$ 都是可定向的正则子流形。对于超曲面来说，有一个简单的办法判断它是否可定向。

**命题1**.

> $\mathbb{R}^n$ 中的超曲面 $M$ 可定向当且仅当 $M$ 上存在处处非零的连续法向量场。

/proof/

> 设 $M$ 为可定向的超曲面，其定向坐标覆盖为 $\{V_\alpha \cap M\}$，相应的局部参数表示为 $\varphi_\alpha$。记
>
> $$
> \varphi_\alpha(u_1, \cdots, u_{n-1}) = (x_\alpha^1(u_1, \cdots, u_{n-1}), \cdots, x_\alpha^n(u_1, \cdots, u_{n-1})).
> $$
>
> 设 $q = \varphi_\alpha(p)$，在 $q$ 处 $M$ 的法向量为 $\vec{N}_\alpha(q) = (N_1, \cdots, N_n)$，其中
>
> $$
> N_i = (-1)^{i-1} \frac{\partial(x_\alpha^1, \cdots, x_\alpha^{i-1}, x_\alpha^{i+1}, \cdots, x_\alpha^n)}{\partial(u_1, \cdots, u_{n-1})}(p),
> $$
>
> 在另一同向的参数表示 $\varphi_\beta$ 下，$q$ 处的法向量 $N_\beta(q)$ 满足关系
>
> $$
> \vec{N}_\alpha(q) = \det J(\varphi_\beta^{-1} \circ \varphi_\alpha) \cdot \vec{N}_\beta(q),
> $$
>
> 因此，单位法向量场
>
> $$
> \vec{n} = \vec{N}_\alpha / \|\vec{N}_\alpha\|
> $$
>
> 是曲面 $M$ 上定义确切的处处非零的连续法向量场。
>
> 反之，如果 $M$ 上存在处处非零的连续法向量场 $\vec{N}$，则我们这样选取 $M$ 的局部坐标覆盖：任给 $p \in M$，取 $p$ 的连通局部坐标邻域 $V_p \cap M$，相应的局部参数表示 $\varphi_p$ 定义了局部的单位法向量场 $\vec{n}_p$，于是存在 $V_p \cap M$ 中的连续函数 $f_p$，使得
>
> $$
> \vec{N} = f_p \vec{n}_p,
> $$
>
> $f_p$ 处处非零，因此根据连续函数的介值定理，$f_p$ 恒为正或恒为负。通过适当调整参数，我们可假设 $f_p$ 总是正的。不难验证这样得到的坐标覆盖是一个定向的局部坐标覆盖，称为由法向量场决定的定向。
>
> 设 $M$ 为可定向的超曲面，$\varphi$ 为一个定向局部参数表示，此参数表示的局部法向量场为 $\vec{N}$，定义 $M$ 上的一个 $n-1$ 次微分形式 $\Omega$ 如下
>
> $$
> \Omega = \|\vec{N}\| du_1 \wedge \cdots \wedge du_{n-1},
> $$
>
> 这个微分形式与定向局部参数的选取无关，因此是 $M$ 上整体定义的一个处处非零的 $n-1$ 次微分形式，称为 $M$ 的面积形式。面积形式也可以改写为下面较为对称的形式
>
> $$
> \Omega = \|\vec{N}\|^{-1} \sum_{i=1}^n (-1)^{i-1} N_i dx_1 \wedge \cdots \wedge dx_{i-1} \wedge dx_{i+1} \wedge \cdots \wedge dx_n.
> $$
>
> 和上述命题的证明类似，可以证明，$\mathbb{R}^n$ 中的超曲面 $M$ 可定向当且仅当 $M$ 上存在处处非零的 $n-1$ 次（连续）微分形式。这个结果实际上可推广至任意维数的正则曲面。

**命题2**. 

> 设 $M$ 为 $\mathbb{R}^n$ 中的 $m$ 维正则曲面，则 $M$ 可定向当且仅当 $M$ 上存在处处非零的 $m$ 次微分形式。

/proof/

> 设 $M$ 可定向，设 $V \cap M$ 为一个定向坐标邻域，相应的局部参数表示为 $\varphi$。定义局部的 $m$ 次微分形式 $\Omega$ 为
>
> $$
> \Omega = \sqrt{\det[(J\varphi)^T \cdot J\varphi]} \cdot du_1 \wedge \cdots \wedge du_m,
> $$
>
> 则 $\Omega$ 不依赖于定向局部参数的选取，因而 $\Omega$ 可以整体定义在 $M$ 上，是 $M$ 上处处非零的 $m$ 次微分形式，称为 $M$ 的面积形式。

> [!important]
>
> **注意**. 如果参数表示 $\varphi$ 写为
>
> $$
> \varphi(u_1, \cdots, u_m) = (x_1(u_1, \cdots, u_m), \cdots, x_n(u_1, \cdots, u_m)),
> $$
>
> 则 $M$ 的面积形式可以写为
>
> $$
> \Omega = \left(\det[(J\varphi)^T \cdot J\varphi]\right)^{-1/2} \sum_{1 \leq i_1 < \cdots < i_m \leq n} \frac{\partial(x_{i_1}, \cdots, x_{i_m})}{\partial(u_1, \cdots, u_m)} dx_{i_1} \wedge \cdots \wedge dx_{i_m}.
> $$

/example/

设 $f: \mathbb{R}^n \to \mathbb{R}$ 为 $C^k$ ($k \geq 1$) 映射，$c \in \mathbb{R}$。如果 $f^{-1}(c) \neq \varnothing$，且对任意 $p \in f^{-1}(c)$，$\nabla f(p) \neq 0$，则 $M = f^{-1}(c)$ 为 $\mathbb{R}^n$ 中的可定向超曲面。

> 设 $x^0 = (x_1^0, \cdots, x_n^0) \in M$，由于 $\nabla f(x^0) \neq 0$，不妨设 $\frac{\partial f}{\partial x_n}(x^0) \neq 0$。根据隐函数定理，在 $(x_1^0, \cdots, x_{n-1}^0)$ 附近 $f(x) = c$ 的解可写为
>
> $$
> (x_1, \cdots, x_{n-1}, g(x_1, \cdots, x_{n-1}),
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

> [!important]
>
> (1) 法向量场 $\nabla f$ 所决定的定向定义了 $f^{-1}(c)$ 上的面积形式 $\Omega$，它可以写为
>
> $$
> \Omega = \|\nabla f\|^{-1} \sum_{i=1}^n (-1)^{i-1} \frac{\partial f}{\partial x_i} dx_1 \wedge \cdots \wedge dx_{i-1} \wedge dx_{i+1} \wedge \cdots \wedge dx_n.
> $$
>
> (2) 本例可作高维推广：设 $f: \mathbb{R}^n \to \mathbb{R}^m$ 为 $C^k$ ($k \geq 1$) 映射，$c \in \mathbb{R}^m$。如果 $f^{-1}(c) \neq \varnothing$，且对任意 $p \in f^{-1}(c)$，$\operatorname{rank} Jf(p) = m$，则 $M = f^{-1}(c)$ 为 $\mathbb{R}^n$ 中的可定向 $n-m$ 维曲面，其面积形式为
>
> $$
> \begin{aligned}
> \Omega &= \left(\det[Jf \cdot (Jf)^T]\right)^{-\frac{1}{2}} \sum_{1 \leq i_1 < \cdots < i_m \leq n} (-1)^{i_1 + \cdots + i_m + m(m+1)/2} \frac{\partial(f_1, \cdots, f_m)}{\partial(x_{i_1}, \cdots, x_{i_m})} \\\\
> &\times dx_1 \wedge \cdots \widehat{dx_{i_1}} \wedge \cdots \wedge \widehat{dx_{i_m}} \wedge \cdots \wedge dx_n,
> \end{aligned}
> $$
>
> 其中，$f_i$ 表示映射 $f$ 的第 $i$ 个分量，$\widehat{dx_i}$ 表示去掉 $dx_i$。
>
> 作为例子，考虑函数 $f(x) = x_1^2 + \cdots + x_n^2$，则当 $R > 0$ 时，$f^{-1}(R^2)$ 为 $\mathbb{R}^n$ 中可定向的超曲面，这就是半径为 $R$ 的 $n-1$ 维单位球面，其面积形式为
>
> $$
> \Omega = \frac{1}{R} \sum_{i=1}^n (-1)^{i-1} x_i dx_1 \wedge \cdots \wedge dx_{i-1} \wedge dx_{i+1} \wedge \cdots \wedge dx_n.
> $$

### · 有边界正则曲面

下面我们讨论带有边界的正则曲面。记
$$
\mathbb{H}^m = \{(x_1, \cdots, x_m) \in \mathbb{R}^m \mid x_m \geq 0\},
$$

称 $\mathbb{H}^m$ 为 $m$ 维上半欧氏空间，其边界 $\partial \mathbb{H}^m$ 为 $m-1$ 维欧氏空间 $\mathbb{R}^{m-1}$。

设 $M \subset \mathbb{R}^n$ 为 $\mathbb{R}^n$ 中的子集。如果任给 $q \in M$，均存在从 $\mathbb{H}^m$ 的开集 $U$ 到 $\mathbb{R}^n$ 的 $C^k$ ($k \geq 1$) 映射 $\varphi: U \to \mathbb{R}^n$ 使得

$$
(1)\ \varphi\ \text{is injection};\quad (2)\ \operatorname{rank} J\varphi = m;\quad (3)\ \varphi(U) = V_q \cap M,
$$

其中 $V_q$ 是 $q$ 在 $\mathbb{R}^n$ 中的一个开邻域，则称 $M$ 为 $\mathbb{R}^n$ 中的一个 $m$ 维的 $C^k$ 带边正则子流形，或称带边曲面。为了区别起见，我们把以前定义的曲面称为无边曲面。

利用逆映射定理可以证明，如果 $q \in \varphi(U \cap \partial \mathbb{H}^m)$，则在另一局部参数表示下，$q$ 也是某个边界点的像。这样的点 $q$ 称为边界点，边界点构成的子集称为带边曲面 $M$ 的边界，记为 $\partial M$。如果 $V_q \cap M$ 是边界点 $q \in \partial M$ 附近的局部坐标邻域，$\varphi$ 为局部参数表示，则 $\varphi$ 限制在 $U \cap \partial \mathbb{H}^m$ 就得到边界的一个局部参数表示，这说明 $\partial M$ 是 $m-1$ 维的（无边）正则曲面。

> [!note]
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
> y = \psi^{-1} \circ \varphi(x),\quad y_i = y_i(x_1, \cdots, x_m),\quad i = 1, \cdots, m.
> $$
>
> 转换映射将边界映为边界，根据带边曲面的定义，有
>
> $$
> y_m(x) \geq 0,\quad y_m(x_1, \cdots, x_{m-1}, 0) = 0.
> $$
>
> 上式表明
>
> $$
> \frac{\partial y_m}{\partial x_i}(x_1, \cdots, x_{m-1}, 0) = 0,\quad i = 1, \cdots, m-1, \tag{1}
> $$
>
> 且
>
> $$
> \frac{\partial y_m}{\partial x_m}(x_1, \cdots, x_{m-1}, 0) = \lim_{x_m \to 0^+} \frac{y_m(x) - 0}{x_m - 0} \geq 0. \tag{2}
> $$
>
> 由 (1) 得
>
> $$
> \det J(\psi^{-1} \circ \varphi)(x_1, \cdots, x_{m-1}, 0) = \det \left(\frac{\partial y_i}{\partial x_i}\right)_{(m-1) \times (m-1)} \cdot \frac{\partial y_m}{\partial x_m}.
> $$
>
> 再由 (2) 以及 $\varphi$ 和 $\psi$ 同向即知
>
> $$
> \det \left(\frac{\partial y_i}{\partial x_i}\right)_{(m-1) \times (m-1)}(x_1, \cdots, x_{m-1}, 0) > 0,
> $$
>
> 即 $\varphi$ 和 $\psi$ 在边界上的限制是 $\partial M$ 的同向参数表示。

利用这个命题，我们可以如下定义边界 $\partial M$ 上的诱导定向：如果 $m$ 为偶数，则将 $M$ 的定向参数表示限制在边界上就是 $\partial M$ 的定向参数表示，它所决定的定向为诱导定向；如果 $m$ 为奇数，将 $M$ 的定向参数表示限制在边界上得到 $\partial M$ 的定向参数表示，与此相反的定向为诱导定向。

作为例子，$\mathbb{H}^m$ 的标准直角坐标 $\{x_1, \cdots, x_m\}$ 给出了上半欧氏空间的标准定向，它在 $\partial \mathbb{H}^m$ 上的诱导定向则由坐标 $\{(-1)^m x_1, x_2, \cdots, x_{m-1}\}$ 给出。

最后，我们介绍非常有用的**单位分解**的技巧。所谓单位分解，就是将 1 分解为若干光滑函数的和，要求这些光滑函数具有紧支集。其中，函数 $f$ 的支集 $\operatorname{supp} f$ 定义为

$$
\operatorname{supp} f = \overline{\{x \mid f(x) \neq 0\}}.
$$

在之前我们构造了 $\mathbb{R}$ 上的一个光滑的鼓包函数 $\phi$，满足以下条件：

$$
\phi(x) = 1,\quad x \in [-1/2, 1/2];\quad 0 < \phi(x) < 1,\quad 1/2 < |x| < 1;\quad \phi(x) = 0,\quad |x| \geq 1.
$$
**定理4**.

> 设 $M$ 为 $\mathbb{R}^n$ 中的紧致集合，$\{V_\alpha\}$ 为 $M$ 的有限开覆盖。则存在 $\mathbb{R}^n$ 中包含 $M$ 的开集 $V$，以及 $V$ 中定义的光滑函数 $\{\phi_\alpha\}$，使得
>
> $$
> \sum_\alpha \phi_\alpha = 1,\quad \operatorname{supp} \phi_\alpha \subset V_\alpha.
> $$
>
> $\{\phi_\alpha\}$ 称为从属于开覆盖 $\{V_\alpha\}$ 的一个单位分解。

/proof/

> 任取 $q \in M$，则存在 $\alpha$，使得 $q \in V_\alpha$。取 $\varepsilon_q > 0$，使得 $B_{2\varepsilon_q}(q) \subset V_\alpha$。于是 $\{B_{\varepsilon_q/2}(q)\}_{q \in M}$ 组成了 $M$ 的一个开覆盖，因为 $M$ 为紧致集合，故存在有限子覆盖，记为 $\{B_{\varepsilon_i/2}(q_i)\}_{i=1}^k$。令
>
> $$
> V = \bigcup_{i=1}^k B_{\varepsilon_i}(q_i),
> $$
>
> 则 $V$ 为 $M$ 的一个开邻域。
>
> 对于 $1 \leq i \leq k$，令
>
> $$
> \varphi(x) = \sum_{i=1}^k \phi\left(\frac{\|x - q_i\|}{\varepsilon_i}\right),\quad x \in \mathbb{R}^n,
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
> \phi_i(x) = \frac{1}{\varphi(x)} \phi\left(\frac{\|x - q_i\|}{\varepsilon_i}\right),\quad x \in V,
> $$
>
> 则 $\phi_i$ 为 $V$ 上的光滑函数，且
>
> $$
> \sum_{i=1}^k \phi_i(x) = 1,\quad x \in V.
> $$
>
> 根据 $\phi$ 的性质，有
>
> $$
> \operatorname{supp} \phi_i \subset \overline{B_{\varepsilon_i}(q_i)} \subset B_{2\varepsilon_i}(q_i),\quad i = 1, \cdots, k.
> $$
>
> 将支集含于 $V_\alpha$ 的那些函数 $\phi_i$ 的和记为 $\phi_\alpha$（不重复求和），则 $\{\phi_\alpha\}$ 为满足定理要求的单位分解。

## Part 2 Stokes 公式

设 $M$ 为定向带边 $m$ 维曲面，其边界 $\partial M$ 具有诱导定向。设 $\omega$ 为 $M$ 上的 $m$ 次微分形式，其支集 $\operatorname{supp} \omega$ 定义为

$$
\operatorname{supp} \omega = \overline{\{x \in M \mid \omega(x) \neq 0\}},
$$

假设 $\operatorname{supp} \omega$ 为紧致集合。下面我们逐步讨论 $\omega$ 在 $M$ 上的积分。

> [!note]
>
> (1). 设 $\operatorname{supp} \omega$ 包含于某个局部坐标邻域 $V_\alpha \cap M$ 中，与定向一致的局部参数表示为
> $$
> \varphi_\alpha: U_\alpha \to \mathbb{R}^n,
> $$
>
> 在这个坐标邻域中，$\omega$ 可以表示为
>
> $$
> \omega = a_\alpha du_1 \wedge \cdots \wedge du_m,
> $$
>
> 其中 $a_\alpha$ 是支集包含在 $V_\alpha \cap M$ 中的函数。我们定义 $\omega$ 在 $M$ 上的积分为
>
> $$
> \int_M \omega = \int_{U_\alpha} a_\alpha \circ \varphi_\alpha(u) du_1 \cdots du_m.
> $$
>
> 我们要说明这个积分与定向参数表示的选取无关。事实上，设 $\operatorname{supp} \omega$ 也含于局部坐标邻域 $V_\beta \cap M$ 中，相应的局部参数表示为
>
> $$
> \varphi_\beta: U_\beta \to \mathbb{R}^n,
> $$
>
> $\omega$ 的局部表示为
>
> $$
> \omega = a_\beta dv_1 \wedge \cdots \wedge dv_m,
> $$
>
> 其中，转换映射 $\varphi_\beta^{-1} \circ \varphi_\alpha$ 记为
>
> $$
> v = \varphi_\beta^{-1} \circ \varphi_\alpha(u),\quad u \in \varphi_\alpha^{-1}(V_\alpha \cap V_\beta \cap M).
> $$
>
> 于是
>
> $$
> dv_1 \wedge \cdots \wedge dv_m = \det J(\varphi_\beta^{-1} \circ \varphi_\alpha) du_1 \wedge \cdots \wedge du_m,
> $$
>
> 这说明
>
> $$
> a_\beta \circ \varphi_\beta(v) \cdot \det J(\varphi_\beta^{-1} \circ \varphi_\alpha)(u) = a_\alpha \circ \varphi_\alpha(u).
> $$
>
> 由于 $\operatorname{supp} \omega \subset V_\alpha \cap V_\beta \cap M$，根据多重积分的变量替换公式，有
>
> $$
> \begin{aligned}
> \int_{U_\beta} a_\beta \circ \varphi_\beta(v) dv_1 \cdots dv_m &= \int_{\varphi_\beta^{-1}(V_\alpha \cap V_\beta \cap M)} a_\beta \circ \varphi_\beta(v) dv_1 \cdots dv_m \\\\
> &= \int_{\varphi_\alpha^{-1}(V_\alpha \cap V_\beta \cap M)} a_\beta \circ \varphi_\beta(v) |\det J(\varphi_\beta^{-1} \circ \varphi_\alpha)(u)| du_1 \cdots du_m \\\\
> &= \int_{\varphi_\alpha^{-1}(V_\alpha \cap V_\beta \cap M)} a_\alpha \circ \varphi_\alpha(u) du_1 \cdots du_m \\\\
> &= \int_{U_\alpha} a_\alpha \circ \varphi_\alpha(u) du_1 \cdots du_m.
> \end{aligned}
> $$
>
> 注意，在计算过程中，我们要求 $\varphi_\alpha$ 和 $\varphi_\beta$ 是同向的参数表示。
>
> 以上说明了当 $\omega$ 的支集含于某个局部坐标邻域中时，$\omega$ 在 $M$ 上的积分的定义是恰当的。利用多重积分的性质易见，如果 $\omega = \sum_{i=1}^k \omega_i$，且 $\operatorname{supp} \omega_i$ 均含于同一局部坐标邻域中，则
>
> $$
> \int_M \omega = \sum_{i=1}^k \int_M \omega_i.
> $$
>
> (2) 设 $\omega$ 是具有紧支集的 $m$ 次微分形式，取覆盖 $\operatorname{supp} \omega$ 的有限个局部坐标邻域 $\{V_\alpha \cap M\}$，设 $\{\phi_\alpha\}$ 是从属于这些坐标邻域的单位分解，令
>
> $$
> \int_M \omega = \sum_\alpha \int_M \phi_\alpha \omega,
> $$
>
> 我们要说明这个定义是恰当的。事实上，如果 $\{V_\beta \cap M\}$ 是另一局部坐标覆盖，从属于它的单位分解为 $\{\psi_\beta\}$，则
>
> $$
> \int_M \psi_\beta \omega = \sum_\alpha \int_M \phi_\alpha \psi_\beta \omega,
> $$
>
> 这是因为
>
> $$
> \psi_\beta \omega = \sum_\alpha \phi_\alpha \psi_\beta \omega,
> $$
>
> 且 $\operatorname{supp} \phi_\alpha \psi_\beta \omega \subset V_\beta \cap M$。同理，有
>
> $$
> \int_M \phi_\alpha \omega = \sum_\beta \int_M \phi_\alpha \psi_\beta \omega,
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \sum_\beta \int_M \psi_\beta \omega &= \sum_\beta \sum_\alpha \int_M \phi_\alpha \psi_\beta \omega \\\\
> &= \sum_\alpha \sum_\beta \int_M \phi_\alpha \psi_\beta \omega \\\\
> &= \sum_\alpha \int_M \phi_\alpha \omega,
> \end{aligned}
> $$
>
> 这说明 $\omega$ 在 $M$ 上的积分的确是定义好的。

这种微分形式在曲面上的积分就是前一章的第二型曲线积分和曲面积分的推广，它具有以下性质：

> - 微分形式的积分依赖于曲面的定向。如果用 $-M$ 表示相反定向的同一曲面，则
>
> $$
> \int_{-M} \omega = -\int_M \omega.
> $$
>
> - 微分形式的积分具有线性性。即如果 $\omega$, $\eta$ 具有紧支集，$\lambda$, $\mu \in \mathbb{R}$，则
>
> $$
> \int_M (\lambda \omega + \mu \eta) = \lambda \int_M \omega + \mu \int_M \eta.
> $$
>
> - 如果 $\operatorname{supp} \omega \subset V \cap M$，其中 $V \cap M$ 为局部坐标邻域，$\varphi$ 为定向参数表示，则
>
> $$
> \int_U \varphi^* \omega = \int_M \omega.
> $$

### · Stokes

下面的定理是微积分基本公式的一般情形，一般称为 Stokes 公式。

**定理1** (Stokes)

> 设 $M$ 为定向带边 $m$ 维曲面，$\omega$ 是 $M$ 上具有紧支集的 $m-1$ 次微分形式，则
>
> $$
> \int_M d\omega = \int_{\partial M} \omega,
> $$
>
> 其中 $\partial M$ 具有诱导定向。

/proof/

> 因为要证明的等式两边关于 $\omega$ 是线性的，因此，通过使用单位分解，不妨设 $\omega$ 的支集含于 $M$ 的某个局部坐标邻域中。根据微分形式积分的定义和上面积分性质的第三条，利用拉回映射和外微分运算的可交换性，我们不妨假设 $M = \mathbb{H}^m$，且定向为标准定向，$\omega$ 是 $\mathbb{H}^m$ 上具有紧支集的 $m-1$ 次微分形式，$\partial M = \partial \mathbb{H}^m$ 具有诱导定向。
>
> $m-1$ 次微分形式 $\omega$ 在 $\mathbb{H}^m$ 的标准直角坐标 $\{u_1, \cdots, u_m\}$ 下可表示为
>
> $$
> \omega = \sum_{i=1}^m (-1)^{i-1} a_i du_1 \wedge \cdots \wedge \widehat{du_i} \wedge \cdots \wedge du_m,
> $$
>
> 其中 $a_i$ 是 $\mathbb{H}^m$ 上具有紧支集的函数。于是
>
> $$
> d\omega = \left(\sum_{i=1}^m \frac{\partial a_i}{\partial u_i}\right) du_1 \wedge \cdots \wedge du_m.
> $$
>
> 我们有
>
> $$
> \begin{aligned}
> \int_{\mathbb{H}^m} d\omega &= \sum_{i=1}^m \int_{\mathbb{H}^m} \frac{\partial a_i}{\partial u_i} du_1 \cdots du_m \\\\
> &= \sum_{i=1}^{m-1} \int_0^{+\infty} du_m \int_{\mathbb{R}^{m-1}} \frac{\partial a_i}{\partial u_i} du_1 \cdots du_{m-1} \\\\
> &+ \int_{\mathbb{R}^{m-1}} du_1 \cdots du_{m-1} \int_0^{+\infty} \frac{\partial a_m}{\partial u_m} du_m \\\\
> &= \sum_{i=1}^{m-1} \int_0^{+\infty} du_m \int_{\mathbb{R}^{m-2}} a_i \Big|_{u_i = -\infty}^{u_i = +\infty} du_1 \cdots \widehat{du_i} \cdots du_{m-1} \\\\
> &+ \int_{\mathbb{R}^{m-1}} a_m \Big|_{u_m = 0}^{u_m = +\infty} du_1 \cdots du_{m-1} \\\\
> &= -\int_{\partial \mathbb{H}^m} a_m(u_1, \cdots, u_{m-1}, 0) du_1 \cdots du_{m-1}.
> \end{aligned}
> $$
>
> 由于 $u_m|_{\partial \mathbb{H}^m} \equiv 0$，故
>
> $$
> \omega|_{\partial \mathbb{H}^m} = (-1)^{m-1} a_m(u_1, \cdots, u_{m-1}, 0) du_1 \wedge \cdots \wedge du_{m-1},
> $$
>
> 由于 $\partial \mathbb{H}^m$ 的诱导定向由坐标 $\{(-1)^m u_1, u_2, \cdots, u_{m-1}\}$ 给出，故
>
> $$
> \begin{aligned}
> \int_{\partial \mathbb{H}^m} \omega &= \int_{\partial \mathbb{H}^m} (-1)^{m-1} (-1)^m a_m(u_1, \cdots, u_{m-1}, 0) du_1 \cdots du_{m-1} \\\\
> &= -\int_{\partial \mathbb{H}^m} a_m(u_1, \cdots, u_{m-1}, 0) du_1 \cdots du_{m-1}.
> \end{aligned}
> $$
>
> 这说明
>
> $$
> \int_{\mathbb{H}^m} d\omega = \int_{\partial \mathbb{H}^m} \omega,
> $$
>
> 从而定理得证。

> [!important]
>
> (1) 当 $M$ 是闭曲面，即边界 $\partial M = \varnothing$ 时，Stokes 积分公式右端为零。
>
> (2) 如果记 $\mathbb{H}^m$ 上的向量场 $X$ 为
>
> $$
> X = (a_1(u), \cdots, a_m(u)),
> $$
>
> 其散度 $\operatorname{div} X$ 定义为
>
> $$
> \operatorname{div} X = \sum_{i=1}^m \frac{\partial a_i}{\partial u_i},
> $$
>
> 则当 $X$ 具有紧支集时，Stokes 公式可写为
>
> $$
> \int_{\mathbb{H}^m} \operatorname{div} X du_1 \cdots du_m = \int_{\partial \mathbb{H}^m} X \cdot (0, \cdots, 0, -1) du_1 \cdots du_{m-1},
> $$
>
> 其中 $(0, \cdots, 0, -1)$ 是 $\partial \mathbb{H}^m$ 的单位外法向量。

这个结论可以写成如下的一般形式

### · Gauss-Green

**定理2** (Gauss-Green)

> 设 $D$ 为 $\mathbb{R}^m$ 中的区域，其边界为 $m-1$ 维的超曲面。如果 $X$ 为 $D$ 上具有紧支集的向量场，则
>
> $$
> \int_D \operatorname{div} X du_1 \cdots du_m = \int_{\partial D} X \cdot \vec{N} d\sigma,
> $$
>
> 其中 $\vec{N}$ 为 $\partial D$ 的单位外法向量。

/proof/

> 我们规定 $D$ 的定向为 $\mathbb{R}^m$ 的标准定向，则 $\partial D$ 的诱导定向决定的法向量是外侧法向量，其面积形式为
>
> $$
> \Omega = \sum_{i=1}^m (-1)^{i-1} N_i du_1 \wedge \cdots \wedge \widehat{du_i} \wedge \cdots \wedge du_m,
> $$
>
> 其中 $N_i$ 为单位外法向量的第 $i$ 个分量。如果定义 $D$ 中的 $m$ 次微分形式 $\omega$ 为
>
> $$
> \omega = \sum_{i=1}^m (-1)^{i-1} X_i du_1 \wedge \cdots \wedge \widehat{du_i} \wedge \cdots \wedge du_m,
> $$
>
> 其中 $X_i$ 为 $X$ 的第 $i$ 个分量，则
>
> $$
> d\omega = \operatorname{div} X du_1 \wedge \cdots \wedge du_m,
> $$
>
> 由 Stokes 公式，有
>
> $$
> \int_D \operatorname{div} X du_1 \cdots du_m = \int_D d\omega = \int_{\partial D} \omega,
> $$
>
> 作为练习，读者可验证下式成立：
>
> $$
> \omega|_{\partial D} = X \cdot \vec{N} \Omega,
> $$
>
> 因此
>
> $$
> \int_D \operatorname{div} X du_1 \cdots du_m = \int_{\partial D} X \cdot \vec{N} \Omega = \int_{\partial D} X \cdot \vec{N} d\sigma,
> $$
>
> 其中，上式最后的积分是第一型的曲面积分。

**注意**：如果 $M$ 为紧致带边曲面，其面积形式的积分称为 $M$ 的面积，对于可定向曲面，这个定义与前一章中第一型曲面积分中曲面面积的定义是一致的。

/example/  $m-1$ 维球面的面积

> 我们知道，$m-1$ 维单位球面上的面积形式为
>
> $$
> \Omega = \sum_{i=1}^m (-1)^{i-1} u_i du_1 \wedge \cdots \wedge \widehat{du_i} \wedge \cdots \wedge du_m,
> $$
>
> 根据 Stokes 公式，有
>
> $$
> \begin{aligned}
> \sigma(S^{m-1}) &= \int_{S^{m-1}} \Omega = \int_{B^m} d\Omega \\\\
> &= m \int_{B^m} du_1 \wedge \cdots \wedge du_m = m v(B^m),
> \end{aligned}
> $$
>
> 其中 $B^m$ 是 $m$ 维单位球体，$v(B^m)$ 是其体积。这样我们就又一次得到了球面的面积和球体的体积之间的关系。

