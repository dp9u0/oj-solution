# [1163] Last Substring in Lexicographical Order

## Description

[LeetCode Problem Description](https://leetcode.com/problems/last-substring-in-lexicographical-order/description/)

* algorithms
* Hard (35.02%)
* Likes:    668
* Dislikes: 459
* Testcase Example:  '"abab"'

```md
Given a string s, return the last substring of s in lexicographical order.

Example 1:

Input: s = 'abab'
Output: 'bab'
Explanation: The substrings are ['a', 'ab', 'aba', 'abab', 'b', 'ba', 'bab']. The lexicographically maximum substring is 'bab'.

Example 2:

Input: s = 'leetcode'
Output: 'tcode'


Constraints:

1 <= s.length <= 4 * 105
s contains only lowercase English letters.


```

## 中文翻译

给定字符串 s，返回 s 的所有子串中字典序最大的那个。s 只含小写字母，长度 up to 4*10^5。

## 解题思路

关键观察：字典序最大的子串一定是某个后缀（从某个位置到末尾），因为更长的后缀字典序 >= 其前缀。

问题转化为：找到字典序最大的后缀。用双指针 O(n) 算法：
- 维护候选起点 i 和挑战者 j，k 为当前比较偏移量
- 比较 s[i+k] 和 s[j+k]：相等则 k++；若 s[i+k] < s[j+k]，淘汰 i..i+k，i += k+1；否则淘汰 j..j+k，j += k+1
- i 和 j 每次至少前进 1，总复杂度 O(n)

## Solution

[SourceCode](./solution.js)
