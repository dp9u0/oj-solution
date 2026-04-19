# [1905] Count Sub Islands

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-sub-islands/description/)

* algorithms
* Medium (73.01%)
* Likes:    2650
* Dislikes: 91
* Testcase Example:  '[[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]]\n' +

```md
'[[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]'
You are given two m x n binary matrices grid1 and grid2 containing only 0&#39;s (representing water) and 1&#39;s (representing land). An island is a group of 1&#39;s connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.
An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.
Return the number of islands in grid2 that are considered sub-islands.

Example 1:


Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
Output: 3
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.

Example 2:


Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
Output: 2
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.


Constraints:

m == grid1.length == grid2.length
n == grid1[i].length == grid2[i].length
1 <= m, n <= 500
grid1[i][j] and grid2[i][j] are either 0 or 1.


```

## 翻译

给定两个m×n二值矩阵grid1和grid2。grid2中的岛屿如果是grid1中某个岛屿的子集（所有对应位置grid1也为1），则称为子岛。返回grid2中子岛的数量。

## 解题思路

BFS/DFS遍历grid2中的每个岛屿，检查该岛屿的所有单元格在grid1中是否都为1。若是则计入子岛。

## Solution

[SourceCode](./solution.js)
