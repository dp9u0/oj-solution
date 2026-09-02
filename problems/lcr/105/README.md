# [LCR 105] 岛屿的最大面积

## Description


```md
https://leetcode.cn/problems/ZL6zAn/description/
* algorithms
* Medium (68.04%)
* Likes:    111
* Dislikes: -
* Testcase Example:  '[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]'
给定一个由 0 和 1 组成的非空二维数组 grid ，用来表示海洋岛屿地图。
一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

示例 1：
输入: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
输出: 6
解释: 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。
示例 2：
输入: grid = [[0,0,0,0,0,0,0,0]]
输出: 0

提示：
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1

注意：本题与主站 695 题相同： https://leetcode.cn/problems/max-area-of-island/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a 2D grid of `0`/`1`, find the maximum **area** of an island (4-directionally connected `1`s). Return 0 if none.

**Example:** → 6.

**Constraints:** grid ≤ 50×50. Note: same as LeetCode 695.

---

## Approach

**DFS flood fill**: for each cell with a 1 not yet visited, DFS count its component area; track max.

Complexity: `O(m·n)`.
