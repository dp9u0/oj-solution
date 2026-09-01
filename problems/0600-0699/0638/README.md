# [638] Shopping Offers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shopping-offers/description/)

* algorithms
* Medium (52.38%)
* Likes:    1631
* Dislikes: 792
* Testcase Example:  '[2,5]\n[[3,0,5],[1,2,10]]\n[3,2]'

```md
In LeetCode Store, there are n items to sell. Each item has a price. However, there are some special offers, and a special offer consists of one or more different kinds of items with a sale price.
You are given an integer array price where price[i] is the price of the ith item, and an integer array needs where needs[i] is the number of pieces of the ith item you want to buy.
You are also given an array special where special[i] is of size n + 1 where special[i][j] is the number of pieces of the jth item in the ith offer and special[i][n] (i.e., the last integer in the array) is the price of the ith offer.
Return the lowest price you have to pay for exactly certain items as given, where you could make optimal use of the special offers. You are not allowed to buy more items than you want, even if that would lower the overall price. You could use any of the special offers as many times as you want.

Example 1:

Input: price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]
Output: 14
Explanation: There are two kinds of items, A and B. Their prices are $2 and $5 respectively.
In special offer 1, you can pay $5 for 3A and 0B
In special offer 2, you can pay $10 for 1A and 2B.
You need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.

Example 2:

Input: price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]
Output: 11
Explanation: The price of A is $2, and $3 for B, $4 for C.
You may pay $4 for 1A and 1B, and $9 for 2A ,2B and 1C.
You need to buy 1A ,2B and 1C, so you may pay $4 for 1A and 1B (special offer #1), and $3 for 1B, $4 for 1C.
You cannot add more items, though only $9 for 2A ,2B and 1C.


Constraints:

n == price.length == needs.length
1 <= n <= 6
0 <= price[i], needs[i] <= 10
1 <= special.length <= 100
special[i].length == n + 1
0 <= special[i][j] <= 50
The input is generated that at least one of special[i][j] is non-zero for 0 <= j <= n - 1.


```

## 中文翻译

给定商品价格 price、特价礼包 special 和需求 needs。礼包可重复使用，但不能超出需求量。求恰好满足需求的最低花费。

## 解题思路

记忆化搜索 + DFS。状态为当前 needs 数组。对每个状态：计算不使用礼包直接买的费用作为上界，然后尝试每个可用礼包（不超出需求），递归求最小值。过滤掉不划算的礼包（比单买更贵）加速。

时间复杂度：O(状态数 * special数)，空间复杂度：O(状态数)

## Solution

[SourceCode](./solution.js)
