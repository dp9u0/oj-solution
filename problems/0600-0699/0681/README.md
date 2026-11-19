# [681] 最近时刻

## Description


```md
https://leetcode.cn/problems/next-closest-time/description/
* algorithms
* Medium (50.05%)
* Likes:    85
* Dislikes: -
* Testcase Example:  '"19:34"'
给定一个形如 "HH:MM" 表示的时刻 time ，利用当前出现过的数字构造下一个距离当前时间最近的时刻。每个出现数字都可以被无限次使用。
你可以认为给定的字符串一定是合法的。例如， "01:34" 和  "12:09" 是合法的，“1:34” 和 “12:9” 是不合法的。

示例 1:
输入: "19:34"
输出: "19:39"
解释: 利用数字 1, 9, 3, 4 构造出来的最近时刻是 19:39，是 5 分钟之后。
结果不是 19:33 因为这个时刻是 23 小时 59 分钟之后。
示例 2:
输入: "23:59"
输出: "22:22"
解释: 利用数字 2, 3, 5, 9 构造出来的最近时刻是 22:22。
答案一定是第二天的某一时刻，所以选择可构造的最小时刻。

提示：
time.length == 5
time 为有效时间，格式为 "HH:MM".
0 <= HH < 24
0 <= MM < 60

```

## Solution

[SourceCode](./solution.js)

## Translation

Given "HH:MM", build the next closest time (possibly next day) using only the digits appearing in time (each reusable unlimited times).

- Example 1: "19:34" → `"19:39"` (5 minutes later)
- Example 2: "23:59" → `"22:22"` (next day)

## Approach

**逐分钟模拟**:从当前时刻 +1 分钟开始枚举(模 1440),检查时刻的四位数字是否都在允许集合内;最多 1440 步必命中(原时刻自身必然匹配)。每步 O(4),总体 O(1440×4)。
