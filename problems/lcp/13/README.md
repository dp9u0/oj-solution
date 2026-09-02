# [LCP 13] 寻宝

## Description


```md
https://leetcode.cn/problems/xun-bao/description/
* algorithms
* Hard (58.09%)
* Likes:    189
* Dislikes: -
* Testcase Example:  '["S#O", "M..", "M.T"]'
我们得到了一副藏宝图，藏宝图显示，在一个迷宫中存在着未被世人发现的宝藏。
迷宫是一个二维矩阵，用一个字符串数组表示。它标识了唯一的入口（用 'S' 表示），和唯一的宝藏地点（用 'T' 表示）。但是，宝藏被一些隐蔽的机关保护了起来。在地图上有若干个机关点（用 'M' 表示），只有所有机关均被触发，才可以拿到宝藏。
要保持机关的触发，需要把一个重石放在上面。迷宫中有若干个石堆（用 'O' 表示），每个石堆都有无限个足够触发机关的重石。但是由于石头太重，我们一次只能搬一个石头到指定地点。
迷宫中同样有一些墙壁（用 '#' 表示），我们不能走入墙壁。剩余的都是可随意通行的点（用 '.' 表示）。石堆、机关、起点和终点（无论是否能拿到宝藏）也是可以通行的。
我们每步可以选择向上/向下/向左/向右移动一格，并且不能移出迷宫。搬起石头和放下石头不算步数。那么，从起点开始，我们最少需要多少步才能最后拿到宝藏呢？如果无法拿到宝藏，返回 -1 。
示例 1：
输入： ["S#O", "M..", "M.T"]
输出：16
解释：最优路线为： S->O, cost = 4, 去搬石头 O->第二行的M, cost = 3, M机关触发 第二行的M->O, cost = 3, 我们需要继续回去 O 搬石头。 O->第三行的M, cost = 4, 此时所有机关均触发 第三行的M->T, cost = 2，去T点拿宝藏。 总步数为16。
示例 2：
输入： ["S#O", "M.#", "M.T"]
输出：-1
解释：我们无法搬到石头触发机关
示例 3：
输入： ["S#O", "M.T", "M.."]
输出：17
解释：注意终点也是可以通行的。
限制：
1 <= maze.length <= 100
1 <= maze[i].length <= 100
maze[i].length == maze[j].length
S 和 T 有且只有一个
0 <= M的数量 <= 16
0 <= O的数量 <= 40，题目保证当迷宫中存在 M 时，一定存在至少一个 O 。

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

We obtained a treasure map showing an undiscovered treasure hidden in a maze. The maze is a 2D matrix described by an array of strings. It marks the unique entrance (`'S'`) and the unique treasure location (`'T'`). However, the treasure is protected by hidden mechanisms. There are several mechanism points (`'M'`) on the map; only when **all** mechanisms are triggered can the treasure be taken.

To keep a mechanism triggered, a heavy stone must be placed on it. There are several stone piles (`'O'`) in the maze, each with unlimited heavy stones sufficient to trigger the mechanisms. But the stones are too heavy — we can carry only one stone to a designated spot at a time.

The maze also has walls (`'#'`) we cannot walk into. All remaining cells (`.`) are freely passable. Stone piles, mechanisms, start and treasure points are also passable.

Each step we may move one cell up/down/left/right and may not leave the maze. Picking up and putting down a stone costs no steps. Starting from `'S'`, what is the **minimum number of steps** to finally obtain the treasure? If it cannot be obtained, return `-1`.

**Example 1:** Input `["S#O","M..","M.T"]` → Output `16`
**Example 2:** Input `["S#O","M.#","M.T"]` → Output `-1` (cannot carry a stone to trigger the mechanism)
**Example 3:** Input `["S#O","M.T","M.."]` → Output `17` (note the treasure point is passable too)

**Constraints:**
- `1 <= maze.length <= 100`, `1 <= maze[i].length <= 100`, all rows same length
- Exactly one `S` and one `T`
- `0 <= number of M <= 16`
- `0 <= number of O <= 40`; when an `M` exists there is guaranteed at least one `O`.

---

## Approach

Each mechanism must be triggered by carrying a fresh stone from some pile. Since piles hold infinite stones and all `O`s are interchangeable, a mechanism visit is: go to some `O`, grab a stone, carry it to the mechanism.

1. **All-pairs distances** via BFS from `S`, from `T`, and from each mechanism `Mᵢ` (≤ 16 BFS). Walls `#` block movement; `S/T/M/O/.` are passable.
2. **Start**: `start[i] = min_O dist(S,O) + dist(O,Mᵢ)` — cost to trigger the first mechanism.
3. **Transition**: `D[i][j] = min_O dist(Mᵢ,O) + dist(O,Mⱼ)` — from just-triggered `Mᵢ` to next `Mⱼ`.
4. **End**: `end[i] = dist(Mᵢ, T)`.
5. **Bitmask DP** over the ≤ 16 mechanisms (TSP-like): `dp[mask][last]` = min steps having triggered exactly the mechanisms in `mask`, currently at `last`. Base `dp[1<<i][i] = start[i]`; transition append `j`: `dp[mask|1<<j][j] = min(dp[mask][last] + D[last][j])`. Answer `min_last dp[full][last] + end[last]`.
6. If `M == 0`, answer is just `dist(S,T)`. Unreachable / untriggerable configurations → `-1`.

Complexity: `O((M+2)·R·C + 2^M·M²)` — grid ≤ 10⁴ cells, M ≤ 16 → easily feasible.
