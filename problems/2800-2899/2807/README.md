# [2807] Insert Greatest Common Divisors in Linked List

## Description

[LeetCode Problem Description](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/)

* algorithms
* Medium (91.40%)
* Likes:    1143
* Dislikes: 36
* Testcase Example:  '[18,6,10,3]'

```md
Given the head of a linked list head, in which each node contains an integer value.
Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.
Return the linked list after insertion.
The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Example 1:


Input: head = [18,6,10,3]
Output: [18,6,6,2,10,1,3]
Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
- We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
- We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
- We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
There are no more adjacent nodes, so we return the linked list.

Example 2:


Input: head = [7]
Output: [7]
Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
There are no pairs of adjacent nodes, so we return the initial linked list.


Constraints:

The number of nodes in the list is in the range [1, 5000].
1 <= Node.val <= 1000


```

## 翻译

给定链表头节点 `head`，在每个相邻节点对之间插入一个新节点，其值为两个相邻节点值的最大公约数（GCD）。返回插入后的链表。

## Approach

遍历链表，对每对相邻节点计算 GCD 并插入新节点。直接操作指针即可。

时间复杂度 O(n)，空间复杂度 O(n)（新节点）。

## Solution

[SourceCode](./solution.js)
