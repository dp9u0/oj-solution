# [3970] Shortest Path With At Most K Consecutive Identical Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-path-with-at-most-k-consecutive-identical-characters/description/)

* algorithms
* Medium (45.24%)
* Likes:    90
* Dislikes: 5
* Testcase Example:  '3\n[[0,1,1],[1,2,1],[0,2,3]]\n"aab"\n1'

```md
You are given an integer n representing the number of nodes in a directed weighted graph, numbered from 0 to n - 1. This is represented by a 2D integer array edges, where edges[i] = [ui, vi, wi] represents a directed edge from node ui to node vi with weight wi.
You are also given a string labels of length n, where labels[i] is the character assigned to node i, and an integer k.
Return the minimum total edge weight of a path from node 0 to node n - 1 such that the concatenation of the labels of the nodes along the path contains at most k consecutive identical characters. If no valid path exists, return -1.

Example 1:
Input: n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = "aab", k = 1
Output: 3
Explanation:
The optimal valid path from node 0 to node 2 is as follows:
Use edges[2] = [0, 2, 3] to reach node 2 with a weight wi = 3.
The corresponding concatenation of labels is "ab", which satisfies at most k = 1 consecutive identical characters. Thus, the answer is 3.
Example 2:
Input: n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = "aab", k = 2
Output: 2
Explanation:
The optimal valid path from node 0 to node 2 is as follows:
Use edges[0] = [0, 1, 1] to reach node 1 with weight wi = 1.
Use edges[1] = [1, 2, 1] to reach node 2 with weight wi = 1.
The corresponding concatenation of labels is "aab", which satisfies at most k = 2 consecutive identical characters. Thus, the answer is 2.
Example 3:
Input: n = 3, edges = [[0,1,1],[1,2,1]], labels = "aaa", k = 2
Output: -1
Explanation:
There is no valid path from node 0 to node 2 that satisfies at most k = 2 consecutive identical characters. Thus, the answer is -1.

Constraints:
1 <= n == labels.length <= 5 * 104
0 <= edges.length <= 5 * 104
edges[i] == [ui, vi, wi]
0 <= ui, vi <= n - 1
ui != vi
1 <= wi <= 104
labels consists of lowercase English letters
1 <= k <= 50
Hint 1: The validity of a path depends not only on the current node, but also on how many consecutive times the current node’s label has appeared at the end of the path.
Hint 2: Use Dijkstra on states (node, count), where count is the current consecutive run length of labels[node].
Hint 3: When moving from node u to node v, the next count becomes count + 1 if labels[u] == labels[v], otherwise it becomes 1. Ignore transitions where the next count exceeds k.
Hint 4: The answer is the minimum distance among all states ending at node n - 1.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给你一个整数 `n`，表示一个 **有向带权图** 中节点的数量，节点编号从 `0` 到 `n - 1`。图由二维整数数组 `edges` 表示，其中 `edges[i] = [ui, vi, wi]` 表示一条从节点 `ui` 到节点 `vi`、权重为 `wi` 的有向边。

再给你一个长度为 `n` 的字符串 `labels`，其中 `labels[i]` 是分配给节点 `i` 的字符，以及一个整数 `k`。

返回从节点 `0` 到节点 `n - 1` 的路径的最小总边权，要求路径上节点标签拼接后的字符串中，**连续相同字符至多出现 k 个**。如果不存在合法路径，返回 `-1`。

示例 1：
输入：`n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = "aab", k = 1`
输出：`3`
解释：直接走边 `[0, 2]`（权重 3），标签拼接为 `"ab"`，满足至多 1 个连续相同字符，答案为 3。

示例 2：
输入：`n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = "aab", k = 2`
输出：`2`
解释：走 `0 → 1 → 2`，总权重 2，标签拼接为 `"aab"`，至多 2 个连续相同字符，答案为 2。

示例 3：
输入：`n = 3, edges = [[0,1,1],[1,2,1]], labels = "aaa", k = 2`
输出：`-1`
解释：唯一的路径标签为 `"aaa"`，包含 3 个连续相同字符，超过 k = 2，无解。

约束：
- `1 <= n == labels.length <= 5 * 10^4`
- `0 <= edges.length <= 5 * 10^4`
- `0 <= ui, vi <= n - 1`，`ui != vi`
- `1 <= wi <= 10^4`
- `labels` 由小写英文字母组成
- `1 <= k <= 50`

## 解题思路

**状态扩张的 Dijkstra（分层最短路）**

路径的合法性不仅取决于当前在哪个节点，还取决于路径末尾当前字符已经连续出现了多少次。因此把「末尾连续段长度」并入状态：

- 状态定义：`(node, c)` —— 当前走到节点 `node`，且 `labels[node]` 在路径末尾已连续出现 `c` 次（`1 <= c <= k`）。
- 初始状态：`(0, 1)`，距离为 0（节点 0 自身标签贡献长度 1）。
- 转移：从 `(u, c)` 沿边 `u → v`（权重 `w`）转移时：
  - 若 `labels[u] == labels[v]`：新长度 `nc = c + 1`，若 `nc > k` 则该转移非法，跳过；
  - 否则连续段被打断：`nc = 1`。
  - 新状态距离为 `d + w`，用堆做松弛。
- 答案：所有 `(n - 1, c)` 状态中距离的最小值；若仍为无穷大则返回 `-1`（特判 `n = 1` 时答案为 0，初始状态即终点）。

**复杂度**：状态数 `O(n·k)`，每个状态最多出边 `O(deg)`，总松弛次数 `O(m·k)`，堆操作复杂度 `O(m·k·log(n·k))`。在本题规模下（`5·10^4 × 50`）可轻松通过。

**实现细节**：邻接表用 CSR（前缀和 + 平铺数组）以减少对象开销；距离数组用一维 `Float64Array`（下标 `node * (k+1) + c`）；手写二叉小根堆（双平行数组）避免 comparator 开销。
