# [1361] Validate Binary Tree Nodes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/validate-binary-tree-nodes/description/)

* algorithms
* Medium (44.09%)
* Likes:    2255
* Dislikes: 525
* Testcase Example:  '4\n[1,-1,3,-1]\n[2,-1,-1,-1]'

```md
You have n binary tree nodes numbered from 0 to n - 1 where node i has two children leftChild[i] and rightChild[i], return true if and only if all the given nodes form exactly one valid binary tree.
If node i has no left child then leftChild[i] will equal -1, similarly for the right child.
Note that the nodes have no values and that we only use the node numbers in this problem.

Example 1:


Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
Output: true

Example 2:


Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
Output: false

Example 3:


Input: n = 2, leftChild = [1,0], rightChild = [-1,-1]
Output: false


Constraints:

n == leftChild.length == rightChild.length
1 <= n <= 104
-1 <= leftChild[i], rightChild[i] <= n - 1


```

## 中文翻译

给定 n 个节点（编号 0~n-1），leftChild[i] 和 rightChild[i] 表示节点 i 的左右子节点（-1 表示无）。判断这些节点是否能恰好组成一棵合法的二叉树。

## 解题思路

合法二叉树条件：有且仅有一个根节点（入度为 0），其余节点入度恰好为 1，且从根节点 BFS 能访问到所有节点。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
