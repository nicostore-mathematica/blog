---
title: Lesson 2 数学基础 II
permalink: /analytical-mechanics/lesson-2/
createTime: 2025/12/14 16:29:30
---

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
> \frac{\partial L}{\partial f''} \delta f'' &= \frac{\partial L}{\partial f''} \frac{d^2}{dt^2} \delta f = \frac{d}{dt} \left(\frac{\partial L}{\partial f''} \frac{d}{dt} \delta f\right) - \frac{d}{dt} \left(\frac{\partial L}{\partial f''}\right) \frac{d}{dt} \delta f \\\\
> &= \underbrace{\frac{d}{dt} \left[\frac{\partial L}{\partial f''} \delta f' - \frac{d}{dt} \left(\frac{\partial L}{\partial f''}\right) \delta f\right]}_{\text{Total Derivative}} + \frac{d^2}{dt^2} \left(\frac{\partial L}{\partial f''}\right) \delta f.
> \end{aligned}
> $$
>
> 因此
>
> $$
> \begin{aligned}
> \delta S &= \int_{t_1}^{t_2} dt \left[\frac{\partial L}{\partial f} \delta f - \frac{d}{dt} \left(\frac{\partial L}{\partial f'}\right) \delta f + \frac{d^2}{dt^2} \left(\frac{\partial L}{\partial f''}\right) \delta f + \cdots + \frac{dB}{dt}\right] \\\\
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

这是关于 $f(t)$ 的二阶微分方程，被称为变分问题的欧拉-拉格朗日方程（Euler-Lagrange equation）.其意义是，泛函在 $f = f(t)$ 处取得极值的必要条件是 $f(t)$ 满足二阶微分方程.

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
\delta S &= \iint dt dx \delta L\left(t, x, f, \frac{\partial f}{\partial t}, \frac{\partial f}{\partial x}\right) \\\\
&= \iint dt dx \left[\frac{\partial L}{\partial f} \delta f + \frac{\partial L}{\partial (\partial f/\partial t)} \delta\left(\frac{\partial f}{\partial t}\right) + \frac{\partial L}{\partial (\partial f/\partial x)} \delta\left(\frac{\partial f}{\partial x}\right)\right] \\\\
&\simeq \iint dt dx \left[\frac{\partial L}{\partial f} - \frac{\partial}{\partial t} \left(\frac{\partial L}{\partial (\partial f/\partial t)}\right) - \frac{\partial}{\partial x} \left(\frac{\partial L}{\partial (\partial f/\partial x)}\right)\right] \delta f,
\end{aligned}
$$

所以泛函取极值的必要条件即

$$
\frac{\delta S}{\delta f} = \frac{\partial L}{\partial f} - \frac{\partial}{\partial t} \left(\frac{\partial L}{\partial (\partial f/\partial t)}\right) - \frac{\partial}{\partial x} \left(\frac{\partial L}{\partial (\partial f/\partial x)}\right) = 0,
$$

其是 $f(t,x)$ 的偏微分方程.以上讨论对多个多元函数的泛函的推广是直接的.





