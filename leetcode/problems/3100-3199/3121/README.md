# [3121] Count the Number of Special Characters II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-special-characters-ii/description/)

* algorithms
* Medium (43.43%)
* Likes:    183
* Dislikes: 16
* Testcase Example:  '"aaAbcBC"'

```md
You are given a string word. A letterc is called special if it appears both in lowercase and uppercase in word, and every lowercase occurrence of c appears before the first uppercase occurrence of c.
Return the number of special letters in word.

Example 1:

Input: word = 'aaAbcBC'
Output: 3
Explanation:
The special characters are &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.

Example 2:

Input: word = 'abc'
Output: 0
Explanation:
There are no special characters in word.

Example 3:

Input: word = 'AbBCab'
Output: 0
Explanation:
There are no special characters in word.


Constraints:

1 <= word.length <= 2 * 105
word consists of only lowercase and uppercase English letters.


```

## 题目翻译

给定字符串 word，统计"特殊字母"数量：字母 c 同时以小写和大写出现，且所有小写出现都在第一个大写出现之前。

## 解题思路

**状态机**

对每个字母维护状态：0=未出现、1=仅小写、2=有效（先小写后大写）、3=无效。扫描一遍统计状态 2 的数量。O(n) 时间。

## Solution

[SourceCode](./solution.js)
