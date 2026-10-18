# [面试题 16.13] 平分正方形

## Description


```md
https://leetcode.cn/problems/bisect-squares-lcci/description/
* lcci
* Medium (45.15%)
* Likes:    22
* Dislikes: -
* Testcase Example:  '[-1,1,3]\n[0,0,5]'
给定两个正方形及一个二维平面。请找出将这两个正方形分割成两半的一条直线。假设正方形顶边和底边与 x 轴平行。
每个正方形的数据square包含3个数值，正方形的左下顶点坐标[X,Y] = [square[0],square[1]]，以及正方形的边长square[2]。所求直线穿过两个正方形会形成4个交点，请返回4个交点形成线段的两端点坐标（两个端点即为4个交点中距离最远的2个点，这2个点所连成的线段一定会穿过另外2个交点）。2个端点坐标[X1,Y1]和[X2,Y2]的返回格式为{X1,Y1,X2,Y2}，要求若X1 != X2，需保证X1 < X2，否则需保证Y1 <= Y2。
若同时有多条直线满足要求，则选择斜率最大的一条计算并返回（与Y轴平行的直线视为斜率无穷大）。
示例：
输入：
square1 = {-1, -1, 2}
square2 = {0, -1, 2}
输出： {-1,0,2,0}
解释： 直线 y = 0 能将两个正方形同时分为等面积的两部分，返回的两线段端点为[-1,0]和[2,0]
提示：
square.length == 3
square[2] > 0
Hint 1: 画一个正方形和一些把它切成两半的线。这些线位于哪里？
Hint 2: 任何把正方形切成两半的直线都穿过正方形的中心。那你怎么才能找到一条把两个正方形切成两半的线呢？
Hint 3: 要将两个正方形切成两半，这条线必须穿过这两个正方形的中心。
Hint 4: 给定一条直线（斜率和y轴截距），你能找到它与另一条直线的交点吗?

```

## Description (English)

Given two squares on a 2D plane (top and bottom edges parallel to the x-axis), find a line that bisects both squares. Each square is given as [X, Y, side] with [X, Y] the bottom-left corner. The line forms 4 intersection points with the two squares; return the two farthest points as {X1, Y1, X2, Y2}, with X1 < X2, or X1 == X2 and Y1 <= Y2. If multiple lines satisfy the requirement, choose the one with the maximum slope (a vertical line counts as infinite slope).

Example:
square1 = {-1,-1,2}, square2 = {0,-1,2} → {-1, 0, 2, 0} (line y = 0)

Note: square.length == 3; square[2] > 0.

## 思路

平分正方形的直线必过其中心 → 直线即两中心连线（中心重合时有无穷多条，按规则选斜率无穷大的竖直线）。沿方向 d = c2 − c1 把直线参数化 P = c1 + t·d，对每个正方形求与 x/y 区间相交的 t 区间，两个区间的最小 t 与最大 t 即"距离最远的两个交点"，最后按 X1 < X2（或 Y1 ≤ Y2）排序输出。

## Solution

[SourceCode](./solution.js)
