# [2062] Count Vowel Substrings of a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-vowel-substrings-of-a-string/description/)

* algorithms
* Easy (73.05%)
* Likes:    1120
* Dislikes: 438
* Testcase Example:  '"aeiouu"'

```md
A substring is a contiguous (non-empty) sequence of characters within a string.
A vowel substring is a substring that only consists of vowels (&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;) and has all five vowels present in it.
Given a string word, return the number of vowel substrings in word.

Example 1:

Input: word = 'aeiouu'
Output: 2
Explanation: The vowel substrings of word are as follows (underlined):
- 'aeiouu'
- 'aeiouu'

Example 2:

Input: word = 'unicornarihan'
Output: 0
Explanation: Not all 5 vowels are present, so there are no vowel substrings.

Example 3:

Input: word = 'cuaieuouac'
Output: 7
Explanation: The vowel substrings of word are as follows (underlined):
- 'cuaieuouac'
- 'cuaieuouac'
- 'cuaieuouac'
- 'cuaieuouac'
- 'cuaieuouac'
- 'cuaieuouac'
- 'cuaieuouac'


Constraints:

1 <= word.length <= 100
word consists of lowercase English letters only.


```

## 中文翻译

给定字符串 word，统计其中"元音子串"的数量。元音子串是指只包含 a/e/i/o/u 五个元音字母，且五个元音字母都至少出现一次的子串。

## 解题思路

n <= 100，直接暴力枚举所有子串。对外层起点 i，内层终点 j 从 i 向右扩展，遇到非元音字符则 break。用 Set 或位掩码记录当前出现的元音种类，当集合大小为 5 时计数加一。

时间复杂度：O(n^2)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
