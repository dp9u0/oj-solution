# [323] 无向图中连通分量的数目

## Description


```md
https://leetcode.cn/problems/number-of-connected-components-in-an-undirected-graph/description/
* algorithms
* Medium (65.94%)
* Likes:    221
* Dislikes: -
* Testcase Example:  '5\n[[0,1],[1,2],[3,4]]'
你有一个包含 n 个节点，下标从 0 到 n - 1 的图。给定一个整数 n 和一个数组 edges ，其中 edges[i] = [ai, bi] 表示图中 ai 和 bi 之间有一条边。
返回 图中已连接分量的数目 。

示例 1:
输入: n = 5, edges = [[0, 1], [1, 2], [3, 4]]
输出: 2
示例 2:
输入: n = 5, edges = [[0,1], [1,2], [2,3], [3,4]]
输出:  1

提示：
1 <= n <= 2000
1 <= edges.length <= 5000
edges[i] = [ai, bi]
0 <= ai <= bi < n
ai != bi
edges 中不会出现重复的边

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given `n` nodes and undirected `edges`, count the number of connected components.

**Example:**
n = 5, edges = [[0,1],[1,2],[3,4]] → 2

**Constraints:**
- 1 <= n <= 2000

## Approach

并查集:每条边合并两端点的根,合并成功(根不同)则分量数 -1。

时间 O(n + E × α),空间 O(n)。
