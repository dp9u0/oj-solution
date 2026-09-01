# [943] Find the Shortest Superstring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-shortest-superstring/description/)

* algorithms
* Hard (45.24%)
* Likes:    1523
* Dislikes: 152
* Testcase Example:  '["alex","loves","leetcode"]'

```md
Given an array of strings words, return the smallest string that contains each string in words as a substring. If there are multiple valid strings of the smallest length, return any of them.
You may assume that no string in words is a substring of another string in words.

Example 1:

Input: words = ['alex','loves','leetcode']
Output: 'alexlovesleetcode'
Explanation: All permutations of 'alex','loves','leetcode' would also be accepted.

Example 2:

Input: words = ['catg','ctaagt','gcta','ttca','atgcatc']
Output: 'gctaagttcatgcatc'


Constraints:

1 <= words.length <= 12
1 <= words[i].length <= 20
words[i] consists of lowercase English letters.
All the strings of words are unique.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定字符串数组 words，返回包含每个字符串作为子串的最短字符串。

## 解题思路

预处理 overlap[i][j] = words[j] 能接在 words[i] 后面时新增的字符数。然后用 bitmask DP：dp[mask][i] 表示已选 mask 中的词、最后一个词是 i 时的最短长度。最后回溯构造字符串。
