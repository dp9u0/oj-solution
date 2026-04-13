# [2131] Longest Palindrome by Concatenating Two Letter Words

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/description/)

* algorithms
* Medium (53.52%)
* Likes:    2959
* Dislikes: 79
* Testcase Example:  '["lc","cl","gg"]'

```md
You are given an array of strings words. Each element of words consists of two lowercase English letters.
Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.
Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.
A palindrome is a string that reads the same forward and backward.

Example 1:

Input: words = ['lc','cl','gg']
Output: 6
Explanation: One longest palindrome is 'lc' + 'gg' + 'cl' = 'lcggcl', of length 6.
Note that 'clgglc' is another longest palindrome that can be created.

Example 2:

Input: words = ['ab','ty','yt','lc','cl','ab']
Output: 8
Explanation: One longest palindrome is 'ty' + 'lc' + 'cl' + 'yt' = 'tylcclyt', of length 8.
Note that 'lcyttycl' is another longest palindrome that can be created.

Example 3:

Input: words = ['cc','ll','xx']
Output: 2
Explanation: One longest palindrome is 'cc', of length 2.
Note that 'll' is another longest palindrome that can be created, and so is 'xx'.


Constraints:

1 <= words.length <= 105
words[i].length == 2
words[i] consists of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定由两个小写字母组成的字符串数组 words，从中选取若干单词拼接成最长回文串。每个单词最多选一次。返回最长回文串长度。

## 解题思路

**哈希计数 + 贪心**

1. 统计每个单词出现次数
2. 对于非回文单词（如 "ab"），与其反转（如 "ba"）配对，取 min(count["ab"], count["ba"]) 对，每对贡献长度 4
3. 对于回文单词（如 "gg"），取 floor(count/2) 对，每对贡献长度 4
4. 如果有剩余的回文单词（奇数个），可以放中间，额外贡献 2

时间复杂度 O(n)，空间复杂度 O(n)。
