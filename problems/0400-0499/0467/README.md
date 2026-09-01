# [467] Unique Substrings in Wraparound String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/unique-substrings-in-wraparound-string/description/)

* algorithms
* Medium (42.89%)
* Likes:    1531
* Dislikes: 191
* Testcase Example:  '"a"'

```md
We define the string base to be the infinite wraparound string of 'abcdefghijklmnopqrstuvwxyz', so base will look like this:

'...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....'.

Given a string s, return the number of unique non-empty substrings of s are present in base.

Example 1:

Input: s = 'a'
Output: 1
Explanation: Only the substring 'a' of s is in base.

Example 2:

Input: s = 'cac'
Output: 2
Explanation: There are two substrings ('a', 'c') of s in base.

Example 3:

Input: s = 'zab'
Output: 6
Explanation: There are six substrings ('z', 'a', 'b', 'za', 'ab', and 'zab') of s in base.


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.


```

## 中文翻译

定义 base 为字母表 'abcdefghijklmnopqrstuvwxyz' 的无限循环字符串。给定字符串 s，返回 s 中有多少个不同的非空子串出现在 base 中。

出现在 base 中的子串 = 连续字母序列（z→a 视为连续）。

## 解题思路

DP。遍历 s，dp[i] 表示以 s[i] 结尾的最长连续字母子串长度。对每个字符 c，记录 maxLen[c] = 所有以 c 结尾的 dp 最大值。最终答案 = sum(maxLen[c])，因为以 c 结尾的最长子串包含了所有更短的以 c 结尾的合法子串。

## Solution

[SourceCode](./solution.js)
