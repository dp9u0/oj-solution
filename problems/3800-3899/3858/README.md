# [3858] Minimum Bitwise OR From Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-bitwise-or-from-grid/description/)

* algorithms
* Medium (26.62%)
* Likes:    133
* Dislikes: 3
* Testcase Example:  '[[1,5],[2,4]]'

```md
You are given a 2D integer array grid of size m x n.
You must select exactly one integer from each row of the grid.
Return an integer denoting the minimum possible bitwise OR of the selected integers from each row.

Example 1:

Input: grid = [[1,5],[2,4]]
Output: 3
Explanation:

Choose 1 from the first row and 2 from the second row.
The bitwise OR of 1
2 = 3​​​​​​​, which is the minimum possible.


Example 2:

Input: grid = [[3,5],[6,4]]
Output: 5
Explanation:

Choose 5 from the first row and 4 from the second row.
The bitwise OR of 5
4 = 5​​​​​​​, which is the minimum possible.


Example 3:

Input: grid = [[7,9,8]]
Output: 7
Explanation:

Choosing 7 gives the minimum bitwise OR.



Constraints:

1 <= m == grid.length <= 105
1 <= n == grid[i].length <= 105
m * n <= 105
1 <= grid[i][j] <= 105​​​​​​​


```

## 题目翻译

给定 m*n 矩阵，每行选一个数，使所有选中数的按位 OR 值最小。

## 解题思路

**逐位贪心**：从高位到低位，维护必须为0的位掩码 mask。对每位 b，检查是否每行都有数 v 满足 (v & (mask | (1<<b))) == 0。若可行则更新 mask，否则该位置1加入答案。

## Solution

[SourceCode](./solution.js)
