# [1424] Diagonal Traverse II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/diagonal-traverse-ii/description/)

* algorithms
* Medium (58.31%)
* Likes:    2303
* Dislikes: 161
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'

```md
Given a 2D integer array nums, return all elements of nums in diagonal order as shown in the below images.

Example 1:


Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,4,2,7,5,3,8,6,9]

Example 2:


Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]


Constraints:

1 <= nums.length <= 105
1 <= nums[i].length <= 105
1 <= sum(nums[i].length) <= 105
1 <= nums[i][j] <= 105


```

## 中文翻译

给定二维数组 nums（各行长度不等），按对角线顺序返回所有元素。对角线定义为 i+j 相同的元素集合，从左下到右上遍历。

## 解题思路

同一对角线上 i+j 相同。按 i+j 分组，同一组内按 i 降序（即从下到上）输出。可以用 Map 按对角线 key 分组，或逐行逐列收集后按 key 排序。

## Solution

[SourceCode](./solution.js)
