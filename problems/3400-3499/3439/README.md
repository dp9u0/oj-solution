# [3439] Reschedule Meetings for Maximum Free Time I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/description/)

* algorithms
* Medium (53.95%)
* Likes:    647
* Dislikes: 54
* Testcase Example:  '5\n1\n[1,3]\n[2,5]'

```md
You are given an integer eventTime denoting the duration of an event, where the event occurs from time t = 0 to time t = eventTime.
You are also given two integer arrays startTime and endTime, each of length n. These represent the start and end time of n non-overlapping meetings, where the ith meeting occurs during the time [startTime[i], endTime[i]].
You can reschedule at most k meetings by moving their start time while maintaining the same duration, to maximize the longest continuous period of free time during the event.
The relative order of all the meetings should stay the same and they should remain non-overlapping.
Return the maximum amount of free time possible after rearranging the meetings.
Note that the meetings can not be rescheduled to a time outside the event.

Example 1:

Input: eventTime = 5, k = 1, startTime = [1,3], endTime = [2,5]
Output: 2
Explanation:

Reschedule the meeting at [1, 2] to [2, 3], leaving no meetings during the time [0, 2].

Example 2:

Input: eventTime = 10, k = 1, startTime = [0,2,9], endTime = [1,4,10]
Output: 6
Explanation:

Reschedule the meeting at [2, 4] to [1, 3], leaving no meetings during the time [3, 9].

Example 3:

Input: eventTime = 5, k = 2, startTime = [0,1,2,3,4], endTime = [1,2,3,4,5]
Output: 0
Explanation:
There is no time during the event not occupied by meetings.


Constraints:

1 <= eventTime <= 109
n == startTime.length == endTime.length
2 <= n <= 105
1 <= k <= n
0 <= startTime[i] < endTime[i] <= eventTime
endTime[i] <= startTime[i + 1] where i lies in the range [0, n - 2].


```

## 题目翻译

给定事件时间 [0, eventTime] 和 n 个不重叠会议的起止时间。可以重新安排最多 k 个会议（保持时长和相对顺序），求最大连续空闲时间。

## 解题思路

**滑动窗口**

会议把时间分成 n+1 个间隔（gap）。重新安排 k 个连续会议可以将其周围的 k+1 个间隔合并为一个。

因此问题转化为：在 gap 数组上求 k+1 个连续元素的最大和，用滑动窗口解决。

## Solution

[SourceCode](./solution.js)
