# [LCR 142] 训练计划 IV

## Description


```md
https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/description/
* algorithms
* Easy (71.81%)
* Likes:    400
* Dislikes: -
* Testcase Example:  '[1,2,4]\n[1,3,4]'
给定两个以 有序链表 形式记录的训练计划 l1、l2，分别记录了两套核心肌群训练项目编号，请合并这两个训练计划，按训练项目编号 升序 记录于链表并返回。
注意：新链表是通过拼接给定的两个链表的所有节点组成的。

示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：
输入：l1 = [], l2 = []
输出：[]
示例 3：
输入：l1 = [], l2 = [0]
输出：[0]

提示：
0 <= 链表长度 <= 1000

注意：本题与主站 21 题相同：https://leetcode.cn/problems/merge-two-sorted-lists/

```

## Solution

[SourceCode](./solution.js)

---

## English Description

Given two sorted linked lists `l1` and `l2` representing two sets of training program IDs, merge them into one sorted linked list and return it. The new list should be made by splicing together the nodes of the first two lists.

**Example 1:**
```
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**
```
Input: l1 = [], l2 = []
Output: []
```

**Example 3:**
```
Input: l1 = [], l2 = [0]
Output: [0]
```

**Constraints:**
- `0 <= 链表长度 <= 1000`

## Approach

Merge two sorted linked lists iteratively with a dummy head:

1. Create a `dummy` sentinel node and a `cur` tail pointer referencing it.
2. While both `l1` and `l2` are non-empty, compare `l1.val` with `l2.val`; append the smaller node to `cur.next` and advance that list's pointer.
3. After one list is exhausted, attach the remaining nodes of the other list to `cur.next` (taking all remaining nodes at once since they are already sorted).
4. Return `dummy.next`, which is the head of the merged list.

- **Time:** O(n + m), each node is visited once.
- **Space:** O(1), only pointer manipulation, no new nodes allocated.
