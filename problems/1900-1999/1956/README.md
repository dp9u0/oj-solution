# [1956] 感染 K 种病毒所需的最短时间

## Description


```md
https://leetcode.cn/problems/minimum-time-for-k-virus-variants-to-spread/description/
* algorithms
* Hard (34.91%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '[[1,1],[6,1]]\n2'
在无限大的二维平面上有 n 种 不同 的病毒。给定二维数组 points ，第 i 项 points[i] = [xi, yi] 说明第 0 天有一种病毒在点 (xi, yi) 。注意初始状态下，可能有 多种 病毒在 同一点 上。
每天，被感染的点会把它感染的病毒传播到上、下、左、右四个邻居点。
现给定一个整数 k ，问 最少 需要多少天，方能找到一点感染 至少 k 种病毒？

示例 1：
输入：points = [[1,1],[6,1]], k = 2
输出：3
解释：在第 3 天，点 (3,1) 与 (4,1) 将感染所有 2 种病毒。
示例 2：
输入：points = [[3,3],[1,2],[9,2]], k = 2
输出：2
解释：在第 2 天, 点 (1,2), (1,3), (2,1), (2,2), (3,1) 和 (3,3) 将会感染前两种病毒。
示例 3：
输入：points = [[3,3],[1,2],[9,2]], k = 3
输出：4
解释：在第 4 天，点 (5,2) 会感染所有 3 种病毒。

提示：
n == points.length
2 <= n <= 50
points[i].length == 2
1 <= xi, yi <= 109
2 <= k <= n
Hint 1: n is very small, how can we use that?
Hint 2: What shape is the region when two viruses intersect?

```

## Solution

[SourceCode](./solution.js)

## English Translation

There are `n` distinct viruses on an infinite 2D plane. Given `points`, virus i starts at `(xi, yi)` on day 0 (multiple viruses may start at the same point). Each day, every infected point spreads its viruses to its 4 neighbors.

Given `k`, return the minimum number of days after which some point is infected by at least `k` virus variants.

Example 1:
Input: points = [[1,1],[6,1]], k = 2
Output: 3

Example 2:
Input: points = [[3,3],[1,2],[9,2]], k = 2
Output: 2

Example 3:
Input: points = [[3,3],[1,2],[9,2]], k = 3
Output: 4

Constraints: n == points.length, 2 <= n <= 50, 1 <= xi, yi <= 10^9, 2 <= k <= n.

## Approach

At day t a virus at (x, y) covers the L1 diamond `|px-x| + |py-y| <= t`. Rotate coordinates: `u = x + y`, `v = x - y`; then `|dx| + |dy| = max(|du|, |dv|)`, so each diamond becomes the axis-aligned square `[u-t, u+t] x [v-t, v+t]`.

Feasibility is monotone in t, so binary search the smallest day t whose maximum square-overlap depth reaches k.

Key extra constraint: infected points are integer lattice points, and `(U, V)` maps back to an integer `(x, y)` iff `U ≡ V (mod 2)`. So for each candidate `U` from square edges `{us[i]±t, ±1}` (the ±1 keeps both parities reachable inside any intersection range, whose lower end is an edge), collect the active squares' v-intervals clipped to integers of parity `U mod 2` and take the maximum overlap depth with an event sweep (`+1` at each interval's first in-parity integer, `-1` after its last).

Search range: the answer is at most the largest Chebyshev distance between any two points (<= 2 * 10^9). Total O(log C * n^2 log n).
