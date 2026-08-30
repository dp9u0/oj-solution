# [3977] Minimum Time to Reach Target With Limited Power

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-to-reach-target-with-limited-power/description/)

* algorithms
* Hard (40.42%)
* Likes:    66
* Dislikes: 5
* Testcase Example:  '5\n[[0,1,1],[1,4,1],[0,2,1],[2,3,1],[3,4,1]]\n4\n[2,3,1,1,1]\n0\n4'

```md
You are given a directed weighted graph with n nodes labeled from 0 to n - 1.
The graph is represented by a 2D integer array edges, where edges[i] = [ui, vi, ti] indicates a directed edge from node ui to node vi that takes ti seconds to traverse.
You are also given an integer power representing the initial available power, and an integer array cost of length n, where cost[u] represents the power required to forward the signal from node u through any one of its outgoing edges.
You are given two integers source and target.
The signal starts at source at time 0 with power units of power and follows these rules:
The signal may traverse a directed edge from node u only if the remaining power is at least cost[u].
No power is consumed when the signal arrives at a node, unless it later leaves that node by traversing another edge.
When the signal is forwarded from node u, the remaining power is decreased by cost[u] units.
Traversing an edge edges[i] = [ui, vi, ti] increases the total time by ti seconds.
Return an integer array answer of size 2, where:
answer[0] is the minimum time required for the signal to reach node target.
answer[1] is the maximum remaining power among all paths that achieve answer[0].
If the signal cannot reach target, return [-1, -1].

Example 1:
Input: n = 5, edges = [[0,1,1],[1,4,1],[0,2,1],[2,3,1],[3,4,1]], power = 4, cost = [2,3,1,1,1], source = 0, target = 4
Output: [3,0]
Explanation:
The signal starts at node 0 with 4 units of power.
The path 0 -> 1 -> 4 is not valid, because after leaving node 0, the signal has 2 units of power remaining, which is less than cost[1] = 3.
The valid path 0 -> 2 -> 3 -> 4 takes a total time of 3.
The total power consumed along this path is cost[0] + cost[2] + cost[3] = 4, leaving 0 remaining power.
Hence, the answer is [3, 0].
Example 2:
Input: n = 3, edges = [[0,1,2],[1,2,2],[2,0,2]], power = 3, cost = [1,1,1], source = 1, target = 1
Output: [0,3]
Explanation:
Since the source and target are the same node, no traversal is required.
Hence, the minimum total time taken is 0, and no power is consumed.
Therefore, the answer is [0, 3].
Example 3:
​​​​​​​
Input: n = 4, edges = [[0,1,3],[2,3,4]], power = 3, cost = [1,1,1,1], source = 0, target = 3
Output: [-1,-1]
Explanation:
There is no valid path from source to target, therefore return [-1, -1].

Constraints:
1
0
edges[i] = [ui, vi, ti]
0
1
1
cost.length == n
1
0
Hint 1: Treat the remaining power as part of the state.
Hint 2: Use Dijkstra's algorithm on states (node, remainingPower).
Hint 3: From state (u, p), you may traverse outgoing edges only if p >= cost[u], and the next state has remaining power p - cost[u].
Hint 4: After computing shortest times, among all states at target with minimum time, choose the one with the maximum remaining power.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给你一个 `n` 个节点的有向带权图，节点编号 `0` 到 `n - 1`。图用二维整数数组 `edges` 表示，`edges[i] = [ui, vi, ti]` 表示一条从 `ui` 到 `vi` 的有向边，经过需要 `ti` 秒。

再给你一个整数 `power` 表示初始可用电量，以及长度为 `n` 的整数数组 `cost`，其中 `cost[u]` 表示从节点 `u` 沿任意一条出边转发信号所需的电量。

还给你两个整数 `source` 和 `target`。

信号在时刻 0 从 `source` 出发，初始电量为 `power`，遵循以下规则：

- 只有当剩余电量至少为 `cost[u]` 时，信号才能从节点 `u` 走一条出边。
- 信号到达节点时不消耗电量，只有之后从该节点继续出发（走边）才消耗。
- 信号从节点 `u` 被转发时，剩余电量减少 `cost[u]`。
- 经过边 `edges[i] = [ui, vi, ti]` 会使总时间增加 `ti` 秒。

返回长度为 2 的整数数组 `answer`：

- `answer[0]` 是信号到达 `target` 的最短时间。
- `answer[1]` 是在所有取得 `answer[0]` 的路径中，最大的剩余电量。
- 如果信号无法到达 `target`，返回 `[-1, -1]`。

约束：`1 <= n <= 1000`，`0 <= edges.length <= 1000`，`0 <= ui, vi <= n-1`，`1 <= ti <= 1e9`，`1 <= power <= 1000`，`1 <= cost[i] <= 2000`，`0 <= source, target <= n-1`。

## 解题思路

把「剩余电量」纳入状态：`dist[u][p]` 表示持有 `p` 单位电量到达节点 `u` 的最短时间，在状态图 `(node, power)` 上跑 Dijkstra（提示亦如此）。

- 初始状态 `(source, power)`，时间为 0。
- 从状态 `(u, p)` 出发：若 `p >= cost[u]`，可走每条出边 `(v, t)`，转移到 `(v, p - cost[u])`，时间为 `d + t`；若 `p < cost[u]` 则该状态无法继续。
- 关键性质：由于每条边的 `cost` 为正，一条路径可行 ⟺ 沿途所有离开节点（不含终点）的 `cost` 之和不超过 `power`，因此电量维度状态数最多 `power + 1 <= 1001`，总状态数 `n * (power+1) <= 1e6`，可以接受。

**答案第二维的处理**：堆中关键字为 `(时间, -剩余电量)`，即时间相同时剩余电量大的先出堆。Dijkstra 按关键字非降序出堆，所以第一个出堆的 `target` 状态就是「最短时间 + 该时间下最大剩余电量」，直接返回 `[d, p]`。若 `source === target`，初始状态第一个出堆，自然返回 `[0, power]`。

复杂度：时间 `O((n + m) * power * log(n * power))`，空间 `O(n * power)`。注意 `t <= 1e9`，总时间可达 `1e12`，超出 32 位，JS number 足够。
