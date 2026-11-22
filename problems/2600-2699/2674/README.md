# [2674] 拆分循环链表

## Description


```md
https://leetcode.cn/problems/split-a-circular-linked-list/description/
* algorithms
* Medium (51.23%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[1,5,7]'
现给定一个由正整数组成的 循环链表 list ，你的任务是将其拆分为 2 个 循环链表 ，使得第一个链表包含 list 前半部分 的节点（即 ceil(list.length / 2) 个节点），顺序与 list 中的顺序相同，而第二个链表包含 list 中 剩余 的节点，顺序也与 list 中的顺序相同。
返回一个长度为 2 的数组，其中第一个元素是表示 前半部分 链表的 循环链表 ，第二个元素是表示 后半部分 链表的 循环链表 。
循环链表 是一个普通的链表，唯一的区别是最后一个节点的下一个节点是头节点。

示例 1：
输入：nums = [1,5,7]
输出：[[1,5],[7]]
解释：初始链表有3个节点，因此前半部分是前两个元素，剩下的 1 个节点在后半部分。
示例 2：
输入：nums = [2,6,1,5]
输出：[[2,6],[1,5]]
解释：初始链表有4个节点，因此前半部分是前两个元素，剩下的 2 个节点在后半部分。

提示：
list 中的节点数范围为 [2, 105]
0 <= Node.val <= 109
LastNode.next = FirstNode ，其中 LastNode 是链表的最后一个节点，FirstNode 是第一个节点。
Hint 1: Do a while loop to calculate the size of the linked list.
Hint 2: Determine the size of the first half and create a new linked list in its size.
Hint 3: Do not forget that this half itself should be circular!
Hint 4: Use the previous hints for the second half.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Split a circular linked list into two circular lists: the first containing the first ceil(len/2) nodes (in order), the second containing the rest. Return [head1, head2].

Approach: walk the circle once to count length L; walk again to the (ceil(L/2))-th node — that is the tail of the first half; the next node is the head of the second half and the original tail closes the circle. Rewire: firstTail.next = list (head), secondTail.next = secondHead. Two passes, O(L) time, O(1) space.
