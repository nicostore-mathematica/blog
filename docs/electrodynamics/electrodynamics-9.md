---
title: Chapter 9 静电学
permalink: /electrodynamics/electrodynamics-9/
createTime: 2026/03/15 22:15:42
---

## Part 1 概论

在前面介绍了经典电动力学的理论框架。从本章开始，让我们研究经典电动力学在一些特殊情况下的应用。首先，我们考虑电荷静止不动的情况。此时，系统中不存在电流，故磁场亦不存在。因此，麦克斯韦方程组退化为

$$
\nabla \times \mathbf{E}(\mathbf{r}) = \mathrm{rot}\,\mathbf{E}(\mathbf{r}) = 0, \quad \nabla \cdot \mathbf{D}(\mathbf{r}) = \mathrm{div}\,\mathbf{D}(\mathbf{r}) = \rho_f(\mathbf{r}).
$$

第一个方程隐含着存在一个标量势 $\Phi(\mathbf{r})$，使得

$$
\mathbf{E}(\mathbf{r}) = -\nabla \Phi(\mathbf{r}) = -\mathrm{grad}\,\Phi(\mathbf{r})
$$

成立。又利用关系式 $\mathbf{D}(\mathbf{r}) = \epsilon \mathbf{E}(\mathbf{r})$，从第二个方程我们得到

$$
\nabla \cdot \mathbf{D}(\mathbf{r}) = \nabla \cdot (\epsilon \mathbf{E}(\mathbf{r})) = \rho_f(\mathbf{r}).
$$

再代入
$$
\mathbf{E}(\mathbf{r}) = -\nabla \Phi(\mathbf{r}) = -\mathrm{grad}\,\Phi(\mathbf{r})
$$
后，我们得到有均匀连续介质存在时的泊松方程
$$
\nabla^2 \Phi(\mathbf{r}) = -\frac{1}{\epsilon} \rho_f(\mathbf{r}).
$$

此处，让我们做一个注释。由于在静电学问题中磁场的缺失，代表电磁场能量流的坡印亭矢量 $\mathbf{S}(\mathbf{r})$ 恒为零。但其能量密度按照定义可以写作

$$
w(\mathbf{r}) = \frac{1}{2} \epsilon E^2(\mathbf{r}) = \frac{1}{2} \mathbf{D}(\mathbf{r}) \cdot \mathbf{E}(\mathbf{r}).
$$

因此，在整个空间中，电场的总能量为

$$
\begin{aligned}
W &= \int \int \int_{R^3} w(\mathbf{r}) dx dy dz \\\\
&= \int \int \int_{R^3} \frac{1}{2} \mathbf{D}(\mathbf{r}) \cdot \mathbf{E}(\mathbf{r}) dx dy dz = -\frac{1}{2} \int \int \int_{R^3} \mathbf{D}(\mathbf{r}) \cdot (\nabla \Phi(\mathbf{r})) dx dy dz \\\\
&= -\frac{1}{2} \int \int \int_{R^3} \nabla \cdot (\mathbf{D}(\mathbf{r}) \Phi(\mathbf{r})) dx dy dz + \frac{1}{2} \int \int \int_{R^3} \Phi(\mathbf{r}) (\nabla \cdot \mathbf{D}(\mathbf{r})) dx dy dz.
\end{aligned}
$$

对于上式中的第一项，我们可使用高斯定理，而对于第二项中的 $\nabla \cdot \mathbf{D}(\mathbf{r})$，将之用 $\rho_f(\mathbf{r})$ 替换后得到

$$
W = -\frac{1}{2} \oint \oint_{S_\infty} (\mathbf{D}(\mathbf{r}) \Phi(\mathbf{r})) d\mathbf{S} + \frac{1}{2} \int \int \int_{R^3} \Phi(\mathbf{r}) \rho_f(\mathbf{r})) dx dy dz.
$$

当电荷是分布在一个有限的区域 $\Omega$ 中时，上式的第—项为零，故我们最后得到

$$
W = \frac{1}{2} \int \int \int_\Omega \Phi(\mathbf{r}) \rho_f(\mathbf{r})) dx dy dz.
$$

现在，我们可以专注于如何求解静电学问题了。

## Part 2 导体外的静电场

所有的连续介质按照电学性质可分为两大类，既导体和绝缘体。前者和后者的区别在于，电场会在导体内引起电荷的运动，从而形成电流。从这一基本性质出发可知，在电荷静止的情况下，导体内的电场强度矢量 $\mathbf{E}$ 必须处处为零，否则会引起电荷的运动，产生电流。但电流在导体内的流动会导致焦耳热的释放，故不可能持久。另一方面，由于

$$
\nabla \cdot \mathbf{E}(\mathbf{r}) = \rho_f(\mathbf{r}) + \rho_b(\mathbf{r}) = 0,
$$

以及 $\rho_b(\mathbf{r}) = 0$ 在导体内部成立，立刻可得

$$
\rho_f(\mathbf{r}) = 0,
$$

即自由电荷只能分布在导体表面。因此，有关导体的静电学问题就归结为确定导体外区域的电场分布和导体表面的电荷分布。

考虑到电场强度矢量 $\mathbf{E}(\mathbf{r})$ 在导体内为零，而靠近导体表面处的电场的切向分量又应该是连续改变的，立刻得到结论

$$
\mathbf{E}_t(\mathbf{r}) = 0
$$

在导体表面上成立。因此，在导体表面上，每一点处的电场强度矢量都应该 是沿法线方向的。同时，由于 $\mathbf{E}(\mathbf{r}) = -\nabla \Phi(\mathbf{r})$，故在导体表面上，$\Phi(\mathbf{r})$ 应该为一个常数。也就是说，导体表面是静电势的一个等势面。

垂直于导体表面的电场分量和分布在导体表面上的电荷密度之间存在一个简单的比例关系。由于电感应矢量 $\mathbf{D}(\mathbf{r})$ 在两种介质分界面处的法线分量满足关系式

$$
D_{2n} - D_{1n} = \sigma_f,
$$

而在导体内

$$
D_{1n} = \epsilon_1 E_{1n} = 0
$$

成立，故我们有

$$
D_{2n} = \epsilon_2 E_{2n} = \sigma_f,
$$

或是

$$
E_{2n} = \frac{\sigma_f}{\epsilon_2}.
$$

因此，导体上的全部电荷量为

$$
Q = \oint \oint_S \epsilon_2 E_{2n} dS = \oint \oint_S \mathbf{D} \cdot d\mathbf{S}.
$$

这里，$S$ 为包围导体的介质与导体之间的分界面。这些结论是我们在处理有关导体存在时的静电问题时所需注意的。

## Part 3 静电学唯一性定理

如上所述，需要求解的静电学问题可以归结为在边界条件

$$
\Phi_1(\mathbf{r}) = \Phi_2(\mathbf{r})
$$

以及

$$
\epsilon_1 \frac{\partial \Phi_1(\mathbf{r})}{\partial n} - \epsilon_2 \frac{\partial \Phi_2(\mathbf{r})}{\partial n} = \sigma_f(\mathbf{r})
$$

下求解泊松方程

$$
\nabla^2 \Phi(\mathbf{r}) = -\frac{1}{\epsilon} \rho_f(\mathbf{r}).
$$

我们要证明，在某些条件下，若这一问题有解的话，解是唯一的。更为精确一点讲，我们有

**唯一性定理：** 

> 设在空间区域 $\Omega$ 内分布的体电荷密度 $\rho_f(\mathbf{r})$ 以及面电荷密度 $\sigma_f(\mathbf{r})$ 给定。
>
> 又假设在 $\Omega$ 的边界面 $S = \partial \Omega$ 上，电势 $\Phi(\mathbf{r})|_S$，或 $\left.\dfrac{\partial \Phi(\mathbf{r})}{\partial n}\right|_S$ 给定，那么静电学问题的解是唯一的。

/proof/

> 为了简单起见，我们先考虑区域 $\Omega$ 内的介质为同质的情况。假设定理的结论不对，即存在至少两个方程
> $$
> \nabla^2 \Phi(\mathbf{r}) = -\frac{1}{\epsilon} \rho_f(\mathbf{r}).
> $$
> 的解 $\Phi(\mathbf{r})$ 和 $\Psi(\mathbf{r})$。那么，二者之差
>
> $$
> \tilde{\Phi}(\mathbf{r}) = \Phi(\mathbf{r}) - \Psi(\mathbf{r})
> $$
> 
>满足拉普拉斯方程
> 
>$$
> \nabla^2 \tilde{\Phi}(\mathbf{r}) = \nabla^2 \Phi(\mathbf{r}) - \nabla^2 \Psi(\mathbf{r}) = -\frac{1}{\epsilon} \rho_f(\mathbf{r}) - \left(-\frac{1}{\epsilon} \rho_f(\mathbf{r})\right) = 0,
> $$
> 
> 且在 $\Omega$ 的边界上有
>
> $$
>\tilde{\Phi}(\mathbf{r})\big|_S = \Phi(\mathbf{r})\big|_S - \Psi(\mathbf{r})\big|_S = 0,
> $$
> 
> 或者
> 
>$$
> \left.\frac{\partial \tilde{\Phi}(\mathbf{r})}{\partial n}\right|_S = \left.\frac{\partial \Phi(\mathbf{r})}{\partial n}\right|_S - \left.\frac{\partial \Psi(\mathbf{r})}{\partial n}\right|_S = 0.
>$$
> 
> 因此，我们有
> 
> $$
>\begin{aligned}
> 0 &= \int \int \int_\Omega \epsilon \tilde{\Phi}(\mathbf{r}) \nabla^2 \tilde{\Phi}(\mathbf{r}) dx dy dz \\\\
>&= \oint \oint_S \epsilon \tilde{\Phi}(\mathbf{r}) (\nabla \tilde{\Phi}(\mathbf{r})) \cdot d\mathbf{S} - \int \int \int_\Omega \epsilon (\nabla \tilde{\Phi}(\mathbf{r})) \cdot (\nabla \tilde{\Phi}(\mathbf{r})) dx dy dz.
> \end{aligned}
> $$
> 
> 又由于在边界上，条件 $\tilde{\Phi}(\mathbf{r})\big|_S = 0$ 或 $\left.\dfrac{\partial \tilde{\Phi}(\mathbf{r})}{\partial n}\right|_S = 0$ 必有一个成立，故进一步得到
> 
> $$
>0 = -\int \int \int_\Omega \epsilon (\nabla \tilde{\Phi}(\mathbf{r})) \cdot (\nabla \tilde{\Phi}(\mathbf{r})) dx dy dz
> $$
>
> 也就是说，
> 
> $$
> \nabla \tilde{\Phi}(\mathbf{r}) = 0.
>$$
> 
>这意味着
> 
> $$
> \tilde{\Phi}(\mathbf{r}) = \Phi(\mathbf{r}) - \Psi(\mathbf{r}) = \text{Const}
> $$
>
> 成立。换句话说，
>$$
> \nabla^2 \Phi(\mathbf{r}) = -\frac{1}{\epsilon} \rho_f(\mathbf{r}).
> $$
> 的任意两个解最多只相差一个常数。但静电势函数附加上一个常数，对于由它决定的电场强度分布 $\mathbf{E}(\mathbf{r})$ 并无影响，可以略去不计。
> 
>接下来，我们考虑区域 $\Omega$ 是由一些不同质的介质组成的情况。将第 $i$ 种介质占据的区域记作 $\Omega_i$，即
> 
> $$
> \Omega = \cup_{i=1}^n \Omega_i.
> $$
> 
>而
> 
>$$
> 0 = \sum_{i=1}^n \int \int \int_{\Omega_i} \epsilon_i \tilde{\Phi}_i(\mathbf{r}) \nabla^2 \tilde{\Phi}_i(\mathbf{r}) dx_i dy_i dz_i
> $$
> 
> 成立。若其中的某些区域，例如 $\Omega_k$ 是由导体占据的，那么与之有关的积分中的被积函数
>
> $$
>\nabla^2 \tilde{\Phi}_i(\mathbf{r}) = \nabla^2 \Phi_i(\mathbf{r}) - \nabla^2 \Psi_i(\mathbf{r}) = 0.
> $$
> 
> 因此，该积分实际上并不出现在求和中，即我们有
> 
>$$
> 0 = \sum_{i=1}^n{}' \int \int \int_{\Omega_i} \epsilon_i \tilde{\Phi}_i(\mathbf{r}) \nabla^2 \tilde{\Phi}_i(\mathbf{r}) dx_i dy_i dz_i
>$$
> 
> 这里，$\sum'$ 表示已从求和中去除了导体占据的区域。接下来对
> $$
> 0 = \sum_{i=1}^n \int \int \int_{\Omega_i} \epsilon_i \tilde{\Phi}_i(\mathbf{r}) \nabla^2 \tilde{\Phi}_i(\mathbf{r}) dx_i dy_i dz_i
>$$
> 每一项做分部积分，并由此得到
>
> $$
> 0 = \sum_{i=1}^n{}' \oint \oint_{S_i} [\epsilon_i \tilde{\Phi}_i(\mathbf{r}) \nabla \tilde{\Phi}_i(\mathbf{r})] \cdot d\mathbf{S}_i - \sum_{i=1}^n{}' \int \int \int_{\Omega_i} \epsilon_i \left(\nabla \tilde{\Phi}_i(\mathbf{r})\right)^2 dx_i dy_i dz_i.
> $$
> 
>我们要论证，上式中的第一个积分恒为零。为此分别考虑两种情况。
> 
> > (i) $S_i$ 的一部分为 $S = \partial \Omega$ 的一部分。此时，由于 $\tilde{\Phi}(\mathbf{r})\big|_S = 0$ 或 $\left.\dfrac{\partial \tilde{\Phi}(\mathbf{r})}{\partial n}\right|_S = 0$ 成立，故上式中第一个求和号中的相应的积分贡献为零。
> >
> > (ii) $S_i$ 的一部分为内边界，即存在一个区域 $\Omega_j$，它和 $\Omega_i$ 共享这一分界面。此时需要考虑两个积分的贡献之和
> >
>> $$
> > \Delta_{ij} = \int \int_{S_i'} [\epsilon_i \tilde{\Phi}_i(\mathbf{r}) \nabla \tilde{\Phi}_i(\mathbf{r})] \cdot d\mathbf{S}_i + \int \int_{S_j'} [\epsilon_j \tilde{\Phi}_j(\mathbf{r}) \nabla \tilde{\Phi}_j(\mathbf{r})] \cdot d\mathbf{S}_j.
> > $$
> > 
> >这里，$S_i'$ 和 $S_j'$ 为区域 $\Omega_i$ 和区域 $\Omega_j$ 共享的那部分边界，只不过由于它们的外法线方向正好相反，故用不同记号标记。由于在这部分边界上有 $\tilde{\Phi}_i(\mathbf{r}) = \tilde{\Phi}_j(\mathbf{r})$ 以及 $d\mathbf{S}_i = -d\mathbf{S}_j$，故上式可以改写作
>> 
> >$$
>> \begin{aligned}
> > \Delta_{ij} &= \int \int_{S_i'} [\epsilon_i \tilde{\Phi}_i(\mathbf{r}) \nabla \tilde{\Phi}_i(\mathbf{r})] \cdot d\mathbf{S}_i + \int \int_{S_j'} [\epsilon_j \tilde{\Phi}_j(\mathbf{r}) \nabla \tilde{\Phi}_j(\mathbf{r})] \cdot (-d\mathbf{S}_i) \\\\
> > &= \int \int_{S_i'} \tilde{\Phi}_i(\mathbf{r}) \left(\epsilon_i \frac{\partial \tilde{\Phi}_i}{\partial n} - \epsilon_j \frac{\partial \tilde{\Phi}_j}{\partial n}\right) d\mathbf{S}_i.
> > \end{aligned}
> > $$
> > 
> >在分界面两边皆为绝缘体时，有
> > 
> >$$
> > \begin{aligned}
> > \Delta_{ij} &= \int \int_{S_i'} \tilde{\Phi}_i(\mathbf{r}) \left[\left(\epsilon_i \frac{\partial \Phi_i(\mathbf{r})}{\partial n} - \epsilon_j \frac{\partial \Phi_j(\mathbf{r})}{\partial n}\right) - \left(\epsilon_i \frac{\partial \Psi_i(\mathbf{r})}{\partial n} - \epsilon_j \frac{\partial \Psi_j(\mathbf{r})}{\partial n}\right)\right] dS_i \\\\
> > &= \int \int_{S_i'} \tilde{\Phi}_i(\mathbf{r}) \left[-\sigma_{if}(\mathbf{r}) - (-\sigma_{if}(\mathbf{r}))\right] dS_i = 0.
> > \end{aligned}
> > $$
> > 
> >而当分界面的两边分别被绝缘体和导体占据时，有
> > 
> >$$
> > \begin{aligned}
> > \Delta_{ij} &= \int \int_{S_i'} \left(\epsilon_i \tilde{\Phi}_i(\mathbf{r}) \nabla \tilde{\Phi}_i(\mathbf{r})\right) \cdot d\mathbf{S}_i = \tilde{\Phi}_i \int \int_{S_i'} \epsilon_i \frac{\partial \tilde{\Phi}_i(\mathbf{r})}{\partial n} dS_i \\\\
> > &= \tilde{\Phi}_i \left(\int \int_{S_i'} \epsilon_i \frac{\partial \Phi_i(\mathbf{r})}{\partial n} dS_i - \int \int_{S_i'} \epsilon_i \frac{\partial \Psi_i(\mathbf{r})}{\partial n} dS_i\right) \\\\
> > &= \tilde{\Phi}_i \left(\int \int_{S_i'} [\sigma_f(\mathbf{r}) - \sigma_f(\mathbf{r})] dS_i\right) = 0.
> > \end{aligned}
> > $$
> > 
> > 因此
> >$$
> > 0= \sum_{i=1}^n{}' \oint \oint_{S_i} [\epsilon_i \tilde{\Phi}_i(\mathbf{r}) \nabla \tilde{\Phi}_i(\mathbf{r})] \cdot d\mathbf{S}_i - \sum_{i=1}^n{}' \int \int \int_{\Omega_i} \epsilon_i \left(\nabla \tilde{\Phi}_i(\mathbf{r})\right)^2 dx_i dy_i dz_i.
> > $$
> > 第一项在定理给定的条件下恒为零，而我们也由此得到
> > 
> > $$
> >\sum_{i=1}^n{}' \int \int \int_\Omega \epsilon_i \left(\nabla \tilde{\Phi}_i(\mathbf{r})\right)^2 dx dy dz = 0.
> > $$
> > 
> > 如前所述，它隐含着泊松方程的两个解 $\Phi(\mathbf{r})$ 和 $\Psi(\mathbf{r})$ 之间最多差一个常数。
> 
> 在解决实际问题时，往往给定的不是导体表面的面电荷密度 $\sigma_f(\mathbf{r})$，而是导体带的总电荷 $Q_f$。即便如此，唯一性定理仍然成立。这是由于此时
> $$
> 0= \sum_{i=1}^n{}' \oint \oint_{S_i} [\epsilon_i \tilde{\Phi}_i(\mathbf{r}) \nabla \tilde{\Phi}_i(\mathbf{r})] \cdot d\mathbf{S}_i - \sum_{i=1}^n{}' \int \int \int_{\Omega_i} \epsilon_i \left(\nabla \tilde{\Phi}_i(\mathbf{r})\right)^2 dx_i dy_i dz_i.
> $$
> 求和的第一项仍然为零。实际上，重复上面的论证，我们看到
> 
> $$
> \begin{aligned}
> &\sum_{i=1}^n{}' \int \int_{S_i} \epsilon_i \left(\tilde{\Phi}_i(\mathbf{r}) \nabla \tilde{\Phi}_i(\mathbf{r})\right) \cdot d\mathbf{S}_i \\\\
> &= \epsilon_1 \tilde{\Phi}_1\big|_{S_1'} \int \int_{S_1'} \frac{\partial \tilde{\Phi}_1}{\partial n} dS + \epsilon_2 \tilde{\Phi}_2\big|_{S_2'} \int \int_{S_2'} \frac{\partial \tilde{\Phi}_2}{\partial n} dS + \epsilon_3 \tilde{\Phi}_3\big|_{S_3'} \int \int_{S_3'} \frac{\partial \tilde{\Phi}_3}{\partial n} dS.
> \end{aligned}
> $$
> 
> 这里为了简化问题，我们假设区域 $\Omega$ 内只有一个导体，它被三种不同的介质 1，2 和 3 所包围，分别共享边界 $S_1'$，$S_2'$ 和 $S_3'$
>
> 由于导体在静电的情况下是等势面，所以
> $$
> \tilde{\Phi}_1\big|_{S_1'} = \tilde{\Phi}_2\big|_{S_2'} = \tilde{\Phi}_3\big|_{S_3'} = K.
> $$
> 
>$K$ 为一个常数。又由于
> 
> $$
> \epsilon_i \left.\frac{\partial \tilde{\Phi}_i}{\partial n}\right|_{S_i'} = \epsilon_i \left.\frac{\partial \Phi_i}{\partial n}\right|_{S_i'} - \epsilon_i \left.\frac{\partial \Psi_i}{\partial n}\right|_{S_i'} = \sigma_f^{\Psi_i}(\mathbf{r}) - \sigma_f^{\Phi_i}(\mathbf{r}), \quad i = 1,2,3,\cdots
> $$
> 
> 我们可得
>
> $$
>\sum_{i=1}^n{}' \int \int_{S_i} \epsilon_i (\tilde{\Phi}(\mathbf{r}) \nabla \tilde{\Phi}(\mathbf{r})) \cdot d\mathbf{S}_i = K \int \int_{S_1'} (\sigma_f^{\Psi_1}(\mathbf{r}) - \sigma_f^{\Phi_1}(\mathbf{r})) dS
> $$
> 
> $$
> + K \int \int_{S_2'} (\sigma_f^{\Psi_2}(\mathbf{r}) - \sigma_f^{\Phi_2}(\mathbf{r})) dS + K \int \int_{S_3'} (\sigma_f^{\Psi_3}(\mathbf{r}) - \sigma_f^{\Phi_3}(\mathbf{r})) dS
>$$
> 
>$$
> = K \left(\int \int_{S_1'} \sigma_f^{\Psi_1}(\mathbf{r}) dS_1 + \int \int_{S_2'} \sigma_f^{\Psi_2}(\mathbf{r}) dS_2 + \int \int_{S_3'} \sigma_f^{\Psi_3}(\mathbf{r}) dS_3\right)
> $$
> 
> $$
>- K \left(\int \int_{S_1'} \sigma_f^{\Phi_1}(\mathbf{r}) dS_1 + \int \int_{S_2'} \sigma_f^{\Phi_2}(\mathbf{r}) dS_2 + \int \int_{S_3'} \sigma_f^{\Phi_3}(\mathbf{r}) dS_3\right)
> $$
>
> $$
> = K(Q_f - Q_f) = 0.
> $$
>
> 因此静电学的唯一性定理仍然成立。

静电学问题解的唯一性定理给予了我们很大的灵活性。换句话说，无论我们用什么办法找到一个势函数 $\Phi(\mathbf{r})$，它在区域 $\Omega$ 内满足给定的泊松方程，又在 $\Omega$ 的边界 $\partial \Omega$ 上满足给定的边界条件，那么它就一定是该静电学问题的唯一解。

## Part 4 格林函数

下面要考虑一般的静电学问题。为了这一目的，我们引入格林函数方法。

一般的静电学问题可以大致分为两类：

> **第一类边值问题**：空间区域 $\Omega$ 中的电荷分布 $\rho_f(\mathbf{r})$ 和边界 $S = \partial\Omega$ 上各点处的电势 $\Phi_S(\mathbf{r})$ 已经给定；
>
> **第二类边值问题**： $\Omega$ 内的电荷分布 $\rho_f(\mathbf{r})$ 和边界 $S = \partial\Omega$ 上各点处的电场的法线分量 $\dfrac{\partial\Phi_S(\mathbf{r})}{\partial n}$ 已经给定。

我们的任务是用格林函数方法，在这两类边值条件下求解电势在 $\Omega$ 内各点处的分布 $\Phi(\mathbf{r})$。

为此，我们引入所谓 $\delta$-函数的定义。它被定义作
$$
\delta(x) = 
\begin{cases}
0, & \text{if } x \ne 0; \\\\
\infty, & \text{if } x = 0,
\end{cases}
$$

并且满足条件

$$
\int_{-\infty}^{\infty} \delta(x) dx = 1.
$$

这一函数原本是狄拉克（Dirac）于 1926 年引入以解决量子力学中连续谱态的归一化问题的，后被物理学家广泛应用于处理各种边值问题。严格地说，它不是一种通常意义上的函数，而是一种被称之为分布（distribution）的连续泛函。在实际运算中，人们常常用某些函数来逼近它。例如，在一维空间中，若我们考虑函数

$$
f_\epsilon(x) = \frac{1}{\pi} \frac{\epsilon}{x^2 + \epsilon^2}, \quad \epsilon > 0.
$$

显然，当 $x \ne 0$ 时，我们有

$$
\lim_{\epsilon \to 0^+} f_\epsilon(x) = \lim_{\epsilon \to 0^+} \frac{1}{\pi} \frac{\epsilon}{x^2 + \epsilon^2} = 0,
$$

而当 $x = 0$ 时，我们又有

$$
\lim_{\epsilon \to 0^+} f_\epsilon(x = 0) = \lim_{\epsilon \to 0^+} \frac{1}{\pi} \frac{\epsilon}{\epsilon^2} = \lim_{\epsilon \to 0^+} \frac{1}{\pi\epsilon} = \infty.
$$

另一方面，将 $f_\epsilon(x)$ 在实轴上积分后我们有

$$
\begin{aligned}
\int_{-\infty}^{\infty} f_\epsilon(x) dx &= \int_{-\infty}^{\infty} \frac{1}{\pi} \frac{\epsilon}{x^2 + \epsilon^2} dx = \left. \frac{1}{\pi} \arctan\frac{x}{\epsilon} \right|_{-\infty}^{\infty} \\\\
&= \frac{1}{\pi} (\arctan\infty - \arctan(-\infty)) = \frac{1}{\pi} \left( \frac{\pi}{2} - \left( -\frac{\pi}{2} \right) \right) = 1.
\end{aligned}
$$

因此，按照定义，我们当有

$$
\lim_{\epsilon \to 0^+} \frac{1}{\pi} \frac{\epsilon}{x^2 + \epsilon^2} = \delta(x).
$$

有了 $\delta$ 函数的定义后，我们现在可以将位于坐标原点处的一个带电量为 $Q$ 的点电荷分布写作 $\rho(\mathbf{r}) = Q\delta(\mathbf{r})$。这是由于等式

$$
\begin{aligned}
\int \int \int_{R^3} \rho(\mathbf{r}) dxdydz &= \int \int \int_{R^3} Q\delta(\mathbf{r}) dxdydz = \int \int \int_{R^3} Q\delta(x)\delta(y)\delta(z) dxdydz \\\\
&= Q \left( \int_{-\infty}^{\infty} \delta(x) dx \right) \left( \int_{-\infty}^{\infty} \delta(y) dy \right) \left( \int_{-\infty}^{\infty} \delta(z) dz \right) = Q
\end{aligned}
$$

成立。$\delta$ 函数的另外一个有用的性质是，它与一个连续函数 $f(\mathbf{r})$ 的乘积的积分等于该函数在 $\mathbf{r} = 0$ 处的值，即我们有

$$
\int \int \int_{R^3} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz = f(0).
$$

这一公式的证明非常简单。让我们任取一个以原点为球心，半径为 $\epsilon$ 的小球 $\Omega_\epsilon$。那么，我们都有的

$$
\begin{aligned}
&\int \int \int_{R^3} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz \\\\
&= \int \int \int_{R^3 \setminus \Omega_\epsilon} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz + \int \int \int_{\Omega_\epsilon} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz \\\\
&= \int \int \int_{\Omega_\epsilon} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz.
\end{aligned}
$$

当 $\epsilon$ 足够小时，我们可以利用 $f(\mathbf{r})$ 在 $\mathbf{r} = 0$ 处的值 $f(0)$ 代替它在被积函数的位置，从而得到

$$
\begin{aligned}
&\int \int \int_{R^3} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz = \int \int \int_{\Omega_\epsilon} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz \\\\
&\simeq \int \int \int_{\Omega_\epsilon} f(0) \delta(\mathbf{r}) dxdydz = f(0) \int \int \int_{\Omega_\epsilon} \delta(\mathbf{r}) dxdydz \\\\
&= f(0) \int \int \int_{R^3} \delta(\mathbf{r}) dxdydz = f(0).
\end{aligned}
$$

最后，我们令 $\epsilon \to 0$，则上式变为一个等式，即

$$
\int \int \int_{R^3} f(\mathbf{r}) \delta(\mathbf{r}) dxdydz = f(0).
$$

可以形象地讲，$\delta$ 函数将任何一个连续函数都映射到一个复数 $f(0)$ 去。在这种意义上，$\delta$ 函数可以被理解为一个连续泛函（continuous functional）。

接下来，我们要介绍一个十分有用的恒等式

$$
\nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} = -4\pi \delta(\mathbf{r} - \mathbf{r}').
$$

/proof/

> 首先，不难验证
>
> $$
> \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} = -\frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3}
> $$
> 成立。其次，利用在第二章中的相关推导，我们看到当 $\mathbf{r} \ne \mathbf{r}'$ 时，
>$$
> \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} = -\nabla_{\mathbf{r}} \cdot \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} = 0.
>$$
> 因此，我们只需研究 $\nabla^2_{\mathbf{r}} \dfrac{1}{|\mathbf{r} - \mathbf{r}'|}$ 在 $\mathbf{r} \simeq \mathbf{r}'$ 附近的行为即可。取一个以 $\mathbf{r}$ 为球心，$\delta$ 为半径的小球体 $\Omega_\delta$。则我们有
> $$
> \begin{aligned}
> &\int \int \int_{R^3} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz \\\\
>&= \int \int \int_{R^3 \setminus \Omega_\delta} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz + \int \int \int_{\Omega_\delta} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz \\\\
> &= \int \int \int_{\Omega_\delta} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz.
>\end{aligned}
> $$
> 对上式的右边使用高斯定理后，我们进一步得到
> $$
> \begin{aligned}
> \int \int \int_{R^3} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz &= \int \int \int_{\Omega_\delta} \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} dxdydz \\\\
> &= \oint \oint_{S_\delta} \left( \nabla_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right) \cdot d\mathbf{S} = -\oint \oint_{S_\delta} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|^3} \cdot d\mathbf{S} = -4\pi.
> \end{aligned}
> $$
>另一方面，按照定义，我们有
> $$
>\int \int \int_{R^3} (-4\pi) \delta(\mathbf{r} - \mathbf{r}') dxdydz = -4\pi,
> $$
> 
> 故成立。

在做了这些准备之后，我们现在可以引入静电学问题中的格林函数了。它被定义作方程

$$
\nabla^2_{\mathbf{r}} G(\mathbf{r}, \mathbf{r}') = -\frac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}')
$$

的解。

根据点电荷与 $\delta$ 函数的关系，$G(\mathbf{r}, \mathbf{r}')$ 也可以被解释作真空中一个位于空间 $\mathbf{r}'$ 处带电量为 $q = 1$ 的点电荷在空间 $\mathbf{r}$ 处产生的静电势。

需要强调一点的是，由于 $\delta(\mathbf{r})$ 是一个偶函数，故 $\nabla^2_{\mathbf{r}} G(\mathbf{r}, \mathbf{r}') = \nabla^2_{\mathbf{r}'} G(\mathbf{r}', \mathbf{r})$ 显然成立。除此之外，亦可证明，在第一类边值条件下，$G(\mathbf{r}, \mathbf{r}') = G(\mathbf{r}', \mathbf{r})$ 也成立。

这一互易关系隐含着，在给定的边值条件下，位于 $\mathbf{r}'$ 处的单位电荷在 $\mathbf{r}$ 处产生的电势与位于 $\mathbf{r}$ 处的单位电荷在 $\mathbf{r}'$ 处产生的电势是等值的。

我们知道，要想唯一地决定 $G(\mathbf{r}, \mathbf{r}')$，需要给出在相关的空间区域 $\Omega$ 的边界 $S = \partial\Omega$ 上的电势分布 $\Phi_S$ 或其导数分布 $\left.\dfrac{\partial\Phi_S}{\partial n}\right|_S$。让我们结合讲过的例子，分别考虑以下三种情况。

> (1) 无界空间中的格林函数。在此情况下，可以将无穷远处的电势取为零。因此，$G_0(\mathbf{r}, \mathbf{r}')$ 可以唯一地决定下来。我们有
>
> $$
> G_0(\mathbf{r}, \mathbf{r}') = \frac{1}{4\pi\epsilon_0} \frac{1}{\sqrt{(x - x')^2 + (y - y')^2 + (z - z')^2}} = \frac{1}{4\pi\epsilon_0} \frac{1}{|\mathbf{r} - \mathbf{r}'|}.
> $$
>
> 事实上，利用
> $$
> \nabla^2_{\mathbf{r}} \frac{1}{|\mathbf{r} - \mathbf{r}'|} = -4\pi \delta(\mathbf{r} - \mathbf{r}').
> $$
> 我们可以直接验证
>
> $$
> \begin{aligned}
> \nabla_{\mathbf{r}}^2 G_0(\mathbf{r}, \mathbf{r}') &= \nabla_{\mathbf{r}}^2 \left( \frac{1}{4\pi\epsilon_0} \frac{1}{|\mathbf{r} - \mathbf{r}'|} \right) = \frac{1}{4\pi\epsilon_0} \nabla_{\mathbf{r}}^2 \frac{1}{|\mathbf{r} - \mathbf{r}'|} \\\\
> &= \frac{1}{4\pi\epsilon_0} (-4\pi \delta(\mathbf{r} - \mathbf{r}')) = -\frac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}').
> \end{aligned}
> $$
>
> 的确是我们要找的解。
>
> (2) 上半平面的格林函数。我们可以写出此时的格林函数
>
> $$
> \begin{aligned}
> G_1(\mathbf{r}, \mathbf{r}') &= \frac{1}{4\pi\epsilon_0} \left( \frac{1}{\sqrt{(x - x')^2 + (y - y')^2 + (z - z')^2}} \right. \\\\
> &\quad \left. - \frac{1}{\sqrt{(x - x')^2 + (y - y')^2 + (z + z')^2}} \right).
> \end{aligned}
> $$
>
> (3) 球外空间的格林函数。若令
>
> $$
> r = \sqrt{x^2 + y^2 + z^2}, \quad r' = \sqrt{x'^2 + y'^2 + z'^2}.
> $$
>
> 则我们有
>
> $$
> G_2(\mathbf{r}, \mathbf{r}') = \frac{1}{4\pi\epsilon_0} \left( \frac{1}{\sqrt{r^2 + r'^2 - 2rr' \cos\alpha}} - \frac{R_0 / r'}{\sqrt{r^2 + b^2 - 2rb \cos\alpha}} \right),
> $$
>
> 这里，$R_0$ 为球的半径，电荷点为 $P$，场点 $P'$，角度 $\alpha$ 为 $\overrightarrow{OP}$ 和 $\overrightarrow{OP'}$ 的夹角。
>
> 将 $b = \dfrac{R_0^2}{r'}$ 代入上式后，我们有
> $$
> G_2(\mathbf{r}, \mathbf{r}') = \frac{1}{4\pi\epsilon_0} \left( \frac{1}{\sqrt{r^2 + r'^2 - 2rr' \cos\alpha}} - \frac{1}{\sqrt{\left( \frac{rr'}{R_0} \right)^2 + R_0^2 - 2rr' \cos\alpha}} \right).
> $$
>

接下来，我们讨论如何利用格林函数获得一般边值问题的解。先看第一类边值问题。

由于自由电荷在空间中的分布密度函数 $\rho_f(\mathbf{r}')$ 是已知的，故泊松方程
$$
\nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') = -\frac{1}{\epsilon} \rho_f(\mathbf{r}')
$$

以及

$$
\nabla_{\mathbf{r}}^2 G(\mathbf{r}, \mathbf{r}') = -\frac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}')
$$

成立。将 $\displaystyle\nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') = -\dfrac{1}{\epsilon} \rho_f(\mathbf{r}')$ 乘以 $G(\mathbf{r}, \mathbf{r}')$ 再减去 $\displaystyle\nabla_{\mathbf{r}}^2 G(\mathbf{r}, \mathbf{r}') = -\dfrac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}')$ 乘以 $\Phi(\mathbf{r}')$ 后

$$
\begin{aligned}
G(\mathbf{r}, \mathbf{r}') \nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 G(\mathbf{r}, \mathbf{r}') &= G(\mathbf{r}', \mathbf{r}) \nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 G(\mathbf{r}', \mathbf{r}) \\\\
&= -\frac{1}{\epsilon} \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') + \frac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}') \Phi(\mathbf{r}').
\end{aligned}
$$

将此式的两边对全空间积分后，有

$$
\begin{aligned}
&\int \int \int_\Omega \left( G(\mathbf{r}', \mathbf{r}) \nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 G(\mathbf{r}', \mathbf{r}) \right) dx' dy' dz' \\\\
&= \int \int \int_\Omega \left( -\frac{1}{\epsilon} \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') + \frac{1}{\epsilon_0} \delta(\mathbf{r} - \mathbf{r}') \Phi(\mathbf{r}') \right) dx' dy' dz' \\\\
&= -\frac{1}{\epsilon} \int \int \int_\Omega \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') dx' dy' dz' + \frac{1}{\epsilon_0} \Phi(\mathbf{r}).
\end{aligned}
$$

对于上式的左边，可以使用恒等式

$$
\Psi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 \Psi(\mathbf{r}') = \nabla_{\mathbf{r}'} \cdot \left( \Psi(\mathbf{r}') \nabla_{\mathbf{r}'} \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'} \Psi(\mathbf{r}') \right)
$$

因此，上式可以被改写作

$$
\begin{aligned}
&\int \int \int_\Omega \left( G(\mathbf{r}', \mathbf{r}) \nabla_{\mathbf{r}'}^2 \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'}^2 G(\mathbf{r}', \mathbf{r}) \right) dx' dy' dz'\\\\
&= \int \int \int_\Omega \nabla_{\mathbf{r}'} \left( G(\mathbf{r}', \mathbf{r}) \nabla_{\mathbf{r}'} \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'} G(\mathbf{r}', \mathbf{r}) \right) dx' dy' dz' \\\\
&= \oint \oint_{\partial\Omega} \left( G(\mathbf{r}', \mathbf{r}) \nabla_{\mathbf{r}'} \Phi(\mathbf{r}') - \Phi(\mathbf{r}') \nabla_{\mathbf{r}'} G(\mathbf{r}', \mathbf{r}) \right) \cdot d\mathbf{S}' \\\\
&= \oint \oint_{\partial\Omega} \left( G(\mathbf{r}', \mathbf{r}) \frac{\partial \Phi(\mathbf{r}')}{\partial n'} - \Phi(\mathbf{r}') \frac{\partial G(\mathbf{r}', \mathbf{r})}{\partial n'} \right) dS' \\\\
&= -\frac{1}{\epsilon} \int \int \int_\Omega \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') dx' dy' dz' + \frac{1}{\epsilon_0} \Phi(\mathbf{r}),
\end{aligned}
$$

或是

$$
\begin{aligned}
\Phi(\mathbf{r}) &= \frac{\epsilon_0}{\epsilon} \int \int \int_\Omega \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') dx' dy' dz' \\\\
&\quad + \epsilon_0 \oint \oint_{\partial\Omega} \left( G(\mathbf{r}', \mathbf{r}) \frac{\partial \Phi(\mathbf{r}')}{\partial n'} - \Phi(\mathbf{r}') \frac{\partial G(\mathbf{r}', \mathbf{r})}{\partial n'} \right) dS'. 
\end{aligned}
$$

由于在第一类边值问题中，$\rho_f(\mathbf{r}')$ 和 $\Phi(\mathbf{r}')|_{\partial\Omega}$ 是已知的，且在 $\partial\Omega$ 上，$G(\mathbf{r}', \mathbf{r}) = 0$，故我们进一步得到

$$
\Phi(\mathbf{r}) = \frac{\epsilon_0}{\epsilon} \int \int \int_\Omega \rho_f(\mathbf{r}') G(\mathbf{r}, \mathbf{r}') dx' dy' dz' - \epsilon_0 \oint \oint_{\partial\Omega} \Phi(\mathbf{r}') \frac{\partial G(\mathbf{r}', \mathbf{r})}{\partial n'} dS'.
$$

因此，$\Phi(\mathbf{r})$ 可以唯一地决定下来。

对于第二类边值问题，除了 $\left. \dfrac{\partial \Phi(\mathbf{r}')}{\partial n} \right|_{\partial\Omega}$ 的值外，我们还需知道 $\Phi(\mathbf{r}')$ 在边界上的值。因此，格林函数在边界上的取值需要加以改动。

## Part 5 电多极矩

一个无限大均匀介质中给定电荷密度 $\rho_f(\mathbf{r})$ 所产生的电势为

$$
\Phi(\mathbf{r}) = \frac{1}{4\pi\epsilon} \int \int \int_{R^3} \frac{\rho_f(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} dx'dy'dz'.
$$
在许多物理问题中，电荷只分布在在一个很小的区域 $\Omega$ 内，而人们所关心的又是电势 $\Phi(\mathbf{r})$ 在距离这一区域较远，即 $|\mathbf{r}-\mathbf{r}'|$ 远大于区域 $\Omega$ 的线度 $l$ 处的值。因此，我们没有必要对上式中的积分求精确值。近似地，我们可以将被积表达式按照 $l/|\mathbf{r}|$ 的幂次做展开，然后决定 $\Phi(\mathbf{r})$ 的各级近似值。

当 $|\mathbf{r}'| \ll |\mathbf{r}|$ 时，我们近似有

$$
\begin{aligned}
f(\mathbf{r}-\mathbf{r}') &\cong f(\mathbf{r})+\sum_{i=1}^{3}\frac{\partial f(\mathbf{r})}{\partial x_i}(-x'_i)+\frac{1}{2!}\sum_{i=1}^{3}\sum_{j=1}^{3}\frac{\partial^2 f(\mathbf{r})}{\partial x_i\partial x_j}(-x'_i)(-x'_j) \\
&= f(\mathbf{r})-\mathbf{r}'\cdot\nabla_{\mathbf{r}}f(\mathbf{r})+\frac{1}{2!}(\mathbf{r}'\cdot\nabla_{\mathbf{r}})^2f(\mathbf{r}).
\end{aligned}
$$

将此展开式应用到上式中的被积函数，我们有

$$
\begin{aligned}
\Phi(\mathbf{r})&\cong\frac{1}{4\pi\epsilon}\int\int\int_{\Omega}\rho_f(\mathbf{r}')\left(\frac{1}{r}-\mathbf{r}'\cdot\nabla_{\mathbf{r}}\frac{1}{r}+\frac{1}{2!}(\mathbf{r}'\cdot\nabla_{\mathbf{r}})^2\frac{1}{r}\right)dx'dy'dz'\\\\
&=\frac{1}{4\pi\epsilon r}\int\int\int_{\Omega}\rho_f(\mathbf{r}')dx'dy'dz'-\frac{1}{4\pi\epsilon}\int\int\int_{\Omega}\rho_f(\mathbf{r}')\mathbf{r}'\cdot\left(\nabla_{\mathbf{r}}\frac{1}{r}\right)dx'dy'dz'\\\\
&+\frac{1} {8\pi\epsilon}\int\int\int_{\Omega}\rho(\mathbf{r}')\sum_{i=1}^{3}\sum_{j=1}^{3}x'_ix'_j\left(\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}\right)dx'dy'dz'\\\\
&=\frac{1}{4\pi\epsilon}\frac{Q}{r}-\frac{1}{4\pi\epsilon}\mathbf{P}\cdot\nabla_{\mathbf{r}}\frac{1}{r}+\frac{1}{4\pi\epsilon}\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}.
\end{aligned}
\tag{a}
$$

这里，

$$
Q=\int\int\int_{\Omega}\rho_f(\mathbf{r}')dx'dy'dz',\quad \mathbf{P}=\int\int\int_{\Omega}\rho_f(\mathbf{r}')\mathbf{r}'dx'dy'dz',
$$

以及

$$
D_{ij}=\int\int\int_{\Omega}\rho_f(\mathbf{r}')3x'_ix'_jdx'dy'dz'.
$$

分别称为体系的总电荷，电偶极矩和电四极矩。

由表达式 (a)，我们得出结论，作为第一级近似，可以将所有得电荷都置于原点处，那么在远离区域 $\Omega$ 的 $\mathbf{r}$ 处，电势将由 (a) 式中的第一项给出。进一步，若电荷密度分布 $\rho(\mathbf{r}')$ 对于坐标原点不对称，那么 $\mathbf{P}$ 一般不为零。此时，(a) 式中的第二项对于电势的贡献会显现出来，我们有

$$
\Phi^{(2)}(\mathbf{r})=-\frac{1}{4\pi\epsilon}\mathbf{P}\cdot\nabla_{\mathbf{r}}\frac{1}{r}=\frac{\mathbf{P}\cdot\mathbf{r}}{4\pi\epsilon r^3}.
$$

由于体系的总电荷以及电偶极矩的概念相对比较熟悉，我们下面将集中讨论电四极矩的性质。首先，我们注意到，按照定义，$\{D_{ij}\}$ 构成了一个 $3\times 3$ 矩阵的矩阵元，并且这个矩阵是对称的，即

$$
D_{ij}=\int\int\int_{\Omega}3x'_ix'_j\rho_f(x',y',z')dx'dy'dz'=D_{ji}.
$$

因此，这九个量中最多只能有六个是彼此独立的。我们要证明，实际上它们之中只有五个是独立的。为此，我们先假定 $D_{11}, D_{22}, D_{33}, D_{12}, D_{13}$ 和 $D_{23}$ 是独立的。那么，若在前三个分量上各自加上一个常数 $C$，则新定义的六个分量

$$
D'_{11}=D_{11}+C,\, D'_{22}=D_{22}+C,\, D'_{33}=D_{33}+C,\, D'_{12}=D_{12},\, D'_{13}=D_{13},\, D'_{23}=D_{23}
$$

亦应该是独立的。现在，我们取

$$
C=-\int\int\int_{\Omega}r'^2\rho_f(x',y',z')dx'dy'dz',
$$

则如此定义的新的六个分量可以统一地写作

$$
D'_{ij}=D_{ij}-\delta_{ij}\int\int\int_{\Omega}r'^2\rho_f(x',y',z')dx'dy'dz'.
$$

接下来，我们要论证，它们给出的相应的电势的表达式并不改变。实际上，我们有

$$
\begin{aligned}
&\frac{1}{4\pi\epsilon}\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D'_{ij}\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}dx'dy'dz'=\frac{1}{4\pi\epsilon}\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}dx'dy'dz'\\\\
&-\frac{1}{4\pi\epsilon}\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}\delta_{ij}\int\int\int_{\Omega}r'^2\rho_f(x',y',z')\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}dx'dy'dz'\\\\
&=\frac{1}{4\pi\epsilon}\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial}{\partial x_i}\frac{\partial}{\partial x_j}\frac{1}{r}dx'dy'dz'-\frac{1}{4\pi\epsilon}\frac{1}{6}\int\int\int_{\Omega}r'^2\rho_f(\mathbf{r}')\left(\nabla^2_{\mathbf{r}}\frac{1}{r}\right)dx'dy'dz'.
\end{aligned}
$$

利用方程 $\nabla^2_{\mathbf{r}}\dfrac{1}{r}=-4\pi\delta(\mathbf{r})$，我们看到，当 $\mathbf{r}\neq 0$ 时，上式的第二项为零。因此，四极矩 $\{D'_{ij}\}$ 和 $\{D_{ij}\}$ 在远处产生的静电势并无区别。

另一方面，按照定义，我们有

$$
\begin{aligned}
D'_{11}+D'_{22}+D'_{33}&=\left(D_{11}-\int\int\int_{\Omega}r'^2\rho_f(\mathbf{r}')dx'dy'dz'\right)\\\\
&+\left(D_{22}-\int\int\int_{\Omega}r'^2\rho_f(\mathbf{r}')dx'dy'dz'\right)+\left(D_{33}-\int\int\int_{\Omega}r'^2\rho_f(\mathbf{r}')dx'dy'dz'\right)\\\\
&=\int\int\int_{\Omega}3x'x'\rho_f(x',y',z')dx'dy'dz'+\int\int\int_{\Omega}3y'y'\rho_f(x',y',z')dx'dy'dz'\\\\
&+\int\int\int_{\Omega}3z'z'\rho_f(x',y',z')dx'dy'dz'-3\int\int\int_{\Omega}r'^2\rho_f(x',y',z')dx'dy'dz'\\\\
&=3\int\int\int_{\Omega}r'^2\rho_f(x',y',z')dx'dy'dz'-3\int\int\int_{\Omega}r'^2\rho_f(x',y',z')dx'dy'dz'\\\\
&=0.
\end{aligned}
$$

也就是说，$D'_{11}, D'_{22}$ 和 $D'_{33}$ 并非独立的。这导致了悖论。因此，六个分量 $D_{11}, D_{22}, D_{33}, D_{12}, D_{13}$ 和 $D_{23}$ 中最多只有五个是独立的。在文献中，人们一般将 $\{D'_{ij}\}$ 定义作一个电荷体系的电四极矩张量。

/example/

> 设外电场 $\mathbf{E}_{\text{out}}(\mathbf{r})$ 的电势为 $\Phi_{\text{out}}(\mathbf{r})$。那么，一个处于此电场中的带电体的能量为
>
> $$
> W=\int\int\int_{\Omega}\rho(\mathbf{r})\Phi_{\text{out}}(\mathbf{r})dxdydz.
> $$
>
> 假设 $\Omega$ 是一个非常小的区域，使得我们可以将其中的电势 $\Phi_{\text{out}}(\mathbf{r})$ 在某一点（记作 $\mathbf{r}=0$）附近做展开，即
>
> $$
> \Phi_{\text{out}}(\mathbf{r})\cong\Phi_{\text{out}}(0)+\sum_{i=1}^{3}x_i\frac{\partial\Phi_{\text{out}}(0)}{\partial x_i}+\frac{1}{2!}\sum_{i=1}^{3}\sum_{j=1}^{3}x_ix_j\frac{\partial^2\Phi_{\text{out}}(0)}{\partial x_i\partial x_j}.
> $$
>
> 将之代入 $W$ 的表达式后，我们有
>
> $$
> \begin{aligned}
> W &= \int\int\int_{\Omega}\rho(\mathbf{r})\Phi_{\text{out}}(\mathbf{r})dxdydz=\int\int\int_{\Omega}\rho(\mathbf{r})\Phi_{\text{out}}(0)dxdydz\\\\
> &+ \sum_{i=1}^{3}\int\int\int_{\Omega}\rho(\mathbf{r})x_i\frac{\partial\Phi_{\text{out}}(0)}{\partial x_i}dxdydz+\frac{1}{2!}\sum_{i=1}^{3}\sum_{j=1}^{3}\int\int\int_{\Omega}\rho(\mathbf{r})x_ix_j\frac{\partial^2\Phi_{\text{out}}(0)}{\partial x_i\partial x_j}dxdydz\\\\
> &= Q\Phi_{\text{out}}(0)+\mathbf{P}\cdot\nabla\Phi_{\text{out}}(0)+\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial^2\Phi_{\text{out}}(0)}{\partial x_i\partial x_j}.
> \end{aligned}
> $$
>
> 其中的第一项可视作体系的电荷都集中在原点 $\mathbf{r}=0$ 时的电势能，第二项则解释作体系的电偶极矩在外场中的能量。我们又可将之写作
>
> $$
> W^{(2)}=\mathbf{P}\cdot\nabla\Phi_{\text{out}}(0)=-\mathbf{P}\cdot\mathbf{E}_{\text{out}}(0).
> $$
>
> 而第三项则为体系的电四极矩在外电场中的能量。它也可被重新写作
>
> $$
> W^{(3)}=\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial^2\Phi_{\text{out}}(0)}{\partial x_i\partial x_j}=-\frac{1}{6}\sum_{i=1}^{3}\sum_{j=1}^{3}D_{ij}\frac{\partial E_{\text{out}}^j(0)}{\partial x_i}.
> $$
>
> 因此可见，只有在非均匀外电场中，电四极矩对电势能的贡献才不为零。
>

利用电偶极矩的势能函数，我们可以计算它在电场 $\mathbf{E}_{\text{out}}(\mathbf{r})$ 中所感受到的力和力矩 $\mathbf{M}_{\text{out}}$，即
$$
\begin{aligned}
\mathbf{F} &= -\nabla W^{(2)}=-\nabla(-\mathbf{P}\cdot\mathbf{E}_{\text{out}}(\mathbf{r}))=\nabla(\mathbf{P}\cdot\mathbf{E}_{\text{out}}(\mathbf{r}))\\\\
&= (\mathbf{P}\cdot\nabla)\mathbf{E}_{\text{out}}(\mathbf{r})+(\mathbf{E}_{\text{out}}(\mathbf{r})\cdot\nabla)\mathbf{P}+\mathbf{P}\times(\nabla\times\mathbf{E}_{\text{out}}(\mathbf{r}))+\mathbf{E}_{\text{out}}(\mathbf{r})\times(\nabla\times\mathbf{P})\\\\
&= (\mathbf{P}\cdot\nabla)\mathbf{E}_{\text{out}}(\mathbf{r}),
\end{aligned}
$$

而

$$
\begin{aligned}
\mathbf{M}_{\text{out}} &= -\frac{\partial W^{(2)}}{\partial\vec{\varphi}}=-\frac{\partial}{\partial\varphi}\left(-\mathbf{P}\cdot\mathbf{E}_{\text{out}}(\mathbf{r})\right)\\\\
&= \frac{\partial}{\partial\varphi}\left(PE_{\text{out}}(\mathbf{r})\cos\varphi\right)\mathbf{e}_{\phi\varphi}=-PE_{\text{out}}(\mathbf{r})\sin\theta\mathbf{e}_{\phi\varphi}=\mathbf{P}\times\mathbf{E}_{\text{out}}(\mathbf{r}).
\end{aligned}
$$
