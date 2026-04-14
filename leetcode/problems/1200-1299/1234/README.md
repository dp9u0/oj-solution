# [1234] Replace the Substring for Balanced String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/replace-the-substring-for-balanced-string/description/)

* algorithms
* Medium (40.79%)
* Likes:    1290
* Dislikes: 225
* Testcase Example:  '"QWER"'

```md
You are given a string s of length n containing only four kinds of characters: &#39;Q&#39;, &#39;W&#39;, &#39;E&#39;, and &#39;R&#39;.
A string is said to be balanced if each of its characters appears n / 4 times where n is the length of the string.
Return the minimum length of the substring that can be replaced with any other string of the same length to make s balanced. If s is already balanced, return 0.

Example 1:

Input: s = 'QWER'
Output: 0
Explanation: s is already balanced.

Example 2:

Input: s = 'QQWE'
Output: 1
Explanation: We need to replace a &#39;Q&#39; to &#39;R&#39;, so that 'RQWE' (or 'QRWE') is balanced.

Example 3:

Input: s = 'QQQW'
Output: 2
Explanation: We can replace the first 'QQ' to 'ER'.


Constraints:

n == s.length
4 <= n <= 105
n is a multiple of 4.
s contains only &#39;Q&#39;, &#39;W&#39;, &#39;E&#39;, and &#39;R&#39;.


```

## 翻译

给定只含 Q/W/E/R 的字符串 s，长度 n 是 4 的倍数。平衡字符串每个字符恰好出现 n/4 次。求替换最短的连续子串使得字符串平衡。

## Approach

滑动窗口。先统计整个字符串的字符计数。需要找最短子串 [left, right]，使得移除该子串后，剩余部分每个字符计数 <= n/4。即对窗口外的部分，每个字符的计数不超过 n/4。

1. 统计每个字符总数
2. 滑动窗口：right 扩展时减少对应字符计数，当所有字符计数 <= n/4 时尝试收缩 left
3. 记录最小窗口长度

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
