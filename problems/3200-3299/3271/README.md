# [3271] Hash Divided String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/hash-divided-string/description/)

* algorithms
* Medium (83.21%)
* Likes:    110
* Dislikes: 15
* Testcase Example:  '"abcd"\n2'

```md
You are given a string s of length n and an integer k, where n is a multiple of k. Your task is to hash the string s into a new string called result, which has a length of n / k.
First, divide s into n / k substrings, each with a length of k. Then, initialize result as an empty string.
For each substring in order from the beginning:

The hash value of a character is the index of that character in the English alphabet (e.g., &#39;a&#39; &rarr; 0, &#39;b&#39; &rarr; 1, ..., &#39;z&#39; &rarr; 25).
Calculate the sum of all the hash values of the characters in the substring.
Find the remainder of this sum when divided by 26, which is called hashedChar.
Identify the character in the English lowercase alphabet that corresponds to hashedChar.
Append that character to the end of result.

Return result.

Example 1:

Input: s = 'abcd', k = 2
Output: 'bf'
Explanation:
First substring: 'ab', 0 + 1 = 1, 1 % 26 = 1, result[0] = &#39;b&#39;.
Second substring: 'cd', 2 + 3 = 5, 5 % 26 = 5, result[1] = &#39;f&#39;.

Example 2:

Input: s = 'mxz', k = 3
Output: 'i'
Explanation:
The only substring: 'mxz', 12 + 23 + 25 = 60, 60 % 26 = 8, result[0] = &#39;i&#39;.


Constraints:

1 <= k <= 100
k <= s.length <= 1000
s.length is divisible by k.
s consists only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

将字符串 s 按长度 k 分成 n/k 段，每段字符的 hash 值之和（a=0,b=1,...）模 26 对应一个字母，拼接成结果字符串。

## 解题思路

**Approach: 直接模拟**

1. 每 k 个字符一段，求每段中各字符 (c - 'a') 的和
2. 对 26 取余得到结果字符
3. 复杂度 O(n)
