# [3900] Longest Balanced Substring After One Swap

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-balanced-substring-after-one-swap/description/)

* algorithms
* Medium (14.23%)
* Likes:    134
* Dislikes: 10
* Testcase Example:  '"100001"'

```md
You are given a binary string s consisting only of characters &#39;0&#39; and &#39;1&#39;.
A string is balanced if it contains an equal number of &#39;0&#39;s and &#39;1&#39;s.
You can perform at most one swap between any two characters in s. Then, you select a balanced substring from s.
Return an integer representing the maximum length of the balanced substring you can select.

Example 1:

Input: s = '100001'
Output: 4
Explanation:

Swap '100001'. The string becomes '101000'.
Select the substring '101000', which is balanced because it has two &#39;0&#39;s and two &#39;1&#39;s.


Example 2:

Input: s = '111'
Output: 0
Explanation:

Choose not to perform any swaps.
Select the empty substring, which is balanced because it has zero &#39;0&#39;s and zero &#39;1&#39;s.



Constraints:

1 <= s.length <= 105
s consists only of the characters &#39;0&#39; and &#39;1&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 01 串，可**至多一次**交换任意两个字符，然后选一个子串（可为空），使其 0/1 数量相等。返回最大长度。

示例 1：`'100001'` → `4`（交换成 101000 取前 4 位）；示例 2：`'111'` → `0`

约束：`n ≤ 10^5`

## 解题思路

前缀平衡 `P[i] = #1 − #0`，子串差 = `P[j] − P[i]`。一次交换只能把差改变 ±2（子串内外各换一个）或 0，**奇差不可修**：

- 差 0：直接合法，取每个 P 值的首出现最远配对；
- 差 +2（多两个 1）：需子串外存在 '0'；差 −2 需外有 '1'。对每个 j：若后缀有该字符，用 `P[j]∓2` 的首出现；否则在出现列表中二分找 `i ≥ firstX+1`（保证前缀 s[0..i−1] 含该字符）。

注意外部判断的 off-by-one：子串为 s[i..j−1]，`s[0..i−1]` 含 X ⟺ `i ≥ firstX+1`。O(n)~O(n log n)。本地 300 组随机与暴力对拍验证。