# [1904] The Number of Full Rounds You Have Played

## Description

[LeetCode Problem Description](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/description/)

* algorithms
* Medium (43.43%)
* Likes:    231
* Dislikes: 265
* Testcase Example:  '"09:31"\n"10:14"'

```md
You are participating in an online chess tournament. There is a chess round that starts every 15 minutes. The first round of the day starts at 00:00, and after every 15 minutes, a new round starts.

For example, the second round starts at 00:15, the fourth round starts at 00:45, and the seventh round starts at 01:30.

You are given two strings loginTime and logoutTime where:

loginTime is the time you will login to the game, and
logoutTime is the time you will logout from the game.

If logoutTime is earlier than loginTime, this means you have played from loginTime to midnight and from midnight to logoutTime.
Return the number of full chess rounds you have played in the tournament.
Note:All the given times follow the 24-hour clock. That means the first round of the day starts at 00:00 and the last round of the day starts at 23:45.

Example 1:

Input: loginTime = '09:31', logoutTime = '10:14'
Output: 1
Explanation: You played one full round from 09:45 to 10:00.
You did not play the full round from 09:30 to 09:45 because you logged in at 09:31 after it began.
You did not play the full round from 10:00 to 10:15 because you logged out at 10:14 before it ended.

Example 2:

Input: loginTime = '21:30', logoutTime = '03:00'
Output: 22
Explanation: You played 10 full rounds from 21:30 to 00:00 and 12 full rounds from 00:00 to 03:00.
10 + 12 = 22.


Constraints:

loginTime and logoutTime are in the format hh:mm.
00 <= hh <= 23
00 <= mm <= 59
loginTime and logoutTime are not equal.


```

## 中文翻译

每 15 分钟一轮比赛，给定登录和登出时间，求完整参与的轮数。若登出早于登录，表示跨午夜。

## 解题思路

**时间转分钟数 + 15 分钟对齐**

1. 将 loginTime 和 logoutTime 转为分钟数 login, logout
2. login 向上取整到 15 的倍数（开始时间），logout 向下取整到 15 的倍数（结束时间）
3. 若跨午夜（logout < login），分两段：login~24*60 + 0~logout
4. 答案 = (end - start) / 15

时间复杂度：O(1)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
