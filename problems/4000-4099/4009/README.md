# [4009] Minimum Possible Maximum Waiting Time

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-possible-maximum-waiting-time/description/)

* algorithms
* Hard (29.22%)
* Likes:    21
* Dislikes: 16
* Testcase Example:  '[6,8,4,6,5]\r\n[16,13]\r'

```md
You are given an integer array demand, where demand[i] is the amount of fuel required by the ith car.
You are also given an integer array fuel of length 2. There are exactly two fuel dispensers, numbered 0 and 1, where fuel[j] is the initial amount of fuel available in dispenser j.
Cars are allowed to start refueling in increasing index order. Car 0 becomes allowed at time 0, and for each i > 0, car i becomes allowed exactly when car i - 1 starts refueling.
The refueling process follows these rules:

Each dispenser can serve at most one car at a time.
When a car becomes allowed, you must choose a dispenser with at least demand[i] fuel remaining. If both dispensers have enough fuel remaining, you may choose either of them, regardless of when they become free.
The car waits until the chosen dispenser becomes free and starts refueling immediately. It cannot switch dispensers or intentionally wait after the chosen dispenser becomes free.
When a car starts refueling, the remaining fuel in the chosen dispenser decreases by demand[i], and the dispenser remains occupied for demand[i] seconds.
Once started, refueling cannot be interrupted.
If neither dispenser has at least demand[i] fuel remaining when car i becomes allowed, the process terminates and no further cars can be served.

The waiting time of a car is the time between when it becomes allowed to start refueling and when it actually starts.
Return the minimum possible value of the maximum waiting time among all served cars over all assignments that maximize the number of served cars. If no car can be served, return -1.

Example 1:

Input: demand = [6,8,4,6,5], fuel = [16,13]
Output: 6
Explanation:
The following assignment serves all five cars:



Car
Becomes allowed at
Starts refueling at
Dispenser used
Remaining fuel before start
(dispenser 0, dispenser 1)
Waiting time


0
0
0
0
(16, 13)
0


1
0
0
1
(10, 13)
0


2
0
6
0
(10, 5)
6


3
6
10
0
(6, 5)
4


4
10
10
1
(0, 5)
0



Thus, all five cars are served, and the maximum waiting time is 6.
To serve all five cars, dispenser 0 must serve the cars with demands 6, 4, and 6, while dispenser 1 must serve the cars with demands 8 and 5. Therefore, car 2 must wait until time 6 for dispenser 0 to become free, so no assignment serving all five cars can have a maximum waiting time less than 6.

Example 2:

Input: demand = [10,15], fuel = [12,17]
Output: 0
Explanation:

At time 0, Car 0 becomes allowed and starts refuelling using dispenser 0.
Car 1 becomes allowed at time 0 (when Car 0 starts) and immediately starts refuelling using dispenser 1.
Both cars start without waiting, so the maximum waiting time is 0.


Example 3:

Input: demand = [10,5], fuel = [8,8]
Output: -1
Explanation:

At time 0, Car 0 becomes allowed. However, neither dispenser has enough fuel to serve it, so the process terminates immediately.
No car is served, so the answer is -1.



Constraints:

1 <= demand.length <= 50
1 <= demand[i] <= 20
fuel.length == 2
1 <= fuel[i] <= 50


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 `demand`（第 i 辆车所需油量）和长度为 2 的 `fuel`（两台加油枪初始油量）。规则：

- 车按序号依次"获得资格"：车 0 在时刻 0，车 i 在**车 i−1 开始加油的时刻**获得资格；
- 每枪同时只能服务一辆车；车获资格时必须选一台**剩余油量足够**的枪（两台都够时任选），等它空闲后立即开始，等待时间 = 开始时刻 − 获资格时刻；
- 开始加油后该枪油量减 `demand[i]`，占用 `demand[i]` 秒，不可中断；
- 获资格时两枪油都不足则过程终止；
- 在**最大化服务车辆数**的所有方案中，返回**最大等待时间**的最小值；一辆都服务不了返回 −1。

示例 1：`demand=[6,8,4,6,5], fuel=[16,13]` → `6`（枪0 服务 6,4,6 / 枪1 服务 8,5，车 2 必等 6 秒）
示例 2：`[10,15],[12,17]` → `0`；示例 3：`[10,5],[8,8]` → `-1`

约束：`1 <= n <= 50`，`demand[i] <= 20`，`fuel[i] <= 50`

## 解题思路

n ≤ 50、油量 ≤ 50、需求 ≤ 20，规模极小，用**记忆化搜索**。关键：把绝对时间换成**差分**——定义 `d0 = 枪0空闲时刻 − 当前车获资格时刻`（可为负），d1 同理。选枪 j（等待 `w = max(0, d_j)`，`shift = w`）后：

- 新车获资格时刻 = 开始时刻 = 资格时刻 + shift；
- 枪 j 被占用 `demand` 秒：`d_j' = demand`（恰好从开始占到开始+demand）；
- 另一枪：`d_k' = d_k − shift`。

状态 `(i, fuel0, fuel1, d0, d1)`，每步两个决策（油量够的枪），返回值按 (服务数 max, 最大等待 min) 字典序比较。d 范围 ±(50×20)，Map 记忆化足够。

验证示例 1：(0,16,13,0,0)→选0→(1,10,13,6,0)→选1→(2,10,5,6,8)→选0(w=6)→(3,6,5,4,2)→选0(w=4)→(4,0,5,6,−2)→选1(w=0)→5 辆，maxW=6 ✓

本地另用 n≤12 的掩码暴力模拟对拍。
