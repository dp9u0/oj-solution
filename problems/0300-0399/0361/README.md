# [361] 轰炸敌人

## Description


```md
https://leetcode.cn/problems/bomb-enemy/description/
* algorithms
* Medium (60.16%)
* Likes:    123
* Dislikes: -
* Testcase Example:  '[["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]'
给你一个大小为 m x n 的矩阵 grid ，其中每个单元格都放置有一个字符：
'W' 表示一堵墙
'E' 表示一个敌人
'0'（数字 0）表示一个空位
返回你使用 一颗炸弹 可以击杀的最大敌人数目。你只能把炸弹放在一个空位里。
由于炸弹的威力不足以穿透墙体，炸弹只能击杀同一行和同一列没被墙体挡住的敌人。

示例 1：
输入：grid = [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
输出：3
示例 2：
输入：grid = [["W","W","W"],["0","0","0"],["E","E","E"]]
输出：1

提示：
m == grid.length
n == grid[i].length
1 <= m, n <= 500
grid[i][j] 可以是 'W'、'E' 或 '0'

```

## Solution

[SourceCode](./solution.js)

## Translation

Given an `m x n` grid where each cell holds a character: `'W'` = wall, `'E'` = enemy, `'0'` = empty. Return the maximum number of enemies one bomb can kill. The bomb can only be placed in an empty cell and kills enemies in the same row and column without being blocked by a wall.

- Example 1: `[["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]` → `3` (place at (1,1): 1 left + 1 above + 1 below)
- Example 2: `[["W","W","W"],["0","0","0"],["E","E","E"]]` → `1`

Constraints: `1 <= m, n <= 500`; each cell is `'W'`, `'E'` or `'0'`.

## Approach

暴力是 O(mn(m+n))。利用**段内计数复用**降到 O(mn):

- 逐行从左到右扫,`cnt` 记录当前墙左侧段内敌人数,空位处累加;再从右到左扫一遍累加右侧敌人 → `rowHit[i][j]` = 该行段内可见敌人总数。
- 逐列同样先自上而下、再自下而上扫 → `colSum[i][j]` = 该列段内可见敌人总数。
- 答案 = 所有 `'0'` 格的 `rowHit + colSum` 最大值(炸弹只能放空位,敌人格的计数虽被写入但不会被取用)。

时间 O(4mn),空间 O(mn)。
