# [3545] Minimum Deletions for At Most K Distinct Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-deletions-for-at-most-k-distinct-characters/description/)

* algorithms
* Easy (73.08%)
* Likes:    94
* Dislikes: 6
* Testcase Example:  '"abc"\n2'

```md
You are given a string s consisting of lowercase English letters, and an integer k.
Your task is to delete some (possibly none) of the characters in the string so that the number of distinct characters in the resulting string is at most k.
Return the minimum number of deletions required to achieve this.

Example 1:

Input: s = 'abc', k = 2
Output: 1
Explanation:

s has three distinct characters: &#39;a&#39;, &#39;b&#39; and &#39;c&#39;, each with a frequency of 1.
Since we can have at most k = 2 distinct characters, remove all occurrences of any one character from the string.
For example, removing all occurrences of &#39;c&#39; results in at most k distinct characters. Thus, the answer is 1.


Example 2:

Input: s = 'aabb', k = 2
Output: 0
Explanation:

s has two distinct characters (&#39;a&#39; and &#39;b&#39;) with frequencies of 2 and 2, respectively.
Since we can have at most k = 2 distinct characters, no deletions are required. Thus, the answer is 0.


Example 3:

Input: s = 'yyyzz', k = 1
Output: 2
Explanation:

s has two distinct characters (&#39;y&#39; and &#39;z&#39;) with frequencies of 3 and 2, respectively.
Since we can have at most k = 1 distinct character, remove all occurrences of any one character from the string.
Removing all &#39;z&#39; results in at most k distinct characters. Thus, the answer is 2.



Constraints:

1 <= s.length <= 16
1 <= k <= 16
s consists only of lowercase English letters.



```

## 中文翻译

给定字符串 s 和整数 k，删除最少的字符使得剩余字符串中不同字符数不超过 k。

## 解题思路

统计每个字符的频率。如果不同字符数超过 k，保留频率最高的 k 个字符，删除其余所有字符（频率之和最小）。即将频率升序排列，累加最小的若干频率即可。

## Solution

[SourceCode](./solution.js)
