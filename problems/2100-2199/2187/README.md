# [2187] Minimum Time to Complete Trips

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-to-complete-trips/description/)

* algorithms
* Medium (39.65%)
* Likes:    3096
* Dislikes: 196
* Testcase Example:  '[1,2,3]\n5'

```md
You are given an array time where time[i] denotes the time taken by the ith bus to complete one trip.
Each bus can make multiple trips successively; that is, the next trip can start immediately after completing the current trip. Also, each bus operates independently; that is, the trips of one bus do not influence the trips of any other bus.
You are also given an integer totalTrips, which denotes the number of trips all buses should make in total. Return the minimum time required for all buses to complete at least totalTrips trips.

Example 1:

Input: time = [1,2,3], totalTrips = 5
Output: 3
Explanation:
- At time t = 1, the number of trips completed by each bus are [1,0,0].
The total number of trips completed is 1 + 0 + 0 = 1.
- At time t = 2, the number of trips completed by each bus are [2,1,0].
The total number of trips completed is 2 + 1 + 0 = 3.
- At time t = 3, the number of trips completed by each bus are [3,1,1].
The total number of trips completed is 3 + 1 + 1 = 5.
So the minimum time needed for all buses to complete at least 5 trips is 3.

Example 2:

Input: time = [2], totalTrips = 1
Output: 2
Explanation:
There is only one bus, and it will complete its first trip at t = 2.
So the minimum time needed to complete 1 trip is 2.


Constraints:

1 <= time.length <= 105
1 <= time[i], totalTrips <= 107


```

## 翻译

给定数组 time（time[i] 表示第 i 辆车完成一次行程的时间）和 totalTrips。每辆车可以连续运行，所有车辆独立运行。求所有车辆总共完成至少 totalTrips 次行程的最少时间。

## Approach

二分搜索。在时间 t 内，第 i 辆车能完成 floor(t / time[i]) 次行程。二分搜索最小的 t 使得总行程数 >= totalTrips。

上界：最慢的车单独完成所有行程的时间 = minTime * totalTrips。

时间复杂度 O(n log(maxT))，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
