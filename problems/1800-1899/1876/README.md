# [1876] Substrings of Size Three with Distinct Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/)

* algorithms
* Easy (76.67%)
* Likes:    1703
* Dislikes: 58
* Testcase Example:  '"xyzzaz"'

```md
A string is good if there are no repeated characters.
Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
A substring is a contiguous sequence of characters in a string.

Example 1:

Input: s = 'xyzzaz'
Output: 1
Explanation: There are 4 substrings of size 3: 'xyz', 'yzz', 'zza', and 'zaz'.
The only good substring of length 3 is 'xyz'.

Example 2:

Input: s = 'aababcabc'
Output: 4
Explanation: There are 7 substrings of size 3: 'aab', 'aba', 'bab', 'abc', 'bca', 'cab', and 'abc'.
The good substrings are 'abc', 'bca', 'cab', and 'abc'.


Constraints:

1 <= s.length <= 100
s​​​​​​ consists of lowercase English letters.


```

## 中文翻译

给定字符串 s，返回长度为 3 且不含重复字符的子串个数。

## 解题思路

遍历所有长度为 3 的子串，检查三个字符是否互不相同。

## Solution

[SourceCode](./solution.js)
