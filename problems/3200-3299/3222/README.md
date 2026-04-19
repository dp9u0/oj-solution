# [3222] Find the Winning Player in Coin Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-winning-player-in-coin-game/description/)

* algorithms
* Easy (53.23%)
* Likes:    131
* Dislikes: 16
* Testcase Example:  '2\n7'

```md
You are given two positive integers x and y, denoting the number of coins with values 75 and 10 respectively.
Alice and Bob are playing a game. Each turn, starting with Alice, the player must pick up coins with a total value 115. If the player is unable to do so, they lose the game.
Return the name of the player who wins the game if both players play optimally.

Example 1:

Input: x = 2, y = 7
Output: 'Alice'
Explanation:
The game ends in a single turn:

Alice picks 1 coin with a value of 75 and 4 coins with a value of 10.


Example 2:

Input: x = 4, y = 11
Output: 'Bob'
Explanation:
The game ends in 2 turns:

Alice picks 1 coin with a value of 75 and 4 coins with a value of 10.
Bob picks 1 coin with a value of 75 and 4 coins with a value of 10.



Constraints:

1 <= x, y <= 100


```

## 中文翻译

有 x 个75分硬币和 y 个10分硬币。Alice和Bob轮流取硬币，每轮必须取总价值115的硬币（1个75+4个10）。无法取者输。Alice先手，返回胜者。

## 解题思路

每次操作必取1个75和4个10，所以最多能操作 min(x, y/4) 次。奇数次Alice赢，偶数次Bob赢。

## Solution

[SourceCode](./solution.js)
