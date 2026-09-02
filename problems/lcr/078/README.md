# [LCR 078] 合并 K 个升序链表

## Description


```md
https://leetcode.cn/problems/vvXgSW/description/
* algorithms
* Hard (65.72%)
* Likes:    123
* Dislikes: -
* Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
给定一个链表数组，每个链表都已经按升序排列。
请将所有链表合并到一个升序链表中，返回合并后的链表。

示例 1：
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
1->4->5,
1->3->4,
2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
示例 2：
输入：lists = []
输出：[]
示例 3：
输入：lists = [[]]
输出：[]

提示：
k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] 按 升序 排列
lists[i].length 的总和不超过 10^4

注意：本题与主站 23 题相同： https://leetcode.cn/problems/merge-k-sorted-lists/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an array of linked lists, each sorted in ascending order, merge all the linked lists into one sorted linked list and return it.

**Example 1:** Input `lists = [[1,4,5],[1,3,4],[2,6]]` → Output `[1,1,2,3,4,4,5,6]`
**Example 2:** Input `lists = []` → Output `[]`
**Example 3:** Input `lists = [[]]` → Output `[]`

**Constraints:** `k == lists.length`, `0 <= k <= 10^4`, each list length `<= 500`, total elements `<= 10^4`, values in `[-10^4, 10^4]`.

Note: same as LeetCode 23.

---

## Approach

**Min-heap over the current heads** of the k lists:

1. Push each list's head (if non-null) into a min-heap keyed by node value.
2. Repeatedly pop the smallest node, append it to the result tail, and push its `next` if present.
3. Continue until the heap is empty.

Each element is pushed/popped once → `O(N log k)` time (N total nodes, k lists), `O(k)` space for the heap. The heap is implemented inline.
