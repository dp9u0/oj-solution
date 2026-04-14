# [1367] Linked List in Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/linked-list-in-binary-tree/description/)

* algorithms
* Medium (51.95%)
* Likes:    3027
* Dislikes: 90
* Testcase Example:  '[4,2,8]\n[1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]'

```md
Given a binary tree root and alinked list withheadas the first node.
Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary treeotherwise return False.
In this context downward path means a path that starts at some node and goes downwards.

Example 1:


Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: true
Explanation: Nodes in blue form a subpath in the binary Tree.

Example 2:


Input: head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: true

Example 3:

Input: head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: false
Explanation: There is no path in the binary tree that contains all the elements of the linked list from head.


Constraints:

The number of nodes in the tree will be in the range [1, 2500].
The number of nodes in the list will be in the range [1, 100].
1 <= Node.val<= 100for each node in the linked list and binary tree.


```

## 题目翻译

给定链表 head 和二叉树 root，判断链表是否对应树中某条从上到下的路径（值依次匹配）。

## 解题思路

双重递归：外层遍历树的每个节点作为起点，内层从该节点开始尝试匹配链表。匹配函数 dfs(node, listNode)：若 listNode 为空则匹配成功；若 node 为空或不等则失败；否则递归左子树或右子树。

## Solution

[SourceCode](./solution.js)
