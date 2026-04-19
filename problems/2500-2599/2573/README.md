# [2573] Find the String with LCP

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-string-with-lcp/description/)

* algorithms
* Hard (63.20%)
* Likes:    450
* Dislikes: 61
* Testcase Example:  '[[4,0,2,0],[0,3,0,1],[2,0,2,0],[0,1,0,1]]'

```md
We define the lcp matrix of any 0-indexed string word of n lowercase English letters as an n x n grid such that:

lcp[i][j] is equal to the length of the longest common prefix between the substrings word[i,n-1] and word[j,n-1].

Given ann x n matrix lcp, return the alphabetically smallest string word that corresponds to lcp. If there is no such string, return an empty string.
A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b. For example, 'aabd' is lexicographically smaller than 'aaca' because the first position they differ is at the third letter, and &#39;b&#39; comes before &#39;c&#39;.

Example 1:

Input: lcp = [[4,0,2,0],[0,3,0,1],[2,0,2,0],[0,1,0,1]]
Output: 'abab'
Explanation: lcp corresponds to any 4 letter string with two alternating letters. The lexicographically smallest of them is 'abab'.

Example 2:

Input: lcp = [[4,3,2,1],[3,3,2,1],[2,2,2,1],[1,1,1,1]]
Output: 'aaaa'
Explanation: lcp corresponds to any 4 letter string with a single distinct letter. The lexicographically smallest of them is 'aaaa'.

Example 3:

Input: lcp = [[4,3,2,1],[3,3,2,1],[2,2,2,1],[1,1,1,3]]
Output: ''
Explanation: lcp[3][3] cannot be equal to 3 since word[3,...,3] consists of only a single letter; Thus, no answer exists.


Constraints:

1 <= n ==lcp.length == lcp[i].length<= 1000
0 <= lcp[i][j] <= n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个 n×n 的 LCP 矩阵，其中 lcp[i][j] 表示字符串 word 从位置 i 和位置 j 开始的子串的最长公共前缀长度。找出字典序最小的字符串 word 使得其 LCP 矩阵与给定矩阵完全一致。如果不存在这样的字符串，返回空串。

**约束：** 1 <= n <= 1000, 0 <= lcp[i][j] <= n

## 解题思路

**Approach: 贪心构造 + DP 验证**

1. **构造字符串**：贪心地分配字符。遍历每个位置 i，如果 lcp[i][j] > 0（j < i），说明 word[i] 必须等于 word[j]，找到对应的字符；否则分配新的最小可用字符（a, b, c...）
2. **验证矩阵**：用 DP 从后往前验证。如果 word[i]==word[j] 且 i,j 都不是末尾，则计算 lcp 应为 lcp[i+1][j+1]+1；在末尾时为 1；word[i]!=word[j] 时为 0
3. **校验条件**：lcp[i][i] 必须等于 n-i（自身公共前缀），矩阵必须对称
4. 时间复杂度 O(n²)，空间复杂度 O(n)（不含输入）
