# [1908] Nim 游戏 II

## Description


```md
https://leetcode.cn/problems/game-of-nim/description/
* algorithms
* Medium (42.27%)
* Likes:    20
* Dislikes: -
* Testcase Example:  '[1]'
Alice 和 Bob 交替进行一个游戏，由 Alice 先手。
在游戏中，共有 n 堆石头。在每个玩家的回合中，玩家需要 选择 任一非空石头堆，从中移除任意 非零 数量的石头。如果不能移除任意的石头，就输掉游戏，同时另一人获胜。
给定一个整数数组 piles ，piles[i] 为 第 i 堆石头的数量，如果 Alice 能获胜返回 true ，反之返回 false 。
Alice 和 Bob 都会采取 最优策略 。

示例 1：
输入：piles = [1]
输出：true
解释：只有一种可能的情况：
- 第一回合，Alice 移除了第 1 堆中 1 块石头。piles = [0]。
- 第二回合，Bob 没有任何石头可以移除。Alice 获胜。
示例 2：
输入：piles = [1,1]
输出：false
解释：可以证明，Bob一定能获胜。一种可能的情况：
- 第一回合，Alice 移除了第 1 堆中 1 块石头。 piles = [0,1]。
- 第二回合，Bob 移除了第 2 堆中 1 块石头。 piles = [0,0]。
- 第三回合，Alice 没有任何石头可以移除。Bob 获胜。
示例 3：
输入：piles = [1,2,3]
输出：false
解释：可以证明，Bob一定能获胜。一种可能的情况：
- 第一回合，Alice 移除了第 3 堆中 3 块石头。 piles = [1,2,0]。
- 第二回合，Bob 移除了第 2 堆中 1 块石头。 piles = [1,1,0]。
- 第三回合，Alice 移除了第 1 堆中 1 块石头。piles = [0,1,0]。
- 第四回合，Bob 移除了第 2 堆中 1 块石头。 piles = [0,0,0]。
- 第三回合，Alice 没有任何石头可以移除。Bob 获胜。

提示：
n == piles.length
1 <= n <= 7
1 <= piles[i] <= 7

进阶：你能想出一个 线性时间 的解决方案吗？虽然这一答案可能超出了面试所需的范围，但了解它可能会很有趣。
Hint 1: Simulate the game and try all possible moves for each player.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Alice and Bob take turns playing a game, with Alice moving first. There are `n` piles of stones. On each turn, a player must choose any non-empty pile and remove any non-zero number of stones from it. A player who cannot move loses.

Given `piles` where `piles[i]` is the count of the i-th pile, return `true` if Alice wins with optimal play, otherwise `false`.

Example 1:
Input: piles = [1]
Output: true

Example 2:
Input: piles = [1,1]
Output: false

Example 3:
Input: piles = [1,2,3]
Output: false

Constraints: n == piles.length, 1 <= n <= 7, 1 <= piles[i] <= 7.

## Approach

This is the classic game of Nim. By the Sprague-Grundy theorem, the position is a first-player loss if and only if the XOR (nim-sum) of all pile sizes is 0. Alice moves first, so she wins exactly when `piles[0] ^ piles[1] ^ ... ^ piles[n-1] != 0`.

Why: from a zero nim-sum position every move leads to a non-zero one (removing stones from exactly one pile changes that pile's value, so some XOR bit flips), and from any non-zero position there exists a move restoring zero (take from the pile containing the highest set bit of the nim-sum, reducing it to `pile ^ nim-sum < pile`). The terminal position (all empty, nim-sum 0) is a loss for the player to move.

Time O(n) — the linear solution hinted by the follow-up.
