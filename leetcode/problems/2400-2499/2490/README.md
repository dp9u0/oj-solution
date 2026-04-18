# [2490] Circular Sentence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/circular-sentence/description/)

* algorithms
* Easy (70.19%)
* Likes:    765
* Dislikes: 28
* Testcase Example:  '"leetcode exercises sound delightful"'

```md
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

For example, 'Hello World', 'HELLO', 'hello world hello world' are all sentences.

Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.
A sentence is circular if:

The last character of each word in the sentence is equal to the first character of its next word.
The last character of the last word is equal to the first character of the first word.

For example, 'leetcode exercises sound delightful', 'eetcode', 'leetcode eats soul' are all circular sentences. However, 'Leetcode is cool', 'happy Leetcode', 'Leetcode' and 'I like Leetcode' are not circular sentences.
Given a string sentence, return true if it is circular. Otherwise, return false.

Example 1:

Input: sentence = 'leetcode exercises sound delightful'
Output: true
Explanation: The words in sentence are ['leetcode', 'exercises', 'sound', 'delightful'].
- leetcode&#39;slast character is equal to exercises&#39;s first character.
- exercises&#39;slast character is equal to sound&#39;s first character.
- sound&#39;slast character is equal to delightful&#39;s first character.
- delightful&#39;slast character is equal to leetcode&#39;s first character.
The sentence is circular.
Example 2:

Input: sentence = 'eetcode'
Output: true
Explanation: The words in sentence are ['eetcode'].
- eetcode&#39;slast character is equal to eetcode&#39;s first character.
The sentence is circular.
Example 3:

Input: sentence = 'Leetcode is cool'
Output: false
Explanation: The words in sentence are ['Leetcode', 'is', 'cool'].
- Leetcode&#39;slast character is not equal to is&#39;s first character.
The sentence is not circular.

Constraints:

1 <= sentence.length <= 500
sentence consist of only lowercase and uppercase English letters and spaces.
The words in sentence are separated by a single space.
There are no leading or trailing spaces.


```

## 翻译

给定句子，判断是否为环形句子：每个单词末字符等于下一个单词首字符，且最后单词末字符等于第一个单词首字符。

## 解题思路

按空格分割单词，遍历检查每个单词末字符与下一个单词首字符是否相同（含环形首尾检查）。

## Solution

[SourceCode](./solution.js)
