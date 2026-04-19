# [2772] Apply Operations to Make All Array Elements Equal to Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/description/)

* algorithms
* Medium (33.35%)
* Likes:    451
* Dislikes: 32
* Testcase Example:  '[2,2,3,1,1,0]\n3'

```md
You are given a 0-indexed integer array nums and a positive integer k.
You can apply the following operation on the array any number of times:

Choose any subarray of size k from the array and decrease all its elements by 1.

Return true if you can make all the array elements equal to 0, or false otherwise.
A subarray is a contiguous non-empty part of an array.

Example 1:

Input: nums = [2,2,3,1,1,0], k = 3
Output: true
Explanation: We can do the following operations:
- Choose the subarray [2,2,3]. The resulting array will be nums = [1,1,2,1,1,0].
- Choose the subarray [2,1,1]. The resulting array will be nums = [1,1,1,0,0,0].
- Choose the subarray [1,1,1]. The resulting array will be nums = [0,0,0,0,0,0].

Example 2:

Input: nums = [1,3,1,1], k = 2
Output: false
Explanation: It is not possible to make all the array elements equal to 0.


Constraints:

1 <= k <= nums.length <= 105
0 <= nums[i] <= 106


```

## 中文翻译

给定数组 nums 和正整数 k。操作：选长度为 k 的子数组，所有元素减 1。能否使所有元素变为 0？

## 解题思路

从左到右贪心，用差分数组维护当前累计减量。对位置 i，需要的操作次数为 nums[i] - 当前减量。若结果为负则返回 false。在 i 处减去 d，则范围 [i, i+k-1] 都减少了 d，用差分数组维护。

## Solution

[SourceCode](./solution.js)
