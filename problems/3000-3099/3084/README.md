# [3084] Count Substrings Starting and Ending with Given Character

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/description/)

* algorithms
* Medium (49.97%)
* Likes:    149
* Dislikes: 9
* Testcase Example:  '"abada"\n"a"'

```md
You are given a string s and a character c. Return the total number of substrings of s that start and end with c.

Example 1:

Input: s = 'abada', c = 'a'
Output: 6
Explanation: Substrings starting and ending with 'a' are: 'abada', 'abada', 'abada', 'abada', 'abada', 'abada'.

Example 2:

Input: s = 'zzz', c = 'z'
Output: 6
Explanation: There are a total of 6 substrings in s and all start and end with 'z'.


Constraints:

1 <= s.length <= 105
s and c consistonly of lowercase English letters.


```

## 翻译

给定字符串 s 和字符 c，返回 s 中以 c 开头和结尾的子串总数。

## 解题思路

统计 s 中等于 c 的字符个数 cnt。每个以 c 结尾的位置可以和前面所有等于 c 的位置（包括自身）配对，形成子串。总数 = 1 + 2 + ... + cnt = cnt * (cnt + 1) / 2。

## Solution

[SourceCode](./solution.js)
