---
url: /electrodynamics/electrodynamics-8/index.md
---
## Part 3 惯性系间矢量变换

接下来，我们考虑矢势 $\mathbf{A}(x\_1, x\_2, x\_3, x\_4)$ 和标势 $\Phi(x\_1, x\_2, x\_3, x\_4)$ 在两个惯性参照系之间的变换关系。由于 $A\_x(x\_1, x\_2, x\_3, x\_4)$, $A\_y(x\_1, x\_2, x\_3, x\_4)$, $A\_z(x\_1, x\_2, x\_3, x\_4)$ 和 $i \Phi(x\_1, x\_2, x\_3, x\_4)/c$ 是一个四维协变矢量（四维势）的分量，故它们在两个不同惯性参照系之间的变换关系应与四维坐标 $x\_1, x\_2, x\_3$ 和 $x\_4$ 满足的变换关系，即洛伦兹变换

$$
\begin{aligned}
x'\_1 &= x\_1 \cos \theta + x\_4 \sin \theta, & x'\_4 &= -x\_1 \sin \theta + x\_4 \cos \theta, \\\\
x'\_2 &= x\_2, & x'\_3 &= x\_3
\end{aligned}
$$

相同。这里，$\tan \theta = -V / i c$。因此，我们有

$$
\begin{aligned}
A'\_x(x'\_1, x'\_2, x'\_3, x'\_4) &= A'\_1(x'\_1, x'\_2, x'\_3, x'\_4) = A\_1(x\_1, x\_2, x\_3, x\_4) \cos \theta + A\_4(x\_1, x\_2, x\_3, x\_4) \sin \theta \\\\
&= \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}} A\_x(x\_1, x\_2, x\_3, x\_4) + \frac{-V}{\sqrt{1 - \frac{V^2}{c^2}}} \left( \frac{i}{c} \Phi(x\_1, x\_2, x\_3, x\_4) \right) \\\\
&= \frac{A\_x(x\_1, x\_2, x\_3, x\_4) - \frac{V}{c} \Phi(x\_1, x\_2, x\_3, x\_4)}{\sqrt{1 - \frac{V^2}{c^2}}},
\end{aligned}
$$

$$
\begin{aligned}
A'\_y(x'\_1, x'\_2, x'\_3, x'\_4) &= A'\_2(x'\_1, x'\_2, x'\_3, x'\_4) = A\_2(x\_1, x\_2, x\_3, x\_4) = A\_y(x\_1, x\_2, x\_3, x\_4), \\\\
A'\_z(x'\_1, x'\_2, x'\_3, x'\_4) &= A'\_3(x'\_1, x'\_2, x'\_3, x'\_4) = A\_3(x\_1, x\_2, x\_3, x\_4) = A\_z(x\_1, x\_2, x\_3, x\_4),
\end{aligned}
$$

以及

$$
\begin{aligned}
\frac{i}{c} \Phi'(x'\_1, x'\_2, x'\_3, x'\_4) &= A'\_4(x'\_1, x'\_2, x'\_3, x'\_4) = -A\_1(x\_1, x\_2, x\_3, x\_4) \sin \theta + A\_4(x\_1, x\_2, x\_3, x\_4) \cos \theta \\\\
&= -\frac{-V}{\sqrt{1 - \frac{V^2}{c^2}}} A\_x(x\_1, x\_2, x\_3, x\_4) + \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}} \left( \frac{i}{c} \Phi(x\_1, x\_2, x\_3, x\_4) \right),
\end{aligned}
$$

或是

$$
\Phi'(x'\_1, x'\_2, x'\_3, x'\_4) = \frac{\Phi(x\_1, x\_2, x\_3, x\_4) - V A\_x(x\_1, x\_2, x\_3, x\_4)}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

另一方面，根据定义，电磁场强度矢量由

$$
F\_{ij}(x\_1, x\_2, x\_3, x\_4) = \frac{\partial A\_j(x\_1, x\_2, x\_3, x\_4)}{\partial x\_i} - \frac{\partial A\_i(x\_1, x\_2, x\_3, x\_4)}{\partial x\_j}
$$

给出。具体一点讲，我们有

$$
\mathcal{F} = \left( \begin{array}{cccc}
F\_{11} & F\_{12} & F\_{13} & F\_{14} \\
F\_{21} & F\_{22} & F\_{23} & F\_{24} \\
F\_{31} & F\_{32} & F\_{33} & F\_{34} \\
F\_{41} & F\_{42} & F\_{43} & F\_{44}
\end{array} \right) = \left( \begin{array}{cccc}
0 & B\_z & -B\_y & -\dfrac{i E\_x}{c} \\\\
-B\_z & 0 & B\_x & -\dfrac{i E\_y}{c} \\\\
B\_y & -B\_x & 0 & -\dfrac{i E\_z}{c} \\\\
\dfrac{i E\_x}{c} & \dfrac{i E\_y}{c} & \dfrac{i E\_z}{c} & 0
\end{array} \right).
$$

因此，为了决定电磁场强度矢量在两个参照系之间的变换，我们只需考虑矩阵元 $F\_{ij}$ 的变换关系即可。

首先，我们有

$$
F'\_{23} = \frac{\partial A'\_3}{\partial x'\_2} - \frac{\partial A'\_2}{\partial x'*3} = \frac{\partial A\_3}{\partial x\_2} - \frac{\partial A\_2}{\partial x\_3} = F*{23}.
$$

这意味着

$$
B'\_x(x'\_1, x'\_2, x'\_3, x'\_4) = B\_x(x\_1, x\_2, x\_3, x\_4).
$$

又因为

$$
\begin{aligned}
F'\_{14} &= \frac{\partial A'\_4}{\partial x'\_1} - \frac{\partial A'\_1}{\partial x'\_4} = \left( \frac{\partial A'\_4}{\partial x\_1} \frac{\partial x\_1}{\partial x'\_1} + \frac{\partial A'\_4}{\partial x\_4} \frac{\partial x\_4}{\partial x'\_1} \right) - \left( \frac{\partial A'\_1}{\partial x\_1} \frac{\partial x\_1}{\partial x'\_4} + \frac{\partial A'\_1}{\partial x\_4} \frac{\partial x\_4}{\partial x'\_4} \right) \\\\
&= \left( \frac{\partial A'\_4}{\partial x\_1} \cos \theta + \frac{\partial A'\_4}{\partial x\_4} \sin \theta \right) - \left( \frac{\partial A'\_1}{\partial x\_1} (-\sin \theta) + \frac{\partial A'*1}{\partial x\_4} \cos \theta \right) \\\\
&= \left( \left\[ \frac{\partial}{\partial x\_1} (-\sin \theta A\_1 + \cos \theta A\_4) \right] \cos \theta + \left\[ \frac{\partial}{\partial x\_4} (-\sin \theta A\_1 + \cos \theta A\_4) \right] \sin \theta \right) \\\\
&- \left( \left\[ \frac{\partial}{\partial x\_1} (\cos \theta A\_1 + \sin \theta A\_4) \right] (-\sin \theta) + \left\[ \frac{\partial}{\partial x\_4} (\cos \theta A\_1 + \sin \theta A\_4) \right] \cos \theta \right) \\\\
&= \left( -\sin \theta \cos \theta \frac{\partial A\_1}{\partial x\_1} + \cos^2 \theta \frac{\partial A\_4}{\partial x\_1} - \sin^2 \theta \frac{\partial A\_1}{\partial x\_4} + \cos \theta \sin \theta \frac{\partial A\_4}{\partial x\_4} \right) \\\\
&- \left( -\cos \theta \sin \theta \frac{\partial A\_1}{\partial x\_1} - \sin^2 \theta \frac{\partial A\_4}{\partial x\_1} + \cos^2 \theta \frac{\partial A\_1}{\partial x\_4} + \cos \theta \sin \theta \frac{\partial A\_4}{\partial x\_4} \right) \\\\
&= \frac{\partial A\_4}{\partial x\_1} - \frac{\partial A\_1}{\partial x\_4} = F*{14},
\end{aligned}
$$

即

$$
E'\_x(x'\_1, x'\_2, x'\_3, x'\_4) = E\_x(x\_1, x\_2, x\_3, x\_4).
$$

接下来，我们研究 $F\_{12}$ 的变换规律。我们有

$$
\begin{aligned}
F'\_{12}(x'\_1, x'\_2, x'\_3, x'\_4) &= \frac{\partial A'\_2}{\partial x'\_1} - \frac{\partial A'\_1}{\partial x'\_2} = \frac{\partial A\_2}{\partial x'\_1} - \frac{\partial A'\_1}{\partial x\_2} \\\\
&= \left( \frac{\partial A\_2}{\partial x\_1} \frac{\partial x\_1}{\partial x'*1} + \frac{\partial A\_2}{\partial x\_4} \frac{\partial x\_4}{\partial x'*1} \right) - \frac{\partial}{\partial x\_2} (A\_1 \cos \theta + A\_4 \sin \theta) \\\\
&= \frac{\partial A\_2}{\partial x\_1} \cos \theta + \frac{\partial A\_2}{\partial x\_4} \sin \theta - \frac{\partial A\_1}{\partial x\_2} \cos \theta - \frac{\partial A\_4}{\partial x\_2} \sin \theta \\\\
&= \left( \frac{\partial A\_2}{\partial x\_1} - \frac{\partial A\_1}{\partial x\_2} \right) \cos \theta + \left( \frac{\partial A\_2}{\partial x\_4} - \frac{\partial A\_4}{\partial x\_2} \right) \sin \theta \\\\
&= \cos \theta F*{12}(x\_1, x\_2, x\_3, x\_4) + \sin \theta F*{42}(x\_1, x\_2, x\_3, x\_4).
\end{aligned}
$$

也就是说，在两个惯性参照系之间的变换下，$F\_{12}$ 的脚标中只有 $i = 1$ 是按照洛伦兹变换改变的。同理，我们可以推得

$$
F'\_{13}(x'\_1, x'\_2, x'*3, x'*4) = \cos \theta F*{13}(x\_1, x\_2, x\_3, x\_4) + \sin \theta F*{43}(x\_1, x\_2, x\_3, x\_4),
$$

$$
F'\_{42}(x'\_1, x'\_2, x'*3, x'*4) = -\sin \theta F*{12}(x\_1, x\_2, x\_3, x\_4) + \cos \theta F*{42}(x\_1, x\_2, x\_3, x\_4),
$$

$$
F'\_{43}(x'\_1, x'\_2, x'*3, x'*4) = -\sin \theta F*{13}(x\_1, x\_2, x\_3, x\_4) + \cos \theta F*{43}(x\_1, x\_2, x\_3, x\_4).
$$

现将

$$
\begin{aligned}
F\_{12} &= B\_z, & F\_{42} &= \frac{i E\_y}{c}, \\\\
\cos \theta &= \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}}, & \sin \theta &= \frac{\left( \frac{V}{i c} \right)}{\sqrt{1 - \frac{V^2}{c^2}}},
\end{aligned}
$$

代入 $F'\_{12}(x'\_1, x'\_2, x'\_3, x'\_4)$ 后，我们有

$$
B'\_z = \frac{B\_z}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{i E\_y}{c} \frac{\left( -\frac{V}{i c} \right)}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{B\_z - \frac{V}{c^2} E\_y}{\sqrt{1 - \frac{V^2}{c^2}}},
$$

或是

$$
B'\_z(x'\_1, x'\_2, x'\_3, x'\_4) = \frac{B\_z(x\_1, x\_2, x\_3, x\_4) - \frac{V}{c^2} E\_y(x\_1, x\_2, x\_3, x\_4)}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

同理，将 $F\_{13} = -B\_y$, $F\_{43} = \frac{i E\_z}{c}$ 以及 $\cos \theta$ 和 $\sin \theta$ 的表达式代入
$$
F'\_{13}(x'\_1, x'\_2, x'*3, x'*4) = \cos \theta F*{13}(x\_1, x\_2, x\_3, x\_4) + \sin \theta F*{43}(x\_1, x\_2, x\_3, x\_4),
$$
后有

$$
-B'\_y = \frac{(-B\_y)}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{i E\_z}{c} \frac{\left( -\frac{V}{i c} \right)}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{-B\_y - \frac{V}{c^2} E\_z}{\sqrt{1 - \frac{V^2}{c^2}}},
$$

或是

$$
B'\_y(x'\_1, x'\_2, x'\_3, x'\_4) = \frac{B\_y(x\_1, x\_2, x\_3, x\_4) + \frac{V}{c^2} E\_z(x\_1, x\_2, x\_3, x\_4)}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

将 $F\_{42} = \frac{i E\_y}{c}$, $F\_{12} = B\_z$ 以及 $\cos \theta$ 和 $\sin \theta$ 的表达式代入
$$
F'\_{42}(x'\_1, x'\_2, x'*3, x'*4) = -\sin \theta F*{12}(x\_1, x\_2, x\_3, x\_4) + \cos \theta F*{42}(x\_1, x\_2, x\_3, x\_4),
$$
后有

$$
\frac{i E'\_y}{c} = \frac{B\_z \left( \frac{V}{i c} \right)}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{\frac{i E\_y}{c}}{\sqrt{1 - \frac{V^2}{c^2}}} = \left( \frac{i}{c} \right) \frac{-V B\_z + E\_y}{\sqrt{1 - \frac{V^2}{c^2}}},
$$

或是

$$
E'\_y(x'\_1, x'\_2, x'\_3, x'\_4) = \frac{E\_y(x\_1, x\_2, x\_3, x\_4) - V B\_z(x\_1, x\_2, x\_3, x\_4)}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

最后，将 $F\_{13} = \frac{i E\_z}{c}$, $F\_{13} = -B\_y$ 以及 $\cos \theta$ 和 $\sin \theta$ 的表达式代入
$$
F'\_{43}(x'\_1, x'\_2, x'*3, x'*4) = -\sin \theta F*{13}(x\_1, x\_2, x\_3, x\_4) + \cos \theta F*{43}(x\_1, x\_2, x\_3, x\_4).
$$
后有

$$
\frac{i E'\_z}{c} = \frac{-B\_y \left( \frac{V}{i c} \right)}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{\frac{i E\_z}{c}}{\sqrt{1 - \frac{V^2}{c^2}}} = \left( \frac{i}{c} \right) \frac{V B\_y + E\_z}{\sqrt{1 - \frac{V^2}{c^2}}},
$$

或是

$$
E'\_z(x'\_1, x'\_2, x'\_3, x'\_4) = \frac{E\_z(x\_1, x\_2, x\_3, x\_4) + V B\_y(x\_1, x\_2, x\_3, x\_4)}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

通过比较可以很容易地验证，电磁场强度矢量分量所满足的这些变换关系前面给出的结果完全一样。

当 $V/c \sim 0$ 时，我们可以令 $\frac{1}{\sqrt{1 - \frac{V^2}{c^2}}} \sim 1$。此时，上述变换式可以近似写作

$$
\begin{aligned}
E'\_x &= E\_x, & E'\_y &= E\_y - V B\_z, & E'\_z &= E\_z + V B\_y, \\
B'\_x &= B\_x, & B'\_y &= B\_y + \frac{V}{c^2} E\_z, & B'\_z &= B\_z - \frac{V}{c^2} E\_y,
\end{aligned}
$$

或者等价地

$$
\begin{aligned}
E\_x &= E'\_x, & E\_y &= E'\_y + V B'\_z, & E\_z &= E'\_z - V B'\_y, \\\\
B\_x &= B'\_x, & B\_y &= B'\_y - \frac{V}{c^2} E'\_z, & B\_z &= B'\_z + \frac{V}{c^2} E'\_y.
\end{aligned}
$$

我们可以将这些变换式更为紧凑地写作

$$
\mathbf{E}(x\_1, x\_2, x\_3, x\_4) = \mathbf{E}'(x'\_1, x'\_2, x'\_3, x'\_4) - \mathbf{V} \times \mathbf{B}'(x'\_1, x'\_2, x'\_3, x'\_4),
$$

以及

$$
\mathbf{B}(x\_1, x\_2, x\_3, x\_4) = \mathbf{B}'(x'\_1, x'\_2, x'\_3, x'\_4) + \frac{\mathbf{V}}{c^2} \times \mathbf{E}'(x'\_1, x'\_2, x'\_3, x'\_4).
$$

因此，若在 $S'$ 系中，$\mathbf{B}' = 0$，则在实验室系中我们有

$$
\mathbf{E}(x\_1, x\_2, x\_3, x\_4) = \mathbf{E}'(x'\_1, x'\_2, x'\_3, x'\_4), \quad \mathbf{B}(x\_1, x\_2, x\_3, x\_4) = \frac{\mathbf{V}}{c^2} \times \mathbf{E}'(x'\_1, x'\_2, x'\_3, x'\_4),
$$

即

$$
\mathbf{B}(x\_1, x\_2, x\_3, x\_4) = \frac{\mathbf{V}}{c^2} \times \mathbf{E}(x\_1, x\_2, x\_3, x\_4).
$$

同理，若在 $S'$ 系中 $\mathbf{E}' = 0$ 成立，则在实验室中我们有

$$
\mathbf{E}(x\_1, x\_2, x\_3, x\_4) = -\mathbf{V} \times \mathbf{B}'(x'\_1, x'\_2, x'\_3, x'\_4), \quad \mathbf{B}(x\_1, x\_2, x\_3, x\_4) = \mathbf{B}'(x'\_1, x'\_2, x'\_3, x'\_4),
$$

或是

$$
\mathbf{E}(x\_1, x\_2, x\_3, x\_4) = -\mathbf{V} \times \mathbf{B}(x\_1, x\_2, x\_3, x\_4).
$$

## Part 4 Maxwell 方程组推导

接下来的一个问题是，我们可否利用矩阵 $\mathcal{F}$ 的矩阵元写出麦克斯韦方程组？答案是肯定的。

首先，我们注意到矩阵 $\mathcal{F}(x\_1, x\_2, x\_3, x\_4)$ 的矩阵元满足如下的恒等式

$$
\frac{\partial F\_{ij}}{\partial x\_k} + \frac{\partial F\_{jk}}{\partial x\_i} + \frac{\partial F\_{ki}}{\partial x\_j} \equiv 0.
$$

实际上，按照矩阵元的定义，我们有

$$
\begin{aligned}
&\frac{\partial F\_{ij}}{\partial x\_k} + \frac{\partial F\_{jk}}{\partial x\_i} + \frac{\partial F\_{ki}}{\partial x\_j} \\\\
&= \frac{\partial}{\partial x\_k} \left( \frac{\partial A\_j}{\partial x\_i} - \frac{\partial A\_i}{\partial x\_j} \right) + \frac{\partial}{\partial x\_i} \left( \frac{\partial A\_k}{\partial x\_j} - \frac{\partial A\_j}{\partial x\_k} \right) + \frac{\partial}{\partial x\_j} \left( \frac{\partial A\_i}{\partial x\_k} - \frac{\partial A\_k}{\partial x\_i} \right) \\\\
&= \frac{\partial^2 A\_j}{\partial x\_k \partial x\_i} - \frac{\partial^2 A\_i}{\partial x\_k \partial x\_j} + \frac{\partial^2 A\_k}{\partial x\_i \partial x\_j} - \frac{\partial^2 A\_j}{\partial x\_i \partial x\_k} + \frac{\partial^2 A\_i}{\partial x\_j \partial x\_k} - \frac{\partial^2 A\_k}{\partial x\_j \partial x\_i} = 0.
\end{aligned}
$$
现在在恒等式
$$
\frac{\partial F\_{ij}}{\partial x\_k} + \frac{\partial F\_{jk}}{\partial x\_i} + \frac{\partial F\_{ki}}{\partial x\_j} \equiv 0.
$$
中取 $i = 1, j = 2, k = 3$，则我们有

$$
\frac{\partial F\_{12}}{\partial x\_3} + \frac{\partial F\_{23}}{\partial x\_1} + \frac{\partial F\_{31}}{\partial x\_2} = \frac{\partial B\_z}{\partial z} + \frac{\partial B\_x}{\partial x} + \frac{\partial B\_y}{\partial y} = 0,
$$

即麦克斯韦方程之一的

$$
\nabla \cdot \mathbf{B}(x, y, z, t) = 0.
$$

又若我们恒等式
$$
\frac{\partial F\_{ij}}{\partial x\_k} + \frac{\partial F\_{jk}}{\partial x\_i} + \frac{\partial F\_{ki}}{\partial x\_j} \equiv 0.
$$
取 $i = 1, j = 2, k = 4$，则得到

$$
\frac{\partial F\_{12}}{\partial x\_4} + \frac{\partial F\_{24}}{\partial x\_1} + \frac{\partial F\_{41}}{\partial x\_2} = \frac{\partial B\_z}{\partial (i c t)} + \frac{\partial \left( -\frac{i}{c} E\_y \right)}{\partial x} + \frac{\partial \left( \frac{i}{c} E\_x \right)}{\partial y} = 0,
$$

或是

$$
\frac{\partial E\_x}{\partial y} - \frac{\partial E\_y}{\partial x} = -(\nabla \times \mathbf{E})\_z = \frac{\partial B\_z}{\partial t}.
$$

这是另外一个麦克斯韦方程

$$
\nabla \times \mathbf{E}(x, y, z, t) = -\frac{\partial \mathbf{B}(x, y, z, t)}{\partial t}
$$

的 $z$ 分量。类似地，若我们在恒等式中取 $i = 1, j = 3, k = 4$，则得到

$$
-(\nabla \times \mathbf{E})\_y = \frac{\partial B\_y}{\partial t},
$$

而若在恒等式中取 $i = 2, j = 3, k = 4$，就会得到

$$
-(\nabla \times \mathbf{E})\_x = \frac{\partial B\_x}{\partial t}.
$$

### · 四维张量和对偶张量

为了写出另外两个麦克斯韦方程，我们需要引进电磁场自身的作用量 $S\_f$。为此，先让我们研究一下矩阵 $\mathcal{F}(x\_1, x\_2, x\_3, x\_4)$ 的矩阵元在洛伦兹变换下的改变。一般的洛伦兹变换可以写作

$$
x\_i = \sum\_{k=1}^{4} \alpha\_{ik} x'\_k,
$$

或者是等价地

$$
x'*i = \sum*{k=1}^{4} \left( \alpha^{-1} \right)\_{ik} x\_k.
$$

这里，$\alpha^{-1}$ 代表洛伦兹变换矩阵 $\alpha$ 的逆矩阵。由于我们要求

$$
\begin{aligned}
\&x\_1^2 + x\_2^2 + x\_3^2 + x\_4^2 = \sum\_{i=1}^{4} x\_i x\_i = \sum\_{i=1}^{4} \left( \sum\_{j=1}^{4} \alpha\_{ij} x'*j \right) \left( \sum*{k=1}^{4} \alpha\_{ik} x'*k \right) \\\\
&= \sum*{j=1}^{4} \sum\_{k=1}^{4} \left( \sum\_{i=1}^{4} \alpha\_{ij} \alpha\_{ik} \right) x'\_j x'*k = \sum*{j=1}^{4} x'^2\_j + x'^2\_2 + x'^2\_3 + x'^2\_4
\end{aligned}
$$

成立，故应有

$$
\sum\_{i=1}^{4} \alpha\_{ij} \alpha\_{ik} = \delta\_{jk},
$$

即洛伦兹变换矩阵的任意两列彼此是正交的，而同一列则是归一的。这样的矩阵被称为正交矩阵。利用矩阵转置的概念，我们又可将上式重写为

$$
\sum\_{i=1}^{4} \alpha\_{ij} \alpha\_{ik} = \sum\_{i=1}^{4} \left( \alpha^T \right)*{ji} \alpha*{ik} = \delta\_{jk}.
$$

因此，一个正交矩阵的转置就是它的逆矩阵，记作

$$
\alpha^T = \alpha^{-1}.
$$

值得强调一点的是，在一般性洛伦兹变换中
$$
x\_i = \sum\_{k=1}^{4} \alpha\_{ik} x'\_k,
$$
我们已经将空间旋转变换，空间反射变化变换

$$
\begin{aligned}
x = x\_1 &= -x'\_1 = -x', & y = x\_2 &= -x'\_2 = -y', \\\\
z = x\_3 &= -x'\_3 = -z', & i c t = x\_4 &= x'\_4 = i c t',
\end{aligned}
$$

以及时间反演变换

$$
\begin{aligned}
x = x\_1 &= x'\_1 = x', & y = x\_2 &= x'\_2 = y', \\\\
z = x\_3 &= x'\_3 = z', & i c t = x\_4 &= -x'\_4 = -i c t'
\end{aligned}
$$

都包括进来了。这些变换的全体构成的集合称为洛伦兹群 (Lorentz group)。又由于任何一个洛伦兹变换所对应的矩阵 $A$ 都是正交的，即

$$
\alpha \alpha^T = I
$$

成立，故将此式的两边取行列式后我们有

$$
\det(\alpha \alpha^T) = (\det \alpha)(\det \alpha^T) = (\det \alpha)^2 = \det I = 1,
$$

即

$$
\det \alpha = 1.
$$

当一个洛伦兹变换的行列式 $\det \alpha = 1$，我们称它为真洛伦兹变换 (proper Lorentz transformation)，否则为赝洛伦兹变换 (improper Lorentz transformation)。以空间反射变换为例。它的变换矩阵为

$$
\alpha = \left( \begin{array}{cccc}
-1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & 1
\end{array} \right).
$$

显然，它的行列式为 $-1$，即空间反射变换是一个赝洛伦兹变换。同理可知，时间反演变换也是一个赝洛伦兹变换。

现在，我们可以对于四维矢量的定义做一推广了。若一个量 $p^{(4)}$ 有四个分量 $p^{(4)} = (p^{(4)}\_1, p^{(4)}\_2, p^{(4)}\_3, p^{(4)}\_4)$，且它们在两个参照系之间的变换满足与坐标 $(x\_1, x\_2, x\_3, x\_4)$ 相同的洛伦兹变换，即

$$
p^{(4)}*i = \sum*{k=1}^{4} \alpha\_{ik} p'^{(4)}*k = \alpha*{i1} p'^{(4)}*1 + \alpha*{i2} p'^{(4)}*2 + \alpha*{i3} p'^{(4)}*3 + \alpha*{i4} p'^{(4)}\_4,
$$

则我们称它为一个四维矢量。显然，一个四维矢量的分量满足恒等式

$$
\begin{aligned}
&\left( p^{(4)}*1 \right)^2 + \left( p^{(4)}*2 \right)^2 + \left( p^{(4)}*3 \right)^2 + \left( p^{(4)}*4 \right)^2 = \sum*{i=1}^{4} \left( p^{(4)}*i \right)^2 \\\\
&= \sum*{k\_1=1}^{4} \left( \sum*{k\_1}^{4} \alpha*{ik\_1} p'^{(4)}*{k\_1} \right) \left( \sum\_{k\_2=1}^{4} \alpha\_{ik\_2} p'^{(4)}*{k\_2} \right) = \sum*{k\_1}^{4} \sum\_{k\_2}^{4} \left( \sum\_{i=1}^{4} \alpha\_{ik\_1} \alpha\_{ik\_2} \right) p'^{(4)}*{k\_1} p'^{(4)}*{k\_2} \\\\
&= \sum\_{k\_1}^{4} \sum\_{k\_2}^{4} \delta\_{k\_1 k\_2} p'^{(4)}*{k\_1} p'^{(4)}*{k\_2} = \sum\_{k\_1}^{4} \left( p'^{(4)}\_{k\_1} \right)^2 = \left( p'^{(4)}\_1 \right)^2 + \left( p'^{(4)}\_2 \right)^2 + \left( p'^{(4)}\_3 \right)^2 + \left( p'^{(4)}\_4 \right)^2
\end{aligned}
$$

即一个四维矢量的“长度”在洛伦兹变换下是不变的。同理可证，任意两个四维矢量的“点乘”在洛伦兹变换下也是不变的。以四维坐标矢量和一个四维矢量 $(p^{(4)}\_1, p^{(4)}\_2, p^{(4)}\_3, p^{(4)}\_4)$ 为例，我们有

$$
\begin{aligned}
\&x\_1 p^{(4)}*1 + x\_2 p^{(4)}*2 + x\_3 p^{(4)}*3 + x\_4 p^{(4)}*4 = \sum*{i=1}^{4} x\_i p^{(4)}*i = \sum*{i=1}^{4} \left( \sum*{k\_1=1}^{4} \alpha*{ik\_1} x'*{k\_1} \right) \left( \sum\_{k\_2=1}^{4} \alpha\_{ik\_2} p'^{(4)}*{k\_2} \right) \\\\
&= \sum*{k\_1=1}^{4} \sum\_{k\_2=1}^{4} \left( \sum\_{i=1}^{4} \alpha\_{ik\_1} \alpha\_{ik\_2} \right) x'*{k\_1} p'^{(4)}*{k\_2} = \sum\_{k\_1=1}^{4} \sum\_{k\_2=1}^{4} \delta\_{k\_1 k\_2} x'*{k\_1} p'^{(4)}*{k\_2} = \sum\_{k\_1=1}^{4} x'*{k\_1} p'^{(4)}*{k\_1} \\\\
&= x'\_1 p'^{(4)}\_1 + x'\_2 p'^{(4)}\_2 + x'\_3 p'^{(4)}\_3 + x'\_4 p'^{(4)}\_4.
\end{aligned}
$$

的确，它们的点乘在洛伦兹变换下也是不变的。

接下来，我们要引进所谓四维二阶张量的定义。若一个 $4 \times 4$ 矩阵的矩阵元在一个洛伦兹变换下按照如下规律改变

$$
B\_{ij} = \sum\_{k=1}^{4} \sum\_{l=1}^{4} \alpha\_{ik} \alpha\_{jl} B'\_{kl},
$$

则这个矩阵被称为一个四维二阶张量。我们要证明，根据这一定义，
$$
\mathcal{F} = \left( \begin{array}{cccc}
F\_{11} & F\_{12} & F\_{13} & F\_{14} \\
F\_{21} & F\_{22} & F\_{23} & F\_{24} \\
F\_{31} & F\_{32} & F\_{33} & F\_{34} \\
F\_{41} & F\_{42} & F\_{43} & F\_{44}
\end{array} \right) = \left( \begin{array}{cccc}
0 & B\_z & -B\_y & -\dfrac{i E\_x}{c} \\\\
-B\_z & 0 & B\_x & -\dfrac{i E\_y}{c} \\\\
B\_y & -B\_x & 0 & -\dfrac{i E\_z}{c} \\\\
\dfrac{i E\_x}{c} & \dfrac{i E\_y}{c} & \dfrac{i E\_z}{c} & 0
\end{array} \right).
$$
给出的矩阵 $\mathcal{F}$ 即是一个四维二阶张量，称为电磁场强度张量。

事实上，我们有

$$
\begin{aligned}
F\_{ij} &= \frac{\partial A\_j}{\partial x\_i} - \frac{\partial A\_i}{\partial x\_j} = \frac{\partial}{\partial x\_i} \left( \sum\_{l=1}^{4} \alpha\_{jl} A'*l \right) - \frac{\partial}{\partial x\_j} \left( \sum*{k=1}^{4} \alpha\_{ik} A'*k \right) \\\\
&= \sum*{l=1}^{4} \alpha\_{jl} \frac{\partial A'*l}{\partial x\_i} - \sum*{k=1}^{4} \alpha\_{ik} \frac{\partial A'*k}{\partial x\_j} = \sum*{l=1}^{4} \alpha\_{jl} \left( \sum\_{k=1}^{4} \frac{\partial A'*l}{\partial x'*k} \frac{\partial x'*k}{\partial x\_i} \right) - \sum*{k=1}^{4} \alpha*{ik} \left( \sum*{l=1}^{4} \frac{\partial A'*k}{\partial x'*l} \frac{\partial x'*l}{\partial x\_j} \right) \\\\
&= \sum*{l=1}^{4} \alpha*{jl} \left( \sum*{k=1}^{4} \frac{\partial A'*l}{\partial x'*k} \left( \alpha^{-1} \right)*{ki} \right) - \sum*{k=1}^{4} \alpha\_{ik} \left( \sum\_{l=1}^{4} \frac{\partial A'\_k}{\partial x'*l} \left( \alpha^{-1} \right)*{lj} \right).
\end{aligned}
$$

利用 $\alpha$ 是一个正交矩阵这一事实，我们有可将该式进一步改写为

$$
\begin{aligned}
F\_{ij} &= \sum\_{l=1}^{4} \alpha\_{jl} \left( \sum\_{k=1}^{4} \frac{\partial A'*l}{\partial x'*k} \left( \alpha^T \right)*{ki} \right) - \sum*{k=1}^{4} \alpha\_{ik} \left( \sum\_{l=1}^{4} \frac{\partial A'*k}{\partial x'*l} \left( \alpha^T \right)*{lj} \right) \\\\
&= \sum*{k=1}^{4} \sum\_{l=1}^{4} \alpha\_{ik} \alpha\_{jl} \frac{\partial A'*l}{\partial x'*k} - \sum*{k=1}^{4} \sum*{l=1}^{4} \alpha\_{ik} \alpha\_{jl} \frac{\partial A'*k}{\partial x'*l} = \sum*{k=1}^{4} \sum*{l=1}^{4} \alpha\_{ik} \alpha\_{jl} \left( \frac{\partial A'*l}{\partial x'*k} - \frac{\partial A'*k}{\partial x'*l} \right) \\\\
&= \sum*{k=1}^{4} \sum*{l=1}^{4} \alpha*{ik} \alpha*{jl} F'\_{kl}.
\end{aligned}
$$

即 $\mathcal{F}$ 是一个四维二阶 (反对称) 张量。

根据四维二阶张量的定义，我们可以很容易地证明，任意两个四维二阶张量 $\mathcal{B}$ 和 $\mathcal{D}$ 的内积

$$
\mathcal{B} \cdot \mathcal{D} \equiv \sum\_{i=1}^{4} \sum\_{j=1}^{4} B\_{ij} D\_{ij}
$$

在一个洛伦兹变换下是不变的，即它是一个四维标量。事实上，我们有

$$
\begin{aligned}
&\mathcal{B} \cdot \mathcal{D} \\\\
&= \sum\_{i=1}^{4} \sum\_{j=1}^{4} B\_{ij} D\_{ij} = \sum\_{i=1}^{4} \sum\_{j=1}^{4} \left( \sum\_{k\_1=1}^{4} \sum\_{l\_1=1}^{4} \alpha\_{ik\_1} \alpha\_{jl\_1} B'*{k\_1 l\_1} \right) \left( \sum*{k\_2=1}^{4} \sum\_{l\_2=1}^{4} \alpha\_{ik\_2} \alpha\_{jl\_2} D'*{k\_2 l\_2} \right) \\\\
&= \sum*{k\_1=1}^{4} \sum\_{l\_1=1}^{4} \sum\_{k\_2=1}^{4} \sum\_{l\_2=1}^{4} \left( \sum\_{i=1}^{4} \alpha\_{ik\_1} \alpha\_{ik\_2} \right) \left( \sum\_{j=1}^{4} \alpha\_{jl\_1} \alpha\_{jl\_2} \right) B'*{k\_1 l\_1} D'*{k\_2 l\_2} \\\\
&= \sum\_{k\_1=1}^{4} \sum\_{l\_1=1}^{4} \sum\_{k\_2=1}^{4} \sum\_{l\_2=1}^{4} \delta\_{k\_1 k\_2} \delta\_{l\_1 l\_2} B'*{k\_1 l\_1} D'*{k\_2 l\_2} = \sum\_{k\_1=1}^{4} \sum\_{l\_1=1}^{4} B'*{k\_1 l\_1} D'*{k\_1 l\_1} = \mathcal{B}' \cdot \mathcal{D}'.
\end{aligned}
$$

特别是当 $\mathcal{B} = \mathcal{D}$ 时，我们有

$$
\mathcal{B} \cdot \mathcal{B} = \mathcal{B}' \cdot \mathcal{B}'.
$$

作为一个例子，我们看到

$$
\mathcal{F} \cdot \mathcal{F} = \sum\_{i=1}^{4} \sum\_{j=1}^{4} F\_{ij} F\_{ij} = 2 \left( B^2(x, y, z, t) - \frac{1}{c^2} E^2(x, y, z, t) \right)
$$

是一个洛伦兹变化下的不变量。

同理，我们可以定义四维三阶张量，四维四阶张量等等。以四维三阶张量为例。一组数（共 64 个）$(C\_{ijk})$ 构成一个四维三阶张量，若它们在一个洛伦兹变换下按照如下规律改变

$$
C\_{ijk} = \sum\_{l=1}^{4} \sum\_{m=1}^{4} \sum\_{n=1}^{4} \alpha\_{il} \alpha\_{jm} \alpha\_{kn} C'\_{lmn}.
$$

根据这一定义，我们亦可将一个四维标量称为四维零阶张量，一个四维矢量称为四维一阶张量。在这里，我们仅介绍一个与电动力学研究有关的四维四阶张量。关于四维高阶张量的知识会在今后学习广义相对论和引力理论时引入。

我们定义四维完全反对称四阶张量为

$$
\epsilon\_{ijkl} = \left{
\begin{array}{ll}
1, & \text{if } (i,j,k,l) \text{ is a even permutation of } (1,2,3,4) ; \\\\
-1, & \text{if } (i,j,k,l) \text{ is a odd permutation of } (1,2,3,4).
\end{array}
\right.
$$

按照定义，下脚标 $(i,j,k,l)$ 是两两不相等的。然而，我们可以很容易看到，若规定当一个分量的两个下脚标相等时该分量为零，则此定义可以很容易地被加以推广。因此，不为零的分量的个数恰好等于四个下脚标的全排列的个数，即 $4!$。也就是说，

$$
\sum\_{i=1}^{4} \sum\_{j=1}^{4} \sum\_{k=1}^{4} \sum\_{l=1}^{4} \epsilon^2\_{ijkl} = 4!
$$

成立。

我们接下来要证明，在一个真的洛伦兹变换下，如此定义的 ${\epsilon\_{ijkl}}$ 的确是按照一个四维四阶张量的方式变换的。为此，我们假设 ${\epsilon'\_{ijkl}}$ 是定义在 $S'$ 系中的四维完全反对称四阶张量，即其各个分量满足定义式。又取一真洛伦兹变换 $\alpha$，并考虑如下定义的量

$$
\epsilon\_{mnst} = \sum\_{i=1}^{4} \sum\_{j=1}^{4} \sum\_{k=1}^{4} \sum\_{l=1}^{4} \alpha\_{mi} \alpha\_{nj} \alpha\_{sk} \alpha\_{tl} ; \epsilon'\_{ijkl}.
$$

我们要证明

$$
\epsilon\_{mnst} = \epsilon\_{mnst},
$$

即 $S$ 系内的四维完全反对称四阶张量的分量。实际上，若注意到上面的变换式具有一个行列式的形式，并利用行列式的性质，我们可以直接写出

$$
\epsilon\_{mnst} = \sum\_{i=1}^{4} \sum\_{j=1}^{4} \sum\_{k=1}^{4} \sum\_{l=1}^{4} \alpha\_{mi} \alpha\_{nj} \alpha\_{sk} \alpha\_{tl} ; \epsilon'*{ijkl} = \det \alpha ; \epsilon*{mnst} = \epsilon\_{mnst}.
$$

这里，我们利用了一个真洛伦兹变换的行列式 $\det \alpha = 1$ 这一事实。

对于赝洛伦兹变换，情况变得有些复杂。以空间反射变换为例，我们有

$$
\alpha\_{1i} = -\delta\_{1i}, \quad \alpha\_{2j} = -\delta\_{2j}, \quad \alpha\_{3k} = -\delta\_{3k}, \quad \alpha\_{4l} = \delta\_{4l}
$$

成立。因此，一个四维四阶张量 $\mathcal{F}$ 的分量应该满足变换关系

$$
\begin{aligned}
F\_{1234} &= \sum\_{i=1}^{4} \sum\_{j=1}^{4} \sum\_{k=1}^{4} \sum\_{l=1}^{4} \alpha\_{1i} \alpha\_{2j} \alpha\_{3k} \alpha\_{4l} ; F'*{ijkl} \\\\
&= \sum*{i=1}^{4} \sum\_{j=1}^{4} \sum\_{k=1}^{4} \sum\_{l=1}^{4} (-1)^3 \delta\_{1i} \delta\_{2j} \delta\_{3k} \delta\_{4l} ; F'*{ijkl} = -F'*{1234}.
\end{aligned}
$$

但根据定义，我们显然有

$$
\epsilon\_{1234} = \epsilon'*{1234},
$$
并不变号，即 ${\epsilon*{ijkl}}$ 不按照赝洛伦兹变换进行变换。我们称这种量为赝四维四阶张量，以便与通常意义下的四维四阶张量 $\mathcal{F}$ 有所区别。

在定义了四维完全反对称四阶张量 ${\epsilon\_{ijkl}}$ 后，我们可以引进所谓对偶张量的定义了。任给一个四维二阶张量 $\mathcal{B} = (B\_{ij})$，我们定义与它对偶的四维二阶（赝）张量 $\tilde{\mathcal{B}}$ 的分量为

$$
\tilde{B}*{ij} = \frac{1}{2} \sum*{k=1}^{4} \sum\_{l=1}^{4} \epsilon\_{ijkl} B\_{kl}.
$$

> 同理，任给一个四维一阶张量（即四维矢量 $(B\_1, B\_2, B\_3, B\_4)$），我们定义与它对偶的四维三阶（赝）张量的分量为 $
> $$
> \tilde{B}*{ijk} = \epsilon*{ijk1} B\_1 + \epsilon\_{ijk2} B\_2 + \epsilon\_{ijk3} B\_3 + \epsilon\_{ijk4} B\_4
> $$

一个重要的事实是，在一个真的洛伦兹变换下，一个四维二阶张量 $\mathcal{B}$ 同与它对偶的四维二阶张量 $\tilde{\mathcal{B}}$ 的内积是不变的。实际上，我们有

$$
\begin{aligned}
\mathcal{B} \cdot \tilde{\mathcal{B}} &\equiv \sum\_{i=1}^{4} \sum\_{j=1}^{4} B\_{ij} \tilde{B}*{ij} = \sum*{i=1}^{4} \sum\_{j=1}^{4} B\_{ij} \left( \frac{1}{2} \sum\_{k=1}^{4} \sum\_{l=1}^{4} \epsilon\_{ijkl} B\_{kl} \right) = \frac{1}{2} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \sum\_{k=1}^{4} \sum\_{l=1}^{4} \epsilon\_{ijkl} B\_{ij} B\_{kl} \\\\
&= \frac{1}{2} \sum\_{i=1}^{4} \sum\_{j=1}^{4} \sum\_{k=1}^{4} \sum\_{l=1}^{4} \epsilon\_{ijkl} \left( \sum\_{m=1}^{4} \sum\_{n=1}^{4} \alpha\_{im} \alpha\_{jn} B'*{mn} \right) \left( \sum*{s=1}^{4} \sum\_{t=1}^{4} \alpha\_{ks} \alpha\_{lt} B'*{st} \right) \\\\
&= \frac{1}{2} \sum*{m=1}^{4} \sum\_{n=1}^{4} \sum\_{s=1}^{4} \sum\_{t=1}^{4} \left( \sum\_{i=1}^{4} \sum\_{j=1}^{4} \sum\_{k=1}^{4} \sum\_{l=1}^{4} \epsilon\_{ijkl} ; \alpha\_{im} \alpha\_{jn} \alpha\_{ks} \alpha\_{lt} \right) B'*{mn} B'*{st}.
\end{aligned}
$$

注意到，按照行列式的定义，上式中最后一步中的括号中的求和可以写作

$$
\begin{aligned}
&\sum\_{i=1}^{4} \sum\_{j=1}^{4} \sum\_{k=1}^{4} \sum\_{l=1}^{4} \epsilon\_{ijkl} ; \alpha\_{im} \alpha\_{jn} \alpha\_{ks} \alpha\_{lt} = \sum\_{i=1}^{4} \sum\_{j=1}^{4} \sum\_{k=1}^{4} \sum\_{l=1}^{4} \epsilon\_{ijkl} ; \alpha^{-1}*{mi} \alpha^{-1}*{nj} \alpha^{-1}*{sk} \alpha^{-1}*{tl} \\\\
&= \det \alpha^{-1} ; \epsilon'*{mnst} = \epsilon'*{mnst}.
\end{aligned}
$$

代入上式后，我们得到

$$
\mathcal{B} \cdot \tilde{\mathcal{B}} = \frac{1}{2} \sum\_{m=1}^{4} \sum\_{n=1}^{4} \sum\_{s=1}^{4} \sum\_{t=1}^{4} \epsilon'*{mnst} B'*{mn} B'\_{st} = \mathcal{B}' \cdot \tilde{\mathcal{B}}',
$$

即 $\mathcal{B} \cdot \tilde{\mathcal{B}}$ 在真洛伦兹变换下的确是不变的。但必须指出的是，$\mathcal{B} \cdot \tilde{\mathcal{B}}$ 不是一个四维标量，而是一个四维赝标量。这是由于，一个真正的四维标量在空间反射变换下应该是不变的。然而可以验证，$\mathcal{B} \cdot \tilde{\mathcal{B}}$ 在空间反射变换下会改变符号。

现在，我们将上述结果应用到电磁场张量 $\mathcal{F}$。通过直接了当的计算，我们得到

$$
\mathcal{F} \cdot \tilde{\mathcal{F}} = -\frac{8i}{c} \mathbf{B}(x, y, z, t) \cdot \mathbf{E}(x, y, z, t).
$$

因此，$\mathbf{B} \cdot \mathbf{E}$ 也是一个洛伦兹变换下的不变量（它实际上是一个赝标量，即它在空间反射下是变好的）。这一事实导致了一些有趣的结论：

> (i) 若一个体系中的电场强度 $\mathbf{E}$ 与磁感应强度 $\mathbf{B}$ 在一个惯性系中是彼此垂直的，则它们在任何一个惯性系中都是垂直的。
>
> (ii) 若在一个惯性系中，电场强度 $\mathbf{E}$ 与磁感应强度 $\mathbf{B}$ 的夹角是锐角（或钝角），则在其它惯性系中，这一夹角仍为锐角（或钝角）。
>
> (iii) 若在一个惯性系中，$\mathbf{E} \cdot \mathbf{B} = 0$，那么考虑到 $B^2 - \frac{1}{c^2} E^2$ 也是一个洛伦兹变换下的不变量，那么我们总可以找到另外一个惯性参照系，在其中 $\mathbf{E} = 0$ 或是 $\mathbf{B} = 0$ 成立（取决于 $B^2 - \frac{1}{c^2} E^2 > 0$ 还是 $B^2 - \frac{1}{c^2} E^2 < 0$ 成立）。
>
> (iv) 反之，若在某一惯性参照系中，$\mathbf{E} = 0$ 或 $\mathbf{B} = 0$ 成立，那么在其它惯性系中的电场强度矢量和磁感应强度矢量总是彼此垂直的。

最后，我们再看一下所谓四维体积元

$$
d\Omega \equiv dx\_1 dx\_2 dx\_3 dx\_4
$$

在洛伦兹变换下的变换规律。从多元微积分我们知道，如下的变换关系

$$
d\Omega = dx\_1 dx\_2 dx\_3 dx\_4 = \left| \frac{D(x\_1, x\_2, x\_3, x\_4)}{D(x'\_1, x'\_2, x'\_3, x'\_4)} \right| dx'\_1 dx'\_2 dx'\_3 dx'\_4 = |J| d\Omega'
$$

在两套坐标系间成立。这里，

$$
J = \frac{D(x\_1, x\_2, x\_3, x\_4)}{D(x'\_1, x'\_2, x'\_3, x'\_4)} =
\begin{vmatrix}
\dfrac{\partial x\_1}{\partial x'\_1} & \dfrac{\partial x\_1}{\partial x'\_2} & \dfrac{\partial x\_1}{\partial x'\_3} & \dfrac{\partial x\_1}{\partial x'\_4} \\\\
\dfrac{\partial x\_2}{\partial x'\_1} & \dfrac{\partial x\_2}{\partial x'\_2} & \dfrac{\partial x\_2}{\partial x'\_3} & \dfrac{\partial x\_2}{\partial x'\_4} \\\\
\dfrac{\partial x\_3}{\partial x'\_1} & \dfrac{\partial x\_3}{\partial x'\_2} & \dfrac{\partial x\_3}{\partial x'\_3} & \dfrac{\partial x\_3}{\partial x'\_4} \\\\
\dfrac{\partial x\_4}{\partial x'\_1} & \dfrac{\partial x\_4}{\partial x'\_2} & \dfrac{\partial x\_4}{\partial x'\_3} & \dfrac{\partial x\_4}{\partial x'\_4}
\end{vmatrix}
$$

被称为雅可比行列式（Jacobi determinant）。对于洛伦兹变换，不难验证此时的雅可比行列式恰为洛伦兹变换的矩阵 $\alpha$ 的行列式。因此，对于真洛伦兹变换它等于 $+1$，而对于赝洛伦兹变换它等于 $-1$。但在取了绝对值后，最后的结果都是 $+1$。因此，我们有

$$
d\Omega = |J| d\Omega' = |\det \alpha| ; d\Omega' = d\Omega'.
$$
