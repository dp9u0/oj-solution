# [1102] 得分最高的路径

## Description


```md
https://leetcode.cn/problems/path-with-maximum-minimum-value/description/
* algorithms
* Medium (42.04%)
* Likes:    143
* Dislikes: -
* Testcase Example:  '[[5,4,5],[1,2,6],[7,4,6]]'
给定一个 m x n 的整数矩阵 grid，返回从 (0,0) 开始到 (m - 1, n - 1) 在四个基本方向上移动的路径的最大 分数 。
一条路径的 分数 是该路径上的最小值。
例如，路径 8 → 4 → 5 → 9 的得分为 4 。

示例 1：
输入：grid = [[5,4,5],[1,2,6],[7,4,6]]
输出：4
解释：得分最高的路径用黄色突出显示。
示例 2：
输入：grid = [[2,2,1,2,2,2],[1,2,2,2,1,2]]
输出：2
示例 3：
输入：grid = [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
输出：3

提示：
m == grid.length
n == grid[i].length
1 <= m, n <= 100
0 <= grid[i][j] <= 109
Hint 1: What if we sort each cell of the matrix by the value?
Hint 2: Don't include small values in your path if you can only include large values.
Hint 3: Let's keep adding a possible cell to use in the path incrementally with decreasing values.
Hint 4: If the start and end cells are connected then we don't need to add more cells.
Hint 5: Use union-find data structure to check connectivity and return as answer the value of the given cell that makes start and end cells connected.

```

## Solution

[SourceCode](./solution.js)

## Translation

Path from (0,0) to (m−1,n−1) moving in 4 directions; score = minimum cell value along the path. Maximize the score.

- Example: [[5,4,5],[1,2,6],[7,4,6]] → `4`

## Approach

**降序激活 + 并查集**。所有格点按值降序排序,逐个"激活"并与已激活的 4 邻居 union;每当 (0,0) 与 (m−1,n−1) 首次连通,当前格值即最大可行瓶颈(保证路径上所有值 ≥ 它,且更高值已试过不连通)。O(mn log(mn))。
