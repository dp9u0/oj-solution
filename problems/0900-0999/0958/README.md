# [958] Check Completeness of a Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-completeness-of-a-binary-tree/description/)

* algorithms
* Medium (59.08%)
* Likes:    4545
* Dislikes: 62
* Testcase Example:  '[1,2,3,4,5,6]'

```md
Given the root of a binary tree, determine if it is a complete binary tree.
In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example 1:


Input: root = [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.

Example 2:


Input: root = [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn&#39;t as far left as possible.


Constraints:

The number of nodes in the tree is in the range [1, 100].
1 <= Node.val <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定二叉树的根节点，判断它是否是一棵完全二叉树。完全二叉树中，除最后一层外每层都被完全填满，且最后一层的所有节点都尽可能靠左。

## Approach

BFS 层序遍历。使用一个标志位 `seenNull`，一旦遇到 null 节点就设为 true。后续如果再遇到非 null 节点，说明不是完全二叉树，返回 false。

将每个节点的左右子节点（包括 null）都加入队列，利用 BFS 的顺序性检测是否有"空洞"。

时间复杂度 O(n)，空间 O(n)。
