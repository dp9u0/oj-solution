# [LCR 140] 训练计划 II

## Description


```md
https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/description/
* algorithms
* Easy (79.15%)
* Likes:    548
* Dislikes: -
* Testcase Example:  '[2,4,7,8]\n1'
给定一个头节点为 head 的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第 cnt 个训练项目编号对应的节点。

示例 1：
输入：head = [2,4,7,8], cnt = 1
输出：8

提示：
1 <= head.length <= 100
0 <= head[i] <= 100
1 <= cnt <= head.length

```

## English Description

Given a linked list `head` recording a series of core muscle training item numbers, find and return the node corresponding to the `cnt`-th item from the end of the list.

Example 1:
Input: head = [2,4,7,8], cnt = 1
Output: 8

Constraints:
- 1 <= head.length <= 100
- 0 <= head[i] <= 100
- 1 <= cnt <= head.length

## Solution Approach

**Two Pointers (Fast & Slow)**

Use two pointers `fast` and `slow`, both starting at `head`. First move `fast` `cnt` steps forward, so there is a gap of `cnt` nodes between `fast` and `slow`. Then move both pointers one step at a time until `fast` reaches `null`. At that moment, `slow` points to the `cnt`-th node from the end.

- Time: O(n), single pass
- Space: O(1)

## Solution

[SourceCode](./solution.js)
