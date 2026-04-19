# [3098] Find the Sum of Subsequence Powers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/description/)

* algorithms
* Hard (25.07%)
* Likes:    148
* Dislikes: 6
* Testcase Example:  '[1,2,3,4]\n3'

```md
You are given an integer array nums of length n, and a positive integer k.
The power of a subsequence is defined as the minimum absolute difference between any two elements in the subsequence.
Return the sum of powers of all subsequences of nums which have length equal to k.
Since the answer may be large, return it modulo 109 + 7.

Example 1:

Input: nums = [1,2,3,4], k = 3
Output: 4
Explanation:
There are 4 subsequences in nums which have length 3: [1,2,3], [1,3,4], [1,2,4], and [2,3,4]. The sum of powers is
2 - 3
+
3 - 4
+
2 - 1
+
3 - 4
= 4.

Example 2:

Input: nums = [2,2], k = 2
Output: 0
Explanation:
The only subsequence in nums which has length 2 is[2,2]. The sum of powers is
2 - 2
= 0.

Example 3:

Input: nums = [4,3,-1], k = 2
Output: 10
Explanation:
There are 3 subsequences in nums which have length 2: [4,3], [4,-1], and [3,-1]. The sum of powers is
4 - 3
+
4 - (-1)
+
3 - (-1)
= 10.


Constraints:

2 <= n == nums.length <= 50
-108 <= nums[i] <= 108
2 <= k <= n


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定长度为 n 的整数数组 nums 和正整数 k。子序列的 power 定义为子序列中任意两个元素之间的最小绝对差。返回所有长度为 k 的子序列的 power 之和，结果对 10^9+7 取模。

## 解题思路

排序 + 枚举最小差值 + DP 计数。排序后，枚举所有可能的最小差值 d（即所有 |nums[i]-nums[j]| 的值）。对于每个 d，用 DP 计算相邻差都 ≥ d 的长度为 k 的子序列数。用容斥原理：count(最小差==d) = count(最小差≥d) - count(最小差>d)。对 d 排序后，相邻 d 值的差值即为贡献。
