# [面试题 01.04] 回文排列

## Description


```md
https://leetcode.cn/problems/palindrome-permutation-lcci/description/
* lcci
* Easy (53.13%)
* Likes:    142
* Dislikes: -
* Testcase Example:  '"code"'
给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
回文串不一定是字典当中的单词。

示例1：
输入："tactcoa"
输出：true（排列有"tacocat"、"atcocta"，等等）
Hint 1: 你不必且也不应该生成所有的排列。这将极为低效。
Hint 2: 作为回文排列的字符串有什么特征？
Hint 3: 你试过散列表吗？你应该能把它降到O(N)的时间。
Hint 4: 使用位向量可以减少空间使用吗？

```

## Description (English)

Given a string, write a function to determine whether it is a permutation of some palindrome. A palindrome is a word or phrase that reads the same in both directions; a permutation is a rearrangement of letters. The palindrome need not be a dictionary word.

Example:
Input: "tactcoa"
Output: true (permutations include "tacocat", "atcocta", etc.)

## 思路

回文排列 ⇔ 奇数出现次数的字符至多 1 个（放在中轴）。

用集合翻转统计奇偶性：字符已入集合则删除，否则加入，结束看集合大小 ≤ 1。O(n) 时间、O(字符集) 空间。

坑：字符集并非纯小写字母——官方用例含大写与 `/`（如 "AaBb//a"，且大小写敏感），26 位位向量会发生位坍缩（负位移 mod 32 导致大小写同位），必须按字符本身统计。

## Solution

[SourceCode](./solution.js)
