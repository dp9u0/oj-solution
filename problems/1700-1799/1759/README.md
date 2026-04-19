# [1759] Count Number of Homogenous Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-homogenous-substrings/description/)

* algorithms
* Medium (57.34%)
* Likes:    1588
* Dislikes: 104
* Testcase Example:  '"abbcccaa"'

```md
Given a string s, return the number of homogenous substrings of s. Since the answer may be too large, return it modulo 109 + 7.
A string is homogenous if all the characters of the string are the same.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = 'abbcccaa'
Output: 13
Explanation: The homogenous substrings are listed as below:
'a'   appears 3 times.
'aa'  appears 1 time.
'b'   appears 2 times.
'bb'  appears 1 time.
'c'   appears 3 times.
'cc'  appears 2 times.
'ccc' appears 1 time.
3 + 1 + 2 + 1 + 3 + 2 + 1 = 13.
Example 2:

Input: s = 'xy'
Output: 2
Explanation: The homogenous substrings are 'x' and 'y'.
Example 3:

Input: s = 'zzzzz'
Output: 15


Constraints:

1 <= s.length <= 105
s consists of lowercase letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 s，返回所有同构子串的数量（同构指所有字符相同）。结果对 10^9+7 取模。

## Approach

遍历字符串，统计每个连续相同字符段的长度 len。长度为 len 的连续段贡献 len*(len+1)/2 个同构子串。累加即可。

时间复杂度 O(n)，空间 O(1)。
