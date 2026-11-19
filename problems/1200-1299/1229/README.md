# [1229] 安排会议日程

## Description


```md
https://leetcode.cn/problems/meeting-scheduler/description/
* algorithms
* Medium (48.49%)
* Likes:    89
* Dislikes: -
* Testcase Example:  '[[10,50],[60,120],[140,210]]\n[[0,15],[60,70]]\n8'
给定两个人的空闲时间表：slots1 和 slots2，以及会议的预计持续时间 duration，请你为他们安排 时间段最早 且合适的会议时间。
如果没有满足要求的会议时间，就请返回一个 空数组。
「空闲时间」的格式是 [start, end]，由开始时间 start 和结束时间 end 组成，表示从 start 开始，到 end 结束。
题目保证数据有效：同一个人的空闲时间不会出现交叠的情况，也就是说，对于同一个人的两个空闲时间 [start1, end1] 和 [start2, end2]，要么 start1 > end2，要么 start2 > end1。

示例 1：
输入：slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8
输出：[60,68]
示例 2：
输入：slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12
输出：[]

提示：
1 <= slots1.length, slots2.length <= 104
slots1[i].length, slots2[i].length == 2
slots1[i][0] < slots1[i][1]
slots2[i][0] < slots2[i][1]
0 <= slots1[i][j], slots2[i][j] <= 109
1 <= duration <= 106
Hint 1: Assume that in the solution, the selected slot from slotsA is bigger than the respectively selected slot from slotsB.
Hint 2: Use two pointers in order to try all the possible intersections, and check the length.
Hint 3: Do the same in step N° 1 but now assume that the selected slot from slotsB is bigger, return the minimum of the two options.

```

## Solution

[SourceCode](./solution.js)

## Translation

Given two people's non-overlapping free-time slot lists and a duration, return the EARLIEST common slot [t, t+duration], else [].

- Example: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8 → `[60,68]`

## Approach

**排序 + 对撞指针**。两列表按 start 升序;当前对交集 = [max(s1,s2), min(e1,e2)],长度 ≥ duration 即返回(首个即最早);否则弹出 end 较小的一侧。O(n log n + m log m + n + m)。
