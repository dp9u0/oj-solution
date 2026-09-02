# [LCP 38] 守卫城堡

## Description


```md
https://leetcode.cn/problems/7rLGCR/description/
* algorithms
* Hard (58.06%)
* Likes:    14
* Dislikes: -
* Testcase Example:  '["S.C.P#P.", ".....#.S"]'
城堡守卫游戏的胜利条件为使恶魔无法从出生点到达城堡。游戏地图可视作 `2*N` 的方格图，记作字符串数组 `grid`，其中：
- `"."` 表示恶魔可随意通行的平地；
- `"#"` 表示恶魔不可通过的障碍物，玩家可通过在 **平地** 上设置障碍物，即将  `"."` 变为 `"#"` 以阻挡恶魔前进；
- `"S"` 表示恶魔出生点，将有大量的恶魔该点生成，恶魔可向上/向下/向左/向右移动，且无法移动至地图外；
- `"P"` 表示瞬移点，移动到 `"P"` 点的恶魔可被传送至任意一个 `"P"` 点，也可选择不传送；
- `"C"` 表示城堡。
然而在游戏中用于建造障碍物的金钱是有限的，请返回玩家最少需要放置几个障碍物才能获得胜利。若无论怎样放置障碍物均无法获胜，请返回 `-1`。
**注意：**
- 地图上可能有一个或多个出生点
- 地图上有且只有一个城堡
**示例 1**
>输入：`grid = ["S.C.P#P.", ".....#.S"]`
>
>输出：`3`
>
>解释：至少需要放置三个障碍物
![image.png](https://pic.leetcode.cn/1614828255-uuNdNJ-image.png)
**示例 2：**
>输入：`grid = ["SP#P..P#PC#.S", "..#P..P####.#"]`
>
>输出：`-1`
>
>解释：无论怎样修筑障碍物，均无法阻挡最左侧出生的恶魔到达城堡位置
![image.png](https://pic.leetcode.cn/1614828208-oFlpVs-image.png)
**示例 3：**
>输入：`grid = ["SP#.C.#PS", "P.#...#.P"]`
>
>输出：`0`
>
>解释：无需放置障碍物即可获得胜利
![image.png](https://pic.leetcode.cn/1614828242-oveClu-image.png)
**示例 4：**
>输入：`grid = ["CP.#.P.", "...S..S"]`
>
>输出：`4`
>
>解释：至少需要放置 4 个障碍物，示意图为放置方法之一
![image.png](https://pic.leetcode.cn/1614828218-sIAYkb-image.png)
**提示：**
- `grid.length == 2`
- `2 <= grid[0].length == grid[1].length <= 10^4`
- `grid[i][j]` 仅包含字符 `"."`、`"#"`、`"C"`、`"P"`、`"S"`

```

## English Description

In a castle-defense game you win if demons cannot reach the castle from their spawn point. The map is a `2×N` grid given as string array `grid`:
- `"."` = open ground (demons can walk),
- `"#"` = obstacle (impassable), and the player may build more obstacles by turning a `.` into `#`,
- `"S"` = demon spawn (demons spawn here and move up/down/left/right, never off-map),
- `"P"` = teleporter (a demon on `P` may teleport to any other `P`, or choose not to),
- `"C"` = the castle.

Money is limited: return the **minimum** number of obstacles (turning `.` into `#`) needed to win, or `-1` if impossible.

**Notes:** there may be multiple spawns; exactly one castle.

**Examples:** `["S.C.P#P.",".....#.S"]` → `3`; `["SP#P..P#PC#.S","..#P..P####.#"]` → `-1`; `["SP#.C.#PS","P.#...#.P"]` → `0`; `["CP.#.P.","...S..S"]` → `4`.

**Constraints:** 2 rows, `2 <= N <= 10^4`.

## Approach

We must separate every `S` from the unique `C` in the reachability graph (4-direction movement; `#` blocks; all `P` cells are fully connected through teleport). Turning a `.` into `#` "removes" that cell. This is a **minimum vertex cut**: pick the fewest `.` cells to delete so no `S`-to-`C` path remains.

**Flow formulation.** Model every non-`#` cell as a node that must be *paid* if removed: `.` cells cost 1, `S`/`C`/`P` cost ∞. Add a **hub** node; each `P` connects to the hub (both directions), which makes all `P`s mutually reachable. Standard node-splitting turns the vertex cut into an edge cut:

- split each cell `u` into `u_in → u_out` with capacity = cost (1 for `.`, big for others);
- for each orthogonal adjacency `u–v` add `u_out → v_in` and `v_out → u_in` (∞);
- super-source → every `S`'s `in` (∞); every `C`'s `out` → super-sink (∞);
- for teleporters: `P_out → hub` and `hub → P_in` (∞).

Then **max flow = min vertex cut = min walls**. If the min cut exceeds the total number of `.` cells (i.e., `S` and `C` are in the same component that uses no `.`), no finite walling can separate them → return `-1`.

**Dinic** is used for the max flow. Because augmenting paths in a 2×N grid can be very long (~10⁴ nodes), the DFS is implemented **iteratively** (explicit edge stack, dead-end marking) to avoid recursion-stack overflow. Every cell is split into two nodes, plus a hub — the graph has O(N) nodes/edges, so Dinic runs comfortably within limits.

**Complexity:** O(N) nodes/edges; Dinic's practical time on these unit/low-capacity graphs is near-linear.

## Solution

[SourceCode](./solution.js)
