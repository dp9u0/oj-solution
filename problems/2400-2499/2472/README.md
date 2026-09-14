# [2472] 不重叠回文子字符串的最大数目

## Description


```md
https://leetcode.cn/problems/maximum-number-of-non-overlapping-palindrome-substrings/description/
* algorithms
* Hard (50.21%)
* Likes:    57
* Dislikes: -
* Testcase Example:  '"abaccdbbd"\n3'
给你一个字符串 s 和一个 正 整数 k 。
从字符串 s 中选出一组满足下述条件且 不重叠 的子字符串：
每个子字符串的长度 至少 为 k 。
每个子字符串是一个 回文串 。
返回最优方案中能选择的子字符串的 最大 数目。
子字符串 是字符串中一个连续的字符序列。

示例 1 ：
输入：s = "abaccdbbd", k = 3
输出：2
解释：可以选择 s = "abaccdbbd" 中斜体加粗的子字符串。"aba" 和 "dbbd" 都是回文，且长度至少为 k = 3 。
可以证明，无法选出两个以上的有效子字符串。
示例 2 ：
输入：s = "adbcda", k = 2
输出：0
解释：字符串中不存在长度至少为 2 的回文子字符串。

提示：
1 <= k <= s.length <= 2000
s 仅由小写英文字母组成
Hint 1: Try to use dynamic programming to solve the problem.
Hint 2: let dp[i] be the answer for the prefix s[0…i].
Hint 3: The final answer to the problem will be dp[n-1]. How do you compute this dp?

```

## Description (English)

You are given a string `s` and a **positive** integer `k`.

Select a set of **non-overlapping** substrings from `s` that satisfy the following conditions:

- Each substring has length **at least** `k`.
- Each substring is a **palindrome**.

Return the **maximum** number of substrings you can select in an optimal solution.

A substring is a contiguous sequence of characters within a string.

Example 1:
Input: s = "abaccdbbd", k = 3
Output: 2
Explanation: We can select the substrings "aba" and "dbbd", both palindromes of length at least k = 3. It can be proven that no more than two valid substrings can be selected.

Example 2:
Input: s = "adbcda", k = 2
Output: 0
Explanation: There is no palindromic substring of length at least 2 in the string.

Constraints:
- 1 <= k <= s.length <= 2000
- s consists of only lowercase English letters.

## Solution

### 思路：动态规划 + 回文收缩性质

设 `dp[i]` 表示前缀 `s[0..i-1]` 能选出的最大不重叠回文子串数目，答案即 `dp[n]`。

关键性质(收缩)：任何长度 `L >= k+2` 的回文串，去掉首尾两个字符后仍是回文串，且长度 `L-2 >= k`,并且新串的区间严格包含于原区间。因此把选中的长回文串替换为更短的同心回文串不会使答案变差。于是**只需考察长度恰为 `k` 和 `k+1` 的回文串**。

转移：

- `dp[i] = dp[i-1]`(不选以 `i-1` 结尾的子串)
- 若 `s[i-k .. i-1]` 是回文(长度 k):`dp[i] = max(dp[i], dp[i-k] + 1)`
- 若 `i-k-1 >= 0` 且 `s[i-k-1 .. i-1]` 是回文(长度 k+1):`dp[i] = max(dp[i], dp[i-k-1] + 1)`

回文判断直接双指针扫描，单次 O(k),总时间 O(n·k),n ≤ 2000,最坏约 4·10^6 次比较。空间 O(n)。

[SourceCode](./solution.js)
