---
title: Lesson 6 最小二乘法
permalink: /Metrology/lesson-6/
createTime: 2026/11/10 13:37:45
---

线性参数的最小二乘原理，简单说就是：**当观测数据存在误差时，寻找一组参数，使得“模型预测值”与“实际观测值”之差的平方和最小**。这里的“线性”指模型对参数是线性的，即模型可写成 $y = \mathbf{A}\boldsymbol{\theta}$ 的形式（$\boldsymbol{\theta}$ 是待估参数向量，$\mathbf{A}$ 是已知系数矩阵）。

## Part 1 数学原理

假设我们有三个测量点：
$$
(1,2),\quad (2,2.5),\quad (3,4)
$$

我们希望找到一条直线：
$$
y=kx+b
$$

使它尽可能接近这三个点。


首先，我们定义：

> $y_i$：实际测量值。
>
> $\hat y_i=kx_i+b$：直线给出的预测值。
>
> $e_i=y_i-\hat y_i$：残差，也就是预测误差。

于是三个点分别有三个残差：
$$
\begin{aligned}
e_1&=y_1-(kx_1+b)\\\\
e_2&=y_2-(kx_2+b)\\\\
e_3&=y_3-(kx_3+b)
\end{aligned}
$$

我们希望这些误差尽可能小，所以我们考虑误差的平方和：

$$
\boxed{J(k,b)=\sum_{i=1}^{n}e_i^2}
$$

也就是：
$$
J(k,b)=\sum_{i=1}^{n}
[y_i-(kx_i+b)]^2
$$

最小二乘法的核心，就是寻找一组参数，使所有残差的平方和最小。

假设现在有 $n$ 个测量点：
$$
(x_1,y_1),(x_2,y_2),\cdots,(x_n,y_n)
$$

我们把所有实际测量值排列成一个向量：
$$
\mathbf y=
\begin{bmatrix}
y_1\\
y_2\\
\vdots\\
y_n
\end{bmatrix}
$$

再把直线模型的预测值排列成一个向量：
$$
\hat{\mathbf y}=
\begin{bmatrix}
kx_1+b\\
kx_2+b\\
\vdots\\
kx_n+b
\end{bmatrix}
$$

那么残差向量就是：
$$
\boxed{
\mathbf e=\mathbf y-\hat{\mathbf y}
}
$$

原来我们是在二维平面上寻找一条直线，现在变成了在一个 $n$ 维空间中寻找一个向量。

而且误差平方和可以写成：
$$
J=\mathbf e^T\mathbf e
$$

因为：
$$
\mathbf e^T\mathbf e
=e_1^2+e_2^2+\cdots+e_n^2
$$

这实际上就是向量的模长平方：
$$
\boxed{J=\|\mathbf e\|^2}
$$

即最小二乘法就是寻找一个预测向量，使它与实际测量向量之间的欧几里得距离最短。

### · 正规方程

我们把直线模型：
$$
y=kx+b
$$

代入向量形式：
$$
\hat{\mathbf y}
=
\begin{bmatrix}
x_1&1\\
x_2&1\\
\vdots&\vdots\\
x_n&1
\end{bmatrix}
\begin{bmatrix}
k\\
b
\end{bmatrix}
$$

令：
$$
A=
\begin{bmatrix}
x_1&1\\
x_2&1\\
\vdots&\vdots\\
x_n&1
\end{bmatrix}
,\quad
\boldsymbol\theta=
\begin{bmatrix}
k\\
b
\end{bmatrix}
$$

就得到：
$$
\hat{\mathbf y}=A\boldsymbol\theta
$$

矩阵 $A$ 的两列分别是：
$$
\mathbf a_1=
\begin{bmatrix}
x_1\\x_2\\\vdots\\x_n
\end{bmatrix}
,\qquad
\mathbf a_2=
\begin{bmatrix}
1\\1\\\vdots\\1
\end{bmatrix}
$$

所以所有可能的预测向量都可以写成：
$$
\hat{\mathbf y}=k\mathbf a_1+b\mathbf a_2
$$

即所有可能的预测向量都处于由 $\mathbf a_1,\mathbf a_2$ 张成的一个子空间中。

我们把这个空间叫作：
$$
\mathcal C(A)
$$

即矩阵 $A$ 的列空间。


现在问题变成已知实际测量向量 $\mathbf y$，在列空间 $\mathcal C(A)$ 中寻找一个距离它最近的向量 $\hat{\mathbf y}$。

几何上，这个最近点就是正交投影。

因此：
$$
\boxed{\mathbf e=\mathbf y-A\boldsymbol\theta}
$$

必须垂直于列空间中的所有向量。

也就是：
$$
\mathbf e\perp \mathbf a_1
$$

并且：
$$
\mathbf e\perp \mathbf a_2
$$

于是：
$$
\begin{cases}
\mathbf a_1^T\mathbf e=0\\\\
\mathbf a_2^T\mathbf e=0
\end{cases}
$$

合并起来：
$$
\boxed{A^T\mathbf e=0}
$$

代入残差表达式：
$$
A^T(\mathbf y-A\boldsymbol\theta)=0
$$

整理：
$$
A^T\mathbf y-A^TA\boldsymbol\theta=0
$$

最终得到：
$$
\boxed{A^TA\boldsymbol\theta=A^T\mathbf y}
$$

这就是最小二乘法的正规方程（Normal Equation）。

### · 线性参数模型

前面我们使用的是：
$$
y=kx+b
$$

但实际上，我们完全可以不局限于直线。

推广到一个更一般的模型：
$$
\boxed{
y=a_0\varphi_0(x)+a_1\varphi_1(x)
+\cdots+a_m\varphi_m(x)
}
$$

$a_0,a_1,\cdots,a_m$ 是待求参数。

$\varphi_0(x),\varphi_1(x),\cdots,\varphi_m(x)$ 是已知函数。

> 线性参数不代表模型必须是关于 $x$ 的一次函数，而是指模型对待求参数是线性的。
>
> 例如：
> $$
> y=a_0+a_1x+a_2x^2
> $$
>
> 虽然有 $x^2$，但它仍然是线性参数模型。
>
> 甚至
> $$
> y=a_0+a_1\sin x+a_2e^x
> $$
>
> 也属于线性参数模型。

假设我们有 $n$ 组观测数据：
$$
(x_1,y_1),\cdots,(x_n,y_n)
$$

对于每一组数据：
$$
y_i=a_0\varphi_0(x_i)+\cdots+a_m\varphi_m(x_i)
$$

把所有数据写在一起：
$$
\begin{bmatrix}
y_1\\
y_2\\
\vdots\\
y_n
\end{bmatrix}
=
\begin{bmatrix}
\varphi_0(x_1)&\varphi_1(x_1)&\cdots&\varphi_m(x_1)\\
\varphi_0(x_2)&\varphi_1(x_2)&\cdots&\varphi_m(x_2)\\
\vdots&\vdots&\ddots&\vdots\\
\varphi_0(x_n)&\varphi_1(x_n)&\cdots&\varphi_m(x_n)
\end{bmatrix}
\begin{bmatrix}
a_0\\
a_1\\
\vdots\\
a_m
\end{bmatrix}
$$

简写：
$$
\boxed{\mathbf y=A\boldsymbol\theta}
$$

其中：
$$
A_{ij}=\varphi_{j-1}(x_i)
$$

我们称 $A$ 为设计矩阵或观测矩阵。

由于实际测量存在误差：
$$
\mathbf y=A\boldsymbol\theta+\mathbf e
$$

因此：
$$
\mathbf e=\mathbf y-A\boldsymbol\theta
$$

我们希望：
$$
\min_{\boldsymbol\theta}
\|\mathbf y-A\boldsymbol\theta\|^2
$$

根据正交投影原理：
$$
A^T\mathbf e=0
$$

所以：
$$
A^T(\mathbf y-A\boldsymbol\theta)=0
$$

得到：
$$
\boxed{
A^TA\boldsymbol\theta=A^T\mathbf y
}
$$

如果 $A$ 的列满秩，那么：
$$
\boxed{
\boldsymbol\theta=(A^TA)^{-1}A^T\mathbf y
}
$$

这就是线性参数最小二乘法的经典解。

## Part 2 最小二乘法

在实际测量中，许多待测参数 $X_1, X_2, \dots, X_t$ 无法直接测出，而是通过直接测量量 $Y_1, Y_2, \dots, Y_n$ 以及它们之间的函数测量方程 $Y_i = f_i(X_1, X_2, \dots, X_t)$ 来建立联系。

**测量方程**：
$$
Y_i = f_i(X_1, X_2, \dots, X_t),\quad (i = 1, 2, \dots, n)
$$
根据测量次数（方程个数 $n$）与未知参数个数 $t$ 的对比，分为两种情形：

> **当 $n = t$ 时**：方程个数等于未知数个数，属于封闭方程组，可以直接求解出未知数。   
>
> **当 $n > t$ 时**：观测值多于未知量，方程组呈现超定（冗余）状态。这种冗余不仅有利于通过统计方法减小随机误差，更需要引入最小二乘原理**来求得最优的参数估计值。 

### · 最小二乘原理核心思想

测量结果的最可信赖值应当使**残余误差平方和（或加权残余误差平方和）达到最小**。   

如果测量数据不存在系统误差，且彼此独立并服从正态分布，那么在一次观测中，实际出现的这一组测量值是所有可能结果里**发生概率最大的一组**。要使这个联合出现概率 $P$ 最大，其数学指数项中的误差平方和必须达到最小。

由于真值未知，我们用残差 $v_i$ 代替误差，从而转化为使残差平方和最小。

> [!important]
>
> **等精度测量**：
> $$
> \sum_{i=1}^{n} v_i^2 = \text{minimum}
> $$
> **不等精度测量**：（$p_i$ 为权）
> $$
> \sum_{i=1}^{n} p_i v_i^2 = \text{minimum}
> $$

### · 矩阵形式

为了方便在计算机和代数中进行系统化计算，线性参数的最小二乘处理通常采用矩阵形式来表达.

假设我们有 $n$ 个直接测量值（观测值记为 $l_1, l_2, \dots, l_n$），要用来估计 $t$ 个待测参数（记为 $x_1, x_2, \dots, x_t$，且 $n > t$）。 对于每一个线性测量方程，其实际观测值 $l_i$ 与理论模型计算值之间会存在一个偏差，这个偏差就是**残差 $v_i$**：
$$
v_i = l_i - (a_{i1}x_1 + a_{i2}x_2 + \dots + a_{it}x_t) \quad (i = 1, 2, \dots, n)
$$
展开写出全部 $n$ 个方程（即**残差方程组**）：
$$
\begin{aligned} v_1 &= l_1 - (a_{11}x_1 + a_{12}x_2 + \dots + a_{1t}x_t) \\\\
v_2 &= l_2 - (a_{21}x_1 + a_{22}x_2 + \dots + a_{2t}x_t) \\\\
&\;\;\vdots \\\\
v_n &= l_n - (a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nt}x_t) \end{aligned}
$$
为了用简洁的矩阵乘法代替一长串加减法，我们定义以下几个矩阵和列向量：   

> (1). **残差向量 $V$**（大小为 $n \times 1$）：
> $$
> V = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}
> $$
> (2). **观测向量 $L$**（大小为 $n \times 1$）：
> $$
> L = \begin{bmatrix} l_1 \\ l_2 \\ \vdots \\ l_n \end{bmatrix}
> $$
> (3). **参数估计值向量 $\hat{X}$**（大小为 $t \times 1$）：
> $$
> \hat{X} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_t \end{bmatrix}
> $$
> (4). **系数矩阵 $A$（又称设计矩阵）**（大小为 $n \times t$）：
> $$
> A = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1t} \\  a_{21} & a_{22} & \dots & a_{2t} \\  \vdots & \vdots & \ddots & \vdots \\  a_{n1} & a_{n2} & \dots & a_{nt} \end{bmatrix}
> $$

如果我们计算矩阵乘积 $A\hat{X}$（一个 $n \times t$ 的矩阵乘以一个 $t \times 1$ 的向量），其结果是一个 $n \times 1$ 的列向量：
$$
A\hat{X} = \begin{bmatrix} a_{11}x_1 + a_{12}x_2 + \dots + a_{1t}x_t \\  a_{21}x_1 + a_{22}x_2 + \dots + a_{2t}x_t \\  \vdots \\  a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nt}x_t \end{bmatrix}
$$
然后，用观测向量 $L$ 减去这个结果向量 ($L - A\hat{X}$)：
$$
L - A\hat{X} = \begin{bmatrix} l_1 \\ l_2 \\ \vdots \\ l_n \end{bmatrix} - \begin{bmatrix} a_{11}x_1 + \dots + a_{1t}x_t \\  a_{21}x_1 + \dots + a_{2t}x_t \\  \vdots \\  a_{n1}x_1 + \dots + a_{nt}x_t \end{bmatrix} = \begin{bmatrix} l_1 - (a_{11}x_1 + \dots + a_{1t}x_t) \\  l_2 - (a_{21}x_1 + \dots + a_{2t}x_t) \\  \vdots \\  l_n - (a_{n1}x_1 + \dots + a_{nt}x_t) \end{bmatrix}
$$
右边的每一行正好就是残差 $v_1, v_2, \dots, v_n$。而左边正好是残差向量 $V$。

因此，就得到了简洁优美的矩阵表达式：
$$
V = L - A\hat{X}
$$
同理我们可以把最小二乘准则我们可以推广到：

> [!important]
>
> **等精度测量形式**：
> $$
> V^T V = (L - A\hat{X})^T(L - A\hat{X}) = \text{minimum}
> $$
> 通过对该式求导并令其为零，后续即可推导出用于求解估计值的“正规方程”。
>
> **不等精度测量形式**：
> $$
> V^T PV = (L - A\hat{X})^T P (L - A\hat{X}) = \text{minimum}
> $$
> 其中 $P$ 为由各测量权构成的**权矩阵** 

## Part 2 正规方程

当通过最小二乘原理要求残差平方和 $\sum v_i^2$ 达到最小时，数学上的极值必要条件是：

**将残差平方和对每一个待测未知数 $x_j$ 求偏导数，并令其等于 0**.
$$
\frac{\partial \sum v_i^2}{\partial x_j} = 0
$$
残差平方和可以写为矩阵内积形式：
$$
\sum v_i^2 = V^T V = (L - A\hat{X})^T (L - A\hat{X}) = L^T L - 2\hat{X}^T A^T L + \hat{X}^T A^T A \hat{X}
$$
对未知数向量 $\hat{X}$ 求导并令其为 0
$$
\frac{\partial (V^T V)}{\partial \hat{X}} = 0 - 2 A^T L + 2 (A^T A) \hat{X} = -2 A^T L + 2 A^T A \hat{X}
$$
根据最小二乘原理，为了求得使残差平方和达到最小的估计值 $\hat{X}$，必须令其导数等于零向量：
$$
-2 A^T L + 2 A^T A \hat{X} = 0
$$
即可直接得到经典的**正规方程矩阵表达式**：
$$
A^T A \hat{X} = A^T L \quad \text{or} \quad C\hat{X} = A^T L
$$
其中 $C = A^T A$ 称为正规方阵。

从几何上看，这个方程本质上代表了**观测向量与残差正交**（即 $A^T V = 0$）。   

正规方阵 $C$ 满足如下特征：

> **主对角线元素全为正数**：它们对应各个未知数平方项的系数累加，物理意义上代表能量或权重的积累。   
>
> **严格对称性**：相对于主对角线对称分布的交叉项系数两两相等，即 $C^T = C$.

### · 等精度测量

$$
C\hat{X} = A^T L
$$

通过左乘矩阵 $C$ 的逆矩阵 $C^{-1}$，即可解得待测量的**无偏估计量**：   
$$
\hat{X} = C^{-1} A^T L
$$

> 无偏估计指在多次重复测量中，虽然单次算出的估计值会有所涨落，但其**数学期望（平均结果）严格等于被估计参数的真实值**（前提是测量数据中不存在未修正的系统误差）

### · 不等精度测量

在实际工程中，不同的测量仪器精度往往不同。

为了体现不同观测数据对结果的可信赖程度，最小二乘准则引入了**权 $p_i$**（权正比于精度的平方，即 $p_i = \dfrac{\sigma_0^2}{\sigma_i^2}$）。   

在残差平方和中加入权矩阵 $P$，使加权残差平方和 $V^T P V$ 达到最小。   

推导过程完全同上，只需在矩阵中夹入权矩阵 $P$ 即可：   
$$
A^T P A \hat{X} = A^T P L \implies \hat{X} = (A^T P A)^{-1} A^T P L
$$
其中 $C = A^T P A$ 依然是对称的正规方阵

### · 非线性参数

现实中的物理规律并不都是线性的（例如形如 $y = a e^{bx}$ 或复杂的多项式曲线）。

最小二乘法标准矩阵运算只适用于线性方程，因此必须进行**线性化**。  

我们为待测参数设定一组初始猜测值 $x_{10}, x_{20}, \dots, x_{t0}$。通常可以通过直接粗测，或者从现有的非线性方程组中选取最简单的 $t$ 个方程、令残差 $v_i = 0$ 粗略解出一组初始值。   

引入修正量 $\delta_r = x_r - x_{r0}$（代表真实参数与初始值之间的微小差值）。

将非线性函数在初始值处进行**一阶泰勒展开**：   
$$
f_i(x_1, \dots, x_t) \approx f_i(x_{10}, \dots, x_{t0}) + \left(\frac{\partial f_i}{\partial x_1}\right)_0 \delta_1 + \dots + \left(\frac{\partial f_i}{\partial x_t}\right)_0 \delta_t
$$
将常数项移到观测值一边得到新观测向量 $l_i' = l_i - f_i(x_{10}, \dots, x_{t0})$，并将偏导数值作为系数矩阵 $A$ 的元素。

此时，原本棘手的非线性问题就被完美转化为**以修正量 $\delta_r$ 为未知数的标准线性最小二乘问题**。

解出 $\delta_r$ 后，最终参数即为
$$
x_r = x_{r0} + \delta_r
$$

### · 算术平均值原理

假设对同一个物理量 $X$ 进行 $n$ 次不等精度测量，得到数据 $l_1, l_2, \dots, l_n$，对应的权分别为 $p_1, p_2, \dots, p_n$。

其误差方程极其简单：$v_i = l_i - x$。   

代入不等精度最小二乘准则（$\sum p_i v_i^2 = \text{min}$），对未知数 $x$ 求导并令其为 0：   
$$
\sum 2p_i(l_i - x)(-1) = 0 \implies \sum p_i l_i - x \sum p_i = 0
$$
解得：
$$
\bar{x} = \frac{\displaystyle\sum_{i=1}^{n} p_i l_i}{\displaystyle\sum_{i=1}^{n} p_i}
$$
如果各项是等精度测量（即 $p_i = 1$），上式直接退化为最普通的算术平均值
$$
\bar{x} = \frac{\sum l_i}{n}
$$
算术平均值原理是最小二乘原理的特例。   

## Part 3 精度估计

### · 测量数据的精度估计

在用最小二乘法算出参数估计值 $x_1, x_2, \dots, x_t$ 后，将其代回误差方程就能算出每个观测值的残余误差 $v_i$。

利用这些残差，我们可以反推出原始测量数据的离散程度（标准差 $\sigma$）。   

学习单变量的贝塞尔公式时，标准差的分母是 $n - 1$。而在多参数最小二乘法中，公式变成了：   
$$
\hat{\sigma}^2 = \frac{\sum_{i=1}^{n} v_i^2}{n - t} \implies \sigma = \sqrt{\frac{\sum_{i=1}^{n} v_i^2}{n - t}}
$$
**统计学由来（卡方分布）**：

>  可以严格证明，残差平方和与真值方差的比值
> $$
> \frac{\displaystyle\sum_{i=1}^{n} v_i^2}{\sigma^2}
> $$
> 服从自由度为 $(n - t)$ 的 $\chi^2$ 分布。
>
> 根据 $\chi^2$ 分布“数学期望等于自由度”的性质，有
> $$
> E\left\{\frac{\sum v_i^2}{\sigma^2}\right\} = n - t
> $$
> 移项后即证明了
> $$
> \frac{\sum v_i^2}{n - t}
> $$
> 是 $\sigma^2$ 的**无偏估计量**。  

**物理意义（自由度损耗）**：

> 一共有 $n$ 个观测数据，但为了解出 $t$ 个未知参数，正规方程施加了 $t$ 个约束条件，消耗掉了 $t$ 个自由度，因此剩余的独立自由度为 $n - t$。当只测 1 个参数（$t=1$）时，公式就退化回了经典的贝塞尔公式（分母 $n-1$）。

当各次测量精度不同时，引入权 $p_i$，公式扩展为：   
$$
\sigma = \sqrt{\frac{\displaystyle\sum_{i=1}^{n} p_i v_i^2}{n - t}}
$$
这里算出的 $\sigma$ 称为**单位权标准差**（即权 $p_i = 1$ 的那组基准观测值的标准差）。

如果想知道某次具体观测 $l_i$ 的标准差，只需根据权的定义 $p_i = \dfrac{\sigma^2}{\sigma_i^2}$ 反推 $\sigma_i = \dfrac{\sigma}{\sqrt{p_i}}$ 即可。

### · 最小二乘精度估计

算出了原始数据的标准差 $\sigma$ 还不够，工程上我们最终关心的是**求解出来的待测参数 $x_1, x_2, \dots, x_t$ 各自的标准差 $\sigma_{x1}, \sigma_{x2}, \dots, \sigma_{xt}$**。   

我们是如何算出参数估计值 $\hat{X}$ 的？是通过正规方程的逆矩阵与观测向量相乘：$\hat{X} = (A^T A)^{-1} A^T L$。 这说明：**每一个估计量 $x_j$ 本质上都是原始观测值 $l_1, l_2, \dots, l_n$ 的线性组合**：   
$$
x_j = h_{j1}l_1 + h_{j2}l_2 + \dots + h_{jn}l_n
$$
既然是线性组合，根据独立随机变量的方差传播律，参数 $x_j$ 的方差就等于各项系数平方与观测方差的乘积之和：
$$
\sigma_{xj}^2 = (h_{j1}^2 + h_{j2}^2 + \dots + h_{jn}^2)\sigma^2
$$
教材中通过引入**不定乘数** $d_{jr}$ 进行代数化简，巧妙地证明了这些组合系数的平方和正好等于正规方程系数矩阵的逆矩阵 $C^{-1}$ 对应位置上的**主对角线元素 $d_{jj}$**：
$$
h_{j1}^2 + h_{j2}^2 + \dots + h_{jn}^2 = d_{jj}
$$
因此，各参数估计量的方差与标准差公式极其简洁：
$$
\begin{aligned}
\sigma_{x1}^2 = d_{11}\sigma^2 &\implies \sigma_{x1} = \sigma\sqrt{d_{11}}\\\\
\sigma_{x2}^2 = d_{22}\sigma^2 &\implies \sigma_{x2} = \sigma\sqrt{d_{22}}\\\\
&\vdots\\\\
\sigma_{xt}^2 = d_{tt}\sigma^2 &\implies \sigma_{xt} = \sigma\sqrt{d_{tt}}
\end{aligned}
$$
回到精度测量上：

> [!important]
>
> **等精度测量**：
>
> > $d_{11}, d_{22}, \dots, d_{tt}$ 直接取自正规方阵逆矩阵 $(A^T A)^{-1}$ 的主对角线：
> > $$
> > (A^T A)^{-1} = \begin{bmatrix} d_{11} & d_{12} & \dots & d_{1t} \\ d_{21} & d_{22} & \dots & d_{2t} \\ \vdots & \vdots & \ddots & \vdots \\ d_{t1} & d_{t2} & \dots & d_{tt} \end{bmatrix}
> > $$
>
> **不等精度测量**：
>
> > 形式完全相同，只需将 $\sigma$ 替换为单位权标准差，而 $d_{11}, d_{22}, \dots, d_{tt}$ 取自 $(A^T P A)^{-1}$ 的主对角线。   

逆矩阵 $(A^T A)^{-1}$ 在现代统计学中被称为**协方差传播因子矩阵**，主对角线元素 $d_{jj}$ 是各参数方差的放大/缩小倍数，而非对角线元素 $d_{jk}$ 则反映了不同估计参数之间的相关性。

