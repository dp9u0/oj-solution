# [3775] Reverse Words With Same Vowel Count

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reverse-words-with-same-vowel-count/description/)

* algorithms
* Medium (66.74%)
* Likes:    57
* Dislikes: 8
* Testcase Example:  '"cat and mice"'

```md
You are given a string s consisting of lowercase English words, each separated by a single space.
Determine how many vowels appear in the first word. Then, reverse each following word that has the same vowel count. Leave all remaining words unchanged.
Return the resulting string.
Vowels are &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;.

Example 1:

Input: s = 'cat and mice'
Output: 'cat dna mice'
Explanation:​​​​​​​

The first word 'cat' has 1 vowel.
'and' has 1 vowel, so it is reversed to form 'dna'.
'mice' has 2 vowels, so it remains unchanged.
Thus, the resulting string is 'cat dna mice'.


Example 2:

Input: s = 'book is nice'
Output: 'book is ecin'
Explanation:

The first word 'book' has 2 vowels.
'is' has 1 vowel, so it remains unchanged.
'nice' has 2 vowels, so it is reversed to form 'ecin'.
Thus, the resulting string is 'book is ecin'.


Example 3:

Input: s = 'banana healthy'
Output: 'banana healthy'
Explanation:

The first word 'banana' has 3 vowels.
'healthy' has 2 vowels, so it remains unchanged.
Thus, the resulting string is 'banana healthy'.



Constraints:

1 <= s.length <= 105
s consists of lowercase English letters and spaces.
Words in s are separated by a single space.
s does not contain leading or trailing spaces.


```

## 中文翻译

给定字符串 s，统计第一个单词的元音数，然后将后续元音数相同的单词反转，其余不变。

## 解题思路

拆分单词，统计第一个单词的元音数，后续单词元音数相同则反转。

## Solution

[SourceCode](./solution.js)
