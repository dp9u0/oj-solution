# [2384] Largest Palindromic Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-palindromic-number/description/)

* algorithms
* Medium (37.07%)
* Likes:    673
* Dislikes: 238
* Testcase Example:  '"444947137"'

```md
You are given a string num consisting of digits only.
Return the largest palindromic integer (in the form of a string) that can be formed using digits taken from num. It should not contain leading zeroes.
Notes:

You do not need to use all the digits of num, but you must use at least one digit.
The digits can be reordered.


Example 1:

Input: num = '444947137'
Output: '7449447'
Explanation:
Use the digits '4449477' from '444947137' to form the palindromic integer '7449447'.
It can be shown that '7449447' is the largest palindromic integer that can be formed.

Example 2:

Input: num = '00009'
Output: '9'
Explanation:
It can be shown that '9' is the largest palindromic integer that can be formed.
Note that the integer returned should not contain leading zeroes.


Constraints:

1 <= num.length <= 105
num consists of digits.


```

## 翻译

给定由数字组成的字符串 num，用其中的数字重新排列构造最大的回文整数（字符串形式），不能有前导零，至少使用一个数字。

## Approach

统计每个数字出现频率。贪心构造回文：
1. 从 9 到 0 遍历，每个数字取 freq[d] / 2 对加入左半部分
2. 中间字符取剩余频率为奇数的最大数字
3. 如果左半部分为空或只含 0（导致前导零），只返回中间字符
4. 结果 = left + middle + reversed(left)

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
