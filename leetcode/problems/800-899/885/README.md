# [885] Spiral Matrix III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/spiral-matrix-iii/description/)

* algorithms
* Medium (84.53%)
* Likes:    1666
* Dislikes: 1048
* Testcase Example:  '1\n4\n0\n0'

```md
You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.
You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid&#39;s boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.
Return an array of coordinates representing the positions of the grid in the order you visited them.

Example 1:


Input: rows = 1, cols = 4, rStart = 0, cStart = 0
Output: [[0,0],[0,1],[0,2],[0,3]]

Example 2:


Input: rows = 5, cols = 6, rStart = 1, cStart = 4
Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]


Constraints:

1 <= rows, cols <= 100
0 <= rStart < rows
0 <= cStart < cols


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

从 (rStart, cStart) 出发，面朝东，按顺时针螺旋形走遍 rows×cols 网格中的所有位置。越界的步也要走（但不记录），最终返回所有合法坐标的访问顺序。

## 解题思路

**Approach: 模拟螺旋走法**

1. 螺旋方向：东→南→西→北，步长模式 1,1,2,2,3,3,4,4,...
2. 每两个方向步长+1，按方向依次前进
3. 只记录在网格内的坐标
4. 直到收集够 rows*cols 个坐标
5. 复杂度 O(max(rows,cols)^2)
