# [2937] Make Three Strings Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-three-strings-equal/description/)

* algorithms
* Easy (44.80%)
* Likes:    325
* Dislikes: 43
* Testcase Example:  '"abc"\n"abb"\n"ab"'

```md
You are given three strings: s1, s2, and s3. In one operation you can choose one of these strings and delete its rightmost character. Note that you cannot completely empty a string.
Return the minimum number of operations required to make the strings equal. If it is impossible to make them equal, return -1.

Example 1:

Input: s1 = 'abc', s2 = 'abb', s3 = 'ab'
Output: 2
Explanation:Deleting the rightmost character from both s1 and s2 will result in three equal strings.

Example 2:

Input: s1 = 'dac', s2 = 'bac', s3 = 'cac'
Output: -1
Explanation: Since the first letters of s1 and s2 differ, they cannot be made equal.


Constraints:

1 <= s1.length, s2.length, s3.length <= 100
s1, s2 and s3 consist only of lowercase English letters.


```

## 翻译

给定三个字符串s1,s2,s3。每次操作删除某个字符串的最右字符（不能完全清空）。求使三字符串相等的最少操作数，不可能返回-1。

## 解题思路

找三字符串的最长公共前缀长度len。若len=0则返回-1。操作数=(s1.length-len)+(s2.length-len)+(s3.length-len)。

## Solution

[SourceCode](./solution.js)
