# [3137] Minimum Number of Operations to Make Word K-Periodic

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/description/)

* algorithms
* Medium (60.66%)
* Likes:    123
* Dislikes: 13
* Testcase Example:  '"leetcodeleet"\n4'

```md
You are given a string word of size n, and an integer k such that k divides n.
In one operation, you can pick any two indices i and j, that are divisible by k, then replace the substring of length k starting at i with the substring of length k starting at j. That is, replace the substring word[i..i + k - 1] with the substring word[j..j + k - 1].
Return the minimum number of operations required to make word k-periodic.
We say that word is k-periodic if there is some string s of length k such that word can be obtained by concatenating s an arbitrary number of times. For example, if word == &ldquo;ababab&rdquo;, then word is 2-periodic for s = 'ab'.

Example 1:

Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">word = 'leetcodeleet', k = 4
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">1
Explanation:
We can obtain a 4-periodic string by picking i = 4 and j = 0. After this operation, word becomes equal to 'leetleetleet'.

Example 2:

Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">word = 'leetcoleet
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">', k = 2
Output: 3
Explanation:
We can obtain a 2-periodic string by applying the operations in the table below.



i
j
word


0
2
etetcoleet


4
0
etetetleet


6
0
etetetetet








Constraints:

1 <= n == word.length <= 105
1 <= k <= word.length
k divides word.length.
word consists only of lowercase English letters.


```

## 中文翻译

给定字符串 word 和整数 k（k 整除 word 长度）。每次操作可将任意两个 k 的倍数位置的 k 长度子串互换（复制）。求使 word 变为 k 周期串（所有 k 长度块相同）的最少操作数。

## 解题思路

统计所有 k 长度块的频率，选择出现最多的块作为目标。答案 = 总块数 - 最大频率。

## Solution

[SourceCode](./solution.js)
