---
title: Lesson 11 微分学 I
permalink: /integral/integral-11/
createTime: 2026/08/17 14:16:46
---

## Part 1 微分

在经典物理学中, 如果我们考察质点沿直线的运动, 则有速度和加速度的概念. 速度是反映位移随时间变化的量, 即速度是位移函数的变化率, 而加速度是反映速度随时间变化的量. 我们现在利用极限给出这些变化量的数学定义.

### · 导数

**定义1** (导数). 

> 设函数 $f$ 在 $x_0$ 附近有定义, 如果极限
> $$
> \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}
> $$
> 存在且有限, 则称 $f$ 在 $x_0$ 处可导, 此极限称为 $f$ 在 $x_0$ 处的导数, 记为 $f'(x_0)$.
>
> 如果记 $y = f(x)$, $\Delta x = x - x_0$, $\Delta y = f(x) - f(x_0)$, 则导数也可表示为
> $$
> f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}.
> $$
> 既然导数是用极限定义的, 我们当然也可以用 $\varepsilon-\delta$ 语言来描述它: 如果存在 $A \in \mathbb{R}$, 使得任给 $\varepsilon > 0$, 均存在 $\delta > 0$, 当 $0 < |x - x_0| < \delta$ 时
> $$
> \left|\frac{f(x) - f(x_0)}{x - x_0} - A\right| < \varepsilon,
> $$
> 则 $f$ 在 $x_0$ 处可导, 导数为 $A$.
>
> 如果 $f$ 在 $x_0$ 的左边邻域 $(x_0 - \delta, x_0]$ 中有定义, 且当 $x \to x_0^-$ 时, $\dfrac{f(x) - f(x_0)}{x - x_0}$ 的极限存在且有限, 则称 $f$ 在 $x_0$ 处左可导, 此极限称为 $f$ 在 $x_0$ 处的左导数, 记为 $f'_-(x_0)$, 即
> $$
> f'_-(x_0) = \lim_{x \to x_0^-} \frac{f(x) - f(x_0)}{x - x_0}.
> $$
>
> 类似地, 如果 $f$ 在 $x_0$ 的右边邻域 $[x_0, x_0 + \delta)$ 中有定义, 且当 $x \to x_0^+$ 时, $\dfrac{f(x) - f(x_0)}{x - x_0}$ 的极限存在且有限, 则称 $f$ 在 $x_0$ 处右可导, 此极限称为 $f$ 在 $x_0$ 处的右导数, 记为 $f'_+(x_0)$, 即
> $$
> f'_+(x_0) = \lim_{x \to x_0^+} \frac{f(x) - f(x_0)}{x - x_0}.
> $$

**命题1**. 设 $f$ 在 $x_0$ 附近有定义, 则 $f$ 在 $x_0$ 处可导当且仅当 $f$ 在 $x_0$ 处的左导数和右导数存在且相等, 此时它们等于 $f$ 在 $x_0$ 处的导数.

/example/

> 研究常值函数 $f(x) = c$ 的导数.
>
> > 任给 $x_0$, 有
> > $$
> > \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{x \to x_0} \frac{c - c}{x - x_0} = 0,
> > $$
> > 因此按照定义, 常值函数在 $x_0$ 处可导, 导数为零. 这和我们的直观是相吻合的, 因为导数反映函数的变化率, 而常值函数的变化率当然为零.
>
> 研究函数 $f(x) = |x|$ 在 $x_0 = 0$ 处的可导性.
>
> > 当 $x < 0$ 时, 有
> > $$
> > \lim_{x \to 0^-} \frac{f(x) - f(0)}{x - 0} = \lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = -1.
> > $$
> > 这说明 $f'_-(0) = -1$. 类似地, 当 $x > 0$ 时, 有
> > $$
> > \lim_{x \to 0^+} \frac{f(x) - f(0)}{x - 0} = \lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = 1.
> > $$
> > 因此 $f'_+(0) = 1$. 这说明 $f$ 在 $x_0 = 0$ 处不可导.

> [!tip]
>
> 我们现在从几何的角度来解释导数的含义. 考虑函数 $f$ 在 $x_0$ 附近的图像, 经过图像上两点 $(x_0, f(x_0))$ 和 $(x, f(x))$ 的直线的方程为
> $$
> y(t) = \frac{f(x) - f(x_0)}{x - x_0}(t - x_0) + f(x_0),\quad \forall\ t \in \mathbb{R}.
> $$
> 当 $x \to x_0$ 时, 考察此直线的变化. 当 $f$ 在 $x_0$ 处可导时, 直线的极限位置是一条经过 $(x_0, f(x_0))$ 且斜率为 $f'(x_0)$ 的直线, 称为 $f$ 在 $x_0$ 处的切线, 其方程为
> $$
> y(t) = f'(x_0)(t - x_0) + f(x_0).
> $$
>
> 方程
> $$
> (x - x_0) + f'(x_0)(y - f(x_0)) = 0
> $$
> 所代表的直线则称为 $f$ 在 $x_0$ 处的法线.

### · 微分

根据切线的定义过程, 我们可以把切线看成函数 $f$ 的图像在 $x_0$ 处的一个线性逼近. 即, 函数 $f$ 在 $x_0$ 附近可以近似地看成线性函数, 这种线性逼近或线性化的方法是我们研究函数的一种基本手法.

**定义2** (微分). 

> 设 $f$ 是在 $x_0$ 附近有定义的函数, 如果存在常数 $A$, 使得
> $$
> f(x) = f(x_0) + A(x - x_0) + o(x - x_0)\quad (x \to x_0),
> $$
> 则称 $f$ 在 $x_0$ 处可微, $x_0$ 处的线性映射 $x \mapsto Ax$ 称为 $f$ 在 $x_0$ 处的微分, 记为 $df(x_0)$.

导数和微分之间的关系体现在下面的命题中.

**命题2.** 设 $f$ 在 $x_0$ 附近有定义, 则  

(1) $f$ 在 $x_0$ 处可导当且仅当 $f$ 在 $x_0$ 处可微, 且微分的斜率就是导数 $f'(x_0)$.  

(2) 如果 $f$ 在 $x_0$ 处可导, 则 $f$ 在 $x_0$ 处连续.

> /proof/
>
> (1) 设 $f$ 在 $x_0$ 处可导, 则
> $$
> \lim_{x \to x_0} \frac{f(x) - f(x_0) - f'(x_0)(x - x_0)}{x - x_0} = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} - f'(x_0) = 0,
> $$
> 因此
> $$
> f(x) - f(x_0) - f'(x_0)(x - x_0) = o(x - x_0)\quad (x \to x_0),
> $$
> 即
> $$
> f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)\quad (x \to x_0).
> $$
> 这说明 $f$ 在 $x_0$ 处可微.
>
> 反之, 设 $f$ 在 $x_0$ 处可微, $f(x) = f(x_0) + A(x - x_0) + o(x - x_0)$, 则
> $$
> \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{x \to x_0} \frac{A(x - x_0) + o(x - x_0)}{x - x_0} = A,
> $$
> 从而 $f$ 在 $x_0$ 处可导, 且导数 $f'(x_0) = A$.
>
> (2) 如果 $f$ 在 $x_0$ 处可导, 则 $f$ 在 $x_0$ 处可微, 从而
> $$
> \lim_{x \to x_0} f(x) = \lim_{x \to x_0} [f(x_0) + A(x - x_0) + o(x - x_0)] = f(x_0),
> $$
> 因此 $f$ 在 $x_0$ 处连续.

微分的几何意义在于它可以看成 $f$ 的一个线性近似. 由于微分的斜率等于导数, 我们将 $x_0$ 处的微分 $df(x_0)$ 写为
$$
df(x_0) = f'(x_0)dx(x_0),
$$
其中 $dx(x_0)$ 是函数 $x$ 在 $x_0$ 的微分 (即恒同线性映射). 我们又将导数 $f'(x_0)$ 记为 $\dfrac{df}{dx}(x_0)$ 或 $\left.\dfrac{df}{dx}\right|_{x_0}$, 称为 $f$ 在 $x_0$ 处的微商. 

微商是一个历史遗留记号, 它并不是两个微分的商, 而仅仅表示函数 $f$ 关于变量 $x$ 在 $x_0$ 处的导数. 我们将在那些需要区分关于不同变量求导的时候使用微商的记号, 其余的时候一般用 $f'$ 表示导数.

### · 运算法则

下面我们研究导数的运算法则.

**命题3** (导数的运算法则). 设 $f,g$ 在 $x$ 处可导, 则 $fg$ 在 $x$ 处可导; 如果 $\alpha,\beta$ 为常数, 则 $\alpha f + \beta g$ 在 $x$ 处可导. 且有  

(1) $(\alpha f + \beta g)' = \alpha f' + \beta g'$ （线性性）;  

(2) $(fg)' = f'g + fg'$ （导性）.

> /proof/
>
> (1) 如果 $f,g$ 在 $x$ 处可导, 则
> $$
> f(x') = f(x) + f'(x)(x - x') + o(x - x'),
> $$
>
> $$
> g(x') = g(x) + g'(x)(x - x') + o(x - x').
> $$
>
> 从而
> $$
> \alpha f(x') + \beta g(x') = (\alpha f(x) + \beta g(x)) + (\alpha f'(x) + \beta g'(x))(x - x') + \alpha o(x - x') + \beta o(x - x')
> $$
>
> $$
> = (\alpha f(x) + \beta g(x)) + (\alpha f'(x) + \beta g'(x))(x - x') + o(x - x').
> $$
>
> 这说明 $\alpha f + \beta g$ 在 $x$ 处可导, 且导数等于 $\alpha f' + \beta g'$.
>
> (2) 如果 $f,g$ 在 $x$ 处可导, 则 $f,g$ 在 $x$ 处连续, 且
> $$
> f(x')g(x') = [f(x') - f(x)]g(x') + f(x)[g(x') - g(x)] + f(x)g(x),
> $$
> 于是
> $$
> \begin{aligned}
> \lim_{x' \to x} \frac{f(x')g(x') - f(x)g(x)}{x - x'} &= \lim_{x' \to x} \frac{f(x') - f(x)}{x' - x}g(x') + \lim_{x' \to x'} \frac{g(x') - g(x)}{x' - x}f(x)\\\\
> &= f'(x)g(x) + g'(x)f(x).
> \end{aligned}
> $$
> 这说明 $fg$ 在 $x$ 处可导, 且 $(fg)' = f'g + fg'$.

导数运算的线性性可以推广为对任意有限多个函数的线性组合成立. 从导性还得到

**推论4**. 设 $f,g$ 在 $x$ 处可导, $g(x) \ne 0$. 则 $\dfrac{f}{g}$ 在 $x$ 处可导, 且
$$
\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}.
$$

> /proof/
>
> 先说明 $g^{-1} = \dfrac{1}{g}$ 在 $x$ 处可导:
> $$
> \lim_{x' \to x} \frac{g^{-1}(x') - g^{-1}(x)}{x' - x} = \lim_{x' \to x} \frac{-1}{g(x)g(x')} \cdot \frac{g(x') - g(x)}{x' - x} = -\frac{g'(x)}{g^2(x)}.
> $$
> 因此 $\dfrac{f}{g} = f \cdot \dfrac{1}{g}$ 可导, 利用导数的导性, 有
> $$
> \left(\frac{f}{g}\right)' = f' \cdot \left(\frac{1}{g}\right) + f \cdot \left(\frac{1}{g}\right)' = \frac{f'g - fg'}{g^2},
> $$
> 推论得证.

**命题5** (链式法则). 设 $g$ 在 $x$ 处可导, $f$ 在 $g(x)$ 处可导, 则复合函数 $f \circ g = f(g)$ 在 $x$ 处可导, 且
$$
[f(g)]' = f'(g)g'.
$$

> /proof/
>
> 因为 $g$ 在 $x$ 处可导, 故当 $x'$ 在 $x$ 附近时
> $$
> g(x') = g(x) + g'(x)(x' - x) + o(x' - x),
> $$
> 这说明 $x' \to x$ 时, 存在常数 $C$, 使得 $|g(x') - g(x)| \le C|x' - x|$. 因此
> $$
> \begin{aligned}
> f(g(x')) &= f(g(x)) + f'(g(x))(g(x') - g(x)) + o(g(x') - g(x))\\\\
> &= f(g(x)) + f'(g(x))g'(x)(x' - x) + f'(g(x))o(x' - x') + o(x' - x)\\\\
> &= f(g(x)) + f'(g(x))g'(x)(x' - x) + o(x' - x).
> \end{aligned}
> $$
> 这说明 $f(g)$ 在 $x$ 处可导, 导数为 $f'(g(x))g'(x)$. 

链式法则对于任意有限个函数的复合也适用, 比如
$$
[f(g(h))]' = f'(g(h))g'(h)h'.
$$
**命题6** (反函数求导法则). 设 $f$ 在 $x_0$ 附近连续且有逆函数 $g$. 如果 $f$ 在 $x_0$ 处可导, 且导数 $f'(x_0) \ne 0$, 则 $g$ 在 $y_0 = f(x_0)$ 处可导, 且
$$
g'(y_0) = \frac{1}{f'(x_0)}.
$$

> /proof/
>
> 因为 $f$ 在 $x_0$ 处可导, 故
> $$
> f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)\quad (x \to x_0),
> $$
> 当 $x \to x_0$ 时上式可改写为
> $$
> f(x) - f(x_0) = [f'(x_0) + o(1)](x - x_0).
> $$
> 当 $f'(x_0) \ne 0$ 时, 上式表明, 当 $x \to x_0$ 时, 存在常数 $C > 0$ 使得
> $$
> |f(x) - f(x_0)| \ge C|x - x_0|,\quad \text{or}\quad |y - y_0| \ge C|g(y) - g(y_0)|.
> $$
> 特别地, 当 $y \to y_0$ 时, $x = g(y) \to g(y_0) = x_0$. 代入 $x = g(y)$, $x_0 = g(y_0)$ 得
> $$
> \begin{aligned}
> y &= y_0 + f'(x_0)(g(y) - g(y_0)) + o(g(y) - g(y_0))\quad (y \to y_0)\\\\
> &= y_0 + f'(x_0)(g(y) - g(y_0)) + o(y - y_0)\quad (y \to y_0),
> \end{aligned}
> $$
> 或改写为
> $$
> g(y) = g(y_0) + \frac{1}{f'(x_0)}(y - y_0) + o(y - y_0)\quad (y \to y_0).
> $$
> 这说明 $g$ 在 $y_0 = f(x_0)$ 处可导, 且导数为 $\dfrac{1}{f'(x_0)}$.

有了上面这些求导运算法则, 我们就可以计算常见函数的导数了. 先看最基本的例子.

**命题7**. $x' = 1$, $(e^x)' = e^x$.

> /proof/
>
> 由定义,
> $$
> x' = \lim_{\Delta x \to 0} \frac{(x + \Delta x) - x}{\Delta x} = 1.
> $$
> 对于函数 $e^x$, 我们先计算它在 $x_0 = 0$ 处的导数:
> $$
> (e^x)'(0) = \lim_{x \to 0} \frac{e^x - 1}{x - 0} = \lim_{y \to 0} \frac{y}{\ln(1 + y)} = \lim_{y \to 0} \frac{1}{\ln(1 + y)^{1/y}} = 1.
> $$
> 对于一般的 $x$, 有
> $$
> (e^x)' = \lim_{x' \to x} \frac{e^{x'} - e^x}{x' - x} = \lim_{x' \to x} e^x \frac{e^{x' - x} - 1}{x' - x}
> = e^x \lim_{y \to 0} \frac{e^y - 1}{y} = e^x.
> $$
> 这样就得到了命题的证明.

**命题8**. 设 $a > 0$ ($a \ne 1$) 和 $\alpha \ne 0$ 为常数. 在函数的定义域内, 我们有  

(1) $(a^x)' = a^x \ln a$, $(\log_a x)' = \dfrac{1}{x \ln a}$;  

(2) $(\ln |x|)' = \dfrac{1}{x}$, $(x^\alpha)' = \alpha x^{\alpha - 1}$.

> /proof/
>
> (1) 利用复合求导计算如下:
> $$
> (a^x)' = (e^{x \ln a})' = e^{x \ln a}(x \ln a)' = a^x \ln a.
> $$
> 利用反函数的导数公式, 有
> $$
> (\log_a x)' = \frac{1}{(a^y)'|_{y = \log_a x}} = \frac{1}{a^{\log_a x} \ln a} = \frac{1}{x \ln a}.
> $$
>
> (2) 当 $x > 0$ 时, 由 (1) 知 $(\ln |x|)' = (\ln x)' = \dfrac{1}{x}$; 当 $x < 0$ 时,
> $$
> (\ln |x|)' = [\ln(-x)]' = \frac{1}{-x}(-x)' = \frac{1}{x}.
> $$
> 如果 $\alpha \ne 0$, $x > 0$, 则
> $$
> (x^\alpha)' = (e^{\alpha \ln x})' = e^{\alpha \ln x}(\alpha \ln x)'
> = x^\alpha \alpha \frac{1}{x} = \alpha x^{\alpha - 1};
> $$
> 如果 $\alpha > 1$, 则 $x = 0$ 处的导数计算如下
> $$
> (x^\alpha)'(0) = \lim_{x \to 0} \frac{x^\alpha}{x} = \lim_{x \to 0} x^{\alpha - 1} = 0;
> $$
> 我们现在考虑 $x < 0$ 的情形. 此时, 要求 $\alpha = \dfrac{p}{q}$ 为有理数, $p,q$ 为互素的整数, 且 $q$ 为奇数. 我们有
> $$
> (x^\alpha)' = ((-1)^{\frac{p}{q}} e^{\alpha \ln |x|})' = (-1)^{\frac{p}{q}} e^{\alpha \ln |x|} (\alpha \ln |x|)'
> = x^\alpha \alpha \frac{1}{x} = \alpha x^{\alpha - 1}.
> $$
> 这样就得到了定义域内所有可导点处的导数.

**命题9**. 在函数的定义域内, 有  

(1) $(\sin x)' = \cos x$, $(\csc x)' = -\csc x \cot x$, $(\arcsin x)' = \dfrac{1}{\sqrt{1 - x^2}}$;  

(2) $(\cos x)' = -\sin x$, $(\sec x)' = \sec x \tan x$, $(\arccos x)' = -\dfrac{1}{\sqrt{1 - x^2}}$;  

(3) $(\tan x)' = \sec^2 x$, $(\arctan x)' = \dfrac{1}{1 + x^2}$;  

(4) $(\cot x)' = -\csc^2 x$, $(\operatorname{arccot} x)' = -\dfrac{1}{1 + x^2}$;

> /proof/
>
> (1) 根据导数的定义, 有
> $$
> (\sin x)' = \lim_{x' \to x} \frac{\sin x' - \sin x}{x' - x}
> = \lim_{x' \to x} 2 \frac{\sin \frac{x' - x}{2}}{x' - x} \cos \frac{x' + x}{2} = \cos x.
> $$
> 由推论4或复合函数求导公式, 有
> $$
> (\csc x)' = \left(\frac{1}{\sin x}\right)' = -\frac{1}{\sin^2 x}(\sin x)'
> = -\frac{1}{\sin^2 x} \cos x = -\csc x \cot x.
> $$
> 由反函数求导公式, 有
> $$
> (\arcsin x)' = \frac{1}{\cos \arcsin x} = \frac{1}{\sqrt{1 - \sin^2 \arcsin x}} = \frac{1}{\sqrt{1 - x^2}}.
> $$
>
> (2) 我们可以象 $\sin x$ 那样利用三角函数和差公式去求 $\cos x$ 的导数, 也可以直接利用复合函数求导:
> $$
> (\cos x)' = \left(\sin\left(\frac{\pi}{2} - x\right)\right)' = \cos\left(\frac{\pi}{2} - x\right)\left(\frac{\pi}{2} - x\right)' = -\sin x,
> $$
> 因此
> $$
> (\csc x)' = -\frac{1}{\cos^2 x}(-\sin x) = \sec x \tan x,
> $$
> 又因为 $\arcsin x + \arccos x = \dfrac{\pi}{2}$, 故
> $$
> (\arccos x)' = \left(\frac{\pi}{2} - \arcsin x\right)' = -\frac{1}{\sqrt{1 - x^2}}.
> $$
>
> (3) 由推论4及上面的计算, 有
> $$
> (\tan x)' = \frac{\cos x \cos x - \sin x(-\sin x)}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x.
> $$
> 由反函数求导公式, 有
> $$
> (\arctan x)' = \frac{1}{\sec^2 \arctan x} = \frac{1}{1 + \tan^2 \arctan x} = \frac{1}{1 + x^2}.
> $$
>
> (4) 由推论4及上面的计算, 有
> $$
> (\cot x)' = \frac{(-\sin x)\sin x - \cos x \cos x}{\sin^2 x} = -\csc^2 x,
> $$
> 由反函数求导公式, 有
> $$
> (\operatorname{arccot} x)' = \frac{1}{-\csc^2 \operatorname{arccot} x} = -\frac{1}{1 + \cot^2 \operatorname{arccot} x} = -\frac{1}{1 + x^2}.
> $$
> 这就得到了三角函数的导数公式.

我们如下定义一类所谓的双曲函数, 首先是双曲正弦 $\sinh x$ 和双曲余弦 $\cosh x$:
$$
\sinh x = \frac{e^x - e^{-x}}{2},\quad \cosh x = \frac{e^x + e^{-x}}{2};
$$
然后是双曲正切 $\tanh x$ 和双曲余切 $\coth x$:
$$
\tanh x = \frac{\sinh x}{\cosh x},\quad \coth x = \frac{\cosh x}{\sinh x};
$$
简单的计算表明, 双曲函数之间满足如下关系
$$
\sinh(x + y) = \sinh x \cdot \cosh y + \cosh x \cdot \sinh y,
$$

$$
\sinh(x - y) = \sinh x \cdot \cosh y - \cosh x \cdot \sinh y,
$$

$$
\cosh(x + y) = \cosh x \cdot \cosh y + \sinh x \cdot \sinh y,
$$

$$
\cosh(x - y) = \cosh x \cdot \cosh y - \sinh x \cdot \sinh y,
$$

以及
$$
\cosh^2 x - \sinh^2 x = 1,\quad 1 - (\tanh x)^2 = \frac{1}{\cosh^2 x},\quad (\coth x)^2 - 1 = \frac{1}{\sinh^2 x}.
$$
双曲函数的导数计算如下:

**命题10**. $(\sinh x)' = \cosh x$, $(\cosh x)' = \sinh x$, $(\tanh x)' = 1 - (\tanh x)^2$, $(\coth x)' = 1 - (\coth x)^2$.

> /proof/  利用 $e^x$ 的导数直接计算即可
