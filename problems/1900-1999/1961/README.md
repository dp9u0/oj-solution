# [1961] Check If String Is a Prefix of Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/description/)

* algorithms
* Easy (52.79%)
* Likes:    556
* Dislikes: 110
* Testcase Example:  '"iloveleetcode"\n["i","love","leetcode","apples"]'

```md
Given a string s and an array of strings words, determine whether s is a prefix string of words.
A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
Return true if s is a prefix string of words, or false otherwise.

Example 1:

Input: s = 'iloveleetcode', words = ['i','love','leetcode','apples']
Output: true
Explanation:
s can be made by concatenating 'i', 'love', and 'leetcode' together.

Example 2:

Input: s = 'iloveleetcode', words = ['apples','i','love','leetcode']
Output: false
Explanation:
It is impossible to make s using a prefix of arr.

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
1 <= s.length <= 1000
words[i] and s consist of only lowercase English letters.


```

## 翻译

给定字符串s和字符串数组words，判断s是否是words的前缀拼接。即s能否由words的前k个字符串拼接而成（k>=1）。

## 解题思路

逐个拼接words中的字符串，每次拼接后与s比较：若相等返回true，若拼接结果超过s长度则返回false。

## Solution

[SourceCode](./solution.js)
