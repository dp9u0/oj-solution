# [2876] Count Visited Nodes in a Directed Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/description/)

* algorithms
* Hard (30.44%)
* Likes:    359
* Dislikes: 7
* Testcase Example:  '[1,2,0,0]'

```md
There is a directed graph consisting of n nodes numbered from 0 to n - 1 and n directed edges.
You are given a 0-indexed array edges where edges[i] indicates that there is an edge from node i to node edges[i].
Consider the following process on the graph:

You start from a node x and keep visiting other nodes through edges until you reach a node that you have already visited before on this same process.

Return an array answer where answer[i] is the number of different nodes that you will visit if you perform the process starting from node i.

Example 1:


Input: edges = [1,2,0,0]
Output: [3,3,3,4]
Explanation: We perform the process starting from each node in the following way:
- Starting from node 0, we visit the nodes 0 -> 1 -> 2 -> 0. The number of different nodes we visit is 3.
- Starting from node 1, we visit the nodes 1 -> 2 -> 0 -> 1. The number of different nodes we visit is 3.
- Starting from node 2, we visit the nodes 2 -> 0 -> 1 -> 2. The number of different nodes we visit is 3.
- Starting from node 3, we visit the nodes 3 -> 0 -> 1 -> 2 -> 0. The number of different nodes we visit is 4.

Example 2:


Input: edges = [1,2,3,4,0]
Output: [5,5,5,5,5]
Explanation: Starting from any node we can visit every node in the graph in the process.


Constraints:

n == edges.length
2 <= n <= 105
0 <= edges[i] <= n - 1
edges[i] != i


```

## 中文翻译

给定一个有向图，n 个节点，每个节点恰好有一条出边。edges[i] 表示从节点 i 到 edges[i] 的边。
从节点 x 开始，沿着边不断访问，直到到达一个已经访问过的节点。
返回 answer[i] 表示从节点 i 出发能访问到的不同节点数。

## 解题思路

这是一个内向基环树（functional graph），每个连通分量恰好一个环。
1. 用拓扑排序（不断删除入度为 0 的节点）找出所有环上的节点
2. 对每个环，所有环上节点的答案 = 环的长度
3. 对链上的节点，按拓扑逆序计算：answer[i] = answer[edges[i]] + 1

## Solution

[SourceCode](./solution.js)
