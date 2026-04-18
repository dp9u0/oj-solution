# [1848] Minimum Distance to the Target Element

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-distance-to-the-target-element/description/)

* algorithms
* Easy (54.33%)
* Likes:    627
* Dislikes: 86
* Testcase Example:  '[1,2,3,4,5]\n5\n3'

```md
Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note thatabs(x)is the absolute value of x.
Return abs(i - start).
It is guaranteed that target exists in nums.

Example 1:

Input: nums = [1,2,3,4,5], target = 5, start = 3
Output: 1
Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.

Example 2:

Input: nums = [1], target = 1, start = 0
Output: 0
Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.

Example 3:

Input: nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
Output: 0
Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 104
0 <= start < nums.length
target is in nums.


```

## 翻译

给定数组nums、target和start，找nums[i]==target使|i-start|最小，返回最小距离。

## 解题思路

遍历数组，遇到target更新最小|i-start|，提前终止于0。

## Solution

[SourceCode](./solution.js)
