# [LCR 096] 交错字符串

## Description


```md
https://leetcode.cn/problems/IY6buf/description/
* algorithms
* Medium (48.03%)
* Likes:    76
* Dislikes: -
* Testcase Example:  '"aabcc"\n"dbbca"\n"aadbbcbcac"'
给定三个字符串 s1、s2、s3，请判断 s3 能不能由 s1 和 s2 交织（交错） 组成。
两个字符串 s 和 t 交织 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：
s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm

n - m
<= 1
交织 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
提示：a + b 意味着字符串 a 和 b 连接。

示例 1：
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true
示例 2：
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出：false
示例 3：
输入：s1 = "", s2 = "", s3 = ""
输出：true

提示：
0 <= s1.length, s2.length <= 100
0 <= s3.length <= 200
s1、s2、和 s3 都由小写英文字母组成

注意：本题与主站 97 题相同： https://leetcode.cn/problems/interleaving-string/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given strings `s1`, `s2`, `s3`, determine whether `s3` can be formed by **interleaving** `s1` and `s2`.

**Example 1:** `s1="aabcc", s2="dbbca", s3="aadbbcbcac"` → `true`
**Example 2:** `s1="aabcc", s2="dbbca", s3="aadbbbaccc"` → `false`
**Example 3:** all empty → `true`

**Constraints:** `s1.length, s2.length <= 100`, `s3.length <= 200`.

Note: same as LeetCode 97.

---

## Approach

**2D DP.** `dp[i][j]` = whether `s3[0..i+j-1]` is an interleaving of `s1[0..i-1]` and `s2[0..j-1]`.

- `dp[0][0] = true`.
- `dp[i][j] = (i>0 && s1[i-1]===s3[i+j-1] && dp[i-1][j]) || (j>0 && s2[j-1]===s3[i+j-1] && dp[i][j-1])`.

Return `dp[n1][n2]` (requires `n1+n2 === n3`).

Complexity: `O(n1·n2)` time and space.
