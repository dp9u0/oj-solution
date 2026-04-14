# [611] Valid Triangle Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-triangle-number/description/)

* algorithms
* Medium (56.81%)
* Likes:    4443
* Dislikes: 260
* Testcase Example:  '[2,2,3,4]'

```md
Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

Example 1:

Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are:
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3

Example 2:

Input: nums = [4,2,3,4]
Output: 4


Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 1000


```

## 翻译

给定整数数组 nums，返回可以组成三角形三条边的三元组数量（三角形两边之和大于第三边）。

## Approach

排序 + 双指针。排序后固定最大边 nums[k]（从大到小遍历），用双指针 i=0, j=k-1：
- 若 nums[i] + nums[j] > nums[k]：i 到 j-1 的所有元素与 j、k 都能组成三角形，计数 j-i，然后 j--
- 否则 i++

时间复杂度 O(n²)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
