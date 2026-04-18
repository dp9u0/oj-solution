# [3211] Generate Binary Strings Without Adjacent Zeros

## Description

[LeetCode Problem Description](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/description/)

* algorithms
* Medium (88.31%)
* Likes:    295
* Dislikes: 53
* Testcase Example:  '3'

```md
You are given a positive integer n.
A binary string x is valid if all substrings of x of length 2 contain at least one '1'.
Return all valid strings with length n, in any order.

Example 1:

Input: n = 3
Output: ['010','011','101','110','111']
Explanation:
The valid strings of length 3 are: '010', '011', '101', '110', and '111'.

Example 2:

Input: n = 1
Output: ['0','1']
Explanation:
The valid strings of length 1 are: '0' and '1'.


Constraints:

1 <= n <= 18


```

## 题目翻译

生成长度为 n 的所有合法二进制字符串，要求任意相邻两个字符中至少有一个 '1'（即没有 "00" 子串）。

## 解题思路

**回溯 / 迭代生成**

回溯：当前位置若放 '0'，则前一位必须是 '1'。递归生成即可。结果数量为 Fibonacci 相关，n=18 时约 6765 个，很快。O(F(n)) 时间。

## Solution

[SourceCode](./solution.js)
