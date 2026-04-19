# [1872] Stone Game VIII

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stone-game-viii/description/)

* algorithms
* Hard (53.94%)
* Likes:    476
* Dislikes: 25
* Testcase Example:  '[-1,2,-3,4,-5]'

```md
Alice and Bob take turns playing a game, with Alice starting first.
There are n stones arranged in a row. On each player&#39;s turn, while the number of stones is more than one, they will do the following:

Choose an integer x > 1, and remove the leftmost x stones from the row.
Add the sum of the removed stones&#39; values to the player&#39;s score.
Place a new stone, whose value is equal to that sum, on the left side of the row.

The game stops when only one stone is left in the row.
The score difference between Alice and Bob is (Alice&#39;s score - Bob&#39;s score). Alice&#39;s goal is to maximize the score difference, and Bob&#39;s goal is the minimize the score difference.
Given an integer array stones of length n where stones[i] represents the value of the ith stone from the left, return the score difference between Alice and Bob if they both play optimally.

Example 1:

Input: stones = [-1,2,-3,4,-5]
Output: 5
Explanation:
- Alice removes the first 4 stones, adds (-1) + 2 + (-3) + 4 = 2 to her score, and places a stone of
value 2 on the left. stones = [2,-5].
- Bob removes the first 2 stones, adds 2 + (-5) = -3 to his score, and places a stone of value -3 on
the left. stones = [-3].
The difference between their scores is 2 - (-3) = 5.

Example 2:

Input: stones = [7,-6,5,10,5,-2,-6]
Output: 13
Explanation:
- Alice removes all stones, adds 7 + (-6) + 5 + 10 + 5 + (-2) + (-6) = 13 to her score, and places a
stone of value 13 on the left. stones = [13].
The difference between their scores is 13 - 0 = 13.

Example 3:

Input: stones = [-10,-12]
Output: -22
Explanation:
- Alice can only make one move, which is to remove both stones. She adds (-10) + (-12) = -22 to her
score and places a stone of value -22 on the left. stones = [-22].
The difference between their scores is (-22) - 0 = -22.


Constraints:

n == stones.length
2 <= n <= 105
-104 <= stones[i] <= 104


```

## 中文翻译

Alice 和 Bob 轮流玩游戏，Alice 先手。n 个石头排成一排。每次操作：选择 x > 1，移除最左边的 x 个石头，将其和加到得分，并在左侧放一个值为该和的新石头。只剩一个石头时游戏结束。返回 Alice 和 Bob 的得分差（Alice - Bob），双方都最优策略。

约束：2 <= n <= 10^5

## 解题思路

**前缀和 + 动态规划**

1. 关键观察：每次操作移除前 x 个石头并用其和替代，等价于选择前缀和 prefix[i] 作为得分。
2. 定义 dp[i]：从第 i 个石头开始游戏时，当前玩家能获得的最大分差。
3. 转移：dp[i] = max(prefix[i+1] - dp[i+1], prefix[i+2] - dp[i+2], ..., prefix[n-1] - dp[n-1])
4. 优化：dp[i] = max(prefix[i+1] - dp[i+1], dp[i+1])，即要么取当前位置，要么跳过。
5. 从右向左计算，dp[n-1] = prefix[n]（只能取全部）。

## Solution

[SourceCode](./solution.js)
