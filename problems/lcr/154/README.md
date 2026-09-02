# [LCR 154] 复杂链表的复制

## Description


```md
https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/description/
* algorithms
* Medium (71.46%)
* Likes:    807
* Dislikes: -
* Testcase Example:  '[[7,null],[13,0],[11,4],[10,2],[1,0]]'
请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

示例 1：
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
示例 2：
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
示例 3：
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
示例 4：
输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。

提示：
-10000 <= Node.val <= 10000
Node.random 为空（null）或指向链表中的节点。
节点数目不超过 1000 。

注意：本题与主站 138 题相同：https://leetcode.cn/problems/copy-list-with-random-pointer/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Implement `copyRandomList` to deep-copy a linked list where each node has `next` and also a `random` pointer to any node or null. Return the head of the deep copy.

**Constraints:** ≤ 1000 nodes. Note: same as LeetCode 138.

---

## Approach

**Interleaving (O(1) space)**:

1. For each node create a clone inserted right after it (`clone.next = node.next; node.next = clone`).
2. Set each clone's `random` = original node's `random.next` (if random exists).
3. Separate the two lists: restore original `next`s and link clones.

Complexity: `O(n)` time, `O(1)` extra space.
