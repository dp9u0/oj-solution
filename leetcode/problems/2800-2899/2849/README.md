# [2849] Determine if a Cell Is Reachable at a Given Time

## Description

[LeetCode Problem Description](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/description/)

* algorithms
* Medium (37.15%)
* Likes:    841
* Dislikes: 770
* Testcase Example:  '2\n4\n7\n7\n6'

```md
You are given four integers sx, sy, fx, fy, and a non-negative integer t.
In an infinite 2D grid, you start at the cell (sx, sy). Each second, you must move to any of its adjacent cells.
Return true if you can reach cell (fx, fy) after exactly t seconds, or false otherwise.
A cell&#39;s adjacent cells are the 8 cells around it that share at least one corner with it. You can visit the same cell several times.

Example 1:


Input: sx = 2, sy = 4, fx = 7, fy = 7, t = 6
Output: true
Explanation: Starting at cell (2, 4), we can reach cell (7, 7) in exactly 6 seconds by going through the cells depicted in the picture above.

Example 2:


Input: sx = 3, sy = 1, fx = 7, fy = 3, t = 3
Output: false
Explanation: Starting at cell (3, 1), it takes at least 4 seconds to reach cell (7, 3) by going through the cells depicted in the picture above. Hence, we cannot reach cell (7, 3) at the third second.


Constraints:

1 <= sx, sy, fx, fy <= 109
0 <= t <= 109


```

## 中文翻译

在无限 2D 网格中，从 (sx,sy) 出发，每秒移到相邻 8 格之一。判断是否恰好在 t 秒到达 (fx,fy)。

## 解题思路

8 方向移动，最短距离为 max(|dx|, |dy|)（切比雪夫距离）。如果 t >= 最短距离则可达（多余的可以来回走掉）。特例：起点等于终点时，最短距离为 0，但 t=0 可以，t=1 也可以（走一步回来），t >= 2 也可以。唯独 t=1 且起点=终点不行（走出去至少 2 秒才能回来）。

时间复杂度：O(1)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
