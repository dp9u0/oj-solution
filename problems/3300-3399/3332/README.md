# [3332] Maximum Points Tourist Can Earn

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-points-tourist-can-earn/description/)

* algorithms
* Medium (47.54%)
* Likes:    93
* Dislikes: 15
* Testcase Example:  '2\n1\n[[2,3]]\n[[0,2],[1,0]]'

```md
You are given two integers, n and k, along with two 2D integer arrays, stayScore and travelScore.
A tourist is visiting a country with n cities, where each city is directly connected to every other city. The tourist&#39;s journey consists of exactly k 0-indexed days, and they can choose any city as their starting point.
Each day, the tourist has two choices:

Stay in the current city: If the tourist stays in their current city curr during day i, they will earn stayScore[i][curr] points.
Move to another city: If the tourist moves from their current city curr to city dest, they will earn travelScore[curr][dest] points.

Return the maximum possible points the tourist can earn.

Example 1:

Input: n = 2, k = 1, stayScore = [[2,3]], travelScore = [[0,2],[1,0]]
Output: 3
Explanation:
The tourist earns the maximum number of points by starting in city 1 and staying in that city.

Example 2:

Input: n = 3, k = 2, stayScore = [[3,4,2],[2,1,2]], travelScore = [[0,2,1],[2,0,4],[3,2,0]]
Output: 8
Explanation:
The tourist earns the maximum number of points by starting in city 1, staying in that city on day 0, and traveling to city 2 on day 1.


Constraints:

1 <= n <= 200
1 <= k <= 200
n == travelScore.length == travelScore[i].length == stayScore[i].length
k == stayScore.length
1 <= stayScore[i][j] <= 100
0 <= travelScore[i][j] <= 100
travelScore[i][i] == 0


```

## 中文翻译

给定 n 个城市和 k 天的旅行，每天可以选择留在当前城市（获得 stayScore[i][curr]）或移动到其他城市（获得 travelScore[curr][dest]）。求 k 天能获得的最大积分。

## 解题思路

DP：dp[i][j] 表示第 i 天在城市 j 时能获得的最大积分。
- 留在当前城市：dp[i][j] = dp[i-1][j] + stayScore[i][j]
- 从其他城市移动过来：dp[i][j] = max(dp[i-1][p] + travelScore[p][j]) 对所有 p != j

时间复杂度：O(k * n^2)，空间复杂度：O(k * n)

## Solution

[SourceCode](./solution.js)
