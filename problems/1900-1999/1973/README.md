# [1973] 值等于子节点值之和的节点数量

## Description


```md
https://leetcode.cn/problems/count-nodes-equal-to-sum-of-descendants/description/
* algorithms
* Medium (44.57%)
* Likes:    8
* Dislikes: -
* Testcase Example:  '[10,3,4,2,1]'
给定一颗二叉树的根节点 root ，返回满足条件：节点的值等于该节点所有子节点的值之和 的节点的数量。
一个节点 x 的 子节点 是指从节点 x 出发，到所有叶子节点路径上的节点。没有子节点的节点的子节点和视为 0 。

示例 1:
输入: root = [10,3,4,2,1]
输出: 2
解释:
对于值为10的节点: 其子节点之和为： 3+4+2+1 = 10。
对于值为3的节点：其子节点之和为： 2+1 = 3。
示例 2:
输入: root = [2,3,null,2,null]
输出: 0
解释:
没有节点满足其值等于子节点之和。
示例 3:
输入: root = [0]
输出: 1
解释:
对于值为0的节点：因为它没有子节点，所以自己点之和为0。

提示：
树中节点的数量范围： [1, 105]
0 <= Node.val <= 105
Hint 1: Can we reuse previously calculated information?
Hint 2: How can we calculate the sum of the current subtree using the sum of the child's subtree?

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given the root of a binary tree, return the number of nodes whose value equals the sum of all their descendant values. A node with no children has a descendant sum of 0.

Example 1:
Input: root = [10,3,4,2,1]
Output: 2
(10 == 3+4+2+1, and 3 == 2+1)

Example 2:
Input: root = [2,3,null,2,null]
Output: 0

Example 3:
Input: root = [0]
Output: 1

Constraints: number of nodes in [1, 10^5], 0 <= Node.val <= 10^5.

## Approach

Post-order DFS: each call returns the total sum of its subtree (`val + sumLeft + sumRight`). A node qualifies when `val == sumLeft + sumRight` (descendant sum, excluding itself — a leaf qualifies iff `val == 0`). Count during the traversal.

Time O(n), space O(height) for recursion. Iterative stack used to avoid deep-recursion issues on skewed trees.
