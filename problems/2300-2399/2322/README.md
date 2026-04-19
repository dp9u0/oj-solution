# [2322] Minimum Score After Removals on a Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/description/)

* algorithms
* Hard (76.13%)
* Likes:    816
* Dislikes: 47
* Testcase Example:  '[1,5,5,4,11]\n[[0,1],[1,2],[1,3],[3,4]]'

```md
There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.
You are given a 0-indexed integer array nums of length n where nums[i] represents the value of the ith node. You are also given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.
Remove two distinct edges of the tree to form three connected components. For a pair of removed edges, the following steps are defined:

Get the XOR of all the values of the nodes for each of the three components respectively.
The difference between the largest XOR value and the smallest XOR value is the score of the pair.


For example, say the three components have the node values: [4,5,7], [1,9], and [3,3,3]. The three XOR values are 4 ^ 5 ^ 7 = 6, 1 ^ 9 = 8, and 3 ^ 3 ^ 3 = 3. The largest XOR value is 8 and the smallest XOR value is 3. The score is then 8 - 3 = 5.

Return the minimum score of any possible pair of edge removals on the given tree.

Example 1:


Input: nums = [1,5,5,4,11], edges = [[0,1],[1,2],[1,3],[3,4]]
Output: 9
Explanation: The diagram above shows a way to make a pair of removals.
- The 1st component has nodes [1,3,4] with values [5,4,11]. Its XOR value is 5 ^ 4 ^ 11 = 10.
- The 2nd component has node [0] with value [1]. Its XOR value is 1 = 1.
- The 3rd component has node [2] with value [5]. Its XOR value is 5 = 5.
The score is the difference between the largest and smallest XOR value which is 10 - 1 = 9.
It can be shown that no other pair of removals will obtain a smaller score than 9.

Example 2:


Input: nums = [5,5,2,4,4,2], edges = [[0,1],[1,2],[5,2],[4,3],[1,3]]
Output: 0
Explanation: The diagram above shows a way to make a pair of removals.
- The 1st component has nodes [3,4] with values [4,4]. Its XOR value is 4 ^ 4 = 0.
- The 2nd component has nodes [1,0] with values [5,5]. Its XOR value is 5 ^ 5 = 0.
- The 3rd component has nodes [2,5] with values [2,2]. Its XOR value is 2 ^ 2 = 0.
The score is the difference between the largest and smallest XOR value which is 0 - 0 = 0.
We cannot obtain a smaller score than 0.


Constraints:

n == nums.length
3 <= n <= 1000
1 <= nums[i] <= 108
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
ai != bi
edges represents a valid tree.


```

## 题目翻译

给定一棵树，删除两条不同边形成三个连通分量。每个分量的 XOR 值之差（最大-最小）为得分。求最小得分。

## 解题思路

**DFS 子树 XOR + 枚举边对**

以 0 为根，DFS 预处理每个节点的子树 XOR 值 subXor[u] 和 Euler 时间戳 tin/tout（用于 O(1) 祖先判断）。

枚举所有边对 (u, v)：
- 若 u 是 v 祖先：三个分量 XOR 为 subXor[v], subXor[u]^subXor[v], total^subXor[u]
- 若 v 是 u 祖先：对称处理
- 否则（不相关）：subXor[u], subXor[v], total^subXor[u]^subXor[v]

O(n^2) 枚举所有边对。

## Solution

[SourceCode](./solution.js)
