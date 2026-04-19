# [1608] Special Array With X Elements Greater Than or Equal X

## Description

[LeetCode Problem Description](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/description/)

* algorithms
* Easy (66.78%)
* Likes:    2347
* Dislikes: 470
* Testcase Example:  '[3,5]'

```md
You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
Notice that x does not have to be an element in nums.
Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

Example 1:

Input: nums = [3,5]
Output: 2
Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

Example 2:

Input: nums = [0,0]
Output: -1
Explanation: No numbers fit the criteria for x.
If x = 0, there should be 0 numbers >= x, but there are 2.
If x = 1, there should be 1 number >= x, but there are 0.
If x = 2, there should be 2 numbers >= x, but there are 0.
x cannot be greater since there are only 2 numbers in nums.

Example 3:

Input: nums = [0,4,3,0,4]
Output: 3
Explanation: There are 3 values that are greater than or equal to 3.


Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000


```

## 中文翻译

给定非负整数数组 nums，若存在数 x 使得数组中恰好有 x 个数 >= x，则称数组为 special。返回 x，不存在则返回 -1。

## 解题思路

降序排序后遍历。排序后 nums[i] 是第 i+1 大的数。若 nums[i] >= i+1 且 (i+1==n 或 nums[i+1] < i+1)，则 x = i+1。

## Solution

[SourceCode](./solution.js)
