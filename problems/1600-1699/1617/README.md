# [1617] Count Subtrees With Max Distance Between Cities

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/description/)

* algorithms
* Hard (67.22%)
* Likes:    575
* Dislikes: 44
* Testcase Example:  '4\n[[1,2],[2,3],[2,4]]'

```md
There are n cities numbered from 1 to n. You are given an array edges of size n-1, where edges[i] = [ui, vi] represents a bidirectional edge between cities ui and vi. There exists a unique path between each pair of cities. In other words, the cities form a tree.
A subtree is a subset of cities where every city is reachable from every other city in the subset, where the path between each pair passes through only the cities from the subset. Two subtrees are different if there is a city in one subtree that is not present in the other.
For each d from 1 to n-1, find the number of subtrees in which the maximum distance between any two cities in the subtree is equal to d.
Return an array of size n-1 where the dth element (1-indexed) is the number of subtrees in which the maximum distance between any two cities is equal to d.
Noticethatthe distance between the two cities is the number of edges in the path between them.

Example 1:


Input: n = 4, edges = [[1,2],[2,3],[2,4]]
Output: [3,4,0]
Explanation:
The subtrees with subsets {1,2}, {2,3} and {2,4} have a max distance of 1.
The subtrees with subsets {1,2,3}, {1,2,4}, {2,3,4} and {1,2,3,4} have a max distance of 2.
No subtree has two nodes where the max distance between them is 3.

Example 2:

Input: n = 2, edges = [[1,2]]
Output: [1]

Example 3:

Input: n = 3, edges = [[1,2],[2,3]]
Output: [2,1]


Constraints:

2 <= n <= 15
edges.length == n-1
edges[i].length == 2
1 <= ui, vi <= n
All pairs (ui, vi) are distinct.


```

## 题目翻译

n个城市形成一棵树。子树是城市子集，其中任意两个城市之间的路径只经过子集中的城市。对d从1到n-1，求最大距离恰好为d的子树数量。

## 解题思路

n<=15，枚举所有2^15=32768个子集。对每个子集：检查是否连通（是合法子树），若连通则用BFS/Floyd求直径（最大距离）。用bitmask枚举子集，BFS检查连通性并计算直径。

## Solution

[SourceCode](./solution.js)
