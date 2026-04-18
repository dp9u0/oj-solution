# [1799] Maximize Score After N Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-score-after-n-operations/description/)

* algorithms
* Hard (57.96%)
* Likes:    1718
* Dislikes: 114
* Testcase Example:  '[1,2]'

```md
You are given nums, an array of positive integers of size 2 * n. You must perform n operations on this array.
In the ith operation (1-indexed), you will:

Choose two elements, x and y.
Receive a score of i * gcd(x, y).
Remove x and y from nums.

Return the maximum score you can receive after performing n operations.
The function gcd(x, y) is the greatest common divisor of x and y.

Example 1:

Input: nums = [1,2]
Output: 1
Explanation:The optimal choice of operations is:
(1 * gcd(1, 2)) = 1

Example 2:

Input: nums = [3,4,6,8]
Output: 11
Explanation:The optimal choice of operations is:
(1 * gcd(3, 6)) + (2 * gcd(4, 8)) = 3 + 8 = 11

Example 3:

Input: nums = [1,2,3,4,5,6]
Output: 14
Explanation:The optimal choice of operations is:
(1 * gcd(1, 5)) + (2 * gcd(2, 4)) + (3 * gcd(3, 6)) = 1 + 4 + 9 = 14


Constraints:

1 <= n <= 7
nums.length == 2 * n
1 <= nums[i] <= 106


```

## 中文翻译

给定大小为 2n 的正整数数组 nums。执行 n 次操作，第 i 次操作（从1开始）：选择两个元素 x 和 y，获得 i * gcd(x, y) 的分数，然后移除它们。求最大总分。

约束：n <= 7，nums.length == 2n，nums[i] <= 10^6

## 解题思路

**状态压缩 DP**

1. n <= 7，数组最多 14 个元素，用 bitmask 表示已使用的元素。
2. dp[mask] = 已使用 mask 中元素时的最大分数。
3. 每步从 mask 中已用元素数量推算当前操作编号 op = popcount(mask) / 2 + 1。
4. 枚举两个未使用的元素 i, j，转移：dp[mask | (1<<i) | (1<<j)] = max(dp[mask] + op * gcd(nums[i], nums[j]))。
5. 预计算所有对的 gcd 加速。时间 O(2^14 * 7^2)。

## Solution

[SourceCode](./solution.js)
