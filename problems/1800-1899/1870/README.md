# [1870] Minimum Speed to Arrive on Time

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/description/)

* algorithms
* Medium (47.75%)
* Likes:    2456
* Dislikes: 293
* Testcase Example:  '[1,3,2]\n6'

```md
You are given a floating-point number hour, representing the amount of time you have to reach the office. To commute to the office, you must take n trains in sequential order. You are also given an integer array dist of length n, where dist[i] describes the distance (in kilometers) of the ith train ride.
Each train can only depart at an integer hour, so you may need to wait in between each train ride.

For example, if the 1st train ride takes 1.5 hours, you must wait for an additional 0.5 hours before you can depart on the 2nd train ride at the 2 hour mark.

Return the minimum positive integer speed (in kilometers per hour) that all the trains must travel at for you to reach the office on time, or -1 if it is impossible to be on time.
Tests are generated such that the answer will not exceed 107 and hour will have at most two digits after the decimal point.

Example 1:

Input: dist = [1,3,2], hour = 6
Output: 1
Explanation: At speed 1:
- The first train ride takes 1/1 = 1 hour.
- Since we are already at an integer hour, we depart immediately at the 1 hour mark. The second train takes 3/1 = 3 hours.
- Since we are already at an integer hour, we depart immediately at the 4 hour mark. The third train takes 2/1 = 2 hours.
- You will arrive at exactly the 6 hour mark.

Example 2:

Input: dist = [1,3,2], hour = 2.7
Output: 3
Explanation: At speed 3:
- The first train ride takes 1/3 = 0.33333 hours.
- Since we are not at an integer hour, we wait until the 1 hour mark to depart. The second train ride takes 3/3 = 1 hour.
- Since we are already at an integer hour, we depart immediately at the 2 hour mark. The third train takes 2/3 = 0.66667 hours.
- You will arrive at the 2.66667 hour mark.

Example 3:

Input: dist = [1,3,2], hour = 1.9
Output: -1
Explanation: It is impossible because the earliest the third train can depart is at the 2 hour mark.


Constraints:

n == dist.length
1 <= n <= 105
1 <= dist[i] <= 105
1 <= hour <= 109
There will be at most two digits after the decimal point in hour.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定浮点数 `hour` 表示到达办公室的时限，以及整数数组 `dist` 表示 n 趟列车各自的距离。所有列车以相同速度行驶，只能在整数时刻出发（非整数时刻需等待）。返回能使准时到达的最小正整数速度，不可能则返回 -1。

**示例 1：** dist = [1,3,2], hour = 6 → 1（速度1恰好6小时到达）
**示例 2：** dist = [1,3,2], hour = 2.7 → 3（速度3约2.67小时到达）
**示例 3：** dist = [1,3,2], hour = 1.9 → -1（第3趟最早2点出发，不可能）

**约束：** 1 <= n <= 10^5, 1 <= dist[i] <= 10^5

## Approach

二分答案。速度越大，总耗时越小（单调性），因此可以二分速度。

- 速度范围 [1, 10^7]（题目保证答案不超过 10^7）
- 对每个速度 speed 计算总时间：前 n-1 趟向上取整（ceil），最后一趟直接除
- 如果总时间 <= hour，尝试更小速度；否则增大速度
- 特判：如果 hour <= n-1（最少需要 n-1 次等待），直接返回 -1

时间复杂度 O(n log(maxSpeed))，空间复杂度 O(1)。
