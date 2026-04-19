# [1026] Maximum Difference Between Node and Ancestor

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/)

* algorithms
* Medium (78.14%)
* Likes:    5101
* Dislikes: 171
* Testcase Example:  '[8,3,10,1,6,null,14,null,null,4,7,13]'

```md
Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v =
a.val - b.val
and a is an ancestor of b.
A node a is an ancestor of b if either: any child of a is equal to bor any child of a is an ancestor of b.

Example 1:


Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
8 - 3
= 5
3 - 7
= 4
8 - 1
= 7
10 - 13
= 3
Among all possible differences, the maximum value of 7 is obtained by
8 - 1
= 7.
Example 2:


Input: root = [1,null,2,null,0,3]
Output: 3


Constraints:

The number of nodes in the tree is in the range [2, 5000].
0 <= Node.val <= 105


```

## 翻译

给定二叉树的根节点，找到最大值 `v`，使得存在不同节点 `a` 和 `b`，其中 `v = |a.val - b.val|`，且 `a` 是 `b` 的祖先节点。

## Approach

**DFS 传递路径上的最大最小值。** 从根节点开始 DFS，维护从根到当前节点路径上的最大值和最小值。在叶子节点处计算 `max - min` 即为可能的祖先差。全局取最大值即可。

最大差一定出现在路径上的最大值和最小值之间，因为绝对值差的最大值就是极值之差。

时间复杂度：O(n)，空间复杂度：O(h)

## Solution

[SourceCode](./solution.js)
