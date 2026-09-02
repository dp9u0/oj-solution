# [LCP 36] 最多牌组数

## Description


```md
https://leetcode.cn/problems/Up5XYM/description/
* algorithms
* Hard (34.09%)
* Likes:    35
* Dislikes: -
* Testcase Example:  '[2,2,2,3,4]'
麻将的游戏规则中，共有两种方式凑成「一组牌」：
- 顺子：三张牌面数字连续的麻将，例如 [4,5,6]
- 刻子：三张牌面数字相同的麻将，例如 [10,10,10]
给定若干数字作为麻将牌的数值（记作一维数组 `tiles`），请返回所给 `tiles` 最多可组成的牌组数。
注意：凑成牌组时，每张牌仅能使用一次。
**示例 1：**
>输入：`tiles = [2,2,2,3,4]`
>
>输出：`1`
>
>解释：最多可以组合出 [2,2,2] 或者 [2,3,4] 其中一组牌。
**示例 2：**
>输入：`tiles = [2,2,2,3,4,1,3]`
>
>输出：`2`
>
>解释：最多可以组合出 [1,2,3] 与 [2,3,4] 两组牌。
**提示：**
- `1 <= tiles.length <= 10^5`
- `1 <= tiles[i] <= 10^9`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

In Mahjong rules there are two ways to form a "set of tiles":
- **Run (顺子):** three tiles with consecutive numbers, e.g. `[4,5,6]`
- **Triple (刻子):** three tiles with the same number, e.g. `[10,10,10]`

Given tile values as a 1D array `tiles`, return the **maximum number of sets** that can be formed from `tiles`. Each tile can be used once.

**Example 1:** `tiles = [2,2,2,3,4]` → `1` (either `[2,2,2]` or `[2,3,4]`)
**Example 2:** `tiles = [2,2,2,3,4,1,3]` → `2` (`[1,2,3]` and `[2,3,4]`)

**Constraints:** `1 <= tiles.length <= 10^5`, `1 <= tiles[i] <= 10^9`.

---

## Approach

Count tiles per value and process **contiguous value runs** independently (a run can't cross a gap).

Let `s[v]` = number of runs (straights) `(v, v+1, v+2)` opened at value `v`. Tiles of value `v` are consumed by straights `(v-2,v-1,v)`, `(v-1,v,v+1)`, `(v,v+1,v+2)`, i.e. `s[v]+s[v-1]+s[v-2]`, and the rest form triples: `floor((cnt[v] - s[v]-s[v-1]-s[v-2])/3)`. Constraint: this must be ≥ 0.

**Key lemma:** an optimal solution exists with `s[v] ∈ {0,1,2}` — if 3 identical straights are opened at `v`, replace them with 3 triples of `v` (same meld count, frees later tiles), never worse.

So DP per run with state `(s[v-1], s[v-2]) ∈ {0,1,2}²` (9 states), maximizing `Σ s[v] + Σ triples`. Append two virtual values of count 0 at the run end to force pending straights to zero.

Complexity: `O(distinct values · 9 · 3)`, easily fits 10^5.
