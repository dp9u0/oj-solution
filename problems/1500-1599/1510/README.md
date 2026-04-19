# [1510] Stone Game IV

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stone-game-iv/description/)

* algorithms
* Hard (59.57%)
* Likes:    1640
* Dislikes: 76
* Testcase Example:  '1'

```md
Alice and Bob take turns playing a game, with Alice starting first.
Initially, there are n stones in a pile. On each player&#39;s turn, that player makes a move consisting of removing any non-zero square number of stones in the pile.
Also, if a player cannot make a move, he/she loses the game.
Given a positive integer n, return true if and only if Alice wins the game otherwise return false, assuming both players play optimally.

Example 1:

Input: n = 1
Output: true
Explanation: Alice can remove 1 stone winning the game because Bob doesn&#39;t have any moves.
Example 2:

Input: n = 2
Output: false
Explanation: Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).

Example 3:

Input: n = 4
Output: true
Explanation: n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).


Constraints:

1 <= n <= 105


```

## 中文翻译

Alice 和 Bob 轮流玩石头游戏，Alice 先手。初始有 n 个石头，每次可以移除任意非零完全平方数个石头。无法操作的玩家输。假设双方最优策略，返回 Alice 是否获胜。

## 解题思路

**博弈 DP**：

- `dp[i]` 表示剩余 i 个石头时当前玩家是否能赢
- 枚举所有可能的完全平方数 j² (j² ≤ i)，如果 `dp[i - j²]` 为 false（对手输），则 `dp[i] = true`
- 边界：`dp[0] = false`（没有石头可取，当前玩家输）

时间复杂度：O(n√n)
空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
