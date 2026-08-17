---
title: Lesson 16 不定积分 II
permalink: /integral/integral-16/
createTime: 2026/08/17 14:17:02
---

## Part 3 积分计算

不定积分是微分的逆运算. 微分运算满足线性性、导性和形式不变性，对应到不定积分就有相应的积分方法.

不定积分的各种计算方法实际上是为了计算定积分而作的预备.

### · 换元法

**命题1**（换元积分法）. 设 $f(u)$ 是在区间 $J$ 中有定义的函数，$u = \phi(x)$ 是区间 $I$ 中的可微函数，且 $\phi(I) \subset J$. 

(1) 如果 $f$ 在 $J$ 中存在原函数 $F$，则 $F(\phi)$ 是 $f(\phi)\phi'$ 在区间 $I$ 中的原函数，即
$$
\int f(\phi(x))\phi'(x)dx = \int f(u)du + C = F(\phi(x)) + C;
$$

(2) 设 $\phi$ 可逆，且其逆可微，$\phi(I) = J$. 如果 $f(\phi(x))\phi'(x)$ 有原函数 $G$，则 $f$ 有原函数 $G(\phi^{-1}(u))$，即
$$
\int f(u)du = G(\phi^{-1}(u)) + C.
$$

> /proof/
>
> (1) 如果 $F' = f$，则由复合求导，有
> $$
> [F(\phi)]' = f(\phi)\phi',
> $$
> 所以 $F(\phi)$ 是 $f(\phi)\phi'$ 的原函数. 
>
> (2) 当 $\phi^{-1}$ 可微时，对 $\phi(\phi^{-1}(u)) = u$ 求导，得
> $$
> [\phi^{-1}(u)]' = \frac{1}{\phi'(x)},\quad x = \phi^{-1}(u).
> $$
> 因此
> $$
> [G(\phi^{-1}(u))]' = G'(\phi^{-1}(u))[\phi^{-1}(u)]' = f(u)\phi'(\phi^{-1}(u))\frac{1}{\phi'(x)} = f(u),
> $$
> 所以 $G(\phi^{-1}(u))$ 是 $f(u)$ 的原函数.

(1) 换元积分法又称变量替换法，其要点是将变量 $u$ 通过 $u = \phi(x)$ 换成 $x$（或反之）. 

(2) 在下一章中我们将知道，如果 $\phi'(x) \ne 0,\ \forall\ x \in I$，则 $\phi$ 可逆，因此逆函数 $\phi^{-1}$ 也可微. 

(3) 由 Newton-Leibniz 公式，如果 $f$ 连续，$\phi$ 连续可微，则相应地有关于连续函数定积分的换元公式. 

> 实际上我们学习的时候经常强调“第一换元法”和“第二换元法”，
>
> 第一换元法
> $$
> \int f(x) \, \mathrm{d} x
> \stackrel{\text{discover}}{\Longrightarrow}
> \int g\big(\alpha(x)\big) \, \mathrm{d}\!\big(\alpha(x)\big)
> \stackrel{t=\alpha(x)}{\Longrightarrow}
> \int g(t) \, \mathrm{d}t
> $$
> 第二换元法
> $$
> \int f(x)\text{d}x \overset{\text{find }\beta(\alpha(x))=x}{\underset{t=\alpha(x),x=\beta(t)}{\iff}}\int f(\beta(t))\beta'(t)\text{d}t
> $$
> 第一换元法事~~注意到~~，基于强大的注意力（Attention is all you need！）
>
> 第二换元法一般有很明确的需求，比如：
> $$
> \sqrt{a^{2}-x^{2}},\quad x = a\sin t,\quad t\in[-\frac{\pi}{2},\frac{\pi}{2}]
> $$
>
> $$
> \sqrt{a^{2}+x^{2}},\quad x = a\tan t,\quad t\in[-\frac{\pi}{2},\frac{\pi}{2}]
> $$
>
> $$
> \sqrt{x^{2}-a^{2}},\quad x = a\sec t,\quad t\in[0,\frac{\pi}{2})\cup(\frac{\pi}{2},\pi]
> $$

### · 分部积分

**命题2**（分部积分法）. 设 $u(x), v(x)$ 在区间 $I$ 中可微，如果 $u'(x)v(x)$ 有原函数，则 $u(x)v'(x)$ 也有原函数，且
$$
\int u(x)v'(x)dx = u(x)v(x) - \int u'(x)v(x)dx.
$$

> 设 $u'(x)v(x)$ 有原函数，则由
> $$
> [u(x)v(x)]' = u'(x)v(x) + u(x)v'(x)
> $$
> 得
> $$
> \left[u(x)v(x) - \int u'(x)v(x)dx\right]' = u(x)v'(x).
> $$
> 这说明 $u(x)v(x) - \displaystyle\int u'(x)v(x)dx$ 是 $u(x)v'(x)$ 的原函数.

(1) 分部积分法也可改写为
$$
\int u(x)dv(x) = u(x)v(x) - \int v(x)du(x).
$$

(2) 如果 $u, v$ 均连续可微，则分部积分法条件满足. 特别地，对于定积分有
$$
\int_a^b u(x)v'(x)dx = u(x)v(x)\Big|_a^b - \int_a^b u'(x)v(x)dx.
$$
/example/ 求不定积分 $\displaystyle\int x^2\ln x\,dx$. 

>  取 $u(x) = \ln x$, $v(x) = \dfrac{1}{3}x^3$，则
>  $$
>  \begin{aligned}
>  \int x^2\ln x\,dx &= \int \ln x\,d\left(\frac{1}{3}x^3\right)\\\\
>  &= \frac{1}{3}x^3\ln x - \int \frac{1}{3}x^3\,d(\ln x)\\\\
>  &= \frac{1}{3}x^3\ln x - \int \frac{1}{3}x^3\cdot\frac{1}{x}\,dx\\\\
>  &= \frac{1}{3}x^3\ln x - \frac{1}{9}x^3 + C.
>  \end{aligned}
>  $$

 /example/ 设 $a \ne 0$，求不定积分 $I = \displaystyle\int e^{ax}\cos bx\,dx$ 和 $J = \displaystyle\int e^{ax}\sin bx\,dx$. 

> 利用分部积分，有
> $$
> \begin{aligned}
> I &= \int e^{ax}\cos bx\,dx = \frac{1}{a}\int \cos bx\,d(e^{ax})\\\\
> &= \frac{1}{a}\left[e^{ax}\cos bx + b\int e^{ax}\sin bx\,dx\right]\\\\
> &= \frac{1}{a}e^{ax}\cos bx + \frac{b}{a}J.
> \end{aligned}
> $$
> 同理，有
> $$
> \begin{aligned}
> J &= \int e^{ax}\sin bx\,dx = \frac{1}{a}\int \sin bx\,d(e^{ax})\\\\
> &= \frac{1}{a}\left[e^{ax}\sin bx - b\int e^{ax}\cos bx\,dx\right]\\\\
> &= \frac{1}{a}e^{ax}\sin bx - \frac{b}{a}I.
> \end{aligned}
> $$
> 因此解出 $I, J$ 为
> $$
> \begin{aligned}
> I &= \frac{b\sin bx + a\cos bx}{a^2 + b^2}e^{ax} + C_1,\\\\
> J &= \frac{a\sin bx - b\cos bx}{a^2 + b^2}e^{ax} + C_2.
> \end{aligned}
> $$

/example/ 求积分 $\displaystyle\int_0^{\dfrac{\pi}{4}} \tan^4 x\,dx$. 

> 记 $I_n = \displaystyle\int_0^{\dfrac{\pi}{4}} \tan^n x\,dx$，则 $I_0 = \dfrac{\pi}{4}$. 一般地，有
> $$
> \begin{aligned}
> I_n &= \int_0^{\frac{\pi}{4}} \tan^n x\,dx = \int_0^{\frac{\pi}{4}} \tan^{n-2} x(\sec^2 x - 1)\,dx\\\\
> &= \int_0^{\frac{\pi}{4}} \tan^{n-2} x\,d(\tan x) - I_{n-2}\\\\
> &= \frac{\tan^{n-1} x}{n-1}\Big|_0^{\frac{\pi}{4}} - I_{n-2}\\\\
> &= \frac{1}{n-1} - I_{n-2}.
> \end{aligned}
> $$
> 特别地，$I_2 = 1 - I_0 = 1 - \dfrac{\pi}{4}$，$I_4 = \dfrac{1}{3} - I_2 = \dfrac{\pi}{4} - \dfrac{2}{3}$.

/example/ 求不定积分
$$
I_n = \int \frac{dx}{(x^2 + a^2)^n}
$$
其中 $a > 0$，$n$ 为非负整数.

> 显然 $I_0 = x + C$，$I_1 = \dfrac{1}{a}\arctan\dfrac{x}{a} + C$. 当 $n \ge 1$ 时，
> $$
> \begin{aligned}
> I_n &= \int \frac{dx}{(x^2 + a^2)^n}\\\\
> &= \frac{x}{(x^2 + a^2)^n} + 2n\int \frac{x^2}{(x^2 + a^2)^{n+1}}\,dx\\\\
> &= \frac{x}{(x^2 + a^2)^n} + 2n\left[\int \frac{x^2 + a^2}{(x^2 + a^2)^{n+1}}\,dx - a^2\int \frac{1}{(x^2 + a^2)^{n+1}}\,dx\right]\\\\
> &= \frac{x}{(x^2 + a^2)^n} + 2nI_n - 2na^2I_{n+1}.
> \end{aligned}
> $$
> 这样就得到了递推公式
> $$
> I_{n+1} = \frac{2n - 1}{2na^2}I_n + \frac{1}{2na^2}\frac{x}{(x^2 + a^2)^n},
> $$
> 由此可以求出所有的 $I_n$.

### · 有理函数积分

有理函数是指形如
$$
R(x) = \frac{P(x)}{Q(x)}
$$
的函数，其中 $P, Q$ 均为关于变量 $x$ 的多项式. 如果 $P$ 的次数小于 $Q$，则称 $R$ 为真分式. 

显然，任何有理函数都可以写成一个多项式和一个真分式之和. 因此，有理函数的积分就只要考虑真分式的情形就可以了. 根据实系数多项式的因式分解可以证明，真分式可以进一步分解为下面两种简单真分式之和：
$$
\frac{A}{(x - a)^k},\ k \ge 1;\quad
\frac{Ax + B}{(x^2 + px + q)^k},\ k \ge 1,\ p^2 - 4q < 0.
$$
它们的不定积分可以计算如下：

**(1)**. $k = 1$:
$$
\int \frac{A}{x - a}\,dx = A\ln|x - a| + C;
$$

**(2)**. $k > 1$:
$$
\int \frac{A}{(x - a)^k}\,dx = A\frac{(x - a)^{1-k}}{1 - k} + C;
$$

**(3)**. $k = 1$:
$$
\begin{aligned}
\int \frac{Ax + B}{x^2 + px + q}\,dx
&= \int \frac{\frac{A}{2}(2x + p) + (B - \frac{Ap}{2})}{x^2 + px + q}\,dx\\\\
&= \frac{A}{2}\int \frac{2x + p}{x^2 + px + q}\,dx + (B - \frac{Ap}{2})\int \frac{dx}{x^2 + px + q}\\\\
&= \frac{A}{2}\int \frac{d(x^2 + px + q)}{x^2 + px + q} + (B - \frac{Ap}{2})\int \frac{dx}{(x + \frac{p}{2})^2 + (q - \frac{p^2}{4})}\\\\
&= \frac{A}{2}\ln|x^2 + px + q| + \frac{2B - Ap}{\sqrt{4q - p^2}}\arctan\frac{2x + p}{\sqrt{4q - p^2}} + C;
\end{aligned}
$$

**(4)**. $k > 1$ 时，和 (3) 类似，有
$$
\int \frac{Ax + B}{(x^2 + px + q)^k}\,dx
= \frac{A}{2}\frac{(x^2 + px + q)^{1-k}}{1 - k} + (B - \frac{Ap}{2})\int \frac{dt}{(t^2 + a^2)^k},
$$
其中 $t = x + \dfrac{p}{2}$，$a = \dfrac{1}{2}\sqrt{4q - p^2}$. 上式右端的不定积分我们在前一小节中已经用递推的办法算过. 

总之，有理函数的不定积分可以用初等函数表示. 在具体的分解计算过程中我们通常可以用待定系数法. 

### · 有理三角函数积分

如果我们对三角函数和常数做有限次的四则运算，则得到的函数称为有理三角函数. 因为 $\tan x, \cot x, \sec x$ 和 $\csc x$ 可以看成由 $\sin x$ 和 $\cos x$ 生成的有理三角函数，故一般的有理三角函数可记为 $R(\sin x, \cos x)$. 

对有理三角函数的积分有一个通用的处理方法，称为万能变换：令
$$
t = \tan\frac{x}{2},
$$
则
$$
x = 2\arctan t,\quad dx = \frac{2}{1 + t^2}dt,
$$
且有
$$
\sin x = \frac{2\sin\dfrac{x}{2}\cos\dfrac{x}{2}}{\sin^2\dfrac{x}{2} + \cos^2\dfrac{x}{2}}
= \frac{2\tan\dfrac{x}{2}}{\tan^2\dfrac{x}{2} + 1}
= \frac{2t}{1 + t^2},
$$
以及
$$
\cos x = \frac{\cos^2\dfrac{x}{2} - \sin^2\dfrac{x}{2}}{\cos^2\dfrac{x}{2} + \sin^2\dfrac{x}{2}}
= \dfrac{1 - \tan^2\dfrac{x}{2}}{1 + \tan^2\dfrac{x}{2}}
= \dfrac{1 - t^2}{1 + t^2},
$$
这说明有理三角函数的积分可以通过万能变换成有理函数的积分，因此是可以计算出来的. 在实际计算过程中，有时也可以视情形采用变换 $t = \sin x$, $t = \cos x$ 或 $t = \tan x$ 等.

### · 某些无理积分

以下讨论几种可以转化为有理积分的某些无理函数的不定积分. 我们用记号 $R(x_1, x_2, \cdots, x_n)$ 表示关于 $x_1, x_2, \cdots, x_n$ 的有理函数. 

**(1)**. 形如
$$
R\left(x, \sqrt[n]{\frac{ax + b}{cx + d}}, \cdots, \sqrt[m]{\frac{ax + b}{cx + d}}\right)
$$
的无理函数的积分，其中 $ad - bc \ne 0$，而 $n, \cdots, m$ 是大于 1 的整数. 设 $k$ 为这些整数的最小公倍数，令
$$
t = \left(\frac{ax + b}{cx + d}\right)^{\frac{1}{k}},
$$
则
$$
x = \frac{dt^k - b}{a - ct^k},\quad dx = \frac{ad - bc}{(a - ct^k)^2}kt^{k-1}dt,
$$
从而 $R$ 的积分可以转化为关于 $t$ 的有理积分. 

**(2)**. 形如 $R(x, \sqrt{ax^2 + bx + c})$ 的函数积分，其中 $R(x, y)$ 为关于 $x, y$ 的有理函数，$a > 0$ 时 $b^2 - 4ac \ne 0$，或 $a \ne 0$, $b^2 - 4ac > 0$. 由于
$$
ax^2 + bx + c = a\left[\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a^2}\right],
$$
故当 $a > 0$ 时，令
$$
u = x + \frac{b}{2a},\quad k^2 = \left|\frac{4ac - b^2}{4a^2}\right|,
$$
原积分化为如下形式的积分：
$$
\int R(u, \sqrt{u^2 - k^2}),\quad \text{or}\quad \int R(u, \sqrt{u^2 + k^2}),
$$
分别进一步令 $u = k\sec t$, $u = k\tan t$ 就把不定积分变成了有理三角函数的积分，从而可以计算出来. 

当 $a \ne 0$, $b^2 - 4ac > 0$ 时，令
$$
u = x + \frac{b}{2a},\quad k = \sqrt{\frac{b^2 - 4ac}{4a^2}},
$$
则原积分化为如下形式积分：
$$
\int R(u, \sqrt{u^2 - k^2}),\quad \text{or}\quad \int R(u, \sqrt{k^2 - u^2}),
$$
分别进一步令 $u = k\sec t$, $u = k\sin t$ 就把不定积分变成了有理三角函数的积分，从而可以计算出来. 

还有一些别的办法来计算这些积分. 

> 例如，如果 $a > 0$，令
> $$
> \sqrt{ax^2 + bx + c} = \sqrt{a}x + t\quad (\text{or } t - \sqrt{a}x),
> $$
> 则 $x$ 为 $t$ 的有理函数：
> $$
> x = \frac{t^2 - c}{b - 2\sqrt{a}t},
> $$
> 从而可以把原积分化为关于 $t$ 的有理积分；如果 $c > 0$，令
> $$
> \sqrt{ax^2 + bx + c} = tx + \sqrt{c}\quad (\text{or}\ \ tx - \sqrt{c}),
> $$
> 则 $x$ 为 $t$ 的有理函数：
> $$
> x = \frac{2\sqrt{c}t - b}{a - t^2},
> $$
> 从而也可以把原积分化为关于 $t$ 的有理积分；如果 $b^2 - 4ac > 0$，则 $ax^2 + bx + c = 0$ 有两个实根：
> $$
> ax^2 + bx + c = a(x - \alpha)(x - \beta),
> $$
> 令
> $$
> \sqrt{ax^2 + bx + c} = t(x - \alpha),
> $$
> 则 $x$ 为 $t$ 的有理函数：
> $$
> x = \frac{a\beta - \alpha t^2}{a - t^2},
> $$
> 从而也可以把原积分化为关于 $t$ 的有理积分；这里用到的变量替换统称为 Euler 替换，在实际的计算过程中当然也可灵活选择其它的变量替换方法. 

并非所有的不定积分都可以用初等函数表示，例如下面函数的不定积分都不能用初等函数表示：
$$
e^{\pm x^2},\ \sin(x^2),\ \cos(x^2),\ \frac{\sin x}{x},\ \frac{\cos x}{x},\ \sqrt{1 - k^2\sin^2 x},\ \frac{1}{\sqrt{1 - k^2\sin^2 x}}\quad (0 < k < 1).
$$

