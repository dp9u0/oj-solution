# [LCP 74] 最强祝福力场

## Description


```md
https://leetcode.cn/problems/xepqZ5/description/
* algorithms
* Medium (37.42%)
* Likes:    45
* Dislikes: -
* Testcase Example:  '[[0,0,1],[1,0,1]]'
小扣在探索丛林的过程中，无意间发现了传说中“落寞的黄金之都”。而在这片建筑废墟的地带中，小扣使用探测仪监测到了存在某种带有「祝福」效果的力场。
经过不断的勘测记录，小扣将所有力场的分布都记录了下来。`forceField[i] = [x,y,side]` 表示第 `i` 片力场将覆盖以坐标 `(x,y)` 为中心，边长为 `side` 的正方形区域。
若任意一点的 **力场强度** 等于覆盖该点的力场数量，请求出在这片地带中 **力场强度** 最强处的 **力场强度**。
**注意：**
- 力场范围的边缘同样被力场覆盖。
**示例 1：**
>输入：
>`forceField = [[0,0,1],[1,0,1]]`
>
>输出：`2`
>
>解释：如图所示，（0.5, 0) 处力场强度最强为 2， （0.5，-0.5）处力场强度同样是 2。
![image.png](https://pic.leetcode.cn/1681805536-zGfghe-image.png){:width=400px}
**示例 2：**
>输入：
>`forceField = [[4,4,6],[7,5,3],[1,6,2],[5,6,3]]`
>
>输出：`3`
>
>解释：如下图所示，
>`forceField[0]、forceField[1]、forceField[3]` 重叠的区域力场强度最大，返回 `3`
![image.png](https://pic.leetcode.cn/1681805437-HQkyZS-image.png){:width=500px}
**提示：**
- `1 <= forceField.length <= 100`
- `forceField[i].length == 3`
- `0 <= forceField[i][0], forceField[i][1] <= 10^9`
- `1 <= forceField[i][2] <= 10^9`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

While exploring the jungle, Xiao Kou discovered the legendary "Golden City of the Desolate". In this ruined area, he used a detector and found force fields carrying a "blessing" effect.

After repeated surveys, he recorded all the force fields. `forceField[i] = [x, y, side]` means the i-th force field covers a square region centered at `(x, y)` with side length `side`.

If the **field strength** at any point equals the number of force fields covering that point, find the **field strength** at the strongest point in this area.

**Note:** The edges of a force field region are also covered by that field.

**Example 1:** Input `forceField = [[0,0,1],[1,0,1]]` → Output `2` (e.g. at (0.5, 0) strength is 2)
**Example 2:** Input `forceField = [[4,4,6],[7,5,3],[1,6,2],[5,6,3]]` → Output `3`

**Constraints:** `1 <= forceField.length <= 100`, each `[x,y,side]`, `0 <= x,y <= 10^9`, `1 <= side <= 10^9`

---

## Approach

Each square covers `x ∈ [x - side/2, x + side/2]`, `y ∈ [y - side/2, y + side/2]`, **inclusive edges**. We want the maximum, over all points in the plane, of the number of squares covering that point.

Scale all coordinates by 2 to keep integers: rectangle i becomes `[x0i, x1i] × [y0i, y1i]` with `x0 = 2x - side`, `x1 = 2x + side` (similarly y).

The overlap-count function is piecewise constant on the arrangement cut by rectangle boundaries; on closed rectangles the max is also attained on boundary lines/corners. So we collect:

- `xs` = every distinct `x0`/`x1` boundary, plus midpoints between consecutive distinct boundaries;
- `ys` = the same for y.

Then the maximum is `max` over every sample point `(px, py) ∈ xs × ys` of the number of rectangles with `x0 ≤ px ≤ x1` and `y0 ≤ py ≤ y1`. This samples every cell interior, every boundary segment, and every corner.

Complexity: with n ≤ 100 there are ≤ 400 boundary coords per axis → ≤ ~160k sample points, each checked against ≤ 100 rectangles → `O(n³)`-ish worst but easily fine at these bounds.
