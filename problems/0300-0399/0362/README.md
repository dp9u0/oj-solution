# [362] 敲击计数器

## Description


```md
https://leetcode.cn/problems/design-hit-counter/description/
* algorithms
* Medium (66.86%)
* Likes:    124
* Dislikes: -
* Testcase Example:  '["HitCounter","hit","hit","hit","getHits","hit","getHits","getHits"]\n' +
'[[],[1],[2],[3],[4],[300],[300],[301]]'
设计一个敲击计数器，使它可以统计在过去 5 分钟内被敲击次数。（即过去 300 秒）
您的系统应该接受一个时间戳参数 timestamp (单位为 秒 )，并且您可以假定对系统的调用是按时间顺序进行的(即 timestamp 是单调递增的)。几次撞击可能同时发生。
实现 HitCounter 类:
HitCounter() 初始化命中计数器系统。
void hit(int timestamp) 记录在 timestamp ( 单位为秒 )发生的一次命中。在同一个 timestamp 中可能会出现几个点击。
int getHits(int timestamp) 返回 timestamp 在过去 5 分钟内(即过去 300 秒)的命中次数。

示例 1:
输入：
["HitCounter", "hit", "hit", "hit", "getHits", "hit", "getHits", "getHits"]
[[], [1], [2], [3], [4], [300], [300], [301]]
输出：
[null, null, null, null, 3, null, 4, 3]
解释：
HitCounter counter = new HitCounter();
counter.hit(1);// 在时刻 1 敲击一次。
counter.hit(2);// 在时刻 2 敲击一次。
counter.hit(3);// 在时刻 3 敲击一次。
counter.getHits(4);// 在时刻 4 统计过去 5 分钟内的敲击次数, 函数返回 3 。
counter.hit(300);// 在时刻 300 敲击一次。
counter.getHits(300); // 在时刻 300 统计过去 5 分钟内的敲击次数，函数返回 4 。
counter.getHits(301); // 在时刻 301 统计过去 5 分钟内的敲击次数，函数返回 3 。

提示:
1 <= timestamp <= 2 * 109
所有对系统的调用都是按时间顺序进行的（即 timestamp 是单调递增的）
hit and getHits 最多被调用 300 次

进阶: 如果每秒的敲击次数是一个很大的数字，你的计数器可以应对吗？

```

## Solution

[SourceCode](./solution.js)

## Translation

Design a hit counter that counts the number of hits in the past 5 minutes (300 seconds). The system accepts a `timestamp` (in seconds); calls arrive in chronological order (timestamps monotonically increasing). Multiple hits may occur at the same timestamp.

- `HitCounter()` initializes the counter.
- `hit(timestamp)` records a hit at the given second.
- `getHits(timestamp)` returns the number of hits in the past 300 seconds.

Example: hit(1), hit(2), hit(3) → getHits(4) = 3; hit(300) → getHits(300) = 4, getHits(301) = 3.

Constraints: `1 <= timestamp <= 2*10^9`; at most 300 calls to hit/getHits.

Follow-up: what if there could be a huge number of hits per second?

## Approach

环形桶设计(直接应对进阶:每秒海量敲击):

- 300 个桶对应 `timestamp % 300`,每桶存 `(桶内时间戳, 计数)`。
- `hit(ts)`:定位 `ts % 300`;桶时间戳 ≠ ts 说明该桶是 300 秒前的旧数据,重置为 `(ts, 1)`;否则计数 +1。同秒百万次敲击也只是计数累加,O(1)。
- `getHits(ts)`:遍历 300 桶,`ts - 桶时间戳 < 300` 的计数求和,O(300)。

时间 O(1) / O(300),空间 O(300)。备选:队列存全部敲击(getHits 弹出队首过期项),但同秒海量敲击会撑爆内存——桶方案胜出。
