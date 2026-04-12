# [1721] Swapping Nodes in a Linked List

## Description

[LeetCode Problem Description](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/)

* algorithms
* Medium (69.34%)
* Likes:    5732
* Dislikes: 212
* Testcase Example:  '[1,2,3,4,5]\n2'

```md
You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]


Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定链表头节点 head 和整数 k，交换链表中第 k 个节点和倒数第 k 个节点的值（1-indexed），返回链表头。

## 解题思路

**快慢指针**

1. 先找到第 k 个节点（从头走 k 步）
2. 用快慢指针找倒数第 k 个：快指针先走 k 步，然后快慢指针同时走，快指针到末尾时慢指针就在倒数第 k 个位置
3. 交换两个节点的值

时间复杂度 O(n)，空间复杂度 O(1)。
