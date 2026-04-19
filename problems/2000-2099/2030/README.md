# [2030] Smallest K-Length Subsequence With Occurrences of a Letter

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/description/)

* algorithms
* Hard (39.69%)
* Likes:    514
* Dislikes: 15
* Testcase Example:  '"leet"\n3\n"e"\n1'

```md
You are given a string s, an integer k, a letter letter, and an integer repetition.
Return the lexicographically smallest subsequence of s of length k that has the letter letter appear at least repetition times. The test cases are generated so that the letter appears in s at least repetition times.
A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
A string a is lexicographically smaller than a string b if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.

Example 1:

Input: s = 'leet', k = 3, letter = 'e', repetition = 1
Output: 'eet'
Explanation: There are four subsequences of length 3 that have the letter &#39;e&#39; appear at least 1 time:
- 'lee' (from 'leet')
- 'let' (from 'leet')
- 'let' (from 'leet')
- 'eet' (from 'leet')
The lexicographically smallest subsequence among them is 'eet'.

Example 2:


Input: s = 'leetcode', k = 4, letter = 'e', repetition = 2
Output: 'ecde'
Explanation: 'ecde' is the lexicographically smallest subsequence of length 4 that has the letter 'e' appear at least 2 times.

Example 3:

Input: s = 'bb', k = 2, letter = 'b', repetition = 2
Output: 'bb'
Explanation: 'bb' is the only subsequence of length 2 that has the letter 'b' appear at least 2 times.


Constraints:

1 <= repetition <= k <= s.length <= 5 * 104
s consists of lowercase English letters.
letter is a lowercase English letter, and appears in s at least repetition times.


```

## 题目翻译

给定字符串 s、整数 k、字符 letter 和整数 repetition。返回 s 的长度为 k 的字典序最小子序列，且 letter 至少出现 repetition 次。

## 解题思路

**贪心 + 单调栈**

类似经典"最小子序列"问题，用单调栈维护结果。额外约束：letter 至少出现 repetition 次。

预处理 count[i] = s[i..n-1] 中 letter 的数量。

对每个位置 i：
1. 弹出栈顶大于 s[i] 的元素（使字典序更小），条件：剩余字符足够填满栈 && 弹出 letter 后仍能满足 repetition 要求。
2. 推入 s[i]：检查推入后仍能从剩余字符中获得足够的 letter。

时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
