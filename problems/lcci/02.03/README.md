# [面试题 02.03] 删除中间节点

## Description


```md
https://leetcode.cn/problems/delete-middle-node-lcci/description/
* lcci
* Easy (86.02%)
* Likes:    218
* Dislikes: -
* Testcase Example:  '[4,5,1,9]\n5'
若链表中的某个节点，既不是链表头节点，也不是链表尾节点，则称其为该链表的「中间节点」。
假定已知链表的某一个中间节点，请实现一种算法，将该节点从链表中删除。
例如，传入节点 c（位于单向链表 a->b->c->d->e->f 中），将其删除后，剩余链表为 a->b->d->e->f

示例：
输入：节点 5 （位于单向链表 4->5->1->9 中）
输出：不返回任何数据，从链表中删除传入的节点 5，使链表变为 4->1->9
Hint 1: 列出清单1 -> 5 -> 9 -> 12。删除9会使它看起来像1 -> 5 -> 12。你只能访问9节点。你能让它看起来像正确的答案吗？

```

## Description (English)

A node that is neither the head nor the tail of a linked list is called a "middle node". Given access to some middle node, implement an algorithm to delete it from the list. E.g. given node 5 in 4->5->1->9, the list becomes 4->1->9.

## 思路

无前驱指针：把后继节点的值拷入当前节点，再跨过后继——即"伪装成"下一个节点被删除，O(1)。

## Solution

[SourceCode](./solution.js)
