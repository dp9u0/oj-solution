# [LCR 042] 最近的请求次数

## Description


```md
https://leetcode.cn/problems/H8086Q/description/
* algorithms
* Easy (81.88%)
* Likes:    52
* Dislikes: -
* Testcase Example:  '["RecentCounter","ping","ping","ping","ping"]\n[[],[1],[100],[3001],[3002]]'
写一个 RecentCounter 类来计算特定时间范围内最近的请求。
请实现 RecentCounter 类：
RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。

示例：
输入：
inputs = ["RecentCounter", "ping", "ping", "ping", "ping"]
inputs = [[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]
解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3

提示：
1 <= t <= 109
保证每次对 ping 调用所使用的 t 值都 严格递增
至多调用 ping 方法 104 次

注意：本题与主站 933 题相同： https://leetcode.cn/problems/number-of-recent-calls/

```

## Translation

```md
Write a class RecentCounter to count recent requests within a specific time range.

Implement the RecentCounter class:
- RecentCounter() Initializes the counter with zero requests.
- int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that have happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have occurred in the inclusive range [t - 3000, t].

It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

Example:
Input:
inputs = ["RecentCounter", "ping", "ping", "ping", "ping"]
inputs = [[], [1], [100], [3001], [3002]]
Output:
[null, 1, 2, 3, 3]

Explanation:
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

Constraints:
1 <= t <= 10^9
Each test case will call ping with strictly increasing values of t.
At most 10^4 calls will be made to ping.

Note: This problem is the same as problem 933 on the main site: https://leetcode.cn/problems/number-of-recent-calls/
```

## Approach

- 使用队列/滑动窗口思想。请求时间 t 严格递增,因此窗口左边界 [t-3000] 单调右移。
- 用一个数组存储所有请求时间,并维护头指针 `head` 指向窗口内最早的请求。
- 每次 `ping(t)`:
  1. 将队头所有 `< t - 3000` 的元素过期(移动 head)。
  2. 将 t 入队。
  3. 返回窗口内数量 = 数组长度 - head。
- 复杂度: 每个元素最多入队出队一次,总时间 O(n),空间 O(n)。用头指针代替 `shift()` 使单次出队 O(1)。

## Solution

[SourceCode](./solution.js)
