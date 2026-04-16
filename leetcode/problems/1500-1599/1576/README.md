# [1576] Replace All ?'s to Avoid Consecutive Repeating Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/description/)

* algorithms
* Easy (45.24%)
* Likes:    608
* Dislikes: 181
* Testcase Example:  '"?zs"'

```md
Given a string s containing only lowercase English letters and the &#39;?&#39; character, convert all the &#39;?&#39; characters into lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non &#39;?&#39; characters.
It is guaranteed that there are no consecutive repeating characters in the given string except for &#39;?&#39;.
Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

Example 1:

Input: s = '?zs'
Output: 'azs'
Explanation: There are 25 solutions for this problem. From 'azs' to 'yzs', all are valid. Only 'z' is an invalid modification as the string will consist of consecutive repeating characters in 'zzs'.

Example 2:

Input: s = 'ubv?w'
Output: 'ubvaw'
Explanation: There are 24 solutions for this problem. Only 'v' and 'w' are invalid modifications as the strings will consist of consecutive repeating characters in 'ubvvw' and 'ubvww'.


Constraints:

1 <= s.length <= 100
s consist of lowercase English letters and &#39;?&#39;.


```

## 题目翻译

给定含小写字母和 '?' 的字符串，将所有 '?' 替换为小写字母，使最终字符串不含连续重复字符。返回任意合法结果。

## 解题思路

遍历字符串，遇到 '?' 时从 'a' 到 'z' 找一个既不等于前一个字符也不等于后一个字符的字母替换。

## Solution

[SourceCode](./solution.js)
