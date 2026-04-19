# [1235] Maximum Profit in Job Scheduling

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-profit-in-job-scheduling/description/)

* algorithms
* Hard (54.70%)
* Likes:    7330
* Dislikes: 123
* Testcase Example:  '[1,2,3,3]\n[3,4,5,6]\n[50,10,40,70]'

```md
We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].
You&#39;re given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.
If you choose a job that ends at time X you will be able to start another job that starts at time X.

Example 1:


Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job.
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.

Example 2:


Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job.
Profit obtained 150 = 20 + 70 + 60.

Example 3:


Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
Output: 6


Constraints:

1 <= startTime.length == endTime.length == profit.length <= 5 * 104
1 <= startTime[i] < endTime[i] <= 109
1 <= profit[i] <= 104


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 n 个工作的开始时间、结束时间和利润，选出不重叠的工作子集使利润最大化。

## 解题思路

经典加权区间调度。按结束时间排序，dp[i] 表示前 i 个工作中的最大利润。对于第 i 个工作：dp[i] = max(dp[i-1], profit[i] + dp[p(i)])，其中 p(i) 是结束时间 ≤ startTime[i] 的最后一个工作的索引（二分查找）。
