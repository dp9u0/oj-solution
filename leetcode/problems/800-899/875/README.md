# [875] Koko Eating Bananas

## Description

[LeetCode Problem Description](https://leetcode.com/problems/koko-eating-bananas/description/)

* algorithms
* Medium (49.86%)
* Likes:    13701
* Dislikes: 917
* Testcase Example:  '[3,6,7,11]\n8'

```md
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23


Constraints:

1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

Koko 有 n 堆香蕉，第 i 堆有 piles[i] 根。她以速度 k（根/小时）吃香蕉，每小时选一堆吃 k 根（不足 k 根则吃完该堆）。求在 h 小时内吃完所有香蕉的最小整数速度 k。

## Approach

二分搜索。速度范围 [1, max(piles)]，对于给定速度 k 计算所需时间 sum(ceil(pile/k))。若 <= h 则尝试更小速度，否则增大速度。

时间复杂度 O(n * log(max))，空间 O(1)。
