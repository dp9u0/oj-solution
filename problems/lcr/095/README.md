# [LCR 095] 最长公共子序列

## Description


```md
https://leetcode.cn/problems/qJnOS7/description/
* algorithms
* Medium (64.66%)
* Likes:    195
* Dislikes: -
* Testcase Example:  '"abcde"\n"ace"'
给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

示例 1：
输入：text1 = "abcde", text2 = "ace"
输出：3
解释：最长公共子序列是 "ace" ，它的长度为 3 。
示例 2：
输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
示例 3：
输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。

提示：
1 <= text1.length, text2.length <= 1000
text1 和 text2 仅由小写英文字符组成。

注意：本题与主站 1143 题相同： https://leetcode.cn/problems/longest-common-subsequence/

```

## Solution

[SourceCode](./solution.js)

---

## English Description

Given two strings `text1` and `text2`, return the length of their **longest common subsequence**. If there is no common subsequence, return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
- For example, `"ace"` is a subsequence of `"abcde"` but `"aec"` is not.

A **common subsequence** of two strings is a subsequence that is common to both strings.

**Example 1:**
> Input: text1 = "abcde", text2 = "ace"
> Output: 3
> Explanation: The longest common subsequence is "ace" and its length is 3.

**Example 2:**
> Input: text1 = "abc", text2 = "abc"
> Output: 3

**Example 3:**
> Input: text1 = "abc", text2 = "def"
> Output: 0

**Constraints:**
- `1 <= text1.length, text2.length <= 1000`
- `text1` and `text2` consist only of lowercase English characters.

Note: This problem is the same as the main site problem 1143 (Longest Common Subsequence).

---

## Approach (解题思路)

动态规划求解 LCS。

**状态定义**
- `dp[i][j]`: `text1` 前 `i` 个字符与 `text2` 前 `j` 个字符的最长公共子序列长度。

**状态转移**
- 若 `text1[i-1] === text2[j-1]`,则这两个字符可以配成公共子序列的末尾,`dp[i][j] = dp[i-1][j-1] + 1`;
- 否则取不匹配时的最大值,`dp[i][j] = max(dp[i-1][j], dp[i][j-1])`。

**边界条件**
- `dp[0][j] = dp[i][0] = 0`(空串与任意串无公共子序列),DP 数组初始为 0 即可。

**空间优化**
- 转移只用到了上一行(`i-1`)与当前行的信息,可以用一维滚动数组 `dp[j]`,并用变量 `prev` 保存被覆盖前的 `dp[j]`(即左上角 `dp[i-1][j-1]`)。
- 时间复杂度 `O(n*m)`,空间复杂度 `O(m)`(取较短的串作为列)。

**正确性直观**
经典 LCS DP:逐字符比较,字符相等则必然可接在已匹配的公共子序列之后,否则公共子序列要么来自上、要么来自左,取更长者。
