# [LCS 03] 主题空间

## Description


```md
https://leetcode.cn/problems/YesdPw/description/
* algorithms
* Medium (46.13%)
* Likes:    39
* Dislikes: -
* Testcase Example:  '["110","231","221"]'
「以扣会友」线下活动所在场地由若干主题空间与走廊组成，场地的地图记作由一维字符串型数组 `grid`，字符串中仅包含 `"0"～"5"` 这 6 个字符。地图上每一个字符代表面积为 1 的区域，其中 `"0"` 表示走廊，其他字符表示主题空间。相同且连续（连续指上、下、左、右四个方向连接）的字符组成同一个主题空间。
假如整个 `grid` 区域的外侧均为走廊。请问，不与走廊直接相邻的主题空间的最大面积是多少？如果不存在这样的空间请返回 `0`。
**示例 1：**
>输入：`grid = ["110","231","221"]`
>
>输出：`1`
>
>解释：4 个主题空间中，只有 1 个不与走廊相邻，面积为 1。
>![image.png](https://pic.leetcode.cn/1613708145-rscctN-image.png)
**示例 2：**
>输入：`grid = ["11111100000","21243101111","21224101221","11111101111"]`
>
>输出：`3`
>
>解释：8 个主题空间中，有 5 个不与走廊相邻，面积分别为 3、1、1、1、2，最大面积为 3。
>![image.png](https://pic.leetcode.cn/1613707985-KJyiXJ-image.png)
**提示：**
- `1 <= grid.length <= 500`
- `1 <= grid[i].length <= 500`
- `grid[i][j]` 仅可能为 `"0"～"5"`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The venue map is `grid` of chars `"0".."5"`. Each cell is area 1; `"0"` is a corridor, other chars are theme spaces. Cells of the **same char** connected up/down/left/right form one theme space. The area outside the grid is corridor. Find the **maximum area** of a theme space that is **not directly adjacent to a corridor**; if none, return 0.

**Example 1:** `["110","231","221"]` → `1`
**Example 2:** → `3`

**Constraints:** grid up to 500×500.

---

## Approach

**Flood fill** over same-character components (char `!= '0'`):

- For each unvisited cell with a non-corridor char, BFS collecting its equal-char 4-neighbors into a component; track `area` and whether any cell of the component borders a `'0'` or the grid boundary (outside is corridor).
- A component that never borders corridor/boundary is a candidate; take max area.

Complexity: `O(R·C)`.
