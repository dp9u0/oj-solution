# [1335] Minimum Difficulty of a Job Schedule

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/description/)

* algorithms
* Hard (59.74%)
* Likes:    3600
* Dislikes: 336
* Testcase Example:  '[6,5,4,3,2,1]\n2'

```md
You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the ith job, you have to finish all the jobs j where 0 <= j < i).
You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done on that day.
You are given an integer array jobDifficulty and an integer d. The difficulty of the ith job is jobDifficulty[i].
Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.

Example 1:


Input: jobDifficulty = [6,5,4,3,2,1], d = 2
Output: 7
Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
Second day you can finish the last job, total difficulty = 1.
The difficulty of the schedule = 6 + 1 = 7

Example 2:

Input: jobDifficulty = [9,9,9], d = 4
Output: -1
Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.

Example 3:

Input: jobDifficulty = [1,1,1], d = 3
Output: 3
Explanation: The schedule is one job per day. total difficulty will be 3.


Constraints:

1 <= jobDifficulty.length <= 300
0 <= jobDifficulty[i] <= 1000
1 <= d <= 10


```

## 中文翻译

将 n 个工作分配到 d 天，工作有顺序依赖（第 i 个工作之前必须完成 0..i-1）。每天至少完成一个工作。每天难度 = 当天最大工作难度。总难度 = 各天难度之和。求最小总难度，无法分配返回 -1。

约束：n <= 300, d <= 10

## 解题思路

**区间 DP**

1. dp[i][j] = 前 i 天完成前 j 个工作的最小总难度。
2. 转移：dp[i][j] = min(dp[i-1][k] + max(jobDifficulty[k..j-1]))，其中 k 从 i-1 到 j-1。
3. 初始化：dp[0][0] = 0，其余无穷大。
4. 优化：可以从后往前枚举 k，同时维护 max。

## Solution

[SourceCode](./solution.js)
