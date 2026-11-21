# [2152] 穿过所有点的所需最少直线数量

## Description


```md
https://leetcode.cn/problems/minimum-number-of-lines-to-cover-points/description/
* algorithms
* Medium (46.92%)
* Likes:    19
* Dislikes: -
* Testcase Example:  '[[0,1],[2,3],[4,5],[4,3]]'
给定一个 points 数组，points[i] = [xi, yi] 表示直角坐标系 X-Y 的一个点。
现在考虑向 X-Y 坐标系中添加 直线，使得每个点 至少 在一条直线上。
返回能够穿过所有点的所需 最少直线 数量。

示例 1:
输入: points = [[0,1],[2,3],[4,5],[4,3]]
输出: 2
解释: 所需最少直线数量为 2 ，一种可能的答案是添加:
- 一条穿过点 (0, 1) 和 点(4, 5) 的直线
- 另一条穿过点 (2, 3) 和点 (4, 3) 的直线
示例 2:
输入: points = [[0,2],[-2,-2],[1,4]]
输出: 1
解释: 所需最少直线数量为 1 ，唯一的答案是:
- 一条穿过点 (-2, -2) 和点 (1, 4) 的直线

提示:
1 <= points.length <= 10
points[i].length == 2
-100 <= xi, yi <= 100
points 中元素都是唯一的
Hint 1: What is the highest possible answer for a set of n points?
Hint 2: The highest possible answer is n / 2 (rounded up). This is because you can cover at least two points with a line, and if n is odd, you need to add one extra line to cover the last point.
Hint 3: Suppose you have a line covering two points, how can you quickly check if a third point is also covered by that line?
Hint 4: Calculate the slope from the first point to the second point. If the slope from the first point to the third point is the same, then it is also covered by that line.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given `points[i] = [xi, yi]`, add the minimum number of straight lines so every point lies on at least one line. Return that minimum.

Example 1:
Input: points = [[0,1],[2,3],[4,5],[4,3]]
Output: 2

Example 2:
Input: points = [[0,2],[-2,-2],[1,4]]
Output: 1

Constraints: 1 <= points.length <= 10; coordinates in [-100, 100]; points unique.

## Approach

Bitmask DP with n <= 10. Precompute for every pair (i, j) the mask of all points collinear with them (integer cross product). dp[mask] = minimum lines covering exactly the points in mask; transition over the lowest set bit point i: dp[mask] = 1 + min over pair-partner j in mask of dp[mask without the collinear(i, j) subset]. dp[0] = 0.

States 2^10, transitions <= n per state, line masks precomputed in O(n^3).
