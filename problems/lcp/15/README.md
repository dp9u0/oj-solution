# [LCP 15] 游乐园的迷宫

## Description


```md
https://leetcode.cn/problems/you-le-yuan-de-mi-gong/description/
* algorithms
* Hard (61.93%)
* Likes:    25
* Dislikes: -
* Testcase Example:  '[[1,1],[1,4],[3,2],[2,1]]\n"LL"'
小王来到了游乐园，她玩的第一个项目是模拟推销员。有一个二维平面地图，其中散布着 N 个推销点，编号 0 到 N-1，不存在三点共线的情况。每两点之间有一条直线相连。游戏没有规定起点和终点，但限定了每次转角的方向。首先，小王需要先选择两个点分别作为起点和终点，然后从起点开始访问剩余 N-2 个点恰好一次并回到终点。访问的顺序需要满足一串给定的长度为 N-2 由 L 和 R 组成的字符串 direction，表示从起点出发之后在每个顶点上转角的方向。根据这个提示，小王希望你能够帮她找到一个可行的遍历顺序，输出顺序下标（若有多个方案，输出任意一种）。可以证明这样的遍历顺序一定是存在的。
（上图：A->B->C 右转； 下图：D->E->F 左转）
示例 1：
输入：points = [[1,1],[1,4],[3,2],[2,1]], direction = "LL"
输出：[0,2,1,3]
解释：[0,2,1,3] 是符合"LL"的方案之一。在 [0,2,1,3] 方案中，0->2->1 是左转方向， 2->1->3 也是左转方向
示例 2：
输入：points = [[1,3],[2,4],[3,3],[2,1]], direction = "LR"
输出：[0,3,1,2]
解释：[0,3,1,2] 是符合"LR"的方案之一。在 [0,3,1,2] 方案中，0->3->1 是左转方向， 3->1->2 是右转方向
限制：
3 <= points.length <= 1000 且 points[i].length == 2
1 <= points[i][0],points[i][1] <= 10000
direction.length == points.length - 2
direction 只包含 "L","R"

```

## Solution

[SourceCode](./solution.js)

## English Translation

**LCP 15. Amusement Park Maze**

Xiao Wang plays a "traveling salesman" game on a 2D map with `N` sales points numbered `0` to `N-1`, no three of which are collinear. Every pair of points is connected by a straight line.

The game does not fix the start and end points, but constrains the turn direction at every corner. First pick two points as start and end, then walk from the start, visiting each of the remaining `N-2` points exactly once, and finish at the end point. The visiting order must satisfy a given string `direction` of length `N-2` consisting of `L` and `R`, describing the turn direction at each vertex along the way (after leaving the start). Output a valid visiting order (any one). A solution is guaranteed to exist.

Example 1: `points = [[1,1],[1,4],[3,2],[2,1]], direction = "LL"` → `[0,2,1,3]` (turns `0→2→1` and `2→1→3` are both left).

Example 2: `points = [[1,3],[2,4],[3,3],[2,1]], direction = "LR"` → `[0,3,1,2]`.

Constraints: `3 <= points.length <= 1000`, `1 <= coords <= 10000`, `direction.length == points.length - 2`.

## Approach

Greedy + gift wrapping (Jarvis-style extreme selection).

Key identity: the turn at vertex `v` equals the side of directed line `(prev → v)` that the next point `w` lies on — `cross(v - prev, w - v) = cross(v - prev, w - prev)`. So if ALL not-yet-visited points lie strictly on the required side of `(prev → v)`, then ANY next point realizes the required turn at `v`.

Greedy: start at `v0` = bottom-most point (leftmost on tie); all other points lie in the half-plane above it (angular window `[0°, 180°)` through `v0`). For each character `direction[t]` (the turn required at the vertex being chosen):

- `'L'`: pick `w` = angular minimum around `cur` — the point such that every other remaining point is strictly LEFT of `(cur → w)`.
- `'R'`: pick `w` = angular maximum — every other remaining point strictly RIGHT of `(cur → w)`.

This is one gift-wrapping step: a single scan replacing the candidate when `cross(w - cur, p - cur)` has the matching sign works because the invariant keeps all remaining points inside an open half-plane through `cur` (angle differences always in `(-180°, 180°)`, so cross products are a valid angular comparator; no three collinear ⇒ no zero crosses).

The choice simultaneously guarantees the turn at `cur` (previous character, by the invariant) and re-establishes the invariant for the next step. The last remaining point becomes the end.

Time: O(N²), Space: O(N).
