# [889] Construct Binary Tree from Preorder and Postorder Traversal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/)

* algorithms
* Medium (78.05%)
* Likes:    3396
* Dislikes: 160
* Testcase Example:  '[1,2,4,5,3,6,7]\n[4,5,2,6,7,3,1]'

```md
Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a binary tree of distinct values and postorder is the postorder traversal of the same tree, reconstruct and return the binary tree.
If there exist multiple answers, you can return any of them.

Example 1:


Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
Output: [1,2,3,4,5,6,7]

Example 2:

Input: preorder = [1], postorder = [1]
Output: [1]


Constraints:

1 <= preorder.length <= 30
1 <= preorder[i] <= preorder.length
All the values of preorder are unique.
postorder.length == preorder.length
1 <= postorder[i] <= postorder.length
All the values of postorder are unique.
It is guaranteed that preorder and postorder are the preorder traversal and postorder traversal of the same binary tree.


```

## 翻译

给定前序遍历和后序遍历数组（所有值唯一），重建二叉树。可能有多个答案，返回任意一个。

## Approach

递归分治。前序第一个是根，前序第二个是左子树根。在后序中找到左子树根的位置，确定左子树大小，递归构建左右子树。

1. 根 = preorder[preStart]
2. 左子树根 = preorder[preStart + 1]（如果存在）
3. 在 postorder 中找到左子树根的位置 leftRootIdx，左子树大小 = leftRootIdx - postStart + 1
4. 递归构建左右子树

时间复杂度 O(n^2)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
