# [面试题 02.02] 返回倒数第 k 个节点

## Description


```md
https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/description/
* lcci
* Easy (76.30%)
* Likes:    159
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5]\n2'
实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
注意：本题相对原题稍作改动
示例：
输入： 1->2->3->4->5 和 k = 2
输出： 4
说明：
给定的 k 保证是有效的。
Hint 1: 如果你知道链表大小，会怎么样？找到最后第k个元素和找到第x个元素有何区别？
Hint 2: 如果你不知道链表的大小，你能计算它吗？这将如何影响运行时间？
Hint 3: 尝试用递归法实现。如果你能找到(k − 1)到最后一个元素，可以找到第k个元素吗？
Hint 4: 你可能会发现返回多个值大有用处。有些语言不直接支持这一点，但基本上使用任何语言都有解决方法。这些解决方法有哪些？
Hint 5: 你能通过递归做到吗？想象一下，如果有两个指针指向相邻节点，它们通过链表以相同的速度移动。当一个到达链表的结尾时，另一个在哪里？

```

## Description (English)

Implement an algorithm to find the k-th node from the end of a singly linked list. Return the value of that node. (k is guaranteed valid.)

Example:
Input: 1->2->3->4->5, k = 2
Output: 4

## 思路

快慢双指针 O(n)/O(1)：快指针先走 k 步，随后两指针同速前进，快指针到达 null 时慢指针恰为倒数第 k 个。

## Solution

[SourceCode](./solution.js)
