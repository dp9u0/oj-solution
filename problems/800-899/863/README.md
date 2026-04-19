# [863] All Nodes Distance K in Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/)

* algorithms
* Medium (67.56%)
* Likes:    12127
* Dislikes: 276
* Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n2'

```md
Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.
You can return the answer in any order.

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.

Example 2:

Input: root = [1], target = 1, k = 3
Output: []


Constraints:

The number of nodes in the tree is in the range [1, 500].
0 <= Node.val <= 500
All the values Node.val are unique.
target is the value of one of the nodes in the tree.
0 <= k <= 1000


```

## 翻译

给定二叉树的根节点 `root`、目标节点 `target` 和整数 `k`，返回所有距离 `target` 为 `k` 的节点值。可以以任意顺序返回。

## Approach

先 DFS 建立父节点映射（将树视为无向图），然后从 target 出发做 BFS，向左子、右子、父节点三个方向扩展，第 k 层的所有节点即为答案。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
