# [LCR 118] 冗余连接

## Description


```md
https://leetcode.cn/problems/7LpjUW/description/
* algorithms
* Medium (69.92%)
* Likes:    64
* Dislikes: -
* Testcase Example:  '[[1,2],[1,3],[2,3]]'
树可以看成是一个连通且 无环 的 无向 图。
给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。
请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的边。

示例 1：
输入: edges = [[1,2],[1,3],[2,3]]
输出: [2,3]
示例 2：
输入: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
输出: [1,4]

提示:
n == edges.length
3 <= n <= 1000
edges[i].length == 2
1 <= ai < bi <= edges.length
ai != bi
edges 中无重复元素
给定的图是连通的

注意：本题与主站 684 题相同： https://leetcode.cn/problems/redundant-connection/

```

## English Description

In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with `n` nodes labeled from `1` to `n`, with one additional edge added. The added edge has two different vertices chosen from `1` to `n`, and was not an edge that already existed. The graph is represented as an array `edges` of length `n` where `edges[i] = [ai, bi]` indicates that there is an edge between nodes `ai` and `bi` in the graph.

Return an edge that can be removed so that the resulting graph is a tree of `n` nodes. If there are multiple answers, return the answer that occurs last in the input.

Example 1:
> Input: edges = [[1,2],[1,3],[2,3]]
> Output: [2,3]

Example 2:
> Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
> Output: [1,4]

## Solution Approach

Union-Find (并查集) 解法：

- 一棵 `n` 个节点的树有 `n-1` 条边且无环；给定的图多一条边，恰形成一个环。
- 只需找到**环上最后一条边**。用并查集维护连通分量，依次遍历 `edges`：
  - 若当前边的两个端点已在同一连通分量中（`find` 结果相同），说明这条边使图成环，即为答案（因为按输入顺序返回，满足"最后出现"）。
  - 否则将两个端点所在分量合并（`union`）。
- 时间复杂度 O(n·α(n))，空间 O(n)。

## Solution

[SourceCode](./solution.js)
