# [252] 会议室

## Description


```md
https://leetcode.cn/problems/meeting-rooms/description/
* algorithms
* Easy (59.55%)
* Likes:    177
* Dislikes: -
* Testcase Example:  '[[0,30],[5,10],[15,20]]'
给定一个会议时间安排的数组 intervals ，其中 intervals[i] = [starti, endi]。
一个人可以参加所有会议，只要没有两个会议的时间段重叠。在时间 t 结束的会议和在时间 t 开始的会议不重叠。
如果一个人能够参加这里面的全部会议，返回 true，否则返回 false。

示例 1：
输入：intervals = [[0,30],[5,10],[15,20]]
输出：false
示例 2：
输入：intervals = [[7,10],[2,4]]
输出：true

提示：
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti < endi <= 106

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an array of meeting time `intervals` `[start, end]`, determine if a person could attend all meetings (no overlaps; touching endpoints like [0,5] and [5,10] are allowed).

**Example:**
[[0,30],[5,10],[15,20]] → false

## Approach

按开始时间排序,相邻区间若 `start < 前一个 end` 即重叠。

时间 O(n log n),空间 O(1)(原地排序)。
