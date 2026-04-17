# [3871] Count Commas in Range II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-commas-in-range-ii/description/)

* algorithms
* Medium (40.93%)
* Likes:    57
* Dislikes: 6
* Testcase Example:  '1002'

```md
You are given an integer n.
Return the total number of commas used when writing all integers from [1, n] (inclusive) in standard number formatting.
In standard formatting:

A comma is inserted after every three digits from the right.
Numbers with fewer than 4 digits contain no commas.


Example 1:

Input: n = 1002
Output: 3
Explanation:
The numbers '1,000', '1,001', and '1,002' each contain one comma, giving a total of 3.

Example 2:

Input: n = 998
Output: 0
Explanation:
​​​​​​​All numbers from 1 to 998 have fewer than four digits. Therefore, no commas are used.


Constraints:

1 <= n <= 1015


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定整数 n，返回从 1 到 n 所有整数按标准格式（每三位加逗号）书写时使用的逗号总数。

## 解题思路

按位数分段计算。d 位数的逗号数为 floor((d-1)/3)。对每个位数 d，统计 1~n 中 d 位数的个数，乘以对应的逗号数，求和。d 从 1 遍历到 n 的位数即可。
