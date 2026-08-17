---
title: Lesson 2 函数 II
permalink: /integral/integral-2/
createTime: 2026/08/17 14:16:22
---

## Part 2 函数

### · 映射

在前面两节我们介绍了集合和数的集合. 集合是人们对研究对象的一种抽象化. 当我们研究不同性质的对象之间的关系时，集合到集合之间的对应就必须加以考虑. 

**定义1**：映射

> 设 $X, Y$ 为集合. 如果对于每一个元素 $x \in X$，都有 $Y$ 中唯一元素 $y$ 与之对应，则称这种对应关系为从 $X$ 到 $Y$ 的一个映射，记为
> $$
> f: X \rightarrow Y, \quad y = f(x),
> $$
> 或
>
> $$
> f: X \rightarrow Y, \quad x \mapsto f(x),
> $$
> 我们将 $y = f(x)$ 称为 $x$ 在 $f$ 下的象，而将 $x$ 称为 $y$ 的一个原象或逆象. 集合 $X$ 称为映射 $f$ 的定义域，$f$ 的象的全体组成的集合 $f(X)$ 是 $Y$ 的子集，称为 $f$ 的值域，即
>
> $$
> f(X) = \{f(x) \mid x \in X\}.
> $$
>
> > 映射有时也称为函数，特别是当 $Y \subseteq \mathbb{R}$ 是数集时更是如此. 通常也把映射写为 $y = f(x)$ 或 $f(x)$，这时 $x$ 也称为变量或自变量，$y$ 也称为因变量. 如果 $X, Y \subseteq \mathbb{R}$ 均为数集，映射 $f: X \rightarrow Y$ 也称为一元函数或一元实值函数或一元实变函数. 
> >
> > 函数通常有三种基本的表示方法：一是列表法，即将自变量 $x$ 和因变量 $y$ 之间的关系一一罗列出来；二是图形法，以一元函数为例，函数 $f$ 可以表示为平面上的点集 $\{(x, f(x))\}$；三是解析法，即用解析表达式来表示函数. 

下面是几个例子. 

/example/

> 特征函数 $\chi_A$ ：设 $A$ 为集合 $X$ 的子集，定义函数 $\chi_A: X \rightarrow \mathbb{R}$ 为
> $$
> \chi_A(x) = \begin{cases} 
> 1, & x \in A, \\\\
> 0, & x \in X - A.
> \end{cases}
> $$
> 这个函数称为 $A$ 的特征函数. 容易看出，$A \neq B$ 当且仅当 $\chi_A \neq \chi_B$. 

/example/

> 符号函数. 
>
> 定义函数 $\text{sgn}: \mathbb{R} \rightarrow \mathbb{R}$ 如下
>
> $$
> \text{sgn}(x) = \begin{cases} 
> -1, & x < 0, \\\\
> 0, & x = 0, \\\\
> 1, & x > 0.
> \end{cases}
> $$

/example/

> 设 $a, b$ 为固定的实数（常数），如下定义映射
> $$
> f: \mathbb{R} \rightarrow \mathbb{R}, \quad f(x) = ax + b,
> $$
> 这是熟知的线性函数. 

**定义2**：单射和满射

> 设 $f: X \rightarrow Y$ 为映射，如果对任意 $x_1 \neq x_2 \in X$，均有 $f(x_1) \neq f(x_2)$，则称 $f$ 为单射；如果 $f(X) = Y$，即对任意 $y \in Y$，均存在 $x \in X$，使得 $y = f(x)$，则称 $f$ 为满射. 
>
> 注意，如果 $f: X \rightarrow Y$ 既是单射，又是满射，则称 $f$ 为一一映射或一一满射. 在有的书上一一映射是指我们这儿的单射. 

/example/ 在集合 $\mathbb{Z}^+$ 和 $\mathbb{N}$ 之间建立一一映射. 

> 定义映射 $f: \mathbb{Z}^+ \rightarrow \mathbb{N}$ 如下：
>
> $$
> f(n) = n + 1, \quad \forall n \in \mathbb{Z}^+,
> $$
> 则易见 $f$ 是一一映射. 
>
> > 上例告诉我们，一个集合有时可以和其真子集之间建立一一映射. 不过，这样的集合必定是无限集. 

/example/ 设 $n$ 为正奇数，如下定义映射

$$
f: \mathbb{R} \rightarrow \mathbb{R}, \quad f(x) = x^n,
$$
则 $f$ 是一一映射. 

> 我们熟知当 $x < y$ 时 $x^n < y^n$，因此 $f$ 是单射. 下面说明 $f$ 为满射. 不妨设 $y_0 > 0$，我们要找到 $x_0 \in \mathbb{R}$，使得 $y_0 = x_0^n$. 考虑数集
>
> $$
> A = \{r \in \mathbb{R} \mid r^n \leqslant y_0\},
> $$
> 因为 $0^n = 0 < y_0$，故 $0 \in A$，这说明 $A$ 不是空集. 另一方面，$(y_0 + 1)^n > y_0 + 1 > y_0$，因此 $y_0 + 1$ 是 $A$ 的上界. 由确界原理，$A$ 有上确界，记为 $x_0$. 
>
> 按照确界的定义，任给 $\varepsilon > 0$，存在 $r' \in A$，使得
>
> $$
> r' > x_0 - \varepsilon,
> $$
> 这说明
>
> $$
> (x_0 - \varepsilon)^n < (r')^n \leqslant y_0.
> $$
> 根据二项式展开，当 $0 < \varepsilon < 1$ 时，有
>
> $$
> (x_0 - \varepsilon)^n = x_0^n + \sum_{k=0}^{n-1} C_n^k (x_0)^k (-\varepsilon)^{n-k} \geqslant x_0^n - \varepsilon \sum_{k=0}^{n-1} C_n^k |x_0|^k,
> $$
> 这说明，对任意 $0 < \varepsilon < 1$，有
>
> $$
> x_0^n - \varepsilon \sum_{k=0}^{n-1} C_n^k |x_0|^k \leqslant (x_0 - \varepsilon)^n < y_0,
> $$
> 由 $\varepsilon$ 的任意性得
>
> $$
> x_0^n \leqslant y_0.
> $$
> 如果 $x_0^n < y_0$，则对充分小的 $\varepsilon > 0$，也有
>
> $$
> (x_0 + \varepsilon)^n \leqslant x_0^n + \varepsilon \sum_{k=0}^{n-1} C_n^k |x_0|^k < y_0,
> $$
> 但这与 $x_0$ 是 $A$ 的上确界相矛盾. 因此只能有 $x_0^n = y_0$. 

**定义3**：逆映射

> 设 $f: X \rightarrow Y$ 为一一映射，因此对任意 $y \in Y$，存在唯一的 $x \in X$，使得 $y = f(x)$，定义映射
> $$
> f^{-1}: Y \rightarrow X, \quad f^{-1}(y) = x,
> $$
> 称为 $f$ 的逆映射. 
>
> 根据这个定义，一一映射也称为可逆映射. 逆映射有时也称为反函数. 根据上面的例子，当 $n$ 为正奇数时，$f(x) = x^n$ 可逆，其反函数记为 $f^{-1}(x) = x^{\frac{1}{n}}$；当 $n$ 为一般正整数时，$f^{-1}(x) = x^{\frac{1}{n}}$ 对 $x \geqslant 0$ 也有定义. 

**定义4**：复合映射

> 设 $f: Y \rightarrow Z, g: X \rightarrow Y$ 均为映射，我们定义映射
> $$
> f \circ g: X \rightarrow Z, \quad f \circ g(x) = f(g(x)), \quad x \in X,
> $$
> 称为 $f$ 和 $g$ 的复合映射. 
>
> > 根据这个定义，一一映射也称为可逆映射. 逆映射有时也称为反函数. 根据上面的例子，当 $n$ 为正奇数时，$f(x) = x^n$ 可逆，其反函数记为 $f^{-1}(x) = x^{\frac{1}{n}}$；当 $n$ 为一般正整数时，$f^{-1}(x) = x^{\frac{1}{n}}$ 对 $x \geqslant 0$ 也有定义. 
> >
> > 用复合映射的语言来描述，则映射 $f: X \rightarrow Y$ 可逆当且仅当存在映射 $g: Y \rightarrow X$，
> >
> > 使得
> > $$
> > f \circ g = \text{id}_Y, g \circ f = \text{id}_X
> > $$
> > 其中
> > $$
> > \text{id}_X: X \rightarrow X, \quad \text{id}_X(x) = x; \quad \text{id}_Y: Y \rightarrow Y, \quad \text{id}_Y(y) = y
> > $$
> > 分别表示 $X$ 到自身和 $Y$ 到自身的恒同映射. 

/example/

> 当 $n$ 为正整数时，函数 $h(x) = x^{-n}$ ($x \neq 0$) 可以看成是两个函数 $f(x) = x^n$ 和 $g(x) = \frac{1}{x}$ ($x \neq 0$) 的复合. 
>
> 进一步，对于有理数 $\frac{p}{q}$ ($p, q$ 为无公共因子的整数，$q$ 为正奇数)，我们定义
>
> $$
> x^{\frac{p}{q}} = (-1)^{\frac{p}{q}}(|x|^p)^{\frac{1}{q}},
> $$
> 其中，当 $p$ 为偶数时 $(-1)^{\frac{p}{q}} = 1$，当 $p$ 为奇数时 $(-1)^{\frac{p}{q}} = -1$. 当 $q$ 为偶数时，上式对 $x < 0$ 无定义. 

### · 函数

映射的复合可以看成是从已知映射出发构造新映射的一种方法. 对于实函数而言，由于其值域是数集，而实数有四则运算，因此对函数也可以定义四则运算，这样就得到了构造函数的更多手段. 

**定义5**：函数的四则运算

> 设 $f, g: X \rightarrow \mathbb{R}$ 为函数. 
>
> (1) 如果 $\alpha, \beta$ 为实数，函数
>
> $$
> \alpha f + \beta g: X \rightarrow \mathbb{R}, \quad x \mapsto \alpha f(x) + \beta g(x)
> $$
> 称为 $f$ 和 $g$ 的线性组合；
>
> (2) 函数
>
> $$
> fg: X \rightarrow \mathbb{R}, \quad x \mapsto f(x)g(x)
> $$
> 称为 $f$ 和 $g$ 的乘积；
>
> (3) 如果 $g(x) \neq 0, \forall x \in X$，则函数
>
> $$
> \frac{f}{g}: X \rightarrow \mathbb{R}, \quad x \mapsto \frac{f(x)}{g(x)}
> $$
> 称为 $f$ 和 $g$ 的商. 
>
> 注. 如果两个函数的定义域不同，则我们也可以在它们的公共定义域上定义四则运算. 

**定义6**：初等函数 

> 下列五类函数称为基本初等函数：
>
> (1) 常值函数 $f(x) = C$ 和幂函数 $f(x) = x^\alpha$ ($\alpha \in \mathbb{R}$);
>
> (2) 指数函数 $f(x) = a^x$ ($a > 0, a \neq 1$);
>
> (3) 对数函数 $f(x) = \log_a x$ ($a > 0, a \neq 1$);
>
> (4) 三角函数 $f(x) = \sin x, \cos x, \tan x$ 等；
>
> (5) 反三角函数 $f(x) = \arcsin x, \arccos x, \arctan x$ 等. 
>
> 由基本初等函数经过有限次四则运算和复合运算所生成的函数称为初等函数. 

初等函数的定义域是其自变量的最大取值范围. 这些函数的完整定义通常要借助确界原理. 以指数函数为例，设 $a > 0$，我们要对任意实数 $x$ 定义 $a^x$ 的值. 

当 $a = 1$ 时，我们定义 $a^x = 1$. 设 $a > 1$，我们规定 $a^0 = 1$. 如果 $x > 0$，当 $x = \frac{p}{q}$ ($p, q$ 为正整数) 为有理数时，我们定义 $a^x$ 为这样一个正数，它的 $q$ 次方为 $a^p$；当 $x$ 为正无理数时，定义
$$
a^x = \sup\{a^r \mid r > 0, r \in \mathbb{Q}\};
$$
当 $x < 0$ 时，定义

$$
a^x = \frac{1}{a^{-x}};
$$
如果 $a < 1$，定义

$$
a^x = \left(\frac{1}{a}\right)^{-x}.
$$
这样就定义了所有的指数函数. 类似的，还可以定义当 $a$ 为无理数时的幂函数 $x^\alpha$ ($x > 0$)，我们留给读者完成. 在后面的章节中我们将通过指数函数和对数函数的复合来重新考虑幂函数的定义. 

一元函数也可用其平面图像来直观表示. 函数 $f$ 的图像是指由 $(x, f(x))$ ($x$ 属于 $f$ 的定义域) 组成的集合，它是平面 $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ 的子集. 通过观察函数图像可以了解函数的简单特性. 函数的简单特性包括：

> (1) 有界性. 如果 $f$ 的值域有上界，则称函数 $f$ 有上界；如果 $f$ 的值域有下界，则称 $f$ 有下界；既有下界又有上界的函数称为有界函数. 
>
> (2) 单调性. 如果对于定义域中任意的 $x_1 < x_2$，均有 $f(x_1)(<) \leqslant f(x_2)$，则称 $f$ 是 (严格) 单调递增函数；如果对于定义域中任意的 $x_1 < x_2$，均有 $f(x_1)(>) \geqslant f(x_2)$，则称 $f$ 是 (严格) 单调递减函数；它们统称为单调函数. 
>
> (3) 奇偶性. 如果 $f(x) = -f(-x)$，则称 $f$ 是奇函数；如果 $f(x) = f(-x)$，则称 $f$ 是偶函数. 
>
> (4) 周期性. 如果存在常数 $T \neq 0$，使得 $f(x) = f(x + T)$，则称 $f$ 是周期函数，$T$ 为其周期. 周期函数的典型例子是三角函数. 
