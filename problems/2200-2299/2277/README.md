# [2277] 树中最接近路径的节点

## Description


```md
https://leetcode.cn/problems/closest-node-to-path-in-tree/description/
* algorithms
* Hard (57.58%)
* Likes:    8
* Dislikes: -
* Testcase Example:  '7\n[[0,1],[0,2],[0,3],[1,4],[2,5],[2,6]]\n[[5,3,4],[5,3,6]]'
给定一个正整数 n，表示树中的节点数，编号从 0 到 n - 1 (含边界)。还给定一个长度为 n - 1 的二维整数数组 edges，其中 edges[i] = [node1i, node2i] 表示有一条 双向 边连接树中的 node1i 和 node2i。
给定一个长度为 m ，下标从 0 开始 的整数数组 query，其中 query[i] = [starti, endi, nodei] 意味着对于第 i 个查询，您的任务是从 starti 到 endi 的路径上找到 最接近 nodei 的节点。
返回长度为 m 的整数数组 answer，其中 answer[i] 是第 i 个查询的答案。

示例 1:
输入: n = 7, edges = [[0,1],[0,2],[0,3],[1,4],[2,5],[2,6]], query = [[5,3,4],[5,3,6]]
输出: [0,2]
解释:
节点 5 到节点 3 的路径由节点 5、2、0、3 组成。
节点 4 到节点 0 的距离为 2。
节点 0 是距离节点 4 最近的路径上的节点，因此第一个查询的答案是 0。
节点 6 到节点 2 的距离为 1。
节点 2 是距离节点 6 最近的路径上的节点，因此第二个查询的答案是 2。
示例 2:
输入: n = 3, edges = [[0,1],[1,2]], query = [[0,1,2]]
输出: [1]
解释:
从节点 0 到节点 1 的路径由节点 0,1 组成。
节点 2 到节点 1 的距离为 1。
节点 1 是距离节点 2 最近的路径上的节点，因此第一个查询的答案是 1。
示例 3:
输入: n = 3, edges = [[0,1],[1,2]], query = [[0,0,0]]
输出: [0]
解释:
节点 0 到节点 0 的路径由节点 0 组成。
因为 0 是路径上唯一的节点，所以第一个查询的答案是0。

提示:
1 <= n <= 1000
edges.length == n - 1
edges[i].length == 2
0 <= node1i, node2i <= n - 1
node1i != node2i
1 <= query.length <= 1000
query[i].length == 3
0 <= starti, endi, nodei <= n - 1

这个图是一个树。
Hint 1: For the ith query, find the distance from node_i to every other node in the tree.
Hint 2: We can use a BFS to find the distances.
Hint 3: Use DFS to find all the nodes on the path from start_i to end_i.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a tree with n nodes, for each query [start, end, node] find the node on the path start->end closest to `node`.

Example 1:
Input: n = 7, edges = [[0,1],[0,2],[0,3],[1,4],[2,5],[2,6]], query = [[5,3,4],[5,3,6]]
Output: [0,2]

Example 2:
Input: n = 3, edges = [[0,1],[1,2]], query = [[0,1,2]]
Output: [1]

Example 3:
Input: n = 3, edges = [[0,1],[1,2]], query = [[0,0,0]]
Output: [0]

Constraints: 1 <= n <= 1000, 1 <= query.length <= 1000.

## Approach

Per query: one BFS from `node` gives distances to all nodes; one BFS from `start` with parent pointers recovers the path to `end` (then reversed). Walk the path and keep the node minimizing the distance. Total O(q * n).
