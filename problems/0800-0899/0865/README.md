# [865] Smallest Subtree with all the Deepest Nodes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/description/)

* algorithms
* Medium (77.56%)
* Likes:    3262
* Dislikes: 404
* Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]'

```md
Given the root of a binary tree, the depth of each node is the shortest distance to the root.
Return the smallest subtree such that it contains all the deepest nodes in the original tree.
A node is called the deepest if it has the largest depth possible among any node in the entire tree.
The subtree of a node is a tree consisting of that node, plus the set of all descendants of that node.

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation: We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest nodes of the tree.
Notice that nodes 5, 3 and 2 contain the deepest nodes in the tree but node 2 is the smallest subtree among them, so we return it.

Example 2:

Input: root = [1]
Output: [1]
Explanation: The root is the deepest node in the tree.

Example 3:

Input: root = [0,1,3,null,2]
Output: [2]
Explanation: The deepest node in the tree is 2, the valid subtrees are the subtrees of nodes 2, 1 and 0 but the subtree of node 2 is the smallest.


Constraints:

The number of nodes in the tree will be in the range [1, 500].
0 <= Node.val <= 500
The values of the nodes in the tree are unique.


Note: This question is the same as 1123: https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/

```

## 中文翻译

给定一棵二叉树的根节点，每个节点的深度是该节点到根节点的最短距离。
返回包含所有最深节点的最小子树。
最深节点是指在整棵树中具有最大深度的节点。
一个节点的子树是由该节点及其所有后代组成的树。

## 解题思路

DFS 后序遍历，返回每个子树的深度和该子树中包含最深节点的 LCA。
- 如果左右子树深度相同，当前节点就是 LCA
- 如果左子树更深，返回左子树的结果
- 如果右子树更深，返回右子树的结果
递归到根时即可得到答案。

## Solution

[SourceCode](./solution.js)
