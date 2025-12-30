---
title: Chapter 22 Riemann-Stieltjes 积分
permalink: /integral/integral-22/
createTime: 2025/12/25 21:30:25
---

## Part 1 有界变差函数

回顾一下有界变差函数的定义：设 $f$ 是定义在 $[a,b]$ 上的函数，对于区间 $[a,b]$ 的任意分割

$$
\pi: a = x_0 < x_1 < \cdots < x_n = b,
$$

记

$$
v(f;\pi) = \sum_{i=1}^{n} |f(x_i) - f(x_{i-1})|,
$$

如果 $\sup_\pi v(f;\pi)$ 有限，则称 $f$ 为 $[a,b]$ 上的有界变差函数，其全变差记为

$$
\bigvee_a^b (f) = \sup_\pi v(f;\pi).
$$

我们已经知道单调函数、Lipschitz 函数等均为有界变差函数。此外，有界变差函数还具有以下性质：

> - 有界变差函数必为有界函数。事实上，
>
>   $$
>   |f(x)| \leq |f(a)| + |f(x) - f(a)| + |f(b) - f(x)| \leq |f(a)| + \bigvee_a^b (f).
>   $$
>
> - 两个有界变差函数的线性组合以及乘积仍为有界变差函数。
>
> - 设 $f, g$ 为有界变差函数，且 $|g(x)| \geq \lambda > 0$，则 $f/g$ 也是有界变差函数。
>
> - 设 $c \in (a,b)$。则 $f$ 在 $[a,b]$ 上为有界变差函数当且仅当 $f$ 在 $[a,c]$ 和 $[c,b]$ 上均为有界变差函数，此时
>
>   $$
>   \bigvee_a^b (f) = \bigvee_a^c (f) + \bigvee_c^b (f).
>   $$
>
>   证明如下：设 $f$ 在 $[a,b]$ 上为有界变差函数，任取区间 $[a,c]$ 和 $[c,b]$ 的分割 $\pi_1$ 和 $\pi_2$，则
>
>   $$
>   v(f|_{[a,c]};\pi_1) + v(f|_{[c,b]};\pi_2) = v(f;\pi_1 \cup \pi_2) \leq \bigvee_a^b (f),
>   $$
>
>   这说明 $f$ 在 $[a,c]$ 和 $[c,b]$ 上均为有界变差函数，且
>
>   $$
>   \bigvee_a^c (f) + \bigvee_c^b (f) \leq \bigvee_a^b (f).
>   $$
>
>   反之，如果 $f$ 在 $[a,c]$ 和 $[c,b]$ 上均为有界变差函数，则任取 $[a,b]$ 的分割 $\pi$，如果 $c$ 不在 $\pi$ 的分点之内，则添加 $c$ 为分点，此时 $f$ 的变差和不会变小，从而
>
>   $$
>   v(f;\pi) \leq \bigvee_a^c (f) + \bigvee_c^b (f),
>   $$
>
>   即 $f$ 在 $[a,b]$ 上也是有界变差函数，且
>
>   $$
>   \bigvee_a^b (f) \leq \bigvee_a^c (f) + \bigvee_c^b (f).
>   $$
>

从最后这一条性质可以立即得到

**推论1.** 

> 设 $f$ 为 $[a,b]$ 上的有界变差函数，则
>
> $$
> g(x) = \bigvee_a^x (f), \quad x \in [a,b]
> $$
>
> 为 $[a,b]$ 上的非负单调递增函数。

/proof/

> 设 $x \leq y \in [a,b]$，则
>
> $$
> g(y) - g(x) = \bigvee_a^y (f) - \bigvee_a^x (f) = \bigvee_x^y (f) \geq 0,
> $$
>
> 因此 $g$ 为单调递增函数。

下面的结果给出了有界变差函数的刻画。

**定理2.** 

>  $f$ 为有界变差函数当且仅当它是两个单调递增函数之差。

/proof/

> 只要证明必要性就可以了。设 $f$ 为 $[a,b]$ 上的有界变差函数，令
>
> $$
> g(x) = \bigvee_a^x (f), \quad h(x) = g(x) - f(x), \quad x \in [a,b],
> $$
>
> 则 $f = g - h$，我们已经知道 $g$ 单调递增，下面说明 $h$ 也是单调递增的。任取 $x \leq y \in [a,b]$，则
>
> $$
> \begin{aligned}
> h(y) - h(x) &= [g(y) - g(x)] - [f(y) - f(x)] \\\\
> &= \bigvee_x^y (f) - [f(y) - f(x)] \geq |f(y) - f(x)| - [f(y) - f(x)] \geq 0,
> \end{aligned}
> $$
>
> 因此 $h$ 也是单调递增函数。
>
> **注意.** 上述等式 $f = g - h$ 称为 $f$ 的典范分解。

**命题3.** 

> 设 $f$ 为 $[a,b]$ 上的有界变差函数，如果 $f$ 在 $\xi$ 处连续，则
>
> $$
> g(x) = \bigvee_a^x (f)
> $$
>
> 也在 $\xi$ 处连续。

/proof/

> 设 $a < \xi$，我们证明 $g$ 在 $\xi$ 处左连续，右连续的证明是类似的。因为 $g$ 是单调递增函数，故 $g(x)$ 在 $\xi$ 处的左极限 $g(\xi - 0)$ 存在，且 $g(\xi - 0) \leq g(\xi)$。任给 $\varepsilon > 0$，取 $[a,\xi]$ 的分割
>
> $$
> \pi: a = x_0 < x_1 < \cdots < x_m = \xi
> $$
>
> 使得
>
> $$
> v = \sum_{i=1}^{m} |f(x_i) - f(x_{i-1})| > \bigvee_a^\xi (f) - \varepsilon.
> $$
>
> 根据 $f$ 在 $\xi$ 处连续知，存在 $0 < \delta < |\xi - x_{m-1}|$，使得当 $|x - \xi| < \delta$ 时
>
> $$
> |f(x) - f(\xi)| < \varepsilon.
> $$
>
> 于是当 $x \in (\xi - \delta, \xi)$ 时，有
>
> $$
> \begin{aligned}
> g(x) &\geq \sum_{i=1}^{m-1} |f(x_i) - f(x_{i-1})| + |f(x) - f(x_{m-1})| \\\\
> &\geq \sum_{i=1}^{m-1} |f(x_i) - f(x_{i-1})| + |f(x) - f(x_{m-1})| + |f(\xi) - f(x)| - \varepsilon \\\\
> &\geq \sum_{i=1}^{m} |f(x_i) - f(x_{i-1})| - \varepsilon \\\\
> &> \bigvee_a^\xi (f) - 2\varepsilon.
> \end{aligned}
> $$
>
> 这说明 $g(\xi - 0) \geq g(\xi)$。

从这个命题可以得到下面的推论，我们省略证明。

**推论4.** 

> (1) 连续的有界变差函数可表示为两个连续单调递增函数之差；  
> (2) 设 $f$ 为 $[a,b]$ 上的连续有界变差函数，则
>
> $$
> \lim_{\|\pi\| \to 0} v(f;\pi) = \bigvee_a^b (f).
> $$

## Part 2 Riemann-Stieltjes

设 $\alpha$ 为 $[a,b]$ 上的单调递增函数，$f$ 为 $[a,b]$ 上的有界函数。对于区间 $[a,b]$ 的分割

$$
\pi: a = x_0 < x_1 < \cdots < x_n = b,
$$

记

$$
M_i(f) = \sup_{[x_i,x_{i-1}]} f, \quad m_i(f) = \inf_{[x_i,x_{i-1}]} f, \quad \Delta\alpha_i = \alpha(x_i) - \alpha(x_{i-1}),
$$

令

$$
U(f,\alpha;\pi) = \sum_{i=1}^{n} M_i(f)\Delta\alpha_i, \quad L(f,\alpha;\pi) = \sum_{i=1}^{n} m_i(f)\Delta\alpha_i,
$$

$U(f,\alpha;\pi)$ 和 $L(f,\alpha;\pi)$ 分别称为 $f$ 关于 $\alpha$ 以及分割 $\pi$ 的 Darboux 上和与 Darboux 下和，简称上和与下和。记

$$
\overline{\int}_a^b f(x)d\alpha(x) = \inf_\pi U(f,\alpha;\pi), \quad \underline{\int}_a^b f(x)d\alpha(x) = \sup_\pi L(f,\alpha;\pi),
$$

分别称为 $f$ 关于 $\alpha$ 的上积分与下积分，有时也记为 $\overline{I}(f,\alpha)$ 与 $\underline{I}(f,\alpha)$。如果上积分与下积分相等，就称 $f$ 关于 $\alpha$ 是 Riemann-Stieltjes 可积的，其积分记为

$$
\int_a^b f(x)d\alpha(x) = \inf_\pi U(f,\alpha;\pi) = \sup_\pi L(f,\alpha;\pi),
$$

为了简单起见，我们也称 $f$ 关于 $\alpha$ 可积（RS 可积），记为 $f \in R(\alpha)$。

显然，当 $\alpha(x) = x$ 时，$f$ 关于 $\alpha$ 可积就是指 $f$ 在 $[a,b]$ 上 Riemann 可积，因此 Riemann-Stieltjes 积分是 Riemann 积分的推广，下面的许多讨论和 Riemann 积分的讨论是完全类似的（也有不同之处），在相似的地方我们将省略证明。

为了得到 RS 可积的充要条件，我们再引入关于区间分割加细的概念。设 $\pi, \pi'$ 为 $[a,b]$ 的分割，如果 $\pi$ 的分点均为 $\pi'$ 的分点，则称 $\pi'$ 是 $\pi$ 的加细，记为 $\pi' \geq \pi$ 或 $\pi \leq \pi'$。与 Riemann 积分的讨论类似，我们有

> - 对于任意分割 $\pi$，均有 $L(f,\alpha;\pi) \leq U(f,\alpha;\pi)$，即下和不超过上和；
> - 如果 $\pi' \geq \pi$，则上和不增，下和不减，即
>
>   $$
>   U(f,\alpha;\pi') \leq U(f,\alpha;\pi), \quad L(f,\alpha;\pi') \geq L(f,\alpha;\pi);
>   $$
>
> - 如果 $\pi_1, \pi_2$ 是任意两个分割，则
>
>   $$
>   L(f,\alpha;\pi_1) \leq U(f,\alpha;\pi_2),
>   $$
>
>   这只要考虑 $\pi = \pi_1 \cup \pi_2$ 以及利用上两条性质即可；
>
> - $I(f,\alpha) \leq \overline{I}(f,\alpha)$，即下积分不超过上积分。

### · Riemann-Stieltjes 和

和 Riemann 积分类似，对于分割 $\pi$，取 $\xi_i \in [x_{i-1},x_i]$ ($1 \leq i \leq n$)，定义 $f$ 关于 $\alpha$ 和分割 $\pi$ 以及 $\{\xi_i\}$ 的 Riemann-Stieltjes 和为
$$
S(f,\alpha;\pi,\xi) = \sum_{i=1}^{n} f(\xi_i)\Delta\alpha_i.
$$
**定理5.** 

> 设 $\alpha$ 为 $[a,b]$ 上的单调递增函数，$f$ 为有界函数，则下列条件等价：
>
> (1) $f \in R(\alpha)$，即 $f$ 关于 $\alpha$ 是 Riemann-Stieltjes 可积的；
>
> (2) 任给 $\varepsilon > 0$，存在分割 $\pi$，使得
> $$
> U(f,\alpha;\pi) - L(f,\alpha;\pi) < \varepsilon;
> $$
>
> (3) 存在实数 $I$，使得任给 $\varepsilon > 0$，存在分割 $\pi_\varepsilon$，当分割 $\pi \geq \pi_\varepsilon$ 时
>
> $$
> |S(f,\alpha;\pi,\xi) - I| < \varepsilon, \quad \forall\ \xi_i \in [x_{i-1},x_i].
> $$

/proof/

> 证明与 Riemann 积分的情形完全类似

> [!important]
>
> 需要注意的是，在 Riemann 积分的情形，当 $f$ 在 $[a,b]$ 上 Riemann 可积时
>
> $$
> \lim_{\|\pi\| \to 0} S(f;\pi,\xi) = \int_a^b f(x)dx,
> $$
>
> 而这个定理中的 (3) 关于分割的要求是 $\pi \geq \pi_\varepsilon$，对于 Riemann-Stieltjes 积分这两个条件并不等价。例如，考虑下面的例子：
>
> $$
> f(x) =
> \begin{cases}
> 1, & x \in [0,1/2], \\\\
> 2, & x \in (1/2,1],
> \end{cases}
> \quad
> \alpha(x) =
> \begin{cases}
> 3, & x \in [0,1/2), \\\\
> 4, & x \in [1/2,1],
> \end{cases}
> $$
>
> 不难验证 $f \in R(\alpha)$，但极限 $\displaystyle \lim_{\|\pi\| \to 0} S(f,\alpha;\pi,\xi)$ 不存在。

下面的两个结果给出了一些可积函数类。

**定理6.** 

> 如果 $\alpha$ 为 $[a,b]$ 上的单调递增函数，$f$ 为 $[a,b]$ 上的连续函数，则 $f \in R(\alpha)$，且
>
> $$
> \lim_{\|\pi\| \to 0} S(f;\pi,\xi) = \int_a^b f(x)d\alpha(x).
> $$

**定理7.** 

> 如果 $\alpha$ 为 $[a,b]$ 上的单调递增连续函数，$f$ 为 $[a,b]$ 上的单调函数，则 $f \in R(\alpha)$。

/proof/

> 不妨设 $f$ 是单调递增的。对正整数 $n$，取 $[a,b]$ 的分割 $\pi$，使得
>
> $$
> \Delta\alpha_i = \frac{\alpha(b) - \alpha(a)}{n}, \quad 1 \leq i \leq n.
> $$
>
> 根据 $\alpha$ 的连续性，这是可以做到的。对于分割 $\pi$，有
>
> $$
> \begin{aligned}
> U(f,\alpha;\pi) - L(f,\alpha;\pi) &= \frac{\alpha(b) - \alpha(a)}{n} \sum_{i=1}^{n}[f(x_i) - f(x_{i-1})] \\\\
> &= \frac{\alpha(b) - \alpha(a)}{n}[f(b) - f(a)],
> \end{aligned}
> $$
>
> 取充分大的 $n$，由定理 5 的 (2) 即知 $f$ 关于 $\alpha$ 是可积的。

### · 积分性质

下面是 Riemann-Stieltjes 积分的一些性质：

> - 设 $f_1,f_2 \in R(\alpha)$，$c_1,c_2 \in \mathbb{R}$，则 $c_1f_1 + c_2f_2 \in R(\alpha)$，且
>
>   $$
>   \int_a^b (c_1f_1 + c_2f_2)d\alpha(x) = c_1\int_a^b f_1(x)d\alpha(x) + c_2\int_a^b f_2(x)d\alpha(x).
>   $$
>
> - 设 $c \in (a,b)$，则 $f$ 在 $[a,b]$ 上关于 $\alpha$ 可积当且仅当 $f$ 在 $[a,c]$ 和 $[c,b]$ 上均是可积的，且此时有
>
>   $$
>   \int_a^b f(x)d\alpha(x) = \int_a^c f(x)d\alpha(x) + \int_c^b f(x)d\alpha(x).
>   $$
>
>   如果我们约定
>
>   $$
>   \int_a^a f(x)d\alpha(x) = 0, \quad \int_b^a f(x)d\alpha(x) = -\int_a^b f(x)d\alpha(x),
>   $$
>
>   则前式对于闭区间中的任意三点均成立。
>
> - 如果 $f_1,f_2 \in R(\alpha)$，且 $f_1 \leq f_2$，则
>
>   $$
>   \int_a^b f_1(x)d\alpha(x) \leq \int_a^b f_2(x)d\alpha(x).
>   $$
>
> - 如果 $f \in R(\alpha)$，则 $|f| \in R(\alpha)$，且
>
>   $$
>   \left| \int_a^b f(x)d\alpha(x) \right| \leq \int_a^b |f(x)|d\alpha(x).
>   $$
>
> - 如果 $f_1,f_2 \in R(\alpha)$，则 $f_1 \cdot f_2 \in R(\alpha)$。
>
> - 如果 $f_1,f_2 \in R(\alpha)$，且 $|f_2| \geq \lambda > 0$，则 $f_1/f_2 \in R(\alpha)$。
>
> - 如果 $f \in R(\alpha)$，$\phi$ 在包含 $f([a,b])$ 的区间上连续，则 $\phi(f) \in R(\alpha)$。
>
> - 设 $\alpha_1, \alpha_2$ 均为单调递增函数，且 $f \in R(\alpha_1)$，$f \in R(\alpha_2)$，则对正实数 $c_1$ 与 $c_2$，有 $f \in R(c_1\alpha_1 + c_2\alpha_2)$，且
>
>   $$
>   \int_a^b f(x)d[c_1\alpha_1(x) + c_2\alpha_2(x)] = c_1\int_a^b f(x)d\alpha_1(x) + c_2\int_a^b f(x)d\alpha_2(x).
>   $$

### · 积分第一中值公式

**定理8 (积分第一中值公式).** 

> 设 $\alpha$ 为 $[a,b]$ 上的单调递增函数，$f$ 为 $[a,b]$ 上的连续函数，则存在 $\xi \in [a,b]$，使得
>
> $$
> \int_a^b f(x)d\alpha(x) = f(\xi)[\alpha(b) - \alpha(a)].
> $$

/proof/

> 如果 $\alpha(b) = \alpha(a)$，则 $\alpha$ 为常值函数，定理结论显然成立。下设 $\alpha(b) - \alpha(a) > 0$。因为 $f$ 为连续函数，它在 $[a,b]$ 上达到最小值 $m$ 以及最大值 $M$。由上下和的定义，有
>
> $$
> m[\alpha(b) - \alpha(a)] \leq L(f,\alpha;\pi) \leq \int_a^b f(x)d\alpha(x) \leq U(f,\alpha;\pi) \leq M[\alpha(b) - \alpha(a)],
> $$
>
> 这说明
>
> $$
> m \leq \frac{\displaystyle\int_a^b f(x)d\alpha(x)}{\alpha(b) - \alpha(a)} \leq M,
> $$
>
> 由连续函数的介值定理，存在 $\xi \in [a,b]$，使得
>
> $$
> f(\xi) = \frac{\displaystyle\int_a^b f(x)d\alpha(x)}{\alpha(b) - \alpha(a)},
> $$
>
> 结论得证。

### · Riemann-Stieltjes 可积

到现在为止，我们假设了 Riemann-Stieltjes 积分中的 $\alpha$ 是单调递增函数，下面我们推广到有界变差函数的情形。

设 $\alpha$ 为 $[a,b]$ 上的有界变差函数，$\alpha = \beta - \gamma$ 为其典范分解。如果有界函数 $f$ 关于 $\beta$ 和 $\gamma$ 都是可积的，则称 $f$ 关于 $\alpha$ 是 Riemann-Stieltjes 可积的，记为 $f \in R(\alpha)$，$f$ 关于 $\alpha$ 的积分定义为
$$
\int_a^b f(x)d\alpha(x) = \int_a^b f(x)d\beta(x) - \int_a^b f(x)d\gamma(x).
$$

> 根据前面的结果，我们可以得到下面的结论：
>
> - 如果 $f$ 为连续函数，$\alpha$ 为有界变差函数，则 $f \in R(\alpha)$；
> - 如果 $f$ 为有界变差函数，$\alpha$ 为连续的有界变差函数，则 $f \in R(\alpha)$。

**命题9.** 

>设 $\alpha$ 是有界变差函数，如果 $f$ 关于 $\alpha$ 可积，则
>
>$$
>\left| \int_a^b f(x)d\alpha(x) \right| \leq \int_a^b |f(x)|d\beta(x),
>$$
>
>其中 $\beta(x)$ 是 $\alpha$ 的变差函数。

/proof/

>如果 $f$ 关于 $\alpha$ 可积，则 $f$ 关于 $\beta$ 以及 $\gamma = \beta - \alpha$ 可积，从而 $|f|$ 关于 $\beta$ 可积。记
>
>$$
>p = \frac{1}{2}(\alpha + \beta), \quad q = \frac{1}{2}(\beta - \alpha),
>$$
>
>则 $p, q$ 均为单调递增函数，且 $f, |f|$ 关于 $p, q$ 均可积，于是
>
>$$
>\begin{aligned}
>\left| \int_a^b f(x)d\alpha(x) \right| &= \left| \int_a^b f(x)dp(x) + \int_a^b f(x)dq(x) \right| \\\\
>&\leq \int_a^b |f(x)|dp(x) + \int_a^b |f(x)|dq(x) \\\\
>&= \int_a^b |f(x)|d\beta(x).
>\end{aligned}
>$$
>
>证明过程中用到了单调递增函数的 Riemann-Stieltjes 积分的性质。

**定理10.** 

> 设 $\alpha$ 为 $[a,b]$ 上的有界变差函数，$f$ 为有界函数。则下列几条等价：
>
> (1) $f \in R(\alpha)$；
>
> (2) 存在常数 $I$，使得任给 $\varepsilon > 0$，存在分割 $\pi_\varepsilon$，当 $\pi \geq \pi_\varepsilon$ 时
> $$
> \left| \sum_{i=1}^{n} f(\xi_i)[\alpha(x_i) - \alpha(x_{i-1})] - I \right| < \varepsilon, \quad \forall\ \xi_i \in [x_{i-1},x_i].
> $$
>
> (3) $f \in R(\beta)$，其中
>
> $$
> \beta(x) = \bigvee_a^x (\alpha), \quad x \in [a,b].
> $$

/proof/

>$(1) \Rightarrow (2)$. 设 $\alpha = \beta - \gamma$ 为 $\alpha$ 的典范分解，由定义，$f \in R(\beta)$ 和 $f \in R(\gamma)$ 均成立，由定理 5 容易知道 (2) 成立，且此时
>
>$$
>I = \int_a^b f(x)d\alpha(x).
>$$
>
>$(2) \Rightarrow (3)$. 设条件成立，则对 $\pi \geq \pi_\varepsilon$，当 $\alpha(x_i) - \alpha(x_{i-1}) \geq 0$ 时，选取 $\xi_i, \xi'_i \in [x_{i-1},x_i]$ 使得
>
>$$
>f(\xi_i) - f(\xi'_i) > M_i(f) - m_i(f) - \varepsilon;
>$$
>
>否则选取 $\xi_i, \xi'_i \in [x_{i-1},x_i]$，使得
>
>$$
>f(\xi'_i) - f(\xi_i) > M_i(f) - m_i(f) - \varepsilon.
>$$
>
>此时有
>
>$$
>\begin{aligned}
>&\sum_{i=1}^{n}[M_i(f) - m_i(f)]|\alpha(x_i) - \alpha(x_{i-1})|\\\\
>&\leq \sum_{i=1}^{n}[f(\xi_i) - f(\xi'_i)][\alpha(x_i) - \alpha(x_{i-1})] \\\\
>&+ \varepsilon \sum_{i=1}^{n}|\alpha(x_i) - \alpha(x_{i-1})| \\\\
>&\leq 2\varepsilon + \varepsilon\beta(b),
>\end{aligned}
>$$
>
>其中
>
>$$
>\beta(b) = \bigvee_a^b (\alpha).
>$$
>
>我们可以选择分割 $\pi \geq \pi_\varepsilon$ 使得
>
>$$
>\beta(b) - \sum_{i=1}^{n}|\alpha(x_i) - \alpha(x_{i-1})| < \varepsilon,
>$$
>
>此时有
>
>$$
>\begin{aligned}
>&\sum_{i=1}^{n}[M_i(f) - m_i(f)][\beta(x_i) - \beta(x_{i-1})] \\\\
>&\leq \sum_{i=1}^{n}[M_i(f) - m_i(f)]\{[\beta(x_i) - \beta(x_{i-1})] - |\alpha(x_i) - \alpha(x_{i-1})|\}+ 2\varepsilon + \varepsilon\beta(b) \\\\
>&\leq 2M \sum_{i=1}^{n}\{[\beta(x_i) - \beta(x_{i-1})] - |\alpha(x_i) - \alpha(x_{i-1})|\} + 2\varepsilon + \varepsilon\beta(b) \\\\
>&= 2M\left(\beta(b) - \sum_{i=1}^{n}|\alpha(x_i) - \alpha(x_{i-1})|\right) + 2\varepsilon + \varepsilon\beta(b) \\\\
>&\leq 2M\varepsilon + 2\varepsilon + \varepsilon\beta(b),
>\end{aligned}
>$$
>
>其中 $M$ 为 $|f|$ 的上确界。根据定理 5，这说明 $f \in R(\beta)$。
>
>$(3) \Rightarrow (1)$. 设 $f \in R(\beta)$，则任给 $\varepsilon > 0$，存在 $[a,b]$ 的分割 $\pi$，使得
>
>$$
>0 \leq U(f,\beta;\pi) - L(f,\beta;\pi) < \varepsilon.
>$$
>
>记 $\gamma = \beta - \alpha$，则由
>
>$$
>|\alpha(x_i) - \alpha(x_{i-1})| \leq \bigvee_{x_{i-1}}^{x_i} (\alpha) = \beta(x_i) - \beta(x_{i-1})
>$$
>
>知
>
>$$
>\gamma(x_i) - \gamma(x_{i-1}) = [\beta(x_i) - \beta(x_{i-1})] - [\alpha(x_i) - \alpha(x_{i-1})] \leq 2[\beta(x_i) - \beta(x_{i-1})],
>$$
>
>因此有
>
>$$
>\begin{aligned}
>U(f,\gamma;\pi) - L(f,\gamma;\pi) &= \sum_{i=1}^{n}[M_i(f) - m_i(f)][\gamma(x_i) - \gamma(x_{i-1})] \\\\
>&\leq 2\sum_{i=1}^{n}[M_i(f) - m_i(f)][\beta(x_i) - \beta(x_{i-1})] \\\\
>&= 2[U(f,\beta;\pi) - L(f,\beta;\pi)] < 2\varepsilon,
>\end{aligned}
>$$
>
>这说明 $f \in R(\gamma)$，根据定义即知 $f$ 关于 $\alpha$ 可积。

**推论11.** 

> 设 $\alpha = \beta_1 - \gamma_1$ 为有界变差函数，其中 $\beta_1, \gamma_1$ 为单调递增函数。如果 $f \in R(\beta_1)$，$f \in R(\gamma_1)$，则 $f \in R(\alpha)$，且
>
> $$
> \int_a^b f(x)d\alpha(x) = \int_a^b f(x)d\beta_1(x) - \int_a^b f(x)d\gamma_1(x).
> $$

/proof/

> 设 $\alpha = \beta - \gamma$ 为 $\alpha$ 的典范分解。任取 $x < y \in [a,b]$，有
>
> $$
> |\alpha(y) - \alpha(x)| \leq [\beta_1(y) - \beta_1(x)] + [\gamma_1(y) - \gamma_1(x)],
> $$
>
> 根据这个不等式以及 $\beta$ 的定义可得
>
> $$
> |\beta(x_i) - \beta(x_{i-1})| = \bigvee_{x_{i-1}}^{x_i} (\alpha) \leq [\beta_1(x_i) - \beta_1(x_{i-1})] + [\gamma_1(x_i) - \gamma_1(x_{i-1})],
> $$
>
> 再由定理 5 以及 $f \in R(\beta_1)$，$f \in R(\gamma_1)$ 可知 $f \in R(\beta)$，下略。
>
> 有了这些结果，以上关于单调递增函数的 Riemann-Stieltjes 积分的性质就可以推广到有界变差函数，我们不重复叙述。

### · 分部积分

**定理12 (分部积分).** 

> 设 $f,g$ 为 $[a,b]$ 上的有界变差函数，则 $f \in R(g)$ 时必有 $g \in R(f)$，且
>
> $$
> \int_a^b f(x)dg(x) = f(b)g(b) - f(a)g(a) - \int_a^b g(x)df(x).
> $$

/proof/

> 由定理 10，任给 $\varepsilon > 0$，存在分割 $\pi_\varepsilon$，当 $\pi \geq \pi_\varepsilon$ 时
>
> $$
> \left| S(f,g;\pi,\xi) - \int_a^b f(x)dg(x) \right| < \varepsilon.
> $$
>
> 因为
>
> $$
> \begin{aligned}
> &f(b)g(b) - f(a)g(a) - \sum_{i=1}^{n}g(\xi_i)[f(x_i) - f(x_{i-1})] \\\\
> &= \sum_{i=1}^{n}[f(x_i)g(x_i) - f(x_{i-1})g(x_{i-1})] - \sum_{i=1}^{n}g(\xi_i)[f(x_i) - f(x_{i-1})] \\\\
> &= \sum_{i=1}^{n}f(x_i)[g(x_i) - g(\xi_i)] + \sum_{i=1}^{n}f(x_{i-1})[g(\xi_i) - g(x_{i-1})],
> \end{aligned}
> $$
>
> 上式是 $f$ 关于 $g$ 在分割 $\pi' = \pi \cup \{\xi_i\}$ 下的 Riemann-Stieltjes 和，特别地，有
>
> $$
> \left| f(b)g(b) - f(a)g(a) - \sum_{i=1}^{n}g(\xi_i)[f(x_i) - f(x_{i-1})] - \int_a^b f(x)dg(x) \right| < \varepsilon,
> $$
>
> 根据定理 10，$g \in R(f)$，且
>
> $$
> \int_a^b g(x)df(x) = f(b)g(b) - f(a)g(a) - \int_a^b f(x)dg(x),
> $$
>
> 这就是要证明的等式。

**推论13.** 

> 设 $f,g$ 为有界变差函数，如果 $f \in R(g)$，则
>
> $$
> \bigvee_a^x (f) \in R(g).
> $$

/proof/

> 当 $f \in R(g)$ 时，$g \in R(f)$，因此
>
> $$
> g \in R\left(\bigvee_a^x (f)\right),
> $$
>
> 根据分部积分公式，
>
> $$
> \bigvee_a^x (f) \in R(g),
> $$
>
> 这就证明了推论。

### · 积分第二中值公式

**定理14 (积分第二中值公式).** 

> 设 $f$ 为 $[a,b]$ 上的单调函数，$g$ 为 $[a,b]$ 上的连续有界变差函数，则存在 $\xi \in [a,b]$，使得
>
> $$
> \int_a^b f(x)dg(x) = f(a)[g(\xi) - g(a)] + f(b)[g(b) - g(\xi)].
> $$

/proof/

> 根据分部积分公式，有
>
> $$
> \int_a^b f(x)dg(x) = f(b)g(b) - f(a)g(a) - \int_a^b g(x)df(x),
> $$
>
> 在根据积分第一中值公式，存在 $\xi \in [a,b]$，使得
>
> $$
> \int_a^b f(x)dg(x) = f(b)g(b) - f(a)g(a) - g(\xi)[f(b) - f(a)],
> $$
>
> 这也就是要证明的结论。

### · 变量替换

**定理 15 (变量替换).** 

> 设 $\phi$ 为 $[\alpha,\beta]$ 上的连续单调递增函数，如果 $g(x)$ 为 $\phi([\alpha,\beta]) = [a,b]$ 上的有界变差函数，$f \in R(g)$，则 $f(\phi) \in R(g(\phi))$，且
>
> $$
> \int_\alpha^\beta f(\phi)dg(\phi) = \int_a^b f(x)dg(x).
> $$

/proof/

> 不妨设 $g$ 是单调递增函数。由 $f \in R(g)$ 以及定理 5 知，任给 $\varepsilon > 0$，存在 $[a,b]$ 的分割 $\pi_\varepsilon$，使得当 $\pi \geq \pi_\varepsilon$ 时
>
> $$
> \left| \sum_{i=1}^{n}f(\eta_i)[g(x_i) - g(x_{i-1})] - \int_a^b f(x)dg(x) \right| < \varepsilon.
> $$
>
> 设 $\{x_i\}$ 为 $\pi_\varepsilon$ 的分点，作 $[\alpha,\beta]$ 的分割如下：取 $t_0 = \alpha$。当 $i \geq 1$ 时，取 $t_i \in [\alpha,\beta]$ 使得 $t_i$ 是满足条件 $\phi(t_i) = x_i$ 的最大数，因为 $\phi$ 是连续的，因此这是可以取到的，且
>
> $$
> \pi'_\varepsilon: \alpha = t_0 < t_1 < \cdots < t_n = \beta
> $$
>
> 是 $[\alpha,\beta]$ 的一个分割。当 $\pi' \geq \pi'_\varepsilon$ 时，$\pi'$ 的分点在 $\phi$ 下的像组成了 $[a,b]$ 的分割（可能有重复的点），且这个分割是 $\pi_\varepsilon$ 的加细，因此，如果记
>
> $$
> \pi': \alpha = t'_0 < t'_1 < \cdots < t'_n = \beta,
> $$
>
> 则
>
> $$
> \left| \sum_{i=1}^{n}f(\phi(\xi'_i))[g(\phi(t'_i)) - g(\phi(t'_{i-1}))] - \int_a^b f(x)dg(x) \right| < \varepsilon,
> $$
>
> 根据定理 5，这说明 $f(\phi) \in R(g(\phi))$，且
>
> $$
> \int_\alpha^\beta f(\phi)dg(\phi) = \int_a^b f(x)dg(x).
> $$
>
> 这就证明了定理。
>
> **注意.** 如果 $\phi$ 为连续单调递减函数，则有完全类似的结果成立。

### · 积分联系

下面讨论 Riemann 积分和 Riemann-Stieltjes 积分之间的一些联系。

**定理 16.** 

> 设 $g(x)$ 为 $[a,b]$ 上的 Riemann 可积函数，$C$ 为常数。记
>
> $$
> G(x) = \int_a^x g(t)dt + C, \quad x \in [a,b].
> $$
>
> 如果 $f$ 为 $[a,b]$ 上有界函数，则 $f \in R(G)$ 当且仅当 $fg$ 在 $[a,b]$ 上 Riemann 可积，且此时
>
> $$
> \int_a^b f(x)dG(x) = \int_a^b f(x)g(x)dx.
> $$

/proof/

> 设 $fg$ 在 $[a,b]$ 上 Riemann 可积，则任给 $\varepsilon > 0$，存在 $\delta > 0$，当 $\|\pi\| < \delta$ 时
>
> $$
> \left| \sum_{i=1}^{n}f(\xi_i)g(\xi_i)\Delta x_i - \int_a^b f(x)g(x)dx \right| < \varepsilon, \quad \sum_{i=1}^{n}\omega_i(g)\Delta x_i < \frac{\varepsilon}{M+1},
> $$
>
> 其中 $|f| \leq M$。此时有
>
> $$
> \begin{aligned}
> &\left| \sum_{i=1}^{n}f(\xi_i)[G(x_i) - G(x_{i-1})] - \int_a^b f(x)g(x)dx \right| \\\\
> &= \left| \sum_{i=1}^{n}f(\xi_i)\int_{x_{i-1}}^{x_i}g(x)dx - \int_a^b f(x)g(x)dx \right| \\\\
> &= \left| \sum_{i=1}^{n}f(\xi_i)g(\xi_i)\Delta x_i + \sum_{i=1}^{n}f(\xi_i)\int_{x_{i-1}}^{x_i}(g(x) - g(\xi_i))dx - \int_a^b f(x)g(x)dx \right| \\\\
> &\leq \left| \sum_{i=1}^{n}f(\xi_i)g(\xi_i)\Delta x_i - \int_a^b f(x)g(x)dx \right| + M\sum_{i=1}^{n}\omega_i(g)\Delta x_i \\\\
> &< 2\varepsilon,
> \end{aligned}
> $$
>
> 根据定理 10 知 $f \in R(G)$，且
>
> $$
> \int_a^b f(x)dG(x) = \int_a^b f(x)g(x)dx.
> $$
>
> 定理的另一半证明省略。

/example/ 有界变差函数的 Fourier 系数估计。

> 设 $f$ 为 $[-\pi,\pi]$ 上的有界变差函数，其 Fourier 系数为 $a_n, b_n$。则由此定理以及分部积分公式，有
>
> $$
> \begin{aligned}
> a_n &= \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx dx = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)d\frac{\sin nx}{n} \\\\
> &= -\frac{1}{\pi}\int_{-\pi}^{\pi}\frac{\sin nx}{n}df(x),
> \end{aligned}
> $$
>
> 由此得到如下估计
>
> $$
> |a_n| \leq \frac{1}{n\pi}\bigvee_{-\pi}^{\pi}(f), \quad \forall\ n \geq 1.
> $$
>
> 同理可得
>
> $$
> |b_n| \leq \frac{1}{n\pi}|f(\pi - 0) - f(-\pi + 0)| + \frac{1}{n\pi}\bigvee_{-\pi}^{\pi}(f), \quad \forall\ n \geq 1.
> $$

一般地，如果 $f,g$ 均在 $[a,b]$ 上 Riemann 可积，则上述定理结论成立。结合分部积分公式中，就得到关于 Riemann 积分的如下分部积分公式：

**推论17 (分部积分之二).** 

> 设 $f,g$ 为 Riemann 可积函数，记
>
> $$
> F(x) = \int_a^x f(t)dt + C, \quad G(x) = \int_a^x g(t)dt + D, \quad x \in [a,b].
> $$
>
> 则
>
> $$
> \int_a^b F(x)g(x)dx = F(b)G(b) - G(a)G(a) - \int_a^b f(x)G(x)dx.
> $$
>

我们也可以将 Riemann-Stieltjes 积分的第二中值公式改写为关于 Riemann 积分的第二中值公式。

结合前面的变量替换则可以得到如下的 Riemann 积分的变量替换公式：设 $\phi$ 为可微单调函数，且 $\phi'$ 在 $[\alpha,\beta]$ 上可积，则当 $f$ 在 $\phi([\alpha,\beta])$ 上 Riemann 可积时，$f(\phi)\phi'$ 在 $[\alpha,\beta]$ 上 Riemann 可积，且
$$
\int_\alpha^\beta f(\phi)\phi'(t)dt = \int_{\phi(\alpha)}^{\phi(\beta)} f(x)dx.
$$

我们还可以得到一个更一般的结果。

**定理18 (变量替换之二).** 

> 设 $g(t)$ 为 $[\alpha,\beta]$ 上的 Riemann 可积函数，记
>
> $$
> G(t) = \int_\alpha^t g(s)ds + C, \quad t \in [\alpha,\beta].
> $$
>
> 如果 $f(x)$ 为 $G([\alpha,\beta])$ 上的 Riemann 可积函数，则 $f(G) \in R(G)$，且
>
> $$
> \int_\alpha^\beta f(G)dG = \int_\alpha^\beta f(G)g(t)dt = \int_{G(\alpha)}^{G(\beta)} f(x)dx.
> $$

/proof/

> 任给 $\varepsilon > 0$，由 $g$ 为 Riemann 可积函数知，存在 $[\alpha,\beta]$ 的分割
>
> $$
> \pi: \alpha = t_0 < t_1 < \cdots < t_n = \beta,
> $$
>
> 使得
>
> $$
> \sum_{\omega_i(g) \geq \varepsilon} \Delta t_i < \varepsilon.
> $$
>
> 我们把 $\omega_i(g) < \varepsilon$ 的小区间 $[t_{i-1},t_i]$ 分成两类：
>
> (1) $|g(t)| \leq \varepsilon$, $\forall\ t \in [t_{i-1},t_i]$。这一类区间记为 $I$ 型的，此时有
>
> $$
> \sum_I |G(t_i) - G(t_{i-1})| \leq \sum_I \int_{t_{i-1}}^{t_i}|g(t)|dt \leq \varepsilon(\beta - \alpha).
> $$
>
> (2) 存在 $\xi \in [t_{i-1},t_i]$ 使得 $|g(\xi)| > \varepsilon$。这一类区间记为 $II$ 型的。此时，由于 $\omega_i(g) < \varepsilon$，故 $g(t)$ 在 $[t_{i-1},t_i]$ 上要么恒正，要么恒负。这说明 $G(t)$ 在 $[t_{i-1},t_i]$ 上是严格单调的。
>
> 根据前面变量代换公式的证明，通过进一步地细分第二型的小区间，可使
> $$
> \sum_{II} \omega_i(f(G))|G(t_i) - G(t_{i-1})| < \varepsilon
> $$
>
> 成立。
>
> 设 $|f|, |g| \leq M$。结合上面这些估计，我们有
>
> $$
> \begin{aligned}
> &\sum_{i=1}^{n} \omega_i(f(G))|G(t_i) - G(t_{i-1})| \\\\
> &= \sum_{\omega_i(g) \geq \varepsilon} \omega_i(f(G))|G(t_i) - G(t_{i-1})| + \sum_I \omega_i(f(G))|G(t_i) - G(t_{i-1})| \\\\
> &+ \sum_{II} \omega_i(f(G))|G(t_i) - G(t_{i-1})| \\\\
> &\leq \sum_{\omega_i(g) \geq \varepsilon} 2M^2\Delta t_i + \sum_I 2M|G(t_i) - G(t_{i-1})| + \varepsilon \\\\
> &\leq 2M^2\varepsilon + 2M\varepsilon(\beta - \alpha) + \varepsilon.
> \end{aligned}
> $$
>
> 于是有
>
> $$
> \begin{aligned}
> &\left| \sum_{i=1}^{n}f(G(\eta_i))[G(t_i) - G(t_{i-1})] - \int_{G(\alpha)}^{G(\beta)} f(x)dx \right| \\\\
> &= \left| \sum_{i=1}^{n}f(G(\eta_i))[G(t_i) - G(t_{i-1})] - \sum_{i=1}^{n} \int_{G(t_{i-1})}^{G(t_i)} f(x)dx \right| \\\\
> &= \left| \sum_{i=1}^{n} \int_{G(t_{i-1})}^{G(t_i)} [f(G(\eta_i)) - f(x)]dx \right| \\\\
> &\leq \sum_{i=1}^{n} \omega_i(f(G))|G(t_i) - G(t_{i-1})| \\\\
> &\leq 2M^2\varepsilon + 2M\varepsilon(\beta - \alpha) + \varepsilon.
> \end{aligned}
> $$
>
> 对于分割 $\pi$ 的加细，上式仍然成立。因此，根据定理10 知 $f(G) \in R(G)$，且
>
> $$
> \int_\alpha^\beta f(G)dG = \int_{G(\alpha)}^{G(\beta)} f(x)dx,
> $$
>
> 定理证毕。

Riemann-Stieltjes 积分是荷兰数学家 Stieltjes 在研究连分数时引入的，它在概率论和金融数学等领域应用十分广泛。

