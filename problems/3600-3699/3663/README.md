# [3663] Find The Least Frequent Digit

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-least-frequent-digit/description/)

* algorithms
* Easy (69.77%)
* Likes:    51
* Dislikes: 2
* Testcase Example:  '1553322'

```md
Given an integer n, find the digit that occurs least frequently in its decimal representation. If multiple digits have the same frequency, choose the smallest digit.
Return the chosen digit as an integer.
The frequency of a digit x is the number of times it appears in the decimal representation of n.

Example 1:

Input: n = 1553322
Output: 1
Explanation:
The least frequent digit in n is 1, which appears only once. All other digits appear twice.

Example 2:

Input: n = 723344511
Output: 2
Explanation:
The least frequent digits in n are 7, 2, and 5; each appears only once.


Constraints:

1 <= n <= 231​​​​​​​ - 1


```

## 题目翻译

给定整数 n，找出其十进制表示中出现频率最低的数字。频率相同时取最小数字。

## 解题思路

统计各数字出现次数（仅统计出现过的数字），找最小频率对应的最小数字。

## Solution

[SourceCode](./solution.js)
