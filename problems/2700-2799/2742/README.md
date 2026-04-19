# [2742] Painting the Walls

## Description

[LeetCode Problem Description](https://leetcode.com/problems/painting-the-walls/description/)

* algorithms
* Hard (48.99%)
* Likes:    1502
* Dislikes: 95
* Testcase Example:  '[1,2,3,2]\n[1,2,3,2]'

```md
You are given two 0-indexed integer arrays,cost and time, of size n representing the costs and the time taken to paint n different walls respectively. There are two painters available:

Apaid painterthat paints the ith wall in time[i] units of time and takes cost[i] units of money.
Afree painter that paintsany wall in 1 unit of time at a cost of 0. But thefree painter can only be used if the paid painter is already occupied.

Return the minimum amount of money required to paint the nwalls.

Example 1:

Input: cost = [1,2,3,2], time = [1,2,3,2]
Output: 3
Explanation: The walls at index 0 and 1 will be painted by the paid painter, and it will take 3 units of time; meanwhile, the free painter will paint the walls at index 2 and 3, free of cost in 2 units of time. Thus, the total cost is 1 + 2 = 3.

Example 2:

Input: cost = [2,3,4,2], time = [1,1,1,1]
Output: 4
Explanation: The walls at index 0 and 3 will be painted by the paid painter, and it will take 2 units of time; meanwhile, the free painter will paint the walls at index 1 and 2, free of cost in 2 units of time. Thus, the total cost is 2 + 2 = 4.


Constraints:

1 <= cost.length <= 500
cost.length == time.length
1 <= cost[i] <= 106
1 <= time[i] <= 500


```

## 中文翻译

给定 cost[] 和 time[] 数组，各有 n 面墙。付费油漆工刷第 i 面墙需要 time[i] 时间和 cost[i] 费用。免费油漆工可以在 1 单位时间内免费刷任意墙，但只能在付费油漆工工作时使用。求刷完所有墙的最小费用。

约束：n <= 500, cost[i] <= 10^6, time[i] <= 500

## 解题思路

**01 背包变形**

1. 付费油漆工刷第 i 面墙时，占据 time[i] 时间，免费油漆工可刷 time[i] 面墙。加上付费刷的 1 面，共覆盖 time[i]+1 面墙。
2. 选子集 S，使得 sum(time[i]+1) >= n，最小化 sum(cost[i])。
3. DP：dp[j] = 覆盖 j 面墙的最小费用，倒序遍历。dp[j] = min(dp[j], dp[max(0, j-time[i]-1)] + cost[i])。
4. 答案 dp[n]。时间 O(n^2)。

## Solution

[SourceCode](./solution.js)
