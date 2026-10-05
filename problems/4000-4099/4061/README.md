# [4061] 皇后到达目标格子的最少移动步数

## Description


```md
https://leetcode.cn/problems/minimum-queen-moves-to-reach-target/description/
* algorithms
* Easy (59.68%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[8,1]\n[1,8]'
一个 8 x 8 的空棋盘，其行和列的下标从 1 开始。
给你一个数组 source = [sr, sc] 表示 皇后 的初始位置，以及一个数组 target = [tr, tc] 表示目标位置。
在一步移动中，皇后可以在棋盘范围内，沿着单条 行 、 列 或 对角线 移动一个或多个方格。
返回皇后移动到 恰好 落在 target 位置所需的 最小 移动次数。

示例 1：
输入： source = [8,1], target = [1,8]
输出： 1
解释：
单次对角线移动即可让皇后直接从 (8, 1) 移动到 (1, 8)。
示例 2：
输入： source = [4,2], target = [1,3]
输出： 2
解释：
​​​​​​​
皇后先从 (4, 2) 移动到 (4, 3)，然后从 (4, 3) 移动到 (1, 3)，共用 2 步移动到达目标位置。
示例 3：
输入： source = [1,1], target = [1,1]
输出： 0
解释：
皇后已经处于目标位置，因此不需要任何移动。

提示：​​​​​​​
source == [sr, sc]
target == [tr, tc]
1 <= sr, sc, tr, tc <= 8
Hint 1: First check whether source and target are the same square.
Hint 2: Otherwise, one move is sufficient if the squares share a row, column, or diagonal. Any other target can be reached in two moves.

```

## Description (English)

You are given an empty 8 x 8 chessboard with rows and columns indexed from 1.

You are given an array `source = [sr, sc]` representing the queen's initial position and an array `target = [tr, tc]` representing the target position.

In one move, the queen can move one or more squares along a single row, column, or diagonal, staying on the board.

Return the minimum number of moves needed for the queen to land exactly on `target`.

Example 1:
Input: source = [8,1], target = [1,8]
Output: 1
Explanation: A single diagonal move takes the queen directly from (8,1) to (1,8).

Example 2:
Input: source = [4,2], target = [1,3]
Output: 2
Explanation: Move from (4,2) to (4,3), then from (4,3) to (1,3).

Example 3:
Input: source = [1,1], target = [1,1]
Output: 0
Explanation: The queen is already on the target square.

Constraints:
source == [sr, sc], target == [tr, tc]
1 <= sr, sc, tr, tc <= 8

## 思路

分类讨论：

- 起点与终点重合：`0` 步。
- 同行（`sr == tr`）、同列（`sc == tc`）或同对角线（`|sr - tr| == |sc - tc|`）：皇后一步直达，`1` 步。
- 其余情况：`2` 步。先沿列从 `(sr, sc)` 移到 `(tr, sc)`，再沿行移到 `(tr, tc)`。此时两点不重合且不同行不同列不同对角线，中间格 `(tr, sc)` 合法且不等于终点，两步必达。

复杂度：时间 `O(1)`，空间 `O(1)`。

## Solution

[SourceCode](./solution.js)
