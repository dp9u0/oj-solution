# [565] Array Nesting

## Description

[LeetCode Problem Description](https://leetcode.com/problems/array-nesting/description/)

* algorithms
* Medium (56.56%)
* Likes:    2280
* Dislikes: 159
* Testcase Example:  '[5,4,0,3,1,6,2]'

```md
You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1].
You should build a set s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... } subjected to the following rule:

The first element in s[k] starts with the selection of the element nums[k] of index = k.
The next element in s[k] should be nums[nums[k]], and then nums[nums[nums[k]]], and so on.
We stop adding right before a duplicate element occurs in s[k].

Return the longest length of a set s[k].

Example 1:

Input: nums = [5,4,0,3,1,6,2]
Output: 4
Explanation:
nums[0] = 5, nums[1] = 4, nums[2] = 0, nums[3] = 3, nums[4] = 1, nums[5] = 6, nums[6] = 2.
One of the longest sets s[k]:
s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}

Example 2:

Input: nums = [0,1,2]
Output: 1


Constraints:

1 <= nums.length <= 105
0 <= nums[i] < nums.length
All the values of nums are unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定长度为 n 的排列数组 nums（值域 [0, n-1]），定义集合 s[k] = {nums[k], nums[nums[k]], ...}，直到出现重复元素为止。返回所有 s[k] 中最长的长度。

## 解题思路

**图论：找最长环**

nums 构成一个排列，可以看作一组环。从每个未访问的起点出发，沿 nums[i] 跳转直到回到起点，记录环长。取最大值。

用 visited 数组标记已访问的元素，避免重复计算。因为同一环上的元素不论从哪个出发都得到相同长度的环。

时间复杂度 O(n)，空间复杂度 O(n)。也可以用原地标记（设为特殊值）做到 O(1) 额外空间。
