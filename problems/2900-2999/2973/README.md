# [2973] Find Number of Coins to Place in Tree Nodes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/description/)

* algorithms
* Hard (37.38%)
* Likes:    201
* Dislikes: 22
* Testcase Example:  '[[0,1],[0,2],[0,3],[0,4],[0,5]]\n[1,2,3,4,5,6]'

```md
You are given an undirected tree with n nodes labeled from 0 to n - 1, and rooted at node 0. You are given a 2D integer array edges of length n - 1, where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.
You are also given a 0-indexed integer array cost of length n, where cost[i] is the cost assigned to the ith node.
You need to place some coins on every node of the tree. The number of coins to be placed at node i can be calculated as:

If size of the subtree of node i is less than 3, place 1 coin.
Otherwise, place an amount of coins equal to the maximum product of cost values assigned to 3 distinct nodes in the subtree of node i. If this product is negative, place 0 coins.

Return an array coin of size n such that coin[i] is the number of coins placed at node i.

Example 1:


Input: edges = [[0,1],[0,2],[0,3],[0,4],[0,5]], cost = [1,2,3,4,5,6]
Output: [120,1,1,1,1,1]
Explanation: For node 0 place 6 * 5 * 4 = 120 coins. All other nodes are leaves with subtree of size 1, place 1 coin on each of them.

Example 2:


Input: edges = [[0,1],[0,2],[1,3],[1,4],[1,5],[2,6],[2,7],[2,8]], cost = [1,4,2,3,5,7,8,-4,2]
Output: [280,140,32,1,1,1,1,1,1]
Explanation: The coins placed on each node are:
- Place 8 * 7 * 5 = 280 coins on node 0.
- Place 7 * 5 * 4 = 140 coins on node 1.
- Place 8 * 2 * 2 = 32 coins on node 2.
- All other nodes are leaves with subtree of size 1, place 1 coin on each of them.

Example 3:


Input: edges = [[0,1],[0,2]], cost = [1,2,-2]
Output: [0,1,1]
Explanation: Node 1 and 2 are leaves with subtree of size 1, place 1 coin on each of them. For node 0 the only possible product of cost is 2 * 1 * -2 = -4. Hence place 0 coins on node 0.


Constraints:

2 <= n <= 2 * 104
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
cost.length == n
1 <=
cost[i]
<= 104
The input is generated such that edges represents a valid tree.


```

## 中文翻译

给定一棵以节点 0 为根的无向树，每个节点有一个代价 cost[i]。在每个节点放硬币：
- 如果子树大小 < 3，放 1 个硬币
- 否则，放子树中 3 个不同节点代价的最大乘积。如果乘积为负，放 0 个

## 解题思路

**DFS 后序遍历 + 剪枝合并**

最大三数乘积只有两种候选：top3 最大值之积 或 bottom2 最小值（最负）× top1 最大值。DFS 自底向上合并子树代价列表，每层只保留 top3 和 bottom2（最多5个值），避免数据膨胀。时间复杂度 O(n log n)。

## Solution

[SourceCode](./solution.js)
