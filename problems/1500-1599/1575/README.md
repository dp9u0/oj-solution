# [1575] Count All Possible Routes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-all-possible-routes/description/)

* algorithms
* Hard (64.85%)
* Likes:    1679
* Dislikes: 60
* Testcase Example:  '[2,3,6,8,4]\n1\n3\n5'

```md
You are given an array of distinct positive integers locations where locations[i] represents the position of city i. You are also given integers start, finish and fuel representing the starting city, ending city, and the initial amount of fuel you have, respectively.
At each step, if you are at city i, you can pick any city j such that j != i and 0 <= j < locations.length and move to city j. Moving from city i to city j reduces the amount of fuel you have by
locations[i] - locations[j]
. Please notice that
x
denotes the absolute value of x.
Notice that fuel cannot become negative at any point in time, and that you are allowed to visit any city more than once (including start and finish).
Return the count of all possible routes from start to finish. Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: locations = [2,3,6,8,4], start = 1, finish = 3, fuel = 5
Output: 4
Explanation: The following are all possible routes, each uses 5 units of fuel:
1 -> 3
1 -> 2 -> 3
1 -> 4 -> 3
1 -> 4 -> 2 -> 3

Example 2:

Input: locations = [4,3,1], start = 1, finish = 0, fuel = 6
Output: 5
Explanation: The following are all possible routes:
1 -> 0, used fuel = 1
1 -> 2 -> 0, used fuel = 5
1 -> 2 -> 1 -> 0, used fuel = 5
1 -> 0 -> 1 -> 0, used fuel = 3
1 -> 0 -> 1 -> 0 -> 1 -> 0, used fuel = 5

Example 3:

Input: locations = [5,2,1], start = 0, finish = 2, fuel = 3
Output: 0
Explanation: It is impossible to get from 0 to 2 using only 3 units of fuel since the shortest route needs 4 units of fuel.


Constraints:

2 <= locations.length <= 100
1 <= locations[i] <= 109
All integers in locations are distinct.
0 <= start, finish < locations.length
1 <= fuel <= 200


```

## 题目翻译

给定城市位置数组 locations、起点 start、终点 finish 和初始油量 fuel。每次可从城市 i 移动到任意城市 j（j≠i），消耗 |locations[i]-locations[j]| 的油量。油量不能为负。可以重复访问城市。求从 start 到 finish 的所有可能路径数，对 10^9+7 取模。

## 解题思路

**动态规划（记忆化搜索）**

dp[i][f] = 从城市 i 出发、剩余油量 f 时到达 finish 的路径数。

转移：dp[i][f] = sum(dp[j][f - |loc[i]-loc[j]|]) for all valid j。
边界：dp[finish][any] 包含 1（当前已在终点算一条路径，但需要继续消耗油量后回到终点）。
注意：到达 finish 后还可以继续走再回来，所以 dp[finish][f] 初始化为 1，然后继续累加转移。

状态数：100 × 200 = 20000。时间复杂度 O(n² × fuel)。

## Solution

[SourceCode](./solution.js)
