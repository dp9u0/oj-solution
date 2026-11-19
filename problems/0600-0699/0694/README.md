# [694] 不同岛屿的数量

## Description


```md
https://leetcode.cn/problems/number-of-distinct-islands/description/
* algorithms
* Medium (58.88%)
* Likes:    209
* Dislikes: -
* Testcase Example:  '[[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]'
给定一个非空 01 二维数组表示的网格，一个岛屿由四连通（上、下、左、右四个方向）的 1 组成，你可以认为网格的四周被海水包围。
请你计算这个网格中共有多少个形状不同的岛屿。两个岛屿被认为是相同的，当且仅当一个岛屿可以通过平移变换（不可以旋转、翻转）和另一个岛屿重合。

示例 1：
输入: grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
输出：1
示例 2：
输入: grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]
输出: 3

提示：
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] 仅包含 0 或 1

```

## Solution

[SourceCode](./solution.js)

## Translation

Count distinct island shapes in a 01 grid; two islands are the same iff one is a translation (no rotation/flip) of the other.

- Example 1: two identical 2×2 blocks → `1`
- Example 2: → `3`

Constraints: 50×50 grid.

## Approach

**DFS + 相对坐标签名**。对每个未访问陆地做 DFS,以首次发现点为原点,把每个格子的相对偏移 `(i−si, j−sj)` 按固定 DFS 顺序拼成签名;签名去重集合的大小即答案。平移不变(相对坐标),旋转/翻转会改变 DFS 序与偏移集,天然区分。O(mn)。
