# [3429] Paint House IV

## Description

[LeetCode Problem Description](https://leetcode.com/problems/paint-house-iv/description/)

* algorithms
* Medium (45.09%)
* Likes:    123
* Dislikes: 12
* Testcase Example:  '4\n[[3,5,7],[6,2,9],[4,8,1],[7,3,5]]'

```md
You are given an even integer n representing the number of houses arranged in a straight line, and a 2D array cost of size n x 3, where cost[i][j] represents the cost of painting house i with color j + 1.
The houses will look beautiful if they satisfy the following conditions:

No two adjacent houses are painted the same color.
Houses equidistant from the ends of the row are not painted the same color. For example, if n = 6, houses at positions (0, 5), (1, 4), and (2, 3) are considered equidistant.

Return the minimum cost to paint the houses such that they look beautiful.

Example 1:

Input: n = 4, cost = [[3,5,7],[6,2,9],[4,8,1],[7,3,5]]
Output: 9
Explanation:
The optimal painting sequence is [1, 2, 3, 2] with corresponding costs [3, 2, 1, 3]. This satisfies the following conditions:

No adjacent houses have the same color.
Houses at positions 0 and 3 (equidistant from the ends) are not painted the same color (1 != 2).
Houses at positions 1 and 2 (equidistant from the ends) are not painted the same color (2 != 3).

The minimum cost to paint the houses so that they look beautiful is 3 + 2 + 1 + 3 = 9.

Example 2:

Input: n = 6, cost = [[2,4,6],[5,3,8],[7,1,9],[4,6,2],[3,5,7],[8,2,4]]
Output: 18
Explanation:
The optimal painting sequence is [1, 3, 2, 3, 1, 2] with corresponding costs [2, 8, 1, 2, 3, 2]. This satisfies the following conditions:

No adjacent houses have the same color.
Houses at positions 0 and 5 (equidistant from the ends) are not painted the same color (1 != 2).
Houses at positions 1 and 4 (equidistant from the ends) are not painted the same color (3 != 1).
Houses at positions 2 and 3 (equidistant from the ends) are not painted the same color (2 != 3).

The minimum cost to paint the houses so that they look beautiful is 2 + 8 + 1 + 2 + 3 + 2 = 18.


Constraints:

2 <= n <= 105
n is even.
cost.length == n
cost[i].length == 3
0 <= cost[i][j] <= 105


```

## 中文翻译

给定偶数 n 和 n×3 的 cost 矩阵，cost[i][j] 表示将房子 i 涂成颜色 j+1 的花费。要求：相邻房子颜色不同，且对称位置（i 和 n-1-i）颜色也不同。求最小总花费。

## 解题思路

将对称位置 (i, n-1-i) 配对考虑。每对需要选择两个不同颜色 (c1, c2)。同时相邻对之间也不能同色（即第 i 对的颜色 c2 不能和第 i+1 对的颜色 c1 相同）。

DP：dp[i][c1][c2] 表示处理前 i 对、当前对颜色为 (c1, c2) 时的最小花费。转移时枚举下一对的颜色 (c3, c4)，要求 c2 != c3, c3 != c4。复杂度 O(n * 3^4)。

## Solution

[SourceCode](./solution.js)
