# [1653] Minimum Deletions to Make String Balanced

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/description/)

* algorithms
* Medium (68.19%)
* Likes:    2610
* Dislikes: 82
* Testcase Example:  '"aababbab"'

```md
You are given a string s consisting only of characters &#39;a&#39; and &#39;b&#39;​​​​.
You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = &#39;b&#39; and s[j]= &#39;a&#39;.
Return the minimum number of deletions needed to make s balanced.

Example 1:

Input: s = 'aababbab'
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 ('aababbab' -> 'aaabbb'), or
Delete the characters at 0-indexed positions 3 and 6 ('aababbab' -> 'aabbbb').

Example 2:

Input: s = 'bbaaaaabb'
Output: 2
Explanation: The only solution is to delete the first two characters.


Constraints:

1 <= s.length <= 105
s[i] is&#39;a&#39; or &#39;b&#39;​​.


```

## 中文翻译

给定只含 'a' 和 'b' 的字符串 s，删除最少的字符使得不存在 i < j 且 s[i]='b', s[j]='a'（即所有 a 在所有 b 前面）。

## 解题思路

枚举分割点 i：左边全保留 a，右边全保留 b。对每个分割点计算左边 b 的数量 + 右边 a 的数量，取最小值。用前缀和预处理右边 a 的数量，一次遍历即可。

## Solution

[SourceCode](./solution.js)
