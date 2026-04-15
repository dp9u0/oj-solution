# [3856] Trim Trailing Vowels

## Description

[LeetCode Problem Description](https://leetcode.com/problems/trim-trailing-vowels/description/)

* algorithms
* Easy (77.30%)
* Likes:    36
* Dislikes: -
* Testcase Example:  '"idea"'

```md
You are given a string s that consists of lowercase English letters.
Return the string obtained by removing all trailing vowels from s.
The vowels consist of the characters &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;.

Example 1:

Input: s = 'idea'
Output: 'id'
Explanation:
Removing 'idea', we obtain the string 'id'.

Example 2:

Input: s = 'day'
Output: 'day'
Explanation:
There are no trailing vowels in the string 'day'.

Example 3:

Input: s = 'aeiou'
Output: ''
Explanation:
Removing 'aeiou', we obtain the string ''.


Constraints:

1 <= s.length <= 100
s consists of only lowercase English letters.


```

## 题目翻译

给定字符串 s，移除末尾所有元音字母（a/e/i/o/u），返回结果字符串。

## 解题思路

从末尾往前找到第一个非元音字符，截取到该位置即可。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
