# [3813] Vowel-Consonant Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/vowel-consonant-score/description/)

* algorithms
* Easy (53.95%)
* Likes:    50
* Dislikes: 4
* Testcase Example:  '"cooear"'

```md
You are given a string s consisting of lowercase English letters, spaces, and digits.
Let v be the number of vowels in s and c be the number of consonants in s.
A vowel is one of the letters &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, or &#39;u&#39;, while any other letter in the English alphabet is considered a consonant.
The score of the string s is defined as follows:

If c > 0, the score = floor(v / c) where floor denotes rounding down to the nearest integer.
Otherwise, the score = 0.

Return an integer denoting the score of the string.

Example 1:

Input: s = 'cooear'
Output: 2
Explanation:
The string s = 'cooear' contains v = 4 vowels (&#39;o&#39;, &#39;o&#39;, &#39;e&#39;, &#39;a&#39;) and c = 2 consonants (&#39;c&#39;, &#39;r&#39;).
The score is floor(v / c) = floor(4 / 2) = 2.

Example 2:

Input: s = 'axeyizou'
Output: 1
Explanation:
The string s = 'axeyizou' contains v = 5 vowels (&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;) and c = 3 consonants (&#39;x&#39;, &#39;y&#39;, &#39;z&#39;).
The score is floor(v / c) = floor(5 / 3) = 1.

Example 3:

Input: s = 'au 123'
Output: 0
Explanation:
The string s = 'au 123' contains no consonants (c = 0), so the score is 0.


Constraints:

1 <= s.length <= 100
s consists of lowercase English letters, spaces and digits.


```

## 翻译

给定字符串 s（含小写字母、空格和数字）。统计元音数 v 和辅音数 c。若 c > 0，分数 = floor(v/c)；否则分数 = 0。

## Approach

遍历字符串，用 Set 判断元音，统计 v 和 c。返回 c > 0 ? Math.floor(v/c) : 0。
时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
