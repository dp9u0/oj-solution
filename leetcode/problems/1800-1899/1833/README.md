# [1833] Maximum Ice Cream Bars

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-ice-cream-bars/description/)

* algorithms
* Medium (74.25%)
* Likes:    2264
* Dislikes: 679
* Testcase Example:  '[1,3,2,4,1]\n7'

```md
It is a sweltering summer day, and a boy wants to buy some ice cream bars.
At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible.
Note: The boy can buy the ice cream bars in any order.
Return the maximum number of ice cream bars the boy can buy with coins coins.
You must solve the problem by counting sort.

Example 1:

Input: costs = [1,3,2,4,1], coins = 7
Output: 4
Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.

Example 2:

Input: costs = [10,6,8,7,7,8], coins = 5
Output: 0
Explanation: The boy cannot afford any of the ice cream bars.

Example 3:

Input: costs = [1,6,3,1,2,5], coins = 20
Output: 6
Explanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.


Constraints:

costs.length == n
1 <= n <= 105
1 <= costs[i] <= 105
1 <= coins <= 108


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

有 n 个冰淇淋，costs[i] 是第 i 个冰淇淋的价格。男孩有 coins 个硬币，想要买尽可能多的冰淇淋。可以任意顺序购买，返回最多能买多少个。

## 解题思路

**计数排序 + 贪心**

题目要求用计数排序。将价格按计数排序后，从便宜到贵依次购买，直到硬币不够为止。

1. 统计每个价格出现的次数（计数排序）
2. 从小到大遍历价格，尽可能多地购买当前价格的冰淇淋
3. 硬币不够时停止

时间复杂度 O(n + maxCost)，空间复杂度 O(maxCost)。
