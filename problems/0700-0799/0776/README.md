# [776] 拆分二叉搜索树

## Description


```md
https://leetcode.cn/problems/split-bst/description/
* algorithms
* Medium (59.35%)
* Likes:    143
* Dislikes: -
* Testcase Example:  '[4,2,6,1,3,5,7]\n2'
给你一棵二叉搜索树（BST）的根结点 root 和一个整数 target 。请将该树按要求拆分为两个子树：其中第一个子树结点的值都必须小于等于给定的目标值；另一个子树结点的值都必须大于目标值；树中并非一定要存在值为 target 的结点。
除此之外，树中大部分结构都需要保留，也就是说原始树中父节点 p 的任意子节点 c ，假如拆分后它们仍在同一个子树中，那么结点 p 应仍为 c 的父结点。
按顺序返回 两个子树的根结点的数组 。

示例 1：
输入：root = [4,2,6,1,3,5,7], target = 2
输出：[[2,1],[4,3,6,null,null,5,7]]
示例 2:
输入: root = [1], target = 1
输出: [[1],[]]

提示：
二叉搜索树节点个数在 [1, 50] 范围内
0 <= Node.val, target <= 1000
Hint 1: Use recursion.  If root.val <= V, you split root.right into two halves, then join it's left half back on root.right.

```

## Solution

[SourceCode](./solution.js)

## Translation

Split a BST into two trees by target: the first contains all nodes ≤ target, the second all nodes > target, preserving as much of the original parent-child structure as possible. Return [root1, root2].

- Example: [4,2,6,1,3,5,7], target = 2 → `[[2,1],[4,3,6,null,null,5,7]]`

## Approach

**递归**。递归 splitBST(root) 返回 [≤ 部分根, > 部分根]:
- root.val ≤ target:递归拆 root.right 得 [L, R],把 L 接回 root.right(原父子关系保留),返回 [root, R];
- root.val > target:递归拆 root.left 得 [L, R],把 R 接回 root.left,返回 [L, root]。
BST 性质保证 L 的所有值 ≤ target < R 的所有值且均来自原树。O(树高) 递归深度,O(n) 最坏。
