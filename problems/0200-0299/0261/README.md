# [261] 以图判树

## Description


```md
https://leetcode.cn/problems/graph-valid-tree/description/
* algorithms
* Medium (51.90%)
* Likes:    289
* Dislikes: -
* Testcase Example:  '5\n[[0,1],[0,2],[0,3],[1,4]]'
给定编号从 0 到 n - 1 的 n 个结点。给定一个整数 n 和一个 edges 列表，其中 edges[i] = [ai, bi] 表示图中节点 ai 和 bi 之间存在一条无向边。
如果这些边能够形成一个合法有效的树结构，则返回 true ，否则返回 false 。

示例 1：
输入: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
输出: true
示例 2:
输入: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
输出: false

提示：
1 <= n <= 2000
0 <= edges.length <= 5000
edges[i].length == 2
0 <= ai, bi < n
ai != bi
不存在自循环或重复的边
Hint 1: Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], what should your return? Is this case a valid tree?
Hint 2: According to the definition of tree on Wikipedia: “a tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.”

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given `n` nodes labeled 0..n-1 and a list of undirected `edges`, verify these edges form one valid tree.

**Example:**
n = 5, edges = [[0,1],[0,2],[0,3],[1,4]] → true

**Constraints:**
- 1 <= n <= 2000, edges.length <= min(2000, n*(n-1)/2)

## Approach

有效树 ⇔ 边数恰为 n-1 且无环。先用边数判掉环或断连的情况,再用并查集(路径减半)加边:两端点已同根即有环。

时间 O(n × α(n)),空间 O(n)。
