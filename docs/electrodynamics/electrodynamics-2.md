---
title: Chapter 2 静态电磁学基础
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

## Part 2 静磁场

前面我们提到了毕奥 - 萨伐尔定律

$$
dB(\mathbf{r}) = \frac{\mu_0 I_2}{4\pi} dl_2 \times \frac{\mathbf{r} - \mathbf{r}_2}{|\mathbf{r} - \mathbf{r}_2|^3}.
$$

如上所述，在稳恒电流的情况下，电流是在一个回路 $L$ 中流动。因此，它在空间 $\mathbf{r}$ 处所引起的总磁感应强度可以写作

$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \oint_L dl \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3},
$$

或是

$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, dx'dy'dz'.
$$

这里，$\Omega$ 为电流密度矢量 $\mathbf{j}(\mathbf{r}')$ 不为零的空间区域。上式称为毕奥 - 萨伐尔定律的积分形式。接下来我们要推导它的微分形式。

尽管前者可能更为直观一些，但后者在解静磁学问题时更为适用。

### · 微分形式

首先，我们注意到恒等式

$$
\frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} = - \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|}.
$$

成立。因此公式
$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, dx'dy'dz'.
$$
可以被改写作

$$
\begin{aligned}
\mathbf{B}(\mathbf{r}) &= - \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \times \left( \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right)\, dx'dy'dz' \\\\
&= \frac{\mu_0}{4\pi} \int \int_\Omega \left( \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right) \times \mathbf{j}(\mathbf{r}')\, dx'dy'dz'.
\end{aligned}
$$

利用恒等式

$$
\nabla \times (f(\mathbf{r}) \mathbf{A}(\mathbf{r})) = (\nabla f(\mathbf{r})) \times \mathbf{A}(\mathbf{r}) + f(\mathbf{r}) (\nabla \times \mathbf{A}(\mathbf{r})),
$$

我们可以将此式进一步改写为

$$
\begin{aligned}
\mathbf{B}(\mathbf{r}) &= \frac{\mu_0}{4\pi} \int \int_\Omega \nabla_{\mathbf{r}} \times \frac{\mathbf{j}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz' \\\\
&- \frac{\mu_0}{4\pi} \int \int_\Omega \frac{1}{|\mathbf{r} - \mathbf{r}'|} (\nabla_{\mathbf{r}} \times \mathbf{j}(\mathbf{r}'))\, dx'dy'dz'.
\end{aligned}
$$

由于电流密度 $\mathbf{j}(\mathbf{r}')$ 并不依赖于观察点坐标 $\mathbf{r}$，故此式右边的第二项为零。因此，我们得到

$$
\mathbf{B}(\mathbf{r}) = \nabla_{\mathbf{r}} \times \left( \frac{\mu_0}{4\pi} \int \int_\Omega \frac{\mathbf{j}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz' \right) \equiv \nabla_{\mathbf{r}} \times \mathbf{A}(\mathbf{r}),
$$

而

$$
\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int_\Omega \frac{\mathbf{j}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz'
$$

在文献中被称为由电流分布 $\mathbf{j}(\mathbf{r}')$ 引起的矢量势。

对数学式
$$
\mathbf{B}(\mathbf{r}) = \nabla_{\mathbf{r}} \times \left( \frac{\mu_0}{4\pi} \int \int_\Omega \frac{\mathbf{j}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz' \right) \equiv \nabla_{\mathbf{r}} \times \mathbf{A}(\mathbf{r}),
$$
两边取散度后，我们得到
$$
\mathrm{div}\,\mathbf{B}(\mathbf{r}) \equiv \nabla \cdot \mathbf{B}(\mathbf{r}) = \nabla \cdot (\nabla \times \mathbf{A}(\mathbf{r})) \equiv 0.
$$

也就是说，磁感应强度矢量场 $\mathbf{B}(\mathbf{r})$ 是无源的，即没有起点，也没有终点，总是形成一个回路。

接下来，我们计算 $\mathbf{B}(\mathbf{r})$ 的旋度。我们有

$$
\nabla \times \mathbf{B}(\mathbf{r}) = \nabla_{\mathbf{r}} \times \left( \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, dx'dy'dz' \right)
$$

$$
= \frac{\mu_0}{4\pi} \int \int_\Omega \nabla_{\mathbf{r}} \times \left( \mathbf{j}(\mathbf{r}') \times \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, dx'dy'dz'.
$$

进一步，我们利用恒等式

$$
\nabla \times (\mathbf{a} \times \mathbf{b}) = \mathbf{a}(\nabla \cdot \mathbf{b}) - \mathbf{b}(\nabla \cdot \mathbf{a}) + (\mathbf{b} \cdot \nabla)\mathbf{a} - (\mathbf{a} \cdot \nabla)\mathbf{b}.
$$

改写上式。我们得到

$$
\begin{aligned}
\nabla \times \mathbf{B}(\mathbf{r}) &= \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' - \frac{\mu_0}{4\pi} \int \int_\Omega (\nabla_{\mathbf{r}} \cdot \mathbf{j}(\mathbf{r}')) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}' \\\\
&+ \frac{\mu_0}{4\pi} \int \int_\Omega \left( \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \cdot \nabla_{\mathbf{r}} \right) \mathbf{j}(\mathbf{r}')\, d\mathbf{r}' - \frac{\mu_0}{4\pi} \int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}' \\\\
&= \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' - \frac{\mu_0}{4\pi} \int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}'.
\end{aligned}
$$

我们需要论证上式最后一行中的第二项恒为零。为此，我们利用关系式

$$
\nabla_{\mathbf{r}} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} = - \nabla_{\mathbf{r}'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}.
$$

因此，我们有

$$
\begin{aligned}
&\int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}' = - \int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}'}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, dx'dy'dz' \\\\
&= - \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_x(x', y', z') \frac{\partial}{\partial x'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \\\\
&- \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_y(x', y', z') \frac{\partial}{\partial y'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \\\\
&- \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_z(x', y', z') \frac{\partial}{\partial z'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}.
\end{aligned}
$$

只需认真计算其中一项即可。例如，我们取上式右边的第一项，并对它做分步积分后得到

$$
- \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_x(x', y', z') \frac{\partial}{\partial x'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}
$$

$$
= - \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_x(x', y', z') \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \Big|_{x'=-\infty}^{x'=\infty}
$$

$$
+ \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_x(x', y', z')}{\partial x'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}.
$$

由于在无穷远处，电流密度 $j_x(x', y', z')$ 为零，故上式中的第一项为零，只有第二项得以保留。同理，我们可得

$$
- \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_y(x', y', z') \frac{\partial}{\partial y'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}
$$

$$
= \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_y(x', y', z')}{\partial y'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3},
$$

以及

$$
- \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, j_z(x', y', z') \frac{\partial}{\partial z'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}
$$

$$
= \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_z(x', y', z')}{\partial z'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}.
$$

我们最后得到

$$
\begin{aligned}
&\int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}' \\\\
&= \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_x(x', y', z')}{\partial x'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \\\\
&+ \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_y(x', y', z')}{\partial y'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \\\\
&+ \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, \frac{\partial j_z(x', y', z')}{\partial z'} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \\\\
&= \int_{-\infty}^{\infty} dx' \int_{-\infty}^{\infty} dy' \int_{-\infty}^{\infty} dz'\, (\nabla_{\mathbf{r}'} \cdot \mathbf{j}(x', y', z')) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} = 0.
\end{aligned}
$$

在上式推导的最后一步，我们使用了稳恒电流所满足的连续性方程 $\nabla_{\mathbf{r}'} \cdot \mathbf{j}(\mathbf{r}') = 0$。

由此一来，
$$
\begin{aligned}
\nabla \times \mathbf{B}(\mathbf{r})&= \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' \\\\
&- \frac{\mu_0}{4\pi} \int \int_\Omega (\mathbf{j}(\mathbf{r}') \cdot \nabla_{\mathbf{r}}) \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}\, d\mathbf{r}'.
\end{aligned}
$$
可简化为

$$
\nabla \times \mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}'.
$$

在此式中出现的散度因子当 $\mathbf{r}' \ne \mathbf{r}$ 时恒为零。这是由于，按照定义，我们有

$$
\begin{aligned}
\nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}&= \frac{\partial}{\partial x} \frac{x - x'}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&+ \frac{\partial}{\partial y} \frac{y - y'}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&+ \frac{\partial}{\partial z} \frac{z - z'}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&= \frac{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2} - 3(x - x')^2[(x - x')^2 + (y - y')^2 + (z - z')^2]^{1/2}}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&+ \frac{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2} - 3(y - y')^2[(x - x')^2 + (y - y')^2 + (z - z')^2]^{1/2}}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&+ \frac{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2} - 3(z - z')^2[(x - x')^2 + (y - y')^2 + (z - z')^2]^{1/2}}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}}\\\\
&= \frac{3}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}} - \frac{3[(x - x')^2 + (y - y')^2 + (z - z')^2]}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{5/2}}\\\\
&= \frac{3}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}} - \frac{3}{[(x - x')^2 + (y - y')^2 + (z - z')^2]^{3/2}} = 0.
\end{aligned}
$$

而当 $\mathbf{r}' = \mathbf{r}$ 时，此式不再成立。

为了处理这一特殊情况，我们可以选取一个以 $\mathbf{r}$ 为球心，半径为 $\delta$ 的小球 $\Omega_\delta$。因此
$$
\nabla \times \mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int_\Omega \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}'.
$$
式又可被写作
$$
\begin{aligned}
\nabla \times \mathbf{B}(\mathbf{r}) &= \frac{\mu_0}{4\pi} \int \int_{\Omega - \Omega_\delta} \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' + \frac{\mu_0}{4\pi} \int \int_{\Omega_\delta} \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' \\\\
&= \frac{\mu_0}{4\pi} \int \int_{\Omega_\delta} \mathbf{j}(\mathbf{r}') \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}'.
\end{aligned}
$$

当 $\delta$ 充分小时，我们近似有 $\mathbf{j}(\mathbf{r}') \cong \mathbf{j}(\mathbf{r})$。因此，上式又可被写作

$$
\begin{aligned}
\nabla \times \mathbf{B}(\mathbf{r}) &\cong \frac{\mu_0}{4\pi} \int \int_{\Omega_\delta} \mathbf{j}(\mathbf{r}) \left( \nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' \\\\
&= \frac{\mu_0}{4\pi} \mathbf{j}(\mathbf{r}) \int \int_{\Omega_\delta} \left( - \nabla_{\mathbf{r}'} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \right)\, d\mathbf{r}' = - \frac{\mu_0}{4\pi} \mathbf{j}(\mathbf{r}) \oint_{S_\delta} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \cdot d\mathbf{S} \\\\
&= \frac{\mu_0}{4\pi} \mathbf{j}(\mathbf{r}) \oint_{S_\delta} \frac{\mathbf{r}' - \mathbf{r}}{|\mathbf{r}' - \mathbf{r}|^3} \cdot d\mathbf{S} = \frac{\mu_0}{4\pi} \mathbf{j}(\mathbf{r}) 4\pi = \mu_0 \mathbf{j}(\mathbf{r}).
\end{aligned}
$$

在推导的中间步骤，我们使用了高斯定理。最后，我们令 $\delta \to 0$，从而得到

$$
\mathrm{rot}\,\mathbf{B}(\mathbf{r}) \equiv \nabla \times \mathbf{B}(\mathbf{r}) = \mu_0 \mathbf{j}(\mathbf{r}).
$$

这一方程也可以改写成一个积分形式。为此，我们任取一个曲面 $S$，并将上式积分后有

$$
\int_S (\nabla \times \mathbf{B}(\mathbf{r})) \cdot d\mathbf{S} = \int_S \mu_0 \mathbf{j}(\mathbf{r}) \cdot d\mathbf{S} = \mu_0 I.
$$

这里，$I$ 为穿过曲面 $S$ 的总电流。接下来，我们再对上式的左边使用斯托克斯公式后得到

$$
\oint_C \mathbf{B}(\mathbf{r}) \cdot d\mathbf{l} = \mu_0 I.
$$

这里，$C$ 为曲面 $S$ 的边界。此式给出了磁感应强度矢量绕一回路 $C$ 的环流与穿过以该回路为边界的曲面 $S$ 的总电流之间的关系。

### · 例题

/example/ 在一根无穷长直导线中流动的电流 $I$ 均匀分布在半径为 $a$ 的导线的横截面上。求空间各点处的磁感应强度 $\mathbf{B}(\mathbf{r})$。

> /proof/
>
> 利用毕奥 - 萨伐尔定律，我们看到，空间每一点处的磁感应强度矢量 $\mathbf{B}(\mathbf{r})$ 都是应该沿着柱坐标系（将导线的延展方向取作 $z$ 轴）的 $\mathbf{e}_\varphi$ 方向的。又从对称性的角度考虑，磁感应强度矢量的值仅应依赖于坐标 $\rho$，而与 $\varphi$ 和 $z$ 无关。也就是说，我们应有
>
> $$
> \mathbf{B}(\mathbf{r}) = \mathbf{B}(\rho, \varphi, z) = B(\rho) \mathbf{e}_\varphi.
> $$
>
> 现在，我们取一个以导线的轴心上一点为圆心，半径为 $\rho$，且盘面的法线方向平行于 $z$ 轴的圆盘 $\Omega_\rho$，并将其边界记作 $C_\rho$。那么根据
> $$
> \oint_C \mathbf{B}(\mathbf{r}) \cdot d\mathbf{l} = \mu_0 I.
> $$
> 当 $\rho > a$ 时，我们有
> $$
> \begin{aligned}
> \oint_{C_\rho} \mathbf{B} \cdot d\mathbf{l}& = \oint_{C_\rho} B(\rho) \mathbf{e}_\varphi \cdot d\mathbf{l} \mathbf{e}_\varphi = \oint_{C_\rho} B(\rho)\, dl\\\\
> &= \int_0^{2\pi} B(\rho)\, \rho d\varphi = 2\pi\rho B(\rho) = \mu_0 I.
> \end{aligned}
> $$
>
> 上式之所以成立，是由于当 $\rho > a$ 时，穿过盘面 $\Omega_\rho$ 的总电流恰为 $I$。因此，我们解得
>
> $$
> \mathbf{B}(\rho, \varphi, z) = \frac{\mu_0 I}{2\pi\rho} \mathbf{e}_\varphi.
> $$
>
> 接下来，我们考虑 $\rho < a$ 的情况。注意到此时穿过盘面 $\Omega_\rho$ 的总电流 $I_\rho$ 仅仅是 $I$ 的一部分，我们有
>
> $$
> \begin{aligned}
> \oint_{C_\rho} \mathbf{B} \cdot d\mathbf{l} &= \oint_{C_\rho} B(\rho) \mathbf{e}_\varphi \cdot d\mathbf{l} \mathbf{e}_\varphi = \oint_{C_\rho} B(\rho)\, dl = \int_0^{2\pi} B(\rho)\, \rho d\varphi = 2\pi\rho B(\rho) \\\\
> &= \mu_0 I_\rho = \mu_0 \frac{I}{\pi a^2} \pi \rho^2 = \mu_0 I \frac{\rho^2}{a^2}.
> \end{aligned}
> $$
>
> 由此，我们得到
>
> $$
> \mathbf{B}(\rho, \varphi, z) = \frac{\mu_0 I \rho}{2\pi a^2} \mathbf{e}_\varphi.
> $$
>
> 将此式与
> $$
> \mathbf{B}(\rho, \varphi, z) = \frac{\mu_0 I}{2\pi\rho} \mathbf{e}_\varphi.
> $$
> 比较后我们发现，在导线的表面，即 $\rho = a$ 处，磁感应强度矢量 $\mathbf{B}(\rho, \varphi, z)$ 是连续变化的。
>
> 综合上面的推导，我们看到，当电荷分布以及电流分布不随时间变化时，电磁场在空间的分布满足微分关系式
>
> $$
> \begin{aligned}
> \nabla \cdot \mathbf{E}(\mathbf{r}) &= \frac{1}{\epsilon_0} \rho(\mathbf{r}), \quad \nabla \times \mathbf{E}(\mathbf{r}) = 0, \\\\
> \nabla \cdot \mathbf{B}(\mathbf{r}) &= 0, \quad \nabla \times \mathbf{B}(\mathbf{r}) = \mu_0 \mathbf{j}(\mathbf{r}).
> \end{aligned}
> $$
>
> 同时，我们还引入了标量势 $\Phi(\mathbf{r})$ 和矢量势 $\mathbf{A}(\mathbf{r})$ 的概念。它们同电磁场强的关系为
>
> $$
> - \nabla \Phi(\mathbf{r}) = \mathbf{E}(\mathbf{r}), \quad \nabla \times \mathbf{A}(\mathbf{r}) = \mathbf{B}(\mathbf{r}).
> $$
>
> 当空间中静电荷密度分布 $\rho(\mathbf{r})$ 和电流密度分布 $\mathbf{j}(\mathbf{r})$ 已知时，标量势 $\Phi(\mathbf{r})$ 和矢量势 $\mathbf{A}(\mathbf{r})$ 可以被写作
>
> $$
> \begin{aligned}
> &\Phi(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \int \int \int_\Omega \frac{\rho(x', y', z')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz',\\\\
> &\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \int \int_\Omega \frac{\mathbf{j}(x', y', z')}{|\mathbf{r} - \mathbf{r}'|}\, dx'dy'dz'.
> \end{aligned}
> $$
>
> 然而，必须强调一点的是，与电场强度 $\mathbf{E}(\mathbf{r})$ 和磁感应强度 $\mathbf{B}(\mathbf{r})$ 不同的是，标量势 $\Phi(\mathbf{r})$ 和矢量势 $\mathbf{A}(\mathbf{r})$ 实验上是不可直接测量的。数学上，这表现为无论是标量势还是矢量势都不是唯一决定的。例如，我们可以在标势上加上一个常数 $C$，即令
>
> $$
> \Phi'(\mathbf{r}) = \Phi(\mathbf{r}) + C,
> $$
>
> 而
>
> $$
> \mathbf{E}(\mathbf{r}) = - \nabla \Phi'(\mathbf{r})
> $$
>
> 仍然成立。更有甚者，若对矢量势 $\mathbf{A}(\mathbf{r})$ 加上一个形为 $\nabla \Lambda(\mathbf{r})$ 的量，即令
>
> $$
> \mathbf{A}'(\mathbf{r}) = \mathbf{A}(\mathbf{r}) + \nabla \Lambda(\mathbf{r}),
> $$
>
> 这里 $\Lambda(\mathbf{r})$ 为任意一个可导函数，那么新的矢量势 $\mathbf{A}'(\mathbf{r})$ 给出的磁感应强度 $\mathbf{B}(\mathbf{r})$ 并无改变，即
>
> $$
> \nabla \times \mathbf{A}'(\mathbf{r}) = \nabla \times \mathbf{A}(\mathbf{r}) + \nabla \times (\nabla
> $$
>

在文献中，公式
$$
\Phi'(\mathbf{r}) = \Phi(\mathbf{r}) + C
$$
以及公式
$$
\mathbf{A}'(\mathbf{r}) = \mathbf{A}(\mathbf{r}) + \nabla \Lambda(\mathbf{r}),
$$
所给出的变换称为规范变换（gauge transformation），而 $\Lambda(\mathbf{r})$ 称为规范函数。关于规范变换和规范函数，在以后的章节中我们还会深入讨论。

结束.

