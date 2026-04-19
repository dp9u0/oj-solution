# [1315] Sum of Nodes with Even-Valued Grandparent

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/description/)

* algorithms
* Medium (85.92%)
* Likes:    2830
* Dislikes: 79
* Testcase Example:  '[6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]'

```md
Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.
A grandparent of a node is the parent of its parent if it exists.

Example 1:


Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.

Example 2:


Input: root = [1]
Output: 0


Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 100


```

## 翻译

给定一棵二叉树的根节点 `root`，返回所有具有偶数值祖父节点的节点值之和。如果没有这样的节点，返回 0。

一个节点的祖父节点是指其父节点的父节点（如果存在）。

## Approach

**DFS 递归遍历。** 在遍历时传递父节点和祖父节点的值。如果祖父节点的值为偶数，则将当前节点的值加入总和。

时间复杂度：O(n)，空间复杂度：O(h)，其中 h 为树的高度。

## Solution

[SourceCode](./solution.js)
