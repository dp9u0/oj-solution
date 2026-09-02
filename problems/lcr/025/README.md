# [LCR 025] 两数相加 II

## Description


```md
https://leetcode.cn/problems/lMSNwu/description/
* algorithms
* Medium (58.34%)
* Likes:    113
* Dislikes: -
* Testcase Example:  '[7,2,4,3]\n[5,6,4]'
给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
可以假设除了数字 0 之外，这两个数字都不会以零开头。

示例 1：
输入：l1 = [7,2,4,3], l2 = [5,6,4]
输出：[7,8,0,7]
示例 2：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[8,0,7]
示例 3：
输入：l1 = [0], l2 = [0]
输出：[0]

提示：
链表的长度范围为 [1, 100]
0 <= node.val <= 9
输入数据保证链表代表的数字无前导 0

进阶：如果输入链表不能修改该如何处理？换句话说，不能对列表中的节点进行翻转。

注意：本题与主站 445 题相同：https://leetcode.cn/problems/add-two-numbers-ii/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**
Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]

**Example 2:**
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]

**Example 3:**
Input: l1 = [0], l2 = [0]
Output: [0]

**Constraints:**
- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.val <= 9
- It is guaranteed that the linked lists represent numbers that do not have leading zeros.

**Follow-up:** Could you solve it without reversing the input lists?

---

## Approach

**Two Stacks + Head Insertion**

Since the most significant digit comes first but addition must start from the least significant digit, we cannot reverse the lists. Instead:

1. Push every node of `l1` into stack `s1` and every node of `l2` into stack `s2`, so the least significant digits sit on top.
2. Pop from both stacks simultaneously, adding `s1Val + s2Val + carry`; compute the new digit and carry.
3. Build the result by **head insertion** (insert each new digit before the current head), so digits are assembled from least to most significant, naturally producing the most-significant-first order.
4. After both stacks are drained, if `carry` remains, prepend a leading node of value 1.

**Time:** O(m + n) — traverse both lists twice (push + pop).
**Space:** O(m + n) — the two stacks.
