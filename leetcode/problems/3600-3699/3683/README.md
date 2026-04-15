# [3683] Earliest Time to Finish One Task

## Description

[LeetCode Problem Description](https://leetcode.com/problems/earliest-time-to-finish-one-task/description/)

* algorithms
* Easy (84.54%)
* Likes:    48
* Dislikes: 3
* Testcase Example:  '[[1,6],[2,3]]'

```md
You are given a 2D integer array tasks where tasks[i] = [si, ti].
Each [si, ti] in tasks represents a task with start time si that takes ti units of time to finish.
Return the earliest time at which at least one task is finished.

Example 1:

Input: tasks = [[1,6],[2,3]]
Output: 5
Explanation:
The first task starts at time t = 1 and finishes at time 1 + 6 = 7. The second task finishes at time 2 + 3 = 5. You can finish one task at time 5.

Example 2:

Input: tasks = [[100,100],[100,100],[100,100]]
Output: 200
Explanation:
All three tasks finish at time 100 + 100 = 200.


Constraints:

1 <= tasks.length <= 100
tasks[i] = [si, ti]
1 <= si, ti <= 100


```

## 中文翻译

给定任务数组 tasks，每个任务 [si, ti] 表示从时间 si 开始，耗时 ti。返回至少一个任务完成的最早时间。

## 解题思路

每个任务的完成时间 = si + ti，取最小值即可。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
