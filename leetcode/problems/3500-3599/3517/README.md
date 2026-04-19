# [3517] Smallest Palindromic Rearrangement I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-palindromic-rearrangement-i/description/)

* algorithms
* Medium (63.59%)
* Likes:    85
* Dislikes: 3
* Testcase Example:  '"z"'

```md
You are given a palindromic string s.
Return the lexicographically smallest palindromic permutation of s.

Example 1:

Input: s = 'z'
Output: 'z'
Explanation:
A string of only one character is already the lexicographically smallest palindrome.

Example 2:

Input: s = 'babab'
Output: 'abbba'
Explanation:
Rearranging 'babab' &rarr; 'abbba' gives the smallest lexicographic palindrome.

Example 3:

Input: s = 'daccad'
Output: 'acddca'
Explanation:
Rearranging 'daccad' &rarr; 'acddca' gives the smallest lexicographic palindrome.


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
s is guaranteed to be palindromic.


```

## 题目翻译

给定一个回文字符串 s，返回字典序最小的回文排列。

## 解题思路

统计每个字符频率。将字符按字母序排列，前半部分从左到右按频率/2构造，中间放出现奇数次的字符，后半部分是前半部分的反转。

## Solution

[SourceCode](./solution.js)
