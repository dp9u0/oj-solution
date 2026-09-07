# [940] 不同的子序列 II

## Description


```md
https://leetcode.cn/problems/distinct-subsequences-ii/description/
* algorithms
* Hard (52.94%)
* Likes:    380
* Dislikes: -
* Testcase Example:  '"abc"'
给定一个字符串 s，计算 s 的 不同非空子序列 的个数。因为结果可能很大，所以返回答案需要对 10^9 + 7 取余 。
字符串的 子序列 是经由原字符串删除一些（也可能不删除）字符但不改变剩余字符相对位置的一个新字符串。
例如，"ace" 是 "abcde" 的一个子序列，但 "aec" 不是。

示例 1：
输入：s = "abc"
输出：7
解释：7 个不同的子序列分别是 "a", "b", "c", "ab", "ac", "bc", 以及 "abc"。
示例 2：
输入：s = "aba"
输出：6
解释：6 个不同的子序列分别是 "a", "b", "ab", "ba", "aa" 以及 "aba"。
示例 3：
输入：s = "aaa"
输出：3
解释：3 个不同的子序列分别是 "a", "aa" 以及 "aaa"。

提示：
1 <= s.length <= 2000
s 仅由小写英文字母组成

```

## Solution

[SourceCode](./solution.js)

## English Description

Given a string `s`, return the number of **distinct non-empty subsequences** of `s`. Since the answer may be very large, return it modulo `10^9 + 7`.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

Constraints: `1 <= s.length <= 2000`, `s` consists of lowercase English letters.

## Approach (English)

Incremental DP over distinct subsequences ending with each character — O(n) time, O(1) space.

- Let `total` be the number of distinct non-empty subsequences of the processed prefix, and `end[c]` the count of those ending with character `c` (so `total = Σ end[c]`).
- When reading a new character `x`, appending `x` to every existing subsequence (plus the empty string) creates `total + 1` new distinct candidates, all ending with `x`. The only candidates already seen before are exactly the old `end[x]` ones, so:
  - `newEndX = total + 1`
  - `total += newEndX − end[x]`
  - `end[x] = newEndX`
- Keep everything modulo `10^9+7`; the answer is `total`.

## 解题思路

按「以某字符结尾的不同子序列数」增量 DP —— 时间 O(n)、空间 O(1)。

- 记 `total` 为当前前缀所有不同非空子序列数，`end[c]` 为其中以字符 c 结尾的数量（恒有 `total = Σ end[c]`）。
- 读入新字符 x 时，把 x 追加到「每个既有子序列 ∪ 空串」，产生 `total+1` 个互不相同、且都以 x 结尾的新候选；其中与旧序列重复的恰好是旧 `end[x]` 那批。于是：
  - `newEndX = total + 1`
  - `total += newEndX − end[x]`
  - `end[x] = newEndX`
- 全程对 `10^9+7` 取模，答案即 `total`。

> 例：`"aba"` → 处理 a 后 total=1；b → +2 → 3（a,b,ab）；再 a → newEndX=4（追加 a 到 "",a,b,ab → a,aa,ba,aba，其中 a 重复），total += 4−1 = 6。✓
