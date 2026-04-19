# [2567] Minimum Score by Changing Two Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-score-by-changing-two-elements/description/)

* algorithms
* Medium (49.84%)
* Likes:    272
* Dislikes: 273
* Testcase Example:  '[1,4,7,8,5]'

```md
You are given an integer array nums.

The low score of nums is the minimum absolute difference between any two integers.
The high score of nums is the maximum absolute difference between any two integers.
The score of nums is the sum of the high and low scores.

Return the minimum score after changing two elements of nums.

Example 1:

Input: nums = [1,4,7,8,5]
Output: 3
Explanation:

Change nums[0] and nums[1] to be 6 so that nums becomes [6,6,7,8,5].
The low score is the minimum absolute difference:
6 - 6
= 0.
The high score is the maximum absolute difference:
8 - 5
= 3.
The sum of high and low score is 3.


Example 2:

Input: nums = [1,4,3]
Output: 0
Explanation:

Change nums[1] and nums[2] to 1 so that nums becomes [1,1,1].
The sum of maximum absolute difference and minimum absolute difference is 0.



Constraints:

3 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 翻译

给定整数数组 nums。low score 是任意两个元素的最小绝对差，high score 是最大绝对差，score = low + high。可以修改两个元素的值为任意值，返回最小的 score。

## Approach

修改两个元素后，low score 可以变为 0（将两个元素改为相同值）。所以 score = high score = max - min。关键是最小化 high score：排序后考虑移除两个极端值。三种策略：移除两个最大值、移除两个最小值、移除一个最大一个最小。答案为 `min(nums[n-3]-nums[0], nums[n-2]-nums[1], nums[n-1]-nums[2])`。

## Solution

[SourceCode](./solution.js)
