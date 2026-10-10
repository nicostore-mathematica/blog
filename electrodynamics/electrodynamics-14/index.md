---
url: /electrodynamics/electrodynamics-14/index.md
---
当电荷或电流分布可以随时间变化时，会导致随时间改变的电场和磁场。此时，如同麦克斯韦证明的那样，在真空中，电磁场将以波的形式传播，即它们分别满足如下的达朗贝尔方程
$$
\frac{\partial^2 \mathbf{E}(\mathbf{r},t)}{\partial t^2} - c^2\nabla^2 \mathbf{E}(\mathbf{r},t) = 0, \quad
\frac{\partial^2 \mathbf{B}(\mathbf{r},t)}{\partial t^2} - c^2\nabla^2 \mathbf{B}(\mathbf{r},t) = 0.
$$

这里，$c = \dfrac{1}{\sqrt{\mu\_0\epsilon\_0}}$ 为真空中的光速。而在连续介质中，我们需要从麦克斯韦方程组:

$$
\begin{aligned}
\nabla \cdot \mathbf{D}(\mathbf{r},t) &= \rho\_f(\mathbf{r},t), & \nabla \times \mathbf{E}(\mathbf{r},t) &= -\frac{\partial \mathbf{B}(\mathbf{r},t)}{\partial t}, \\
\nabla \cdot \mathbf{B}(\mathbf{r},t) &= 0, & \nabla \times \mathbf{H}(\mathbf{r},t) &= \mathbf{j}\_f(\mathbf{r},t) + \frac{\partial \mathbf{D}(\mathbf{r},t)}{\partial t}.
\end{aligned}
$$

出发，重新推导相应的波动方程。

首先，我们看到正是由于随时间改变的自由电荷密度 $\rho\_f(\mathbf{r},t)$ 和传导电流密度 $\mathbf{j}\_f(\mathbf{r},t)$ 的存在，产生了随时间改变的电场和磁场。反过来，这些随时间改变的场强又会影响下一个时刻的自由电荷密度和传导电流密度。

因此，从逻辑完备的角度看，我们应该在全空间联合求解上述四个方程。但由此带来的数学上的困难实在太大，使得人们不得不退而求其次，将求解连续介质内电磁波传播的问题分成两部分，即电磁波的传播和电磁波的产生问题。

在本章中，我们将只关注第一部分问题，而忽略电磁波是如何产生的。为此，我们假设在连续介质中 $\rho\_f(\mathbf{r},t) = 0$ 和 $\mathbf{j}\_f(\mathbf{r},t) = 0$ 成立。而在后面电磁波的辐射的内容中，我们再讨论电磁是如何产生的问题。

## Part 1 平面电磁波

当 $\rho\_f(\mathbf{r},t) = 0$ 和 $\mathbf{j}\_f(\mathbf{r},t) = 0$ 时，麦克斯韦方程组可以改写作

$$
\begin{aligned}
\nabla \cdot \mathbf{D}(\mathbf{r},t) &= 0, & \nabla \times \mathbf{E}(\mathbf{r},t) &= -\frac{\partial \mathbf{B}(\mathbf{r},t)}{\partial t}, \\
\nabla \cdot \mathbf{B}(\mathbf{r},t) &= 0, & \nabla \times \mathbf{H}(\mathbf{r},t) &= \frac{\partial \mathbf{D}(\mathbf{r},t)}{\partial t}.
\end{aligned}
\tag{a}
$$

在静电学和静磁学问题研究中，若电场强度和磁场强度不太大时，我们可以将电位移矢量 $\mathbf{D}(\mathbf{r})$ 和磁感应强度矢量 $\mathbf{B}(\mathbf{r})$ 写作

$$
\mathbf{D}(\mathbf{r}) = \epsilon \mathbf{E}(\mathbf{r}), \quad \mathbf{B}(\mathbf{r}) = \mu \mathbf{H}(\mathbf{r}).
$$

而对于随时间变化的电磁场，实验结果表明，在某些频率范围内，这些关系仍然成立，即

$$
\mathbf{D}(\mathbf{r},t) = \epsilon \mathbf{E}(\mathbf{r},t), \quad \mathbf{B}(\mathbf{r},t) = \mu \mathbf{H}(\mathbf{r},t).
$$

但是当电磁场的变化频率和引起连续介质中电极化或磁极化的束缚电子或分子的振动本征频率可比时，这些关系就必须重新加以考虑。

为了简单起见，我们先考虑没有色散，即体系的电容率 $\epsilon$ 和磁导率 $\mu$ 可以视作常数的情况。此时，麦克斯韦方程组可以被改写为

$$
\begin{aligned}
\nabla \cdot \mathbf{E}(\mathbf{r},t) &= 0, & \nabla \times \mathbf{E}(\mathbf{r},t) &= -\mu \frac{\partial \mathbf{H}(\mathbf{r},t)}{\partial t}, \\
\nabla \cdot \mathbf{H}(\mathbf{r},t) &= 0, & \nabla \times \mathbf{H}(\mathbf{r},t) &= \epsilon \frac{\partial \mathbf{E}(\mathbf{r},t)}{\partial t}.
\end{aligned}
$$

将方程组的第二式两边取旋度后，我们有

$$
\nabla \times \left( -\mu \frac{\partial \mathbf{H}(\mathbf{r},t)}{\partial t} \right) = \nabla \times (\nabla \times \mathbf{E}(\mathbf{r},t)) = \nabla(\nabla \cdot \mathbf{E}(\mathbf{r},t)) - \nabla^2 \mathbf{E}(\mathbf{r},t).
$$

再将方程组的第一式和第四式代入后，我们得到

$$
-\mu \frac{\partial}{\partial t} (\nabla \times \mathbf{H}(\mathbf{r},t)) = -\mu \epsilon \frac{\partial^2 \mathbf{E}(\mathbf{r},t)}{\partial t^2} = -\nabla^2 \mathbf{E}(\mathbf{r},t),
$$

或是

$$
\frac{\partial^2 \mathbf{E}(\mathbf{r},t)}{\partial t^2} - \frac{1}{\mu\epsilon} \nabla^2 \mathbf{E}(\mathbf{r},t) = 0.
$$

与真空中电场强度矢量所满足的达朗贝尔方程相比，我们看到原方程中的 $\mu\_0\epsilon\_0$ 现在被 $\mu\epsilon$ 代替，而 $u = \frac{1}{\sqrt{\mu\epsilon}}$ 被视作电磁波在连续介质中的传播速率。又由于 $\mu > \mu\_0$，$\epsilon > \epsilon\_0$ 成立，我们看到

$$
u = \frac{1}{\sqrt{\mu\epsilon}} < \frac{1}{\sqrt{\mu\_0\epsilon\_0}} = c.
$$

而 $n = \dfrac{c}{u} = \sqrt{\dfrac{\mu\epsilon}{\mu\_0\epsilon\_0}}$ 被定义为介质的折射率。

同理，我们可以证明磁场强度矢量 $\mathbf{H}(\mathbf{r},t)$ 亦满足相同的波动方程，即

$$
\frac{\partial^2 \mathbf{H}(\mathbf{r},t)}{\partial t^2} - \frac{1}{\mu\epsilon} \nabla^2 \mathbf{H}(\mathbf{r},t) = 0
$$

成立。下面，为了确定起见，我们以方程 $\displaystyle\frac{\partial^2 \mathbf{E}(\mathbf{r},t)}{\partial t^2} - \frac{1}{\mu\epsilon} \nabla^2 \mathbf{E}(\mathbf{r},t) = 0$ 进行讨论。

***

而 $f(t)$ 的一般解为二者的线性叠加，即

$$
f(t) = a\_1 f\_1(t) + a\_2 f\_2(t) = a\_1 \exp\left(\sqrt{C}t\right) + a\_2 \exp\left(-\sqrt{C}t\right).
$$

接下来，我们研究微分方程

$$
\frac{1}{\mu\epsilon} \left( \frac{\partial^2 \Phi(\mathbf{r})}{\partial x^2} + \frac{\partial^2 \Phi(\mathbf{r})}{\partial y^2} + \frac{\partial^2 \Phi(\mathbf{r})}{\partial z^2} \right) = C \Phi(\mathbf{r})
\tag{b}
$$

的解。我们可以令

$$
\Phi(x,y,z) = \exp(m\_1 x + m\_2 y + m\_3 z).
$$

这里，$m\_1$、$m\_2$ 和 $m\_3$ 为一些待定的常数。将之代入方程 (b) 后，我们有

$$
\frac{1}{\mu\epsilon} \left( m\_1^2 + m\_2^2 + m\_3^2 \right) \exp(m\_1 x + m\_2 y + m\_3 z) = C \exp(m\_1 x + m\_2 y + m\_3 z),
$$

或是

$$
\frac{1}{\mu\epsilon} \left( m\_1^2 + m\_2^2 + m\_3^2 \right) = C = n^2.
\tag{c}
$$

为了决定这些常数，我们需要考虑到 $E^2(\mathbf{r},t)$ 正比于时刻 $t$ 时，空间 $\mathbf{r}$ 处的电场能量密度。而在介质中，这一密度是不会随着时间的增大而无限增大或趋向于零的。这就要求常数 $n$ 不可为一实数，而只能为一纯虚数。习惯性地，我们取 $n = -i\omega$，即

$$
f(t) = \exp(-i\omega t),
$$

而 $\omega$ 为一具有量纲 $\[T]^{-1}$ 的量，称为角频率。将 $n = -i\omega$ 代入 (c) 式后，我们得到

$$
m\_1^2 + m\_2^2 + m\_3^2 = n^2 \mu\epsilon = -\omega^2 \mu\epsilon.
$$

显然，$m\_1$，$m\_2$ 和 $m\_3$ 也必须为虚数，记作

$$
m\_1 = i k\_x, \quad m\_2 = i k\_y, \quad m\_3 = i k\_z.
$$

而相应的解可以写作

$$
\Phi\_{k\_x,k\_y,k\_z}(x,y,z) = \exp(i k\_x x + i k\_y y + i k\_z z) \equiv \exp(i \mathbf{k} \cdot \mathbf{r}).
$$

***

这里，矢量 $\mathbf{k}$ 被称为电磁波的波矢，其量纲为 $\[L]^{-1}$。

综合上述结果，我们得到如下形式的解

$$
E\_x(x,y,z,t) = E\_{x0} \exp(i \mathbf{k} \cdot \mathbf{r} - i\omega t).
$$

这里，$E\_{x0}$ 为一常数，而 $\mathbf{k}$ 和 $\omega$ 满足关系 $k^2 = \omega^2 \mu\epsilon$。同理，我们也可求解 $E\_y(x,y,z,t)$ 和 $E\_z(x,y,z,t)$，并最后得到

$$
\mathbf{E}(\mathbf{r},t) = \mathbf{E}\_0 \exp(i \mathbf{k} \cdot \mathbf{r} - i\omega t).
\tag{d}
$$

这里，$\mathbf{E}*0 = E*{x0} \mathbf{i} + E\_{y0} \mathbf{j} + E\_{z0} \mathbf{k}$ 为一常矢量，而 $E\_{x0}$，$E\_{y0}$ 和 $E\_{z0}$ 皆为实数。我们还需注意到，这样求得的解要满足条件

$$
\nabla \cdot \mathbf{E}(x,y,z,t) = i \mathbf{k} \cdot \mathbf{E}\_0 \exp(i \mathbf{k} \cdot \mathbf{r} - i\omega t) = 0,
$$

即

$$
\mathbf{k} \cdot \mathbf{E}*0 = k\_x E*{x0} + k\_y E\_{y0} + k\_z E\_{z0} = 0.
$$

这一条件被称为横场条件，它要求 $\mathbf{E}\_0$ 总是与波矢 $\mathbf{k}$ 彼此垂直的。

为了解释 (d) 式的物理意义，我们可将其两边同时取实部。我们有

$$
\mathrm{Re} \mathbf{E}(x,y,z,t) = \mathbf{E}\_{\mathrm{物}}(x,y,z,t) = \mathbf{E}\_0 \cos(\omega t - k\_x x - k\_y y - k\_z z).
$$

这代表一个行波，其中 $\mathbf{E}\_0$ 称为行波的振幅，而 $\omega t - \mathbf{k} \cdot \mathbf{r}$ 称为在时刻 $t$ 时，空间 $\mathbf{r}$ 处该行波的相位。取垂直于波矢 $\mathbf{k}$ 的平面 $P$，则 $P$ 上任何一点的矢径 $\mathbf{r}$ 与 $\mathbf{k}$ 的点乘 $\mathbf{k} \cdot \mathbf{r}$ 为一常数，并不依赖于其位置。也就是说，在时刻 $t$ 时，平面 $P$ 上的空间点都具有同样的位相，即 $P$ 是电磁行波的一个等相位面。反过来，在任意时刻 $t$，电场强度矢量 (d) 的等相位面都是垂直于波矢量 $\mathbf{k}$ 的一个平面。这样的电磁行波被称为平面波，而 $\mathbf{k}$ 的方向则为其传播方向。又由于 $\mathbf{E}\_0$ 的方向始终垂直于 $\mathbf{k}$，故被称为横波。在文献中，$\mathbf{E}\_0$ 的方向被称为电磁波的偏振方向。可以选取与 $\mathbf{k}$ 垂直的任意两个互相正交的方向作为 $\mathbf{E}(x,y,z,t)$ 的独立偏振方向。因此，对应于一个给定的波矢 $\mathbf{k}$，存在两个独立的偏振行波。

***

又由于余弦函数是一个周期函数，若在空间某一点 $\mathbf{r}$ 处，两个不同时刻 $t$ 和 $t'$ 时，$\mathbf{E}*{\mathrm{物}}(x,y,z,t)$ 与 $\mathbf{E}*{\mathrm{物}}(x,y,z,t')$ 是等值的，即

$$
\mathbf{E}\_0 \cos(\omega t - \mathbf{k} \cdot \mathbf{r}) = \mathbf{E}\_0 \cos(\omega t' - \mathbf{k} \cdot \mathbf{r}) = \mathbf{E}\_0 \cos(\omega(t' - t) + \omega t - \mathbf{k} \cdot \mathbf{r})
$$

成立，则我们有

$$
\omega(t' - t) = 2\pi L.
$$

这里，$L$ 为一个非零整数。当 $L = 1$ 时，相应的时间差

$$
T = t' - t = \frac{2\pi}{\omega}
\tag{e}
$$

称为平面电磁波的周期，而其倒数则称为频率，单位为赫兹 (Hertz)，即每秒钟电磁波在 $\mathbf{r}$ 处的振动次数。

类似地，若在同一时刻 $t$ 时，两个不同相位平面 $P$ 和 $P'$ 上，电磁波 $\mathbf{E}*{\mathrm{物}}(x,y,z,t)$ 和 $\mathbf{E}*{\mathrm{物}}(x',y',z',t)$ 等值，即

$$
\mathbf{E}\_0 \cos(\omega t - k\_x x - k\_y y - k\_z z) = \mathbf{E}\_0 \cos(\omega t - k\_x x' - k\_y y' - k\_z z')
$$

成立，则我们可以引入一个新的坐标系。在这个坐标系中，$\mathbf{k}$ 的方向被取作 $z$ 轴的方向。因此，上式现在可以简化为

$$
\mathbf{E}\_0 \cos(\omega t - |\mathbf{k}| \bar{z}) = \mathbf{E}\_0 \cos(\omega t - |\mathbf{k}| \bar{z}') = \mathbf{E}\_0 \cos(\omega t - |\mathbf{k}| \bar{z} - |\mathbf{k}|(\bar{z}' - \bar{z})).
$$

因此，我们当有

$$
|\mathbf{k}|(\bar{z}' - \bar{z}) = 2\pi M.
$$

这里，$M$ 为一整数。同理，我们将 $M = 1$ 时的距离差

$$
\lambda = \bar{z}' - \bar{z} = \frac{2\pi}{|\mathbf{k}|}
$$

定义为电磁行波的波长，并由此解得

$$
|\mathbf{k}| = \frac{2\pi}{\lambda}.
\tag{f}
$$

***

有了这些定义之后，我们很自然地将物理量 $u = \dfrac{\lambda}{T}$ 定义作电磁行波的相位面的传播速度，即相速。将此式稍微修改一下后，我们有

$$
u = \frac{\lambda}{T} = \frac{\left(\frac{2\pi}{|\mathbf{k}|}\right)}{\left(\frac{2\pi}{\omega}\right)} = \frac{\omega}{|\mathbf{k}|} = \frac{1}{\sqrt{\mu\epsilon}}.
$$

这里，我们使用了公式 (e) 和 (f)。

同理，由于磁场强度矢量 $\mathbf{H}(\mathbf{r},t)$ 满足同样的波动方程，我们可以直接将它写作

$$
\mathbf{H}(x,y,z,t) = \mathbf{H}\_0 \exp(i \mathbf{k} \cdot \mathbf{r} - i\omega t).
$$

这里，$\mathbf{H}\_0$ 为一实矢量。又由于我们假设 $\mathbf{B}(\mathbf{r},t) = \mu \mathbf{H}(\mathbf{r},t)$ 仍然成立，故

$$
\mathbf{B}(x,y,z,t) = \mu \mathbf{H}(x,y,z,t) = \mu \mathbf{H}\_0 \exp(i \mathbf{k} \cdot \mathbf{r} - i\omega t) = \mathbf{B}\_0 \exp(i \mathbf{k} \cdot \mathbf{r} - i\omega t).
$$

另一方面，利用麦克斯韦方程

$$
\nabla \cdot \mathbf{B}(\mathbf{r},t) = 0,
$$

我们可得 $\mathbf{k} \cdot \mathbf{B}\_0 = 0$，即 $\mathbf{B}(\mathbf{r},t)$ 也是一个横波。再一次使用麦克斯韦方程

$$
\nabla \times \mathbf{E}(x,y,z,t) = -\frac{\partial \mathbf{B}(x,y,z,t)}{\partial t},
$$

我们又可得

$$
i \mathbf{k} \times \mathbf{E}\_0 \exp(i \mathbf{k} \cdot \mathbf{r} - i\omega t) = i\omega \mathbf{B}\_0 \exp(i \mathbf{k} \cdot \mathbf{r} - i\omega t),
$$

或是

$$
\mathbf{k} \times \mathbf{E}\_0 = \omega \mathbf{B}\_0.
$$

由此，我们解得

$$
\mathbf{B}\_0 = \frac{1}{\omega} \mathbf{k} \times \mathbf{E}*0 = \frac{1}{\omega} |\mathbf{k}| \mathbf{e}*\mathbf{k} \times \mathbf{E}*0 = \sqrt{\mu\epsilon} \mathbf{e}*\mathbf{k} \times \mathbf{E}\_0.
$$

此式告诉我们，在传播过程中，磁感应强度矢量 $\mathbf{B}(\mathbf{r},t)$ 总是与电场强度矢量 $\mathbf{E}(\mathbf{r},t)$ 彼此垂直的，如图所示。

除此之外，我们还看到
$$
\left| \frac{\mathbf{E}(\mathbf{r},t)}{\mathbf{B}(\mathbf{r},t)} \right| = \left| \frac{\mathbf{E}\_0}{\mathbf{B}\_0} \right| = \frac{1}{\sqrt{\mu\epsilon}} = u.
$$

特别是在真空中，$\mu = \mu\_0$，$\epsilon = \epsilon\_0$，故我们有

$$
\left| \frac{\mathbf{E}(\mathbf{r},t)}{\mathbf{B}(\mathbf{r},t)} \right| = \frac{1}{\sqrt{\mu\_0\epsilon\_0}} = c.
$$

我们已经知道，在连续介质中，电磁场的能量密度为

$$
\mathcal{U} = \frac{1}{2} \left( \mathbf{E}(\mathbf{r},t) \cdot \mathbf{D}(\mathbf{r},t) + \mathbf{H}(\mathbf{r},t) \cdot \mathbf{B}(\mathbf{r},t) \right) = \frac{1}{2} \epsilon E^2(\mathbf{r},t) + \frac{1}{2\mu} B^2(\mathbf{r},t).
$$

因此，坡印亭矢量可以写为

$$
\begin{aligned}
\mathbf{S}(\mathbf{r},t) &= \mathbf{E}(\mathbf{r},t) \times \mathbf{H}(\mathbf{r},t) = \frac{1}{\mu} \mathbf{E}(\mathbf{r},t) \times \mathbf{B}(\mathbf{r},t) \\\\
&= \frac{1}{\mu} \mathbf{E}(\mathbf{r},t) \times (\sqrt{\mu\epsilon} \mathbf{e}*\mathbf{k} \times \mathbf{E}(\mathbf{r},t)) = \sqrt{\frac{\epsilon}{\mu}} \mathbf{E}(\mathbf{r},t) \times (\mathbf{e}*\mathbf{k} \times \mathbf{E}(\mathbf{r},t)) \\\\
&= \sqrt{\frac{\epsilon}{\mu}} E^2(\mathbf{r},t) \mathbf{e}*\mathbf{k} = \left\[ \frac{1}{2} \sqrt{\frac{\epsilon}{\mu}} E^2(\mathbf{r},t) + \frac{1}{2} \sqrt{\frac{\epsilon}{\mu}} E^2(\mathbf{r},t) \right] \mathbf{e}*\mathbf{k} \\\\
&= \left\[ \frac{1}{2} \frac{\epsilon}{\sqrt{\mu\epsilon}} E^2(\mathbf{r},t) + \frac{1}{2} \sqrt{\frac{\epsilon}{\mu}} \frac{B^2(\mathbf{r},t)}{\mu\epsilon} \right] \mathbf{e}*\mathbf{k} = u \left( \frac{1}{2} \epsilon E^2(\mathbf{r},t) + \frac{1}{2\mu} B^2(\mathbf{r},t) \right) \mathbf{e}*\mathbf{k} \\\\
&= u \mathcal{U}(\mathbf{r},t) \mathbf{e}\_\mathbf{k},
\end{aligned}
$$

即能量流的方向为波矢的方向，而其数值为能量密度与电磁波相速的乘积。为了计算 $\mathcal{U}(\mathbf{r},t)$，我们可将

$$
\mathbf{E}\_{\mathrm{物}}(\mathbf{r},t) = \mathbf{E}\_0 \cos(\omega t - \mathbf{k} \cdot \mathbf{r})
$$

代入其表达式，并得到

$$
\mathcal{U}(\mathbf{r},t) = \epsilon E\_0^2 \cos^2(\omega t - \mathbf{k} \cdot \mathbf{r}),
$$

而其平均值则为

$$
\begin{aligned}
\bar{\mathcal{U}} &= \frac{1}{T} \int\_0^T \mathcal{U}(\mathbf{r},t) dt = \frac{1}{T} \int\_0^T \epsilon E\_0^2 \cos^2(\omega t - \mathbf{k} \cdot \mathbf{r}) dt \\\\
&= \frac{1}{T} \int\_0^T \frac{1}{2} \epsilon E\_0^2 \left(1 + \cos(2\omega t - 2\mathbf{k} \cdot \mathbf{r}) \right) dt = \frac{1}{T} \epsilon E\_0^2 \int\_0^T \frac{1}{2} dt = \frac{1}{2} \epsilon E\_0^2.
\end{aligned}
$$

我们看到，能量密度是与电场强度矢量的振幅的平方成正比的。

需要强调一点的是，我们所讨论的电磁场方程的平面波解

$$
\mathbf{E}\_\omega(\mathbf{r},t) = \mathbf{E}\_0 \exp(i \mathbf{k} \cdot \mathbf{r} - i\omega t)
$$
仅仅与一个频率 $\omega$ 有关，称为单频率或单色波解。根据线性微分方程理论，波动方程的一般解应是这些单色波解的线性叠加，即

$$
\mathbf{E}(\mathbf{r},t) = \int \int \int (\mathbf{E}\_0^{(1)} + \mathbf{E}\_0^{(2)}) \exp(i \mathbf{k} \cdot \mathbf{r} - i\omega t) dk\_x dk\_y dk\_z.
$$

这里，电场强度矢量的振幅 $\mathbf{E}\_0^{(1)}, \mathbf{E}\_0^{(2)}$ 和波矢 $\mathbf{k}$ 应该满足条件

$$
k^2 = k\_x^2 + k\_y^2 + k\_z^2 = \omega^2 \mu\epsilon,
$$

以及

$$
\mathbf{E}\_0^{(1)} \cdot \mathbf{E}\_0^{(2)} = 0, \quad \mathbf{k} \cdot \mathbf{E}\_0^{(1)} = \mathbf{k} \cdot \mathbf{E}\_0^{(2)} = 0.
$$

在上面的推导中，我们一直假设关系式 $\mathbf{D}(\mathbf{r},t) = \epsilon \mathbf{E}(\mathbf{r},t)$ 和 $\mathbf{B}(\mathbf{r},t) = \mu \mathbf{H}(\mathbf{r},t)$ 仍然成立，且 $\epsilon$ 和 $\mu$ 皆为实数。在更为实际的情况下，这些方程应该被代之以如下的含时关系 $^1$

$$
\mathbf{D}(\mathbf{r},t) = \mathbf{E}(\mathbf{r},t) + \int\_0^\infty f(\tau) \mathbf{E}(\mathbf{r},t-\tau) d\tau, \quad
\mathbf{B}(\mathbf{r},t) = \mathbf{H}(\mathbf{r},t) + \int\_0^\infty g(\tau) \mathbf{H}(\mathbf{r},t-\tau) d\tau.
$$

这里，$f(t)$ 和 $g(t)$ 被称为介质的响应函数。以 $\mathbf{D}(\mathbf{r},t)$ 为例。若 $\mathbf{E}(\mathbf{r},t)$ 为单色波，即 $\mathbf{E}(\mathbf{r},t) = \mathbf{E}\_\omega(\mathbf{r}) \exp(-i\omega t)$ 时，则 $\mathbf{D}(\mathbf{r},t)$ 可被写成

$$
\begin{aligned}
\mathbf{D}(\mathbf{r},t) &= \mathbf{E}*\omega(\mathbf{r}) \exp(-i\omega t) + \int\_0^\infty f(\tau) \mathbf{E}*\omega(\mathbf{r}) \exp(-i\omega (t - \tau)) d\tau \\
&= \mathbf{E}*\omega(\mathbf{r}) \exp(-i\omega t) + \mathbf{E}*\omega(\mathbf{r}) \exp(-i\omega t) \int\_0^\infty f(\tau) \exp(i\omega \tau) d\tau \\
&= \mathbf{E}*\omega(\mathbf{r}) \exp(-i\omega t) (1 + \tilde{f}(\omega)) \equiv \epsilon(\omega) \mathbf{E}*\omega(\mathbf{r}) \exp(-i\omega t) = \epsilon(\omega) \mathbf{E}(\mathbf{r},t).
\end{aligned}
$$

这里，$\tilde{f}(\omega)$ 为响应函数 $f(t)$ 的“准”傅立叶变换。因此，关系式

$$
\mathbf{D}*\omega(\mathbf{r}) = \epsilon(\omega) \mathbf{E}*\omega(\mathbf{r})
$$

仍然成立。只不过此时的 $\epsilon(\omega)$ 是一个依赖于频率 $\omega$ 的函数。相同的，我们亦有

$$
\mathbf{B}*\omega(\mathbf{r}) = (1 + \tilde{g}(\omega)) \mathbf{H}*\omega(\mathbf{r}) = \mu(\omega) \mathbf{H}\_\omega(\mathbf{r}).
$$

这里，$\tilde{g}(\omega)$ 为响应函数 $g(t)$ 的准傅立叶变换。

为了推导 $\mathbf{E}*\omega(\mathbf{r})$ 所满足的方程，我们仍从麦克斯韦方程组 (a) 出发。将第二式的两边取旋度后，我们有
$$
\begin{aligned}
&\nabla \times (\nabla \times \mathbf{E}(\mathbf{r},t)) = \nabla \times (\nabla \times \mathbf{E}*\omega(\mathbf{r})) e^{-i\omega t} \\
&= \nabla \times \left( -\frac{\partial \mathbf{B}(\mathbf{r},t)}{\partial t} \right) = \nabla \times \mathbf{B}*\omega(\mathbf{r}) (i\omega) e^{-i\omega t} \\
&= i\omega \mu(\omega) \nabla \times \mathbf{H}*\omega(\mathbf{r}) e^{-i\omega t}.
\end{aligned}
$$

从方程的两边消掉指数因子 $e^{-i\omega t}$ 后，我们进一步得到

$$
\begin{aligned}
&\nabla \times (\nabla \times \mathbf{E}*\omega(\mathbf{r})) = \nabla \cdot (\nabla \cdot \mathbf{E}*\omega(\mathbf{r})) - \nabla^2 \mathbf{E}*\omega(\mathbf{r}) \\\\
&= -\nabla^2 \mathbf{E}*\omega(\mathbf{r}) = i\omega \mu(\omega) \nabla \times \mathbf{H}\_\omega(\mathbf{r}).
\end{aligned}
\tag{g}
$$

再从麦克斯韦方程组的第四式，我们得到

$$
\begin{aligned}
\nabla \times \mathbf{H}(\mathbf{r},t) &= (\nabla \times \mathbf{H}*\omega(\mathbf{r})) e^{-i\omega t} = \frac{\partial \mathbf{D}(\mathbf{r},t)}{\partial t} \\\\
&= \frac{\partial}{\partial t} \left( \mathbf{D}*\omega(\mathbf{r}) e^{-i\omega t} \right) = -i\omega \mathbf{D}*\omega(\mathbf{r}) e^{-i\omega t} = -i\omega \epsilon(\omega) \mathbf{E}*\omega(\mathbf{r}) e^{-i\omega t}.
\end{aligned}
$$

同样，从此式两边消掉指数因子 $e^{-i\omega t}$ 后，我们有

$$
\nabla \times \mathbf{H}*\omega(\mathbf{r}) = -i\omega \epsilon(\omega) \mathbf{E}*\omega(\mathbf{r}).
\tag{h}
$$

将之代入 (g) 式后，我们得到

$$
-\nabla^2 \mathbf{E}*\omega(\mathbf{r}) = i\omega \mu(\omega) \nabla \times \mathbf{H}*\omega(\mathbf{r}) = i\omega \mu(\omega) (-i\omega \epsilon(\omega) \mathbf{E}*\omega(\mathbf{r})) = \mu(\omega) \epsilon(\omega) \omega^2 \mathbf{E}*\omega(\mathbf{r}),
$$

或是

$$
\nabla^2 \mathbf{E}*\omega(\mathbf{r}) + \mu(\omega) \epsilon(\omega) \omega^2 \mathbf{E}*\omega(\mathbf{r}) = 0.
$$

由于 $\mu(\omega)$，$\epsilon(\omega)$ 和 $\omega^2$ 皆为非负的，故可令它们的乘积为

$$
k^2(\omega) = \mu(\omega) \epsilon(\omega) \omega^2,
$$

而上式简化为

$$
\nabla^2 \mathbf{E}*\omega(\mathbf{r}) + k^2 \mathbf{E}*\omega(\mathbf{r}) = 0.
\tag{i}
$$

***

这一方程称为亥姆霍兹 (Helmholtz equation) 方程。为了使得麦克斯韦方程组的另外两个方程也成立，我们还需要求

$$
\nabla \cdot \mathbf{E}*\omega(\mathbf{r}) = 0, \quad \mathbf{B}*\omega(\mathbf{r}) = -\frac{i}{\omega} \nabla \times \mathbf{E}\_\omega(\mathbf{r})
$$

成立。

显然，若我们取

$$
\mathbf{E}\_\omega(\mathbf{r}) = \mathbf{E}\_0 \exp(i \mathbf{k} \cdot \mathbf{r}),
$$

且令

$$
|\mathbf{k}| = k(\omega) = \omega \sqrt{\mu(\omega)\epsilon(\omega)},
$$

则赫姆霍兹方程可被满足。只不过此时的相速

$$
u(\omega) = \frac{\omega}{k} = \frac{1}{\sqrt{\mu(\omega)\epsilon(\omega)}}
$$

是一个依赖于频率 $\omega$ 的函数。除此之外，上述其它结果皆可照搬无误。
