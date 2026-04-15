# [826] Most Profit Assigning Work

## Description

[LeetCode Problem Description](https://leetcode.com/problems/most-profit-assigning-work/description/)

* algorithms
* Medium (56.17%)
* Likes:    2542
* Dislikes: 174
* Testcase Example:  '[2,4,6,8,10]\n[10,20,30,40,50]\n[4,5,6,7]'

```md
You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:

difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with difficulty at most worker[j]).

Every worker can be assigned at most one job, but one job can be completed multiple times.

For example, if three workers attempt the same job that pays $1, then the total profit will be $3. If a worker cannot complete any job, their profit is $0.

Return the maximum profit we can achieve after assigning the workers to the jobs.

Example 1:

Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
Output: 100
Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.

Example 2:

Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
Output: 0


Constraints:

n == difficulty.length
n == profit.length
m == worker.length
1 <= n, m <= 104
1 <= difficulty[i], profit[i], worker[i] <= 105


```

## 中文翻译

给定 difficulty、profit、worker 三个数组。每个工人能力为 worker[j]，只能完成难度 <= 其能力的任务。每个工人最多做一个任务，任务可重复。求最大总收益。

## 解题思路

将任务按难度排序，预处理前缀最大收益（因为更难的任务收益可能更低）。工人也排序后，双指针遍历：对每个工人找到他能完成的最大收益任务。

时间复杂度：O(n log n + m log m)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
