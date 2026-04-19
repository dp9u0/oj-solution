# [845] Longest Mountain in Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-mountain-in-array/description/)

* algorithms
* Medium (42.02%)
* Likes:    3046
* Dislikes: 92
* Testcase Example:  '[2,1,4,7,3,2,5]'

```md
You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:

arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]



Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

Example 1:

Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.

Example 2:

Input: arr = [2,2,2]
Output: 0
Explanation: There is no mountain.


Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104


Follow up:

Can you solve it using only one pass?
Can you solve it in O(1) space?


```

## 题目翻译

给定整数数组 arr，返回最长山形子数组长度。山形数组：先严格递增再严格递减，长度至少3。

## 解题思路

预处理 left[i]（从左侧到 i 的严格递增长度）和 right[i]（从右侧到 i 的严格递减长度）。对每个 i，如果 left[i]>1 且 right[i]>1，则山形长度为 left[i]+right[i]-1。

## Solution

[SourceCode](./solution.js)
