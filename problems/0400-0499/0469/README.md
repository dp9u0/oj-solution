# [469] 凸多边形

## Description


```md
https://leetcode.cn/problems/convex-polygon/description/
* algorithms
* Medium (43.63%)
* Likes:    43
* Dislikes: -
* Testcase Example:  '[[0,0],[0,5],[5,5],[5,0]]'
给定 X-Y 平面上的一组点 points ，其中 points[i] = [xi, yi] 。这些点按顺序连成一个多边形。
如果该多边形为 凸 多边形（凸多边形的定义）则返回 true ，否则返回 false 。
你可以假设由给定点构成的多边形总是一个 简单的多边形（简单多边形的定义）。换句话说，我们要保证每个顶点处恰好是两条边的汇合点，并且这些边 互不相交 。

示例 1：
输入: points = [[0,0],[0,5],[5,5],[5,0]]
输出: true
示例 2：
输入: points = [[0,0],[0,10],[10,10],[10,0],[5,5]]
输出: false

提示:
3 <= points.length <= 104
points[i].length == 2
-104 <= xi, yi <= 104
所有点都 不同

```

## Solution

[SourceCode](./solution.js)

## Translation

Given points in order forming a simple polygon, return whether it is convex.

- Example 1: [[0,0],[0,5],[5,5],[5,0]] → `true`
- Example 2: [[0,0],[0,10],[10,10],[10,0],[5,5]] → `false`

Constraints: 3–10^4 points, all distinct; polygon guaranteed simple.

## Approach

**叉积符号一致性**。对每个连续三点 (a,b,c) 算 cross = (b-a)×(c-b):

- 凸多边形 ⟺ 所有非零叉积同号(全程左转或全程右转)。
- 叉积为 0(三点共线)允许存在,不影响凸性,跳过。

环形遍历 n 个三元组,O(n),整数运算无浮点误差。
