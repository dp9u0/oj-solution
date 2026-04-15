# [1420] Build Array Where You Can Find The Maximum Exactly K Comparisons

## Description

[LeetCode Problem Description](https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/description/)

* algorithms
* Hard (65.78%)
* Likes:    1470
* Dislikes: 95
* Testcase Example:  '2\n3\n1'

```md
You are given three integers n, m and k. Consider the following algorithm to find the maximum element of an array of positive integers:

You should build the array arr which has the following properties:

arr has exactly n integers.
1 <= arr[i] <= m where (0 <= i < n).
After applying the mentioned algorithm to arr, the value search_cost is equal to k.

Return the number of ways to build the array arr under the mentioned conditions. As the answer may grow large, the answer must be computed modulo 109 + 7.

Example 1:

Input: n = 2, m = 3, k = 1
Output: 6
Explanation: The possible arrays are [1, 1], [2, 1], [2, 2], [3, 1], [3, 2] [3, 3]

Example 2:

Input: n = 5, m = 2, k = 3
Output: 0
Explanation: There are no possible arrays that satisfy the mentioned conditions.

Example 3:

Input: n = 9, m = 1, k = 1
Output: 1
Explanation: The only possible array is [1, 1, 1, 1, 1, 1, 1, 1, 1]


Constraints:

1 <= n <= 50
1 <= m <= 100
0 <= k <= n


```

## 中文翻译

给定 n, m, k，构建长度为 n 的数组，元素范围 [1, m]，使得用线性扫描找最大值时比较次数（即遇到新最大值的次数）恰好为 k。求满足条件的数组数量，模 10^9+7。

## 解题思路

**动态规划**：定义 dp[i][j][c] 表示前 i 个位置、当前最大值为 j、比较次数为 c 的方案数。

转移：
- 放置的数 ≤ 当前最大值 j：有 j 种选择，dp[i][j][c] += dp[i-1][j][c] * j
- 放置的数 > 当前最大值（变成新最大值 j'）：dp[i][j'][c+1] += dp[i-1][j][c]（对 j < j'）

优化：用前缀和加速第二种转移。

## Solution

[SourceCode](./solution.js)
