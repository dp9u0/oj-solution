# [2108] Find First Palindromic String in the Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/)

* algorithms
* Easy (83.99%)
* Likes:    1657
* Dislikes: 60
* Testcase Example:  '["abc","car","ada","racecar","cool"]'

```md
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string ''.
A string is palindromic if it reads the same forward and backward.

Example 1:

Input: words = ['abc','car','ada','racecar','cool']
Output: 'ada'
Explanation: The first string that is palindromic is 'ada'.
Note that 'racecar' is also palindromic, but it is not the first.

Example 2:

Input: words = ['notapalindrome','racecar']
Output: 'racecar'
Explanation: The first and only string that is palindromic is 'racecar'.

Example 3:

Input: words = ['def','ghi']
Output: ''
Explanation: There are no palindromic strings, so the empty string is returned.


Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串数组 words，返回第一个回文字符串。没有则返回空串。

## 解题思路

顺序遍历，检查每个字符串是否是回文（反转后等于自身）。O(n×m)。
