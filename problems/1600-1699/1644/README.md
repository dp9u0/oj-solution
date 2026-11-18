# [1644] 二叉树的最近公共祖先 II

## Description


```md
https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-ii/description/
* algorithms
* Medium (62.08%)
* Likes:    58
* Dislikes: -
* Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
给定一棵二叉树的根节点 root，返回给定节点 p 和 q 的最近公共祖先（LCA）节点。如果 p 或 q 之一 不存在 于该二叉树中，返回 null。树中的每个节点值都是互不相同的。
根据维基百科中对最近公共祖先节点的定义：“两个节点 p 和 q 在二叉树 T 中的最近公共祖先节点是 后代节点 中既包括 p 又包括 q 的最深节点（我们允许 一个节点为自身的一个后代节点 ）”。一个节点 x 的 后代节点 是节点 x 到某一叶节点间的路径中的节点 y。

示例 1:
输入： root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出： 3
解释： 节点 5 和 1 的共同祖先节点是 3。
示例 2:
输入： root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出： 5
解释： 节点 5 和 4 的共同祖先节点是 5。根据共同祖先节点的定义，一个节点可以是自身的后代节点。
示例 3:
输入： root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 10
输出： null
解释： 节点 10 不存在于树中，所以返回 null。

提示:
树中节点个数的范围是 [1, 104]
-109 <= Node.val <= 109
所有节点的值 Node.val 互不相同
p != q

进阶： 在不检查节点是否存在的情况下，你可以遍历树找出最近公共祖先节点吗？
Hint 1: Traverse the graph visiting root, left, root, right, root to make an Euler Path
Hint 2: Return the node (LCA) that is at the lowest depth between p and q in the Euler Path

```

## Solution

[SourceCode](./solution.js)

## Translation

Given the root of a binary tree, return the LCA of nodes `p` and `q`; if **either p or q does not exist** in the tree, return `null`. All node values are unique; a node counts as its own descendant.

- Example 1: root = [3,5,1,6,2,0,8,null,null,7,4], p=5, q=1 → `3`
- Example 2: p=5, q=4 → `5` (ancestor can be itself)
- Example 3: p=5, q=10 → `null` (10 not in tree)

Constraints: 1–10^4 nodes; unique values; p != q.

## Approach

经典 236 递归加上**存在性计数**:DFS 中每遇到等于 p 或 q 的节点就 `count++` 并返回该节点;左右子树各返回一个命中则当前节点是 LCA,否则透传非空的一侧。

- 与 236 的区别:递归结束后检查 `count === 2`——只有一个存在时返回 null。
- p 是 q 祖先的情形仍正确:先递归子树再自检,q 在 p 子树内已被计数。
