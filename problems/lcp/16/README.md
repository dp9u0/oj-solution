# [LCP 16] 游乐园的游览计划

## Description


```md
https://leetcode.cn/problems/you-le-yuan-de-you-lan-ji-hua/description/
* algorithms
* Hard (38.05%)
* Likes:    32
* Dislikes: -
* Testcase Example:  '[[0,1],[1,2],[0,2]]\n[1,2,3]'
又到了一年一度的春游时间，小吴计划去游乐场游玩 1 天，游乐场总共有 N 个游乐项目，编号从 0 到 N-1。小吴给每个游乐项目定义了一个非负整数值 value[i] 表示自己的喜爱值。两个游乐项目之间会有双向路径相连，整个游乐场总共有 M 条双向路径，保存在二维数组 edges中。 小吴计划选择一个游乐项目 A 作为这一天游玩的重点项目。上午小吴准备游玩重点项目 A 以及与项目 A 相邻的两个项目 B、C （项目A、B与C要求是不同的项目，且项目B与项目C要求相邻），并返回 A ，即存在一条 A-B-C-A 的路径。 下午，小吴决定再游玩重点项目 A以及与A相邻的两个项目 B'、C'，（项目A、B'与C'要求是不同的项目，且项目B'与项目C'要求相邻），并返回 A ，即存在一条 A-B'-C'-A 的路径。下午游玩项目 B'、C' 可与上午游玩项目B、C存在重复项目。 小吴希望提前安排好游玩路径，使得喜爱值之和最大。请你返回满足游玩路径选取条件的最大喜爱值之和，如果没有这样的路径，返回 0。 注意：一天中重复游玩同一个项目并不能重复增加喜爱值了。例如：上下午游玩路径分别是 A-B-C-A与A-C-D-A 那么只能获得 value[A] + value[B] + value[C] + value[D] 的总和。
示例 1：
输入：edges = [[0,1],[1,2],[0,2]], value = [1,2,3]
输出：6
解释：喜爱值之和最高的方案之一是 0->1->2->0 与 0->2->1->0 。重复游玩同一点不重复计入喜爱值，返回1+2+3=6
示例 2：
输入：edges = [[0,2],[2,1]], value = [1,2,5]
输出：0
解释：无满足要求的游玩路径，返回 0
示例 3：
输入：edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,3],[2,4],[2,5],[3,4],[3,5],[4,5]], value = [7,8,6,8,9,7]
输出：39
解释：喜爱值之和最高的方案之一是 3->0->1->3 与 3->4->5->3 。喜爱值最高为 7+8+8+9+7=39
限制：
3 <= value.length <= 10000
1 <= edges.length <= 10000
0 <= edges[i][0],edges[i][1] < value.length
0 <= value[i] <= 10000
edges中没有重复的边
edges[i][0] != edges[i][1]

```

## English Description

Xiao Wu plans to spend a day at an amusement park with N attractions (numbered 0..N-1), connected by M undirected paths in `edges`. Xiao Wu gives each attraction a non-negative `value[i]`.

Xiao Wu chooses one **key attraction `A`**. In the **morning** he visits A and two of A's neighbors B, C (A, B, C all distinct, and B adjacent to C) and returns to A — i.e. a walk A-B-C-A (a triangle through A). In the **afternoon** he again visits A and two adjacent neighbors B', C' — another triangle A-B'-C'-A. The afternoon pair may overlap the morning pair. Revisiting an attraction adds its value only once.

Find the **maximum total value** obtainable from choosing A and the two triangles, or return 0 if no valid tour exists.

**Example 1:** `edges = [[0,1],[1,2],[0,2]], value = [1,2,3]` → `6` (both halves traverse the same triangle 0-1-2-0, sum = 1+2+3).

**Example 2:** `edges = [[0,2],[2,1]], value = [1,2,5]` → `0` (no triangle).

**Example 3:** 6-node graph, `value = [7,8,6,8,9,7]` → `39` (triangles 3-0-1-3 and 3-4-5-3 share only apex 3; union 3+0+1+4+5 = 8+7+8+9+7).

**Constraints:** `3 <= value.length <= 10^4`, `1 <= edges.length <= 10^4`, `0 <= value[i] <= 10^4`, no duplicate edges/self-loops.

## Approach

A valid (morning + afternoon) tour anchored at `A` is exactly **one or two triangles through `A`** (choosing the same triangle twice is allowed). If `{A,x,y}` is a triangle, its contribution (excluding `value[A]`, which is added once) is `value[x]+value[y]`. For apex `A`, the neighbors `x,y` of every triangle form an edge of the subgraph induced by `N(A)`; call the weight of such an "apex-edge" `(x,y)` the pair-sum `value[x]+value[y]`.

For a fixed apex A the best union of distinct attractions is the best of:

1. **One triangle** — take the largest apex-edge weight: `value[x]+value[y]` (3 distinct nodes incl. A).
2. **Two triangles sharing exactly one neighbor** — a "V" `{x,p,q}` (apex-edges `x-p` and `x-q`): distinct neighbors `x,p,q`, value `(value[x]+value[p]) + (value[x]+value[q]) - value[x]`. For each possible shared neighbor `x`, this is `top1(x)+top2(x)-value[x]` where `top1/top2` are the two heaviest apex-edges incident to `x`.
3. **Two vertex-disjoint apex-edges** (4 distinct neighbors): sum of the two weights. Pick the two heaviest vertex-disjoint apex-edges by sorting and pairing each edge with its heaviest disjoint partner.

The answer is `max over A of (value[A] + best of the above)`, or 0 if no triangle exists at all.

**Triangle enumeration.** Naively listing, for each A, all adjacent neighbor-pairs costs O(Σ deg(A)²) — too slow on a star (a center adjacent to ~10⁴ vertices). Instead enumerate triangles with the classic **degree-orientation method**: order vertices by `(degree, id)` and orient every edge from the smaller to the larger endpoint; for every directed path `a→b→c`, if `a-c` is also an edge, `{a,b,c}` is a triangle, and it is discovered exactly once (at its smallest-rank vertex). Each triangle then registers 3 apex-edge records (one per apex). With M ≤ 10⁴ this is efficient (~O(M·√M)).

Per apex we keep its list of apex-edge records `[x, y, weight]` and compute the three candidates above; sorting each list by weight lets the disjoint partner scan stop at the first (heaviest) disjoint edge. The greedy top-two-incident per neighbor covers case 2 optimally; correctness of case 3 relies on the sorted-first-disjoint partner being the maximum disjoint partner for each edge, so the global best pair is found.

**Complexity:** O(M·√M + Σ_A |triAt[A]| log |triAt[A]|) time and O(M·√M) worst-case record memory.

## Solution

[SourceCode](./solution.js)
