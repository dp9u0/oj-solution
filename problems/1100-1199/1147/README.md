# [1147] Longest Chunked Palindrome Decomposition

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/description/)

* algorithms
* Hard (58.94%)
* Likes:    714
* Dislikes: 35
* Testcase Example:  '"ghiabcdefhelloadamhelloabcdefghi"'

```md
You are given a string text. You should split it to k substrings (subtext1, subtext2, ..., subtextk) such that:

subtexti is a non-empty string.
The concatenation of all the substrings is equal to text (i.e., subtext1 + subtext2 + ... + subtextk == text).
subtexti == subtextk - i + 1 for all valid values of i (i.e., 1 <= i <= k).

Return the largest possible value of k.

Example 1:

Input: text = 'ghiabcdefhelloadamhelloabcdefghi'
Output: 7
Explanation: We can split the string on '(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)'.

Example 2:

Input: text = 'merchant'
Output: 1
Explanation: We can split the string on '(merchant)'.

Example 3:

Input: text = 'antaprezatepzapreanta'
Output: 11
Explanation: We can split the string on '(a)(nt)(a)(pre)(za)(tep)(za)(pre)(a)(nt)(a)'.


Constraints:

1 <= text.length <= 1000
text consists only of lowercase English characters.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定字符串 text，将其分成 k 个子串，使得这些子串构成回文序列（第 i 个子串等于第 k-i+1 个子串）。求最大的 k 值。

## 解题思路

贪心双指针。从两端同时构建前缀和后缀，每次找到最短的匹配前后缀就立即切分，计数 +2。剩余无法匹配的中间部分计 1。贪心正确性：为了最大化段数，应尽可能使用最短的匹配。用滚动哈希可以优化到 O(n)，但 n<=1000 直接字符串比较即可。
