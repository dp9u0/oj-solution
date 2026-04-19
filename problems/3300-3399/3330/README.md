# [3330] Find the Original Typed String I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-original-typed-string-i/description/)

* algorithms
* Easy (72.06%)
* Likes:    529
* Dislikes: 78
* Testcase Example:  '"abbcccc"'

```md
Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, resulting in a character being typed multiple times.
Although Alice tried to focus on her typing, she is aware that she may still have done this at most once.
You are given a string word, which represents the final output displayed on Alice&#39;s screen.
Return the total number of possible original strings that Alice might have intended to type.

Example 1:

Input: word = 'abbcccc'
Output: 5
Explanation:
The possible strings are: 'abbcccc', 'abbccc', 'abbcc', 'abbc', and 'abcccc'.

Example 2:

Input: word = 'abcd'
Output: 1
Explanation:
The only possible string is 'abcd'.

Example 3:

Input: word = 'aaaa'
Output: 4


Constraints:

1 <= word.length <= 100
word consists only of lowercase English letters.


```

## 翻译

Alice 打字时最多有一次按键过长导致某个字符被多按了若干次。给定最终字符串 word，返回可能的原始字符串数量。

## 解题思路

找到所有连续相同字符的组。Alice 可能多按了某一组中的若干个字符（减少该组长度 1 到 len-1 个），或不按错。答案 = 1 + sum(每组长度 - 1)，即每组贡献 (len-1) 种选择。时间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
