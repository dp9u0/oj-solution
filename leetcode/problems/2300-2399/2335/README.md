# [2335] Minimum Amount of Time to Fill Cups

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/description/)

* algorithms
* Easy (60.20%)
* Likes:    768
* Dislikes: 94
* Testcase Example:  '[1,4,2]'

```md
You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.
You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.

Example 1:

Input: amount = [1,4,2]
Output: 4
Explanation: One way to fill up the cups is:
Second 1: Fill up a cold cup and a warm cup.
Second 2: Fill up a warm cup and a hot cup.
Second 3: Fill up a warm cup and a hot cup.
Second 4: Fill up a warm cup.
It can be proven that 4 is the minimum number of seconds needed.

Example 2:

Input: amount = [5,4,4]
Output: 7
Explanation: One way to fill up the cups is:
Second 1: Fill up a cold cup, and a hot cup.
Second 2: Fill up a cold cup, and a warm cup.
Second 3: Fill up a cold cup, and a warm cup.
Second 4: Fill up a warm cup, and a hot cup.
Second 5: Fill up a cold cup, and a hot cup.
Second 6: Fill up a cold cup, and a warm cup.
Second 7: Fill up a hot cup.

Example 3:

Input: amount = [5,0,0]
Output: 5
Explanation: Every second, we fill up a cold cup.


Constraints:

amount.length == 3
0 <= amount[i] <= 100


```

## 翻译

三种水杯，每秒可以同时接 2 杯不同类型的水或 1 杯任意类型。给定各类型杯子数量，求最少几秒接完。

## Approach

答案为 max(max(amount), ceil(sum(amount) / 2))。即取最大值和总量的上半的最小值。因为每秒最多接 2 杯，所以至少需要 ceil(sum/2) 秒；同时至少需要 max(amount) 秒。

时间复杂度 O(1)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
