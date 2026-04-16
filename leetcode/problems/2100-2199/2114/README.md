# [2114] Maximum Number of Words Found in Sentences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/)

* algorithms
* Easy (86.67%)
* Likes:    1905
* Dislikes: 66
* Testcase Example:  '["alice and bob love leetcode","i think so too","this is great thanks very much"]'

```md
A sentence is a list of words that are separated by a single spacewith no leading or trailing spaces.
You are given an array of strings sentences, where each sentences[i] represents a single sentence.
Return the maximum number of words that appear in a single sentence.

Example 1:

Input: sentences = ['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']
Output: 6
Explanation:
- The first sentence, 'alice and bob love leetcode', has 5 words in total.
- The second sentence, 'i think so too', has 4 words in total.
- The third sentence, 'this is great thanks very much', has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

Example 2:

Input: sentences = ['please wait', 'continue to fight', 'continue to win']
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words.
In this example, the second and third sentences (underlined) have the same number of words.


Constraints:

1 <= sentences.length <= 100
1 <= sentences[i].length <= 100
sentences[i] consists only of lowercase English letters and &#39; &#39; only.
sentences[i] does not have leading or trailing spaces.
All the words in sentences[i] are separated by a single space.


```

## 中文翻译

给定字符串数组 sentences，每个元素是一个句子。返回句子中最大的单词数。

## 解题思路

单词数 = 空格数 + 1。统计每个句子中空格数的最大值加 1。

## Solution

[SourceCode](./solution.js)
