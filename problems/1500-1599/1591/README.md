# [1591] Strange Printer II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/strange-printer-ii/description/)

* algorithms
* Hard (60.73%)
* Likes:    695
* Dislikes: 24
* Testcase Example:  '[[1,1,1,1],[1,2,2,1],[1,2,2,1],[1,1,1,1]]'

```md
There is a strange printer with the following two special requirements:

On each turn, the printer will print a solid rectangular pattern of a single color on the grid. This will cover up the existing colors in the rectangle.
Once the printer has used a color for the above operation, the same color cannot be used again.

You are given a m x n matrix targetGrid, where targetGrid[row][col] is the color in the position (row, col) of the grid.
Return true if it is possible to print the matrix targetGrid, otherwise, return false.

Example 1:


Input: targetGrid = [[1,1,1,1],[1,2,2,1],[1,2,2,1],[1,1,1,1]]
Output: true

Example 2:


Input: targetGrid = [[1,1,1,1],[1,1,3,3],[1,1,3,4],[5,5,1,4]]
Output: true

Example 3:

Input: targetGrid = [[1,2,1],[2,1,2],[1,2,1]]
Output: false
Explanation: It is impossible to form targetGrid because it is not allowed to print the same color in different turns.


Constraints:

m == targetGrid.length
n == targetGrid[i].length
1 <= m, n <= 60
1 <= targetGrid[row][col] <= 60


```

## 题目翻译

打印机每次在网格上打印一个单色实心矩形，覆盖已有颜色。每种颜色只能使用一次。给定目标网格，判断是否能打印出来。

## 解题思路

**拓扑排序（颜色依赖图）**

1. 对每种颜色找其包围矩形（最小/最大行列）
2. 在颜色 c 的包围矩形内，如果有其他颜色 d 的格子，说明 d 覆盖了 c 的一部分，即 c 必须先于 d 打印
3. 建依赖图：c → d 表示 c 必须在 d 之前打印
4. 检查是否有环（DFS 三色标记法），有环则不可能

时间 O(m*n*colors)，空间 O(colors)。

## Solution

[SourceCode](./solution.js)
