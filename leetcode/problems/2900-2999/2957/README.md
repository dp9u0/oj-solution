# [2957] Remove Adjacent Almost-Equal Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/description/)

* algorithms
* Medium (53.61%)
* Likes:    210
* Dislikes: 25
* Testcase Example:  '"aaaaa"'

```md
You are given a 0-indexed string word.
In one operation, you can pick any index i of word and change word[i] to any lowercase English letter.
Return the minimum number of operations needed to remove all adjacent almost-equal characters from word.
Two characters a and b are almost-equal if a == b or a and b are adjacent in the alphabet.

Example 1:

Input: word = 'aaaaa'
Output: 2
Explanation: We can change word into 'acaca' which does not have any adjacent almost-equal characters.
It can be shown that the minimum number of operations needed to remove all adjacent almost-equal characters from word is 2.

Example 2:

Input: word = 'abddez'
Output: 2
Explanation: We can change word into 'ybdoez' which does not have any adjacent almost-equal characters.
It can be shown that the minimum number of operations needed to remove all adjacent almost-equal characters from word is 2.
Example 3:

Input: word = 'zyxyxyz'
Output: 3
Explanation: We can change word into 'zaxaxaz' which does not have any adjacent almost-equal characters.
It can be shown that the minimum number of operations needed to remove all adjacent almost-equal characters from word is 3.


Constraints:

1 <= word.length <= 100
word consists only of lowercase English letters.


```

## 题目翻译

给定字符串 word，一次操作可以选择任意位置 i，将 word[i] 改为任意小写字母。求使字符串中所有相邻字符都不"近似相等"的最少操作次数。两个字符近似相等当且仅当它们相同或在字母表中相邻（如 a 和 b）。

## 解题思路

贪心。从左到右扫描，如果当前位置和前一个位置近似相等，就修改当前字符（把它变成一个既不与前一个近似相等，也不与后一个近似相等的字符），操作数+1，然后跳过。每次修改一个字符可以同时解决它左边和右边的冲突。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
