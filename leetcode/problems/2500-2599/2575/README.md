# [2575] Find the Divisibility Array of a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/description/)

* algorithms
* Medium (35.88%)
* Likes:    587
* Dislikes: 25
* Testcase Example:  '"998244353"\n3'

```md
You are given a 0-indexed string word of length nconsisting of digits, and a positive integerm.
The divisibility array div of word is an integer array of length n such that:

div[i] = 1 if thenumeric valueofword[0,...,i] is divisible by m, or
div[i] = 0 otherwise.

Return the divisibility array of word.

Example 1:

Input: word = '998244353', m = 3
Output: [1,1,0,0,0,1,1,0,0]
Explanation: There are only 4 prefixes that are divisible by 3: '9', '99', '998244', and '9982443'.

Example 2:

Input: word = '1010', m = 10
Output: [0,1,0,1]
Explanation: There are only 2 prefixes that are divisible by 10: '10', and '1010'.


Constraints:

1 <= n <= 105
word.length == n
word consists of digits from 0to 9
1 <= m <= 109


```

## 中文翻译

给定数字字符串 word 和正整数 m，返回长度为 n 的数组 div，div[i]=1 当且仅当 word[0..i] 表示的数值能被 m 整除。

## 解题思路

逐位取模。维护前缀对 m 的余数 rem，每加一位：rem = (rem * 10 + digit) % m。若 rem == 0 则 div[i]=1。用 BigInt 处理大数取模避免溢出（m 可达 10^9，rem*10+digit 可能超出 Number 精度）。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
