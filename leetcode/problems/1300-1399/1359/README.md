# [1359] Count All Valid Pickup and Delivery Options

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/description/)

* algorithms
* Hard (64.85%)
* Likes:    3094
* Dislikes: 233
* Testcase Example:  '1'

```md
Given n orders, each order consists of a pickup and a delivery service.
Count all valid pickup/delivery possible sequences such that delivery(i) is always after ofpickup(i).
Since the answermay be too large,return it modulo10^9 + 7.

Example 1:

Input: n = 1
Output: 1
Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.

Example 2:

Input: n = 2
Output: 6
Explanation: All possible orders:
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.

Example 3:

Input: n = 3
Output: 90


Constraints:

1 <= n <= 500


```

## 翻译

给定 n 个订单，每个订单有取货(Pi)和送货(Di)。计算所有合法的排列数，要求 Di 必须在 Pi 之后。结果对 10^9+7 取模。

## Approach

递推/排列组合。考虑加入第 k 个订单时，已有 2(k-1) 个位置被占用，新订单的 P 和 D 要插入到 2k 个位置中选择 2 个位置，且 P 在 D 前。

可选位置数 = 2k 个位置中选 2 个 = C(2k, 2) = k * (2k - 1)

递推：dp[k] = dp[k-1] * k * (2k - 1)

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
