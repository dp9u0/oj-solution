# [663] 均匀树划分

## Description


```md
https://leetcode.cn/problems/equal-tree-partition/description/
* algorithms
* Medium (42.41%)
* Likes:    65
* Dislikes: -
* Testcase Example:  '[5,10,10,null,null,2,3]'
给你一棵二叉树的根节点 root，如果你可以通过去掉原始树上的一条边将树分成两棵节点值之和相等的子树，则返回 true。

示例 1：
输入：root = [5,10,10,null,null,2,3]
输出：true
示例 2：
输入：root = [1,2,10,null,null,2,20]
输出：false
解释：在树上移除一条边无法将树分成两棵节点值之和相等的子树。

提示：
树中节点数目在 [1, 104] 范围内。
-105 <= Node.val <= 105

```

## Solution

[SourceCode](./solution.js)

## Translation

Return true if removing one edge splits the tree into two subtrees of equal sum.

- Example 1: [5,10,10,null,null,2,3] → `true` (right subtree sums to 15 = half of 30)
- Example 2: [1,2,10,null,null,2,20] → `false`

Constraints: 1–10^4 nodes; values in ±10^5.

## Approach

**子树和 + 集合查询**。后序 DFS 收集每个节点的子树和(含根),弹出根的总和 total 后,若某个非根子树和 S 满足 `2S == total` 即可切分。注意 total 为奇数直接 false;必须排除根自身的和(根上方没有边可切)。O(n)。
