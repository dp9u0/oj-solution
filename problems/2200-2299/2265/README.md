# [2265] Count Nodes Equal to Average of Subtree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/description/)

* algorithms
* Medium (86.75%)
* Likes:    2363
* Dislikes: 59
* Testcase Example:  '[4,8,5,0,1,null,6]'

```md
Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.
Note:

The average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
A subtree of root is a tree consisting of root and all of its descendants.


Example 1:


Input: root = [4,8,5,0,1,null,6]
Output: 5
Explanation:
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6.

Example 2:


Input: root = [1]
Output: 1
Explanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.


Constraints:

The number of nodes in the tree is in the range [1, 1000].
0 <= Node.val <= 1000


```

## 翻译

给定二叉树根节点，返回节点值等于其子树平均值（向下取整）的节点个数。

## Approach

DFS 后序遍历。每个节点返回子树的 [sum, count]，计算平均值并比较。

时间复杂度 O(n)，空间复杂度 O(h)。

## Solution

[SourceCode](./solution.js)
