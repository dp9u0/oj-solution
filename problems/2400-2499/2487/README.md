# [2487] Remove Nodes From Linked List

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-nodes-from-linked-list/description/)

* algorithms
* Medium (74.88%)
* Likes:    2419
* Dislikes: 88
* Testcase Example:  '[5,2,13,3,8]'

```md
You are given the head of a linked list.
Remove every node which has a node with a greater value anywhere to the right side of it.
Return the head of the modified linked list.

Example 1:


Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.

Example 2:

Input: head = [1,1,1,1]
Output: [1,1,1,1]
Explanation: Every node has value 1, so no nodes are removed.


Constraints:

The number of the nodes in the given list is in the range [1, 105].
1 <= Node.val <= 105


```

## 翻译

给定链表头节点，删除每个右侧存在更大值的节点。返回修改后的链表头。

## Approach

反转链表后变成"删除左侧有更大值的节点"，即维护前缀最大值，只保留 >= 当前最大值的节点。处理完再反转回来。或者用递归：从后往前看，后一个节点保留则当前节点只需比较 next 的值。

## Solution

[SourceCode](./solution.js)
