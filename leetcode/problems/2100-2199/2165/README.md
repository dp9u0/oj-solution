# [2165] Smallest Value of the Rearranged Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/description/)

* algorithms
* Medium (53.51%)
* Likes:    685
* Dislikes: 27
* Testcase Example:  '310'

```md
You are given an integer num. Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros.
Return the rearranged number with minimal value.
Note that the sign of the number does not change after rearranging the digits.

Example 1:

Input: num = 310
Output: 103
Explanation: The possible arrangements for the digits of 310 are 013, 031, 103, 130, 301, 310.
The arrangement with the smallest value that does not contain any leading zeros is 103.

Example 2:

Input: num = -7605
Output: -7650
Explanation: Some possible arrangements for the digits of -7605 are -7650, -6705, -5076, -0567.
The arrangement with the smallest value that does not contain any leading zeros is -7650.


Constraints:

-1015 <= num <= 1015


```

## 题目翻译

给定整数 num，重排其数字使得值最小且不含前导零。注意符号不变。正数：最小的非零数字放首位，其余升序；负数：数字降序排列（取绝对值后）。

## 解题思路

正数：提取数字排序升序，找第一个非零数字放到首位，其余按升序拼接。负数：取绝对值的数字降序排列，再取负。

## Solution

[SourceCode](./solution.js)
