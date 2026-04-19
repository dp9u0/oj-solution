# [3615] Longest Palindromic Path in Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-palindromic-path-in-graph/description/)

* algorithms
* Hard (22.10%)
* Likes:    58
* Dislikes: 5
* Testcase Example:  '3\n[[0,1],[1,2]]\n"aba"'

```md
You are given an integer n and an undirected graph with n nodes labeled from 0 to n - 1 and a 2D array edges, where edges[i] = [ui, vi] indicates an edge between nodes ui and vi.
You are also given a string label of length n, where label[i] is the character associated with node i.
You may start at any node and move to any adjacent node, visiting each node at most once.
Return the maximum possible length of a palindrome that can be formed by visiting a set of unique nodes along a valid path.

Example 1:

Input: n = 3, edges = [[0,1],[1,2]], label = 'aba'
Output: 3
Explanation:


The longest palindromic path is from node 0 to node 2 via node 1, following the path 0 &rarr; 1 &rarr; 2 forming string 'aba'.
This is a valid palindrome of length 3.


Example 2:

Input: n = 3, edges = [[0,1],[0,2]], label = 'abc'
Output: 1
Explanation:


No path with more than one node forms a palindrome.
The best option is any single node, giving a palindrome of length 1.


Example 3:

Input: n = 4, edges = [[0,2],[0,3],[3,1]], label = 'bbac'
Output: 3
Explanation:


The longest palindromic path is from node 0 to node 1, following the path 0 &rarr; 3 &rarr; 1, forming string 'bcb'.
This is a valid palindrome of length 3.



Constraints:

1 <= n <= 14
n - 1 <= edges.length <= n * (n - 1) / 2
edges[i] == [ui, vi]
0 <= ui, vi <= n - 1
ui != vi
label.length == n
label consists of lowercase English letters.
There are no duplicate edges.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个 n 个节点的无向图（节点编号 0 到 n-1），每条边由 edges 数组给出。每个节点关联一个字符 label[i]。你可以从任意节点出发，沿边移动到相邻节点，每个节点最多访问一次。求路径上字符能组成的最长回文串的长度。

**约束条件：** 1 <= n <= 14

## 解题思路

**状态压缩 BFS（从中心向两端扩展）**

n <= 14，可以用 bitmask 表示已访问节点集合（2^14 = 16384）。

核心思路：回文串从中心向两端对称扩展。维护状态 `(left, right, mask)`，表示存在一条从 left 到 right 的简单路径，经过了 mask 中的所有节点，且字符构成回文。

1. **奇数长度**：单节点作为中心，初始状态 `(c, c, {c})`，长度 1
2. **偶数长度**：相邻且字符相同的节点对作为中心，初始状态 `(u, v, {u,v})`，长度 2
3. **扩展**：从 `(left, right, mask)` 出发，找 left 的未访问邻居 u 和 right 的未访问邻居 v，要求 `label[u] === label[v]` 且 `u ≠ v`，转移到 `(u, v, mask∪{u,v})`，长度 +2

用 BFS 遍历所有可达状态，记录最大长度。状态数上限 O(n² × 2^n) ≈ 3.2M，可接受。
