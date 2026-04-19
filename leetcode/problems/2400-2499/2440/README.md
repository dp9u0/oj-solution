# [2440] Create Components With Same Value

## Description

[LeetCode Problem Description](https://leetcode.com/problems/create-components-with-same-value/description/)

* algorithms
* Hard (53.45%)
* Likes:    443
* Dislikes: 7
* Testcase Example:  '[6,2,2,2,6]\n[[0,1],[1,2],[1,3],[3,4]]'

```md
There is an undirected tree with n nodes labeled from 0 to n - 1.
You are given a 0-indexed integer array nums of length n where nums[i] represents the value of the ith node. You are also given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.
You are allowed to delete some edges, splitting the tree into multiple connected components. Let the value of a component be the sum of all nums[i] for which node i is in the component.
Return the maximum number of edges you can delete, such that every connected component in the tree has the same value.

Example 1:


Input: nums = [6,2,2,2,6], edges = [[0,1],[1,2],[1,3],[3,4]]
Output: 2
Explanation: The above figure shows how we can delete the edges [0,1] and [3,4]. The created components are nodes [0], [1,2,3] and [4]. The sum of the values in each component equals 6. It can be proven that no better deletion exists, so the answer is 2.

Example 2:

Input: nums = [2], edges = []
Output: 0
Explanation: There are no edges to be deleted.


Constraints:

1 <= n <= 2 * 104
nums.length == n
1 <= nums[i] <= 50
edges.length == n - 1
edges[i].length == 2
0 <= edges[i][0], edges[i][1] <= n - 1
edges represents a valid tree.


```

## 翻译

给定一棵树和节点权值，删除最多边使得每个连通分量的权值和相等。返回最多能删多少条边。

## 解题思路

总和 S，每个分量和 d 必须整除 S。枚举 S 的所有因子 d（从小到大），对每个 d 做 DFS：子树和等于 d 就切掉（返回 0），超过 d 则不可行。第一个可行的 d 给出最大删除边数 = S/d - 1。O(n * divisors(S))。

## Solution

[SourceCode](./solution.js)
