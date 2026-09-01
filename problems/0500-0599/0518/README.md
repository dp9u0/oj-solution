# [518] Coin Change II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/coin-change-ii/description/)

* algorithms
* Medium (60.20%)
* Likes:    10237
* Dislikes: 247
* Testcase Example:  '5\n[1,2,5]'

```md
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
You may assume that you have an infinite number of each kind of coin.
The answer is guaranteed to fit into a signed 32-bit integer.

Example 1:

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:

Input: amount = 10, coins = [10]
Output: 1


Constraints:

1 <= coins.length <= 300
1 <= coins[i] <= 5000
All the values of coins are unique.
0 <= amount <= 5000


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定不同面额的硬币 coins 和总金额 amount，每种硬币数量无限。求凑成总金额的组合数。

## 解题思路

**完全背包 DP（求方案数）**

经典完全背包问题。dp[j] 表示凑成金额 j 的方案数。

外层遍历硬币（保证组合不重复），内层正序遍历金额（完全背包允许重复选取）。

转移：dp[j] += dp[j - coins[i]]

初始化 dp[0] = 1（凑成金额 0 有一种方案：不选任何硬币）。

时间复杂度 O(n * amount)，空间复杂度 O(amount)。
