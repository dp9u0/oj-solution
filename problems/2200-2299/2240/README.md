# [2240] Number of Ways to Buy Pens and Pencils

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/description/)

* algorithms
* Medium (56.70%)
* Likes:    479
* Dislikes: 37
* Testcase Example:  '20\n10\n5'

```md
You are given an integer total indicating the amount of money you have. You are also given two integers cost1 and cost2 indicating the price of a pen and pencil respectively. You can spend part or all of your money to buy multiple quantities (or none) of each kind of writing utensil.
Return the number of distinct ways you can buy some number of pens and pencils.

Example 1:

Input: total = 20, cost1 = 10, cost2 = 5
Output: 9
Explanation: The price of a pen is 10 and the price of a pencil is 5.
- If you buy 0 pens, you can buy 0, 1, 2, 3, or 4 pencils.
- If you buy 1 pen, you can buy 0, 1, or 2 pencils.
- If you buy 2 pens, you cannot buy any pencils.
The total number of ways to buy pens and pencils is 5 + 3 + 1 = 9.

Example 2:

Input: total = 5, cost1 = 10, cost2 = 10
Output: 1
Explanation: The price of both pens and pencils are 10, which cost more than total, so you cannot buy any writing utensils. Therefore, there is only 1 way: buy 0 pens and 0 pencils.


Constraints:

1 <= total, cost1, cost2 <= 106


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定总额 total，钢笔价格 cost1，铅笔价格 cost2。求购买方案数（每种可以买 0 个或多个，总花费不超过 total）。

## 解题思路

枚举钢笔数量 i 从 0 到 total/cost1，剩余金额 remaining = total - i*cost1，铅笔可买 0 到 remaining/cost2 个，即 remaining/cost2 + 1 种。累加即可。O(total/cost1)。
