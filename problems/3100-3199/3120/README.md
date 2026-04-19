# [3120] Count the Number of Special Characters I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-special-characters-i/description/)

* algorithms
* Easy (66.88%)
* Likes:    177
* Dislikes: 5
* Testcase Example:  '"aaAbcBC"'

```md
You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.
Return the number of special letters in word.

Example 1:

Input: word = 'aaAbcBC'
Output: 3
Explanation:
The special characters in word are &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.

Example 2:

Input: word = 'abc'
Output: 0
Explanation:
No character in word appears in uppercase.

Example 3:

Input: word = 'abBCab'
Output: 1
Explanation:
The only special character in word is &#39;b&#39;.


Constraints:

1 <= word.length <= 50
word consists of only lowercase and uppercase English letters.


```

## 中文翻译

给定字符串 word，如果一个字母同时以小写和大写形式出现在 word 中，则称为特殊字母。返回特殊字母的个数。

## 解题思路

用两个 Set 分别记录出现的小写字母和大写字母（转为小写），统计交集大小。

## Solution

[SourceCode](./solution.js)
