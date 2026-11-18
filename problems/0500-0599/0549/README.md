# [549] 二叉树最长连续序列 II

## Description


```md
https://leetcode.cn/problems/binary-tree-longest-consecutive-sequence-ii/description/
* algorithms
* Medium (47.41%)
* Likes:    172
* Dislikes: -
* Testcase Example:  '[1,2,3]'
给定二叉树的根 root ，返回树中最长连续路径的长度。
连续路径是路径中相邻节点的值相差 1 的路径。此路径可以是增加或减少。
例如， [1,2,3,4] 和 [4,3,2,1] 都被认为有效，但路径 [1,2,4,3] 无效。
另一方面，路径可以是子-父-子顺序，不一定是父子顺序。

示例 1:
输入: root = [1,2,3]
输出: 2
解释: 最长的连续路径是 [1, 2] 或者 [2, 1]。

示例 2:
输入: root = [2,1,3]
输出: 3
解释: 最长的连续路径是 [1, 2, 3] 或者 [3, 2, 1]。

提示：
树上所有节点的值都在 [1, 3 * 104] 范围内。
-3 * 104 <= Node.val <= 3 * 104

```

## Solution

[SourceCode](./solution.js)

## Translation

Longest consecutive path in a binary tree: adjacent node values differ exactly by 1, path may increase or decrease, and may go child→parent→child ("V" shape through a node).

- Example 1: [1,2,3] → `2`
- Example 2: [2,1,3] → `3` ([1,2,3] through node 2)

## Approach

**树形 DP**:每节点返回 `(inc, dec)` = 以它为端点、向下延伸的最长递增/递减链长:

- 子孩子 child:`child.val + 1 == node.val` → `inc = max(inc, child.inc + 1)`;`child.val - 1 == node.val` → 同理更新 dec。
- 经过 node 的最长路径 = `inc + dec - 1`(node 只算一次),全局取最大。

O(n) 一遍 DFS。
