# [LCP 37] 最小矩形面积

## Description


```md
https://leetcode.cn/problems/zui-xiao-ju-xing-mian-ji/description/
* algorithms
* Hard (25.07%)
* Likes:    27
* Dislikes: -
* Testcase Example:  '[[2,3],[3,0],[4,1]]'
二维平面上有 $N$ 条直线，形式为 `y = kx + b`，其中 `k`、`b`为整数 且 `k > 0`。所有直线以 `[k,b]` 的形式存于二维数组 `lines` 中，不存在重合的两条直线。两两直线之间可能存在一个交点，最多会有 $C_N^2$ 个交点。我们用一个平行于坐标轴的矩形覆盖所有的交点，请问这个矩形最小面积是多少。若直线之间无交点、仅有一个交点或所有交点均在同一条平行坐标轴的直线上，则返回0。
注意：返回结果是浮点数，与标准答案 **绝对误差或相对误差** 在 10^-4 以内的结果都被视为正确结果
**示例 1：**
> 输入：`lines = [[2,3],[3,0],[4,1]]`
>
> 输出：`48.00000`
>
> 解释：三条直线的三个交点为 (3, 9) (1, 5) 和 (-1, -3)。最小覆盖矩形左下角为 (-1, -3) 右上角为 (3,9)，面积为 48
**示例 2：**
> 输入：`lines = [[1,1],[2,3]]`
>
> 输出：`0.00000`
>
> 解释：仅有一个交点 (-2，-1）
**限制：**
+ `1 <= lines.length <= 10^5 且 lines[i].length == 2`
+ `1 <= lines[0] <= 10000`
+ `-10000 <= lines[1] <= 10000`
+ `与标准答案绝对误差或相对误差在 10^-4 以内的结果都被视为正确结果`

```

## Solution

[SourceCode](./solution.js)

## English Translation

**LCP 37. Minimum Rectangle Area**

There are `N` lines on the 2D plane of the form `y = kx + b` with integer `k > 0` and integer `b`, given as `[k, b]` in `lines`; no two lines coincide. Each pair of non-parallel lines has one intersection point (at most `C(N,2)` in total). Cover all intersection points with an axis-parallel rectangle and return its minimum area. If there are no intersections, only one intersection, or all intersections lie on one axis-parallel line, return `0`.

Answers within absolute or relative error `10^-4` are accepted.

Example 1: `lines = [[2,3],[3,0],[4,1]]` → `48.00000` (intersections `(3,9)`, `(1,5)`, `(-1,-3)`; box `4 × 12`).

Constraints: `1 <= lines.length <= 10^5`, `1 <= k <= 10000`, `-10000 <= b <= 10000`.

## Approach

The extreme intersection points (leftmost / rightmost / topmost / bottommost) are always formed by two lines that are **adjacent in the vertical order at x = ±∞**:

- Sweeping from `-∞`, the vertical order is fixed until the first intersection; the pair crossing at the leftmost vertex must be adjacent in that initial order, otherwise a line between them would have to cross one of them even earlier. The order at `-∞` is `(k asc, b desc)`; at `+∞` it is `(k desc, b desc)`.

So:

- `min x` = min over pairs adjacent in `(k asc, b desc)` order of `x_ij = (b_j - b_i)/(k_i - k_j)`
- `max x` = max over pairs adjacent in `(k desc, b desc)` order

For the `y` extremes, swap the axes: the map `(x, y) -> (y, x)` sends `y = kx + b` to `y' = (1/k)x' - b/k`, again lines with positive slope. `max/min y` of the original intersections = `max/min x'` of the transformed arrangement, so the same adjacency trick applies in the transformed ±∞ orders, which work out to `(k asc, b asc)` and `(k desc, b asc)`:

- `max y` = max over pairs adjacent in `(k asc, b asc)` order of `y_ij = (k_i·b_j - k_j·b_i)/(k_i - k_j)`
- `min y` = min over pairs adjacent in `(k desc, b asc)` order

Adjacent pairs with equal `k` are parallel (no intersection) and are skipped. Area = `(maxX - minX) · (maxY - minY)`, or `0` when degenerate (no intersections, a single intersection, or all on one axis-parallel line).

Time: `O(N log N)` (four sorts), Space: `O(N)`. Verified against an `O(N²)` brute force on 500 randomized cases locally.
