# [1930] Unique Length-3 Palindromic Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/description/)

* algorithms
* Medium (73.79%)
* Likes:    2866
* Dislikes: 108
* Testcase Example:  '"aabca"'

```md
Given a string s, return the number of unique palindromes of length three that are a subsequence of s.
Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.
A palindrome is a string that reads the same forwards and backwards.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, 'ace' is a subsequence of 'abcde'.


Example 1:

Input: s = 'aabca'
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- 'aba' (subsequence of 'aabca')
- 'aaa' (subsequence of 'aabca')
- 'aca' (subsequence of 'aabca')

Example 2:

Input: s = 'adc'
Output: 0
Explanation: There are no palindromic subsequences of length 3 in 'adc'.

Example 3:

Input: s = 'bbcbaba'
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- 'bbb' (subsequence of 'bbcbaba')
- 'bcb' (subsequence of 'bbcbaba')
- 'bab' (subsequence of 'bbcbaba')
- 'aba' (subsequence of 'bbcbaba')


Constraints:

3 <= s.length <= 105
s consists of only lowercase English letters.


```

## 翻译

给定字符串 `s`，返回其中长度为 3 的不同回文子序列的个数。子序列不要求连续，相同子序列只计一次。

## Approach

**枚举首尾字符。** 长度为 3 的回文形如 `aba`，首尾字符相同，中间任意。对于每个字母 `c`（a-z）：
1. 找到 `c` 在 `s` 中第一次出现的位置 `first` 和最后一次出现的位置 `last`
2. 若 `first < last`，则在 `(first, last)` 区间内不同字符的个数就是以 `c` 为首尾的回文数
3. 用 Set 统计区间内不同字符

时间复杂度：O(26 * n) = O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
