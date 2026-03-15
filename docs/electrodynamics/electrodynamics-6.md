---
title: Chapter 6 电磁场变换
permalink: /electrodynamics/electrodynamics-6/
createTime: 2026/03/14 22:19:58
---

## Part 1 惯性系间矢量变换

接下来，我们考虑矢势 $\mathbf{A}(x_1, x_2, x_3, x_4)$ 和标势 $\Phi(x_1, x_2, x_3, x_4)$ 在两个惯性参照系之间的变换关系。由于 $A_x(x_1, x_2, x_3, x_4)$, $A_y(x_1, x_2, x_3, x_4)$, $A_z(x_1, x_2, x_3, x_4)$ 和 $i \Phi(x_1, x_2, x_3, x_4)/c$ 是一个四维协变矢量（四维势）的分量，故它们在两个不同惯性参照系之间的变换关系应与四维坐标 $x_1, x_2, x_3$ 和 $x_4$ 满足的变换关系，即洛伦兹变换

$$
\begin{aligned}
x'_1 &= x_1 \cos \theta + x_4 \sin \theta, & x'_4 &= -x_1 \sin \theta + x_4 \cos \theta, \\\\
x'_2 &= x_2, & x'_3 &= x_3
\end{aligned}
$$

相同。这里，$\tan \theta = -V / i c$。因此，我们有

$$
\begin{aligned}
A'_x(x'_1, x'_2, x'_3, x'_4) &= A'_1(x'_1, x'_2, x'_3, x'_4) = A_1(x_1, x_2, x_3, x_4) \cos \theta + A_4(x_1, x_2, x_3, x_4) \sin \theta \\\\
&= \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}} A_x(x_1, x_2, x_3, x_4) + \frac{-V}{\sqrt{1 - \frac{V^2}{c^2}}} \left( \frac{i}{c} \Phi(x_1, x_2, x_3, x_4) \right) \\\\
&= \frac{A_x(x_1, x_2, x_3, x_4) - \frac{V}{c} \Phi(x_1, x_2, x_3, x_4)}{\sqrt{1 - \frac{V^2}{c^2}}},
\end{aligned}
$$

$$
\begin{aligned}
A'_y(x'_1, x'_2, x'_3, x'_4) &= A'_2(x'_1, x'_2, x'_3, x'_4) = A_2(x_1, x_2, x_3, x_4) = A_y(x_1, x_2, x_3, x_4), \\\\
A'_z(x'_1, x'_2, x'_3, x'_4) &= A'_3(x'_1, x'_2, x'_3, x'_4) = A_3(x_1, x_2, x_3, x_4) = A_z(x_1, x_2, x_3, x_4),
\end{aligned}
$$

以及

$$
\begin{aligned}
\frac{i}{c} \Phi'(x'_1, x'_2, x'_3, x'_4) &= A'_4(x'_1, x'_2, x'_3, x'_4) = -A_1(x_1, x_2, x_3, x_4) \sin \theta + A_4(x_1, x_2, x_3, x_4) \cos \theta \\\\
&= -\frac{-V}{\sqrt{1 - \frac{V^2}{c^2}}} A_x(x_1, x_2, x_3, x_4) + \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}} \left( \frac{i}{c} \Phi(x_1, x_2, x_3, x_4) \right),
\end{aligned}
$$

或是

$$
\Phi'(x'_1, x'_2, x'_3, x'_4) = \frac{\Phi(x_1, x_2, x_3, x_4) - V A_x(x_1, x_2, x_3, x_4)}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

另一方面，根据定义，电磁场强度矢量由

$$
F_{ij}(x_1, x_2, x_3, x_4) = \frac{\partial A_j(x_1, x_2, x_3, x_4)}{\partial x_i} - \frac{\partial A_i(x_1, x_2, x_3, x_4)}{\partial x_j}
$$

给出。具体一点讲，我们有

$$
\mathcal{F} = \left( \begin{array}{cccc}
F_{11} & F_{12} & F_{13} & F_{14} \\
F_{21} & F_{22} & F_{23} & F_{24} \\
F_{31} & F_{32} & F_{33} & F_{34} \\
F_{41} & F_{42} & F_{43} & F_{44}
\end{array} \right) = \left( \begin{array}{cccc}
0 & B_z & -B_y & -\dfrac{i E_x}{c} \\\\
-B_z & 0 & B_x & -\dfrac{i E_y}{c} \\\\
B_y & -B_x & 0 & -\dfrac{i E_z}{c} \\\\
\dfrac{i E_x}{c} & \dfrac{i E_y}{c} & \dfrac{i E_z}{c} & 0
\end{array} \right).
$$

因此，为了决定电磁场强度矢量在两个参照系之间的变换，我们只需考虑矩阵元 $F_{ij}$ 的变换关系即可。

首先，我们有

$$
F'_{23} = \frac{\partial A'_3}{\partial x'_2} - \frac{\partial A'_2}{\partial x'_3} = \frac{\partial A_3}{\partial x_2} - \frac{\partial A_2}{\partial x_3} = F_{23}.
$$

这意味着

$$
B'_x(x'_1, x'_2, x'_3, x'_4) = B_x(x_1, x_2, x_3, x_4).
$$

又因为

$$
\begin{aligned}
F'_{14} &= \frac{\partial A'_4}{\partial x'_1} - \frac{\partial A'_1}{\partial x'_4} = \left( \frac{\partial A'_4}{\partial x_1} \frac{\partial x_1}{\partial x'_1} + \frac{\partial A'_4}{\partial x_4} \frac{\partial x_4}{\partial x'_1} \right) - \left( \frac{\partial A'_1}{\partial x_1} \frac{\partial x_1}{\partial x'_4} + \frac{\partial A'_1}{\partial x_4} \frac{\partial x_4}{\partial x'_4} \right) \\\\
&= \left( \frac{\partial A'_4}{\partial x_1} \cos \theta + \frac{\partial A'_4}{\partial x_4} \sin \theta \right) - \left( \frac{\partial A'_1}{\partial x_1} (-\sin \theta) + \frac{\partial A'_1}{\partial x_4} \cos \theta \right) \\\\
&= \left( \left[ \frac{\partial}{\partial x_1} (-\sin \theta A_1 + \cos \theta A_4) \right] \cos \theta + \left[ \frac{\partial}{\partial x_4} (-\sin \theta A_1 + \cos \theta A_4) \right] \sin \theta \right) \\\\
&- \left( \left[ \frac{\partial}{\partial x_1} (\cos \theta A_1 + \sin \theta A_4) \right] (-\sin \theta) + \left[ \frac{\partial}{\partial x_4} (\cos \theta A_1 + \sin \theta A_4) \right] \cos \theta \right) \\\\
&= \left( -\sin \theta \cos \theta \frac{\partial A_1}{\partial x_1} + \cos^2 \theta \frac{\partial A_4}{\partial x_1} - \sin^2 \theta \frac{\partial A_1}{\partial x_4} + \cos \theta \sin \theta \frac{\partial A_4}{\partial x_4} \right) \\\\
&- \left( -\cos \theta \sin \theta \frac{\partial A_1}{\partial x_1} - \sin^2 \theta \frac{\partial A_4}{\partial x_1} + \cos^2 \theta \frac{\partial A_1}{\partial x_4} + \cos \theta \sin \theta \frac{\partial A_4}{\partial x_4} \right) \\\\
&= \frac{\partial A_4}{\partial x_1} - \frac{\partial A_1}{\partial x_4} = F_{14},
\end{aligned}
$$

即

$$
E'_x(x'_1, x'_2, x'_3, x'_4) = E_x(x_1, x_2, x_3, x_4).
$$

接下来，我们研究 $F_{12}$ 的变换规律。我们有

$$
\begin{aligned}
F'_{12}(x'_1, x'_2, x'_3, x'_4) &= \frac{\partial A'_2}{\partial x'_1} - \frac{\partial A'_1}{\partial x'_2} = \frac{\partial A_2}{\partial x'_1} - \frac{\partial A'_1}{\partial x_2} \\\\
&= \left( \frac{\partial A_2}{\partial x_1} \frac{\partial x_1}{\partial x'_1} + \frac{\partial A_2}{\partial x_4} \frac{\partial x_4}{\partial x'_1} \right) - \frac{\partial}{\partial x_2} (A_1 \cos \theta + A_4 \sin \theta) \\\\
&= \frac{\partial A_2}{\partial x_1} \cos \theta + \frac{\partial A_2}{\partial x_4} \sin \theta - \frac{\partial A_1}{\partial x_2} \cos \theta - \frac{\partial A_4}{\partial x_2} \sin \theta \\\\
&= \left( \frac{\partial A_2}{\partial x_1} - \frac{\partial A_1}{\partial x_2} \right) \cos \theta + \left( \frac{\partial A_2}{\partial x_4} - \frac{\partial A_4}{\partial x_2} \right) \sin \theta \\\\
&= \cos \theta F_{12}(x_1, x_2, x_3, x_4) + \sin \theta F_{42}(x_1, x_2, x_3, x_4).
\end{aligned}
$$

也就是说，在两个惯性参照系之间的变换下，$F_{12}$ 的脚标中只有 $i = 1$ 是按照洛伦兹变换改变的。同理，我们可以推得

$$
F'_{13}(x'_1, x'_2, x'_3, x'_4) = \cos \theta F_{13}(x_1, x_2, x_3, x_4) + \sin \theta F_{43}(x_1, x_2, x_3, x_4),
$$

$$
F'_{42}(x'_1, x'_2, x'_3, x'_4) = -\sin \theta F_{12}(x_1, x_2, x_3, x_4) + \cos \theta F_{42}(x_1, x_2, x_3, x_4),
$$

$$
F'_{43}(x'_1, x'_2, x'_3, x'_4) = -\sin \theta F_{13}(x_1, x_2, x_3, x_4) + \cos \theta F_{43}(x_1, x_2, x_3, x_4).
$$

现将

$$
\begin{aligned}
F_{12} &= B_z, & F_{42} &= \frac{i E_y}{c}, \\\\
\cos \theta &= \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}}, & \sin \theta &= \frac{\left( \frac{V}{i c} \right)}{\sqrt{1 - \frac{V^2}{c^2}}},
\end{aligned}
$$

代入 $F'_{12}(x'_1, x'_2, x'_3, x'_4)$ 后，我们有

$$
B'_z = \frac{B_z}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{i E_y}{c} \frac{\left( -\frac{V}{i c} \right)}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{B_z - \frac{V}{c^2} E_y}{\sqrt{1 - \frac{V^2}{c^2}}},
$$

或是

$$
B'_z(x'_1, x'_2, x'_3, x'_4) = \frac{B_z(x_1, x_2, x_3, x_4) - \frac{V}{c^2} E_y(x_1, x_2, x_3, x_4)}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

同理，将 $F_{13} = -B_y$, $F_{43} = \frac{i E_z}{c}$ 以及 $\cos \theta$ 和 $\sin \theta$ 的表达式代入
$$
F'_{13}(x'_1, x'_2, x'_3, x'_4) = \cos \theta F_{13}(x_1, x_2, x_3, x_4) + \sin \theta F_{43}(x_1, x_2, x_3, x_4),
$$
后有

$$
-B'_y = \frac{(-B_y)}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{i E_z}{c} \frac{\left( -\frac{V}{i c} \right)}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{-B_y - \frac{V}{c^2} E_z}{\sqrt{1 - \frac{V^2}{c^2}}},
$$

或是

$$
B'_y(x'_1, x'_2, x'_3, x'_4) = \frac{B_y(x_1, x_2, x_3, x_4) + \frac{V}{c^2} E_z(x_1, x_2, x_3, x_4)}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

将 $F_{42} = \frac{i E_y}{c}$, $F_{12} = B_z$ 以及 $\cos \theta$ 和 $\sin \theta$ 的表达式代入
$$
F'_{42}(x'_1, x'_2, x'_3, x'_4) = -\sin \theta F_{12}(x_1, x_2, x_3, x_4) + \cos \theta F_{42}(x_1, x_2, x_3, x_4),
$$
后有

$$
\frac{i E'_y}{c} = \frac{B_z \left( \frac{V}{i c} \right)}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{\frac{i E_y}{c}}{\sqrt{1 - \frac{V^2}{c^2}}} = \left( \frac{i}{c} \right) \frac{-V B_z + E_y}{\sqrt{1 - \frac{V^2}{c^2}}},
$$

或是

$$
E'_y(x'_1, x'_2, x'_3, x'_4) = \frac{E_y(x_1, x_2, x_3, x_4) - V B_z(x_1, x_2, x_3, x_4)}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

最后，将 $F_{13} = \frac{i E_z}{c}$, $F_{13} = -B_y$ 以及 $\cos \theta$ 和 $\sin \theta$ 的表达式代入
$$
F'_{43}(x'_1, x'_2, x'_3, x'_4) = -\sin \theta F_{13}(x_1, x_2, x_3, x_4) + \cos \theta F_{43}(x_1, x_2, x_3, x_4).
$$
后有

$$
\frac{i E'_z}{c} = \frac{-B_y \left( \frac{V}{i c} \right)}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{\frac{i E_z}{c}}{\sqrt{1 - \frac{V^2}{c^2}}} = \left( \frac{i}{c} \right) \frac{V B_y + E_z}{\sqrt{1 - \frac{V^2}{c^2}}},
$$

或是

$$
E'_z(x'_1, x'_2, x'_3, x'_4) = \frac{E_z(x_1, x_2, x_3, x_4) + V B_y(x_1, x_2, x_3, x_4)}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

通过比较可以很容易地验证，电磁场强度矢量分量所满足的这些变换关系前面给出的结果完全一样。

当 $V/c \sim 0$ 时，我们可以令 $\frac{1}{\sqrt{1 - \frac{V^2}{c^2}}} \sim 1$。此时，上述变换式可以近似写作

$$
\begin{aligned}
E'_x &= E_x, & E'_y &= E_y - V B_z, & E'_z &= E_z + V B_y, \\
B'_x &= B_x, & B'_y &= B_y + \frac{V}{c^2} E_z, & B'_z &= B_z - \frac{V}{c^2} E_y,
\end{aligned}
$$

或者等价地

$$
\begin{aligned}
E_x &= E'_x, & E_y &= E'_y + V B'_z, & E_z &= E'_z - V B'_y, \\\\
B_x &= B'_x, & B_y &= B'_y - \frac{V}{c^2} E'_z, & B_z &= B'_z + \frac{V}{c^2} E'_y.
\end{aligned}
$$

我们可以将这些变换式更为紧凑地写作

$$
\mathbf{E}(x_1, x_2, x_3, x_4) = \mathbf{E}'(x'_1, x'_2, x'_3, x'_4) - \mathbf{V} \times \mathbf{B}'(x'_1, x'_2, x'_3, x'_4),
$$

以及

$$
\mathbf{B}(x_1, x_2, x_3, x_4) = \mathbf{B}'(x'_1, x'_2, x'_3, x'_4) + \frac{\mathbf{V}}{c^2} \times \mathbf{E}'(x'_1, x'_2, x'_3, x'_4).
$$

因此，若在 $S'$ 系中，$\mathbf{B}' = 0$，则在实验室系中我们有

$$
\mathbf{E}(x_1, x_2, x_3, x_4) = \mathbf{E}'(x'_1, x'_2, x'_3, x'_4), \quad \mathbf{B}(x_1, x_2, x_3, x_4) = \frac{\mathbf{V}}{c^2} \times \mathbf{E}'(x'_1, x'_2, x'_3, x'_4),
$$

即

$$
\mathbf{B}(x_1, x_2, x_3, x_4) = \frac{\mathbf{V}}{c^2} \times \mathbf{E}(x_1, x_2, x_3, x_4).
$$

同理，若在 $S'$ 系中 $\mathbf{E}' = 0$ 成立，则在实验室中我们有

$$
\mathbf{E}(x_1, x_2, x_3, x_4) = -\mathbf{V} \times \mathbf{B}'(x'_1, x'_2, x'_3, x'_4), \quad \mathbf{B}(x_1, x_2, x_3, x_4) = \mathbf{B}'(x'_1, x'_2, x'_3, x'_4),
$$

或是

$$
\mathbf{E}(x_1, x_2, x_3, x_4) = -\mathbf{V} \times \mathbf{B}(x_1, x_2, x_3, x_4).
$$

## Part 2 Maxwell 方程组推导

接下来的一个问题是，我们可否利用矩阵 $\mathcal{F}$ 的矩阵元写出麦克斯韦方程组？答案是肯定的。

首先，我们注意到矩阵 $\mathcal{F}(x_1, x_2, x_3, x_4)$ 的矩阵元满足如下的恒等式

$$
\frac{\partial F_{ij}}{\partial x_k} + \frac{\partial F_{jk}}{\partial x_i} + \frac{\partial F_{ki}}{\partial x_j} \equiv 0.
$$

实际上，按照矩阵元的定义，我们有

$$
\begin{aligned}
&\frac{\partial F_{ij}}{\partial x_k} + \frac{\partial F_{jk}}{\partial x_i} + \frac{\partial F_{ki}}{\partial x_j} \\\\
&= \frac{\partial}{\partial x_k} \left( \frac{\partial A_j}{\partial x_i} - \frac{\partial A_i}{\partial x_j} \right) + \frac{\partial}{\partial x_i} \left( \frac{\partial A_k}{\partial x_j} - \frac{\partial A_j}{\partial x_k} \right) + \frac{\partial}{\partial x_j} \left( \frac{\partial A_i}{\partial x_k} - \frac{\partial A_k}{\partial x_i} \right) \\\\
&= \frac{\partial^2 A_j}{\partial x_k \partial x_i} - \frac{\partial^2 A_i}{\partial x_k \partial x_j} + \frac{\partial^2 A_k}{\partial x_i \partial x_j} - \frac{\partial^2 A_j}{\partial x_i \partial x_k} + \frac{\partial^2 A_i}{\partial x_j \partial x_k} - \frac{\partial^2 A_k}{\partial x_j \partial x_i} = 0.
\end{aligned}
$$
现在在恒等式
$$
\frac{\partial F_{ij}}{\partial x_k} + \frac{\partial F_{jk}}{\partial x_i} + \frac{\partial F_{ki}}{\partial x_j} \equiv 0.
$$
中取 $i = 1, j = 2, k = 3$，则我们有

$$
\frac{\partial F_{12}}{\partial x_3} + \frac{\partial F_{23}}{\partial x_1} + \frac{\partial F_{31}}{\partial x_2} = \frac{\partial B_z}{\partial z} + \frac{\partial B_x}{\partial x} + \frac{\partial B_y}{\partial y} = 0,
$$

即麦克斯韦方程之一的

$$
\nabla \cdot \mathbf{B}(x, y, z, t) = 0.
$$

又若我们恒等式 
$$
\frac{\partial F_{ij}}{\partial x_k} + \frac{\partial F_{jk}}{\partial x_i} + \frac{\partial F_{ki}}{\partial x_j} \equiv 0.
$$
 取 $i = 1, j = 2, k = 4$，则得到

$$
\frac{\partial F_{12}}{\partial x_4} + \frac{\partial F_{24}}{\partial x_1} + \frac{\partial F_{41}}{\partial x_2} = \frac{\partial B_z}{\partial (i c t)} + \frac{\partial \left( -\frac{i}{c} E_y \right)}{\partial x} + \frac{\partial \left( \frac{i}{c} E_x \right)}{\partial y} = 0,
$$

或是

$$
\frac{\partial E_x}{\partial y} - \frac{\partial E_y}{\partial x} = -(\nabla \times \mathbf{E})_z = \frac{\partial B_z}{\partial t}.
$$

这是另外一个麦克斯韦方程

$$
\nabla \times \mathbf{E}(x, y, z, t) = -\frac{\partial \mathbf{B}(x, y, z, t)}{\partial t}
$$

的 $z$ 分量。类似地，若我们在恒等式中取 $i = 1, j = 3, k = 4$，则得到

$$
-(\nabla \times \mathbf{E})_y = \frac{\partial B_y}{\partial t},
$$

而若在恒等式中取 $i = 2, j = 3, k = 4$，就会得到

$$
-(\nabla \times \mathbf{E})_x = \frac{\partial B_x}{\partial t}.
$$

### · 四维张量和对偶张量

为了写出另外两个麦克斯韦方程，我们需要引进电磁场自身的作用量 $S_f$。为此，先让我们研究一下矩阵 $\mathcal{F}(x_1, x_2, x_3, x_4)$ 的矩阵元在洛伦兹变换下的改变。一般的洛伦兹变换可以写作

$$
x_i = \sum_{k=1}^{4} \alpha_{ik} x'_k,
$$

或者是等价地

$$
x'_i = \sum_{k=1}^{4} \left( \alpha^{-1} \right)_{ik} x_k.
$$

这里，$\alpha^{-1}$ 代表洛伦兹变换矩阵 $\alpha$ 的逆矩阵。由于我们要求

$$
\begin{aligned}
&x_1^2 + x_2^2 + x_3^2 + x_4^2 = \sum_{i=1}^{4} x_i x_i = \sum_{i=1}^{4} \left( \sum_{j=1}^{4} \alpha_{ij} x'_j \right) \left( \sum_{k=1}^{4} \alpha_{ik} x'_k \right) \\\\
&= \sum_{j=1}^{4} \sum_{k=1}^{4} \left( \sum_{i=1}^{4} \alpha_{ij} \alpha_{ik} \right) x'_j x'_k = \sum_{j=1}^{4} x'^2_j + x'^2_2 + x'^2_3 + x'^2_4
\end{aligned}
$$

成立，故应有

$$
\sum_{i=1}^{4} \alpha_{ij} \alpha_{ik} = \delta_{jk},
$$

即洛伦兹变换矩阵的任意两列彼此是正交的，而同一列则是归一的。这样的矩阵被称为正交矩阵。利用矩阵转置的概念，我们又可将上式重写为

$$
\sum_{i=1}^{4} \alpha_{ij} \alpha_{ik} = \sum_{i=1}^{4} \left( \alpha^T \right)_{ji} \alpha_{ik} = \delta_{jk}.
$$

因此，一个正交矩阵的转置就是它的逆矩阵，记作

$$
\alpha^T = \alpha^{-1}.
$$

值得强调一点的是，在一般性洛伦兹变换中
$$
x_i = \sum_{k=1}^{4} \alpha_{ik} x'_k,
$$
我们已经将空间旋转变换，空间反射变化变换

$$
\begin{aligned}
x = x_1 &= -x'_1 = -x', & y = x_2 &= -x'_2 = -y', \\\\
z = x_3 &= -x'_3 = -z', & i c t = x_4 &= x'_4 = i c t',
\end{aligned}
$$

以及时间反演变换

$$
\begin{aligned}
x = x_1 &= x'_1 = x', & y = x_2 &= x'_2 = y', \\\\
z = x_3 &= x'_3 = z', & i c t = x_4 &= -x'_4 = -i c t'
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

现在，我们可以对于四维矢量的定义做一推广了。若一个量 $p^{(4)}$ 有四个分量 $p^{(4)} = (p^{(4)}_1, p^{(4)}_2, p^{(4)}_3, p^{(4)}_4)$，且它们在两个参照系之间的变换满足与坐标 $(x_1, x_2, x_3, x_4)$ 相同的洛伦兹变换，即

$$
p^{(4)}_i = \sum_{k=1}^{4} \alpha_{ik} p'^{(4)}_k = \alpha_{i1} p'^{(4)}_1 + \alpha_{i2} p'^{(4)}_2 + \alpha_{i3} p'^{(4)}_3 + \alpha_{i4} p'^{(4)}_4,
$$

则我们称它为一个四维矢量。显然，一个四维矢量的分量满足恒等式

$$
\begin{aligned}
&\left( p^{(4)}_1 \right)^2 + \left( p^{(4)}_2 \right)^2 + \left( p^{(4)}_3 \right)^2 + \left( p^{(4)}_4 \right)^2 = \sum_{i=1}^{4} \left( p^{(4)}_i \right)^2 \\\\
&= \sum_{k_1=1}^{4} \left( \sum_{k_1}^{4} \alpha_{ik_1} p'^{(4)}_{k_1} \right) \left( \sum_{k_2=1}^{4} \alpha_{ik_2} p'^{(4)}_{k_2} \right) = \sum_{k_1}^{4} \sum_{k_2}^{4} \left( \sum_{i=1}^{4} \alpha_{ik_1} \alpha_{ik_2} \right) p'^{(4)}_{k_1} p'^{(4)}_{k_2} \\\\
&= \sum_{k_1}^{4} \sum_{k_2}^{4} \delta_{k_1 k_2} p'^{(4)}_{k_1} p'^{(4)}_{k_2} = \sum_{k_1}^{4} \left( p'^{(4)}_{k_1} \right)^2 = \left( p'^{(4)}_1 \right)^2 + \left( p'^{(4)}_2 \right)^2 + \left( p'^{(4)}_3 \right)^2 + \left( p'^{(4)}_4 \right)^2
\end{aligned}
$$

即一个四维矢量的“长度”在洛伦兹变换下是不变的。同理可证，任意两个四维矢量的“点乘”在洛伦兹变换下也是不变的。以四维坐标矢量和一个四维矢量 $(p^{(4)}_1, p^{(4)}_2, p^{(4)}_3, p^{(4)}_4)$ 为例，我们有

$$
\begin{aligned}
&x_1 p^{(4)}_1 + x_2 p^{(4)}_2 + x_3 p^{(4)}_3 + x_4 p^{(4)}_4 = \sum_{i=1}^{4} x_i p^{(4)}_i = \sum_{i=1}^{4} \left( \sum_{k_1=1}^{4} \alpha_{ik_1} x'_{k_1} \right) \left( \sum_{k_2=1}^{4} \alpha_{ik_2} p'^{(4)}_{k_2} \right) \\\\
&= \sum_{k_1=1}^{4} \sum_{k_2=1}^{4} \left( \sum_{i=1}^{4} \alpha_{ik_1} \alpha_{ik_2} \right) x'_{k_1} p'^{(4)}_{k_2} = \sum_{k_1=1}^{4} \sum_{k_2=1}^{4} \delta_{k_1 k_2} x'_{k_1} p'^{(4)}_{k_2} = \sum_{k_1=1}^{4} x'_{k_1} p'^{(4)}_{k_1} \\\\
&= x'_1 p'^{(4)}_1 + x'_2 p'^{(4)}_2 + x'_3 p'^{(4)}_3 + x'_4 p'^{(4)}_4.
\end{aligned}
$$

的确，它们的点乘在洛伦兹变换下也是不变的。

接下来，我们要引进所谓四维二阶张量的定义。若一个 $4 \times 4$ 矩阵的矩阵元在一个洛伦兹变换下按照如下规律改变

$$
B_{ij} = \sum_{k=1}^{4} \sum_{l=1}^{4} \alpha_{ik} \alpha_{jl} B'_{kl},
$$

则这个矩阵被称为一个四维二阶张量。我们要证明，根据这一定义，
$$
\mathcal{F} = \left( \begin{array}{cccc}
F_{11} & F_{12} & F_{13} & F_{14} \\
F_{21} & F_{22} & F_{23} & F_{24} \\
F_{31} & F_{32} & F_{33} & F_{34} \\
F_{41} & F_{42} & F_{43} & F_{44}
\end{array} \right) = \left( \begin{array}{cccc}
0 & B_z & -B_y & -\dfrac{i E_x}{c} \\\\
-B_z & 0 & B_x & -\dfrac{i E_y}{c} \\\\
B_y & -B_x & 0 & -\dfrac{i E_z}{c} \\\\
\dfrac{i E_x}{c} & \dfrac{i E_y}{c} & \dfrac{i E_z}{c} & 0
\end{array} \right).
$$
给出的矩阵 $\mathcal{F}$ 即是一个四维二阶张量，称为电磁场强度张量。

事实上，我们有

$$
\begin{aligned}
F_{ij} &= \frac{\partial A_j}{\partial x_i} - \frac{\partial A_i}{\partial x_j} = \frac{\partial}{\partial x_i} \left( \sum_{l=1}^{4} \alpha_{jl} A'_l \right) - \frac{\partial}{\partial x_j} \left( \sum_{k=1}^{4} \alpha_{ik} A'_k \right) \\\\
&= \sum_{l=1}^{4} \alpha_{jl} \frac{\partial A'_l}{\partial x_i} - \sum_{k=1}^{4} \alpha_{ik} \frac{\partial A'_k}{\partial x_j} = \sum_{l=1}^{4} \alpha_{jl} \left( \sum_{k=1}^{4} \frac{\partial A'_l}{\partial x'_k} \frac{\partial x'_k}{\partial x_i} \right) - \sum_{k=1}^{4} \alpha_{ik} \left( \sum_{l=1}^{4} \frac{\partial A'_k}{\partial x'_l} \frac{\partial x'_l}{\partial x_j} \right) \\\\
&= \sum_{l=1}^{4} \alpha_{jl} \left( \sum_{k=1}^{4} \frac{\partial A'_l}{\partial x'_k} \left( \alpha^{-1} \right)_{ki} \right) - \sum_{k=1}^{4} \alpha_{ik} \left( \sum_{l=1}^{4} \frac{\partial A'_k}{\partial x'_l} \left( \alpha^{-1} \right)_{lj} \right).
\end{aligned}
$$

利用 $\alpha$ 是一个正交矩阵这一事实，我们有可将该式进一步改写为

$$
\begin{aligned}
F_{ij} &= \sum_{l=1}^{4} \alpha_{jl} \left( \sum_{k=1}^{4} \frac{\partial A'_l}{\partial x'_k} \left( \alpha^T \right)_{ki} \right) - \sum_{k=1}^{4} \alpha_{ik} \left( \sum_{l=1}^{4} \frac{\partial A'_k}{\partial x'_l} \left( \alpha^T \right)_{lj} \right) \\\\
&= \sum_{k=1}^{4} \sum_{l=1}^{4} \alpha_{ik} \alpha_{jl} \frac{\partial A'_l}{\partial x'_k} - \sum_{k=1}^{4} \sum_{l=1}^{4} \alpha_{ik} \alpha_{jl} \frac{\partial A'_k}{\partial x'_l} = \sum_{k=1}^{4} \sum_{l=1}^{4} \alpha_{ik} \alpha_{jl} \left( \frac{\partial A'_l}{\partial x'_k} - \frac{\partial A'_k}{\partial x'_l} \right) \\\\
&= \sum_{k=1}^{4} \sum_{l=1}^{4} \alpha_{ik} \alpha_{jl} F'_{kl}.
\end{aligned}
$$

即 $\mathcal{F}$ 是一个四维二阶 (反对称) 张量。

根据四维二阶张量的定义，我们可以很容易地证明，任意两个四维二阶张量 $\mathcal{B}$ 和 $\mathcal{D}$ 的内积

$$
\mathcal{B} \cdot \mathcal{D} \equiv \sum_{i=1}^{4} \sum_{j=1}^{4} B_{ij} D_{ij}
$$

在一个洛伦兹变换下是不变的，即它是一个四维标量。事实上，我们有

$$
\begin{aligned}
&\mathcal{B} \cdot \mathcal{D} \\\\
&= \sum_{i=1}^{4} \sum_{j=1}^{4} B_{ij} D_{ij} = \sum_{i=1}^{4} \sum_{j=1}^{4} \left( \sum_{k_1=1}^{4} \sum_{l_1=1}^{4} \alpha_{ik_1} \alpha_{jl_1} B'_{k_1 l_1} \right) \left( \sum_{k_2=1}^{4} \sum_{l_2=1}^{4} \alpha_{ik_2} \alpha_{jl_2} D'_{k_2 l_2} \right) \\\\
&= \sum_{k_1=1}^{4} \sum_{l_1=1}^{4} \sum_{k_2=1}^{4} \sum_{l_2=1}^{4} \left( \sum_{i=1}^{4} \alpha_{ik_1} \alpha_{ik_2} \right) \left( \sum_{j=1}^{4} \alpha_{jl_1} \alpha_{jl_2} \right) B'_{k_1 l_1} D'_{k_2 l_2} \\\\
&= \sum_{k_1=1}^{4} \sum_{l_1=1}^{4} \sum_{k_2=1}^{4} \sum_{l_2=1}^{4} \delta_{k_1 k_2} \delta_{l_1 l_2} B'_{k_1 l_1} D'_{k_2 l_2} = \sum_{k_1=1}^{4} \sum_{l_1=1}^{4} B'_{k_1 l_1} D'_{k_1 l_1} = \mathcal{B}' \cdot \mathcal{D}'.
\end{aligned}
$$

特别是当 $\mathcal{B} = \mathcal{D}$ 时，我们有

$$
\mathcal{B} \cdot \mathcal{B} = \mathcal{B}' \cdot \mathcal{B}'.
$$

作为一个例子，我们看到

$$
\mathcal{F} \cdot \mathcal{F} = \sum_{i=1}^{4} \sum_{j=1}^{4} F_{ij} F_{ij} = 2 \left( B^2(x, y, z, t) - \frac{1}{c^2} E^2(x, y, z, t) \right)
$$

是一个洛伦兹变化下的不变量。

同理，我们可以定义四维三阶张量，四维四阶张量等等。以四维三阶张量为例。一组数（共 64 个）$(C_{ijk})$ 构成一个四维三阶张量，若它们在一个洛伦兹变换下按照如下规律改变

$$
C_{ijk} = \sum_{l=1}^{4} \sum_{m=1}^{4} \sum_{n=1}^{4} \alpha_{il} \alpha_{jm} \alpha_{kn} C'_{lmn}.
$$

根据这一定义，我们亦可将一个四维标量称为四维零阶张量，一个四维矢量称为四维一阶张量。在这里，我们仅介绍一个与电动力学研究有关的四维四阶张量。关于四维高阶张量的知识会在今后学习广义相对论和引力理论时引入。

我们定义四维完全反对称四阶张量为

$$
\epsilon_{ijkl} = \left\{
\begin{array}{ll}
1, & \text{if } (i,j,k,l) \text{ is a even permutation of } (1,2,3,4) ; \\\\
-1, & \text{if } (i,j,k,l) \text{ is a odd permutation of } (1,2,3,4).
\end{array}
\right.
$$

按照定义，下脚标 $(i,j,k,l)$ 是两两不相等的。然而，我们可以很容易看到，若规定当一个分量的两个下脚标相等时该分量为零，则此定义可以很容易地被加以推广。因此，不为零的分量的个数恰好等于四个下脚标的全排列的个数，即 $4!$。也就是说，

$$
\sum_{i=1}^{4} \sum_{j=1}^{4} \sum_{k=1}^{4} \sum_{l=1}^{4} \epsilon^2_{ijkl} = 4!
$$

成立。

我们接下来要证明，在一个真的洛伦兹变换下，如此定义的 $\{\epsilon_{ijkl}\}$ 的确是按照一个四维四阶张量的方式变换的。为此，我们假设 $\{\epsilon'_{ijkl}\}$ 是定义在 $S'$ 系中的四维完全反对称四阶张量，即其各个分量满足定义式。又取一真洛伦兹变换 $\alpha$，并考虑如下定义的量

$$
\epsilon_{mnst} = \sum_{i=1}^{4} \sum_{j=1}^{4} \sum_{k=1}^{4} \sum_{l=1}^{4} \alpha_{mi} \alpha_{nj} \alpha_{sk} \alpha_{tl} \; \epsilon'_{ijkl}.
$$

我们要证明

$$
\epsilon_{mnst} = \epsilon_{mnst},
$$

即 $S$ 系内的四维完全反对称四阶张量的分量。实际上，若注意到上面的变换式具有一个行列式的形式，并利用行列式的性质，我们可以直接写出

$$
\epsilon_{mnst} = \sum_{i=1}^{4} \sum_{j=1}^{4} \sum_{k=1}^{4} \sum_{l=1}^{4} \alpha_{mi} \alpha_{nj} \alpha_{sk} \alpha_{tl} \; \epsilon'_{ijkl} = \det \alpha \; \epsilon_{mnst} = \epsilon_{mnst}.
$$

这里，我们利用了一个真洛伦兹变换的行列式 $\det \alpha = 1$ 这一事实。

对于赝洛伦兹变换，情况变得有些复杂。以空间反射变换为例，我们有

$$
\alpha_{1i} = -\delta_{1i}, \quad \alpha_{2j} = -\delta_{2j}, \quad \alpha_{3k} = -\delta_{3k}, \quad \alpha_{4l} = \delta_{4l}
$$

成立。因此，一个四维四阶张量 $\mathcal{F}$ 的分量应该满足变换关系

$$
\begin{aligned}
F_{1234} &= \sum_{i=1}^{4} \sum_{j=1}^{4} \sum_{k=1}^{4} \sum_{l=1}^{4} \alpha_{1i} \alpha_{2j} \alpha_{3k} \alpha_{4l} \; F'_{ijkl} \\\\
&= \sum_{i=1}^{4} \sum_{j=1}^{4} \sum_{k=1}^{4} \sum_{l=1}^{4} (-1)^3 \delta_{1i} \delta_{2j} \delta_{3k} \delta_{4l} \; F'_{ijkl} = -F'_{1234}.
\end{aligned}
$$

但根据定义，我们显然有

$$
\epsilon_{1234} = \epsilon'_{1234},
$$
并不变号，即 $\{\epsilon_{ijkl}\}$ 不按照赝洛伦兹变换进行变换。我们称这种量为赝四维四阶张量，以便与通常意义下的四维四阶张量 $\mathcal{F}$ 有所区别。

在定义了四维完全反对称四阶张量 $\{\epsilon_{ijkl}\}$ 后，我们可以引进所谓对偶张量的定义了。任给一个四维二阶张量 $\mathcal{B} = (B_{ij})$，我们定义与它对偶的四维二阶（赝）张量 $\tilde{\mathcal{B}}$ 的分量为

$$
\tilde{B}_{ij} = \frac{1}{2} \sum_{k=1}^{4} \sum_{l=1}^{4} \epsilon_{ijkl} B_{kl}.
$$

> 同理，任给一个四维一阶张量（即四维矢量 $(B_1, B_2, B_3, B_4)$），我们定义与它对偶的四维三阶（赝）张量的分量为 $
> $$
> \tilde{B}_{ijk} = \epsilon_{ijk1} B_1 + \epsilon_{ijk2} B_2 + \epsilon_{ijk3} B_3 + \epsilon_{ijk4} B_4
> $$

一个重要的事实是，在一个真的洛伦兹变换下，一个四维二阶张量 $\mathcal{B}$ 同与它对偶的四维二阶张量 $\tilde{\mathcal{B}}$ 的内积是不变的。实际上，我们有

$$
\begin{aligned}
\mathcal{B} \cdot \tilde{\mathcal{B}} &\equiv \sum_{i=1}^{4} \sum_{j=1}^{4} B_{ij} \tilde{B}_{ij} = \sum_{i=1}^{4} \sum_{j=1}^{4} B_{ij} \left( \frac{1}{2} \sum_{k=1}^{4} \sum_{l=1}^{4} \epsilon_{ijkl} B_{kl} \right) = \frac{1}{2} \sum_{i=1}^{4} \sum_{j=1}^{4} \sum_{k=1}^{4} \sum_{l=1}^{4} \epsilon_{ijkl} B_{ij} B_{kl} \\\\
&= \frac{1}{2} \sum_{i=1}^{4} \sum_{j=1}^{4} \sum_{k=1}^{4} \sum_{l=1}^{4} \epsilon_{ijkl} \left( \sum_{m=1}^{4} \sum_{n=1}^{4} \alpha_{im} \alpha_{jn} B'_{mn} \right) \left( \sum_{s=1}^{4} \sum_{t=1}^{4} \alpha_{ks} \alpha_{lt} B'_{st} \right) \\\\
&= \frac{1}{2} \sum_{m=1}^{4} \sum_{n=1}^{4} \sum_{s=1}^{4} \sum_{t=1}^{4} \left( \sum_{i=1}^{4} \sum_{j=1}^{4} \sum_{k=1}^{4} \sum_{l=1}^{4} \epsilon_{ijkl} \; \alpha_{im} \alpha_{jn} \alpha_{ks} \alpha_{lt} \right) B'_{mn} B'_{st}.
\end{aligned}
$$

注意到，按照行列式的定义，上式中最后一步中的括号中的求和可以写作

$$
\begin{aligned}
&\sum_{i=1}^{4} \sum_{j=1}^{4} \sum_{k=1}^{4} \sum_{l=1}^{4} \epsilon_{ijkl} \; \alpha_{im} \alpha_{jn} \alpha_{ks} \alpha_{lt} = \sum_{i=1}^{4} \sum_{j=1}^{4} \sum_{k=1}^{4} \sum_{l=1}^{4} \epsilon_{ijkl} \; \alpha^{-1}_{mi} \alpha^{-1}_{nj} \alpha^{-1}_{sk} \alpha^{-1}_{tl} \\\\
&= \det \alpha^{-1} \; \epsilon'_{mnst} = \epsilon'_{mnst}.
\end{aligned}
$$

代入上式后，我们得到

$$
\mathcal{B} \cdot \tilde{\mathcal{B}} = \frac{1}{2} \sum_{m=1}^{4} \sum_{n=1}^{4} \sum_{s=1}^{4} \sum_{t=1}^{4} \epsilon'_{mnst} B'_{mn} B'_{st} = \mathcal{B}' \cdot \tilde{\mathcal{B}}',
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
d\Omega \equiv dx_1 dx_2 dx_3 dx_4
$$

在洛伦兹变换下的变换规律。从多元微积分我们知道，如下的变换关系

$$
d\Omega = dx_1 dx_2 dx_3 dx_4 = \left| \frac{D(x_1, x_2, x_3, x_4)}{D(x'_1, x'_2, x'_3, x'_4)} \right| dx'_1 dx'_2 dx'_3 dx'_4 = |J| d\Omega'
$$

在两套坐标系间成立。这里，

$$
J = \frac{D(x_1, x_2, x_3, x_4)}{D(x'_1, x'_2, x'_3, x'_4)} = 
\begin{vmatrix}
\dfrac{\partial x_1}{\partial x'_1} & \dfrac{\partial x_1}{\partial x'_2} & \dfrac{\partial x_1}{\partial x'_3} & \dfrac{\partial x_1}{\partial x'_4} \\\\
\dfrac{\partial x_2}{\partial x'_1} & \dfrac{\partial x_2}{\partial x'_2} & \dfrac{\partial x_2}{\partial x'_3} & \dfrac{\partial x_2}{\partial x'_4} \\\\
\dfrac{\partial x_3}{\partial x'_1} & \dfrac{\partial x_3}{\partial x'_2} & \dfrac{\partial x_3}{\partial x'_3} & \dfrac{\partial x_3}{\partial x'_4} \\\\
\dfrac{\partial x_4}{\partial x'_1} & \dfrac{\partial x_4}{\partial x'_2} & \dfrac{\partial x_4}{\partial x'_3} & \dfrac{\partial x_4}{\partial x'_4}
\end{vmatrix}
$$

被称为雅可比行列式（Jacobi determinant）。对于洛伦兹变换，不难验证此时的雅可比行列式恰为洛伦兹变换的矩阵 $\alpha$ 的行列式。因此，对于真洛伦兹变换它等于 $+1$，而对于赝洛伦兹变换它等于 $-1$。但在取了绝对值后，最后的结果都是 $+1$。因此，我们有

$$
d\Omega = |J| d\Omega' = |\det \alpha| \; d\Omega' = d\Omega'.
$$



