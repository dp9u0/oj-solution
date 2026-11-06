# [1882] 使用服务器处理任务

## Description


```md
https://leetcode.cn/problems/process-tasks-using-servers/description/
* algorithms
* Medium (35.00%)
* Likes:    97
* Dislikes: -
* Testcase Example:  '[3,3,2]\n[1,2,3,2,1,2]'
给你两个 下标从 0 开始 的整数数组 servers 和 tasks ，长度分别为 n​​​​​​ 和 m​​​​​​ 。servers[i] 是第 i​​​​​​​​​​ 台服务器的 权重 ，而 tasks[j] 是处理第 j​​​​​​ 项任务 所需要的时间（单位：秒）。
你正在运行一个仿真系统，在处理完所有任务后，该系统将会关闭。每台服务器只能同时处理一项任务。第 0 项任务在第 0 秒可以开始处理，相应地，第 j 项任务在第 j 秒可以开始处理。处理第 j 项任务时，你需要为它分配一台 权重最小 的空闲服务器。如果存在多台相同权重的空闲服务器，请选择 下标最小 的服务器。如果一台空闲服务器在第 t 秒分配到第 j 项任务，那么在 t + tasks[j] 时它将恢复空闲状态。
如果没有空闲服务器，则必须等待，直到出现一台空闲服务器，并 尽可能早 地处理剩余任务。 如果有多项任务等待分配，则按照 下标递增 的顺序完成分配。
如果同一时刻存在多台空闲服务器，可以同时将多项任务分别分配给它们。
构建长度为 m 的答案数组 ans ，其中 ans[j] 是第 j 项任务分配的服务器的下标。
返回答案数组 ans​​​​ 。

示例 1：
输入：servers = [3,3,2], tasks = [1,2,3,2,1,2]
输出：[2,2,0,2,1,2]
解释：事件按时间顺序如下：
- 0 秒时，第 0 项任务加入到任务队列，使用第 2 台服务器处理到 1 秒。
- 1 秒时，第 2 台服务器空闲，第 1 项任务加入到任务队列，使用第 2 台服务器处理到 3 秒。
- 2 秒时，第 2 项任务加入到任务队列，使用第 0 台服务器处理到 5 秒。
- 3 秒时，第 2 台服务器空闲，第 3 项任务加入到任务队列，使用第 2 台服务器处理到 5 秒。
- 4 秒时，第 4 项任务加入到任务队列，使用第 1 台服务器处理到 5 秒。
- 5 秒时，所有服务器都空闲，第 5 项任务加入到任务队列，使用第 2 台服务器处理到 7 秒。
示例 2：
输入：servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]
输出：[1,4,1,4,1,3,2]
解释：事件按时间顺序如下：
- 0 秒时，第 0 项任务加入到任务队列，使用第 1 台服务器处理到 2 秒。
- 1 秒时，第 1 项任务加入到任务队列，使用第 4 台服务器处理到 2 秒。
- 2 秒时，第 1 台和第 4 台服务器空闲，第 2 项任务加入到任务队列，使用第 1 台服务器处理到 4 秒。
- 3 秒时，第 3 项任务加入到任务队列，使用第 4 台服务器处理到 7 秒。
- 4 秒时，第 1 台服务器空闲，第 4 项任务加入到任务队列，使用第 1 台服务器处理到 9 秒。
- 5 秒时，第 5 项任务加入到任务队列，使用第 3 台服务器处理到 7 秒。
- 6 秒时，第 6 项任务加入到任务队列，使用第 2 台服务器处理到 7 秒。

提示：
servers.length == n
tasks.length == m
1 <= n, m <= 2 * 105
1 <= servers[i], tasks[j] <= 2 * 105
Hint 1: You can maintain a Heap of available Servers and a Heap of unavailable servers
Hint 2: Note that the tasks will be processed in the input order so you just need to find the x-th server that will be available according to the rules

```

## Description (English)

You are given two 0-indexed integer arrays `servers` and `tasks`, of lengths `n` and `m` respectively. `servers[i]` is the weight of the i-th server, and `tasks[j]` is the time (in seconds) needed to process the j-th task.

You are running a simulation system that shuts down after all tasks are processed. Each server can process at most one task at a time. Task 0 can start being processed at second 0, and correspondingly task j can start at second j. When processing task j, you must assign it a free server with the minimum weight. If there are multiple free servers with the same weight, choose the one with the smallest index. If a free server is assigned task j at second t, it becomes free again at second t + tasks[j].

If there are no free servers, you must wait until one becomes free and process the remaining tasks as early as possible. If multiple tasks are waiting for assignment, they are assigned in order of increasing index.

If multiple servers become free at the same moment, multiple tasks can be assigned to them simultaneously.

Build an answer array `ans` of length m, where `ans[j]` is the index of the server assigned to the j-th task.

Return the answer array `ans`.

Example 1:
Input: servers = [3,3,2], tasks = [1,2,3,2,1,2]
Output: [2,2,0,2,1,2]
(Events processed in chronological order as described above.)

Example 2:
Input: servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]
Output: [1,4,1,4,1,3,2]

Constraints:
- servers.length == n
- tasks.length == m
- 1 <= n, m <= 2 * 10^5
- 1 <= servers[i], tasks[j] <= 2 * 10^5

## 思路

双堆模拟（空闲堆 + 忙碌堆）：

- **空闲堆 free**：元素 `[weight, index]`，按权重升序、权重相同按下标升序 —— 保证每次取出的是「权重最小、下标最小」的空闲服务器。
- **忙碌堆 busy**：元素 `[freeTime, weight, index]`，按恢复空闲时刻 `freeTime` 升序 —— 便于把最早空闲的服务器放回去。

按任务下标顺序处理，维护当前仿真时刻 `t`（初始 0，且 `t = max(t, j)`，因为任务 j 最早在第 j 秒到达）：

1. 先把 busy 堆中所有 `freeTime <= t` 的服务器弹出并压回 free 堆（同一时刻可释放多台）。
2. 若 free 堆非空：取出堆顶分配给当前任务，`ans[j]` 记录其下标，并将 `[t + tasks[j], weight, index]` 压入 busy 堆。
3. 若 free 堆为空：说明必须等待，将 `t` 推进到 busy 堆顶的 `freeTime`（最早空闲时刻），弹出该时刻的所有服务器放回 free 堆，再取堆顶分配。由于下一轮 `t = max(t, j)` 已超前于后续任务的到达时间，等待期间到达的任务会在同一时刻按顺序依次分配，天然满足「等待任务按下标递增分配」。

复杂度：每台服务器进出堆常数次、每个任务处理一次，总操作 O((n + m) log n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
