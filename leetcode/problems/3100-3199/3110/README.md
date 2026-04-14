# [3110] Score of a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/score-of-a-string/description/)

* algorithms
* Easy (91.34%)
* Likes:    855
* Dislikes: 52
* Testcase Example:  '"hello"'

```md
You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
Return the score of s.

Example 1:

Input: s = 'hello'
Output: 13
Explanation:
The ASCII values of the characters in s are: &#39;h&#39; = 104, &#39;e&#39; = 101, &#39;l&#39; = 108, &#39;o&#39; = 111. So, the score of s would be
104 - 101
+
101 - 108
+
108 - 108
+
108 - 111
= 3 + 7 + 0 + 3 = 13.

Example 2:

Input: s = 'zaz'
Output: 50
Explanation:
The ASCII values of the characters in s are: &#39;z&#39; = 122, &#39;a&#39; = 97. So, the score of s would be
122 - 97
+
97 - 122
= 25 + 25 = 50.


Constraints:

2 <= s.length <= 100
s consists only of lowercase English letters.


```

## 翻译

给定字符串 s，score 定义为相邻字符 ASCII 码绝对差之和。返回 score。

## Approach

遍历字符串，累加相邻字符的 ASCII 差绝对值。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
