---
title: Lesson 5 狭义相对论 II
permalink: /electrodynamics/electrodynamics-5/
createTime: 2026/03/13 22:03:59
---

## Part 2 相对论动力学

### · 相对论动力学基础

根据爱因斯坦的狭义相对性原理，所有的物理定律及运动方程在等价的惯性系中都应该具有相同的表述形式. 我们现在又知道，不同惯性系中的空间和时间坐标是通过洛伦兹变换联系起来的. 而这一变换不改变相应的四维向量的点乘. 

因此，一个很自然的想法是，所有的运动方程都应该写成两个四维向量的内积的形式. 

为了实现这一想法，首先我们看如何改写动量的定义. 在三维空间中，一个质点的动量被定义为

$$
\mathbf{p} = m_0 \mathbf{v} = m_0 \frac{d\mathbf{r}}{dt}.
$$

这里，$m_0$ 应被理解为质点的固有质量，即它在与其一起运动的参照系中的静止质量. 由于时间间隔 $dt$ 不是一个洛伦兹变换下的不变量，我们必须找一个具有时间量纲的洛伦兹变换下的不变量来替换它，以构成一个洛伦兹协变的四维动量（即其内积在洛伦兹变换下不变）. 实际上，我们可以去如下的量来代替 $\Delta t$. 

$$
\begin{aligned}
\Delta \tau \equiv \frac{1}{c} \Delta s &= \frac{1}{c} \sqrt{c^2 (\Delta t)^2 - (\Delta x)^2 - (\Delta y)^2 - (\Delta z)^2} \\\\
&= \frac{1}{c} \sqrt{c^2 (t_2 - t_1)^2 - (x_2 - x_1)^2 - (y_2 - y_1)^2 - (z_2 - z_1)^2}.
\end{aligned}
$$

显然，这是一个在洛伦兹变换下不变的量. 其次，在空间同一点处 $(x_1 = x_2, y_1 = y_2, z_1 = z_2)$，我们有

$$
\Delta \tau = \sqrt{(\Delta t)^2} = \Delta t.
$$

因此，它的确是具有时间量纲的量，被称为质点的固有时间. 

现在，我们可以重新引入动量的空间分量为

$$
\begin{aligned}
p_x &= m_0 \frac{dx}{d\tau} = m_0 c \frac{dx}{ds} = \frac{m_0 c \, dx}{\sqrt{c^2 (dt)^2 - (dx)^2 - (dy)^2 - (dz)^2}} \\\\
&= \frac{m_0 c \, dx}{dt \sqrt{c^2 - \left( \frac{dr}{dt} \right)^2}} = \frac{m_0 c \, dx}{dt \sqrt{c^2 - v^2}} = \frac{m_0 v_x}{\sqrt{1 - \frac{v^2}{c^2}}},
\end{aligned}
$$

以及

$$
p_y = \frac{m_0 v_y}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad p_z = \frac{m_0 v_z}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$

为了构造四维动量的第四个分量，我们仿照上面的定义. 令 $x_1 = x$, $x_2 = y$, $x_3 = z$ 和 $x_4 = ict$，则我们有

$$
p_4 = m_0 \frac{dx_4}{d\tau} = m_0 c \frac{d(ict)}{\sqrt{c^2 dt^2 - dr^2}} = m_0 \frac{ic \frac{dt}{dt}}{\sqrt{1 - \frac{v^2}{c^2}}} = i \frac{m_0 c}{\sqrt{1 - \frac{v^2}{c^2}}} \equiv i \frac{E}{c}.
$$

这里，物理量

$$
E = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}}
$$

具有能量量纲，称为质点的能量. 

上面的动量表达式看起来有点怪异，但实际上在低速极限 $\dfrac{v}{c} \sim 0$ 下，我们有

$$
p_x \approx m_0 v_x, \quad p_y \approx m_0 v_y, \quad p_z \approx m_0 v_z,
$$

即牛顿力学中的表达式. 更为重要的是，我们有

$$
p_1^2 + p_2^2 + p_3^2 + p_4^2 = \frac{m_0^2 v^2}{1 - \frac{v^2}{c^2}} - \frac{m_0^2 c^2}{1 - \frac{v^2}{c^2}} = m_0^2 \frac{v^2 - c^2}{1 - \frac{v^2}{c^2}} = m_0^2 c^2 \frac{v^2 - c^2}{c^2 - v^2} = -m_0^2 c^2.
$$

由于光速不变假设，这显然是一个在洛伦兹变换下不变的量. 因此，我们找到了四维协变动量的正确的表达式. 

从四维协变动量的表达式出发，我们可以得到如下的结论. 

> (1) 如果坚持使用牛顿力学中的动量表达式
>
> $$
> p_x = m v_x, \quad p_y = m v_y, \quad p_z = m v_z,
> $$
>
> 则质点的质量 $m$ 应该被写作
>
> $$
> m = \frac{m_0}{\sqrt{1 - \frac{v^2}{c^2}}} > m_0.
> $$
>
> 换句话说，一旦质点运动起来，其表观质量 $m$ 应该大于其静止质量 $m_0$. 
>
> (2) 我们看到，质点的能量 $E$ 是以形式
>
> $$
> E = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}}
> $$
>
> 形式出现. 

这与我们过去所熟知的质点能量的表达式非常不一样. 在低速运动的极限下，前者是否可以退化为后者呢？

实际上，当 $v \ll c$ 时，我们可以利用展开式

$$
\frac{1}{\sqrt{1 - \frac{v^2}{c^2}}} \approx 1 + \frac{1}{2} \frac{v^2}{c^2} + O \left( \frac{v^4}{c^4} \right)
$$

近似得到

$$
E = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}} \approx m_0 c^2 \left( 1 + \frac{1}{2} \frac{v^2}{c^2} \right) = m_0 c^2 + \frac{1}{2} m_0 v^2.
$$

公式的第二项是我们熟知的牛顿力学中质点动能的表达式. 而第一项则是牛顿力学中未曾出现过的，称为质点的静止能. 因此，在相对论力学中，能量守恒应该被表述为

$$
E = \sum_{i=1}^{N} \frac{m_{i0} c^2}{\sqrt{1 - \frac{v_i^2}{c^2}}} + \text{Q} = \text{Const}.
$$

在低速度近似下，我们可以将其近似地写作

$$
E = \sum_{i=1}^{N} m_{i0} c^2 + \frac{1}{2} \sum_{i=1}^{N} m_{i0} v_i^2 + \text{Q} = \text{Const}.
$$

这一公式的一个直接推论是，若在某种物理过程的前后，体系中的粒子的总静止能减少了，则粒子的总动能或内能必然增加. 这是今天核发电以及核武器的基本原理. 

从公式

$$
E = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad \mathbf{p} = \frac{m_0 \mathbf{v}}{\sqrt{1 - \frac{v^2}{c^2}}}
$$

出发，我们可以得到如下的质点动量与速度之间的关系

$$
\mathbf{v} = \frac{\mathbf{p} c^2}{E}.
$$

与恒等式

$$
p^2 - \frac{E^2}{c^2} = -m_0^2 c^2,
$$

或是

$$
E^2 = p^2 c^2 + m_0^2 c^4
$$

一起构成了相对论性质点动力学的基础. 由此得到的一个直接推论是，自然界可能存在质量为零 $(m_0 = 0)$ 的粒子. 

此时，上面的公式化为
$$
E^2 = p^2 c^2,
$$

或是

$$
E = pc.
$$

因此，我们有

$$
\mathbf{v} = \dfrac{pc^2}{E} = \dfrac{pc^2}{pc} = c \dfrac{\mathbf{p}}{p} = c \mathbf{e}_p.
$$

也就是说，这种粒子的速度与光速相同. 另一方面，若一个质点的静止质量不为零，则其速率满足方程

$$
|\mathbf{v}| = \frac{|\mathbf{p}| c^2}{E} = \frac{pc^2}{\sqrt{p^2 c^2 + m_0^2 c^4}} < \frac{pc^2}{\sqrt{p^2 c^2}} = \frac{pc^2}{pc} = c.
$$

也就是说，其速率永远小于光速. 

今天，我们知道，静止质量为零的粒子有光子，中微子以及引力子. 

由于 $\left(p_x, p_y, p_z, i \dfrac{E}{c}\right)$ 与 $(x, y, z, ict)$ 一样构成了一个四维动量向量，故在 Lorentz 变换下，它们具有相同的变换规律. 

因此，我们可以立刻写出
$$
p'_x = \frac{p_x - \frac{V}{c} \frac{E}{c}}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{p_x - \frac{V E}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}}, \quad p'_y = p_y, \quad p'_z = p_z,
$$

以及

$$
E' = \frac{E - V p_x}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

这里，$\left(p_x, p_y, p_z, i \dfrac{E}{c}\right)$ 和 $\left(p'_x, p'_y, p'_z, i \dfrac{E'}{c}\right)$ 分别同一个质点的四维动量向量在 $S$ 系和 $S'$ 系中的分量. 而 $S'$ 系相对 $S$ 系以匀速 $V$ 沿 $x$-轴的方向运动. 

从公式

$$
E = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad \mathbf{p} = \frac{m_0 \mathbf{v}}{\sqrt{1 - \frac{v^2}{c^2}}}
$$

出发，我们可以得到如下的质点动量与速度之间的关系

$$
\mathbf{v} = \frac{\mathbf{p} c^2}{E}.
$$

现在，我们来看一看，在狭义相对论中，牛顿运动方程应该做怎样的修改. 牛顿第二定律告诉我们，质点的运动满足方程

$$
\frac{d\mathbf{p}}{dt} = \mathbf{f}.
$$

这一方程显然在洛伦兹变换下不是协变的. 为了将它改写成协变的形式，我们可以引入所谓四维力 $(\tilde{f}_1, \tilde{f}_2, \tilde{f}_3, \tilde{f}_4)$. 在一个给定的惯性参照系中，我们要求 $\tilde{f}_1$, $\tilde{f}_2$ 和 $\tilde{f}_3$ 与作用在质点上的外力在与该参照系相连接的坐标系中的投影 $f_x$, $f_y$ 和 $f_z$ 分别成正比. 而 $\tilde{f}_4$ 则由这一四维力的长度在洛伦兹变换下不变这一条件来决定. 相应地，我们应将牛顿方程改写为

$$
\frac{dp_i}{d\tau} = \frac{dp_i}{\frac{1}{c} ds} = \tilde{f}_i
$$

的形式. 这样以来，质点的运动方程就成为洛伦兹变换下协变的了. 具体写出来，我们有

$$
\tilde{f}_x = \frac{dp_x}{\frac{1}{c} ds} = \frac{cdp_x}{\sqrt{c^2 dt^2 - (dx)^2 - (dy)^2 - (dz)^2}} = \frac{\frac{dp_x}{dt}}{\sqrt{1 - \frac{v^2}{c^2}}} = \frac{f_x}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$

在推导的最后一步，我们利用了在给定惯性系下的牛顿方程

$$
\frac{dp_x}{dt} = f_x.
$$

同理，我们有

$$
\tilde{f}_y = \frac{f_y}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad \tilde{f}_z = \frac{f_z}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$

现在，我们来决定四维力的第四个分量 $\tilde{f}_4$. 按照定义，我们有

$$
\tilde{f}_4 = \frac{dp_4}{\frac{1}{c} ds} = \frac{\frac{i}{c} \frac{dE}{dt}}{\sqrt{1 - \frac{v^2}{c^2}}} = i \frac{\dot{E}}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$

为了检验这样定义的四维力在物理上是否有意义，让我们考察它和四维动量的内积. 按照定义，我们有

$$
\sum_{i=1}^{4} p_i \tilde{f}_i = \sum_{i=1}^{4} p_i \frac{dp_i}{\frac{1}{c} ds} = \frac{m_0 f_x v_x + m_0 f_y v_y + m_0 f_z v_z - m_0 c \cdot \frac{\dot{E}}{c}}{\left( \sqrt{1 - \frac{v^2}{c^2}} \right)^2} = \frac{m_0 \mathbf{f} \cdot \mathbf{v} - m_0 \dot{E}}{1 - \frac{v^2}{c^2}}.
$$

另一方面，我们可以很容易地验证，这一公式的左边应该恒等于零. 实际上，

$$
\sum_{i=1}^{4} \frac{dp_i}{\frac{1}{c} ds} = \sum_{i=1}^{4} \frac{1}{2} \frac{dp_i^2}{\frac{1}{c} ds} = \frac{1}{2} \frac{d(-m_0^2 c^2)}{\frac{1}{c} ds} \equiv 0.
$$

即

$$
m_0 \mathbf{f} \cdot \mathbf{v} - m_0 \dot{E} = 0,
$$

或是

$$
\mathbf{f} \cdot \mathbf{v} = \frac{dE}{dt},
$$

也就是说，外力所做之功的功率，等于质点能量随时间的改变率. 这与我们以前的结论是完全一致的. 

### · 电磁场的洛伦兹变换

下面我们试求电磁场强度矢量 $\mathbf{E}(x, y, z, t)$ 和 $\mathbf{B}(x, y, z, t)$ 在洛伦兹变换下的变换关系. 

> 我们已经知道，在实验室系中，电磁场强度矢量 $\mathbf{E}(x, y, z, t)$ 和 $\mathbf{B}(x, y, z, t)$ 满足方程
>
> $$
> \nabla \times \mathbf{E}(x, y, z, t) = -\frac{\partial \mathbf{B}(x, y, z, t)}{\partial t}, \quad \nabla \cdot \mathbf{B}(x, y, z, t) = 0,
> $$
>
> 即
>
> $$
> \begin{aligned}
> &\frac{\partial E_z(x, y, z, t)}{\partial y} - \frac{\partial E_y(x, y, z, t)}{\partial z} = -\frac{\partial B_x(x, y, z, t)}{\partial t}, \\
> &\frac{\partial E_x(x, y, z, t)}{\partial z} - \frac{\partial E_z(x, y, z, t)}{\partial x} = -\frac{\partial B_y(x, y, z, t)}{\partial t}, \\
> &\frac{\partial E_y(x, y, z, t)}{\partial x} - \frac{\partial E_x(x, y, z, t)}{\partial y} = -\frac{\partial B_z(x, y, z, t)}{\partial t}, \\
> &\frac{\partial B_x(x, y, z, t)}{\partial x} + \frac{\partial B_y(x, y, z, t)}{\partial y} + \frac{\partial B_z(x, y, z, t)}{\partial z} = 0.
> \end{aligned}
> \tag{1}
> $$
>
> 那么根据相对性原理，在另外一个相对实验室系以匀速 $\mathbf{V}$ 运动的参照系 $S'$ 中的电磁场强度矢量 $\mathbf{E}'(x', y', z', t')$ 和 $\mathbf{B}'(x', y', z', t')$ 也应满足相同的方程，即
>
> $$
> \begin{aligned}
> &\frac{\partial E'_z(x', y', z', t')}{\partial y'} - \frac{\partial E'_y(x', y', z', t')}{\partial z'} = -\frac{\partial B'_x(x', y', z', t')}{\partial t'}, \\
> &\frac{\partial E'_x(x', y', z', t')}{\partial z'} - \frac{\partial E'_z(x', y', z', t')}{\partial x'} = -\frac{\partial B'_y(x', y', z', t')}{\partial t'}, \\
> &\frac{\partial E'_y(x', y', z', t')}{\partial x'} - \frac{\partial E'_x(x', y', z', t')}{\partial y'} = -\frac{\partial B'_z(x', y', z', t')}{\partial t'}, \\
> &\frac{\partial B'_x(x', y', z', t')}{\partial x'} + \frac{\partial B'_y(x', y', z', t')}{\partial y'} + \frac{\partial B'_z(x', y', z', t')}{\partial z'} = 0.
> \end{aligned}
> \tag{2}
> $$
>
> 另一方面，当 $\mathbf{V}$ 的方向是沿 $x$ 轴时，在洛伦兹变换下，我们有
>
> $$
> \begin{aligned}
> \frac{\partial}{\partial x} &= \frac{\partial}{\partial x'} \frac{\partial x'}{\partial x} + \frac{\partial}{\partial t'} \frac{\partial t'}{\partial x} = \frac{1}{\sqrt{1 - \beta^2}} \frac{\partial}{\partial x'} - \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial}{\partial t'}, \\\\
> \frac{\partial}{\partial y} &= \frac{\partial}{\partial y'}, \quad \frac{\partial}{\partial z} = \frac{\partial}{\partial z'}, \\\\
> \frac{\partial}{\partial t} &= \frac{\partial}{\partial x'} \frac{\partial x'}{\partial t} + \frac{\partial}{\partial t'} \frac{\partial t'}{\partial t} = -\frac{V}{\sqrt{1 - \beta^2}} \frac{\partial}{\partial x'} + \frac{1}{\sqrt{1 - \beta^2}} \frac{\partial}{\partial t'}.
> \end{aligned}
> $$
>
> 这里，$\beta = V / c$. 将之代入 (1) 式后，我们得到
>
> $$
> \begin{aligned}
> &\frac{\partial E_z(x, y, z, t)}{\partial y'} - \frac{\partial E_y(x, y, z, t)}{\partial z'} \\\\
> &= \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial x'} - \frac{1}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial t'},
> \end{aligned}
> \tag{3}
> $$
>
> $$
> \begin{aligned}
> &\frac{\partial E_x(x, y, z, t)}{\partial z'} - \frac{1}{\sqrt{1 - \beta^2}} \frac{\partial E_z(x, y, z, t)}{\partial x'} + \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial E_z(x, y, z, t)}{\partial t'} \\\\
> &= \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial B_y(x, y, z, t)}{\partial x'} - \frac{1}{\sqrt{1 - \beta^2}} \frac{\partial B_y(x, y, z, t)}{\partial t'},
> \end{aligned}
> \tag{4}
> $$
>
> $$
> \begin{aligned}
> &\frac{1}{\sqrt{1 - \beta^2}} \frac{\partial E_y(x, y, z, t)}{\partial x'} - \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial E_y(x, y, z, t)}{\partial t'} - \frac{\partial E_x(x, y, z, t)}{\partial y'} \\\\
> &= \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial B_z(x, y, z, t)}{\partial x'} - \frac{1}{\sqrt{1 - \beta^2}} \frac{\partial B_z(x, y, z, t)}{\partial t'},
> \end{aligned}
> \tag{5}
> $$
>
> $$
> \begin{aligned}
> &\frac{1}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial x'} - \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial t'} + \frac{\partial B_y(x, y, z, t)}{\partial y'} \\\\
> &+ \frac{\partial B_z(x, y, z, t)}{\partial z'} = 0.
> \end{aligned}
> \tag{6}
> $$
>
> 现将 (3) 式乘以 $V / c^2$ 后在与 (6) 式相加
>
> $$
> \begin{aligned}
> &\frac{V}{c^2} \frac{\partial E_z(x, y, z, t)}{\partial y'} - \frac{V}{c^2} \frac{\partial E_y(x, y, z, t)}{\partial z'} + \frac{1}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial x'} \\\\
> &- \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial t'} + \frac{\partial B_y(x, y, z, t)}{\partial y'} + \frac{\partial B_z(x, y, z, t)}{\partial z'} \\\\
> &= \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial x'} - \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial t'}.
> \end{aligned}
> $$
>
> 移项后我们有
>
> $$
> \begin{aligned}
> &\sqrt{1 - \beta^2} \frac{\partial B_x(x, y, z, t)}{\partial x'} + \frac{\partial}{\partial y'} \left( B_y(x, y, z, t) + \frac{V}{c^2} E_z(x, y, z, t) \right) \\\\
> &+ \frac{\partial}{\partial z'} \left( B_z(x, y, z, t) - \frac{V}{c^2} E_y(x, y, z, t) \right) = 0,
> \end{aligned}
> $$
>
> 或是
>
> $$
> \begin{aligned}
> &\frac{\partial B_x(x, y, z, t)}{\partial x'} + \frac{\partial}{\partial y'} \left( \frac{B_y(x, y, z, t) + \frac{V}{c^2} E_z(x, y, z, t)}{\sqrt{1 - \beta^2}} \right) \\\\
> &+ \frac{\partial}{\partial z'} \left( \frac{B_z(x, y, z, t) - \frac{V}{c^2} E_y(x, y, z, t)}{\sqrt{1 - \beta^2}} \right) = 0.
> \end{aligned}
> \tag{7}
> $$
>
> 同理，将 (6) 式乘以 $V$ 后再与 (3) 式相加给出
>
> $$
> \begin{aligned}
> &\frac{\partial E_z(x, y, z, t)}{\partial y'} - \frac{\partial E_y(x, y, z, t)}{\partial z'} + \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial x'} \\\\
> &- \frac{V^2}{c^2} \frac{\partial B_x(x, y, z, t)}{\partial t'} + V \frac{\partial B_y(x, y, z, t)}{\partial y'} + V \frac{\partial B_z(x, y, z, t)}{\partial z'} \\\\
> &= \frac{V}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial x'} - \frac{1}{\sqrt{1 - \beta^2}} \frac{\partial B_x(x, y, z, t)}{\partial t'}.
> \end{aligned}
> $$
>
> 移项并整理后我们有
>
> $$
> \begin{aligned}
> &\frac{\partial}{\partial y'} \left( E_z(x, y, z, t) + V B_y(x, y, z, t) \right) - \frac{\partial}{\partial z'} \left( E_y(x, y, z, t) - V B_z(x, y, z, t) \right) \\\\
> &= -\sqrt{1 - \beta^2} \frac{\partial B_x(x, y, z, t)}{\partial t'},
> \end{aligned}
> $$
>
> 或是
>
> $$
> \begin{aligned}
> &\frac{\partial}{\partial y'} \left( \frac{E_z(x, y, z, t) + V B_y(x, y, z, t)}{\sqrt{1 - \beta^2}} \right) - \frac{\partial}{\partial z'} \left( \frac{E_y(x, y, z, t) - V B_z(x, y, z, t)}{\sqrt{1 - \beta^2}} \right) \\\\
> &= -\frac{\partial B_x(x, y, z, t)}{\partial t'},
> \end{aligned}
> \tag{8}
> $$
>
> 接下来，我们再看将 (4) 式两边移项的结果
>
> $$
> \begin{aligned}
> &\frac{\partial E_x(x, y, z, t)}{\partial z'} - \frac{\partial}{\partial x'} \left( \frac{E_z(x, y, z, t) + V B_y(x, y, z, t)}{\sqrt{1 - \beta^2}} \right) \\\\
> &= -\frac{\partial}{\partial t'} \left( \frac{B_y(x, y, z, t) + \frac{V}{c^2} E_z(x, y, z, t)}{\sqrt{1 - \beta^2}} \right),
> \end{aligned}
> \tag{9}
> $$
>
> 以及将 (5) 式两边移项的结果
>
> $$
> \begin{aligned}
> &\frac{\partial}{\partial x'} \left( \frac{E_y(x, y, z, t) - V B_z(x, y, z, t)}{\sqrt{1 - \beta^2}} \right) - \frac{\partial E_x(x, y, z, t)}{\partial y'} \\\\
> &= -\frac{\partial}{\partial t'} \left( \frac{B_z(x, y, z, t) - \frac{V}{c^2} E_y(x, y, z, t)}{\sqrt{1 - \beta^2}} \right).
> \end{aligned}
> \tag{10}
> $$
>
> 若我们在方程 (7)，(8)，(9) 和 (10) 中令
>
> $$
> \begin{aligned}
> &E_x(x, y, z, t) \equiv E'_x(x', y', z', t'), \\\\
> &\frac{E_y(x, y, z, t) - V B_z(x, y, z, t)}{\sqrt{1 - \beta^2}} \equiv E'_y(x', y', z', t'), \\\\
> &\frac{E_z(x, y, z, t) + V B_y(x, y, z, t)}{\sqrt{1 - \beta^2}} \equiv E'_z(x', y', z', t'), \\\\
> &B_x(x, y, z, t) \equiv B'_x(x', y', z', t'), \\\\
> &\frac{B_y(x, y, z, t) + \frac{V}{c^2} E_z(x, y, z, t)}{\sqrt{1 - \beta^2}} \equiv B'_y(x', y', z', t'), \\\\
> &\frac{B_z(x, y, z, t) - \frac{V}{c^2} E_y(x, y, z, t)}{\sqrt{1 - \beta^2}} \equiv B'_z(x', y', z', t'),
> \end{aligned}
> \tag{11}
> $$
>
> 则方程组 (2) 中的诸方程将自动得到满足. 由此，我们得到了电磁场强度矢量在洛伦兹变换下的变换关系.

我们可以将这些变换式更为紧凑地写作

$$
\mathbf{E}_{\perp}(x_1, x_2, x_3, x_4) = \frac{\mathbf{E}'_{\perp}(x'_1, x'_2, x'_3, x'_4) - \mathbf{V} \times \mathbf{B}'(x'_1, x'_2, x'_3, x'_4)}{\sqrt{1 - \beta^2}},
$$

以及

$$
\mathbf{B}_{\perp}(x_1, x_2, x_3, x_4) = \frac{\mathbf{B}'_{\perp}(x'_1, x'_2, x'_3, x'_4) + \frac{\mathbf{V}}{c^2} \times \mathbf{E}'(x'_1, x'_2, x'_3, x'_4)}{\sqrt{1 - \beta^2}},
$$

并连同 $\mathbf{E}_{\parallel}(x, y, z, t) = \mathbf{E}'_{\parallel}(x', y', z', t')$ 和 $\mathbf{B}_{\parallel}(x, y, z, t) = \mathbf{B}'_{\parallel}(x', y', z', t')$. 

因此，若在 $S'$ 系中，$\mathbf{B}' = 0$，则在实验室系中我们有
$$
\mathbf{E}(x_1, x_2, x_3, x_4) = \frac{\mathbf{E}'(x'_1, x'_2, x'_3, x'_4)}{\sqrt{1 - \beta^2}}, \quad \mathbf{B}(x_1, x_2, x_3, x_4) = \frac{\frac{\mathbf{V}}{c^2} \times \mathbf{E}'(x'_1, x'_2, x'_3, x'_4)}{\sqrt{1 - \beta^2}},
$$

即

$$
\mathbf{B}(x_1, x_2, x_3, x_4) = \frac{\mathbf{V}}{c^2} \times \mathbf{E}(x_1, x_2, x_3, x_4).
$$

同理，若在 $S'$ 系中 $\mathbf{E}' = 0$ 成立，则在实验室中我们有

$$
\mathbf{E}(x_1, x_2, x_3, x_4) = -\frac{\mathbf{V} \times \mathbf{B}'(x'_1, x'_2, x'_3, x'_4)}{\sqrt{1 - \beta^2}}, \quad \mathbf{B}(x_1, x_2, x_3, x_4) = \frac{\mathbf{B}'(x'_1, x'_2, x'_3, x'_4)}{\sqrt{1 - \beta^2}},
$$

或是

$$
\mathbf{E}(x_1, x_2, x_3, x_4) = -\mathbf{V} \times \mathbf{B}(x_1, x_2, x_3, x_4).
$$

除此之外，利用电磁场强的变换公式，不难验证下面的两式

$$
B^2(x, y, z, t) - \frac{1}{c^2} E^2(x, y, z, t) = B'^2(x', y', z', t') - \frac{1}{c^2} E'^2(x', y', z', t')
$$

以及

$$
\mathbf{B}(x, y, z) \cdot \mathbf{E}(x, y, z) = \mathbf{B}'(x', y', z', t') \cdot \mathbf{E}'(x', y', z', t')
$$

亦成立. 这一事实导致了一些有趣的结论：

> (i) 若一个体系中的电场强度 $\mathbf{E}$ 与磁感应强度 $\mathbf{B}$ 在一个惯性系中是彼此垂直的，则它们在任何一个惯性系中都是垂直的. 
>
> (ii) 若在一个惯性系中，电场强度 $\mathbf{E}$ 与磁感应强度 $\mathbf{B}$ 的夹角是锐角（或钝角），则在其它惯性系中，这一夹角仍为锐角（或钝角）. 
>
> (iii) 若在一个惯性系中，$\mathbf{E} \cdot \mathbf{B} = 0$，那么考虑到 $B^2 - \dfrac{1}{c^2} E^2$ 也是一个洛伦兹变换下的不变量，我们总可以找到另外一个惯性参照系，在其中 $\mathbf{E} = 0$ 或是 $\mathbf{B} = 0$ 成立
>
> （取决于 $B^2 - \dfrac{1}{c^2} E^2 > 0$ 还是 $B^2 - \dfrac{1}{c^2} E^2 < 0$ 成立）. 
>
> (iv) 反之，若在某一惯性参照系中，$\mathbf{E} = 0$ 或 $\mathbf{B} = 0$ 成立，那么在其它惯性系中的电场强度矢量和磁感应强度矢量总是彼此垂直的. 

### · 真空电磁场平面波解

**定理:** 平面电磁波解的波矢 $\mathbf{k}$ 和角频率 $\omega$ 构成一个四维矢量. 

> 在推导
> $$
> \mathbf{f} \cdot \mathbf{v} = \frac{dE}{dt},
> $$
> 的过程中，我们利用了四维动量 $(p_1, p_2, p_3, p_4)$ 和四维力 $(\bar{f}_1, \bar{f}_2, \bar{f}_3, \bar{f}_4)$ 的内积是一个标量这一事实. 现在，我们再将此事强调一下. 先仍然考虑二维空间的情况. 我们已知一个质点在两个坐标系 $S$ 和 $S'$ 中的坐标之间的联系为
>
> $$
> x' = x \cos \theta + y \sin \theta, \quad y' = -x \sin \theta + y \cos \theta.
> $$
>
> 这里，$\theta$ 为 $x$ 轴与 $x'$ 轴之间的夹角. 我们又知，该质点的动量 $p_x = m_0 \dfrac{dx}{dt}, p_y = m_0 \dfrac{dy}{dt}$ 以及加速度 $a_x = \dfrac{d^2 x}{dt^2}, a_y = \dfrac{d^2 y}{dt^2}$ 在伽利略变换 $t = t'$ 成立的情况下各自是一个二维矢量，即它们的分量在两个坐标系之间也按照 (156) 式进行变换的. 也就是说，我们有
>
> $$
> p'_x = p_x \cos \theta + p_y \sin \theta, \quad p'_y = -p_x \sin \theta + p_y \cos \theta
> $$
>
> 以及
>
> $$
> a'_x = a_x \cos \theta + a_y \sin \theta, \quad a'_y = -a_x \sin \theta + a_y \cos \theta.
> $$
>
> 我们可以将这一概念加以推广. 对于按照某种规则给定的数组 $\vec{\chi} = (\chi_x, \chi_y)$，若在上述的两个坐标系的变换下遵从关系
>
> $$
> \chi'_x = \chi_x \cos \theta + \chi_y \sin \theta, \quad \chi'_y = -\chi_x \sin \theta + \chi_y \cos \theta
> $$
>
> 进行变换，那么我们将 $\vec{\chi}$ 称为一个二维矢量. 一个重要的事实是，对于任意两个二维矢量 $\mathbf{A}$ 和 $\mathbf{B}$，它们的内积
>
> $$
> \mathbf{A} \cdot \mathbf{B} \equiv A_x B_x + A_y B_y
> $$
>
> 是一个标量，即在坐标变换下保持不变. 实际上，我们有
>
> $$
> \begin{aligned}
> &\mathbf{A}' \cdot \mathbf{B}' = A'_x B'_x + A'_y B'_y \\\\
> &= (A_x \cos \theta + A_y \sin \theta)(B_x \cos \theta + B_y \sin \theta) \\\\
> &+ (-A_x \sin \theta + A_y \cos \theta)(-B_x \sin \theta + B_y \cos \theta) \\\\
> &= A_x B_x \cos^2 \theta + A_y B_x \sin \theta \cos \theta + A_x B_y \sin \theta \cos \theta + A_y B_y \sin^2 \theta \\\\
> &+ A_x B_x \sin^2 \theta - A_y B_x \sin \theta \cos \theta - A_x B_y \sin \theta \cos \theta + A_y B_y \cos^2 \theta \\\\
> &= A_x B_x + A_y B_y = \mathbf{A} \cdot \mathbf{B}.
> \end{aligned}
> $$
>
> 同理，我们现在可以将一个数组 $F^{(4)} = (f_1, f_2, f_3, f_4)$ 定义为一个四维矢量，若在两个惯性参照系 $S$ 和 $S'$ 之间，它满足与坐标 $(x_1, x_2, x_3, x_4)$ 相同的洛伦兹变换，即
>
> $$
> \begin{aligned}
> f'_1 &= f_1 \cos \theta + f_4 \sin \theta = \frac{f_1}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{\left( -\frac{V}{ic} \right) f_4}{\sqrt{1 - \frac{V^2}{c^2}}}, \\\\
> f'_2 &= f_2, \quad f'_3 = f_3, \\\\
> f'_4 &= -f_1 \sin \theta + f_4 \cos \theta = \frac{\left( -\frac{V}{ic} \right) f_1}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{f_4}{\sqrt{1 - \frac{V^2}{c^2}}}
> \end{aligned}
> $$
>
> 成立. 根据这一定义，不难验证，两个四维矢量 $F^{(4)}$ 和 $G^{(4)}$ 的内积
>
> $$
> F^{(4)} \cdot G^{(4)} \equiv f_1 g_1 + f_2 g_2 + f_3 g_3 + f_4 g_4
> $$
>
> 是洛伦兹变换下的不变量. 重要的是，这一结论的逆变换亦成立. 也就是说，若两个四维数组的内积在洛伦兹变化下不变，而且又知其中一个数组是一个四维矢量，那么另外一个数组必也是一个四维持矢量. 
>
> 接下来，我们要用这一逆定理来证明在真空中传播的平面电磁波的波矢量 $\mathbf{k}$ 和角频率 $\omega$ 一起构成一个四维矢量. 
>
> 首先，我们已经知道真空中的电磁场强度矢量满足朗贝尔方程
>
> $$
> \frac{\partial^2 \mathbf{E}(x, y, z, t)}{\partial t^2} - c^2 \nabla^2 \mathbf{E}(x, y, z, t) = 0
> $$
>
> 及
>
> $$
> \frac{\partial^2 \mathbf{B}(x, y, z, t)}{\partial t^2} - c^2 \nabla^2 \mathbf{B}(x, y, z, t) = 0.
> $$
>
> 其次，在两个惯性参照系 $S$ 和 $S'$ 之间，它们的各个分量之间按照上一例题中所给出的 (11) 式进行变换. 作为偏微分方程，一个标量场 $\Phi(x, y, z, t)$ 的达朗贝尔方程
>
> $$
> \frac{\partial^2 \Phi(x, y, z, t)}{\partial t^2} - c^2 \nabla^2 \Phi(x, y, z, t) = 0
> $$
>
> 的解可以是非常复杂的. 这里，我们仅考虑其最简单的平面波解. 
>
> $$
> \Phi(x, y, z, t) = \Phi_0 \exp(i k_x x + i k_y y + i k_z z - i \omega t).
> $$
>
> 其中，$\Phi_0$ 为一个复常数，而 $k_x, k_y$ 和 $k_z$ 称为波矢量 $\mathbf{k}$ 的分量. $\omega$ 称为该平面波的角频率，它们满足关系
>
> $$
> \omega^2 = (k_x^2 + k_y^2 + k_z^2) c^2.
> $$
>
> 在洛伦兹变换下，方程 $\dfrac{\partial^2 \Phi(x, y, z, t)}{\partial t^2} - c^2 \nabla^2 \Phi(x, y, z, t) = 0$ 是不变的，即在 $S'$ 系中，我们仍有
>
> $$
> \frac{\partial^2 \Phi'(x', y', z', t')}{\partial t'^2} - c^2 \nabla^2 \Phi'(x', y', z', t') = 0.
> $$
>
> 它的平面解当为
>
> $$
> \Phi'(x', y', z', t') = \Phi'_0 \exp(i k'_x x' + i k'_y y' + i k'_z z' - i \omega' t').
> $$
>
> 作为一个标量，根据定义，我们有
>
> $$
> \Phi'(x', y', z', t') = \Phi(x, y, z, t)
> $$
>
> 或是
>
> $$
> \Phi'_0 \exp(i k'_x x' + i k'_y y' + i k'_z z' - i \omega' t') = \Phi_0 \exp(i k_x x + i k_y y + i k_z z - i \omega t).
> $$
>
> 比较此式两边，我们可得
>
> $$
> \Phi'_0 = \Phi_0
> $$
>
> 以及
>
> $$
> k'_x x' + k'_y y' + k'_z z' - \omega' t' = k_x x + k_y y + k_z z - \omega t.
> $$
>
> 若我们引入数组
>
> $$
> \mathbf{k}^{(4)} = \left( k_1 = k_x, k_2 = k_y, k_3 = k_z, k_4 = i \frac{\omega}{c} \right),
> $$
>
> 则上式可被重新写作
>
> $$
> k'_1 x'_1 + k'_2 x'_2 + k'_3 x'_3 + k'_4 x'_4 = k_1 x_1 + k_2 x_2 + k_3 x_3 + k_4 x_4.
> $$
>
> 又由于 $(x_1, x_2, x_3, x_4)$ 是一个四维矢量，因此 $(k_1, k_2, k_3, k_4)$ 亦是一个四维矢量. 

现在，让我们回过头来考虑真空中的电磁场的平面波解

$$
\begin{aligned}
E_x(x, y, z, t) &= E_{x0} \exp(i k_x x + i k_y y + i k_z z - i \omega t), \\\\
E_y(x, y, z, t) &= E_{y0} \exp(i k_x x + i k_y y + i k_z z - i \omega t), \\\\
E_z(x, y, z, t) &= E_{z0} \exp(i k_x x + i k_y y + i k_z z - i \omega t), \\\\
B_x(x, y, z, t) &= B_{x0} \exp(i k_x x + i k_y y + i k_z z - i \omega t), \\\\
B_y(x, y, z, t) &= B_{y0} \exp(i k_x x + i k_y y + i k_z z - i \omega t), \\\\
B_z(x, y, z, t) &= B_{z0} \exp(i k_x x + i k_y y + i k_z z - i \omega t).
\end{aligned}
$$

若 $\omega^2 = (k_x^2 + k_y^2 + k_z^2) c^2$ 成立，则电场强度矢量和磁感应强度矢量的每一个分量都满足达朗贝尔方程. 

其次，在洛伦兹变换下，若上述分量的常数振幅按照 (11) 式变换，即关系式
$$
\begin{aligned}
E_{x0} &= E'_{x0}, \quad B_{x0} = B'_{x0}, \\\\
\frac{E_{y0} - V B_{z0}}{\sqrt{1 - \frac{V^2}{c^2}}} &= E'_{y0}, \quad \frac{E_{z0} + V B_{y0}}{\sqrt{1 - \frac{V^2}{c^2}}} = E'_{z0}, \\\\
\frac{B_{y0} + \frac{V}{c^2} E_{z0}}{\sqrt{1 - \frac{V^2}{c^2}}} &= B'_{y0}, \quad \frac{B_{z0} - \frac{V}{c^2} E_{y0}}{\sqrt{1 - \frac{V^2}{c^2}}} = B'_{z0}
\end{aligned}
$$

成立，且 $(k_x, k_y, k_z, i\omega/c)$ 为一个四维矢量的话，那么上面给出的平面波解在惯性参照系 $S$ 和 $S'$ 之间的确按照 (11) 式进行变换. 由此，我们找到了在真空中传播的电磁场平面波解的表达式. 
