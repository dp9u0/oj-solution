# [3423] Maximum Difference Between Adjacent Elements in a Circular Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/description/)

* algorithms
* Easy (75.65%)
* Likes:    333
* Dislikes: 7
* Testcase Example:  '[1,2,4]'

```md
Given a circular array nums, find the maximum absolute difference between adjacent elements.
Note: In a circular array, the first and last elements are adjacent.

Example 1:

Input: nums = [1,2,4]
Output: 3
Explanation:
Because nums is circular, nums[0] and nums[2] are adjacent. They have the maximum absolute difference of
4 - 1
= 3.

Example 2:

Input: nums = [-5,-10,-5]
Output: 5
Explanation:
The adjacent elements nums[0] and nums[1] have the maximum absolute difference of
-5 - (-10)
= 5.


Constraints:

2 <= nums.length <= 100
-100 <= nums[i] <= 100


```

## 中文翻译

给定环形数组，求相邻元素之间最大绝对差值（首尾也视为相邻）。

## 解题思路

遍历数组，对每对相邻元素（包括首尾）计算绝对差，取最大值。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
