# [3287] Find the Maximum Sequence Value of Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/description/)

* algorithms
* Hard (21.39%)
* Likes:    89
* Dislikes: 9
* Testcase Example:  '[2,6,7]\n1'

```md
You are given an integer array nums and a positive integer k.
The value of a sequence seq of size 2 * x is defined as:

(seq[0] OR seq[1] OR ... OR seq[x - 1]) XOR (seq[x] OR seq[x + 1] OR ... OR seq[2 * x - 1]).

Return the maximum value of any subsequence of nums having size 2 * k.

Example 1:

Input: nums = [2,6,7], k = 1
Output: 5
Explanation:
The subsequence [2, 7] has the maximum value of 2 XOR 7 = 5.

Example 2:

Input: nums = [4,2,5,6,7], k = 2
Output: 2
Explanation:
The subsequence [4, 5, 6, 7] has the maximum value of (4 OR 5) XOR (6 OR 7) = 2.


Constraints:

2 <= nums.length <= 400
1 <= nums[i] < 27
1 <= k <= nums.length / 2


```

## 题目翻译

给定整数数组 nums 和正整数 k。子序列 seq（长度 2k）的值定义为：前 k 个元素的 OR 值 XOR 后 k 个元素的 OR 值。返回所有长度 2k 的子序列中的最大值。

约束：n ≤ 400，nums[i] < 2^7。

## 解题思路

**前后缀 DP + OR 值枚举**

关键：nums[i] < 2^7，OR 值范围仅 0~127，可以用 bitset 做 DP。

1. 预处理 `left[i]`：从 nums[0..i-1] 中选 k 个元素的所有可能 OR 值集合
2. 预处理 `right[i]`：从 nums[i..n-1] 中选 k 个元素的所有可能 OR 值集合
3. 枚举分割点 i (k ≤ i ≤ n-k)，对 left[i] 和 right[i] 中所有值对求 XOR 最大值

DP 状态转移：dp[j][v|nums[idx]] = 1 if dp[j-1][v] = 1，逆序更新 j 避免覆盖。

时间 O(n·k·M + n·M²)，M=128。空间 O(n·M)。

## Solution

[SourceCode](./solution.js)
