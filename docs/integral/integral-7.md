---
title: Lesson 7 函数极限 I
permalink: /integral/integral-7/
createTime: 2026/08/17 14:16:35
---

## Part 1 定义

同数列的极限那样，我们用 $\varepsilon-\delta$ 语言来讨论当变量趋于某一点（或无穷远）时函数取值的变化趋势. 

设 $x_0 \in \mathbb{R}$，$\delta > 0$. 我们将开区间 $(x_0 - \delta, x_0 + \delta)$ 称为 $x_0$ 的一个**开邻域**；两个开区间之并 $(x_0 - \delta, x_0) \cup (x_0, x_0 + \delta)$ 称为 $x_0$ 的一个**去心开邻域**或**空心开邻域**. 

**定义1**：

> 设函数 $f(x)$ 在点 $x_0$ 的一个空心开邻域 $(x_0 - \delta_0, x_0) \cup (x_0, x_0 + \delta_0)$ 中有定义. 如果存在 $A \in \mathbb{R}$，使得对任意给定的 $\varepsilon > 0$，都存在 $0 < \delta < \delta_0$，当 $0 < |x - x_0| < \delta$ 时，有
> $$
> |f(x) - A| < \varepsilon,
> $$
> 则称函数 $f(x)$ 在 $x_0$ 处（当 $x$ 趋于 $x_0$ 时）有极限 $A$，记为
> $$
> \lim_{x \to x_0} f(x) = A \quad \text{或} \quad f(x) \to A \quad (x \to x_0).
> $$
>
> 需要注意的是，$f$ 在 $x_0$ 处的极限与 $f$ 在 $x_0$ 处的值没有直接关系，$f$ 甚至可以在 $x_0$ 处没有定义. 
>
> 完全类似地，我们也可以定义 $x_0$ 处的单侧极限：
>
> - 如果存在 $A \in \mathbb{R}$，使得对任意给定的 $\varepsilon > 0$，都存在 $0 < \delta < \delta_0$，当 $-\delta < x - x_0 < 0$ 时，有
>   $$
>   |f(x) - A| < \varepsilon,
>   $$
>   则称函数 $f(x)$ 在 $x_0$ 处（当 $x$ 趋于 $x_0^-$ 时）有**左极限** $A$，记为
>   $$
>   \lim_{x \to x_0^-} f(x) = A \quad \text{或} \quad f(x) \to A \quad (x \to x_0^-).
>   $$
>   $f(x)$ 在 $x_0$ 处的左极限也记为 $f(x_0^-)$ 或 $f(x_0 - 0)$. 
>
> - 如果存在 $A \in \mathbb{R}$，使得对任意给定的 $\varepsilon > 0$，都存在 $0 < \delta < \delta_0$，当 $0 < x - x_0 < \delta$ 时，有
>   $$
>   |f(x) - A| < \varepsilon,
>   $$
>   则称函数 $f(x)$ 在 $x_0$ 处（当 $x$ 趋于 $x_0^+$ 时）有**右极限** $A$，记为
>   $$
>   \lim_{x \to x_0^+} f(x) = A \quad \text{or} \quad f(x) \to A \quad (x \to x_0^+).
>   $$
>   $f(x)$ 在 $x_0$ 处的右极限也记为 $f(x_0^+)$ 或 $f(x_0 + 0)$. 
>
> 显然，如果 $f$ 在 $x_0$ 处极限存在，则其左右极限也存在且等于此极限. 

**命题1**：$f$ 在 $x_0$ 处有极限的充分必要条件是 $f$ 在 $x_0$ 的左极限和右极限都存在且相等

> 只要证明充分性即可. 设 $f$ 在 $x_0$ 处的左极限和右极限均为 $A$. 由定义，任给 $\varepsilon > 0$，存在 $\delta_1 > 0$, $\delta_2 > 0$，使得
> $$
> |f(x) - A| < \varepsilon,\quad x \in (x_0 - \delta_1, x_0),
> $$
>
> $$
> |f(x) - A| < \varepsilon,\quad x \in (x_0, x_0 + \delta_2).
> $$
>
> 记 $\delta = \min\{\delta_1, \delta_2\}$，则
> $$
> |f(x) - A| < \varepsilon,\quad 0 < |x - x_0| < \delta.
> $$
>
> 因此 $f$ 在 $x_0$ 处的极限为 $A$. 

/example/ 研究函数 $\dfrac{x^2 - 1}{2x^2 - 3x + 1}$ 在 $x_0 = 1$ 处的极限. 

> 当 $x \ne 1$ 时，
> $$
> \frac{x^2 - 1}{2x^2 - 3x + 1} = \frac{(x+1)(x-1)}{(x-1)(2x-1)} = \frac{x+1}{2x-1},
> $$
> 因此，任给 $\varepsilon > 0$，取 $\delta = \min\left\{\frac{1}{4}, \frac{\varepsilon}{6}\right\}$，当 $0 < |x - 1| < \delta$ 时，
> $$
> \left|\frac{x^2 - 1}{2x^2 - 3x + 1} - 2\right| = \left|\frac{x+1}{2x-1} - 2\right| = \left|\frac{3(x-1)}{2x-1}\right| < 6|x - 1| < \varepsilon.
> $$
>
> 这说明该函数在 $x_0 = 1$ 处的极限为 $2$. 

/example/ 研究函数 $f(x) = [x]$ 的极限. 

> 当 $k \le x < k+1$（$k$ 为整数）时，$f(x) = k$. 这说明：
>
> - 当 $x_0$ 不是整数时，$f$ 在 $x = x_0$ 处的极限等于 $f(x_0) = [x_0]$；
> - 当 $x_0$ 为整数时，$f$ 在 $x = x_0$ 处的左极限为 $x_0 - 1$，右极限为 $x_0$. 

数列极限的许多结果都可以推广到函数极限的情形, 如下面的夹逼原理和极限的惟一性

**命题2**（夹逼原理）：设在 $x_0$ 的一个空心开邻域内有
$$
f_1(x) \le f(x) \le f_2(x).
$$
如果 $f_1, f_2$ 在 $x_0$ 处的极限存在且等于 $A$，则 $f$ 在 $x_0$ 处的极限也等于 $A$. 

> /proof/ 证明过程参考数列极限.

**命题3**（极限的唯一性）：设 $A, B$ 均为 $f$ 在 $x_0$ 处的极限，则 $A = B$. 

> /proof/
>
> 利用不等式
> $$
> 0 \le |A - B| \le |f(x) - A| + |f(x) - B|
> $$
> 和夹逼原理即可

**命题4**（绝对值的极限）：设 $f$ 在 $x_0$ 处的极限为 $A$，则 $|f|$ 在 $x_0$ 处的极限为 $|A|$. 

> /proof/
>
> 利用不等式
> $$
> 0 \le ||f(x)| - |A|| \le |f(x) - A|
> $$
> 和夹逼原理即可

/example/ 证明
$$
\lim_{x \to x_0} \sin x = \sin x_0, \quad \lim_{x \to x_0} \cos x = \cos x_0, \quad \forall\, x_0 \in \mathbb{R}.
$$

> **(1)** 任给 $\varepsilon > 0$，取 $\delta = \varepsilon$，当 $0 < |x - x_0| < \delta$ 时，有
> $$
> \begin{aligned}
> |\sin x - \sin x_0| &= 2\left|\cos\frac{x + x_0}{2}\right|\left|\sin\frac{x - x_0}{2}\right|\\\\ 
> &\leqslant 2\left|\frac{x - x_0}{2}\right| = |x - x_0| < \delta = \varepsilon.
> \end{aligned}
> $$
>
> **(2)** 关于 $\cos x$ 的极限可象 (1) 一样证明，也可这样做：
> $$
> \lim_{x \to x_0} \cos x = \lim_{x \to x_0} \sin\left(\frac{\pi}{2} - x\right) = \sin\left(\frac{\pi}{2} - x_0\right) = \cos x_0.
> $$

我们再来看看个关于函数极限的例子

/example/ 设 $x_0 \geqslant 0$. 研究函数 $f(x) = \sqrt{x}$ 在 $x_0$ 处的极限. 

> /proof/
>
> 当 $x_0 = 0$ 时，任给 $\varepsilon > 0$，取 $\delta = \varepsilon^2$，当 $0 < x < \delta$ 时，
> $$
> |\sqrt{x} - 0| = \sqrt{x} < \sqrt{\delta} = \varepsilon,
> $$
> 因此
> $$
> \lim_{x \to 0^+} \sqrt{x} = 0.
> $$
>
> 当 $x_0 > 0$ 时，任给 $\varepsilon > 0$，取 $\delta = \varepsilon\sqrt{x_0}$，当 $0 < |x - x_0| < \delta$ 时，
> $$
> |\sqrt{x} - \sqrt{x_0}| = \frac{|x - x_0|}{\sqrt{x} + \sqrt{x_0}} \leqslant \frac{|x - x_0|}{\sqrt{x_0}} < \frac{\delta}{\sqrt{x_0}} = \varepsilon,
> $$
> 因此
> $$
> \lim_{x \to x_0} \sqrt{x} = \sqrt{x_0}.
> $$

### · 无穷远处极限

**定义2**

设 $f$ 在 $x_0$ 的一个空心开邻域中有定义. 如果任给 $A > 0$，均存在 $\delta > 0$，当 $0 < |x - x_0| < \delta$ 时，有 $f(x) > A$，则称 $f$ 在 $x_0$ 处的极限为 $+\infty$，记为
$$
\lim_{x \to x_0} f(x) = +\infty \quad \text{or} \quad f(x) \to +\infty \quad (x \to x_0).
$$

如果任给 $A < 0$，均存在 $\delta > 0$，当 $0 < |x - x_0| < \delta$ 时，有 $f(x) < A$，则称 $f$ 在 $x_0$ 处的极限为 $-\infty$，记为
$$
\lim_{x \to x_0} f(x) = -\infty \quad \text{or} \quad f(x) \to -\infty \quad (x \to x_0).
$$

对于这种极限，夹逼原理和唯一性仍然成立. 我们也可以完全类似地给出 $f$ 在 $x_0$ 处的左极限或右极限为无穷大的定义，这里不再赘述. 有时，当我们说 $f$ 在 $x_0$ 处的极限为无穷大是指 $|f|$ 在 $x_0$ 处的极限为 $+\infty$. 

**定义3**

> 设 $f$ 在 $+\infty$ 的一个开邻域 $(a, +\infty)$ 中有定义. 如果存在 $A \in \mathbb{R}$，使得对于任给的 $\varepsilon > 0$，存在 $M > a$，当 $x > M$ 时，有
> $$
> |f(x) - A| < \varepsilon,
> $$
> 则称 $f$ 在 $+\infty$ 处有极限 $A$，记为
> $$
> \lim_{x \to +\infty} f(x) = A \quad \text{or} \quad f(x) \to A \quad (x \to +\infty).
> $$
>
> 类似地，设 $f$ 在 $-\infty$ 的一个开邻域 $(-\infty, a)$ 中有定义. 如果存在 $A \in \mathbb{R}$，使得对于任给的 $\varepsilon > 0$，存在 $m < a$，当 $x < m$ 时，有
> $$
> |f(x) - A| < \varepsilon,
> $$
> 则称 $f$ 在 $-\infty$ 处有极限 $A$，记为
> $$
> \lim_{x \to -\infty} f(x) = A \quad \text{or} \quad f(x) \to A \quad (x \to -\infty).
> $$
>
> 如果 $f$ 在 $-\infty$ 以及 $+\infty$ 处的极限均为 $A$，则称 $f$ 在 $\infty$（无穷远）处有极限 $A$，记为
> $$
> \lim_{x \to \infty} f(x) = A \quad \text{or} \quad f(x) \to A \quad (x \to \infty).
> $$
>
> 我们可以类似地给出 $f$ 在无穷远处极限为无穷大的定义，这里也不再赘述. 

### · 重要极限

(1). 研究函数 $\dfrac{\sin x}{x}$ 在 $x_0 = 0$ 处的极限

> /proof/
>
> 先考虑 $0 < x < \dfrac{\pi}{2}$ 的情形.   
>
> 作半径为 1 的圆（单位圆），$O$ 为圆心，$A, D$ 为圆周上的点，角 $\angle AOD$ 大小为 $x$，$DC, BA$ 均与 $OA$ 垂直，$B$ 在 $OD$ 的延长线上. 比较三角形 $\triangle OAD$、扇形 $OAD$ 以及三角形 $\triangle OAB$ 的面积大小，得：
> $$
> \frac{1}{2} \sin x < \frac{1}{2} x < \frac{1}{2} \tan x,
> $$
> 即
> $$
> \cos x < \frac{\sin x}{x} < 1, \quad \forall\, x \in \left(0, \frac{\pi}{2}\right).
> $$
>
> 由于 $\cos x$ 和 $\dfrac{\sin x}{x}$ 为偶函数，故上式对 $x \in \left(-\frac{\pi}{2}, 0\right)$ 也成立. 因此当 $0 < |x| < \dfrac{\pi}{2}$ 时，有
> $$
> \left|\frac{\sin x}{x} - 1\right| < 1 - \cos x = 2\sin^2\frac{x}{2} \leqslant 2\left(\frac{x}{2}\right)^2 = \frac{x^2}{2}.
> $$
>
> 由夹逼原理得
> $$
> \lim_{x \to 0} \frac{\sin x}{x} = 1.
> $$
>
> > **注意**：当 $|x| \geqslant \dfrac{\pi}{2}$ 时，
> > $$
> > |\sin x| \leqslant 1 < \frac{\pi}{2} \leqslant |x|,
> > $$
> > 因此我们得到下面的不等式：
> > $$
> > |\sin x| \leqslant |x|, \quad \forall\, x \in \mathbb{R},
> > $$
> > 等号仅在 $x = 0$ 处成立. 

(2). 研究函数 $\left(1 + \dfrac{1}{x}\right)^x$ 在无穷远处的极限. 

> /proof/
>
> 当 $x \geqslant 1$ 时，
> $$
> \left(1 + \frac{1}{[x]+1}\right)^{[x]+1} \leqslant \left(1 + \frac{1}{x}\right)^x \leqslant \left(1 + \frac{1}{[x]}\right)^{[x]+1},
> $$
> 其中 $[x]$ 是不超过 $x$ 的最大整数. 因此
> $$
> \left(1 + \frac{1}{[x]+1}\right)^{[x]+1} \left(1 + \frac{1}{[x]+1}\right)^{-1} \leqslant \left(1 + \frac{1}{x}\right)^x \leqslant \left(1 + \frac{1}{[x]}\right)^{[x]} \left(1 + \frac{1}{[x]}\right).
> $$
>
> 利用数列极限
> $$
> \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e,
> $$
> 以及夹逼原理得
> $$
> \lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x = e.
> $$
>
> 类似可证
> $$
> \lim_{x \to -\infty} \left(1 + \frac{1}{x}\right)^x = e.
> $$

