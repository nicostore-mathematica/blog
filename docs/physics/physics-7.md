---
title: Chapter 7 机械波
createTime: 2025/10/13 16:19:38
permalink: /physics/physics-7/
---

## Part 2 机械波

我们上面讨论了振子的简谐振动。根据我们的日常经验，当一个物体在气体或是液体之中做振动时，它一定会在媒质中形成扰动，引起波动现象。同时，振动的能量也会随着波的传动被传递出去。这种机械振动能量在连续介质内的传播，被称为机械波或弹性波。换句话说，它的出现依赖于弹性介质的存在。这一点是与电磁波非常不同的。后者可以在真空中传播。

波动可以被分为两大类。一类被称为横波，它的振动方向与其传播方向垂直。另外一类则被称为纵波，其振动方向与传播方向平行。要想让机械振动能量以横波形式传递出去，就要该连续介质具有切向弹性恢复力。由于空气不具有这种恢复力，故在空气中传播的声波只能是纵波。

### · 平面简谐波

由一个简谐振动引起的波动同样具有时间周期。因此，我们可以定义其频率  $\nu$  和角频率  $\omega$  为

$$
\nu = \frac{1}{T}, \quad \omega = 2\pi \nu = \frac{2\pi}{T}.
$$
除此之外，波动在空间分布上也是周期的。两个波峰（或波谷）之间的距离  $\lambda$  被称为波长。它表示在一个周期  $T$  内波动所传播的距离。因此，我们将

$$
u = \frac{\lambda}{T}
$$
定义作平面简谐波的相位速度，简称相速度。

为了形象地描述波在空间中的传播，通常将某一给定时刻波动在空间中位相同的点连接起来，构成一个曲面，称为波面。并且将该时刻处在传播方向最前面的波面，称为波前。

若波前为一平面，则波动被称为平面波。同理，若波前为一球面，则波动被称为球面波。同时，若空间中的一条曲线，其切线方向总是与波动的传播方向一致，则被称为波线。在各向同性的连续媒介质中，波线总是与波面相互垂直的。

由于波动是一种在时间和空间上都具有周期性变化的介质的运动，与该介质有关的各种物理量，例如压强，温度和介质的形变等等也必然是具有相同周期的变化量。也就是说，这些量都可以被写作

$$
\xi = \xi(r, t)
$$
的形式。这里， $\xi$  代表该物理量，而  $\xi(r, t)$  则表示一个时间和空间都具有相应的周期性函数。即我们有

$$
\xi(r + \lambda k_0, t) = \xi(r, t), \quad \xi(r, t + T) = \xi(r, t).
$$
这里， $k_0$  为沿波线方向的单位向量。

我们以一个一维简谐振动为例。设在坐标原点  $O$  处有一个简谐振子，即我们有

$$
y = \xi(0, t) = A \cos(\omega t + \varphi_0).
$$
而在同一时刻  $t$ ， $x$  点处的振动相位总要落后于  $O$  点处振动的相位。这是由于振动传播到  $x$  点处，需要一个时间间隔  $\tau = \frac{x}{u}$ 。因此， $x$  点处的相位应当为  $\omega(t - \tau) + \varphi_0$ 。因此，我们有

$$
y(x) = \xi(x, t) = A \cos\left[\omega\left(t - \frac{x}{u}\right) + \varphi_0\right] = A \cos\left[\omega\left(t - \frac{x}{\lambda T^{-1}}\right) + \varphi_0\right]
$$

$$
= A \cos\left(\omega t - \frac{2\pi}{\lambda} x + \varphi_0\right) = A \cos\left(\omega t - \frac{2\pi}{\lambda} x + \varphi_0\right).
$$

若我们定义波数为  $k = \frac{2\pi}{\lambda}$ ，则上式可以改写为

$$
y(x) = \xi(x, t) = A \cos(\omega t - kx + \varphi_0).
$$
因此， $\omega t - kx + \varphi_0$  为波动在时刻  $t$ ，位置  $x$  处的相位。当  $t$  增大时， $x$  也必须随之增大，才能保持相位不变。也就是说，这是一个等相位面的位置随着时间的增长逐渐向  $x$  轴的正方向移动的波动。同理，

$$
y(x) = \xi(x, t) = B \cos(\omega t + kx + \varphi_0)
$$
代表一个向  $x$  轴的负方向移动的波动。在文献中，人们将这种等相面位置随时间变化而移动的波称为行波。为了更加形象地描述行波，我们可以令  $k = k k_0 = \frac{2\pi}{\lambda} k_0$ ，因此，公式所表达的行波又可以被写作

$$
y = \xi(x, t) = A \cos(\omega t - k \cdot r + \varphi_0).
$$

### · 球面波

在各向同性介质中，一个对着圆心在缩涨振动的点波源引起的是以原点为中心的球面波。此时， $k$  为一个与向外传播的球面相垂直的向量。因此，我们有

$$
\xi(r, t) = \frac{A}{r} \cos(\omega t - k \cdot r + \varphi_0) = \frac{A}{r} \cos(\omega t - kr + \varphi_0).
$$
其中，“+”号表示波面是向原点传播的，即这是一个会聚球面波。同理，“-”号表示波面是向远离原点的方向传播的，这是一个发散球面波。

### · 声波

在连续介质中传播的弹性波，若其频率  $\nu$  在  $20 \sim 2 \times 10^4$  赫兹之间，可以被人耳听到，称为声波。若频率低于 20 赫兹，则称为次声波。而若频率在  $2 \times 10^4 \sim 5 \times 10^8$  赫兹之间，则称为超声波。

在空气中传播的声波只能是纵波。而在固体和液体中传播的声波则可以是纵波，也可以是横波。

### · 驻波

频率相同，振动方向相同，有固定的相位差的两束波称为相干波。当相干波相遇时，可以产生干涉现象。

为了简单起见，让我们考虑如下的两束分别沿着  $x$  轴正方向和反方向传播的波

$$
\xi_1(x, t) = A \cos(\omega t - kx + \varphi_1), \quad \xi_2(x, t) = A \cos(\omega t + kx + \varphi_2)
$$
在两束波相遇处，质元的合成位移应为

$$
\xi(x, t) = \xi_1(x, t) + \xi_2(x, t) = A [\cos(\omega t - kx + \varphi_1) + \cos(\omega t + kx + \varphi_2)]
$$

$$
= 2A \cos\left(\frac{(\omega t - kx + \varphi_1) - (\omega t + kx + \varphi_2)}{2}\right) \times \cos\left(\frac{(\omega t - kx + \varphi_1) + (\omega t + kx + \varphi_2)}{2}\right)
$$

$$
= 2A \cos(kx + \frac{\varphi_2 - \varphi_1}{2}) \cos(\omega t + \frac{\varphi_1 + \varphi_2}{2})
$$

这我们看到，与时间有关的因子是一个简谐振动函数。而相应的“振幅”则是位置的函数。也就是说，各点处的质元都是以相同的频率振动的，但其振幅则是随着位置的改变做周期性变化的。

形象地讲，波动不再向外传播了。这种合成波称为驻波。它是两个相干行波彼此干涉的结果。

特别是，当  $x$  取值为

$$
x = \frac{n\pi - \varphi}{k} = \frac{\lambda}{2\pi}(n\pi - \varphi), \quad n = 0, \ 1, \ 2, \cdots
$$
时，振幅因子  $2A \cos(kx + \varphi)$  为最大。这些位置被称为驻波的波腹。可以很容易地看到，两个相邻波腹之间的距离为  $\frac{\lambda}{2}$ 。而当

$$
x = \frac{n\pi + \frac{\pi}{2} - \varphi}{k} = \frac{\lambda}{2\pi}(n\pi + \frac{\pi}{2} - \varphi), \quad n = 0, \ 1, \ 2, \cdots
$$
时，振幅因子为零。这些位置被称为驻波的波节。显然，按照此定义，两个相邻波节之间的距离也为  $\frac{\lambda}{2}$ 。换句话说，它们之间的相位差为  $\pi$ 。

在一个驻波中，波节点处的质元始终是不动的。因此，没有能量从波节点处通过。这样，两个波节点之间的振动能量始终一个常数（或恒量）。

另外一种与驻波有关的现象是波的反射引起的。当一束波从一种连续介质入射到另外一种连续介质的表面时，会发生反射现象。这里，有两种情况需要加以区别对待。

> (1) 当波被从波密介质反射后，会在反射面处形成驻波的波腹。此时我们有  $\varphi = 0$ ，即  $\varphi_1 = \varphi_2$  成立。
>
> (2) 当波被从波密介质反射后，会在反射面处形成驻波的波节。此时我们有  $\varphi = \frac{\pi}{2}$ ，即  $\varphi_2 = \varphi_1 + \pi$  成立。文献中称为半波损失。

### · 多普勒效应

由于波源或观测者的运动，造成的观测频率与波源频率不同的现象，称为多普勒效应。

由于弹性波是在连续介质中传播的，故在研究其多普勒效应，我们必须要强调，波源相对于观测者的运动，应该以连续介质为参照系。以后我们还会学到，电磁波的传播是在真空中进行的，并不依赖于任何连续介质的存在。

因此，为了将问题简化起见，我们先考虑波源与观测者之间的相对速度远小于它们之间连心线的情况。并且假设相对于连续介质，波的相速度为  $u$ 。即使是这样，我们仍然需要分别考虑以下三种情况。

> (1) 波源相对于连续介质是静止的，而观测者运动。
>
> 先假设观测者以速率  $v_0$  朝向波源运动。此时，观测者看到波面是以速率  $u + v_0$  通过观测位置的。因此，单位时间内通过观测位置的完整的波的数目为
>
> $$
> n = \frac{u + v_0}{\lambda} = \frac{u}{\lambda} + \frac{v_0}{\lambda} = \nu + \frac{v_0}{u} \frac{u}{\lambda} = \left(1 + \frac{v_0}{u}\right) \nu.
> $$
> 显然，我们可以将此式中的波数  $n$  解释作观测者测量到的波的频率  $\nu'$ 。因此，我们可以将上式改写作
>
> $$
> \nu' = \left(1 + \frac{v_0}{u}\right) \nu > \nu.
> $$
> 这种现象在物理中被称为紫移。
>
> 同理，当观测者背离波源运动时，我们有
>
> $$
> \nu' = \frac{u - v_0}{\lambda} = \left(1 - \frac{v_0}{u}\right) \nu < \nu.
> $$
> 此时的多普勒频移被称为红移。
>
> (2) 观测者静止，波源做运动
>
> 当波源相对于连续介质静止时，波动的波长为  $\lambda = uT$ 。然而，当波源在介质内向观测者运动时，从相对于介质坐标系静止的观测者来看，在一个周期内，波源走了  $v_s T$  的距离。因此，波前相对于波源仅仅移动了
>
> $$
> \lambda' = \lambda - v_s T = uT - v_s T
> $$
>
> 的距离。根据定义，这一距离也就是观测者看到的波动的波长。因此，相对于观测者而言，波动的频率为
>
> $$
> \nu' = \frac{u}{\lambda'} = \frac{u}{(u - v_s)T} = \frac{u}{u - v_s} \nu > \nu.
> $$
> 也就是说，产生了紫移现象。同理，当波源远离观测者而去时，我们得到的频率为红移。
>
> 即我们有
>
> $$
> \nu' = \frac{u}{\lambda'} = \frac{u}{(u + v_s)T} = \frac{u}{u + v_s} \nu < \nu.
> $$
> (3) 观测者和波源做相向运动
>
> 此时，波源以速度  $v_s$  相对于介质运动，会使得相对于介质而言，其波长变为  $\lambda' = \lambda - v_s T$ 。而观测者也以速度  $v_0$  相对于介质运动，又会使得相对于观测者而言，波动的相速变为  $u + v_0$ 。因此，当波源和观测者同时相对于连续介质运动时，观测者所测得的频率为
>
> $$
> \nu' = \frac{u + v_0}{\lambda - v_s T} = \frac{u + v_0}{u - v_s} \frac{1}{T} = \frac{u + v_0}{u - v_s} \nu.
> $$
> 从上式中我们看到，对于弹性波来说，当波源与观测者的相对运动速度垂直于二者的联心线时，多普勒效应并不存在。因此，当波源与观测者的运动不是沿着它们之间的联线方向时，上述中的  $v_s$  和  $v_0$  应该取它们各自在联线方向上的投影。
>
> 特别要强调一点的是，上面的结论仅仅对于弹性波是成立的。而电磁波的传播是不依赖于弹性介质的存在的。因此，电磁波的多普勒效应不完全等同于弹性波的多普勒效应。相对性原理中的所谓时间延迟效应对它也有影响。这一点在下一章的学习中，我们会进一步给出说明。

### · 衍射 反射 折射

波在连续介质中传播时，遇到障碍物时会绕行，称为波的衍射现象。另一方面，波从一种介质进入另一种介质时，会有一部分被反射回来，分别形成透射波和反射波。

历史上，为了解释光的衍射，反射和折射现象，惠更斯提出，在时刻  $t$  时，一个波的波前的每一点都可以看作进一步发射球面波（称为子波）的新波源。这些子波在时刻  $t + \Delta t$  的包络面就是这个波在该时刻的新的波前。这一说法被称为惠更斯原理。

利用这一原理，可以证明，对于反射波，我们有
$$
\theta_\_\lambda = \theta_\text{out};
$$
而对于折射波，我们有

$$
\frac{\sin \theta_1}{\sin \theta_2} = \frac{u_1}{u_2}.
$$
对于光波，这一关系又可以被写作

$$
n_1 \sin \theta_1 = n_2 \sin \theta_2,
$$
这里， $n_1 = \frac{c}{u_1}$  和  $n_2 = \frac{c}{u_2}$  分别称为介质 1 和介质 2 的折射系数。

### · 冲击波

如果波源在连续介质中的运动速率  $v$  大于波的传播速率  $u$  时，会形成所谓冲击波。利用惠更斯原理，我们看到，此时的波前是一个锥面。而锥角由下式

$$
\sin \theta = \frac{u}{v}
$$
决定。这一角度  $\theta$  被称为马赫角。

### · 波动方程

我们已经看到，一个行波具有如下形式的表达式

$$
\xi(r, t) = A \cos(\omega t - k \cdot r + \varphi\_0).
$$
另一方面，可以很容易的验证，它满足如下的偏微分方程

$$
\frac{\partial^2 \xi(r, t)}{\partial t^2} - \frac{\omega^2}{k^2} \nabla^2 \xi(r, t) = 0.
$$
我们将  $u = \frac{\omega}{k}$  定义为波的相位速度并将上式重新改写为

$$
\frac{\partial^2 \xi(r, t)}{\partial t^2} - u^2 \nabla^2 \xi(r, t) = 0.
$$
不难验证，驻波也满足这一方程。

让我们来看一个具体的例子，即在一根绷紧的钢丝上传播的横波。此时， $\xi(x, t)$  可以理解为钢丝上  $x$  处的横向位移。任取一小段位于  $(x, x + \Delta x)$  处的钢丝，则其运动满足牛顿方程

$$
(\rho \Delta x) \frac{\partial^2 \xi(x, t)}{\partial t^2} = T \sin(\theta + \Delta \theta) - T \sin \theta.
$$
又由于在  $x$  轴方向上，这一段弦没有移动，故我们有

$$
T \cos(\theta + \Delta \theta) - T \cos \theta \approx 0.
$$
当钢丝做微小振动时，角度  $\theta$  很小，可以近似地取作  $\theta \approx 0$ 。因此公式 (246) 可以近似地写作

$$
(\rho \Delta x) \frac{\partial^2 \xi(x, t)}{\partial t^2} \approx T \left(\frac{\partial \xi(x, t)}{\partial x}\bigg|_{x + \Delta x} - \frac{\partial \xi(x, t)}{\partial x}\bigg|_x\right)
$$

$$
\approx T \frac{\partial^2 \xi(x, t)}{\partial x^2} \Delta x.
$$

将上式两边同时除以  $\Delta x$  后，再令它趋向于零，我们得到

$$
\frac{\partial^2 \xi(x, t)}{\partial t^2} = T \frac{\partial^2 \xi(x, t)}{\partial x^2},
$$
或是

$$
\frac{\partial^2 \xi(x, t)}{\partial t^2} - T \frac{\partial^2 \xi(x, t)}{\partial x^2} = 0.
$$
从上面的推导，我们也得到波速的表达式为

$$
u^2 = \frac{T}{\rho}.
$$

### · 波的能量密度

仍以弦振动为例，我们计算横波
$$
\xi(x, t) = A \cos(\omega t - kx + \varphi_0)
$$

的能量密度。

还是取位于  $(x, x + \Delta x)$  的一小段弦。其动能可以写作

$$
dE_K = \frac{1}{2} (\rho \Delta x) \left( \frac{\partial \xi(x, t)}{\partial t} \right)^2 = \frac{1}{2} \rho \omega^2 A^2 \sin^2(\omega t - kx + \varphi_0) \Delta x.
$$

为了计算这段弦的弹性势能，我们先看一下在  $x + \Delta x$  处弦切线方向上的受力情况，并引入切向弹性系数  $k_{\text{tangent}}$  的定义


$$
F_{\text{tangent}} = k_{\text{tangent}} (\xi(x + \Delta x, t) - \xi(x, t)) \equiv k_{\text{tangent}} \Delta \xi.
$$
这里， $F_{\text{tangent}}$  为造成这段弦横向形变的切向力，也就是在  $x + \Delta x$  处的拉力的垂直分量。因此，我们又有


$$
F_{\text{tangent}} = T \sin(\theta + \Delta \theta) \approx T (\theta + \Delta \theta) \approx T \tan(\theta + \Delta \theta) \approx T \frac{\Delta \xi}{\Delta x}.
$$

比较两式后，我们得到


$$
k_{\text{tangent}} \Delta \xi \approx T \frac{\Delta \xi}{\Delta x},
$$

或是


$$
k_{\text{tangent}} \approx \frac{T}{\Delta x}.
$$

在求得弹性系数  $k_{\text{tangent}}$  之后，我们可以立刻写出弦的弹性势能来。首先，我们有


$$
\Delta E_P = \frac{1}{2} k_{\text{tangent}} (\xi(x + \Delta x, t) - \xi(x, t))^2
$$

$$
= \frac{1}{2} k_{\text{tangent}} \left( \frac{\partial \xi}{\partial x} \Delta x \right)^2 = \frac{1}{2} \frac{T}{\Delta x} \left( \frac{\partial \xi}{\partial x} \right)^2 (\Delta x)^2
$$


$$
= \frac{1}{2} T \frac{\partial \xi}{\partial x} \left( \frac{\partial \xi}{\partial x} \right) = \frac{1}{2} T \frac{\partial \xi}{\partial x} A^2 k^2 \sin^2(\omega t - kx + \varphi_0)
$$


$$
= \frac{1}{2} T \frac{\partial \xi}{\partial x} A^2 \left( \frac{\omega}{u} \right)^2 \sin^2(\omega t - kx + \varphi_0) = \frac{1}{2} \frac{T}{u^2} \omega^2 \frac{\partial \xi}{\partial x} A^2 \sin^2(\omega t - kx + \varphi_0).
$$

也就是说，在任何一个时刻  $t$ ，在弦上同一点  $x$  处，波动的动能和势能是相等的。因此，位于  $(x, x + \Delta x)$  段的弦的总机械能为


$$
dE = dE_K + dE_P = \left[ \rho \omega^2 A^2 \sin^2(\omega t - kx + \varphi_0) \right] dx.
$$

而波动的能量密度则定义为


$$
\epsilon \equiv \frac{dE}{dx} = \rho \omega^2 A^2 \sin^2(\omega t - kx + \varphi_0).
$$

类似地，我们定义
$$
i \equiv \epsilon u = u \frac{dE}{dx} = \rho u \omega^2 A^2 \sin^2(\omega t - kx + \varphi_0)
$$

为波动的能量流密度.

