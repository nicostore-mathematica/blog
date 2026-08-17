---
title: Lesson 1 数学基础 I
permalink: /analytical-mechanics/lesson-1/
createTime: 2025/12/11 20:57:28
---

## Part 1 $\delta$ 函数

### · 定义

Dirac 引入的 $\delta$-函数的定义由下式给出

$$
\delta(x) = 
\begin{cases}
\infty, & x = 0; \\
0, & x \ne 0.
\end{cases}
$$

除此之外，更为重要的条件是

$$
\int_{-\infty}^{\infty} \delta(x)\, dx = 1.
$$

在数学上，$\delta$-函数可以通过所谓分布 (Distribution) 理论严格化.它实际上是一个泛函.

在实际计算中，为了方便起见，$\delta$-函数常常用某些函数的极限形式来表达.在这里，我们给出其最常用的几种表达方式.

(1) 首先，我们有

$$
\lim_{\sigma \to 0} \frac{1}{\sqrt{2\pi\sigma}} \exp\left(-\frac{x^2}{2\sigma}\right) = \delta(x).
$$

实际上，当 $\sigma \to 0$ 时，$\delta$-函数的定义式显然是满足的.又由于

$$
\begin{aligned}
&\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi\sigma}} \exp\left(-\frac{x^2}{2\sigma}\right)\, dx = \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi\sigma}} \exp\left[-\left(\frac{x}{\sqrt{2\sigma}}\right)^2\right]\, dx \\
&= \frac{1}{\sqrt{\pi}} \int_{-\infty}^{\infty} \exp(-\tilde{x}^2)\, d\tilde{x} = \frac{1}{\sqrt{\pi}} \sqrt{\pi} = 1.
\end{aligned}
$$

(2) 其次，我们有

$$
\lim_{\alpha \to \infty} \frac{\sin \alpha x}{\pi x} = \delta(x).
$$

为了证明这一表达式，我们注意到，当 $\alpha \to \infty$ 时，这一极限形式地满足 $\delta$-函数的定义. 但是，为了证明它的积分等于 1，我们需要做一些准备工作.

首先，我们注意到积分公式

$$
I = \int_0^{\infty} e^{-\gamma x} \cos \beta x\, dx = \frac{\gamma}{\beta^2 + \gamma^2}, \quad \gamma > 0
$$

成立.这是由于连续利用分步积分公式，我们有

$$
\begin{aligned}
I &= \int_0^{\infty} e^{-\gamma x} \cos \beta x\, dx = e^{-\gamma x} \frac{\sin \beta x}{\beta} \Big|_0^{\infty} + \frac{\gamma}{\beta} \int_0^{\infty} e^{-\gamma x} \sin \beta x\, dx \\\\
&= \frac{\gamma}{\beta} \int_0^{\infty} e^{-\gamma x} \sin \beta x\, dx = -\frac{\gamma}{\beta^2} e^{-\gamma x} \cos \beta x \Big|_0^{\infty} - \frac{\gamma^2}{\beta^2} \int_0^{\infty} e^{-\gamma x} \cos \beta x\, dx \\\\
&= \frac{\gamma}{\beta^2} - \frac{\gamma^2}{\beta^2} I.
\end{aligned}
$$

移项后，我们有

$$
\left(1 + \frac{\gamma^2}{\beta^2}\right) I = \frac{\gamma}{\beta^2}.
$$

将此式的两边同除以 $\left(1 + \dfrac{\gamma^2}{\beta^2}\right)$ 后，我们即可得到公式.

> 现在，我们将公式
>
> $$
> I = \int_0^{\infty} e^{-\gamma x} \cos \beta x\, dx = \frac{\gamma}{\beta^2 + \gamma^2}, \quad \gamma > 0
> $$
>
> 两边的变量 $\beta$ 从 0 积分到 $\alpha$.我们得到
>
> $$
> \begin{aligned}
> \int_0^{\alpha} d\beta \left(\int_0^{\infty} e^{-\gamma x} \cos \beta x\, dx\right) &= \int_0^{\infty} dx\, e^{-\gamma x} \left(\int_0^{\alpha} d\beta \cos \beta x\right) \\\\
> &= \int_0^{\infty} dx\, e^{-\gamma x} \frac{\sin \alpha x}{x} \\\\
> &= \int_0^{\alpha} d\beta \frac{\gamma}{\beta^2 + \gamma^2} \\\\
> &= \arctan \frac{\alpha}{\gamma}.
> \end{aligned}
> $$
>
> 因此，我们有
>
> $$
> \lim_{\gamma \to 0} \int_0^{\infty} dx\, e^{-\gamma x} \frac{\sin \alpha x}{x} = \int_0^{\infty} dx\, \frac{\sin \alpha x}{x} = \lim_{\gamma \to 0} \arctan \frac{\alpha}{\gamma} = \arctan \infty = \frac{\pi}{2}.
> $$
>
> 现在，我们可以完成我们的证明了.我们有
>
> $$
> \int_{-\infty}^{\infty} \frac{\sin \alpha x}{\pi x}\, dx = 2 \int_0^{\infty} \frac{\sin \alpha x}{\pi x}\, dx = \frac{2}{\pi} \cdot \frac{\pi}{2} = 1.
> $$
>
> 因此，命题得证.

(3) 接下来，我们有

$$
\frac{1}{2\pi} \int_{-\infty}^{\infty} e^{ikx}\, dk = \delta(x).
$$

事实上，直接的计算给出

$$
\begin{aligned}
\frac{1}{2\pi} \int_{-\infty}^{\infty} e^{ikx}\, dk &= \lim_{\alpha \to \infty} \frac{1}{2\pi} \int_{-\alpha}^{\alpha} e^{ikx}\, dk = \lim_{\alpha \to \infty} \frac{1}{2\pi} \frac{e^{ikx}}{ix} \Big|_{-\alpha}^{\alpha} \\\\
&= \lim_{\alpha \to \infty} \frac{1}{\pi} \frac{e^{i\alpha x} - e^{-i\alpha x}}{2ix} = \lim_{\alpha \to \infty} \frac{1}{\pi} \frac{\sin \alpha x}{x} = \delta(x).
\end{aligned}
$$

(4) 最后，我们有

$$
\lim_{\epsilon \to 0^+} \frac{1}{\pi} \frac{\epsilon}{x^2 + \epsilon^2} = \delta(x).
$$

首先，当 $x \ne 0$ 时，上式趋向于零.而当 $x = 0$ 时，上式为 $\infty$.其次，我们有

$$
\lim_{\epsilon \to 0^+} \int_{-\infty}^{\infty} \frac{1}{\pi} \frac{\epsilon}{x^2 + \epsilon^2}\, dx = \lim_{\epsilon \to 0^+} \frac{1}{\pi} \arctan \frac{x}{\epsilon} \Big|_{-\infty}^{\infty} = \frac{1}{\pi} [\arctan \infty - \arctan (-\infty)] = 1.
$$

因此，上式成立.

### · 性质

(1) $\delta$-函数是偶函数.即我们有

$$
\delta(-x) = \delta(x).
$$

(2) 对于任何连续函数 $f(x)$，下面的等式

$$
\int_{-\infty}^{\infty} f(x) \delta(x)\, dx = f(0)
$$

成立.

(3) 对于任何连续函数 $f(x)$，下面的等式

$$
\int_{-\infty}^{\infty} f(x) \delta(x - a)\, dx = f(a)
$$

成立.

(4) 
$$
\delta(ax) = \frac{1}{|a|} \delta(x)
$$

> 这是由于，对于任何连续函数 $f(x)$，利用 $\delta$-函数是偶函数这一事实，我们有
>
> $$
> \int_{-\infty}^{\infty} f(x) \delta(ax)\, dx = \int_{-\infty}^{\infty} f(x) \delta(|a|x)\, dx.
> $$
>
> 现在令 $|a|x = x'$，我们有
>
> $$
> \int_{-\infty}^{\infty} f(x) \delta(ax)\, dx = \frac{1}{|a|} \int_{-\infty}^{\infty} f\left(\frac{x'}{|a|}\right) \delta(x')\, dx' = \frac{1}{|a|} f(0) = \int_{-\infty}^{\infty} f(x) \left(\frac{1}{|a|} \delta(x)\right)\, dx.
> $$
>
> 因此，上式成立.

(5) 考虑一个二次以上可导的函数 $\varphi(x)$.设 $\{x_i\}$ 为其单零点的集合.即在任一点 $x_i$ 处，我们有

$$
\varphi(x_i) = 0, \quad \varphi'(x_i) \ne 0.
$$

那么，我们有

$$
\delta(\varphi(x)) = \sum_i^N \frac{\delta(x - x_i)}{|\varphi'(x_i)|}.
$$

按照定义，$\delta$-函数仅在 $\varphi(x) = 0$ 处不为零，因此，对于任何连续函数 $f(x)$，我们有

$$
\int_{-\infty}^{\infty} f(x) \delta(\varphi(x))\, dx = \sum_i^N \int_{x_i - \epsilon_i}^{x_i + \epsilon_i} f(x) \delta(\varphi(x))\, dx \equiv \sum_i^N F_i.
$$

下面，我们取某一个积分值 $F_i$ 为例.

> 由于 $\varphi'(x_i) \ne 0$，我们总可以将 $\epsilon_i$ 取得到如此之小，使得 $\varphi(x)$ 在区间 $(x_i - \epsilon_i, x_i + \epsilon_i)$ 上是单调的.因此，我们可以引入新的变量 $u = \varphi(x)$，使得
>
> $$
> u_1 = \varphi(x_i - \epsilon_i), \quad u_2 = \varphi(x_i) = 0, \quad u_3 = \varphi(x_i + \epsilon_i).
> $$
>
> 特别是当 $\varphi'(x_i) > 0$ 时，我们有
>
> $$
> u_{\max} = u_3, \quad u_{\min} = u_1.
> $$
>
> 而当 $\varphi'(x_i) < 0$ 时，我们又有
>
> $$
> u_{\max} = u_1, \quad u_{\min} = u_3.
> $$
>
> 利用这些记号，我们可以将 $F_i$ 改写成
>
> $$
> \begin{aligned}
> F_i &= \int_{x_i - \epsilon_i}^{x_i + \epsilon_i} f(x) \delta(\varphi(x))\, dx = \int_{u_{\min}}^{u_{\max}} f(\varphi^{-1}(u)) \delta(u)\, \frac{du}{|\varphi'(\varphi^{-1}(u))|} \\
> &= \frac{f(\varphi^{-1}(u_2))}{|\varphi'(\varphi^{-1}(u_2))|} = \frac{f(x_i)}{|\varphi'(x_i)|}.
> \end{aligned}
> $$
>
> 因此，积分
>
> $$
> \int_{-\infty}^{\infty} f(x) \delta(\varphi(x))\, dx = \sum_i^N \int_{x_i - \epsilon_i}^{x_i + \epsilon_i} f(x) \delta(\varphi(x))\, dx \equiv \sum_i^N F_i.
> $$
>
> 可以被写作
>
> $$
> \begin{aligned}
> &\int_{-\infty}^{\infty} f(x) \delta(\varphi(x))\, dx = \sum_i^N \int_{x_i - \epsilon_i}^{x_i + \epsilon_i} f(x) \delta(\varphi(x))\, dx = \sum_i^N \frac{f(x_i)}{|\varphi'(x_i)|} \\
> &= \int_{-\infty}^{\infty} f(x) \sum_{i=1}^N \left(\frac{\delta(x - x_i)}{|\varphi'(x_i)|}\right)\, dx.
> \end{aligned}
> $$
>
> 这样，我们就证明了我们上述公式的正确性.

## Part 2 变分法

函数是具体的映射关系.给两个集合 $X$ 和 $Y$，在两个集合的元素 $t \in X$ 和 $y \in Y$ 之间建立一个对应关系即映射，而这个映射关系的具体形式就是函数.

$$
f:\quad t \mapsto y = f(t).
$$

集合和映射可以说是整个数学中最基本的概念，大量的概念——无论他们看上去千差万别，其实都是某种映射.

### · 泛函

小球从两端固定的光滑轨道滚下，不同的轨道形状所需的下落时间不同，而这产生了一个自然的问题，什么形状的轨道，小球下落时间最短？历史上，变分法的提出就是为了解决最速下降曲线（Brachistochrone curve）问题.

![最速下降曲线](https://pic1.imgdb.cn/item/693e2c4825ec9c13612c79e9.png)

由此提出泛函（functional）的概念，所谓泛函，即函数到数的映射.

两个集合 $X$ 和 $Y$ 之间的映射可以有很多种，换句话说可以有很多种函数 $y = f_1(t), y = f_2(t), y = f_3(t), \cdots$，所有这些函数自然也构成一个集合 $\mathcal{F} = \{f_1, f_2, f_3, \cdots\}$，其中的元素就是某个具体的函数 $f \in \mathcal{F}$.因此函数 $f$ 的泛函记作 $S[f]$，即
$$
f \mapsto S = S[f],\quad \mathcal{F} \to \mathbf{C},
$$

这里 $\mathbf{C}$ 代表复数集合（自然也包括实数）.泛函既然也是一种映射，那么如果把泛函所“输入”的函数也当成某种“广义的数”，则泛函也可被视为一种函数.只不过普通函数是“数的函数”，而泛函则是“函数的函数”.这也解释了“泛函”这个名词的由来.

根据泛函的定义——输入函数、输出数，就可以写出很多泛函的具体例子来.例如，平面上曲线方程记为 $y = f(x)$，则两点之间的曲线长度 $S$ 为曲线方程 $f(x)$ 的泛函

$$
S = S[f] = \int_{\vec{l}} dx \sqrt{1 + (f'(x))^2}.
$$

三维空间中曲面方程记为 $z = \phi(x,y)$，则曲面面积 $A$ 为二元函数 $\phi(x,y)$ 的泛函

$$
A = A[\phi] = \iint_{\sigma} dx dy \sqrt{1 + \left(\frac{\partial \phi}{\partial x}\right)^2 + \left(\frac{\partial \phi}{\partial y}\right)^2}.
$$

由这些简单的例子可见，“泛函”的概念并不抽象，实际上我们已经在不知不觉中接触了大量的泛函.有趣的是，根据泛函的定义，函数 $f(x)$ 在某一点 $x_0$ 的值 $f(x_0)$，当然也是函数自身的泛函，这就是所谓“$\delta$-函数”.

经典力学中所遇到的泛函通常可以写成积分形式：

$$
\boxed{S[f] = \int_{t_1}^{t_2} dt\, L\left(t, f(t), f'(t), f''(t), \cdots\right)},
$$

这里被积函数 $L = L(t, f(t), f'(t), f''(t), \cdots)$ 是函数 $f(t)$ 及其导数的一般函数.

### · 变分

泛函为函数到数的映射，函数本身的无穷小变化、以及由之引起的泛函的变化即变分. 若函数 $f(t)$ 变成了另外一个函数 $f(t) \to \tilde{f}(t)$，且假设两者相差无穷小，则函数 $f(t)$ 的变分 $\delta f$ 定义为

$$
\boxed{\delta f(t) := \tilde{f}(t) - f(t)}.
$$

符号 “$\delta$” 代表变分运算，即对函数本身进行无穷小的变化.变分运算的结果，是一个无穷小的函数.变分 $\delta f(t)$ 作为另一个函数，和 $f(t)$ 并没有什么关系.

函数的变分 $\delta f(t)$ 和微分 $df(t)$ 同为无穷小变化，但有本质的区别.

![](https://pic1.imgdb.cn/item/693e2c4825ec9c13612c79ea.png)

函数的微分 $df(t)$ 是由自变量 $t$ 的变化引起的，函数本身固定不变，

$$
f(t) \xrightarrow{t \to \tilde{t} = t + dt} f(t + dt) = f(t) + df(t) + \cdots.
$$

而函数的变分 $\delta f(t)$ 是因为函数本身发生了变化，而与自变量 $t$ 无关，

$$
f(t) \to \tilde{f}(t) = (f + \delta f)(t) = f(t) + \delta f(t).
$$

函数的变分和微分同为无穷小变化，形式上的运算规则基本相同.例如，$\delta(f^n) = n f^{n-1} \delta f$，对于函数 $f_1$ 和 $f_2$ 和常数 $a, b$，有

$$
\delta(a f_1 + b f_2) = a \delta f_1 + b \delta f_2,\quad \delta(f_1 f_2) = (\delta f_1) f_2 + f_1 (\delta f_2),
$$

等等.

另一个重要且非常有用的性质是，变分和微分可以交换顺序，即“微分的变分 = 变分的微分”，

$$
\boxed{\delta(df) = d(\delta f)}.
$$

可做直观证明，如图所示，考察 $f$ 的值在 $A$ 点和 $B'$ 点的差，即 $\tilde{f}(t + dt) - f(t)$.

![变分与微分运算可交换顺序](https://pic1.imgdb.cn/item/693e2c4825ec9c13612c79e8.png)

若先微分后变分（路径 $A \to B \to B'$），精确到一阶小量，有

$$
\begin{aligned}
l_{C'B} &\equiv f(t + dt) - f(t) = df(t), \\
l_{BB'} &\equiv \tilde{f}(t + dt) - f(t + dt) \\
&= \delta(f(t + dt)) = \delta(f(t) + df(t)) = \delta f(t) + \delta(df(t)),
\end{aligned}
$$

于是

$$
\tilde{f}(t + dt) - f(t) = df(t) + \delta f(t) + \delta(df(t)).
$$

若先变分后微分（路径 $A \to A' \to B'$），精确到一阶小量，有

$$
\begin{aligned}
l_{AA'} &\equiv \tilde{f}(t) - f(t) = \delta f(t), \\
l_{A'C} &\equiv \tilde{f}(t + dt) - \tilde{f}(t) = d(\tilde{f}(t)) = d((f + \delta f)(t)) = df(t) + d(\delta f(t)),
\end{aligned}
$$

于是

$$
\tilde{f}(t + dt) - f(t) = \delta f(t) + df(t) + d(\delta f(t)).
$$

变分和求导运算也可以交换顺序，即“导数的变分 = 变分的导数”：

$$
\boxed{\delta\left(\frac{df(t)}{dt}\right) = \frac{d}{dt}(\delta f(t))},
$$

变分所变化的是函数 $f$ 本身，和函数的自变量 $t$ 无关.
