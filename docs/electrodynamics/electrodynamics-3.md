---
title: Chapter 3 Maxwell 方程组
permalink: /electrodynamics/electrodynamics-3/
createTime: 2026/03/13 20:57:20
---

## Part 1 含时电磁场

到目前为止，我们仅仅讨论了静电场和静磁场的情况。我们看到，在这种情况下，$\mathbf{E}(\mathbf{r})$ 和 $\mathbf{B}(\mathbf{r})$ 是彼此独立的。为了将二者联系起来，我们需要考虑随时间改变的电磁场的情况。为此，我们可以借助法拉第的电磁感应定律

$$
\mathcal{E}(t) = - \frac{d\Phi_B(t)}{dt}.
$$

对于空间中一个给定的回路 $C$，上式两边的电动势 $\mathcal{E}(t)$ 和磁通量 $\Phi_B(t)$ 可以写作

$$
\mathcal{E}(t) = \oint_C \mathbf{E}(\mathbf{r}, t) \cdot d\mathbf{l},
$$

以及

$$
\Phi_B(t) = \int_S \mathbf{B}(\mathbf{r}, t) \cdot d\mathbf{S}.
$$

这里，$S$ 为由回路 $C$ 界定的一个曲面。将之代入法拉第定律后，我们有

$$
\oint_C \mathbf{E}(\mathbf{r}, t) \cdot d\mathbf{l} = - \frac{d}{dt} \int_S \mathbf{B}(\mathbf{r}, t) \cdot d\mathbf{S} = - \int_S \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} \cdot d\mathbf{S}.
$$

对此方程的左边使用斯托克斯公式后，我们进一步得到

$$
\int_S (\nabla \times \mathbf{E}(\mathbf{r}, t)) \cdot d\mathbf{S} = - \int_S \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} \cdot d\mathbf{S},
$$

或是

$$
\nabla \times \mathbf{E}(\mathbf{r}, t) = - \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}.
$$

此即法拉第定律的微分形式。与静电场的情况不同，现在电场强度的旋度不再为零。

综上所述，麦克斯韦将已知的电磁规律可以归纳为四个方程

$$
\begin{aligned}
\nabla \cdot \mathbf{E}(\mathbf{r}, t) &= \frac{1}{\epsilon_0} \rho(\mathbf{r}, t), \quad \nabla \times \mathbf{E}(\mathbf{r}, t) = - \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}, \\\\
\nabla \cdot \mathbf{B}(\mathbf{r}, t) &= 0, \quad \nabla \times \mathbf{B}(\mathbf{r}, t) = \mu_0 \mathbf{j}(\mathbf{r}, t).
\end{aligned}
$$

但麦克斯韦也注意到，它们彼此之间并不自治。例如，若我们将第四式的两边取散度后有

$$
0 = \nabla \cdot (\nabla \times \mathbf{B}(\mathbf{r}, t)) = \mu_0 \nabla \cdot \mathbf{j}(\mathbf{r}, t).
$$

另一方面，根据连续性方程，我们又有

$$
\nabla \cdot \mathbf{j}(\mathbf{r}, t) = - \frac{\partial \rho(\mathbf{r}, t)}{\partial t},
$$

一般来说并不为零。为了消除这一不自治之处，麦克斯韦又注意到，若将方程组 (126) 中的第一式的两边对时间求导的话，则

$$
\epsilon_0 \nabla \cdot \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} = \frac{\partial \rho(\mathbf{r}, t)}{\partial t}
$$

成立。因此他提议将第四式修改为

$$
\nabla \times \mathbf{B}(\mathbf{r}, t) = \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t}.
$$

现在再对此式两边求散度的话，我们有

$$
\begin{aligned}
&\nabla \cdot (\nabla \times \mathbf{B}(\mathbf{r}, t)) = \nabla \cdot \left( \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} \right) \\\\
&= \mu_0 \left( \nabla \cdot \mathbf{j}(\mathbf{r}, t) + \epsilon_0 \nabla \cdot \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} \right) = \mu_0 \left( - \frac{\partial \rho(\mathbf{r}, t)}{\partial t} + \frac{\partial \rho(\mathbf{r}, t)}{\partial t} \right) = 0,
\end{aligned}
$$

从而消除了上述的不自治之处。同时，麦克斯韦将 $\epsilon_0 \dfrac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t}$ 称为位移电流密度（displacement current density）。

由此，在 1862 年麦克斯韦提出了以他的名字命名的方程组

$$
\begin{aligned}
\nabla \cdot \mathbf{E}(\mathbf{r}, t) &= \frac{1}{\epsilon_0} \rho(\mathbf{r}, t), \quad \nabla \times \mathbf{E}(\mathbf{r}, t) = - \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}, \\\\
\nabla \cdot \mathbf{B}(\mathbf{r}, t) &= 0, \quad \nabla \times \mathbf{B}(\mathbf{r}, t) = \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t},
\end{aligned}
$$

从而完成了经典电动力学的最后建立。

## Part 2 Maxwell 方程组推论

接下来，让我们看一下麦克斯韦方程组的一些直接推论。

### · 真空中电磁波传播

首先是真空中电磁波的传播。

将 Maxwell 方程组中的第二式再取一次旋度后，我们有
$$
\nabla \times (\nabla \times \mathbf{E}(\mathbf{r}, t)) = \nabla \times \left( - \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} \right) = - \frac{\partial}{\partial t} (\nabla \times \mathbf{B}(\mathbf{r}, t)).
$$

现将 Maxwell 方程组中的第四式代入上式的右边后，我们有

$$
\nabla \times (\nabla \times \mathbf{E}(\mathbf{r}, t)) = - \frac{\partial}{\partial t} \left( \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} \right) = - \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}(\mathbf{r}, t)}{\partial t^2}.
$$

这里，我们用到了在真空中 $\mathbf{j}(\mathbf{r}, t) = 0$ 这一事实。再利用恒等式

$$
\nabla \times (\nabla \times \mathbf{a}) = \nabla (\nabla \cdot \mathbf{a}) - \nabla^2 \mathbf{a}
$$

化简上式的左边，我们得到

$$
\nabla \cdot (\nabla \cdot \mathbf{E}(\mathbf{r}, t)) - \nabla^2 \mathbf{E}(\mathbf{r}, t) = - \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}(\mathbf{r}, t)}{\partial t^2}.
$$

将 Maxwell 方程组中的第一式代入上式的右边后有

$$
\nabla \cdot \left( \frac{1}{\epsilon_0} \rho(\mathbf{r}, t) \right) - \nabla^2 \mathbf{E}(\mathbf{r}, t) = - \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}(\mathbf{r}, t)}{\partial t^2}.
$$

但由于在真空中 $\rho(\mathbf{r}, t) = 0$ 成立，故我们最后得到

$$
- \nabla^2 \mathbf{E}(\mathbf{r}, t) = - \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}(\mathbf{r}, t)}{\partial t^2},
$$

或是

$$
\frac{\partial^2 \mathbf{E}(\mathbf{r}, t)}{\partial t^2} - \frac{1}{\mu_0 \epsilon_0} \nabla^2 \mathbf{E}(\mathbf{r}, t) = 0.
$$

若令

$$
c = \frac{1}{\sqrt{\mu_0 \epsilon_0}},
$$

则此式又可被写作

$$
\frac{\partial^2 \mathbf{E}(\mathbf{r}, t)}{\partial t^2} - c^2 \nabla^2 \mathbf{E}(\mathbf{r}, t) = 0.
$$

相似地，我们也可推出磁感应强度分布 $\mathbf{B}(\mathbf{r}, t)$ 在真空中所满足的传播方程，即

$$
\frac{\partial^2 \mathbf{B}(\mathbf{r}, t)}{\partial t^2} - c^2 \nabla^2 \mathbf{B}(\mathbf{r}, t) = 0.
$$

此种类型的方程被称为达朗贝尔方程（D'Alembert equation），在力学中被用来描述弹性波在连续介质中的传播。

> 为了看清楚这一点，让我们回顾一下声波在钢丝线上的传播方程的推导。我们以 $\xi(x, t)$ 标记钢丝上 $x$ 处的横向位移。任取一小段位于 $(x, x + \Delta x)$ 处的钢丝，则其运动满足牛顿方程
> $$
> (\rho \Delta x) \frac{\partial^2 \xi(x, t)}{\partial t^2} = T \sin(\theta + \Delta\theta) - T \sin\theta.
> $$
>
> 又由于在 $x$-轴方向上，这一段弦没有移动，故我们有
>
> $$
> T \cos(\theta + \Delta\theta) - T \cos\theta \approx 0.
> $$
>
> 当钢丝做微小振动时，角度 $\theta$ 很小，可以近似地取作 $\theta \approx 0$。因此
> $$
> (\rho \Delta x) \frac{\partial^2 \xi(x, t)}{\partial t^2} = T \sin(\theta + \Delta\theta) - T \sin\theta.
> $$
> 可以近似地写作
>
> $$
> \begin{aligned}
> (\rho \Delta x) \frac{\partial^2 \xi(x, t)}{\partial t^2} &\approx \left( T \frac{\sin(\theta + \Delta\theta)}{\cos(\theta + \Delta\theta)} - T \frac{\sin\theta}{\cos\theta} \right) \cos\theta \\\\
> &\approx T \left( \tan(\theta + \Delta\theta) - \tan\theta \right) = T \left( \left. \frac{\partial \xi(x, t)}{\partial x} \right|_{x + \Delta x} - \left. \frac{\partial \xi(x, t)}{\partial x} \right|_x \right) \\\\
> &\approx T \frac{\partial^2 \xi(x, t)}{\partial x^2} \Delta x.
> \end{aligned}
> $$
>
> 将上式两边同时除以 $\Delta x$ 后，再令它趋向于零，我们得到
>
> $$
> \rho \frac{\partial^2 \xi(x, t)}{\partial t^2} = T \frac{\partial^2 \xi(x, t)}{\partial x^2},
> $$
>
> 或是
>
> $$
> \frac{\partial^2 \xi(x, t)}{\partial t^2} - \frac{T}{\rho} \frac{\partial^2 \xi(x, t)}{\partial x^2} = \frac{\partial^2 \xi(x, t)}{\partial t^2} - u^2 \frac{\partial^2 \xi(x, t)}{\partial x^2} = 0.
> $$
>
> 不难验证，上式中出现的量
>
> $$
> u = \sqrt{\frac{T}{\rho}}
> $$
>
> 具有速率的量纲，被解释作声波在钢丝线上的传播速率。事实上，若将已知的平面行波的表达式
>
> $$
> \xi(x, t) = A \cos(\omega t - kx + \varphi_0)
> $$
>
> 代入上式后，我们得到
>
> $$
> u = \frac{\omega}{k}.
> $$
>
> 而这恰是平面行波相速率的表达式。

因此，麦克斯韦得出结论，真空中的随时间改变的电磁场是以波的形式传播的，而传播的速率为

$$
c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} = 299792458 \text{m/s},
$$

恰与光速相同。又由于这个原因，麦克斯韦进一步提出，光就是电磁波。麦克斯韦的这些结论由德国物理学家赫兹（Heinrich Hertz）于 1886 年用实验加以验证。

### · Poynting 定理

接下来，我们看麦克斯韦方程组的第二个推论。将方程组中的第四式
$$
\nabla \times \mathbf{B}(\mathbf{r}, t) = \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t},
$$
与电场强度 $\mathbf{E}(\mathbf{r}, t)$ 点乘后，我们得到
$$
\mathbf{E}(\mathbf{r}, t) \cdot (\nabla \times \mathbf{B}(\mathbf{r}, t)) = \mu_0 \mathbf{E}(\mathbf{r}, t) \cdot \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \mathbf{E}(\mathbf{r}, t) \cdot \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t}.
$$

再将方程组中的第二式与磁感应强度 $\mathbf{B}(\mathbf{r}, t)$ 点乘后，我们又得到

$$
\mathbf{B}(\mathbf{r}, t) \cdot (\nabla \times \mathbf{E}(\mathbf{r}, t)) = - \mathbf{B}(\mathbf{r}, t) \cdot \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}.
$$

两式相减后给出

$$
\begin{aligned}
&\mathbf{E}(\mathbf{r}, t) \cdot (\nabla \times \mathbf{B}(\mathbf{r}, t)) - \mathbf{B}(\mathbf{r}, t) \cdot (\nabla \times \mathbf{E}(\mathbf{r}, t)) \\\\
&= \mu_0 \mathbf{E}(\mathbf{r}, t) \cdot \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \mathbf{E}(\mathbf{r}, t) \cdot \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} + \mathbf{B}(\mathbf{r}, t) \cdot \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} \\\\
&= \mu_0 \mathbf{j}(\mathbf{r}, t) \cdot \mathbf{E}(\mathbf{r}, t) + \frac{1}{2} \mu_0 \epsilon_0 \frac{\partial E^2(\mathbf{r}, t)}{\partial t} + \frac{1}{2} \frac{\partial B^2(\mathbf{r}, t)}{\partial t}.
\end{aligned}
$$

再利用矢量场满足的微分恒等式

$$
\nabla \cdot (\mathbf{a} \times \mathbf{b}) = \mathbf{b} \cdot (\nabla \times \mathbf{a}) - \mathbf{a} \cdot (\nabla \times \mathbf{b}),
$$

我们又可将上式进一步改写为

$$
\nabla \cdot (\mathbf{B}(\mathbf{r}, t) \times \mathbf{E}(\mathbf{r}, t)) = \mu_0 \mathbf{j}(\mathbf{r}, t) \cdot \mathbf{E}(\mathbf{r}, t) + \frac{1}{2} \mu_0 \epsilon_0 \frac{\partial E^2(\mathbf{r}, t)}{\partial t} + \frac{1}{2} \frac{\partial B^2(\mathbf{r}, t)}{\partial t},
$$

或是

$$
\frac{\partial}{\partial t} \left( \frac{1}{2} \epsilon_0 E^2(\mathbf{r}, t) + \frac{1}{2\mu_0} B^2(\mathbf{r}, t) \right) + \nabla \cdot \left( \frac{1}{\mu_0} (\mathbf{E}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t)) \right) + \mathbf{j}(\mathbf{r}, t) \cdot \mathbf{E}(\mathbf{r}, t) = 0.
$$

若令

$$
\mathcal{U}(\mathbf{r}, t) = \frac{1}{2} \epsilon_0 E^2(\mathbf{r}, t) + \frac{1}{2\mu_0} B^2(\mathbf{r}, t), \quad \mathbf{S}(\mathbf{r}, t) = \frac{1}{\mu_0} (\mathbf{E}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t)),
$$

此式又可被写作

$$
\frac{\partial \mathcal{U}(\mathbf{r}, t)}{\partial t} + \nabla \cdot \mathbf{S}(\mathbf{r}, t) + \mathbf{j}(\mathbf{r}, t) \cdot \mathbf{E}(\mathbf{r}, t) = 0,
$$

由玻印亭（John Poynting）于 1884 年得到，称为玻印亭定理，而 $\mathbf{S}(\mathbf{r}, t)$ 称为玻印亭矢量。

为了理解玻印亭定理的物理意义，我们注意到上式第一项中的量 $\dfrac{1}{2} \epsilon_0 E^2$ 与 $\dfrac{1}{2\mu_0} B^2$ 都具有能量密度的量纲。要更清楚地看到这一点，我们可以通过研究电磁场对带电物体的作功来重新获得这些量。

以 $\dfrac{1}{2} \epsilon_0 E^2$ 为例。我们考虑两个点电荷 $q_1$ 和 $q_2$。假设开始时 $q_1$ 被固定于空间 $\mathbf{r}_1$ 处，而 $q_2$ 处于空间的无穷远处。现在，将 $q_2$ 非常缓慢地从无穷远处移动到空间 $\mathbf{r}_2$ 处。在此过程中，外力所做之功当为
$$
W_2 = \int_{\infty}^{\mathbf{r}_2} \mathbf{F}_{\text{out}}(\mathbf{r}) \cdot d\mathbf{l} = \int_{\infty}^{\mathbf{r}_2} (- q_2 \mathbf{E}_1(\mathbf{r})) \cdot d\mathbf{l}.
$$

这里，

$$
\mathbf{E}_1(\mathbf{r}) = \frac{q_1}{4\pi \epsilon_0} \frac{\mathbf{r} - \mathbf{r}_1}{|\mathbf{r} - \mathbf{r}_1|^3}
$$

为电荷 $q_1$ 产生的在空间 $\mathbf{r}$ 处的电场强度。利用静电势的定义，我们可以将 $W_2$ 改写作

$$
W_2 = - q_2 \int_{\infty}^{\mathbf{r}_2} \mathbf{E}_1(\mathbf{r}) \cdot d\mathbf{l} = q_2 \Phi_1(\mathbf{r}_2).
$$
又考虑到电荷 $q_1$ 与 $q_2$ 的地位是完全对等的，故我们当有

$$
W_2 = q_2 \Phi_1(\mathbf{r}_2) = q_1 \Phi_2(\mathbf{r}_1),
$$

或是

$$
W_2 = \frac{1}{2} \left( q_2 \Phi_1(\mathbf{r}_2) + q_1 \Phi_2(\mathbf{r}_1) \right).
$$

仿照上述论证，若将 $q_1$ 和 $q_2$ 分别固定在空间 $\mathbf{r}_1$ 和 $\mathbf{r}_2$ 处后，再将另外一个电荷为 $q_3$ 的粒子自无穷远处缓慢移至 $\mathbf{r}_3$ 处，我们可将在此过程中外力做功得到的附加能量写作

$$
\Delta W = q_3 \left( \Phi_1(\mathbf{r}_3) + \Phi_2(\mathbf{r}_3) \right).
$$

另一方面，考虑到电荷彼此之间的对等关系，这一能量亦等于先将电荷 $q_3$ 固定在空间 $\mathbf{r}_3$ 处，然后将电荷 $q_1$ 和 $q_2$ 自无穷远处（刚性连接后）平移至 $\mathbf{r}_1$ 和 $\mathbf{r}_2$ 处外力所做之功的求和，即

$$
\Delta W = q_1 \Phi_3(\mathbf{r}_1) + q_2 \Phi_3(\mathbf{r}_2)
$$

亦成立。将之对称化后，我们得到

$$
\Delta W = \frac{1}{2} \left( q_1 \Phi_3(\mathbf{r}_1) + q_2 \Phi_3(\mathbf{r}_2) + q_3 \Phi_1(\mathbf{r}_3) + q_3 \Phi_2(\mathbf{r}_3) \right).
$$

现将 $W_2$ 与 $\Delta W$ 相加后，我们得到三个电荷 $q_1$, $q_2$ 和 $q_3$ 之间的总能量为

$$
\begin{aligned}
W_3 &= W_2 + \Delta W \\\\
&= \frac{1}{2} \left( q_1 \Phi_2(\mathbf{r}_1) + q_2 \Phi_1(\mathbf{r}_2) + q_1 \Phi_3(\mathbf{r}_1) + q_2 \Phi_3(\mathbf{r}_2) + q_3 \Phi_1(\mathbf{r}_3) + q_3 \Phi_2(\mathbf{r}_3) \right) \\\\
&= \frac{1}{2} \left( q_1 [\Phi_2(\mathbf{r}_1) + \Phi_3(\mathbf{r}_1)] + q_2 [\Phi_1(\mathbf{r}_2) + \Phi_3(\mathbf{r}_2)] + q_3 [\Phi_1(\mathbf{r}_3) + \Phi_2(\mathbf{r}_3)] \right) \\\\
&= \frac{1}{2} \left( q_1 \Phi_{2,3}(\mathbf{r}_1) + q_2 \Phi_{1,3}(\mathbf{r}_2) + q_3 \Phi_{1,2}(\mathbf{r}_3) \right).
\end{aligned}
$$

这里，

$$
\Phi_{i,j}(\mathbf{r}) = \Phi_i(\mathbf{r}) + \Phi_j(\mathbf{r})
$$

为电荷 $q_i$ 和 $q_j$ 在空间 $\mathbf{r}$ 处产生的静电势。仿此，当电荷是在空间连续分布时，我们可以立刻写出其总静电能为

$$
W = \frac{1}{2} \int \int \int_{R^3} \rho(\mathbf{r}') \Phi(\mathbf{r}') \, dx' dy' dz'.
$$

这一表达式有两个直接的推论。先看其一。将泊松方程

$$
\nabla^2 \Phi(\mathbf{r}) = - \frac{1}{\epsilon_0} \rho(\mathbf{r})
$$

代入其中后，我们有

$$
\begin{aligned}
W &= \frac{1}{2} \int \int \int_{R^3} \rho(\mathbf{r}') \Phi(\mathbf{r}') \, dx' dy' dz' \\\\
&= - \frac{1}{2} \int \int \int_{R^3} [\epsilon_0 \nabla^2 \Phi(\mathbf{r}') ] \Phi(\mathbf{r}') \, dx' dy' dz'.
\end{aligned}
$$

再进行分步积分，并使用关系式

$$
\mathbf{E}(\mathbf{r}) = - \nabla \Phi(\mathbf{r})
$$

我们进一步得到

$$
\begin{aligned}
W &= - \frac{1}{2} \oint_{S_\infty} (\epsilon_0 \nabla \Phi(\mathbf{r}')) \Phi(\mathbf{r}') \cdot d\mathbf{S} + \frac{1}{2} \int \int \int_{R^3} \epsilon_0 [\nabla \Phi(\mathbf{r}') \cdot \nabla \Phi(\mathbf{r}')] \, dx' dy' dz' \\\\
&= \int \int \int_{R^3} \left( \frac{1}{2} \epsilon_0 E^2(\mathbf{r}') \right) \, dx' dy' dz'.
\end{aligned}
$$

这里，$S_\infty$ 为无穷远处的球面。当电荷分布在空间一个有限区域时，其上的静电势和电场强度皆为零，故上式中的面积分项取值为零。同时，从上式的最后一行可以看出，物理量 $\dfrac{1}{2} \epsilon_0 E^2(\mathbf{r})$ 的确可以解释作电场的能量密度。

其次，若我们将静电势的表达式

$$
\Phi(x', y', z') = \frac{1}{4\pi \epsilon_0} \int \int \int_\Omega \frac{\rho(\bar{x}, \bar{y}, \bar{z})}{|\mathbf{r}' - \bar{\mathbf{r}}|} \, d\bar{x} d\bar{y} d\bar{z}
$$

代入式
$$
W = \frac{1}{2} \int \int \int_{R^3} \rho(\mathbf{r}') \Phi(\mathbf{r}') \, dx' dy' dz'.
$$
后，则电荷体系的能量可以被改写作

$$
\begin{aligned}
W &= \frac{1}{2} \int \int \int_{R^3} \rho(\mathbf{r}') \Phi(\mathbf{r}') \, dx' dy' dz' \\\\
&= \frac{1}{8\pi \epsilon_0} \int \int \int_{R^3} dx' dy' dz' \int \int \int_{R^3} \frac{\rho(x', y', z') \rho(\bar{x}, \bar{y}, \bar{z})}{|\mathbf{r}' - \bar{\mathbf{r}}|} \, d\bar{x} d\bar{y} d\bar{z}.
\end{aligned}
$$

此式在原子 - 分子物理学的研究中经常被用到。

现在，让我们回到方程
$$
\frac{\partial \mathcal{U}(\mathbf{r}, t)}{\partial t} + \nabla \cdot \mathbf{S}(\mathbf{r}, t) + \mathbf{j}(\mathbf{r}, t) \cdot \mathbf{E}(\mathbf{r}, t) = 0,
$$
当 $\mathbf{j} \cdot \mathbf{E} = 0$ 时，则该方程退化为一个连续性方程。它意味着电磁场的能量是守恒的，且玻印亭矢量 $\mathbf{S} = \dfrac{1}{\mu_0} \mathbf{E} \times \mathbf{B}$ 可以被解释作能量流密度。而当 $\mathbf{j} \cdot \mathbf{E} \neq 0$ 时，人们可以将之解释作电磁场对于运动电荷的作功功率密度。

这一点也可以通过将玻印亭定理的两边对于空间任一区域 $\Omega$ 的积分
$$
\begin{aligned}
&\int \int \int_\Omega \frac{\partial \mathcal{U}(\mathbf{r}, t)}{\partial t} \, dxdydz + \int \int \int_\Omega \nabla \cdot \mathbf{S}(\mathbf{r}, t) \, dxdydz \\\\
+ &\int \int \int_\Omega \mathbf{j}(\mathbf{r}, t) \cdot \mathbf{E}(\mathbf{r}, t) \, dxdydz = 0
\end{aligned}
$$

而看得更清楚。对于上式第二项使用高斯定理后，我们进一步得到

$$
\begin{aligned}
&\frac{d}{dt} \int \int \int_\Omega \mathcal{U}(\mathbf{r}, t) \, dxdydz + \oint_{S_\Omega} \mathbf{S}(\mathbf{r}, t) \cdot d\mathbf{S} \\\\
+ &\int \int \int_\Omega \mathbf{j}(\mathbf{r}, t) \cdot \mathbf{E}(\mathbf{r}, t) \, dxdydz = 0,
\end{aligned}
$$

这里，$S_\Omega$ 为包围区域 $\Omega$ 的闭曲面。此式告诉我们，区域 $\Omega$ 内电磁场对于运动电荷所做之功以及电磁场能量随时间的改变是由从边界面 $S_\Omega$ 流入的能量流予以补偿的，即总能量是守恒的。

既然谈到能量守恒定律，人们自然要问电磁场是否具有动量，且这一动量是否守恒？为了回答这一问题，让我们重新回到麦克斯韦方程组

$$
\begin{aligned}
\nabla \cdot \mathbf{E}(\mathbf{r}, t) &= \frac{1}{\epsilon_0} \rho(\mathbf{r}, t), \quad \nabla \times \mathbf{E}(\mathbf{r}, t) = - \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}, \\\\
\nabla \cdot \mathbf{B}(\mathbf{r}, t) &= 0, \quad \nabla \times \mathbf{B}(\mathbf{r}, t) = \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t}.
\end{aligned}
$$

将此方程组中的第二式与第四式分别与 $\dfrac{1}{c^2} \mathbf{E}(\mathbf{r}, t)$ 和 $\mathbf{B}(\mathbf{r}, t)$ 做叉乘后相加，我们得到

$$
\begin{aligned}
&\frac{1}{c^2} \mathbf{E}(\mathbf{r}, t) \times (\nabla \times \mathbf{E}(\mathbf{r}, t)) + \mathbf{B}(\mathbf{r}, t) \times (\nabla \times \mathbf{B}(\mathbf{r}, t)) \\\\
&= \frac{1}{c^2} \mathbf{E}(\mathbf{r}, t) \times \left( - \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} \right) + \mathbf{B}(\mathbf{r}, t) \times \left( \mu_0 \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} \right) \\\\
&= - \mu_0 \epsilon_0 \mathbf{E}(\mathbf{r}, t) \times \frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} + \mu_0 \mathbf{B}(\mathbf{r}, t) \times \mathbf{j}(\mathbf{r}, t) + \mu_0 \epsilon_0 \mathbf{B}(\mathbf{r}, t) \times \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t} \\\\
&= - \mu_0 \epsilon_0 \frac{\partial}{\partial t} (\mathbf{E}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t)) - \mu_0 \mathbf{j}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t),
\end{aligned}
$$

或是

$$
\begin{aligned}
&\mu_0 \epsilon_0 \mathbf{E}(\mathbf{r}, t) \times (\nabla \times \mathbf{E}(\mathbf{r}, t)) + \mathbf{B}(\mathbf{r}, t) \times (\nabla \times \mathbf{B}(\mathbf{r}, t)) \\\\
+ &\mu_0 \epsilon_0 \frac{\partial}{\partial t} (\mathbf{E}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t)) + \mu_0 \mathbf{j}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t) = 0.
\end{aligned}
$$

再利用麦克斯韦方程组的第一式 $\nabla \cdot \mathbf{E}(\mathbf{r}, t) = \dfrac{1}{\epsilon_0} \rho(\mathbf{r}, t)$ 和第三式 $\nabla \cdot \mathbf{B}(\mathbf{r}, t) = 0$，我们可以将上式的左边改写成

$$
\begin{aligned}
&\mu_0 \epsilon_0 \left[ \mathbf{E}(\mathbf{r}, t) \times (\nabla \times \mathbf{E}(\mathbf{r}, t)) - \mathbf{E}(\mathbf{r}, t) \left( \nabla \cdot \mathbf{E}(\mathbf{r}, t) - \frac{1}{\epsilon_0} \rho(\mathbf{r}, t) \right) \right] \\\\
+ &\left[ \mathbf{B}(\mathbf{r}, t) \times (\nabla \times \mathbf{B}(\mathbf{r}, t)) - \mathbf{B}(\mathbf{r}, t) (\nabla \cdot \mathbf{B}(\mathbf{r}, t)) \right] \\\\
+ &\mu_0 \epsilon_0 \frac{\partial}{\partial t} (\mathbf{E}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t)) + \mu_0 \mathbf{j}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t) = 0.
\end{aligned}
$$

从上式两边除掉 $\mu_0$ 并加以整理后，我们得到

$$
\begin{aligned}
&\frac{\partial}{\partial t} [\epsilon_0 \mathbf{E}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t)] + [\rho(\mathbf{r}, t) \mathbf{E}(\mathbf{r}, t) + \mathbf{j}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t)] \\\\
+ &\frac{1}{\mu_0} [\mathbf{B}(\mathbf{r}, t) \times (\nabla \times \mathbf{B}(\mathbf{r}, t)) - \mathbf{B}(\mathbf{r}, t) (\nabla \cdot \mathbf{B}(\mathbf{r}, t))] \\\\
+ &\epsilon_0 [\mathbf{E}(\mathbf{r}, t) \times (\nabla \times \mathbf{E}(\mathbf{r}, t)) - \mathbf{E}(\mathbf{r}, t) (\nabla \cdot \mathbf{E}(\mathbf{r}, t))] = 0.
\end{aligned}
$$

注意到，上式中的第二项 $\mathbf{F}(\mathbf{r}, t) = \rho(\mathbf{r}, t) \mathbf{E}(\mathbf{r}, t) + \mathbf{j}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t)$ 可以解释作一个运动的带电体在电磁场中所受到的力密度，故此式一定与冲量定理等价。

特别是力学量 $\epsilon_0 \mathbf{E}(\mathbf{r}, t) \times \mathbf{B}(\mathbf{r}, t)$ 尽管看起来像是玻印亭矢量，但它实际上是电磁场的动量密度矢量。

## Part 3 标量势矢量势规范变换

在讨论静电场和静磁场时，我们引入了标量势和矢量势的概念，以及规范变换的定义。现在的问题是，在电场强度和磁感应强度可以随时间改变的情况下，我们应该对这些概念和定义做什么样的修改？

### · 定义延拓

先考虑磁感应强度矢量 $\mathbf{B}(\mathbf{r}, t)$。由于 $\nabla \cdot \mathbf{B}(\mathbf{r}, t) = 0$ 仍然成立，故我们可以直接引入一个含时的矢势 $\mathbf{A}(\mathbf{r}, t)$，使得
$$
\nabla \times \mathbf{A}(x, y, z, t) = \mathbf{B}(x, y, z, t).
$$

然而，对于标量势的重新引入就需要多说几句了。在含时的情况下，电场强度 $\mathbf{E}(\mathbf{r}, t)$ 的旋度不再为零，而是满足关系

$$
\nabla \times \mathbf{E}(x, y, z, t) = - \frac{\partial \mathbf{B}(x, y, z, t)}{\partial t} = - \frac{\partial}{\partial t} \nabla \times \mathbf{A}(x, y, z, t) = - \nabla \times \frac{\partial \mathbf{A}(x, y, z, t)}{\partial t}.
$$

移项后，我们有

$$
\nabla \times \left( \mathbf{E}(x, y, z, t) + \frac{\partial \mathbf{A}(x, y, z, t)}{\partial t} \right) = 0.
$$

因此，重新引入的标量势 $\Phi(\mathbf{r}, t)$ 应该使得下式

$$
\mathbf{E}(x, y, z, t) + \frac{\partial \mathbf{A}(x, y, z, t)}{\partial t} = - \nabla \Phi(x, y, z, t),
$$

即

$$
\mathbf{E}(x, y, z, t) = - \nabla \Phi(x, y, z, t) - \frac{\partial \mathbf{A}(x, y, z, t)}{\partial t}
$$

成立。如同静电场和静磁场的情况，此时的标量势和矢量势也并不是唯一确定的。

事实上，我们可以引入任意一个可导函数 $\Lambda(x, y, z, t)$，并令
$$
\begin{aligned}
\widetilde{\mathbf{A}}(x, y, z, t) &= \mathbf{A}(x, y, z, t) + \nabla \Lambda(x, y, z, t), \\\\
\widetilde{\Phi}(x, y, z, t) &= \Phi(x, y, z, t) - \frac{\partial \Lambda(x, y, z, t)}{\partial t},
\end{aligned}
$$

则不难验证，由矢量势 $\widetilde{\mathbf{A}}(x, y, z, t)$ 和标量势 $\widetilde{\Phi}(x, y, z, t)$ 所给出的电场强度和磁感应强度与由矢量势 $\mathbf{A}(x, y, z, t)$ 和标量势 $\Phi(x, y, z, t)$ 给出的完全一样，即我们有

$$
\begin{aligned}
\widetilde{\mathbf{B}}(x, y, z, t) &= \nabla \times \widetilde{\mathbf{A}}(x, y, z, t) = \nabla \times \mathbf{A}(x, y, z, t) + \nabla \times (\nabla \Lambda(x, y, z, t)) \\\\
&= \nabla \times \mathbf{A}(x, y, z, t) = \mathbf{B}(x, y, z, t),
\end{aligned}
$$

以及

$$
\begin{aligned}
\widetilde{\mathbf{E}}(x, y, z, t) &= - \nabla \widetilde{\Phi}(x, y, z, t) - \frac{\partial \widetilde{\mathbf{A}}(x, y, z, t)}{\partial t} \\\\
&= - \nabla \Phi(x, y, z, t) + \frac{\partial}{\partial t} (\nabla \Lambda(x, y, z, t)) - \frac{\partial \mathbf{A}(x, y, z, t)}{\partial t} - \frac{\partial}{\partial t} (\nabla \Lambda(x, y, z, t)) \\\\
&= - \nabla \Phi(x, y, z, t) - \frac{\partial \mathbf{A}(x, y, z, t)}{\partial t} = \mathbf{E}(x, y, z, t).
\end{aligned}
$$

这样一来，我们就有了一定的自由度来选取更为适宜计算的标量势和矢量势，而不必担心会影响最后的计算结果了。

### · 规范选择

最常用的规范选择有两种。一种是所谓库仑规范（Coulomb gauge），而另外一种是所谓洛伦兹规范（Lorentz gauge）。先看第一种规范。若我们选取规范函数 $\Lambda(x, y, z, t)$，使得

$$
\nabla^2 \Lambda(x, y, z, t) = - \nabla \cdot \mathbf{A}(x, y, z, t)
$$

成立，那么我们有

$$
\begin{aligned}
\nabla \cdot \widetilde{\mathbf{A}}(x, y, z, t) &= \nabla \cdot (\mathbf{A}(x, y, z, t) + \nabla \Lambda(x, y, z, t)) \\\\
&= \nabla \cdot \mathbf{A}(x, y, z, t) + \nabla^2 \Lambda(x, y, z, t) = 0.
\end{aligned}
$$

此时，新的标量势 $\widetilde{\Phi}(x, y, z, t)$ 满足方程

$$
\begin{aligned}
\nabla \cdot \mathbf{E}(x, y, z, t) &= - \nabla^2 \widetilde{\Phi}(x, y, z, t) - \frac{\partial}{\partial t} \nabla \cdot \widetilde{\mathbf{A}}(x, y, z, t) \\\\
&= - \nabla^2 \widetilde{\Phi}(x, y, z, t) = \frac{1}{\epsilon_0} \rho(x, y, z, t),
\end{aligned}
$$

或是

$$
\nabla^2 \widetilde{\Phi}(x, y, z, t) = - \frac{1}{\epsilon_0} \rho(x, y, z, t),
$$

即静电场所满足的泊松方程。因此，$\widetilde{\Phi}(x, y, z, t)$ 和 $\widetilde{\mathbf{A}}(x, y, z, t)$ 被称为满足库仑规范的标势和矢势。

在第二种情况，我们选取方程

$$
\nabla^2 \Lambda(x, y, z, t) - \mu_0 \epsilon_0 \frac{\partial^2}{\partial t^2} \Lambda(x, y, z, t) = - \nabla \cdot \mathbf{A}(x, y, z, t) - \mu_0 \epsilon_0 \frac{\partial \Phi(x, y, z, t)}{\partial t}
$$

的解作为规范函数。因此，我们有

$$
\begin{aligned}
&\nabla \cdot \widetilde{\mathbf{A}}(x, y, z, t) + \mu_0 \epsilon_0 \frac{\partial \widetilde{\Phi}(x, y, z, t)}{\partial t} \\\\
&= \nabla \cdot (\mathbf{A}(x, y, z, t) + \nabla \Lambda(x, y, z, t)) + \frac{1}{c^2} \frac{\partial}{\partial t} \left( \Phi(x, y, z, t) - \frac{\partial \Lambda(x, y, z, t)}{\partial t} \right) \\\\
&= \left( \nabla \cdot \mathbf{A}(x, y, z, t) + \frac{\partial \Phi(x, y, z, t)}{c^2 \partial t} \right) + \left( \nabla^2 \Lambda(x, y, z, t) - \frac{\partial^2 \Lambda(x, y, z, t)}{c^2 \partial t^2} \right) \\\\
&= 0.
\end{aligned}
$$

此时的 $\widetilde{\Phi}(x, y, z, t)$ 和 $\widetilde{\mathbf{A}}(x, y, z, t)$ 被分别称为满足洛伦兹规范的标量势和矢量势。在推导描述电磁场产生和辐射过程的推迟势时，这一规范非常有用。

