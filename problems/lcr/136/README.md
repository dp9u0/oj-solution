# [LCR 136] 删除链表的节点

## Description


```md
https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/description/
* algorithms
* Easy (58.92%)
* Likes:    370
* Dislikes: -
* Testcase Example:  '[4,5,1,9]\n5'
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
返回删除后的链表的头节点。
示例 1：
输入：head = [4,5,1,9], val = 5
输出：[4,1,9]
解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
示例 2：
输入：head = [4,5,1,9], val = 1
输出：[4,5,9]
解释：给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

说明：
题目保证链表中节点的值互不相同
若使用 C 或 C++ 语言，你不需要 free 或 delete 被删除的节点

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given the head of a singly linked list and a node value to delete, remove that node (values are unique) and return the new head.

**Example:** `head=[4,5,1,9], val=5` → `[4,1,9]`

---

## Approach

Use a **dummy head** and walk to find the node whose `next.val === val`; unlink it by `prev.next = node.next`.

Complexity: `O(n)`.
