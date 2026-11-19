# [1183] 矩阵中 1 的最大数量

## Description


```md
https://leetcode.cn/problems/maximum-number-of-ones/description/
* algorithms
* Hard (62.37%)
* Likes:    51
* Dislikes: -
* Testcase Example:  '3\n3\n2\n1'
现在有一个尺寸为 width * height 的矩阵 M，矩阵中的每个单元格的值不是 0 就是 1。
而且矩阵 M 中每个大小为 sideLength * sideLength 的 正方形 子阵中，1 的数量不得超过 maxOnes。
请你设计一个算法，计算矩阵中最多可以有多少个 1。

示例 1：
输入：width = 3, height = 3, sideLength = 2, maxOnes = 1
输出：4
解释：
题目要求：在一个 3*3 的矩阵中，每一个 2*2 的子阵中的 1 的数目不超过 1 个。
最好的解决方案中，矩阵 M 里最多可以有 4 个 1，如下所示：
[1,0,1]
[0,0,0]
[1,0,1]
示例 2：
输入：width = 3, height = 3, sideLength = 2, maxOnes = 2
输出：6
解释：
[1,0,1]
[1,0,1]
[1,0,1]

提示：
1 <= width, height <= 100
1 <= sideLength <= width, height
0 <= maxOnes <= sideLength * sideLength
Hint 1: Think of a greedy mathematical solution.
Hint 2: Say you choose to set some cell (i, j) to 1, all cells (x, y) such that i % sideLength == x % sideLength and j % sideLength == y % sideLength can also be set to 1 without increasing the max number of ones in a sub-matrix.
Hint 3: In one move, choose to set all the cells with some modulus (i % sideLength, j % sideLength) to 1.
Hint 4: Choose the cells with max frequency.

```

## Solution

[SourceCode](./solution.js)

## Translation

width × height binary matrix; every sideLength × sideLength sub-square (any position) must contain ≤ maxOnes ones. Maximize total ones.

- Example: 3×3, side=2, maxOnes=1 → `4` (corners)

## Approach

**同余类 + 频次贪心**。任意 side² 滑动正方形恰好包含每个同余类 (r mod s, c mod s) 各一个格子——同余类整类填 1 不增加任何正方形内的 1 数。于是问题化为:从 s² 个同余类中选 ≤ maxOnes 个填满。类 (r,c) 的格子数 = ⌈(height−r)/s⌉ × ⌈(width−c)/s⌉,排序取前 maxOnes 个求和。
