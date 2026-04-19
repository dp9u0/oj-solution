# [1936] Add Minimum Number of Rungs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/add-minimum-number-of-rungs/description/)

* algorithms
* Medium (43.85%)
* Likes:    394
* Dislikes: 31
* Testcase Example:  '[1,3,5,10]\n2'

```md
You are given a strictly increasing integer array rungs that represents the height of rungs on a ladder. You are currently on the floor at height 0, and you want to reach the last rung.
You are also given an integer dist. You can only climb to the next highest rung if the distance between where you are currently at (the floor or on a rung) and the next rung is at most dist. You are able to insert rungs at any positive integer height if a rung is not already there.
Return the minimum number of rungs that must be added to the ladder in order for you to climb to the last rung.

Example 1:

Input: rungs = [1,3,5,10], dist = 2
Output: 2
Explanation:
You currently cannot reach the last rung.
Add rungs at heights 7 and 8 to climb this ladder.
The ladder will now have rungs at [1,3,5,7,8,10].

Example 2:

Input: rungs = [3,6,8,10], dist = 3
Output: 0
Explanation:
This ladder can be climbed without adding additional rungs.

Example 3:

Input: rungs = [3,4,6,7], dist = 2
Output: 1
Explanation:
You currently cannot reach the first rung from the ground.
Add a rung at height 1 to climb this ladder.
The ladder will now have rungs at [1,3,4,6,7].


Constraints:

1 <= rungs.length <= 105
1 <= rungs[i] <= 109
1 <= dist <= 109
rungs is strictly increasing.


```

## 翻译

给定一个严格递增的整数数组 rungs 表示梯子的横档高度。你从地面（高度 0）出发，想到达最后一个横档。给定整数 dist，只有当前高度到下一个横档的距离不超过 dist 时才能攀爬。可以在任意正整数高度插入新的横档。返回最少需要插入多少横档才能爬到最后。

## Approach

贪心：从高度 0 开始遍历每个横档，计算当前高度到下一个横档的差值 gap。需要插入 `Math.ceil(gap / dist) - 1` 个横档（如果 gap > dist）。累加即可。

## Solution

[SourceCode](./solution.js)
