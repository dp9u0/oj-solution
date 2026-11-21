# [2123] 使矩阵中的 1 互不相邻的最小操作数

## Description


```md
https://leetcode.cn/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/description/
* algorithms
* Hard (46.25%)
* Likes:    7
* Dislikes: -
* Testcase Example:  '[[1,1,0],[0,1,1],[1,1,1]]'
给你一个 下标从 0 开始 的矩阵 grid。每次操作，你可以把 grid 中的 一个 1 变成 0 。
如果一个矩阵中，没有 1 与其它的 1 四连通（也就是说所有 1 在上下左右四个方向上不能与其他 1 相邻），那么该矩阵就是 完全独立 的。
请返回让 grid 成为 完全独立 的矩阵的 最小操作数。

示例 1:
输入: grid = [[1,1,0],[0,1,1],[1,1,1]]
输出: 3
解释: 可以进行三次操作（把 grid[0][1], grid[1][2] 和 grid[2][1] 变成 0）。
操作后的矩阵中的所有的 1 与其它 1 均不相邻，因此矩阵是完全独立的。
示例 2:
输入: grid = [[0,0,0],[0,0,0],[0,0,0]]
输出: 0
解释: 矩阵中没有 1，此时矩阵也是完全独立的，因此无需操作，返回 0。
示例 3:
输入: grid = [[0,1],[1,0]]
输出: 0
解释: 矩阵中的所有的 1 与其它 1 均不相邻，已经是完全独立的，因此无需操作，返回 0。

提示:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 是 0 或者 1.
Hint 1: Consider each cell containing a 1 as a vertex whose neighbors are the cells 4-directionally connected to it. The grid then becomes a bipartite graph.
Hint 2: You want to find the smallest set of vertices such that every edge in the graph has an endpoint in this set. If you remove every vertex in this set from the graph, then all the 1’s will be disconnected. Are there any well-known algorithms for finding this set?
Hint 3: This set of vertices is called a minimum vertex cover. You can find the size of a minimum vertex cover by finding the size of a maximum matching (Konig’s theorem).
Hint 4: There are well-known algorithms such as Kuhn’s algorithm and Hopcroft-Karp-Karzanov algorithm which can find a maximum matching in a bipartite graph quickly.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a 0-indexed binary matrix `grid`, one operation turns a single 1 into 0. The matrix is fully isolated when no two 1s are 4-directionally adjacent. Return the minimum operations to make it fully isolated.

Example 1:
Input: grid = [[1,1,0],[0,1,1],[1,1,1]]
Output: 3

Example 2:
Input: grid = [[0,0,0],[0,0,0],[0,0,0]]
Output: 0

Example 3:
Input: grid = [[0,1],[1,0]]
Output: 0

Constraints: 1 <= m, n <= 300; grid[i][j] in {0,1}.

## Approach

Model cells containing 1 as graph vertices with edges between 4-adjacent pairs. A valid final matrix keeps an independent set, so we must delete a vertex cover. The graph is bipartite by checkerboard coloring, and by König's theorem the minimum vertex cover equals the maximum matching.

Compute the maximum matching with Hopcroft-Karp: left = cells with (r+c) even, right = (r+c) odd, edges only to adjacent 1s. Run time O(E * sqrt(V)), fine for 300x300.
