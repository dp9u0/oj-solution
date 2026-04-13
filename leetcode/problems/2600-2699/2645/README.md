# [2645] Minimum Additions to Make Valid String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-additions-to-make-valid-string/description/)

* algorithms
* Medium (51.00%)
* Likes:    592
* Dislikes: 29
* Testcase Example:  '"b"'

```md
Given a string word to which you can insert letters 'a', 'b' or 'c' anywhere and any number of times, return the minimum number of letters that must be inserted so that word becomes valid.
A string is called valid if it can be formed by concatenating the string 'abc' several times.

Example 1:

Input: word = 'b'
Output: 2
Explanation: Insert the letter 'a' right before 'b', and the letter 'c' right next to 'b' to obtain the valid string 'abc'.

Example 2:

Input: word = 'aaa'
Output: 6
Explanation: Insert letters 'b' and 'c' next to each 'a' to obtain the valid string 'abcabcabc'.

Example 3:

Input: word = 'abc'
Output: 0
Explanation: word is already valid. No modifications are needed.


Constraints:

1 <= word.length <= 50
word consists of letters 'a', 'b'and 'c' only.


```

## 翻译

给定由 'a'、'b'、'c' 组成的字符串，可在任意位置插入这三个字母，使其成为若干个 "abc" 拼接而成的合法字符串。求最少插入次数。

## Approach

统计分组数：每当 word[i] <= word[i-1] 时需要新开一个 "abc" 组。每组需要 3 个字符，当前已有 n 个字符，故答案 = 3 * groups - n。

## Solution

[SourceCode](./solution.js)
