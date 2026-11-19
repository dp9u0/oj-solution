# [1181] 前后拼接

## Description


```md
https://leetcode.cn/problems/before-and-after-puzzle/description/
* algorithms
* Medium (43.13%)
* Likes:    19
* Dislikes: -
* Testcase Example:  '["writing code","code rocks"]'
给你一个「短语」列表 phrases，请你帮忙按规则生成拼接后的「新短语」列表。
「短语」（phrase）是仅由小写英文字母和空格组成的字符串。「短语」的开头和结尾都不会出现空格，「短语」中的空格不会连续出现。
「前后拼接」（Before and After puzzles）是合并两个「短语」形成「新短语」的方法。我们规定拼接时，第一个短语的最后一个单词 和 第二个短语的第一个单词 必须相同。
返回每两个「短语」 phrases[i] 和 phrases[j]（i != j）进行「前后拼接」得到的「新短语」。
注意，两个「短语」拼接时的顺序也很重要，我们需要同时考虑这两个「短语」。另外，同一个「短语」可以多次参与拼接，但「新短语」不能再参与拼接。
请你按字典序排列并返回「新短语」列表，列表中的字符串应该是 不重复的 。

示例 1：
输入：phrases = ["writing code","code rocks"]
输出：["writing code rocks"]
示例 2：
输入：phrases = ["mission statement", "a quick bite to eat",   "a chip off the old block",   "chocolate bar",   "mission impossible",   "a man on a mission",   "block party",   "eat my words",   "bar of soap"]
输出：["a chip off the old block party",   "a man on a mission impossible",   "a man on a mission statement",   "a quick bite to eat my words", "chocolate bar of soap"]
示例 3：
输入：phrases = ["a","b","a"]
输出：["a"]
示例 4：
输入：phrases = ["ab ba","ba ab","ab ba"]
输出：["ab ba ab","ba ab ba"]

提示：
1 <= phrases.length <= 100
1 <= phrases[i].length <= 100
Hint 1: What if you check every pair of strings (bruteforce)?
Hint 2: For every two strings, check if they can form a puzzle by comparing their last and first words.

```

## Solution

[SourceCode](./solution.js)

## Translation

Merge pairs of phrases where the last word of the first equals the first word of the second (dropping the duplicate junction word); return all distinct merged phrases sorted lexicographically. Order of the pair matters; i ≠ j.

- Example: ["writing code","code rocks"] → `["writing code rocks"]`

## Approach

**暴力有序对 + Set**。预分词,n ≤ 100 → 至多 9900 对;尾词 = 首词时拼接(i 去掉尾词的前缀 + j,单词短语前缀为空时直接用 j)。结果入 Set 去重,排序返回。O(n² · |p|)。
