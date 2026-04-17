# [2900] Longest Unequal Adjacent Groups Subsequence I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/description/)

* algorithms
* Easy (66.99%)
* Likes:    485
* Dislikes: 278
* Testcase Example:  '["c"]\n[0]'

```md
You are given a string array words and a binary array groups both of length n.
A subsequence of words is alternating if for any two consecutive strings in the sequence, their corresponding elements at the same indices in groups are different (that is, there cannot be consecutive 0 or 1).
Your task is to select the longest alternating subsequence from words.
Return the selected subsequence. If there are multiple answers, return any of them.
Note: The elements in words are distinct.

Example 1:

border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">words = ['e','a','b'], groups = [0,0,1]
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">['e','b']
Explanation: A subsequence that can be selected is ['e','b'] because groups[0] != groups[2]. Another subsequence that can be selected is ['a','b'] because groups[1] != groups[2]. It can be demonstrated that the length of the longest subsequence of indices that satisfies the condition is 2.

Example 2:

border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">words = ['a','b','c','d'], groups = [1,0,1,1]
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">['a','b','c']
Explanation: A subsequence that can be selected is ['a','b','c'] because groups[0] != groups[1] and groups[1] != groups[2]. Another subsequence that can be selected is ['a','b','d'] because groups[0] != groups[1] and groups[1] != groups[3]. It can be shown that the length of the longest subsequence of indices that satisfies the condition is 3.


Constraints:

1 <= n == words.length == groups.length <= 100
1 <= words[i].length <= 10
groups[i] is either 0 or 1.
words consists of distinct strings.
words[i] consists of lowercase English letters.


```

## 中文翻译

给定字符串数组 words 和二进制数组 groups。选出最长的交替子序列（相邻元素的 groups 值不同）。返回任意一个最长子序列。

## 解题思路

**贪心**：遍历数组，只要当前 groups 值与前一个选中的不同就选中它。

时间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
