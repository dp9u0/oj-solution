# [1457] Pseudo-Palindromic Paths in a Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/description/)

* algorithms
* Medium (68.37%)
* Likes:    3344
* Dislikes: 131
* Testcase Example:  '[2,3,1,3,1,null,1]'

```md
Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.
Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

Example 1:


Input: root = [2,3,1,3,1,null,1]
Output: 2
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).

Example 2:


Input: root = [2,1,1,1,3,null,null,null,null,null,1]
Output: 1
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], and the path [2,1]. Among these paths only the green path is pseudo-palindromic since [2,1,1] can be rearranged in [1,2,1] (palindrome).

Example 3:

Input: root = [9]
Output: 1


Constraints:

The number of nodes in the tree is in the range [1, 105].
1 <= Node.val <= 9


```

## 翻译

给定二叉树（节点值1-9），从根到叶的路径中，若节点值的某个排列是回文，则称为伪回文路径。求伪回文路径数。

## 解题思路

路径可排列为回文等价于最多一个数字出现奇数次。用位掩码（bit 1-9）跟踪各数字奇偶性，DFS到叶节点时检查mask是否最多1位为1（mask & (mask-1) === 0）。

## Solution

[SourceCode](./solution.js)
