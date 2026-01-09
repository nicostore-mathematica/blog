---
title: Chapter 1 数学基础
permalink: /analytical-mechanics/chapter-1/
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

## Part 3 泛函导数

### · 定义

函数 $f = f(t)$ 的微分是由自变量 $t$ 的微分引起的：

$$
f(t) \xrightarrow{t \to \tilde{t} = t + \epsilon dt} f(\tilde{t}) \equiv f(t + \epsilon dt)
$$
$$
= f(t) + \epsilon df(t) + \frac{\epsilon^2}{2} d^2 f(t) + \frac{\epsilon^3}{3!} d^3 f(t) + \cdots,
$$

其中 $\epsilon^n$ 项即函数的 $n$ 阶微分.函数的 $n$ 阶导数则由函数的 $n$ 阶微分与 $dt$ 之间的关系给出，对于一阶导数，

$$
df(t) = \frac{df(t)}{dt} dt,
$$

高阶导数即 $d^n f(t) = \dfrac{d^n f(t)}{dt^n} (dt)^n$.只要计算出函数的各阶微分，即可读出相应的各阶导数.

泛函导数从形式上完全是对普通函数导数的类比.

> 对于泛函 $S = S[f]$，其变分是由函数的变分引起的：
>
> $$
> S[f] \xrightarrow{f \to \tilde{f} = f + \epsilon \delta f} S[\tilde{f}] \equiv S[f + \epsilon \delta f]
> $$
>
> $$
> = S[f] + \epsilon \delta S[f] + \frac{\epsilon^2}{2} \delta^2 S[f] + \frac{\epsilon^3}{3!} \delta^3 S[f] + \cdots.
> $$
>
> 这里 $\epsilon^n$ 项即被称为泛函的 $n$ 阶变分 $\delta^n S[f]$.仿照函数的 $n$ 阶导数即可定义 $n$ 阶泛函导数.
>
> $$
> \boxed{\delta S[f] := \int dt \frac{\delta S}{\delta f(t)} \delta f(t)}.
> $$
>
> 这里 $\delta S$ 是泛函的一阶变分，$\dfrac{\delta S}{\delta f(t)}$ 即一阶泛函导数（the first order functional derivative）.

可以看出，一阶泛函导数的作用，是将函数的变分 $\delta f(t)$（无穷小的函数）映射到泛函的一阶变分 $\delta S$（无穷小的数）.

一阶泛函变分可以和多元函数 $F = F(x_1, \cdots, x_n)$ 的一阶微分 $dF = \displaystyle\sum_{n=1}^\infty \dfrac{\partial F}{\partial x_n} dx_n$ 相类比.

![](https://pic1.imgdb.cn/item/693e6e18284ce2d2dc10faa5.png)

类比函数的高阶导数，高阶泛函导数定义为

$$
\delta^2 S[f] := \int dt_1 \int dt_2 \frac{\delta^2 S}{\delta f(t_1) \delta f(t_2)} \delta f(t_1) \delta f(t_2),
$$
$$
\delta^3 S[f] := \int dt_1 \int dt_2 \int dt_3 \frac{\delta^3 S}{\delta f(t_1) \delta f(t_2) \delta f(t_3)} \delta f(t_1) \delta f(t_2) \delta f(t_3),
$$
$$
\vdots
$$

这里 $\dfrac{\delta^2 S}{\delta f(t_1)\delta f(t_2)}$ 和 $\dfrac{\delta^3 S}{\delta f(t_1)\delta f(t_2)\delta f(t_3)}$ 即表示 $S[f]$ 对 $f$ 的二阶和三阶泛函导数.

例如，其中二阶泛函导数的作用是，将函数的变分 $\delta f(t)$ 映射为泛函的二阶变分 $\delta^2 S$（二阶无穷小的数）.

更高阶的情形依此类推.在经典力学中，大多数情况下我们只关心一阶泛函导数.

### · 分部积分

> 根据上面的讨论，泛函导数归结于计算泛函的变分，而困难也在于此.换一个角度，在泛函 $S[f + \epsilon \delta f]$ 中，$\epsilon$ 是个参数，而泛函 $S$ 也是一个数，其值依赖于 $\epsilon$.所以 $S[f + \epsilon \delta f]$ 可视为 $\epsilon$ 的普通函数.
>
> 于是 $S[f] + \epsilon \delta S[f] + \dfrac{\epsilon^2}{2} \delta^2 S[f] + \dfrac{\epsilon^3}{3!} \delta^3 S[f] + \cdots.$ 可以视为 $S[f + \epsilon \delta f]$ 相对于 $\epsilon$ 的普通泰勒展开：
> $$
> S[f + \epsilon \delta f] = S[f] + \epsilon \left.\frac{d}{d\epsilon} S[f + \epsilon \delta f]\right|_{\epsilon=0} + \frac{\epsilon^2}{2!} \left.\frac{d^2}{d\epsilon^2} S[f + \epsilon \delta f]\right|_{\epsilon=0} + \cdots.
> $$
>
> 而泰勒展开和普通导数我们再熟悉不过.对于一阶泛函导数，
>
> $$
> \boxed{\delta S \equiv \left.\frac{d}{d\epsilon} S[f + \epsilon \delta f]\right|_{\epsilon=0} = \int dt \frac{\delta S}{\delta f(t)} \delta f(t)}.
> $$
>
> 高阶泛函导数可以类似写出.
>
> 对于此类形式的泛函，
>
> $$
> S[f + \epsilon \delta f] = \int_{t_1}^{t_2} dt L(t, f + \epsilon \delta f, f' + \epsilon \delta f', f'' + \epsilon \delta f'', \cdots),
> $$
>
> 于是由
> $$
> \boxed{\delta S \equiv \left.\frac{d}{d\epsilon} S[f + \epsilon \delta f]\right|_{\epsilon=0} = \int dt \frac{\delta S}{\delta f(t)} \delta f(t)}.
> $$
> 得到
> $$
> \begin{aligned}
> \delta S &= \int_{t_1}^{t_2} dt \left.\frac{d}{d\epsilon} L(t, f + \epsilon \delta f, f' + \epsilon \delta f', f'' + \epsilon \delta f'', \cdots)\right|_{\epsilon=0} \\
> &= \int_{t_1}^{t_2} dt \left(\frac{\partial L}{\partial f} \delta f + \frac{\partial L}{\partial f'} \delta f' + \frac{\partial L}{\partial f''} \delta f'' + \cdots\right).
> \end{aligned}
> $$
>
> 上式中的被积函数不是别的，正是 $L$ 的一阶变分 $\delta L$，其与微分 $dL$ 的形式全同，只是微分被换成了变分.这意味着
> $$
> \delta S = \delta \left(\int_{t_1}^{t_2} dt L\right) = \int_{t_1}^{t_2} dt \delta L,
> $$
>
> 即变分符号可以移到积分号内.

算式中出现了函数导数的变分 $\delta f', \delta f'', \cdots$，这时该如何处理？

这就需要用到变分法中非常重要的技巧——**分部积分**（integration by parts）.

> 其基本思路是，利用变分与求导可以交换顺序的性质，将作用于 $\delta f$ 的导数移除，代价是产生额外的“全导数”项.例如，对于正比于 $\delta f'$ 的项，
> $$
> \frac{\partial L}{\partial f'} \delta f' \xrightarrow{\boxed{\delta\left(\frac{df(t)}{dt}\right) = \frac{d}{dt}(\delta f(t))}} \frac{\partial L}{\partial f'} \frac{d}{dt} \delta f = \underbrace{\frac{d}{dt} \left(\frac{\partial L}{\partial f'} \delta f\right)}_{\text{Total Derivative}} - \frac{d}{dt} \left(\frac{\partial L}{\partial f'}\right) \delta f.
> $$
>
> 类似地，
>
> $$
> \begin{aligned}
> \frac{\partial L}{\partial f''} \delta f'' &= \frac{\partial L}{\partial f''} \frac{d^2}{dt^2} \delta f = \frac{d}{dt} \left(\frac{\partial L}{\partial f''} \frac{d}{dt} \delta f\right) - \frac{d}{dt} \left(\frac{\partial L}{\partial f''}\right) \frac{d}{dt} \delta f \\
> &= \underbrace{\frac{d}{dt} \left[\frac{\partial L}{\partial f''} \delta f' - \frac{d}{dt} \left(\frac{\partial L}{\partial f''}\right) \delta f\right]}_{\text{Total Derivative}} + \frac{d^2}{dt^2} \left(\frac{\partial L}{\partial f''}\right) \delta f.
> \end{aligned}
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \delta S &= \int_{t_1}^{t_2} dt \left[\frac{\partial L}{\partial f} \delta f - \frac{d}{dt} \left(\frac{\partial L}{\partial f'}\right) \delta f + \frac{d^2}{dt^2} \left(\frac{\partial L}{\partial f''}\right) \delta f + \cdots + \frac{dB}{dt}\right] \\
> &= \int_{t_1}^{t_2} dt \left[\frac{\partial L}{\partial f} - \frac{d}{dt} \left(\frac{\partial L}{\partial f'}\right) + \frac{d^2}{dt^2} \left(\frac{\partial L}{\partial f''}\right) + \cdots\right] \delta f + B\big|_{t_1}^{t_2},
> \end{aligned}
> $$
>
> 这里 $\dfrac{dB}{dt}$ 代表全导数项，积分后得到的 $B\big|_{t_1}^{t_2}$ 被称作边界项（boundary term），其在积分的端点（边界）处取值.
>
> 由上面的推导知，若泛函的被积函数 $L$ 包含 $f(t)$ 的最高 $n$ 阶导数，则边界项 $B$ 包含 $\delta f(t)$ 的最高 $(n-1)$ 阶导数.因此变分法中的一个基本假设是，如果泛函的被积函数包含最高 $n$ 阶导数，则在积分端点（边界）处，函数及其直至 $(n-1)$ 阶导数的变分为零，即
> $$
> \delta f\big|_{t_1} = \delta f\big|_{t_2} = 0,
> $$
>
> $$
> \delta f'\big|_{t_1} = \delta f'\big|_{t_2} = 0,
> $$
>
> $$
> \vdots
> $$
>
> $$
> \delta f^{(n-1)}\big|_{t_1} = \delta f^{(n-1)}\big|_{t_2} = 0.
> $$
>
> 在这样的假设下，边界项恒为零 $B\big|_{t_1} = B\big|_{t_2} = 0$.两个式子“差一个全导数”、或者两个积分“差一个边界项”这件事在变分法中非常重要，因此通常用一个专门的符号 “$\simeq$” 来表示，即
>
> $$
> \boxed{L_1 \simeq L_2,\quad \Leftrightarrow\quad L_1 = L_2 + \text{Total Derivative}},
> $$
>
> 以及
>
> $$
> \boxed{S_1 \simeq S_2,\quad \Leftrightarrow\quad S_1 = S_2 + \text{boundary term}}.
> $$
>
> 基于上面的假设，对于泛函导数的计算来说，边界项无关紧要.

在实际计算中，都是默认直接丢掉边界项，而不用写出其具体形式，例如：
$$
\frac{\partial L}{\partial f'} \delta f' \simeq -\frac{d}{dt} \left(\frac{\partial L}{\partial f'}\right) \delta f,\quad \frac{\partial L}{\partial f''} \delta f'' \simeq \frac{d^2}{dt^2} \left(\frac{\partial L}{\partial f''}\right) \delta f.
$$

基于同样的理由，泛函的积分上下限也经常被省略，即写成 $S = \int dt\, L$.

### · 计算

变分原理是整个分析力学（甚至整个物理学）的第一原理，而变分法的核心就是计算一阶泛函导数，或者说，如何计算泛函的一阶变分，并将其写成
$$
{\delta S[f] := \int dt \frac{\delta S}{\delta f(t)} \delta f(t)}.
$$
的形式.根据以上的讨论，对于
$$
{S[f] = \int_{t_1}^{t_2} dt\, L\left(t, f(t), f'(t), f''(t), \cdots\right)},
$$
形式的泛函，可以总结一下计算一阶泛函导数的手续.
> (1). 将变分符号 “$\delta$” 移到积分号内：
> $$
> \delta S[f] = \int dt\ \delta L(t, f(t), f'(t), f''(t), \cdots).
> $$
>
> (2). 按照类似复合函数求导的规则，计算 $\delta L$：
>
> $$
> \delta S[f] = \int dt \left(\frac{\partial L}{\partial f} \delta f + \frac{\partial L}{\partial f'} \delta f' + \frac{\partial L}{\partial f''} \delta f'' + \cdots\right).
> $$
> 这里变分 $\delta L$ 和微分 $dL$ 的形式全同，只是微分被换成了变分.
>
> (3). 做分部积分，将 $\delta f$ 的导数移除.这是计算一阶泛函导数最关键的一步.在实际操作中，只需要不断地将 $\delta f$ 的导数移除，并不需要关注全导数项的具体形式.
>
> (4). 提取 $\delta f$ 前的系数，即一阶泛函导数.
>
> 根据以上手续，经过分部积分，可以得出：
> $$
> \delta S \simeq \int dt \left[\frac{\partial L}{\partial f} - \frac{d}{dt} \left(\frac{\partial L}{\partial f'}\right) + \frac{d^2}{dt^2} \left(\frac{\partial L}{\partial f''}\right) + \cdots\right] \delta f,
> $$
> 从中读出一阶泛函导数即
> $$
> \boxed{\frac{\delta S}{\delta f} = \frac{\partial L}{\partial f} - \frac{d}{dt} \left(\frac{\partial}{\partial f'}\right) + \frac{d^2}{dt^2} \left(\frac{\partial L}{\partial f''}\right) + \cdots}.
> $$
> 

需要强调的是，上式虽然形式绝对正确，但是最好不要把偏导数 $\dfrac{\partial L}{\partial f}, \dfrac{\partial L}{\partial f'}, \dfrac{\partial L}{\partial f''}, \cdots$ 等等先计算出来再套入，而应该按照上面的“变分-分部积分”操作步骤，这也是实际工作中计算泛函导数的方法.

/example/

> 考虑泛函
>
> $$
> S[f] = \int dt\, \frac{1}{2} \left[(f'(t))^2 - (f(t))^2\right].
> $$
>
> 有
>
> $$
> \begin{aligned}
> \delta S[f] &= \int dt\, \frac{1}{2} \delta(f'^2 - f^2) = \int dt\, (f' \delta f' - f \delta f) \\
> &\simeq \int dt\, (-f'' \delta f - f \delta f) = -\int dt\, (f'' + f) \delta f(t),
> \end{aligned}
> $$
>
> 因此一阶泛函导数为
>
> $$
> \frac{\delta S}{\delta f(t)} = -f''(t) - f(t).
> $$
>
> 
>
> ***
>
> 考虑泛函
> $$
> S[f] = \int dt\, f(t) f'(t).
> $$
>
> 有
>
> $$
> \delta S[f] = \int dt\, \delta(f f') = \int dt\, (\delta f f' + f \delta f') \simeq \int dt\, (\delta f f' - f' \delta f) \equiv 0,
> $$
>
> 因此一阶泛函导数为零.在这个例子中，出现了泛函导数为零的情况.
>
> 实际上，观察泛函中的被积函数，$f f' = \dfrac{d}{dt} \left(\dfrac{1}{2} f^2\right)$，其自身就是个全导数.
>
> 被积函数中的全导数可以自然舍去，所以 $f f' \simeq 0$ .

## Part 4 泛函极值

现在我们可以尝试回答最速降线问题，实际问题中，我们关心的并不是泛函的全部信息，而往往是泛函的极值.

### · 必要条件

假设泛函 $S[f]$ 在 $f = \bar{f}(t)$ 时取极小（大）值，意味着任何对 $\bar{f}$ 的小偏离 $\bar{f} + \epsilon \delta f$，都会使得 $S[\bar{f} + \epsilon \delta f]$ 的值比 $S[\bar{f}]$ 大（小），

只有当不发生偏离、即 $\delta f = 0$ 时取极值.从另一角度，这等价于 $S[\bar{f} + \epsilon \delta f]$ 作为参数 $\epsilon$ 的普通函数，在 $\epsilon = 0$ 处取极值.

这样就将泛函极值问题转化为普通函数的极值问题.而我们已经知道，普通函数极值即要求其一阶导数为零.结合泛函导数的定义，即有
$$
\delta S[\bar{f}] = \int dt \left.\frac{\delta S[f]}{\delta f}\right|_{\bar{f}} \delta f(t) = 
$$

由此得到泛函在 $f = \bar{f}(t)$ 时取极值的必要条件是其一阶变分为零：

$$
\boxed{\delta S[\bar{f}] = 0}.
$$

其意义是在函数（输入）发生小变化时，泛函的值（输出）不变.等价地，这意味着泛函在 $\bar{f}(t)$ 处的一阶泛函导数为零：

$$
\boxed{\left.\frac{\delta S[f]}{\delta f}\right|_{\bar{f}} = 0}.
$$

需要说明的是，正如一阶导数为零只是函数取极值的必要而非充分条件，同样，一阶泛函导数为零只是泛函取极值的必要而非充分条件.严格来说，$\delta S = 0$ 未必对应泛函一定取极值，但一定是稳恒（stationary）的.

作为变分法到目前的小结，可将多元函数与泛函做一对比：

| 输入 | 输出   | 极值     |
| ---- | ------ | -------- |
| 函数 | $x_n$  | $F(x_n)$ |
| 泛函 | $f(t)$ | $S[f]$   |

### · E-L方程

一类常见的泛函具有如下形式

$$
S[f] = \int dt L(t, f(t), f'(t)).
$$

其特点是，泛函的被积函数 $L$ 最高包含 $f$ 的一阶导数.物理中大部分感兴趣的系统都是这种情形.泛函取极值的必要条件是

$$
-\frac{\delta S}{\delta f} = \boxed{\frac{d}{dt} \left(\frac{\partial L}{\partial f'}\right) - \frac{\partial L}{\partial f} = 0}.
$$

这是关于 $f(t)$ 的二阶微分方程，被称为变分问题的欧拉-拉格朗日方程（Euler-Lagrange equation）.其意义是，泛函 (1.37) 在 $f = f(t)$ 处取得极值的必要条件是 $f(t)$ 满足二阶微分方程.

并不是所有的微分方程都是欧拉-拉格朗日方程，即都对应某个泛函的极值.

> 对 $L$ 直接求全导数，
>
> $$
> \begin{aligned}
> \frac{dL}{dt} &= \frac{\partial L}{\partial t} + \frac{\partial L}{\partial f} f' + \frac{\partial L}{\partial f'} f'' = \frac{\partial L}{\partial t} + \frac{\partial L}{\partial f} f' + \frac{d}{dt} \left(\frac{\partial L}{\partial f'} f'\right) - \frac{d}{dt} \left(\frac{\partial L}{\partial f'}\right) f' \\
> &= \frac{\partial L}{\partial t} - \underbrace{\left[\frac{d}{dt} \left(\frac{\partial L}{\partial f'}\right) - \frac{\partial L}{\partial f}\right]}_{=0} f' + \frac{d}{dt} \left(\frac{\partial L}{\partial f'} f'\right),
> \end{aligned}
> $$
>
> 因此当欧拉-拉格朗日方程满足时，下式也成立
> $$
> \boxed{\frac{d}{dt} \left(\frac{\partial L}{\partial f'} f' - L\right) + \frac{\partial L}{\partial t} = 0},
> $$
> 其可视作欧拉-拉格朗日方程的等价形式.
>
> 一个立即的推论是，若 $L$ 不显含积分变量 $t$，
> $$
> \frac{\partial L}{\partial t} = 0,\quad \Rightarrow\quad \frac{\partial L}{\partial f'} f' - L = \text{Const}.
> $$
> 对于更一般的泛函，取极值的必要条件是
> $$
> \frac{\delta S}{\delta f} = \sum_{n=0} (-1)^n \frac{d^n}{dt^n} \left(\frac{\partial L}{\partial f^{(n)}}\right) = 0.
> $$
> 如果泛函中被积函数 $L$ 包含 $f(t)$ 的最高到 $N$ 阶导数，即 $L = L(t, f, f', \cdots, f^{(N)})$，则上面的求和展开为
> $$
> \frac{\delta S}{\delta f} = \frac{\partial L}{\partial f} - \frac{d}{dx} \left(\frac{\partial L}{\partial f'}\right) + \cdots + (-1)^N \frac{d^N}{dx^N} \left(\frac{\partial L}{\partial f^{(N)}}\right),
> $$
> $\dfrac{\delta S}{\delta f}$ 中 $f(t)$ 的最高阶导数来自最后一项，如果 $\dfrac{\partial L}{\partial f^{(N)}}$ 仍然包含 $f^{(N)}$，即
> $$
> \frac{\partial}{\partial f^{(N)}} \left(\frac{\partial L}{\partial f^{(N)}}\right) = \frac{\partial^2 L}{\partial f^{(N)} \partial f^{(N)}} \ne 0,
> $$
>
> 则 $\dfrac{d^N}{dt^N} \left(\dfrac{\partial L}{\partial f^{(N)}}\right)$ 包含最高至 $f(t)$ 的 $2N$ 阶导数.满足上式的 $L$ 也被称作是非退化（non-degenerate）的.

总之，如果泛函 $S[f]$ 的被积函数 $L$ 含有最高至 $f(t)$ 的 $N$ 阶导数且非退化，则泛函导数 $\dfrac{\delta S}{\delta f}$ 包含最高至 $f(t)$ 的 $2N$ 阶导数，相应泛函极值的欧拉-拉格朗日方程为 $2N$ 阶微分方程.

### · 多元函数

以上所有讨论对于多个独立函数 $f_1(t), f_2(t), \cdots$ 的泛函的推广是直接的.考虑泛函

$$
S = S[f_1, f_2, \cdots] = \int dx L(t, f_1, f_2, \cdots, f_1', f_2', \cdots).
$$

其极值同样要求

$$
\delta S \simeq \int dx \left(\frac{\delta S}{\delta f_1} \delta f_1 + \frac{\delta S}{\delta f_2} \delta f_2 + \cdots\right) = 0.
$$

因为函数 $f_1, f_2, \cdots$ 是独立的，其变分 $\delta f_1, \delta f_2, \cdots$ 也是互相独立的，因此上式成立必然要求每一项的系数都为零，于是泛函取极值即要求

$$
\frac{\delta S}{\delta f_1} = 0,\quad \frac{\delta S}{\delta f_2} = 0,\quad \cdots.
$$

泛函中的函数也可以是多元函数.以单个函数 $f$ 的泛函 $S[f]$ 为例，设 $f$ 是 $t$ 和 $x$ 的二元函数 $f = f(t,x)$.简单起见，我们只考虑 $L$ 含有 $f$ 的一阶导数，泛函具有形式

$$
S[f] = \iint dt dx L\left(t, x, f, \frac{\partial f}{\partial t}, \frac{\partial f}{\partial x}\right).
$$

同样按照之前的步骤，泛函的一阶变分为

$$
\begin{aligned}
\delta S &= \iint dt dx \delta L\left(t, x, f, \frac{\partial f}{\partial t}, \frac{\partial f}{\partial x}\right) \\
&= \iint dt dx \left[\frac{\partial L}{\partial f} \delta f + \frac{\partial L}{\partial (\partial f/\partial t)} \delta\left(\frac{\partial f}{\partial t}\right) + \frac{\partial L}{\partial (\partial f/\partial x)} \delta\left(\frac{\partial f}{\partial x}\right)\right] \\
&\simeq \iint dt dx \left[\frac{\partial L}{\partial f} - \frac{\partial}{\partial t} \left(\frac{\partial L}{\partial (\partial f/\partial t)}\right) - \frac{\partial}{\partial x} \left(\frac{\partial L}{\partial (\partial f/\partial x)}\right)\right] \delta f,
\end{aligned}
$$

所以泛函取极值的必要条件即

$$
\frac{\delta S}{\delta f} = \frac{\partial L}{\partial f} - \frac{\partial}{\partial t} \left(\frac{\partial L}{\partial (\partial f/\partial t)}\right) - \frac{\partial}{\partial x} \left(\frac{\partial L}{\partial (\partial f/\partial x)}\right) = 0,
$$

其是 $f(t,x)$ 的偏微分方程.以上讨论对多个多元函数的泛函的推广是直接的.





