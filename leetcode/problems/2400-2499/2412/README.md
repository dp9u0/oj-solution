# [2412] Minimum Money Required Before Transactions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-money-required-before-transactions/description/)

* algorithms
* Hard (42.02%)
* Likes:    416
* Dislikes: 39
* Testcase Example:  '[[2,1],[5,0],[4,2]]'

```md
You are given a 0-indexed 2D integer array transactions, where transactions[i] = [costi, cashbacki].
The array describes transactions, where each transaction must be completed exactly once in some order. At any given moment, you have a certain amount of money. In order to complete transaction i, money >= costi must hold true. After performing a transaction, money becomes money - costi + cashbacki.
Return the minimum amount of money required before any transaction so that all of the transactions can be completed regardless of the order of the transactions.

Example 1:

Input: transactions = [[2,1],[5,0],[4,2]]
Output: 10
Explanation:
Starting with money = 10, the transactions can be performed in any order.
It can be shown that starting with money < 10 will fail to complete all transactions in some order.

Example 2:

Input: transactions = [[3,0],[0,3]]
Output: 3
Explanation:
- If transactions are in the order [[3,0],[0,3]], the minimum money required to complete the transactions is 3.
- If transactions are in the order [[0,3],[3,0]], the minimum money required to complete the transactions is 0.
Thus, starting with money = 3, the transactions can be performed in any order.


Constraints:

1 <= transactions.length <= 105
transactions[i].length == 2
0 <= costi, cashbacki <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一组交易 transactions，每笔交易 [cost, cashback] 要求当前 money >= cost，完成后 money 变为 money - cost + cashback。求在最坏顺序下完成所有交易所需的最少初始金额。

## 解题思路

将交易分为两类：
- 亏损交易 (cost > cashback)：净亏损 = cost - cashback
- 盈利交易 (cost <= cashback)：净盈利

关键观察：最坏顺序是先做所有亏损交易（按 cashback 升序），再做盈利交易。

答案 = 所有亏损交易的净亏损总和 + max(亏损交易中最大 cashback, 盈利交易中最大 cost)

证明：在亏损交易中，按 cashback 升序排列，最后一笔亏损交易之前的累计净亏损最大，此时需要 money >= cost_last + 之前累计亏损 = total_loss + cashback_last。盈利交易只需 money >= total_loss + max_cost_gain。
