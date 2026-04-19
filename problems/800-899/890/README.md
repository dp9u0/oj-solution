# [890] Find and Replace Pattern

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-and-replace-pattern/description/)

* algorithms
* Medium (77.01%)
* Likes:    4031
* Dislikes: 175
* Testcase Example:  '["abc","deq","mee","aqq","dkd","ccc"]\n"abb"'

```md
Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.
A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

Example 1:

Input: words = ['abc','deq','mee','aqq','dkd','ccc'], pattern = 'abb'
Output: ['mee','aqq']
Explanation: 'mee' matches the pattern because there is a permutation {a -> m, b -> e, ...}.
'ccc' does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.

Example 2:

Input: words = ['a','b','c'], pattern = 'a'
Output: ['a','b','c']


Constraints:

1 <= pattern.length <= 20
1 <= words.length <= 50
words[i].length == pattern.length
pattern and words[i] are lowercase English letters.


```

## 翻译

给定单词列表和模式串，返回所有与模式匹配的单词。匹配要求存在字母的双射（一一映射）使模式变为该单词。

## Approach

双映射检查。对每个单词，用两个 Map 分别记录 pattern→word 和 word→pattern 的映射。遍历时检查双向一致性，不一致则不匹配。

## Solution

[SourceCode](./solution.js)
