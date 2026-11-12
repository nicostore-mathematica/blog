---
url: /Metrology/lesson-7/index.md
---
1

回归分析是研究变量之间关系的一种统计方法，而最小二乘法是求解回归模型参数的一种常用数学方法。

## Part 1 一元线性回归方程

一元线性回归用于确定两个变量之间的线性关系，本质上是平面上的**直线拟合问题**。

一元线性回归的目标是寻找一条直线 $\hat{y} = b\_0 + bx$，使之最好地拟合观测数据。

### · 离差记号的代数推导

设观测数据具有结构形式 $y\_t = \beta\_0 + \beta x\_t + \epsilon\_t$ ($t = 1, 2, \dots, N$)，其中 $\epsilon\_t$ 为随机误差项。 设求得的经验回归直线方程为：\
$$
\hat{y} = b\_0 + bx
$$

> 我们先来规定一些基本概念，如离差与重心。

在统计学中，离差（Deviation）指的是样本观测值与样本均值的差值。直接计算离差会导致计算量偏大，因此通常将其展开简化为便于计算的形式：

(1). **样本中心（重心）：**

> /Derive/
> $$
> \bar{x} = \frac{1}{N}\sum\_{t=1}^{N} x\_t, \quad \bar{y} = \frac{1}{N}\sum\_{t=1}^{N} y\_t
> $$
>
> 在后续计算中，利用性质 $\sum\_{t=1}^{N} (x\_t - \bar{x}) = 0$ 和 $\sum\_{t=1}^{N} (y\_t - \bar{y}) = 0$ 可以大大简化公式推导。

(2). **$x$ 的离差平方和（Sum of Squares for $x$）：**

> /Derive/
> $$
> l\_{xx} = \sum\_{t=1}^{N}(x\_t - \bar{x})^2 = \sum\_{t=1}^{N}(x\_t^2 - 2x\_t\bar{x} + \bar{x}^2) = \sum\_{t=1}^{N}x\_t^2 - 2\bar{x}\sum\_{t=1}^{N}x\_t + N\bar{x}^2
> $$
>
> 由于 $\sum x\_t = N\bar{x}$，带入可得简化公式：
>
> $$
> l\_{xx} = \sum\_{t=1}^{N}x\_t^2 - N\bar{x}^2 = \sum\_{t=1}^{N}x\_t^2 - \frac{1}{N}\left(\sum\_{t=1}^{N}x\_t\right)^2
> $$

(3). **$x, y$ 的交叉离差乘积和（Sum of Cross-Products for $x, y$）：**

> /Derive/
> $$
> \begin{aligned}
> l\_{xy} &= \sum\_{t=1}^{N}(x\_t - \bar{x})(y\_t - \bar{y}) = \sum\_{t=1}^{N}(x\_t y\_t - x\_t \bar{y} - y\_t \bar{x} + \bar{x}\bar{y}) \\\\&= \sum\_{t=1}^{N}x\_t y\_t - \bar{y}\sum\_{t=1}^{N}x\_t - \bar{x}\sum\_{t=1}^{N}y\_t + N\bar{x}\bar{y}
> \end{aligned}
> $$
>
> 代入 $\sum x\_t = N\bar{x}$ 和 $\sum y\_t = N\bar{y}$ 后得到：
>
> $$
> l\_{xy} = \sum\_{t=1}^{N}x\_t y\_t - N\bar{x}\bar{y} = \sum\_{t=1}^{N}x\_t y\_t - \frac{1}{N}\left(\sum\_{t=1}^{N}x\_t\right)\left(\sum\_{t=1}^{N}y\_t\right)
> $$

(4). **$y$ 的离差平方和：**

> 同理，可推导出：
> $$
> l\_{yy} = \sum\_{t=1}^{N}(y\_t - \bar{y})^2 = \sum\_{t=1}^{N}y\_t^2 - \frac{1}{N}\left(\sum\_{t=1}^{N}y\_t\right)^2
> $$

在求解出回归截距 $b\_0 = \bar{y} - b\bar{x}$ 后，将其代入经验回归方程 $\hat{y} = b\_0 + bx$ 中：
$$
\hat{y} = (\bar{y} - b\bar{x}) + bx \implies \hat{y} - \bar{y} = b(x - \bar{x})
$$
**几何与物理意义：**

> **必定穿过重心：** 当输入点为样本均值 $x = \bar{x}$ 时，可算得预测值为 $\hat{y} = \bar{y}$。这表明：**经验回归直线必然严格经过数据观测点的中心几何坐标 $(\bar{x}, \bar{y})$**。
>
> **残差均值为零：** 基于最小二乘法求得的残差 $e\_t = y\_t - \hat{y}*t$，满足 $\sum*{t=1}^{N} e\_t = 0$，即拟合值的平均数始终等于实际观测值的平均数（$\bar{\hat{y}} = \bar{y}$）。

根据最小二乘法（Ordinary Least Squares, OLS），我们需要找到一组参数 $(b\_0, b)$，使得拟合值与真实值之间的**残差平方和（Sum of Squared Residuals, SSR）达到最小**：

$$
Q(b\_0, b) = \sum\_{t=1}^{N} e\_t^2 = \sum\_{t=1}^{N} (y\_t - b\_0 - b x\_t)^2
$$

### · 代数展开求解回归方程

对目标函数 $Q(b\_0, b)$ 分别关于未知变量 $b\_0$ 和 $b$ 求偏导数，并令偏导数等于零：

(1). **对 $b\_0$ 求偏导：**

> /Derive/
> $$
> \frac{\partial Q}{\partial b\_0} = -2 \sum\_{t=1}^{N} (y\_t - b\_0 - b x\_t) = 0 \implies \sum\_{t=1}^{N} y\_t - N b\_0 - b \sum\_{t=1}^{N} x\_t = 0
> $$
> 两边同时除以 $N$：
>
> $$
> \bar{y} - b\_0 - b\bar{x} = 0 \implies b\_0 = \bar{y} - b\bar{x}
> $$

(2). **对 $b$ 求偏导：**

> /Derive/
> $$
> \frac{\partial Q}{\partial b} = -2 \sum\_{t=1}^{N} x\_t (y\_t - b\_0 - b x\_t) = 0 \implies \sum\_{t=1}^{N} x\_t y\_t - b\_0 \sum\_{t=1}^{N} x\_t - b \sum\_{t=1}^{N} x\_t^2 = 0
> $$
> 将 $b\_0 = \bar{y} - b\bar{x}$ 带入上式：
>
> $$
> \sum\_{t=1}^{N} x\_t y\_t - (\bar{y} - b\bar{x})\sum\_{t=1}^{N} x\_t - b \sum\_{t=1}^{N} x\_t^2 = 0
> $$
>
> $$
> \sum\_{t=1}^{N} x\_t y\_t - N\bar{x}\bar{y} - b \left(\sum\_{t=1}^{N} x\_t^2 - N\bar{x}^2\right) = 0
> $$
>
> 代入离差记号定义：
>
> $$
> l\_{xy} - b \cdot l\_{xx} = 0 \implies b = \frac{l\_{xy}}{l\_{xx}}
> $$

### · 回归方程的向量空间表达

用矩阵形式表示回归问题时，计算过程更加简洁且利于推广到多元回归。

(1). **构造矩阵模型：**

> 定义观测向量 $Y$、设计矩阵 $X$ 和参数向量 $\boldsymbol{b}$：
> $$
> Y = \begin{bmatrix} y\_1 \ y\_2 \ \vdots \ y\_N \end{bmatrix}*{N \times 1}, \quad X = \begin{bmatrix} 1 & x\_1 \ 1 & x\_2 \ \vdots & \vdots \ 1 & x\_N \end{bmatrix}*{N \times 2}, \quad \boldsymbol{b} = \begin{bmatrix} b\_0 \ b \end{bmatrix}\_{2 \times 1}
> $$
> 残差向量为 $V = Y - X\boldsymbol{b}$.

(2). **目标函数与二次型导数：**

> 残差平方和转为二次型：
> $$
> Q(\boldsymbol{b}) = V^T V = (Y - X\boldsymbol{b})^T (Y - X\boldsymbol{b}) = Y^T Y - 2 \boldsymbol{b}^T X^T Y + \boldsymbol{b}^T X^T X \boldsymbol{b}
> $$
> 对未知向量 $\boldsymbol{b}$ 求一阶矩阵导数并令其为 0：
>
> $$
> \frac{\partial Q}{\partial \boldsymbol{b}} = -2 X^T Y + 2 X^T X \boldsymbol{b} = 0 \implies X^T X \boldsymbol{b} = X^T Y
> $$

(3). **解出参数矩阵：**

> 如果 $X^T X$ 可逆，两边左乘 $(X^T X)^{-1}$：
> $$
> \boldsymbol{b} = \begin{bmatrix} b\_0 \ b \end{bmatrix} = (X^T X)^{-1} X^T Y
> $$

(4). **展开矩阵元素验证一致性：**

> **求解 $X^T X$：**
> $$
> X^T X = \begin{bmatrix} 1 & 1 & \dots & 1 \ x\_1 & x\_2 & \dots & x\_N \end{bmatrix} \begin{bmatrix} 1 & x\_1 \ 1 & x\_2 \ \vdots & \vdots \ 1 & x\_N \end{bmatrix} = \begin{bmatrix} N & \sum x\_i \ \sum x\_i & \sum x\_i^2 \end{bmatrix}
> $$
> **求解 $(X^T X)^{-1}$（逆矩阵公式）：** 设矩阵 $A = \begin{bmatrix} a & b \ c & d \end{bmatrix}$，其行列式 $\vert{}A\vert{} = ad - bc = N\sum x\_i^2 - (\sum x\_i)^2 = N l\_{xx}$。 因此：
> $$
> (X^T X)^{-1} = \frac{1}{N l\_{xx}} \begin{bmatrix} \sum x\_i^2 & -\sum x\_i \ -\sum x\_i & N \end{bmatrix}
> $$
> **求解 $X^T Y$：**
> $$
> X^T Y = \begin{bmatrix} \sum y\_i \ \sum x\_i y\_i \end{bmatrix}
> $$
> **矩阵乘法得到系数：**
> $$
> \begin{aligned}
> \boldsymbol{b} &= \frac{1}{N l\_{xx}}
> \begin{bmatrix} \sum x\_i^2 & -\sum x\_i \ -\sum x\_i & N \end{bmatrix} \begin{bmatrix} \sum y\_i \ \sum x\_i y\_i \end{bmatrix}
> \\\\\\&= \begin{bmatrix} \dfrac{(\sum x\_i^2)(\sum y\_i) - (\sum x\_i)(\sum x\_i y\_i)}{N l\_{xx}} \\\ \dfrac{-\sum x\_i \sum y\_i + N \sum x\_i y\_i}{N l\_{xx}} \end{bmatrix}
> \= \begin{bmatrix} \bar{y} - b\bar{x} \ \frac{l\_{xy}}{l\_{xx}} \end{bmatrix}
> \end{aligned}
> $$

代数法与矩阵法推导出的结论完全一致。

### · 回归方程的稳定性

给定某一个自变量 $x$，根据拟合出的经验公式预测响应值 $\hat{y} = b\_0 + bx$。由于 $b\_0$ 和 $b$ 均为受样本随机误差影响的估计量，预报值 $\hat{y}$ 也是一个随机变量。

应用随机误差传播律求 $\hat{y}$ 的方差：\
$$
\sigma\_{\hat{y}}^2 = \text{Var}(b\_0 + b x) = \sigma\_{b\_0}^2 + x^2 \sigma\_b^2 + 2 x , \text{Cov}(b\_0, b)
$$
代入各方差与协方差表达式：\
$$
\sigma\_{\hat{y}}^2 = \left( \frac{1}{N} + \frac{\bar{x}^2}{l\_{xx}} \right) \sigma^2 + x^2 \left( \frac{1}{l\_{xx}} \right) \sigma^2 + 2x \left( -\frac{\bar{x}}{l\_{xx}} \right) \sigma^2
$$
合并配方后即可得到经典的**预报方差公式**：\
$$
\sigma\_{\hat{y}}^2 = \left\[ \frac{1}{N} + \frac{(x - \bar{x})^2}{l\_{xx}} \right] \sigma^2
$$

样本量 $N$ 越大、且预测点 $x$ 越靠近样本均值 $\bar{x}$（即 $\vert{}x - \bar{x}\vert{}$ 越小）时，预报值 $\hat{y}$ 的标准差越小，精度越高。

当样本量 $N \to \infty$ 时，$\sigma\_{\hat{y}}^2 \to 0$，即在大样本条件下，经验回归直线收敛于理论真实的回归直线。

若我们在收集/设计 $x$ 的数据时，让 $x$ 保持在更宽的观测范围内（使 $l\_{xx}$ 极大），就能有效压低分母，使拟合出的斜率 $b$ 更准确，进而显著降低整个区间的预报标准差 $\sigma\_{\hat{y}}$。

## Part 2 方差分析与显著性检验

在一元线性回归分析中，**方差分析（ANOVA, Analysis of Variance）** 与 **显著性检验（F 检验）** 是评估线性模型是否有效、自变量 $x$ 对因变量 $y$ 的解释能力是否具有统计显著性的核心方法。

### · 总离差平方和分解

方差分析的核心思想是：**将因变量 $y$ 的总波动分解为“由自变量 $x$ 的线性效应引起的已知波动”与“无法由 $x$ 解释的随机误差波动”。**

对于任意观测点 $y\_t$，将其与均值 $\bar{y}$ 的离差拆分为两部分：
$$
y\_t - \bar{y} = (y\_t - \hat{y}\_t) + (\hat{y}\_t - \bar{y})
$$
其中 $y\_t - \hat{y}\_t = e\_t$ 为残差，$\hat{y}\_t - \bar{y}$ 为拟合值对均值的偏离。

对两边求平方和：
$$
\sum\_{t=1}^{N} (y\_t - \bar{y})^2 = \sum\_{t=1}^{N} \left\[ (y\_t - \hat{y}\_t) + (\hat{y}\_t - \bar{y}) \right]^2
$$

$$
\sum\_{t=1}^{N} (y\_t - \bar{y})^2 = \sum\_{t=1}^{N} (\hat{y}*t - \bar{y})^2 + \sum*{t=1}^{N} (y\_t - \hat{y}*t)^2 + 2 \sum*{t=1}^{N} (\hat{y}\_t - \bar{y})(y\_t - \hat{y}\_t)
$$

展开交叉项 $\sum\_{t=1}^{N} (\hat{y}\_t - \bar{y})(y\_t - \hat{y}\_t)$： 由于 $\hat{y}\_t = b\_0 + b x\_t = (\bar{y} - b\bar{x}) + b x\_t = \bar{y} + b(x\_t - \bar{x})$，因此 $\hat{y}\_t - \bar{y} = b(x\_t - \bar{x})$。

将此代入交叉项中：
$$
\sum\_{t=1}^{N} (\hat{y}\_t - \bar{y})(y\_t - \hat{y}*t) = b \sum*{t=1}^{N} (x\_t - \bar{x})(y\_t - b\_0 - b x\_t)
$$
根据最小二乘法求导得到的正规方程：
$$
\sum (y\_t - b\_0 - b x\_t) = 0
$$

$$
\sum x\_t (y\_t - b\_0 - b x\_t) = 0
$$

两式组合可得 $\sum (x\_t - \bar{x})(y\_t - \hat{y}\_t) = 0$。因此，交叉项恒等于 0。

即得到了**平方和可加性恒等式（S = U + Q）**：
$$
S = U + Q
$$
然后我们给出三种平方和的化简公式

(1). **总离差平方和 $S$（Total Sum of Squares, SST）：**

> 衡量样本观测值 $y\_t$ 的整体变异程度。
> $$
> S = l\_{yy} = \sum\_{t=1}^{N} (y\_t - \bar{y})^2 = \sum\_{t=1}^{N} y\_t^2 - \frac{1}{N}\left(\sum\_{t=1}^{N} y\_t\right)^2
> $$

(2). **回归平方和 $U$（Regression Sum of Squares, SSR）：**

> 反映由回归直线所解释的波动程度（因 $x$ 变化而引起 $y$ 变化的部分）。
>
> 将 $\hat{y}*t - \bar{y} = b(x\_t - \bar{x})$ 代入：
> $$
> U = \sum*{t=1}^{N} (\hat{y}*t - \bar{y})^2 = \sum*{t=1}^{N} \[b(x\_t - \bar{x})]^2 = b^2 \sum\_{t=1}^{N} (x\_t - \bar{x})^2 = b^2 l\_{xx}
> $$
> 利用 $b = \dfrac{l\_{xy}}{l\_{xx}}$ 化简：
> $$
> U = \left(\frac{l\_{xy}}{l\_{xx}}\right)^2 l\_{xx} = \frac{l\_{xy}^2}{l\_{xx}} = b l\_{xy}
> $$

(3). **残余平方和 $Q$（Residual/Error Sum of Squares, SSE）：**

> 反映未被回归直线解释的随机误差波动。
> $$
> Q = \sum\_{t=1}^{N} (y\_t - \hat{y}*t)^2 = S - U = l*{yy} - b l\_{xy} = l\_{yy} - \frac{l\_{xy}^2}{l\_{xx}}
> $$

### · 残余方差与残余标准差

模型的随机误差项 $\epsilon\_t \sim N(0, \sigma^2)$ 的方差 $\sigma^2$ 在实际中未知，需要通过观测数据进行估计。

残余方差定义为残余平方和除以其对应的自由度：
$$
\hat{\sigma}^2 = \frac{Q}{N - 2} = \frac{\sum\_{t=1}^{N} (y\_t - \hat{y}\_t)^2}{N - 2}
$$
**无偏性证明：**

> 可以证明 $E(Q) = (N - 2)\sigma^2$，因此 $\hat{\sigma}^2$ 是未知的真实误差方差 $\sigma^2$ 的**无偏估计量**。

**残余标准差 $\sigma = \sqrt{\dfrac{Q}{N - 2}}$：**

> 代表剔除线性相关性后，实际观测点垂直偏离回归直线的平均幅值（与 $y$ 具有相同的物理单位）。

残余标准差对模型的几何直观意义:

> $\sigma$ 越小,  拟合点集中程度越高，观测数据紧密包裹在经验回归线两侧，模型的预报精度更高。
>
> 模型的拟合优度判定系数定义为
> $$
> R^2 = \dfrac{U}{S} = 1 - \frac{Q}{S}
> $$
> 当残差平方和 $Q \to 0$ 时，$\sigma \to 0$ 且 $R^2 \to 1$，模型接近完全线性相关。

### · 显著性检验（$F$ 检验法）

进行显著性检验的目的是为了判断自变量 $x$ 与因变量 $y$ 之间是否存在真正的线性依赖关系，还是仅仅由于随机采样误差产生的“虚假相关”。

在模型 $y\_t = \beta\_0 + \beta x\_t + \epsilon\_t$ 中：

* **原假设 $H\_0: \beta = 0$**（$x$ 与 $y$ 无线性关系，回归方程无显著意义）。
* **备择假设 $H\_1: \beta \neq 0$**（$x$ 与 $y$ 存在显著线性关系）。

根据正态分布假设下二次型平方和分布性质：

> 在 $H\_0$ 为真的条件下，回归均方 $MS\_U = \frac{U}{1}$ 服从自由度为 1 的 $\sigma^2 \chi^2(1)$ 分布：
> $$
> \frac{U}{\sigma^2} \sim \chi^2(1)
> $$
> 残差均方 $MS\_Q = \dfrac{Q}{N-2}$ 服从自由度为 $N-2$ 的 $\sigma^2 \chi^2(N-2)$ 分布：
> $$
> \frac{Q}{\sigma^2} \sim \chi^2(N - 2)
> $$
> 在正态假设下，分子与分母各自代表的二次型在统计上是**相互独立**的。

构造两个无偏方差的比值检验统计量 $F$：
$$
F = \frac{MS\_U}{MS\_Q} = \frac{U / \nu\_U}{Q / \nu\_Q} = \frac{U / 1}{Q / (N - 2)}
$$
若原假设 $H\_0$ 成立，则分子分母中的未知参数 $\sigma^2$ 相互约去，$F$ 统计量精确服从自由度为 $(1, N - 2)$ 的 F 分布：
$$
F \sim F(1, N - 2)
$$
设定显著性水平 $\alpha$（常见有 $0.01, 0.05, 0.10$），查表确定临界值 $F\_\alpha(1, N - 2)$：

```
                    F 分布概率密度曲线与拒绝域
   f(F) ^
        |   拟合成立的接受域
        |  ---------------------\ 
        |                        \  拒绝 H0 (显著域)
        |                         \ 
        +--------------------------+-----------------> F
        0                    F_α(1, N-2)
                                   |<-- 临界尾部面积 α -->|
```

我们可给出结论：

> **若 $F \ge F\_{0.01}(1, N - 2)$：**$p$ 值小于 $0.01$，表明在 $\alpha = 0.01$ 的极高检验水准上**高度显著**（拒绝原假设 $H\_0$），说明 $x$ 对 $y$ 的线性影响极强。
>
> **若 $F\_{0.05}(1, N - 2) \le F < F\_{0.01}(1, N - 2)$：** 在 $\alpha = 0.05$ 水平上**显著**，线性回归模型有效。
>
> **若 $F\_{0.10}(1, N - 2) \le F < F\_{0.05}(1, N - 2)$：** 在 $\alpha = 0.10$ 水平上**弱显著**。
>
> **若 $F < F\_{0.10}(1, N - 2)$：** 无法拒绝原假设 $H\_0$，说明回归方程**不显著**，不宜使用该一元线性回归模型进行预测。

### · ANOVA 数据汇总

在进行实际计算与工程统计分析时，方差分析的过程通常汇总列于下表中：

> \[!important]
>
> **回归变异（Regression）**
>
> > **平方和（SS）：** $U = b l\_{xy} = \dfrac{l\_{xy}^2}{l\_{xx}}$，表示由自变量 $x$ 的线性变化引起的因变量 $y$ 的变异量。
> >
> > **自由度（df）：** $\nu\_U = 1$，一元线性回归中仅包含一个独立斜率参数。
> >
> > **均方（MS）：** $MS\_U = \dfrac{U}{1}$，即回归平方和除以其自由度。
> >
> > **F 检验值：** $F = \dfrac{MS\_U}{MS\_Q} = \dfrac{U / 1}{Q / (N - 2)}$，为回归均方与残余均方的比值。
> >
> > **显著性判定：** 将计算得到的 $F$ 值与显著性水平 $\alpha$ 下的分布临界值 $F\_\alpha(1, N-2)$ 比较；若 $F \ge F\_\alpha(1, N-2)$，则回归效果显著。
>
> **残余变异（Residual）**
>
> > **平方和（SS）：** $Q = l\_{yy} - b l\_{xy}$，表示剔除线性关系后由其他随机因素引起的变异量。
> >
> > **自由度（df）：** $\nu\_Q = N - 2$，由样本量 $N$ 扣除估算的截距与斜率两个参数后得到。
> >
> > **均方（MS）：** $MS\_Q = \sigma^2 = \dfrac{Q}{N - 2}$，即残余平方和除以其自由度，代表误差方差的无偏估计。
> >
> > **F 检验值与显著性判定：** 不适用（作为检验分母项）。
>
> **总变异（Total）**
>
> > **平方和（SS）：** $S = l\_{yy}$，表示因变量 $y$ 的总离差平方和，满足正交分解关系 $S = U + Q$。
> >
> > **自由度（df）：** $\nu\_S = N - 1$，满足自由度可加性 $(N - 1) = 1 + (N - 2)$。
> >
> > **均方、F 检验值与显著性判定：** 不适用。

### · 重复试验情况

“回归方程显著”仅表明 $x$ 的一次项对 $y$ 影响显著，但不能排除是否存在非线性趋势或未受控因素。通过在 $N$ 个试验点各重复 $m$ 次试验，可将残余变差进一步拆分为**纯试验误差平方和 $Q\_E$** 和**失拟平方和 $Q\_L$**。

设我们在 $N$ 个不同的自变量水平（或试验点）$x\_1, x\_2, \dots, x\_N$ 上，每个点分别进行了 $m$ 次独立重复试验。

先进行平方和与自由度的分解：

总离差平方和 $S$（Total Sum of Squares）被严格地拆解为几个互不干扰的部分：
$$
S = U + Q\_L + Q\_E
$$
其中残差平方和（Residual SS）被拆分成了失拟平方和 $Q\_L$ 与误差平方和 $Q\_E$（即 $Q\_{\text{residual}} = Q\_L + Q\_E = ml\_{yy} - U$）。

> 在包含重复试验的回归分析方差分析（ANOVA）视角下，总变异被严格拆解为回归、失拟和误差三个核心部分：
>
> **回归项**：
>
> > 其平方和为 $U = m b l\_{xy}$，对应的自由度为 $\nu\_U = 1$。由此计算出的回归方差（均方）为 $U/\nu\_U$。
> >
> > 以此方差与误差方差相比构建的 $F$ 统计量为 $F = \dfrac{U/\nu\_U}{Q\_E/\nu\_E}$，
> >
> > 其显著性判定标准为临界值 $F\_\alpha(\nu\_U, \nu\_E)$。
>
> **失拟项**：
>
> > 其平方和为 $Q\_L = m l\_{yy} - U$，反映了模型未能捕捉的非线性趋势或未受控因素，其自由度为 $\nu\_L = N - 2$。
> >
> > 失拟方差为 $Q\_L/\nu\_L$，构建的失拟检验 $F$ 统计量为 $F\_1 = \dfrac{Q\_L/\nu\_L}{Q\_E/\nu\_E}$，
> >
> > 用于与临界值 $F\_\alpha(\nu\_L, \nu\_E)$ 进行对比以判定失拟是否显著。
>
> **误差项**：
>
> > 即纯随机误差，其平方和为 $Q\_E = \displaystyle\sum\_{t=1}^{N} \sum\_{i=1}^{m} (y\_{ti} - \bar{y}\_t)^2$，
> >
> > 自由度为 $\nu\_E = N(m - 1)$。
> >
> > 其误差方差为 $Q\_E/\nu\_E$，作为底层的随机波动基准共同参与回归和失拟的 $F$ 检验分母。
>
> **总计**：整个试验系统的总离差平方和为 $S = U + Q\_E + Q\_L$，对应的总自由度为 $\nu\_S = Nm - 1$，其方差、 $F$ 值及显著性列均不涉及

$l\_{xx}$、$l\_{yy}$、$l\_{xy}$ 为常规的离差积和；$\bar{y}\_t$ 是第 $t$ 个试验点上 $m$ 次测量的平均值；$\bar{y}$ 是所有 $Nm$ 个数据的总平均值

在完成上述平方和与自由度分解后，我们构建两个不同的统计量，分别回答两个独立的问题:

> \[!important]
>
> **回归显著性**：
>
> > /Derive/
> > $$
> > F = \frac{U / \nu\_U}{Q\_E / \nu\_E} = \frac{U / 1}{Q\_E / \[N(m-1)]}
> > $$
> > 将计算得到的 $F$ 值与临界值 $F\_\alpha(1, N(m-1))$ 进行比较
>
> **失拟检验**：
>
> > /Derive/
> > $$
> > F\_1 = \frac{Q\_L / \nu\_L}{Q\_E / \nu\_E} = \frac{Q\_L / (N - 2)}{Q\_E / \[N(m-1)]}
> > $$
> > 分母 $Q\_E$ 是纯粹的随机误差基准；分子 $Q\_L$ 包含了模型失拟（如曲线趋势）引起的偏差。如果 $Q\_L$ 显著大于 $Q\_E$，说明残差里的大头不是随机噪声，而是**我们用线性模型没能拟合进去的系统性规律**
> >
> > 与 $F\_\alpha(N-2, N(m-1))$ 比较。
> >
> > 若 $F\_1 > F\_\alpha$，说明**失拟误差不可忽略**，
> >
> > 原设定的线性模型不合适，应改用非线性拟合。
