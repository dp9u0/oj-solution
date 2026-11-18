# [418] 屏幕可显示句子的数量

## Description


```md
https://leetcode.cn/problems/sentence-screen-fitting/description/
* algorithms
* Medium (40.37%)
* Likes:    120
* Dislikes: -
* Testcase Example:  '["hello","world"]\n2\n8'
给你一个 rows x cols 的屏幕和一个用 非空 的单词列表组成的句子，请你计算出给定句子可以在屏幕上完整显示的次数。
句子中的单词顺序必须保持不变，并且不能将一个单词分成两行。一行中的两个连续单词必须用空白分开。

示例 1：
输入：sentence = ["hello", "world"], rows = 2, cols = 8
输出：1
解释：
hello---
world---
字符 '-' 表示屏幕上的一个空白位置。

示例 2：
输入：sentence = ["a", "bcd", "e"], rows = 3, cols = 6
输出：2
解释：
a-bcd-
e-a---
bcd-e-
字符 '-' 表示屏幕上的一个空白位置。

示例 3：
输入：sentence = ["i", "had", "apple", "pie"], rows = 4, cols = 5
输出：1
解释：
i-had
apple
pie-i
had--
字符 '-' 表示屏幕上的一个空白位置。

提示：
1 <= sentence.length <= 100
1 <= sentence[i].length <= 10
sentence[i] 由小写英文字母组成。
1 <= rows, cols <= 2 * 104

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a `rows x cols` screen and a sentence as a list of non-empty words, count how many times the sentence can be fitted on the screen completely. Word order is preserved, words cannot be split across lines, consecutive words on a line must be separated by a single space.

- Example: ["hello","world"], rows=2, cols=8 → `1` (hello--- / world---)

Constraints: `1 <= sentence.length <= 100`; word lengths ≤ 10; `rows, cols <= 2*10^4`.

## Approach

朴素逐词模拟 O(rows·cols/minLen) 会超时。**按行预处理**:若某行以第 i 个单词开头,贪心填满这一行的结果与行号无关——预处理 `next[i]`(下一行起始词下标)与 `times[i]`(这一行内完成了几个整句),再对 rows 行做指针跳转。

- 任一单词长度 > cols → 永远放不下,返回 0。
- 预处理每个起点 O(k + 该行完成句数),总 O(k² + cols·k/totalLen) 规模;rows 行模拟 O(rows)。
