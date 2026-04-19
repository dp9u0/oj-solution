# [2423] Remove Letter To Equalize Frequency

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-letter-to-equalize-frequency/description/)

* algorithms
* Easy (19.32%)
* Likes:    805
* Dislikes: 1360
* Testcase Example:  '"abcc"'

```md
You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.
Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.
Note:

The frequency of a letter x is the number of times it occurs in the string.
You must remove exactly one letter and cannot choose to do nothing.


Example 1:

Input: word = 'abcc'
Output: true
Explanation: Select index 3 and delete it: word becomes 'abc' and each character has a frequency of 1.

Example 2:

Input: word = 'aazz'
Output: false
Explanation: We must delete a character, so either the frequency of 'a' is 1 and the frequency of 'z' is 2, or vice versa. It is impossible to make all present letters have equal frequency.


Constraints:

2 <= word.length <= 100
word consists of lowercase English letters only.


```

## 中文翻译

给定小写字母字符串 word，删除一个字符后，所有剩余字符频率相等则返回 true。必须恰好删一个。

## 解题思路

暴力枚举。对每个位置删除后检查剩余字符频率是否全部相等。O(26*n)。

## Solution

[SourceCode](./solution.js)
