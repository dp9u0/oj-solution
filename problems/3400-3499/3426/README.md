# [3426] Manhattan Distances of All Arrangements of Pieces

## Description

[LeetCode Problem Description](https://leetcode.com/problems/manhattan-distances-of-all-arrangements-of-pieces/description/)

* algorithms
* Hard (35.25%)
* Likes:    41
* Dislikes: 11
* Testcase Example:  '2\n2\n2'

```md
You are given three integers m, n, and k.
There is a rectangular grid of size m &times; n containing k identical pieces. Return the sum of Manhattan distances between every pair of pieces over all valid arrangements of pieces.
A valid arrangement is a placement of all k pieces on the grid with at most one piece per cell.
Since the answer may be very large, return it modulo 109 + 7.
The Manhattan Distance between two cells (xi, yi) and (xj, yj) is
xi - xj
+
yi - yj
.

Example 1:

Input: m = 2, n = 2, k = 2
Output: 8
Explanation:
The valid arrangements of pieces on the board are:


In the first 4 arrangements, the Manhattan distance between the two pieces is 1.
In the last 2 arrangements, the Manhattan distance between the two pieces is 2.

Thus, the total Manhattan distance across all valid arrangements is 1 + 1 + 1 + 1 + 2 + 2 = 8.

Example 2:

Input: m = 1, n = 4, k = 3
Output: 20
Explanation:
The valid arrangements of pieces on the board are:


The first and last arrangements have a total Manhattan distance of 1 + 1 + 2 = 4.
The middle two arrangements have a total Manhattan distance of 1 + 2 + 3 = 6.

The total Manhattan distance between all pairs of pieces across all arrangements is 4 + 6 + 6 + 4 = 20.


Constraints:

1 <= m, n <= 105
2 <= m * n <= 105
2 <= k <= m * n


```

## 中文翻译

给定 m×n 网格和 k 个相同棋子，求所有合法放置方案中每对棋子曼哈顿距离之和。每个格子最多放一个棋子。

约束：m, n <= 10^5, m*n <= 10^5, k <= m*n

## 解题思路

**组合计数 + 线性分解**

1. 对任意两个格子，包含它们的方案数为 C(mn-2, k-2)（相同）。
2. 总答案 = C(mn-2, k-2) × 所有格子对的曼哈顿距离之和。
3. 曼哈顿距离按行/列分解：|r1-r2| + |c1-c2|。
4. 行贡献 = n^2 × sum_{d=1}^{m-1} d×(m-d) = n^2 × m(m-1)(m+1)/6。
5. 列贡献 = m^2 × n(n-1)(n+1)/6。
6. 预处理阶乘和逆元计算组合数，注意 BigInt 防溢出。

## Solution

[SourceCode](./solution.js)
