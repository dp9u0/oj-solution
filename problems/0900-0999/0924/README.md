# [924] Minimize Malware Spread

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-malware-spread/description/)

* algorithms
* Hard (43.06%)
* Likes:    1123
* Dislikes: 654
* Testcase Example:  '[[1,1,0],[1,1,0],[0,0,1]]\n[0,1]'

```md
You are given a network of n nodes represented as an n x n adjacency matrix graph, where the ith node is directly connected to the jth node if graph[i][j] == 1.
Some nodes initial are initially infected by malware. Whenever two nodes are directly connected, and at least one of those two nodes is infected by malware, both nodes will be infected by malware. This spread of malware will continue until no more nodes can be infected in this manner.
Suppose M(initial) is the final number of nodes infected with malware in the entire network after the spread of malware stops. We will remove exactly one node from initial.
Return the node that, if removed, would minimize M(initial). If multiple nodes could be removed to minimize M(initial), return such a node with the smallest index.
Note that if a node was removed from the initial list of infected nodes, it might still be infected later due to the malware spread.

Example 1:
Input: graph = [[1,1,0],[1,1,0],[0,0,1]], initial = [0,1]
Output: 0
Example 2:
Input: graph = [[1,0,0],[0,1,0],[0,0,1]], initial = [0,2]
Output: 0
Example 3:
Input: graph = [[1,1,1],[1,1,1],[1,1,1]], initial = [1,2]
Output: 1


Constraints:

n == graph.length
n == graph[i].length
2 <= n <= 300
graph[i][j] is 0 or 1.
graph[i][j] == graph[j][i]
graph[i][i] == 1
1 <= initial.length <= n
0 <= initial[i] <= n - 1
All the integers in initial are unique.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 n 个节点的邻接矩阵和初始感染节点 initial。感染规则：直接相连的节点中有一个感染则都感染。从 initial 中移除一个节点（但该节点之后仍可能被感染），使最终感染节点数最少。返回应移除的节点编号。

## 解题思路

用并查集找连通分量。对每个连通分量，统计其中有多少个初始感染节点。如果恰好只有1个初始节点，移除它可以拯救整个分量。对每个初始节点计算可拯救的节点数（只有当它是分量中唯一初始节点时才有效），选最大的。
