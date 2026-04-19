# [2278] Percentage of Letter in String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/percentage-of-letter-in-string/description/)

* algorithms
* Easy (75.17%)
* Likes:    563
* Dislikes: 64
* Testcase Example:  '"foobar"\n"o"'

```md
Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

Example 1:

Input: s = 'foobar', letter = 'o'
Output: 33
Explanation:
The percentage of characters in s that equal the letter &#39;o&#39; is 2 / 6 * 100% = 33% when rounded down, so we return 33.

Example 2:

Input: s = 'jjjj', letter = 'k'
Output: 0
Explanation:
The percentage of characters in s that equal the letter &#39;k&#39; is 0%, so we return 0.

Constraints:

1 <= s.length <= 100
s consists of lowercase English letters.
letter is a lowercase English letter.


```

## 题目翻译

给定字符串 s 和字符 letter，返回 s 中等于 letter 的字符占比的百分比（向下取整）。

## 解题思路

统计 letter 出现次数 count，返回 Math.floor(count * 100 / s.length)。
