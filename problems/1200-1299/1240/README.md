# [1240] Tiling a Rectangle with the Fewest Squares

## Description

[LeetCode Problem Description](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/description/)

* algorithms
* Hard (54.90%)
* Likes:    725
* Dislikes: 582
* Testcase Example:  '2\n3'

```md
Given a rectangle of size n x m, return the minimum number of integer-sided squares that tile the rectangle.

Example 1:


Input: n = 2, m = 3
Output: 3
Explanation: 3 squares are necessary to cover the rectangle.
2 (squares of 1x1)
1 (square of 2x2)
Example 2:


Input: n = 5, m = 8
Output: 5

Example 3:


Input: n = 11, m = 13
Output: 6


Constraints:

1 <= n, m <= 13


```

## 翻译

给定 n×m 矩形，返回用正方形（整数边长）铺满该矩形所需的最少正方形数量。

## 解题思路

回溯 + 贪心剪枝。用高度数组 h[j] 表示每列已填充的高度。每次找到最低位置的列，从该位置尝试放置从大到小的正方形。当计数超过当前最优解时剪枝。n,m ≤ 13，搜索空间可控。

## Solution

[SourceCode](./solution.js)
