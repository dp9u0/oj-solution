# [3300] Minimum Element After Replacement With Digit Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/description/)

* algorithms
* Easy (84.68%)
* Likes:    102
* Dislikes: 4
* Testcase Example:  '[10,12,13,14]'

```md
You are given an integer array nums.
You replace each element in nums with the sum of its digits.
Return the minimum element in nums after all replacements.

Example 1:

Input: nums = [10,12,13,14]
Output: 1
Explanation:
nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1.

Example 2:

Input: nums = [1,2,3,4]
Output: 1
Explanation:
nums becomes [1, 2, 3, 4] after all replacements, with minimum element 1.

Example 3:

Input: nums = [999,19,199]
Output: 10
Explanation:
nums becomes [27, 10, 19] after all replacements, with minimum element 10.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 104


```

## 中文翻译

将数组中每个元素替换为其各位数字之和，返回替换后的最小元素。

## 解题思路

遍历数组，对每个数求各位数字之和，取最小值。

## Solution

[SourceCode](./solution.js)
