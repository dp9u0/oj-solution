# [466] Count The Repetitions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-repetitions/description/)

* algorithms
* Hard (35.79%)
* Likes:    453
* Dislikes: 371
* Testcase Example:  '"acb"\n4\n"ab"\n2'

```md
We define str = [s, n] as the string str which consists of the string s concatenated n times.

For example, str == ['abc', 3] =='abcabcabc'.

We define that string s1 can be obtained from string s2 if we can remove some characters from s2 such that it becomes s1.

For example, s1 = 'abc' can be obtained from s2 = 'abdbec' based on our definition by removing the bolded underlined characters.

You are given two strings s1 and s2 and two integers n1 and n2. You have the two strings str1 = [s1, n1] and str2 = [s2, n2].
Return the maximum integer m such that str = [str2, m] can be obtained from str1.

Example 1:
Input: s1 = "acb", n1 = 4, s2 = "ab", n2 = 2
Output: 2
Example 2:
Input: s1 = "acb", n1 = 1, s2 = "acb", n2 = 1
Output: 1


Constraints:

1 <= s1.length, s2.length <= 100
s1 and s2 consist of lowercase English letters.
1 <= n1, n2 <= 106


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

定义 str = [s, n] 为字符串 s 重复拼接 n 次得到的字符串。例如 str = ['abc', 3] == 'abcabcabc'。

定义字符串 s1 可以从 s2 中"获得"，如果能从 s2 中删除某些字符使其变为 s1（即 s1 是 s2 的子序列）。例如 s1 = 'abc' 可以从 s2 = 'abdbec' 中删除部分字符得到。

给定两个字符串 s1 和 s2 以及两个整数 n1 和 n2。现在有 str1 = [s1, n1] 和 str2 = [s2, n2]。

返回最大整数 m，使得 str = [str2, m] 可以从 str1 中获得。

示例 1：s1 = "acb", n1 = 4, s2 = "ab", n2 = 2，输出 2。
示例 2：s1 = "acb", n1 = 1, s2 = "acb", n2 = 1，输出 1。

约束：1 <= s1.length, s2.length <= 100；s1 和 s2 由小写英文字母组成；1 <= n1, n2 <= 10^6。

## 解题思路

若把 str1 逐块（每块一个 s1）扫描，用贪心法统计 s2 作为子序列出现的完整次数 count，则答案为 floor(count / n2)。

但 n1 可达 10^6，直接扫描每块会超时。关键观察：扫描完第 k 块 s1 后，唯一影响后续行为的状态是"当前匹配到 s2 的下标 index"（count 由它决定）。index 只有 len2 种取值，所以最多扫 len2 + 1 块必然出现循环节。

算法（循环节优化模拟）：
1. 逐块扫描 s1，对每个字符做贪心匹配，维护 index（在 s2 中的位置）和 count（s2 完整匹配次数）。
2. 每扫完一块，记录 index -> (块号, count)。若当前 index 在之前出现过（设出现在第 j 块末尾），则找到循环：
   - 周期 cycleLen = i - j 块，每周期 s2 计数增加 cycleCount = count - count_j。
   - 剩余 n1 - i 块 = fullCycles * cycleLen + leftover。
   - count += fullCycles * cycleCount，再逐块模拟剩余 leftover 块。
3. 返回 floor(count / n2)。

复杂度：O(len1 * min(n1, len2)) 级别的扫描量，近似 O(len1 * len2)。
