---
title: Chapter 0 绪论
permalink: /integral/integral-0/
createTime: 2025/09/16 20:57:28
---

## Part 1 分析

### · Archimedes

Archimedes，想要求一个不规则图形的面积. 当时他计算的是抛物线 $y=x^2$ 下方、$x=a$ 左侧的面积. 他想到的办法是竖直剖分这个图形，每一个细长条近似为一个矩形，那么这个图形的不规则性就得到了缓解. 有
$$
\begin{aligned}
S&=\sum_{i=1}^n\frac{a}{n}(\frac{ia}{n})^2=\frac{a^3}{n^3}\sum_{i=1}^ni^2\\\\
&=\frac{a^3}{n^3}\cdot\frac{1}{6}n(n+1)(2n+1)\\\\
&=\frac{1}{6}a^3(2+\frac{3}{n}+\frac{1}{n^2})\\
\end{aligned}
$$
当 $n\to\infty$ 时，这个面积值越来越趋近于一个常数，有
$$
\begin{aligned}
S=\lim_{n\to\infty}\frac{1}{6}a^3(2+\frac{3}{n}+\frac{1}{n^2})=\frac{1}{3}a^3\\
\end{aligned}
$$
由此，Archimedes认为，不同的表达式能得到相同的一个极限值，这说明开始虽然用了近似，但是最后我们得到的结果是一个确定的精确值.

我们也可以对$k$次函数做同样的事：
$$
\begin{aligned}
S=\sum_{i=1}^n\frac{a}{n}(\frac{ia}{n})^k=\frac{a^{k+1}}{n^{k+1}}\sum_{i=1}^ni^k\\
\end{aligned}
$$


$k$ 值越来越大，没有一般的表达式了，手算的难度也越来越大. Archimedes当年正是停在了这个地方.

### · 分析

曲线围成的图形面积，本就不是人能解决的东西

