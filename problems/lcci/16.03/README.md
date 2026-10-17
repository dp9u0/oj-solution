# [面试题 16.03] 交点

## Description


```md
https://leetcode.cn/problems/intersection-lcci/description/
* lcci
* Hard (44.71%)
* Likes:    90
* Dislikes: -
* Testcase Example:  '[0,0]\n[0,1]\n[1,0]\n[1,1]'
给定两条线段（表示为起点start = {X1, Y1}和终点end = {X2, Y2}），如果它们有交点，请计算其交点，没有交点则返回空值。
要求浮点型误差不超过10^-6。若有多个交点（线段重叠）则返回 X 值最小的点，X 坐标相同则返回 Y 值最小的点。

示例 1：
输入：
line1 = {0, 0}, {1, 0}
line2 = {1, 1}, {0, -1}
输出： {0.5, 0}
示例 2：
输入：
line1 = {0, 0}, {3, 3}
line2 = {1, 1}, {2, 2}
输出： {1, 1}
示例 3：
输入：
line1 = {0, 0}, {1, 1}
line2 = {1, 0}, {2, 1}
输出： {}，两条线段没有交点

提示：
坐标绝对值不会超过 2^7
输入的坐标均是有效的二维坐标
Hint 1: 所有的线都会相交吗？什么决定两条线是否相交？
Hint 2: 无限长的线几乎总会相交，除非它们相互平行。平行线也仍然有可能“相交”——如果它们是同一条线。这对线段来说意味着什么？
Hint 3: 我们怎样才能找到两条线的交点。如果两条线相交，那么交点必须与它们的“无限”延伸处于同一点。这两条线之间是交点吗？
Hint 4: 仔细考虑如何处理线段具有相同斜率和与y轴相交的情况。

```

## Description (English)

Given two line segments (start = {X1, Y1}, end = {X2, Y2}), compute their intersection point, or return an empty value if none. Float error must not exceed 10^-6. If there are multiple intersection points (overlapping segments), return the point with the smallest X; ties broken by smallest Y.

Example 1:
line1 = {0,0},{1,0}; line2 = {1,1},{0,-1} → {0.5, 0}

Example 2:
line1 = {0,0},{3,3}; line2 = {1,1},{2,2} → [1,1] (overlap)

Note: absolute coordinate values ≤ 2^7; inputs are valid 2D coordinates.

## 思路

坐标为整数且 ≤ 2⁷，全程用**精确整数叉积/点积**参数求解，避免浮点判定误差：

1. denom = cross(d1, d2) ≠ 0：t = cross(s2−s1, d2)/denom、u = cross(s2−s1, d1)/denom，均落在 [0,1] 内则交于 start1 + t·d1（整系数还原，无误差）。
2. denom = 0：共线（cross(s2−s1, d1) = 0）时把两条线段端点投影到 d1 的参数轴，求重叠区间 [lo, hi]；重叠则候选点为区间两端对应的坐标，按 (X, Y) 字典序取最小。不共线即无交点。

## Solution

[SourceCode](./solution.js)
