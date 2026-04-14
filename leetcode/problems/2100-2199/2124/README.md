# [2124] Check if All A's Appears Before All B's

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/description/)

* algorithms
* Easy (73.19%)
* Likes:    850
* Dislikes: 22
* Testcase Example:  '"aaabbb"'

```md
Given a string s consisting of only the characters &#39;a&#39; and &#39;b&#39;, return true if every &#39;a&#39; appears before every &#39;b&#39; in the string. Otherwise, return false.

Example 1:

Input: s = 'aaabbb'
Output: true
Explanation:
The &#39;a&#39;s are at indices 0, 1, and 2, while the &#39;b&#39;s are at indices 3, 4, and 5.
Hence, every &#39;a&#39; appears before every &#39;b&#39; and we return true.

Example 2:

Input: s = 'abab'
Output: false
Explanation:
There is an &#39;a&#39; at index 2 and a &#39;b&#39; at index 1.
Hence, not every &#39;a&#39; appears before every &#39;b&#39; and we return false.

Example 3:

Input: s = 'bbb'
Output: true
Explanation:
There are no &#39;a&#39;s, hence, every &#39;a&#39; appears before every &#39;b&#39; and we return true.


Constraints:

1 <= s.length <= 100
s[i] is either &#39;a&#39; or &#39;b&#39;.


```

## 翻译

给定只含 'a' 和 'b' 的字符串，判断是否所有 'a' 都出现在所有 'b' 之前。

## Approach

检查字符串中是否出现 "ba" 子串。如果有 "ba" 说明有 b 在 a 之前，返回 false。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
