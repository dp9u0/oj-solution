# [1689] Partitioning Into Minimum Number Of Deci-Binary Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/description/)

* algorithms
* Medium (90.45%)
* Likes:    2831
* Dislikes: 1545
* Testcase Example:  '"32"'

```md
A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

Example 1:

Input: n = '32'
Output: 3
Explanation: 10 + 11 + 11 = 32

Example 2:

Input: n = '82734'
Output: 8

Example 3:

Input: n = '27346209830709182346'
Output: 9


Constraints:

1 <= n.length <= 105
n consists of only digits.
n does not contain any leading zeros and represents a positive integer.


```

## 翻译

一个十进制数如果每一位都是 0 或 1（且无前导零），则称为 deci-binary 数。给定表示正整数的字符串 n，返回最少需要多少个正 deci-binary 数使它们的和等于 n。

## Approach

答案就是 n 中最大的数字。每个 deci-binary 数在每个位上最多贡献 1，因此对于最大数字所在位，至少需要 max_digit 个数。而用恰好 max_digit 个数总可以实现（按位逐个减 1）。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
