---
url: /electrodynamics/electrodynamics-11/index.md
---
## Part 1 概论

在前面介绍了经典电动力学的理论框架。从本章开始，让我们研究经典电动力学在一些特殊情况下的应用。首先，我们考虑电荷静止不动的情况。此时，系统中不存在电流，故磁场亦不存在。因此，麦克斯韦方程组退化为

$$
\nabla \times \mathbf{E}(\mathbf{r}) = \mathrm{rot},\mathbf{E}(\mathbf{r}) = 0, \quad \nabla \cdot \mathbf{D}(\mathbf{r}) = \mathrm{div},\mathbf{D}(\mathbf{r}) = \rho\_f(\mathbf{r}).
$$

第一个方程隐含着存在一个标量势 $\Phi(\mathbf{r})$，使得

$$
\mathbf{E}(\mathbf{r}) = -\nabla \Phi(\mathbf{r}) = -\mathrm{grad},\Phi(\mathbf{r})
$$

成立。又利用关系式 $\mathbf{D}(\mathbf{r}) = \epsilon \mathbf{E}(\mathbf{r})$，从第二个方程我们得到

$$
\nabla \cdot \mathbf{D}(\mathbf{r}) = \nabla \cdot (\epsilon \mathbf{E}(\mathbf{r})) = \rho\_f(\mathbf{r}).
$$

再代入
$$
\mathbf{E}(\mathbf{r}) = -\nabla \Phi(\mathbf{r}) = -\mathrm{grad},\Phi(\mathbf{r})
$$
后，我们得到有均匀连续介质存在时的泊松方程
$$
\nabla^2 \Phi(\mathbf{r}) = -\frac{1}{\epsilon} \rho\_f(\mathbf{r}).
$$

此处，让我们做一个注释。由于在静电学问题中磁场的缺失，代表电磁场能量流的坡印亭矢量 $\mathbf{S}(\mathbf{r})$ 恒为零。但其能量密度按照定义可以写作

$$
w(\mathbf{r}) = \frac{1}{2} \epsilon E^2(\mathbf{r}) = \frac{1}{2} \mathbf{D}(\mathbf{r}) \cdot \mathbf{E}(\mathbf{r}).
$$

因此，在整个空间中，电场的总能量为

$$
\begin{aligned}
W &= \int \int \int\_{R^3} w(\mathbf{r}) dx dy dz \\\\
&= \int \int \int\_{R^3} \frac{1}{2} \mathbf{D}(\mathbf{r}) \cdot \mathbf{E}(\mathbf{r}) dx dy dz = -\frac{1}{2} \int \int \int\_{R^3} \mathbf{D}(\mathbf{r}) \cdot (\nabla \Phi(\mathbf{r})) dx dy dz \\\\
&= -\frac{1}{2} \int \int \int\_{R^3} \nabla \cdot (\mathbf{D}(\mathbf{r}) \Phi(\mathbf{r})) dx dy dz + \frac{1}{2} \int \int \int\_{R^3} \Phi(\mathbf{r}) (\nabla \cdot \mathbf{D}(\mathbf{r})) dx dy dz.
\end{aligned}
$$

对于上式中的第一项，我们可使用高斯定理，而对于第二项中的 $\nabla \cdot \mathbf{D}(\mathbf{r})$，将之用 $\rho\_f(\mathbf{r})$ 替换后得到

$$
W = -\frac{1}{2} \oint \oint\_{S\_\infty} (\mathbf{D}(\mathbf{r}) \Phi(\mathbf{r})) d\mathbf{S} + \frac{1}{2} \int \int \int\_{R^3} \Phi(\mathbf{r}) \rho\_f(\mathbf{r})) dx dy dz.
$$

当电荷是分布在一个有限的区域 $\Omega$ 中时，上式的第—项为零，故我们最后得到

$$
W = \frac{1}{2} \int \int \int\_\Omega \Phi(\mathbf{r}) \rho\_f(\mathbf{r})) dx dy dz.
$$

现在，我们可以专注于如何求解静电学问题了。

## Part 2 导体外的静电场

所有的连续介质按照电学性质可分为两大类，既导体和绝缘体。前者和后者的区别在于，电场会在导体内引起电荷的运动，从而形成电流。从这一基本性质出发可知，在电荷静止的情况下，导体内的电场强度矢量 $\mathbf{E}$ 必须处处为零，否则会引起电荷的运动，产生电流。但电流在导体内的流动会导致焦耳热的释放，故不可能持久。另一方面，由于

$$
\nabla \cdot \mathbf{E}(\mathbf{r}) = \rho\_f(\mathbf{r}) + \rho\_b(\mathbf{r}) = 0,
$$

以及 $\rho\_b(\mathbf{r}) = 0$ 在导体内部成立，立刻可得

$$
\rho\_f(\mathbf{r}) = 0,
$$

即自由电荷只能分布在导体表面。因此，有关导体的静电学问题就归结为确定导体外区域的电场分布和导体表面的电荷分布。

考虑到电场强度矢量 $\mathbf{E}(\mathbf{r})$ 在导体内为零，而靠近导体表面处的电场的切向分量又应该是连续改变的，立刻得到结论

$$
\mathbf{E}\_t(\mathbf{r}) = 0
$$

在导体表面上成立。因此，在导体表面上，每一点处的电场强度矢量都应该 是沿法线方向的。同时，由于 $\mathbf{E}(\mathbf{r}) = -\nabla \Phi(\mathbf{r})$，故在导体表面上，$\Phi(\mathbf{r})$ 应该为一个常数。也就是说，导体表面是静电势的一个等势面。

垂直于导体表面的电场分量和分布在导体表面上的电荷密度之间存在一个简单的比例关系。由于电感应矢量 $\mathbf{D}(\mathbf{r})$ 在两种介质分界面处的法线分量满足关系式

$$
D\_{2n} - D\_{1n} = \sigma\_f,
$$

而在导体内

$$
D\_{1n} = \epsilon\_1 E\_{1n} = 0
$$

成立，故我们有

$$
D\_{2n} = \epsilon\_2 E\_{2n} = \sigma\_f,
$$

或是

$$
E\_{2n} = \frac{\sigma\_f}{\epsilon\_2}.
$$

因此，导体上的全部电荷量为

$$
Q = \oint \oint\_S \epsilon\_2 E\_{2n} dS = \oint \oint\_S \mathbf{D} \cdot d\mathbf{S}.
$$

这里，$S$ 为包围导体的介质与导体之间的分界面。这些结论是我们在处理有关导体存在时的静电问题时所需注意的。

## Part 3 静电学唯一性定理

如上所述，需要求解的静电学问题可以归结为在边界条件

$$
\Phi\_1(\mathbf{r}) = \Phi\_2(\mathbf{r})
$$

以及

$$
\epsilon\_1 \frac{\partial \Phi\_1(\mathbf{r})}{\partial n} - \epsilon\_2 \frac{\partial \Phi\_2(\mathbf{r})}{\partial n} = \sigma\_f(\mathbf{r})
$$

下求解泊松方程

$$
\nabla^2 \Phi(\mathbf{r}) = -\frac{1}{\epsilon} \rho\_f(\mathbf{r}).
$$

我们要证明，在某些条件下，若这一问题有解的话，解是唯一的。更为精确一点讲，我们有

**唯一性定理：**

> 设在空间区域 $\Omega$ 内分布的体电荷密度 $\rho\_f(\mathbf{r})$ 以及面电荷密度 $\sigma\_f(\mathbf{r})$ 给定。
>
> 又假设在 $\Omega$ 的边界面 $S = \partial \Omega$ 上，电势 $\Phi(\mathbf{r})|\_S$，或 $\left.\dfrac{\partial \Phi(\mathbf{r})}{\partial n}\right|\_S$ 给定，那么静电学问题的解是唯一的。

/proof/

> 为了简单起见，我们先考虑区域 $\Omega$ 内的介质为同质的情况。假设定理的结论不对，即存在至少两个方程
> $$
> \nabla^2 \Phi(\mathbf{r}) = -\frac{1}{\epsilon} \rho\_f(\mathbf{r}).
> $$
> 的解 $\Phi(\mathbf{r})$ 和 $\Psi(\mathbf{r})$。那么，二者之差
>
> $$
> \tilde{\Phi}(\mathbf{r}) = \Phi(\mathbf{r}) - \Psi(\mathbf{r})
> $$
>
> 满足拉普拉斯方程
>
> $$
> \nabla^2 \tilde{\Phi}(\mathbf{r}) = \nabla^2 \Phi(\mathbf{r}) - \nabla^2 \Psi(\mathbf{r}) = -\frac{1}{\epsilon} \rho\_f(\mathbf{r}) - \left(-\frac{1}{\epsilon} \rho\_f(\mathbf{r})\right) = 0,
> $$
>
> 且在 $\Omega$ 的边界上有
>
> $$
> \tilde{\Phi}(\mathbf{r})\big|\_S = \Phi(\mathbf{r})\big|\_S - \Psi(\mathbf{r})\big|\_S = 0,
> $$
>
> 或者
>
> $$
> \left.\frac{\partial \tilde{\Phi}(\mathbf{r})}{\partial n}\right|\_S = \left.\frac{\partial \Phi(\mathbf{r})}{\partial n}\right|\_S - \left.\frac{\partial \Psi(\mathbf{r})}{\partial n}\right|\_S = 0.
> $$
>
> 因此，我们有
>
> $$
> \begin{aligned}
> 0 &= \int \int \int\_\Omega \epsilon \tilde{\Phi}(\mathbf{r}) \nabla^2 \tilde{\Phi}(\mathbf{r}) dx dy dz \\\\
> &= \oint \oint\_S \epsilon \tilde{\Phi}(\mathbf{r}) (\nabla \tilde{\Phi}(\mathbf{r})) \cdot d\mathbf{S} - \int \int \int\_\Omega \epsilon (\nabla \tilde{\Phi}(\mathbf{r})) \cdot (\nabla \tilde{\Phi}(\mathbf{r})) dx dy dz.
> \end{aligned}
> $$
>
> 又由于在边界上，条件 $\tilde{\Phi}(\mathbf{r})\big|\_S = 0$ 或 $\left.\dfrac{\partial \tilde{\Phi}(\mathbf{r})}{\partial n}\right|\_S = 0$ 必有一个成立，故进一步得到
>
> $$
> 0 = -\int \int \int\_\Omega \epsilon (\nabla \tilde{\Phi}(\mathbf{r})) \cdot (\nabla \tilde{\Phi}(\mathbf{r})) dx dy dz
> $$
>
> 也就是说，
>
> $$
> \nabla \tilde{\Phi}(\mathbf{r}) = 0.
> $$
>
> 这意味着
>
> $$
> \tilde{\Phi}(\mathbf{r}) = \Phi(\mathbf{r}) - \Psi(\mathbf{r}) = \text{Const}
> $$
>
> 成立。换句话说，
> $$
> \nabla^2 \Phi(\mathbf{r}) = -\frac{1}{\epsilon} \rho\_f(\mathbf{r}).
> $$
> 的任意两个解最多只相差一个常数。但静电势函数附加上一个常数，对于由它决定的电场强度分布 $\mathbf{E}(\mathbf{r})$ 并无影响，可以略去不计。
>
> 接下来，我们考虑区域 $\Omega$ 是由一些不同质的介质组成的情况。将第 $i$ 种介质占据的区域记作 $\Omega\_i$，即
>
> $$
> \Omega = \cup\_{i=1}^n \Omega\_i.
> $$
>
> 而
>
> $$
> 0 = \sum\_{i=1}^n \int \int \int\_{\Omega\_i} \epsilon\_i \tilde{\Phi}\_i(\mathbf{r}) \nabla^2 \tilde{\Phi}\_i(\mathbf{r}) dx\_i dy\_i dz\_i
> $$
>
> 成立。若其中的某些区域，例如 $\Omega\_k$ 是由导体占据的，那么与之有关的积分中的被积函数
>
> $$
> \nabla^2 \tilde{\Phi}\_i(\mathbf{r}) = \nabla^2 \Phi\_i(\mathbf{r}) - \nabla^2 \Psi\_i(\mathbf{r}) = 0.
> $$
>
> 因此，该积分实际上并不出现在求和中，即我们有
>
> $$
> 0 = \sum\_{i=1}^n{}' \int \int \int\_{\Omega\_i} \epsilon\_i \tilde{\Phi}\_i(\mathbf{r}) \nabla^2 \tilde{\Phi}\_i(\mathbf{r}) dx\_i dy\_i dz\_i
> $$
>
> 这里，$\sum'$ 表示已从求和中去除了导体占据的区域。接下来对
> $$
> 0 = \sum\_{i=1}^n \int \int \int\_{\Omega\_i} \epsilon\_i \tilde{\Phi}\_i(\mathbf{r}) \nabla^2 \tilde{\Phi}\_i(\mathbf{r}) dx\_i dy\_i dz\_i
> $$
> 每一项做分部积分，并由此得到
>
> $$
> 0 = \sum\_{i=1}^n{}' \oint \oint\_{S\_i} \[\epsilon\_i \tilde{\Phi}\_i(\mathbf{r}) \nabla \tilde{\Phi}*i(\mathbf{r})] \cdot d\mathbf{S}*i - \sum*{i=1}^n{}' \int \int \int*{\Omega\_i} \epsilon\_i \left(\nabla \tilde{\Phi}\_i(\mathbf{r})\right)^2 dx\_i dy\_i dz\_i.
> $$
>
> 我们要论证，上式中的第一个积分恒为零。为此分别考虑两种情况。
>
> > (i) $S\_i$ 的一部分为 $S = \partial \Omega$ 的一部分。此时，由于 $\tilde{\Phi}(\mathbf{r})\big|\_S = 0$ 或 $\left.\dfrac{\partial \tilde{\Phi}(\mathbf{r})}{\partial n}\right|\_S = 0$ 成立，故上式中第一个求和号中的相应的积分贡献为零。
> >
> > (ii) $S\_i$ 的一部分为内边界，即存在一个区域 $\Omega\_j$，它和 $\Omega\_i$ 共享这一分界面。此时需要考虑两个积分的贡献之和
> >
> > $$
> > \Delta\_{ij} = \int \int\_{S\_i'} \[\epsilon\_i \tilde{\Phi}\_i(\mathbf{r}) \nabla \tilde{\Phi}\_i(\mathbf{r})] \cdot d\mathbf{S}*i + \int \int*{S\_j'} \[\epsilon\_j \tilde{\Phi}\_j(\mathbf{r}) \nabla \tilde{\Phi}\_j(\mathbf{r})] \cdot d\mathbf{S}\_j.
> > $$
> >
> > 这里，$S\_i'$ 和 $S\_j'$ 为区域 $\Omega\_i$ 和区域 $\Omega\_j$ 共享的那部分边界，只不过由于它们的外法线方向正好相反，故用不同记号标记。由于在这部分边界上有 $\tilde{\Phi}\_i(\mathbf{r}) = \tilde{\Phi}\_j(\mathbf{r})$ 以及 $d\mathbf{S}\_i = -d\mathbf{S}\_j$，故上式可以改写作
> >
> > $$
> > \begin{aligned}
> > \Delta\_{ij} &= \int \int\_{S\_i'} \[\epsilon\_i \tilde{\Phi}\_i(\mathbf{r}) \nabla \tilde{\Phi}\_i(\mathbf{r})] \cdot d\mathbf{S}*i + \int \int*{S\_j'} \[\epsilon\_j \tilde{\Phi}\_j(\mathbf{r}) \nabla \tilde{\Phi}\_j(\mathbf{r})] \cdot (-d\mathbf{S}*i) \\\\
> > &= \int \int*{S\_i'} \tilde{\Phi}\_i(\mathbf{r}) \left(\epsilon\_i \frac{\partial \tilde{\Phi}\_i}{\partial n} - \epsilon\_j \frac{\partial \tilde{\Phi}\_j}{\partial n}\right) d\mathbf{S}\_i.
> > \end{aligned}
> > $$
> >
> > 在分界面两边皆为绝缘体时，有
> >
> > $$
> > \begin{aligned}
> > \Delta\_{ij} &= \int \int\_{S\_i'} \tilde{\Phi}*i(\mathbf{r}) \left\[\left(\epsilon\_i \frac{\partial \Phi\_i(\mathbf{r})}{\partial n} - \epsilon\_j \frac{\partial \Phi\_j(\mathbf{r})}{\partial n}\right) - \left(\epsilon\_i \frac{\partial \Psi\_i(\mathbf{r})}{\partial n} - \epsilon\_j \frac{\partial \Psi\_j(\mathbf{r})}{\partial n}\right)\right] dS\_i \\\\
> > &= \int \int*{S\_i'} \tilde{\Phi}*i(\mathbf{r}) \left\[-\sigma*{if}(\mathbf{r}) - (-\sigma\_{if}(\mathbf{r}))\right] dS\_i = 0.
> > \end{aligned}
> > $$
> >
> > 而当分界面的两边分别被绝缘体和导体占据时，有
> >
> > $$
> > \begin{aligned}
> > \Delta\_{ij} &= \int \int\_{S\_i'} \left(\epsilon\_i \tilde{\Phi}\_i(\mathbf{r}) \nabla \tilde{\Phi}\_i(\mathbf{r})\right) \cdot d\mathbf{S}\_i = \tilde{\Phi}*i \int \int*{S\_i'} \epsilon\_i \frac{\partial \tilde{\Phi}*i(\mathbf{r})}{\partial n} dS\_i \\\\
> > &= \tilde{\Phi}*i \left(\int \int*{S\_i'} \epsilon\_i \frac{\partial \Phi\_i(\mathbf{r})}{\partial n} dS\_i - \int \int*{S\_i'} \epsilon\_i \frac{\partial \Psi\_i(\mathbf{r})}{\partial n} dS\_i\right) \\\\
> > &= \tilde{\Phi}*i \left(\int \int*{S\_i'} \[\sigma\_f(\mathbf{r}) - \sigma\_f(\mathbf{r})] dS\_i\right) = 0.
> > \end{aligned}
> > $$
> >
> > 因此
> > $$
> > 0= \sum\_{i=1}^n{}' \oint \oint\_{S\_i} \[\epsilon\_i \tilde{\Phi}\_i(\mathbf{r}) \nabla \tilde{\Phi}*i(\mathbf{r})] \cdot d\mathbf{S}*i - \sum*{i=1}^n{}' \int \int \int*{\Omega\_i} \epsilon\_i \left(\nabla \tilde{\Phi}\_i(\mathbf{r})\right)^2 dx\_i dy\_i dz\_i.
> > $$
> > 第一项在定理给定的条件下恒为零，而我们也由此得到
> >
> > $$
> > \sum\_{i=1}^n{}' \int \int \int\_\Omega \epsilon\_i \left(\nabla \tilde{\Phi}\_i(\mathbf{r})\right)^2 dx dy dz = 0.
> > $$
> >
> > 如前所述，它隐含着泊松方程的两个解 $\Phi(\mathbf{r})$ 和 $\Psi(\mathbf{r})$ 之间最多差一个常数。
>
> 在解决实际问题时，往往给定的不是导体表面的面电荷密度 $\sigma\_f(\mathbf{r})$，而是导体带的总电荷 $Q\_f$。即便如此，唯一性定理仍然成立。这是由于此时
> $$
> 0= \sum\_{i=1}^n{}' \oint \oint\_{S\_i} \[\epsilon\_i \tilde{\Phi}\_i(\mathbf{r}) \nabla \tilde{\Phi}*i(\mathbf{r})] \cdot d\mathbf{S}*i - \sum*{i=1}^n{}' \int \int \int*{\Omega\_i} \epsilon\_i \left(\nabla \tilde{\Phi}\_i(\mathbf{r})\right)^2 dx\_i dy\_i dz\_i.
> $$
> 求和的第一项仍然为零。实际上，重复上面的论证，我们看到
>
> $$
> \begin{aligned}
> &\sum\_{i=1}^n{}' \int \int\_{S\_i} \epsilon\_i \left(\tilde{\Phi}\_i(\mathbf{r}) \nabla \tilde{\Phi}\_i(\mathbf{r})\right) \cdot d\mathbf{S}*i \\\\
> &= \epsilon\_1 \tilde{\Phi}*1\big|*{S\_1'} \int \int*{S\_1'} \frac{\partial \tilde{\Phi}*1}{\partial n} dS + \epsilon\_2 \tilde{\Phi}*2\big|*{S\_2'} \int \int*{S\_2'} \frac{\partial \tilde{\Phi}*2}{\partial n} dS + \epsilon\_3 \tilde{\Phi}*3\big|*{S\_3'} \int \int*{S\_3'} \frac{\partial \tilde{\Phi}\_3}{\partial n} dS.
> \end{aligned}
> $$
>
> 这里为了简化问题，我们假设区域 $\Omega$ 内只有一个导体，它被三种不同的介质 1，2 和 3 所包围，分别共享边界 $S\_1'$，$S\_2'$ 和 $S\_3'$
>
> 由于导体在静电的情况下是等势面，所以
> $$
> \tilde{\Phi}*1\big|*{S\_1'} = \tilde{\Phi}*2\big|*{S\_2'} = \tilde{\Phi}*3\big|*{S\_3'} = K.
> $$
>
> $K$ 为一个常数。又由于
>
> $$
> \epsilon\_i \left.\frac{\partial \tilde{\Phi}*i}{\partial n}\right|*{S\_i'} = \epsilon\_i \left.\frac{\partial \Phi\_i}{\partial n}\right|*{S\_i'} - \epsilon\_i \left.\frac{\partial \Psi\_i}{\partial n}\right|*{S\_i'} = \sigma\_f^{\Psi\_i}(\mathbf{r}) - \sigma\_f^{\Phi\_i}(\mathbf{r}), \quad i = 1,2,3,\cdots
> $$
>
> 我们可得
>
> $$
> \sum\_{i=1}^n{}' \int \int\_{S\_i} \epsilon\_i (\tilde{\Phi}(\mathbf{r}) \nabla \tilde{\Phi}(\mathbf{r})) \cdot d\mathbf{S}*i = K \int \int*{S\_1'} (\sigma\_f^{\Psi\_1}(\mathbf{r}) - \sigma\_f^{\Phi\_1}(\mathbf{r})) dS
> $$
>
> $$
>
> * K \int \int\_{S\_2'} (\sigma\_f^{\Psi\_2}(\mathbf{r}) - \sigma\_f^{\Phi\_2}(\mathbf{r})) dS + K \int \int\_{S\_3'} (\sigma\_f^{\Psi\_3}(\mathbf{r}) - \sigma\_f^{\Phi\_3}(\mathbf{r})) dS
>   $$
>
> $$
> \= K \left(\int \int\_{S\_1'} \sigma\_f^{\Psi\_1}(\mathbf{r}) dS\_1 + \int \int\_{S\_2'} \sigma\_f^{\Psi\_2}(\mathbf{r}) dS\_2 + \int \int\_{S\_3'} \sigma\_f^{\Psi\_3}(\mathbf{r}) dS\_3\right)
> $$
>
> $$
>
> * K \left(\int \int\_{S\_1'} \sigma\_f^{\Phi\_1}(\mathbf{r}) dS\_1 + \int \int\_{S\_2'} \sigma\_f^{\Phi\_2}(\mathbf{r}) dS\_2 + \int \int\_{S\_3'} \sigma\_f^{\Phi\_3}(\mathbf{r}) dS\_3\right)
>   $$
>
> $$
> \= K(Q\_f - Q\_f) = 0.
> $$
>
> 因此静电学的唯一性定理仍然成立。

静电学问题解的唯一性定理给予了我们很大的灵活性。换句话说，无论我们用什么办法找到一个势函数 $\Phi(\mathbf{r})$，它在区域 $\Omega$ 内满足给定的泊松方程，又在 $\Omega$ 的边界 $\partial \Omega$ 上满足给定的边界条件，那么它就一定是该静电学问题的唯一解。
