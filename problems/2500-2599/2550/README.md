# [2550] Count Collisions of Monkeys on a Polygon

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/description/)

* algorithms
* Medium (30.02%)
* Likes:    270
* Dislikes: 531
* Testcase Example:  '3'

```md
There is a regular convex polygon with n vertices. The vertices are labeled from 0 to n - 1 in a clockwise direction, and each vertex has exactly one monkey. The following figure shows a convex polygon of 6 vertices.

Simultaneously, each monkey moves to a neighboring vertex. A collision happens if at least two monkeys reside on the same vertex after the movement or intersect on an edge.
Return the number of ways the monkeys can move so that at least one collision happens. Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: n = 3
Output: 6
Explanation:
There are 8 total possible movements.
Two ways such that they collide at some point are:

Monkey 1 moves in a clockwise direction; monkey 2 moves in an anticlockwise direction; monkey 3 moves in a clockwise direction. Monkeys 1 and 2 collide.
Monkey 1 moves in an anticlockwise direction; monkey 2 moves in an anticlockwise direction; monkey 3 moves in a clockwise direction. Monkeys 1 and 3 collide.


Example 2:

Input: n = 4
Output: 14


Constraints:

3 <= n <= 109


```

## 翻译

一个正凸多边形有 n 个顶点。顶点按顺时针方向从 0 到 n-1 标记，每个顶点上恰好有一只猴子。同时，每只猴子移动到一个相邻的顶点。如果在移动后至少有两只猴子位于同一顶点，或者在边上相交，则发生碰撞。

返回至少发生一次碰撞的移动方式数。由于答案可能很大，返回对 10^9+7 取模的结果。

## 解题思路

每只猴子有 2 种选择：顺时针或逆时针移动到相邻顶点。总移动方式数为 2^n。

不发生碰撞的情况只有 2 种：所有猴子都顺时针移动，或所有猴子都逆时针移动。

因此，答案为 2^n - 2。由于 n 最大为 10^9，需要使用快速幂（模重复平方法）计算 2^n mod (10^9+7)，注意处理结果为负数时加模。

## Solution

[SourceCode](./solution.js)
