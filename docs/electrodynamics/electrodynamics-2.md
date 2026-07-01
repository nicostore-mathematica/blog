---
title: Lesson 2 Maxwell方程组 I
permalink: /electrodynamics/electrodynamics-2/
createTime: 2025/11/18 19:50:40
---

1873 年，麦克斯韦发表了他 的著作 “A Treatise on Electricity and Magnetism”。作为一个杰出的数学物理学家，他归纳和总结了前人的工作，提出了以他名字命名的由四个方程组成的麦克斯韦方程组，并得出在真空中电磁扰动是以波的形式传播，其速率为光速的结论。为了理解这一奠基性的工作，我们需要对在此之前的一些实验结果做较为深入的数学分析。

## Part 1 静电场

### · 静电场

先让我们考虑静电场的情况。我们已经知道，两个静止不动的电荷 $q_1$ 和 $q_2$ 之间的受力由库仑定律

$$
\mathbf{F} = \frac{q_1 q_2}{4\pi\epsilon_0} \frac{\mathbf{r}_1 - \mathbf{r}_2}{|\mathbf{r}_1 - \mathbf{r}_2|^3}
$$

给出。若我们定义

$$
\mathbf{E}(\mathbf{r}_1) = \frac{q_2}{4\pi\epsilon_0} \frac{\mathbf{r}_1 - \mathbf{r}_2}{|\mathbf{r}_1 - \mathbf{r}_2|^3}
$$

为位于 $\mathbf{r}_2$ 处的电荷 $q_2$ 在 $\mathbf{r}_1$ 处产生的电场强度，则上式又可被写作

$$
\mathbf{F} = q_1 \mathbf{E}(\mathbf{r}_1).
$$

另有方面，实验结果显示电场具有叠加性。也就是说，由多个电荷在空间某处 $\mathbf{r}$ 所激发的电场强度等于每个电荷独立激发的电场强度之和。更为明确起见，设在空间 $\mathbf{r}_1, \mathbf{r}_2, \cdots, \mathbf{r}_N$ 处有 $N$ 个独立的电荷 $q_1, q_2, \cdots, q_N$ 存在。那么在 $\mathbf{r}$ 处，它们共同产生的电场强度为

$$
\mathbf{E}(\mathbf{r}) = \sum_{i=1}^N \frac{q_i}{4\pi\epsilon_0} \frac{\mathbf{r} - \mathbf{r}_i}{|\mathbf{r} - \mathbf{r}_i|^3} = \sum_{i=1}^N \mathbf{E}_i(\mathbf{r}).
$$

在许多情况下，可以将电荷视作连续分布在空间某一个区域 $\Omega$ 内的。此时，我们可以引入电荷密度 $\rho$ 的概念。任取 $\Omega$ 内的一点 $\bar{\mathbf{r}} = (\bar{x}, \bar{y}, \bar{z})$，我们定义 $dQ = \rho(\bar{x}, \bar{y}, \bar{z}) dV$ 为以 $\bar{\mathbf{r}}$ 为中心的一个小的球形体积元 $dV$ 内的电荷量。因此，我们可以将上面的求和式改写为

$$
\mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \int \int_\Omega \rho(\bar{x}, \bar{y}, \bar{z}) \frac{\mathbf{r} - \bar{\mathbf{r}}}{|\mathbf{r} - \bar{\mathbf{r}}|^3} d\bar{x} d\bar{y} d\bar{z}.
$$

在引入电场强度的概念后，我们可以计算一个给定的电荷分布所引起的电场对于任意一个闭合曲面 $S$ 的通量。先考虑只有一个点电荷 $q$ 存在的情况。按照定义，任何一个包含有此电荷的闭合曲面上的电场通量为

$$
\oint_S \mathbf{E} \cdot d\mathbf{S} = \oint_S \frac{q}{4\pi\epsilon_0} \frac{\mathbf{r} - \mathbf{r}_0}{|\mathbf{r} - \mathbf{r}_0|^3} \cdot d\mathbf{S}.
$$

这里，$\mathbf{r}_0$ 为电荷 $q$ 的位置矢量，而 $\mathbf{r}$ 代表闭合曲面 $S$ 上的一点。我们易知

$$
\frac{\mathbf{r} - \mathbf{r}_0}{|\mathbf{r} - \mathbf{r}_0|^3} \cdot d\mathbf{S} = \frac{(\mathbf{r} - \mathbf{r}_0) \cdot \mathbf{n}}{|\mathbf{r} - \mathbf{r}_0|^3} dS = \frac{\cos\theta}{|\mathbf{r} - \mathbf{r}_0|^2} dS = d\Omega
$$

成立。这里，$d\Omega$ 为小面元 $dS$ 相对于点电荷 $q$ 所张开的立体角。将其代入 (6) 式后，我们进一步得到

$$
\begin{aligned}
\oint_S \mathbf{E} \cdot d\mathbf{S} &= \oint_S \frac{q}{4\pi\epsilon_0} \frac{\mathbf{r} - \mathbf{r}_0}{|\mathbf{r} - \mathbf{r}_0|^3} \cdot d\mathbf{S} = \oint_S \frac{q}{4\pi\epsilon_0} d\Omega \\\\
&= \frac{q}{4\pi\epsilon_0} \oint_S d\Omega = \frac{q}{4\pi\epsilon_0} 4\pi = \frac{q}{\epsilon_0}.
\end{aligned}
$$

利用电场所满足的叠加原理，我们可以立刻得到当有 $N$ 个独立的电荷 $q_1, q_2, \cdots, q_N$ 存在时，任何一个包含有这些电荷的闭合曲面上的电场通量

$$
\begin{aligned}
&\oint_S \mathbf{E} \cdot d\mathbf{S} = \oint_S (\mathbf{E}_1 + \mathbf{E}_2 + \cdots + \mathbf{E}_N) \cdot d\mathbf{S} \\\\
&= \oint_S \mathbf{E}_1 \cdot d\mathbf{S} + \oint_S \mathbf{E}_2 \cdot d\mathbf{S} + \cdots + \oint_S \mathbf{E}_N \cdot d\mathbf{S} \\\\
&= \frac{q_1}{\epsilon_0} + \frac{q_2}{\epsilon_0} + \cdots + \frac{q_N}{\epsilon_0} = \frac{1}{\epsilon_0} \sum_{i=1}^N q_i = \frac{Q}{\epsilon_0}.
\end{aligned}
$$

现在，我们可以直接写出电荷连续分布的情况下，任何一个闭合曲面上的电场通量的表达式

$$
\oint_S \mathbf{E} \cdot d\mathbf{S} = \frac{Q}{\epsilon_0} = \frac{1}{\epsilon_0} \int \int_\Omega \rho(\bar{x}, \bar{y}, \bar{z}) d\bar{x} d\bar{y} d\bar{z}.
$$

这里，$\bar{\Omega}$ 为被闭曲面 $S$ 包围的空间区域。

为了逻辑上的完备性，我们还需要说明，位于闭曲面 $S$ 外的电荷分布对于 $S$ 的电场通量的贡献为零。这一点并不难理解。以位于闭曲面 $S$ 外的一个单独电荷 $q$ 对于曲面的电场通量为例。我们注意到，从 $q$ 所在的位置 $\mathbf{r}_0$ 延伸出去的任何一条直线，要么与该曲面不相交，要么与之相交偶数次，而相交点处的曲面的外法线方向是两两相反的。这导致 $q$ 引起的电场在以这些相交点为中心的小面元上的电通量彼此抵消。因此，电荷 $q$ 引起的电场在整个闭曲面 $S$ 上的电场通量一定恒为零。而若 $q$ 是被曲面 $S$ 包围的话，则从其位置 $\mathbf{r}_0$ 延伸出去的直线必与曲面相交，且相交的次数为奇数。这也解释了为什么由它引起的在闭曲面 $S$ 上的电场通量不为零的原因。

现在，让我们将上式应用到以空间中一点 $\mathbf{r} = (x, y, z)$ 为中心，半径为 $\delta$ 的一个小的球形区域 $\Omega_\delta$ 上。我们有

$$
\oint_{S_\delta} \mathbf{E} \cdot d\mathbf{S} = \frac{1}{\epsilon_0} \int \int_{\Omega_\delta} \rho(\bar{x}, \bar{y}, \bar{z}) d\bar{x} d\bar{y} d\bar{z}.
$$

这里，$S_\delta$ 为小球 $\Omega_\delta$ 的球面。利用高斯定理

$$
\oint_{S_\delta} \mathbf{E} \cdot d\mathbf{S} = \int \int_{\Omega_\delta} \mathrm{div}\,\mathbf{E}\, dV,
$$

我们又可将上式改写作

$$
\begin{aligned}
\oint_{S_\delta} \mathbf{E} \cdot d\mathbf{S} &= \frac{1}{\epsilon_0} \int \int_{\Omega_\delta} \rho(\bar{x}, \bar{y}, \bar{z}) d\bar{x} d\bar{y} d\bar{z} \\\\
&= \int \int_{\Omega_\delta} \mathrm{div}\,\mathbf{E}(\bar{x}, \bar{y}, \bar{z}) d\bar{x} d\bar{y} d\bar{z}
\end{aligned}
$$

当小球 $\Omega_\delta$ 的半径 $\delta$ 足够小时，我们可用电场强度 $\mathbf{E}$ 和电荷密度 $\rho$ 在小球中心 $\mathbf{r} = (x, y, z)$ 处的值 $\mathbf{E}(x, y, z)$ 和 $\rho(x, y, z)$ 分别代替 $\mathbf{E}(\bar{x}, \bar{y}, \bar{z})$ 和 $\rho(\bar{x}, \bar{y}, \bar{z})$，即

$$
\begin{aligned}
&\frac{1}{\epsilon_0} \int \int_{\Omega_\delta} \rho(\bar{x}, \bar{y}, \bar{z}) d\bar{x} d\bar{y} d\bar{z} \simeq \frac{1}{\epsilon_0} \int \int_{\Omega_\delta} \rho(x, y, z) d\bar{x} d\bar{y} d\bar{z} \\\\
&= \frac{1}{\epsilon_0} \rho(x, y, z) \frac{4\pi}{3} \delta^3 \simeq \int \int_{\Omega_\delta} \mathrm{div}\,\mathbf{E}(x, y, z) d\bar{x} d\bar{y} d\bar{z} = \mathrm{div}\,\mathbf{E}(x, y, z) \frac{4\pi}{3} \delta^3.
\end{aligned}
$$

现将小球的体积 $\dfrac{4\pi}{3} \delta^3$ 从上式两边除掉，并令 $\delta \to 0$，则我们得到

$$
\mathrm{div}\,\mathbf{E}(x, y, z) \equiv \nabla \cdot \mathbf{E}(\mathbf{r}) = \frac{1}{\epsilon_0} \rho(x, y, z).
$$

这是电磁学中高斯定理的微分形式，也是真空中的麦克斯韦方程组的第一个方程，由高斯 (Karl Friedrich Gauss) 于 1839 年在研究地磁场分布的过程中所证明。

接下来，让我们考虑静电场的旋度。在单个电荷存在的情况下，我们看到电场强度 $\mathbf{E}$ 是以“辐射”状的形式从电荷 $q$ 指向无穷远处的，并不存在涡旋结构。因此，我们有理由期待静电场的旋度为零。下面，我们给这一结论一个数学证明。

首先，我们证明，由一个单独的点电荷 $q$ 在空间中任何一条闭合曲线 $C$ 上产生的电场环流量恒为零。实际上，若将点电荷 $q$ 放在坐标系的原点处，则我们有

$$
\oint_C \mathbf{E} \cdot d\mathbf{l} = \oint_C \frac{q}{4\pi\epsilon_0} \frac{\mathbf{r}}{r^3} \cdot d\mathbf{l} = \oint_C \frac{q}{4\pi\epsilon_0} \frac{r\, dl\, \cos\theta}{r^3} = \oint_C \frac{q}{4\pi\epsilon_0} \frac{\cos\theta}{r^2} dl.
$$

这里，$\theta$ 为矢径 $\mathbf{r}$ 与线元 $d\mathbf{l}$ 之间的夹角。从教科书第 6 页上图 1-3 中不难看出，$\cos\theta\, dl = dr$。因此，我们有

$$
\oint_C \mathbf{E} \cdot d\mathbf{l} = \frac{q}{4\pi\epsilon_0} \oint_C \frac{1}{r^2} dr = -\frac{q}{4\pi\epsilon_0} \oint_C d\left( \frac{1}{r} \right) = 0.
$$

再利用静电场强度所满足的线性叠加性，我们立刻可知，对于电荷的任何空间分布，对于由此产生的静电场，

$$
\oint_C \mathbf{E} \cdot d\mathbf{l} = 0
$$

都成立。

另一方面，利用斯托克斯公式，我们又可得到

$$
0 = \oint_C \mathbf{E} \cdot d\mathbf{l} = \int_S (\mathrm{rot}\,\mathbf{E}) \cdot d\mathbf{S}.
$$

这里，$S$ 是任何一个以回路 $C$ 为边界的曲面。特别，若我们以点 $\mathbf{r} = (x, y, z)$ 为中心画一个半径为 $\delta$ 的圆 $C_\delta$ 的话，则下式

$$
0 = \oint_{C_\delta} \mathbf{E} \cdot d\mathbf{l} = \int_{\tilde{S}_\delta} (\mathrm{rot}\,\mathbf{E}) \cdot d\mathbf{S}
$$

成立。这里，$\tilde{S}_\delta$ 为 $C_\delta$ 圈定的以 $\mathbf{r}$ 为圆心的圆盘。当 $\delta$ 足够小时，上式可以近似地改写为

$$
\begin{aligned}
0 &= \int_{\tilde{S}_\delta} (\mathrm{rot}\,\mathbf{E}) \cdot d\mathbf{S} = \int_{\tilde{S}_\delta} (\mathrm{rot}\,\mathbf{E}) \cdot \mathbf{n}\, dS \\\\
&\simeq (\mathrm{rot}\,\mathbf{E}(x, y, x)) \cdot \mathbf{n} \int_{\tilde{S}_\delta} dS = \pi\delta^2 (\mathrm{rot}\,\mathbf{E}(x, y, x)) \cdot \mathbf{n},
\end{aligned}
$$

或是

$$
0 \simeq (\mathrm{rot}\,\mathbf{E}(x, y, x)) \cdot \mathbf{n}.
$$

接下来，我们令 $\delta \to 0$，并由此得到

$$
0 = \lim_{\delta \to 0} (\mathrm{rot}\,\mathbf{E}(x, y, x)) \cdot \mathbf{n} = (\mathrm{rot}\,\mathbf{E}(x, y, x)) \cdot \mathbf{n},
$$

即

$$
\mathrm{rot}\,\mathbf{E}(x, y, x) \equiv \nabla \times \mathbf{E}(\mathbf{r}) = 0.
$$

这就是我们要证明的结果，也是真空中的麦克斯韦方程组的第二个方程。

这个结果有两个直接的推论。其一是静电场的作功是不依赖于路径的。因此，静电力是保守力。原因是，根据静电场 $\mathbf{E}$ 的定义，一个点电荷 $q$ 在空间 $\mathbf{r}$ 处感受到的静电力为 $\mathbf{F}(\mathbf{r}) = q\mathbf{E}(\mathbf{r})$。因此，绕任何一条闭合路径 $C$ 一周，静电场对电荷所作的总功为

$$
W = \oint_C \mathbf{F} \cdot d\mathbf{l} = \oint_C q\mathbf{E} \cdot d\mathbf{l} = q \oint_C \mathbf{E} \cdot d\mathbf{l} = q \int_S \mathrm{rot}\,\mathbf{E} \cdot d\mathbf{S} = 0.
$$

因此，对于空间中的任意两点 $P$ 和 $Q$，以及连接它们的任意两条路径 $L_1$ 和 $L_2$，我们有

$$
\int_{L_1} \mathbf{F} \cdot d\mathbf{l} + \int_{-L_2} \mathbf{F} \cdot d\mathbf{l} = \oint_{\bar{C}} \mathbf{F} \cdot d\mathbf{l} = 0.
$$

这里，$-L_2$ 代表 $L_2$ 的逆向路径，而 $\bar{C}$ 则是由 $L_1$ 和 $-L_2$ 一起构成的闭合路径。将上式左边的第二项移项后，我们有

$$
\int_{L_1} \mathbf{F} \cdot d\mathbf{l} = - \int_{-L_2} \mathbf{F} \cdot d\mathbf{l} = \int_{L_2} \mathbf{F} \cdot d\mathbf{l}.
$$

也就是说，沿任何两条从点 $P$ 到点 $Q$ 的路径 $L_1$ 和 $L_2$，静电力对一个点电荷所作之功是一样的。

其次，考虑到微分恒等式 $\nabla \times (\nabla f(\mathbf{r})) = 0$ 对于任何标量函数 $f(\mathbf{r})$ 都成立，$\mathrm{rot}\,\mathbf{E} = 0$ 的另外一个推论是静电场强度 $\mathbf{E}(\mathbf{r})$ 可以写成一个标量函数 $\tilde{\Phi}(\mathbf{r})$ 的梯度，即

$$
\mathbf{E}(\mathbf{r}) = \nabla \tilde{\Phi}(\mathbf{r}) = \frac{\partial \tilde{\Phi}(x, y, z)}{\partial x} \mathbf{i} + \frac{\partial \tilde{\Phi}(x, y, z)}{\partial y} \mathbf{j} + \frac{\partial \tilde{\Phi}(x, y, z)}{\partial z} \mathbf{k}
$$

成立。以一个点电荷产生的静电场为例，我们可以直接验证这一结论。首先，不难验证

$$
\nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} = - \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}.
$$

因此，由一个点电荷 $q$ 引起的静电场强度可以写作

$$
\mathbf{E}(\mathbf{r}) = \frac{q}{4\pi\epsilon_0} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} = - \frac{q}{4\pi\epsilon_0} \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} = \nabla_{\mathbf{r}} \left( - \frac{q}{4\pi\epsilon_0} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right).
$$

与
$$
\mathbf{E}(\mathbf{r}) = \nabla \tilde{\Phi}(\mathbf{r}) = \frac{\partial \tilde{\Phi}(x, y, z)}{\partial x} \mathbf{i} + \frac{\partial \tilde{\Phi}(x, y, z)}{\partial y} \mathbf{j} + \frac{\partial \tilde{\Phi}(x, y, z)}{\partial z} \mathbf{k}
$$
进行比较后，我们看到对于点电荷引起的静电场而言，

$$
\tilde{\Phi}(x, y, z) = - \frac{q}{4\pi\epsilon_0} \frac{1}{|\mathbf{r} - \mathbf{r}'|}.
$$

再利用电场强度矢量的线性叠加性，我们看到，对于由在空间一个区域 $\Omega$ 内连续分布的电荷密度引起的静电场，可以写出

$$
\tilde{\Phi}(x, y, z) = - \frac{1}{4\pi\epsilon_0} \int \int_\Omega \frac{\rho(x', y', z')}{|\mathbf{r} - \mathbf{r}'|} dx' dy' dz'.
$$

按照英国数学家格林 (George Green) 在 1828 年提出的建议，$\tilde{\Phi}(x, y, z)$ 的负值，即

$$
\Phi(x, y, z) \equiv - \tilde{\Phi}(x, y, z) = \frac{1}{4\pi\epsilon_0} \int \int_\Omega \frac{\rho(x', y', z')}{|\mathbf{r} - \mathbf{r}'|} dx' dy' dz'
$$

被定义为静电场 $\mathbf{E}(\mathbf{r})$ 的标量势。因此，我们有

$$
\mathbf{E}(x, y, z) = - \nabla \Phi(x, y, z).
$$

在引入静电势的概念后，我们可以将静电场的作功改写作

$$
\begin{aligned}
W &= \int_P^Q q\mathbf{E} \cdot d\mathbf{l} = \int_P^Q q\mathbf{E} \cdot d\mathbf{r} = q \int_P^Q (- \nabla \Phi(\mathbf{r})) \cdot d\mathbf{r} \\\\
&= -q \int_P^Q d\Phi(\mathbf{r}) = -q(\Phi(Q) - \Phi(P)) = q\Phi(P) - q\Phi(Q).
\end{aligned}
$$

仿照在“力学”中引入引力势能的作法，我们现在可以将 $q\Phi(P)$ 和 $q\Phi(Q)$ 分别视作电荷 $q$ 在空间 $P$ 处和 $Q$ 处的静电势能。而静电场作功的结果是改变了电荷的静电势能。

更为重要的是，有了静电势的概念后，我们现在可以推导出求解静电场问题的泊松方程 (Poisson equation)。为此，让我们回到高斯定理的微分表达式。

将式 
$$
\mathbf{E}(x, y, z) = - \nabla \Phi(x, y, z).
$$
代入其中后，我们有
$$
-\mathrm{div}(\mathrm{grad}\, \Phi(x, y, z)) = - \nabla^2 \Phi(x, y, x) = \frac{1}{\epsilon_0} \rho(x, y, z).
$$

这里，

$$
\nabla^2 \equiv \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}
$$

称为拉普拉斯算符 (Laplace operator)，而公式
$$
-\mathrm{div}(\mathrm{grad}\, \Phi(x, y, z)) = - \nabla^2 \Phi(x, y, x) = \frac{1}{\epsilon_0} \rho(x, y, z).
$$
则称为泊松方程，由法国学者泊松 (Simeon Poisson) 于 1813 年给出，是求解静电学问题的基本方程。特别是当 $\rho(x, y, z) = 0$ 时，它退化为

$$
\nabla^2 \Phi(x, y, x) = 0.
$$

此方程在文献中被称为拉普拉斯方程 (Laplace equation)。

### · 电荷守恒和电流密度

在第一章中我们提及，早在富兰克林时代，物理学家们即已知道电荷是可以从一个物体转移到另外一个物体去的，并提出了电荷守恒的概念。今天我们知道，电荷是构成物体的电子和质子的内部属性。在任何变化过程中，一个封闭系统的总电荷量总是保持严格不变的，称为电荷守恒定律。在这一节中，我们将给出这一定律的数学表达形式。

考虑空间中的一个给定区域 $\Omega$。假设 $t$ 时刻，此区域内的总电荷量为 $Q(t)$。我们引入电荷密度函数 $\rho(\mathbf{r}', t)$，则 $Q(t)$ 可以被写作

$$
Q(t) = \int \int_\Omega \rho(\mathbf{r}', t)\, dx'dy'dz' = \int \int_\Omega \rho(\mathbf{r}', t)\, dV.
$$

接下来，我们可以研究 $Q(t)$ 随时间的改变。根据电荷守恒定律，我们有

$$
\begin{aligned}
\Delta Q(t) &= Q(t + \Delta t) - Q(t) = \int \int_\Omega \rho(\mathbf{r}', t + \Delta t)\, dV - \int \int_\Omega \rho(\mathbf{r}', t)\, dV \\\\
&\simeq \int \int_\Omega \frac{\partial\rho(\mathbf{r}', t)}{\partial t} \Delta t\, dV
\end{aligned}
$$

即 $\Delta Q(t)=$ 时间间隔 $\Delta t$ 内流进 $\Omega$ 的电荷量 $-$ 时间间隔 $\Delta t$ 内流出 $\Omega$ 的电荷量.

若我们定义 $\mathbf{j}(\bar{\mathbf{r}}, t)$ 为 $\Omega$ 的边界 $S$ 上一点 $\bar{\mathbf{r}}$ 处的电流密度，即单位时间内穿过法线方向与其平行的单位面积的电荷量，则上式又可被改写为

$$
\begin{aligned}
\Delta Q(t) &\simeq \int \int_\Omega \frac{\partial\rho(\mathbf{r}', t)}{\partial t} \Delta t\, dV \\
&= \int_{S_1} j_{\text{inner-normal-direction}}(\bar{\mathbf{r}}, t)\, dS \Delta t - \int_{S_2} j_{\text{outer-normal-direction}}(\bar{\mathbf{r}}, t)\, dS \Delta t \\
&= - \int_{S_1} j_{\text{outer-normal-direction}}(\bar{\mathbf{r}}, t)\, dS \Delta t - \int_{S_2} j_{\text{outer-normal-direction}}(\bar{\mathbf{r}}, t)\, dS \Delta t \\
&= - \int_{S_1} \mathbf{j}(\bar{\mathbf{r}}, t) \cdot d\mathbf{S} \Delta t - \int_{S_2} \mathbf{j}(\bar{\mathbf{r}}, t) \cdot d\mathbf{S} \Delta t \\
&= - \oint_S \mathbf{j}(\bar{\mathbf{r}}, t) \cdot d\mathbf{S} \Delta t.
\end{aligned}
$$

这里，$S$ 为包围区域 $\Omega$ 的整个曲面。现将上式两边的 $\Delta t$ 消去，并令它趋向于零，我们得到等式

$$
\int \int_\Omega \frac{\partial\rho(\mathbf{r}', t)}{\partial t}\, dV = - \oint_S \mathbf{j}(\bar{\mathbf{r}}, t) \cdot d\mathbf{S} = - \int \int_\Omega \mathrm{div}\,\mathbf{j}(\mathbf{r}', t)\, dx'dy'dz'.
$$

在上式推导的最后一步，我们使用了高斯定理。由此积分形式，我们可以进一步得到电荷守恒率的微分形式

$$
\frac{\partial\rho(\mathbf{r}, t)}{\partial t} = - \mathrm{div}\,\mathbf{j}(\mathbf{r}, t),
$$

或是

$$
\frac{\partial\rho(\mathbf{r}, t)}{\partial t} + \mathrm{div}\,\mathbf{j}(\mathbf{r}, t) = 0.
$$

这就是所谓的连续性方程，它代表的是电荷守恒定律。特别是在稳恒的情况下，电荷密度 $\rho(\mathbf{r})$ 将不依赖于时间 $t$。此时，上式退化为

$$
\mathrm{div}\,\mathbf{j}(\mathbf{r}) = 0,
$$

即恒定电流是“无源的”，没有发源点，也没有终止点。换句话说，恒定电流只能在闭合回路中通过。



