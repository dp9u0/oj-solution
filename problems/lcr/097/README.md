# [LCR 097] 不同的子序列

## Description


```md
https://leetcode.cn/problems/21dk04/description/
* algorithms
* Hard (54.50%)
* Likes:    75
* Dislikes: -
* Testcase Example:  '"rabbbit"\n"rabbit"'
给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。
字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）
题目数据保证答案符合 32 位带符号整数范围。

示例 1：
输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
rabbbit
rabbbit
rabbbit
示例 2：
输入：s = "babgbag", t = "bag"
输出：5
解释：
如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。
babgbag
babgbag
babgbag
babgbag
babgbag

提示：
0 <= s.length, t.length <= 1000
s 和 t 由英文字母组成

注意：本题与主站 115 题相同： https://leetcode.cn/problems/distinct-subsequences/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given strings `s` and `t`, count the number of distinct subsequences of `s` that equal `t`. The answer is guaranteed to fit in a signed 32-bit integer.

**Example 1:** `s="rabbbit", t="rabbit"` → `3`
**Example 2:** `s="babgbag", t="bag"` → `5`

**Constraints:** lengths ≤ 1000. Note: same as LeetCode 115.

---

## Approach

`dp[j]` (rolling over `s`) = number of ways to form `t[0..j-1]` from the prefix of `s` processed so far.

- For each char `ch` of `s`, iterate `j` from high to low: if `ch === t[j-1]`, then `dp[j] += dp[j-1]` (use `ch` to match the j-th char). `dp[0]=1`.

Complexity: `O(len(s)·len(t))` time, `O(len(t))` space.
