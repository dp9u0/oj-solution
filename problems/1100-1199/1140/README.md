# [1140] Stone Game II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stone-game-ii/description/)

* algorithms
* Medium (72.84%)
* Likes:    3448
* Dislikes: 939
* Testcase Example:  '[2,7,9,4,4]'

```md
Alice and Bob continue their games with piles of stones. There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i]. The objective of the game is to end with the most stones.
Alice and Bob take turns, with Alice starting first.
On each player&#39;s turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M. Then, we set M = max(M, X). Initially, M = 1.
The game continues until all the stones have been taken.
Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

Example 1:

Input: piles = [2,7,9,4,4]
Output: 10
Explanation:

If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 stones in total.
If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get 2 + 7 = 9 stones in total.

So we return 10 since it&#39;s larger.

Example 2:

Input: piles = [1,2,3,4,5,100]
Output: 104


Constraints:

1 <= piles.length <= 100
1 <= piles[i]<= 104


```

## 题目翻译

给定石子堆数组 piles，Alice 和 Bob 轮流取石子。每次可取前 X 堆（1 ≤ X ≤ 2M），取后 M = max(M, X)。初始 M=1。两人都最优策略，返回 Alice 最多能拿多少石子。

## 解题思路

区间 DP + 记忆化搜索：dp(i, m) 表示从第 i 堆开始、当前 M=m 时，当前玩家能比对手多拿多少石子。后缀和辅助计算。dp(0, 1) 即为 Alice 能多拿的数量，Alice 的得分 = (总和 + dp(0,1)) / 2。

## Solution

[SourceCode](./solution.js)
