# [267] 回文排列 II

## Description


```md
https://leetcode.cn/problems/palindrome-permutation-ii/description/
* algorithms
* Medium (47.11%)
* Likes:    132
* Dislikes: -
* Testcase Example:  '"aabb"'
给定一个字符串 s ，返回 其重新排列组合后可能构成的所有回文字符串，并去除重复的组合 。
你可以按 任意顺序 返回答案。如果 s 不能形成任何回文排列时，则返回一个空列表。

示例 1：
输入: s = "aabb"
输出: ["abba", "baab"]
示例 2：
输入: s = "abc"
输出: []

提示：
1 <= s.length <= 16
s 仅由小写英文字母组成
Hint 1: If a palindromic permutation exists, we just need to generate the first half of the string.
Hint 2: To generate all distinct permutations of a (half of) string, use a similar approach from: Permutations II or Next Permutation.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a string `s`, return all palindromic permutations of it (no duplicates). If no palindromic permutation exists, return an empty array.

**Example:**
s = "aabb" → ["abba","baab"]

**Constraints:**
- 1 <= s.length <= 16

## Approach

计数统计:奇数频次字符 > 1 直接返回 [];否则取"半串"(每字符 n>>1 个)与中位字符。对半串做去重全排列(排序 + used 跳过重复),每个排列镜像拼出完整回文。

时间 O(半串全排列数 × n),空间 O(n)。
