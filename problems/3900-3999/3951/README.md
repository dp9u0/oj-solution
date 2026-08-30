# [3951] Minimum Energy to Maintain Brightness

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-energy-to-maintain-brightness/description/)

* algorithms
* Medium (53.36%)
* Likes:    49
* Dislikes: 31
* Testcase Example:  '5\n5\n[[6,12]]'

```md
You are given an integer n, representing n light bulbs arranged in a line and indexed from 0 to n - 1.
You are also given an integer brightness and a 2D integer array intervals, where intervals[i] = [starti, endi] represents an inclusive time interval during which the lighting requirement must be satisfied.
At each time unit, every bulb can independently be either on or off. A bulb that is on illuminates its own position and its adjacent positions, if they exist.
The total illumination at a time unit is the number of illuminated positions. Each position is counted at most once.
For every integer time unit covered by at least one interval in intervals, the total illumination must be at least brightness. At time units not covered by any interval, all bulbs may remain off. Each bulb that is on consumes 1 unit of energy for that time unit.
Return an integer denoting the minimum total energy required.

Example 1:

Input: n = 5, brightness = 5, intervals = [[6,12]]
Output: 14
Explanation:

Turn on the light bulbs at positions 1 and 4.
Current state of line: 0 1 0 0 1.
All 5 positions are illuminated, so the required brightness is reached.
The active interval has length 12 - 6 + 1 = 7, so the total energy is 2 * 7 = 14.


Example 2:

Input: n = 2, brightness = 1, intervals = [[0,0],[2,2]]
Output: 2
Explanation:

Turn on one light bulb during each active interval.
Each interval has length 1, so the total active time is 1 + 1 = 2.
The total energy is 1 * 2 = 2.


Example 3:

Input: n = 4, brightness = 2, intervals = [[1,3],[2,4]]
Output: 4
Explanation:

Turn on one light bulb. It can illuminate at least 2 positions.
The active intervals overlap, so the total active time is the length of [1,4], which is 4.
The total energy is 1 * 4 = 4.



Constraints:

1 <= n <= 106
1 <= brightness <= n
1 <= intervals.length <= 105
intervals[i] == [starti, endi]
0 <= starti <= endi <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

n 盏灯排成线（下标 0..n−1），每个时间单位各灯独立开关；开灯照亮自身及相邻位。任一被区间 [s,e]（闭）覆盖的时间单位上，总照亮位数须 ≥ brightness。开灯每单位耗能 1。返回最小总能耗。

示例 1：`n=5, brightness=5, [[6,12]]` → `14`（开 2 盏照亮全 5 位 × 7 个时间单位）

## 解题思路

k 盏灯最大照亮 `min(3k, n)` 位（间隔 3 摆放）；开灯集合对所有需亮时刻统一即可 → 最少灯数 `k = ⌈brightness/3⌉`；能耗 = k × **区间并集长度**（排序合并）。O(m log m)。