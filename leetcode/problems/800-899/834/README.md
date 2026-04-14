# [834] Sum of Distances in Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-distances-in-tree/description/)

* algorithms
* Hard (65.55%)
* Likes:    5975
* Dislikes: 140
* Testcase Example:  '6\n[[0,1],[0,2],[2,3],[2,4],[2,5]]'

```md
There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.
You are given the integer n and the array edges where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.
Return an array answer of length n where answer[i] is the sum of the distances between the ith node in the tree and all other nodes.

Example 1:


Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
Explanation: The tree is shown above.
We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
equals 1 + 1 + 2 + 2 + 2 = 8.
Hence, answer[0] = 8, and so on.

Example 2:


Input: n = 1, edges = []
Output: [0]

Example 3:


Input: n = 2, edges = [[1,0]]
Output: [1,1]


Constraints:

1 <= n <= 3 * 104
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
ai != bi
The given input represents a valid tree.


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定 n 个节点的无向树，返回数组 answer，其中 answer[i] 是节点 i 到所有其他节点的距离之和。

### 解题思路

**换根 DP（两次 DFS）**

1. 第一次 DFS（以 0 为根）：计算每个子树大小 `subtreeSize[i]` 和根节点的距离和 `res[0]`
2. 第二次 DFS（换根）：从 parent 移到 child 时
   - child 子树内的节点距离减 1：贡献 `-subtreeSize[child]`
   - child 子树外的节点距离加 1：贡献 `+(n - subtreeSize[child])`
   - `res[child] = res[parent] - subtreeSize[child] + (n - subtreeSize[child])`
3. 时间 O(n)
