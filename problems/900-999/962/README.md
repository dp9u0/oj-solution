# [962] Maximum Width Ramp

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-width-ramp/description/)

* algorithms
* Medium (55.87%)
* Likes:    2856
* Dislikes: 98
* Testcase Example:  '[6,0,8,2,1,5]'

```md
A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.
Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

Example 1:

Input: nums = [6,0,8,2,1,5]
Output: 4
Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.

Example 2:

Input: nums = [9,8,1,0,1,9,4,0,4,1]
Output: 7
Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.


Constraints:

2 <= nums.length <= 5 * 104
0 <= nums[i] <= 5 * 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，ramp 是满足 i < j 且 nums[i] <= nums[j] 的索引对 (i,j)，宽度为 j-i。返回最大宽度。

## 解题思路

**单调栈**

1. 从左到右构建单调递减栈（存储候选的 i，只保留比栈顶小的值的索引）
2. 从右到左遍历 j，对每个 j 弹出栈中所有满足 nums[stack[top]] <= nums[j] 的元素，更新最大宽度
3. 因为 j 从右往左递减，一旦弹出就能得到以该 i 为左端点的最大宽度

时间复杂度 O(n)，空间复杂度 O(n)。
