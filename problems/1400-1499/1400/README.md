# [1400] Construct K Palindrome Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-k-palindrome-strings/description/)

* algorithms
* Medium (68.55%)
* Likes:    1793
* Dislikes: 160
* Testcase Example:  '"annabelle"\n2'

```md
Given a string s and an integer k, return true if you can use all the characters in s to construct non-empty k palindrome strings or false otherwise.

Example 1:

Input: s = 'annabelle', k = 2
Output: true
Explanation: You can construct two palindromes using all characters in s.
Some possible constructions 'anna' + 'elble', 'anbna' + 'elle', 'anellena' + 'b'

Example 2:

Input: s = 'leetcode', k = 3
Output: false
Explanation: It is impossible to construct 3 palindromes using all the characters of s.

Example 3:

Input: s = 'true', k = 4
Output: true
Explanation: The only possible solution is to put each character in a separate string.


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 s 和整数 k，判断能否用 s 的所有字符恰好构造 k 个非空回文字符串。

## 解题思路

**贪心 + 奇偶性分析**

关键性质：每个回文串最多只能有 1 个出现奇数次的字符（放在中间）。所以 k 个回文串最多容纳 k 个出现奇数次的字符。

- 统计 s 中出现奇数次的字符个数 oddCount
- 如果 oddCount > k，则无法构造（奇数次字符太多了）
- 如果 k > s.length，也无法构造（每个回文串至少 1 个字符）
- 其他情况都可以构造

时间复杂度 O(n)，空间复杂度 O(1)。
