# [836] 矩形重叠

## Description


```md
https://leetcode.cn/problems/rectangle-overlap/description/
* algorithms
* Easy (50.28%)
* Likes:    329
* Dislikes: -
* Testcase Example:  '[0,0,2,2]\n[1,1,3,3]'
矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。矩形的上下边平行于 x 轴，左右边平行于 y 轴。
如果相交的面积为 正 ，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。
给出两个矩形 rec1 和 rec2 。如果它们重叠，返回 true；否则，返回 false 。

示例 1：
输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
输出：true
示例 2：
输入：rec1 = [0,0,1,1], rec2 = [1,0,2,1]
输出：false
示例 3：
输入：rec1 = [0,0,1,1], rec2 = [2,2,3,3]
输出：false

提示：
rect1.length == 4
rect2.length == 4
-109 <= rec1[i], rec2[i] <= 109
rec1 和 rec2 表示一个面积不为零的有效矩形

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译 (English Translation)

An axis-aligned rectangle is represented as a list `[x1, y1, x2, y2]`, where `(x1, y1)` is its bottom-left corner and `(x2, y2)` is its top-right corner. Its top and bottom edges are parallel to the X axis, and its left and right edges are parallel to the Y axis.

Two rectangles **overlap** if the area of their intersection is **positive**. To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two axis-aligned rectangles `rec1` and `rec2`, return `true` if they overlap, otherwise return `false`.

**Example 1:** `rec1 = [0,0,2,2], rec2 = [1,1,3,3]` → `true`
**Example 2:** `rec1 = [0,0,1,1], rec2 = [1,0,2,1]` → `false`
**Example 3:** `rec1 = [0,0,1,1], rec2 = [2,2,3,3]` → `false`

**Constraints:**
- `rect1.length == 4`, `rect2.length == 4`
- `-10^9 <= rec1[i], rec2[i] <= 10^9`
- Both rectangles are valid with non-zero area

## Approach (解题思路)

**一维投影分离判定，O(1)**

两个轴对齐矩形重叠 ⟺ 它们在 x 轴和 y 轴上的投影区间都**严格**相交（交为长度为正的区间）。

- x 轴：`[x1, x2]` 与 `[x3, x4]` 严格相交 ⟺ `x1 < x4 && x3 < x2`
- y 轴：`[y1, y2]` 与 `[y3, y4]` 严格相交 ⟺ `y1 < y4 && y3 < y2`

四个条件同时成立即为重叠。任一不成立，说明 rec1 整体在 rec2 的左/右/上/下方，投影分离，无正面积交集。

"严格小于"恰好排除"只在角或边接触"的情况（交为线段或点，面积为 0）。坐标可为负不影响判定；输入保证矩形面积非零，无需处理退化情况。

**时间复杂度：** O(1)
**空间复杂度：** O(1)
