# [1254] 统计封闭岛屿的数目

## Description


```md
https://leetcode.cn/problems/number-of-closed-islands/description/
* algorithms
* Medium (64.86%)
* Likes:    347
* Dislikes: -
* Testcase Example:  '[[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]'
二维矩阵 grid 由 0 （土地）和 1 （水）组成。岛是由最大的4个方向连通的 0 组成的群，封闭岛是一个 完全 由1包围（左、上、右、下）的岛。
请返回 封闭岛屿 的数目。

示例 1：
输入：grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
输出：2
解释：
灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。
示例 2：
输入：grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
输出：1
示例 3：
输入：grid = [[1,1,1,1,1,1,1],
[1,0,0,0,0,0,1],
[1,0,1,1,1,0,1],
[1,0,1,0,1,0,1],
[1,0,1,1,1,0,1],
[1,0,0,0,0,0,1],
[1,1,1,1,1,1,1]]
输出：2

提示：
1 <= grid.length, grid[0].length <= 100
0 <= grid[i][j] <=1
Hint 1: Exclude connected group of 0s on the corners because they are not closed island.
Hint 2: Return number of connected component of 0s on the grid.

```

## Description (English)

Given a 2D grid consisting of 0 (land) and 1 (water), an island is a maximal group of 0s connected 4-directionally (up, down, left, right). A closed island is an island that is completely surrounded by 1s (on the left, upper, right, and lower sides — i.e. it does not touch the boundary of the grid).

Return the number of closed islands.

Example 1:
Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: Islands in the gray area are closed islands because they are completely surrounded by water.

Example 2:
Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1

Example 3:
Input: grid = [[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,1,1,0,1],[1,0,1,0,1,0,1],[1,0,1,1,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]]
Output: 2

Constraints:
1 <= grid.length, grid[0].length <= 100
0 <= grid[i][j] <= 1

## 思路

封闭岛 = 一个 0 的连通块，且该连通块完全不接触网格边界（接触边界的 0 一定不被 1 包围）。

经典「先淹没边界、再计数」两步法（洪水填充）：

1. 先从所有边界上的 0 出发做 DFS/BFS，把与边界相连的 0 全部置为 1（这些岛屿必然不是封闭岛，先排除）。
2. 再遍历整个网格，每遇到一个剩下的 0，计数 +1，并从它出发把整个连通块淹没为 1。

这样每个格子最多被访问常数次，时间复杂度 O(m×n)，空间复杂度 O(m×n)。

注意：为避免最坏情况（如蛇形全 0 网格）导致递归栈过深，使用显式栈的迭代 DFS。

## Solution

[SourceCode](./solution.js)
