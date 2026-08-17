---
title: Lesson 17 Riemann 积分 I
permalink: /integral/integral-17/
createTime: 2026/08/17 14:17:04
---

Riemann 研究了有界函数的积分，他把可积函数类从连续函数类做了很大的扩充.  

Lebesgue 进一步发现可积函数就是 “几乎处处” 连续的函数.

## Part 1 Riemann 可积

设 $f(x)$ 是定义在闭区间 $[a,b]$ 上的函数（不一定连续），考虑由直线 $x = a$，$y = b$，$y = 0$ 及曲线 $y = f(x)$ 围成的曲边梯形.受连续函数积分定义的启发，为了计算它的面积，我们用若干小矩形面积之和去逼近：将 $[a,b]$ 分割为
$$
a = x_0 < x_1 < \cdots < x_n = b,
$$

第 $i$ 个小梯形的面积可用 $f(\xi_i)\Delta x_i$ 近似逼近，其中 $\xi_i \in [x_{i-1}, x_i]$，$\Delta x_i = x_i - x_{i-1}$.于是和 $\sum\limits_{i=1}^n f(\xi_i)\Delta x_i$ 表示曲边梯形 $ABCD$ 的面积的近似值.我们期望，当 $[a,b]$ 的分割越来越细时，这个近似值越来越接近所求面积，用极限表示出来就是

$$
S_{ABCD} = \lim_{\|\pi\| \to 0} \sum_{i=1}^n f(\xi_i)\Delta x_i,
$$

这里 $\|\pi\| = \max\limits_{1 \le i \le n} \{\Delta x_i\}$.如果上述极限存在，则记为 $\int_a^b f(x)\,dx$.

详细说来，设函数 $f(x)$ 定义于区间 $[a,b]$，$[a,b]$ 中有 $n+1$ 个点依次为 $a = x_0 < x_1 < \cdots < x_n = b$，它们将 $[a,b]$ 分成 $n$ 个小区间 $\Delta_i = [x_{i-1}, x_i]$ ($1 \le i \le n$)，这些分点及闭子区间构成了 $[a,b]$ 的一个分割，记为

$$
\pi: \quad a = x_0 < x_1 < \cdots < x_n = b.
$$

小区间 $\Delta_i$ 的长度为 $\Delta x_i = x_i - x_{i-1}$，并记

$$
\|\pi\| = \max_{1 \le i \le n} \{\Delta x_i\},
$$

称为分割 $\pi$ 的模.

对于分割 $\pi$，任取点 $\xi_i \in \Delta_i = [x_{i-1}, x_i]$ ($1 \le i \le n$).称

$$
\sum_{i=1}^n f(\xi_i)\Delta x_i
$$

为 $f$ 在 $[a,b]$ 上的一个 Riemann 和或积分和.

### · Riemann 积分

**定义1** (Riemann 积分). 设 $f$ 如上，如果存在实数 $I$，使得任给 $\varepsilon > 0$，均存在 $\delta > 0$，对任何分割 $\pi$，只要 $\|\pi\| < \delta$，就有
$$
\left| \sum_{i=1}^n f(\xi_i)\Delta x_i - I \right| < \varepsilon, \quad \forall\, \xi_i \in [x_{i-1}, x_i], \; i = 1,\cdots,n,
$$

则称 $f$ 在 $[a,b]$ 上 Riemann 可积或可积，$I$ 为 $f$ 在 $[a,b]$ 上的（定）积分，记为

$$
I = \int_a^b f(x)\,dx = \lim_{\|\pi\| \to 0} \sum_{i=1}^n f(\xi_i)\Delta x_i.
$$

其中 $f$ 称为被积函数，$[a,b]$ 称为积分区间，$a,b$ 分别称为积分下限与积分上限.

> (1) 积分与变量 $x$ 的选择无关，即
>
> $$
> \int_a^b f(x)\,dx = \int_a^b f(t)\,dt.
> $$
>
> (2) 如果 $f$ 在 $[a,b]$ 上可积，则积分 $\int_a^b f(x)\,dx$ 是唯一确定的；可知连续函数总是可积的.

**定理1** (可积的必要条件). 若 $f$ 在 $[a,b]$ 上可积，则 $f$ 在 $[a,b]$ 上有界，反之不然.

> 假设 $f$ 在 $[a,b]$ 上可积，沿用上面的记号，记 $I$ 为其积分.取 $\varepsilon = 1$，由定义，存在 $\delta > 0$，对 $[a,b]$ 的任意分割
>
> $$
> \pi: \quad a = x_0 < x_1 < \cdots < x_n = b,
> $$
>
> 当 $\|\pi\| < \delta$ 时，任取 $\xi_i \in [x_{i-1}, x_i]$ ($1 \le i \le n$)，均有
>
> $$
> \left| \sum_{i=1}^n f(\xi_i)\Delta x_i - I \right| < 1.
> $$
>
> 特别地，取自然数 $n > \dfrac{b-a}{\delta}$，对区间 $[a,b]$ 做 $n$ 等分，即
>
> $$
> x_i = a + \frac{i}{n}(b-a), \quad i = 0,\cdots,n,
> $$
>
> 此时 $\|\pi\| = \dfrac{b-a}{n} < \delta$.我们有
>
> $$
> \left| \frac{b-a}{n} \sum_{i=1}^n f(\xi_i) - I \right| < 1, \quad \forall\, \xi_i \in \left[a + \frac{i-1}{n}(b-a),\, a + \frac{i}{n}(b-a)\right],
> $$
>
> 从而
>
> $$
> \left| \sum_{i=1}^n f(\xi_i) \right| \le \frac{n}{b-a}(1 + |I|).
> $$
> 对于固定的 $j \in \{1,2,\cdots,n\}$，当 $i \ne j$ 时，我们取 $\xi_i = a + \dfrac{i}{n}(b-a)$，令
>
> $$
> M = \max_{0 \le i \le n} \left\{ \left| f\left(a + \frac{i}{n}(b-a)\right) \right| \right\},
> $$
>
> 则有如下估计：
>
> $$
> \begin{aligned}
> |f(\xi_j)| &\le \left| \sum_{i \ne j} f\left(a + \frac{i}{n}(b-a)\right) \right| + \frac{n}{b-a}(1 + |I|)\\\\
> &\le (n-1)M + \frac{n}{b-a}(1 + |I|),
> \end{aligned}
> $$
>
> 这个估计对任意 $\xi_j \in \left[a + \dfrac{j-1}{n}(b-a),\, a + \dfrac{j}{n}(b-a)\right]$ 均成立，因此有
>
> $$
> |f(x)| \le (n-1)M + \frac{n}{b-a}(1 + |I|), \quad \forall\, x \in [a,b],
> $$
>
> 这就说明 $f$ 有界.

有界函数未必可积，Dirichlet 函数 $D(x)$ 即为例证：任给一个分割，当 $\xi_i$ 取 $[x_{i-1}, x_i]$ 中的无理数时，积分和为 $0$；当 $\xi_i$ 取 $[x_{i-1}, x_i]$ 中有理数时，积分和为 $1$.因此 $D(x)$ 的积分和没有极限.

除了连续函数之外，还有哪些有界函数是可积的呢？如同研究有界数列的收敛性要考虑上极限和下极限一样，我们考虑有界函数 Riemann 和的“最大”值和“最小”值.对于分割

$$
\pi: \quad a = x_0 < x_1 < \cdots < x_n = b,
$$

记 $M_i = \sup\limits_{x \in [x_{i-1}, x_i]} f(x)$，$m_i = \inf\limits_{x \in [x_{i-1}, x_i]} f(x)$，令

$$
S = \sum_{i=1}^n M_i \cdot \Delta x_i, \quad s = \sum_{i=1}^n m_i \cdot \Delta x_i,
$$

我们称 $S$ 为 $f$ 关于 $\pi$ 的 Darboux 上和，简称上和，也记为 $S(\pi)$ 或 $S(\pi,f)$；而 $s$ 称为 Darboux 下和，简称下和，也记为 $s(\pi)$ 或 $s(\pi,f)$.

显然，任何 Riemann 和总是介于下和与上和之间.我们称

$$
\omega_i = M_i - m_i = \sup_{x \in [x_{i-1}, x_i]} f(x) - \inf_{x \in [x_{i-1}, x_i]} f(x)
$$

为 $f$ 在 $[x_{i-1}, x_i]$ 上的振幅.由定义，上和与下和之差可以表示为

$$
S - s = \sum_{i=1}^n \omega_i \cdot \Delta x_i.
$$

Riemann 对于积分的贡献之一就是证明了 $f$ 可积当且仅当 $S - s$ 的极限为零（当分割的模趋于零时）.Darboux 进一步研究了任意有界函数的上和与下和的极限.

以下总是假定 $f$ 为有界函数，并记 $M = \sup\limits_{x \in [a,b]} f(x)$，$m = \inf\limits_{x \in [a,b]} f(x)$.

下面的引理给出了上和与下和的重要性质，这种单调性质与数列的情形类似.

**引理2.** 设分割 $\pi'$ 是从 $\pi$ 添加 $k$ 个分点得到的，则有
$$
\begin{aligned}
S(\pi) &\ge S(\pi') \ge S(\pi) - (M - m)k\|\pi\|, \\\\
s(\pi) &\le s(\pi') \le s(\pi) + (M - m)k\|\pi\|.
\end{aligned}
$$

特别地，对于给定的分割增加新的分点时，下和不减，上和不增.

> 为了简单起见，我们证明 $k=1$ 的情形.此时，设新添加的分点为 $\bar{x}$，则 $\bar{x}$ 必落在某个区间 $(x_{j-1}, x_j)$ 内.由上和的定义，
>
> $$
> \begin{aligned}
> S(\pi) &= \sum_{i=1}^n M_i \cdot \Delta x_i = M_j \cdot \Delta x_j + \sum_{i \ne j} M_i \cdot \Delta x_i, \\\\
> S(\pi') &= M'_j \cdot (\bar{x} - x_{j-1}) + M''_j (x_j - \bar{x}) + \sum_{i \ne j} M_i \cdot \Delta x_i,
> \end{aligned}
> $$
>
> 这里 $M'_j$ 及 $M''_j$ 分别是 $f$ 在区间 $[x_{j-1}, \bar{x}]$ 及 $[\bar{x}, x_j]$ 中的上确界.因为 $M'_j \le M_j$，$M''_j \le M_j$，从而有
>
> $$
> \begin{aligned}
> 0 \le S(\pi) - S(\pi') &= (M_j - M'_j)(\bar{x} - x_{j-1}) + (M_j - M''_j)(x_j - \bar{x}) \\\\
> &\le (M - m)(\bar{x} - x_{j-1}) + (M - m)(x_j - \bar{x}) \\\\
> &= (M - m)\Delta x_j \le (M - m)\|\pi\|.
> \end{aligned}
> $$
>
> 即 $S(\pi) \ge S(\pi') \ge S(\pi) - (M - m)\|\pi\|$.下和的情形同理可证.

**推论3.** 对于任意两个分割 $\pi_1$ 及 $\pi_2$，有

$$
s(\pi_1) \le S(\pi_2).
$$

> 用 $\pi_1 \cup \pi_2$ 表示将 $\pi_1$ 和 $\pi_2$ 的所有分点合并后得到的分割（重复的分点只取一次），则 $\pi_1 \cup \pi_2$ 既可以看成由 $\pi_1$ 添加分点而来，又可以看作从 $\pi_2$ 添加分点而来.由引理2，有
>
> $$
> s(\pi_1) \le s(\pi_1 \cup \pi_2) \le S(\pi_1 \cup \pi_2) \le S(\pi_2).
> $$
>
> 这也就是说任意下和总是不超过任意上和.

下面的定理和有界数列的上极限和下极限都存在是类似的.

### · Darboux 定理

**定理 6** (Darboux). 
$$
\lim_{\|\pi\| \to 0} S(\pi) = \inf_\pi S(\pi), \quad \lim_{\|\pi\| \to 0} s(\pi) = \sup_\pi s(\pi).
$$

> 根据定义，总有下面的估计：
>
> $$
> m(b-a) \le s(\pi) \le S(\pi) \le M(b-a),
> $$
>
> 因此 $\inf\limits_\pi S(\pi)$ 和 $\sup\limits_\pi s(\pi)$ 都存在.
>
> 任给 $\varepsilon > 0$，由下确界的定义知，存在分割 $\pi'$，使得
>
> $$
> S(\pi') < \inf_\pi S(\pi) + \frac{\varepsilon}{2}.
> $$
>
> 设 $\pi'$ 由 $k$ 个分点构成.对于任意另一分割 $\pi$，$\pi \cup \pi'$ 至多比 $\pi$ 多 $k$ 个分点.由引理 6.1.2，有
>
> $$
> S(\pi) - (M - m)k\|\pi\| \le S(\pi \cup \pi') \le S(\pi') < \inf_\pi S(\pi) + \frac{\varepsilon}{2}.
> $$
>
> 于是，当 $\|\pi\| < \delta = \dfrac{\varepsilon}{2(M - m + 1)k}$ 时，
>
> $$
> \begin{aligned}
> \inf_\pi S(\pi) &\le S(\pi) \le (M - m)k \cdot \frac{\varepsilon}{2(M - m + 1)k} + \inf_\pi S(\pi) + \frac{\varepsilon}{2} \\\\
> &< \inf_\pi S(\pi) + \varepsilon,
> \end{aligned}
> $$
>
> 这就证明了
>
> $$
> \lim_{\|\pi\| \to 0} S(\pi) = \inf_\pi S(\pi).
> $$
>
> 下和的极限同理可证.

我们称 $\inf\limits_\pi S(\pi)$ 为 $f$ 在 $[a,b]$ 上的上积分，$\sup\limits_\pi s(\pi)$ 为 $f$ 在 $[a,b]$ 上的下积分.Riemann 和 Darboux 关于函数可积性的结果反映在下面的重要定理中

**定理5** (可积的充要条件). 设 $f$ 为 $[a,b]$ 上的有界函数，则以下命题等价：

(1) $f$ 在 $[a,b]$ 上 Riemann 可积.

(2) $f$ 在 $[a,b]$ 上的上积分和下积分相等.

(3) $\displaystyle \lim_{\|\pi\| \to 0} \sum_{i=1}^n \omega_i \cdot \Delta x_i = 0$.

(4) 任给 $\varepsilon > 0$，存在 $[a,b]$ 的某个分割 $\pi$，使得

$$
S(\pi) - s(\pi) = \sum_{i=1}^n \omega_i \cdot \Delta x_i < \varepsilon.
$$

> (1) $\Rightarrow$ (2): 设 $f$ 在 $[a,b]$ 上可积，其积分为 $I$.于是任给 $\varepsilon > 0$，存在 $\delta > 0$，当 $\|\pi\| < \delta$ 时，有
>
> $$
> I - \varepsilon < \sum_{i=1}^n f(\xi_i) \cdot \Delta x_i < I + \varepsilon.
> $$
>
> 特别地，我们得到
>
> $$
> \begin{aligned}
> I - \varepsilon &\le \sum_{i=1}^n \inf_{x \in [x_{i-1}, x_i]} f(x) \cdot \Delta x_i = s(\pi) \\\\
> &\le \sum_{i=1}^n \sup_{x \in [x_{i-1}, x_i]} f(x) \cdot \Delta x_i = S(\pi) \\\\
> &\le I + \varepsilon,
> \end{aligned}
> $$
>
> 这说明 $\displaystyle \lim_{\|\pi\| \to 0} s(\pi) = \lim_{\|\pi\| \to 0} S(\pi) = I$.由 Darboux 定理即知 $f$ 的上下积分相等.
>
> (2) $\Rightarrow$ (1): 设 $\inf\limits_\pi s(\pi) = \inf\limits_\pi S(\pi) = I$.由 Darboux 定理，任给 $\varepsilon > 0$，存在 $\delta > 0$，当 $\|\pi\| < \delta$ 时，有
>
> $$
> I - \varepsilon < s(\pi) \le \sum_{i=1}^n f(\xi_i) \cdot \Delta x_i \le S(\pi) < I + \varepsilon,
> $$
>
> 这说明
>
> $$
> \lim_{\|\pi\| \to 0} \sum_{i=1}^n f(\xi_i) \cdot \Delta x_i = I,
> $$
>
> 也就是说 $f$ 在 $[a,b]$ 上可积，积分为 $I$.
>
> (2) $\iff$ (3): 这可由 Darboux 定理及下式得到
>
> $$
> \lim_{\|\pi\| \to 0} \sum_{i=1}^n \omega_i \cdot \Delta x_i = \lim_{\|\pi\| \to 0} (S(\pi) - s(\pi)) = \inf_\pi S(\pi) - \sup_\pi s(\pi).
> $$
>
> (3) $\Rightarrow$ (4): 这是显然的.
>
> (4) $\Rightarrow$ (2): 如果存在分割 $\pi$，使得 $S(\pi) - s(\pi) < \varepsilon$，则由
>
> $$
> s(\pi) \le \sup_{\pi'} s(\pi') \le \inf_{\pi'} S(\pi') \le S(\pi)
> $$
>
> 知
>
> $$
> 0 \le \inf_{\pi'} S(\pi') - \sup_{\pi'} s(\pi') \le S(\pi) - s(\pi) < \varepsilon.
> $$
>
> 由 $\varepsilon$ 的任意性即知 $f$ 的上和与下和相等.
>
> 这就证明了 (1)(2)(3)(4) 的等价性.

**推论6.**  

(1) 设 $[\alpha, \beta] \subset [a,b]$，如果 $f$ 在 $[a,b]$ 上可积，则 $f$ 在 $[\alpha,\beta]$ 上也可积.

(2) 设 $c \in (a,b)$，如果 $f$ 在 $[a,c]$ 及 $[c,b]$ 上都可积，则 $f$ 在 $[a,b]$ 上可积.

/example/ 设 $f,g$ 均为 $[a,b]$ 上的可积函数，则 $fg$ 也是 $[a,b]$ 上的可积函数.

> 因为可积函数是有界的，故存在 $K > 0$，使得
>
> $$
> |f(x)| \le K, \quad |g(x)| \le K, \quad \forall\, x \in [a,b].
> $$
>
> 任给 $\varepsilon > 0$，由定理 6.1.5 (3)，存在 $\delta > 0$，当 $\|\pi\| < \delta$ 时，
>
> $$
> \sum_\pi \omega_i(f) \cdot \Delta x_i < \frac{\varepsilon}{2K+1}, \quad \sum_\pi \omega_i(g) \cdot \Delta x_i < \frac{\varepsilon}{2K+1}.
> $$
>
> 如果 $[x_{i-1}, x_i]$ 为 $\pi$ 中的一个小区间，则
>
> $$
> \begin{aligned}
> \omega_i(fg) &= \sup_{x',x'' \in [x_{i-1}, x_i]} |f(x')g(x') - f(x'')g(x'')| \\\\
> &= \sup_{x',x'' \in [x_{i-1}, x_i]} |f(x')g(x') - f(x')g(x'') + f(x')g(x'') - f(x'')g(x'')| \\\\
> &\le \sup_{x',x'' \in [x_{i-1}, x_i]} \left[ |f(x')||g(x') - g(x'')| + |g(x'')||f(x') - f(x'')| \right] \\\\
> &\le K(\omega_i(g) + \omega_i(f)),
> \end{aligned}
> $$
>
> 从而有
>
> $$
> \begin{aligned}
> \sum_\pi \omega_i(fg) \cdot \Delta x_i &\le K \sum_\pi (\omega_i(f) + \omega_i(g)) \cdot \Delta x_i \\\\
> &= K \sum_\pi \omega_i(f) \cdot \Delta x_i + K \sum_\pi \omega_i(g) \cdot \Delta x_i \\\\
> &< K \cdot \frac{\varepsilon}{2K+1} + K \cdot \frac{\varepsilon}{2K+1} < \varepsilon.
> \end{aligned}
> $$
>
> 由定理5 知 $fg$ 可积.

根据 **定理5** 可以得到几类可积函数，它们不一定总是连续的.

**定理7 (可积函数类).**  

> (1) 若 $f$ 在 $[a,b]$ 上连续，则 $f$ 在 $[a,b]$ 上可积；  
>
> (2) 若有界函数 $f$ 只在 $[a,b]$ 中有限个点处不连续，则 $f$ 可积；  
>
> (3) 若 $f$ 为 $[a,b]$ 上的单调函数，则 $f$ 可积.

设 $f$ 为 $[a,b]$ 上定义的函数，如果存在 $[a,b]$ 的分割

$$
\pi: \quad a = x_0 < x_1 < x_2 < \cdots < x_n = b,
$$

使得 $f$ 在每一个小区间 $(x_{i-1}, x_i)$ 上均为常数，则称 $f$ 为阶梯函数.

**推论8.** 阶梯函数均为可积函数.

**定理9** (Riemann). 设 $f$ 为 $[a,b]$ 上的有界函数，则 $f$ 可积的充分必要条件是任给 $\varepsilon, \eta > 0$，存在 $[a,b]$ 的某个分割 $\pi$，使得

$$
\sum_{\omega_i \ge \eta} \Delta x_i < \varepsilon.
$$

> (Necessity) 设 $f$ 可积，则由定理 6.1.5 (4)，任给 $\varepsilon, \eta > 0$，存在分割 $\pi$，使得
>
> $$
> \sum_{i=1}^n \omega_i \cdot \Delta x_i < \varepsilon \cdot \eta,
> $$
>
> 从而
>
> $$
> \eta \cdot \sum_{\omega_i \ge \eta} \Delta x_i \le \sum_{i=1}^n \omega_i \cdot \Delta x_i < \varepsilon \cdot \eta,
> $$
>
> 即
>
> $$
> \sum_{\omega_i \ge \eta} \Delta x_i < \varepsilon.
> $$
>
> (Sufficiency) 由已知条件，任给 $\varepsilon > 0$，存在 $[a,b]$ 的分割 $\pi$，使得
>
> $$
> \sum_{\omega_i \ge \frac{\varepsilon}{2(b-a)}} \Delta x_i < \frac{\varepsilon}{2(M - m + 1)}.
> $$
>
> 对于这个分割，有
>
> $$
> \begin{aligned}
> \sum_{i=1}^n \omega_i \cdot \Delta x_i &= \sum_{\omega_i < \frac{\varepsilon}{2(b-a)}} \omega_i \cdot \Delta x_i + \sum_{\omega_i \ge \frac{\varepsilon}{2(b-a)}} \omega_i \cdot \Delta x_i \\\\
> &\le \frac{\varepsilon}{2(b-a)} \sum_{\omega_i < \frac{\varepsilon}{2(b-a)}} \Delta x_i + (M - m) \sum_{\omega_i \ge \frac{\varepsilon}{2(b-a)}} \Delta x_i \\\\
> &\le \frac{\varepsilon}{2(b-a)} (b-a) + (M - m)\frac{\varepsilon}{2(M - m + 1)} < \varepsilon.
> \end{aligned}
> $$
>
> 由定理5 (4) 知 $f$ 可积.

### · Lebesgue 定理

**定义2** (零测集). 设 $A \subset \mathbb{R}$, 如果任给 $\varepsilon > 0$, 均存在覆盖 $A$ 的至多可数个开区间 $\{I_i\}$, 使得
$$
\sum_{i=1}^{n} |I_i| \leq \varepsilon, \quad \forall\, n \geq 1,
$$
则称 $A$ 为零测集.

> (1) 有限集是零测集; (2) 可数集是零测集; (3) 零测集的子集仍为零测集; (4) 可数个零测集之并仍为零测集.

**定理10** (Lebesgue). 有界函数 $f$ 在 $[a,b]$ 上 Riemann 可积的充分必要条件是它的不连续点集 $D_f$ 为零测集.

> 设 $f$ 在 $[a,b]$ 上 Riemann 可积. 固定 $\delta > 0$, 任给 $\varepsilon > 0$, 存在 $[a,b]$ 的分割
> $$
> \pi: \, a = x_0 < x_1 < \cdots < x_n = b,
> $$
> 使得
> $$
> \sum_{i=1}^{n} \omega_i \cdot \Delta x_i < \varepsilon \cdot \frac{\delta}{2}.
> $$
> 如果 $x \in D_\delta \cap (x_{i-1},x_i)$, 则显然 $\omega_i \geq \omega(f,x) \geq \delta$. 因此从上式可得
> $$
> \sum_{D_\delta \cap (x_{i-1},x_i) \neq \varnothing} \Delta x_i < \frac{\varepsilon}{2}.
> $$
> 显然
> $$
> D_\delta \subset \bigcup_{D_\delta \cap (x_{i-1},x_i) \neq \varnothing} (x_{i-1},x_i) \bigcup_{i=0}^{n} \left(x_i - \frac{\varepsilon}{4(n+1)},\, x_i + \frac{\varepsilon}{4(n+1)}\right),
> $$
> 且
> $$
> \sum_{D_\delta \cap (x_{i-1},x_i) \neq \varnothing} \Delta x_i + \frac{2\varepsilon}{4(n+1)} \cdot (n+1) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon,
> $$
> 由定义即知 $D_\delta$ 为零测集. 这说明 $D_f = \bigcup_{n \geq 1} D_{\frac{1}{n}}$ 为零测集.
>
> (充分性) 设 $|f(x)| \leq K$, $\forall\, x \in [a,b]$. 由假设, $D_f$ 为零测集, 故任给 $\varepsilon > 0$, 存在开区间 $\{(\alpha_j,\beta_j)\}_{j=1,2,\cdots}$, 使得 $D_f \subset \bigcup_j (\alpha_j,\beta_j)$, 且
> $$
> \sum_j (\beta_j - \alpha_j) \leq \frac{\varepsilon}{4K+1}.
> $$
> 对于 $x \in [a,b] - \bigcup_j (\alpha_j,\beta_j)$, 因为 $f$ 在 $x$ 处连续, 故存在包含 $x$ 的开区间 $I_x$, 使得 $f$ 在 $I_x$ 上的振幅小于 $\frac{\varepsilon}{2(b-a)}$. 由于 $\{(\alpha_j,\beta_j), I_x\}$ 为紧致集 $[a,b]$ 的一个开覆盖, 它有有限子覆盖, 且由下面的 Lebesgue 数引理, 可取 $[a,b]$ 的分割
> $$
> \pi: \, a = x_0 < x_1 < \cdots < x_n = b,
> $$
> 使得每一个小区间 $[x_{i-1},x_i]$ 必含于某个 $(\alpha_j,\beta_j)$ 或 $I_x$ 中. 此时
> $$
> \begin{aligned}
> \sum_{i=1}^{n} \omega_i \cdot \Delta x_i &\leq \sum_{[x_{i-1},x_i] \subset (\alpha_j,\beta_j)} \omega_i \cdot \Delta x_i + \sum_{[x_{i-1},x_i] \subset I_x} \omega_i \cdot \Delta x_i \\\\
> &\leq 2K \sum_{[x_{i-1},x_i] \subset (\alpha_j,\beta_j)} \Delta x_i + \frac{\varepsilon}{2(b-a)} \sum_{[x_{i-1},x_i] \subset I_x} \Delta x_i \\\\
> &\leq 2K \sum_j (\beta_j - \alpha_j) + \frac{\varepsilon}{2(b-a)} (b-a) \\\\
> &\leq 2K \frac{\varepsilon}{4K+1} + \frac{\varepsilon}{2} < \varepsilon.
> \end{aligned}
> $$
> 因此 $f$ 在 $[a,b]$ 上 Riemann 可积.

**引理11** (Lebesgue 数). 设 $\{U_\alpha\}_{\alpha \in \Gamma}$ 为闭区间 $[a,b]$ 的一个开覆盖, 则存在正数 $\lambda > 0$, 使得任何长度不超过 $\lambda$ 的闭区间 $I \subset [a,b]$ 必定完全包含于某个开集 $U_\alpha$ 中.

利用 Lebesgue 定理重新判断定理就显得较简单了（真的吗）
