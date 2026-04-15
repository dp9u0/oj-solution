# [3584] Maximum Product of First and Last Elements of a Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-product-of-first-and-last-elements-of-a-subsequence/description/)

* algorithms
* Medium (31.37%)
* Likes:    117
* Dislikes: 1
* Testcase Example:  '[-1,-9,2,3,-2,-3,1]\n1'

```md
You are given an integer array nums and an integer m.
Return the maximum product of the first and last elements of any subsequence of nums of size m.

Example 1:

Input: nums = [-1,-9,2,3,-2,-3,1], m = 1
Output: 81
Explanation:
The subsequence [-9] has the largest product of the first and last elements: -9 * -9 = 81. Therefore, the answer is 81.

Example 2:

Input: nums = [1,3,-5,5,6,-4], m = 3
Output: 20
Explanation:
The subsequence [-5, 6, -4] has the largest product of the first and last elements.

Example 3:

Input: nums = [2,-1,2,-6,5,2,-5,7], m = 2
Output: 35
Explanation:
The subsequence [5, 7] has the largest product of the first and last elements.


Constraints:

1 <= nums.length <= 105
-105 <= nums[i] <= 105
1 <= m <= nums.length


```

## 中文翻译

给定整数数组 nums 和整数 m，返回任意长度为 m 的子序列的首尾元素乘积的最大值。

## 解题思路

**前缀极值 + 枚举尾元素：**

1. 子序列首元素从 nums[0..k] 选，尾元素为 nums[j]，需 j-k >= m-1
2. 预处理 prefixMax 和 prefixMin 数组
3. 对每个 j >= m-1，用 nums[j] 乘 prefixMax/prefixMin[j-m+1] 取最大值
4. 因为乘积最大值取决于 nums[j] 的符号：正数配最大值，负数配最小值

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
