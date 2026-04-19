# [472] Concatenated Words

## Description

[LeetCode Problem Description](https://leetcode.com/problems/concatenated-words/description/)

* algorithms
* Hard (49.75%)
* Likes:    4069
* Dislikes: 293
* Testcase Example:  '["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]'

```md
Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words (not necessarily distinct)in the given array.

Example 1:

Input: words = ['cat','cats','catsdogcats','dog','dogcatsdog','hippopotamuses','rat','ratcatdogcat']
Output: ['catsdogcats','dogcatsdog','ratcatdogcat']
Explanation: 'catsdogcats' can be concatenated by 'cats', 'dog' and 'cats';
'dogcatsdog' can be concatenated by 'dog', 'cats' and 'dog';
'ratcatdogcat' can be concatenated by 'rat', 'cat', 'dog' and 'cat'.
Example 2:

Input: words = ['cat','dog','catdog']
Output: ['catdog']


Constraints:

1 <= words.length <= 104
1 <= words[i].length <= 30
words[i] consists of only lowercase English letters.
All the strings of words are unique.
1 <= sum(words[i].length) <= 105


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定不含重复的字符串数组 words，返回所有由至少两个更短的 words 中的词拼接而成的词。

## 解题思路

按长度排序后逐个处理。维护一个已确认的"基础词"集合。对每个词用 DP 检查是否能由集合中的词拼接（至少分两段）。如果是，加入结果；如果不是，加入基础词集合。DP: dp[i] 表示 s[0..i-1] 能否由基础词拼接，至少分两段则要求分割处 dp[j]=true 且 s[j..i-1] 在集合中，且不是不分割的情况。
