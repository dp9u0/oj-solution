# [3486] Longest Special Path II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-special-path-ii/description/)

* algorithms
* Hard (18.99%)
* Likes:    33
* Dislikes: 6
* Testcase Example:  '[[0,1,1],[1,2,3],[1,3,1],[2,4,6],[4,7,2],[3,5,2],[3,6,5],[6,8,3]]\n' +

```md
'[1,1,0,3,1,2,1,1,0]'
You are given an undirected tree rooted at node 0, with n nodes numbered from 0 to n - 1. This is represented by a 2D array edges of length n - 1, where edges[i] = [ui, vi, lengthi] indicates an edge between nodes ui and vi with length lengthi. You are also given an integer array nums, where nums[i] represents the value at node i.
A special path is defined as a downward path from an ancestor node to a descendant node in which all node values are distinct, except for at most one value that may appear twice.
Return an array result of size 2, where result[0] is the length of the longest special path, and result[1] is the minimum number of nodes in all possible longest special paths.

Example 1:

Input: edges = [[0,1,1],[1,2,3],[1,3,1],[2,4,6],[4,7,2],[3,5,2],[3,6,5],[6,8,3]], nums = [1,1,0,3,1,2,1,1,0]
Output: [9,3]
Explanation:
In the image below, nodes are colored by their corresponding values in nums.

The longest special paths are 1 -> 2 -> 4 and 1 -> 3 -> 6 -> 8, both having a length of 9. The minimum number of nodes across all longest special paths is 3.

Example 2:

Input: edges = [[1,0,3],[0,2,4],[0,3,5]], nums = [1,1,0,2]
Output: [5,2]
Explanation:

The longest path is 0 -> 3 consisting of 2 nodes with a length of 5.


Constraints:

2 <= n <= 5 * 104
edges.length == n - 1
edges[i].length == 3
0 <= ui, vi < n
1 <= lengthi <= 103
nums.length == n
0 <= nums[i] <= 5 * 104
The input is generated such that edges represents a valid tree.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一棵以节点 0 为根的无向树（edges = [u, v, length]）和节点值数组 nums。一条"特殊路径"是从祖先到后代的向下路径，路径上所有节点值互不相同，但最多允许一个值出现两次。返回 [最长特殊路径长度, 最长路径中最少节点数]。

## 解题思路

DFS 遍历树，维护根到当前节点的路径。用滑动窗口维护有效区间 [left, d]，追踪每个值的出现深度。维护 dupVal（当前窗口中出现两次的值）和 left（左边界）。遇到第三次出现时移动 left，遇到第二个重复值时移除旧重复值。对每个节点计算路径长度和节点数，更新答案。用迭代 DFS 避免栈溢出。O(n)。
