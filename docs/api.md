# 华中10型数控系统开放平台二次开发指南
**版本**：V2
**日期**：20260324

# 4. 二次开发接口规范
## 4.1 基本数据
三类核心数据：
1. **寄存器**：控制周期变化（轴位置、IO）
2. **变量**：G代码指令变化（行号、模态）
3. **参数**：用户主动修改，带权限（轴类型）

### 4.1.1 寄存器
用户与系统交互通道，支持读写控制与状态获取。

**分类**
- 类型：X/Y/F/G/R/W/D/B/P/I/Q/K/T/C/H
- 长度：8/16/32/64位
- 功能：系统/通道/轴寄存器
- 读写：X/F只读，Y/G/R/W/D/B可读写

**寄存器类型**
| 类型 | 数据类型 | 说明 |
|------|----------|------|
| REG_TYPE_X | Bit8 | MAC→PLC |
| REG_TYPE_Y | Bit8 | PLC→MAC |
| REG_TYPE_F | Bit16 | NC→PLC |
| REG_TYPE_G | Bit16 | PLC→NC |
| REG_TYPE_R | Bit8 | 8位内部寄存器 |
| REG_TYPE_W | Bit16 | 16位内部寄存器 |
| REG_TYPE_D | Bit32 | 32位内部寄存器 |
| REG_TYPE_B | Bit32 | 刀具数据 |
| REG_TYPE_P | Bit32 | 机床用户参数 |

**FG基地址**
| 类型 | 说明 | 基址 |
|------|------|------|
| REG_FG_SYS_BASE | 系统数据 | 1480 |
| REG_FG_CHAN_BASE | 通道数据 | 1280 |
| REG_FG_AXIS_BASE | 轴数据 | 0 |

**接口列表**
| 接口 | 说明 |
|------|------|
| HNC_RegGetValue | 获取寄存器值 |
| HNC_RegSetValue | 设置寄存器值 |
| HNC_RegSetBit | 置1某一位 |
| HNC_RegClrBit | 清0某一位 |
| HNC_RegGetNum | 获取总组数 |
| HNC_RegGetFGBase | 获取FG基址 |

**常用接口示例**
```c
#include "hncreg.h"
// 获取F[0]
Bit32 temp = 0;
Bit32 ret = HNC_RegGetValue(REG_TYPE_F, 0, &temp);
// 设置Y[0]第0位
HNC_RegSetBit(REG_TYPE_Y, 0, 0, 0);