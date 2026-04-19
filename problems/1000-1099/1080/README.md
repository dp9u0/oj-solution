# [1080] Insufficient Nodes in Root to Leaf Paths

## Description

[LeetCode Problem Description](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/description/)

* algorithms
* Medium (55.00%)
* Likes:    755
* Dislikes: 743
* Testcase Example:  '[1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14]\n1'

```md
Given the root of a binary tree and an integer limit, delete all insufficient nodes in the tree simultaneously, and return the root of the resulting binary tree.
A node is insufficient if every root to leaf path intersecting this node has a sum strictly less than limit.
A leaf is a node with no children.

Example 1:


Input: root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1
Output: [1,2,3,4,null,null,7,8,9,null,14]

Example 2:


Input: root = [5,4,8,11,null,17,4,7,1,null,null,5,3], limit = 22
Output: [5,4,8,11,null,17,4,7,null,null,null,5]

Example 3:


Input: root = [1,2,-3,-5,null,4,null], limit = -1
Output: [1,null,-3,4]


Constraints:

The number of nodes in the tree is in the range [1, 5000].
-105 <= Node.val <= 105
-109 <= limit <= 109


```

## 中文翻译

给定二叉树根节点和整数 limit，删除所有"不足"节点（即经过该节点的所有根到叶路径之和都严格小于 limit），返回处理后的树根。

## 解题思路

DFS 后序遍历：对每个节点，递归处理左右子树，返回从该节点到叶子的最大路径和。如果左/右子树返回的路径和加上当前节点值 < limit，则删除该子树。若最终根节点也 insufficient 则返回 null。

时间复杂度：O(n)，空间复杂度：O(h)

## Solution

[SourceCode](./solution.js)
