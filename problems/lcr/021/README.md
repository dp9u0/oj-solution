# [LCR 021] 删除链表的倒数第 N 个结点

## Description


```md
https://leetcode.cn/problems/SLwz0R/description/
* algorithms
* Medium (57.22%)
* Likes:    101
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5]\n2'
给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例 1：
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：
输入：head = [1], n = 1
输出：[]
示例 3：
输入：head = [1,2], n = 1
输出：[1]

提示：
链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

进阶：能尝试使用一趟扫描实现吗？

注意：本题与主站 19 题相同： https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

```

## Solution

[SourceCode](./solution.js)

### English Description

Given the `head` of a linked list, remove the `n`-th node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:
- The number of nodes in the list is sz.
- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz

Follow up: Could you do this in one pass?

Note: This problem is the same as LeetCode 19: https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

### Approach

Use two pointers in a single pass with a dummy head sentinel:

1. Create a `dummy` node pointing to `head`, so deleting the real head node doesn't need a special case.
2. Move the `fast` pointer `n` steps forward first.
3. Move `fast` and `slow` together until `fast` reaches the end. At that moment `slow` points to the node **before** the target node (the n-th from end).
4. Unlink the target node: `slow.next = slow.next.next`.
5. Return `dummy.next` as the new head.

Time: O(L) where L is the list length (single pass). Space: O(1).
