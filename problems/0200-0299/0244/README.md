# [244] 最短单词距离 II

## Description


```md
https://leetcode.cn/problems/shortest-word-distance-ii/description/
* algorithms
* Medium (59.88%)
* Likes:    105
* Dislikes: -
* Testcase Example:  '["WordDistance","shortest","shortest"]\n' +
'[[["practice","makes","perfect","coding","makes"]],["coding","practice"],["makes","coding"]]'
请设计一个类，使该类的构造函数能够接收一个字符串数组。然后再实现一个方法，该方法能够分别接收两个单词，并返回列表中这两个单词之间的最短距离。
实现 WordDistanc 类:
WordDistance(String[] wordsDict) 用字符串数组 wordsDict 初始化对象。
int shortest(String word1, String word2) 返回数组 worddict 中 word1 和 word2 之间的最短距离。

示例 1:
输入:
["WordDistance", "shortest", "shortest"]
[[["practice", "makes", "perfect", "coding", "makes"]], ["coding", "practice"], ["makes", "coding"]]
输出:
[null, 3, 1]
解释：
WordDistance wordDistance = new WordDistance(["practice", "makes", "perfect", "coding", "makes"]);
wordDistance.shortest("coding", "practice"); // 返回 3
wordDistance.shortest("makes", "coding");    // 返回 1

注意:
1 <= wordsDict.length <= 3 * 104
1 <= wordsDict[i].length <= 10
wordsDict[i] 由小写英文字母组成
word1 和 word2 在数组 wordsDict 中
word1 != word2
shortest 操作次数不大于 5000

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Design a `WordDistance` class over a word list: `shortest(word1, word2)` (called many times, word1 != word2) returns the minimal distance between the two words' occurrences.

**Constraints:**
- 1 <= wordsDict.length <= 3*10^4, multiple shortest() calls

## Approach

构造时预计算 词→下标表(各自有序);每次查询对两个下标表做归并式双指针,指针较小者前进,沿途更新最小绝对差。

时间:构造 O(n),查询 O(a + b);空间 O(n)。
