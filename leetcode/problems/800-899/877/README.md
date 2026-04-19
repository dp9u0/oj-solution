# [877] Stone Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stone-game/description/)

* algorithms
* Medium (73.13%)
* Likes:    3543
* Dislikes: 2961
* Testcase Example:  '[5,3,4,5]'

```md
Alice and Bob play a game with piles of stones. There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].
The objective of the game is to end with the most stones. The total number of stones across all the piles is odd, so there are no ties.
Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile of stones either from the beginning or from the end of the row. This continues until there are no more piles left, at which point the person with the most stones wins.
Assuming Alice and Bob play optimally, return true if Alice wins the game, or false if Bob wins.

Example 1:

Input: piles = [5,3,4,5]
Output: true
Explanation:
Alice starts first, and can only take the first 5 or the last 5.
Say she takes the first 5, so that the row becomes [3, 4, 5].
If Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.
If Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alice, so we return true.

Example 2:

Input: piles = [3,7,2,3]
Output: true


Constraints:

2 <= piles.length <= 500
piles.length is even.
1 <= piles[i] <= 500
sum(piles[i]) is odd.


```

## 题目翻译

Alice 和 Bob 轮流从石子堆数组的两端取一堆，Alice 先手。偶数堆，总石子数为奇数（不会平局）。双方最优策略下，判断 Alice 是否必胜。

## 解题思路

经典博弈论结论：偶数堆时先手必胜。Alice 可以预先选择所有奇数位或偶数位的堆，因为奇数位和偶数位的总和不同（总和为奇数），Alice 取较大的一组即可。所以直接返回 true。

## Solution

[SourceCode](./solution.js)
