# [3336] Find the Number of Subsequences With Equal GCD

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/description/)

* algorithms
* Hard (31.52%)
* Likes:    88
* Dislikes: 9
* Testcase Example:  '[1,2,3,4]'

```md
You are given an integer array nums.
Your task is to find the number of pairs of non-empty subsequences (seq1, seq2) of nums that satisfy the following conditions:

The subsequences seq1 and seq2 are disjoint, meaning no index of nums is common between them.
The GCD of the elements of seq1 is equal to the GCD of the elements of seq2.

Return the total number of such pairs.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: nums = [1,2,3,4]
Output: 10
Explanation:
The subsequence pairs which have the GCD of their elements equal to 1 are:

([1, 2, 3, 4], [1, 2, 3, 4])
([1, 2, 3, 4], [1, 2, 3, 4])
([1, 2, 3, 4], [1, 2, 3, 4])
([1, 2, 3, 4], [1, 2, 3, 4])
([1, 2, 3, 4], [1, 2, 3, 4])
([1, 2, 3, 4], [1, 2, 3, 4])
([1, 2, 3, 4], [1, 2, 3, 4])
([1, 2, 3, 4], [1, 2, 3, 4])
([1, 2, 3, 4], [1, 2, 3, 4])
([1, 2, 3, 4], [1, 2, 3, 4])


Example 2:

Input: nums = [10,20,30]
Output: 2
Explanation:
The subsequence pairs which have the GCD of their elements equal to 10 are:

([10, 20, 30], [10, 20, 30])
([10, 20, 30], [10, 20, 30])


Example 3:

Input: nums = [1,1,1,1]
Output: 50


Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 200


```

## 题目翻译

给定数组 nums，求不相交非空子序列对 (seq1, seq2) 的数量，满足 GCD(seq1) == GCD(seq2)。结果对 10^9+7 取模。

## 解题思路

**DP + GCD 预处理**

每个元素有 3 种选择：放入 seq1、放入 seq2、不选。定义 dp[g1][g2] = 方案数，其中 g1=0 表示 seq1 为空，g1>0 表示 GCD 值。

转移：对每个元素 x，dp[g1][g2] 贡献给：
- 不选：ndp[g1][g2]
- 放 seq1：ndp[gcd(g1,x)][g2]（g1=0 时为 x）
- 放 seq2：ndp[g1][gcd(g2,x)]

答案 = sum(dp[g][g]) for g >= 1。

预计算 GCD 表优化。O(n * V^2) 时间，V=200。

## Solution

[SourceCode](./solution.js)
