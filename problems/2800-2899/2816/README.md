# [2816] Double a Number Represented as a Linked List

## Description

[LeetCode Problem Description](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/)

* algorithms
* Medium (61.24%)
* Likes:    1280
* Dislikes: 32
* Testcase Example:  '[1,8,9]'

```md
You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.
Return the head of the linked list after doubling it.

Example 1:


Input: head = [1,8,9]
Output: [3,7,8]
Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.

Example 2:


Input: head = [9,9,9]
Output: [1,9,9,8]
Explanation: The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998.


Constraints:

The number of nodes in the list is in the range [1, 104]
0 <= Node.val <= 9
The input is generated such that the list represents a number that does not have leading zeros, except the number 0 itself.


```

## 题目翻译

给定一个非空链表的头节点，表示一个没有前导零的非负整数（每位数字按顺序存储在链表节点中）。返回将该整数翻倍后的链表头节点。

**示例 1：**
输入：head = [1,8,9] → 表示 189
输出：[3,7,8] → 表示 378（189 * 2）

**示例 2：**
输入：head = [9,9,9] → 表示 999
输出：[1,9,9,8] → 表示 1998（999 * 2）

**约束：**
- 节点数在 [1, 10^4] 范围内
- 0 <= Node.val <= 9

## 解题思路 (Approach)

先反转链表，然后从低位到高位逐位乘 2 并处理进位，最后再反转回来。如果最高位有进位，需要额外添加一个新节点。

时间复杂度：O(n)，空间复杂度：O(1)。

## Solution

[SourceCode](./solution.js)
