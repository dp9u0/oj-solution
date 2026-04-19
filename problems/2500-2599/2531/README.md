# [2531] Make Number of Distinct Characters Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-number-of-distinct-characters-equal/description/)

* algorithms
* Medium (27.55%)
* Likes:    611
* Dislikes: 160
* Testcase Example:  '"ac"\n"b"'

```md
You are given two 0-indexed strings word1 and word2.
A move consists of choosing two indices i and j such that 0 <= i < word1.length and 0 <= j < word2.length and swapping word1[i] with word2[j].
Return true if it is possible to get the number of distinct characters in word1 and word2 to be equal with exactly one move. Return false otherwise.

Example 1:

Input: word1 = 'ac', word2 = 'b'
Output: false
Explanation: Any pair of swaps would yield two distinct characters in the first string, and one in the second string.

Example 2:

Input: word1 = 'abcc', word2 = 'aab'
Output: true
Explanation: We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = 'abac' and word2 = 'cab', which both have 3 distinct characters.

Example 3:

Input: word1 = 'abcde', word2 = 'fghij'
Output: true
Explanation: Both resulting strings will have 5 distinct characters, regardless of which indices we swap.


Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 consist of only lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 翻译

给定两个字符串 word1 和 word2。一次操作选择两个索引 i 和 j，交换 word1[i] 和 word2[j]。判断是否恰好通过一次操作使得两个字符串的不同字符数量相等。

## 解题思路

**枚举 26x26 字母对**

1. 统计两个字符串的字符频率
2. 枚举所有可能的交换对 (i, j)，其中 i 存在于 word1，j 存在于 word2
3. 对每次交换，计算操作后两个字符串的不同字符数是否相等
4. 若 i==j（交换相同字符），直接比较原 distinct 数
5. 时间复杂度 O(26^2 + n)
