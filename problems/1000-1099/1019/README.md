# [1019] Next Greater Node In Linked List

## Description

[LeetCode Problem Description](https://leetcode.com/problems/next-greater-node-in-linked-list/description/)

* algorithms
* Medium (64.11%)
* Likes:    3539
* Dislikes: 129
* Testcase Example:  '[2,1,5]'

```md
You are given the head of a linked list with n nodes.
For each node in the list, find the value of the next greater node. That is, for each node, find the value of the first node that is next to it and has a strictly larger value than it.
Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.

Example 1:


Input: head = [2,1,5]
Output: [5,5,0]

Example 2:


Input: head = [2,7,4,3,5]
Output: [7,0,5,5,0]


Constraints:

The number of nodes in the list is n.
1 <= n <= 104
1 <= Node.val <= 109


```

## 中文翻译

给定一个链表头节点，对链表中每个节点，找到其后面第一个值严格大于它的节点。返回一个整数数组 answer，answer[i] 是第 i 个节点（1-indexed）的下一个更大节点的值，若不存在则为 0。

## 解题思路

**单调栈**

将链表转为数组，然后从右往左遍历，维护一个单调递减栈。对于每个元素，弹出栈中所有小于等于它的元素，栈顶即为下一个更大元素。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
