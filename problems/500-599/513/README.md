# [513] Find Bottom Left Tree Value

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-bottom-left-tree-value/description/)

* algorithms
* Medium (72.26%)
* Likes:    4013
* Dislikes: 301
* Testcase Example:  '[2,1,3]'

```md
Given the root of a binary tree, return the leftmost value in the last row of the tree.

Example 1:


Input: root = [2,1,3]
Output: 1

Example 2:


Input: root = [1,2,3,4,null,5,6,null,null,7]
Output: 7


Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1


```

## 题目翻译

给定二叉树根节点，返回树最后一行最左边的值。

## 解题思路

BFS 层序遍历，从右往左遍历（先右子节点再左子节点），最后访问的节点就是最后一行最左边的值。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
