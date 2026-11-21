# [2184] 建造坚实的砖墙的方法数

## Description


```md
https://leetcode.cn/problems/number-of-ways-to-build-sturdy-brick-wall/description/
* algorithms
* Medium (53.53%)
* Likes:    11
* Dislikes: -
* Testcase Example:  '2\n3\n[1,2]'
给你两个整数 height 与width ，表示你要建造的砖墙的高和宽。再给你一个下标从 0 开始的数组 bricks ，其中第 i 块砖的高度是 1 ，宽度为 bricks[i] 。每种砖的数量都是 无限 的，并且砖 不可以 进行旋转。
墙的每一行必须正好 width 单位长。为了让墙体 坚实 ，除了在首尾的位置，相邻的行砖缝 不能 在同一个位置。
请你返回建造坚实的砖墙的方法数，由于答案可能很大，需要对 109 + 7 取余 。

示例 1：
输入：height = 2, width = 3, bricks = [1,2]
输出：2
解释：前两图中的两种方法是建造一座坚实砖墙的唯二的方法。注意，第三幅图所展示的不是坚实的砖墙，因为相邻的行在中间的连接点位置相同。
示例 2：
输入：height = 1, width = 1, bricks = [5]
输出：0
解释：无法建造符合题目要求的砖墙，因为仅有的砖的长度比墙还要长。

提示：
1 <= height <= 100
1 <= width <= 10
1 <= bricks.length <= 10
1 <= bricks[i] <= 10
bricks 中所有数字 互不相同
Hint 1: A row of bricks can be represented uniquely by the points where two bricks are joined together.
Hint 2: For a given row of bricks, how many configurations of bricks could you have put below this row such that the wall is sturdy?
Hint 3: Use dynamic programming to store the number of possible sturdy walls with a given height and configuration of bricks on the top row.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Build a wall of the given `height` and `width`. Bricks are 1 tall with widths from `bricks` (unlimited supply, no rotation). Every row must total exactly `width`; the wall is sturdy when adjacent rows share no internal brick joint. Count walls modulo 1e9 + 7.

Example 1:
Input: height = 2, width = 3, bricks = [1,2]
Output: 2

Example 2:
Input: height = 1, width = 1, bricks = [5]
Output: 0

Constraints: 1 <= height <= 100, 1 <= width <= 10, 1 <= bricks.length <= 10, all bricks distinct, 1 <= bricks[i] <= 10.

## Approach

A row is uniquely determined by its internal joint positions, so enumerate every row as a bitmask over width-1 joints (DFS composition, at most 2^9 rows). Then DP over the height: dp[mask] = number of sturdy walls whose top row has joints `mask`; extending by a row `mask2` is allowed iff `mask & mask2 == 0`. Multiply the transition `height` times and sum over all final masks.

Rows <= 512, height <= 100 -> about 2.6e7 operations.
