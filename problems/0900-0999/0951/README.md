# [951] Flip Equivalent Binary Trees

## Description

[LeetCode Problem Description](https://leetcode.com/problems/flip-equivalent-binary-trees/description/)

* algorithms
* Medium (69.53%)
* Likes:    2889
* Dislikes: 124
* Testcase Example:  '[1,2,3,4,5,6,null,null,null,7,8]\n[1,3,2,null,6,4,5,null,null,null,null,8,7]'

```md
For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.
A binary tree Xis flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.
Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.

Example 1:


Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
Output: true
Explanation: We flipped at nodes with values 1, 3, and 5.

Example 2:

Input: root1 = [], root2 = []
Output: true

Example 3:

Input: root1 = [], root2 = [1]
Output: false


Constraints:

The number of nodes in each tree is in the range [0, 100].
Each tree will have unique node values in the range [0, 99].


```

## 题目翻译

给定两棵二叉树的根节点，判断它们是否"翻转等价"。翻转操作是指选择任意节点交换其左右子树。两棵树翻转等价当且仅当通过若干次翻转操作可使它们完全相同。

## 解题思路

递归判断：两棵树翻转等价当且仅当根节点值相同，且（不翻转时左右子树分别等价）或（翻转时左对右、右对左等价）。递归终止条件：都为 null 返回 true，一个 null 一个非 null 返回 false。

## Solution

[SourceCode](./solution.js)
