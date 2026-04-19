# [1895] Largest Magic Square

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-magic-square/description/)

* algorithms
* Medium (75.25%)
* Likes:    609
* Dislikes: 334
* Testcase Example:  '[[7,1,4,5,6],[2,5,1,6,4],[1,5,4,3,2],[1,2,7,3,4]]'

```md
A k x k magic square is a k x k grid filled with integers such that every row sum, every column sum, and both diagonal sums are all equal. The integers in the magic square do not have to be distinct. Every 1 x 1 grid is trivially a magic square.
Given an m x n integer grid, return the size (i.e., the side length k) of the largest magic square that can be found within this grid.

Example 1:


Input: grid = [[7,1,4,5,6],[2,5,1,6,4],[1,5,4,3,2],[1,2,7,3,4]]
Output: 3
Explanation: The largest magic square has a size of 3.
Every row sum, column sum, and diagonal sum of this magic square is equal to 12.
- Row sums: 5+1+6 = 5+4+3 = 2+7+3 = 12
- Column sums: 5+5+2 = 1+4+7 = 6+3+3 = 12
- Diagonal sums: 5+4+3 = 6+4+2 = 12

Example 2:


Input: grid = [[5,1,3,1],[9,3,3,1],[1,3,3,8]]
Output: 2


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
1 <= grid[i][j] <= 106


```

## 题目翻译

k x k 幻方是指每行、每列、两条对角线的和都相等的 k x k 网格。给定 m x n 整数网格，返回其中能找到的最大幻方的边长 k。

## 解题思路

**前缀和 + 枚举**。

1. 预处理二维前缀和，快速计算任意子矩阵的和。
2. 从大到小枚举 k（从 min(m, n) 到 1），对于每个 k 枚举所有 k x k 子方阵。
3. 对每个子方阵，检查所有行和、列和、对角线和是否相等。
4. 利用前缀和 O(1) 计算每行/列的和。

时间复杂度 O(min(m,n) * m * n * min(m,n))，对于 m, n <= 50 完全可行。

## Solution

[SourceCode](./solution.js)
