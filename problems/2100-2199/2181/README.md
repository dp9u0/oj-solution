# [2181] Merge Nodes in Between Zeros

## Description

[LeetCode Problem Description](https://leetcode.com/problems/merge-nodes-in-between-zeros/description/)

* algorithms
* Medium (89.67%)
* Likes:    2503
* Dislikes: 54
* Testcase Example:  '[0,3,1,0,4,5,2,0]'

```md
You are given the head of a linked list, which contains a series of integers separated by 0&#39;s. The beginning and end of the linked list will have Node.val == 0.
For every two consecutive 0&#39;s, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0&#39;s.
Return the head of the modified linked list.

Example 1:


Input: head = [0,3,1,0,4,5,2,0]
Output: [4,11]
Explanation:
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 3 + 1 = 4.
- The sum of the nodes marked in red: 4 + 5 + 2 = 11.

Example 2:


Input: head = [0,1,0,3,0,2,2,0]
Output: [1,3,4]
Explanation:
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 1 = 1.
- The sum of the nodes marked in red: 3 = 3.
- The sum of the nodes marked in yellow: 2 + 2 = 4.


Constraints:

The number of nodes in the list is in the range [3, 2 * 105].
0 <= Node.val <= 1000
There are no two consecutive nodes with Node.val == 0.
The beginning and end of the linked list have Node.val == 0.


```

## 翻译

给定一个链表，由一系列被 0 分隔的整数组成，首尾都是 0。将每两个相邻 0 之间的所有节点合并为一个节点，值为它们之和。返回修改后不含 0 的链表。

## Approach

遍历链表，累加非零节点的值，遇到 0 时创建一个新节点（值为累加和），连接到结果链表。跳过第一个 0。

## Solution

[SourceCode](./solution.js)
