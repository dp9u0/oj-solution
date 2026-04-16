# [1031] Maximum Sum of Two Non-Overlapping Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/description/)

* algorithms
* Medium (60.83%)
* Likes:    2666
* Dislikes: 88
* Testcase Example:  '[0,6,5,2,2,5,1,9,4]\n1\n2'

```md
Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.
The array with length firstLen could occur before or after the array with length secondLen, but they have to be non-overlapping.
A subarray is a contiguous part of an array.

Example 1:

Input: nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
Output: 20
Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.

Example 2:

Input: nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
Output: 29
Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.

Example 3:

Input: nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
Output: 31
Explanation: One choice of subarrays is [5,6,0,9] with length 4, and [0,3,8] with length 3.


Constraints:

1 <= firstLen, secondLen <= 1000
2 <= firstLen + secondLen <= 1000
firstLen + secondLen <= nums.length <= 1000
0 <= nums[i] <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums 和两个整数 firstLen、secondLen，找到两个不重叠子数组（长度分别为 firstLen 和 secondLen）的元素和的最大值。两个子数组的前后顺序不限。

## 解题思路

**前缀和 + 前缀最大值**

分别尝试两种顺序：firstLen 子数组在前/在后。

对于固定顺序（长度 L 的在前，长度 R 的在后）：
1. 用前缀和快速计算任意子数组的和
2. 从左到右扫描，维护已见过的 L 长度子数组的最大和 maxL
3. 对每个 R 长度子数组的起始位置 j，用 maxL + 当前 R 子数组和更新答案

两种顺序取最大值，时间复杂度 O(n)。
