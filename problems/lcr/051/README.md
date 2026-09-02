# [LCR 051] 二叉树中的最大路径和

## Description


```md
https://leetcode.cn/problems/jC7MId/description/
* algorithms
* Hard (48.61%)
* Likes:    116
* Dislikes: -
* Testcase Example:  '[1,2,3]'
路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
路径和 是路径中各节点值的总和。
给定一个二叉树的根节点 root ，返回其 最大路径和，即所有路径上节点值之和的最大值。

示例 1：
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
示例 2：
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42

提示：
树中节点数目范围是 [1, 3 * 104]
-1000 <= Node.val <= 1000

注意：本题与主站 124 题相同： https://leetcode.cn/problems/binary-tree-maximum-path-sum/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A **path** goes from any node along parent-child links to any node (each node at most once; ≥1 node). Path sum = sum of node values. Return the maximum path sum in the binary tree.

**Example:** `[1,2,3]` → 6; `[-10,9,20,null,null,15,7]` → 42.

**Constraints:** ≤ 3e4 nodes, values ±1000. Note: same as LeetCode 124.

---

## Approach

Recursive `gain(node)` = maximum sum of a downward path starting at node = `node.val + max(0, gain(left)) + max(0, gain(right))` can't exceed one branch; actually `gain(node)` returns best single branch `node.val + max(0, gain(left), gain(right))`. Global best considers bending through node: `node.val + max(0, leftGain) + max(0, rightGain)`.

Complexity: `O(n)`.
