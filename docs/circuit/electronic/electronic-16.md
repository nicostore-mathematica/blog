---
title: Lesson 16 基本运算电路
permalink: /circuit/electronic-16/
createTime: 2025/12/26 14:35:51
---

# Lesson 16 基本运算电路

集成运放引入负反馈，工作在线性区，利用“虚短”、“虚断”分析问题是基本出发点，结合电路理论中的基本知识，如KCL、KVL、VCR、叠加原理等；

本章给出的典型的运算电路都是电压型运算电路，即输出电压是输入电压的函数，稳定输出电压；事实上运算电路不局限于电压运算电路，掌握本章几种典型运算电路的分析方法，对其他的由集成运放引入负反馈、工作在线性区的电路的分析同样适用；

### · 比例运算电路

**反相比例运算电路**：

> ![](https://pic1.imgdb.cn/item/691a8c1a3203f7be000c2cb2.png)
>
> 对 N 点应用**虚断**与**KCL**：
>
> $$
> \frac{u_I - u_N}{R} = \frac{u_N - u_O}{R_f}
> $$
>
> **虚短**：
>
> 由于虚断，$R'$ 上无压降，故  
> $$
> u_N = u_P = 0
> $$
>
> 代入得输出电压：
>
> $$
> u_O = -\frac{R_f}{R} u_I
> $$
>
> > 虽然电阻 $R'$ 在运算关系式中没有出现，但一般为了保证两个输入端口等效电阻的对称性，通常选择令 $R_P = R_N$，即：
> >
> > $$
> > R' = R \parallel R_f
> > $$

**T型反相比例运算电路**：

> ![](https://pic1.imgdb.cn/item/691a8c1a3203f7be000c2cb6.png)
>
> 对 M 点应用 KCL：
>
> $$
> \frac{u_N - u_M}{R_2} + \frac{0 - u_M}{R_3} = \frac{u_M - u_O}{R_4}
> $$
>
> 对 N 点应用虚断和 KCL：
>
> $$
> \frac{u_I - u_N}{R_1} = \frac{u_N - u_M}{R_2}
> $$
>
> **虚短**：
>
> 由于虚断，$R'$ 上无压降，故有  
> $$
> u_N = u_P = 0
> $$
>
> 推导得输出电压表达式：
>
> $$
> u_o = -\frac{R_2 R_4}{R_3} \cdot \frac{1}{R_1 + R_2 + R_4 + \frac{R_2 R_4}{R_3}} \cdot u_I
> $$
>
> > T 型反相比例运算器有什么优点？可实现较大的增益，同时避免使用过大阻值的电阻

**同相比例运算电路**：

> ![](https://pic1.imgdb.cn/item/691a8c1a3203f7be000c2cb7.png)
>
> 对 N 点应用**虚断**与**KCL**：
>
> $$
> \frac{0 - u_N}{R} = \frac{u_N - u_O}{R_f}
> $$
>
> **虚短**：  
> $$
> u_N = u_P
> $$
>
> P 点虚断，$ R' $ 上压降为零：  
> $$
> u_P = u_I
> $$
>
> 联立得输出电压公式：
>
> $$
> u_O = \left(1 + \frac{R_f}{R}\right) u_I
> $$

**电压跟随器**：

> ![](https://pic1.imgdb.cn/item/691a8c1a3203f7be000c2cb4.png)
>
> 当同相比例运算器中的 $R_f = 0$（即短路），或 $R = \infty$（即开路）时，输出电压等于输入电压，称为**电压跟随器**.
>
> 由于其具有：输入电阻无穷大，输出电阻为零.
>
> 因此可以用于**前后级隔离**，实现信号缓冲作用。

**同相比例运算电路一般形式**：

> ![](https://pic1.imgdb.cn/item/691a8c1a3203f7be000c2cb3.png)
>
> 电路分析：对 N 点和 P 点应用虚断与 KCL
>
> 对 N 点应用虚断、KCL：
> $$
> \frac{0 - u_N}{R_1} = \frac{u_N - u_O}{R_f}
> $$
>
> 虚短：
> $$
> u_N = u_P
> $$
>
> 对 P 点应用虚断、KCL：
> $$
> \frac{u_I - u_P}{R_2} = \frac{u_P - 0}{R_3}
> $$
> 推导得输出电压表达式：
>
> $$
> u_O = \frac{R_p}{R_N} \cdot \frac{R_f}{R_2} \cdot u_1
> $$
>
> 其中：
>
> $$
> R_p = R_2 \parallel R_3
> $$
>
> $$
> R_N = R_1 \parallel R_f
> $$

### · 加减运算电路

**反相求和运算电路**：

> ![](https://pic1.imgdb.cn/item/691a8c1a3203f7be000c2cb5.png)
>
> 对 N 点应用虚断、KCL：
>
>
> $$
> \frac{u_{i1} - u_N}{R_1} + \frac{u_{i2} - u_N}{R_2} + \frac{u_{i3} - u_N}{R_3} = \frac{u_N - u_O}{R_f}
> $$
>
> 虚短：（由于虚断 R' 上无压降）
>
>
> $$
> u_N = u_P = 0
> $$
>
>
> $$
> u_O = -(\frac{R_f}{R_1}u_{i1} + \frac{R_f}{R_2}u_{i2} + \cdots + \frac{R_f}{R_n}u_{in})
> $$

**同相求和运算电路**：

> ![](https://pic1.imgdb.cn/item/691a8c283203f7be000c2d1c.png)
>
> 对 N 点应用虚断、KCL：
>
>
> $$
> \frac{0 - u_N}{R} = \frac{u_N - u_O}{R_f}
> $$
>
> 虚短：
>
> $$
> u_N = u_P
> $$
>
> 对 P 点应用虚断、KCL：
>
> $$
> \frac{u_{i1} - u_P}{R_1} + \frac{u_{i2} - u_P}{R_2} + \frac{u_{i3} - u_P}{R_3} = \frac{u_P - 0}{R_4}
> $$
>
>
> $$
> u_O = \frac{R_p}{R_N}(\frac{R_f}{R_1}u_{i1} + \frac{R_f}{R_2}u_{i2} + \cdots + \frac{R_f}{R_n}u_{in})
> $$

**加减运算电路**：

> ![](https://pic1.imgdb.cn/item/691a8c283203f7be000c2d1b.png)
>
> 利用叠加原理：
>
>
> $$
> u_O = \frac{R_p}{R_N}(\frac{R_f}{R_3}u_{i3} + \frac{R_f}{R_4}u_{i4}) - (\frac{R_f}{R_1}u_{i1} + \frac{R_f}{R_2}u_{i2})
> $$
>
> 当  $ R_p = R_N $  时：
>
>
> $$
> u_O = R_f(-\frac{u_{i1}}{R_1} - \frac{u_{i2}}{R_2} + \frac{u_{i3}}{R_3} + \frac{u_{i4}}{R_4})
> $$
>
> 同相部分乘以  $\frac{R_p}{R_N}$ ，反相部分不乘！

### · 微积分电路

**反相积分运算电路**：

> ![](https://pic1.imgdb.cn/item/691a8c283203f7be000c2d1a.png)
>
> 利用电容的 VCR：
> $$
> i_C = C \frac{du_C}{dt}
> $$
>
> $$
> u_C = u_N - u_O
> $$
>
> 对N点应用虚断、KCL：
>
> $$
> i_C = i_R = \frac{u_I - u_N}{R}
> $$
> 虚短：（由于虚断 $R'$ 上无压降）
> $$
> u_N = u_P = 0
> $$
>
> $$
> u_O = -\frac{1}{RC} \int u_I dt
> $$
>
> 当求解某一段时间内输出电压的变化，要求解定积分，注意初始电压

**反相微分运算电路**：

> ![](https://pic1.imgdb.cn/item/691a8c283203f7be000c2d19.png)
>
> 利用电容的 VCR：
> $$
> i_C = C \frac{du_C}{dt}
> $$
>
> $$
> u_C = u_I - u_N
> $$
>
> 对N点应用虚断、KCL：
>
> $$
> i_C = i_R = \frac{u_N - u_O}{R}
> $$
> 虚短：（由于虚断 R' 上无压降）
> $$
> u_N = u_P = 0
> $$
>
> $$
> u_O = -RC \frac{du_I}{dt}
> $$

