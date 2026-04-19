# [1749] Maximum Absolute Sum of Any Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/)

* algorithms
* Medium (71.07%)
* Likes:    1995
* Dislikes: 51
* Testcase Example:  '[1,-3,2,3,-4]'

```md
You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).
Return the maximum absolute sum of any (possibly empty) subarray of nums.
Note that abs(x) is defined as follows:

If x is a negative integer, then abs(x) = -x.
If x is a non-negative integer, then abs(x) = x.


Example 1:

Input: nums = [1,-3,2,3,-4]
Output: 5
Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.

Example 2:

Input: nums = [2,-5,1,-4,3,-2]
Output: 8
Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，返回任意子数组（可能为空）的绝对值和的最大值。

## 解题思路

**Kadane 变体**

最大绝对值和 = max(最大子数组和, |最小子数组和|)。

同时维护前缀和的最大值和最小值：
1. 遍历累加前缀和 prefix
2. 当前前缀和 - 前缀最小值 = 最大子数组和
3. 当前前缀和 - 前缀最大值 = 最小子数组和（负数）
4. 答案 = max(maxSum, |minSum|)

时间复杂度 O(n)，空间复杂度 O(1)。
