---
title: Chapter 7 电磁场的作用量
permalink: /electrodynamics/electrodynamics-7/
createTime: 2026/03/15 22:08:04
---

## Part 1 电磁场的作用量

在做了前面这些准备之后，我们现在可以考虑如何写出电磁场的作用量了。由于电磁场强度矢量唯一地由四维二阶张量 $\mathcal{F}$ 决定，而其作用量应该由一个洛伦兹变换下的标量给出，故我们取

$$
S_f = \gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} [F_{ij}(x_1, x_2, x_3, x_4)]^2 dx_1 dx_2 dx_3 dx_4.
$$

这里，$\gamma$ 为一个待定常数。将 $S_f$ 加到作用量
$$
S= \int_{t_a}^{t_b} \left( -m_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A}(x_1, x_2, x_3, x_4) \cdot \mathbf{v} - q \Phi(x_1, x_2, x_3, x_4) \right) dt
$$
上，我们得到一个带电粒子，外电磁场以及由粒子本身产生的电磁场的总作用量

$$
\begin{aligned}
S &= S_m + S_{mf} + S_f \\\\
&= -m_0 c^2 \int_a^b d\tau + q \int_a^b (A_1 dx_1 + A_2 dx_2 + A_3 dx_3 + A_4 dx_4) \\\\
&+ \gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} F_{ij}(x_1, x_2, x_3, x_4) F_{ij}(x_1, x_2, x_3, x_4) dx_1 dx_2 dx_3 dx_4 \\\\
&= -m_0 c^2 \int_a^b d\tau + q \int_a^b (A_1 dx_1 + A_2 dx_2 + A_3 dx_3 + A_4 dx_4) \\\\
&+ \gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \left( \frac{\partial A_j(x_1, x_2, x_3, x_4)}{\partial x_i} - \frac{\partial A_i(x_1, x_2, x_3, x_4)}{\partial x_j} \right)^2 d\Omega.
\end{aligned}
$$

需要强调一点的是，由于上式中出现的 $F_{ij}(x_1, x_2, x_3, x_4)$ 以及 $\mathbf{A}(x_1, x_2, x_3, x_4)$ 应理解为既包含外加的，也包含粒子自身运动产生的全部的电磁场强度矢量和矢量势，我们现在可以去掉粒子的带电量 $q$ 为无穷小的要求了。

接下来，我们要对电荷 $q$ 多说几句。到目前为止，我们只考虑了点电荷。显然，一个点电荷的带电量 $q$ 应同质点的静止质量 $m_0$ 一样，是洛伦兹变换下的一个不变量，即一个四维标量。为了数学上的便利起见，我们可以将 $q$ 想象成在一个无穷小的体积 $dV$ 内连续分布的电荷，其密度为 $\rho(\mathbf{r}, t)$，即我们有

$$
q = \rho(\mathbf{r}, t) dV.
$$

由于 $(q dx_1, q dx_2, q dx_3, q dx_4)$ 是一个四维矢量，而

$$
\begin{aligned}
q dx_i &= \rho(\mathbf{r}, t) dV dx_i = (\rho(\mathbf{r}, t) dx_i) dV = \left( \rho(\mathbf{r}, t) \frac{dx_i}{dt} \right) dxdydz dt \\\\
&= \left( \rho(\mathbf{r}, t) \frac{dx_i}{dt} \right) \frac{dx_1 dx_2 dx_3 dx_4}{ic} = \left( \rho(\mathbf{r}, t) \frac{dx_i}{dt} \right) \frac{d\Omega}{ic},
\end{aligned}
$$

故

$$
J_i = \rho(x_1, x_2, x_3, x_4) \frac{dx_i}{dt}
$$

是一个四维矢量。这是由于四维体积元 $d\Omega$ 在洛伦兹变换下是不变的。可以很容易地验证，$J_i$ 的前三个分量为

$$
J_1 = \rho(x_1, x_2, x_3, x_4) v_x, \quad J_2 = \rho(x_1, x_2, x_3, x_4) v_y, \quad J_3 = \rho(x_1, x_2, x_3, x_4) v_z,
$$

即我们所熟悉的电流密度的分量，而其第四个分量则为

$$
J_4 = \rho(x_1, x_2, x_3, x_4) \frac{dx_4}{dt} = \rho(x_1, x_2, x_3, x_4) \frac{d(ict)}{dt} = ic\rho(x_1, x_2, x_3, x_4).
$$

而我们所熟悉的连续性方程

$$
\begin{aligned}
&\frac{\partial \rho(x, y, z, t)}{\partial t} + \nabla \cdot (\rho(x, y, z, t) \mathbf{v}(x, y, z, t)) \\\\
&= \frac{\partial \rho(x, y, z, t)}{\partial t} + \frac{\partial J_x(x, y, z, t)}{\partial x} + \frac{\partial J_y(x, y, z, t)}{\partial y} + \frac{\partial J_z(x, y, z, t)}{\partial z} = 0
\end{aligned}
$$

现在可以被改写作

$$
\begin{aligned}
&\frac{\partial (ic\rho(x_1, x_2, x_3, x_4))}{\partial (ict)} + \frac{\partial J_1(x_1, x_2, x_3, x_4)}{\partial x_1} + \frac{\partial J_2(x_1, x_2, x_3, x_4)}{\partial x_2} + \frac{\partial J_3(x_1, x_2, x_3, x_4)}{\partial x_3} \\\\
&= \frac{\partial J_4(x_1, x_2, x_3, x_4)}{\partial x_4} + \frac{\partial J_1(x_1, x_2, x_3, x_4)}{\partial x_1} + \frac{\partial J_2(x_1, x_2, x_3, x_4)}{\partial x_2} + \frac{\partial J_3(x_1, x_2, x_3, x_4)}{\partial x_3} \\\\
&= 0.
\end{aligned}
$$

这一方程在洛伦兹变换下显然是不变的。更为重要的是，现在我们可以将总作用量写成如下的对称形式

$$
\begin{aligned}
S &= -m_0 c^2 \int_a^b d\tau + q \int_a^b (A_1 dx_1 + A_2 dx_2 + A_3 dx_3 + A_4 dx_4) \\\\
&+ \gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \left( \frac{\partial A_j(x_1, x_2, x_3, x_4)}{\partial x_i} - \frac{\partial A_i(x_1, x_2, x_3, x_4)}{\partial x_j} \right)^2 d\Omega \\\\
&= -m_0 c^2 \int_a^b d\tau + \left( \int \int \int_{R^3} \rho(x, y, z, t) dxdydz \right) \int_a^b \sum_{k=1}^{4} A_k(x_1, x_2, x_3, x_4) dx_k \\\\
&+ \gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \left( \frac{\partial A_j(x_1, x_2, x_3, x_4)}{\partial x_i} - \frac{\partial A_i(x_1, x_2, x_3, x_4)}{\partial x_j} \right)^2 d\Omega\\\\
&= -m_0 c^2 \int_a^b d\tau + \int \int \int \int_{R^4} \sum_{k=1}^{4} \rho(x_1, x_2, x_3, x_4) A_k(x_1, x_2, x_3, x_4) \left( \frac{dx_k}{dt} \right) dxdydz dt \\\\
&+ \gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \left( \frac{\partial A_j(x_1, x_2, x_3, x_4)}{\partial x_i} - \frac{\partial A_i(x_1, x_2, x_3, x_4)}{\partial x_j} \right)^2 d\Omega \\\\
&= -m_0 c^2 \int_a^b d\tau + \sum_{k=1}^{4} \int \int \int \int_{R^4} A_k(x_1, x_2, x_3, x_4) J_k(x_1, x_2, x_3, x_4) \frac{d\Omega}{ic} \\\\
&+ \gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \left( \frac{\partial A_j(x_1, x_2, x_3, x_4)}{\partial x_i} - \frac{\partial A_i(x_1, x_2, x_3, x_4)}{\partial x_j} \right)^2 d\Omega.
\end{aligned}
$$

在做了这些准备工作之后，现在我们可以利用最小作用量原理来推导麦克斯韦方程组的另外两个方程了。

为此，我们将视带电粒子的运动为已知，而只对总作用中的场势做变分。我们有

$$
\begin{aligned}
\delta S &= \delta \left( -m_0 c^2 \int_a^b d\tau \right) + \delta \left( \sum_{k=1}^{4} \int \int \int \int_{R^4} A_k(x_1, x_2, x_3, x_4) J_k(x_1, x_2, x_3, x_4) \frac{d\Omega}{ic} \right) \\\\
&+ \delta \left( \gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \left( \frac{\partial A_j(x_1, x_2, x_3, x_4)}{\partial x_i} - \frac{\partial A_i(x_1, x_2, x_3, x_4)}{\partial x_j} \right)^2 d\Omega \right) \\\\
&= \sum_{k=1}^{4} \int \int \int \int_{R^4} (\delta A_k(x_1, x_2, x_3, x_4)) J_k(x_1, x_2, x_3, x_4) \frac{d\Omega}{ic} \\\\
&+ 2\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} F_{ij} \left( \frac{\delta A_j(x_1, x_2, x_3, x_4)}{\partial x_i} - \frac{\delta A_i(x_1, x_2, x_3, x_4)}{\partial x_j} \right) d\Omega \\\\
&= \sum_{k=1}^{4} \int \int \int \int_{R^4} (\delta A_k(x_1, x_2, x_3, x_4)) J_k(x_1, x_2, x_3, x_4) \frac{d\Omega}{ic} \\\\
&+ 2\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} F_{ij}(x_1, x_2, x_3, x_4) \frac{\partial \delta A_j(x_1, x_2, x_3, x_4)}{\partial x_i} dx_1 dx_2 dx_3 dx_4 \\\\
&- 2\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} F_{ij}(x_1, x_2, x_3, x_4) \frac{\partial \delta A_i(x_1, x_2, x_3, x_4)}{\partial x_j} dx_1 dx_2 dx_3 dx_4.
\end{aligned}
$$

对于上式右边的第二和第三项做分步积分后，我们得到

$$
\begin{aligned}
\delta S &= \sum_{k=1}^{4} \int \int \int \int_{R^4} (\delta A_k(x_1, x_2, x_3, x_4)) J_k(x_1, x_2, x_3, x_4) \frac{1}{ic} dx_1 dx_2 dx_3 dx_4 \\\\
&- 2\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \frac{\partial F_{ij}(x_1, x_2, x_3, x_4)}{\partial x_i} \delta A_j(x_1, x_2, x_3, x_4) dx_1 dx_2 dx_3 dx_4 \\\\
&+ 2\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \frac{\partial F_{ij}(x_1, x_2, x_3, x_4)}{\partial x_j} \delta A_i(x_1, x_2, x_3, x_4) dx_1 dx_2 dx_3 dx_4.
\end{aligned}
$$

若我们在上式右边的第一项中将下脚标 $k$ 改写成 $j$，并在第三项中调换脚标 $i$ 和 $j$ 的位置，则上式可以重新写作

$$
\begin{aligned}
\delta S &= \sum_{j=1}^{4} \int \int \int \int_{R^4} (\delta A_j(x_1, x_2, x_3, x_4)) J_j(x_1, x_2, x_3, x_4) \frac{1}{ic} dx_1 dx_2 dx_3 dx_4 \\\\
&- 2\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \frac{\partial F_{ij}(x_1, x_2, x_3, x_4)}{\partial x_i} \delta A_j(x_1, x_2, x_3, x_4) dx_1 dx_2 dx_3 dx_4 \\\\
&+ 2\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \frac{\partial F_{ji}(x_1, x_2, x_3, x_4)}{\partial x_i} \delta A_j(x_1, x_2, x_3, x_4) dx_1 dx_2 dx_3 dx_4 \\\\
&= \sum_{j=1}^{4} \int \int \int \int_{R^4} (\delta A_j(x_1, x_2, x_3, x_4)) J_j(x_1, x_2, x_3, x_4) \frac{1}{ic} dx_1 dx_2 dx_3 dx_4 \\\\
&- 2\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \frac{\partial F_{ij}(x_1, x_2, x_3, x_4)}{\partial x_i} \delta A_j(x_1, x_2, x_3, x_4) dx_1 dx_2 dx_3 dx_4 \\\\
&- 2\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \frac{\partial F_{ij}(x_1, x_2, x_3, x_4)}{\partial x_i} \delta A_j(x_1, x_2, x_3, x_4) dx_1 dx_2 dx_3 dx_4 \\\\
&= \sum_{j=1}^{4} \int \int \int \int_{R^4} (\delta A_j(x_1, x_2, x_3, x_4)) J_j(x_1, x_2, x_3, x_4) \frac{1}{ic} dx_1 dx_2 dx_3 dx_4 \\\\
&- 4\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \frac{\partial F_{ij}(x_1, x_2, x_3, x_4)}{\partial x_i} \delta A_j(x_1, x_2, x_3, x_4) dx_1 dx_2 dx_3 dx_4.
\end{aligned}
$$

在上面推导的最后一步，我们用到了四维张量 $F_{ij}$ 是反对称的这一事实，即

$$
F_{ij}(x_1, x_2, x_3, x_4) = -F_{ji}(x_1, x_2, x_3, x_4).
$$

现在，我们令 $\delta S = 0$，并由此得到

$$
\begin{aligned}
0 &= \sum_{j=1}^{4} \int \int \int \int_{R^4} (\delta A_j(x_1, x_2, x_3, x_4)) J_j(x_1, x_2, x_3, x_4) \frac{1}{ic} dx_1 dx_2 dx_3 dx_4 \\\\
&- 4\gamma \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} \frac{\partial F_{ij}(x_1, x_2, x_3, x_4)}{\partial x_i} \delta A_j(x_1, x_2, x_3, x_4) dx_1 dx_2 dx_3 dx_4.
\end{aligned}
$$

考虑到 $\delta A_1, \delta A_2, \delta A_3$ 和 $\delta A_4$ 是彼此独立取值的，故上式仅当相应的各个被积函数为零时才可能成立。由此我们得到

$$
\frac{1}{ic} J_j(x_1, x_2, x_3, x_4) - 4\gamma \sum_{i=1}^{4} \frac{\partial F_{ij}(x_1, x_2, x_3, x_4)}{\partial x_i} = 0.
$$
若取 $j = 1$，则我们有

$$
\frac{1}{ic} J_1 = 4\gamma \left( \frac{\partial F_{11}}{\partial x_1} + \frac{\partial F_{21}}{\partial x_2} + \frac{\partial F_{31}}{\partial x_3} + \frac{\partial F_{41}}{\partial x_4} \right).
$$

将

$$
J_1 = j_x, \quad F_{11} = 0, \quad F_{21} = -B_z, \quad F_{31} = B_y, \quad F_{41} = \frac{i}{c} E_x
$$

代入上式后，我们有

$$
\frac{1}{ic} j_x = 4\gamma \left( -\frac{\partial B_z}{\partial y} + \frac{\partial B_y}{\partial z} + \frac{i}{ic} \frac{\partial E_x}{\partial t} \right).
$$

进一步化简后，我们得到

$$
j_x = 4ic\gamma \left( -\frac{\partial B_z}{\partial y} + \frac{\partial B_y}{\partial z} + \frac{1}{c^2} \frac{\partial E_x}{\partial t} \right) = 4ic\gamma \left( -(\mathrm{rot} \mathbf{B})_x + \frac{1}{c^2} \frac{\partial E_x}{\partial t} \right).
$$

将此式与麦克斯韦方程

$$
\nabla \times \mathbf{B} = \mu_0 \mathbf{j} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} = \mu_0 \mathbf{j} + \frac{1}{c^2} \frac{\partial \mathbf{E}}{\partial t}
$$

的 $x$ 分量相比较后，我们看到，若取

$$
4ic\gamma = -\frac{1}{\mu_0},
$$

则两式相互重合。由此我们解得

$$
\gamma = \frac{i}{4\mu_0 c} = \frac{i}{4} \sqrt{\frac{\epsilon_0}{\mu_0}}.
$$

同理，若在方程
$$
\frac{1}{ic} J_j(x_1, x_2, x_3, x_4) - 4\gamma \sum_{i=1}^{4} \frac{\partial F_{ij}(x_1, x_2, x_3, x_4)}{\partial x_i} = 0.
$$
中取 $j = 4$，我们有

$$
\frac{1}{ic} J_4 = 4\gamma \left( \frac{\partial F_{14}}{\partial x_1} + \frac{\partial F_{24}}{\partial x_2} + \frac{\partial F_{34}}{\partial x_3} + \frac{\partial F_{44}}{\partial x_4} \right).
$$

将

$$
J_4 = ic\rho, \quad F_{14} = -\frac{i}{c} E_x, \quad F_{24} = -\frac{i}{c} E_y, \quad F_{34} = -\frac{i}{c} E_z, \quad F_{44} = 0
$$

代入上式后，我们有

$$
\frac{1}{ic} ic\rho = 4\gamma \left( -\frac{i}{c} \frac{\partial E_x}{\partial x} - \frac{i}{c} \frac{\partial E_y}{\partial y} - \frac{i}{c} \frac{\partial E_z}{\partial z} \right) = 4\gamma \left( -\frac{i}{c} \right) \mathrm{div} \mathbf{E}.
$$

将 $\gamma = \displaystyle\frac{i}{4} \sqrt{\frac{\epsilon_0}{\mu_0}}$ 代入上式并简化后，我们有

$$
\rho = 4 \cdot \frac{i}{4} \sqrt{\frac{\epsilon_0}{\mu_0}} \left( -\frac{i}{c} \right) \mathrm{div} \mathbf{E} = \epsilon_0 \mathrm{div} \mathbf{E},
$$

或是

$$
\mathrm{div} \mathbf{E}(x, y, z, t) = \frac{1}{\epsilon_0} \rho(x, y, z, t).
$$

这就是我们要找的第四个麦克斯韦方程。

综上所述，$N$ 个带电粒子的总作用量可以写作

$$
\begin{aligned}
S &= S_m + S_{mf} + S_f \\\\
&= -\sum_{n=1}^{N} m_n c^2 \int_a^b d\tau + \frac{1}{ic} \int \int \int \int_{R^4} \sum_{k=1}^{4} A_k J_k d\Omega \\\\
&+ \frac{i}{4} \sqrt{\frac{\epsilon_0}{\mu_0}} \int \int \int \int_{R^4} \sum_{i=1}^{4} \sum_{j=1}^{4} F_{ij}(x_1, x_2, x_3, x_4) F_{ij}(x_1, x_2, x_3, x_4) d\Omega.
\end{aligned}
$$

这里，$d\Omega = dx_1 dx_2 dx_3 dx_4$ 为四维空间的体积元，$\{A_k\}$ 代表四维矢势，其分量为

$$
\begin{aligned}
A_1(x_1, x_2, x_3, x_4) &= A_x(x, y, z, t), \quad A_2(x_1, x_2, x_3, x_4) = A_y(x, y, z, t), \\\\
A_3(x_1, x_2, x_3, x_4) &= A_z(x, y, z, t), \quad A_4(x_1, x_2, x_3, x_4) = \frac{i}{c} \Phi(x, y, z, t),
\end{aligned}
$$

而电磁场强度张量定义为

$$
F_{ij}(x_1, x_2, x_3, x_4) = \frac{\partial A_j(x_1, x_2, x_3, x_4)}{\partial x_i} - \frac{\partial A_i(x_1, x_2, x_3, x_4)}{\partial x_j}.
$$

需要说明一点的是，现在的四维电流密度

$$
\begin{aligned}
J_1(x_1, x_2, x_3, x_4) &= j_x(x, y, z, t), \quad J_2(x_1, x_2, x_3, x_4) = j_y(x, y, z, t), \\\\
J_3(x_1, x_2, x_3, x_4) &= j_z(x, y, z, t), \quad J_4(x_1, x_2, x_3, x_4) = ic\rho(x, y, z, t)
\end{aligned}
$$

应该理解为是由 $N$ 个带电粒子引起的总电流密度和电荷密度。利用 $\delta$ 函数的定义，我们可以将之写作

$$
j_x(x, y, z, t) = \sum_{n=1}^{N} q_n v_{nx}(t) \delta(x - x_n(t)) \delta(y - y_n(t)) \delta(z - z_n(t)),
$$

$$
j_y(x, y, z, t) = \sum_{n=1}^{N} q_n v_{ny}(t) \delta(x - x_n(t)) \delta(y - y_n(t)) \delta(z - z_n(t)),
$$

$$
j_z(x, y, z, t) = \sum_{n=1}^{N} q_n v_{nz}(t) \delta(x - x_n(t)) \delta(y - y_n(t)) \delta(z - z_n(t)),
$$

$$
\rho(x, y, z, t) = \sum_{n=1}^{N} q_n \delta(x - x_n(t)) \delta(y - y_n(t)) \delta(z - z_n(t)).
$$

依赖于这些记号，我们可以重新将麦克斯韦方程组写作

$$
\frac{\partial F_{ij}(x_1, x_2, x_3, x_4)}{\partial x_k} + \frac{\partial F_{jk}(x_1, x_2, x_3, x_4)}{\partial x_i} + \frac{\partial F_{ki}(x_1, x_2, x_3, x_4)}{\partial x_j} = 0,
$$

以及

$$
\frac{1}{ic} J_k(x_1, x_2, x_3, x_4) = i \sqrt{\frac{\epsilon_0}{\mu_0}} \sum_{i=1}^{4} \frac{\partial F_{ik}(x_1, x_2, x_3, x_4)}{\partial x_i}.
$$

顺便一提，我们在前面提到的洛伦兹规范条件

$$
\nabla \cdot \mathbf{A}(x, y, z, t) + \frac{1}{c^2} \frac{\partial \Phi(x, y, z, t)}{\partial t} = 0,
$$

现在也可被改写作

$$
\frac{\partial A_1}{\partial x_1} + \frac{\partial A_2}{\partial x_2} + \frac{\partial A_3}{\partial x_3} + \frac{\partial A_4}{\partial x_4} = 0.
$$

显然，在洛伦兹变换下，这一约束条件的形式是不变的，即我们有

$$
\sum_{i=1}^{4} \frac{\partial A_i(x_1, x_2, x_3, x_4)}{\partial x_i} = \sum_{i=1}^{4} \frac{\partial A'_i(x'_1, x'_2, x'_3, x'_4)}{\partial x'_i} = 0.
$$

## Part 2 正则量子化举例

电动力学的拉格朗日量形式的价值在于它提供了一座从经典物理到量子物理的桥梁。利用狄拉克的正则量子化方法，人们可以先寻找一个经典物理方程所对应的拉格朗日量，然后引出正则广义动量和哈密顿量，加上量子化条件后，即可得到该体系的薛定谔方程（Schrödinger equation），完成这一过渡。作为一个例子，让我们考虑一个带电粒子在外加电磁场中的运动。

我们已经知道，在外加电磁场中，一个带电粒子 $q$ 所满足的牛顿方程为

$$
\frac{d\mathbf{p}}{dt} = q \mathbf{v} \times \mathbf{B}(x_1, x_2, x_3, x_4) + q \mathbf{E}(x_1, x_2, x_3, x_4),
$$

我们也看到，若将给出的作用量

$$
S = \int_a^b \left( -m_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A}(x_1, x_2, x_3, x_4) \cdot \mathbf{v} - q \Phi(x_1, x_2, x_3, x_4) \right) dt
$$

对其中的广义坐标 $x_1, x_2, x_3$ 和 $x_4$ 做变分，并对之使用最小作用量原理，即可重新得到上面的运动方程。因此，一个带电粒子 $q$ 在外加电磁场中运动所满足的牛顿方程对应的拉格朗日量为

$$
L = -m_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A}(x, y, z, t) \cdot \mathbf{v} - q \Phi(x, y, z, t),
$$

接下来，我们写出广义动量。根据定义，广义动量的 $x$ 分量为

$$
\begin{aligned}
p_x &= \frac{\partial L}{\partial \dot{x}} = \frac{\partial L}{\partial v_x} = \frac{\partial}{\partial v_x} \left( -m_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A} \cdot \mathbf{v} - q \Phi \right) \\\\
&= \frac{m_0 v_x}{\sqrt{1 - \frac{v^2}{c^2}}} + q A_x(x, y, z, t).
\end{aligned}
$$

同理，它的 $y$ 分量和 $z$ 分量分别为

$$
p_y = \frac{m_0 v_y}{\sqrt{1 - \frac{v^2}{c^2}}} + q A_y(x, y, z, t),
$$

及

$$
p_z = \frac{m_0 v_z}{\sqrt{1 - \frac{v^2}{c^2}}} + q A_y(x, y, z, t).
$$

现在，我们可以写出这个体系的哈密顿量

$$
\begin{aligned}
H &= v_x p_x + v_y p_y + v_z p_z - L = \frac{m_0 v_x^2}{\sqrt{1 - \frac{v^2}{c^2}}} + \frac{m_0 v_y^2}{\sqrt{1 - \frac{v^2}{c^2}}} + \frac{m_0 v_z^2}{\sqrt{1 - \frac{v^2}{c^2}}} \\\\
&+ q \mathbf{A}(x, y, z, t) \cdot \mathbf{v} - q \mathbf{A}(x, y, z, t) \cdot \mathbf{v} + q \Phi(x, y, z, t) \\\\
&= \frac{m_0 v^2}{\sqrt{1 - \frac{v^2}{c^2}}} + m_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \Phi(x, y, z, t) = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}} + q \Phi(x, y, z, t) \\\\
&= \sqrt{(\mathbf{p} - q \mathbf{A}(x, y, z, t))^2 c^2 + m_0^2 c^4} + q \Phi(x, y, z, t).
\end{aligned}
$$

若我们仅仅考虑 $v \ll c$（或 $p \ll m_0 c$）的情况，则上式可被进一步简化为

$$
H \cong m_0 c^2 + \frac{1}{2m_0} (\mathbf{p} - q \mathbf{A}(x, y, z, t))^2 + q \Phi(x, y, z, t).
$$

在略去常数项 $m_0 c^2$ 后，我们有

$$
H = \frac{1}{2m_0} (\mathbf{p} - q \mathbf{A}(x, y, z, t))^2 + q \Phi(x, y, z, t).
$$

现在，若我们将坐标 $x, y, z$ 和动量 $p_x, p_y, p_z$ 视作算符，并对它们加上量子化对易关系

$$
[\hat{x}_i, \hat{p}_j] = i\hbar \delta_{ij} \hat{I},
$$

则哈密顿量 $H$ 亦可改写成算符

$$
\begin{aligned}
\hat{H} &= \frac{1}{2m_0} (\hat{p}_x - q \hat{A}_x(\hat{x}, \hat{y}, \hat{z}, t))^2 + \frac{1}{2m_0} (\hat{p}_y - q \hat{A}_y(\hat{x}, \hat{y}, \hat{z}, t))^2 \\\\
&+ \frac{1}{2m_0} (\hat{p}_z - q \hat{A}_z(\hat{x}, \hat{y}, \hat{z}, t))^2 + q \hat{\Phi}(\hat{x}, \hat{y}, \hat{z}, t) \\\\
&= \frac{1}{2m_0} \left( \frac{\hbar}{i} \frac{\partial}{\partial x} - q \hat{A}_x(\hat{x}, \hat{y}, \hat{z}, t) \right)^2 + \frac{1}{2m_0} \left( \frac{\hbar}{i} \frac{\partial}{\partial y} - q \hat{A}_y(\hat{x}, \hat{y}, \hat{z}, t) \right)^2 \\\\
&+ \frac{1}{2m_0} \left( \frac{\hbar}{i} \frac{\partial}{\partial z} - q \hat{A}_z(\hat{x}, \hat{y}, \hat{z}, t) \right)^2 + q \hat{\Phi}(\hat{x}, \hat{y}, \hat{z}, t).
\end{aligned}
$$

这里，我们利用了动量算符在坐标表象中的表示

$$
\hat{p}_x = \frac{\hbar}{i} \frac{\partial}{\partial x}, \quad \hat{p}_y = \frac{\hbar}{i} \frac{\partial}{\partial y}, \quad \hat{p}_z = \frac{\hbar}{i} \frac{\partial}{\partial z}.
$$

最后，我们将哈密顿量算符代入薛定谔方程

$$
i\hbar \frac{\partial \psi(x, y, z, t)}{\partial t} = \hat{H} \psi(x, y, z, t),
$$

即完成了该体系的正则量子化过程。这里，$\psi(x, y, z, t)$ 为描述带电粒子在外加电磁场中运动的波函数。