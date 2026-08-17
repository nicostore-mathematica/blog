---
title: Lesson 24 函数项级数 II
permalink: /integral/integral-24/
createTime: 2026/08/17 14:17:25
---

## Part 2 幂级数

形如 $\displaystyle\sum_{n=0}^\infty a_n(x - x_0)^n$ ($a_n \in \mathbb{R}$) 的函数项级数称为幂级数. 为了简单起见，我们讨论 $x_0 = 0$ 的情形，一般情形作变量代换 $t = x - x_0$ 即可. 

### · 基本性质

**引理1** (Abel). 如果幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $x = x_1$ ($x_1 \ne 0$) 处收敛，则它在区间 $|x| < |x_1|$ 中绝对收敛；因此，幂级数在 $x = x_2$ 处发散意味着在 $|x| > |x_2|$ 上均发散. 

> 设 $\displaystyle\sum_{n=0}^\infty a_nx_1^n$ 收敛，则存在 $M > 0$ 使得  
> $$
> |a_nx_1^n| \leq M, \quad \forall\, n \geq 1,
> $$
> 这说明  
> $$
> \sum_{n=0}^\infty |a_nx^n| = \sum_{n=0}^\infty |a_nx_1^n| \cdot \left|\frac{x}{x_1}\right|^n \leq M \sum_{n=0}^\infty \left|\frac{x}{x_1}\right|^n,
> $$
> 因此当 $|x| < |x_1|$ 时，$\displaystyle\sum_{n=0}^\infty a_nx^n$ 绝对收敛. 

从证明可以看出，如果 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $x = x_1$ ($x_1 \ne 0$) 处收敛，则对任何闭区间 $I \subset (-|x_1|, |x_1|)$，$\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $I$ 中都是一致收敛的. 

**定理2** (Cauchy-Hadamard). 对幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$，记  
$$
\rho = \varlimsup_{n \to \infty} \sqrt[n]{|a_n|},
$$
则

(1) $\rho = 0$ 时，级数在 $(-\infty, \infty)$ 中绝对收敛；

(2) $\rho = +\infty$ 时，级数仅在 $x = 0$ 处收敛；

(3) $0 < \rho < +\infty$ 时，级数在 $\left(-\dfrac{1}{\rho}, \dfrac{1}{\rho}\right)$ 中绝对收敛，在 $\left[-\dfrac{1}{\rho}, \dfrac{1}{\rho}\right]$ 之外发散. 此时，称 $\dfrac{1}{\rho}$ 为收敛半径. 

> 因为  
> $$
> \varlimsup_{n \to \infty} \sqrt[n]{|a_nx^n|} = \rho|x|,
> $$
> 由数项级数的 Cauchy 判别法即可得定理结论的证明. 以 (3) 的后半部分为例（反证法）：设 $x_1 \notin \left[-\dfrac{1}{\rho}, \dfrac{1}{\rho}\right]$，$\displaystyle\sum_{n=1}^\infty a_nx_1^n$ 收敛，则存在 $M > 0$ 使得  
> $$
> |a_nx_1^n| \leq M, \quad \forall\, n \geq 1.
> $$
> 从而有
> $$
> \varlimsup_{n \to \infty} \sqrt[n]{|a_n|} \leq \varlimsup_{n \to \infty} \sqrt[n]{M|x_1|^{-n}} = |x_1|^{-1} < \rho.
> $$
> 这就导出了矛盾！
>
> **注意**. 
>
> (1) 在 $x = \pm \rho^{-1}$ 处级数的收敛性必须视情况具体讨论. 
>
> (2) $0 < \rho < +\infty$ 时，对任意闭区间 $I \subset (-\rho^{-1}, \rho^{-1})$，幂级数均在 $I$ 中一致收敛. 

**定理3**. 设幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 收敛半径为 $R$，则 $S(x) = \displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $(-R, R)$ 中任意次可微，且  
$$
S^{(k)}(x) = \sum_{n=k}^\infty n(n-1)\cdots(n-k+1)a_nx^{n-k}.
$$

> 以 $k = 1$ 为例. 首先，幂级数 $\displaystyle\sum_{n=0}^\infty (a_nx^n)' = \displaystyle\sum_{n=1}^\infty na_nx^{n-1}$ 的收敛半径仍为 $R$，故它在闭区间 $I \subset (-R, R)$ 中一致收敛. 由定理 9.2.2，$\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $I$ 中可微，且  
> $$
> \left(\sum_{n=0}^\infty a_nx^n\right)' = \sum_{n=0}^\infty (a_nx^n)' = \sum_{n=1}^\infty na_nx^{n-1}.
> $$
> $S(x)$ 的高阶可微性的证明是完全类似的. 

特别地，$S^{(n)}(0) = n!a_n$，这说明和函数 $S(x)$ 的 Taylor 展开就是该幂级数本身.

**定理4** (Abel 连续性定理). 设幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 的收敛半径为 $R$ ($0 < R < +\infty$). 如果 $\displaystyle\sum_{n=0}^\infty a_nR^n$ 收敛，则  
$$
\lim_{x \to R^-} \sum_{n=0}^\infty a_nx^n = \sum_{n=0}^\infty a_nR^n,
$$
如果 $\displaystyle\sum_{n=0}^\infty a_n(-R)^n$ 收敛，则  
$$
\lim_{x \to -R^+} \sum_{n=0}^\infty a_nx^n = \sum_{n=0}^\infty a_n(-R)^n.
$$

> 如果 $\displaystyle\sum_{n=0}^\infty a_nR^n$ 收敛，则考虑  
> $$
> \sum_{n=0}^\infty a_nx^n = \sum_{n=0}^\infty a_nR^n \cdot \left(\frac{x}{R}\right)^n,
> $$
> 在 $[0,R]$ 上，$\left|\dfrac{x}{R}\right|^n \leq 1$，且 $\left(\dfrac{x}{R}\right)^n$ 关于 $n$ 单调. 由 Abel 判别法知 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $[0,R]$ 中一致收敛，其和函数 $S(x)$ 在 $[0,R]$ 中连续，因此  
> $$
> \sum_{n=0}^\infty a_nR^n = S(R) = \lim_{x \to R^-} S(x) = \lim_{x \to R^-} \sum_{n=0}^\infty a_nx^n.
> $$
> 关于 $-R$ 的证明完全类似（或考虑 $\tilde{a}_n = (-1)^n \cdot a_n$）. 

**定理5** (逐项积分). 设幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 收敛半径 $R \ne 0$，则有  
$$
\int_0^x \left(\sum_{n=0}^\infty a_nt^n\right) dt = \sum_{n=0}^\infty \int_0^x a_nt^n dt = \sum_{n=0}^\infty \frac{a_n}{n+1}x^{n+1}, \quad \forall\, x \in (-R,R).
$$

> 不妨设 $x > 0$，则根据前面的讨论，$\displaystyle\sum_{n=0}^\infty a_nt^n$ 在 $t \in [0,x]$ 中一致收敛，因此可以逐项积分. 

**注意**. 如果 $\displaystyle\sum_{n=0}^\infty a_nR^n$ 收敛，则上面的等式对 $x = R$ 也成立. 对 $-R$ 有类似结果. 

**定理6**. 设 $\displaystyle\lim_{m \to \infty} a_{mn} = a_n$，$|a_{mn}| \leq A_n$. 如果 $\displaystyle\sum_{n=0}^\infty A_nx^n$ 在 $(-R,R)$ 中收敛，则  
$$
\lim_{m \to \infty} \sum_{n=0}^\infty a_{mn}x^n = \sum_{n=0}^\infty a_nx^n, \quad x \in (-R,R).
$$

**定理7**. 设 $\displaystyle\sum_{i=0}^\infty |a_{ij}| = s_j$，$\displaystyle\sum_{j=0}^\infty s_jx^j$ 在 $(-R,R)$ 中收敛，则  
$$
\sum_{i=0}^\infty \sum_{j=0}^\infty a_{ij}x^j = \sum_{j=0}^\infty \left(\sum_{i=0}^\infty a_{ij}\right)x^j, \quad x \in (-R,R).
$$
/example/ 我们来推导 $\tan x$ 的幂级数展开. 

> 根据
> $$
> \frac{\sin x}{\cos x} = \sum_{n=1}^\infty \left[ \frac{1}{(2n-1)\frac{\pi}{2} - x} - \frac{1}{(2n-1)\frac{\pi}{2} + x} \right],
> $$
> 当 $x \in \left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$ 时，我们有  
> $$
> \begin{aligned}
> \tan x &= \sum_{n=1}^\infty \frac{2x}{[(2n-1)\frac{\pi}{2}]^2 - x^2}\\\\
> &= 2x \sum_{n=1}^\infty \sum_{m=0}^\infty \frac{1}{[(2n-1)\frac{\pi}{2}]^2} \left(\frac{x}{(2n-1)\frac{\pi}{2}}\right)^{2m}\\\\
> &= 2x \sum_{m=0}^\infty \sum_{n=1}^\infty \frac{1}{[(2n-1)\frac{\pi}{2}]^2} \left(\frac{x}{(2n-1)\frac{\pi}{2}}\right)^{2m}.
> \end{aligned}
> $$
>
> 利用等式
> $$
> \begin{aligned}
> \zeta(2m+2) &= \sum_{n=1}^\infty \frac{1}{(2n-1)^{2m+2}} + \sum_{n=1}^\infty \frac{1}{(2n)^{2m+2}}\\\\
> &= \sum_{n=1}^\infty \frac{1}{(2n-1)^{2m+2}} + 2^{-2m-2} \zeta(2m+2)
> \end{aligned}
> $$
> 可以将前式写为  
> $$
> \tan x = \sum_{m=0}^\infty \frac{\zeta(2m+2)}{\pi^{2m+2}} 2(2^{2m+2} - 1)x^{2m+1}, \quad \forall\, x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right).
> $$

### · Taylor 展开

如果 $f$ 在 $x_0$ 处任意次可导，则 $f$ 有 Taylor 展开  
$$
\sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n,
$$
然而，这个幂级数在 $x_0$ 以外的点上很可能不收敛，即使收敛，其极限也未必就是 $f(x)$. 不过我们有下面的两个结果. 

**定理8** (Bernstein). (*) 设 $f$ 在 $[a,b]$ 中任意阶可导，且各阶导数非负. 则当 $x, x_0 \in (a,b)$，且 $|x - x_0| < b - x_0$ 时  
$$
f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n.
$$

> 记 $M = f(b) - f(a)$，由 $f', f'' \geq 0$ 知 $f, f'$ 为单调递增函数. 任给 $x \in (a,b)$，由微分中值定理，有  
> $$
> M = f(b) - f(a) \geq f(b) - f(x) = (b - x)f'(\xi) \geq (b - x)f'(x).
> $$
> 同理，  
> $$
> M \geq f(b) - f(x) = f'(x)(b - x) + \frac{1}{2}f''(\xi)(b - x)^2 \geq \frac{1}{2}f''(x)(b - x)^2.
> $$
> 依此类推，我们得到如下估计  
> $$
> 0 \leq f^{(n)}(x) \leq \frac{n!M}{(b - x)^n}, \quad \forall\, x \in (a,b).
> $$
>
> 下面分两种情况来估计 $f$ 在 $x_0$ 处 Taylor 展开的余项 $R_n(x)$. 
>
> (1) $x > x_0$. 此时有  
> $$
> \begin{aligned}
> 0 \leq R_n(x) &= \int_{x_0}^x \frac{f^{(n+1)}(t)}{n!}(x - t)^n dt \\\\
> &\leq \int_{x_0}^x (n+1)M \frac{(x - t)^n}{(b - t)^{n+1}} dt \\\\
> &\leq \frac{(n+1)M}{b - x} \int_{x_0}^x \left(\frac{x - t}{b - t}\right)^n dt \\\\
> &\leq \frac{(n+1)M}{b - x} \left(\frac{x - x_0}{b - x_0}\right)^n (x - x_0) \to 0 \quad (n \to \infty).
> \end{aligned}
> $$
>
> (2) $x < x_0$. 此时，如果 $x_0 - x < b - x_0$，则  
> $$
> \begin{aligned}
> |R_n(x)| &= \left|\int_{x_0}^x \frac{f^{(n+1)}(t)}{n!}(x - t)^n dt\right| \\\\
> &\leq \int_x^{x_0} \frac{f^{(n+1)}(t)}{n!}(t - x)^n dt \\\\
> &\leq \frac{1}{n!}f^{(n+1)}(x_0) \int_x^{x_0} (t - x)^n dt \\\\
> &\leq \frac{1}{n!} \frac{(n+1)!M}{(b - x_0)^{n+1}} \frac{(x_0 - x)^{n+1}}{n+1} \\\\
> &\leq M\left(\frac{x_0 - x}{b - x_0}\right)^{n+1} \to 0 \quad (n \to \infty),
> \end{aligned}
> $$
> 或  
> $$
> \begin{aligned}
> |R_n(x)| &= \frac{1}{(n+1)!}(x_0 - x)^{n+1} f^{(n+1)}(\xi) \\\\
> &\leq \frac{1}{(n+1)!}(x_0 - x)^{n+1} f^{(n+1)}(x_0) \\\\
> &\leq M\left(\frac{x_0 - x}{b - x_0}\right)^{n+1} \to 0 \quad (n \to \infty).
> \end{aligned}
> $$
>
> 总之，余项的确是趋于零的. 

作为例子，函数 $f(x) = e^x$ 在 $(-\infty, \infty)$ 中的各阶导数均大于零，按照 Bernstein 定理，我们立即就得到等式  
$$
e^x = 1 + x + \frac{x^2}{2!} + \cdots + \frac{x^n}{n!} + \cdots, \quad \forall\, x \in (-\infty, +\infty).
$$
**定理9**. 设 $R > 0$，$f$ 在 $(x_0 - R, x_0 + R)$ 中无限次可导. 如果存在 $M > 0$ 使得  
$$
|f^{(n)}(x)| \leq M^n, \quad \forall\, x \in (x_0 - R, x_0 + R), \quad \forall\, n \geq 1,
$$
则  
$$
f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n, \quad \forall\, x \in (x_0 - R, x_0 + R).
$$

> 当 $x \in (x_0 - R, x_0 + R)$ 时，由 Taylor 公式的 Lagrange 余项表示，我们有  
> $$
> \begin{aligned}
> \left|f(x) - \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k\right| &= |R_n(x)| \\\\
> &= \left|\frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}\right| \\\\
> &\leq \frac{M^{n+1}R^{n+1}}{(n+1)!} \to 0 \quad (n \to \infty).
> \end{aligned}
> $$
> 因此  
> $$
> f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n.
> $$
> 这说明 $f$ 在 $x_0$ 处的 Taylor 展开的确收敛到 $f$ 自身. 

### · 乘除运算

**定理10**. 设幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 和 $\displaystyle\sum_{n=0}^\infty b_nx^n$ 在区间 $(-R,R)$ 中均收敛，则  
$$
\left(\sum_{n=0}^\infty a_nx^n\right)\left(\sum_{n=0}^\infty b_nx^n\right) = \sum_{n=0}^\infty c_nx^n = \sum_{n=0}^\infty \left(\sum_{i+j=n} a_ib_j\right)x^n, \quad \forall\, x \in (-R,R).
$$

> 只要证明对任意闭区间 $I \subset (-R,R)$ 等式成立即可. 在闭区间 $I$ 上，幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 和 $\displaystyle\sum_{n=0}^\infty b_nx^n$ 都是绝对一致收敛的，因此，根据数项级数乘积的 Cauchy 定理，有  
> $$
> \left(\sum_{n=0}^\infty a_nx^n\right)\left(\sum_{n=0}^\infty b_nx^n\right) = \sum_{n=0}^\infty \sum_{i+j=n} (a_ix^i)(b_jx^j) = \sum_{n=0}^\infty \left(\sum_{i+j=n} a_ib_j\right)x^n.
> $$
> 这就证明了幂级数的乘法公式. 

**定理11**. 设幂级数 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $(-R,R)$ ($R > 0$) 中收敛，$a_0 \ne 0$. 则存在 $r > 0$，使得幂级数 $\displaystyle\sum_{n=0}^\infty b_nx^n$ 在 $(-r,r)$ 中收敛，且  
$$
\left(\sum_{n=0}^\infty a_nx^n\right)\left(\sum_{n=0}^\infty b_nx^n\right) = 1, \quad \forall\, x \in (-r,r),
$$
或写为  
$$
\frac{1}{a_0 + a_1x + \cdots + a_nx^n + \cdots} = b_0 + b_1x + \cdots + b_nx^n + \cdots.
$$

> 不妨设 $a_0 = 1$. 下面，我们递归地定义 $b_n$ 如下：令 $b_0 = 1$，当 $b_0,\dots,b_{n-1}$ 已定义好后，令  
> $$
> b_n = -\sum_{i=0}^{n-1} a_{n-i}b_i, \quad n \geq 1.
> $$
>
> 我们来说明幂级数 $\displaystyle\sum_{n=0}^\infty b_nx^n$ 具有正的收敛半径. 事实上，因为 $\displaystyle\sum_{n=0}^\infty a_nx^n$ 在 $(-R,R)$ 中收敛，故存在 $M > 0$，使得  
> $$
> \left|a_n\left(\frac{R}{2}\right)^n\right| \leq M, \quad \forall\, n \geq 0.
> $$
> 因此有  
> $$
> \left|b_n\left(\frac{R}{2}\right)^n\right| \leq \sum_{i=0}^{n-1} \left|a_{n-i}\left(\frac{R}{2}\right)^{n-i}\right|\left|b_i\left(\frac{R}{2}\right)^i\right| \leq M \sum_{i=0}^{n-1} \left|b_i\left(\frac{R}{2}\right)^i\right|,
> $$
> 由此利用归纳法不难得到下面的估计  
> $$
> \left|b_n\left(\frac{R}{2}\right)^n\right| \leq (1 + M)^n, \quad \forall\, n \geq 0.
> $$
> 这说明，幂级数 $\displaystyle\sum_{n=0}^\infty b_nx^n$ 的收敛半径至少为 $r = \dfrac{R}{2(1 + M)}$. 根据 $\{b_n\}$ 的构造，显然有（我们假设了 $a_0 = 1$）  
> $$
> \left(\sum_{n=0}^\infty a_nx^n\right)\left(\sum_{n=0}^\infty b_nx^n\right) = \sum_{n=0}^\infty \left(\sum_{i+j=n} a_ib_j\right)x^n = 1.
> $$
> 这就证明了定理. 

**Bernoulli 数**：

> 考虑函数 $\dfrac{x}{e^x - 1}$ 的幂级数展开：
> $$
> \frac{x}{e^x - 1} = \sum_{n=0}^\infty \frac{B_n}{n!}x^n,
> $$
> 其系数 $B_n$ 称为第 $n$ 个 Bernoulli 数. 我们有
> $$
> \begin{aligned}
> \frac{x}{e^x - 1} &= \left(\frac{e^x - 1}{x}\right)^{-1} = \left(\sum_{n=0}^\infty \frac{x^n}{(n+1)!}\right)^{-1} \\\\
> &= 1 - \frac{x}{2} + \frac{x^2}{12} - \frac{x^4}{720} + \frac{x^6}{30240} - \frac{x^8}{1209600} + \cdots
> \end{aligned}
> $$
> 注意到上式中当 $n \geq 1$ 时 $B_{2n+1} = 0$，这是因为
> $$
> \frac{x}{e^x - 1} + \frac{x}{2} = \frac{x}{2} \cdot \frac{e^x + 1}{e^x - 1} = \frac{x}{2} \coth\frac{x}{2},
> $$
> 即 $\dfrac{x}{e^x - 1} + \dfrac{x}{2}$ 为偶函数的缘故. 
>
> 根据幂级数的除法公式，我们容易得到 $B_n$ 的如下递推公式：  
> $$
> B_0 = 1, \quad B_n = -\frac{1}{n+1} \sum_{k=0}^{n-1} C_{n+1}^k B_k.
> $$
>
> 例如，开头的几个 Bernoulli 数为
> $$
> B_0 = 1, \quad B_1 = -\frac{1}{2}, \quad B_2 = \frac{1}{6}, \quad B_3 = B_5 = B_7 = 0, \quad B_4 = -\frac{1}{30}, \quad B_6 = \frac{1}{42}, \quad B_8 = -\frac{1}{30}.
> $$

**Euler 数**：

> 考虑函数 $\dfrac{2e^x}{e^{2x} + 1}$ 的展开式
> $$
> \frac{2e^x}{e^{2x} + 1} = \sum_{n=0}^\infty \frac{E_n}{n!}x^n,
> $$
> 其系数 $E_n$ 称为 Euler 数. 因为 $\dfrac{2e^x}{e^{2x} + 1} = \dfrac{1}{\cosh x}$ 是偶函数，故上式也可写为
> $$
> \frac{1}{\cosh x} = \sum_{n=0}^\infty \frac{E_{2n}}{(2n)!}x^{2n}.
> $$
> 因为 $\cosh x = \displaystyle\sum_{n=0}^\infty \dfrac{x^{2n}}{(2n)!}$，由幂级数的除法公式可得如下递推公式
> $$
> E_0 = 1, \quad E_{2n-1} = 0, \quad E_{2n} = -\sum_{l=0}^{n-1} C_{2n}^{2l} E_{2l}, \quad n \geq 1.
> $$

结束.

