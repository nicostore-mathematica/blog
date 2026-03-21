---
title: Chapter 4 解析函数领域展开
permalink: /complex/complex-4/
createTime: 2025/11/28 13:02:58
---

## Part 1 Talor 级数

前面我们看到，幂级数在它的收敛圆内代表一个解析函数。现在提一个相反的问题：如何把一个解析函数表示成幂级数？

### · Talor 展开

**定理1 (Taylor 展开)** 

> 设函数 $f(z)$ 在以 $a$ 为圆心的圆 $C$ 内及 $C$ 上解析，则对于圆内的任何 $z$ 点，$f(z)$ 可用幂级数展开为（或者说，$f(z)$ 可在 $a$ 点展开为幂级数）
> $$
> f(z) = \sum_{n=0}^{\infty} a_n (z - a)^n,
> $$
>
> 其中
>
> $$
> a_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - a)^{n+1}} \,\mathrm{d}\zeta = \frac{f^{(n)}(a)}{n!},
> $$
>
> $C$ 取逆时针方向

/proof/

> 根据 Cauchy 积分公式，对于圆 $C$ 内任意一点 $z$，有
>
> $$
> f(z) = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{\zeta - z} \,\mathrm{d}\zeta.
> $$
>
> 因为
>
> $$
> \frac{1}{\zeta - z} = \frac{1}{(\zeta - a) - (z - a)} = \frac{1}{\zeta - a} \sum_{n=0}^{\infty} \left( \frac{z - a}{\zeta - a} \right)^n, \quad |z - a| < |\zeta - a|,
> $$
>
> 易知级数 $\displaystyle \sum_{n=0}^{\infty} \left( \frac{z - a}{\zeta - a} \right)^n$ 在区域 $\left| \dfrac{z - a}{\zeta - a} \right| \leq r < 1$ 中一致收敛，因此可以逐项积分，
>
> $$
> \begin{aligned}
> f(z) &= \frac{1}{2\pi i} \oint_C \left[ \sum_{n=0}^{\infty} \frac{(z - a)^n}{(\zeta - a)^{n+1}} \right] f(\zeta)\,\mathrm{d}\zeta \\
> &= \sum_{n=0}^{\infty} \left[ \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - a)^{n+1}} \,\mathrm{d}\zeta \right] (z - a)^n \\
> &= \sum_{n=0}^{\infty} a_n (z - a)^n, \quad \left| \frac{z - a}{\zeta - a} \right| \leq r < 1,
> \end{aligned}
> $$
>
> $$
> a_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - a)^{n+1}} \,\mathrm{d}\zeta = \frac{f^{(n)}(a)}{n!}.
> $$

对于这个定理，需要做以下说明：

> (1). 定理的条件可以放宽，只要 $f(z)$ 在圆域 $C$ 内解析即可。这时对于给定的圆内 $z$ 点，总可以以 $a$ 为圆心作一圆 $\overline{C'}$，使 $z \in C'$。于是即可在闭圆域 $\overline{C'}$ 中应用上面的结论。
>
> (2). 这里 Taylor 展开的形式和实变函数中的 Taylor 公式相同，但是条件不同。在实变函数中，$f(x)$ 的任何阶导数存在，还不足以保证 Taylor 公式存在（或 Taylor 级数收敛）。在复变函数中，函数解析的要求就足以保证 Taylor 级数收敛。
>
> (3). **收敛范围** 设 $b$ 是 $f(z)$ 的离 $a$ 点最近的奇点，则 $f(z)$ 在圆 $|z - a| < |b - a|$ 内处处解析，$f(z)$ 可以在圆内展开为 Taylor 级数（或者说，Taylor 级数在圆 $|z - a| < |b - a|$ 内收敛）。这就是说，$f(z)$ 在 $a$ 点展开得到的 Taylor 级数收敛半径不小于 $|b - a|$。另一方面，收敛半径一般也不能大于 $|b - a|$。否则，$b$ 点就包含在收敛圆内，因而幂级数在 $b$ 点解析，与 $f(z)$ 在 $b$ 点不解析的假设矛盾（除非 $b$ 点是可去奇点）。所以，一般说来，收敛半径 $R = |b - a|$。函数 $f(z)$ 的奇点完全决定了其 Taylor 级数的收敛半径。例如
>
> $$
> \frac{1}{1 + z^2} = \sum_{n=0}^{\infty} (-1)^n z^{2n}, \quad |z| < 1.
> $$
>
> 左端的函数在 $z = \pm i$ 不解析，就决定了右端 Taylor 级数的收敛半径 $R = |\pm i| = 1$。但是在实数范围内，
>
> $$
> \frac{1}{1 + x^2} = \sum_{n=0}^{\infty} (-1)^n x^{2n}, \quad -1 < x < 1,
> $$
>
> 就无法直观地讨论级数的收敛区间与函数性质之间的联系，因为函数 $1/(1 + x^2)$ 在整个实轴上都是任意阶连续可导的。
>
> (4). **Taylor 展开的唯一性** 给定一个在圆 $C$ 内解析的函数，则它的 Taylor 展开是唯一的，即展开系数 $a_n$ 是完全确定的。

下面证明 Taylor 展开的唯一性

/proof/

> 假定有两个 Taylor 级数在圆 $C$ 内都收敛到同一个解析函数 $f(z)$，
>
> $$
> \begin{aligned}
> f(z) &= a_0 + a_1(z - a) + a_2(z - a)^2 + \cdots + a_n(z - a)^n + \cdots \\\\
> &= a'_0 + a'_1(z - a) + a'_2(z - a)^2 + \cdots + a'_n(z - a)^n + \cdots.
> \end{aligned}
> $$
>
> 取极限 $z \to a$，则由于级数在圆 $C$ 内内闭一致收敛，故有
>
> $$
> a_0 = a'_0.
> $$
>
> 逐项微商，再取极限 $z \to a$，又得
>
> $$
> a_1 = a'_1.
> $$
>
> 如此继续，即可证得
>
> $$
> a_n = a'_n, \quad n = 0,1,2,\cdots.
> $$

Taylor 展开的唯一性告诉我们：

> (1) 不论用什么方法，得到的 $f(z)$ 在同一个圆内的 Taylor 展开是唯一的。因此，不一定非得用公式去求展开系数。
>
> (2) 如果在同一点展开的两个 Taylor 级数相等，则可以逐项比较系数。这里要强调，必须是在同一点展开的两个 Taylor 级数相等，才可以逐项比较系数。

### · Taylor 级数求法

这里介绍求 Taylor 级数的一些常见方法。为简单起见，本小节举例都在 $z = 0$ 邻域内展开。

对于最基本的几个初等函数，需要利用系数公式求出展开系数。由于公式的形式和实变函数中完全相同，因此，可以把实变函数中的结果原封不动地改写成复数形式：

$$
e^z = 1 + z + \frac{z^2}{2!} + \cdots + \frac{z^n}{n!} + \cdots = \sum_{n=0}^{\infty} \frac{z^n}{n!}, \quad |z| < \infty,
$$

$$
\frac{1}{1 - z} = \sum_{n=0}^{\infty} z^n, \quad |z| < 1.
$$

对于其他函数，总是尽量利用这些已知的结果，包括作变量代换，或者它们的线性组合和微商、积分。例如

$$
\frac{1}{1 + z^2} = \sum_{n=0}^{\infty} (-z^2)^n = \sum_{n=0}^{\infty} (-1)^n z^{2n}, \quad |z| < 1,
$$

$$
\sin z = \frac{\mathrm{e}^{iz} - \mathrm{e}^{-iz}}{2i} = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n + 1)!} z^{2n+1}, \quad |z| < \infty,
$$

$$
\cos z = \frac{\mathrm{e}^{iz} + \mathrm{e}^{-iz}}{2} = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} z^{2n}, \quad |z| < \infty,
$$

$$
\frac{1}{1 - 3z + 2z^2} = -\frac{1}{1 - z} + \frac{2}{1 - 2z} = \sum_{n=0}^{\infty} (2^{n+1} - 1) z^n, \quad |z| < \frac{1}{2},
$$

$$
\frac{1}{(1 - z)^2} = \frac{\mathrm{d}}{\mathrm{d}z} \frac{1}{1 - z} = \frac{\mathrm{d}}{\mathrm{d}z} \sum_{n=0}^{\infty} z^n = \sum_{n=0}^{\infty} (n + 1) z^n, \quad |z| < 1.
$$

下面介绍两种新的方法，即级数乘法和待定系数法。

如果一个函数可以表示成两个（或多个）函数的乘积，而每一个因子的 Taylor 展开比较容易求出，则可以采用级数相乘的方法。例如

$$
\begin{aligned}
\frac{1}{1 - 3z + 2z^2} &= \frac{1}{1 - z} \cdot \frac{1}{1 - 2z} = \sum_{k=0}^{\infty} z^k \cdot \sum_{l=0}^{\infty} 2^l z^l = \sum_{k=0}^{\infty} \sum_{l=0}^{\infty} 2^l z^{k+l} \\\\
&= \sum_{n=0}^{\infty} \left( \sum_{l=0}^{n} 2^l \right) z^n = \sum_{n=0}^{\infty} (2^{n+1} - 1) z^n, \quad |z| < \frac{1}{2}.
\end{aligned}
$$

幂级数在收敛圆内绝对收敛，故乘积在两收敛圆的公共区域内仍绝对收敛。

关于待定系数法，见下面的例子。

/example/

> 求 $\tan z$ 在 $z = 0$ 的 Taylor 展开。

/proof/

> 由于 $\tan z$ 是奇函数，故其在 $z = 0$ 的 Taylor 展开应只有奇次幂，
>
> $$
> \tan z = \sum_{k=0}^{\infty} a_{2k+1} z^{2k+1},
> $$
>
> 因此，$\sin z = \cos z \cdot \displaystyle \sum_{k=0}^{\infty} a_{2k+1} z^{2k+1}$，即
>
> $$
> \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n + 1)!} z^{2n+1} = \sum_{l=0}^{\infty} \frac{(-1)^l}{(2l)!} z^{2l} \cdot \sum_{k=0}^{\infty} a_{2k+1} z^{2k+1} = \sum_{n=0}^{\infty} \left( \sum_{k=0}^{n} \frac{(-1)^{n-k}}{(2n - 2k)!} a_{2k+1} \right) z^{2n+1}.
> $$
>
> 根据 Taylor 展开的唯一性，可以将上式中左右两式比较系数，由此即得
>
> $$
> \sum_{k=0}^{n} \frac{(-1)^k}{(2n - 2k)!} a_{2k+1} = \frac{1}{(2n + 1)!}, \quad n = 0,1,2,\cdots.
> $$
>
> 所以
>
> $$
> \begin{array}{ll}
> n = 0 & a_1 = 1; \\\\
> n = 1 & \frac{1}{2} a_1 - a_3 = \frac{1}{6}, \quad a_3 = \frac{1}{3}; \\\\
> n = 2 & \frac{1}{24} a_1 - \frac{1}{2} a_3 + a_5 = \frac{1}{120}, \quad a_5 = \frac{2}{15}; \\\\
> \vdots & \vdots \\\\
> \end{array}
> $$
>
> 最后就得到
>
> $$
> \tan z = z + \frac{1}{3} z^3 + \frac{2}{15} z^5 + \frac{17}{315} z^7 + \cdots.
> $$
>
> 从 $\tan z$ 的奇点可以判断，级数的收敛半径应为 $\pi/2$。

应用待定系数法，能得到系数之间的递推关系，从而逐个求出展开系数，但一般很难求出级数的通项公式（即展开系数 $a_n$ 的解析表达式）。然而，如果我们只需要求出级数中的某一项或某几项系数，待定系数法还不失为可取的方法之一。

对于多值函数，在适当规定了单值分支后，即可像单值函数那样在解析点邻域内作 Taylor 展开。

/example/

> 求多值函数 $(1 + z)^\alpha$ 在 $z = 0$ 的 Taylor 展开，规定 $z = 0$ 时 $(1 + z)^\alpha \big|_{z=0} = 1$。

/proof/

> 可直接求出函数 $(1 + z)^\alpha$ 在 $z = 0$ 点的各阶导数值，
>
> $$
> \begin{aligned}
> f(0) &= 1, \\\\
> f'(0) &= \alpha(1 + z)^{\alpha - 1} \bigg|_{z=0} = \alpha, \\\\
> f''(0) &= \alpha(\alpha - 1)(1 + z)^{\alpha - 2} \bigg|_{z=0} = \alpha(\alpha - 1), \\\\
> &\vdots \\\\
> f^{(n)}(0) &= \alpha(\alpha - 1)(\alpha - 2)\cdots(\alpha - n + 1)(1 + z)^{\alpha - n} \bigg|_{z=0} = \alpha(\alpha - 1)\cdots(\alpha - n + 1), \\\\
> &\vdots
> \end{aligned}
> $$
>
> 因此
>
> $$
> (1 + z)^\alpha = \sum_{n=0}^{\infty} \binom{\alpha}{n} z^n,
> $$
>
> 其中
>
> $$
> \binom{\alpha}{0} = 1, \quad \binom{\alpha}{n} = \frac{\alpha(\alpha - 1)\cdots(\alpha - n + 1)}{n!}
> $$
>
> 称为普遍的二项式展开系数。

级数的收敛区域，应视割线的作法而定。收敛半径等于 $z = 0$ 到割线的最短距离。最大可能的收敛区域是 $|z| < 1$。所以，只要许可，我们总是会将割线作在单位圆外。

收敛区域也要看割线怎么作。收敛半径等于 $z = 0$ 到割线的最短距离，最大可能的收敛区域是 $|z| < 1$。同样，只要许可，我们总是将割线作在单位圆外。

**在无穷远点的 Taylor 展开**:

如果函数 $f(z)$ 在 $z = \infty$ 点解析，则也可以在 $z = \infty$ 点展开成 Taylor 级数。

所谓 $f(z)$ 在 $\infty$ 点展开成 Taylor 级数，完全等价于作变换 $z = 1/t$，而将 $f(1/t)$ 在 $t = 0$ 点展开成 Taylor 级数。因为 $f(1/t)$ 在 $t = 0$ 点解析，故

$$
f\left( \frac{1}{t} \right) = a_0 + a_1 t + a_2 t^2 + \cdots + a_n t^n + \cdots, \quad |t| < r;
$$

$$
f(z) = a_0 + \frac{a_1}{z} + \frac{a_2}{z^2} + \cdots + \frac{a_n}{z^n} + \cdots, \quad |z| > \frac{1}{r}.
$$

值得注意的是，$f(z)$ 在 $\infty$ 点的 Taylor 级数中只有常数项及负幂项，没有正幂项，而收敛范围为 $|z| > 1/r$，也就是说，级数在以 $\infty$ 为圆心的某个圆内收敛。

## Part 2 解析函数性质

如果 $f(z)$ 在 $a$ 点的邻域内解析且不恒为 0，若 $f(a) = 0$，则称 $z = a$ 为 $f(z)$ 的零点。设 $f(z)$ 在 $z = a$ 点的邻域内解析，则 $f(z)$ 可以在 $z = a$ 的邻域内展成 Taylor 级数，

$$
f(z) = \sum_{n=0}^{\infty} a_n (z - a)^n, \quad |z - a| < \rho.
$$

故若 $z = a$ 为零点，则必有

$$
a_0 = a_1 = \cdots = a_{m-1} = 0, \quad a_m \ne 0.
$$

此时，称 $z = a$ 点为 $f(z)$ 的 $m$ 阶零点，相应地，

$$
f(a) = f'(a) = \cdots = f^{(m-1)}(a) = 0, \quad f^{(m)}(a) \ne 0.
$$

可见 $m$ 不可能是零或者负数。因为 $f(z)$ 不恒为零，所以 $m$ 也不可能为 $\infty$。$m$ 更不可能是非整数①，因此零点的阶数 $m$ 一定是正整数。

解析函数零点的一个重要性质是它的孤立性。

**定理2 (解析函数的零点孤立性定理)** 

> 若 $z = a$ 是 $f(z)$ 的零点且 $f(z)$ 在 $z = a$ 的邻域内不恒等于零，则一定 $\exists \rho > 0$，使得 $f(z)$ 在空心邻域 $0 < |z - a| < \rho$ 内无零点。

/proof/

> 设 $a$ 为 $f(z)$ 的 $m$ 阶零点，则
>
> $$
> f(z) = (z - a)^m \phi(z),
> $$
>
> $\phi(z)$ 在 $|z - a| < R$ 内解析，且 $\phi(a) \ne 0$。因为 $\phi(z)$ 在 $z = a$ 点连续，即 $\forall \varepsilon > 0$，$\exists \rho > 0$，使得当 $|z - a| < \rho$ 时，恒有 $|\phi(z) - \phi(a)| < \varepsilon$。不妨取 $\varepsilon = |\phi(a)| / 2$，则得
>
> $$
> |\phi(z)| > |\phi(a)| - \varepsilon = \frac{1}{2} |\phi(a)| > 0.
> $$
>
> 由此即证得 $f(z)$ 在 $0 < |z - a| < \rho$ 内无零点。
>
> 解析函数的零点孤立性定理的逆否定理是：若 $\exists R > 0$，$f(z)$ 在 $|z - a| < R$ 内解析，$\forall \rho > 0$，$f(z)$ 在空心邻域 $0 < |z - a| < \rho$ 内都有零点，那么 $f(z)$ 在 $z = a$ 的空心邻域 $0 < |z - a| < R$ 内恒等于零。也就是说，如果解析函数 $f(z)$ 的零点是非孤立的，则此函数在其解析区域内一定恒为 0。

这个结论还可以表述为下面的几个推论。

**推论 1** 

> 设 $f(z)$ 在 $G: |z - a| < R$ 内解析。若在 $G$ 内存在 $f(z)$ 的无穷多个互不相等的零点 $\{z_n\}$，且 $\lim_{n \to \infty} z_n = a$，但 $z_n \ne a$，则在 $G$ 内 $f(z) \equiv 0$。

**推论 2** 

> 设 $f(z)$ 在 $G: |z - a| < R$ 内解析。若在 $G$ 内存在过 $a$ 点的一段弧 $l$ 或含有 $a$ 点的一个子区域 $g$，在 $l$ 上或 $g$ 内 $f(z) \equiv 0$，则在整个区域 $G$ 内 $f(z) \equiv 0$。

**推论 3** 

> 设 $f(z)$ 在 $G$ 内解析。若在 $G$ 内存在一点 $z = a$ 及过 $a$ 点的一段弧 $l$ 或含有 $a$ 点的一个子区域 $g$，在 $l$ 上或 $g$ 内 $f(z) \equiv 0$，则在整个区域 $G$ 内 $f(z) \equiv 0$。

**推论 4** 

> 设 $f_1(z)$ 和 $f_2(z)$ 都在区域 $G$ 内解析，且在 $G$ 内的一段弧或一个子区域内相等，则在 $G$ 内 $f_1(z) \equiv f_2(z)$。

**推论 5** 

> 在实轴上成立的恒等式，在 $z$ 复平面上仍然成立，只要这个恒等式两端的函数在 $z$ 复平面上都是解析的。

也还可以把 推论 1 改写成解析函数的唯一性定理。

**定理 3 (解析函数的唯一性定理)** 

> 设在区域 $G$ 内有两个解析函数 $f_1(z)$ 和 $f_2(z)$，且在 $G$ 内存在序列 $\{z_n\}$，$\forall n$，$f_1(z_n) = f_2(z_n)$。若 $\{z_n\}$ 的一个极限点 $z = a (\ne z_n)$ 也落在 $G$ 内，则在 $G$ 内有 $f_1(z) \equiv f_2(z)$。

## Part 3 Laurent 级数

### · Laurent 展开

一个函数除了可在解析点的邻域（单连通区域）内作 Taylor 展开外，有时还需要将它在环形区域（多连通区域）展开成幂级数。这时就得到 Laurent 展开。

**定理 4 (Laurent 展开)** 

> 设函数 $f(z)$ 在以 $b$ 为圆心的环形区域 $R_1 \leq |z - b| \leq R_2$ 中单值解析，则对于环域内的任何 $z$ 点，$f(z)$ 可以用幂级数展开为
> $$
> f(z) = \sum_{n=-\infty}^{\infty} a_n (z - b)^n, \quad R_1 < |z - b| < R_2,
> $$
> 其中
>
> $$
> a_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - b)^{n+1}} \,\mathrm{d}\zeta,
> $$
>
> $C$ 是环域内绕内圆一周的任意一条闭合曲线.

/proof/

> 将环域内、外边界分别记为 $C_1$ 和 $C_2$，则根据（多连通区域的）Cauchy 积分公式，有
>
> $$
> f(z) = \frac{1}{2\pi i} \oint_{C_2} \frac{f(\zeta)}{\zeta - z} \,\mathrm{d}\zeta - \frac{1}{2\pi i} \oint_{C_1} \frac{f(\zeta)}{\zeta - z} \,\mathrm{d}\zeta.
> $$
>
> 对于 $C_2$ 上的积分，可以直接引用证明 Taylor 展开定理时得到的结果，
>
> $$
> \frac{1}{2\pi i} \oint_{C_2} \frac{f(\zeta)}{\zeta - z} \,\mathrm{d}\zeta = \sum_{n=0}^{\infty} a_n (z - b)^n, \quad |z - b| < R_2,
> $$
>
> $$
> a_n = \frac{1}{2\pi i} \oint_{C_2} \frac{f(\zeta)}{(\zeta - b)^{n+1}} \,\mathrm{d}\zeta.
> $$
>
> 对于 $C_1$ 上的积分，
>
> $$
> \begin{aligned}
> -\frac{1}{2\pi i} \oint_{C_1} \frac{f(\zeta)}{\zeta - z} \,\mathrm{d}\zeta &= \frac{1}{2\pi i} \oint_{C_1} \frac{f(\zeta)}{(z - b) - (\zeta - b)} \,\mathrm{d}\zeta = \frac{1}{2\pi i} \oint_{C_1} \frac{f(\zeta)}{z - b} \sum_{k=0}^{\infty} \left( \frac{\zeta - b}{z - b} \right)^k \,\mathrm{d}\zeta \\\\
> &= \sum_{k=0}^{\infty} (z - b)^{-k-1} \cdot \frac{1}{2\pi i} \oint_{C_1} f(\zeta)(\zeta - b)^k \,\mathrm{d}\zeta \\\\
> &= \sum_{n=-1}^{\infty} a_n (z - b)^n, \quad |z - b| > R_1,
> \end{aligned}
> $$
>
> 其中
>
> $$
> a_n = \frac{1}{2\pi i} \oint_{C_1} \frac{f(\zeta)}{(\zeta - b)^{n+1}} \,\mathrm{d}\zeta.
> $$
>
> 把两部分合并起来，就有
>
> $$
> f(z) = \sum_{n=-\infty}^{\infty} a_n (z - b)^n, \quad R_1 < |z - b| < R_2,
> $$
>
> $$
> a_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - b)^{n+1}} \,\mathrm{d}\zeta.
> $$
>
> 这里把系数 $a_n$ 公式中的积分围道统一写成了 $C$，其中 $C$ 是环域内绕内圆一周的任意一条闭合曲线（为什么能这样做？）。
>
> 这个结果称为函数 $f(z)$ 在环域 $R_1 < |z - b| < R_2$ 内的 Laurent 展开，展开而得到的级数称为 Laurent 级数。

对于上面的结果，也需要做一些补充讨论:

> (1). 和 Taylor 展开一样，本定理的条件也可放宽为 $f(z)$ 在 $R_1 < |z - b| < R_2$ 内单值解析。
>
> (2). 对于 Laurent 展开来说，系数（即使是正幂项的系数）
>
> $$
> a_n \ne \frac{1}{n!} f^{(n)}(b).
> $$
>
> (3). $f(z)$ 在内圆 $\overline{C_1}$ 中不解析。一般说来，在 $C_1$ 圆周上有奇点。在圆心 $b$ 点，$f(z)$ 可能解析，也可能不解析。
>
> 如果 $b$ 点是 $f(z)$ 在圆 $\overline{C_1}$ 中唯一的奇点，则 $C_1$ 的半径可以无限缩小，收敛范围就变成 $0 < |z - b| < R$。这时圆心 $b$ 点称为函数 $f(z)$ 的孤立奇点，就得到 $f(z)$ 在孤立奇点 $b$ 的空心邻域内的 Laurent 展开。同样，外圆 $C_2$ 的半径也可能为 $\infty$。
>
> (4). Laurent 展开既有正幂项，又有负幂项。正幂项在外圆 $C_2$ 内（$|z - b| < R_2$）绝对收敛，并且内闭一致收敛，称为 Laurent 级数的正则部分；负幂项在内圆 $C_1$ 外（$|z - b| > R_1$）绝对收敛，在 $C_1$ 外的任一闭区域中一致收敛，称为 Laurent 级数的主要部分。两部分合起来，就构成 Laurent 级数，在环域 $R_1 < |z - b| < R_2$ 内绝对收敛，并且内闭一致收敛。当内圆半径 $R_1 = 0$ 时，Laurent 级数的主要部分就完全反映了 $f(z)$ 在孤立奇点 $z = b$ 点的奇异性。
>
> (5). 如果函数 $f(z)$ 在无穷远点不解析，但是在无穷远点的一个空心邻域内单值解析，则可将 $f(z)$ 在 $\infty$ 点的空心邻域内作 Laurent 展开（或者简单地说成在 $\infty$ 点作 Laurent 展开）。
>
> 所谓 $f(z)$ 在 $\infty$ 点的空心邻域内单值解析，就意味着函数 $f(1/t)$ 在 $t = 0$ 点的空心邻域内单值解析，因而
>
> $$
> f\left( \frac{1}{t} \right) = \sum_{n=-\infty}^{\infty} a_n t^n, \quad 0 < |t| < r, \quad \text{i.e.} \quad f(z) = \sum_{n=-\infty}^{\infty} a_n z^{-n}, \quad \frac{1}{r} < |z| < \infty.
> $$
>
> 这里的收敛范围可以理解为是以 $z = \infty$ 点为圆心的一个环域。$f(1/t)$ 在 $t = 0$ 点的 Laurent 级数中 $t$ 的正幂项（包括常数项）部分是正则部分；$t$ 的负幂项是主要部分，完全反映了 $f(1/t)$ 在孤立奇点 $t = 0$ 点的奇异性。对应地，我们把 $f(z)$ 在 $z = \infty$ 点空心邻域内的 Laurent 级数中，$z$ 的负幂项称为正则部分；$z$ 的正幂项称为主要部分，完全反映了函数 $f(z)$ 在 $\infty$ 点的奇异性。
>
> (6). **Laurent 展开的唯一性** 设 $f(z)$ 在环域 $R_1 < |z - b| < R_2$ 内有两个 Laurent 级数，
>
> $$
> f(z) = \sum_{n=-\infty}^{\infty} a_n (z - b)^n = \sum_{n=-\infty}^{\infty} a'_n (z - b)^n.
> $$
>
> 两端同乘以 $(z - b)^{-k-1}$，其中 $k$ 为任意整数，沿环域内绕内圆一周的任一围道 $C$ 积分（这两个级数在环域内内闭一致收敛，因而可以逐项积分），则由于
>
> $$
> \oint_C (z - b)^{n-k-1} \,\mathrm{d}z = 2\pi i \delta_{nk},
> $$
>
> 故有 $a_k = a'_k$。因为 $k$ 任意，故有
>
> $$
> a_k = a'_k, \quad k = 0, \pm 1, \pm 2, \cdots.
> $$
>
> 即证得 Laurent 展开的唯一性。它告诉我们：两个 Laurent 级数在同一环域内处处相等，则对应项系数相等（即可以比较系数）。

### · Laurent 级数求法

求 Laurent 展开，一般不直接利用公式求系数。由于函数在给定环域内 Laurent 展开唯一性的保证，因此，不论用什么方法，包括引用 Taylor 展开中得到的结果，只要最终得到的是在给定环域内收敛到 $f(z)$ 的幂级数，那它就一定是 $f(z)$ 的 Laurent 展开。

/example/

> 求 $\displaystyle \frac{1}{z(z - 1)}$ 在 $0 < |z| < 1$ 和 $|z| > 1$ 内的展开式。

/proof/

>  $\displaystyle \frac{1}{z(z - 1)}$ 在 $0 < |z| < 1$ 内的展开形式一定是 $\displaystyle \sum_{n=-\infty}^{\infty} a_n z^n$，所以
>
> $$
> \frac{1}{z(z - 1)} = -\frac{1}{z} \frac{1}{1 - z} = -\frac{1}{z} \sum_{n=0}^{\infty} z^n = -\sum_{n=-1}^{\infty} z^n, \quad 0 < |z| < 1.
> $$
>
> 也可以用部分分式的方法：
>
> $$
> \frac{1}{z(z - 1)} = -\frac{1}{z} - \frac{1}{1 - z} = -\frac{1}{z} - \sum_{n=0}^{\infty} z^n = -\sum_{n=-1}^{\infty} z^n, \quad 0 < |z| < 1.
> $$
>
> $\displaystyle \frac{1}{z(z - 1)}$ 在 $|z| > 1$ 内解析，在 $|z| > 1$ 内幂级数展开形式也是 $\displaystyle \sum_{n=-\infty}^{\infty} a_n z^n$，
>
> $$
> \frac{1}{z(z - 1)} = \frac{1}{z^2} \frac{1}{1 - \frac{1}{z}} = \frac{1}{z^2} \sum_{n=0}^{\infty} \left( \frac{1}{z} \right)^n = \sum_{n=-2}^{\infty} z^n, \quad |z| > 1.
> $$
>
> 此结果也可以看成是 $1/[z(z - 1)]$ 在 $\infty$ 点邻域内的 Taylor 展开。

/example/

> 求函数 $f(z) = \ln \dfrac{z - 2}{z - 1}$ 在 $1 < |z| < 2$ 及 $2 < |z| < \infty$ 内的幂级数展开。

/proof/

> 本题中指定的展开区域是环形区域，是多连通区域，所以，如果能作幂级数展开的话，得到的一定是 Laurent 级数。
>
> $f(z)$ 有两个分支点：$z = 1$ 和 $z = 2$。$f(z)$ 的割线一定要连接这两个分支点。不论割线怎么作，它一定会穿过环域 $1 < |z| < 2$，换言之，$f(z)$ 在 $z$ 复平面内的环域 $1 < |z| < 2$ 内一定不解析，故在此环域内不可能作 Laurent 展开。
>
> 在环域 $2 < |z| < \infty$ 内，如果割线不通过此环域，则规定单值分支后，$f(z)$ 单值解析，此时可作 Laurent 展开。例如，若沿实轴从 $z = 1$ 到 $z = 2$ 作割线，规定在割线上岸 $\arg(z - 2) - \arg(z - 1) = \pi$，则
>
> $$
> f(\infty) = \ln \frac{z - 2}{z - 1} \bigg|_{z=\infty} = 0.
> $$
>
> 于是有
>
> $$
> \begin{aligned}
> \ln \frac{z - 2}{z - 1} &= \int_\infty^z \left( \frac{1}{\zeta - 2} - \frac{2}{\zeta - 1} \right) \,\mathrm{d}\zeta = \int_\infty^z \frac{1}{\zeta} \sum_{n=0}^{\infty} \left[ \left( \frac{2}{\zeta} \right)^n - \left( \frac{1}{\zeta} \right)^n \right] \,\mathrm{d}\zeta \\\\
> &= -\frac{1}{z} - \frac{3}{2} \frac{1}{z^2} - \frac{7}{3} \frac{1}{z^3} - \cdots - \frac{2^n - 1}{n} \frac{1}{z^n} - \cdots.
> \end{aligned}
> $$
>
> 最大可能的收敛范围是 $|z| > 2$。这是 $\ln[(z - 2)/(z - 1)]$ 在 $\infty$ 点的 Taylor 级数。

/example/

> 求函数 $\exp \left\{ \dfrac{z}{2} \left( t - \dfrac{1}{t} \right) \right\}$ 在环域 $0 < |t| < \infty$ 内的 Laurent 展开。

/proof/

> 用级数乘法。因为
>
> $$
> \mathrm{e}^{zt/2} = \sum_{k=0}^{\infty} \left( \frac{z}{2} \right)^k \frac{t^k}{k!}, \quad |t| < \infty,
> $$
>
> $$
> \mathrm{e}^{-z/(2t)} = \sum_{l=0}^{\infty} \left( \frac{z}{2} \right)^l \frac{(-1)^l}{l!} \left( \frac{1}{t} \right)^l, \quad \left| \frac{1}{t} \right| < \infty\quad \text{ i.e. } |t| > 0,
> $$
>
> 所以
>
> $$
> \begin{aligned}
> \exp \left\{ \frac{z}{2} \left( t - \frac{1}{t} \right) \right\} &= \sum_{k=0}^{\infty} \left( \frac{z}{2} \right)^k \frac{t^k}{k!} \sum_{l=0}^{\infty} \left( \frac{z}{2} \right)^l \frac{(-1)^l}{l!} \left( \frac{1}{t} \right)^l \\\\
> &= \sum_{k=0}^{\infty} \sum_{l=0}^{\infty} \frac{(-1)^l}{k! l!} \left( \frac{z}{2} \right)^{k+l} t^{k-l} \\\\
> &= \sum_{n=0}^{\infty} \left[ \sum_{l=0}^{\infty} \frac{(-1)^l}{l!(l+n)!} \left( \frac{z}{2} \right)^{2l+n} \right] t^n + \sum_{n=-1}^{-\infty} \left[ \sum_{l=-n}^{\infty} \frac{(-1)^l}{l!(l+n)!} \left( \frac{z}{2} \right)^{2l+n} \right] t^n \\\\
> &= \sum_{n=-\infty}^{\infty} J_n(z) t^n,
> \end{aligned}
> $$
>
> 其中
>
> $$
> J_n(z) = 
> \begin{cases}
> \displaystyle \sum_{l=0}^{\infty} \frac{(-1)^l}{l!(l+n)!} \left( \frac{z}{2} \right)^{2l+n}, & n = 0,1,2,\cdots, \\\\
> \displaystyle \sum_{l=-n}^{\infty} \frac{(-1)^l}{l!(l+n)!} \left( \frac{z}{2} \right)^{2l+n}, & n = -1,-2,-3,\cdots
> \end{cases}
> $$
>
> 称为 $n$ 阶 Bessel 函数。

## Part 4 单值函数孤立奇点

设 $f(z)$ 为单值函数（或多值函数的一个单值分支），如果 $f(z)$ 在 $b$ 点不解析，但是 $\exists r > 0$，$f(z)$ 在 $b$ 点的空心邻域 $0 < |z - b| < r$ 内处处可导，则称 $b$ 点为 $f(z)$ 的孤立奇点。

反之，如果对 $\forall r > 0$，在 $\beta$ 点的空心邻域 $0 < |z - \beta| < r$ 内都有 $f(z)$ 的奇点，则称 $\beta$ 点为 $f(z)$ 的非孤立奇点。

孤立奇点的例子已经见过很多，这里举一个非孤立奇点的例子。

我们知道，对于 $1/\sin(1/z)$，$z = 1/(n\pi)$（即 $1/z = n\pi$），$n = \pm 1, \pm 2, \cdots$ 均为奇点。显然，$z = 0$ 点是这些奇点的聚点：在 $z = 0$ 的任一空心邻域中，总存在函数 $1/\sin(1/z)$ 的奇点，故 $z = 0$ 是函数 $1/\sin(1/z)$ 的非孤立奇点。

$z = b$ 是单值函数 $f(z)$ 的孤立奇点，意味着一定存在 $R > 0$，$f(z)$ 在环域 $0 < |z - b| < R$ 内可以展开成 Laurent 级数：

$$
f(z) = \sum_{n=-\infty}^{\infty} a_n (z - b)^n, \quad 0 < |z - b| < R.
$$

这时可能出现三种情况：

> (1). 级数展开式不含负幂项，此时 $b$ 点称为 $f(z)$ 的可去奇点。例如，$z = 0$ 就是函数
>
> $$
> \frac{\sin z}{z} = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n + 1)!} z^{2n}, \quad |z| < \infty
> $$
>
> 和
>
> $$
> \frac{1}{z} - \cot z = \frac{1}{3} z + \frac{1}{45} z^3 + \frac{2}{945} z^5 + \cdots, \quad |z| < \pi
> $$
>
> 的可去奇点。
>
> (2). 级数展开式只含有有限个负幂项，此时 $b$ 点称为 $f(z)$ 的极点。
>
> (3). 级数展开式含有无穷多个负幂项，此时 $b$ 点称为 $f(z)$ 的本性奇点。

下面分别讨论函数在三种孤立奇点处的行为。

### · 可去奇点

由于在可去奇点处的级数展开不含负幂项，故级数不但在环域内收敛，而且在环域的中心，即可去奇点 $z = b$ 处也是收敛的。也就是说，这时的收敛区域其实是一个圆形区域，圆心位于可去奇点 $z = b$ 处，级数在收敛圆内内闭一致收敛，因而其和函数连续，

$$
\lim_{z \to b} f(z) = \lim_{z \to b} \sum_{n=0}^{\infty} a_n (z - b)^n = a_0,
$$

即函数在可去奇点处的极限值是有限的。如果定义一个新的函数

$$
F(z) = 
\begin{cases}
f(z), & z \ne b, \\\\
\displaystyle \lim_{z \to b} f(z), & z = b,
\end{cases}
$$

这样函数 $F(z)$ 在 $b$ 点也是解析的。这正是可去奇点这一称谓的由来。

反过来，如果 $z = b$ 是函数 $f(z)$ 的孤立奇点，而且 $f(z)$ 在 $z = b$ 的邻域内有界，则 $z = b$ 是 $f(z)$ 的可去奇点。

### · 极点

函数在极点空心邻域内的 Laurent 展开有有限个负幂项，

$$
\begin{aligned}
f(z) &= a_{-m} (z - b)^{-m} + a_{-m+1} (z - b)^{-m+1} + \cdots + a_{-1} (z - b)^{-1} + a_0 + a_1 (z - b) + \cdots \\\\
&= (z - b)^{-m} \left[ a_{-m} + a_{-m+1} (z - b) + a_{-m+2} (z - b)^2 + \cdots \right] \\\\
&= (z - b)^{-m} \phi(z), \quad 0 < |z - b| < R,
\end{aligned}
$$

其中 $m$ 是正整数，

$$
\phi(z) = a_{-m} + a_{-m+1} (z - b) + a_{-m+2} (z - b)^2 + \cdots
$$

在 $z = b$ 点的邻域内是解析的，而且 $\phi(b) = a_{-m} \ne 0$。$b$ 点就称为 $f(z)$ 的 $m$ 阶极点。显然，只要 $|z - b|$ 足够小，$|f(z)|$ 可以大于任何正数，

$$
\lim_{z \to b} f(z) = \infty.
$$

所以，函数在极点处的极限值是 $\infty$，即函数在极点附近无界。

反之，如果 $b$ 是 $f(z)$ 的孤立奇点，且 $\lim_{z \to b} f(z) = \infty$，则 $b$ 是 $f(z)$ 的极点。

根据
$$
f(z) = (z - b)^{-m} \phi(z), \quad 0 < |z - b| < R,
$$
可以看到，如果 $z = b$ 是 $f(z)$ 的 $m$ 阶极点，则
$$
\frac{1}{f(z)} = (z - b)^m \frac{1}{\phi(z)}
$$

 $\dfrac{1}{\phi(z)}$ 在 $z = b$ 点解析,

所以 $z = b$ 必定是 $1/f(z)$ 的 $m$ 阶零点。反之亦然。利用这个关系，可以帮助我们寻找极点，尤其是确定极点的阶数。

例如，$z = n\pi$ 是 $1/\sin z$ 的一阶极点；$z = 2k\pi i$, $k = 0, \pm 1, \pm 2, \cdots$ 是 $1/(e^z - 1)$ 的一阶极点；$z = 1$ 是 $1/(z - 1)^2$ 的二阶极点。

### · 本性奇点

函数在本性奇点邻域内的 Laurent 展开具有无穷多个负幂项。

如果 $z = b$ 是函数 $f(z)$ 的本性奇点，则当 $z \to b$ 时，$f(z)$ 的极限不存在。更准确地说，$z \to b$ 的方式不同，$f(z)$ 可以逼近不同的数值。例如，$z = 0$ 是函数

$$
\mathrm{e}^{1/z} = \sum_{n=0}^{\infty} \frac{1}{n!} \left( \frac{1}{z} \right)^n, \quad 0 < |z| < \infty
$$

的本性奇点。
