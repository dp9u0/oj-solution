# [LCR 124] 推理二叉树

## Description


```md
https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/description/
* algorithms
* Medium (69.98%)
* Likes:    1152
* Dislikes: -
* Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
某二叉树的先序遍历结果记录于整数数组 preorder，它的中序遍历结果记录于整数数组 inorder。请根据 preorder 和 inorder 的提示构造出这棵二叉树并返回其根节点。

注意：preorder 和 inorder 中均不含重复数字。

示例 1：
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]

示例 2:
输入: preorder = [-1], inorder = [-1]
输出: [-1]

提示:
1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
inorder 均出现在 preorder
preorder 保证 为二叉树的前序遍历序列
inorder 保证 为二叉树的中序遍历序列

注意：本题与主站 105 题重复：https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The preorder traversal of a binary tree is recorded in `preorder`, its inorder in `inorder`. Construct the tree and return its root. All values are distinct.

**Example 1:** `preorder=[3,9,20,15,7], inorder=[9,3,15,20,7]` → `[3,9,20,null,null,15,7]`
**Example 2:** `preorder=[-1], inorder=[-1]` → `[-1]`

**Constraints:** up to 3000 nodes, distinct values.

Note: same as LeetCode 105.

---

## Approach

**Recursive construction.** The preorder gives roots left→right. For a subtree spanning `inorder[l..r]`, its root is the next value in `preorder`; the value's index in `inorder` splits left and right subtrees.

Use a global preorder index and an `inorder` value→index map. Recursively build.

Complexity: `O(n)`.
