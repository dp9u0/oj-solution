# [452] Minimum Number of Arrows to Burst Balloons

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/)

* algorithms
* Medium (61.31%)
* Likes:    8095
* Dislikes: 273
* Testcase Example:  '[[10,16],[2,8],[1,6],[7,12]]'

```md
There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.
Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.
Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

Example 1:

Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].

Example 2:

Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.

Example 3:

Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].


Constraints:

1 <= points.length <= 105
points[i].length == 2
-231 <= xstart < xend <= 231 - 1


```

## 翻译

给定一组气球区间 `points`，每个气球横跨 `[xstart, xend]`。一支箭从 x 位置垂直射出，可以射穿所有满足 `xstart <= x <= xend` 的气球。返回射穿所有气球所需的最少箭数。

## Approach

经典区间贪心：按右端点排序，依次遍历每个区间。如果当前区间的左端点 > 上一支箭的位置，说明无法被同一支箭射穿，需要新射一支箭，位置为当前区间的右端点。

时间复杂度 O(n log n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
