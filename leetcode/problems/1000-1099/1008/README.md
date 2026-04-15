# [1008] Construct Binary Search Tree from Preorder Traversal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/description/)

* algorithms
* Medium (84.18%)
* Likes:    6784
* Dislikes: 93
* Testcase Example:  '[8,5,1,7,10,12]'

```md
Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.
It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.
A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.
A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.

Example 1:


Input: preorder = [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

Example 2:

Input: preorder = [1,3]
Output: [1,null,3]


Constraints:

1 <= preorder.length <= 100
1 <= preorder[i] <= 1000
All the values of preorder are unique.


```

## 题目翻译

给定 BST 的前序遍历数组，还原 BST。

## 解题思路

递归构建。第一个元素为根，后续元素中比根小的连续段为左子树，其余为右子树。递归处理。

时间复杂度 O(n^2)（可通过单调栈优化到 O(n)，但 n<=100 足够）

## Solution

[SourceCode](./solution.js)
