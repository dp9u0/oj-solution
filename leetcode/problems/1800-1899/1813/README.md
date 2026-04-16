# [1813] Sentence Similarity III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sentence-similarity-iii/description/)

* algorithms
* Medium (48.43%)
* Likes:    1071
* Dislikes: 163
* Testcase Example:  '"My name is Haley"\n"My Haley"'

```md
You are given two strings sentence1 and sentence2, each representing a sentence composed of words. A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of only uppercase and lowercase English characters.
Two sentences s1 and s2 are considered similar if it is possible to insert an arbitrary sentence (possibly empty) inside one of these sentences such that the two sentences become equal. Note that the inserted sentence must be separated from existing words by spaces.
For example,

s1 = 'Hello Jane' and s2 = 'Hello my name is Jane' can be made equal by inserting 'my name is' between 'Hello' and 'Jane' in s1.
s1 = 'Frog cool' and s2 = 'Frogs are cool' are not similar, since although there is a sentence 's are' inserted into s1, it is not separated from 'Frog' by a space.

Given two sentences sentence1 and sentence2, return true if sentence1 and sentence2 are similar. Otherwise, return false.

Example 1:

Input: sentence1 = 'My name is Haley', sentence2 = 'My Haley'
Output: true
Explanation:
sentence2 can be turned to sentence1 by inserting 'name is' between 'My' and 'Haley'.

Example 2:

Input: sentence1 = 'of', sentence2 = 'A lot of words'
Output: false
Explanation:
No single sentence can be inserted inside one of the sentences to make it equal to the other.

Example 3:

Input: sentence1 = 'Eating right now', sentence2 = 'Eating'
Output: true
Explanation:
sentence2 can be turned to sentence1 by inserting 'right now' at the end of the sentence.


Constraints:

1 <= sentence1.length, sentence2.length <= 100
sentence1 and sentence2 consist of lowercase and uppercase English letters and spaces.
The words in sentence1 and sentence2 are separated by a single space.


```

## 题目翻译

给定两个句子字符串 sentence1 和 sentence2。如果可以在其中一个句子中插入一个任意句子（可以为空），使两个句子相等，则认为它们相似。插入的句子必须与已有单词用空格分隔。判断两个句子是否相似。

## 解题思路

**双端匹配（双指针）**。

- 将两个句子拆分为单词数组 s1、s2，假设 s1 是较长的那个。
- 从左端匹配公共前缀，从右端匹配公共后缀。
- 如果左端匹配数 + 右端匹配数 >= 较短数组的长度，说明可以在中间插入一段使其相等，返回 true。
- 否则返回 false。

## Solution

[SourceCode](./solution.js)
