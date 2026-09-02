# [LCR 026] 重排链表

## Description


```md
https://leetcode.cn/problems/LGjMqU/description/
* algorithms
* Medium (64.52%)
* Likes:    165
* Dislikes: -
* Testcase Example:  '[1,2,3,4]'
给定一个单链表 L 的头节点 head ，单链表 L 表示为：
L0 → L1 → … → Ln-1 → Ln
请将其重新排列后变为：
L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1：
输入: head = [1,2,3,4]
输出: [1,4,2,3]
示例 2：
输入: head = [1,2,3,4,5]
输出: [1,5,2,4,3]

提示：
链表的长度范围为 [1, 5 * 104]
1 <= node.val <= 1000

注意：本题与主站 143 题相同：https://leetcode.cn/problems/reorder-list/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given the `head` of a singly linked list `L`, where `L` is `L0 → L1 → … → Ln-1 → Ln`, reorder it to `L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …`.

You may not merely change the values inside nodes — you must actually swap the nodes.

**Example 1:** Input `head = [1,2,3,4]` → Output `[1,4,2,3]`
**Example 2:** Input `head = [1,2,3,4,5]` → Output `[1,5,2,4,3]`

**Constraints:** length in `[1, 5 * 10^4]`, `1 <= node.val <= 1000`. Modify in-place.

Note: same as LeetCode 143.

---

## Approach

Three classic steps:

1. **Find the middle** using the slow/fast pointer technique.
2. **Reverse the second half** of the list (from the middle's next node).
3. **Merge alternately**: interleave the first half and the reversed second half — take one node from each in turn, rewiring `next` pointers in place.

`reorderList` returns nothing (modifies `head` in place).

Complexity: `O(n)` time, `O(1)` extra space.
