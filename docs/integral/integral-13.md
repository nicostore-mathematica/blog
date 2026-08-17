---
title: Lesson 13 微分学 III
permalink: /integral/integral-13/
createTime: 2026/08/17 14:16:54
---

## Part 4 导数应用

### · 单调函数

**命题1**. 设 $f$ 在 $[a,b]$ 上连续，在 $(a,b)$ 中可微. 如果 $f'(x) = 0$, $\forall\ x \in (a,b)$，则 $f$ 为常值函数. 

> 任取 $x,y \in [a,b]$，由 Lagrange 中值定理，存在 $\xi \in (a,b)$，使得  
> $$
> f(x) - f(y) = f'(\xi)(x - y) = 0,
> $$
> 因此 $f$ 为常值函数.

完全类似的证明可以推出

**命题2**：设 $f$ 在 $[a,b]$ 上连续，在 $(a,b)$ 中可微. 则 $f$ 为单调函数当且仅当 $f'$ 不变号.

> 不妨设 $f$ 为单调递增函数，则由导数的定义，当 $x_0 \in (a,b)$ 时，有  
> $$
> f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0},
> $$
> 因为 $f$ 是单调递增的，故 $\dfrac{f(x) - f(x_0)}{x - x_0}$ 总是非负的，从而 $f'(x_0) \ge 0$. 
>
> 反之，不妨设 $f'(x) \ge 0$, $x \in (a,b)$. 任取 $x_1 < x_2 \in [a,b]$，由 Lagrange 中值定理，存在 $\xi \in (x_1,x_2)$，使得  
> $$
> f(x_2) - f(x_1) = f'(\xi)(x_2 - x_1) \ge 0,
> $$
> 因此 $f$ 是单调递增的.

如果 $f' > 0$，则 $f$ 是严格单调递增的；如果 $f' < 0$，则 $f$ 是严格单调递减的. 反之不然，例如，函数 $f(x) = x^3$ 是严格单调递增的，但 $f'(0) = 0$. 

下面的结果进一步说明，如果可微函数在两个驻点之间没有其它驻点，则它在这两个驻点之间是单调的，我们可以藉此判断函数图像的大致走向.

**定理3**（反函数定理）：设 $f$ 为区间 $I$ 中的可微函数，如果 $f$ 的导数处处非零，则 $f: I \to f(I)$ 是可逆的，且其逆函数也可微. 

> 如果 $f'(x) \ne 0$, $\forall\ x \in I$，则由 Lagrange 定理知 $f$ 是单射，根据前面的证明知 $f$ 是严格单调函数且 $f$ 可逆，不难证明 $f$ 的逆函数也可微.

**命题4**：设 $\delta > 0$，$f$ 在 $(x_0 - \delta, x_0 + \delta)$ 中连续，在 $(x_0 - \delta, x_0) \cup (x_0, x_0 + \delta)$ 中可微. 如果  
$$
f'(x) \le 0,\ x \in (x_0 - \delta, x_0);\quad f'(x) \ge 0,\ x \in (x_0, x_0 + \delta),
$$
则 $x_0$ 为 $f$ 的极小值点；如果  
$$
f'(x) \ge 0,\ x \in (x_0 - \delta, x_0);\quad f'(x) \le 0,\ x \in (x_0, x_0 + \delta),
$$
则 $x_0$ 为 $f$ 的极大值点.

> 以第一种情形为例. 任取 $x \in (x_0 - \delta, x_0)$，由 Lagrange 中值定理，存在 $\xi \in (x,x_0)$，使得  
> $$
> f(x) - f(x_0) = f'(\xi)(x - x_0),
> $$
> 因为 $f'(\xi) \le 0$, $x - x_0 < 0$，故此时 $f(x) - f(x_0) \ge 0$. 同理，任取 $x \in (x_0, x_0 + \delta)$，则由 Lagrange 中值定理，存在 $\zeta \in (x_0,x)$，使得  
> $$
> f(x) - f(x_0) = f'(\zeta)(x - x_0) \ge 0,
> $$
> 因此 $x_0$ 为 $f$ 的极小值点.

**命题5**：设 $f$ 在 $x_0$ 处二阶可导，且 $f'(x_0) = 0$. 则  

(1) 如果 $f''(x_0) > 0$，则 $x_0$ 为 $f$ 的（严格）极小值点；  

(2) 如果 $f''(x_0) < 0$，则 $x_0$ 为 $f$ 的（严格）极大值点. 

> 以 (1) 为例. 设 $f''(x_0) > 0$，则由导数定义，  
> $$
> \lim_{x \to x_0} \frac{f'(x)}{x - x_0} = \lim_{x \to x_0} \frac{f'(x) - f'(x_0)}{x - x_0} = f''(x_0) > 0,
> $$
> 这说明，存在 $\delta > 0$，使得当 $x \in (x_0 - \delta, x_0)$ 时 $f'(x) < 0$；当 $x \in (x_0, x_0 + \delta)$ 时 $f'(x) > 0$. 利用命题 5.3.4 的证明即知 $x_0$ 为 $f$ 的（严格）极小值点.

**推论6**：设 $f$ 在 $x_0$ 处二阶可导，$x_0$ 为 $f$ 的极小（大）值点，则 $f''(x_0) \ge 0$（$\le 0$）. 

> 不妨设 $x_0$ 为 $f$ 的极小值点，则 $x_0$ 为驻点. 
>
> 如果 $f''(x_0) < 0$，则由上面的命题，$x_0$ 为 $f$ 的严格极大值点，从而不可能是极小值点.

如果 $x_0$ 是 $f$ 的驻点，且 $f''(x_0) = 0$，则 $x_0$ 可能是极值点，也可能不是极值点. 这时我们往往需要利用高阶导数去做进一步的判断.

### · 凸函数

如果函数 $f$ 二阶可导，且 $f'' > 0$，则 $f$ 在区间的内部取不到极大值. 进一步，如果 $f$ 在 $[a,b]$ 上二阶可导，则  
$$
f(x) - l(x) = \frac{1}{2}f''(\xi)(x - a)(x - b),\quad \xi \in (a,b),
$$
其中 $l(x)$ 是满足条件 $l(a) = f(a)$, $l(b) = f(b)$ 的线性函数，它可以写成  
$$
\begin{aligned}
l(x) &= \frac{f(b) - f(a)}{b - a}(x - a) + f(a),\text{ or}\\\\
l(x) &= f(b) - \frac{f(b) - f(a)}{b - a}(b - x).
\end{aligned}\tag{1-1}
$$
于是，当 $f'' \ge 0$ 时，有  
$$
f(x) \le l(x),\quad \forall\ x \in (a,b).\tag{1-2}
$$
特别地，由线性函数的单调性可得  
$$
f(x) \le l(x) \le \max\{l(a), l(b)\} = \max\{f(a), f(b)\},\quad \forall\ x \in [a,b].
$$
**定义1**（凸函数）

设 $f$ 为区间 $I$ 中定义的函数. 如果对任意 $a < b \in I$，(1-2) 式均成立，则称 $f$ 为 $I$ 中的凸函数. 

当 (1-2) 中不等号反向时，则称相应的函数为凹函数. 有时也将凸函数称为下凸函数，凹函数称为上凸函数. 如果不等号为严格小于号，则称相应的函数为严格凸函数. 

我们可以将 $f(x) \le l(x)$ 改写为  
$$
\frac{f(x) - f(a)}{x - a} \le \frac{f(b) - f(a)}{b - a} \le \frac{f(b) - f(x)}{b - x},\quad \forall\ x \in (a,b).\tag{1-3}
$$
上式与下面的不等式等价  
$$
\frac{f(x) - f(a)}{x - a} \le \frac{f(b) - f(x)}{b - x},\quad \forall\ x \in (a,b).\tag{1-4}
$$
这只要对 两端利用如下初等结论即可：即，如果 $k,l > 0$, $\dfrac{m}{k} \le \dfrac{n}{l}$，则  
$$
\frac{m}{k} \le \frac{m + n}{k + l} \le \frac{n}{l}.
$$
假设不等式 (1-4) 成立，应用此初等结论即有  
$$
\frac{f(x) - f(a)}{x - a} \le \frac{(f(x) - f(a)) + (f(b) - f(x))}{(x - a) + (b - x)} \le \frac{f(b) - f(x)}{b - x},
$$
这也就是不等式 (1-3). 

当 $x \in [a,b]$ 时，$x$ 可以写为  
$$
x = ta + (1 - t)b,\quad t = \frac{b - x}{b - a} \in [0,1].
$$
此时 $l(x)$ 可以写为 $l(x) = tf(a) + (1 - t)f(b)$. 于是 (1-2) 可以改写为  
$$
f(ta + (1 - t)b) \le tf(a) + (1 - t)f(b),\quad \forall\ t \in (0,1).
$$
**Young 不等式**：

> 考虑指数函数 $f(x) = e^x$，由 $f''(x) = e^x > 0$ 可知 $f$ 为（严格）凸函数. 于是，当 $a,b > 0$, $p,q$ 满足条件 $p > 1$, $1/p + 1/q = 1$ 时，有  
> $$
> ab = e^{\frac{1}{p}\ln a^p + \frac{1}{q}\ln b^q} \le \frac{1}{p}e^{\ln a^p} + \frac{1}{q}e^{\ln b^q} = \frac{a^p}{p} + \frac{b^q}{q},
> $$
> 这也就是 Young 不等式.

**定理1**（Jensen 不等式）：设 $f$ 是定义在区间 $I$ 中的函数. 则 $f$ 为凸函数当且仅当对任意的 $x_i \in I$, $\lambda_i \ge 0$ ($i = 1,\cdots,n$), $\displaystyle\sum_{i=1}^{n} \lambda_i = 1$，有  
$$
f\left(\sum_{i=1}^{n} \lambda_i x_i\right) \le \sum_{i=1}^{n} \lambda_i f(x_i).
$$

> 只要证明必要性就可以了. 我们对 $n$ 用数学归纳法. $n = 1$ 是显然的，$n = 2$ 上面已经讨论了. 假设不等式对 $n = k$ 成立，则当 $n = k+1$，不妨假设 $0 < \lambda_{k+1} < 1$，此时  
> $$
> \sum_{i=1}^{k} \frac{\lambda_i}{1 - \lambda_{k+1}} = 1.
> $$
> 由归纳假设，有  
> $$
> f\left(\sum_{i=1}^{k+1} \lambda_i x_i\right) = f\left((1 - \lambda_{k+1})\sum_{i=1}^{k} \frac{\lambda_i}{1 - \lambda_{k+1}}x_i + \lambda_{k+1}x_{k+1}\right)
> $$
>
> $$
> \le (1 - \lambda_{k+1})f\left(\sum_{i=1}^{k} \frac{\lambda_i}{1 - \lambda_{k+1}}x_i\right) + \lambda_{k+1}f(x_{k+1})
> $$
>
> $$
> \le (1 - \lambda_{k+1})\sum_{i=1}^{k} \frac{\lambda_i}{1 - \lambda_{k+1}}f(x_i) + \lambda_{k+1}f(x_{k+1})
> $$
>
> $$
> = \sum_{i=1}^{k+1} \lambda_i f(x_i).
> $$
>
> 这说明不等式对 $n = k+1$ 也成立，从而定理得证.

**算术–几何平均值不等式**：

> 考虑函数 $f(x) = -\ln x$ ($x > 0$). 由 $f''(x) = x^{-2} > 0$ 可知 $f$ 为（严格）凸函数. 根据 Jensen 不等式，当 $a_i > 0$ 时  
> $$
> \frac{1}{n}(\ln a_1 + \ln a_2 + \cdots + \ln a_n) \le \ln \frac{a_1 + a_2 + \cdots + a_n}{n},
> $$
> 即  
> $$
> (a_1a_2\cdots a_n)^{\frac{1}{n}} \le \frac{1}{n}(a_1 + a_2 + \cdots + a_n),\quad \forall\ a_i > 0\ (1 \le i \le n).
> $$
> 这个不等式就是经典的算术–几何平均值不等式. 

下面我们研究一般凸函数的基本性质，先看连续性质.

**命题2**（连续性质）：设 $f$ 为区间 $I$ 中的凸函数，如果 $[a,b]$ 为 $I$ 中不含 $I$ 的端点的闭区间，则 $f$ 为 $[a,b]$ 上的 Lipschitz 函数. 特别地，凸函数在区间内部总是连续的. 

> 由已知条件，可取 $a', b' \in I$，使得 $a' < a$, $b < b'$. 任取 $x < y \in [a,b]$，因为 $f$ 为凸函数，故有下列不等式  
> $$
> \frac{f(a') - f(a)}{a' - a} \le \frac{f(a') - f(x)}{a' - x} \le \frac{f(y) - f(x)}{y - x} \le \frac{f(b') - f(y)}{b' - y} \le \frac{f(b') - f(b)}{b' - b}.
> $$
> 令  
> $$
> M = \max\left\{\left|\frac{f(a') - f(a)}{a' - a}\right|, \left|\frac{f(b') - f(b)}{b' - b}\right|\right\},
> $$
> 则不等式意味着  
> $$
> |f(x) - f(y)| \le M|x - y|,\quad \forall\ x,y \in [a,b].
> $$
> 这说明 $f$ 在 $[a,b]$ 上为 Lipschitz 函数

凸函数在区间的端点处可能不连续，例如函数  
$$
f(0) = 1,\quad f(x) = 0,\ x > 0
$$
是 $[0,+\infty)$ 中的凸函数，但它在 $x = 0$ 处不连续. 

对于连续的函数，我们可以用下面较简单的方法去判别它是否是凸函数

**命题3**：设 $f$ 为区间 $I$ 中的连续函数，则 $f$ 为凸函数当且仅当对任意 $x_1 < x_2 \in I$，有  
$$
f\left(\frac{x_1 + x_2}{2}\right) \le \frac{1}{2}[f(x_1) + f(x_2)].
$$
**推论4**：设 $f$ 为区间 $I$ 中的凸函数，则 $f$ 在 $I$ 的内部无极大值点，除非它在内部是常值函数

> 凸函数在 $I$ 的内部是连续的，且满足平均值不等式，因此结论成立

**命题5**（导数性质）：设 $f$ 为区间 $I$ 中的凸函数，$x$ 为 $I$ 的内点，则 $f$ 在 $x$ 处的左导数和右导数均存在，且 $f'_-(x) \le f'_+(x)$.

> 任取 $x_1,x_2 \in I$，使得 $x_1 < x < x_2$，因为 $f$ 为凸函数，我们有不等式  
> $$
> \frac{f(x) - f(x_1)}{x - x_1} \le \frac{f(x_2) - f(x)}{x_2 - x},
> $$
> $f$ 为凸函数也意味着 $\dfrac{f(x) - f(x_1)}{x - x_1}$ 是关于 $x_1$ 的单调递增函数，上式则表明这个单调递增函数有上界，从而极限  
> $$
> \lim_{x_1 \to x^-} \frac{f(x) - f(x_1)}{x - x_1} = f'_-(x)
> $$
> 存在，且  
> $$
> f'_-(x) \le \frac{f(x_2) - f(x)}{x_2 - x}.
> $$
> 同理，当 $x_2 \to x_+$ 时，$\dfrac{f(x_2) - f(x)}{x_2 - x}$ 单调递减且有下界，从而极限存在且满足  
> $$
> f'_-(x) \le \lim_{x_2 \to x^+} \frac{f(x_2) - f(x)}{x_2 - x} = f'_+(x),
> $$
> 这就证明了命题.

(1) 凸函数不一定可微，例如函数 $f(x) = |x|$ 是凸函数，但它在 $x = 0$ 处不可微；  

(2) 凸函数的不可微点只有至多可数个.

可微函数也可以用下面的方法去判别它是否是凸函数.

**命题6**：设 $f$ 是区间 $I$ 中的可微函数，则  

(1) $f$ 为凸函数当且仅当 $f'$ 为单调递增函数；  

(2) $f$ 为凸函数当且仅当对任意 $x_0 \in I$, $x \in I$，有  
$$
f(x) \ge f'(x_0)(x - x_0) + f(x_0).
$$
我们可以重新讨论二阶可导函数的凸性

**命题7**：如果 $f$ 在 $I$ 中二阶可导，则 $f$ 为凸函数当且仅当 $f'' \ge 0$.

> 如果 $f$ 二阶可导，则 $f$ 是凸函数当且仅当 $f'$ 为单调递增函数，而可微函数 $f'$ 是单调递增函数当且仅当其导数 $f''$ 非负.

### · 函数作图

应用以上几节的知识，我们可以在平面上大致作出函数的图像，需要注意的要点就是：求函数 $f$ 的驻点和极值点，判断 $f$ 的单调区间和凸凹区间，以及求出 $f$ 的其它特殊值，如 $f$ 和坐标轴的交点，$f$ 在间断点或无穷远处的极限. 

我们再给出两个概念：一是函数的拐点. 如果函数 $f$ 在 $x_0$ 的一侧是凸的，而在另一侧是凹的，则称 $x_0$ 为 $f$ 的拐点；另一个概念是渐近线. 如果  
$$
\lim_{x \to x_0^+} f(x) = \infty\quad \text{or}\quad \lim_{x \to x_0^-} f(x) = \infty
$$
则称 $x = x_0$ 为 $f$ 的垂直渐近线；如果  
$$
\lim_{x \to +\infty} [f(x) - (ax + b)] = 0\quad \text{or}\quad \lim_{x \to -\infty} [f(x) - (ax + b)] = 0,
$$
则称 $y = ax + b$ 为 $f$ 在无穷远处的渐近线

## Part 5 L'Hopital 法则

在计算函数极限的时候，经常遇到这样的情形：设 $f$, $g$ 为函数，求极限  
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)}.
$$
下列两种情况比较常见：  

(1) $\left(\dfrac{0}{0}\right)$ 型：$x \to x_0$ 时，$f(x) \to 0$, $g(x) \to 0$；  

(2) $\left(\dfrac{\infty}{\infty}\right)$ 型：$x \to x_0$ 时，$f(x) \to \infty$, $g(x) \to \infty$.   

还有一些情形也可以转化为这两种情形之一. 利用求导我们往往可以方便地计算这样的极限，这是微分学对于求极限的一个应用. 

**定理1**（L'Hôpital 法则）：设 $f$, $g$ 在 $(a,b)$ 中可导，且 $g'(x) \ne 0$, $\forall\ x \in (a,b)$. 又设
$$
\lim_{x \to a^+} f(x) = 0 = \lim_{x \to a^+} g(x).
$$
如果极限  
$$
\lim_{x \to a^+} \frac{f'(x)}{g'(x)}
$$
存在（或为 $\infty$），则  
$$
\lim_{x \to a^+} \frac{f(x)}{g(x)} = \lim_{x \to a^+} \frac{f'(x)}{g'(x)}.
$$

> 补充定义 $f(a) = g(a) = 0$，则 $f$ 在 $[a,b)$ 中连续. 由 Cauchy 中值定理，$\forall\ x \in (a,b)$，存在 $\xi \in (a,x)$，使得  
> $$
> \frac{f(x)}{g(x)} = \frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(\xi)}{g'(\xi)}.
> $$
> 当 $x \to a^+$ 时，$\xi \to a^+$，从而  
> $$
> \frac{f'(\xi)}{g'(\xi)} \to \lim_{x \to a^+} \frac{f'(x)}{g'(x)},
> $$
> 因此  
> $$
> \lim_{x \to a^+} \frac{f(x)}{g(x)} = \lim_{x \to a^+} \frac{f'(x)}{g'(x)}.
> $$
>
> > (1) 如果仍有 $f'_+(a) = g'_+(a) = 0$，则可利用二次导数继续求极限：  
> > $$
> > \lim_{x \to a^+} \frac{f(x)}{g(x)} = \lim_{x \to a^+} \frac{f'(x)}{g'(x)} = \lim_{x \to a^+} \frac{f''(x)}{g''(x)},
> > $$
> > 高阶导数的情形类似.   
> >
> > (2) 区间 $(a,b)$ 换成 $(-\infty,b)$ 或 $(a,\infty)$ 时，有类似结论：  
> > $$
> > \lim_{x \to -\infty} \frac{f(x)}{g(x)} = \lim_{x \to -\infty} \frac{f'(x)}{g'(x)},\quad \lim_{x \to +\infty} \frac{f(x)}{g(x)} = \lim_{x \to +\infty} \frac{f'(x)}{g'(x)}.
> > $$
> > 这可由变量代换 $x = \dfrac{1}{t}$ 得出.   
> >
> > (3) 需要注意的是，等式成立需要其右端极限存在（或为无穷），如果极限不存在，就未必成立了，读者可在 $x = 0$ 处验证 $f(x) = x^2 \sin \dfrac{1}{x}$, $g(x) = x$ 就是不成立的例子. 

**定理2**（L'Hôpital 法则）:设 $f$, $g$ 在 $(a,b)$ 中可导，且 $g'(x) \ne 0$, $\forall\ x \in (a,b)$. 又设  
$$
\lim_{x \to a^+} g(x) = \infty.
$$
如果极限  
$$
\lim_{x \to a^+} \frac{f'(x)}{g'(x)} = l
$$
存在（或为 $\infty$），则  
$$
\lim_{x \to a^+} \frac{f(x)}{g(x)} = \lim_{x \to a^+} \frac{f'(x)}{g'(x)} = l.
$$

> 我们对 $l$ 有限的情形加以证明，$l = \infty$ 的情形可类似证明. 由已知条件，任给 $\varepsilon > 0$，存在 $\eta > 0$，使得当 $x \in (a,a+\eta)$ 时  
> $$
> l - \frac{\varepsilon}{2} < \frac{f'(x)}{g'(x)} < l + \frac{\varepsilon}{2}.
> $$
> 取 $c = a + \eta$，当 $x \in (a,c)$ 时，由 Cauchy 微分中值定理，存在 $\xi \in (x,c)$，使得  
> $$
> \frac{f(x) - f(c)}{g(x) - g(c)} = \frac{f'(\xi)}{g'(\xi)}.
> $$
> 上式可以改写为  
> $$
> f(x) = f(c) + \frac{f'(\xi)}{g'(\xi)}(g(x) - g(c)),
> $$
> 即  
> $$
> \frac{f(x)}{g(x)} = \frac{f'(\xi)}{g'(\xi)} + \frac{f(c)}{g(x)} - \frac{f'(\xi)}{g'(\xi)} \cdot \frac{g(c)}{g(x)}.
> $$
> 不难得知，存在正数 $\delta < \eta$，使得当 $x \in (a,a+\delta)$ 时  
> $$
> \left|\frac{f(x)}{g(x)} - l\right| < \varepsilon,
> $$
> 这就证明了所需结论.
