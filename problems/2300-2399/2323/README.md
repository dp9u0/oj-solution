# [2323] 完成所有工作的最短时间 II

## Description


```md
https://leetcode.cn/problems/find-minimum-time-to-finish-all-jobs-ii/description/
* algorithms
* Medium (60.66%)
* Dislikes: -
* Testcase Example:  '[5,2,4]\n[1,7,5]'
给你两个 下标从 0 开始 的整数数组 jobs 和 相等 长度的 workers ，其中 jobs[i]是完成第 i 个工作所需的时间，workers[j] 是第 j 个工人每天可以工作的时间。
每项工作都应该 正好 分配给一个工人，这样每个工人就 只能 完成一项工作。
返回分配后完成所有作业所需的最少天数。

示例 1:
输入: jobs = [5,2,4], workers = [1,7,5]
输出: 2
解释:
- 把第 2 个工人分配到第 0 个工作。他们花了 1 天时间完成这项工作。
- 把第 0 个工人分配到第 1 个工作。他们花了 2 天时间完成这项工作。
- 把第 1 个工人分配到第 2 个工作。他们花了 1 天时间完成这项工作。
所有工作完成需要 2 天，因此返回 2。
可以证明 2 天是最少需要的天数。
示例 2:
输入: jobs = [3,18,15,9], workers = [6,5,1,3]
输出: 3
解释:
- 把第 2 个工人分配到第 0 个工作。他花了 3 天时间完成这项工作。
- 把第 0 个工人分配到第 1 个工作。他花了 3 天时间完成这项工作。
- 把第 1 个工人分配到第 2 个工作。他花了 3 天时间完成这项工作。
- 把第 3 个工人分配到第 3 个工作。他花了 3 天时间完成这项工作。
完成所有工作需要 3 天，因此返回 3。
可以证明，3 天是最少需要的天数。

提示:
n == jobs.length == workers.length
1 <= n <= 105
1 <= jobs[i], workers[i] <= 105
Hint 1: It is always optimal to pair the worker with the least amount of time with the job that requires the least amount of time.
Hint 2: Sort both arrays.

```

## Solution

[SourceCode](./solution.js)

## English Translation

n jobs and n workers; job i takes jobs[i] time, worker j can do workers[j] per day. Each job goes to exactly one worker (bijection). Time for a pair = ceil(job / worker) days; the completion time is the max over pairs. Return the minimum possible completion time.

Example 1:
Input: jobs = [5,2,4], workers = [1,7,5]
Output: 2

Example 2:
Input: jobs = [3,18,15,9], workers = [6,5,1,3]
Output: 3

Constraints: 1 <= n <= 10^5.

## Approach

Sort both descending and pair rank-to-rank (largest job with largest worker — exchange argument shows crossing pairs never help). The answer is the maximum of ceil(sorted job / sorted worker).

O(n log n).
