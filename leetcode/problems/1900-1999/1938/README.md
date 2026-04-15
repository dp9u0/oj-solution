# [1938] Maximum Genetic Difference Query

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-genetic-difference-query/description/)

* algorithms
* Hard (46.73%)
* Likes:    416
* Dislikes: 24
* Testcase Example:  '[-1,0,1,1]\n[[0,2],[3,2],[2,5]]'

```md
There is a rooted tree consisting of n nodes numbered 0 to n - 1. Each node&#39;s number denotes its unique genetic value (i.e. the genetic value of node x is x). The genetic difference between two genetic values is defined as the bitwise-XOR of their values. You are given the integer array parents, where parents[i] is the parent for node i. If node x is the root of the tree, then parents[x] == -1.
You are also given the array queries where queries[i] = [nodei, vali]. For each query i, find the maximum genetic difference between vali and pi, where pi is the genetic value of any node that is on the path between nodei and the root (including nodei and the root). More formally, you want to maximize vali XOR pi.
Return an array ans where ans[i] is the answer to the ith query.

Example 1:


Input: parents = [-1,0,1,1], queries = [[0,2],[3,2],[2,5]]
Output: [2,3,7]
Explanation: The queries are processed as follows:
- [0,2]: The node with the maximum genetic difference is 0, with a difference of 2 XOR 0 = 2.
- [3,2]: The node with the maximum genetic difference is 1, with a difference of 2 XOR 1 = 3.
- [2,5]: The node with the maximum genetic difference is 2, with a difference of 5 XOR 2 = 7.

Example 2:


Input: parents = [3,7,-1,2,0,7,0,2], queries = [[4,6],[1,15],[0,5]]
Output: [6,14,7]
Explanation: The queries are processed as follows:
- [4,6]: The node with the maximum genetic difference is 0, with a difference of 6 XOR 0 = 6.
- [1,15]: The node with the maximum genetic difference is 1, with a difference of 15 XOR 1 = 14.
- [0,5]: The node with the maximum genetic difference is 2, with a difference of 5 XOR 2 = 7.


Constraints:

2 <= parents.length <= 105
0 <= parents[i] <= parents.length - 1 for every node i that is not the root.
parents[root] == -1
1 <= queries.length <= 3 * 104
0 <= nodei <= parents.length - 1
0 <= vali <= 2 * 105


```

## 中文翻译

给定一棵根树（节点编号即基因值），每个查询 [node, val] 要求在 node 到根的路径上，找一个节点值 p 使 p XOR val 最大。

## 解题思路

DFS 遍历树 + 0-1 Trie 维护路径上的所有节点值。

- 从根开始 DFS，进入节点时将节点值插入 Trie，离开时删除。
- 在每个节点处，回答所有属于该节点的查询：在 Trie 中找与 val 异或最大的值。
- 0-1 Trie 查询：从高位到低位，优先走与 val 当前位相反的子节点。

用迭代 DFS 避免栈溢出。Trie 节点用数组 [count, child0, child1] 表示，支持计数式插入/删除。

## Solution

[SourceCode](./solution.js)
