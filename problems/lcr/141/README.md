# [LCR 141] 训练计划 III

## Description


```md
https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/description/
* algorithms
* Easy (74.22%)
* Likes:    644
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5]'
给定一个头节点为 head 的单链表用于记录一系列核心肌群训练编号，请将该系列训练编号 倒序 记录于链表并返回。

示例 1：
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

示例 2：
输入：head = [1,2]
输出：[2,1]

示例 3：
输入：head = []
输出：[]

提示：
链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000

注意：本题与主站 206 题相同：https://leetcode.cn/problems/reverse-linked-list/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given the `head` of a singly linked list that records a sequence of core-muscle training numbers, record the sequence in **reverse** order as a linked list and return it.

**Example 1:** Input `head = [1,2,3,4,5]` → Output `[5,4,3,2,1]`
**Example 2:** Input `head = [1,2]` → Output `[2,1]`
**Example 3:** Input `head = []` → Output `[]`

**Constraints:** node count in `[0, 5000]`, `-5000 <= Node.val <= 5000`.

Note: same as LeetCode 206.

---

## Approach

**Iterative reversal** with three pointers:

- `prev` starts `null`, `cur` starts at `head`.
- In each step, save `cur.next`, point `cur.next` back to `prev`, advance `prev = cur`, `cur = next`.
- When `cur` becomes `null`, `prev` is the new head.

Complexity: `O(n)` time, `O(1)` extra space.
