# [4023] Elevator Requests II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/elevator-requests-ii/description/)

* algorithms
* Hard (26.64%)
* Likes:    31
* Dislikes: 2
* Testcase Example:  '6\r\n4\r\n[1,5]\r'

```md
You are given an integer n denoting the number of floors in a building, where the floors are numbered from 0 to n - 1.
You are also given an integer start, representing the floor where the elevator begins, and an integer array requests, where requests[i] is a floor that the elevator is requested to reach. All floors in requests are distinct.
At time 0, the elevator is on floor start, and all requests are made simultaneously.
During each second before all requests are fulfilled, the elevator moves exactly one floor, either up or down. A request is fulfilled instantly when the elevator reaches its requested floor. If start appears in requests, that request is fulfilled at time 0.
For each second that a request remains unfulfilled, you receive 1 penalty. Equivalently, a request fulfilled at time t contributes t to the total penalty.
Return the minimum total penalty required to fulfill all requests.

Example 1:

Input: n = 6, start = 4, requests = [1,5]
Output: 6
Explanation:

Move from floor 4 (start) to floor 5 in 1 second. Penalty for floor 5 is 1.
Move from floor 5 to floor 1 in 4 seconds. Penalty for floor 1 is 5.

Thus, the total penalty is 1 + 5 = 6.

Example 2:

Input: n = 8, start = 3, requests = [3,7,1]
Output: 10
Explanation:

Floor 3 (start) is fulfilled instantly. Penalty for floor 3 is 0.
Move from floor 3 to floor 1 in 2 seconds. Penalty for floor 1 is 2.
Move from floor 1 to floor 7 in 6 seconds. Penalty for floor 7 is 8.

Thus, the total penalty is 0 + 2 + 8 = 10.

Example 3:

Input: n = 10, start = 5, requests = [0,2,9]
Output: 22
Explanation:

Move from floor 5 (start) to floor 2 in 3 seconds. Penalty for floor 2 is 3.
Move from floor 2 to floor 0 in 2 seconds. Penalty for floor 0 is 5.
Move from floor 0 to floor 9 in 9 seconds. Penalty for floor 9 is 14.

Thus, the total penalty is 3 + 5 + 14 = 22.


Constraints:

1 <= n <= 109
1 <= requests.length <= 1500
0 <= start, requests[i] <= n - 1
All values in requests are distinct.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

n 层楼，电梯 0 时刻在 `start`，请求楼层互异且同时发出；每秒电梯恰好移动一层。到达即满足；`start` 若是请求则 0 时刻满足。每个未满足请求每秒积累 1 罚分（= Σ 完成时刻）。返回最小总罚分。

示例 1：`6, 4, [1,5]` → `6`；示例 2：`8, 3, [3,7,1]` → `10`；示例 3：`10, 5, [0,2,9]` → `22`

约束：n ≤ 10^9，**请求数 ≤ 1500**

## 解题思路

关键定理：电梯只在**未满足集合的两端**掉头（否则可交换改进）。已满足集合始终是排序后的**连续区间 [l..r]**（路过即满足）。区间 DP：

`dp[l][r][side]`：已满足 [l..r]、电梯在 `req[l]`（或 `req[r]`）时的最小**剩余**罚分；转移为走到 `req[l−1]` 或 `req[r+1]`，加 `距离 × 当前未满足数 U`。初始：`start` 等于某请求 → [i..i]；否则第一段走到相邻侧请求（罚 `距离 × m`）。O(m²) 记忆化。

罚分 ≤ m²·maxGap ≈ 2×10^12 安全。与逐步模拟的 Dijkstra 暴力对拍验证（注意暴力需处理起始层 0 时刻满足）。