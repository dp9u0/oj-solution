# [1171] Remove Zero Sum Consecutive Nodes from Linked List

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/)

* algorithms
* Medium (53.14%)
* Likes:    3514
* Dislikes: 226
* Testcase Example:  '[1,2,-3,3,1]'

```md
Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.
After doing so, return the head of the final linked list. You may return any such answer.

(Note that in the examples below, all sequences are serializations of ListNode objects.)
Example 1:

Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.

Example 2:

Input: head = [1,2,3,-3,4]
Output: [1,2,4]

Example 3:

Input: head = [1,2,3,-3,-2]
Output: [1]


Constraints:

The given linked list will contain between 1 and 1000 nodes.
Each node in the linked list has -1000 <= node.val <= 1000.


```

## 中文翻译

给定链表头节点，反复删除和为 0 的连续节点序列，直到没有这样的序列为止。返回最终链表头。

## 解题思路

前缀和 + 哈希表。创建 dummy 节点。第一遍扫描记录每个前缀和最后一次出现的节点。第二遍扫描时，对每个节点查找相同前缀和的最后出现位置，直接跳过中间的节点（因为它们和为 0）。

## Solution

[SourceCode](./solution.js)
