# [3082] Find the Sum of the Power of All Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/description/)

* algorithms
* Hard (38.18%)
* Likes:    168
* Dislikes: 4
* Testcase Example:  '[1,2,3]\n3'

```md
You are given an integer array nums of length n and a positive integer k.
The power of an array of integers is defined as the number of subsequences with their sum equal to k.
Return the sum of power of all subsequences of nums.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input:   nums = [1,2,3], k = 3
Output:   6
Explanation:
There are 5 subsequences of nums with non-zero power:

The subsequence [1,2,3] has 2 subsequences with sum == 3: [1,2,3] and [1,2,3].
The subsequence [1,2,3] has 1 subsequence with sum == 3: [1,2,3].
The subsequence [1,2,3] has 1 subsequence with sum == 3: [1,2,3].
The subsequence [1,2,3] has 1 subsequence with sum == 3: [1,2,3].
The subsequence [1,2,3] has 1 subsequence with sum == 3: [1,2,3].

Hence the answer is 2 + 1 + 1 + 1 + 1 = 6.

Example 2:

Input:   nums = [2,3,3], k = 5
Output:   4
Explanation:
There are 3 subsequences of nums with non-zero power:

The subsequence [2,3,3] has 2 subsequences with sum == 5: [2,3,3] and [2,3,3].
The subsequence [2,3,3] has 1 subsequence with sum == 5: [2,3,3].
The subsequence [2,3,3] has 1 subsequence with sum == 5: [2,3,3].

Hence the answer is 2 + 1 + 1 = 4.

Example 3:

Input:   nums = [1,2,3], k = 7
Output:   0
Explanation:There exists no subsequence with sum 7. Hence all subsequences of nums have power = 0.


Constraints:

1 <= n <= 100
1 <= nums[i] <= 104
1 <= k <= 100


```

## 中文翻译

给定数组 nums 和正整数 k。数组的"power"定义为该数组中和为 k 的子序列个数。返回 nums 的所有子序列的 power 之和，对 10^9+7 取模。

约束：n <= 100, k <= 100

## 解题思路

**DP**

1. 转化：对每个元素，它在"外层子序列"中要么被选中（属于子序列），要么不被选中。对于被选中的元素，它们构成了"内层子序列"。
2. 设 dp[i][s] = 考虑前 i 个元素后，被选入外层子序列的元素中，内层子序列和为 s 的方案数。
3. 对于第 i 个元素（值 v）：
   - 不加入外层子序列：2^(i-1) 种外层方案（每个之前的元素选或不选都不影响），dp 不变但贡献 2 倍。
   - 加入外层子序列但不加入内层子序列：dp[i][s] += dp[i-1][s]
   - 加入外层子序列且加入内层子序列：dp[i][s+v] += dp[i-1][s]
4. 更准确地说：dp[i][s] 表示从 nums[0..i-1] 中选出一个子序列，该子序列中和为 s 的子子序列的个数。

## Solution

[SourceCode](./solution.js)
