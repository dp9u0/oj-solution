# [673] Number of Longest Increasing Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/)

* algorithms
* Medium (51.72%)
* Likes:    7313
* Dislikes: 288
* Testcase Example:  '[1,3,5,4,7]'

```md
Given an integer arraynums, return the number of longest increasing subsequences.
Notice that the sequence has to be strictly increasing.

Example 1:

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].

Example 2:

Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of the longest increasing subsequence is 1, and there are 5 increasing subsequences of length 1, so output 5.


Constraints:

1 <= nums.length <= 2000
-106 <= nums[i] <= 106
The answer is guaranteed to fit inside a 32-bit integer.


```

## 题目翻译

给定整数数组 `nums`，返回最长严格递增子序列的个数。

## 解题思路

经典 LIS 变体，需要同时维护长度和个数。

- `lengths[i]`：以 `nums[i]` 结尾的 LIS 长度。
- `counts[i]`：以 `nums[i]` 结尾的 LIS 个数。
- 初始：`lengths[i] = 1, counts[i] = 1`。
- 转移：对于每个 j < i，若 `nums[j] < nums[i]`：
  - 若 `lengths[j] + 1 > lengths[i]`：`lengths[i] = lengths[j] + 1, counts[i] = counts[j]`
  - 若 `lengths[j] + 1 == lengths[i]`：`counts[i] += counts[j]`
- 最终找到最大长度，累加所有达到该长度的 counts。

时间复杂度 O(n^2)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
