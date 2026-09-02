# [LCR 144] 翻转二叉树

## Description


```md
https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/description/
* algorithms
* Easy (79.07%)
* Likes:    400
* Dislikes: -
* Testcase Example:  '[5,7,9,8,3,2,4]'
给定一棵二叉树的根节点 root，请左右翻转这棵二叉树，并返回其根节点。

示例 1：
输入：root = [5,7,9,8,3,2,4]
输出：[5,9,7,4,2,3,8]

提示：
树中节点数目范围在 [0, 100] 内
-100 <= Node.val <= 100

注意：本题与主站 226 题相同：https://leetcode.cn/problems/invert-binary-tree/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given the root of a binary tree, **mirror/invert** it (swap left and right children recursively) and return its root.

**Example:** `[5,7,9,8,3,2,4]` → `[5,9,7,4,2,3,8]`

**Constraints:** ≤ 100 nodes. Note: same as LeetCode 226.

---

## Approach

Recursively invert: swap the left and right children at every node after inverting each subtree.

Complexity: `O(n)`.
