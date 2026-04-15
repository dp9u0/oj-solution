# [1690] Stone Game VII

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stone-game-vii/description/)

* algorithms
* Medium (58.71%)
* Likes:    1048
* Dislikes: 175
* Testcase Example:  '[5,3,1,4,2]'

```md
Alice and Bob take turns playing a game, with Alice starting first.
There are n stones arranged in a row. On each player&#39;s turn, they can remove either the leftmost stone or the rightmost stone from the row and receive points equal to the sum of the remaining stones&#39; values in the row. The winner is the one with the higher score when there are no stones left to remove.
Bob found that he will always lose this game (poor Bob, he always loses), so he decided to minimize the score&#39;s difference. Alice&#39;s goal is to maximize the difference in the score.
Given an array of integers stones where stones[i] represents the value of the ith stone from the left, return the difference in Alice and Bob&#39;s score if they both play optimally.

Example 1:

Input: stones = [5,3,1,4,2]
Output: 6
Explanation:
- Alice removes 2 and gets 5 + 3 + 1 + 4 = 13 points. Alice = 13, Bob = 0, stones = [5,3,1,4].
- Bob removes 5 and gets 3 + 1 + 4 = 8 points. Alice = 13, Bob = 8, stones = [3,1,4].
- Alice removes 3 and gets 1 + 4 = 5 points. Alice = 18, Bob = 8, stones = [1,4].
- Bob removes 1 and gets 4 points. Alice = 18, Bob = 12, stones = [4].
- Alice removes 4 and gets 0 points. Alice = 18, Bob = 12, stones = [].
The score difference is 18 - 12 = 6.

Example 2:

Input: stones = [7,90,5,1,100,10,10,2]
Output: 122

Constraints:

n == stones.length
2 <= n <= 1000
1 <= stones[i] <= 1000


```

## 中文翻译

Alice 和 Bob 轮流从石子行的左端或右端移除一个石子，得分等于剩余石子之和。Alice 先手且想最大化分差，Bob 想最小化分差。求两人都最优策略下的分差。

## 解题思路

区间 DP。dp[i][j] 表示剩余石子 stones[i..j] 时当前玩家能获得的最大分差优势。转移：dp[i][j] = max(sum(i+1,j) - dp[i+1][j], sum(i,j-1) - dp[i][j-1])。用前缀和优化区间求和，1D 滚动数组节省空间。

时间复杂度：O(n^2)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
