# [623] Add One Row to Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/add-one-row-to-tree/description/)

* algorithms
* Medium (64.12%)
* Likes:    3685
* Dislikes: 271
* Testcase Example:  '[4,2,6,3,1,5]\n1\n2'

```md
Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.
Note that the root node is at depth 1.
The adding rule is:

Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur&#39;s left subtree root and right subtree root.
cur&#39;s original left subtree should be the left subtree of the new left subtree root.
cur&#39;s original right subtree should be the right subtree of the new right subtree root.
If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root&#39;s left subtree.


Example 1:


Input: root = [4,2,6,3,1,5], val = 1, depth = 2
Output: [4,1,1,2,null,null,6,3,1,5]

Example 2:


Input: root = [4,2,null,3,1], val = 1, depth = 3
Output: [4,2,null,1,1,3,null,null,1]


Constraints:

The number of nodes in the tree is in the range [1, 104].
The depth of the tree is in the range [1, 104].
-100 <= Node.val <= 100
-105 <= val <= 105
1 <= depth <= the depth of tree + 1


```

## 中文翻译

给定二叉树根节点、值 val 和深度 depth，在第 depth 层插入一行值为 val 的节点。depth=1 时新节点成为根，原树为左子树。

## 解题思路

DFS 到第 depth-1 层，对每个节点插入新左右子节点，原左右子树分别挂到新节点下面。depth=1 特殊处理。

## Solution

[SourceCode](./solution.js)
