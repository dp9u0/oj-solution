# [3648] Minimum Sensors to Cover Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-sensors-to-cover-grid/description/)

* algorithms
* Medium (68.71%)
* Likes:    52
* Dislikes: 9
* Testcase Example:  '5\n5\n1'

```md
You are given n &times; m grid and an integer k.
A sensor placed on cell (r, c) covers all cells whose Chebyshev distance from (r, c) is at most k.
The Chebyshev distance between two cells (r1, c1) and (r2, c2) is max(
r1 &minus; r2
,
c1 &minus; c2
).
Your task is to return the minimum number of sensors required to cover every cell of the grid.

Example 1:

Input: n = 5, m = 5, k = 1
Output: 4
Explanation:
Placing sensors at positions (0, 3), (1, 0), (3, 3), and (4, 1) ensures every cell in the grid is covered. Thus, the answer is 4.

Example 2:

Input: n = 2, m = 2, k = 2
Output: 1
Explanation:
With k = 2, a single sensor can cover the entire 2 * 2 grid regardless of its position. Thus, the answer is 1.


Constraints:

1 <= n <= 103
1 <= m <= 103
0 <= k <= 103


```

## 中文翻译

给定 n×m 网格和整数 k，传感器放在 (r,c) 覆盖切比雪夫距离不超过 k 的所有格子（即 (2k+1)×(2k+1) 的正方形）。求覆盖整个网格最少需要多少个传感器。

## 解题思路

每个传感器覆盖 (2k+1)×(2k+1) 的正方形区域。最优策略是沿行列方向每隔 (2k+1) 格放一个传感器，答案为 ceil(n/(2k+1)) × ceil(m/(2k+1))。

## Solution

[SourceCode](./solution.js)
