# [面试题 02.04] 分割链表

## Description


```md
https://leetcode.cn/problems/partition-list-lcci/description/
* lcci
* Medium (58.52%)
* Likes:    174
* Dislikes: -
* Testcase Example:  '[1,4,3,2,5,2]\n3'
给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
你不需要 保留 每个分区中各节点的初始相对位置。

示例 1：
输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
示例 2：
输入：head = [2,1], x = 2
输出：[1,2]

提示：
链表中节点的数目在范围 [0, 200] 内
-100 <= Node.val <= 100
-200 <= x <= 200
Hint 1: 这个问题有很多解法，其中大部分都有最优的运行时间。有些代码比其他代码更短，更干净。你可以想出不同的解法吗？
Hint 2: 考虑元素不必保持相同的相对顺序。我们只需要确保小于基准点的元素必须位于比基准点大的元素之前。这有助于你想出更多的解法吗？

```

## Description (English)

Given the head of a linked list and a value x, partition the list so that all nodes less than x come before nodes greater than or equal to x. You do NOT need to preserve the original relative order within each partition.

Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]

Notes: 0 <= list length <= 200; -100 <= Node.val <= 100; -200 <= x <= 200.

## 思路

一次扫描 + 双链拼接 O(n)：小于 x 的节点挂 small 链、其余挂 large 链（保持各自相对顺序，恰好与样例输出一致），最后 small 尾接 large 头。注意 large 尾要显式置 null——原链可能把后续节点"拖"过来成环/多余尾巴。

## Solution

[SourceCode](./solution.js)
