# [3130] Find All Possible Stable Binary Arrays II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/description/)

* algorithms
* Hard (58.99%)
* Likes:    264
* Dislikes: 30
* Testcase Example:  '1\n1\n2'

```md
You are given 3 positive integers zero, one, and limit.
A binary array arr is called stable if:

The number of occurrences of 0 in arr is exactly zero.
The number of occurrences of 1 in arr is exactly one.
Each subarray of arr with a size greater than limit must contain both 0 and 1.

Return the total number of stable binary arrays.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: zero = 1, one = 1, limit = 2
Output: 2
Explanation:
The two possible stable binary arrays are [1,0] and [0,1].

Example 2:

Input: zero = 1, one = 2, limit = 1
Output: 1
Explanation:
The only possible stable binary array is [1,0,1].

Example 3:

Input: zero = 3, one = 3, limit = 2
Output: 14
Explanation:
All the possible stable binary arrays are [0,0,1,0,1,1], [0,0,1,1,0,1], [0,1,0,0,1,1], [0,1,0,1,0,1], [0,1,0,1,1,0], [0,1,1,0,0,1], [0,1,1,0,1,0], [1,0,0,1,0,1], [1,0,0,1,1,0], [1,0,1,0,0,1], [1,0,1,0,1,0], [1,0,1,1,0,0], [1,1,0,0,1,0], and [1,1,0,1,0,0].


Constraints:

1 <= zero, one, limit <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 zero、one 和 limit，求由恰好 zero 个 0 和 one 个 1 组成的二进制数组中，任意长度超过 limit 的子数组都同时包含 0 和 1 的方案数。结果取模 10^9+7。

## 解题思路

DP：dp0[i][j] 和 dp1[i][j] 分别表示用 i 个 0 和 j 个 1 结尾为 0/1 的方案数。转移：dp0[i][j] = sum_{k=1}^{min(i,limit)} dp1[i-k][j]，dp1 类似。用前缀和优化到 O(zero * one)。
