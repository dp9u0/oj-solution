# [871] Minimum Number of Refueling Stops

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-refueling-stops/description/)

* algorithms
* Hard (41.83%)
* Likes:    4939
* Dislikes: 95
* Testcase Example:  '1\n1\n[]'

```md
A car travels from a starting position to a destination which is target miles east of the starting position.
There are gas stations along the way. The gas stations are represented as an array stations where stations[i] = [positioni, fueli] indicates that the ith gas station is positioni miles east of the starting position and has fueli liters of gas.
The car starts with an infinite tank of gas, which initially has startFuel liters of fuel in it. It uses one liter of gas per one mile that it drives. When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car.
Return the minimum number of refueling stops the car must make in order to reach its destination. If it cannot reach the destination, return -1.
Note that if the car reaches a gas station with 0 fuel left, the car can still refuel there. If the car reaches the destination with 0 fuel left, it is still considered to have arrived.

Example 1:

Input: target = 1, startFuel = 1, stations = []
Output: 0
Explanation: We can reach the target without refueling.

Example 2:

Input: target = 100, startFuel = 1, stations = [[10,100]]
Output: -1
Explanation: We can not reach the target (or even the first gas station).

Example 3:

Input: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
Output: 2
Explanation: We start with 10 liters of fuel.
We drive to position 10, expending 10 liters of fuel.  We refuel from 0 liters to 60 liters of gas.
Then, we drive from position 10 to position 60 (expending 50 liters of fuel),
and refuel from 10 liters to 50 liters of gas.  We then drive to and reach the target.
We made 2 refueling stops along the way, so we return 2.


Constraints:

1 <= target, startFuel <= 109
0 <= stations.length <= 500
1 <= positioni < positioni+1 < target
1 <= fueli < 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

**871. 最低加油次数**

一辆汽车从起点出发驶向目的地，该目的地位于起点以东 `target` 英里处。沿途有多个加油站。用数组 `stations` 表示加油站，其中 `stations[i] = [position_i, fuel_i]` 表示第 `i` 个加油站位于起点以东 `position_i` 英里处，并且有 `fuel_i` 升汽油。

汽车油箱容量无限，初始时装有 `startFuel` 升燃料。每行驶一英里消耗一升汽油。当汽车经过加油站时，可以选择停下加油，将该加油站的所有汽油转入车内（转移后站内汽油清零，不可重复加）。

返回汽车到达目的地所需加油的**最少次数**；如果无法到达目的地，则返回 `-1`。

注意：如果汽车到达加油站时剩余燃料为 0，仍然可以在该站加油；如果到达目的地时剩余燃料为 0，仍然视为已到达。

**示例 1：**
输入：`target = 1, startFuel = 1, stations = []`
输出：`0`
解释：无需加油即可到达目标。

**示例 2：**
输入：`target = 100, startFuel = 1, stations = [[10,100]]`
输出：`-1`
解释：无法到达目标（甚至到不了第一个加油站）。

**示例 3：**
输入：`target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]`
输出：`2`
解释：初始 10 升油开到位置 10，加油 0→60；从位置 10 开到位置 60（耗 50 升，剩 10），加油 10→50；随后开到目标。共加油 2 次。

**约束：**
- `1 <= target, startFuel <= 10^9`
- `0 <= stations.length <= 500`
- `1 <= position_i < position_{i+1} < target`（位置严格递增）
- `1 <= fuel_i < 10^9`

## 解题思路

**贪心 + 最大堆（反悔贪心）**

关键观察：汽车沿直线行驶，路过某个加油站时其油量就"可选"。为了让加油次数最少，每次不得不加油时，应选择"已路过且尚未使用"的加油站中**油量最大**的一个——这等价于反悔回退到那个站加油，但不影响后续可达性判断。

算法流程：
1. 维护 `reach` 表示当前最远可达位置（初始为 `startFuel`）。
2. 当 `reach < target` 时：先把所有位置 `<= reach` 的加油站油量放入降序堆 `heap`（路过即"收入囊中"）。
3. 若堆为空且仍到不了目标，返回 `-1`；否则取出堆顶（最大油量）加入 `reach`，加油次数 `+1`。
4. 循环结束返回加油次数。

正确性：每次"被迫加油"时选最大油量，能让本次加油换取最远的前进距离，是经典的最少次数贪心（与跳跃游戏类似），也可用 DP `dp[i]` = 加油 `i` 次能到达的最远距离来证明。

复杂度：加油站数 `n <= 500`，堆用降序数组 + 二分插入实现，单次插入/取用 `O(n)`，总复杂度 `O(n²)`，空间 `O(n)`，完全满足规模要求。
