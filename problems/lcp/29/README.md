# [LCP 29] 乐团站位

## Description


```md
https://leetcode.cn/problems/SNJvJP/description/
* algorithms
* Medium (21.76%)
* Likes:    79
* Dislikes: -
* Testcase Example:  '3\n0\n2'
某乐团的演出场地可视作 `num * num` 的二维矩阵 `grid`（左上角坐标为 `[0,0]`)，每个位置站有一位成员。乐团共有 `9` 种乐器，乐器编号为 `1~9`，每位成员持有 `1` 个乐器。
为保证声乐混合效果，成员站位规则为：自 `grid` 左上角开始顺时针螺旋形向内循环以 `1，2，...，9` 循环重复排列。例如当 num = `5` 时，站位如图所示
![image.png](https://pic.leetcode.cn/1616125411-WOblWH-image.png)
请返回位于场地坐标 [`Xpos`,`Ypos`] 的成员所持乐器编号。
**示例 1：**
>输入：`num = 3, Xpos = 0, Ypos = 2`
>
>输出：`3`
>
>解释：
![image.png](https://pic.leetcode.cn/1616125437-WUOwsu-image.png)
**示例 2：**
>输入：`num = 4, Xpos = 1, Ypos = 2`
>
>输出：`5`
>
>解释：
![image.png](https://pic.leetcode.cn/1616125453-IIDpxg-image.png)
**提示：**
- `1 <= num <= 10^9`
- `0 <= Xpos, Ypos < num`

```

## Solution

[SourceCode](./solution.js)

---

## English Description

The concert venue is an `num × num` 2D matrix `grid` (top-left corner is `[0, 0]`), and every cell is occupied by one performer. There are 9 types of instruments, numbered `1 ~ 9`. Each performer holds exactly 1 instrument.

To achieve a balanced acoustic blend, performers are arranged starting from the top-left corner of the grid, spiraling **clockwise inward**, repeating the sequence `1, 2, ..., 9` cyclically. For example, when `num = 5`, the layout is shown in the figure.

Return the instrument number held by the performer located at coordinate `[Xpos, Ypos]`.

**Example 1:**
> Input: `num = 3, Xpos = 0, Ypos = 2`
>
> Output: `3`

**Example 2:**
> Input: `num = 4, Xpos = 1, Ypos = 2`
>
> Output: `5`

**Constraints:**
- `1 <= num <= 10^9`
- `0 <= Xpos, Ypos < num`

## 解题思路

矩阵大小 `num` 高达 `10^9`,总格数 `num²` 达 `10^18`,超出 JS 安全整数范围。因此**不能直接构造矩阵或计算完整编号**,只能在模 9 意义下运算。

### 核心观察
- 编号从 1 开始沿顺时针螺旋递增,`(x, y)` 处的编号 `k` 与乐器编号满足:乐器 = `(k - 1) % 9 + 1`。
- 目标变成:**求出该位置在填充顺序中的序号 `k`,再对 9 取模**。
- 由于 `k` 巨大,只需计算 `k mod 9`,即增量编号时全程取模即可。

### 环 (Layer) 分解
螺旋由一层层正方形环组成,坐标 `(x, y)` 所在环:
```
layer = min(x, y, num-1-x, num-1-y)
side  = num - 2 * layer        // 该环的边长
```

**① 外部已填格数(该环之前的所有格)**:
- 外部总格数 = `num² - side²`。
- 在 mod 9 意义下计算:`(num % 9)² - (side % 9)²` 后取正模,即可安全得到 `outerCount mod 9`,全程无大数乘法(两个余数相乘 ≤ 8×8=64)。

**② 该环内的层内偏移 `inLayer`(从环的起点开始计)**:
以环左上角 `(layer, layer)` 为起点,顺时针沿 上边 → 右边 → 下边 → 左边:
- 环退化为一格(`side === 1`):`inLayer = 0`。
- 在顶边:`inLayer = y - layer`
- 在右边:`inLayer = (side-1) + (x - layer)`
- 在底边:`inLayer = 2*(side-1) + (layer + side - 1 - y)`
- 在左边:`inLayer = 3*(side-1) + (layer + side - 1 - x)`

**③ 答案**:
```
answer = ( (outerCount % 9) + (inLayer % 9) ) % 9 + 1
```

### 复杂度
- 时间:O(1)
- 空间:O(1)

全程只做四则运算和取模,不触碰超过 `9` 的大数,完美适配 `num ≤ 10^9`。
