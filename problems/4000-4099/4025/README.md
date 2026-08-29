# [4025] Minimize the Maximum Waiting Time at Synchronized Traffic Lights

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-the-maximum-waiting-time-at-synchronized-traffic-lights/description/)

* algorithms
* Medium (64.79%)
* Likes:    36
* Dislikes: 15
* Testcase Example:  '8\n[2,3]\n[2,5,8,11]'

```md
You are given an integer period and an integer array lights, where lights[i] is the duration, in seconds, of the green phase of the ith traffic light.
At time 0, every traffic light starts at the beginning of its green phase. Their cycles are synchronized: every traffic light starts a new cycle at the same time, and every cycle lasts exactly period seconds. Therefore, the red phase of the ith traffic light lasts for period - lights[i] seconds.
You are also given an integer array arrivalTime, where arrivalTime[j] is the arrival time, in seconds, of the jth car.
Each car must be assigned to exactly one traffic light. Multiple cars may be assigned to the same traffic light. Any number of cars may cross the same traffic light simultaneously while it is green. Cars do not block or delay one another.
For a car j assigned to the ith traffic light, let r = arrivalTime[j] % period. If r < lights[i], its waiting time is 0. Otherwise, its waiting time is period - r.
The penalty of an assignment is the maximum waiting time among all cars.
Return an integer denoting the minimum possible penalty.

Example 1:

Input: period = 8, lights = [2,3], arrivalTime = [2,5,8,11]
Output: 5
Explanation:
One optimal solution is:

Assign arrivalTime[0] to the traffic light with lights[1] = 3. Here, r = 2 % 8 = 2. Since 2 < 3, the waiting time is 0.
Assign arrivalTime[1] to the traffic light with lights[0] = 2. Here, r = 5 % 8 = 5. Since 5 >= 2, the waiting time is 8 - 5 = 3.
Assign arrivalTime[2] to the traffic light with lights[0] = 2. Here, r = 8 % 8 = 0. Since 0 < 2, the waiting time is 0.
Assign arrivalTime[3] to the traffic light with lights[0] = 2. Here, r = 11 % 8 = 3. Since 3 >= 2, the waiting time is 8 - 3 = 5.

The penalty of this assignment is 5, which is the minimum possible. Other optimal assignments may exist.

Example 2:

Input: period = 10, lights = [3,6,8], arrivalTime = [4,9,15]
Output: 1
Explanation:
One optimal solution is:

Assign arrivalTime[0] to the traffic light with lights[2] = 8. Here, r = 4 % 10 = 4. Since 4 < 8, the waiting time is 0.
Assign arrivalTime[1] to the traffic light with lights[2] = 8. Here, r = 9 % 10 = 9. Since 9 >= 8, the waiting time is 10 - 9 = 1.
Assign arrivalTime[2] to the traffic light with lights[2] = 8. Here, r = 15 % 10 = 5. Since 5 < 8, the waiting time is 0.

The penalty of this assignment is 1, which is the minimum possible.

Example 3:

Input: period = 5, lights = [2], arrivalTime = [2,3,4,5,6]
Output: 3
Explanation:
One optimal solution is:

Assign arrivalTime[0] to the traffic light with lights[0] = 2. Here, r = 2 % 5 = 2. Since 2 >= 2, the waiting time is 5 - 2 = 3.
Assign arrivalTime[1] to the traffic light with lights[0] = 2. Here, r = 3 % 5 = 3. Since 3 >= 2, the waiting time is 5 - 3 = 2.
Assign arrivalTime[2] to the traffic light with lights[0] = 2. Here, r = 4 % 5 = 4. Since 4 >= 2, the waiting time is 5 - 4 = 1.
Assign arrivalTime[3] to the traffic light with lights[0] = 2. Here, r = 5 % 5 = 0. Since 0 < 2, the waiting time is 0.
Assign arrivalTime[4] to the traffic light with lights[0] = 2. Here, r = 6 % 5 = 1. Since 1 < 2, the waiting time is 0.

The penalty of this assignment is 3, which is the minimum possible.


Constraints:

2 <= period <= 109
1 <= lights.length <= 104
1 <= lights[i] <= period - 1
1 <= arrivalTime.length <= 105
1 <= arrivalTime[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

周期 `period` 内所有灯同步：第 i 盏绿灯 `lights[i]` 秒、红灯其余时间。车 j 到达时刻 `arrivalTime[j]`，等待 = `r = t % period`，若 `r < lights[i]` 等 0，否则等 `period − r`。每车可任选一盏灯（无容量限制），罚分 = 所有车等待的最大值。返回最小罚分。

示例 1：`8, [2,3], [2,5,8,11]` → `5`；示例 2：`10, [3,6,8], [4,9,15]` → `1`

## 解题思路

分配相互独立（每车自由选灯、互不影响）→ 罚分 = `max_j min_i wait(j, i)`。对每车：存在 `lights[i] > r` 则等 0，即 `r < maxLight` 时等 0；否则等 `period − r`（与选哪盏无关）。故答案 = max over `r ≥ maxLight` 的车的 `period − r`。O(n + m)。