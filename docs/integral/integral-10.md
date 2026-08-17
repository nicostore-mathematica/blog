---
title: Lesson 10 函数连续性 II
permalink: /integral/integral-10/
createTime: 2026/08/17 14:16:43
---

## Part 2 闭区间连续函数

函数的性质密切依赖于实数系的基本性质

### · 介值定理

**定理1** (有界性定理). 设 $f(x)$ 为闭区间 $[a,b]$ 上的连续函数, 则 $f(x)$ 在 $[a,b]$ 上有界.

> /proof/
>
> **证法一**: 用反证法. 假设 $f(x)$ 无界, 则存在点列 $\{x_n\} \subset [a,b]$, 使得
> $$
> |f(x_n)| \geq n,\quad n = 1,2,\cdots.
> $$
> 因为 $\{x_n\}$ 为有界点列, 故存在收敛子列 $\{x_{n_i}\}$, 使得
> $$
> \lim_{i \to \infty} x_{n_i} = x_0 \in [a,b].
> $$
> 又因为 $f(x)$ 在 $x_0$ 处连续, 故
> $$
> \lim_{i \to \infty} f(x_{n_i}) = f(x_0).
> $$
> 特别地, $\{f(x_{n_i})\}$ 是有界点列, 这和 $|f(x_{n_i})| \geq n_i\ (\forall\ i \geq 1)$ 相矛盾.
>
> **证法二**: 任取 $x \in [a,b]$, 因为 $f$ 在 $x$ 处连续, 故存在 $\delta_x > 0$, 使得
> $$
> |f(x') - f(x)| \leq 1,\quad \forall\ x' \in (x - \delta_x, x + \delta_x) \cap [a,b].
> $$
> 区间族 $\{(x - \delta_x, x + \delta_x)\}_{x \in [a,b]}$ 组成了闭区间 $[a,b]$ 的一个开覆盖, 因此存在有限子覆盖, 记为
> $$
> \{(x_i - \delta_{x_i}, x_i + \delta_{x_i})\},\ i = 1,2,\ldots,k.
> $$
> 令 $M = \max\limits_{1 \leq i \leq k} \{|f(x_i)| + 1\}$. 任取 $x \in [a,b]$, 设 $x \in (x_i - \delta_{x_i}, x_i + \delta_{x_i})$, 则
> $$
> |f(x)| \leq |f(x) - f(x_i)| + |f(x_i)| \leq 1 + |f(x_i)| \leq M,
> $$
> 这说明 $f(x)$ 是有界的. $\square$
>
> > 闭区间的条件不能减弱, 例如函数 $f(x) = \dfrac{1}{x}$ 在 $(0,1]$ 上连续, 但无界.

**定理2** (最值定理). 设 $f(x)$ 为闭区间 $[a,b]$ 上的连续函数, 则 $f(x)$ 在 $[a,b]$ 上必取到最大值和最小值, 即存在 $x_*, x^* \in [a,b]$, 使得
$$
f(x_*) \leq f(x) \leq f(x^*),\quad \forall\ x \in [a,b].
$$

> /proof/
>
> **证法一**: 根据有界性定理, $f(x)$ 有界, 因此 $f([a,b])$ 必有上确界和下确界. 记上确界为 $M$, 则存在点列 $\{x_n\} \subset [a,b]$, 使得
> $$
> M - \frac{1}{n} \leq f(x_n) \leq M.
> $$
> 根据夹逼原理, $f(x_n) \to M\ (n \to \infty)$. 因为 $\{x_n\}$ 为有界点列, 故存在收敛子列 $\{x_{n_i}\}$, 使得
> $$
> \lim_{i \to \infty} x_{n_i} = x^* \in [a,b].
> $$
> 因为 $f(x)$ 在 $x^*$ 处连续, 故 $f(x_{n_i}) \to f(x^*)\ (i \to \infty)$. 这说明 $M = f(x^*)$, $M$ 即为 $f(x)$ 的最大值. 同理可证最小值可以取到, 或考虑 $-f$ 的最大值即可.
>
> **证法二**: 用反证法. 设 $M$ 为 $f$ 的上确界, 但 $f(x) \neq M,\ \forall\ x \in [a,b]$. 考虑函数
> $$
> F(x) = \frac{1}{M - f(x)},\quad x \in [a,b].
> $$
> $F(x)$ 是 $[a,b]$ 上的正的连续函数. 由有界性定理, 存在正数 $K > 0$, 使得 $F(x) \leq K$. 从而
> $$
> f(x) \leq M - \frac{1}{K},\quad \forall\ x \in [a,b].
> $$
> 这与 $M$ 为 $f$ 的上确界相矛盾, 因此 $M$ 必被 $f(x)$ 取到. 下确界的情形同理可证. $\square$
>
> **注意**. 闭区间的条件不能减弱, 如 $f(x) = x,\ x \in (0,1]$ 是连续的, 但在 $(0,1]$ 上达不到最小值.

**定理3** (零值定理, Bolzano). 设 $f(x)$ 为闭区间 $[a,b]$ 上的连续函数, 且 $f(a)f(b) < 0$, 则存在 $\xi \in (a,b)$, 使得 $f(\xi) = 0$.

> **证法一**: 用闭区间套原理. 不妨设 $f(a) < 0,\ f(b) > 0$. 
>
> (反证法) 假设 $f(x) \neq 0,\ \forall\ x \in (a,b)$. 将 $[a,b]$ 二等分, 如果 $f\left(\dfrac{a+b}{2}\right) > 0$, 则取 $a_1 = a,\ b_1 = \dfrac{a+b}{2}$; 如果 $f\left(\dfrac{a+b}{2}\right) < 0$, 则取 $a_1 = \dfrac{a+b}{2},\ b_1 = b$, 
>
> 总之 $f(a_1) < 0,\ f(b_1) > 0$. 再将 $[a_1,b_1]$ 二等分, 用 $[a_2,b_2]$ 表示满足 $f(a_2) < 0,\ f(b_2) > 0$ 的那一半小区间. 如此继续, 我们得到闭区间套
> $$
> [a_1,b_1] \supset [a_2,b_2] \supset \cdots \supset [a_n,b_n] \supset \cdots,
> $$
> 满足 $f(a_n) < 0,\ f(b_n) > 0$, 且
> $$
> b_n - a_n = \frac{b-a}{2^n} \to 0,\quad n \to \infty.
> $$
> 由闭区间套原理, 存在 $x_0 \in [a,b]$, 使得
> $$
> \lim_{n \to \infty} a_n = \lim_{n \to \infty} b_n = x_0.
> $$
> 根据 $f$ 的连续性, 有
> $$
> 0 \geq \lim_{n \to \infty} f(a_n) = f(x_0) = \lim_{n \to \infty} f(b_n) \geq 0,
> $$
> 从而 $f(x_0) = 0$. 显然 $x_0 \neq a,b$, 这就导出了矛盾.
>
> **证法二**: 不妨设 $f(a) < 0,\ f(b) > 0$. 令
> $$
> A = \{x \in [a,b]\mid f(x) < 0\},
> $$
> 则 $a \in A$. 记 $\xi$ 为 $A$ 的上确界, 由 $f$ 的连续性易见 $\xi > a$. 由确界的定义, 存在 $x_n \in [a,b]$, 使得 $f(x_n) < 0,\ x_n \to \xi$, 因此
> $$
> f(\xi) = \lim_{n \to \infty} f(x_n) \leq 0,
> $$
> 特别地, $\xi < b$. 由 $A$ 的定义知 $f$ 在 $(\xi,b]$ 上非负, 由 $f$ 的连续性知 $f(\xi) \geq 0$, 这说明 $f(\xi) = 0$. 显然 $\xi \in (a,b)$.
>
> > **注意**. 如果条件改为 $f(a)f(b) \leq 0$, 则存在 $\xi \in [a,b]$, 使得 $f(\xi) = 0$. 事实上, 如果 $f(a)f(b) = 0$, 则 $f(a) = 0$ 或 $f(b) = 0$, 从而取 $\xi = a$ 或 $\xi = b$ 即可; 当 $f(a)f(b) < 0$ 时用零值定理的结论即可

**定理4** (介值定理). 设 $f(x)$ 为 $[a,b]$ 上的连续函数, $\mu$ 是严格介于 $f(a)$ 和 $f(b)$ 之间的数, 则存在 $\xi \in (a,b)$, 使得 $f(\xi) = \mu$.

> /proof/
>
> 设 $\mu$ 是严格介于 $f(a)$ 和 $f(b)$ 之间的数, 则 $(f(a) - \mu)(f(b) - \mu) < 0$. 因此, 由零值定理, 连续函数 $f(x) - \mu$ 在 $(a,b)$ 内存在零点 $\xi$, 即 $f(\xi) = \mu$.

**推论5**. 设 $f(x)$ 是 $[a,b]$ 上的连续函数, 则 $f([a,b]) = [m,M]$, 其中 $m$, $M$ 分别是 $f$ 在 $[a,b]$ 上的最小值和最大值.

> 当 $m = M$ 时 $f(x)$ 为常值函数, 结论自然成立. 
>
> 设 $m < M$. 显然, $f([a,b]) \subset [m,M]$. 另一方面, 由最值定理, 存在 $x_*, x^*$, 使得 $f(x_*) = m,\ f(x^*) = M$.
>
> 由介值定理, 介于 $m$ 和 $M$ 之间的值也能被 $f(x)$ 取到, 因此 $[m,M] \subset f([a,b])$. 这说明 $f([a,b]) = [m,M]$.

**推论6**. 设 $f(x)$ 是区间 $I$ 中的连续函数, 则 $f(I)$ 也是区间 (可退化为一点).

> 如果 $f(x)$ 为常值函数, 则 $f(I)$ 退化为一点. 否则, 任取 $y_1 < y_2 \in f(I)$, 设 $f(x_1) = y_1,\ f(x_2) = y_2$, 在以 $x_1,\ x_2$ 为端点的闭区间上用介值定理, 我们就知道 $[y_1,y_2] \subset f(I)$. 由 $y_1,\ y_2$ 的任意性知 $f(I)$ 为一个区间.

**推论7**. 设 $f(x)$ 是区间 $I$ 中的连续函数, 则 $f(x)$ 可逆当且当 $f(x)$ 是严格单调函数.

> 只要证明必要性就可以了. 设 $x_1 < x_2 \in I$. 因为 $f(x)$ 可逆, 故 $f(x_1) \neq f(x_2)$. 如果 $f(x_1) < f(x_2)$, 我们将证明 $f(x)$ 在 $[x_1,x_2]$ 上是严格单调递增的. (反证法) 设 $x' < x'' \in [x_1,x_2],\ f(x') \geq f(x'')$. 分情况讨论:
>
> (1) $f(x'') < f(x_1)$. 这时 $f(x'') < f(x_1) < f(x_2)$, 由介值定理, 存在 $\xi \in [x'',x_2]$, 使得 $f(\xi) = f(x_1)$, 这与 $f(x)$ 可逆相矛盾;
>
> (2) $f(x'') > f(x_1)$. 这时 $f(x') \geq f(x'') > f(x_1)$, 由介值定理, 存在 $\xi \in [x_1,x']$, 使得 $f(\xi) = f(x'')$, 这与 $f(x)$ 可逆相矛盾.
>
> 如果 $f(x_1) > f(x_2)$, 完全类似地可以证明 $f(x)$ 在 $[x_1,x_2]$ 上是严格单调递减的. 总之, $f(x)$ 在任何闭区间上都是严格单调的, 从而不难得出 $f(x)$ 在 $I$ 中是严格单调的.

### · 一致连续

**定义1** (一致连续). 设函数 $f(x)$ 定义在区间 $I$ 中, 如果任给 $\varepsilon > 0$, 均存在 $\delta = \delta(\varepsilon) > 0$, 使得当 $x_1,x_2 \in I$, 且 $|x_1 - x_2| < \delta$ 时有
$$
|f(x_1) - f(x_2)| < \varepsilon,
$$
则称 $f(x)$ 在 $I$ 中一致连续.

> (1) 显然, 一致连续函数一定是连续函数. 一致连续性和连续性的区别就是, 用 $\varepsilon-\delta$ 语言定义 $x_0$ 处的连续性时, 定义中出现的 $\delta$ 一般会依赖于连续点 $x_0$ 以及 $\varepsilon$, 而一致连续性定义中出现的 $\delta$ 是不依赖于具体连续点的, 即对所有的连续点都能取到一个公共的 $\delta$, 一致性就体现在这儿.
>
> (2) 用逆反命题的形式改写定义, 就得到: $f(x)$ 在 $I$ 中不一致连续当且仅当存在 $\varepsilon_0 > 0$, 以及 $I$ 中点列 $\{a_n\}, \{b_n\}$, 使得 $a_n - b_n \to 0\ (n \to \infty)$, 且
> $$
> |f(a_n) - f(b_n)| \geq \varepsilon_0.
> $$

/example/ 研究函数 $f(x) = \sin x,\ x \in \mathbb{R}$ 的一致连续性.

> 任给 $\varepsilon > 0$, 取 $\delta = \varepsilon$. 当 $x_1,x_2 \in \mathbb{R}$, 且 $|x_1 - x_2| < \delta$ 时, 有
> $$
> \begin{aligned}
> |\sin x_1 - \sin x_2| &= \left|2\sin\frac{x_1 - x_2}{2}\cos\frac{x_1 + x_2}{2}\right| \\\\
> &\leq 2\left|\sin\frac{x_1 - x_2}{2}\right| \\\\
> &\leq |x_1 - x_2| < \varepsilon.
> \end{aligned}
> $$
> 这说明 $\sin x$ 在 $(-\infty,+\infty)$ 中是一致连续的.
>
> $\sin x$ 是所谓 Lipschitz 函数的特殊情形.

设 $f(x)$ 是定义在区间 $I$ 中的函数. 如果存在 $0 < \alpha \leq 1$, 以及常数 $M$, 使得
$$
|f(x_1) - f(x_2)| \leq M|x_1 - x_2|^\alpha,\quad \forall\ x_1,x_2 \in I,
$$
则称 $f(x)$ 是 $I$ 中的 $\alpha$ 阶 Hölder 函数. 当 $\alpha = 1$ 时也称为 Lipschitz 函数.

Hölder 函数都是一致连续的: 任给 $\varepsilon > 0$, 取
$$
\delta = \left(\frac{\varepsilon}{M}\right)^{\frac{1}{\alpha}},
$$
则当 $x_1,x_2 \in I,\ |x_1 - x_2| < \delta$ 时, 有
$$
|f(x_1) - f(x_2)| \leq M|x_1 - x_2|^\alpha < M\left(\frac{\varepsilon}{M}\right) = \varepsilon.
$$
**命题8**. 设 $f(x), g(x)$ 为区间 $I$ 中的一致连续函数. 则  

(1) $\alpha f(x) + \beta g(x)$ 在 $I$ 中也是一致连续的;  

(2) 如果 $f(x), g(x)$ 为有界函数, 则 $f(x)g(x)$ 也是一致连续的;  

(3) 如果 $f(x)$ 有界, 且存在 $\varepsilon_0 > 0$, 使得 $g(x) \geq \varepsilon_0,\ \forall\ x \in I$, 则 $f(x)/g(x)$ 也是一致连续的;  

(4) 一致连续函数的复合函数仍为一致连续函数.

**定理9** (Cantor). 闭区间上的连续函数是一致连续的.

> /proof/
>
> 设 $f(x)$ 是 $[a,b]$ 上的连续函数.
>
> **证法一**: (反证法) 如果 $f(x)$ 不是一致连续的, 则存在 $\varepsilon_0 > 0$, 以及点列 $\{a_n\}, \{b_n\} \subset [a,b]$, 使得 $a_n - b_n \to 0\ (n \to \infty)$, 且
> $$
> |f(a_n) - f(b_n)| \geq \varepsilon_0.
> $$
> 因为 $\{b_n\}$ 为有界点列, 故存在收敛子列 $\{b_{n_i}\}$, 设 $b_{n_i} \to x_0 \in [a,b]$. 此时
> $$
> a_{n_i} = (a_{n_i} - b_{n_i}) + b_{n_i} \to 0 + x_0 = x_0\quad (i \to \infty).
> $$
> 因为 $f(x)$ 在 $x_0$ 处连续, 故
> $$
> \varepsilon_0 \leq |f(a_{n_i}) - f(b_{n_i})| \to |f(x_0) - f(x_0)| = 0\quad (i \to \infty),
> $$
> 这就导出了矛盾.
>
> **证法二**: 任给 $\varepsilon > 0$, 因为 $f(x)$ 连续, 故对于任意 $x \in [a,b]$, 存在 $\delta_x > 0$, 使得
> $$
> |f(x') - f(x)| < \frac{\varepsilon}{2},\quad \forall\ x' \in (x - \delta_x, x + \delta_x) \cap [a,b].
> $$
> 显然, $\left\{(x - \frac{\delta_x}{2}, x + \frac{\delta_x}{2})\right\}_{x \in [a,b]}$ 为闭区间 $[a,b]$ 的一个开覆盖, 因而存在有限子覆盖, 即存在 $x_i\ (1 \leq i \leq k)$, 使得
> $$
> [a,b] \subset \bigcup_{i=1}^k \left(x_i - \frac{\delta_{x_i}}{2}, x_i + \frac{\delta_{x_i}}{2}\right).
> $$
> 记
> $$
> \delta = \min\left\{\frac{\delta_{x_i}}{2} \mid i = 1,2,\ldots,k\right\},
> $$
> 则对于任意的 $x',x'' \in [a,b]$, 如果 $|x' - x''| < \delta$, 设
> $$
> x' \in \left(x_i - \frac{\delta_{x_i}}{2}, x_i + \frac{\delta_{x_i}}{2}\right),\ \text{(对某个 } i\text{)},
> $$
> 则
> $$
> |x'' - x_i| \leq |x'' - x'| + |x' - x_i| < \delta + \frac{\delta_{x_i}}{2} \leq \delta_{x_i},
> $$
> 从而有 $x'' \in (x_i - \delta_{x_i}, x_i + \delta_{x_i})$. 因此, 我们有
> $$
> |f(x') - f(x'')| \leq |f(x') - f(x_i)| + |f(x_i) - f(x'')| \leq 2\frac{\varepsilon}{2} = \varepsilon,
> $$
> 这说明 $f(x)$ 在 $[a,b]$ 上是一致连续的. 

最后引出函数振幅的概念, 并利用它来刻画连续性和一致连续性. 某个变化量的振幅, 是指其“最大”和“最小”值的差. 如果这个变化量的值趋于一个定数, 则其振幅应趋于零. 

**定义2** (振幅). 设 $f(x)$ 在 $x_0$ 的一个开邻域内有定义, 称
$$
\omega_f(x_0,r) = \sup\left\{|f(x') - f(x'')| \mid x',x'' \in (x_0 - r, x_0 + r)\right\}\quad (r > 0)
$$
为 $f$ 在区间 $(x_0 - r, x_0 + r)$ 上的振幅. 显然, $\omega_f(x_0,r)$ 关于 $r \to 0^+$ 单调递减, 因此
$$
\omega_f(x_0) = \lim_{r \to 0^+} \omega_f(x_0,r)
$$
存在 (不一定有限), 称为 $f$ 在 $x_0$ 处的振幅.

> (1) $\omega_f(x_0,r)$ 也可以定义为
> $$
> \omega_f(x_0,r) = \sup_{x \in (x_0 - r, x_0 + r)} f(x) - \inf_{x \in (x_0 - r, x_0 + r)} f(x),
> $$
> (2) 也可类似地对闭区间以及 $x_0$ 的一侧定义函数的振幅.

**命题10**. $f(x)$ 在 $x_0$ 处连续当且仅当 $\omega_f(x_0) = 0$.

> 设 $f(x)$ 在 $x_0$ 处连续. 任给 $\varepsilon > 0$, 存在 $\delta > 0$, 当 $|x - x_0| < \delta$ 时
> $$
> |f(x) - f(x_0)| < \frac{\varepsilon}{2}.
> $$
> 因此, 对于 $\forall\ x',x'' \in (x_0 - r, x_0 + r)\ (0 < r \leq \delta)$, 有
> $$
> |f(x') - f(x'')| \leq |f(x') - f(x_0)| + |f(x_0) - f(x'')| < 2\frac{\varepsilon}{2} = \varepsilon.
> $$
> 即当 $0 < r \leq \delta$ 时
> $$
> \omega_f(x_0,r) \leq \varepsilon.
> $$
> 这说明 $\omega_f(x_0) = \displaystyle\lim_{r \to 0^+} \omega_f(x_0,r) = 0$.
>
> 反之, 设 $\displaystyle\lim_{r \to 0^+} \omega_f(x_0,r) = \omega_f(x_0) = 0$, 则任给 $\varepsilon > 0$, 存在 $\delta > 0$, 使得
> $$
> \omega_f(x_0,r) < \varepsilon,\quad \forall\ 0 < r \leq \delta.
> $$
> 特别地, 对于满足 $|x - x_0| < \delta$ 的点 $x$, 有
> $$
> |f(x) - f(x_0)| \leq \omega_f(x_0,\delta) < \varepsilon,
> $$
> 这说明 $f(x)$ 在 $x_0$ 处连续.

我们可以类似地用振幅来刻画一致连续性. 设 $f$ 定义在区间 $I$ 中, $r > 0$. 令
$$
\omega_f(r) = \sup\left\{|f(x') - f(x'')| \mid \forall\ x',x'' \in I,\ |x' - x''| < r\right\},
$$
则 $\omega_f(r)$ 关于 $r \to 0^+$ 单调递减. 利用一致连续的定义可得如下命题：

**命题11**. $f$ 在 $I$ 中一致连续当且仅当 $\displaystyle\lim_{r \to 0^+} \omega_f(r) = 0$.

结束.
