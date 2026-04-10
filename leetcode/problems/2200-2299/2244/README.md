# [2244] Minimum Rounds to Complete All Tasks

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/)

* algorithms
* Medium (63.27%)
* Likes:    2851
* Dislikes: 85
* Testcase Example:  '[2,2,3,3,2,4,4,4,4,4]'

```md
You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.
Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

Example 1:

Input: tasks = [2,2,3,3,2,4,4,4,4,4]
Output: 4
Explanation: To complete all the tasks, a possible plan is:
- In the first round, you complete 3 tasks of difficulty level 2.
- In the second round, you complete 2 tasks of difficulty level 3.
- In the third round, you complete 3 tasks of difficulty level 4.
- In the fourth round, you complete 2 tasks of difficulty level 4.
It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.

Example 2:

Input: tasks = [2,3,3]
Output: -1
Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.


Constraints:

1 <= tasks.length <= 105
1 <= tasks[i] <= 109


Note: This question is the same as 2870: Minimum Number of Operations to Make Array Empty.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数数组 tasks，tasks[i] 表示任务难度。每轮可以完成 2 或 3 个相同难度的任务。返回完成所有任务的最少轮数，若不可能完成则返回 -1。

## Approach

用 Map 统计每种难度的任务数量。对于每个数量 count：
- count == 1：无法完成，返回 -1
- count >= 2：最少轮数 = ceil(count / 3)，因为用尽可能多的 3 能使轮数最少。具体地：count % 3 == 0 时为 count/3；count % 3 == 1 或 2 时为 ceil(count/3)（即 Math.ceil(count/3)）。

时间复杂度 O(n)，空间 O(n)。
