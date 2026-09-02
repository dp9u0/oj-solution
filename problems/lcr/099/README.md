# [LCR 099] 最小路径和

## Description


```md
https://leetcode.cn/problems/0i0mDW/description/
* algorithms
* Medium (72.42%)
* Likes:    82
* Dislikes: -
* Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
说明：一个机器人每次只能向下或者向右移动一步。

示例 1：
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
示例 2：
输入：grid = [[1,2,3],[4,5,6]]
输出：12

提示：
m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100

注意：本题与主站 64 题相同： https://leetcode.cn/problems/minimum-path-sum/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an `m x n` grid of non-negative integers, find the path from top-left to bottom-right minimizing the sum of its values. Only move down or right.

**Example:** `[[1,3,1],[1,5,1],[4,2,1]]` → `7`

**Constraints:** ≤ 200×200. Note: same as LeetCode 64.

---

## Approach

**DP in place**: `grid[i][j] += min(grid[i-1][j], grid[i][j-1])` (first row/col handle separately). Return bottom-right.

Complexity: `O(m·n)` time, `O(1)` extra space.
