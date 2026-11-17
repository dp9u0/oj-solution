# [340] 至多包含 K 个不同字符的最长子串

## Description


```md
https://leetcode.cn/problems/longest-substring-with-at-most-k-distinct-characters/description/
* algorithms
* Medium (52.15%)
* Likes:    293
* Dislikes: -
* Testcase Example:  '"eceba"\n2'
给你一个字符串 s 和一个整数 k ，请你找出 至多 包含 k 个 不同 字符的最长子串，并返回该子串的长度。

示例 1：
输入：s = "eceba", k = 2
输出：3
解释：满足题目要求的子串是 "ece" ，长度为 3 。
示例 2：
输入：s = "aa", k = 1
输出：2
解释：满足题目要求的子串是 "aa" ，长度为 2 。

提示：
1 <= s.length <= 5 * 104
0 <= k <= 50

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a string `s` and integer `k`, return the length of the longest substring containing **at most k** distinct characters.

**Example:**
s = "eceba", k = 2 → 3 ("ece")

**Constraints:**
- 1 <= s.length <= 10^4

## Approach

滑动窗口 + 字符计数 Map:窗口内字符数超 k 时从左收缩(计数归零则删除键),每步更新最长值。159 的 K 通用版。

时间 O(n),空间 O(k)。
