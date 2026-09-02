# [LCR 053] 二叉搜索树中的中序后继

## Description


```md
https://leetcode.cn/problems/P5rCT8/description/
* algorithms
* Medium (62.77%)
* Likes:    101
* Dislikes: -
* Testcase Example:  '[2,1,3]\n1'
给定一棵二叉搜索树和其中的一个节点 p ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 null 。
节点 p 的后继是值比 p.val 大的节点中键值最小的节点，即按中序遍历的顺序节点 p 的下一个节点。

示例 1：
输入：root = [2,1,3], p = 1
输出：2
解释：这里 1 的中序后继是 2。请注意 p 和返回值都应是 TreeNode 类型。
示例 2：
输入：root = [5,3,6,2,4,null,null,1], p = 6
输出：null
解释：因为给出的节点没有中序后继，所以答案就返回 null 了。

提示：
树中节点的数目在范围 [1, 104] 内。
-105 <= Node.val <= 105
树中各节点的值均保证唯一。

注意：本题与主站 285 题相同： https://leetcode.cn/problems/inorder-successor-in-bst/

```

## Solution

[SourceCode](./solution.js)

---

## English Description

Given a binary search tree (BST) and a node `p` in it, find the in-order successor of `p`. If the node has no in-order successor, return `null`.

The successor of node `p` is the node with the smallest key greater than `p.val`, i.e., the next node of `p` in an in-order traversal.

**Example 1:**

```
Input: root = [2,1,3], p = 1
Output: 2
```

Explanation: the in-order successor of 1 is 2. Note that both `p` and the return value should be of `TreeNode` type.

**Example 2:**

```
Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null
```

Explanation: the given node has no in-order successor, so `null` is returned.

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-10^5 <= Node.val <= 10^5`
- All values in the tree are **unique**.

---

## Approach

**In-order Successor in a BST via BST property (no traversal needed)**

The in-order successor of `p` is the smallest node whose value is greater than `p.val`. We can find it by walking down the tree like binary search:

1. Initialize `successor = null`.
2. Starting from `root`, at each node `cur`:
   - If `p.val < cur.val`: `cur` is a candidate successor (its value is greater than p's). Record `successor = cur` and go left to look for a smaller candidate.
   - Else (`p.val > cur.val`): `cur` is too small, it cannot be a successor. Go right.
   - (`p.val === cur.val` never happens since the node `p` is exactly a node in the tree; when we reach `p` itself, `p.val < cur.val` is false, so we go right, which correctly seeks the leftmost node of p's right subtree, if any.)
3. When `cur` becomes `null`, stop and return `successor`.

- **Time complexity**: O(h), where h is the height of the tree.
- **Space complexity**: O(1).
