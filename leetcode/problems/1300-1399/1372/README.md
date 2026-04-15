# [1372] Longest ZigZag Path in a Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/)

* algorithms
* Medium (67.05%)
* Likes:    3754
* Dislikes: 86
* Testcase Example:  '[1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]'

```md
You are given the root of a binary tree.
A ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
Change the direction from right to left or from left to right.
Repeat the second and third steps until you can&#39;t move in the tree.

Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).
Return the longest ZigZag path contained in that tree.

Example 1:


Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

Example 2:


Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).

Example 3:

Input: root = [1]
Output: 0


Constraints:

The number of nodes in the tree is in the range [1, 5 * 104].
1 <= Node.val <= 100


```

## 中文翻译

给定二叉树根节点，ZigZag 路径是交替左右移动的路径。求最长 ZigZag 路径长度（边数）。

## 解题思路

DFS，对每个节点返回两个值：从该节点出发向左走的最长 ZigZag 长度，和向右走的最长 ZigZag 长度。
- leftLen = 1 + 右子节点的 leftLen（先左走一步，然后从右子节点继续）
- rightLen = 1 + 左子节点的 rightLen
全局取最大值。

## Solution

[SourceCode](./solution.js)
