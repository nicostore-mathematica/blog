---
url: /electrodynamics/electrodynamics-16/index.md
---
## Part 3 导体存在时电磁波的传播

在上面的讨论中，尽管没有明确声明，我们实际上仅考虑了两种介质都是绝缘体的情况。若其中一种介质是导体，所得到的结论应该做何修正，正是我们在此节中要考虑的问题。

首先，我们注意到，在导体中可以存在传导电流，故在两种介质的分界面处可能有非零的传导电流密度 $\vec{\alpha}\_f(\mathbf{r},t)$。其次，传到电流会导致焦耳热的产生，即电磁波能量转化为热能。这两点是我们 在重新推导过程中需要注意的。

我们已知，在静电学的情况下，自由电荷只可分布在导体的表面。现在我们要论证，在存在交变电场的情况下，这一结论仍不失为一种好的近似。为此，让我们考虑导体内的一点 $\mathbf{r}$ 处的电荷密度函数 $\rho(\mathbf{r},t)$ 随时间的改变。首先，我们有连续性方程

$$
\frac{\partial\rho(\mathbf{r},t)}{\partial t} + \nabla\cdot\mathbf{j}(\mathbf{r},t) = 0.
$$

这里，$\mathbf{j}(\mathbf{r},t)$ 为该处的传导电流密度。其次，我们有欧姆定律

$$
\mathbf{j}(\mathbf{r},t) = \sigma\mathbf{E}(\mathbf{r},t).
$$

这里，$\sigma$ 为导体的电导率。它不依赖于时间和位置。利用麦克斯韦方程组的第一式

$$
\nabla\cdot\mathbf{E}(\mathbf{r},t) = \frac{1}{\epsilon}\rho(\mathbf{r},t),
$$

我们有

$$
\frac{\partial\rho(\mathbf{r},t)}{\partial t} = -\nabla\cdot\mathbf{j}(\mathbf{r},t) = -\sigma\nabla\cdot\mathbf{E}(\mathbf{r},t) = -\frac{\sigma}{\epsilon}\rho(\mathbf{r},t).
$$

解此微分方程，我们有

$$
\rho(\mathbf{r},t) = \rho\_0(\mathbf{r})\exp\left(-\frac{\sigma}{\epsilon}t\right).
$$

这里，$\rho(\mathbf{r})$ 为 $t=0$ 时刻，导体内 $\mathbf{r}$ 处的自由电荷密度。此式告诉我们，导体内一点的自由电荷密度是随时间的增长指数衰减的，而衰减时间为

$$
\tau = \frac{\epsilon}{\sigma}.
$$

因此，若电磁波的频率 $\nu = \frac{1}{T} \ll \frac{1}{\tau}$，或是

$$
\frac{\sigma T}{\epsilon} = \frac{2\pi\sigma}{\epsilon\omega} \gg 1
\tag{w}
$$

时，那么在时间间隔 $t$ 远远小于电磁波的周期内，在导体内 $\mathbf{r}$ 处的自由电荷密度 $\rho(\mathbf{r},t)$ 就已经变得可以忽略不计了。也就是说，在条件 (w) 满足的情况下，导体内部的自由电荷分布仍可视作零，即电荷只能分布在导体表面上。

满足条件 (w) 的导体被称为良导体。一般的金属的特征值为 $\tau \cong 10^{-17}$ 秒。在接下来的讨论中，我们将假设这一条件总是满足的，即导体内部的自由电荷的分布可忽略不计。

在良导体假设下，导体内部的麦克斯韦方程组可以写作

$$
\begin{aligned}
\nabla\cdot\mathbf{D}(\mathbf{r},t) &= 0, & \nabla\times\mathbf{E}(\mathbf{r},t) &= -\frac{\partial\mathbf{B}(\mathbf{r},t)}{\partial t}, \\
\nabla\cdot\mathbf{B}(\mathbf{r},t) &= 0, & \nabla\times\mathbf{H}(\mathbf{r},t) &= \mathbf{j}\_f(\mathbf{r},t) + \frac{\partial\mathbf{D}(\mathbf{r},t)}{\partial t}.
\end{aligned}
$$

对于单色波 $\mathbf{E}(\mathbf{r},t) = \mathbf{E}*\omega(\mathbf{r})\exp(-i\omega t), \mathbf{H}(\mathbf{r},t) = \mathbf{H}*\omega(\mathbf{r})\exp(-i\omega t)$ 而言，我们可以将这些方程简化为

$$
\begin{aligned}
\nabla\cdot\mathbf{E}*\omega(\mathbf{r}) &= 0, & \nabla\times\mathbf{E}*\omega(\mathbf{r}) &= i\omega\mu(\omega)\mathbf{H}*\omega(\mathbf{r}), \\
\nabla\cdot\mathbf{H}*\omega(\mathbf{r}) &= 0, & \nabla\times\mathbf{H}*\omega(\mathbf{r}) &= \sigma\mathbf{E}*\omega(\mathbf{r}) - i\omega\epsilon(\omega)\mathbf{E}\_\omega(\mathbf{r}).
\end{aligned}
$$

若我们将此方程组中的第四式改写为

$$
\nabla\times\mathbf{H}*\omega(\mathbf{r}) = -i\omega\left(\epsilon(\omega) + i\frac{\sigma}{\omega}\right)\mathbf{E}*\omega(\mathbf{r}) = -i\omega\epsilon'(\omega)\mathbf{E}\_\omega(\mathbf{r}),
$$

可以看到，此方程与方程 (h) 在形式上是完全一样的，只不过作为代价，我们需要引入所谓“复电容率”

$$
\epsilon'(\omega) = \epsilon(\omega) + i\frac{\sigma}{\omega}.
$$

因此，重复同样的推导过程，我们立刻可得导体内电场强度矢量 $\mathbf{E}\_\omega(\mathbf{r})$ 所满足的与 (i) 式类似的赫姆霍兹方程

$$
\nabla^2\mathbf{E}*\omega(\mathbf{r}) + k^2\mathbf{E}*\omega(\mathbf{r}) = 0.
\tag{x}
$$

这里，$k = \omega\sqrt{\mu(\omega)\epsilon'(\omega)}$ 为一复数波矢。同时，我们仍需要求

$$
\nabla\cdot\mathbf{E}\_\omega(\mathbf{r}) = 0
$$

成立。在求解出 $\mathbf{E}\_\omega(\mathbf{r})$ 后，可再一次利用

$$
\nabla\times\mathbf{E}*\omega(\mathbf{r}) = i\omega\mu(\omega)\mathbf{H}*\omega(\mathbf{r})
\tag{y}
$$

得到磁场强度矢量 $\mathbf{H}\_\omega(\mathbf{r})$。

我们知道，方程 (x) 的一个特殊解为

$$
\mathbf{E}\_\omega(\mathbf{r}) = \mathbf{E}\_0\exp(i\mathbf{k}\cdot\mathbf{r}).
$$

只不过现在波矢 $\mathbf{k}$ 为一复数矢量，即

$$
\mathbf{k} = \vec{\beta} + i\vec{\gamma}.
$$

这里，$\vec{\beta}$ 和 $\vec{\gamma}$ 为两个实矢量。将此式两边取平方后，我们得到

$$
k^2 = \omega^2\mu(\omega)\left(\epsilon(\omega) + i\frac{\sigma}{\omega}\right) = (\vec{\beta} + i\vec{\gamma})^2.
$$

展开后，我们有

$$
\omega^2\mu(\omega)\epsilon(\omega) + i\omega\mu(\omega)\sigma = \beta^2 - \gamma^2 + 2i\vec{\beta}\cdot\vec{\gamma}.
$$

比较上式两边的实部和虚部后，我们得到

$$
\omega^2\mu(\omega)\epsilon(\omega) = \beta^2 - \gamma^2,\quad \frac{1}{2}\omega\mu(\omega)\sigma = \vec{\beta}\cdot\vec{\gamma}.
\tag{z}
$$

波数 $k$ 中不为零的虚部代表耗散现象的存在。由于有耗散的缘故，电磁场能量只能渗入导体表面的一个薄层内。因此，有导体存在时的传播问题一般是作为边值问题加以考虑的。电磁波主要是在导体以外的空间或介质中传播的，而渗入导体内的电磁波能量最终会被耗散成为焦耳热释放掉。在下面的讨论中，我们仅考虑垂直入射的情况，即取入射角 $\theta = 0$。

将导体与绝缘体的分界面取作 $XY$ 平面，而 $z$ 轴指向导体内部。由于入射波的波矢 $\mathbf{k}$ 仅有 $z$ 分量，我们立刻可得导体内透射波（折射）波的波矢也仅有 $z$ 分量，即

$$
\begin{aligned}
\mathbf{E}''(\mathbf{r},t) &= \mathbf{E}\_0''\exp(i\mathbf{k}''\cdot\mathbf{r} - i\omega t) = \mathbf{E}\_0''\exp(i\mathbf{k}''\cdot\mathbf{r} - i\omega t) \\
&= \mathbf{E}\_0''\exp\[i(\beta\_z + i\gamma\_z)\mathbf{e}\_z\cdot\mathbf{r} - i\omega t] \\
&= \mathbf{E}\_0''\exp(-\gamma\_z z)\exp(i\beta\_z z - i\omega t).
\end{aligned}
$$

代入 (z) 式后，我们有

$$
\omega^2\mu(\omega)\epsilon(\omega) = \beta\_z^2 - \gamma\_z^2,\quad \frac{1}{2}\omega\mu(\omega)\sigma = \beta\_z\gamma\_z.
$$

由此，我们解得

$$
\begin{aligned}
\beta\_z &= \omega\sqrt{\mu(\omega)\epsilon(\omega)}\left\[\frac{1}{2}\left(\sqrt{1 + \frac{\sigma^2}{\omega^2\epsilon^2(\omega)} + 1}\right)\right]^{1/2}, \\
\gamma\_z &= \omega\sqrt{\mu(\omega)\epsilon(\omega)}\left\[\frac{1}{2}\left(\sqrt{1 + \frac{\sigma^2}{\omega^2\epsilon^2(\omega)} - 1}\right)\right]^{1/2}.
\end{aligned}
$$

当良导体条件

$$
\frac{\sigma}{\omega\epsilon(\omega)} \gg 1
$$

成立时，我们近似有

$$
\begin{aligned}
\beta\_z &\cong \omega\sqrt{\mu(\omega)\epsilon(\omega)}\left\[\frac{1}{2}\sqrt{\frac{\sigma^2}{\omega^2\epsilon^2(\omega)}}\right]^{1/2} = \sqrt{\frac{\omega\mu(\omega)\sigma}{2}}, \\
\gamma\_z &\cong \omega\sqrt{\mu(\omega)\epsilon(\omega)}\left\[\frac{1}{2}\sqrt{\frac{\sigma^2}{\omega^2\epsilon^2(\omega)}}\right]^{1/2} = \sqrt{\frac{\omega\mu(\omega)\sigma}{2}}.
\end{aligned}
$$

因此，在导体内部，电场强度矢量 $\mathbf{E}''(\mathbf{r},t)$ 现在可以写作

$$
\mathbf{E}''(\mathbf{r},t) \cong \mathbf{E}\_0''\exp\left(-\sqrt{\frac{\omega\mu(\omega)\sigma}{2}}z\right)\exp\left(i\sqrt{\frac{\omega\mu(\omega)\sigma}{2}}z - i\omega t\right).
$$

我们将满足条件

$$
\sqrt{\frac{\omega\mu(\omega)\sigma}{2}}z\_c = 1,
$$

或是

$$
z\_c = \sqrt{\frac{2}{\omega\mu(\omega)\sigma}}
$$

定义为穿透深度，视作电场能量可以进入导体的范围。当频率为 $100\mathrm{MHz}$ 时，对于铜而言，$z\_c = 0.7\times10^{-3}$ 厘米。由此可见，对于高频电磁波，电磁能量集中仅存在于导体表面的一个薄层内。这种现象称为趋肤效应。

从磁场强度矢量 $\mathbf{H}(\mathbf{r},t)$ 和电场强度矢量 $\mathbf{E}(\mathbf{r},t)$ 的关系 (y)，我们得到

$$
\begin{aligned}
\mathbf{H}\_0'' &= \frac{1}{\omega\mu(\omega)}\mathbf{k}\times\mathbf{E}\_0'' = \frac{1}{\omega\mu(\omega)}(\beta\_z + i\gamma\_z)\mathbf{e}\_n\times\mathbf{E}\_0'' \\
&\cong \frac{1}{\omega\mu(\omega)}\sqrt{\frac{\omega\mu(\omega)\sigma}{2}}(1+i)\mathbf{e}\_n\times\mathbf{E}\_0'' = \sqrt{\frac{\sigma}{\omega\mu(\omega)}}\exp\left(\frac{\pi}{4}i\right)\mathbf{e}\_n\times\mathbf{E}\_0''.
\end{aligned}
$$

又由于

$$
W\_E(\mathbf{r},t) = \frac{1}{2}\epsilon(\omega)E^2(\mathbf{r},t),\quad W\_B(\mathbf{r},t) = \frac{1}{2\mu(\omega)}B^2(\mathbf{r},t),
$$

我们看到

$$
\left|\frac{W\_B(\mathbf{r},t)}{W\_E(\mathbf{r},t)}\right|*{\text{导体}} = \left|\frac{\frac{1}{2\mu(\omega)}B\_0''^2}{\frac{1}{2}\epsilon(\omega)E\_0''^2}\right|*{\text{导体}} = \frac{\sigma\mu(\omega)}{\omega}\cdot\frac{1}{\mu(\omega)\epsilon(\omega)} = \frac{\sigma}{\omega\epsilon(\omega)} \gg 1.
$$

在推导的最后一步，我们利用了良导体条件

$$
\frac{\sigma}{\omega\epsilon(\omega)} \gg 1.
$$

因此，在导体内部，

$$
\left|\frac{1}{2\mu(\epsilon)}B\_0''^2\right|*{\text{导体}} \gg \left|\frac{1}{2}\epsilon(\omega)E\_0''^2\right|*{\text{导体}}
$$

成立。也就是说，金属内电磁波的能量主要是磁场能量。

接下来，我们考虑金属表面处的反射波 $\mathbf{E}'(\mathbf{r},t)$ 和 $\mathbf{H}'(\mathbf{r},t)$。若仅考虑电磁场的偏振方向垂直于入射面的情况，我们有

$$
\mathbf{E}\_0 + \mathbf{E}\_0' = \mathbf{E}\_0'',\quad \mathbf{H}\_0 + \mathbf{H}\_0' = \mathbf{H}\_0''.
$$

将

$$
\mathbf{H} = \frac{1}{\omega\mu(\omega)}\mathbf{k}\times\mathbf{E}
$$

代入第二式后，我们得到

$$
\frac{1}{\omega\mu\_0}k(E\_0 - E\_0') = \frac{1}{\omega\mu(\omega)}k''E\_0''
$$

近似地，我们仍可取 $\mu(\omega) \cong \mu\_0$，即真空中的磁化率。因此，边值关系现在化为

$$
E\_0 + E\_0' = E\_0'',\quad k(E\_0 - E\_0') = k''E\_0''.
$$

由此，我们解得

$$
E\_0' = \frac{\frac{k}{k''} - 1}{\frac{k}{k''} + 1}E\_0 = \frac{k - k''}{k + k''}E\_0.
$$

将 $k = \omega\sqrt{\mu\_0\epsilon\_0}$ 以及

$$
k'' = \beta\_z + i\gamma\_z = \sqrt{\frac{\omega\mu(\omega)\sigma}{2}}(1+i)
$$

代入后，我们得到

$$
E\_0' = \frac{\omega\sqrt{\mu\_0\epsilon\_0} - \sqrt{\frac{\omega\mu(\omega)\sigma}{2}}(1+i)}{\omega\sqrt{\mu\_0\epsilon\_0} + \sqrt{\frac{\omega\mu(\omega)\sigma}{2}}(1+i)}E\_0 = -\frac{(1+i) - \sqrt{\frac{2\omega\epsilon\_0}{\sigma}}}{(1+i) + \sqrt{\frac{2\omega\epsilon\_0}{\sigma}}}E\_0.
$$

电磁波的反射系数定义为

$$
\begin{aligned}
\mathcal{R} &= \left|\frac{E\_0'}{E\_0}\right|^2 = \frac{\left(1 - \sqrt{\frac{2\omega\epsilon\_0}{\sigma}}\right)^2 + 1}{\left(1 + \sqrt{\frac{2\omega\epsilon\_0}{\sigma}}\right)^2 + 1} \cong \frac{2 - 2\sqrt{\frac{2\omega\epsilon\_0}{\sigma}}}{2 + 2\sqrt{\frac{2\omega\epsilon\_0}{\sigma}}} = \frac{1 - \sqrt{\frac{2\omega\epsilon\_0}{\sigma}}}{1 + \sqrt{\frac{2\omega\epsilon\_0}{\sigma}}} \\
&\cong \left(1 - \sqrt{\frac{2\omega\epsilon\_0}{\sigma}}\right)\left(1 - \sqrt{\frac{2\omega\epsilon\_0}{\sigma}}\right) \cong 1 - 2\sqrt{\frac{2\omega\epsilon\_0}{\sigma}}.
\end{aligned}
$$

因此，电导率 $\sigma$ 越大，则反射系数越接近于 $1$。

**例 8.1**: 计算高频电磁波照射下导体的表面电阻。

由于趋肤效应，在靠近导体表面的薄层内，电场强度为

$$
\mathbf{E}''(\mathbf{r},t) = \mathbf{E}\_0''\exp(-\gamma\_z z)\exp(i\beta\_z z - i\omega t),
$$

相应的电流密度为

$$
\mathbf{j}\_f(\mathbf{r},t) = \sigma\mathbf{E}''(\mathbf{r},t) = \sigma\mathbf{E}\_0''\exp(-\gamma\_z z)\exp(i\beta\_z z - i\omega t).
$$

将之积分后，我们有

$$
\begin{aligned}
\vec{\alpha}\_f(t) &= \int\_0^\infty \mathbf{j}\_f(\mathbf{r},t),dz = \int\_0^\infty \sigma\mathbf{E}\_0''\exp(-\gamma\_z z)\exp(i\beta\_z z - i\omega t),dz \\
&= \sigma\mathbf{E}\_0''\left.\frac{\exp((i\beta\_z - \gamma\_z)z - i\omega t)}{i\beta\_z - \gamma\_z}\right|\_0^\infty = \sigma\mathbf{E}\_0''\frac{-\exp(-i\omega t)}{i\beta\_z - \gamma\_z} \\
&= \sigma\mathbf{E}\_0''\exp(-i\omega t)\frac{1}{\sqrt{\beta\_z^2 + \gamma\_z^2}}\exp(i\varphi).
\end{aligned}
$$

这里，$\tan\varphi = \beta\_z/\gamma\_z$，而 $\mathbf{E}\_0''$ 为 $z=0$ 处的电场强度矢量。$\vec{\alpha}\_f$ 可以解释为通过单层横截线的面电流密度。取其实部后，我们得到

$$
\vec{\alpha}\_{\text{物理}} = \sigma\mathbf{E}*0''\frac{1}{\sqrt{\beta\_z^2 + \gamma\_z^2}}\cos(\omega t - \varphi) = \alpha\_0\cos(\omega t - \varphi)\mathbf{e}*{\mathbf{E}\_0''}.
$$

这里，$\alpha\_0 = \frac{\sigma E\_0''}{\sqrt{\beta\_z^2 + \gamma\_z^2}}$。另一方面，按照定义，导体内单位时间的损耗功率密度为

$$
\begin{aligned}
w(\mathbf{r},t) &= \mathbf{j}*{\text{物理}}(\mathbf{r},t)\cdot\mathbf{E}*{\text{物理}}''(\mathbf{r},t) \\
&= \[\sigma\mathbf{E}\_0''\exp(-\gamma\_z z)\cos(\omega t - \beta\_z z)]\cdot\[\mathbf{E}\_0''\exp(-\gamma\_z z)\cos(\omega t - \beta\_z z)] \\
&= \sigma E\_0''^2\exp(-2\gamma\_z z)\cos^2(\omega t - \beta\_z z).
\end{aligned}
$$

因此，$w(\mathbf{r},t)$ 对时间的平均值为

$$
\begin{aligned}
\overline{w}(\mathbf{r}) &= \frac{1}{T}\int\_0^T w(\mathbf{r},t),dt = \frac{1}{T}\int\_0^T \sigma E\_0''^2\exp(-2\gamma\_z z)\cos^2(\omega t - \beta\_z z),dt \\
&= \frac{1}{2T}\int\_0^T \sigma E\_0''^2\exp(-2\gamma\_z z)\[1 + 2\cos(2\omega t - 2\beta\_z z)],dt \\
&= \frac{1}{2}\sigma E\_0''^2\exp(-2\gamma\_z z).
\end{aligned}
$$

将之对 $z$ 积分后，我们有

$$
P\_L = \int\_0^\infty \overline{w}(\mathbf{r}),dz = \int\_0^\infty \frac{1}{2}\sigma E\_0''^2\exp(-2\gamma\_z z),dz = \frac{1}{2}\sigma E\_0''^2\left.\frac{\exp(-2\gamma\_z z)}{(-2\gamma\_z)}\right|\_0^\infty = \frac{\sigma}{4\gamma\_z}E\_0''^2.
$$

如上面所定义

$$
\alpha\_0 = \frac{\sigma E\_0''}{\sqrt{\beta\_z^2 + \gamma\_z^2}},
$$

或是

$$
E\_0'' = \frac{\alpha\_0}{\sigma}\sqrt{\beta\_z^2 + \gamma\_z^2},
$$

则我们看到，$P\_L$ 可以改写作

$$
P\_L = \frac{\sigma}{4\gamma\_z}E\_0''^2 = \frac{\sigma}{4\gamma\_z}\left(\frac{\alpha\_0}{\sigma}\sqrt{\beta\_z^2 + \gamma\_z^2}\right)^2 = \frac{\beta\_z^2 + \gamma\_z^2}{4\sigma\gamma\_z}\alpha\_0^2,
$$

而将之解释作单位时间内单位横截线上的损耗功率。与直流电损耗功率公式

$$
P = \frac{1}{2}RI^2
$$

做比较后，我们可以将

$$
\tilde{R} = \frac{\beta\_z^2 + \gamma\_z^2}{2\sigma\gamma\_z}
$$

视作导体在高频情况下出现的厚度为 $z\_c$ 的薄层内的电阻。又利用关系式

$$
\beta\_z \cong \gamma\_z \cong \sqrt{\frac{\omega\mu(\omega)\sigma}{2}} = \frac{1}{z\_c},
$$

我们最后有

$$
\tilde{R} \cong \frac{\left(\frac{1}{z\_c}\right)^2 + \left(\frac{1}{z\_c}\right)^2}{2\sigma\left(\frac{1}{z\_c}\right)} \cong \frac{1}{\sigma z\_c},
$$

而

$$
P\_L = \frac{1}{2}\frac{1}{\sigma z\_c}\alpha\_0^2.
$$

## Part 4 谐振腔

谐振腔是中空的金属腔。与我们在上节中讨论的情况不同的是，它的尺寸是有限的。在这种腔内，单色电磁波的频率只可取某些分立的特定值，称为允许频率。相应的，其波矢也只能取一些分立的特定值。最为重要的一点是，这些允许电磁波模式是驻波，而不是行波。从技术的角度讲，谐振腔常被用来产生一定频率的电磁震荡，有着十分重要的应用。

为了简化问题，我们下面将谐振腔的金属壁视作理想导体，即 $\sigma = \infty$（在解决实际问题时，可以先将金属壁取作理想导体。将问题解决后，再考虑有限的电导率引起的焦耳热损耗）。此时的边值关系为

$$
\mathbf{e}\_n \times (\mathbf{E}\_2 - \mathbf{E}\_1) = 0, \quad \mathbf{e}\_n \times (\mathbf{H}\_2 - \mathbf{H}\_1) = \vec{\alpha}\_f(\mathbf{r},t).
$$

在下面的讨论中，我们将导体取为介质 1，而介质 2 则为真空或绝缘体。因此，$\mathbf{e}\_n$ 当为由金属指向绝缘体的单位矢量。对于理想导体而言，我们有

$$
\mathbf{E}(\mathbf{r},t) = \mathbf{H}(\mathbf{r},t) = 0.
$$

因此，边值关系现在简化为

$$
\mathbf{e}\_n \times \mathbf{E}\_2(\mathbf{r},t) = \mathbf{e}\_n \times \mathbf{E}(\mathbf{r},t) = 0, \quad \mathbf{e}\_n \times \mathbf{H}\_2(\mathbf{r},t) = \mathbf{e}\_n \times \mathbf{H}(\mathbf{r},t) = \vec{\alpha}\_f(\mathbf{r},t).
$$

自然，我们还需考虑横场条件

$$
\nabla \cdot \mathbf{E}(\mathbf{r},t) = 0.
$$

若将谐振腔的一个边界面取作 $XY$ 平面，则法线 $\mathbf{e}\_n$ 是沿 $z$ 轴方向的。由于电场强度矢量的切向分量是连续的，我们有

$$
E\_x(\mathbf{r},t) = 0, \quad E\_y(\mathbf{r},t) = 0
$$

在此边界面上成立，而横波条件相应地退化

$$
\nabla \cdot \mathbf{E}(\mathbf{r},t) = \frac{\partial E\_z(x,y,z,t)}{\partial z} = 0.
$$

这一形式用起来更为方便一些。

**例 8.2**: 证明两平行无穷大导体平面之间只可以传播一种横向偏振的电磁波。

**解**: 今后，我们将把横向偏振的电磁波记作 TEM 波（transverse electro-magnetic wave）。如教科书 129 页上的图 4-6 所示，设两导体与 $y$ 轴垂直，那么在两导体面上，我们有
$$
E\_x(\mathbf{r},t) = E\_z(\mathbf{r},t) = 0, \quad H\_y(\mathbf{r},t) = 0.
$$

若沿 $z$ 轴传播的平面电磁波的电场强度矢量是沿 $y$ 轴方向偏振的，则此平面电磁波满足所有的边界条件，故可以在导体板之间传播。而另外一种偏振的平面电磁波（$\mathbf{E}$ 与导体表面相切）由于不满足边界条件，故不存在。也就是说，两块导体板之间只能传播一种偏振的 TEM 平面波。

下面，为了确定起见，让我们考虑一个矩形谐振腔。设它的边长分别为 $L\_1$，$L\_2$ 和 $L\_3$。由于谐振腔的内部为均匀的绝缘介质，其中的电磁波满足赫姆霍兹方程

$$
\frac{\partial^2 \mathbf{E}(\mathbf{r})}{\partial x^2} + \frac{\partial^2 \mathbf{E}(\mathbf{r})}{\partial y^2} + \frac{\partial^2 \mathbf{E}(\mathbf{r})}{\partial z^2} + k^2 \mathbf{E}(\mathbf{r}) = 0.
$$

令 $u = E\_x(\mathbf{r})$，$E\_y(\mathbf{r})$ 或 $E\_z(\mathbf{r})$，则我们可以只考虑如下的标量微分方程

$$
\frac{\partial^2 u(\mathbf{r})}{\partial x^2} + \frac{\partial^2 u(\mathbf{r})}{\partial y^2} + \frac{\partial^2 u(\mathbf{r})}{\partial z^2} + k^2 u(\mathbf{r}) = 0.
$$

利用分离变量法，我们令

$$
u(x,y,z) = X(x)Y(y)Z(z),
$$

而每一个因子分别满足方程

$$
\begin{aligned}
\frac{d^2 X(x)}{dx^2} + k\_x^2 X(x) &= 0, \\\\
\frac{d^2 X(x)}{dx^2} + k\_x^2 X(x) &= 0, \\\\
\frac{d^2 X(x)}{dx^2} + k\_x^2 X(x) &= 0,
\end{aligned}
$$

且

$$
k\_x^2 + k\_y^2 + k\_z^2 = k^2 = \omega^2 \mu\_0 \epsilon\_0.
$$

因此，我们有

$$
\begin{aligned}
u(x,y,z) &= (C\_1 \cos k\_x x + D\_1 \sin k\_x x) \\
&\times (C\_2 \cos k\_y y + D\_2 \sin k\_y y)(C\_3 \cos k\_z z + D\_3 \sin k\_z z).
\end{aligned}
$$

此式中的待定常数需要通过边值条件来决定。例如，若取 $u(x,y,z) = E\_x(x,y,z)$，则由于在 $x=0$ 的腔壁上，$E\_x(x,y,z)$ 是沿法线方向的，故应有

$$
\left. \frac{\partial E\_x(x,y,z)}{\partial x} \right|\_{x=0} = 0.
$$

因此，此时的 $D\_1$ 应该取为零。又由于在 $y=0$ 和 $z=0$ 的腔壁上，$E\_x(x,y,z)$ 是沿切向方向的，应该为零，故必有 $C\_2 = 0$ 和 $C\_3 = 0$。因此，我们得到

$$
E\_x(x,y,z) = A\_1 \cos k\_x x \sin k\_y y \sin k\_z z.
$$

同理，我们可得

$$
E\_y(x,y,z) = A\_2 \sin k\_x x \cos k\_y y \sin k\_z z, \quad E\_z(x,y,z) = A\_3 \sin k\_x x \sin k\_y y \cos k\_z z.
$$

另一方面，在 $x = L\_1$ 的腔壁上，$E\_y(x,y,z)$ 是沿切向的，我们有边值条件

$$
E\_y(x = L\_1, y, z) = 0,
$$

或是

$$
A\_2 \sin k\_x L\_1 \cos k\_y y \sin k\_z z = 0.
$$

这就要求

$$
k\_x L\_1 = n\_1 \pi, \quad n\_1 = 0,1,2,\dots,
$$

或是

$$
k\_x = \frac{n\_1 \pi}{L\_1}, \quad n\_1 = 0,1,2,\dots.
$$

同理，对于 $k\_y$ 和 $k\_z$，我们也可论证，它们的取值分别为

$$
k\_y = \frac{n\_2 \pi}{L\_2}, \quad k\_z = \frac{n\_3 \pi}{L\_3}, \quad n\_2,n\_3 = 0,1,2,\dots.
$$

需要强调一点的是，如此定义的电磁波强度矢量

$$
\begin{aligned}
\mathbf{E}(x,y,z,t) &= \[E\_x(x,y,z)\mathbf{i} + E\_y(x,y,z)\mathbf{j} + E\_z(x,y,z)\mathbf{e}\_z] \exp(-i\omega t) \\
&= \left( A\_1 \cos\left(\frac{n\_1 \pi}{L\_1}x\right) \sin\left(\frac{n\_2 \pi}{L\_2}y\right) \sin\left(\frac{n\_3 \pi}{L\_3}z\right) \mathbf{i} \right. \\
&+ A\_2 \sin\left(\frac{n\_1 \pi}{L\_1}x\right) \cos\left(\frac{n\_2 \pi}{L\_2}y\right) \sin\left(\frac{n\_3 \pi}{L\_3}z\right) \mathbf{j} \\
&+ \left. A\_3 \sin\left(\frac{n\_1 \pi}{L\_1}x\right) \sin\left(\frac{n\_2 \pi}{L\_2}y\right) \cos\left(\frac{n\_3 \pi}{L\_3}z\right) \mathbf{e}\_z \right) \exp(-i\omega t)
\end{aligned}
\tag{aa}
$$

是驻波，而非行波。又由于 $\mathbf{E}(x,y,z,t)$ 需满足横波条件

$$
\nabla \cdot \mathbf{E}(x,y,z,t) = 0,
$$

我们有

$$
k\_x A\_1 + k\_y A\_2 + k\_z A\_3 = 0,
$$

即 $A\_1$，$A\_2$ 和 $A\_3$ 仅有两个是独立的。满足以上条件的单色波称为一个允许模式，或本征模式。它具有两个独立的偏振方向，其频率由下式

$$
\omega\_{n\_1,n\_2,n\_3} = \frac{\pi}{\sqrt{\mu(\omega)\epsilon(\omega)}} \sqrt{\left(\frac{n\_1}{L\_1}\right)^2 + \left(\frac{n\_2}{L\_2}\right)^2 + \left(\frac{n\_3}{L\_3}\right)^2}
$$

给出，称为谐振腔的本征频率。若 $n\_1$，$n\_2$ 和 $n\_3$ 中有两个为零，则由 (aa) 式可以推出 $\mathbf{E}(x,y,z,t) = 0$。因此，当 $L\_1 \geq L\_2 \geq L\_3$ 时，最低的本征频率为

$$
\omega\_{\min} = \frac{\pi}{\sqrt{\mu(\omega)\epsilon(\omega)}} \sqrt{\left(\frac{1}{L\_1}\right)^2 + \left(\frac{1}{L\_2}\right)^2},
$$

或

$$
\nu\_{110} = \frac{\omega\_{\min}}{2\pi} = \frac{1}{2\sqrt{\mu(\omega)\epsilon(\omega)}} \sqrt{\left(\frac{n\_1}{L\_1}\right)^2 + \left(\frac{n\_2}{L\_2}\right)^2}.
$$
.
