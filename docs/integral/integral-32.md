---
title: Lesson 32 多元函数微分 III
permalink: /integral/integral-32/
createTime: 2026/08/17 14:17:46
---

## Part 4 逆映射

对于一元函数，如果它可微且导数处处非零，则该函数可逆且其逆仍可微. 这里，可微性和导数非零保证了函数在局部上与可逆线性函数有好的逼近，因而也是（局部）可逆的. 下面我们考虑多元向量值函数类似的问题. 

**可逆线性映射**：

> 由线性代数，线性映射 $A: \mathbb{R}^n \to \mathbb{R}^n$ 可逆当且仅当 $\det A \ne 0$，即 $A$ 为单射. 我们有如下观察：如果 $B: \mathbb{R}^n \to \mathbb{R}^n$ 为线性映射，$\|B\| < 1$，则 $I_n - B$ 可逆. 
>
> 事实上，设 $(I_n - B)v = 0$，则
>
> $$
> \|v\| = \|I_n v\| = \|Bv\| \le \|B\| \cdot \|v\|,
> $$
>
> 这说明 $v = 0$. 
>
> 这个例子意味着，恒同映射这样一个可逆映射作一个小的扰动以后仍然为可逆映射. 一般地，任何可逆线性映射在微扰下仍为可逆映射. 因为可微映射在局部上可以看成是其微分的小扰动，当微分可逆时，该映射在局部上也应该是可逆的. 

### · 逆映射定理

**定理1 (逆映射定理)**. 设 $W$ 为 $\mathbb{R}^n$ 中开集，$f: W \to \mathbb{R}^n$ 为 $C^k(k \ge 1)$ 映射，$x^0 \in W$. 如果 $\det Jf(x^0) \ne 0$，则存在 $x^0$ 的开邻域 $U \subset W$ 以及 $y^0 = f(x^0)$ 的开邻域 $V \subset \mathbb{R}^n$，使得 $f|_U: U \to V$ 是可逆映射，且其逆仍为 $C^k$ 映射. 

> 不失一般性，可设 $x^0 = 0$，$y^0 = f(x^0) = 0$. 以 $A$ 记 $f$ 在 $x^0 = 0$ 处的微分，则 $A$ 可逆，且 $f \circ A^{-1}$ 在 $0$ 处微分为恒同映射. 如果欲证的结论对 $f \circ A^{-1}$ 成立，则对 $f$ 也成立. 因此，不妨从一开始就假设 $Jf(x^0) = I_n$. 
>
> 在 $x^0$ 附近，$f$ 是恒同映射的扰动，扰动项可定义为映射
>
> $$
> \begin{aligned}
> &g: W \to \mathbb{R}^n \\\\
> &x \mapsto f(x) - x,
> \end{aligned}
> $$
>
> 则 $g$ 为 $C^k$ 映射，且 $Jg(0) = 0$. 因此，存在 $\varepsilon_0 > 0$ 使得
>
> $$
> \|Jg(x)\| \le \frac{1}{2}, \quad \forall x \in \bar{B}_{\varepsilon_0}(0) \subset W.
> $$
>
> 由拟微分中值定理，
>
> $$
> \begin{aligned}
> \|g(x_1) - g(x_2)\| &\le \|Jg(\xi)\| \cdot \|x_1 - x_2\| \\\\
> &\le \frac{1}{2} \|x_1 - x_2\|, \quad \forall x_1, x_2 \in \bar{B}_{\varepsilon_0}(0).
> \end{aligned}
> $$
>
> 设 $y \in B_{\frac{\varepsilon_0}{2}}(0)$，我们来解方程
>
> $$
> f(x) = y, \quad x \in B_{\varepsilon_0}(0).
> $$
>
> 这等价于在 $B_{\varepsilon_0}(0)$ 中寻找 $g_y(x) = x + y - f(x) = y - g(x)$ 的不动点. 我们利用压缩映像原理来找这样的不动点. 首先，
>
> $$
> \begin{aligned}
> \|g_y(x)\| &= \|y - g(x)\| \le \|y\| + \|g(x)\| \\\\
> &< \frac{\varepsilon_0}{2} + \frac{1}{2} \|x\| \le \frac{\varepsilon_0}{2} + \frac{\varepsilon_0}{2} = \varepsilon_0, \quad \forall x \in \bar{B}_{\varepsilon_0}(0).
> \end{aligned}
> $$
>
> 其次，$g_y: \bar{B}_{\varepsilon_0}(0) \to B_{\varepsilon_0}(0) \subset \bar{B}_{\varepsilon_0}(0)$ 是压缩映射：
>
> $$
> \begin{aligned}
> \|g_y(x_1) - g_y(x_2)\| &= \|g(x_2) - g(x_1)\|\\\\
> &\le \frac{1}{2} \|x_1 - x_2\|, \quad \forall x_1, x_2 \in \bar{B}_{\varepsilon_0}(0).
> \end{aligned}
> $$
>
> 从而方程在 $\bar{B}_{\varepsilon_0}(0)$ 中有唯一解，记为 $x_y$. 
>
> 已经推出 $x_y \in B_{\varepsilon_0}(0)$. 记
> $$
> U = f^{-1}(B_{\frac{\varepsilon_0}{2}}(0)) \cap B_{\varepsilon_0}(0), \quad V = B_{\frac{\varepsilon_0}{2}}(0),
> $$
>
> 则我们已经证明了 $f|_U: U \to V$ 是一一映射，其逆映射 $h(y) = x_y$ 满足
>
> $$
> y - g(h(y)) = h(y).
> $$
>
> > (1) $h: V \to U$ 是连续映射：当 $y_1, y_2 \in V$ 时
> >
> > $$
> > \begin{aligned}
> > \|h(y_1) - h(y_2)\| \le \|y_1 - y_2\| + \|g(h(y_1)) - g(h(y_2))\| \\\\
> > \le \|y_1 - y_2\| + \frac{1}{2} \|h(y_1) - h(y_2)\|,
> > \end{aligned}
> > $$
> >
> > 这说明 $\|h(y_1) - h(y_2)\| \le 2\|y_1 - y_2\|$，$\forall y_1, y_2 \in V$. 
> >
> > (2) $h: V \to U$ 是可微映射：设 $y_0 \in V$，则对 $y \in V$，有
> >
> > $$
> > \begin{aligned}
> > h(y) - h(y_0) &= (y - y_0) - [g(h(y)) - g(h(y_0))] \\\\
> > &= (y - y_0) - Jg(h(y_0)) \cdot (h(y) - h(y_0)) + o(\|h(y) - h(y_0)\|),
> > \end{aligned}
> > $$
> >
> > 上式可改写为
> >
> > $$
> > [I_n + Jg(h(y_0))] \cdot (h(y) - h(y_0)) = (y - y_0) + o(\|y - y_0\|).
> > $$
> >
> > 因而
> >
> > $$
> > h(y) - h(y_0) = [I_n + Jg(h(y_0))]^{-1} \cdot (y - y_0) + o(\|y - y_0\|).
> > $$
> >
> > 即 $h$ 在 $y_0$ 处可微. 
> >
> > (3) $h: V \to U$ 为 $C^k$ 映射. 
> >
> > 由 (2) 的证明知
> >
> > $$
> > Jh(y) = [I_n + Jg(h(y))]^{-1} = [Jf(h(y))]^{-1}, \quad \forall y \in V.
> > $$
> >
> > 由 $f \in C^k$ 知 $Jf \in C^{k-1}$. 由 (2) 及上式可推出 $Jh \in C^0$，即 $h \in C^1$. 再由 $Jf \in C^{k-1}$，$h \in C^1$ 及上式可推出 $Jh \in C^1$ 即 $h \in C^2$. 依次类推，最后我们就得到 $h \in C^k$. 
>
> **注意**. 从证明可以看出，如果 $f: W \to \mathbb{R}^n$ 的 Jacobian 非退化，则 $f(W)$ 为开集. 

考虑 $f: \mathbb{R}^2 \to \mathbb{R}^2$，$f(x, y) = (e^x \cos y, e^x \sin y)$. 显然，$f$ 不是单射，但

$$
\det Jf(x, y) = \det 
\begin{pmatrix}
e^x \cos y & -e^x \sin y \\
e^x \sin y & e^x \cos y
\end{pmatrix}
= e^{2x} \ne 0.
$$

这说明定理1的结论只能局部地成立，这跟一元函数的情形不同

考虑 $f: \mathbb{R}^2 \to \mathbb{R}^2$，$f(x, y) = (x^3, y^3)$，则 $f$ 为光滑单射，也是满射，但 $Jf(0, 0) = 0$，$f$ 的逆映射不可微. 这说明 Jacobian 非退化的条件不能去掉. 

### · 隐函数定理

/example/设 $f: \mathbb{R}^2 \to \mathbb{R}$ 为 $C^k(k \ge 1)$ 映射，$f(x^0, y^0) = 0$，$\dfrac{\partial f}{\partial y}(x^0, y^0) \ne 0$，在 $(x^0, y^0)$ 附近解方程
$$
f(x, y) = 0.
$$

> 令 $F: \mathbb{R}^2 \to \mathbb{R}^2$，$F(x, y) = (x, f(x, y))$，则 $F(x^0, y^0) = (x^0, 0)$，且
>
> $$
> \det JF(x^0, y^0) = \det 
> \begin{pmatrix}
> 1 & 0 \\
> \dfrac{\partial f}{\partial x}(x^0, y^0) & \dfrac{\partial f}{\partial y}(x^0, y^0)
> \end{pmatrix}
> = \dfrac{\partial f}{\partial y}(x^0, y^0) \ne 0.
> $$
>
> 由逆映射定理，在 $(x^0, y^0)$ 附近，$F$ 为可逆映射. 于是当 $x$ 在 $x^0$ 附近时，$y^0$ 附近存在 $g(x)$，使得 $F(x, g(x)) = (x, 0)$，即 $f(x, g(x)) = 0$. 对 $x$ 求导得
>
> $$
> \dfrac{\partial f}{\partial x}(x, g(x)) + \dfrac{\partial f}{\partial y}(x, g(x)) \cdot g'(x) = 0,
> $$
>
> 从而
>
> $$
> g'(x) = -\dfrac{\dfrac{\partial f}{\partial x}(x, g(x))}{\dfrac{\partial f}{\partial y}(x, g(x))}.
> $$
>
> $y = g(x)$ 称为由 $f(x, y) = 0$ 决定的隐函数. 

上例可推广到一般维数，所得结果称为隐映射（隐函数）定理. 

**定理2 (隐映射定理)**. 设 $W$ 为 $\mathbb{R}^{n+m}$ 中开集，$W$ 中的点用 $(x, y)$ 表示，其中 $x = (x_1, \cdots, x_n)$，$y = (y_1, \cdots, y_m)$. $f: W \to \mathbb{R}^m$ 为 $C^k$ 映射，

$$
f(x, y) = (f_1(x, y), f_2(x, y), \cdots, f_m(x, y)).
$$

设 $(x^0, y^0) \in W$，$f(x^0, y^0) = 0$ 且 $\det Jf_y(x^0, y^0) \ne 0$，其中

$$
Jf_y(x, y) = \left( \dfrac{\partial f_i}{\partial y_j}(x, y) \right)_{m \times m}.
$$

则存在 $x^0$ 的开邻域 $V \subset \mathbb{R}^n$ 以及唯一的 $C^k$ 映射 $g: V \to \mathbb{R}^m$，使得

(1).
$$
y^0 = g(x^0),\quad f(x, g(x)) = 0,\quad \forall x \in V
$$
(2).
$$
Jg(x) = -[Jf_y(x, g(x))]^{-1} Jf_x(x, g(x))
$$
其中

$$
Jf_x(x, y) = \left( \dfrac{\partial f_i}{\partial x_j}(x, y) \right)_{\substack{1 \le i \le m \\ 1 \le j \le n}}.
$$

> /proof/
>
> 令 $F: W \to \mathbb{R}^{n+m}$ 为
> $$
> F(x, y) = (x, f(x, y)),
> $$
>
> 在 $(x^0, y^0)$ 处利用逆映射定理即可. 
>
> **注意**. $g(x)$ 称为由 $f(x, y) = 0$ 决定的隐映射. 

/example/ 设 $x^2 + 2y^2 + 3z^2 + xy - z - 9 = 0$，求 $x = 1$，$y = -2$，$z = 1$ 时 $\dfrac{\partial z}{\partial x}$，$\dfrac{\partial z}{\partial y}$，$\dfrac{\partial^2 z}{\partial x \partial y}$ 的值. 

> 令 $F(x, y, z) = x^2 + 2y^2 + 3z^2 + xy - z - 9$，则
> $$
> F(1, -2, 1) = 0, \quad F_z(1, -2, 1) = (6z - 1)|_{z=1} = 5 \ne 0,
> $$
>
> 故 $z$ 可局部地表示为 $x, y$ 的函数，记为 $z = z(x, y)$. 在 $(1, -2, 1)$ 处，有
>
> $$
> \begin{aligned}
> (z_x, z_y) &= -F_z^{-1} \cdot (F_x, F_y) \\\\
> &= -\frac{1}{5}(2x + y, 4y + x)|_{(x,y,z)=(1,-2,1)} = (0, \frac{7}{5}).
> \end{aligned}
> $$
>
> 又因为
>
> $$
> z_y = -F_z^{-1} \cdot F_y = -\frac{1}{6z - 1}(4y + x),
> $$
>
> 故
>
> $$
> \dfrac{\partial^2 z}{\partial x \partial y} = \frac{6}{(6z - 1)^2} \cdot z_x(4y + x) - \frac{1}{6z - 1},
> $$
>
> 从而
> $$
> \dfrac{\partial^2 z}{\partial x \partial y}(1, -2, 1) = -\frac{1}{5}.
> $$

平面上直角坐标 $(x, y)$ 和极坐标 $(r, \theta)$ 之间的转换公式为

$$
x = r \cos \theta, \quad y = r \sin \theta.
$$

求 $r$ 和 $\theta$ 关于 $x, y$ 的偏导数. 

> 由逆映射定理
>
> $$
> \begin{pmatrix}
> \dfrac{\partial r}{\partial x} & \dfrac{\partial r}{\partial y} \\\\
> \dfrac{\partial \theta}{\partial x} & \dfrac{\partial \theta}{\partial y}
> \end{pmatrix}
> =
> \begin{pmatrix}
> \dfrac{\partial x}{\partial r} & \dfrac{\partial x}{\partial \theta} \\\\
> \dfrac{\partial y}{\partial r} & \dfrac{\partial y}{\partial \theta}
> \end{pmatrix}^{-1}
> =
> \begin{pmatrix}
> \cos \theta & -r \sin \theta \\
> \sin \theta & r \cos \theta
> \end{pmatrix}^{-1}
> = \frac{1}{r}
> \begin{pmatrix}
> r \cos \theta & r \sin \theta \\
> -\sin \theta & \cos \theta
> \end{pmatrix},
> $$
>
> 从而有
>
> $$
> \dfrac{\partial r}{\partial x} = \cos \theta, \quad \dfrac{\partial r}{\partial y} = \sin \theta, \quad \dfrac{\partial \theta}{\partial x} = -\frac{\sin \theta}{r}, \quad \dfrac{\partial \theta}{\partial y} = \frac{\cos \theta}{r}.
> $$

**隐式曲面**：

> 设 $F: \mathbb{R}^3 \to \mathbb{R}$ 为 $C^k(k \ge 1)$ 的多元函数. 令
>
> $$
> S = \{(x, y, z) \in \mathbb{R}^3 \mid F(x, y, z) = 0\}.
> $$
>
> 如果对于任意 $(x, y, z) \in S$，$F'_x$，$F'_y$，$F'_z$ 均不全为 $0$，则称 $S$ 为由 $F$ 决定的隐式曲面. 
>
> 设 $m_0 = (x_0, y_0, z_0) \in S$，不妨设 $F'_z(x_0, y_0, z_0) \ne 0$. 则由定理2，在 $(x_0, y_0, z_0)$ 附近，$S$ 可用参数曲面 $z = z(x, y)$ 表示：
>
> $$
> F(x, y, z(x, y)) = 0.
> $$
>
> 在 $(x^0, y^0, z^0)$ 处曲面的法向量为
>
> $$
> \begin{aligned}
> \vec{n} &= (1, 0, z_x(x^0, y^0)) \times (0, 1, z_y(x^0, y^0)) \\\\
> &= (-z_x(x^0, y^0), -z_y(x^0, y^0), 1) \\\\
> &= \frac{1}{F'_z}(F'_x(x^0, y^0, z^0), F'_y(x^0, y^0, z^0), F'_z(x^0, y^0, z^0)).
> \end{aligned}
> $$
>
> $S$ 在 $(x^0, y^0, z^0)$ 处的切平面方程为
>
> $$
> F'_x \cdot (x - x_0) + F'_y \cdot (y - y_0) + F'_z(z - z_0) = 0.
> $$
>
> 在 $(x^0, y^0, z^0)$ 处的法线方程为
>
> $$
> \frac{x - x_0}{F'_x(x_0, y_0, z_0)} = \frac{y - y_0}{F'_y(x_0, y_0, z_0)} = \frac{z - z_0}{F'_z(x_0, y_0, z_0)}.
> $$

**隐式曲线**：

> 设 $F: \mathbb{R}^3 \to \mathbb{R}$，$G: \mathbb{R}^3 \to \mathbb{R}$ 为 $C^k(k \ge 1)$ 的映射，令
>
> $$
> l = \{(x, y, z) \in \mathbb{R}^3 \mid F(x, y, z) = G(x, y, z) = 0\},
> $$
>
> 如果对任意的 $(x, y, z) \in l$，
>
> $$
> \dfrac{\partial(F, G)}{\partial(y, z)}(x, y, z) = \det 
> \begin{pmatrix}
> F'_y & F'_z \\
> G'_y & G'_z
> \end{pmatrix}
> \ne 0,
> $$
>
> 则称 $l$ 为由 $F$, $G$ 决定的隐式曲线. 
>
> 设 $m_0 = (x_0, y_0, z_0) \in l$，由隐映射定理，在 $m_0$ 附近 $l$ 可由参数曲线
>
> $$
> y = y(x), \quad z = z(x)
> $$
>
> 表示，其中
>
> $$
> F(x, y(x), z(x)) = G(x, y(x), z(x)) = 0,
> $$
>
> 且
>
> $$
> \begin{pmatrix}
> y'(x) \\
> z'(x)
> \end{pmatrix}
> = -\begin{pmatrix}
> F'_y & F'_z \\
> G'_y & G'_z
> \end{pmatrix}^{-1} \cdot \begin{pmatrix}
> F'_x \\
> G'_x
> \end{pmatrix},
> $$
>
> 或写为
>
> $$
> \begin{cases}
> F'_x + F'_y \cdot y' + F'_z \cdot z' = 0, \\
> G'_x + G'_y \cdot y' + G'_z \cdot z' = 0.
> \end{cases}
> $$
>
> 这说明 $(1, y', z')$ 与 $(F'_x, F'_y, F'_z)$ 和 $(G'_x, G'_y, G'_z)$ 均正交. 因而 $m_0$ 处的切线方程为
>
> $$
> \frac{x - x_0}{\left|\begin{matrix} F'_y & F'_z \\ G'_y & G'_z \end{matrix}\right|} = \frac{y - y_0}{\left|\begin{matrix} F'_z & F'_x \\ G'_z & G'_x \end{matrix}\right|} = \frac{z - z_0}{\left|\begin{matrix} F'_x & F'_y \\ G'_x & G'_y \end{matrix}\right|},
> $$
>
> 法面方程为
>
> $$
> \left|\begin{matrix}
> x - x_0 & y - y_0 & z - z_0 \\
> F'_x & F'_y & F'_z \\
> G'_x & G'_y & G'_z
> \end{matrix}\right| = 0.
> $$

结束.
