# [1554] 只有一个不同字符的字符串

## Description


```md
https://leetcode.cn/problems/strings-differ-by-one-character/description/
* algorithms
* Medium (42.04%)
* Likes:    34
* Dislikes: -
* Testcase Example:  '["abcd","acbd", "aacd"]'
给定一个字符串列表 dict ，其中所有字符串的长度都相同。
当存在两个字符串在相同索引处只有一个字符不同时，返回 true ，否则返回 false 。

示例 1：
输入：dict = ["abcd","acbd", "aacd"]
输出：true
解释：字符串 "abcd" 和 "aacd" 只在索引 1 处有一个不同的字符。
示例 2：
输入：dict = ["ab","cd","yz"]
输出：false
示例 3：
输入：dict = ["abcd","cccc","abyd","abab"]
输出：true

提示：
dict 中的字符数小于或等于 105 。
dict[i].length == dict[j].length
dict[i] 是互不相同的。
dict[i] 只包含小写英文字母。
Hint 1: BruteForce, check all pairs and verify if they differ in one character. O(n^2 * m) where n is the number of words and m is the length of each string.
Hint 2: O(m^2 * n), Use hashset, to insert all possible combinations adding a character "*". For example: If dict[i] = "abc", insert ("*bc", "a*c" and "ab*").

```

## Solution

[SourceCode](./solution.js)

## Translation

Given equal-length distinct strings, return true if two differ at exactly one position.

## Approach

**通配掩码 + 双哈希**。每个字符串枚举 m 个掩码串(第 i 位替换为 '*'),两掩码相等 ⟺ 原两串仅在 i 位不同。掩码哈希用前后缀递推 O(1) 取得:masked(i) = pre[i] + B·suf[i+1](mod 双模数防碰撞)。总 O(n·m) 时间。字符串直接拼接的 O(n·m²) 在 m 大时会超时,故用哈希。
