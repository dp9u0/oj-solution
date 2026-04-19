# [3733] Minimum Time to Complete All Deliveries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-to-complete-all-deliveries/description/)

* algorithms
* Medium (34.95%)
* Likes:    175
* Dislikes: 15
* Testcase Example:  '[3,1]\n[2,3]'

```md
You are given two integer arrays of size 2: d = [d1, d2] and r = [r1, r2].
Two delivery drones are tasked with completing a specific number of deliveries. Drone i must complete di deliveries.
Each delivery takes exactly one hour and only one drone can make a delivery at any given hour.
Additionally, both drones require recharging at specific intervals during which they cannot make deliveries. Drone i must recharge every ri hours (i.e. at hours that are multiples of ri).
Return an integer denoting the minimum total time (in hours) required to complete all deliveries.

Example 1:

Input: d = [3,1], r = [2,3]
Output: 5
Explanation:

The first drone delivers at hours 1, 3, 5 (recharges at hours 2, 4).
The second drone delivers at hour 2 (recharges at hour 3).


Example 2:

Input: d = [1,3], r = [2,2]
Output: 7
Explanation:

The first drone delivers at hour 3 (recharges at hours 2, 4, 6).
The second drone delivers at hours 1, 5, 7 (recharges at hours 2, 4, 6).


Example 3:

Input: d = [2,1], r = [3,4]
Output: 3
Explanation:

The first drone delivers at hours 1, 2 (recharges at hour 3).
The second drone delivers at hour 3.



Constraints:

d = [d1, d2]
1 <= di <= 109
r = [r1, r2]
2 <= ri <= 3 * 104


```

## 题目翻译

两架无人机各需完成 d_i 次配送，每次 1 小时，每时刻只能一架配送。无人机 i 在每隔 r_i 小时的倍数时刻需充电（不能配送）。求完成所有配送的最少总时间。

## 解题思路

**二分答案**

对总时间 T，判断是否可行：
- 无人机 i 的可用小时数 = T - floor(T/r_i)
- 总可用小时数 = T - floor(T/lcm(r_0, r_1))（去除两架同时充电的小时）
- 可行条件：d_0 ≤ avail_0 且 d_1 ≤ avail_1 且 d_0 + d_1 ≤ total_usable

可行性关于 T 单调递增，二分找最小 T。上界 2*(d_0+d_1)。

时间复杂度 O(log(d_0+d_1))。

## Solution

[SourceCode](./solution.js)
