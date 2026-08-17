---
title: Lesson 18 Riemann 积分 II
permalink: /integral/integral-18/
createTime: 2026/08/17 14:17:07
---

## Part 2 积分性质

为了方便起见, 我们约定

$$
\int_b^a f(x)dx = -\int_a^b f(x)dx, \quad a < b,
$$

$$
\int_a^b f(x)dx = 0, \quad a = b.
$$

### · 基本性质

**定理1**. 

(1) 设 $f,g$ 在 $[a,b]$ 上可积, $\lambda,\mu \in \mathbb{R}$, 则 $\lambda f + \mu g$ 在 $[a,b]$ 上可积, 且
$$
\int_a^b (\lambda f + \mu g)dx = \lambda \cdot \int_a^b f(x)dx + \mu \cdot \int_a^b g(x)dx.
$$

(2) 设 $f$ 在 $[a,b]$ 上可积, $c \in (a,b)$, 则 $f$ 在 $[a,c]$ 和 $[c,b]$ 上可积, 且

$$
\int_a^b f(x)dx = \int_a^c f(x)dx + \int_c^b f(x)dx.
$$

> (1) 任给 $\varepsilon > 0$, 由 $f,g$ 可积知, 存在 $\delta > 0$, 当 $[a,b]$ 的分割 $\pi$ 满足 $\|\pi\| < \delta$ 时
>
> $$
> \left|\sum_{i=1}^{n} f(\xi_i) \cdot \Delta x_i - \int_a^b f(x)dx\right| < \varepsilon, \quad \left|\sum_{i=1}^{n} g(\xi_i) \cdot \Delta x_i - \int_a^b g(x)dx\right| < \varepsilon,
> $$
>
> 从而有
>
> $$
> \begin{aligned}
> &\left|\sum_{i=1}^{n} [\lambda f(\xi_i) + \mu g(\xi_i)] \cdot \Delta x_i - \left(\lambda \cdot \int_a^b f(x)dx + \mu \cdot \int_a^b g(x)dx\right)\right| \\\\
> &\leq |\lambda| \cdot \left|\sum_{i=1}^{n} f(\xi_i) \cdot \Delta x_i - \int_a^b f(x)dx\right| + |\mu| \cdot \left|\sum_{i=1}^{n} g(\xi_i) \cdot \Delta x_i - \int_a^b g(x)dx\right| \\\\
> &\leq |\lambda| \cdot \varepsilon + |\mu| \cdot \varepsilon = (|\lambda| + |\mu|) \cdot \varepsilon,
> \end{aligned}
> $$
>
> 根据可积性及积分的定义知, $\lambda f + \mu g$ 可积, 且积分为
>
> $$
> \lambda \cdot \int_a^b f(x)dx + \mu \cdot \int_a^b g(x)dx.
> $$
>
> (2) 在前节已证 $f$ 在小区间上也可积. 设 $\pi_1, \pi_2$ 分别是 $[a,c]$ 和 $[c,b]$ 的分割, 当 $\|\pi_1\| \to 0$, $\|\pi_2\| \to 0$ 时, $\pi = \pi_1 \cup \pi_2$ 也满足条件 $\|\pi\| \to 0$. 于是
>
> $$
> \begin{aligned}
> \int_a^b f(x)dx &= \lim_{\substack{\|\pi_1\| \to 0 \\ \|\pi_2\| \to 0}} \sum_{\pi_1 \cup \pi_2} f(\xi_i) \cdot \Delta x_i = \lim_{\|\pi_1\| \to 0} \sum_{\pi_1} f(\xi_i)\Delta x_i + \lim_{\|\pi_2\| \to 0} \sum_{\pi_2} f(\xi_i)\Delta x_i \\\\
> &= \int_a^c f(x)dx + \int_c^b f(x)dx.
> \end{aligned}
> $$
>
> > 如果 $a,b,c$ 属于 $f$ 的某可积区间, 则不论它们的相对位置如何, (2) 中等式仍成立.

**定理2**. 

(1) 设 $f$ 为 $[a,b]$ 上的非负可积函数, 则其积分非负；

(2) 如果 $f,g$ 在 $[a,b]$ 上可积, 且 $f(x) \geq g(x)$, 则

$$
\int_a^b f(x)dx \geq \int_a^b g(x)dx.
$$

(3) 如果 $f$ 在 $[a,b]$ 上可积, 则 $|f(x)|$ 也可积, 且

$$
\left|\int_a^b f(x)dx\right| \leq \int_a^b |f(x)|dx.
$$

> (1) 如果 $f$ 非负可积, 则其积分和总是非负的, 从而积分非负.
>
> (2) 由定理1 (1), $f - g$ 在 $[a,b]$ 上可积, 由 (1) 知
>
> $$
> 0 \leq \int_a^b (f - g)dx = \int_a^b f(x)dx - \int_a^b g(x)dx.
> $$
>
> (3) 设 $f$ 在 $[a,b]$ 上可积, 则任给 $\varepsilon > 0$, 存在 $[a,b]$ 的分割 $\pi$ 满足
>
> $$
> \sum_\pi \omega_i(f) \cdot \Delta x_i < \varepsilon.
> $$
>
> 因为 $||f(x)| - |f(y)|| \leq |f(x) - f(y)|$, 故 $\omega_i(|f|) \leq \omega_i(f)$, 从而
>
> $$
> \sum_\pi \omega_i(|f|) \cdot \Delta x_i < \varepsilon,
> $$
>
> 这说明 $|f|$ 可积. 因为
>
> $$
> \left|\sum_\pi f(\xi_i) \cdot \Delta x_i\right| \leq \sum_\pi |f(\xi_i)| \cdot \Delta x_i,
> $$
>
> 取极限知
>
> $$
> \left|\int_a^b f(x)dx\right| \leq \int_a^b |f(x)|dx.
> $$

### · 中值定理

下面的结果是连续函数的积分中值定理的推广.

**定理3** (积分第一中值定理). 设 $f,g$ 在 $[a,b]$ 上可积, 且 $g(x)$ 不变号, 则存在 $\mu$, $\inf_{x \in [a,b]} f(x) \leq \mu \leq \sup_{x \in [a,b]} f(x)$, 使得
$$
\int_a^b f(x)g(x)dx = \mu \cdot \int_a^b g(x)dx.
$$

> 不失一般性, 可设 $g(x) \geq 0$. 则
>
> $$
> \left(\inf_{x \in [a,b]} f(x)\right)g(x) \leq f(x)g(x) \leq \left(\sup_{x \in [a,b]} f(x)\right)g(x).
> $$
>
> 由定理2知
>
> $$
> \inf_{x \in [a,b]} f(x) \cdot \int_a^b g(x)dx \leq \int_a^b f(x)g(x)dx \leq \sup_{x \in [a,b]} f(x) \cdot \int_a^b g(x)dx.
> $$
>
> 上式说明, 如果 $\int_a^b g(x)dx = 0$, 则 $\int_a^b f(x)g(x)dx = 0$, 此时定理当然成立. 不然, 令
>
> $$
> \mu = \frac{\displaystyle\int_a^b f(x)g(x)dx}{\displaystyle\int_a^b g(x)dx},
> $$
>
> 则
> $$
> \inf_{x \in [a,b]} f(x) \leq \mu \leq \sup_{x \in [a,b]} f(x)
> $$
>
> > 中值定理又称中值公式. 当 $g(x) \equiv 1$ 时,
> >
> > $$
> > \int_a^b f(x)dx = \mu \cdot (b - a).
> > $$

**引理4**. 如果 $f(x)$ 在 $[a,b]$ 上可积, 令
$$
F(x) = \int_a^x f(t)dt, \quad x \in [a,b],
$$

则 $F$ 是 $[a,b]$ 上的连续函数.

**定理5** (积分第二中值定理). 设 $f$ 在 $[a,b]$ 上可积.

(1) 如果 $g$ 在 $[a,b]$ 上单调递减, 且 $g(x) \geq 0$, $\forall x \in [a,b]$, 则存在 $\xi \in [a,b]$ 使得

$$
\int_a^b f(x)g(x)dx = g(a) \cdot \int_a^\xi f(x)dx.
$$

(2) 如果 $g$ 在 $[a,b]$ 上单调递增, 且 $g(x) \geq 0$, $\forall x \in [a,b]$, 则存在 $\eta \in [a,b]$ 使得

$$
\int_a^b f(x)g(x)dx = g(b) \cdot \int_\eta^b f(x)dx.
$$

(3) 一般地, 如果 $g$ 为 $[a,b]$ 上的单调函数, 则存在 $\xi \in [a,b]$, 使得

$$
\int_a^b f(x)g(x)dx = g(a) \cdot \int_a^\xi f(x)dx + g(b) \cdot \int_\xi^b f(x)dx.
$$

> (1) 记 $F(x) = \int_a^x f(t)dt$. 由引理4 知 $F$ 连续, 故达到最大值 $M$ 和最小值 $m$. 又因为 $f$ 在 $[a,b]$ 上可积, 故 $f$ 有界. 
>
> 设 $|f(x)| \leq K$, $\forall x \in [a,b]$. 因为 $g$ 单调递减, 由前节结论, $g$ 可积. 从而任给 $\varepsilon > 0$, 存在 $[a,b]$ 的分割
> $$
> \pi: a = x_0 < x_1 < \cdots < x_n = b
> $$
> 使得
> $$
> \sum_{i=1}^{n} \omega_i(g) \cdot \Delta x_i < \varepsilon.
> $$
>
> 因此有 (注意 $F(x_0) = F(a) = 0$)
>
> $$
> \begin{aligned}
> \int_a^b f(x)g(x)dx &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} f(x)g(x)dx \\\\
> &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} [g(x) - g(x_{i-1})] \cdot f(x)dx + \sum_{i=1}^{n} g(x_{i-1}) \cdot \int_{x_{i-1}}^{x_i} f(x)dx \\\\
> &\leq \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} |g(x) - g(x_{i-1})| \cdot |f(x)|dx + \sum_{i=1}^{n} g(x_{i-1}) \cdot [F(x_i) - F(x_{i-1})] \\\\
> &\leq K \cdot \sum_{i=1}^{n} \omega_i(g) \cdot \Delta x_i + \sum_{i=1}^{n-1} F(x_i) \cdot [g(x_{i-1}) - g(x_i)] + F(b) \cdot g(x_{n-1}) \\\\
> &\leq K \cdot \varepsilon + M \cdot \sum_{i=1}^{n-1} [g(x_{i-1}) - g(x_i)] + M \cdot g(x_{n-1}) \\\\
> &= K \cdot \varepsilon + M \cdot g(a).
> \end{aligned}
> $$
>
> 对于 $-f(x)$, 上式成为 (注意 $-F$ 的最大值是 $-m$)
>
> $$
> \int_a^b (-f) \cdot gdx \leq K \cdot \varepsilon - m \cdot g(a),
> $$
>
> 结合以上两个不等式, 得到
>
> $$
> m \cdot g(a) - K \cdot \varepsilon \leq \int_a^b f(x)g(x)dx \leq M \cdot g(a) + K \cdot \varepsilon,
> $$
>
> 令 $\varepsilon \to 0^+$, 有
>
> $$
> m \cdot g(a) \leq \int_a^b f(x)g(x)dx \leq M \cdot g(a).
> $$
>
> 如果 $g(a) = 0$, 则 $\int_a^b f(x)g(x)dx = 0$. 如果 $g(a) > 0$, 则有
>
> $$
> m \leq \frac{\displaystyle\int_a^b f(x)g(x)dx}{g(a)} \leq M,
> $$
>
> 由连续函数的介值定理, 存在 $\xi \in [a,b]$ 使得 $F(\xi) = \dfrac{\displaystyle\int_a^b f(x)g(x)dx}{g(a)}$. 即
>
> $$
> \int_a^b f(x)g(x)dx = g(a) \cdot F(\xi) = g(a) \cdot \int_a^\xi f(x)dx.
> $$
>
> (2) 令 $\tilde{F}(x) = \int_x^b f(t)dt$, $\tilde{F}$ 的最大值记为 $\tilde{M}$. 与 (1) 类似, 有
>
> $$
> \begin{aligned}
> \int_a^b f(x)g(x)dx &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} f(x)g(x)dx \\\\
> &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} [g(x) - g(x_i)]f(x)dx + \sum_{i=1}^{n} g(x_i) \cdot \int_{x_{i-1}}^{x_i} f(x)dx \\\\
> &\leq K \cdot \sum_{i=1}^{n} \omega_i(g) \cdot \Delta x_i + \sum_{i=1}^{n} g(x_i)[\tilde{F}(x_{i-1}) - \tilde{F}(x_i)] \\\\
> &\leq K \cdot \varepsilon + g(x_1) \cdot \tilde{F}(x_0) + \sum_{i=1}^{n-1} \tilde{F}(x_i)[g(x_{i+1}) - g(x_i)] \\\\
> &\leq K \cdot \varepsilon + \tilde{M} \cdot g(x_1) + \tilde{M} \cdot \sum_{i=1}^{n-1} [g(x_{i+1}) - g(x_i)] \\\\
> &= K \cdot \varepsilon + \tilde{M} \cdot g(b).
> \end{aligned}
> $$
>
> 剩下的证明和 (1) 类似.
>
> (3) 先设 $g$ 单调递减, 令 $h(x) = g(x) - g(b)$, 则 $h$ 单调递减, 且 $h \geq 0$. 由 (1), 存在 $\xi \in [a,b]$, 使得
>
> $$
> \int_a^b f(x) \cdot h(x)dx = h(a) \cdot \int_a^\xi f(x)dx.
> $$

**阶梯逼近**. 设 $f(x)$ 为 $[a,b]$ 上的可积函数, 则任给 $\varepsilon > 0$, 存在阶梯函数 $g(x)$, 使得
$$
\int_a^b |f(x) - g(x)|dx < \varepsilon.
$$

> 因为 $f$ 可积, 故任给 $\varepsilon > 0$, 存在 $[a,b]$ 的分割
>
> $$
> \pi: a = x_0 < x_1 < x_2 < \cdots < x_n = b,
> $$
>
> 使得
>
> $$
> \sum_{i=1}^{n} \omega_i(f)\Delta x_i < \varepsilon.
> $$
>
> 在 $[a,b]$ 上定义阶梯函数 $g$, 使得
>
> $$
> g(x) = f(x_{i-1}), \quad \forall x \in [x_{i-1},x_i), \quad i = 1,2,\cdots,n.
> $$
>
> 则
>
> $$
> \begin{aligned}
> \int_a^b |f(x) - g(x)|dx &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} |f(x) - g(x)|dx \\\\
> &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} |f(x) - f(x_{i-1})|dx \\\\
> &\leq \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} \omega_i(f)dx \\\\
> &= \sum_{i=1}^{n} \omega_i(f)(x_i - x_{i-1}) < \varepsilon.
> \end{aligned}
> $$
>
> 因此 $g(x)$ 就是所求阶梯函数.
>
> > 显然, 我们构造的阶梯函数还满足条件
> >
> > $$
> > \inf_{x \in [a,b]} f(x) \leq g \leq \sup_{x \in [a,b]} f(x).
> > $$

### · Riemann-Lebesgue

设 $f(x)$ 为 $[a,b]$ 上的可积函数, 则

$$
\lim_{\lambda \to +\infty} \int_a^b f(x)\sin \lambda x dx = 0, \quad \lim_{\lambda \to +\infty} \int_a^b f(x)\cos \lambda x dx = 0.
$$

> 以第一个极限为例. 因为 $f$ 可积, 故任给 $\varepsilon > 0$, 存在 $[a,b]$ 的分割
>
> $$
> \pi: a = x_0 < x_1 < x_2 < \cdots < x_n = b,
> $$
>
> 使得
>
> $$
> \sum_{i=1}^{n} \omega_i(f)\Delta x_i < \frac{1}{2}\varepsilon.
> $$
>
> 又因为 $f$ 有界, 故存在 $K$, 使得 $|f(x)| \leq K$, $\forall x \in [a,b]$. 于是当 $\lambda > \dfrac{4nK}{\varepsilon}$ 时, 有
>
> $$
> \begin{aligned}
> \left|\int_a^b f(x)\sin \lambda x dx\right| &= \left|\sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} f(x)\sin \lambda x dx\right| \\\\
> &= \left|\sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} [f(x) - f(x_{i-1})]\sin \lambda x dx + \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} f(x_{i-1})\sin \lambda x dx\right| \\\\
> &\leq \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} |f(x) - f(x_{i-1})|dx + \sum_{i=1}^{n} |f(x_{i-1})|\left|\int_{x_{i-1}}^{x_i} \sin \lambda x dx\right| \\\\
> &\leq \sum_{i=1}^{n} \omega_i(f)\Delta x_i + \sum_{i=1}^{n} K \frac{1}{\lambda}|\cos \lambda x_{i-1} - \cos \lambda x_i| \\\\
> &< \frac{1}{2}\varepsilon + \frac{2nK}{\lambda} < \varepsilon.
> \end{aligned}
> $$
>
> 这说明第一个极限等式成立. 第二个极限等式同理可证.

## Part 3 基本公式

### · 微积分基本定理

**定理1** (微积分基本定理). 设 $f$ 在 $[a,b]$ 上可积, 且在 $x_0 \in [a,b]$ 处连续, 则 $F(x) = \int_a^x f(t)dt$ 在 $x_0$ 处可导, 且
$$
F'(x_0) = f(x_0).
$$
**推论2**. 设 $f$ 在 $[a,b]$ 中连续, $u(x): (c,d) \to [a,b]$ 与 $v(x): (c,d) \to [a,b]$ 可微, 则有
$$
\left(\int_{v(x)}^{u(x)} f(t)dt\right)' = f(u(x))u'(x) - f(v(x))v'(x).
$$

> 应用复合函数求导的链规则, 有
> $$
> \begin{aligned}
> \left(\int_{v(x)}^{u(x)} f(t)dt\right)' &= \left(\int_a^{u(x)} f(t)dt - \int_a^{v(x)} f(t)dt\right)' \\\\
> &= \left(\int_a^u f(t)dt\right)'_{u=u(x)} u'(x) - \left(\int_a^{v(x)} f(t)dt\right)'_{v=v(x)} v'(x) \\\\
> &= f(u(x))u'(x) - f(v(x))v'(x).
> \end{aligned}
> $$

### · Newton-Leibniz

**定理3** (Newton-Leibniz 公式). 设 $F$ 在 $[a,b]$ 上可微, 且 $F' = f$ 在 $[a,b]$ 上 Riemann 可积, 则
$$
\int_a^b f(x)dx = F(b) - F(a).
$$
(此式又写为 $\displaystyle\int_a^b F'(x)dx = F(b) - F(a) = F(x)\big|_a^b$).

> 任取 $[a,b]$ 的一个分割 $\pi: a = x_0 < x_1 < \cdots x_n = b$, 由微分中值定理, 存在 $\xi_i \in (x_{i-1},x_i)$, 使得
> $$
> F(x_i) - F(x_{i-1}) = F'(\xi_i)(x_i - x_{i-1}) = f(\xi_i)\Delta x_i, \quad i = 1,\cdots,n.
> $$
> 因此
> $$
> F(b) - F(a) = \sum_{i=1}^{n}[F(x_i) - F(x_{i-1})] = \sum_{i=1}^{n} f(\xi_i)\Delta x_i,
> $$
> 因为 $f$ 可积, 故当 $\|\pi\| \to 0$ 时上式右边趋于 $\int_a^b f(x)dx$, 这说明
> $$
> F(b) - F(a) = \int_a^b f(x)dx.
> $$
> 这就证明了公式.
>
> > (1) 本定理结论与第四章第三节相应的定理一样, 只是条件弱一些, 读者可比较两处的证明有何不同.
> >
> > (2) 需要注意的是, 可微函数的导函数不一定是可积的, 如函数
> > $$
> > F(x) =
> > \begin{cases}
> > x^2 \sin \frac{1}{x^2}, & x \neq 0, \\
> > 0, & x = 0,
> > \end{cases}
> > $$
> > 在 $[0,1]$ 上可微, 其导函数为
> > $$
> > F'(x) =
> > \begin{cases}
> > 2x \sin \frac{1}{x^2} - \frac{2}{x} \cos \frac{1}{x^2}, & x \neq 0, \\\\
> > 0, & x = 0,
> > \end{cases}
> > $$
> > 这是无界函数, 因此不是 Riemann 可积的. 进一步还可以构造导函数有界但不可积的例子.

### · 换元法

**定理4** (换元法). 设 $f(x)$ 在 $[a,b]$ 上连续, $x = \varphi(t)$ 在 $[\alpha,\beta]$ 上连续可微, 且 $\varphi([\alpha,\beta]) \subset [a,b]$, $\varphi(\alpha) = a$, $\varphi(\beta) = b$, 则
$$
\int_a^b f(x)dx = \int_\alpha^\beta f(\varphi(t)) \cdot \varphi'(t)dt.
$$

> 因为 $f$ 连续, 由微积分基本定理, $f$ 有原函数 $F$, 即 $F'(x) = f(x)$, 故
> $$
> [F(\varphi(t))]' = F'(\varphi(t)) \cdot \varphi'(t) = f(\varphi(t)) \cdot \varphi'(t).
> $$
> 再由 Newton-Leibniz 公式,
> $$
> \begin{aligned}
> \int_\alpha^\beta f(\varphi(t)) \cdot \varphi'(t)dt &= \int_\alpha^\beta [F(\varphi(t))]'dt \\\\
> &= F(\varphi(t))\big|_\alpha^\beta = F(\varphi(\beta)) - F(\varphi(\alpha)) \\\\
> &= F(b) - F(a) = \int_a^b f(x)dx.
> \end{aligned}
> $$

(1) 根据定理 6.3.3 可知, 关于 $\varphi(t)$ 的条件可以降低, 只要 $\varphi'(t)$ 可积, 则定理仍成立;

(2) 对于可积 (不一定连续) 的 $f$, 下面一般的换元公式仍成立:

(**一般的换元法**) 设函数 $g(t)$ 在 $[\alpha,\beta]$ 上 Riemann 可积, 固定 $c \in [\alpha,\beta]$ 令 $G(x) = \int_c^x g(t)dt$, 则 $G$ 为连续函数. 设 $f$ 在区间 $G([\alpha,\beta])$ 上可积, $G(\alpha) = a$, $G(\beta) = b$, 则 $f(G(t))g(t)$ 在 $[\alpha,\beta]$ 上可积, 且
$$
\int_a^b f(x)dx = \int_\alpha^\beta f(G(t))g(t)dt.
$$
**定理5** (换元法之二). (*) 设 $\varphi$ 为 $[\alpha,\beta]$ 上的单调可微函数, 且 $\varphi'$ 可积. 如果 $f$ 在区间 $\varphi([\alpha,\beta])$ 上可积, $\varphi(\alpha) = a$, $\varphi(\beta) = b$, 则 $f(\varphi(t))\varphi'(t)$ 在 $[\alpha,\beta]$ 上可积, 且
$$
\int_a^b f(x)dx = \int_\alpha^\beta f(\varphi(t))\varphi'(t)dt.
$$
这是上述一般换元公式的一个特殊情形.

### · 分部积分

**定理6** (分部积分). 设 $u(x), v(x)$ 在 $[a,b]$ 上可微且导函数可积, 则
$$
\int_a^b u(x)v'(x)dx = u(x)v(x)\big|_a^b - \int_a^b u'(x)v(x)dx.
$$

> 在题设条件下, 函数 $u(x)v'(x)$ 和 $u'(x)v(x)$ 都是可积的.
> $$
> \begin{aligned}
> &\int_a^b u(x)v'(x)dx + \int_a^b u'(x)v(x)dx \\\\
> &= \int_a^b \left(u(x)v'(x) + u'(x)v(x)\right)dx \\\\
> &= \int_a^b (uv)'(x)dx = u(x)v(x)\big|_a^b.
> \end{aligned}
> $$
> 定理得证.

这里必须提到知名的 **Wallis 公式**：

> /Theorem/
> $$
> \int_{0}^{\frac{\pi}{2}} \cos^n x \, dx = \int_{0}^{\frac{\pi}{2}} \sin^n x \, dx=
> \left\{
> \begin{matrix}
> \dfrac{(n-1)!!}{(n)!} \cdot \dfrac{\pi}{2}, & {n=2k} \\\\
> \dfrac{(n-1)!!}{(n)!}, & {n=2k+1}
> \end{matrix}
> \right.
> $$

/example/  设 $f$ 是周期为 $T$ 的可积周期函数. 则对任意的 $a \in \mathbb{R}$, 有
$$
\int_a^{a+T} f(x)dx = \int_0^T f(x)dx.
$$

> /proof/
>
>
> $$
> \int_a^{a+T} f(x)dx = \int_a^0 f(x)dx + \int_0^T f(x) + \int_T^{a+T} f(x)dx.
> $$
> 最后的一项积分通过变换 $x = t + T$ 成为
> $$
> \int_0^a f(t+T)dt = \int_0^a f(t)dt,
> $$
> 代入前式就得到了等式的证明.

结束.
