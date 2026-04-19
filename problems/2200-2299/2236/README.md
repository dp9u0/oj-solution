# [2236] Root Equals Sum of Children

## Description

[LeetCode Problem Description](https://leetcode.com/problems/root-equals-sum-of-children/description/)

* algorithms
* Easy (84.91%)
* Likes:    1587
* Dislikes: 1648
* Testcase Example:  '[10,4,6]'

```md
You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

Example 1:


Input: root = [10,4,6]
Output: true
Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
10 is equal to 4 + 6, so we return true.

Example 2:


Input: root = [5,3,1]
Output: false
Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
5 is not equal to 3 + 1, so we return false.


Constraints:

The tree consists only of the root, its left child, and its right child.
-100 <= Node.val <= 100


```

## 翻译

给定恰好有 3 个节点的二叉树（根、左子、右子），判断根节点值是否等于左右子节点值之和。

## Approach

直接判断 root.val === root.left.val + root.right.val。

时间复杂度 O(1)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
