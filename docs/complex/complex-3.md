---
title: Chapter 3 级数
permalink: /complex/complex-3/
createTime: 2025/11/28 13:02:58
---

## Part 1 幂级数

### · 复级数

我们先给出复级数的定义.

/Definition/

> 形如 $f_1 + f_2 + \cdots + f_k + \cdots = \sum_{k=1}^{\infty} f_k$ 的级数（其中 $f_k = u_k + i v_k \in \mathbb{C}$）称为复数项级数。显然，我们有
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

存在且有限，则称 $\sum_{k=1}^{\infty} f_k$ 收敛于 $F = u + i v$。即 $\sum_{k=1}^{\infty} f_k$ 收敛等价于

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
> 那么 $\sum_{k=1}^{\infty} f_k$ 一定收敛（可证明这是一个充要条件）。

取 $p = 1$，得到 $\sum_{k=1}^{\infty} f_k$ 收敛的一个必要条件（但不充分）：

$$
\lim_{k \to \infty} |f_k| = 0.
$$

例如，取 $f_k = (-1)^k \frac{1}{k}$，它满足上述必要条件，且由莱布尼茨判别法可知其对应级数收敛；

但取 $f_k = \frac{1}{k}$，满足上式，但其对应的级数不收敛。这说明上面这一条件确实是必要不充分的。

同理我们可以给出绝对收敛的定义：

/Definition/

> 绝对收敛：
>
> 如果 $\sum_{k=1}^{\infty} |f_k|$ 收敛，则称 $\sum_{k=1}^{\infty} f_k$ 绝对收敛。
>
> 原级数本身 $\sum_{k=1}^{\infty} f_k$ 当然也收敛，这是因为：
> $$
> |f_{k+1} + f_{k+2} + \cdots + f_{k+p}| < |f_{k+1}| + |f_{k+2}| + \cdots + |f_{k+p}|.
> $$

**绝对收敛级数的性质和判别法**：

(1). 任意交换或改变次序而得到新级数仍然收敛，且其和不变。

(2). 两个绝对收敛的级数，可以逐项相乘（即第一个级数的第 $k$ 项 $f_k$ 和第二个级数的第 $k$ 项 $g_k$ 相乘），所得新的级数仍然绝对收敛。

(3). d'Alembert 判别法（比值判别法、达朗贝尔判别法）：

> 若 $\sum_{k=1}^{\infty} f_k$ 的通项 $f_k (k = 1, 2, \ldots)$ 满足
>
> $$
> \left| \frac{f_{k+1}}{f_k} \right| < \rho,
> $$
>
>  $\rho < 1$ 且与 $k$ 无关
>
> 则 $\sum_{k=1}^{\infty} f_k$ 绝对收敛。特别地，如果
> $$
> \lim_{k \to \infty} \left| \frac{f_{k+1}}{f_k} \right| = l,
> $$
>
> 则当 $l < 1$ 时，$\sum_{k=1}^{\infty} f_k$ 绝对收敛；
>
> 当 $l > 1$ 时，$\sum_{k=1}^{\infty} f_k$ 发散；
>
> 当 $l = 1$ 时，$\sum_{k=1}^{\infty} f_k$ 的敛散性须另行判断（如利用高斯判别法）。

(4). Cauchy 判别法（根式判别法）：

> 对于 $\sum_{k=1}^{\infty} f_k$，若有
>
> $$
> \lim_{k \to \infty} \sqrt[k]{|f_k|} = r,
> $$
>
> 则当 $r < 1$ 时，$\sum_{k=1}^{\infty} f_k$ 绝对收敛；
>
> 当 $r > 1$ 时，$\sum_{k=1}^{\infty} f_k$ 发散；
>
> 当 $r = 1$ 时，$\sum_{k=1}^{\infty} f_k$ 的敛散性须另行判断（如利用高斯判别法）。

(5). Gauss 判别法（高斯判别法）：

> 对于 $\sum_{k=1}^{\infty} f_k$，若
>
> $$
> \frac{f_k}{f_{k+1}} = 1 + \frac{\mu}{k} + O\left(\frac{1}{k^\lambda}\right), \quad \lambda > 1,
> $$
>
> 其中 $O\left(\frac{1}{k^\lambda}\right)$ 的含义见下文补充，$\mu \in \mathbb{C}$。
>
> 则当 $\operatorname{Re} \mu > 1$ 时，$\sum_{k=1}^{\infty} f_k$ 绝对收敛；
>
> 当 $\operatorname{Re} \mu \leq 1$ 时，$\sum_{k=1}^{\infty} |f_k|$ 发散。

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
> 取 $\alpha = \frac{1}{2}$，得
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
> 上面两式相应项进行比较，再根据 $p$ 级数的性质，即得当 $\operatorname{Re} \mu > 1$ 时，$\sum_{k=1}^{\infty} |f_k|$ 收敛，因而 $\sum_{k=1}^{\infty} f_k$ 绝对收敛；当 $\operatorname{Re} \mu \leq 1$ 时，$\sum_{k=1}^{\infty} |f_k|$ 发散。
>
> 更严谨的证法如下（不作要求，仅作参考。跳过该证明完全不影响整体课程学习）：
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
> 由于此时 $p > 1$，因此 $\sum_{k=1}^{\infty} g_k$ 收敛。根据第二类比较判别法，可知 $\sum_{k=1}^{\infty} |f_k|$ 收敛，因而 $\sum_{k=1}^{\infty} f_k$ 绝对收敛。
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
> 由于此时 $p < 1$，因此 $\sum_{k=1}^{\infty} g_k$ 发散。根据第二类比较判别法，$\sum_{k=1}^{\infty} |f_k|$ 发散。
>
> 当 $\operatorname{Re} \mu = 1$ 时，
>
> $$
> \left| \frac{f_k}{f_{k+1}} \right| = 1 + \frac{1}{k} + O\left(\frac{1}{k^\lambda}\right).
> $$
>
> 由 $h_k = O\left(\frac{1}{k^\lambda}\right)$ 的含义，知存在正实数 $M > 0$ 和正整数 $k_1$，当 $k > k_1$ 时，有
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
> 由于 $d_k = \frac{1}{k \ln k}$ 对应级数发散，根据第二类比较判别法，可知 $\sum_{k=1}^{\infty} |f_k|$ 发散。

### · 函数项级数

/Definition/

> 复变函数项级数：
>
> 形如 $\sum_{k=1}^{\infty} f_k(z)$ 的级数称为复变函数项级数。

/Definition/

> 一致收敛性：
>
> 设 $F_n(z) = \sum_{k=1}^{n} f_k(z)$ 是复变函数项级数 $\sum_{k=1}^{\infty} f_k(z)$ 的前 $n$ 项和（构成部分和序列 $\{F_n(z)\}$）。如果在区域 $\sigma$ 上存在函数 $F(z)$，对任意正数 $\varepsilon$，总存在无关于 $z$ 的自然数 $N$，使得当 $n > N$ 时，对任意 $z \in \sigma$，均有
> $$
> |F(z) - F_n(z)| < \varepsilon,
> $$
>
> 则称 $\sum_{k=1}^{\infty} f_k(z)$ 在 $\sigma$ 上一致收敛于 $F(z)$，并称 $F(z)$ 为 $\sum_{k=1}^{\infty} f_k(z)$ 的和函数。

在区域 $\sigma$ 内，如果 $\sum_{k=1}^{\infty} f_k(z)$ 一致收敛于 $F(z)$，则有如下性质成立：

(1). 连续性：

> 若对于任意 $k$，$f_k(z)$ 在区域 $\sigma$ 内处处连续，则 $\sum_{k=1}^{\infty} f_k(z) = F(z)$ 在 $\sigma$ 上必亦连续。

(2). 逐项可积性：

> 若对于任意 $k$，$f_k(z)$ 在 $\sigma$ 内的一条曲线 $l$ 上连续可积，则 $\sum_{k=1}^{\infty} f_k(z)$ 可沿着 $l$ 逐项积分，换句话说，此时积分和求和可以交换次序，即
>
> $$
> \int_l F(z)\,\mathrm{d}z = \int_l \sum_{k=1}^{\infty} f_k(z)\,\mathrm{d}z = \sum_{k=1}^{\infty} \int_l f_k(z)\,\mathrm{d}z.
> $$
>

(3). 逐项可导性（Weierstrass 定理、魏尔斯特拉斯定理）：

> 若对于任意 $k$，$f_k(z)$ 在 $\sigma$ 内解析，且级数在 $\sigma$ 内任一闭区域 $\bar{\sigma}'$ 上一致收敛于 $F(z)$，则
>
> i. $F(z) = \sum_{k=1}^{\infty} f_k(z)$ 在 $\sigma$ 内解析；
>
> ii. 在 $\sigma$ 内级数可以逐项求导至任意阶，且
>
> $$
> F^{(n)}(z) = \left( \sum_{k=1}^{\infty} f_k(z) \right)^{(n)} = \sum_{k=1}^{\infty} f_k^{(n)}(z),
> $$
>
> 即此时求导和求和可以交换次序。

$M$ 判别法：复变函数项级数绝对且一致收敛的一种判别法

> 若对于任意 $k$，在区域 $\bar{\sigma} = \sigma + l$ 上 $|f_k(z)| \leq M_k$（$M_k$ 与 $z$ 无关），且 $\sum_{k=1}^{\infty} M_k$ 收敛，则 $\sum_{k=1}^{\infty} f_k(z)$ 在 $\bar{\sigma}$ 上绝对且一致收敛。
>
> 将上述条件改成“在区域 $\sigma$”内也成立。这是复变函数项级数绝对且一致收敛的一个充分不必要条件。

### · 幂级数

### · 泰勒级数

## Part 2 Laurent 级数
