# [LCP 42] 玩具套圈

## Description


```md
https://leetcode.cn/problems/vFjcfV/description/
* algorithms
* Hard (30.36%)
* Likes:    18
* Dislikes: -
* Testcase Example:  '[[1,3,2],[4,3,1]]\n[[1,0],[3,3],[0,0],[3,4]]\n4'
「力扣挑战赛」场地外，小力组织了一个套玩具的游戏。所有的玩具摆在平地上，`toys[i]` 以 `[xi,yi,ri]` 的形式记录了第 `i` 个玩具的坐标 `(xi,yi)` 和半径 `ri`。小扣试玩了一下，他扔了若干个半径均为 `r` 的圈，`circles[j]` 记录了第 `j` 个圈的坐标 `(xj,yj)`。套圈的规则如下：
- 若一个玩具被某个圈完整覆盖了（即玩具的任意部分均在圈内或者圈上），则该玩具被套中。
- 若一个玩具被多个圈同时套中，最终仅计算为套中一个玩具
请帮助小扣计算，他成功套中了多少玩具。
**注意：**
- 输入数据保证任意两个玩具的圆心不会重合，但玩具之间可能存在重叠。
**示例 1：**
> 输入：`toys = [[3,3,1],[3,2,1]], circles = [[4,3]], r = 2`
>
> 输出：`1`
>
> 解释： 如图所示，仅套中一个玩具
![image.png](https://pic.leetcode.cn/1629194140-ydKiGF-image.png)
**示例 2：**
> 输入：`toys = [[1,3,2],[4,3,1],[7,1,2]], circles = [[1,0],[3,3]], r = 4`
>
> 输出：`2`
>
> 解释： 如图所示，套中两个玩具
![image.png](https://pic.leetcode.cn/1629194157-RiOAuy-image.png){:width="400px"}
**提示：**
- `1 <= toys.length <= 10^4`
- `0 <= toys[i][0], toys[i][1] <= 10^9`
- `1 <= circles.length <= 10^4`
- `0 <= circles[i][0], circles[i][1] <= 10^9`
- `1 <= toys[i][2], r <= 10`

```

## English Description

At a ring-toss game, all toys lie on flat ground. `toys[i] = [xi, yi, ri]` records the toy's center `(xi, yi)` and radius `ri`. Xiao Kou throws several rings that all have radius `r`; `circles[j] = [xj, yj]` records the center of the `j`-th ring. The rule:

- A toy is "caught" if some ring **fully covers** it (every part of the toy lies inside or on the ring).
- If a toy is caught by multiple rings, it still counts as one caught toy.

Return how many toys Xiao Kou successfully catches.

**Note:** no two toy centers coincide, but toys may overlap.

**Example 1:**
> Input: `toys = [[3,3,1],[3,2,1]], circles = [[4,3]], r = 2`
>
> Output: `1`

**Example 2:**
> Input: `toys = [[1,3,2],[4,3,1],[7,1,2]], circles = [[1,0],[3,3]], r = 4`
>
> Output: `2`

**Constraints:**
- `1 <= toys.length <= 10^4`
- `0 <= toys[i][0], toys[i][1] <= 10^9`
- `1 <= circles.length <= 10^4`
- `0 <= circles[i][0], circles[i][1] <= 10^9`
- `1 <= toys[i][2], r <= 10`

## Approach

A ring with center `(xj, yj)` and radius `r` fully covers a toy disk with center `(xi, yi)` and radius `ri` iff the **center distance is at most `r - ri`**. In particular, if `ri > r` the toy can never be fully covered. So the test for one ring/toy pair is:

```
dist((xj,yj),(xi,yi)) <= r - ri   (only meaningful when r >= ri)
```

A naive double loop is O(toys · circles) = up to 10⁸, too slow.

**Spatial hash (uniform grid).** The decisive bound is tiny: if a ring covers a toy, the two centers are within `r - ri <= 9` of each other. Since `r, ri <= 10`, every coverable toy center lies within distance `<= 9` of the covering ring's center. We bucket each toy into a grid cell of side `CELL = 20` keyed by `floor(x/CELL), floor(y/CELL)`. For each ring center, we only need to inspect toys in its own cell and the **8 neighboring cells** — any toy farther away (2+ cells) is already at distance `> 20` from the center and cannot be covered.

For every ring we check those ≤ 9 buckets, test each candidate toy with the squared-distance inequality (avoiding floating-point sqrt), and mark it covered (dedup via a boolean array). Because `r - ri <= 9 < 20`, checking only ±1 cell around the ring never misses a coverable toy.

**Complexity:** each toy appears in exactly one bucket; each ring inspects at most the toys in its 9 surrounding cells, so roughly O(toys + rings · (avg toys per cell)). Coordinates up to 10⁹ are hashed as strings so no giant arrays are needed.

## Solution

[SourceCode](./solution.js)
