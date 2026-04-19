# [3378] Count Connected Components in LCM Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-connected-components-in-lcm-graph/description/)

* algorithms
* Hard (30.89%)
* Likes:    84
* Dislikes: 2
* Testcase Example:  '[2,4,8,3,9]\n5'

```md
You are given an array of integers nums of size n and a positive integer threshold.
There is a graph consisting of n nodes with theithnode having a value of nums[i]. Two nodes i and j in the graph are connected via an undirected edge if lcm(nums[i], nums[j]) <= threshold.
Return the number of connected components in this graph.
A connected component is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.
The term lcm(a, b) denotes the least common multiple of a and b.

Example 1:

Input: nums = [2,4,8,3,9], threshold = 5
Output: 4
Explanation:


The four connected components are (2, 4), (3), (8), (9).

Example 2:

Input: nums = [2,4,8,3,9,12], threshold = 10
Output: 2
Explanation:

The two connected components are (2, 3, 4, 8, 9), and (12).


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
All elements of nums are unique.
1 <= threshold <= 2 * 105


```

## 题目翻译

给定整数数组 nums 和正整数 threshold。n 个节点，第 i 个节点值为 nums[i]。若 lcm(nums[i], nums[j]) ≤ threshold，则节点 i 和 j 之间有无向边。返回图中连通分量数。

## 解题思路

**倍数枚举 + 并查集**

- 关键观察：若 a | L 且 b | L，则 lcm(a, b) | L ≤ threshold，即 a、b 连通
- 对每个 nums[i] ≤ threshold，枚举其所有倍数 m（a, 2a, 3a, ... ≤ threshold）
- 对每个 m，用 firstDivisor[m] 记录第一个访问到该倍数的节点索引，后续访问到的节点与之 union
- nums[i] > threshold 的节点为孤立点
- 最终统计并查集的连通分量数

## Solution

[SourceCode](./solution.js)
