# [928] Minimize Malware Spread II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-malware-spread-ii/description/)

* algorithms
* Hard (45.57%)
* Likes:    709
* Dislikes: 92
* Testcase Example:  '[[1,1,0],[1,1,0],[0,0,1]]\n[0,1]'

```md
You are given a network of n nodes represented as an n x n adjacency matrix graph, where the ith node is directly connected to the jth node if graph[i][j] == 1.
Some nodes initial are initially infected by malware. Whenever two nodes are directly connected, and at least one of those two nodes is infected by malware, both nodes will be infected by malware. This spread of malware will continue until no more nodes can be infected in this manner.
Suppose M(initial) is the final number of nodes infected with malware in the entire network after the spread of malware stops.
We will remove exactly one node from initial, completely removing it and any connections from this node to any other node.
Return the node that, if removed, would minimize M(initial). If multiple nodes could be removed to minimize M(initial), return such a node with the smallest index.

Example 1:
Input: graph = [[1,1,0],[1,1,0],[0,0,1]], initial = [0,1]
Output: 0
Example 2:
Input: graph = [[1,1,0],[1,1,1],[0,1,1]], initial = [0,1]
Output: 1
Example 3:
Input: graph = [[1,1,0,0],[1,1,1,0],[0,1,1,1],[0,0,1,1]], initial = [0,1]
Output: 1


Constraints:

n == graph.length
n == graph[i].length
2 <= n <= 300
graph[i][j] is 0 or 1.
graph[i][j] == graph[j][i]
graph[i][i] == 1
1 <= initial.length <n
0 <= initial[i] <= n - 1
All the integers in initial are unique.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 n 个节点的邻接矩阵 graph 和初始感染节点 initial。感染规则：如果两个节点直接相连且至少一个被感染，则两个都被感染。现在要从 initial 中移除一个节点（包括它的所有连边），使最终感染节点数最少。返回应移除的节点编号。

## 解题思路

对每个非初始节点，用 BFS 找出所有能感染它的初始节点。如果一个节点只被一个初始节点感染，那移除该初始节点就能拯救这个节点。统计每个初始节点能拯救的节点数，选最大的。
