# [564] Find the Closest Palindrome

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-closest-palindrome/description/)

* algorithms
* Hard (32.08%)
* Likes:    1340
* Dislikes: 1742
* Testcase Example:  '"123"'

```md
Given a string n representing an integer, return the closest integer (not including itself), which is a palindrome. If there is a tie, return the smaller one.
The closest is defined as the absolute difference minimized between two integers.

Example 1:

Input: n = '123'
Output: '121'

Example 2:

Input: n = '1'
Output: '0'
Explanation: 0 and 2 are the closest palindromes but we return the smallest which is 0.


Constraints:

1 <= n.length <= 18
n consists of only digits.
n does not have leading zeros.
n is representing an integer in the range [1, 1018 - 1].


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定表示整数的字符串 `n`，返回**最接近的**不等于自身的回文整数；距离相同取较小者。

示例 1：`'123'` → `'121'`；示例 2：`'1'` → `'0'`（0 与 2 同距取小）

约束：`1 <= |n| <= 18`，无前导零，`n ∈ [1, 10^18)`

## 解题思路

最近回文必在少数几个**候选**中：设 `half` = n 的前 ⌈L/2⌉ 位，

1. `half−1`、`half`、`half+1` 各自**镜像**成 L 位回文（前缀位数变化时跳过，由下两条兜底）；
2. `10^(L−1) − 1`（L−1 个 9，如 1000 → 999）；
3. `10^L + 1`（如 999 → 1001）。

从候选中去掉自身，按 (|c − n|, c) 取最小。数值达 10^18+1 **超出 2^53，全程 BigInt**。

验证：'123' → 候选 {111,121,131,99} → 121 ✓；'10' → {0,11,22,9,101} → 9 与 11 同距取 9 ✓；'999' → {989, 1001,...} → 1001 ✓
