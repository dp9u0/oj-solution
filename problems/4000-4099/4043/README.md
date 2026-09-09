# [4043] 恰好有 K 对相等相邻字符的循环移位数量

## Description


```md
https://leetcode.cn/problems/count-rotations-with-exactly-k-equal-adjacent-pairs/description/
* algorithms
* Easy (71.10%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '"aab"\n1'
给你一个长度为 n 的字符串 s 和一个整数 k。
s 的一次 循环移位 可以通过以下方式得到：选择 s 的一个长度在 0 到 n - 1（包含两端）之间的 前缀 ，并将其移动到字符串末尾，同时保持所有字符的相对顺序不变。
对于 s 的 每一种 循环移位，定义其 得分 为满足以下条件的下标 i 的数量：0 <= i < n - 1，且位置 i 和 i + 1 处的字符相同。
返回得分等于 k 的循环移位数量。
字符串的 前缀 是指从字符串开头开始，并延伸到字符串中某个位置的子串。
子串 是字符串中一段连续的字符序列，可以为空。

示例 1：
输入： s = "aab", k = 1
输出： 2
解释：
s 的所有循环移位为：
"aab"：位置 0 和 1 处的字符相同，因此 score = 1。
"aba"：不存在两个相邻且相同的字符，因此 score = 0。
"baa"：位置 1 和 2 处的字符相同，因此 score = 1。
共有 2 种 s 的循环移位，其 score 等于 k，因此答案为 2。
示例 2：
输入： s = "abca", k = 0
输出： 1
解释：
s 的所有循环移位为：
"abca"：不存在两个相邻且相同的字符，因此 score = 0。
"bcaa"：位置 2 和 3 处的字符相同，因此 score = 1。
"caab"：位置 1 和 2 处的字符相同，因此 score = 1。
"aabc"：位置 0 和 1 处的字符相同，因此 score = 1。
只有 1 种 s 的循环移位，其 score 等于 k，因此答案为 1。

提示：
2 <= n == s.length <= 100
s 仅由小写英文字母组成。
0 <= k <= n - 1
Hint 1: 1a (Simulation). Construct the rotation for each possible prefix length and count its equal adjacent pairs.
Hint 2: 2a (Counting). Let total be the number of equal adjacent pairs when the string is treated as circular, including the pair formed by its last and first characters.
Hint 3: 2b (Counting). Each rotation excludes exactly one circular adjacent pair. Its score is total - 1 if the excluded pair has equal characters, and total otherwise.

```

## Solution

[SourceCode](./solution.js)

## English Translation

**4043. Count Rotations With Exactly K Equal Adjacent Pairs**

You are given a string `s` of length `n` and an integer `k`.

A **rotation** of `s` is obtained by choosing a prefix of `s` with length from `0` to `n - 1` (inclusive) and moving it to the end of the string, keeping the relative order of all characters.

For **each** rotation of `s`, its **score** is the number of indices `i` with `0 <= i < n - 1` such that the characters at positions `i` and `i + 1` are equal.

Return the number of rotations whose score equals `k`.

Constraints: `2 <= n == s.length <= 100`, `s` consists of lowercase English letters, `0 <= k <= n - 1`.

## Approach

Treat `s` as circular and compute `total` = number of equal pairs among all `n` circular adjacent pairs `(i, (i+1) mod n)`.

Each rotation (starting at position `p`) contains exactly all circular pairs except the wrap pair `(p-1, p)`. So its score is `total - 1` if `s[(p-1+n) mod n] == s[p]`, otherwise `total`.

Let `eq` = number of positions `p` where the wrap pair is equal. Then:

- rotations with score `total`: `n - eq`
- rotations with score `total - 1`: `eq`
- answer: `n - eq` if `k == total`, `eq` if `k == total - 1`, else `0`.

Time: O(n), Space: O(1).
