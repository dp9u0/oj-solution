# [1739] Building Boxes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/building-boxes/description/)

* algorithms
* Hard (52.33%)
* Likes:    314
* Dislikes: 49
* Testcase Example:  '3'

```md
You have a cubic storeroom where the width, length, and height of the room are all equal to n units. You are asked to place n boxes in this room where each box is a cube of unit side length. There are however some rules to placing the boxes:

You can place the boxes anywhere on the floor.
If box x is placed on top of the box y, then each side of the four vertical sides of the box y must either be adjacent to another box or to a wall.

Given an integer n, return the minimum possible number of boxes touching the floor.

Example 1:


Input: n = 3
Output: 3
Explanation: The figure above is for the placement of the three boxes.
These boxes are placed in the corner of the room, where the corner is on the left side.

Example 2:


Input: n = 4
Output: 3
Explanation: The figure above is for the placement of the four boxes.
These boxes are placed in the corner of the room, where the corner is on the left side.

Example 3:


Input: n = 10
Output: 6
Explanation: The figure above is for the placement of the ten boxes.
These boxes are placed in the corner of the room, where the corner is on the back side.

Constraints:

1 <= n <= 109


```

## 翻译

给定 n 个1×1×1的盒子放入 n×n×n 的房间，盒子可堆叠但需满足：若 x 放在 y 上方，则 y 的四面都必须靠墙或靠其他盒子。求最少多少个盒子接触地面。

## 解题思路

关键观察：最优策略是沿角落堆叠。设地面有 m 个盒子，可以堆叠的最大盒子数构成三角锥：第1层1个，第2层3个，第3层6个...第k层 k(k+1)/2 个。总盒子数 = sum_{i=1}^{k} i(i+1)/2 = k(k+1)(k+2)/6。

先用二分找到最大的 k 使得 k(k+1)(k+2)/6 <= n，此时地面盒子数 = k(k+1)/2。剩余 extra = n - k(k+1)(k+2)/6 个盒子需要额外放在地面上，用三角数找到最小额外地面盒子数。

O(log n)。

## Solution

[SourceCode](./solution.js)
