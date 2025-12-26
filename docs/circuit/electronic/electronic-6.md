---
title: Lesson 6 单管放大电路
createTime: 2025/10/22 13:34:31
permalink: /circuit/electronic-6/
---

# Lesson 6 单管放大电路基本接法

![pVo9Cct.png](https://s21.ax1x.com/2025/09/28/pVo9Cct.png)

前面的部分我们以共射放大电路为例探讨了放大电路的工作原理、分析方法、静态工作点与动态参数、失真情况等，可以总结晶体管能够对动态交流信号放大的原理：


$$
\Delta u_{BE} \rightarrow \Delta i_B \rightarrow \Delta i_C \rightarrow \Delta u_{CE}
$$

因此，放大电路还可以有另外两种接法：

- 共集——基极输入，发射极输出，输入回路与输出回路公共端为集电极；
- 共基——发射极输入，集电极输出，输入回路与输出回路公共端为基极；

**共射放大电路动态参数的特点**：

1. 电压放大倍数为负，输入输出反相，具有一定的电压放大能力；
2. 输入电阻的表达式只含有 b-e 侧即输入侧的项，与 c 侧无关；输入电阻与负载无关；
3. 输出电阻的表达式只含有 c 侧即输出侧的项，与 b-e 侧无关；输出电阻与信号源内阻无关；
4. 即使存在发射极电阻，2 与 3 仍然成立；发射极电阻仅改变电压放大倍数与输入电阻；

### · 共集放大电路

我们先给出**基本共集放大电路**：

![pVXZ8xI.png](https://s21.ax1x.com/2025/10/23/pVXZ8xI.png)

当然我们也有一些基本推广模型，比如直接耦合和阻容耦合：

![pVXZtqf.png](https://s21.ax1x.com/2025/10/23/pVXZtqf.png)

我们以阻容耦合为例进行分析：

**静态分析**：先给出直流通路和交流通路

> ![pVXZJMt.png](https://s21.ax1x.com/2025/10/23/pVXZJMt.png)
> $$
> \frac{V_{CC} - U_{BQ}}{R_b} = I_{BQ}
> $$
>
>
> $$
> U_{EQ} = R_e I_{EQ} \quad \Longrightarrow \quad U_o = U_{EQ} 
> $$
>
> (输出电压的静态电位)
>
> $$
> I_{BQ} : I_{CQ} : I_{EQ} = 1 : \beta : 1 + \beta
> $$
>
>
> $$
> U_{BEQ} = U_{BQ} - U_{EQ} = 0.7V
> $$
>
>
> $$
> U_{CQ} = V_{CC}
> $$
>
>
> $$
> I_{CCQ} = U_{CQ} - U_{EQ}
> $$
>
> 除输出电压位置变化之外，其余思路与过程没有区别。

**动态分析**：

> [![pVXZUZ8.png](https://s21.ax1x.com/2025/10/23/pVXZUZ8.png)](https://imgchr.com/i/pVXZUZ8)
>
> $$
> A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{(1+\beta) \dot{I}_b (R_e // R_L)}{r_{be} \dot{I}_b + (1+\beta) \dot{I}_b (R_e // R_L)} = \frac{(1+\beta)(R_e // R_L)}{r_{be} + (1+\beta)(R_e // R_L)}
> $$
>
>
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_b // \frac{\dot{U}_i}{\dot{I}_b} = R_b // \frac{r_{be} \dot{I}_b + (R_e // R_L)(1+\beta) \dot{I}_b}{\dot{I}_b} = R_b // [r_{be} + (1+\beta)(R_e // R_L)]
> $$
>
>
> $$
> R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0} = R_e // \frac{r_{be}}{1+\beta}
> $$
>
> 再次强调求解输出电阻的过程：
>
> 将独立电压源短路后，受控源仍然保留，从输出端口外施电源往里看，假设受控电流源存在电流，则受控电流源电流、 $r_{be}$  电流、 $R_e$  电流应满足  $\beta : 1 : 1 + \beta$  的关系，且方向如图所示； $R_b$  被短路掉，而按照图示从输出端外施电源的电流流向，这样的假设是成立的，即受控电流源仍然存在；输出电阻是将原电路的独立源置零后从输出端口向里看的等效电阻（相当于“输入电阻”），此时干路电流为  $I_e$ ，而流过  $r_{be}$  的电流是  $I_b$ ，因此，输入侧即 b 侧的电阻  $r_{be}$  对于输出侧即 e 侧来说，要除以  $(1+\beta)$ 。

**含有集电极电阻的共集放大电路的动态分析**：

> ![pVXZYsP.png](https://s21.ax1x.com/2025/10/23/pVXZYsP.png)
> $$
> A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{(1+\beta) \dot{I}_b (R_e // R_L)}{r_{be} \dot{I}_b + (1+\beta) \dot{I}_b (R_e // R_L)} = \frac{(1+\beta)(R_e // R_L)}{r_{be} + (1+\beta)(R_e // R_L)}
> $$
>
>
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_b // \frac{\dot{U}_i}{\dot{I}_b} = R_b // \frac{r_{be} \dot{I}_b + (R_e // R_L)(1+\beta) \dot{I}_b}{\dot{I}_b} = R_b // [r_{be} + (1+\beta)(R_e // R_L)]
> $$
>
>
> $$
> R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0} = R_e // \frac{r_{be}}{1+\beta}
> $$
>
> 电路理论中有讲过，与电流源串联的电阻“无用”，即不影响电流源所在支路的电流；动态参数不变；
>
> 因此，共集放大电路动态分析时，集电极与地之间的集电极电阻可以忽略！

**共集放大电路动态参数的特点**：

1. 电压放大倍数为正（输入输出同相）且近似为1，因此共集放大电路也称为“射极跟随器”；

$$
   A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{(1+\beta) \dot{I}_b (R_e // R_L)}{r_{be} \dot{I}_b + (1+\beta) \dot{I}_b (R_e // R_L)} = \frac{(1+\beta)(R_e // R_L)}{r_{be} + (1+\beta)(R_e // R_L)} \quad (1+\beta)(R_e // R_L) \gg r_{be}
$$

2. 输入电阻的表达式含有 e 侧即输出侧的项，共集放大电路的输入电阻与负载有关；且输入电阻一般较大；

$$
   R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_b // \frac{\dot{U}_i}{\dot{I}_b} = R_b // \frac{r_{be} \dot{I}_b + (R_e // R_L)(1+\beta) \dot{I}_b}{\dot{I}_b} = R_b // [r_{be} + (1+\beta)(R_e // R_L)]
$$

3. 输出电阻的表达式含有 b 侧即输入侧的项，共集放大电路的输出电阻与信号源内阻有关；且由于并联项中输入侧归算除以  $ (1+\beta) $  导致并联的电阻很小，共集放大电路的输出电阻一般较小；

$$
R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0} = R_e // \frac{r_{be}}{1+\beta}
$$

**共集放大电路动态参数求解**——输入电阻与输出电阻

> 共集放大电路的输入电阻与输出侧即 e 侧有关，求解时，从输入端往里看，即从左往右看，将右侧的电阻逐一向左边等效，e 侧的项归算到 b 侧要乘以  $(1+\beta)$ ；
>
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_b // \frac{\dot{U}_i}{\dot{I}_b} = R_b // \frac{r_{be} \dot{I}_b + (R_e // R_L)(1+\beta) \dot{I}_b}{\dot{I}_b} = R_b // [r_{be} + (1+\beta)(R_e // R_L)]
> $$
>
> 共集放大电路的输出电阻与输入侧即 b 侧有关，求解时，将独立源即交流电压输入短路掉（保留信号源内阻），从输出端往里看，即从右往左看，将左侧的电阻逐一向右边等效，b 侧的项归算到 e 侧要除以  $(1+\beta)$ ；
>
> $$
> R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0} = R_e // \frac{r_{be}}{1+\beta}
> $$

### · 共基放大电路

我们先给出**基本共基放大电路**：

![pVXZqeK.png](https://s21.ax1x.com/2025/10/23/pVXZqeK.png)

以典型应用电路为例分析：

> 本例为静态工作点稳定，一般为保证足够电压增益，基极加大旁路电容

![pVXZLdO.png](https://s21.ax1x.com/2025/10/23/pVXZLdO.png)

本例的静态工作点分析与前面的分压偏置式共射放大电路完全一致，此处不展开讨论；

**动态分析**：

> ![pVXZOoD.png](https://s21.ax1x.com/2025/10/23/pVXZOoD.png)
> $$
> A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{\beta \dot{I}_b (R_e // R_L)}{r_{be} \dot{I}_b} = \frac{\beta (R_e // R_L)}{r_{be}}
> $$
>
>
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = \frac{r_{be} \dot{I}_b}{(1+\beta) \dot{I}_b + \frac{r_{be} \dot{I}_b}{R_e}} = \frac{r_{be}}{(1+\beta) + \frac{r_{be}}{R_e}}
> $$
>
>
> $$
> R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0} = R_e
> $$

**共基放大电路动态参数的特点**：

1. 电压放大倍数为正（输入输出同相），大小与共射相当，但不具有电流放大能力；

$$
A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{\beta \dot{I}_b (R_e // R_L)}{r_{be} \dot{I}_b} = \frac{\beta (R_e // R_L)}{r_{be}}
$$

2. 输入电阻的表达式仅含有 b-e 侧即输入侧的项，与 c 侧即输出侧无关；输入电阻与负载无关；值得注意的是，共基放大电路的输入电阻往往很小；

$$
R_i = \frac{\dot{U}_i}{\dot{I}_i} = \frac{r_{be} \dot{I}_b}{(1+\beta) \dot{I}_b + \frac{r_{be} \dot{I}_b}{R_e}} = \frac{r_{be}}{(1+\beta) + \frac{r_{be}}{R_e}}
$$

3. 输出电阻的表达式仅含有 c 侧即输出侧的项，与 b-e 侧即输入侧无关；输出电阻与信号源内阻无关；共集放大电路的输出电阻与共射相当；

$$
R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0}  = R_e
$$

4. 共基放大电路的通频带较宽，中高频特性好；（暂时未推导，记住即可）

### · 三种基本接法小结

|              | 共射             | 共集                           | 共基                          |
| ------------ | ---------------- | ------------------------------ | ----------------------------- |
| 电压放大倍数 | 输入输出反相     | 输入输出同相 电压放大倍数约为1 | 输入输出同相                  |
| 输入电阻     | 与输出侧参数无关 | 与输出侧参数有关 输入电阻较大  | 与输出侧参数无关 输入电阻较小 |
| 输出电阻     | 与输入侧参数无关 | 与输入侧参数有关 输出电阻较小  | 与输入侧参数无关              |
| 应用         | 一般放大         | 射极跟随器                     | 宽频带                        |

