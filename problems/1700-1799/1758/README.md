# [1758] Minimum Changes To Make Alternating Binary String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description/)

* algorithms
* Easy (67.82%)
* Likes:    1838
* Dislikes: 55
* Testcase Example:  '"0100"'

```md
You are given a string s consisting only of the characters &#39;0&#39; and &#39;1&#39;. In one operation, you can change any &#39;0&#39; to &#39;1&#39; or vice versa.
The string is called alternating if no two adjacent characters are equal. For example, the string '010' is alternating, while the string '0100' is not.
Return the minimum number of operations needed to make s alternating.

Example 1:

Input: s = '0100'
Output: 1
Explanation: If you change the last character to &#39;1&#39;, s will be '0101', which is alternating.

Example 2:

Input: s = '10'
Output: 0
Explanation: s is already alternating.

Example 3:

Input: s = '1111'
Output: 2
Explanation: You need two operations to reach '0101' or '1010'.


Constraints:

1 <= s.length <= 104
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 翻译

给定由 '0' 和 '1' 组成的字符串 s，每次操作可以翻转一个字符。求最少操作次数使其变成交替字符串（相邻字符不同）。

## Approach

交替字符串只有两种模式：以 '0' 开头（0101...）或以 '1' 开头（1010...）。统计与每种模式不匹配的字符数，取较小值。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
