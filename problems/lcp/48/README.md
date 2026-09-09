# [LCP 48] 无限棋局

## Description


```md
https://leetcode.cn/problems/fsa7oZ/description/
* algorithms
* Hard (29.20%)
* Likes:    12
* Dislikes: -
* Testcase Example:  '[[0,0,1],[1,1,1],[2,2,0]]'
小力正在通过残局练习来备战「力扣挑战赛」中的「五子棋」项目，他想请你能帮他预测当前残局的输赢情况。棋盘中的棋子分布信息记录于二维数组 `pieces` 中，其中 `pieces[i] = [x,y,color]` 表示第 `i` 枚棋子的横坐标为 `x`，纵坐标为 `y`，棋子颜色为 `color`(`0` 表示黑棋，`1` 表示白棋)。假如黑棋先行，并且黑棋和白棋都按最优策略落子，请你求出当前棋局在三步（按 **黑、白、黑** 的落子顺序）之内的输赢情况（三步之内先构成同行、列或对角线连续同颜色的至少 5 颗即为获胜）：
- 黑棋胜, 请返回 `"Black"`
- 白棋胜, 请返回 `"White"`
- 仍无胜者, 请返回 `"None"`
**注意：**
- 和传统的五子棋项目不同，「力扣挑战赛」中的「五子棋」项目 **不存在边界限制**，即可在 **任意位置** 落子；
- 黑棋和白棋均按 3 步内的输赢情况进行最优策略的选择
- 测试数据保证所给棋局目前无胜者；
- 测试数据保证不会存在坐标一样的棋子。
**示例 1：**
> 输入：
> `pieces = [[0,0,1],[1,1,1],[2,2,0]]`
>
> 输出：`"None"`
>
> 解释：无论黑、白棋以何种方式落子，三步以内都不会产生胜者。
**示例 2：**
> 输入：
> `pieces = [[1,2,1],[1,4,1],[1,5,1],[2,1,0],[2,3,0],[2,4,0],[3,2,1],[3,4,0],[4,2,1],[5,2,1]]`
>
> 输出：`"Black"`
>
> 解释：三步之内黑棋必胜，以下是一种可能的落子情况：
>![902b87df29998b1c181146c8fdb3a4b6.gif](https://pic.leetcode.cn/1629800639-KabOfY-902b87df29998b1c181146c8fdb3a4b6.gif){:width="300px"}
**提示：**
- `0 <= pieces.length <= 1000`
- `pieces[i].length = 3`
- `-10^9 <= pieces[i][0], pieces[i][1] <=10^9`
- `0 <= pieces[i][2] <=1`

```

## Solution

[SourceCode](./solution.js)

## English Translation

**LCP 48. Gobang on an Infinite Board**

Pieces are given as `pieces[i] = [x, y, color]` (`0` black, `1` white) on an unbounded board (coordinates up to `1e9` in absolute value), no duplicates, and no one has won yet. Black moves first; predict the outcome within three moves (**Black, White, Black**) with both sides playing optimally. The first side to form at least 5 consecutive same-colored stones in a row, column, or diagonal wins. Return `"Black"`, `"White"`, or `"None"`.

Constraints: `0 <= pieces.length <= 1000`.

## Approach

Call a *window* a length-5 axis/diagonal segment with exactly 4 stones of one color and 1 empty cell (the *gap*); a gap cell is where that color wins by playing one stone. Enumerate windows by scanning, for every stone and direction, the 5 windows containing it (hash set lookups). Let `GB` / `GW` be the gap sets for black / white on the current board.

Case analysis of the 3-ply game:

1. `GB ≠ ∅` → Black wins on move 1 → `"Black"`.
2. `|GW| ≥ 2` (two distinct gap cells): a single black stone can block windows only by occupying their gap, so Black cannot block both threats → White wins on move 2 → `"White"`.
3. `|GW| = 1`: Black is forced to play the gap `g` (otherwise White wins on move 2). After that, White cannot win and its move 2 can only block windows by taking their gap. Black wins on move 3 iff the board with an extra black stone at `g` has ≥ 2 distinct black gaps (`gapsAround`) → `"Black"`, else `"None"`. (All new black windows must contain `g` since the original board has none.)
4. `GW = ∅`: Black's first move is free; White can only block. Black wins iff some candidate cell (empty cells within 4 along an axis of a black stone) creates ≥ 2 distinct black gaps → `"Black"`, else `"None"`.

A white stone can kill a black window only by occupying its single gap cell (all other window cells are black stones), which is why "two distinct gaps" is unblockable.

Time: `O(P)` window scan plus `O(P · 33)` candidate checks (`P = pieces.length`), Space: `O(P)`. Cross-checked with an exhaustive 3-ply game-tree search on small random boards.
