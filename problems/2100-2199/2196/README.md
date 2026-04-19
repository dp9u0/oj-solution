# [2196] Create Binary Tree From Descriptions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/create-binary-tree-from-descriptions/description/)

* algorithms
* Medium (81.71%)
* Likes:    1661
* Dislikes: 40
* Testcase Example:  '[[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]'

```md
You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,

If isLefti == 1, then childi is the left child of parenti.
If isLefti == 0, then childi is the right child of parenti.

Construct the binary tree described by descriptions and return its root.
The test cases will be generated such that the binary tree is valid.

Example 1:


Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
Output: [50,20,80,15,17,19]
Explanation: The root node is the node with value 50 since it has no parent.
The resulting binary tree is shown in the diagram.

Example 2:


Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]
Output: [1,2,null,null,3,4]
Explanation: The root node is the node with value 1 since it has no parent.
The resulting binary tree is shown in the diagram.


Constraints:

1 <= descriptions.length <= 104
descriptions[i].length == 3
1 <= parenti, childi <= 105
0 <= isLefti <= 1
The binary tree described by descriptions is valid.


```

## 翻译

给定二维数组 descriptions，每项 [parent, child, isLeft] 表示 parent 是 child 的父节点，isLeft=1 为左孩子，isLeft=0 为右孩子。根据描述构造二叉树并返回根节点。

## Approach

用 Map 存储节点，Set 记录所有子节点。遍历 descriptions 创建/获取节点并连接父子关系。根节点是唯一不出现在子节点集合中的节点。

## Solution

[SourceCode](./solution.js)
