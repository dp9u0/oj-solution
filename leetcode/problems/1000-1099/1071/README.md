# [1071] Greatest Common Divisor of Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/greatest-common-divisor-of-strings/description/)

* algorithms
* Easy (51.33%)
* Testcase Example:  '"ABCABC"\n"ABC"'

```md
For two strings s and t, we say "t divides s" if and only if s = t + ... + t  (t concatenated with itself 1 or more times)
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
Example 4:
Input: str1 = "ABCDEF", str2 = "ABC"
Output: ""

Constraints:
1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1 and str2 consist of English uppercase letters.

```

## Solution

1. `str1 + str2 !== str2 + str1` 说明没有gcd string
2. 否则 取二者长度的 gcd 截取gcd 长度的子字符串即可

[SourceCode](./solution.js)
