# [4122] 信号激活的最早时刻

## Description


```md
https://leetcode.cn/problems/earliest-signal-activation-times/description/
* algorithms
* Medium (51.24%)
* Dislikes: -
* Testcase Example:  '3\n[[0,1,1],[0,2,1]]\n[1,1,2]'
给你一个整数 n 和一张包含 n 个节点的 有向 图，节点编号从 0 到 n - 1。该图用二维数组 edges 表示，其中 edges[i] = [ui, vi, delayi] 表示一条从节点 ui 指向节点 vi 的边，信号沿这条边传播需要 delayi 个时间单位。
如果存在一条从节点 u 指向节点 v 的边，则称节点 u 是节点 v 的一个 入邻居。
节点 0 在时刻 0 处于 激活 状态，其余节点初始时均未激活。
当一个节点在时刻 t 激活时，它会 立即 沿每条 出边 各发送一个信号。节点一旦激活，就会保持激活状态，不会再次发送这些信号。沿一条延迟为 d 的边发送的信号会在时刻 t + d 到达。
另给你一个长度为 n 的整数数组 requiredSignals，其中 requiredSignals[i] 表示节点 i 在激活之前 必须 从多少个 不同的入邻居 收到信号。
对于尚未激活的节点 i，它会在收到来自 至少 requiredSignals[i] 个 不同的入邻居 的信号的 最早 时刻 t 激活。
返回一个长度为 n 的数组 ans，其中 ans[i] 是节点 i 激活的 最早 时刻。如果节点 i 永远不会 激活，则 ans[i] 应为 -1。
注意： requiredSignals[0] 的值不影响结果，因为节点 0 在时刻 0 就已激活，并在该时刻沿出边发送信号。

示例 1：
输入： n = 3, edges = [[0,1,1],[0,2,1]], requiredSignals = [1,1,2]
输出： [0,1,-1]
解释：
节点 0 在时刻 0 处于激活状态，向节点 1 和节点 2 发送信号。
在时刻 1，两个信号均已到达。节点 1 收到了所需的 1 个信号，因此激活。
节点 2 需要收到来自 2 个不同入邻居的信号，但它只有一个入邻居，因此永远不会激活。
因此，ans = [0, 1, -1]。
示例 2：
输入： n = 4, edges = [[0,1,1],[0,2,1],[1,3,2],[2,3,2]], requiredSignals = [3,1,1,2]
输出： [0,1,1,3]
解释：
尽管 requiredSignals[0] = 3，节点 0 在时刻 0 仍处于激活状态，并向节点 1 和节点 2 发送信号。
在时刻 1，节点 1 和节点 2 各自收到所需的 1 个信号并激活，随后各自立即向节点 3 发送一个信号。
两个信号都在时刻 1 + 2 = 3 到达节点 3。它们来自两个不同的入邻居，因此节点 3 在时刻 3 激活。
因此，ans = [0, 1, 1, 3]。
示例 3：
输入： n = 4, edges = [[0,1,2],[1,2,3],[0,2,5],[2,3,1]], requiredSignals = [3,1,2,1]
输出： [0,2,5,6]
解释：
节点 0 在时刻 0 处于激活状态，向节点 1 和节点 2 发送信号。
节点 1 在时刻 2 收到信号，随即激活并向节点 2 发送一个信号。
在时刻 5，节点 2 收到来自节点 0 和节点 1 的信号，其中来自节点 1 的信号到达时刻为 2 + 3 = 5。节点 2 已收到来自 2 个不同入邻居的信号，满足激活条件，于是激活并向节点 3 发送一个信号。
节点 3 在时刻 5 + 1 = 6 收到该信号并激活。
因此，ans = [0, 2, 5, 6]。
示例 4：
输入： n = 4, edges = [[0,1,2],[1,0,1],[1,2,1],[2,3,1],[3,2,1]], requiredSignals = [3,1,2,1]
输出： [0,2,-1,-1]
解释：
节点 0 在时刻 0 处于激活状态，向节点 1 发送一个信号。
节点 1 在时刻 2 激活，并向节点 0 和节点 2 发送信号。这两个信号都在时刻 3 到达。
节点 0 已经激活，因此收到另一个信号后不会再次发送信号。
节点 2 必须收到节点 1 和节点 3 各自发出的信号，但它只收到了节点 1 发出的信号。节点 3 正在等待来自节点 2 的信号，因此节点 2 和节点 3 都不会激活。
因此，ans = [0, 2, -1, -1]。

提示：
2 <= n == requiredSignals.length <= 105
0 <= edges.length <= 105
edges[i] = [ui, vi, delayi]
0 <= ui, vi <= n - 1
ui != vi
1 <= delayi <= 109
从任意节点 ui 到任意节点 vi 至多有一条有向边。
1 <= requiredSignals[i] <= n - 1
Hint 1: Simulate signal arrivals in chronological order rather than advancing time one unit at a time.
Hint 2: Use a min-heap of arrival events (time, destination). Activate node 0 at time 0 and insert the arrivals along its outgoing edges.
Hint 3: For each inactive node, count the signals that have arrived. Each incoming neighbor contributes at most once because it activates only once and parallel directed edges are forbidden.
Hint 4: When a node receives its required number of signals, activate it at the current event time and insert all of its outgoing arrivals. Ignore later arrivals to an already active node.
Hint 5: Nodes still inactive when the heap becomes empty have answer -1. Each edge generates at most one event; use 64-bit integers for arrival times.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Directed graph with delays. Node 0 active at t=0, fires once per out-edge. Inactive node v activates at the earliest time it has received signals from >= requiredSignals[v] DISTINCT in-neighbors. Answer per node or -1.

Approach: event-driven simulation with a binary min-heap of (time, dest). Each node fires once (each out-edge yields one arrival event); since parallel edges are forbidden, a plain arrival counter per inactive node equals distinct senders. Activate when counter reaches requirement; ignore events to active nodes; leftover nodes are -1. O(E log E); times <= 1e14 < 2^53.
