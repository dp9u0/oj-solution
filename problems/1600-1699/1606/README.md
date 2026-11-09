# [WARN] Failed to refresh problems: session expired, please re-login via cookie (leetcode user -c), using stale cache

## Description


```md
[1606] 找到处理最多请求的服务器
https://leetcode.cn/problems/find-servers-that-handled-most-number-of-requests/description/
* algorithms
* Hard (48.63%)
* Likes:    183
* Dislikes: -
* Testcase Example:  '3\n[1,2,3,4,5]\n[5,2,3,3,3]'
你有 k 个服务器，编号为 0 到 k-1 ，它们可以同时处理多个请求组。每个服务器有无穷的计算能力但是 不能同时处理超过一个请求 。请求分配到服务器的规则如下：
第 i （序号从 0 开始）个请求到达。
如果所有服务器都已被占据，那么该请求被舍弃（完全不处理）。
如果第 (i % k) 个服务器空闲，那么对应服务器会处理该请求。
否则，将请求安排给下一个空闲的服务器（服务器构成一个环，必要的话可能从第 0 个服务器开始继续找下一个空闲的服务器）。比方说，如果第 i 个服务器在忙，那么会查看第 (i+1) 个服务器，第 (i+2) 个服务器等等。
给你一个 严格递增 的正整数数组 arrival ，表示第 i 个任务的到达时间，和另一个数组 load ，其中 load[i] 表示第 i 个请求的工作量（也就是服务器完成它所需要的时间）。你的任务是找到 最繁忙的服务器 。最繁忙定义为一个服务器处理的请求数是所有服务器里最多的。
请你返回包含所有 最繁忙服务器 序号的列表，你可以以任意顺序返回这个列表。

示例 1：
输入：k = 3, arrival = [1,2,3,4,5], load = [5,2,3,3,3]
输出：[1]
解释：
所有服务器一开始都是空闲的。
前 3 个请求分别由前 3 台服务器依次处理。
请求 3 进来的时候，服务器 0 被占据，所以它被安排到下一台空闲的服务器，也就是服务器 1 。
请求 4 进来的时候，由于所有服务器都被占据，该请求被舍弃。
服务器 0 和 2 分别都处理了一个请求，服务器 1 处理了两个请求。所以服务器 1 是最忙的服务器。
示例 2：
输入：k = 3, arrival = [1,2,3,4], load = [1,2,1,2]
输出：[0]
解释：
前 3 个请求分别被前 3 个服务器处理。
请求 3 进来，由于服务器 0 空闲，它被服务器 0 处理。
服务器 0 处理了两个请求，服务器 1 和 2 分别处理了一个请求。所以服务器 0 是最忙的服务器。
示例 3：
输入：k = 3, arrival = [1,2,3], load = [10,12,11]
输出：[0,1,2]
解释：每个服务器分别处理了一个请求，所以它们都是最忙的服务器。
示例 4：
输入：k = 3, arrival = [1,2,3,4,8,9,10], load = [5,2,10,3,1,2,2]
输出：[1]
示例 5：
输入：k = 1, arrival = [1], load = [1]
输出：[0]

提示：
1 <= k <= 105
1 <= arrival.length, load.length <= 105
arrival.length == load.length
1 <= arrival[i], load[i] <= 109
arrival 保证 严格递增 。
Hint 1: To speed up the next available server search, keep track of the available servers in a sorted structure such as an ordered set.
Hint 2: To determine if a server is available, keep track of the end times for each task in a heap and add the server to the available set once the soonest task ending time is less than or equal to the next task to add.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You have `k` servers numbered from `0` to `k-1` that can handle multiple request groups simultaneously. Each server has infinite computational capacity but **cannot handle more than one request at a time**. Requests are assigned to servers according to the following rules:

- The `i-th` (0-indexed) request arrives.
- If all servers are occupied, the request is discarded (not handled at all).
- If the `(i % k)-th` server is free, that server handles the request.
- Otherwise, the request is assigned to the next free server (servers form a ring, wrapping around from server `0` if necessary). For example, if server `i` is busy, servers `i+1`, `i+2`, ... are checked in order.

You are given a **strictly increasing** array `arrival` where `arrival[i]` is the arrival time of the `i-th` request, and another array `load` where `load[i]` is the workload of the `i-th` request (the time a server needs to complete it). Find the **busiest server(s)**: the server(s) that handle the most number of requests. Return a list containing the IDs of all the busiest servers; you may return them in any order.

## 解题思路

- 每个请求 `i` 优先分配给服务器 `i % k`,忙碌则沿环找下一个空闲服务器,全忙则丢弃。
- **空闲服务器集合**:需要支持「找 ≥ x 的第一个空闲服务器」与「回绕找最小空闲服务器」,JS 中没有内置有序集合,用**树状数组 (BIT)** 模拟:空闲服务器记 1,支持按排名找第 k 个空闲服务器,O(log k) 完成。
- **忙碌服务器释放**:用**最小堆**维护 `(结束时间, 服务器编号)`,请求 `i` 到达时把所有 `结束时间 <= arrival[i]` 的服务器弹出并归还到空闲集合。
- 每个请求:先释放到期服务器 → `start = i % k` → 空闲集合中 `[start, k-1]` 有空闲则取第一个,否则回绕取全局最小空闲,均无则丢弃;分配后将服务器从空闲集合移除并压入堆。
- 最后统计每台服务器处理数,返回最大值对应的所有下标。

复杂度:时间 O((k + n) log k),空间 O(k)。
