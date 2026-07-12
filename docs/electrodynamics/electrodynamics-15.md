---
title: Lesson 15 电磁波的传播 II
permalink: /electrodynamics/electrodynamics-15/
createTime: 2026/07/01 23:18:11
---

1

### Part 2 反射 折射

光入射到两种不同的连续媒介质的分界面上时会发生反射和折射。这些现象可以用电磁波在该界面处所满足的边值关系加以解释，从而再次揭示了光本质是电磁波。

在第五章中，我们已经知道，电磁场在两种连续介质分界面处所满足的边值关系为

$$
\begin{aligned}
\mathbf{e}_n \times (\mathbf{E}_2 - \mathbf{E}_1) &= 0, \quad \mathbf{e}_n \cdot (\mathbf{D}_2 - \mathbf{D}_1) = \sigma_f, \\
\mathbf{e}_n \times (\mathbf{H}_2 - \mathbf{H}_1) &= \vec{\alpha}_f, \quad \mathbf{e}_n \cdot (\mathbf{B}_2 - \mathbf{B}_1) = 0.
\end{aligned}
\tag{78}
$$

实际上，这四个方程中仅有两个是独立的，一般取为

$$
\mathbf{e}_n \times (\mathbf{E}_2 - \mathbf{E}_1) = 0, \quad \mathbf{e}_n \times (\mathbf{H}_2 - \mathbf{H}_1) = \vec{\alpha}_f.
\tag{79}
$$

让我们考虑最简单的情况，即两种介质的分界面为一无穷大平面，将之取作 $XY$ 平面。如教科书 118 页上图 4-3 所示，若有一单色电磁波从介质 1 射，其波矢 $\mathbf{k}$ 与 $z$ 轴的夹角取作 $\theta$（入射角）。又假设反射波和折射电磁波亦为单色平面波，波矢分别为 $\mathbf{k}'$ 和 $\mathbf{k}''$，即我们有

$$
\begin{aligned}
\mathbf{E}_{\text{入射}}(\mathbf{r},t) &= \mathbf{E}_0 \exp(i\mathbf{k} \cdot \mathbf{r} - i\omega t), \quad \mathbf{E}_{\text{反射}}(\mathbf{r},t) = \mathbf{E}'_0 \exp(i\mathbf{k}' \cdot \mathbf{r} - i\omega t), \\
\mathbf{E}_{\text{折射}}(\mathbf{r},t) &= \mathbf{E}''_0 \exp(i\mathbf{k}'' \cdot \mathbf{r} - i\omega t).
\end{aligned}
\tag{80}
$$

那么，在介质 1 中，总的电场强度矢量应为

$$
\mathbf{E}_1(\mathbf{r},t) = \mathbf{E}_{\text{入射}}(\mathbf{r},t) + \mathbf{E}_{\text{反射}}(\mathbf{r},t) = \mathbf{E}_0 \exp(i\mathbf{k} \cdot \mathbf{r} - i\omega t) + \mathbf{E}'_0 \exp(i\mathbf{k}' \cdot \mathbf{r} - i\omega t).
\tag{81}
$$

而在介质 2 中，电场强度矢量为

$$
\mathbf{E}_2(\mathbf{r},t) = \mathbf{E}_{\text{折射}}(\mathbf{r},t) = \mathbf{E}''_0 \exp(i\mathbf{k}'' \cdot \mathbf{r} - i\omega t).
\tag{82}
$$

将它们代入 (79) 式后，我们得到

$$
\mathbf{e}_n \times (\mathbf{E}_0 \exp(i\mathbf{k} \cdot \mathbf{r} - i\omega t) + \mathbf{E}'_0 \exp(i\mathbf{k}' \cdot \mathbf{r} - i\omega t)) = \mathbf{e}_n \times \mathbf{E}''_0 \exp(i\mathbf{k}'' \cdot \mathbf{r} - i\omega t),
\tag{83}
$$

或是

$$
\begin{aligned}
&(\mathbf{e}_n \times \mathbf{E}_0) \exp(ik_x x + ik_y y) + (\mathbf{e}_n \times \mathbf{E}'_0) \exp(ik'_x x + ik'_y y) \\
&= (\mathbf{e}_n \times \mathbf{E}''_0) \exp(ik''_x x + ik''_y y).
\end{aligned}
\tag{84}
$$

考虑到 $x$ 和 $y$ 坐标的任意性，我们要求

$$
k_x = k'_x = k''_x, \quad k_y = k'_y = k''_y
\tag{85}
$$

必须成立。又若我们将入射波矢取在 $XZ$ 平面内，即令 $k_y = 0$，则 $k'_y$ 和 $k''_y$ 亦必须为零，即反射波矢和折射波矢亦必须在同一 $XZ$ 平面内。

又根据入射角的定义，我们有 $k_x = k \sin\theta$，并可同理定义反射角和折射角，即

$$
k'_x = k' \sin\theta', \quad k''_x = k'' \sin\theta''.
\tag{86}
$$

代入 (85) 式后，我们有

$$
k \sin\theta = k' \sin\theta' = k'' \sin\theta''.
\tag{87}
$$

先看第一个等式。我们有

$$
\frac{\sin\theta}{\sin\theta'} = \frac{k'}{k}.
\tag{88}
$$

又对于单色波而言，波数 $k$ 与频率 $\omega$ 的关系为

$$
k(\omega) = \omega \sqrt{\mu(\omega)\epsilon(\omega)},
\tag{89}
$$

故我们有

$$
k(\omega) = k'(\omega) = \omega \sqrt{\mu_1(\omega)\epsilon_1(\omega)}.
\tag{90}
$$

由此我们得到

$$
\frac{\sin\theta}{\sin\theta'} = \frac{\omega \sqrt{\mu_1(\omega)\epsilon_1(\omega)}}{\omega \sqrt{\mu_1(\omega)\epsilon_1(\omega)}} = 1,
\tag{91}
$$

或是

$$
\sin\theta = \sin\theta',
\tag{92}
$$

即入射角等于反射角。

接下来，我们再考虑 (87) 式中的第二个等式

$$
\frac{\sin\theta''}{\sin\theta'} = \frac{k'}{k''}.
\tag{93}
$$

将

$$
k'(\omega) = \omega \sqrt{\mu_1(\omega)\epsilon_1(\omega)}, \quad k''(\omega) = \omega \sqrt{\mu_2(\omega)\epsilon_2(\omega)},
\tag{94}
$$

代入后，我们有

$$
\frac{\sin\theta''}{\sin\theta'} = \frac{\omega \sqrt{\mu_1(\omega)\epsilon_1(\omega)}}{\omega \sqrt{\mu_2(\omega)\epsilon_2(\omega)}} = \frac{\sqrt{\mu_1(\omega)\epsilon_1(\omega)}}{\sqrt{\mu_2(\omega)\epsilon_2(\omega)}} = \frac{n_1}{n_2},
\tag{95}
$$

即

$$
n_1 \sin\theta' = n_2 \sin\theta''.
\tag{96}
$$

这与众所周知的光在两种介质分界面处满足的折射定律是一致的。

现在，我们将边值关系 (84) 重新写作

$$
\mathbf{e}_n \times \mathbf{E}_0 + \mathbf{e}_n \times \mathbf{E}'_0 = \mathbf{e}_n \times \mathbf{E}''_0.
\tag{97}
$$

为了求解 $\mathbf{E}'_0$ 和 $\mathbf{E}''_0$，我们还需要利用 (79) 中的第二个边值条件。首先，利用麦克斯韦方程

$$
\nabla \times \mathbf{E}(\mathbf{r},t) = -\frac{\partial \mathbf{B}(\mathbf{r},t)}{\partial t},
\tag{98}
$$

我们写出单色电磁波的振幅关系

$$
\nabla \times (\mathbf{E}_0 \exp(i\mathbf{k} \cdot \mathbf{r} - i\omega t)) = i\mathbf{k} \times (\mathbf{E}_0 \exp(i\mathbf{k} \cdot \mathbf{r} - i\omega t)) = i\omega \mathbf{B}_0 \exp(i\mathbf{k} \cdot \mathbf{r} - i\omega t),
\tag{99}
$$

或是

$$
\mathbf{B}_0 = \frac{1}{\omega} \mathbf{k} \times \mathbf{E}_0.
\tag{100}
$$

又由于

$$
\mathbf{B}_0 = \mu(\omega) \mathbf{H}_0,
\tag{101}
$$

我们进一步得到

$$
\mathbf{H}_0 = \frac{1}{\omega\mu(\omega)} \mathbf{k} \times \mathbf{E}_0.
\tag{102}
$$

因此，在介质 1 中的总磁场强度矢量为

$$
\begin{aligned}
\mathbf{H}_1(\mathbf{r},t) &= \mathbf{H}_{\text{入射}}(\mathbf{r},t) + \mathbf{H}_{\text{反射}}(\mathbf{r},t) \\
&= \mathbf{H}_0 \exp(i\mathbf{k} \cdot \mathbf{r} - i\omega t) + \mathbf{H}'_0 \exp(i\mathbf{k}' \cdot \mathbf{r} - i\omega t) \\
&= \frac{1}{\omega\mu_1(\omega)} \mathbf{k} \times \mathbf{E}_0 \exp(i\mathbf{k} \cdot \mathbf{r} - i\omega t) + \frac{1}{\omega\mu_1(\omega)} \mathbf{k}' \times \mathbf{E}'_0 \exp(i\mathbf{k}' \cdot \mathbf{r} - i\omega t).
\end{aligned}
\tag{103}
$$

而在介质 2 中的总磁场强度矢量则为

$$
\mathbf{H}_2(\mathbf{r},t) = \mathbf{H}_{\text{折射}}(\mathbf{r},t) = \frac{1}{\omega\mu_2(\omega)} \mathbf{k}'' \times \mathbf{E}''_0 \exp(i\mathbf{k}'' \cdot \mathbf{r} - i\omega t).
\tag{104}
$$

由于在两种连续介质的分界面处的自由电流密度 $\vec{\alpha}_f = 0$，我们从 (79) 的第二个边值条件得到

$$
\begin{aligned}
&\left. \mathbf{e}_n \times \left( \frac{1}{\omega\mu_1(\omega)} \mathbf{k} \times \mathbf{E}_0 \right) \exp(i\mathbf{k} \cdot \mathbf{r} - i\omega t) \right|_{z=0} \\
+ &\left. \mathbf{e}_n \times \left( \frac{1}{\omega\mu_1(\omega)} \mathbf{k}' \times \mathbf{E}'_0 \right) \exp(i\mathbf{k}' \cdot \mathbf{r} - i\omega t) \right|_{z=0} \\
= &\left. \mathbf{e}_n \times \left( \frac{1}{\omega\mu_2(\omega)} \mathbf{k}'' \times \mathbf{E}''_0 \right) \exp(i\mathbf{k}'' \cdot \mathbf{r} - i\omega t) \right|_{z=0}.
\end{aligned}
\tag{105}
$$

由于在 $z = 0$ 的分界面上，我们有 $k_x = k'_x = k''_x$ 以及 $k_y = k'_y = k''_y$，故可消去上式两边的指数因子并得到

$$
\mathbf{e}_n \times \left( \frac{1}{\mu_1(\omega)} \mathbf{k} \times \mathbf{E}_0 \right) + \mathbf{e}_n \times \left( \frac{1}{\mu_1(\omega)} \mathbf{k}' \times \mathbf{E}'_0 \right) = \mathbf{e}_n \times \left( \frac{1}{\mu_2(\omega)} \mathbf{k}'' \times \mathbf{E}''_0 \right).
\tag{106}
$$

将此式与 (97) 式联立，我们现在可以求解 $\mathbf{E}'_0$ 和 $\mathbf{E}''_0$ 了。

我们知道，对于一个给定的波矢 $\mathbf{k}$，存在电场强度矢量 $\mathbf{E}(\mathbf{r},t)$ 的两个独立偏振方向，故需分别讨论 $\mathbf{E}_0$ 垂直于入射面和平行于入射面的情况。

**(i)** 当 $\mathbf{E}_0$ 垂直于入射面时，如教科书 119 页上图 4-4(a) 所示，我们有

$$
\mathbf{E}_0 + \mathbf{E}'_0 = \mathbf{E}''_0.
\tag{107}
$$

而

$$
\begin{aligned}
&\mathbf{e}_n \times \left( \frac{1}{\mu_1(\omega)} \mathbf{k} \times \mathbf{E}_0 \right) + \mathbf{e}_n \times \left( \frac{1}{\mu_1(\omega)} \mathbf{k}' \times \mathbf{E}'_0 \right) \\
&= \frac{1}{\mu_1(\omega)} ((\mathbf{e}_n \cdot \mathbf{E}_0)\mathbf{k} - (\mathbf{e}_n \cdot \mathbf{k})\mathbf{E}_0) + \frac{1}{\mu_1(\omega)} ((\mathbf{e}_n \cdot \mathbf{E}'_0)\mathbf{k}' - (\mathbf{e}_n \cdot \mathbf{k}')\mathbf{E}'_0) \\
&= \frac{1}{\mu_1(\omega)} (-(\mathbf{e}_n \cdot \mathbf{k})\mathbf{E}_0) + \frac{1}{\mu_1(\omega)} (-(\mathbf{e}_n \cdot \mathbf{k}')\mathbf{E}'_0) \\
&= \frac{1}{\mu_1(\omega)} (-k \cos\theta \mathbf{E}_0 + k' \cos\theta \mathbf{E}'_0) = \mathbf{e}_n \times \left( \frac{1}{\mu_2(\omega)} \mathbf{k}'' \times \mathbf{E}''_0 \right) \\
&= \frac{1}{\mu_2(\omega)} \mathbf{e}_n \times (\mathbf{k}'' \times \mathbf{E}''_0) = \frac{1}{\mu_2(\omega)} ((\mathbf{e}_n \cdot \mathbf{E}''_0)\mathbf{k}'' - (\mathbf{e}_n \cdot \mathbf{k}'')\mathbf{E}''_0) \\
&= -\frac{1}{\mu_2(\omega)} (\mathbf{e}_n \cdot \mathbf{k}'')\mathbf{E}''_0 = -\frac{1}{\mu_2(\omega)} k'' \cos\theta'' \mathbf{E}''_0.
\end{aligned}
\tag{108}
$$

再将 (107) 代入后，我们得到

$$
\frac{1}{\mu_1(\omega)} (k \cos\theta E_0 - k' \cos\theta E'_0) = \frac{1}{\mu_2(\omega)} k'' \cos\theta'' E''_0.
\tag{109}
$$

由于

$$
k = k' = \omega \sqrt{\mu_1(\omega)\epsilon_1(\omega)}, \quad k'' = \omega \sqrt{\mu_2(\omega)\epsilon_2(\omega)},
\tag{110}
$$

故上式又可被写作

$$
\sqrt{\frac{\epsilon_1(\omega)}{\mu_1(\omega)}} (E_0 - E'_0) \cos\theta = \sqrt{\frac{\epsilon_2(\omega)}{\mu_2(\omega)}} E''_0 \cos\theta''.
\tag{111}
$$

考虑到在一般非铁磁性（顺磁）物质中，$\mu(\omega) \cong \mu_0$，我们又可将上式简化为

$$
\sqrt{\epsilon_1(\omega)} (E_0 - E'_0) \cos\theta = \sqrt{\epsilon_2(\omega)} E''_0 \cos\theta''.
\tag{112}
$$

因此，我们解得

$$
E'_0 = \frac{\sqrt{\epsilon_1(\omega)} \cos\theta - \sqrt{\epsilon_2(\omega)} \cos\theta''}{\sqrt{\epsilon_1(\omega)} \cos\theta + \sqrt{\epsilon_2(\omega)} \cos\theta''} E_0, \quad E''_0 = \frac{2 \sqrt{\epsilon_1(\omega)} \cos\theta}{\sqrt{\epsilon_1(\omega)} \cos\theta + \sqrt{\epsilon_2(\omega)} \cos\theta''} E_0.
\tag{113}
$$

又考虑到折射定律

$$
\frac{\sin\theta''}{\sin\theta} = \frac{\sqrt{\mu_1(\omega)\epsilon_1(\omega)}}{\sqrt{\mu_2(\omega)\epsilon_2(\omega)}} \cong \frac{\sqrt{\epsilon_1(\omega)}}{\sqrt{\epsilon_2(\omega)}},
\tag{114}
$$

我们可进一步将上式改写为

$$
\begin{aligned}
E'_0 &= \frac{\sqrt{\epsilon_1(\omega)} \cos\theta - \frac{\sqrt{\epsilon_1(\omega)} \sin\theta}{\sin\theta''} \cos\theta''}{\sqrt{\epsilon_1(\omega)} \cos\theta + \frac{\sqrt{\epsilon_1(\omega)} \sin\theta}{\sin\theta''} \cos\theta''} E_0 \\
&= \frac{\cos\theta \sin\theta'' - \sin\theta \cos\theta''}{\cos\theta \sin\theta'' + \sin\theta \cos\theta''} E_0 = \frac{\sin(\theta'' - \theta)}{\sin(\theta'' + \theta)} E_0,
\end{aligned}
\tag{115}
$$

以及

$$
\begin{aligned}
E''_0 &= \frac{2 \sqrt{\epsilon_1(\omega)} \cos\theta}{\sqrt{\epsilon_1(\omega)} \cos\theta + \frac{\sqrt{\epsilon_1(\omega)} \sin\theta}{\sin\theta''} \cos\theta''} E_0 \\
&= \frac{2 \cos\theta \sin\theta''}{\cos\theta \sin\theta'' + \sin\theta \cos\theta''} E_0 = \frac{2 \cos\theta \sin\theta''}{\sin(\theta'' + \theta)} E_0.
\end{aligned}
\tag{116}
$$

**(ii)** 接下来，我们讨论 $\mathbf{E}_0$ 平行于入射面，即如教科书 119 页上图 4-4(b) 所示的情况。此时，边值条件 (97) 化为

$$
E_0 \cos\theta - E'_0 \cos\theta = E''_0 \cos\theta'',
\tag{117}
$$

而边值条件 (106) 则为

$$
\begin{aligned}
&\mathbf{e}_n \times \left( \frac{1}{\mu_1(\omega)} \mathbf{k} \times \mathbf{E}_0 \right) + \mathbf{e}_n \times \left( \frac{1}{\mu_1(\omega)} \mathbf{k}' \times \mathbf{E}'_0 \right) \\
&= \frac{1}{\mu_1(\omega)} \mathbf{e}_n \times (k E_0 \odot) + \frac{1}{\mu_1(\omega)} \mathbf{e}_n \times (k' E'_0 \odot) \\
&= \mathbf{e}_n \times \left( \frac{1}{\mu_2(\omega)} \mathbf{k}'' \times \mathbf{E}''_0 \right) = \frac{1}{\mu_2(\omega)} \mathbf{e}_n \times (k'' E''_0 \odot),
\end{aligned}
\tag{118}
$$

故我们有

$$
\frac{1}{\mu_1(\omega)} (k E_0 + k' E'_0) = \frac{1}{\mu_2(\omega)} k'' E''_0.
\tag{119}
$$

将 $k = k' = \omega \sqrt{\mu_1(\omega)\epsilon_1(\omega)}$ 及 $k'' = \omega \sqrt{\mu_2(\omega)\epsilon_2(\omega)}$ 代入并取 $\mu_1(\omega) \cong \mu_2(\omega) \cong \mu_0$ 后，我们得到

$$
\sqrt{\epsilon_1(\omega)} (E_0 + E'_0) = \sqrt{\epsilon_2(\omega)} E''_0.
\tag{120}
$$

将此式与 (117) 式联立求解，并再次利用折射定律后，我们有

$$
E'_0 = \frac{\tan(\theta - \theta'')}{\tan(\theta + \theta'')} E_0, \quad E''_0 = \frac{2 \cos\theta \sin\theta''}{\sin(\theta + \theta'') \cos(\theta - \theta'')} E_0,
\tag{121}
$$

此式与 (115) 和 (116) 式一起被称为菲涅尔公式 (Fresnel formulae)，给出了反射波和折射波对于入射波的电场强度的比值，由法国学者 Augustin Fresnel 于 1823 年提出。

特别值得一提的是，当 $\theta + \theta'' = \frac{\pi}{2}$ 时，由 (121) 式我们得出结论 $E'_0 = 0$，即入射电场中振幅平行于入射面的分量没有反射波。因此，此时入射的自然光（为两种偏振光的等量混合）的反射光将变为垂直于入射面偏振的完全偏振光。此即光学中的布儒斯特定律 (Brewster's law)，相应的入射角称为布儒斯特角。

菲涅尔公式同时也给出了入射波、反射波和折射波之间的相位关系。例如，当 $\epsilon_2(\omega) > \epsilon_1(\omega)$ 时，根据折射定律 (114) 式，我们有 $\theta > \theta''$。此时，$\sin(\theta'' - \theta)$ 为负数。因此，当 $E_0$ 与入射面垂直时，$E'_0$ 和 $E_0$ 的符号相反。这种现象在光学中称为半波损失。反之，若 $\epsilon_2(\omega) < \epsilon_1(\omega)$，则根据折射定律，我们有 $\theta < \theta''$，而此时 $E'_0$ 和 $E_0$ 是同号的。特别是当 $\sin\theta_c \equiv \sqrt{\epsilon_2(\omega)/\epsilon_1(\omega)}$ 时，$\theta'' = \pi/2$。这时的折射波将从两种介质的分界面上掠过。若再进一步增大入射角度 $\theta$，就不可能定义折射角 $\theta''$ 了。此时，我们期待将会有新的物理现象发生。此时，我们仍有

$$
k''_x = k_x = k \sin\theta, \quad k = \omega \sqrt{\mu_1(\omega)\epsilon_1(\omega)}, \quad k'' = \omega \sqrt{\mu_2(\omega)\epsilon_2(\omega)}
\tag{122}
$$

成立。因此，$\mathbf{k}''$ 的 $z$ 分量为

$$
\begin{aligned}
{k''}_z &= \sqrt{{k''}^2 - {k''}_x^2} = \sqrt{{k''}^2 - (k \sin\theta)^2} = \sqrt{{k''}^2 - k^2 \sin^2\theta} \\\\
&= \sqrt{k^2 \left( \frac{\sqrt{\mu_2(\omega)\epsilon_2(\omega)}}{\sqrt{\mu_1(\omega)\epsilon_1(\omega)}} \right)^2 - k^2 \sin^2\theta} = k \sqrt{\left( \frac{n_2}{n_1} \right)^2 - \sin^2\theta} \\\\
&= k \sqrt{n_{21}^2 - \sin^2\theta}.
\end{aligned}
\tag{123}
$$

当 $\theta > \theta_c$ 时，$\sin\theta > \sin\theta_c = n_{21}$。这样，$k''_z$ 就成了一个纯虚数，即

$$
k''_z = i\kappa = i k \sqrt{\sin^2\theta - n_{21}^2}.
\tag{124}
$$

而在介质 2 中的电场强度矢量为

$$
\mathbf{E}''(\mathbf{r},t) = \mathbf{E}''_0 \exp(i\mathbf{k}'' \cdot \mathbf{r} - i\omega t) = \mathbf{E}''_0 \exp(-\kappa z) \exp(ik''_x x - i\omega t).
\tag{125}
$$

我们看到，折射波的电场强度矢量随着 $z$ 趋向于无穷而指数衰减。这就是所谓全反射现象。因此，

$$
\kappa^{-1} = \frac{1}{k \sqrt{\sin^2\theta - n_{21}^2}} = \frac{\lambda}{2\pi \sqrt{\sin^2\theta - n_{21}^2}}
\tag{126}
$$

也被视作电磁波可以“渗入”介质 2 的薄层的厚度。

为了更为清楚地理解这一物理图像，让我们再来计算折射波的能流密度矢量。为此，我们需要计算磁场强度矢量 $\mathbf{H}''(\mathbf{r},t)$。当电场强度矢量 $\mathbf{E}''(\mathbf{r},t)$ 垂直于入射面时，我们有

$$
\mathbf{E}''(\mathbf{r},t) = E''_0 \exp(-\kappa z) \exp(ik''_x - i\omega t) \mathbf{e}_y.
\tag{127}
$$

又因为

$$
\begin{aligned}
\mathbf{H}''(\mathbf{r},t) &= \frac{1}{\omega\mu_2(\omega)} \mathbf{k}'' \times \mathbf{E}''(\mathbf{r},t) \\
&= \frac{1}{\omega\mu_2(\omega)} ((k''_x \mathbf{e}_x + i\kappa \mathbf{e}_z) \times (E''_0 \exp(-\kappa z) \exp(ik''_x x - i\omega t) \mathbf{e}_y)) \\
&= \frac{1}{\omega\mu_2(\omega)} k''_x E''_0 \exp(-\kappa z) \exp(ik''_x x - i\omega t) \mathbf{e}_z \\
&- \frac{1}{\omega\mu_2(\omega)} i\kappa E''_0 \exp(-\kappa z) \exp(ik''_x x - i\omega t) \mathbf{e}_x.
\end{aligned}
\tag{128}
$$

取实部后，我们有

$$
\begin{aligned}
\mathbf{E}''(\mathbf{r},t) &= E''_0 \exp(-\kappa z) \cos(\omega t - k''_x x) \mathbf{e}_y, \\
\mathbf{H}''(\mathbf{r},t) &= \frac{1}{\omega\mu_2(\omega)} k''_x E''_0 \exp(-\kappa z) \cos(\omega t - k''_x x) \mathbf{e}_z \\
&- \frac{1}{\omega\mu_2(\omega)} \kappa E''_0 \exp(-\kappa z) \sin(\omega t - k''_x x) \mathbf{e}_x.
\end{aligned}
\tag{129}
$$

因此，在介质 2 中的折射波能量流密度为

$$
\begin{aligned}
\mathbf{S}''(\mathbf{r},t) &= \mathbf{E}''(\mathbf{r},t) \times \mathbf{H}''(\mathbf{r},t) \\
&= (E''_0 \exp(-\kappa z) \cos(\omega t - k''_x x) \mathbf{e}_y) \times \left( \frac{1}{\omega\mu_2(\omega)} k''_x E''_0 \exp(-\kappa z) \cos(\omega t - k''_x x) \mathbf{e}_z \right) \\
&- (E''_0 \exp(-\kappa z) \cos(\omega t - k''_x x) \mathbf{e}_y) \times \left( \frac{1}{\omega\mu_2(\omega)} \kappa E''_0 \exp(-\kappa z) \sin(\omega t - k''_x x) \mathbf{e}_x \right) \\
&= \frac{1}{\omega\mu_2(\omega)} {k''}_x {E''}_0^2 \exp(-2\kappa z) \cos^2(\omega t - {k''}_x x) \mathbf{e}_x \\
&+ \frac{1}{\omega\mu_2(\omega)} {k''}_x \kappa {E''}_0^2 \exp(-2\kappa z) \cos(\omega t - k''_x x) \sin(\omega t - k''_x x) \mathbf{e}_z.
\end{aligned}
\tag{130}
$$

将之对时间取平均值后，我们有

$$
\begin{aligned}
\overline{\mathbf{S}''}(\mathbf{r}) &= \frac{1}{T} \int_0^T \mathbf{S}''(\mathbf{r},t) \, dt = \frac{1}{T} \int_0^T \mathbf{E}''(\mathbf{r},t) \times \mathbf{H}''(\mathbf{r},t) \, dt \\\\
&= \frac{1}{2\omega\mu_2(\omega)} {k''}_x {E''}_0^2 \exp(-2\kappa z) \mathbf{e}_x = \frac{1}{2\omega\mu_2(\omega)} {k''} \sin\theta'' {E''}_0^2 \exp(-2\kappa z) \mathbf{e}_x \\\\
&= \frac{1}{2\omega\mu_2(\omega)} \omega \sqrt{\mu_2(\omega)\epsilon_2(\omega)} \frac{\sin\theta}{n_{21}} {E''}_0^2 \exp(-2\kappa z) \mathbf{e}_x \\\\
&= \frac{1}{2} \sqrt{\frac{\epsilon_2(\omega)}{\mu_2(\omega)}} {E''}_0^2 \exp(-2\kappa z) \frac{\sin\theta}{n_{21}} \mathbf{e}_x.
\end{aligned}
\tag{131}
$$

因此，折射平均能量流密度只有 $x$ 分量，而沿 $z$ 轴方向透入介质 2 的平均能量流密度为零。

若在全反射的情况下允许三角函数取复数值，则本节中推导出的有关反射波和折射波的公式仍然有效。例如，当电场强度矢量 $E_0$ 垂直于入射面时，我们有

$$
\begin{aligned}
E'_0 &= \frac{\sqrt{\mu_1(\omega)\epsilon_1(\omega)} \cos\theta - \sqrt{\mu_2(\omega)\epsilon_2(\omega)} \cos\theta''}{\sqrt{\mu_1(\omega)\epsilon_1(\omega)} \cos\theta + \sqrt{\mu_2(\omega)\epsilon_2(\omega)} \cos\theta''} E_0 \\
&= \frac{\cos\theta - \sqrt{\frac{\mu_2(\omega)\epsilon_2(\omega)}{\mu_1(\omega)\epsilon_1(\omega)}} \cos\theta''}{\cos\theta + \sqrt{\frac{\mu_2(\omega)\epsilon_2(\omega)}{\mu_1(\omega)\epsilon_1(\omega)}} \cos\theta''} E_0 = \frac{\cos\theta - n_{21} \cos\theta''}{\cos\theta + n_{21} \cos\theta''} E_0.
\end{aligned}
\tag{132}
$$

另一方面，在发生全反射的情况下，我们有

$$
\begin{aligned}
\sin\theta'' &= \frac{k''_x}{k''} = \frac{k_x}{k''} = \frac{k \sin\theta}{\sqrt{k_x^2 + k_z^2}} = \frac{k \sin\theta}{\sqrt{(k \sin\theta)^2 + (i\kappa)^2}} = \frac{k \sin\theta}{\sqrt{k^2 \sin^2\theta - \kappa^2}} \\
&= \frac{k \sin\theta}{\sqrt{k^2 \sin^2\theta - k^2(\sin^2\theta - n_{21}^2)}} = \frac{k \sin\theta}{\sqrt{k^2 \sin^2\theta - k^2 \sin^2\theta + k^2 n_{21}^2}} = \frac{\sin\theta}{n_{21}},
\end{aligned}
\tag{133}
$$

而

$$
\cos\theta'' = \sqrt{1 - \sin^2\theta''} = \sqrt{1 - \frac{\sin^2\theta}{n_{21}^2}} = i \sqrt{\frac{\sin^2\theta}{n_{21}^2} - 1}.
\tag{134}
$$

代入 (132) 式后，我们有

$$
E'_0 = \frac{\cos\theta - i \sqrt{\sin^2\theta - n_{21}^2}}{\cos\theta + i \sqrt{\sin^2\theta - n_{21}^2}} E_0.
\tag{135}
$$

又由于

$$
\left| \frac{\cos\theta - i \sqrt{\sin^2\theta - n_{21}^2}}{\cos\theta + i \sqrt{\sin^2\theta - n_{21}^2}} \right| = \frac{\sqrt{\cos^2\theta + (\sin^2\theta - n_{21}^2)}}{\sqrt{\cos^2\theta + (\sin^2\theta - n_{21}^2)}} = 1,
\tag{136}
$$

故我们有

$$
E'_0 = e^{-2i\phi} E_0.
\tag{137}
$$

这里，

$$
\tan\phi = \frac{\sqrt{\sin^2\theta - n_{21}^2}}{\cos\theta}.
\tag{138}
$$

此式表明，反射波与入射波具有相同的振幅，尽管二者之间有一定的相位差。因此，反射波平均能量密度流在数值上与入射波平均能量密度流相等，即电磁波能量被全部反射回去。光波在光纤中的传播，即利用了全反射现象。

