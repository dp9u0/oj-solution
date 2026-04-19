# [2454] Next Greater Element IV

## Description

[LeetCode Problem Description](https://leetcode.com/problems/next-greater-element-iv/description/)

* algorithms
* Hard (41.72%)
* Likes:    750
* Dislikes: 12
* Testcase Example:  '[2,4,0,9,6]'

```md
You are given a 0-indexed array of non-negative integers nums. For each integer in nums, you must find its respective second greater integer.
The second greater integer of nums[i] is nums[j] such that:

j > i
nums[j] > nums[i]
There exists exactly one index k such that nums[k] > nums[i] and i < k < j.

If there is no such nums[j], the second greater integer is considered to be -1.

For example, in the array [1, 2, 4, 3], the second greater integer of 1 is 4, 2 is 3,and that of 3 and 4 is -1.

Return an integer array answer, where answer[i] is the second greater integer of nums[i].

Example 1:

Input: nums = [2,4,0,9,6]
Output: [9,6,6,-1,-1]
Explanation:
0th index: 4 is the first integer greater than 2, and 9 is the second integer greater than 2, to the right of 2.
1st index: 9 is the first, and 6 is the second integer greater than 4, to the right of 4.
2nd index: 9 is the first, and 6 is the second integer greater than 0, to the right of 0.
3rd index: There is no integer greater than 9 to its right, so the second greater integer is considered to be -1.
4th index: There is no integer greater than 6 to its right, so the second greater integer is considered to be -1.
Thus, we return [9,6,6,-1,-1].

Example 2:

Input: nums = [3,3]
Output: [-1,-1]
Explanation:
We return [-1,-1] since neither integer has any integer greater than it.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109


```

## 题目翻译

给定一个非负整数数组 nums，对每个元素找到其右侧的"第二大的下一个元素"。即：在 i 右侧，第一个严格大于 nums[i] 的元素之后，第二个严格大于 nums[i] 的元素。如果不存在则返回 -1。

返回数组 answer，answer[i] 为 nums[i] 的第二大的下一个元素。

## 解题思路

**双单调栈**

维护两个单调递减栈（按值从栈底到栈顶递减）：
- s1：等待找到第一个更大元素的索引
- s2：已找到第一个更大，等待找到第二个更大元素的索引

遍历数组，对于每个元素 nums[i]：
1. 将 s2 中所有值小于 nums[i] 的元素弹出，这些元素找到了第二个更大元素，ans = nums[i]
2. 将 s1 中所有值小于 nums[i] 的元素弹出（找到了第一个更大元素），收集到临时数组
3. 将临时数组逆序压入 s2（保持单调递减）
4. 将 i 压入 s1

每个元素最多进出两个栈各一次，总时间 O(n)。

## Solution

[SourceCode](./solution.js)
