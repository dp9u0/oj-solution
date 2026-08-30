# [4006] Count Valid Prefixes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-valid-prefixes/description/)

* algorithms
* Easy (78.27%)
* Likes:    39
* Dislikes: 1
* Testcase Example:  '"00101"'

```md
You are given a binary string s.
A prefix of s is considered valid if its characters can be rearranged to form an alternating string.
Return the number of valid prefixes of s.
A string is considered alternating if no two adjacent characters are equal.

Example 1:
Input: s = "00101"
Output: 3
Explanation:
The valid prefixes are:
"0": It is already an alternating string.
"001": It can be rearranged into "010", which is an alternating string.
"00101": It can be rearranged into "01010", which is an alternating string.
Thus, the answer is 3.
Example 2:
Input: s = "101"
Output: 3
Explanation:
All prefixes of s = "101" are already alternating strings. Thus, the answer is 3.

Constraints:
1
s consists only of '0' and '1'.
Hint 1: A binary string can be rearranged into an alternating string if the numbers of '0' and '1' differ by at most one.
Hint 2: Scan s from left to right, maintain the counts of both characters in the current prefix, and count the prefixes satisfying this condition.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个二进制字符串 `s`。

如果 `s` 的某个前缀的字符可以重新排列成一个交替字符串（alternating string），则该前缀被认为是有效的。

返回 `s` 的有效前缀的数量。

交替字符串的定义：不存在两个相邻字符相等。

示例 1：
输入：s = "00101"
输出：3
解释：
有效前缀有：
- "0"：本身已经是交替字符串。
- "001"：可以重排为 "010"，是交替字符串。
- "00101"：可以重排为 "01010"，是交替字符串。
因此答案为 3。

示例 2：
输入：s = "101"
输出：3
解释：
s = "101" 的所有前缀都已经是交替字符串，因此答案为 3。

约束：
- 1 <= s.length
- s 仅包含 '0' 和 '1'。

## 解题思路

**关键结论**：一个含有 `c0` 个 '0' 和 `c1` 个 '1' 的二进制串，可以重排成交替字符串，当且仅当 `|c0 - c1| <= 1`。

**证明**：长度为 n 的交替字符串，两种形态为 `0101...` 和 `1010...`，两种形态中 '0' 和 '1' 的数量分别为 `(⌈n/2⌉, ⌊n/2⌋)` 和 `(⌊n/2⌋, ⌈n/2⌉)`，即两种字符数量之差至多为 1。反之，若数量差至多为 1，总可以把多的那个字符放在奇数位（或偶数位）构造出交替串。

**算法**：从左到右扫描 `s`，维护当前前缀中 '0' 和 '1' 的计数，每当 `|c0 - c1| <= 1` 时答案加一。

- 时间复杂度：O(n)，单次遍历。
- 空间复杂度：O(1)，仅两个计数变量。
