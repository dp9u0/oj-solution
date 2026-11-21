# [2431] 最大限度地提高购买水果的口味

## Description


```md
https://leetcode.cn/problems/maximize-total-tastiness-of-purchased-fruits/description/
* algorithms
* Medium (63.65%)
* Likes:    7
* Dislikes: -
* Testcase Example:  '[10,20,20]\n[5,8,8]\n20\n1'
你有两个非负整数数组 price 和 tastiness，两个数组的长度都是 n。同时给你两个非负整数 maxAmount 和 maxCoupons。
对于范围 [0, n - 1] 中的每一个整数 i:

price[i] 描述了第 i 个水果的价格。

tastiness[i] 描述了第 i 个水果的味道。
你想购买一些水果，这样总的味道是最大的，总价不超过 maxAmount。
此外，你还可以用优惠券以 半价 购买水果 (向下取整到最接近的整数)。您最多可以使用 maxCoupons 次该优惠券。
返回可购买的最大总口味。
注意:
每个水果最多只能购买一次。
一个水果你最多只能用一次折价券。

示例 1:
输入: price = [10,20,20], tastiness = [5,8,8], maxAmount = 20, maxCoupons = 1
输出: 13
解释: 可以用以下方法来达到总口味:
- 无优惠券买第一个水果，总价= 0 + 10，总口味= 0 + 5。
- 用优惠券买第二个水果，总价= 10 + 10，总口味= 5 + 8。
- 不购买第三个水果，总价= 20，总口味= 13。
可以证明 13 是所能得到的最大总口味。
示例 2:
输入: price = [10,15,7], tastiness = [5,8,20], maxAmount = 10, maxCoupons = 2
输出: 28
解释: 可以用以下方法使总口味达到 20:
- 不买第一个水果，这样总价= 0，总口味= 0。
- 用优惠券买第二个水果，总价= 0 + 7，总口味= 0 + 8。
- 用优惠券买第三个水果，总价= 7 + 3，总口味= 8 + 20。
可以证明，28 是所能得到的最大总口味。

提示:
n == price.length == tastiness.length
1 <= n <= 100
0 <= price[i], tastiness[i], maxAmount <= 1000
0 <= maxCoupons <= 5
Hint 1: We have multiple options within the given budget. Trying all of them will take exponential time. How can we improve that?
Hint 2: We can use dynamic programming to speed up the algorithm.
Hint 3: We have three options for each fruit. To skip it, to buy it with a coupon, or to buy it without a coupon.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Buy fruits maximizing total tastiness under budget maxAmount; a coupon buys a fruit at half price (floor), at most maxCoupons used; each fruit bought at most once.

Example 1:
Input: price = [10,20,20], tastiness = [5,8,8], maxAmount = 20, maxCoupons = 1
Output: 13

Example 2:
Input: price = [10,15,7], tastiness = [5,8,20], maxAmount = 10, maxCoupons = 2
Output: 28

Constraints: n <= 100, prices/tastiness/maxAmount <= 1000, maxCoupons <= 5.

## Approach

2D knapsack: dp[amount][couponsLeft] = max tastiness using exactly (<=) that budget and coupons. For each fruit three transitions: skip; buy at full price; buy with a coupon at floor(price/2). Iterate fruits with amount and coupons descending (0/1 knapsack style). O(n * maxAmount * maxCoupons).
