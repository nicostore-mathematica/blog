---
title: Lesson 4 狭义相对论 I
permalink: /electrodynamics/electrodynamics-4/
createTime: 2026/03/13 22:03:59
---

## Part 1 基本假设

### · 基本假设

在上一章中引入的麦克斯韦方程组看起来是完备的，但实际上仍然存在着一处需要澄清的地方. 

我们已经知道，通过联立求解这些方程，人们可以得到如下的描写在真空中传播的电磁场波动方程

$$
\epsilon_0 \mu_0 \frac{\partial^2 \mathbf{E}}{\partial t^2} - \frac{\partial^2 \mathbf{E}}{\partial x^2} - \frac{\partial^2 \mathbf{E}}{\partial y^2} - \frac{\partial^2 \mathbf{E}}{\partial z^2} = \frac{1}{c^2} \frac{\partial^2 \mathbf{E}}{\partial t^2} - \frac{\partial^2 \mathbf{E}}{\partial x^2} - \frac{\partial^2 \mathbf{E}}{\partial y^2} - \frac{\partial^2 \mathbf{E}}{\partial z^2} = 0,
\tag{1}
$$

以及

$$
\epsilon_0 \mu_0 \frac{\partial^2 \mathbf{B}}{\partial t^2} - \frac{\partial^2 \mathbf{B}}{\partial x^2} - \frac{\partial^2 \mathbf{B}}{\partial y^2} - \frac{\partial^2 \mathbf{B}}{\partial z^2} = \frac{1}{c^2} \frac{\partial^2 \mathbf{B}}{\partial t^2} - \frac{\partial^2 \mathbf{B}}{\partial x^2} - \frac{\partial^2 \mathbf{B}}{\partial y^2} - \frac{\partial^2 \mathbf{B}}{\partial z^2} = 0.
\tag{2}
$$

这里，$\mathbf{E}(x, y, z, t)$ 和 $\mathbf{B}(x, y, z, t)$ 为电磁波的电场和磁场强度，而常数

$$
c = \frac{1}{\sqrt{\epsilon_0 \mu_0}} = 299792458 \text{m/s}
$$

具有速度的量纲，被定义作电磁波在真空中的传播速度. 但是由于在推导 (1) 式和 (2) 式时，并没有特别指定是在哪一个参照系中进行的，导致的一个直接的推论是，光速是一个不依赖于参照系的普适常数. 换句话说，在两个彼此做匀速直线运动的惯性参照系中，电磁波是以相同的速度传播的. 这是与力学中的伽里略变换关系相矛盾的. 

为了摆脱这一困难，麦克斯韦以及同时代的一些物理学家提出了“以太”假说，即认为在空间中存在一种称为以太的连续媒介质，而电磁波是在这种媒介质中传播的横波. 那么，方程 (1) 和 (2) 中出现的光速就可以解释作电磁波相对于以太在其中处于静止状态的参照系的传播速度. 

然而，这一学说被美国学者迈克耳逊（Albert Michelson）和莫雷（Edward Morley）于 1887 年用实验加以否定. 他们用实验表明，电磁波的传播速度在所有的惯性参照系中都是 $c = 299792458$ 米/秒. 这就使得人们要么放弃相对性原理，要么放弃以太存在的假说. 爱因斯坦（Albert Einstein）选择了后者. 

爱因斯坦首先提出了狭义相对论的两个基本假设. 

> (1) 相对性原理：物理定律在所有的惯性参照系都是等价的. 因此，有关的运动方程应该具有相同的形式. 
>
> (2) 光速不变原理：在所有的参照系中，光在真空中传播的速率皆为 $c$. 而任何粒子在惯性参照系中的运动速率皆小于或等于光速. 

### · 运动学理论

我们考虑两个惯性参照系 $S$ 和 $S'$. 假设 $S'$ 系相对于 $S$ 系做匀速直线运动，速度为 $\mathbf{V}$. 设在 $t = t' = 0$ 时刻，两个参照系的原点 $O$ 和 $O'$ 重合，并从该处发射一个光脉冲信号. 因此，在时刻 $t$ 时，这个脉冲在 $S$ 系中走过的距离为

$$
L = \sqrt{x^2 + y^2 + z^2} = ct.
$$

同理，它在 $S'$ 系中走过的距离为

$$
L' = \sqrt{x'^2 + y'^2 + z'^2} = c't'.
$$

根据光速不变假设，我们有 $c = c'$. 因此，联合上面两式，我们得到

$$
x^2 + y^2 + z^2 - c^2 t^2 = 0 = x'^2 + y'^2 + z'^2 - c^2 t'^2.
$$

对于这个恒等式，我们可以给出如下的几何解释. 引入一个假想的四维空间. 令沿着它的四个互相垂直方向的单位向量为 $\mathbf{e}_x$, $\mathbf{e}_y$, $\mathbf{e}_z$ 和 $\mathbf{e}_t$. 并且，我们将这个四维空间中任何一点的位置向量写作

$$
\mathbf{R} = x \mathbf{e}_x + y \mathbf{e}_y + z \mathbf{e}_z + (ict) \mathbf{e}_t.
$$

注意，这里第四个分量（时间分量）为一个虚数. 这是与通常的三维向量不同的. 仿照通常三维空间中的解析几何学，我们定义四维向量 $\mathbf{R}$ 的长度的平方为

$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 + (ict)^2 = x^2 + y^2 + z^2 - c^2 t^2.
$$

这一长度被称为四维长度. 我们现在可以说，光脉冲信号在物理空间中的运动可以用四维空间中的一条直线来代表. 这条直线上的每一点到原点的四维距离都是零. 

相应地，我们可以将两个不同参照系 $S$ 和 $S'$ 中光脉冲的坐标值 $(x, y, z, ict)$ 和 $(x', y', z', ict')$ 解释作四维空间中同一点 $\mathbf{R}$ 相对两组不同坐标轴 $(\mathbf{e}_x, \mathbf{e}_y, \mathbf{e}_z, \mathbf{e}_t)$ 以及 $(\mathbf{e}'_x, \mathbf{e}'_y, \mathbf{e}'_z, \mathbf{e}'_t)$ 的分量. 这是由于方程
$$
x^2 + y^2 + z^2 - c^2 t^2 = 0 = x'^2 + y'^2 + z'^2 - c^2 t'^2.
$$
告诉我们，在四维空间中，这两组坐标给出的光脉冲点到原点的距离是相同的. 而从解析几何中我们得知，它们所对应的坐标系是可以通 过空间的旋转联系起来的. 这就使得我们有可能找到 $(x, y, z, ict)$ 与 $(x', y', z', ict')$ 的关系. 

为了简单起见，我们假设 $S$ 系相对于 $S'$ 系的运动速度是沿 $\mathbf{e}_x$ 方向的. 此时，我们可以取 $y = y'$ 和 $z = z'$. 也就是说，我们假设，四维空间的旋转是发生在 $x - ict$ 平面内的. 因此，四维空间中任一点 $P$ 的坐标变换可以写作

$$
x' = x \cos \theta + (ict) \sin \theta, \quad ict' = -x \sin \theta + (ict) \cos \theta, \quad y = y', \quad z = z'.
$$

这里，$\theta$ 是两套坐标系 $(\mathbf{e}_x, \mathbf{e}_y, \mathbf{e}_z, \mathbf{e}_t)$ 和 $(\mathbf{e}'_x, \mathbf{e}'_y, \mathbf{e}'_z, \mathbf{e}'_t)$ 中向量 $\mathbf{e}_x$ 及 $\mathbf{e}'_x$ 之间的夹角. 

不难验证，在这样的坐标变换下，$P$ 点的四维长度不变. 事实上，我们有

$$
\begin{aligned}
&x'^2 + y'^2 + z'^2 - c^2 t'^2 \\\\
&= x^2 + y^2 + z^2 + (ict)^2 \\\\
&= [x \cos \theta + (ict) \sin \theta]^2 + y^2 + z^2 + [-x \sin \theta + (ict) \cos \theta]^2 \\\\
&= x^2 \cos^2 \theta + 2x(ict) \cos \theta \sin \theta + (ict)^2 \sin^2 \theta + y^2 + z^2 \\\\
&+ x^2 \sin^2 \theta - 2x(ict) \cos \theta \sin \theta + (ict)^2 \cos^2 \theta \\\\
&= x^2 + y^2 + z^2 + (ict)^2 = x^2 + y^2 + z^2 - c^2 t^2.
\end{aligned}
$$

因此，光脉冲的运动方程在此变换下自动被满足. 

现在，我们来看看如何通过已知条件定出 $\theta$ 的值. 为此，我们考虑 $S'$ 参照系原点 $O'$ 在 $S$ 系中的运动. 首先，$O'$ 点在 $S'$ 系的坐标为 $x' = y' = z' = 0$. 而在 $S$ 参考系中，在时刻 $t$ 时，其空间坐标为

$$
x = Vt, \quad y = 0, \quad z = 0.
$$

因此，对于 $O'$ 点而言，我们有如下的坐标变换关系

$$
\begin{aligned}
x' &= 0 = x \cos \theta + (ict) \sin \theta = Vt \cos \theta + (ict) \sin \theta, \\\\
ict' &= -x \sin \theta + (ict) \cos \theta = -Vt \sin \theta + (ict) \cos \theta.
\end{aligned}
$$

从第一个方程，我们解得

$$
-\frac{x}{ict} = -\frac{V}{ic} = \frac{\sin \theta}{\cos \theta} = \tan \theta.
$$

进而，我们有

$$
\cos \theta = \frac{1}{\sec \theta} = \frac{1}{\sqrt{1 + \tan^2 \theta}} = \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}},
$$

以及

$$
\sin \theta = \tan \theta \cos \theta = -\frac{V}{ic} \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

将这些函数代入方程
$$
x' = x \cos \theta + (ict) \sin \theta, \quad ict' = -x \sin \theta + (ict) \cos \theta, \quad y = y', \quad z = z'.
$$
中，我们得到

$$
\begin{aligned}
x' &= x \cos \theta + (ict) \sin \theta = \frac{x}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{ict \left( -\frac{V}{ic} \right)}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{x - Vt}{\sqrt{1 - \frac{V^2}{c^2}}}, \\\\
ict' &= -x \sin \theta + (ict) \cos \theta = \frac{-x \left( -\frac{V}{ic} \right)}{\sqrt{1 - \frac{V^2}{c^2}}} + ict \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}}.
\end{aligned}
$$

将第二个方程的两边同时除以 $ic$ 后，我们得到

$$
t' = \frac{t - x \frac{V}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

这些变换公式和 $y' = y$, $z' = z$ 一起，被称为洛伦兹（Hendrik Lorentz）变换公式. 从这些公式中，我们可以看到，若要求光速 $c$ 在各个惯性参照系中不变的话，则时间在不同的参照系中是不同的. 这一点是与伽里略变换非常不一样的. 

上面，我们利用光速在各个参照系中不变的假设，导出了洛伦兹变换公式. 对于任何一个四维空间中的点的坐标 $(x, y, z, ict)$ 而言，除了满足光信号的运动方程

$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 - c^2 t^2 = 0
$$

之外，还可能满足

$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 - c^2 t^2 > 0,
$$

或是

$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 - c^2 t^2 < 0.
$$

前者表示，质点在时刻 $t = 0$ 时从原点出发，在 $t$ 时刻到达坐标为 $(x, y, z)$ 的三维空间位置. 这要求它的速率为

$$
v = \sqrt{\frac{x^2 + y^2 + z^2}{t^2}} > c.
$$

但是按照爱因斯坦狭义相对论的第一条假设，这在物理上是不可能的. 这样的点被称为类空点. 相反，第二种可能性描写在时刻 $t = 0$ 时从原点出发，以小于光速的速率 $v$ 在 $t$ 时刻到达坐标为 $(x, y, z)$ 的三维空间位置的粒子的运动. 这在物理上是可以实现的. 这类点被称为类时点. 而类空点集合与类时点集合是由满足方程
$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 - c^2 t^2 = 0
$$
的全体点的集合（代表光信号的全部可能轨迹，被称为光锥面）隔开. 

在讨论洛伦兹变换所导致的一些结果之前，我们要强调一下，四维时空中任何一点的位置向量 $\mathbf{R}$ 的模

$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 - c^2 t^2
$$

在洛伦兹变换下都是不变的. 今后我们会看到，在适当引入的动量 - 能量向量以及所谓四维力向量的模也具有这样的性质. 它们被统称为四维向量（或四维矢量）. 今后，我们会看到，四维矢量的概念是非常有用的. 

现在，让我们回过头来看一下洛伦兹变换带来的结论. 首先，我们从公式

$$
t' = \frac{t - x \frac{V}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}}
$$

出发. 将此式的两边对于 $t$ 求导后，我们有

$$
\frac{dt'}{dt} = \frac{1 - \dot{x} \frac{V}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{1 - \frac{v_x V}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

由此，我们可以导出同一个运动的质点在 $S$ 系和 $S'$ 系中速度之间的变换关系. 例如，我们有

$$
v'_x = \frac{dx'}{dt'} = \frac{dx'}{dt} \frac{dt}{dt'} = \frac{dx'}{dt} \left( \frac{dt'}{dt} \right)^{-1} = \frac{v_x - V}{\sqrt{1 - \frac{V^2}{c^2}}} \frac{\sqrt{1 - \frac{V^2}{c^2}}}{1 - \frac{v_x V}{c^2}} = \frac{v_x - V}{1 - \frac{v_x V}{c^2}}.
$$

同理，我们可得

$$
v'_y = \frac{dy'}{dt'} = v_y \frac{\sqrt{1 - \frac{V^2}{c^2}}}{1 - \frac{v_x V}{c^2}}, \quad v'_z = \frac{dz'}{dt'} = v_z \frac{\sqrt{1 - \frac{V^2}{c^2}}}{1 - \frac{v_x V}{c^2}}.
$$

从表面上看，这些变换公式与我们已经熟知的伽里略变换公式

$$
v'_x = v_x - V, \quad v'_y = v_y, \quad v'_z = v_z
$$

非常不同. 但是，在 $\dfrac{V}{c} \to 0$ 的极限下，可以很容易地看到，洛伦兹速度变换公式退化到伽里略速度变换公式. 

作为一个特例，让我们考虑光在两个参照系中的运动. 设在 $S$ 系中，光沿 $x$ 轴运动. 因此，我们有 $v_x = c$, $v_y = 0$ 及 $v_z = 0$. 将之代入速度变换公式后，我们立刻可得

$$
v'_y = v'_z = 0
$$

以及

$$
v'_x = \frac{c - V}{1 - \frac{cV}{c^2}} = \frac{c - V}{1 - \frac{V}{c}} = \frac{c - V}{\frac{c - V}{c}} = c.
$$

也就是说，光在 $S'$ 系中的速度也是 $c$. 这就使得爱因斯坦的光速不变假设成为自洽的. 

洛伦兹变换的另外一个直接推论是所谓时间延缓效应. 假设我们有一个在 $S'$ 系中静止的时钟同该系一起相对于 $S$ 系运动，并且其在 $S'$ 参照系中的坐标为 $x' = x'_0$. 则时钟在两个参照系的读数满足变换关系

$$
t = \frac{t' + \frac{V}{c^2} x'_0}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

特别是相对于 $S'$ 系的时间间隔 $\Delta t' = t_2' - t_1'$ 对应于 $S$ 系中的时间间隔

$$
\Delta t = t_2 - t_1 = \frac{t_2' + \frac{V}{c^2} x'_0}{\sqrt{1 - \frac{V^2}{c^2}}} - \frac{t_1' + \frac{V}{c^2} x'_0}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{t_2' - t_1'}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{\Delta t'}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

由于

$$
\frac{1}{\sqrt{1 - \frac{V^2}{c^2}}} > 1,
$$

故我们有

$$
\Delta t > \Delta t'.
$$

也就是说，在时钟静止的参考系中，其读数相对于其它惯性系而言总是最小的. 这一效应称为时间延缓. 它是可以通过实验来检验的. 
