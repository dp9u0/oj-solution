# [LCP 76] 魔法棋盘

## Description


```md
https://leetcode.cn/problems/1ybDKD/description/
* algorithms
* Hard (39.70%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '3\n3\n["..R","..B","?R?"]'
在大小为 `n * m` 的棋盘中，有两种不同的棋子：黑色，红色。当两颗颜色不同的棋子同时满足以下两种情况时，将会产生魔法共鸣：
- 两颗异色棋子在同一行或者同一列
- 两颗异色棋子之间恰好只有一颗棋子
> 注：异色棋子之间可以有空位
由于棋盘上被施加了魔法禁制，棋盘上的部分格子变成问号。`chessboard[i][j]` 表示棋盘第 `i` 行 `j` 列的状态：
- 若为 `.` ，表示当前格子确定为空
- 若为 `B` ，表示当前格子确定为 黑棋
- 若为 `R` ，表示当前格子确定为 红棋
- 若为 `?` ，表示当前格子待定
现在，探险家小扣的任务是确定所有问号位置的状态（留空/放黑棋/放红棋），使最终的棋盘上，任意两颗棋子间都 **无法** 产生共鸣。请返回可以满足上述条件的放置方案数量。
**示例1：**
> 输入：`n = 3, m = 3, chessboard = ["..R","..B","?R?"]`
>
> 输出：`5`
>
> 解释：给定的棋盘如图：
>![image.png](https://pic.leetcode.cn/1681714583-unbRox-image.png){:height=150px}
> 所有符合题意的最终局面如图：
>![image.png](https://pic.leetcode.cn/1681714596-beaOHK-image.png){:height=150px}
**示例2：**
> 输入：`n = 3, m = 3, chessboard = ["?R?","B?B","?R?"]`
>
> 输出：`105`
**提示：**
- `n == chessboard.length`
- `m == chessboard[i].length`
- `1 <= n*m <= 30`
- `chessboard` 中仅包含 `"."、"B"、"R"、"?"`

```

## Solution

[SourceCode](./solution.js)

## English Translation

**LCP 76. Magic Chessboard**

An `n * m` board has black (`B`) and red (`R`) pieces. Two differently-colored pieces *resonate* when they lie in the same row or column AND there is **exactly one** piece (either color) between them — empty cells between are allowed. Some cells are `?` (undetermined); assign each `?` one of empty / `B` / `R` so that **no** two pieces resonate. Return the number of valid assignments.

Constraints: `1 <= n*m <= 30`; cells are `"."`, `"B"`, `"R"`, `"?"`.

## Approach

Reformulate the constraint: within a row (or column), look at the sequence of pieces ignoring empties — resonance happens exactly when two pieces two positions apart in that sequence differ in color. So **every row's and column's piece-color sequence must satisfy `c[k] = c[k+2]`** (period-2 alternation).

Since `n*m <= 30`, the shorter side is at most 5. Scan the board column by column along the longer side (transpose if needed) with a profile DP of width `w <= 5`:

- **Row state** per row (7 states): no piece yet / single piece (B or R) / colors of the last two pieces `(a, b)`; the next piece in that row must have color `a`.
- **Vertical state** for the column currently being filled (same 7 states, same rule).
- Transition table `T[7][3]` (choice = empty/B/R) covers both directions; illegal placements yield `-1`.

State encoding: `7^w` row states × `7` vertical states ≤ `7^6 = 117649`; each cell has ≤ 3 choices, `n*m ≤ 30` cells → about 10M operations. The vertical state resets when a column completes. Counts stay below `3^30 < 2^53`, exact in JS numbers (no modulus needed).

Verified against brute-force enumeration of all `3^(#?)` fillings on the two examples and many random small boards.

Time: `O(n*m · 7^(w+1))`, Space: `O(7^(w+1))`.
