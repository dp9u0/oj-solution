# [1302] Deepest Leaves Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/deepest-leaves-sum/description/)

* algorithms
* Medium (86.52%)
* Likes:    4841
* Dislikes: 127
* Testcase Example:  '[1,2,3,4,5,null,6,7,null,null,null,null,8]'

```md
Given the root of a binary tree, return the sum of values of its deepest leaves.

Example 1:


Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

Example 2:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19


Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 100


```

## 题目翻译

给定一棵二叉树的根节点，返回其最深层的叶子节点值之和。

## 解题思路

BFS 层序遍历：逐层遍历，每层累加节点值。到最后一层时，累加的和即为答案。用队列实现 BFS，每层开始时重置 sum。

## Solution

[SourceCode](./solution.js)
