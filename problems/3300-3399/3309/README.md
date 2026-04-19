# [3309] Maximum Possible Number by Binary Concatenation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/description/)

* algorithms
* Medium (65.51%)
* Likes:    116
* Dislikes: 7
* Testcase Example:  '[1,2,3]'

```md
You are given an array of integers nums of size 3.
Return the maximum possible number whose binary representation can be formed by concatenating the binary representation of all elements in nums in some order.
Note that the binary representation of any number does not contain leading zeros.

Example 1:

Input: nums = [1,2,3]
Output: 30
Explanation:
Concatenate the numbers in the order [3, 1, 2] to get the result '11110', which is the binary representation of 30.

Example 2:

Input: nums = [2,8,16]
Output: 1296
Explanation:
Concatenate the numbers in the order [2, 8, 16] to get the result '10100010000', which is the binary representation of 1296.


Constraints:

nums.length == 3
1 <= nums[i] <= 127


```

## 题目翻译

给定长度为 3 的数组 nums，将三个数的二进制表示按某种顺序拼接，返回能形成的最大数字。

## 解题思路

枚举 3! = 6 种排列，对每种排列计算二进制拼接的值，取最大。拼接方式：(a << bitlen(b) | b) << bitlen(c) | c。

时间复杂度 O(1)

## Solution

[SourceCode](./solution.js)
