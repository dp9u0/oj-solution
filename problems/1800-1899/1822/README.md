# [1822] Sign of the Product of an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sign-of-the-product-of-an-array/description/)

* algorithms
* Easy (64.81%)
* Likes:    2298
* Dislikes: 231
* Testcase Example:  '[-1,-2,-3,-4,3,2,1]'

```md
Implement a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.

You are given an integer array nums. Let product be the product of all values in the array nums.
Return signFunc(product).

Example 1:

Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1

Example 2:

Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0

Example 3:

Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1


Constraints:

1 <= nums.length <= 1000
-100 <= nums[i] <= 100


```

## 中文翻译

给定整数数组 nums，求数组所有元素乘积的符号函数值：正数返回1，负数返回-1，零返回0。

## 解题思路

遍历数组，遇到0直接返回0，统计负数个数，最后根据负数个数的奇偶性返回1或-1。

## Solution

[SourceCode](./solution.js)
