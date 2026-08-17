---
title: Lesson 41 曲面曲线积分 IV
permalink: /integral/integral-41/
createTime: 2026/08/17 14:18:11
---

我们知道，Newton-Leibniz 公式是微积分的一个核心定理。对于一元函数来说，Newton-Leibniz 公式有两种表现形式：

- 如果 $f(x)$ 为 $[a,b]$ 上的连续函数，则 $F(x) = \displaystyle\int_a^x f(t)dt$ 为 $[a,b]$ 上的可微函数，且  
  $$
  F'(x) = f(x),\quad \text{or}\quad \frac{d}{dx} \int_a^x f(t)dt = f(x);
  $$

- 设 $f$ 在 $[a,b]$ 上连续可微，则  
  $$
  \int_a^b f'(x)dx = f(b) - f(a),\quad \text{or}\quad \int_a^b df = f\big|_a^b.
  $$

我们现在想把这些公式推广到多元函数。

## Part 3 余面积公式

### · Formula

设 $f: \mathbb{R}^n \to \mathbb{R}$ 为 $C^1$ 函数，且 $\|\nabla f\| \ne 0$。取区间 $[a,b] \subset f(\mathbb{R}^n)$，则当 $t \in [a,b]$ 时，$f^{-1}(t)$ 为 $\mathbb{R}^n$ 中的超曲面。

事实上，任取 $x^0 \in f^{-1}(t)$，因为 $\|\nabla f(x^0)\| \ne 0$，不妨设 $\dfrac{\partial f}{\partial x_n}(x^0) \ne 0$。根据隐函数定理，方程  
$$
f(x_1,\cdots,x_n) - t = 0
$$
存在 $C^1$ 的（局部）解  
$$
x_n = \varphi_t(x_1,\cdots,x_{n-1}),\quad (x_1,\cdots,x_{n-1}) \in D \subset \mathbb{R}^{n-1}.
$$
即在 $x^0$ 附近 $f^{-1}(t)$ 是参数曲面。根据隐函数定理，上式中的 $\varphi_t$ 关于 $t$ 也是 $C^1$ 的。在该方程中对 $t$ 求导，得  
$$
\frac{\partial f}{\partial x_n} \frac{\partial x_n}{\partial t} - 1 = 0,
$$
即  
$$
\frac{\partial x_n}{\partial t} = \left( \frac{\partial f}{\partial x_n} \right)^{-1}.
$$

考虑变量替换 $\Phi: D \times [a,b] \to \mathbb{R}^n$，  
$$
\Phi(x_1,\cdots,x_{n-1},t) = (x_1,\cdots,x_{n-1},\varphi_t(x_1,\cdots,x_{n-1})),
$$
易见其 Jacobi 行列式为  
$$
\det J\Phi = \frac{\partial \varphi_t}{\partial t} = \left( \frac{\partial f}{\partial x_n} \right)^{-1}.
$$

如果记 $\Omega = \Phi(D \times [a,b])$，根据多重积分的变量替换公式就有  
$$
\begin{aligned}
v(\Omega) &= \int_{D \times [a,b]} \left| \left( \frac{\partial f}{\partial x_n} \right)^{-1} \right| dx_1 \cdots dx_{n-1} dt \\\\
&= \int_a^b dt \int_D \left| \left( \frac{\partial f}{\partial x_n} \right)^{-1} \right| dx_1 \cdots dx_{n-1}.
\end{aligned}
$$

另一方面，我们考虑水平集 $f^{-1}(t)$ 上的第一型曲面积分。根据隐函数定理，上述参数方程满足条件  
$$
\frac{\partial \varphi_t}{\partial x_i} = -\frac{\partial f}{\partial x_i} \left( \frac{\partial f}{\partial x_n} \right)^{-1},\quad i = 1,\cdots,n-1.
$$
因此  
$$
1 + \|\nabla \varphi_t\|^2 = \|\nabla f\|^2 \left( \frac{\partial f}{\partial x_n} \right)^{-2}.
$$

根据第一型曲面积分的定义（即图象曲面的面积公式）得  
$$
\begin{aligned}
\int_{f^{-1}(t) \cap \Omega} \frac{d\sigma}{\|\nabla f\|} &= \int_D \frac{1}{\|\nabla f\|} \sqrt{1 + \|\nabla \varphi_t\|^2} dx_1 \cdots dx_{n-1} \\\\
&= \int_D \left| \left( \frac{\partial f}{\partial x_n} \right)^{-1} \right| dx_1 \cdots dx_{n-1},
\end{aligned}
$$
因此上式可改写为  
$$
v(\Omega) = \int_a^b dt \int_{f^{-1}(t) \cap \Omega} \frac{1}{\|\nabla f\|} d\sigma.
$$

这个公式称为**余面积公式**（co-area formula）。类似的推导可以得到这个公式的一般情形，它可以看成重积分“投影法”的一般形式。

**定理1**（余面积公式）

> 设 $f$ 条件如上。如果 $g$ 为 $f^{-1}([a,b])$ 上的连续函数，则  
> $$
> \int_{f^{-1}([a,b])} g(x) dx_1 \cdots dx_n = \int_a^b dt \int_{f^{-1}(t)} \frac{g}{\|\nabla f\|} d\sigma.
> $$

这个公式将多重积分和第一型曲面积分联系起来了。我们看几个例子。

### · 例题

/example/

> $f$ 为坐标函数 $f(x) = x_n$。
>
> 当 $f(x) = x_n$ 时，$\|\nabla f\| = 1$。设 $D \subset \mathbb{R}^{n-1}$，则余面积公式成为  
> $$
> \int_{D \times [a,b]} g(x) dx_1 \cdots dx_n = \int_a^b dx_n \int_D g(x) dx_1 \cdots dx_{n-1},
> $$
> 这也就是多重积分化累次积分的公式。

/example/  球体的体积和球面的面积之间的关系

> 考虑函数 $f(x) = r = \|x\|$，当 $x \ne 0$ 时 $\|\nabla r\| = 1$，根据余面积公式就得到  
> $$
> v(B_R) = v(f^{-1}[0,R]) = \lim_{\varepsilon \to 0} v(f^{-1}[\varepsilon,R]) = \int_0^R \sigma(S_t) dt,
> $$
> 其中，$B_R$ 是半径为 $R$ 的球体 $\{\|x\| \le R\}$，$S_t$ 是半径为 $t$ 的球面 $\{\|x\| = t\}$。特别地，在 (14.15) 中关于 $R$ 求导，得  
> $$
> \sigma(S_R) = \frac{d}{dR} v(B_R),
> $$
> 我们已经知道球体的体积公式 $v(B_R) = \omega_n R^n$，因此从上式可立即得到球面的面积公式  
> $$
> \sigma(S_R) = n \omega_n R^{n-1}.
> $$
>
> 例如，$n = 2$ 时半径为 $R$ 的圆盘的面积为 $\pi R^2$，从而半径为 $R$ 的圆周的周长为 $(\pi R^2)' = 2\pi R$；$n = 3$ 时，半径为 $R$ 的球体体积为 $(4/3)\pi R^3$，因此半径为 $R$ 的球面的面积为 $((4/3)\pi R^3)' = 4\pi R^2$。
>
> 需要说明的是，如果函数 $f$ 有有限个临界点（驻点），则在广义积分的意义下，余面积公式也成立。
>
> 当 $m \le n$ 时，对于满足一定条件的映射 $f: \mathbb{R}^n \to \mathbb{R}^m$，也有更一般的余面积公式。

## Part 4 Green 公式

### · 边界定向

考虑平面 $\mathbb{R}^2$ 上的有界闭域 $\Omega$，假定其边界由有限条 $C^1$ 曲线组成。$\mathbb{R}^2$ 上的标准定向限制在 $\Omega$ 上就得到 $\Omega$ 的定向。$\Omega$ 的边界 $\partial\Omega$ 有所谓的**诱导定向**。

这个诱导定向定义如下：设 $(x(t), y(t))$ 为 $\partial\Omega$ 的一段参数曲线，则 $(x'(t), y'(t))$ 为切向量，$(y'(t), -x'(t))$ 为法向量。如果 $(y'(t), -x'(t))$ 为相对于区域 $\Omega$ 的外法向量，则参数 $t$ 决定的边界方向称为诱导定向。

直观上看，从外法向到切向的旋转方向是逆时针的，这种确定边界定向的方法又称作“右手法则”。

/example/ 环形区域的边界定向

> 设 $b > a > 0$，平面区域 $\{a^2 \le x^2 + y^2 \le b^2\}$ 是半径为 $b$ 的大圆盘内挖去一个半径为 $a$ 的小圆盘形成的环形区域。
>
> 它的边界由圆周 $\{x^2 + y^2 = b^2\}$ 和 $\{x^2 + y^2 = a^2\}$ 组成。
>
> 按照诱导定向的定义，在大圆 $\{x^2 + y^2 = b^2\}$ 上，方向是逆时针的；而在小圆 $\{x^2 + y^2 = a^2\}$ 上，方向应是顺时针的。

### · Green

下面的重要结果将二重积分和第二型曲线积分联系起来了，这个结果通常称为 **Green 公式**。

**定理2**（Green）

> 设 $\Omega$ 为平面有界区域，其边界由有限条 $C^1$ 曲线组成，边界的定向为诱导定向。如果 $P, Q$ 为 $\Omega$ 上的连续可微函数，则  
> $$
> \int_\Omega \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx dy = \int_{\partial\Omega} P dx + Q dy.
> $$

/proof/

> 我们只证明这个定理的一个特殊情形，一般的情形可以借助下一章的单位分解定理转化为这种特殊情形。先做一些预备工作。
>
> 设 $\varphi: D \to \Omega$ 为 $C^2$ 的可逆映射，记为  
> $$
> \varphi(u,v) = (x(u,v), y(u,v)),\quad (u,v) \in D.
> $$
> 它可以看成 $\mathbb{R}^2$ 内的一个坐标变换。假设 $\varphi$ 是保持定向的，且 $\varphi(\partial D) = \partial\Omega$。我们考察在这个坐标变换下二重积分和第二型曲线积分如何变化。为此设 $\varphi$ 将曲线 $\gamma(t) = (u(t),v(t))$ 映为曲线 $\sigma(t) \subset \partial\Omega$，$t \in [\alpha,\beta]$。按照第二型曲线积分的定义，有  
> $$
> \int_\sigma P dx + Q dy = \int_\alpha^\beta \left[ P(\sigma(t)) x'(t) + Q(\sigma(t)) y'(t) \right] dt.
> $$
>
> 根据复合求导的链规则，有  
> $$
> \begin{aligned}
> P(\sigma(t)) x'(t) + Q(\sigma(t)) y'(t) &= P \cdot (x_u \cdot u'(t) + x_v \cdot v'(t)) + Q \cdot (y_u \cdot u'(t) + y_v \cdot v'(t))\\\\
> &= (P \cdot x_u + Q \cdot y_u) u'(t) + (P \cdot x_v + Q \cdot y_v) v'(t).\\
> \end{aligned}
> $$
>
> 如果记  
> $$
> \tilde{P} = P \cdot x_u + Q \cdot y_u,\quad \tilde{Q} = P \cdot x_v + Q \cdot y_v,
> $$
> 则上面的计算表明  
> $$
> \int_\gamma \tilde{P} du + \tilde{Q} dv = \int_\sigma P dx + Q dy,
> $$
> 用到整个区域边界上就得到  
> $$
> \int_{\partial D} \tilde{P} du + \tilde{Q} dv = \int_{\partial\Omega} P dx + Q dy,
> $$
> 这是第二型曲线积分在坐标变换下的变换公式。
>
> 同理，根据复合求导的链规则，有  
> $$
> \frac{\partial P}{\partial u} = \frac{\partial P}{\partial x} \cdot x_u + \frac{\partial P}{\partial y} \cdot y_u,\quad \frac{\partial P}{\partial v} = \frac{\partial P}{\partial x} \cdot x_v + \frac{\partial P}{\partial y} \cdot y_v,
> $$
> 由此得到  
> $$
> \frac{\partial P}{\partial y} (x_u y_v - y_u x_v) = \frac{\partial P}{\partial v} x_u - \frac{\partial P}{\partial u} x_v,
> $$
> 同理可得  
> $$
> \frac{\partial Q}{\partial x} (x_u y_v - y_u x_v) = \frac{\partial Q}{\partial u} y_v - \frac{\partial Q}{\partial v} y_u,
> $$
> 因此有  
> $$
> \begin{aligned}
> \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \cdot \frac{\partial(x,y)}{\partial(u,v)} &= \left( \frac{\partial P}{\partial u} x_v + \frac{\partial Q}{\partial u} y_v \right) - \left( \frac{\partial P}{\partial v} x_u + \frac{\partial Q}{\partial v} y_u \right)\\\\
> &= \frac{\partial(P x_v + Q y_v)}{\partial u} - \frac{\partial(P x_u + Q y_u)}{\partial v}\\\\
> &= \frac{\partial \tilde{Q}}{\partial u} - \frac{\partial \tilde{P}}{\partial v}.
> \end{aligned}
> $$
>
> 当 $\varphi$ 保持定向时，$x_u y_v - y_u x_v > 0$，根据重积分的变量代换公式就有  
> $$
> \int_D \left( \frac{\partial \tilde{Q}}{\partial u} - \frac{\partial \tilde{P}}{\partial v} \right) du dv = \int_\Omega \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx dy.
> $$
>
> 结合起来我们就发现，要说明 Green 公式在 $\Omega$ 上成立，只要说明它在 $D$ 上成立即可，反之亦然。
>
> 因此，证明 Green 公式的思路就是将一般的区域变为较为简单的区域，然后在较为简单的区域上考虑问题。
>
> 为此仍设 $\sigma(t) = (x(t), y(t))$ 为 $\partial\Omega$ 的一段 $C^2$ 参数曲线，$t \in [\alpha,\beta]$。设 $t_0 \in (\alpha,\beta)$，且 $x'(t_0) \ne 0$。
>
> 通过适当的平移变换以及保定向的正交变换，不妨设 $(x(t_0), y(t_0)) = (0,0)$，$(x'(t_0), y'(t_0)) = (1,0)$。
>
> 因为 $x'(t_0) > 0$，由反函数定理，在 $t = t_0$ 附近 $t$ 可以表示为 $x$ 的函数，从而曲线 $\sigma(t)$ 可以用参数 $x$ 表示，即 $\sigma$ 可以表示为 $\sigma(x) = (x, \phi(x))$，$x \in [-a,a]$。
>
> 这个过程就是将曲线重新参数化，使得 $\sigma$ 表示为函数 $\phi(x)$ 的图像。由于 $\phi(0) = 0$，存在 $0 < \varepsilon < a/2$，使得  
> $$
> |\phi(x)| < a/2,\quad \forall x \in [-\varepsilon,\varepsilon].
> $$
>
> 现在我们再作一个假设：设 $P, Q$ 在 $B_\varepsilon(0)$ 之外恒为零。这样，我们就只需在简单区域 $\Omega \cap B_\varepsilon(0)$ 中考虑 Green 公式即可。
>
> 由于 $(1,0)$ 是原点处的切向，按照右手法则，$(0,-1)$ 应是原点处的单位外法向，因此区域位于 $\phi(x)$ 图像的上方。
>
> 为了简化区域，进一步考虑坐标变换  
> $$
> \varphi(x,y) = (x, y - \phi(x)),\quad (x,y) \in [-a,a] \times [-a,a].
> $$
> 这是保持定向的坐标变换，$\varphi(x,\phi(x)) = (x,0)$，即 $\varphi$ 将 $\sigma$ 变为了 $x$ 轴，且  
> $$
> \varphi(\Omega \cap B_\varepsilon(0)) \subset [-a,a] \times [-a,a].
> $$
>
> 由于边界诱导定向要求法向量 $(0,-1)$ 方向向外，因此 $\varphi(B_\varepsilon(0) \cap \Omega)$ 实际上包含于上半平面。
>
> 由于 $P, Q$ 在 $B_\varepsilon(0)$ 之外恒为零，我们现在只要在矩形 $[-a,a] \times [0,a]$ 上证明 Green 公式就可以了。
>
> 矩形 $I = [-a,a] \times [0,a]$ 由四条边组成，其中 $(x,0)$ ($x \in [-a,a]$) 代表原来的曲线 $\sigma$，而 $P, Q$ 在其余三条边附近均为零。
>
> 因此  
> $$
> \int_{\partial I} P dx + Q dy = \int_{-a}^a P(x,0) dx,
> $$
> 且  
> $$
> \begin{aligned}
> \int_I \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx dy & = \int_0^a dy \int_{-a}^a \frac{\partial Q}{\partial x} dx - \int_{-a}^a dx \int_0^a \frac{\partial P}{\partial y} dy\\\\
> &= \int_0^a [Q(a,y) - Q(-a,y)] dy - \int_{-a}^a [P(x,a) - P(x,0)] dx\\\\
> &= \int_{-a}^a P(x,0) dx,
> \end{aligned}
> $$
> 这说明 Green 公式在 $I$ 上成立。

**注意**：在证明过程中，我们假设了边界是 $C^2$ 曲线，这个条件可以减弱为 $C^1$。更一般地，利用光滑逼近可以证明，当区域边界由有限条可求长连续曲线组成时，Green 公式仍然成立。特别地，当边界由分段 $C^1$ 曲线组成时，Green 公式成立。

/example/ 简单闭曲线所围区域的面积

> 设 $\gamma(t) = (x(t), y(t))$ ($t \in [\alpha,\beta]$) 为 $\mathbb{R}^2$ 上分段连续可微的简单闭曲线，它围成的区域记为 $\Omega$。在 Green 公式中取 $P(x,y) = -y$, $Q(x,y) = x$，则得到如下面积公式  
> $$
> \begin{aligned}
> \sigma(\Omega) &= \frac{1}{2} \int_\Omega \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx dy = \frac{1}{2} \int_\Omega P dx + Q dy\\\\
> &= \frac{1}{2} \int_\alpha^\beta [x(t) y'(t) - x'(t) y(t)] dt,
> \end{aligned}
> $$
> 其中，参数 $t$ 选取的方向是逆时针的。
>
> 作为例子，考虑椭圆 $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ 所围成的面积。椭圆的参数方程为  
> $$
> x(t) = a \cos t,\quad y(x) = b \sin t,\quad t \in [0,2\pi],
> $$
> 于是其面积为  
> $$
> \sigma = \frac{1}{2} \int_0^{2\pi} (a \cos t \cdot b \cos t + a \sin t \cdot b \sin t) dt = \pi ab.
> $$

### · 平面分部积分公式

> 在 Green 公式的条件下，如果 $v$ 为 $C^1$ 函数，则由  
> $$
> \frac{\partial(Qv)}{\partial x} - \frac{\partial(Pv)}{\partial y} = \left[ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right] v + \left[ Q \frac{\partial v}{\partial x} - P \frac{\partial v}{\partial y} \right]
> $$
> 可得  
> $$
> \int_\Omega \left[ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right] v\, dx dy = \int_{\partial\Omega} v(P\, dx + Q\, dy) - \int_\Omega \left[ Q \frac{\partial v}{\partial x} - P \frac{\partial v}{\partial y} \right] dx dy.
> $$
> 这可以看成平面上的分部积分公式。
>
> 对于 $C^2$ 函数 $u$，如果记  
> $$
> \Delta u = u_{xx} + u_{yy} = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2},\quad \nabla u = (u_x, u_y) = \left( \frac{\partial u}{\partial x}, \frac{\partial u}{\partial y} \right),
> $$
> 以 $P = -u_y$, $Q = u_x$ 代入上式得  
> $$
> \int_\Omega v \Delta u\, dx dy = \int_{\partial\Omega} v(-u_y\, dx + u_x\, dy) - \int_\Omega \nabla u \cdot \nabla v\, dx dy.
> $$
>
> 利用单位外法向量 $\vec{n}$、弧长参数 $s$ 以及等式  
> $$
> \vec{n}\, ds = (y'(t), -x'(t))\, dt,
> $$
> 可以将上式改写为  
> $$
> \int_\Omega v \Delta u\, dx dy = \int_{\partial\Omega} v(\nabla u \cdot \vec{n})\, ds - \int_\Omega \nabla u \cdot \nabla v\, dx dy,
> $$
> 或用方向导数继续改写为  
> $$
> \int_\Omega v \Delta u\, dx dy = \int_{\partial\Omega} v \frac{\partial u}{\partial n}\, ds - \int_\Omega \nabla u \cdot \nabla v\, dx dy.
> $$
>
> 如果 $v$ 也是 $C^2$ 函数，则在上式中交换 $u$ 与 $v$ 的位置，然后两式相减可得  
> $$
> \int_\Omega (v \Delta u - u \Delta v)\, dx dy = \int_{\partial\Omega} \left( v \frac{\partial u}{\partial n} - u \frac{\partial v}{\partial n} \right) ds.
> $$
>
> 这些都是很有用的公式。
