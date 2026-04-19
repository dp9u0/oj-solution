# [1111] Maximum Nesting Depth of Two Valid Parentheses Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/description/)

* algorithms
* Medium (72.08%)
* Likes:    442
* Dislikes: 1806
* Testcase Example:  '"(()())"'

```md
A string is a valid parentheses string(denoted VPS) if and only if it consists of '(' and ')' characters only, and:

It is the empty string, or
It can be written asAB(Aconcatenated withB), whereAandBare VPS&#39;s, or
It can be written as(A), whereAis a VPS.

We cansimilarly define the nesting depth depth(S) of any VPS S as follows:

depth('') = 0
depth(A + B) = max(depth(A), depth(B)), where A and B are VPS&#39;s
depth('(' + A + ')') = 1 + depth(A), where A is a VPS.

For example, '','()()', and'()(()())'are VPS&#39;s (with nesting depths 0, 1, and 2), and ')(' and '(()' are not VPS&#39;s.

Given a VPS seq, split it into two disjoint subsequences A and B, such thatA and B are VPS&#39;s (andA.length + B.length = seq.length).
Now choose any such A and B such thatmax(depth(A), depth(B)) is the minimum possible value.
Return an answer array (of length seq.length) that encodes such achoice of A and B: answer[i] = 0 if seq[i] is part of A, else answer[i] = 1. Note that even though multiple answers may exist, you may return any of them.

Example 1:

Input: seq = '(()())'
Output: [0,1,1,1,1,0]

Example 2:

Input: seq = '()(())()'
Output: [0,0,0,1,1,0,1,1]


Constraints:

1 <= seq.size <= 10000


```

## 题目翻译

给定合法括号字符串 seq，将其分成两个不相交子序列 A 和 B（都是合法括号字符串），使 max(depth(A), depth(B)) 最小。返回分配数组。

## 解题思路

利用嵌套深度的奇偶性分配。遍历时维护当前深度 depth：
- '(' 入栈：depth++，分配 depth % 2
- ')' 出栈：分配 depth % 2，depth--

匹配的括号在同一深度，因此同奇偶、同组。同一组的相邻层交错分配，最大深度约为原深度的一半。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
