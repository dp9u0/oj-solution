# [1986] Minimum Number of Work Sessions to Finish the Tasks

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/description/)

* algorithms
* Medium (34.74%)
* Likes:    1187
* Dislikes: 71
* Testcase Example:  '[1,2,3]\n3'

```md
There are n tasks assigned to you. The task times are represented as an integer array tasks of length n, where the ith task takes tasks[i] hours to finish. A work session is when you work for at most sessionTime consecutive hours and then take a break.
You should finish the given tasks in a way that satisfies the following conditions:

If you start a task in a work session, you must complete it in the same work session.
You can start a new task immediately after finishing the previous one.
You may complete the tasks in any order.

Given tasks and sessionTime, return the minimum number of work sessions needed to finish all the tasks following the conditions above.
The tests are generated such that sessionTime is greater than or equal to the maximum element in tasks[i].

Example 1:

Input: tasks = [1,2,3], sessionTime = 3
Output: 2
Explanation: You can finish the tasks in two work sessions.
- First work session: finish the first and the second tasks in 1 + 2 = 3 hours.
- Second work session: finish the third task in 3 hours.

Example 2:

Input: tasks = [3,1,3,1,1], sessionTime = 8
Output: 2
Explanation: You can finish the tasks in two work sessions.
- First work session: finish all the tasks except the last one in 3 + 1 + 3 + 1 = 8 hours.
- Second work session: finish the last task in 1 hour.

Example 3:

Input: tasks = [1,2,3,4,5], sessionTime = 15
Output: 1
Explanation: You can finish all the tasks in one work session.


Constraints:

n == tasks.length
1 <= n <= 14
1 <= tasks[i] <= 10
max(tasks[i]) <= sessionTime <= 15


```

## 题目翻译

给定任务时间数组和会话时长，每个会话最多 sessionTime 小时，任务必须完整完成，求最少会话数。

## 解题思路

**位掩码DP**：dp[mask] = [sessions, remaining]，表示完成 mask 中任务的最少会话数及当前会话剩余时间。每次尝试加入新任务，贪心选更少会话/更多剩余。

## Solution

[SourceCode](./solution.js)
