# [3360] Stone Removal Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stone-removal-game/description/)

* algorithms
* Easy (42.42%)
* Likes:    70
* Dislikes: 5
* Testcase Example:  '12'

```md
Alice and Bob are playing a game where they take turns removing stones from a pile, with Alice going first.

Alice starts by removing exactly 10 stones on her first turn.
For each subsequent turn, each player removes exactly 1 fewer stone than the previous opponent.

The player who cannot make a move loses the game.
Given a positive integer n, return true if Alice wins the game and false otherwise.

Example 1:

Input: n = 12
Output: true
Explanation:

Alice removes 10 stones on her first turn, leaving 2 stones for Bob.
Bob cannot remove 9 stones, so Alice wins.


Example 2:

Input: n = 1
Output: false
Explanation:

Alice cannot remove 10 stones, so Alice loses.



Constraints:

1 <= n <= 50


```

## 题目翻译

Alice 和 Bob 轮流从石堆中取石头，Alice 先手。Alice 第一次取 10 颗，之后每人取比对手上一次少 1 颗。无法取的人输。给定 n 颗石头，判断 Alice 是否能赢。

## 解题思路

模拟。Alice 取 10, Bob 取 9, Alice 取 8, ... 依次减 1。轮流取直到某人取不了，判断最后是谁无法取。

时间复杂度 O(1)

## Solution

[SourceCode](./solution.js)
