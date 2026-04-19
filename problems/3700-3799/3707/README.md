# [3707] Equal Score Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/equal-score-substrings/description/)

* algorithms
* Easy (56.75%)
* Likes:    41
* Dislikes: 3
* Testcase Example:  '"adcb"'

```md
You are given a string s consisting of lowercase English letters.
The score of a string is the sum of the positions of its characters in the alphabet, where &#39;a&#39; = 1, &#39;b&#39; = 2, ..., &#39;z&#39; = 26.
Determine whether there exists an index i such that the string can be split into two non-empty substrings s[0..i] and s[(i + 1)..(n - 1)] that have equal scores.
Return true if such a split exists, otherwise return false.

Example 1:

Input: s = 'adcb'
Output: true
Explanation:
Split at index i = 1:

Left substring = s[0..1] = 'ad' with score = 1 + 4 = 5
Right substring = s[2..3] = 'cb' with score = 3 + 2 = 5

Both substrings have equal scores, so the output is true.

Example 2:

Input: s = 'bace'
Output: false
Explanation:​​​​​​
​​​​​​​No split produces equal scores, so the output is false.


Constraints:

2 <= s.length <= 100
s consists of lowercase English letters.


```

## 中文翻译

给定小写字母字符串 s，字符分数为 a=1, b=2, ..., z=26。判断是否存在分割点 i，使得左子串 s[0..i] 和右子串 s[i+1..n-1] 的分数之和相等。

## 解题思路

计算总分数，遍历分割点 i，用前缀和判断左半分数是否等于总分数的一半。

## Solution

[SourceCode](./solution.js)
