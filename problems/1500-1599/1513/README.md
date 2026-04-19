# [1513] Number of Substrings With Only 1s

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-substrings-with-only-1s/description/)

* algorithms
* Medium (57.40%)
* Likes:    1233
* Dislikes: 42
* Testcase Example:  '"0110111"'

```md
Given a binary string s, return the number of substrings with all characters 1&#39;s. Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: s = '0110111'
Output: 9
Explanation: There are 9 substring in total with only 1&#39;s characters.
'1' -> 5 times.
'11' -> 3 times.
'111' -> 1 time.
Example 2:

Input: s = '101'
Output: 2
Explanation: Substring '1' is shown 2 times in s.

Example 3:

Input: s = '111111'
Output: 21
Explanation: Each substring contains only 1&#39;s characters.


Constraints:

1 <= s.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 题目翻译

给定二进制字符串 s，返回全为 '1' 的子字符串数量，结果对 10^9+7 取模。

## 解题思路

**遍历连续1的段**

找出每段连续1的长度 len，长度为 len 的连续1贡献 len*(len+1)/2 个子串。遍历所有段累加即可。O(n) 时间。

## Solution

[SourceCode](./solution.js)
