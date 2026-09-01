# [814] Binary Tree Pruning

## Description

[LeetCode Problem Description](https://leetcode.com/problems/binary-tree-pruning/description/)

* algorithms
* Medium (72.49%)
* Likes:    4670
* Dislikes: 122
* Testcase Example:  '[1,null,0,0,1]'

```md
Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed.
A subtree of a node node is node plus every node that is a descendant of node.

Example 1:


Input: root = [1,null,0,0,1]
Output: [1,null,0,null,1]
Explanation:
Only the red nodes satisfy the property 'every subtree not containing a 1'.
The diagram on the right represents the answer.

Example 2:


Input: root = [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]

Example 3:


Input: root = [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]


Constraints:

The number of nodes in the tree is in the range [1, 200].
Node.val is either 0 or 1.


```

## 翻译

给定二叉树的根节点，返回修剪后的树：移除所有不包含 1 的子树。

一个节点的子树包括该节点及其所有后代节点。

## Approach

**DFS 后序遍历。** 递归修剪左右子树。如果当前节点值为 0 且左右子树都为 null（已被修剪），则当前节点也应被修剪（返回 null）。

时间复杂度：O(n)，空间复杂度：O(h)

## Solution

[SourceCode](./solution.js)
