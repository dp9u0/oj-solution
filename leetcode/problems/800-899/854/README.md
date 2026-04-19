# [854] K-Similar Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-similar-strings/description/)

* algorithms
* Hard (40.81%)
* Likes:    1181
* Dislikes: 63
* Testcase Example:  '"ab"\n"ba"'

```md
Strings s1 and s2 are k-similar (for some non-negative integer k) if we can swap the positions of two letters in s1 exactly k times so that the resulting string equals s2.
Given two anagrams s1 and s2, return the smallest k for which s1 and s2 are k-similar.

Example 1:

Input: s1 = 'ab', s2 = 'ba'
Output: 1
Explanation: The two string are 1-similar because we can use one swap to change s1 to s2: 'ab' --> 'ba'.

Example 2:

Input: s1 = 'abc', s2 = 'bca'
Output: 2
Explanation: The two strings are 2-similar because we can use two swaps to change s1 to s2: 'abc' --> 'bac' --> 'bca'.


Constraints:

1 <= s1.length <= 20
s2.length == s1.length
s1 and s2 contain only lowercase letters from the set {&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;}.
s2 is an anagram of s1.


```

## 翻译

给定两个字母异位词s1和s2，求最少需要多少次交换（交换s1中两个字符的位置）才能将s1变成s2。

## 解题思路

BFS。每次找到第一个不匹配的位置i，然后尝试将s1[i]与后面所有s1[j]==s2[i]的j交换。用visited集合去重，BFS保证最短路径。由于n≤20且每次固定第一个不匹配位，搜索空间可控。

## Solution

[SourceCode](./solution.js)
