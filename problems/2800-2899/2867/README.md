# [2867] Count Valid Paths in a Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-valid-paths-in-a-tree/description/)

* algorithms
* Hard (36.04%)
* Likes:    286
* Dislikes: 9
* Testcase Example:  '5\n[[1,2],[1,3],[2,4],[2,5]]'

```md
There is an undirected tree with n nodes labeled from 1 to n. You are given the integer n and a 2D integer array edges of length n - 1, where edges[i] = [ui, vi] indicates that there is an edge between nodes ui and vi in the tree.
Return the number of valid paths in the tree.
A path (a, b) is valid if there exists exactly one prime number among the node labels in the path from a to b.
Note that:

The path (a, b) is a sequence of distinct nodes starting with node a and ending with node b such that every two adjacent nodes in the sequence share an edge in the tree.
Path (a, b) and path (b, a) are considered the same and counted only once.


Example 1:


Input: n = 5, edges = [[1,2],[1,3],[2,4],[2,5]]
Output: 4
Explanation: The pairs with exactly one prime number on the path between them are:
- (1, 2) since the path from 1 to 2 contains prime number 2.
- (1, 3) since the path from 1 to 3 contains prime number 3.
- (1, 4) since the path from 1 to 4 contains prime number 2.
- (2, 4) since the path from 2 to 4 contains prime number 2.
It can be shown that there are only 4 valid paths.

Example 2:


Input: n = 6, edges = [[1,2],[1,3],[2,4],[3,5],[3,6]]
Output: 6
Explanation: The pairs with exactly one prime number on the path between them are:
- (1, 2) since the path from 1 to 2 contains prime number 2.
- (1, 3) since the path from 1 to 3 contains prime number 3.
- (1, 4) since the path from 1 to 4 contains prime number 2.
- (1, 6) since the path from 1 to 6 contains prime number 3.
- (2, 4) since the path from 2 to 4 contains prime number 2.
- (3, 6) since the path from 3 to 6 contains prime number 3.
It can be shown that there are only 6 valid paths.


Constraints:

1 <= n <= 105
edges.length == n - 1
edges[i].length == 2
1 <= ui, vi <= n
The input is generated such that edges represent a valid tree.


```

## 题目翻译

给定 n 节点的无向树（节点编号 1 到 n）。统计路径 (a,b) 的数量，使得 a 到 b 路径上的节点标签中恰好包含一个质数。路径 (a,b) 和 (b,a) 视为相同。

## 解题思路

**质数节点拆分 + 连通分量**

1. 用筛法标记所有质数节点
2. 删除所有质数节点后，非质数节点形成若干连通分量
3. 记录每个分量的大小和相邻的质数节点
4. 对每个质数 p，其相邻的非质数分量大小为 d1, d2, ..., dk：
   - 路径 (p, x) 的数量 = S = Σd_i
   - 跨两个分量的路径数 = Σ_{i<j} d_i * d_j = (S² - Σd_i²) / 2
   - p 的贡献 = S + (S² - Σd_i²) / 2

## Solution

[SourceCode](./solution.js)
