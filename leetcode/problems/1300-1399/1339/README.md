# [1339] Maximum Product of Splitted Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/description/)

* algorithms
* Medium (55.66%)
* Likes:    3581
* Dislikes: 122
* Testcase Example:  '[1,2,3,4,5,6]'

```md
Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.
Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7.
Note that you need to maximize the answer before taking the mod and not after taking it.

Example 1:


Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)

Example 2:


Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation: Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)


Constraints:

The number of nodes in the tree is in the range [2, 5 * 104].
1 <= Node.val <= 104


```

## 中文翻译

给定二叉树根节点，删除一条边将树分成两棵子树，使两棵子树节点之和的乘积最大。结果对 10^9+7 取模。注意要先取最大值再取模。

## 解题思路

DFS 计算每个子树的和，收集所有子树和。总树和 total 已知后，对每个子树和 s，乘积为 s * (total - s)。用 BigInt 避免溢出，取最大值后取模。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
