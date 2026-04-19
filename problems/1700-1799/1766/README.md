# [1766] Tree of Coprimes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/tree-of-coprimes/description/)

* algorithms
* Hard (43.99%)
* Likes:    430
* Dislikes: 37
* Testcase Example:  '[2,3,3,2]\n[[0,1],[1,2],[1,3]]'

```md
There is a tree (i.e.,a connected, undirected graph that has no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges. Each node has a value associated with it, and the root of the tree is node 0.
To represent this tree, you are given an integer array nums and a 2D array edges. Each nums[i] represents the ith node&#39;s value, and each edges[j] = [uj, vj] represents an edge between nodes uj and vj in the tree.
Two values x and y are coprime if gcd(x, y) == 1 where gcd(x, y) is the greatest common divisor of x and y.
An ancestor of a node i is any other node on the shortest path from node i to the root. A node is not considered an ancestor of itself.
Return an array ans of size n, where ans[i] is the closest ancestor to node i such that nums[i] and nums[ans[i]] are coprime, or -1 if there is no such ancestor.

Example 1:


Input: nums = [2,3,3,2], edges = [[0,1],[1,2],[1,3]]
Output: [-1,0,0,1]
Explanation: In the above figure, each node&#39;s value is in parentheses.
- Node 0 has no coprime ancestors.
- Node 1 has only one ancestor, node 0. Their values are coprime (gcd(2,3) == 1).
- Node 2 has two ancestors, nodes 1 and 0. Node 1&#39;s value is not coprime (gcd(3,3) == 3), but node 0&#39;s
value is (gcd(2,3) == 1), so node 0 is the closest valid ancestor.
- Node 3 has two ancestors, nodes 1 and 0. It is coprime with node 1 (gcd(3,2) == 1), so node 1 is its
closest valid ancestor.

Example 2:


Input: nums = [5,6,10,2,3,6,15], edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]]
Output: [-1,0,-1,0,0,0,-1]


Constraints:

nums.length == n
1 <= nums[i] <= 50
1 <= n <= 105
edges.length == n - 1
edges[j].length == 2
0 <= uj, vj < n
uj != vj


```

## 题目翻译

给定一棵以节点 0 为根的树，每个节点有值 nums[i]。对每个节点 i，找最近的祖先节点 ans[i]，使得 nums[i] 与 nums[ans[i]] 互质（gcd==1）。无则返回 -1。

## 解题思路

**DFS + 值域路径追踪**

关键约束：nums[i] <= 50。因此只需维护 lastSeen[v]（值 v 在当前根到节点路径上的最近祖先）。

DFS 遍历树时：
1. 对当前节点，检查所有与 nums[node] 互质的值 v，取 lastSeen[v] 中深度最大的。
2. 更新 lastSeen[nums[node]] 为当前节点。
3. 递归子节点后回溯恢复。

互质表预计算。由于值域仅 50，每节点检查最多约 25 个互质值。

用迭代 DFS 避免栈溢出。时间 O(n·50)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
