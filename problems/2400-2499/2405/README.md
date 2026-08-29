# [2405] Optimal Partition of String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/optimal-partition-of-string/description/)

* algorithms
* Medium (78.39%)
* Likes:    2825
* Dislikes: 115
* Testcase Example:  '"abacaba"'

```md
Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.
Return the minimum number of substrings in such a partition.
Note that each character should belong to exactly one substring in a partition.

Example 1:

Input: s = 'abacaba'
Output: 4
Explanation:
Two possible partitions are ('a','ba','cab','a') and ('ab','a','ca','ba').
It can be shown that 4 is the minimum number of substrings needed.

Example 2:

Input: s = 'ssssss'
Output: 6
Explanation:
The only valid partition is ('s','s','s','s','s','s').


Constraints:

1 <= s.length <= 105
s consists of only English lowercase letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个字符串 `s`，将其划分为一个或多个子字符串，使得**每个子字符串内的字符都互不相同**（同一子串中一个字母最多出现一次）。

返回这样的划分所需的最少子字符串数量。

注意：划分中每个字符必须恰好属于一个子字符串。

示例 1：
- 输入：`s = "abacaba"`
- 输出：`4`
- 解释：`('a','ba','cab','a')` 或 `('ab','a','ca','ba')`，可以证明最少需要 4 段。

示例 2：
- 输入：`s = "ssssss"`
- 输出：`6`（唯一合法划分是每段一个 `'s'`）

约束：
- `1 <= s.length <= 10^5`
- `s` 只含小写英文字母

## 解题思路

贪心：让每一段尽可能长。从左到右扫描，维护当前段已出现的字符集合；遇到已在集合中的字符时必须切割——开新段，段数 +1，集合重置为仅含该字符。

正确性：段起点固定时，段延伸到第一个冲突字符前是最长的；起点不可能左移（划分必须连续覆盖），所以贪心切割数最少。

时间复杂度 O(n)，空间复杂度 O(26) = O(1)。

验证示例 1：`abacaba` → `ab | a | cab | a`，共 4 段 ✓
