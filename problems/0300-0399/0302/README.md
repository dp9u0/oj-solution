# [302] 包含全部黑色像素的最小矩形

## Description


```md
https://leetcode.cn/problems/smallest-rectangle-enclosing-black-pixels/description/
* algorithms
* Hard (67.01%)
* Likes:    70
* Dislikes: -
* Testcase Example:  '[["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]]\n0\n2'
图片在计算机处理中往往是使用二维矩阵来表示的。
给你一个大小为 m x n 的二进制矩阵 image 表示一张黑白图片，0 代表白色像素，1 代表黑色像素。
黑色像素相互连接，也就是说，图片中只会有一片连在一块儿的黑色像素。像素点是水平或竖直方向连接的。
给你两个整数 x 和 y 表示某一个黑色像素的位置，请你找出包含全部黑色像素的最小矩形（与坐标轴对齐），并返回该矩形的面积。
你必须设计并实现一个时间复杂度低于 O(mn) 的算法来解决此问题。

示例 1：
输入：image = [["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], x = 0, y = 2
输出：6
示例 2：
输入：image = [["1"]], x = 0, y = 0
输出：1

提示：
m == image.length
n == image[i].length
1 <= m, n <= 100
image[i][j] 为 '0' 或 '1'
1 <= x < m
1 <= y < n
image[x][y] == '1'
image 中的黑色像素仅形成一个 组件

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a binary image (char '0'/'1') where all black pixels form ONE connected region, and one known black pixel (x, y), return the area of the smallest axis-aligned rectangle enclosing all black pixels.

**Example:**
image = [["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], (0,2) → 6

**Constraints:**
- 1 <= m, n <= 100? (practical; intended solution favors binary search over BFS)

## Approach

连通性保证黑色区域在行/列上连续覆盖 top..x、x..bottom 等区间 → 四个边界各自二分:
- top: [0, x] 内最小的"该行含黑"行
- bottom: [x, m-1] 内最大者;left/right 同理按列。
谓词检查 O(n) 或 O(m),每边界 log 次。

时间 O((m+n)·log),空间 O(1)。
