# [面试题 17.25] 单词矩阵

## Description


```md
https://leetcode.cn/problems/word-rectangle-lcci/description/
* lcci
* Hard (50.77%)
* Likes:    51
* Dislikes: -
* Testcase Example:  '["this", "real", "hard", "trh", "hea", "iar", "sld"]'
给定一份单词的清单，设计一个算法，创建由字母组成的面积最大的矩形，其中每一行组成一个单词(自左向右)，每一列也组成一个单词(自上而下)。不要求这些单词在清单里连续出现，但要求所有行等长，所有列等高。
如果有多个面积最大的矩形，输出任意一个均可。一个单词可以重复使用。
示例 1：
输入：["this", "real", "hard", "trh", "hea", "iar", "sld"]
输出：
[
"this",
"real",
"hard"
]
示例 2：
输入：["aa"]
输出：["aa","aa"]
说明：
words.length <= 1000
words[i].length <= 100
数据保证单词足够随机
Hint 1: 首先根据单词长度对字典进行分组，因为你知道每一列的长度必须相同，每一行的长度也必须相同。
Hint 2: 你能找到一个特定长宽的单词矩阵吗？如果尝试了所有的选项会怎样？
Hint 3: 当矩形看起来无效时，可以使用trie提前终止吗？

```

## Description (English)

Given a list of words, design an algorithm to create the largest rectangle of letters such that each row (left to right) forms a word and each column (top to bottom) forms a word. Words need not appear consecutively in the list, but all rows must be the same length and all columns the same height. If multiple maximum-area rectangles exist, output any one. A word may be reused.

Example 1:
Input: ["this", "real", "hard", "trh", "hea", "iar", "sld"]
Output: ["this", "real", "hard"]

Example 2:
Input: ["aa"]
Output: ["aa","aa"]

Notes: words.length <= 1000; words[i].length <= 100; words are guaranteed to be sufficiently random.

## 思路

按长度分组 + Trie 剪枝 DFS：

1. 行宽 l 与行数 h 分别取自对应长度分组的词表；枚举 `(l, h)` 按面积从大到小（长度降序 + `h*l <= bestArea` 剪枝）。
2. 行合法自动成立（只从 byLen[l] 选词）；列合法性用 **byLen[h] 的 Trie** 逐列跟踪前缀节点，任一列走死即剪枝。列数达到 h 时路径长度 = Trie 词长，必为完整单词。
3. 单词可复用：每层都尝试整个词表；找到即短路（同 (l,h) 面积相同）。

## Solution

[SourceCode](./solution.js)
