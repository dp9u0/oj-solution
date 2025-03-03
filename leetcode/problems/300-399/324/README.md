# [324] Wiggle Sort II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/wiggle-sort-ii/description/)

* algorithms
* Medium (35.01%)
* Likes:    3136
* Dislikes: 973
* Testcase Example:  '[1,5,1,1,6,4]'

```md
Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
You may assume the input array always has a valid answer.

Example 1:

Input: nums = [1,5,1,1,6,4]
Output: [1,6,1,5,1,4]
Explanation: [1,4,1,5,1,6] is also accepted.

Example 2:

Input: nums = [1,3,2,2,3,1]
Output: [2,3,1,3,1,2]


Constraints:

1 <= nums.length <= 5 * 104
0 <= nums[i] <= 5000
It is guaranteed that there will be an answer for the given input nums.


Follow Up: Can you do it in O(n) time and/or in-place with O(1) extra space?

```

## 题目翻译

给你一个整数数组 nums，请你将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的形式。
你可以假设输入的数组总是有一个有效的答案。

示例 1：
输入：nums = [1,5,1,1,6,4]
输出：[1,6,1,5,1,4]
解释：[1,4,1,5,1,6] 也是有效的答案

示例 2：
输入：nums = [1,3,2,2,3,1]
输出：[2,3,1,3,1,2]

约束条件：
1 <= nums.length <= 5 * 10^4
0 <= nums[i] <= 5000
保证对于给定的输入 nums 总是存在一个有效的答案

进阶问题：你能用 O(n) 时间复杂度和/或原地 O(1) 额外空间来实现吗？

## 解题思路

这是一个"摆动排序"问题，要求数组满足 nums[0] < nums[1] > nums[2] < nums[3]... 的形式，即奇数位置的元素大于相邻的偶数位置元素。

基本思路：
1. 将数组排序
2. 将排序后的数组分成两半：较小的一半和较大的一半
3. 交替放置这两部分的元素，使得较大部分的元素在奇数位置，较小部分的元素在偶数位置
4. 注意处理重复元素的情况，避免相邻元素相等

优化方法（满足进阶要求）：
1. 找到数组的中位数（可以用快速选择算法，O(n)时间）
2. 进行三向切分：小于中位数、等于中位数、大于中位数
3. 特殊的索引映射方法来重新排列数组元素
   - 较大的元素放在奇数位置
   - 较小的元素放在偶数位置
   - 处理重复元素以确保相邻元素不相等

为了实现O(1)空间，可以使用索引映射技巧，但实现较为复杂。简单起见，我们可以先实现一个使用O(n)额外空间的解法，然后再考虑优化。

## Solution

[SourceCode](./solution.js)
