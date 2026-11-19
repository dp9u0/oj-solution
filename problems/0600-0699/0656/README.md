# [656] 成本最小路径

## Description


```md
https://leetcode.cn/problems/coin-path/description/
* algorithms
* Hard (36.16%)
* Likes:    44
* Dislikes: -
* Testcase Example:  '[1,2,4,-1,2]\n2'
给你一个整数数组 coins（下标从 1 开始）长度为 n，以及一个整数 maxJump。你可以跳到数组 coins 的任意下标 i（满足 coins[i] != -1），访问下标 i 时需要支付 coins[i]。此外，如果你当前位于下标 i，你只能跳到下标 i + k（满足 i + k <= n），其中 k 是范围 [1, maxJump] 内的一个值。
初始时你位于下标 1（coins[1] 不是 -1）。你的目标是找到一条到达下标 n 的成本最小路径。
返回一个整数数组，包含你访问的下标顺序，以便你以最小成本达到下标 n 。如果存在多条成本相同的路径，返回 字典序最小 的路径。如果无法达到下标 n ，返回一个空数组。
路径 p1 = [Pa1, Pa2, ..., Pax] 的长度为 x，路径 p2 = [Pb1, Pb2, ..., Pbx] 的长度为 y ，如果在两条路径的第一个不同的下标 j 处，Paj 小于 Pbj，则 p1 在字典序上小于 p2；如果不存在这样的 j，则较短的路径字典序较小。

示例 1：
输入：coins = [1,2,4,-1,2], maxJump = 2
输出：[1,3,5]
示例 2：
输入：coins = [1,2,4,-1,2], maxJump = 1
输出：[]

提示：
1 <= coins.length <= 1000
-1 <= coins[i] <= 100
coins[1] != -1
1 <= maxJump <= 100

```

## Solution

[SourceCode](./solution.js)

## Translation

Jump from index 1 to n (1-based), paying coins[i] when landing on i (coins[i] != -1), jumping forward 1..maxJump steps. Return the minimum-cost path as index sequence; ties broken lexicographically; [] if unreachable.

- Example 1: [1,2,4,-1,2], maxJump 2 → `[1,3,5]` (cost 7)
- Example 2: maxJump 1 → `[]`

Constraints: n ≤ 1000; maxJump ≤ 100.

## Approach

**反向 DP + 最小下标重建**。`dp[i]` = 从 i 到终点的最小成本:`dp[i] = coins[i] + min(dp[i+k])`,-1/不可达为 ∞。重建时从 0 出发,每步在 j ∈ (i, i+maxJump] 中选 **dp 最小且下标最小**者(升序扫描遇到严格更小才更新,天然取最小 j),字典序即最小。O(n·maxJump)。
