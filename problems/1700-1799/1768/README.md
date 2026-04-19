# [1768] Merge Strings Alternately

## Description

[LeetCode Problem Description](https://leetcode.com/problems/merge-strings-alternately/description/)

* algorithms
* Easy (82.10%)
* Likes:    4940
* Dislikes: 145
* Testcase Example:  '"abc"\n"pqr"'

```md
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.

Example 1:

Input: word1 = 'abc', word2 = 'pqr'
Output: 'apbqcr'
Explanation:The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = 'ab', word2 = 'pqrs'
Output: 'apbqrs'
Explanation:Notice that as word2 is longer, 'rs' is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:

Input: word1 = 'abcd', word2 = 'pq'
Output: 'apbqcd'
Explanation:Notice that as word1 is longer, 'cd' is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d


Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.


```

## 中文翻译

交替合并两个字符串，从 word1 开始。较长字符串的剩余部分追加到末尾。

## 解题思路

双指针交替取字符。

时间复杂度：O(n+m)，空间复杂度：O(n+m)

## Solution

[SourceCode](./solution.js)
