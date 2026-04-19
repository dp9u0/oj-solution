# [3425] Longest Special Path

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-special-path/description/)

* algorithms
* Hard (22.58%)
* Likes:    126
* Dislikes: 18
* Testcase Example:  '[[0,1,2],[1,2,3],[1,3,5],[1,4,4],[2,5,6]]\n[2,1,2,1,3,1]'

```md
You are given an undirected tree rooted at node 0 with n nodes numbered from 0 to n - 1, represented by a 2D array edges of length n - 1, where edges[i] = [ui, vi, lengthi] indicates an edge between nodes ui and vi with length lengthi. You are also given an integer array nums, where nums[i] represents the value at node i.
A special path is defined as a downward path from an ancestor node to a descendant node such that all the values of the nodes in that path are unique.
Note that a path may start and end at the same node.
Return an array result of size 2, where result[0] is the length of the longest special path, and result[1] is the minimum number of nodes in all possible longest special paths.

Example 1:

Input: edges = [[0,1,2],[1,2,3],[1,3,5],[1,4,4],[2,5,6]], nums = [2,1,2,1,3,1]
Output: [6,2]
Explanation:
In the image below, nodes are colored by their corresponding values in nums

The longest special paths are 2 -> 5 and 0 -> 1 -> 4, both having a length of 6. The minimum number of nodes across all longest special paths is 2.

Example 2:

Input: edges = [[1,0,8]], nums = [2,2]
Output: [0,1]
Explanation:

The longest special paths are 0 and 1, both having a length of 0. The minimum number of nodes across all longest special paths is 1.


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

## 翻译

给定以 0 为根的树和节点值数组 nums。特殊路径是祖先到后代的向下路径，路径上节点值全不相同。返回最长特殊路径长度和对应的最少节点数。

## 解题思路

迭代 DFS + 滑动窗口。维护根到当前节点的深度数组 depth。用 lastSeen 记录每个值最后出现的位置，left 为窗口左边界。遇到重复值时移动 left。回溯时恢复 lastSeen 和 left。时间 O(n)。

## Solution

[SourceCode](./solution.js)
