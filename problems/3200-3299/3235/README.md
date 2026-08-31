# [3235] Check if the Rectangle Corner Is Reachable

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/description/)

* algorithms
* Hard (25.10%)
* Likes:    123
* Dislikes: 42
* Testcase Example:  '3\n4\n[[2,1,1]]'

```md
You are given two positive integers xCorner and yCorner, and a 2D array circles, where circles[i] = [xi, yi, ri] denotes a circle with center at (xi, yi) and radius ri.
There is a rectangle in the coordinate plane with its bottom left corner at the origin and top right corner at the coordinate (xCorner, yCorner). You need to check whether there is a path from the bottom left corner to the top right corner such that the entire path lies inside the rectangle, does not touch or lie inside any circle, and touches the rectangle only at the two corners.
Return true if such a path exists, and false otherwise.

Example 1:

Input: xCorner = 3, yCorner = 4, circles = [[2,1,1]]
Output: true
Explanation:

The black curve shows a possible path between (0, 0) and (3, 4).

Example 2:

Input: xCorner = 3, yCorner = 3, circles = [[1,1,2]]
Output: false
Explanation:

No path exists from (0, 0) to (3, 3).

Example 3:

Input: xCorner = 3, yCorner = 3, circles = [[2,1,1],[1,2,1]]
Output: false
Explanation:

No path exists from (0, 0) to (3, 3).

Example 4:

Input: xCorner = 4, yCorner = 4, circles = [[5,5,1]]
Output: true
Explanation:



Constraints:

3 <= xCorner, yCorner <= 109
1 <= circles.length <= 1000
circles[i].length == 3
1 <= xi, yi, ri <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

矩形左下角在原点、右上角 `(xCorner, yCorner)`。给定若干圆 `circles[i] = [xi, yi, ri]`。判断是否存在从 `(0,0)` 到 `(xCorner, yCorner)` 的路径：完全在矩形内、不触碰或进入任何圆、且只在两个端点角触碰矩形边界。

示例 1：`3,4,[[2,1,1]]` → `true`；示例 2：`3,3,[[1,1,2]]` → `false`；示例 3：`3,3,[[2,1,1],[1,2,1]]` → `false`；示例 4：`4,4,[[5,5,1]]` → `true`

约束：坐标/半径 ≤ 10^9，圆数 ≤ 1000

## 解题思路

**平面阻断 + DFS 连通性**。把矩形边界分成两组：**左∪上**（触之会被阻断链"起点"）与**右∪下**（阻断链"终点"）。路径不存在 ⟺ 从某个触「左或上」边的圆出发，沿**在矩形内部相交**的圆链，能到达某个触「右或下」边的圆。

- 圆含起点/终点角 → 直接无路径；
- `crossLeftTop`：圆触左边（`|cx|≤r` 且 `0≤cy≤Y`）或上边（`|cy−Y|≤r` 且 `0≤cx≤X`）；
- `crossRightBottom`：对称判定触右边或下边；
- **圆-圆连接**：两圆相交/相切 `(x1−x2)²+(y1−y2)²≤(r1+r2)²`，**且** `x1·r2 + x2·r1 < (r1+r2)·X`、`y1·r2 + y2·r1 < (r1+r2)·Y`。后两个不等式等价于连心线按半径比的分点（交点区代表点）落在矩形内，保证两圆的交叠区域**伸入矩形内部**——否则两圆仅在矩形外相交，不构成阻断（如 `[[2,1000,997],[1000,2,997]]`, X=Y=3 用例）。

**精度**：坐标/半径达 1e9，乘积累超 2^53，全部用 **BigInt** 精确比较。

验证示例：示例 3 中 A 触左、B 触下且两圆交于矩形内 → 阻断 ✓；示例 4 圆在矩形外、不触任何边 → 通 ✓。
