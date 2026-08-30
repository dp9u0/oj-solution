# [3938] Maximum Path Intersection Sum in a Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-path-intersection-sum-in-a-grid/description/)

* algorithms
* Medium (25.58%)
* Likes:    80
* Dislikes: 3
* Testcase Example:  '[[1,2,0,-3],[1,-2,1,0],[-4,2,-1,3],[3,-3,3,-2],[-1,-5,0,1]]'

```md
You are given an m x n integer matrix grid.
Two players move across the grid:

Player 1 starts at the top-left cell (0, 0) and can move only right or down. Their destination is the bottom-right cell (m - 1, n - 1).
Player 2 starts at the bottom-left cell (m - 1, 0) and can move only right or up. Their destination is the top-right cell (0, n - 1).

Each player must choose a valid path from their respective starting cell to their destination.
A cell is called shared if it belongs to both chosen paths.
Return an integer denoting the maximum possible sum of values of all shared cells.

Example 1:
​​​​​​​​​​​​​​​​​​​​​

Input: grid = [[1,2,0,-3],[1,-2,1,0],[-4,2,-1,3],[3,-3,3,-2],[-1,-5,0,1]]
Output: 4
Explanation:
The diagram shows one optimal choice of paths.

Player 1 follows the red/purple path from the top-left cell to the bottom-right cell:

(0, 0) &rarr; (1, 0) &rarr; (2, 0) &rarr; (2, 1) &rarr; (2, 2) &rarr; (2, 3) &rarr; (3, 3) &rarr; (4, 3)


Player 2 follows the blue/purple path from the bottom-left cell to the top-right cell:

(4, 0) &rarr; (4, 1) &rarr; (3, 1) &rarr; (2, 1) &rarr; (2, 2) &rarr; (2, 3) &rarr; (1, 3) &rarr; (0, 3)


The shared cells are (2, 1), (2, 2), and (2, 3).
The sum is 2 + (-1) + 3 = 4, which is the maximum possible sum.


Example 2:


Input: grid = [[4,-2,-3],[-1,-3,-1],[-4,2,-1]]
Output: 3
Explanation:
One optimal pair of paths is shown in the diagram.

Player 1 follows the red/purple path:

(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (1, 2) &rarr; (2, 2)


Player 2 follows the blue/purple path:

(2, 0) &rarr; (1, 0) &rarr; (0, 0) &rarr; (0, 1) &rarr; (0, 2)


The shared cells are (0, 0) and (1, 0).
The sum is 4 + (-1) = 3, which is the maximum possible.



Constraints:

m == grid.length
n == grid[i].length
2 <= m, n <= 1000
4 <= m * n <= 5 * 105
-100 <= grid[i][j] <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

玩家 1 从 (0,0) 只能右/下走到 (m−1,n−1)；玩家 2 从 (m−1,0) 只能右/上走到 (0,n−1)。各自选一条路径，"共享格" = 两条路径都经过的格。返回共享格值之和的最大值。

示例：5×4 示例 → `4`（共享 (2,1),(2,2),(2,3)）

约束：m·n ≤ 5×10^5，值 ∈ [−100, 100]

## 解题思路

**结构定理**（按列区间 + 行单调性可证）：两条路径的共享格集只能是

1. **同一行的连续段**（长度 ≥ 2）——恒可实现；
2. **同一列的连续段**（长度 ≥ 2）——恒可实现；
3. **单个格子**——需四条相邻接续格（P1 入/出、P2 入/出，含起终点豁免）能选出**互不相同**的一组（Hall 式小匹配）；如 2×2 的 (0,0) 不可行。

证明要点：相邻列都有共享格 ⟹ 各列恰一格且同行；跨多列的横向分量为同一行且中间列也被覆盖（P1 行不减/P2 行不增夹逼）；竖向多段、横竖混合均被单调性逼成单格。

故答案 = max(每行 Kadane(长度≥2), 每列 Kadane(长度≥2), 最大可行单格)。O(mn) + 单格 O(81) 检查。与全路径对枚举暴力对拍 400 组一致。