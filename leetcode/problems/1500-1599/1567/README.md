# [1567] Maximum Length of Subarray With Positive Product

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/description/)

* algorithms
* Medium (44.65%)
* Likes:    2493
* Dislikes: 80
* Testcase Example:  '[1,-2,-3,4]'

```md
Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.
A subarray of an array is a consecutive sequence of zero or more values taken out of that array.
Return the maximum length of a subarray with positive product.

Example 1:

Input: nums = [1,-2,-3,4]
Output: 4
Explanation: The array nums already has a positive product of 24.

Example 2:

Input: nums = [0,1,-2,-3,-4]
Output: 3
Explanation: The longest subarray with positive product is [1,-2,-3] which has a product of 6.
Notice that we cannot include 0 in the subarray since that&#39;ll make the product 0 which is not positive.
Example 3:

Input: nums = [-1,-2,-3,0,1]
Output: 2
Explanation: The longest subarray with positive product is [-1,-2] or [-2,-3].


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，找到乘积为正数的最长子数组的长度。子数组是连续的。0 不能包含在内（乘积会变 0）。

## 解题思路

**动态规划**

维护两个变量：posLen（以当前元素结尾的乘积为正的最长子数组长度）和 negLen（乘积为负的最长子数组长度）。

遍历 nums：
- nums[i] > 0：posLen = posLen + 1，negLen = negLen > 0 ? negLen + 1 : 0
- nums[i] < 0：newPos = negLen > 0 ? negLen + 1 : 0，negLen = posLen + 1，posLen = newPos
- nums[i] == 0：posLen = 0，negLen = 0

取所有 posLen 的最大值。

时间复杂度 O(n)，空间复杂度 O(1)。
