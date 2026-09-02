# [LCR 155] 将二叉搜索树转化为排序的双向链表

## Description


```md
https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/description/
* algorithms
* Medium (65.57%)
* Likes:    768
* Dislikes: -
* Testcase Example:  '[4,2,5,1,3]'
将一个 二叉搜索树 就地转化为一个 已排序的双向循环链表 。
对于双向循环列表，你可以将左右孩子指针作为双向循环链表的前驱和后继指针，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。
特别地，我们希望可以 就地 完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中最小元素的指针。

示例 1：
输入：root = [4,2,5,1,3]
输出：[1,2,3,4,5]
解释：下图显示了转化后的二叉搜索树，实线表示后继关系，虚线表示前驱关系。
示例 2：
输入：root = [2,1,3]
输出：[1,2,3]
示例 3：
输入：root = []
输出：[]
解释：输入是空树，所以输出也是空链表。
示例 4：
输入：root = [1]
输出：[1]

提示：
-1000 <= Node.val <= 1000
Node.left.val < Node.val < Node.right.val
Node.val 的所有值都是独一无二的
0 <= Number of Nodes <= 2000
注意：本题与主站 426 题相同：https://leetcode.cn/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/

```

## Solution

[SourceCode](./solution.js)

### English Description

Convert a **Binary Search Tree** to a sorted **circular doubly-linked list** in-place.

Think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

We want to do the transformation **in place**. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. Return the pointer to the smallest element of the linked list.

**Example 1:**
```
Input: root = [4,2,5,1,3]
Output: [1,2,3,4,5]
```

**Example 3:**
```
Input: root = []
Output: []
```

**Constraints:**
- `-1000 <= Node.val <= 1000`
- `Node.left.val < Node.val < Node.right.val`
- All values of `Node.val` are unique.
- `0 <= Number of Nodes <= 2000`

> This problem is the same as LeetCode 426: Convert Binary Search Tree to Sorted Doubly Linked List.

### Approach (中文思路)

**中序遍历 + 双向指针拼接 + 首尾循环**

- BST 中序遍历即得升序序列。在遍历过程中就地改造节点的左右指针，把相邻节点两两连成双向链表。
- 维护两个引用：
  - `head`：当前已转换部分的最左(最小)节点，也是最终返回的头。
  - `prev`：上一个访问(已连好)的节点。
- 递归中序访问当前节点 `cur` 时：
  - 若 `prev` 非空，令 `prev.right = cur; cur.left = prev`（连双向边）。
  - 否则说明 `cur` 是最小节点，记 `head = cur`。
  - 更新 `prev = cur`。
- 遍历完：`prev` 指向最大(最右)节点。最后做闭环：
  - `head.left = prev; prev.right = head`。
- 边界：空树返回 `null`；单节点树，中序只有一个节点，最后闭环它自己。
- 时间复杂度 O(n)，空间 O(height)（递归栈）。
- 注意函数签名返回最小节点指针。
