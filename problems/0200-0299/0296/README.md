# [296] 最佳的碰头地点

## Description


```md
https://leetcode.cn/problems/best-meeting-point/description/
* algorithms
* Hard (62.56%)
* Likes:    151
* Dislikes: -
* Testcase Example:  '[[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]]'
给你一个 m x n  的二进制网格 grid ，其中 1 表示某个朋友的家所处的位置。返回 最小的 总行走距离 。
总行走距离 是朋友们家到碰头地点的距离之和。
我们将使用 曼哈顿距离 来计算，其中 distance(p1, p2) =
p2.x - p1.x
+
p2.y - p1.y
。

示例 1：
输入: grid = [[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]]
输出: 6
解释: 给定的三个人分别住在(0,0)，(0,4) 和 (2,2):
(0,2) 是一个最佳的碰面点，其总行走距离为 2 + 2 + 2 = 6，最小，因此返回 6。
示例 2:
输入: grid = [[1,1]]
输出: 1

提示:
m == grid.length
n == grid[i].length
1 <= m, n <= 200
grid[i][j] == 0 or 1.
grid 中 至少 有两个朋友
Hint 1: Try to solve it in one dimension first. How can this solution apply to the two dimension case?

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a grid where 1 marks a group member's home, find a meeting point (any cell) minimizing the total Manhattan distance everyone travels. Return that total.

**Example:**
[[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]] → 6 (meet at (0,2))

**Constraints:**
- 1 <= m, n <= 200, at least one 1

## Approach

曼哈顿距离按行、列独立可加:最优 meet 点的行/列分别取全体成员行/列坐标的**中位数**。行坐标天然升序,列坐标排序后取中位,求各轴绝对偏差和。

时间 O(mn + k log k),空间 O(k),k 为人数。
