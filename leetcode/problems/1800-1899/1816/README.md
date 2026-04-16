# [1816] Truncate Sentence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/truncate-sentence/description/)

* algorithms
* Easy (86.76%)
* Likes:    1231
* Dislikes: 34
* Testcase Example:  '"Hello how are you Contestant"\n4'

```md
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, 'Hello World', 'HELLO', and 'hello world hello world' are all sentences.

You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

Example 1:

Input: s = 'Hello how are you Contestant', k = 4
Output: 'Hello how are you'
Explanation:
The words in s are ['Hello', 'how' 'are', 'you', 'Contestant'].
The first 4 words are ['Hello', 'how', 'are', 'you'].
Hence, you should return 'Hello how are you'.

Example 2:

Input: s = 'What is the solution to this problem', k = 4
Output: 'What is the solution'
Explanation:
The words in s are ['What', 'is' 'the', 'solution', 'to', 'this', 'problem'].
The first 4 words are ['What', 'is', 'the', 'solution'].
Hence, you should return 'What is the solution'.
Example 3:

Input: s = 'chopper is not a tanuki', k = 5
Output: 'chopper is not a tanuki'


Constraints:

1 <= s.length <= 500
k is in the range [1, the number of words in s].
s consist of only lowercase and uppercase English letters and spaces.
The words in s are separated by a single space.
There are no leading or trailing spaces.


```

## 题目翻译

给定一个由空格分隔的句子 s 和整数 k，截取句子使其只包含前 k 个单词，返回截取后的句子。

## 解题思路

**直接分割**

将句子按空格 split，取前 k 个单词再用空格 join 即可。

## Solution

[SourceCode](./solution.js)
