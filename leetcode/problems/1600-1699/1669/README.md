# [1669] Merge In Between Linked Lists

## Description

[LeetCode Problem Description](https://leetcode.com/problems/merge-in-between-linked-lists/description/)

* algorithms
* Medium (82.93%)
* Likes:    2271
* Dislikes: 227
* Testcase Example:  '[10,1,13,6,9,5]\n3\n4\n[1000000,1000001,1000002]'

```md
You are given two linked lists: list1 and list2 of sizes n and m respectively.
Remove list1&#39;s nodes from the ath node to the bth node, and put list2 in their place.
The blue edges and nodes in the following figure indicate the result:

Build the result list and return its head.

Example 1:


Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [10,1,13,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.

Example 2:


Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
Explanation: The blue edges and nodes in the above figure indicate the result.


Constraints:

3 <= list1.length <= 104
1 <= a <= b < list1.length - 1
1 <= list2.length <= 104


```

## 中文翻译

给定两个链表 list1 和 list2，删除 list1 中第 a 到第 b 个节点，将 list2 整体插入该位置。返回结果链表头。

## 解题思路

**指针操作**

1. 找到 list1 的第 a-1 个节点 preA（0-indexed）
2. 找到 list1 的第 b+1 个节点 postB
3. 找到 list2 的尾节点 tail2
4. preA.next = list2, tail2.next = postB

时间复杂度：O(n+m)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
