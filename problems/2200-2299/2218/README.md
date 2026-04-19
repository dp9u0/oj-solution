# [2218] Maximum Value of K Coins From Piles

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/description/)

* algorithms
* Hard (60.43%)
* Likes:    2454
* Dislikes: 38
* Testcase Example:  '[[1,100,3],[7,8,9]]\n2'

```md
There are n piles of coins on a table. Each pile consists of a positive number of coins of assorted denominations.
In one move, you can choose any coin on top of any pile, remove it, and add it to your wallet.
Given a list piles, where piles[i] is a list of integers denoting the composition of the ith pile from top to bottom, and a positive integer k, return the maximum total value of coins you can have in your wallet if you choose exactly k coins optimally.

Example 1:


Input: piles = [[1,100,3],[7,8,9]], k = 2
Output: 101
Explanation:
The above diagram shows the different ways we can choose k coins.
The maximum total we can obtain is 101.

Example 2:

Input: piles = [[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], k = 7
Output: 706
Explanation:
The maximum total can be obtained if we choose all coins from the last pile.


Constraints:

n == piles.length
1 <= n <= 1000
1 <= piles[i][j] <= 105
1 <= k <= sum(piles[i].length) <= 2000


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 n 堆硬币 piles，每堆从顶到底排列。每次从任一堆顶部取一枚硬币，恰好取 k 枚，求最大总价值。

## 解题思路

分组背包 DP。dp[j] = 取 j 枚硬币的最大价值。对每堆，预计算前缀和 prefix[t] = 该堆前 t 枚之和。转移：newDp[j] = max(dp[j-t] + prefix[t]) for t=0..min(j, pile.length)。O(n * k * max_pile_len)。
