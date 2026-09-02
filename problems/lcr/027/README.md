# [LCR 027] 回文链表

## Description


```md
https://leetcode.cn/problems/aMhZSa/description/
* algorithms
* Easy (60.00%)
* Likes:    154
* Dislikes: -
* Testcase Example:  '[1,2,2,1]'
给定一个链表的 头节点 head ，请判断其是否为回文链表。
如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。

示例 1：
输入: head = [1,2,3,3,2,1]
输出: true
示例 2：
输入: head = [1,2]
输出: false

提示：
链表 L 的长度范围为 [1, 105]
0 <= node.val <= 9

进阶：能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

注意：本题与主站 234 题相同：https://leetcode.cn/problems/palindrome-linked-list/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given the head of a singly linked list, determine whether it is a **palindrome** (its value sequence reads the same forward and backward).

**Example:** `[1,2,3,3,2,1]` → `true`; `[1,2]` → `false`.

**Constraints:** length ≤ 10^5, values 0..9. Follow-up: O(n) time and O(1) space.

Note: same as LeetCode 234.

---

## Approach

O(1)-space: find the middle with slow/fast pointers, **reverse the second half**, then compare the first and reversed-second halves node by node (restoring is optional).

Complexity: `O(n)` time, `O(1)` space.
