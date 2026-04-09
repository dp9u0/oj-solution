# [1723] Find Minimum Time to Finish All Jobs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/description/)

* algorithms
* Hard (45.55%)
* Likes:    1135
* Dislikes: 39
* Testcase Example:  '[3,2,3]\n3'

```md
You are given an integer array jobs, where jobs[i] is the amount of time it takes to complete the ith job.
There are k workers that you can assign jobs to. Each job should be assigned to exactly one worker. The working time of a worker is the sum of the time it takes to complete all jobs assigned to them. Your goal is to devise an optimal assignment such that the maximum working time of any worker is minimized.
Return the minimum possible maximum working time of any assignment.

Example 1:

Input: jobs = [3,2,3], k = 3
Output: 3
Explanation: By assigning each person one job, the maximum time is 3.

Example 2:

Input: jobs = [1,2,4,7,8], k = 2
Output: 11
Explanation: Assign the jobs the following way:
Worker 1: 1, 2, 8 (working time = 1 + 2 + 8 = 11)
Worker 2: 4, 7 (working time = 4 + 7 = 11)
The maximum working time is 11.

Constraints:

1 <= k <= jobs.length <= 12
1 <= jobs[i] <= 107


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 jobs 数组和 k 个工人，每个 job 分配给恰好一个工人，工人工时 = 其分配到的 job 之和。最小化最大工时。

## 解题思路

**Approach: 二分答案 + 回溯剪枝**

1. 二分搜索最大工时 limit
2. 对每个 limit，DFS 尝试将每个 job 分配给某个工人（加上该 job 后不超过 limit）
3. 剪枝：job 降序排列；空工人只尝试第一个（对称性剪枝）
4. 时间 O(k^n * log(sum))，n <= 12 可行
