# [2861] Maximum Number of Alloys

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-alloys/description/)

* algorithms
* Medium (40.72%)
* Likes:    305
* Dislikes: 57
* Testcase Example:  '3\n2\n15\n[[1,1,1],[1,1,10]]\n[0,0,0]\n[1,2,3]'

```md
You are the owner of a company that creates alloys using various types of metals. There are n different types of metals available, and you have access to k machines that can be used to create alloys. Each machine requires a specific amount of each metal type to create an alloy.
For the ith machine to create an alloy, it needs composition[i][j] units of metal of type j. Initially, you have stock[i] units of metal type i, and purchasing one unit of metal type i costs cost[i] coins.
Given integers n, k, budget, a 1-indexed 2D array composition, and 1-indexed arrays stock and cost, your goal is to maximize the number of alloys the company can create while staying within the budget of budget coins.
All alloys must be created with the same machine.
Return the maximum number of alloys that the company can create.

Example 1:

Input: n = 3, k = 2, budget = 15, composition = [[1,1,1],[1,1,10]], stock = [0,0,0], cost = [1,2,3]
Output: 2
Explanation: It is optimal to use the 1st machine to create alloys.
To create 2 alloys we need to buy the:
- 2 units of metal of the 1st type.
- 2 units of metal of the 2nd type.
- 2 units of metal of the 3rd type.
In total, we need 2 * 1 + 2 * 2 + 2 * 3 = 12 coins, which is smaller than or equal to budget = 15.
Notice that we have 0 units of metal of each type and we have to buy all the required units of metal.
It can be proven that we can create at most 2 alloys.

Example 2:

Input: n = 3, k = 2, budget = 15, composition = [[1,1,1],[1,1,10]], stock = [0,0,100], cost = [1,2,3]
Output: 5
Explanation: It is optimal to use the 2nd machine to create alloys.
To create 5 alloys we need to buy:
- 5 units of metal of the 1st type.
- 5 units of metal of the 2nd type.
- 0 units of metal of the 3rd type.
In total, we need 5 * 1 + 5 * 2 + 0 * 3 = 15 coins, which is smaller than or equal to budget = 15.
It can be proven that we can create at most 5 alloys.

Example 3:

Input: n = 2, k = 3, budget = 10, composition = [[2,1],[1,2],[1,1]], stock = [1,1], cost = [5,5]
Output: 2
Explanation: It is optimal to use the 3rd machine to create alloys.
To create 2 alloys we need to buy the:
- 1 unit of metal of the 1st type.
- 1 unit of metal of the 2nd type.
In total, we need 1 * 5 + 1 * 5 = 10 coins, which is smaller than or equal to budget = 10.
It can be proven that we can create at most 2 alloys.


Constraints:

1 <= n, k <= 100
0 <= budget <= 108
composition.length == k
composition[i].length == n
1 <= composition[i][j] <= 100
stock.length == cost.length == n
0 <= stock[i] <= 108
1 <= cost[i] <= 100


```

## 中文翻译

你有 n 种金属和 k 台机器，每台机器制造一个合金需要 composition[i][j] 单位第 j 种金属。初始有 stock[i] 单位第 i 种金属，购买一单位第 i 种金属花费 cost[i]。所有合金必须用同一台机器制造。给定预算 budget，求最多能制造多少个合金。

## 解题思路

对每台机器，二分能制造的合金数量 m。对于固定机器 i 和数量 m，计算需要购买的金属总量：对每种金属 j，需要 max(0, composition[i][j] * m - stock[j]) * cost[j]，若总花费 <= budget 则可行。对 k 台机器取最大值。

## Solution

[SourceCode](./solution.js)
