# [1556] Thousand Separator

## Description

[LeetCode Problem Description](https://leetcode.com/problems/thousand-separator/description/)

* algorithms
* Easy (53.68%)
* Likes:    523
* Dislikes: 47
* Testcase Example:  '987'

```md
Given an integer n, add a dot ('.') as the thousands separator and return it in string format.

Example 1:

Input: n = 987
Output: '987'

Example 2:

Input: n = 1234
Output: '1.234'


Constraints:

0 <= n <= 231 - 1


```

## 中文翻译

给定整数 n，添加千分位分隔符（'.'），返回字符串格式。

## 解题思路

**从右往左每 3 位插入点号**

转字符串后从末尾开始每 3 个字符插入 '.'。

时间复杂度：O(log n)，空间复杂度：O(log n)

## Solution

[SourceCode](./solution.js)
