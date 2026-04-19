# [894] All Possible Full Binary Trees

## Description

[LeetCode Problem Description](https://leetcode.com/problems/all-possible-full-binary-trees/description/)

* algorithms
* Medium (82.75%)
* Likes:    5253
* Dislikes: 369
* Testcase Example:  '7'

```md
Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.
Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.
A full binary tree is a binary tree where each node has exactly 0 or 2 children.

Example 1:


Input: n = 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]

Example 2:

Input: n = 3
Output: [[0,0,0]]


Constraints:

1 <= n <= 20


```

## 翻译

给定整数 n，返回所有可能的满二叉树（每个节点恰好有 0 或 2 个子节点）的列表。每个节点值为 0。n 为偶数时不存在满二叉树。

## Approach

递归分治 + 记忆化。对于 n 个节点的满二叉树：
- 若 n 为偶数，返回空
- 若 n == 1，返回单个节点
- 否则，枚举左子树节点数 i（1, 3, 5, ..., n-2），右子树节点数 n-1-i
- 递归构造所有左右子树组合，挂到根节点下

时间复杂度：卡特兰数级别，空间复杂度同理。

## Solution

[SourceCode](./solution.js)
