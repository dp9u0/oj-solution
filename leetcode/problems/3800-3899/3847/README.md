# [3847] Find the Score Difference in a Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-score-difference-in-a-game/description/)

* algorithms
* Medium (72.23%)
* Testcase Example:  '[1,2,3]'

```md
You are given an integer array nums, where nums[i] represents the points scored in the i^th game.
There are exactly two players. Initially, the first player is active and the second player is inactive.
The following rules apply sequentially for each game i:
If nums[i] is odd, the active and inactive players swap roles.
In every 6th game (that is, game indices 5, 11, 17, ...), the active and inactive players swap roles.
The active player plays the i^th game and gains nums[i] points.
Return the score difference, defined as the first player's total score minus the second player's total score.

Example 1:
Input: nums = [1,2,3]
Output: 0
Explanation:​​​​​​​
Game 0: Since the points are odd, the second player becomes active and gains nums[0] = 1 point.
Game 1: No swap occurs. The second player gains nums[1] = 2 points.
Game 2: Since the points are odd, the first player becomes active and gains nums[2] = 3 points.
The score difference is 3 - 3 = 0.
Example 2:
Input: nums = [2,4,2,1,2,1]
Output: 4
Explanation:
Games 0 to 2: The first player gains 2 + 4 + 2 = 8 points.
Game 3: Since the points are odd, the second player is now active and gains nums[3] = 1 point.
Game 4: The second player gains nums[4] = 2 points.
Game 5: Since the points are odd, the players swap roles. Then, because this is the 6th game, the players swap again. The second player gains nums[5] = 1 point.
The score difference is 8 - 4 = 4.
Example 3:
Input: nums = [1]
Output: -1
Explanation:
Game 0: Since the points are odd, the second player is now active and gains nums[0] = 1 point.
The score difference is 0 - 1 = -1.

Constraints:
1
1

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译

给定一个整数数组 nums，nums[i] 表示第 i 场比赛得分。

两个玩家，初始第一个玩家为活跃状态。每场比赛 i 依次执行：
1. 如果 nums[i] 是奇数，活跃/非活跃玩家交换角色
2. 如果是第 6 场（索引 5, 11, 17...，即 i % 6 === 5），再次交换角色
3. 当前活跃玩家获得 nums[i] 分

返回 第一个玩家总分 - 第二个玩家总分。

**示例 1：** nums = [1,2,3] → 0
**示例 2：** nums = [2,4,2,1,2,1] → 4
**示例 3：** nums = [1] → -1

## Approach (解题思路)

**模拟**

用一个变量 `activePlayer` 追踪当前活跃玩家（0=玩家1, 1=玩家2），用数组 `scores` 记录两人得分。

每场比赛：
1. 如果 nums[i] 是奇数，翻转 activePlayer
2. 如果 i % 6 === 5，再次翻转 activePlayer
3. scores[activePlayer] += nums[i]

最后返回 scores[0] - scores[1]。

**时间复杂度：** O(n)
**空间复杂度：** O(1)
