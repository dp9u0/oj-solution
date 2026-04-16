# [3175] Find The First Player to win K Games in a Row

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/description/)

* algorithms
* Medium (40.15%)
* Likes:    140
* Dislikes: 16
* Testcase Example:  '[4,2,6,3,9]\n2'

```md
A competition consists of n players numbered from 0 to n - 1.
You are given an integer array skills of size n and a positive integer k, where skills[i] is the skill level of player i. All integers in skills are unique.
All players are standing in a queue in order from player 0 to player n - 1.
The competition process is as follows:

The first two players in the queue play a game, and the player with the higher skill level wins.
After the game, the winner stays at the beginning of the queue, and the loser goes to the end of it.

The winner of the competition is the first player who wins k games in a row.
Return the initial index of the winning player.

Example 1:

Input: skills = [4,2,6,3,9], k = 2
Output: 2
Explanation:
Initially, the queue of players is [0,1,2,3,4]. The following process happens:

Players 0 and 1 play a game, since the skill of player 0 is higher than that of player 1, player 0 wins. The resulting queue is [0,2,3,4,1].
Players 0 and 2 play a game, since the skill of player 2 is higher than that of player 0, player 2 wins. The resulting queue is [2,3,4,1,0].
Players 2 and 3 play a game, since the skill of player 2 is higher than that of player 3, player 2 wins. The resulting queue is [2,4,1,0,3].

Player 2 won k = 2 games in a row, so the winner is player 2.

Example 2:

Input: skills = [2,5,4], k = 3
Output: 1
Explanation:
Initially, the queue of players is [0,1,2]. The following process happens:

Players 0 and 1 play a game, since the skill of player 1 is higher than that of player 0, player 1 wins. The resulting queue is [1,2,0].
Players 1 and 2 play a game, since the skill of player 1 is higher than that of player 2, player 1 wins. The resulting queue is [1,0,2].
Players 1 and 0 play a game, since the skill of player 1 is higher than that of player 0, player 1 wins. The resulting queue is [1,2,0].

Player 1 won k = 3 games in a row, so the winner is player 1.


Constraints:

n == skills.length
2 <= n <= 105
1 <= k <= 109
1 <= skills[i] <= 106
All integers in skills are unique.


```

## 中文翻译

n 个选手排成一列，前两个比赛，高技能者获胜留在队首，输者去队尾。第一个连续赢 k 场的选手获胜。返回其初始下标。

## 解题思路

模拟。维护当前冠军和连胜计数。遍历数组，每个挑战者与当前冠军比较：赢则成为新冠军（连胜=1），输则冠军连胜+1。冠军连胜达到 k 或遍历完（技能最强的必然是最终赢家），返回冠军下标。k >= n 时等价于找最大值。

## Solution

[SourceCode](./solution.js)
