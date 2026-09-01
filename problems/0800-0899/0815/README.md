# [815] Bus Routes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/bus-routes/description/)

* algorithms
* Hard (47.53%)
* Likes:    4784
* Dislikes: 137
* Testcase Example:  '[[1,2,7],[3,6,7]]\n1\n6'

```md
You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.

For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.

You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.
Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

Example 1:

Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
Output: 2
Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.

Example 2:

Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
Output: -1



Constraints:

1 <= routes.length <= 500.
1 <= routes[i].length <= 105
All the values of routes[i] are unique.
sum(routes[i].length) <= 105
0 <= routes[i][j] < 106
0 <= source, target < 106


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

公交路线数组 `routes[i]` 表示第 i 辆车循环经过的站点。从 `source` 出发只乘公交到 `target`，返回最少乘车次数，不可达 −1。

示例 1：`[[1,2,7],[3,6,7]], 1, 6` → `2`；示例 2：`[[7,12],[4,5,15],[6],[15,19],[9,12,13]], 15, 12` → `-1`

## 解题思路

经典 **BFS（站点层 / 路线访问标记）**：建 站点→路线 索引；从 source 开始，每乘一辆车可到达该路线全部站点（一层）；路线只访问一次（visited 数组），站点防重入 Set。O(Σ|routes|)。
