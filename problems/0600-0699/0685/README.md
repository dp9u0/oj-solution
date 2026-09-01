# [685] Redundant Connection II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/redundant-connection-ii/description/)

* algorithms
* Hard (36.06%)
* Likes:    2523
* Dislikes: 331
* Testcase Example:  '[[1,2],[1,3],[2,3]]'

```md
In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.
The given input is a directed graph that started as a rooted tree with n nodes (with distinct values from 1 to n), with one additional directed edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed.
The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [ui, vi] that represents a directed edge connecting nodes ui and vi, where ui is a parent of child vi.
Return an edge that can be removed so that the resulting graph is a rooted tree of n nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

Example 1:


Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

Example 2:


Input: edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]
Output: [4,1]


Constraints:

n == edges.length
3 <= n <= 1000
edges[i].length == 2
1 <= ui, vi <= n
ui != vi


```

## 中文翻译

一棵 n 节点有根树（每个节点最多一个父节点）加了一条多余有向边，找出可以删除的边使剩余图仍为有根树。多解时返回 edges 中最后出现的边。

## 解题思路

**分类讨论 + 并查集**

多加一条边后有三种情况：
1. 某节点有两个父节点，无环 → 删后出现的那条
2. 某节点有两个父节点，有环 → 删环中指向该节点的那条（即先出现的那条）
3. 无双父节点（只有环）→ 删环中最后出现的边

算法：
1. 扫描找双父节点的两条边 edge1、edge2
2. 若存在双父节点：先尝试删 edge2，用并查集检查是否无环；否则删 edge1
3. 若无双父节点：并查集直接找形成环的最后一条边

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
