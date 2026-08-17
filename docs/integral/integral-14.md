---
title: Lesson 14 微分学 IV
permalink: /integral/integral-14/
createTime: 2026/08/17 14:16:56
---

## Part 3 Taylor 展开

### · Taylor 公式

这一节我们研究用多项式逼近高阶可微函数的问题. 研究一元函数 $f$ 的局部性态时，我们知道：

> (1) 如果 $f(x)$ 在 $x_0$ 处连续，则  
> $$
> f(x) - f(x_0) = o(1)\ (x \to x_0),
> $$
> 即，在 $x_0$ 附近 $f$ 可用常值函数 $f(x_0)$ 逼近. 
>
> (2) 如果 $f(x)$ 在 $x_0$ 处可微，则  
> $$
> f(x) - [f(x_0) + f'(x_0)(x - x_0)] = o(x - x_0)\ (x \to x_0),
> $$
> 即，在 $x_0$ 附近 $f$ 可用线性函数 $L$ 逼近，其中  
> $$
> L(x) = f(x_0) + f'(x_0)(x - x_0).
> $$
>
> (3) 如果 $f''(x_0)$ 存在，则
> $$
> f(x) - [f(x_0) + f'(x_0)(x - x_0) + \frac{1}{2}f''(x_0)(x - x_0)^2] = o((x - x_0)^2)\ (x \to x_0),
> $$
> 即 $f$ 在 $x_0$ 附近可以用二次多项式逼近

**定理1**（带 Peano 余项的 Taylor 公式）：设 $f$ 在 $x_0$ 处 $n$ 阶可导，则
$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!} (x-a)^n + o((x - x_0)^n)\ (x \to x_0).\tag{*}
$$

> 用数学归纳法. $n = 1, 2$ 已经在前面证明. 设 $n = k$ 时 $(*)$ 成立，则 $n = k+1$ 时，由假设，$f^{(k+1)}(x_0)$ 存在，此时 $f'(x)$ 在 $x_0$ 处 $k$ 阶可导，由归纳假设，  
> $$
> f'(x) = f'(x_0) + f''(x_0)(x - x_0)   + \cdots + \frac{1}{k!}f^{(k+1)}(x_0)(x - x_0)^k + o((x - x_0)^k)\ (x \to x_0),
> $$
> 从而由 L'Hôpital 法则得
> $$
> \begin{aligned}
> &\lim_{x \to x_0} \frac{f(x) - [f(x_0) + f'(x_0)(x - x_0) + \cdots + \dfrac{f^{(k+1)}(x_0)}{(k+1)!}(x - x_0)^{k+1}]}{(x - x_0)^{k+1}}\\\\
> &= \lim_{x \to x_0} \frac{f'(x) - [f'(x_0) + f''(x_0)(x - x_0) + \cdots + \dfrac{f^{(k+1)}(x_0)}{k!}(x - x_0)^k]}{(k+1)(x - x_0)^k}
> = 0.
> \end{aligned}
> $$
> 即  
> $$
> f(x) = f(x_0) +  \cdots + \frac{1}{(k+1)!}f^{(k+1)}(x_0)(x - x_0)^{k+1} + o((x - x_0)^{k+1})\ (x \to x_0).
> $$
> 这说明 $(*)$ 对 $n = k+1$ 也成立. 由数学归纳法，$(*)$ 对任意的 $n$ 都成立

记
$$
R_n(x) = f(x) - [f(x_0) + f'(x_0)(x - x_0) + \cdots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n],
$$
称 $R_n$ 为 Taylor 展开的余项. 根据刚才的定理，如果 $f$ 在 $x_0$ 处有 $n$ 阶导数，则  
$$
R_n(x) = o((x - x_0)^n)\ (x \to x_0)\
$$

如果没有进一步的条件，想要获得余项 $R_n(x)$ 的更精确的估计较为困难. 例如，即使已知 $f(x)$ 是关于 $x$ 的 $n$ 次多项式，从刚才的定理也无法得知余项 $R_n(x)$ 是否为零. 这时，我们需要下面的结果. 

**定理2**（Taylor）：设 $f$ 在开区间 $(a,b)$ 中有直到 $n+1$ 阶导数，$x_0, x \in (a,b)$. 则存在区间 $(x,x_0)$ 或 $(x_0,x)$ 中的点 $\xi$, $\zeta$，使得 Taylor 展开的余项可表示为
$$
R_n(x) = \frac{1}{(n+1)!}f^{(n+1)}(\xi)(x - x_0)^{n+1},
$$
(Lagrange 余项)

以及  
$$
R_n(x) = \frac{1}{n!}f^{(n+1)}(\zeta)(x - \zeta)^n(x - x_0).
$$
(Cauchy 余项)

> 考虑以 $t$ 为变量的函数  
> $$
> F(t) = f(t) + \sum_{k=1}^n \frac{f^{(k)}(t)}{k!}(x - t)^k,\quad t \in (a,b).
> $$
> 对 $t$ 求导，得  
> $$
> \begin{aligned}
> F'(t) &= f'(t) + \sum_{k=1}^n \left[\frac{f^{(k+1)}(t)}{k!}(x - t)^k - \frac{f^{(k)}(t)}{(k-1)!}(x - t)^{k-1}\right]\\\\
> &= \frac{1}{n!}f^{(n+1)}(t)(x - t)^n.
> \end{aligned}
> $$
> 根据 $F$ 的构造，有  
> $$
> F(x) - F(x_0) = R_n(x).
> $$
> 由 Lagrange 微分中值定理，存在 $\zeta = x_0 + \theta(x - x_0)$ ($0 < \theta < 1$)，使得  
> $$
> R_n(x) = F'(\zeta)(x - x_0)
> = \frac{1}{n!}f^{(n+1)}(\zeta)(x - \zeta)^n(x - x_0).
> $$
> 得到含 Cauchy 余项的 Taylor 展开
>
> 取 $G(t) = -(x - t)^{n+1}$，再由 Cauchy 微分中值定理知，存在 $\xi = x_0 + \eta(x - x_0)$ ($0 < \eta < 1$)，使得  
> $$
> \frac{R_n(x)}{(x - x_0)^{n+1}} = \frac{F(x) - F(x_0)}{G(x) - G(x_0)} = \frac{F'(\xi)}{G'(\xi)} = \frac{f^{(n+1)}(\xi)}{(n+1)!},
> $$
> 即  
> $$
> R_n(x) = \frac{1}{(n+1)!}f^{(n+1)}(\xi)(x - x_0)^{n+1}.
> $$
> 得到含 Lagrange 余项的 Taylor 展开

(1) 如果 $f$ 的直到 $n$ 阶的导数在 $[a,b]$ 上都是连续的（因此 $F$ 在 $[a,b]$ 上连续），则对于 $x = a$ 或 $x = b$，即区间的端点，定理的结论仍然成立，这是由微分中值定理成立的条件所保证的.   

(2) 如果 $x_0$ 为区间端点，例如 $f$ 在 $(a,x_0]$ 上存在直到 $n+1$ 阶的导数，则 $f(x)$ 在 $x_0$ 处仍然有如上 Taylor 余项公式.   

(3) 定理的证明过程中的关键之处在于辅助函数的构造以及微分中值定理的运用. 由于辅助函数不容易想到，下面我们用另一个方法导出 Lagrange 余项.

**引理3**：设 $g(x)$ 在 $(a,b)$ 内 $n+1$ 阶可导，$x_0 \in (a,b)$. 如果  
$$
g(x_0) = g'(x_0) = \cdots = g^{(n)}(x_0) = 0,
$$
则任给 $c \in (a,b)$，存在 $\xi = x_0 + \theta(c - x_0)$ ($0 < \theta < 1$)，使得  
$$
g(c) = \frac{g^{(n+1)}(\xi)}{(n+1)!}(c - x_0)^{n+1}.
$$

> 不妨设 $c \ne x_0$. 考虑辅助函数  
> $$
> h(x) = g(x) - \frac{g(c)}{(c - x_0)^{n+1}}(x - x_0)^{n+1},\quad x \in (a,b).
> $$
> 则 $h(c) = 0$，且 $h(x_0) = h'(x_0) = \cdots = h^{(n)}(x_0) = 0$. 由 $h(c) = h(x_0) = 0$ 以及 Rolle 中值定理知，存在严格介于 $c$ 和 $x_0$ 之间的点 $\xi_1$，使得 $h'(\xi_1) = 0$. 
>
> 由 $h'(\xi_1) = h'(x_0) = 0$ 又可推出，存在严格介于 $\xi_1$ 和 $x_0$ 之间的点 $\xi_2$，使得 $h''(\xi_2) = 0$. 如此继续，最后可以找到严格介于 $c$ 和 $x_0$ 之间的点 $\xi$，使得 $h^{(n+1)}(\xi) = 0$. 即  
> $$
> g^{(n+1)}(\xi) - \frac{g(c)}{(c - x_0)^{n+1}} \cdot (n+1)! = 0,
> $$
> 上式整理以后就是结论.
>
> > 如果 $g(x)$ 在 $[a,b]$ 上还是连续的，则对 $c = a$ 或 $b$，引理的结论仍然成立. 
> >
> > 现在，如果 $f$ 在 $(a,b)$ 内 $n+1$ 次可导，$x_0 \in (a,b)$，则其 Taylor 余项 $R_n(x)$ 满足下列等式（习题）：  
> > $$
> > R_n(x_0) = R'_n(x_0) = \cdots = R_n^{(n)}(x_0) = 0,\quad R_n^{(n+1)}(x) = f^{(n+1)}(x).
> > $$
> > 对 $R_n(x)$ 运用上述引理就得到了 $R_n(x)$ 的 Lagrange 表示. 这种做法的好处就是，只要 $f$ 在 $[a,b]$ 上还是连续的，则对 $x = a,b$ 同样有余项公式. 

如果关于 $f$ 的条件更强一些，例如 $f$ 是 $n+1$ 阶连续可微的，则由微积分基本公式得  
$$
R_n(x) = F(x) - F(x_0) = \int_{x_0}^x F'(t)\,dt = \int_{x_0}^x \frac{f^{(n+1)}(t)}{n!}(x - t)^n\,dt.
$$
这是 Taylor 展开的积分余项，它是余项的一个精确积分表示. 此时，由于 $(x - t)^n$ 不变号，由积分中值定理可知，存在 $\xi \in (x_0,x)$（或 $(x,x_0)$），使得  
$$
R_n(x) = \frac{1}{n!}f^{(n+1)}(\xi) \cdot \int_{x_0}^x (x - t)^n\,dt = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}.
$$
这也就是 Lagrange 余项. 同理可得 Cauchy 余项.

考虑多项式函数 $f(x) = (1+x)^{2n+1}$，$f(x)$ 在 $x_0 = 0$ 处可展开为  
$$
(1+x)^{2n+1} = \sum_{k=0}^n C_{2n+1}^k x^k + R_n(x),
$$
其中 Taylor 展开的余项为  
$$
R_n(x) = \frac{1}{n!} \int_0^x \frac{(2n+1)!}{n!}(1+t)^n (x - t)^n\,dt,
$$
特别地，取 $x = 1$ 就得  
$$
\begin{aligned}
\int_0^1 (1 - t^2)^n\,dt &= \frac{(n!)^2}{(2n+1)!} R_n(1)\\\\
&= \frac{(n!)^2}{(2n+1)!} \left(2^{2n+1} - \sum_{k=0}^n C_{2n+1}^k\right)\\\\
&= \frac{(n!)^2}{(2n+1)!} (2^{2n+1} - 2^{2n}) = \frac{(2n)!!}{(2n+1)!!},
\end{aligned}
$$
其中  
$$
\sum_{k=0}^n C_{2n+1}^k = \frac{1}{2} \sum_{k=0}^n (C_{2n+1}^k + C_{2n+1}^{2n+1-k}) = \frac{1}{2} \sum_{k=0}^{2n+1} C_{2n+1}^k = 2^{2n}.
$$
这个积分也可以用递推的方法求出.

如果 $f$ 在 $x_0$ 附近无限次可微，则称形式和  
$$
\sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n
$$
为 $f$ 在 $x_0$ 处的 Taylor 展开或 Taylor 公式. Taylor 公式在 $x_0 = 0$ 的特殊情形也称 Maclaurin 展开公式. 如果 $\displaystyle\lim_{n \to \infty} R_n(x) = 0$，则记  
$$
f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n.
$$
此时称 $f$ 的 Taylor 展开收敛到自身.

**定理4**（Taylor 系数的惟一性）：设 $f$ 在 $x_0$ 处 $n$ 阶可导，且  
$$
f(x) = \sum_{k=0}^n a_k (x - x_0)^k + o((x - x_0)^n)\ (x \to x_0),
$$
则  
$$
a_k = \frac{1}{k!} f^{(k)}(x_0),\quad k = 0,1,\cdots,n.
$$

> 根据 Taylor 展开的 Peano 余项表示，$f(x)$ 又可写为  
> $$
> f(x) = \sum_{k=0}^n \frac{1}{k!} f^{(k)}(x_0)(x - x_0)^k + o((x - x_0)^n)\ (x \to x_0).
> $$
> 如果令  
> $$
> b_k = a_k - \frac{1}{k!} f^{(k)}(x_0),\quad k = 0,1,\cdots,n,
> $$
> 则由已知条件得  
> $$
> \sum_{k=0}^n b_k (x - x_0)^k = o((x - x_0)^n)\ (x \to x_0).
> $$
> 首先，在上式中令 $x \to x_0$ 即得 $b_0 = 0$. 其次，上式两边除以 $x - x_0$，再令 $x \to x_0$ 可得 $b_1 = 0$. 这个过程可以继续，当等式两边除以 $(x - x_0)^k$ 并令 $x \to x_0$ 就得到 $b_k = 0\ (0 \le k \le n)$，定理证毕.

**命题5**：

设 $f(x)$ 在 $x_0 = 0$ 处的 Taylor 展开为 $\displaystyle\sum_{n=0}^\infty a_n x^n$，则  

(1) $f(-x)$ 的 Taylor 展开为 $\displaystyle\sum_{n=0}^\infty (-1)^n a_n x^n$；  

(2) $f(x^k)$ 的 Taylor 展开为 $\displaystyle\sum_{n=0}^\infty a_n x^{kn}$，其中 $k$ 为正整数；  

(3) $x^k f(x)$ 的 Taylor 展开为 $\displaystyle\sum_{n=0}^\infty a_n x^{k+n}$，其中 $k$ 为正整数； 


(4) $f'(x)$ 的 Taylor 展开为 $\displaystyle\sum_{n=1}^\infty n a_n x^{n-1} = \displaystyle\sum_{n=0}^\infty (n+1)a_{n+1} x^n$；  

(5) $\displaystyle\int_0^x f(t)\,dt$ 的 Taylor 展开为 $\displaystyle\sum_{n=0}^\infty \dfrac{a_n}{n+1} x^{n+1}$；  

(6) 如果 $g(x)$ 在 $x_0 = 0$ 处的 Taylor 展开为 $\displaystyle\sum_{n=0}^\infty b_n x^n$，则 $\lambda f(x) + \mu g(x)$ 的 Taylor 展开为 $\displaystyle\sum_{n=0}^\infty (\lambda a_n + \mu b_n)x^n$，其中 $\lambda,\mu \in \mathbb{R}$. 

> 利用上述命题，再结合前面的例子，我们有  
> $$
> \frac{1}{1 - x} = 1 + x + x^2 + x^3 + \cdots + x^n + \cdots,\quad \forall\ x \in (-1,1).
> $$
> 因此  
> $$
> \frac{1}{1 + x} = 1 - x + x^2 - x^3 + x^4 - \cdots,\quad \forall\ x \in (-1,1),
> $$
>
> $$
> \frac{1}{1 - x^2} = 1 + x^2 + x^4 + x^6 + \cdots,\quad \forall\ x \in (-1,1),
> $$
>
> $$
> \frac{1}{1 + x^2} = 1 - x^2 + x^4 - x^6 + \cdots,\quad \forall\ x \in (-1,1),
> $$
>
> 以及  
> $$
> \ln(1 - x) = -\int_0^x \frac{dt}{1 - t} = -x - \frac{x^2}{2} - \frac{x^3}{3} - \cdots - \frac{x^n}{n} - \cdots,\quad (*)
> $$
> 其余项  
> $$
> R_n(x) = \ln(1 - x) + x + \frac{x^2}{2} + \frac{x^3}{3} + \cdots + \frac{x^n}{n} = -\int_0^x \frac{t^n}{1 - t}\,dt,
> $$
> 如果 $-1 \le x < 0$，则  
> $$
> |R_n(x)| \le \left|\int_0^x t^n\,dt\right| = \frac{|x|^{n+1}}{n+1} \to 0\ (n \to \infty),
> $$
> 如果 $0 \le x < 1$，则  
> $$
> |R_n(x)| \le \frac{1}{1 - x} \int_0^x t^n\,dt = \frac{x^{n+1}}{(1 - x)(n+1)} \to 0\ (n \to \infty),
> $$
> 因此 (*) 对 $x \in [-1,1)$ 均成立. 将 $x$ 换成 $-x$，则得  
> $$
> \ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \frac{x^5}{5} - \cdots,\quad \forall\ x \in (-1,1].
> $$
> 特别地，在上式中取 $x = 1$，得  
> $$
> \ln 2 = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \frac{1}{5} - \frac{1}{6} + \cdots.
> $$
> 同理，  
> $$
> \arctan x = \int_0^x \frac{dt}{1 + t^2} = x - \frac{x^3}{3} + \frac{x^5}{5} + \cdots + (-1)^{n-1} \frac{x^{2n-1}}{2n - 1} + R_n(x),
> $$
> 其中余项 $R_n(x) = (-1)^n \displaystyle\int_0^x \dfrac{t^{2n}}{1 + t^2}\,dt$. 当 $x \in [-1,1]$ 时  
> $$
> |R_n(x)| \le \int_0^{|x|} t^{2n}\,dt = \frac{|x|^{2n+1}}{2n + 1} \to 0\ (n \to \infty),
> $$
> 这说明  
> $$
> \arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots,\quad \forall\ x \in [-1,1].
> $$
> 特别地，在上式中取 $x = 1$，得  
> $$
> \frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots.\quad \text{(Leibniz-Gregory)}
> $$
> 类似地我们有如下展开式  
> $$
> e^{-x} = 1 - x + \frac{x^2}{2!} - \frac{x^3}{3!} + \frac{x^4}{4!} - \frac{x^5}{5!} + \cdots = \sum_{n=0}^\infty (-1)^n \frac{x^n}{n!},
> $$
>
> $$
> \sinh x = \frac{1}{2}(e^x - e^{-x}) = x + \frac{x^3}{3!} + \frac{x^5}{5!} + \cdots = \sum_{n=0}^\infty \frac{x^{2n+1}}{(2n+1)!},
> $$
>
> $$
> \cosh x = \frac{1}{2}(e^x + e^{-x}) = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \frac{x^6}{6!} + \cdots = \sum_{n=0}^\infty \frac{x^{2n}}{(2n)!}.
> $$
>
> 通常，有很多方法得到一个函数的 Taylor 展开，但要判断 Taylor 展开是否收敛以及是否收敛到原函数就不是很容易了.

### · 微分应用

我们来介绍 Taylor 公式以及微分学的几个应用.

(1) **函数极值的判断**.

我们知道，如果 $x_0$ 为 $f$ 在定义域内部的极值点和可导点，则 $f'(x_0) = 0$. 进一步，如果 $f''(x_0) < 0$，则 $x_0$ 为极大值点；如果 $f''(x_0) > 0$，则 $x_0$ 为极小值点. 利用 Taylor 公式，我们可以得到如下的一般结果.

**定理1**：设 $f$ 在 $x_0$ 处 $n$ 阶可导，且  
$$
f'(x_0) = f''(x_0) = \cdots = f^{(n-1)}(x_0) = 0,\quad f^{(n)}(x_0) \ne 0,
$$
则  

(1) $n$ 为偶数时，如果 $f^{(n)}(x_0) < 0$，则 $x_0$ 为极大值点；如果 $f^{(n)}(x_0) > 0$，则 $x_0$ 为极小值点；

(2) $n$ 为奇数时，$x_0$ 不是极值点. 

> 根据已知条件，$f$ 在 $x_0$ 处有 Taylor 展开：  
> $$
> \begin{aligned}
> f(x) = f(x_0) + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + o((x - x_0)^n)\\\\
> = f(x_0) + (x - x_0)^n\left[\frac{1}{n!}f^{(n)}(x_0) + o(1)\right].
> \end{aligned}
> $$
> 因此结论的证明都是显然的.

(2) **二阶可微函数的线性逼近**

下面的结果我们曾用微分中值定理得到过，现在再用 Taylor 展开看一下.

**定理2**：设 $f$ 在 $[a,b]$ 上连续，在 $(a,b)$ 中二阶可导，并且  
$$
M = \sup_{x \in (a,b)} |f''(x)| < \infty,
$$
则  
$$
|f(x) - l(x)| \le \frac{1}{8}M(b - a)^2,\quad \forall\ x \in [a,b],
$$
其中  
$$
l(x) = f(a) + \frac{f(b) - f(a)}{b - a}(x - a),\quad x \in [a,b].
$$

> 由连续性，只要对 $x \in (a,b)$ 证明即可. 在 $x$ 点作 Taylor 展开，有  
> $$
> f(a) - f(x) = f'(x)(a - x) + \frac{1}{2}f''(\xi)(a - x)^2,
> $$
>
> $$
> f(b) - f(x) = f'(x)(b - x) + \frac{1}{2}f''(\eta)(b - x)^2,
> $$
>
> 其中 $\xi \in (a,x)$，$\eta \in (x,b)$. 简单的计算表明  
> $$
> \begin{aligned}
> |(b - x)(f(a) - f(x)) - (a - x)(f(b) - f(x))|
> &= \frac{1}{2}(x - a)(b - x)|(x - a)f''(\xi) + (b - x)f''(\eta)|\\
> &\le \frac{1}{2}(x - a)(b - x)[M(x - a) + M(b - x)]\\
> &= \frac{1}{2}M(b - a)(x - a)(b - x).
> \end{aligned}
> $$
> 上式两边除以 $(b - a)$，整理以后得  
> $$
> |f(x) - l(x)| \le \frac{1}{2}M(b - x)(x - a) \le \frac{1}{8}M(b - a)^2,
> $$
> 其中 $l$ 为定理中的线性函数.
>
> 最后我们实际上得到了一个逐点的估计  
> $$
> |f(x) - l(x)| \le \frac{1}{2}M(b - x)(x - a),\quad \forall\ x \in [a,b].
> $$
> 以后我们会用这个估计给出积分的梯形公式的误差估计.

(3) **计算某些极限**

在某些情况下，Taylor 展开可以用来计算极限

/example/ 求极限  
$$
\lim_{x \to \infty} \left[x - x^2 \ln\left(1 + \frac{1}{x}\right)\right].
$$

>  当 $x \to \infty$ 时，$x^{-1} \to 0$，因此  
>  $$
>  \ln\left(1 + \frac{1}{x}\right) = \frac{1}{x} - \frac{1}{2x^2} + o\left(\frac{1}{x^2}\right)\ (x \to \infty),
>  $$
>  这说明  
>  $$
>  x - x^2 \ln\left(1 + \frac{1}{x}\right) = \frac{1}{2} + o(1) \to \frac{1}{2}\ (x \to \infty).
>  $$

(4) **近似计算**.

如果对余项有好的估计，则 Taylor 展开也可用于近似计算，这儿我们只考虑简单的例子. 

/example/ 求 $\pi$ 的近似值

> 利用恒等式  
> $$
> \arctan u + \arctan v = \arctan\left(\frac{u + v}{1 - uv}\right)
> $$
> 可以得到  
> $$
> \frac{\pi}{4} = \arctan 1 = \arctan \frac{1}{2} + \arctan \frac{1}{3}
> = 2 \arctan \frac{1}{3} + \arctan \frac{1}{7} = \cdots
> $$
> 然后利用 Taylor 展开  
> $$
> \arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots
> $$
> 就可以将 $\pi$ 很快地算到很精确的值

(5) **Newton 方法**.

现在我们考虑这样的问题：给定函数 $f(x)$，怎样解方程  
$$
f(x) = 0
$$
呢？当 $f(x)$ 是二次函数的时候，我们可以判断它有无解，并且可以将解显式地写出来. 对于一般的函数，我们往往只能近似地求解. 下面我们作这样的假设：  

(*) $f$ 在 $[a,b]$ 上连续，$f(a)f(b) < 0$；$f'$ 和 $f''$ 在 $(a,b)$ 中都不变号. 

在这个假设之下，根据介值定理和微分中值定理，$f(x) = 0$ 在 $(a,b)$ 中有且仅有一个解 $\xi$. 为了讨论的简单起见，我们进一步假设 $f'$ 和 $f''$ 有正的下界. 此时 $f$ 为严格单调递增的凸函数，因而 $f(a) < 0$，$f(b) > 0$. 

考察 $f$ 的图像，如果从 $(b,f(b))$ 作函数 $y = f(x)$ 的切线，其方程为  
$$
y - f(b) = f'(b)(x - a),
$$
此切线和 $x$ 轴的交点的横坐标为  
$$
x_1 = b - \frac{f(b)}{f'(b)}.
$$
根据 $f$ 的凸性可知，$x_1$ 比 $b$ 要更靠近 $\xi$. 

再从 $(x_1,f(x_1))$ 出发作 $y = f(x)$ 的切线，交 $x$ 轴于 $(x_2,0)$，其中  
$$
x_2 = x_1 - \frac{f(x_1)}{f'(x_1)}.
$$
$x_2$ 要比 $x_1$ 更靠近 $\xi$. 

这样一直做下去就得到一列点 $\{x_n\}$，它们可以递归地定义为  
$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)},\quad n \ge 0.
$$
其中 $x_0 = b$. $\{x_n\}$ 为单调递减数列，且 $\xi < x_n < b$，$\forall\ n \ge 1$. 因此极限 $\displaystyle\lim_{n \to \infty} x_n$ 存在，记为 $\xi'$. 于是 $\xi \le \xi' < b$. 在上式中令 $n \to \infty$ 得  
$$
\xi' = \xi' - \frac{f(\xi')}{f'(\xi')},
$$
即 $f(\xi') = 0$，这说明 $\xi' = \xi$. 因此，我们把 $x_n$ 视为 $f(x) = 0$ 的近似解是合理的，这种求近似解的方法称为 Newton 法或切线法式. 

下面我们来估计近似解 $x_n$ 和 $\xi$ 之间的误差. 根据 Taylor 公式，存在点 $c \in (\xi,x_n)$，使得  
$$
0 = f(\xi) = f(x_n) + f'(x_n)(\xi - x_n) + \frac{1}{2}f''(c)(\xi - x_n)^2,
$$
上式可改写为  
$$
x_{n+1} - \xi = \frac{1}{2} \frac{f''(c)}{f'(x_n)}(x_n - \xi)^2,
$$
因此有
$$
|x_{n+1} - \xi| \le \frac{M}{2m}|x_n - \xi|^2,
$$
其中  
$$
M = \sup_{x \in (a,b)} |f''(x)|,\quad m = \inf_{x \in (a,b)} |f'(x)|.
$$
可以看出，数列 $\{x_n\}$ 趋于极限 $\xi$ 的速度是很快的. 

需要注意的是，在我们的假设条件下，一般来说不能从 $(a,f(a))$ 开始作切线求交点来近似求解 $f(x) = 0$. 不难发现，当 $f'$ 和 $f''$ 同号时，应从 $(b,f(b))$ 出发作切线；当 $f'$ 和 $f''$ 反号时则应从 $(a,f(a))$ 出发作切线. 

