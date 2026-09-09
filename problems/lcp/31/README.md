# [LCP 31] 变换的迷宫

## Description


```md
https://leetcode.cn/problems/Db3wC1/description/
* algorithms
* Hard (31.09%)
* Likes:    39
* Dislikes: -
* Testcase Example:  '[[".#.","#.."],["...",".#."],[".##",".#."],["..#",".#."]]'
某解密游戏中，有一个 N\*M 的迷宫，迷宫地形会随时间变化而改变，迷宫出口一直位于 `(n-1,m-1)` 位置。迷宫变化规律记录于 `maze` 中，`maze[i]` 表示 `i` 时刻迷宫的地形状态，`"."` 表示可通行空地，`"#"` 表示陷阱。
地形图初始状态记作 `maze[0]`，此时小力位于起点 `(0,0)`。此后每一时刻可选择往上、下、左、右其一方向走一步，或者停留在原地。
小力背包有以下两个魔法卷轴（卷轴使用一次后消失）：
+ 临时消除术：将指定位置在下一个时刻变为空地；
+ 永久消除术：将指定位置永久变为空地。
请判断在迷宫变化结束前（含最后时刻），小力能否在不经过任意陷阱的情况下到达迷宫出口呢？
**注意： 输入数据保证起点和终点在所有时刻均为空地。**
**示例 1：**
>输入：`maze = [[".#.","#.."],["...",".#."],[".##",".#."],["..#",".#."]]`
>
>输出：`true`
>
>解释：
![maze.gif](https://pic.leetcode.cn/1615892239-SCIjyf-maze.gif)
**示例 2：**
>输入：`maze = [[".#.","..."],["...","..."]]`
>
>输出：`false`
>
>解释：由于时间不够，小力无法到达终点逃出迷宫。
**示例 3：**
>输入：`maze = [["...","...","..."],[".##","###","##."],[".##","###","##."],[".##","###","##."],[".##","###","##."],[".##","###","##."],[".##","###","##."]]`
>
>输出：`false`
>
>解释：由于道路不通，小力无法到达终点逃出迷宫。
**提示：**
- `1 <= maze.length <= 100`
- `1 <= maze[i].length, maze[i][j].length <= 50`
- `maze[i][j]` 仅包含 `"."`、`"#"`

```

## Solution

[SourceCode](./solution.js)

## English Translation

**LCP 31. Transforming Maze**

In a decryption game there is an `N * M` maze whose terrain changes over time; the exit is always at `(n-1, m-1)`. The changes are recorded in `maze`, where `maze[i]` is the terrain at time `i` (`.` walkable, `#` trap). The player starts at `(0,0)` at time 0 (the terrain of `maze[0]`). Each moment they move one step up/down/left/right or stay in place.

The backpack has two one-use magic scrolls:

- **Temporary elimination**: makes a chosen position empty at the next moment only.
- **Permanent elimination**: makes a chosen position empty forever.

Determine whether the player can reach the exit before the maze stops changing (inclusive of the last moment) without ever stepping on a trap. Start and exit are guaranteed empty at all times.

Constraints: `1 <= maze.length <= 100`, `1 <= maze[i].length, maze[i][j].length <= 50`.

## Approach

**Temp scroll** = one free arrival: from a legitimately-occupied cell at time `t`, step (or stay) onto any adjacent cell at `t+1` regardless of terrain. Afterwards only a used-flag is needed — no extra state, since passability at later times is re-checked normally.

**Perm scroll — pruning insight**: the cleared cell `p` is walkable at *every* time, and staying is always allowed, so any plan that leaves `p` and later returns can be cut to "wait on `p`" — therefore some optimal plan occupies `p` in one contiguous interval: `prefix → (enter/park on p) → wait → suffix departure`. The plan decomposes into:

1. prefix: reach some neighbor (or the cell itself) of `p` at time `t1-1` with scrolls ⊆ {temp};
2. wait on `p` (perm-open) until `t2 ≥ t1`;
3. suffix: from `(t2, p)` reach the exit with scrolls ⊆ {temp}, where the temp is used in at most one of prefix/suffix.

So compute four BFS layers over `(t, cell)`: forward `F0/F1` (temp unused/used) and backward `B0/B1` plus "transition-only" variants `B0*/B1*` (suffix sets that don't require the starting cell to be raw-open, since presence at `p` is provided by the perm; likewise `B1`'s temp-arrival branch uses `B0*`). The answer is true iff:

- `F0/F1` reaches the exit directly at some time, or
- some cell `p` has `min{t1 : F?(t1-1) touches N(p)∪{p}} ≤ max{t2 : B?*(t2, p)}` for one of the scroll combos `(F0,B0*)`, `(F1,B0*)`, `(F0,B1*)`.

This pruning argument is validated against an exact BFS over `(t, pos, tempUsed, permCell)` on randomized small mazes.

Time: `O(T · n · m)`, Space: `O(T · n · m)`.
