# [593] Valid Square

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-square/description/)

* algorithms
* Medium (45.48%)
* Likes:    1131
* Dislikes: 914
* Testcase Example:  '[0,0]\n[1,1]\n[1,0]\n[0,1]'

```md
Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.
The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.
A valid square has four equal sides with positive length and four equal angles (90-degree angles).

Example 1:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: true

Example 2:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
Output: false

Example 3:

Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
Output: true


Constraints:

p1.length == p2.length == p3.length == p4.length == 2
-104 <= xi, yi <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定平面内四个点 p1..p4（顺序任意），判断能否构成**正方形**（四边相等且为正长度、四角均为 90°）。

示例：单位正方形 → true；`[0,0],[1,1],[1,0],[0,12]` → false；旋转正方形 `[1,0],[-1,0],[0,1],[0,-1]` → true。

约束：坐标绝对值 ≤ 10^4

## 解题思路

计算 4 点两两共 6 条边的**平方距离**并排序：正方形当且仅当 `d[0..3]` 相等且 > 0（四条边），`d[4] = d[5] = 2·d[0]`（两条对角线）。

- 距离用平方避免浮点误差；
- 退化情形（重合点）因 `d[0] > 0` 检查被排除（全部重合时 6 个距离全 0）。

O(1)。
