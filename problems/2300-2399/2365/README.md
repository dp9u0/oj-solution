# [2365] Task Scheduler II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/task-scheduler-ii/description/)

* algorithms
* Medium (54.75%)
* Likes:    624
* Dislikes: 76
* Testcase Example:  '[1,2,1,2,3,1]\n3'

```md
You are given a 0-indexed array of positive integers tasks, representing tasks that need to be completed in order, where tasks[i] represents the type of the ith task.
You are also given a positive integer space, which represents the minimum number of days that must pass after the completion of a task before another task of the same type can be performed.
Each day, until all tasks have been completed, you must either:

Complete the next task from tasks, or
Take a break.

Return the minimum number of days needed to complete all tasks.

Example 1:

Input: tasks = [1,2,1,2,3,1], space = 3
Output: 9
Explanation:
One way to complete all tasks in 9 days is as follows:
Day 1: Complete the 0th task.
Day 2: Complete the 1st task.
Day 3: Take a break.
Day 4: Take a break.
Day 5: Complete the 2nd task.
Day 6: Complete the 3rd task.
Day 7: Take a break.
Day 8: Complete the 4th task.
Day 9: Complete the 5th task.
It can be shown that the tasks cannot be completed in less than 9 days.

Example 2:

Input: tasks = [5,8,8,5], space = 2
Output: 6
Explanation:
One way to complete all tasks in 6 days is as follows:
Day 1: Complete the 0th task.
Day 2: Complete the 1st task.
Day 3: Take a break.
Day 4: Take a break.
Day 5: Complete the 2nd task.
Day 6: Complete the 3rd task.
It can be shown that the tasks cannot be completed in less than 6 days.


Constraints:

1 <= tasks.length <= 105
1 <= tasks[i] <= 109
1 <= space <= tasks.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定按顺序执行的任务数组 tasks 和冷却时间 space。完成某类型任务后，必须等待 space 天才能再次执行同类型任务。每天要么执行下一个任务，要么休息。返回完成所有任务的最少天数。

## Approach

贪心模拟。用 Map 记录每种任务上次完成的天数。遍历任务，维护当前天数 day。如果当前任务类型上次完成时间 lastDay 存在，且 day - lastDay <= space，则需要等待到 lastDay + space + 1 天。

时间复杂度 O(n)，空间复杂度 O(n)。
