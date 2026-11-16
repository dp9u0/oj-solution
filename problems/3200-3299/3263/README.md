# [3263] 将双链表转换为数组 I

## Description


```md
https://leetcode.cn/problems/convert-doubly-linked-list-to-array-i/description/
* algorithms
* Easy (59.77%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[1,2,3,4,3,2,1]'
给定一个 双链表 的 head 节点，其中的节点具有指向下一个节点的指针和上一个节点的指针。
返回一个 按顺序 包含链表中元素的整数数组。

示例 1：
输入：head = [1,2,3,4,3,2,1]
输出：[1,2,3,4,3,2,1]
示例 2：
输入：head = [2,2,2,2,2]
输出：[2,2,2,2,2]
示例 3：
输入：head = [3,2,3,2,3,2]
输出：[3,2,3,2,3,2]

提示：
给定链表中节点的数量在 [1, 50] 范围。
1 <= Node.val <= 50

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given the `head` of a doubly linked list, where each node has `next` and `prev` pointers. Return an integer array containing the elements of the linked list in order.

**Constraints:**
- 1 <= number of nodes <= 50
- 1 <= Node.val <= 50

## Approach

从 head 沿 next 指针遍历,依次收集 val。

时间 O(n),空间 O(n)(输出)。
