# [LCP 58] 积木拼接

## Description


```md
https://leetcode.cn/problems/De4qBB/description/
* algorithms
* Hard (38.91%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '[["000","110","000"],["110","011","000"],["110","011","110"],["000","010","111"],["011","111","011"],["011","010","000"]]'
欢迎各位勇者来到力扣城，本次试炼主题为「积木拼接」。
勇者面前有 `6` 片积木（厚度均为 1），每片积木的形状记录于二维字符串数组 `shapes` 中，`shapes[i]` 表示第 `i` 片积木，其中 `1` 表示积木对应位置无空缺，`0` 表示积木对应位置有空缺。
例如 `["010","111","010"]` 对应积木形状为
![image.png](https://pic.leetcode.cn/1616125620-nXMCxX-image.png)
拼接积木的规则如下：
- 积木片可以旋转、翻面
- 积木片边缘必须完全吻合才能拼接在一起
- **每片积木片 `shapes[i]` 的中心点在拼接时必须处于正方体对应面的中心点**
例如 `3*3`、`4*4` 的积木片的中心点如图所示（红色点）：
![middle_img_v2_c2d91eb5-9beb-4c06-9726-f7dae149d86g.png](https://pic.leetcode.cn/1650509082-wObiEp-middle_img_v2_c2d91eb5-9beb-4c06-9726-f7dae149d86g.png){:height="150px"}
请返回这 6 片积木能否拼接成一个**严丝合缝的正方体**且每片积木正好对应正方体的一个面。
**注意：**
- 输入确保每片积木均无空心情况（即输入数据保证对于大小 `N*N` 的 `shapes[i]`，内部的 `(N-2)*(N-2)` 的区域必然均为 1）
- 输入确保每片积木的所有 `1` 位置均连通
**示例 1：**
>输入：`shapes = [["000","110","000"],["110","011","000"],["110","011","110"],["000","010","111"],["011","111","011"],["011","010","000"]]`
>
>输出：`true`
>
>解释：
![cube.gif](https://pic.leetcode.cn/1616125823-hkXAeN-cube.gif)
**示例 2：**
>输入：`shapes = [["101","111","000"],["000","010","111"],["010","011","000"],["010","111","010"],["101","111","010"],["000","010","011"]]`
>
>输出：`false`
>
>解释：
>由于每片积木片的中心点在拼接时必须处于正方体对应面的中心点，积木片 `["010","011","000"]` 不能作为 `["100","110","000"]` 使用，因此无法构成正方体
**提示：**
- `shapes.length == 6`
- `shapes[i].length == shapes[j].length`
- `shapes[i].length == shapes[i][j].length`
- `3 <= shapes[i].length <= 10`

```

## English Description

There are `6` pieces of blocks (each with thickness `1`). The shape of the `i`-th block is described by `shapes[i]`: `1` means the position is occupied, `0` means it is hollow.

Rules for assembling:
- A block piece can be **rotated** and **flipped over**.
- Two pieces can be joined only when their edges fit together perfectly.
- When placed, the **center point** of each `shapes[i]` must lie at the center of the cube face it corresponds to.

Return whether these 6 pieces can form a **perfect cube** with each piece exactly one face of the cube.

**Note:**
- Every block is guaranteed to have no hollow interior: for an `N*N` `shapes[i]`, the inner `(N-2)*(N-2)` region is all `1`s.
- All `1` positions of every block are guaranteed connected.

**Example 1:**
```
Input: shapes = [["000","110","000"],["110","011","000"],["110","011","110"],["000","010","111"],["011","111","011"],["011","010","000"]]
Output: true
```
**Example 2:**
```
Input: shapes = [["101","111","000"],["000","010","111"],["010","011","000"],["010","111","010"],["101","111","010"],["000","010","011"]]
Output: false
```

**Constraints:**
- `shapes.length == 6`
- All `shapes[i]` have the same side length `N`
- `3 <= N <= 10`

## Solution Approach

Model the cube of side length `n` with integer grid coordinates `(x,y,z)` for every unit surface cell. Six `n*n` pieces must cover exactly the cube's outer surface: the total number of `1`s must equal `2n^2 + 4(n-1)(n-2)` (the six `n^2` faces minus the over-counted edges and corners); otherwise it is immediately impossible.

**Bitmask DP / search:**
- Encode each placement of a piece as a bitmask over the `n^3`-bit coordinate space (which surface cells it occupies).
- For each piece, enumerate all **48 placements**: 2 flips × 4 rotations × 6 faces it can be glued to. Map every `1` cell of the shape onto the corresponding cube-surface coordinate and set that bit.
- Recurse by piece index: keep the set of masks reachable with the pieces used so far. The first piece is fixed to 2 flips (the whole cube may be rotated freely, halving the search). For each next piece, merge a placement only if it does **not overlap** the current covered mask (`mask & place == 0`); if the final set is non-empty the cube is constructible.

Since `n^3` can reach 1000 bits (JS 32-bit bitwise ops are insufficient), use **BigInt** for all masks.

## Solution

[SourceCode](./solution.js)
