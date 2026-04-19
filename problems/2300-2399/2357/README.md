# [2357] Make Array Zero by Subtracting Equal Amounts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/)

* algorithms
* Easy (73.77%)
* Likes:    1321
* Dislikes: 62
* Testcase Example:  '[1,5,0,3,5]'

```md
You are given a non-negative integer array nums. In one operation, you must:

Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
Subtract x from every positive element in nums.

Return the minimum number of operations to make every element in nums equal to 0.

Example 1:

Input: nums = [1,5,0,3,5]
Output: 3
Explanation:
In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].

Example 2:

Input: nums = [0]
Output: 0
Explanation: Each element in nums is already 0 so no operations are needed.


Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100


```

## 翻译

给定非负整数数组 nums。每次操作选一个正整数 x（x <= 数组中最小的非零元素），将数组中所有正元素减去 x。返回使所有元素变为 0 的最少操作次数。

## Approach

每个操作本质上是将当前最小的非零值（及其所有等值）变为 0。因此操作次数等于数组中不同非零值的个数。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
