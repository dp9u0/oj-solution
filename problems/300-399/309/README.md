# [309] Best Time to Buy and Sell Stock with Cooldown

## Description

[LeetCode Problem Description](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/)

* algorithms
* Medium (59.49%)
* Likes:    9609
* Dislikes: 335
* Testcase Example:  '[1,2,3,0,2]'

```md
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example 1:

Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]

Example 2:

Input: prices = [1]
Output: 0


Constraints:

1 <= prices.length <= 5000
0 <= prices[i] <= 1000


```

## 题目翻译

给定一个整数数组 prices，其中 prices[i] 表示第 i 天的股票价格。

设计一个算法计算出最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票），但需要遵循以下限制：

卖出股票后，你无法在第二天买入股票（即冷冻期为 1 天）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1：

输入: prices = [1,2,3,0,2]
输出: 3
解释: 交易过程 = [买入, 卖出, 冷冻期, 买入, 卖出]

示例 2：

输入: prices = [1]
输出: 0

约束条件：

1 <= prices.length <= 5000
0 <= prices[i] <= 1000

## Solution

[SourceCode](./solution.js)

### 解题思路

这是一个典型的状态机动态规划问题。对于每一天，我们可能处于以下三种状态之一：

1. 持有股票状态（hold）
2. 卖出股票状态（sold）
3. 不持有股票且不卖出状态（rest）

状态转移方程：

- hold[i] = max(hold[i-1], rest[i-1] - prices[i])
- sold[i] = hold[i-1] + prices[i]
- rest[i] = max(rest[i-1], sold[i-1])

最终的最大利润是最后一天的 sold 或 rest 状态的最大值。

### 复杂度分析

- 时间复杂度：O(n)，其中 n 是价格数组的长度
- 空间复杂度：O(n)，使用了三个长度为 n 的数组

### 测试用例

```javascript
// 测试用例 1
console.log(maxProfit([1,2,3,0,2])); // 输出: 3
// 解释: 交易过程 = [买入(1), 卖出(3), 冷冻期(0), 买入(0), 卖出(2)]

// 测试用例 2
console.log(maxProfit([1])); // 输出: 0
// 解释: 只有一天，无法获得利润

// 测试用例 3
console.log(maxProfit([1,2,4])); // 输出: 3
// 解释: 交易过程 = [买入(1), 卖出(4)]

// 测试用例 4
console.log(maxProfit([2,1,4,5,2,9,7])); // 输出: 11
// 解释: 交易过程 = [买入(1), 卖出(5), 冷冻期(2), 买入(2), 卖出(9)]

// 测试用例 5
console.log(maxProfit([6,1,3,2,4,7])); // 输出: 6
// 解释: 交易过程 = [买入(1), 卖出(7)]
```

### 注意事项

1. 需要特别注意初始状态的设置
2. 每次交易后必须等待一天（冷冻期）才能进行下一次购买
3. 不能同时进行多笔交易
4. 最后一天的最大利润应该是 sold 和 rest 状态的最大值
