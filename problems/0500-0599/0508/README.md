# [508] Most Frequent Subtree Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/most-frequent-subtree-sum/description/)

* algorithms
* Medium (69.10%)
* Likes:    2375
* Dislikes: 334
* Testcase Example:  '[5,2,-3]'

```md
Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.
The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

Example 1:


Input: root = [5,2,-3]
Output: [2,-3,4]

Example 2:


Input: root = [5,2,-5]
Output: [2]


Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105


```

## 题目翻译

给定二叉树根节点，返回出现频率最高的子树和。若有多个频率相同，返回所有（顺序不限）。子树和 = 以该节点为根的子树所有节点值之和。

## 解题思路

**DFS + HashMap**

1. DFS 递归计算每个节点的子树和
2. 用 HashMap 统计每个和出现的频率
3. 找到最大频率，收集所有达到该频率的和

## Solution

[SourceCode](./solution.js)
