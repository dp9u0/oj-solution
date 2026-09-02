# [LCR 047] 二叉树剪枝

## Description


```md
https://leetcode.cn/problems/pOCWxh/description/
* algorithms
* Medium (67.43%)
* Likes:    94
* Dislikes: -
* Testcase Example:  '[1,null,0,0,1]'
给定一个二叉树 根节点 root ，树的每个节点的值要么是 0，要么是 1。请剪除该二叉树中所有节点的值为 0 的子树。
节点 node 的子树为 node 本身，以及所有 node 的后代。

示例 1：
输入: [1,null,0,0,1]
输出: [1,null,0,null,1]
解释:
只有红色节点满足条件“所有不包含 1 的子树”。
右图为返回的答案。
示例 2：
输入: [1,0,1,0,0,0,1]
输出: [1,null,1,null,1]
解释:
示例 3：
输入: [1,1,0,1,1,0,1,0]
输出: [1,1,0,1,1,null,1]
解释:

提示：
二叉树的节点个数的范围是 [1,200]
二叉树节点的值只会是 0 或 1

注意：本题与主站 814 题相同：https://leetcode.cn/problems/binary-tree-pruning/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given the `root` of a binary tree, where the value of every node is either `0` or `1`, prune the tree so that every subtree not containing a `1` is removed.

The subtree of a node `node` is `node` itself, together with all descendants of `node`.

**Example 1:** Input `[1,null,0,0,1]` → Output `[1,null,0,null,1]`
**Example 2:** Input `[1,0,1,0,0,0,1]` → Output `[1,null,1,null,1]`
**Example 3:** Input `[1,1,0,1,1,0,1,0]` → Output `[1,1,0,1,1,null,1]`

**Constraints:**
- The number of nodes in the tree is in `[1, 200]`.
- Node values are only `0` or `1`.

Note: This problem is the same as LeetCode 814 on the main site.

---

## Approach

A subtree should be removed iff it contains **no node with value 1**. Using a bottom-up (post-order) helper `containsOne(node)`:

- If `node` is `null`, it contains no 1 → `false`.
- Recurse on children, pruning each child to `null` if it contains no 1.
- The node itself survives iff its own value is `1`, or either surviving child contains a 1.

Return the pruned root (which may become `null` if the whole tree contained no 1).

Complexity: `O(n)` time, `O(h)` recursion space.
