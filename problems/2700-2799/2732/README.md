# [2732] Find a Good Subset of the Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/description/)

* algorithms
* Hard (46.76%)
* Likes:    213
* Dislikes: 30
* Testcase Example:  '[[0,1,1,0],[0,0,0,1],[1,1,1,1]]'

```md
You are given a 0-indexed m x n binary matrix grid.
Let us call a non-empty subset of rows good if the sum of each column of the subset is at most half of the length of the subset.
More formally, if the length of the chosen subset of rows is k, then the sum of each column should be at most floor(k / 2).
Return an integer array that contains row indices of a good subset sorted in ascending order.
If there are multiple good subsets, you can return any of them. If there are no good subsets, return an empty array.
A subset of rows of the matrix grid is any matrix that can be obtained by deleting some (possibly none or all) rows from grid.

Example 1:

Input: grid = [[0,1,1,0],[0,0,0,1],[1,1,1,1]]
Output: [0,1]
Explanation: We can choose the 0th and 1st rows to create a good subset of rows.
The length of the chosen subset is 2.
- The sum of the 0thcolumn is 0 + 0 = 0, which is at most half of the length of the subset.
- The sum of the 1stcolumn is 1 + 0 = 1, which is at most half of the length of the subset.
- The sum of the 2ndcolumn is 1 + 0 = 1, which is at most half of the length of the subset.
- The sum of the 3rdcolumn is 0 + 1 = 1, which is at most half of the length of the subset.

Example 2:

Input: grid = [[0]]
Output: [0]
Explanation: We can choose the 0th row to create a good subset of rows.
The length of the chosen subset is 1.
- The sum of the 0thcolumn is 0, which is at most half of the length of the subset.

Example 3:

Input: grid = [[1,1,1],[1,1,1]]
Output: []
Explanation: It is impossible to choose any subset of rows to create a good subset.


Constraints:

m == grid.length
n == grid[i].length
1 <= m <= 104
1 <= n <= 5
grid[i][j] is either 0 or 1.


```

## 翻译

给定 m×n 的 0-1 矩阵，找行的子集使得每列的和不超过子集长度的一半（向下取整），返回排序后的行索引。

## 解题思路

n<=5，每行可用 5 位 mask 表示（最多 32 种）。k=1 找全零行；k=2 找 AND=0 的两行；k>=3 用 DFS 枚举 mask 的多重集，列和限制为 floor(k/2)，剪枝：每个 mask 最多用 min(数量, 剩余, 列剩余容量)。从 k=1 递增尝试，首个满足的即为答案。

## Solution

[SourceCode](./solution.js)
