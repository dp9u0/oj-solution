# [628] Maximum Product of Three Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-product-of-three-numbers/description/)

* algorithms
* Easy (46.97%)
* Testcase Example:  '[1,2,3]'

```md
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
Example 2:
Input: nums = [1,2,3,4]
Output: 24
Example 3:
Input: nums = [-1,-2,-3]
Output: -6

Constraints:
3 <= nums.length <= 10^4
-1000 <= nums[i] <= 1000

```

## Solution

找到最大的三个值和最小的两个值,最大乘积为 `Math.max(max1 * max2 * max3, min1 * min2 * max1)`

[SourceCode](./solution.js)
