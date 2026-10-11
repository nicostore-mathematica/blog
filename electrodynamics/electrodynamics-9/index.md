---
url: /electrodynamics/electrodynamics-9/index.md
---
## Part 5 电磁场的作用量

在做了前面这些准备之后，我们现在可以考虑如何写出电磁场的作用量了。由于电磁场强度矢量唯一地由四维二阶张量 $\mathcal{F}$ 决定，而其作用量应该由一个洛伦兹变换下的标量给出，故我们取

$$
S\_f = \gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \[F\_{ij}(x\_1, x\_2, x\_3, x\_4)]^2 dx\_1 dx\_2 dx\_3 dx\_4.
$$

这里，$\gamma$ 为一个待定常数。将 $S\_f$ 加到作用量
$$
S= \int\_{t\_a}^{t\_b} \left( -m\_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A}(x\_1, x\_2, x\_3, x\_4) \cdot \mathbf{v} - q \Phi(x\_1, x\_2, x\_3, x\_4) \right) dt
$$
上，我们得到一个带电粒子，外电磁场以及由粒子本身产生的电磁场的总作用量

$$
\begin{aligned}
S &= S\_m + S\_{mf} + S\_f \\\\
&= -m\_0 c^2 \int\_a^b d\tau + q \int\_a^b (A\_1 dx\_1 + A\_2 dx\_2 + A\_3 dx\_3 + A\_4 dx\_4) \\\\
&+ \gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} F\_{ij}(x\_1, x\_2, x\_3, x\_4) F\_{ij}(x\_1, x\_2, x\_3, x\_4) dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&= -m\_0 c^2 \int\_a^b d\tau + q \int\_a^b (A\_1 dx\_1 + A\_2 dx\_2 + A\_3 dx\_3 + A\_4 dx\_4) \\\\
&+ \gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \left( \frac{\partial A\_j(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} - \frac{\partial A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j} \right)^2 d\Omega.
\end{aligned}
$$

需要强调一点的是，由于上式中出现的 $F\_{ij}(x\_1, x\_2, x\_3, x\_4)$ 以及 $\mathbf{A}(x\_1, x\_2, x\_3, x\_4)$ 应理解为既包含外加的，也包含粒子自身运动产生的全部的电磁场强度矢量和矢量势，我们现在可以去掉粒子的带电量 $q$ 为无穷小的要求了。

接下来，我们要对电荷 $q$ 多说几句。到目前为止，我们只考虑了点电荷。显然，一个点电荷的带电量 $q$ 应同质点的静止质量 $m\_0$ 一样，是洛伦兹变换下的一个不变量，即一个四维标量。为了数学上的便利起见，我们可以将 $q$ 想象成在一个无穷小的体积 $dV$ 内连续分布的电荷，其密度为 $\rho(\mathbf{r}, t)$，即我们有

$$
q = \rho(\mathbf{r}, t) dV.
$$

由于 $(q dx\_1, q dx\_2, q dx\_3, q dx\_4)$ 是一个四维矢量，而

$$
\begin{aligned}
q dx\_i &= \rho(\mathbf{r}, t) dV dx\_i = (\rho(\mathbf{r}, t) dx\_i) dV = \left( \rho(\mathbf{r}, t) \frac{dx\_i}{dt} \right) dxdydz dt \\\\
&= \left( \rho(\mathbf{r}, t) \frac{dx\_i}{dt} \right) \frac{dx\_1 dx\_2 dx\_3 dx\_4}{ic} = \left( \rho(\mathbf{r}, t) \frac{dx\_i}{dt} \right) \frac{d\Omega}{ic},
\end{aligned}
$$

故

$$
J\_i = \rho(x\_1, x\_2, x\_3, x\_4) \frac{dx\_i}{dt}
$$

是一个四维矢量。这是由于四维体积元 $d\Omega$ 在洛伦兹变换下是不变的。可以很容易地验证，$J\_i$ 的前三个分量为

$$
J\_1 = \rho(x\_1, x\_2, x\_3, x\_4) v\_x, \quad J\_2 = \rho(x\_1, x\_2, x\_3, x\_4) v\_y, \quad J\_3 = \rho(x\_1, x\_2, x\_3, x\_4) v\_z,
$$

即我们所熟悉的电流密度的分量，而其第四个分量则为

$$
J\_4 = \rho(x\_1, x\_2, x\_3, x\_4) \frac{dx\_4}{dt} = \rho(x\_1, x\_2, x\_3, x\_4) \frac{d(ict)}{dt} = ic\rho(x\_1, x\_2, x\_3, x\_4).
$$

而我们所熟悉的连续性方程

$$
\begin{aligned}
&\frac{\partial \rho(x, y, z, t)}{\partial t} + \nabla \cdot (\rho(x, y, z, t) \mathbf{v}(x, y, z, t)) \\\\
&= \frac{\partial \rho(x, y, z, t)}{\partial t} + \frac{\partial J\_x(x, y, z, t)}{\partial x} + \frac{\partial J\_y(x, y, z, t)}{\partial y} + \frac{\partial J\_z(x, y, z, t)}{\partial z} = 0
\end{aligned}
$$

现在可以被改写作

$$
\begin{aligned}
&\frac{\partial (ic\rho(x\_1, x\_2, x\_3, x\_4))}{\partial (ict)} + \frac{\partial J\_1(x\_1, x\_2, x\_3, x\_4)}{\partial x\_1} + \frac{\partial J\_2(x\_1, x\_2, x\_3, x\_4)}{\partial x\_2} + \frac{\partial J\_3(x\_1, x\_2, x\_3, x\_4)}{\partial x\_3} \\\\
&= \frac{\partial J\_4(x\_1, x\_2, x\_3, x\_4)}{\partial x\_4} + \frac{\partial J\_1(x\_1, x\_2, x\_3, x\_4)}{\partial x\_1} + \frac{\partial J\_2(x\_1, x\_2, x\_3, x\_4)}{\partial x\_2} + \frac{\partial J\_3(x\_1, x\_2, x\_3, x\_4)}{\partial x\_3} \\\\
&= 0.
\end{aligned}
$$

这一方程在洛伦兹变换下显然是不变的。更为重要的是，现在我们可以将总作用量写成如下的对称形式

$$
\begin{aligned}
S &= -m\_0 c^2 \int\_a^b d\tau + q \int\_a^b (A\_1 dx\_1 + A\_2 dx\_2 + A\_3 dx\_3 + A\_4 dx\_4) \\\\
&+ \gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \left( \frac{\partial A\_j(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} - \frac{\partial A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j} \right)^2 d\Omega \\\\
&= -m\_0 c^2 \int\_a^b d\tau + \left( \int \int \int\_{R^3} \rho(x, y, z, t) dxdydz \right) \int\_a^b \sum\_{k=1}^{4} A\_k(x\_1, x\_2, x\_3, x\_4) dx\_k \\\\
&+ \gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \left( \frac{\partial A\_j(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} - \frac{\partial A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j} \right)^2 d\Omega\\\\
&= -m\_0 c^2 \int\_a^b d\tau + \int \int \int \int\_{R^4} \sum\_{k=1}^{4} \rho(x\_1, x\_2, x\_3, x\_4) A\_k(x\_1, x\_2, x\_3, x\_4) \left( \frac{dx\_k}{dt} \right) dxdydz dt \\\\
&+ \gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \left( \frac{\partial A\_j(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} - \frac{\partial A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j} \right)^2 d\Omega \\\\
&= -m\_0 c^2 \int\_a^b d\tau + \sum\_{k=1}^{4} \int \int \int \int\_{R^4} A\_k(x\_1, x\_2, x\_3, x\_4) J\_k(x\_1, x\_2, x\_3, x\_4) \frac{d\Omega}{ic} \\\\
&+ \gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \left( \frac{\partial A\_j(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} - \frac{\partial A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j} \right)^2 d\Omega.
\end{aligned}
$$

在做了这些准备工作之后，现在我们可以利用最小作用量原理来推导麦克斯韦方程组的另外两个方程了。

为此，我们将视带电粒子的运动为已知，而只对总作用中的场势做变分。我们有

$$
\begin{aligned}
\delta S &= \delta \left( -m\_0 c^2 \int\_a^b d\tau \right) + \delta \left( \sum\_{k=1}^{4} \int \int \int \int\_{R^4} A\_k(x\_1, x\_2, x\_3, x\_4) J\_k(x\_1, x\_2, x\_3, x\_4) \frac{d\Omega}{ic} \right) \\\\
&+ \delta \left( \gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \left( \frac{\partial A\_j(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} - \frac{\partial A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j} \right)^2 d\Omega \right) \\\\
&= \sum\_{k=1}^{4} \int \int \int \int\_{R^4} (\delta A\_k(x\_1, x\_2, x\_3, x\_4)) J\_k(x\_1, x\_2, x\_3, x\_4) \frac{d\Omega}{ic} \\\\
&+ 2\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} F\_{ij} \left( \frac{\delta A\_j(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} - \frac{\delta A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j} \right) d\Omega \\\\
&= \sum\_{k=1}^{4} \int \int \int \int\_{R^4} (\delta A\_k(x\_1, x\_2, x\_3, x\_4)) J\_k(x\_1, x\_2, x\_3, x\_4) \frac{d\Omega}{ic} \\\\
&+ 2\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} F\_{ij}(x\_1, x\_2, x\_3, x\_4) \frac{\partial \delta A\_j(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&- 2\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} F\_{ij}(x\_1, x\_2, x\_3, x\_4) \frac{\partial \delta A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j} dx\_1 dx\_2 dx\_3 dx\_4.
\end{aligned}
$$

对于上式右边的第二和第三项做分步积分后，我们得到

$$
\begin{aligned}
\delta S &= \sum\_{k=1}^{4} \int \int \int \int\_{R^4} (\delta A\_k(x\_1, x\_2, x\_3, x\_4)) J\_k(x\_1, x\_2, x\_3, x\_4) \frac{1}{ic} dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&- 2\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \frac{\partial F\_{ij}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} \delta A\_j(x\_1, x\_2, x\_3, x\_4) dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&+ 2\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \frac{\partial F\_{ij}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j} \delta A\_i(x\_1, x\_2, x\_3, x\_4) dx\_1 dx\_2 dx\_3 dx\_4.
\end{aligned}
$$

若我们在上式右边的第一项中将下脚标 $k$ 改写成 $j$，并在第三项中调换脚标 $i$ 和 $j$ 的位置，则上式可以重新写作

$$
\begin{aligned}
\delta S &= \sum\_{j=1}^{4} \int \int \int \int\_{R^4} (\delta A\_j(x\_1, x\_2, x\_3, x\_4)) J\_j(x\_1, x\_2, x\_3, x\_4) \frac{1}{ic} dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&- 2\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \frac{\partial F\_{ij}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} \delta A\_j(x\_1, x\_2, x\_3, x\_4) dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&+ 2\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \frac{\partial F\_{ji}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} \delta A\_j(x\_1, x\_2, x\_3, x\_4) dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&= \sum\_{j=1}^{4} \int \int \int \int\_{R^4} (\delta A\_j(x\_1, x\_2, x\_3, x\_4)) J\_j(x\_1, x\_2, x\_3, x\_4) \frac{1}{ic} dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&- 2\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \frac{\partial F\_{ij}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} \delta A\_j(x\_1, x\_2, x\_3, x\_4) dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&- 2\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \frac{\partial F\_{ij}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} \delta A\_j(x\_1, x\_2, x\_3, x\_4) dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&= \sum\_{j=1}^{4} \int \int \int \int\_{R^4} (\delta A\_j(x\_1, x\_2, x\_3, x\_4)) J\_j(x\_1, x\_2, x\_3, x\_4) \frac{1}{ic} dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&- 4\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \frac{\partial F\_{ij}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} \delta A\_j(x\_1, x\_2, x\_3, x\_4) dx\_1 dx\_2 dx\_3 dx\_4.
\end{aligned}
$$

在上面推导的最后一步，我们用到了四维张量 $F\_{ij}$ 是反对称的这一事实，即

$$
F\_{ij}(x\_1, x\_2, x\_3, x\_4) = -F\_{ji}(x\_1, x\_2, x\_3, x\_4).
$$

现在，我们令 $\delta S = 0$，并由此得到

$$
\begin{aligned}
0 &= \sum\_{j=1}^{4} \int \int \int \int\_{R^4} (\delta A\_j(x\_1, x\_2, x\_3, x\_4)) J\_j(x\_1, x\_2, x\_3, x\_4) \frac{1}{ic} dx\_1 dx\_2 dx\_3 dx\_4 \\\\
&- 4\gamma \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \frac{\partial F\_{ij}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} \delta A\_j(x\_1, x\_2, x\_3, x\_4) dx\_1 dx\_2 dx\_3 dx\_4.
\end{aligned}
$$

考虑到 $\delta A\_1, \delta A\_2, \delta A\_3$ 和 $\delta A\_4$ 是彼此独立取值的，故上式仅当相应的各个被积函数为零时才可能成立。由此我们得到

$$
\frac{1}{ic} J\_j(x\_1, x\_2, x\_3, x\_4) - 4\gamma \sum\_{i=1}^{4} \frac{\partial F\_{ij}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} = 0.
$$
若取 $j = 1$，则我们有

$$
\frac{1}{ic} J\_1 = 4\gamma \left( \frac{\partial F\_{11}}{\partial x\_1} + \frac{\partial F\_{21}}{\partial x\_2} + \frac{\partial F\_{31}}{\partial x\_3} + \frac{\partial F\_{41}}{\partial x\_4} \right).
$$

将

$$
J\_1 = j\_x, \quad F\_{11} = 0, \quad F\_{21} = -B\_z, \quad F\_{31} = B\_y, \quad F\_{41} = \frac{i}{c} E\_x
$$

代入上式后，我们有

$$
\frac{1}{ic} j\_x = 4\gamma \left( -\frac{\partial B\_z}{\partial y} + \frac{\partial B\_y}{\partial z} + \frac{i}{ic} \frac{\partial E\_x}{\partial t} \right).
$$

进一步化简后，我们得到

$$
j\_x = 4ic\gamma \left( -\frac{\partial B\_z}{\partial y} + \frac{\partial B\_y}{\partial z} + \frac{1}{c^2} \frac{\partial E\_x}{\partial t} \right) = 4ic\gamma \left( -(\mathrm{rot} \mathbf{B})\_x + \frac{1}{c^2} \frac{\partial E\_x}{\partial t} \right).
$$

将此式与麦克斯韦方程

$$
\nabla \times \mathbf{B} = \mu\_0 \mathbf{j} + \mu\_0 \epsilon\_0 \frac{\partial \mathbf{E}}{\partial t} = \mu\_0 \mathbf{j} + \frac{1}{c^2} \frac{\partial \mathbf{E}}{\partial t}
$$

的 $x$ 分量相比较后，我们看到，若取

$$
4ic\gamma = -\frac{1}{\mu\_0},
$$

则两式相互重合。由此我们解得

$$
\gamma = \frac{i}{4\mu\_0 c} = \frac{i}{4} \sqrt{\frac{\epsilon\_0}{\mu\_0}}.
$$

同理，若在方程
$$
\frac{1}{ic} J\_j(x\_1, x\_2, x\_3, x\_4) - 4\gamma \sum\_{i=1}^{4} \frac{\partial F\_{ij}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} = 0.
$$
中取 $j = 4$，我们有

$$
\frac{1}{ic} J\_4 = 4\gamma \left( \frac{\partial F\_{14}}{\partial x\_1} + \frac{\partial F\_{24}}{\partial x\_2} + \frac{\partial F\_{34}}{\partial x\_3} + \frac{\partial F\_{44}}{\partial x\_4} \right).
$$

将

$$
J\_4 = ic\rho, \quad F\_{14} = -\frac{i}{c} E\_x, \quad F\_{24} = -\frac{i}{c} E\_y, \quad F\_{34} = -\frac{i}{c} E\_z, \quad F\_{44} = 0
$$

代入上式后，我们有

$$
\frac{1}{ic} ic\rho = 4\gamma \left( -\frac{i}{c} \frac{\partial E\_x}{\partial x} - \frac{i}{c} \frac{\partial E\_y}{\partial y} - \frac{i}{c} \frac{\partial E\_z}{\partial z} \right) = 4\gamma \left( -\frac{i}{c} \right) \mathrm{div} \mathbf{E}.
$$

将 $\gamma = \displaystyle\frac{i}{4} \sqrt{\frac{\epsilon\_0}{\mu\_0}}$ 代入上式并简化后，我们有

$$
\rho = 4 \cdot \frac{i}{4} \sqrt{\frac{\epsilon\_0}{\mu\_0}} \left( -\frac{i}{c} \right) \mathrm{div} \mathbf{E} = \epsilon\_0 \mathrm{div} \mathbf{E},
$$

或是

$$
\mathrm{div} \mathbf{E}(x, y, z, t) = \frac{1}{\epsilon\_0} \rho(x, y, z, t).
$$

这就是我们要找的第四个麦克斯韦方程。

综上所述，$N$ 个带电粒子的总作用量可以写作

$$
\begin{aligned}
S &= S\_m + S\_{mf} + S\_f \\\\
&= -\sum\_{n=1}^{N} m\_n c^2 \int\_a^b d\tau + \frac{1}{ic} \int \int \int \int\_{R^4} \sum\_{k=1}^{4} A\_k J\_k d\Omega \\\\
&+ \frac{i}{4} \sqrt{\frac{\epsilon\_0}{\mu\_0}} \int \int \int \int\_{R^4} \sum\_{i=1}^{4} \sum\_{j=1}^{4} F\_{ij}(x\_1, x\_2, x\_3, x\_4) F\_{ij}(x\_1, x\_2, x\_3, x\_4) d\Omega.
\end{aligned}
$$

这里，$d\Omega = dx\_1 dx\_2 dx\_3 dx\_4$ 为四维空间的体积元，${A\_k}$ 代表四维矢势，其分量为

$$
\begin{aligned}
A\_1(x\_1, x\_2, x\_3, x\_4) &= A\_x(x, y, z, t), \quad A\_2(x\_1, x\_2, x\_3, x\_4) = A\_y(x, y, z, t), \\\\
A\_3(x\_1, x\_2, x\_3, x\_4) &= A\_z(x, y, z, t), \quad A\_4(x\_1, x\_2, x\_3, x\_4) = \frac{i}{c} \Phi(x, y, z, t),
\end{aligned}
$$

而电磁场强度张量定义为

$$
F\_{ij}(x\_1, x\_2, x\_3, x\_4) = \frac{\partial A\_j(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} - \frac{\partial A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j}.
$$

需要说明一点的是，现在的四维电流密度

$$
\begin{aligned}
J\_1(x\_1, x\_2, x\_3, x\_4) &= j\_x(x, y, z, t), \quad J\_2(x\_1, x\_2, x\_3, x\_4) = j\_y(x, y, z, t), \\\\
J\_3(x\_1, x\_2, x\_3, x\_4) &= j\_z(x, y, z, t), \quad J\_4(x\_1, x\_2, x\_3, x\_4) = ic\rho(x, y, z, t)
\end{aligned}
$$

应该理解为是由 $N$ 个带电粒子引起的总电流密度和电荷密度。利用 $\delta$ 函数的定义，我们可以将之写作

$$
j\_x(x, y, z, t) = \sum\_{n=1}^{N} q\_n v\_{nx}(t) \delta(x - x\_n(t)) \delta(y - y\_n(t)) \delta(z - z\_n(t)),
$$

$$
j\_y(x, y, z, t) = \sum\_{n=1}^{N} q\_n v\_{ny}(t) \delta(x - x\_n(t)) \delta(y - y\_n(t)) \delta(z - z\_n(t)),
$$

$$
j\_z(x, y, z, t) = \sum\_{n=1}^{N} q\_n v\_{nz}(t) \delta(x - x\_n(t)) \delta(y - y\_n(t)) \delta(z - z\_n(t)),
$$

$$
\rho(x, y, z, t) = \sum\_{n=1}^{N} q\_n \delta(x - x\_n(t)) \delta(y - y\_n(t)) \delta(z - z\_n(t)).
$$

依赖于这些记号，我们可以重新将麦克斯韦方程组写作

$$
\frac{\partial F\_{ij}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_k} + \frac{\partial F\_{jk}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} + \frac{\partial F\_{ki}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j} = 0,
$$

以及

$$
\frac{1}{ic} J\_k(x\_1, x\_2, x\_3, x\_4) = i \sqrt{\frac{\epsilon\_0}{\mu\_0}} \sum\_{i=1}^{4} \frac{\partial F\_{ik}(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i}.
$$

顺便一提，我们在前面提到的洛伦兹规范条件

$$
\nabla \cdot \mathbf{A}(x, y, z, t) + \frac{1}{c^2} \frac{\partial \Phi(x, y, z, t)}{\partial t} = 0,
$$

现在也可被改写作

$$
\frac{\partial A\_1}{\partial x\_1} + \frac{\partial A\_2}{\partial x\_2} + \frac{\partial A\_3}{\partial x\_3} + \frac{\partial A\_4}{\partial x\_4} = 0.
$$

显然，在洛伦兹变换下，这一约束条件的形式是不变的，即我们有

$$
\sum\_{i=1}^{4} \frac{\partial A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} = \sum\_{i=1}^{4} \frac{\partial A'\_i(x'\_1, x'\_2, x'\_3, x'\_4)}{\partial x'\_i} = 0.
$$

## Part 6 正则量子化举例

电动力学的拉格朗日量形式的价值在于它提供了一座从经典物理到量子物理的桥梁。利用狄拉克的正则量子化方法，人们可以先寻找一个经典物理方程所对应的拉格朗日量，然后引出正则广义动量和哈密顿量，加上量子化条件后，即可得到该体系的薛定谔方程（Schrödinger equation），完成这一过渡。作为一个例子，让我们考虑一个带电粒子在外加电磁场中的运动。

我们已经知道，在外加电磁场中，一个带电粒子 $q$ 所满足的牛顿方程为

$$
\frac{d\mathbf{p}}{dt} = q \mathbf{v} \times \mathbf{B}(x\_1, x\_2, x\_3, x\_4) + q \mathbf{E}(x\_1, x\_2, x\_3, x\_4),
$$

我们也看到，若将给出的作用量

$$
S = \int\_a^b \left( -m\_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A}(x\_1, x\_2, x\_3, x\_4) \cdot \mathbf{v} - q \Phi(x\_1, x\_2, x\_3, x\_4) \right) dt
$$

对其中的广义坐标 $x\_1, x\_2, x\_3$ 和 $x\_4$ 做变分，并对之使用最小作用量原理，即可重新得到上面的运动方程。因此，一个带电粒子 $q$ 在外加电磁场中运动所满足的牛顿方程对应的拉格朗日量为

$$
L = -m\_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A}(x, y, z, t) \cdot \mathbf{v} - q \Phi(x, y, z, t),
$$

接下来，我们写出广义动量。根据定义，广义动量的 $x$ 分量为

$$
\begin{aligned}
p\_x &= \frac{\partial L}{\partial \dot{x}} = \frac{\partial L}{\partial v\_x} = \frac{\partial}{\partial v\_x} \left( -m\_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \mathbf{A} \cdot \mathbf{v} - q \Phi \right) \\\\
&= \frac{m\_0 v\_x}{\sqrt{1 - \frac{v^2}{c^2}}} + q A\_x(x, y, z, t).
\end{aligned}
$$

同理，它的 $y$ 分量和 $z$ 分量分别为

$$
p\_y = \frac{m\_0 v\_y}{\sqrt{1 - \frac{v^2}{c^2}}} + q A\_y(x, y, z, t),
$$

及

$$
p\_z = \frac{m\_0 v\_z}{\sqrt{1 - \frac{v^2}{c^2}}} + q A\_y(x, y, z, t).
$$

现在，我们可以写出这个体系的哈密顿量

$$
\begin{aligned}
H &= v\_x p\_x + v\_y p\_y + v\_z p\_z - L = \frac{m\_0 v\_x^2}{\sqrt{1 - \frac{v^2}{c^2}}} + \frac{m\_0 v\_y^2}{\sqrt{1 - \frac{v^2}{c^2}}} + \frac{m\_0 v\_z^2}{\sqrt{1 - \frac{v^2}{c^2}}} \\\\
&+ q \mathbf{A}(x, y, z, t) \cdot \mathbf{v} - q \mathbf{A}(x, y, z, t) \cdot \mathbf{v} + q \Phi(x, y, z, t) \\\\
&= \frac{m\_0 v^2}{\sqrt{1 - \frac{v^2}{c^2}}} + m\_0 c^2 \sqrt{1 - \frac{v^2}{c^2}} + q \Phi(x, y, z, t) = \frac{m\_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}} + q \Phi(x, y, z, t) \\\\
&= \sqrt{(\mathbf{p} - q \mathbf{A}(x, y, z, t))^2 c^2 + m\_0^2 c^4} + q \Phi(x, y, z, t).
\end{aligned}
$$

若我们仅仅考虑 $v \ll c$（或 $p \ll m\_0 c$）的情况，则上式可被进一步简化为

$$
H \cong m\_0 c^2 + \frac{1}{2m\_0} (\mathbf{p} - q \mathbf{A}(x, y, z, t))^2 + q \Phi(x, y, z, t).
$$

在略去常数项 $m\_0 c^2$ 后，我们有

$$
H = \frac{1}{2m\_0} (\mathbf{p} - q \mathbf{A}(x, y, z, t))^2 + q \Phi(x, y, z, t).
$$

现在，若我们将坐标 $x, y, z$ 和动量 $p\_x, p\_y, p\_z$ 视作算符，并对它们加上量子化对易关系

$$
\[\hat{x}\_i, \hat{p}*j] = i\hbar \delta*{ij} \hat{I},
$$

则哈密顿量 $H$ 亦可改写成算符

$$
\begin{aligned}
\hat{H} &= \frac{1}{2m\_0} (\hat{p}\_x - q \hat{A}\_x(\hat{x}, \hat{y}, \hat{z}, t))^2 + \frac{1}{2m\_0} (\hat{p}\_y - q \hat{A}\_y(\hat{x}, \hat{y}, \hat{z}, t))^2 \\\\
&+ \frac{1}{2m\_0} (\hat{p}\_z - q \hat{A}\_z(\hat{x}, \hat{y}, \hat{z}, t))^2 + q \hat{\Phi}(\hat{x}, \hat{y}, \hat{z}, t) \\\\
&= \frac{1}{2m\_0} \left( \frac{\hbar}{i} \frac{\partial}{\partial x} - q \hat{A}\_x(\hat{x}, \hat{y}, \hat{z}, t) \right)^2 + \frac{1}{2m\_0} \left( \frac{\hbar}{i} \frac{\partial}{\partial y} - q \hat{A}\_y(\hat{x}, \hat{y}, \hat{z}, t) \right)^2 \\\\
&+ \frac{1}{2m\_0} \left( \frac{\hbar}{i} \frac{\partial}{\partial z} - q \hat{A}\_z(\hat{x}, \hat{y}, \hat{z}, t) \right)^2 + q \hat{\Phi}(\hat{x}, \hat{y}, \hat{z}, t).
\end{aligned}
$$

这里，我们利用了动量算符在坐标表象中的表示

$$
\hat{p}\_x = \frac{\hbar}{i} \frac{\partial}{\partial x}, \quad \hat{p}\_y = \frac{\hbar}{i} \frac{\partial}{\partial y}, \quad \hat{p}\_z = \frac{\hbar}{i} \frac{\partial}{\partial z}.
$$

最后，我们将哈密顿量算符代入薛定谔方程

$$
i\hbar \frac{\partial \psi(x, y, z, t)}{\partial t} = \hat{H} \psi(x, y, z, t),
$$

即完成了该体系的正则量子化过程。这里，$\psi(x, y, z, t)$ 为描述带电粒子在外加电磁场中运动的波函数。
