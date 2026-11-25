# [3360] 移除石头游戏

## Description


```md
https://leetcode.cn/problems/stone-removal-game/description/
* algorithms
* Easy (57.29%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '12'
Alice 和 Bob 在玩一个游戏，他们俩轮流从一堆石头中移除石头，Alice 先进行操作。
Alice 在第一次操作中移除 恰好 10 个石头。
接下来的每次操作中，每位玩家移除的石头数 恰好 为另一位玩家上一次操作的石头数减 1 。
第一位没法进行操作的玩家输掉这个游戏。
给你一个正整数 n 表示一开始石头的数目，如果 Alice 赢下这个游戏，请你返回 true ，否则返回 false 。

示例 1：
输入：n = 12
输出：true
解释：
Alice 第一次操作中移除 10 个石头，剩下 2 个石头给 Bob 。
Bob 无法移除 9 个石头，所以 Alice 赢下游戏。
示例 2：
输入：n = 1
输出：false
解释：
Alice 无法移除 10 个石头，所以 Alice 输掉游戏。

提示：
1 <= n <= 50
Hint 1: The constraints are small enough that a brute-force solution is feasible.

```

## Description (English)

Alice and Bob take turns removing stones from a pile of `n` stones, with Alice going first.

- On her first move, Alice removes **exactly** 10 stones.
- On each subsequent move, each player removes **exactly** one fewer stone than the previous player's move.

The player who cannot make a move loses.

Given a positive integer `n`, return `true` if Alice wins the game, or `false` otherwise.

Constraints: `1 <= n <= 50`

## 思路

游戏没有任何选择空间:移除序列是固定的 10, 9, 8, 7, ...,即 Alice 移 10、Bob 移 9、Alice 移 8……当前剩余石头数小于本轮应移除数时,当前玩家无法操作而输掉。

因此直接模拟即可:

1. `k = 10`,`aliceTurn = true`。
2. 只要 `n >= k`,执行 `n -= k; k -= 1; aliceTurn = !aliceTurn`。
3. 循环结束时,轮到的那个玩家无法操作。Alice 获胜当且仅当此时轮到 Bob(即 `aliceTurn === false`)。

边界验证:`n = 1` 时 `1 < 10`,Alice 直接输 → `false`;`n = 12` 时 Alice 移 10 剩 2,Bob 移不动 → `true`。

时间复杂度 O(1)(最多 10 轮循环),空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
