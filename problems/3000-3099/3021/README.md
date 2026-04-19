# [3021] Alice and Bob Playing Flower Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/alice-and-bob-playing-flower-game/description/)

* algorithms
* Medium (60.03%)
* Likes:    520
* Dislikes: 277
* Testcase Example:  '3\n2'

```md
Alice and Bob are playing a turn-based game on a field, with two lanes of flowers between them. There are x flowers in the first lane between Alice and Bob, and y flowers in the second lane between them.

The game proceeds as follows:

Alice takes the first turn.
In each turn, a player must choose either one of the laneand pick one flower from that side.
At the end of the turn, if there are no flowers left at all in either lane, the current player captures their opponent and wins the game.

Given two integers, n and m, the task is to compute the number of possible pairs (x, y) that satisfy the conditions:

Alice must win the game according to the described rules.
The number of flowers x in the first lane must be in the range [1,n].
The number of flowers y in the second lane must be in the range [1,m].

Return the number of possible pairs (x, y) that satisfy the conditions mentioned in the statement.

Example 1:

Input: n = 3, m = 2
Output: 3
Explanation: The following pairs satisfy conditions described in the statement: (1,2), (3,2), (2,1).

Example 2:

Input: n = 1, m = 1
Output: 0
Explanation: No pairs satisfy the conditions described in the statement.


Constraints:

1 <= n, m <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

Alice 和 Bob 在一个场地上玩回合制游戏，他们之间有两条花道。第一条花道有 x 朵花，第二条花道有 y 朵花。

游戏规则：
- Alice 先手
- 每回合，玩家必须选择一条花道并从中摘取一朵花
- 回合结束时，如果两条花道上都没有花了，当前玩家获胜

给定整数 n 和 m，计算满足以下条件的数对 (x, y) 的数量：
- Alice 必须获胜
- x 在 [1, n] 范围内，y 在 [1, m] 范围内

## 解题思路

关键观察：总共有 x+y 朵花，每轮摘 1 朵，所以游戏在第 (x+y) 轮结束。第奇数轮是 Alice 的回合。

因此 Alice 获胜 ⟺ x+y 为奇数 ⟺ x 和 y 一奇一偶。

- 奇数 x × 偶数 y 的对数 = ceil(n/2) × floor(m/2)
- 偶数 x × 奇数 y 的对数 = floor(n/2) × ceil(m/2)

结果 = ceil(n/2) * floor(m/2) + floor(n/2) * ceil(m/2)
     = ((n+1)/2) * (m/2) + (n/2) * ((m+1)/2)

用整数运算避免浮点：Math.ceil(n/2) = (n+1)>>1, Math.floor(n/2) = n>>1
