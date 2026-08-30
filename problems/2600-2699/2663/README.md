# [2663] Lexicographically Smallest Beautiful String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/description/)

* algorithms
* Hard (38.75%)
* Likes:    230
* Dislikes: 28
* Testcase Example:  '"abcz"\n26'

```md
A string is beautiful if:
It consists of the first k letters of the English lowercase alphabet.
It does not contain any substring of length 2 or more which is a palindrome.
You are given a beautiful string s of length n and a positive integer k.
Return the lexicographically smallest string of length n, which is larger than s and is beautiful. If there is no such string, return an empty string.
A string a is lexicographically larger than a string b (of the same length) if in the first position where a and b differ, a has a character strictly larger than the corresponding character in b.
For example, "abcd" is lexicographically larger than "abcc" because the first position they differ is at the fourth character, and d is greater than c.

Example 1:
Input: s = "abcz", k = 26
Output: "abda"
Explanation: The string "abda" is beautiful and lexicographically larger than the string "abcz".
It can be proven that there is no string that is lexicographically larger than the string "abcz", beautiful, and lexicographically smaller than the string "abda".
Example 2:
Input: s = "dc", k = 4
Output: ""
Explanation: It can be proven that there is no string that is lexicographically larger than the string "dc" and is beautiful.

Constraints:
1 <= n == s.length <= 105
4 <= k <= 26
s is a beautiful string.
Hint 1: If the string does not contain any palindromic substrings of lengths 2 and 3, then the string does not contain any palindromic substrings at all.
Hint 2: Iterate from right to left and if it is possible to increase character at index i without creating any palindromic substrings of lengths 2 and 3, then increase it.
Hint 3: After increasing the character at index i, set every character after index i equal to character a. With this, we will ensure that we have created a lexicographically larger string than s, which does not contain any palindromes before index i and is lexicographically the smallest.
Hint 4: Finally, we are just left with a case to fix palindromic substrings, which come after index i. This can be done with a similar method mentioned in the second hint.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

一个字符串是「美丽」的，当且仅当：
- 它只由英文小写字母表的前 k 个字母组成。
- 它不包含任何长度 ≥ 2 的回文子串。

给定一个长度为 n 的美丽字符串 s 和一个正整数 k。
返回长度为 n、字典序大于 s 且美丽的字典序最小字符串。如果不存在这样的字符串，返回空字符串。

字符串 a 字典序大于同长度的字符串 b：在 a 与 b 第一个不同的位置上，a 的字符严格大于 b 对应字符。
例如 "abcd" 字典序大于 "abcc"，因为二者第四个字符不同且 d > c。

示例 1：
输入: s = "abcz", k = 26
输出: "abda"
解释: "abda" 是美丽的且字典序大于 "abcz"。可以证明不存在既大于 "abcz" 又美丽且小于 "abda" 的字符串。

示例 2：
输入: s = "dc", k = 4
输出: ""
解释: 可以证明不存在字典序大于 "dc" 的美丽字符串。

约束:
- 1 <= n == s.length <= 10^5
- 4 <= k <= 26
- s 是美丽字符串。

## 解题思路

**关键观察**：一个字符串不含长度 ≥ 2 的回文子串，当且仅当它不含长度为 2 或 3 的回文子串（任何更长的回文，其中心必然包含一个长度为 2 或 3 的回文）。因此「美丽」等价于约束：`t[i] != t[i-1]` 且 `t[i] != t[i-2]`（对所有 i）。

**贪心 + 从右向左枚举**：
1. 从右向左找**最右**位置 i，使得 s[i] 能被替换成某个严格更大的字符 c（取最小的满足 c > s[i] 且 c != s[i-1]、c != s[i-2] 的字符，k ≥ 4 保证了候选集足够）。位置越靠右，前缀保持不变的部分越长，结果字典序越小。
2. 找到后将 s[i] 替换为 c。此时前缀 s[0..i] 满足约束（i 之前原串本就美丽，i 处新字符与前两个字符不同）。
3. 对 i 之后的位置从左到右贪心填充：每个位置取「不等于前两个字符的最小字符」。因为前两个字符互不相同，前 3 个字母中必有一个可用（k ≥ 4 更无问题），且该贪心显然得到后缀字典序最小的合法填充。
4. 若不存在可增大的位置，返回 ""。

**复杂度**：时间 O(n·k)，空间 O(n)。n = 10^5、k ≤ 26 时约 2.6×10^6 次操作，轻松通过。
