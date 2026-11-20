# [1924] 安装栅栏 II

## Description


```md
https://leetcode.cn/problems/erect-the-fence-ii/description/
* algorithms
* Hard (44.21%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]'
给你一个二维整数数组 trees，其中 trees[i] = [xi, yi] 表示花园中第 i 棵树的坐标。
你需要用最少的原材料给花园安装一个 圆形 的栅栏，使花园中所有的树都在被 围在栅栏内部（在栅栏边界上的树也算在内）。
正式地说，你需要求出栅栏的圆心坐标 (x,y) 和半径 r，使花园中所有的树都在圆的内部或边界上，并且让半径 r 最小。
请用一个长度为 3 的数组 [x,y,r] 来返回圆心坐标和半径。如果答案与正确答案的误差不超过 10-5，则该答案将被视为正确答案通过。

示例 1:
输入: trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
输出: [2.00000,2.00000,2.00000]
解释: 栅栏的圆心应当在 (2, 2) 处，半径为 2。
示例 2:
输入: trees = [[1,2],[2,2],[4,2]]
输出: [2.50000,2.00000,1.50000]
解释: 栅栏的圆心应当在 (2.5, 2) 处，半径为 1.5。

提示:
1 <= trees.length <= 3000
trees[i].length == 2
0 <= xi, yi <= 3000
Hint 1: First, we need to note that this is a classic problem given n points you need to find the minimum enclosing circle to bind them
Hint 2: Second, we need to apply a well known algorithm called welzls algorithm to help us find the minimum enclosing circle

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a 2D integer array `trees` where `trees[i] = [xi, yi]` is the coordinate of the i-th tree, install a circular fence that encloses all trees (trees on the boundary count as enclosed) using minimal material.

Return the center `(x, y)` and radius `r` of the fence as `[x, y, r]`, minimizing `r`. An answer with error at most `10^-5` is accepted.

Example 1:
Input: trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
Output: [2.00000,2.00000,2.00000]

Example 2:
Input: trees = [[1,2],[2,2],[4,2]]
Output: [2.50000,2.00000,1.50000]

Constraints: 1 <= trees.length <= 3000, 0 <= xi, yi <= 3000.

## Approach

This is the minimum enclosing circle problem, solved with Welzl's randomized incremental algorithm (moving-disk form):

- Process points in random order; keep the current circle.
- If point p is outside, the new circle is centered at p with radius 0, then refined: any earlier point q outside forces the diameter circle of (p, q); any earlier point s outside that forces the circumcircle of (p, q, s).
- Expected time O(n) due to randomization (probability point i enters the outer refinement is ≤ 1/i, etc.).

The circumcircle comes from the linear system solved for the center. For a degenerate (near-collinear) triple the code falls back to the farthest-pair diameter circle. Inside tests use a small epsilon so boundary points don't trigger needless re-computation.
