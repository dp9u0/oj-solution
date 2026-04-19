# [1451] Rearrange Words in a Sentence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rearrange-words-in-a-sentence/description/)

* algorithms
* Medium (66.96%)
* Likes:    787
* Dislikes: 80
* Testcase Example:  '"Leetcode is cool"'

```md
Given a sentencetext (Asentenceis a string of space-separated words) in the following format:

First letter is in upper case.
Each word in text are separated by a single space.

Your task is to rearrange the words in text such thatall words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.
Return the new textfollowing the format shown above.

Example 1:

Input: text = 'Leetcode is cool'
Output: 'Is cool leetcode'
Explanation: There are 3 words, 'Leetcode' of length 8, 'is' of length 2 and 'cool' of length 4.
Output is ordered by length and the new first word starts with capital letter.

Example 2:

Input: text = 'Keep calm and code on'
Output: 'On and keep calm code'
Explanation: Output is ordered as follows:
'On' 2 letters.
'and' 3 letters.
'keep' 4 letters in case of tie order by position in original text.
'calm' 4 letters.
'code' 4 letters.

Example 3:

Input: text = 'To be or not to be'
Output: 'To be or to be not'


Constraints:

text begins with a capital letter and then contains lowercase letters and single space between words.
1 <= text.length <= 10^5


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个句子，按单词长度升序排列。长度相同的保持原始顺序（稳定排序）。结果首字母大写，其余小写。

## 解题思路

拆分单词，转小写，按长度稳定排序，拼接后首字母大写。利用 JS sort 是稳定排序的特性。O(n log n)。
