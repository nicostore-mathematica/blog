---
title: Chapter 3 级数
permalink: /complex/complex-3/
createTime: 2025/11/28 13:02:58
---

## Part 1 幂级数

### · 复级数

我们先给出复级数的定义.

/Definition/

> 形如 $f_1 + f_2 + \cdots + f_k + \cdots = \displaystyle\sum_{k=1}^{\infty} f_k$ 的级数（其中 $f_k = u_k + i v_k \in \mathbb{C}$）称为复数项级数。显然，我们有
>
> $$
> \sum_{k=1}^{\infty} f_k = \sum_{k=1}^{\infty} u_k + i \sum_{k=1}^{\infty} v_k.
> $$
> 部分和定义为
>
> $$
> F_n \equiv \sum_{k=1}^{n} f_k,
> $$
>
> 可构成部分和序列 $\{F_n\}$。

若 $\{F_n\}$ 收敛，即

$$
\lim_{n \to \infty} F_n = F
$$

存在且有限，则称 $\displaystyle\sum_{k=1}^{\infty} f_k$ 收敛于 $F = u + i v$。即 $\displaystyle\sum_{k=1}^{\infty} f_k$ 收敛等价于

$$
\sum_{k=1}^{\infty} u_k = u, \quad \sum_{k=1}^{\infty} v_k = v.
$$

因此，复级数收敛问题可以转化为实级数收敛问题。下面将给出几个复级数收敛性判据。

/Theorem/

> 柯西判据：
>
> 如果对于 $\forall \varepsilon > 0$，总存在正整数 $N$，当 $n > N$ 时，对于任意正整数 $p$，总有
>
> $$
> |F_{n+p} - F_n| = |f_{k+1} + f_{k+2} + \cdots + f_{k+p}| < \varepsilon,
> $$
>
> 那么 $\displaystyle\sum_{k=1}^{\infty} f_k$ 一定收敛（可证明这是一个充要条件）。

取 $p = 1$，得到 $\displaystyle\sum_{k=1}^{\infty} f_k$ 收敛的一个必要条件（但不充分）：

$$
\lim_{k \to \infty} |f_k| = 0.
$$

例如，取 $f_k = (-1)^k \dfrac{1}{k}$，它满足上述必要条件，且由莱布尼茨判别法可知其对应级数收敛；

但取 $f_k = \dfrac{1}{k}$，满足上式，但其对应的级数不收敛。这说明上面这一条件确实是必要不充分的。

同理我们可以给出绝对收敛的定义：

/Definition/

> 绝对收敛：
>
> 如果 $\displaystyle\sum_{k=1}^{\infty} |f_k|$ 收敛，则称 $\displaystyle\sum_{k=1}^{\infty} f_k$ 绝对收敛。
>
> 原级数本身 $\displaystyle\sum_{k=1}^{\infty} f_k$ 当然也收敛，这是因为：
> $$
> |f_{k+1} + f_{k+2} + \cdots + f_{k+p}| < |f_{k+1}| + |f_{k+2}| + \cdots + |f_{k+p}|.
> $$

**绝对收敛级数的性质和判别法**：

(1). 任意交换或改变次序而得到新级数仍然收敛，且其和不变。

(2). 两个绝对收敛的级数，可以逐项相乘（即第一个级数的第 $k$ 项 $f_k$ 和第二个级数的第 $k$ 项 $g_k$ 相乘），所得新的级数仍然绝对收敛。

(3). d'Alembert 判别法（比值判别法、达朗贝尔判别法）：

> 若 $\displaystyle\sum_{k=1}^{\infty} f_k$ 的通项 $f_k (k = 1, 2, \ldots)$ 满足
>
> $$
> \left| \frac{f_{k+1}}{f_k} \right| < \rho,
> $$
>
>  $\rho < 1$ 且与 $k$ 无关
>
> 则 $\displaystyle\sum_{k=1}^{\infty} f_k$ 绝对收敛。特别地，如果
> $$
> \lim_{k \to \infty} \left| \dfrac{f_{k+1}}{f_k} \right| = l,
> $$
>
> 则当 $l < 1$ 时，$\displaystyle\sum_{k=1}^{\infty} f_k$ 绝对收敛；
>
> 当 $l > 1$ 时，$\displaystyle\sum_{k=1}^{\infty} f_k$ 发散；
>
> 当 $l = 1$ 时，$\displaystyle\sum_{k=1}^{\infty} f_k$ 的敛散性须另行判断（如利用高斯判别法）。

(4). Cauchy 判别法（根式判别法）：

> 对于 $\displaystyle\sum_{k=1}^{\infty} f_k$，若有
>
> $$
> \lim_{k \to \infty} \sqrt[k]{|f_k|} = r,
> $$
>
> 则当 $r < 1$ 时，$\displaystyle\sum_{k=1}^{\infty} f_k$ 绝对收敛；
>
> 当 $r > 1$ 时，$\displaystyle\sum_{k=1}^{\infty} f_k$ 发散；
>
> 当 $r = 1$ 时，$\displaystyle\sum_{k=1}^{\infty} f_k$ 的敛散性须另行判断（如利用高斯判别法）。

(5). Gauss 判别法（高斯判别法）：

> 对于 $\displaystyle\sum_{k=1}^{\infty} f_k$，若
>
> $$
> \frac{f_k}{f_{k+1}} = 1 + \frac{\mu}{k} + O\left(\frac{1}{k^\lambda}\right), \quad \lambda > 1,
> $$
>
> 其中 $O\left(\dfrac{1}{k^\lambda}\right)$ 的含义见下文补充，$\mu \in \mathbb{C}$。
>
> 则当 $\operatorname{Re} \mu > 1$ 时，$\displaystyle\sum_{k=1}^{\infty} f_k$ 绝对收敛；
>
> 当 $\operatorname{Re} \mu \leq 1$ 时，$\displaystyle\sum_{k=1}^{\infty} |f_k|$ 发散。

/proof/

> 下面证明高斯判别法：
>
> 根据 $z \bar{z} = |z|^2$，有
>
> $$
> \begin{aligned}
> \left| \frac{f_k}{f_{k+1}} \right| &= \sqrt{\left(1 + \frac{\mu}{k} + O\left(\frac{1}{k^\lambda}\right)\right)\left(1 + \frac{\bar{\mu}}{k} + O\left(\frac{1}{k^\lambda}\right)\right)}\\\\
> &= \left(1 + \frac{\mu + \bar{\mu}}{k} + O\left(\frac{1}{k^\lambda}\right)\right)^{\frac{1}{2}}.
> \end{aligned}
> $$
>
> 根据
>
> $$
> (1 + y)^\alpha = 1 + \alpha y + O(y^2), \quad |y| \to 0,
> $$
>
> 取 $\alpha = \dfrac{1}{2}$，得
>
> $$
> \left| \frac{f_k}{f_{k+1}} \right| = 1 + \frac{\mu + \bar{\mu}}{2k} + O\left(\frac{1}{k^\lambda}\right) = 1 + \frac{\operatorname{Re} \mu}{k} + O\left(\frac{1}{k^\lambda}\right).
> $$
>
> 设 $g_k$ 为 $p$ 级数，则有
>
> $$
> \frac{g_k}{g_{k+1}} = \frac{(k+1)^p}{k^p} = 1 + \frac{p}{k} + O\left(\frac{1}{k^2}\right),
> $$
>
> 上面两式相应项进行比较，再根据 $p$ 级数的性质，即得当 $\operatorname{Re} \mu > 1$ 时，$\displaystyle\sum_{k=1}^{\infty} |f_k|$ 收敛，因而 $\displaystyle\sum_{k=1}^{\infty} f_k$ 绝对收敛；
>
> 当 $\operatorname{Re} \mu \leq 1$ 时，$\displaystyle\sum_{k=1}^{\infty} |f_k|$ 发散。
>
> 更严谨的证法如下：
>
> 当 $\operatorname{Re} \mu > 1$ 时，选取 $p \in (1, \operatorname{Re} \mu)$。显然存在 $m$，当 $k > m$ 时，有
>
> $$
> \begin{aligned}
> \frac{|f_k|}{|f_{k+1}|} &= \left| \frac{f_k}{f_{k+1}} \right| = 1 + \frac{\operatorname{Re} \mu}{k} + O\left(\frac{1}{k^\lambda}\right) \\\\
> &\geq 1 + \frac{p}{k} + O\left(\frac{1}{k^2}\right) = \frac{g_k}{g_{k+1}},
> \end{aligned}
> $$
>
> 由于此时 $p > 1$，因此 $\displaystyle\sum_{k=1}^{\infty} g_k$ 收敛。根据第二类比较判别法，可知 $\displaystyle\sum_{k=1}^{\infty} |f_k|$ 收敛，因而 $\displaystyle\sum_{k=1}^{\infty} f_k$ 绝对收敛。
>
> 当 $\operatorname{Re} \mu < 1$ 时，选取 $p \in (\operatorname{Re} \mu, 1)$。显然存在 $m$，当 $k > m$ 时，有
>
> $$
> \begin{aligned}
> \frac{|f_k|}{|f_{k+1}|} &= \left| \frac{f_k}{f_{k+1}} \right| = 1 + \frac{\operatorname{Re} \mu}{k} + O\left(\frac{1}{k^\lambda}\right) \\\\
> &\leq 1 + \frac{p}{k} + O\left(\frac{1}{k^2}\right) = \frac{g_k}{g_{k+1}},
> \end{aligned}
> $$
>
> 由于此时 $p < 1$，因此 $\displaystyle\sum_{k=1}^{\infty} g_k$ 发散。根据第二类比较判别法，$\displaystyle\sum_{k=1}^{\infty} |f_k|$ 发散。
>
> 当 $\operatorname{Re} \mu = 1$ 时，
>
> $$
> \left| \frac{f_k}{f_{k+1}} \right| = 1 + \frac{1}{k} + O\left(\frac{1}{k^\lambda}\right).
> $$
>
> 由 $h_k = O\left(\dfrac{1}{k^\lambda}\right)$ 的含义，知存在正实数 $M > 0$ 和正整数 $k_1$，当 $k > k_1$ 时，有
>
> $$
> |h_k| \leq M \frac{1}{k^\lambda}.
> $$
>
> 由于 $\lambda > 1$，可取 $\lambda' \in (1, \lambda)$，故存在正整数 $k_2$，当 $k > k_2$ 时，有
>
> $$
> M k^{\lambda'} < k^\lambda \quad \Rightarrow \quad M \frac{1}{k^\lambda} < \frac{1}{k^{\lambda'}},
> $$
>
> 由于 $\lambda' - 1 > 0$，因此存在 $k_3$，当 $k > k_3$ 时，$k^{\lambda' - 1} > \ln k$，故
>
> $$
> |h_k| \leq M \frac{1}{k^\lambda} < \frac{1}{k^{\lambda'}} < \frac{1}{k \ln k}.
> $$
>
> 取 $k_0 = \max\{k_1, k_2, k_3\}$，当 $k > k_3$ 时，有
>
> $$
> \left| \frac{f_k}{f_{k+1}} \right| = 1 + \frac{1}{k} + O\left(\frac{1}{k^\lambda}\right) < 1 + \frac{1}{k} + \frac{1}{k \ln k}.
> $$
>
> 由于
>
> $$
> \begin{aligned}
> \left(1 + \frac{1}{k}\right)^{k+1} > e &\Rightarrow (k+1)\ln\left(1 + \frac{1}{k}\right) > 1  \\\\
> &\Rightarrow (k+1)\ln(k+1) > k \ln k + \ln k + 1,
> \end{aligned}
> $$
>
> 故
>
> $$
> \begin{aligned}
> \left| \frac{f_k}{f_{k+1}} \right| &< 1 + \frac{1}{k} + \frac{1}{k \ln k} = \frac{k \ln k + \ln k + 1}{k \ln k}\\\\
> &< \frac{(k+1)\ln(k+1)}{k \ln k} = \frac{1 / k \ln k}{1 / (k+1)\ln(k+1)},
> \end{aligned}
> $$
>
> 由于 $d_k = \dfrac{1}{k \ln k}$ 对应级数发散，根据第二类比较判别法，可知 $\displaystyle\sum_{k=1}^{\infty} |f_k|$ 发散。

### · 函数项级数

/Definition/

> 复变函数项级数：
>
> 形如 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 的级数称为复变函数项级数。

/Definition/

> 一致收敛性：
>
> 设 $F_n(z) = \displaystyle\sum_{k=1}^{n} f_k(z)$ 是复变函数项级数 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 的前 $n$ 项和（构成部分和序列 $\{F_n(z)\}$）。如果在区域 $\sigma$ 上存在函数 $F(z)$，对任意正数 $\varepsilon$，总存在无关于 $z$ 的自然数 $N$，使得当 $n > N$ 时，对任意 $z \in \sigma$，均有
> $$
> |F(z) - F_n(z)| < \varepsilon,
> $$
>
> 则称 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 在 $\sigma$ 上一致收敛于 $F(z)$，并称 $F(z)$ 为 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 的和函数。

在区域 $\sigma$ 内，如果 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 一致收敛于 $F(z)$，则有如下性质成立：

(1). 连续性：

> 若对于任意 $k$，$f_k(z)$ 在区域 $\sigma$ 内处处连续，则 $\displaystyle\sum_{k=1}^{\infty} f_k(z) = F(z)$ 在 $\sigma$ 上必亦连续。

(2). 逐项可积性：

> 若对于任意 $k$，$f_k(z)$ 在 $\sigma$ 内的一条曲线 $l$ 上连续可积，则 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 可沿着 $l$ 逐项积分，换句话说，此时积分和求和可以交换次序，即
>
> $$
> \int_l F(z)\,\mathrm{d}z = \int_l \sum_{k=1}^{\infty} f_k(z)\,\mathrm{d}z = \sum_{k=1}^{\infty} \int_l f_k(z)\,\mathrm{d}z.
> $$
>

(3). 逐项可导性（Weierstrass 定理、魏尔斯特拉斯定理）：

> 若对于任意 $k$，$f_k(z)$ 在 $\sigma$ 内解析，且级数在 $\sigma$ 内任一闭区域 $\bar{\sigma}'$ 上一致收敛于 $F(z)$，则
>
> i. $F(z) = \displaystyle\sum_{k=1}^{\infty} f_k(z)$ 在 $\sigma$ 内解析；
>
> ii. 在 $\sigma$ 内级数可以逐项求导至任意阶，且
>
> $$
> F^{(n)}(z) = \left( \sum_{k=1}^{\infty} f_k(z) \right)^{(n)} = \sum_{k=1}^{\infty} f_k^{(n)}(z),
> $$
>
> 即此时求导和求和可以交换次序。

$M$ 判别法：复变函数项级数绝对且一致收敛的一种判别法

> 若对于任意 $k$，在区域 $\bar{\sigma} = \sigma + l$ 上 $|f_k(z)| \leq M_k$（$M_k$ 与 $z$ 无关），且 $\displaystyle\sum_{k=1}^{\infty} M_k$ 收敛，则 $\displaystyle\sum_{k=1}^{\infty} f_k(z)$ 在 $\bar{\sigma}$ 上绝对且一致收敛。
>
> 将上述条件改成“在区域 $\sigma$”内也成立。这是复变函数项级数绝对且一致收敛的一个充分不必要条件。

### · 幂级数

/Definition/

> **幂级数**：
>
> 形如 $\displaystyle\sum_{k=0}^{\infty} a_k (z - b)^k$ 的级数，称为幂级数。
>
> 它是一个以 $b$ 为中心的幂级数，其中 $a_k (k = 0,1,2,\ldots)$ 是复常数：$a_k \in \mathbb{C}$，$k = 0,1,2,\ldots$。

**Abel 定理（阿贝尔定理）**：幂级数敛散性判别法

> 若幂级数 $\displaystyle\sum_{k=0}^{\infty} a_k (z - b)^k$ 在某点 $z = z_0$ 处收敛，则它在 $|z - b| < |z_0 - b|$ 内（以 $b$ 为圆心，$|z_0 - b|$ 内为半径的圆区域内）绝对收敛，在更小的闭圆（$|z - b| \leq \rho$，$\rho < |z_0 - b|$）上一致收敛。

/proof/

> 因为 $\displaystyle\sum_{k=0}^{\infty} a_k (z - b)^k$ 在某点 $z = z_0$ 收敛，则由柯西判据，有
>
> $$
> \lim_{k \to \infty} |a_k (z_0 - b)^k| = 0,
> $$
>
> 则存在正数 $h$，使得
>
> $$
> |a_k (z_0 - b)^k| < h, \quad k = 0,1,2,\ldots
> $$
>
> 因此
>
> $$
> |a_k (z - b)^k| = \left| a_k (z_0 - b)^k \cdot \frac{(z - b)^k}{(z_0 - b)^k} \right| < h \left| \frac{(z - b)^k}{(z_0 - b)^k} \right|.
> $$
>
> 在以 $b$ 为圆心，$|z_0 - b|$ 内为半径的圆区域内，有 $|z - b| < |z_0 - b|$，故由上式及所考察闭圆区域 $|z - b| \leq \rho$，有
>
> $$
> |a_k (z - b)^k| < h \frac{\rho^k}{|z_0 - b|^k}.
> $$
>
> 由于 $\rho < |z_0 - b|$，因而有 $\left| \dfrac{\rho}{z_0 - b} \right| < 1$，所以 $\displaystyle\sum_{k=0}^{\infty} \left| \dfrac{\rho}{z_0 - b} \right|^k$ 绝对收敛。
>
> 根据上式以及 $M$ 判别法（取 $M_k = \left| \dfrac{\rho}{z_0 - b} \right|^k$，与 $z$ 无关），可知 $\displaystyle\sum_{k=0}^{\infty} a_k (z - b)^k$ 在更小的闭圆（$|z - b| \leq \rho$，$\rho < |z_0 - b|$）上一致收敛。

**推论**：如果幂级数 $\displaystyle\sum_{k=0}^{\infty} a_k (z - b)^k$ 在某点 $z = z_0$ 处发散，则该幂级数在 $|z - b| > |z_0 - b|$ 上处处发散。

> 该推论可用反证法简单证明。

/Definition/

> **收敛圆和收敛半径**：
>
> 从以上定理及其推论可以看出，幂级数的收敛区域和发散区域是不可能相间的。必然存在一个以 $b$ 为圆心、以 $R$（$0 \leq R < \infty$）为半径的圆，在圆内级数绝对收敛，而在圆外级数发散。这个圆称为该幂级数的收敛圆，而 $R$ 称为它的收敛半径。

Abel 定理及其推论并未确定收敛圆周上的收敛性，收敛圆周上幂级数的收敛性，需要另外讨论。可能会出现在圆周上一些点收敛，另一些点发散的情况。

另外，可以看出，如果对于某个以 $b$ 为圆心，以 $R$（$0 \leq R < \infty$）为半径的圆，在圆周上存在两个不同点，在一点上幂级数收敛，在另一点发散，则该圆就是收敛圆的圆周。

/Definition/

> **幂级数的收敛半径**：
>
> 根据达朗贝尔比值判别法，可判断幂级数的收敛半径。设 $f_k = a_k (z - b)^k$。
>
> 因为 $\lim_{k \to \infty} \left| \dfrac{f_{k+1}}{f_k} \right| = \lim_{k \to \infty} \left| \dfrac{a_{k+1}}{a_k} \right| |z - b|$，所以由比值判别法，
>
> 当 $\lim_{k \to \infty} \left| \dfrac{a_{k+1}}{a_k} \right| |z - b| < 1$ 时，即 $|z - b| < \lim_{k \to \infty} \left| \dfrac{a_k}{a_{k+1}} \right|$ 时，级数绝对收敛；
>
> 当 $\lim_{k \to \infty} \left| \dfrac{a_{k+1}}{a_k} \right| |z - b| > 1$ 时，即 $|z - b| > \lim_{k \to \infty} \left| \dfrac{a_k}{a_{k+1}} \right|$ 时，级数发散。
>
> 因此，幂级数的收敛圆以 $b$ 为圆心，收敛半径为
>
> $$
> R = \lim_{k \to \infty} \left| \frac{a_k}{a_{k+1}} \right|.
> $$
>
> 
>
> 另外，也可以根据根式判别法求收敛半径，这是收敛圆半径的一种等价求法。与上面做法类似，可得
>
> $$
> R = \lim_{k \to \infty} \frac{1}{\sqrt[k]{|a_k|}}.
> $$

/example/

> 求如下级数的收敛半径，并讨论其收敛圆圆周上的敛散性：
>
> (1).
> $$
> \sum_{k=1}^{\infty} \dfrac{1}{k} z^k
> $$
> (2).
> $$
> \sum_{k=1}^{\infty} \dfrac{1}{k^2} z^k
> $$
> (3).
> $$
> \sum_{k=0}^{\infty} \dfrac{1}{2^{2k}} z^k
> $$

/proof/

> (1) 由题设，$a_k = \dfrac{1}{k}$，则  
> $$
> R = \lim_{k \to \infty} \frac{a_k}{a_{k+1}} = \lim_{k \to \infty} \frac{\frac{1}{k}}{\frac{1}{k+1}} = \lim_{k \to \infty} \frac{k+1}{k} = 1.
> $$
> 收敛圆为 $|z| = 1$。
>
> 在 $|z| = 1$ 上时，若 $z = 1$，原级数成为调和级数，此时级数发散；若 $z = -1$，级数变为 $\displaystyle\sum_{k=1}^{\infty} \dfrac{(-1)^k}{k}$，是交错级数。由莱布尼茨判别法，由于 $\left| \dfrac{(-1)^k}{k} \right| \to 0$（$k \to \infty$），可知此时级数收敛。
>
> 对于圆周上其它点对应级数敛散性的讨论，需要用到数学分析课程中的一个例子。
>
> 我们知道，复级数 $\displaystyle\sum_{k=1}^{\infty} z_k$ 收敛当且仅当 $\displaystyle\sum_{k=1}^{\infty} \operatorname{Re} z_k$ 和 $\displaystyle\sum_{k=1}^{\infty} \operatorname{Im} z_k$ 均收敛。因 $|z| = 1$，可设 $z = e^{i\varphi}$，$\varphi \in [0, 2\pi)$。于是有
>
> $$
> \sum_{k=1}^{\infty} \frac{z^k}{k} = \sum_{k=1}^{\infty} \frac{e^{ik\varphi}}{k} = \sum_{k=1}^{\infty} \frac{\cos k\varphi}{k} + i \sum_{k=1}^{\infty} \frac{\sin k\varphi}{k}.
> $$
>
> 问题转化为 $\displaystyle\sum_{k=1}^{\infty} \dfrac{\cos k\varphi}{k}$ 和 $\displaystyle\sum_{k=1}^{\infty} \dfrac{\sin k\varphi}{k}$ 的敛散性问题。
>
> 我们仅考虑 $z \ne 1$ 的情况，此时 $\varphi \ne 0$。根据数学分析的知识$^{11}$可知 $\varphi \ne 0$ 时，以上两个级数均收敛。所以 $\displaystyle\sum_{k=1}^{\infty} \dfrac{1}{k} z^k$ 在复平面上的单位圆除去 $z = 1$ 是收敛的。
>
> (2) 由题设，$a_k = \dfrac{1}{k^2}$，则  
> $$
> R = \lim_{k \to \infty} \frac{a_k}{a_{k+1}} = \lim_{k \to \infty} \frac{\frac{1}{k^2}}{\frac{1}{(k+1)^2}} = \lim_{k \to \infty} \frac{(k+1)^2}{k^2} = 1.
> $$
> 收敛圆为 $|z| = 1$。
>
> 在 $|z| = 1$ 时，$\displaystyle\sum_{k=1}^{\infty} \left| \dfrac{1}{k^2} z^k \right| = \displaystyle\sum_{k=1}^{\infty} \dfrac{1}{k^2}$ 收敛，所以 $\displaystyle\sum_{k=1}^{\infty} \dfrac{1}{k^2} z^k$ 在该圆周上处处绝对收敛，因而处处收敛。
>
> (3) 由题设，$a_k = \dfrac{1}{2^{2k}}$，则  
> $$
> R = \lim_{k \to \infty} \frac{1}{\sqrt[k]{|a_k|}} = \lim_{k \to \infty} \frac{1}{\sqrt[k]{\frac{1}{2^{2k}}}} = \lim_{k \to \infty} \frac{1}{\left( \frac{1}{2^{2k}} \right)^{1/k}} = \lim_{k \to \infty} \frac{1}{\frac{1}{2^2}} = 4.
> $$
> 因此收敛圆为 $|z| = 4$。
>
> 在 $|z| = 4$ 上，可设 $z = 4e^{i\varphi}$，$\varphi \in [0, 2\pi)$，代入级数，利用等比数列求和公式求其前 $k$ 项和，得
>
> $$
> F_k =
> \begin{cases}
> \displaystyle \frac{1 - e^{ik\varphi}}{1 - e^{i\varphi}}, & \varphi \ne 0, \\\\
> k, & \varphi = 0.
> \end{cases}
> $$
>
> 当 $\varphi = 0$ 时，序列 $\{F_k\}$ 在 $k \to \infty$ 时不收敛；当 $\varphi \ne 0$ 且 $\varphi = 2\pi \dfrac{p}{q}$（$\dfrac{p}{q}$ 表示有理数）时，$F_k$ 是周期序列，在 $k \to \infty$ 时不收敛；当 $\varphi = 2\pi a$，$a$ 为无理数时，$e^{ik\varphi}$ 代表的向量在复平面上随着 $k$ 增大一直绕原点旋转，不可能收敛，故序列 $\{F_k\}$ 在 $k \to \infty$ 时不收敛。
>
> 因此 $\displaystyle\sum_{k=0}^{\infty} \dfrac{1}{2^{2k}} z^k$ 在 $|z| = 4$ 上处处发散。

**幂级数的一致收敛性带来的性质**：

> 幂级数在比收敛圆稍小的闭圆上一致收敛，故具有逐项可积性和逐项可导性。易于证明，逐项积分和微分后，得到新的前后项系数比的模的极限没变：
>
> $$
> \lim_{k \to \infty} \left| \frac{a_k}{a_{k+1}} \right| = \lim_{k \to \infty} \left| \frac{k a_k}{(k+1)a_{k+1}} \right| = \lim_{k \to \infty} \left| \frac{\frac{a_k}{k+1}}{\frac{a_{k+1}}{k+2}} \right|,
> $$

/example/

> 求下列无穷级数
>
> $$
> S(t) = \sum_{n=2}^{\infty} \frac{e^{-nt}}{n^2 - 1}, \quad t > 0.
> $$

/proof/

> 已知
> $$
> S(t) = \frac{1}{2} \sum_{n=2}^{\infty} \left( \frac{e^{-nt}}{n-1} - \frac{e^{-nt}}{n+1} \right).
> $$
>
> 考察积分
>
> $$
> \int_t^{\infty} e^{-(n+1)x} \,\mathrm{d}x = -\frac{1}{n+1} e^{-(n+1)x} \Big|_t^{\infty} = \frac{1}{n+1} e^{-(n+1)t},
> $$
>
> $$
> \int_t^{\infty} e^{-(n-1)x} \,\mathrm{d}x = -\frac{1}{n-1} e^{-(n-1)x} \Big|_t^{\infty} = \frac{1}{n-1} e^{-(n-1)t},
> $$
>
> 利用以上二式，有
>
> $$
> \begin{aligned}
> S(t) &= \frac{1}{2} \sum_{n=2}^{\infty} \left( \frac{e^{-nt}}{n-1} - \frac{e^{-nt}}{n+1} \right) \\\\
> &=\frac{1}{2} \sum_{n=2}^{\infty} \left( e^{-t} \int_t^{\infty} e^{-(n-1)x} \,\mathrm{d}x + e^{t} \int_t^{\infty} e^{-(n+1)x} \,\mathrm{d}x \right),
> \end{aligned}
> $$
>
> 由于 $\displaystyle\sum_{n=2}^{\infty} e^{-(n \pm 1)x}$ 在 $x > 0$ 时一致收敛（利用等比数列求和公式），因此上式积分和求和次序可以交换。因而有
>
> $$
> \begin{aligned}
> S(t) &= \frac{1}{2} \left[ \int_t^{\infty} \left( e^{-t} \sum_{n=2}^{\infty} e^{-(n-1)x} + e^{t} \sum_{n=2}^{\infty} e^{-(n+1)x} \right) \,\mathrm{d}x \right] \\\\
> &= \frac{1}{2} \left[ \int_t^{\infty} \left( e^{-t} \frac{e^{-x}}{1 - e^{-x}} + e^{t} \frac{e^{3x}}{1 - e^{x}} \right) \,\mathrm{d}x \right].
> \end{aligned}
> $$
>
> 令 $y = e^{-x}$。代入上式可得
>
> $$
> \begin{aligned}
> S(t) &= \frac{1}{2} \left[ \int_{e^{-t}}^{0} e^{-t} \frac{1}{1 - y} \,\mathrm{d}y + \int_{e^{-t}}^{0} e^{t} \frac{y^2}{1 - y} \,\mathrm{d}y \right] \\\\
> &= \ln(1 - e^{-t}) \sinh t + \frac{e^{-t}}{4} + \frac{1}{2}.
> \end{aligned}
> $$

### · 泰勒级数

/Definition/

> **Taylor 定理（泰勒定理）**：
>
> 设 $f(z)$ 在区域 $\sigma$ 内解析，则在 $\sigma$ 内任意一点 $z = b$ 的邻域 $|\zeta - b| < R$（含于 $\sigma$ 内），则 $f(z)$ 可以展开为幂级数
>
> $$
> f(z) = \sum_{k=0}^{\infty} a_k (z - b)^k,
> $$
>
> 称为 Taylor 级数（泰勒级数）。其中系数
>
> $$
> a_k = \frac{1}{k!} f^{(k)}(b), \quad k = 0,1,2,\ldots,
> $$
> 称为泰勒系数。此展开是唯一的。

/proof/

> 设 $z$ 为圆 $|\zeta - b| = R$ 内一给定点，则总可以找到一个更小的圆 $l: |\zeta - b| = \rho < R$，使 $z$ 也在此圆的内部。使用柯西公式，得
>
> $$
> f(z) = \frac{1}{2\pi i} \oint_l \frac{f(\zeta)}{\zeta - z} \,\mathrm{d}\zeta,
> $$
>
> 然后对 $\dfrac{1}{\zeta - z}$ 进行变形和展开，有（注意 $|z - b| < |\zeta - b|$，即 $\left| \frac{z - b}{\zeta - b} \right| < 1$）
>
> $$
> \frac{1}{\zeta - z} = \frac{1}{\zeta - b - (z - b)} = \left( \frac{1}{\zeta - b} \right) \frac{1}{1 - \left( \frac{z - b}{\zeta - b} \right)} = \frac{1}{\zeta - b} \sum_{k=0}^{\infty} \left( \frac{z - b}{\zeta - b} \right)^k,
> $$
>
> 代入 $\dfrac{f(\zeta)}{\zeta - z}$，可得
>
> $$
> \begin{aligned}
> \frac{f(\zeta)}{\zeta - z} &= \frac{f(\zeta)}{\zeta - b} \sum_{k=0}^{\infty} \left( \frac{z - b}{\zeta - b} \right)^k \\\\
> &= \sum_{k=0}^{\infty} \frac{f(\zeta)}{(\zeta - b)^{k+1}} (z - b)^k,
> \end{aligned}
> $$
>
> 这说明 $\displaystyle\sum_{k=0}^{\infty} \dfrac{f(\zeta)}{(\zeta - b)^{k+1}} (z - b)^k$ 在 $l$ 内一致收敛于 $\dfrac{f(\zeta)}{\zeta - z}$，因此可以交换积分和求和的次序。故
>
> $$
> \begin{aligned}
> f(z) &= \frac{1}{2\pi i} \sum_{k=0}^{\infty} \oint_l \frac{f(\zeta)}{(\zeta - b)^{k+1}} \,\mathrm{d}\zeta (z - b)^k \\\\
> &= \sum_{k=0}^{\infty} \left( \frac{1}{2\pi i} \oint_l \frac{f(\zeta)}{(\zeta - b)^{k+1}} \,\mathrm{d}\zeta \right) (z - b)^k,
> \end{aligned}
> $$
>
> 根据解析函数的导数公式，有 $f^{(k)}(b) = \dfrac{k!}{2\pi i} \displaystyle\oint_l \dfrac{f(\zeta)}{(\zeta - b)^{k+1}} \,\mathrm{d}\zeta$，代入上式，有
>
> $$
> f(z) = \sum_{k=0}^{\infty} \frac{f^{(k)}(b)}{k!} (z - b)^k.
> $$
>
> 所以 $a_k = \dfrac{1}{k!} f^{(k)}(b)$，$k = 0,1,2,\ldots$。下面证明唯一性。
>
> 设有两个泰勒级数代表同一个解析函数
>
> $$
> f(z) = \sum_{k=0}^{\infty} a_k (z - b)^k = \sum_{k=0}^{\infty} a'_k (z - b)^k,
> $$
>
> 令 $z = b$，得到 $a_0 = a'_0$。对上式求导（注意一致收敛带来的逐项可导性），有
>
> $$
> f'(z) = \sum_{k=1}^{\infty} k a_k (z - b)^{k-1} = \sum_{k=1}^{\infty} k a'_k (z - b)^{k-1},
> $$
>
> 再令 $z = b$，得到 $a_1 = a'_1$。仿照这种方法一直做下去，即可证明对于所有的 $k (k = 0,1,2,\ldots)$ 均有 $a_k = a'_k$，因此展开是唯一的。

**常用的展开公式**：

> (1). 最简单的有理分式展开式：
>
> $$
> \frac{1}{1 - z} = \sum_{k=0}^{\infty} z^k, \quad |z| < 1.
> $$
>
> $$
> \frac{1}{1 + z} = \sum_{k=0}^{\infty} (-1)^k z^k, \quad |z| < 1.
> $$
>
> (2). 指数函数展开式：
>
> $$
> e^z = \sum_{k=0}^{\infty} \frac{z^k}{k!}, \quad |z| < \infty.
> $$
>
> (3). 三角函数展开式：
>
> $$
> \sin z = \sum_{k=0}^{\infty} \frac{(-1)^k z^{2k+1}}{(2k+1)!}, \quad |z| < \infty.
> $$
>
> $$
> \cos z = \sum_{k=0}^{\infty} \frac{(-1)^k z^{2k}}{(2k)!}, \quad |z| < \infty.
> $$
>
> (4). 对数函数展开式：
>
> $$
> \ln(1 - z) = -\sum_{k=1}^{\infty} \frac{z^k}{k}, \quad |z| < 1.
> $$
>
> $$
> \ln(1 + z) = \sum_{k=1}^{\infty} \frac{(-1)^{k-1} z^k}{k}, \quad |z| < 1.
> $$

/example/ 求 $\dfrac{1}{1 + z + z^2}$ 在 $z = 0$ 的邻域的泰勒展开。

/proof/

> 原式 $= \dfrac{1 - z}{1 - z^3} = (1 - z) \displaystyle\sum_{k=0}^{\infty} (z^3)^k$，收敛域为 $|z^3| < 1$，即 $|z| < 1$。则
>
> $$
> \frac{1}{1 + z + z^2} = \sum_{k=0}^{\infty} (z^{3k} - z^{3k+1}).
> $$

/Definition/

> **柯西乘积（Cauchy product）**：
>
> 对于两个绝对收敛的级数 $\displaystyle\sum_{n=0}^{\infty} a_n$ 和 $\displaystyle\sum_{n=0}^{\infty} b_n$，其柯西乘积定义为
>
> $$
> \left( \sum_{n=0}^{\infty} a_n \right) \left( \sum_{n=0}^{\infty} b_n \right) = \sum_{n=0}^{\infty} c_n,
> $$
>
> 其中
>
> $$
> c_n = \sum_{k=0}^{n} a_k b_{n-k}.
> $$
>
> 对于函数项级数 $\displaystyle\sum_{n=0}^{\infty} a_n z^n$ 和 $\displaystyle\sum_{n=0}^{\infty} b_n z^n$，其柯西乘积为
>
> $$
> \left( \sum_{n=0}^{\infty} a_n z^n \right) \left( \sum_{n=0}^{\infty} b_n z^n \right) = \sum_{n=0}^{\infty} c_n z^n.
> $$

**无穷级数乘积的敛散性**：

> 设 $\{a_n\}$ 和 $\{b_n\}$ 是两个实序列或者复数序列。如果
>
> $$
> \sum_{n=0}^{\infty} a_n = A, \quad \sum_{n=0}^{\infty} b_n = B,
> $$
>
> 且其中一个级数绝对收敛，则其柯西乘积收敛于 $AB$，即
>
> $$
> \sum_{n=0}^{\infty} c_n = AB.
> $$
>
> 该定理称为 Mertens 定理（梅滕斯定理）。
>
> 如果 $\displaystyle\sum_{n=0}^{\infty} a_n$ 和 $\displaystyle\sum_{n=0}^{\infty} b_n$ 均绝对收敛，则其乘积（无论其各项如何排序和组合）也绝对收敛。

/example/ 求 $\dfrac{1}{1 - z^2}$ 在 $|z| < 1$ 时以 $z = 0$ 为中心的泰勒展开。

/proof/

> **方法 1**：当 $|z| < 1$ 时，
>
> $$
> \frac{1}{1 - z^2} = \sum_{k=0}^{\infty} (z^2)^k = \sum_{k=0}^{\infty} z^{2k}.
> $$
>
> **方法 2**：
>
> $$
> \frac{1}{1 - z^2} = \frac{1}{2} \left( \frac{1}{1 - z} + \frac{1}{1 + z} \right) = \frac{1}{2} \left( \sum_{k=0}^{\infty} z^k + \sum_{k=0}^{\infty} (-1)^k z^k \right) = \sum_{k=0}^{\infty} z^{2k}.
> $$
>
> **方法 3**：还可以用柯西乘积表的方法
>
> $$
> \frac{1}{1 - z^2} = \left( \frac{1}{1 - z} \right) \left( \frac{1}{1 + z} \right) = \left( \sum_{k=0}^{\infty} z^k \right) \left( \sum_{k=0}^{\infty} (-1)^k z^k \right),
> $$

## Part 2 Laurent 级数
