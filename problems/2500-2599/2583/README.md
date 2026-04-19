# [2583] Kth Largest Sum in a Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/description/)

* algorithms
* Medium (58.98%)
* Likes:    1080
* Dislikes: 40
* Testcase Example:  '[5,8,9,2,1,3,7,4,6]\n2'

```md
You are given the root of a binary tree and a positive integer k.
The level sum in the tree is the sum of the values of the nodes that are on the same level.
Return the kth largest level sum in the tree (not necessarily distinct). If there are fewer than k levels in the tree, return -1.
Note that two nodes are on the same level if they have the same distance from the root.

Example 1:


Input: root = [5,8,9,2,1,3,7,4,6], k = 2
Output: 13
Explanation: The level sums are the following:
- Level 1: 5.
- Level 2: 8 + 9 = 17.
- Level 3: 2 + 1 + 3 + 7 = 13.
- Level 4: 4 + 6 = 10.
The 2nd largest level sum is 13.

Example 2:


Input: root = [1,2,null,3], k = 1
Output: 3
Explanation: The largest level sum is 3.


Constraints:

The number of nodes in the tree is n.
2 <= n <= 105
1 <= Node.val <= 106
1 <= k <= n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定二叉树根节点和正整数 k，返回第 k 大的层和。如果层数少于 k 则返回 -1。

## 解题思路

**BFS 层序遍历**

用队列做层序遍历，计算每层的节点值之和，收集所有层和后排序，取第 k 大。

时间复杂度 O(n log n)，空间复杂度 O(n)。
