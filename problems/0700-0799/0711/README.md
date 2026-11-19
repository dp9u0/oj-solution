# [711] 不同岛屿的数量 II

## Description


```md
https://leetcode.cn/problems/number-of-distinct-islands-ii/description/
* algorithms
* Hard (50.98%)
* Likes:    70
* Dislikes: -
* Testcase Example:  '[[1,1,0,0,0],[1,0,0,0,0],[0,0,0,0,1],[0,0,0,1,1]]'
给定一个 m x n 二进制数组表示的网格 grid ，一个岛屿由 四连通 （上、下、左、右四个方向）的 1 组成（代表陆地）。你可以认为网格的四周被海水包围。
如果两个岛屿的形状相同，或者通过旋转（顺时针旋转 90°，180°，270°）、翻转（左右翻转、上下翻转）后形状相同，那么就认为这两个岛屿是相同的。
返回 这个网格中形状 不同 的岛屿的数量 。

示例 1:
输入: grid = [[1,1,0,0,0],[1,0,0,0,0],[0,0,0,0,1],[0,0,0,1,1]]
输出: 1
解释: 这两个是相同的岛屿。因为我们通过 180° 旋转第一个岛屿，两个岛屿的形状相同。
示例 2:
输入: grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
输出: 1

提示:
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] 不是 0 就是 1.

```

## Solution

[SourceCode](./solution.js)

## Translation

Count distinct island shapes in a 01 grid; islands are the same if related by rotation (90/180/270°) or flip (horizontal/vertical) plus translation.

- Example 1: → `1` (180° rotation makes them equal)
- Example 2: → `1`

Constraints: 50×50 grid.

## Approach

**DFS 取点集 + 8 变换取字典序最小规范化**。对每个岛收集所有格子坐标;8 种变换 `(±x,±y)` 与 `(±y,±x)` 覆盖全部旋转与翻转;每种变换后归一化(平移使最小坐标为 0、排序、拼串),取 8 个串中最小者作规范签名;签名集合大小即答案。O(mn·log(mn))。
