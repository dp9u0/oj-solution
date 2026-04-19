# [2221] Find Triangular Sum of an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-triangular-sum-of-an-array/description/)

* algorithms
* Medium (81.97%)
* Likes:    1545
* Dislikes: 77
* Testcase Example:  '[1,2,3,4,5]'

```md
You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).
The triangular sum of nums is the value of the only element present in nums after the following process terminates:

Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
For each index i, where 0 <= i <n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
Replace the array nums with newNums.
Repeat the entire process starting from step 1.

Return the triangular sum of nums.

Example 1:


Input: nums = [1,2,3,4,5]
Output: 8
Explanation:
The above diagram depicts the process from which we obtain the triangular sum of the array.
Example 2:

Input: nums = [5]
Output: 5
Explanation:
Since there is only one element in nums, the triangular sum is the value of that element itself.

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 9


```

## 翻译

给定数字数组（0-9），不断将相邻两数相加模 10 生成新数组，直到只剩一个数。返回这个数。

## Approach

模拟：原地修改数组，每次从左到右将 nums[i] = (nums[i] + nums[i+1]) % 10，长度减 1，重复直到长度为 1。

时间复杂度 O(n^2)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
