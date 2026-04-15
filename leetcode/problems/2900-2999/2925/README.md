# [2925] Maximum Score After Applying Operations on a Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/description/)

* algorithms
* Medium (47.14%)
* Likes:    367
* Dislikes: 78
* Testcase Example:  '[[0,1],[0,2],[0,3],[2,4],[4,5]]\n[5,2,5,2,1,1]'

```md
There is an undirected tree with n nodes labeled from 0 to n - 1, and rooted at node 0. You are givena 2D integer array edges of length n - 1, where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.
You are also given a 0-indexed integer array values of length n, where values[i] is the value associated with the ith node.
You start with a score of 0. In one operation, you can:

Pick any node i.
Add values[i] to your score.
Set values[i] to 0.

A tree is healthy if the sum of values on the path from the root to any leaf node is different than zero.
Return the maximum score you can obtain after performing these operations on the tree any number of times so that it remains healthy.

Example 1:


Input: edges = [[0,1],[0,2],[0,3],[2,4],[4,5]], values = [5,2,5,2,1,1]
Output: 11
Explanation: We can choose nodes 1, 2, 3, 4, and 5. The value of the root is non-zero. Hence, the sum of values on the path from the root to any leaf is different than zero. Therefore, the tree is healthy and the score is values[1] + values[2] + values[3] + values[4] + values[5] = 11.
It can be shown that 11 is the maximum score obtainable after any number of operations on the tree.

Example 2:


Input: edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], values = [20,10,9,7,4,3,5]
Output: 40
Explanation: We can choose nodes 0, 2, 3, and 4.
- The sum of values on the path from 0 to 4 is equal to 10.
- The sum of values on the path from 0 to 3 is equal to 10.
- The sum of values on the path from 0 to 5 is equal to 3.
- The sum of values on the path from 0 to 6 is equal to 5.
Therefore, the tree is healthy and the score is values[0] + values[2] + values[3] + values[4] = 40.
It can be shown that 40 is the maximum score obtainable after any number of operations on the tree.


Constraints:

2 <= n <= 2 * 104
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
values.length == n
1 <= values[i] <= 109
The input is generated such that edges represents a valid tree.


```

## 题目翻译

有一棵以节点 0 为根的无向树，有 n 个节点，标号 0 到 n-1。给定 edges 和 values 数组。

每次操作可以选择一个节点 i，将 values[i] 加入分数，并将 values[i] 设为 0。

树是"健康的"当且仅当从根到每个叶子节点的路径上的值之和非零。

返回在保持树健康的前提下，能获得的最大分数。

## 解题思路

树形 DP。定义 dp[node] = 子树中必须牺牲（不取）的最小值，使得每条从该节点到叶子的路径上至少有一个未取的节点。

- 叶子节点：dp[leaf] = values[leaf]（必须保留该节点）
- 内部节点：dp[node] = min(values[node], sum(dp[child]))
  - 选择 1：牺牲当前节点（保留其值），子节点可以全部取
  - 选择 2：取当前节点，每个子树独立满足约束

答案 = 所有节点值之和 - dp[root]

时间复杂度 O(n)，空间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
