# [1751] Maximum Number of Events That Can Be Attended II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/description/)

* algorithms
* Hard (63.53%)
* Likes:    2555
* Dislikes: 54
* Testcase Example:  '[[1,2,4],[3,4,3],[2,3,1]]\n2'

```md
You are given an array of events where events[i] = [startDayi, endDayi, valuei]. The ith event starts at startDayi and ends at endDayi, and if you attend this event, you will receive a value of valuei. You are also given an integer k which represents the maximum number of events you can attend.
You can only attend one event at a time. If you choose to attend an event, you must attend the entire event. Note that the end day is inclusive: that is, you cannot attend two events where one of them starts and the other ends on the same day.
Return the maximum sum of values that you can receive by attending events.

Example 1:


Input: events = [[1,2,4],[3,4,3],[2,3,1]], k = 2
Output: 7
Explanation: Choose the green events, 0 and 1 (0-indexed) for a total value of 4 + 3 = 7.
Example 2:


Input: events = [[1,2,4],[3,4,3],[2,3,10]], k = 2
Output: 10
Explanation: Choose event 2 for a total value of 10.
Notice that you cannot attend any other event as they overlap, and that you do not have to attend k events.
Example 3:


Input: events = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], k = 3
Output: 9
Explanation: Although the events do not overlap, you can only attend 3 events. Pick the highest valued three.

Constraints:

1 <= k <= events.length
1 <= k * events.length <= 106
1 <= startDayi <= endDayi <= 109
1 <= valuei <= 106


```

## 翻译

给定 events[i] = [startDay, endDay, value]，最多选 k 个不重叠事件（endDay 包含在内，即一个事件结束时另一个不能开始），求最大价值和。

## 解题思路

按 startDay 排序，DP + 二分。dp[j] 表示还可选 j 个事件时，从当前事件往后的最大价值。对每个事件，选或不选：不选则 dp[j] = dp[j]（下一个事件），选则 value + dp[next]，其中 next 是第一个 start > end 的事件（二分查找）。预计算 next 数组，O(n log n + nk)。

## Solution

[SourceCode](./solution.js)
