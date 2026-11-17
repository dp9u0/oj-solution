# [243] 最短单词距离

## Description


```md
https://leetcode.cn/problems/shortest-word-distance/description/
* algorithms
* Easy (68.21%)
* Likes:    129
* Dislikes: -
* Testcase Example:  '["practice", "makes", "perfect", "coding", "makes"]\n"coding"\n"practice"'
给定一个字符串数组 wordDict 和两个已经存在于该数组中的不同的字符串 word1 和 word2 。返回列表中这两个单词之间的最短距离。

示例 1:
输入: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
输出: 3
示例 2:
输入: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
输出: 1

提示:
1 <= wordsDict.length <= 3 * 104
1 <= wordsDict[i].length <= 10
wordsDict[i] 由小写英文字母组成
word1 和 word2 在 wordsDict 中
word1 != word2

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an array `wordsDict` and two different words `word1`, `word2`, return the shortest distance between the two words' occurrences in the list.

**Example:**
["practice","makes","perfect","coding","makes"], "makes", "coding" → 1

**Constraints:**
- 2 <= wordsDict.length <= 3*10^4, word1 != word2

## Approach

一遍扫描:分别记录两词最近出现的下标,每当一方出现且另一方已出现过,更新最小距离。

时间 O(n),空间 O(1)。
