# [LCR 110] 所有可能的路径

## Description


```md
https://leetcode.cn/problems/bP4bmD/description/
* algorithms
* Medium (80.69%)
* Likes:    69
* Dislikes: -
* Testcase Example:  '[[1,2],[3],[3],[]]'
给定一个有 n 个节点的有向无环图，用二维数组 graph 表示，请找到所有从 0 到 n-1 的路径并输出（不要求按顺序）。
graph 的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些结点（译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a ），若为空，就是没有下一个节点了。

示例 1：
输入：graph = [[1,2],[3],[3],[]]
输出：[[0,1,3],[0,2,3]]
解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
示例 2：
输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
示例 3：
输入：graph = [[1],[]]
输出：[[0,1]]
示例 4：
输入：graph = [[1,2,3],[2],[3],[]]
输出：[[0,1,2,3],[0,2,3],[0,3]]
示例 5：
输入：graph = [[1,3],[2],[3],[]]
输出：[[0,1,2,3],[0,3]]

提示：
n == graph.length
2 <= n <= 15
0 <= graph[i][j] < n
graph[i][j] != i
保证输入为有向无环图 (GAD)

注意：本题与主站 797 题相同：https://leetcode.cn/problems/all-paths-from-source-to-target/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a directed acyclic graph (DAG) with `n` nodes, represented by the 2D array `graph`, find and output all paths from node `0` to node `n-1` (order not required).

The i-th element of `graph` lists the nodes reachable from node `i` (edges are directed). An empty array means no outgoing edges.

**Example 1:** Input `graph = [[1,2],[3],[3],[]]` → Output `[[0,1,3],[0,2,3]]`
**Example 2:** Input `graph = [[4,3,1],[3,2,4],[3],[4],[]]` → Output `[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]`
**Example 3:** Input `graph = [[1],[]]` → Output `[[0,1]]`

**Constraints:**
- `n == graph.length`, `2 <= n <= 15`
- `0 <= graph[i][j] < n`, `graph[i][j] != i`
- Guaranteed DAG.

Note: same as LeetCode 797.

---

## Approach

**DFS / backtracking** from source `0`. Maintain the current path; when we reach node `n-1`, record a copy of the path. Otherwise recursively visit each unvisited neighbor. Because the graph is a DAG, no cycle check beyond the current path is strictly needed, but since paths must be simple, skip nodes already on the current path.

Complexity: `O(2^n)` paths worst case (n ≤ 15 → manageable), `O(n)` recursion space.
