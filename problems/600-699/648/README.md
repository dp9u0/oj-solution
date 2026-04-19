# [648] Replace Words

## Description

[LeetCode Problem Description](https://leetcode.com/problems/replace-words/description/)

* algorithms
* Medium (68.70%)
* Likes:    3115
* Dislikes: 219
* Testcase Example:  '["cat","bat","rat"]\n"the cattle was rattled by the battery"'

```md
In English, we have a concept called root, which can be followed by some other word to form another longer word - let&#39;s call this word derivative. For example, when the root 'help' is followed by the word 'ful', we can form a derivative 'helpful'.
Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.
Return the sentence after the replacement.

Example 1:

Input: dictionary = ['cat','bat','rat'], sentence = 'the cattle was rattled by the battery'
Output: 'the cat was rat by the bat'

Example 2:

Input: dictionary = ['a','b','c'], sentence = 'aadsfasf absbs bbab cadsfafs'
Output: 'a a b c'


Constraints:

1 <= dictionary.length <= 1000
1 <= dictionary[i].length <= 100
dictionary[i] consists of only lower-case letters.
1 <= sentence.length <= 106
sentence consists of only lower-case letters and spaces.
The number of words in sentence is in the range [1, 1000]
The length of each word in sentence is in the range [1, 1000]
Every two consecutive words in sentence will be separated by exactly one space.
sentence does not have leading or trailing spaces.


```

## 中文翻译

给定一个由词根组成的字典和一个由空格分隔的句子。将句子中所有派生词替换为构成它的词根。如果一个词可以被多个词根替换，选择最短的那个。

## 解题思路

**Trie 字典树：**

1. 将所有词根插入 Trie
2. 对句子中每个单词，在 Trie 中查找最短匹配的前缀
3. 找到匹配则替换，否则保留原词

时间复杂度：O(D * L + S * L)，D 为字典大小，S 为单词数，L 为平均长度

## Solution

[SourceCode](./solution.js)
