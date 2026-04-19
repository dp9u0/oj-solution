# [2177] Find Three Consecutive Integers That Sum to a Given Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/description/)

* algorithms
* Medium (65.30%)
* Likes:    734
* Dislikes: 233
* Testcase Example:  '33'

```md
Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.

Example 1:

Input: num = 33
Output: [10,11,12]
Explanation: 33 can be expressed as 10 + 11 + 12 = 33.
10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].

Example 2:

Input: num = 4
Output: []
Explanation: There is no way to express 4 as the sum of 3 consecutive integers.


Constraints:

0 <= num <= 1015


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数 num，返回三个连续整数（排序数组）使其和为 num。若不存在则返回空数组。

## 解题思路

设三个连续整数为 x, x+1, x+2，则 3x + 3 = num，x = (num - 3) / 3。若 num - 3 能被 3 整除则返回 [x, x+1, x+2]，否则返回 []。
