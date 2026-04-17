# [3413] Maximum Coins From K Consecutive Bags

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-coins-from-k-consecutive-bags/description/)

* algorithms
* Medium (24.52%)
* Likes:    199
* Dislikes: 27
* Testcase Example:  '[[8,10,1],[1,3,2],[5,6,4]]\n4'

```md
There are an infinite amount of bags on a number line, one bag for each coordinate. Some of these bags contain coins.
You are given a 2D array coins, where coins[i] = [li, ri, ci] denotes that every bag from li to ri contains ci coins.
The segments that coins contain are non-overlapping.
You are also given an integer k.
Return the maximum amount of coins you can obtain by collecting k consecutive bags.

Example 1:

Input: coins = [[8,10,1],[1,3,2],[5,6,4]], k = 4
Output: 10
Explanation:
Selecting bags at positions [3, 4, 5, 6] gives the maximum number of coins:2 + 0 + 4 + 4 = 10.

Example 2:

Input: coins = [[1,10,3]], k = 2
Output: 6
Explanation:
Selecting bags at positions [1, 2] gives the maximum number of coins:3 + 3 = 6.


Constraints:

1 <= coins.length <= 105
1 <= k <= 109
coins[i] == [li, ri, ci]
1 <= li <= ri <= 109
1 <= ci <= 1000
The given segments are non-overlapping.


```

## 题目翻译

数轴上有无限多个袋子，每个坐标一个。给定 segments 数组 coins，coins[i] = [li, ri, ci] 表示从 li 到 ri 每个袋子有 ci 个硬币。段之间不重叠。再给定 k，选择 k 个连续袋子，返回能获得的最大硬币数。

## 解题思路

**排序 + 前缀和 + 二分查找**

关键观察：最优窗口的左边界一定与某个段的 li 对齐，或右边界与某个段的 ri 对齐。

1. 将段按 li 排序，计算前缀和（BigInt 防溢出）
2. 枚举每个段的 li 作为窗口起点，以及每个段的 ri 作为窗口终点
3. 对每个窗口 [s, e]，用二分查找找到重叠的段范围 [L, R]
4. 用前缀和快速计算中间段的总硬币，减去两端的部分重叠

时间复杂度 O(n log n)（排序 + 2n 次二分查找），空间 O(n)。

## Solution

[SourceCode](./solution.js)
