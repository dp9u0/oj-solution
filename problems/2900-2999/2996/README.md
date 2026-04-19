# [2996] Smallest Missing Integer Greater Than Sequential Prefix Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/description/)

* algorithms
* Easy (35.32%)
* Likes:    183
* Dislikes: 312
* Testcase Example:  '[1,2,3,2,5]'

```md
You are given a 0-indexed array of integers nums.
A prefix nums[0..i] is sequential if, for all 1 <= j <= i, nums[j] = nums[j - 1] + 1. In particular, the prefix consisting only of nums[0] is sequential.
Return the smallest integer x missing from nums such that x is greater than or equal to the sum of the longest sequential prefix.

Example 1:

Input: nums = [1,2,3,2,5]
Output: 6
Explanation: The longest sequential prefix of nums is [1,2,3] with a sum of 6. 6 is not in the array, therefore 6 is the smallest missing integer greater than or equal to the sum of the longest sequential prefix.

Example 2:

Input: nums = [3,4,5,1,12,14,13]
Output: 15
Explanation: The longest sequential prefix of nums is [3,4,5] with a sum of 12. 12, 13, and 14 belong to the array while 15 does not. Therefore 15 is the smallest missing integer greater than or equal to the sum of the longest sequential prefix.


Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 50


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定一个 0-indexed 整数数组 `nums`。前缀 `nums[0..i]` 是"连续的"，当对于所有 `1 <= j <= i`，`nums[j] = nums[j - 1] + 1`。特别地，仅包含 `nums[0]` 的前缀也是连续的。返回数组中缺失的最小整数 `x`，使得 `x` 大于等于最长连续前缀的和。

### 解题思路

1. 从头遍历找到最长连续前缀，同时累加求和 `sum`
2. 将数组元素放入 Set 中
3. 从 `sum` 开始递增，找到第一个不在 Set 中的整数即为答案
