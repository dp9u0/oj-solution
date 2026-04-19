# [2641] Cousins in Binary Tree II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/cousins-in-binary-tree-ii/description/)

* algorithms
* Medium (75.77%)
* Likes:    1230
* Dislikes: 54
* Testcase Example:  '[5,4,9,1,10,null,7]'

```md
Given the root of a binary tree, replace the value of each node in the tree with the sum of all its cousins&#39; values.
Two nodes of a binary tree are cousins if they have the same depth with different parents.
Return the root of the modified tree.
Note that the depth of a node is the number of edges in the path from the root node to it.

Example 1:


Input: root = [5,4,9,1,10,null,7]
Output: [0,0,0,7,7,null,11]
Explanation: The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
- Node with value 5 does not have any cousins so its sum is 0.
- Node with value 4 does not have any cousins so its sum is 0.
- Node with value 9 does not have any cousins so its sum is 0.
- Node with value 1 has a cousin with value 7 so its sum is 7.
- Node with value 10 has a cousin with value 7 so its sum is 7.
- Node with value 7 has cousins with values 1 and 10 so its sum is 11.

Example 2:


Input: root = [3,1,2]
Output: [0,0,0]
Explanation: The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
- Node with value 3 does not have any cousins so its sum is 0.
- Node with value 1 does not have any cousins so its sum is 0.
- Node with value 2 does not have any cousins so its sum is 0.


Constraints:

The number of nodes in the tree is in the range [1, 105].
1 <= Node.val <= 104


```

## 中文翻译

给定二叉树根节点，将每个节点的值替换为其所有堂兄弟节点（同深度不同父节点）的值之和。

## 解题思路

BFS 按层遍历。对每层，先计算该层所有节点的和 levelSum。对每个父节点，其两个子节点的 cousin sum = levelSum - 左子值 - 右子值。逐层处理即可。

## Solution

[SourceCode](./solution.js)
