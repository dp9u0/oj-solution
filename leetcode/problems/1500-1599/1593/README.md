# [1593] Split a String Into the Max Number of Unique Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/description/)

* algorithms
* Medium (68.63%)
* Likes:    1516
* Dislikes: 73
* Testcase Example:  '"ababccc"'

```md
Given a strings,return the maximumnumber of unique substrings that the given string can be split into.
You can split strings into any list ofnon-empty substrings, where the concatenation of the substrings forms the original string.However, you must split the substrings such that all of them are unique.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = 'ababccc'
Output: 5
Explanation: One way to split maximally is [&#39;a&#39;, &#39;b&#39;, &#39;ab&#39;, &#39;c&#39;, &#39;cc&#39;]. Splitting like [&#39;a&#39;, &#39;b&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;cc&#39;] is not valid as you have &#39;a&#39; and &#39;b&#39; multiple times.

Example 2:

Input: s = 'aba'
Output: 2
Explanation: One way to split maximally is [&#39;a&#39;, &#39;ba&#39;].

Example 3:

Input: s = 'aa'
Output: 1
Explanation: It is impossible to split the string any further.


Constraints:


1 <= s.length<= 16


s containsonly lower case English letters.



```

## 翻译

给定字符串s，将其分割为若干不重复的子串，使子串数量最大。s长度<=16。

## 解题思路

回溯法。从位置0开始DFS，尝试所有可能的子串长度，用Set去重。s长度<=16，搜索空间可控。

## Solution

[SourceCode](./solution.js)
