---
title: Lesson 17 电磁波的传播 IV
permalink: /electrodynamics/electrodynamics-17/
createTime: 2026/07/01 23:41:57
---

1

## Part 5 电磁波导

在高频情况下，为了将电磁波能量从信号源传输到所需要的场地，人们往往利用所谓波导管。这是一种空心的金属管，其横截面即可以是矩形的，也可以是圆形的。在下面的讨论中，为了确定起见，我们仅考虑横截面为矩形的情况。

如教科书 132 页上图 4-8 所示，我们设波导的横截面位于坐标系的 $XY$ 平面上。此时，管内的单色电磁波的电场强度矢量 $\mathbf{E}(x,y,z)$ 满足赫姆霍兹方程

$$
\nabla^2 \mathbf{E}(x,y,z) + k^2 \mathbf{E}(x,y,z) = 0
\tag{221}
$$

及横场条件 $\nabla \cdot \mathbf{E}(x,y,z) = 0$。由于电磁波是沿着 $z$ 轴传播的，我们可以将之写作

$$
\mathbf{E}(x,y,z) = \vec{\mathcal{E}}(x,y) \exp(ik_z z),
\tag{222}
$$

即在 $z$ 方向上传播的行波。将之代入赫姆霍兹方程后，我们得到关于 $\vec{\mathcal{E}}(x,y)$ 的微分方程

$$
\frac{\partial^2 \vec{\mathcal{E}}(x,y)}{\partial x^2} + \frac{\partial^2 \vec{\mathcal{E}}(x,y)}{\partial y^2} + (k^2 - k_z^2) \vec{\mathcal{E}}(x,y) = 0.
\tag{223}
$$

令 $u(x,y) = \mathcal{E}_x(x,y)$ 或 $\mathcal{E}_y(x,y)$，我们有

$$
\frac{\partial^2 u(x,y)}{\partial x^2} + \frac{\partial^2 u(x,y)}{\partial y^2} + (k^2 - k_z^2) u(x,y) = 0.
\tag{224}
$$

进一步，利用分离变量法，即令

$$
u(x,y) = X(x)Y(y),
\tag{225}
$$

可得

$$
\frac{d^2 X(x)}{dx^2} + k_x^2 X(x) = 0, \quad \frac{d^2 Y(y)}{dy^2} + k_y^2 Y(y) = 0,
\tag{226}
$$

且

$$
k_x^2 + k_y^2 = k^2 - k_z^2
\tag{227}
$$

成立。如同解谐振腔问题一样，我们得到

$$
u(x,y) = (C_1 \cos k_x x + D_1 \sin k_x x)(C_2 \cos k_y y + D_2 \sin k_y y).
\tag{228}
$$

这里，$C_1$，$D_1$，$C_2$ 和 $D_2$ 需要通过边值条件

$$
\begin{aligned}
&E_y(x,y,z) = E_z(x,y,z) = 0, \quad \frac{\partial E_x(x,y,z)}{\partial x} = 0, \text{ 当 } x = 0 \text{ 或 } a \text{ 时}; \\
&E_x(x,y,z) = E_z(x,y,z) = 0, \quad \frac{\partial E_y(x,y,z)}{\partial y} = 0, \text{ 当 } y = 0 \text{ 或 } b \text{ 时}
\end{aligned}
\tag{229}
$$

来分别决定。仿照上面的推导，利用在 $x = 0$ 面和 $y = 0$ 面上的边值条件，我们可得

$$
\begin{aligned}
E_x(x,y,z) &= A_1 \cos k_x x \sin k_y y \exp(ik_z z), \\
E_y(x,y,z) &= A_2 \sin k_x x \cos k_y y \exp(ik_z z), \\
E_z(x,y,z) &= A_3 \sin k_x x \sin k_y y \exp(ik_z z).
\end{aligned}
\tag{230}
$$

再利用在 $x = a$ 面和 $y = b$ 面上的边值条件，又可推得

$$
k_x = \frac{m\pi}{a}, \quad k_y = \frac{n\pi}{b}, \quad m,n = 0,1,2,\dots.
\tag{231}
$$

再考虑横波条件，我们有

$$
k_x A_1 + k_y A_2 - ik_z A_3 = 0,
\tag{232}
$$

即 $A_1$，$A_2$ 和 $A_3$ 中仍然只有两个是独立的。在求出波导管内的电场强度矢量后，再利用方程

$$
\mathbf{H}(\mathbf{r},t) = -\frac{i}{\omega\mu(\omega)} \nabla \times \mathbf{E}(\mathbf{r},t),
\tag{233}
$$

即可求出相应的磁场强度矢量。任给一对整数 $m$ 和 $n$，我们有确定的 $k_x = \frac{m\pi}{a}$ 和 $k_y = \frac{n\pi}{b}$，即一个允许模式对应。此时，电场强度矢量 $\mathbf{E}(\mathbf{r},t)$ 有两个独立的偏振方向。若其中一个偏振方向具有 $E_z(x,y,z) = 0$，则 $A_3 = 0$ 成立。因此，(232) 式简化为

$$
k_x A_1 + k_y A_2 = 0,
\tag{234}
$$

或是

$$
\frac{A_1}{A_2} = -\frac{k_y}{k_x} = -\left(\frac{n\pi}{b}\right)/\left(\frac{m\pi}{a}\right),
\tag{235}
$$

即

$$
A_1 = Cna, \quad A_2 = -Cmb.
\tag{236}
$$

这里，$C$ 为一个比例常数。也就是说，$E_x(x,y,z)$，$E_y(x,y,z)$ 和 $E_z(x,y,z)$ 是完全确定的。同时，根据 (233) 式，此时 $H_z(x,y,z) \ne 0$。这意味着，在波导内，电场强度矢量 $\mathbf{E}(x,y,z)$ 和磁场强度矢量 $\mathbf{H}(x,y,z)$ 不能同时为横波。通常的做法是，选取一种具有 $E_z(x,y,z) = 0$ 的电磁波，称为横电波，记作 $\mathrm{TE}_{mn}$，再选取一种具有 $H_z(x,y,z) = 0$ 的波，称为横磁波，记作 $\mathrm{TM}_{mn}$。一般情形下，波导管内传播的电磁波是这些波的线性叠加，即

$$
\mathbf{E}(x,y,z) = \sum_{m=0}^\infty \sum_{n=0}^\infty a_{mn} \mathbf{E}_{mn}^{(1)}(x,y,z) + \sum_{m=0}^\infty \sum_{n=0}^\infty b_{mn} \mathbf{E}_{mn}^{(2)}(x,y,z).
\tag{237}
$$

又由于在波导管内传播的电磁波的频率是受到限制的，需要满足条件

$$
k^2 = \left(\frac{m\pi}{a}\right)^2 + \left(\frac{n\pi}{b}\right)^2 + k_z^2 = \omega^2 \mu(\omega)\epsilon(\omega),
\tag{238}
$$

或是

$$
\omega = \frac{1}{\sqrt{\mu(\omega)\epsilon(\omega)}} \sqrt{\left(\frac{m\pi}{a}\right)^2 + \left(\frac{n\pi}{b}\right)^2 + k_z^2} \geq \frac{1}{\sqrt{\mu(\omega)\epsilon(\omega)}} \sqrt{\left(\frac{m\pi}{a}\right)^2 + \left(\frac{n\pi}{b}\right)^2}.
\tag{239}
$$

若 $a > b$，则 $\mathrm{TE}_{10}$ 波具有最低截止频率

$$
\nu_{10} = \frac{\omega_{10}}{2\pi} = \frac{1}{2\sqrt{\mu(\omega)\epsilon(\omega)}\,a} = \frac{1}{2a\sqrt{\mu(\omega)\epsilon(\omega)}}.
\tag{240}
$$

若波导管内的介质为真空，我们有

$$
\nu_{10} = \frac{1}{2a\sqrt{\mu_0\epsilon_0}} = \frac{c}{2a},
\tag{241}
$$

而相应的波长为

$$
\lambda_{10} = cT = \frac{c}{\nu_{10}} = 2a.
\tag{242}
$$

因此，在波导管内能够通过电磁波的最大波长为 $2a$。这就是为什么在厘米波段，波导管的应用最广泛。

$\mathrm{TE}_{10}$ 波还有其它一些有趣的性质。首先，除了 $E_z(x,y,z) = 0$ 之外，由于 $k_y = 0$，$E_x(x,y,z) = A_1 \cos k_x x \sin k_y y e^{ik_z z} = 0$ 也成立。因此，我们仅需考虑

$$
E_y(x,y,z) = A_2 \sin \frac{\pi}{a} x e^{ik_z z}.
\tag{243}
$$

又由于

$$
\mathbf{H}(x,y,z) = H_x(x,y,z)\mathbf{e}_x + H_y(x,y,z)\mathbf{e}_y + H_z(x,y,z)\mathbf{e}_z
$$

$$
= -\frac{i}{\omega\mu(\omega)} \nabla \times \mathbf{E}(x,y,z) = -\frac{i}{\omega\mu(\omega)}
\begin{vmatrix}
\mathbf{e}_x & \mathbf{e}_y & \mathbf{e}_z \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
0 & A_2 \sin \frac{\pi}{a} x e^{ik_z z} & 0
\end{vmatrix}
$$

$$
= -\frac{i}{\omega\mu(\omega)} \frac{\partial}{\partial x} \left(A_2 \sin \frac{\pi}{a} x e^{ik_z z}\right) \mathbf{e}_z + \frac{i}{\omega\mu(\omega)} \frac{\partial}{\partial z} \left(A_2 \sin \frac{\pi}{a} x e^{ik_z z}\right) \mathbf{e}_x
$$

$$
= -\frac{i}{\omega\mu(\omega)} A_2 \frac{\pi}{a} \cos \frac{\pi}{a} x e^{ik_z z} \mathbf{e}_z - \frac{k_z}{\omega\mu(\omega)} A_2 \sin \frac{\pi}{a} x e^{ik_z z} \mathbf{e}_x,
\tag{244}
$$

若我们将 $A_2$ 写作

$$
A_2 = \frac{i\omega\mu(\omega)a}{\pi} H_0,
\tag{245}
$$

则 $\mathrm{TE}_{10}$ 波的电磁场分量为

$$
E_y(x,y,z) = \frac{i\omega\mu(\omega)a}{\pi} H_0 \sin \frac{\pi}{a} x e^{ik_z z}, \quad H_z(x,y,z) = H_0 \cos \frac{\pi}{a} x e^{ik_z z},
\tag{246}
$$

以及

$$
E_x(x,y,z) = E_z(x,y,z) = H_y(x,y,z) = 0, \quad H_x(x,y,z) = -\frac{ik_z a}{\pi} H_0 \sin \frac{\pi}{a} x.
\tag{247}
$$

因此，根据边值关系

$$
\mathbf{e}_n \times \mathbf{H}(x,y,z,t) = \vec{\alpha}_f(x,y,z,t),
\tag{248}
$$

我们看到，在窄边上，面电流是横穿过窄边流动的，如教科书 135 页上图 4-10 所示。而在宽边的 $x = \frac{a}{2}$ 处，面电流密度的横向分量 $\alpha_y(x = a/2, y, z) = 0$ 严格成立。因此，开在波导管宽边中部的纵向裂缝不会影响 $\mathrm{TE}_{10}$ 波的传播。这一点常被用在用探针测量波导内物理量的技术中。

## Part 6 电磁波在等离子体中的传播

当温度升高或受到电离时，原子中的电子和正离子实会分开，形成所谓等离子体。例如，在大气层中就存在着由等离子体组成的薄层，称为电离层。它的存在对于地球表面的无线电波的传播影响很大。下面，我们对此做一个简要介绍。

在处于热平衡状态时，就整体而言，等离子体是电中性的。当其受到某种扰动，使得其中某一区域的净电荷密度不为零时，就会诱导出相应的静电场，力图恢复原来的电中性状态。由此导致的局部电荷密度发生的振荡现象，称为等离振荡。为了简单起见，我们下面忽略正离子实的运动，而仅考虑电子运动导致的电流的改变。令 $n(\mathbf{r},t)$ 为时刻 $t$ 时，空间 $\mathbf{r}$ 处的电子密度函数，并令 $\mathbf{v}(\mathbf{r},t)$ 为电子流的宏观速度。那么，利用连续性方程，我们得到

$$
\frac{\partial n(\mathbf{r},t)}{\partial t} + \nabla \cdot (n(\mathbf{r},t)\mathbf{v}(\mathbf{r},t)) = 0.
\tag{249}
$$

同时，牛顿方程

$$
m \frac{d\mathbf{v}(\mathbf{r},t)}{dt} = m \left( \frac{\partial \mathbf{v}(\mathbf{r},t)}{\partial t} + (\mathbf{v}(\mathbf{r},t) \cdot \nabla) \mathbf{v}(\mathbf{r},t) \right) = (-e)\mathbf{E}(\mathbf{r},t)
\tag{250}
$$

亦成立。这里，$\mathbf{E}(\mathbf{r},t)$ 为时刻 $t$ 时，空间 $\mathbf{r}$ 处的电场强度矢量。假设处于热平衡状态时，电子的密度为 $n_0$，其电荷密度 $(-e)n_0$ 正好被正离子实的电荷密度所抵消。因此，当偏离平衡状态时，电子电荷密度的改变可以记作

$$
\delta\rho(\mathbf{r},t) = (-e)(n(\mathbf{r},t) - n_0).
\tag{251}
$$

根据高斯定理，我们有

$$
\nabla \cdot \mathbf{E}(\mathbf{r},t) = \frac{1}{\epsilon_0} \delta\rho(\mathbf{r},t) = -\frac{e}{\epsilon_0} (n(\mathbf{r},t) - n_0).
\tag{252}
$$

若仅考虑微小扰动，即 $\delta\rho = (-e)(n(\mathbf{r},t) - n_0) \cong 0$ 及 $\mathbf{v}(\mathbf{r},t) \cong 0$ 的情况，我们可以将上面的几个公式简化为

$$
\frac{\partial \delta\rho(\mathbf{r},t)}{\partial t} + (-e)n_0 \nabla \cdot \mathbf{v}(\mathbf{r},t) \cong 0, \quad \frac{\partial \mathbf{v}(\mathbf{r},t)}{\partial t} = -\frac{e}{m} \mathbf{E}(\mathbf{r},t), \quad \nabla \cdot \mathbf{E}(\mathbf{r},t) = \frac{1}{\epsilon_0} \delta\rho(\mathbf{r},t).
\tag{253}
$$

将第二式的两边取散度后，我们有

$$
\frac{\partial}{\partial t} \nabla \cdot \mathbf{v}(\mathbf{r},t) = -\frac{e}{m} \nabla \cdot \mathbf{E}(\mathbf{r},t).
\tag{254}
$$

再将方程组 (253) 中的第一式代入上式左边，将第三式代入右边后，我们又有

$$
\frac{1}{n_0 e} \frac{\partial^2 \delta\rho(\mathbf{r},t)}{\partial t^2} = -\frac{e}{m} \left( \frac{1}{\epsilon_0} \delta\rho(\mathbf{r},t) \right),
\tag{255}
$$

或是

$$
\frac{\partial^2 \delta\rho(\mathbf{r},t)}{\partial t^2} + \frac{n_0 e^2}{m \epsilon_0} \delta\rho(\mathbf{r},t) = 0.
\tag{256}
$$

若我们令

$$
\delta\rho(\mathbf{r},t) = \delta\rho(\mathbf{r}) e^{st},
\tag{257}
$$

则上面的微分方程可以退化为一个代数方程

$$
s^2 + \frac{n_0 e^2}{m \epsilon_0} = 0.
\tag{258}
$$

由此我们解得

$$
s = -\sqrt{-\frac{n_0 e^2}{m \epsilon_0}} = -i \sqrt{\frac{n_0 e^2}{m \epsilon_0}} \equiv -i \omega_p.
\tag{259}
$$

这里，$\omega_p$ 称为等离子体的振荡频率。大气层中电离层的等离子振荡频率大约为 $1 \sim 10 \mathrm{MHz}$。因此，在受到扰动后，其中电子电荷密度的改变可以写作

$$
\delta\rho(\mathbf{r},t) = \delta\rho(\mathbf{r}) e^{-i\omega_p t}.
\tag{260}
$$

现在考虑有外加电场辐射到等离子体上的情况。此时，(253) 式中的三个方程应该改写为

$$
\begin{aligned}
&\frac{\partial \delta\rho(\mathbf{r},t)}{\partial t} + (-e)n_0 \nabla \cdot \mathbf{v}(\mathbf{r},t) \cong 0, \quad \frac{\partial \mathbf{v}(\mathbf{r},t)}{\partial t} = -\frac{e}{m} \mathbf{E}_i(\mathbf{r},t) - \frac{e}{m} \mathbf{E}_e(\mathbf{r},t), \\
&\nabla \cdot (\mathbf{E}_i(\mathbf{r},t) + \mathbf{E}_e(\mathbf{r},t)) = \frac{1}{\epsilon_0} \delta\rho(\mathbf{r},t).
\end{aligned}
\tag{261}
$$

这里，$\mathbf{E}_i(\mathbf{r},t)$ 为电离层中电子密度涨落引起的电场强度矢量，而 $\mathbf{E}_e(\mathbf{r},t)$ 则为外电场。由于 $\nabla \cdot \mathbf{E}_e(\mathbf{r},t) = 0$，故最后一个方程可以简化为

$$
\nabla \cdot \mathbf{E}_i(\mathbf{r},t) = \frac{1}{\epsilon_0} \delta\rho(\mathbf{r},t).
\tag{262}
$$

从这些方程可以看出，除了原来的等离子体振荡之外，外场 $\mathbf{E}_e(\mathbf{r},t)$ 的主要影响是使得电子有了一个附加速度 $\tilde{\mathbf{v}}(\mathbf{r},t)$，它随时间的改变由下式

$$
\frac{\partial \tilde{\mathbf{v}}(\mathbf{r},t)}{\partial t} = -\frac{e}{m} \mathbf{E}_e(\mathbf{r},t)
\tag{263}
$$

决定。注意到 $\tilde{\mathbf{j}} = -n_0 e \tilde{\mathbf{v}}(\mathbf{r},t)$，上式又可被写作

$$
\frac{\partial \tilde{\mathbf{j}}(\mathbf{r},t)}{\partial t} = \frac{n_0 e^2}{m} \mathbf{E}_e(\mathbf{r},t).
\tag{264}
$$

若 $\mathbf{E}_e(\mathbf{r},t) = \mathbf{E}_e(\mathbf{r}) e^{-i\omega t}$，则我们可以取

$$
\tilde{\mathbf{j}}(\mathbf{r},t) = \tilde{\mathbf{j}}(\mathbf{r}) e^{-i\omega t}.
\tag{265}
$$

代入上式后，我们得到

$$
\tilde{\mathbf{j}}(\mathbf{r}) = i \frac{n_0 e^2}{m \omega} \mathbf{E}_e(\mathbf{r}) = \sigma \mathbf{E}_e(\mathbf{r}).
\tag{266}
$$

换句话说，$\tilde{\mathbf{j}}(\mathbf{r})$ 被视为外电场 $\mathbf{E}_e(\mathbf{r},t)$ 在等离子体内引起的电流密度。仿照 8.3 节中的讨论，我们可以引入复电容率

$$
\epsilon'(\omega) = \epsilon(\omega) + i \frac{\sigma(\omega)}{\omega} = \epsilon(\omega) - \frac{n_0 e^2}{m \omega^2} \cong \epsilon_0 - \frac{n_0 e^2}{m \omega^2},
\tag{267}
$$

那么，等离子体内的电磁波的波数为

$$
k = \omega \sqrt{\mu(\omega)\epsilon'(\omega)} \cong \omega \sqrt{\mu_0 \epsilon_0 \left(1 - \frac{n_0 e^2}{m \omega^2 \epsilon_0}\right)}.
\tag{268}
$$

因此，对于频率 $\omega > \omega_p$ 的电磁波，等离子体的折射率

$$
n = \sqrt{1 - \frac{n_0 e^2}{m \omega^2 \epsilon_0}} = \sqrt{1 - \frac{\omega_p^2}{\omega^2}} < 1,
\tag{269}
$$

即真空为“光密”媒介质。因此，存在着一个临界角度 $\theta_c$，当从地球表面入射到电离层的电磁波的入射角 $\theta > \theta_c$ 时，将会发生全反射现象，即电磁波会被反射回地面。这就是为什么短波信号可以被传送到很远的地方的原因。

当 $\omega < \omega_p$ 时，波数 $k$ 为纯虚数。此时，电磁波不能在等离子体中传播。因此，等离子体频率 $\omega_p$ 也是电磁波在等离子体中传播的截止频率。

