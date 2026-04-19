# [2895] Minimum Processing Time

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-processing-time/description/)

* algorithms
* Medium (70.26%)
* Likes:    283
* Dislikes: 50
* Testcase Example:  '[8,10]\n[2,2,3,1,8,7,4,5]'

```md
You have a certain number of processors, each having 4 cores. The number of tasks to be executed is four times the number of processors. Each task must be assigned to a unique core, and each core can only be used once.
You are given an array processorTime representing the time each processor becomes available and an array tasks representing how long each task takes to complete. Return theminimum time needed to complete all tasks.

Example 1:

Input: processorTime = [8,10], tasks = [2,2,3,1,8,7,4,5]
Output: 16
Explanation:
Assign the tasks at indices 4, 5, 6, 7 to the first processor which becomes available at time = 8, and the tasks at indices 0, 1, 2, 3 to the second processor which becomes available at time = 10.
The time taken by the first processor to finish the execution of all tasks ismax(8 + 8, 8 + 7, 8 + 4, 8 + 5) = 16.
The time taken by the second processor to finish the execution of all tasks ismax(10 + 2, 10 + 2, 10 + 3, 10 + 1) = 13.

Example 2:

Input: processorTime = [10,20], tasks = [2,3,1,2,5,8,4,3]
Output: 23
Explanation:
Assign the tasks at indices 1, 4, 5, 6 to the first processor and the others to the second processor.
The time taken by the first processor to finish the execution of all tasks is max(10 + 3, 10 + 5, 10 + 8, 10 + 4) = 18.
The time taken by the second processor to finish the execution of all tasks is max(20 + 2, 20 + 1, 20 + 2, 20 + 3) = 23.


Constraints:

1 <= n == processorTime.length <= 25000
1 <= tasks.length <= 105
0 <= processorTime[i] <= 109
1 <= tasks[i] <= 109
tasks.length == 4 * n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

n 个处理器各 4 核，共 4n 个任务。每个处理器在不同时间可用，每个核心执行一个任务。求最小化所有任务完成的时间。

## 解题思路

**Approach: 贪心排序配对**

1. processorTime 升序，tasks 降序
2. 最早可用的处理器配最长的 4 个任务
3. 每个处理器的完成时间 = processorTime[i] + 分配到的最大任务时间
4. 取所有处理器中的最大值
5. 时间 O(n log n)
