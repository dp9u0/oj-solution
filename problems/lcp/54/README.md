# [LCP 54] 夺回据点

## Description


```md
https://leetcode.cn/problems/s5kipK/description/
* algorithms
* Hard (45.56%)
* Likes:    14
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5,6]\n[[0,1],[0,2],[1,3],[2,3],[1,2],[2,4],[2,5]]'
欢迎各位勇者来到力扣城，本次试炼主题为「夺回据点」。
魔物了占领若干据点，这些据点被若干条道路相连接，`roads[i] = [x, y]` 表示编号 `x`、`y` 的两个据点通过一条道路连接。
现在勇者要将按照以下原则将这些据点逐一夺回：
- 在开始的时候，勇者可以花费资源先夺回一些据点，初始夺回第 `j` 个据点所需消耗的资源数量为 `cost[j]`
- 接下来，勇者在不消耗资源情况下，每次可以夺回**一个**和「已夺回据点」相连接的魔物据点，并对其进行夺回
> 注：为了防止魔物暴动，勇者在每一次夺回据点后（包括花费资源夺回据点后），需要保证剩余的所有魔物据点之间是相连通的（不经过「已夺回据点」）。
请返回勇者夺回所有据点需要消耗的最少资源数量。
**注意：**
- 输入保证初始所有据点都是连通的，且不存在重边和自环
**示例 1：**
>输入：
>`cost = [1,2,3,4,5,6]`
>`roads = [[0,1],[0,2],[1,3],[2,3],[1,2],[2,4],[2,5]]`
>
>输出：`6`
>
>解释：
>勇者消耗资源 `6` 夺回据点 `0` 和 `4`，魔物据点 `1、2、3、5` 相连通；
>第一次夺回据点 `1`，魔物据点 `2、3、5` 相连通；
>第二次夺回据点 `3`，魔物据点 `2、5` 相连通；
>第三次夺回据点 `2`，剩余魔物据点 `5`；
>第四次夺回据点 `5`，无剩余魔物据点；
>因此最少需要消耗资源为 `6`，可占领所有据点。
![image.png](https://pic.leetcode.cn/1648706944-KJstUN-image.png){:height=170px}
**示例 2：**
>输入：
>`cost = [3,2,1,4]`
>`roads = [[0,2],[2,3],[3,1]]`
>
>输出：`2`
>
>解释：
>勇者消耗资源 `2` 夺回据点 `1`，魔物据点 `0、2、3` 相连通；
>第一次夺回据点 `3`，魔物据点 `2、0` 相连通；
>第二次夺回据点 `2`，剩余魔物据点 `0`；
>第三次夺回据点 `0`，无剩余魔物据点；
>因此最少需要消耗资源为 `2`，可占领所有据点。
![image.png](https://pic.leetcode.cn/1648707186-LJRwzU-image.png){:height=60px}
**提示：**
- `1 <= roads.length, cost.length <= 10^5`
- `0 <= roads[i][0], roads[i][1] < cost.length`
- `1 <= cost[i] <= 10^9`

```

## Solution

[SourceCode](./solution.js)

## English Translation

**LCP 54. Reclaim Strongholds**

Strongholds connected by roads (`roads[i] = [x, y]`) are occupied by monsters. The hero reclaims them one by one:

- Initially the hero may pay to reclaim some strongholds (`cost[j]` for stronghold `j`).
- Afterwards, for free, the hero may repeatedly reclaim ONE monster stronghold adjacent to an already-reclaimed one.
- After every reclaim (including the initial paid ones), all remaining monster strongholds must stay connected (not passing through reclaimed ones).

The initial graph is connected, with no multi-edges or self-loops. Return the minimum total cost to reclaim everything.

Constraints: `1 <= roads.length, cost.length <= 10^5`, `1 <= cost[i] <= 10^9`.

## Approach

Decompose the graph into biconnected components (blocks) and articulation points; consider the block-cut tree.

- A non-cut vertex has all its incident edges inside its (unique) block. In a **leaf block** `B` with cut vertex `c`, the set `X = B \ {c}` attaches to the rest of the graph only through `c`.
- The *first* vertex of `X` to be reclaimed needs an already-reclaimed neighbor inside `B ∪ {c}`. It cannot be `c` while the rest of the graph still stands (that would disconnect `X` from it), so every leaf block's first reclaimed vertex must be **paid** — *unless* the block is dismantled last: once everything outside `B` is gone, `c` may be removed (leaving `B \ {c}`, connected since a block minus one vertex stays connected), and then `X` peels freely in st-order. Exactly one leaf block can play this "last" role.
- Non-leaf blocks (≥ 2 cut vertices) are dismantled for free from both sides and contribute nothing.

Therefore:

- single-block graph: answer `= min(cost)` (a seed is still needed to start);
- otherwise: answer `= Σ over leaf blocks of min cost over non-cut vertices`, minus the **largest** such minimum (exempt the block dismantled last).

Verified against an exact subset + DFS-peel brute force on random small connected graphs.

Time: `O(V + E)` (iterative Tarjan), Space: `O(V + E)`.
