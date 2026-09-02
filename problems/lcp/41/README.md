# [LCP 41] 黑白翻转棋

## Description


```md
https://leetcode.cn/problems/fHi6rV/description/
* algorithms
* Medium (68.01%)
* Likes:    84
* Dislikes: -
* Testcase Example:  '["....X.","....X.","XOOO..","......","......"]'
在 `n*m` 大小的棋盘中，有黑白两种棋子，黑棋记作字母 `"X"`, 白棋记作字母 `"O"`，空余位置记作 `"."`。当落下的棋子与其他相同颜色的棋子在行、列或对角线完全包围（中间不存在空白位置）另一种颜色的棋子，则可以翻转这些棋子的颜色。
![1.gif](https://pic.leetcode.cn/1630396029-eTgzpN-6da662e67368466a96d203f67bb6e793.gif){:height=170px}![2.gif](https://pic.leetcode.cn/1630396240-nMvdcc-8e4261afe9f60e05a4f740694b439b6b.gif){:height=170px}![3.gif](https://pic.leetcode.cn/1630396291-kEtzLL-6fcb682daeecb5c3f56eb88b23c81d33.gif){:height=170px}
「力扣挑战赛」黑白翻转棋项目中，将提供给选手一个未形成可翻转棋子的棋盘残局，其状态记作 `chessboard`。若下一步可放置一枚黑棋，请问选手最多能翻转多少枚白棋。
**注意：**
- 若翻转白棋成黑棋后，棋盘上仍存在可以翻转的白棋，将可以 **继续** 翻转白棋
- 输入数据保证初始棋盘状态无可以翻转的棋子且存在空余位置
**示例 1：**
> 输入：`chessboard = ["....X.","....X.","XOOO..","......","......"]`
>
> 输出：`3`
>
> 解释：
> 可以选择下在 `[2,4]` 处，能够翻转白方三枚棋子。
**示例 2：**
> 输入：`chessboard = [".X.",".O.","XO."]`
>
> 输出：`2`
>
> 解释：
> 可以选择下在 `[2,2]` 处，能够翻转白方两枚棋子。
![2126c1d21b1b9a9924c639d449cc6e65.gif](https://pic.leetcode.cn/1626683255-OBtBud-2126c1d21b1b9a9924c639d449cc6e65.gif)
**示例 3：**
> 输入：`chessboard = [".......",".......",".......","X......",".O.....","..O....","....OOX"]`
>
> 输出：`4`
>
> 解释：
> 可以选择下在 `[6,3]` 处，能够翻转白方四枚棋子。
![803f2f04098b6174397d6c696f54d709.gif](https://pic.leetcode.cn/1630393770-Puyked-803f2f04098b6174397d6c696f54d709.gif)
**提示：**
- `1 <= chessboard.length, chessboard[i].length <= 8`
- `chessboard[i]` 仅包含 `"."、"O"` 和 `"X"`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

In an `n*m` board there are black pieces `"X"`, white pieces `"O"`, and empty cells `"."`. When a piece just placed together with another piece of the **same color** completely encloses (in a row, column, or diagonal, with no empty cell in between) some pieces of the other color, those enclosed pieces flip color.

In the "黑白翻转棋" challenge, a board state is given that currently has **no flipable pieces** and has empty cells. If the player may place one black piece, what is the **maximum number** of white pieces they can flip?

**Note:** After flipping white to black, if more white pieces become flipable, the player may **continue flipping**.

**Example 1:** `["....X.","....X.","XOOO..","......","......"]` → `3` (place at [2,4])
**Example 2:** `[".X.",".O.","XO."]` → `2`
**Example 3:** 7×7 board → `4`

**Constraints:** `1 <= rows, cols <= 8`, cells are `.`, `O`, `X`.

---

## Approach

Simulate placing a black piece at **every empty cell** and count the cascade.

For a given placement:
- A black piece at cell `p` flips an `O`-run along a direction `d` if, scanning from `p` along `d`, we pass only `O`s and the next piece is `X` (run flanked by black at both ends).
- Flipped cells become `X` and may themselves enable further flips — use a **queue** (BFS): whenever a cell becomes black, inspect all 8 directions and flip any newly-enclosed runs, pushing those cells.

Track cells to a black-set so a piece isn't double counted. Return the max flips over all starting cells.

Complexity: `O(cells² · 8)` per candidate, grid ≤ 64 cells → trivial.
