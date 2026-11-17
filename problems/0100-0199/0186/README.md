# [186] 反转字符串中的单词 II

## Description


```md
https://leetcode.cn/problems/reverse-words-in-a-string-ii/description/
* algorithms
* Medium (77.56%)
* Likes:    147
* Dislikes: -
* Testcase Example:  '["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]'
给你一个字符数组 s ，反转其中 单词 的顺序。
单词 的定义为：单词是一个由非空格字符组成的序列。s 中的单词将会由单个空格分隔。
必须设计并实现 原地 解法来解决此问题，即不分配额外的空间。

示例 1：
输入：s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
输出：["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
示例 2：
输入：s = ["a"]
输出：["a"]

提示：
1 <= s.length <= 105
s[i] 可以是一个英文字母（大写或小写）、数字、或是空格 ' ' 。
s 中至少存在一个单词
s 不含前导或尾随空格
题目数据保证：s 中的每个单词都由单个空格分隔

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a character array `s`, reverse the order of the words **in-place** (words separated by single spaces, no leading/trailing spaces).

**Example:**
["t","h","e"," ","s","k","y"] → ["s","k","y"," ","t","h","e"]

**Constraints:**
- 1 <= s.length <= 10^5

## Approach

两段翻转:先整体反转(单词顺序颠倒、单词内部也倒),再对每个单词区间单独反转恢复内部顺序。

时间 O(n),空间 O(1)。
