# [421] Maximum XOR of Two Numbers in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/description/)

* algorithms
* Medium (53.40%)
* Likes:    5940
* Dislikes: 424
* Testcase Example:  '[3,10,5,25,2,8]'

```md
Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.

Example 1:

Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.

Example 2:

Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127


Constraints:

1 <= nums.length <= 2 * 105
0 <= nums[i] <= 231 - 1


```

## 翻译

给定一个非负整数数组 `nums`，返回 `nums[i] XOR nums[j]` 的最大值。

## Approach

贪心 + 前缀集：从高位到低位逐位确定最大异或值。维护当前结果 `result`，对于第 i 位，试探 `result | (1 << i)` 是否可行。将每个数的高 i 位前缀放入集合，检查是否存在两个前缀的异或等于 `result | (1 << i)`。

时间复杂度 O(31n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
