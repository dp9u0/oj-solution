# [3870] Count Commas in Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-commas-in-range/description/)

* algorithms
* Easy (68.72%)
* Likes:    41
* Dislikes: 4
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
All numbers from 1 to 998 have fewer than four digits. Therefore, no commas are used.


Constraints:

1 <= n <= 105


```

## 中文翻译

给定整数 n，返回 [1, n] 所有整数按标准格式（每三位加一个逗号）书写时使用的逗号总数。

## 解题思路

n ≤ 10^5，所以数字最多 6 位，最多 1 个逗号。答案即 ≥ 1000 的数字个数：max(0, n - 999)。

## Solution

[SourceCode](./solution.js)
