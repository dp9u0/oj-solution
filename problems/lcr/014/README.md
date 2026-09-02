# [LCR 014] 字符串的排列

## Description


```md
https://leetcode.cn/problems/MPnaiL/description/
* algorithms
* Medium (51.72%)
* Likes:    114
* Dislikes: -
* Testcase Example:  '"ab"\n"eidbaooo"'
给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。
换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

示例 1：
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
示例 2：
输入: s1= "ab" s2 = "eidboaoo"
输出: False

提示：
1 <= s1.length, s2.length <= 104
s1 和 s2 仅包含小写字母

注意：本题与主站 567 题相同： https://leetcode.cn/problems/permutation-in-string/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given two strings `s1` and `s2`, write a function to determine whether `s2` contains a permutation of `s1`.

In other words, return `true` if one of the permutations of the first string is a **substring** of the second string.

**Example 1:** Input `s1 = "ab", s2 = "eidbaooo"` → Output `true` (`"ba"` is a substring)
**Example 2:** Input `s1 = "ab", s2 = "eidboaoo"` → Output `false`

**Constraints:** `1 <= s1.length, s2.length <= 10^4`, both contain only lowercase letters.

Note: same as LeetCode 567.

---

## Approach

A window of length `len(s1)` in `s2` is a permutation of `s1` iff its character frequency equals `s1`'s. Use a **sliding window**:

- Count `s1` frequencies in `cnt1`.
- Maintain a window over `s2` of the same length; track `cnt2` and a `matches` counter of how many of the 26 letters currently have equal counts in `cnt1` and `cnt2`.
- Slide the window: when a char enters/leaves, update only the affected letter's match state, then check if `matches === 26`.
- Initialize `matches` by counting equal letters at window start (chars in `s2` not present in `s1` count toward matches only if 0==0, so seed with the 26 - number of distinct letters in s1).

Simplest robust version: keep `diff = number of letters where counts differ`; if `diff === 0` return true.

Complexity: `O(n)` time (26 fixed), `O(1)` space.
