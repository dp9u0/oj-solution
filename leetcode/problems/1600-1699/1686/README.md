# [1686] Stone Game VI

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stone-game-vi/description/)

* algorithms
* Medium (60.52%)
* Likes:    894
* Dislikes: 77
* Testcase Example:  '[1,3]\n[2,1]'

```md
Alice and Bob take turns playing a game, with Alice starting first.
There are n stones in a pile. On each player&#39;s turn, they can remove a stone from the pile and receive points based on the stone&#39;s value. Alice and Bob may value the stones differently.
You are given two integer arrays of length n, aliceValues and bobValues. Each aliceValues[i] and bobValues[i] represents how Alice and Bob, respectively, value the ith stone.
The winner is the person with the most points after all the stones are chosen. If both players have the same amount of points, the game results in a draw. Both players will play optimally.Both players know the other&#39;s values.
Determine the result of the game, and:

If Alice wins, return 1.
If Bob wins, return -1.
If the game results in a draw, return 0.


Example 1:

Input: aliceValues = [1,3], bobValues = [2,1]
Output: 1
Explanation:
If Alice takes stone 1 (0-indexed) first, Alice will receive 3 points.
Bob can only choose stone 0, and will only receive 2 points.
Alice wins.

Example 2:

Input: aliceValues = [1,2], bobValues = [3,1]
Output: 0
Explanation:
If Alice takes stone 0, and Bob takes stone 1, they will both have 1 point.
Draw.

Example 3:

Input: aliceValues = [2,4,3], bobValues = [1,6,7]
Output: -1
Explanation:
Regardless of how Alice plays, Bob will be able to have more points than Alice.
For example, if Alice takes stone 1, Bob can take stone 2, and Alice takes stone 0, Alice will have 6 points to Bob&#39;s 7.
Bob wins.


Constraints:

n == aliceValues.length == bobValues.length
1 <= n <= 105
1 <= aliceValues[i], bobValues[i] <= 100


```

## 题目翻译

Alice 和 Bob 轮流从石头堆中取石头，Alice 先手。每块石头对两人有不同的价值。两人都最优策略。比较最终得分，Alice 赢返回 1，Bob 赢返回 -1，平局返回 0。

## 解题思路

贪心。每次取石头时，最优策略是选择 aliceValues[i] + bobValues[i] 最大的石头（因为取了不仅自己得分，还剥夺了对方的分数）。按 a[i]+b[i] 降序排列，Alice 和 Bob 轮流取。

时间复杂度 O(n log n)

## Solution

[SourceCode](./solution.js)
