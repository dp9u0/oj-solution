# [LCR 103] 零钱兑换

## Description


```md
https://leetcode.cn/problems/gaM7Ch/description/
* algorithms
* Medium (53.69%)
* Likes:    114
* Dislikes: -
* Testcase Example:  '[1,2,5]\n11'
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
你可以认为每种硬币的数量是无限的。

示例 1：
输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
示例 2：
输入：coins = [2], amount = 3
输出：-1
示例 3：
输入：coins = [1], amount = 0
输出：0
示例 4：
输入：coins = [1], amount = 1
输出：1
示例 5：
输入：coins = [1], amount = 2
输出：2

提示：
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

注意：本题与主站 322 题相同： https://leetcode.cn/problems/coin-change/

```

## Solution

[SourceCode](./solution.js)

---

### English Translation

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

**Example 1:**
> Input: coins = [1, 2, 5], amount = 11
> Output: 3
> Explanation: 11 = 5 + 5 + 1

**Example 2:**
> Input: coins = [2], amount = 3
> Output: -1

**Example 3:**
> Input: coins = [1], amount = 0
> Output: 0

**Example 4:**
> Input: coins = [1], amount = 1
> Output: 1

**Example 5:**
> Input: coins = [1], amount = 2
> Output: 2

**Constraints:**
- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 10^4`

**Note:** This problem is the same as LeetCode 322 (Coin Change).

---

### 解题思路（Approach）

经典**完全背包（无限硬币）动态规划**。

设 `dp[i]` 表示凑成金额 `i` 所需的最少硬币个数：
- 初始化 `dp[0] = 0`，其余 `dp[i] = Infinity`（表示不可达）。
- 对于每个金额 `i`（从 1 到 amount），遍历每枚硬币面额 `c`：
  - 若 `i >= c` 且 `dp[i - c]` 可达，则 `dp[i] = min(dp[i], dp[i - c] + 1)`。

由于每种硬币数量无限，这是完全背包，内层直接**正序遍历**金额（不反向），从而允许同一硬币被多次使用。

最终 `dp[amount]` 若仍为 `Infinity` 则返回 `-1`，否则返回该值。

时间复杂度 **O(amount × coins.length)**，空间复杂度 **O(amount)**。`amount ≤ 10^4`、`coins.length ≤ 12`，完全满足要求。
