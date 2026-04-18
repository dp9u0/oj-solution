# [1668] Maximum Repeating Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-repeating-substring/description/)

* algorithms
* Easy (41.44%)
* Likes:    833
* Dislikes: 302
* Testcase Example:  '"ababc"\n"ab"'

```md
For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word&#39;s maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word&#39;s maximum k-repeating value is 0.
Given strings sequence and word, return the maximum k-repeating value of word in sequence.

Example 1:

Input: sequence = 'ababc', word = 'ab'
Output: 2
Explanation: 'abab' is a substring in 'ababc'.

Example 2:

Input: sequence = 'ababc', word = 'ba'
Output: 1
Explanation: 'ba' is a substring in 'ababc'. 'baba' is not a substring in 'ababc'.

Example 3:

Input: sequence = 'ababc', word = 'ac'
Output: 0
Explanation: 'ac' is not a substring in 'ababc'.


Constraints:

1 <= sequence.length <= 100
1 <= word.length <= 100
sequence and wordcontains only lowercase English letters.


```

## 题目翻译

给定 sequence 和 word，求 word 最多重复拼接 k 次后仍是 sequence 子串的最大 k。

## 解题思路

逐步拼接 word 并检查是否为子串，直到不满足为止。

## Solution

[SourceCode](./solution.js)
