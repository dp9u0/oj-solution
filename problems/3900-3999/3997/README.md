# [3997] Count Dominant Nodes in a Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-dominant-nodes-in-a-binary-tree/description/)

* algorithms
* Medium (72.44%)
* Likes:    42
* Dislikes: 3
* Testcase Example:  '[5,3,8,2,4,7,1]'

```md
You are given the root of a complete binary tree.
A node x is called dominant if its value is equal to the maximum value among all nodes in the subtree rooted at x.
Return the number of dominant nodes in the tree.

Example 1:


Input: root = [5,3,8,2,4,7,1]
Output: 5
Explanation:

The leaf nodes with values 2, 4, 7, and 1 are dominant.
The node with value 8 is dominant because its value is the maximum value in its subtree [8, 7, 1].
Thus, the answer is 5.


Example 2:


Input: root = [1,2,3,1,2]
Output: 4
Explanation:

The leaf nodes with values 1, 2, and 3 are dominant.
The node with value 2 whose subtree is [2, 1, 2] is dominant because its value is the maximum value in its subtree.
Thus, the answer is 4.



Constraints:

The number of nodes in the tree is in the range [1, 105].
1 <= Node.val <= 109
The tree is guaranteed to be a complete binary tree.


```

## 题目翻译

给你一棵完全二叉树的根节点 `root`。

如果节点 `x` 的值等于以 `x` 为根的子树中所有节点的最大值，则称节点 `x` 为 **主导节点（dominant）**。

返回树中主导节点的数量。

**示例 1：**

输入：`root = [5,3,8,2,4,7,1]`
输出：`5`
解释：值为 2、4、7、1 的叶子节点都是主导节点。值为 8 的节点是主导节点，因为它的值是其子树 `[8,7,1]` 中的最大值。因此答案是 5。

**示例 2：**

输入：`root = [1,2,3,1,2]`
输出：`4`
解释：值为 1、2、3 的叶子节点都是主导节点。值为 2 的节点（子树为 `[2,1,2]`）是主导节点，因为它的值是其子树中的最大值。因此答案是 4。

**提示：**

- 树中节点数在范围 `[1, 10^5]` 内
- `1 <= Node.val <= 10^9`
- 树保证是一棵完全二叉树

## 解题思路

采用**后序遍历（DFS）**自底向上计算每个子树的最大值：

1. 递归函数 `dfs(node)` 返回以 `node` 为根的子树中的最大值。
2. 空节点返回 `-Infinity`（不影响父层取 max）。
3. 当前子树最大值 = `max(node.val, 左子树最大值, 右子树最大值)`。
4. 若 `node.val` 等于该最大值，则该节点是主导节点，计数器加一。
5. 最终返回计数器。

每个节点恰好访问一次，时间复杂度 O(n)，空间复杂度 O(h)（递归栈，h 为树高；完全二叉树 h ≈ log n ≈ 17，不会爆栈）。

## Solution

[SourceCode](./solution.js)
