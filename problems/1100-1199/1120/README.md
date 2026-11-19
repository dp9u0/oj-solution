# [1120] 子树的最大平均值

## Description


```md
https://leetcode.cn/problems/maximum-average-subtree/description/
* algorithms
* Medium (66.29%)
* Likes:    78
* Dislikes: -
* Testcase Example:  '[5,6,1]'
给你一棵二叉树的根节点 root，找出这棵树的 每一棵 子树的 平均值 中的 最大 值。
子树是树中的任意节点和它的所有后代构成的集合。
树的平均值是树中节点值的总和除以节点数。

示例：
输入：[5,6,1]
输出：6.00000
解释：
以 value = 5 的节点作为子树的根节点，得到的平均值为 (5 + 6 + 1) / 3 = 4。
以 value = 6 的节点作为子树的根节点，得到的平均值为 6 / 1 = 6。
以 value = 1 的节点作为子树的根节点，得到的平均值为 1 / 1 = 1。
所以答案取最大值 6。

提示：
树中的节点数介于 1 到 5000之间。
每个节点的值介于 0 到 100000 之间。
如果结果与标准答案的误差不超过 10^-5，那么该结果将被视为正确答案。
Hint 1: Can you find the sum of values and the number of nodes for every sub-tree ?
Hint 2: Can you find the sum of values and the number of nodes for a sub-tree given the sum of values and the number of nodes of it's left and right sub-trees ?
Hint 3: Use depth first search to recursively find the solution for the children of a node then use their solutions to compute the current node's solution.

```

## Solution

[SourceCode](./solution.js)

## Translation

Return the maximum average (sum/nodes) over all subtrees of a binary tree. Values 0..100000, error tolerance 1e-5.

- Example: [5,6,1] → `6` (leaf 6 alone)

## Approach

**后序 DFS**。递归返回 [子树和, 子树节点数],当前均值 sum/cnt 与全局 best 比较。节点值非负故 best 初始化 -1 安全。O(n)。
