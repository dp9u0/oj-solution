# [3027] Find the Number of Ways to Place People II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/description/)

* algorithms
* Hard (64.42%)
* Likes:    357
* Dislikes: 64
* Testcase Example:  '[[1,1],[2,2],[3,3]]'

```md
You are given a 2D array points of size n x 2 representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
We define the right direction as positive x-axis (increasing x-coordinate) and the left direction as negative x-axis (decreasing x-coordinate). Similarly, we define the up direction as positive y-axis (increasing y-coordinate) and the down direction as negative y-axis (decreasing y-coordinate)
You have to place n people, including Alice and Bob, at these points such that there is exactly one person at every point. Alice wants to be alone with Bob, so Alice will build a rectangular fence with Alice&#39;s position as the upper left corner and Bob&#39;s position as the lower right corner of the fence (Note that the fence might not enclose any area, i.e. it can be a line). If any person other than Alice and Bob is either inside the fence or on the fence, Alice will be sad.
Return the number of pairs of points where you can place Alice and Bob, such that Alice does not become sad on building the fence.
Note that Alice can only build a fence with Alice&#39;s position as the upper left corner, and Bob&#39;s position as the lower right corner. For example, Alice cannot build either of the fences in the picture below with four corners (1, 1), (1, 3), (3, 1), and (3, 3), because:

With Alice at (3, 3) and Bob at (1, 1), Alice&#39;s position is not the upper left corner and Bob&#39;s position is not the lower right corner of the fence.
With Alice at (1, 3) and Bob at (1, 1)(as the rectangle shown in the image instead of a line),Bob&#39;s position is not the lower right corner of the fence.



Example 1:


Input: points = [[1,1],[2,2],[3,3]]
Output: 0
Explanation: There is no way to place Alice and Bob such that Alice can build a fence with Alice&#39;s position as the upper left corner and Bob&#39;s position as the lower right corner. Hence we return 0.

Example 2:


Input: points = [[6,2],[4,4],[2,6]]
Output: 2
Explanation: There are two ways to place Alice and Bob such that Alice will not be sad:
- Place Alice at (4, 4) and Bob at (6, 2).
- Place Alice at (2, 6) and Bob at (4, 4).
You cannot place Alice at (2, 6) and Bob at (6, 2) because the person at (4, 4) will be inside the fence.

Example 3:


Input: points = [[3,1],[1,3],[1,1]]
Output: 2
Explanation: There are two ways to place Alice and Bob such that Alice will not be sad:
- Place Alice at (1, 1) and Bob at (3, 1).
- Place Alice at (1, 3) and Bob at (1, 1).
You cannot place Alice at (1, 3) and Bob at (3, 1) because the person at (1, 1) will be on the fence.
Note that it does not matter if the fence encloses any area, the first and second fences in the image are valid.


Constraints:

2 <= n <= 1000
points[i].length == 2
-109 <= points[i][0], points[i][1] <= 109
All points[i] are distinct.


```

## 翻译

给定平面上 n 个点，计数满足以下条件的点对 (Alice, Bob)：
- Alice 的位置作为矩形左上角，Bob 的位置作为右下角（即 Alice.x <= Bob.x 且 Alice.y >= Bob.y）
- 矩形内或边界上没有其他人（只有 Alice 和 Bob）

## 解题思路

**排序 + 扫描**：

按 x 升序排列（x 相同按 y 降序）。对每个点 i 作为 Alice，向右扫描 j：
- 维护 `maxY` = 扫描过的满足 y <= Alice.y 的最大 y 值
- 若 `points[j].y <= Alice.y` 且 `points[j].y > maxY`，则 (i, j) 是有效对
- 更新 `maxY = max(maxY, points[j].y)`

原理：`maxY < Bob.y` 保证没有中间点落在矩形内。

复杂度：O(n^2)。

## Solution

[SourceCode](./solution.js)
