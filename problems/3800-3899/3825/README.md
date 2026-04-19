# [3825] Longest Strictly Increasing Subsequence With Non-Zero Bitwise AND

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-strictly-increasing-subsequence-with-non-zero-bitwise-and/description/)

* algorithms
* Medium (50.61%)
* Likes:    104
* Dislikes: 2
* Testcase Example:  '[5,4,7]'

```md
You are given an integer array nums.
Return the length of the longest strictly increasing subsequence in nums whose bitwise AND is non-zero. If no such subsequence exists, return 0.

Example 1:

Input: nums = [5,4,7]
Output: 2
Explanation:
One longest strictly increasing subsequence is [5, 7]. The bitwise AND is 5 AND 7 = 5, which is non-zero.

Example 2:

Input: nums = [2,3,6]
Output: 3
Explanation:
The longest strictly increasing subsequence is [2, 3, 6]. The bitwise AND is 2 AND 3 AND 6 = 2, which is non-zero.

Example 3:

Input: nums = [0,1]
Output: 1
Explanation:
One longest strictly increasing subsequence is [1]. The bitwise AND is 1, which is non-zero.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109​​​​​​​


```

## 翻译

给定整数数组，返回按位AND非零的最长严格递增子序列长度。

## 解题思路

AND非零意味着至少有一个bit位在所有子序列元素中都被设置。对每个bit位(0-30)独立处理：过滤出该位为1的元素，求其LIS长度（O(n log n)贪心二分法），取所有位的最大值。

## Solution

[SourceCode](./solution.js)
