# [2331] Evaluate Boolean Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/evaluate-boolean-binary-tree/description/)

* algorithms
* Easy (82.41%)
* Likes:    1551
* Dislikes: 44
* Testcase Example:  '[2,1,3,null,null,0,1]'

```md
You are given the root of a full binary tree with the following properties:

Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.

The evaluation of a node is as follows:

If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
Otherwise, evaluate the node&#39;s two children and apply the boolean operation of its value with the children&#39;s evaluations.

Return the boolean result of evaluating the root node.
A full binary tree is a binary tree where each node has either 0 or 2 children.
A leaf node is a node that has zero children.

Example 1:


Input: root = [2,1,3,null,null,0,1]
Output: true
Explanation: The above diagram illustrates the evaluation process.
The AND node evaluates to False AND True = False.
The OR node evaluates to True OR False = True.
The root node evaluates to True, so we return true.
Example 2:

Input: root = [0]
Output: false
Explanation: The root node is a leaf node and it evaluates to false, so we return false.


Constraints:

The number of nodes in the tree is in the range [1, 1000].
0 <= Node.val <= 3
Every node has either 0 or 2 children.
Leaf nodes have a value of 0 or 1.
Non-leaf nodes have a value of 2 or 3.


```

## 翻译

给定一棵满二叉树，叶子节点值为 0(False) 或 1(True)，非叶子节点值为 2(OR) 或 3(AND)。求根节点的布尔求值结果。

## Approach

DFS 递归。叶子节点直接返回 val === 1。非叶子节点根据 val 为 2(OR) 或 3(AND) 对左右子树结果做逻辑运算。

时间复杂度 O(n)，空间复杂度 O(h)。

## Solution

[SourceCode](./solution.js)
