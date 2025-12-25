---
title: Chapter 20 曲面曲线积分
permalink: /integral/integral-20/
createTime: 2025/12/25 14:47:34
---

## Part 1 曲线积分

### · 第一型曲线积分

对于平面曲线 $\sigma(t) = (x(t), y(t))$，如果 $x(t), y(t)$ 是关于 $t$ 的连续可微函数，则利用折线逼近曲线的办法，我们定义了 $\sigma$ 的长度为

$$
L(\sigma) = \int_\alpha^\beta \sqrt{[x'(t)]^2 + [y'(t)]^2} dt.
$$

现在考虑一般的情形. 映射 $\sigma: [\alpha, \beta] \to \mathbb{R}^n$ 称为一条参数曲线，我们仍然用折线逼近曲线的办法定义 $\sigma$ 的长度. 

为此，任取 $[\alpha, \beta]$ 的分割
$$
\pi: \alpha = t_0 < t_1 < t_2 < \cdots < t_m = \beta,
$$

相继用直线段连接曲线上的分点 $\sigma(t_{i-1})$ 与 $\sigma(t_i)$ ($1 \leq i \leq m$)，得到的折线的长度为

$$
L(\sigma; \pi) = \sum_{i=1}^m \|\sigma(t_i) - \sigma(t_{i-1})\|.
$$

如果这些折线的长度有上界，即

$$
\sup_\pi \sum_{i=1}^m \|\sigma(t_i) - \sigma(t_{i-1})\| < +\infty,
$$

则称 $\sigma$ 是可求长曲线，其长度定义为

$$
L(\sigma) = \sup_\pi \sum_{i=1}^m \|\sigma(t_i) - \sigma(t_{i-1})\|.
$$

利用三角不等式我们知道当区间 $[\alpha, \beta]$ 的分割加细时，折线的长度单调递增. 如果 $\sigma(t)$ 的每一个分量均为连续可微函数，则由第七章第一节的推导知 $\sigma$ 是可求长的，且长度可以表示为积分

$$
L(\sigma) = \int_\alpha^\beta \|\sigma'(t)\| dt.
$$

如果曲线不连续，则我们这里给出的曲线长度定义和直观上的长度观念不是一回事. 

例如，考虑这样的曲线：当 $t = 0$ 时 $(x(0), y(0)) = (0, 0)$；当 $0 < t \leq 1$ 时，$(x(t), y(t)) = (t, 1)$. 按我们的定义，此曲线长度为 $2$！

从定义可以得到可求长曲线的下列性质：

> - 如果 $\sigma$ 为可求长曲线，则对任意 $[\gamma, \delta] \subset [\alpha, \beta]$，$\sigma|_{[\gamma, \delta]}$ 也是可求长的；
> - 如果 $\sigma$ 为可求长曲线，则对任意 $\gamma \in [\alpha, \beta]$，有
>
> $$
> L(\sigma) = L(\sigma|_{[\alpha, \gamma)}) + L(\sigma|_{[\gamma, \beta]}).
> $$
>

这是曲线长度的可加性，其证明仍然是利用三角不等式. 

为了导出曲线可求长的充分必要条件，我们引入有界变差函数的概念. 

**定义1**（有界变差函数）

> 设 $f$ 为定义在 $[\alpha, \beta]$ 上的函数. 任给分割
>
> $$
> \pi: \alpha = t_0 < t_1 < t_2 < \cdots < t_m = \beta,
> $$
>
> 记
>
> $$
> v(f; \pi) = \sum_{i=1}^m |f(t_i) - f(t_{i-1})|,
> $$
>
> 如果 $\sup_\pi v(f; \pi)$ 有限，则称 $f$ 为 $[\alpha, \beta]$ 上的有界变差函数，它在 $[\alpha, \beta]$ 上的全变差记为
>
> $$
> \bigvee_\alpha^\beta(f) = \sup_\pi v(f; \pi).
> $$

下列函数都是有界变差函数：

> - 单调函数. 如果 $f$ 为 $[\alpha, \beta]$ 上的单调函数，例如单调递增，则对任意的分割 $\pi$，有
>
> $$
> v(f; \pi) = \sum_{i=1}^m |f(t_i) - f(t_{i-1})| = \sum_{i=1}^m (f(t_i) - f(t_{i-1})) = f(\beta) - f(\alpha),
> $$
>
> 这说明
>
> $$
> \bigvee_\alpha^\beta(f) = |f(\beta) - f(\alpha)|.
> $$
>
> - Lipschitz 函数. 设 $|f(x) - f(y)| \leq L|x - y|$，则
>
> $$
> v(f; \pi) = \sum_{i=1}^m |f(t_i) - f(t_{i-1})| \leq \sum_{i=1}^m L(t_i - t_{i-1}) = L(\beta - \alpha),
> $$
>
> 因而 $f$ 是有界变差函数. 
>
> - 连续可微函数. 根据微分中值定理可知连续可微函数都是 Lipschitz 函数，因而是有界变差函数. 
>
> - 如果 $g(x)$ 为 $[\alpha, \beta]$ 上的 Riemann 可积函数，则
>
> $$
> f(x) = \int_\alpha^x g(t) dt,\quad x \in [\alpha, \beta]
> $$
>
> 是 Lipschitz 函数，因此也是有界变差函数. 
>
> 可以证明，有界变差函数必为两个单调递增函数的差. 

**定理1**（Jordan）

> 曲线 $\sigma(t)$ 可求长当且仅当它的每一个分量均为有界变差函数. 

/proof/

> 设 $\sigma(t) = (x_1(t), \cdots, x_n(t))$ 可求长，则任给 $[\alpha, \beta]$ 的分割 $\pi$，有
>
> $$
> v(x_i; \pi) = \sum_{j=1}^m |x_i(t_j) - x_i(t_{j-1})| \leq \sum_{j=1}^m \|\sigma(t_j) - \sigma(t_{j-1})\| \leq L(\sigma),
> $$
>
> 这说明 $x_i(t)$ 为有界变差函数. 
>
> 反之，如果每一个 $x_i(t)$ 都是有界变差函数，则
>
> $$
> \begin{aligned}
> L(\sigma; \pi) &= \sum_{j=1}^m \|\sigma(t_j) - \sigma(t_{j-1})\| \\\\
> &\leq \sum_{j=1}^m \left(|x_1(t_j) - x_1(t_{j-1})| + \cdots + |x_n(t_j) - x_n(t_{j-1})|\right) \\\\
> &= \sum_{i=1}^n v(x_i; \pi) \leq \sum_{i=1}^n \bigvee_\alpha^\beta(x_i).
> \end{aligned}
> $$
>
> 因此 $\sigma(t)$ 是可求长的. 

以下总是假设曲线 $\sigma$ 是可求长的. 对 $t \in [\alpha, \beta]$，定义

$$
s(t) = L(\sigma|_{[\alpha, t]}),
$$

则 $s(t)$ 为单调递增函数，称为 $\sigma(t)$ 的弧长函数，并且

$$
s(t_2) - s(t_1) = L(\sigma|_{[t_1, t_2]}),\quad t_1 \leq t_2.
$$

因此，如果 $t_2 > t_1$, $s(t_2) = s(t_1)$，则 $\sigma(t)$ 在 $[t_1, t_2]$ 上取常值. 如果 $\sigma(t)$ 不在任何区间上取常值，则 $s(t)$ 为严格单调递增函数. 

当 $\sigma(t)$ 为可求长的连续曲线时，$s(t)$ 也是连续函数. 当 $\sigma(t)$ 不在任何区间上取常值时，$s(t)$ 是参数 $t$ 的连续的严格单调递增函数，从而可逆，其逆记为 $t = t(s)$:

$$
t(s): [0, L(\sigma)] \to [\alpha, \beta].
$$

这时，$\sigma(t) = \sigma(t(s))$ 又可以看成关于 $s$ 的参数曲线，我们将 $s$ 称为弧长参数. 

当 $\sigma(t)$ 为连续可微曲线，且 $\|\sigma'(t)\|$ 在任何区间上不恒为零（例如，处处非零）时，上一段的讨论对 $\sigma(t)$ 完全适用，此时

$$
s'(t) = \|\sigma'(t)\|\quad \text{或}\quad ds = \|\sigma'(t)\| dt.
$$

现在我们考虑可求长曲线上有界函数的积分. 设 $f$ 是定义在 $\sigma$ 上的有界函数，即对任意 $\sigma(t)$，$f(\sigma(t))$ 是定义好的实数. 任给 $[\alpha, \beta]$ 的分割 $\pi$，取 $\xi_i \in [t_{i-1}, t_i]$ ($1 \leq i \leq m$)，考虑和

$$
\sum_{i=1}^m f(\sigma(\xi_i)) \Delta s_i,
$$

其中 $\Delta s_i = s(t_i) - s(t_{i-1})$. 如果极限

$$
\lim_{\|\pi\| \to 0} \sum_{i=1}^m f(\sigma(\xi_i)) \Delta s_i
$$

存在且与 $\{\xi_i\}$ 的选取无关，则称此极限为 $f$ 在 $\sigma$ 上的第一型曲线积分，记为

$$
\int_\sigma f ds = \lim_{\|\pi\| \to 0} \sum_{i=1}^m f(\sigma(\xi_i)) \Delta s_i.
$$

当 $f = 1$ 时，第一型曲线积分也就是曲线的长度. 

第一型曲线积分的物理意义可如下理解：已知某线状物质的密度函数 $\rho$，则物质的质量就是 $\rho$ 的曲线积分. 

当曲线 $\sigma$ 的弧长参数存在时，第一型曲线积分可以转化为通常的 Riemann 积分：

$$
\int_\sigma f ds = \int_0^{L(\sigma)} f(\sigma(s)) ds;
$$

如果 $\sigma(t)$ 为（分段）连续可微曲线，则 $f$ 在 $\sigma$ 上的第一型曲线积分可以写为（例如 $f$ 连续时）：

$$
\int_\sigma f ds = \int_\alpha^\beta f(\sigma(t)) \|\sigma'(t)\| dt.
$$

一般地，第一型曲线积分是所谓 Riemann-Stieltjes 积分的一种特殊情形.

### · 第二型曲线积分

现在我们考虑这样一个物理问题：设质点在力场 $F$ 中沿一条曲线 $\sigma$ 运动，求力场 $F$ 对该质点所做的功. 我们可以将这个问题转化为曲线上的一个积分问题. 

为此，设 $\sigma: [\alpha, \beta] \to \mathbb{R}^n$ 为一条参数曲线，$f$ 是定义在 $\sigma$ 上的取值在 $\mathbb{R}^n$ 中的一个向量值函数，其分量记为 $f_i$ ($1 \leq i \leq n$). 任取 $[\alpha, \beta]$ 的一个分割

$$
\pi: \alpha = t_0 < t_1 < t_2 < \cdots < t_m = \beta,
$$

考虑和

$$
\sum_{j=1}^m f_i(\sigma(\xi_j))(x_i(t_j) - x_i(t_{j-1})),\quad (\xi_j \in [t_{j-1}, t_j])
$$

如果极限

$$
\lim_{\|\pi\| \to 0} \sum_{j=1}^m f_i(\sigma(\xi_j))(x_i(t_j) - x_i(t_{j-1}))
$$

存在且与 $\{\xi_j\}$ 的选取无关，则称此极限为 $f_i dx_i$ 沿曲线 $\sigma$ 的第二型曲线积分，记为

$$
\int_\sigma f_i dx_i = \lim_{\|\pi\| \to 0} \sum_{j=1}^m f_i(\sigma(\xi_j))(x_i(t_j) - x_i(t_{j-1})).
$$

如果每一个 $f_i dx_i$ 沿 $\sigma$ 的第二型曲线积分都存在，则记

$$
\int_\sigma f_1 dx_1 + \cdots + f_n dx_n = \int_\sigma f_1 dx_1 + \cdots + \int_\sigma f_n dx_n,
$$

这个积分称为形式和 $f_1 dx_1 + \cdots + f_n dx_n$ 沿 $\sigma$ 的第二型曲线积分，在不引起混淆的情形也称为 $f$ 沿 $\sigma$ 的第二型曲线积分. 

初看起来第二型曲线积分似乎和第一型曲线积分并无本质不同. 但这两类积分有一个重要的区别，这个区别和曲线的方向有关. 

为了说明这一点，我们考虑曲线的重新参数化. 设 $\phi: [\gamma, \delta] \to [\alpha, \beta]$ 为严格单调的可逆连续映射，则复合映射 $\sigma \circ \phi: [\gamma, \delta] \to \mathbb{R}^n$ 也是一条参数曲线，它和 $\sigma$ 的像完全相同，这两条参数曲线只是选取了不同的参数而已. 

如果 $\phi$ 是严格单调递增的，则称这两个参数是同向的；如果 $\phi$ 是严格单调递减的，则称这两个参数是反向的（不同向）. 

不难看出，对于同向的两个参数，第二曲线积分的值不变；而对于反向的两个参数，第二曲线积分的值正好相差一个符号！这和第一型曲线积分是不同的，比如曲线的长度就不依赖于参数的选取. 

因此，为了使第二型曲线积分有意义，我们总是要给曲线指定一个方向，这个方向是由某个参数决定的. 给定了方向的曲线称为有向曲线. 如果参数反向，则新的有向曲线记为 $-\sigma$，这时有

$$
\int_{-\sigma} f_1 dx_1 + \cdots + f_n dx_n = -\int_\sigma f_1 dx_1 + \cdots + f_n dx_n.
$$

对于可求长曲线来说，第二型曲线积分也是 Riemann-Stieltjes 积分的特殊情况. 对于（分段）连续可微曲线，第二型曲线积分可以转化为 Riemann 积分：

$$
\int_\sigma f_1 dx_1 + \cdots + f_n dx_n = \sum_{i=1}^n \int_\alpha^\beta f_i(\sigma(t)) x_i'(t) dt.
$$

另一方面，如果 $\sigma$ 为连续可微曲线，$s$ 是其弧长参数，则

$$
\|\sigma'(s)\| = \|\sigma'(t)\| \cdot (s'(t))^{-1} = 1.
$$

如果记 $\sigma'(s) = (\cos \alpha_1, \cdots, \cos \alpha_n)$，则第二型曲线积分可以写为

$$
\int_\sigma f_1 dx_1 + \cdots + f_n dx_n = \int_0^{L(\sigma)} f(\sigma(s)) \cdot \sigma'(s) ds = \sum_{i=1}^n \int_0^{L(\sigma)} f_i(\sigma(s)) \cos \alpha_i ds,
$$

即第二型曲线积分转化成了第一型的曲线积分. 

/example/ Riemann 积分作为第二型的曲线积分

> 设 $f$ 为 $[a, b]$ 上的可积函数，则定积分 $\int_a^b f(x) dx$ 就是 $f(x) dx$ 沿区间 $[a, b]$ 的第二型曲线积分，其中区间看成一条曲线，它的方向是参数 $x$ 给出的，即 $x$ 轴的正向. 我们之所以规定
>
> $$
> \int_b^a f(x) dx = -\int_a^b f(x) dx
> $$
>
> 就是因为 $f(x) dx$ 沿 $[a, b]$ 的相反方向的第二型曲线积分要变一个符号. 

/example/ 环路积分

> 如果 $\sigma$ 为一条闭曲线（环路），即 $\sigma(\alpha) = \sigma(\beta)$，则选定了方向以后，不论从曲线上哪一点出发，沿此闭曲线的第二型曲线积分的值不变，通常我们将这样的积分记为
>
> $$
> \oint_\sigma f_1 dx_1 + \cdots + f_n dx_n.
> $$
>
> 单位圆周 $S^1$ 就是平面上的一条闭曲线，如果用参数方程
>
> $$
> \sigma(t) = (\cos t, \sin t),\quad t \in [0, 2\pi]
> $$
>
> 表示，则 $S^1$ 的方向就是所谓逆时针方向. 

## Part 2 曲面积分

### · 第一型曲面积分

设 $m \leq n$，$\Omega \subset \mathbb{R}^m$ 为 $\mathbb{R}^m$ 中的开集. $C^1$ 映射 $\varphi: \Omega \to \mathbb{R}^n$ 称为 $\mathbb{R}^n$ 中的一个参数曲面. 

我们想要定义参数曲面的面积，先从线性映射开始. 设 $\varphi: \mathbb{R}^m \to \mathbb{R}^n$ 为线性映射，$I \subset \mathbb{R}^m$ 为矩形. 

> 如果 $\varphi$ 是退化的（秩小于 $m$），则 $\varphi(\mathbb{R}^m)$ 包含在一个维数小于 $m$ 的子向量空间中，我们自然定义 $\varphi(I)$ 的 $m$ 维体积为零
>
> 如果 $\varphi$ 非退化，则 $\varphi(\mathbb{R}^m)$ 维数为 $m$，$\varphi(I)$ 为 $m$ 维欧氏空间中的可求体积集，我们来计算它的 $m$ 维体积. 

以下为了区分不同维数的体积，我们将 $m$ 维体积称为面积，并用记号 $\sigma$ 来表示它. 

不妨设 $I = [0,1]^m$. 记 $v_j = \varphi(e_j) = (a_{1j}, \cdots, a_{nj})$，其中 $\{e_j\}_{j=1}^m$ 为 $\mathbb{R}^m$ 的一组标准基. 则

$$
\varphi(I) = \left\{ \sum_{j=1}^m x_j v_j \,\middle|\, 0 \leq x_j \leq 1,\, j = 1,\cdots,m \right\}.
$$

记 $n \times m$ 型的矩阵 $A = (a_{ij})$. 如果当 $i > m$ 时 $a_{ij} \equiv 0$，即

$$
\varphi(\mathbb{R}^m) \subset \mathbb{R}^m \times \{0\} = \{(x_1,\cdots,x_m,0,\cdots,0) \in \mathbb{R}^n\},
$$

$\varphi(I)$ 的面积可表示为

$$
\sigma(\varphi(I)) = |\det(a_{ij})_{m\times m}| \sigma(I) = \sqrt{\det[(a_{ij})_{n\times m}^T (a_{ij})_{n\times m}]} \sigma(I).
$$

一般的情形，我们总可以选择 $\mathbb{R}^n$ 中的一个正交变换 $O$，使得 $O(\varphi(\mathbb{R}^m)) \subset \mathbb{R}^m \times \{0\}$，因为正交变换保持面积和体积等不变，故有

$$
\sigma(\varphi(I)) = \sigma(O(\varphi(I))) = \sqrt{\det[O(a_{ij})_{n\times m}]^T [O(a_{ij})_{n\times m}]} \sigma(I)
= \sqrt{\det[(a_{ij})_{n\times m}^T (a_{ij})_{n\times m}]} \sigma(I).
$$

一般地，如果 $\Omega$ 为 $\mathbb{R}^m$ 中可求面积（体积）集，则 $\varphi(\Omega)$ 为 $\mathbb{R}^n$ 中一个 $m$ 维平面中的可求面积集，且

$$
\sigma(\varphi(\Omega)) = \sqrt{\det(A^T \cdot A)} \sigma(\Omega),
$$

其中 $A = (a_{ij})_{n\times m}$. 

现在考虑一般的参数曲面 $\varphi: \Omega \to \mathbb{R}^n$，假设 $\varphi$ 是 $C^1$ 映射. 取 $x_0 \in \Omega$，设 $J\varphi(x_0)$ 非退化（秩为 $m$），定义 $L: \mathbb{R}^m \to \mathbb{R}^n$ 为

$$
L(x) = \varphi(x_0) + J\varphi(x_0)(x - x_0),\quad x \in \mathbb{R}^m.
$$

记 $\pi: \mathbb{R}^n \to L(\mathbb{R}^m)$ 为正交投影，则映射

$$
\pi \circ \varphi - L: \Omega \to L(\mathbb{R}^m),
$$

满足条件 $J(\pi \circ \varphi - L)(x_0) = 0$. 根据第十三章第四节的讨论可知，任给 $\varepsilon > 0$，存在 $\delta > 0$，当 $A$ 为包含在 $x_0$ 的 $\delta$ 邻域内的可求面积集时，有

$$
|\sigma(\pi(\varphi(A))) - \sigma(L(A))| < \varepsilon \cdot \sigma(A),
$$

即

$$
|\sigma(\pi(\varphi(A))) - \sqrt{\det[(J\varphi)^T(x_0) \cdot J\varphi(x_0)]} \sigma(A)| < \varepsilon \cdot \sigma(A),
$$

如果将 $\varphi(A)$ 的“面积”近似地用它在 $x_0$ 处参数曲面的切空间 $L(\mathbb{R}^m)$ 上的投影 $\pi(\varphi(A))$ 的面积代替时，我们就得到了参数曲面面积的如下积分定义：

**定义1**（面积公式）

> 设 $\varphi: \Omega \to \mathbb{R}^n$ 为非退化的 $C^1$ 映射，$\Omega$ 为 $\mathbb{R}^m$ 中可求面积的集合，则 $\varphi(\Omega)$ 的面积定义为
>
> $$
> \sigma(\varphi(\Omega)) = \int_\Omega \sqrt{\det[(J\varphi)^T \cdot J\varphi]}.
> $$

> [!important]
>
> (1) 如果 $\varphi(\mathbb{R}^m) \subset \mathbb{R}^m \times \{0\}$，则上式变成了 $v(\varphi(A)) = \int_A |\det J\varphi|.$；如果 $m = 1$，则上式就是连续可微曲线的弧长公式. 
>
> (2) 与曲线一样，曲面有不同参数化的问题. 如果 $\phi: \Omega' \to \Omega$ 是 $C^1$ 的可逆映射，则 $\varphi \circ \phi: \Omega' \to \mathbb{R}^n$ 也是参数曲面，它们的面积用 上式定义出来是一致的. 
>
> (3) 利用线性代数中关于乘积矩阵的行列式的 Binet-Cauchy 定理，如果 $\varphi$ 的分量表示为
> $$
> \varphi(u) = (\varphi_1(u_1,\cdots,u_m), \cdots, \varphi_n(u_1,\cdots,u_m)),
> $$
>
> 则
>
> $$
> \det[(J\varphi)^T \cdot J\varphi] = \sum_{1 \leq k_1 < k_2 < \cdots < k_m \leq n} \left[\det\left(\frac{\partial \varphi_{k_i}}{\partial u_j}\right)_{m\times m}\right]^2,
> $$

例如，当 $m = n-1$ 时，面积公式可写为

$$
\sigma(\varphi(\Omega)) = \int_\Omega \left( \sum_{i=1}^n \left[ \frac{\partial(\varphi_1,\cdots,\varphi_{i-1},\varphi_{i+1},\cdots,\varphi_n)}{\partial(u_1,u_2,\cdots,u_{n-1})} \right]^2 \right)^{\frac{1}{2}}.
$$
/example/  $\mathbb{R}^3$ 中参数曲面的面积公式

> 设 $r(u,v) = (x(u,v), y(u,v), z(u,v))$ ($(u,v) \in D$) 为参数曲面，则其面积为
>
> $$
> \sigma = \int_D \|r_u \times r_v\| du dv = \int_D \sqrt{EG - F^2} \, du dv,
> $$
>
> 其中
>
> $$
> E = r_u \cdot r_u = x_u^2 + y_u^2 + z_u^2,\quad G = r_v \cdot r_v = x_v^2 + y_v^2 + z_v^2,
> $$
> $$
> F = r_u \cdot r_v = x_u x_v + y_u y_v + z_u z_v.
> $$
>
> 特别地，当曲面由方程
>
> $$
> z = f(x,y),\quad (x,y) \in D
> $$
>
> 给出时，$r_x = (1,0,f_x)$，$r_y = (0,1,f_y)$，因此
>
> $$
> EG - F^2 = (1 + f_x^2)(1 + f_y^2) - (f_x f_y)^2 = 1 + f_x^2 + f_y^2,
> $$
>
> 曲面的面积公式成为
>
> $$
> \sigma = \int_D \sqrt{1 + f_x^2 + f_y^2} \, dx dy.
> $$

/example/

> 设 $f: D \to \mathbb{R}$ 为连续可微函数，$D \subset \mathbb{R}^{n-1}$. 则 $\operatorname{graph}(f)$ 为 $\mathbb{R}^n$ 中的超曲面，其面积公式为
>
> $$
> \sigma = \int_D \sqrt{1 + \|\nabla f\|^2},
> $$
>
> 其中 $\nabla f = (f_{x_1}, \cdots, f_{x_{n-1}})$ 是 $f$ 的梯度. 
>
> $\operatorname{graph}(f)$ 的参数表示为
>
> $$
> \varphi(x_1,\cdots,x_{n-1}) = (x_1,\cdots,x_{n-1}, f(x_1,\cdots,x_{n-1})),
> $$
>
> 则
>
> $$
> (J\varphi)^T \cdot J\varphi =
> \begin{pmatrix}
> 1 & 0 & \cdots & f_{x_1} \\
> 0 & 1 & \cdots & f_{x_2} \\
> \vdots & & \ddots & \vdots \\
> 0 & 0 & \cdots & f_{x_{n-1}}
> \end{pmatrix}
> \cdot
> \begin{pmatrix}
> 1 & 0 & \cdots & 0 \\
> 0 & 1 & \cdots & 0 \\
> \vdots & & \ddots & \vdots \\
> f_{x_1} & f_{x_2} & \cdots & f_{x_{n-1}}
> \end{pmatrix}
> = I_{n-1} + (\nabla f)^T \cdot \nabla f.
> $$
>
> 根据矩阵行列式的计算技巧，有
>
> $$
> \det[(J\varphi)^T \cdot J\varphi] = \det[I_{n-1} + (\nabla f)^T \cdot \nabla f]
> = 1 + \nabla f \cdot (\nabla f)^T = 1 + \|\nabla f\|^2,
> $$
>
> 即得
>
> $$
> \sigma = \int_D \sqrt{1 + \|\nabla f\|^2}.
> $$

值得指出的是，我们在定义参数曲面的面积时要求曲面是 $C^1$ 的，这主要是要用到曲面的切平面. 我们将曲面上无穷小区域的面积近似地看成它在切平面上的投影的面积，求和再取极限以后定义为曲面的面积. 这和曲线的长度的定义似乎有些不同. 

曲线的长度可以用折线段的长度去逼近. Schwarz 曾经举过一个例子（圆柱面）说明这样的定义是行不通的. 对于一般的曲面，定义面积需要引入 Hausdorff 测度的概念. 

有了曲面面积的定义，我们可以讨论曲面上有界函数的积分，为了简单起见，只考虑连续函数的情形. 

**定义2**（第一型曲面积分）

> 设 $\varphi: \Omega \to \mathbb{R}^n$ 为 $C^1$ 的参数曲面，$f$ 是定义在此曲面 $\Sigma$ 上的连续函数，则 $f$ 在 $\Sigma$ 上的曲面积分定义为
>
> $$
> \int_\Sigma f d\sigma = \int_\Omega f \sqrt{\det[(J\varphi)^T \cdot J\varphi]}.
> $$

第一型曲面积分的物理含义：分布在曲面上的某种物质，如果其密度函数为 $\rho$，则 $\rho$ 在曲面上的积分就是物质的质量. 

### · 第二型曲面积分

如同在曲线上一样，在曲面上也存在着第二种类型的积分，这种积分涉及到“方向”的概念. 参数曲线的方向是由其参数决定的，参数曲面也是如此. 

设 $\varphi: \Omega \to \mathbb{R}^n$ 为参数曲面，如果 $\psi: \Omega' \to \Omega$ 为 $C^1$ 的可逆映射，则 $\varphi \circ \psi$ 也是参数曲面，它是 $\varphi$ 的重新参数化. 

如果 $\det J\psi$ 恒为正，则称 $\varphi$ 和 $\varphi \circ \psi$ 是同向的；如果 $\det J\psi$ 恒为负，则称 $\varphi$ 和 $\varphi \circ \psi$ 是反向的. 

/example/  $\mathbb{R}^n$ 上的定向

> $\mathbb{R}^n$ 上的标准直角坐标决定的定向称为标准定向（正向）. 可逆映射
>
> $$
> f(x_1,\cdots,x_n) = (-x_1,x_2,\cdots,x_n)
> $$
>
> 的 Jacobi 行列式为 $-1$，它决定的定向和标准定向相反. 
>
> 在 $\mathbb{R}^n$ 上只有两个定向，即如果 $\psi: \mathbb{R}^n \to \mathbb{R}^n$ 为可逆 $C^1$ 映射，则 $\psi$ 要么和标准定向同向，要么和标准定向反向. 
>
> 这是因为，如果 $\psi$ 为 $C^1$ 可逆映射，则 $\det J\psi$ 是 $\mathbb{R}^n$ 上处处非零的连续函数，由连续函数的介值定理即知 $\det J\psi$ 要么恒正，要么恒负. 类似的结果对于连通的曲面也成立. 

/example/  超曲面的定向

> 先考虑 $\mathbb{R}^3$ 中的参数曲面 $r: \Omega \to \mathbb{R}^3$，其方程记为
>
> $$
> r(u,v) = (x(u,v), y(u,v), z(u,v)),\quad (u,v) \in \Omega.
> $$
>
> 我们知道，在 $r(u,v)$ 处 $r_u = (x_u, y_u, z_u)$ 和 $r_v = (x_v, y_v, z_v)$ 是切向量，而
>
> $$
> r_u \times r_v = (y_u z_v - z_u y_v, z_u x_v - x_u z_v, x_u y_v - y_u x_v) = \left( \frac{\partial(y,z)}{\partial(u,v)}, \frac{\partial(z,x)}{\partial(u,v)}, \frac{\partial(x,y)}{\partial(u,v)} \right)
> $$
>
> 是法向量. 如果 $(u,v) = \varphi(s,t)$ 是曲面的重新参数化，则
>
> $$
> r_s \times r_t = (r_u \times r_v) \cdot \frac{\partial(u,v)}{\partial(s,t)} = (r_u \times r_v) \cdot \det J\varphi,
> $$
>
> 这说明，参数 $(u,v)$ 和 $(s,t)$ 同向（反向）时，它们决定的法向量同向（反向）. 因此，$\mathbb{R}^3$ 中曲面的定向也可以用其单位法向量 $\vec{n}$ 表示，其中
>
> $$
> \vec{n} = \frac{r_u \times r_v}{\|r_u \times r_v\|}.
> $$
>
> 同向的参数给出相同的单位法向量，反向的参数给出相反的单位法向量. 
>
> 记
>
> $$
> \vec{n} = (\cos\alpha, \cos\beta, \cos\gamma),
> $$
>
> 其中 $\alpha, \beta, \gamma$ 分别是 $\vec{n}$ 与三个坐标轴的夹角. 当 $\cos\gamma \geq 0$，即 $\vec{n}$ 和 $z$ 轴的夹角不超过 $\pi/2$ 时，单位法向量所决定的方向称为参数曲面的上侧方向；反之，单位法向量所决定的方向称为参数曲面的下侧方向. 
>
> 对于封闭的曲面，指向曲面所围区域外部的单位法向量所决定的方向称为参数曲面的外侧方向，指向曲面所围区域内部的单位法向量所决定的方向称为参数曲面的内侧方向. 

上面的讨论可完全类似地推广到 $\mathbb{R}^n$ 中的超曲面上. 设超曲面的方程为

$$
r(u_1,\cdots,u_{n-1}) = (x_1(u_1,\cdots,u_{n-1}), \cdots, x_n(u_1,\cdots,u_{n-1})),
$$

则其法向量为 $\vec{N}(u) = (N_1,\cdots,N_n)$，其中

$$
N_i(u) = (-1)^{i-1} \frac{\partial(x_1,\cdots,x_{i-1},x_{i+1},\cdots,x_n)}{\partial(u_1,\cdots,u_{n-1})},
$$

如果 $u = \varphi(v)$ 为超曲面的重新参数化，则法向量之间满足关系

$$
\vec{N}(v) = \vec{N}(u) \cdot \det J\varphi,
$$

因此同向的参数给出同向的法向量，反向的参数给出反向的法向量. 

有了参数曲面的定向，我们可以定义第二型的曲面积分了. 为了简单起见，先考虑 $\mathbb{R}^3$ 中的曲面. 

**定义1**（第二型曲面积分）

> 设 $\Sigma$ 为 $\mathbb{R}^3$ 中的曲面，其参数表示为
>
> $$
> r(u,v) = (x(u,v), y(u,v), z(u,v)),\quad (u,v) \in \Omega.
> $$
>
> 对于定义在 $\Sigma$ 上的连续向量值函数 $(P,Q,R)$，定义其曲面积分为
>
> $$
> I = \int_\Omega P \cdot \frac{\partial(y,z)}{\partial(u,v)} du dv + \int_\Omega Q \cdot \frac{\partial(z,x)}{\partial(u,v)} du dv + \int_\Omega R \cdot \frac{\partial(x,y)}{\partial(u,v)} du dv,
> $$
>
> 也记为
>
> $$
> I = \int_\Sigma P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy.
> $$

> [!important]
>
> (1) 利用前面的记号，第二型曲面积分可以写为
>
> $$
> \int_\Sigma P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy = \int_\Omega (P,Q,R) \cdot (r_u \times r_v) du dv,
> $$
>
> 再由第一型曲面积分的定义，上式还可以写为
>
> $$
> \int_\Sigma P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy = \int_\Sigma (P,Q,R) \cdot \vec{n} d\sigma,
> $$
>
> 即取定了方向后第二型曲面积分可以转化为第一型曲面积分. 
>
> (2) 需要注意的是，$(P,Q,R)$ 的第二型曲面积分在两个同向的参数下其值不变，在反向的两个参数下其值正好相差一个符号. 即，用 $-\Sigma$ 表示反向曲面时有
>
> $$
> \int_{-\Sigma} P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy = - \int_\Sigma P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy.
> $$
>
> (3) 完全类似地，$\mathbb{R}^n$ 中的超曲面上的第二型曲面积分可以定义为
>
> $$
> \int_\Sigma P_1 dx_2 \wedge \cdots dx_n + \cdots + P_n dx_1 \wedge \cdots dx_{n-1} = \int_\Omega (P_1,\cdots,P_n) \cdot \vec{N}(u) du_1 \cdots du_{n-1}.
> $$

对于一般的 $m$ 维参数曲面也可以定义第二型的曲面积分，这要引入微分形式. 

第二型曲面积分的物理含义：设空间中有流速为 $\vec{v} = (P,Q,R)$ 的流体，求单位时间内通过曲面 $\Sigma$ 的流体的流量. 

用通常的“微元法”计算流量如下：任取 $\Sigma$ 的一小片，其面积记为 $\Delta\sigma$，经过这一小片的流体速度为 $\vec{v}$，曲面的单位法向量为 $\vec{n}$，则单位时间内通过这一小片曲面的流体的流量为 $\vec{v} \cdot \vec{n} \Delta\sigma$. 于是单位时间内经过 $\Sigma$ 的流量为积分
$$
\int_\Sigma \vec{v} \cdot \vec{n} d\sigma,
$$

因此求流量的问题就是曲面上的第二型积分的问题. 从这个例子也可以看出第二型的曲面积分是依赖于方向的. 

/example/  计算积分
$$
I = \int_\Sigma xyzw\, dx \wedge dy \wedge dz,
$$

其中 $\Sigma$ 为四维单形

$$
x + y + z + w \leq 1,\quad x \geq 0,\ y \geq 0,\ z \geq 0,\ w \geq 0
$$

的边界，方向为外侧. 

> $\Sigma$ 为 $\mathbb{R}^4$ 中的超曲面，它由五个部分组成，其中四部分分别位于坐标平面上，在这四部分上被积函数均为零. 第五部分为
>
> $$
> \Sigma':\ w = 1 - x - y - z,\quad (x,y,z) \in \Omega = \{x + y + z \leq 1,\ x \geq 0,\ y \geq 0,\ z \geq 0\},
> $$
>
> 其法向量为 $(-w_x, -w_y, -w_z, 1) = (1,1,1,1)$，这是外侧方向，因此
>
> $$
> \begin{aligned}
> I &= \int_{\Sigma'} xyzw\, dx \wedge dy \wedge dz\\\\
> &= \int_\Omega xyz(1 - x - y - z)\, dxdydz\\\\
> &= \int_{\{y+z \leq 1,\ y,z \geq 0\}} yz \int_0^{1-y-z} x\, dx dy dz
> - 3 \int_{\{y+z \leq 1,\ y,z \geq 0\}} yz \int_0^{1-y-z} x^2\, dx dy dz\\\\
> &= \frac{1}{2} \int_{\{y+z \leq 1,\ y,z \geq 0\}} yz(1 - y - z)^2 dy dz
> - \int_{\{y+z \leq 1,\ y,z \geq 0\}} yz(1 - y - z)^3 dy dz\\\\
> &= \frac{1}{7!}.
> \end{aligned}
> $$
>
> 在计算的过程中我们用到了 $x,y,z$ 的对称性. 

结束.

