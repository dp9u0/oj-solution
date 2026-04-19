# [3210] Find the Encrypted String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-encrypted-string/description/)

* algorithms
* Easy (68.18%)
* Likes:    115
* Dislikes: 10
* Testcase Example:  '"dart"\n3'

```md
You are given a string s and an integer k. Encrypt the string using the following algorithm:

For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).

Return the encrypted string.

Example 1:

Input: s = 'dart', k = 3
Output: 'tdar'
Explanation:

For i = 0, the 3rd character after &#39;d&#39; is &#39;t&#39;.
For i = 1, the 3rd character after &#39;a&#39; is &#39;d&#39;.
For i = 2, the 3rd character after &#39;r&#39; is &#39;a&#39;.
For i = 3, the 3rd character after &#39;t&#39; is &#39;r&#39;.


Example 2:

Input: s = 'aaa', k = 1
Output: 'aaa'
Explanation:
As all the characters are the same, the encrypted string will also be the same.


Constraints:

1 <= s.length <= 100
1 <= k <= 104
s consists only of lowercase English letters.


```

## 中文翻译

给定字符串 s 和整数 k，对每个位置 i，用 s 中第 i+k（循环）个字符替换 s[i]，返回加密后的字符串。

## 解题思路

对每个 i，新字符来自 s[(i + k) % n]。直接构建结果字符串。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
