# [3592] Inverse Coin Change

## Description

[LeetCode Problem Description](https://leetcode.com/problems/inverse-coin-change/description/)

* algorithms
* Medium (51.76%)
* Likes:    171
* Dislikes: 20
* Testcase Example:  '[0,1,0,2,0,3,0,4,0,5]'

```md
You are given a 1-indexed integer array numWays, where numWays[i] represents the number of ways to select a total amount i using an infinite supply of some fixed coin denominations. Each denomination is a positive integer with value at most numWays.length.
However, the exact coin denominations have been lost. Your task is to recover the set of denominations that could have resulted in the given numWays array.
Return a sorted array containing unique integers which represents this set of denominations.
If no such set exists, return an empty array.

Example 1:

Input: numWays = [0,1,0,2,0,3,0,4,0,5]
Output: [2,4,6]
Explanation:



Amount
Number of ways
Explanation


1
0
There is no way to select coins with total value 1.


2
1
The only way is [2].


3
0
There is no way to select coins with total value 3.


4
2
The ways are [2, 2] and [4].


5
0
There is no way to select coins with total value 5.


6
3
The ways are [2, 2, 2], [2, 4], and [6].


7
0
There is no way to select coins with total value 7.


8
4
The ways are [2, 2, 2, 2], [2, 2, 4], [2, 6], and [4, 4].


9
0
There is no way to select coins with total value 9.


10
5
The ways are [2, 2, 2, 2, 2], [2, 2, 2, 4], [2, 4, 4], [2, 2, 6], and [4, 6].



Example 2:

Input: numWays = [1,2,2,3,4]
Output: [1,2,5]
Explanation:



Amount
Number of ways
Explanation


1
1
The only way is [1].


2
2
The ways are [1, 1] and [2].


3
2
The ways are [1, 1, 1] and [1, 2].


4
3
The ways are [1, 1, 1, 1], [1, 1, 2], and [2, 2].


5
4
The ways are [1, 1, 1, 1, 1], [1, 1, 1, 2], [1, 2, 2], and [5].




Example 3:

Input: numWays = [1,2,3,4,15]
Output: []
Explanation:
No set of denomination satisfies this array.





Constraints:

1 <= numWays.length <= 100
0 <= numWays[i] <= 2 * 108


```

## 题目翻译

给定 1-indexed 数组 `numWays`，其中 `numWays[i]` 表示用无限供应的某些硬币面值凑出金额 i 的方法数。恢复出这些硬币面值集合（已排序去重），若不存在则返回空数组。

## 解题思路

**贪心增量构造**。

逐步构建硬币集合，同时维护当前 dp 数组：
1. 初始化 `dp[0] = 1`，其余 `dp[i] = 0`。
2. 对于每个金额 i（1-indexed）：
   - 如果 `numWays[i-1] > 0` 但 `dp[i] == 0`：说明必须加入面值 i 作为新硬币。
   - 如果 `numWays[i-1] == 0` 但 `dp[i] > 0`：矛盾，返回空数组。
   - 如果 `numWays[i-1] != dp[i]` 且 `dp[i] > 0`：矛盾，返回空数组。
   - 如果加入了新硬币 i，更新 dp（完全背包，从小到大）。
3. 最终验证所有 dp[i] 是否等于 numWays[i-1]。

## Solution

[SourceCode](./solution.js)
