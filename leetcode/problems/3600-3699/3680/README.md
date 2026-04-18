# [3680] Generate Schedule

## Description

[LeetCode Problem Description](https://leetcode.com/problems/generate-schedule/description/)

* algorithms
* Medium (24.28%)
* Likes:    49
* Dislikes: 25
* Testcase Example:  '3'

```md
You are given an integer n representing n teams. You are asked to generate a schedule such that:

Each team plays every other team exactly twice: once at home and once away.
There is exactly one match per day; the schedule is a list of consecutive days and schedule[i] is the match on day i.
No team plays on consecutive days.

Return a 2D integer array schedule, where schedule[i][0] represents the home team and schedule[i][1] represents the away team. If multiple schedules meet the conditions, return any one of them.
If no schedule exists that meets the conditions, return an empty array.

Example 1:

Input: n = 3
Output: []
Explanation:
​​​​​​​Since each team plays every other team exactly twice, a total of 6 matches need to be played: [0,1],[0,2],[1,2],[1,0],[2,0],[2,1].
It&#39;s not possible to create a schedule without at least one team playing consecutive days.

Example 2:

Input: n = 5
Output: [[0,1],[2,3],[0,4],[1,2],[3,4],[0,2],[1,3],[2,4],[0,3],[1,4],[2,0],[3,1],[4,0],[2,1],[4,3],[1,0],[3,2],[4,1],[3,0],[4,2]]
Explanation:
Since each team plays every other team exactly twice, a total of 20 matches need to be played.
The output shows one of the schedules that meet the conditions. No team plays on consecutive days.


Constraints:

2 <= n <= 50​​​​​​​


```

## 题目翻译

n个队伍，每对队伍主客场各赛一次。每天一场比赛，同一队伍不能连续比赛。返回赛程或空数组表示无解。

## 解题思路

总比赛数 = n*(n-1)。每队参赛2*(n-1)场，休息天数 = 总比赛数 - 2*(n-1) = n*(n-1) - 2*(n-1) = (n-2)*(n-1)。需要休息天数>=0，即n>=2。

关键：n=3时6场比赛，每队4场，间隔至少需3天休息，总需4+3=7天，但只有6天。实际上n=3无解（返回[]）。

构造方法：将所有比赛排列成顺序，使得同一队伍不相邻。使用贪心：每次选一个与前一天比赛队伍不重叠的比赛。用优先队列或暴力选择。

用回溯+贪心：维护lastDay集合（前一天参赛的队伍），每次从剩余比赛中选一个两个队伍都不在lastDay中的比赛。

## Solution

[SourceCode](./solution.js)
