# [1434] Number of Ways to Wear Different Hats to Each Other

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/description/)

* algorithms
* Hard (45.85%)
* Likes:    967
* Dislikes: 12
* Testcase Example:  '[[3,4],[4,5],[5]]'

```md
There are n people and 40 types of hats labeled from 1 to 40.
Given a 2D integer array hats, where hats[i] is a list of all hats preferred by the ith person.
Return the number of ways that n people can wear different hats from each other.
Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: hats = [[3,4],[4,5],[5]]
Output: 1
Explanation: There is only one way to choose hats given the conditions.
First person chooses hat 3, Second person chooses hat 4 and last one hat 5.

Example 2:

Input: hats = [[3,5,1],[3,5]]
Output: 4
Explanation: There are 4 ways to choose hats:
(3,5), (5,3), (1,3) and (1,5)

Example 3:

Input: hats = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]
Output: 24
Explanation: Each person can choose hats labeled from 1 to 4.
Number of Permutations of (1,2,3,4) = 24.


Constraints:

n == hats.length
1 <= n <= 10
1 <= hats[i].length <= 40
1 <= hats[i][j] <= 40
hats[i] contains a list of unique integers.


```

## 翻译

n 个人（n <= 10），40 种帽子。给定每个人喜欢的帽子列表，求每个人戴不同帽子的方案数，模 10^9+7。

## 解题思路

**帽子维度的 bitmask DP**：

由于人数 n <= 10（bitmask 2^10 = 1024），而帽子有 40 种，以帽子为阶段做 DP：
- `dp[mask]` = 已分配帽子的人集合为 mask 时的方案数
- 依次处理每顶帽子 h（1 到 40），对于每个喜欢帽子 h 的人 p，尝试将 h 分配给 p
- 转移：`next[mask | (1<<p)] += dp[mask]`

复杂度：O(40 * 2^n * n)。

## Solution

[SourceCode](./solution.js)
