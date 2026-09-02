# [LCR 052] 递增顺序搜索树

## Description


```md
https://leetcode.cn/problems/NYBBNL/description/
* algorithms
* Easy (73.64%)
* Likes:    86
* Dislikes: -
* Testcase Example:  '[5,3,6,2,4,null,8,1,null,null,null,7,9]'
给你一棵二叉搜索树，请 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

示例 1：
输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
示例 2：
输入：root = [5,1,7]
输出：[1,null,5,null,7]

提示：
树中节点数的取值范围是 [1, 100]
0 <= Node.val <= 1000

注意：本题与主站 897 题相同： https://leetcode.cn/problems/increasing-order-search-tree/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a binary search tree, rearrange it via **in-order traversal** into an increasing-order search tree such that the leftmost node becomes the root and **every node has no left child and only one right child**.

**Example 1:** Input `[5,3,6,2,4,null,8,1,null,null,null,7,9]` → Output `[1,null,2,null,...,9]`
**Example 2:** Input `[5,1,7]` → Output `[1,null,5,null,7]`

**Constraints:** node count `[1,100]`, `0 <= Node.val <= 1000`.

Note: same as LeetCode 897.

---

## Approach

**In-order DFS** while relinking nodes in place:

- Traverse left subtree first, then visit the current node.
- Keep a `tail` pointer (a dummy sentinel). On each in-order visit, clear the node's left child, append it as `tail.right`, and advance `tail`.
- Recurse right.

Return the sentinel's `right` — the new root (leftmost node).

Complexity: `O(n)` time, `O(h)` recursion space.
