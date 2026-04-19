# [2857] Count Pairs of Points With Distance k

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/description/)

* algorithms
* Medium (32.86%)
* Likes:    283
* Dislikes: 45
* Testcase Example:  '[[1,2],[4,2],[1,3],[5,2]]\n5'

```md
You are given a 2D integer array coordinates and an integer k, where coordinates[i] = [xi, yi] are the coordinates of the ith point in a 2D plane.
We define the distance between two points (x1, y1) and (x2, y2) as (x1 XOR x2) + (y1 XOR y2) where XOR is the bitwise XOR operation.
Return the number of pairs (i, j) such that i < j and the distance between points i and j is equal to k.

Example 1:

Input: coordinates = [[1,2],[4,2],[1,3],[5,2]], k = 5
Output: 2
Explanation: We can choose the following pairs:
- (0,1): Because we have (1 XOR 4) + (2 XOR 2) = 5.
- (2,3): Because we have (1 XOR 5) + (3 XOR 2) = 5.

Example 2:

Input: coordinates = [[1,3],[1,3],[1,3],[1,3],[1,3]], k = 0
Output: 10
Explanation: Any two chosen pairs will have a distance of 0. There are 10 ways to choose two pairs.


Constraints:

2 <= coordinates.length <= 50000
0 <= xi, yi <= 106
0 <= k <= 100


```

## 中文翻译

给定坐标数组 coordinates 和整数 k，两点距离定义为 (x1 XOR x2) + (y1 XOR y2)。统计距离等于 k 的点对数 (i < j)。

## 解题思路

枚举 XOR 分配：(x1^x2) + (y1^y2) = k，由于 k <= 100，枚举 kx 从 0 到 k，则 ky = k - kx。对每个点 (x, y)，需要的配对点是 (x^kx, y^ky)。用 Map 统计已出现的点，遍历时查 Map 即可。

## Solution

[SourceCode](./solution.js)
