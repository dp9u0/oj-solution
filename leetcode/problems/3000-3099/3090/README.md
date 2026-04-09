# [3090] Maximum Length Substring With Two Occurrences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/description/)

* algorithms
* Easy (65.34%)
* Likes:    258
* Dislikes: 22
* Testcase Example:  '"bcbbbcba"'

```md
Given a string s, return the maximum length of a substringsuch that it contains at most two occurrences of each character.

Example 1:

Input: s = 'bcbbbcba'
Output: 4
Explanation:
The following substring has a length of 4 and contains at most two occurrences of each character: 'bcbbbcba'.
Example 2:

Input: s = 'aaaa'
Output: 2
Explanation:
The following substring has a length of 2 and contains at most two occurrences of each character: 'aaaa'.

Constraints:

2 <= s.length <= 100
s consists only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 s，找出最长子串使得每个字符最多出现两次。

## 解题思路

**Approach: 滑动窗口**

1. 双指针维护窗口，用计数数组记录每个字符出现次数
2. 右指针扩展，当某字符出现 >2 次时左指针收缩
3. 记录最大窗口长度
4. 复杂度 O(n)
