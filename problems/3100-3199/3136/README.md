# [3136] Valid Word

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-word/description/)

* algorithms
* Easy (50.87%)
* Likes:    483
* Dislikes: 170
* Testcase Example:  '"234Adas"'

```md
A word is considered valid if:

It contains a minimum of 3 characters.
It contains only digits (0-9), and English letters (uppercase and lowercase).
It includes at least one vowel.
It includes at least one consonant.

You are given a string word.
Return true if word is valid, otherwise, return false.
Notes:

&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;, and their uppercases are vowels.
A consonant is an English letter that is not a vowel.


Example 1:

Input: word = '234Adas'
Output: true
Explanation:
This word satisfies the conditions.

Example 2:

Input: word = 'b3'
Output: false
Explanation:
The length of this word is fewer than 3, and does not have a vowel.

Example 3:

Input: word = 'a3$e'
Output: false
Explanation:
This word contains a &#39;$&#39; character and does not have a consonant.


Constraints:

1 <= word.length <= 20
word consists of English uppercase and lowercase letters, digits, &#39;@&#39;, &#39;#&#39;, and &#39;$&#39;.


```

## 题目翻译

判断字符串 word 是否有效：长度 >= 3，只含数字和英文字母，至少一个元音，至少一个辅音。

## 解题思路

遍历检查四个条件：长度、字符合法性、含元音、含辅音。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
