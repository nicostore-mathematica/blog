---
title: Chapter 6 解析延拓
permalink: /complex/complex-6/
createTime: 2026/02/02 15:04:50
---

## Part 1 解析延拓

**解析延拓：**

> 简单来说，解析延拓就是把在已知区域内解析的函数推广到更大的区域上去，或者说解析延拓就是将解析函数的定义域加以扩大。
>
> 具体地，若 $f_1(z)$ 在区域 $\sigma_1$ 中解析，$f_2(z)$ 在 $\sigma_2$ 中解析，且 $\sigma_1\cap\sigma_2=\sigma_{12}\ne\varnothing$（$\sigma_{12}$ 可以是一条线），在 $\sigma_{12}$ 中有 $f_1(z)\equiv f_2(z)$，则 $f_2(z)$ 称为 $f_1(z)$ 在 $\sigma_2$ 中的解析延拓；
>
> 同样，$f_1(z)$ 称为 $f_2(z)$ 在 $\sigma_1$ 中的解析延拓。总而言之，$f_1(z)$ 与 $f_2(z)$ 互为彼此的解析延拓。

**解析延拓的唯一性定理：**

> 如果 $f_2^{\mathrm I}(z)$ 和 $f_2^{\mathrm {II}}(z)$ 都是 $f_1(z)$ 在 $\sigma_2$ 中的解析延拓，则在 $\sigma_2$ 中有 $f_2^{\mathrm I}(z)=f_2^{\mathrm {II}}(z)$。

**解析函数的内部唯一性定理：**

> 如果有两个在区域 $G$ 中都解析的函数 $f_1^{\mathrm I}(z)$ 和 $f_2^{\mathrm {II}}(z)$，且它们在 $G$ 的一个子区域 $g$ 中恒等，则它们也在整个 $G$ 中恒等。

**利用泰勒级数进行解析延拓：**

> 用泰勒级数进行解析延拓是普遍方法。考虑一个用幂级数定义的解析函数
>
> $$
> f_1(z)=\sum_{k=0}^{\infty}z^k,\qquad |z|<1,
> $$
>
> 这个幂级数在 $|z|<1$（记为区域 $\sigma_1$）解析，在 $|z|=1$ 之外发散。
>
> 容易知道，在以 $O$ 为圆心、半径小于 1 的闭圆上，$\sum_{k=0}^{\infty}z^k$ 一致收敛于 $\dfrac{1}{1-z}$，因而根据逐项求导性，可求出 $|z|<1$ 内每个点的各阶导数。
>
> 据此，我们可以求出 $f_1(z)$ 在点 $z=\dfrac{i}{2}$ 处的各阶导数 $f_1^{(k)}\!\left(\dfrac{i}{2}\right)(k=1,2,\ldots)$，由此求出 $f_1(z)$ 在 $z=\dfrac{i}{2}$ 处的泰勒级数，并把这个新的幂级数记为 $f_2(z)$：
>
> $$
> f_2(z)=\sum_{k=0}^{\infty}\frac{f_1^{(k)}\!\left(\frac{i}{2}\right)}{k!}\left(z-\frac{i}{2}\right)^k
> =\sum_{k=0}^{\infty}\frac{1}{\left(1-\frac{i}{2}\right)^{k+1}}\left(z-\frac{i}{2}\right)^k,
> $$
>
> 新的幂级数 $f_2(z)$ 的收敛半径为
>
> $$
> \lim_{k\to\infty}\left|\frac{\dfrac{1}{\left(1-\frac{i}{2}\right)^k}}{\dfrac{1}{\left(1-\frac{i}{2}\right)^{k+1}}}\right|
> =\frac{\sqrt5}{2},
> $$
>
> 故其解析区域为以 $\dfrac{i}{2}$ 为圆心、以 $\dfrac{\sqrt5}{2}$ 为半径的圆内，该区域记为 $\sigma_2$。
>
> 又因为这个新的幂级数是 $f_1(z)$ 在 $z=\dfrac{i}{2}$ 处的泰勒级数，根据泰勒定理，在它的邻域，有
>
> $$
> f_1(z)=\sum_{k=0}^{\infty}\frac{1}{\left(1-\frac{i}{2}\right)^{k+1}}\left(z-\frac{i}{2}\right)^k=f_2(z),
> $$
>
> 根据解析函数的内部唯一性定理，可知在重叠部分 $\sigma_{12}=\sigma_1\cap\sigma_2$，均有 $f_1(z)=f_2(z)$，满足解析延拓的条件，故 $f_2(z)$ 为 $f_1(z)$ 在 $\sigma_2$ 中的解析延拓。
>
> 同样，也可以以虚轴上在 $\sigma_1$ 外的一点 $z=ri(|r|>1)$ 为圆心，$\rho=|z-1|$ 为半径作圆，在这个圆形区域（记为 $\sigma_r$）内，显然以下幂级数的收敛半径为 $\sqrt{r^2+1}$：
>
> $$
> f_r(z)=\sum_{k=0}^{\infty}\frac{1}{(1-ri)^{k+1}}(z-ri)^k,
> $$
>
> 且利用等比数列求和公式，取极限可知 $f_r(z)$ 在 $\sigma_r$ 内一致收敛于 $\dfrac{1}{1-z}$，所以在 $\sigma_{1r}=\sigma_1\cap\sigma_r$ 内，均有 $f_1(z)=f_r(z)$，故 $f_r(z)$ 为 $f_1(z)$ 在 $\sigma_r$ 中的解析延拓。
>
> （注意：在证明 $f_1(z)=f_r(z)$ 时没有用到泰勒定理。事实上，在证明 $f_1(z)=f_2(z)$ 时，也可以只用等比数列求和公式，不用泰勒定理。）
>
> 读者可以试着讨论圆心恰好在 $\sigma_1$ 边界上的情况，此时所作的圆形区域记为 $\sigma_3$，如下图所示。另外，很容易说明，对于任意 $r_i,r_j(r_i\ne r_j)$，在 $\sigma_{r_i,r_j}=\sigma_{r_i}\cap\sigma_{r_j}$ 内均有 $f_{r_i}(z)=f_{r_j}(z)$。

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
> \Gamma(x)=\int_0^{\infty}t^{x-1}e^{-t}\,dt,\qquad x>0,
> $$
>
> 将 $x$ 换成 $z$，得到
>
> $$
> \Gamma(z)=\int_0^{\infty}t^{z-1}e^{-t}\,dt,\qquad \operatorname{Re}z>0.
> $$
>
> 该积分又称为第二类 Euler 积分（第二类欧拉积分），$\operatorname{Re}z>0$ 是该级数收敛的条件。
>
> 可以证明，$\Gamma$ 函数在复平面的右半平面（$\operatorname{Re}z>0$）是解析的。

**$\Gamma$ 函数的基本性质：**

(1). $\Gamma(1)=1$。

> 证明：$\Gamma(1)=\displaystyle\int_0^{\infty}e^{-t}\,dt=1$。

(2). $\Gamma(z+1)=z\Gamma(z)$。

> 证明：
>
> $$
> \Gamma(z+1)=\int_0^{\infty}t^ze^{-t}\,dt
>    =\left.-t^ze^{-t}\right|_0^{\infty}+\int_0^{\infty}zt^{z-1}e^{-t}\,dt
>    =0+z\int_0^{\infty}t^{z-1}e^{-t}\,dt=z\Gamma(z).
> $$
>

(3). $\Gamma(n)=(n-1)!$，$n\in\mathbb N^+$。

> 证明：利用性质 1 和性质 2 不断递推得到。

(4). $\Gamma(z)\Gamma(1-z)=\dfrac{\pi}{\sin\pi z}$，$0<\operatorname{Re}z<1$。

> 证明：取 $z=x\in\mathbb R$，则在 $(0,1)$，
>
> $$
>    \Gamma(x)\Gamma(1-x)=\int_0^{\infty}e^{-t}t^{x-1}\,dt\int_0^{\infty}e^{-s}s^{-x}\,ds
>    =\int_0^{\infty}\int_0^{\infty}e^{-(t+s)}\left(\frac ts\right)^x\frac1t\,ds\,dt.
> $$
>
> 作变量代换
>
> $$
> \begin{cases}
>    \xi=s+t,\\
>    \eta=\dfrac ts,
>    \end{cases}
> $$
>
> 代入上式可得（利用雅各比行列式）
>
> $$
>    \left|\frac{\partial(s,t)}{\partial(\xi,\eta)}\right|
>    =\left|\frac{\partial(\xi,\eta)}{\partial(s,t)}\right|^{-1}
>    =\frac{\xi}{(1+\eta)^2},
> $$
>
> $$
> \Gamma(x)\Gamma(1-x)
>    =\int_0^{\infty}\int_0^{\infty}e^{-\xi}\eta^{x-1}\frac{1+\eta}{\xi}\frac{\xi}{(1+\eta)^2}\,d\eta\,d\xi
>    =\int_0^{\infty}e^{-\xi}\,d\xi\int_0^{\infty}\frac{\eta^{x-1}}{1+\eta}\,d\eta
>    =\frac{\pi}{\sin\pi x}.
> $$
>
> 当 $x-1<0$ 时，利用留数定理，可得最后一步的结果。
>
> 当 $0<\operatorname{Re}z<1$ 时，函数 $\Gamma(z)\Gamma(1-z)$ 和 $\dfrac{\pi}{\sin\pi z}$ 都是解析函数，且由上可知在实轴上一段 $0<x<1$ 上二者相等，
>
> 因此可知性质 4 在 $0<\operatorname{Re}z<1$ 上成立。

(5). $\Gamma\!\left(\dfrac12\right)=\sqrt\pi$。

> 证明：在性质 4 中取 $z=\dfrac12$ 即得。

> [!important]
>
> 由性质 5，可知 $\sqrt\pi=\Gamma\!\left(\dfrac12\right)=\displaystyle\int_0^{\infty}t^{-\frac12}e^{-t}\,dt=2\int_0^{\infty}e^{-x^2}\,dx$，
>
> 由于 $e^{-x^2}$ 是偶函数，故 $e^{-x^2}$ 在 $(-\infty,0)$ 上的积分和在 $(0,+\infty)$ 上的积分相同，因此可得高斯函数的积分：
> $$
> \int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi.
> $$
>
> 根据性质 5，再结合递推公式（性质 2），可得
>
> $$
> \Gamma\!\left(\frac{2n+1}{2}\right)=\frac{(2n-1)!!}{2^n}\sqrt\pi=\frac{(2n)!}{4^n n!}\sqrt\pi.
> $$
>

(6). 

> 设 $z=x$，则
> $$
> \Gamma(x)=\int_0^{\infty}t^{x-1}e^{-t}\,dt
> =\int_0^{\infty}r^{2x-2}e^{-r^2}2r\,dr
> =2\int_0^{\infty}r^{2x-1}e^{-r^2}\,dr,
> $$
>
> 设 $2x-1=p$，则 $x=\dfrac{p+1}{2}$，上式进一步简化为
>
> $$
> \int_0^{\infty}r^pe^{-r^2}\,dr=\frac12\Gamma\!\left(\frac{p+1}{2}\right).
> $$
>
> 在统计物理、量子力学中经常碰到上式右侧的积分，可以据此将这种变动范围积分转化为 $\Gamma$ 函数的数值（右端），避免直接分部积分，达到简化计算的目的。

### · B 函数

**B 函数（Beta 函数）：**

> /Definition/
> $$
> B(p,q)=\int_0^1 t^{p-1}(1-t)^{q-1}\,dt,\qquad \operatorname{Re}p>0,\quad \operatorname{Re}q>0,
> $$
>
> 其中 $\operatorname{Re}p>0$、$\operatorname{Re}q>0$ 是该函数收敛的条件。

**B 函数和 $\Gamma$ 函数的联系：**
$$
B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}.
$$
/example/

> 计算 $\displaystyle\int_{-1}^1\frac{x^{2n}}{\sqrt{1-x^2}}\,dx$，$n$ 为正整数。

/proof/

> 令 $x^2=y$。因为所求积分的被积函数是偶函数，因而有
> $$
> \begin{aligned}
> \int_{-1}^1\frac{x^{2n}}{\sqrt{1-x^2}}\,dx &=2\int_0^1\frac{x^{2n}}{\sqrt{1-x^2}}\,dx\\\\
> &=\int_0^1\frac{y^n}{\sqrt{1-y}}\,d\sqrt y\\\\
> &=\int_0^1y^{\left(n+\frac12\right)-1}(1-y)^{\frac12-1}\,dy\\\\
> &=B\!\left(n+\frac12,\frac12\right),
> \end{aligned}
> $$
>
> 又因为
>
> $$
> \begin{aligned}
> B\!\left(n+\frac12,\frac12\right)
> &=\frac{\Gamma\!\left(n+\frac12\right)\Gamma\!\left(\frac12\right)}{\Gamma(n+1)}\\\\
> &=\frac{(2n-1)!!}{2^n}\sqrt\pi\cdot\sqrt\pi\\\\
> &=\frac{(2n-1)!!}{2^n n!}\pi\\\\
> &=\frac{(2n-1)!!}{(2n)!!}\pi,
> \end{aligned}
> $$
>
> 所以
>
> $$
> \int_{-1}^1\frac{x^{2n}}{\sqrt{1-x^2}}\,dx
> =\frac{(2n-1)!!}{(2n)!!}\pi,\qquad n\in\mathbb N^+.
> $$
>

/example/

> 计算 $n$ 维空间的单位球的体积 $V_n$，并据此计算四维空间单位球的体积 $V_4$。

/proof/

>  $n$ 维空间的单位球内的坐标（设坐标轴为 $x_1,x_2,\ldots,x_n$）满足
> $$
> x_1^2+x_2^2+\cdots+x_n^2\le 1,
> $$
>
> 故 $n$ 维空间的单位球的体积 $V_n$ 为
>
> $$
> V_n=\idotsint_{\sum_{k=1}^n x_k^2\le1}dx_1dx_2\cdots dx_n.
> $$
>
> 为了计算上式，我们先计算如下积分
>
> $$
> \idotsint_{-\infty}^{\infty}e^{-(x_1^2+x_2^2+\cdots+x_n^2)}dx_1dx_2\cdots dx_n.
> $$
>
> 一方面，作变量代换
>
> $$
> \begin{cases}
> x_1=r\cos\varphi_1,\\\\
> x_2=r\sin\varphi_1\cos\varphi_2,\\\\
> x_3=r\sin\varphi_1\sin\varphi_2\cos\varphi_3,\\\\
> \cdots\\\\
> x_k=r\sin\varphi_1\sin\varphi_2\sin\varphi_3\cdots\sin\varphi_{k-1}\cos\varphi_k,\\\\
> \cdots\\\\
> x_{n-1}=r\sin\varphi_1\sin\varphi_2\sin\varphi_3\cdots\sin\varphi_{n-2}\cos\varphi_{n-1},\\\\
> x_n=r\sin\varphi_1\sin\varphi_2\sin\varphi_3\cdots\sin\varphi_{n-2}\sin\varphi_{n-1},
> \end{cases}
> $$
>
> 其中
>
> $$
> \begin{cases}
> 0\le r<+\infty,\\\\
> 0\le\varphi_1\le\pi,\\\\
> 0\le\varphi_2\le\pi,\\\\
> 0\le\varphi_3\le\pi,\\\\
> \cdots\\\\
> 0\le\varphi_{n-2}\le\pi,\\\\
> 0\le\varphi_{n-1}\le2\pi,
> \end{cases}
> $$
>
> 显然有
>
> $$
> x_1^2+x_2^2+\cdots+x_n^2=r^2,
> $$
>
> 又有代换的雅各比行列式
>
> $$
> \left|\frac{\partial(x_1,x_2,x_3,\ldots,x_n)}{\partial(r,\varphi_1,\varphi_2,\ldots,\varphi_{n-1})}\right|
> =\\ \\
> \left|
> \begin{array}{ccccc}
> \cos\varphi_1 & \sin\varphi_1\cos\varphi_2 & \sin\varphi_1\sin\varphi_2\cos\varphi_3 & \cdots & \displaystyle\prod_{i=1}^{n-1}\sin\varphi_i\\\\
> -r\sin\varphi_1 & r\cos\varphi_1\cos\varphi_2 & r\cos\varphi_1\sin\varphi_2\cos\varphi_3 & \cdots & \displaystyle r\cos\varphi_1\prod_{i=2}^{n-1}\sin\varphi_i\\\\
> 0 & -r\sin\varphi_1\sin\varphi_2 & r\sin\varphi_1\cos\varphi_2\cos\varphi_3 & \cdots & \cdots\\\\
> \vdots & \vdots & \vdots & \ddots & \vdots\\\\
> 0 & 0 & 0 & \cdots & \displaystyle r\cos\varphi_{n-2}\sin\varphi_{n-1}\prod_{i=1}^{n-3}\sin\varphi_i\\\\
> 0 & 0 & 0 & \cdots & \displaystyle r\cos\varphi_{n-1}\prod_{i=1}^{n-2}\sin\varphi_i
> \end{array}
> \right|.
> $$
>
> 其中只有第一行不含 $r$，其余 $n-1$ 行每一个元素均含 $r$（0 可以看成 $0\cdot r$），因此根据行列式性质可提出 $r^{n-1}$。提出 $r^{n-1}$ 后，行列式内只剩下 $\varphi_k(k=1,2,\ldots,n-1)$ 的函数。因此变换的雅各比行列式可以写为如下形式：
>
> $$
> \left|\frac{\partial(x_1,x_2,x_3,\ldots,x_n)}{\partial(r,\varphi_1,\varphi_2,\ldots,\varphi_{n-1})}\right|
> =r^{n-1}A(\varphi_1,\varphi_2,\ldots,\varphi_{n-1}).
> $$
>
> 代入得
>
> $$
> \begin{aligned}
> &\idotsint_{\text{whole space}}e^{-r^2}r^{n-1}A(\varphi_1,\varphi_2,\ldots,\varphi_{n-1})\,dr\,d\varphi_1d\varphi_2\cdots d\varphi_{n-1}\\\\
> &={\idotsint_{\text{whole space}}A(\varphi_1,\varphi_2,\ldots,\varphi_{n-1})\,d\varphi_1d\varphi_2\cdots d\varphi_{n-1}}
> \int_0^{\infty}e^{-r^2}r^{n-1}\,dr\\\\
> &=A\int_0^{\infty}e^{-r^2}r^{n-1}\,dr\\\\
> &=\frac12A\Gamma\!\left(\frac n2\right).
> \end{aligned}
> $$
>
> 因此，我们得到
>
> $$
> \idotsint_{-\infty}^{\infty}e^{-(x_1^2+x_2^2+\cdots+x_n^2)}dx_1dx_2\cdots dx_n
> =\frac12A\Gamma\!\left(\frac n2\right).
> $$
>
> 另一方面，
>
> $$
> \begin{aligned}
> &\idotsint_{-\infty}^{\infty}e^{-(x_1^2+x_2^2+\cdots+x_n^2)}dx_1dx_2\cdots dx_n\\\\
> &=\int_{-\infty}^{\infty}e^{-x_1^2}dx_1\int_{-\infty}^{\infty}e^{-x_2^2}dx_2\cdots\int_{-\infty}^{\infty}e^{-x_n^2}dx_n\\\\
> &=(\sqrt\pi)^n,
> \end{aligned}
> $$
>
> 联立以上两式，可得
>
> $$
> A=\frac{2(\sqrt\pi)^n}{\Gamma\!\left(\frac n2\right)}.
> $$
>
> 因而 $n$ 维单位球的体积为
>
> $$
> \begin{aligned}
> V_n
> &=\idotsint_{\sum_{k=1}^n x_k^2\le1}dx_1dx_2\cdots dx_n\\\\
> &=\idotsint_{0\le r\le1}
> \left|\frac{\partial(x_1,x_2,x_3,\ldots,x_n)}{\partial(r,\varphi_1,\varphi_2,\ldots,\varphi_{n-1})}\right|
> \,dr\,d\varphi_1d\varphi_2\cdots d\varphi_{n-1}\\\\
> &=\idotsint_{0\le r\le1}r^{n-1}A(\varphi_1,\varphi_2,\ldots,\varphi_{n-1})\,dr\,d\varphi_1d\varphi_2\cdots d\varphi_{n-1}\\\\
> &=A\int_0^1r^{n-1}\,dr\\\\
> &=\frac{2(\sqrt\pi)^n}{n\Gamma\!\left(\frac n2\right)}.
> \end{aligned}
> $$
>
> 取 $n=4$，得
>
> $$
> V_4=\frac{2(\sqrt\pi)^4}{4\Gamma(2)}=\frac{\pi^2}{2}.
> $$
