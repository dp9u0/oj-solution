# [LCR 077] 排序链表

## Description


```md
https://leetcode.cn/problems/7WHec2/description/
* algorithms
* Medium (60.46%)
* Likes:    167
* Dislikes: -
* Testcase Example:  '[4,2,1,3]'
给定链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

示例 1：
输入：head = [4,2,1,3]
输出：[1,2,3,4]
示例 2：
输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
示例 3：
输入：head = []
输出：[]

提示：
链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105

进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

注意：本题与主站 148 题相同：https://leetcode.cn/problems/sort-list/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given the head of a linked list, sort it in **ascending order** and return the sorted list.

**Example 1:** `head = [4,2,1,3]` → `[1,2,3,4]`
**Example 2:** `head = [-1,5,3,4,0]` → `[-1,0,3,4,5]`
**Example 3:** `head = []` → `[]`

**Constraints:** node count in `[0, 5 * 10^4]`, `-10^5 <= Node.val <= 10^5`.
**Follow-up:** Can you sort in `O(n log n)` time and constant space?

Note: same as LeetCode 148.

---

## Approach

**Bottom-up iterative merge sort** (`O(n log n)` time, `O(1)` extra space):

- Merge lists of size 1, then 2, then 4, ... doubling each pass.
- For each pass, repeatedly split off two runs of `size` nodes, merge them into the result, and reconnect to the running tail.
- Helper functions: `split(head, size)` returns head of a run of up to `size` nodes (advancing the pointer), and `merge(a, b)` merges two sorted lists.

This avoids the O(log n) recursion stack of top-down merge sort.

Complexity: `O(n log n)` time, `O(1)` space.
