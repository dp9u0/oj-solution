# [1379] Find a Corresponding Node of a Binary Tree in a Clone of That Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/)

* algorithms
* Easy (85.83%)
* Likes:    1811
* Dislikes: 2018
* Testcase Example:  '[7,4,3,null,null,6,19]\n3'

```md
Given two binary trees original and cloned and given a reference to a node target in the original tree.
The cloned tree is a copy of the original tree.
Return a reference to the same node in the cloned tree.
Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

Example 1:


Input: tree = [7,4,3,null,null,6,19], target = 3
Output: 3
Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.

Example 2:


Input: tree = [7], target =  7
Output: 7

Example 3:


Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
Output: 4


Constraints:

The number of nodes in the tree is in the range [1, 104].
The values of the nodes of the tree are unique.
target node is a node from the original tree and is not null.


Follow up: Could you solve the problem if repeated values on the tree are allowed?

```

## 中文翻译

给定原始二叉树 original、其克隆树 cloned，以及 original 中某个节点 target 的引用。在 cloned 树中找到对应位置的节点并返回其引用。

## 解题思路

同时遍历 original 和 cloned 树，当 original 中找到 target 时，返回 cloned 中对应位置的节点。用 DFS 递归实现。

时间复杂度：O(n)，空间复杂度：O(h)，h 为树高

## Solution

[SourceCode](./solution.js)
