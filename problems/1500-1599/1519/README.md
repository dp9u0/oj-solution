# [1519] Number of Nodes in the Sub-Tree With the Same Label

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/description/)

* algorithms
* Medium (55.39%)
* Likes:    2380
* Dislikes: 813
* Testcase Example:  '7\n[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]]\n"abaedcd"'

```md
You are given a tree (i.e. a connected, undirected graph that has no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges. The root of the tree is the node 0, and each node of the tree has a label which is a lower-case character given in the string labels (i.e. The node with the number i has the label labels[i]).
The edges array is given on the form edges[i] = [ai, bi], which means there is an edge between nodes ai and bi in the tree.
Return an array of size n where ans[i] is the number of nodes in the subtree of the ith node which have the same label as node i.
A subtree of a tree T is the tree consisting of a node in T and all of its descendant nodes.

Example 1:


Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = 'abaedcd'
Output: [2,1,1,1,1,1,1]
Explanation: Node 0 has label &#39;a&#39; and its sub-tree has node 2 with label &#39;a&#39; as well, thus the answer is 2. Notice that any node is part of its sub-tree.
Node 1 has a label &#39;b&#39;. The sub-tree of node 1 contains nodes 1,4 and 5, as nodes 4 and 5 have different labels than node 1, the answer is just 1 (the node itself).

Example 2:


Input: n = 4, edges = [[0,1],[1,2],[0,3]], labels = 'bbbb'
Output: [4,2,1,1]
Explanation: The sub-tree of node 2 contains only node 2, so the answer is 1.
The sub-tree of node 3 contains only node 3, so the answer is 1.
The sub-tree of node 1 contains nodes 1 and 2, both have label &#39;b&#39;, thus the answer is 2.
The sub-tree of node 0 contains nodes 0, 1, 2 and 3, all with label &#39;b&#39;, thus the answer is 4.

Example 3:


Input: n = 5, edges = [[0,1],[0,2],[1,3],[0,4]], labels = 'aabab'
Output: [3,2,1,1,1]


Constraints:

1 <= n <= 105
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
ai != bi
labels.length == n
labels is consisting of only of lowercase English letters.


```

## 中文翻译

给定一棵以节点 0 为根的树，n 个节点，每个节点有一个小写字母标签。
返回数组 ans，ans[i] 表示节点 i 的子树中与节点 i 标签相同的节点数。

## 解题思路

DFS 后序遍历，每个节点返回一个 26 长度的频率数组，统计子树中各字母出现次数。
合并子节点的频率数组后，ans[node] = freq[labels[node]]。

## Solution

[SourceCode](./solution.js)
