---
title: Lesson 42 曲面曲线积分 V
permalink: /integral/integral-42/
createTime: 2026/08/17 14:18:14
---

## Part 5 Gauss 公式

设 $\Omega$ 为 $\mathbb{R}^3$ 中的有界区域，其边界 $\partial\Omega$ 为 $C^1$ 曲面。边界定向为诱导定向，即外侧方向。与平面上的 Green 公式类似，下面的 Gauss 公式将三重积分与第二型曲面积分联系起来了。

### · Gauss

**定理3**（Gauss）

> 设 $\Omega$ 为 $\mathbb{R}^3$ 中的有界区域，其边界由有限个 $C^1$ 曲面组成，曲面的定向为诱导定向。如果 $P, Q, R$ 为 $\Omega$ 上的连续可微函数，则  
> $$
> \int_\Omega \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dx dy dz = \int_{\partial\Omega} P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy.
> $$

/proof/

> 和 Green 公式一样，我们证明一个特殊情形：在某个边界点的一个小邻域之外，$P, Q$ 和 $R$ 均恒为零。证明的思路也是类似的，先说明 Gauss 公式在坐标变换下具有不变性，然后利用坐标变换将问题变为矩形区域内的 Gauss 公式。
>
> 为此，设 $\varphi: \tilde{\Omega} \to \Omega$ 为 $C^2$ 的保定向坐标变换，记为  
> $$
> \varphi(u,v,w) = (x(u,v,w), y(u,v,w), z(u,v,w)),\quad (u,v,w) \in \tilde{\Omega}.
> $$
>
> 设 $\varphi: \tilde{\Omega} \to \Omega$ 为 $C^2$ 的保定向坐标变换，记为  
> $$
> \varphi(u,v,w) = (x(u,v,w), y(u,v,w), z(u,v,w)),\quad (u,v,w) \in \tilde{\Omega}.
> $$
>
> 定义新函数  
> $$
> \tilde{P} = P \frac{\partial(y,z)}{\partial(v,w)} + Q \frac{\partial(z,x)}{\partial(w,u)} + R \frac{\partial(x,y)}{\partial(u,v)},
> $$
>
> $$
> \tilde{Q} = P \frac{\partial(y,z)}{\partial(w,u)} + Q \frac{\partial(z,x)}{\partial(u,w)} + R \frac{\partial(x,y)}{\partial(v,u)},
> $$
>
> $$
> \tilde{R} = P \frac{\partial(y,z)}{\partial(u,v)} + Q \frac{\partial(z,x)}{\partial(v,u)} + R \frac{\partial(x,y)}{\partial(w,v)}.
> $$
>
> 利用复合求导的链规则以及第二型曲面积分的定义不难得到  
> $$
> \int_{\partial\tilde{\Omega}} \tilde{P}\, dv \wedge dw + \tilde{Q}\, dw \wedge du + \tilde{R}\, du \wedge dv = \int_{\partial\Omega} P\, dy \wedge dz + Q\, dz \wedge dx + R\, dx \wedge dy.
> $$
>
> 这是坐标变换下第二型曲面积分的变换公式。为了得到重积分的变换公式，注意到  
> $$
> (P_u, P_v, P_w) = (P_x, P_y, P_z) \cdot 
> \begin{pmatrix}
> x_u & x_v & x_w \\
> y_u & y_v & y_w \\
> z_u & z_v & z_w
> \end{pmatrix},
> $$
>
> 根据逆矩阵的表达式可以解得  
> $$
> \frac{\partial P}{\partial x} \frac{\partial(x,y,z)}{\partial(u,v,w)} = P_u \frac{\partial(y,z)}{\partial(v,w)} + P_v \frac{\partial(y,z)}{\partial(w,u)} + P_w \frac{\partial(y,z)}{\partial(u,v)},
> $$
>
> 同理可得  
> $$
> \frac{\partial Q}{\partial y} \frac{\partial(x,y,z)}{\partial(u,v,w)} = Q_u \frac{\partial(z,x)}{\partial(v,w)} + Q_v \frac{\partial(z,x)}{\partial(w,u)} + Q_w \frac{\partial(z,x)}{\partial(u,v)},
> $$
>
> $$
> \frac{\partial R}{\partial z} \frac{\partial(x,y,z)}{\partial(u,v,w)} = R_u \frac{\partial(x,y)}{\partial(v,w)} + R_v \frac{\partial(x,y)}{\partial(w,u)} + R_w \frac{\partial(x,y)}{\partial(u,v)}.
> $$
>
> 直接的计算表明  
> $$
> \frac{\partial}{\partial u} \left( \frac{\partial(y,z)}{\partial(v,w)} \right) + \frac{\partial}{\partial v} \left( \frac{\partial(y,z)}{\partial(w,u)} \right) + \frac{\partial}{\partial w} \left( \frac{\partial(y,z)}{\partial(u,v)} \right) = 0,
> $$
>
> 在上式中将 $(y,z)$ 换成 $(z,x)$ 或 $(x,y)$ 也成立。利用这些等式不难得到  
> $$
> \frac{\partial \tilde{P}}{\partial u} + \frac{\partial \tilde{Q}}{\partial v} + \frac{\partial \tilde{R}}{\partial w} = \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) \frac{\partial(x,y,z)}{\partial(u,v,w)},
> $$
>
> 如果 $\varphi$ 是保持定向的坐标变换，则由重积分的变量替换公式及上式就得到  
> $$
> \int_{\tilde{\Omega}} \left( \frac{\partial \tilde{P}}{\partial u} + \frac{\partial \tilde{Q}}{\partial v} + \frac{\partial \tilde{R}}{\partial w} \right) du\,dv\,dw = \int_\Omega \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dx\,dy\,dz.
> $$
>
> 结合上式，我们就知道要说明 Gauss 公式在 $\Omega$ 上成立，只要说明它在 $\tilde{\Omega}$ 上成立即可，反之亦然。
>
> 通过平移以及适当的保定向的正交变换，我们可以假设 $(x_0,y_0,z_0) = (0,0,0)$，$P,Q,R$ 在 $B_\varepsilon(0)$ 外恒为零，且 $\partial\Omega \cap B_\varepsilon(0)$ 为 $C^1$ 函数 $\phi(x,y)$ 的图像，其中 $\phi(0,0) = 0$, $\nabla\phi(0,0) = (0,0)$。
>
> 此时，在原点 $(0,0,0)$ 处的单位外法向是 $(0,0,1)$，因此区域 $\Omega \cap B_\varepsilon(0)$ 位于图像的下方。
>
> 与 Green 公式的证明类似，通过适当的保定向的坐标变换，我们将该区域变为矩形区域 $I = [-a,a]^2 \times [-a,0]$ 的一部分，在这个变换下边界 $\partial\Omega \cap B_\varepsilon(0)$ 变为 $[-a,a]^2 \times \{0\}$ 的一部分，而 $P,Q,R$ 在经过变换后在矩形 $[-a,a]^2 \times [-a,0]$ 的其它几个边界面附近恒为零。我们只要在这个矩形区域上验证 Gauss 公式成立就行了。
>
> 经过这些预备以后我们得到  
> $$
> \int_{\partial I} P\, dy \wedge dz + Q\, dz \wedge dx + R\, dx \wedge dy = \int_{[-a,a]^2} R(x,y,0)\, dx\,dy,
> $$
>
> 以及  
> $$
> \begin{aligned}
> &\int_I \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dx\,dy\,dz\\\\
> &= \int_{-a}^a dy \int_{-a}^0 dz \int_{-a}^a \frac{\partial P}{\partial x} dx + \int_{-a}^a dx \int_{-a}^0 dz \int_{-a}^a \frac{\partial Q}{\partial y} dy + \int_{-a}^a dx \int_{-a}^a dy \int_{-a}^0 \frac{\partial R}{\partial z} dz\\\\
> &= \int_{-a}^a dy \int_{-a}^0 [P(a,y,z) - P(-a,y,z)] dz \\\\&+ \int_{-a}^a dx \int_{-a}^0 [Q(x,a,z) - Q(x,-a,z)] dz + \int_{-a}^a dx \int_{-a}^a [R(x,y,0) - R(x,y,-a)] dy\\\\
> &= \int_{-a}^a dx \int_{-a}^a R(x,y,0)\, dy,
> \end{aligned}
> $$
>
> 这说明 Gauss 公式在我们的假设下成立。

**注意**：当区域的边界是分片 $C^1$ 时 Gauss 公式仍然成立，证明的方法也可以推广到一般的欧氏空间 $\mathbb{R}^n$ 中。

### · 曲面所围区域的体积

/example/  曲面所围区域的体积

> 设有界区域 $\Omega$ 的边界为 $C^1$ 曲面，在 Gauss 公式中取 $P = x$, $Q = y$, $R = z$ 就得到了体积公式  
> $$
> v(\Omega) = \frac{1}{3} \int_{\partial\Omega} x\, dy \wedge dz + y\, dz \wedge dx + z\, dx \wedge dy.
> $$
>
> 作为例子，我们计算椭球 $E(a,b,c) = \left\{ \dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} \le 1 \right\}$ 的体积。取广义球面坐标  
> $$
> x = a \sin\varphi \cos\theta,\quad y = b \sin\varphi \sin\theta,\quad z = c \cos\varphi,\quad \varphi \in [0,\pi],\ \theta \in [0,2\pi].
> $$
>
> 这个坐标在椭球面上给出的方向是外侧的，因此  
> $$
> \begin{aligned}
> v(E(a,b,c)) &= \frac{1}{3} \int_{\partial\Omega} x\, dy \wedge dz + y\, dz \wedge dx + z\, dx \wedge dy\\\\
> &= \frac{1}{3} \int_0^\pi d\varphi \int_0^{2\pi} \left[ x \cdot \frac{\partial(y,z)}{\partial(\varphi,\theta)} + y \cdot \frac{\partial(z,x)}{\partial(\varphi,\theta)} + z \cdot \frac{\partial(x,y)}{\partial(\varphi,\theta)} \right] d\theta\\\\
> &= \frac{1}{3} \int_0^\pi d\varphi \int_0^{2\pi} [abc \sin^3\varphi \cos^2\theta + abc \sin^3\varphi \sin^2\theta + abc \cos^2\varphi \sin\varphi] d\theta\\\\
> &= \frac{1}{3} \int_0^\pi d\varphi \int_0^{2\pi} abc \sin\varphi\, d\theta = \frac{4}{3} \pi abc.
> \end{aligned}
> $$

### · 散度形式

 Gauss 公式的散度形式：

> 以函数 $P,Q,R$ 为分量的向量场记为 $\vec{X} = (P,Q,R)$。向量场的散度 $\mathrm{div}\,\vec{X}$ 定义为  
> $$
> \mathrm{div}\,\vec{X} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z},
> $$
>
> 则 Gauss 公式可以写为  
> $$
> \int_\Omega \mathrm{div}\,\vec{X}\, dx\,dy\,dz = \int_{\partial\Omega} \vec{X} \cdot \vec{n}\, d\sigma,
> $$
> 其中 $\vec{n}$ 为边界曲面的单位外法向量。
>
> 作为一个物理应用，考虑分布在区域 $\Omega$ 内的电荷产生的电场 $\vec{E}$，假设电荷密度为 $\rho(x,y,z)$，则 $\vec{E}$ 在区域边界上的电通量为  
> $$
> \int_{\partial\Omega} \vec{E} \cdot \vec{n}\, d\sigma = \int_\Omega 4\pi\rho(x,y,z)\, dx\,dy\,dz,
> $$
>
> 利用 Gauss 公式的散度形式，得  
> $$
> \int_\Omega (\mathrm{div}\,\vec{E} - 4\pi\rho)\, dx\,dy\,dz = 0,
> $$
>
> 在上式中将区域缩为一点就得到电场的 Gauss 定律：  
> $$
> \mathrm{div}\,\vec{E} = 4\pi\rho.
> $$

### · 分部积分

$\mathbb{R}^3$ 中的分部积分公式：

> 设 $v$ 为 $C^1$ 函数，如同 Green 公式的情形一样，在 Gauss 公式中用 $vP, vQ, vR$ 分别代替 $P,Q,R$ 可得  
> $$
> \begin{aligned}
> \int_\Omega v \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dx\,dy\,dz &= \int_{\partial\Omega} v(P\, dy \wedge dz + Q\, dz \wedge dx + R\, dx \wedge dy\\\\
> &- \int_\Omega \left( P \frac{\partial v}{\partial x} + Q \frac{\partial v}{\partial y} + R \frac{\partial v}{\partial z} \right) dx\,dy\,dz,
> \end{aligned}
> $$
>
> 或改写为  
> $$
> \int_\Omega v \cdot \mathrm{div}\,\vec{X}\, dx\,dy\,dz = \int_{\partial\Omega} v \vec{X} \cdot \vec{n}\, d\sigma - \int_\Omega \vec{X} \cdot \nabla v\, dx\,dy\,dz,
> $$
> 其中 $\vec{n}$ 为单位外法向量，$\nabla v = (v_x, v_y, v_z)$ 为 $v$ 的梯度。
>
> 设 $u$ 为 $C^2$ 函数，记  
> $$
> \Delta u = \mathrm{div}\,\nabla u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2},
> $$
>
> 在上式中以 $\vec{X} = \nabla u$ 代入，有  
> $$
> \int_\Omega v \Delta u\, dx\,dy\,dz = \int_{\partial\Omega} v \frac{\partial u}{\partial n}\, d\sigma - \int_\Omega \nabla u \cdot \nabla v\, dx\,dy\,dz.
> $$
>
> 如果 $v$ 也是 $C^2$ 函数，则在上式中交换 $u,v$ 的位置然后两式相减可得  
> $$
> \int_\Omega (v \Delta u - u \Delta v)\, dx\,dy\,dz = \int_{\partial\Omega} \left( v \frac{\partial u}{\partial n} - u \frac{\partial v}{\partial n} \right) d\sigma.
> $$
>
> 上面这些公式都很有用，特别是在研究欧氏空间中的调和函数的时候（满足方程 $\Delta u = 0$ 的函数 $u$ 称为调和函数）。

## Part 6 Stokes 公式

设 $\Sigma$ 为 $\mathbb{R}^3$ 中 $C^2$ 的定向曲面，$\Omega$ 为 $\Sigma$ 上的有界区域，其边界为 $C^1$ 曲线。我们在边界 $\partial\Omega$ 上用“右手法则”定义诱导定向如下：边界在曲面上的外法向量与边界的切向量的叉乘得到的曲面法向量与曲面的定向给出的法向量同向。

即如果用右手从曲线外法向到切向作旋转，则大拇指所指方向为定向曲面的法向。

下面的 Stokes 公式将第二型曲面积分与第二型曲线积分联系起来了。

### · Stokes

**定理4** (Stokes)：

> 设 $\Sigma$ 为定向曲面，$\Omega$ 为曲面上的有界区域，其边界赋以诱导定向。如果 $P,Q,R$ 为 $\Omega$ 上的连续可微函数，则  
> $$
> \int_\Omega \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right) dy \wedge dz + \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right) dz \wedge dx + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \wedge dy = \int_{\partial\Omega} P\, dx + Q\, dy + R\, dz.
> $$
>
> 和前面一样，我们只证明一个特殊情形：假定 $\varphi: D \to \mathbb{R}^3$ 为定向曲面的 $C^2$ 参数表示，且 $\varphi(\tilde{\Omega}) = \Omega$，$\tilde{\Omega}$ 为 $D \subset \mathbb{R}^2$ 中的有界区域。根据诱导定向的定义，$\partial\tilde{\Omega}$ 的定向也是平面上的诱导定向。
>
> 我们来讨论在参数表示下 Stokes 公式中的两个积分如何变化。记  
> $$
> \varphi(u,v) = (x(u,v), y(u,v), z(u,v)),\quad (u,v) \in D.
> $$
>
> 令  
> $$
> S = P x_u + Q y_u + R z_u,\quad T = P x_v + Q y_v + R z_v,
> $$
>
> 根据第二型曲线积分的定义不难得到  
> $$
> \int_{\partial\tilde{\Omega}} S\, du + T\, dv = \int_{\partial\Omega} P\, dx + Q\, dy + R\, dz.
> $$
>
> 从 $S,T$ 的定义可推出  
> $$
> T_u - S_v = (P_u x_v - P_v x_u) + (Q_u y_v - Q_v y_u) + (R_u z_v - R_v z_u).
> $$
>
> 根据复合求导的链规则，有  
> $$
> P_u = P_x x_u + P_y y_u + P_z z_u,\quad P_v = P_x x_v + P_y y_v + P_z z_v,
> $$
>
> 关于 $Q,R$ 有完全类似的等式，将它们代入上式得  
> $$
> \begin{aligned}
> T_u - S_v &= P_y (y_u x_v - x_u y_v) + P_z (z_u x_v - x_u z_v)\\ \\
> &+ Q_x (x_u y_v - y_u x_v) + Q_z (z_u y_v - y_u z_v)\\ \\
> &+ R_x (x_u z_v - z_u x_v) + R_y (y_u z_v - z_u y_v),
> \end{aligned}
> $$
>
> 或改写为  
> $$
> \begin{aligned}
> T_u - S_v &= \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right) \frac{\partial(y,z)}{\partial(u,v)} \\\\
> &+ \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right) \frac{\partial(z,x)}{\partial(u,v)} \\\\
> &+ \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \frac{\partial(x,y)}{\partial(u,v)},
> \end{aligned}
> $$
>
> 根据第二型曲面积分的定义可得  
> $$
> \begin{aligned}
> \int_\Omega (T_u - S_v)\, du\,dv &= \int_\Omega \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right) dy \wedge dz \\\\
> &+ \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right) dz \wedge dx \\\\
> & + \int_\Omega \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \wedge dy,
> \end{aligned}
> $$
>
> 另一方面，由平面上的 Green 公式得到  
> $$
> \int_{\tilde{\Omega}} (T_u - S_v)\, du\,dv = \int_{\partial\tilde{\Omega}} S\, du + T\, dv,
> $$
>
> 将以上两式和前式结合起来就得到了曲面 Stokes 公式的证明。

**注意**：曲面是分片 $C^1$ 时 Stokes 公式仍然成立

### · 旋度表示

Stokes 公式的旋度表示：

> 设 $\vec{X} = (P,Q,R)$ 为向量场，定义其旋度为  
> $$
> \mathrm{rot}\,\vec{X} = \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right).
> $$
>
> 有时也用 $\mathrm{curl}\,\vec{X}$ 表示旋度。利用旋度，Stokes 公式可以改写为  
> $$
> \int_\Omega \mathrm{rot}\,\vec{X} \cdot \vec{n}\, d\sigma = \int_{\partial\Omega} \vec{X} \cdot \vec{T}\, ds,
> $$
> 其中 $\vec{n}$ 为曲面的单位法向量，$\vec{T}$ 为曲线的单位切向量，$s$ 为弧长参数。

### · 分部积分

曲面上的分部积分公式：

> 设 $v$ 为 $C^1$ 函数，$\vec{X} = (P,Q,R)$ 为向量场，由旋度的定义易得  
> $$
> \mathrm{rot}(v\vec{X}) = v \cdot \mathrm{rot}\,\vec{X} + \left( R \frac{\partial v}{\partial y} - Q \frac{\partial v}{\partial z},\ P \frac{\partial v}{\partial z} - R \frac{\partial v}{\partial x},\ Q \frac{\partial v}{\partial x} - P \frac{\partial v}{\partial y} \right),
> $$
>
> 利用向量的叉乘，上式可以改写为  
> $$
> \mathrm{rot}(v\vec{X}) = v \cdot \mathrm{rot}\,\vec{X} + \nabla v \times \vec{X},
> $$
>
> 代入上式得  
> $$
> \int_\Omega v (\mathrm{rot}\,\vec{X} \cdot \vec{n})\, d\sigma = \int_{\partial\Omega} v (\vec{X} \cdot \vec{T})\, ds - \int_\Omega (\nabla v \times \vec{X}) \cdot \vec{n}\, d\sigma.
> $$
>
> 如果 $u$ 为 $C^1$ 函数，以 $\vec{X} = \nabla u$ 代入上式可得（注意梯度的旋度为零）  
> $$
> \int_\Omega (\nabla u \times \nabla u) \cdot \vec{n}\, d\sigma = \int_{\partial\Omega} v \frac{\partial u}{\partial s}\, ds,
> $$
> 其中  
> $$
> \frac{\partial u}{\partial s} = \nabla u \cdot \vec{T}
> $$
> 是 $u$ 沿切向的方向导数。
