---
url: /integral/integral-3/index.md
---
## Part 1 数列极限

按顺序排列的一列数

$$
a\_1, a\_2, \cdots, a\_n, \cdots
$$
称为一个数列，记为  ${a\_n}$ .  $a\_n$  称为该数列的第  $n$  项，有时也称为一般项或通项. 作为集合，如果

$$
{a\_n \mid n = 1, 2, \cdots}
$$
是有界的，则称数列  ${a\_n}$  是有界的，此时存在  $M$ ，使得

$$
|a\_n| \leqslant M, \quad \forall n \geqslant 1.
$$
通过考察当  $n$  变大时数列一般项  $a\_n$  的变化趋势，我们就得到了数列极限的概念.

### · 定义

**定义1**：数列极限

> 设  ${a\_n}$  为数列， $A \in \mathbb{R}$ . 如果任给  $\varepsilon > 0$ ，都存在正整数  $N = N(\varepsilon)$ ，使得当  $n > N$  时，有
> $$
> |a\_n - A| < \varepsilon,
> $$
> 则称  ${a\_n}$  以  $A$  为极限，或称  ${a\_n}$  收敛于  $A$ ，记为
>
> $$
> \lim\_{n \to \infty} a\_n = A \text{ or } a\_n \to A (n \to \infty).
> $$
>
> > 从直观上看，如果将数列看成实数轴上的一列点，则极限就是这样一个点，当  $n$  越来越大时， $a\_n$  越来越靠近这个点.
> >
> > 为了用准确的数学语言来代替“越来越靠近”和“当  $n$  越来越大”这样的描述性语言，我们要用到定义中的  $\varepsilon$  和  $N$ ，这里的  $N$  一般是依赖于给定的  $\varepsilon$  的. 这种定义极限的方法也称为  $\varepsilon - N$  语言法.
> >
> > 按照定义，我们也可以这样来描述极限： $\displaystyle\lim\_{n \to \infty} a\_n = A$  当且仅当对于任意  $\varepsilon > 0$ ，数列  ${a\_n}$  只有至多有限项位于区间  $(A - \varepsilon, A + \varepsilon)$  之外.
> >
> > 因此，如果存在  $\varepsilon\_0 > 0$ ，使得  ${a\_n}$  中有无限项位于区间  $(A - \varepsilon\_0, A + \varepsilon\_0)$  之外，则数列  ${a\_n}$  不以  $A$  为极限（这时该数列的极限可能不存在，如果存在则极限也不等于  $A$ ）.
> >
> > 当然，我们也可以用  $\varepsilon - N$  语言给出数列  ${a\_n}$  不以  $A$  为极限的定义：如果存在  $\varepsilon\_0 > 0$ ，使得任给正数  $N$ ，均存在  $n\_0 > N$  满足不等式  $|a\_{n\_0} - A| \geqslant \varepsilon\_0$ ，则  ${a\_n}$  不以  $A$  为极限.

**定义理解**：

> (1). $\varepsilon$ 的任意性：
>
> > 定义中 $\forall\varepsilon > 0$ ，指的是一切正数. 限制 $0 < \varepsilon < 1$ ，但是，不能限制 $\varepsilon$ 大于某个正数.
>
> (2). $N$ 的相应性：
>
> > 先有 $\varepsilon$ ，再确定 $N$ ，使 $n > N$ 时，都有 $|a\_{n}-a|<\varepsilon$ 成立. 找到一个 $N$ ，就能找到无数个 $N$ ，$n > N$ 可以改成 $n \geq N$ . $\varepsilon$ 可以换成 $\varepsilon^{2}$ ，$\sqrt{\varepsilon}$ ，不能换成 $\varepsilon + 1$ ，$|a\_{n}-a|<\varepsilon$ 可以改成 $|a\_{n}-a|\leq\varepsilon$ .
>
> (3). 几何意义：
>
> > $\displaystyle\lim\_{n \to \infty}a\_{n}=a$ ，即 $\forall\varepsilon > 0$ ，$\exists N$ ，当 $n > N$ 时，都有 $|a\_{n}-a|<\varepsilon$ .
> >
> > $$
> > \begin{align\*}
> > |a\_{n}-a|<\varepsilon&\Leftrightarrow -\varepsilon < a\_{n}-a < \varepsilon\\\\
> > &\Leftrightarrow a - \varepsilon < a\_{n}< a + \varepsilon\\\\
> > &\Leftrightarrow a\_{n}\in(a - \varepsilon,a + \varepsilon)\triangleq U(a,\varepsilon)
> > \end{align\*}
> > $$
> >
> > 对于 $a$ 的任何 $\varepsilon$ 邻域 $U(a,\varepsilon)$ ，在外部仅有数列的有限项，其余项统统在邻域内.

**命题1**. 如果数列  ${a\_n}$  有极限，则其极限是惟一的.

> /proof/
>
> 如果数列  ${a\_n}$  既以  $A$  为极限，又以  $B$  为极限，则任给  $\varepsilon > 0$ ，存在  $N\_1, N\_2$ ，使得当  $n > N\_1$  时
>
> $$
> |a\_n - A| < \varepsilon,
> $$
> 当  $n > N\_2$  时
>
> $$
> |a\_n - B| < \varepsilon.
> $$
> 因此，当  $n > \max{N\_1, N\_2}$  时，有
>
> $$
> 2\varepsilon > |a\_n - A| + |a\_n - B| \geqslant |A - B|.
> $$
> 如果  $A \neq B$ ，则对于  $\varepsilon = \dfrac{|A - B|}{2}$ ，上式不可能成立，因此只能  $A = B$

如果数列没有极限，则称它是发散的. 讨论数列的收敛与发散的问题简称为数列的敛散性问题. 从定义不难看出，改变数列的有限项的值不改变其敛散性，如果收敛的话也不改变极限的值.

下面给出几个例题来论述如何证明极限存在性：

/example/ 设 $|q| < 1$，则
$$
\lim\_{n \to \infty} q^n = 0
$$

> /proof/
>
> $q = 0$ 时结论显然成立. 设 $0 < |q| < 1$，任给定 $\varepsilon > 0$，取正整数 $N > \log\_{|q|} \varepsilon$，则当 $n > N$ 时，
> $$
> |q^n - 0| = |q|^n < |q|^N < \varepsilon,
> $$
> 因此 $\displaystyle\lim\_{n \to \infty} q^n = 0$.
>
> 上面的这个证明用到了对数函数的性质. 下面我们还可以用更初等的不等式估计的办法另给一个证明如下：当 $0 < |q| < 1$ 时，$\dfrac{1}{|q|} > 1$. 记 $\alpha = \dfrac{1}{|q|} - 1 > 0$. 任给 $\varepsilon > 0$，取正整数 $N > \dfrac{1}{\alpha \varepsilon}$，当 $n > N$ 时，
>
> $$
> |q^n - 0| = |q|^n = \frac{1}{(1 + \alpha)^n} < \frac{1}{n\alpha} < \varepsilon,
> $$
> 其中，我们用到不等式
>
> $$
> (1 + \alpha)^n = 1 + n\alpha + \frac{1}{2}n(n - 1)\alpha^2 + \cdots + \alpha^n > n\alpha.
> $$
> 这说明 $\displaystyle\lim\_{n \to \infty} q^n = 0$ .

/example/ 设 $\alpha > 0$，则 $\displaystyle\lim\_{n \to \infty} \dfrac{1}{n^\alpha} = 0$.

> /proof/
>
> 任给定 $\varepsilon > 0$，取 $N > \dfrac{1}{\varepsilon^\alpha}$，当 $n > N$ 时
>
> $$
> \left|\frac{1}{n^\alpha} - 0\right| = \frac{1}{n^\alpha} < \frac{1}{N^\alpha} < \varepsilon,
> $$
> 由定义
> $$
> \lim\_{n \to \infty} \frac{1}{n^\alpha} = 0
> $$

/example/. 设 $q > 0, \ q \neq 1$. 则
$$
\lim\_{n \to \infty} \frac{1}{\log\_q n} = 0
$$

> /proof/
>
> 不妨设 $q > 1$. 任给定 $\varepsilon > 0$，取 $N > q^{\dfrac{1}{\varepsilon}}$，则当 $n > N$ 时
>
> $$
> \left|\frac{1}{\log\_q n} - 0\right| = \frac{1}{\log\_q n} < \frac{1}{\log\_q N} < \varepsilon,
> $$

因此 $\displaystyle\lim\_{n \to \infty} \dfrac{1}{\log\_q n} = 0$.

/example/ 设 $C$ 为常数，如果 $\displaystyle\lim\_{n \to \infty} a\_n = 0$，则 $\displaystyle\lim\_{n \to \infty} C a\_n = 0$.

> /proof/
>
> 任给定 $\varepsilon > 0$，记 $\varepsilon\_0 = \dfrac{\varepsilon}{|C| + 1}$. 因为 $\displaystyle\lim\_{n \to \infty} a\_n = 0$，故存在 $N$，当 $n > N$ 时
>
> $$
> |a\_n| < \varepsilon\_0,
> $$
> 从而当 $n > N$ 时，有
>
> $$
> |Ca\_n| = |C||a\_n| \leqslant |C|\varepsilon\_0 < \varepsilon,
> $$
> 因此 $\displaystyle\lim\_{n \to \infty} Ca\_n = 0$.

### · 夹逼定理

/Theorem/ 设  ${a\_n} , {b\_n}, {c\_n}$  均为数列，且

$$
a\_n \leqslant b\_n \leqslant c\_n, \quad \forall n \geqslant N\_0,
$$
其中  $N\_0$  为一正整数. 如果

$$
\lim\_{n \to \infty} a\_n = A = \lim\_{n \to \infty} c\_n,
$$
则  $\displaystyle\lim\_{n \to \infty} b\_n = A$ .

> /proof/
>
> 任给  $\varepsilon > 0$ ，因为  ${a\_n}$  和  ${c\_n}$  均收敛到  $A$ ，故存在  $N\_1, N\_2$ ，当  $n > N\_1$  时
> $$
> A - \varepsilon < a\_n < A + \varepsilon,
> $$
> 当  $n > N\_2$  时
>
> $$
> A - \varepsilon < c\_n < A + \varepsilon.
> $$
> 取  $N = \max{N\_0, N\_1, N\_2}$ ，则当  $n > N$  时，由于  $a\_n \leqslant b\_n \leqslant c\_n$ ，我们就有
>
> $$
> A - \varepsilon < a\_n \leqslant b\_n \leqslant c\_n < A + \varepsilon,
> $$
> 这说明  $\displaystyle\lim\_{n \to \infty} b\_n = A$ .
>
> > 如果  $|a\_n| \leqslant b\_n$ ，则  $\displaystyle\lim\_{n \to \infty} b\_n = 0$  时  $\displaystyle\lim\_{n \to \infty} a\_n = 0$ . 这只要注意到夹逼不等式  $-b\_n \leqslant a\_n \leqslant b\_n$  即可.

/example/ 考虑无限循环小数  $A = 0.999999$ ，问：$A$  是否小于 1？

> 要比较大小，必须先说清楚  $A$  是一个什么样的实数. 作为小数， $A$  有无限位非零，一个合理的看法就是， $A$  应被视为一列有限小数  ${a\_n}$  的极限，其中
>
> $$
> a\_n = 0.99\cdots 9
> $$
> 由于
> $$
> |a\_n - 1| = 10^{-n},
> $$
> 根据夹逼进原理， ${a\_n}$  收敛到 1. 因为极限具有惟一性，这说明  $A = 1$ .
>
> 直观上看，似乎  $A$  总应该比 1 小才对.
>
> 然而，这种直观上得来的经验只对有限小数有效，对于无限的情形往往要用极限来处理才行.

/example/ 设  $0 < \alpha < 1$ ，证明  $\displaystyle\lim\_{n \to \infty} \[(n + 1)^\alpha - n^\alpha] = 0$ .

> 当  $n \geq 1$  时，有
>
> $$
> 0 < (n + 1)^\alpha - n^\alpha = n^\alpha \[(1 + \frac{1}{n})^\alpha - 1] \leqslant n^\alpha \[(1 + \frac{1}{n})^\alpha - 1] = \frac{1}{n^{1 - \alpha}}.
> $$
> 根据前面的例子和夹进原理即知
> $$
> \lim\_{n \to \infty} \[(n + 1)^\alpha - n^\alpha] = 0
> $$

/example/. 设  $\alpha > 0, a > 1$ ，则  $\displaystyle\lim\_{n \to \infty} \dfrac{n^\alpha}{a^n} = 0$ .

> /proof/
>
> 记  $a^{\frac{1}{\alpha}} = 1 + \beta, \beta > 0$ . 由于  $n > 1$  时，有
>
> $$
> (1 + \beta)^n = 1 + n\beta + \frac{1}{2}n(n - 1)\beta^2 + \cdots + \beta^n > \frac{1}{2}n(n - 1)\beta^2,
> $$
> 故
>
> $$
> 0 < \frac{n^\alpha}{a^n} = \[(1 + \beta)^n]^\alpha < \[(\frac{2}{(n - 1)\beta^2}]^\alpha,
> $$
> 由夹进原理和前面的例子即知
> $$
> \lim\_{n \to \infty} \frac{n^\alpha}{a^n} = 0
> $$

/example/. 设  $a > 0$ ，则
$$
\lim\_{n \to \infty} \frac{a^n}{n!} = 0
$$

> /proof/
>
> 取正整数  $N\_0 > |a|$ ，则当  $n > N\_0$  时，有
>
> $$
> \left|\frac{a^n}{n!}\right| = \frac{|a|^{N\_0}}{N\_0!} \frac{|a|}{N\_0 + 1} \cdots \frac{|a|}{n} \leqslant \frac{|a|^{N\_0}}{N\_0!} \frac{|a|}{n},
> $$
> 由夹进原理即知
> $$
> \lim\_{n \to \infty} \frac{a^n}{n!} = 0
> $$

/example/ 任何实数都是某个有理数列的极限.

> 设  $A$  为实数. 如果  $A$  为有理数，则令  $a\_n = A (n \geqslant 1)$  即可. 如果  $A$  为无理数，令
>
> $$
> a\_n = \frac{\[nA]}{n}, \quad \forall n \geqslant 1.
> $$
> 其中  $\[x]$  表示不超过  $x$  的最大整数，因此  $a\_n$  都是有理数. 因为  $A$  不是有理数，故
>
> $$
> nA - 1 < \[nA] < nA, \quad \forall n \geqslant 1.
> $$
> 即
>
> $$
> A - \frac{1}{n} < a\_n = \frac{\[nA]}{n} < A, \quad \forall n \geqslant 1.
> $$
> 由夹进原理知
> $$
> \lim\_{n \to \infty} a\_n = A
> $$

### · 基本性质

为了更好地判断数列极限的存在性和计算数列极限, 我们来研究数列极限的基本性质

**命题3** (有界性)：设数列  ${a\_n}$  收敛，则  ${a\_n}$  有界.

> /proof/
>
> 设  ${a\_n}$  收敛到  $A$ . 取  $\varepsilon = 1$ ，则由极限定义，存在  $N$ ，当  $n > N$  时
> $$
> |a\_n - A| \leqslant 1,
> $$
> 即
>
> $$
> |a\_n| \leqslant |A| + 1, \quad \forall n > N.
> $$
> 令
>
> $$
> M = \max{ |a\_i| (1 \leqslant i \leqslant N), |A| + 1},
> $$
> 则
> $$
> |a\_n| \leqslant M, \forall n \geqslant 1
> $$
>
> > 由此命题立知，无界数列必定发散. 对于无界数列，我们有时也可以考察其变化趋势. 为此，设  ${a\_n}$  为数列，如果任给  $A > 0$ ，均存在  $N$  使得当  $n > N$  时， $a\_n > A$ ，则称  ${a\_n}$  发散到  $+\infty$ ，或称  ${a\_n}$  的极限为  $+\infty$ ，记为
> >
> > $$
> > \lim\_{n \to \infty} a\_n = +\infty, \text{ or } a\_n \to +\infty (n \to \infty).
> > $$
> > 类似地，如果任给  $A < 0$ ，均存在  $N$  使得当  $n > N$  时， $a\_n < A$ ，则称  ${a\_n}$  发散到  $-\infty$ ，或称  ${a\_n}$ 的极限为  $-\infty$ ，记为
> >
> > $$
> > \lim\_{n \to \infty} a\_n = -\infty, \text{ or } a\_n \to -\infty (n \to \infty).
> > $$
> > 如果  ${a\_n}$  发散到  $+\infty$ ，则称  ${a\_n}$ 发散到  $\infty$ ，记为
> >
> > $$
> > \lim\_{n \to \infty} a\_n = \infty, \text{ or } a\_n \to \infty (n \to \infty).
> > $$

**命题4**：(绝对值性质) 设数列  ${a\_n}$  收敛到  $A$ ，则  ${|a\_n|}$  收敛到  $|A|$ .

> /proof/
>
> 设  $\displaystyle\lim\_{n \to \infty} a\_n = A$ ，则任给  $\varepsilon > 0$ ，存在  $N$ ，当  $n > N$  时
> $$
> |a\_n - A| < \varepsilon,
> $$
> 从而
>
> $$
> ||a\_n| - |A|| \leq |a\_n - A| < \varepsilon, \quad \forall n > N.
> $$
> 即  $\displaystyle\lim\_{n \to \infty} |a\_n| = |A|$ .

**推论5**. 数列  ${a\_n}$  收敛到 0 当且仅当  $|a\_n|$  收敛到 0；数列  ${a\_n}$  收敛到  $A$  当且仅当  $|a\_n - A|$  收敛到 0.

**命题6**：(保序性质)

设数列  ${a\_n}$  收敛到  $A$ ，${b\_n}$  收敛到  $B$ ，则有

(1) 如果存在  $N\_0$ ，当  $n > N\_0$  时  $a\_n \geqslant b\_n$ ，则  $A \geqslant B$ ;

(2) 反之，如果  $A > B$ ，则存在  $N$ ，使得当  $n > N$  时  $a\_n > b\_n$ .

> /proof/
>
> (1) 任给  $\varepsilon > 0$ ，存在  $N\_1, N\_2$ ，使得
>
> $$
> |a\_n - A| < \varepsilon, \forall n > N\_1; \quad |b\_n - B| < \varepsilon, \forall n > N\_2.
> $$
> 令  $N = \max{N\_0, N\_1, N\_2}$ ，则  $n > N$  时，有
>
> $$
> \begin{aligned}
> A - B &= (A - a\_n) + (a\_n - b\_n) + (b\_n - B)\\\\
> &\geqslant (A - a\_n) + (b\_n - B) \\\\
> &\geqslant (A - a\_n) + (b\_n - B) \\\\
> &\geqslant -2\varepsilon,
> \end{aligned}
> $$
> 因为  $\varepsilon$  是任意取的，上式表明  $A - B \geqslant 0$ ，即  $A \geqslant B$ .
>
> (2) 如果  $A > B$ ，取  $\varepsilon = \dfrac{A - B}{2} > 0$ ，则存在  $N\_1, N\_2$ ，使得
>
> $$
> |a\_n - A| < \varepsilon, \forall n > N\_1; \quad |b\_n - B| < \varepsilon, \forall n > N\_2.
> $$
> 令  $N = \max{N\_1, N\_2}$ ，则  $n > N$  时，有
>
> $$
> a\_n - b\_n = (a\_n - A) + (A - B) + (B - b\_n) > -\varepsilon + (A - B) - \varepsilon = 0,
> $$
> 即  $a\_n > b\_n, \forall n > N$

**推论7**. 设  $\displaystyle\lim\_{n \to \infty} a\_n = A$ ，如果  $A \neq 0$ ，则存在  $N$ ，使得当  $n > N$  时，有

$$
\frac{1}{2}|A| < |a\_n| < \frac{3}{2}|A|.
$$

> /proof/
>
> 由极限的绝对值性质，有
>
> $$
> \frac{1}{2}|A| < \lim\_{n \to \infty} |a\_n| = |A| < \frac{3}{2}|A|,
> $$
>
> 再由极限的保序性质即得欲证结论.

**命题8** (四则运算)：设数列  ${a\_n}$  收敛到  $A$ ， ${b\_n}$  收敛到  $B$ ，则有

(1).  ${ \alpha a\_n + \beta b\_n }$  收敛到  $\alpha A + \beta B$ ，其中  $\alpha, \beta$  为常数；

(2).  ${ a\_n b\_n }$  收敛到  $AB$ ；

(3).  当  $B \neq 0$  时， ${ a\_n / b\_n }$  收敛到  $A / B$ .

> /proof/
>
> (1). 任给  $\varepsilon > 0$ ，存在  $N\_1, N\_2$ ，使得
> $$
> |a\_n - A| < \frac{\varepsilon}{2|\alpha| + 1}, \quad \forall n > N\_1; \quad |b\_n - B| < \frac{\varepsilon}{2|\beta| + 1}, \quad \forall n > N\_2.
> $$
> 令  $N = \max{N\_1, N\_2}$ ，则  $n > N$  时，有
>
> $$
> |(\alpha a\_n + \beta b\_n) - (\alpha A + \beta B)| \leq |\alpha||a\_n - A| + |\beta||b\_n - B|
> $$
>
> $$
> \leq |\alpha| \frac{\varepsilon}{2|\alpha| + 1} + |\beta| \frac{\varepsilon}{2|\beta| + 1}
> $$
>
> $$
> < \frac{1}{2} \varepsilon + \frac{1}{2} \varepsilon = \varepsilon.
> $$
>
> 这说明  $\displaystyle\lim\_{n \to \infty} (\alpha a\_n + \beta b\_n) = \alpha A + \beta B$ .
>
> (2). 利用极限的有界性质，存在  $M$ ，使得
> $$
> |b\_n| \leq M, \quad \forall n \geq 1.
> $$
> 因此有
>
> $$
> 0 \leq |a\_n b\_n - AB| = |(a\_n - A)b\_n + A(b\_n - B)| \leq M|a\_n - A| + |A||b\_n - B|,
> $$
> 利用 (1) 和夹逼原理即知  $\displaystyle\lim\_{n \to \infty} a\_n b\_n = AB$ .
>
> (3). 根据 (2)，我们只要证明  $\displaystyle\lim\_{n \to \infty} \dfrac{1}{b\_n} = \dfrac{1}{B}$  即可. 根据极限保序性质的推论，存在  $N$ ，当  $n > N$  时， $|b\_n| > \dfrac{|B|}{2}$ . 因此
> $$
> 0 \leq \left|\frac{1}{b\_n} - \frac{1}{B}\right| = \frac{|b\_n - B|}{|b\_n||B|} \leq \frac{2}{|B|^2}|b\_n - B|, \quad \forall n > N.
> $$
> 由夹逼原理即知  $\displaystyle\lim\_{n \to \infty} \dfrac{1}{b\_n} = \dfrac{1}{B}$ .

下面我们引入数列的子列的概念，并研究数列的极限和其子列的极限之间的关系. 设

$$
a\_1, a\_2, \cdots, a\_n, \cdots
$$

是数列，如果

$$
1 \leq n\_1 < n\_2 < \cdots < n\_k < \cdots
$$

是一列严格递增的正整数，则称数列

$$
a\_{n\_1}, a\_{n\_2}, \cdots, a\_{n\_k}, \cdots
$$

为原数列  ${a\_n}$  的子列，记为  ${a\_{n\_k}}$ . 两个特殊的子列  ${a\_{2k}}$  和  ${a\_{2k-1}}$  分别称为偶子列与奇子列.

**命题9**.

> 1. 设  ${a\_n}$  收敛到  $A$ ，则它的任何子列  ${a\_{n\_k}}$  也收敛到  $A$ .
> 2. 如果  ${a\_n}$  的偶子列与奇子列均收敛到  $A$ ，则  ${a\_n}$  也收敛到  $A$ .
