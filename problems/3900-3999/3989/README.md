# [3989] Maximum Consistent Columns in a Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-consistent-columns-in-a-grid/description/)

* algorithms
* Hard (68.45%)
* Likes:    44
* Dislikes: 4
* Testcase Example:  '[[-2,0,3]]\n2'

```md
You are given a 2D integer array grid of size m x n, and an integer limit.
You may remove zero or more columns from the grid, but at least one column must remain. The relative order of the remaining columns must be preserved.
A grid is called consistent if for every row i, and for every pair of adjacent remaining columns a and b with a < b, the following holds:
grid[i][b] - grid[i][a]
<= limit.
Return the maximum number of columns that can remain such that the resulting grid is consistent.

Example 1:

Input: grid = [[-2,0,3]], limit = 2
Output: 2
Explanation:

Remove column 2 and keep columns 0 and 1, which gives
grid[0][1] &minus; grid[0][0]
=
0 &minus; (&minus;2)
= 2 <= limit.
Thus, the maximum number of columns that can remain is 2.


Example 2:

Input: grid = [[1,-1,1],[2,2,2]], limit = 1
Output: 2
Explanation:

Remove column 1 and keep columns 0 and 2, which gives


grid[0][2] &minus; grid[0][0]
=
1 &minus; 1
= 0 <= limit and

grid[1][2] &minus; grid[1][0]
=
2 &minus; 2
= 0 <= limit.


Thus, the maximum number of columns that can remain is 2.


Example 3:

Input: grid = [[-5,5]], limit = 9
Output: 1
Explanation:

Remove either column 0 or column 1, since
grid[0][1] &minus; grid[0][0]
=
5 &minus; (&minus;5)
= 10 > limit.
Thus, the maximum number of columns that can remain is 1.



Constraints:

1 <= m == grid.length <= 250
1 <= n == grid[i].length <= 250
-105 <= grid[i][j] <= 105
0 <= limit <= 105​​​​​​​​​​​​​​​​


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个大小为 m x n 的二维整数数组 grid 和一个整数 limit。

你可以删除零个或多个列，但必须至少保留一个列。剩余列的相对顺序必须保持不变。

如果一个网格对于每一行 i，以及每一对相邻的剩余列 a 和 b（a < b），都满足 |grid[i][b] - grid[i][a]| <= limit，则称该网格是一致的（consistent）。

（注：LeetCode 页面渲染时绝对值符号 `|` 被吞掉，原始条件实为绝对值差不超过 limit。反例 [[11,8]], limit=0 期望输出 1 可证明。）

返回在结果网格一致的条件下，可以保留的最大列数。

## 解题思路

关键观察：一致性条件只约束**相邻的剩余列**，非相邻列对没有要求。因此问题转化为：

在列序列中选出一个子集（保序），使得子集中每对相邻列 (a, b) 满足：对所有行 i，|grid[i][b] - grid[i][a]| <= limit。即只要"相邻列对"兼容，整组列就一致。

定义列 a 与列 b (a < b) 兼容：对所有行 r，|grid[r][b] - grid[r][a]| <= limit。

预处理所有列对的兼容性，时间 O(n²·m)（250³ ≈ 1560 万次比较，可接受，失败可提前 break）。

然后做类似最长递增子序列的 DP：

- dp[b] = 以列 b 结尾能保留的最大列数
- dp[b] = 1 + max(dp[a])，其中 a < b 且 compat(a, b)；若无则为 1
- 答案 = max(dp)

总复杂度 O(n²·m + n²)，空间 O(n²)。
