# [1553] Minimum Number of Days to Eat N Oranges

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/description/)

* algorithms
* Hard (36.17%)
* Likes:    1033
* Dislikes: 64
* Testcase Example:  '10'

```md
There are n oranges in the kitchen and you decided to eat some of these oranges every day as follows:

Eat one orange.
If the number of remaining oranges n is divisible by 2 then you can eat n / 2 oranges.
If the number of remaining oranges n is divisible by 3 then you can eat 2 * (n / 3) oranges.

You can only choose one of the actions per day.
Given the integer n, return the minimum number of days to eat n oranges.

Example 1:

Input: n = 10
Output: 4
Explanation: You have 10 oranges.
Day 1: Eat 1 orange,  10 - 1 = 9.
Day 2: Eat 6 oranges, 9 - 2*(9/3) = 9 - 6 = 3. (Since 9 is divisible by 3)
Day 3: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1.
Day 4: Eat the last orange  1 - 1  = 0.
You need at least 4 days to eat the 10 oranges.

Example 2:

Input: n = 6
Output: 3
Explanation: You have 6 oranges.
Day 1: Eat 3 oranges, 6 - 6/2 = 6 - 3 = 3. (Since 6 is divisible by 2).
Day 2: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1. (Since 3 is divisible by 3)
Day 3: Eat the last orange  1 - 1  = 0.
You need at least 3 days to eat the 6 oranges.


Constraints:

1 <= n <= 2 * 109


```

## 中文翻译

厨房有 n 个橘子，每天选一种方式吃：吃1个；若 n 能被2整除可吃 n/2 个；若 n 能被3整除可吃 2n/3 个。求最少天数吃完。n 最高 2*10^9。

## 解题思路

记忆化 DFS。对于任意 n，最优策略只有两种：先吃 n%2 个（逐个吃），然后一次吃掉一半（1天）；或先吃 n%3 个，然后一次吃掉 2/3（1天）。

递推：f(n) = min(n%2 + 1 + f(n/2), n%3 + 1 + f(n/3))，f(0)=0, f(1)=1。

关键：不需要逐个吃到能整除，因为 n%2 <= 1, n%3 <= 2，只需最多2天预处理。状态数为 O(log^2 n)，用 Map 记忆化。

## Solution

[SourceCode](./solution.js)
