# [3552] Grid Teleportation Traversal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/grid-teleportation-traversal/description/)

* algorithms
* Medium (23.51%)
* Likes:    138
* Dislikes: 12
* Testcase Example:  '["A..",".A.","..."]'

```md
You are given a 2D character grid matrix of size m x n, represented as an array of strings, where matrix[i][j] represents the cell at the intersection of the ith row and jth column. Each cell is one of the following:

&#39;.&#39; representing an empty cell.
&#39;#&#39; representing an obstacle.
An uppercase letter (&#39;A&#39;-&#39;Z&#39;) representing a teleportation portal.

You start at the top-left cell (0, 0), and your goal is to reach the bottom-right cell (m - 1, n - 1). You can move from the current cell to any adjacent cell (up, down, left, right) as long as the destination cell is within the grid bounds and is not an obstacle.
If you step on a cell containing a portal letter and you haven&#39;t used that portal letter before, you may instantly teleport to any other cell in the grid with the same letter. This teleportation does not count as a move, but each portal letter can be used at most once during your journey.
Return the minimum number of moves required to reach the bottom-right cell. If it is not possible to reach the destination, return -1.

Example 1:

Input: matrix = ['A..','.A.','...']
Output: 2
Explanation:


Before the first move, teleport from (0, 0) to (1, 1).
In the first move, move from (1, 1) to (1, 2).
In the second move, move from (1, 2) to (2, 2).


Example 2:

Input: matrix = ['.#...','.#.#.','.#.#.','...#.']
Output: 13
Explanation:



Constraints:

1 <= m == matrix.length <= 103
1 <= n == matrix[i].length <= 103
matrix[i][j] is either &#39;#&#39;, &#39;.&#39;, or an uppercase English letter.
matrix[0][0] is not an obstacle.


```

## 题目翻译

给定字符矩阵，从(0,0)到(m-1,n-1)，可四方向移动（遇障碍不可走）。踩到大写字母传送门可免费传送到同字母的其他格子，每个字母最多用一次。求最少移动步数。

## 解题思路

**BFS + 传送扩展**：每层BFS先扩展所有传送（0代价），再四方向移动（1代价）。用used集合记录已激活的传送门字母，内层循环用索引递增+push处理传送链。

## Solution

[SourceCode](./solution.js)
