# [936] Stamping The Sequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stamping-the-sequence/description/)

* algorithms
* Hard (62.26%)
* Likes:    1580
* Dislikes: 222
* Testcase Example:  '"abc"\n"ababc"'

```md
You are given two strings stamp and target. Initially, there is a string s of length target.length with all s[i] == &#39;?&#39;.
In one turn, you can place stamp over s and replace every letter in the s with the corresponding letter from stamp.

For example, if stamp = 'abc' and target = 'abcba', then s is '?????' initially. In one turn you can:

place stamp at index 0 of s to obtain 'abc??',
place stamp at index 1 of s to obtain '?abc?', or
place stamp at index 2 of s to obtain '??abc'.

Note that stamp must be fully contained in the boundaries of s in order to stamp (i.e., you cannot place stamp at index 3 of s).

We want to convert s to target using at most 10 * target.length turns.
Return an array of the index of the left-most letter being stamped at each turn. If we cannot obtain target from s within 10 * target.length turns, return an empty array.

Example 1:

Input: stamp = 'abc', target = 'ababc'
Output: [0,2]
Explanation: Initially s = '?????'.
- Place stamp at index 0 to get 'abc??'.
- Place stamp at index 2 to get 'ababc'.
[1,0,2] would also be accepted as an answer, as well as some other answers.

Example 2:

Input: stamp = 'abca', target = 'aabcaca'
Output: [3,0,1]
Explanation: Initially s = '???????'.
- Place stamp at index 3 to get '???abca'.
- Place stamp at index 0 to get 'abcabca'.
- Place stamp at index 1 to get 'aabcaca'.


Constraints:

1 <= stamp.length <= target.length <= 1000
stamp and target consist of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 stamp 和 target 两个字符串。初始时有一个长度为 target.length 的全 '?' 字符串 s。每次操作可以将 stamp 盖在 s 的某个位置，将该位置对应的字符替换为 stamp 的字符。求将 s 变为 target 的操作序列（返回每次盖章的起始索引），不可能返回空数组。

## 解题思路

逆向思维 + BFS/贪心。从 target 出发，每次找到一个可以"反盖"（将某些字符变回 '?'）的位置，逐步把 target 变回全 '?'。用 A[i] 记录位置 i 还需要匹配的 stamp 字符集合，当某位置可以反盖时，将其影响传播给相邻的待盖窗口。
