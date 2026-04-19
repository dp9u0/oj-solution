# [1991] Find the Middle Index in Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-middle-index-in-array/description/)

* algorithms
* Easy (69.39%)
* Likes:    1574
* Dislikes: 80
* Testcase Example:  '[2,3,-1,8,4]'

```md
Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).
A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].
If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.
Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

Example 1:

Input: nums = [2,3,-1,8,4]
Output: 3
Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
The sum of the numbers after index 3 is: 4 = 4

Example 2:

Input: nums = [1,-1,4]
Output: 2
Explanation: The sum of the numbers before index 2 is: 1 + -1 = 0
The sum of the numbers after index 2 is: 0

Example 3:

Input: nums = [2,5]
Output: -1
Explanation: There is no valid middleIndex.


Constraints:

1 <= nums.length <= 100
-1000 <= nums[i] <= 1000


Note: This question is the same as724:https://leetcode.com/problems/find-pivot-index/

```

## 中文翻译

给定数组 nums，找到最左侧的中间索引，使得左侧元素之和等于右侧元素之和。不存在返回 -1。

## 解题思路

前缀和。先算总和，遍历时维护左侧和 leftSum，右侧和 = total - leftSum - nums[i]。

## Solution

[SourceCode](./solution.js)
