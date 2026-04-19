# [486] Predict the Winner

## Description

[LeetCode Problem Description](https://leetcode.com/problems/predict-the-winner/description/)

* algorithms
* Medium (56.16%)
* Likes:    6170
* Dislikes: 296
* Testcase Example:  '[1,5,2]'

```md
You are given an integer array nums. Two players are playing a game with this array: player 1 and player 2.
Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a score of 0. At each turn, the player takes one of the numbers from either end of the array (i.e., nums[0] or nums[nums.length - 1]) which reduces the size of the array by 1. The player adds the chosen number to their score. The game ends when there are no more elements in the array.
Return true if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return true. You may assume that both players are playing optimally.

Example 1:

Input: nums = [1,5,2]
Output: false
Explanation: Initially, player 1 can choose between 1 and 2.
If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2).
So, final score of player 1 is 1 + 2 = 3, and player 2 is 5.
Hence, player 1 will never be the winner and you need to return false.

Example 2:

Input: nums = [1,5,233,7]
Output: true
Explanation: Player 1 first chooses 1. Then player 2 has to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.


Constraints:

1 <= nums.length <= 20
0 <= nums[i] <= 107


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数数组 nums，两个玩家轮流从数组两端取数，取到的数加到自己的分数。玩家1先手。假设双方都采取最优策略，返回玩家1是否能赢（平局也算赢）。

## Approach

递归 + 记忆化。定义 `solve(l, r)` 表示在子数组 nums[l..r] 上，当前玩家相对于对手能获得的最大分数差。

- 若 l == r，返回 nums[l]
- 否则：solve(l, r) = max(nums[l] - solve(l+1, r), nums[r] - solve(l, r-1))

最终 solve(0, n-1) >= 0 则玩家1获胜。

用滚动数组优化空间：dp[i] 表示以 i 为起点、长度为 len 的子数组的分数差，从短到长迭代。

时间复杂度 O(n^2)，空间 O(n)。
