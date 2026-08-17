---
title: Lesson 40 曲面曲线积分 III
permalink: /integral/integral-40/
createTime: 2026/08/17 14:18:09
---

## Part 2 曲面积分

### · 第一型曲面积分

设 $m \leq n$，$\Omega \subset \mathbb{R}^m$ 为 $\mathbb{R}^m$ 中的开集. $C^1$ 映射 $\varphi: \Omega \to \mathbb{R}^n$ 称为 $\mathbb{R}^n$ 中的一个参数曲面. 

我们想要定义参数曲面的面积，先从线性映射开始. 设 $\varphi: \mathbb{R}^m \to \mathbb{R}^n$ 为线性映射，$I \subset \mathbb{R}^m$ 为矩形. 

> 如果 $\varphi$ 是退化的（秩小于 $m$），则 $\varphi(\mathbb{R}^m)$ 包含在一个维数小于 $m$ 的子向量空间中，我们自然定义 $\varphi(I)$ 的 $m$ 维体积为零
>
> 如果 $\varphi$ 非退化，则 $\varphi(\mathbb{R}^m)$ 维数为 $m$，$\varphi(I)$ 为 $m$ 维欧氏空间中的可求体积集，我们来计算它的 $m$ 维体积. 

以下为了区分不同维数的体积，我们将 $m$ 维体积称为面积，并用记号 $\sigma$ 来表示它. 

不妨设 $I = [0,1]^m$. 记 $v_j = \varphi(e_j) = (a_{1j}, \cdots, a_{nj})$，其中 $\{e_j\}_{j=1}^m$ 为 $\mathbb{R}^m$ 的一组标准基. 则

$$
\varphi(I) = \left\{ \sum_{j=1}^m x_j v_j \,\middle|\, 0 \leq x_j \leq 1,\, j = 1,\cdots,m \right\}.
$$

记 $n \times m$ 型的矩阵 $A = (a_{ij})$. 如果当 $i > m$ 时 $a_{ij} \equiv 0$，即

$$
\varphi(\mathbb{R}^m) \subset \mathbb{R}^m \times \{0\} = \{(x_1,\cdots,x_m,0,\cdots,0) \in \mathbb{R}^n\},
$$

$\varphi(I)$ 的面积可表示为

$$
\sigma(\varphi(I)) = |\det(a_{ij})_{m\times m}| \sigma(I) = \sqrt{\det[(a_{ij})_{n\times m}^T (a_{ij})_{n\times m}]} \sigma(I).
$$

一般的情形，我们总可以选择 $\mathbb{R}^n$ 中的一个正交变换 $O$，使得 $O(\varphi(\mathbb{R}^m)) \subset \mathbb{R}^m \times \{0\}$，因为正交变换保持面积和体积等不变，故有

$$
\sigma(\varphi(I)) = \sigma(O(\varphi(I))) = \sqrt{\det[O(a_{ij})_{n\times m}]^T [O(a_{ij})_{n\times m}]} \sigma(I)
= \sqrt{\det[(a_{ij})_{n\times m}^T (a_{ij})_{n\times m}]} \sigma(I).
$$

一般地，如果 $\Omega$ 为 $\mathbb{R}^m$ 中可求面积（体积）集，则 $\varphi(\Omega)$ 为 $\mathbb{R}^n$ 中一个 $m$ 维平面中的可求面积集，且

$$
\sigma(\varphi(\Omega)) = \sqrt{\det(A^T \cdot A)} \sigma(\Omega),
$$

其中 $A = (a_{ij})_{n\times m}$. 

现在考虑一般的参数曲面 $\varphi: \Omega \to \mathbb{R}^n$，假设 $\varphi$ 是 $C^1$ 映射. 取 $x_0 \in \Omega$，设 $J\varphi(x_0)$ 非退化（秩为 $m$），定义 $L: \mathbb{R}^m \to \mathbb{R}^n$ 为

$$
L(x) = \varphi(x_0) + J\varphi(x_0)(x - x_0),\quad x \in \mathbb{R}^m.
$$

记 $\pi: \mathbb{R}^n \to L(\mathbb{R}^m)$ 为正交投影，则映射

$$
\pi \circ \varphi - L: \Omega \to L(\mathbb{R}^m),
$$

满足条件 $J(\pi \circ \varphi - L)(x_0) = 0$. 根据第十三章第四节的讨论可知，任给 $\varepsilon > 0$，存在 $\delta > 0$，当 $A$ 为包含在 $x_0$ 的 $\delta$ 邻域内的可求面积集时，有

$$
|\sigma(\pi(\varphi(A))) - \sigma(L(A))| < \varepsilon \cdot \sigma(A),
$$

即

$$
|\sigma(\pi(\varphi(A))) - \sqrt{\det[(J\varphi)^T(x_0) \cdot J\varphi(x_0)]} \sigma(A)| < \varepsilon \cdot \sigma(A),
$$

如果将 $\varphi(A)$ 的“面积”近似地用它在 $x_0$ 处参数曲面的切空间 $L(\mathbb{R}^m)$ 上的投影 $\pi(\varphi(A))$ 的面积代替时，我们就得到了参数曲面面积的如下积分定义：

**定义1**（面积公式）

> 设 $\varphi: \Omega \to \mathbb{R}^n$ 为非退化的 $C^1$ 映射，$\Omega$ 为 $\mathbb{R}^m$ 中可求面积的集合，则 $\varphi(\Omega)$ 的面积定义为
>
> $$
> \sigma(\varphi(\Omega)) = \int_\Omega \sqrt{\det[(J\varphi)^T \cdot J\varphi]}.
> $$

> [!important]
>
> (1) 如果 $\varphi(\mathbb{R}^m) \subset \mathbb{R}^m \times \{0\}$，则上式变成了 $v(\varphi(A)) = \int_A |\det J\varphi|.$；如果 $m = 1$，则上式就是连续可微曲线的弧长公式. 
>
> (2) 与曲线一样，曲面有不同参数化的问题. 如果 $\phi: \Omega' \to \Omega$ 是 $C^1$ 的可逆映射，则 $\varphi \circ \phi: \Omega' \to \mathbb{R}^n$ 也是参数曲面，它们的面积用 上式定义出来是一致的. 
>
> (3) 利用线性代数中关于乘积矩阵的行列式的 Binet-Cauchy 定理，如果 $\varphi$ 的分量表示为
> $$
> \varphi(u) = (\varphi_1(u_1,\cdots,u_m), \cdots, \varphi_n(u_1,\cdots,u_m)),
> $$
>
> 则
>
> $$
> \det[(J\varphi)^T \cdot J\varphi] = \sum_{1 \leq k_1 < k_2 < \cdots < k_m \leq n} \left[\det\left(\frac{\partial \varphi_{k_i}}{\partial u_j}\right)_{m\times m}\right]^2,
> $$

例如，当 $m = n-1$ 时，面积公式可写为

$$
\sigma(\varphi(\Omega)) = \int_\Omega \left( \sum_{i=1}^n \left[ \frac{\partial(\varphi_1,\cdots,\varphi_{i-1},\varphi_{i+1},\cdots,\varphi_n)}{\partial(u_1,u_2,\cdots,u_{n-1})} \right]^2 \right)^{\frac{1}{2}}.
$$
/example/  $\mathbb{R}^3$ 中参数曲面的面积公式

> 设 $r(u,v) = (x(u,v), y(u,v), z(u,v))$ ($(u,v) \in D$) 为参数曲面，则其面积为
>
> $$
> \sigma = \int_D \|r_u \times r_v\| du dv = \int_D \sqrt{EG - F^2} \, du dv,
> $$
>
> 其中
>
> $$
> E = r_u \cdot r_u = x_u^2 + y_u^2 + z_u^2,\quad G = r_v \cdot r_v = x_v^2 + y_v^2 + z_v^2,
> $$
>
> $$
> F = r_u \cdot r_v = x_u x_v + y_u y_v + z_u z_v.
> $$
>
> 特别地，当曲面由方程
>
> $$
> z = f(x,y),\quad (x,y) \in D
> $$
>
> 给出时，$r_x = (1,0,f_x)$，$r_y = (0,1,f_y)$，因此
>
> $$
> EG - F^2 = (1 + f_x^2)(1 + f_y^2) - (f_x f_y)^2 = 1 + f_x^2 + f_y^2,
> $$
>
> 曲面的面积公式成为
>
> $$
> \sigma = \int_D \sqrt{1 + f_x^2 + f_y^2} \, dx dy.
> $$

/example/

> 设 $f: D \to \mathbb{R}$ 为连续可微函数，$D \subset \mathbb{R}^{n-1}$. 则 $\operatorname{graph}(f)$ 为 $\mathbb{R}^n$ 中的超曲面，其面积公式为
>
> $$
> \sigma = \int_D \sqrt{1 + \|\nabla f\|^2},
> $$
>
> 其中 $\nabla f = (f_{x_1}, \cdots, f_{x_{n-1}})$ 是 $f$ 的梯度. 
>
> $\operatorname{graph}(f)$ 的参数表示为
>
> $$
> \varphi(x_1,\cdots,x_{n-1}) = (x_1,\cdots,x_{n-1}, f(x_1,\cdots,x_{n-1})),
> $$
>
> 则
>
> $$
> (J\varphi)^T \cdot J\varphi =
> \begin{pmatrix}
> 1 & 0 & \cdots & f_{x_1} \\
> 0 & 1 & \cdots & f_{x_2} \\
> \vdots & & \ddots & \vdots \\
> 0 & 0 & \cdots & f_{x_{n-1}}
> \end{pmatrix}
> \cdot
> \begin{pmatrix}
> 1 & 0 & \cdots & 0 \\
> 0 & 1 & \cdots & 0 \\
> \vdots & & \ddots & \vdots \\
> f_{x_1} & f_{x_2} & \cdots & f_{x_{n-1}}
> \end{pmatrix}
> = I_{n-1} + (\nabla f)^T \cdot \nabla f.
> $$
>
> 根据矩阵行列式的计算技巧，有
>
> $$
> \det[(J\varphi)^T \cdot J\varphi] = \det[I_{n-1} + (\nabla f)^T \cdot \nabla f]
> = 1 + \nabla f \cdot (\nabla f)^T = 1 + \|\nabla f\|^2,
> $$
>
> 即得
>
> $$
> \sigma = \int_D \sqrt{1 + \|\nabla f\|^2}.
> $$

值得指出的是，我们在定义参数曲面的面积时要求曲面是 $C^1$ 的，这主要是要用到曲面的切平面. 我们将曲面上无穷小区域的面积近似地看成它在切平面上的投影的面积，求和再取极限以后定义为曲面的面积. 这和曲线的长度的定义似乎有些不同. 

曲线的长度可以用折线段的长度去逼近. Schwarz 曾经举过一个例子（圆柱面）说明这样的定义是行不通的. 对于一般的曲面，定义面积需要引入 Hausdorff 测度的概念. 

有了曲面面积的定义，我们可以讨论曲面上有界函数的积分，为了简单起见，只考虑连续函数的情形. 

**定义2**（第一型曲面积分）

> 设 $\varphi: \Omega \to \mathbb{R}^n$ 为 $C^1$ 的参数曲面，$f$ 是定义在此曲面 $\Sigma$ 上的连续函数，则 $f$ 在 $\Sigma$ 上的曲面积分定义为
>
> $$
> \int_\Sigma f d\sigma = \int_\Omega f \sqrt{\det[(J\varphi)^T \cdot J\varphi]}.
> $$

第一型曲面积分的物理含义：分布在曲面上的某种物质，如果其密度函数为 $\rho$，则 $\rho$ 在曲面上的积分就是物质的质量. 

### · 第二型曲面积分

如同在曲线上一样，在曲面上也存在着第二种类型的积分，这种积分涉及到“方向”的概念. 参数曲线的方向是由其参数决定的，参数曲面也是如此. 

设 $\varphi: \Omega \to \mathbb{R}^n$ 为参数曲面，如果 $\psi: \Omega' \to \Omega$ 为 $C^1$ 的可逆映射，则 $\varphi \circ \psi$ 也是参数曲面，它是 $\varphi$ 的重新参数化. 

如果 $\det J\psi$ 恒为正，则称 $\varphi$ 和 $\varphi \circ \psi$ 是同向的；如果 $\det J\psi$ 恒为负，则称 $\varphi$ 和 $\varphi \circ \psi$ 是反向的. 

/example/  $\mathbb{R}^n$ 上的定向

> $\mathbb{R}^n$ 上的标准直角坐标决定的定向称为标准定向（正向）. 可逆映射
>
> $$
> f(x_1,\cdots,x_n) = (-x_1,x_2,\cdots,x_n)
> $$
>
> 的 Jacobi 行列式为 $-1$，它决定的定向和标准定向相反. 
>
> 在 $\mathbb{R}^n$ 上只有两个定向，即如果 $\psi: \mathbb{R}^n \to \mathbb{R}^n$ 为可逆 $C^1$ 映射，则 $\psi$ 要么和标准定向同向，要么和标准定向反向. 
>
> 这是因为，如果 $\psi$ 为 $C^1$ 可逆映射，则 $\det J\psi$ 是 $\mathbb{R}^n$ 上处处非零的连续函数，由连续函数的介值定理即知 $\det J\psi$ 要么恒正，要么恒负. 类似的结果对于连通的曲面也成立. 

/example/  超曲面的定向

> 先考虑 $\mathbb{R}^3$ 中的参数曲面 $r: \Omega \to \mathbb{R}^3$，其方程记为
>
> $$
> r(u,v) = (x(u,v), y(u,v), z(u,v)),\quad (u,v) \in \Omega.
> $$
>
> 我们知道，在 $r(u,v)$ 处 $r_u = (x_u, y_u, z_u)$ 和 $r_v = (x_v, y_v, z_v)$ 是切向量，而
>
> $$
> r_u \times r_v = (y_u z_v - z_u y_v, z_u x_v - x_u z_v, x_u y_v - y_u x_v) = \left( \frac{\partial(y,z)}{\partial(u,v)}, \frac{\partial(z,x)}{\partial(u,v)}, \frac{\partial(x,y)}{\partial(u,v)} \right)
> $$
>
> 是法向量. 如果 $(u,v) = \varphi(s,t)$ 是曲面的重新参数化，则
>
> $$
> r_s \times r_t = (r_u \times r_v) \cdot \frac{\partial(u,v)}{\partial(s,t)} = (r_u \times r_v) \cdot \det J\varphi,
> $$
>
> 这说明，参数 $(u,v)$ 和 $(s,t)$ 同向（反向）时，它们决定的法向量同向（反向）. 因此，$\mathbb{R}^3$ 中曲面的定向也可以用其单位法向量 $\vec{n}$ 表示，其中
>
> $$
> \vec{n} = \frac{r_u \times r_v}{\|r_u \times r_v\|}.
> $$
>
> 同向的参数给出相同的单位法向量，反向的参数给出相反的单位法向量. 
>
> 记
>
> $$
> \vec{n} = (\cos\alpha, \cos\beta, \cos\gamma),
> $$
>
> 其中 $\alpha, \beta, \gamma$ 分别是 $\vec{n}$ 与三个坐标轴的夹角. 当 $\cos\gamma \geq 0$，即 $\vec{n}$ 和 $z$ 轴的夹角不超过 $\pi/2$ 时，单位法向量所决定的方向称为参数曲面的上侧方向；反之，单位法向量所决定的方向称为参数曲面的下侧方向. 
>
> 对于封闭的曲面，指向曲面所围区域外部的单位法向量所决定的方向称为参数曲面的外侧方向，指向曲面所围区域内部的单位法向量所决定的方向称为参数曲面的内侧方向. 

上面的讨论可完全类似地推广到 $\mathbb{R}^n$ 中的超曲面上. 设超曲面的方程为

$$
r(u_1,\cdots,u_{n-1}) = (x_1(u_1,\cdots,u_{n-1}), \cdots, x_n(u_1,\cdots,u_{n-1})),
$$

则其法向量为 $\vec{N}(u) = (N_1,\cdots,N_n)$，其中

$$
N_i(u) = (-1)^{i-1} \frac{\partial(x_1,\cdots,x_{i-1},x_{i+1},\cdots,x_n)}{\partial(u_1,\cdots,u_{n-1})},
$$

如果 $u = \varphi(v)$ 为超曲面的重新参数化，则法向量之间满足关系

$$
\vec{N}(v) = \vec{N}(u) \cdot \det J\varphi,
$$

因此同向的参数给出同向的法向量，反向的参数给出反向的法向量. 

有了参数曲面的定向，我们可以定义第二型的曲面积分了. 为了简单起见，先考虑 $\mathbb{R}^3$ 中的曲面. 

**定义1**（第二型曲面积分）

> 设 $\Sigma$ 为 $\mathbb{R}^3$ 中的曲面，其参数表示为
>
> $$
> r(u,v) = (x(u,v), y(u,v), z(u,v)),\quad (u,v) \in \Omega.
> $$
>
> 对于定义在 $\Sigma$ 上的连续向量值函数 $(P,Q,R)$，定义其曲面积分为
>
> $$
> I = \int_\Omega P \cdot \frac{\partial(y,z)}{\partial(u,v)} du dv + \int_\Omega Q \cdot \frac{\partial(z,x)}{\partial(u,v)} du dv + \int_\Omega R \cdot \frac{\partial(x,y)}{\partial(u,v)} du dv,
> $$
>
> 也记为
>
> $$
> I = \int_\Sigma P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy.
> $$

> [!important]
>
> (1) 利用前面的记号，第二型曲面积分可以写为
>
> $$
> \int_\Sigma P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy = \int_\Omega (P,Q,R) \cdot (r_u \times r_v) du dv,
> $$
>
> 再由第一型曲面积分的定义，上式还可以写为
>
> $$
> \int_\Sigma P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy = \int_\Sigma (P,Q,R) \cdot \vec{n} d\sigma,
> $$
>
> 即取定了方向后第二型曲面积分可以转化为第一型曲面积分. 
>
> (2) 需要注意的是，$(P,Q,R)$ 的第二型曲面积分在两个同向的参数下其值不变，在反向的两个参数下其值正好相差一个符号. 即，用 $-\Sigma$ 表示反向曲面时有
>
> $$
> \int_{-\Sigma} P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy = - \int_\Sigma P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy.
> $$
>
> (3) 完全类似地，$\mathbb{R}^n$ 中的超曲面上的第二型曲面积分可以定义为
>
> $$
> \int_\Sigma P_1 dx_2 \wedge \cdots dx_n + \cdots + P_n dx_1 \wedge \cdots dx_{n-1} = \int_\Omega (P_1,\cdots,P_n) \cdot \vec{N}(u) du_1 \cdots du_{n-1}.
> $$

对于一般的 $m$ 维参数曲面也可以定义第二型的曲面积分，这要引入微分形式. 

第二型曲面积分的物理含义：设空间中有流速为 $\vec{v} = (P,Q,R)$ 的流体，求单位时间内通过曲面 $\Sigma$ 的流体的流量. 

用通常的“微元法”计算流量如下：任取 $\Sigma$ 的一小片，其面积记为 $\Delta\sigma$，经过这一小片的流体速度为 $\vec{v}$，曲面的单位法向量为 $\vec{n}$，则单位时间内通过这一小片曲面的流体的流量为 $\vec{v} \cdot \vec{n} \Delta\sigma$. 于是单位时间内经过 $\Sigma$ 的流量为积分
$$
\int_\Sigma \vec{v} \cdot \vec{n} d\sigma,
$$

因此求流量的问题就是曲面上的第二型积分的问题. 从这个例子也可以看出第二型的曲面积分是依赖于方向的. 

/example/  计算积分
$$
I = \int_\Sigma xyzw\, dx \wedge dy \wedge dz,
$$

其中 $\Sigma$ 为四维单形

$$
x + y + z + w \leq 1,\quad x \geq 0,\ y \geq 0,\ z \geq 0,\ w \geq 0
$$

的边界，方向为外侧. 

> $\Sigma$ 为 $\mathbb{R}^4$ 中的超曲面，它由五个部分组成，其中四部分分别位于坐标平面上，在这四部分上被积函数均为零. 第五部分为
>
> $$
> \Sigma':\ w = 1 - x - y - z,\quad (x,y,z) \in \Omega = \{x + y + z \leq 1,\ x \geq 0,\ y \geq 0,\ z \geq 0\},
> $$
>
> 其法向量为 $(-w_x, -w_y, -w_z, 1) = (1,1,1,1)$，这是外侧方向，因此
>
> $$
> \begin{aligned}
> I &= \int_{\Sigma'} xyzw\, dx \wedge dy \wedge dz\\\\
> &= \int_\Omega xyz(1 - x - y - z)\, dxdydz\\\\
> &= \int_{\{y+z \leq 1,\ y,z \geq 0\}} yz \int_0^{1-y-z} x\, dx dy dz
> - 3 \int_{\{y+z \leq 1,\ y,z \geq 0\}} yz \int_0^{1-y-z} x^2\, dx dy dz\\\\
> &= \frac{1}{2} \int_{\{y+z \leq 1,\ y,z \geq 0\}} yz(1 - y - z)^2 dy dz
> - \int_{\{y+z \leq 1,\ y,z \geq 0\}} yz(1 - y - z)^3 dy dz\\\\
> &= \frac{1}{7!}.
> \end{aligned}
> $$
>
> 在计算的过程中我们用到了 $x,y,z$ 的对称性. 

结束.

