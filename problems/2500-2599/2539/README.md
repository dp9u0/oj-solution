# [2539] 好子序列的个数

## Description


```md
https://leetcode.cn/problems/count-the-number-of-good-subsequences/description/
* algorithms
* Medium (50.48%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '"aabb"'
如果字符串的某个 子序列 不为空，且其中每一个字符出现的频率都相同，就认为该子序列是一个好子序列。
给你一个字符串 s ，请你统计并返回它的好子序列的个数。由于答案的值可能非常大，请返回对 109 + 7 取余的结果作为答案。
字符串的 子序列 是指，通过删除一些（也可以不删除）字符且不改变剩余字符相对位置所组成的新字符串。

示例 1：
输入：s = "aabb"
输出：11
解释：s 的子序列的总数为 24 = 16 。其中，有 5 个子序列不是好子序列，分别是 "aabb"，"aabb"，"aabb"，"aabb" 以及空字符串。因此，好子序列的个数为 16 - 5 = 11 。
示例 2：
输入：s = "leet"
输出：12
解释：s 的子序列的总数为 24 = 16 。其中，有 4 个子序列不是好子序列，分别是 "leet"，"leet"，"leet" 以及空字符串。因此，好子序列的个数为 16 - 4 = 12 。
示例 3：
输入：s = "abcd"
输出：15
解释：s 所有非空子序列均为好子序列。因此，好子序列的个数为 16 - 1 = 15 。

提示：
1 <= s.length <= 104
s 仅由小写英文字母组成
Hint 1: Use the frequency array of characters of the string.
Hint 2: For 1 ≤ m ≤ s.length, count the number of subsequences of s where each character occurs exactly m times.
Hint 3: For any n and k, you can calculate (n choose k) mod p in O(log p) using binary exponentiation.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Count non-empty subsequences of s where every character appearing in the subsequence occurs the same number of times, mod 1e9+7.

Example 1:
Input: s = "aabb"
Output: 11

Example 2:
Input: s = "leet"
Output: 12

Example 3:
Input: s = "abcd"
Output: 15

Constraints: 1 <= s.length <= 10^4.

## Approach

For each target multiplicity m (1..max count): every character c with cnt_c >= m contributes C(cnt_c, m) ways to be included m times, or 0 times (i.e. C(cnt_c, m) + 1 options); characters with cnt_c < m must be excluded. Number of such subsequences = prod(C(cnt_c, m) + 1) - 1 (minus the all-empty pick). Sum over m. All modular products of two ~1e9 residues run through BigInt (2^53 precision) — O(26 * maxCnt) with factorial inverse binomials.
