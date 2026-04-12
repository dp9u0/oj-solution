# [2491] Divide Players Into Teams of Equal Skill

## Description

[LeetCode Problem Description](https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/description/)

* algorithms
* Medium (68.93%)
* Likes:    1084
* Dislikes: 35
* Testcase Example:  '[3,2,5,1,3,4]'

```md
You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.
The chemistry of a team is equal to the product of the skills of the players on that team.
Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.

Example 1:

Input: skill = [3,2,5,1,3,4]
Output: 22
Explanation:
Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.

Example 2:

Input: skill = [3,4]
Output: 12
Explanation:
The two players form a team with a total skill of 7.
The chemistry of the team is 3 * 4 = 12.

Example 3:

Input: skill = [1,1,2,3]
Output: -1
Explanation:
There is no way to divide the players into teams such that the total skill of each team is equal.


Constraints:

2 <= skill.length <= 105
skill.length is even.
1 <= skill[i] <= 1000


```

## 翻译

给定一个正整数数组 `skill`（长度为偶数），将玩家分成 n/2 个两人队伍，使得每队的技能总和相等。队伍的"化学反应"等于两人技能的乘积。返回所有队伍化学反应之和，若无法均分则返回 -1。

## Approach

排序 + 双指针。排序后，首尾配对（最小+最大）即可使每队总和相等。先计算总和确定每队目标和 `target = total / (n/2)`，然后用左右指针配对验证。若某对之和不等于 target 则返回 -1。

时间复杂度 O(n log n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
