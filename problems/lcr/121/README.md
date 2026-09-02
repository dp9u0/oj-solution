# [LCR 121] 寻找目标值 - 二维数组

## Description


```md
https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/description/
* algorithms
* Medium (39.54%)
* Likes:    1041
* Dislikes: -
* Testcase Example:  '[[2,3,6,8],[4,5,8,9],[5,9,10,12]]\n8'
m*n 的二维数组 plants 记录了园林景观的植物排布情况，具有以下特性：
每行中，每棵植物的右侧相邻植物不矮于该植物；
每列中，每棵植物的下侧相邻植物不矮于该植物。

请判断 plants 中是否存在目标高度值 target。

示例 1：
输入：plants = [[2,3,6,8],[4,5,8,9],[5,9,10,12]], target = 8
输出：true

示例 2：
输入：plants = [[1,3,5],[2,5,7]], target = 4
输出：false

提示：
0 <= n <= 1000
0 <= m <= 1000
注意：本题与主站 240 题相同：https://leetcode.cn/problems/search-a-2d-matrix-ii/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The `m*n` 2D array `plants` records plant arrangement with these properties: in each row, the plant right of a plant is not shorter than it; in each column, the plant below is not shorter than it. Determine whether a plant of height `target` exists.

**Example 1:** `plants = [[2,3,6,8],[4,5,8,9],[5,9,10,12]], target = 8` → `true`
**Example 2:** `plants = [[1,3,5],[2,5,7]], target = 4` → `false`

**Constraints:** up to 1000×1000. Note: same as LeetCode 240.

---

## Approach

Since both rows and columns are sorted ascending, **start at the top-right corner**:

- If the cell equals `target`, return true.
- If `target < cell`, move **left** (whole column below is larger).
- If `target > cell`, move **down** (whole row to the left is smaller).

Each step eliminates a row or column → `O(m + n)` time.
