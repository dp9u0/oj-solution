# [LCP 43] 十字路口的交通

## Description


```md
https://leetcode.cn/problems/Y1VbOX/description/
* algorithms
* Hard (51.92%)
* Likes:    18
* Dislikes: -
* Testcase Example:  '["W","N","ES","W"]'
前往「力扣挑战赛」场馆的道路上，有一个拥堵的十字路口，该十字路口由两条双向两车道的路交叉构成。由于信号灯故障，交警需要手动指挥拥堵车辆。假定路口没有新的来车且一辆车从一个车道驶入另一个车道所需的时间恰好为一秒钟，长度为 4 的一维字符串数组 `directions` 中按照 **东、南、西、北** 顺序记录了四个方向从最靠近路口到最远离路口的车辆计划开往的方向。其中：
- `"E"` 表示向东行驶；
- `"S"` 表示向南行驶；
- `"W"` 表示向西行驶；
- `"N"` 表示向北行驶。
交警每秒钟只能指挥各个车道距离路口最近的一辆车，且每次指挥需要满足如下规则：
- 同一秒钟内，一个方向的车道只允许驶出一辆车；
- 同一秒钟内，一个方向的车道只允许驶入一辆车；
- 同一秒钟内，车辆的行驶路线不可相交。
请返回最少需要几秒钟，该十字路口等候的车辆才能全部走完。
各个车道驶出的车辆可能的行驶路线如图所示：
![图片.png](https://pic.leetcode.cn/1630393755-gyPeMM-图片.png){:height="350px"}
**注意：**
- 测试数据保证不会出现掉头行驶指令，即某一方向的行驶车辆计划开往的方向不会是当前车辆所在的车道的方向;
- 表示堵塞车辆行驶方向的字符串仅用大写字母 `"E"`，`"N"`，`"W"`，`"S"` 表示。
**示例 1：**
>输入：`directions = ["W","N","ES","W"]`
>
>输出：`2`
>
>解释：
>第 1 秒：东西方向排在最前的车先行，剩余车辆状态 `["","N","S","W"]`；
>第 2 秒：南、西、北方向的车行驶，路口无等待车辆；
>因此最少需要 2 秒，返回 2。
**示例 2：**
>输入：`directions = ["NS","WE","SE","EW"]`
>
>输出：`3`
>
>解释：
>第 1 秒：四个方向排在最前的车均可驶出；
>第 2 秒：东南方向的车驶出，剩余车辆状态 `["","","E","W"]`；
>第 3 秒：西北方向的车驶出。
**提示：**
- `directions.length = 4`
- `0 <= directions[i].length <= 20`

```

## Solution

[SourceCode](./solution.js)

## English Description

At a congested crossroads, each of the four approach directions — **East, South, West, North** (indexed in that order) — has a queue of cars, each car heading toward one of the other three directions (a `direction` string lists its cars from nearest to farthest; `"E"`→east, `"S"`→south, `"W"`→west, `"N"`→north). No new cars arrive. A police officer can, each second, let any subset of the current heads of the four queues drive through, subject to:
- at most one car exits from each approach per second (automatic: only the queue head is eligible),
- at most one car enters each direction per second (so two simultaneously-moving cars may not share a destination),
- the driving routes of the cars moving in the same second must not cross each other.

Return the minimum number of seconds needed to clear all waiting cars.

Constraints: `directions.length == 4`, `0 <= directions[i].length <= 20`. No U-turns (a car never heads back toward its own approach).

## Approach (English)

Treat it as shortest path over discrete states and model route conflicts as intervals.

- **State** `(i0,i1,i2,i3)`: how many cars have already departed from each of the four approaches. Start at `(0,0,0,0)`; in one second, from a state choose any feasible "dispatch mask" (4 bits — bit `d` set means the head of approach `d` drives now) and advance those counters. BFS over the (≤ 21⁴) states gives the minimum number of seconds to reach the terminal state.

- **Feasibility of a mask**: map each car's route to a pair of lane numbers `(start, end)` around the intersection (lanes numbered 0..7 in a fixed cyclic order). Two routes conflict iff their intervals `[min, max]` *properly cross* (partially overlap with neither containing the other); disjoint intervals or one containing the other are safe. The lane-pair table for each approach/destination is:
  - E: S={0,3}, W={0,5}, N={0,7}
  - S: W={2,5}, N={2,7}, E={2,1}
  - W: N={4,7}, E={4,1}, S={4,3}
  - N: E={6,1}, S={6,3}, W={6,5}
  
  This interval-crossing model was verified pairwise against the explicit direction-conflict table over all 255 possible single-second configurations.

- **Complexity**: states ≤ 21⁴ ≈ 194k, 15 masks each; comfortably fast.

## 解题思路

把问题化为状态图最短路 + 用"车道区间"判定路线是否相交。

- **状态** `(i0,i1,i2,i3)`：四个方向各自已驶出的车辆数。一秒内从当前状态挑选一个可行"发车掩码"(4 bit)，推进对应计数器；用 BFS 在 ≤21⁴ 个状态上求到达终态的最少秒数。
- **可行性**：把每辆车的路线对应成一对车道号，转成区间。两车冲突 ⇔ 两区间真交叉(部分重叠且互不包含)；相离或一个包含另一个则安全。各方向到各去向的车道对见英文 Approach 中的表格。
- **正确性**：车道区间模型与逐对方向冲突表在全部 255 种单秒配置上逐对验证一致；实现再与独立冲突表模型 B 随机对拍 3000 组全部一致。
