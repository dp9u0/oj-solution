# [2733] Neither Minimum nor Maximum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/neither-minimum-nor-maximum/description/)

* algorithms
* Easy (76.36%)
* Likes:    406
* Dislikes: 20
* Testcase Example:  '[3,2,1,4]'

```md
Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.
Return the selected integer.

Example 1:

Input: nums = [3,2,1,4]
Output: 2
Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.

Example 2:

Input: nums = [1,2]
Output: -1
Explanation: Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.

Example 3:

Input: nums = [2,1,3]
Output: 2
Explanation: Since 2 is neither the maximum nor the minimum value in nums, it is the only valid answer.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
All values in nums are distinct


```

## Solution

[SourceCode](./solution.js)

## 翻译

给定一个包含不同正整数的数组 nums，找出并返回数组中既不是最小值也不是最大值的任意一个数。如果不存在这样的数，返回 -1。

## 解题思路

如果数组长度 ≤ 2，返回 -1。否则只需取前三个元素，其中必然有一个既不是三者最小也不是三者最大的，即为答案。O(1) 时间复杂度。
