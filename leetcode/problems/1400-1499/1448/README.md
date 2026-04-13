# [1448] Count Good Nodes in Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/)

* algorithms
* Medium (73.81%)
* Likes:    6357
* Dislikes: 214
* Testcase Example:  '[3,1,4,3,null,1,5]'

```md
Given a binary tree root, a node X in the tree is namedgood if in the path from root to X there are no nodes with a value greater than X.
Return the number of good nodes in the binary tree.

Example 1:


Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.
Example 2:


Input: root = [3,3,null,4,2]
Output: 3
Explanation: Node 2 -> (3, 3, 2) is not good, because '3' is higher than it.
Example 3:

Input: root = [1]
Output: 1
Explanation: Root is considered as good.

Constraints:

The number of nodes in the binary tree is in the range[1, 10^5].
Each node&#39;s value is between [-10^4, 10^4].


```

## 翻译

给定二叉树根节点，如果从根到节点 X 的路径上没有值大于 X 的节点，则 X 是"好节点"。返回好节点的数量。

## Approach

DFS 遍历，维护从根到当前节点的路径最大值。如果当前节点值 >= 路径最大值，则为好节点，计数 +1。递归左右子树时更新最大值。

## Solution

[SourceCode](./solution.js)
