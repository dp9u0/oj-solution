# [1486] XOR Operation in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/xor-operation-in-an-array/description/)

* algorithms
* Easy (87.52%)
* Likes:    1518
* Dislikes: 341
* Testcase Example:  '5\n0'

```md
You are given an integer n and an integer start.
Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.
Return the bitwise XOR of all elements of nums.

Example 1:

Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where '^' corresponds to bitwise XOR operator.

Example 2:

Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.


Constraints:

1 <= n <= 1000
0 <= start <= 1000
n == nums.length


```

## 题目翻译

给定 n 和 start，定义数组 nums[i] = start + 2*i。返回所有元素的按位异或结果。

## 解题思路

直接遍历计算异或即可。nums[i] = start + 2*i，从 0 到 n-1 累计异或。

## Solution

[SourceCode](./solution.js)
