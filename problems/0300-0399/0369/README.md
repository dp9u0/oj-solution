# [369] 给单链表加一

## Description


```md
https://leetcode.cn/problems/plus-one-linked-list/description/
* algorithms
* Medium (60.44%)
* Likes:    133
* Dislikes: -
* Testcase Example:  '[1,2,3]'
给定一个用链表表示的非负整数， 然后将这个整数 再加上 1 。
这些数字的存储是这样的：最高位有效的数字位于链表的首位 head 。

示例 1:
输入: head = [1,2,3]
输出: [1,2,4]
示例 2:
输入: head = [0]
输出: [1]

提示：
链表中的节点数在 [1, 100] 的范围内。
0 <= Node.val <= 9
由链表表示的数字不包含前导零，除了零本身。

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a non-negative integer represented as a linked list (most significant digit at `head`), add one to it.

- Example 1: head = [1,2,3] → `[1,2,4]`
- Example 2: head = [0] → `[1]`

Constraints: 1 ≤ nodes ≤ 100; `0 <= Node.val <= 9`; no leading zeros except the number 0 itself.

## Approach

不反转链表:加一只会影响**末尾连续的 9**(变 0)以及它们前面第一个非 9 数字(+1)。

- 单趟扫描找**最右**一个 `val != 9` 的节点 p:`p.val++`,其后所有节点置 0。
- 若整条链全是 9(999+1=1000):全部置 0,前面接一个值为 1 的新头。

时间 O(n),额外空间 O(1)。
