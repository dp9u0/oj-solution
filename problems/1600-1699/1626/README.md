# [1626] Best Team With No Conflicts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/best-team-with-no-conflicts/description/)

* algorithms
* Medium (50.66%)
* Likes:    3053
* Dislikes: 99
* Testcase Example:  '[1,3,5,10,15]\n[1,2,3,4,5]'

```md
You are the manager of a basketball team. For the upcoming tournament, you want to choose the team with the highest overall score. The score of the team is the sum of scores of all the players in the team.
However, the basketball team is not allowed to have conflicts. A conflict exists if a younger player has a strictly higher score than an older player. A conflict does not occur between players of the same age.
Given two lists, scores and ages, where each scores[i] and ages[i] represents the score and age of the ith player, respectively, return the highest overall score of all possible basketball teams.

Example 1:

Input: scores = [1,3,5,10,15], ages = [1,2,3,4,5]
Output: 34
Explanation:You can choose all the players.

Example 2:

Input: scores = [4,5,6,5], ages = [2,1,2,1]
Output: 16
Explanation:It is best to choose the last 3 players. Notice that you are allowed to choose multiple people of the same age.

Example 3:

Input: scores = [1,2,3,5], ages = [8,9,10,1]
Output: 6
Explanation:It is best to choose the first 3 players.


Constraints:

1 <= scores.length, ages.length <= 1000
scores.length == ages.length
1 <= scores[i] <= 106
1 <= ages[i] <= 1000


```

## 中文翻译

给定 scores 和 ages 数组，选出一个球队使总分最大。约束：不能有年轻球员得分严格高于年长球员。同年龄不冲突。

## 解题思路

按年龄升序（年龄相同按分数升序）排序后，问题转化为求分数的最长非递减子序列的最大和。dp[i] 表示以第 i 个球员结尾的最大球队总分。

dp[i] = scores[i] + max(dp[j]) for j < i 且 scores[j] <= scores[i]

时间复杂度：O(n^2)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
