# [1455] Check If a Word Occurs As a Prefix of Any Word in a Sentence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/)

* algorithms
* Easy (68.76%)
* Likes:    1331
* Dislikes: 60
* Testcase Example:  '"i love eating burger"\n"burg"'

```md
Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
A prefix of a string s is any leading contiguous substring of s.

Example 1:

Input: sentence = 'i love eating burger', searchWord = 'burg'
Output: 4
Explanation: 'burg' is prefix of 'burger' which is the 4th word in the sentence.

Example 2:

Input: sentence = 'this problem is an easy problem', searchWord = 'pro'
Output: 2
Explanation: 'pro' is prefix of 'problem' which is the 2nd and the 6th word in the sentence, but we return 2 as it&#39;s the minimal index.

Example 3:

Input: sentence = 'i am tired', searchWord = 'you'
Output: -1
Explanation: 'you' is not a prefix of any word in the sentence.


Constraints:

1 <= sentence.length <= 100
1 <= searchWord.length <= 10
sentence consists of lowercase English letters and spaces.
searchWord consists of lowercase English letters.


```

## 中文翻译

检查 searchWord 是否为句子中某个单词的前缀，返回第一个匹配单词的 1-indexed 位置，不存在返回 -1。

## 解题思路

split 后遍历检查 startsWith。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
