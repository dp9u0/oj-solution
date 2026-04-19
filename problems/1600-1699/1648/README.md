# [1648] Sell Diminishing-Valued Colored Balls

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/description/)

* algorithms
* Medium (30.17%)
* Likes:    1159
* Dislikes: 408
* Testcase Example:  '[2,5]\n4'

```md
You have an inventory of different colored balls, and there is a customer that wants orders balls of any color.
The customer weirdly values the colored balls. Each colored ball&#39;s value is the number of balls of that coloryou currently have in your inventory. For example, if you own 6 yellow balls, the customer would pay 6 for the first yellow ball. After the transaction, there are only 5 yellow balls left, so the next yellow ball is then valued at 5 (i.e., the value of the balls decreases as you sell more to the customer).
You are given an integer array, inventory, where inventory[i] represents the number of balls of the ith color that you initially own. You are also given an integer orders, which represents the total number of balls that the customer wants. You can sell the balls in any order.
Return the maximum total value that you can attain after selling orders colored balls. As the answer may be too large, return it modulo 109 + 7.

Example 1:


Input: inventory = [2,5], orders = 4
Output: 14
Explanation: Sell the 1st color 1 time (2) and the 2nd color 3 times (5 + 4 + 3).
The maximum total value is 2 + 5 + 4 + 3 = 14.

Example 2:

Input: inventory = [3,5], orders = 6
Output: 19
Explanation: Sell the 1st color 2 times (3 + 2) and the 2nd color 4 times (5 + 4 + 3 + 2).
The maximum total value is 3 + 2 + 5 + 4 + 3 + 2 = 19.


Constraints:

1 <= inventory.length <= 105
1 <= inventory[i] <= 109
1 <= orders <= min(sum(inventory[i]), 109)


```

## 题目翻译

给定库存数组 inventory 和订单数 orders。每次卖出某颜色球时价值等于该颜色当前库存量。最大化总价值，对 10^9+7 取模。

## 解题思路

**二分找阈值 + 等差数列求和**

贪心：总是卖库存最多的颜色。二分找阈值 T，使得价值 > T 的球全部卖出，价值 = T 的球卖部分。

- cntAbove(T) = sum max(0, inv[i]-T)，即价值 > T 的球数
- 找最大 T 使 cntAtOrAbove(T) = sum max(0, inv[i]-T+1) >= orders
- 总价值 = 等差数列求和 (T+1..inv[i]) + remaining * T

用 BigInt 处理大数，O(n log maxInv)。

## Solution

[SourceCode](./solution.js)
