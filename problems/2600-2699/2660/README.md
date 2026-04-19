# [2660] Determine the Winner of a Bowling Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/description/)

* algorithms
* Easy (37.39%)
* Likes:    294
* Dislikes: 157
* Testcase Example:  '[5,10,3,2]\n[6,5,7,3]'

```md
You are given two 0-indexed integer arrays player1 and player2, representing the number of pins that player 1 and player 2 hit in a bowling game, respectively.
The bowling game consists of n turns, and the number of pins in each turn is exactly 10.
Assume a player hits xi pins in the ith turn. The value of the ith turn for the player is:

2xi if the player hits 10 pins in either (i - 1)th or (i - 2)th turn.
Otherwise, it is xi.

The score of the player is the sum of the values of their n turns.
Return

1 if the score of player 1 is more than the score of player 2,
2 if the score of player 2 is more than the score of player 1, and
0 in case of a draw.


Example 1:

Input: player1 = [5,10,3,2], player2 = [6,5,7,3]
Output: 1
Explanation:
The score of player 1 is 5 + 10 + 2*3 + 2*2 = 25.
The score of player 2 is 6 + 5 + 7 + 3 = 21.

Example 2:

Input: player1 = [3,5,7,6], player2 = [8,10,10,2]
Output: 2
Explanation:
The score of player 1 is 3 + 5 + 7 + 6 = 21.
The score of player 2 is 8 + 10 + 2*10 + 2*2 = 42.

Example 3:

Input: player1 = [2,3], player2 = [4,1]
Output: 0
Explanation:
The score of player1 is 2 + 3 = 5.
The score of player2 is 4 + 1 = 5.

Example 4:

Input: player1 = [1,1,1,10,10,10,10], player2 = [10,10,10,10,1,1,1]
Output: 2
Explanation:
The score of player1 is 1 + 1 + 1 + 10 + 2*10 + 2*10 + 2*10 = 73.
The score of player2 is 10 + 2*10 + 2*10 + 2*10 + 2*1 + 2*1 + 1 = 75.


Constraints:

n == player1.length == player2.length
1 <= n <= 1000
0 <= player1[i], player2[i] <= 10


```

## 中文翻译

两个保龄球选手的得分数组，若前一轮或前两轮击中 10 瓶则当前轮得分翻倍。比较总分返回胜者。

## 解题思路

写一个计算单选手得分的函数：遍历时检查 i-1 和 i-2 是否为 10，是则当前分数翻倍。比较两选手总分。

## Solution

[SourceCode](./solution.js)
