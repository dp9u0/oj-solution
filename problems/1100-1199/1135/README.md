# [1135] 最低成本连通所有城市

## Description


```md
https://leetcode.cn/problems/connecting-cities-with-minimum-cost/description/
* algorithms
* Medium (59.90%)
* Likes:    135
* Dislikes: -
* Testcase Example:  '3\n[[1,2,5],[1,3,6],[2,3,1]]'
想象一下你是个城市基建规划者，地图上有 n 座城市，它们按以 1 到 n 的次序编号。
给你整数 n 和一个数组 conections，其中 connections[i] = [xi, yi, costi] 表示将城市 xi 和城市 yi 连接所要的costi（连接是双向的）。
返回连接所有城市的最低成本，每对城市之间至少有一条路径。如果无法连接所有 n 个城市，返回 -1
该 最小成本 应该是所用全部连接成本的总和。

示例 1：
输入：n = 3, conections = [[1,2,5],[1,3,6],[2,3,1]]
输出：6
解释：选出任意 2 条边都可以连接所有城市，我们从中选取成本最小的 2 条。
示例 2：
输入：n = 4, conections = [[1,2,3],[3,4,4]]
输出：-1
解释：即使连通所有的边，也无法连接所有城市。

提示：
1 <= n <= 104
1 <= connections.length <= 104
connections[i].length == 3
1 <= xi, yi <= n
xi != yi
0 <= costi <= 105
Hint 1: What if we model the cities as a graph?
Hint 2: Build a graph of cities and find the minimum spanning tree.
Hint 3: You can use a variation of the Kruskal's algorithm for that.
Hint 4: Sort the edges by their cost and use a union-find data structure.
Hint 5: How to check all cities are connected?
Hint 6: At the beginning we have n connected components, each time we connect two components the number of connected components is reduced by one. At the end we should end with only a single component otherwise return -1.

```

## Solution

[SourceCode](./solution.js)

## Translation

Minimum total cost to connect all n cities (given bidirectional weighted edges), or -1 if impossible. Classic MST.

- Example: n = 3, [[1,2,5],[1,3,6],[2,3,1]] → `6`

## Approach

**Kruskal + 并查集**。边按成本升序排序,逐条 union(路径减半),成边数达 n−1 提前返回总成本;结束仍未达 n−1 条则 -1(n=1 需 0 条,由同一判定覆盖)。O(E log E)。
