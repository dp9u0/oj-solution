# [1814] Count Nice Pairs in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-nice-pairs-in-an-array/description/)

* algorithms
* Medium (48.44%)
* Likes:    2051
* Dislikes: 93
* Testcase Example:  '[42,11,1,97]'

```md
You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions:

0 <= i < j < nums.length
nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])

Return the number of nice pairs of indices. Since that number can be too large, return it modulo 109 + 7.

Example 1:

Input: nums = [42,11,1,97]
Output: 2
Explanation: The two pairs are:
- (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121.
- (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12.

Example 2:

Input: nums = [13,10,35,24,76]
Output: 4


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109


```

## 翻译

给定非负整数数组 nums，rev(x) 是 x 反转后的数（如 rev(120) = 21）。一对索引 (i, j) 是 nice pair 当 `nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])`。返回 nice pairs 的数量，模 10^9+7。

## Approach

变换条件：`nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])`。所以对每个数计算 `nums[i] - rev(nums[i])` 的差值，用哈希表统计相同差值的出现次数，对每个差值 count，配对数为 count*(count-1)/2。

## Solution

[SourceCode](./solution.js)
