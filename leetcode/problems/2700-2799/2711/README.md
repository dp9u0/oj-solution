# [2711] Difference of Number of Distinct Values on Diagonals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/description/)

* algorithms
* Medium (68.37%)
* Likes:    143
* Dislikes: 211
* Testcase Example:  '[[1,2,3],[3,1,5],[3,2,1]]'

```md
Given a 2D grid of size m x n, you should find the matrix answer of size m x n.
The cell answer[r][c] is calculated by looking at the diagonal values of the cell grid[r][c]:

Let leftAbove[r][c] be the number of distinct values on the diagonal to the left and above the cell grid[r][c] not including the cell grid[r][c] itself.
Let rightBelow[r][c] be the number of distinct values on the diagonal to the right and below the cell grid[r][c], not including the cell grid[r][c] itself.
Then answer[r][c] =
leftAbove[r][c] - rightBelow[r][c]
.

A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until the end of the matrix is reached.

For example, in the below diagram the diagonal is highlighted using the cell with indices (2, 3) colored gray:

Red-colored cells are left and above the cell.
Blue-colored cells are right and below the cell.




Return the matrix answer.

Example 1:

Input: grid = [[1,2,3],[3,1,5],[3,2,1]]
Output: Output: [[1,1,0],[1,0,1],[0,1,1]]
Explanation:
To calculate the answer cells:



answer
left-above elements
leftAbove
right-below elements
rightBelow

leftAbove - rightBelow





[0][0]
[]
0
[grid[1][1], grid[2][2]]

{1, 1}
= 1
1


[0][1]
[]
0
[grid[1][2]]

{5}
= 1
1


[0][2]
[]
0
[]
0
0


[1][0]
[]
0
[grid[2][1]]

{2}
= 1
1


[1][1]
[grid[0][0]]

{1}
= 1
[grid[2][2]]

{1}
= 1
0


[1][2]
[grid[0][1]]

{2}
= 1
[]
0
1


[2][0]
[]
0
[]
0
0


[2][1]
[grid[1][0]]

{3}
= 1
[]
0
1


[2][2]
[grid[0][0], grid[1][1]]

{1, 1}
= 1
[]
0
1




Example 2:

Input: grid = [[1]]
Output: Output: [[0]]


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n, grid[i][j] <= 50


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 m×n 矩阵，对每个格子 (r,c)，计算左上对角线不同值数 - 右下对角线不同值数。

## 解题思路

**Approach: 沿对角线遍历 + Set**

1. 枚举每条对角线（从第一行和第一列出发）
2. 从左上到右下遍历，用 Set 累积已见值，记录 topLeft[r][c]
3. 从右下到左上遍历，用 Set 累积已见值，记录 bottomRight[r][c]
4. answer[r][c] = topLeft[r][c] - bottomRight[r][c]
5. 时间 O(m*n)，空间 O(m*n)
