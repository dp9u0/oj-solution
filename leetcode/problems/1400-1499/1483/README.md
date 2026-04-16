# [1483] Kth Ancestor of a Tree Node

## Description

[LeetCode Problem Description](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/description/)

* algorithms
* Hard (37.40%)
* Likes:    2083
* Dislikes: 125
* Testcase Example:  '["TreeAncestor","getKthAncestor","getKthAncestor","getKthAncestor"]\n' +

```md
'[[7,[-1,0,0,1,1,2,2]],[3,1],[5,2],[6,3]]'
You are given a tree with n nodes numbered from 0 to n - 1 in the form of a parent array parent where parent[i] is the parent of ith node. The root of the tree is node 0. Find the kth ancestor of a given node.
The kth ancestor of a tree node is the kth node in the path from that node to the root node.
Implement the TreeAncestor class:

TreeAncestor(int n, int[] parent) Initializes the object with the number of nodes in the tree and the parent array.
int getKthAncestor(int node, int k) return the kth ancestor of the given node node. If there is no such ancestor, return -1.


Example 1:


Input
['TreeAncestor', 'getKthAncestor', 'getKthAncestor', 'getKthAncestor']
[[7, [-1, 0, 0, 1, 1, 2, 2]], [3, 1], [5, 2], [6, 3]]
Output
[null, 1, 0, -1]
Explanation
TreeAncestor treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
treeAncestor.getKthAncestor(3, 1); // returns 1 which is the parent of 3
treeAncestor.getKthAncestor(5, 2); // returns 0 which is the grandparent of 5
treeAncestor.getKthAncestor(6, 3); // returns -1 because there is no such ancestor

Constraints:

1 <= k <= n <= 5 * 104
parent.length == n
parent[0] == -1
0 <= parent[i] < n for all 0 < i < n
0 <= node < n
There will be at most 5 * 104 queries.


```

## 翻译

给定一棵 n 个节点的树，用 parent 数组表示（parent[i] 是节点 i 的父节点，根节点为 0）。实现一个类，支持查询某个节点的第 k 个祖先。

## 解题思路

**Binary Lifting（倍增法）**：

预处理 `up[node][j]` 表示节点 node 的第 2^j 个祖先。
- `up[node][0] = parent[node]`
- `up[node][j] = up[up[node][j-1]][j-1]`

查询时将 k 分解为二进制，逐位跳跃。例如 k = 5 = 101₂，先跳 2^0 = 1 步，再跳 2^2 = 4 步。

时间复杂度：预处理 O(n log n)，查询 O(log k)。

## Solution

[SourceCode](./solution.js)
