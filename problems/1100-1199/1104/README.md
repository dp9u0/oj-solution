# [1104] Path In Zigzag Labelled Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/description/)

* algorithms
* Medium (75.73%)
* Likes:    1548
* Dislikes: 331
* Testcase Example:  '14'

```md
In an infinite binary tree where every node has two children, the nodes are labelled in row order.
In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.

Given the label of a node in this tree, return the labels in the path from the root of the tree to thenode with that label.

Example 1:

Input: label = 14
Output: [1,3,4,14]

Example 2:

Input: label = 26
Output: [1,2,6,10,26]


Constraints:

1 <= label <= 10^6


```

## 翻译

无限完全二叉树中，奇数行从左到右编号，偶数行从右到左编号。给定节点标签，返回从根到该节点的路径。

## Approach

关键是将 zigzag 编号转换为正常二叉树编号。对于深度 d（2^d ≤ label < 2^(d+1)），若 d 为偶数正常编号即 zigzag 编号；若 d 为奇数，normal = 3×2^d - 1 - zigzag。每步先转正常编号找父节点 floor(normal/2)，再转回 zigzag 编号，直到根节点。

## Solution

[SourceCode](./solution.js)
