# [265] 粉刷房子 II

## Description


```md
https://leetcode.cn/problems/paint-house-ii/description/
* algorithms
* Hard (65.98%)
* Likes:    185
* Dislikes: -
* Testcase Example:  '[[1,5,3],[2,9,4]]'
假如有一排房子共有 n 幢，每个房子可以被粉刷成 k 种颜色中的一种。房子粉刷成不同颜色的花费成本也是不同的。你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。
每个房子粉刷成不同颜色的花费以一个 n x k 的矩阵表示。
例如，costs[0][0] 表示第 0 幢房子粉刷成 0 号颜色的成本；costs[1][2] 表示第 1 幢房子粉刷成 2 号颜色的成本，以此类推。
返回 粉刷完所有房子的最低成本 。

示例 1：
输入: costs = [[1,5,3],[2,9,4]]
输出: 5
解释:
将房子 0 刷成 0 号颜色，房子 1 刷成 2 号颜色。花费: 1 + 4 = 5;
或者将 房子 0 刷成 2 号颜色，房子 1 刷成 0 号颜色。花费: 3 + 2 = 5.
示例 2:
输入: costs = [[1,3],[2,4]]
输出: 5

提示：
costs.length == n
costs[i].length == k
1 <= n <= 100
2 <= k <= 20
1 <= costs[i][j] <= 20

进阶：您能否在 O(nk) 的时间复杂度下解决此问题？

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Like 256 but with `k` colors. Follow-up required: O(n·k) time and O(1) extra space.

**Example:**
[[1,5,3],[2,9,4]] → 5

**Constraints:**
- costs.length <= 100, costs[i].length == k, 1 <= k <= 20

## Approach

维护上一行 dp 的最小值 min1(及其颜色)与次小值 min2:转移时若当前颜色 ≠ min1 颜色则加 min1,否则加 min2。一行内同时更新新行的 min1/min2/min1Color。免去逐色扫前一行。

时间 O(n·k),空间 O(1)。
