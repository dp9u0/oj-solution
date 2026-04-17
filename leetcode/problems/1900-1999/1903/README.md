# [1903] Largest Odd Number in String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-odd-number-in-string/description/)

* algorithms
* Easy (67.23%)
* Likes:    2589
* Dislikes: 149
* Testcase Example:  '"52"'

```md
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string '' if no odd integer exists.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: num = '52'
Output: '5'
Explanation: The only non-empty substrings are '5', '2', and '52'. '5' is the only odd number.

Example 2:

Input: num = '4206'
Output: ''
Explanation: There are no odd numbers in '4206'.

Example 3:

Input: num = '35427'
Output: '35427'
Explanation: '35427' is already an odd number.


Constraints:

1 <= num.length <= 105
num only consists of digits and does not contain any leading zeros.


```

## 题目翻译

给定表示大整数的字符串 num，返回最大的奇数子串，若不存在则返回空串。

## 解题思路

**贪心：找最右边的奇数位**

从右往左找第一个奇数数字，num[0..i] 即为答案（前缀越长值越大）。O(n)。

## Solution

[SourceCode](./solution.js)
