# [LCR 024] 反转链表

## Description


```md
https://leetcode.cn/problems/UHnkqh/description/
* algorithms
* Easy (75.46%)
* Likes:    237
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5]'
给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。

示例 1：
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：
输入：head = [1,2]
输出：[2,1]
示例 3：
输入：head = []
输出：[]

提示：
链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

注意：本题与主站 206 题相同： https://leetcode.cn/problems/reverse-linked-list/

```

## English Translation

Given the head of a singly linked list, reverse the list, and return the head of the reversed list.

**Example 1:**
```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**
```
Input: head = [1,2]
Output: [2,1]
```

**Example 3:**
```
Input: head = []
Output: []
```

**Constraints:**
- The number of nodes in the list is in the range [0, 5000].
- -5000 <= Node.val <= 5000

**Follow up:** The linked list can be reversed either iteratively or recursively. Could you implement both?

## Approach

**迭代反转 (Iterative)**: 使用两个指针 `prev`(初始为 null)和 `curr`(初始为 head)。每轮迭代把 `curr.next` 指向 `prev`,然后 `prev`、`curr` 整体后移一位。当 `curr` 遍历到 null 时,`prev` 即为反转后链表的头节点。时间复杂度 O(n),空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
