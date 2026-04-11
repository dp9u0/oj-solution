# [2095] Delete the Middle Node of a Linked List

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/)

* algorithms
* Medium (59.53%)
* Likes:    4949
* Dislikes: 106
* Testcase Example:  '[1,3,4,7,1,2,6]'

```md
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
The middle node of a linked list of size n is the &lfloor;n / 2&rfloor;th node from the start using 0-based indexing, where &lfloor;x&rfloor; denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.


Example 1:


Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node.

Example 2:


Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

Example 3:


Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.

Constraints:

The number of nodes in the list is in the range [1, 105].
1 <= Node.val <= 105


```

## 题目翻译

给定链表头节点，删除中间节点，返回修改后链表的头节点。中间节点是第 floor(n/2) 个节点（0-indexed）。

**示例 1：** head = [1,3,4,7,1,2,6] → [1,3,4,1,2,6]（n=7，删除第3个节点7）
**示例 2：** head = [1,2,3,4] → [1,2,4]（n=4，删除第2个节点3）
**示例 3：** head = [2,1] → [2]（n=2，删除第1个节点1）

**约束：**
- 节点数在 [1, 10^5] 范围内
- 1 <= Node.val <= 10^5

## 解题思路 (Approach)

快慢指针。慢指针每次走一步，快指针每次走两步。当快指针到达末尾时，慢指针刚好到达中间节点的前一个节点（需要额外一个 prev 指针）。然后用 prev.next = slow.next 删除中间节点。

边界情况：只有一个节点时返回 null。

时间复杂度：O(n)，空间复杂度：O(1)。

## Solution

[SourceCode](./solution.js)
