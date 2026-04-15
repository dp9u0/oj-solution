# [2071] Maximum Number of Tasks You Can Assign

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/description/)

* algorithms
* Hard (50.09%)
* Likes:    1097
* Dislikes: 57
* Testcase Example:  '[3,2,1]\n[0,3,3]\n1\n1'

```md
You have n tasks and m workers. Each task has a strength requirement stored in a 0-indexed integer array tasks, with the ith task requiring tasks[i] strength to complete. The strength of each worker is stored in a 0-indexed integer array workers, with the jth worker having workers[j] strength. Each worker can only be assigned to a single task and must have a strength greater than or equal to the task&#39;s strength requirement (i.e., workers[j] >= tasks[i]).
Additionally, you have pills magical pills that will increase a worker&#39;s strength by strength. You can decide which workers receive the magical pills, however, you may only give each worker at most one magical pill.
Given the 0-indexed integer arrays tasks and workers and the integers pills and strength, return the maximum number of tasks that can be completed.

Example 1:

Input: tasks = [3,2,1], workers = [0,3,3], pills = 1, strength = 1
Output: 3
Explanation:
We can assign the magical pill and tasks as follows:
- Give the magical pill to worker 0.
- Assign worker 0 to task 2 (0 + 1 >= 1)
- Assign worker 1 to task 1 (3 >= 2)
- Assign worker 2 to task 0 (3 >= 3)

Example 2:

Input: tasks = [5,4], workers = [0,0,0], pills = 1, strength = 5
Output: 1
Explanation:
We can assign the magical pill and tasks as follows:
- Give the magical pill to worker 0.
- Assign worker 0 to task 0 (0 + 5 >= 5)

Example 3:

Input: tasks = [10,15,30], workers = [0,10,10,10,10], pills = 3, strength = 10
Output: 2
Explanation:
We can assign the magical pills and tasks as follows:
- Give the magical pill to worker 0 and worker 1.
- Assign worker 0 to task 0 (0 + 10 >= 10)
- Assign worker 1 to task 1 (10 + 10 >= 15)
The last pill is not given because it will not make any worker strong enough for the last task.


Constraints:

n == tasks.length
m == workers.length
1 <= n, m <= 5 * 104
0 <= pills <= m
0 <= tasks[i], workers[j], strength <= 109


```

## 中文翻译

有 n 个任务和 m 个工人。tasks[i] 表示第 i 个任务所需力量，workers[j] 表示第 j 个工人的力量。每个工人只能分配一个任务，且力量必须 ≥ 任务需求。此外有 pills 颗药丸，每颗可使一个工人力量增加 strength（每人最多一颗）。求最多能完成多少个任务。

## 解题思路

**二分答案 + 贪心验证**：

1. 二分能完成的任务数 k，检查是否能完成 k 个任务。
2. 对 k 个最小任务和 k 个最强工人进行匹配验证：
   - 将 k 个最小任务排序，k 个最强工人排序。
   - 从最难的子任务开始，用贪心策略分配：优先不用药丸匹配最强工人；如果不够，用药丸匹配最弱能胜任的工人。
   - 用有序集合（或 TreeMap）维护可用工人，对于每个任务找最小的满足 w >= task 的工人（不用药丸），或最小的满足 w + strength >= task 的工人（用药丸）。

## Solution

[SourceCode](./solution.js)
