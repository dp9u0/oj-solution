# [2351] First Letter to Appear Twice

## Description

[LeetCode Problem Description](https://leetcode.com/problems/first-letter-to-appear-twice/description/)

* algorithms
* Easy (74.95%)
* Likes:    1192
* Dislikes: 65
* Testcase Example:  '"abccbaacz"'

```md
Given a string s consisting of lowercase English letters, return the first letter to appear twice.
Note:

A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
s will contain at least one letter that appears twice.


Example 1:

Input: s = 'abccbaacz'
Output: 'c'
Explanation:
The letter &#39;a&#39; appears on the indexes 0, 5 and 6.
The letter &#39;b&#39; appears on the indexes 1 and 4.
The letter &#39;c&#39; appears on the indexes 2, 3 and 7.
The letter &#39;z&#39; appears on the index 8.
The letter &#39;c&#39; is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

Example 2:

Input: s = 'abcdd'
Output: 'd'
Explanation:
The only letter that appears twice is &#39;d&#39; so we return &#39;d&#39;.


Constraints:

2 <= s.length <= 100
s consists of lowercase English letters.
s has at least one repeated letter.


```

## 翻译

给定小写字母字符串s，返回第一个出现两次的字母（第二次出现位置最早的）。

## 解题思路

用Set记录已见字符，遍历遇到重复即返回。

## Solution

[SourceCode](./solution.js)
