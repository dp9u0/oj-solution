# [1290] Convert Binary Number in a Linked List to Integer

## Description

[LeetCode Problem Description](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/)

* algorithms
* Easy (82.34%)
* Likes:    4687
* Dislikes: 178
* Testcase Example:  '[1,0,1]'

```md
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
Return the decimal value of the number in the linked list.
The most significant bit is at the head of the linked list.

Example 1:


Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:

Input: head = [0]
Output: 0


Constraints:

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node&#39;s value is either 0 or 1.


```

## 翻译

给定一个单链表，每个节点值为 0 或 1，表示一个二进制数（最高位在表头）。返回对应的十进制值。

## Approach

遍历链表，每次将结果左移一位并加上当前节点值：result = result * 2 + node.val。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
