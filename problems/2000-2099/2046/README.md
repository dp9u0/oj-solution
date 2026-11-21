# [2046] 给按照绝对值排序的链表排序

## Description


```md
https://leetcode.cn/problems/sort-linked-list-already-sorted-using-absolute-values/description/
* algorithms
* Medium (64.04%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '[0,2,-5,5,10,-10]'
给你一个链表的头结点 head ，这个链表是根据结点的绝对值进行升序排序, 返回重新根据节点的值进行升序排序的链表。

示例 1:
输入: head = [0,2,-5,5,10,-10]
输出: [-10,-5,0,2,5,10]
解释:
根据结点的值的绝对值排序的链表是 [0,2,-5,5,10,-10].
根据结点的值排序的链表是 [-10,-5,0,2,5,10].
示例 2：
输入: head = [0,1,2]
输出: [0,1,2]
解释:
这个链表已经是升序的了。
示例 3：
输入: head = [1]
输出: [1]
解释:
这个链表已经是升序的了。

提示:
链表节点数的范围是 [1, 105].
-5000 <= Node.val <= 5000
head 是根据结点绝对值升序排列好的链表.

进阶:
你可以在O(n)的时间复杂度之内解决这个问题吗?
Hint 1: The nodes with positive values are already in the correct order.
Hint 2: Nodes with negative values need to be moved to the front.
Hint 3: Nodes with negative values are in reversed order.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given the head of a singly linked list whose values are already sorted in non-decreasing order of their ABSOLUTE values, return a new list (possibly by rearranging the given nodes) sorted in non-decreasing order of the actual values.

Example 1:
Input: head = [0,2,-5,5,10,-10]
Output: [-10,-5,0,2,5,10]

Example 2:
Input: head = [2,5,8,9,16,-16]
Output: [-16,2,5,8,9,16]

## Approach

In an absolute-value-sorted list, negatives appear in decreasing actual value (larger absolute value = more negative) and positives appear in increasing order. One pass: head-insert every negative node at the front of the result, tail-append every positive node. Result is fully sorted. O(n) time, O(1) extra space.
