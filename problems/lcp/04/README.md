# [LCP 04] 覆盖

## Description


```md
https://leetcode.cn/problems/broken-board-dominoes/description/
* algorithms
* Hard (43.75%)
* Likes:    84
* Dislikes: -
* Testcase Example:  '2\n3\n[[1, 0], [1, 1]]'
你有一块棋盘，棋盘上有一些格子已经坏掉了。你还有无穷块大小为1 * 2的多米诺骨牌，你想把这些骨牌不重叠地覆盖在完好的格子上，请找出你最多能在棋盘上放多少块骨牌？这些骨牌可以横着或者竖着放。

输入：n, m代表棋盘的大小；broken是一个b * 2的二维数组，其中每个元素代表棋盘上每一个坏掉的格子的位置。
输出：一个整数，代表最多能在棋盘上放的骨牌数。

示例 1：
输入：n = 2, m = 3, broken = [[1, 0], [1, 1]]
输出：2
解释：我们最多可以放两块骨牌：[[0, 0], [0, 1]]以及[[0, 2], [1, 2]]。（见下图）

示例 2：
输入：n = 3, m = 3, broken = []
输出：4
解释：下图是其中一种可行的摆放方式

限制：
1 <= n <= 8
1 <= m <= 8
0 <= b <= n * m

```

## English Description

You have a board with some cells already broken. You have unlimited 1×2 dominoes and want to place them **non-overlapping** onto the intact cells. A domino may be placed horizontally or vertically. Find the maximum number of dominoes that can be placed.

**Input:** `n, m` are the board dimensions; `broken` is a `b × 2` array where each entry is the position of a broken cell.

**Example 1:** `n = 2, m = 3, broken = [[1,0],[1,1]]` → `2`
**Example 2:** `n = 3, m = 3, broken = []` → `4`

**Constraints:** `1 <= n <= 8`, `1 <= m <= 8`, `0 <= b <= n*m`.

## Approach

This is maximum **non-overlapping 1×2 tiling of intact cells**, i.e. maximum matching on a grid graph.

**Bipartite structure.** Color the board like a chessboard by cell parity `(r + c) mod 2`. Every domino covers exactly one "black" cell (even parity) and one adjacent "white" cell (odd parity). So a valid placement is a set of edges, each joining an intact black cell to an intact white cell, with no two edges sharing a cell — exactly a **matching** in the bipartite graph between intact black cells and intact white cells connected orthogonally (up/down/left/right). The maximum number of dominoes equals the maximum matching size.

**Algorithm.** Iterate over intact black cells; for each, run a DFS augmenting-path search (Kuhn's algorithm) over intact white neighbors. Maintain `match[whiteCell]` = the black cell currently matched to that white cell. If an augmenting path is found, the matching grows by one. This runs in O(V·E) worst case, trivially fast for a ≤ 8×8 board.

**Complexity:** O(V · E) with V, E ≤ ~64 — well within limits.

## Solution

[SourceCode](./solution.js)
