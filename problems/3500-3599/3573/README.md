# [3573] Best Time to Buy and Sell Stock V

## Description

[LeetCode Problem Description](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-v/description/)

* algorithms
* Medium (60.71%)
* Likes:    421
* Dislikes: 63
* Testcase Example:  '[1,7,9,8,2]\n2'

```md
You are given an integer array prices where prices[i] is the price of a stock in dollars on the ith day, and an integer k.
You are allowed to make at most k transactions, where each transaction can be either of the following:


Normal transaction: Buy on day i, then sell on a later day j where i < j. You profit prices[j] - prices[i].


Short selling transaction: Sell on day i, then buy back on a later day j where i < j. You profit prices[i] - prices[j].


Note that you must complete each transaction before starting another. Additionally, you can't buy or sell on the same day you are selling or buying back as part of a previous transaction.
Return the maximum total profit you can earn by making at most k transactions.

Example 1:

Input: prices = [1,7,9,8,2], k = 2
Output: 14
Explanation:
We can make $14 of profit through 2 transactions:

A normal transaction: buy the stock on day 0 for $1 then sell it on day 2 for $9.
A short selling transaction: sell the stock on day 3 for $8 then buy back on day 4 for $2.


Example 2:

Input: prices = [12,16,19,19,8,1,19,13,9], k = 3
Output: 36
Explanation:
We can make $36 of profit through 3 transactions:

A normal transaction: buy the stock on day 0 for $12 then sell it on day 2 for $19.
A short selling transaction: sell the stock on day 3 for $19 then buy back on day 4 for $8.
A normal transaction: buy the stock on day 5 for $1 then sell it on day 6 for $19.



Constraints:

2 <= prices.length <= 103
1 <= prices[i] <= 109
1 <= k <= prices.length / 2


```

## 翻译

给定股价数组 prices 和最大交易次数 k。每笔交易可以是普通交易（先买后卖，利润=卖价-买价）或做空交易（先卖后买，利润=卖价-买回价）。交易不能重叠。返回最多 k 笔交易的最大利润。

## 解题思路

经典股票 DP 变体。由于允许做空，每笔交易的利润为 |prices[j] - prices[i]| 的最大值（选择普通或做空）。

DP 状态：dp[t][i] = 前 i 天内最多完成 t 笔交易的最大利润。
对于第 t 笔交易，在第 i 天结束：
- 不交易：dp[t][i] = dp[t][i-1]
- 在第 j 天开始（j < i），第 i 天结束：dp[t][i] = max(dp[t-1][j] + |prices[i] - prices[j]|)

优化：对每个 t，维护 best_buy = max(dp[t-1][j] - prices[j]) 和 best_short = max(dp[t-1][j] + prices[j])。
则 dp[t][i] = max(dp[t][i-1], prices[i] + best_buy, -prices[i] + best_short)。

时间复杂度 O(n*k)。

## Solution

[SourceCode](./solution.js)
