# [3325] Count Substrings With K-Frequency Characters I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/description/)

* algorithms
* Medium (55.75%)
* Likes:    154
* Dislikes: 10
* Testcase Example:  '"abacb"\n2'

```md
Given a string s and an integer k, return the total number of substrings of s where at least one character appears at least k times.

Example 1:

Input: s = 'abacb', k = 2
Output: 4
Explanation:
The valid substrings are:

'aba' (character &#39;a&#39; appears 2 times).
'abac' (character &#39;a&#39; appears 2 times).
'abacb' (character &#39;a&#39; appears 2 times).
'bacb' (character &#39;b&#39; appears 2 times).


Example 2:

Input: s = 'abcde', k = 1
Output: 15
Explanation:
All substrings are valid because every character appears at least once.


Constraints:

1 <= s.length <= 3000
1 <= k <= s.length
s consists only of lowercase English letters.


```

## 翻译

给定字符串s和整数k，统计至少有一个字符出现次数>=k的子串数量。s长度<=3000。

## 解题思路

固定左端点l，向右扩展r，当某个字符计数首次达到k时，以r..n-1为右端点的所有子串都合法，累加n-r后break。O(n^2)对n=3000可行。

## Solution

[SourceCode](./solution.js)
