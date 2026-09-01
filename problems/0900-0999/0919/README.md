# [919] Complete Binary Tree Inserter

## Description

[LeetCode Problem Description](https://leetcode.com/problems/complete-binary-tree-inserter/description/)

* algorithms
* Medium (65.03%)
* Likes:    1155
* Dislikes: 120
* Testcase Example:  '["CBTInserter","insert","insert","get_root"]\n[[[1,2]],[3],[4],[]]'

```md
A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
Design an algorithm to insert a new node to a complete binary tree keeping it complete after the insertion.
Implement the CBTInserter class:

CBTInserter(TreeNode root) Initializes the data structure with the root of the complete binary tree.
int insert(int v) Inserts a TreeNode into the tree with value Node.val == val so that the tree remains complete, and returns the value of the parent of the inserted TreeNode.
TreeNode get_root() Returns the root node of the tree.


Example 1:


Input
['CBTInserter', 'insert', 'insert', 'get_root']
[[[1, 2]], [3], [4], []]
Output
[null, 1, 2, [1, 2, 3, 4]]
Explanation
CBTInserter cBTInserter = new CBTInserter([1, 2]);
cBTInserter.insert(3);  // return 1
cBTInserter.insert(4);  // return 2
cBTInserter.get_root(); // return [1, 2, 3, 4]


Constraints:

The number of nodes in the tree will be in the range [1, 1000].
0 <= Node.val <= 5000
root is a complete binary tree.
0 <= val <= 5000
At most 104 calls will be made to insert and get_root.


```

## 题目翻译

设计完全二叉树插入器。初始化给定完全二叉树根节点，insert 插入新节点保持完全性并返回父节点值，get_root 返回根节点。

## 解题思路

BFS 遍历树，用队列收集所有子节点不完整的节点。insert 时从队列头部取节点，优先补左子节点，再补右子节点。补满后出队，新节点入队。

## Solution

[SourceCode](./solution.js)
