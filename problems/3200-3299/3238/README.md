# [3238] Find the Number of Winning Players

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-number-of-winning-players/description/)

* algorithms
* Easy (60.51%)
* Likes:    100
* Dislikes: 27
* Testcase Example:  '4\n[[0,0],[1,0],[1,0],[2,1],[2,1],[2,0]]'

```md
You are given an integer n representing the number of players in a game and a 2D array pick where pick[i] = [xi, yi] represents that the player xi picked a ball of color yi.
Player i wins the game if they pick strictly more than i balls of the same color. In other words,

Player 0 wins if they pick any ball.
Player 1 wins if they pick at least two balls of the same color.
...
Player i wins if they pick at least i + 1 balls of the same color.

Return the number of players who win the game.
Note that multiple players can win the game.

Example 1:

Input: n = 4, pick = [[0,0],[1,0],[1,0],[2,1],[2,1],[2,0]]
Output: 2
Explanation:
Player 0 and player 1 win the game, while players 2 and 3 do not win.

Example 2:

Input: n = 5, pick = [[1,1],[1,2],[1,3],[1,4]]
Output: 0
Explanation:
No player wins the game.

Example 3:

Input: n = 5, pick = [[1,1],[2,4],[2,4],[2,4]]
Output: 1
Explanation:
Player 2 wins the game by picking 3 balls with color 4.


Constraints:

2 <= n <= 10
1 <= pick.length <= 100
pick[i].length == 2
0 <= xi <= n - 1
0 <= yi <= 10


```

## 题目翻译

n个玩家，pick数组记录每个玩家选的球颜色。玩家i获胜条件：某颜色球数 > i。返回获胜玩家数。

## 解题思路

用二维数组计数 cnt[player][color]，遍历pick统计，最后检查每个玩家是否有某颜色计数 > 玩家编号。

## Solution

[SourceCode](./solution.js)
