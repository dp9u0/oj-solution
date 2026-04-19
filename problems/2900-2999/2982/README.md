# [2982] Find Longest Special Substring That Occurs Thrice II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/description/)

* algorithms
* Medium (39.17%)
* Likes:    407
* Dislikes: 33
* Testcase Example:  '"aaaa"'

```md
You are given a string s that consists of lowercase English letters.
A string is called special if it is made up of only a single character. For example, the string 'abc' is not special, whereas the strings 'ddd', 'zz', and 'f' are special.
Return the length of the longest special substring of s which occurs at least thrice, or -1 if no special substring occurs at least thrice.
A substring is a contiguous non-empty sequence of characters within a string.

Example 1:

Input: s = 'aaaa'
Output: 2
Explanation: The longest special substring which occurs thrice is 'aa': substrings 'aaaa', 'aaaa', and 'aaaa'.
It can be shown that the maximum length achievable is 2.

Example 2:

Input: s = 'abcdef'
Output: -1
Explanation: There exists no special substring which occurs at least thrice. Hence return -1.

Example 3:

Input: s = 'abcaba'
Output: 1
Explanation: The longest special substring which occurs thrice is 'a': substrings 'abcaba', 'abcaba', and 'abcaba'.
It can be shown that the maximum length achievable is 1.


Constraints:

3 <= s.length <= 5 * 105
s consists of only lowercase English letters.


```

## 翻译

给定由小写字母组成的字符串 s。特殊字符串是只包含单一字符的字符串。返回 s 中至少出现三次的最长特殊子串的长度，不存在则返回 -1。

## Approach

对每个字符统计连续运行长度（run length），保留每个字符前三大运行长度 a >= b >= c。

对于每个字符，最大合法长度 k 为 max：
1. a - 2：仅从最长运行取 3 个子串
2. min(b, floor((a+b-1)/2))：从最长和次长运行各取若干
3. min(c, floor((a+b+c)/3))：从三个运行各取至少 1 个

取所有字符中的最大值。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
