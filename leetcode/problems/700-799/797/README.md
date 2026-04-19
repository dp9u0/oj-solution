# [797] All Paths From Source to Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/all-paths-from-source-to-target/description/)

* algorithms
* Medium (83.58%)
* Likes:    7641
* Dislikes: 153
* Testcase Example:  '[[1,2],[3],[3],[]]'

```md
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.
The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Example 1:


Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Example 2:


Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]


Constraints:

n == graph.length
2 <= n <= 15
0 <= graph[i][j] < n
graph[i][j] != i (i.e., there will be no self-loops).
All the elements of graph[i] are unique.
The input graph is guaranteed to be a DAG.


```

## 题目翻译

给定有向无环图的邻接表，返回从节点 0 到节点 n-1 的所有可能路径。

## 解题思路

DFS 回溯，从节点 0 出发，每步走到邻居节点，到达 n-1 时记录路径。DAG 无需 visited 标记。

## Solution

[SourceCode](./solution.js)
