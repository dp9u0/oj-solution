# [2096] Step-By-Step Directions From a Binary Tree Node to Another

## Description

[LeetCode Problem Description](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/description/)

* algorithms
* Medium (56.42%)
* Likes:    3263
* Dislikes: 171
* Testcase Example:  '[5,1,2,3,null,6,4]\n3\n6'

```md
You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.
Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters &#39;L&#39;, &#39;R&#39;, and &#39;U&#39;. Each letter indicates a specific direction:

&#39;L&#39; means to go from a node to its left child node.
&#39;R&#39; means to go from a node to its right child node.
&#39;U&#39; means to go from a node to its parent node.

Return the step-by-step directions of the shortest path from node s to node t.

Example 1:


Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
Output: 'UURL'
Explanation: The shortest path is: 3 &rarr; 1 &rarr; 5 &rarr; 2 &rarr; 6.

Example 2:


Input: root = [2,1], startValue = 2, destValue = 1
Output: 'L'
Explanation: The shortest path is: 2 &rarr; 1.


Constraints:

The number of nodes in the tree is n.
2 <= n <= 105
1 <= Node.val <= n
All the values in the tree are unique.
1 <= startValue, destValue <= n
startValue != destValue


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定二叉树根节点、起点值 startValue 和终点值 destValue。找到从起点到终点的最短路径，返回由 'L'、'R'、'U' 组成的方向字符串（L=左子节点，R=右子节点，U=父节点）。

## 解题思路

找 LCA（最近公共祖先）。从根分别找到到 start 和 dest 的路径，去除公共前缀后，start 路径剩余部分全部替换为 'U'，拼接 dest 路径剩余部分即为答案。O(n)。
