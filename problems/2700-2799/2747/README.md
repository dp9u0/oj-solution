# [2747] 统计没有收到请求的服务器数目

## Description


```md
https://leetcode.cn/problems/count-zero-request-servers/description/
* algorithms
* Medium (42.07%)
* Likes:    21
* Dislikes: -
* Testcase Example:  '3\n[[1,3],[2,6],[1,5]]\n5\n[10,11]'
给你一个整数 n ，表示服务器的总数目，再给你一个下标从 0 开始的 二维 整数数组 logs ，其中 logs[i] = [server_id, time] 表示 id 为 server_id 的服务器在 time 时收到了一个请求。
同时给你一个整数 x 和一个下标从 0 开始的整数数组 queries  。
请你返回一个长度等于 queries.length 的数组 arr ，其中 arr[i] 表示在时间区间 [queries[i] - x, queries[i]] 内没有收到请求的服务器数目。
注意时间区间是个闭区间。

示例 1：
输入：n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]
输出：[1,2]
解释：
对于 queries[0]：id 为 1 和 2 的服务器在区间 [5, 10] 内收到了请求，所以只有服务器 3 没有收到请求。
对于 queries[1]：id 为 2 的服务器在区间 [6,11] 内收到了请求，所以 id 为 1 和 3 的服务器在这个时间段内没有收到请求。
示例 2：
输入：n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2, queries = [3,4]
输出：[0,1]
解释：
对于 queries[0]：区间 [1, 3] 内所有服务器都收到了请求。
对于 queries[1]：只有 id 为 3 的服务器在区间 [2,4] 内没有收到请求。

提示：
1 <= n <= 105
1 <= logs.length <= 105
1 <= queries.length <= 105
logs[i].length == 2
1 <= logs[i][0] <= n
1 <= logs[i][1] <= 106
1 <= x <= 105
x < queries[i] <= 106
Hint 1: Can we use sorting and two-pointer approach here?
Hint 2: Sort the queries array and logs array based on time in increasing order.
Hint 3: For every window of size x, use sliding window and two-pointer approach to find the answer to the queries.

```

## Description (English)

You are given an integer `n` denoting the total number of servers, and a 0-indexed 2D integer array `logs`, where `logs[i] = [server_id, time]` means that the server with id `server_id` received a request at time `time`.

You are also given an integer `x` and a 0-indexed integer array `queries`.

Return an integer array `arr` of length `queries.length` where `arr[i]` represents the number of servers that did not receive any requests during the time interval `[queries[i] - x, queries[i]]`.

Note that the time interval is a closed interval.

Example 1:
Input: n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]
Output: [1,2]
Explanation:
- For queries[0]: servers with id 1 and 2 received requests in the interval [5, 10], so only server 3 did not receive any request.
- For queries[1]: only the server with id 2 received a request in the interval [6, 11], so servers 1 and 3 did not receive any request.

Example 2:
Input: n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2, queries = [3,4]
Output: [0,1]
Explanation:
- For queries[0]: all servers received requests in the interval [1, 3].
- For queries[1]: only server with id 3 did not receive any request in the interval [2, 4].

Constraints:
- 1 <= n <= 10^5
- 1 <= logs.length <= 10^5
- 1 <= queries.length <= 10^5
- logs[i].length == 2
- 1 <= logs[i][0] <= n
- 1 <= logs[i][1] <= 10^6
- 1 <= x <= 10^5
- x < queries[i] <= 10^6

## 思路

离线查询 + 滑动窗口（排序 + 双指针）：

1. 将 `logs` 按时间 `time` 升序排序。
2. 将 `queries` 的**下标**按查询时间升序排序（记录原下标，最后按原顺序回填答案）。
3. 依次处理每个排序后的查询 `q`，其时间窗口为闭区间 `[q - x, q]`。由于查询时间单调递增，窗口左右端点也单调递增，可用双指针在排序后的 logs 上维护当前窗口：
   - 右指针 `j`：只要 `logs[j].time <= q`，把该条日志纳入窗口 —— `cnt[id]++`，若从 0 变 1 则活跃服务器数 `active++`。
   - 左指针 `i`：只要 `logs[i].time < q - x`，把该条日志移出窗口 —— `cnt[id]--`，若减到 0 则 `active--`。
4. 该查询的答案 = `n - active`（总服务器数减去窗口内收到过请求的不同服务器数）。

复杂度：排序 O(L log L + Q log Q)，双指针每个日志进出窗口各一次 O(L)，总计 O(L log L + Q log Q)，空间 O(n + Q)。

## Solution

[SourceCode](./solution.js)
