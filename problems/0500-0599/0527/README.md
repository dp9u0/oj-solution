# [527] 单词缩写

## Description


```md
https://leetcode.cn/problems/word-abbreviation/description/
* algorithms
* Hard (61.08%)
* Likes:    60
* Dislikes: -
* Testcase Example:  '["like","god","internal","me","internet","interval","intension","face","intrusion"]'
给你一个字符串数组 words ，该数组由 互不相同 的若干字符串组成，请你找出并返回每个单词的 最小缩写 。
生成缩写的规则如下：
初始缩写由起始字母+省略字母的数量+结尾字母组成。
若存在冲突，亦即多于一个单词有同样的缩写，则使用更长的前缀代替首字母，直到从单词到缩写的映射唯一。换而言之，最终的缩写必须只能映射到一个单词。
若缩写并不比原单词更短，则保留原样。

示例 1：
输入: words = ["like", "god", "internal", "me", "internet", "interval", "intension", "face", "intrusion"]
输出: ["l2e","god","internal","me","i6t","interval","inte4n","f2e","intr4n"]
示例 2：
输入：words = ["aa","aaa"]
输出：["aa","aaa"]

提示：
1 <= words.length <= 400
2 <= words[i].length <= 400
words[i] 由小写英文字母组成
words 中的所有字符串 互不相同

```

## Solution

[SourceCode](./solution.js)

## Translation

For each distinct word, produce its minimal abbreviation: `first letters + number of omitted middle letters + last letter`; on abbreviation collisions, extend the prefix until unique; if the abbreviation isn't shorter than the word, keep the word.

- Example 1: ["like","god","internal","me","internet","interval","intension","face","intrusion"] → ["l2e","god","internal","me","i6t","interval","inte4n","f2e","intr4n"]
- Example 2: ["aa","aaa"] → ["aa","aaa"]

Constraints: ≤ 400 words; word length ≤ 400.

## Approach

**(长度,首字母,尾字母)分组** —— 缩写不变首尾和长度,冲突只可能发生在同组内。组内建 **Trie 计数**,每词沿 Trie 走到第一个 count==1 的节点,该前缀即为最短唯一前缀 p:

- 缩写 = `w[0..p) + (len-p-1) + 末字母`,中间数字 ≥ 2 才比原词短,否则保留原词(含 p 走到词尾的情形)。

时间 O(总字符数)。
