---
url: /complex/complex-6/index.md
---
## Part 1 解析延拓

**解析延拓：**

> 简单来说，解析延拓就是把在已知区域内解析的函数推广到更大的区域上去，或者说解析延拓就是将解析函数的定义域加以扩大。
>
> 具体地，若 $f\_1(z)$ 在区域 $\sigma\_1$ 中解析，$f\_2(z)$ 在 $\sigma\_2$ 中解析，且 $\sigma\_1\cap\sigma\_2=\sigma\_{12}\ne\varnothing$（$\sigma\_{12}$ 可以是一条线），在 $\sigma\_{12}$ 中有 $f\_1(z)\equiv f\_2(z)$，则 $f\_2(z)$ 称为 $f\_1(z)$ 在 $\sigma\_2$ 中的解析延拓；
>
> 同样，$f\_1(z)$ 称为 $f\_2(z)$ 在 $\sigma\_1$ 中的解析延拓。总而言之，$f\_1(z)$ 与 $f\_2(z)$ 互为彼此的解析延拓。

**解析延拓的唯一性定理：**

> 如果 $f\_2^{\mathrm I}(z)$ 和 $f\_2^{\mathrm {II}}(z)$ 都是 $f\_1(z)$ 在 $\sigma\_2$ 中的解析延拓，则在 $\sigma\_2$ 中有 $f\_2^{\mathrm I}(z)=f\_2^{\mathrm {II}}(z)$。

**解析函数的内部唯一性定理：**

> 如果有两个在区域 $G$ 中都解析的函数 $f\_1^{\mathrm I}(z)$ 和 $f\_2^{\mathrm {II}}(z)$，且它们在 $G$ 的一个子区域 $g$ 中恒等，则它们也在整个 $G$ 中恒等。

**利用泰勒级数进行解析延拓：**

> 用泰勒级数进行解析延拓是普遍方法。考虑一个用幂级数定义的解析函数
>
> $$
> f\_1(z)=\sum\_{k=0}^{\infty}z^k,\qquad |z|<1,
> $$
>
> 这个幂级数在 $|z|<1$（记为区域 $\sigma\_1$）解析，在 $|z|=1$ 之外发散。
>
> 容易知道，在以 $O$ 为圆心、半径小于 1 的闭圆上，$\sum\_{k=0}^{\infty}z^k$ 一致收敛于 $\dfrac{1}{1-z}$，因而根据逐项求导性，可求出 $|z|<1$ 内每个点的各阶导数。
>
> 据此，我们可以求出 $f\_1(z)$ 在点 $z=\dfrac{i}{2}$ 处的各阶导数 $f\_1^{(k)}!\left(\dfrac{i}{2}\right)(k=1,2,\ldots)$，由此求出 $f\_1(z)$ 在 $z=\dfrac{i}{2}$ 处的泰勒级数，并把这个新的幂级数记为 $f\_2(z)$：
>
> $$
> f\_2(z)=\sum\_{k=0}^{\infty}\frac{f\_1^{(k)}!\left(\frac{i}{2}\right)}{k!}\left(z-\frac{i}{2}\right)^k
> \=\sum\_{k=0}^{\infty}\frac{1}{\left(1-\frac{i}{2}\right)^{k+1}}\left(z-\frac{i}{2}\right)^k,
> $$
>
> 新的幂级数 $f\_2(z)$ 的收敛半径为
>
> $$
> \lim\_{k\to\infty}\left|\frac{\dfrac{1}{\left(1-\frac{i}{2}\right)^k}}{\dfrac{1}{\left(1-\frac{i}{2}\right)^{k+1}}}\right|
> \=\frac{\sqrt5}{2},
> $$
>
> 故其解析区域为以 $\dfrac{i}{2}$ 为圆心、以 $\dfrac{\sqrt5}{2}$ 为半径的圆内，该区域记为 $\sigma\_2$。
>
> 又因为这个新的幂级数是 $f\_1(z)$ 在 $z=\dfrac{i}{2}$ 处的泰勒级数，根据泰勒定理，在它的邻域，有
>
> $$
> f\_1(z)=\sum\_{k=0}^{\infty}\frac{1}{\left(1-\frac{i}{2}\right)^{k+1}}\left(z-\frac{i}{2}\right)^k=f\_2(z),
> $$
>
> 根据解析函数的内部唯一性定理，可知在重叠部分 $\sigma\_{12}=\sigma\_1\cap\sigma\_2$，均有 $f\_1(z)=f\_2(z)$，满足解析延拓的条件，故 $f\_2(z)$ 为 $f\_1(z)$ 在 $\sigma\_2$ 中的解析延拓。
>
> 同样，也可以以虚轴上在 $\sigma\_1$ 外的一点 $z=ri(|r|>1)$ 为圆心，$\rho=|z-1|$ 为半径作圆，在这个圆形区域（记为 $\sigma\_r$）内，显然以下幂级数的收敛半径为 $\sqrt{r^2+1}$：
>
> $$
> f\_r(z)=\sum\_{k=0}^{\infty}\frac{1}{(1-ri)^{k+1}}(z-ri)^k,
> $$
>
> 且利用等比数列求和公式，取极限可知 $f\_r(z)$ 在 $\sigma\_r$ 内一致收敛于 $\dfrac{1}{1-z}$，所以在 $\sigma\_{1r}=\sigma\_1\cap\sigma\_r$ 内，均有 $f\_1(z)=f\_r(z)$，故 $f\_r(z)$ 为 $f\_1(z)$ 在 $\sigma\_r$ 中的解析延拓。
>
> （注意：在证明 $f\_1(z)=f\_r(z)$ 时没有用到泰勒定理。事实上，在证明 $f\_1(z)=f\_2(z)$ 时，也可以只用等比数列求和公式，不用泰勒定理。）
>
> 读者可以试着讨论圆心恰好在 $\sigma\_1$ 边界上的情况，此时所作的圆形区域记为 $\sigma\_3$，如下图所示。另外，很容易说明，对于任意 $r\_i,r\_j(r\_i\ne r\_j)$，在 $\sigma\_{r\_i,r\_j}=\sigma\_{r\_i}\cap\sigma\_{r\_j}$ 内均有 $f\_{r\_i}(z)=f\_{r\_j}(z)$。

**解析延拓的常规方法：**

(1). 利用泰勒级数展开的方法；

(2). 利用函数递推关系：

> 例如下一节的伽马函数 $\Gamma(z)$，它作为一类反常积分（从 0 积分到 $+\infty$），在 $\operatorname{Re}z>0$ 时收敛，通过递推关系
>
> $$
> \Gamma(z)=\frac{\Gamma(z+1)}{z},
> $$
>
> 由于右侧的 $\Gamma(z+1)$ 在 $\operatorname{Re}z$ 只需要大于 $-1$ 就可以收敛，因此可以将等号左侧的 $\Gamma(z)$ 的收敛区域解析延拓至 $\operatorname{Re}z>-1$，再反复利用递推式，可以将 $\Gamma(z)$ 解析延拓至 $\operatorname{Re}z>-2$、$\operatorname{Re}z>-3$，以此类推。

(3). 利用 Schwarz 反射原理（施瓦茨反射原理）：

> 若 $f(z)$ 在包括实轴在内的上半平面上解析，且 $f(z)$ 在实轴上的值是实数，则 $\overline{f(\bar z)}$ 是 $f(z)$ 向下半平面的解析延拓，其中 $\bar z$ 是包括实轴在内的上半平面上的一点。

## Part 2 特殊函数

### · Gamma 函数

**$\Gamma$ 函数：**

> 在实数域，$\Gamma$ 函数定义为
>
> $$
> \Gamma(x)=\int\_0^{\infty}t^{x-1}e^{-t},dt,\qquad x>0,
> $$
>
> 将 $x$ 换成 $z$，得到
>
> $$
> \Gamma(z)=\int\_0^{\infty}t^{z-1}e^{-t},dt,\qquad \operatorname{Re}z>0.
> $$
>
> 该积分又称为第二类 Euler 积分（第二类欧拉积分），$\operatorname{Re}z>0$ 是该级数收敛的条件。
>
> 可以证明，$\Gamma$ 函数在复平面的右半平面（$\operatorname{Re}z>0$）是解析的。

**$\Gamma$ 函数的基本性质：**

(1). $\Gamma(1)=1$。

> 证明：$\Gamma(1)=\displaystyle\int\_0^{\infty}e^{-t},dt=1$。

(2). $\Gamma(z+1)=z\Gamma(z)$。

> 证明：
>
> $$
> \Gamma(z+1)=\int\_0^{\infty}t^ze^{-t},dt
> \=\left.-t^ze^{-t}\right|\_0^{\infty}+\int\_0^{\infty}zt^{z-1}e^{-t},dt
> \=0+z\int\_0^{\infty}t^{z-1}e^{-t},dt=z\Gamma(z).
> $$

(3). $\Gamma(n)=(n-1)!$，$n\in\mathbb N^+$。

> 证明：利用性质 1 和性质 2 不断递推得到。

(4). $\Gamma(z)\Gamma(1-z)=\dfrac{\pi}{\sin\pi z}$，$0<\operatorname{Re}z<1$。

> 证明：取 $z=x\in\mathbb R$，则在 $(0,1)$，
>
> $$
> \Gamma(x)\Gamma(1-x)=\int\_0^{\infty}e^{-t}t^{x-1},dt\int\_0^{\infty}e^{-s}s^{-x},ds
> \=\int\_0^{\infty}\int\_0^{\infty}e^{-(t+s)}\left(\frac ts\right)^x\frac1t,ds,dt.
> $$
>
> 作变量代换
>
> $$
> \begin{cases}
> \xi=s+t,\\
> \eta=\dfrac ts,
> \end{cases}
> $$
>
> 代入上式可得（利用雅各比行列式）
>
> $$
> \left|\frac{\partial(s,t)}{\partial(\xi,\eta)}\right|
> \=\left|\frac{\partial(\xi,\eta)}{\partial(s,t)}\right|^{-1}
> \=\frac{\xi}{(1+\eta)^2},
> $$
>
> $$
> \Gamma(x)\Gamma(1-x)
> \=\int\_0^{\infty}\int\_0^{\infty}e^{-\xi}\eta^{x-1}\frac{1+\eta}{\xi}\frac{\xi}{(1+\eta)^2},d\eta,d\xi
> \=\int\_0^{\infty}e^{-\xi},d\xi\int\_0^{\infty}\frac{\eta^{x-1}}{1+\eta},d\eta
> \=\frac{\pi}{\sin\pi x}.
> $$
>
> 当 $x-1<0$ 时，利用留数定理，可得最后一步的结果。
>
> 当 $0<\operatorname{Re}z<1$ 时，函数 $\Gamma(z)\Gamma(1-z)$ 和 $\dfrac{\pi}{\sin\pi z}$ 都是解析函数，且由上可知在实轴上一段 $0\<x<1$ 上二者相等，
>
> 因此可知性质 4 在 $0<\operatorname{Re}z<1$ 上成立。

(5). $\Gamma!\left(\dfrac12\right)=\sqrt\pi$。

> 证明：在性质 4 中取 $z=\dfrac12$ 即得。

> \[!important]
>
> 由性质 5，可知 $\sqrt\pi=\Gamma!\left(\dfrac12\right)=\displaystyle\int\_0^{\infty}t^{-\frac12}e^{-t},dt=2\int\_0^{\infty}e^{-x^2},dx$，
>
> 由于 $e^{-x^2}$ 是偶函数，故 $e^{-x^2}$ 在 $(-\infty,0)$ 上的积分和在 $(0,+\infty)$ 上的积分相同，因此可得高斯函数的积分：
> $$
> \int\_{-\infty}^{\infty}e^{-x^2},dx=\sqrt\pi.
> $$
>
> 根据性质 5，再结合递推公式（性质 2），可得
>
> $$
> \Gamma!\left(\frac{2n+1}{2}\right)=\frac{(2n-1)!!}{2^n}\sqrt\pi=\frac{(2n)!}{4^n n!}\sqrt\pi.
> $$

(6).

> 设 $z=x$，则
> $$
> \Gamma(x)=\int\_0^{\infty}t^{x-1}e^{-t},dt
> \=\int\_0^{\infty}r^{2x-2}e^{-r^2}2r,dr
> \=2\int\_0^{\infty}r^{2x-1}e^{-r^2},dr,
> $$
>
> 设 $2x-1=p$，则 $x=\dfrac{p+1}{2}$，上式进一步简化为
>
> $$
> \int\_0^{\infty}r^pe^{-r^2},dr=\frac12\Gamma!\left(\frac{p+1}{2}\right).
> $$
>
> 在统计物理、量子力学中经常碰到上式右侧的积分，可以据此将这种变动范围积分转化为 $\Gamma$ 函数的数值（右端），避免直接分部积分，达到简化计算的目的。

### · B 函数

**B 函数（Beta 函数）：**

> /Definition/
> $$
> B(p,q)=\int\_0^1 t^{p-1}(1-t)^{q-1},dt,\qquad \operatorname{Re}p>0,\quad \operatorname{Re}q>0,
> $$
>
> 其中 $\operatorname{Re}p>0$、$\operatorname{Re}q>0$ 是该函数收敛的条件。

**B 函数和 $\Gamma$ 函数的联系：**
$$
B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}.
$$
/example/

> 计算 $\displaystyle\int\_{-1}^1\frac{x^{2n}}{\sqrt{1-x^2}},dx$，$n$ 为正整数。

/proof/

> 令 $x^2=y$。因为所求积分的被积函数是偶函数，因而有
> $$
> \begin{aligned}
> \int\_{-1}^1\frac{x^{2n}}{\sqrt{1-x^2}},dx &=2\int\_0^1\frac{x^{2n}}{\sqrt{1-x^2}},dx\\\\
> &=\int\_0^1\frac{y^n}{\sqrt{1-y}},d\sqrt y\\\\
> &=\int\_0^1y^{\left(n+\frac12\right)-1}(1-y)^{\frac12-1},dy\\\\
> &=B!\left(n+\frac12,\frac12\right),
> \end{aligned}
> $$
>
> 又因为
>
> $$
> \begin{aligned}
> B!\left(n+\frac12,\frac12\right)
> &=\frac{\Gamma!\left(n+\frac12\right)\Gamma!\left(\frac12\right)}{\Gamma(n+1)}\\\\
> &=\frac{(2n-1)!!}{2^n}\sqrt\pi\cdot\sqrt\pi\\\\
> &=\frac{(2n-1)!!}{2^n n!}\pi\\\\
> &=\frac{(2n-1)!!}{(2n)!!}\pi,
> \end{aligned}
> $$
>
> 所以
>
> $$
> \int\_{-1}^1\frac{x^{2n}}{\sqrt{1-x^2}},dx
> \=\frac{(2n-1)!!}{(2n)!!}\pi,\qquad n\in\mathbb N^+.
> $$
