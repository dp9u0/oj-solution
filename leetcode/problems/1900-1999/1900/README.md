# [1900] The Earliest and Latest Rounds Where Players Compete

## Description

[LeetCode Problem Description](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/description/)

* algorithms
* Hard (72.52%)
* Likes:    518
* Dislikes: 77
* Testcase Example:  '11\n2\n4'

```md
There is a tournament where n players are participating. The players are standing in a single row and are numbered from 1 to n based on their initial standing position (player 1 is the first player in the row, player 2 is the second player in the row, etc.).
The tournament consists of multiple rounds (starting from round number 1). In each round, the ith player from the front of the row competes against the ith player from the end of the row, and the winner advances to the next round. When the number of players is odd for the current round, the player in the middle automatically advances to the next round.

For example, if the row consists of players 1, 2, 4, 6, 7

Player 1 competes against player 7.
Player 2 competes against player 6.
Player 4 automatically advances to the next round.



After each round is over, the winners are lined back up in the row based on the original ordering assigned to them initially (ascending order).
The players numbered firstPlayer and secondPlayer are the best in the tournament. They can win against any other player before they compete against each other. If any two other players compete against each other, either of them might win, and thus you may choose the outcome of this round.
Given the integers n, firstPlayer, and secondPlayer, return an integer array containing two values, the earliest possible round number and thelatest possible round number in which these two players will compete against each other, respectively.

Example 1:

Input: n = 11, firstPlayer = 2, secondPlayer = 4
Output: [3,4]
Explanation:
One possible scenario which leads to the earliest round number:
First round: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
Second round: 2, 3, 4, 5, 6, 11
Third round: 2, 3, 4
One possible scenario which leads to the latest round number:
First round: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
Second round: 1, 2, 3, 4, 5, 6
Third round: 1, 2, 4
Fourth round: 2, 4

Example 2:

Input: n = 5, firstPlayer = 1, secondPlayer = 5
Output: [1,1]
Explanation: The players numbered 1 and 5 compete in the first round.
There is no way to make them compete in any other round.


Constraints:

2 <= n <= 28
1 <= firstPlayer < secondPlayer <= n


```

## 中文翻译

n 个选手排成一排，编号 1 到 n。每轮第 i 个与第 n+1-i 个对决，胜者晋级。奇数时中间直接晋级。胜者按原编号升序重排。firstPlayer 和 secondPlayer 比其他人都强，他们对决前必赢。其他对决结果可任意选择。求两人最早和最晚在第几轮相遇。

约束：2 <= n <= 28

## 解题思路

**状态记忆化 DFS**

1. 状态 (n, a, b)：当前 n 个选手，firstPlayer 在位置 a，secondPlayer 在位置 b。
2. 若 a + b == n + 1，两人在本轮相遇，返回 [1, 1]。
3. 否则枚举所有自由对决的结果（不涉及 a、b 的对决），计算新的 (n', a', b')。
4. 枚举用 bitmask，每个自由对选左边或右边赢。最多 12 个自由对（n=28），2^12=4096。
5. 返回所有结果中 min(1+earliest) 和 max(1+latest)。

## Solution

[SourceCode](./solution.js)
