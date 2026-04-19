# [3726] Remove Zeros in Decimal Representation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-zeros-in-decimal-representation/description/)

* algorithms
* Easy (76.37%)
* Likes:    45
* Dislikes: 2
* Testcase Example:  '1020030'

```md
You are given a positive integer n.
Return the integer obtained by removing all zeros from the decimal representation of n.

Example 1:

Input: n = 1020030
Output: 123
Explanation:
After removing all zeros from 1020030, we get 123.

Example 2:

Input: n = 1
Output: 1
Explanation:
1 has no zero in its decimal representation. Therefore, the answer is 1.


Constraints:

1 <= n <= 1015


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定正整数 n，返回移除其十进制表示中所有 0 后得到的整数。

## 解题思路

转为字符串，过滤掉 '0'，再转回数字。O(d) 其中 d 为位数。
