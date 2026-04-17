# [1970] Last Day Where You Can Still Cross

## Description

[LeetCode Problem Description](https://leetcode.com/problems/last-day-where-you-can-still-cross/description/)

* algorithms
* Hard (68.65%)
* Likes:    2384
* Dislikes: 48
* Testcase Example:  '2\n2\n[[1,1],[2,1],[1,2],[2,2]]'

```md
There is a 1-based binary matrix where 0 represents land and 1 represents water. You are given integers row and col representing the number of rows and columns in the matrix, respectively.
Initially on day 0, the entire matrix is land. However, each day a new cell becomes flooded with water. You are given a 1-based 2D array cells, where cells[i] = [ri, ci] represents that on the ith day, the cell on the rith row and cith column (1-based coordinates) will be covered with water (i.e., changed to 1).
You want to find the last day that it is possible to walk from the top to the bottom by only walking on land cells. You can start from any cell in the top row and end at any cell in the bottom row. You can only travel in the four cardinal directions (left, right, up, and down).
Return the last day where it is possible to walk from the top to the bottom by only walking on land cells.

Example 1:


Input: row = 2, col = 2, cells = [[1,1],[2,1],[1,2],[2,2]]
Output: 2
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 2.

Example 2:


Input: row = 2, col = 2, cells = [[1,1],[1,2],[2,1],[2,2]]
Output: 1
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 1.

Example 3:


Input: row = 3, col = 3, cells = [[1,2],[2,1],[3,3],[2,2],[1,1],[1,3],[2,3],[3,2],[3,1]]
Output: 3
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 3.


Constraints:

2 <= row, col <= 2 * 104
4 <= row * col <= 2 * 104
cells.length == row * col
1 <= ri <= row
1 <= ci <= col
All the values of cells are unique.


```

## 题目翻译

row x col 矩阵初始全为陆地(0)，每天一个格子变为水(1)。求最后一天仍能从第一行走到最后一行（仅走陆地，四方向）。

## 解题思路

**二分答案 + BFS 连通性检查**

对天数 d 二分，check(d) 将前 d 个格子标为水后 BFS 判断顶行是否连通底行。天数具有单调性：某天不能过则之后也不能。二分 O(log n) 次 BFS，每次 O(row*col)。

## Solution

[SourceCode](./solution.js)
