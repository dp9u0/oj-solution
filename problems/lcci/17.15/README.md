# [面试题 17.15] 最长单词

## Description


```md
https://leetcode.cn/problems/longest-word-lcci/description/
* lcci
* Medium (40.99%)
* Likes:    66
* Dislikes: -
* Testcase Example:  '[""]'
给定一组单词words，编写一个程序，找出其中的最长单词，且该单词由这组单词中的其他单词组合而成。若有多个长度相同的结果，返回其中字典序最小的一项，若没有符合要求的单词则返回空字符串。
示例：
输入： ["cat","banana","dog","nana","walk","walker","dogwalker"]
输出： "dogwalker"
解释： "dogwalker"可由"dog"和"walker"组成。
提示：
0 <= len(words) <= 200
1 <= len(words[i]) <= 100
Hint 1: 试着简化这个问题：如果你只需要知道由列表中其他两个单词组成的最长单词会如何？
Hint 2: 如果只想知道由列表中其他两个单词组成的最长单词，那么可以遍历全部单词，从最长到最短，检查每个单词是否可以由其他两个单词组成。为了检查，我们可以将字符串从所有可能的位置分开。
Hint 3: 将前面的想法扩展到多个单词的情况。我们能不能把每个单词都拆分为所有可能的形式?
Hint 4: 当你得到非常低效的递归算法时，试着查找重复发生的子问题。

```

## Description (English)

Given a list of words, write a program to find the longest word made of other words in the list. If there is more than one answer of the same length, return the lexicographically smallest one; if no such word exists, return an empty string.

Example:
Input: ["cat","banana","dog","nana","walk","walker","dogwalker"]
Output: "dogwalker"
Explanation: "dogwalker" can be composed of "dog" and "walker".

Notes: 0 <= len(words) <= 200; 1 <= len(words[i]) <= 100 (words are sufficiently random).

## 思路

词频计数 + 拆分 DP：候选拼接检查用 `dp[i]`（前 i 个字符可否被词表单词拼出），片段查 Map 计数。关键细节——**自身计数借出**：整词片段只有当该词出现 ≥ 2 次（存在"其他"实例）时才可用，真前缀片段不受影响。候选按（长度降序、字典序升序）排序后取第一个可拼成的。

## Solution

[SourceCode](./solution.js)
