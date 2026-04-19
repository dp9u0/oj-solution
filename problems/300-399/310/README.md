# [310] Minimum Height Trees

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-height-trees/description/)

* algorithms
* Medium (41.91%)
* Likes:    8501
* Dislikes: 398
* Testcase Example:  '4\n[[1,0],[1,2],[1,3]]'

```md
A tree is an undirected graph in which any two vertices are connected byexactlyone path. In other words, any connected graph without simple cycles is a tree.
Given a tree of n nodeslabelled from 0 to n - 1, and an array ofn - 1edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodesai andbi in the tree,you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h)) are called minimum height trees (MHTs).
Return a list of all MHTs&#39; root labels.You can return the answer in any order.
The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

Example 1:


Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

Example 2:


Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]


Constraints:

1 <= n <= 2 * 104
edges.length == n - 1
0 <= ai, bi < n
ai != bi
All the pairs (ai, bi) are distinct.
The given input is guaranteed to be a tree and there will be no repeated edges.


```

## 中文题目描述

树是一个无向图，其中任何两个顶点都通过唯一的一条路径连接。换句话说，任何没有简单环路的连通图都是一棵树。

给你一棵包含 n 个节点的树，节点编号从 0 到 n-1。给你一个数组 edges ，其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。

你可以选择树中任何一个节点作为根节点。当选择节点 x 作为根节点时，得到的树的高度为 h。在所有可能的根节点中，具有最小高度的树（即 min(h)）被称为最小高度树（MHT）。

请你返回所有最小高度树的根节点标签列表。你可以按任意顺序返回答案。

树的高度是指根节点到叶子节点的最长向下路径上的边数。

示例 1：
输入：n = 4, edges = [[1,0],[1,2],[1,3]]
输出：[1]
解释：如图所示，当根是标签为 1 的节点时，树的高度是 1，这是唯一的最小高度树。

示例 2：
输入：n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
输出：[3,4]

提示：
1. 1 <= n <= 2 * 10^4
2. edges.length == n - 1
3. 0 <= ai, bi < n
4. ai != bi
5. 所有 (ai, bi) 互不相同
6. 给定的输入保证是一棵树，不会有重复的边

## Solution

[SourceCode](./solution.js)


## 解题思路

这道题的关键思路是：
最小高度树的根节点一定在树的"中心"位置
可以通过不断删除叶子节点的方式，最后剩下的1个或2个节点就是答案
这个过程类似于"剥洋葱"，从外向内逐层删除