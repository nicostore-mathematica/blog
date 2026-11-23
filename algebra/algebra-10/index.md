---
url: /algebra/algebra-10/index.md
---
## Part 1 多元多项式

设 $\mathbb{K}$ 是数域，$x\_1, x\_2, \cdots, x\_n$ 是 $n$ 个未定元，它们彼此无关. 称 $a x\_1^{k\_1} x\_2^{k\_2} \cdots x\_n^{k\_n}$ 为一个单项式，其中 $a$ 是这个单项式的系数，$k\_j$ 为非负整数. 如果 $a \neq 0$，则称该单项式的次数为 $k = k\_1 + k\_2 + \cdots + k\_n$.

如果两个单项式除相差一个系数外，其余都相同，即每个 $x\_i$ 的次数都相同，则称这两个单项式为同类项.

同类项相加，可将它们的系数相加. 比如
$$
2x\_1^2 x\_2 x\_3^4 + 3x\_1^2 x\_2 x\_3^4 = 5x\_1^2 x\_2 x\_3^4.
$$

不是同类项相加时不能把系数相加. 有限个单项式的和称为一个 $n$ 元多项式，它的一般形式为

$$
f(x\_1, x\_2, \cdots, x\_n) = \sum a\_{i\_1 i\_2 \cdots i\_n} x\_1^{i\_1} x\_2^{i\_2} \cdots x\_n^{i\_n}.
$$

下面我们总假定在一个文字多项式中的各单项式彼此不同，即同类项已合并.

对一个 $n$ 元多项式，它的系数非零的单项式的最大次数称为这个多项式的次数. 比如下列三元多项式的次数为 5:

$$
x\_1^2 x\_2 x\_3^2 + 2x\_1 x\_2 x\_3 - 3x\_1 x\_2 + 1.
$$

两个 $n$ 元多项式称为相等当且仅当它们同类项的系数全都相等.

两个 $n$ 元多项式相加，即将它们同类项的系数相加. 例如，若

$$
f(x\_1, x\_2, x\_3) = x\_1^3 + 2x\_1 x\_3 - 3x\_1 x\_2 x\_3,
$$
$$
g(x\_1, x\_2, x\_3) = -x\_2^2 - 2x\_1 x\_3 + 5x\_1 x\_2 x\_3,
$$

则

$$
f(x\_1, x\_2, x\_3) + g(x\_1, x\_2, x\_3) = x\_1^3 - x\_2^2 + 2x\_1 x\_2 x\_3.
$$

两个单项式 $a x\_1^{i\_1} x\_2^{i\_2} \cdots x\_n^{i\_n}$，$b x\_1^{j\_1} x\_2^{j\_2} \cdots x\_n^{j\_n}$ 相乘，其积为

$$
ab x\_1^{i\_1 + j\_1} x\_2^{i\_2 + j\_2} \cdots x\_n^{i\_n + j\_n}.
$$

两个多项式相乘按分配律可化为各单项式乘积之和. 如

$$
(x\_1^3 + x\_1 x\_2 x\_3 - 2x\_3)(x\_1^2 - x\_1 x\_2 - x\_3^2)
$$
$$
\= x\_1^5 - x\_1^4 x\_2 - x\_1^3 x\_3^2 + x\_1^3 x\_2 x\_3 - x\_1^2 x\_2^2 x\_3 - x\_1 x\_2 x\_3^3 - 2x\_1^2 x\_3 + 2x\_1 x\_2 x\_3 + 2x\_3^3.
$$

相乘后如出现同类项应予以合并. 多元多项式不像一元多项式那样可按次数的大小降幂或升幂排列. 比如

$$
x\_1^2 x\_2 + x\_1 x\_2 x\_3,
$$

其中两项都是 3 次式. 为了给它们排次序，我们常采用“字典排列法”：$n$ 个未定元按自然足标为序排列，即为 $x\_1, x\_2, \cdots, x\_n$；若有两个非零单项式：

$$
a x\_1^{i\_1} x\_2^{i\_2} \cdots x\_n^{i\_n},\ b x\_1^{j\_1} x\_2^{j\_2} \cdots x\_n^{j\_n},
$$

若 $i\_1 = j\_1,\ i\_2 = j\_2,\ \cdots,\ i\_{k-1} = j\_{k-1}$，但 $i\_k > j\_k$，则规定 $a x\_1^{i\_1} x\_2^{i\_2} \cdots x\_n^{i\_n}$ 先于 $b x\_1^{j\_1} x\_2^{j\_2} \cdots x\_n^{j\_n}$. 按这样排列，任一多项式都只有唯一的方法把它的各单项式排序. 这时要注意第一项即首项未必是最高次项，末项也未必是次数最低的项. 例如多项式：

$$
x\_1^2 x\_2 + x\_1^3 x\_3 + 3x\_1 x\_2 x\_3 - 4x\_2 x\_3^5
$$

按字典排列应为

$$
x\_1^3 x\_3 + x\_1^2 x\_2 + 3x\_1 x\_2 x\_3 - 4x\_2 x\_3^5.
$$

**引理1**

> 若 $f(x\_1, x\_2, \cdots, x\_n)$ 及 $g(x\_1, x\_2, \cdots, x\_n)$ 都是 $\mathbb{K}$ 上的 $n$ 元多项式且非零，则按字典排列法排列后乘积的首项等于 $f$ 的首项与 $g$ 的首项之积.

/proof/

> 设 $a x\_1^{i\_1} x\_2^{i\_2} \cdots x\_n^{i\_n}$ 和 $b x\_1^{j\_1} x\_2^{j\_2} \cdots x\_n^{j\_n}$ 分别是 $f$ 和 $g$ 的首项（按字典排列法），它们的乘积为 $ab x\_1^{i\_1 + j\_1} x\_2^{i\_2 + j\_2} \cdots x\_n^{i\_n + j\_n}$.
>
> 其他任意两个单项式 $c x\_1^{k\_1} x\_2^{k\_2} \cdots x\_n^{k\_n}$ 和 $d x\_1^{r\_1} x\_2^{r\_2} \cdots x\_n^{r\_n}$ 之积为 $cd x\_1^{k\_1 + r\_1} x\_2^{k\_2 + r\_2} \cdots x\_n^{k\_n + r\_n}$.
>
> 设 $i\_1 = k\_1, \cdots, i\_{t-1} = k\_{t-1},\ i\_t > k\_t;\ j\_1 = r\_1, \cdots, j\_{s-1} = r\_{s-1},\ j\_s > r\_s$，不妨设 $t \leq s$，显然
> $$
> i\_1 + j\_1 = k\_1 + r\_1, \cdots, i\_{t-1} + j\_{t-1} = k\_{t-1} + r\_{t-1},\ i\_t + j\_t > k\_t + r\_t.
> $$
>
> 因此 $ab x\_1^{i\_1 + j\_1} x\_2^{i\_2 + j\_2} \cdots x\_n^{i\_n + j\_n}$ 先于 $cd x\_1^{k\_1 + r\_1} x\_2^{k\_2 + r\_2} \cdots x\_n^{k\_n + r\_n}$.
>
> 同理可证明：$ab x\_1^{i\_1 + j\_1} x\_2^{i\_2 + j\_2} \cdots x\_n^{i\_n + j\_n}$ 先于 $ad x\_1^{i\_1 + r\_1} x\_2^{i\_2 + r\_2} \cdots x\_n^{i\_n + r\_n}$ 和 $cb x\_1^{k\_1 + j\_1} x\_2^{k\_2 + j\_2} \cdots x\_n^{k\_n + j\_n}$. 因此它确是 $fg$ 的首项.

**命题1**

> 若 $f(x\_1, x\_2, \cdots, x\_n) \neq 0$, $g(x\_1, x\_2, \cdots, x\_n) \neq 0$，则
> $$
> f(x\_1, x\_2, \cdots, x\_n) g(x\_1, x\_2, \cdots, x\_n) \neq 0.
> $$

/proof/

> $f$ 和 $g$ 的首项不为零，故 $fg \neq 0$.

**推论1**

> 若 $h(x\_1, x\_2, \cdots, x\_n) \neq 0$，且
> $$
> f(x\_1, x\_2, \cdots, x\_n) h(x\_1, x\_2, \cdots, x\_n) = g(x\_1, x\_2, \cdots, x\_n) h(x\_1, x\_2, \cdots, x\_n),
> $$
>
> 则
>
> $$
> f(x\_1, x\_2, \cdots, x\_n) = g(x\_1, x\_2, \cdots, x\_n).
> $$

多元多项式除了“字典排列法”外，还有“齐次排列法”. 我们先介绍齐次多项式的概念.

若一个多项式 $f(x\_1, x\_2, \cdots, x\_n)$ 的每个单项式都是 $k$ 次式，则称之为 $k$ 次齐次多项式或 $k$ 次型.

如 $a\_1 x\_1 + a\_2 x\_2 + a\_3 x\_3$ 是三元一次型. $x\_1^2 + x\_1 x\_2 - 3x\_2^2$ 为二元二次型. $x\_1^4 - 4x\_2 x\_3 x\_4^2 + 5x\_1 x\_2 x\_3 x\_4$ 为四元四次型.

两个次数相同的齐次多项式之和若不为零，则必仍是同次齐次多项式. 任意两个齐次多项式之积仍为齐次多项式.

任一 $n$ 元多项式均可表示为若干个齐次多项式之和，这只需要将各次数相等的项放在一起即可. 如

$$
2x\_1^3 - 3x\_1 x\_2 + 4x\_4^3 - x\_1 x\_2 x\_3 + x\_4^2 = (2x\_1^3 + 4x\_4^3 - x\_1 x\_2 x\_3) + (x\_4^2 - 3x\_1 x\_2),
$$

其中 $2x\_1^3 + 4x\_4^3 - x\_1 x\_2 x\_3$ 为三次型，$x\_4^2 - 3x\_1 x\_2$ 为二次型.

多元多项式与多元多项式函数之间的关系与一元的情形类似.

**引理2**

> 设 $f(x\_1, x\_2, \cdots, x\_n)$ 是 $\mathbb{K}$ 上的 $n$ 元非零多项式，则必存在 $\mathbb{K}$ 中元 $a\_1, a\_2, \cdots, a\_n$，使 $f(a\_1, a\_2, \cdots, a\_n) \neq 0$.

/proof/

> 对未定元个数 $n$ 用数学归纳法. 当 $n = 1$ 时，多项式 $f(x)$ 只有有限个零点，故总有 $a \in \mathbb{K}$ 使 $f(a) \neq 0$. 现设对有 $n-1$ 个未定元的多项式结论成立. 将 $f(x\_1, x\_2, \cdots, x\_n)$ 写成未定元 $x\_n$ 的多项式：
>
> $$
> f(x\_1, x\_2, \cdots, x\_n) = b\_0 + b\_1 x\_n + \cdots + b\_m x\_n^m,
> $$
>
> 其中 $b\_i = b\_i(x\_1, x\_2, \cdots, x\_{n-1})$ 是 $n-1$ 元多项式. 因为 $f(x\_1, x\_2, \cdots, x\_n) \neq 0$，故可设 $b\_m \neq 0$. 由归纳假设，存在 $a\_1, \cdots, a\_{n-1} \in \mathbb{K}$，使
>
> $$
> b\_m(a\_1, \cdots, a\_{n-1}) \neq 0.
> $$
>
> 因而
>
> $$
> f(a\_1, \cdots, a\_{n-1}, x\_n) = b\_0(a\_1, \cdots, a\_{n-1}) + b\_1(a\_1, \cdots, a\_{n-1}) x\_n + \cdots + b\_m(a\_1, \cdots, a\_{n-1}) x\_n^m
> $$
>
> 是一个非零的以 $x\_n$ 为未定元的一元多项式，故存在 $a\_n \in \mathbb{K}$，使
>
> $$
> f(a\_1, a\_2, \cdots, a\_n) \neq 0.
> $$

**命题2**

> 数域 $\mathbb{K}$ 上的两个 $n$ 元多项式 $f(x\_1, x\_2, \cdots, x\_n)$ 与 $g(x\_1, x\_2, \cdots, x\_n)$ 相等的充分必要条件是对一切 $a\_1, a\_2, \cdots, a\_n \in \mathbb{K}$，均有
> $$
> f(a\_1, a\_2, \cdots, a\_n) = g(a\_1, a\_2, \cdots, a\_n).
> $$

/proof/

> 只需证明充分性. 作
> $$
> h(x\_1, x\_2, \cdots, x\_n) = f(x\_1, x\_2, \cdots, x\_n) - g(x\_1, x\_2, \cdots, x\_n).
> $$
>
> 若 $h(x\_1, x\_2, \cdots, x\_n) \neq 0$，则必有 $a\_1, a\_2, \cdots, a\_n \in \mathbb{K}$，使 $h(a\_1, a\_2, \cdots, a\_n) \neq 0$. 与假设矛盾.

## Part 2 对称多项式

**定义1**

> 设 $f(x\_1, x\_2, \cdots, x\_n)$ 是数域 $\mathbb{K}$ 上的 $n$ 元多项式，若对任意的 $i \neq j\ (1 \leq i, j \leq n)$，均有
>
> $$
> f(x\_1, \cdots, x\_i, \cdots, x\_j, \cdots, x\_n) = f(x\_1, \cdots, x\_j, \cdots, x\_i, \cdots, x\_n),
> $$
>
> 则称 $f(x\_1, x\_2, \cdots, x\_n)$ 是数域 $\mathbb{K}$ 上的 $n$ 元对称多项式.

例如，三元多项式 $x\_1^2 + x\_2^2 + x\_3^2$，将 $x\_1$ 与 $x\_2$ 对换有

$$
x\_1^2 + x\_2^2 + x\_3^2 = x\_2^2 + x\_1^2 + x\_3^2.
$$

又将 $x\_1$ 与 $x\_3$ 对换及将 $x\_2$ 与 $x\_3$ 对换都得到同一个多项式. 因此 $x\_1^2 + x\_2^2 + x\_3^2$ 是对称多项式. 多项式 $x\_1^2 - x\_1 x\_2$ 与 $x\_2^2 - x\_1 x\_2$ 不相等，故 $x\_1^2 - x\_1 x\_2$ 不是对称多项式.

设 $(k\_1, k\_2, \cdots, k\_n)$ 是数组 $(1, 2, \cdots, n)$ 的一个全排列. 若 $f(x\_1, x\_2, \cdots, x\_n)$ 是一个对称多项式，则不难看出：

$$
f(x\_{k\_1}, x\_{k\_2}, \cdots, x\_{k\_n}) = f(x\_1, x\_2, \cdots, x\_n).
$$

我们称 $x\_1 \to x\_{k\_1},\ x\_2 \to x\_{k\_2}, \cdots,\ x\_n \to x\_{k\_n}$ 是未定元的一个置换. 因此对称多项式在未定元的任一置换下不变.

容易看出对称多项式之和仍是对称多项式，对称多项式之积也是对称多项式. 因此对称多项式的多项式还是对称多项式. 这句话的意思是说：若 $f\_1, f\_2, \cdots, f\_m$ 是 $m$ 个 $n$ 元对称多项式，$g(y\_1, y\_2, \cdots, y\_m)$ 是 $m$ 元多项式，则将 $f\_1, f\_2, \cdots, f\_m$ 代替 $y\_1, y\_2, \cdots, y\_m$ 后得到的多项式

$$
h(x\_1, x\_2, \cdots, x\_n) = g(f\_1, f\_2, \cdots, f\_m)
$$

仍是一个 $n$ 元对称多项式.

在对称多项式中，有一类基本的多项式，称为初等对称多项式. 它们是这样定义的：

$$
\sigma\_1 = x\_1 + x\_2 + \cdots + x\_n = \sum\_{i=1}^n x\_i,
$$
$$
\sigma\_2 = x\_1 x\_2 + x\_1 x\_3 + \cdots + x\_{n-1} x\_n = \sum\_{1 \leq i < j \leq n} x\_i x\_j,
$$
$$
\cdots \cdots \cdots \cdots
$$
$$
\sigma\_n = x\_1 x\_2 \cdots x\_n.
$$

这 $n$ 个多项式称为 $n$ 元初等对称多项式. 初等对称多项式之所以重要，是因为我们有下列定理.

**定理1**

> 设 $f(x\_1, x\_2, \cdots, x\_n)$ 是数域 $\mathbb{K}$ 上的对称多项式，则必存在 $\mathbb{K}$ 上唯一的一个多项式 $g(y\_1, y\_2, \cdots, y\_n)$，使
>
> $$
> f(x\_1, x\_2, \cdots, x\_n) = g(\sigma\_1, \sigma\_2, \cdots, \sigma\_n).
> $$

/proof/

> 存在性：设 $f(x\_1, x\_2, \cdots, x\_n)$ 按字典排列法的首项为
> $$
> a x\_1^{i\_1} x\_2^{i\_2} \cdots x\_n^{i\_n},\ a \neq 0.
> $$
>
> 则必有 $i\_1 \geq i\_2 \geq \cdots \geq i\_n$. 事实上 $f(x\_1, x\_2, \cdots, x\_n)$ 是对称多项式，
>
> 若 $i\_k < i\_{k+1}$，则将 $x\_k$ 与 $x\_{k+1}$ 对换得到 $a x\_1^{i\_1} \cdots x\_k^{i\_{k+1}} x\_{k+1}^{i\_k} \cdots x\_n^{i\_n}$，这一项也是 $f(x\_1, x\_2, \cdots, x\_n)$ 中的项，但它应在 $a x\_1^{i\_1} x\_2^{i\_2} \cdots x\_n^{i\_n}$ 之前，此与首项的假定相矛盾.
>
> 作多项式
>
> $$
> g\_1(x\_1, x\_2, \cdots, x\_n) = a \sigma\_1^{i\_1 - i\_2} \sigma\_2^{i\_2 - i\_3} \cdots \sigma\_{n-1}^{i\_{n-1} - i\_n} \sigma\_n^{i\_n}.
> $$
>
> 显然 $g\_1$ 是 $x\_1, x\_2, \cdots, x\_n$ 的对称多项式，且 $g\_1$ 的首项为
>
> $$
> a x\_1^{i\_1 - i\_2} (x\_1 x\_2)^{i\_2 - i\_3} \cdots (x\_1 \cdots x\_n)^{i\_n} = a x\_1^{i\_1} x\_2^{i\_2} \cdots x\_n^{i\_n}.
> $$
>
> 因此 $g\_1$ 与 $f$ 的首项相同，于是 $f\_1 = f - g\_1$ 是一个首项后于 $f$ 的对称多项式. 对 $f\_1$ 重复上述做法，不断做下去，便得到一列对称多项式：
>
> $$
> f\_0 = f,\ f\_1 = f\_0 - g\_1,\ f\_2 = f\_1 - g\_2, \cdots,
> $$
>
> 每个 $f\_i$ 的首项都后于 $f\_{i-1}$ 的首项. 设 $b x\_1^{k\_1} x\_2^{k\_2} \cdots x\_n^{k\_n}$ 是某个 $f\_i\ (i \geq 1)$ 的首项，则因它后于 $f$ 的首项，故有
>
> $$
> i\_1 \geq k\_1 \geq k\_2 \geq \cdots \geq k\_n \geq 0.
> $$
>
> 这样的 $k\_1, k\_2, \cdots, k\_n$ 只有有限个，故多项式 $f\_i$ 不能无限地构造下去，即存在某个正整数 $s$，使 $f\_s = 0$. 于是
>
> $$
> f = g\_1 + f\_1 = g\_1 + g\_2 + f\_2 = \cdots = g\_1 + g\_2 + \cdots + g\_s.
> $$
>
> 由于每个 $g\_i$ 都可表示为 $\sigma\_1, \sigma\_2, \cdots, \sigma\_n$ 的多项式，故 $f$ 也可表示为 $\sigma\_1, \sigma\_2, \cdots, \sigma\_n$ 的多项式.
>
> 唯一性：设 $g(y\_1, \cdots, y\_n)$ 及 $h(y\_1, \cdots, y\_n)$ 都是 $\mathbb{K}$ 上的 $n$ 元多项式，且
>
> $$
> f(x\_1, \cdots, x\_n) = g(\sigma\_1, \cdots, \sigma\_n) = h(\sigma\_1, \cdots, \sigma\_n).
> $$
>
> 令
>
> $$
> \varphi(y\_1, \cdots, y\_n) = g(y\_1, \cdots, y\_n) - h(y\_1, \cdots, y\_n).
> $$
>
> 由假定，有
>
> $$
> \varphi(\sigma\_1, \cdots, \sigma\_n) = 0.
> $$
>
> 我们要证明多项式
>
> $$
> \varphi(y\_1, \cdots, y\_n) = 0.
> $$
>
> 假定 $\varphi(y\_1, \cdots, y\_n) \neq 0$，不妨设
>
> $$
> \varphi(y\_1, y\_2, \cdots, y\_n) = c y\_1^{k\_1} y\_2^{k\_2} \cdots y\_n^{k\_n} + d y\_1^{j\_1} y\_2^{j\_2} \cdots y\_n^{j\_n} + \cdots,
> $$
>
> 其中 $c, d, \cdots$ 均不为零且假定各单项式彼此不是同类项. 在 $\varphi(\sigma\_1, \sigma\_2, \cdots, \sigma\_n)$ 中，
>
> $$
> c \sigma\_1^{k\_1} \sigma\_2^{k\_2} \cdots \sigma\_n^{k\_n} = c x\_1^{k\_1} (x\_1 x\_2)^{k\_2} \cdots (x\_1 x\_2 \cdots x\_n)^{k\_n} + \cdots
> $$
>
> $$
> \= c x\_1^{k\_1 + k\_2 + \cdots + k\_n} x\_2^{k\_2 + k\_3 + \cdots + k\_n} \cdots x\_n^{k\_n} + \cdots,
> $$
>
> $$
> d \sigma\_1^{j\_1} \sigma\_2^{j\_2} \cdots \sigma\_n^{j\_n} = d x\_1^{j\_1} (x\_1 x\_2)^{j\_2} \cdots (x\_1 x\_2 \cdots x\_n)^{j\_n} + \cdots
> $$
>
> $$
> \= d x\_1^{j\_1 + j\_2 + \cdots + j\_n} x\_2^{j\_2 + j\_3 + \cdots + j\_n} \cdots x\_n^{j\_n} + \cdots.
> $$
>
> 因此 $c \sigma\_1^{k\_1} \sigma\_2^{k\_2} \cdots \sigma\_n^{k\_n}$ 与 $d \sigma\_1^{j\_1} \sigma\_2^{j\_2} \cdots \sigma\_n^{j\_n}$ 等化成 $x\_1, x\_2, \cdots, x\_n$ 的多项式后其首项都不是同类项，从而 $\varphi(\sigma\_1, \sigma\_2, \cdots, \sigma\_n)$ 的首项一定是这些首项中排在最前的那一个. 特别，
>
> $$
> \varphi(\sigma\_1, \sigma\_2, \cdots, \sigma\_n) \neq 0,
> $$
>
> 引出矛盾.

上述定理通常被称为对称多项式基本定理. 这个定理的存在性证明是构造性的，可用来求对称多项式的初等对称多项式表示.

/example/ 将对称多项式

$$
f(x\_1, x\_2, x\_3) = x\_1^2 x\_2 + x\_1^2 x\_3 + x\_1 x\_2^2 + x\_1 x\_3^2 + x\_2^2 x\_3 + x\_2 x\_3^2
$$

表示为 $\sigma\_1, \sigma\_2, \sigma\_3$ 的多项式.

> 这时首项为 $x\_1^2 x\_2$，作
>
> $$
> \sigma\_1^{2-1} \sigma\_2^1 = \sigma\_1 \sigma\_2 = (x\_1 + x\_2 + x\_3)(x\_1 x\_2 + x\_1 x\_3 + x\_2 x\_3)
> $$
>
> $$
> \= x\_1^2 x\_2 + x\_1^2 x\_3 + x\_1 x\_2^2 + x\_1 x\_3^2 + x\_2^2 x\_3 + x\_2 x\_3^2 + 3x\_1 x\_2 x\_3.
> $$
>
> 因此
>
> $$
> f(x\_1, x\_2, x\_3) = \sigma\_1 \sigma\_2 - 3\sigma\_3.
> $$

这种做法当多项式次数较高时计算可能相当繁. 下面我们通过举例介绍“待定系数法”.

/example/ 试将对称多项式

$$
f(x\_1, x\_2, x\_3) = (x\_1^2 + x\_2^2)(x\_1^2 + x\_3^2)(x\_2^2 + x\_3^2)
$$

表示为初等对称多项式的多项式.

> 注意到 $f$ 是一个齐次多项式，次数等于 6. 又 $f$ 的首项是 $x\_1^4 x\_2^2$，它的指数组为 $(4,2,0)$. 从定理 5.9.1 的证明中可看出 $f\_i$ 首项的指数组只可能是 $(4,1,1), (3,3,0), (3,2,1), (2,2,2)$，相对应的 $f\_i$ 的首项为
>
> $$
> \sigma\_1^{4-1} \sigma\_2^{1-1} \sigma\_3^1 = \sigma\_1^3 \sigma\_3,\ \sigma\_1^{3-3} \sigma\_2^{3-0} \sigma\_3^0 = \sigma\_2^3,\ \sigma\_1^{3-2} \sigma\_2^{2-1} \sigma\_3^1 = \sigma\_1 \sigma\_2 \sigma\_3,\ \sigma\_1^{2-2} \sigma\_2^{2-2} \sigma\_3^2 = \sigma\_3^2,
> $$
>
> 因此可设
>
> $$
> f = \sigma\_1^2 \sigma\_2^2 + a \sigma\_1^3 \sigma\_3 + b \sigma\_2^3 + c \sigma\_1 \sigma\_2 \sigma\_3 + d \sigma\_3^2.
> $$
>
> 取 $x\_1, x\_2, x\_3$ 的一些特殊值便得到关于 $a, b, c, d$ 的线性方程组. 不难解得
>
> $$
> a = -2,\ b = -2,\ c = 4,\ d = -1.
> $$
>
> 因此
>
> $$
> f = \sigma\_1^2 \sigma\_2^2 - 2\sigma\_1^3 \sigma\_3 - 2\sigma\_2^3 + 4\sigma\_1 \sigma\_2 \sigma\_3 - \sigma\_3^2.
> $$

上述例子中 $f$ 是一个齐次多项式. 若 $f$ 不是齐次多项式，则可把 $f$ 分解为齐次多项式之和. 显然每个齐次多项式仍是对称多项式，可用初等对称多项式来表示. 这样便可得到 $f$ 的表示.

下面我们证明著名的 Newton (牛顿) 公式. 令

$$
s\_k = x\_1^k + x\_2^k + \cdots + x\_n^k\ (k \geq 1);\ s\_0 = n.
$$

**引理 5.9.1**

> 设
>
> $$
> \begin{aligned}
> f(x) &= (x - x\_1)(x - x\_2)\cdots(x - x\_n)\\\\
> &= x^n - \sigma\_1 x^{n-1} + \sigma\_2 x^{n-2} + \cdots + (-1)^n \sigma\_n,
> \end{aligned}
> $$
> 则
>
> $$
> x^{k+1} f'(x) = (s\_0 x^k + s\_1 x^{k-1} + \cdots + s\_k) f(x) + g(x),
> $$
>
> 其中 $g(x)$ 作为 $x$ 的多项式其次数小于 $n$.

/proof/

> 容易看出
> $$
> f'(x) = \sum\_{i=1}^n \frac{f(x)}{x - x\_i}.
> $$
>
> 因此
>
> $$
> \begin{aligned}
> x^{k+1} f'(x) &= \sum\_{i=1}^n \frac{x^{k+1}}{x - x\_i} f(x)\\\\
> &= \sum\_{i=1}^n \frac{x^{k+1} - x\_i^{k+1} + x\_i^{k+1}}{x - x\_i} f(x)\\\\
> &= f(x) \sum\_{i=1}^n \frac{x^{k+1} - x\_i^{k+1}}{x - x\_i} + g(x),
> \end{aligned}
> $$
> 其中
>
> $$
> g(x) = \sum\_{i=1}^n \frac{x\_i^{k+1} f(x)}{x - x\_i}
> $$
>
> 作为 $x$ 的多项式其次数小于 $n$. 又
>
> $$
> \begin{aligned}
> \sum\_{i=1}^n \frac{x^{k+1} - x\_i^{k+1}}{x - x\_i}& = \sum\_{i=1}^n (x^k + x\_i x^{k-1} + \cdots + x\_i^k)\\\\
> &= n x^k + (x\_1 + \cdots + x\_n) x^{k-1} + \cdots + (x\_1^k + \cdots + x\_n^k)\\\\
> &= s\_0 x^k + s\_1 x^{k-1} + \cdots + s\_k,
> \end{aligned}
> $$
> 于是
>
> $$
> x^{k+1} f'(x) = (s\_0 x^k + s\_1 x^{k-1} + \cdots + s\_k) f(x) + g(x).
> $$

**命题1**(Newton 公式)

> 记号同上，若 $k \leq n-1$，则
> $$
> s\_k - s\_{k-1} \sigma\_1 + s\_{k-2} \sigma\_2 - \cdots + (-1)^{k-1} s\_1 \sigma\_{k-1} + (-1)^k k \sigma\_k = 0;
> $$
>
> 若 $k \geq n$，则
>
> $$
> s\_k - s\_{k-1} \sigma\_1 + s\_{k-2} \sigma\_2 - \cdots + (-1)^n s\_{k-n} \sigma\_n = 0.
> $$

/proof/

> 对 $f(x) = x^n - \sigma\_1 x^{n-1} + \sigma\_2 x^{n-2} + \cdots + (-1)^n \sigma\_n$ 求导并乘以 $x^{k+1}$ 得到：
> $$
> x^{k+1} f'(x) = n x^{n+k} - (n-1) \sigma\_1 x^{n+k-1} + (n-2) \sigma\_2 x^{n+k-2} + \cdots + (-1)^{n-1} \sigma\_{n-1} x^{k+1}.
> $$
>
> 由引理，有
>
> $$
> x^{k+1} f'(x) = (s\_0 x^k + s\_1 x^{k-1} + \cdots + s\_k) f(x) + g(x)
> $$
>
> $$
> \= (s\_0 x^k + s\_1 x^{k-1} + \cdots + s\_k)(x^n - \sigma\_1 x^{n-1} + \sigma\_2 x^{n-2} + \cdots + (-1)^n \sigma\_n) + g(x).
> $$
>
> 比较 $x^n$ 的系数即知，当 $k \leq n-1$ 时，有
>
> $$
> s\_k - s\_{k-1} \sigma\_1 + s\_{k-2} \sigma\_2 - \cdots + (-1)^{k-1} s\_1 \sigma\_{k-1} + (-1)^k k \sigma\_k = 0;
> $$
>
> 若 $k \geq n$，则
>
> $$
> s\_k - s\_{k-1} \sigma\_1 + s\_{k-2} \sigma\_2 - \cdots + (-1)^n s\_{k-n} \sigma\_n = 0.
> $$

## Part 3 结式和判别式

设 $f(x), g(x)$ 是数域 $\mathbb{K}$ 上的一元多项式. 现在我们来讨论它们何时有公共根（简称公根）. 公根问题实际上等价于公因子问题，但是现在我们要从另外一个角度来探讨这个问题.

**引理1**

> 设 $d(x)$ 是 $f(x)$ 与 $g(x)$ 的最大公因式，则 $d(x) \neq 1$ 的充分必要条件是存在 $\mathbb{K}$ 上的非零多项式 $u(x), v(x)$，使
>
> $$
> f(x) u(x) = g(x) v(x),
> \tag{1}
> $$
>
> 且 $\deg u(x) < \deg g(x)$, $\deg v(x) < \deg f(x)$.

/proof/

> 若 $d(x) \neq 1$，令 $f(x) = d(x) v(x)$, $g(x) = d(x) u(x)$，则
> $$
> f(x) u(x) = d(x) v(x) u(x) = g(x) v(x),
> $$
>
> 且 $\deg u(x) < \deg g(x)$, $\deg v(x) < \deg f(x)$.
>
> 反过来，若 $d(x) = 1$，则由 (1) 式知 $f(x) \mid g(x) v(x)$. 但 $f(x)$ 与 $g(x)$ 互素，因此 $f(x) \mid v(x)$，与 $\deg f(x) > \deg v(x)$ 矛盾. $\square$
>
> 现设
>
> $$
> f(x) = a\_0 x^n + a\_1 x^{n-1} + \cdots + a\_n,
> $$
>
> $$
> g(x) = b\_0 x^m + b\_1 x^{m-1} + \cdots + b\_m,
> $$
>
> $$
> u(x) = x\_0 x^{m-1} + x\_1 x^{m-2} + \cdots + x\_{m-1},
> $$
>
> $$
> v(x) = y\_0 x^{n-1} + y\_1 x^{n-2} + \cdots + y\_{n-1},
> $$
>
> 其中 $x\_0, \cdots, x\_{m-1}; y\_0, \cdots, y\_{n-1}$ 为待定未知数. 将上面 4 个式子代入 (1) 式，比较系数得
>
> $$
> \begin{cases}
> a\_0 x\_0 = b\_0 y\_0, \\\\
> a\_1 x\_0 + a\_0 x\_1 = b\_1 y\_0 + b\_0 y\_1, \\\\
> a\_2 x\_0 + a\_1 x\_1 + a\_0 x\_2 = b\_2 y\_0 + b\_1 y\_1 + b\_0 y\_2, \\\\
> \cdots \cdots \cdots \cdots \\\\
> a\_n x\_{m-3} + a\_{n-1} x\_{m-2} + a\_{n-2} x\_{m-1} = b\_m y\_{n-3} + b\_{m-1} y\_{n-2} + b\_{m-2} y\_{n-1}, \\\\
> a\_n x\_{m-2} + a\_{n-1} x\_{m-1} = b\_m y\_{n-2} + b\_{m-1} y\_{n-1}, \\\\
> a\_n x\_{m-1} = b\_m y\_{n-1}.
> \end{cases}
> $$
>
> 我们把上述 $m+n$ 个等式看成是 $m+n$ 个未知数 $x\_0, x\_1, \cdots, x\_{m-1}; y\_0, y\_1, \cdots, y\_{n-1}$ 的线性方程组. 不难算出这个线性方程组系数矩阵的转置为
>
> $$
> \begin{pmatrix}
> a\_0 & a\_1 & a\_2 & \cdots & \cdots & a\_n & 0 & \cdots & 0 \\
> 0 & a\_0 & a\_1 & \cdots & \cdots & a\_{n-1} & a\_n & \cdots & 0 \\
> 0 & 0 & a\_0 & \cdots & \cdots & a\_{n-2} & a\_{n-1} & \cdots & 0 \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & 0 & \cdots & 0 & a\_0 & \cdots & \cdots & \cdots & a\_n \\
> -b\_0 & -b\_1 & -b\_2 & \cdots & \cdots & \cdots & -b\_m & \cdots & 0 \\
> 0 & -b\_0 & -b\_1 & \cdots & \cdots & \cdots & -b\_{m-1} & -b\_m & \cdots \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & \cdots & 0 & -b\_0 & -b\_1 & \cdots & \cdots & \cdots & -b\_m
> \end{pmatrix}.
> $$
>
> 若上述 $m+n$ 方阵的行列式不等于零，则 $x\_i, y\_j$ 都只能全为零，这时 $f(x), g(x)$ 互素，即没有公根. 反之，若上述方阵的行列式等于零，则 $f(x), g(x)$ 有公因子，即有公根.

**定义1**

> 设
>
> $$
> f(x) = a\_0 x^n + a\_1 x^{n-1} + \cdots + a\_n,
> $$
>
> $$
> g(x) = b\_0 x^m + b\_1 x^{m-1} + \cdots + b\_m.
> $$
>
> 定义下列 $m+n$ 阶行列式：
>
> $$
> R(f,g) =
> \begin{vmatrix}
> a\_0 & a\_1 & a\_2 & \cdots & \cdots & a\_n & 0 & \cdots & 0 \\
> 0 & a\_0 & a\_1 & \cdots & \cdots & a\_{n-1} & a\_n & \cdots & 0 \\
> 0 & 0 & a\_0 & \cdots & \cdots & a\_{n-2} & a\_{n-1} & \cdots & 0 \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & 0 & \cdots & 0 & a\_0 & \cdots & \cdots & \cdots & a\_n \\
> b\_0 & b\_1 & b\_2 & \cdots & \cdots & b\_m & 0 & \cdots & 0 \\
> 0 & b\_0 & b\_1 & \cdots & \cdots & b\_{m-1} & b\_m & \cdots & \cdots \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & \cdots & 0 & b\_0 & b\_1 & \cdots & \cdots & \cdots & b\_m
> \end{vmatrix}
> $$
>
> 为 $f(x)$ 与 $g(x)$ 的结式或称 Sylvester 行列式.

显然我们可以有下列判断两个多项式存在公根的定理.

**定理1**

> 多项式 $f(x)$ 与 $g(x)$ 有公根（在复数域中）的充分必要条件是它们的结式 $R(f,g) = 0$.

**推论1**

> 多项式 $f(x)$ 与 $g(x)$ 互素的充分必要条件是 $R(f,g) \neq 0$.

多项式的结式也可以用它们的根来表示.

**定理2**

> 设
>
> $$
> f(x) = a\_0 x^n + a\_1 x^{n-1} + \cdots + a\_n,
> $$
>
> $$
> g(x) = b\_0 x^m + b\_1 x^{m-1} + \cdots + b\_m,
> $$
>
> $f(x)$ 的根为 $x\_1, x\_2, \cdots, x\_n$, $g(x)$ 的根为 $y\_1, y\_2, \cdots, y\_m$，则 $f(x)$ 与 $g(x)$ 的结式为
>
> $$
> R(f,g) = a\_0^m b\_0^n \prod\_{j=1}^m \prod\_{i=1}^n (x\_i - y\_j).
> \tag{2}
> $$

为了证明上述定理，我们先证明一个引理.

**引理2**

> 记号同定理 2，设 $\lambda$ 是任意的数，则
>
> $$
> R(f(x), g(x)(x - \lambda)) = (-1)^n f(\lambda) R(f,g),\quad R(f(x), x - \lambda) = (-1)^n f(\lambda).
> $$

/proof/

> 由假设，
> $$
> g(x)(x - \lambda) = b\_0 x^{m+1} + (b\_1 - b\_0 \lambda) x^m + \cdots + (b\_m - b\_{m-1} \lambda) x - b\_m \lambda.
> $$
>
> 为了书写方便，我们引入以下记号：
>
> $$
> f\_0(x) = a\_0,\ f\_1(x) = a\_0 x + a\_1,\ f\_2(x) = a\_0 x^2 + a\_1 x + a\_2,\ \cdots,\ f\_n(x) = f(x).
> $$
>
> 由结式的定义，
>
> $$
> R(f(x), g(x)(x - \lambda)) =
> \begin{vmatrix}
> a\_0 & a\_1 & a\_2 & \cdots & \cdots & a\_n & 0 & \cdots & 0 \\
> 0 & a\_0 & a\_1 & \cdots & \cdots & a\_{n-1} & a\_n & \cdots & 0 \\
> 0 & 0 & a\_0 & \cdots & \cdots & a\_{n-2} & a\_{n-1} & \cdots & 0 \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & 0 & \cdots & 0 & a\_0 & \cdots & \cdots & \cdots & a\_n \\
> b\_0 & b\_1 - b\_0 \lambda & b\_2 - b\_1 \lambda & \cdots & \cdots & b\_m - b\_{m-1} \lambda & -b\_m \lambda & \cdots & 0 \\
> 0 & b\_0 & b\_1 - b\_0 \lambda & \cdots & \cdots & b\_{m-1} - b\_{m-2} \lambda & -b\_{m-1} \lambda & \cdots & 0 \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & \cdots & 0 & b\_0 & b\_1 - b\_0 \lambda & \cdots & \cdots & \cdots & -b\_m \lambda
> \end{vmatrix}.
> $$
>
> 将第 1 列乘以 $\lambda$ 加到第 2 列；将第 2 列乘以 $\lambda$ 加到第 3 列；$\cdots$；将第 $n+m$ 列乘以 $\lambda$ 加到第 $n+m+1$ 列，则
>
> $$
> \text{RHS} =
> \begin{vmatrix}
> f\_0(\lambda) & f\_1(\lambda) & f\_2(\lambda) & \cdots & \cdots & f(x) & \lambda f(\lambda) & \cdots & \lambda^m f(\lambda) \\
> 0 & f\_0(\lambda) & f\_1(\lambda) & \cdots & \cdots & f\_{n-1}(\lambda) & f(\lambda) & \cdots & \lambda^{m-1} f(\lambda) \\
> 0 & 0 & f\_0(\lambda) & \cdots & \cdots & f\_{n-2}(\lambda) & f\_{n-1}(\lambda) & \cdots & \lambda^{m-2} f(\lambda) \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & 0 & \cdots & 0 & f\_0(\lambda) & \cdots & \cdots & \cdots & f(\lambda) \\
> b\_0 & b\_1 & b\_2 & \cdots & \cdots & b\_m & 0 & \cdots & 0 \\
> 0 & b\_0 & b\_1 & \cdots & \cdots & b\_{m-1} & b\_m & \cdots & \cdots \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & \cdots & 0 & b\_0 & b\_1 & \cdots & \cdots & \cdots & b\_m
> \end{vmatrix}.
> $$
>
> 将第 2 行乘以 $-\lambda$ 加到第 1 行；将第 3 行乘以 $-\lambda$ 加到第 2 行；$\cdots$；将第 $m+1$ 行乘以 $-\lambda$ 加到第 $m$ 行，则
>
> $$
> \text{RHS} =
> \begin{vmatrix}
> a\_0 & a\_1 & a\_2 & \cdots & \cdots & a\_n & 0 & \cdots & 0 \\
> 0 & a\_0 & a\_1 & \cdots & \cdots & a\_{n-1} & a\_n & \cdots & 0 \\
> 0 & 0 & a\_0 & \cdots & \cdots & a\_{n-2} & a\_{n-1} & \cdots & 0 \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & 0 & \cdots & 0 & a\_0 & \cdots & \cdots & \cdots & a\_n \\
> b\_0 & b\_1 & b\_2 & \cdots & \cdots & b\_m & 0 & \cdots & 0 \\
> 0 & b\_0 & b\_1 & \cdots & \cdots & b\_{m-1} & b\_m & \cdots & \cdots \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & \cdots & 0 & b\_0 & b\_1 & \cdots & \cdots & \cdots & b\_m
> \end{vmatrix}.
> $$
>
> 将行列式按第 $n+m+1$ 列展开，则
>
> $$
> \text{RHS} = (-1)^n f(\lambda)
> \begin{vmatrix}
> a\_0 & a\_1 & a\_2 & \cdots & \cdots & a\_n & 0 & \cdots & 0 \\
> 0 & a\_0 & a\_1 & \cdots & \cdots & a\_{n-1} & a\_n & \cdots & 0 \\
> 0 & 0 & a\_0 & \cdots & \cdots & a\_{n-2} & a\_{n-1} & \cdots & 0 \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & 0 & \cdots & 0 & a\_0 & \cdots & \cdots & \cdots & a\_n \\
> b\_0 & b\_1 & b\_2 & \cdots & \cdots & b\_m & 0 & \cdots & 0 \\
> 0 & b\_0 & b\_1 & \cdots & \cdots & b\_{m-1} & b\_m & \cdots & \cdots \\
> \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
> 0 & \cdots & 0 & b\_0 & b\_1 & \cdots & \cdots & \cdots & b\_m
> \end{vmatrix}
> \= (-1)^n f(\lambda) R(f,g).
> $$
>
> 因此 $R(f(x), g(x)(x - \lambda)) = (-1)^n f(\lambda) R(f,g)$. 同理可证 $R(f(x), x - \lambda) = (-1)^n f(\lambda)$.

/proof/ (**定理2**)

> 令 $f(x) = a\_0 f\_1(x)$, $g(x) = b\_0 g\_1(x)$，则 $f\_1(x)$ 与 $f(x)$ 有相同的根，同样，$g\_1(x)$ 与 $g(x)$ 根相同. 由结式的定义知道
>
> $$
> R(f,g) = a\_0^m b\_0^n R(f\_1,g\_1).
> $$
>
> 反复利用引理 2 可得
>
> $$
> \begin{aligned}
> R(f\_1,g\_1) &= R(f\_1, (x - y\_1)(x - y\_2)\cdots(x - y\_m)) \\\\
> &= (-1)^n f\_1(y\_1) R(f\_1, (x - y\_2)\cdots(x - y\_m)) = \cdots \\\\
> &= \prod\_{j=1}^m \left( (-1)^n f\_1(y\_j) \right) = \prod\_{j=1}^m \left( (-1)^n \prod\_{i=1}^n (y\_j - x\_i) \right) \\\\
> &= \prod\_{j=1}^m \prod\_{i=1}^n (x\_i - y\_j).
> \end{aligned}
> $$
>
> 由此即得 (2) 式.

利用结式，可定义一个多项式的判别式如下.

**定义2**

> 多项式
>
> $$
> f(x) = a\_0 x^n + a\_1 x^{n-1} + \cdots + a\_n
> $$
>
> 的判别式定义为
>
> $$
> \Delta(f) = (-1)^{\frac{1}{2} n(n-1)} a\_0^{-1} R(f,f').
> $$

**定理3**

> 多项式
>
> $$
> f(x) = a\_0 x^n + a\_1 x^{n-1} + \cdots + a\_n
> $$
>
> 的判别式等于
>
> $$
> \Delta(f) = a\_0^{2n-2} \prod\_{1 \leq i < j \leq n} (x\_i - x\_j)^2,
> \tag{3}
> $$
>
> 其中 $x\_1, x\_2, \cdots, x\_n$ 为 $f(x)$ 的根.

/proof/

> 由 (2) 式知道
> $$
> R(f,g) = a\_0^m \prod\_{i=1}^n g(x\_i).
> $$
>
> 现令 $g(x) = f'(x)$, $\deg f'(x) = n-1$，因此
>
> $$
> R(f,f') = a\_0^{n-1} \prod\_{i=1}^n f'(x\_i).
> $$
>
> 又
>
> $$
> f(x) = a\_0 (x - x\_1)(x - x\_2)\cdots(x - x\_n),
> $$
>
> $$
> f'(x) = a\_0 \left( \sum\_{j=1}^n (x - x\_1)\cdots(x - x\_{j-1})(x - x\_{j+1})\cdots(x - x\_n) \right),
> $$
>
> $$
> f'(x\_i) = a\_0 (x\_i - x\_1)\cdots(x\_i - x\_{i-1})(x\_i - x\_{i+1})\cdots(x\_i - x\_n).
> $$
>
> 因此
>
> $$
> R(f,f') = (-1)^{\frac{1}{2} n(n-1)} a\_0^{2n-1} \prod\_{1 \leq i < j \leq n} (x\_i - x\_j)^2.
> $$
>
> 由此即得 (3) 式.

例如，$ax^2 + bx + c$ 的判别式为 $a^2 (x\_1 - x\_2)^2 = b^2 - 4ac$. 这是我们都熟悉的判别式.

**推论2**

> 多项式 $f(x)$ 有重根的充分必要条件是它的判别式 $\Delta(f) = 0$.

作为结式的应用，我们来求解二元高次方程组. 设

$$
\begin{cases}
f(x,y) = 0, \\
g(x,y) = 0
\end{cases}
\tag{4}
$$

是两个二元多项式组成的方程组. 我们的目的是把求解这组方程先归结为求解一个一元高次方程. 设 $f(x,y), g(x,y)$ 为

$$
f(x,y) = a\_0(y) x^n + a\_1(y) x^{n-1} + \cdots + a\_n(y),
\tag{5}
$$
$$
g(x,y) = b\_0(y) x^m + b\_1(y) x^{m-1} + \cdots + b\_m(y),
\tag{6}
$$

其中 $a\_i(y), b\_j(y)$ 都是 $y$ 的多项式且 $a\_0(y) \neq 0$, $b\_0(y) \neq 0$. 令

$$
R\_x(f,g) =
\begin{vmatrix}
a\_0(y) & a\_1(y) & a\_2(y) & \cdots & \cdots & a\_n(y) & 0 & \cdots & 0 \\
0 & a\_0(y) & a\_1(y) & \cdots & \cdots & a\_{n-1}(y) & a\_n(y) & \cdots & 0 \\
0 & 0 & a\_0(y) & \cdots & \cdots & a\_{n-2}(y) & a\_{n-1}(y) & \cdots & 0 \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
0 & 0 & \cdots & 0 & a\_0(y) & \cdots & \cdots & \cdots & a\_n(y) \\
b\_0(y) & b\_1(y) & b\_2(y) & \cdots & \cdots & b\_m(y) & \cdots & \cdots & 0 \\
0 & b\_0(y) & b\_1(y) & \cdots & \cdots & \cdots & b\_{m-1}(y) & b\_m(y) & \cdots \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
0 & \cdots & 0 & b\_0(y) & b\_1(y) & \cdots & \cdots & \cdots & b\_m(y)
\end{vmatrix},
$$

这是一个关于 $y$ 的多项式.

如果 $(\alpha, \beta)$ 是方程组 (4) 的解，则 $\alpha$ 是 $f(x,\beta), g(x,\beta)$ 的公根，因此 $\beta$ 是 $R\_x(f,g)$ 的根. 这样，我们可先求出 $R\_x(f,g) = 0$ 的所有根 $\beta\_i$，再代入 (5) 式、(6) 式.

这时，或 $a\_0(\beta\_i) = b\_0(\beta\_i) = 0$，或存在 $\alpha\_i$，使 $(\alpha\_i, \beta\_i)$ 是方程组 (4) 的解.

由此即可求出方程组 (4) 的一切解.

对于多于两个未知数的高次方程组，我们也可采用类似方法逐个“消去”未知数，从而求出方程组的解.
