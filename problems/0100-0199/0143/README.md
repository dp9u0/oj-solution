# [143] Reorder List

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reorder-list/description/)

* algorithms
* Medium (35.39%)
* Testcase Example:  '[1,2,3,4]'

```md
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
You may not modify the values in the list's nodes, only nodes itself may be changed.
Example 1:
Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

```

## Solution

1. 找到中间节点
2. 反转中间节点到最后节点
3. 合并两个List

[SourceCode](./solution.js)
