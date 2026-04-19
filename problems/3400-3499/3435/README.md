# [3435] Frequencies of Shortest Supersequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/frequencies-of-shortest-supersequences/description/)

* algorithms
* Hard (22.25%)
* Likes:    28
* Dislikes: 8
* Testcase Example:  '["ab","ba"]'

```md
You are given an array of strings words. Find all shortest common supersequences (SCS) of words that are not permutations of each other.
A shortest common supersequence is a string of minimum length that contains each string in words as a subsequence.
Return a 2D array of integers freqs that represent all the SCSs. Each freqs[i] is an array of size 26, representing the frequency of each letter in the lowercase English alphabet for a single SCS. You may return the frequency arrays in any order.

Example 1:

Input: words = ['ab','ba']
Output: [[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
Explanation:
The two SCSs are 'aba' and 'bab'. The output is the letter frequencies for each one.

Example 2:

Input: words = ['aa','ac']
Output: [[2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
Explanation:
The two SCSs are 'aac' and 'aca'. Since they are permutations of each other, keep only 'aac'.

Example 3:

Input: words = ['aa','bb','cc']
Output: [[2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
Explanation:
'aabbcc' and all its permutations are SCSs.


Constraints:

1 <= words.length <= 256
words[i].length == 2
All strings in words will altogether be composed of no more than 16 unique lowercase letters.
All strings in words are unique.


```

## 题目翻译

给定一组长度为 2 的字符串 words，求所有最短公共超序列（SCS）的不同频率向量。SCS 是包含每个 word 作为子序列的最短字符串。互为排列的 SCS 只保留一个。

## 解题思路

**位掩码枚举 + DAG 预判定**

每个 word "xy" 意味着 x 必须在 y 之前出现。构建有向图：
1. 自环 "xx" → x 必须出现两次
2. 边 x→y → x 必须在 y 之前

将字符分为出现 1 次或 2 次。出现 2 次的字符可以"包裹"其他字符，自动满足相关约束。出现 1 次的字符之间的约束必须无环（DAG）。

算法：
1. 枚举额外加倍哪些字符（自环节点必须加倍）
2. 对未加倍字符的子图判定 DAG（预处理所有子集）
3. 找最少的额外加倍数，收集不同频率向量

时间 O(2^m · m + C(m, k))，m ≤ 16。

## Solution

[SourceCode](./solution.js)
