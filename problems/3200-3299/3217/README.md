# [3217] Delete Nodes From Linked List Present in Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/description/)

* algorithms
* Medium (69.46%)
* Likes:    1087
* Dislikes: 50
* Testcase Example:  '[1,2,3]\n[1,2,3,4,5]'

```md
You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

Example 1:

Input: nums = [1,2,3], head = [1,2,3,4,5]
Output: [4,5]
Explanation:

Remove the nodes with values 1, 2, and 3.

Example 2:

Input: nums = [1], head = [1,2,1,2,1,2]
Output: [2,2,2]
Explanation:

Remove the nodes with value 1.

Example 3:

Input: nums = [5], head = [1,2,3,4]
Output: [1,2,3,4]
Explanation:

No node has value 5.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
All elements in nums are unique.
The number of nodes in the given list is in the range [1, 105].
1 <= Node.val <= 105
The input is generated such that there is at least one node in the linked list that has a value not present in nums.


```

## 中文翻译

给定整数数组 nums 和链表头节点，删除链表中所有值在 nums 中存在的节点，返回修改后的链表头。

## 解题思路

将 nums 存入 Set，用 dummy 节点简化头节点删除，遍历链表跳过需要删除的节点。

## Solution

[SourceCode](./solution.js)
