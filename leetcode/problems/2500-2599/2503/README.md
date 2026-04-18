# [2503] Maximum Number of Points From Grid Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/description/)

* algorithms
* Hard (59.32%)
* Likes:    1106
* Dislikes: 50
* Testcase Example:  '[[1,2,3],[2,5,7],[3,5,1]]\n[5,6,2]'

```md
You are given an m x n integer matrix grid and an array queries of size k.
Find an array answer of size k such that for each integer queries[i] you start in the top left cell of the matrix and repeat the following process:

If queries[i] is strictly greater than the value of the current cell that you are in, then you get one point if it is your first time visiting this cell, and you can move to any adjacent cell in all 4 directions: up, down, left, and right.
Otherwise, you do not get any points, and you end this process.

After the process, answer[i] is the maximum number of points you can get. Note that for each query you are allowed to visit the same cell multiple times.
Return the resulting array answer.

Example 1:


Input: grid = [[1,2,3],[2,5,7],[3,5,1]], queries = [5,6,2]
Output: [5,8,1]
Explanation: The diagrams above show which cells we visit to get points for each query.
Example 2:


Input: grid = [[5,2,1],[1,1,2]], queries = [3]
Output: [0]
Explanation: We can not get any points because the value of the top left cell is already greater than or equal to 3.


Constraints:

m == grid.length
n == grid[i].length
2 <= m, n <= 1000
4 <= m * n <= 105
k == queries.length
1 <= k <= 104
1 <= grid[i][j], queries[i] <= 106


```

## 中文翻译

给定 m×n 矩阵 grid 和查询数组 queries。对每个 queries[i]，从左上角 (0,0) 出发：若当前格子值 < queries[i]，则得分+1（首次访问），可四方向移动；否则停止。求每个查询的最大得分。

约束：m,n <= 1000, m*n <= 10^5, k <= 10^4

## 解题思路

**离线处理 + 最小堆 BFS**

1. 将 queries 按值升序排序（保留原始索引）。
2. 用最小堆从 (0,0) 开始 BFS，堆按格子值排序。
3. 对每个查询 q，弹出堆中所有值 < q 的格子并计数，扩展邻居入堆。
4. 由于查询递增，堆状态可跨查询复用，总体 O(mn log(mn))。

## Solution

[SourceCode](./solution.js)
