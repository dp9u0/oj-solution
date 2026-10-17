# [面试题 04.03] 特定深度节点链表

## Description


```md
https://leetcode.cn/problems/list-of-depth-lcci/description/
* lcci
* Medium (81.08%)
* Likes:    106
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5,null,7,8]'
给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。

示例：
输入：[1,2,3,4,5,null,7,8]
1
/  \
2    3
/ \    \
4   5    7
/
8
输出：[[1],[2,3],[4,5,7],[8]]
Hint 1: 尝试修改图形搜索算法，从根开始追踪深度。
Hint 2: 从层号映射到该层节点的散列表或数组也许有些用处。
Hint 3: 你应该能够提出一个既包括深度优先搜索又包含广度优先搜索的算法。

```

## Description (English)

Given a binary tree, design an algorithm to create a linked list of all nodes at each depth (a tree of depth D yields D linked lists). Return an array of all the linked lists.

Example:
Input: [1,2,3,4,5,null,7,8]
Output: [[1],[2,3],[4,5,7],[8]]

## 思路

BFS 逐层遍历：当前层数组按序接成链表（哑结点 + 尾插），同时收集下层节点作为下一层，O(n)。

## Solution

[SourceCode](./solution.js)
