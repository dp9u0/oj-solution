# [2589] Minimum Time to Complete All Tasks

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/description/)

* algorithms
* Hard (39.89%)
* Likes:    463
* Dislikes: 21
* Testcase Example:  '[[2,3,1],[4,5,1],[1,5,2]]'

```md
There is a computer that can run an unlimited number of tasks at the same time. You are given a 2D integer array tasks where tasks[i] = [starti, endi, durationi] indicates that the ith task should run for a total of durationi seconds (not necessarily continuous) within the inclusive time range [starti, endi].
You may turn on the computer only when it needs to run a task. You can also turn it off if it is idle.
Return the minimum time during which the computer should be turned on to complete all tasks.

Example 1:

Input: tasks = [[2,3,1],[4,5,1],[1,5,2]]
Output: 2
Explanation:
- The first task can be run in the inclusive time range [2, 2].
- The second task can be run in the inclusive time range [5, 5].
- The third task can be run in the two inclusive time ranges [2, 2] and [5, 5].
The computer will be on for a total of 2 seconds.

Example 2:

Input: tasks = [[1,3,2],[2,5,3],[5,6,2]]
Output: 4
Explanation:
- The first task can be run in the inclusive time range [2, 3].
- The second task can be run in the inclusive time ranges [2, 3] and [5, 5].
- The third task can be run in the two inclusive time range [5, 6].
The computer will be on for a total of 4 seconds.


Constraints:

1 <= tasks.length <= 2000
tasks[i].length == 3
1 <= starti, endi <= 2000
1 <= durationi <= endi - starti + 1


```

## 中文翻译

每个任务需要在 [start, end] 范围内运行 duration 秒（可不连续），电脑可同时运行无限任务。求电脑最少开启多少秒。

## 解题思路

**贪心+并查集**

按 end 排序，每个任务尽量使用已被其他任务占用的时间段，不足的部分从末尾开始占用新的时间。

用并查集（路径压缩）管理已被占用的时间点：find(t) 返回 t 及之前最后一个空闲时间点，占用后将其连到 t-1。

时间复杂度：O(n * maxTime * α)，空间复杂度：O(maxTime)

## Solution

[SourceCode](./solution.js)
