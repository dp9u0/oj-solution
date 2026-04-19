# [2565] Subsequence With the Minimum Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/subsequence-with-the-minimum-score/description/)

* algorithms
* Hard (33.14%)
* Likes:    407
* Dislikes: 7
* Testcase Example:  '"abacaba"\n"bzaa"'

```md
You are given two strings s and t.
You are allowed to remove any number of characters from the string t.
The score of the string is 0 if no characters are removed from the string t, otherwise:

Let left be the minimum index among all removed characters.
Let right be the maximum index among all removed characters.

Then the score of the string is right - left + 1.
Return the minimum possible score to make ta subsequence of s.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., 'ace' is a subsequence of 'abcde' while 'aec' is not).

Example 1:

Input: s = 'abacaba', t = 'bzaa'
Output: 1
Explanation: In this example, we remove the character 'z' at index 1 (0-indexed).
The string t becomes 'baa' which is a subsequence of the string 'abacaba' and the score is 1 - 1 + 1 = 1.
It can be proven that 1 is the minimum score that we can achieve.

Example 2:

Input: s = 'cde', t = 'xyz'
Output: 3
Explanation: In this example, we remove characters 'x', 'y' and 'z' at indices 0, 1, and 2 (0-indexed).
The string t becomes '' which is a subsequence of the string 'cde' and the score is 2 - 0 + 1 = 3.
It can be proven that 3 is the minimum score that we can achieve.


Constraints:

1 <= s.length, t.length <= 105
s and t consist of only lowercase English letters.


```

## 中文翻译

给定字符串 s 和 t，可从 t 中删除任意字符使 t 成为 s 的子序列。分数 = 删除字符的最小索引到最大索引的距离+1（不删则为0）。求最小分数。

约束：|s|, |t| <= 10^5

## 解题思路

**前后缀分解 + 二分**

1. pre[i] = 匹配 t[0..i-1] 后在 s 中的位置（单调递增）。
2. suf[i] = 从 s 中位置 suf[i] 开始匹配 t[i..m-1]（单调递增）。
3. 删除范围 [left, right]，保留 t[0..left-1] 和 t[right+1..m-1]，需 pre[left] <= suf[right+1]。
4. 对每个 left，二分找最小 right 使 suf[right+1] >= pre[left]，最小化 right-left+1。

## Solution

[SourceCode](./solution.js)
