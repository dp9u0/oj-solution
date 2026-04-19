# [3116] Kth Smallest Amount With Single Denomination Combination

## Description

[LeetCode Problem Description](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/description/)

* algorithms
* Hard (20.08%)
* Likes:    254
* Dislikes: 19
* Testcase Example:  '[3,6,9]\n3'

```md
You are given an integer array coins representing coins of different denominations and an integer k.
You have an infinite number of coins of each denomination. However, you are not allowed to combine coins of different denominations.
Return the kth smallest amount that can be made using these coins.

Example 1:

border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">coins = [3,6,9], k = 3
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
"> 9
Explanation: The given coins can make the following amounts:
Coin 3 produces multiples of 3: 3, 6, 9, 12, 15, etc.
Coin 6 produces multiples of 6: 6, 12, 18, 24, etc.
Coin 9 produces multiples of 9: 9, 18, 27, 36, etc.
All of the coins combined produce: 3, 6, 9, 12, 15, etc.

Example 2:

border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
"> coins = [5,2], k = 7
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
"> 12
Explanation: The given coins can make the following amounts:
Coin 5 produces multiples of 5: 5, 10, 15, 20, etc.
Coin 2 produces multiples of 2: 2, 4, 6, 8, 10, 12, etc.
All of the coins combined produce: 2, 4, 5, 6, 8, 10, 12, 14, 15, etc.


Constraints:

1 <= coins.length <= 15
1 <= coins[i] <= 25
1 <= k <= 2 * 109
coins contains pairwise distinct integers.


```

## 题目翻译

给定不同面值的硬币数组 coins 和整数 k。每种硬币可用无限个，但不能混合不同面值。每种硬币产生其倍数序列，求所有序列合并去重后第 k 小的值。

## 解题思路

**二分查找 + 容斥原理**

对值 x，统计 ≤ x 的不同金额数量 = 各硬币倍数的并集大小。用容斥原理（bitmask 枚举子集）计算：

count(x) = Σ_{S⊆coins} (-1)^{|S|+1} * floor(x / lcm(S))

预处理所有子集的 LCM 和符号，二分找最小的 x 使 count(x) >= k。

O(2^n * log(k * maxCoin))，n ≤ 15。

## Solution

[SourceCode](./solution.js)
