# [327] Count of Range Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-of-range-sum/description/)

* algorithms
* Hard (36.35%)
* Likes:    2391
* Dislikes: 255
* Testcase Example:  '[-2,5,-1]\n-2\n2'

```md
Given an integer array nums and two integers lower and upper, return the number of range sums that lie in [lower, upper] inclusive.
Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j inclusive, where i <= j.

Example 1:

Input: nums = [-2,5,-1], lower = -2, upper = 2
Output: 3
Explanation: The three ranges are: [0,0], [2,2], and [0,2] and their respective sums are: -2, -1, 2.

Example 2:

Input: nums = [0], lower = 0, upper = 0
Output: 1


Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
-105 <= lower <= upper <= 105
The answer is guaranteed to fit in a 32-bit integer.


```

## 题目翻译

给定一个整数数组 nums 以及两个整数 lower 和 upper，返回位于区间 [lower, upper] 内的区间和的个数。
区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。

示例 1：
输入：nums = [-2,5,-1], lower = -2, upper = 2
输出：3
解释：存在三个区间：[0,0]、[2,2] 和 [0,2]，对应的区间和分别是：-2、-1、2。

示例 2：
输入：nums = [0], lower = 0, upper = 0
输出：1

## 解题思路

这是一道区间和计数的问题，主要难点在于如何高效地计算所有可能的区间和并判断它们是否在给定范围内。

解决方案：使用前缀和 + 归并排序的方法

1. 首先计算前缀和数组 preSum，其中 preSum[i] 表示 nums[0] 到 nums[i-1] 的和
2. 对于任意区间 [i,j] 的和，可以通过 preSum[j+1] - preSum[i] 得到
3. 使用归并排序的思想，在合并过程中统计满足条件的区间和的个数
4. 时间复杂度为 O(nlogn)，空间复杂度为 O(n)

具体实现步骤：
1. 构建前缀和数组
2. 对前缀和数组进行归并排序
3. 在归并过程中，对于左半部分的每个元素，使用双指针在右半部分找到满足条件的区间和个数
4. 最终返回所有满足条件的区间和的个数

## Solution

[SourceCode](./solution.js)
