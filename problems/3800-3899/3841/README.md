# [3841] Palindromic Path Queries in a Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/palindromic-path-queries-in-a-tree/description/)

* algorithms
* Hard (35.35%)
* Likes:    54
* Dislikes: 2
* Testcase Example:  '3\n[[0,1],[1,2]]\n"aac"\n["query 0 2","update 1 b","query 0 2"]'

```md
You are given an undirected tree with n nodes labeled 0 to n - 1. This is represented by a 2D array edges of length n - 1, where edges[i] = [ui, vi] indicates an undirected edge between nodes ui and vi.
You are also given a string s of length n consisting of lowercase English letters, where s[i] represents the character assigned to node i.
You are also given a string array queries, where each queries[i] is either:

'update ui c': Change the character at node ui to c. Formally, update s[ui] = c.
'query ui vi': Determine whether the string formed by the characters on the unique path from ui to vi (inclusive) can be rearranged into a palindrome.

Return a boolean array answer, where answer[j] is true if the jth query of type 'query ui vi'​​​​​​​ can be rearranged into a palindrome, and false otherwise.

Example 1:

Input: n = 3, edges = [[0,1],[1,2]], s = 'aac', queries = ['query 0 2','update 1 b','query 0 2']
Output: [true,false]
Explanation:

'query 0 2': Path 0 &rarr; 1 &rarr; 2 gives 'aac', which can be rearranged to form 'aca', a palindrome. Thus, answer[0] = true.
'update 1 b': Update node 1 to &#39;b&#39;, now s = 'abc'.
'query 0 2': Path characters are 'abc', which cannot be rearranged to form a palindrome. Thus, answer[1] = false.

Thus, answer = [true, false].

Example 2:

Input: n = 4, edges = [[0,1],[0,2],[0,3]], s = 'abca', queries = ['query 1 2','update 0 b','query 2 3','update 3 a','query 1 3']
Output: [false,false,true]
Explanation:

'query 1 2': Path 1 &rarr; 0 &rarr; 2 gives 'bac', which cannot be rearranged to form a palindrome. Thus, answer[0] = false.
'update 0 b': Update node 0 to &#39;b&#39;, now s = 'bbca'.
'query 2 3': Path 2 &rarr; 0 &rarr; 3 gives 'cba', which cannot be rearranged to form a palindrome. Thus, answer[1] = false.
'update 3 a': Update node 3 to &#39;a&#39;, s = 'bbca'.
'query 1 3': Path 1 &rarr; 0 &rarr; 3 gives 'bba', which can be rearranged to form 'bab', a palindrome. Thus, answer[2] = true.

Thus, answer = [false, false, true].


Constraints:

1 <= n == s.length <= 5 * 104
edges.length == n - 1
edges[i] = [ui, vi]
0 <= ui, vi <= n - 1
s consists of lowercase English letters.
The input is generated such that edges represents a valid tree.
1 <= queries.length <= 5 * 104​​​​​​​

queries[i] = 'update ui c' or
queries[i] = 'query ui vi'
0 <= ui, vi <= n - 1
c is a lowercase English letter.




```

## 翻译

给定一棵树，每个节点有一个小写字母。支持两种操作：1) 将某节点的字母改为 c；2) 查询从 u 到 v 路径上的字母能否重排为回文串。回文要求最多一个字符出现奇数次。

## 解题思路

用 bitmask 表示字符奇偶性（26位）。定义 f(v) 为根到 v 路径的字符 XOR，则路径 u→v 的 mask = f(u)⊕f(v)⊕f(lca)⊕f(parent[lca])。用 Euler 序 + BIT 做子树 XOR 更新，二分跳表求 LCA。判断 popcount ≤ 1 即可。O((n+q) log n)。

## Solution

[SourceCode](./solution.js)
