# [3326] Minimum Division Operations to Make Array Non Decreasing

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/description/)

* algorithms
* Medium (29.13%)
* Likes:    136
* Dislikes: 31
* Testcase Example:  '[25,7]'

```md
You are given an integer array nums.
Any positive divisor of a natural number x that is strictly less than x is called a proper divisor of x. For example, 2 is a proper divisor of 4, while 6 is not a proper divisor of 6.
You are allowed to perform an operation any number of times on nums, where in each operation you select any one element from nums and divide it by its greatest proper divisor.
Return the minimum number of operations required to make the array non-decreasing.
If it is not possible to make the array non-decreasing using any number of operations, return -1.

Example 1:

Input: nums = [25,7]
Output: 1
Explanation:
Using a single operation, 25 gets divided by 5 and nums becomes [5, 7].

Example 2:

Input: nums = [7,7,6]
Output: -1

Example 3:

Input: nums = [1,1,1,1]
Output: 0


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106


```

## 中文翻译

给定数组 nums，每次操作可将一个元素除以其最大真因子。求使数组非递减的最少操作次数，不可能则返回 -1。

## 解题思路

关键观察：x / GPD(x) = x 的最小质因子 spf(x)。一次操作后元素变为 spf(x)（质数），无法再减小。所以每个元素最多被操作一次。

从右往左贪心：若 nums[i] > nums[i+1]，必须将 nums[i] 减为 spf(nums[i])。若 spf(nums[i]) 仍 > nums[i+1]，返回 -1。用筛法预处理 spf。

## Solution

[SourceCode](./solution.js)
