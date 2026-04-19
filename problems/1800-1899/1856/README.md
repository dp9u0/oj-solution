# [1856] Maximum Subarray Min-Product

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-subarray-min-product/description/)

* algorithms
* Medium (40.23%)
* Likes:    1563
* Dislikes: 146
* Testcase Example:  '[1,2,3,2]'

```md
The min-product of an array is equal to the minimum value in the array multiplied by the array&#39;s sum.

For example, the array [3,2,5] (minimum value is 2) has a min-product of 2 * (3+2+5) = 2 * 10 = 20.

Given an array of integers nums, return the maximum min-product of any non-empty subarray of nums. Since the answer may be large, return it modulo 109 + 7.
Note that the min-product should be maximized before performing the modulo operation. Testcases are generated such that the maximum min-product without modulo will fit in a 64-bit signed integer.
A subarray is a contiguous part of an array.

Example 1:

Input: nums = [1,2,3,2]
Output: 14
Explanation: The maximum min-product is achieved with the subarray [2,3,2] (minimum value is 2).
2 * (2+3+2) = 2 * 7 = 14.

Example 2:

Input: nums = [2,3,3,1,2]
Output: 18
Explanation: The maximum min-product is achieved with the subarray [3,3] (minimum value is 3).
3 * (3+3) = 3 * 6 = 18.

Example 3:

Input: nums = [3,1,5,6,4,2]
Output: 60
Explanation: The maximum min-product is achieved with the subarray [5,6,4] (minimum value is 4).
4 * (5+6+4) = 4 * 15 = 60.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 107


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定数组 nums，求所有非空子数组中最大的 min-product（子数组最小值 × 子数组之和）。结果对 10^9+7 取模。

## 解题思路

**Approach: 单调栈 + 前缀和**

1. 枚举每个元素作为子数组的最小值，用单调栈找到左右扩展边界
2. 左边界：左边第一个 < nums[i] 的位置；右边界：右边第一个 <= nums[i] 的位置
3. 子数组和用前缀和 O(1) 查询
4. 对每个 i，min-product = nums[i] * (prefix[right] - prefix[left+1])
5. 复杂度 O(n)
