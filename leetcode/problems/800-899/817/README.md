# [817] Linked List Components

## Description

[LeetCode Problem Description](https://leetcode.com/problems/linked-list-components/description/)

* algorithms
* Medium (57.84%)
* Likes:    1198
* Dislikes: 2295
* Testcase Example:  '[0,1,2,3]\n[0,1,3]'

```md
You are given the head of a linked list containing unique integer values and an integer array nums that is a subset of the linked list values.
Return the number of connected components in nums where two values are connected if they appear consecutively in the linked list.

Example 1:


Input: head = [0,1,2,3], nums = [0,1,3]
Output: 2
Explanation: 0 and 1 are connected, so [0, 1] and [3] are the two connected components.

Example 2:


Input: head = [0,1,2,3,4], nums = [0,3,1,4]
Output: 2
Explanation: 0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.


Constraints:

The number of nodes in the linked list is n.
1 <= n <= 104
0 <= Node.val < n
All the values Node.val are unique.
1 <= nums.length <= n
0 <= nums[i] < n
All the values of nums are unique.


```

## 中文翻译

给定链表（值唯一）和子集数组 nums，统计 nums 中有多少个连通分量。两个值连通当且仅当它们在链表中相邻。

## 解题思路

将 nums 放入 Set，遍历链表。当当前节点在 Set 中且下一个节点不在（或为 null）时，计数一个连通分量的结束。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
