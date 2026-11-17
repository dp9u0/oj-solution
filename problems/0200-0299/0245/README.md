# [245] 最短单词距离 III

## Description


```md
https://leetcode.cn/problems/shortest-word-distance-iii/description/
* algorithms
* Medium (58.81%)
* Likes:    72
* Dislikes: -
* Testcase Example:  '["practice", "makes", "perfect", "coding", "makes"]\n"makes"\n"coding"'
给定一个字符串数组 wordsDict 和两个字符串 word1 和 word2 ，返回这两个单词在列表中出现的最短距离。
注意：word1 和 word2 是有可能相同的，并且它们将分别表示为列表中 两个独立的单词 。

示例 1：
输入：wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
输出：1
示例 2：
输入：wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "makes"
输出：3

提示：
1 <= wordsDict.length <= 105
1 <= wordsDict[i].length <= 10
wordsDict[i] 由小写英文字母组成
word1 和 word2 都在 wordsDict 中

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Like 243/244 but `word1` may **equal** `word2` (they refer to two distinct positions in the list). Return the shortest distance between them.

**Example:**
["practice","makes","perfect","coding","makes"], "makes", "makes" → 3 (positions 1 and 4)

**Constraints:**
- 2 <= wordsDict.length <= 3*10^4

## Approach

一遍扫描,按 word1 是否等于 word2 分支:不同词则记录两词最近下标互算距离;相同词则把当前下标当作"前一个出现位置",与上一次出现位置作差。

时间 O(n),空间 O(1)。
