# [1542] Find Longest Awesome Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-longest-awesome-substring/description/)

* algorithms
* Hard (46.73%)
* Likes:    896
* Dislikes: 16
* Testcase Example:  '"3242415"'

```md
You are given a string s. An awesome substring is a non-empty substring of s such that we can make any number of swaps in order to make it a palindrome.
Return the length of the maximum length awesome substring of s.

Example 1:

Input: s = '3242415'
Output: 5
Explanation: '24241' is the longest awesome substring, we can form the palindrome '24142' with some swaps.

Example 2:

Input: s = '12345678'
Output: 1

Example 3:

Input: s = '213123'
Output: 6
Explanation: '213123' is the longest awesome substring, we can form the palindrome '231132' with some swaps.


Constraints:

1 <= s.length <= 105
s consists only of digits.


```

## 翻译

给定数字字符串 s。awesome 子串是可以通过交换排列成回文的子串（即最多只有一个数字出现奇数次）。返回最长 awesome 子串长度。

## Approach

前缀 XOR bitmask。用 10 位 bitmask 记录数字 0-9 的奇偶性。子串 [i, j] 可形成回文 iff mask[j] ^ mask[i-1] 最多只有 1 位不同（全偶或恰好一个奇数）。

遍历 s，维护每个 mask 值最早出现的位置。对每个位置 j：
1. 如果 mask[j] 之前出现过，则 j - first[mask[j]] 是全偶的子串长度
2. 翻转 mask[j] 的每一位，如果翻转后的 mask 之前出现过，也可构成回文

时间复杂度 O(n * 10)，空间复杂度 O(2^10)。

## Solution

[SourceCode](./solution.js)
