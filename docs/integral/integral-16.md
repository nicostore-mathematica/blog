---
title: Chapter 16 多元函数微分
permalink: /integral/integral-16/
createTime: 2025/12/17 17:05:08
---

我们将研究多变量函数或映射的微分性质. 微分学的基本方法就是对函数或向量值的函数作线性化，用线性映射去作逼近. 大部分的内容和一元函数相应的内容平行，但有一些地方也有本质不同，在这些地方会着重强调说明. 

## Part 1 导数

### · 定义

**定义1 (方向导数)**. 

> 设 $D$ 为 $\mathbb{R}^n$ 中的开集，$f: D \to \mathbb{R}$ 为 $D$ 中定义的函数. 对于 $p \in D$，以及 $\mathbb{R}^n$ 中单位向量 $u$，极限
>
> $$
>  \lim_{t \to 0} \frac{f(p + tu) - f(p)}{t} 
> $$
>
> 如果存在，则称 $f$ 在 $p$ 处沿方向 $u$ 有方向导数，上述极限记为 $\dfrac{\partial f}{\partial u}(p)$，称为 $f$ 沿 $u$ 的方向导数. 

> [!important]
>
> (1) 方向导数就是一元函数 $\varphi(t) = f(p + tu)$ 在 $t = 0$ 处的导数. 特别地，当 $u = e_i = (0, \cdots, 0, 1, 0, \cdots, 0)$（第 $i$ 个位置为 1 的单位向量）时，又将 $\frac{\partial f}{\partial u}(p)$ 记为 $\frac{\partial f}{\partial x_i}(p)$，称为 $f$ 的第 $i$ 个偏导数. 按定义，有
>
> $$
>  \frac{\partial f}{\partial x_i}(p) = \lim_{t \to 0} \frac{f(p_1, \cdots, p_{i-1}, p_i + t, p_{i+1}, \cdots, p_n) - f(p_1, \cdots, p_n)}{t}. 
> $$
>
> (2) 偏导数 $\frac{\partial f}{\partial x_i}$ 又记为 $f'_{x_i}$ 或 $f_{x_i}$. 如果 $f'_{x_i} = \frac{\partial f}{\partial x_i}$ 仍然可求偏导数，则记 $f''_{y_i x_i} = \dfrac{\partial}{\partial y_i} \left( \dfrac{\partial f}{\partial x_i} \right)$，$f''_{x_i y_i} = \dfrac{\partial}{\partial x_i} \left( \frac{\partial f}{\partial y_i} \right)$，称为 2 阶偏导数. 类似地可以定义高阶偏导数. 
>
> 如果 $f$ 存在直到 $k$ 阶的连续偏导数，则称 $f$ 为 $C^k$ 函数. 我们也使用形如这样的记号：
> $$
> \frac{\partial^2 f}{\partial x_i^2} = \frac{\partial}{\partial x_i} \left( \frac{\partial f}{\partial x_i} \right), \quad \frac{\partial^2 f}{\partial x_i \partial y_i} = \frac{\partial}{\partial x_i} \left( \frac{\partial f}{\partial y_i} \right), \cdots.
> $$

/example/  设 $(x_0, y_0, z_0) \in \mathbb{R}^3$，求函数的偏导数

$$
f(x, y, z) = \left[ (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 \right]^{-\frac{1}{2}}
$$

> 记
>
> $$
>  r = \left[ (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 \right]^{\frac{1}{2}} 
> $$
>
> 则
>
> $$
>  \frac{\partial f}{\partial x} = -\frac{1}{r^2} \cdot \frac{\partial r}{\partial x} = -\frac{1}{r^2} \cdot \frac{x - x_0}{r} = -\frac{x - x_0}{r^3}. 
> $$
>
> 同理，
>
> $$
>  \frac{\partial f}{\partial y} = -\frac{y - y_0}{r^3}, \quad \frac{\partial f}{\partial z} = -\frac{z - z_0}{r^3}. 
> $$
>

和一元函数不同的是，偏导数的存在不能保证多元函数的连续性，这是因为偏导数只反映函数沿特定方向的性质. 

> /example/
>
> 设
>
> $$
> f(x, y) = 
>  \begin{cases} 
>  0, & \text{when } x \cdot y = 0, \\ 
>  1, & \text{when } x \cdot y \ne 0, 
>  \end{cases}
> $$
>
> 则
>
> $$
> \begin{aligned}
> \frac{\partial f}{\partial x}(0, 0) &= \lim_{x \to 0} \frac{f(x, 0) - f(0, 0)}{x} = 0, \\\\
>  \frac{\partial f}{\partial y}(0, 0) &= \lim_{y \to 0} \frac{f(0, y) - f(0, 0)}{y} = 0.
>  \end{aligned}
> $$
>
> 显然，$f$ 在 $(0, 0)$ 处不连续. 

**定理1 (复合求导)**. 设 $f$ 如前，$x^0 \in D$. 假设 $f'_{x_i}$ ($1 \le i \le n$) 在 $x^0$ 处连续，则

(1) $f$ 在 $x^0$ 处连续；

(2) 如果 $x_i = x_i(t)$ 在 $t_0$ 处可导，$x^0 = (x_1(t_0), \cdots, x_n(t_0))$，则 $f(x(t))$ 在 $t = t_0$ 处可导，且

$$
\left. \frac{df(x(t))}{dt} \right|_{t = t_0} = \sum_{i=1}^n \frac{\partial f}{\partial x_i}(x(t_0)) \cdot \frac{dx_i}{dt}(t_0).
$$

> (1) 利用微分中值定理，有
>
> $$
> \begin{aligned}
> f(x) - f(x^0) &= \sum_{i=1}^n \left[ f(x_1^0, \cdots, x_{i-1}^0, x_i, \cdots, x_n) - f(x_1^0, \cdots, x_{i-1}^0, x_i^0, x_{i+1}^0, \cdots, x_n) \right] \\\\
>  &= \sum_{i=1}^n f'_{x_i}(x_1^0, \cdots, x_{i-1}^0, \xi_i, x_{i+1}, \cdots, x_n) \cdot (x_i - x_i^0),
>  \end{aligned}
> $$
>
> 当 $x \to x^0$ 时，$\xi_i \to x_i^0$，由 $f'_{x_i}$ 在 $x^0$ 处连续知 $\displaystyle\lim_{x \to x^0} (f(x) - f(x^0)) = 0$. 
>
> (2) 由 (1) 的证明，有
>
> $$
> \begin{aligned}
> \left. \frac{df}{dt} \right|_{t = t_0} &= \lim_{t \to t_0} \frac{f(x(t)) - f(x(t_0))}{t - t_0} \\\\ 
>  &= \lim_{t \to t_0} \sum_{i=1}^n f'_{x_i}(x_1^0, \cdots, x_{i-1}^0, \xi_i, x_{i+1}, \cdots, x_n) \cdot \frac{x(t) - x_i(t_0)}{t - t_0} \\\\
>  &= \sum_{i=1}^n f'_{x_i}(x^0) \cdot x'_i(t_0).
>  \end{aligned}
> $$
>
> 这就证明了定理. 

**推论2**. 在定理的条件下，如果 $u = \sum_{i=1}^n u_i \cdot e_i = (u_1, u_2, \cdots, u_n)$，则
$$
\frac{\partial f}{\partial u}(p) = \left. \frac{d}{dt} \right|_{t=0} f(p + tu) = \sum_{i=1}^n \frac{\partial f}{\partial x_i}(p) \cdot u_i.
$$

**定理3 (求导次序的可交换性)**. 设 $f: D \to \mathbb{R}$ 为二元函数，$(x_0, y_0) \in D$. 如果 $f''_{xy}$ 和 $f''_{yx}$ 在 $(x_0, y_0)$ 处连续，则
$$
f''_{xy}(x_0, y_0) = f''_{yx}(x_0, y_0).
$$

> 对于充分小的 $k \ne 0$，$h \ne 0$ 分别考虑函数
>
> $$
> \varphi(y) = f(x_0 + h, y) - f(x_0, y), \\ 
> \psi(x) = f(x, y_0 + k) - f(x, y_0). 
> $$
>
> 由微分中值定理，有
>
> $$
> \begin{aligned}
> \varphi(y_0 + k) - \varphi(y_0) &= \varphi'_y(y_0 + \theta_1 k) k \quad (0 < \theta_1 < 1) \\\\
> &= [f'_y(x_0 + h, y_0 + \theta_1 k) - f'_y(x_0, y_0 + \theta_1 k)] k \\\\
> &= f''_{xy}(x_0 + \theta_2 h, y_0 + \theta_1 k) h k. \quad (0 < \theta_2 < 1)
> \end{aligned}
> $$
>
> 同理，
>
> $$
> \psi(x_0 + h) - \psi(x_0) = f''_{yx}(x_0 + \theta_3 h, y_0 + \theta_4 k) h k, \quad (0 < \theta_3, \theta_4 < 1). 
> $$
>
> 易见，
>
> $$
> \varphi(y_0 + k) - \varphi(y_0) = \psi(x_0 + h) - \psi(x_0), 
> $$
>
> 故有
>
> $$
> f''_{xy}(x_0 + \theta_2 h, y_0 + \theta_1 k) = f''_{yx}(x_0 + \theta_3 h, y_0 + \theta_4 k). 
> $$
>
> 令 $k, h \to 0$，由 $f''_{xy},\ f''_{yx}$ 在 $(x_0, y_0)$ 处连续即得欲证等式. 

**推论4**. 多元函数的各阶偏导数如果连续，则其值与求导次序无关. 

### · 几何应用

设 $\sigma: [\alpha, \beta] \to \mathbb{R}^n$ 为连续映射，称 $\sigma$ 为 $\mathbb{R}^n$ 中的一条连续曲线. 记

$$
 \sigma(t) = (x_1(t), \cdots, x_n(t)), \quad t \in [\alpha, \beta]. 
$$

如果 $x_i(t)$ ($1 \le i \le n$) 在 $t = t_0$ 处均可导，则称 $\sigma$ 在 $t_0$ 处可导，记

$$
 \sigma'(t_0) = \frac{d\sigma}{dt}(t_0) = \left. \frac{d\sigma}{dt} \right|_{t = t_0} = (x'_1(t_0), \cdots, x'_n(t_0)), 
$$

称 $\sigma'(t_0)$ 为 $\sigma$ 在 $t_0$ 处的切向量. 

当 $\sigma'(t_0) \ne 0$ 时，称 $\{ \sigma(t_0) + \sigma'(t_0) u \mid u \in \mathbb{R} \}$ 为 $\sigma$ 在 $t_0$ 处的切线，其方程可写为 $p - \sigma(t_0) = u \cdot \sigma'(t_0)$，或

$$
 \frac{x - x_0}{x'_1(t_0)} = \frac{y - y_0}{x'_2(t_0)} = \frac{z - z_0}{x'_3(t_0)}. 
$$

经过 $\sigma(t_0)$ 且与切线正交的超平面称为法面，其方程为

$$
(q - \sigma(t_0)) \cdot \sigma'(t_0) = 0.
$$
/example/

> 设 $f$ 为一元可微函数，令
>
> $$
>  \sigma(t) = (t, f(t)), 
> $$
>
> 则 $\sigma'(t_0) = (1, f'(t_0))$，$\sigma$ 在 $t_0$ 处切线方程为
>
> $$
>  \frac{x - t_0}{1} = \frac{y - f(t_0)}{f'(t_0)}, 
> $$
>
> 即
>
> $$
>  y = f(t_0) + f'(t_0)(x - t_0). 
> $$
>
> 这也就是一元函数图像的切线. 

/example/  求螺旋线的切线和法面方程

$$
 \sigma(t) = (a \cos t, a \sin t, t), \quad t \in \mathbb{R} 
$$

> 在 $t = t_0$ 处，$\sigma'(t_0) = (-a \sin t_0, a \cos t_0, 1)$，故切线方程为
>
> $$
>  \frac{x - a \cos t_0}{-a \sin t_0} = \frac{y - a \sin t_0}{a \cos t_0} = \frac{z - t_0}{1}, 
> $$
>
> 法面方程化简后为 $-x a \sin t_0 + y a \cos t_0 + z - t_0 = 0$. 
>
> 设 $D$ 为 $\mathbb{R}^m$ 中的开集，我们称连续映射 $r: D \to \mathbb{R}^n$ ($n > m$) 为 $\mathbb{R}^n$ 中的一个参数曲面. 设 $u^0 = (u_1^0, \cdots, u_m^0) \in D$，则
>
> $$
>  u \mapsto r(u_1^0, \cdots, u_{i-1}^0, u, u_{i+1}^0, \cdots, u_m^0) 
> $$
>
> 为 $\mathbb{R}^n$ 中曲线，称为参数曲面上的 $u_i$ 曲线. 如果 $u_i$ 曲线在 $u_i^0$ 处可导，则记
>
> $$
>  \frac{\partial r}{\partial u_i}(u^0) = r_{u_i}(u^0) = r'_{u_i}(u^0), 
> $$
>
> 它是该曲线在 $u^0$ 处的切向量. 如果 $\{ r'_{u_i}(u^0) \mid 1 \le i \le m \}$ 线性无关（此时称 $u^0$ 为正则点），则称由这些切向量张成的、经过 $r(u^0)$ 的子线性空间为切空间，切空间的正交补称为法空间，法空间中的向量称为法向量. 
>
> 对于 $\mathbb{R}^3$ 中的曲面，设其参数表示为
>
> $$
>  r(u, v) = (x(u, v), y(u, v), z(u, v)), 
> $$
>
> 则其切向量为
>
> $$
> \begin{aligned}
> r'_u(u_0, v_0) &= (x'_u(u_0, v_0), y'_u(u_0, v_0), z'_u(u_0, v_0)), \\\\
>  r'_v(u_0, v_0) &= (x'_v(u_0, v_0), y'_v(u_0, v_0), z'_v(u_0, v_0)).
>  \end{aligned}
> $$
>
> 如果 $r'_u(u_0, v_0)$，$r'_v(u_0, v_0)$ 线性无关，则
>
> $$
> \begin{aligned}
> \vec{n} &= r'_u(u_0, v_0) \times r'_v(u_0, v_0) \\\\
>  &= (y'_u z'_v - z'_u y'_v, \; z'_u x'_v - x'_u z'_v, \; x'_u y'_v - y'_u x'_v) \ne 0,
> \end{aligned}
> $$
>
> $\vec{n}$ 为法向量，从而曲面的切平面方程为
>
> $$
>  (p - r(u_0, v_0)) \cdot \vec{n} = 0 
> $$
>
> 或改写为
>
> $$
> \begin{vmatrix} 
>  x - x(u_0, v_0) & y - y(u_0, v_0) & z - z(u_0, v_0) \\\\
>  x'_u(u_0, v_0) & y'_u(u_0, v_0) & z'_u(u_0, v_0) \\\\ 
>  x'_v(u_0, v_0) & y'_v(u_0, v_0) & z'_v(u_0, v_0) 
>  \end{vmatrix} = 0.
> $$

/example/  求球面 $S^2 = \{ (x, y, z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 = 1 \}$ 的切面. 

> 球面可写成参数曲面
>
> $$
> x = \sin \theta \cos \varphi, \; y = \sin \theta \sin \varphi, \; z = \cos \theta, 
> $$
>
> 其中 $0 \le \theta \le \pi$，$0 \le \varphi \le 2\pi$. 其法向量为
>
> $$
> \begin{aligned}
> \vec{n} &= (\cos \theta \cos \varphi, \cos \theta \sin \varphi, -\sin \theta) \times (-\sin \theta \sin \varphi, \sin \theta \cos \varphi, 0) \\\\ 
> &= \sin \theta \cdot (x, y, z),
> \end{aligned}
> $$
>
> 故球面在 $(x_0, y_0, z_0)$ 处切平面方程为
>
> $$
> (x - x_0) \cdot x_0 + (y - y_0) \cdot y_0 + (z - z_0) \cdot z_0 = 0. 
> $$
>
> 一般地，当 $m = n - 1$ 时，称参数曲面 $r: D \to \mathbb{R}^n$ 为超曲面. 如果 $r$ 表示为
>
> $$
> r(u) = r(u_1, \cdots, u_{n-1}) = (x_1(u_1, \cdots, u_{n-1}), \cdots, x_n(u_1, \cdots, u_{n-1})), 
> $$
>
> 在正则点 $u^0$ 处，曲面的 $n - 1$ 个切向量为
>
> $$
> r'_{u_i}(u^0) = \left( \frac{\partial x_1}{\partial u_i}(u^0), \cdots, \frac{\partial x_n}{\partial u_i}(u^0) \right), \quad i = 1, \cdots, n - 1. 
> $$
>
> 记 $\vec{N} = (N_1, \cdots, N_n)$，其中
>
> $$
> N_i = (-1)^{i-1} \frac{\partial (x_1, \cdots, x_{i-1}, x_{i+1} \cdots, x_n)}{\partial (u_1, \cdots, u_{n-1})}(u^0),
> $$
>
> 这里我们采用了下面的记号
>
> $$
> \frac{\partial (x_1, \cdots, x_{i-1}, x_{i+1} \cdots, x_n)}{\partial (u_1, \cdots, u_{n-1})}(u^0) = \det 
> \begin{pmatrix} 
> \dfrac{\partial x_1}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_1}{\partial u_{n-1}}(u^0) \\ 
> \vdots & \ddots & \vdots \\
> \dfrac{\partial x_{i-1}}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_{i-1}}{\partial u_{n-1}}(u^0) \\\\
> \dfrac{\partial x_{i+1}}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_{i+1}}{\partial u_{n-1}}(u^0) \\ 
> \vdots & \ddots & \vdots \\ 
> \dfrac{\partial x_n}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_n}{\partial u_{n-1}}(u^0) 
> \end{pmatrix}.
> $$
>
> 根据矩阵行列式的性质，$\vec{N}$ 与 $r'_{u_i}(u^0)$ ($1 \le i \le n - 1$) 均正交，即 $\vec{N}$ 是曲面的法向量. 

## Part 2 映射的微分

回忆一下，对于一元函数而言，可微是指该函数可以被线性函数一阶逼近. 我们也可以利用线性化的思想来研究多元函数. 

设 $D \subset \mathbb{R}^n$ 为开集，向量值函数 $f: D \to \mathbb{R}^m$ 写成分量形式为

$$
f(x_1, \cdots, x_n) = (f_1(x_1, \cdots, x_n), \cdots, f_m(x_1, \cdots, x_n)),
$$

为方便起见，在下面的内容中欧氏空间里的向量有时以列向量来表示. 

### · 微分

**定义1 (微分)**. 

> 设 $f$ 如上，$x^0 = (x_1^0, \cdots, x_n^0) \in D$. 如果存在 $m \times n$ 阶的矩阵 $A = (a_{ij})_{m \times n}$，使得对于 $x^0$ 附近的点 $x$，有
>
> $$
> \|f(x) - [f(x^0) + A \cdot (x - x^0)]\| = o(\|x - x^0\|), \quad (x \to x^0)
> $$
>
> 则称 $f$ 在 $x^0$ 处可微，线性映射
>
> $$
> df(x^0): \mathbb{R}^n \to \mathbb{R}^m \\
> v \mapsto A \cdot v
> $$
>
> 称为 $f$ 在 $x^0$ 处的微分. 

**命题1** (可微 $\Rightarrow$ 可导). 如果 $f: D \to \mathbb{R}^m$ 在 $x^0$ 处可微，则其分量 $f_i$ ($1 \le i \le m$) 在 $x^0$ 处存在方向导数，并且
$$
A = \left( \frac{\partial f_i}{\partial x_j}(x^0) \right)_{m \times n}.
$$

> 从微分的定义可以看出，如果 $f$ 在 $x^0$ 处可微，则 $f$ 在 $x^0$ 处连续. 下面以 $m = 1$ 为例说明方向导数的存在性. 
>
> 为此，取单位向量 $u$，由定义，我们有
>
> $$
> \begin{aligned}
> f(x^0 + tu) - f(x^0) &= A \cdot (x^0 + tu - x^0) + o(\|x^0 + tu - x^0\|) \\\\
> &= tA \cdot u + o(|t|),
> \end{aligned}
> $$
>
> 这说明 $\frac{\partial f}{\partial u}(x^0) = A \cdot u$，即方向导数存在. 特别地，
>
> $$
> \frac{\partial f}{\partial x_i}(x^0) = A \cdot e_i, \quad A = \left( \frac{\partial f}{\partial x_1}(x^0), \cdots, \frac{\partial f}{\partial x_n}(x^0) \right).
> $$
>
> 这就证明了命题. 

如果 $f_i$ ($1 \le i \le m$) 的偏导数均存在，则记 $Jf = \left( \frac{\partial f_i}{\partial x_j} \right)_{m \times n}$，称为 $f$ 的 Jacobian 矩阵. 

当 $m = 1$ 时，又记 $Jf$ 为 $\nabla f$，称为 $f$ 的梯度. 

$Jf$ 在每一点的值构成一个映射 $Jf: D \to \mathbb{R}^{mn}$，这里我们将 $m \times n$ 阶矩阵视为 $\mathbb{R}^{mn}$ 中的点. 

**定理2 (可微的充分条件)**. 如果 $Jf$ 在 $D$ 中存在，且它作为映射在 $x^0$ 处连续，则 $f$ 在 $x^0$ 处可微. 

> 仍以 $m = 1$ 为例来证明. 由条件，$f'_{x_i}$ 在 $x^0$ 处连续，$i = 1, 2, \cdots, n$. 根据微分中值定理，有
>
> $$
> \begin{aligned}
> f(x) - f(x^0) &= \sum_{i=1}^n \left[ f(x_1^0, \cdots, x_{i-1}^0, x_i, x_{i+1}, \cdots, x_n) - f(x_1^0, \cdots, x_i^0, x_{i+1}, \cdots, x_n) \right] \\\\
> &= \sum_{i=1}^n f'_{x_i}(x_1^0, \cdots, x_{i-1}^0, x_i^0 + \theta_i(x_i - x_i^0), x_{i+1}, \cdots, x_n) \cdot (x_i - x_i^0) \\\\
> &= \sum_{i=1}^n f'_{x_i}(x^0) \cdot (x_i - x_i^0) + \sum_{i=1}^n \alpha_i \cdot (x_i - x_i^0),
> \end{aligned}
> $$
>
> 其中，当 $x_i \to x_i^0$ 时
>
> $$
> \alpha_i = f'_{x_i}(x_1^0, \cdots, x_{i-1}^0, x_i^0 + \theta_i(x_i - x_i^0), x_{i+1}, \cdots, x_n) - f'_{x_i}(x_1^0, \cdots, x_n^0) \to 0,
> $$
>
> 从而
>
> $$
> \begin{aligned}
> \left\| f(x) - \left[ f(x^0) + \sum_{i=1}^n f'_{x_i}(x^0) \cdot (x_i - x_i^0) \right] \right\| &\le \left( \sum_{i=1}^n \alpha_i^2 \right)^{\frac{1}{2}} \cdot \|x - x^0\| \\\\
> &= o(\|x - x^0\|),
> \end{aligned}
> $$
>
> 即 $f$ 在 $x^0$ 处可微. 

如果我们把 $m \times n$ 的矩阵视为 $\mathbb{R}^{mn}$ 中的点，则矩阵也可定义自然的范数. 即，如果 $A = (a_{ij})_{m \times n}$，则其范数定义为

$$
\|A\| = \left[ \sum_{j=1}^n \sum_{i=1}^m a_{ij}^2 \right]^{\frac{1}{2}}.
$$

由 Schwarz 不等式可得

$$
\|A \cdot v\| \le \|A\| \cdot \|v\|, \quad \forall v \in \mathbb{R}^n.
$$

### · 链式法则

**定理3 (复合求导)**. 设 $\Delta \subset \mathbb{R}^l$ 为开集，$D \subset \mathbb{R}^m$ 为开集，$g: \Delta \to D$ 及 $f: D \to \mathbb{R}^n$ 为映射. 如果 $g$ 在 $u^0 \in \Delta$ 处可微，$f$ 在 $x^0 = g(u^0)$ 处可微，则复合映射 $h = f \circ g: \Delta \to \mathbb{R}^n$ 在 $u^0$ 处可微，且
$$
Jh(u^0) = Jf(x^0) \cdot Jg(u^0).
$$

> 因为 $g$ 在 $u^0$ 处可微，故
>
> $$
> g(u) - g(u^0) = Jg(u^0) \cdot (u - u^0) + R_g(u, u^0), \tag{1}
> $$
>
> 其中 $R_g(u, u^0) = o(\|u - u^0\|)$. 同理，因为 $f$ 在 $x^0 = g(u^0)$ 处可微，故
>
> $$
> f(x) - f(x^0) = Jf(x^0) \cdot (x - x^0) + R_f(x, x^0), \tag{2}
> $$
>
> 其中 $R_f(x, x^0) = o(\|x - x^0\|)$. 
>
> 由 (1) 知，当 $u \to u^0$ 时，$g(u) \to g(u^0) = x^0$. 以 $x = g(u)$ 代入 (2)，得
>
> $$
> \begin{aligned}
> f \circ g(u) - f \circ g(u^0) &= Jf(x^0)(g(u) - g(u^0)) + R_f(g(u), g(u^0)) \\\\
> &= Jf(x^0) \cdot Jg(u^0) \cdot (u - u^0) + R_{f \circ g}(u, u^0),
> \end{aligned} \tag{3}
> $$
>
> 其中
>
> $$
> R_{f \circ g}(u, u^0) = Jf(x^0) \cdot R_g(u, u^0) + R_f(g(u), g(u^0)),
> $$
>
> 我们有如下估计
>
> $$
> \begin{aligned}
> \|R_{f \circ g}(u, u^0)\| &\le \|Jf(x^0) \cdot R_g(u, u^0)\| + \|R_f(g(u), g(u^0)\| \\\\
> &\le \|Jf(x^0)\| \cdot \|R_g(u, u^0)\| + o(\|g(u) - g(u^0)\|) \\\\
> &= o(\|u - u^0\|) + o(O(\|u - u^0\|)) = o(\|u - u^0\|).
> \end{aligned}
> $$
>
> 由 (3) 及微分的定义知 $f \circ g$ 在 $u^0$ 处可微，且 $J(f \circ g)(u^0) = Jf(x^0) \cdot Jg(u^0)$. 
>
> 如果将 $f$, $g$ 分别表示成分量形式
>
> $$
> \begin{aligned}
> y_i = f_i(x_1, \cdots, x_m), \quad i = 1, \cdots, n, \\\\
> x_j = g_j(u_1, \cdots, u_l), \quad j = 1, \cdots, m.
> \end{aligned}
> $$
>
> 则 $J(f \circ g)(u^0) = Jf(x^0) \cdot Jg(u^0)$ 写成矩阵的形式为
>
> $$
> \begin{pmatrix}
> \dfrac{\partial y_1}{\partial u_1}(u^0) & \cdots & \dfrac{\partial y_1}{\partial u_l}(u^0) \\
> \vdots & \ddots & \vdots \\
> \dfrac{\partial y_n}{\partial u_1}(u^0) & \cdots & \dfrac{\partial y_n}{\partial u_l}(u^0)
> \end{pmatrix}_{n \times l} \\
> = 
> \begin{pmatrix}
> \dfrac{\partial y_1}{\partial x_1}(x^0) & \cdots & \dfrac{\partial y_1}{\partial x_m}(x^0) \\
> \vdots & \ddots & \vdots \\
> \dfrac{\partial y_n}{\partial x_1}(x^0) & \cdots & \dfrac{\partial y_n}{\partial x_m}(x^0)
> \end{pmatrix}_{n \times m} \cdot
> \begin{pmatrix}
> \dfrac{\partial x_1}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_1}{\partial u_l}(u^0) \\
> \vdots & \ddots & \vdots \\
> \dfrac{\partial x_m}{\partial u_1}(u^0) & \cdots & \dfrac{\partial x_m}{\partial u_l}(u^0)
> \end{pmatrix}_{m \times l},
> $$
>
> 即
>
> $$
> \frac{\partial y_i}{\partial u_j}(u^0) = \sum_{s=1}^m \frac{\partial y_i}{\partial x_s}(g(u^0)) \cdot \frac{\partial x_s}{\partial u_j}(u^0).
> $$
>
> 这也就是所谓的链规则. 

设 $u = f(x, y)$ 可微，$x = r \cos \theta$, $y = r \sin \theta$，证明

$$
\left( \frac{\partial u}{\partial x} \right)^2 + \left( \frac{\partial u}{\partial y} \right)^2 = \left( \frac{\partial u}{\partial r} \right)^2 + \frac{1}{r^2} \left( \frac{\partial u}{\partial \theta} \right)^2.
$$

> 由链规则，
>
> $$
> \begin{aligned}
> \frac{\partial u}{\partial r} &= \frac{\partial u}{\partial x} \cdot \frac{\partial x}{\partial r} + \frac{\partial u}{\partial y} \cdot \frac{\partial y}{\partial r} = \frac{\partial u}{\partial x} \cos \theta + \frac{\partial u}{\partial y} \sin \theta \\\\
> \frac{\partial u}{\partial \theta} &= \frac{\partial u}{\partial x} \cdot \frac{\partial x}{\partial \theta} + \frac{\partial u}{\partial y} \cdot \frac{\partial y}{\partial \theta} = -r \frac{\partial u}{\partial x} \sin \theta + r \frac{\partial u}{\partial y} \cos \theta
> \end{aligned}
> $$
>
> 这说明
>
> $$
> \begin{aligned}
> \left( \frac{\partial u}{\partial r} \right)^2 + \frac{1}{r^2} \left( \frac{\partial u}{\partial \theta} \right)^2 &= \left( \frac{\partial u}{\partial x} \cos \theta + \frac{\partial u}{\partial y} \sin \theta \right)^2 + \left( -\frac{\partial u}{\partial x} \sin \theta + \frac{\partial u}{\partial y} \cos \theta \right)^2 \\\\
> &= \left( \frac{\partial u}{\partial x} \right)^2 + \left( \frac{\partial u}{\partial y} \right)^2.
> \end{aligned}
> $$

设 $z = f(u, v, w)$, $v = \varphi(u, s)$, $s = \psi(u, w)$，求 $\frac{\partial z}{\partial u}$, $\frac{\partial z}{\partial w}$. 

> 按照定义，
>
> $$
> z = f(u, v, w) = f(u, \varphi(u, s), w) = f(u, \varphi(u, \psi(u, w)), w).
> $$
>
> 由链规则，
>
> $$
> \begin{aligned}
> \frac{\partial z}{\partial u} &= \frac{\partial f}{\partial u} + \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial u} = \frac{\partial f}{\partial u} + \frac{\partial f}{\partial v} \cdot \left( \frac{\partial \varphi}{\partial u} + \frac{\partial \varphi}{\partial s} \cdot \frac{\partial s}{\partial u} \right) \\\\
> &= \frac{\partial f}{\partial u} + \frac{\partial f}{\partial v} \cdot \frac{\partial \varphi}{\partial u} + \frac{\partial f}{\partial v} \cdot \frac{\partial \varphi}{\partial s} \cdot \frac{\partial \psi}{\partial u} \\\\
> \frac{\partial z}{\partial w} &= \frac{\partial f}{\partial w} + \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial w} = \frac{\partial f}{\partial w} + \frac{\partial f}{\partial v} \left( \frac{\partial \varphi}{\partial s} \cdot \frac{\partial s}{\partial w} \right) \\\\
> &= \frac{\partial f}{\partial w} + \frac{\partial f}{\partial v} \cdot \frac{\partial \varphi}{\partial s} \cdot \frac{\partial \psi}{\partial w}.
> \end{aligned}
> $$

### · 形式微分

最后，我们简单地介绍全微分（形式微分）的概念. 设 $f: D \to \mathbb{R}$ 为可微的多元函数，由定义，$f$ 在 $x$ 处的微分 $df(x)$ 是一个线性映射
$$
\begin{aligned}
&df(x): \mathbb{R}^m \to \mathbb{R} \\\\
&v \mapsto \sum_{i=1}^m \frac{\partial f}{\partial x_i} \cdot v_i.
\end{aligned}
$$

我们将映射 $x \mapsto df(x)$ 称为 $f$ 的全微分，记为 $df$. 由于

$$
d(\lambda f + \mu g)(x) = \lambda df(x) + \mu dg(x), \quad \forall \lambda, \mu \in \mathbb{R},
$$

因此，全微分之间也可以定义加法和数乘运算，在这个意义下，有

$$
df = \sum_{i=1}^n \frac{\partial f}{\partial x_i} \cdot dx^i \quad (*)
$$

$$
\begin{aligned}
&d(\lambda f + \mu g) = \lambda df + \mu dg, \\\\
&d(f \cdot g) = f dg + g df, \\\\
&d\left( \frac{f}{g} \right) = \frac{g df - f dg}{g^2} \quad (g \ne 0).
\end{aligned}
$$

如果将 (*) 写成矩阵形式：

$$
df = Jf \cdot (dx_1, \cdots, dx_n)^T,
$$

则复合映射的链规则可写为

$$
\begin{aligned}
d(f \circ g) &= J(f \circ g) \cdot (du_1, \cdots, du_m)^T \\\\
&= Jf(x) \cdot Jg(u)(du_1, \cdots, du_m)^T \quad (x = g(u)) \\\\
&= Jf(g(u)) \cdot (dg_1, \cdots, dg_n)^T.
\end{aligned}
$$

这个等式称为全微分的形式不变性. 



