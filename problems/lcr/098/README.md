# [LCR 098] 不同路径

## Description


```md
https://leetcode.cn/problems/2AoeFn/description/
* algorithms
* Medium (75.12%)
* Likes:    65
* Dislikes: -
* Testcase Example:  '3\n7'
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？

示例 1：
输入：m = 3, n = 7
输出：28
示例 2：
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
示例 3：
输入：m = 7, n = 3
输出：28
示例 4：
输入：m = 3, n = 3
输出：6

提示：
1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109

注意：本题与主站 62 题相同： https://leetcode.cn/problems/unique-paths/

```

## Solution

[SourceCode](./solution.js)

### English Description

There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

**Example 1:**
```
Input: m = 3, n = 7
Output: 28
```

**Example 3:**
```
Input: m = 7, n = 3
Output: 28
```

**Constraints:**
- `1 <= m, n <= 100`
- The testcases are generated such that the answer will be less than or equal to `2 * 10^9`.

> This problem is the same as LeetCode 62: Unique Paths.

### Approach (中文思路)

**动态规划 (一维滚动数组)**

- 设 `dp[j]` 为到达当前行第 `j` 列格子的路径总数。
- 机器人只能从**上方**或**左方**进入某格，故转移：`dp[j] = dp[j]（上方的值） + dp[j-1]（左方的值）`。
- 逐行滚动：初始第一行全为 1（只能一直向右）。对每一新行，从左到右更新 `dp[j]`。
- 最终 `dp[n-1]` 即到达右下角的路径数。
- 时间复杂度 O(m·n)，空间 O(n)。

> 组合数学视角：从左上到右下必须走 `(m-1)` 步下、`(n-1)` 步右，共 `m+n-2` 步中选 `m-1` 步向下，即 `C(m+n-2, m-1)`。用一维 DP 可避免大组合数溢出与精度问题。
