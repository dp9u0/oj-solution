# [699] Falling Squares

## Description

[LeetCode Problem Description](https://leetcode.com/problems/falling-squares/description/)

* algorithms
* Hard (47.65%)
* Likes:    682
* Dislikes: 76
* Testcase Example:  '[[1,2],[2,3],[6,1]]'

```md
There are several squares being dropped onto the X-axis of a 2D plane.
You are given a 2D integer array positions where positions[i] = [lefti, sideLengthi] represents the ith square with a side length of sideLengthi that is dropped with its left edge aligned with X-coordinate lefti.
Each square is dropped one at a time from a height above any landed squares. It then falls downward (negative Y direction) until it either lands on the top side of another square or on the X-axis. A square brushing the left/right side of another square does not count as landing on it. Once it lands, it freezes in place and cannot be moved.
After each square is dropped, you must record the height of the current tallest stack of squares.
Return an integer array ans where ans[i] represents the height described above after dropping the ith square.

Example 1:


Input: positions = [[1,2],[2,3],[6,1]]
Output: [2,5,5]
Explanation:
After the first drop, the tallest stack is square 1 with a height of 2.
After the second drop, the tallest stack is squares 1 and 2 with a height of 5.
After the third drop, the tallest stack is still squares 1 and 2 with a height of 5.
Thus, we return an answer of [2, 5, 5].

Example 2:

Input: positions = [[100,100],[200,100]]
Output: [100,100]
Explanation:
After the first drop, the tallest stack is square 1 with a height of 100.
After the second drop, the tallest stack is either square 1 or square 2, both with heights of 100.
Thus, we return an answer of [100, 100].
Note that square 2 only brushes the right side of square 1, which does not count as landing on it.


Constraints:

1 <= positions.length <= 1000
1 <= lefti <= 108
1 <= sideLengthi <= 106


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 positions 数组，positions[i] = [left_i, sideLength_i] 表示第 i 个正方形从 left_i 位置掉落，边长为 sideLength_i。正方形会落在已有的正方形顶部或 X 轴上（侧面接触不算）。返回每步操作后当前最高堆叠的高度数组。

## 解题思路

维护所有已落下正方形的区间 (left, right, height)。对每个新正方形 [l, l+size)，遍历所有已有区间找到与 [l, r) 重叠的区间中最大高度 maxH，新正方形的高度 = maxH + size。O(n^2) 对 n<=1000 足够。
