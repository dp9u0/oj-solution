# [3894] Traffic Signal Color

## Description

[LeetCode Problem Description](https://leetcode.com/problems/traffic-signal-color/description/)

* algorithms
* Easy (83.94%)
* Likes:    35
* Dislikes: 9
* Testcase Example:  '60'

```md
You are given an integer timer representing the remaining time (in seconds) on a traffic signal.
The signal follows these rules:
If timer == 0, the signal is "Green"
If timer == 30, the signal is "Orange"
If 30
Return the current state of the signal. If none of the above conditions are met, return "Invalid".

Example 1:
Input: timer = 60
Output: "Red"
Explanation:
Since timer = 60, and 30
Example 2:
Input: timer = 5
Output: "Invalid"
Explanation:
Since timer = 5, it does not satisfy any of the given conditions, the answer is "Invalid".

Constraints:
0
Hint 1: Simulate as described

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数 `timer`，表示交通信号灯的剩余时间（秒）。

信号灯遵循以下规则：

- 如果 `timer == 0`，信号为 `"Green"`（绿灯）
- 如果 `timer == 30`，信号为 `"Orange"`（橙灯）
- 如果 `30 < timer <= 90`，信号为 `"Red"`（红灯）

返回信号灯当前的状态。如果以上条件都不满足，返回 `"Invalid"`。

示例 1：
输入：timer = 60
输出："Red"
解释：timer = 60，满足 30 < timer <= 90，答案为 "Red"。

示例 2：
输入：timer = 5
输出："Invalid"
解释：timer = 5 不满足任何条件，答案为 "Invalid"。

约束：
- 0 <= timer <= 1000

## 解题思路

按题意模拟即可，依次判断三个条件：

1. `timer === 0` → 返回 `"Green"`
2. `timer === 30` → 返回 `"Orange"`
3. `30 < timer <= 90` → 返回 `"Red"`
4. 其余情况 → 返回 `"Invalid"`

时间复杂度 O(1)，空间复杂度 O(1)。
