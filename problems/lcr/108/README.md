# [LCR 108] 单词接龙

## Description


```md
https://leetcode.cn/problems/om3reC/description/
* algorithms
* Hard (58.73%)
* Likes:    45
* Dislikes: -
* Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
在字典（单词列表） wordList 中，从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：
序列中第一个单词是 beginWord 。
序列中最后一个单词是 endWord 。
每次转换只能改变一个字母。
转换过程中的中间单词必须是字典 wordList 中的单词。
给定两个长度相同但内容不同的单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。

示例 1：
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：5
解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
示例 2：
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
输出：0
解释：endWord "cog" 不在字典中，所以无法进行转换。

提示：
1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord、endWord 和 wordList[i] 由小写英文字母组成
beginWord != endWord
wordList 中的所有字符串 互不相同

注意：本题与主站 127 题相同： https://leetcode.cn/problems/word-ladder/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

In dictionary `wordList`, a transformation sequence from `beginWord` to `endWord` is: first word = beginWord, last = endWord, each consecutive pair differs by exactly one letter, and every intermediate word is in `wordList`. Given equal-length distinct `beginWord`, `endWord`, and `wordList`, return the number of words in the **shortest** transformation sequence. If none, return 0.

**Example 1:** `hit → cog` with list including cog → `5`
**Example 2:** cog not in list → `0`

**Constraints:** word length ≤ 10, list ≤ 5000.

Note: same as LeetCode 127.

---

## Approach

**BFS.** Treat words as graph nodes with edges between words differing in one character.

- Build an adjacency via **wildcard keys**: for each word produce all patterns with one char replaced by `*`, mapping pattern → list of words. beginWord (even if absent) is added as a start node; find its neighbors by the same wildcards.
- BFS counts levels; the first time `endWord` is reached, its level = sequence length.

Complexity: `O(n·L·26)` neighborhood enumeration.
